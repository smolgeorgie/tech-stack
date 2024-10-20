export async function get() {
  const apiUrl =
    "https://eu-central-1.cdn.hygraph.com/content/cl54wpnkq38x701t370gr4cvs/master";

  const query = `
      query Program {
        program(where: {id: "cl9pm4is9l9xu0atdbqxnd710"}) {
          title
          subtitle
          content {
            html
          }
          semesters {
            title
            slug
            sprints (first: 20) {
              title
              slug
              sprintNumber
              startdate
            }
          }
        }
      }
    `;

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
    });

    if (!response.ok) {
      throw new Error("HTTP error! status: " + response.status);
    }

    const result = await response.json();
    const data = result.data;

    if (data && data.program) {
      return {
        json: { program: data.program },
      };
    } else {
      throw new Error("Invalid data structure received from API");
    }
  } catch (error) {
    console.error("Error fetching program data:", error);
    return {
      json: { error: "Failed to fetch program data" },
      status: 500,
    };
  }
}
