import { Component } from '@angular/core';
import { InstructorService } from './instructor.service';

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.css']
})
export class InstructorComponent {
  constructor(private instructorService: InstructorService) { }

  // Logic related to instructors (e.g., managing their busy times) can go here
}