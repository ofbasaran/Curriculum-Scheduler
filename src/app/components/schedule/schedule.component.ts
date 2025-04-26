import { Component } from '@angular/core';
import { ScheduleService } from './schedule.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent {
  constructor(private scheduleService: ScheduleService) { }

  // Logic for displaying the schedule and interacting with it can go here
}