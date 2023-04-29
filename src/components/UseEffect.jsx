import { useEffect, useState } from "react"

export function UseEffect () {
  
  const [name, setName] = useState("Jan")
  const [admin, setAdmin] = useState(false)

  useEffect(() => {
    document.title = `Celebrate ${name}`
  }, [name])

  useEffect (() => {
    console.log(admin)
  }, [admin])

  return (
    <section>
      <h4>Welcome {admin ? "Freddy" : "Guess User"}</h4>
      <button onClick={() => setAdmin(true)}>Log In</button>
      <p>Congratulations {name}!</p>
      <button onClick={() => setName("Will")}>Change Winner</button>
    </section>
  )
}