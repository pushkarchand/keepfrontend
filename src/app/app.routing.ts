import { Routes, RouterModule } from '@angular/router';

import { StoreComponent } from './store/store.component';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_helpers';
import { StoreDetailsComponent } from './store-details/store-details.component';


const routes: Routes = [
    { path: '', component: StoreComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'store/:id', component: StoreDetailsComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);