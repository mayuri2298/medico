import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SpecialistComponent } from './specialist/specialist.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  { path:'patient_profile',redirectTo:'login' },
  { path:'register',component:RegisterComponent },
  { path:'login',component:LoginComponent },
  { path:'home',component:HomeComponent },
  { path:'specialist',component:SpecialistComponent },
  { path:'specialist/:doctorId',component:DoctorProfileComponent },
  { path:'specialist/book_apt/:doctorId',component:BookAppointmentComponent },
  { path:'home/patient_profile/:patientId',component:PatientProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
