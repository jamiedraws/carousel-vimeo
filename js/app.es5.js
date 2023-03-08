/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/@vimeo/player/dist/player.es.js":
/*!*******************************************************!*\
  !*** ../node_modules/@vimeo/player/dist/player.es.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/*! @vimeo/player v2.18.0 | (c) 2022 Vimeo | MIT License | https://github.com/vimeo/player.js */
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/**
 * @module lib/functions
 */

/**
 * Check to see this is a node environment.
 * @type {Boolean}
 */

/* global global */
var isNode = typeof __webpack_require__.g !== 'undefined' && {}.toString.call(__webpack_require__.g) === '[object global]';
/**
 * Get the name of the method for a given getter or setter.
 *
 * @param {string} prop The name of the property.
 * @param {string} type Either “get” or “set”.
 * @return {string}
 */

function getMethodName(prop, type) {
  if (prop.indexOf(type.toLowerCase()) === 0) {
    return prop;
  }

  return "".concat(type.toLowerCase()).concat(prop.substr(0, 1).toUpperCase()).concat(prop.substr(1));
}
/**
 * Check to see if the object is a DOM Element.
 *
 * @param {*} element The object to check.
 * @return {boolean}
 */

function isDomElement(element) {
  return Boolean(element && element.nodeType === 1 && 'nodeName' in element && element.ownerDocument && element.ownerDocument.defaultView);
}
/**
 * Check to see whether the value is a number.
 *
 * @see http://dl.dropboxusercontent.com/u/35146/js/tests/isNumber.html
 * @param {*} value The value to check.
 * @param {boolean} integer Check if the value is an integer.
 * @return {boolean}
 */

function isInteger(value) {
  // eslint-disable-next-line eqeqeq
  return !isNaN(parseFloat(value)) && isFinite(value) && Math.floor(value) == value;
}
/**
 * Check to see if the URL is a Vimeo url.
 *
 * @param {string} url The url string.
 * @return {boolean}
 */

function isVimeoUrl(url) {
  return /^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(url);
}
/**
 * Check to see if the URL is for a Vimeo embed.
 *
 * @param {string} url The url string.
 * @return {boolean}
 */

function isVimeoEmbed(url) {
  var expr = /^https:\/\/player\.vimeo\.com\/video\/\d+/;
  return expr.test(url);
}
/**
 * Get the Vimeo URL from an element.
 * The element must have either a data-vimeo-id or data-vimeo-url attribute.
 *
 * @param {object} oEmbedParameters The oEmbed parameters.
 * @return {string}
 */

function getVimeoUrl() {
  var oEmbedParameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var id = oEmbedParameters.id;
  var url = oEmbedParameters.url;
  var idOrUrl = id || url;

  if (!idOrUrl) {
    throw new Error('An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.');
  }

  if (isInteger(idOrUrl)) {
    return "https://vimeo.com/".concat(idOrUrl);
  }

  if (isVimeoUrl(idOrUrl)) {
    return idOrUrl.replace('http:', 'https:');
  }

  if (id) {
    throw new TypeError("\u201C".concat(id, "\u201D is not a valid video id."));
  }

  throw new TypeError("\u201C".concat(idOrUrl, "\u201D is not a vimeo.com url."));
}

var arrayIndexOfSupport = typeof Array.prototype.indexOf !== 'undefined';
var postMessageSupport = typeof window !== 'undefined' && typeof window.postMessage !== 'undefined';

if (!isNode && (!arrayIndexOfSupport || !postMessageSupport)) {
  throw new Error('Sorry, the Vimeo Player API is not available in this browser.');
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/*!
 * weakmap-polyfill v2.0.4 - ECMAScript6 WeakMap polyfill
 * https://github.com/polygonplanet/weakmap-polyfill
 * Copyright (c) 2015-2021 polygonplanet <polygon.planet.aqua@gmail.com>
 * @license MIT
 */
(function (self) {

  if (self.WeakMap) {
    return;
  }

  var hasOwnProperty = Object.prototype.hasOwnProperty;

  var hasDefine = Object.defineProperty && function () {
    try {
      // Avoid IE8's broken Object.defineProperty
      return Object.defineProperty({}, 'x', {
        value: 1
      }).x === 1;
    } catch (e) {}
  }();

  var defineProperty = function (object, name, value) {
    if (hasDefine) {
      Object.defineProperty(object, name, {
        configurable: true,
        writable: true,
        value: value
      });
    } else {
      object[name] = value;
    }
  };

  self.WeakMap = function () {
    // ECMA-262 23.3 WeakMap Objects
    function WeakMap() {
      if (this === void 0) {
        throw new TypeError("Constructor WeakMap requires 'new'");
      }

      defineProperty(this, '_id', genId('_WeakMap')); // ECMA-262 23.3.1.1 WeakMap([iterable])

      if (arguments.length > 0) {
        // Currently, WeakMap `iterable` argument is not supported
        throw new TypeError('WeakMap iterable is not supported');
      }
    } // ECMA-262 23.3.3.2 WeakMap.prototype.delete(key)


    defineProperty(WeakMap.prototype, 'delete', function (key) {
      checkInstance(this, 'delete');

      if (!isObject(key)) {
        return false;
      }

      var entry = key[this._id];

      if (entry && entry[0] === key) {
        delete key[this._id];
        return true;
      }

      return false;
    }); // ECMA-262 23.3.3.3 WeakMap.prototype.get(key)

    defineProperty(WeakMap.prototype, 'get', function (key) {
      checkInstance(this, 'get');

      if (!isObject(key)) {
        return void 0;
      }

      var entry = key[this._id];

      if (entry && entry[0] === key) {
        return entry[1];
      }

      return void 0;
    }); // ECMA-262 23.3.3.4 WeakMap.prototype.has(key)

    defineProperty(WeakMap.prototype, 'has', function (key) {
      checkInstance(this, 'has');

      if (!isObject(key)) {
        return false;
      }

      var entry = key[this._id];

      if (entry && entry[0] === key) {
        return true;
      }

      return false;
    }); // ECMA-262 23.3.3.5 WeakMap.prototype.set(key, value)

    defineProperty(WeakMap.prototype, 'set', function (key, value) {
      checkInstance(this, 'set');

      if (!isObject(key)) {
        throw new TypeError('Invalid value used as weak map key');
      }

      var entry = key[this._id];

      if (entry && entry[0] === key) {
        entry[1] = value;
        return this;
      }

      defineProperty(key, this._id, [key, value]);
      return this;
    });

    function checkInstance(x, methodName) {
      if (!isObject(x) || !hasOwnProperty.call(x, '_id')) {
        throw new TypeError(methodName + ' method called on incompatible receiver ' + typeof x);
      }
    }

    function genId(prefix) {
      return prefix + '_' + rand() + '.' + rand();
    }

    function rand() {
      return Math.random().toString().substring(2);
    }

    defineProperty(WeakMap, '_polyfill', true);
    return WeakMap;
  }();

  function isObject(x) {
    return Object(x) === x;
  }
})(typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof commonjsGlobal !== 'undefined' ? commonjsGlobal : commonjsGlobal);

var npo_src = createCommonjsModule(function (module) {
/*! Native Promise Only
    v0.8.1 (c) Kyle Simpson
    MIT License: http://getify.mit-license.org
*/
(function UMD(name, context, definition) {
  // special form of UMD for polyfilling across evironments
  context[name] = context[name] || definition();

  if ( module.exports) {
    module.exports = context[name];
  }
})("Promise", typeof commonjsGlobal != "undefined" ? commonjsGlobal : commonjsGlobal, function DEF() {

  var builtInProp,
      cycle,
      scheduling_queue,
      ToString = Object.prototype.toString,
      timer = typeof setImmediate != "undefined" ? function timer(fn) {
    return setImmediate(fn);
  } : setTimeout; // dammit, IE8.

  try {
    Object.defineProperty({}, "x", {});

    builtInProp = function builtInProp(obj, name, val, config) {
      return Object.defineProperty(obj, name, {
        value: val,
        writable: true,
        configurable: config !== false
      });
    };
  } catch (err) {
    builtInProp = function builtInProp(obj, name, val) {
      obj[name] = val;
      return obj;
    };
  } // Note: using a queue instead of array for efficiency


  scheduling_queue = function Queue() {
    var first, last, item;

    function Item(fn, self) {
      this.fn = fn;
      this.self = self;
      this.next = void 0;
    }

    return {
      add: function add(fn, self) {
        item = new Item(fn, self);

        if (last) {
          last.next = item;
        } else {
          first = item;
        }

        last = item;
        item = void 0;
      },
      drain: function drain() {
        var f = first;
        first = last = cycle = void 0;

        while (f) {
          f.fn.call(f.self);
          f = f.next;
        }
      }
    };
  }();

  function schedule(fn, self) {
    scheduling_queue.add(fn, self);

    if (!cycle) {
      cycle = timer(scheduling_queue.drain);
    }
  } // promise duck typing


  function isThenable(o) {
    var _then,
        o_type = typeof o;

    if (o != null && (o_type == "object" || o_type == "function")) {
      _then = o.then;
    }

    return typeof _then == "function" ? _then : false;
  }

  function notify() {
    for (var i = 0; i < this.chain.length; i++) {
      notifyIsolated(this, this.state === 1 ? this.chain[i].success : this.chain[i].failure, this.chain[i]);
    }

    this.chain.length = 0;
  } // NOTE: This is a separate function to isolate
  // the `try..catch` so that other code can be
  // optimized better


  function notifyIsolated(self, cb, chain) {
    var ret, _then;

    try {
      if (cb === false) {
        chain.reject(self.msg);
      } else {
        if (cb === true) {
          ret = self.msg;
        } else {
          ret = cb.call(void 0, self.msg);
        }

        if (ret === chain.promise) {
          chain.reject(TypeError("Promise-chain cycle"));
        } else if (_then = isThenable(ret)) {
          _then.call(ret, chain.resolve, chain.reject);
        } else {
          chain.resolve(ret);
        }
      }
    } catch (err) {
      chain.reject(err);
    }
  }

  function resolve(msg) {
    var _then,
        self = this; // already triggered?


    if (self.triggered) {
      return;
    }

    self.triggered = true; // unwrap

    if (self.def) {
      self = self.def;
    }

    try {
      if (_then = isThenable(msg)) {
        schedule(function () {
          var def_wrapper = new MakeDefWrapper(self);

          try {
            _then.call(msg, function $resolve$() {
              resolve.apply(def_wrapper, arguments);
            }, function $reject$() {
              reject.apply(def_wrapper, arguments);
            });
          } catch (err) {
            reject.call(def_wrapper, err);
          }
        });
      } else {
        self.msg = msg;
        self.state = 1;

        if (self.chain.length > 0) {
          schedule(notify, self);
        }
      }
    } catch (err) {
      reject.call(new MakeDefWrapper(self), err);
    }
  }

  function reject(msg) {
    var self = this; // already triggered?

    if (self.triggered) {
      return;
    }

    self.triggered = true; // unwrap

    if (self.def) {
      self = self.def;
    }

    self.msg = msg;
    self.state = 2;

    if (self.chain.length > 0) {
      schedule(notify, self);
    }
  }

  function iteratePromises(Constructor, arr, resolver, rejecter) {
    for (var idx = 0; idx < arr.length; idx++) {
      (function IIFE(idx) {
        Constructor.resolve(arr[idx]).then(function $resolver$(msg) {
          resolver(idx, msg);
        }, rejecter);
      })(idx);
    }
  }

  function MakeDefWrapper(self) {
    this.def = self;
    this.triggered = false;
  }

  function MakeDef(self) {
    this.promise = self;
    this.state = 0;
    this.triggered = false;
    this.chain = [];
    this.msg = void 0;
  }

  function Promise(executor) {
    if (typeof executor != "function") {
      throw TypeError("Not a function");
    }

    if (this.__NPO__ !== 0) {
      throw TypeError("Not a promise");
    } // instance shadowing the inherited "brand"
    // to signal an already "initialized" promise


    this.__NPO__ = 1;
    var def = new MakeDef(this);

    this["then"] = function then(success, failure) {
      var o = {
        success: typeof success == "function" ? success : true,
        failure: typeof failure == "function" ? failure : false
      }; // Note: `then(..)` itself can be borrowed to be used against
      // a different promise constructor for making the chained promise,
      // by substituting a different `this` binding.

      o.promise = new this.constructor(function extractChain(resolve, reject) {
        if (typeof resolve != "function" || typeof reject != "function") {
          throw TypeError("Not a function");
        }

        o.resolve = resolve;
        o.reject = reject;
      });
      def.chain.push(o);

      if (def.state !== 0) {
        schedule(notify, def);
      }

      return o.promise;
    };

    this["catch"] = function $catch$(failure) {
      return this.then(void 0, failure);
    };

    try {
      executor.call(void 0, function publicResolve(msg) {
        resolve.call(def, msg);
      }, function publicReject(msg) {
        reject.call(def, msg);
      });
    } catch (err) {
      reject.call(def, err);
    }
  }

  var PromisePrototype = builtInProp({}, "constructor", Promise,
  /*configurable=*/
  false); // Note: Android 4 cannot use `Object.defineProperty(..)` here

  Promise.prototype = PromisePrototype; // built-in "brand" to signal an "uninitialized" promise

  builtInProp(PromisePrototype, "__NPO__", 0,
  /*configurable=*/
  false);
  builtInProp(Promise, "resolve", function Promise$resolve(msg) {
    var Constructor = this; // spec mandated checks
    // note: best "isPromise" check that's practical for now

    if (msg && typeof msg == "object" && msg.__NPO__ === 1) {
      return msg;
    }

    return new Constructor(function executor(resolve, reject) {
      if (typeof resolve != "function" || typeof reject != "function") {
        throw TypeError("Not a function");
      }

      resolve(msg);
    });
  });
  builtInProp(Promise, "reject", function Promise$reject(msg) {
    return new this(function executor(resolve, reject) {
      if (typeof resolve != "function" || typeof reject != "function") {
        throw TypeError("Not a function");
      }

      reject(msg);
    });
  });
  builtInProp(Promise, "all", function Promise$all(arr) {
    var Constructor = this; // spec mandated checks

    if (ToString.call(arr) != "[object Array]") {
      return Constructor.reject(TypeError("Not an array"));
    }

    if (arr.length === 0) {
      return Constructor.resolve([]);
    }

    return new Constructor(function executor(resolve, reject) {
      if (typeof resolve != "function" || typeof reject != "function") {
        throw TypeError("Not a function");
      }

      var len = arr.length,
          msgs = Array(len),
          count = 0;
      iteratePromises(Constructor, arr, function resolver(idx, msg) {
        msgs[idx] = msg;

        if (++count === len) {
          resolve(msgs);
        }
      }, reject);
    });
  });
  builtInProp(Promise, "race", function Promise$race(arr) {
    var Constructor = this; // spec mandated checks

    if (ToString.call(arr) != "[object Array]") {
      return Constructor.reject(TypeError("Not an array"));
    }

    return new Constructor(function executor(resolve, reject) {
      if (typeof resolve != "function" || typeof reject != "function") {
        throw TypeError("Not a function");
      }

      iteratePromises(Constructor, arr, function resolver(idx, msg) {
        resolve(msg);
      }, reject);
    });
  });
  return Promise;
});
});

/**
 * @module lib/callbacks
 */
var callbackMap = new WeakMap();
/**
 * Store a callback for a method or event for a player.
 *
 * @param {Player} player The player object.
 * @param {string} name The method or event name.
 * @param {(function(this:Player, *): void|{resolve: function, reject: function})} callback
 *        The callback to call or an object with resolve and reject functions for a promise.
 * @return {void}
 */

function storeCallback(player, name, callback) {
  var playerCallbacks = callbackMap.get(player.element) || {};

  if (!(name in playerCallbacks)) {
    playerCallbacks[name] = [];
  }

  playerCallbacks[name].push(callback);
  callbackMap.set(player.element, playerCallbacks);
}
/**
 * Get the callbacks for a player and event or method.
 *
 * @param {Player} player The player object.
 * @param {string} name The method or event name
 * @return {function[]}
 */

function getCallbacks(player, name) {
  var playerCallbacks = callbackMap.get(player.element) || {};
  return playerCallbacks[name] || [];
}
/**
 * Remove a stored callback for a method or event for a player.
 *
 * @param {Player} player The player object.
 * @param {string} name The method or event name
 * @param {function} [callback] The specific callback to remove.
 * @return {boolean} Was this the last callback?
 */

function removeCallback(player, name, callback) {
  var playerCallbacks = callbackMap.get(player.element) || {};

  if (!playerCallbacks[name]) {
    return true;
  } // If no callback is passed, remove all callbacks for the event


  if (!callback) {
    playerCallbacks[name] = [];
    callbackMap.set(player.element, playerCallbacks);
    return true;
  }

  var index = playerCallbacks[name].indexOf(callback);

  if (index !== -1) {
    playerCallbacks[name].splice(index, 1);
  }

  callbackMap.set(player.element, playerCallbacks);
  return playerCallbacks[name] && playerCallbacks[name].length === 0;
}
/**
 * Return the first stored callback for a player and event or method.
 *
 * @param {Player} player The player object.
 * @param {string} name The method or event name.
 * @return {function} The callback, or false if there were none
 */

function shiftCallbacks(player, name) {
  var playerCallbacks = getCallbacks(player, name);

  if (playerCallbacks.length < 1) {
    return false;
  }

  var callback = playerCallbacks.shift();
  removeCallback(player, name, callback);
  return callback;
}
/**
 * Move callbacks associated with an element to another element.
 *
 * @param {HTMLElement} oldElement The old element.
 * @param {HTMLElement} newElement The new element.
 * @return {void}
 */

function swapCallbacks(oldElement, newElement) {
  var playerCallbacks = callbackMap.get(oldElement);
  callbackMap.set(newElement, playerCallbacks);
  callbackMap.delete(oldElement);
}

/**
 * @module lib/postmessage
 */
/**
 * Parse a message received from postMessage.
 *
 * @param {*} data The data received from postMessage.
 * @return {object}
 */

function parseMessageData(data) {
  if (typeof data === 'string') {
    try {
      data = JSON.parse(data);
    } catch (error) {
      // If the message cannot be parsed, throw the error as a warning
      console.warn(error);
      return {};
    }
  }

  return data;
}
/**
 * Post a message to the specified target.
 *
 * @param {Player} player The player object to use.
 * @param {string} method The API method to call.
 * @param {object} params The parameters to send to the player.
 * @return {void}
 */

function postMessage(player, method, params) {
  if (!player.element.contentWindow || !player.element.contentWindow.postMessage) {
    return;
  }

  var message = {
    method: method
  };

  if (params !== undefined) {
    message.value = params;
  } // IE 8 and 9 do not support passing messages, so stringify them


  var ieVersion = parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, '$1'));

  if (ieVersion >= 8 && ieVersion < 10) {
    message = JSON.stringify(message);
  }

  player.element.contentWindow.postMessage(message, player.origin);
}
/**
 * Parse the data received from a message event.
 *
 * @param {Player} player The player that received the message.
 * @param {(Object|string)} data The message data. Strings will be parsed into JSON.
 * @return {void}
 */

