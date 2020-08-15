```javascript
class Safin {
  constructor() {
    this.name = 'Safin Singh'
    this.githubContribs = '{ REPLACE_THIS }'
    this.interests = [
      {
        language: 'typescript',
        types: ['react', 'node'],
      },
      {
        language: 'go',
        types: ['cli-tools', 'cybersecurity-automation'],
      },
      {
        language: 'python',
        types: ['scripting', 'control-theory'],
      },
    ]
  }

  print() {
    console.log(`Hi! I'm ${this.name}!`)
    console.log(`I have ${this.githubContribs} open-source contributions!`)
    console.log(`Some of my interests are:`)

    this.interests.forEach((i) => {
      process.stdout.write(` - ${i.language}: [`)

      i.types.forEach((t, index) => {
        process.stdout.write(`${t}`)
        if (index !== i.types.length - 1) {
          process.stdout.write(`, `)
        }
      })
      console.log(`]`)
    })
  }
}
```