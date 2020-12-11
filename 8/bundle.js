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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(this,function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",u="month",a="quarter",o="year",f="date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,c=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},$=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},l={s:$,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+$(r,2,"0")+":"+$(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,u),s=n-i<0,a=e.clone().add(r+(s?-1:1),u);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return{M:u,y:o,w:s,d:i,D:f,h:r,m:n,s:e,ms:t,Q:a}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",M={};M[y]=d;var m=function(t){return t instanceof S},D=function(t,e,n){var r;if(!t)return y;if("string"==typeof t)M[t]&&(r=t),e&&(M[t]=e,r=t);else{var i=t.name;M[i]=t,r=i}return!n&&r&&(y=r),r||!n&&y},v=function(t,e){if(m(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},g=l;g.l=D,g.i=m,g.w=function(t,e){return v(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function d(t){this.$L=D(t.locale,null,!0),this.parse(t)}var $=d.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(g.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(h);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},$.$utils=function(){return g},$.isValid=function(){return!("Invalid Date"===this.$d.toString())},$.isSame=function(t,e){var n=v(t);return this.startOf(e)<=n&&n<=this.endOf(e)},$.isAfter=function(t,e){return v(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<v(t)},$.$g=function(t,e,n){return g.u(t)?this[e]:this.set(n,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,a){var h=this,c=!!g.u(a)||a,d=g.p(t),$=function(t,e){var n=g.w(h.$u?Date.UTC(h.$y,e,t):new Date(h.$y,e,t),h);return c?n:n.endOf(i)},l=function(t,e){return g.w(h.toDate()[t].apply(h.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),h)},y=this.$W,M=this.$M,m=this.$D,D="set"+(this.$u?"UTC":"");switch(d){case o:return c?$(1,0):$(31,11);case u:return c?$(1,M):$(0,M+1);case s:var v=this.$locale().weekStart||0,S=(y<v?y+7:y)-v;return $(c?m-S:m+(6-S),M);case i:case f:return l(D+"Hours",0);case r:return l(D+"Minutes",1);case n:return l(D+"Seconds",2);case e:return l(D+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(s,a){var h,c=g.p(s),d="set"+(this.$u?"UTC":""),$=(h={},h[i]=d+"Date",h[f]=d+"Date",h[u]=d+"Month",h[o]=d+"FullYear",h[r]=d+"Hours",h[n]=d+"Minutes",h[e]=d+"Seconds",h[t]=d+"Milliseconds",h)[c],l=c===i?this.$D+(a-this.$W):a;if(c===u||c===o){var y=this.clone().set(f,1);y.$d[$](l),y.init(),this.$d=y.set(f,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[g.p(t)]()},$.add=function(t,a){var f,h=this;t=Number(t);var c=g.p(a),d=function(e){var n=v(h);return g.w(n.date(n.date()+Math.round(e*t)),h)};if(c===u)return this.set(u,this.$M+t);if(c===o)return this.set(o,this.$y+t);if(c===i)return d(1);if(c===s)return d(7);var $=(f={},f[n]=6e4,f[r]=36e5,f[e]=1e3,f)[c]||1,l=this.$d.getTime()+t*$;return g.w(l,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=g.z(this),i=this.$locale(),s=this.$H,u=this.$m,a=this.$M,o=i.weekdays,f=i.months,h=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},d=function(t){return g.s(s%12||12,t,"0")},$=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:g.s(a+1,2,"0"),MMM:h(i.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:g.s(this.$D,2,"0"),d:String(this.$W),dd:h(i.weekdaysMin,this.$W,o,2),ddd:h(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:g.s(s,2,"0"),h:d(1),hh:d(2),a:$(s,u,!0),A:$(s,u,!1),m:String(u),mm:g.s(u,2,"0"),s:String(this.$s),ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:r};return n.replace(c,function(t,e){return e||l[t]||r.replace(":","")})},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(t,f,h){var c,d=g.p(f),$=v(t),l=6e4*($.utcOffset()-this.utcOffset()),y=this-$,M=g.m(this,$);return M=(c={},c[o]=M/12,c[u]=M,c[a]=M/3,c[s]=(y-l)/6048e5,c[i]=(y-l)/864e5,c[r]=y/36e5,c[n]=y/6e4,c[e]=y/1e3,c)[d]||y,h?M:g.a(M)},$.daysInMonth=function(){return this.endOf(u).$D},$.$locale=function(){return M[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=D(t,e,!0);return r&&(n.$L=r),n},$.clone=function(){return g.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},d}(),p=S.prototype;return v.prototype=p,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W",i],["$M",u],["$y",o],["$D",f]].forEach(function(t){p[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),v.extend=function(t,e){return t(e,S,v),v},v.locale=D,v.isDayjs=m,v.unix=function(t){return v(1e3*t)},v.en=M[y],v.Ls=M,v.p={},v});


/***/ }),

/***/ "./node_modules/nanoid/index.browser.js":
/*!**********************************************!*\
  !*** ./node_modules/nanoid/index.browser.js ***!
  \**********************************************/
