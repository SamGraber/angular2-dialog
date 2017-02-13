import { Component } from '@angular/core';

import { DialogRoot } from './dialogRoot.service';

@Component({
	selector: 'adDialogRoot',
	template: `
		<h4>Dialog Root</h4>
		{{dialogRootService.called}}
	`,
})
export class DialogRootComponent {
	constructor(public dialogRootService: DialogRoot) {}
}