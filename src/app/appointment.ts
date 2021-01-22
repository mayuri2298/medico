type Time = {
    hours: number;
    minutes: number;
};

export class Appointment{
    appointmentId:number;
    patientId:number;
    doctorId:number;
    name:string;
    surname:string;
    mobNo:string;
    status:number;
    time: Time["hours"];
    date:Date;
}