import { TopNav } from "@/components/ds/TopNav";
import { client } from "@/lib/sanity/client";

export const dynamic = "force-dynamic";

export default async function Home() {
  let settings = null;
  try {
    settings = await client.fetch(
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
