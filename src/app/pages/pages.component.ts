import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { BreadCrumbsComponent } from '../shared/bread-crumbs/bread-crumbs.component';
import { RouterOutlet } from '@angular/router';

@Component({
	standalone: true,
	selector: 'app-pages',
	templateUrl: './pages.component.html',
	styles: [
	],
	imports: [
		RouterOutlet,
		HeaderComponent,
		SidebarComponent,
		BreadCrumbsComponent
	]
})
export class PagesComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

}
