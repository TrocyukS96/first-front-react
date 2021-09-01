import {ActionTypes, addTrainTask, changeTrainTask, TrainingPageType} from "./state";

 const trainingReducer = (state:TrainingPageType, action:ActionTypes) => {
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