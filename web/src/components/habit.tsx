interface IHabit{
    completed: number;
}

const Habit = ({completed} : IHabit)=>{
    return (
        <div className="bg-zinc-900 w-10 h-10 text-white">{completed}</div>
    )
}

export default Habit