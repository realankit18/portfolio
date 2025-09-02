(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
    new MutationObserver(l => {
        for (const o of l)
            if (o.type === "childList")
                for (const i of o.addedNodes) i.tagName === "LINK" && i.rel === "modulepreload" && r(i)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(l) {
        const o = {};
        return l.integrity && (o.integrity = l.integrity), l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy), l.crossOrigin === "use-credentials" ? o.credentials = "include" : l.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o
    }

    function r(l) {
        if (l.ep) return;
        l.ep = !0;
        const o = n(l);
        fetch(l.href, o)
    }
})();
var ta = {
        exports: {}
    },
    sl = {},
    na = {
        exports: {}
    },
    L = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qn = Symbol.for("react.element"),
    xc = Symbol.for("react.portal"),
    yc = Symbol.for("react.fragment"),
    wc = Symbol.for("react.strict_mode"),
    kc = Symbol.for("react.profiler"),
    Nc = Symbol.for("react.provider"),
    Sc = Symbol.for("react.context"),
    jc = Symbol.for("react.forward_ref"),
    Cc = Symbol.for("react.suspense"),
    Ec = Symbol.for("react.memo"),
    _c = Symbol.for("react.lazy"),
    Hi = Symbol.iterator;

function Pc(e) {
    return e === null || typeof e != "object" ? null : (e = Hi && e[Hi] || e["@@iterator"], typeof e == "function" ? e : null)
}
var ra = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    },
    la = Object.assign,
    oa = {};

function un(e, t, n) {
    this.props = e, this.context = t, this.refs = oa, this.updater = n || ra
}
un.prototype.isReactComponent = {};
un.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
};
un.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function ia() {}
ia.prototype = un.prototype;

function Yo(e, t, n) {
    this.props = e, this.context = t, this.refs = oa, this.updater = n || ra
}
var Go = Yo.prototype = new ia;
Go.constructor = Yo;
la(Go, un.prototype);
Go.isPureReactComponent = !0;
var Vi = Array.isArray,
    sa = Object.prototype.hasOwnProperty,
    Xo = {
        current: null
    },
    aa = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function ua(e, t, n) {
    var r, l = {},
        o = null,
        i = null;
    if (t != null)
        for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (o = "" + t.key), t) sa.call(t, r) && !aa.hasOwnProperty(r) && (l[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1) l.children = n;
    else if (1 < a) {
        for (var u = Array(a), d = 0; d < a; d++) u[d] = arguments[d + 2];
        l.children = u
    }
    if (e && e.defaultProps)
        for (r in a = e.defaultProps, a) l[r] === void 0 && (l[r] = a[r]);
    return {
        $$typeof: qn,
        type: e,
        key: o,
        ref: i,
        props: l,
        _owner: Xo.current
    }
}

function zc(e, t) {
    return {
        $$typeof: qn,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}

function Zo(e) {
    return typeof e == "object" && e !== null && e.$$typeof === qn
}

function Lc(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var Wi = /\/+/g;

function _l(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? Lc("" + e.key) : t.toString(36)
}

function Sr(e, t, n, r, l) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var i = !1;
    if (e === null) i = !0;
    else switch (o) {
        case "string":
        case "number":
            i = !0;
            break;
        case "object":
            switch (e.$$typeof) {
                case qn:
                case xc:
                    i = !0
            }
    }
    if (i) return i = e, l = l(i), e = r === "" ? "." + _l(i, 0) : r, Vi(l) ? (n = "", e != null && (n = e.replace(Wi, "$&/") + "/"), Sr(l, t, n, "", function(d) {
        return d
    })) : l != null && (Zo(l) && (l = zc(l, n + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(Wi, "$&/") + "/") + e)), t.push(l)), 1;
    if (i = 0, r = r === "" ? "." : r + ":", Vi(e))
        for (var a = 0; a < e.length; a++) {
            o = e[a];
            var u = r + _l(o, a);
            i += Sr(o, t, n, u, l)
        } else if (u = Pc(e), typeof u == "function")
            for (e = u.call(e), a = 0; !(o = e.next()).done;) o = o.value, u = r + _l(o, a++), i += Sr(o, t, n, u, l);
        else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return i
}

function ir(e, t, n) {
    if (e == null) return e;
    var r = [],
        l = 0;
    return Sr(e, r, "", "", function(o) {
        return t.call(n, o, l++)
    }), r
}

function Tc(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(), t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
        }), e._status === -1 && (e._status = 0, e._result = t)
    }
    if (e._status === 1) return e._result.default;
    throw e._result
}
var ae = {
        current: null
    },
    jr = {
        transition: null
    },
    Mc = {
        ReactCurrentDispatcher: ae,
        ReactCurrentBatchConfig: jr,
        ReactCurrentOwner: Xo
    };

