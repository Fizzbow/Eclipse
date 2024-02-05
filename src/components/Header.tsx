import { useState } from "react";
import SpotifyIcon from "./icon/SpotifyIcon";
import { motion } from "framer-motion";

const Header = () => {
  const [isSpOpen, setIsSpOpen] = useState(false);
  return (
    <motion.nav initial={false} animate={isSpOpen ? "open" : "closed"}>
      <header className="my-5 backdrop-blur-lg items-center w-full flex flex-row justify-between">
        <span className="font-800 text-[#3C3C43] text-4 text-primary/100">
          ECLIPSE
        </span>
        <motion.button
          onClick={() => setIsSpOpen(!isSpOpen)}
          whileTap={{ scale: 0.97 }}
          className="flex-row flex gap-2 items-center bg-white rounded-8 border-none"
        >
          <SpotifyIcon />
        </motion.button>
      </header>

      <motion.button
        className="
          absolute 
          right-4
          transition-colors cursor-pointer
          bg-white top-17 py-3 px-2 border-none shadow-lg rounded-2
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
