"use client";
import { BiSearch } from "react-icons/bi";
import { Input } from "../ui/input";

const Search = () => {
  return (
    <div className="border-[1px] w-full rounded-full shadow-sm md:w-auto hover:shadow-md transition cursor-pointer">
      <div className="flex flex-row items-center justify-between">
        <div className="text-sm text-gray-600 flex flex-row items-center pr-1 w-full">
          <Input
            placeholder="Enter your name..."
            className="border-none outline-none focus:shadow-none focus-visible:ring-0"
          />
          <div className="p-2 bg-orange-500 rounded-full text-white">
            <BiSearch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
