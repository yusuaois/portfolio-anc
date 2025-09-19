import { PageInfo } from "@/typings";

export const fetchPageInfos = async () => {
  // const res = await fetch(
  //   `${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`
  // );

  // const data = await res.json();

  // const pageInfo: PageInfo = data.pageInfo;

  // return pageInfo;

  const data = {
    pageInfo: {
      _createdAt: "2025-01-06T03:13:30Z",
      _id: "8f87b5c1-c03c-46cf-a34b-b144e28b7e85",
      _rev: "8zjGwFDKlGS2KqB25Z7Gxz",
      _type: "pageInfo",
      _updatedAt: "2025-02-27T13:53:49Z",
      address: "China",
      backgroundInformation:
        "Hi, I'm AnC! I have a strong passion for algorithms and           coding, and I always strive to approach problems with high energy and           efficiency. With a keen interest in both front-end and back-end           development, I enjoy tackling complex challenges and continually           improving my skills. I believe in maintaining a high-spirited mindset,           which helps me stay motivated and focused on achieving my goals.           Whether it's solving algorithmic problems or building robust           applications, I thrive in environments that push my abilities to the           next level.",
      email: "yusuaois@outlook.com",
      heroImage: {
        _type: "image",
        asset: {
          _ref: "image-215664a4c2a3223f6bf432c4e6b21af275ddcf34-313x313-jpg",
          _type: "reference",
        },
      },
      name: "AnC",
      phoneNumber: "18302055087",
      profilePic: {
        _type: "image",
        asset: {
          _ref: "image-48a3940d754f5bc363dc4f2a435d17bb6f4a1133-1731x1297-png",
          _type: "reference",
        },
        crop: {
          _type: "sanity.imageCrop",
          bottom: 0,
          left: 0,
          right: 0,
          top: 0,
        },
        hotspot: {
          _type: "sanity.imageHotspot",
          height: 1,
          width: 0.700374989027389,
          x: 0.4625465878833103,
          y: 0.5,
        },
      },
      role: "Full Stack Developer",
      socials: [
        {
          _key: "5245772dc497",
          _ref: "e19512b4-a0ef-4b43-ad81-90de82f19f0a",
          _type: "reference",
        },
        {
          _key: "102ae19f7f00",
          _ref: "a347b9e7-5033-4b0d-979a-d3295e1a4716",
          _type: "reference",
        },
        {
          _key: "272e0999ae18",
          _ref: "8f32d6c7-5120-4589-b29d-762c9ae1bddb",
          _type: "reference",
        },
      ],
    },
  };
  return data.pageInfo;
};
