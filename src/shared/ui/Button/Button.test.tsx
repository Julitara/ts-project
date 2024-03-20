/* eslint-disable i18next/no-literal-string */
import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from './Button';

describe('Button', () => {

    test('button test: render', () => {
        render(<Button>testing</Button>);
        expect(screen.getByText('testing')).toBeInTheDocument();
    });

    test('button test: add clear class', () => {
        render(<Button theme={ButtonTheme.CLEAR}>test</Button>);
        expect(screen.getByText('test')).toHaveClass('clear');
        screen.debug();
    });
});