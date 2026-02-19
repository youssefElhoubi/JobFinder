import { CanActivateChildFn } from '@angular/router';
import { authGuard } from '../active/auth-guard';

export const authChiledGuard: CanActivateChildFn = (childRoute, state) => {
  return authGuard(childRoute, state);
};
