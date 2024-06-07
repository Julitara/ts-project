// <Page address, scroll position>
export type ScrollShema = Record<string, number>

export interface ScrollSaveShema {
    scroll: ScrollShema;
}