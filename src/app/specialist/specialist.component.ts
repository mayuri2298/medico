import { Component, OnInit } from '@angular/core';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-specialist',
  templateUrl: './specialist.component.html',
  styleUrls: ['./specialist.component.css']
})
export class SpecialistComponent implements OnInit {

  doctors : Doctor[];
  constructor(private doctorService : DoctorService,private router: Router) { }

  ngOnInit(): void {
    this.getDoctors();
  }
  private getDoctors(){
    this.doctorService.getDoctorList().subscribe(data =>{
      this.doctors = data;
    });
  }
  doctorDetails(doctorId : number){
    this.router.navigate(['specialist', doctorId]);
  }
  bookAppointment(doctorId : number){
    this.router.navigate(['specialist/book_apt', doctorId]);
  }
}
