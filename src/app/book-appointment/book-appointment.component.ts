import { Component, OnInit } from '@angular/core';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})
export class BookAppointmentComponent implements OnInit {

  appointment: Appointment = new Appointment();
  
  constructor(private appointmentService:AppointmentService,private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    
  }
  onSubmit(){
    this.appointment.status=-1;
    this.appointment.patientId=parseInt(sessionStorage.getItem('patientId'));
    this.appointment.doctorId=this.route.snapshot.params['doctorId'];
    this.appointmentService.insertAppointment(this.appointment).subscribe(data=>{
      console.log(data);
    },error => console.log(error));
    this.router.navigate(['specialist']);
    
  }
  routeBack(){
    this.router.navigate['specialist'];
  }
}
