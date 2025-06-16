"use client";
import Image from "next/image";
import { ICONS } from "@/utils";
import { useRouter } from "next/navigation";

export const NavbarLogo = () => {
  const router = useRouter();

  return (
    <div style={{ cursor: "pointer" }}>
      <Image src={ICONS.LOGO} width={150} height={100} alt="logo" onClick={() => router.push("/")} />
    </div>
  );
};
