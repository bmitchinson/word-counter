import '@testing-library/jest-dom';

import { h } from 'preact';
import { render } from '@testing-library/preact';

import { WordList } from './WordList';

describe('<WordList />', () => {
    const words: [string, number][] = [
        ['orange', 3],
        ['pear', 2],
        ['apple', 1],
    ];
    test('Renders an <li> for each item', () => {
        const { container } = render(<WordList words={words} />);
        expect(container.getElementsByTagName('li')).toHaveLength(words.length);
    });

    test("each <li> contains the word and it's count", () => {
        const { queryByText } = render(<WordList words={words} />);
        expect(queryByText('"orange" - (3 Times)')).toBeInTheDocument();
        expect(queryByText('"pear" - (2 Times)')).toBeInTheDocument();
        expect(queryByText('"apple" - (1 Times)')).toBeInTheDocument();
    });

    test('<li> are presented in the order they were received', () => {
        const { queryByText } = render(<WordList words={words} />);

        expect(queryByText('#1: "orange" - (3 Times)')).toBeInTheDocument();
        expect(queryByText('#2: "pear" - (2 Times)')).toBeInTheDocument();
        expect(queryByText('#3: "apple" - (1 Times)')).toBeInTheDocument();
    });
});
