import { WordNotFoundError } from "../dictionary.errors";
import { CreateWordDto } from "../dictionary.types";
import { Word } from "../word";
import { IWordProvider, WordToFetch } from "./word.providers.types";

export class InMemoryWordProvider implements IWordProvider {
  private _wordSet: Set<CreateWordDto> = new Set([]);
  private _wordArray: CreateWordDto[] = new Array();

  setData(words: CreateWordDto[]): InMemoryWordProvider {
    this._wordSet = new Set(words);
    this._wordArray = Array.from(this._wordSet);
    return this;
  }

  // TODO: any is really ba, try to avoid it if possible !
  fetch(fetchedWord: WordToFetch): any {
    const delay = 300;
    const foundWord = this._wordArray.find(
      (word) => word.name == fetchedWord.name
    );

    // TODO: I don't think it should be your provider responsiblity to return a word
    //    but rather the word fetched / word found
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (foundWord) resolve(new Word(foundWord));
        else reject(new WordNotFoundError(fetchedWord.name));
      }, delay);
    });
  }
}
