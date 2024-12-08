import { useMemo } from "react"
import { useState } from "react"
import { checkEmail, checkPassword } from "./Validators"

export function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isFirstSubmitDone, setIsFirstSubmitDone] = useState(false)

  const emailErrors = useMemo(() => {
    return isFirstSubmitDone ? checkEmail(email) : []
  }, [email])
  const passwordErrors = useMemo(() => {
    return isFirstSubmitDone ? checkPassword(password) : []
  }, [password])

  function handleFormSubmit(e) {
    e.preventDefault()
    setIsFirstSubmitDone(true)
    const emailResults = checkEmail(email)
    const passwordResults = checkPassword(password)
    if (emailResults.length === 0 && passwordResults.length === 0) {
      alert("Success")
    }
  }
  return (
    <form onSubmit={handleFormSubmit} className="form">
      <div className={`form-group ${emailErrors.length > 0 ? "error" : ""}`}>
        <label className="label" htmlFor="email">
          Email
        </label>
        <input
          className="input"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailErrors.length > 0 && (
          <div className="msg">{emailErrors.join(", ")}</div>
        )}
      </div>
      <div className={`form-group ${passwordErrors.length > 0 ? "error" : ""}`}>
        <label className="label" htmlFor="password">
          Password
        </label>
        <input
          className="input"
          value={password}
          type="text"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordErrors.length > 0 && (
          <div className="msg">{passwordErrors.join(", ")}</div>
        )}
      </div>
      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  )
}
