import React from 'react';
import {render} from '@testing-library/react-native';
import {describe, it, expect} from '@jest/globals';
import ListItem from './ListItem';

describe('ListItem', () => {
  it('should have the correct item', () => {
    const {getByTestId} = render(<ListItem item="Item" />);

    const header = getByTestId('ListItem');

    expect(header.props.children).toEqual('Item');
  });
});
