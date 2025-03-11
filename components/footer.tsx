import Link from "next/link";
import { Github, Instagram, Linkedin, Globe, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <p className="text-gray-400 text-sm text-center md:text-left">
          © {new Date().getFullYear()} Western Founders Club. All rights reserved.
        </p>

        <div className="flex space-x-4 mt-4 md:mt-0">
          {[
            { icon: Instagram, label: "Instagram", link: "https://www.instagram.com/westernfoundersnetwork/" },
            { icon: Linkedin, label: "LinkedIn", link: "https://www.linkedin.com/company/foundersnetwork/" },
            { icon: Facebook, label: "Facebook", link: "https://www.facebook.com/westernfoundersnetwork" },
            { icon: Globe, label: "Website", link: "https://www.foundersnetwork.ca" },
          ].map(({ icon: Icon, label, link }) => (
            <Link
              key={label}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Icon className="h-5 w-5" />
              <span className="sr-only">{label}</span>
            </Link>
          ))}
        </div>

      </div>
    </footer>
  );
}
