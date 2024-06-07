import { createSelector } from '@reduxjs/toolkit';
import { StateShema } from 'app/providers/StoreProvider';

export const getScrollSave = (state: StateShema) => {
    return state?.scrollSave.scroll;
};

export const getScrollSaveByPath = createSelector(
    getScrollSave,
    (state: StateShema, path: string) => path,
    (scroll, path) => scroll[path] || 0
);