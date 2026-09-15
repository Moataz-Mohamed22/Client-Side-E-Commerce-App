import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PaginationModule
  ],
  exports: [
    CommonModule,
    PaginationModule   // ⚠️ لازم تتصدّر هنا عشان أي موديول تانية تقدر تستخدمها
  ]
})
export class SharedModule { }
