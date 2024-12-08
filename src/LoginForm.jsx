import { useMemo } from "react"
import { useRef } from "react"
import { useState } from "react"
import { checkEmail, checkPassword } from "./Validators"

export function LoginForm() {
  const [isFirstSubmitDone, setIsFirstSubmitDone] = useState(false)
  const [emailErrors, setEmailErrors] = useState([])
  const [passwordErrors, setPasswordErrors] = useState([])
  const email = useRef()
  const password = useRef()

  function handleFormSubmit(e) {
    e.preventDefault()
    setIsFirstSubmitDone(true)
    const emailResults = checkEmail(email.current.value)
    const passwordResults = checkPassword(password.current.value)
    if (emailResults.length === 0 && passwordResults.length === 0) {
      alert("Success")
    } else {
      setEmailErrors(emailResults)
      setPasswordErrors(passwordResults)
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
          ref={email}
          onChange={(e) =>
            isFirstSubmitDone
              ? setEmailErrors(checkEmail(email.current.value))
              : undefined
          }
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
          type="text"
          id="password"
          ref={password}
          onChange={(e) =>
            isFirstSubmitDone
              ? setPasswordErrors(checkPassword(password.current.value))
              : undefined
          }
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
