import { siteSettings }        from "./siteSettings";
import { homePage }            from "./homePage";
import { page }                from "./page";
import { heroBlock }            from "./blocks/heroBlock";
import { contentSectionBlock }  from "./blocks/contentSectionBlock";
import { ctaBannerBlock }       from "./blocks/ctaBannerBlock";
import { clubDirectoryBlock }   from "./blocks/clubDirectoryBlock";
import { calendarDayViewBlock } from "./blocks/calendarDayViewBlock";
import { sectionHeaderBlock }  from "./blocks/sectionHeaderBlock";
import { standingsBlock }      from "./blocks/standingsBlock";
import { matchdayBlock }       from "./blocks/matchdayBlock";

export const schemaTypes = [
  // Documents
  siteSettings,
  homePage,
  page,
  // Blocks
  heroBlock,
  sectionHeaderBlock,
  contentSectionBlock,
  ctaBannerBlock,
  clubDirectoryBlock,
  calendarDayViewBlock,
  standingsBlock,
  matchdayBlock,
];
