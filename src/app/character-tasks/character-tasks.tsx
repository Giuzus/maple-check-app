import React, { FC, useState } from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import TasksService, { Task } from '../../services/tasks/tasks.service';
import CharacterSelectors from '../../store/characters/charactersSelectors';
import styles from './character-tasks.module.css';
import { RootState, store } from '../../store/store';
import { CharacterTask, toggleTask } from '../../store/characters/charactersSlice';
import { Form } from 'react-bootstrap';
let cx = classNames.bind(styles);

interface CharacterTasksProps { }


//TODO: Change to always display account tasks at the bottom.

const CharacterTasks: FC<CharacterTasksProps> = () => {
  const selectedCharacter = useSelector(CharacterSelectors.getSelectedCharacter);
  const characterTasks = useSelector((state: RootState) => CharacterSelectors.getCharacterTasks(state, selectedCharacter?.id!!))
  const accountTasks = useSelector(CharacterSelectors.getAccountTasks)

  const [filter, setFilter] = useState("");

  const tasks = TasksService.getFilteredTasks(filter);

  const handleTaskChange = (taskName: string, character: boolean) => {
    store.dispatch(toggleTask({ characterId: character ? selectedCharacter?.id : undefined, task: taskName }))
  }

  const renderType = (type: string, tasks: any, taskInfo: { [key: string]: CharacterTask }, character: boolean) => {
    return (
      <>
        <h3>{type}</h3>
        {
          TasksService.categories.map(category => {

            //no tasks for this category
            if (!tasks[type.toLowerCase()][category.toLowerCase()]) return;

            return (
              <div key={category}>
                {renderCategory(category, tasks[type.toLowerCase()], taskInfo, character)}
              </div>
            )
          })
        }
      </>
    )
  }

  const renderCategory = (category: string, tasks: any, taskInfo: { [key: string]: CharacterTask }, character: boolean) => {
    return (
      <>
        <h4>{category}</h4>
        {renderTasks(tasks[category.toLowerCase()], taskInfo, character)}
      </>
    )
  }

  const renderTasks = (tasks: Task[], taskInfo: { [key: string]: CharacterTask }, character: boolean) => {
    //return if tasks is undefined or empty
    if (!tasks || tasks.length === 0) return;

    return (
      tasks.map((task: Task) => {
        //if selected character is null, then the task is account wide
        const taskComplete = taskInfo[task.task]?.complete
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
              onChange={() => handleTaskChange(task.task, character)}>
            </input>
          </div>
        )
      })
    )
  }

  return (
    <div className={styles.characterTasks} data-testid="CharacterTasks">
      {selectedCharacter &&
        <>
          <h1>{selectedCharacter.name}</h1>
          <Form.Control
            type="text"
            placeholder="Filter tasks"
            onChange={(e) => setFilter(e.target.value)}
            value={filter}
            id="filter"
            className={styles.filter}
          />

          {tasks["character"] &&
            <>
              <h2>Character tasks</h2>
              {
                TasksService.types.map(type => {

                  //no tasks for this type
                  if (!tasks["character"][type.toLowerCase()]) return;

                  return (
                    <div key={type}>
                      {renderType(type, tasks["character"], characterTasks, true)}
                    </div>
                  )
                })
              }
            </>
          }

          <hr />

          {tasks["account"] &&
            <>
              <h2>Account tasks</h2>
              {
                TasksService.types.map(type => {

                  //no tasks for this type
                  if (!tasks["account"][type.toLowerCase()]) return;
                  return (
                    <div key={type}>
                      {renderType(type, tasks["account"], accountTasks, false)}
                    </div>
                  )
                })
              }
            </>
          }

        </>
      }
    </div>
  )
};

export default CharacterTasks;
