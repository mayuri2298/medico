import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SpecialistComponent } from './specialist/specialist.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuardService } from './auth-guard.service';
const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  //{ path:'',component:HomeComponent,canActivate:[AuthGuardService] },
  //{ path:'patient_profile',redirectTo:'login' },
  { path:'register',component:RegisterComponent },
  { path:'login',component:LoginComponent },
  { path:'home',component:HomeComponent,canActivate:[AuthGuardService] },
  { path:'specialist',component:SpecialistComponent,canActivate:[AuthGuardService] },
  { path:'specialist/:doctorId',component:DoctorProfileComponent,canActivate:[AuthGuardService] },
  { path:'specialist/book_apt/:doctorId',component:BookAppointmentComponent,canActivate:[AuthGuardService] },
  { path:'patient_profile/:patientId',component:PatientProfileComponent,canActivate:[AuthGuardService] },
  { path:'logout',component:LogoutComponent,canActivate:[AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
