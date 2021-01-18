import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from './patient';
@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private baseURL = "http://localhost:8080/api/v1";

  constructor(private http : HttpClient) { }

  insertPatient(patient:Patient): Observable<Object>{
    return this.http.post(`${this.baseURL}`+"/patient_add",patient);
  }

  loginPatient(patient: Patient): Observable<Object>{
    return this.http.post(`${this.baseURL}`+"/login", patient);
  }

  loginuser(){
}
}
