import {getAuthData} from "./AuthReducer";

const initialState = {
    initialized: true
}


export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "INITIALIZED-SUCCESS'": {
            return {
                ...state, initialized: true
            }
        }

        default:
            return state
    }
}

//actionCreators
export const initializedSuccess = () => {
    return {type: 'INITIALIZED-SUCCESS'}
}


//thunks
export const initializeApp = () => (dispatch: any) => {
    dispatch(getAuthData())
    dispatch(initializedSuccess())


}


//types
type InitialStateType = typeof initialState
type InitializedSuccessActionType = ReturnType<typeof initializedSuccess>
type ActionsType = InitializedSuccessActionType