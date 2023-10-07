import { Actions,DashboardActions,AppState } from "../../types/store";

export const reducer = (currentAction:Actions,currentState:AppState): AppState =>{
    console.log(currentAction)
const {action, payload} = currentAction;

switch (action){
    case DashboardActions.CHANGEBACKGROUNDHEAD:
        return{
            ...currentState,
           cabeza: payload
        };
     
    case DashboardActions.CHANGEBACKGROUNDBODY:
        return{
             ...currentState,
                   torso: payload
                };
               
  case DashboardActions.CHANGEBACKGROUNDFEET:
         return{
                 ...currentState,
                 piernas: payload
             };
                    
             default:
                return currentState;
}
}
