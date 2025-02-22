import { useState } from "react"
import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Result from "./components/Results"

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
})
function handleChange(inputIdentifier, newValue) {
    setUserInput(prevUserInput => {
        return {
            ...prevUserInput,
            [inputIdentifier]: +newValue
        }
    })
}
const isValid = userInput.duration >= 1
  return (
    <>
      <Header/>
      <UserInput 
      userInput={userInput}
      onChange={handleChange}/>
      {!isValid && <p className="center">Please enter a duration greater than zero.</p>}
      {isValid && <Result input={userInput}/>}
    </>
  )
}

export default App
