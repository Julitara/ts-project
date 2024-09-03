import { UserRole } from '@/entities/User';
import { AboutPageAsync } from '@/pages/AboutPage';
import { AdminPanelPageAsync } from '@/pages/AdminPanelPage';
import { ArticleDetailsPageAsync } from '@/pages/ArticleDetailsPage';
import {ArticleEditPageAsync} from '@/pages/ArticleEditPage';
import { ArticlesPageAsync } from '@/pages/ArticlesPage';
import { ForbiddenPageAsync } from '@/pages/ForbiddenPage';
import { MainPageAsync } from '@/pages/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ProfilePageAsync } from '@/pages/ProfilePage';
import { AppRoutes, RoutePath } from '@/shared/const/router';
import { AppRoutesProps } from '@/shared/types/router';

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPageAsync />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPageAsync />,
    },
    [AppRoutes.PROFILE]: {
        path: `${RoutePath.profile}:id`,
        element: <ProfilePageAsync/>,
        authOnly: true
    },
    [AppRoutes.ARTICLES]: {
        path: RoutePath.articles,
        element: <ArticlesPageAsync/>,
        authOnly: true
    },
    [AppRoutes.ARTICLE_DETAILS]: {
        path: `${RoutePath.article_details}:id`,
        element: <ArticleDetailsPageAsync/>,
        authOnly: true
    },
    [AppRoutes.ARTICLE_CREATE]: {
        path: `${RoutePath.article_create}`,
        element: <ArticleEditPageAsync/>,
        authOnly: true
    },
    [AppRoutes.ARTICLE_EDIT]: {
        path: `${RoutePath.article_edit}`,
        element: <ArticleEditPageAsync/>,
        authOnly: true
    },
    [AppRoutes.ADMIN_PANEL]: {
        path: `${RoutePath.admin_panel}`,
        element: <AdminPanelPageAsync/>,
        authOnly: true,
        roles: [UserRole.ADMIN, UserRole.MANAGER]
    },
    [AppRoutes.FORBIDDEN]: {
        path: `${RoutePath.forbidden}`,
        element: <ForbiddenPageAsync/>,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage/>
    }
};
