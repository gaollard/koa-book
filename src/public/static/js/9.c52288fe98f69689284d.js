webpackJsonp([9],{LpXm:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var r=a("NYxO"),e=(a("v2ns"),a("7QTg")),i={components:{swiper:e.swiper,swiperSlide:e.swiperSlide},data:function(){return{swiperOption:{freeMode:!0,slidesPerView:"auto"}}},computed:Object(r.b)({imgRoot:function(t){return t.imgRoot},categorys:function(t){return t.category.categorys},brands:function(t){return t.brand.brands},products:function(t){return t.product.products}}),methods:{navigateToProduct:function(t){this.$router.push("/product/"+t.productId)}},created:function(){!this.categorys.length&&this.$store.dispatch("category/getCategorys"),!this.brands.length&&this.$store.dispatch("brand/getBrands"),!this.products.length&&this.$store.dispatch("product/getProducts")}},c={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"view view-category"},[a("div",{staticClass:"cate-list-wrap"},[a("swiper",{staticClass:"cate-list",attrs:{options:t.swiperOption}},t._l(t.categorys,function(s,r){return a("swiper-slide",{key:r,staticClass:"cate-item"},[a("span",{staticClass:"cate-name"},[t._v(t._s(s.categoryName))])])}))],1),t._v(" "),a("div",{staticClass:"scroll-wrap"},[a("div",{staticClass:"brand-list-wrap"},[a("ul",{staticClass:"brand-list"},t._l(t.brands,function(s,r){return a("li",{key:r,staticClass:"brand-item"},[a("span",{staticClass:"brand-name"},[t._v(t._s(s.brandName))])])}))]),t._v(" "),a("div",{staticClass:"product-list-wrap"},[a("ul",{staticClass:"product-list"},t._l(t.products,function(s,r){return a("li",{key:r,staticClass:"product-item",on:{click:function(a){t.navigateToProduct(s)}}},[a("div",{staticClass:"product-logo-wrap"},[a("img",{staticClass:"product-logo",attrs:{src:t.imgRoot+s.productLogo,alt:""}})]),t._v(" "),a("div",{staticClass:"product-name ext-nowrap"},[t._v(t._s(s.productName))]),t._v(" "),a("div",{staticClass:"product-desc"},[t._v("比购买省￥4344起")]),t._v(" "),a("div",{staticClass:"now-price"},[a("span",{staticClass:"now-price-num"},[t._v(t._s(s.productPrice/100))]),t._v("元")])])}))])])])},staticRenderFns:[]};var o=a("VU/8")(i,c,!1,function(t){a("yeEa")},"data-v-35dc3faa",null);s.default=o.exports},yeEa:function(t,s){}});
//# sourceMappingURL=9.c52288fe98f69689284d.js.map