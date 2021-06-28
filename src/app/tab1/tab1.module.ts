import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { NgCalendarModule  } from 'ionic2-calendar';
import { AddTodoPageModule } from '../add-todo/add-todo.module';
import { AccordionPageModule } from '../accordion/accordion.module';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    ReactiveFormsModule,
    NgCalendarModule,
    AddTodoPageModule,
    AccordionPageModule
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
