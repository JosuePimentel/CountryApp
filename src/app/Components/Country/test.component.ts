import { Component } from "@angular/core";
import { DataService } from "../../services/data.service";

@Component({
    selector: 'app-teste',
    standalone: true,
    templateUrl: './teste.component.html',
    styleUrl: './teste.component.css',
    imports: []
})

export class TesteComponent {
    dados: any

    constructor(private meuServico: DataService) {
        this.getDadosJSON()
    }

    getDadosJSON() {
        this.meuServico.getCountry().subscribe(resp => {
            this.dados = resp
            // console.log(this.dados)
        })
    }

    clickFilter() {
        document.querySelector('.filterCountry')?.classList.toggle('show')
    }

    actuallySelect: string = "Filter by Contry"
    clickSelect(ele: string) {
        this.actuallySelect = ele
    }
}