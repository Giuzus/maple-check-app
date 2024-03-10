import axios from "axios";
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export type Character = {
  name: string;
  error?: boolean;
  data?: {
    CharacterImageURL: string;
    Class: string;
    Level: number;
    Server: string;
  };
};

function addCharacter(characters: Character[], charName: string): Character[] {
  return [...characters, { name: charName }];
}

async function fetchCharacterData(
  characters: Character[],
  charName: string
): Promise<Character[]> {
  try {
    const response = await axios.get(
      `https://api.allorigins.win/raw?url=` +
        encodeURIComponent(
          `https://api.maplestory.gg/v2/public/character/gms/${charName}`
        )
    );

    if (response.data.status === "Error")
      throw new Error(response.data.message);

    return characters.map((char) =>
      char.name === charName
        ? { ...char, data: response.data.CharacterData }
        : char
    );
  } catch {
    console.error(`Error loading ${charName} info`);
    return characters.map((char) =>
      char.name === charName ? { ...char, error: true } : char
    );
  }
}

function removeCharacter(
  characters: Character[],
  charName: string
): Character[] {
  return characters.filter((char) => char.name !== charName);
}

export const charactersAtom = atomWithStorage<Character[]>("characters", []);
export const fetchCharacterDataAtom = atom(
  null,
  async (get, set, charName: string) => {
    set(
      charactersAtom,
      await fetchCharacterData(get(charactersAtom), charName)
    );
  }
);
export const addCharacterAtom = atom(
  null,
  async (get, set, charName: string) => {
    set(charactersAtom, addCharacter(get(charactersAtom), charName));
    set(fetchCharacterDataAtom, charName);
  }
);
export const removeCharacterAtom = atom(null, (get, set, charName: string) =>
  set(charactersAtom, removeCharacter(get(charactersAtom), charName))
);
