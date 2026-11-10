import { site } from "@/app/data/site";

export default function Comments() {
  return (
    <p className="dark:text-zinc-400 text-zinc-600">
      Want to continue the conversation? Email me at{" "}
      <a
        href={`mailto:${site.email}`}
        className="dark:text-primary-color text-tertiary-color hover:underline"
      >
        {site.email}
      </a>
      .
    </p>
  );
}
