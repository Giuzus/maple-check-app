import { Character } from "../../store/character.store";

type CharacterInfoProps = {
  character: Character;
};

function CharacterInfo({ character }: CharacterInfoProps) {
  return (
    <div className="flex flex-col">
      <span>{character.name}</span>

      {!character.error ? (
        character.data ? (
          <>
            <span>{character.data?.Class}</span>
            <span>{character.data?.Level}</span>
            <span>{character.data?.Server}</span>
          </>
        ) : (
          <span>Loading...</span>
        )
      ) : (
        <span className="text-red-500">Error loading character data</span>
      )}
    </div>
  );
}

export default CharacterInfo;
