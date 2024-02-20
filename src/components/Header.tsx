import { generateCodeVerifier } from "@/utils/PKCE";
import Btn from "./base/Btn";
import { SPOTIFY_CLIENT_ID } from "@/constants";
import { redirectToAuthCodeFlow } from "@/api/spotify/redirectToAuthCodeFlow";

interface HeaderProps {
  connected: boolean;
  AvaUrl?: string;
}

const Header = ({ AvaUrl, connected }: HeaderProps) => {
  const connectSpotify = () => {
    const initVerifier = generateCodeVerifier();
    redirectToAuthCodeFlow(SPOTIFY_CLIENT_ID, initVerifier);
  };
  return (
    <header
      style={{
        backgroundImage:
          "radial-gradient(rgba(0, 0, 0, 0) 1px,var(--background) 1px)",
      }}
      className="flex sticky
        font-sw
        p-3
        flex-row justify-between
        border-b-1 border-b-dotted border-b-primary/100
        "
    >
      <div />
      <span
        style={{
          WebkitTextFillColor: "transparent",
        }}
        className="font-500 text-7 bg-gradient-to-r
        bg-clip-text from-primary/65  to-blue-500"
      >
        ECLIPSE
      </span>

      {connected ? (
        <div>{AvaUrl && <Ava url={AvaUrl} />}</div>
      ) : (
        <Btn onClick={() => connectSpotify()} outline>
          connect with spotify
        </Btn>
      )}
    </header>
  );
};

const Ava = ({ url }: { url: string }) => {
  return (
    <div
      className={`w-10 h-10 bg-contain rounded-[50%] ${
        url ? " bg-gradient-to-r from-primary/65  to-blue-500" : ""
      }`}
      style={{ backgroundImage: `url(${url})` }}
    ></div>
  );
};

export default Header;
