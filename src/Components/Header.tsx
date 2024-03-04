import { FormEvent } from "react";
import { FaSearch } from "react-icons/fa";
export default function Header() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <header className="flex justify-between items-center bg-gray-700 text-white p-4">
      <h1 className="text-sky-400 text-[1.7rem] md:text-[2.3rem] flex items-center gap-1 font-bold">
        U <span>tube</span>
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-3 md:text-lg"
      >
        <input
          type="text"
          placeholder="Enter your search"
          className="bg-none border border-gray-500 rounded-md py-2 px-4 focus:border-gray-400 outline-none transition ease-in-out duration-300"
        />
        <button className="py-2 px-2 text-white">
          <FaSearch />
        </button>
      </form>
    </header>
  );
}
