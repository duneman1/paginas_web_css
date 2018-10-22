class Main {
    constructor (){
        //menu desplegable en modo movil
        this.menu_boton = document.querySelector ('#btnHamburguesa')
        this.caja_menu = document.querySelector ('.caja_movil_hide')
        this.option_menu = document.querySelector ('.caja_movil_hide')
        this.menu_boton.addEventListener ('click', this.abrir_cerrar.bind(this))
        this.option_menu.addEventListener ('click', this.abrir_cerrar.bind(this))

        //boton subir
        this.btnSubir = document.querySelector ('.irArriba')
        this.btnSubir.addEventListener ('click', this.subir.bind(this))
        document.addEventListener ('scroll', this.scrollDectect.bind(this))
    }

    abrir_cerrar() {
        //console.log(oE)
        if(this.caja_menu.classList.contains('caja_movil_hide')) {
            this.caja_menu.classList.remove('caja_movil_hide')
        } else {
            this.caja_menu.classList.add('caja_movil_hide')
        }
    }
    

    scrollDectect(oE) {
        if (oE.target.scrollingElement.scrollTop>50) {
            this.btnSubir.style.display = 'block'
        } else {
            this.btnSubir.style.display = 'none'
        }
        this.caja_menu.classList.add('caja_movil_hide')
        
    }
    
    subir() {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        })
    }
}



document.addEventListener('DOMContentLoaded', () => { new Main()})
