import {Component} from '@angular/core';
import {SpinnerService} from '../../services/spinner.service';
@Component({
  moduleId: module.id,
  selector: 'spinner-component',
  templateUrl: 'spinner.component.html'
})
export class SpinnerComponent {
  public active: boolean;

  public constructor(public spinnerService: SpinnerService) {
    spinnerService.status.subscribe((status: boolean) => {
      this.active = status;
    });
  }
}
