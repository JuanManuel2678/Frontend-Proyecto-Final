import { Link } from "react-router-dom";

export const Navbar = () => {

  return (
    <nav>
      <div className="flex gap-5 items-center h-full w-[400px] justify-evenly font-mono">
          <Link to="/dashboard">
          <button className="hover:border-b-[2px] hover:border-b-black focus:border-b-[2px] focus:border-b-black cursor-pointer h-full content-center uppercase font-bold">
          Inicio
        </button>
          </Link>

        <button className="hover:border-b-[2px] hover:border-b-black focus:border-b-[2px] focus:border-b-black cursor-pointer h-full content-center uppercase font-bold">
          Incidencias
        </button>

        <button className="hover:border-b-[2px] hover:border-b-black focus:border-b-[2px] focus:border-b-black cursor-pointer h-full content-center uppercase font-bold">
          Mis Incidencias
        </button>
      </div>
    </nav>
  );
};
