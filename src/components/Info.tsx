import { CONTACTS, LANGUAGES, TECHNOLOGIES } from "../constants"

const sections = [
  {
    title: "Technologies",
    content: (
      <ul className="flex flex-col">
        {TECHNOLOGIES.map((t) => (
          <li key={t} className="text-sm leading-6">
            {t}
          </li>
        ))}
      </ul>
    ),
  },
  {
    title: "Languages",
    content: (
      <ul className="flex flex-col">
        {LANGUAGES.map(({ language, level }) => (
          <li key={language} className="text-sm leading-6">
            {language} ({level})
          </li>
        ))}
      </ul>
    ),
  },
  {
    title: "Education",
    content: <p className="text-sm leading-6">BSU - MMF</p>,
  },
  {
    title: "Contacts",
    content: (
      <ul className="flex flex-col gap-1">
        {CONTACTS.map(({ title, link, icon }) => (
          <li key={title}>
            <a
              href={link}
              target="_blank"
              className="inline-flex items-center gap-2 text-sm"
            >
              {icon && icon} <span>{title}</span>
            </a>
          </li>
        ))}
      </ul>
    ),
  },
]

export function Info() {
  return (
    <ul className="flex flex-wrap gap-4 border border-pink rounded-xl p-4 md:gap-8 md:flex-col">
      {sections.map(({ title, content }) => (
        <li key={title} className="flex flex-col gap-2">
          <h2 className="font-bold text-2xl">{title}</h2>
          {content}
        </li>
      ))}
    </ul>
  )
}
