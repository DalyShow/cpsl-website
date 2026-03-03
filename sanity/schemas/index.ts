import { siteSettings }        from "./siteSettings";
import { homePage }            from "./homePage";
import { page }                from "./page";
import { heroBlock }           from "./blocks/heroBlock";
import { contentSectionBlock } from "./blocks/contentSectionBlock";
import { ctaBannerBlock }      from "./blocks/ctaBannerBlock";

export const schemaTypes = [
  // Documents
  siteSettings,
  homePage,
  page,
  // Blocks (reusable object types used inside page section arrays)
  heroBlock,
  contentSectionBlock,
  ctaBannerBlock,
];
