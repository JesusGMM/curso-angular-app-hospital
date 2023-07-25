import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarService } from 'src/app/services/shared/sidebar.service';

@Component({
	standalone: true,
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styles: [
	],
	imports: [
		CommonModule,
		RouterModule
	]
})
export class SidebarComponent implements OnInit {

	constructor(public servicioSidebar: SidebarService) { }

	ngOnInit(): void {
	}

}
