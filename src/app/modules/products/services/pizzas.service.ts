import { catchError, of } from 'rxjs';
import { Injectable } from "@angular/core";

import { HttpClient } from '@angular/common/http';
import { Pizza } from '../models/pizza.model';

@Injectable({providedIn: 'root'})
export class PizzasService {
  constructor(private http: HttpClient) {}

  loadPizzas() {
    return this.http.get<Pizza[]>('/assets/db.json')
  }
}
