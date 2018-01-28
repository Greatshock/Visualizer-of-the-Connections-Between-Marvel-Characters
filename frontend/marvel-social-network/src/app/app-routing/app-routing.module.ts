import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// import { AuthGuard } from './shared/auth/auth.guard';

const routes: Routes = [
  {
    path: 'members',
    loadChildren: '../members/members.module.ts#MembersModule',
    // canActivate: [AuthGuard]
  },
  {
    path: '', loadChildren: './login/login.module#LoginModule'
  },
  { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule', data: { key: 'not-found' } },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
