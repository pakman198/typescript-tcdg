import 'reflect-metadata';

import { AppRouter } from '../../AppRouter';
import { Methods, MetadataKeys } from '../../Constants';

export function controller(routePrefix: string) {
  const router = AppRouter.getInstance();

  return function(target: Function) {
    for(let key in target.prototype) {
      const routeHandler = target.prototype[key];
      const path = Reflect.getMetadata(MetadataKeys.PATH, target.prototype, key);
      const method: Methods = Reflect.getMetadata(MetadataKeys.METHOD, target.prototype, key);

      if(path) {
        router[method](`${routePrefix}${path}`, routeHandler);
      }
    }
  }
}