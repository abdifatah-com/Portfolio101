import { Slide } from "../animation/Slide";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import PageHeading from "@/app/components/shared/PageHeading";
import { site } from "../data/site";
import { getAchievements } from "@/lib/content";
import {
  BiAward,
  BiCalendar,
  BiCheckCircle,
  BiImage,
  BiTrophy,
  BiUserVoice,
} from "react-icons/bi";
import { HiAcademicCap, HiSparkles } from "react-icons/hi";

export const metadata: Metadata = {
  title: `Achievements | ${site.name}`,
  metadataBase: new URL(`${site.url}/achievements`),
  description: `Hackathon victories, competitive awards, community milestones, and technical achievements by ${site.name}`,
  openGraph: {
    title: `Achievements | ${site.name}`,
    url: `${site.url}/achievements`,
    description: `Hackathon victories, competitive awards, community milestones, and technical achievements by ${site.name}`,
    images: site.ogImage,
  },
};

export default function Achievements() {
  const achievements = getAchievements();
  const hackathons = achievements.filter((a) => a.category === "Hackathon");
  const leadership = achievements.filter(
    (a) => a.category === "Community" || a.id === "tiktok-creator-community"
  );
  const academicAndPrograms = achievements.filter(
    (a) =>
      a.category === "Award" ||
      a.category === "Project" ||
      (a.category === "Speaking" && a.id !== "tiktok-creator-community")
  );

  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6 lg:mt-32 mt-20">
      <PageHeading
        title="Achievements & Milestones"
        description="A record of competitive hackathon victories, stage presentations, community leadership at Dhidib Foundation, startup accelerators, and software innovation."
      />

      {/* Metrics Highlights */}
      <Slide delay={0.08}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 my-8">
          <div className="p-5 rounded-2xl border dark:border-zinc-800 border-zinc-200 dark:bg-primary-bg bg-zinc-50 flex flex-col justify-between">
            <span className="text-2xl text-amber-500 mb-2">
              <BiTrophy />
            </span>
            <div>
              <p className="text-2xl sm:text-3xl font-incognito font-bold text-zinc-900 dark:text-white">
                2 Wins
              </p>
              <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                $8,500+ Prize Grant Pool
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl border dark:border-zinc-800 border-zinc-200 dark:bg-primary-bg bg-zinc-50 flex flex-col justify-between">
            <span className="text-2xl text-rose-500 mb-2">
              <HiSparkles />
            </span>
            <div>
              <p className="text-2xl sm:text-3xl font-incognito font-bold text-zinc-900 dark:text-white">
                4M+
              </p>
              <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                Views Across Social Media
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl border dark:border-zinc-800 border-zinc-200 dark:bg-primary-bg bg-zinc-50 flex flex-col justify-between">
            <span className="text-2xl text-purple-500 mb-2">
              <BiUserVoice />
            </span>
            <div>
              <p className="text-2xl sm:text-3xl font-incognito font-bold text-zinc-900 dark:text-white">
                22K+
              </p>
              <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                TikTok Community (@the___pirate)
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl border dark:border-zinc-800 border-zinc-200 dark:bg-primary-bg bg-zinc-50 flex flex-col justify-between">
            <span className="text-2xl text-emerald-500 mb-2">
              <BiAward />
            </span>
            <div>
              <p className="text-2xl sm:text-3xl font-incognito font-bold text-zinc-900 dark:text-white">
                Board Member
              </p>
              <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                Dhidib Foundation
              </p>
            </div>
          </div>
        </div>
      </Slide>

      {/* Hackathons & Competitions */}
      <section className="my-14">
        <Slide delay={0.12}>
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="font-incognito text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Hackathon Victories & Competitions
              </h2>
              <p className="text-sm dark:text-zinc-400 text-zinc-600 mt-1">
                Competitive tech challenges where rapid prototyping, product viability, and live pitching won top honors.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {hackathons.map((item) => (
              <div
                key={item.id}
                className="group overflow-hidden rounded-2xl border dark:border-zinc-800 border-zinc-200 dark:bg-primary-bg bg-zinc-50 transition-all duration-300 hover:border-zinc-400 dark:hover:border-zinc-600"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8">
                  {item.image && (
                    <div className="lg:col-span-5 relative w-full h-64 lg:h-auto min-h-[220px] rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      {item.badge && (
                        <div className="absolute top-3 left-3 px-3 py-1 text-xs font-bold rounded-full bg-zinc-950/85 text-amber-300 border border-amber-400/30 backdrop-blur-md">
                          {item.badge}
                        </div>
                      )}
                    </div>
                  )}

                  <div className={item.image ? "lg:col-span-7 flex flex-col justify-between" : "lg:col-span-12"}>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-2">
                        <span className="flex items-center gap-1">
                          <BiCalendar /> {item.date}
                        </span>
                        <span>•</span>
                        <span className="font-semibold text-primary-color dark:text-primary-color">
                          {item.organizer}
                        </span>
                        {item.prize && (
                          <>
                            <span>•</span>
                            <span className="px-2 py-0.5 rounded-full font-bold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                              {item.prize}
                            </span>
                          </>
                        )}
                      </div>

                      <h3 className="font-incognito font-bold text-xl sm:text-2xl text-zinc-900 dark:text-zinc-100">
                        {item.title}
                      </h3>
                      <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mt-1 mb-4">
                        {item.subtitle}
                      </p>

                      <p className="text-sm sm:text-base dark:text-zinc-300 text-zinc-700 leading-relaxed mb-5">
                        {item.summary}
                      </p>

                      <div className="space-y-2 mb-6">
                        {item.highlights.map((highlight, i) => (
                          <div key={i} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                            <BiCheckCircle className="text-emerald-500 text-base shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-4 border-t dark:border-zinc-800/80 border-zinc-200">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs rounded-md dark:bg-zinc-800/60 bg-zinc-200/60 dark:text-zinc-400 text-zinc-600 font-medium"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Slide>
      </section>

      {/* Leadership & Dhidib Foundation */}
      <section className="my-14">
        <Slide delay={0.16}>
          <div className="mb-6">
            <h2 className="font-incognito text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              Leadership, Mentorship & Community Impact
            </h2>
            <p className="text-sm dark:text-zinc-400 text-zinc-600 mt-1">
              Serving on the Board of Dhidib Foundation, training creators with &apos;0 to Hero&apos;, and growing Digital Boost.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {leadership.map((item) => (
              <div
                key={item.id}
                className="overflow-hidden rounded-2xl border dark:border-zinc-800 border-zinc-200 dark:bg-primary-bg bg-zinc-50 flex flex-col justify-between transition-all duration-300 hover:border-zinc-400 dark:hover:border-zinc-600"
              >
                {item.image && (
                  <div className="relative w-full h-48 bg-zinc-100 dark:bg-zinc-900 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-top transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                )}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                        {item.badge}
                      </span>
                      <span className="text-xs text-zinc-500">{item.date}</span>
                    </div>

                    <h3 className="font-incognito font-bold text-xl text-zinc-900 dark:text-zinc-100 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs font-medium text-primary-color dark:text-primary-color mb-3">
                      {item.subtitle}
                    </p>

                    <p className="text-sm dark:text-zinc-300 text-zinc-600 leading-relaxed mb-4">
                      {item.summary}
                    </p>

                    <div className="space-y-2 mb-6">
                      {item.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                          <BiCheckCircle className="text-emerald-500 text-base shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t dark:border-zinc-800/80 border-zinc-200">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-xs rounded-md dark:bg-zinc-800/60 bg-zinc-200/60 dark:text-zinc-400 text-zinc-600"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Slide>
      </section>

      {/* Academic, Startup School & Tech Innovations */}
      <section className="my-14">
        <Slide delay={0.18}>
          <div className="mb-6">
            <h2 className="font-incognito text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              Academic, Startup Accelerator & AI Innovations
            </h2>
            <p className="text-sm dark:text-zinc-400 text-zinc-600 mt-1">
              Degrees, accelerator completions, and hands-on explorations in emerging AI & Machine Learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {academicAndPrograms.map((item) => (
              <div
                key={item.id}
                className="overflow-hidden rounded-2xl border dark:border-zinc-800 border-zinc-200 dark:bg-primary-bg bg-zinc-50 flex flex-col justify-between transition-all duration-300 hover:border-zinc-400 dark:hover:border-zinc-600"
              >
                {item.image && (
                  <div className="relative w-full h-48 bg-zinc-100 dark:bg-zinc-900 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-top transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                )}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                        {item.badge}
                      </span>
                      <span className="text-xs text-zinc-500">{item.date}</span>
                    </div>

                    <h3 className="font-incognito font-bold text-xl text-zinc-900 dark:text-zinc-100 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs font-medium text-primary-color dark:text-primary-color mb-3">
                      {item.subtitle}
                    </p>

                    <p className="text-sm dark:text-zinc-300 text-zinc-600 leading-relaxed mb-4">
                      {item.summary}
                    </p>

                    <div className="space-y-2 mb-6">
                      {item.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                          <BiCheckCircle className="text-emerald-500 text-base shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t dark:border-zinc-800/80 border-zinc-200">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-xs rounded-md dark:bg-zinc-800/60 bg-zinc-200/60 dark:text-zinc-400 text-zinc-600"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Slide>
      </section>

      {/* Gallery link CTA */}
      <Slide delay={0.2}>
        <div className="my-12 p-8 rounded-2xl border dark:border-zinc-800 border-zinc-200 dark:bg-primary-bg bg-zinc-50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3 className="font-incognito font-bold text-xl text-zinc-900 dark:text-zinc-100 mb-1">
              Explore the Visual Gallery
            </h3>
            <p className="text-sm dark:text-zinc-400 text-zinc-600">
              Browse captures from Dhidib Foundation trainings, university thesis defense, hackathons, and conferences.
            </p>
          </div>
          <Link
            href="/photos"
            className="inline-flex items-center gap-x-2 px-5 py-3 rounded-xl font-semibold dark:bg-zinc-100 bg-zinc-900 dark:text-zinc-900 text-zinc-100 hover:opacity-90 transition-opacity whitespace-nowrap text-sm"
          >
            <BiImage className="text-lg" /> View All Photos
          </Link>
        </div>
      </Slide>
    </main>
  );
}
