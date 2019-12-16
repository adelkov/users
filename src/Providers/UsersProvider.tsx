import React, {useEffect, useState} from "react";
import * as API from '../Utils/MockApi'
import {User} from "../Utils/MockApi";


const defaultUserContext = {
    users: [],
    loading: true,
    error: null,
    deleteUser: (id: string) => {},
    createUser: (name: string) => {}
};

export const UsersContext = React.createContext(defaultUserContext);

export const UsersProvider = (props: any) => {

    const [users, setUsers] = useState();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            setLoading(true);

            try {
                const users = await API.getUsers();
                setUsers(users);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchUsers();
    }, []);


    const createUser = async (name: string) => {
        try {
            const newUser = await API.createUser(name);
            const newUsers = [...users, newUser];
            setUsers(newUsers);
        } catch (error) {
            setError(error.message);
        }
    };

    const deleteUser = async (id: string) => {
        try {
            const isSuccessful = await API.deleteUser(id);
            if (isSuccessful) {
                const newUsers = users.filter((user: User) => user.id !== id);
                setUsers(newUsers);
            }
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <UsersContext.Provider
            value={{users, createUser, deleteUser, loading, error}}
        >
            {props.children}
        </UsersContext.Provider>
    );
};