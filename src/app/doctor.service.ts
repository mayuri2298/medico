import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doctor } from './doctor';
@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private baseURL = "http://localhost:8080/api/v1/";
  constructor(private httpClient:HttpClient) { }

  getDoctorList(): Observable<Doctor[]>{
    return this.httpClient.get<Doctor[]>(`${this.baseURL}`+"/doctor_list");
  }
  getDoctorById(doctorId: number): Observable<Doctor>{
    return this.httpClient.get<Doctor>(`${this.baseURL}`+"/get_doctor/"+`${doctorId}`);
  }
}
