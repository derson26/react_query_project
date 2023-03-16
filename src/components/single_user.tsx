import { useQuery } from "react-query";
import { useParams, Navigate, Link } from "react-router-dom"
import { EKey, IDataUser, IUser } from '../intefaces';
import Card from "./card";

export default function SingleUser() {

    const {id} = useParams();  // const id: string | undefined

    const isNumber = !isNaN(+id!);
    const key = EKey;
    
    // Create useQuery
    const { data, error } = useQuery<IDataUser>(`${key.LIST_SINGLE_USER}`, () =>
        fetch(`https://reqres.in/api/users/${id}`).then((data) => data.json())
    );

    const user = data ? data!.data  : {} as IUser;

    const showUser = isNumber && !error && user ? <Card user={user}/> : <Navigate to={'/error'} />;
    return (
        <div className="flex justify-center items-center flex-col custom-height">
            {showUser}
            <Link to={'/'} className='ml-2 capitalize'>
                <button className="mt-4 shadow-lg p-4 rounded-lg capitalize font-bold bg-gradient-to-r bg-clip-text text-transparent from-pink-500 to-violet-500">go to home page</button>
            </Link>
        </div>
    )
}