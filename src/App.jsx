// Functionality To Create
// 1. Create state that stores an array with the initial value of `["A", "B", "C"]1
// 2. Add the ability to remove the first element from the array
// 3. Add the ability to remove a specific letter from the array
// 4. Add the ability to add a new element to the start of the array
// 5. Add the ability to add a new element to the end of the array
// 6. Add the ability to clear the array
// 7. Add the ability to reset the array to the initial value

// Bonus Functionality
// These are optional challenges that are more difficult and will really test your skills.
// 1. Add the ability to update all `A` elements in the array to `H`
// 2. Add an input that is connected to state and a button that wil add the input value to the start of the array
// 3. Add the ability to add a new element at any index in the array

import { useState } from "react"

function App() {
  const tableCss = `table, th, td {
    border: 1px solid;
  }`
  const [my_array, setMyArray] = useState(["A", "B", "C"])
  const [inputData, setInputData] = useState("")
  const [arrayIndex, setarrayIndex] = useState("")

  // Method to remove first element from the array.
  const removeFirstElement = () => {
    if (my_array.length === 0) {
      alert("Oops! No elements in array")
      return
    }
    setMyArray((current) => {
      return current.slice(1)
    })
  }

  // Method to remove specific element from the array.
  const removeElement = (value) => {
    if (my_array.length === 0) {
      alert("Oops! No elements in array")
      return
    }
    setMyArray((current) => {
      return current.filter((item) => item !== value)
    })
  }

  // Add an element to the start of the array.
  const addElementToStart = (value) => {
    setMyArray((current) => {
      return [value, ...current]
    })
  }

  // Add an element to the end of the array.
  const addElementToEnd = (value) => {
    setMyArray((current) => {
      return [...current, value]
    })
  }

  // Clear array.
  const clearArray = () => {
    setMyArray([])
  }

  // Reset array.
  const resetArray = () => {
    setMyArray(["A", "B", "C"])
  }

  // Reset array.
  const updateArrayAs = () => {
    setMyArray((current) => {
      return current.map((item) => (item === "A" ? "H" : item))
    })
  }

  // Add an element to the start of the array.
  const addElementToIndex = (value, index) => {
    setMyArray((current) => {
      return [...current.slice(0, index), value, ...current.slice(index)]
    })
  }

  return (
    <div>
      <style>{tableCss}</style>
      <span>Value(s) in the array is(are) listed below:</span>
      <table>
        <thead>
          <tr>
            <th>key</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {my_array.map((item, key) => {
            return (
              <tr key={key}>
                <td>{key}</td>
                <td>{item}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <br />
      <br />
      <div>
        <div>Operations:</div>
        <ol>
          <li>
            <button onClick={removeFirstElement}>Remove first element</button>
          </li>
          <li>
            <button onClick={() => removeElement("B")}>Remove B</button>
          </li>
          <li>
            <button onClick={() => addElementToStart("B")}>
              Add B to start
            </button>
          </li>
          <li>
            <button onClick={() => addElementToEnd("B")}>Add B to end</button>
          </li>
          <li>
            <button onClick={clearArray}>Clear array </button>
          </li>
          <li>
            <button onClick={resetArray}>Reset array </button>
          </li>
          <li>
            <button onClick={updateArrayAs}>Update A to H </button>
          </li>
          <li>
            <input
              type="text"
              value={inputData}
              onChange={(e) => {
                setInputData(e.target.value)
              }}
            />
            <button onClick={() => addElementToStart(inputData)}>
              Add element to start
            </button>
          </li>
          <li>
            <input
              type="number"
              value={arrayIndex}
              onChange={(e) => {
                setarrayIndex(e.target.value)
              }}
            />
            <button onClick={() => addElementToIndex(inputData, arrayIndex)}>
              Add element to index
            </button>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default App
