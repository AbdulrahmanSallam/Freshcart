"use strict";(self.webpackChunkfreshcart=self.webpackChunkfreshcart||[]).push([[969],{1969:(f,m,i)=>{i.r(m),i.d(m,{CheckoutComponent:()=>U});var p=i(6814),e=i(95),t=i(4769),d=i(6286),s=i(1120);function C(r,a){1&r&&(t.TgZ(0,"p",16),t._UZ(1,"i",17),t._uU(2," Details is required "),t.qZA())}function n(r,a){1&r&&(t.TgZ(0,"p",16),t._UZ(1,"i",17),t._uU(2," Phone is required "),t.qZA())}function l(r,a){1&r&&(t.TgZ(0,"p",16),t._UZ(1,"i",17),t._uU(2," Invalid phone number "),t.qZA())}function v(r,a){if(1&r&&(t.TgZ(0,"div"),t.YNc(1,n,3,0,"p",7),t.YNc(2,l,3,0,"p",7),t.qZA()),2&r){const o=t.oxw();let u,c;t.xp6(1),t.Q6J("ngIf",null==(u=o.checkoutForm.get("phone"))?null:u.getError("required")),t.xp6(1),t.Q6J("ngIf",null==(c=o.checkoutForm.get("phone"))?null:c.getError("pattern"))}}function Z(r,a){1&r&&(t.TgZ(0,"p",16),t._UZ(1,"i",17),t._uU(2," City is required "),t.qZA())}function I(r,a){if(1&r&&(t.TgZ(0,"p",18),t._uU(1),t.qZA()),2&r){const o=t.oxw();t.xp6(1),t.Oqu(o.msgError)}}let U=(()=>{class r{constructor(o,u){this._CartService=o,this._ActivatedRoute=u,this.cartId="",this.msgError="",this.checkoutForm=new e.cw({details:new e.NI("",[e.kI.required]),phone:new e.NI("",[e.kI.required,e.kI.pattern(/^01[0125][0-9]{8}$/)]),city:new e.NI("",[e.kI.required])})}ngOnInit(){this._ActivatedRoute.paramMap.subscribe({next:o=>{this.cartId=o.get("id")}})}checkoutSubmit(){this.checkoutForm.valid?this._CartService.checkoutSession(this.cartId,this.checkoutForm.value).subscribe({next:o=>{(o.status="success")&&window.open(o.session.url,"_self")},error:o=>{console.log(o)}}):this.checkoutForm.markAllAsTouched()}static#t=this.\u0275fac=function(u){return new(u||r)(t.Y36(d.N),t.Y36(s.gz))};static#e=this.\u0275cmp=t.Xpm({type:r,selectors:[["app-checkout"]],standalone:!0,features:[t.jDz],decls:25,vars:5,consts:[[1,"middle-page","center"],[1,"w-100","bg-main-light","rounded","p-4"],[1,"head"],[3,"formGroup","ngSubmit"],[1,"mt-2"],["for","details"],["formControlName","details","id","details",1,"form-control"],["class","text-danger small",4,"ngIf"],["for","phone"],["formControlName","phone","type","tel","id","phone",1,"form-control"],[4,"ngIf"],["for","city"],["formControlName","city","type","text","id","city",1,"form-control"],[1,"mt-3"],[1,"main-btn","d-block","ms-auto"],["class","alert alert-danger text-center mt-2",4,"ngIf"],[1,"text-danger","small"],[1,"fas","fa-warning"],[1,"alert","alert-danger","text-center","mt-2"]],template:function(u,c){if(1&u&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div")(3,"h1",2),t._uU(4,"user details"),t.qZA(),t.TgZ(5,"form",3),t.NdJ("ngSubmit",function(){return c.checkoutSubmit()}),t.TgZ(6,"div",4)(7,"label",5),t._uU(8,"Details :"),t.qZA(),t._UZ(9,"textarea",6),t.YNc(10,C,3,0,"p",7),t.qZA(),t.TgZ(11,"div",4)(12,"label",8),t._uU(13,"Phone :"),t.qZA(),t._UZ(14,"input",9),t.YNc(15,v,3,2,"div",10),t.qZA(),t.TgZ(16,"div",4)(17,"label",11),t._uU(18,"City :"),t.qZA(),t._UZ(19,"input",12),t.YNc(20,Z,3,0,"p",7),t.qZA(),t.TgZ(21,"div",13)(22,"button",14),t._uU(23,"Submit"),t.qZA()(),t.YNc(24,I,2,1,"p",15),t.qZA()()()()),2&u){let _,g,h;t.xp6(5),t.Q6J("formGroup",c.checkoutForm),t.xp6(5),t.Q6J("ngIf",(null==(_=c.checkoutForm.get("details"))?null:_.getError("required"))&&(null==(_=c.checkoutForm.get("details"))?null:_.touched)),t.xp6(5),t.Q6J("ngIf",null==(g=c.checkoutForm.get("phone"))?null:g.touched),t.xp6(5),t.Q6J("ngIf",(null==(h=c.checkoutForm.get("city"))?null:h.getError("required"))&&(null==(h=c.checkoutForm.get("city"))?null:h.touched)),t.xp6(4),t.Q6J("ngIf",c.msgError)}},dependencies:[p.ez,p.O5,e.UX,e._Y,e.Fj,e.JJ,e.JL,e.sg,e.u]})}return r})()},6286:(f,m,i)=>{i.d(m,{N:()=>d});var p=i(5619),e=i(4769),t=i(9862);let d=(()=>{class s{constructor(n){this._HttpClient=n,this.baseUrl="https://ecommerce.routemisr.com/api/v1/cart/",this.cartItemsCount=new p.X(0)}getCartProducts(){return this._HttpClient.get(this.baseUrl)}addProductToCart(n){return this._HttpClient.post(this.baseUrl,{productId:n})}removeProduct(n){return this._HttpClient.delete(this.baseUrl+`${n}`)}clearCart(){return this._HttpClient.delete(this.baseUrl)}updateProductQuantity(n,l){return this._HttpClient.put(this.baseUrl+`${n}`,{count:l})}checkoutSession(n,l){return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${n}?url=http://localhost:4200`,{shippingAddress:l})}getAllOrders(n){return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${n}`)}static#t=this.\u0275fac=function(l){return new(l||s)(e.LFG(t.eN))};static#e=this.\u0275prov=e.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})()}}]);