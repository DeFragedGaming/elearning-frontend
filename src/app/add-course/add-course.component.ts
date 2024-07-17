import { Component } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {
  course = {
    title: '',
    description: '',
    author: ''
  };

  constructor(private courseService: CourseService) { }

  onSubmit(): void {
    this.courseService.addCourse(this.course).subscribe();
  }
}
