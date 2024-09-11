import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

export const Inicio = () => {
  const { user, isLoading } = useContext(AuthContext);
  return (
    <main className="w-full h-[90%] flex flex-col bg-[#E0E0E0] font-Roboto">
      <h1 className="font-bold text-2xl text-left w-full h-[7%] p-3 text-white bg-black">
        Inicio
      </h1>
      <div className="w-full] h-[7%] border border-black flex bg-white gap-2 items-center">
        <h1 className="font-bold text-2xl pl-2 ">Bienvenido</h1>
        <div className="flex items-center justify-center w-[80%] h-full gap-4">
          <h1 className="font-bold text-1xl"> {user?.nombres} {user?.apellidos}</h1>
          <h1 className="font-medium">Piso : <span className="font-bold text-blue-800">{user?.piso}</span></h1>
          <h1 className="font-medium">Apartamento : <span className="font-bold text-blue-800" >{user?.apartamento}</span></h1>
          <h1 className="font-medium">Email : <span className="font-bold text-blue-800">{user?.email}</span></h1>
          <h1 className="font-bold text-blue-800 font-Roboto uppercase">{user?.rol}</h1>
        </div>
        <Link to="/update" >
        <button className="px-4 py-1 rounded-lg cursor-pointer bg-black  text-white font-bold font-Roboto hover:border hover:border-black hover:bg-white hover:text-black">Editar</button>
        </Link>
      </div>
    </main>
  );
};
 