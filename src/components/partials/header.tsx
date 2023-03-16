import derson from "../../assets/Derson.jpg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="w-full bg-slate-300 h-24">
      <nav className="mx-auto h-full flex items-center container">
        <div className="flex items-center">
          <Link to={"https://github.com/derson26"}>
            <img
              src={derson}
              alt="Derson Image"
              className="rounded-full w-16 h-16 object-cover"
            />
          </Link>
          <div className="flex flex-col mt-2 ml-4 font-bold bg-gradient-to-r bg-clip-text text-transparent from-pink-500 to-violet-500 md:text-lg text-sm">
            <span>Derson Ussuale</span>
            <span>FullStack Developer</span>
          </div>
        </div>

        <span className="flex-1"></span>

        <Link to={"/"}>
          <h3 className="font-bold md:text-2xl text-sm bg-gradient-to-r bg-clip-text text-transparent from-pink-500 to-violet-500 capitalize">React Query | lazy Router</h3>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
