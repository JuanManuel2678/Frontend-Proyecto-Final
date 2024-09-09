import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const Inicio = () => {
  const { user, isLoading } = useContext(AuthContext);
  return (
    <main className="w-full h-[90%] flex flex-col bg-[#E0E0E0] font-Roboto">
      <h1 className="font-bold text-2xl text-left w-full h-[7%] p-3 text-white bg-black">
        Inicio
      </h1>
      <div className="w-full] h-[7%] border border-black p-2 flex bg-white gap-2">
        <h1 className="font-bold text-2xl ">Bienvenido</h1>
        <div className="flex items-center justify-center w-[80%] h-full gap-4">
          <h1 className="font-bold text-1xl"> {user?.nombres} {user?.apellidos}</h1>
          <h1 className="font-medium">Piso : <span className="font-bold text-blue-800">{user?.piso}</span></h1>
          <h1 className="font-medium">Apartamento : <span className="font-bold text-blue-800" >{user?.apartamento}</span></h1>
          <h1 className="font-medium">Email : <span className="font-bold text-blue-800">{user?.email}</span></h1>
          <h1 className="font-bold text-blue-800 font-Roboto uppercase">{user?.rol}</h1>
        </div>
      </div>
    </main>
  );
};
