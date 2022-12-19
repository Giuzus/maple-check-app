export default class CharacterService {
    static async fetchCharacterInfo(character: string) {
        try {
            const response = await fetch(`https://api.allorigins.win/raw?url=` + encodeURIComponent(`https://api.maplestory.gg/v2/public/character/gms/${character}`));
            if (response.ok) {
                const json = await response.json();
                return json["CharacterData"];
            }
        }
        catch {
            console.error(`Error loading ${character} info`);
        }
    }
}