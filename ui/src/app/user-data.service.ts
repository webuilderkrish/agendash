import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from "./data";
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class UserDataService {

	private url: string = "/api/test.json"

	constructor(private http: HttpClient) {

	}

	public getData(): Observable<Data[]> {
		return this.http.get<Data[]>(this.url);
	}
}