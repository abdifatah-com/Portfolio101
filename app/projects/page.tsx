import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import type { ProjectType } from "@/types";
import EmptyState from "../components/shared/EmptyState";
import { Slide } from "../animation/Slide";
import PageHeading from "../components/shared/PageHeading";
import { getProjects } from "@/lib/content";
import { site } from "../data/site";

export const metadata: Metadata = {
  title: `Projects | ${site.name}`,
  metadataBase: new URL(`${site.url}/projects`),
  description: `Explore projects built by ${site.name}`,
  openGraph: {
    title: `Projects | ${site.name}`,
    url: `${site.url}/projects`,
    description: `Explore projects built by ${site.name}`,
    images: site.ogImage,
  },
};

export default async function Project() {
  const projects: ProjectType[] = getProjects();

  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6">
      <PageHeading
        title="Projects"
        description="A collection of my recent work and open-source contributions, from product UIs to experiments in TypeScript, JavaScript, and Python."
      />

      <Slide delay={0.1}>
        {projects.length > 0 ? (
          <section className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-12">
            {projects.map((project) => (
              <Link
                href={`/projects/${project.slug}`}
                key={project._id}
                className="flex items-center gap-x-4 dark:bg-primary-bg bg-zinc-50 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 p-4 rounded-xl transition-all duration-300 group"
              >
                <div className="relative w-14 h-14 shrink-0 rounded-lg overflow-hidden border dark:border-zinc-800 border-zinc-200 bg-zinc-900">
                  <Image
                    src={project.coverImage?.image ?? "/projects/dhidib-foundation.svg"}
                    fill
                    alt={project.name}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div>
                  <h2 className="text-base font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 mb-1 group-hover:text-primary-color dark:group-hover:text-primary-color transition-colors">
                    {project.name}
                  </h2>
                  <div className="text-xs sm:text-sm dark:text-zinc-400 text-zinc-600 line-clamp-2">
                    {project.tagline}
                  </div>
                </div>
              </Link>
            ))}
          </section>
        ) : (
          <EmptyState value="Projects" />
        )}
      </Slide>
    </main>
  );
}
