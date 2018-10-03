import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeaderComponent} from './common/header/header.component';
import {FooterComponent} from './common/footer/footer.component';
import {UserComponent} from './component/user/user.component';
import {CandidateComponent} from './component/user/detail/candidate.component';
import {CandidateItemsComponent} from './component/user/list/items/candidate-items.component';
import {CandidateItemComponent} from './component/user/list/item/candidate-item.component.ts';
import {FilterComponent} from './common/filter/filter.component';
import {ButtonStyleIconComponent} from './common/button/icon/style/button.style.icon.component';
import {ButtonIconComponent} from './common/button/icon/button.icon.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UserComponent,
    CandidateComponent,
    CandidateItemsComponent,
    CandidateItemComponent,
    FilterComponent,
    ButtonStyleIconComponent,
    ButtonIconComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
