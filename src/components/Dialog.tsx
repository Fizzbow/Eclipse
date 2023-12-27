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
    if (open) {
      dialog?.classList.add("in");
    } else {
      dialog.classList.remove("in");
    }
  }, [open]);
  return (
    <div
      className="dialog absolute z-[9999] full scale-0"
      flex="~ col items-center  justify-center"
    >
      <div
        className="right-0 top-0 text-red absolute font-bold"
        onClick={() => setOpen(!open)}
      >
        x
      </div>
      <div className="dialog-content fixed op-0">dialog content</div>
    </div>
  );
};

export default Dialog;
