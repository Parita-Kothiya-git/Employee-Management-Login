import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_helpers';

const routes: Routes = [
    { path: '', component: LoginComponent },
    {
        path: 'main',
        canActivate: [AuthGuard],
        loadChildren: () => import('./main/main.module').then(m => m.MainModule)
    },
    { path: 'register', component: RegisterComponent },
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);