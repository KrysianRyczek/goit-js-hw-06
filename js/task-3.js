class StringBuilder{
  #string

  constructor (char) {
  this.#string=char
  }
  get getString() {
    return this.#string
  }
  
  set padStart(char) {
    return this.#string=char.concat(this.#string)
  }

  set padEnd(char) {
    return this.#string=this.#string.concat(char)
  }
  set padBoth(char) {
    this.padStart = char
    this.padEnd = char
  }
}

const builder = new StringBuilder(".")
console.log(builder.getString)
builder.padStart = "^"
console.log(builder.getString)
builder.padEnd = "^"
console.log(builder.getString)
builder.padBoth= "="
console.log(builder.getString)
