import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  patient: Patient = new Patient();
  
  constructor(private patientService : PatientService,private router: Router) { }

  ngOnInit(): void {
  }
  
  patientDetails(patientId : number){
    this.router.navigate(['patient_profile', patientId]);
  }

}