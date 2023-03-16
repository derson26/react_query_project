import { useQuery } from "react-query"
import { EKey, IRequest } from '../intefaces';
import Loading from './loading';
import { useNavigate } from "react-router-dom";
import { Cards } from "./cards";


export default function Home() {

    const key = EKey;
    const navigate = useNavigate();
    // Create useQuery
    const { data, error, isLoading } = useQuery<IRequest>(`${key.LIST_USER}`, () =>
        fetch("https://reqres.in/api/users?page=2").then((data) => data.json())
    );

    const users = data?.data ?? [];

    //Show Users
    const showData = isLoading ? <Loading /> : <Cards users={users} />

    // If error
    if(error) {
        navigate('/error');
    }

    return (
        <div className="pt-4 custom-height">
            {showData}
        </div>
    )
}