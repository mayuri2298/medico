import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  patient: Patient = new Patient();
 
  
  constructor(private patientService : PatientService,private router: Router, private http: HttpClient) { 
    
  }

  savePatient(){
    this.patientService.loginPatient(this.patient).subscribe( data =>{
      console.log(data);
      this.router.navigate(['home']);

    },
    error => console.log(error));
  }

  onSubmit(){
    console.log(this.patient);
    this.savePatient();
  }
  
  
  ngOnInit(): void {
  }

}
