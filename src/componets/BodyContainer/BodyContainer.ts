import legoData from "../../service/legoData";
import { Attributesbuttons } from "../Button/Button";
import { BodyButtons } from "../export";
import BodyContainerStyles from "./ButtonContainer.css"


class BodyButtonsContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if(this.shadowRoot)
        this.shadowRoot.innerHTML =`<style>${BodyContainerStyles}</style>`
        const bodyButtons = document.createElement("body-buttons");
        this.shadowRoot?.appendChild(bodyButtons);
    }  
       
    
}

customElements.define("body-buttons-container", BodyButtonsContainer);
export default BodyButtonsContainer;

  
