import { generateRangeDates } from "../utils/generate-range-dates"
import HabitDay from "./HabitDay"

const SummaryTable = ()=>{
    const weekDays = ["D","S","T","Q","Q","S","S"]
    const summaryDates = generateRangeDates()
    const minimumSummaryDatesSize = 18 * 7 // 18 semanas
    const amountOfDaysToFill = minimumSummaryDatesSize - summaryDates.length

    return (
        <div className="w-full flex ">
            <div className="grid grid-rows-7 grid-flow-row gap-3">
                {weekDays.map((dia, index) =>(   
                    <div className="text-zinc-400 text-xl h-10 w-10 font-bold flex items-center justify-center" key={`${weekDays}-${index}`}>
                        {dia}
                    </div>
                ))}
            </div>
            <div className="grid grid-rows-7 grid-flow-col gap-3">
                {summaryDates.map(date =>(
                    <HabitDay key={date.toString()}></HabitDay>
                ))}
                {amountOfDaysToFill > 0 && Array.from({length: amountOfDaysToFill}).map(()=>{
                    return (
                        <div className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed"></div>
                    )
                })}
            </div>
        </div>
    )
}

export default SummaryTable