const https = require('https')
const jsdom = require('jsdom')
const fs = require('fs')
const path = require('path')
const { JSDOM } = jsdom

https.get(
  'https://github-readme-stats.vercel.app/api?username=safinsingh&count_private=true&include_all_commits=true',
  (res) => {
    let data = ''
    res.on('data', (chunk) => {
      data += chunk
    })
    res.on('end', () => {
      const dom = new JSDOM(data)
      Array.from(dom.window.document.querySelectorAll('.stat')).forEach((e) => {
        if (e.dataset.testid === 'commits') {
          const prevReadme = fs.readFileSync(
            path.join(__dirname, 'template.md'),
            'utf8',
            function (err, data) {
              const toWrite = prevReadme.replace(
                '{ REPLACE_THIS }',
                parseFloat(e.textContent.split('k')[0]) * 1000
              )
              fs.writeFileSync(path.join(__dirname, '..', 'README.md'), toWrite)
            }
          )
        }
      })
    })
  }
)
