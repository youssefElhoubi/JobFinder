import { HttpInterceptorFn } from '@angular/common/http';

export const saveJobInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
