import * as React from 'react'
import {useContext} from "react";
import {User} from "../Utils/MockApi";
import {UsersContext} from "../Providers/UsersProvider";

export const UserList: React.FC = () => {
    const {users, loading, error, deleteUser} = useContext(UsersContext);

    if (loading) {
        return (
            <div>Loading...</div>
        )
    }

    if (error) {
        return (
            <div className={'error-message'}>Error: {error}</div>
        )
    }

    return (
        <div className={'user-list-container card'}>
            <h1 className={'typo-h1'}>Users</h1>
            <ul className={'user-list'}>
                {users.map((user: User) => (
                    <li key={user.id} className={'user-list__item'}>
                        <span>{user.name}</span>
                        <span onClick={() => deleteUser(user.id)} className={'user-list__item__delete'}>Delete</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
