import { useState } from "react";
import SpotifyIcon from "./icon/SpotifyIcon";
import { motion } from "framer-motion";

const Header = () => {
  const [isSpOpen, setIsSpOpen] = useState(false);
  return (
    <motion.nav
      className="sticky top-5 h-[100px]"
      initial={false}
      animate={isSpOpen ? "open" : "closed"}
    >
      <header className="py-3  bg-gray-100 rounded-2 items-center w-full flex   flex-row justify-between">
        <div />
        <span className="font-800  text-5 text-slate-600">ECLIPSE</span>
        <motion.button
          onClick={() => setIsSpOpen(!isSpOpen)}
          whileTap={{ scale: 0.97 }}
          className=" border-none bg-transparent"
        >
          <SpotifyIcon />
        </motion.button>
      </header>

      <motion.button
        className="
          absolute 
          right-4
          transition-colors cursor-pointer
          bg-white top-12 py-3 px-2 border-none shadow-lg rounded-2
          hover:bg-primary/10"
        style={{ pointerEvents: isSpOpen ? "auto" : "none" }}
        variants={{
          closed: {
            opacity: 0,
            scale: 0.5,
            transition: {
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01],
            },
          },
          open: {
            opacity: 1,
            scale: 1,
            transition: {
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01],
            },
          },
        }}
      >
        <span className="text-primary/90 font-600">connect with Spotify</span>
      </motion.button>
    </motion.nav>
  );
};

export default Header;
