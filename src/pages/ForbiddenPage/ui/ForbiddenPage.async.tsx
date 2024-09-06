import { FC, lazy } from 'react';

export const ForbiddenPageAsync = lazy<FC>(() => import('./ForbiddenPage'));
