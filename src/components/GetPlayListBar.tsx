import { motion, useCycle } from "framer-motion";
import { useDimensions } from "@/hooks/useDimensions";
import { useEffect, useRef, useState } from "react";
import { Profile, UserPlaylistObject } from "@/types";
import { getUserAllPlayList } from "@/api/spotify/me/getUserAllPlayList";

const playListBar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  }),
  closed: {
    clipPath: "circle(100px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const playItem = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const playListText = {
  open: {
    opacity: 0,
  },
  closed: {
    opacity: 1,
    transition: {
      delay: 0.7,
    },
  },
};

const GetPlayListBar = ({ profile }: { profile: Profile }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const [playLists, setPlayLists] = useState<UserPlaylistObject[]>([]);
  const { height } = useDimensions(containerRef);

  useEffect(() => {
    if (isOpen) {
      fetchGetPlayList();
    }
  }, [isOpen]);

  const fetchGetPlayList = async () => {
    const res = await getUserAllPlayList();
    if (res && res.items.length) {
      setPlayLists([...res.items]);
    }
  };
  return (
    <motion.nav
      className="relative flex-1"
      ref={containerRef}
      initial={false}
      custom={height}
      animate={isOpen ? "open" : "closed"}
    >
      <motion.ul
        className="bg-gray-300 flex-center flex-col gap-10 -translate-x-[50%] h-[100%] absolute left-[50%] bottom-0 w-[100%]"
        variants={playListBar}
      >
        {playLists.map((list) => {
          return (
            <motion.li
              key={list.id}
              className="min-w-100  px-5 py-3 flex flex-row gap-10 rounded-2 flex-center border-primary/900 border-2 border-solid"
              variants={playItem}
            >
              <div
                className="w-20 h-20 bg-contain bg-no-repeat rounded-2"
                style={{ backgroundImage: `url(${list.images[0].url})` }}
              />
              <div className="flex-1 flex flex-col font-plan gap-2">
                <span className="text-gray-100 font-600 text-4">
                  {list.name}
                </span>
                <span className="text-right">
                  {list.owner.display_name || ""}
                </span>
              </div>
            </motion.li>
          );
        })}
      </motion.ul>

      <motion.div
        variants={playListText}
        className="cursor-pointer flex-center
        font-800 text-white text-shadow-sm text-6 
        absolute rounded-[50%] w-[200px] h-[200px] z-10 top-[50%] left-[50%]  -translate-y-[50%] -translate-x-[50%] "
        onClick={() => toggleOpen()}
      >
        Get Your Spotify PlayLists
      </motion.div>
    </motion.nav>
  );
};

export default GetPlayListBar;
