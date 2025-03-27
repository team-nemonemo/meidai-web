import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layouts from '@/layouts';
import Home from '@/pages/home';
import Login from '@/pages/login';
import Register from '@/pages/register';
import Search from '@/pages/search';
import Create from '@/pages/create';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layouts />}>
                    <Route index element={<Home />} />
                    <Route path='/search' element={<Search />} />
                    <Route path='/create' element={<Create />} />
                </Route>
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;