import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CharacterTasks from './character-tasks';
import { renderWithProviders } from '../../utils/test-utils';
import { RootState, store } from '../../store/store';
import { addCharacter, removeCharacter, setSelectedCharacter } from '../../store/characters/charactersSlice';
import { useSelector } from 'react-redux';


describe('<CharacterTasks />', () => {

  beforeEach(() => {
    store.dispatch(addCharacter({ name: 'Shadowÿ', tasks: {} }));
    const charId = store.getState().charactersState.characters[0].id;
    store.dispatch(setSelectedCharacter(charId));
  });

  afterEach(() => {
    const charId = store.getState().charactersState.characters[0].id;
    store.dispatch(removeCharacter(charId!!))
  });

  test('it should mount', () => {
    renderWithProviders(<CharacterTasks />);

    const characterTasks = screen.getByTestId('CharacterTasks');

    expect(characterTasks).toBeInTheDocument();
  });

  test('it should display account wide tasks for all characters', () => {
    //Arrange
    renderWithProviders(<CharacterTasks />);

    //Act
    const title = screen.getByText('Account tasks');
    const accountDailyTask = screen.getByText('Monster Park');
    const accountWeeklyTask = screen.getByText('Mu Lung Dojo');

    //Assert
    expect(title).toBeInTheDocument();
    expect(accountDailyTask).toBeInTheDocument();
    expect(accountWeeklyTask).toBeInTheDocument();

  });

  test('it should display character specific tasks when a character is selected', () => {
    //Arrange
    renderWithProviders(<CharacterTasks />);

    //Act
    const title = screen.getByText('Shadowÿ')
    const dailySide = screen.getByText('Event Coin cap')
    const dailyQuest = screen.getByText('Vanishing Journey')
    const dailyBoss = screen.getByText('Zakum')

    const weeklySide = screen.getByText('Guild culvert')
    const weeklyQuest = screen.getByText('Scrapyard')
    const weeklyBoss = screen.getByText('Chaos Zakum')

    //Assert
    expect(title).toBeInTheDocument();
    expect(dailySide).toBeInTheDocument();
    expect(dailyQuest).toBeInTheDocument();
    expect(dailyBoss).toBeInTheDocument();
    expect(weeklySide).toBeInTheDocument();
    expect(weeklyQuest).toBeInTheDocument();
    expect(weeklyBoss).toBeInTheDocument();
  });

  test('it should change background color and strikethrough when checking a task', () => {
    //Arrange
    renderWithProviders(<CharacterTasks />);
    const checkbox = screen.getByLabelText('Event Coin cap');
    const label = screen.getByText('Event Coin cap');
    const wrapper = checkbox.closest('div');


    //Act
    fireEvent.click(checkbox);

    //Assert
    expect(checkbox).toBeChecked();
    expect(label).toHaveClass('completed');
    expect(wrapper).toHaveClass('completed');
  });

  test('it should filter tasks', () => {
    //Arrange
    renderWithProviders(<CharacterTasks />);
    const input = screen.getByPlaceholderText('Filter tasks');
    const dailyTask = screen.getByText('Zakum');
    const weeklyTask = screen.getByText('Will');

    //Act
    fireEvent.change(input, { target: { value: 'zak' } });

    //Assert
    expect(dailyTask).toBeInTheDocument();
    expect(weeklyTask).not.toBeInTheDocument();
  });

  test('it should hide task category if all tasks are filtered', () => {
    //Arrange
    renderWithProviders(<CharacterTasks />);
    const input = screen.getByPlaceholderText('Filter tasks');
    
    //Act
    fireEvent.change(input, { target: { value: 'non existent quest' } });
    
    //Assert
    const dailyLabel = screen.queryByText('Daily');
    const weeklyLabel = screen.queryByText('Weekly');
    const sideLabel = screen.queryByText('Side');
    const questLabel = screen.queryByText('Quests');
    const bossLabel = screen.queryByText('Bosses');

    expect(dailyLabel).toBeNull()
    expect(weeklyLabel).toBeNull()
    expect(sideLabel).toBeNull()
    expect(questLabel).toBeNull()
    expect(bossLabel).toBeNull()
  });

  test('it should have a navigation pane', () => {
    throw new Error('Not implemented');
  });

  test('it should display the time until next daily reset', () => {
    throw new Error('Not implemented');
  });

  test('it should display the time until next weekly quest reset', () => {
    throw new Error('Not implemented');
  });


});