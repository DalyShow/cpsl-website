import { TopNav } from "@/components/ds/TopNav";
import { BlockRenderer } from "@/components/blocks/BlockRenderer";
import { sanityFetch } from "@/lib/sanity/client";

export const dynamic = "force-dynamic";

type NavSettings = {
  navItems?: { label: string; href: string }[];
  ctaLabel?: string;
  ctaHref?:  string;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Section = { _type: string; _key: string; [key: string]: any };
type PageData = { sections?: Section[] };

export default async function Home() {
  // Fetch nav settings and page sections in parallel
  const [settings, page] = await Promise.all([
    sanityFetch<NavSettings>(
      `*[_type == "siteSettings"][0]{ navItems, ctaLabel, ctaHref }`
    ),
    sanityFetch<PageData>(
      // Dereference image assets so components receive a ready-to-use URL
      `*[_type == "homePage"][0]{
        sections[]{
          ...,
          backgroundImage{ ..., asset->{ url } }
        }
      }`
    ),
  ]);

  return (
    <>
      <TopNav
        items={settings?.navItems ?? undefined}
        ctaLabel={settings?.ctaLabel ?? "Join Our League"}
        ctaHref={settings?.ctaHref ?? "#contact"}
        showLive={false}
      />

      {/* pt-[56px] offsets the fixed nav height */}
      <main className="pt-[56px]">
        {page?.sections?.map((block) => (
          <BlockRenderer key={block._key} block={block} />
        ))}
      </main>
    </>
  );
}
