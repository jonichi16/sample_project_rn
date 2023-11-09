import React from 'react';
import {render} from '@testing-library/react-native';
import {describe, it, expect} from '@jest/globals';
import ListHeader from './ListHeader';

describe('ListHeader', () => {
  it('should have the correct header title', () => {
    const {getByTestId} = render(<ListHeader title="Section Title" />);

    const header = getByTestId('ListHeader');

    expect(header.props.children).toEqual('Section Title');
  });
});
