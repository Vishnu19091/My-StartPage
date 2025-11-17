import { KeyBindsProps } from "@/app/_components/KeyBinds";

// KeyBinds || ShortCuts
export const shortcuts: KeyBindsProps[] = [
  { keyName: "S (default)", link: "Focus Input field" },

  { keyName: "Escape (default)", link: "Unfocus Input field" },

  { keyName: "G", link: "GitHub" },

  { keyName: "M", link: "Gmail" },

  { keyName: "T", link: "TailScale" },

  { keyName: "C", link: "ChatGPT" },

  { keyName: "W", link: "WhatsApp" },

  { keyName: "L", link: "LeetCode" },

  { keyName: "F", link: "Freedium" },

  { keyName: "Y", link: "YouTube" },

  { keyName: "R", link: "Reddit" },

  { keyName: ", | comma (default)", link: "Toggles links icons" },

  { keyName: "K (default)", link: "Toggles Key Bindings (also used to close)" },
];
