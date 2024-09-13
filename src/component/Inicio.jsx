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
      <div className="w-[80%] h-[80%] mx-auto  mt-10 flex">
          <div className="w-[50%] ">
            <figure className="h-full w-full ">
              <img src="/edficio.jpg" alt="imagen condominia" className="h-[50%] w-full object-cover"/>
              <img src="/mantenimineto.jpg" alt="imagen mantenimineto" className="h-[50%] w-full " />
            </figure>
          </div>
          <div className="border-l border-l-black p-16 w-[50%] text-center flex flex-col gap-10  bg-white">
            <h1 className="font-bold text-2xl">Plataforma de Incidencia </h1>
            <div className="text-left flex flex-col gap-5 font-semibold">
                  <h1 className="text-blue-800 uppercase font-bold">Incidencias</h1>
                <div className="flex flex-col gap-4">
                <h3>
                * Use la pestaña de incidencias para registrar la incidencia 
              </h3>
              <h3>
                * El tiempo de respuesta de las incidencias es máximo de  5 días 
              </h3>
              <h3>
                * Las incidencias de fontanería tienen un tiempo promedio de 15 días
              </h3>
                </div>
                <h1 className="text-blue-800 uppercase font-bold">usuarios</h1>
                <div className="flex flex-col gap-4">
                  <h3>* En el boton editar puede cambiar la contraseña asignada por el administrador</h3>
                  <h3>* si desea que agregue un nuevo usuario comuníquese con el administrador</h3>
                  <h3>* Solo se permitirá 2 usuarios por apartamento </h3>
                </div>
            </div>
          </div>
      </div>
    </main>
  );
};
 