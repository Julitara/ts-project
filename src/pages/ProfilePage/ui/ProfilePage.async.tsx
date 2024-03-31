import { lazy } from 'react';

export default {};
export const ProfilePageAsync = lazy(
    () =>
        new Promise((resolve) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            setTimeout(() => resolve(import('./ProfilePage')), 1500);
        }),
);