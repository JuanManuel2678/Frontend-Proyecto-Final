import { Link } from "react-router-dom";

export const Navbar = () => {

  return (
    <nav>
      <div className="flex gap-5 items-center h-full w-[400px] justify-evenly font-mono">
          <Link to="/dashboard" className="h-full">
          <button className="hover:border-b-[2px] hover:border-b-black focus:border-b-[2px] focus:border-b-black cursor-pointer h-full content-center uppercase font-bold">
          Inicio
        </button>
          </Link>

          <Link to='/incidencia' className="h-full">
          <button className="hover:border-b-[2px] hover:border-b-black focus:border-b-[2px] focus:border-b-black cursor-pointer h-full content-center uppercase font-bold">
          Incidencias
        </button>
          </Link>

          <Link to="/allincidencias" className="h-full">
          <button className="hover:border-b-[2px] hover:border-b-black focus:border-b-[2px] focus:border-b-black cursor-pointer h-full content-center uppercase font-bold">
          Mis Incidencias
        </button>
          </Link>
      </div>
    </nav>
  );
};
