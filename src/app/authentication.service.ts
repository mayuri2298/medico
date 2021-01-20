import { Injectable } from '@angular/core';
import { Patient } from './patient';
import { PatientService } from './patient.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  patient: Patient = new Patient();
  
  constructor(private patientService: PatientService) { }
  
  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}