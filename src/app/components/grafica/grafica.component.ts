import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { ChartType, ChartData, ChartConfiguration } from 'chart.js';

@Component({
	selector: 'app-grafica',
	standalone: true,
	imports: [
		CommonModule,
		NgChartsModule
	],
	templateUrl: './grafica.component.html'
})
export class GraficaComponent implements OnInit {

	@Input() pieChartType: ChartType = 'pie';
	@Input() labels: string[] = [];
	@Input() data: number[] = [];
	@Input() title: string = '';

	pieChartData: ChartData = {
		labels: [],
		datasets: [{
			data: []
		}]
	};

	pieChartOptions: ChartConfiguration['options'];

	constructor() { }

	ngOnInit(): void {
		this.pieChartData = {
			labels: this.labels,
			datasets: [{
				data: this.data
			}]
		}

		this.pieChartOptions = {
			responsive: true,
			plugins: {
				legend: {
					display: true,
					position: 'top',
				},
				title: {
					display: true,
					text: this.title,
					color: '#666',
					font: {
						size: 14
					},
					padding: 10,
				}
			},
		}
	}

}
