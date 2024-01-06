import { useEffect } from "react";
import "./Dialog.scss";
import Lyric from "../pages/Lyric.tsx";

interface Prop {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Dialog = ({ setOpen, open }: Prop) => {
  useEffect(() => {
    const dialog = document.querySelector(".dialog") as HTMLElement;

    if (open) {
      dialog?.classList.add("in");
    } else {
      dialog.classList.remove("in");
    }
  }, [open]);
  return (
    <div
      className="dialog absolute transition-all z-[9999] full scale-0"
      flex="~ col items-center  justify-center"
    >
      <div
        className="right-0 top-0 font-700 text-[40px] text-red absolute font-bold cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        x
      </div>
      <div
        className="dialog-content transition-opacity fixed op-0 "
        flex="~ col items-center"
      >
        <Lyric />
        {/* <span className="dialog-content_title">SPAN</span> */}
      </div>
    </div>
  );
};

export default Dialog;
