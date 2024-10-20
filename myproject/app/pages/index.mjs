// /app/pages/program.mjs

export default function Program({ html, state }) {
  const { store } = state;
  const { program } = store;

  return html`

  <fdnd-nav></fdnd-nav>
  
    <h1>${program.title}</h1>
    <h2>${program.subtitle}</h2>

    <div>${program.content.html}</div>

    <h3>Semesters</h3>
    <ul>
      ${program.semesters
    .map(
      (semester) => `
          <li>
            <strong>${semester.title}</strong>
            <ul>
              ${semester.sprints
    .map(
      (sprint) => `
                <li>
                  Sprint ${sprint.sprintNumber}: ${sprint.title} (Start date: ${sprint.startdate})
                </li>
              `
    )
    .join("")}
            </ul>
          </li>
        `
    )
    .join("")}
    </ul>
  `;
}
