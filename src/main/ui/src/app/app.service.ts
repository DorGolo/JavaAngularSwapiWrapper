import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  rootURL = '/api';

  getPeople() {
    return this.http.get('https://swapi.dev/api/people');
  }

  addPerson(person: any, id: number) {
	person.id = id;
	return this.http.post(this.rootURL + '/person', person);
  }

}
