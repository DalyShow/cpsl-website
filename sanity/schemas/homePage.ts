import { defineField, defineType } from "sanity";

export const homePage = defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    defineField({
      name: "hero",
      title: "Hero Section",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow Label", type: "string", initialValue: "The Carolinas' Premier League" }),
        defineField({ name: "heading", title: "Heading", type: "string", initialValue: "Elevating Soccer Across Two States" }),
        defineField({ name: "subheading", title: "Subheading", type: "text", rows: 2, initialValue: "Competitive soccer for clubs and players across North and South Carolina — professionally run, community driven." }),
        defineField({ name: "ctaLabel", title: "CTA Label", type: "string", initialValue: "Join Our League" }),
        defineField({ name: "ctaHref", title: "CTA Link", type: "string", initialValue: "#contact" }),
        defineField({ name: "backgroundImage", title: "Background Image", type: "image", options: { hotspot: true }, fields: [defineField({ name: "alt", title: "Alt Text", type: "string" })] }),
      ],
    }),
    defineField({
      name: "aboutSection",
      title: "About Section",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow Label", type: "string", initialValue: "About the League" }),
        defineField({ name: "heading", title: "Heading", type: "string", initialValue: "Competitive Soccer Across the Carolinas" }),
        defineField({ name: "lead", title: "Lead Paragraph", type: "text", rows: 3, initialValue: "From the Piedmont to the coast, CPSL brings together the best clubs in North and South Carolina under one banner — raising the standard for competitive soccer at every level." }),
        defineField({
          name: "paragraphs",
          title: "Body Paragraphs",
          type: "array",
          of: [{ type: "text" }],
        }),
        defineField({
          name: "background",
          title: "Background",
          type: "string",
          options: {
            list: [
              { title: "Cream (default)", value: "cream" },
              { title: "White", value: "white" },
              { title: "Surface (light grey)", value: "surface" },
              { title: "Navy", value: "navy" },
              { title: "Gold", value: "gold" },
            ],
          },
          initialValue: "cream",
        }),
      ],
    }),
  ],
  preview: {
    select: { title: "hero.heading" },
    prepare(selection) {
      return { title: selection.title ?? "Home Page" };
    },
  },
});
