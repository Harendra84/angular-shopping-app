import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { NetflixregisterComponent } from './components/netflixregister/netflixregister.component';
import { NetflixmainComponent } from './components/netflixmain/netflixmain.component';
import { DatabindingComponent } from './components/databinding/databinding.component';

import { FakestoreComponent } from './components/fakestore/fakestore.component';
import { IfdemoComponent } from './components/ifdemo/ifdemo.component';
import { ContentprojectionComponent } from './components/contentprojection/contentprojection.component';
import { SwitchdemoComponent } from './components/switchdemo/switchdemo.component';
import { FordemoComponent } from './components/fordemo/fordemo.component';
import { ShoppingcartComponent } from './components/shoppingcart/shoppingcart.component';
import { TrackingdemoComponent } from './components/trackingdemo/trackingdemo.component';
import { ClassbindingdemoComponent } from './components/classbindingdemo/classbindingdemo.component';
import { StyledemoComponent } from './components/styledemo/styledemo.component';
import { EventdemoComponent } from './components/eventdemo/eventdemo.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { ProductscatalogComponent } from './components/productscatalog/productscatalog.component';
import { FilterComponent } from './components/filter/filter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialdemoComponent } from './components/materialdemo/materialdemo.component';
import { SentenceCasePipe } from './pipes/sentencecase.pipe';
import { SortingPipe } from './pipes/sorting.pipe';
import { CaptchaService } from './services/captcha.service';
import { ApidemoComponent } from './components/apidemo/apidemo.component';
import { DataService } from './services/data.service';
import { TemplateformComponent } from './components/templateform/templateform.component';
import { ReactivedemoComponent } from './components/reactivedemo/reactivedemo.component';
import { AppRoutingModule } from './app-routing.module';
import { ShoppinghomeComponent } from './components/shoppinghome/shoppinghome.component';
import { ElectronicsComponent } from './components/electronics/electronics.component';
import { FootwearComponent } from './components/footwear/footwear.component';
import { FashionComponent } from './components/fashion/fashion.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { DetailsComponent } from './components/details/details.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductslistComponent } from './components/productslist/productslist.component';
import { RegisteruserComponent } from './components/registeruser/registeruser.component';
import { UserloginComponent } from './components/userlogin/userlogin.component';
import { UsererrorComponent } from './components/usererror/usererror.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NetflixregisterComponent,
    NetflixmainComponent,
    DatabindingComponent,
    FakestoreComponent,
    IfdemoComponent,
    ContentprojectionComponent,
    SwitchdemoComponent,
    FordemoComponent,
    ShoppingcartComponent,
    TrackingdemoComponent,
    ClassbindingdemoComponent,
    StyledemoComponent,
    EventdemoComponent,
    ParentComponent,
    ChildComponent,
    ProductscatalogComponent,
    FilterComponent,
    MaterialdemoComponent,
    SentenceCasePipe,
    SortingPipe,
    ApidemoComponent,
    TemplateformComponent,
    ReactivedemoComponent,
    ShoppinghomeComponent,
    ElectronicsComponent,
    FootwearComponent,
    FashionComponent,
    NotfoundComponent,
    DetailsComponent,
    CategoriesComponent,
    ProductslistComponent,
    RegisteruserComponent,
    UserloginComponent,
    UsererrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ScrollingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [CaptchaService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
