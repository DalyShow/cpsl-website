import { TopNav }          from "@/components/ds/TopNav";
import { Hero }            from "@/components/Hero";
import { FeaturedMatches } from "@/components/FeaturedMatches";
import { Standings }       from "@/components/Standings";
import { NewsStrip }       from "@/components/NewsStrip";
import { CtaBanner }       from "@/components/CtaBanner";
import { SiteFooter }      from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <TopNav showLive={false} ctaLabel="Join Our League" />
      <main>
        <Hero />
        <FeaturedMatches />
        <Standings />
        <NewsStrip />
        <CtaBanner />
      </main>
      <SiteFooter />
    </>
  );
}
