import { Component } from "@angular/core";
import { Course } from "./course";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html'
})
export class CourseListComponent {

  courses: Course[] = [];

  ngOnInit(): void {
    this.courses = [
      {
        id: 1,
        name: 'teste',
        imageUrl: '/assets/images/forms.png',
        price: 105,
        code: 'GPG',
        duration: 120,
        rating: 5,
        releaseDate: 'November, 2 2022'

      },
      {
        id: 2,
        name: 'teste2',
        imageUrl: '/assets/images/http.png',
        price: 200,
        code: 'GPG-x',
        duration: 350,
        rating: 4.5,
        releaseDate: 'November, 2 2022'

      }
    ]
  }

}
