type Project = {
  name: string
  stack: string[]
  description?: string
  link?: string
}

export const PROJECTS: Project[] = [
  {
    name: "API & SPA",
    description:
      " This is a multi-page React application that utilizes the JSONPlaceholder API and the react-router-dom library. This project showcases my ability to seamlessly integrate external APIs, effectively manage routing, and deliver a cohesive user experience within a React framework.",
    link: "https://github.com/mrklmrrr/API-SPA",
    stack: ["React", "React Router", "Tanstack Query", "Tailwind CSS"],
  },
  {
    name: "Notion",
    description:
      "Notion is an online platform designed for users to effortlessly manage their notes. It provides the ability to add, remove, and modify notes, all within a user-friendly interface that ensures a seamless experience.",
    link: "https://github.com/mrklmrrr/Notion",
    stack: [
      "React",
      "Redux",
      "Redux Thunk",
      "Zod",
      "Tailwind CSS",
      "Json Server",
    ],
  },
  {
    name: "Lamoda",
    description:
      "Lamoda is an online shopping platform specializing in fashion. It offers a curated collection of clothing items, allowing users to personalize their shopping experience through filters for color, price, and name. Furthermore, users can sort products by popularity and price, making it easy to find the perfect items swiftly and effectively.",
    link: "https://github.com/mrklmrrr/LAMODA3",
    stack: ["React", "TypeScript", "CSS modules"],
  },
  {
    name: "Todoist",
    description: `A user-friendly 'To-Do List' application that enables users to effortlessly add, delete, and monitor their tasks. The application features synchronization with Local Storage, ensuring that task data is retained between user sessions for a seamless experience.`,
    link: "https://github.com/mrklmrrr/TODOIST",
    stack: ["React", "CSS modules"],
  },
]
