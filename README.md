```javascript
class Safin {
  constructor() {
    this.name = 'Safin Singh'
    this.githubContribs = '2979'
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
    console.log(
      `I have ${this.githubContribs} open-source contributions as of 8/27/2020, 9:04:42 PM!`
    )
    console.log(`Some of my interests are:`)

    this.interests.forEach((i) => {
      console.log(` - ${i.language}: [${i.types.join(", ")}]`)
    })
  }
}
```
