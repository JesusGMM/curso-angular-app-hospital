import { Component, OnInit } from '@angular/core';
import { IncrementadorComponent } from 'src/app/components/incrementador/incrementador.component';

@Component({
	standalone: true,
	selector: 'app-progress',
	templateUrl: './progress.component.html',
	imports: [
		IncrementadorComponent
	]
})
export class ProgressComponent implements OnInit {

	progreso = 50;

	constructor() { }

	ngOnInit(): void {
	}

}
