import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NgChartsModule } from 'ng2-charts';

import { PagesRoutingModule } from './pages-routing';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
import { BreadCrumbsComponent } from '../shared/bread-crumbs/bread-crumbs.component';
import { GraficaComponent } from '../components/grafica/grafica.component';
import { GraphOneComponent } from './graph-one/graph-one.component';
import { HeaderComponent } from '../shared/header/header.component';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';

@NgModule({
	declarations: [
		PagesComponent,
	],
	imports: [
		AccoutSettingsComponent,
		PagesRoutingModule,
		BreadCrumbsComponent,
		CommonModule,
		FormsModule,
		GraficaComponent,
		GraphOneComponent,
		HeaderComponent,
		IncrementadorComponent,
		NgChartsModule,
		ProgressComponent,
		RouterModule,
		SidebarComponent,
	]
})
export class PagesModule { }
