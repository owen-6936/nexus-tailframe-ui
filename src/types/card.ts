import { Variants } from "framer-motion";
import { AnimationVariants } from "../constants/variants";
import { ReactNode } from "react";

type CardRounded_t =
  | "none"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "full";

export interface CardProps {
  children: React.ReactNode;
  index?: number;
  className?: string;
  bg?: string;
  padding?: string;
  // Allows the user to provide custom animation variants
  variants?: AnimationVariants | Variants;
  amount?: number;
  rounded?: CardRounded;
}

export interface CardHeaderProps {
  title: string;
  icon?: ReactNode;
  subtitle?: string;
  align?: "left" | "center" | "right";
  gradient?: boolean;
  className?: string;
}

export interface CardSectionProps {
  children: React.ReactNode;
  className?: string;
}

export enum CardRounded {
  none = "rounded-none",
  sm = "rounded-sm",
  md = "rounded-md",
  lg = "rounded-lg",
  xl = "rounded-xl",
  "2xl" = "rounded-2xl",
  "3xl" = "rounded-3xl",
  full = "rounded-full",
}
