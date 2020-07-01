exports.ids = [4];
exports.modules = {

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export classifyList */
/* unused harmony export videoListResult */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getVodInfo; });
/* harmony import */ var _plugins_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
 // 获取剧集分类列表

const classifyList = () => Object(_plugins_axios__WEBPACK_IMPORTED_MODULE_0__[/* post */ "b"])('/vod/classify/list.action', {}); // 获取剧集查询结果列表


const videoListResult = ({
  uuidList
}) => Object(_plugins_axios__WEBPACK_IMPORTED_MODULE_0__[/* post */ "b"])('/api/vipActivity/getActivityInfo.action', {
  uuidList,
  rows: 10,
  startRow: 1,
  isVip: -1,
  orderType: 1
});

const getVodInfo = ({
  vodUuid
}) => Object(_plugins_axios__WEBPACK_IMPORTED_MODULE_0__[/* post */ "b"])('/api/vod/getVodInfo.action', {
  vodUuid,
  num: 1
});



/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(52);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(2).default
module.exports.__inject__ = function (context) {
  add("0c9b9b5f", content, true, context)
};

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_1_0_6_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_3ac8baa2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43);
/* harmony import */ var _node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_1_0_6_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_3ac8baa2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_1_0_6_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_3ac8baa2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_1_0_6_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_3ac8baa2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_1_0_6_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_3ac8baa2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_1_0_6_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_3ac8baa2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(1);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".video[data-v-3ac8baa2]{text-align:center;margin-top:100px;font-family:sans-serif;padding:0 200px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@1.0.6@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./pages/vod/_id.vue?vue&type=template&id=3ac8baa2&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"video"},[_vm._ssrNode("<div data-v-3ac8baa2>"+_vm._ssrEscape(_vm._s(_vm.vodInfo.name))+"</div> <div data-v-3ac8baa2><img"+(_vm._ssrAttr("src",_vm.vodInfo.coverImage))+(_vm._ssrAttr("alt",_vm.vodInfo.name))+" data-v-3ac8baa2></div> <div data-v-3ac8baa2>"+_vm._ssrEscape(_vm._s(_vm.vodInfo.introduction))+"</div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/vod/_id.vue?vue&type=template&id=3ac8baa2&scoped=true&

// EXTERNAL MODULE: ./api/index.js
var api = __webpack_require__(42);

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib??ref--2-0!./node_modules/_@nuxt_components@1.0.6@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./pages/vod/_id.vue?vue&type=script&lang=js&
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
  async asyncData({
    params,
    error
  }) {
    try {
      const {
        data
      } = await Object(api["a" /* getVodInfo */])({
        vodUuid: params.id
      });
      return {
        vodInfo: data,
        title: data.name,
        introduction: data.introduction
      };
    } catch (e) {
      error({
        message: 'User not found',
        statusCode: 404
      });
    }
  },

  data() {
    return {
      vodInfo: '',
      title: 'abcd',
      introduction: ''
    };
  },

  head() {
    return {
      title: this.title,
      meta: [{
        hid: 'keywords',
        name: 'keywords',
        content: 'TVB，粤语，港剧，高清，免费，在线点播，翡翠台'
      }, {
        hid: 'description',
        name: 'description',
        content: this.vodInfo.introduction
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/vod/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var vod_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/vod/_id.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(51)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  vod_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3ac8baa2",
  "b1284e36"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=[_]id.js.map