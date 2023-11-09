import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {jest, describe, it, expect} from '@jest/globals';
import Button from './Button';

describe('Button', () => {
  it('calls onPress when the button is pressed', () => {
    const onPressMock = jest.fn();

    const {getByRole} = render(
      <Button title="Click Me" onPress={onPressMock} />,
    );

    const button = getByRole('button');
    fireEvent.press(button);

    expect(onPressMock).toHaveBeenCalled();
  });

  it('should have the correct title', () => {
    const onPressMock = jest.fn();

    const {getByTestId} = render(
      <Button title="This is a button" onPress={onPressMock} />,
    );

    const button = getByTestId('ButtonText');

    expect(button.children[0]).toEqual('This is a button');
  });
});