function processData(player, data) {
  data = parseMessageData(data);
  var callbacks = [];
  var param;

  if (data.event) {
    if (data.event === 'error') {
      var promises = getCallbacks(player, data.data.method);
      promises.forEach(function (promise) {
        var error = new Error(data.data.message);
        error.name = data.data.name;
        promise.reject(error);
        removeCallback(player, data.data.method, promise);
      });
    }

    callbacks = getCallbacks(player, "event:".concat(data.event));
    param = data.data;
  } else if (data.method) {
    var callback = shiftCallbacks(player, data.method);

    if (callback) {
      callbacks.push(callback);
      param = data.value;
    }
  }

  callbacks.forEach(function (callback) {
    try {
      if (typeof callback === 'function') {
        callback.call(player, param);
        return;
      }

      callback.resolve(param);
    } catch (e) {// empty
    }
  });
}

/**
 * @module lib/embed
 */
var oEmbedParameters = ['autopause', 'autoplay', 'background', 'byline', 'color', 'controls', 'dnt', 'height', 'id', 'interactive_params', 'keyboard', 'loop', 'maxheight', 'maxwidth', 'muted', 'playsinline', 'portrait', 'responsive', 'speed', 'texttrack', 'title', 'transparent', 'url', 'width'];
/**
 * Get the 'data-vimeo'-prefixed attributes from an element as an object.
 *
 * @param {HTMLElement} element The element.
 * @param {Object} [defaults={}] The default values to use.
 * @return {Object<string, string>}
 */

function getOEmbedParameters(element) {
  var defaults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return oEmbedParameters.reduce(function (params, param) {
    var value = element.getAttribute("data-vimeo-".concat(param));

    if (value || value === '') {
      params[param] = value === '' ? 1 : value;
    }

    return params;
  }, defaults);
}
/**
 * Create an embed from oEmbed data inside an element.
 *
 * @param {object} data The oEmbed data.
 * @param {HTMLElement} element The element to put the iframe in.
 * @return {HTMLIFrameElement} The iframe embed.
 */

function createEmbed(_ref, element) {
  var html = _ref.html;

  if (!element) {
    throw new TypeError('An element must be provided');
  }

  if (element.getAttribute('data-vimeo-initialized') !== null) {
    return element.querySelector('iframe');
  }

  var div = document.createElement('div');
  div.innerHTML = html;
  element.appendChild(div.firstChild);
  element.setAttribute('data-vimeo-initialized', 'true');
  return element.querySelector('iframe');
}
/**
 * Make an oEmbed call for the specified URL.
 *
 * @param {string} videoUrl The vimeo.com url for the video.
 * @param {Object} [params] Parameters to pass to oEmbed.
 * @param {HTMLElement} element The element.
 * @return {Promise}
 */

function getOEmbedData(videoUrl) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var element = arguments.length > 2 ? arguments[2] : undefined;
  return new Promise(function (resolve, reject) {
    if (!isVimeoUrl(videoUrl)) {
      throw new TypeError("\u201C".concat(videoUrl, "\u201D is not a vimeo.com url."));
    }

    var url = "https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(videoUrl));

    for (var param in params) {
      if (params.hasOwnProperty(param)) {
        url += "&".concat(param, "=").concat(encodeURIComponent(params[param]));
      }
    }

    var xhr = 'XDomainRequest' in window ? new XDomainRequest() : new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function () {
      if (xhr.status === 404) {
        reject(new Error("\u201C".concat(videoUrl, "\u201D was not found.")));
        return;
      }

      if (xhr.status === 403) {
        reject(new Error("\u201C".concat(videoUrl, "\u201D is not embeddable.")));
        return;
      }

      try {
        var json = JSON.parse(xhr.responseText); // Check api response for 403 on oembed

        if (json.domain_status_code === 403) {
          // We still want to create the embed to give users visual feedback
          createEmbed(json, element);
          reject(new Error("\u201C".concat(videoUrl, "\u201D is not embeddable.")));
          return;
        }

        resolve(json);
      } catch (error) {
        reject(error);
      }
    };

    xhr.onerror = function () {
      var status = xhr.status ? " (".concat(xhr.status, ")") : '';
      reject(new Error("There was an error fetching the embed code from Vimeo".concat(status, ".")));
    };

    xhr.send();
  });
}
/**
 * Initialize all embeds within a specific element
 *
 * @param {HTMLElement} [parent=document] The parent element.
 * @return {void}
 */

function initializeEmbeds() {
  var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
  var elements = [].slice.call(parent.querySelectorAll('[data-vimeo-id], [data-vimeo-url]'));

  var handleError = function handleError(error) {
    if ('console' in window && console.error) {
      console.error("There was an error creating an embed: ".concat(error));
    }
  };

  elements.forEach(function (element) {
    try {
      // Skip any that have data-vimeo-defer
      if (element.getAttribute('data-vimeo-defer') !== null) {
        return;
      }

      var params = getOEmbedParameters(element);
      var url = getVimeoUrl(params);
      getOEmbedData(url, params, element).then(function (data) {
        return createEmbed(data, element);
      }).catch(handleError);
    } catch (error) {
      handleError(error);
    }
  });
}
/**
 * Resize embeds when messaged by the player.
 *
 * @param {HTMLElement} [parent=document] The parent element.
 * @return {void}
 */

function resizeEmbeds() {
  var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;

  // Prevent execution if users include the player.js script multiple times.
  if (window.VimeoPlayerResizeEmbeds_) {
    return;
  }

  window.VimeoPlayerResizeEmbeds_ = true;

  var onMessage = function onMessage(event) {
    if (!isVimeoUrl(event.origin)) {
      return;
    } // 'spacechange' is fired only on embeds with cards


    if (!event.data || event.data.event !== 'spacechange') {
      return;
    }

    var iframes = parent.querySelectorAll('iframe');

    for (var i = 0; i < iframes.length; i++) {
      if (iframes[i].contentWindow !== event.source) {
        continue;
      } // Change padding-bottom of the enclosing div to accommodate
      // card carousel without distorting aspect ratio


      var space = iframes[i].parentElement;
      space.style.paddingBottom = "".concat(event.data.data[0].bottom, "px");
      break;
    }
  };

  window.addEventListener('message', onMessage);
}
/**
 * Add chapters to existing metadata for Google SEO
 *
 * @param {HTMLElement} [parent=document] The parent element.
 * @return {void}
 */

function initAppendVideoMetadata() {
  var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;

  //  Prevent execution if users include the player.js script multiple times.
  if (window.VimeoSeoMetadataAppended) {
    return;
  }

  window.VimeoSeoMetadataAppended = true;

  var onMessage = function onMessage(event) {
    if (!isVimeoUrl(event.origin)) {
      return;
    }

    var data = parseMessageData(event.data);

    if (!data || data.event !== 'ready') {
      return;
    }

    var iframes = parent.querySelectorAll('iframe');

    for (var i = 0; i < iframes.length; i++) {
      var iframe = iframes[i]; // Initiate appendVideoMetadata if iframe is a Vimeo embed

      var isValidMessageSource = iframe.contentWindow === event.source;

      if (isVimeoEmbed(iframe.src) && isValidMessageSource) {
        var player = new Player(iframe);
        player.callMethod('appendVideoMetadata', window.location.href);
      }
    }
  };

  window.addEventListener('message', onMessage);
}
/**
 * Seek to time indicated by vimeo_t query parameter if present in URL
 *
 * @param {HTMLElement} [parent=document] The parent element.
 * @return {void}
 */

function checkUrlTimeParam() {
  var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;

  //  Prevent execution if users include the player.js script multiple times.
  if (window.VimeoCheckedUrlTimeParam) {
    return;
  }

  window.VimeoCheckedUrlTimeParam = true;

  var handleError = function handleError(error) {
    if ('console' in window && console.error) {
      console.error("There was an error getting video Id: ".concat(error));
    }
  };

  var onMessage = function onMessage(event) {
    if (!isVimeoUrl(event.origin)) {
      return;
    }

    var data = parseMessageData(event.data);

    if (!data || data.event !== 'ready') {
      return;
    }

    var iframes = parent.querySelectorAll('iframe');

    for (var i = 0; i < iframes.length; i++) {
      var iframe = iframes[i];
      var isValidMessageSource = iframe.contentWindow === event.source;

      if (isVimeoEmbed(iframe.src) && isValidMessageSource) {
        (function () {
          var player = new Player(iframe);
          player.getVideoId().then(function (videoId) {
            var matches = new RegExp("[?&]vimeo_t_".concat(videoId, "=([^&#]*)")).exec(window.location.href);

            if (matches && matches[1]) {
              var sec = decodeURI(matches[1]);
              player.setCurrentTime(sec);
            }

            return;
          }).catch(handleError);
        })();
      }
    }
  };

  window.addEventListener('message', onMessage);
}

/* MIT License

Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
Terms */
function initializeScreenfull() {
  var fn = function () {
    var val;
    var fnMap = [['requestFullscreen', 'exitFullscreen', 'fullscreenElement', 'fullscreenEnabled', 'fullscreenchange', 'fullscreenerror'], // New WebKit
    ['webkitRequestFullscreen', 'webkitExitFullscreen', 'webkitFullscreenElement', 'webkitFullscreenEnabled', 'webkitfullscreenchange', 'webkitfullscreenerror'], // Old WebKit
    ['webkitRequestFullScreen', 'webkitCancelFullScreen', 'webkitCurrentFullScreenElement', 'webkitCancelFullScreen', 'webkitfullscreenchange', 'webkitfullscreenerror'], ['mozRequestFullScreen', 'mozCancelFullScreen', 'mozFullScreenElement', 'mozFullScreenEnabled', 'mozfullscreenchange', 'mozfullscreenerror'], ['msRequestFullscreen', 'msExitFullscreen', 'msFullscreenElement', 'msFullscreenEnabled', 'MSFullscreenChange', 'MSFullscreenError']];
    var i = 0;
    var l = fnMap.length;
    var ret = {};

    for (; i < l; i++) {
      val = fnMap[i];

      if (val && val[1] in document) {
        for (i = 0; i < val.length; i++) {
          ret[fnMap[0][i]] = val[i];
        }

        return ret;
      }
    }

    return false;
  }();

  var eventNameMap = {
    fullscreenchange: fn.fullscreenchange,
    fullscreenerror: fn.fullscreenerror
  };
  var screenfull = {
    request: function request(element) {
      return new Promise(function (resolve, reject) {
        var onFullScreenEntered = function onFullScreenEntered() {
          screenfull.off('fullscreenchange', onFullScreenEntered);
          resolve();
        };

        screenfull.on('fullscreenchange', onFullScreenEntered);
        element = element || document.documentElement;
        var returnPromise = element[fn.requestFullscreen]();

        if (returnPromise instanceof Promise) {
          returnPromise.then(onFullScreenEntered).catch(reject);
        }
      });
    },
    exit: function exit() {
      return new Promise(function (resolve, reject) {
        if (!screenfull.isFullscreen) {
          resolve();
          return;
        }

        var onFullScreenExit = function onFullScreenExit() {
          screenfull.off('fullscreenchange', onFullScreenExit);
          resolve();
        };

        screenfull.on('fullscreenchange', onFullScreenExit);
        var returnPromise = document[fn.exitFullscreen]();

        if (returnPromise instanceof Promise) {
          returnPromise.then(onFullScreenExit).catch(reject);
        }
      });
    },
    on: function on(event, callback) {
      var eventName = eventNameMap[event];

      if (eventName) {
        document.addEventListener(eventName, callback);
      }
    },
    off: function off(event, callback) {
      var eventName = eventNameMap[event];

      if (eventName) {
        document.removeEventListener(eventName, callback);
      }
    }
  };
  Object.defineProperties(screenfull, {
    isFullscreen: {
      get: function get() {
        return Boolean(document[fn.fullscreenElement]);
      }
    },
    element: {
      enumerable: true,
      get: function get() {
        return document[fn.fullscreenElement];
      }
    },
    isEnabled: {
      enumerable: true,
      get: function get() {
        // Coerce to boolean in case of old WebKit
        return Boolean(document[fn.fullscreenEnabled]);
      }
    }
  });
  return screenfull;
}

var playerMap = new WeakMap();
var readyMap = new WeakMap();
var screenfull = {};

