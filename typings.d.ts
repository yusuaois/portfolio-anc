interface SanityBody {
  _id: string;
  _rev: string;
  _createAt: string;
  _updatedAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface PageInfo extends SanityBody {
  _type: "pageInfo";
  address: string;
  backgroundInformation: string;
  phoneNumber: string;
  email: string;
  role: string;
  heroImage: Image;
  name: string;
  profilePic: Image;
}

export interface Technology extends SanityBody {
  _type: "skill";
  image: Image;
  progress: number;
  title: string;
}

export interface Experience extends SanityBody {
  _type: "experience";
  company: string;
  dateStarted: date;
  dateEnded: date;
  companyImage: Image;
  points: string[];
  isCurrentlyWorkingHere: boolean;
  jobTitle: string;
  technologies: Technology[];
}

export interface Skill extends SanityBody {
  _type: "skill";
  image: Image;
  progress: number;
  title: string;
}

export interface Project extends SanityBody {
  _type: "project";
  image: Image;
  summary: string;
  title: string;
  technologies: Technology[];
  linkToBuild: string;
}

export interface Social extends SanityBody {
  _type: "social";
  title: string;
  url: string;
}
