import { Component } from '@angular/core';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppointmentListComponent], // Import the standalone component
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'your-app-title';
}
