import { Project } from "@/typings";

export const fetchProjects = async () => {
  // const res = await fetch(
  //   `${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`
  // );
  // const data = await res.json();

  // const projects: Project[] = data.projects;

  // return projects;

  const data = {
    projects: [
      {
        _createdAt: "2025-01-06T06:39:35Z",
        _id: "7c711c74-3718-4de8-90a0-586996e15a18",
        _rev: "Y8rJHoU3kXS3JUZUHzjsFK",
        _type: "project",
        _updatedAt: "2025-01-06T14:28:36Z",
        image: {
          _type: "image",
          asset: {
            _ref: "image-af7ca99b5a796d0698cf9121a4a0795b5022b6be-666x375-png",
            _type: "reference",
          },
        },
        linkToBuild: "https://github.com/yusuaois/Blog",
        summary:
          "This is a blog project built with Spring Boot and Vue.js, utilizing a front-end and back-end separation architecture. The back-end is developed with Spring Boot, providing a RESTful API for managing blog posts, user authentication, and other resources. The front-end is developed with Vue.js, using a modern JavaScript framework for a responsive and dynamic user interface.",
        technologies: [
          {
            _createdAt: "2025-01-06T03:41:07Z",
            _id: "3054c1ca-4807-4488-89e1-f23e6f3f2bf6",
            _rev: "4SoN5ZrAaVs25jgO0IGl5r",
            _type: "skill",
            _updatedAt: "2025-01-06T18:17:50Z",
            image: {
              _type: "image",
              asset: {
                _ref: "image-2ee495975746caae5bd7a6f89600abf6f19eb36e-512x512-png",
                _type: "reference",
              },
            },
            progress: 100,
            title: "JavaScript",
          },
          {
            _createdAt: "2025-01-06T03:39:50Z",
            _id: "4d58ec89-f595-480d-bcd4-14104cee4178",
            _rev: "CsGuwmQ5PMpgptIBJLZbKq",
            _type: "skill",
            _updatedAt: "2025-01-06T18:18:07Z",
            image: {
              _type: "image",
              asset: {
                _ref: "image-ef8f906886f60d0e34d03ce8d4a84261d87e9967-512x512-png",
                _type: "reference",
              },
            },
            progress: 100,
            title: "Java",
          },
          {
            _createdAt: "2025-01-06T06:42:05Z",
            _id: "a6792600-7bb6-40bf-82a4-1dbb87025a60",
            _rev: "4SoN5ZrAaVs25jgO0IGYlk",
            _type: "skill",
            _updatedAt: "2025-01-06T18:16:47Z",
            image: {
              _type: "image",
              asset: {
                _ref: "image-ca4d2a313f4169e70cb3d71b5bd4bf9f74589f6d-804x804-png",
                _type: "reference",
              },
            },
            progress: 100,
            title: "MySQL",
          },
          {
            _createdAt: "2025-01-06T06:42:34Z",
            _id: "4fd83707-eb49-428a-9ef0-0b2de8152ce0",
            _rev: "4SoN5ZrAaVs25jgO0IGUJX",
            _type: "skill",
            _updatedAt: "2025-01-06T18:16:18Z",
            image: {
              _type: "image",
              asset: {
                _ref: "image-f7bcf1e93db58692e1ac6ac5627ea35773189de0-512x512-png",
                _type: "reference",
              },
            },
            progress: 100,
            title: "Redis",
          },
          {
            _createdAt: "2025-01-06T06:43:30Z",
            _id: "2e5fb460-41bc-4d64-8cb3-5f124179eb1a",
            _rev: "CsGuwmQ5PMpgptIBJLZrr6",
            _type: "skill",
            _updatedAt: "2025-01-06T18:19:30Z",
            image: {
              _type: "image",
              asset: {
                _ref: "image-af71fb36874943d722ec1984d5c86a0036be9b33-512x512-png",
                _type: "reference",
              },
            },
            progress: 100,
            title: "Spring Framework",
          },
          {
            _createdAt: "2025-01-06T06:56:26Z",
            _id: "14bd895c-9423-4b64-99ae-a7bba7898e93",
            _rev: "CsGuwmQ5PMpgptIBJLZ1w0",
            _type: "skill",
            _updatedAt: "2025-01-06T18:15:30Z",
            image: {
              _type: "image",
              asset: {
                _ref: "image-768e769916a9384b85b6e83d5416df7f096eede5-512x512-png",
                _type: "reference",
              },
            },
            progress: 100,
            title: "Vue.js",
          },
        ],
        title: "Blog",
      },
    ],
  };

  return data.projects;
};
