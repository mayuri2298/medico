import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SpecialistComponent } from './specialist/specialist.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { LogoutComponent } from './logout/logout.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    SpecialistComponent,
    DoctorProfileComponent,
    BookAppointmentComponent,
    PatientProfileComponent,
    LogoutComponent,
    EditProfileComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
