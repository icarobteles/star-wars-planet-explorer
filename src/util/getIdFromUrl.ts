// Função para extrair o ID do planeta a partir da URL
export function getIdFromUrl(url: string): string {
  const urlParts = url.split("/");
  return urlParts[urlParts.length - 2];
}
