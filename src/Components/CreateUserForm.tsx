import * as React from 'react'
import {FormEvent, useState} from "react";
import {useContext} from "react";
import {UsersContext} from "../Providers/UsersProvider";

export const CreateUserForm: React.FC = () => {
    const [name, setName] = useState<string>('');
    const {createUser} = useContext(UsersContext);

    const onCreateUser = (e: FormEvent) => {
        e.preventDefault();
        createUser(name);
        setName('')
    };

    return (
        <form onSubmit={onCreateUser} className={'create-user-form'}>
            <input
                placeholder={'Add user'}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={'create-user-form__input card'}
            />
        </form>
    )
};
