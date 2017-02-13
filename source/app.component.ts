import { Component } from '@angular/core';

import { DialogComponent } from './dialog.component';
import { DialogRootComponent } from './dialogRoot.component';
import { DialogRoot } from './dialogRoot.service';

@Component({
	moduleId: module.id,
	selector: 'my-app',
	templateUrl: 'app.component.html',
	directives: [DialogComponent, DialogRootComponent],
	providers: [DialogRoot],
})
export class AppComponent {
}
