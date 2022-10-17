import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PrivateRoutingModule } from "./private-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LayoutComponent } from './layout/layout.component';
import { UserService } from 'src/app/services/user.service';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ProfileComponent } from './layout/profile/profile.component';
import { AddShipMethodComponent } from './layout/shipingmethod/add-ship-method/add-ship-method.component';
import { UpdateShipMethodComponent } from './layout/shipingmethod/update-ship-method/update-ship-method.component';
import { ListShipMethodComponent } from './layout/shipingmethod/list-ship-method/list-ship-method.component';
import { AddCategoryComponent } from './layout/category/add-category/add-category.component';
import { UpdateCategoryComponent } from './layout/category/update-category/update-category.component';
import { ListCategoryComponent } from './layout/category/list-category/list-category.component';
import { ListCouponComponent } from './layout/coupon/list-coupon/list-coupon.component';
import { AddCouponComponent } from './layout/coupon/add-coupon/add-coupon.component';
import { UpdateCouponComponent } from './layout/coupon/update-coupon/update-coupon.component';
import { UpdateOrderComponent } from './layout/order/update-order/update-order.component';
import { AddOrderComponent } from './layout/order/add-order/add-order.component';
import { ListOrderComponent } from './layout/order/list-order/list-order.component';
import { ListProductComponent } from './layout/product/list-product/list-product.component';
import { AddProductComponent } from './layout/product/add-product/add-product.component';
import { UpdateProductComponent } from './layout/product/update-product/update-product.component';
@NgModule({
  imports: [
    CommonModule,
    PrivateRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  declarations: [
    LayoutComponent,
    DashboardComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    ProfileComponent,
    AddShipMethodComponent,
    UpdateShipMethodComponent,
    ListShipMethodComponent,
    AddCategoryComponent,
    UpdateCategoryComponent,
    ListCategoryComponent,
    ListCouponComponent,
    AddCouponComponent,
    UpdateCouponComponent,
    UpdateOrderComponent,
    AddOrderComponent,
    ListOrderComponent,
    ListProductComponent,
    AddProductComponent,
    UpdateProductComponent,
    
  ],
  providers: [
    UserService,
    // { provide: SimpleTimer, useValue: (<any>window).simpleTimer }
  ]
})
export class PrivateModule {}
