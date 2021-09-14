import {addTrainTask, changeTrainTask, TrainingPageType} from "./state";

const initialState = {
    tasks: [
        {id: 1, title: 'English', descriptions: 'like to learn it in free time', score: 123},
        {id: 2, title: 'FrontEnd', descriptions: 'wanna improve my skills in this area', score: 444},
        {id: 3, title: 'Sport', descriptions: 'Its useful; for health', score: 346}
    ],
    newTask: 'Maybe dancing'
}as TrainingPageType
export const AddTrainingTaskAC = () => ({
        type:addTrainTask
    } as const)
export const ChangeTrainingTaskTextAC = (newTask:string) => ({
            type:changeTrainTask,
            newTask: newTask
        } as const
    )
type AddTrainingTaskAT = ReturnType<typeof AddTrainingTaskAC>
type ChangeTrainingTaskTextAT = ReturnType<typeof ChangeTrainingTaskTextAC>

type ActionsType = AddTrainingTaskAT | ChangeTrainingTaskTextAT

const trainingReducer = (state: TrainingPageType = initialState, action: ActionsType) => {
    switch (action.type) {
        case "ADD_TRAIN_TASK": {
            const newTaskText = {
                id: new Date().getTime(),
                title: 'Add task',
                descriptions: state.newTask,
                score: 200
            }
            let stateCopy = {...state, tasks: [...state.tasks, newTaskText]}
            stateCopy.newTask = ''
            return stateCopy
        }
        case "CHANGE_TRAIN_TASK": {
            return {...state, newTask: action.newTask}
        }
        default:
            return state
    }

}

export default trainingReducer