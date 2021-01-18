import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  patient : Patient = new Patient();
  constructor(private patientService : PatientService,private router: Router) { }

  ngOnInit(): void {
  }

  savePatient(){
    this.patientService.insertPatient(this.patient).subscribe(data=>{
      console.log(data);
    },
    error=>console.log(error));
  }



  onSubmit(){
    console.log(this.patient);
    this.savePatient();
    this.router.navigate(['login']);
  }
}
