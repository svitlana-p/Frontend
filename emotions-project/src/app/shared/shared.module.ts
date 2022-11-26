import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { CircleItemComponent } from './circle-item/circle-item.component'
import { SpinnerComponent } from './spinner/spinner.component';

const components = [HeaderComponent, FooterComponent, ButtonComponent, CardComponent, CircleItemComponent, SpinnerComponent]

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    RouterModule,
  ], exports: [...components]
})
export class SharedModule { }
