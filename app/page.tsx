import { TopNav } from "@/components/ds/TopNav";

export default function Home() {
  return (
    <>
      <TopNav showLive={false} ctaLabel="Join Our League" />
      <main />
    </>
  );
}