var Player = /*#__PURE__*/function () {
  /**
   * Create a Player.
   *
   * @param {(HTMLIFrameElement|HTMLElement|string|jQuery)} element A reference to the Vimeo
   *        player iframe, and id, or a jQuery object.
   * @param {object} [options] oEmbed parameters to use when creating an embed in the element.
   * @return {Player}
   */
  function Player(element) {
    var _this = this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Player);

    /* global jQuery */
    if (window.jQuery && element instanceof jQuery) {
      if (element.length > 1 && window.console && console.warn) {
        console.warn('A jQuery object with multiple elements was passed, using the first element.');
      }

      element = element[0];
    } // Find an element by ID


    if (typeof document !== 'undefined' && typeof element === 'string') {
      element = document.getElementById(element);
    } // Not an element!


    if (!isDomElement(element)) {
      throw new TypeError('You must pass either a valid element or a valid id.');
    } // Already initialized an embed in this div, so grab the iframe


    if (element.nodeName !== 'IFRAME') {
      var iframe = element.querySelector('iframe');

      if (iframe) {
        element = iframe;
      }
    } // iframe url is not a Vimeo url


    if (element.nodeName === 'IFRAME' && !isVimeoUrl(element.getAttribute('src') || '')) {
      throw new Error('The player element passed isn’t a Vimeo embed.');
    } // If there is already a player object in the map, return that


    if (playerMap.has(element)) {
      return playerMap.get(element);
    }

    this._window = element.ownerDocument.defaultView;
    this.element = element;
    this.origin = '*';
    var readyPromise = new npo_src(function (resolve, reject) {
      _this._onMessage = function (event) {
        if (!isVimeoUrl(event.origin) || _this.element.contentWindow !== event.source) {
          return;
        }

        if (_this.origin === '*') {
          _this.origin = event.origin;
        }

        var data = parseMessageData(event.data);
        var isError = data && data.event === 'error';
        var isReadyError = isError && data.data && data.data.method === 'ready';

        if (isReadyError) {
          var error = new Error(data.data.message);
          error.name = data.data.name;
          reject(error);
          return;
        }

        var isReadyEvent = data && data.event === 'ready';
        var isPingResponse = data && data.method === 'ping';

        if (isReadyEvent || isPingResponse) {
          _this.element.setAttribute('data-ready', 'true');

          resolve();
          return;
        }

        processData(_this, data);
      };

      _this._window.addEventListener('message', _this._onMessage);

      if (_this.element.nodeName !== 'IFRAME') {
        var params = getOEmbedParameters(element, options);
        var url = getVimeoUrl(params);
        getOEmbedData(url, params, element).then(function (data) {
          var iframe = createEmbed(data, element); // Overwrite element with the new iframe,
          // but store reference to the original element

          _this.element = iframe;
          _this._originalElement = element;
          swapCallbacks(element, iframe);
          playerMap.set(_this.element, _this);
          return data;
        }).catch(reject);
      }
    }); // Store a copy of this Player in the map

    readyMap.set(this, readyPromise);
    playerMap.set(this.element, this); // Send a ping to the iframe so the ready promise will be resolved if
    // the player is already ready.

    if (this.element.nodeName === 'IFRAME') {
      postMessage(this, 'ping');
    }

    if (screenfull.isEnabled) {
      var exitFullscreen = function exitFullscreen() {
        return screenfull.exit();
      };

      this.fullscreenchangeHandler = function () {
        if (screenfull.isFullscreen) {
          storeCallback(_this, 'event:exitFullscreen', exitFullscreen);
        } else {
          removeCallback(_this, 'event:exitFullscreen', exitFullscreen);
        } // eslint-disable-next-line


        _this.ready().then(function () {
          postMessage(_this, 'fullscreenchange', screenfull.isFullscreen);
        });
      };

      screenfull.on('fullscreenchange', this.fullscreenchangeHandler);
    }

    return this;
  }
  /**
   * Get a promise for a method.
   *
   * @param {string} name The API method to call.
   * @param {Object} [args={}] Arguments to send via postMessage.
   * @return {Promise}
   */


  _createClass(Player, [{
    key: "callMethod",
    value: function callMethod(name) {
      var _this2 = this;

      var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return new npo_src(function (resolve, reject) {
        // We are storing the resolve/reject handlers to call later, so we
        // can’t return here.
        // eslint-disable-next-line promise/always-return
        return _this2.ready().then(function () {
          storeCallback(_this2, name, {
            resolve: resolve,
            reject: reject
          });
          postMessage(_this2, name, args);
        }).catch(reject);
      });
    }
    /**
     * Get a promise for the value of a player property.
     *
     * @param {string} name The property name
     * @return {Promise}
     */

  }, {
    key: "get",
    value: function get(name) {
      var _this3 = this;

      return new npo_src(function (resolve, reject) {
        name = getMethodName(name, 'get'); // We are storing the resolve/reject handlers to call later, so we
        // can’t return here.
        // eslint-disable-next-line promise/always-return

        return _this3.ready().then(function () {
          storeCallback(_this3, name, {
            resolve: resolve,
            reject: reject
          });
          postMessage(_this3, name);
        }).catch(reject);
      });
    }
    /**
     * Get a promise for setting the value of a player property.
     *
     * @param {string} name The API method to call.
     * @param {mixed} value The value to set.
     * @return {Promise}
     */

  }, {
    key: "set",
    value: function set(name, value) {
      var _this4 = this;

      return new npo_src(function (resolve, reject) {
        name = getMethodName(name, 'set');

        if (value === undefined || value === null) {
          throw new TypeError('There must be a value to set.');
        } // We are storing the resolve/reject handlers to call later, so we
        // can’t return here.
        // eslint-disable-next-line promise/always-return


        return _this4.ready().then(function () {
          storeCallback(_this4, name, {
            resolve: resolve,
            reject: reject
          });
          postMessage(_this4, name, value);
        }).catch(reject);
      });
    }
    /**
     * Add an event listener for the specified event. Will call the
     * callback with a single parameter, `data`, that contains the data for
     * that event.
     *
     * @param {string} eventName The name of the event.
     * @param {function(*)} callback The function to call when the event fires.
     * @return {void}
     */

  }, {
    key: "on",
    value: function on(eventName, callback) {
      if (!eventName) {
        throw new TypeError('You must pass an event name.');
      }

      if (!callback) {
        throw new TypeError('You must pass a callback function.');
      }

      if (typeof callback !== 'function') {
        throw new TypeError('The callback must be a function.');
      }

      var callbacks = getCallbacks(this, "event:".concat(eventName));

      if (callbacks.length === 0) {
        this.callMethod('addEventListener', eventName).catch(function () {// Ignore the error. There will be an error event fired that
          // will trigger the error callback if they are listening.
        });
      }

      storeCallback(this, "event:".concat(eventName), callback);
    }
    /**
     * Remove an event listener for the specified event. Will remove all
     * listeners for that event if a `callback` isn’t passed, or only that
     * specific callback if it is passed.
     *
     * @param {string} eventName The name of the event.
     * @param {function} [callback] The specific callback to remove.
     * @return {void}
     */

  }, {
    key: "off",
    value: function off(eventName, callback) {
      if (!eventName) {
        throw new TypeError('You must pass an event name.');
      }

      if (callback && typeof callback !== 'function') {
        throw new TypeError('The callback must be a function.');
      }

      var lastCallback = removeCallback(this, "event:".concat(eventName), callback); // If there are no callbacks left, remove the listener

      if (lastCallback) {
        this.callMethod('removeEventListener', eventName).catch(function (e) {// Ignore the error. There will be an error event fired that
          // will trigger the error callback if they are listening.
        });
      }
    }
    /**
     * A promise to load a new video.
     *
     * @promise LoadVideoPromise
     * @fulfill {number} The video with this id or url successfully loaded.
     * @reject {TypeError} The id was not a number.
     */

    /**
     * Load a new video into this embed. The promise will be resolved if
     * the video is successfully loaded, or it will be rejected if it could
     * not be loaded.
     *
     * @param {number|string|object} options The id of the video, the url of the video, or an object with embed options.
     * @return {LoadVideoPromise}
     */

  }, {
    key: "loadVideo",
    value: function loadVideo(options) {
      return this.callMethod('loadVideo', options);
    }
    /**
     * A promise to perform an action when the Player is ready.
     *
     * @todo document errors
     * @promise LoadVideoPromise
     * @fulfill {void}
     */

    /**
     * Trigger a function when the player iframe has initialized. You do not
     * need to wait for `ready` to trigger to begin adding event listeners
     * or calling other methods.
     *
     * @return {ReadyPromise}
     */

  }, {
    key: "ready",
    value: function ready() {
      var readyPromise = readyMap.get(this) || new npo_src(function (resolve, reject) {
        reject(new Error('Unknown player. Probably unloaded.'));
      });
      return npo_src.resolve(readyPromise);
    }
    /**
     * A promise to add a cue point to the player.
     *
     * @promise AddCuePointPromise
     * @fulfill {string} The id of the cue point to use for removeCuePoint.
     * @reject {RangeError} the time was less than 0 or greater than the
     *         video’s duration.
     * @reject {UnsupportedError} Cue points are not supported with the current
     *         player or browser.
     */

    /**
     * Add a cue point to the player.
     *
     * @param {number} time The time for the cue point.
     * @param {object} [data] Arbitrary data to be returned with the cue point.
     * @return {AddCuePointPromise}
     */

  }, {
    key: "addCuePoint",
    value: function addCuePoint(time) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.callMethod('addCuePoint', {
        time: time,
        data: data
      });
    }
    /**
     * A promise to remove a cue point from the player.
     *
     * @promise AddCuePointPromise
     * @fulfill {string} The id of the cue point that was removed.
     * @reject {InvalidCuePoint} The cue point with the specified id was not
     *         found.
     * @reject {UnsupportedError} Cue points are not supported with the current
     *         player or browser.
     */

    /**
     * Remove a cue point from the video.
     *
     * @param {string} id The id of the cue point to remove.
     * @return {RemoveCuePointPromise}
     */

  }, {
    key: "removeCuePoint",
    value: function removeCuePoint(id) {
      return this.callMethod('removeCuePoint', id);
    }
    /**
     * A representation of a text track on a video.
     *
     * @typedef {Object} VimeoTextTrack
     * @property {string} language The ISO language code.
     * @property {string} kind The kind of track it is (captions or subtitles).
     * @property {string} label The human‐readable label for the track.
     */

    /**
     * A promise to enable a text track.
     *
     * @promise EnableTextTrackPromise
     * @fulfill {VimeoTextTrack} The text track that was enabled.
     * @reject {InvalidTrackLanguageError} No track was available with the
     *         specified language.
     * @reject {InvalidTrackError} No track was available with the specified
     *         language and kind.
     */

    /**
     * Enable the text track with the specified language, and optionally the
     * specified kind (captions or subtitles).
     *
     * When set via the API, the track language will not change the viewer’s
     * stored preference.
     *
     * @param {string} language The two‐letter language code.
     * @param {string} [kind] The kind of track to enable (captions or subtitles).
     * @return {EnableTextTrackPromise}
     */

  }, {
    key: "enableTextTrack",
    value: function enableTextTrack(language, kind) {
      if (!language) {
        throw new TypeError('You must pass a language.');
      }

      return this.callMethod('enableTextTrack', {
        language: language,
        kind: kind
      });
    }
    /**
     * A promise to disable the active text track.
     *
     * @promise DisableTextTrackPromise
     * @fulfill {void} The track was disabled.
     */

    /**
     * Disable the currently-active text track.
     *
     * @return {DisableTextTrackPromise}
     */

  }, {
    key: "disableTextTrack",
    value: function disableTextTrack() {
      return this.callMethod('disableTextTrack');
    }
    /**
     * A promise to pause the video.
     *
     * @promise PausePromise
     * @fulfill {void} The video was paused.
     */

    /**
     * Pause the video if it’s playing.
     *
     * @return {PausePromise}
     */

  }, {
    key: "pause",
    value: function pause() {
      return this.callMethod('pause');
    }
    /**
     * A promise to play the video.
     *
     * @promise PlayPromise
     * @fulfill {void} The video was played.
     */

    /**
     * Play the video if it’s paused. **Note:** on iOS and some other
     * mobile devices, you cannot programmatically trigger play. Once the
     * viewer has tapped on the play button in the player, however, you
     * will be able to use this function.
     *
     * @return {PlayPromise}
     */

  }, {
    key: "play",
    value: function play() {
      return this.callMethod('play');
    }
    /**
     * Request that the player enters fullscreen.
     * @return {Promise}
     */

  }, {
    key: "requestFullscreen",
    value: function requestFullscreen() {
      if (screenfull.isEnabled) {
        return screenfull.request(this.element);
      }

      return this.callMethod('requestFullscreen');
    }
    /**
     * Request that the player exits fullscreen.
     * @return {Promise}
     */

  }, {
    key: "exitFullscreen",
    value: function exitFullscreen() {
      if (screenfull.isEnabled) {
        return screenfull.exit();
      }

      return this.callMethod('exitFullscreen');
    }
    /**
     * Returns true if the player is currently fullscreen.
     * @return {Promise}
     */

  }, {
    key: "getFullscreen",
    value: function getFullscreen() {
      if (screenfull.isEnabled) {
        return npo_src.resolve(screenfull.isFullscreen);
      }

      return this.get('fullscreen');
    }
    /**
     * Request that the player enters picture-in-picture.
     * @return {Promise}
     */

  }, {
    key: "requestPictureInPicture",
    value: function requestPictureInPicture() {
      return this.callMethod('requestPictureInPicture');
    }
    /**
     * Request that the player exits picture-in-picture.
     * @return {Promise}
     */

  }, {
    key: "exitPictureInPicture",
    value: function exitPictureInPicture() {
      return this.callMethod('exitPictureInPicture');
    }
    /**
     * Returns true if the player is currently picture-in-picture.
     * @return {Promise}
     */

  }, {
    key: "getPictureInPicture",
    value: function getPictureInPicture() {
      return this.get('pictureInPicture');
    }
    /**
     * A promise to unload the video.
     *
     * @promise UnloadPromise
     * @fulfill {void} The video was unloaded.
     */

    /**
     * Return the player to its initial state.
     *
     * @return {UnloadPromise}
     */

  }, {
    key: "unload",
    value: function unload() {
      return this.callMethod('unload');
    }
    /**
     * Cleanup the player and remove it from the DOM
     *
     * It won't be usable and a new one should be constructed
     *  in order to do any operations.
     *
     * @return {Promise}
     */

  }, {
    key: "destroy",
    value: function destroy() {
      var _this5 = this;

      return new npo_src(function (resolve) {
        readyMap.delete(_this5);
        playerMap.delete(_this5.element);

        if (_this5._originalElement) {
          playerMap.delete(_this5._originalElement);

          _this5._originalElement.removeAttribute('data-vimeo-initialized');
        }

        if (_this5.element && _this5.element.nodeName === 'IFRAME' && _this5.element.parentNode) {
          // If we've added an additional wrapper div, remove that from the DOM.
          // If not, just remove the iframe element.
          if (_this5.element.parentNode.parentNode && _this5._originalElement && _this5._originalElement !== _this5.element.parentNode) {
            _this5.element.parentNode.parentNode.removeChild(_this5.element.parentNode);
          } else {
            _this5.element.parentNode.removeChild(_this5.element);
          }
        } // If the clip is private there is a case where the element stays the
        // div element. Destroy should reset the div and remove the iframe child.


        if (_this5.element && _this5.element.nodeName === 'DIV' && _this5.element.parentNode) {
          _this5.element.removeAttribute('data-vimeo-initialized');

          var iframe = _this5.element.querySelector('iframe');

          if (iframe && iframe.parentNode) {
            // If we've added an additional wrapper div, remove that from the DOM.
            // If not, just remove the iframe element.
            if (iframe.parentNode.parentNode && _this5._originalElement && _this5._originalElement !== iframe.parentNode) {
              iframe.parentNode.parentNode.removeChild(iframe.parentNode);
            } else {
              iframe.parentNode.removeChild(iframe);
            }
          }
        }

        _this5._window.removeEventListener('message', _this5._onMessage);

        if (screenfull.isEnabled) {
          screenfull.off('fullscreenchange', _this5.fullscreenchangeHandler);
        }

        resolve();
      });
    }
    /**
     * A promise to get the autopause behavior of the video.
     *
     * @promise GetAutopausePromise
     * @fulfill {boolean} Whether autopause is turned on or off.
     * @reject {UnsupportedError} Autopause is not supported with the current
     *         player or browser.
     */

    /**
     * Get the autopause behavior for this player.
     *
     * @return {GetAutopausePromise}
     */

  }, {
    key: "getAutopause",
    value: function getAutopause() {
      return this.get('autopause');
    }
    /**
     * A promise to set the autopause behavior of the video.
     *
     * @promise SetAutopausePromise
     * @fulfill {boolean} Whether autopause is turned on or off.
     * @reject {UnsupportedError} Autopause is not supported with the current
     *         player or browser.
     */

    /**
     * Enable or disable the autopause behavior of this player.
     *
     * By default, when another video is played in the same browser, this
     * player will automatically pause. Unless you have a specific reason
     * for doing so, we recommend that you leave autopause set to the
     * default (`true`).
     *
     * @param {boolean} autopause
     * @return {SetAutopausePromise}
     */

  }, {
    key: "setAutopause",
    value: function setAutopause(autopause) {
      return this.set('autopause', autopause);
    }
    /**
     * A promise to get the buffered property of the video.
     *
     * @promise GetBufferedPromise
     * @fulfill {Array} Buffered Timeranges converted to an Array.
     */

    /**
     * Get the buffered property of the video.
     *
     * @return {GetBufferedPromise}
     */

  }, {
    key: "getBuffered",
    value: function getBuffered() {
      return this.get('buffered');
    }
    /**
     * @typedef {Object} CameraProperties
     * @prop {number} props.yaw - Number between 0 and 360.
     * @prop {number} props.pitch - Number between -90 and 90.
     * @prop {number} props.roll - Number between -180 and 180.
     * @prop {number} props.fov - The field of view in degrees.
     */

    /**
     * A promise to get the camera properties of the player.
     *
     * @promise GetCameraPromise
     * @fulfill {CameraProperties} The camera properties.
     */

    /**
     * For 360° videos get the camera properties for this player.
     *
     * @return {GetCameraPromise}
     */

  }, {
    key: "getCameraProps",
    value: function getCameraProps() {
      return this.get('cameraProps');
    }
    /**
     * A promise to set the camera properties of the player.
     *
     * @promise SetCameraPromise
     * @fulfill {Object} The camera was successfully set.
     * @reject {RangeError} The range was out of bounds.
     */

    /**
     * For 360° videos set the camera properties for this player.
     *
     * @param {CameraProperties} camera The camera properties
     * @return {SetCameraPromise}
     */

  }, {
    key: "setCameraProps",
    value: function setCameraProps(camera) {
      return this.set('cameraProps', camera);
    }
    /**
     * A representation of a chapter.
     *
     * @typedef {Object} VimeoChapter
     * @property {number} startTime The start time of the chapter.
     * @property {object} title The title of the chapter.
     * @property {number} index The place in the order of Chapters. Starts at 1.
     */

    /**
     * A promise to get chapters for the video.
     *
     * @promise GetChaptersPromise
     * @fulfill {VimeoChapter[]} The chapters for the video.
     */

    /**
     * Get an array of all the chapters for the video.
     *
     * @return {GetChaptersPromise}
     */

  }, {
    key: "getChapters",
    value: function getChapters() {
      return this.get('chapters');
    }
    /**
     * A promise to get the currently active chapter.
     *
     * @promise GetCurrentChaptersPromise
     * @fulfill {VimeoChapter|undefined} The current chapter for the video.
     */

    /**
     * Get the currently active chapter for the video.
     *
     * @return {GetCurrentChaptersPromise}
     */

  }, {
    key: "getCurrentChapter",
    value: function getCurrentChapter() {
      return this.get('currentChapter');
    }
    /**
     * A promise to get the color of the player.
     *
     * @promise GetColorPromise
     * @fulfill {string} The hex color of the player.
     */

    /**
     * Get the color for this player.
     *
     * @return {GetColorPromise}
     */

  }, {
    key: "getColor",
    value: function getColor() {
      return this.get('color');
    }
    /**
     * A promise to set the color of the player.
     *
     * @promise SetColorPromise
     * @fulfill {string} The color was successfully set.
     * @reject {TypeError} The string was not a valid hex or rgb color.
     * @reject {ContrastError} The color was set, but the contrast is
     *         outside of the acceptable range.
     * @reject {EmbedSettingsError} The owner of the player has chosen to
     *         use a specific color.
     */

    /**
     * Set the color of this player to a hex or rgb string. Setting the
     * color may fail if the owner of the video has set their embed
     * preferences to force a specific color.
     *
     * @param {string} color The hex or rgb color string to set.
     * @return {SetColorPromise}
     */

  }, {
    key: "setColor",
    value: function setColor(color) {
      return this.set('color', color);
    }
    /**
     * A representation of a cue point.
     *
     * @typedef {Object} VimeoCuePoint
     * @property {number} time The time of the cue point.
     * @property {object} data The data passed when adding the cue point.
     * @property {string} id The unique id for use with removeCuePoint.
     */

    /**
     * A promise to get the cue points of a video.
     *
     * @promise GetCuePointsPromise
     * @fulfill {VimeoCuePoint[]} The cue points added to the video.
     * @reject {UnsupportedError} Cue points are not supported with the current
     *         player or browser.
     */

    /**
     * Get an array of the cue points added to the video.
     *
     * @return {GetCuePointsPromise}
     */

  }, {
    key: "getCuePoints",
    value: function getCuePoints() {
      return this.get('cuePoints');
    }
    /**
     * A promise to get the current time of the video.
     *
     * @promise GetCurrentTimePromise
     * @fulfill {number} The current time in seconds.
     */

    /**
     * Get the current playback position in seconds.
     *
     * @return {GetCurrentTimePromise}
     */

  }, {
    key: "getCurrentTime",
    value: function getCurrentTime() {
      return this.get('currentTime');
    }
    /**
     * A promise to set the current time of the video.
     *
     * @promise SetCurrentTimePromise
     * @fulfill {number} The actual current time that was set.
     * @reject {RangeError} the time was less than 0 or greater than the
     *         video’s duration.
     */

    /**
     * Set the current playback position in seconds. If the player was
     * paused, it will remain paused. Likewise, if the player was playing,
     * it will resume playing once the video has buffered.
     *
     * You can provide an accurate time and the player will attempt to seek
     * to as close to that time as possible. The exact time will be the
     * fulfilled value of the promise.
     *
     * @param {number} currentTime
     * @return {SetCurrentTimePromise}
     */

  }, {
    key: "setCurrentTime",
    value: function setCurrentTime(currentTime) {
      return this.set('currentTime', currentTime);
    }
    /**
     * A promise to get the duration of the video.
     *
     * @promise GetDurationPromise
     * @fulfill {number} The duration in seconds.
     */

    /**
     * Get the duration of the video in seconds. It will be rounded to the
     * nearest second before playback begins, and to the nearest thousandth
     * of a second after playback begins.
     *
     * @return {GetDurationPromise}
     */

  }, {
    key: "getDuration",
    value: function getDuration() {
      return this.get('duration');
    }
    /**
     * A promise to get the ended state of the video.
     *
     * @promise GetEndedPromise
     * @fulfill {boolean} Whether or not the video has ended.
     */

    /**
     * Get the ended state of the video. The video has ended if
     * `currentTime === duration`.
     *
     * @return {GetEndedPromise}
     */

  }, {
    key: "getEnded",
    value: function getEnded() {
      return this.get('ended');
    }
    /**
     * A promise to get the loop state of the player.
     *
     * @promise GetLoopPromise
     * @fulfill {boolean} Whether or not the player is set to loop.
     */

    /**
     * Get the loop state of the player.
     *
     * @return {GetLoopPromise}
     */

  }, {
    key: "getLoop",
    value: function getLoop() {
      return this.get('loop');
    }
    /**
     * A promise to set the loop state of the player.
     *
     * @promise SetLoopPromise
     * @fulfill {boolean} The loop state that was set.
     */

    /**
     * Set the loop state of the player. When set to `true`, the player
     * will start over immediately once playback ends.
     *
     * @param {boolean} loop
     * @return {SetLoopPromise}
     */

  }, {
    key: "setLoop",
    value: function setLoop(loop) {
      return this.set('loop', loop);
    }
    /**
     * A promise to set the muted state of the player.
     *
     * @promise SetMutedPromise
     * @fulfill {boolean} The muted state that was set.
     */

    /**
     * Set the muted state of the player. When set to `true`, the player
     * volume will be muted.
     *
     * @param {boolean} muted
     * @return {SetMutedPromise}
     */

  }, {
    key: "setMuted",
    value: function setMuted(muted) {
      return this.set('muted', muted);
    }
    /**
     * A promise to get the muted state of the player.
     *
     * @promise GetMutedPromise
     * @fulfill {boolean} Whether or not the player is muted.
     */

    /**
     * Get the muted state of the player.
     *
     * @return {GetMutedPromise}
     */

  }, {
    key: "getMuted",
    value: function getMuted() {
      return this.get('muted');
    }
    /**
     * A promise to get the paused state of the player.
     *
     * @promise GetLoopPromise
     * @fulfill {boolean} Whether or not the video is paused.
     */

    /**
     * Get the paused state of the player.
     *
     * @return {GetLoopPromise}
     */

  }, {
    key: "getPaused",
    value: function getPaused() {
      return this.get('paused');
    }
    /**
     * A promise to get the playback rate of the player.
     *
     * @promise GetPlaybackRatePromise
     * @fulfill {number} The playback rate of the player on a scale from 0.5 to 2.
     */

    /**
     * Get the playback rate of the player on a scale from `0.5` to `2`.
     *
     * @return {GetPlaybackRatePromise}
     */

  }, {
    key: "getPlaybackRate",
    value: function getPlaybackRate() {
      return this.get('playbackRate');
    }
    /**
     * A promise to set the playbackrate of the player.
     *
     * @promise SetPlaybackRatePromise
     * @fulfill {number} The playback rate was set.
     * @reject {RangeError} The playback rate was less than 0.5 or greater than 2.
     */

    /**
     * Set the playback rate of the player on a scale from `0.5` to `2`. When set
     * via the API, the playback rate will not be synchronized to other
     * players or stored as the viewer's preference.
     *
     * @param {number} playbackRate
     * @return {SetPlaybackRatePromise}
     */

  }, {
    key: "setPlaybackRate",
    value: function setPlaybackRate(playbackRate) {
      return this.set('playbackRate', playbackRate);
    }
    /**
     * A promise to get the played property of the video.
     *
     * @promise GetPlayedPromise
     * @fulfill {Array} Played Timeranges converted to an Array.
     */

    /**
     * Get the played property of the video.
     *
     * @return {GetPlayedPromise}
     */

  }, {
    key: "getPlayed",
    value: function getPlayed() {
      return this.get('played');
    }
    /**
     * A promise to get the qualities available of the current video.
     *
     * @promise GetQualitiesPromise
     * @fulfill {Array} The qualities of the video.
     */

    /**
     * Get the qualities of the current video.
     *
     * @return {GetQualitiesPromise}
     */

  }, {
    key: "getQualities",
    value: function getQualities() {
      return this.get('qualities');
    }
    /**
     * A promise to get the current set quality of the video.
     *
     * @promise GetQualityPromise
     * @fulfill {string} The current set quality.
     */

    /**
     * Get the current set quality of the video.
     *
     * @return {GetQualityPromise}
     */

  }, {
    key: "getQuality",
    value: function getQuality() {
      return this.get('quality');
    }
    /**
     * A promise to set the video quality.
     *
     * @promise SetQualityPromise
     * @fulfill {number} The quality was set.
     * @reject {RangeError} The quality is not available.
     */

    /**
     * Set a video quality.
     *
     * @param {string} quality
     * @return {SetQualityPromise}
     */

  }, {
    key: "setQuality",
    value: function setQuality(quality) {
      return this.set('quality', quality);
    }
    /**
     * A promise to get the seekable property of the video.
     *
     * @promise GetSeekablePromise
     * @fulfill {Array} Seekable Timeranges converted to an Array.
     */

    /**
     * Get the seekable property of the video.
     *
     * @return {GetSeekablePromise}
     */

  }, {
    key: "getSeekable",
    value: function getSeekable() {
      return this.get('seekable');
    }
    /**
     * A promise to get the seeking property of the player.
     *
     * @promise GetSeekingPromise
     * @fulfill {boolean} Whether or not the player is currently seeking.
     */

    /**
     * Get if the player is currently seeking.
     *
     * @return {GetSeekingPromise}
     */

  }, {
    key: "getSeeking",
    value: function getSeeking() {
      return this.get('seeking');
    }
    /**
     * A promise to get the text tracks of a video.
     *
     * @promise GetTextTracksPromise
     * @fulfill {VimeoTextTrack[]} The text tracks associated with the video.
     */

    /**
     * Get an array of the text tracks that exist for the video.
     *
     * @return {GetTextTracksPromise}
     */

  }, {
    key: "getTextTracks",
    value: function getTextTracks() {
      return this.get('textTracks');
    }
    /**
     * A promise to get the embed code for the video.
     *
     * @promise GetVideoEmbedCodePromise
     * @fulfill {string} The `<iframe>` embed code for the video.
     */

    /**
     * Get the `<iframe>` embed code for the video.
     *
     * @return {GetVideoEmbedCodePromise}
     */

  }, {
    key: "getVideoEmbedCode",
    value: function getVideoEmbedCode() {
      return this.get('videoEmbedCode');
    }
    /**
     * A promise to get the id of the video.
     *
     * @promise GetVideoIdPromise
     * @fulfill {number} The id of the video.
     */

    /**
     * Get the id of the video.
     *
     * @return {GetVideoIdPromise}
     */

  }, {
    key: "getVideoId",
    value: function getVideoId() {
      return this.get('videoId');
    }
    /**
     * A promise to get the title of the video.
     *
     * @promise GetVideoTitlePromise
     * @fulfill {number} The title of the video.
     */

    /**
     * Get the title of the video.
     *
     * @return {GetVideoTitlePromise}
     */

  }, {
    key: "getVideoTitle",
    value: function getVideoTitle() {
      return this.get('videoTitle');
    }
    /**
     * A promise to get the native width of the video.
     *
     * @promise GetVideoWidthPromise
     * @fulfill {number} The native width of the video.
     */

    /**
     * Get the native width of the currently‐playing video. The width of
     * the highest‐resolution available will be used before playback begins.
     *
     * @return {GetVideoWidthPromise}
     */

  }, {
    key: "getVideoWidth",
    value: function getVideoWidth() {
      return this.get('videoWidth');
    }
    /**
     * A promise to get the native height of the video.
     *
     * @promise GetVideoHeightPromise
     * @fulfill {number} The native height of the video.
     */

    /**
     * Get the native height of the currently‐playing video. The height of
     * the highest‐resolution available will be used before playback begins.
     *
     * @return {GetVideoHeightPromise}
     */

  }, {
    key: "getVideoHeight",
    value: function getVideoHeight() {
      return this.get('videoHeight');
    }
    /**
     * A promise to get the vimeo.com url for the video.
     *
     * @promise GetVideoUrlPromise
     * @fulfill {number} The vimeo.com url for the video.
     * @reject {PrivacyError} The url isn’t available because of the video’s privacy setting.
     */

    /**
     * Get the vimeo.com url for the video.
     *
     * @return {GetVideoUrlPromise}
     */

  }, {
    key: "getVideoUrl",
    value: function getVideoUrl() {
      return this.get('videoUrl');
    }
    /**
     * A promise to get the volume level of the player.
     *
     * @promise GetVolumePromise
     * @fulfill {number} The volume level of the player on a scale from 0 to 1.
     */

    /**
     * Get the current volume level of the player on a scale from `0` to `1`.
     *
     * Most mobile devices do not support an independent volume from the
     * system volume. In those cases, this method will always return `1`.
     *
     * @return {GetVolumePromise}
     */

  }, {
    key: "getVolume",
    value: function getVolume() {
      return this.get('volume');
    }
    /**
     * A promise to set the volume level of the player.
     *
     * @promise SetVolumePromise
     * @fulfill {number} The volume was set.
     * @reject {RangeError} The volume was less than 0 or greater than 1.
     */

    /**
     * Set the volume of the player on a scale from `0` to `1`. When set
     * via the API, the volume level will not be synchronized to other
     * players or stored as the viewer’s preference.
     *
     * Most mobile devices do not support setting the volume. An error will
     * *not* be triggered in that situation.
     *
     * @param {number} volume
     * @return {SetVolumePromise}
     */

  }, {
    key: "setVolume",
    value: function setVolume(volume) {
      return this.set('volume', volume);
    }
  }]);

  return Player;
}(); // Setup embed only if this is not a node environment


