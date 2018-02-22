import {Component} from '@angular/core';

@Component({
  selector: 'statistics',
  templateUrl: 'statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent {

  public test = {
    diagrams: [
      {
        startAngle: 0,
        endAngle: 1.5 * Math.PI,
        color: '#6a7bba',
        opacity: 1
      },
      {
        startAngle: 0,
        endAngle: 0.5 * Math.PI,
        color: '#8fa9db',
        opacity: 1
      },
      {
        startAngle: 0,
        endAngle: 0.3 * Math.PI,
        color: '#a7c7f0',
        opacity: 1
      }
    ],
    text: [
      {
        text: '100k',
        textSize: 35,
        color: '#3b4190',
        fontFamily: 'sans-serif'
      },
      {
        text: 'Total units',
        textSize: 15,
        color: '#3b4190',
        fontFamily: 'sans-serif'
      }
    ]
  };
}