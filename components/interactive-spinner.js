class InteractiveSpinnerComponent extends HTMLElement {
    connectedCallback() {
        // don't create the div again if the element is mooved around.
        if (!this.querySelector('div')) {
            this.append(document.createElement('div'));
        }
        this.update();
    }

    static get observedAttributes() {
        return ['color'];
    }

    attributeChangedCallback() {
        this.update();
    }

    update() {
        const div = this.querySelector('div');

        // Check if connected callback has create the div
        // because attributeChangedCallback could be called before.
        if (div) {
            div.className = 'x-spinner';
            div.style.borderTopColor = this.getAttribute('color') || null;
        }
    }
}

export const registerInteractiveSpinnerComponent = () => {
    customElements.define('x-interactive-spinner', InteractiveSpinnerComponent);
}