function ca() {
    throw Error("act(...) is not supported in production builds of React.")
}
L.Children = {
    map: ir,
    forEach: function(e, t, n) {
        ir(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return ir(e, function() {
            t++
        }), t
    },
    toArray: function(e) {
        return ir(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Zo(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
L.Component = un;
L.Fragment = yc;
L.Profiler = kc;
L.PureComponent = Yo;
L.StrictMode = wc;
L.Suspense = Cc;
L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Mc;
L.act = ca;
L.cloneElement = function(e, t, n) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = la({}, e.props),
        l = e.key,
        o = e.ref,
        i = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (o = t.ref, i = Xo.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var a = e.type.defaultProps;
        for (u in t) sa.call(t, u) && !aa.hasOwnProperty(u) && (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u])
    }
    var u = arguments.length - 2;
    if (u === 1) r.children = n;
    else if (1 < u) {
        a = Array(u);
        for (var d = 0; d < u; d++) a[d] = arguments[d + 2];
        r.children = a
    }
    return {
        $$typeof: qn,
        type: e.type,
        key: l,
        ref: o,
        props: r,
        _owner: i
    }
};
L.createContext = function(e) {
    return e = {
        $$typeof: Sc,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }, e.Provider = {
        $$typeof: Nc,
        _context: e
    }, e.Consumer = e
};
L.createElement = ua;
L.createFactory = function(e) {
    var t = ua.bind(null, e);
    return t.type = e, t
};
L.createRef = function() {
    return {
        current: null
    }
};
L.forwardRef = function(e) {
    return {
        $$typeof: jc,
        render: e
    }
};
L.isValidElement = Zo;
L.lazy = function(e) {
    return {
        $$typeof: _c,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: Tc
    }
};
L.memo = function(e, t) {
    return {
        $$typeof: Ec,
        type: e,
        compare: t === void 0 ? null : t
    }
};
L.startTransition = function(e) {
    var t = jr.transition;
    jr.transition = {};
    try {
        e()
    } finally {
        jr.transition = t
    }
};
L.unstable_act = ca;
L.useCallback = function(e, t) {
    return ae.current.useCallback(e, t)
};
L.useContext = function(e) {
    return ae.current.useContext(e)
};
L.useDebugValue = function() {};
L.useDeferredValue = function(e) {
    return ae.current.useDeferredValue(e)
};
L.useEffect = function(e, t) {
    return ae.current.useEffect(e, t)
};
L.useId = function() {
    return ae.current.useId()
};
L.useImperativeHandle = function(e, t, n) {
    return ae.current.useImperativeHandle(e, t, n)
};
L.useInsertionEffect = function(e, t) {
    return ae.current.useInsertionEffect(e, t)
};
L.useLayoutEffect = function(e, t) {
    return ae.current.useLayoutEffect(e, t)
};
L.useMemo = function(e, t) {
    return ae.current.useMemo(e, t)
};
L.useReducer = function(e, t, n) {
    return ae.current.useReducer(e, t, n)
};
L.useRef = function(e) {
    return ae.current.useRef(e)
};
L.useState = function(e) {
    return ae.current.useState(e)
};
L.useSyncExternalStore = function(e, t, n) {
    return ae.current.useSyncExternalStore(e, t, n)
};
L.useTransition = function() {
    return ae.current.useTransition()
};
L.version = "18.3.1";
na.exports = L;
var ve = na.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bc = ve,
    Ic = Symbol.for("react.element"),
    Rc = Symbol.for("react.fragment"),
    Dc = Object.prototype.hasOwnProperty,
    Oc = bc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    Ac = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function da(e, t, n) {
    var r, l = {},
        o = null,
        i = null;
    n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (i = t.ref);
    for (r in t) Dc.call(t, r) && !Ac.hasOwnProperty(r) && (l[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
    return {
        $$typeof: Ic,
        type: e,
        key: o,
        ref: i,
        props: l,
        _owner: Oc.current
    }
}
sl.Fragment = Rc;
sl.jsx = da;
sl.jsxs = da;
ta.exports = sl;
var s = ta.exports,
    fa = {
        exports: {}
    },
    we = {},
    pa = {
        exports: {}
    },
    ma = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(j, P) {
        var z = j.length;
        j.push(P);
        e: for (; 0 < z;) {
            var W = z - 1 >>> 1,
                X = j[W];
            if (0 < l(X, P)) j[W] = P, j[z] = X, z = W;
            else break e
        }
    }

    function n(j) {
        return j.length === 0 ? null : j[0]
    }

    function r(j) {
        if (j.length === 0) return null;
        var P = j[0],
            z = j.pop();
        if (z !== P) {
            j[0] = z;
            e: for (var W = 0, X = j.length, lr = X >>> 1; W < lr;) {
                var vt = 2 * (W + 1) - 1,
                    El = j[vt],
                    xt = vt + 1,
                    or = j[xt];
                if (0 > l(El, z)) xt < X && 0 > l(or, El) ? (j[W] = or, j[xt] = z, W = xt) : (j[W] = El, j[vt] = z, W = vt);
                else if (xt < X && 0 > l(or, z)) j[W] = or, j[xt] = z, W = xt;
                else break e
            }
        }
        return P
    }

    function l(j, P) {
        var z = j.sortIndex - P.sortIndex;
        return z !== 0 ? z : j.id - P.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var o = performance;
        e.unstable_now = function() {
            return o.now()
        }
    } else {
        var i = Date,
            a = i.now();
        e.unstable_now = function() {
            return i.now() - a
        }
    }
    var u = [],
        d = [],
        g = 1,
        h = null,
        m = 3,
        y = !1,
        w = !1,
        k = !1,
        A = typeof setTimeout == "function" ? setTimeout : null,
        f = typeof clearTimeout == "function" ? clearTimeout : null,
        c = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function p(j) {
        for (var P = n(d); P !== null;) {
            if (P.callback === null) r(d);
            else if (P.startTime <= j) r(d), P.sortIndex = P.expirationTime, t(u, P);
            else break;
            P = n(d)
        }
    }

    function v(j) {
        if (k = !1, p(j), !w)
            if (n(u) !== null) w = !0, jl(S);
            else {
                var P = n(d);
                P !== null && Cl(v, P.startTime - j)
            }
    }

    function S(j, P) {
        w = !1, k && (k = !1, f(_), _ = -1), y = !0;
        var z = m;
        try {
            for (p(P), h = n(u); h !== null && (!(h.expirationTime > P) || j && !Pe());) {
                var W = h.callback;
                if (typeof W == "function") {
                    h.callback = null, m = h.priorityLevel;
                    var X = W(h.expirationTime <= P);
                    P = e.unstable_now(), typeof X == "function" ? h.callback = X : h === n(u) && r(u), p(P)
                } else r(u);
                h = n(u)
            }
            if (h !== null) var lr = !0;
            else {
                var vt = n(d);
                vt !== null && Cl(v, vt.startTime - P), lr = !1
            }
            return lr
        } finally {
            h = null, m = z, y = !1
        }
    }
    var C = !1,
        E = null,
        _ = -1,
        V = 5,
        T = -1;

    function Pe() {
        return !(e.unstable_now() - T < V)
    }

    function fn() {
        if (E !== null) {
            var j = e.unstable_now();
            T = j;
            var P = !0;
            try {
                P = E(!0, j)
            } finally {
                P ? pn() : (C = !1, E = null)
            }
        } else C = !1
    }
    var pn;
    if (typeof c == "function") pn = function() {
        c(fn)
    };
    else if (typeof MessageChannel < "u") {
        var Bi = new MessageChannel,
            vc = Bi.port2;
        Bi.port1.onmessage = fn, pn = function() {
            vc.postMessage(null)
        }
    } else pn = function() {
        A(fn, 0)
    };

    function jl(j) {
        E = j, C || (C = !0, pn())
    }

    function Cl(j, P) {
        _ = A(function() {
            j(e.unstable_now())
        }, P)
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(j) {
        j.callback = null
    }, e.unstable_continueExecution = function() {
        w || y || (w = !0, jl(S))
    }, e.unstable_forceFrameRate = function(j) {
        0 > j || 125 < j ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : V = 0 < j ? Math.floor(1e3 / j) : 5
    }, e.unstable_getCurrentPriorityLevel = function() {
        return m
    }, e.unstable_getFirstCallbackNode = function() {
        return n(u)
    }, e.unstable_next = function(j) {
        switch (m) {
            case 1:
            case 2:
            case 3:
                var P = 3;
                break;
            default:
                P = m
        }
        var z = m;
        m = P;
        try {
            return j()
        } finally {
            m = z
        }
    }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(j, P) {
        switch (j) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                j = 3
        }
        var z = m;
        m = j;
        try {
            return P()
        } finally {
            m = z
        }
    }, e.unstable_scheduleCallback = function(j, P, z) {
        var W = e.unstable_now();
        switch (typeof z == "object" && z !== null ? (z = z.delay, z = typeof z == "number" && 0 < z ? W + z : W) : z = W, j) {
            case 1:
                var X = -1;
                break;
            case 2:
                X = 250;
                break;
            case 5:
                X = 1073741823;
                break;
            case 4:
                X = 1e4;
                break;
            default:
                X = 5e3
        }
        return X = z + X, j = {
            id: g++,
            callback: P,
            priorityLevel: j,
            startTime: z,
            expirationTime: X,
            sortIndex: -1
        }, z > W ? (j.sortIndex = z, t(d, j), n(u) === null && j === n(d) && (k ? (f(_), _ = -1) : k = !0, Cl(v, z - W))) : (j.sortIndex = X, t(u, j), w || y || (w = !0, jl(S))), j
    }, e.unstable_shouldYield = Pe, e.unstable_wrapCallback = function(j) {
        var P = m;
        return function() {
            var z = m;
            m = P;
            try {
                return j.apply(this, arguments)
            } finally {
                m = z
            }
        }
    }
})(ma);
pa.exports = ma;
var Fc = pa.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Uc = ve,
    ye = Fc;

function x(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var ha = new Set,
    Dn = {};

function Mt(e, t) {
    en(e, t), en(e + "Capture", t)
}

function en(e, t) {
    for (Dn[e] = t, e = 0; e < t.length; e++) ha.add(t[e])
}
var Qe = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    ql = Object.prototype.hasOwnProperty,
    $c = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Qi = {},
    Ki = {};

function Bc(e) {
    return ql.call(Ki, e) ? !0 : ql.call(Qi, e) ? !1 : $c.test(e) ? Ki[e] = !0 : (Qi[e] = !0, !1)
}

function Hc(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}

function Vc(e, t, n, r) {
    if (t === null || typeof t > "u" || Hc(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
    }
    return !1
}

function ue(e, t, n, r, l, o, i) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = i
}
var te = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    te[e] = new ue(e, 0, !1, e, null, !1, !1)
});
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
].forEach(function(e) {
    var t = e[0];
    te[t] = new ue(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    te[e] = new ue(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    te[e] = new ue(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    te[e] = new ue(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    te[e] = new ue(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function(e) {
    te[e] = new ue(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    te[e] = new ue(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function(e) {
    te[e] = new ue(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var Jo = /[\-:]([a-z])/g;

function qo(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(Jo, qo);
    te[t] = new ue(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Jo, qo);
    te[t] = new ue(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Jo, qo);
    te[t] = new ue(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    te[e] = new ue(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
te.xlinkHref = new ue("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
    te[e] = new ue(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function ei(e, t, n, r) {
    var l = te.hasOwnProperty(t) ? te[t] : null;
    (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Vc(t, n, l, r) && (n = null), r || l === null ? Bc(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Xe = Uc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    sr = Symbol.for("react.element"),
    Rt = Symbol.for("react.portal"),
    Dt = Symbol.for("react.fragment"),
    ti = Symbol.for("react.strict_mode"),
    eo = Symbol.for("react.profiler"),
    ga = Symbol.for("react.provider"),
    va = Symbol.for("react.context"),
    ni = Symbol.for("react.forward_ref"),
    to = Symbol.for("react.suspense"),
    no = Symbol.for("react.suspense_list"),
    ri = Symbol.for("react.memo"),
    Je = Symbol.for("react.lazy"),
    xa = Symbol.for("react.offscreen"),
    Yi = Symbol.iterator;

function mn(e) {
    return e === null || typeof e != "object" ? null : (e = Yi && e[Yi] || e["@@iterator"], typeof e == "function" ? e : null)
}
var B = Object.assign,
    Pl;

function Nn(e) {
    if (Pl === void 0) try {
        throw Error()
    } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        Pl = t && t[1] || ""
    }
    return `
` + Pl + e
}
var zl = !1;

function Ll(e, t) {
    if (!e || zl) return "";
    zl = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                    throw Error()
                }, Object.defineProperty(t.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (d) {
                    var r = d
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (d) {
                    r = d
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (d) {
                r = d
            }
            e()
        }
    } catch (d) {
        if (d && r && typeof d.stack == "string") {
            for (var l = d.stack.split(`
`), o = r.stack.split(`
`), i = l.length - 1, a = o.length - 1; 1 <= i && 0 <= a && l[i] !== o[a];) a--;
            for (; 1 <= i && 0 <= a; i--, a--)
                if (l[i] !== o[a]) {
                    if (i !== 1 || a !== 1)
                        do
                            if (i--, a--, 0 > a || l[i] !== o[a]) {
                                var u = `
` + l[i].replace(" at new ", " at ");
                                return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u
                            } while (1 <= i && 0 <= a);
                    break
                }
        }
    } finally {
        zl = !1, Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? Nn(e) : ""
}

function Wc(e) {
    switch (e.tag) {
        case 5:
            return Nn(e.type);
        case 16:
            return Nn("Lazy");
        case 13:
            return Nn("Suspense");
        case 19:
            return Nn("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = Ll(e.type, !1), e;
        case 11:
            return e = Ll(e.type.render, !1), e;
        case 1:
            return e = Ll(e.type, !0), e;
        default:
            return ""
    }
}

function ro(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case Dt:
            return "Fragment";
        case Rt:
            return "Portal";
        case eo:
            return "Profiler";
        case ti:
            return "StrictMode";
        case to:
            return "Suspense";
        case no:
            return "SuspenseList"
    }
    if (typeof e == "object") switch (e.$$typeof) {
        case va:
            return (e.displayName || "Context") + ".Consumer";
        case ga:
            return (e._context.displayName || "Context") + ".Provider";
        case ni:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case ri:
            return t = e.displayName || null, t !== null ? t : ro(e.type) || "Memo";
        case Je:
            t = e._payload, e = e._init;
            try {
                return ro(e(t))
            } catch {}
    }
    return null
}

function Qc(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return ro(t);
        case 8:
            return t === ti ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t
    }
    return null
}

function ft(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
    }
}

function ya(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function Kc(e) {
    var t = ya(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var l = n.get,
            o = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return l.call(this)
            },
            set: function(i) {
                r = "" + i, o.call(this, i)
            }
        }), Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }), {
            getValue: function() {
                return r
            },
            setValue: function(i) {
                r = "" + i
            },
            stopTracking: function() {
                e._valueTracker = null, delete e[t]
            }
        }
    }
}

function ar(e) {
    e._valueTracker || (e._valueTracker = Kc(e))
}

function wa(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return e && (r = ya(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function Rr(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}

function lo(e, t) {
    var n = t.checked;
    return B({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}

function Gi(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    n = ft(t.value != null ? t.value : n), e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}

function ka(e, t) {
    t = t.checked, t != null && ei(e, "checked", t, !1)
}

function oo(e, t) {
    ka(e, t);
    var n = ft(t.value),
        r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? io(e, t.type, n) : t.hasOwnProperty("defaultValue") && io(e, t.type, ft(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function Xi(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function io(e, t, n) {
    (t !== "number" || Rr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Sn = Array.isArray;

function Kt(e, t, n, r) {
    if (e = e.options, t) {
        t = {};
        for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
        for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + ft(n), t = null, l = 0; l < e.length; l++) {
            if (e[l].value === n) {
                e[l].selected = !0, r && (e[l].defaultSelected = !0);
                return
            }
            t !== null || e[l].disabled || (t = e[l])
        }
        t !== null && (t.selected = !0)
    }
}

function so(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(x(91));
    return B({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}

function Zi(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children, t = t.defaultValue, n != null) {
            if (t != null) throw Error(x(92));
            if (Sn(n)) {
                if (1 < n.length) throw Error(x(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""), n = t
    }
    e._wrapperState = {
        initialValue: ft(n)
    }
}

function Na(e, t) {
    var n = ft(t.value),
        r = ft(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function Ji(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function Sa(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function ao(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Sa(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var ur, ja = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, l)
        })
    } : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
        for (ur = ur || document.createElement("div"), ur.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ur.firstChild; e.firstChild;) e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild)
    }
});

function On(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var En = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    },
    Yc = ["Webkit", "ms", "Moz", "O"];
Object.keys(En).forEach(function(e) {
    Yc.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), En[t] = En[e]
    })
});

function Ca(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || En.hasOwnProperty(e) && En[e] ? ("" + t).trim() : t + "px"
}

function Ea(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                l = Ca(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l
        }
}
var Gc = B({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});

function uo(e, t) {
    if (t) {
        if (Gc[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(x(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(x(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(x(61))
        }
        if (t.style != null && typeof t.style != "object") throw Error(x(62))
    }
}

function co(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
    }
}
var fo = null;

function li(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var po = null,
    Yt = null,
    Gt = null;

function qi(e) {
    if (e = nr(e)) {
        if (typeof po != "function") throw Error(x(280));
        var t = e.stateNode;
        t && (t = fl(t), po(e.stateNode, e.type, t))
    }
}

function _a(e) {
    Yt ? Gt ? Gt.push(e) : Gt = [e] : Yt = e
}

function Pa() {
    if (Yt) {
        var e = Yt,
            t = Gt;
        if (Gt = Yt = null, qi(e), t)
            for (e = 0; e < t.length; e++) qi(t[e])
    }
}

function za(e, t) {
    return e(t)
}

function La() {}
var Tl = !1;

function Ta(e, t, n) {
    if (Tl) return e(t, n);
    Tl = !0;
    try {
        return za(e, t, n)
    } finally {
        Tl = !1, (Yt !== null || Gt !== null) && (La(), Pa())
    }
}

function An(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = fl(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
            break e;
        default:
            e = !1
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(x(231, t, typeof n));
    return n
}
var mo = !1;
if (Qe) try {
    var hn = {};
    Object.defineProperty(hn, "passive", {
        get: function() {
            mo = !0
        }
    }), window.addEventListener("test", hn, hn), window.removeEventListener("test", hn, hn)
} catch {
    mo = !1
}

function Xc(e, t, n, r, l, o, i, a, u) {
    var d = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, d)
    } catch (g) {
        this.onError(g)
    }
}
var _n = !1,
    Dr = null,
    Or = !1,
    ho = null,
    Zc = {
        onError: function(e) {
            _n = !0, Dr = e
        }
    };

function Jc(e, t, n, r, l, o, i, a, u) {
    _n = !1, Dr = null, Xc.apply(Zc, arguments)
}

function qc(e, t, n, r, l, o, i, a, u) {
    if (Jc.apply(this, arguments), _n) {
        if (_n) {
            var d = Dr;
            _n = !1, Dr = null
        } else throw Error(x(198));
        Or || (Or = !0, ho = d)
    }
}

function bt(e) {
    var t = e,
        n = e;
    if (e.alternate)
        for (; t.return;) t = t.return;
    else {
        e = t;
        do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
    }
    return t.tag === 3 ? n : null
}

function Ma(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
    }
    return null
}

function es(e) {
    if (bt(e) !== e) throw Error(x(188))
}

function ed(e) {
    var t = e.alternate;
    if (!t) {
        if (t = bt(e), t === null) throw Error(x(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t;;) {
        var l = n.return;
        if (l === null) break;
        var o = l.alternate;
        if (o === null) {
            if (r = l.return, r !== null) {
                n = r;
                continue
            }
            break
        }
        if (l.child === o.child) {
            for (o = l.child; o;) {
                if (o === n) return es(l), e;
                if (o === r) return es(l), t;
                o = o.sibling
            }
            throw Error(x(188))
        }
        if (n.return !== r.return) n = l, r = o;
        else {
            for (var i = !1, a = l.child; a;) {
                if (a === n) {
                    i = !0, n = l, r = o;
                    break
                }
                if (a === r) {
                    i = !0, r = l, n = o;
                    break
                }
                a = a.sibling
            }
            if (!i) {
                for (a = o.child; a;) {
                    if (a === n) {
                        i = !0, n = o, r = l;
                        break
                    }
                    if (a === r) {
                        i = !0, r = o, n = l;
                        break
                    }
                    a = a.sibling
                }
                if (!i) throw Error(x(189))
            }
        }
        if (n.alternate !== r) throw Error(x(190))
    }
    if (n.tag !== 3) throw Error(x(188));
    return n.stateNode.current === n ? e : t
}

function ba(e) {
    return e = ed(e), e !== null ? Ia(e) : null
}

function Ia(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
        var t = Ia(e);
        if (t !== null) return t;
        e = e.sibling
    }
    return null
}
var Ra = ye.unstable_scheduleCallback,
    ts = ye.unstable_cancelCallback,
    td = ye.unstable_shouldYield,
    nd = ye.unstable_requestPaint,
    Q = ye.unstable_now,
    rd = ye.unstable_getCurrentPriorityLevel,
    oi = ye.unstable_ImmediatePriority,
    Da = ye.unstable_UserBlockingPriority,
    Ar = ye.unstable_NormalPriority,
    ld = ye.unstable_LowPriority,
    Oa = ye.unstable_IdlePriority,
    al = null,
    Fe = null;

function od(e) {
    if (Fe && typeof Fe.onCommitFiberRoot == "function") try {
        Fe.onCommitFiberRoot(al, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var be = Math.clz32 ? Math.clz32 : ad,
    id = Math.log,
    sd = Math.LN2;

function ad(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (id(e) / sd | 0) | 0
}
var cr = 64,
    dr = 4194304;

function jn(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
    }
}

function Fr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        l = e.suspendedLanes,
        o = e.pingedLanes,
        i = n & 268435455;
    if (i !== 0) {
        var a = i & ~l;
        a !== 0 ? r = jn(a) : (o &= i, o !== 0 && (r = jn(o)))
    } else i = n & ~l, i !== 0 ? r = jn(i) : o !== 0 && (r = jn(o));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & l) && (l = r & -r, o = t & -t, l >= o || l === 16 && (o & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
        for (e = e.entanglements, t &= r; 0 < t;) n = 31 - be(t), l = 1 << n, r |= e[n], t &= ~l;
    return r
}

function ud(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
    }
}

function cd(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o;) {
        var i = 31 - be(o),
            a = 1 << i,
            u = l[i];
        u === -1 ? (!(a & n) || a & r) && (l[i] = ud(a, t)) : u <= t && (e.expiredLanes |= a), o &= ~a
    }
}

function go(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function Aa() {
    var e = cr;
    return cr <<= 1, !(cr & 4194240) && (cr = 64), e
}

function Ml(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t
}

function er(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - be(t), e[t] = n
}

function dd(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
        var l = 31 - be(n),
            o = 1 << l;
        t[l] = 0, r[l] = -1, e[l] = -1, n &= ~o
    }
}

function ii(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - be(n),
            l = 1 << r;
        l & t | e[r] & t && (e[r] |= t), n &= ~l
    }
}
var b = 0;

function Fa(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Ua, si, $a, Ba, Ha, vo = !1,
    fr = [],
    lt = null,
    ot = null,
    it = null,
    Fn = new Map,
    Un = new Map,
    et = [],
    fd = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function ns(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            lt = null;
            break;
        case "dragenter":
        case "dragleave":
            ot = null;
            break;
        case "mouseover":
        case "mouseout":
            it = null;
            break;
        case "pointerover":
        case "pointerout":
            Fn.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Un.delete(t.pointerId)
    }
}

function gn(e, t, n, r, l, o) {
    return e === null || e.nativeEvent !== o ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l]
    }, t !== null && (t = nr(t), t !== null && si(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e)
}

function pd(e, t, n, r, l) {
    switch (t) {
        case "focusin":
            return lt = gn(lt, e, t, n, r, l), !0;
        case "dragenter":
            return ot = gn(ot, e, t, n, r, l), !0;
        case "mouseover":
            return it = gn(it, e, t, n, r, l), !0;
        case "pointerover":
            var o = l.pointerId;
            return Fn.set(o, gn(Fn.get(o) || null, e, t, n, r, l)), !0;
        case "gotpointercapture":
            return o = l.pointerId, Un.set(o, gn(Un.get(o) || null, e, t, n, r, l)), !0
    }
    return !1
}

function Va(e) {
    var t = kt(e.target);
    if (t !== null) {
        var n = bt(t);
        if (n !== null) {
            if (t = n.tag, t === 13) {
                if (t = Ma(n), t !== null) {
                    e.blockedOn = t, Ha(e.priority, function() {
                        $a(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}

function Cr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = xo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            fo = r, n.target.dispatchEvent(r), fo = null
        } else return t = nr(n), t !== null && si(t), e.blockedOn = n, !1;
        t.shift()
    }
    return !0
}

function rs(e, t, n) {
    Cr(e) && n.delete(t)
}

function md() {
    vo = !1, lt !== null && Cr(lt) && (lt = null), ot !== null && Cr(ot) && (ot = null), it !== null && Cr(it) && (it = null), Fn.forEach(rs), Un.forEach(rs)
}

function vn(e, t) {
    e.blockedOn === t && (e.blockedOn = null, vo || (vo = !0, ye.unstable_scheduleCallback(ye.unstable_NormalPriority, md)))
}

function $n(e) {
    function t(l) {
        return vn(l, e)
    }
    if (0 < fr.length) {
        vn(fr[0], e);
        for (var n = 1; n < fr.length; n++) {
            var r = fr[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (lt !== null && vn(lt, e), ot !== null && vn(ot, e), it !== null && vn(it, e), Fn.forEach(t), Un.forEach(t), n = 0; n < et.length; n++) r = et[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < et.length && (n = et[0], n.blockedOn === null);) Va(n), n.blockedOn === null && et.shift()
}
var Xt = Xe.ReactCurrentBatchConfig,
    Ur = !0;

function hd(e, t, n, r) {
    var l = b,
        o = Xt.transition;
    Xt.transition = null;
    try {
        b = 1, ai(e, t, n, r)
    } finally {
        b = l, Xt.transition = o
    }
}

function gd(e, t, n, r) {
    var l = b,
        o = Xt.transition;
    Xt.transition = null;
    try {
        b = 4, ai(e, t, n, r)
    } finally {
        b = l, Xt.transition = o
    }
}

function ai(e, t, n, r) {
    if (Ur) {
        var l = xo(e, t, n, r);
        if (l === null) Bl(e, t, r, $r, n), ns(e, r);
        else if (pd(l, e, t, n, r)) r.stopPropagation();
        else if (ns(e, r), t & 4 && -1 < fd.indexOf(e)) {
            for (; l !== null;) {
                var o = nr(l);
                if (o !== null && Ua(o), o = xo(e, t, n, r), o === null && Bl(e, t, r, $r, n), o === l) break;
                l = o
            }
            l !== null && r.stopPropagation()
        } else Bl(e, t, r, null, n)
    }
}
var $r = null;

function xo(e, t, n, r) {
    if ($r = null, e = li(r), e = kt(e), e !== null)
        if (t = bt(e), t === null) e = null;
        else if (n = t.tag, n === 13) {
        if (e = Ma(t), e !== null) return e;
        e = null
    } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null
    } else t !== e && (e = null);
    return $r = e, null
}

function Wa(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (rd()) {
                case oi:
                    return 1;
                case Da:
                    return 4;
                case Ar:
                case ld:
                    return 16;
                case Oa:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}
var nt = null,
    ui = null,
    Er = null;

function Qa() {
    if (Er) return Er;
    var e, t = ui,
        n = t.length,
        r, l = "value" in nt ? nt.value : nt.textContent,
        o = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
    return Er = l.slice(e, 1 < r ? 1 - r : void 0)
}

function _r(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function pr() {
    return !0
}

function ls() {
    return !1
}

function ke(e) {
    function t(n, r, l, o, i) {
        this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
        for (var a in e) e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(o) : o[a]);
        return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? pr : ls, this.isPropagationStopped = ls, this
    }
    return B(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = pr)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = pr)
        },
        persist: function() {},
        isPersistent: pr
    }), t
}
var cn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    },
    ci = ke(cn),
    tr = B({}, cn, {
        view: 0,
        detail: 0
    }),
    vd = ke(tr),
    bl, Il, xn, ul = B({}, tr, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: di,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== xn && (xn && e.type === "mousemove" ? (bl = e.screenX - xn.screenX, Il = e.screenY - xn.screenY) : Il = bl = 0, xn = e), bl)
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : Il
        }
    }),
    os = ke(ul),
    xd = B({}, ul, {
        dataTransfer: 0
    }),
    yd = ke(xd),
    wd = B({}, tr, {
        relatedTarget: 0
    }),
    Rl = ke(wd),
    kd = B({}, cn, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    Nd = ke(kd),
    Sd = B({}, cn, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }),
    jd = ke(Sd),
    Cd = B({}, cn, {
        data: 0
    }),
    is = ke(Cd),
    Ed = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    },
    _d = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    },
    Pd = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };

function zd(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Pd[e]) ? !!t[e] : !1
}

function di() {
    return zd
}
var Ld = B({}, tr, {
        key: function(e) {
            if (e.key) {
                var t = Ed[e.key] || e.key;
                if (t !== "Unidentified") return t
            }
            return e.type === "keypress" ? (e = _r(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? _d[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: di,
        charCode: function(e) {
            return e.type === "keypress" ? _r(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? _r(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    }),
    Td = ke(Ld),
    Md = B({}, ul, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    }),
    ss = ke(Md),
    bd = B({}, tr, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: di
    }),
    Id = ke(bd),
    Rd = B({}, cn, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    Dd = ke(Rd),
    Od = B({}, ul, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    }),
    Ad = ke(Od),
    Fd = [9, 13, 27, 32],
    fi = Qe && "CompositionEvent" in window,
    Pn = null;
Qe && "documentMode" in document && (Pn = document.documentMode);
var Ud = Qe && "TextEvent" in window && !Pn,
    Ka = Qe && (!fi || Pn && 8 < Pn && 11 >= Pn),
    as = " ",
    us = !1;

function Ya(e, t) {
    switch (e) {
        case "keyup":
            return Fd.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}

function Ga(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var Ot = !1;

function $d(e, t) {
    switch (e) {
        case "compositionend":
            return Ga(t);
        case "keypress":
            return t.which !== 32 ? null : (us = !0, as);
        case "textInput":
            return e = t.data, e === as && us ? null : e;
        default:
            return null
    }
}

function Bd(e, t) {
    if (Ot) return e === "compositionend" || !fi && Ya(e, t) ? (e = Qa(), Er = ui = nt = null, Ot = !1, e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return Ka && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}
var Hd = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};

function cs(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Hd[e.type] : t === "textarea"
}

function Xa(e, t, n, r) {
    _a(r), t = Br(t, "onChange"), 0 < t.length && (n = new ci("onChange", "change", null, n, r), e.push({
        event: n,
        listeners: t
    }))
}
var zn = null,
    Bn = null;

function Vd(e) {
    su(e, 0)
}

function cl(e) {
    var t = Ut(e);
    if (wa(t)) return e
}

function Wd(e, t) {
    if (e === "change") return t
}
var Za = !1;
if (Qe) {
    var Dl;
    if (Qe) {
        var Ol = "oninput" in document;
        if (!Ol) {
            var ds = document.createElement("div");
            ds.setAttribute("oninput", "return;"), Ol = typeof ds.oninput == "function"
        }
        Dl = Ol
    } else Dl = !1;
    Za = Dl && (!document.documentMode || 9 < document.documentMode)
}

function fs() {
    zn && (zn.detachEvent("onpropertychange", Ja), Bn = zn = null)
}

function Ja(e) {
    if (e.propertyName === "value" && cl(Bn)) {
        var t = [];
        Xa(t, Bn, e, li(e)), Ta(Vd, t)
    }
}

function Qd(e, t, n) {
    e === "focusin" ? (fs(), zn = t, Bn = n, zn.attachEvent("onpropertychange", Ja)) : e === "focusout" && fs()
}

function Kd(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return cl(Bn)
}

function Yd(e, t) {
    if (e === "click") return cl(t)
}

function Gd(e, t) {
    if (e === "input" || e === "change") return cl(t)
}

function Xd(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Re = typeof Object.is == "function" ? Object.is : Xd;

function Hn(e, t) {
    if (Re(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var l = n[r];
        if (!ql.call(t, l) || !Re(e[l], t[l])) return !1
    }
    return !0
}

function ps(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
}

function ms(e, t) {
    var n = ps(e);
    e = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length, e <= t && r >= t) return {
                node: n,
                offset: t - e
            };
            e = r
        }
        e: {
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = ps(n)
    }
}

function qa(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? qa(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function eu() {
    for (var e = window, t = Rr(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n) e = t.contentWindow;
        else break;
        t = Rr(e.document)
    }
    return t
}

function pi(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function Zd(e) {
    var t = eu(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && qa(n.ownerDocument.documentElement, n)) {
        if (r !== null && pi(n)) {
            if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                e = e.getSelection();
                var l = n.textContent.length,
                    o = Math.min(r.start, l);
                r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = ms(n, o);
                var i = ms(n, r);
                l && i && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)))
            }
        }
        for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
        });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
    }
}
var Jd = Qe && "documentMode" in document && 11 >= document.documentMode,
    At = null,
    yo = null,
    Ln = null,
    wo = !1;

function hs(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    wo || At == null || At !== Rr(r) || (r = At, "selectionStart" in r && pi(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }), Ln && Hn(Ln, r) || (Ln = r, r = Br(yo, "onSelect"), 0 < r.length && (t = new ci("onSelect", "select", null, t, n), e.push({
        event: t,
        listeners: r
    }), t.target = At)))
}

function mr(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}
var Ft = {
        animationend: mr("Animation", "AnimationEnd"),
        animationiteration: mr("Animation", "AnimationIteration"),
        animationstart: mr("Animation", "AnimationStart"),
        transitionend: mr("Transition", "TransitionEnd")
    },
    Al = {},
    tu = {};
Qe && (tu = document.createElement("div").style, "AnimationEvent" in window || (delete Ft.animationend.animation, delete Ft.animationiteration.animation, delete Ft.animationstart.animation), "TransitionEvent" in window || delete Ft.transitionend.transition);

function dl(e) {
    if (Al[e]) return Al[e];
    if (!Ft[e]) return e;
    var t = Ft[e],
        n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in tu) return Al[e] = t[n];
    return e
}
var nu = dl("animationend"),
    ru = dl("animationiteration"),
    lu = dl("animationstart"),
    ou = dl("transitionend"),
    iu = new Map,
    gs = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function mt(e, t) {
    iu.set(e, t), Mt(t, [e])
}
for (var Fl = 0; Fl < gs.length; Fl++) {
    var Ul = gs[Fl],
        qd = Ul.toLowerCase(),
        ef = Ul[0].toUpperCase() + Ul.slice(1);
    mt(qd, "on" + ef)
}
mt(nu, "onAnimationEnd");
mt(ru, "onAnimationIteration");
mt(lu, "onAnimationStart");
mt("dblclick", "onDoubleClick");
mt("focusin", "onFocus");
mt("focusout", "onBlur");
mt(ou, "onTransitionEnd");
en("onMouseEnter", ["mouseout", "mouseover"]);
en("onMouseLeave", ["mouseout", "mouseover"]);
en("onPointerEnter", ["pointerout", "pointerover"]);
en("onPointerLeave", ["pointerout", "pointerover"]);
Mt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Mt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Mt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Mt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Mt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Mt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Cn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    tf = new Set("cancel close invalid load scroll toggle".split(" ").concat(Cn));

function vs(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, qc(r, t, void 0, e), e.currentTarget = null
}

function su(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            l = r.event;
        r = r.listeners;
        e: {
            var o = void 0;
            if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                    var a = r[i],
                        u = a.instance,
                        d = a.currentTarget;
                    if (a = a.listener, u !== o && l.isPropagationStopped()) break e;
                    vs(l, a, d), o = u
                } else
                    for (i = 0; i < r.length; i++) {
                        if (a = r[i], u = a.instance, d = a.currentTarget, a = a.listener, u !== o && l.isPropagationStopped()) break e;
                        vs(l, a, d), o = u
                    }
        }
    }
    if (Or) throw e = ho, Or = !1, ho = null, e
}

function D(e, t) {
    var n = t[Co];
    n === void 0 && (n = t[Co] = new Set);
    var r = e + "__bubble";
    n.has(r) || (au(t, e, 2, !1), n.add(r))
}

function $l(e, t, n) {
    var r = 0;
    t && (r |= 4), au(n, e, r, t)
}
var hr = "_reactListening" + Math.random().toString(36).slice(2);

function Vn(e) {
    if (!e[hr]) {
        e[hr] = !0, ha.forEach(function(n) {
            n !== "selectionchange" && (tf.has(n) || $l(n, !1, e), $l(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[hr] || (t[hr] = !0, $l("selectionchange", !1, t))
    }
}

function au(e, t, n, r) {
    switch (Wa(t)) {
        case 1:
            var l = hd;
            break;
        case 4:
            l = gd;
            break;
        default:
            l = ai
    }
    n = l.bind(null, t, n, e), l = void 0, !mo || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: l
    }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, {
        passive: l
    }) : e.addEventListener(t, n, !1)
}

function Bl(e, t, n, r, l) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null) e: for (;;) {
        if (r === null) return;
        var i = r.tag;
        if (i === 3 || i === 4) {
            var a = r.stateNode.containerInfo;
            if (a === l || a.nodeType === 8 && a.parentNode === l) break;
            if (i === 4)
                for (i = r.return; i !== null;) {
                    var u = i.tag;
                    if ((u === 3 || u === 4) && (u = i.stateNode.containerInfo, u === l || u.nodeType === 8 && u.parentNode === l)) return;
                    i = i.return
                }
            for (; a !== null;) {
                if (i = kt(a), i === null) return;
                if (u = i.tag, u === 5 || u === 6) {
                    r = o = i;
                    continue e
                }
                a = a.parentNode
            }
        }
        r = r.return
    }
    Ta(function() {
        var d = o,
            g = li(n),
            h = [];
        e: {
            var m = iu.get(e);
            if (m !== void 0) {
                var y = ci,
                    w = e;
                switch (e) {
                    case "keypress":
                        if (_r(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        y = Td;
                        break;
                    case "focusin":
                        w = "focus", y = Rl;
                        break;
                    case "focusout":
                        w = "blur", y = Rl;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        y = Rl;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        y = os;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        y = yd;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        y = Id;
                        break;
                    case nu:
                    case ru:
                    case lu:
                        y = Nd;
                        break;
                    case ou:
                        y = Dd;
                        break;
                    case "scroll":
                        y = vd;
                        break;
                    case "wheel":
                        y = Ad;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        y = jd;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        y = ss
                }
                var k = (t & 4) !== 0,
                    A = !k && e === "scroll",
                    f = k ? m !== null ? m + "Capture" : null : m;
                k = [];
                for (var c = d, p; c !== null;) {
                    p = c;
                    var v = p.stateNode;
                    if (p.tag === 5 && v !== null && (p = v, f !== null && (v = An(c, f), v != null && k.push(Wn(c, v, p)))), A) break;
                    c = c.return
                }
                0 < k.length && (m = new y(m, w, null, n, g), h.push({
                    event: m,
                    listeners: k
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (m = e === "mouseover" || e === "pointerover", y = e === "mouseout" || e === "pointerout", m && n !== fo && (w = n.relatedTarget || n.fromElement) && (kt(w) || w[Ke])) break e;
                if ((y || m) && (m = g.window === g ? g : (m = g.ownerDocument) ? m.defaultView || m.parentWindow : window, y ? (w = n.relatedTarget || n.toElement, y = d, w = w ? kt(w) : null, w !== null && (A = bt(w), w !== A || w.tag !== 5 && w.tag !== 6) && (w = null)) : (y = null, w = d), y !== w)) {
                    if (k = os, v = "onMouseLeave", f = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (k = ss, v = "onPointerLeave", f = "onPointerEnter", c = "pointer"), A = y == null ? m : Ut(y), p = w == null ? m : Ut(w), m = new k(v, c + "leave", y, n, g), m.target = A, m.relatedTarget = p, v = null, kt(g) === d && (k = new k(f, c + "enter", w, n, g), k.target = p, k.relatedTarget = A, v = k), A = v, y && w) t: {
                        for (k = y, f = w, c = 0, p = k; p; p = It(p)) c++;
                        for (p = 0, v = f; v; v = It(v)) p++;
                        for (; 0 < c - p;) k = It(k),
                        c--;
                        for (; 0 < p - c;) f = It(f),
                        p--;
                        for (; c--;) {
                            if (k === f || f !== null && k === f.alternate) break t;
                            k = It(k), f = It(f)
                        }
                        k = null
                    }
                    else k = null;
                    y !== null && xs(h, m, y, k, !1), w !== null && A !== null && xs(h, A, w, k, !0)
                }
            }
            e: {
                if (m = d ? Ut(d) : window, y = m.nodeName && m.nodeName.toLowerCase(), y === "select" || y === "input" && m.type === "file") var S = Wd;
                else if (cs(m))
                    if (Za) S = Gd;
                    else {
                        S = Kd;
                        var C = Qd
                    }
                else(y = m.nodeName) && y.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (S = Yd);
                if (S && (S = S(e, d))) {
                    Xa(h, S, n, g);
                    break e
                }
                C && C(e, m, d),
                e === "focusout" && (C = m._wrapperState) && C.controlled && m.type === "number" && io(m, "number", m.value)
            }
            switch (C = d ? Ut(d) : window, e) {
                case "focusin":
                    (cs(C) || C.contentEditable === "true") && (At = C, yo = d, Ln = null);
                    break;
                case "focusout":
                    Ln = yo = At = null;
                    break;
                case "mousedown":
                    wo = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    wo = !1, hs(h, n, g);
                    break;
                case "selectionchange":
                    if (Jd) break;
                case "keydown":
                case "keyup":
                    hs(h, n, g)
            }
            var E;
            if (fi) e: {
                switch (e) {
                    case "compositionstart":
                        var _ = "onCompositionStart";
                        break e;
                    case "compositionend":
                        _ = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        _ = "onCompositionUpdate";
                        break e
                }
                _ = void 0
            }
            else Ot ? Ya(e, n) && (_ = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (_ = "onCompositionStart");_ && (Ka && n.locale !== "ko" && (Ot || _ !== "onCompositionStart" ? _ === "onCompositionEnd" && Ot && (E = Qa()) : (nt = g, ui = "value" in nt ? nt.value : nt.textContent, Ot = !0)), C = Br(d, _), 0 < C.length && (_ = new is(_, e, null, n, g), h.push({
                event: _,
                listeners: C
            }), E ? _.data = E : (E = Ga(n), E !== null && (_.data = E)))),
            (E = Ud ? $d(e, n) : Bd(e, n)) && (d = Br(d, "onBeforeInput"), 0 < d.length && (g = new is("onBeforeInput", "beforeinput", null, n, g), h.push({
                event: g,
                listeners: d
            }), g.data = E))
        }
        su(h, t)
    })
}

function Wn(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}

function Br(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
        var l = e,
            o = l.stateNode;
        l.tag === 5 && o !== null && (l = o, o = An(e, n), o != null && r.unshift(Wn(e, o, l)), o = An(e, t), o != null && r.push(Wn(e, o, l))), e = e.return
    }
    return r
}

function It(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null
}

function xs(e, t, n, r, l) {
    for (var o = t._reactName, i = []; n !== null && n !== r;) {
        var a = n,
            u = a.alternate,
            d = a.stateNode;
        if (u !== null && u === r) break;
        a.tag === 5 && d !== null && (a = d, l ? (u = An(n, o), u != null && i.unshift(Wn(n, u, a))) : l || (u = An(n, o), u != null && i.push(Wn(n, u, a)))), n = n.return
    }
    i.length !== 0 && e.push({
        event: t,
        listeners: i
    })
}
var nf = /\r\n?/g,
    rf = /\u0000|\uFFFD/g;

function ys(e) {
    return (typeof e == "string" ? e : "" + e).replace(nf, `
`).replace(rf, "")
}

function gr(e, t, n) {
    if (t = ys(t), ys(e) !== t && n) throw Error(x(425))
}

function Hr() {}
var ko = null,
    No = null;

function So(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var jo = typeof setTimeout == "function" ? setTimeout : void 0,
    lf = typeof clearTimeout == "function" ? clearTimeout : void 0,
    ws = typeof Promise == "function" ? Promise : void 0,
    of = typeof queueMicrotask == "function" ? queueMicrotask : typeof ws < "u" ? function(e) {
        return ws.resolve(null).then(e).catch(sf)
    } : jo;

function sf(e) {
    setTimeout(function() {
        throw e
    })
}

function Hl(e, t) {
    var n = t,
        r = 0;
    do {
        var l = n.nextSibling;
        if (e.removeChild(n), l && l.nodeType === 8)
            if (n = l.data, n === "/$") {
                if (r === 0) {
                    e.removeChild(l), $n(t);
                    return
                }
                r--
            } else n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = l
    } while (n);
    $n(t)
}

function st(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
            if (t === "/$") return null
        }
    }
    return e
}

function ks(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--
            } else n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var dn = Math.random().toString(36).slice(2),
    Ae = "__reactFiber$" + dn,
    Qn = "__reactProps$" + dn,
    Ke = "__reactContainer$" + dn,
    Co = "__reactEvents$" + dn,
    af = "__reactListeners$" + dn,
    uf = "__reactHandles$" + dn;

function kt(e) {
    var t = e[Ae];
    if (t) return t;
    for (var n = e.parentNode; n;) {
        if (t = n[Ke] || n[Ae]) {
            if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                for (e = ks(e); e !== null;) {
                    if (n = e[Ae]) return n;
                    e = ks(e)
                }
            return t
        }
        e = n, n = e.parentNode
    }
    return null
}

function nr(e) {
    return e = e[Ae] || e[Ke], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function Ut(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(x(33))
}

function fl(e) {
    return e[Qn] || null
}
var Eo = [],
    $t = -1;

function ht(e) {
    return {
        current: e
    }
}

function O(e) {
    0 > $t || (e.current = Eo[$t], Eo[$t] = null, $t--)
}

function R(e, t) {
    $t++, Eo[$t] = e.current, e.current = t
}
var pt = {},
    oe = ht(pt),
    fe = ht(!1),
    _t = pt;

function tn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return pt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
        o;
    for (o in n) l[o] = t[o];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l
}

function pe(e) {
    return e = e.childContextTypes, e != null
}

function Vr() {
    O(fe), O(oe)
}

function Ns(e, t, n) {
    if (oe.current !== pt) throw Error(x(168));
    R(oe, t), R(fe, n)
}

function uu(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var l in r)
        if (!(l in t)) throw Error(x(108, Qc(e) || "Unknown", l));
    return B({}, n, r)
}

function Wr(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || pt, _t = oe.current, R(oe, e), R(fe, fe.current), !0
}

function Ss(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(x(169));
    n ? (e = uu(e, t, _t), r.__reactInternalMemoizedMergedChildContext = e, O(fe), O(oe), R(oe, e)) : O(fe), R(fe, n)
}
var Be = null,
    pl = !1,
    Vl = !1;

function cu(e) {
    Be === null ? Be = [e] : Be.push(e)
}

function cf(e) {
    pl = !0, cu(e)
}

function gt() {
    if (!Vl && Be !== null) {
        Vl = !0;
        var e = 0,
            t = b;
        try {
            var n = Be;
            for (b = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0); while (r !== null)
            }
            Be = null, pl = !1
        } catch (l) {
            throw Be !== null && (Be = Be.slice(e + 1)), Ra(oi, gt), l
        } finally {
            b = t, Vl = !1
        }
    }
    return null
}
var Bt = [],
    Ht = 0,
    Qr = null,
    Kr = 0,
    Ne = [],
    Se = 0,
    Pt = null,
    He = 1,
    Ve = "";

function yt(e, t) {
    Bt[Ht++] = Kr, Bt[Ht++] = Qr, Qr = e, Kr = t
}

function du(e, t, n) {
    Ne[Se++] = He, Ne[Se++] = Ve, Ne[Se++] = Pt, Pt = e;
    var r = He;
    e = Ve;
    var l = 32 - be(r) - 1;
    r &= ~(1 << l), n += 1;
    var o = 32 - be(t) + l;
    if (30 < o) {
        var i = l - l % 5;
        o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, He = 1 << 32 - be(t) + l | n << l | r, Ve = o + e
    } else He = 1 << o | n << l | r, Ve = e
}

function mi(e) {
    e.return !== null && (yt(e, 1), du(e, 1, 0))
}

function hi(e) {
    for (; e === Qr;) Qr = Bt[--Ht], Bt[Ht] = null, Kr = Bt[--Ht], Bt[Ht] = null;
    for (; e === Pt;) Pt = Ne[--Se], Ne[Se] = null, Ve = Ne[--Se], Ne[Se] = null, He = Ne[--Se], Ne[Se] = null
}
var xe = null,
    ge = null,
    F = !1,
    Me = null;

function fu(e, t) {
    var n = je(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function js(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, xe = e, ge = st(t.firstChild), !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, xe = e, ge = null, !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Pt !== null ? {
                id: He,
                overflow: Ve
            } : null, e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824
            }, n = je(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, xe = e, ge = null, !0) : !1;
        default:
            return !1
    }
}

function _o(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function Po(e) {
    if (F) {
        var t = ge;
        if (t) {
            var n = t;
            if (!js(e, t)) {
                if (_o(e)) throw Error(x(418));
                t = st(n.nextSibling);
                var r = xe;
                t && js(e, t) ? fu(r, n) : (e.flags = e.flags & -4097 | 2, F = !1, xe = e)
            }
        } else {
            if (_o(e)) throw Error(x(418));
            e.flags = e.flags & -4097 | 2, F = !1, xe = e
        }
    }
}

function Cs(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    xe = e
}

function vr(e) {
    if (e !== xe) return !1;
    if (!F) return Cs(e), F = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !So(e.type, e.memoizedProps)), t && (t = ge)) {
        if (_o(e)) throw pu(), Error(x(418));
        for (; t;) fu(e, t), t = st(t.nextSibling)
    }
    if (Cs(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(x(317));
        e: {
            for (e = e.nextSibling, t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            ge = st(e.nextSibling);
                            break e
                        }
                        t--
                    } else n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            ge = null
        }
    } else ge = xe ? st(e.stateNode.nextSibling) : null;
    return !0
}

function pu() {
    for (var e = ge; e;) e = st(e.nextSibling)
}

function nn() {
    ge = xe = null, F = !1
}

function gi(e) {
    Me === null ? Me = [e] : Me.push(e)
}
var df = Xe.ReactCurrentBatchConfig;

function yn(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner, n) {
                if (n.tag !== 1) throw Error(x(309));
                var r = n.stateNode
            }
            if (!r) throw Error(x(147, e));
            var l = r,
                o = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(i) {
                var a = l.refs;
                i === null ? delete a[o] : a[o] = i
            }, t._stringRef = o, t)
        }
        if (typeof e != "string") throw Error(x(284));
        if (!n._owner) throw Error(x(290, e))
    }
    return e
}

function xr(e, t) {
    throw e = Object.prototype.toString.call(t), Error(x(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function Es(e) {
    var t = e._init;
    return t(e._payload)
}

function mu(e) {
    function t(f, c) {
        if (e) {
            var p = f.deletions;
            p === null ? (f.deletions = [c], f.flags |= 16) : p.push(c)
        }
    }

    function n(f, c) {
        if (!e) return null;
        for (; c !== null;) t(f, c), c = c.sibling;
        return null
    }

    function r(f, c) {
        for (f = new Map; c !== null;) c.key !== null ? f.set(c.key, c) : f.set(c.index, c), c = c.sibling;
        return f
    }

    function l(f, c) {
        return f = dt(f, c), f.index = 0, f.sibling = null, f
    }

    function o(f, c, p) {
        return f.index = p, e ? (p = f.alternate, p !== null ? (p = p.index, p < c ? (f.flags |= 2, c) : p) : (f.flags |= 2, c)) : (f.flags |= 1048576, c)
    }

    function i(f) {
        return e && f.alternate === null && (f.flags |= 2), f
    }

    function a(f, c, p, v) {
        return c === null || c.tag !== 6 ? (c = Zl(p, f.mode, v), c.return = f, c) : (c = l(c, p), c.return = f, c)
    }

    function u(f, c, p, v) {
        var S = p.type;
        return S === Dt ? g(f, c, p.props.children, v, p.key) : c !== null && (c.elementType === S || typeof S == "object" && S !== null && S.$$typeof === Je && Es(S) === c.type) ? (v = l(c, p.props), v.ref = yn(f, c, p), v.return = f, v) : (v = Ir(p.type, p.key, p.props, null, f.mode, v), v.ref = yn(f, c, p), v.return = f, v)
    }

    function d(f, c, p, v) {
        return c === null || c.tag !== 4 || c.stateNode.containerInfo !== p.containerInfo || c.stateNode.implementation !== p.implementation ? (c = Jl(p, f.mode, v), c.return = f, c) : (c = l(c, p.children || []), c.return = f, c)
    }

    function g(f, c, p, v, S) {
        return c === null || c.tag !== 7 ? (c = Et(p, f.mode, v, S), c.return = f, c) : (c = l(c, p), c.return = f, c)
    }

    function h(f, c, p) {
        if (typeof c == "string" && c !== "" || typeof c == "number") return c = Zl("" + c, f.mode, p), c.return = f, c;
        if (typeof c == "object" && c !== null) {
            switch (c.$$typeof) {
                case sr:
                    return p = Ir(c.type, c.key, c.props, null, f.mode, p), p.ref = yn(f, null, c), p.return = f, p;
                case Rt:
                    return c = Jl(c, f.mode, p), c.return = f, c;
                case Je:
                    var v = c._init;
                    return h(f, v(c._payload), p)
            }
            if (Sn(c) || mn(c)) return c = Et(c, f.mode, p, null), c.return = f, c;
            xr(f, c)
        }
        return null
    }

    function m(f, c, p, v) {
        var S = c !== null ? c.key : null;
        if (typeof p == "string" && p !== "" || typeof p == "number") return S !== null ? null : a(f, c, "" + p, v);
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
                case sr:
                    return p.key === S ? u(f, c, p, v) : null;
                case Rt:
                    return p.key === S ? d(f, c, p, v) : null;
                case Je:
                    return S = p._init, m(f, c, S(p._payload), v)
            }
            if (Sn(p) || mn(p)) return S !== null ? null : g(f, c, p, v, null);
            xr(f, p)
        }
        return null
    }

    function y(f, c, p, v, S) {
        if (typeof v == "string" && v !== "" || typeof v == "number") return f = f.get(p) || null, a(c, f, "" + v, S);
        if (typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
                case sr:
                    return f = f.get(v.key === null ? p : v.key) || null, u(c, f, v, S);
                case Rt:
                    return f = f.get(v.key === null ? p : v.key) || null, d(c, f, v, S);
                case Je:
                    var C = v._init;
                    return y(f, c, p, C(v._payload), S)
            }
            if (Sn(v) || mn(v)) return f = f.get(p) || null, g(c, f, v, S, null);
            xr(c, v)
        }
        return null
    }

    function w(f, c, p, v) {
        for (var S = null, C = null, E = c, _ = c = 0, V = null; E !== null && _ < p.length; _++) {
            E.index > _ ? (V = E, E = null) : V = E.sibling;
            var T = m(f, E, p[_], v);
            if (T === null) {
                E === null && (E = V);
                break
            }
            e && E && T.alternate === null && t(f, E), c = o(T, c, _), C === null ? S = T : C.sibling = T, C = T, E = V
        }
        if (_ === p.length) return n(f, E), F && yt(f, _), S;
        if (E === null) {
            for (; _ < p.length; _++) E = h(f, p[_], v), E !== null && (c = o(E, c, _), C === null ? S = E : C.sibling = E, C = E);
            return F && yt(f, _), S
        }
        for (E = r(f, E); _ < p.length; _++) V = y(E, f, _, p[_], v), V !== null && (e && V.alternate !== null && E.delete(V.key === null ? _ : V.key), c = o(V, c, _), C === null ? S = V : C.sibling = V, C = V);
        return e && E.forEach(function(Pe) {
            return t(f, Pe)
        }), F && yt(f, _), S
    }

    function k(f, c, p, v) {
        var S = mn(p);
        if (typeof S != "function") throw Error(x(150));
        if (p = S.call(p), p == null) throw Error(x(151));
        for (var C = S = null, E = c, _ = c = 0, V = null, T = p.next(); E !== null && !T.done; _++, T = p.next()) {
            E.index > _ ? (V = E, E = null) : V = E.sibling;
            var Pe = m(f, E, T.value, v);
            if (Pe === null) {
                E === null && (E = V);
                break
            }
            e && E && Pe.alternate === null && t(f, E), c = o(Pe, c, _), C === null ? S = Pe : C.sibling = Pe, C = Pe, E = V
        }
        if (T.done) return n(f, E), F && yt(f, _), S;
        if (E === null) {
            for (; !T.done; _++, T = p.next()) T = h(f, T.value, v), T !== null && (c = o(T, c, _), C === null ? S = T : C.sibling = T, C = T);
            return F && yt(f, _), S
        }
        for (E = r(f, E); !T.done; _++, T = p.next()) T = y(E, f, _, T.value, v), T !== null && (e && T.alternate !== null && E.delete(T.key === null ? _ : T.key), c = o(T, c, _), C === null ? S = T : C.sibling = T, C = T);
        return e && E.forEach(function(fn) {
            return t(f, fn)
        }), F && yt(f, _), S
    }

    function A(f, c, p, v) {
        if (typeof p == "object" && p !== null && p.type === Dt && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
                case sr:
                    e: {
                        for (var S = p.key, C = c; C !== null;) {
                            if (C.key === S) {
                                if (S = p.type, S === Dt) {
                                    if (C.tag === 7) {
                                        n(f, C.sibling), c = l(C, p.props.children), c.return = f, f = c;
                                        break e
                                    }
                                } else if (C.elementType === S || typeof S == "object" && S !== null && S.$$typeof === Je && Es(S) === C.type) {
                                    n(f, C.sibling), c = l(C, p.props), c.ref = yn(f, C, p), c.return = f, f = c;
                                    break e
                                }
                                n(f, C);
                                break
                            } else t(f, C);
                            C = C.sibling
                        }
                        p.type === Dt ? (c = Et(p.props.children, f.mode, v, p.key), c.return = f, f = c) : (v = Ir(p.type, p.key, p.props, null, f.mode, v), v.ref = yn(f, c, p), v.return = f, f = v)
                    }
                    return i(f);
                case Rt:
                    e: {
                        for (C = p.key; c !== null;) {
                            if (c.key === C)
                                if (c.tag === 4 && c.stateNode.containerInfo === p.containerInfo && c.stateNode.implementation === p.implementation) {
                                    n(f, c.sibling), c = l(c, p.children || []), c.return = f, f = c;
                                    break e
                                } else {
                                    n(f, c);
                                    break
                                }
                            else t(f, c);
                            c = c.sibling
                        }
                        c = Jl(p, f.mode, v),
                        c.return = f,
                        f = c
                    }
                    return i(f);
                case Je:
                    return C = p._init, A(f, c, C(p._payload), v)
            }
            if (Sn(p)) return w(f, c, p, v);
            if (mn(p)) return k(f, c, p, v);
            xr(f, p)
        }
        return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, c !== null && c.tag === 6 ? (n(f, c.sibling), c = l(c, p), c.return = f, f = c) : (n(f, c), c = Zl(p, f.mode, v), c.return = f, f = c), i(f)) : n(f, c)
    }
    return A
}
var rn = mu(!0),
    hu = mu(!1),
    Yr = ht(null),
    Gr = null,
    Vt = null,
    vi = null;

function xi() {
    vi = Vt = Gr = null
}

function yi(e) {
    var t = Yr.current;
    O(Yr), e._currentValue = t
}

function zo(e, t, n) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
        e = e.return
    }
}

function Zt(e, t) {
    Gr = e, vi = Vt = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (de = !0), e.firstContext = null)
}

function Ee(e) {
    var t = e._currentValue;
    if (vi !== e)
        if (e = {
                context: e,
                memoizedValue: t,
                next: null
            }, Vt === null) {
            if (Gr === null) throw Error(x(308));
            Vt = e, Gr.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else Vt = Vt.next = e;
    return t
}
var Nt = null;

function wi(e) {
    Nt === null ? Nt = [e] : Nt.push(e)
}

function gu(e, t, n, r) {
    var l = t.interleaved;
    return l === null ? (n.next = n, wi(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Ye(e, r)
}

function Ye(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var qe = !1;

function ki(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}

function vu(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}

function We(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}

function at(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, M & 2) {
        var l = r.pending;
        return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Ye(e, n)
    }
    return l = r.interleaved, l === null ? (t.next = t, wi(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Ye(e, n)
}

function Pr(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, ii(e, n)
    }
}

function _s(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
        var l = null,
            o = null;
        if (n = n.firstBaseUpdate, n !== null) {
            do {
                var i = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                o === null ? l = o = i : o = o.next = i, n = n.next
            } while (n !== null);
            o === null ? l = o = t : o = o.next = t
        } else l = o = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: l,
            lastBaseUpdate: o,
            shared: r.shared,
            effects: r.effects
        }, e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function Xr(e, t, n, r) {
    var l = e.updateQueue;
    qe = !1;
    var o = l.firstBaseUpdate,
        i = l.lastBaseUpdate,
        a = l.shared.pending;
    if (a !== null) {
        l.shared.pending = null;
        var u = a,
            d = u.next;
        u.next = null, i === null ? o = d : i.next = d, i = u;
        var g = e.alternate;
        g !== null && (g = g.updateQueue, a = g.lastBaseUpdate, a !== i && (a === null ? g.firstBaseUpdate = d : a.next = d, g.lastBaseUpdate = u))
    }
    if (o !== null) {
        var h = l.baseState;
        i = 0, g = d = u = null, a = o;
        do {
            var m = a.lane,
                y = a.eventTime;
            if ((r & m) === m) {
                g !== null && (g = g.next = {
                    eventTime: y,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var w = e,
                        k = a;
                    switch (m = t, y = n, k.tag) {
                        case 1:
                            if (w = k.payload, typeof w == "function") {
                                h = w.call(y, h, m);
                                break e
                            }
                            h = w;
                            break e;
                        case 3:
                            w.flags = w.flags & -65537 | 128;
                        case 0:
                            if (w = k.payload, m = typeof w == "function" ? w.call(y, h, m) : w, m == null) break e;
                            h = B({}, h, m);
                            break e;
                        case 2:
                            qe = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (e.flags |= 64, m = l.effects, m === null ? l.effects = [a] : m.push(a))
            } else y = {
                eventTime: y,
                lane: m,
                tag: a.tag,
                payload: a.payload,
                callback: a.callback,
                next: null
            }, g === null ? (d = g = y, u = h) : g = g.next = y, i |= m;
            if (a = a.next, a === null) {
                if (a = l.shared.pending, a === null) break;
                m = a, a = m.next, m.next = null, l.lastBaseUpdate = m, l.shared.pending = null
            }
        } while (!0);
        if (g === null && (u = h), l.baseState = u, l.firstBaseUpdate = d, l.lastBaseUpdate = g, t = l.shared.interleaved, t !== null) {
            l = t;
            do i |= l.lane, l = l.next; while (l !== t)
        } else o === null && (l.shared.lanes = 0);
        Lt |= i, e.lanes = i, e.memoizedState = h
    }
}

function Ps(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                l = r.callback;
            if (l !== null) {
                if (r.callback = null, r = n, typeof l != "function") throw Error(x(191, l));
                l.call(r)
            }
        }
}
var rr = {},
    Ue = ht(rr),
    Kn = ht(rr),
    Yn = ht(rr);

function St(e) {
    if (e === rr) throw Error(x(174));
    return e
}

function Ni(e, t) {
    switch (R(Yn, t), R(Kn, e), R(Ue, rr), e = t.nodeType, e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : ao(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ao(t, e)
    }
    O(Ue), R(Ue, t)
}

function ln() {
    O(Ue), O(Kn), O(Yn)
}

function xu(e) {
    St(Yn.current);
    var t = St(Ue.current),
        n = ao(t, e.type);
    t !== n && (R(Kn, e), R(Ue, n))
}

function Si(e) {
    Kn.current === e && (O(Ue), O(Kn))
}
var U = ht(0);

function Zr(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t
        } else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue
        }
        if (t === e) break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return null;
            t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
    }
    return null
}
var Wl = [];

function ji() {
    for (var e = 0; e < Wl.length; e++) Wl[e]._workInProgressVersionPrimary = null;
    Wl.length = 0
}
var zr = Xe.ReactCurrentDispatcher,
    Ql = Xe.ReactCurrentBatchConfig,
    zt = 0,
    $ = null,
    Y = null,
    Z = null,
    Jr = !1,
    Tn = !1,
    Gn = 0,
    ff = 0;

function ne() {
    throw Error(x(321))
}

function Ci(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Re(e[n], t[n])) return !1;
    return !0
}

function Ei(e, t, n, r, l, o) {
    if (zt = o, $ = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, zr.current = e === null || e.memoizedState === null ? gf : vf, e = n(r, l), Tn) {
        o = 0;
        do {
            if (Tn = !1, Gn = 0, 25 <= o) throw Error(x(301));
            o += 1, Z = Y = null, t.updateQueue = null, zr.current = xf, e = n(r, l)
        } while (Tn)
    }
    if (zr.current = qr, t = Y !== null && Y.next !== null, zt = 0, Z = Y = $ = null, Jr = !1, t) throw Error(x(300));
    return e
}

function _i() {
    var e = Gn !== 0;
    return Gn = 0, e
}

function Oe() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return Z === null ? $.memoizedState = Z = e : Z = Z.next = e, Z
}

function _e() {
    if (Y === null) {
        var e = $.alternate;
        e = e !== null ? e.memoizedState : null
    } else e = Y.next;
    var t = Z === null ? $.memoizedState : Z.next;
    if (t !== null) Z = t, Y = e;
    else {
        if (e === null) throw Error(x(310));
        Y = e, e = {
            memoizedState: Y.memoizedState,
            baseState: Y.baseState,
            baseQueue: Y.baseQueue,
            queue: Y.queue,
            next: null
        }, Z === null ? $.memoizedState = Z = e : Z = Z.next = e
    }
    return Z
}

function Xn(e, t) {
    return typeof t == "function" ? t(e) : t
}

function Kl(e) {
    var t = _e(),
        n = t.queue;
    if (n === null) throw Error(x(311));
    n.lastRenderedReducer = e;
    var r = Y,
        l = r.baseQueue,
        o = n.pending;
    if (o !== null) {
        if (l !== null) {
            var i = l.next;
            l.next = o.next, o.next = i
        }
        r.baseQueue = l = o, n.pending = null
    }
    if (l !== null) {
        o = l.next, r = r.baseState;
        var a = i = null,
            u = null,
            d = o;
        do {
            var g = d.lane;
            if ((zt & g) === g) u !== null && (u = u.next = {
                lane: 0,
                action: d.action,
                hasEagerState: d.hasEagerState,
                eagerState: d.eagerState,
                next: null
            }), r = d.hasEagerState ? d.eagerState : e(r, d.action);
            else {
                var h = {
                    lane: g,
                    action: d.action,
                    hasEagerState: d.hasEagerState,
                    eagerState: d.eagerState,
                    next: null
                };
                u === null ? (a = u = h, i = r) : u = u.next = h, $.lanes |= g, Lt |= g
            }
            d = d.next
        } while (d !== null && d !== o);
        u === null ? i = r : u.next = a, Re(r, t.memoizedState) || (de = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = u, n.lastRenderedState = r
    }
    if (e = n.interleaved, e !== null) {
        l = e;
        do o = l.lane, $.lanes |= o, Lt |= o, l = l.next; while (l !== e)
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}

function Yl(e) {
    var t = _e(),
        n = t.queue;
    if (n === null) throw Error(x(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        l = n.pending,
        o = t.memoizedState;
    if (l !== null) {
        n.pending = null;
        var i = l = l.next;
        do o = e(o, i.action), i = i.next; while (i !== l);
        Re(o, t.memoizedState) || (de = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o
    }
    return [o, r]
}

function yu() {}

function wu(e, t) {
    var n = $,
        r = _e(),
        l = t(),
        o = !Re(r.memoizedState, l);
    if (o && (r.memoizedState = l, de = !0), r = r.queue, Pi(Su.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || Z !== null && Z.memoizedState.tag & 1) {
        if (n.flags |= 2048, Zn(9, Nu.bind(null, n, r, l, t), void 0, null), J === null) throw Error(x(349));
        zt & 30 || ku(n, t, l)
    }
    return l
}

function ku(e, t, n) {
    e.flags |= 16384, e = {
        getSnapshot: t,
        value: n
    }, t = $.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, $.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function Nu(e, t, n, r) {
    t.value = n, t.getSnapshot = r, ju(t) && Cu(e)
}

function Su(e, t, n) {
    return n(function() {
        ju(t) && Cu(e)
    })
}

function ju(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Re(e, n)
    } catch {
        return !0
    }
}

function Cu(e) {
    var t = Ye(e, 1);
    t !== null && Ie(t, e, 1, -1)
}

function zs(e) {
    var t = Oe();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Xn,
        lastRenderedState: e
    }, t.queue = e, e = e.dispatch = hf.bind(null, $, e), [t.memoizedState, e]
}

function Zn(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    }, t = $.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, $.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function Eu() {
    return _e().memoizedState
}

function Lr(e, t, n, r) {
    var l = Oe();
    $.flags |= e, l.memoizedState = Zn(1 | t, n, void 0, r === void 0 ? null : r)
}

function ml(e, t, n, r) {
    var l = _e();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (Y !== null) {
        var i = Y.memoizedState;
        if (o = i.destroy, r !== null && Ci(r, i.deps)) {
            l.memoizedState = Zn(t, n, o, r);
            return
        }
    }
    $.flags |= e, l.memoizedState = Zn(1 | t, n, o, r)
}

function Ls(e, t) {
    return Lr(8390656, 8, e, t)
}

function Pi(e, t) {
    return ml(2048, 8, e, t)
}

function _u(e, t) {
    return ml(4, 2, e, t)
}

function Pu(e, t) {
    return ml(4, 4, e, t)
}

function zu(e, t) {
    if (typeof t == "function") return e = e(), t(e),
        function() {
            t(null)
        };
    if (t != null) return e = e(), t.current = e,
        function() {
            t.current = null
        }
}

function Lu(e, t, n) {
    return n = n != null ? n.concat([e]) : null, ml(4, 4, zu.bind(null, t, e), n)
}

function zi() {}

function Tu(e, t) {
    var n = _e();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ci(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function Mu(e, t) {
    var n = _e();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ci(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function bu(e, t, n) {
    return zt & 21 ? (Re(n, t) || (n = Aa(), $.lanes |= n, Lt |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, de = !0), e.memoizedState = n)
}

function pf(e, t) {
    var n = b;
    b = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Ql.transition;
    Ql.transition = {};
    try {
        e(!1), t()
    } finally {
        b = n, Ql.transition = r
    }
}

function Iu() {
    return _e().memoizedState
}

function mf(e, t, n) {
    var r = ct(e);
    if (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, Ru(e)) Du(t, n);
    else if (n = gu(e, t, n, r), n !== null) {
        var l = se();
        Ie(n, e, r, l), Ou(n, t, r)
    }
}

function hf(e, t, n) {
    var r = ct(e),
        l = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if (Ru(e)) Du(t, l);
    else {
        var o = e.alternate;
        if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
            var i = t.lastRenderedState,
                a = o(i, n);
            if (l.hasEagerState = !0, l.eagerState = a, Re(a, i)) {
                var u = t.interleaved;
                u === null ? (l.next = l, wi(t)) : (l.next = u.next, u.next = l), t.interleaved = l;
                return
            }
        } catch {} finally {}
        n = gu(e, t, l, r), n !== null && (l = se(), Ie(n, e, r, l), Ou(n, t, r))
    }
}

function Ru(e) {
    var t = e.alternate;
    return e === $ || t !== null && t === $
}

function Du(e, t) {
    Tn = Jr = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function Ou(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, ii(e, n)
    }
}
var qr = {
        readContext: Ee,
        useCallback: ne,
        useContext: ne,
        useEffect: ne,
        useImperativeHandle: ne,
        useInsertionEffect: ne,
        useLayoutEffect: ne,
        useMemo: ne,
        useReducer: ne,
        useRef: ne,
        useState: ne,
        useDebugValue: ne,
        useDeferredValue: ne,
        useTransition: ne,
        useMutableSource: ne,
        useSyncExternalStore: ne,
        useId: ne,
        unstable_isNewReconciler: !1
    },
    gf = {
        readContext: Ee,
        useCallback: function(e, t) {
            return Oe().memoizedState = [e, t === void 0 ? null : t], e
        },
        useContext: Ee,
        useEffect: Ls,
        useImperativeHandle: function(e, t, n) {
            return n = n != null ? n.concat([e]) : null, Lr(4194308, 4, zu.bind(null, t, e), n)
        },
        useLayoutEffect: function(e, t) {
            return Lr(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            return Lr(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var n = Oe();
            return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
        },
        useReducer: function(e, t, n) {
            var r = Oe();
            return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }, r.queue = e, e = e.dispatch = mf.bind(null, $, e), [r.memoizedState, e]
        },
        useRef: function(e) {
            var t = Oe();
            return e = {
                current: e
            }, t.memoizedState = e
        },
        useState: zs,
        useDebugValue: zi,
        useDeferredValue: function(e) {
            return Oe().memoizedState = e
        },
        useTransition: function() {
            var e = zs(!1),
                t = e[0];
            return e = pf.bind(null, e[1]), Oe().memoizedState = e, [t, e]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, n) {
            var r = $,
                l = Oe();
            if (F) {
                if (n === void 0) throw Error(x(407));
                n = n()
            } else {
                if (n = t(), J === null) throw Error(x(349));
                zt & 30 || ku(r, t, n)
            }
            l.memoizedState = n;
            var o = {
                value: n,
                getSnapshot: t
            };
            return l.queue = o, Ls(Su.bind(null, r, o, e), [e]), r.flags |= 2048, Zn(9, Nu.bind(null, r, o, n, t), void 0, null), n
        },
        useId: function() {
            var e = Oe(),
                t = J.identifierPrefix;
            if (F) {
                var n = Ve,
                    r = He;
                n = (r & ~(1 << 32 - be(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Gn++, 0 < n && (t += "H" + n.toString(32)), t += ":"
            } else n = ff++, t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    },
    vf = {
        readContext: Ee,
        useCallback: Tu,
        useContext: Ee,
        useEffect: Pi,
        useImperativeHandle: Lu,
        useInsertionEffect: _u,
        useLayoutEffect: Pu,
        useMemo: Mu,
        useReducer: Kl,
        useRef: Eu,
        useState: function() {
            return Kl(Xn)
        },
        useDebugValue: zi,
        useDeferredValue: function(e) {
            var t = _e();
            return bu(t, Y.memoizedState, e)
        },
        useTransition: function() {
            var e = Kl(Xn)[0],
                t = _e().memoizedState;
            return [e, t]
        },
        useMutableSource: yu,
        useSyncExternalStore: wu,
        useId: Iu,
        unstable_isNewReconciler: !1
    },
    xf = {
        readContext: Ee,
        useCallback: Tu,
        useContext: Ee,
        useEffect: Pi,
        useImperativeHandle: Lu,
        useInsertionEffect: _u,
        useLayoutEffect: Pu,
        useMemo: Mu,
        useReducer: Yl,
        useRef: Eu,
        useState: function() {
            return Yl(Xn)
        },
        useDebugValue: zi,
        useDeferredValue: function(e) {
            var t = _e();
            return Y === null ? t.memoizedState = e : bu(t, Y.memoizedState, e)
        },
        useTransition: function() {
            var e = Yl(Xn)[0],
                t = _e().memoizedState;
            return [e, t]
        },
        useMutableSource: yu,
        useSyncExternalStore: wu,
        useId: Iu,
        unstable_isNewReconciler: !1
    };

function Le(e, t) {
    if (e && e.defaultProps) {
        t = B({}, t), e = e.defaultProps;
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}

function Lo(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : B({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}
var hl = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? bt(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = se(),
            l = ct(e),
            o = We(r, l);
        o.payload = t, n != null && (o.callback = n), t = at(e, o, l), t !== null && (Ie(t, e, l, r), Pr(t, e, l))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = se(),
            l = ct(e),
            o = We(r, l);
        o.tag = 1, o.payload = t, n != null && (o.callback = n), t = at(e, o, l), t !== null && (Ie(t, e, l, r), Pr(t, e, l))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = se(),
            r = ct(e),
            l = We(n, r);
        l.tag = 2, t != null && (l.callback = t), t = at(e, l, r), t !== null && (Ie(t, e, r, n), Pr(t, e, r))
    }
};

function Ts(e, t, n, r, l, o, i) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !Hn(n, r) || !Hn(l, o) : !0
}

function Au(e, t, n) {
    var r = !1,
        l = pt,
        o = t.contextType;
    return typeof o == "object" && o !== null ? o = Ee(o) : (l = pe(t) ? _t : oe.current, r = t.contextTypes, o = (r = r != null) ? tn(e, l) : pt), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = hl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t
}

function Ms(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && hl.enqueueReplaceState(t, t.state, null)
}

function To(e, t, n, r) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, ki(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? l.context = Ee(o) : (o = pe(t) ? _t : oe.current, l.context = tn(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Lo(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && hl.enqueueReplaceState(l, l.state, null), Xr(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308)
}

function on(e, t) {
    try {
        var n = "",
            r = t;
        do n += Wc(r), r = r.return; while (r);
        var l = n
    } catch (o) {
        l = `
Error generating stack: ` + o.message + `
` + o.stack
    }
    return {
        value: e,
        source: t,
        stack: l,
        digest: null
    }
}

function Gl(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}

function Mo(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var yf = typeof WeakMap == "function" ? WeakMap : Map;

function Fu(e, t, n) {
    n = We(-1, n), n.tag = 3, n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        tl || (tl = !0, Bo = r), Mo(e, t)
    }, n
}

function Uu(e, t, n) {
    n = We(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var l = t.value;
        n.payload = function() {
            return r(l)
        }, n.callback = function() {
            Mo(e, t)
        }
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
        Mo(e, t), typeof r != "function" && (ut === null ? ut = new Set([this]) : ut.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: i !== null ? i : ""
        })
    }), n
}

function bs(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new yf;
        var l = new Set;
        r.set(t, l)
    } else l = r.get(t), l === void 0 && (l = new Set, r.set(t, l));
    l.has(n) || (l.add(n), e = bf.bind(null, e, t, n), t.then(e, e))
}

function Is(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
        e = e.return
    } while (e !== null);
    return null
}

function Rs(e, t, n, r, l) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = We(-1, 1), t.tag = 2, at(n, t, 1))), n.lanes |= 1), e)
}
var wf = Xe.ReactCurrentOwner,
    de = !1;

function ie(e, t, n, r) {
    t.child = e === null ? hu(t, null, n, r) : rn(t, e.child, n, r)
}

function Ds(e, t, n, r, l) {
    n = n.render;
    var o = t.ref;
    return Zt(t, l), r = Ei(e, t, n, r, o, l), n = _i(), e !== null && !de ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Ge(e, t, l)) : (F && n && mi(t), t.flags |= 1, ie(e, t, r, l), t.child)
}

function Os(e, t, n, r, l) {
    if (e === null) {
        var o = n.type;
        return typeof o == "function" && !Oi(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, $u(e, t, o, r, l)) : (e = Ir(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e)
    }
    if (o = e.child, !(e.lanes & l)) {
        var i = o.memoizedProps;
        if (n = n.compare, n = n !== null ? n : Hn, n(i, r) && e.ref === t.ref) return Ge(e, t, l)
    }
    return t.flags |= 1, e = dt(o, r), e.ref = t.ref, e.return = t, t.child = e
}

function $u(e, t, n, r, l) {
    if (e !== null) {
        var o = e.memoizedProps;
        if (Hn(o, r) && e.ref === t.ref)
            if (de = !1, t.pendingProps = r = o, (e.lanes & l) !== 0) e.flags & 131072 && (de = !0);
            else return t.lanes = e.lanes, Ge(e, t, l)
    }
    return bo(e, t, n, r, l)
}

function Bu(e, t, n) {
    var r = t.pendingProps,
        l = r.children,
        o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1)) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, R(Qt, he), he |= n;
        else {
            if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, t.updateQueue = null, R(Qt, he), he |= e, null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, r = o !== null ? o.baseLanes : n, R(Qt, he), he |= r
        }
    else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, R(Qt, he), he |= r;
    return ie(e, t, l, n), t.child
}

function Hu(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function bo(e, t, n, r, l) {
    var o = pe(n) ? _t : oe.current;
    return o = tn(t, o), Zt(t, l), n = Ei(e, t, n, r, o, l), r = _i(), e !== null && !de ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Ge(e, t, l)) : (F && r && mi(t), t.flags |= 1, ie(e, t, n, l), t.child)
}

function As(e, t, n, r, l) {
    if (pe(n)) {
        var o = !0;
        Wr(t)
    } else o = !1;
    if (Zt(t, l), t.stateNode === null) Tr(e, t), Au(t, n, r), To(t, n, r, l), r = !0;
    else if (e === null) {
        var i = t.stateNode,
            a = t.memoizedProps;
        i.props = a;
        var u = i.context,
            d = n.contextType;
        typeof d == "object" && d !== null ? d = Ee(d) : (d = pe(n) ? _t : oe.current, d = tn(t, d));
        var g = n.getDerivedStateFromProps,
            h = typeof g == "function" || typeof i.getSnapshotBeforeUpdate == "function";
        h || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== r || u !== d) && Ms(t, i, r, d), qe = !1;
        var m = t.memoizedState;
        i.state = m, Xr(t, r, i, l), u = t.memoizedState, a !== r || m !== u || fe.current || qe ? (typeof g == "function" && (Lo(t, n, g, r), u = t.memoizedState), (a = qe || Ts(t, n, a, r, m, u, d)) ? (h || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), i.props = r, i.state = u, i.context = d, r = a) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
    } else {
        i = t.stateNode, vu(e, t), a = t.memoizedProps, d = t.type === t.elementType ? a : Le(t.type, a), i.props = d, h = t.pendingProps, m = i.context, u = n.contextType, typeof u == "object" && u !== null ? u = Ee(u) : (u = pe(n) ? _t : oe.current, u = tn(t, u));
        var y = n.getDerivedStateFromProps;
        (g = typeof y == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== h || m !== u) && Ms(t, i, r, u), qe = !1, m = t.memoizedState, i.state = m, Xr(t, r, i, l);
        var w = t.memoizedState;
        a !== h || m !== w || fe.current || qe ? (typeof y == "function" && (Lo(t, n, y, r), w = t.memoizedState), (d = qe || Ts(t, n, d, r, m, w, u) || !1) ? (g || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, w, u), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, w, u)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = w), i.props = r, i.state = w, i.context = u, r = d) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), r = !1)
    }
    return Io(e, t, n, r, o, l)
}

function Io(e, t, n, r, l, o) {
    Hu(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i) return l && Ss(t, n, !1), Ge(e, t, o);
    r = t.stateNode, wf.current = t;
    var a = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && i ? (t.child = rn(t, e.child, null, o), t.child = rn(t, null, a, o)) : ie(e, t, a, o), t.memoizedState = r.state, l && Ss(t, n, !0), t.child
}

function Vu(e) {
    var t = e.stateNode;
    t.pendingContext ? Ns(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ns(e, t.context, !1), Ni(e, t.containerInfo)
}

function Fs(e, t, n, r, l) {
    return nn(), gi(l), t.flags |= 256, ie(e, t, n, r), t.child
}
var Ro = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};

function Do(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}

function Wu(e, t, n) {
    var r = t.pendingProps,
        l = U.current,
        o = !1,
        i = (t.flags & 128) !== 0,
        a;
    if ((a = i) || (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), a ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), R(U, l & 1), e === null) return Po(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, i = {
        mode: "hidden",
        children: i
    }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = xl(i, r, 0, null), e = Et(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Do(n), t.memoizedState = Ro, e) : Li(t, i));
    if (l = e.memoizedState, l !== null && (a = l.dehydrated, a !== null)) return kf(e, t, i, r, a, l, n);
    if (o) {
        o = r.fallback, i = t.mode, l = e.child, a = l.sibling;
        var u = {
            mode: "hidden",
            children: r.children
        };
        return !(i & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = dt(l, u), r.subtreeFlags = l.subtreeFlags & 14680064), a !== null ? o = dt(a, o) : (o = Et(o, i, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, i = e.child.memoizedState, i = i === null ? Do(n) : {
            baseLanes: i.baseLanes | n,
            cachePool: null,
            transitions: i.transitions
        }, o.memoizedState = i, o.childLanes = e.childLanes & ~n, t.memoizedState = Ro, r
    }
    return o = e.child, e = o.sibling, r = dt(o, {
        mode: "visible",
        children: r.children
    }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
}

function Li(e, t) {
    return t = xl({
        mode: "visible",
        children: t
    }, e.mode, 0, null), t.return = e, e.child = t
}

function yr(e, t, n, r) {
    return r !== null && gi(r), rn(t, e.child, null, n), e = Li(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function kf(e, t, n, r, l, o, i) {
    if (n) return t.flags & 256 ? (t.flags &= -257, r = Gl(Error(x(422))), yr(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, l = t.mode, r = xl({
        mode: "visible",
        children: r.children
    }, l, 0, null), o = Et(o, l, i, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && rn(t, e.child, null, i), t.child.memoizedState = Do(i), t.memoizedState = Ro, o);
    if (!(t.mode & 1)) return yr(e, t, i, null);
    if (l.data === "$!") {
        if (r = l.nextSibling && l.nextSibling.dataset, r) var a = r.dgst;
        return r = a, o = Error(x(419)), r = Gl(o, r, void 0), yr(e, t, i, r)
    }
    if (a = (i & e.childLanes) !== 0, de || a) {
        if (r = J, r !== null) {
            switch (i & -i) {
                case 4:
                    l = 2;
                    break;
                case 16:
                    l = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    l = 32;
                    break;
                case 536870912:
                    l = 268435456;
                    break;
                default:
                    l = 0
            }
            l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, Ye(e, l), Ie(r, e, l, -1))
        }
        return Di(), r = Gl(Error(x(421))), yr(e, t, i, r)
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = If.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, ge = st(l.nextSibling), xe = t, F = !0, Me = null, e !== null && (Ne[Se++] = He, Ne[Se++] = Ve, Ne[Se++] = Pt, He = e.id, Ve = e.overflow, Pt = t), t = Li(t, r.children), t.flags |= 4096, t)
}

function Us(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), zo(e.return, t, n)
}

function Xl(e, t, n, r, l) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l
    } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = l)
}

function Qu(e, t, n) {
    var r = t.pendingProps,
        l = r.revealOrder,
        o = r.tail;
    if (ie(e, t, r.children, n), r = U.current, r & 2) r = r & 1 | 2, t.flags |= 128;
    else {
        if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && Us(e, n, t);
            else if (e.tag === 19) Us(e, n, t);
            else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        r &= 1
    }
    if (R(U, r), !(t.mode & 1)) t.memoizedState = null;
    else switch (l) {
        case "forwards":
            for (n = t.child, l = null; n !== null;) e = n.alternate, e !== null && Zr(e) === null && (l = n), n = n.sibling;
            n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Xl(t, !1, l, n, o);
            break;
        case "backwards":
            for (n = null, l = t.child, t.child = null; l !== null;) {
                if (e = l.alternate, e !== null && Zr(e) === null) {
                    t.child = l;
                    break
                }
                e = l.sibling, l.sibling = n, n = l, l = e
            }
            Xl(t, !0, n, null, o);
            break;
        case "together":
            Xl(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
    }
    return t.child
}

function Tr(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function Ge(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Lt |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(x(153));
    if (t.child !== null) {
        for (e = t.child, n = dt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = dt(e, e.pendingProps), n.return = t;
        n.sibling = null
    }
    return t.child
}

function Nf(e, t, n) {
    switch (t.tag) {
        case 3:
            Vu(t), nn();
            break;
        case 5:
            xu(t);
            break;
        case 1:
            pe(t.type) && Wr(t);
            break;
        case 4:
            Ni(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                l = t.memoizedProps.value;
            R(Yr, r._currentValue), r._currentValue = l;
            break;
        case 13:
            if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (R(U, U.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Wu(e, t, n) : (R(U, U.current & 1), e = Ge(e, t, n), e !== null ? e.sibling : null);
            R(U, U.current & 1);
            break;
        case 19:
            if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                if (r) return Qu(e, t, n);
                t.flags |= 128
            }
            if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), R(U, U.current), r) break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0, Bu(e, t, n)
    }
    return Ge(e, t, n)
}
var Ku, Oo, Yu, Gu;
Ku = function(e, t) {
    for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n, n = n.child;
            continue
        }
        if (n === t) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t) return;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
};
Oo = function() {};
Yu = function(e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
        e = t.stateNode, St(Ue.current);
        var o = null;
        switch (n) {
            case "input":
                l = lo(e, l), r = lo(e, r), o = [];
                break;
            case "select":
                l = B({}, l, {
                    value: void 0
                }), r = B({}, r, {
                    value: void 0
                }), o = [];
                break;
            case "textarea":
                l = so(e, l), r = so(e, r), o = [];
                break;
            default:
                typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Hr)
        }
        uo(n, r);
        var i;
        n = null;
        for (d in l)
            if (!r.hasOwnProperty(d) && l.hasOwnProperty(d) && l[d] != null)
                if (d === "style") {
                    var a = l[d];
                    for (i in a) a.hasOwnProperty(i) && (n || (n = {}), n[i] = "")
                } else d !== "dangerouslySetInnerHTML" && d !== "children" && d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (Dn.hasOwnProperty(d) ? o || (o = []) : (o = o || []).push(d, null));
        for (d in r) {
            var u = r[d];
            if (a = l != null ? l[d] : void 0, r.hasOwnProperty(d) && u !== a && (u != null || a != null))
                if (d === "style")
                    if (a) {
                        for (i in a) !a.hasOwnProperty(i) || u && u.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
                        for (i in u) u.hasOwnProperty(i) && a[i] !== u[i] && (n || (n = {}), n[i] = u[i])
                    } else n || (o || (o = []), o.push(d, n)), n = u;
            else d === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, a = a ? a.__html : void 0, u != null && a !== u && (o = o || []).push(d, u)) : d === "children" ? typeof u != "string" && typeof u != "number" || (o = o || []).push(d, "" + u) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && (Dn.hasOwnProperty(d) ? (u != null && d === "onScroll" && D("scroll", e), o || a === u || (o = [])) : (o = o || []).push(d, u))
        }
        n && (o = o || []).push("style", n);
        var d = o;
        (t.updateQueue = d) && (t.flags |= 4)
    }
};
Gu = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
};

function wn(e, t) {
    if (!F) switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
    }
}

function re(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var l = e.child; l !== null;) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
    else
        for (l = e.child; l !== null;) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t
}

function Sf(e, t, n) {
    var r = t.pendingProps;
    switch (hi(t), t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return re(t), null;
        case 1:
            return pe(t.type) && Vr(), re(t), null;
        case 3:
            return r = t.stateNode, ln(), O(fe), O(oe), ji(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (vr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Me !== null && (Wo(Me), Me = null))), Oo(e, t), re(t), null;
        case 5:
            Si(t);
            var l = St(Yn.current);
            if (n = t.type, e !== null && t.stateNode != null) Yu(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(x(166));
                    return re(t), null
                }
                if (e = St(Ue.current), vr(t)) {
                    r = t.stateNode, n = t.type;
                    var o = t.memoizedProps;
                    switch (r[Ae] = t, r[Qn] = o, e = (t.mode & 1) !== 0, n) {
                        case "dialog":
                            D("cancel", r), D("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            D("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (l = 0; l < Cn.length; l++) D(Cn[l], r);
                            break;
                        case "source":
                            D("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            D("error", r), D("load", r);
                            break;
                        case "details":
                            D("toggle", r);
                            break;
                        case "input":
                            Gi(r, o), D("invalid", r);
                            break;
                        case "select":
                            r._wrapperState = {
                                wasMultiple: !!o.multiple
                            }, D("invalid", r);
                            break;
                        case "textarea":
                            Zi(r, o), D("invalid", r)
                    }
                    uo(n, o), l = null;
                    for (var i in o)
                        if (o.hasOwnProperty(i)) {
                            var a = o[i];
                            i === "children" ? typeof a == "string" ? r.textContent !== a && (o.suppressHydrationWarning !== !0 && gr(r.textContent, a, e), l = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (o.suppressHydrationWarning !== !0 && gr(r.textContent, a, e), l = ["children", "" + a]) : Dn.hasOwnProperty(i) && a != null && i === "onScroll" && D("scroll", r)
                        } switch (n) {
                        case "input":
                            ar(r), Xi(r, o, !0);
                            break;
                        case "textarea":
                            ar(r), Ji(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof o.onClick == "function" && (r.onclick = Hr)
                    }
                    r = l, t.updateQueue = r, r !== null && (t.flags |= 4)
                } else {
                    i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Sa(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, {
                        is: r.is
                    }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[Ae] = t, e[Qn] = r, Ku(e, t, !1, !1), t.stateNode = e;
                    e: {
                        switch (i = co(n, r), n) {
                            case "dialog":
                                D("cancel", e), D("close", e), l = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                D("load", e), l = r;
                                break;
                            case "video":
                            case "audio":
                                for (l = 0; l < Cn.length; l++) D(Cn[l], e);
                                l = r;
                                break;
                            case "source":
                                D("error", e), l = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                D("error", e), D("load", e), l = r;
                                break;
                            case "details":
                                D("toggle", e), l = r;
                                break;
                            case "input":
                                Gi(e, r), l = lo(e, r), D("invalid", e);
                                break;
                            case "option":
                                l = r;
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!r.multiple
                                }, l = B({}, r, {
                                    value: void 0
                                }), D("invalid", e);
                                break;
                            case "textarea":
                                Zi(e, r), l = so(e, r), D("invalid", e);
                                break;
                            default:
                                l = r
                        }
                        uo(n, l),
                        a = l;
                        for (o in a)
                            if (a.hasOwnProperty(o)) {
                                var u = a[o];
                                o === "style" ? Ea(e, u) : o === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && ja(e, u)) : o === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && On(e, u) : typeof u == "number" && On(e, "" + u) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Dn.hasOwnProperty(o) ? u != null && o === "onScroll" && D("scroll", e) : u != null && ei(e, o, u, i))
                            } switch (n) {
                            case "input":
                                ar(e), Xi(e, r, !1);
                                break;
                            case "textarea":
                                ar(e), Ji(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + ft(r.value));
                                break;
                            case "select":
                                e.multiple = !!r.multiple, o = r.value, o != null ? Kt(e, !!r.multiple, o, !1) : r.defaultValue != null && Kt(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof l.onClick == "function" && (e.onclick = Hr)
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
            }
            return re(t), null;
        case 6:
            if (e && t.stateNode != null) Gu(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null) throw Error(x(166));
                if (n = St(Yn.current), St(Ue.current), vr(t)) {
                    if (r = t.stateNode, n = t.memoizedProps, r[Ae] = t, (o = r.nodeValue !== n) && (e = xe, e !== null)) switch (e.tag) {
                        case 3:
                            gr(r.nodeValue, n, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && gr(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                    o && (t.flags |= 4)
                } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Ae] = t, t.stateNode = r
            }
            return re(t), null;
        case 13:
            if (O(U), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (F && ge !== null && t.mode & 1 && !(t.flags & 128)) pu(), nn(), t.flags |= 98560, o = !1;
                else if (o = vr(t), r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!o) throw Error(x(318));
                        if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(x(317));
                        o[Ae] = t
                    } else nn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                    re(t), o = !1
                } else Me !== null && (Wo(Me), Me = null), o = !0;
                if (!o) return t.flags & 65536 ? t : null
            }
            return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || U.current & 1 ? G === 0 && (G = 3) : Di())), t.updateQueue !== null && (t.flags |= 4), re(t), null);
        case 4:
            return ln(), Oo(e, t), e === null && Vn(t.stateNode.containerInfo), re(t), null;
        case 10:
            return yi(t.type._context), re(t), null;
        case 17:
            return pe(t.type) && Vr(), re(t), null;
        case 19:
            if (O(U), o = t.memoizedState, o === null) return re(t), null;
            if (r = (t.flags & 128) !== 0, i = o.rendering, i === null)
                if (r) wn(o, !1);
                else {
                    if (G !== 0 || e !== null && e.flags & 128)
                        for (e = t.child; e !== null;) {
                            if (i = Zr(e), i !== null) {
                                for (t.flags |= 128, wn(o, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) o = n, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }), n = n.sibling;
                                return R(U, U.current & 1 | 2), t.child
                            }
                            e = e.sibling
                        }
                    o.tail !== null && Q() > sn && (t.flags |= 128, r = !0, wn(o, !1), t.lanes = 4194304)
                }
            else {
                if (!r)
                    if (e = Zr(i), e !== null) {
                        if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), wn(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !F) return re(t), null
                    } else 2 * Q() - o.renderingStartTime > sn && n !== 1073741824 && (t.flags |= 128, r = !0, wn(o, !1), t.lanes = 4194304);
                o.isBackwards ? (i.sibling = t.child, t.child = i) : (n = o.last, n !== null ? n.sibling = i : t.child = i, o.last = i)
            }
            return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = Q(), t.sibling = null, n = U.current, R(U, r ? n & 1 | 2 : n & 1), t) : (re(t), null);
        case 22:
        case 23:
            return Ri(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? he & 1073741824 && (re(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : re(t), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(x(156, t.tag))
}

function jf(e, t) {
    switch (hi(t), t.tag) {
        case 1:
            return pe(t.type) && Vr(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
            return ln(), O(fe), O(oe), ji(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
        case 5:
            return Si(t), null;
        case 13:
            if (O(U), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                if (t.alternate === null) throw Error(x(340));
                nn()
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
            return O(U), null;
        case 4:
            return ln(), null;
        case 10:
            return yi(t.type._context), null;
        case 22:
        case 23:
            return Ri(), null;
        case 24:
            return null;
        default:
            return null
    }
}
var wr = !1,
    le = !1,
    Cf = typeof WeakSet == "function" ? WeakSet : Set,
    N = null;

function Wt(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function") try {
            n(null)
        } catch (r) {
            H(e, t, r)
        } else n.current = null
}

function Ao(e, t, n) {
    try {
        n()
    } catch (r) {
        H(e, t, r)
    }
}
var $s = !1;

function Ef(e, t) {
    if (ko = Ur, e = eu(), pi(e)) {
        if ("selectionStart" in e) var n = {
            start: e.selectionStart,
            end: e.selectionEnd
        };
        else e: {
            n = (n = e.ownerDocument) && n.defaultView || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
                n = r.anchorNode;
                var l = r.anchorOffset,
                    o = r.focusNode;
                r = r.focusOffset;
                try {
                    n.nodeType, o.nodeType
                } catch {
                    n = null;
                    break e
                }
                var i = 0,
                    a = -1,
                    u = -1,
                    d = 0,
                    g = 0,
                    h = e,
                    m = null;
                t: for (;;) {
                    for (var y; h !== n || l !== 0 && h.nodeType !== 3 || (a = i + l), h !== o || r !== 0 && h.nodeType !== 3 || (u = i + r), h.nodeType === 3 && (i += h.nodeValue.length), (y = h.firstChild) !== null;) m = h, h = y;
                    for (;;) {
                        if (h === e) break t;
                        if (m === n && ++d === l && (a = i), m === o && ++g === r && (u = i), (y = h.nextSibling) !== null) break;
                        h = m, m = h.parentNode
                    }
                    h = y
                }
                n = a === -1 || u === -1 ? null : {
                    start: a,
                    end: u
                }
            } else n = null
        }
        n = n || {
            start: 0,
            end: 0
        }
    } else n = null;
    for (No = {
            focusedElem: e,
            selectionRange: n
        }, Ur = !1, N = t; N !== null;)
        if (t = N, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, N = e;
        else
            for (; N !== null;) {
                t = N;
                try {
                    var w = t.alternate;
                    if (t.flags & 1024) switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (w !== null) {
                                var k = w.memoizedProps,
                                    A = w.memoizedState,
                                    f = t.stateNode,
                                    c = f.getSnapshotBeforeUpdate(t.elementType === t.type ? k : Le(t.type, k), A);
                                f.__reactInternalSnapshotBeforeUpdate = c
                            }
                            break;
                        case 3:
                            var p = t.stateNode.containerInfo;
                            p.nodeType === 1 ? p.textContent = "" : p.nodeType === 9 && p.documentElement && p.removeChild(p.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(x(163))
                    }
                } catch (v) {
                    H(t, t.return, v)
                }
                if (e = t.sibling, e !== null) {
                    e.return = t.return, N = e;
                    break
                }
                N = t.return
            }
    return w = $s, $s = !1, w
}

function Mn(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
        var l = r = r.next;
        do {
            if ((l.tag & e) === e) {
                var o = l.destroy;
                l.destroy = void 0, o !== void 0 && Ao(t, n, o)
            }
            l = l.next
        } while (l !== r)
    }
}

function gl(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}

function Fo(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}

function Xu(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Xu(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ae], delete t[Qn], delete t[Co], delete t[af], delete t[uf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function Zu(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function Bs(e) {
    e: for (;;) {
        for (; e.sibling === null;) {
            if (e.return === null || Zu(e.return)) return null;
            e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child
        }
        if (!(e.flags & 2)) return e.stateNode
    }
}

function Uo(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Hr));
    else if (r !== 4 && (e = e.child, e !== null))
        for (Uo(e, t, n), e = e.sibling; e !== null;) Uo(e, t, n), e = e.sibling
}

function $o(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
        for ($o(e, t, n), e = e.sibling; e !== null;) $o(e, t, n), e = e.sibling
}
var q = null,
    Te = !1;

function Ze(e, t, n) {
    for (n = n.child; n !== null;) Ju(e, t, n), n = n.sibling
}

function Ju(e, t, n) {
    if (Fe && typeof Fe.onCommitFiberUnmount == "function") try {
        Fe.onCommitFiberUnmount(al, n)
    } catch {}
    switch (n.tag) {
        case 5:
            le || Wt(n, t);
        case 6:
            var r = q,
                l = Te;
            q = null, Ze(e, t, n), q = r, Te = l, q !== null && (Te ? (e = q, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : q.removeChild(n.stateNode));
            break;
        case 18:
            q !== null && (Te ? (e = q, n = n.stateNode, e.nodeType === 8 ? Hl(e.parentNode, n) : e.nodeType === 1 && Hl(e, n), $n(e)) : Hl(q, n.stateNode));
            break;
        case 4:
            r = q, l = Te, q = n.stateNode.containerInfo, Te = !0, Ze(e, t, n), q = r, Te = l;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!le && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                l = r = r.next;
                do {
                    var o = l,
                        i = o.destroy;
                    o = o.tag, i !== void 0 && (o & 2 || o & 4) && Ao(n, t, i), l = l.next
                } while (l !== r)
            }
            Ze(e, t, n);
            break;
        case 1:
            if (!le && (Wt(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
            } catch (a) {
                H(n, t, a)
            }
            Ze(e, t, n);
            break;
        case 21:
            Ze(e, t, n);
            break;
        case 22:
            n.mode & 1 ? (le = (r = le) || n.memoizedState !== null, Ze(e, t, n), le = r) : Ze(e, t, n);
            break;
        default:
            Ze(e, t, n)
    }
}

function Hs(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new Cf), t.forEach(function(r) {
            var l = Rf.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(l, l))
        })
    }
}

function ze(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var l = n[r];
            try {
                var o = e,
                    i = t,
                    a = i;
                e: for (; a !== null;) {
                    switch (a.tag) {
                        case 5:
                            q = a.stateNode, Te = !1;
                            break e;
                        case 3:
                            q = a.stateNode.containerInfo, Te = !0;
                            break e;
                        case 4:
                            q = a.stateNode.containerInfo, Te = !0;
                            break e
                    }
                    a = a.return
                }
                if (q === null) throw Error(x(160));
                Ju(o, i, l), q = null, Te = !1;
                var u = l.alternate;
                u !== null && (u.return = null), l.return = null
            } catch (d) {
                H(l, t, d)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null;) qu(t, e), t = t.sibling
}

function qu(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (ze(t, e), De(e), r & 4) {
                try {
                    Mn(3, e, e.return), gl(3, e)
                } catch (k) {
                    H(e, e.return, k)
                }
                try {
                    Mn(5, e, e.return)
                } catch (k) {
                    H(e, e.return, k)
                }
            }
            break;
        case 1:
            ze(t, e), De(e), r & 512 && n !== null && Wt(n, n.return);
            break;
        case 5:
            if (ze(t, e), De(e), r & 512 && n !== null && Wt(n, n.return), e.flags & 32) {
                var l = e.stateNode;
                try {
                    On(l, "")
                } catch (k) {
                    H(e, e.return, k)
                }
            }
            if (r & 4 && (l = e.stateNode, l != null)) {
                var o = e.memoizedProps,
                    i = n !== null ? n.memoizedProps : o,
                    a = e.type,
                    u = e.updateQueue;
                if (e.updateQueue = null, u !== null) try {
                    a === "input" && o.type === "radio" && o.name != null && ka(l, o), co(a, i);
                    var d = co(a, o);
                    for (i = 0; i < u.length; i += 2) {
                        var g = u[i],
                            h = u[i + 1];
                        g === "style" ? Ea(l, h) : g === "dangerouslySetInnerHTML" ? ja(l, h) : g === "children" ? On(l, h) : ei(l, g, h, d)
                    }
                    switch (a) {
                        case "input":
                            oo(l, o);
                            break;
                        case "textarea":
                            Na(l, o);
                            break;
                        case "select":
                            var m = l._wrapperState.wasMultiple;
                            l._wrapperState.wasMultiple = !!o.multiple;
                            var y = o.value;
                            y != null ? Kt(l, !!o.multiple, y, !1) : m !== !!o.multiple && (o.defaultValue != null ? Kt(l, !!o.multiple, o.defaultValue, !0) : Kt(l, !!o.multiple, o.multiple ? [] : "", !1))
                    }
                    l[Qn] = o
                } catch (k) {
                    H(e, e.return, k)
                }
            }
            break;
        case 6:
            if (ze(t, e), De(e), r & 4) {
                if (e.stateNode === null) throw Error(x(162));
                l = e.stateNode, o = e.memoizedProps;
                try {
                    l.nodeValue = o
                } catch (k) {
                    H(e, e.return, k)
                }
            }
            break;
        case 3:
            if (ze(t, e), De(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                $n(t.containerInfo)
            } catch (k) {
                H(e, e.return, k)
            }
            break;
        case 4:
            ze(t, e), De(e);
            break;
        case 13:
            ze(t, e), De(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (bi = Q())), r & 4 && Hs(e);
            break;
        case 22:
            if (g = n !== null && n.memoizedState !== null, e.mode & 1 ? (le = (d = le) || g, ze(t, e), le = d) : ze(t, e), De(e), r & 8192) {
                if (d = e.memoizedState !== null, (e.stateNode.isHidden = d) && !g && e.mode & 1)
                    for (N = e, g = e.child; g !== null;) {
                        for (h = N = g; N !== null;) {
                            switch (m = N, y = m.child, m.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Mn(4, m, m.return);
                                    break;
                                case 1:
                                    Wt(m, m.return);
                                    var w = m.stateNode;
                                    if (typeof w.componentWillUnmount == "function") {
                                        r = m, n = m.return;
                                        try {
                                            t = r, w.props = t.memoizedProps, w.state = t.memoizedState, w.componentWillUnmount()
                                        } catch (k) {
                                            H(r, n, k)
                                        }
                                    }
                                    break;
                                case 5:
                                    Wt(m, m.return);
                                    break;
                                case 22:
                                    if (m.memoizedState !== null) {
                                        Ws(h);
                                        continue
                                    }
                            }
                            y !== null ? (y.return = m, N = y) : Ws(h)
                        }
                        g = g.sibling
                    }
                e: for (g = null, h = e;;) {
                    if (h.tag === 5) {
                        if (g === null) {
                            g = h;
                            try {
                                l = h.stateNode, d ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (a = h.stateNode, u = h.memoizedProps.style, i = u != null && u.hasOwnProperty("display") ? u.display : null, a.style.display = Ca("display", i))
                            } catch (k) {
                                H(e, e.return, k)
                            }
                        }
                    } else if (h.tag === 6) {
                        if (g === null) try {
                            h.stateNode.nodeValue = d ? "" : h.memoizedProps
                        } catch (k) {
                            H(e, e.return, k)
                        }
                    } else if ((h.tag !== 22 && h.tag !== 23 || h.memoizedState === null || h === e) && h.child !== null) {
                        h.child.return = h, h = h.child;
                        continue
                    }
                    if (h === e) break e;
                    for (; h.sibling === null;) {
                        if (h.return === null || h.return === e) break e;
                        g === h && (g = null), h = h.return
                    }
                    g === h && (g = null), h.sibling.return = h.return, h = h.sibling
                }
            }
            break;
        case 19:
            ze(t, e), De(e), r & 4 && Hs(e);
            break;
        case 21:
            break;
        default:
            ze(t, e), De(e)
    }
}

function De(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null;) {
                    if (Zu(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(x(160))
            }
            switch (r.tag) {
                case 5:
                    var l = r.stateNode;
                    r.flags & 32 && (On(l, ""), r.flags &= -33);
                    var o = Bs(e);
                    $o(e, o, l);
                    break;
                case 3:
                case 4:
                    var i = r.stateNode.containerInfo,
                        a = Bs(e);
                    Uo(e, a, i);
                    break;
                default:
                    throw Error(x(161))
            }
        }
        catch (u) {
            H(e, e.return, u)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}

function _f(e, t, n) {
    N = e, ec(e)
}

function ec(e, t, n) {
    for (var r = (e.mode & 1) !== 0; N !== null;) {
        var l = N,
            o = l.child;
        if (l.tag === 22 && r) {
            var i = l.memoizedState !== null || wr;
            if (!i) {
                var a = l.alternate,
                    u = a !== null && a.memoizedState !== null || le;
                a = wr;
                var d = le;
                if (wr = i, (le = u) && !d)
                    for (N = l; N !== null;) i = N, u = i.child, i.tag === 22 && i.memoizedState !== null ? Qs(l) : u !== null ? (u.return = i, N = u) : Qs(l);
                for (; o !== null;) N = o, ec(o), o = o.sibling;
                N = l, wr = a, le = d
            }
            Vs(e)
        } else l.subtreeFlags & 8772 && o !== null ? (o.return = l, N = o) : Vs(e)
    }
}

function Vs(e) {
    for (; N !== null;) {
        var t = N;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        le || gl(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !le)
                            if (n === null) r.componentDidMount();
                            else {
                                var l = t.elementType === t.type ? n.memoizedProps : Le(t.type, n.memoizedProps);
                                r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            } var o = t.updateQueue;
                        o !== null && Ps(t, o, r);
                        break;
                    case 3:
                        var i = t.updateQueue;
                        if (i !== null) {
                            if (n = null, t.child !== null) switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                            }
                            Ps(t, i, n)
                        }
                        break;
                    case 5:
                        var a = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = a;
                            var u = t.memoizedProps;
                            switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    u.autoFocus && n.focus();
                                    break;
                                case "img":
                                    u.src && (n.src = u.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var d = t.alternate;
                            if (d !== null) {
                                var g = d.memoizedState;
                                if (g !== null) {
                                    var h = g.dehydrated;
                                    h !== null && $n(h)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(x(163))
                }
                le || t.flags & 512 && Fo(t)
            } catch (m) {
                H(t, t.return, m)
            }
        }
        if (t === e) {
            N = null;
            break
        }
        if (n = t.sibling, n !== null) {
            n.return = t.return, N = n;
            break
        }
        N = t.return
    }
}

function Ws(e) {
    for (; N !== null;) {
        var t = N;
        if (t === e) {
            N = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return, N = n;
            break
        }
        N = t.return
    }
}

function Qs(e) {
    for (; N !== null;) {
        var t = N;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        gl(4, t)
                    } catch (u) {
                        H(t, n, u)
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var l = t.return;
                        try {
                            r.componentDidMount()
                        } catch (u) {
                            H(t, l, u)
                        }
                    }
                    var o = t.return;
                    try {
                        Fo(t)
                    } catch (u) {
                        H(t, o, u)
                    }
                    break;
                case 5:
                    var i = t.return;
                    try {
                        Fo(t)
                    } catch (u) {
                        H(t, i, u)
                    }
            }
        } catch (u) {
            H(t, t.return, u)
        }
        if (t === e) {
            N = null;
            break
        }
        var a = t.sibling;
        if (a !== null) {
            a.return = t.return, N = a;
            break
        }
        N = t.return
    }
}
var Pf = Math.ceil,
    el = Xe.ReactCurrentDispatcher,
    Ti = Xe.ReactCurrentOwner,
    Ce = Xe.ReactCurrentBatchConfig,
    M = 0,
    J = null,
    K = null,
    ee = 0,
    he = 0,
    Qt = ht(0),
    G = 0,
    Jn = null,
    Lt = 0,
    vl = 0,
    Mi = 0,
    bn = null,
    ce = null,
    bi = 0,
    sn = 1 / 0,
    $e = null,
    tl = !1,
    Bo = null,
    ut = null,
    kr = !1,
    rt = null,
    nl = 0,
    In = 0,
    Ho = null,
    Mr = -1,
    br = 0;

function se() {
    return M & 6 ? Q() : Mr !== -1 ? Mr : Mr = Q()
}

function ct(e) {
    return e.mode & 1 ? M & 2 && ee !== 0 ? ee & -ee : df.transition !== null ? (br === 0 && (br = Aa()), br) : (e = b, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Wa(e.type)), e) : 1
}

function Ie(e, t, n, r) {
    if (50 < In) throw In = 0, Ho = null, Error(x(185));
    er(e, n, r), (!(M & 2) || e !== J) && (e === J && (!(M & 2) && (vl |= n), G === 4 && tt(e, ee)), me(e, r), n === 1 && M === 0 && !(t.mode & 1) && (sn = Q() + 500, pl && gt()))
}

function me(e, t) {
    var n = e.callbackNode;
    cd(e, t);
    var r = Fr(e, e === J ? ee : 0);
    if (r === 0) n !== null && ts(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
        if (n != null && ts(n), t === 1) e.tag === 0 ? cf(Ks.bind(null, e)) : cu(Ks.bind(null, e)), of(function() {
            !(M & 6) && gt()
        }), n = null;
        else {
            switch (Fa(r)) {
                case 1:
                    n = oi;
                    break;
                case 4:
                    n = Da;
                    break;
                case 16:
                    n = Ar;
                    break;
                case 536870912:
                    n = Oa;
                    break;
                default:
                    n = Ar
            }
            n = ac(n, tc.bind(null, e))
        }
        e.callbackPriority = t, e.callbackNode = n
    }
}

function tc(e, t) {
    if (Mr = -1, br = 0, M & 6) throw Error(x(327));
    var n = e.callbackNode;
    if (Jt() && e.callbackNode !== n) return null;
    var r = Fr(e, e === J ? ee : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = rl(e, r);
    else {
        t = r;
        var l = M;
        M |= 2;
        var o = rc();
        (J !== e || ee !== t) && ($e = null, sn = Q() + 500, Ct(e, t));
        do try {
            Tf();
            break
        } catch (a) {
            nc(e, a)
        }
        while (!0);
        xi(), el.current = o, M = l, K !== null ? t = 0 : (J = null, ee = 0, t = G)
    }
    if (t !== 0) {
        if (t === 2 && (l = go(e), l !== 0 && (r = l, t = Vo(e, l))), t === 1) throw n = Jn, Ct(e, 0), tt(e, r), me(e, Q()), n;
        if (t === 6) tt(e, r);
        else {
            if (l = e.current.alternate, !(r & 30) && !zf(l) && (t = rl(e, r), t === 2 && (o = go(e), o !== 0 && (r = o, t = Vo(e, o))), t === 1)) throw n = Jn, Ct(e, 0), tt(e, r), me(e, Q()), n;
            switch (e.finishedWork = l, e.finishedLanes = r, t) {
                case 0:
                case 1:
                    throw Error(x(345));
                case 2:
                    wt(e, ce, $e);
                    break;
                case 3:
                    if (tt(e, r), (r & 130023424) === r && (t = bi + 500 - Q(), 10 < t)) {
                        if (Fr(e, 0) !== 0) break;
                        if (l = e.suspendedLanes, (l & r) !== r) {
                            se(), e.pingedLanes |= e.suspendedLanes & l;
                            break
                        }
                        e.timeoutHandle = jo(wt.bind(null, e, ce, $e), t);
                        break
                    }
                    wt(e, ce, $e);
                    break;
                case 4:
                    if (tt(e, r), (r & 4194240) === r) break;
                    for (t = e.eventTimes, l = -1; 0 < r;) {
                        var i = 31 - be(r);
                        o = 1 << i, i = t[i], i > l && (l = i), r &= ~o
                    }
                    if (r = l, r = Q() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Pf(r / 1960)) - r, 10 < r) {
                        e.timeoutHandle = jo(wt.bind(null, e, ce, $e), r);
                        break
                    }
                    wt(e, ce, $e);
                    break;
                case 5:
                    wt(e, ce, $e);
                    break;
                default:
                    throw Error(x(329))
            }
        }
    }
    return me(e, Q()), e.callbackNode === n ? tc.bind(null, e) : null
}

function Vo(e, t) {
    var n = bn;
    return e.current.memoizedState.isDehydrated && (Ct(e, t).flags |= 256), e = rl(e, t), e !== 2 && (t = ce, ce = n, t !== null && Wo(t)), e
}

function Wo(e) {
    ce === null ? ce = e : ce.push.apply(ce, e)
}

function zf(e) {
    for (var t = e;;) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores, n !== null))
                for (var r = 0; r < n.length; r++) {
                    var l = n[r],
                        o = l.getSnapshot;
                    l = l.value;
                    try {
                        if (!Re(o(), l)) return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
        else {
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return !0;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
    }
    return !0
}

function tt(e, t) {
    for (t &= ~Mi, t &= ~vl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var n = 31 - be(t),
            r = 1 << n;
        e[n] = -1, t &= ~r
    }
}

function Ks(e) {
    if (M & 6) throw Error(x(327));
    Jt();
    var t = Fr(e, 0);
    if (!(t & 1)) return me(e, Q()), null;
    var n = rl(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = go(e);
        r !== 0 && (t = r, n = Vo(e, r))
    }
    if (n === 1) throw n = Jn, Ct(e, 0), tt(e, t), me(e, Q()), n;
    if (n === 6) throw Error(x(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, wt(e, ce, $e), me(e, Q()), null
}

function Ii(e, t) {
    var n = M;
    M |= 1;
    try {
        return e(t)
    } finally {
        M = n, M === 0 && (sn = Q() + 500, pl && gt())
    }
}

function Tt(e) {
    rt !== null && rt.tag === 0 && !(M & 6) && Jt();
    var t = M;
    M |= 1;
    var n = Ce.transition,
        r = b;
    try {
        if (Ce.transition = null, b = 1, e) return e()
    } finally {
        b = r, Ce.transition = n, M = t, !(M & 6) && gt()
    }
}

function Ri() {
    he = Qt.current, O(Qt)
}

function Ct(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, lf(n)), K !== null)
        for (n = K.return; n !== null;) {
            var r = n;
            switch (hi(r), r.tag) {
                case 1:
                    r = r.type.childContextTypes, r != null && Vr();
                    break;
                case 3:
                    ln(), O(fe), O(oe), ji();
                    break;
                case 5:
                    Si(r);
                    break;
                case 4:
                    ln();
                    break;
                case 13:
                    O(U);
                    break;
                case 19:
                    O(U);
                    break;
                case 10:
                    yi(r.type._context);
                    break;
                case 22:
                case 23:
                    Ri()
            }
            n = n.return
        }
    if (J = e, K = e = dt(e.current, null), ee = he = t, G = 0, Jn = null, Mi = vl = Lt = 0, ce = bn = null, Nt !== null) {
        for (t = 0; t < Nt.length; t++)
            if (n = Nt[t], r = n.interleaved, r !== null) {
                n.interleaved = null;
                var l = r.next,
                    o = n.pending;
                if (o !== null) {
                    var i = o.next;
                    o.next = l, r.next = i
                }
                n.pending = r
            } Nt = null
    }
    return e
}

function nc(e, t) {
    do {
        var n = K;
        try {
            if (xi(), zr.current = qr, Jr) {
                for (var r = $.memoizedState; r !== null;) {
                    var l = r.queue;
                    l !== null && (l.pending = null), r = r.next
                }
                Jr = !1
            }
            if (zt = 0, Z = Y = $ = null, Tn = !1, Gn = 0, Ti.current = null, n === null || n.return === null) {
                G = 1, Jn = t, K = null;
                break
            }
            e: {
                var o = e,
                    i = n.return,
                    a = n,
                    u = t;
                if (t = ee, a.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
                    var d = u,
                        g = a,
                        h = g.tag;
                    if (!(g.mode & 1) && (h === 0 || h === 11 || h === 15)) {
                        var m = g.alternate;
                        m ? (g.updateQueue = m.updateQueue, g.memoizedState = m.memoizedState, g.lanes = m.lanes) : (g.updateQueue = null, g.memoizedState = null)
                    }
                    var y = Is(i);
                    if (y !== null) {
                        y.flags &= -257, Rs(y, i, a, o, t), y.mode & 1 && bs(o, d, t), t = y, u = d;
                        var w = t.updateQueue;
                        if (w === null) {
                            var k = new Set;
                            k.add(u), t.updateQueue = k
                        } else w.add(u);
                        break e
                    } else {
                        if (!(t & 1)) {
                            bs(o, d, t), Di();
                            break e
                        }
                        u = Error(x(426))
                    }
                } else if (F && a.mode & 1) {
                    var A = Is(i);
                    if (A !== null) {
                        !(A.flags & 65536) && (A.flags |= 256), Rs(A, i, a, o, t), gi(on(u, a));
                        break e
                    }
                }
                o = u = on(u, a),
                G !== 4 && (G = 2),
                bn === null ? bn = [o] : bn.push(o),
                o = i;do {
                    switch (o.tag) {
                        case 3:
                            o.flags |= 65536, t &= -t, o.lanes |= t;
                            var f = Fu(o, u, t);
                            _s(o, f);
                            break e;
                        case 1:
                            a = u;
                            var c = o.type,
                                p = o.stateNode;
                            if (!(o.flags & 128) && (typeof c.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (ut === null || !ut.has(p)))) {
                                o.flags |= 65536, t &= -t, o.lanes |= t;
                                var v = Uu(o, a, t);
                                _s(o, v);
                                break e
                            }
                    }
                    o = o.return
                } while (o !== null)
            }
            oc(n)
        } catch (S) {
            t = S, K === n && n !== null && (K = n = n.return);
            continue
        }
        break
    } while (!0)
}

function rc() {
    var e = el.current;
    return el.current = qr, e === null ? qr : e
}

function Di() {
    (G === 0 || G === 3 || G === 2) && (G = 4), J === null || !(Lt & 268435455) && !(vl & 268435455) || tt(J, ee)
}

function rl(e, t) {
    var n = M;
    M |= 2;
    var r = rc();
    (J !== e || ee !== t) && ($e = null, Ct(e, t));
    do try {
        Lf();
        break
    } catch (l) {
        nc(e, l)
    }
    while (!0);
    if (xi(), M = n, el.current = r, K !== null) throw Error(x(261));
    return J = null, ee = 0, G
}

function Lf() {
    for (; K !== null;) lc(K)
}

function Tf() {
    for (; K !== null && !td();) lc(K)
}

function lc(e) {
    var t = sc(e.alternate, e, he);
    e.memoizedProps = e.pendingProps, t === null ? oc(e) : K = t, Ti.current = null
}

function oc(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return, t.flags & 32768) {
            if (n = jf(n, t), n !== null) {
                n.flags &= 32767, K = n;
                return
            }
            if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
            else {
                G = 6, K = null;
                return
            }
        } else if (n = Sf(n, t, he), n !== null) {
            K = n;
            return
        }
        if (t = t.sibling, t !== null) {
            K = t;
            return
        }
        K = t = e
    } while (t !== null);
    G === 0 && (G = 5)
}

function wt(e, t, n) {
    var r = b,
        l = Ce.transition;
    try {
        Ce.transition = null, b = 1, Mf(e, t, n, r)
    } finally {
        Ce.transition = l, b = r
    }
    return null
}

function Mf(e, t, n, r) {
    do Jt(); while (rt !== null);
    if (M & 6) throw Error(x(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(x(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (dd(e, o), e === J && (K = J = null, ee = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || kr || (kr = !0, ac(Ar, function() {
            return Jt(), null
        })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
        o = Ce.transition, Ce.transition = null;
        var i = b;
        b = 1;
        var a = M;
        M |= 4, Ti.current = null, Ef(e, n), qu(n, e), Zd(No), Ur = !!ko, No = ko = null, e.current = n, _f(n), nd(), M = a, b = i, Ce.transition = o
    } else e.current = n;
    if (kr && (kr = !1, rt = e, nl = l), o = e.pendingLanes, o === 0 && (ut = null), od(n.stateNode), me(e, Q()), t !== null)
        for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, {
            componentStack: l.stack,
            digest: l.digest
        });
    if (tl) throw tl = !1, e = Bo, Bo = null, e;
    return nl & 1 && e.tag !== 0 && Jt(), o = e.pendingLanes, o & 1 ? e === Ho ? In++ : (In = 0, Ho = e) : In = 0, gt(), null
}

function Jt() {
    if (rt !== null) {
        var e = Fa(nl),
            t = Ce.transition,
            n = b;
        try {
            if (Ce.transition = null, b = 16 > e ? 16 : e, rt === null) var r = !1;
            else {
                if (e = rt, rt = null, nl = 0, M & 6) throw Error(x(331));
                var l = M;
                for (M |= 4, N = e.current; N !== null;) {
                    var o = N,
                        i = o.child;
                    if (N.flags & 16) {
                        var a = o.deletions;
                        if (a !== null) {
                            for (var u = 0; u < a.length; u++) {
                                var d = a[u];
                                for (N = d; N !== null;) {
                                    var g = N;
                                    switch (g.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Mn(8, g, o)
                                    }
                                    var h = g.child;
                                    if (h !== null) h.return = g, N = h;
                                    else
                                        for (; N !== null;) {
                                            g = N;
                                            var m = g.sibling,
                                                y = g.return;
                                            if (Xu(g), g === d) {
                                                N = null;
                                                break
                                            }
                                            if (m !== null) {
                                                m.return = y, N = m;
                                                break
                                            }
                                            N = y
                                        }
                                }
                            }
                            var w = o.alternate;
                            if (w !== null) {
                                var k = w.child;
                                if (k !== null) {
                                    w.child = null;
                                    do {
                                        var A = k.sibling;
                                        k.sibling = null, k = A
                                    } while (k !== null)
                                }
                            }
                            N = o
                        }
                    }
                    if (o.subtreeFlags & 2064 && i !== null) i.return = o, N = i;
                    else e: for (; N !== null;) {
                        if (o = N, o.flags & 2048) switch (o.tag) {
                            case 0:
                            case 11:
                            case 15:
                                Mn(9, o, o.return)
                        }
                        var f = o.sibling;
                        if (f !== null) {
                            f.return = o.return, N = f;
                            break e
                        }
                        N = o.return
                    }
                }
                var c = e.current;
                for (N = c; N !== null;) {
                    i = N;
                    var p = i.child;
                    if (i.subtreeFlags & 2064 && p !== null) p.return = i, N = p;
                    else e: for (i = c; N !== null;) {
                        if (a = N, a.flags & 2048) try {
                            switch (a.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    gl(9, a)
                            }
                        } catch (S) {
                            H(a, a.return, S)
                        }
                        if (a === i) {
                            N = null;
                            break e
                        }
                        var v = a.sibling;
                        if (v !== null) {
                            v.return = a.return, N = v;
                            break e
                        }
                        N = a.return
                    }
                }
                if (M = l, gt(), Fe && typeof Fe.onPostCommitFiberRoot == "function") try {
                    Fe.onPostCommitFiberRoot(al, e)
                } catch {}
                r = !0
            }
            return r
        } finally {
            b = n, Ce.transition = t
        }
    }
    return !1
}

function Ys(e, t, n) {
    t = on(n, t), t = Fu(e, t, 1), e = at(e, t, 1), t = se(), e !== null && (er(e, 1, t), me(e, t))
}

function H(e, t, n) {
    if (e.tag === 3) Ys(e, e, n);
    else
        for (; t !== null;) {
            if (t.tag === 3) {
                Ys(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (ut === null || !ut.has(r))) {
                    e = on(n, e), e = Uu(t, e, 1), t = at(t, e, 1), e = se(), t !== null && (er(t, 1, e), me(t, e));
                    break
                }
            }
            t = t.return
        }
}

function bf(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = se(), e.pingedLanes |= e.suspendedLanes & n, J === e && (ee & n) === n && (G === 4 || G === 3 && (ee & 130023424) === ee && 500 > Q() - bi ? Ct(e, 0) : Mi |= n), me(e, t)
}

function ic(e, t) {
    t === 0 && (e.mode & 1 ? (t = dr, dr <<= 1, !(dr & 130023424) && (dr = 4194304)) : t = 1);
    var n = se();
    e = Ye(e, t), e !== null && (er(e, t, n), me(e, n))
}

function If(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), ic(e, n)
}

function Rf(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                l = e.memoizedState;
            l !== null && (n = l.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(x(314))
    }
    r !== null && r.delete(t), ic(e, n)
}
var sc;
sc = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || fe.current) de = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return de = !1, Nf(e, t, n);
            de = !!(e.flags & 131072)
        }
    else de = !1, F && t.flags & 1048576 && du(t, Kr, t.index);
    switch (t.lanes = 0, t.tag) {
        case 2:
            var r = t.type;
            Tr(e, t), e = t.pendingProps;
            var l = tn(t, oe.current);
            Zt(t, n), l = Ei(null, t, r, e, l, n);
            var o = _i();
            return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, pe(r) ? (o = !0, Wr(t)) : o = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, ki(t), l.updater = hl, t.stateNode = l, l._reactInternals = t, To(t, r, e, n), t = Io(null, t, r, !0, o, n)) : (t.tag = 0, F && o && mi(t), ie(null, t, l, n), t = t.child), t;
        case 16:
            r = t.elementType;
            e: {
                switch (Tr(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Of(r), e = Le(r, e), l) {
                    case 0:
                        t = bo(null, t, r, e, n);
                        break e;
                    case 1:
                        t = As(null, t, r, e, n);
                        break e;
                    case 11:
                        t = Ds(null, t, r, e, n);
                        break e;
                    case 14:
                        t = Os(null, t, r, Le(r.type, e), n);
                        break e
                }
                throw Error(x(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Le(r, l), bo(e, t, r, l, n);
        case 1:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Le(r, l), As(e, t, r, l, n);
        case 3:
            e: {
                if (Vu(t), e === null) throw Error(x(387));r = t.pendingProps,
                o = t.memoizedState,
                l = o.element,
                vu(e, t),
                Xr(t, r, null, n);
                var i = t.memoizedState;
                if (r = i.element, o.isDehydrated)
                    if (o = {
                            element: r,
                            isDehydrated: !1,
                            cache: i.cache,
                            pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                            transitions: i.transitions
                        }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
                        l = on(Error(x(423)), t), t = Fs(e, t, r, n, l);
                        break e
                    } else if (r !== l) {
                    l = on(Error(x(424)), t), t = Fs(e, t, r, n, l);
                    break e
                } else
                    for (ge = st(t.stateNode.containerInfo.firstChild), xe = t, F = !0, Me = null, n = hu(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
                else {
                    if (nn(), r === l) {
                        t = Ge(e, t, n);
                        break e
                    }
                    ie(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return xu(t), e === null && Po(t), r = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, So(r, l) ? i = null : o !== null && So(r, o) && (t.flags |= 32), Hu(e, t), ie(e, t, i, n), t.child;
        case 6:
            return e === null && Po(t), null;
        case 13:
            return Wu(e, t, n);
        case 4:
            return Ni(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = rn(t, null, r, n) : ie(e, t, r, n), t.child;
        case 11:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Le(r, l), Ds(e, t, r, l, n);
        case 7:
            return ie(e, t, t.pendingProps, n), t.child;
        case 8:
            return ie(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return ie(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (r = t.type._context, l = t.pendingProps, o = t.memoizedProps, i = l.value, R(Yr, r._currentValue), r._currentValue = i, o !== null)
                    if (Re(o.value, i)) {
                        if (o.children === l.children && !fe.current) {
                            t = Ge(e, t, n);
                            break e
                        }
                    } else
                        for (o = t.child, o !== null && (o.return = t); o !== null;) {
                            var a = o.dependencies;
                            if (a !== null) {
                                i = o.child;
                                for (var u = a.firstContext; u !== null;) {
                                    if (u.context === r) {
                                        if (o.tag === 1) {
                                            u = We(-1, n & -n), u.tag = 2;
                                            var d = o.updateQueue;
                                            if (d !== null) {
                                                d = d.shared;
                                                var g = d.pending;
                                                g === null ? u.next = u : (u.next = g.next, g.next = u), d.pending = u
                                            }
                                        }
                                        o.lanes |= n, u = o.alternate, u !== null && (u.lanes |= n), zo(o.return, n, t), a.lanes |= n;
                                        break
                                    }
                                    u = u.next
                                }
                            } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
                            else if (o.tag === 18) {
                                if (i = o.return, i === null) throw Error(x(341));
                                i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), zo(i, n, t), i = o.sibling
                            } else i = o.child;
                            if (i !== null) i.return = o;
                            else
                                for (i = o; i !== null;) {
                                    if (i === t) {
                                        i = null;
                                        break
                                    }
                                    if (o = i.sibling, o !== null) {
                                        o.return = i.return, i = o;
                                        break
                                    }
                                    i = i.return
                                }
                            o = i
                        }
                ie(e, t, l.children, n),
                t = t.child
            }
            return t;
        case 9:
            return l = t.type, r = t.pendingProps.children, Zt(t, n), l = Ee(l), r = r(l), t.flags |= 1, ie(e, t, r, n), t.child;
        case 14:
            return r = t.type, l = Le(r, t.pendingProps), l = Le(r.type, l), Os(e, t, r, l, n);
        case 15:
            return $u(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Le(r, l), Tr(e, t), t.tag = 1, pe(r) ? (e = !0, Wr(t)) : e = !1, Zt(t, n), Au(t, r, l), To(t, r, l, n), Io(null, t, r, !0, e, n);
        case 19:
            return Qu(e, t, n);
        case 22:
            return Bu(e, t, n)
    }
    throw Error(x(156, t.tag))
};

function ac(e, t) {
    return Ra(e, t)
}

function Df(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function je(e, t, n, r) {
    return new Df(e, t, n, r)
}

function Oi(e) {
    return e = e.prototype, !(!e || !e.isReactComponent)
}

function Of(e) {
    if (typeof e == "function") return Oi(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof, e === ni) return 11;
        if (e === ri) return 14
    }
    return 2
}

function dt(e, t) {
    var n = e.alternate;
    return n === null ? (n = je(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function Ir(e, t, n, r, l, o) {
    var i = 2;
    if (r = e, typeof e == "function") Oi(e) && (i = 1);
    else if (typeof e == "string") i = 5;
    else e: switch (e) {
        case Dt:
            return Et(n.children, l, o, t);
        case ti:
            i = 8, l |= 8;
            break;
        case eo:
            return e = je(12, n, t, l | 2), e.elementType = eo, e.lanes = o, e;
        case to:
            return e = je(13, n, t, l), e.elementType = to, e.lanes = o, e;
        case no:
            return e = je(19, n, t, l), e.elementType = no, e.lanes = o, e;
        case xa:
            return xl(n, l, o, t);
        default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                case ga:
                    i = 10;
                    break e;
                case va:
                    i = 9;
                    break e;
                case ni:
                    i = 11;
                    break e;
                case ri:
                    i = 14;
                    break e;
                case Je:
                    i = 16, r = null;
                    break e
            }
            throw Error(x(130, e == null ? e : typeof e, ""))
    }
    return t = je(i, n, t, l), t.elementType = e, t.type = r, t.lanes = o, t
}

function Et(e, t, n, r) {
    return e = je(7, e, r, t), e.lanes = n, e
}

function xl(e, t, n, r) {
    return e = je(22, e, r, t), e.elementType = xa, e.lanes = n, e.stateNode = {
        isHidden: !1
    }, e
}

function Zl(e, t, n) {
    return e = je(6, e, null, t), e.lanes = n, e
}

function Jl(e, t, n) {
    return t = je(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    }, t
}

function Af(e, t, n, r, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ml(0), this.expirationTimes = Ml(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ml(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null
}

function Ai(e, t, n, r, l, o, i, a, u) {
    return e = new Af(e, t, n, a, u), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = je(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, ki(o), e
}

function Ff(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Rt,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}

function uc(e) {
    if (!e) return pt;
    e = e._reactInternals;
    e: {
        if (bt(e) !== e || e.tag !== 1) throw Error(x(170));
        var t = e;do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (pe(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            t = t.return
        } while (t !== null);
        throw Error(x(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (pe(n)) return uu(e, n, t)
    }
    return t
}

function cc(e, t, n, r, l, o, i, a, u) {
    return e = Ai(n, r, !0, e, l, o, i, a, u), e.context = uc(null), n = e.current, r = se(), l = ct(n), o = We(r, l), o.callback = t ?? null, at(n, o, l), e.current.lanes = l, er(e, l, r), me(e, r), e
}

function yl(e, t, n, r) {
    var l = t.current,
        o = se(),
        i = ct(l);
    return n = uc(n), t.context === null ? t.context = n : t.pendingContext = n, t = We(o, i), t.payload = {
        element: e
    }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = at(l, t, i), e !== null && (Ie(e, l, i, o), Pr(e, l, i)), i
}

function ll(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}

function Gs(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}

function Fi(e, t) {
    Gs(e, t), (e = e.alternate) && Gs(e, t)
}

function Uf() {
    return null
}
var dc = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
};

function Ui(e) {
    this._internalRoot = e
}
wl.prototype.render = Ui.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(x(409));
    yl(e, t, null, null)
};
wl.prototype.unmount = Ui.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Tt(function() {
            yl(null, e, null, null)
        }), t[Ke] = null
    }
};

function wl(e) {
    this._internalRoot = e
}
wl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = Ba();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < et.length && t !== 0 && t < et[n].priority; n++);
        et.splice(n, 0, e), n === 0 && Va(e)
    }
};

function $i(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function kl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function Xs() {}

function $f(e, t, n, r, l) {
    if (l) {
        if (typeof r == "function") {
            var o = r;
            r = function() {
                var d = ll(i);
                o.call(d)
            }
        }
        var i = cc(t, r, e, 0, null, !1, !1, "", Xs);
        return e._reactRootContainer = i, e[Ke] = i.current, Vn(e.nodeType === 8 ? e.parentNode : e), Tt(), i
    }
    for (; l = e.lastChild;) e.removeChild(l);
    if (typeof r == "function") {
        var a = r;
        r = function() {
            var d = ll(u);
            a.call(d)
        }
    }
    var u = Ai(e, 0, !1, null, null, !1, !1, "", Xs);
    return e._reactRootContainer = u, e[Ke] = u.current, Vn(e.nodeType === 8 ? e.parentNode : e), Tt(function() {
        yl(t, u, n, r)
    }), u
}

function Nl(e, t, n, r, l) {
    var o = n._reactRootContainer;
    if (o) {
        var i = o;
        if (typeof l == "function") {
            var a = l;
            l = function() {
                var u = ll(i);
                a.call(u)
            }
        }
        yl(t, i, e, l)
    } else i = $f(n, t, e, l, r);
    return ll(i)
}
Ua = function(e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = jn(t.pendingLanes);
                n !== 0 && (ii(t, n | 1), me(t, Q()), !(M & 6) && (sn = Q() + 500, gt()))
            }
            break;
        case 13:
            Tt(function() {
                var r = Ye(e, 1);
                if (r !== null) {
                    var l = se();
                    Ie(r, e, 1, l)
                }
            }), Fi(e, 1)
    }
};
si = function(e) {
    if (e.tag === 13) {
        var t = Ye(e, 134217728);
        if (t !== null) {
            var n = se();
            Ie(t, e, 134217728, n)
        }
        Fi(e, 134217728)
    }
};
$a = function(e) {
    if (e.tag === 13) {
        var t = ct(e),
            n = Ye(e, t);
        if (n !== null) {
            var r = se();
            Ie(n, e, t, r)
        }
        Fi(e, t)
    }
};
Ba = function() {
    return b
};
Ha = function(e, t) {
    var n = b;
    try {
        return b = e, t()
    } finally {
        b = n
    }
};
po = function(e, t, n) {
    switch (t) {
        case "input":
            if (oo(e, n), t = n.name, n.type === "radio" && t != null) {
                for (n = e; n.parentNode;) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var l = fl(r);
                        if (!l) throw Error(x(90));
                        wa(r), oo(r, l)
                    }
                }
            }
            break;
        case "textarea":
            Na(e, n);
            break;
        case "select":
            t = n.value, t != null && Kt(e, !!n.multiple, t, !1)
    }
};
za = Ii;
La = Tt;
var Bf = {
        usingClientEntryPoint: !1,
        Events: [nr, Ut, fl, _a, Pa, Ii]
    },
    kn = {
        findFiberByHostInstance: kt,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    },
    Hf = {
        bundleType: kn.bundleType,
        version: kn.version,
        rendererPackageName: kn.rendererPackageName,
        rendererConfig: kn.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Xe.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = ba(e), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: kn.findFiberByHostInstance || Uf,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Nr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Nr.isDisabled && Nr.supportsFiber) try {
        al = Nr.inject(Hf), Fe = Nr
    } catch {}
}
we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Bf;
we.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!$i(t)) throw Error(x(200));
    return Ff(e, t, null, n)
};
we.createRoot = function(e, t) {
    if (!$i(e)) throw Error(x(299));
    var n = !1,
        r = "",
        l = dc;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Ai(e, 1, !1, null, null, n, !1, r, l), e[Ke] = t.current, Vn(e.nodeType === 8 ? e.parentNode : e), new Ui(t)
};
we.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(x(188)) : (e = Object.keys(e).join(","), Error(x(268, e)));
    return e = ba(t), e = e === null ? null : e.stateNode, e
};
we.flushSync = function(e) {
    return Tt(e)
};
we.hydrate = function(e, t, n) {
    if (!kl(t)) throw Error(x(200));
    return Nl(null, e, t, !0, n)
};
we.hydrateRoot = function(e, t, n) {
    if (!$i(e)) throw Error(x(405));
    var r = n != null && n.hydratedSources || null,
        l = !1,
        o = "",
        i = dc;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = cc(t, null, e, 1, n ?? null, l, !1, o, i), e[Ke] = t.current, Vn(e), r)
        for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(n, l);
    return new wl(t)
};
we.render = function(e, t, n) {
    if (!kl(t)) throw Error(x(200));
    return Nl(null, e, t, !1, n)
};
we.unmountComponentAtNode = function(e) {
    if (!kl(e)) throw Error(x(40));
    return e._reactRootContainer ? (Tt(function() {
        Nl(null, null, e, !1, function() {
            e._reactRootContainer = null, e[Ke] = null
        })
    }), !0) : !1
};
we.unstable_batchedUpdates = Ii;
we.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!kl(n)) throw Error(x(200));
    if (e == null || e._reactInternals === void 0) throw Error(x(38));
    return Nl(e, t, n, !1, r)
};
we.version = "18.3.1-next-f1338f8080-20240426";

function fc() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fc)
    } catch (e) {
        console.error(e)
    }
}
fc(), fa.exports = we;
var Vf = fa.exports,
    pc, Zs = Vf;
pc = Zs.createRoot, Zs.hydrateRoot;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Wf = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qf = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(),
    I = (e, t) => {
        const n = ve.forwardRef(({
            color: r = "currentColor",
            size: l = 24,
            strokeWidth: o = 2,
            absoluteStrokeWidth: i,
            className: a = "",
            children: u,
            ...d
        }, g) => ve.createElement("svg", {
            ref: g,
            ...Wf,
            width: l,
            height: l,
            stroke: r,
            strokeWidth: i ? Number(o) * 24 / Number(l) : o,
            className: ["lucide", `lucide-${Qf(e)}`, a].join(" "),
            ...d
        }, [...t.map(([h, m]) => ve.createElement(h, m)), ...Array.isArray(u) ? u : [u]]));
        return n.displayName = `${e}`, n
    };
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kf = I("ArrowDown", [
    ["path", {
        d: "M12 5v14",
        key: "s699le"
    }],
    ["path", {
        d: "m19 12-7 7-7-7",
        key: "1idqje"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qo = I("Bot", [
    ["path", {
        d: "M12 8V4H8",
        key: "hb8ula"
    }],
    ["rect", {
        width: "16",
        height: "12",
        x: "4",
        y: "8",
        rx: "2",
        key: "enze0r"
    }],
    ["path", {
        d: "M2 14h2",
        key: "vft8re"
    }],
    ["path", {
        d: "M20 14h2",
        key: "4cs60a"
    }],
    ["path", {
        d: "M15 13v2",
        key: "1xurst"
    }],
    ["path", {
        d: "M9 13v2",
        key: "rq6x2g"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yf = I("Brain", [
    ["path", {
        d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",
        key: "l5xja"
    }],
    ["path", {
        d: "M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",
        key: "ep3f8r"
    }],
    ["path", {
        d: "M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",
        key: "1p4c4q"
    }],
    ["path", {
        d: "M17.599 6.5a3 3 0 0 0 .399-1.375",
        key: "tmeiqw"
    }],
    ["path", {
        d: "M6.003 5.125A3 3 0 0 0 6.401 6.5",
        key: "105sqy"
    }],
    ["path", {
        d: "M3.477 10.896a4 4 0 0 1 .585-.396",
        key: "ql3yin"
    }],
    ["path", {
        d: "M19.938 10.5a4 4 0 0 1 .585.396",
        key: "1qfode"
    }],
    ["path", {
        d: "M6 18a4 4 0 0 1-1.967-.516",
        key: "2e4loj"
    }],
    ["path", {
        d: "M19.967 17.484A4 4 0 0 1 18 18",
        key: "159ez6"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gf = I("Camera", [
    ["path", {
        d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",
        key: "1tc9qg"
    }],
    ["circle", {
        cx: "12",
        cy: "13",
        r: "3",
        key: "1vg3eu"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ol = I("Code2", [
    ["path", {
        d: "m18 16 4-4-4-4",
        key: "1inbqp"
    }],
    ["path", {
        d: "m6 8-4 4 4 4",
        key: "15zrgr"
    }],
    ["path", {
        d: "m14.5 4-5 16",
        key: "e7oirm"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const an = I("Code", [
    ["polyline", {
        points: "16 18 22 12 16 6",
        key: "z7tu5w"
    }],
    ["polyline", {
        points: "8 6 2 12 8 18",
        key: "1eg1df"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Js = I("Cpu", [
    ["rect", {
        x: "4",
        y: "4",
        width: "16",
        height: "16",
        rx: "2",
        key: "1vbyd7"
    }],
    ["rect", {
        x: "9",
        y: "9",
        width: "6",
        height: "6",
        key: "o3kz5p"
    }],
    ["path", {
        d: "M15 2v2",
        key: "13l42r"
    }],
    ["path", {
        d: "M15 20v2",
        key: "15mkzm"
    }],
    ["path", {
        d: "M2 15h2",
        key: "1gxd5l"
    }],
    ["path", {
        d: "M2 9h2",
        key: "1bbxkp"
    }],
    ["path", {
        d: "M20 15h2",
        key: "19e6y8"
    }],
    ["path", {
        d: "M20 9h2",
        key: "19tzq7"
    }],
    ["path", {
        d: "M9 2v2",
        key: "165o2o"
    }],
    ["path", {
        d: "M9 20v2",
        key: "i2bqo8"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xf = I("Database", [
    ["ellipse", {
        cx: "12",
        cy: "5",
        rx: "9",
        ry: "3",
        key: "msslwz"
    }],
    ["path", {
        d: "M3 5V19A9 3 0 0 0 21 19V5",
        key: "1wlel7"
    }],
    ["path", {
        d: "M3 12A9 3 0 0 0 21 12",
        key: "mv7ke4"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rn = I("ExternalLink", [
    ["path", {
        d: "M15 3h6v6",
        key: "1q9fwt"
    }],
    ["path", {
        d: "M10 14 21 3",
        key: "gplh6r"
    }],
    ["path", {
        d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
        key: "a6xqqp"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zf = I("Eye", [
    ["path", {
        d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",
        key: "rwhkz3"
    }],
    ["circle", {
        cx: "12",
        cy: "12",
        r: "3",
        key: "1v7zrd"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jf = I("FileText", [
    ["path", {
        d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
        key: "1rqfz7"
    }],
    ["path", {
        d: "M14 2v4a2 2 0 0 0 2 2h4",
        key: "tnqrlb"
    }],
    ["path", {
        d: "M10 9H8",
        key: "b1mrlr"
    }],
    ["path", {
        d: "M16 13H8",
        key: "t4e002"
    }],
    ["path", {
        d: "M16 17H8",
        key: "z1uh3a"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qs = I("Github", [
    ["path", {
        d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
        key: "tonef"
    }],
    ["path", {
        d: "M9 18c-4.51 2-5-2-7-2",
        key: "9comsn"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qf = I("Globe", [
    ["circle", {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay"
    }],
    ["path", {
        d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
        key: "13o1zl"
    }],
    ["path", {
        d: "M2 12h20",
        key: "9i4pu4"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mc = I("Heart", [
    ["path", {
        d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
        key: "c3ymky"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ep = I("Image", [
    ["rect", {
        width: "18",
        height: "18",
        x: "3",
        y: "3",
        rx: "2",
        ry: "2",
        key: "1m3agn"
    }],
    ["circle", {
        cx: "9",
        cy: "9",
        r: "2",
        key: "af1f0g"
    }],
    ["path", {
        d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",
        key: "1xmnt7"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tp = I("Mail", [
    ["rect", {
        width: "20",
        height: "16",
        x: "2",
        y: "4",
        rx: "2",
        key: "18n3k1"
    }],
    ["path", {
        d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
        key: "1ocrg3"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const np = I("Menu", [
    ["line", {
        x1: "4",
        x2: "20",
        y1: "12",
        y2: "12",
        key: "1e0a9i"
    }],
    ["line", {
        x1: "4",
        x2: "20",
        y1: "6",
        y2: "6",
        key: "1owob3"
    }],
    ["line", {
        x1: "4",
        x2: "20",
        y1: "18",
        y2: "18",
        key: "yk5zj1"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jt = I("MessageCircle", [
    ["path", {
        d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z",
        key: "vv11sd"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
// --- Book (lucide-style) ---
const Book = I("Book", [
  ["path", { d: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20", key: "bk1" }],
  ["path", { d: "M4 4.5A2.5 2.5 0 0 1 6.5 7H20",  key: "bk2" }],
  ["path", { d: "M20 22V2",                            key: "bk3" }],
  ["path", { d: "M4 22V2",                             key: "bk4" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const hc = I("Palette", [
    ["circle", {
        cx: "13.5",
        cy: "6.5",
        r: ".5",
        fill: "currentColor",
        key: "1okk4w"
    }],
    ["circle", {
        cx: "17.5",
        cy: "10.5",
        r: ".5",
        fill: "currentColor",
        key: "f64h9f"
    }],
    ["circle", {
        cx: "8.5",
        cy: "7.5",
        r: ".5",
        fill: "currentColor",
        key: "fotxhn"
    }],
    ["circle", {
        cx: "6.5",
        cy: "12.5",
        r: ".5",
        fill: "currentColor",
        key: "qy21gx"
    }],
    ["path", {
        d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",
        key: "12rzf8"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ea = I("Send", [
    ["path", {
        d: "m22 2-7 20-4-9-9-4Z",
        key: "1q3vgg"
    }],
    ["path", {
        d: "M22 2 11 13",
        key: "nzbqef"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ko = I("Server", [
    ["rect", {
        width: "20",
        height: "8",
        x: "2",
        y: "2",
        rx: "2",
        ry: "2",
        key: "ngkwjq"
    }],
    ["rect", {
        width: "20",
        height: "8",
        x: "2",
        y: "14",
        rx: "2",
        ry: "2",
        key: "iecqi9"
    }],
    ["line", {
        x1: "6",
        x2: "6.01",
        y1: "6",
        y2: "6",
        key: "16zg32"
    }],
    ["line", {
        x1: "6",
        x2: "6.01",
        y1: "18",
        y2: "18",
        key: "nzw8ys"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rp = I("Shield", [
    ["path", {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const il = I("Sparkles", [
    ["path", {
        d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",
        key: "17u4zn"
    }],
    ["path", {
        d: "M5 3v4",
        key: "bklmnn"
    }],
    ["path", {
        d: "M19 17v4",
        key: "iiml17"
    }],
    ["path", {
        d: "M3 5h4",
        key: "nem4j1"
    }],
    ["path", {
        d: "M17 19h4",
        key: "lbex7p"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lp = I("SquarePen", [
    ["path", {
        d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",
        key: "1m0v6g"
    }],
    ["path", {
        d: "M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z",
        key: "1lpok0"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gc = I("Star", [
    ["polygon", {
        points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
        key: "8f66p6"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qt = I("Users", [
    ["path", {
        d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
        key: "1yyitq"
    }],
    ["circle", {
        cx: "9",
        cy: "7",
        r: "4",
        key: "nufk8"
    }],
    ["path", {
        d: "M22 21v-2a4 4 0 0 0-3-3.87",
        key: "kshegd"
    }],
    ["path", {
        d: "M16 3.13a4 4 0 0 1 0 7.75",
        key: "1da9ce"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const op = I("X", [
    ["path", {
        d: "M18 6 6 18",
        key: "1bl5f8"
    }],
    ["path", {
        d: "m6 6 12 12",
        key: "d8bk6v"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sl = I("Zap", [
        ["polygon", {
            points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2",
            key: "45s27k"
        }]
    ]),
    ip = () => {
        const [e, t] = ve.useState(!1), [n, r] = ve.useState(!1);
        ve.useEffect(() => {
            const o = () => {
                r(window.scrollY > 50)
            };
            return window.addEventListener("scroll", o), () => window.removeEventListener("scroll", o)
        }, []);
        const l = o => {
            const i = document.getElementById(o);
            i == null || i.scrollIntoView({
                behavior: "smooth"
            }), t(!1)
        };
        return s.jsx("header", {
            className: `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${n?"bg-black/90 backdrop-blur-xl border-b border-white/20 shadow-2xl":"bg-black/20 backdrop-blur-sm"}`,
            children: s.jsxs("div", {
                className: "max-w-7xl mx-auto px-6 lg:px-8",
                children: [s.jsxs("div", {
                    className: "flex justify-between items-center py-4",
                    children: [s.jsxs("div", {
                        className: "flex items-center space-x-3 group cursor-pointer",
                        children: [s.jsxs("div", {
                            className: "relative",
                            children: [s.jsx("div", {
                                className: "absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"
                            }), s.jsx("div", {
                                className: "relative bg-black/70 backdrop-blur-sm p-2.5 rounded-xl border border-white/30",
                                children: s.jsx(an, {
                                    className: "h-6 w-6 text-white"
                                })
                            })]
                        }), s.jsxs("div", {
                            children: [s.jsx("span", {
                                className: "text-xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent",
                                children: "Stoic Devz"
                            }), s.jsxs("div", {
                                className: "flex items-center space-x-1",
                                children: [s.jsx(il, {
                                    className: "h-2.5 w-2.5 text-yellow-400"
                                }), s.jsx("span", {
                                    className: "text-xs text-gray-300 font-medium",
                                    children: "Full-Stack Developer"
                                })]
                            })]
                        })]
                    }), s.jsx("nav", {
                        className: "hidden md:flex items-center space-x-1",
                        children: ["Home", "Skills", "Projects", "Bots", "Contact"].map(o => s.jsxs("button", {
                            onClick: () => l(o.toLowerCase()),
                            className: "relative px-5 py-2.5 text-gray-200 hover:text-white transition-all duration-300 group font-medium",
                            children: [s.jsx("span", {
                                className: "relative z-10 font-medium",
                                children: o
                            }), s.jsx("div", {
                                className: "absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/10"
                            }), s.jsx("div", {
                                className: "absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-4/5 group-hover:left-[10%] transition-all duration-300"
                            })]
                        }, o))
                    }), s.jsx("button", {
                        onClick: () => t(!e),
                        className: "md:hidden relative p-2.5 text-gray-200 hover:text-white transition-colors duration-300 bg-black/30 backdrop-blur-sm rounded-lg border border-white/20",
                        children: e ? s.jsx(op, {
                            className: "h-5 w-5 relative z-10"
                        }) : s.jsx(np, {
                            className: "h-5 w-5 relative z-10"
                        })
                    })]
                }), e && s.jsx("nav", {
                    className: "md:hidden py-4 border-t border-white/20 bg-black/50 backdrop-blur-sm rounded-b-2xl",
                    children: s.jsx("div", {
                        className: "flex flex-col space-y-2",
                        children: ["Home", "Skills", "Projects", "Bots", "Contact"].map(o => s.jsx("button", {
                            onClick: () => l(o.toLowerCase()),
                            className: "text-left px-4 py-3 text-gray-200 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 font-medium",
                            children: o
                        }, o))
                    })
                })]
            })
        })
    },
    sp = () => {
        const [e, t] = ve.useState({
            x: 0,
            y: 0
        });
        ve.useEffect(() => {
            const r = l => {
                t({
                    x: l.clientX,
                    y: l.clientY
                })
            };
            return window.addEventListener("mousemove", r), () => window.removeEventListener("mousemove", r)
        }, []);
        const n = () => {
            const r = document.getElementById("projects");
            r == null || r.scrollIntoView({
                behavior: "smooth"
            })
        };
        return s.jsxs("section", {
            id: "home",
            className: "min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black pt-20",
            children: [s.jsxs("div", {
                className: "absolute inset-0",
                children: [s.jsx("div", {
                    className: "absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"
                }), s.jsx("div", {
                    className: "absolute w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl",
                    style: {
                        left: e.x - 192,
                        top: e.y - 192,
                        transition: "all 0.3s ease-out"
                    }
                }), s.jsx("div", {
                    className: "absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-full blur-3xl animate-pulse"
                }), s.jsx("div", {
                    className: "absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000"
                })]
            }), s.jsx("div", {
                className: "absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"
            }), s.jsxs("div", {
                className: "max-w-7xl mx-auto px-6 lg:px-8 relative z-10",
                children: [s.jsxs("div", {
                    className: "grid lg:grid-cols-2 gap-12 items-center",
                    children: [s.jsxs("div", {
                        className: "text-center lg:text-left space-y-8",
                        children: [s.jsxs("div", {
                            className: "space-y-6",
                            children: [s.jsx("div", {
                                className: "flex items-center justify-center lg:justify-start space-x-2 mb-4",
                                children: s.jsxs("div", {
                                    className: "flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10",
                                    children: [s.jsx("div", {
                                        className: "w-2 h-2 bg-green-400 rounded-full animate-pulse"
                                    }), s.jsx("span", {
                                        className: "text-sm text-gray-300 font-medium",
                                        children: "Available for collaborations"
                                    })]
                                })
                            }), s.jsxs("h1", {
                                className: "text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight",
                                children: [s.jsx("span", {
                                    className: "text-white",
                                    children: "Hi, I'm "
                                }), s.jsx("span", {
                                    className: "bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient",
                                    children: "Stoic Devz"
                                })]
                            }), s.jsxs("div", {
                                className: "space-y-4",
                                children: [s.jsx("p", {
                                    className: "text-xl sm:text-2xl text-gray-300 leading-relaxed",
                                    children: "Full-Stack Developer & AI Enthusiast"
                                }), s.jsxs("p", {
                                    className: "text-lg text-gray-400 max-w-2xl",
                                    children: ["Specializing in", " ", s.jsx("span", {
                                        className: "text-cyan-400 font-semibold",
                                        children: "Cloudflare Workers"
                                    }), ",", " ", s.jsx("span", {
                                        className: "text-purple-400 font-semibold",
                                        children: "JavaScript"
                                    }), ",", " ", s.jsx("span", {
                                        className: "text-pink-400 font-semibold",
                                        children: "AI Integration"
                                    }), ", and", " ", s.jsx("span", {
                                        className: "text-orange-400 font-semibold",
                                        children: "Modern Web Technologies"
                                    })]
                                })]
                            }), s.jsxs("div", {
                                className: "flex items-center justify-center lg:justify-start space-x-3",
                                children: [s.jsxs("div", {
                                    className: "flex items-center space-x-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10",
                                    children: [s.jsx(ol, {
                                        className: "h-4 w-4 text-cyan-400"
                                    }), s.jsx("span", {
                                        className: "text-sm text-gray-300",
                                        children: "Full-Stack"
                                    })]
                                }), s.jsxs("div", {
                                    className: "flex items-center space-x-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10",
                                    children: [s.jsx(Sl, {
                                        className: "h-4 w-4 text-yellow-400"
                                    }), s.jsx("span", {
                                        className: "text-sm text-gray-300",
                                        children: "AI Expert"
                                    })]
                                }), s.jsxs("div", {
                                    className: "flex items-center space-x-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10",
                                    children: [s.jsx(il, {
                                        className: "h-4 w-4 text-purple-400"
                                    }), s.jsx("span", {
                                        className: "text-sm text-gray-300",
                                        children: "Bot Creator"
                                    })]
                                })]
                            })]
                        }), s.jsxs("div", {
                            className: "flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center",
                            children: [s.jsxs("button", {
                                onClick: n,
                                className: "group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25",
                                children: [s.jsx("span", {
                                    className: "relative z-10",
                                    children: "Explore My Work"
                                }), s.jsx("div", {
                                    className: "absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                                })]
                            }), s.jsxs("a", {
                                href: "https://instagram.com/7stoical",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "group flex items-center space-x-2 px-6 py-4 bg-black/30 backdrop-blur-sm border border-white/20 rounded-full text-gray-300 hover:text-white hover:border-white/40 transition-all duration-300",
                                children: [s.jsx(jt, {
                                    className: "h-5 w-5 group-hover:scale-110 transition-transform duration-300"
                                }), s.jsx("span", {
                                    children: "Let's Connect"
                                })]
                            })]
                        })]
                    }), s.jsx("div", {
                        className: "flex justify-center lg:justify-end",
                        children: s.jsxs("div", {
                            className: "relative group",
                            children: [s.jsx("div", {
                                className: "absolute -inset-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full opacity-75 group-hover:opacity-100 blur-lg transition-all duration-500 animate-pulse"
                            }), s.jsxs("div", {
                                className: "relative",
                                children: [s.jsx("div", {
                                    className: "w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm bg-black/20",
                                    children: s.jsx("img", {
                                        src: "/stoic.jpg",
                                        alt: "Stoic Devz Profile",
                                        className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    })
                                }), s.jsx("div", {
                                    className: "absolute -top-4 -right-4 bg-gradient-to-r from-cyan-500 to-blue-500 p-3 rounded-full shadow-2xl animate-bounce",
                                    children: s.jsx(ol, {
                                        className: "h-6 w-6 text-white"
                                    })
                                }), s.jsx("div", {
                                    className: "absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full shadow-2xl animate-bounce animation-delay-1000",
                                    children: s.jsx(il, {
                                        className: "h-6 w-6 text-white"
                                    })
                                })]
                            })]
                        })
                    })]
                }), s.jsx("div", {
                    className: "absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce",
                    children: s.jsxs("div", {
                        className: "flex flex-col items-center space-y-2",
                        children: [s.jsx("span", {
                            className: "text-sm text-gray-400",
                            children: "Scroll to explore"
                        }), s.jsx(Kf, {
                            className: "h-6 w-6 text-gray-400"
                        })]
                    })
                })]
            })]
        })
    },
    ap = () => {
        const e = [{
            icon: s.jsx(Sl, {
                className: "h-8 w-8"
            }),
            title: "Cloudflare Workers",
            description: "Serverless computing at the edge with V8 runtime for lightning-fast applications",
            color: "from-orange-500 via-red-500 to-pink-500",
            level: 95
        }, {
            icon: s.jsx(ol, {
                className: "h-8 w-8"
            }),
            title: "JavaScript/TypeScript",
            description: "Modern ES6+, TypeScript, and advanced JavaScript patterns for robust applications",
            color: "from-yellow-400 via-orange-500 to-red-500",
            level: 92
        }, {
            icon: s.jsx(qf, {
                className: "h-8 w-8"
            }),
            title: "Web Development",
            description: "HTML5, CSS3, responsive design, and modern frameworks like React and Vue",
            color: "from-blue-500 via-purple-500 to-pink-500",
            level: 90
        }, {
            icon: s.jsx(Ko, {
                className: "h-8 w-8"
            }),
            title: "PHP Development",
            description: "Backend development, APIs, and server-side scripting with modern PHP",
            color: "from-purple-500 via-indigo-500 to-blue-500",
            level: 85
        }, {
            icon: s.jsx(Js, {
                className: "h-8 w-8"
            }),
            title: "AI Integration",
            description: "Machine learning, AI APIs, chatbots, and intelligent automation solutions",
            color: "from-green-400 via-cyan-500 to-blue-500",
            level: 88
        }, {
            icon: s.jsx(ol, {
                className: "h-8 w-8"
            }),
            title: "AI Coding Assistant",
            description: "Advanced AI-powered coding solutions, automated code generation, and intelligent debugging",
            color: "from-violet-500 via-purple-500 to-indigo-500",
            level: 90
        }, {
            icon: s.jsx(Qo, {
                className: "h-8 w-8"
            }),
            title: "Bot Development",
            description: "Telegram bots, Discord bots, and automated systems with Python",
            color: "from-cyan-500 via-blue-500 to-purple-500",
            level: 93
        }, {
            icon: s.jsx(Ko, {
                className: "h-8 w-8"
            }),
            title: "Cybersecurity",
            description: "Security analysis, vulnerability assessment, and secure application development",
            color: "from-red-500 via-orange-500 to-yellow-500",
            level: 75
        }, {
            icon: s.jsx(Xf, {
                className: "h-8 w-8"
            }),
            title: "API Development",
            description: "RESTful APIs, GraphQL, webhooks, and microservices architecture",
            color: "from-indigo-500 via-purple-500 to-pink-500",
            level: 87
        }, {
            icon: s.jsx(hc, {
                className: "h-8 w-8"
            }),
            title: "UI/UX Design",
            description: "Modern design principles, user experience, and interactive interfaces",
            color: "from-pink-500 via-rose-500 to-orange-500",
            level: 82
        }];
        return s.jsxs("section", {
            id: "skills",
            className: "py-24 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden",
            children: [s.jsx("div", {
                className: "absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]"
            }), s.jsx("div", {
                className: "absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:100px_100px]"
            }), s.jsxs("div", {
                className: "max-w-7xl mx-auto px-6 lg:px-8 relative z-10",
                children: [s.jsxs("div", {
                    className: "text-center mb-20",
                    children: [s.jsxs("div", {
                        className: "inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10 mb-6",
                        children: [s.jsx(Js, {
                            className: "h-5 w-5 text-cyan-400"
                        }), s.jsx("span", {
                            className: "text-sm text-gray-300 font-medium",
                            children: "Technical Expertise"
                        })]
                    }), s.jsx("h2", {
                        className: "text-5xl sm:text-6xl font-bold mb-6",
                        children: s.jsx("span", {
                            className: "bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent",
                            children: "Skills & Technologies"
                        })
                    }), s.jsx("p", {
                        className: "text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed",
                        children: "Passionate about cutting-edge technologies and building scalable, innovative solutions"
                    })]
                }), s.jsx("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
                    children: e.map((t, n) => s.jsxs("div", {
                        className: "group relative bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2",
                        children: [s.jsx("div", {
                            className: `absolute inset-0 bg-gradient-to-br ${t.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`
                        }), s.jsx("div", {
                            className: `inline-flex p-4 rounded-xl bg-gradient-to-r ${t.color} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl`,
                            children: s.jsx("div", {
                                className: "text-white",
                                children: t.icon
                            })
                        }), s.jsx("h3", {
                            className: "text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300",
                            children: t.title
                        }), s.jsx("p", {
                            className: "text-gray-400 leading-relaxed mb-6 text-sm",
                            children: t.description
                        }), s.jsxs("div", {
                            className: "space-y-2",
                            children: [s.jsxs("div", {
                                className: "flex justify-between items-center",
                                children: [s.jsx("span", {
                                    className: "text-xs text-gray-500 font-medium",
                                    children: "Proficiency"
                                }), s.jsxs("span", {
                                    className: "text-xs text-gray-400 font-bold",
                                    children: [t.level, "%"]
                                })]
                            }), s.jsx("div", {
                                className: "w-full bg-gray-800 rounded-full h-2 overflow-hidden",
                                children: s.jsx("div", {
                                    className: `h-full bg-gradient-to-r ${t.color} rounded-full transition-all duration-1000 ease-out`,
                                    style: {
                                        width: `${t.level}%`
                                    }
                                })
                            })]
                        })]
                    }, n))
                }), s.jsx("div", {
                    className: "text-center mt-20",
                    children: s.jsxs("div", {
                        className: "bg-gradient-to-r from-black/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10",
                        children: [s.jsx("h3", {
                            className: "text-2xl font-bold text-white mb-4",
                            children: "Ready to bring your ideas to life?"
                        }), s.jsx("p", {
                            className: "text-gray-400 mb-6 max-w-2xl mx-auto",
                            children: "Let's collaborate and create something amazing together using these cutting-edge technologies."
                        }), s.jsxs("a", {
                            href: "https://instagram.com/7stoical",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25",
                            children: [s.jsx(jt, {
                                className: "h-5 w-5"
                            }), s.jsx("span", {
                                children: "Start a Project"
                            })]
                        })]
                    })
                })]
            })]
        })
    },
    up = () => {
        const [e, t] = ve.useState(null), n = [{
            title: "Genify AI",
            description: "No more $100 for 10 videos — generate unlimited AI videos via text prompts for free with Genify AI",
            icon: s.jsx(Ko, {
                className: "h-6 w-6"
            }),
            url: "https://genify.space/",
            tags: ["AI-Powered", "Video Gen", "Unlimited", "Free"],
            color: "from-blue-500 via-cyan-500 to-teal-500",
            featured: !0,
            stats: {
                generated: "100K+",
                uptime: "99.9%"
            }
        }, {
            title: "NexTune",
            description: "No premium, no plus, no pro — just free, unlimited & ad-free music streaming on NexTune.",
            icon: s.jsx(Jf, {
                className: "h-6 w-6"
            }),
            url: "https://nexcore.genify.space/",
            tags: ["Music", "Streaming", "Ad-Free", "Entertainment"],
            color: "from-green-500 via-emerald-500 to-cyan-500",
            featured: !0,
            stats: {
                songs: "80M+",
                listeners: "4K+"
            }
        }, {
            title: "WΛVVY",
            description: "No ads. No paywalls. Just free unlimited music streaming and downloads on WAVVY.",
            icon: s.jsx(an, {
                className: "h-6 w-6"
            }),
            url: "https://wavvy.genify.space/",
            tags: ["Music", "Free Streaming", "Downloaing", "Ad-Free Entertainment"],
            color: "from-orange-500 via-red-500 to-pink-500",
            featured: !0,
            stats: {
                songs: "80M+",
                users: "5k+"
            }
        }, {
            title: "MangaHaven",
            description: "The haven where rebels read, and stories never bow to price tags.",
            icon: s.jsx(Book, {
                className: "h-6 w-6"
            }),
            url: "https://mhaven.genify.space/",
            tags: ["Ultimate Manga", "100K+ Collection", "Read/DL allowed", "Ad-Free Entertainment"],
            color: "from-violet-500 via-purple-500 to-indigo-500",
            featured: !0,
            stats: {
                users: "5K+",
                collection: "100K+"
            }
        }, {
            title: "Genify AI Image Generator",
            description: "State-of-the-art AI-powered image generation tool with advanced customization options",
            icon: s.jsx(ep, {
                className: "h-6 w-6"
            }),
            url: "https://img.genify.space/",
            tags: ["AI", "Image Generation", "Creative", "Machine Learning"],
            color: "from-purple-500 via-pink-500 to-rose-500",
            featured: !0,
            stats: {
                generated: "100K+",
                models: "15+"
            }
        }, {
            title: "Realtime Chatting Application",
            description: "Chat instantly with friends, no BS—ads gone, bugs around, updates rolling.",
            icon: s.jsx(Zf, {
                className: "h-6 w-6"
            }),
            url: "https://chat.genify.space/",
            tags: ["Real-time Chat", "Fast & Free", "Constant Bug Fixes", "No Signup"],
            color: "from-indigo-500 via-purple-500 to-pink-500",
            featured: !0,
            stats: {
                users: "1K+",
                satisfaction: "80%"
            }
        }, {
            title: "Stoic Devz Biolink",
            description: "Got an idea? Let’s bring it to life—ping us to collaborate.",
            icon: s.jsx(an, {
                className: "h-6 w-6"
            }),
            url: "https://guns.lol/rich.php/",
            tags: ["Expert Solutions", "Build With Us", "Web Development", "Automation"],
            color: "from-orange-500 via-red-500 to-pink-500",
            featured: !1,
            stats: {
                projects: "100+",
                accuracy: "95%"
            }
        }, {
            title: "Spotify Downloader",
            description: "Download any Spotify track in seconds—completely free, zero strings attached!”",
            icon: s.jsx(Gf, {
                className: "h-6 w-6"
            }),
            url: "https://spotify.genify.space/",
            tags: ["Spotify DL", "HQ Songs", "No Ads", "Freely Unlimited"],
            color: "from-red-500 via-pink-500 to-purple-500",
            featured: !1,
            stats: {
                songs: "100M+",
                users: "5K+"
            }
        }, {
            title: "Multi DL",
            description: "All-in-one downloader—grab Insta reels, YouTube vids, or FB clips, free and unlimited.",
            icon: s.jsx(Yf, {
                className: "h-6 w-6"
            }),
            url: "https://multidl.genify.space/",
            tags: ["All-in-one Saver", "MP4/MP3", "Multiple qualities", "Unlimited Free Tool"],
            color: "from-teal-500 via-cyan-500 to-blue-500",
            featured: !1,
            stats: {
                downloads: "50K+",
                satisfaction: "96%"
            }
        }], r = n.filter(o => o.featured), l = n.filter(o => !o.featured);
        return s.jsxs("section", {
            id: "projects",
            className: "py-24 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden",
            children: [s.jsx("div", {
                className: "absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(120,119,198,0.1),transparent_50%)]"
            }), s.jsx("div", {
                className: "absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:80px_80px]"
            }), s.jsxs("div", {
                className: "max-w-7xl mx-auto px-6 lg:px-8 relative z-10",
                children: [s.jsxs("div", {
                    className: "text-center mb-20",
                    children: [s.jsxs("div", {
                        className: "inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10 mb-6",
                        children: [s.jsx(Sl, {
                            className: "h-5 w-5 text-purple-400"
                        }), s.jsx("span", {
                            className: "text-sm text-gray-300 font-medium",
                            children: "Featured Work"
                        })]
                    }), s.jsx("h2", {
                        className: "text-5xl sm:text-6xl font-bold mb-6",
                        children: s.jsx("span", {
                            className: "bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent",
                            children: "Featured Projects"
                        })
                    }), s.jsx("p", {
                        className: "text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed",
                        children: "A showcase of my innovative web applications, AI tools, and developer solutions that push the boundaries of technology"
                    })]
                }), s.jsx("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16",
                    children: r.map((o, i) => s.jsxs("div", {
                        className: "group relative bg-black/40 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-2",
                        onMouseEnter: () => t(i),
                        onMouseLeave: () => t(null),
                        children: [s.jsx("div", {
                            className: `absolute inset-0 bg-gradient-to-br ${o.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`
                        }), s.jsx("div", {
                            className: "absolute top-4 right-4 z-10",
                            children: s.jsxs("div", {
                                className: "flex items-center space-x-1 bg-gradient-to-r from-yellow-500 to-orange-500 px-3 py-1 rounded-full",
                                children: [s.jsx(gc, {
                                    className: "h-3 w-3 text-white"
                                }), s.jsx("span", {
                                    className: "text-xs text-white font-bold",
                                    children: "FEATURED"
                                })]
                            })
                        }), s.jsxs("div", {
                            className: "p-8",
                            children: [s.jsx("div", {
                                className: `inline-flex p-4 rounded-2xl bg-gradient-to-r ${o.color} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl`,
                                children: s.jsx("div", {
                                    className: "text-white",
                                    children: o.icon
                                })
                            }), s.jsx("h3", {
                                className: "text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300",
                                children: o.title
                            }), s.jsx("p", {
                                className: "text-gray-400 mb-6 leading-relaxed",
                                children: o.description
                            }), s.jsx("div", {
                                className: "flex items-center space-x-6 mb-6",
                                children: Object.entries(o.stats).map(([a, u]) => s.jsxs("div", {
                                    className: "text-center",
                                    children: [s.jsx("div", {
                                        className: "text-lg font-bold text-white",
                                        children: u
                                    }), s.jsx("div", {
                                        className: "text-xs text-gray-500 capitalize",
                                        children: a
                                    })]
                                }, a))
                            }), s.jsx("div", {
                                className: "flex flex-wrap gap-2 mb-8",
                                children: o.tags.map((a, u) => s.jsx("span", {
                                    className: "px-3 py-1 bg-white/5 backdrop-blur-sm text-gray-300 text-sm rounded-full border border-white/10 hover:border-white/20 transition-colors duration-300",
                                    children: a
                                }, u))
                            }), s.jsxs("a", {
                                href: o.url,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: `inline-flex items-center space-x-2 bg-gradient-to-r ${o.color} hover:shadow-2xl text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105`,
                                children: [s.jsx("span", {
                                    children: "Explore Project"
                                }), s.jsx(Rn, {
                                    className: "h-4 w-4"
                                })]
                            })]
                        })]
                    }, i))
                }), s.jsxs("div", {
                    className: "mb-12",
                    children: [s.jsx("h3", {
                        className: "text-3xl font-bold text-white mb-8 text-center",
                        children: "More Projects"
                    }), s.jsx("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                        children: l.map((o, i) => s.jsxs("div", {
                            className: "group bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1",
                            children: [s.jsx("div", {
                                className: `inline-flex p-3 rounded-xl bg-gradient-to-r ${o.color} mb-4 group-hover:scale-110 transition-transform duration-300`,
                                children: s.jsx("div", {
                                    className: "text-white",
                                    children: o.icon
                                })
                            }), s.jsx("h4", {
                                className: "text-lg font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors duration-200",
                                children: o.title
                            }), s.jsx("p", {
                                className: "text-gray-400 text-sm mb-4 leading-relaxed",
                                children: o.description
                            }), s.jsx("div", {
                                className: "flex flex-wrap gap-1 mb-4",
                                children: o.tags.slice(0, 2).map((a, u) => s.jsx("span", {
                                    className: "px-2 py-1 bg-white/5 text-gray-400 text-xs rounded-full border border-white/10",
                                    children: a
                                }, u))
                            }), s.jsxs("a", {
                                href: o.url,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors duration-200 font-medium text-sm",
                                children: [s.jsx("span", {
                                    children: "View Project"
                                }), s.jsx(Rn, {
                                    className: "h-3 w-3"
                                })]
                            })]
                        }, i))
                    })]
                })]
            })]
        })
    },
    cp = () => {
        const e = [{
            name: "@VisionlyBot",
            description: "Advanced AI-Powered image generator bot that can bring your ideas into life",
            icon: s.jsx(mc, {
                className: "h-6 w-6"
            }),
            username: "VisionlyBot",
            color: "from-pink-500 via-rose-500 to-red-500",
            stats: {
                users: "3K+",
                image: "20K+"
            },
            features: ["AI", "Text to Image", "Multi-Model"]
        }, {
            name: "@SoraAI_xbot",
            description: "Advanced Video generator bot, limited-time free, try now!",
            icon: s.jsx(tp, {
                className: "h-6 w-6"
            }),
            username: "SoraAI_xbot",
            color: "from-blue-500 via-indigo-500 to-purple-500",
            stats: {
                users: "5K+",
                videos: "50k+"
            },
            features: ["AI Video Generation", "Fast & Free", "HQ Videos"]
        }, {
            name: "@MusicDL_zbot",
            description: "Seamlessly download your favourite song, no limits, no paywalls.",
            icon: s.jsx(hc, {
                className: "h-6 w-6"
            }),
            username: "MusicDL_zbot",
            color: "from-green-500 via-teal-500 to-cyan-500",
            stats: {
                users: "5K+",
                downloads: "100K+"
            },
            features: ["Spotify DL Bot", "Entertainment", "TG Bot"]
        }, {
            name: "@MultiDL_xbot",
            description: "Allows downloading media from almost all top social medias, tap Try Now to try out!",
            icon: s.jsx(lp, {
                className: "h-6 w-6"
            }),
            username: "MultiDL_xbot",
            color: "from-violet-500 via-purple-500 to-indigo-500",
            stats: {
                users: "5K+",
                downloads: "100K+"
            },
            features: ["Multi DL Bot", "No Limits", "Fast & Free"]
        }, {
            name: "@ChatterXobot",
            description: "Casual AI-Powered telegram chatbot, mid-memory, but remembers enough context.",
            icon: s.jsx(rp, {
                className: "h-6 w-6"
            }),
            username: "ChatterXobot",
            color: "from-emerald-500 via-green-500 to-teal-500",
            stats: {
                users: "10K+",
                privacy: "99.9%"
            },
            features: ["Casual Chatbot", "Full Privacy", "Fast & Free"]
        }];
        return s.jsxs("section", {
            id: "bots",
            className: "py-24 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden",
            children: [s.jsx("div", {
                className: "absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.1),transparent_50%)]"
            }), s.jsx("div", {
                className: "absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:60px_60px]"
            }), s.jsxs("div", {
                className: "max-w-7xl mx-auto px-6 lg:px-8 relative z-10",
                children: [s.jsxs("div", {
                    className: "text-center mb-20",
                    children: [s.jsxs("div", {
                        className: "inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10 mb-6",
                        children: [s.jsx(Qo, {
                            className: "h-5 w-5 text-blue-400"
                        }), s.jsx("span", {
                            className: "text-sm text-gray-300 font-medium",
                            children: "Telegram Automation"
                        })]
                    }), s.jsx("h2", {
                        className: "text-5xl sm:text-6xl font-bold mb-6",
                        children: s.jsx("span", {
                            className: "bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent",
                            children: "Telegram Bots"
                        })
                    }), s.jsx("p", {
                        className: "text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed",
                        children: "Intelligent Telegram bots built with Python, featuring advanced automation, AI integration, and seamless user experiences"
                    })]
                }), s.jsx("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16",
                    children: e.map((t, n) => s.jsxs("div", {
                        className: "group relative bg-black/40 backdrop-blur-sm rounded-3xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2",
                        children: [s.jsx("div", {
                            className: `absolute inset-0 bg-gradient-to-br ${t.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`
                        }), s.jsx("div", {
                            className: `inline-flex p-3 rounded-2xl bg-gradient-to-r ${t.color} mb-4 group-hover:scale-110 transition-transform duration-300 shadow-2xl`,
                            children: s.jsx("div", {
                                className: "text-white",
                                children: t.icon
                            })
                        }), s.jsx("h3", {
                            className: "text-lg font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300",
                            children: t.name
                        }), s.jsx("p", {
                            className: "text-gray-400 mb-4 leading-relaxed text-sm",
                            children: t.description
                        }), s.jsx("div", {
                            className: "flex items-center justify-between mb-4",
                            children: Object.entries(t.stats).map(([r, l]) => s.jsxs("div", {
                                className: "text-center",
                                children: [s.jsx("div", {
                                    className: "text-sm font-bold text-white",
                                    children: l
                                }), s.jsx("div", {
                                    className: "text-xs text-gray-500 capitalize",
                                    children: r
                                })]
                            }, r))
                        }), s.jsx("div", {
                            className: "space-y-1 mb-6",
                            children: t.features.map((r, l) => s.jsxs("div", {
                                className: "flex items-center space-x-2",
                                children: [s.jsx("div", {
                                    className: `w-2 h-2 rounded-full bg-gradient-to-r ${t.color}`
                                }), s.jsx("span", {
                                    className: "text-xs text-gray-400",
                                    children: r
                                })]
                            }, l))
                        }), s.jsxs("a", {
                            href: `https://t.me/${t.username}`,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: `inline-flex items-center space-x-2 bg-gradient-to-r ${t.color} hover:shadow-2xl text-white px-4 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 w-full justify-center text-sm`,
                            children: [s.jsx(Qo, {
                                className: "h-4 w-4"
                            }), s.jsx("span", {
                                children: "Try Bot"
                            }), s.jsx(Rn, {
                                className: "h-4 w-4"
                            })]
                        })]
                    }, n))
                }), s.jsx("div", {
                    className: "mb-16",
                    children: s.jsxs("div", {
                        className: "bg-gradient-to-r from-black/60 to-gray-900/60 backdrop-blur-sm rounded-3xl p-8 border border-white/10 text-center",
                        children: [s.jsxs("div", {
                            className: "inline-flex items-center space-x-2 bg-gradient-to-r from-gray-500/20 to-slate-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10 mb-6",
                            children: [s.jsx(qs, {
                                className: "h-5 w-5 text-gray-400"
                            }), s.jsx("span", {
                                className: "text-sm text-gray-300 font-medium",
                                children: "Open Source"
                            })]
                        }), s.jsx("h3", {
                            className: "text-3xl font-bold mb-4",
                            children: s.jsx("span", {
                                className: "bg-gradient-to-r from-gray-400 via-slate-400 to-gray-300 bg-clip-text text-transparent",
                                children: "GitHub Repository"
                            })
                        }), s.jsx("p", {
                            className: "text-gray-400 mb-6 max-w-2xl mx-auto",
                            children: "Explore my open-source projects, bot source codes, and contribute to the developer community"
                        }), s.jsxs("a", {
                            href: "https://github.com/stoic-devz",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "inline-flex items-center space-x-3 bg-gradient-to-r from-gray-700 to-slate-700 hover:from-gray-600 hover:to-slate-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl",
                            children: [s.jsx(qs, {
                                className: "h-5 w-5"
                            }), s.jsx("span", {
                                children: "Stoic Devz"
                            }), s.jsx(Rn, {
                                className: "h-4 w-4"
                            })]
                        })]
                    })
                }), s.jsx("div", {
                    className: "text-center",
                    children: s.jsxs("div", {
                        className: "bg-gradient-to-r from-black/60 to-gray-900/60 backdrop-blur-sm rounded-3xl p-12 border border-white/10 relative overflow-hidden",
                        children: [s.jsx("div", {
                            className: "absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5"
                        }), s.jsxs("div", {
                            className: "relative z-10",
                            children: [s.jsxs("div", {
                                className: "inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10 mb-8",
                                children: [s.jsx(gc, {
                                    className: "h-5 w-5 text-yellow-400"
                                }), s.jsx("span", {
                                    className: "text-sm text-gray-300 font-medium",
                                    children: "Free Resources"
                                })]
                            }), s.jsx("h3", {
                                className: "text-4xl font-bold mb-6",
                                children: s.jsx("span", {
                                    className: "bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent",
                                    children: "Developer Community"
                                })
                            }), s.jsx("p", {
                                className: "text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed",
                                children: "Join our thriving community to access free bot source codes, Python tutorials, and collaborate with fellow developers"
                            }), s.jsxs("div", {
                                className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-10",
                                children: [s.jsxs("div", {
                                    className: "bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-white/10",
                                    children: [s.jsx(an, {
                                        className: "h-8 w-8 text-purple-400 mx-auto mb-4"
                                    }), s.jsx("h4", {
                                        className: "text-lg font-semibold text-white mb-2",
                                        children: "Free Source Code"
                                    }), s.jsx("p", {
                                        className: "text-gray-400 text-sm",
                                        children: "Access complete bot source codes"
                                    })]
                                }), s.jsxs("div", {
                                    className: "bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-white/10",
                                    children: [s.jsx(qt, {
                                        className: "h-8 w-8 text-blue-400 mx-auto mb-4"
                                    }), s.jsx("h4", {
                                        className: "text-lg font-semibold text-white mb-2",
                                        children: "Active Community"
                                    }), s.jsx("p", {
                                        className: "text-gray-400 text-sm",
                                        children: "Connect with 10K+ developers"
                                    })]
                                }), s.jsxs("div", {
                                    className: "bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-white/10",
                                    children: [s.jsx(Sl, {
                                        className: "h-8 w-8 text-cyan-400 mx-auto mb-4"
                                    }), s.jsx("h4", {
                                        className: "text-lg font-semibold text-white mb-2",
                                        children: "Regular Updates"
                                    }), s.jsx("p", {
                                        className: "text-gray-400 text-sm",
                                        children: "New tutorials and resources weekly"
                                    })]
                                })]
                            }), s.jsxs("a", {
                                href: "https://t.me/+mg6CSIxNyYdmMGI1",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "inline-flex items-center space-x-3 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 hover:from-purple-500 hover:via-blue-500 hover:to-cyan-500 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25",
                                children: [s.jsx(qt, {
                                    className: "h-6 w-6"
                                }), s.jsx("span", {
                                    children: "Join Community"
                                }), s.jsx(Rn, {
                                    className: "h-5 w-5"
                                })]
                            })]
                        })]
                    })
                })]
            })]
        })
    },
    dp = () => s.jsxs("section", {
        id: "contact",
        className: "py-24 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden",
        children: [s.jsx("div", {
            className: "absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"
        }), s.jsx("div", {
            className: "absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:100px_100px]"
        }), s.jsxs("div", {
            className: "max-w-7xl mx-auto px-6 lg:px-8 relative z-10",
            children: [s.jsxs("div", {
                className: "text-center mb-20",
                children: [s.jsxs("div", {
                    className: "inline-flex items-center space-x-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10 mb-6",
                    children: [s.jsx(jt, {
                        className: "h-5 w-5 text-green-400"
                    }), s.jsx("span", {
                        className: "text-sm text-gray-300 font-medium",
                        children: "Let's Connect"
                    })]
                }), s.jsx("h2", {
                    className: "text-5xl sm:text-6xl font-bold mb-6",
                    children: s.jsx("span", {
                        className: "bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent",
                        children: "Get In Touch"
                    })
                }), s.jsx("p", {
                    className: "text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed",
                    children: "Ready to bring your ideas to life? Let's collaborate and create something extraordinary together"
                })]
            }), s.jsxs("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16",
                children: [s.jsxs("div", {
                    className: "space-y-8",
                    children: [s.jsx("div", {
                        className: "bg-black/40 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group",
                        children: s.jsxs("div", {
                            className: "text-center",
                            children: [s.jsx("div", {
                                className: "inline-flex p-6 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl",
                                children: s.jsx(jt, {
                                    className: "h-10 w-10 text-white"
                                })
                            }), s.jsx("h3", {
                                className: "text-2xl font-bold text-white mb-4",
                                children: "Direct Contact"
                            }), s.jsx("p", {
                                className: "text-gray-400 mb-8 leading-relaxed",
                                children: "Reach out to me directly on Telegram for project discussions, collaborations, and technical consultations."
                            }), s.jsxs("a", {
                                href: "https://t.me/i7stoical",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl",
                                children: [s.jsx(ea, {
                                    className: "h-5 w-5"
                                }), s.jsx("span", {
                                    children: "ꜱᴛᴏɪᴄ ꭙ ᴅᴇᴠᴢ"
                                })]
                            })]
                        })
                    }), s.jsx("div", {
                        className: "bg-black/40 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group",
                        children: s.jsxs("div", {
                            className: "text-center",
                            children: [s.jsx("div", {
                                className: "inline-flex p-6 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl",
                                children: s.jsx(qt, {
                                    className: "h-10 w-10 text-white"
                                })
                            }), s.jsx("h3", {
                                className: "text-2xl font-bold text-white mb-4",
                                children: "Developer Community"
                            }), s.jsx("p", {
                                className: "text-gray-400 mb-8 leading-relaxed",
                                children: "Join our vibrant community for free resources, bot codes, Python tutorials, and networking opportunities."
                            }), s.jsxs("a", {
                                href: "https://t.me/+mg6CSIxNyYdmMGI1",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "inline-flex items-center space-x-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl",
                                children: [s.jsx(an, {
                                    className: "h-5 w-5"
                                }), s.jsx("span", {
                                    children: "ꜱᴛᴏɪᴄ ꭙ ᴅᴇᴠᴢ"
                                })]
                            })]
                        })
                    })]
                }), s.jsxs("div", {
                    className: "space-y-8",
                    children: [s.jsxs("div", {
                        className: "bg-gradient-to-br from-black/60 to-gray-900/60 backdrop-blur-sm rounded-3xl p-8 border border-white/10",
                        children: [s.jsx("h3", {
                            className: "text-2xl font-bold text-white mb-8 text-center",
                            children: "Services We Offer"
                        }), s.jsxs("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 gap-6",
                            children: [s.jsxs("div", {
                                className: "bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-white/10",
                                children: [s.jsx(an, {
                                    className: "h-8 w-8 text-cyan-400 mb-4"
                                }), s.jsx("h4", {
                                    className: "text-lg font-semibold text-white mb-2",
                                    children: "Web Development"
                                }), s.jsx("p", {
                                    className: "text-gray-400 text-sm",
                                    children: "Full-stack web applications with modern technologies"
                                })]
                            }), s.jsxs("div", {
                                className: "bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-white/10",
                                children: [s.jsx(jt, {
                                    className: "h-8 w-8 text-purple-400 mb-4"
                                }), s.jsx("h4", {
                                    className: "text-lg font-semibold text-white mb-2",
                                    children: "Bot Development"
                                }), s.jsx("p", {
                                    className: "text-gray-400 text-sm",
                                    children: "Custom Telegram bots with advanced features"
                                })]
                            }), s.jsxs("div", {
                                className: "bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-white/10",
                                children: [s.jsx(ea, {
                                    className: "h-8 w-8 text-green-400 mb-4"
                                }), s.jsx("h4", {
                                    className: "text-lg font-semibold text-white mb-2",
                                    children: "API Development"
                                }), s.jsx("p", {
                                    className: "text-gray-400 text-sm",
                                    children: "RESTful APIs and microservices architecture"
                                })]
                            }), s.jsxs("div", {
                                className: "bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-white/10",
                                children: [s.jsx(qt, {
                                    className: "h-8 w-8 text-orange-400 mb-4"
                                }), s.jsx("h4", {
                                    className: "text-lg font-semibold text-white mb-2",
                                    children: "AI Integration"
                                }), s.jsx("p", {
                                    className: "text-gray-400 text-sm",
                                    children: "Machine learning and AI-powered solutions"
                                })]
                            })]
                        })]
                    }), s.jsxs("div", {
                        className: "bg-gradient-to-br from-black/60 to-gray-900/60 backdrop-blur-sm rounded-3xl p-8 border border-white/10",
                        children: [s.jsx("h3", {
                            className: "text-2xl font-bold text-white mb-6 text-center",
                            children: "Quick Stats"
                        }), s.jsxs("div", {
                            className: "grid grid-cols-2 gap-6",
                            children: [s.jsxs("div", {
                                className: "text-center",
                                children: [s.jsx("div", {
                                    className: "text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2",
                                    children: "50+"
                                }), s.jsx("div", {
                                    className: "text-gray-400 text-sm",
                                    children: "Projects Completed"
                                })]
                            }), s.jsxs("div", {
                                className: "text-center",
                                children: [s.jsx("div", {
                                    className: "text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2",
                                    children: "100K+"
                                }), s.jsx("div", {
                                    className: "text-gray-400 text-sm",
                                    children: "Users Served"
                                })]
                            }), s.jsxs("div", {
                                className: "text-center",
                                children: [s.jsx("div", {
                                    className: "text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2",
                                    children: "24/7"
                                }), s.jsx("div", {
                                    className: "text-gray-400 text-sm",
                                    children: "Support Available"
                                })]
                            }), s.jsxs("div", {
                                className: "text-center",
                                children: [s.jsx("div", {
                                    className: "text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2",
                                    children: "99%"
                                }), s.jsx("div", {
                                    className: "text-gray-400 text-sm",
                                    children: "Client Satisfaction"
                                })]
                            })]
                        })]
                    })]
                })]
            }), s.jsx("div", {
                className: "text-center",
                children: s.jsxs("div", {
                    className: "bg-gradient-to-r from-black/60 to-gray-900/60 backdrop-blur-sm rounded-3xl p-12 border border-white/10 relative overflow-hidden",
                    children: [s.jsx("div", {
                        className: "absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5"
                    }), s.jsxs("div", {
                        className: "relative z-10",
                        children: [s.jsx("h3", {
                            className: "text-4xl font-bold mb-6",
                            children: s.jsx("span", {
                                className: "bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent",
                                children: "Let's Build Something Amazing"
                            })
                        }), s.jsx("p", {
                            className: "text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed",
                            children: "Whether you need a custom web application, AI integration, Telegram bot, or Cloudflare Workers solution, I'm here to help transform your vision into reality."
                        }), s.jsxs("div", {
                            className: "flex flex-col sm:flex-row gap-4 justify-center items-center",
                            children: [s.jsxs("a", {
                                href: "https://instagram.com/7stoical",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 hover:from-cyan-500 hover:via-purple-500 hover:to-pink-500 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl",
                                children: [s.jsx(jt, {
                                    className: "h-6 w-6"
                                }), s.jsx("span", {
                                    children: "Start a Project"
                                })]
                            }), s.jsxs("a", {
                                href: "https://t.me/+mg6CSIxNyYdmMGI1",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "inline-flex items-center space-x-3 bg-black/30 backdrop-blur-sm border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-white/5",
                                children: [s.jsx(qt, {
                                    className: "h-5 w-5"
                                }), s.jsx("span", {
                                    children: "Join Community"
                                })]
                            })]
                        })]
                    })]
                })
            })]
        })]
    }),
    fp = () => s.jsxs("footer", {
        className: "bg-black border-t border-white/10 py-12 relative overflow-hidden",
        children: [s.jsx("div", {
            className: "absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(120,119,198,0.05),transparent_50%)]"
        }), s.jsxs("div", {
            className: "max-w-7xl mx-auto px-6 lg:px-8 relative z-10",
            children: [s.jsxs("div", {
                className: "grid grid-cols-1 md:grid-cols-4 gap-8 mb-12",
                children: [s.jsxs("div", {
                    className: "md:col-span-2",
                    children: [s.jsxs("div", {
                        className: "flex items-center space-x-3 mb-6",
                        children: [s.jsxs("div", {
                            className: "relative",
                            children: [s.jsx("div", {
                                className: "absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-xl blur-lg opacity-75"
                            }), s.jsx("div", {
                                className: "relative bg-black/50 backdrop-blur-sm p-3 rounded-xl border border-white/20",
                                children: s.jsx(an, {
                                    className: "h-7 w-7 text-white"
                                })
                            })]
                        }), s.jsxs("div", {
                            children: [s.jsx("span", {
                                className: "text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent",
                                children: "Stoic Devz"
                            }), s.jsxs("div", {
                                className: "flex items-center space-x-1",
                                children: [s.jsx(il, {
                                    className: "h-3 w-3 text-yellow-400"
                                }), s.jsx("span", {
                                    className: "text-xs text-gray-400 font-medium",
                                    children: "Full-Stack Developer"
                                })]
                            })]
                        })]
                    }), s.jsx("p", {
                        className: "text-gray-400 leading-relaxed mb-6 max-w-md",
                        children: "Passionate full-stack developer specializing in modern web technologies, AI integration, and creating innovative solutions that make a difference."
                    }), s.jsxs("div", {
                        className: "flex items-center space-x-4",
                        children: [s.jsxs("a", {
                            href: "https://instagram.com/7stoical",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "group flex items-center space-x-2 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm border border-blue-500/20 hover:border-blue-400/40 px-4 py-2 rounded-full transition-all duration-300",
                            children: [s.jsx(jt, {
                                className: "h-4 w-4 text-blue-400 group-hover:scale-110 transition-transform duration-300"
                            }), s.jsx("span", {
                                className: "text-sm text-gray-300 group-hover:text-white",
                                children: "Contact"
                            })]
                        }), s.jsxs("a", {
                            href: "https://t.me/+mg6CSIxNyYdmMGI1",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "group flex items-center space-x-2 bg-gradient-to-r from-green-600/20 to-emerald-600/20 backdrop-blur-sm border border-green-500/20 hover:border-green-400/40 px-4 py-2 rounded-full transition-all duration-300",
                            children: [s.jsx(qt, {
                                className: "h-4 w-4 text-green-400 group-hover:scale-110 transition-transform duration-300"
                            }), s.jsx("span", {
                                className: "text-sm text-gray-300 group-hover:text-white",
                                children: "Community"
                            })]
                        })]
                    })]
                }), s.jsxs("div", {
                    children: [s.jsx("h3", {
                        className: "text-lg font-semibold text-white mb-4",
                        children: "Quick Links"
                    }), s.jsx("ul", {
                        className: "space-y-3",
                        children: ["Home", "Skills", "Projects", "Bots", "Contact"].map(e => s.jsx("li", {
                            children: s.jsx("button", {
                                onClick: () => {
                                    const t = document.getElementById(e.toLowerCase());
                                    t == null || t.scrollIntoView({
                                        behavior: "smooth"
                                    })
                                },
                                className: "text-gray-400 hover:text-white transition-colors duration-200 text-sm",
                                children: e
                            })
                        }, e))
                    })]
                }), s.jsxs("div", {
                    children: [s.jsx("h3", {
                        className: "text-lg font-semibold text-white mb-4",
                        children: "Services"
                    }), s.jsxs("ul", {
                        className: "space-y-3",
                        children: [s.jsx("li", {
                            className: "text-gray-400 text-sm",
                            children: "Web Development"
                        }), s.jsx("li", {
                            className: "text-gray-400 text-sm",
                            children: "Bot Development"
                        }), s.jsx("li", {
                            className: "text-gray-400 text-sm",
                            children: "API Development"
                        }), s.jsx("li", {
                            className: "text-gray-400 text-sm",
                            children: "AI Integration"
                        }), s.jsx("li", {
                            className: "text-gray-400 text-sm",
                            children: "AI Coding Assistant"
                        }), s.jsx("li", {
                            className: "text-gray-400 text-sm",
                            children: "Cloudflare Workers"
                        }), s.jsx("li", {
                            className: "text-gray-400 text-sm",
                            children: "Cybersecurity"
                        })]
                    })]
                })]
            }), s.jsx("div", {
                className: "border-t border-white/10 pt-8",
                children: s.jsxs("div", {
                    className: "flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0",
                    children: [s.jsxs("div", {
                        className: "flex items-center space-x-2 text-gray-400",
                        children: [s.jsx("span", {
                            children: "Made with"
                        }), s.jsx(mc, {
                            className: "h-4 w-4 text-red-500 fill-current animate-pulse"
                        }), s.jsx("span", {
                            children: "by Stoic Devz"
                        })]
                    }), s.jsxs("div", {
                        className: "flex items-center space-x-6",
                        children: [s.jsxs("div", {
                            className: "text-gray-500 text-sm",
                            children: ["© ", new Date().getFullYear(), " Stoic Devz. All rights reserved."]
                        }), s.jsxs("div", {
                            className: "flex items-center space-x-2",
                            children: [s.jsx("div", {
                                className: "w-2 h-2 bg-green-400 rounded-full animate-pulse"
                            }), s.jsx("span", {
                                className: "text-xs text-gray-400",
                                children: "Available for projects"
                            })]
                        })]
                    })]
                })
            })]
        })]
    });

function pp() {
    return ve.useEffect(() => {
        document.title = "Stoic Devz - Full-Stack Developer & AI Enthusiast | Professional Portfolio";
        const e = document.createElement("style");
        e.textContent = `
      html {
        scroll-behavior: smooth;
      }
      
      body {
        background: #000000;
        overflow-x: hidden;
      }
      
      /* Custom Animations */
      @keyframes gradient {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      
      .animate-gradient {
        background-size: 200% 200%;
        animation: gradient 3s ease infinite;
      }
      
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      .animate-fade-in-up {
        animation: fadeInUp 1s ease-out;
      }
      
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
      }
      
      .animate-float {
        animation: float 3s ease-in-out infinite;
      }
      
      @keyframes pulse-glow {
        0%, 100% { 
          box-shadow: 0 0 20px rgba(139, 92, 246, 0.3);
        }
        50% { 
          box-shadow: 0 0 40px rgba(139, 92, 246, 0.6);
        }
      }
      
      .animate-pulse-glow {
        animation: pulse-glow 2s ease-in-out infinite;
      }
      
      /* Animation Delays */
      .animation-delay-1000 { animation-delay: 1s; }
      .animation-delay-2000 { animation-delay: 2s; }
      .animation-delay-3000 { animation-delay: 3s; }
      .animation-delay-4000 { animation-delay: 4s; }
      
      /* Custom Scrollbar */
      ::-webkit-scrollbar {
        width: 8px;
      }
      
      ::-webkit-scrollbar-track {
        background: #1a1a1a;
      }
      
      ::-webkit-scrollbar-thumb {
        background: linear-gradient(to bottom, #8b5cf6, #06b6d4);
        border-radius: 4px;
      }
      
      ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(to bottom, #7c3aed, #0891b2);
      }
      
      /* Glassmorphism Effects */
      .glass {
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.1);
      }
      
      .glass-dark {
        background: rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.1);
      }
      
      /* Hover Effects */
      .hover-lift {
        transition: all 0.3s ease;
      }
      
      .hover-lift:hover {
        transform: translateY(-5px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
      }
      
      /* Text Gradient Animation */
      .text-gradient-animate {
        background: linear-gradient(-45deg, #06b6d4, #8b5cf6, #ec4899, #f59e0b);
        background-size: 400% 400%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: gradient 3s ease infinite;
      }
      
      /* Particle Effect */
      .particles {
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
        pointer-events: none;
      }
      
      .particle {
        position: absolute;
        width: 2px;
        height: 2px;
        background: rgba(139, 92, 246, 0.5);
        border-radius: 50%;
        animation: float 6s ease-in-out infinite;
      }
      
      /* Loading Animation */
      .loading-dots {
        display: inline-block;
      }
      
      .loading-dots::after {
        content: '';
        animation: dots 1.5s steps(5, end) infinite;
      }
      
      @keyframes dots {
        0%, 20% { content: ''; }
        40% { content: '.'; }
        60% { content: '..'; }
        80%, 100% { content: '...'; }
      }
      
      /* Responsive Improvements */
      @media (max-width: 768px) {
        .text-5xl { font-size: 2.5rem; }
        .text-6xl { font-size: 3rem; }
        .text-7xl { font-size: 3.5rem; }
      }
      
      /* Performance Optimizations */
      * {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      
      img {
        image-rendering: -webkit-optimize-contrast;
        image-rendering: crisp-edges;
      }
    `, document.head.appendChild(e);
        const t = document.createElement("meta");
        t.name = "description", t.content = "Stoic Devz - Professional Full-Stack Developer specializing in Cloudflare Workers, JavaScript, AI Integration, and modern web technologies. Creating innovative solutions and Telegram bots.", document.head.appendChild(t);
        const n = document.createElement("meta");
        return n.name = "keywords", n.content = "Stoic Devz, Full-Stack Developer, Cloudflare Workers, JavaScript, AI Integration, Telegram Bots, Web Development, API Development", document.head.appendChild(n), () => {
            document.head.removeChild(e), document.head.removeChild(t), document.head.removeChild(n)
        }
    }, []), s.jsxs("div", {
        className: "bg-black min-h-screen",
        children: [s.jsx(ip, {}), s.jsx(sp, {}), s.jsx(ap, {}), s.jsx(up, {}), s.jsx(cp, {}), s.jsx(dp, {}), s.jsx(fp, {})]
    })
}
pc(document.getElementById("root")).render(s.jsx(ve.StrictMode, {
    children: s.jsx(pp, {})
}));