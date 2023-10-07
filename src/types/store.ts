import legoData from "../service/legoData"

export type Observer = ({ render: ()=> void} & HTMLElement)

export type AppState ={
    cabeza:string
    torso:string
    piernas:string
}

export enum DashboardActions{
    "CHANGEBACKGROUNDHEAD" = "CHANGEBACKGROUNDHEAD", 
    "CHANGEBACKGROUNDBODY" = "CHANGEBACKGROUNDBODY",  
    "CHANGEBACKGROUNDFEET" = "CHANGEBACKGROUNDFEET"  
}

export interface  ChangeHeadActions{
    action: DashboardActions.CHANGEBACKGROUNDHEAD;
    payload: ``
}
export interface  ChangeBodyActions{
    action: DashboardActions.CHANGEBACKGROUNDBODY;
    payload: ``
}
export interface  ChangeFeetActions{
    action: DashboardActions.CHANGEBACKGROUNDFEET;
    payload: ``
}

export type Actions = ChangeBodyActions | ChangeHeadActions | ChangeFeetActions 