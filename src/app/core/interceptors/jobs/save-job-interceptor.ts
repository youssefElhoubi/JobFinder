import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Redirect } from '../../../shared/service/redirect';

export const saveJobInterceptor: HttpInterceptorFn = (req, next) => {
  const redirector = inject(Redirect);
  const user = JSON.parse(localStorage.getItem("user")||"null")
  if (!user) {
    redirector.navigator("/login");
  }
  if(req.url.startsWith("3000")){
    const newRequest = req.clone({
      body:{
        ...(req.body as object || {}),
        userId:user
      }
    })
    return next(newRequest);
  }
  return next(req);
};
