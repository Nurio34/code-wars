"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type LinkType = {
  link: {
    name: string;
    to: string;
    label: string;
  };
};

function LinkComponent({ link }: LinkType) {
  const path = usePathname().split("/")[1];

  const isActive = path === link.name;

  return (
    <Link
      href={link.to}
      className={`capitalize hover:bg-base-300 hover:text-base-content block py-[0.5vh] px-[0.5vw] rounded-md
        ${isActive ? "bg-base-content text-base-100" : ""}
        `}
    >
      {link.label}
    </Link>
  );
}
export default LinkComponent;
