import { Actions,AppState,Observer } from "../../types/store";
import { reducer } from "./reducers";

export let appState: AppState = {
  cabeza: ``,
  torso: ``,
  piernas: ``,

};

let observers: Observer[] = [];

export const dispatch = (action: Actions) => {
    const clone = JSON.parse(JSON.stringify(appState))
    appState = reducer(action, clone);
    observers.forEach(o => o.render());
}

export const addObserver = (ref: Observer) => { observers = [...observers, ref]};