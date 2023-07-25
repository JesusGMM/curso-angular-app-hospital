import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class SidebarService {

	menu: any = [{
		titulo: 'Home',
		icon: 'madi madi-gauge',
		submenu: [
			{
				titulo: 'Inicio',
				url: '/dashboard',
			},
			{
				titulo: 'Progreso',
				url: '/progress',
			},
			{
				titulo: 'Gráficas',
				url: '/graficas-1',
			}
		]
	}]
	constructor() { }
}
