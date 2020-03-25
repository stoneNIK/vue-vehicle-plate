module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "4e85":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_vehicle_plate_vue_vue_type_style_index_0_id_f5fa4684_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f2f4");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_vehicle_plate_vue_vue_type_style_index_0_id_f5fa4684_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_vehicle_plate_vue_vue_type_style_index_0_id_f5fa4684_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_vehicle_plate_vue_vue_type_style_index_0_id_f5fa4684_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "f2f4":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"28c4967b-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue-vehicle-plate/vue-vehicle-plate.vue?vue&type=template&id=f5fa4684&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"pop-wrap"},[_c('div',{staticClass:"ipt-wrap"},[_c('div',{staticClass:"ipt-title"},[_vm._v("请输入车牌号")]),_c('div',{staticClass:"ipt-list"},_vm._l((_vm.inputAreaList),function(item){return _c('div',{key:item.index,class:[
          item.index === -1 ? 'ipt-split' : 'ipt-num',
          _vm.activeIndex === item.index ? ' active' : '',
          item.index === 7 ? ' addition-num' : ''
        ],on:{"click":function($event){return _vm.handleChooseIpt(item.index)}}},[(_vm.plateNum[item.index])?_c('div',[_vm._v(_vm._s(_vm.plateNum[item.index]))]):_vm._e(),(item.index === 7 && (_vm.plateNum[7] === ' ' || !_vm.plateNum[7]))?_c('div',{staticClass:"addition-preview"},[_vm._v(" 新能源 ")]):_vm._e()])}),0)]),_c('div',{staticClass:"confirm-wrap"},[_c('button',{staticClass:"confirm-btn",attrs:{"type":"button","disabled":!_vm.canSubmit},on:{"click":_vm.confirm}},[_vm._v(" 确定 ")])]),(_vm.showKeyboard)?_c('div',{staticClass:"keyborad-wrap"},[_vm._l((_vm.iptKeyList),function(item){return _c('div',{key:item.key,class:[item.disabled ? 'disabled' : ''],on:{"click":function($event){return _vm.handleInput(item.key, item.disabled)}}},[_c('span',[_vm._v(_vm._s(item.key))]),(_vm.showAdditionList && item.key === '字')?_c('div',{staticClass:"addtion-list"},_vm._l((_vm.additionKeyList),function(item){return _c('div',{key:item,on:{"click":function($event){return _vm.handleInput(item)}}},[_vm._v(" "+_vm._s(item)+" ")])}),0):_vm._e()])}),_c('div',{staticClass:"gray-key del",attrs:{"data-key":"del"},on:{"click":_vm.handleRemove}},[_vm._m(0)])],2):_vm._e()])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"del-img"},[_c('img',{attrs:{"src":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAqBAMAAAAUtoW9AAAAMFBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlTPQ5AAAAD3RSTlMA6y8RB7yol87aIURf9oCspPo+AAABKElEQVQ4y42UsU4CQRCGL2AwgcSCWJocV9jTYWJDQ2KrsT8KShIo6C14AAoeAC1tfAWoeQMqnsECkETzy+wwewsHf5hiZ7Pf/bO3szMbRWZfzwhs0W1GmTWWOLS7jJUnOLaBhx85hk0g3M7DXR57wGw//wyjOKvEuNVZcZIFMZviVycPQP8YlrBW4SgvjCrYOv8EtHOwiD9xV6lFeNH1+7qMgIwtoKNbf9fEFeKhhzvhSo+YoiouwcrDEvCq4RKItBDrNw72TLhf1k8UXnuhrpvQwTf81A0KMKHAG2CYHW5HTChwGgid1IQCU4zDvCQwocAl3i+FNCz7IXoUlgSaPpp4emX0smmZHJpCX2CnoNT02dLkRU3bgTcSbUHevLTt+YNBn5qTj9Q/+cdgxoiYpkoAAAAASUVORK5CYII="}})])}]


// CONCATENATED MODULE: ./src/vue-vehicle-plate/vue-vehicle-plate.vue?vue&type=template&id=f5fa4684&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue-vehicle-plate/vue-vehicle-plate.vue?vue&type=script&lang=js&
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

const ProvinceList = "京津沪渝晋蒙吉黑苏浙皖闽赣鲁豫鄂湘粤桂琼川云藏青宁新港澳台甘辽冀贵陕".split(
  ""
);
const NumberList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const LetterList = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");
const AdditionKeyList = "学挂警".split(""); // 可选中文字符（倒数第二位）
/** 标识输入框的位数
 * @param type {number} 键盘类型
 * 1：省份输入。键盘：省份简称。
 * 2：区号输入。键盘：数字+字母。数字和I不可选
 * 3：序号选择。键盘：数字+字母。I、O不可选
 * 4：特殊位数。键盘：数字+字母+特殊字符（'字'切换显示'学挂警'按钮）。I、O不可选
 * 5：新能源标识位。键盘：数字+字母。I、O不可选
 */
const InputAreaList = [
  { index: 0, type: 1 },
  { index: 1, type: 2 },
  { index: -1 }, // 分割点，例如：川A·12345
  { index: 2, type: 3 },
  { index: 3, type: 3 },
  { index: 4, type: 3 },
  { index: 5, type: 3 },
  { index: 6, type: 4 },
  { index: 7, type: 5 }
];

/* harmony default export */ var vue_vehicle_platevue_type_script_lang_js_ = ({
  name: "vue-car-plate",
  props: {
    initValue: {
      type: String,
      default: ""
    },
    limitProvince: {
      type: String,
      default: ""
    }, // 限制省份列表, 不用间隔
    limitCity: {
      type: String,
      default: ""
    } // 限制城市列表， 不用间隔
  },
  data() {
    return {
      plateNum: "",
      canSubmit: false,
      showKeyboard: false,
      iptKeyList: [],
      activeIndex: -1, // 输入进程,不同的进程显示不同的键盘布局和功能.输入第一位字符为0，第二位字符为1
      inputAreaList: InputAreaList,
      additionKeyList: AdditionKeyList,
      showAdditionList: false
    };
  },
  mounted() {
    let plateNum = this.initValue;
    // 目前只做前两位校验，如果不合法，置为空
    if (plateNum[0] && this.checkProvinceDisabled(plateNum[0])) {
      plateNum = "";
    }
    if (plateNum[1] && this.checkCityDisabled(plateNum[1])) {
      plateNum = plateNum[0];
    }
    plateNum = plateNum.replace(/(·|\s*)/g, "").toUpperCase();
    this.plateNum = plateNum;
    this.activeIndex = !plateNum.length
      ? 0
      : plateNum.length > 7
      ? 7
      : plateNum.length === 7
      ? 6
      : plateNum.length;
  },
  methods: {
    confirm() {
      const plateNum = this.plateNum.replace(/\s*/g, "");
      this.$emit("confirm", {
        plateNum,
        plateNumFor: plateNum.slice(0, 2) + "·" + plateNum.slice(2),
        isNewEnergy: plateNum.length === 8,
        isProvincialCity: plateNum[1] === "A",
        province: plateNum[0]
      });
    },
    /**
     * 替换字符串中某个下标上字符的的内容
     * @param {string} str 被替换的字符串
     * @param {number} index 替换的下标
     * @param {string} key 替换的字符
     */
    replaceIndexChar(str, index, key) {
      return (
        str.slice(0, index) +
        (key !== undefined ? key : " ") +
        str.slice(index + 1)
      );
    },
    /** 删除按钮 */
    handleRemove() {
      const process = this.activeIndex;
      let plateNum = this.plateNum;
      // 如果位置上有值先删除
      if (plateNum[process] && plateNum[process] !== " ") {
        plateNum = this.replaceIndexChar(plateNum, process);
        this.plateNum = plateNum;
        return;
      }
      if (process === 7) {
        return;
      }
      //位置上没有值，光标回到上一个输入框，并删除上一个输入框的值
      const index = process - 1 > -1 ? process - 1 : 0;
      plateNum = this.replaceIndexChar(plateNum, index);
      this.plateNum = plateNum;
      this.activeIndex = index;
    },
    /** 用户输入 */
    handleInput(key, disabled) {
      if (disabled) {
        return;
      }

      // 输入第7位字符时（倒数第二位）,点击‘字’切换显示‘学挂警’字符按钮
      if (key === "字") {
        this.showAdditionList = !this.showAdditionList;
        return;
      }

      const process = this.activeIndex;
      let plateNum = this.plateNum;
      plateNum = this.replaceIndexChar(plateNum, process, key);
      let activeIndex =
        process === 7
          ? 7
          : process + 1 > 6
          ? 6
          : plateNum[process + 1] && plateNum[process + 1] !== " "
          ? process
          : process + 1;

      this.plateNum = plateNum;
      this.activeIndex = activeIndex;
    },
    /** 选择输入框 */
    handleChooseIpt(_index) {
      const index = _index;
      if (!this.plateNum[index - 1 > -1 ? index - 1 : 0]) {
        return;
      }
      this.showKeyboard = true;
      this.activeIndex = Number(index);
    },
    // 验证省份是否合法
    checkProvinceDisabled(str) {
      const keyboardList = ProvinceList;
      let limitProvince = this.limitProvince.split("");
      limitProvince = limitProvince.length > 0 ? limitProvince : keyboardList;
      return limitProvince.findIndex(i => i === str) === -1;
    },
    checkCityDisabled(str) {
      const keyboardList = NumberList.concat(LetterList);
      let limitCity = this.limitCity.split("");
      limitCity = limitCity.length > 0 ? limitCity : keyboardList;
      return (
        typeof str === "number" ||
        str === "I" ||
        limitCity.findIndex(i => i === str) === -1
      );
    },
    // 根据activeIndex的值（输入进程）来判断键盘的布局和按键禁用
    getKeyBoardList() {
      const process = this.activeIndex;
      if (process < 0) {
        return;
      }
      const keyboardType = InputAreaList.find(e => e.index === process).type;

      this.showKeyboard = !!keyboardType;

      /** 第1位 省份选择 只有省份简称列表可选 */
      if (keyboardType === 1) {
        this.iptKeyList = ProvinceList.map(e => ({
          key: e,
          disabled: this.checkProvinceDisabled(e)
        }));
      }

      /** 第2位 区号选择 英文字母+数字 数字和I不可选 */
      if (keyboardType === 2) {
        this.iptKeyList = NumberList.concat(LetterList).map(e => ({
          key: e,
          disabled: this.checkCityDisabled(e)
        }));
      }

      /** 第3-6位 序号选择 英文字母+数字 I、O不可选 */
      if (keyboardType === 3) {
        this.iptKeyList = NumberList.concat(LetterList).map(e => ({
          key: e,
          disabled: e === "I" || e === "O"
        }));
      }

      /** 第7位 序号选择 英文字母+数字+特殊字符切换（'学挂警'） I、O不可选 */
      if (keyboardType === 4) {
        let iptKeyList = NumberList.concat(LetterList);
        // 第三排最后一个字符插入'字',点击之后弹出'学挂警'三个可选字符按钮
        iptKeyList.splice(29, 0, "字");

        this.iptKeyList = iptKeyList.map(e => ({
          key: e,
          disabled: e === "I" || e === "O"
        }));
        this.showAdditionList = false;
      }

      /** 第8位 新能源车最后一位选择 英文字母+数字 I、O不可选 */
      if (keyboardType === 5) {
        this.iptKeyList = NumberList.concat(LetterList).map(e => ({
          key: e,
          disabled: e === "I" || e === "O"
        }));
      }
    }
  },
  watch: {
    activeIndex: function() {
      this.getKeyBoardList();
    },
    plateNum: function() {
      const plateNum = this.plateNum;
      this.canSubmit =
        !/\S+\s+\S+/.test(plateNum) && plateNum.replace(/\s*/g, "").length >= 7;
    }
  }
});

// CONCATENATED MODULE: ./src/vue-vehicle-plate/vue-vehicle-plate.vue?vue&type=script&lang=js&
 /* harmony default export */ var vue_vehicle_plate_vue_vehicle_platevue_type_script_lang_js_ = (vue_vehicle_platevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/vue-vehicle-plate/vue-vehicle-plate.vue?vue&type=style&index=0&id=f5fa4684&lang=less&scoped=true&
var vue_vehicle_platevue_type_style_index_0_id_f5fa4684_lang_less_scoped_true_ = __webpack_require__("4e85");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/vue-vehicle-plate/vue-vehicle-plate.vue






/* normalize component */

var component = normalizeComponent(
  vue_vehicle_plate_vue_vehicle_platevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "f5fa4684",
  null
  
)

/* harmony default export */ var vue_vehicle_plate = (component.exports);
// CONCATENATED MODULE: ./src/vue-vehicle-plate/index.js


const VueVehiclePlate = {
  install(Vue) {
    Vue.component("vue-vehicle-plate", vue_vehicle_plate);
  }
};

/* harmony default export */ var src_vue_vehicle_plate = (VueVehiclePlate);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_vue_vehicle_plate);



/***/ })

/******/ });
//# sourceMappingURL=vue-vehicle-plate.common.js.map