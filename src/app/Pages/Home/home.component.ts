import { Component } from '@angular/core';
import { HeaderComponent } from '../../Components/Header/header.component';
import { CountryComponent } from '../../Components/Country/country.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: "app-home",
    standalone: true,
    imports:[HeaderComponent, CountryComponent, HttpClientModule],
    templateUrl: "./home.component.html",
    styleUrl: "./home.component.css"
})

export class HomeComponent {};  