/*! exports provided: nanoid, customAlphabet, customRandom, urlAlphabet, random */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nanoid", function() { return nanoid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customAlphabet", function() { return customAlphabet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customRandom", function() { return customRandom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
/* harmony import */ var _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url-alphabet/index.js */ "./node_modules/nanoid/url-alphabet/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "urlAlphabet", function() { return _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__["urlAlphabet"]; });

// This file replaces `index.js` in bundlers like webpack or Rollup,
// according to `browser` config in `package.json`.



if (true) {
  // All bundlers will remove this block in the production bundle.
  if (
    typeof navigator !== 'undefined' &&
    navigator.product === 'ReactNative' &&
    typeof crypto === 'undefined'
  ) {
    throw new Error(
      'React Native does not have a built-in secure random generator. ' +
        'If you don’t need unpredictable IDs use `nanoid/non-secure`. ' +
        'For secure IDs, import `react-native-get-random-values` ' +
        'before Nano ID. If you use Expo, install `expo-random` ' +
        'and use `nanoid/async`.'
    )
  }
  if (typeof msCrypto !== 'undefined' && typeof crypto === 'undefined') {
    throw new Error(
      'Import file with `if (!window.crypto) window.crypto = window.msCrypto`' +
        ' before importing Nano ID to fix IE 11 support'
    )
  }
  if (typeof crypto === 'undefined') {
    throw new Error(
      'Your browser does not have secure random generator. ' +
        'If you don’t need unpredictable IDs, you can use nanoid/non-secure.'
    )
  }
}

let random = bytes => crypto.getRandomValues(new Uint8Array(bytes))

let customRandom = (alphabet, size, getRandom) => {
  // First, a bitmask is necessary to generate the ID. The bitmask makes bytes
  // values closer to the alphabet size. The bitmask calculates the closest
  // `2^31 - 1` number, which exceeds the alphabet size.
  // For example, the bitmask for the alphabet size 30 is 31 (00011111).
  // `Math.clz32` is not used, because it is not available in browsers.
  let mask = (2 << (Math.log(alphabet.length - 1) / Math.LN2)) - 1
  // Though, the bitmask solution is not perfect since the bytes exceeding
  // the alphabet size are refused. Therefore, to reliably generate the ID,
  // the random bytes redundancy has to be satisfied.

  // Note: every hardware random generator call is performance expensive,
  // because the system call for entropy collection takes a lot of time.
  // So, to avoid additional system calls, extra bytes are requested in advance.

  // Next, a step determines how many random bytes to generate.
  // The number of random bytes gets decided upon the ID size, mask,
  // alphabet size, and magic number 1.6 (using 1.6 peaks at performance
  // according to benchmarks).

  // `-~f => Math.ceil(f)` if f is a float
  // `-~i => i + 1` if i is an integer
  let step = -~((1.6 * mask * size) / alphabet.length)

  return () => {
    let id = ''
    while (true) {
      let bytes = getRandom(step)
      // A compact alternative for `for (var i = 0; i < step; i++)`.
      let j = step
      while (j--) {
        // Adding `|| ''` refuses a random byte that exceeds the alphabet size.
        id += alphabet[bytes[j] & mask] || ''
        if (id.length === size) return id
      }
    }
  }
}

let customAlphabet = (alphabet, size) => customRandom(alphabet, size, random)

let nanoid = (size = 21) => {
  let id = ''
  let bytes = crypto.getRandomValues(new Uint8Array(size))

  // A compact alternative for `for (var i = 0; i < step; i++)`.
  while (size--) {
    // It is incorrect to use bytes exceeding the alphabet size.
    // The following mask reduces the random byte in the 0-255 value
    // range to the 0-63 value range. Therefore, adding hacks, such
    // as empty string fallback or magic numbers, is unneccessary because
    // the bitmask trims bytes down to the alphabet size.
    let byte = bytes[size] & 63
    if (byte < 36) {
      // `0-9a-z`
      id += byte.toString(36)
    } else if (byte < 62) {
      // `A-Z`
      id += (byte - 26).toString(36).toUpperCase()
    } else if (byte < 63) {
      id += '_'
    } else {
      id += '-'
    }
  }
  return id
}




/***/ }),

/***/ "./node_modules/nanoid/url-alphabet/index.js":
/*!***************************************************!*\
  !*** ./node_modules/nanoid/url-alphabet/index.js ***!
  \***************************************************/
/*! exports provided: urlAlphabet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlAlphabet", function() { return urlAlphabet; });
// This alphabet uses `A-Za-z0-9_-` symbols. The genetic algorithm helped
// optimize the gzip compression for this alphabet.
let urlAlphabet =
  'ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW'




/***/ }),

/***/ "./src/const.js":
/*!**********************!*\
  !*** ./src/const.js ***!
  \**********************/
/*! exports provided: OfferCost, DateGap, DESTINATION_CITIES, POINT_TYPES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferCost", function() { return OfferCost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateGap", function() { return DateGap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DESTINATION_CITIES", function() { return DESTINATION_CITIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POINT_TYPES", function() { return POINT_TYPES; });
const OfferCost = {
  FROM: 1,
  TO: 500,
};

const DateGap = {
  FROM: 1,
  TO: 7,
};

const DESTINATION_CITIES = [
  `London`,
  `San Francisco`,
  `Barcelona`,
  `Saint Petersburg`,
  `Helsinki`,
  `Copenhagen`,
  `Moscow`,
  `Hamburg`,
  `Milan`,
  `Vienna`,
];

const POINT_TYPES = [
  `Taxi`,
  `Bus`,
  `Train`,
  `Ship`,
  `Transport`,
  `Drive`,
  `Flight`,
  `Check-in`,
  `Sightseeing`,
  `Restaurant`,
];


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_info__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/info */ "./src/view/info.js");
/* harmony import */ var _view_controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/controls */ "./src/view/controls.js");
/* harmony import */ var _view_new_event_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/new-event-button */ "./src/view/new-event-button.js");
/* harmony import */ var _mock_point__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mock/point */ "./src/mock/point.js");
/* harmony import */ var _mock_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mock/info */ "./src/mock/info.js");
/* harmony import */ var _mock_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mock/tabs */ "./src/mock/tabs.js");
/* harmony import */ var _mock_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mock/filter */ "./src/mock/filter.js");
/* harmony import */ var _mock_sorting__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mock/sorting */ "./src/mock/sorting.js");
/* harmony import */ var _presenter_trip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./presenter/trip */ "./src/presenter/trip.js");
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/render */ "./src/utils/render.js");













const pointsCount = 20;

const points = new Array(pointsCount).fill().map(_mock_point__WEBPACK_IMPORTED_MODULE_3__["generatePoint"]);
const info = Object(_mock_info__WEBPACK_IMPORTED_MODULE_4__["generateInfo"])();
const tabs = Object(_mock_tabs__WEBPACK_IMPORTED_MODULE_5__["generateTab"])();
const filters = Object(_mock_filter__WEBPACK_IMPORTED_MODULE_6__["generateFilter"])();
const sorting = Object(_mock_sorting__WEBPACK_IMPORTED_MODULE_7__["generateSorting"])();

// header
const headerContainer = document.querySelector(`.page-header`);
const tripContainer = headerContainer.querySelector(`.trip-main`);
tripContainer.innerHTML = ``;

// main
const mainContainer = document.querySelector(`.page-main`);
const pointsContainer = mainContainer.querySelector(`.trip-events`);

// tabs
Object(_utils_render__WEBPACK_IMPORTED_MODULE_9__["render"])(tripContainer, new _view_info__WEBPACK_IMPORTED_MODULE_0__["default"](info), _utils_render__WEBPACK_IMPORTED_MODULE_9__["RenderPosition"].BEFOREEND);
Object(_utils_render__WEBPACK_IMPORTED_MODULE_9__["render"])(tripContainer, new _view_controls__WEBPACK_IMPORTED_MODULE_1__["default"](tabs, filters), _utils_render__WEBPACK_IMPORTED_MODULE_9__["RenderPosition"].BEFOREEND);
Object(_utils_render__WEBPACK_IMPORTED_MODULE_9__["render"])(tripContainer, new _view_new_event_button__WEBPACK_IMPORTED_MODULE_2__["default"](), _utils_render__WEBPACK_IMPORTED_MODULE_9__["RenderPosition"].BEFOREEND);

// trip
const tripPresenter = new _presenter_trip__WEBPACK_IMPORTED_MODULE_8__["default"](pointsContainer, sorting);
tripPresenter.init(points);


/***/ }),

