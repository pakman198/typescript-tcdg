import 'reflect-metadata';

import { Methods, MetadataKeys } from '../../Constants';

function routeBinder(method: string) {
  return function (path: string) {
    return function(target: any, key: string, desc: PropertyDescriptor) {
      Reflect.defineMetadata(MetadataKeys.PATH, path, target, key);
      Reflect.defineMetadata(MetadataKeys.PATH, method, target, key);
    }
  }
}

export const get = routeBinder(Methods.GET);
export const post = routeBinder(Methods.POST);