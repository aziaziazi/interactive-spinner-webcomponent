import { registerInteractiveSpinnerComponent } from "./components/interactive-spinner.js";

const app = () => {
    registerInteractiveSpinnerComponent();
}

document.addEventListener('DOMContentLoaded', app)