/***/ "./src/mock/filter.js":
/*!****************************!*\
  !*** ./src/mock/filter.js ***!
  \****************************/
/*! exports provided: generateFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateFilter", function() { return generateFilter; });
const FilterName = {
  EVERYTHING: `everything`,
  FUTURE: `future`,
  PAST: `past`,
};

const generateFilter = () => {
  return [{
    name: FilterName.EVERYTHING,
    isChecked: true,
  },
  {
    name: FilterName.FUTURE,
    isChecked: false,
  },
  {
    name: FilterName.PAST,
    isChecked: false,
  }];
};


/***/ }),

/***/ "./src/mock/info.js":
/*!**************************!*\
  !*** ./src/mock/info.js ***!
  \**************************/
/*! exports provided: generateInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateInfo", function() { return generateInfo; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/common */ "./src/utils/common.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../const */ "./src/const.js");





const generateDate = () => {
  const maxDaysGap = Object(_utils_common__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(_const__WEBPACK_IMPORTED_MODULE_2__["OfferCost"].FROM, _const__WEBPACK_IMPORTED_MODULE_2__["OfferCost"].TO);
  const daysGap = Object(_utils_common__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(-maxDaysGap, maxDaysGap);
  const maxHoursGap = Object(_utils_common__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(_const__WEBPACK_IMPORTED_MODULE_2__["OfferCost"].FROM, _const__WEBPACK_IMPORTED_MODULE_2__["OfferCost"].TO);
  const hoursGap = Object(_utils_common__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(-maxHoursGap, maxHoursGap);
  const maxMinutesGap = Object(_utils_common__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(_const__WEBPACK_IMPORTED_MODULE_2__["OfferCost"].FROM, _const__WEBPACK_IMPORTED_MODULE_2__["OfferCost"].TO);
  const minutesGap = Object(_utils_common__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(-maxMinutesGap, maxMinutesGap);
  return dayjs__WEBPACK_IMPORTED_MODULE_0___default()().add(daysGap, `day`).add(hoursGap, `hours`).add(minutesGap, `minutes`);
};

const generateDestinationCity = () => {
  const randomIndex = Object(_utils_common__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(0, _const__WEBPACK_IMPORTED_MODULE_2__["DESTINATION_CITIES"].length - 1);

  return _const__WEBPACK_IMPORTED_MODULE_2__["DESTINATION_CITIES"][randomIndex];
};

const generateDestinationCities = () => {
  const citiesCount = Object(_utils_common__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(1, 5);
  let cities = [];

  for (let index = 0; index < citiesCount; index++) {
    cities.push(generateDestinationCity());
  }

  return cities;
};

const generateInfo = () => {
  const dateTimeStartEvent = generateDate();
  let dateTimeEndEvent = generateDate();

  while ((dateTimeStartEvent.isAfter(dateTimeEndEvent) && !(dayjs__WEBPACK_IMPORTED_MODULE_0___default()(dateTimeStartEvent).isSame(dayjs__WEBPACK_IMPORTED_MODULE_0___default()(dateTimeEndEvent))))) {
    dateTimeEndEvent = generateDate();
  }

  return {
    destinationCities: generateDestinationCities(),
    dateTimeStartEvent,
    dateTimeEndEvent,
    cost: Object(_utils_common__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(_const__WEBPACK_IMPORTED_MODULE_2__["OfferCost"].FROM, _const__WEBPACK_IMPORTED_MODULE_2__["OfferCost"].TO),
  };
};


/***/ }),

/***/ "./src/mock/point.js":
/*!***************************!*\
  !*** ./src/mock/point.js ***!
  \***************************/
/*! exports provided: generateOptions, generatePoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateOptions", function() { return generateOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generatePoint", function() { return generatePoint; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.browser.js");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/common */ "./src/utils/common.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../const */ "./src/const.js");







const generatePointTypes = () => {
  const randomIndex = Object(_utils_common__WEBPACK_IMPORTED_MODULE_2__["getRandomInteger"])(0, _const__WEBPACK_IMPORTED_MODULE_3__["POINT_TYPES"].length - 1);

  return _const__WEBPACK_IMPORTED_MODULE_3__["POINT_TYPES"][randomIndex];
};

const generateDestinationCity = () => {
  const randomIndex = Object(_utils_common__WEBPACK_IMPORTED_MODULE_2__["getRandomInteger"])(0, _const__WEBPACK_IMPORTED_MODULE_3__["DESTINATION_CITIES"].length - 1);

  return _const__WEBPACK_IMPORTED_MODULE_3__["DESTINATION_CITIES"][randomIndex];
};

const conditions = [`Add luggage`, `Rent a car`, `Add breakfast`, `Book tickets`, `Switch to comfort`, `Order Uber`, `Add meal`, `Choose seats`, `Lunch in city`, `Travel by train`];

const generateOffer = () => {
  const randomIndex = Object(_utils_common__WEBPACK_IMPORTED_MODULE_2__["getRandomInteger"])(0, conditions.length - 1);
  return {
    id: Object(nanoid__WEBPACK_IMPORTED_MODULE_1__["nanoid"])(),
    condition: conditions[randomIndex],
    cost: Object(_utils_common__WEBPACK_IMPORTED_MODULE_2__["getRandomInteger"])(_const__WEBPACK_IMPORTED_MODULE_3__["OfferCost"].FROM, _const__WEBPACK_IMPORTED_MODULE_3__["OfferCost"].TO),
    isChecked: Boolean(Object(_utils_common__WEBPACK_IMPORTED_MODULE_2__["getRandomInteger"])(0, 1)),
  };
};

const generateOffers = () => {
  const offersCount = Object(_utils_common__WEBPACK_IMPORTED_MODULE_2__["getRandomInteger"])(0, 5);
  const offers = [];

  for (let offerIndex = 0; offerIndex < offersCount; offerIndex++) {
    offers.push(generateOffer());
  }

  return offers;
};

const generatePhotos = () => {
  const photosCount = Object(_utils_common__WEBPACK_IMPORTED_MODULE_2__["getRandomInteger"])(0, 10);

  const generatePhoto = () => {
    return `http://picsum.photos/248/152?r=${Math.random()}`;
  };
  const photos = new Array(photosCount).fill().map(generatePhoto);

  return photos;
};

const generateDate = () => {
  const maxDaysGap = Object(_utils_common__WEBPACK_IMPORTED_MODULE_2__["getRandomInteger"])(_const__WEBPACK_IMPORTED_MODULE_3__["DateGap"].FROM, _const__WEBPACK_IMPORTED_MODULE_3__["DateGap"].TO);
  const daysGap = Object(_utils_common__WEBPACK_IMPORTED_MODULE_2__["getRandomInteger"])(-maxDaysGap, maxDaysGap);
  const maxHoursGap = Object(_utils_common__WEBPACK_IMPORTED_MODULE_2__["getRandomInteger"])(_const__WEBPACK_IMPORTED_MODULE_3__["DateGap"].FROM, _const__WEBPACK_IMPORTED_MODULE_3__["DateGap"].TO);
  const hoursGap = Object(_utils_common__WEBPACK_IMPORTED_MODULE_2__["getRandomInteger"])(-maxHoursGap, maxHoursGap);
  const maxMinutesGap = Object(_utils_common__WEBPACK_IMPORTED_MODULE_2__["getRandomInteger"])(_const__WEBPACK_IMPORTED_MODULE_3__["DateGap"].FROM, _const__WEBPACK_IMPORTED_MODULE_3__["DateGap"].TO);
  const minutesGap = Object(_utils_common__WEBPACK_IMPORTED_MODULE_2__["getRandomInteger"])(-maxMinutesGap, maxMinutesGap);
  return dayjs__WEBPACK_IMPORTED_MODULE_0___default()().add(daysGap, `day`).add(hoursGap, `hours`).add(minutesGap, `minutes`);
};

const generateOptions = generateOffers;

const generatePoint = () => {
  const dateTimeStartEvent = generateDate();
  let dateTimeEndEvent = generateDate();

  while ((dateTimeStartEvent.isAfter(dateTimeEndEvent) && !(dayjs__WEBPACK_IMPORTED_MODULE_0___default()(dateTimeStartEvent).isSame(dayjs__WEBPACK_IMPORTED_MODULE_0___default()(dateTimeEndEvent))))) {
    dateTimeEndEvent = generateDate();
  }

  return {
    id: Object(nanoid__WEBPACK_IMPORTED_MODULE_1__["nanoid"])(),
    pointType: generatePointTypes(),
    destinationCity: generateDestinationCity(),
    offers: generateOffers(),
    destinationInfo: [{
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`,
      photos: generatePhotos(),
    }],
    dateTimeStartEvent,
    dateTimeEndEvent,
    cost: Object(_utils_common__WEBPACK_IMPORTED_MODULE_2__["getRandomInteger"])(_const__WEBPACK_IMPORTED_MODULE_3__["OfferCost"].FROM, _const__WEBPACK_IMPORTED_MODULE_3__["OfferCost"].TO),
    isFavorite: Boolean(Object(_utils_common__WEBPACK_IMPORTED_MODULE_2__["getRandomInteger"])(0, 1)),
  };
};


/***/ }),

/***/ "./src/mock/sorting.js":
/*!*****************************!*\
  !*** ./src/mock/sorting.js ***!
  \*****************************/
/*! exports provided: generateSorting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateSorting", function() { return generateSorting; });
const generateSorting = () => {
  const sorting = [{
    name: `day`,
    isChecked: true,
    isDisabled: false,
  },
  {
    name: `event`,
    isChecked: false,
    isDisabled: true,
  },
  {
    name: `time`,
    isChecked: false,
    isDisabled: false,
  },
  {
    name: `price`,
    isChecked: false,
    isDisabled: false,
  },
  {
    name: `offers`,
    isChecked: false,
    isDisabled: true,
  }];

  return sorting;
};


/***/ }),

/***/ "./src/mock/tabs.js":
/*!**************************!*\
  !*** ./src/mock/tabs.js ***!
  \**************************/
/*! exports provided: generateTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateTab", function() { return generateTab; });
const generateTab = () => {
  const tabs = [`Table`, `Stats`];

  return tabs;
};


/***/ }),

/***/ "./src/presenter/point.js":
/*!********************************!*\
  !*** ./src/presenter/point.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Point; });
/* harmony import */ var _view_point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/point */ "./src/view/point.js");
/* harmony import */ var _view_point_edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/point-edit */ "./src/view/point-edit.js");
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/render */ "./src/utils/render.js");





const Key = {
  ESCAPE: `Escape`,
  ESC: `Esc`,
};

const Mode = {
  DEFAULT: `DEFAULT`,
  EDITING: `EDITING`,
};

class Point {
  constructor(tripListContainer, changeData, changeMode) {
    this._tripListContainer = tripListContainer;
    this._changeData = changeData;
    this._changeMode = changeMode;

    this._pointComponent = null;
    this._pointEditComponent = null;
    this._mode = Mode.DEFAULT;

    this._onRollupButtonClick = this._onRollupButtonClick.bind(this);
    this._onFavoriteClick = this._onFavoriteClick.bind(this);
    this._onFormSubmitClick = this._onFormSubmitClick.bind(this);
    this._onEscKeyDown = this._onEscKeyDown.bind(this);
  }

  init(point) {
    this._point = point;

    const prevPointComponent = this._pointComponent;
    const prevPointEditComponent = this._pointEditComponent;

    this._pointComponent = new _view_point__WEBPACK_IMPORTED_MODULE_0__["default"](point);
    this._pointEditComponent = new _view_point_edit__WEBPACK_IMPORTED_MODULE_1__["default"](point);

    this._pointComponent.setOnRollupButtonClick(this._onRollupButtonClick);
    this._pointComponent.setOnFavoriteClick(this._onFavoriteClick);
    this._pointEditComponent.setOnFormSubmitClick(this._onFormSubmitClick);

    if (prevPointComponent === null || prevPointEditComponent === null) {
      Object(_utils_render__WEBPACK_IMPORTED_MODULE_2__["render"])(this._tripListContainer, this._pointComponent, _utils_render__WEBPACK_IMPORTED_MODULE_2__["RenderPosition"].BEFOREEND);
      return;
    }

    if (this._mode === Mode.DEFAULT) {
      Object(_utils_render__WEBPACK_IMPORTED_MODULE_2__["replace"])(this._pointComponent, prevPointComponent);
    }

    if (this._mode === Mode.EDITING) {
      Object(_utils_render__WEBPACK_IMPORTED_MODULE_2__["replace"])(this._pointEditComponent, prevPointEditComponent);
    }

    Object(_utils_render__WEBPACK_IMPORTED_MODULE_2__["remove"])(prevPointComponent);
    Object(_utils_render__WEBPACK_IMPORTED_MODULE_2__["remove"])(prevPointEditComponent);
  }

  destroy() {
    Object(_utils_render__WEBPACK_IMPORTED_MODULE_2__["remove"])(this._pointComponent);
    Object(_utils_render__WEBPACK_IMPORTED_MODULE_2__["remove"])(this._pointEditComponent);
  }

  resetView() {
    if (this._mode !== Mode.DEFAULT) {
      this._replaceFormToPoint();
    }
  }

  _replacePointToForm() {
    Object(_utils_render__WEBPACK_IMPORTED_MODULE_2__["replace"])(this._pointEditComponent, this._pointComponent);
    document.addEventListener(`keydown`, this._onEscKeyDown);
    this._changeMode();
    this._mode = Mode.EDITING;
  }

  _replaceFormToPoint() {
    Object(_utils_render__WEBPACK_IMPORTED_MODULE_2__["replace"])(this._pointComponent, this._pointEditComponent);
    document.removeEventListener(`keydown`, this._onEscKeyDown);
    this._mode = Mode.DEFAULT;
  }

  _onEscKeyDown(evt) {
    if (evt.key === Key.ESCAPE || evt.key === Key.ESC) {
      evt.preventDefault();
      this._replaceFormToPoint();
    }
  }

  _onRollupButtonClick() {
    this._replacePointToForm();
  }

  _onFavoriteClick() {
    this._changeData(
        Object.assign(
            {},
            this._point,
            {
              isFavorite: !this._point.isFavorite
            }
        )
    );
  }

  _onFormSubmitClick(point) {
    this._changeData(point);
    this._replaceFormToPoint();
  }
}


/***/ }),

/***/ "./src/presenter/trip.js":
/*!*******************************!*\
  !*** ./src/presenter/trip.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Trip; });
/* harmony import */ var _view_trip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/trip */ "./src/view/trip.js");
/* harmony import */ var _view_sorting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/sorting */ "./src/view/sorting.js");
/* harmony import */ var _view_no_point__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/no-point */ "./src/view/no-point.js");
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./point */ "./src/presenter/point.js");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/common */ "./src/utils/common.js");
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/render */ "./src/utils/render.js");









class Trip {
  constructor(tripContainer, sorting) {
    this._tripContainer = tripContainer;
    this._pointPresenter = {};

    this._sorting = sorting;
    this._points = null;

    this._tripListComponent = new _view_trip__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this._sortingComponent = new _view_sorting__WEBPACK_IMPORTED_MODULE_1__["default"](this._sorting);
    this._noPointComponent = new _view_no_point__WEBPACK_IMPORTED_MODULE_2__["default"]();

    this._onPointChange = this._onPointChange.bind(this);
    this._onModeChange = this._onModeChange.bind(this);
  }

  init(points) {
    this._points = points;
    this._renderTrip();
  }

  _onModeChange() {
    Object
      .values(this._pointPresenter)
      .forEach((presenter) => presenter.resetView());
  }

  _onPointChange(updatedPoint) {
    this._points = Object(_utils_common__WEBPACK_IMPORTED_MODULE_4__["updateItem"])(this._points, updatedPoint);
    this._pointPresenter[updatedPoint.id].init(updatedPoint);
  }

  _renderSort() {
    Object(_utils_render__WEBPACK_IMPORTED_MODULE_5__["render"])(this._tripContainer, this._sortingComponent, _utils_render__WEBPACK_IMPORTED_MODULE_5__["RenderPosition"].BEFOREEND);
  }

  _renderPoint(point) {
    const pointPresenter = new _point__WEBPACK_IMPORTED_MODULE_3__["default"](this._tripListComponent, this._onPointChange, this._onModeChange);
    pointPresenter.init(point);
    this._pointPresenter[point.id] = pointPresenter;
  }

  _renderPoints() {
    this._points.forEach((point) => this._renderPoint(point));
  }

  _renderNoPoints() {
    Object(_utils_render__WEBPACK_IMPORTED_MODULE_5__["render"])(this._tripContainer, this._noPointComponent, _utils_render__WEBPACK_IMPORTED_MODULE_5__["RenderPosition"].BEFOREEND);
  }

  _clearTaskList() {
    Object
      .values(this._pointPresenter)
      .forEach((presenter) => presenter.destroy());
    this._pointPresenter = {};
  }

  _renderTrip() {
    if (this._points.length === 0) {
      this._renderNoPoints();
      return;
    }

    this._renderSort();

    Object(_utils_render__WEBPACK_IMPORTED_MODULE_5__["render"])(this._tripContainer, this._tripListComponent, _utils_render__WEBPACK_IMPORTED_MODULE_5__["RenderPosition"].BEFOREEND);

    this._renderPoints();
  }
}


/***/ }),

/***/ "./src/utils/common.js":
/*!*****************************!*\
  !*** ./src/utils/common.js ***!
  \*****************************/
/*! exports provided: getRandomInteger, updateItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomInteger", function() { return getRandomInteger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateItem", function() { return updateItem; });
// Функция из интернета по генерации случайного числа из диапазона
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random
const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const updateItem = (items, updatedItems) => {
  const index = items.findIndex((item) => item.id === updatedItems.id);

  if (index === -1) {
    return items;
  }

  return [
    ...items.slice(0, index),
    updatedItems,
    ...items.slice(index + 1)
  ];
};


/***/ }),

/***/ "./src/utils/render.js":
/*!*****************************!*\
  !*** ./src/utils/render.js ***!
  \*****************************/
/*! exports provided: RenderPosition, render, renderTemplate, createElement, replace, remove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderPosition", function() { return RenderPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderTemplate", function() { return renderTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return replace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony import */ var _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/abstract.js */ "./src/view/abstract.js");


const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`
};

const render = (container, child, place) => {
  let receivedContainer = container;
  let receivedChild = child;

  if (container instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    receivedContainer = container.getElement();
  }

  if (child instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    receivedChild = child.getElement();
  }

  switch (place) {
    case RenderPosition.AFTERBEGIN:
      receivedContainer.prepend(receivedChild);
      break;
    case RenderPosition.BEFOREEND:
      receivedContainer.append(receivedChild);
      break;
    default:
      throw new Error(`Unknown place of insert a DOM-element: '${place}'!`);
  }
};

const renderTemplate = (container, template, place) => {
  if (container instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    container = container.getElement();
  }

  container.insertAdjacentHTML(place, template);
};

/**
 * Принцип работы прост:
 * 1. создаём пустой div-блок
 * 2. берём HTML в виде строки и вкладываем в этот div-блок, превращая в DOM-элемент
 * @return 3. возвращаем этот DOM-элемент
 */

const createElement = (template) => {
  const newElement = document.createElement(`div`); // 1
  newElement.innerHTML = template; // 2

  return newElement.firstChild; // 3
};

const replace = (newChild, oldChild) => {
  if (oldChild instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    oldChild = oldChild.getElement();
  }

  if (newChild instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    newChild = newChild.getElement();
  }

  const parent = oldChild.parentElement;

  if (parent === null || oldChild === null || newChild === null) {
    throw new Error(`Can't replace unexisting elements`);
  }

  parent.replaceChild(newChild, oldChild);
};

const remove = (component) => {
  if (!(component instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"])) {
    throw new Error(`Can remove only components`);
  }

  component.getElement().remove();
  component.removeElement();
};


/***/ }),

/***/ "./src/view/abstract.js":
/*!******************************!*\
  !*** ./src/view/abstract.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Abstract; });
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/render.js */ "./src/utils/render.js");


class Abstract {
  constructor() {
    if (new.target === Abstract) {
      throw new Error(`Can't instantiate Abstract, only concrete one.`);
    }

    this._element = null;
    this._callback = {};
  }

  getTemplate() {
    throw new Error(`Abstract method not implemented: getTemplate`);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/controls.js":
/*!******************************!*\
  !*** ./src/view/controls.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Controls; });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");


const createFilterTemplate = (filter) => {
  return `<div class="trip-filters__filter">
  <input id="filter-${filter.name}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${filter.name}" ${filter.isChecked ? `checked` : ``}>
  <label class="trip-filters__filter-label" for="filter-${filter.name}">${filter.name}</label>
  </div>`;
};

const createFilters = (filters) => {
  const template = filters
  .map((filter) => createFilterTemplate(filter))
  .join(``);

  return `<form class="trip-filters" action="#" method="get">${template}</form>`;
};

const createTabsTemplate = (tabs, filters) => {
  const [table, stats] = tabs;
  return `<div class="trip-main__trip-controls  trip-controls">
    <h2 class="visually-hidden">Switch trip view</h2>
    <nav class="trip-controls__trip-tabs  trip-tabs">
      <a class="trip-tabs__btn" href="#">${table}</a>
      <a class="trip-tabs__btn  trip-tabs__btn--active" href="#">${stats}</a>
    </nav>
    ${createFilters(filters)}
  </div>`;
};

class Controls extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(tabs, filters) {
    super();
    this._tabs = tabs;
    this._filters = filters;
  }

  getTemplate() {
    return createTabsTemplate(this._tabs, this._filters);
  }
}


/***/ }),

/***/ "./src/view/info.js":
/*!**************************!*\
  !*** ./src/view/info.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Info; });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);



const DestinationCity = {
  ONE: 1,
  TWO: 2,
};

const createInfoTemplate = (info) => {
  const {destinationCities, dateTimeStartEvent, dateTimeEndEvent, cost} = info;

  const dateStart = dateTimeStartEvent !== null
    ? dayjs__WEBPACK_IMPORTED_MODULE_1___default()(dateTimeStartEvent).format(`MMM DD`)
    : ``;

  const dateEnd = dateTimeEndEvent !== null
    ? dayjs__WEBPACK_IMPORTED_MODULE_1___default()(dateTimeEndEvent).format(`MMM DD`)
    : ``;

  let listCities = ``;
  if (destinationCities.length === DestinationCity.ONE) {
    listCities = destinationCities[0];
  }
  if (destinationCities.length === DestinationCity.TWO) {
    listCities = destinationCities[0] + ` - ` + destinationCities[1];
  }
  if (destinationCities.length > DestinationCity.TWO) {
    listCities = destinationCities[0] + ` - ... - ` + destinationCities[destinationCities.length - 1];
  }

  return `<section class="trip-main__trip-info  trip-info">
    <div class="trip-info__main">
      <h1 class="trip-info__title">${listCities}</h1>

      <p class="trip-info__dates">${dateStart} - ${dateEnd}</p>
    </div>
    <p class="trip-info__cost">
      Total: &euro;&nbsp;<span class="trip-info__cost-value">${cost}</span>
    </p>
  </section>`;
};

class Info extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(info) {
    super();
    this._info = info;
  }

  getTemplate() {
    return createInfoTemplate(this._info);
  }
}


/***/ }),

/***/ "./src/view/new-event-button.js":
/*!**************************************!*\
  !*** ./src/view/new-event-button.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NewEventButton; });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");


const createButtonTemplate = () => {
  return `<button class="trip-main__event-add-btn  btn  btn--big  btn--yellow" type="button">New event</button>`;
};

class NewEventButton extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createButtonTemplate();
  }
}


/***/ }),

/***/ "./src/view/no-point.js":
/*!******************************!*\
  !*** ./src/view/no-point.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NoPoint; });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");


const createNoPointTemplate = () => {
  return `<p class="trip-events__msg">Click New Event to create your first point</p>`;
};

class NoPoint extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createNoPointTemplate();
  }
}


/***/ }),

/***/ "./src/view/point-description.js":
/*!***************************************!*\
  !*** ./src/view/point-description.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PointDescription; });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");


const createPointDescriptionTemplate = (offer) => {
  const {destinationCity, destinationInfo} = offer;

  return `<p class="event__destination-description">${destinationCity} ${destinationInfo[0].description}</p>`;
};

class PointDescription extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(offer) {
    super();
    this._offer = offer;
  }

  getTemplate() {
    return createPointDescriptionTemplate(this._offer);
  }
}


/***/ }),

