import { PLANETS_IMAGES_URLS } from "@/constants";

export function getPlanetImageUrl(name: string): string {
  return PLANETS_IMAGES_URLS.get(name.toLowerCase()) ?? PLANETS_IMAGES_URLS.get("default")!;
}
