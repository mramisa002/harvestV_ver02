import {AccountAccess} from "@/components/account-access";
import type { Metadata } from "next";
import { LanguageProvider } from "@/lib/language";
import { FarmProvider } from "@/lib/farm-context";
import { ProfileProvider } from "@/lib/profile-context";
import "leaflet/dist/leaflet.css";
import "@fontsource/poppins/latin-400.css";
import "@fontsource/poppins/latin-500.css";
import "@fontsource/poppins/latin-600.css";
import "@fontsource/poppins/latin-700.css";
import "@fontsource/poppins/latin-800.css";
import "@fontsource/lora/latin-400.css";
import "@fontsource/lora/latin-500.css";
import "@fontsource/lora/latin-600.css";
import "@fontsource/lora/latin-700.css";
import "@fontsource/lora/latin-400-italic.css";
import "@fontsource/noto-sans-bengali/bengali-400.css";
import "@fontsource/noto-sans-bengali/bengali-500.css";
import "@fontsource/noto-sans-bengali/bengali-600.css";
import "./globals.css";
import "./figma-pages.css";
import "./figma-responsive.css";
import "./typography.css";
import "./live.css";
import "./profile/profile.css";

export const metadata: Metadata = {
  title: "HarvestV — Plan your next crop with confidence",
  description: "A simpler way to explore seasonal crop rotations for your farm in Bangladesh.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><LanguageProvider><ProfileProvider><AccountAccess><FarmProvider>{children}</FarmProvider></AccountAccess></ProfileProvider></LanguageProvider></body></html>;
}
