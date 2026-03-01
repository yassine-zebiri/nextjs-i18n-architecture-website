"use client";
import {
  Navbar,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Link,
} from "@heroui/react";
import Image from "next/image";
import { ThemeSwitcherComponent } from "./ThemeSwitcher";
import { SelectLang } from "./SelectLang";
import { useTranslations } from "next-intl";

export const AcmeLogo = () => {
  return (
    <Image
    src={"/assets/logo.png"}
    width={80}
    height={80}
    alt="logo ..."
    />
  );
};

export default function HeaderComponent() {
  const t=useTranslations("HeaderNavBar");
  const menuItems = [
    t("TitleOne"),
    t("TitleTwo"),
    t("TitleThree"),
    t("TitleFour"),
  ];

  return (
    <Navbar className="header" disableAnimation isBordered maxWidth="full">
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

     


      <NavbarContent className="flex-centered-logo " justify="start">
       <NavbarItem  className="logo">
          <AcmeLogo />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex justify-center  gap-4" justify="center">
        
        <NavbarItem>
          <Link className="navbar-link" href="#">
           {t("TitleOne")}
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link className="navbar-link" href="#services">
             {t("TitleTwo")}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link  href="#projects" className="navbar-link">
             {t("TitleThree")}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link  href="#contactUs" className="navbar-link">
             {t("TitleFour")}
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent   justify="end">
        <NavbarItem >
          <div className="flex gap-3 z-50">
            <ThemeSwitcherComponent/>
            <SelectLang/>
          </div>
            
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="bg-white dark:bg-[#1e293b]">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full dark:text-white text-black"
              
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
