# pwa-text-editor

## Link to Deployed Website

(https://shielded-temple-06167.herokuapp.com/)

## Link to Github Repository
(https://github.com/chanjeff520/pwa-text-editor)<br><br>

![Walkthrough of the website](./img/PWA.gif)

## Technology

- JavaScript: Programming Language used
- Node.js: To run JavaScript without the browser
- npm: To install necessary modules and packages for this project
- PWA: The use of Web server as a app without visiting an app store to download software
- Express: to run the server
- Git: For version control to track changes to source code
- GitHub: To host the repository

## Description

A text editor that can be accessed through the web with the ability to write code or notes online or even offline, if the user have visited the site at least once before. The website will use the cache to access the information for offline and will save the cache for 30 days if not deleted.
<hr>

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Code Snippets](#code-snippets)
- [Author](#author-links)

<hr>


## Installation

  Dependencies needed: npm, node.js<br>
  Installation : (only follow this installation if this application was downloaded from GitHub)
   - install node.js via (https://nodejs.org/en/download/)
   - Install npm( this installation usually comes with node installation)
   - In the terminal, do 'npm install' on the root of the file. All the dependencies should be within the package.json file. This file will tell the program what files to install.

<hr>

## Usage

Instuctions <br>

Getting Started(steps to run from local server):
1) We want to build the __dist__ folder by using "__npm run build__"
2) To start the server, we would run "__npm run start__"
3) go to the browser and go to localhost:3000
<br>

Using the text editor
1) type into the text editor.
2) the next time you come back the progress is save through the cache
3) the user can also install the website to work as a PWA
<hr>


## Credits

The source code was from UC Berkeley Extension.
<hr>

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
<hr>

## Code Snippets

```js
// logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log('PUT to the database');
  
  // Create a connection to the database database and version we want to use.
  const jateDb = await openDB('jate', 1);

  // Create a new transaction and specify the database and data privileges.
  const tx = jateDb.transaction('jate', 'readwrite');

  // Open up the desired object store.
  const store = tx.objectStore('jate');

  // Use the .add() method on the store and pass in the content.
  const request = store.put({ id: 1, value: content });

  // Get confirmation of the request.
  const result = await request;
  console.log('data has been saved to the database', result);
}
```

The code above store data that can be read or write into the jateDb
<hr>

```js
      //Creates a manifest.json file
      new WebpackPwaManifest({
        fingerprints: false,
        inject: true,
        name: 'A Generic PWA Text Editor',
        short_name: 'Jate',
        description: 'A basic text editor using progressive web app (PWA)',
        background_color: '#225ca3',
        theme_color: '#225ca3',
        start_url: './',
        publicPath: './',
        icons: [
          {
            src: path.resolve('src/images/logo.png'),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join('assets', 'icons'),
          },
        ],
      }),

```

The code above is a plugin that creates a manifest file.
<hr>

## Author Links

  You can reach me on
  GitHub: [__chanjeff520__](https://github.com/chanjeff520) <br>
  LinkedIn: [__Jeff chan__](https://www.linkedin.com/in/jefflchan/),<br>
  Email:  __chanjeff520@gmail.com__