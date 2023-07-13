import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-employee-view',
	standalone: true,
	imports: [CommonModule],
	template: `
		<p>employee-view works!</p>
		<p>
			Employee type from route query params: <b>{{ type }}</b>
		</p>
	`,
})
export class EmployeeViewComponent {
	@Input() type?: string;
}
