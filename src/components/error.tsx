import { Link } from 'react-router-dom';
export default function Error() {
  return (
    <div className="w-full h-4/5 flex justify-center items-center custom-height">
      <h1 className="font-bold bg-gradient-to-r bg-clip-text text-transparent from-pink-500 to-violet-500 md:text-5xl text-lg capitalize">
        error
      </h1>

      <Link to={'/'} className='capitalize ml-4' >
                back
      </Link>
    </div>
  );
}
