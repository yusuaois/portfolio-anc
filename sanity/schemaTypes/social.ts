import { DocumentTextIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const social = defineType({
  name: "social",
  title: "Social",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    {
      name: "title",
      title: "Title",
      description: "The platform of the social media post",
      type: "string",
    },
    {
      name: "url",
      title: "URL",
      description: "The URL of the social media post",
      type: "string",
    }
  ],
});
