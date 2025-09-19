import { Experience } from "@/typings";

export const fetchExperiences = async () => {
  // const res = await fetch(
  //   `${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperiences`
  // );

  // const data = await res.json();

  const data = {
    experiences: [
      {
        _createdAt: "2025-01-07T03:14:35Z",
        _id: "6ae78a3b-1337-41b9-b264-644821a706e0",
        _rev: "CsGuwmQ5PMpgptIBJOQwji",
        _type: "experience",
        _updatedAt: "2025-01-07T06:51:31Z",
        company: "XIAOMI",
        companyImage: {
          _type: "image",
          asset: {
            _ref: "image-d7debba59d6beb37861bb206b5d88f27bbdbdb12-2000x2000-png",
            _type: "reference",
          },
        },
        dateEnded: "2025-01-06",
        dateStarted: "2025-01-01",
        isCurrentlyWorkingHere: true,
        jobTitle: "Staff",
        points: ["123213", "213123213213"],
        technologies: [
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
        ],
      },
      {
        _createdAt: "2025-01-07T03:16:25Z",
        _id: "9018d856-b86c-40dc-9fa7-7809cb6ec965",
        _rev: "CsGuwmQ5PMpgptIBJNh4z6",
        _type: "experience",
        _updatedAt: "2025-01-07T03:16:23Z",
        company: "XIAOMI",
        companyImage: {
          _type: "image",
          asset: {
            _ref: "image-d7debba59d6beb37861bb206b5d88f27bbdbdb12-2000x2000-png",
            _type: "reference",
          },
        },
        dateEnded: "2025-01-06",
        dateStarted: "2025-01-01",
        isCurrentlyWorkingHere: true,
        jobTitle: "Staff",
        points: [
          "123213",
          "213123213213",
          "23131232132",
          "2131321312",
          "dsdsadadsadad",
          "sdadsadsadsad",
          "adsadsadsa",
          "sadsadsadsadsa",
          "dsadsadasdsada",
        ],
        technologies: [
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
        ],
      },
      {
        _createdAt: "2025-01-06T03:37:09Z",
        _id: "c2875e84-39e7-4482-a646-a3e2193a23ce",
        _rev: "4SoN5ZrAaVs25jgO0KG4m7",
        _type: "experience",
        _updatedAt: "2025-01-07T02:47:01Z",
        company: "XIAOMI",
        companyImage: {
          _type: "image",
          asset: {
            _ref: "image-d7debba59d6beb37861bb206b5d88f27bbdbdb12-2000x2000-png",
            _type: "reference",
          },
        },
        dateEnded: "2025-01-06",
        dateStarted: "2025-01-01",
        isCurrentlyWorkingHere: true,
        jobTitle: "Staff",
        points: [
          "123213",
          "213123213213",
          "23131232132",
          "2131321312",
          "dsdsadadsadad",
          "sdadsadsadsad",
          "adsadsadsa",
          "sadsadsadsadsa",
          "dsadsadasdsada",
        ],
        technologies: [
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
        ],
      },
    ],
  };

  // const experiences: Experience[] = data.experiences;

  // return experiences;
  return data.experiences;
};
