import { ReactNode } from "react";

export type TNav = {
  key: string;
  label: ReactNode;
  children?: TNav[];
};

export type TUserPath = {
  name: string;
  path?: string;
  element?: ReactNode;
  children?: TUserPath[];
};
