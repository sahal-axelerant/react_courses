import { useState } from "react"

export function Person() {
  const [name, setName] = useState("")
  const [age, setAge] = useState(0)
  function decrementAge() {
    setAge((current) => current - 1)
  }
  function incrementAge() {
    setAge((current) => current + 1)
  }
  return (
    <div>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value)
          }}
        />
      </div>
      <div>
        <button onClick={decrementAge}>-</button> {age}{" "}
        <button onClick={incrementAge}>+</button>
      </div>
      <div>
        My name is {name} and I am {age} years old
      </div>
    </div>
  )
}
