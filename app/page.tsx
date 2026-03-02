import { TopNav } from "@/components/ds/TopNav";
import { client } from "@/lib/sanity/client";

export const revalidate = 60;

export default async function Home() {
  const settings = await client.fetch(
    `*[_type == "siteSettings"][0]{ navItems, ctaLabel, ctaHref }`,
    {},
    { next: { revalidate: 60 } }
  );

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
