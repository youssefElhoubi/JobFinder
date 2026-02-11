import { ApplicationConfig, provideBrowserGlobalErrorListeners, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { JobEffect } from './core/Stores/Jobs/job.effect';
import { JobFeature } from './core/Stores/Jobs/job.feature';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideStore({
      [JobFeature.name]: JobFeature.reducer
    }),
    provideEffects({JobEffect}),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
]
};
