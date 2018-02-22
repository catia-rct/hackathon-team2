import {Component, Input, OnInit} from '@angular/core';
import {ViewCell} from 'ng2-smart-table';
import {StatusStyleMapping} from '../../../../shared';

@Component({
  selector: 'status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.scss'],
  host: { style: 'position: relative'}
})
export class StatusBarComponent implements ViewCell, OnInit {

  public STATUS_STYLE_MAPING = StatusStyleMapping;

  @Input() value: any = null;
  @Input() rowData: any = null;
  public data: any = null;
  public segmentWidth: string;

  ngOnInit() {
    this.data = this.prepareProgress();
  }

  /**
   * Does calculation with the input and returns values for the layout
   * @returns {{progressPosition: string; problem: boolean; problemPosition: string}}
   */
  prepareProgress() {

    this.segmentWidth = (100 / this.value.length) + '%';

    return {

      problem: this.value.indexOf('not-ok') > -1,
      problemPosition: Math.floor(this.value.indexOf('not-ok') * (100 / this.value.length)) + 'px'
    }
  }
}