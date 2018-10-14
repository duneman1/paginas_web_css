class Main {
    constructor (){
        this.menu_boton = document.querySelectorAll ('.oculto')
        this.document.addEventListener ('click', this.abrir_cerrar.bind(this))
    }

    abrir_cerrar(oE) {
        console.log(oE)
    }
}



document.addEventListener('DOMContentLoaded', () => { new Main})

        this.aBtnMas = document.querySelectorAll('.mas')
        this.textoMas = document.querySelector('.hide')


        this.aBtnMas.forEach(
            (btn) => { btn.addEventListener('click', this.mostrar.bind(this)) }
        )

    }

    mostrar(oE) {

        // un solo objeto
        /* if(this.textoMas.classList.contains('hide')) {
            this.textoMas.classList.remove('hide')
        } else {
            this.textoMas.classList.add('hide')
        } // toggle lo hace esto */


        /* this.textoMas.classList.toggle('hide')

        if(this.textoMas.classList.contains('hide')) {
            this.btnMas.textContent = "Ver más"
        } else {
            this.btnMas.textContent = "Ver menos"
        } */

        //varios eventos
        console.log(oE)
        let nodoBtn = oE.target
        let nodoTxt = nodoBtn.previousElementSibling
        nodoTxt.classList.toggle('hide')
        if (nodoTxt.classList.contains('hide')) {
            // boton = Ver mas 
            nodoBtn.textContent = "Ver más"
        } else {
            // boton = Ocultar
            nodoBtn.textContent = "Ver menos"
        }
    }
}