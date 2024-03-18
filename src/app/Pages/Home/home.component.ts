import { Component } from '@angular/core';
import { HeaderComponent } from '../../Components/Header/header.component';
import { TesteComponent } from '../../Components/Country/test.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: "app-home",
    standalone: true,
    imports:[HeaderComponent, TesteComponent, HttpClientModule],
    templateUrl: "./home.component.html",
    styleUrl: "./home.component.css"
})

export class HomeComponent {};  