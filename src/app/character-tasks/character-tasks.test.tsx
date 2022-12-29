import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CharacterTasks from './character-tasks';
import { renderWithProviders } from '../../utils/test-utils';
import { store } from '../../store/store';
import { setSelectedCharacter } from '../../store/characters/charactersSlice';


describe('<CharacterTasks />', () => {
  test('it should mount', () => {
    renderWithProviders(<CharacterTasks />);

    const characterTasks = screen.getByTestId('CharacterTasks');

    expect(characterTasks).toBeInTheDocument();
  });

  test('it should display account wide tasks when no character is selected', () => {
    //Arrange
    renderWithProviders(<CharacterTasks />);

    //Act
    const title = screen.getByText('Account Wide Tasks')
    const accountDailyTask = screen.getByText('Monster Park')
    const accountWeeklyTask = screen.getByText('Mu Lung Dojo')

    //Assert
    expect(title).toBeInTheDocument();
    expect(accountDailyTask).toBeInTheDocument();
    expect(accountWeeklyTask).toBeInTheDocument()

  });

  test('it should display character specific tasks when a character is selected', () => {
    //Arrange
    store.dispatch(setSelectedCharacter({ name: 'Shadowÿ', tasks: {} }));
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
    store.dispatch(setSelectedCharacter(null));
    renderWithProviders(<CharacterTasks />);
    const checkbox = screen.getByLabelText('Monster Park');
    const label = screen.getByText('Monster Park');
    const wrapper = checkbox.closest('div');
    //Act
    fireEvent.click(checkbox);
    
    //Assert
    expect(wrapper).toHaveClass('completed');
    expect(label).toHaveClass('completed');
  });

  test('it should filter tasks', () => {
    throw new Error('Not implemented');
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