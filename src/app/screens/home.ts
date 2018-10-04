import { Component, Input } from '@angular/core';
import doIt from '../actions/actions';

const template = `
    <h1>Bem vindo</h1>

    <div class="row">
        <div class="col-3">
            Action test:
        </div>
        <div class="col-6">
            <button (click)="add()">+</button>
            {{ storage.home.count }}
            <button (click)="remove()">-</button>
        </div>
    </div>
`;

@Component({
    selector: 'home-route',
    template
})
export class HomeRouteComponent {
    @Input() storage:any;

    add() {
        doIt('count', this.storage, {count: 1})
    }

    remove() {
        doIt('count', this.storage, {count: -1})
    }
}