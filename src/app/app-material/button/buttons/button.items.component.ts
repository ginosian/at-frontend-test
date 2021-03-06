import {Component, Input} from '@angular/core';
import {DummyData} from '../../../common/DummyData';
import {Button} from '../button.model';

@Component({
  selector: 'app-buttons',
  templateUrl: 'button.items.component.html'
})
export class ButtonItemsComponent {
  @Input("buttons") buttons: Button[];
}
