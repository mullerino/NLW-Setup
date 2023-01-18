import dayjs from 'dayjs'

export function generateRangeDates(){
    const firstDayOfTheYear = dayjs().startOf('year')
    const today = new Date()

    const dates = []
    let compareDates = firstDayOfTheYear

    while(compareDates.isBefore(today)){
        dates.push(compareDates.toDate())
        compareDates = compareDates.add(1,'day')
    }

    return dates
}