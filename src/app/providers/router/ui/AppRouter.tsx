import { getUserAuthData } from 'entities/User';
import { Suspense, memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';

const AppRouter = () => {
    const isAuth = useSelector(getUserAuthData);

    const routes = useMemo(() => {
        return Object.values(routeConfig).filter(route => {
            if (route.authOnly && !isAuth) {
                return false;
            }
            return true;
        });
    }, [isAuth]);

    return (
        <Suspense fallback={<PageLoader/>}>
            <Routes>
                {routes.map(({ element, path }) => (
                    <Route 
                        key={path}
                        path={path}
            
                        element={(
                            <div className='page-wrapper'>
                                {element}
                            </div>
                        )}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};

export default memo(AppRouter);
