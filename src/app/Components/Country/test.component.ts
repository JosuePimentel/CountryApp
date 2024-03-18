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
    dataOrigin: any
    dataSelect: any

    constructor(private meuServico: DataService) {
        this.getDadosJSON()
    }

    getDadosJSON() {
        this.meuServico.getCountry().subscribe(resp => {
            this.dataOrigin = resp
            this.dataSelect = resp
            // console.log(this.dados)
        })
    }

    showContries(reg: string) {
        let container = document.querySelector('.countryContainer')

        this.dataSelect = []
        this.dataOrigin.forEach((ele:any) => {
            if(ele.region == reg)
            {
                this.dataSelect.push(ele)
            }
        })
    }

    clickFilter() {
        document.querySelector('.filterCountry')?.classList.toggle('show')
    }

    actuallySelect: string = "Filter by Contry"
    clickSelect(reg: string) {
        this.actuallySelect = reg
        this.showContries(reg)
    }
}