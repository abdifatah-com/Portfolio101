import { Slide } from "../animation/Slide";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import PageHeading from "@/app/components/shared/PageHeading";
import { site } from "../data/site";
import { getGalleryPhotos } from "@/lib/content";
import { BiAward, BiRightArrowAlt } from "react-icons/bi";

export const metadata: Metadata = {
  title: `Photos | ${site.name}`,
  metadataBase: new URL(`${site.url}/photos`),
  description: `Photos, hackathon moments, Dhidib Foundation trainings, and stage presentations from ${site.name}`,
  openGraph: {
    title: `Photos | ${site.name}`,
    url: `${site.url}/photos`,
    description: `Photos, hackathon moments, Dhidib Foundation trainings, and stage presentations from ${site.name}`,
    images: site.ogImage,
  },
};

export default function Photos() {
  const photos = getGalleryPhotos();

  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6 lg:mt-32 mt-20">
      <PageHeading
        title="Photos & Moments"
        description="A visual journey capturing University of Hargeisa thesis defense, Dhidib Foundation '0 to Hero' trainings, hackathon victories, and stage presentations."
      />

      <Slide delay={0.08}>
        <div className="my-6 p-4 rounded-xl border dark:border-zinc-800 border-zinc-200 dark:bg-primary-bg/60 bg-secondary-bg/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-x-3">
            <span className="p-2 rounded-lg bg-amber-500/10 text-amber-500 text-xl">
              <BiAward />
            </span>
            <p className="text-sm dark:text-zinc-300 text-zinc-700">
              Discover the full stories, awards, and technical projects behind each moment.
            </p>
          </div>
          <Link
            href="/achievements"
            className="inline-flex items-center gap-x-1 text-sm font-semibold dark:text-primary-color text-secondary-color hover:underline whitespace-nowrap"
          >
            View Achievements <BiRightArrowAlt className="text-lg" />
          </Link>
        </div>
      </Slide>

      <section className="my-10">
        <Slide delay={0.12}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo, index) => (
              <div
                key={photo.id}
                className="group relative flex flex-col overflow-hidden rounded-2xl border dark:border-zinc-800 border-zinc-200 dark:bg-primary-bg bg-zinc-50 transition-all duration-300 hover:border-zinc-400 dark:hover:border-zinc-600"
              >
                <div className="relative w-full h-80 overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                    priority={index < 3}
                  />
                  <div className="absolute top-3 left-3 flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-zinc-950/80 text-white backdrop-blur-md border border-white/10">
                      {photo.category}
                    </span>
                    <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-zinc-900/60 text-zinc-300 backdrop-blur-md">
                      {photo.date}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-incognito font-semibold text-lg text-zinc-900 dark:text-zinc-100 mb-2">
                      {photo.title}
                    </h3>
                    <p className="text-sm dark:text-zinc-400 text-zinc-600 leading-relaxed">
                      {photo.caption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Slide>
      </section>
    </main>
  );
}
