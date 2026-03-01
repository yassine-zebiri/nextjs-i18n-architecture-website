import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';
import { routing } from './i18n/routing';

const supportedLocales  = (routing.locales) as unknown as string []; // اللغات المدعومة في التطبيق
const rtlLocales = ["ar"]; // اللغات التي تتطلب اتجاه من اليمين لليسار

export default async function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const { pathname } = url;

  // تفعيل next-intl لتحديد اللغة
  const intlMiddleware = createMiddleware(routing);
  const response = await intlMiddleware(request);

  // تحديد اللغة من المسار
  const localeFromPath = pathname.split("/")[1];
  const locale = supportedLocales.includes(localeFromPath) ? localeFromPath : "en";

  // تحديد اتجاه الصفحة حسب اللغة
  response.headers.set("Content-Language", locale);
  response.headers.set("dir", rtlLocales.includes(locale) ? "rtl" : "ltr");


  return response;
 
}

// ✅ Matcher جديد يدعم جميع الروابط ما عدا الملفات أو مجلدات النظام
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|_vercel|.*\\.[^/]+$).*)'
  ]
};
