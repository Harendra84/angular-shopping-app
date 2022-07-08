import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ElectronicsComponent } from "./components/electronics/electronics.component";
import { FashionComponent } from "./components/fashion/fashion.component";
import { FootwearComponent } from "./components/footwear/footwear.component";
import { NotfoundComponent } from "./components/notfound/notfound.component";
import { ShoppinghomeComponent } from "./components/shoppinghome/shoppinghome.component";
import { DetailsComponent } from "./components/details/details.component";
import { CategoriesComponent } from "./components/categories/categories.component";
import { ProductslistComponent } from "./components/productslist/productslist.component";
import { RegisteruserComponent } from "./components/registeruser/registeruser.component";
import { UsererrorComponent } from "./components/usererror/usererror.component";
import { UserloginComponent } from "./components/userlogin/userlogin.component";
import { CategoriesGuard } from "./guards/categories.guard";

const routes: Routes = [
    { path: 'home', component: ShoppinghomeComponent },
    { path: 'electronics', component: ElectronicsComponent },
    { path: 'footwear', component: FootwearComponent },
    { path: 'fashion', component: FashionComponent },
    { path: 'login', component: UserloginComponent },
    // { path: 'details/:id', component: DetailsComponent },
    { path: 'categories', component: CategoriesComponent, canActivate: [CategoriesGuard] },
    {
        path: 'products/:category', component: ProductslistComponent,
        children: [
            { path: 'details/:id', component: DetailsComponent }
        ]
    },
    {
        path: 'register', component: RegisteruserComponent
    },
    {
        path: 'usererror', component: UsererrorComponent
    },
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    { path: '**', component: NotfoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }