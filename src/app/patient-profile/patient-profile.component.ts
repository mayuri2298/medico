import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css']
})
export class PatientProfileComponent implements OnInit {
  patientId: number
  patient: Patient 
  
  constructor(private route: ActivatedRoute,private patientService: PatientService,private router:Router) { }

  ngOnInit(): void {
    this.patientId = this.route.snapshot.params['patientId'];
    this.patient = new Patient();
    this.patientService.getPatientById(this.patientId).subscribe(data=>{
      this.patient=data;
    });
    
  }
}
