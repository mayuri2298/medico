import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css']
})
export class PatientProfileComponent implements OnInit {

  //patient : Patient[];
  patient : Patient = new Patient();
  constructor(private patientService : PatientService,private router: Router) { }

  ngOnInit(): void {
  }
  
  patientDetails(patientId : number){
    this.router.navigate(['patient_profile', patientId]);
  }
  

}
