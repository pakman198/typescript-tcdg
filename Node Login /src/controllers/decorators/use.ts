import 'reflect-metadata'
import { RequestHandler } from 'express';

import { MetadataKeys } from '../../Constants';

export function use(middleware: RequestHandler) {
  return function(target: any, key: string, desc: PropertyDescriptor) {
    const middlewares = Reflect.getMetadata(MetadataKeys.MIDDLEWARE, target, key) || [];

    middlewares.push(middleware);
    Reflect.defineMetadata(MetadataKeys.MIDDLEWARE, middlewares, target, key);
  }
}