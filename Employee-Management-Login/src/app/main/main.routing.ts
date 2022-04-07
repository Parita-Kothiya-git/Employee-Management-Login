import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { AuthGuard } from '../_helpers';
import { EmployeeComponent } from './employee';
import { MainComponent } from './main.component';

const routes: Routes = [
    {
        path: 'main', component: MainComponent,
        canActivate: [AuthGuard],
        children: [
            { path: 'home', component: HomeComponent },
            { path: 'employee', component: EmployeeComponent },
            { path: '**', redirectTo: 'home' }
        ]
    }
];

export const MainRoutingModule = RouterModule.forChild(routes);