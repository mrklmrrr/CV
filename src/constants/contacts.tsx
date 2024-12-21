import { Telegram, Github, LinkedIn } from "../components/Icons"

type Contact = {
  title: string
  link: string
  icon?: JSX.Element
}

export const CONTACTS: Contact[] = [
  {
    title: "Github",
    link: "https://github.com/mrklmrrr/",
    icon: <Github />,
  },
  {
    title: "Telegram",
    link: "https://t.me/mrklmrrr/",
    icon: <Telegram />,
  },
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/mrklmrrr/",
    icon: <LinkedIn />,
  },
] as const
