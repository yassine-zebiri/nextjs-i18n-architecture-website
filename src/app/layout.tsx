import { Viewport } from "next";
// @ts-ignore: allow side-effect CSS import without type declarations
import "./globals.css";
import { routing } from "../i18n/routing";



type Props = {
  children: React.ReactNode;
};

export const viewport:Viewport={
  themeColor:"#491899",
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export async function generateStaticParams(){
  const locales=routing.locales;
  return locales.map((locale)=>({locale}))
}

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default function RootLayout({children}: Props) {
  return (
    <>
      {children}
    </>
  )
}