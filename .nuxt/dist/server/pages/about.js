exports.ids = [1];
exports.modules = {

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(46);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(2).default
module.exports.__inject__ = function (context) {
  add("925b12a0", content, true, context)
};

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(48);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(2).default
module.exports.__inject__ = function (context) {
  add("238dccaa", content, true, context)
};

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_1_0_6_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39);
/* harmony import */ var _node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_1_0_6_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_1_0_6_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_1_0_6_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_1_0_6_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_1_0_6_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(1);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".container{margin:0 auto;min-height:100vh;display:flex;justify-content:center;align-items:center;text-align:center}.title{font-family:Quicksand,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links{padding-top:15px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_1_0_6_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);
/* harmony import */ var _node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_1_0_6_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_1_0_6_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_1_0_6_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_1_0_6_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_1_0_6_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(1);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".NuxtLogo{-webkit-animation:appear 1s;animation:appear 1s;margin:auto}@-webkit-keyframes appear{0%{opacity:0}}@keyframes appear{0%{opacity:0}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@1.0.6@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./components/Logo.vue?vue&type=template&id=1d4adf9e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:"NuxtLogo",attrs:{"width":"245","height":"180","viewBox":"0 0 452 342","xmlns":"http://www.w3.org/2000/svg"}},[_vm._ssrNode("<path d=\"M139 330l-1-2c-2-4-2-8-1-13H29L189 31l67 121 22-16-67-121c-1-2-9-14-22-14-6 0-15 2-22 15L5 303c-1 3-8 16-2 27 4 6 10 12 24 12h136c-14 0-21-6-24-12z\" fill=\"#00C58E\"></path> <path d=\"M447 304L317 70c-2-2-9-15-22-15-6 0-15 3-22 15l-17 28v54l39-67 129 230h-49a23 23 0 0 1-2 14l-1 1c-6 11-21 12-23 12h76c3 0 17-1 24-12 3-5 5-14-2-26z\" fill=\"#108775\"></path> <path d=\"M376 330v-1l1-2c1-4 2-8 1-12l-4-12-102-178-15-27h-1l-15 27-102 178-4 12a24 24 0 0 0 2 15c4 6 10 12 24 12h190c3 0 18-1 25-12zM256 152l93 163H163l93-163z\" fill=\"#2F495E\"></path>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Logo.vue?vue&type=template&id=1d4adf9e&

// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/Logo.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(47)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "136a9444"
  
)

/* harmony default export */ var Logo = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@1.0.6@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./pages/about.vue?vue&type=template&id=268b540c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_vm._ssrNode("<div>","</div>",[_c('Logo'),_vm._ssrNode(" <h1 class=\"title\">\n      about\n    </h1>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/about.vue?vue&type=template&id=268b540c&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib??ref--2-0!./node_modules/_@nuxt_components@1.0.6@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./pages/about.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var aboutvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./pages/about.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_aboutvue_type_script_lang_js_ = (aboutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/about.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(45)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_aboutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "696d283c"
  
)

/* harmony default export */ var about = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Logo: __webpack_require__(56).default})


/***/ })

};;
//# sourceMappingURL=about.js.map