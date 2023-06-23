import { CiApple, CiLemon } from "react-icons/ci";
import { PiCarrot } from "react-icons/pi";
import { GiWatermelon, GiPear, GiOrangeSlice } from "react-icons/gi";
import { LuSalad } from "react-icons/lu";
import { IconType } from "react-icons";

type Icons = {
  [key: string]: IconType;
};

// List of all the icons for each item
export const icons: Icons = {
  Apple: CiApple,
  Carrot: PiCarrot,
  Melon: GiWatermelon,
  Pear: GiPear,
  Lemon: CiLemon,
  Orange: GiOrangeSlice,
  Salad: LuSalad,
};
