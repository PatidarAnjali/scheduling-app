import { Component } from '@angular/core';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [AppointmentListComponent]
})
export class AppComponent {
  // Component logic
}
