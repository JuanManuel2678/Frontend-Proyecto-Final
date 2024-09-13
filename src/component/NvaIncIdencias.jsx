import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const NvaIncIdencias = () => {
  const { incidence, user } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault()

    const data = Object.fromEntries(new FormData(e.target))
    const id = user.user_id
    await incidence.mutateAsync({data, id})
    e.target.reset()
  }

  return (
    <main className="w-full h-[92%] border border-black items-center ">
      <div className="flex flex-col gap-10 border border-black h-[100%]">
        <h1 className="font-bold text-2xl text-left w-full h-[7%] p-3 text-white bg-black">
          Registrar incidencias
        </h1>
        <h1>
          Por favor complete el siguiente formulario para registrar la
          incidencia los mas especifico posible{" "}
        </h1>
        <form
          onSubmit={handleSubmit}
          className="w-[40%] h-[80%] p-5 rounded-lg bg-white mx-auto"
        >
          <ul className="h-full flex flex-col gap-2 justify-between ">
            <li className="flex flex-col">
            <label htmlFor="incidencia" className="font-medium text-[13px]">
              Area que desea reportar
            </label>
            <input
              className="border-b border-black p-1 outline-none bg-transparent"
              type="text"
              id="incidencia"
              name="incidencia"
              placeholder=" "
            ></input>
            </li>
            <li className="flex flex-col">
            <label htmlFor="descripcion" className="font-medium text-[13px]">
              Descripción
            </label>
            <textarea
              className="border-b border-black p-1 outline-none bg-transparent"
              type="text"
              id="descripcion"
              name="descripcion"
              placeholder="Describa el titulo de la incidencia "
            ></textarea>
            </li>
            <li className="flex flex-col w-full border-b border-black">
            <label htmlFor="tipo" className="font-medium text-[13px]">
              Tipo
            </label>
            <select
              className=" p-1 outline-none bg-transparent w-[15%]"
              id="tipo" name="tipo">
                <option value="">Tipo</option>
                <option value="electrico">Electrico</option>
                <option value="fontaneria">Fontaneria</option>
                <option value="ascensores">Ascensores</option>
                <option value="areas verdes">areas verdes</option>
                <option value="ventanas">ventanas</option>
                <option value="ceramicas">ceramicas</option>
              </select>
              </li>
              <li className="flex flex-col w-full border-b border-black">
            <label htmlFor="estado" className="font-medium text-[13px]">
              Estado
            </label>
            <select
              className=" p-1 outline-none bg-transparent w-[15%] "
              id="estado" name="estado">
                <option value="">Estado</option>
                <option value="enviado" className="text-red-700">Enviado</option>
                <option value="revisado" className="text-blue-800">Revisado</option>
                <option value="completo" className="text-green-800">Completo</option>
              </select>
              </li>
            <li className="flex w-full border-b border-black gap-5">
              <label htmlFor="imagen" className="flex">
                  {" "}
                  Subir imagen
                 
                </label>
                <input type="file" name="imagen" id="imagen" accept="image/*" className=""/>
                </li>
                <li className=" flex justify-center pt-2">
            <button
              className="bg-black px-6 py-2 w-[60%] items-center rounded-md text-white font-medium text-[16px] hover:bg-slate-700 "
              type="submit"
            >
              enviar
            </button>
          </li>
          </ul>
        </form>
      </div>
    </main>
  );
};
