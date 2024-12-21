import { PROJECTS } from "../constants"

export function Projects() {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-3xl font-bold">My projects</h2>
      <ul className="flex flex-col gap-5">
        {PROJECTS.map(({ name, description, link, stack }) => (
          <li
            key={name}
            className="flex gap-4 border border-pink rounded-xl py-6 px-4"
          >
            <div className="flex flex-col gap-2">
              <a
                href={link}
                target="_blank"
                className="text-2xl font-medium text-gray self-start"
              >
                {name}
              </a>
              {description && (
                <p className="text-gray-400 leading-relaxed">{description}</p>
              )}
              <ul className="flex flex-wrap gap-3 mt-2 opacity-80">
                {stack.map((technology) => (
                  <li key={technology} className="text-sm text-pink">
                    {technology}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
