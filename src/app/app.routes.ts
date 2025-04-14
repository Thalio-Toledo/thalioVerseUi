import { Routes } from '@angular/router';
import { ProfileComponent } from './views/profile/profile.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'profile',
        pathMatch: 'full'
    },
    {
        path:'profile',
        component:ProfileComponent
    },
];
