import React, { FC } from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import TasksService, { Task } from '../../services/tasks/tasks.service';
import CharacterSelectors from '../../store/characters/charactersSelectors';
import styles from './character-tasks.module.css';
import { RootState, store } from '../../store/store';
import { toggleTask } from '../../store/characters/charactersSlice';
let cx = classNames.bind(styles);

interface CharacterTasksProps { }



const CharacterTasks: FC<CharacterTasksProps> = () => {
  const selectedCharacter = useSelector(CharacterSelectors.getSelectedCharacter);

  const characterTasks = useSelector((state: RootState) => CharacterSelectors.getCharacterTasks(state, selectedCharacter?.id!!))

  const accountTasks = useSelector(CharacterSelectors.getAccountTasks);

  const selectedTasks = selectedCharacter ? characterTasks : accountTasks;

  const tasks = TasksService.getTasks(selectedCharacter !== null);

  //TODO: refactor this to be more dynamic (loop type and category)
  const dailySide = tasks?.daily?.side as Task[];
  const dailyQuests = tasks?.daily?.quests as Task[];
  const dailyBosses = tasks?.daily?.bosses as Task[];

  const weeklySide = tasks?.weekly?.side as Task[];
  const weeklyQuests = tasks?.weekly?.quests as Task[];
  const weeklyBosses = tasks?.weekly?.bosses as Task[];


  const handleTaskChange = (taskName: string) => {
    store.dispatch(toggleTask({ characterId: selectedCharacter?.id, task: taskName }))
  }

  const renderTasks = (tasks: Task[]) => {

    //return if tasks is undefined or empty
    if (!tasks || tasks.length === 0) return;

    return (
      tasks.map((task: Task) => {

        //if selected character is null, then the task is account wide
        const taskComplete = selectedTasks[task.task]?.complete
        const wrapperClass = cx([styles.taskItem], { [styles.completed]: taskComplete });
        const labelClass = cx([styles.taskName], { [styles.completed]: taskComplete });
        return (
          <div className={wrapperClass} key={task.task}>
            <img
              className={styles.taskImage}
              src={task.image}
              alt={`${task.task}`}>
            </img>
            <label
              className={labelClass}
              htmlFor={task.task} >
              {task.task}
            </label>
            <input
              className={styles.taskCheckbox}
              type="checkbox"
              id={task.task}
              name={task.task}
              data-testid={task.task}
              checked={taskComplete}
              onChange={() => handleTaskChange(task.task)}>
            </input>
          </div>
        )
      })
    )
  }

  return (
    <div className={styles.characterTasks} data-testid="CharacterTasks">

      {!selectedCharacter ?
        <h1>Account Wide Tasks</h1>
        :
        <h1>{selectedCharacter.name}</h1>
      }

      {!selectedCharacter ?
        <>
          <h2>Daily</h2>
          {renderTasks(dailySide)}

          <h2>Weekly</h2>
          {renderTasks(weeklySide)}
        </>
        :
        <>
          <h2>Daily</h2>
          <h3>Side</h3>
          {renderTasks(dailySide)}
          <h3>Quests</h3>
          {renderTasks(dailyQuests)}
          <h3>Bosses</h3>
          {renderTasks(dailyBosses)}

          <h2>Weekly</h2>
          <h3>Side</h3>
          {renderTasks(weeklySide)}
          <h3>Quests</h3>
          {renderTasks(weeklyQuests)}
          <h3>Bosses</h3>
          {renderTasks(weeklyBosses)}
        </>
      }
    </div>
  )
};

export default CharacterTasks;
