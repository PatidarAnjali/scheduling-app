import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-appointment-list',
  standalone: true,
  imports: [CommonModule, FormsModule], // Add necessary imports here if you are using standalone components
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css'] // Corrected property name
})
export class AppointmentListComponent {
  newAppointmentTitle: string = "";
  newAppointmentDate: Date = new Date();
  appointments: Appointment[] = []; 
}
