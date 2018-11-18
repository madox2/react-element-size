"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = useElementSize;

var _react = require("react");

var _resizeObserverPolyfill = require("resize-observer-polyfill");

var _resizeObserverPolyfill2 = _interopRequireDefault(_resizeObserverPolyfill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function useElementSize() {
  var _useState = (0, _react.useState)({}),
      _useState2 = _slicedToArray(_useState, 2),
      contentRect = _useState2[0],
      setContentRect = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      ref = _useState4[0],
      setRef = _useState4[1];

  (0, _react.useEffect)(function observeContentRectEffect() {
    if (!ref) {
      return;
    }
    var observer = new _resizeObserverPolyfill2.default(function (entries) {
      setContentRect(entries[0].contentRect);
    });
    observer.observe(ref);
    return function observeContentRectEffectCleanup() {
      observer.disconnect(ref);
    };
  }, [ref]);
  var width = contentRect.width,
      height = contentRect.height;

  return { size: { width: width, height: height }, setRef: setRef, ref: ref };
}