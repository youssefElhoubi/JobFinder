import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const user = JSON.parse(localStorage.getItem("user") || "null");
  
  if (!user) {
    return router.navigateByUrl("");
  }
  return true;
};
