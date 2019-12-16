import React from 'react'
import {Users} from './Users'
import {UsersProvider} from "../Providers/UsersProvider";

const App: React.FC = () => {
    return (
        <UsersProvider>
            <Users/>
        </UsersProvider>
    )
};

export default App
