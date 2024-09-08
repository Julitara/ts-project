import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { getRouteAbout, getRouteAdminPanel, getRouteProfile } from '@/shared/const/router';
import { screen } from '@testing-library/react';
import AppRouter from './AppRouter';
import { UserRole } from '@/entities/User';

describe('app/router/ui/AppRouter', function() {
       

    test('Page should be render', async () => {
        componentRender(<AppRouter/>, {
            route: getRouteAbout()
        });

        const page = await screen.findByTestId('AboutPage');
        expect(page).toBeInTheDocument();
    });

    test('Not found page', async () => {
        componentRender(<AppRouter/>, {
            route: '/testtesttest'
        });

        const page = await screen.findByTestId('NotFoundPage');
        expect(page).toBeInTheDocument();
    });

    test('Redirect to MainPage unauthorized user', async () => {
        componentRender(<AppRouter/>, {
            route: getRouteProfile('1')
        });

        const page = await screen.findByTestId('MainPage');
        expect(page).toBeInTheDocument();
    });

    test('Доступ к закрытой страницы для авторизованного пользователя', async () => {

        componentRender(<AppRouter />, {
            route: getRouteProfile('1'),
            initialState: {
                user: {_inited: true, authData: {}}
            }
        });
        const page = await screen.findByTestId('ProfilePage');
        expect(page).toBeInTheDocument();
    });

    test('Доступ запрещен (отсутствует роль)', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAdminPanel(),
            initialState: {
                user: { _inited: true, authData: {} },
            },
        });

        const page = await screen.findByTestId('ForbiddenPage');
        expect(page).toBeInTheDocument();
    });

    test('Доступ разрешен (присутствует роль)', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAdminPanel(),
            initialState: {
                user: { _inited: true, authData: { roles: [UserRole.ADMIN] } },
            },
        });

        const page = await screen.findByTestId('AdminPanelPage');
        expect(page).toBeInTheDocument();

    });
});
