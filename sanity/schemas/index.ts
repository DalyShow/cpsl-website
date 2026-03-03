import { siteSettings }        from "./siteSettings";
import { homePage }            from "./homePage";
import { page }                from "./page";
import { heroBlock }            from "./blocks/heroBlock";
import { contentSectionBlock }  from "./blocks/contentSectionBlock";
import { ctaBannerBlock }       from "./blocks/ctaBannerBlock";
import { clubDirectoryBlock }   from "./blocks/clubDirectoryBlock";
import { calendarDayViewBlock } from "./blocks/calendarDayViewBlock";

export const schemaTypes = [
  // Documents
  siteSettings,
  homePage,
  page,
  // Blocks
  heroBlock,
  contentSectionBlock,
  ctaBannerBlock,
  clubDirectoryBlock,
  calendarDayViewBlock,
];
