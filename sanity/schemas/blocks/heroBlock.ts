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
    defineField({
      name: "image",
      title: "Image (below headline)",
      description: "Optional. Sits between the headline and the subheading.",
      type: "image",
      options: { accept: "image/svg+xml,image/png,image/webp,image/jpeg" },
      fields: [
        defineField({ name: "alt", title: "Alt Text", type: "string" }),
      ],
    }),
    defineField({
      name: "lottie",
      title: "Lottie Animation (below headline)",
      description: "Optional. Upload a .lottie or .json file. Sits in the same slot as the image — takes precedence over image if both are set.",
      type: "file",
      options: { accept: ".lottie,.json,application/json" },
      fields: [
        defineField({ name: "loop",     title: "Loop",     type: "boolean", initialValue: true }),
        defineField({ name: "autoplay", title: "Autoplay", type: "boolean", initialValue: true }),
      ],
    }),
    defineField({
      name: "mediaMaxWidth",
      title: "Media Max Width (px)",
      type: "number",
      initialValue: 320,
      description: "Constrains the below-headline image or Lottie.",
    }),
  ],
  preview: {
    select: { title: "heading" },
    prepare(s) { return { title: `Hero — ${s.title ?? "Untitled"}` }; },
  },
});
