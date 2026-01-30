import { footerLinks, socialLinks } from "@/constant/constant";
import type { LucideIcon } from "lucide-react";

type footerLink = {
  id: number | string;
  href: string;
  label: string;
};

type SocialLink = {
  icon: LucideIcon;
  href: string;
  label: string;
};

const links = footerLinks as footerLink[];
const socLinks: SocialLink[] = socialLinks;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Logo & Copyright */}
          <div className="flex justify-center items-center text-center md:items-start md:text-left">
            <a href="#" className="inline-flex items-center gap-3">
              <img
                src="/icon.png"
                alt="AS Logo"
                className="h-12 w-12 sm:h-14 sm:w-14 object-contain"
              />
            </a>
          </div>

          {/* Links */}
          <nav className="w-full md:w-auto">
            <div className="flex items-center justify-center gap-3 sm:gap-4 text-center overflow-x-auto whitespace-nowrap [-webkit-overflow-scrolling:touch] px-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors shrink-0"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>

          {/* Social Links */}
          <div className="flex items-center justify-center md:justify-end gap-3 sm:gap-4">
            {socLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
