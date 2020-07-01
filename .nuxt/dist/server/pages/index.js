exports.ids = [2];
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

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(55);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(2).default
module.exports.__inject__ = function (context) {
  add("60a041f4", content, true, context)
};

/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo@2x.986e9ff.png";

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_1_0_6_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44);
/* harmony import */ var _node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_1_0_6_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_1_0_6_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_1_0_6_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_1_0_6_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_1_0_6_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(1);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".index-container{width:1610px;margin:0 auto;min-height:100vh}.index-header{height:60px;display:flex;align-items:center;justify-content:space-between}.index-header .slogon{display:block;width:187px;height:30px}.index-header .slogon img{width:100%;height:100%}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_@nuxt_components@1.0.6@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=aca32bbe&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"index-container"},[_vm._ssrNode("<header class=\"index-header\"><h1><a href=\"/\" class=\"slogon\"><img"+(_vm._ssrAttr("src",__webpack_require__(53)))+" alt=\"埋堆堆-最全粤语港剧社区平台\"></a></h1> <div class=\"header-r\"><span>下载客户端</span></div></header> "),_vm._ssrNode("<ul>","</ul>",_vm._l((_vm.users),function(user){return _vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":'/users/' + user.id}},[_vm._v(_vm._s(user.name))])],1)}),0),_vm._ssrNode(" "),_vm._l((_vm.videoList),function(item){return _vm._ssrNode("<button>","</button>",[_c('nuxt-link',{attrs:{"to":'/vod/' + item}},[_vm._v("看剧")])],1)})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=aca32bbe&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(3);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: ./api/index.js
var api = __webpack_require__(42);

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib??ref--2-0!./node_modules/_@nuxt_components@1.0.6@@nuxt/components/dist/loader.js??ref--0-0!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
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


/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  async asyncData() {
    const {
      data
    } = await external_axios_default.a.get('https://jsonplaceholder.typicode.com/users');
    return {
      users: data
    };
  },

  data() {
    return {
      list: '',
      videoList: ['ff8080816155834601615663a74b017e', 'ff8080816155834601615663a74b017e']
    };
  },

  async mounted() {
    try {
      const list = await Object(api["a" /* getVodInfo */])({
        vodUuid: 'ff8080816155834601615663a74b017e'
      });
      this.list = list;
    } catch {// console.log('err')
    }
  },

  head: {
    title: '埋堆堆-最全粤语港剧社区平台',
    meta: [{
      hid: 'keywords',
      name: 'keywords',
      content: 'TVB，粤语，港剧，高清，免费，在线点播，翡翠台'
    }, {
      hid: 'description',
      name: 'description',
      content: '埋堆堆APP拥有海量全网正版独播的TVB剧集、全粤语直播频道及TVB粉丝汇聚的埋堆社区，为用户提供丰富的影视文娱内容，让用户粤享精彩娱乐时光'
    }]
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(54)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "edb5f9fe"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map