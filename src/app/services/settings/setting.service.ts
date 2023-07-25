import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class SettingService {

	ajustes: Ajustes = {
		temaUrl: 'assets/css/colors/default.css',
		tema: 'default'
	}

	constructor(@Inject(DOCUMENT) private _document: Document) {
		this.cargarAjustes()
	}

	guardarAjustes() {
		localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
	}

	cargarAjustes() {
		const ajustes = localStorage.getItem('ajustes');
		if (ajustes)
			this.ajustes = JSON.parse(ajustes)
		this.AplicarTema(this.ajustes.tema)
	}

	AplicarTema(tema: string) {
		const element = this._document.getElementById('theme');
		const url = `assets/css/colors/${tema}.css`;
		if (element)
			element.setAttribute('href', url);

		this.ajustes = {
			tema: tema,
			temaUrl: url
		}

		this.guardarAjustes()
	}
}

interface Ajustes {
	temaUrl: string;
	tema: string;
}