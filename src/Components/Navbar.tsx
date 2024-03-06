import { useNavigate } from "react-router-dom";
import { useVideoContext, videocontext } from "../Context/Context";
import { NavbarUtils } from "../Utils/NavUtils";
import { handleCategory } from "../Functions/FetchFunc";

export default function Navbar() {
  const { category, setCategory, showMenu } = useVideoContext() as videocontext;
  const navigate = useNavigate();
  return (
    <nav className="flex flex-col bg-neutral-900 w-fit justify-between">
      {NavbarUtils.map((nav, index) => (
        <div
          key={index}
          className={`flex items-center gap-3 py-4 px-6 hover:bg-zinc-800 hover:text-accent-color cursor-pointer ${
            category === nav.name && "bg-neutral-800 text-accent-color"
          }`}
          onClick={() => {
            let catReturned = handleCategory(nav.name, nav.type);
            if (!catReturned) return;
            navigate("/");
            setCategory(catReturned);
          }}
        >
          <span className="text-base md:text-2xl">{nav.icon}</span>
          {showMenu && <span className="whitespace-nowrap">{nav.name}</span>}
          {nav.divider && <hr />}
        </div>
      ))}
    </nav>
  );
}
