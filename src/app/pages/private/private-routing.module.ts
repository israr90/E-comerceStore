import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LayoutComponent } from "./layout/layout.component";
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { ProfileComponent } from './layout/profile/profile.component';
import { ListCategoryComponent } from "./layout/category/list-category/list-category.component";
import { AddCategoryComponent } from "./layout/category/add-category/add-category.component";
import { UpdateCategoryComponent } from "./layout/category/update-category/update-category.component";
import { ListProductComponent } from "./layout/product/list-product/list-product.component";
import { AddProductComponent } from "./layout/product/add-product/add-product.component";
import { UpdateProductComponent } from "./layout/product/update-product/update-product.component";
import { ListOrderComponent } from "./layout/order/list-order/list-order.component";
import { AddOrderComponent } from "./layout/order/add-order/add-order.component";
import { UpdateOrderComponent } from "./layout/order/update-order/update-order.component";
import { ListCouponComponent } from "./layout/coupon/list-coupon/list-coupon.component";
import { AddCouponComponent } from "./layout/coupon/add-coupon/add-coupon.component";
import { UpdateCouponComponent } from "./layout/coupon/update-coupon/update-coupon.component";
import { ListShipMethodComponent } from "./layout/shipingmethod/list-ship-method/list-ship-method.component";
import { AddShipMethodComponent } from "./layout/shipingmethod/add-ship-method/add-ship-method.component";
import { UpdateShipMethodComponent } from "./layout/shipingmethod/update-ship-method/update-ship-method.component";
const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      { path: "", component: DashboardComponent, pathMatch: "full" },
      { path: "dashboard", component: DashboardComponent },
      {
        path: "profile", component: ProfileComponent,
        // children: [
        //   { path: "", component: ProfileDetailsComponent, pathMatch: "full" },
        //   { path: "detail", component: ProfileDetailsComponent },
        // ]
      },
      //category
      {path:"categories",component:ListCategoryComponent},
      {path:"addcategory",component:AddCategoryComponent},
      {path:"updatecategory/:id",component:UpdateCategoryComponent},
     //products
      {path:"products",component:ListProductComponent},
      {path:"addproduct",component:AddProductComponent},
      {path:"updateproduct/:id",component:UpdateProductComponent},
    //orders
      {path:"orders",component:ListOrderComponent},
      {path:"addorder",component:AddOrderComponent},
      {path:"updateorder/:id",component:UpdateOrderComponent},
      //coupon
      {path:"coupons",component:ListCouponComponent},
      {path:"addcoupon",component:AddCouponComponent},
      { path: "updatecoupon/:id", component: UpdateCouponComponent },
      //ship-method
      {path:"shipmethod",component:ListShipMethodComponent},
      {path:"addshipmethod",component:AddShipMethodComponent},
      {path:"updateshipmethod/:id",component:UpdateShipMethodComponent}
      
     ]
  },

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
