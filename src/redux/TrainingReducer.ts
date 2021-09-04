import {ActionTypes, addTrainTask, changeTrainTask, TrainingPageType} from "./state";

const initialState = {
    tasks: [
        {id: 1, title: 'English', descriptions: 'like to learn it in free time', score: 123},
        {id: 2, title: 'FrontEnd', descriptions: 'wanna improve my skills in this area', score: 444},
        {id: 3, title: 'Sport', descriptions: 'Its useful; for health', score: 346}
    ],
    newTask: 'Maybe dancing'
}

 const trainingReducer = (state:TrainingPageType = initialState, action:ActionTypes) => {
  if (action.type === addTrainTask)  {
      const newTaskText = {
        id: new Date().getTime(),
        title:'Add task',
        descriptions:state.newTask,
        score:200
      }
      if(state.newTask){
          state.tasks.push(newTaskText)
          state.newTask = ''
      }

  }else if (action.type === changeTrainTask){
      state.newTask = action.newTask

  }
  return state
}

export default trainingReducer