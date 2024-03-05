import {
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

export type videocontext = {
  category: string;
  search: boolean;
  progress: number;
  setCategory: React.Dispatch<SetStateAction<string>>;
  setSearch: React.Dispatch<SetStateAction<boolean>>;
  setProgress: React.Dispatch<SetStateAction<number>>;
};

export const VideoContext = createContext<videocontext | null>(null);

export default function VideoContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [category, setCategory] = useState<string>("New");
  const [search, setSearch] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(100);

  return (
    <VideoContext.Provider
      value={{
        category,
        setCategory,
        search,
        setSearch,
        progress,
        setProgress,
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
