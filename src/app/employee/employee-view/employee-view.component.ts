import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeAddressComponent } from './employee-address/employee-address.component';

@Component({
	selector: 'app-employee-view',
	standalone: true,
	imports: [CommonModule, EmployeeAddressComponent],
	template: ` <h2>Employee View:</h2>
		<h3>Parent Component:</h3>
		<p>
			Employee type from route query params: <b>{{ type }}</b>
		</p>
		<hr />
		<app-employee-address />`,
})
export class EmployeeViewComponent {
	@Input() type?: string;
}
