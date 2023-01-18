import SummaryTable from "./components/SummaryTable";
import Habit from "./components/HabitDay";

import './styles/global.css'
import Header from "./components/Header";


const App = ()=> {
  
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-full max-w-5xl px-6 flex flex-col gap-16">
        <Header></Header>
        <SummaryTable></SummaryTable>
      </div>
    </div>
  )
}

export default App
