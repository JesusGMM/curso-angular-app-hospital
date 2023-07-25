import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

declare function init_plugins(): any;

@Component({
	standalone: true,
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
	imports: [
		RouterModule,
		FormsModule
	]
})
export class LoginComponent implements OnInit {

	constructor(private router: Router) { }

	ngOnInit(): void {
		init_plugins()
	}

	ingresar() {
		console.log('hola');
		this.router.navigate(['/dashboard']);
	}

}