if (!isNode) {
  screenfull = initializeScreenfull();
  initializeEmbeds();
  resizeEmbeds();
  initAppendVideoMetadata();
  checkUrlTimeParam();
}

/* harmony default export */ __webpack_exports__["default"] = (Player);


/***/ }),

/***/ "../shared/ts/api/carousel/slide/adapters/slide-carousel.ts":
/*!******************************************************************!*\
  !*** ../shared/ts/api/carousel/slide/adapters/slide-carousel.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SlideCarouselAdapter; }
/* harmony export */ });
/* harmony import */ var Shared_ts_api_carousel_slide_slide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Shared/ts/api/carousel/slide/slide */ "../shared/ts/api/carousel/slide/slide.ts");
/* harmony import */ var Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Shared/ts/utils/html */ "../shared/ts/utils/html.ts");


class SlideCarouselAdapter {
  /**
   * An adapter Api that implements the ICarousel contract while communicating with the Slide Js Api
   * @param container Element
   */
  constructor(container) {
    this.api = void 0;
    this.container = void 0;
    this.parent = void 0;
    this.children = void 0;
    this.container = container;
    this.api = this.create(container);
    this.parent = this.api?.parent;
    this.children = this.api?.children;
  }
  create(element) {
    let result;
    if ((0,Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_1__.elementExists)(element)) {
      const id = element.querySelector('[id][class*="slide__into"]');
      if ((0,Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_1__.elementExists)(id)) {
        result = Shared_ts_api_carousel_slide_slide__WEBPACK_IMPORTED_MODULE_0__["default"].into(id, {
          root: element
        }, api => {
          api.root?.classList.add("slide--is-ready");
          return api;
        });
      } else {
        console.error({
          message: `An element requires the class name 'slide__into' and requires an id attribute. No element was found from the container element context.`,
          element
        });
      }
    }
    return result;
  }
  isAuto() {
    return this.api?.isAuto() ?? false;
  }
  setAuto(status) {
    this.api?.setAuto(status);
  }
  play(persistCurrentIndex) {
    this.api?.play(persistCurrentIndex);
  }
  pause() {
    this.api?.pause();
  }
  prev() {
    this.api?.prev();
  }
  next() {
    this.api?.next();
  }
  goto(index) {
    this.api?.goto(index);
  }
  watch(task) {
    this.api?.watch(task);
  }
  nextIndex() {
    return this.api?.nextIndex();
  }
  currentIndex() {
    return this.api?.currentIndex();
  }
  prevIndex() {
    return this.api?.prevIndex();
  }
  countChildren() {
    return this.api?.countChildren();
  }
  getDelay() {
    return this.api?.getDelay();
  }
  setDelay(delay) {
    return this.api?.setDelay(delay);
  }
  getIndex(index) {
    return this.api?.getIndex(index);
  }
  setIndex(index) {
    this.api?.setIndex(index);
  }
}