/***/ "./src/view/point-edit.js":
/*!********************************!*\
  !*** ./src/view/point-edit.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PointEditContainer; });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/render */ "./src/utils/render.js");
/* harmony import */ var _point_header_edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./point-header-edit */ "./src/view/point-header-edit.js");
/* harmony import */ var _point_description__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./point-description */ "./src/view/point-description.js");
/* harmony import */ var _point_photos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./point-photos */ "./src/view/point-photos.js");






const createAvailableOfferTemplate = (offer) => {
  return `<div class="event__offer-selector">
  <input class="event__offer-checkbox  visually-hidden" id="event-offer-${offer.condition}-1" type="checkbox" name="event-offer-${offer.condition}" ${offer.isChecked ? `checked` : ``}>
  <label class="event__offer-label" for="event-offer-${offer.condition}-1">
    <span class="event__offer-title">Add ${offer.condition}</span>
    &plus;&euro;&nbsp;
  <span class="event__offer-price">${offer.cost}</span>
  </label>
</div>`;
};

const createPointEditContainerTemplate = (point) => {
  let options = point.offers
  .map((offer) => createAvailableOfferTemplate(offer))
  .join(``);

  return `<li class="trip-events__item">
  <form class="event event--edit" action="#" method="post">
    <section class="event__details">
      <section class="event__section  event__section--offers">
        <h3 class="event__section-title  event__section-title--offers">Offers</h3>

        <div class="event__available-offers">${options}</div>
      </section>

      <section class="event__section  event__section--destination">
        <h3 class="event__section-title  event__section-title--destination">Destination</h3>

      </section>
    </section>
  </form>
  </li>`;
};

