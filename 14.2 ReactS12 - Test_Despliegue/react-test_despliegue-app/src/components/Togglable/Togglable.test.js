import { fireEvent, render } from '@testing-library/react';
import Togglable from './Togglable';

describe('Togglable component', () => {
  let component;

  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    component = render(
      <Togglable buttonLabel='SHOW'>
        <p>Hola</p>
      </Togglable>
    );
  });

  test('checks the component is rendering the button', () => {
    expect(component.container).toHaveTextContent('SHOW');
  });

  test('children is hidden on start', () => {
    // eslint-disable-next-line testing-library/no-node-access
    const div = component.container.querySelector('.togglableContent');
    expect(div).toHaveStyle('display: none');
  });

  test('children is visible when click the button', () => {
    // eslint-disable-next-line testing-library/no-node-access
    const div = component.container.querySelector('.togglableContent');
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const button = component.getByText('SHOW');

    fireEvent.click(button);

    expect(div).toHaveStyle('display: block');
  });
});