/***/ }),

/***/ "../shared/ts/api/carousel/slide/adapters/vimeo-slide-carousel.ts":
/*!************************************************************************!*\
  !*** ../shared/ts/api/carousel/slide/adapters/vimeo-slide-carousel.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ VimeoSlideCarouselAdapter; }
/* harmony export */ });
/* harmony import */ var Shared_ts_api_carousel_slide_adapters_slide_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Shared/ts/api/carousel/slide/adapters/slide-carousel */ "../shared/ts/api/carousel/slide/adapters/slide-carousel.ts");

class VimeoSlideCarouselAdapter extends Shared_ts_api_carousel_slide_adapters_slide_carousel__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * An adapter Api that implements the IVimeoCarousel contract while communicating with the Slide Js Api
   * @param container Element
   */
  constructor(container) {
    super(container);
  }
}

/***/ }),

/***/ "../shared/ts/api/carousel/slide/slide.ts":
/*!************************************************!*\
  !*** ../shared/ts/api/carousel/slide/slide.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export Slide */
// @ts-nocheck

const generate = function (properties, o) {
  const x = Object.defineProperties(o || {}, properties);
  return x;
};
const toArray = function (collection) {
  return Array.from(collection);
};
const slide = generate({
  defaults: {
    value: generate({
      delay: {
        value: 3000
      },
      noScroll: {
        value: "slide__into--no-scroll"
      },
      error: {
        value: "The passed error code could not be found."
      }
    })
  },
  docs: {
    value: generate({
      error: {
        value: "https://github.com/jamiedraws/Slide/wiki/Slide.js#api-errors"
      }
    })
  },
  errors: {
    value: generate({
      "ERR-E": {
        value: "The passed 'element' must be an element."
      },
      "ERR-P": {
        value: "The passed 'element' could not be found."
      },
      "ERR-N": {
        value: "The passed 'element' is not a node element."
      },
      "ERR-X": {
        value: "The passed 'index' is not a number."
      },
      "ERR-M": {
        value: "The passed error 'code' or 'message' is not a string."
      },
      "ERR-C": {
        value: "The passed error 'code' is not a string."
      }
    })
  },
  team: {
    value: []
  },
  request: {
    value: function (id) {
      return this.team[id];
    }
  },
  observer: {
    value: function (parent, children, cb) {
      if (window.hasOwnProperty("IntersectionObserver")) {
        const io = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (entry.intersectionRatio > 0 && entry.isIntersecting) {
              const items = toArray(children);
              const index = items.indexOf(entry.target);
              cb(index);
            }
          });
        }, {
          root: parent,
          rootMargin: "0px",
          threshold: 0.9
        });
        return function (children) {
          const items = toArray(children);
          items.forEach(function (item) {
            io.observe(item);
          });
        };
      } else {
        return function () {
          const noScroll = slide.defaults.noScroll;
          this.shim = true;
          this.parent.classList.add(noScroll);
        };
      }
    }
  },
  manager: {
    value: generate({
      config: {
        value: function (options) {
          const self = this;
          if (typeof options === "object") {
            Object.keys(options).forEach(function (option) {
              Object.defineProperty(self, option, {
                enumerable: true,
                value: options[option]
              });
            });
          }
        }
      },
      create: {
        value: function (api, id, parent, config) {
          const self = Object.create(api);
          Object.defineProperties(self, {
            name: {
              set: function (parent) {
                this.parent = parent;
              },
              get: function () {
                return this.parent.id;
              }
            },
            id: {
              value: id
            }
          });
          self.name = parent;
          this.config.call(self, config);
          return self;
        }
      },
      assign: {
        value: function () {
          const self = Object.create(this);
          self.index = 0;
          self.shim = false;
          self.auto = false;
          self.handleRotation = true;
          self.timer = 0;
          self.delay = slide.defaults.delay;
          self.scrollIntoViewOptions = {
            block: "nearest",
            inline: "start"
          };
          return self;
        }
      },
      observer: {
        value: function (parent, children) {
          const self = this;
          return slide.observer(parent, children, function (index) {
            self.setIndex(index);
            self.setCallback();
          });
        }
      },
      getIndex: {
        value: function (index) {
          let result = this.index;
          const children = this.children.length;
          if (typeof index === "number") {
            result = index;
          }
          if (result === children) {
            result = 0;
          } else if (result < 0) {
            result = children - 1;
          }
          return result;
        }
      },
      setIndex: {
        value: function (index) {
          this.index = this.getIndex(index);
        }
      },
      setRotation: {
        value: function () {
          const item = this.children[this.index];
          item.scrollIntoView(this.scrollIntoViewOptions);
        }
      },
      isValidNumber: {
        value: function (number) {
          return typeof number === "number" && !isNaN(number);
        }
      },
      setDelay: {
        value: function (time) {
          let parseTime = parseInt(time);
          const illegal = !this.isValidNumber(parseTime) || parseTime < slide.defaults.delay;
          if (illegal) {
            parseTime = this.delay;
          }
          this.delay = parseTime;
        }
      },
      setCallback: {
        value: function () {
          if (typeof this.handleCallback === "function") {
            this.handleCallback(this.index, this.getIndex(this.index - 1), this.getIndex(this.index + 1));
          }
        }
      },
      setTimer: {
        value: function (cb) {
          if (this.auto) {
            this.timer = setTimeout(cb, this.delay);
          } else {
            clearTimeout(this.timer);
          }
        }
      },
      routeCallback: {
        value: function (cb) {
          if (this.shim) {
            this.setCallback(cb);
          }
          cb();
        }
      },
      setTask: {
        value: function (index) {
          const self = this;
          self.setDelay();
          self.setIndex(index);
          if (this.handleRotation) {
            self.setRotation();
          }
          self.routeCallback(function () {
            self.setTimer(function () {
              self.setTask(self.index + 1);
            });
          });
        }
      }
    })
  },
  api: {
    value: generate({
      parent: {
        set: function (parent) {
          this.validateNodeElement(parent);
          const worker = slide.request(this.id);
          worker.id = this.id;
          worker.parent = parent;
          worker.observe = worker.observer(worker.parent, parent.children);
          this.children = parent.children;
        },
        get: function () {
          const worker = slide.request(this.id);
          return worker.parent;
        }
      },
      validateNodeElement: {
        value: function (element) {
          if (typeof element !== "object") {
            this.getError("ERR-E");
          }
          if (element === null) {
            this.getError("ERR-P");
          }
          if (element.nodeType !== 1) {
            this.getError("ERR-N");
          }
          return true;
        }
      },
      toArray: {
        value: toArray
      },
      children: {
        set: function () {
          const worker = slide.request(this.id);
          worker.children = worker.parent.children;
          worker.observe(worker.children);
        },
        get: function () {
          const worker = slide.request(this.id);
          return worker.children;
        }
      },
      isAuto: {
        value: function () {
          const worker = slide.request(this.id);
          return worker.auto;
        }
      },
      setAuto: {
        value: function (status) {
          const worker = slide.request(this.id);
          if (typeof status === "boolean") {
            worker.auto = status;
          }
        }
      },
      setScrollIntoView: {
        value: function (options) {
          const worker = slide.request(this.id);
          if (typeof options === "object" || typeof options === "boolean") {
            worker.scrollIntoViewOptions = options;
          }
        }
      },
      watch: {
        value: function (task) {
          const worker = slide.request(this.id);
          worker.handleCallback = task.bind(this);
          if (!("IntersectionObserver" in window)) {
            worker.setCallback();
          }
        }
      },
      countChildren: {
        value: function () {
          return this.children.length;
        }
      },
      getDelay: {
        value: function () {
          const worker = slide.request(this.id);
          return worker.delay;
        }
      },
      setDelay: {
        value: function (delay) {
          const worker = slide.request(this.id);
          worker.setDelay(delay);
        }
      },
      setError: {
        value: function (code, message) {
          if (typeof code === "string" && typeof message === "string") {
            Object.defineProperty(slide.errors, code, {
              value: message
            });
          } else {
            this.getError("ERR-M");
          }
        }
      },
      getError: {
        value: function (code) {
          if (typeof code !== "string") {
            code = "ERR-C";
          }
          const error = slide.errors[code] || slide.defaults.error;
          const help = slide.docs.error;
          const message = code + ": " + error + " / " + help;
          throw message;
        }
      },
      hasError: {
        value: function (code) {
          return slide.errors.hasOwnProperty(code);
        }
      },
      config: {
        value: function (options) {
          const worker = slide.request(this.id);
          worker.config.call(this, options);
        }
      },
      setShim: {
        enumerable: true,
        value: function (status) {
          const worker = slide.request(this.id);
          if (typeof status === "boolean") {
            worker.shim = status;
          }
        }
      },
      play: {
        enumerable: true,
        value: function (persistCurrentIndex) {
          const worker = slide.request(this.id);
          const index = typeof persistCurrentIndex === "boolean" && persistCurrentIndex ? worker.index : worker.index + 1;
          this.pause();
          worker.auto = true;
          worker.setTask(index);
        }
      },
      pause: {
        enumerable: true,
        value: function () {
          const worker = slide.request(this.id);
          worker.auto = false;
          clearTimeout(worker.timer);
        }
      },
      prev: {
        enumerable: true,
        value: function () {
          const worker = slide.request(this.id);
          this.pause();
          worker.setTask(worker.index - 1);
        }
      },
      next: {
        enumerable: true,
        value: function () {
          const worker = slide.request(this.id);
          this.pause();
          worker.setTask(worker.index + 1);
        }
      },
      prevIndex: {
        value: function () {
          const worker = slide.request(this.id);
          return worker.getIndex(worker.index - 1);
        }
      },
      nextIndex: {
        value: function () {
          const worker = slide.request(this.id);
          return worker.getIndex(worker.index + 1);
        }
      },
      currentIndex: {
        value: function () {
          const worker = slide.request(this.id);
          return worker.index;
        }
      },
      getIndex: {
        value: function (index) {
          if (typeof index !== "number") {
            this.getError("ERR-X");
          }
          const worker = slide.request(this.id);
          return worker.getIndex(index);
        }
      },
      setIndex: {
        value: function (index) {
          if (typeof index !== "number") {
            this.getError("ERR-X");
          }
          const worker = slide.request(this.id);
          return worker.setIndex(index);
        }
      },
      handleRotation: {
        value: function (status) {
          const worker = slide.request(this.id);
          if (typeof status === "boolean") {
            worker.handleRotation = status;
          }
        }
      },
      goto: {
        enumerable: true,
        value: function (index) {
          if (typeof index !== "number") {
            this.getError("ERR-X");
          }
          const worker = slide.request(this.id);
          this.pause();
          worker.setIndex(index);
          worker.setTask();
        }
      }
    })
  },
  interface: {
    value: generate({
      into: {
        value: function (parent, init, app) {
          const worker = slide.manager.assign();
          let task = app;
          let options = {};
          slide.team.push(worker);
          if (typeof init === "function") {
            task = init;
          }
          if (typeof init === "object") {
            options = init;
          } else if (typeof app === "object") {
            options = app;
          }
          const ui = slide.manager.create(slide.api, slide.team.length - 1, parent, options);
          return task.call(ui, ui);
        }
      },
      proto: {
        value: function (parameters) {
          if (typeof parameters === "object") {
            Object.create(slide.api, parameters);
            Object.keys(parameters).forEach(function (parameter) {
              Object.defineProperty(slide.api, parameter, {
                writable: false,
                configurable: false,
                enumerable: true,
                value: parameters[parameter]
              });
            });
          }
        }
      }
    })
  }
});
const Slide = slide.interface;
/* harmony default export */ __webpack_exports__["default"] = (Slide);

/***/ }),

/***/ "../shared/ts/components/carousel.ts":
/*!*******************************************!*\
  !*** ../shared/ts/components/carousel.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Carousel; }
/* harmony export */ });
/* harmony import */ var Shared_ts_observers_intersection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Shared/ts/observers/intersection */ "../shared/ts/observers/intersection.ts");
/* harmony import */ var Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Shared/ts/utils/html */ "../shared/ts/utils/html.ts");


class Carousel {
  /**
   * Represents the CSS class name for the selected thumbnail button
   */

  /**
   * Represents the relationship between the carousel's container element and it's connected Carousel interface
   */

  /**
   * Represents the relationship between the carousel's container element and it's connected event interface
   */

  /**
   * Represents the relationship between the carousel's container element and it's connected control interface
   */

  /**
   * Represents the element containing the carousel along with other user-interface components
   */

