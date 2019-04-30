import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentRoutingModule } from './component-routing.module';

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

@NgModule({
  declarations: [
    submenu11,
    submenu12,
    submenu13,
    submenu21,
    submenu22,
    submenu23,
    submenu31,
    submenu32,
    submenu33,
    Menu4Component,
    Menu5Component
  ],
  imports: [
    CommonModule,
    ComponentRoutingModule
  ]
})
export class ComponentModule { }
