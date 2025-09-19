import { Skill } from "@/typings";

export const fetchSkills = async () => {
  // const res = await fetch(
  //   `${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`
  // );

  // const data = await res.json();

  // const skills: Skill[] = data.skills;

  // return skills;

  const data = {
    skills: [
      {
        _createdAt: "2025-01-06T18:23:48Z",
        _id: "0b9b65fe-30f6-406d-b19d-911778eedc0e",
        _rev: "4SoN5ZrAaVs25jgO0IJ7ug",
        _type: "skill",
        _updatedAt: "2025-01-06T18:23:59Z",
        image: {
          _type: "image",
          asset: {
            _ref: "image-a182be2fcfc0bdb8950e25746d248ff8f6baf5b2-512x512-png",
            _type: "reference",
          },
        },
        progress: 100,
        title: "React",
      },
      {
        _createdAt: "2025-01-06T18:25:31Z",
        _id: "109b0497-ba41-4af5-943f-cb2083b83eec",
        _rev: "CsGuwmQ5PMpgptIBJLbWQ2",
        _type: "skill",
        _updatedAt: "2025-01-06T18:25:43Z",
        image: {
          _type: "image",
          asset: {
            _ref: "image-c312d389619c1c3dc10a89a935b643d21909e39e-2000x1978-png",
            _type: "reference",
          },
        },
        progress: 100,
        title: "Visual Studio Code",
      },
      {
        _createdAt: "2025-01-06T18:18:58Z",
        _id: "14b6b805-a86b-4b7d-b3b8-73395e30bfb3",
        _rev: "Y8rJHoU3kXS3JUZUI1MljW",
        _type: "skill",
        _updatedAt: "2025-01-06T18:19:37Z",
        image: {
          _type: "image",
          asset: {
            _ref: "image-33ca99e863654a950a54dc990449b7a138371dab-5000x4872-png",
            _type: "reference",
          },
        },
        progress: 100,
        title: "AU",
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
      {
        _createdAt: "2025-01-06T18:19:51Z",
        _id: "1f6a9954-964a-4793-b259-a6ae730a4832",
        _rev: "Y8rJHoU3kXS3JUZUI1Oncz",
        _type: "skill",
        _updatedAt: "2025-01-06T18:19:57Z",
        image: {
          _type: "image",
          asset: {
            _ref: "image-c7fc80fb82cbdf89001374badde33a2906a4f256-5000x4812-png",
            _type: "reference",
          },
        },
        progress: 100,
        title: "Ai",
      },
      {
        _createdAt: "2025-01-06T18:24:47Z",
        _id: "20e66dec-d1a4-4726-92b6-513b9c616a1c",
        _rev: "CsGuwmQ5PMpgptIBJLbOG0",
        _type: "skill",
        _updatedAt: "2025-01-06T18:24:56Z",
        image: {
          _type: "image",
          asset: {
            _ref: "image-73c204442fa1c1f560dffd93a604e5875032f374-512x512-png",
            _type: "reference",
          },
        },
        progress: 100,
        title: "TailwindCSS",
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
        _createdAt: "2025-01-06T18:21:08Z",
        _id: "32f3d728-4fa6-4dc0-9901-96dc5ce588b0",
        _rev: "4SoN5ZrAaVs25jgO0IIsGv",
        _type: "skill",
        _updatedAt: "2025-01-06T18:21:12Z",
        image: {
          _type: "image",
          asset: {
            _ref: "image-8ee11c4cf9894cabff9b9504152b72ed6e3c33c9-512x512-png",
            _type: "reference",
          },
        },
        progress: 100,
        title: "C",
      },
      {
        _createdAt: "2025-01-06T18:20:32Z",
        _id: "3c4976ca-4ced-442f-bd0f-cd3b9af97af5",
        _rev: "CsGuwmQ5PMpgptIBJLav3G",
        _type: "skill",
        _updatedAt: "2025-01-06T18:20:36Z",
        image: {
          _type: "image",
          asset: {
            _ref: "image-745938f3c123a780b57156912588be9824101ab1-512x512-png",
            _type: "reference",
          },
        },
        progress: 100,
        title: "Ae",
      },
      {
        _createdAt: "2025-01-06T18:20:19Z",
        _id: "43fd4f70-4e98-4cd2-b71c-ebda42d44d38",
        _rev: "CsGuwmQ5PMpgptIBJLasgw",
        _type: "skill",
        _updatedAt: "2025-01-06T18:20:24Z",
        image: {
          _type: "image",
          asset: {
            _ref: "image-2dccd6f220996d8da1912338c72553291baef8ae-512x512-png",
            _type: "reference",
          },
        },
        progress: 100,
        title: "Pr",
      },
      {
        _createdAt: "2025-01-06T18:20:10Z",
        _id: "47c83328-d0d2-4f3b-a6a4-aa16a20df74b",
        _rev: "4SoN5ZrAaVs25jgO0IHFQu",
        _type: "skill",
        _updatedAt: "2025-01-06T18:20:13Z",
        image: {
          _type: "image",
          asset: {
            _ref: "image-d473aee3f2bf6557671dca7c050745ac193d73c9-1280x1280-jpg",
            _type: "reference",
          },
        },
        progress: 100,
        title: "PS",
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
        _createdAt: "2025-01-06T18:21:39Z",
        _id: "4dbe07bb-9420-4e15-8eff-0797c8fdc2a7",
        _rev: "4SoN5ZrAaVs25jgO0IIx9L",
        _type: "skill",
        _updatedAt: "2025-01-06T18:21:47Z",
        image: {
          _type: "image",
          asset: {
            _ref: "image-39acc3723bbaac5f4d729180b3bf8a2b0f1b7610-722x854-png",
            _type: "reference",
          },
        },
        progress: 100,
        title: "MongoDB",
      },
      {
        _createdAt: "2025-01-06T18:20:56Z",
        _id: "4fb3304b-456e-46e5-ba08-2a39cf35a0aa",
        _rev: "CsGuwmQ5PMpgptIBJLb0mu",
        _type: "skill",
        _updatedAt: "2025-01-06T18:21:02Z",
        image: {
          _type: "image",
          asset: {
            _ref: "image-6ec923051564926216807746c02be0d444e0f6c5-512x512-png",
            _type: "reference",
          },
        },
        progress: 100,
        title: "C#",
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
        _createdAt: "2025-01-06T18:22:15Z",
        _id: "570fba95-b6b9-47e3-8a9f-5d0901347f43",
        _rev: "CsGuwmQ5PMpgptIBJLbA86",
        _type: "skill",
        _updatedAt: "2025-01-06T18:22:30Z",
        image: {
          _type: "image",
          asset: {
            _ref: "image-8e115c425f706f2867f0939c0dc49bcd2be64fdb-512x512-png",
            _type: "reference",
          },
        },
        progress: 100,
        title: "Node.js",
      },
      {
        _createdAt: "2025-01-06T18:18:46Z",
        _id: "59453625-f8d4-4493-ab6d-1e41ba06205e",
        _rev: "Y8rJHoU3kXS3JUZUI1Mcjo",
        _type: "skill",
        _updatedAt: "2025-01-06T18:18:52Z",
        image: {
          _type: "image",
          asset: {
            _ref: "image-fbb51392944a7ebffc72c7457b0c8da20b3ea471-512x512-png",
            _type: "reference",
          },
        },
        progress: 100,
        title: "HTML",
      },
      {
        _createdAt: "2025-01-06T18:25:50Z",
        _id: "5dbe77d8-4ef8-40a6-876a-242ab04ea47b",
        _rev: "CsGuwmQ5PMpgptIBJLbZ6g",
        _type: "skill",
        _updatedAt: "2025-01-06T18:26:02Z",
        image: {
          _type: "image",
          asset: {
            _ref: "image-8193c43082760c819ea3c26dcabe9de7ef0cb98e-2000x1990-png",
            _type: "reference",
          },
        },
        progress: 100,
        title: "Visual Studio",
      },
      {
        _createdAt: "2025-01-06T03:41:32Z",
        _id: "65124e6a-857e-43a6-bedb-3a85959fe887",
        _rev: "Y8rJHoU3kXS3JUZUI1MPYz",
        _type: "skill",
        _updatedAt: "2025-01-06T18:17:34Z",
        image: {
          _type: "image",
          asset: {
            _ref: "image-d6df69ef8f085264c11edeecc77e6eb4205f5321-512x512-png",
            _type: "reference",
          },
        },
        progress: 100,
        title: "TypeScript",
      },
      {
        _createdAt: "2025-01-06T18:21:58Z",
        _id: "72f8377e-7ab3-429f-95d2-a23c4a7c7845",
        _rev: "4SoN5ZrAaVs25jgO0IIyY2",
        _type: "skill",
        _updatedAt: "2025-01-06T18:22:10Z",
        image: {
          _type: "image",
          asset: {
            _ref: "image-e330654da5a686af7505cdaa51775fe9fcae3243-512x512-png",
            _type: "reference",
          },
        },
        progress: 100,
        title: "Next.js",
      },
      {
        _createdAt: "2025-01-06T18:21:21Z",
        _id: "7d8b9904-f437-4584-8fb9-1f4efb518d8b",
        _rev: "CsGuwmQ5PMpgptIBJLb5FI",
        _type: "skill",
        _updatedAt: "2025-01-06T18:21:30Z",
        image: {
          _type: "image",
          asset: {
            _ref: "image-372020278b88ea3a95f2dc794237584455c075af-512x512-png",
            _type: "reference",
          },
        },
        progress: 100,
        title: "Idea IJ",
      },
      {
        _createdAt: "2025-01-06T18:22:46Z",
        _id: "91c3d289-44e7-4c1d-83de-1a406bcd0a8e",
        _rev: "Y8rJHoU3kXS3JUZUI1OPVX",
        _type: "skill",
        _updatedAt: "2025-01-06T18:23:13Z",
        image: {
          _type: "image",
          asset: {
            _ref: "image-5ecd6a90d5dbd1fa8fa10e8a97dfd879da21d7ac-512x512-png",
            _type: "reference",
          },
        },
        progress: 100,
        title: "PostgresSql",
      },
      {
        _createdAt: "2025-01-06T18:23:35Z",
        _id: "948a8fe5-6578-4dfc-80dc-38c55577cb37",
        _rev: "CsGuwmQ5PMpgptIBJLbKcQ",
        _type: "skill",
        _updatedAt: "2025-01-06T18:23:44Z",
        image: {
          _type: "image",
          asset: {
            _ref: "image-ce28e47398684826e0a4f62650a7980da017d133-1833x2000-png",
            _type: "reference",
          },
        },
        progress: 1,
        title: "React Native",
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
        _createdAt: "2025-01-06T18:24:10Z",
        _id: "b471e95c-413d-4210-aea7-3349800d1e17",
        _rev: "CsGuwmQ5PMpgptIBJLbMaM",
        _type: "skill",
        _updatedAt: "2025-01-06T18:24:38Z",
        image: {
          _type: "image",
          asset: {
            _ref: "image-3fb579cd82075c7667e8059dfb8c8014b0086e85-512x512-png",
            _type: "reference",
          },
        },
        progress: 100,
        title: "Sanity",
      },
      {
        _createdAt: "2025-01-06T18:23:23Z",
        _id: "bf33f14d-7242-4803-bf9e-e89887d81f77",
        _rev: "CsGuwmQ5PMpgptIBJLbGE6",
        _type: "skill",
        _updatedAt: "2025-01-06T18:23:29Z",
        image: {
          _type: "image",
          asset: {
            _ref: "image-923aef9ef9c3628b4d8277ac9aea770433895b94-512x512-png",
            _type: "reference",
          },
        },
        progress: 100,
        title: "Python",
      },
      {
        _createdAt: "2025-01-06T18:25:12Z",
        _id: "c17065e9-1aa3-4446-84cf-8452119c1678",
        _rev: "CsGuwmQ5PMpgptIBJLbU9o",
        _type: "skill",
        _updatedAt: "2025-01-06T18:25:22Z",
        image: {
          _type: "image",
          asset: {
            _ref: "image-3ae45f98225bc3d5f0db69b083d652a88948163b-799x800-png",
            _type: "reference",
          },
        },
        progress: 100,
        title: "Unreal Engine",
      },
      {
        _createdAt: "2025-01-06T18:20:01Z",
        _id: "c32c4ed7-6e02-42da-adbc-8c1249fbcd68",
        _rev: "Y8rJHoU3kXS3JUZUI1Oms6",
        _type: "skill",
        _updatedAt: "2025-01-06T18:20:07Z",
        image: {
          _type: "image",
          asset: {
            _ref: "image-5ebd54d0408262529e7e18f7a5d50e7e1bf2cbd9-2084x2084-png",
            _type: "reference",
          },
        },
        progress: 100,
        title: "ME",
      },
      {
        _createdAt: "2025-01-06T18:20:46Z",
        _id: "d097eef2-5e78-4fec-848b-0bcf1091d91f",
        _rev: "Y8rJHoU3kXS3JUZUI1NygH",
        _type: "skill",
        _updatedAt: "2025-01-06T18:20:51Z",
        image: {
          _type: "image",
          asset: {
            _ref: "image-7062389871a3b9833df3e18f69e52e9cf78ae587-512x512-png",
            _type: "reference",
          },
        },
        progress: 100,
        title: "Blender",
      },
      {
        _createdAt: "2025-01-06T03:40:39Z",
        _id: "d1aaa973-e0ef-47e9-9f49-c58f47092158",
        _rev: "4SoN5ZrAaVs25jgO0IGclj",
        _type: "skill",
        _updatedAt: "2025-01-06T18:17:12Z",
        image: {
          _type: "image",
          asset: {
            _ref: "image-40cf9ba812edfa4ecd258ca5908dfec73cc251a0-512x512-png",
            _type: "reference",
          },
        },
        progress: 100,
        title: "C++",
      },
      {
        _createdAt: "2025-01-06T18:18:22Z",
        _id: "fb010c80-cb4c-490a-b51f-f4bc0dbdd6ee",
        _rev: "4SoN5ZrAaVs25jgO0IGti8",
        _type: "skill",
        _updatedAt: "2025-01-06T18:18:31Z",
        image: {
          _type: "image",
          asset: {
            _ref: "image-32574dd90ee315fba47cc00fe1e91363f501d047-512x512-png",
            _type: "reference",
          },
        },
        progress: 98,
        title: "CSS",
      },
    ],
  };

  return data.skills;
};
