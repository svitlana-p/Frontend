import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-circle-item',
  templateUrl: './circle-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./circle-item.component.css']
})
export class CircleItemComponent {
  @Input() imgSrc = '';
  @Input() content = '';
}
