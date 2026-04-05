export const navLinks = [
  { id: 1, name: "Projects", type: "finder" },
  { id: 3, name: "Contact", type: "contact" },
  { id: 4, name: "Resume", type: "resume" },
];

export const navIcons = [
  { id: 1, img: "/icons/wifi.svg" },
  { id: 2, img: "/icons/search.svg" },
  { id: 3, img: "/icons/user.svg" },
  { id: 4, img: "/icons/mode.svg" },
];

export const dockApps = [
  { id: "finder", name: "Portfolio", icon: "finder.png", canOpen: true },
  { id: "safari", name: "Articles", icon: "safari.png", canOpen: true },
  { id: "photos", name: "Gallery", icon: "photos.png", canOpen: true },
  { id: "contact", name: "Contact", icon: "contact.png", canOpen: true },
  { id: "terminal", name: "Skills", icon: "terminal.png", canOpen: true },
  { id: "trash", name: "Archive", icon: "trash.png", canOpen: false },
];

export const techStack = [
  { category: "Frontend", items: ["React", "JavaScript","EJS"] },
  { category: "Styling", items: ["Bootstrap", "CSS","Tailwind CSS"] },
  { category: "Backend", items: ["REST API", "Express", "Node.js"] },
  { category: "Languages", items: ["C", "Python","C++"] },
  { category: "Database", items: ["PostgreSQL"] },
  { category: "Dev Tools", items: ["Git", "GitHub"] },
];

export const socials = [
  { id: 1, text: "Github", icon: "/icons/github.svg", bg: "#f4656b", link: "https://github.com/Koushik-26" },
  { id: 2, text: "Portfolio", icon: "/icons/atom.svg", bg: "#4bcb63", link: "" },
  { id: 3, text: "LinkedIn", icon: "/icons/linkedin.svg", bg: "#05b6f6", link: "https://www.linkedin.com/in/koushikdhulipala/" },
];

export const photosLinks = [
  { id: 1, icon: "/icons/gicon1.svg", title: "Library" }
];

export const gallery = [
  { id: 1, img: "/images/gal1.png" }
];

export const blogPosts = [
  { id: 1, image: "/images/cert-2.png", title: "AWS Certified Cloud Practitioner" },
  { id: 2, image: "/images/cert-3.png", title: "Full Stack Developer" },
];

// Projects section for editing in the future

// Edit the Work locations and its children in the flie to my projects 
const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  windowPosition: "top-20 left-20",
  children: [
    {
      id: 1,
      name: "AI Ticketing Platform",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-5 left-5",
      windowPosition: "top-[10vh] left-[10vw]",
      children: [
        {
          id: 11,
          name: "About.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-5",
          description: [
            "Built a full-stack AI-powered ticketing platform using React, Node.js, and MongoDB.",
            "Used Inngest for background workflows and automation pipelines.",
          ],
        }
      ]
    },

    {
      id: 2,
      name: "PDF Insight",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-5 left-32",
      windowPosition: "top-[15vh] left-[25vw]",
      children: [
        {
          id: 21,
          name: "About.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-5",
          description: [
            "AI-powered tool to extract and query insights from PDFs using LLMs.",
          ],
        }
      ]
    },

    {
      id: 3,
      name: "Mini Cursor",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-5 left-60",
      windowPosition: "top-[20vh] left-[40vw]",
      children: [
        {
          id: 31,
          name: "About.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-5",
          description: [
            "Lightweight AI coding assistant with THINK → ACTION → OBSERVE workflow.",
          ],
        },
        {
          id: 32,
          name: "GitHub",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          position: "top-20 left-5",
          href: "https://github.com/Koushik-26/Mini-Cursor",
        }
      ]
    },

    {
      id: 4,
      name: "Blog App",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-5 left-[22rem]",
      windowPosition: "top-[25vh] left-[55vw]",
      children: [
        {
          id: 41,
          name: "About.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-5",
          description: [
            "Full-stack blog platform using React and Appwrite with auth and CRUD.",
          ],
        },
        {
          id: 42,
          name: "GitHub",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          position: "top-20 left-5",
          href: "https://github.com/Koushik-26/Blog-Appwrite",
        }
      ]
    }
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/Koushik.png",
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    { id: 1, name: "Resume.pdf", icon: "/images/pdf.png", kind: "file", fileType: "pdf" },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

export const INITIAL_Z_INDEX = 1000;

export const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};