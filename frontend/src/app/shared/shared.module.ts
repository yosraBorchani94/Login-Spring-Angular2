import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FileUploadModule } from 'ng2-file-upload';

import { AlertComponent } from './component/alert/alert.component';
import { PanelListGroupComponent } from './component/panel-list-group/panel-list-group.component';
import { UnauthorizedComponent } from './component/unauthorized/unauthorized.component';
import { KeyToTitlePipe } from './pipe/key-to-title/key-to-title.pipe';
import { KeyExtractPipe } from './pipe/key-extract/key-extract.pipe';
import { CelsiusToFahrenheitPipe } from './pipe/celsius-to-fahrenheit/celsius-to-fahrenheit.pipe';
import { SimpleLoaderComponent } from './component/simple-loader/simple-loader.component';
import { PageLoaderComponent } from './component/page-loader/page-loader.component';
import { ScrollableDirective } from './directive/scrollable/scrollable.directive';
import { ModalConfirmComponent } from './component/modal-confirm/modal-confirm.component';
import { FileUploaderComponent } from './component/file-uploader/file-uploader.component';

@NgModule({
  imports: [
    CommonModule,
    FileUploadModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    AlertComponent,
    CelsiusToFahrenheitPipe,
    CommonModule,
    FileUploaderComponent,
    FormsModule,
    KeyToTitlePipe,
    KeyExtractPipe,
    PageLoaderComponent,
    PanelListGroupComponent,
  	ReactiveFormsModule,
  	RouterModule,
    SimpleLoaderComponent,
    UnauthorizedComponent,
    ScrollableDirective,
    ModalConfirmComponent
  ],
  declarations: [
    AlertComponent,
    CelsiusToFahrenheitPipe,
    FileUploaderComponent,
    KeyToTitlePipe,
    KeyExtractPipe,
    PageLoaderComponent,
    PanelListGroupComponent,
    SimpleLoaderComponent,
    UnauthorizedComponent,
    ScrollableDirective,
    ModalConfirmComponent
  ]
})
export class SharedModule { }