  /**
   * Takes a carousel interface and integrates it with basic play controls
   * @param context ICarousel
   */
  constructor(context) {
    this.container = void 0;
    this.container = context.container;
    Carousel.baseInitialize(context, this);
    Carousel.observeContainer(context, this);
  }

  /**
   * Takes the ICarousel interface and uses the container element as a key to establish a new context to the interface. Next, a new watch callback is established that will notify observers on each rotation.
   * @param context ICarousel
   */
  static baseInitialize(context, carousel) {
    if (!context.container) return;
    Carousel.context.set(context.container, context);
    Carousel.events.set(context.container, []);
    context.watch(() => {
      Carousel.push(context, "rotation");
    });
  }

  /**
   * Filters through all events matching a specified name and invokes the handler callback function
   * @param context ICarousel
   * @param name string
   */
  static push(context, name) {
    if (!context.container) return;
    const events = Carousel.events.get(context.container);
    if (!events) return;
    events.filter(event => event.name === name).forEach(event => event.handler(context.currentIndex(), context.prevIndex(), context.nextIndex()));
  }

  /**
   * Adds an event to be captured where a handler callback function can be invoked
   * @param name string
   * @param handler function
   */
  on(name, handler) {
    if (!this.container) return;
    const events = Carousel.events.get(this.container);
    if (!events) return;
    events.push({
      name: name,
      handler: handler
    });
  }

  /**
   * Removes an event from being captured
   * @param name string
   * @param handler function
   */
  off(name, handler) {
    if (!this.container) return;
    const events = Carousel.events.get(this.container);
    if (!events) return;
    const result = events.find(event => event.name === name && event.handler === handler);
    if (!result) return;
    const index = events.indexOf(result);
    events.splice(index, 1);
  }

  /**
   * Takes the carousel's container element as a key to look up it's connected carousel interface and returns the interface.
   * @param container Element
   * @returns ICarousel
   */
  static getContext(container) {
    return this.context.get(container);
  }

  /**
   * Takes the ICarousel interface and reads in any available key-value pairs from the "data-carousel-config" HTML attribute into an attribute processor.
   * @param context ICarousel
   */
  static updateAttributes(context, carousel) {
    if (!context.container) return;
    const config = context.container.getAttribute("data-carousel-config");
    if (config) {
      try {
        carousel.processAttributes(JSON.parse(config), context);
      } catch (error) {
        console.warn(error);
      }
    }
  }

  /**
   * Takes the ICarouselConfig interface and converts key-value pairs into a string representation of the carousel configuration. This configuration replaces the previous configuration on data-carousel-config attribute.
   * @param config ICarouselConfig
   */
  setAttributes(config) {
    const container = this.container;
    try {
      container.dataset.carouselConfig = JSON.stringify(config);
    } catch (error) {
      console.warn(error);
    }
  }

  /**
   * Takes an ICarouselConfig interface along with an ICarousel interface and processes specific keys to operate using its values
   * @param config ICarouselConfig
   * @param context ICarousel
   */
  processAttributes(config, context) {
    if (config.auto) {
      context.setAuto(config.auto);
    }
    if (config.delay) {
      context.setDelay(config.delay);
    }
  }

  /**
   * Takes the ICarousel interface, creates a new mutation observer on the container element and observes for attribute changes which will call the updateAttributes method
   * @param context ICarousel
   */
  static observeContainer(context, carousel) {
    if (!context.container) return;
    this.updateAttributes(context, carousel);
    const observer = new MutationObserver(mutationRecords => {
      Carousel.updateAttributes(context, carousel);
    });
    observer.observe(context.container, {
      attributes: true
    });
  }

  /**
   * Navigates to a designated slide.
   * @param index number
   */
  goto(index) {
    if (!this.container) return;
    const context = Carousel.getContext(this.container);
    if (!context) return;
    context.goto(index);
  }

  /**
   * Plays the carousel continuously.
   */
  play(persistCurrentIndex) {
    if (!this.container) return;
    const context = Carousel.getContext(this.container);
    if (!context) return;
    context.play(persistCurrentIndex);
  }

  /**
   * Pauses the carousel
   */
  pause() {
    if (!this.container) return;
    const context = Carousel.getContext(this.container);
    if (!context) return;
    context.pause();
  }

  /**
   * Advances the carousel to the next slide
   */
  next() {
    if (!this.container) return;
    const context = Carousel.getContext(this.container);
    if (!context) return;
    context.next();
  }

  /**
   * Advances the carousel to the previous slide
   */
  prev() {
    if (!this.container) return;
    const context = Carousel.getContext(this.container);
    if (!context) return;
    context.prev();
  }

  /**
   * Enables the carousel to play continuously when the carousel's container element intersects the viewport; otherwise, the carousel will automatically pause.
   */
  autoplay() {
    if (!this.container) return;
    const self = this;
    const context = Carousel.getContext(this.container);
    if (!context) return;
    const id = context.parent?.id;
    let rangeControl = false;
    (0,Shared_ts_observers_intersection__WEBPACK_IMPORTED_MODULE_0__.observer)(`#${id}`, {
      inRange: record => {
        if (!rangeControl) {
          rangeControl = true;
          self.play(true);
        }
      },
      outRange: record => {
        if (rangeControl) {
          rangeControl = false;
          self.pause();
        }
      },
      unObserve: false,
      options: {
        threshold: [0.75]
      }
    });
  }

  /**
   * Enables the carousel to activate the previous and next methods through user-interface components
   */
  enablePrevNextControls() {
    if (!this.container) return;
    const context = Carousel.getContext(this.container);
    if (!context) return;
    const prevButton = context.container?.querySelector(".slide__prev");
    const nextButton = context.container?.querySelector(".slide__next");
    prevButton?.addEventListener("click", this.prev.bind(context));
    nextButton?.addEventListener("click", this.next.bind(context));
  }

  /**
   * Enables the carousel to activate the play and pause methods through user-interface components
   */
  enablePlayPauseControls() {
    if (!this.container) return;
    const context = Carousel.getContext(this.container);
    if (!context) return;
    const playButton = context.container?.querySelector(".slide__play");
    const pauseButton = context.container?.querySelector(".slide__pause");
    playButton?.addEventListener("click", event => this.play());
    pauseButton?.addEventListener("click", this.pause.bind(context));
  }

  /**
   * Uses the array of thumbnail buttons to locate the previous button with the thumbnail CSS class name and removes it. Then, assigns the CSS class name to the current thumbnail button.
   * @param thumbnailButton Element
   * @param thumbnailButtons Element[]
   */
  static updateThumbnailNavigationMarker(thumbnailButton, thumbnailButtons) {
    const previousButton = thumbnailButtons.find(thumbnailButton => thumbnailButton.classList.contains(Carousel.currentThumbnailCSSClassName));
    if (previousButton) {
      previousButton.classList.remove(Carousel.currentThumbnailCSSClassName);
    }
    if (thumbnailButton) {
      thumbnailButton.classList.add(Carousel.currentThumbnailCSSClassName);
    }
  }

  /**
   * Takes an thumbnailButton element and extracts the index value from it and navigates the carousel to the specified index
   * @param thumbnailButton Element
   * @param context ICarousel
   */
  static updateThumbnailNavigation(thumbnailButton, context) {
    const index = parseInt(thumbnailButton.getAttribute("data-slide-index") ?? "");
    context.goto(index);
  }

  /**
   * Uses an index number to target a specific thumbnailButton element and then updates the thumbnail navigation marker with that element
   * @param index number
   * @param context ICarousel
   */
  static updateThumbnailNavigationMarkerByIndex(index, context) {
    if (!context.container) return;
    const hasThumbnailButtons = Carousel.thumbnails.has(context.container);
    if (hasThumbnailButtons) {
      const thumbnailButtons = Carousel.thumbnails.get(context.container);
      const currentButton = thumbnailButtons?.find(thumbnailButton => parseInt(thumbnailButton.getAttribute("data-slide-index") ?? "") === index);
      if (!currentButton || !thumbnailButtons) return;
      Carousel.updateThumbnailNavigationMarker(currentButton, thumbnailButtons);
    }
  }

  /**
   * Enables the carousel to activate thumbnail controls through user-interface components
   */
  enableThumbnailControls(eventCallback) {
    if (!this.container) return;
    const thumbnailButtons = (0,Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_1__.enumerateElements)(this.container.querySelectorAll(".slide__thumbnail"));
    Carousel.thumbnails.set(this.container, thumbnailButtons);
    thumbnailButtons.forEach(thumbnailButton => {
      thumbnailButton.addEventListener("click", event => {
        const currentButton = event.target;
        Carousel.updateThumbnailNavigation(currentButton, this);
        Carousel.updateThumbnailNavigationMarker(currentButton, thumbnailButtons);
        if (typeof eventCallback === "function") eventCallback(event);
      });
    });
    const context = Carousel.getContext(this.container);
    if (!context) return;
    this.on("rotation", currentIndex => {
      if (currentIndex === undefined) return;
      Carousel.updateThumbnailNavigationMarkerByIndex(currentIndex, context);
    });
  }
}
Carousel.currentThumbnailCSSClassName = "slide__thumbnail--is-selected";
Carousel.context = new WeakMap();
Carousel.events = new WeakMap();
Carousel.controls = new WeakMap();
Carousel.thumbnails = new WeakMap();

/***/ }),

/***/ "../shared/ts/components/vimeo-carousel.ts":
/*!*************************************************!*\
  !*** ../shared/ts/components/vimeo-carousel.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ VimeoCarousel; }
/* harmony export */ });
/* harmony import */ var Shared_ts_utils_vimeo_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Shared/ts/utils/vimeo-manager */ "../shared/ts/utils/vimeo-manager.ts");
/* harmony import */ var Shared_ts_components_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Shared/ts/components/carousel */ "../shared/ts/components/carousel.ts");
/* harmony import */ var Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Shared/ts/utils/html */ "../shared/ts/utils/html.ts");



class VimeoCarousel extends Shared_ts_components_carousel__WEBPACK_IMPORTED_MODULE_1__["default"] {
  /**
   * Represents the VimeoManager instance
   */

  /**
   * Represents the relationship between the IVimeoCarousel interface and it's connected IVimeoCarouselRepository interface
   */

  /**
   * Represents the endpoint URL for the Vimeo Player
   */

  /**
   * Extends the Carousel's base functionality by allowing Vimeo background video to automatically advance to the next slide once the video finishes.
   * @param elements HTMLList
   */
  constructor(context) {
    super(context);
    VimeoCarousel.initialize(context);
  }

  /**
   * Takes the IVimeoCarousel interface and creates a connection to a new Vimeo Repository interface and then establishes a watch operation for each rotation
   * @param context VimeoCarousel
   */
  static initialize(context) {
    VimeoCarousel.connectCarouselApiToVimeoRepository(context);
    VimeoCarousel.createWatch(context);
  }

  /**
   * Takes the IVimeoCarousel interface and sets it as a key to create a new Vimeo Repository interface
   * @param context IVimeoCarousel
   */
  static connectCarouselApiToVimeoRepository(context) {
    this.vimeoRepository.set(context, {
      isInitialized: false,
      isIframeProcessed: new WeakMap(),
      isAutoplay: false
    });
  }

  /**
   * Takes the IVimeoCarousel interface context and establishes a watch callback for each rotation. For each rotation, the previous and next slide's Vimeo iframe should pause while the current slide should determine if there is a Vimeo iframe element that can be interacted with.
   * @param context IVimeoCarousel
   */
  static createWatch(context) {
    const repo = VimeoCarousel.vimeoRepository.get(context);
    if (!repo) return;
    context.watch((currentIndex, previousIndex, nextIndex) => {
      VimeoCarousel.push(context, "rotation");
      const previousSlide = context.children?.item(previousIndex);
      if (!previousSlide) return;
      VimeoCarousel.pauseVimeo(previousSlide).catch(error => console.info(error));
      const currentSlide = context.children?.item(currentIndex);
      if (!currentSlide) return;
      VimeoCarousel.processPosterImage(currentSlide).then(() => VimeoCarousel.initializeCarouselVimeoApi(context, repo)).catch(error => console.info(error));
      VimeoCarousel.processCurrentVimeoIframe(currentSlide, context, repo).catch(() => VimeoCarousel.initializeCarouselVimeoApi(context, repo));
      const nextSlide = context.children?.item(nextIndex);
      if (!nextSlide) return;
      VimeoCarousel.processPosterImage(nextSlide).catch(error => console.info(error));
      VimeoCarousel.pauseVimeo(nextSlide).catch(error => console.info(error));
    });
  }

  /**
   * If the Vimeo iframe has not been processed yet, initialize the Vimeo iframe and determine if the Vimeo Carousel is initialized. Otherwise, access the current Vimeo iframe and process playback events. The IVimeoCarousel interface will be returned through the Promise resolve state.
   * @param slide Element
   * @param context IVimeoCarousel
   * @param repo IVimeoCarouselRepository
   * @returns Promise<IVimeoCarousel>
   */
  static processCurrentVimeoIframe(slide, context, repo) {
    return new Promise((resolve, reject) => {
      if (!repo.isIframeProcessed.has(slide)) {
        repo.isIframeProcessed.set(slide, true);
        VimeoCarousel.initializeVimeoIframe(slide, context, repo).then(context => {
          VimeoCarousel.manageAutoPlayEvent(slide, context, repo);
          if (!repo.isInitialized) {
            VimeoCarousel.initializeCarouselVimeoApi(context, repo);
            resolve(context);
          }
        }).catch(error => {
          VimeoCarousel.fallbackAutoPlayEvent(context);
          reject(error);
        });
      } else {
        VimeoCarousel.getVimeoIframeOrCreate(slide).then(iframe => {
          VimeoCarousel.setVimeoAutoplayStatus(iframe, context, repo);
          VimeoCarousel.manageAutoPlayEvent(slide, context, repo);
        }).catch(error => reject(error));
      }
    });
  }

  /**
   * Takes a placeholder element and attempts to retrieve the 9-digit Vimeo Id by either the `data-vimeo-carousel-id`, `data-vimeo-id`. If obtainable, the 9-digit Vimeo Id is returned; otherwise, null is returned.
   * @param placeholder Element
   * @returns string | null
   */
  static getVimeoIdByPlaceholder(placeholder) {
    if (placeholder.hasAttribute("data-vimeo-carousel-id")) {
      const match = placeholder.getAttribute("data-vimeo-carousel-id")?.match(/^\d{9}/i) ?? [];
      if (match.length === 1) {
        return match.shift();
      }
    }
    if (placeholder.hasAttribute("data-vimeo-id")) {
      return this.vimeoManager.getIdByUrl(placeholder.getAttribute("data-vimeo-id") ?? "");
    }
    if (placeholder.hasAttribute("data-vimeo-url")) {
      return this.vimeoManager.getIdByUrl(placeholder.getAttribute("data-vimeo-url") ?? "");
    }
  }

  /**
   * Takes a slide element and returns the Vimeo placeholder element.
   * @param slide Element
   * @returns Element
   */
  static getVimeoPlaceholderBySlide(slide) {
    return slide.querySelector("[data-vimeo-carousel-id]") ?? slide.querySelector("[data-vimeo-id]") ?? slide.querySelector("[data-vimeo-url]");
  }

