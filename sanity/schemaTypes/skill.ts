import { DocumentTextIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const skill = defineType({
  name: "skill",
  title: "Skill",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    {
      name: "title",
      title: "Title",
      description: "The title of the skill",
      type: "string",
    },
    {
      name: "progress",
      title: "Progress",
      description: "The progress of the skill",
      type: "number",
      validation: (Rule) => Rule.min(0).max(100), // Ensure the progress is between 0 and 100
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
});
