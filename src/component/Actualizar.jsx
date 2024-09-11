import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export const Actualizar = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const { user } = useContext(AuthContext);

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    
    const regex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*./])(?=.*\d)[A-Za-z\d!@#$%^&*./]{8,}$/;
    
    if (!regex.test(newPassword)) {
      setError('La contraseña debe tener al menos 8 caracteres, una letra mayúscula y un carácter especial y un numero .');
    } else {
      setError('');
    }
  };

  return (
    <main className="w-full h-[90%] flex flex-col justify-between items-center bg-[#E0E0E0] font-Roboto">
      <h1 className="font-bold text-2xl text-left w-full h-[7%] p-3 text-white bg-black flex  items-center">
        Actualizar Datos{" "}
      </h1>
      <h1>Rellene los datos que desee modificar</h1>
      <form
        //onSubmit={handleUpdate}
        className="w-[40%] h-[80%] p-5 rounded-lg bg-white "
      >
        <ul className="h-full flex flex-col gap-2 justify-between ">
          <li className="flex flex-col ">
            <label htmlFor="nombres" className="font-medium text-[13px]">
              Nombres
            </label>
            <input
              className="border-b border-black p-1 outline-none bg-transparent"
              type="text"
              id="nombres"
              name="nombres"
              placeholder={user?.nombres}
            ></input>
          </li>
          <li className="flex flex-col">
            <label htmlFor="apellidos" className="font-medium text-[13px]">
              Apellidos
            </label>
            <input
              className="border-b border-black p-1 outline-none bg-transparent"
              type="text"
              id="apellidos"
              name="apellidos"
              placeholder={user?.apellidos}
            ></input>
          </li>
          <li className="flex flex-col">
            <label htmlFor="piso" className="font-medium text-[13px]">
              Piso
            </label>
            <input
              className="border-b border-black p-1 outline-none bg-transparent"
              type="number"
              id="piso"
              name="piso"
              min={1}
              max={8}
              value={user?.piso}
              readOnly
            ></input>
          </li>
          <li className="flex flex-col">
            <label htmlFor="apartamento" className="font-medium text-[13px]">
              Apartamento
            </label>
            <input
              className="border-b border-black p-1 outline-none bg-transparent"
              type="text"
              id="apartamento"
              name="apartamento"
              readOnly
              value={user?.apartamento}
            ></input>
          </li>
          <li className="flex flex-col ">
            <label htmlFor="telefono" className="font-medium text-[13px]">
              Teléfono
            </label>
            <input
              className="border-b border-black p-1 outline-none bg-transparent"
              type="tel"
              id="telefono"
              name="telefono"
              placeholder={user?.telefono}
            ></input>
          </li>
          <li className="flex flex-col">
            <label htmlFor="email" className="font-medium text-[13px]">
              Email
            </label>
            <input
              className="border-b border-black p-1 outline-none bg-transparent"
              type="email"
              id="email"
              name="email"
              value={user?.email}
              placeholder="email"
              readOnly
            ></input>
          </li>
          <li className="flex flex-col">
            <label htmlFor="password" className="font-medium text-[13px]">
              Password
            </label>
            <div className="flex items-center gap-2 border-b border-black ">
              <input
                className={`w-[95%] p-1 pl-4 outline-none bg-transparent rounded-md focus:outline-none focus:ring-2 ${
                  error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500 '
                }`}
                type={showPassword ? "text" : "password"}
                name="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Enter your Password"
                required
              ></input>
              {error && <p className="mt-2 text-red-500 text-sm">{error}</p>}
              <div
                onClick={() => setShowPassword(!showPassword)}
                className="cursor-pointer"
              >
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                )}
              </div>
            </div>
          </li>
          <li className="flex flex-col w-full border-b border-black">
            <label htmlFor="rol" className="font-medium text-[13px]">
              Rol
            </label>
            <input name="rol" id="rol" value={user?.rol} readOnly className=" p-1 outline-none bg-transparent w-[30%]">
            </input>
          </li>
          <li className=" flex justify-center pt-2 gap-2">
            <button
              className="bg-black px-6 py-2 w-[180px] items-center rounded-md text-white font-medium text-[16px] hover:bg-slate-700 hover:border hover:border-black"
              type="submit"
            >
              Actualizar
            </button>
          </li>
        </ul>
      </form>
    </main>
  );
};


