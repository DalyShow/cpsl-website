import { defineField, defineType } from "sanity";

export const heroBlock = defineType({
  name: "heroBlock",
  title: "Hero Section",
  type: "object",
  fields: [
    defineField({ name: "eyebrow",    title: "Eyebrow Label", type: "string" }),
    defineField({ name: "heading",    title: "Heading",       type: "string" }),
    defineField({ name: "subheading", title: "Subheading",    type: "text", rows: 2 }),
    defineField({ name: "ctaLabel",   title: "CTA Button Label", type: "string", initialValue: "Join Our League" }),
    defineField({ name: "ctaHref",    title: "CTA Button Link",  type: "string", initialValue: "#contact" }),
    defineField({
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({ name: "alt", title: "Alt Text", type: "string" }),
      ],
    }),
  ],
  preview: {
    select: { title: "heading" },
    prepare(s) { return { title: `Hero — ${s.title ?? "Untitled"}` }; },
  },
});
