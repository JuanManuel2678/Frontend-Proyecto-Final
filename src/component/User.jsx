import { useContext, useState } from "react";
import { Modal } from "./Modal";
import { AuthContext } from "../context/AuthContext";

export const User = () => {
  const [showModal, setShowModal] = useState(false);
  const { user } = useContext(AuthContext);

  return (
    <div className="w-[100px] h-full flex justify-center gap-2 items-center font-mono">
      <figure className="">
        <img
          src="/img-1.jpg"
          alt="imagen usuario"
          className="size-[40px] rounded-lg"
        />
      </figure>



      <button onClick={() => setShowModal(!showModal)} >
        {showModal ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="size-5"
          >
            <path
              fill-rule="evenodd"
              d="M9.47 6.47a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 8.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06l4.25-4.25Z"
              clip-rule="evenodd"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="size-5"
          >
            <path
              fill-rule="evenodd"
              d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
              clip-rule="evenodd"
            />
          </svg>
        )}{" "}
      </button>

      {showModal && <Modal setShowModal={setShowModal} />}
    </div>
  );
};
