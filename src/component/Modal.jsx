import { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";

export const Modal = ({ setShowModal }) => {
  const { isLoading, user, logout } = useContext(AuthContext);
  const navigate = useNavigate()

  const handleUser = () => {
     setShowModal(false)
     navigate("/register");
    };

  return (
    <div className="w-[188px] h-[174px] border border-[#0f0f0f] bg-white rounded-xl flex flex-col justify-center gap-2  top-[80px] absolute p-2">
      <button
        onClick={handleUser}
        className="flex p-2 w-full h-2/4 gap-2  hover:bg-slate-200 hover:rounded-lg items-center"
      >
        <figure>
          <img
            src="/myuser.svg"
            alt="icon de perfil"
            className="w-[20px] h-[20px]"
          />
        </figure>
        <h1 className="font-bold text-[14px] text-[#4f4f4f]">Crear</h1>
      </button>
      <button
        onClick={() => setShowModal(false)}
        className="flex p-2 w-full h-2/4 gap-2  hover:bg-slate-200 hover:rounded-lg items-center"
      >
        <figure>
          <img
            src="/group.svg"
            alt="icon de perfil"
            className="w-[20px] h-[20px]"
          />
        </figure>
        <h1 className="font-bold text-[14px] text-[#4f4f4f]">Usuarios</h1>
      </button>
      <button
        className="flex p-2 w-full h-2/4 gap-2 border-t border-t-black hover:bg-red-200/30  items-center"
        onClick={logout}>
        <figure>
          <img
            src="/exit.svg"
            alt="icon de salir"
            className="w-[20px] h-[20px]"
          />
        </figure>
        <h1 className="font-bold text-[14px] text-[#EB5757] font-mono text-center">Salir</h1>
      </button>
    </div>
  );
};
