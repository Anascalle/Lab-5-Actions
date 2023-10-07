import ButtonStyle from "./Button.css";
import { appState, dispatch } from "../store/index";
import { changehead, changebody,changefeet } from "../store/actions";

export enum Attributesbuttons {
    "cabeza"= "cabeza",
    "torso"= "torso",
    "piernas"= "piernas",
}

class firstButton extends HTMLElement {
    cabeza?: string;
    torso?: string;
    piernas?: string;

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    static get observedAttributes() {
        const attrs: Record<Attributesbuttons, null> = {
            cabeza: null,
            torso: null,
            piernas: null,
        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(propName: Attributesbuttons, oldValue: string | undefined, newValue: string | undefined) {
        switch (propName) {
            default:
                this[propName] = newValue;
                break;
        }
        this.mount();
    }

     mount() {
         this.render();
        const btn = this.shadowRoot?.querySelector('button');


        btn?.addEventListener("click", () => {
           if (this.cabeza) {
                dispatch(changehead(
                this.cabeza 
              ));
          } else if (this.torso) {
              dispatch(changebody(
                 this.torso
               ));
           } else if (this.piernas) {
               dispatch(changefeet(
                  this.piernas 
                 ));
             }
             console.log(appState)
        });
     }

    connectedCallback() {
        // this.mount();
        this.render
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `<style>${ButtonStyle}</style>`;

            const bodyPartButton = this.ownerDocument.createElement("button")
            const bodyPartImage = this.ownerDocument.createElement("img")
            bodyPartImage.setAttribute("src", `${this.cabeza || this.torso || this.piernas}`)

            bodyPartButton.appendChild(bodyPartImage)

            this.shadowRoot?.appendChild(bodyPartButton)
        }
    }
}

customElements.define("my-button", firstButton);
export default firstButton;
