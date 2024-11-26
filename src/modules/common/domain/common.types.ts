export type OnClickButton = (
  e: Event
) => void | Promise<void> | (() => void) | ((e: Event) => void);
