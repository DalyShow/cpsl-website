import { HeroBlock } from "./HeroBlock";
import { ContentSectionCentered } from "./ContentSectionCentered";
import { CTABanner } from "./CTABanner";

// Each block from Sanity has _type, _key, and its own fields
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Block = { _type: string; _key: string;[key: string]: any };

export function BlockRenderer({ block }: { block: Block }) {
  switch (block._type) {
    case "heroBlock":
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return <HeroBlock {...(block as any)} />;

    case "contentSectionBlock":
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return <ContentSectionCentered {...(block as any)} />;

    case "ctaBannerBlock":
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return <CTABanner {...(block as any)} />;

    default:
      // Unknown block type — log in dev, render nothing in prod
      if (process.env.NODE_ENV === "development") {
        return (
          <div style={{ padding: "24px", background: "#FEF3C7", color: "#92400E", fontFamily: "monospace", fontSize: "13px" }}>
            Unknown block type: <strong>{block._type}</strong>
          </div>
        );
      }
      return null;
  }
}
