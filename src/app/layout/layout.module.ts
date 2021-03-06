import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TitlebarComponent } from './titlebar/titlebar.component';

@NgModule({
  imports: [
    CommonModule, RouterModule, SharedModule
  ],
  declarations: [LayoutComponent, SidebarComponent, TitlebarComponent]
})
export class LayoutModule { }
