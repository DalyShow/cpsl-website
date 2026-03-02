import { TopNav } from "@/components/ds/TopNav";
import { sanityFetch } from "@/lib/sanity/client";

export const dynamic = "force-dynamic";

export default async function Home() {
  let settings: { navItems?: { label: string; href: string }[]; ctaLabel?: string; ctaHref?: string } | null = null;
  try {
    settings = await sanityFetch<{ navItems?: { label: string; href: string }[]; ctaLabel?: string; ctaHref?: string }>(
      `*[_type == "siteSettings"][0]{ navItems, ctaLabel, ctaHref }`
    );
  } catch {
    // Sanity unavailable — TopNav will use its built-in defaults
  }

  return (
    <>
      <TopNav
        items={settings?.navItems ?? undefined}
        ctaLabel={settings?.ctaLabel ?? "Join Our League"}
        ctaHref={settings?.ctaHref ?? "#contact"}
        showLive={false}
      />
      <main />
    </>
  );
}
