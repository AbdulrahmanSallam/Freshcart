"use strict";(self.webpackChunkfreshcart=self.webpackChunkfreshcart||[]).push([[937],{937:(h,n,s)=>{s.r(n),s.d(n,{CategoriesComponent:()=>u});var r=s(6814),e=s(4769),g=s(5884);function _(o,c){if(1&o){const t=e.EpF();e.TgZ(0,"div",5)(1,"div")(2,"div",6),e.NdJ("click",function(){const p=e.CHM(t).$implicit,C=e.oxw(2);return e.KtG(C.getSubategories(p._id))}),e._UZ(3,"img",7),e.TgZ(4,"div",8)(5,"h2",9),e._uU(6),e.qZA()()()()()}if(2&o){const t=c.$implicit;e.xp6(3),e.Q6J("src",t.image,e.LSH)("alt",t.name),e.xp6(3),e.Oqu(t.name)}}function l(o,c){if(1&o&&(e.TgZ(0,"div",5)(1,"div",13)(2,"h4",14),e._uU(3),e.qZA()()()),2&o){const t=c.$implicit;e.xp6(3),e.Oqu(t.name)}}function d(o,c){if(1&o&&(e.TgZ(0,"div",10)(1,"h3",11),e._uU(2,"Subcategory"),e.qZA(),e.TgZ(3,"div",12),e.YNc(4,l,4,1,"div",3),e.qZA()()),2&o){const t=e.oxw(2);e.xp6(4),e.Q6J("ngForOf",t.subcategories)}}function m(o,c){if(1&o&&(e.TgZ(0,"section",1)(1,"div",2),e.YNc(2,_,7,3,"div",3),e.qZA(),e.YNc(3,d,5,1,"div",4),e.qZA()),2&o){const t=e.oxw();e.xp6(2),e.Q6J("ngForOf",t.categories),e.xp6(1),e.Q6J("ngIf",t.SubcategoryReady&&t.subcategories.length)}}let u=(()=>{class o{constructor(t){this._CategoriesService=t,this.categories=[],this.subcategories=[],this.SubcategoryReady=!1}ngOnInit(){this.getCategories()}getCategories(){this._CategoriesService.getCategories().subscribe({next:t=>{this.categories=t.data},error:t=>{console.log(t)}})}getSubategories(t){this._CategoriesService.getSubgategory(t).subscribe({next:i=>{this.subcategories=i.data,this.SubcategoryReady=!0},error:i=>{console.log(i)}})}static#e=this.\u0275fac=function(i){return new(i||o)(e.Y36(g.G))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-categories"]],standalone:!0,features:[e.jDz],decls:1,vars:1,consts:[["class","p-2 my-3",4,"ngIf"],[1,"p-2","my-3"],[1,"row","g-4","mx-5","mx-sm-0"],["class","col-sm-6 col-md-4 col-lg-3",4,"ngFor","ngForOf"],["class","my-3",4,"ngIf"],[1,"col-sm-6","col-md-4","col-lg-3"],[1,"card","cursor-pointer",3,"click"],["height","250",1,"w-100","card-img-top","d-block",3,"src","alt"],[1,"card-body"],[1,"text-center","h5"],[1,"my-3"],[1,"text-main","text-center","py-3"],[1,"row","g-4"],[1,"text-center","bg-main-light","p-3","rounded-4","h-100"],[1,"h6"]],template:function(i,a){1&i&&e.YNc(0,m,4,2,"section",0),2&i&&e.Q6J("ngIf",a.categories.length)},dependencies:[r.ez,r.sg,r.O5]})}return o})()}}]);