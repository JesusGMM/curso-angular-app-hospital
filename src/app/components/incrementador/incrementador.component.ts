import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'app-incrementador',
	standalone: true,
	imports: [
		CommonModule,
		FormsModule
	],
	templateUrl: './incrementador.component.html'
})
export class IncrementadorComponent implements OnInit {

	@ViewChild('txtProgress') inputEle!: ElementRef<HTMLInputElement>;
	@Input() leyenda = '';
	@Input() progreso = 50;
	@Output() cambiarProgreso: EventEmitter<number> = new EventEmitter();


	constructor() { }

	ngOnInit(): void {
	}

	onChange(event: number) {

		if (event >= 100)
			this.progreso = 100;
		else if (event <= 0)
			this.progreso = 0;
		else
			this.progreso = event;

		this.inputEle.nativeElement.value = this.progreso + '';
		this.cambiarProgreso.emit(this.progreso);
	}

	cambiarValor(valor: number) {
		if ((this.progreso >= 100 && valor > 0) || (this.progreso <= 0 && valor < 0))
			return;
		this.progreso += valor;
		this.cambiarProgreso.emit(this.progreso);
	}

}
