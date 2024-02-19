import { motion, useCycle } from "framer-motion";
import { useDimensions } from "@/hooks/useDimensions";
import { useEffect, useRef } from "react";
import { Profile } from "@/types";

const sidebar = {
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

const GetPlayListBar = ({ profile }: { profile: Profile }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  useEffect(() => {
    if (isOpen) {
      fetchGetPlayList();
    }
  }, [isOpen]);

  const fetchGetPlayList = () => {};
  return (
    <motion.nav
      className="relative flex-1"
      ref={containerRef}
      initial={false}
      custom={height}
      animate={isOpen ? "open" : "closed"}
    >
      <motion.div
        className="bg-gray-300 -translate-x-[50%] h-[100%] absolute left-[50%] bottom-0 w-[100%]"
        variants={sidebar}
      ></motion.div>

      <motion.div
        className="cursor-pointer flex-center  absolute rounded-[50%] w-[200px] h-[200px] z-10 top-[50%] left-[50%]  -translate-y-[50%] -translate-x-[50%] "
        onClick={() => toggleOpen()}
      >
        <span className="font-800 text-white text-shadow-sm text-6">
          Get Your Spotify PlayLists
        </span>
      </motion.div>
    </motion.nav>
  );
};

const PlayList = () => {};

const Item = () => {};

export default GetPlayListBar;
