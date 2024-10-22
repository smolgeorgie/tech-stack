// /app/pages/program.mjs

export default function Program({ html, state }) {
  const { store } = state;
  const { program } = store;

  return html`
    <fdnd-nav></fdnd-nav>

    <article class="fdnd-program">
      <h1>${program.title}</h1>
      <p>${program.content.html}</p>
      <p></p>

      <article class="fdnd-program_semesters">
        <h2>${program.subtitle}</h2>

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
                      Sprint ${sprint.sprintNumber}: ${sprint.title})
                    </li>
                  `
      // You can add this later:  (Start date: ${sprint.startdate}
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

