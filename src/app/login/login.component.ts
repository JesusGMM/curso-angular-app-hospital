import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
	standalone: true,
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
	imports: [
		RouterModule
	]
})
export class LoginComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

}
