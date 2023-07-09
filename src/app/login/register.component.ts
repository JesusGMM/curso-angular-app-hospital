import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
	standalone: true,
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./login.component.css'],
	imports: [
		RouterModule
	]
})
export class RegisterComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

}