class PointEditContainer extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(point) {
    super();
    this._point = point;
    this._editForm = null;
    this._headerEditContainer = null;
    this._descriptionContainer = null;
    this._description = null;
    this._photos = null;
    this._onFormSubmitClick = this._onFormSubmitClick.bind(this);
    this._callback = {};
  }

  getTemplate() {
    return createPointEditContainerTemplate(this._point);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_render__WEBPACK_IMPORTED_MODULE_1__["createElement"])(this.getTemplate());

      this._editForm = this._element.querySelector(`.event--edit`);
      this._headerEditContainer = new _point_header_edit__WEBPACK_IMPORTED_MODULE_2__["default"](this._point).getElement();
      Object(_utils_render__WEBPACK_IMPORTED_MODULE_1__["render"])(this._editForm, this._headerEditContainer, _utils_render__WEBPACK_IMPORTED_MODULE_1__["RenderPosition"].AFTERBEGIN);

      this._descriptionContainer = this._element.querySelector(`.event__section--destination`);
      this._description = new _point_description__WEBPACK_IMPORTED_MODULE_3__["default"](this._point).getElement();
      Object(_utils_render__WEBPACK_IMPORTED_MODULE_1__["render"])(this._descriptionContainer, this._description, _utils_render__WEBPACK_IMPORTED_MODULE_1__["RenderPosition"].BEFOREEND);

      this._photos = new _point_photos__WEBPACK_IMPORTED_MODULE_4__["default"](this._point).getElement();
      Object(_utils_render__WEBPACK_IMPORTED_MODULE_1__["render"])(this._descriptionContainer, this._photos, _utils_render__WEBPACK_IMPORTED_MODULE_1__["RenderPosition"].BEFOREEND);
    }

    return this._element;
  }

  _onFormSubmitClick(evt) {
    evt.preventDefault();
    this._callback.onFormSubmitClick(this._point);
  }

  setOnFormSubmitClick(callback) {
    this._callback.onFormSubmitClick = callback;
    this.getElement().querySelector(`.event--edit`).addEventListener(`submit`, this._onFormSubmitClick);
  }
}


