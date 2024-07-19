import { useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import Result from "./components/Result";

const INVESTEMNT_PARAMETERS =[
  {id: "initialInvestment", labelName: "Initial Investment", type: "number"},
  {id: "annualInvestment", labelName: "Annual Investment", type: "number"},
  {id: "expectedReturn", labelName: "Expected Returns", type: "number"},
  {id: "duration", labelName: "Duration", type: "number"},
]

function App() {
  const [parameters, setCalculationParameters] = useState({});
  

  function updateParameter(event, paremeter) {
    setCalculationParameters(
      prevParams => {
        const updateParameters = { ...prevParams, [paremeter]: +event.target.value };
        return updateParameters;
      }
    )
  }



  return (
    <>
      <Header />
      <main id="user-input">
        <div className="input-group">
          { INVESTEMNT_PARAMETERS.slice(0, 2).map(params => (
            <Input key={params.id} {...params} onChangeHandler={()=>updateParameter(event, params.id)} />
          )) }
        </div>
        <div className="input-group">
        { INVESTEMNT_PARAMETERS.slice(2, 4).map(params => (
            <Input key={params.id} {...params} onChangeHandler={()=>updateParameter(event, params.id)} />
          )) }
        </div>
        <Result {...parameters} />
      </main>
    </>
  )
}

export default App
