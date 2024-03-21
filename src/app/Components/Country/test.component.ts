import { Component } from "@angular/core";
import { DataService } from "../../services/data.service";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'app-teste',
    standalone: true,
    templateUrl: './teste.component.html',
    styleUrl: './teste.component.css',
    imports: [FormsModule]
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
        if(reg != 'Filter by Country')
            this.showContries(reg)
    }

    // onKeydown(event: KeyboardEvent): void {
    //     console.log(`Tecla pressionada: ${event.key}`);
    //   }

    valueString: string = ''
    keySearch(event: KeyboardEvent): void {
        this.clickSelect('Filter by Country')
        if(event.key == 'Enter')
        {
            this.dataSelect = []
            this.dataOrigin.forEach((ele: any) => {
                if(ele.name.toLowerCase().includes(this.valueString.toLowerCase()) || ele.region.toLowerCase().includes(this.valueString.toLowerCase()))
                {
                    this.dataSelect.push(ele)
                }
            })
        }
    }
    
}