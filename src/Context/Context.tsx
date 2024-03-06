import {
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

export type videocontext = {
  category: string;
  showMenu: boolean;
  search: boolean;
  progress: number;
  setCategory: React.Dispatch<SetStateAction<string>>;
  setSearch: React.Dispatch<SetStateAction<boolean>>;
  setProgress: React.Dispatch<SetStateAction<number>>;
  setShowMenu: React.Dispatch<SetStateAction<boolean>>;
};

export const VideoContext = createContext<videocontext | null>(null);

export default function VideoContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [category, setCategory] = useState<string>("New");
  const [search, setSearch] = useState<boolean>(
    window.innerWidth > 600 ? true : false,
  );
  const [progress, setProgress] = useState<number>(10);
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <VideoContext.Provider
      value={{
        category,
        setCategory,
        search,
        setSearch,
        progress,
        setProgress,
        showMenu,
        setShowMenu,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
}

export const useVideoContext = () => {
  const videoContext = useContext(VideoContext);
  if (!videoContext) {
    throw new Error("video context not found");
  }
  return videoContext;
};
