import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TaskContainerComponent } from './task-container/task-container.component';
import { TaskCreatorComponent } from './header/task-creator/task-creator.component';
import { TaskComponent } from './task-container/task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TaskContainerComponent,
    TaskCreatorComponent,
    TaskComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
