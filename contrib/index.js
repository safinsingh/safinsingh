const https = require('https')
const jsdom = require('jsdom')
const fs = require('fs')
const path = require('path')
const { JSDOM } = jsdom

const query = `query { 
  viewer { 
    contributionsCollection {
      totalCommitContributions
      restrictedContributionsCount
    }   
  }
}`

//https://api.github.com/search/commits\?q\=author:safinsingh

// https.get(
//   'https://github-readme-stats.vercel.app/api?username=safinsingh&count_private=true&include_all_commits=true',
//   (res) => {
//     let data = ''
//     res.on('data', (chunk) => {
//       data += chunk
//     })
//     res.on('end', () => {
//       const dom = new JSDOM(data)
//       Array.from(dom.window.document.querySelectorAll('.stat')).forEach((e) => {
//         if (e.dataset.testid === 'commits') {
//           const data = fs.readFileSync(path.join('template.md'), 'utf8')

//           let toWrite = data.replace(
//             '{ REPLACE_THIS }',
//             parseFloat(e.textContent.split('k')[0]) * 1000
//           )
//           toWrite = toWrite.replace(
//             '{ REPLACE_THIS_2 }',
//             new Date(new Date().getTime() - 7 * 3600 * 1000).toLocaleString(
//               'en-US'
//             )
//           )
//           fs.writeFileSync(path.join(__dirname, '..', 'README.md'), toWrite)
//         }
//       })
//     })
//   }
// )
