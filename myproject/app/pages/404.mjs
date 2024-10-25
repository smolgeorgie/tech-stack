export default function FourOhFour({ html, state }) {
    const { error } = state.attrs
  
    return html`
      <main>
        <h1>OOPS!</h1>
        <h2>Looks like our students took website destruction to a whole new level</h2>
        <p>${error && error}</p>
      </main>
    `
  }

  