/***/ }),

/***/ "./src/view/point-header-edit.js":
/*!***************************************!*\
  !*** ./src/view/point-header-edit.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PointHeaderEdit; });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../const */ "./src/const.js");





const createPointTemplate = (pointType) => {
  return `<div class="event__type-item">
  <input id="event-type-${pointType}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${pointType}">
  <label class="event__type-label  event__type-label--${pointType}" for="event-type-${pointType}-1" style="::before">${pointType}</label>
</div>`;
};

const createDestinationCityTemplate = (destinationCity) => {
  return `<option value="${destinationCity}"></option>`;
};

const createPointHeaderEditTemplate = (point) => {
  const {pointType, destinationCity, dateTimeStartEvent, dateTimeEndEvent, cost} = point;

  const dateStart = dateTimeStartEvent !== null
    ? dayjs__WEBPACK_IMPORTED_MODULE_1___default()(dateTimeStartEvent).format(`DD/MM/YY HH:mm`)
    : ``;

  const dateEnd = dateTimeEndEvent !== null
    ? dayjs__WEBPACK_IMPORTED_MODULE_1___default()(dateTimeEndEvent).format(`DD/MM/YY HH:mm`)
    : ``;


  const pointsTypeList = _const__WEBPACK_IMPORTED_MODULE_2__["POINT_TYPES"]
  .map((pointTypeItem) => createPointTemplate(pointTypeItem))
  .join(``);

  const citiesList = _const__WEBPACK_IMPORTED_MODULE_2__["DESTINATION_CITIES"]
  .map((destinationCityItem) => createDestinationCityTemplate(destinationCityItem))
  .join(``);

  return `<header class="event__header">
    <div class="event__type-wrapper">
      <label class="event__type  event__type-btn" for="event-type-toggle-1">
        <span class="visually-hidden">Choose event type</span>
        <img class="event__type-icon" width="17" height="17" src="img/icons/${pointType}.png" alt="Event type icon">
      </label>
      <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

      <div class="event__type-list">
        <fieldset class="event__type-group">
          <legend class="visually-hidden">Event type</legend>
          ${pointsTypeList}
        </fieldset>
      </div>
    </div>

    <div class="event__field-group  event__field-group--destination">
      <label class="event__label  event__type-output" for="event-destination-1">
        ${pointType}
      </label>
      <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${destinationCity}" list="destination-list-1">
      <datalist id="destination-list-1">
        ${citiesList}
      </datalist>
    </div>

    <div class="event__field-group  event__field-group--time">
      <label class="visually-hidden" for="event-start-time-1">From</label>
      <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${dateStart}">
      &mdash;
      <label class="visually-hidden" for="event-end-time-1">To</label>
      <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${dateEnd}">
    </div>

    <div class="event__field-group  event__field-group--price">
      <label class="event__label" for="event-price-1">
        <span class="visually-hidden">Price</span>
        &euro;
      </label>
      <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${cost}">
    </div>

    <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
    <button class="event__reset-btn" type="reset">Delete</button>
    <button class="event__rollup-btn" type="button">
      <span class="visually-hidden">Open event</span>
    </button>
  </header>`;
};

