"use client";

import { routing } from "@/src/i18n/routing";
import { usePathname, useRouter } from "next/navigation";

export function SelectLang(){
    const router = useRouter();
  const pathname = usePathname();

  // استخراج اللغة الحالية من المسار
  const pathLocale = pathname.split("/")[1] as typeof routing.locales[number];
  const currentLocale =
    routing.locales.includes(pathLocale)
      ? pathname.split("/")[1]
      : routing.locales[0]; // استخدام اللغة الافتراضية إذا لم تكن موجودة

  const handleChange = (locale:string) => {
    // استبدال اللغة القديمة باللغو الجديدة في المسار
    const newPath = `/${locale}${pathname.replace(
      new RegExp(`^/(${routing.locales.join("|")})`),
      ""
    )}`;
    router.push(newPath);
  };
    return(
        
        <div className="flex items-center gap-2">
      <select
        id="lang"
        value={currentLocale}
        onChange={(e) => handleChange(e.target.value)}
       
        className="border dark:border-neutral-700 rounded-lg p-0 text-black text-sm dark:text-neutral-200 w-10 h-10"
      >
        {routing.locales.map((locale) => (
          <option key={locale} value={locale} className="dark:bg-neutral-600">
            {locale.toUpperCase()}
          </option>
        ))}
      </select>
    </div>

    )
}