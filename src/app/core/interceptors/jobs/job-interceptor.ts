import { HttpInterceptorFn } from '@angular/common/http';
import {environment} from "../../../../environment/environment"
export const jobInterceptor: HttpInterceptorFn = (req, next) => {
  if(req.url.includes("api")){
    const newreq = req.clone({
      url :req.url +`&app_key=${environment.apiKey}&app_id=${environment.appId}`
    })
    return next(newreq);
  }
  return next(req);
};
