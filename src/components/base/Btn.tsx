import { motion, HTMLMotionProps } from "framer-motion";
import React from "react";

interface BtnProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  outline?: boolean;
  loading?: boolean;
}

const Btn = (props: BtnProps) => {
  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      className={`border-none cursor-pointer font-sw
      font-600
      text-primary/80
      bg-transparent

      px-2
      text-4
      rounded-2
      ${props.className} ${
        props.outline && "outline-1 outline-solid outline-gray-300"
      }`}
      {...props}
    >
      {props.children}
    </motion.button>
  );
};

export default Btn;
