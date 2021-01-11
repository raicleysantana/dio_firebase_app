import React from 'react';

import Home from './pages/Home';
import Login from './pages/Login';
import CreateUser from './pages/CreateUser';

export const routers = {
    login: 'LOGIN',
    home: 'HOME',
    createUser: 'CREATE_USER',
};

export default (router, params) => {
    switch (router) {
        case routers.login: {
            return <Login {...params} />;
        }
        case routers.createUser: {
            return <CreateUser {...params} />;
        }
        case routers.home: {
            return <Home {...params} />;
        }

    }
};
