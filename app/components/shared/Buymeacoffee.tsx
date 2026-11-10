import { site } from "@/app/data/site";

export default function Buymeacoffee() {
  return (
    <a
      href={`mailto:${site.email}`}
      className="flex items-center lg:flex-row flex-col lg:justify-around justify-center lg:text-start text-center gap-2 min-h-[110px] dark:bg-primary-bg bg-secondary-bg hover:dark:bg-[#2e290e44] rounded-lg border dark:border-zinc-800 border-zinc-200 hover:dark:border-[#ffdd0060] hover:border-[#e6d14fe7] duration-300 p-6 group"
    >
      Have a project in mind? Let&apos;s work together.
      <span className="font-incognito font-semibold">{site.email}</span>
    </a>
  );
}
