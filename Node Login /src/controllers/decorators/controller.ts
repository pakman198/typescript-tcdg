import 'reflect-metadata';
import { RequestHandler, Request, Response, NextFunction } from 'express';

import { AppRouter } from '../../AppRouter';
import { Methods, MetadataKeys } from '../../Constants';

function bodyValidators(keys: string[]): RequestHandler {
  return function(req: Request, res: Response, next: NextFunction) {
    if(!req.body) {
      res.status(422).send('Invalid Request!');

      return;
    }

    for(let key of keys) {
      if(!req.body[key]) {
        res.status(422).send(`Missing property: ${key}`);
  
        return;
      }
    }

    next();
  }
}

export function controller(routePrefix: string) {
  const router = AppRouter.getInstance();

  return function(target: Function) {
    for(let key in target.prototype) {
      const routeHandler = target.prototype[key];
      const path = Reflect.getMetadata(MetadataKeys.PATH, target.prototype, key);
      const method: Methods = Reflect.getMetadata(MetadataKeys.METHOD, target.prototype, key);
      const middlewares = Reflect.getMetadata(MetadataKeys.MIDDLEWARE, target.prototype, key) || [];
      const requiredBodyProps = Reflect.getMetadata(MetadataKeys.VALIDATOR, target.prototype, key) || [];
      const validator = bodyValidators(requiredBodyProps);

      if(path) {
        router[method](`${routePrefix}${path}`, ...middlewares, validator, routeHandler);
      }
    }
  }
}