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
  progress: number;
  search: boolean;
  setCategory: React.Dispatch<SetStateAction<string>>;
  setProgress: React.Dispatch<SetStateAction<number>>;
  setShowMenu: React.Dispatch<SetStateAction<boolean>>;
  setSearch: React.Dispatch<SetStateAction<boolean>>;
  // debounce: (callback: () => void, delay: number) => void;
};

export const VideoContext = createContext<videocontext | null>(null);

export default function VideoContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [category, setCategory] = useState<string>("New");
  const [progress, setProgress] = useState<number>(10);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [search, setSearch] = useState<boolean>(false);

  // function for debouncing
  // const debounce = (callback: (...args: any) => void, delay: number) => {
  //   let time: any;
  //   return function (...args: any) {
  //     clearTimeout(time);
  //     time = setTimeout(() => {
  //       callback(...args);
  //     }, delay);
  //   };
  // };

  return (
    <VideoContext.Provider
      value={{
        category,
        setCategory,
        progress,
        setProgress,
        showMenu,
        setShowMenu,
        search,
        setSearch,
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
