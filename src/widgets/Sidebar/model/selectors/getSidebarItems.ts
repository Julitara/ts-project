import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import AboutIcon from '@/shared/assets/icons/about.svg?react';
import MainIcon from '@/shared/assets/icons/main.svg?react';
import ProfileIcon from '@/shared/assets/icons/profile.svg?react';
import ArticleIcon from '@/shared/assets/icons/article.svg?react';
import { SidebarItemType } from '../types/sidebar';
import { 
    getRouteAbout, 
    getRouteArticles, 
    getRouteMain, 
    getRouteProfile 
} from '@/shared/const/router';

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemsList: SidebarItemType[] = [
            {
                path: getRouteMain(),
                Icon: MainIcon,
                text: 'Главная страница'
            },
            {
                path: getRouteAbout(),
                Icon: AboutIcon,
                text: 'О сайте'
            },
        ];

        if(userData) {
            sidebarItemsList.push(
                {
                    path: getRouteProfile(userData.id),
                    Icon: ProfileIcon,
                    text: 'Profile',
                    authOnly: true
                },
                {
                    path: getRouteArticles(),
                    Icon: ArticleIcon,
                    text: 'Articles',
                    authOnly: true
                });
        }
        return sidebarItemsList;
    }
);