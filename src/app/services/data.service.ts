import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class DataService {
    private urlJSON = '/assets/data.json'

    constructor(private http: HttpClient) { }

    getCountry(): Observable<any> {
        return this.http.get(this.urlJSON)
    }
}