import { FormEvent } from "react";
import { FaSearch } from "react-icons/fa";
import Resize from "../Utils/Resize";
import { useVideoContext } from "../Context/Context";
export default function Header() {
  const { resize } = Resize();
  const { search, setSearch } = useVideoContext();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("form submitted");
  };
  return (
    <header className="flex justify-between items-center bg-zinc-900 shadow-md text-white p-3  md:p-4">
      {resize < 600 && search ? (
        ""
      ) : (
        <h1 className="text-accent-color text-[2rem] md:text-[2.3rem] flex items-center gap-1 font-bold">
          U{resize > 600 && <span>tube</span>}
        </h1>
      )}
      <form
        onSubmit={handleSubmit}
        className={`flex items-center gap-3 md:text-lg ${
          search && resize < 600 ? "flex-1" : "flex-initial"
        } sm:flex-initial`}
      >
        {search && (
          <input
            type="text"
            placeholder="Enter your search"
            className="bg-none border border-gray-500 rounded-md py-2 px-4 focus:border-gray-400 outline-none transition ease-in-out duration-300 flex-1"
          />
        )}
        <button
          type="button"
          onClick={() => resize < 600 && setSearch((prev) => !prev)}
          className="py-2 px-2 text-white"
        >
          <FaSearch />
        </button>
      </form>
    </header>
  );
}
