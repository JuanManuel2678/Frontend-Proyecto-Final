import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const Usuarios = () => {
  const { userAll, drop } = useContext(AuthContext);
  console.log(userAll);

  const handleDelete = async (id) => {
    console.log(id);
    try {
      await drop.mutateAsync(id);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  }

  return (
    <main className="w-full h-[90%] flex flex-col justify-between items-center bg-[#E0E0E0] font-Roboto">
      <h1 className="font-bold text-2xl text-left w-full h-[7%] p-3 text-white bg-black">
        Todos los Usuarios{" "}
      </h1>

      <div className=" w-full h-[92%]">
        <table className="w-full bg-white bg-opacity-90 border border-gray-200 rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-100 border-b border-gray-200">
              <th className="py-3 px-4 text-left text-gray-700 font-semibold">
                Nombres
              </th>
              <th className="py-3 px-4 text-left text-gray-700 font-semibold">
                Apellidos
              </th>
              <th className="py-3 px-4 text-left text-gray-700 font-semibold">
                email
              </th>
              <th className="py-3 px-4 text-left text-gray-700 font-semibold">
                Teléfono
              </th>
              <th className="py-3 px-4 text-left text-gray-700 font-semibold">
                Apto
              </th>
              <th className="py-3 px-4 text-left text-gray-700 font-semibold">
                Rol
              </th>
              <th className="py-3 px-4 text-left text-gray-700 font-semibold">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {userAll?.map((item) => (
              <tr
                key={item.user_id}
                className="border-b border-gray-200 hover:bg-gray-50"
              >
                <td className="py-2 px-4 text-gray-800">{item.nombres}</td>
                <td className="py-2 px-4 text-gray-800">{item.apellidos}</td>
                <td className="py-2 px-4 text-gray-800">{item.email}</td>
                <td className="py-2 px-4 text-gray-800">{item.telefono}</td>
                <td className="py-2 px-4 text-gray-800">{item.apartamento}</td>
                <td className="py-2 px-4 font-bold text-blue-800 uppercase text-sm">
                  {item.rol}
                </td>
                <td className="py-2 px-4 text-center">
                  <div className="flex gap-1">
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="px-2 py-2 w-[40px] items-center border border-black rounded-md flex gap-2 font-bold text-white bg-black hover:bg-slate-700 hover:border hover:border-black"
                    >
                      <figure className="">
                        <img src="/delete.svg" alt="" className="size-[20px]" />
                      </figure>
                    </button>
                    <button
                      onClick={() => handleDelUs(item.id)}
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
