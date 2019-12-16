import * as React from 'react'
import {CreateUserForm} from './CreateUserForm'
import {UserList} from './UserList'

export const Users: React.FC = () => {
    return (
        <>
            <UserList/>
            <CreateUserForm/>
        </>
    )
}
