import '@testing-library/jest-dom';

import { h } from 'preact';
import { render, fireEvent } from '@testing-library/preact';

import { Counter } from './Counter';

describe('<Counter />', () => {
    test('Has a default count of 0', () => {
        const { queryByText } = render(<Counter />);

        expect(queryByText('Clicked 0 times')).toBeInTheDocument();
    });
    test('increments it\'s counter when "count" is checked', () => {
        const { getByTestId, queryByText } = render(<Counter />);

        fireEvent.click(getByTestId('increment-btn'));
        expect(queryByText('Clicked 1 times')).toBeInTheDocument();
    });
});
