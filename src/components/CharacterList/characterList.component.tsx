import { useAtom } from "jotai";
import {
  charactersAtom,
  removeCharacterAtom,
} from "../../store/character.store";
import CharacterInfo from "../CharacterInfo/characterInfo.component";

function CharacterList() {
  const [characters] = useAtom(charactersAtom);
  const [, removeCharacter] = useAtom(removeCharacterAtom);
  return (
    <ul>
      {characters.map((char) => (
        <li key={char.name} className="flex p-4">
          <CharacterInfo character={char} />
          <button className="btn" onClick={() => removeCharacter(char.name)}>
            X
          </button>
        </li>
      ))}
    </ul>
  );
}

export default CharacterList;
