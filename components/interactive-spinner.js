class InteractiveSpinnerComponent extends HTMLElement {
    connectedCallback() {
        // don't create the div again if the element is mooved around.
        if (!this.querySelector('div')) {
            this.append(document.createElement('div'));
        }
        this.update();
        this.addEventListener('click', this.handleClick)
        this.addEventListener('contextmenu', e => {
            e.preventDefault();
            this.handleClick(false)
        })
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
    
    handleClick(accelerate = true) {
        const div = this.querySelector('div');

        if (div) {
            const previousDuration = window
                .getComputedStyle(div)
                .getPropertyValue('animation-duration')
            
            const nextDuration = accelerate
                ? parseFloat(previousDuration) * 0.75
                : parseFloat(previousDuration) / 0.75
            
            if (nextDuration > 0.1 && nextDuration < 10) {
                div.style.animationDuration = nextDuration + 's';
            }
        }
    }
}

export const registerInteractiveSpinnerComponent = () => {
    customElements.define('x-interactive-spinner', InteractiveSpinnerComponent);
}
