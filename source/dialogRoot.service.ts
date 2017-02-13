export class DialogRoot {
	called: boolean;
	
	call(): void {
		console.log('Called');
		this.called = true;
	}
}
