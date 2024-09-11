import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

export const Login = () => {
  const { login } = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    const savedEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");
    const savedRememberMe = localStorage.getItem("rememberMe") === "true";

    if (savedRememberMe) {
      setEmail(savedEmail || "");
      setPassword(savedPassword || "");
      setRememberMe(savedRememberMe);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (rememberMe) {
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      localStorage.setItem("rememberMe", "true");
    } else {
      localStorage.removeItem("email");
      localStorage.removeItem("password");
      localStorage.setItem("rememberMe", "false");
    }

    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    await login.mutateAsync(data);
  };

  return (
    <main className="w-screen h-screen flex justify-center items-center bg-[#E0E0E0] font-Roboto">
      <div className=" size-[60%] rounded-lg flex ">
        <div className="w-[50%] h-full p-10 bg-[#f5f5f5] flex flex-col justify-between rounded-l-lg">
          <div className="flex flex-col gap-4 pt-4 w-[70%]">
            <h1 className="font-bold text-4xl">Login</h1>
            <span className="font-medium text-sm">
              Bienvenido, Por favor ingrese sus credenciales
            </span>
          </div>

          <form
            className="h-[70%] flex flex-col justify-center gap-8 p-2"
            onSubmit={handleLogin}
          >
            <label className="w-full h-8 flex gap-2 items-center border-b border-black">
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
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              <input
                type="email"
                placeholder="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-[80%] pl-4 outline-none bg-transparent"
                required
              />
            </label>
            <label className="w-full h-8 border-b border-black flex gap-2 items-center">
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
                  d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
                />
              </svg>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-[80%] pl-4 outline-none bg-transparent"
                required
              />
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
            </label>
            <div className="w-full flex">
              <button
                type="input"
                className="w-full h-10 rounded-md bg-[#060606] text-white font-medium hover:bg-slate-700 hover:border hover:border-black"
              >
                Ingresar
              </button>
            </div>
            <div className="w-full flex text-sm">
              <label className="w-full flex items-center gap-1">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="size-4"
                />
                <p>Recuérdame</p>
              </label>
              <Link
                to="/recuperar"
                className="whitespace-nowrap cursor-pointer underline underline-offset-2 text-blue-800 font-medium"
              >
                Olvidaste tu contraseña?
              </Link>
            </div>
          </form>
        </div>

        <div className="w-[50%] h-full object-contain rounded-r-lg">
          <figure className="size-full rounded-r-lg">
            <img
              className="size-full object-fill rounded-r-lg"
              src="/img-2.jpg"
              alt="foto edificio"
            />
          </figure>
          <div className="absolute top-[22%] right-[28%] text-white/80 shadow-2xl capitalize bg-inherit">
            <h1 className=" font-extrabold text-xl">
              no sueñes, vive tus sueños
            </h1>
            <span className="font-normal text-sm">
              no hay lugar como el hogar...
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};
