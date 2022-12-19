import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges
} from '@angular/core';

import {TIPO_STATUS} from "./constants/tipo-status";
@Component({
  selector: 'crim-lib-crim-lib-fed-menu',
  templateUrl: './crim-lib-fed-menu.component.html',
  styleUrls: ['./crim-lib-fed-menu.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CrimLibFedMenuComponent implements OnChanges {

  @Input() menuItens: [];
  @Input() menuClasses: {menuContainerClass: string, menuItemContainerClass: string, menuItemClass: string};

  constructor(private changeDetector: ChangeDetectorRef) {
    this.menuClasses = {
      menuContainerClass: 'crim-lib-fed-menu-container',
      menuItemContainerClass: 'crim-lib-fed-menu-item-container',
      menuItemClass: 'crim-lib-fed-menu-item'
    }
    this.menuItens = [];
  }

  ngOnChanges() {
    if (this.menuItens.length) {
      this.changeDetector.detectChanges();
    }
  }

  routeItem(item: any) {
    window.location.href = item.link;
  }

  getTipoStatus(status: string): string {
    return (TIPO_STATUS as any)[status] as string;
  }

}
