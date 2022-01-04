const template = document.createElement('template');
template.innerHTML = `
<style>
    h3{
        color: coral
    }
</style>

<div class="user-card">
    <img/>
    <div>
        <h3></h3>
        <div class="info">
            <p><slot name="email"/></p>
            <p><slot name="phone"/></p>
        </div>
        <button id="toggle-info">Hide info </button>
    </div>
</div>
`;

class UserCard extends HTMLElement{
    constructor (){
        super();
        this.showInfo = true;
        this.attachShadow( { mode: 'open' });
        this.shadowRoot.appendChild( template.content.cloneNode(true) );
        this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
        this.shadowRoot.querySelector('img').src = this.getAttribute('avatar');
       
        // this.innerHTML = `
        // ${this.getAttribute('name')}
        // `;
    }

    toggleInfo(){
        const btn = this.shadowRoot.querySelector('#toggle-info');
        const card = this.shadowRoot.querySelector('.info');
        this.showInfo = !this.showInfo;
        if (this.showInfo) {
            card.style.display = 'block';
            btn.textContent = 'Hidde Elements';
        }else{
            card.style.display = 'none';
            btn.textContent = 'Show Elements';
        }
        
    }

    connectedCallback(){
        this.shadowRoot.querySelector('#toggle-info').addEventListener('click', ()=>{
           this.toggleInfo();
        });
    }

    disconnectCallback(){
        this.shadowRoot.querySelector('#toggle-info').removeEventListener();
    }
}

window.customElements.define('user-card', UserCard);