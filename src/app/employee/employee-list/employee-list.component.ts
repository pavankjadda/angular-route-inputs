import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { EmployeeViewComponent } from '../employee-view/employee-view.component';

@Component({
	selector: 'app-employee-list',
	standalone: true,
	imports: [CommonModule],
	template: ` <p>employee-list works!</p>
		<p>
			Employee type from route query params: <b>{{ type }}</b>
		</p>`,
	styles: [],
})
export class EmployeeListComponent {
	@Input() type?: string;
}

//Employee Routes
export const employeeRoutes: Routes = [
	{
		path: '',
		component: EmployeeListComponent,
	},
	{
		path: ':id',
		children: [
			{
				path: 'view',
				component: EmployeeViewComponent,
			},
			{
				path: '',
				component: EmployeeViewComponent,
			},
		],
	},
];
