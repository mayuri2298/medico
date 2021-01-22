import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Appointment } from './appointment'; 
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private baseURL = "http://localhost:8080/api/v1";

  constructor(private http : HttpClient) { }

  insertAppointment(appointment:Appointment): Observable<Object>{
    return this.http.post(`${this.baseURL}`+"/add_appointment",appointment,{responseType:'text' as 'json'});
  }
}