class PointHeaderEdit extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(point) {
    super();
    this._point = point;
  }

  getTemplate() {
    return createPointHeaderEditTemplate(this._point);
  }
}


/***/ }),

/***/ "./src/view/point-photos.js":
/*!**********************************!*\
  !*** ./src/view/point-photos.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PointPhotos; });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");


const createPointPhotosTemplate = (point) => {
  const createPhotoTemplate = (photo) => {
    return `<img class="event__photo" src="${photo}" alt="Event photo">`;
  };

  const photos = point.destinationInfo[0].photos;

  let photosList = photos
  .map((photo) => createPhotoTemplate(photo))
  .join(``);

  return `<div class="event__photos-container">
    <div class="event__photos-tape">
    ${photosList}
    </div>
  </div>`;
};

class PointPhotos extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(point) {
    super();
    this._point = point;
  }

  getTemplate() {
    return createPointPhotosTemplate(this._point);
  }
}


/***/ }),

/***/ "./src/view/point.js":
/*!***************************!*\
  !*** ./src/view/point.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Point; });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);



const Duration = {
  ONE_HOUR: 60,
  ONE_DAY: 1440,
};

const TWO_DIGITS = 10;

const convertDateTime = (diffDateTime) => {
  if (diffDateTime <= Duration.ONE_HOUR) {
    return `${diffDateTime < TWO_DIGITS ? `0${diffDateTime}M` : `${diffDateTime}M`}`;
  }
  if (diffDateTime > Duration.ONE_HOUR && diffDateTime <= Duration.ONE_DAY) {
    const hours = Math.trunc(diffDateTime / Duration.ONE_HOUR);
    const minutes = diffDateTime - (hours * Duration.ONE_HOUR);
    return `${hours < TWO_DIGITS ? `0${hours}` : `${hours}`}H
            ${minutes < TWO_DIGITS ? `0${minutes}` : `${minutes}`}M`;
  }
  const days = Math.trunc(diffDateTime / Duration.ONE_DAY);
  const hours = Math.trunc((diffDateTime - (days * Duration.ONE_DAY)) / Duration.ONE_HOUR);
  const minutes = (diffDateTime - (days * Duration.ONE_DAY)) - (hours * Duration.ONE_HOUR);
  return `${days < TWO_DIGITS ? `0${days}` : `${days}`}D
          ${hours < TWO_DIGITS ? `0${hours}` : `${hours}`}H
          ${minutes < TWO_DIGITS ? `0${minutes}` : `${minutes}`}M`;
};

const formatDateTime = (dateTimeStartEvent, dateTimeEndEvent) => {
  const eventDate = {};

  eventDate.dateStart = dateTimeStartEvent !== null
    ? dayjs__WEBPACK_IMPORTED_MODULE_1___default()(dateTimeStartEvent).format(`MMM DD`)
    : ``;

  eventDate.timeStart = dateTimeStartEvent !== null
    ? dayjs__WEBPACK_IMPORTED_MODULE_1___default()(dateTimeStartEvent).format(`HH:MM`)
    : ``;

  eventDate.timeEnd = dateTimeEndEvent !== null
    ? dayjs__WEBPACK_IMPORTED_MODULE_1___default()(dateTimeEndEvent).format(`HH:MM`)
    : ``;

  eventDate.machineDateStart = dateTimeStartEvent !== null
    ? dayjs__WEBPACK_IMPORTED_MODULE_1___default()(dateTimeStartEvent).format(`YYYY-MM-DD`)
    : ``;

  eventDate.machineDateTimeStart = dateTimeStartEvent !== null
    ? dayjs__WEBPACK_IMPORTED_MODULE_1___default()(dateTimeStartEvent).format(`YYYY-MM-DDTHH:MM`)
    : ``;

  eventDate.machineDateTimeEnd = dateTimeEndEvent !== null
    ? dayjs__WEBPACK_IMPORTED_MODULE_1___default()(dateTimeEndEvent).format(`YYYY-MM-DDTHH:MM`)
    : ``;

  return eventDate;
};

const createSelectedOfferTemplate = (offer) => {
  return `<li class="event__offer">
    <span class="event__offer-title">${offer.condition}</span>
    &plus;&euro;&nbsp;
    <span class="event__offer-price">${offer.cost}</span>
  </li>`;
};

const createPointTemplate = (point) => {
  const {pointType, destinationCity, dateTimeStartEvent, dateTimeEndEvent, cost, offers, isFavorite} = point;

  const eventDate = formatDateTime(dateTimeStartEvent, dateTimeEndEvent);

  const diffDateTime = (dateTimeStartEvent !== null && dateTimeEndEvent)
    ? dateTimeEndEvent.diff(dateTimeStartEvent, `minute`)
    : ``;

  const dateTime = convertDateTime(diffDateTime);

  const options = offers
  .map((offer) => createSelectedOfferTemplate(offer))
  .join(``);

  return `<li class="trip-events__item">
    <div class="event">
      <time class="event__date" datetime="${eventDate.machineDateStart}">${eventDate.dateStart}</time>
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/${pointType}.png" alt="Event type icon">
      </div>
      <h3 class="event__title">${pointType} ${destinationCity}</h3>
      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime="${eventDate.machineDateTimeStart}">${eventDate.timeStart}</time>
          &mdash;
          <time class="event__end-time" datetime="${eventDate.machineDateTimeEnd}">${eventDate.timeEnd}</time>
        </p>
        <p class="event__duration">${dateTime}</p>
      </div>
      <p class="event__price">
        &euro;&nbsp;<span class="event__price-value">${cost}</span>
      </p>
      <h4 class="visually-hidden">Offers:</h4>
      <ul class="event__selected-offers">
        ${options}
      </ul>
      <button class="event__favorite-btn ${isFavorite ? `event__favorite-btn--active` : ``}" type="button">
        <span class="visually-hidden">Add to favorite</span>
        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
          <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
        </svg>
      </button>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </div>
  </li>`;
};

class Point extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(point) {
    super();
    this._point = point;
    this._onRollupButtonClick = this._onRollupButtonClick.bind(this);
    this._onFavoriteClick = this._onFavoriteClick.bind(this);
    this._callback = {};
  }

  getTemplate() {
    return createPointTemplate(this._point);
  }

  _onRollupButtonClick(evt) {
    evt.preventDefault();
    this._callback.onRollupButtonClick();
  }

  setOnRollupButtonClick(callback) {
    this._callback.onRollupButtonClick = callback;
    this.getElement().querySelector(`.event__rollup-btn`).addEventListener(`click`, this._onRollupButtonClick);
  }

  _onFavoriteClick(evt) {
    evt.preventDefault();
    this._callback.onFavoriteClick();
  }

  setOnFavoriteClick(callback) {
    this._callback.onFavoriteClick = callback;
    this.getElement().querySelector(`.event__favorite-btn`).addEventListener(`click`, this._onFavoriteClick);
  }
}


/***/ }),

