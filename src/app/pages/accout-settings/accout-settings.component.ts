
import { Component, OnInit } from '@angular/core';
import { SettingService } from 'src/app/services/settings/setting.service';

@Component({
	standalone: true,
	selector: 'app-accout-settings',
	templateUrl: './accout-settings.component.html',
})
export class AccoutSettingsComponent implements OnInit {

	constructor(private servicioAjustes: SettingService) { }

	ngOnInit(): void {
		this.aplicarCheck()
	}

	cambiarColor(color: string, link: Element) {

		const selectores: any = document.getElementsByClassName('selector');
		for (const ele of selectores) {
			ele.classList.remove('working');
		}
		link.classList.add('working');

		this.servicioAjustes.AplicarTema(color);
	}

	aplicarCheck() {
		const selectores: any = document.getElementsByClassName('selector');
		for (const ele of selectores) {
			if (ele.getAttribute('data-theme') === this.servicioAjustes.ajustes.tema) {
				ele.classList.add('working');
				break;
			}
		}
	}

}
