import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { AuthenticationService } from '../authentication.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  a = sessionStorage.getItem('patientId');
  
  
  constructor(private patientService : PatientService,private router: Router, private http: HttpClient,public loginService:AuthenticationService) { }

  ngOnInit(): void {
  
  }
  patientDetails(patientId:number){
    this.router.navigate(['profile',]);
  }
  
  logout() {
    this.router.navigate(['login']);
  }

}
