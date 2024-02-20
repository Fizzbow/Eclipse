import { motion, useCycle } from "framer-motion";
import { useDimensions } from "@/hooks/useDimensions";
import { useEffect, useRef } from "react";
import { Profile } from "@/types";
import { getUserAllPlayList } from "@/api/spotify/me/getUserAllPlayList";

const playListBar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(100px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
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
  const { height } = useDimensions(containerRef);

  useEffect(() => {
    if (isOpen) {
      fetchGetPlayList();
    }
  }, [isOpen]);

  const fetchGetPlayList = async () => {
    const res = await getUserAllPlayList();
    console.log({ res });
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
        className="bg-gray-300 flex-center -translate-x-[50%] h-[100%] absolute left-[50%] bottom-0 w-[100%]"
        variants={playListBar}
      >
        <motion.li
          className="w-30 h-10 rounded-2 flex-center border-blue border-2 border-solid"
          variants={playItem}
        >
          Items Items
        </motion.li>
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
