import { motion } from "framer-motion";
import SpotifyIcon from "@/components/icon/SpotifyIcon";
import { useState } from "react";
import Home from "./Home";

import { SPOTIFY_CLIENT_ID } from "@/constants";
import { generateCodeVerifier } from "@/utils/PKCE";
import { redirectToAuthCodeFlow } from "@/api/spotify/redirectToAuthCodeFlow";

const Layout = () => {
  return (
    <main className="full flex flex-col">
      <Header />
      <Home />
    </main>
  );
};

const Header = () => {
  const [isSpOpen, setIsSpOpen] = useState(false);

  const connectSpotify = () => {
    const initVerifier = generateCodeVerifier();
    redirectToAuthCodeFlow(SPOTIFY_CLIENT_ID, initVerifier);
  };

  return (
    <motion.header
      initial={false}
      animate={isSpOpen ? "open" : "closed"}
      className="py-3 sticky bg-gray-100 rounded-2 items-center flex px-5 mx-5 flex-row justify-between"
    >
      <div />
      <span className="font-800  text-5 text-slate-600">ECLIPSE</span>

      <motion.button
        onClick={() => setIsSpOpen(!isSpOpen)}
        whileTap={{ scale: 0.97 }}
        className=" border-none bg-transparent"
      >
        <SpotifyIcon />
      </motion.button>

      <motion.button
        onClick={() => connectSpotify()}
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
    </motion.header>
  );
};

export default Layout;
