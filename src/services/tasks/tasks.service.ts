import tasks from "../../assets/tasks.json";

export interface Task {
    task: string;
    image: string;
}

export default class TasksService {

    static readonly scope = ["Character", "Account"];
    static readonly types = ["Daily", "Weekly"];
    static readonly categories = ["Side", "Quests", "Bosses"];

    public static getFilteredTasks(filter: string): any {
        
        let filteredTasks: any = {};

        this.scope.map(x => x.toLowerCase()).forEach(scope => {
            this.types.map(x => x.toLowerCase()).forEach(type => {
                this.categories.map(x => x.toLowerCase()).forEach(category => {

                    const filtered = (tasks as any)[scope][type][category]?.filter((task: Task) => task.task.toLowerCase().includes(filter.toLowerCase()))

                    if(!filtered || filtered?.length <= 0) return;

                    if (!filteredTasks[scope]) {
                        filteredTasks[scope] = {};
                    }
                    if (!filteredTasks[scope][type]) {
                        filteredTasks[scope][type] = {};
                    }
                    if (!filteredTasks[scope][type][category]) {
                        filteredTasks[scope][type][category] = [];
                    }

                    filteredTasks[scope][type][category] = filtered;
                });
            });
        });

        return filteredTasks;
    }
}