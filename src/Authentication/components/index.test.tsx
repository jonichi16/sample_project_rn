import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {jest, describe, it, expect} from '@jest/globals';
import Authentication from '.';

describe('Authentication Feature', () => {
  it('should have input field for username', () => {
    const {getByTestId} = render(<Authentication />);

    const usernameInputField = getByTestId('UsernameInput');
    fireEvent.changeText(usernameInputField, 'Hello');

    expect(usernameInputField.props.placeholder).toEqual('Username');
    expect(usernameInputField.props.value).toEqual('Hello');
  });

  it('should have input field for password', () => {
    const {getByTestId} = render(<Authentication />);

    const passwordInputField = getByTestId('PasswordInput');
    fireEvent.changeText(passwordInputField, '12345');

    expect(passwordInputField.props.placeholder).toEqual('Password');
    expect(passwordInputField.props.value).toEqual('12345');
  });

  it('should have button to login', () => {
    const {getByText} = render(<Authentication />);

    const loginButton = getByText('Login');

    expect(loginButton).toBeDefined();
  });
});
