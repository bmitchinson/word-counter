import '@testing-library/jest-dom';

import { h } from 'preact';
import { render } from '@testing-library/preact';

import { WordList } from './WordList';

describe('<WordList />', () => {
    const words: [string, number][] = [
        ['one', 1],
        ['two', 2],
        ['three', 3],
    ];
    test('Renders an <li> for each item', () => {
        const { container } = render(<WordList words={words} />);
        expect(container.getElementsByTagName('li')).toHaveLength(words.length);
    });

    test("each <li> contains the word and it's count", () => {
        const { queryByText } = render(<WordList words={words} />);
        expect(queryByText('one: 1')).toBeInTheDocument();
        expect(queryByText('two: 2')).toBeInTheDocument();
        expect(queryByText('three: 3')).toBeInTheDocument();
    });
});
