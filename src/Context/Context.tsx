import {
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

export type videocontext = {
  category: string;
  setCategory: React.Dispatch<SetStateAction<string>>;
  search: boolean;
  setSearch: React.Dispatch<SetStateAction<boolean>>;
};

export const VideoContext = createContext<videocontext | null>(null);

export default function VideoContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [category, setCategory] = useState<string>("New");
  const [search, setSearch] = useState<boolean>(false);

  return (
    <VideoContext.Provider value={{ category, setCategory, search, setSearch }}>
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
