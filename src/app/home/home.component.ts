import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [CommonModule],
	template: `
		<h1>Home</h1>
		<ul>
			<li><a href="/employee/1">Employee 1</a></li>
			<li><a href="/employee/2">Employee 2</a></li>
		</ul>
	`,
	styles: [],
})
export class HomeComponent {
	@Input('sync_with_cris') syncWithCris?: boolean;
}
