export type PartOfSpeech =
  | "noun"
  | "pronoun"
  | "verb"
  | "adjective"
  | "adverb"
  | "preposition"
  | "conjunction"
  | "interjection";

export type WordData = { definition: string };

export type CreateWordDto = {
  name: string;
  type: PartOfSpeech;
  data: WordData;
};

export type LookupResult = {
  total: number;
  found: number;
  missing: number;
};