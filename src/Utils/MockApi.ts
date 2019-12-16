import uuid from 'uuid/v4'

const TIMEOUT = 400

export type User = {
    id: string
    name: string
}

const users: User[] = [
    {
        id: uuid(),
        name: 'First User'
    }
]

export function getUsers() {
    return new Promise<User[]>((resolve, reject) => {
        setTimeout(() => {
            resolve([...users])
        }, TIMEOUT)
    })
}

export function createUser(name: string) {
    return new Promise<User>((resolve, reject) => {
        setTimeout(() => {
            if (!name) {
                reject('Missing name.')
                return
            }
            const user: User = {
                id: uuid(),
                name
            }
            users.push(user)
            resolve(user)
        }, TIMEOUT)
    })
}

export function deleteUser(id: string) {
    return new Promise<{ success: boolean }>((resolve, reject) => {
        setTimeout(() => {
            const index = users.findIndex(user => user.id === id)
            if (index === -1) {
                reject('User not found.')
                return
            }
            users.splice(index, 1)
            resolve({ success: true })
        }, TIMEOUT)
    })
}
