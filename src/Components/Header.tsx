import { KeyboardEvent, useRef } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import Resize from "../Utils/Resize";
import { useVideoContext } from "../Context/Context";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { resize } = Resize();
  const navigate = useNavigate();
  const { search, setSearch, setCategory, setShowMenu, showMenu } =
    useVideoContext();
  const handleSubmit = (e: KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.key !== "Enter") return;
    if (!inputRef?.current) return;
    navigate("/");
    if (inputRef.current.value.length < 4) return;
    setCategory(inputRef.current.value);
    inputRef.current.value = "";
    inputRef.current.blur();
  };
  return (
    <header className="flex gap-5 justify-between items-center bg-zinc-900 shadow-md text-white p-3  md:p-4">
      <div className="flex items-center gap-3">
        {resize > 700 && (
          <button
            type="button"
            onClick={() => setShowMenu((prev) => !prev)}
            className="text-white  text-xl md:text-2xl hover:text-accent-color ml-4"
          >
            {showMenu ? <IoMdClose /> : <CiMenuBurger />}
          </button>
        )}
        <a
          href="/"
          className="text-accent-color text-lg md:text-[2.3rem] flex items-center gap-1 font-bold"
        >
          <img src="/logo.svg" className="h-5 md:h-auto" alt="" />
          {resize > 600 || !search ? <span>tube</span> : ""}
        </a>
      </div>

      <div
        className={`flex items-center gap-3 md:text-lg ${
          resize < 600 && search ? "flex-1" : "flex-initial"
        } sm:flex-initial`}
      >
        {search && (
          <input
            onKeyUp={handleSubmit}
            ref={inputRef}
            type="text"
            onBlur={() => setSearch(false)}
            autoFocus={search}
            placeholder="Enter your search"
            className={`bg-transparent border text-white border-gray-500 rounded-md py-2 px-4 focus:border-gray-400 outline-none transition ease-in-out duration-300 flex-1`}
          />
        )}
        <button
          type="button"
          onClick={() => setSearch((prev) => !prev)}
          className={`py-2 px-2 text-white ${
            search ? "self-start hidden" : "self-end flex"
          }`}
        >
          <FaSearch />
        </button>
      </div>
    </header>
  );
}
