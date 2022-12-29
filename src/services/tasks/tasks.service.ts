import tasks from "../../assets/tasks.json";

export interface Task {
    task: string;
    image: string;
}

export default class TasksService {

    public static getTasks(character: boolean): any {
        if (character) {
            return tasks["character"]
        }
        else {
            return tasks["account"]
        }
    }
}