import { render, fireEvent } from '@testing-library/react';
import Note from './Note';

describe('Note component', () => {
  let component;
  let mockNote;
  let mockFunction;

  beforeEach(() => {
    mockNote = {
      id: 1,
      content: 'Poner una lavadora',
      important: false,
    };
    mockFunction = jest.fn();
    // eslint-disable-next-line testing-library/no-render-in-setup
    component = render(<Note note={mockNote} toggleImportance={mockFunction}></Note>);
  });

  test('Component render content received in props', () => {
    expect(component.container).toHaveTextContent(mockNote.content);
  });

  test('Button should show make important text', () => {
    expect(component.container).toHaveTextContent('make important');
  });

  test('Button should show make NOT important text', () => {
    mockNote.important = true;
    component = render(<Note note={mockNote} toggleImportance={mockFunction}></Note>);
    expect(component.container).toHaveTextContent('make not important');
  });

  test('call the toggleImportance function when click the button', () => {
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const button = component.getByText('make important');
    fireEvent.click(button);
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });

});