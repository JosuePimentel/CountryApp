import { Component } from '@angular/core';
import { HeaderComponent } from '../../Components/Header/header.component';
import { CountryComponent } from '../../Components/Coutry/country.component';

@Component({
    selector: "app-home",
    standalone: true,
    imports:[HeaderComponent, CountryComponent],
    templateUrl: "./home.component.html",
    styleUrl: "./home.component.css"
})

export class HomeComponent {};  