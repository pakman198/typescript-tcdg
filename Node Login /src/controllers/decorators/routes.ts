import 'reflect-metadata';
import { RequestHandler } from 'express';

import { Methods, MetadataKeys } from '../../Constants';

// this interface helps us protect the controllers to only
// use methods that expect a reques and response object and
// and don't return anything
interface RouteHandlerDescriptor extends PropertyDescriptor {
  value?: RequestHandler
}

function routeBinder(method: string) {
  return function (path: string) {
    return function(target: any, key: string, desc: RouteHandlerDescriptor) {
      Reflect.defineMetadata(MetadataKeys.PATH, path, target, key);
      Reflect.defineMetadata(MetadataKeys.METHOD, method, target, key);
    }
  }
}

export const get = routeBinder(Methods.GET);
export const post = routeBinder(Methods.POST);