import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const TodasIncidencias = () => {
  const { allIncident, drop, update } = useContext(AuthContext);
  

  const handleDelete = async (id) => {
    console.log(id)
    try {
      await drop.mutateAsync(id);
    } catch (error) {
      console.error(error);
    }
  }

  const handleUpdate = async (id) => {
    console.log(id)
    try {
      await update.mutateAsync(id);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  }

  return (
    <main>
      <h1 className="font-bold text-2xl text-left w-full h-[7%] p-3 text-white bg-black">
        Todas las Incidencias
      </h1>
      <div className=" w-full h-[92%]">
        <table className="w-full bg-white bg-opacity-90 border border-gray-200 rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-100 border-b border-gray-200">
              <th className="py-3 px-4 text-left text-gray-700 font-semibold">
                incidencia
              </th>
              <th className="py-3 px-4 text-left text-gray-700 font-semibold">
                descripcion
              </th>
              <th className="py-3 px-4 text-left text-gray-700 font-semibold">
                tipo
              </th>
              <th className="py-3 px-4 text-left text-gray-700 font-semibold">
                estado
              </th>
              <th className="py-3 px-4 text-left text-gray-700 font-semibold">
                imagen
              </th>
            </tr>
          </thead>
          <tbody>
            {allIncident?.map((item, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-gray-50"
              >
                <td className="py-2 px-4 text-gray-800">{item.incidencia}</td>
                <td className="py-2 px-4 text-gray-800">{item.descripcion}</td>
                <td className="py-2 px-4 text-gray-800">{item.tipo}</td>
                <td className="py-2 px-4 text-gray-800">{item.estado}</td>
                <td className="py-2 px-4 text-gray-800">{item.imagen}</td>
                <td className="py-2 px-4 text-center">
                  <div className="flex gap-1">
                    <button
                      onClick={() => handleDelete(item.user_id)}
                      className="px-2 py-2 w-[40px] items-center border border-black rounded-md flex gap-2 font-bold text-white bg-black hover:bg-slate-700 hover:border hover:border-black"
                    >
                      <figure className="">
                        <img src="/delete.svg" alt="" className="size-[20px]" />
                      </figure>
                    </button>
                    <button
                      onClick={() => handleUpdate(item.user_id)}
                      className="px-2 py-2 w-[40px] items-center border border-black rounded-md flex gap-2 font-bold text-white bg-black hover:bg-slate-700 hover:border hover:border-black"
                    >
                      <figure className="">
                        <img src="/edit.svg" alt="" className="size-[20px]" />
                      </figure>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};