/***/ "./src/view/sorting-element.js":
/*!*************************************!*\
  !*** ./src/view/sorting-element.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SortingElement; });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");


const createSortingTemplate = (sorting) => {
  return `<div class="trip-sort__item  trip-sort__item--${sorting.name}">
      <input id="sort-${sorting.name}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${sorting.name}" ${sorting.isChecked ? `checked` : ``} ${sorting.isDisabled ? `disabled` : ``}>
      <label class="trip-sort__btn" for="sort-${sorting.name}">${sorting.name}</label>
    </div>`;
};

class SortingElement extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(sorting) {
    super();
    this._sorting = sorting;
  }

  getTemplate() {
    return createSortingTemplate(this._sorting);
  }
}


/***/ }),

/***/ "./src/view/sorting.js":
/*!*****************************!*\
  !*** ./src/view/sorting.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sorting; });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/render */ "./src/utils/render.js");
/* harmony import */ var _sorting_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sorting-element */ "./src/view/sorting-element.js");




const createSortingContainerTemplate = () => {
  return `<form class="trip-events__trip-sort  trip-sort" action="#" method="get"></form>`;
};

class Sorting extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(sorting) {
    super();
    this._sorting = sorting;
  }

  getTemplate() {
    return createSortingContainerTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_render__WEBPACK_IMPORTED_MODULE_1__["createElement"])(this.getTemplate());

      const fragment = document.createDocumentFragment();
      for (const sort of this._sorting) {
        fragment.appendChild(new _sorting_element__WEBPACK_IMPORTED_MODULE_2__["default"](sort).getElement());
      }

      Object(_utils_render__WEBPACK_IMPORTED_MODULE_1__["render"])(this._element, fragment, _utils_render__WEBPACK_IMPORTED_MODULE_1__["RenderPosition"].BEFOREEND);
    }

    return this._element;
  }

}


/***/ }),

/***/ "./src/view/trip.js":
/*!**************************!*\
  !*** ./src/view/trip.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Trip; });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");


const createTripTemplate = () => {
  return `<ul class="trip-events__list"></ul>`;
};

class Trip extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createTripTemplate();
  }
}


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map