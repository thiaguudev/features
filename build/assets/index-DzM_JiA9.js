function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r &&
      (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })),
      t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2
      ? ownKeys(Object(t), !0).forEach(function (r) {
          _defineProperty(e, r, t[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
        : ownKeys(Object(t)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
          });
  }
  return e;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _regeneratorRuntime() {
  'use strict';
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime =
    function _regeneratorRuntime() {
      return e;
    };
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o =
      Object.defineProperty ||
      function (t, e, r) {
        t[e] = r.value;
      },
    i = 'function' == typeof Symbol ? Symbol : {},
    a = i.iterator || '@@iterator',
    c = i.asyncIterator || '@@asyncIterator',
    u = i.toStringTag || '@@toStringTag';
  function define(t, e, r) {
    return (
      Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0,
      }),
      t[e]
    );
  }
  try {
    define({}, '');
  } catch (t) {
    define = function define(t, e, r) {
      return (t[e] = r);
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, '_invoke', { value: makeInvokeMethod(t, r, c) }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return { type: 'normal', arg: t.call(e, r) };
    } catch (t) {
      return { type: 'throw', arg: t };
    }
  }
  e.wrap = wrap;
  var h = 'suspendedStart',
    l = 'suspendedYield',
    f = 'executing',
    s = 'completed',
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g =
    (GeneratorFunctionPrototype.prototype =
    Generator.prototype =
      Object.create(p));
  function defineIteratorMethods(t) {
    ['next', 'throw', 'return'].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ('throw' !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && 'object' == _typeof(h) && n.call(h, '__await')
          ? e.resolve(h.__await).then(
              function (t) {
                invoke('next', t, i, a);
              },
              function (t) {
                invoke('throw', t, i, a);
              },
            )
          : e.resolve(h).then(
              function (t) {
                (u.value = t), i(u);
              },
              function (t) {
                return invoke('throw', t, i, a);
              },
            );
      }
      a(c.arg);
    }
    var r;
    o(this, '_invoke', {
      value: function value(t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return (r = r
          ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg)
          : callInvokeWithMethodAndArg());
      },
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw new Error('Generator is already running');
      if (o === s) {
        if ('throw' === i) throw a;
        return { value: t, done: !0 };
      }
      for (n.method = i, n.arg = a; ; ) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ('next' === n.method) n.sent = n._sent = n.arg;
        else if ('throw' === n.method) {
          if (o === h) throw ((o = s), n.arg);
          n.dispatchException(n.arg);
        } else 'return' === n.method && n.abrupt('return', n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ('normal' === p.type) {
          if (((o = n.done ? s : l), p.arg === y)) continue;
          return { value: p.arg, done: n.done };
        }
        'throw' === p.type && ((o = s), (n.method = 'throw'), (n.arg = p.arg));
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t)
      return (
        (r.delegate = null),
        ('throw' === n &&
          e.iterator.return &&
          ((r.method = 'return'),
          (r.arg = t),
          maybeInvokeDelegate(e, r),
          'throw' === r.method)) ||
          ('return' !== n &&
            ((r.method = 'throw'),
            (r.arg = new TypeError(
              "The iterator does not provide a '" + n + "' method",
            )))),
        y
      );
    var i = tryCatch(o, e.iterator, r.arg);
    if ('throw' === i.type)
      return (r.method = 'throw'), (r.arg = i.arg), (r.delegate = null), y;
    var a = i.arg;
    return a
      ? a.done
        ? ((r[e.resultName] = a.value),
          (r.next = e.nextLoc),
          'return' !== r.method && ((r.method = 'next'), (r.arg = t)),
          (r.delegate = null),
          y)
        : a
      : ((r.method = 'throw'),
        (r.arg = new TypeError('iterator result is not an object')),
        (r.delegate = null),
        y);
  }
  function pushTryEntry(t) {
    var e = { tryLoc: t[0] };
    1 in t && (e.catchLoc = t[1]),
      2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
      this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    (e.type = 'normal'), delete e.arg, (t.completion = e);
  }
  function Context(t) {
    (this.tryEntries = [{ tryLoc: 'root' }]),
      t.forEach(pushTryEntry, this),
      this.reset(!0);
  }
  function values(e) {
    if (e || '' === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ('function' == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length; )
              if (n.call(e, o))
                return (next.value = e[o]), (next.done = !1), next;
            return (next.value = t), (next.done = !0), next;
          };
        return (i.next = i);
      }
    }
    throw new TypeError(_typeof(e) + ' is not iterable');
  }
  return (
    (GeneratorFunction.prototype = GeneratorFunctionPrototype),
    o(g, 'constructor', {
      value: GeneratorFunctionPrototype,
      configurable: !0,
    }),
    o(GeneratorFunctionPrototype, 'constructor', {
      value: GeneratorFunction,
      configurable: !0,
    }),
    (GeneratorFunction.displayName = define(
      GeneratorFunctionPrototype,
      u,
      'GeneratorFunction',
    )),
    (e.isGeneratorFunction = function (t) {
      var e = 'function' == typeof t && t.constructor;
      return (
        !!e &&
        (e === GeneratorFunction ||
          'GeneratorFunction' === (e.displayName || e.name))
      );
    }),
    (e.mark = function (t) {
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(t, GeneratorFunctionPrototype)
          : ((t.__proto__ = GeneratorFunctionPrototype),
            define(t, u, 'GeneratorFunction')),
        (t.prototype = Object.create(g)),
        t
      );
    }),
    (e.awrap = function (t) {
      return { __await: t };
    }),
    defineIteratorMethods(AsyncIterator.prototype),
    define(AsyncIterator.prototype, c, function () {
      return this;
    }),
    (e.AsyncIterator = AsyncIterator),
    (e.async = function (t, r, n, o, i) {
      void 0 === i && (i = Promise);
      var a = new AsyncIterator(wrap(t, r, n, o), i);
      return e.isGeneratorFunction(r)
        ? a
        : a.next().then(function (t) {
            return t.done ? t.value : a.next();
          });
    }),
    defineIteratorMethods(g),
    define(g, u, 'Generator'),
    define(g, a, function () {
      return this;
    }),
    define(g, 'toString', function () {
      return '[object Generator]';
    }),
    (e.keys = function (t) {
      var e = Object(t),
        r = [];
      for (var n in e) r.push(n);
      return (
        r.reverse(),
        function next() {
          for (; r.length; ) {
            var t = r.pop();
            if (t in e) return (next.value = t), (next.done = !1), next;
          }
          return (next.done = !0), next;
        }
      );
    }),
    (e.values = values),
    (Context.prototype = {
      constructor: Context,
      reset: function reset(e) {
        if (
          ((this.prev = 0),
          (this.next = 0),
          (this.sent = this._sent = t),
          (this.done = !1),
          (this.delegate = null),
          (this.method = 'next'),
          (this.arg = t),
          this.tryEntries.forEach(resetTryEntry),
          !e)
        )
          for (var r in this)
            't' === r.charAt(0) &&
              n.call(this, r) &&
              !isNaN(+r.slice(1)) &&
              (this[r] = t);
      },
      stop: function stop() {
        this.done = !0;
        var t = this.tryEntries[0].completion;
        if ('throw' === t.type) throw t.arg;
        return this.rval;
      },
      dispatchException: function dispatchException(e) {
        if (this.done) throw e;
        var r = this;
        function handle(n, o) {
          return (
            (a.type = 'throw'),
            (a.arg = e),
            (r.next = n),
            o && ((r.method = 'next'), (r.arg = t)),
            !!o
          );
        }
        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
          var i = this.tryEntries[o],
            a = i.completion;
          if ('root' === i.tryLoc) return handle('end');
          if (i.tryLoc <= this.prev) {
            var c = n.call(i, 'catchLoc'),
              u = n.call(i, 'finallyLoc');
            if (c && u) {
              if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
              if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
            } else if (c) {
              if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            } else {
              if (!u) throw new Error('try statement without catch or finally');
              if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
            }
          }
        }
      },
      abrupt: function abrupt(t, e) {
        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
          var o = this.tryEntries[r];
          if (
            o.tryLoc <= this.prev &&
            n.call(o, 'finallyLoc') &&
            this.prev < o.finallyLoc
          ) {
            var i = o;
            break;
          }
        }
        i &&
          ('break' === t || 'continue' === t) &&
          i.tryLoc <= e &&
          e <= i.finallyLoc &&
          (i = null);
        var a = i ? i.completion : {};
        return (
          (a.type = t),
          (a.arg = e),
          i
            ? ((this.method = 'next'), (this.next = i.finallyLoc), y)
            : this.complete(a)
        );
      },
      complete: function complete(t, e) {
        if ('throw' === t.type) throw t.arg;
        return (
          'break' === t.type || 'continue' === t.type
            ? (this.next = t.arg)
            : 'return' === t.type
              ? ((this.rval = this.arg = t.arg),
                (this.method = 'return'),
                (this.next = 'end'))
              : 'normal' === t.type && e && (this.next = e),
          y
        );
      },
      finish: function finish(t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.finallyLoc === t)
            return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
        }
      },
      catch: function _catch(t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.tryLoc === t) {
            var n = r.completion;
            if ('throw' === n.type) {
              var o = n.arg;
              resetTryEntry(r);
            }
            return o;
          }
        }
        throw new Error('illegal catch attempt');
      },
      delegateYield: function delegateYield(e, r, n) {
        return (
          (this.delegate = { iterator: values(e), resultName: r, nextLoc: n }),
          'next' === this.method && (this.arg = t),
          y
        );
      },
    }),
    e
  );
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err);
      }
      _next(undefined);
    });
  };
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ('value' in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, 'prototype', { writable: false });
  return Constructor;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, 'string');
  return 'symbol' == _typeof(i) ? i : String(i);
}
function _toPrimitive(t, r) {
  if ('object' != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || 'default');
    if ('object' != _typeof(i)) return i;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return ('string' === r ? String : Number)(t);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it =
    (typeof Symbol !== 'undefined' && o[Symbol.iterator]) || o['@@iterator'];
  if (!it) {
    if (
      Array.isArray(o) ||
      (it = _unsupportedIterableToArray(o)) ||
      (allowArrayLike && o && typeof o.length === 'number')
    ) {
      if (it) o = it;
      var i = 0;
      var F = function F() {};
      return {
        s: F,
        n: function n() {
          if (i >= o.length) return { done: true };
          return { done: false, value: o[i++] };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F,
      };
    }
    throw new TypeError(
      'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
    );
  }
  var normalCompletion = true,
    didErr = false,
    err;
  return {
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    },
  };
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _typeof(o) {
  '@babel/helpers - typeof';
  return (
    (_typeof =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (o) {
            return typeof o;
          }
        : function (o) {
            return o &&
              'function' == typeof Symbol &&
              o.constructor === Symbol &&
              o !== Symbol.prototype
              ? 'symbol'
              : typeof o;
          }),
    _typeof(o)
  );
}
var p = Object.defineProperty;
var m = function m(s, t, e) {
  return t in s
    ? p(s, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: e,
      })
    : (s[t] = e);
};
var i = function i(s, t, e) {
  return m(s, _typeof(t) != 'symbol' ? t + '' : t, e), e;
};
(function () {
  var t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  var _iterator = _createForOfIteratorHelper(
      document.querySelectorAll('link[rel="modulepreload"]'),
    ),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var n = _step.value;
      o(n);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  new MutationObserver(function (n) {
    var _iterator2 = _createForOfIteratorHelper(n),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
        var r = _step2.value;
        if (r.type === 'childList') {
          var _iterator3 = _createForOfIteratorHelper(r.addedNodes),
            _step3;
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
              var a = _step3.value;
              a.tagName === 'LINK' && a.rel === 'modulepreload' && o(a);
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }).observe(document, {
    childList: !0,
    subtree: !0,
  });
  function e(n) {
    var r = {};
    return (
      n.integrity && (r.integrity = n.integrity),
      n.referrerPolicy && (r.referrerPolicy = n.referrerPolicy),
      n.crossOrigin === 'use-credentials'
        ? (r.credentials = 'include')
        : n.crossOrigin === 'anonymous'
          ? (r.credentials = 'omit')
          : (r.credentials = 'same-origin'),
      r
    );
  }
  function o(n) {
    if (n.ep) return;
    n.ep = !0;
    var r = e(n);
    fetch(n.href, r);
  }
})();
var g = /*#__PURE__*/ (function () {
  function g() {
    _classCallCheck(this, g);
  }
  _createClass(g, null, [
    {
      key: '$post',
      value: (function () {
        var _$post = _asyncToGenerator(
          /*#__PURE__*/ _regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1)
                switch ((_context.prev = _context.next)) {
                  case 0:
                  case 'end':
                    return _context.stop();
                }
            }, _callee);
          }),
        );
        function $post() {
          return _$post.apply(this, arguments);
        }
        return $post;
      })(),
    },
    {
      key: '$get',
      value: (function () {
        var _$get = _asyncToGenerator(
          /*#__PURE__*/ _regeneratorRuntime().mark(function _callee2(t) {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1)
                switch ((_context2.prev = _context2.next)) {
                  case 0:
                    return _context2.abrupt(
                      'return',
                      _objectSpread(
                        _objectSpread({}, t),
                        {},
                        {
                          id: 'sw-85-rp',
                          type: 'nps',
                          hasFeedback: !0,
                          welcomeMessage: 'Welcome. Can you help us?',
                          thanksMessage: 'Thanks for your help!',
                          skipComment: !1,
                          buttonTextColor: 'text-white',
                          buttonBackgroundColor: 'bg-black',
                          isMobile: !0,
                          timeToShow: 0,
                          questions: [
                            {
                              id: 'sw-18-61',
                              type: 'thumbs',
                              question:
                                'How likely is it that you would recommend [Organization X] to a friend or colleague?',
                              required: !0,
                              logic: [],
                              step: 1,
                            },
                            {
                              id: 'sw-18-62',
                              type: 'single-line',
                              question: 'How easy was using Refiner so far?',
                              required: !1,
                              logic: [
                                {
                                  questionId: 'sw-18-64',
                                  from: 3,
                                  to: 7,
                                },
                              ],
                              step: 2,
                            },
                            {
                              id: 'sw-18-63',
                              type: 'multiple-line',
                              question:
                                'On a scale of 1-7, how would you rate the effort it takes to use our X feature?',
                              required: !1,
                              logic: [],
                              step: 3,
                            },
                            {
                              id: 'sw-18-64',
                              isConditional: !0,
                              type: 'multiple-choice',
                              question:
                                'On a scale of 1-7, how easy was it to use the X feature?',
                              required: !0,
                              options: ['one', 'two'],
                              logic: [],
                            },
                          ],
                        },
                      ),
                    );
                  case 1:
                  case 'end':
                    return _context2.stop();
                }
            }, _callee2);
          }),
        );
        function $get(_x) {
          return _$get.apply(this, arguments);
        }
        return $get;
      })(),
    },
  ]);
  return g;
})();
var f = /*#__PURE__*/ (function () {
  function f(t) {
    var _this = this;
    _classCallCheck(this, f);
    i(this, '$el');
    i(this, '$options');
    i(this, '$value');
    (this.$el = document.createElement('div')),
      (this.$options = t),
      this.$options.forEach(function (e) {
        var o = document.createElement('input');
        (o.type = 'radio'),
          (o.name = 'choice'),
          (o.value = e),
          o.addEventListener('change', _this.$onchange.bind(_this));
        var n = document.createElement('label');
        (n.htmlFor = e),
          (n.textContent = e),
          _this.$el.appendChild(o),
          _this.$el.appendChild(n);
      });
  }
  _createClass(f, [
    {
      key: '$onchange',
      value: function $onchange(t) {
        t.target instanceof HTMLInputElement && (this.$value = t.target.value);
      },
    },
  ]);
  return f;
})();
var w = /*#__PURE__*/ (function () {
  function w() {
    _classCallCheck(this, w);
    i(this, '$el');
    this.$el = document.createElement('textarea');
  }
  _createClass(w, [
    {
      key: '$value',
      get: function get() {
        return this.$el.value.trim();
      },
    },
  ]);
  return w;
})();
function l(s, t) {
  return Array.from(
    {
      length: (t - s) / 1 + 1,
    },
    function (e, o) {
      return s + o * 1;
    },
  );
}
function b(s) {
  return Array.isArray(s) && s.length === 0;
}
function y() {
  var s = !1;
  return (
    (function (t) {
      (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
        t,
      ) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
          t.substr(0, 4),
        )) &&
        (s = !0);
    })(navigator.userAgent || navigator.vendor),
    s
  );
}
var v = /*#__PURE__*/ (function () {
  function v(t, e) {
    var _this2 = this;
    _classCallCheck(this, v);
    i(this, '$el');
    i(this, '$value');
    (this.$el = document.createElement('div')),
      this.$el.classList.add('flex', 'items-center', 'justify-center', 'gap-1'),
      l(t, e).forEach(function (o) {
        var n = String(o),
          r = document.createElement('div'),
          a = document.createElement('input'),
          c = document.createElement('label');
        (a.type = 'radio'),
          (a.name = 'choice'),
          (a.value = a.id = a.textContent = c.htmlFor = n),
          a.classList.add('hidden'),
          a.addEventListener('change', _this2.$onchange.bind(_this2)),
          (c.textContent = n),
          c.classList.add(
            'p-3',
            'w-16',
            'text-lg',
            'bg-gray-100',
            'cursor-pointer',
            'rounded-xl',
          ),
          r.appendChild(a),
          r.appendChild(c),
          _this2.$el.appendChild(r);
      });
  }
  _createClass(v, [
    {
      key: '$onchange',
      value: function $onchange(t) {
        t.target instanceof HTMLInputElement && (this.$value = t.target.value);
      },
    },
  ]);
  return v;
})();
var x = /*#__PURE__*/ (function () {
  function x() {
    _classCallCheck(this, x);
    i(this, '$el');
    (this.$el = document.createElement('input')),
      this.$el.addEventListener('change', this.$onchange.bind(this));
  }
  _createClass(x, [
    {
      key: '$onchange',
      value: function $onchange() {
        console.log('onchange');
      },
    },
    {
      key: '$value',
      get: function get() {
        return this.$el.value.trim();
      },
    },
  ]);
  return x;
})();
var k = /*#__PURE__*/ (function () {
  function k() {
    _classCallCheck(this, k);
    i(this, '$el');
    i(this, '$value');
    this.$el = document.createElement('div');
  }
  _createClass(k, [
    {
      key: '$onchange',
      value: function $onchange(t) {
        t.target instanceof HTMLInputElement && (this.$value = t.target.value);
      },
    },
  ]);
  return k;
})();
var C = /*#__PURE__*/ (function () {
  function C() {
    _classCallCheck(this, C);
    i(this, '$el');
    i(this, '$value');
    this.$el = document.createElement('div');
  }
  _createClass(C, [
    {
      key: '$onchange',
      value: function $onchange(t) {
        t.target instanceof HTMLInputElement && (this.$value = t.target.value);
      },
    },
  ]);
  return C;
})();
var L = /*#__PURE__*/ (function () {
  function L() {
    var _this3 = this;
    _classCallCheck(this, L);
    i(this, '$el');
    i(this, '$value');
    (this.$el = document.createElement('div')),
      [0, 1].forEach(function (t) {
        var e = String(t),
          o = document.createElement('div'),
          n = document.createElement('input'),
          r = document.createElement('label');
        (n.type = 'radio'),
          (n.value = e),
          (n.id = e),
          (r.htmlFor = e),
          (r.innerHTML =
            '\n        <svg width="24px" height="24px" viewBox="0 -2.5 64 64" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n          <title>\n            Thumb-up\n          </title>\n          <desc>\n            Created with Sketch.\n          </desc>\n          <defs>\n          </defs>\n          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n            <g id="Thumb-up" sketch:type="MSLayerGroup" transform="translate(1.000000, 2.000000)" stroke="#6B6C6E" stroke-width="2">\n              <path d="M18,20 L2.9,20 C0.1,20 0,22.1 0,24.8 L0,49.1 C0,51.7 0.1,53.9 2.9,53.9 L18,53.9 C20.8,53.9 20.9,51.8 20.9,49.1 L20.9,24.8 C20.9,22.2 20.8,20 18,20 L18,20 Z" id="Shape" sketch:type="MSShapeGroup">\n              </path>\n              <path d="M20.7,50.3 L22.1,50.3 C25.9,50.2 28.4,56 31.3,56 L53.9,56 C56.7,56 57.3,51.8 57.2,50 C57.2,50 60.7,48.4 59.1,42 C59.3,41.9 61.1,40.2 61.1,36.9 C61.1,33.6 59.2,32 59.2,32 C59.2,32 61.1,29.9 61.1,26.8 C61.1,23.7 58.4,22 55.6,22 L47.3,22 C40.1,22 40.7,18.1 40.7,18.1 C40.7,18.1 39.9,8 37.3,3.3 C34.1,-2.5 27.7,-0.6 30.1,7 C31.9,12.6 23.8,21 20.8,23.8" id="Shape" sketch:type="MSShapeGroup">\n              </path>\n            </g>\n          </g>\n        </svg>'),
          n.addEventListener('change', _this3.$onchange.bind(_this3)),
          r.classList.add('cursor-pointer'),
          n.classList.add('hidden'),
          o.classList.add(
            'bg-black',
            'w-12',
            'h-12',
            'flex',
            'justify-center',
            'items-center',
            'rounded-full',
            'cursor-pointer',
          ),
          _this3.$el.classList.add(
            'flex',
            'justify-center',
            'items-center',
            'space-x-3',
          ),
          o.appendChild(n),
          o.appendChild(r),
          _this3.$el.appendChild(o);
      });
  }
  _createClass(L, [
    {
      key: '$onchange',
      value: function $onchange(t) {
        t.target instanceof HTMLInputElement && (this.$value = t.target.value);
      },
    },
  ]);
  return L;
})();
var E = /*#__PURE__*/ (function () {
  function E(_ref) {
    var t = _ref.id,
      e = _ref.type,
      o = _ref.step,
      n = _ref.isConditional,
      r = _ref.question,
      a = _ref.required,
      c = _ref.logic,
      d = _ref.options,
      h = _ref.from,
      $ = _ref.to;
    _classCallCheck(this, E);
    i(this, '$id');
    i(this, '$type');
    i(this, '$step');
    i(this, '$isConditional');
    i(this, '$question');
    i(this, '$required');
    i(this, '$from');
    i(this, '$to');
    i(this, '$logic');
    i(this, '$survey');
    i(this, '$options');
    i(this, '$input');
    (this.$id = t),
      (this.$type = e),
      (this.$step = o),
      (this.$isConditional = n),
      (this.$question = r),
      (this.$required = a),
      (this.$logic = c),
      (this.$from = h),
      (this.$to = $),
      (this.$options = d);
  }
  _createClass(E, [
    {
      key: '$set',
      value: function $set(t) {
        return (this.$survey = t), this;
      },
    },
    {
      key: 'logic',
      get: function get() {
        var _this4 = this;
        return this.$logic.find(function (t) {
          return l(t.from, t.to).includes(+_this4.$input.$value);
        });
      },
    },
    {
      key: '$logical',
      get: function get() {
        return !b(this.$logic);
      },
    },
    {
      key: '$next',
      value: function $next() {
        var t = this.$survey.$style.$button();
        return (t.onclick = this.$survey.$next.bind(this.$survey)), t;
      },
    },
    {
      key: '$render',
      value: function $render() {
        this.$type === 'numeric-scale'
          ? (this.$input = new v(this.$from, this.$to))
          : this.$type === 'single-line'
            ? (this.$input = new x())
            : this.$type === 'multiple-line'
              ? (this.$input = new w())
              : this.$type === 'multiple-choice'
                ? (this.$input = new f(this.$options))
                : this.$type === 'thumbs'
                  ? (this.$input = new L())
                  : this.$type === 'stars'
                    ? (this.$input = new C())
                    : this.$type === 'smileys' && (this.$input = new k());
        var t = this.$survey.$style.$question(),
          e = this.$survey.$style.$text(this.$question),
          o = this.$next();
        return (
          t.appendChild(e), t.appendChild(this.$input.$el), t.appendChild(o), t
        );
      },
    },
  ]);
  return E;
})();
var q = /*#__PURE__*/ (function () {
  function q(t) {
    _classCallCheck(this, q);
    i(this, '$config');
    this.$config = t;
  }
  _createClass(q, [
    {
      key: '$button',
      value: function $button() {
        var t = document.createElement('button');
        return (
          (t.textContent = 'Next'),
          t.classList.add(
            'p-2',
            'w-16',
            'ml-auto',
            'font-bold',
            'rounded-3xl',
            this.$config.buttonTextColor,
            this.$config.buttonBackgroundColor,
          ),
          t
        );
      },
    },
    {
      key: '$start',
      value: function $start() {
        var t = document.createElement('button');
        return (
          (t.textContent = 'Start'),
          t.classList.add(
            'p-2',
            'w-16',
            'ml-auto',
            'font-bold',
            'rounded-3xl',
            this.$config.buttonTextColor,
            this.$config.buttonBackgroundColor,
          ),
          t
        );
      },
    },
    {
      key: '$question',
      value: function $question() {
        var t = document.createElement('div');
        return (
          t.classList.add(
            'flex',
            'flex-col',
            'gap-3',
            'min-w-[500px]',
            'text-center',
          ),
          t
        );
      },
    },
    {
      key: '$text',
      value: function $text(t) {
        var e = document.createElement('p');
        return (
          (e.textContent = t),
          e.classList.add('font-bold', 'text-xl', 'text-white'),
          e
        );
      },
    },
    {
      key: '$container',
      value: function $container() {
        var t = document.createElement('div');
        return (
          t.classList.add(
            'bg-gradient-to-r',
            'from-cyan-500',
            'to-blue-500',
            'absolute',
            'bottom-0',
            'left-0',
            'w-full',
            'flex',
            'flex-col',
            'items-center',
            'justify-center',
            'rounded-t-2xl',
            'bg-black',
            'p-2',
            'text-sm',
            'shadow-md',
          ),
          t
        );
      },
    },
  ]);
  return q;
})();
var u = /*#__PURE__*/ (function () {
  function u(t) {
    var _this5 = this;
    _classCallCheck(this, u);
    i(this, '$config');
    i(this, '$current');
    i(this, '$questions');
    i(this, '$container');
    i(this, '$style');
    (this.$config = t),
      (this.$questions = t.questions.map(function (e) {
        return new E(e).$set(_this5);
      })),
      (this.$style = new q(t)),
      window.addEventListener('DOMContentLoaded', function () {
        return setTimeout(_this5.$initialize.bind(_this5), t.timeToShow * 1e3);
      });
  }
  _createClass(u, [
    {
      key: '$clear',
      value: function $clear() {
        this.$container.innerHTML = '';
      },
    },
    {
      key: '$end',
      value: function $end() {
        var _this6 = this;
        setTimeout(function () {
          return _this6.$container.remove();
        }, 2e3);
      },
    },
    {
      key: '$welcome',
      value: function $welcome() {
        var t = this.$style.$text(this.$config.welcomeMessage);
        this.$container.appendChild(t);
      },
    },
    {
      key: '$thanks',
      value: function $thanks() {
        var t = this.$style.$text(this.$config.thanksMessage);
        this.$container.appendChild(t);
      },
    },
    {
      key: '$submit',
      value: function $submit() {
        this.$questions.forEach(function (t) {
          var e;
          console.log(
            ''
              .concat(t.$question, ' -> ')
              .concat((e = t.$input) == null ? void 0 : e.$value),
          );
        }),
          this.$thanks(),
          this.$end();
      },
    },
    {
      key: '$next',
      value: function $next() {
        var _this7 = this;
        if (this.$current.$required && !this.$current.$input.$value) return;
        var t = null;
        if (this.$current.$logical) {
          var e = this.$current.logic;
          e &&
            (t = this.$questions.find(function (o) {
              return o.$id === e.questionId;
            }));
        }
        t ||
          (t = this.$questions.find(function (e) {
            return e.$step === _this7.$current.$step + 1;
          })),
          this.$clear(),
          t
            ? ((this.$current = t),
              this.$container.appendChild(this.$current.$render()))
            : this.$submit();
      },
    },
    {
      key: '$start',
      value: function $start() {
        (this.$current = this.$questions.find(function (t) {
          return t.$step === 1;
        })),
          this.$clear(),
          this.$container.appendChild(this.$current.$render());
      },
    },
    {
      key: '$initialize',
      value: function $initialize() {
        (this.$container = this.$style.$container()), this.$welcome();
        var t = this.$style.$start();
        (t.onclick = this.$start.bind(this)),
          this.$container.appendChild(t),
          document.body.appendChild(this.$container);
      },
    },
  ]);
  return u;
})();
i(u, 'cookies', {});
var M = /*#__PURE__*/ (function () {
  function M(t) {
    _classCallCheck(this, M);
    i(this, '$config');
    (this.$config = t), this.$initialize();
  }
  _createClass(M, [
    {
      key: '$initialize',
      value: function $initialize() {},
    },
  ]);
  return M;
})();
var S = /*#__PURE__*/ (function () {
  function S(t) {
    _classCallCheck(this, S);
    this.$initialize(t);
  }
  _createClass(S, [
    {
      key: '$initialize',
      value: (function () {
        var _$initialize = _asyncToGenerator(
          /*#__PURE__*/ _regeneratorRuntime().mark(function _callee3(t) {
            var e, o;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1)
                switch ((_context3.prev = _context3.next)) {
                  case 0:
                    _context3.next = 2;
                    return g.$get(t);
                  case 2:
                    e = _context3.sent;
                    o = y();
                    (!e.isMobile && o) || (e.hasFeedback && new M(t), new u(e));
                  case 5:
                  case 'end':
                    return _context3.stop();
                }
            }, _callee3);
          }),
        );
        function $initialize(_x2) {
          return _$initialize.apply(this, arguments);
        }
        return $initialize;
      })(),
    },
  ]);
  return S;
})();
var T = {
  project: 'sw-85-rd',
  access: 'sw-68-wy',
};
new S(T);
