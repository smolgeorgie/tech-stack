## Hygraph data into Enhance

Eventhough it was a hard task, I did manage to load in the Hygraph API into the Enhance framework with the help of their documentation and my brother (who builds APIs himself and can read it better than I do)

I loaded in data through 
```js
export async function get() {
  const apiUrl =
    "https://eu-central-1.cdn.hygraph.com/content/cl54wpnkq38x701t370gr4cvs/master";
```
and made sure it was called back by a manual GraphQL query string, which inspiration came from the FDND repository in Sveltekit. This way of coding had been done this way, so I took over that part of the code. 
```js
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
```
I then created a index.mjs file in a 'page' folder and called back the data from the api folder, by doing this:
```js
```js
    <h1>${program.title}</h1>
    <h2>${program.subtitle}</h2>
```

## Issues occorred

**20-10-2024**
There has been some issues with pushing and pulling through laptop and desktop. I didn't push my progress on my laptop but did push on my laptop which created collission in files. I had to look through my commits and returned everything manually.


## Sources

[begin-Css-Approach](https://begin.com/blog/posts/2023-01-10-past-informs-the-present-our-approach-to-css)
