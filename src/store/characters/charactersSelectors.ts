import { RootState } from "../store";

export default class CharacterSelectors {

    //TODO: add tests for these selectors
    static getCharacters = (state: RootState) => state.charactersState.characters;

    static getSelectedCharacter = (state: RootState) => state.charactersState.selectedCharacter;

    static getCharacterById = (state: RootState, characterId: string) => state.charactersState.characters.find((char) => char.id === characterId);

    static getCharacterTasks = (state: RootState, characterId: string) => {
        const character = CharacterSelectors.getCharacterById(state, characterId);
        return character ? character.tasks : {};
    }

    static getCharacterTask = (state: RootState, characterId: string, task: string) => {
        const tasks = CharacterSelectors.getCharacterTasks(state, characterId);
        return tasks[task] || {};
    }

    static getCharacterTaskComplete = (state: RootState, characterId: string, task: string) => {
        const characterTask = CharacterSelectors.getCharacterTask(state, characterId, task);
        return characterTask.complete;
    }

    static getCharacterApiData = (state: RootState, characterId: string) => {
        const character = CharacterSelectors.getCharacterById(state, characterId);
        return character ? character.apiData : {};
    }

    static getAccountTasks = (state: RootState) => state.charactersState.accountTasks;

}