import type { AttributifyAttributes } from "@unocss/preset-attributify";

declare module "react" {
  interface HTMLAttributes<T> extends AttributifyAttributes, DOMAttributes<T> {}
  interface SVGProps<T> extends SVGAttributes<T>, ClassAttributes<T> {
    w?: string;
    h?: string;
  }
}
