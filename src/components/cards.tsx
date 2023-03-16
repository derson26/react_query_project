import { IUser } from '../intefaces';
import Card from './card';
import { Link } from 'react-router-dom';

export function Cards({users}:{users:IUser[]}) {
    return (
        <div className='grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 auto-rows-auto-max'>
            {users.map( user => <Link key={user.id} to={`/${user.id}`}><Card key={user.id} user={user} /></Link>)}
        </div>
    )
}