import "./user.css"
import userJson from "./user.json"
import { UserCardClass as UserCard } from "./UserCardClass"

function App() {
  return (
    <UserCard
      name={userJson.name}
      age={userJson.age}
      phoneNumber={userJson.phoneNumber}
      address={userJson.address}
    />
  )
}

export default App
