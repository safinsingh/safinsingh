const fs = require('fs')
const path = require('path')
const axios = require('axios').default

let totalContribs = 0

const token = process.argv[2]
const query = `query {
  user(login: "safinsingh") { 
    contributionsCollection {
      totalCommitContributions
      restrictedContributionsCount
    }   
  }
}`

axios
  .post(
    'https://api.github.com/graphql',
    {
      query: query,
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  )
  .then((res) => {
    Object.keys(res.data.data.user.contributionsCollection).forEach((el) => {
      totalContribs += res.data.data.user.contributionsCollection[el]
    })
    axios
      .get('https://api.github.com/search/commits?q=author:safinsingh', {
        headers: {
          Accept: 'application/vnd.github.cloak-preview',
        },
      })
      .then((res) => {
        totalContribs += res.data.total_count
        const data = fs.readFileSync(path.join('template.md'), 'utf8')

        let toWrite = data.replace('{ REPLACE_THIS }', totalContribs)
        toWrite = toWrite.replace(
          '{ REPLACE_THIS_2 }',
          new Date(new Date().getTime() - 7 * 3600 * 1000).toLocaleString(
            'en-US'
          )
        )
        fs.writeFileSync(path.join(__dirname, '..', 'README.md'), toWrite)
      })
  })
