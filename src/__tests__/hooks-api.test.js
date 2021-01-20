// import '@testing-library/jest-dom';
import App from '../app';
import { render, screen, waitFor } from '@testing-library/react';
import React from 'react'
import userEvent from '@testing-library/user-event';

describe('Form', () => {
  test('Can add an item to the list', async () => {
    render(<App/>);
    userEvent.type(await screen.getByTestId('todoItem'), 'Eat Pizza');
    userEvent.type(await screen.getByTestId("asignAsignee"), 'Charles & Logan');
    userEvent.click(await screen.getByTestId('submit'));
    let items = waitFor(() => {
      screen.getAllByTestId("listitem");
    })
    console.log('items++++++++++++', items);
    expect(items[items.length -1]).toHaveTextContent('Eat Pizza');
  })
})


