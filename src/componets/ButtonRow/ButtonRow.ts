
import firstButton, { Attributesbuttons } from "../Button/Button";
import legoData from "../../service/legoData";
import Legos from "../../service/legoData";




class BodyButtons extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }


  connectedCallback() {
   
    const headRow = document.createElement("div");
    const torsoRow = document.createElement("div");
    const legsRow = document.createElement("div");


    const legosInstance = new Legos();
    const legoData = legosInstance.get();


    for (let i = 0; i < 6; i++) {
        const headButton = document.createElement("my-button") as firstButton;
        headButton.setAttribute(Attributesbuttons.cabeza, legoData[i].cabeza);
        headRow.appendChild(headButton);
      }
      

      for (let i = 0; i < 6; i++) {
        const torsoButton = document.createElement("my-button") as firstButton;
        torsoButton.setAttribute(Attributesbuttons.torso, legoData[i].torso);
        torsoRow.appendChild(torsoButton);
      }
      
     
      for (let i = 0; i < 6; i++) {
        const legsButton = document.createElement("my-button") as firstButton;
        legsButton.setAttribute(Attributesbuttons.piernas, legoData[i].piernas);
        legsRow.appendChild(legsButton);
      }

  
    this.shadowRoot?.appendChild(headRow);
    this.shadowRoot?.appendChild(torsoRow);
    this.shadowRoot?.appendChild(legsRow);
  
  }


}

customElements.define("body-buttons", BodyButtons);
export default BodyButtons;
