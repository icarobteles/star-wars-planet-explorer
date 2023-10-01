import { IStorage } from "@/interfaces";

export function localStorageApp(): IStorage {
  const get = (key: string): string | null => {
    return localStorage.getItem(key);
  };

  const set = (key: string, value: string): void => {
    localStorage.setItem(key, value);
  };

  const remove = (key: string): void => {
    localStorage.removeItem(key);
  };

  const clear = (): void => {
    localStorage.clear();
  };

  return { get, set, remove, clear };
}
