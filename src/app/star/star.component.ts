import { Component, OnChanges, Input } from "@angular/core";

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {

  @Input()

  rating: number = 0;

  starWitdh: number;

  ngOnChanges(): void {
    this.starWitdh = this.rating * 74 / 5;

  }

}
