import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { GraficaComponent } from 'src/app/components/grafica/grafica.component';

@Component({
	standalone: true,
	selector: 'app-graph-one',
	templateUrl: './graph-one.component.html',
	imports: [
		CommonModule,
		GraficaComponent
	]
})
export class GraphOneComponent implements OnInit {

	graficos: any = [
		{
			'labels': ['Con Frijoles', 'Con Natilla', 'Con tocino'],
			'data': [24, 30, 46],
			'type': 'bar',
			'leyenda': 'El pan se come con'
		},
		{
			'labels': ['Hombres', 'Mujeres'],
			'data': [4500, 6000],
			'type': 'pie',
			'leyenda': 'Entrevistados'
		},
		{
			'labels': ['Si', 'No'],
			'data': [95, 5],
			'type': 'doughnut',
			'leyenda': '¿Le dan gases los frijoles?'
		},
		{
			'labels': ['No', 'Si'],
			'data': [85, 15],
			'type': 'doughnut',
			'leyenda': '¿Le importa que le den gases?'
		},
	];

	constructor() { }

	ngOnInit(): void {
	}

}
