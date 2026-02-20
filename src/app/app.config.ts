import { ApplicationConfig, provideBrowserGlobalErrorListeners, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { JobFeature } from './core/Stores/Jobs/job.feature';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { jobInterceptor } from './core/interceptors/jobs/job-interceptor';
import { urlEffect } from './core/Stores/url/url.effect';
import { urlFeature } from './core/Stores/url/url.feature';
import { pagechangeEffect } from './core/Stores/url/pagechange.effect';
import { saveJobInterceptor } from './core/interceptors/jobs/save-job-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(
      withInterceptors([
        jobInterceptor,
        saveJobInterceptor
      ])
    ),
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideStore({
      [JobFeature.name]: JobFeature.reducer,
      [urlFeature.name]: urlFeature.reducer
    }),
    provideEffects({urlEffect,pagechangeEffect}),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
]
};