  /**
   * Takes a slide element and determines if a poster image element hasn't been inserted into the document. If determined, a new image element will be created and referenced to the poster thumbnail image that is associated with the Vimeo Id. The created image will then be inserted into the document next to the Vimeo Iframe element.
   * @param slide Element
   */
  static processPosterImage(slide) {
    return new Promise((resolve, reject) => {
      const placeholder = this.getVimeoPlaceholderBySlide(slide);
      if (!placeholder) {
        return reject({
          message: `The placeholder for the current slide could not be obtained.`,
          slide
        });
      }
      const iframe = slide.querySelector("iframe");
      const id = this.vimeoManager.getIdByIframe(iframe) ?? this.getVimeoIdByPlaceholder(placeholder);
      if (!id) {
        return reject({
          message: `The Vimeo Id for the current slide could not be obtained.`,
          slide
        });
      }
      const coords = slide.getBoundingClientRect();
      this.vimeoManager.generatePosterImage(id, {
        width: Math.ceil(coords.width).toString(),
        height: Math.ceil(coords.height).toString()
      }).then(src => {
        const image = slide.querySelector("img");
        if (image) {
          return reject({
            message: `A poster image for the current slide already exists.`,
            slide,
            image
          });
        }
        const img = (0,Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_2__.createElement)("img", {
          src,
          alt: ""
        });
        switch (true) {
          case (0,Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_2__.elementExists)(iframe):
            iframe.insertAdjacentElement("beforebegin", img);
            break;
          case (0,Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_2__.elementExists)(placeholder):
            placeholder.insertAdjacentElement("afterbegin", img);
            break;
        }
        img.onload = event => resolve();
        img.onerror = event => reject(event);
      }).catch(error => reject({
        message: `The poster image could not be obtained for Vimeo Id ${id}`,
        slide
      }));
    });
  }

  /**
   * Enables the autoplay status and attempts to play the current Vimeo iframe if the Vimeo iframe is a background video.
   * @param slide Element
   * @param context IVimeoCarousel
   * @param repo IVimeoCarouselRepository
   */
  static manageAutoPlayEvent(slide, context, repo) {
    if (repo.isAutoplay) {
      context.setAuto(true);
      VimeoCarousel.playVimeo(slide).catch(error => VimeoCarousel.fallbackAutoPlayEvent(context));
    }
  }

  /**
   * Determines if the Slide auto play mode is enabled and invokes the play method while persisting the current index.
   * @param context IVimeoCarousel
   */
  static fallbackAutoPlayEvent(context) {
    if (context.isAuto()) {
      context.play(true);
    }
  }

  /**
   * Fetches the Vimeo iframe element along with the Vimeo Player and determines if the Vimeo iframe contains a background video; then, it processes the Vimeo Player event listeners. If a Vimeo iframe element could not be found, attempt to determine if a Vimeo iframe element will be available through the placeholder element. The IVimeoCarousel interface object will be returned through the Promise resolve state. Through the Promise reject state, an error response will be logged if the Vimeo iframe could not be loaded or if there is no placeholder for a Vimeo iframe element.
   * @param slide Element
   * @param context IVimeoCarousel
   * @returns Promise<IVimeoCarousel>
   */
  static initializeVimeoIframe(slide, context, repo) {
    return new Promise((resolve, reject) => {
      VimeoCarousel.getVimeoIframeOrCreate(slide).then(iframe => {
        context.pause();
        VimeoCarousel.getVimeoPlayer(iframe).then(player => {
          VimeoCarousel.setVimeoAutoplayStatus(iframe, context, repo);
          VimeoCarousel.processVimeoPlayerEvent(player, context, repo);
        });
        resolve(context);
        iframe.onerror = () => reject({
          message: `Vimeo iframe initialization failure`,
          slide: slide
        });
      }).catch(error => {
        VimeoCarousel.processPlaceholder(slide, context, repo);
        reject(error);
      });
    });
  }

  /**
   * Creates a new Vimeo Player instance using the placeholder element [data-vimeo-id] attribute along with the element id. Afterwards, processes the Vimeo autoplay status and events.
   * @param slide Element
   * @param context IVimeoCarousel
   * @param repo IVimeoCarouselRepository
   */
  static processPlaceholder(slide, context, repo) {
    const placeholder = this.getVimeoPlaceholderBySlide(slide);
    if (placeholder && (0,Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_2__.elementExists)(placeholder)) {
      if (placeholder.hasAttribute("data-vimeo-id") || placeholder.hasAttribute("data-vimeo-url")) {
        const elementId = placeholder.id;
        const vimeoId = this.vimeoManager.getIdByUrl(placeholder.getAttribute("data-vimeo-id") ?? "") ?? this.vimeoManager.getIdByUrl(placeholder.getAttribute("data-vimeo-url") ?? "");
        if (!vimeoId) return;
        const player = VimeoCarousel.vimeoManager.createPlayerById(elementId, vimeoId);
        VimeoCarousel.setVimeoAutoplayStatus(placeholder, context, repo);
        VimeoCarousel.processVimeoPlayerEvent(player, context, repo);
      }
    }
  }

  /**
   * Takes an element, either a placeholder element or a Vimeo iframe element, and determines if the Vimeo Player is a background video.
   * @param element Element
   * @param context IVimeoCarousel
   * @param repo IVimeoCarouselRepository
   */
  static setVimeoAutoplayStatus(element, context, repo) {
    if (element.hasAttribute("src")) {
      const src = element.getAttribute("src");
      repo.isAutoplay = src?.match(/(autoplay|background)=1/g) ? true : false;
      return;
    }
    if (element.hasAttribute("data-vimeo-background")) {
      const attr = element.getAttribute("data-vimeo-background");
      repo.isAutoplay = attr?.match("true") ? true : false;
      return;
    }
    repo.isAutoplay = false;
  }

  /**
   * Takes the Vimeo Player and adds the "ended" event listener. When this event fires, access the next slide through the IVimeoCarousel interface object and attempt to restart the Vimeo iframe element. If a Vimeo iframe element is within the next slide and the Slide is in autoplay mode, advance the Slide by one; otherwise, if the Slide is in autoplay mode, enable autoplay.
   * @param player Player
   * @param context IVimeoCarousel
   * @param repo IVimeoCarouselRepository
   */
  static processVimeoPlayerEvent(player, context, repo) {
    player.on("play", data => {
      if (context.isAuto()) {
        context.pause();
        context.setAuto(true);
      }
    });
    player.on("ended", data => {
      const nextSlide = context.children?.item(context.nextIndex() ?? -1);
      if (!nextSlide) return;
      VimeoCarousel.restartVimeo(nextSlide).then(() => {
        if (context.isAuto()) {
          context.next();
        }
      }).catch(() => {
        if (context.isAuto()) {
          context.play();
        }
      });
    });
  }

  /**
   * Takes the IVimeoCarousel interface object along with it's connected repository. The repository's initialization status is set to true and the slide's root element receives the "slide--ready-for-vimeo" CSS class name.
   * @param context IVimeoCarousel
   * @param repo IVimeoCarouselRepository
   */
  static initializeCarouselVimeoApi(context, repo) {
    if (!repo.isInitialized) {
      repo.isInitialized = true;
      context.container?.classList.add("slide--ready-for-vimeo");
    }
  }

  /**
   * Takes a slide element and returns the Vimeo iframe element. Either the existing Vimeo iframe element will be returned or a new Vimeo iframe element will be created. The Vimeo iframe element will be returned through the Promise resolve state. Through the Promise reject state, an error response will be logged either when the Vimeo iframe element could not be created or when the placeholder doesn't contain the [data-vimeo-carousel-id] attribute.
   * @param slide Element
   * @returns Promise<HTMLIFrameElement>
   */
  static getVimeoIframeOrCreate(slide) {
    return new Promise((resolve, reject) => {
      VimeoCarousel.getVimeoIframe(slide).then(iframe => resolve(iframe)).catch(error => {
        const placeholder = slide.querySelector("[data-vimeo-carousel-id]");
        if (placeholder && (0,Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_2__.elementExists)(placeholder)) {
          VimeoCarousel.createIframe(placeholder).then(iframe => {
            VimeoCarousel.setIframeByPlaceholder(placeholder, iframe);
            resolve(iframe);
          }).catch(error => reject(`A Vimeo iframe could not be created. Reason: ${error}`));
        } else {
          reject({
            message: "[data-vimeo-carousel-id] was not found within the current slide",
            slide: slide
          });
        }
      });
    });
  }

  /**
   * Takes a slide element and returns a Vimeo iframe element if the element exists.
   * @param slide Element
   * @returns Promise<HTMLIFrameElement>
   */
  static getVimeoIframe(slide) {
    return new Promise((resolve, reject) => {
      const iframe = slide.querySelector(VimeoCarousel.vimeoPlayerIframeEndpoint);
      (0,Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_2__.elementExists)(iframe) ? resolve(iframe) : reject({
        message: "Vimeo iframe element was not found within the current slide",
        slide: slide
      });
    });
  }

  /**
   * Takes a Vimeo iframe element and returns it's connected player either from the Vimeo Player WeakMap repository or by new creation. The Vimeo Player is returned through the Promise resolve state. Through the Promise reject state, an error response, indicating the Vimeo Player could not be created, will be returned.
   * @param iframe HTMLIFrameElement
   * @returns Promise<Player>
   */
  static getVimeoPlayer(iframe) {
    return new Promise((resolve, reject) => {
      const player = VimeoCarousel.vimeoManager.getPlayerByIframe(iframe) ?? VimeoCarousel.vimeoManager.createPlayerByIframe(iframe);
      if (player) {
        resolve(player);
      } else {
        reject("A Vimeo Player instance could not be created.");
      }
    });
  }

  /**
   * Takes a slide element and attempts to play a Vimeo video. If the Vimeo iframe is found, the video will restart before it plays. The Player will be returned through the Promise resolve state. Through the Promise reject state, the error response will be returned either when the Vimeo video could not be restarted or when the Vimeo video could not play.
   * @param slide
   * @returns Promise<Player>
   */
  static playVimeo(slide) {
    return new Promise((resolve, reject) => {
      VimeoCarousel.restartVimeo(slide).then(player => {
        player.play().then(() => resolve(player)).catch(error => reject(error));
      }).catch(error => reject(error));
    });
  }

  /**
   * Takes a slide element and attempts to restart a Vimeo video. The Player will be returned through the Promise resolve state. Through the Promise reject state, an error response will be returned either when the Vimeo iframe element could not be returned, when the Vimeo Player could not be returned or when the Vimeo video could not be restarted.
   * @param slide Element
   * @returns Promise<Player>
   */
  static restartVimeo(slide) {
    return new Promise((resolve, reject) => {
      VimeoCarousel.getVimeoIframeOrCreate(slide).then(iframe => {
        VimeoCarousel.getVimeoPlayer(iframe).then(player => {
          player.setCurrentTime(0).catch(error => reject(error));
          resolve(player);
        }).catch(error => reject(error));
      }).catch(error => reject(error));
    });
  }

  /**
   * Takes a slide element and attempts to pause a Vimeo video. If the Vimeo iframe is found, the video will restart before it pauses. The Player will be returned through the Promise resolve state. Through the Promise reject state, an error response will be returned either when the Vimeo video could not be restarted or when the Vimeo video could not be paused.
   * @param slide HTMLElement
   * @returns Promise<Player>
   */
  static pauseVimeo(slide) {
    return new Promise((resolve, reject) => {
      this.restartVimeo(slide).then(player => {
        player.pause().catch(error => reject(error));
        resolve(player);
      }).catch(error => reject(error));
    });
  }

  /**
   * Create a method that takes a placeholder element with the [data-vimeo-carousel-id] attribute and creates a new Vimeo iframe element and Vimeo Player object using an Vimeo Id number extraction. The Vimeo iframe element is returned through the Promise resolve state. Through the Promise reject state, an error response is logged when the Vimeo iframe element could not be created.
   * @param element HTMLElement
   * @returns Promise<HTMLIFrameElement>
   */
  static createIframe(element) {
    return new Promise((resolve, reject) => {
      const id = element.getAttribute("data-vimeo-carousel-id") ?? "";
      if (id === "") {
        reject({
          message: `The value assigned to [data-vimeo-carousel-id] was blank. A Vimeo player cannot be initialized without a valid Vimeo id`,
          element
        });
      }
      VimeoCarousel.vimeoManager.createIframeById(id).then(iframe => {
        VimeoCarousel.vimeoManager.createPlayerByIframe(iframe);
        resolve(iframe);
      }).catch(error => reject(error));
    });
  }

  /**
   * Takes a Vimeo iframe element and appends it to the placeholder element.
   * @param element HTMLElement
   * @param iframe HTMLIFrameElement
   */
  static setIframeByPlaceholder(element, iframe) {
    if (!element) return;
    const hasIframe = element.querySelector(this.vimeoPlayerIframeEndpoint);
    if (hasIframe) return;
    element.appendChild(iframe);
  }

  /**
   * Resumes playing the Vimeo video and then advances to the next slide.
   */
  play(persistCurrentIndex) {
    if (!this.container) return;
    const context = VimeoCarousel.getContext(this.container);
    context.setAuto(true);
    const currentSlide = context.children?.item(context.currentIndex() ?? -1);
    if (!currentSlide) return;
    VimeoCarousel.getVimeoIframe(currentSlide).then(iframe => {
      VimeoCarousel.getVimeoPlayer(iframe).then(player => {
        player.play().catch(error => console.warn(error));
      });
    }).catch(error => {
      context.play(persistCurrentIndex);
    });
  }

  /**
   * Pauses the Vimeo video and the carousel
   */
  pause() {
    if (!this.container) return;
    const context = VimeoCarousel.getContext(this.container);
    context.pause();
    const currentSlide = context.children?.item(context.currentIndex() ?? -1);
    if (!currentSlide) return;
    VimeoCarousel.getVimeoIframe(currentSlide).then(iframe => {
      VimeoCarousel.getVimeoPlayer(iframe).then(player => {
        player.pause().catch(error => console.warn(error));
      });
    });
  }
}
VimeoCarousel.vimeoManager = new Shared_ts_utils_vimeo_manager__WEBPACK_IMPORTED_MODULE_0__["default"]();
VimeoCarousel.vimeoRepository = new WeakMap();
VimeoCarousel.vimeoPlayerIframeEndpoint = 'iframe[src^="https://player.vimeo.com/video/"]';

/***/ }),

/***/ "../shared/ts/observers/intersection.ts":
/*!**********************************************!*\
  !*** ../shared/ts/observers/intersection.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "observer": function() { return /* binding */ observer; }
/* harmony export */ });
/* harmony import */ var Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Shared/ts/utils/html */ "../shared/ts/utils/html.ts");


/**
 * IntersectionObserverConfig allows an optional inRange callback function to execute when an element intersects inside the viewport, allows an optional outRange callback function to execute when an element intersects outside the viewport, an optional boolean to unobserve elements and an optional configuration object to customize the Intersection Observer API behavior.
 */

/**
 * Handles observation of load items through the bounding client rectangle interface. This process will be used if the current browser does not support the Intersection Observer Api.
 * @param loadItems Element[]
 * @param config IntersectionObserverConfig
 */
const observeByBoundingClientRect = (loadItems, config) => {
  let active = false;
  const process = () => {
    if (active === false) {
      active = true;
      setTimeout(() => {
        loadItems.forEach(loadItem => {
          if (inView(loadItem)) {
            config?.inRange?.(loadItem);
            if (config?.unObserve ?? true) {
              loadItems = loadItems.filter(image => {
                return image !== loadItem;
              });
              if (loadItems.length === 0) {
                document.removeEventListener("scroll", process);
                window.removeEventListener("resize", process);
                window.removeEventListener("orientationchange", process);
              }
            }
          } else {
            config?.outRange?.(loadItem);
          }
        });
        active = false;
      }, 200);
    }
  };
  document.addEventListener("scroll", process);
  window.addEventListener("resize", process);
  window.addEventListener("orientationchange", process);
  window.addEventListener("DOMContentLoaded", process);
};

/**
 * Determines if the element is in the viewport and is visible based on it's display state and it's bounding client rectangle coordinates.
 * @param loadItem HTMLElement
 * @returns boolean
 */
const inView = loadItem => {
  return loadItem.getBoundingClientRect().top <= window.innerHeight && loadItem.getBoundingClientRect().bottom >= 0 && loadItem.style.display !== "none";
};

/**
 * Handles observeration of load item elements through the Intersection Observer Api
 * @param loadItems Element[]
 * @param config IntersectionObserverConfig
 */
const observeByApi = (loadItems, config) => {
  const loadItemObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0 && entry.isIntersecting) {
        config?.inRange?.(entry.target, entry);
        if (config?.unObserve ?? true) {
          loadItemObserver.unobserve(entry.target);
        }
      } else {
        config?.outRange?.(entry.target, entry);
      }
    });
  }, config?.options);
  loadItems.forEach(function (loadItem) {
    loadItemObserver.observe(loadItem);
  });
};

