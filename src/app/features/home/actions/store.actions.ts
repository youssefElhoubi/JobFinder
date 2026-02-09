import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Store } from '../models/store.model';

export const StoreActions = createActionGroup({
  source: 'Store/API',
  events: {
    'Load Stores': props<{ stores: Store[] }>(),
    'Add Store': props<{ store: Store }>(),
    'Upsert Store': props<{ store: Store }>(),
    'Add Stores': props<{ stores: Store[] }>(),
    'Upsert Stores': props<{ stores: Store[] }>(),
    'Update Store': props<{ store: Update<Store> }>(),
    'Update Stores': props<{ stores: Update<Store>[] }>(),
    'Delete Store': props<{ id: string }>(),
    'Delete Stores': props<{ ids: string[] }>(),
    'Clear Stores': emptyProps(),
  }
});
