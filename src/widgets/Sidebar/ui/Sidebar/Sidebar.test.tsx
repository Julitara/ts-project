import { screen, fireEvent } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Sidebar } from 'widgets/Sidebar';

describe('Sidebar', () => {

    test('sidebar test: render', () => {
        componentRender(<Sidebar/>);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('sidebar test: toggle', () => {
        componentRender(<Sidebar/>);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
 
});