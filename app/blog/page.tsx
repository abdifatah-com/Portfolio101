import { Metadata } from "next";
import { BiDetail } from "react-icons/bi";
import Posts from "../components/pages/Posts";
import Social from "../components/shared/Social";
import { Slide } from "../animation/Slide";
import PageHeading from "@/app/components/shared/PageHeading";
import { site } from "../data/site";

export const metadata: Metadata = {
  title: `Blog | ${site.name}`,
  metadataBase: new URL(`${site.url}/blog`),
  description:
    "Exploring the latest in web development, design, and technology.",
  openGraph: {
    title: `Blog | ${site.name}`,
    url: `${site.url}/blog`,
    description:
      "Exploring the latest in web development, design, and technology.",
    images: site.ogImage,
  },
};

export default async function Blog() {
  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6">
      <PageHeading
        title="Blog"
        description="Tech insights and articles on frontend development, design systems, performance, and the tools shaping how we build for the web."
      >
        <Social type="publication" />
      </PageHeading>

      <Slide delay={0.1}>
        <div className="flex items-center gap-x-3 mb-8">
          <BiDetail />
          <h2 className="text-xl font-semibold tracking-tight">Explore All</h2>
        </div>
        <Posts />
      </Slide>
    </main>
  );
}
