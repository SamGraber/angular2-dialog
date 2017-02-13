import { Component } from '@angular/core';

import { DialogRoot } from './dialogRoot.service';

@Component({
	moduleId: module.id,
	selector: 'adDialog',
	templateUrl: 'dialog.component.html',
})
export class DialogComponent {
	constructor(public dialogRoot: DialogRoot) {}
}