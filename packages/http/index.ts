import axios from 'axios'
import { uniqueId } from '@test/utils'


export async function getUser(name: string) {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users/' + name)
    return response.data
}

export function getUserId() {
    return uniqueId('user-')
}