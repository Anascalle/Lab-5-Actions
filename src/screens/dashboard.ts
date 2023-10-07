import firstButton, { Attributesbuttons } from "../componets/Button/Button";
import legoData from "../service/legoData";
import { BodyButtons, BodyButtonsContainer } from "../componets/export";
import Legos from "../service/legoData";
import { Lego } from "../types/Lego";
import { addObserver, appState } from "../componets/store/index";
import dashboardStyle from "./dashboardStyle.css"



class Dashboard extends HTMLElement {
    buttonRowContainers: BodyButtons[] = [];

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        addObserver(this)
    }
    

    connectedCallback() {
        this.render();
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `<h3>LEGO DC</h3>
            <p>Create your character</p>
            <style>${dashboardStyle}</style>`;

          
            const bodyButtonsContainer = document.createElement("body-buttons-container");
            bodyButtonsContainer.classList.add("mi-container");

            this.shadowRoot?.appendChild(bodyButtonsContainer);
            
            this.buttonRowContainers.forEach((container) => {
                this.shadowRoot?.appendChild(container);
            });


            const lego =this.ownerDocument.createElement("div")
            lego.classList.add("mi-div");
           
            const Divcabeza = this.ownerDocument.createElement ("img");
            const Divtorso = this.ownerDocument.createElement ("img");
            const Divpiernas = this.ownerDocument.createElement ("img");
            
            Divcabeza.src= appState.cabeza;
            Divtorso.src= appState.torso;
            Divpiernas.src= appState.piernas;

            Divcabeza.classList.add("mi-cabeza");
            Divtorso.classList.add("mi-torso");
            Divpiernas.classList.add("mi-pierna");
           
            lego.appendChild(Divcabeza )
            lego.appendChild(Divtorso)
            lego.appendChild(Divpiernas)
           
            this.shadowRoot?.appendChild(lego);
        }
    }
}

customElements.define("app-dashboard", Dashboard);
