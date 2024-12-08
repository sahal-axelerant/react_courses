import { useForm } from "react-hook-form"

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { email: "sahal.v@axelerant.com" } })

  function handleFormSubmit(data) {
    alert("Success")
  }
  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="form">
      <div
        className={`form-group ${
          errors?.email?.message.length > 0 ? "error" : ""
        }`}
      >
        <label className="label" htmlFor="email">
          Email
        </label>
        <input
          className="input"
          type="email"
          id="email"
          {...register("email", {
            required: { value: true, message: "Required" },
            validate: (value) => {
              if (!value.endsWith("@webdevsimplified.com")) {
                return "Must end with @webdevsimplified.com"
              }
            },
          })}
        />
        {errors?.email?.message.length > 0 && (
          <div className="msg">{errors.email.message}</div>
        )}
      </div>
      <div
        className={`form-group ${
          errors?.password?.message.length > 0 ? "error" : ""
        }`}
      >
        <label className="label" htmlFor="password">
          Password
        </label>
        <input
          className="input"
          type="text"
          id="password"
          {...register("password", {
            required: { value: true, message: "Required" },
            validate: {
              hasMinCount: (value) => {
                if (value.length < 10) {
                  return "Must be at least 10 characters"
                }
              },
              hasLowerCase: (value) => {
                if (!value.match(/[a-z]/)) {
                  return "Must include at least 1 lowercase letter"
                }
              },
              hasUppercase: (value) => {
                if (!value.match(/[A-Z]/)) {
                  return "Must include at least 1 uppercase letter"
                }
              },
              hasNumber: (value) => {
                if (!value.match(/[0-9]/)) {
                  return "Must include at least 1 number"
                }
              },
            },
          })}
        />
        {errors?.password?.message.length > 0 && (
          <div className="msg">{errors.password.message}</div>
        )}
      </div>
      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  )
}
