import {z} from 'zod'
import {FastifyInstance} from 'fastify'
import { prisma } from './lib/prisma'
import dayjs from 'dayjs'

export async function appRoutes(app:FastifyInstance){
    app.post('/habits', async (request)=>{
        const createHabitBody = z.object({
            title: z.string(),
            weekDays: z.array(z.number().min(0).max(6))
        })

        const {title,weekDays} = createHabitBody.parse(request.body)

        const today = dayjs().startOf('day').toDate()

        await prisma.habit.create({
            data: {
                title,
                created_at: today,
                WeekDays:{
                    create: weekDays.map((weekDay) => {
                        return {
                            week_day: weekDay,
                        }
                    })
                }
            }
        })
    })

    app.get('/day', async (request)=>{
        const getDayParams = z.object({
            date: z.coerce.date()
        })

        const { date } = getDayParams.parse(request.query)
        const weekDay = dayjs(date).get('day')
        const parsedDate = dayjs(date).startOf('day')

        // Carregar todos os habitos do dia e os completados

        const possibleHabits = await prisma.habit.findMany({
            where:{
                created_at:{
                    lte: date,
                },
                WeekDays: {
                    some: {
                        week_day: weekDay,
                    }
                }
            }
        })

        const day = await prisma.day.findUnique({
            where:{
                date: parsedDate.toDate(),
            },
            include: {
                DayHabits: true,
            }
        })

        const completedHabits = day?.DayHabits.map(dayHabit =>{
            return dayHabit.habit_id
        })
        return {
            possibleHabits,
            completedHabits
        }
    })
}



