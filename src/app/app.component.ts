import { Component } from '@angular/core';
import { SettingService } from './services/settings/setting.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'admin-pro';

	constructor(private servicioAjustes: SettingService) { }
}
