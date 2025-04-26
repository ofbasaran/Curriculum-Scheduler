// course.component.ts
import { Component } from '@angular/core';
import { CourseService } from './course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  constructor(private courseService: CourseService) { }

  // Logic related to courses (e.g., adding, removing, modifying courses) can go here
}
