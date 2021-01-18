import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit {

  doctorId: number
  doctor: Doctor
  constructor(private route: ActivatedRoute,private doctorService: DoctorService,private router:Router) { }

  ngOnInit(): void {
    this.doctorId=this.route.snapshot.params['doctorId'];
    this.doctor = new Doctor();
    this.doctorService.getDoctorById(this.doctorId).subscribe(data =>{
      this.doctor = data;
    })
    
  }
  bookAppointment(doctorId : number){
    this.router.navigate(['specialist/book_apt', doctorId]);
  }

}
