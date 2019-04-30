import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Submenu1Component as submenu11 } from './menu1/submenu1/submenu1.component';
import { Submenu2Component as submenu12 } from './menu1/submenu2/submenu2.component';
import { Submenu3Component as submenu13 } from './menu1/submenu3/submenu3.component';

import { Submenu1Component as submenu21 } from './menu2/submenu1/submenu1.component';
import { Submenu2Component as submenu22 } from './menu2/submenu2/submenu2.component';
import { Submenu3Component as submenu23 } from './menu2/submenu3/submenu3.component';

import { Submenu1Component as submenu31 } from './menu3/submenu1/submenu1.component';
import { Submenu2Component as submenu32 } from './menu3/submenu2/submenu2.component';
import { Submenu3Component as submenu33 } from './menu3/submenu3/submenu3.component';

import { Menu4Component } from './menu4/menu4.component';
import { Menu5Component } from './menu5/menu5.component';


const routes: Routes = [
  { path: '', redirectTo: 'menu1/subMenu1', pathMatch: 'full' },
  { path: 'menu1/subMenu1', component: submenu11 },
  { path: 'menu1/subMenu2', component: submenu12 },
  { path: 'menu1/subMenu3', component: submenu13 },

  { path: 'menu2/subMenu1', component: submenu21 },
  { path: 'menu2/subMenu2', component: submenu22 },
  { path: 'menu2/subMenu3', component: submenu23 },

  { path: 'menu3/subMenu1', component: submenu31 },
  { path: 'menu3/subMenu2', component: submenu32 },
  { path: 'menu3/subMenu3', component: submenu33 },

  { path: 'menu4', component: Menu4Component },
  { path: 'menu5', component: Menu5Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentRoutingModule { }
