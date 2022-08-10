export const setToStorage = (key: string, value: string) => {
  let storedItem;

  if (typeof window !== "undefined") {
    storedItem = window.localStorage.setItem(key, JSON.stringify(value));
  }
  return storedItem;
};

export const getFromStorage = (key: string) => {
  let storedItem;

  if (typeof window !== "undefined") {
    storedItem = window.localStorage.getItem(key);
  }
  return storedItem;
};

