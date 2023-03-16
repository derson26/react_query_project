import { IUser } from '../intefaces';

export default function Card({user}:{user: IUser}) {
    return (
        <div className="flex items-center  shadow-xl p-4 ">
            <img
              src={user.avatar}
              alt="Derson Image"
              className="rounded-full w-16 h-16 object-cover"
            />
          
          <div className="flex flex-col mt-2 ml-4 font-bold bg-gradient-to-r bg-clip-text text-transparent from-pink-500 to-violet-500">
          <h4>{user.email}</h4>
            <p>{user?.first_name} {user?.last_name}</p>
          </div>
        </div>
    )
}