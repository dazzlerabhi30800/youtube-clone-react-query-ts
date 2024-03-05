import { useVideoContext, videocontext } from "../Context/Context";
import { NavbarUtils } from "../Utils/NavUtils";

export default function Navbar() {
  const { category, setCategory } = useVideoContext() as videocontext;
  const handleCategory = (cat: string, type: string) => {
    switch (type) {
      case "home":
        setCategory("New");
        break;
      case "category":
        setCategory(cat);
        break;
      default:
        break;
    }
  };
  return (
    <nav className="flex flex-col bg-neutral-900 w-fit justify-between">
      {NavbarUtils.map((nav, index) => (
        <div
          key={index}
          className={`flex items-center gap-3 py-4 px-6 hover:bg-neutral-800 hover:text-accent-color cursor-pointer ${
            category === nav.name && "bg-neutral-800 text-accent-color"
          }`}
          onClick={() => handleCategory(nav.name, nav.type)}
        >
          <span className="text-base md:text-2xl">{nav.icon}</span>
          <span>{nav.name}</span>
          {nav.divider && <hr />}
        </div>
      ))}
    </nav>
  );
}
