
import { Route } from '@angular/router';

export const childrenRoutes: Route[] = [
	{ path: 'dashboard', loadComponent: () => import('./dashboard/dashboard.component').then(mod => mod.DashboardComponent) },
	{ path: 'progress', loadComponent: () => import('./progress/progress.component').then(mod => mod.ProgressComponent) },
	{ path: 'graficas-1', loadComponent: () => import('./graph-one/graph-one.component').then(mod => mod.GraphOneComponent) },
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];