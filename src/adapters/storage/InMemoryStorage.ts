import { IStorage } from "@/interfaces";

export class InMemoryStorage implements IStorage {
  private storage: Map<string, string>;

  constructor() {
    this.storage = new Map<string, string>();
  }

  get(key: string): string | null {
    return this.storage.get(key) ?? null;
  }

  set(key: string, value: string): void {
    this.storage.set(key, value);
  }

  remove(key: string): void {
    this.storage.delete(key);
  }

  clear(): void {
    this.storage.clear();
  }
}
