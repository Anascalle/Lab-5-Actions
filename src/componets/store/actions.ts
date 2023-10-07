import legoData from "../../service/legoData";
import { Actions,AppState,Observer } from "../../types/store";
import { DashboardActions } from "../../types/store";
 
export const changehead= (payload:any)  => {

    return{
        action: DashboardActions.CHANGEBACKGROUNDHEAD,
        payload

    }
}
export const changebody= (payload:any)  => {

    return{
        action: DashboardActions.CHANGEBACKGROUNDBODY,
        payload

    }
}

export const changefeet= (payload:any)  => {

    return{
        action: DashboardActions.CHANGEBACKGROUNDFEET,
        payload

    }
}