import artJson from "../../content/art.json";

export type ArtPiece = {
  file: string;
  title: string;
  tags?: string[];
};

export type ArtContent = {
  pieces: ArtPiece[];
};

export const artPieces = (artJson as ArtContent).pieces;

export function artSrc(file: string): string {
  return `/MyArt/${encodeURIComponent(file)}`;
}
