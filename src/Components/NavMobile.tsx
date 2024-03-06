import { useNavigate } from "react-router-dom";
import { useVideoContext } from "../Context/Context";
import { NavbarMobileUtils } from "../Utils/NavUtils";
export const NavMobile = () => {
  const { category, setCategory } = useVideoContext();
  const navigate = useNavigate();
  return (
    <nav className="fixed bottom-0 z-40 flex flex-row items-center justify-between w-full bg-zinc-900 h-fit">
      {NavbarMobileUtils.map((util, index) => (
        <button
          onClick={() => {
            navigate("/");
            setCategory(util.name);
          }}
          className={`py-3 px-6 text-2xl flex justify-center hover:bg-neutral-800 hover:text-accent-color flex-1 ${
            category === util.name && "text-accent-color"
          }`}
          key={index}
        >
          {util.icon}
        </button>
      ))}
    </nav>
  );
};
