import { useAtom } from "jotai";
import { useState } from "react";
import { addCharacterAtom } from "../../store/character.store";

function AddCharacter() {
  const [, addCharacter] = useAtom(addCharacterAtom);
  const [character, setCharacter] = useState<string>("");

  return (
    <div className="join">
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered join-item"
        onChange={(e) => setCharacter(e.target.value)}
        value={character}
      />
      <button
        className="btn join-item"
        onClick={() => {
          if (!character) return;

          addCharacter(character);
          setCharacter("");
        }}
      >
        Add
      </button>
    </div>
  );
}

export default AddCharacter;
