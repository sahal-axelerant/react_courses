import { useEffect } from "react"
import { useState } from "react"
import React from "react"
import { User } from "./User"

function App() {
  const [users, setUsers] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()

  useEffect(() => {
    setLoading(true)
    setError(undefined)
    const controller = new AbortController()
    fetch("https://jsonplaceholder.typicode.com/users", {
      signal: controller.signal,
    })
      .then(async (res) => {
        const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
        await sleep(2000)
        return res.status === 200 ? res.json() : Promise.reject(res)
      })
      .then((data) => {
        setUsers(data)
      })
      .catch((e) => {
        if (e?.name === "AbortError") return
        setError(e)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])
  let result
  if (loading) {
    result = <h1>Loading...</h1>
  } else if (error?.status) {
    result = <h1>Error: {error.status}</h1>
  } else {
    result = users.map((user) => <User name={user.name} key={user.id} />)
  }
  return (
    <React.Fragment>
      <h1>Users List</h1>
      {result}
    </React.Fragment>
  )
}

export default App
