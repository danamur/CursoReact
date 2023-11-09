import { Routes, Route } from 'react-router-dom';

import { HeroesRoute } from '../heroes';
import { LoginPage } from '../auth';

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path='login' element={<LoginPage />}></Route>
                <Route path='/*' element={<HeroesRoute />}></Route>
            </Routes>
        </>
    )
}
