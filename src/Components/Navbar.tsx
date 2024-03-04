import { useVideoContext, videocontext } from "../Context/Context";
import { NavbarUtils } from "../Utils/NavUtils";

export default function Navbar() {
  const { setCategory } = useVideoContext() as videocontext;
  const handleCategory = (cat: string, type: string) => {
    switch (type) {
      case "home":
        setCategory("");
        break;
      case "category":
        setCategory(cat);
        break;
      default:
        break;
    }
  };
  return (
    <nav className="flex flex-col bg-gray-700 w-fit justify-between border-t border-black">
      {NavbarUtils.map((nav, index) => (
        <div
          key={index}
          className="flex items-center gap-3 py-4 px-6 hover:bg-gray-500 cursor-pointer"
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
