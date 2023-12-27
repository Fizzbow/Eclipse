import { useEffect } from "react";
import "./Dialog.scss";

type Animation = "blowup";
interface Prop {
  open: boolean;
  setOpen: (open: boolean) => void;
  animation?: Animation;
}

const Dialog = ({ animation, setOpen, open }: Prop) => {
  useEffect(() => {
    const dialog = document.querySelector(".dialog") as HTMLElement;

    // if (dialog.classList.contains("in") || dialog.classList.contains("out")) {
    //   dialog.classList.remove("in");
    //   dialog.classList.remove("out");
    // }
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
        className="dialog-content transition-opacity fixed op-0 font-bold text-white text-[20px]"
        flex="~ col items-center"
      >
        <span>흐릿하게 드리운</span>
        <span>안갯속 All alone</span>
        <span>널 가로막은 경계선</span>
        <span>하나 둘 걷히면</span>
        <span>끝없이 또 Walk away</span>
        <span>널 가둔 그 미로</span>
      </div>
    </div>
  );
};

export default Dialog;
