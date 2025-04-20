import { Component, Input } from '@angular/core';
import { BadgeModule } from 'primeng/badge';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'my-header',
  imports: [MenubarModule,BadgeModule],
  templateUrl: './my-header.component.html',
  styleUrl: './my-header.component.scss'
})
export class MyHeaderComponent {

  @Input()
  count:string = '0';
}
