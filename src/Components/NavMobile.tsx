import { useVideoContext } from "../Context/Context";
import { NavbarMobileUtils } from "../Utils/NavUtils";
export const NavMobile = () => {
  const { category, setCategory } = useVideoContext();
  return (
    <nav className="fixed bottom-0  flex flex-row items-center justify-between w-full bg-zinc-900 h-fit">
      {NavbarMobileUtils.map((util, index) => (
        <button
          onClick={() => setCategory(util.name)}
          className={`py-3 px-6 text-2xl flex justify-center hover:bg-neutral-800 hover:text-accent-color flex-1 ${
            category === util.name && "bg-neutral-800 text-accent-color"
          }`}
          key={index}
        >
          {util.icon}
        </button>
      ))}
    </nav>
  );
};
