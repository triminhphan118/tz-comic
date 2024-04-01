"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      alt="logo"
      className="hidden md:block cursor-pointer rounded-md"
      height={30}
      width={40}
      src={"/images/turtle.jpg"}
    />
  );
};

export default Logo;
