import { Link } from "react-router-dom";

export const Recuperar = () => {
  return (
    <main className="w-screen h-screen flex justify-center items-center bg-[#E0E0E0] font-Roboto">
      <div className=" size-[60%] rounded-lg flex bg-[#f5f5f5] p-10 ">
        <div className="w-full flex flex-col justify-between">
            <Link to="/">
            <button className="flex text-blue-800 font-semibold w-[10%]">
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
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>

            <h3>Back</h3>
          </button>
            </Link>

          <div className="w-full h-[90%] items-center flex flex-col justify-evenly">
            <h1 className="text-center font-bold text-4xl">Olvido su contraseña?</h1>
            <h3 className="font-bold text-md">
              si olvido u contraseña, comuniquece con el administrador , para
              restablecerla
            </h3>
            <span className="font-light text-red-800">Horario de oficina de lunes a viernes </span>

            <div className="w-[70%] h-[60%] flex rounded-xl">
                <div className="h-full w-[60%] flex flex-col justify-center gap-2 p-8 bg-[#E0E0E0] rounded-l-xl text-[#060606] text-sm font-bold capitalize">
                    <h4>nombre: juan perez</h4>
                    <h4>email: juan@gmail.com</h4>
                    <h4>cel: 9222222222</h4>
                    <h4>tlf: 0212 32335465</h4>
                </div>
                <div className="h-full w-[40%]">
                    <figure className="size-full rounded-xl">
                        <img src="/img-2.jpg" alt="" className="size-full object-cover rounded-r-xl"/>
                    </figure>
                </div>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

// https://picsum.photos/200/300