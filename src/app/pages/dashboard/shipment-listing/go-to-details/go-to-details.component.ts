import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ViewCell } from 'ng2-smart-table';

import { SmartTableHelperService} from '../services/smart-table-helper.service';

@Component({
  selector: 'go-to-details',
  templateUrl: './go-to-details.component.html'
})
export class GoToDetailsComponent implements ViewCell {

  @Input() value: any = null;
  @Input() rowData: any = null;

}