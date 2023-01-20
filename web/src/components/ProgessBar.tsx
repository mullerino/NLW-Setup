interface IProgessBar{
    progess: number
}

const ProgressBar = ({progess}:IProgessBar)=>{
    return (
        <div 
            role="progressbar" 
            aria-label = "Progresso" 
            aria-valuenow={progess} 
            className='h-3 rounded-xl bg-violet-600' 
            style ={{
                width: `${progess}%`
            }}>
        </div>
    )
}

export default ProgressBar