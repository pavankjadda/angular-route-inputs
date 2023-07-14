import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-employee-address',
	standalone: true,
	imports: [CommonModule],
	template: `
		<h3>Child Address Component:</h3>
		<p>
			Employee type from route query params: <b>{{ type }}</b>
		</p>
	`,
	styles: [],
})
export class EmployeeAddressComponent {
	@Input() type?: string;
}
