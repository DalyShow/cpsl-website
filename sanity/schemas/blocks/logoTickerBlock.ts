import { defineField, defineType } from "sanity";

export const logoTickerBlock = defineType({
  name: "logoTickerBlock",
  title: "Logo Ticker",
  type: "object",
  fields: [
    defineField({
      name: "heading",
      title: "Optional Heading",
      type: "string",
      description: "Shown above the ticker. Leave blank for no heading.",
    }),
    defineField({
      name: "logos",
      title: "Logos",
      type: "array",
      description:
        "Drag and drop multiple files at once to bulk-upload. Each tile is 115 × 115 px with a 30 px gap.",
      of: [
        {
          type: "image",
          options: {
            accept: "image/svg+xml,image/png,image/webp,image/jpeg",
          },
          fields: [
            defineField({
              name: "altText",
              title: "Alt Text",
              type: "string",
              description:
                "Accessible name — typically the club or brand name. Optional.",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "durationSeconds",
      title: "Loop Duration (seconds)",
      type: "number",
      initialValue: 40,
      description: "Full loop time. Lower is faster.",
      validation: (R) => R.positive(),
    }),
    defineField({
      name: "reverse",
      title: "Reverse direction",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "pauseOnHover",
      title: "Pause on hover",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "edgeFade",
      title: "Soft edge fade",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "tileBackground",
      title: "Tile Background Hex",
      type: "string",
      initialValue: "#FFFFFF",
      description: "Background colour of each 115 × 115 tile.",
    }),
    defineField({
      name: "tileBorderColor",
      title: "Tile Border Hex",
      type: "string",
      initialValue: "#E2E8F0",
    }),
    defineField({
      name: "sectionBackground",
      title: "Section Background Hex",
      type: "string",
      initialValue: "#FFFFFF",
      description: "The surface the ticker sits on. Use #091628 for dark navy.",
    }),
  ],
  preview: {
    select: { heading: "heading", logos: "logos" },
    prepare({ heading, logos }: { heading?: string; logos?: unknown[] }) {
      const count = Array.isArray(logos) ? logos.length : 0;
      return {
        title: heading ? `Logo Ticker — ${heading}` : "Logo Ticker",
        subtitle: `${count} logo${count === 1 ? "" : "s"}`,
      };
    },
  },
});
