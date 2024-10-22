export default function Head() {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="/_public/style.css">
      <title></title>
      <style>
        body {
        
        --content-bg: #ebf3df;
        --general-bg: #A675F5;
        --content-pad: 3em;
        --border-rd-cont: 25px 0 25px 25px;

          background-color: var(--general-bg);
          margin: 0 2.5em 0 2.5em;
        }
      </style>
    </head>
`;
}
