import { IStorage } from "@/interfaces";

export function inMemoryStorageApp(): IStorage {
  const storage = new Map<string, string>();

  const get = (key: string): string | null => {
    return storage.get(key) ?? null;
  };

  const set = (key: string, value: string): void => {
    storage.set(key, value);
  };

  const remove = (key: string): void => {
    storage.delete(key);
  };

  const clear = (): void => {
    storage.clear();
  };

  return { get, set, remove, clear };
}