/**
 * Observer applies a string that represents a Document Element and observes when the element intersects in and out of the browser viewport. Optional configuration is provided through the IntersectionObserverConfig interface.
 * @param selector string = "[data-observe]"
 * @param config IntersectionObserverConfig
 */
const observer = function (selector, config) {
  if (selector === void 0) {
    selector = "[data-observe]";
  }
  let loadItems = (0,Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_0__.enumerateElements)(document.querySelectorAll(selector));
  if (!config) return;
  if ("IntersectionObserver" in window) {
    observeByApi(loadItems, config);
  } else {
    observeByBoundingClientRect(loadItems, config);
  }
};

/***/ }),

/***/ "../shared/ts/utils/data.ts":
/*!**********************************!*\
  !*** ../shared/ts/utils/data.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isObject": function() { return /* binding */ isObject; }
/* harmony export */ });
/* unused harmony exports isFunction, isString, isNumber, isArray, isNullOrUndefined */
const isFunction = type => {
  return typeof type === "function";
};
const isString = type => {
  return typeof type === "string";
};
const isNumber = type => {
  return typeof type === "number";
};
const isArray = type => {
  return Array.isArray(type);
};
const isObject = type => {
  return type === Object(type) && !isArray(type);
};
const isNullOrUndefined = type => {
  return type !== null && typeof type !== "undefined";
};

/***/ }),

/***/ "../shared/ts/utils/html.ts":
/*!**********************************!*\
  !*** ../shared/ts/utils/html.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appendElement": function() { return /* binding */ appendElement; },
/* harmony export */   "createElement": function() { return /* binding */ createElement; },
/* harmony export */   "elementExists": function() { return /* binding */ elementExists; },
/* harmony export */   "enumerateElements": function() { return /* binding */ enumerateElements; }
/* harmony export */ });
/* unused harmony exports setElementAttributes, renderTemplate, convertFragmentToHTMLElement, getJSONByElementAttribute */
/* harmony import */ var Shared_ts_utils_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Shared/ts/utils/data */ "../shared/ts/utils/data.ts");

const div = document.createElement("div");

/**
 * createElement takes a string tag name along with an optional object of attributes and returns a new HTMLElement.
 * @param tag string
 * @param attributes object
 * @return HTMLElement
 */
const createElement = (tag, attributes) => {
  const element = document.createElement(tag);
  return setElementAttributes(element, attributes);
};

/**
 * Takes an object representing an attribute key-value pair and assigns it to an HTMLElement. The HTMLElement will be returned.
 * @param element HTMLElement
 * @param attributes T
 * @returns HTMLElement
 */
const setElementAttributes = (element, attributes) => {
  if (attributes && Shared_ts_utils_data__WEBPACK_IMPORTED_MODULE_0__.isObject(attributes)) {
    Object.keys(attributes).forEach(attribute => {
      element.setAttribute(attribute, attributes[attribute]);
    });
  }
  return element;
};

/**
 * Takes a string representing an HTML template and converts it into a document fragment. The document fragment is returned.
 * @param template string
 * @returns DocumentFragment
 */
const renderTemplate = template => {
  const range = document.createRange();
  return range.createContextualFragment(template);
};

/**
 * Takes a document fragment and converts it into an HTML element. The Element is returned.
 * @param fragment DocumentFragment
 * @returns Element | null
 */
const convertFragmentToHTMLElement = fragment => {
  div.appendChild(fragment);
  return div.lastElementChild;
};

/**
 * appendElement takes an HTMLElement and appends it to the document body. The same element is then returned.
 * @param element HTMLElement
 * @return HTMLElement
 */
const appendElement = element => {
  document.body.appendChild(element);
  return element;
};

/**
 * elementExists takes an HTMLItem and will return true if the item exists either in the document body or in the document head.
 * @param element HTMLItem
 * @return boolean
 */
const elementExists = element => {
  return document.body.contains(element) || document.head.contains(element);
};

/**
 * enumerateElements takes an HTMLList and returns an element array.
 * @param elements HTMLList
 * @return Element[]
 */
const enumerateElements = elements => {
  let ar = [].slice.call(elements);
  return ar;
};

/**
 * Attempts to convert a JSON string value of an HTML attribute into JSON format.
 * @param element Element | null
 * @param attribute string
 * @returns JSON object
 */
const getJSONByElementAttribute = (element, attribute) => {
  let json = {};
  if (!element || !attribute) return json;
  try {
    const value = element.getAttribute(attribute);
    json = value !== null ? JSON.parse(value) : json;
  } catch (e) {
    const message = e instanceof Error ? e.message : String(e);
    console.debug(message);
  }
  return json;
};

/***/ }),

/***/ "../shared/ts/utils/resource.ts":
/*!**************************************!*\
  !*** ../shared/ts/utils/resource.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createAppendScript": function() { return /* binding */ createAppendScript; }
/* harmony export */ });
/* unused harmony exports createStylesheet, createScript, createAppendStylesheet */
/* harmony import */ var Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Shared/ts/utils/html */ "../shared/ts/utils/html.ts");

const createStylesheet = src => {
  return Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_0__.createElement("link", {
    href: src
  });
};
const createScript = src => {
  return Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_0__.createElement("script", {
    src: src
  });
};
const createAppendStylesheet = src => {
  const element = createStylesheet(src);
  return Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_0__.appendElement(element);
};
const createAppendScript = src => {
  const element = createScript(src);
  return Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_0__.appendElement(element);
};

/***/ }),

/***/ "../shared/ts/utils/vimeo-manager.ts":
/*!*******************************************!*\
  !*** ../shared/ts/utils/vimeo-manager.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ VimeoManager; }
/* harmony export */ });
/* harmony import */ var _vimeo_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vimeo/player */ "../node_modules/@vimeo/player/dist/player.es.js");
/* harmony import */ var Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Shared/ts/utils/html */ "../shared/ts/utils/html.ts");
/* harmony import */ var Shared_ts_utils_resource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Shared/ts/utils/resource */ "../shared/ts/utils/resource.ts");



class VimeoManager {
  /**
   * Represents the network endpoint for the Vimeo Player SDK library
   */

  /**
   * Represents the relationship between the Vimeo iframe element and the XMLHttpRequest object that it is connected to
   */

  /**
   * Represents the relationship between the Vimeo iframe element and the Vimeo Player instance that it is connected to
   */

  /**
   * Represents the relationship between the Vimeo Player instance and the Vimeo iframe element that it is connected to
   */

  /**
   * Creates a manager interface providing the ability to create, set and get a Vimeo iframe, a Vimeo Player instance and a Vimeo oEmbed object.
   */
  constructor() {}

  /**
   * Uses the Vimeo video id to make an oEmbed request. A promise object is returned where the resolve contains the XMLHttpRequest object.
   * @param id string
   * @returns Promise<XMLHttpRequest>
   */
  static requestoEmbed(id) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.addEventListener("load", () => resolve(xhr));
      xhr.addEventListener("error", () => reject(`The request could not be completed with ${id}`));
      xhr.open("GET", `https://vimeo.com/api/oembed.json?url=https://vimeo.com/${id}`);
      xhr.send();
    });
  }

  /**
   * Creates a new script element with a source pointing to the 3rd-party Vimeo Player SDK file
   * @returns Promise
   */
  requestPlayer() {
    const context = this;
    return new Promise((resolve, reject) => {
      if (!context.hasPlayerInstalled()) {
        const player = (0,Shared_ts_utils_resource__WEBPACK_IMPORTED_MODULE_2__.createAppendScript)(VimeoManager.vimeoPlayerSDKEndPoint);
        player.onload = () => resolve(`success`);
        player.onerror = () => reject(`The request to ${VimeoManager.vimeoPlayerSDKEndPoint} could not be completed.`);
      }
    });
  }

  /**
   * Determines if the 3rd-party Vimeo Player SDK file exists in the document
   * @returns boolean
   */
  hasPlayerInstalled() {
    return (0,Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_1__.elementExists)(document.querySelector(`script[src^="${VimeoManager.vimeoPlayerSDKEndPoint}"]`));
  }

  /**
   * Uses the Vimeo video id to create a Vimeo iframe element through an oEmbed request.
   * @param id string
   * @returns Promise<HTMLIFrameElement>
   */
  createIframeById(id) {
    const context = this;
    return new Promise((resolve, reject) => {
      const element = document.createElement("div");
      context.createoEmbedById(id).then(xhr => {
        const response = JSON.parse(xhr.response);
        element.innerHTML = response.html;
        const iframe = element.firstChild;
        VimeoManager.oEmbedRepo.set(iframe, xhr);
        resolve(iframe);
      }).catch(error => reject(error));
    });
  }

  /**
   * Uses the Vimeo video id to make an oEmbed request. A promise object is returned where the resolve state contains the oEmbed data stored in an XMLHttpRequest object.
   * @param id string
   * @returns Promise<XMLHttpRequest>
   */
  createoEmbedById(id) {
    return new Promise((resolve, reject) => {
      VimeoManager.requestoEmbed(id).then(xhr => resolve(xhr)).catch(error => reject(error));
    });
  }

  /**
   * Takes the Vimeo iframe element as a key to look up it's connected oEmbed data stored in an XMLHttpRequest object via the oEmbed WeakMap Repository.
   * @param iframe HTMLIFrameElement
   * @returns XMLHttpRequest
   */
  getoEmbedByIframe(iframe) {
    return VimeoManager.oEmbedRepo.get(iframe);
  }

  /**
   * Creates a new Vimeo Player instance by using the placeholder element id, the Vimeo video id and an optional object of Vimeo video parameters.
   * @param elementId string
   * @param id string
   * @param options any
   * @returns Player
   */
  createPlayerById(elementId, id, options) {
    const config = options ?? {};
    config.id = id;
    const player = new _vimeo_player__WEBPACK_IMPORTED_MODULE_0__["default"](elementId, config);
    VimeoManager.setIframePlayerRepo(id, elementId, player);
    return player;
  }

  /**
   * Takes the Vimeo CDN image URL and transforms it by replacing the width by height bit at the end of the URL with query parameters where `mw` represents the width, `mh` represents the height and `q` represents the quality. The transformed URL is returned.
   * @param url string
   * @param width string
   * @param height string
   * @param quality string
   * @returns string
   */
  static transformPosterImageUrl(url, width, height, quality) {
    let path = url.split(/_\d{1,5}|x\d{1,5}/g)[0];
    path = `${path}?mw=${width}&mh=${height}&q=${quality}`;
    return path;
  }

  /**
   * Takes a Vimeo Id and returns the current Vimeo poster thumbnail image.
   */
  generatePosterImage(id, imageSpecs) {
    const context = this;
    return new Promise((resolve, reject) => {
      context.createoEmbedById(id).then(response => {
        const data = JSON.parse(response.response);
        const image = VimeoManager.transformPosterImageUrl(data.thumbnail_url, imageSpecs?.width ?? data.width, imageSpecs?.height ?? data.height, imageSpecs?.quality ?? "70");
        resolve(image);
      }).catch(error => reject(error));
    });
  }

  /**
   * Takes a Vimeo Iframe element and extracts the 9-digit Vimeo Id
   * @param iframe HTMLIFrameElement
   * @returns string | null
   */
  getIdByIframe(iframe) {
    return (0,Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_1__.elementExists)(iframe) ? this.getIdByUrl(iframe.src) : undefined;
  }

  /**
   * Takes a Vimeo Player URL and extracts the 9-digit Vimeo Id
   * @param url string
   * @returns string | null
   */
  getIdByUrl(url) {
    let id = undefined;
    const match = url.match(/\/player.vimeo.com\/video\/\d{9}/gi) ?? [];
    if (match.length === 1) {
      id = match.shift()?.split(/\/player.vimeo.com\/video\//).pop();
    }
    return id;
  }

  /**
   * Takes the Vimeo video id, the placeholder element id and the Vimeo Player instance and captures when the Vimeo iframe element is inserted into the document. The captured Vimeo iframe element along with the Vimeo instance is the added into both the Vimeo Player WeakMap repository and the Vimeo iframe WeakMap repository.
   * @param id string
   * @param elementId string
   * @param player Player
   */
  static setIframePlayerRepo(id, elementId, player) {
    this.observePlaceholder(document.querySelector(`#${elementId}`), {
      childList: true
    }).then(records => {
      records.forEach(record => {
        const iframe = (0,Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_1__.enumerateElements)(record.addedNodes).find(node => (node.getAttribute("src") ?? "").match(id));
        if (iframe) {
          VimeoManager.setPlayerByIframe(iframe, player);
        }
      });
    });
  }

  /**
   * Creates a new MutationObserver interface on the placeholder element and will observe the element. A promise object is returned where the resolve state contains the mutation record array.
   * @param placeholder HTMLElement
   * @param options MutationObserverInit
   * @returns Promise<MutationRecord[]>
   */
  static observePlaceholder(placeholder, options) {
    return new Promise((resolve, reject) => {
      const observer = new MutationObserver((records, observer) => {
        resolve(records);
        observer.disconnect();
      });
      observer.observe(placeholder, options ?? {});
    });
  }

  /**
   * Takes the Vimeo iframe element and connects to a new Vimeo Player instance.
   * @param iframe HTMLIFrameElement
   * @returns Player
   */
  createPlayerByIframe(iframe) {
    const player = new _vimeo_player__WEBPACK_IMPORTED_MODULE_0__["default"](iframe);
    VimeoManager.setPlayerByIframe(iframe, player);
    return player;
  }

  /**
   * Takes the Vimeo iframe element and the Vimeo Player instance and connects each to their respective WeakMap repository.
   * @param iframe HTMLIFrameElement
   * @param player Player
   */
  static setPlayerByIframe(iframe, player) {
    this.playerRepo.set(iframe, player);
    this.iframeRepo.set(player, iframe);
  }

  /**
   * Takes the Vimeo iframe element as a key to look up it's connected Vimeo Player instance through the Vimeo Player WeakMap repository.
   * @param iframe HTMLIFrameElement
   * @returns Player
   */
  getPlayerByIframe(iframe) {
    return VimeoManager.playerRepo.get(iframe);
  }

  /**
   * Takes the Vimeo Player instance as a key to look up it's connected Vimeo iframe element through the Vimeo iframe WeakMap repository.
   * @param player Player
   * @returns HTMLIFrameElement
   */
  getIframeByPlayer(player) {
    return VimeoManager.iframeRepo.get(player);
  }
}
VimeoManager.vimeoPlayerSDKEndPoint = "https://player.vimeo.com/api/player.js";
VimeoManager.oEmbedRepo = new WeakMap();
VimeoManager.playerRepo = new WeakMap();
VimeoManager.iframeRepo = new WeakMap();

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!*******************!*\
  !*** ./js/app.ts ***!
  \*******************/
/* harmony import */ var Shared_ts_components_vimeo_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Shared/ts/components/vimeo-carousel */ "../shared/ts/components/vimeo-carousel.ts");
/* harmony import */ var Shared_ts_api_carousel_slide_adapters_vimeo_slide_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Shared/ts/api/carousel/slide/adapters/vimeo-slide-carousel */ "../shared/ts/api/carousel/slide/adapters/vimeo-slide-carousel.ts");
/* harmony import */ var Shared_ts_observers_intersection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Shared/ts/observers/intersection */ "../shared/ts/observers/intersection.ts");
// components

// adapters

// observers

(0,Shared_ts_observers_intersection__WEBPACK_IMPORTED_MODULE_2__.observer)(".slide--vimeo-carousel", {
    inRange: function (element) {
        var carousel = new Shared_ts_components_vimeo_carousel__WEBPACK_IMPORTED_MODULE_0__["default"](new Shared_ts_api_carousel_slide_adapters_vimeo_slide_carousel__WEBPACK_IMPORTED_MODULE_1__["default"](element));
        carousel.enablePrevNextControls();
    }
});

}();
/******/ })()
;
//# sourceMappingURL=app.es5.js.map