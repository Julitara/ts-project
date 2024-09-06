import { FC, lazy } from 'react';

export const AboutPageAsync = lazy<FC>(() => import('./AboutPage'));
