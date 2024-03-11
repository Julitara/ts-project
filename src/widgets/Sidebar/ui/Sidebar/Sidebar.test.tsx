/* eslint-disable i18next/no-literal-string */
import { render, screen, fireEvent } from '@testing-library/react';
import { renderWithTranslation } from 
    'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { Sidebar } from 'widgets/Sidebar';

describe('Sidebar', () => {

    test('sidebar test: render', () => {
        renderWithTranslation(<Sidebar/>);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('sidebar test: toggle', () => {
        renderWithTranslation(<Sidebar/>);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
 
});