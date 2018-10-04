import { Component, ChangeDetectorRef } from '@angular/core';
import observer from './actions/observer';
import storage from './initial-storage';
import doIt from './actions/actions';

const template = `
  <navbar [storage]="storage"></navbar>
  <div class="container pt-2">
    <home-route *ngIf="storage.navigation.page === 'home'"
                [storage]="storage"></home-route>
  </div>
`;

@Component({
  selector: 'app-root',
  template
})
export class AppComponent {  
  storage = storage;

  constructor(private changeDetector:ChangeDetectorRef) {
    observer.subscribe(storage => {
      this.storage = storage;
      this.changeDetector.detectChanges();
    });

    (window as any).addEventListener('hashchange', () => {
      const route = (window as any).location.hash.split('#').join('');
      doIt('route-change', storage, {route});
    });
  }
}
