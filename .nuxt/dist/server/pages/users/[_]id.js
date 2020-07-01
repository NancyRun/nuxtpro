exports.ids = [3];
exports.modules = {

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(50);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(2).default
module.exports.__inject__ = function (context) {
  add("5fbe55f8", content, true, context)
};

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_1_0_6_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_4287312f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41);
/* harmony import */ var _node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_1_0_6_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_4287312f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_1_0_6_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_4287312f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_1_0_6_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_4287312f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_1_0_6_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_4287312f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_1_0_6_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_4287312f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(1);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".user[data-v-4287312f]{text-align:center;margin-top:100px;font-family:sans-serif}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@1.0.6@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./pages/users/_id.vue?vue&type=template&id=4287312f&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"user"},[_vm._ssrNode("<h3 data-v-4287312f>"+_vm._ssrEscape(_vm._s(_vm.name))+"</h3> <h4 data-v-4287312f>"+_vm._ssrEscape("@"+_vm._s(_vm.username))+"</h4> <p data-v-4287312f>"+_vm._ssrEscape("Email : "+_vm._s(_vm.email))+"</p> "),_vm._ssrNode("<p data-v-4287312f>","</p>",[_c('NuxtLink',{attrs:{"to":"/"}},[_vm._v("\n      List of users\n    ")])],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/users/_id.vue?vue&type=template&id=4287312f&scoped=true&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(3);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib??ref--2-0!./node_modules/_@nuxt_components@1.0.6@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./pages/users/_id.vue?vue&type=script&lang=js&
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
//
//

/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  validate({
    params
  }) {
    return !isNaN(+params.id);
  },

  async asyncData({
    params,
    error
  }) {
    try {
      const {
        data
      } = await external_axios_default.a.get(`https://jsonplaceholder.typicode.com/users/${+params.id}`);
      return data;
    } catch (e) {
      error({
        message: 'User not found',
        statusCode: 404
      });
    }
  }

});
// CONCATENATED MODULE: ./pages/users/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var users_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/users/_id.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(49)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  users_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4287312f",
  "d0c0913c"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=[_]id.js.map