import {Injectable} from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SmartTableHelperService {

  private goToDetailsSource = new Subject<any>();
  goToDetailsClicked = this.goToDetailsSource.asObservable();

  /**
   * Emits to all the subscribers that a 'GoToDetails' event.
   * @param data
   */
  public emitGoToDetailsClicked(data: any) {
    this.goToDetailsSource.next(data);
  }
}
