import { Component, Input } from '@angular/core';

const template = `
    <ul class="nav nav-tabs bg-primary">        
        <li class="nav-item" *ngFor="let menu of (storage.menus || [])">
            <a [class]="'nav-link' + (menu.active ? 'active' : '')" 
               [title]="menu.description || ''"
               [href]="menu.link">{{ menu.name || '' }}</a>
        </li>
    </ul>
`;

@Component({
    selector: 'navbar',
    template
})
export class NavbarComponent {
    @Input() storage:any;
}