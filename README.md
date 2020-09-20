```javascript
class Safin {
  constructor() {
    this.name = 'Safin Singh'
    this.githubContribs = '3473'
    this.interests = [
      {
        language: 'typescript',
        types: ['react', 'node'],
      },
      {
        language: 'rust & go',
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
      `I have ${this.githubContribs} open-source contributions as of 9/19/2020, 5:13:52 PM!`
    )
    console.log(`Some of my interests are:`)

    this.interests.forEach((i) => {
      console.log(` - ${i.language}: [${i.types.join(", ")}]`)
    })
  }
}
```
