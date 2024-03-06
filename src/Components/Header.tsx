import { KeyboardEvent, useRef } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import Resize from "../Utils/Resize";
import { useVideoContext } from "../Context/Context";
export default function Header() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { resize } = Resize();
  const { setCategory, setShowMenu, showMenu } = useVideoContext();
  const handleSubmit = (e: KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.key !== "Enter") return;
    if (!inputRef?.current) return;
    if (inputRef.current.value.length < 4) return;
    setCategory(inputRef.current.value);
    inputRef.current.value = "";
    inputRef.current.blur();
  };
  return (
    <header className="flex gap-5 justify-between items-center bg-zinc-900 shadow-md text-white p-3  md:p-4">
      <h1 className="text-accent-color text-[2rem] md:text-[2.3rem] flex items-center gap-1 font-bold">
        U{resize > 600 && <span>tube</span>}
      </h1>

      <div
        className={`flex items-center gap-3 md:text-lg ${
          resize < 600 ? "flex-1" : "flex-initial"
        } sm:flex-initial`}
      >
        <input
          onKeyUp={handleSubmit}
          ref={inputRef}
          type="text"
          placeholder="Enter your search"
          className={`bg-transparent border text-black border-gray-500 rounded-md py-2 px-4 focus:border-gray-400 outline-none transition ease-in-out duration-300 flex-1`}
        />

        {resize > 700 && (
          <button
            type="button"
            onClick={() => setShowMenu((prev) => !prev)}
            className="text-white  text-xl md:text-2xl hover:text-accent-color ml-4"
          >
            {showMenu ? <IoMdClose /> : <CiMenuBurger />}
          </button>
        )}
      </div>
    </header>
  );
}
