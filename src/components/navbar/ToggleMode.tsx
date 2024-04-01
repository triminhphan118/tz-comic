import { Label } from "@radix-ui/react-label";
import { Switch } from "../ui/switch";
import { IoSunnySharp } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";

const ToggleMode = () => {
  return (
    <div className="flex items-center space-x-2">
      <Label htmlFor="airplane-mode">
        <IoSunnySharp />
      </Label>
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">
        <MdDarkMode />
      </Label>
    </div>
  );
};

export default ToggleMode;
