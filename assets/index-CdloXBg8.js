function yc(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const l in r)
                if (l !== "default" && !(l in e)) {
                    const i = Object.getOwnPropertyDescriptor(r, l);
                    i && Object.defineProperty(e, l, i.get ? i : {
                        enumerable: !0,
                        get: () => r[l]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
    new MutationObserver(l => {
        for (const i of l)
            if (i.type === "childList")
                for (const o of i.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && r(o)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(l) {
        const i = {};
        return l.integrity && (i.integrity = l.integrity), l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy), l.crossOrigin === "use-credentials" ? i.credentials = "include" : l.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i
    }

    function r(l) {
        if (l.ep) return;
        l.ep = !0;
        const i = n(l);
        fetch(l.href, i)
    }
})();

function xc(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var wc = {
        exports: {}
    },
    ji = {},
    Sc = {
        exports: {}
    },
    K = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fl = Symbol.for("react.element"),
    hp = Symbol.for("react.portal"),
    mp = Symbol.for("react.fragment"),
    vp = Symbol.for("react.strict_mode"),
    gp = Symbol.for("react.profiler"),
    yp = Symbol.for("react.provider"),
    xp = Symbol.for("react.context"),
    wp = Symbol.for("react.forward_ref"),
    Sp = Symbol.for("react.suspense"),
    Ep = Symbol.for("react.memo"),
    kp = Symbol.for("react.lazy"),
    Iu = Symbol.iterator;

function Cp(e) {
    return e === null || typeof e != "object" ? null : (e = Iu && e[Iu] || e["@@iterator"], typeof e == "function" ? e : null)
}
var Ec = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    },
    kc = Object.assign,
    Cc = {};

function dr(e, t, n) {
    this.props = e, this.context = t, this.refs = Cc, this.updater = n || Ec
}
dr.prototype.isReactComponent = {};
dr.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
};
dr.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function Nc() {}
Nc.prototype = dr.prototype;

function Ca(e, t, n) {
    this.props = e, this.context = t, this.refs = Cc, this.updater = n || Ec
}
var Na = Ca.prototype = new Nc;
Na.constructor = Ca;
kc(Na, dr.prototype);
Na.isPureReactComponent = !0;
var Uu = Array.isArray,
    Pc = Object.prototype.hasOwnProperty,
    Pa = {
        current: null
    },
    jc = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function _c(e, t, n) {
    var r, l = {},
        i = null,
        o = null;
    if (t != null)
        for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (i = "" + t.key), t) Pc.call(t, r) && !jc.hasOwnProperty(r) && (l[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1) l.children = n;
    else if (1 < a) {
        for (var u = Array(a), s = 0; s < a; s++) u[s] = arguments[s + 2];
        l.children = u
    }
    if (e && e.defaultProps)
        for (r in a = e.defaultProps, a) l[r] === void 0 && (l[r] = a[r]);
    return {
        $$typeof: fl,
        type: e,
        key: i,
        ref: o,
        props: l,
        _owner: Pa.current
    }
}

function Np(e, t) {
    return {
        $$typeof: fl,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}

function ja(e) {
    return typeof e == "object" && e !== null && e.$$typeof === fl
}

function Pp(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var Au = /\/+/g;

function Xi(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? Pp("" + e.key) : t.toString(36)
}

function Bl(e, t, n, r, l) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var o = !1;
    if (e === null) o = !0;
    else switch (i) {
        case "string":
        case "number":
            o = !0;
            break;
        case "object":
            switch (e.$$typeof) {
                case fl:
                case hp:
                    o = !0
            }
    }
    if (o) return o = e, l = l(o), e = r === "" ? "." + Xi(o, 0) : r, Uu(l) ? (n = "", e != null && (n = e.replace(Au, "$&/") + "/"), Bl(l, t, n, "", function(s) {
        return s
    })) : l != null && (ja(l) && (l = Np(l, n + (!l.key || o && o.key === l.key ? "" : ("" + l.key).replace(Au, "$&/") + "/") + e)), t.push(l)), 1;
    if (o = 0, r = r === "" ? "." : r + ":", Uu(e))
        for (var a = 0; a < e.length; a++) {
            i = e[a];
            var u = r + Xi(i, a);
            o += Bl(i, t, n, u, l)
        } else if (u = Cp(e), typeof u == "function")
            for (e = u.call(e), a = 0; !(i = e.next()).done;) i = i.value, u = r + Xi(i, a++), o += Bl(i, t, n, u, l);
        else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return o
}

function kl(e, t, n) {
    if (e == null) return e;
    var r = [],
        l = 0;
    return Bl(e, r, "", "", function(i) {
        return t.call(n, i, l++)
    }), r
}

function jp(e) {
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
var Ie = {
        current: null
    },
    $l = {
        transition: null
    },
    _p = {
        ReactCurrentDispatcher: Ie,
        ReactCurrentBatchConfig: $l,
        ReactCurrentOwner: Pa
    };
K.Children = {
    map: kl,
    forEach: function(e, t, n) {
        kl(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return kl(e, function() {
            t++
        }), t
    },
    toArray: function(e) {
        return kl(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!ja(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
K.Component = dr;
K.Fragment = mp;
K.Profiler = gp;
K.PureComponent = Ca;
K.StrictMode = vp;
K.Suspense = Sp;
K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _p;
K.cloneElement = function(e, t, n) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = kc({}, e.props),
        l = e.key,
        i = e.ref,
        o = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (i = t.ref, o = Pa.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var a = e.type.defaultProps;
        for (u in t) Pc.call(t, u) && !jc.hasOwnProperty(u) && (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u])
    }
    var u = arguments.length - 2;
    if (u === 1) r.children = n;
    else if (1 < u) {
        a = Array(u);
        for (var s = 0; s < u; s++) a[s] = arguments[s + 2];
        r.children = a
    }
    return {
        $$typeof: fl,
        type: e.type,
        key: l,
        ref: i,
        props: r,
        _owner: o
    }
};
K.createContext = function(e) {
    return e = {
        $$typeof: xp,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }, e.Provider = {
        $$typeof: yp,
        _context: e
    }, e.Consumer = e
};
K.createElement = _c;
K.createFactory = function(e) {
    var t = _c.bind(null, e);
    return t.type = e, t
};
K.createRef = function() {
    return {
        current: null
    }
};
K.forwardRef = function(e) {
    return {
        $$typeof: wp,
        render: e
    }
};
K.isValidElement = ja;
K.lazy = function(e) {
    return {
        $$typeof: kp,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: jp
    }
};
K.memo = function(e, t) {
    return {
        $$typeof: Ep,
        type: e,
        compare: t === void 0 ? null : t
    }
};
K.startTransition = function(e) {
    var t = $l.transition;
    $l.transition = {};
    try {
        e()
    } finally {
        $l.transition = t
    }
};
K.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.")
};
K.useCallback = function(e, t) {
    return Ie.current.useCallback(e, t)
};
K.useContext = function(e) {
    return Ie.current.useContext(e)
};
K.useDebugValue = function() {};
K.useDeferredValue = function(e) {
    return Ie.current.useDeferredValue(e)
};
K.useEffect = function(e, t) {
    return Ie.current.useEffect(e, t)
};
K.useId = function() {
    return Ie.current.useId()
};
K.useImperativeHandle = function(e, t, n) {
    return Ie.current.useImperativeHandle(e, t, n)
};
K.useInsertionEffect = function(e, t) {
    return Ie.current.useInsertionEffect(e, t)
};
K.useLayoutEffect = function(e, t) {
    return Ie.current.useLayoutEffect(e, t)
};
K.useMemo = function(e, t) {
    return Ie.current.useMemo(e, t)
};
K.useReducer = function(e, t, n) {
    return Ie.current.useReducer(e, t, n)
};
K.useRef = function(e) {
    return Ie.current.useRef(e)
};
K.useState = function(e) {
    return Ie.current.useState(e)
};
K.useSyncExternalStore = function(e, t, n) {
    return Ie.current.useSyncExternalStore(e, t, n)
};
K.useTransition = function() {
    return Ie.current.useTransition()
};
K.version = "18.2.0";
Sc.exports = K;
var P = Sc.exports;
const Rt = xc(P),
    Rp = yc({
        __proto__: null,
        default: Rt
    }, [P]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lp = P,
    Tp = Symbol.for("react.element"),
    Dp = Symbol.for("react.fragment"),
    zp = Object.prototype.hasOwnProperty,
    Mp = Lp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    Op = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function Rc(e, t, n) {
    var r, l = {},
        i = null,
        o = null;
    n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (o = t.ref);
    for (r in t) zp.call(t, r) && !Op.hasOwnProperty(r) && (l[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
    return {
        $$typeof: Tp,
        type: e,
        key: i,
        ref: o,
        props: l,
        _owner: Mp.current
    }
}
ji.Fragment = Dp;
ji.jsx = Rc;
ji.jsxs = Rc;
wc.exports = ji;
var m = wc.exports,
    Po = {},
    Lc = {
        exports: {}
    },
    Ze = {},
    Tc = {
        exports: {}
    },
    Dc = {};
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
    function t(R, A) {
        var $ = R.length;
        R.push(A);
        e: for (; 0 < $;) {
            var Z = $ - 1 >>> 1,
                q = R[Z];
            if (0 < l(q, A)) R[Z] = A, R[$] = q, $ = Z;
            else break e
        }
    }

    function n(R) {
        return R.length === 0 ? null : R[0]
    }

    function r(R) {
        if (R.length === 0) return null;
        var A = R[0],
            $ = R.pop();
        if ($ !== A) {
            R[0] = $;
            e: for (var Z = 0, q = R.length, ct = q >>> 1; Z < ct;) {
                var We = 2 * (Z + 1) - 1,
                    Qe = R[We],
                    ze = We + 1,
                    be = R[ze];
                if (0 > l(Qe, $)) ze < q && 0 > l(be, Qe) ? (R[Z] = be, R[ze] = $, Z = ze) : (R[Z] = Qe, R[We] = $, Z = We);
                else if (ze < q && 0 > l(be, $)) R[Z] = be, R[ze] = $, Z = ze;
                else break e
            }
        }
        return A
    }

    function l(R, A) {
        var $ = R.sortIndex - A.sortIndex;
        return $ !== 0 ? $ : R.id - A.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        e.unstable_now = function() {
            return i.now()
        }
    } else {
        var o = Date,
            a = o.now();
        e.unstable_now = function() {
            return o.now() - a
        }
    }
    var u = [],
        s = [],
        c = 1,
        f = null,
        p = 3,
        E = !1,
        S = !1,
        w = !1,
        j = typeof setTimeout == "function" ? setTimeout : null,
        h = typeof clearTimeout == "function" ? clearTimeout : null,
        d = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function v(R) {
        for (var A = n(s); A !== null;) {
            if (A.callback === null) r(s);
            else if (A.startTime <= R) r(s), A.sortIndex = A.expirationTime, t(u, A);
            else break;
            A = n(s)
        }
    }

    function C(R) {
        if (w = !1, v(R), !S)
            if (n(u) !== null) S = !0, Ut(L);
            else {
                var A = n(s);
                A !== null && At(C, A.startTime - R)
            }
    }

    function L(R, A) {
        S = !1, w && (w = !1, h(T), T = -1), E = !0;
        var $ = p;
        try {
            for (v(A), f = n(u); f !== null && (!(f.expirationTime > A) || R && !Y());) {
                var Z = f.callback;
                if (typeof Z == "function") {
                    f.callback = null, p = f.priorityLevel;
                    var q = Z(f.expirationTime <= A);
                    A = e.unstable_now(), typeof q == "function" ? f.callback = q : f === n(u) && r(u), v(A)
                } else r(u);
                f = n(u)
            }
            if (f !== null) var ct = !0;
            else {
                var We = n(s);
                We !== null && At(C, We.startTime - A), ct = !1
            }
            return ct
        } finally {
            f = null, p = $, E = !1
        }
    }
    var D = !1,
        g = null,
        T = -1,
        I = 5,
        O = -1;

    function Y() {
        return !(e.unstable_now() - O < I)
    }

    function de() {
        if (g !== null) {
            var R = e.unstable_now();
            O = R;
            var A = !0;
            try {
                A = g(!0, R)
            } finally {
                A ? ie() : (D = !1, g = null)
            }
        } else D = !1
    }
    var ie;
    if (typeof d == "function") ie = function() {
        d(de)
    };
    else if (typeof MessageChannel < "u") {
        var Ee = new MessageChannel,
            st = Ee.port2;
        Ee.port1.onmessage = de, ie = function() {
            st.postMessage(null)
        }
    } else ie = function() {
        j(de, 0)
    };

    function Ut(R) {
        g = R, D || (D = !0, ie())
    }

    function At(R, A) {
        T = j(function() {
            R(e.unstable_now())
        }, A)
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(R) {
        R.callback = null
    }, e.unstable_continueExecution = function() {
        S || E || (S = !0, Ut(L))
    }, e.unstable_forceFrameRate = function(R) {
        0 > R || 125 < R ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : I = 0 < R ? Math.floor(1e3 / R) : 5
    }, e.unstable_getCurrentPriorityLevel = function() {
        return p
    }, e.unstable_getFirstCallbackNode = function() {
        return n(u)
    }, e.unstable_next = function(R) {
        switch (p) {
            case 1:
            case 2:
            case 3:
                var A = 3;
                break;
            default:
                A = p
        }
        var $ = p;
        p = A;
        try {
            return R()
        } finally {
            p = $
        }
    }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(R, A) {
        switch (R) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                R = 3
        }
        var $ = p;
        p = R;
        try {
            return A()
        } finally {
            p = $
        }
    }, e.unstable_scheduleCallback = function(R, A, $) {
        var Z = e.unstable_now();
        switch (typeof $ == "object" && $ !== null ? ($ = $.delay, $ = typeof $ == "number" && 0 < $ ? Z + $ : Z) : $ = Z, R) {
            case 1:
                var q = -1;
                break;
            case 2:
                q = 250;
                break;
            case 5:
                q = 1073741823;
                break;
            case 4:
                q = 1e4;
                break;
            default:
                q = 5e3
        }
        return q = $ + q, R = {
            id: c++,
            callback: A,
            priorityLevel: R,
            startTime: $,
            expirationTime: q,
            sortIndex: -1
        }, $ > Z ? (R.sortIndex = $, t(s, R), n(u) === null && R === n(s) && (w ? (h(T), T = -1) : w = !0, At(C, $ - Z))) : (R.sortIndex = q, t(u, R), S || E || (S = !0, Ut(L))), R
    }, e.unstable_shouldYield = Y, e.unstable_wrapCallback = function(R) {
        var A = p;
        return function() {
            var $ = p;
            p = A;
            try {
                return R.apply(this, arguments)
            } finally {
                p = $
            }
        }
    }
})(Dc);
Tc.exports = Dc;
var Fp = Tc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zc = P,
    Je = Fp;

function N(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Mc = new Set,
    Kr = {};

function jn(e, t) {
    rr(e, t), rr(e + "Capture", t)
}

function rr(e, t) {
    for (Kr[e] = t, e = 0; e < t.length; e++) Mc.add(t[e])
}
var Dt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    jo = Object.prototype.hasOwnProperty,
    Ip = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Bu = {},
    $u = {};

function Up(e) {
    return jo.call($u, e) ? !0 : jo.call(Bu, e) ? !1 : Ip.test(e) ? $u[e] = !0 : (Bu[e] = !0, !1)
}

function Ap(e, t, n, r) {
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

function Bp(e, t, n, r) {
    if (t === null || typeof t > "u" || Ap(e, t, n, r)) return !0;
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

function Ue(e, t, n, r, l, i, o) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = o
}
var _e = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    _e[e] = new Ue(e, 0, !1, e, null, !1, !1)
});
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
].forEach(function(e) {
    var t = e[0];
    _e[t] = new Ue(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    _e[e] = new Ue(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    _e[e] = new Ue(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    _e[e] = new Ue(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    _e[e] = new Ue(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function(e) {
    _e[e] = new Ue(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    _e[e] = new Ue(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function(e) {
    _e[e] = new Ue(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var _a = /[\-:]([a-z])/g;

function Ra(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(_a, Ra);
    _e[t] = new Ue(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(_a, Ra);
    _e[t] = new Ue(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(_a, Ra);
    _e[t] = new Ue(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    _e[e] = new Ue(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
_e.xlinkHref = new Ue("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
    _e[e] = new Ue(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function La(e, t, n, r) {
    var l = _e.hasOwnProperty(t) ? _e[t] : null;
    (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Bp(t, n, l, r) && (n = null), r || l === null ? Up(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Ft = zc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Cl = Symbol.for("react.element"),
    Un = Symbol.for("react.portal"),
    An = Symbol.for("react.fragment"),
    Ta = Symbol.for("react.strict_mode"),
    _o = Symbol.for("react.profiler"),
    Oc = Symbol.for("react.provider"),
    Fc = Symbol.for("react.context"),
    Da = Symbol.for("react.forward_ref"),
    Ro = Symbol.for("react.suspense"),
    Lo = Symbol.for("react.suspense_list"),
    za = Symbol.for("react.memo"),
    Qt = Symbol.for("react.lazy"),
    Ic = Symbol.for("react.offscreen"),
    Hu = Symbol.iterator;

function Sr(e) {
    return e === null || typeof e != "object" ? null : (e = Hu && e[Hu] || e["@@iterator"], typeof e == "function" ? e : null)
}
var se = Object.assign,
    Ji;

function Dr(e) {
    if (Ji === void 0) try {
        throw Error()
    } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        Ji = t && t[1] || ""
    }
    return `
` + Ji + e
}
var Zi = !1;

function qi(e, t) {
    if (!e || Zi) return "";
    Zi = !0;
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
                } catch (s) {
                    var r = s
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (s) {
                    r = s
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (s) {
                r = s
            }
            e()
        }
    } catch (s) {
        if (s && r && typeof s.stack == "string") {
            for (var l = s.stack.split(`
`), i = r.stack.split(`
`), o = l.length - 1, a = i.length - 1; 1 <= o && 0 <= a && l[o] !== i[a];) a--;
            for (; 1 <= o && 0 <= a; o--, a--)
                if (l[o] !== i[a]) {
                    if (o !== 1 || a !== 1)
                        do
                            if (o--, a--, 0 > a || l[o] !== i[a]) {
                                var u = `
` + l[o].replace(" at new ", " at ");
                                return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u
                            }
                    while (1 <= o && 0 <= a);
                    break
                }
        }
    } finally {
        Zi = !1, Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? Dr(e) : ""
}

function $p(e) {
    switch (e.tag) {
        case 5:
            return Dr(e.type);
        case 16:
            return Dr("Lazy");
        case 13:
            return Dr("Suspense");
        case 19:
            return Dr("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = qi(e.type, !1), e;
        case 11:
            return e = qi(e.type.render, !1), e;
        case 1:
            return e = qi(e.type, !0), e;
        default:
            return ""
    }
}

function To(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case An:
            return "Fragment";
        case Un:
            return "Portal";
        case _o:
            return "Profiler";
        case Ta:
            return "StrictMode";
        case Ro:
            return "Suspense";
        case Lo:
            return "SuspenseList"
    }
    if (typeof e == "object") switch (e.$$typeof) {
        case Fc:
            return (e.displayName || "Context") + ".Consumer";
        case Oc:
            return (e._context.displayName || "Context") + ".Provider";
        case Da:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case za:
            return t = e.displayName || null, t !== null ? t : To(e.type) || "Memo";
        case Qt:
            t = e._payload, e = e._init;
            try {
                return To(e(t))
            } catch {}
    }
    return null
}

function Hp(e) {
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
            return To(t);
        case 8:
            return t === Ta ? "StrictMode" : "Mode";
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

function on(e) {
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

function Uc(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function Vp(e) {
    var t = Uc(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var l = n.get,
            i = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return l.call(this)
            },
            set: function(o) {
                r = "" + o, i.call(this, o)
            }
        }), Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }), {
            getValue: function() {
                return r
            },
            setValue: function(o) {
                r = "" + o
            },
            stopTracking: function() {
                e._valueTracker = null, delete e[t]
            }
        }
    }
}

function Nl(e) {
    e._valueTracker || (e._valueTracker = Vp(e))
}

function Ac(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return e && (r = Uc(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function bl(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}

function Do(e, t) {
    var n = t.checked;
    return se({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ? ? e._wrapperState.initialChecked
    })
}

function Vu(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    n = on(t.value != null ? t.value : n), e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}

function Bc(e, t) {
    t = t.checked, t != null && La(e, "checked", t, !1)
}

function zo(e, t) {
    Bc(e, t);
    var n = on(t.value),
        r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? Mo(e, t.type, n) : t.hasOwnProperty("defaultValue") && Mo(e, t.type, on(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function Wu(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function Mo(e, t, n) {
    (t !== "number" || bl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var zr = Array.isArray;

function Zn(e, t, n, r) {
    if (e = e.options, t) {
        t = {};
        for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
        for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + on(n), t = null, l = 0; l < e.length; l++) {
            if (e[l].value === n) {
                e[l].selected = !0, r && (e[l].defaultSelected = !0);
                return
            }
            t !== null || e[l].disabled || (t = e[l])
        }
        t !== null && (t.selected = !0)
    }
}

function Oo(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(N(91));
    return se({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}

function Qu(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children, t = t.defaultValue, n != null) {
            if (t != null) throw Error(N(92));
            if (zr(n)) {
                if (1 < n.length) throw Error(N(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""), n = t
    }
    e._wrapperState = {
        initialValue: on(n)
    }
}

function $c(e, t) {
    var n = on(t.value),
        r = on(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function Ku(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function Hc(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function Fo(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Hc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Pl, Vc = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, l)
        })
    } : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
        for (Pl = Pl || document.createElement("div"), Pl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Pl.firstChild; e.firstChild;) e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild)
    }
});

function Yr(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Fr = {
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
    Wp = ["Webkit", "ms", "Moz", "O"];
Object.keys(Fr).forEach(function(e) {
    Wp.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), Fr[t] = Fr[e]
    })
});

function Wc(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Fr.hasOwnProperty(e) && Fr[e] ? ("" + t).trim() : t + "px"
}

function Qc(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                l = Wc(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l
        }
}
var Qp = se({
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

function Io(e, t) {
    if (t) {
        if (Qp[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(N(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(N(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(N(61))
        }
        if (t.style != null && typeof t.style != "object") throw Error(N(62))
    }
}

function Uo(e, t) {
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
var Ao = null;

function Ma(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var Bo = null,
    qn = null,
    bn = null;

function Yu(e) {
    if (e = ml(e)) {
        if (typeof Bo != "function") throw Error(N(280));
        var t = e.stateNode;
        t && (t = Di(t), Bo(e.stateNode, e.type, t))
    }
}

function Kc(e) {
    qn ? bn ? bn.push(e) : bn = [e] : qn = e
}

function Yc() {
    if (qn) {
        var e = qn,
            t = bn;
        if (bn = qn = null, Yu(e), t)
            for (e = 0; e < t.length; e++) Yu(t[e])
    }
}

function Gc(e, t) {
    return e(t)
}

function Xc() {}
var bi = !1;

function Jc(e, t, n) {
    if (bi) return e(t, n);
    bi = !0;
    try {
        return Gc(e, t, n)
    } finally {
        bi = !1, (qn !== null || bn !== null) && (Xc(), Yc())
    }
}

function Gr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Di(n);
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
    if (n && typeof n != "function") throw Error(N(231, t, typeof n));
    return n
}
var $o = !1;
if (Dt) try {
    var Er = {};
    Object.defineProperty(Er, "passive", {
        get: function() {
            $o = !0
        }
    }), window.addEventListener("test", Er, Er), window.removeEventListener("test", Er, Er)
} catch {
    $o = !1
}

function Kp(e, t, n, r, l, i, o, a, u) {
    var s = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, s)
    } catch (c) {
        this.onError(c)
    }
}
var Ir = !1,
    ei = null,
    ti = !1,
    Ho = null,
    Yp = {
        onError: function(e) {
            Ir = !0, ei = e
        }
    };

function Gp(e, t, n, r, l, i, o, a, u) {
    Ir = !1, ei = null, Kp.apply(Yp, arguments)
}

function Xp(e, t, n, r, l, i, o, a, u) {
    if (Gp.apply(this, arguments), Ir) {
        if (Ir) {
            var s = ei;
            Ir = !1, ei = null
        } else throw Error(N(198));
        ti || (ti = !0, Ho = s)
    }
}

function _n(e) {
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

function Zc(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
    }
    return null
}

function Gu(e) {
    if (_n(e) !== e) throw Error(N(188))
}

function Jp(e) {
    var t = e.alternate;
    if (!t) {
        if (t = _n(e), t === null) throw Error(N(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t;;) {
        var l = n.return;
        if (l === null) break;
        var i = l.alternate;
        if (i === null) {
            if (r = l.return, r !== null) {
                n = r;
                continue
            }
            break
        }
        if (l.child === i.child) {
            for (i = l.child; i;) {
                if (i === n) return Gu(l), e;
                if (i === r) return Gu(l), t;
                i = i.sibling
            }
            throw Error(N(188))
        }
        if (n.return !== r.return) n = l, r = i;
        else {
            for (var o = !1, a = l.child; a;) {
                if (a === n) {
                    o = !0, n = l, r = i;
                    break
                }
                if (a === r) {
                    o = !0, r = l, n = i;
                    break
                }
                a = a.sibling
            }
            if (!o) {
                for (a = i.child; a;) {
                    if (a === n) {
                        o = !0, n = i, r = l;
                        break
                    }
                    if (a === r) {
                        o = !0, r = i, n = l;
                        break
                    }
                    a = a.sibling
                }
                if (!o) throw Error(N(189))
            }
        }
        if (n.alternate !== r) throw Error(N(190))
    }
    if (n.tag !== 3) throw Error(N(188));
    return n.stateNode.current === n ? e : t
}

function qc(e) {
    return e = Jp(e), e !== null ? bc(e) : null
}

function bc(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
        var t = bc(e);
        if (t !== null) return t;
        e = e.sibling
    }
    return null
}
var ed = Je.unstable_scheduleCallback,
    Xu = Je.unstable_cancelCallback,
    Zp = Je.unstable_shouldYield,
    qp = Je.unstable_requestPaint,
    pe = Je.unstable_now,
    bp = Je.unstable_getCurrentPriorityLevel,
    Oa = Je.unstable_ImmediatePriority,
    td = Je.unstable_UserBlockingPriority,
    ni = Je.unstable_NormalPriority,
    eh = Je.unstable_LowPriority,
    nd = Je.unstable_IdlePriority,
    _i = null,
    kt = null;

function th(e) {
    if (kt && typeof kt.onCommitFiberRoot == "function") try {
        kt.onCommitFiberRoot(_i, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var vt = Math.clz32 ? Math.clz32 : lh,
    nh = Math.log,
    rh = Math.LN2;

function lh(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (nh(e) / rh | 0) | 0
}
var jl = 64,
    _l = 4194304;

function Mr(e) {
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

function ri(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        l = e.suspendedLanes,
        i = e.pingedLanes,
        o = n & 268435455;
    if (o !== 0) {
        var a = o & ~l;
        a !== 0 ? r = Mr(a) : (i &= o, i !== 0 && (r = Mr(i)))
    } else o = n & ~l, o !== 0 ? r = Mr(o) : i !== 0 && (r = Mr(i));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & l) && (l = r & -r, i = t & -t, l >= i || l === 16 && (i & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
        for (e = e.entanglements, t &= r; 0 < t;) n = 31 - vt(t), l = 1 << n, r |= e[n], t &= ~l;
    return r
}

function ih(e, t) {
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

function oh(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i;) {
        var o = 31 - vt(i),
            a = 1 << o,
            u = l[o];
        u === -1 ? (!(a & n) || a & r) && (l[o] = ih(a, t)) : u <= t && (e.expiredLanes |= a), i &= ~a
    }
}

function Vo(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function rd() {
    var e = jl;
    return jl <<= 1, !(jl & 4194240) && (jl = 64), e
}

function eo(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t
}

function pl(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - vt(t), e[t] = n
}

function ah(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
        var l = 31 - vt(n),
            i = 1 << l;
        t[l] = 0, r[l] = -1, e[l] = -1, n &= ~i
    }
}

function Fa(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - vt(n),
            l = 1 << r;
        l & t | e[r] & t && (e[r] |= t), n &= ~l
    }
}
var J = 0;

function ld(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var id, Ia, od, ad, ud, Wo = !1,
    Rl = [],
    Zt = null,
    qt = null,
    bt = null,
    Xr = new Map,
    Jr = new Map,
    Yt = [],
    uh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function Ju(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            Zt = null;
            break;
        case "dragenter":
        case "dragleave":
            qt = null;
            break;
        case "mouseover":
        case "mouseout":
            bt = null;
            break;
        case "pointerover":
        case "pointerout":
            Xr.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Jr.delete(t.pointerId)
    }
}

function kr(e, t, n, r, l, i) {
    return e === null || e.nativeEvent !== i ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l]
    }, t !== null && (t = ml(t), t !== null && Ia(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e)
}

function sh(e, t, n, r, l) {
    switch (t) {
        case "focusin":
            return Zt = kr(Zt, e, t, n, r, l), !0;
        case "dragenter":
            return qt = kr(qt, e, t, n, r, l), !0;
        case "mouseover":
            return bt = kr(bt, e, t, n, r, l), !0;
        case "pointerover":
            var i = l.pointerId;
            return Xr.set(i, kr(Xr.get(i) || null, e, t, n, r, l)), !0;
        case "gotpointercapture":
            return i = l.pointerId, Jr.set(i, kr(Jr.get(i) || null, e, t, n, r, l)), !0
    }
    return !1
}

function sd(e) {
    var t = hn(e.target);
    if (t !== null) {
        var n = _n(t);
        if (n !== null) {
            if (t = n.tag, t === 13) {
                if (t = Zc(n), t !== null) {
                    e.blockedOn = t, ud(e.priority, function() {
                        od(n)
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

function Hl(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = Qo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            Ao = r, n.target.dispatchEvent(r), Ao = null
        } else return t = ml(n), t !== null && Ia(t), e.blockedOn = n, !1;
        t.shift()
    }
    return !0
}

function Zu(e, t, n) {
    Hl(e) && n.delete(t)
}

function ch() {
    Wo = !1, Zt !== null && Hl(Zt) && (Zt = null), qt !== null && Hl(qt) && (qt = null), bt !== null && Hl(bt) && (bt = null), Xr.forEach(Zu), Jr.forEach(Zu)
}

function Cr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Wo || (Wo = !0, Je.unstable_scheduleCallback(Je.unstable_NormalPriority, ch)))
}

function Zr(e) {
    function t(l) {
        return Cr(l, e)
    }
    if (0 < Rl.length) {
        Cr(Rl[0], e);
        for (var n = 1; n < Rl.length; n++) {
            var r = Rl[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Zt !== null && Cr(Zt, e), qt !== null && Cr(qt, e), bt !== null && Cr(bt, e), Xr.forEach(t), Jr.forEach(t), n = 0; n < Yt.length; n++) r = Yt[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Yt.length && (n = Yt[0], n.blockedOn === null);) sd(n), n.blockedOn === null && Yt.shift()
}
var er = Ft.ReactCurrentBatchConfig,
    li = !0;

function dh(e, t, n, r) {
    var l = J,
        i = er.transition;
    er.transition = null;
    try {
        J = 1, Ua(e, t, n, r)
    } finally {
        J = l, er.transition = i
    }
}

function fh(e, t, n, r) {
    var l = J,
        i = er.transition;
    er.transition = null;
    try {
        J = 4, Ua(e, t, n, r)
    } finally {
        J = l, er.transition = i
    }
}

function Ua(e, t, n, r) {
    if (li) {
        var l = Qo(e, t, n, r);
        if (l === null) co(e, t, r, ii, n), Ju(e, r);
        else if (sh(l, e, t, n, r)) r.stopPropagation();
        else if (Ju(e, r), t & 4 && -1 < uh.indexOf(e)) {
            for (; l !== null;) {
                var i = ml(l);
                if (i !== null && id(i), i = Qo(e, t, n, r), i === null && co(e, t, r, ii, n), i === l) break;
                l = i
            }
            l !== null && r.stopPropagation()
        } else co(e, t, r, null, n)
    }
}
var ii = null;

function Qo(e, t, n, r) {
    if (ii = null, e = Ma(r), e = hn(e), e !== null)
        if (t = _n(e), t === null) e = null;
        else if (n = t.tag, n === 13) {
        if (e = Zc(t), e !== null) return e;
        e = null
    } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null
    } else t !== e && (e = null);
    return ii = e, null
}

function cd(e) {
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
            switch (bp()) {
                case Oa:
                    return 1;
                case td:
                    return 4;
                case ni:
                case eh:
                    return 16;
                case nd:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}
var Xt = null,
    Aa = null,
    Vl = null;

function dd() {
    if (Vl) return Vl;
    var e, t = Aa,
        n = t.length,
        r, l = "value" in Xt ? Xt.value : Xt.textContent,
        i = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
    return Vl = l.slice(e, 1 < r ? 1 - r : void 0)
}

function Wl(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function Ll() {
    return !0
}

function qu() {
    return !1
}

function qe(e) {
    function t(n, r, l, i, o) {
        this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = i, this.target = o, this.currentTarget = null;
        for (var a in e) e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(i) : i[a]);
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Ll : qu, this.isPropagationStopped = qu, this
    }
    return se(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Ll)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Ll)
        },
        persist: function() {},
        isPersistent: Ll
    }), t
}
var fr = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    },
    Ba = qe(fr),
    hl = se({}, fr, {
        view: 0,
        detail: 0
    }),
    ph = qe(hl),
    to, no, Nr, Ri = se({}, hl, {
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
        getModifierState: $a,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== Nr && (Nr && e.type === "mousemove" ? (to = e.screenX - Nr.screenX, no = e.screenY - Nr.screenY) : no = to = 0, Nr = e), to)
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : no
        }
    }),
    bu = qe(Ri),
    hh = se({}, Ri, {
        dataTransfer: 0
    }),
    mh = qe(hh),
    vh = se({}, hl, {
        relatedTarget: 0
    }),
    ro = qe(vh),
    gh = se({}, fr, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    yh = qe(gh),
    xh = se({}, fr, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }),
    wh = qe(xh),
    Sh = se({}, fr, {
        data: 0
    }),
    es = qe(Sh),
    Eh = {
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
    kh = {
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
    Ch = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };

function Nh(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Ch[e]) ? !!t[e] : !1
}

function $a() {
    return Nh
}
var Ph = se({}, hl, {
        key: function(e) {
            if (e.key) {
                var t = Eh[e.key] || e.key;
                if (t !== "Unidentified") return t
            }
            return e.type === "keypress" ? (e = Wl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? kh[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: $a,
        charCode: function(e) {
            return e.type === "keypress" ? Wl(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? Wl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    }),
    jh = qe(Ph),
    _h = se({}, Ri, {
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
    ts = qe(_h),
    Rh = se({}, hl, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: $a
    }),
    Lh = qe(Rh),
    Th = se({}, fr, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    Dh = qe(Th),
    zh = se({}, Ri, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    }),
    Mh = qe(zh),
    Oh = [9, 13, 27, 32],
    Ha = Dt && "CompositionEvent" in window,
    Ur = null;
Dt && "documentMode" in document && (Ur = document.documentMode);
var Fh = Dt && "TextEvent" in window && !Ur,
    fd = Dt && (!Ha || Ur && 8 < Ur && 11 >= Ur),
    ns = " ",
    rs = !1;

function pd(e, t) {
    switch (e) {
        case "keyup":
            return Oh.indexOf(t.keyCode) !== -1;
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

function hd(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var Bn = !1;

function Ih(e, t) {
    switch (e) {
        case "compositionend":
            return hd(t);
        case "keypress":
            return t.which !== 32 ? null : (rs = !0, ns);
        case "textInput":
            return e = t.data, e === ns && rs ? null : e;
        default:
            return null
    }
}

function Uh(e, t) {
    if (Bn) return e === "compositionend" || !Ha && pd(e, t) ? (e = dd(), Vl = Aa = Xt = null, Bn = !1, e) : null;
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
            return fd && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}
var Ah = {
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

function ls(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Ah[e.type] : t === "textarea"
}

function md(e, t, n, r) {
    Kc(r), t = oi(t, "onChange"), 0 < t.length && (n = new Ba("onChange", "change", null, n, r), e.push({
        event: n,
        listeners: t
    }))
}
var Ar = null,
    qr = null;

function Bh(e) {
    Pd(e, 0)
}

function Li(e) {
    var t = Vn(e);
    if (Ac(t)) return e
}

function $h(e, t) {
    if (e === "change") return t
}
var vd = !1;
if (Dt) {
    var lo;
    if (Dt) {
        var io = "oninput" in document;
        if (!io) {
            var is = document.createElement("div");
            is.setAttribute("oninput", "return;"), io = typeof is.oninput == "function"
        }
        lo = io
    } else lo = !1;
    vd = lo && (!document.documentMode || 9 < document.documentMode)
}

function os() {
    Ar && (Ar.detachEvent("onpropertychange", gd), qr = Ar = null)
}

function gd(e) {
    if (e.propertyName === "value" && Li(qr)) {
        var t = [];
        md(t, qr, e, Ma(e)), Jc(Bh, t)
    }
}

function Hh(e, t, n) {
    e === "focusin" ? (os(), Ar = t, qr = n, Ar.attachEvent("onpropertychange", gd)) : e === "focusout" && os()
}

function Vh(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Li(qr)
}

function Wh(e, t) {
    if (e === "click") return Li(t)
}

function Qh(e, t) {
    if (e === "input" || e === "change") return Li(t)
}

function Kh(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var yt = typeof Object.is == "function" ? Object.is : Kh;

function br(e, t) {
    if (yt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var l = n[r];
        if (!jo.call(t, l) || !yt(e[l], t[l])) return !1
    }
    return !0
}

function as(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
}

function us(e, t) {
    var n = as(e);
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
        n = as(n)
    }
}

function yd(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? yd(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function xd() {
    for (var e = window, t = bl(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n) e = t.contentWindow;
        else break;
        t = bl(e.document)
    }
    return t
}

function Va(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function Yh(e) {
    var t = xd(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && yd(n.ownerDocument.documentElement, n)) {
        if (r !== null && Va(n)) {
            if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                e = e.getSelection();
                var l = n.textContent.length,
                    i = Math.min(r.start, l);
                r = r.end === void 0 ? i : Math.min(r.end, l), !e.extend && i > r && (l = r, r = i, i = l), l = us(n, i);
                var o = us(n, r);
                l && o && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)))
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
var Gh = Dt && "documentMode" in document && 11 >= document.documentMode,
    $n = null,
    Ko = null,
    Br = null,
    Yo = !1;

function ss(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Yo || $n == null || $n !== bl(r) || (r = $n, "selectionStart" in r && Va(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }), Br && br(Br, r) || (Br = r, r = oi(Ko, "onSelect"), 0 < r.length && (t = new Ba("onSelect", "select", null, t, n), e.push({
        event: t,
        listeners: r
    }), t.target = $n)))
}

function Tl(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}
var Hn = {
        animationend: Tl("Animation", "AnimationEnd"),
        animationiteration: Tl("Animation", "AnimationIteration"),
        animationstart: Tl("Animation", "AnimationStart"),
        transitionend: Tl("Transition", "TransitionEnd")
    },
    oo = {},
    wd = {};
Dt && (wd = document.createElement("div").style, "AnimationEvent" in window || (delete Hn.animationend.animation, delete Hn.animationiteration.animation, delete Hn.animationstart.animation), "TransitionEvent" in window || delete Hn.transitionend.transition);

function Ti(e) {
    if (oo[e]) return oo[e];
    if (!Hn[e]) return e;
    var t = Hn[e],
        n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in wd) return oo[e] = t[n];
    return e
}
var Sd = Ti("animationend"),
    Ed = Ti("animationiteration"),
    kd = Ti("animationstart"),
    Cd = Ti("transitionend"),
    Nd = new Map,
    cs = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function un(e, t) {
    Nd.set(e, t), jn(t, [e])
}
for (var ao = 0; ao < cs.length; ao++) {
    var uo = cs[ao],
        Xh = uo.toLowerCase(),
        Jh = uo[0].toUpperCase() + uo.slice(1);
    un(Xh, "on" + Jh)
}
un(Sd, "onAnimationEnd");
un(Ed, "onAnimationIteration");
un(kd, "onAnimationStart");
un("dblclick", "onDoubleClick");
un("focusin", "onFocus");
un("focusout", "onBlur");
un(Cd, "onTransitionEnd");
rr("onMouseEnter", ["mouseout", "mouseover"]);
rr("onMouseLeave", ["mouseout", "mouseover"]);
rr("onPointerEnter", ["pointerout", "pointerover"]);
rr("onPointerLeave", ["pointerout", "pointerover"]);
jn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
jn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
jn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
jn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
jn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
jn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Or = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    Zh = new Set("cancel close invalid load scroll toggle".split(" ").concat(Or));

function ds(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, Xp(r, t, void 0, e), e.currentTarget = null
}

function Pd(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            l = r.event;
        r = r.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                    var a = r[o],
                        u = a.instance,
                        s = a.currentTarget;
                    if (a = a.listener, u !== i && l.isPropagationStopped()) break e;
                    ds(l, a, s), i = u
                } else
                    for (o = 0; o < r.length; o++) {
                        if (a = r[o], u = a.instance, s = a.currentTarget, a = a.listener, u !== i && l.isPropagationStopped()) break e;
                        ds(l, a, s), i = u
                    }
        }
    }
    if (ti) throw e = Ho, ti = !1, Ho = null, e
}

function ee(e, t) {
    var n = t[qo];
    n === void 0 && (n = t[qo] = new Set);
    var r = e + "__bubble";
    n.has(r) || (jd(t, e, 2, !1), n.add(r))
}

function so(e, t, n) {
    var r = 0;
    t && (r |= 4), jd(n, e, r, t)
}
var Dl = "_reactListening" + Math.random().toString(36).slice(2);

function el(e) {
    if (!e[Dl]) {
        e[Dl] = !0, Mc.forEach(function(n) {
            n !== "selectionchange" && (Zh.has(n) || so(n, !1, e), so(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Dl] || (t[Dl] = !0, so("selectionchange", !1, t))
    }
}

function jd(e, t, n, r) {
    switch (cd(t)) {
        case 1:
            var l = dh;
            break;
        case 4:
            l = fh;
            break;
        default:
            l = Ua
    }
    n = l.bind(null, t, n, e), l = void 0, !$o || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: l
    }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, {
        passive: l
    }) : e.addEventListener(t, n, !1)
}

function co(e, t, n, r, l) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null) e: for (;;) {
        if (r === null) return;
        var o = r.tag;
        if (o === 3 || o === 4) {
            var a = r.stateNode.containerInfo;
            if (a === l || a.nodeType === 8 && a.parentNode === l) break;
            if (o === 4)
                for (o = r.return; o !== null;) {
                    var u = o.tag;
                    if ((u === 3 || u === 4) && (u = o.stateNode.containerInfo, u === l || u.nodeType === 8 && u.parentNode === l)) return;
                    o = o.return
                }
            for (; a !== null;) {
                if (o = hn(a), o === null) return;
                if (u = o.tag, u === 5 || u === 6) {
                    r = i = o;
                    continue e
                }
                a = a.parentNode
            }
        }
        r = r.return
    }
    Jc(function() {
        var s = i,
            c = Ma(n),
            f = [];
        e: {
            var p = Nd.get(e);
            if (p !== void 0) {
                var E = Ba,
                    S = e;
                switch (e) {
                    case "keypress":
                        if (Wl(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        E = jh;
                        break;
                    case "focusin":
                        S = "focus", E = ro;
                        break;
                    case "focusout":
                        S = "blur", E = ro;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        E = ro;
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
                        E = bu;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        E = mh;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        E = Lh;
                        break;
                    case Sd:
                    case Ed:
                    case kd:
                        E = yh;
                        break;
                    case Cd:
                        E = Dh;
                        break;
                    case "scroll":
                        E = ph;
                        break;
                    case "wheel":
                        E = Mh;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        E = wh;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        E = ts
                }
                var w = (t & 4) !== 0,
                    j = !w && e === "scroll",
                    h = w ? p !== null ? p + "Capture" : null : p;
                w = [];
                for (var d = s, v; d !== null;) {
                    v = d;
                    var C = v.stateNode;
                    if (v.tag === 5 && C !== null && (v = C, h !== null && (C = Gr(d, h), C != null && w.push(tl(d, C, v)))), j) break;
                    d = d.return
                }
                0 < w.length && (p = new E(p, S, null, n, c), f.push({
                    event: p,
                    listeners: w
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (p = e === "mouseover" || e === "pointerover", E = e === "mouseout" || e === "pointerout", p && n !== Ao && (S = n.relatedTarget || n.fromElement) && (hn(S) || S[zt])) break e;
                if ((E || p) && (p = c.window === c ? c : (p = c.ownerDocument) ? p.defaultView || p.parentWindow : window, E ? (S = n.relatedTarget || n.toElement, E = s, S = S ? hn(S) : null, S !== null && (j = _n(S), S !== j || S.tag !== 5 && S.tag !== 6) && (S = null)) : (E = null, S = s), E !== S)) {
                    if (w = bu, C = "onMouseLeave", h = "onMouseEnter", d = "mouse", (e === "pointerout" || e === "pointerover") && (w = ts, C = "onPointerLeave", h = "onPointerEnter", d = "pointer"), j = E == null ? p : Vn(E), v = S == null ? p : Vn(S), p = new w(C, d + "leave", E, n, c), p.target = j, p.relatedTarget = v, C = null, hn(c) === s && (w = new w(h, d + "enter", S, n, c), w.target = v, w.relatedTarget = j, C = w), j = C, E && S) t: {
                        for (w = E, h = S, d = 0, v = w; v; v = Mn(v)) d++;
                        for (v = 0, C = h; C; C = Mn(C)) v++;
                        for (; 0 < d - v;) w = Mn(w),
                        d--;
                        for (; 0 < v - d;) h = Mn(h),
                        v--;
                        for (; d--;) {
                            if (w === h || h !== null && w === h.alternate) break t;
                            w = Mn(w), h = Mn(h)
                        }
                        w = null
                    }
                    else w = null;
                    E !== null && fs(f, p, E, w, !1), S !== null && j !== null && fs(f, j, S, w, !0)
                }
            }
            e: {
                if (p = s ? Vn(s) : window, E = p.nodeName && p.nodeName.toLowerCase(), E === "select" || E === "input" && p.type === "file") var L = $h;
                else if (ls(p))
                    if (vd) L = Qh;
                    else {
                        L = Vh;
                        var D = Hh
                    }
                else(E = p.nodeName) && E.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (L = Wh);
                if (L && (L = L(e, s))) {
                    md(f, L, n, c);
                    break e
                }
                D && D(e, p, s),
                e === "focusout" && (D = p._wrapperState) && D.controlled && p.type === "number" && Mo(p, "number", p.value)
            }
            switch (D = s ? Vn(s) : window, e) {
                case "focusin":
                    (ls(D) || D.contentEditable === "true") && ($n = D, Ko = s, Br = null);
                    break;
                case "focusout":
                    Br = Ko = $n = null;
                    break;
                case "mousedown":
                    Yo = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Yo = !1, ss(f, n, c);
                    break;
                case "selectionchange":
                    if (Gh) break;
                case "keydown":
                case "keyup":
                    ss(f, n, c)
            }
            var g;
            if (Ha) e: {
                switch (e) {
                    case "compositionstart":
                        var T = "onCompositionStart";
                        break e;
                    case "compositionend":
                        T = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        T = "onCompositionUpdate";
                        break e
                }
                T = void 0
            }
            else Bn ? pd(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");T && (fd && n.locale !== "ko" && (Bn || T !== "onCompositionStart" ? T === "onCompositionEnd" && Bn && (g = dd()) : (Xt = c, Aa = "value" in Xt ? Xt.value : Xt.textContent, Bn = !0)), D = oi(s, T), 0 < D.length && (T = new es(T, e, null, n, c), f.push({
                event: T,
                listeners: D
            }), g ? T.data = g : (g = hd(n), g !== null && (T.data = g)))),
            (g = Fh ? Ih(e, n) : Uh(e, n)) && (s = oi(s, "onBeforeInput"), 0 < s.length && (c = new es("onBeforeInput", "beforeinput", null, n, c), f.push({
                event: c,
                listeners: s
            }), c.data = g))
        }
        Pd(f, t)
    })
}

function tl(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}

function oi(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
        var l = e,
            i = l.stateNode;
        l.tag === 5 && i !== null && (l = i, i = Gr(e, n), i != null && r.unshift(tl(e, i, l)), i = Gr(e, t), i != null && r.push(tl(e, i, l))), e = e.return
    }
    return r
}

function Mn(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null
}

function fs(e, t, n, r, l) {
    for (var i = t._reactName, o = []; n !== null && n !== r;) {
        var a = n,
            u = a.alternate,
            s = a.stateNode;
        if (u !== null && u === r) break;
        a.tag === 5 && s !== null && (a = s, l ? (u = Gr(n, i), u != null && o.unshift(tl(n, u, a))) : l || (u = Gr(n, i), u != null && o.push(tl(n, u, a)))), n = n.return
    }
    o.length !== 0 && e.push({
        event: t,
        listeners: o
    })
}
var qh = /\r\n?/g,
    bh = /\u0000|\uFFFD/g;

function ps(e) {
    return (typeof e == "string" ? e : "" + e).replace(qh, `
`).replace(bh, "")
}

function zl(e, t, n) {
    if (t = ps(t), ps(e) !== t && n) throw Error(N(425))
}

function ai() {}
var Go = null,
    Xo = null;

function Jo(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Zo = typeof setTimeout == "function" ? setTimeout : void 0,
    em = typeof clearTimeout == "function" ? clearTimeout : void 0,
    hs = typeof Promise == "function" ? Promise : void 0,
    tm = typeof queueMicrotask == "function" ? queueMicrotask : typeof hs < "u" ? function(e) {
        return hs.resolve(null).then(e).catch(nm)
    } : Zo;

function nm(e) {
    setTimeout(function() {
        throw e
    })
}

function fo(e, t) {
    var n = t,
        r = 0;
    do {
        var l = n.nextSibling;
        if (e.removeChild(n), l && l.nodeType === 8)
            if (n = l.data, n === "/$") {
                if (r === 0) {
                    e.removeChild(l), Zr(t);
                    return
                }
                r--
            } else n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = l
    } while (n);
    Zr(t)
}

function en(e) {
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

function ms(e) {
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
var pr = Math.random().toString(36).slice(2),
    Et = "__reactFiber$" + pr,
    nl = "__reactProps$" + pr,
    zt = "__reactContainer$" + pr,
    qo = "__reactEvents$" + pr,
    rm = "__reactListeners$" + pr,
    lm = "__reactHandles$" + pr;

function hn(e) {
    var t = e[Et];
    if (t) return t;
    for (var n = e.parentNode; n;) {
        if (t = n[zt] || n[Et]) {
            if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                for (e = ms(e); e !== null;) {
                    if (n = e[Et]) return n;
                    e = ms(e)
                }
            return t
        }
        e = n, n = e.parentNode
    }
    return null
}

function ml(e) {
    return e = e[Et] || e[zt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function Vn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(N(33))
}

function Di(e) {
    return e[nl] || null
}
var bo = [],
    Wn = -1;

function sn(e) {
    return {
        current: e
    }
}

function te(e) {
    0 > Wn || (e.current = bo[Wn], bo[Wn] = null, Wn--)
}

function b(e, t) {
    Wn++, bo[Wn] = e.current, e.current = t
}
var an = {},
    De = sn(an),
    $e = sn(!1),
    Sn = an;

function lr(e, t) {
    var n = e.type.contextTypes;
    if (!n) return an;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
        i;
    for (i in n) l[i] = t[i];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l
}

function He(e) {
    return e = e.childContextTypes, e != null
}

function ui() {
    te($e), te(De)
}

function vs(e, t, n) {
    if (De.current !== an) throw Error(N(168));
    b(De, t), b($e, n)
}

function _d(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var l in r)
        if (!(l in t)) throw Error(N(108, Hp(e) || "Unknown", l));
    return se({}, n, r)
}

function si(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || an, Sn = De.current, b(De, e), b($e, $e.current), !0
}

function gs(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(N(169));
    n ? (e = _d(e, t, Sn), r.__reactInternalMemoizedMergedChildContext = e, te($e), te(De), b(De, e)) : te($e), b($e, n)
}
var Pt = null,
    zi = !1,
    po = !1;

function Rd(e) {
    Pt === null ? Pt = [e] : Pt.push(e)
}

function im(e) {
    zi = !0, Rd(e)
}

function cn() {
    if (!po && Pt !== null) {
        po = !0;
        var e = 0,
            t = J;
        try {
            var n = Pt;
            for (J = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0); while (r !== null)
            }
            Pt = null, zi = !1
        } catch (l) {
            throw Pt !== null && (Pt = Pt.slice(e + 1)), ed(Oa, cn), l
        } finally {
            J = t, po = !1
        }
    }
    return null
}
var Qn = [],
    Kn = 0,
    ci = null,
    di = 0,
    nt = [],
    rt = 0,
    En = null,
    jt = 1,
    _t = "";

function fn(e, t) {
    Qn[Kn++] = di, Qn[Kn++] = ci, ci = e, di = t
}

function Ld(e, t, n) {
    nt[rt++] = jt, nt[rt++] = _t, nt[rt++] = En, En = e;
    var r = jt;
    e = _t;
    var l = 32 - vt(r) - 1;
    r &= ~(1 << l), n += 1;
    var i = 32 - vt(t) + l;
    if (30 < i) {
        var o = l - l % 5;
        i = (r & (1 << o) - 1).toString(32), r >>= o, l -= o, jt = 1 << 32 - vt(t) + l | n << l | r, _t = i + e
    } else jt = 1 << i | n << l | r, _t = e
}

function Wa(e) {
    e.return !== null && (fn(e, 1), Ld(e, 1, 0))
}

function Qa(e) {
    for (; e === ci;) ci = Qn[--Kn], Qn[Kn] = null, di = Qn[--Kn], Qn[Kn] = null;
    for (; e === En;) En = nt[--rt], nt[rt] = null, _t = nt[--rt], nt[rt] = null, jt = nt[--rt], nt[rt] = null
}
var Xe = null,
    Ge = null,
    le = !1,
    mt = null;

function Td(e, t) {
    var n = it(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function ys(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Xe = e, Ge = en(t.firstChild), !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Xe = e, Ge = null, !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t, t !== null ? (n = En !== null ? {
                id: jt,
                overflow: _t
            } : null, e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824
            }, n = it(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Xe = e, Ge = null, !0) : !1;
        default:
            return !1
    }
}

function ea(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function ta(e) {
    if (le) {
        var t = Ge;
        if (t) {
            var n = t;
            if (!ys(e, t)) {
                if (ea(e)) throw Error(N(418));
                t = en(n.nextSibling);
                var r = Xe;
                t && ys(e, t) ? Td(r, n) : (e.flags = e.flags & -4097 | 2, le = !1, Xe = e)
            }
        } else {
            if (ea(e)) throw Error(N(418));
            e.flags = e.flags & -4097 | 2, le = !1, Xe = e
        }
    }
}

function xs(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    Xe = e
}

function Ml(e) {
    if (e !== Xe) return !1;
    if (!le) return xs(e), le = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Jo(e.type, e.memoizedProps)), t && (t = Ge)) {
        if (ea(e)) throw Dd(), Error(N(418));
        for (; t;) Td(e, t), t = en(t.nextSibling)
    }
    if (xs(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(N(317));
        e: {
            for (e = e.nextSibling, t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Ge = en(e.nextSibling);
                            break e
                        }
                        t--
                    } else n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Ge = null
        }
    } else Ge = Xe ? en(e.stateNode.nextSibling) : null;
    return !0
}

function Dd() {
    for (var e = Ge; e;) e = en(e.nextSibling)
}

function ir() {
    Ge = Xe = null, le = !1
}

function Ka(e) {
    mt === null ? mt = [e] : mt.push(e)
}
var om = Ft.ReactCurrentBatchConfig;

function ft(e, t) {
    if (e && e.defaultProps) {
        t = se({}, t), e = e.defaultProps;
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
var fi = sn(null),
    pi = null,
    Yn = null,
    Ya = null;

function Ga() {
    Ya = Yn = pi = null
}

function Xa(e) {
    var t = fi.current;
    te(fi), e._currentValue = t
}

function na(e, t, n) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
        e = e.return
    }
}

function tr(e, t) {
    pi = e, Ya = Yn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Be = !0), e.firstContext = null)
}

function at(e) {
    var t = e._currentValue;
    if (Ya !== e)
        if (e = {
                context: e,
                memoizedValue: t,
                next: null
            }, Yn === null) {
            if (pi === null) throw Error(N(308));
            Yn = e, pi.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else Yn = Yn.next = e;
    return t
}
var mn = null;

function Ja(e) {
    mn === null ? mn = [e] : mn.push(e)
}

function zd(e, t, n, r) {
    var l = t.interleaved;
    return l === null ? (n.next = n, Ja(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Mt(e, r)
}

function Mt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var Kt = !1;

function Za(e) {
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

function Md(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}

function Lt(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}

function tn(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, X & 2) {
        var l = r.pending;
        return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Mt(e, n)
    }
    return l = r.interleaved, l === null ? (t.next = t, Ja(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Mt(e, n)
}

function Ql(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, Fa(e, n)
    }
}

function ws(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
        var l = null,
            i = null;
        if (n = n.firstBaseUpdate, n !== null) {
            do {
                var o = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                i === null ? l = i = o : i = i.next = o, n = n.next
            } while (n !== null);
            i === null ? l = i = t : i = i.next = t
        } else l = i = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: l,
            lastBaseUpdate: i,
            shared: r.shared,
            effects: r.effects
        }, e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function hi(e, t, n, r) {
    var l = e.updateQueue;
    Kt = !1;
    var i = l.firstBaseUpdate,
        o = l.lastBaseUpdate,
        a = l.shared.pending;
    if (a !== null) {
        l.shared.pending = null;
        var u = a,
            s = u.next;
        u.next = null, o === null ? i = s : o.next = s, o = u;
        var c = e.alternate;
        c !== null && (c = c.updateQueue, a = c.lastBaseUpdate, a !== o && (a === null ? c.firstBaseUpdate = s : a.next = s, c.lastBaseUpdate = u))
    }
    if (i !== null) {
        var f = l.baseState;
        o = 0, c = s = u = null, a = i;
        do {
            var p = a.lane,
                E = a.eventTime;
            if ((r & p) === p) {
                c !== null && (c = c.next = {
                    eventTime: E,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var S = e,
                        w = a;
                    switch (p = t, E = n, w.tag) {
                        case 1:
                            if (S = w.payload, typeof S == "function") {
                                f = S.call(E, f, p);
                                break e
                            }
                            f = S;
                            break e;
                        case 3:
                            S.flags = S.flags & -65537 | 128;
                        case 0:
                            if (S = w.payload, p = typeof S == "function" ? S.call(E, f, p) : S, p == null) break e;
                            f = se({}, f, p);
                            break e;
                        case 2:
                            Kt = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (e.flags |= 64, p = l.effects, p === null ? l.effects = [a] : p.push(a))
            } else E = {
                eventTime: E,
                lane: p,
                tag: a.tag,
                payload: a.payload,
                callback: a.callback,
                next: null
            }, c === null ? (s = c = E, u = f) : c = c.next = E, o |= p;
            if (a = a.next, a === null) {
                if (a = l.shared.pending, a === null) break;
                p = a, a = p.next, p.next = null, l.lastBaseUpdate = p, l.shared.pending = null
            }
        } while (!0);
        if (c === null && (u = f), l.baseState = u, l.firstBaseUpdate = s, l.lastBaseUpdate = c, t = l.shared.interleaved, t !== null) {
            l = t;
            do o |= l.lane, l = l.next; while (l !== t)
        } else i === null && (l.shared.lanes = 0);
        Cn |= o, e.lanes = o, e.memoizedState = f
    }
}

function Ss(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                l = r.callback;
            if (l !== null) {
                if (r.callback = null, r = n, typeof l != "function") throw Error(N(191, l));
                l.call(r)
            }
        }
}
var Od = new zc.Component().refs;

function ra(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : se({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Mi = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? _n(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = Fe(),
            l = rn(e),
            i = Lt(r, l);
        i.payload = t, n != null && (i.callback = n), t = tn(e, i, l), t !== null && (gt(t, e, l, r), Ql(t, e, l))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = Fe(),
            l = rn(e),
            i = Lt(r, l);
        i.tag = 1, i.payload = t, n != null && (i.callback = n), t = tn(e, i, l), t !== null && (gt(t, e, l, r), Ql(t, e, l))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = Fe(),
            r = rn(e),
            l = Lt(n, r);
        l.tag = 2, t != null && (l.callback = t), t = tn(e, l, r), t !== null && (gt(t, e, r, n), Ql(t, e, r))
    }
};

function Es(e, t, n, r, l, i, o) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, o) : t.prototype && t.prototype.isPureReactComponent ? !br(n, r) || !br(l, i) : !0
}

function Fd(e, t, n) {
    var r = !1,
        l = an,
        i = t.contextType;
    return typeof i == "object" && i !== null ? i = at(i) : (l = He(t) ? Sn : De.current, r = t.contextTypes, i = (r = r != null) ? lr(e, l) : an), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Mi, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = i), t
}

function ks(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Mi.enqueueReplaceState(t, t.state, null)
}

function la(e, t, n, r) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = Od, Za(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? l.context = at(i) : (i = He(t) ? Sn : De.current, l.context = lr(e, i)), l.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (ra(e, t, i, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Mi.enqueueReplaceState(l, l.state, null), hi(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308)
}

function Pr(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner, n) {
                if (n.tag !== 1) throw Error(N(309));
                var r = n.stateNode
            }
            if (!r) throw Error(N(147, e));
            var l = r,
                i = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(o) {
                var a = l.refs;
                a === Od && (a = l.refs = {}), o === null ? delete a[i] : a[i] = o
            }, t._stringRef = i, t)
        }
        if (typeof e != "string") throw Error(N(284));
        if (!n._owner) throw Error(N(290, e))
    }
    return e
}

function Ol(e, t) {
    throw e = Object.prototype.toString.call(t), Error(N(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function Cs(e) {
    var t = e._init;
    return t(e._payload)
}

function Id(e) {
    function t(h, d) {
        if (e) {
            var v = h.deletions;
            v === null ? (h.deletions = [d], h.flags |= 16) : v.push(d)
        }
    }

    function n(h, d) {
        if (!e) return null;
        for (; d !== null;) t(h, d), d = d.sibling;
        return null
    }

    function r(h, d) {
        for (h = new Map; d !== null;) d.key !== null ? h.set(d.key, d) : h.set(d.index, d), d = d.sibling;
        return h
    }

    function l(h, d) {
        return h = ln(h, d), h.index = 0, h.sibling = null, h
    }

    function i(h, d, v) {
        return h.index = v, e ? (v = h.alternate, v !== null ? (v = v.index, v < d ? (h.flags |= 2, d) : v) : (h.flags |= 2, d)) : (h.flags |= 1048576, d)
    }

    function o(h) {
        return e && h.alternate === null && (h.flags |= 2), h
    }

    function a(h, d, v, C) {
        return d === null || d.tag !== 6 ? (d = wo(v, h.mode, C), d.return = h, d) : (d = l(d, v), d.return = h, d)
    }

    function u(h, d, v, C) {
        var L = v.type;
        return L === An ? c(h, d, v.props.children, C, v.key) : d !== null && (d.elementType === L || typeof L == "object" && L !== null && L.$$typeof === Qt && Cs(L) === d.type) ? (C = l(d, v.props), C.ref = Pr(h, d, v), C.return = h, C) : (C = Zl(v.type, v.key, v.props, null, h.mode, C), C.ref = Pr(h, d, v), C.return = h, C)
    }

    function s(h, d, v, C) {
        return d === null || d.tag !== 4 || d.stateNode.containerInfo !== v.containerInfo || d.stateNode.implementation !== v.implementation ? (d = So(v, h.mode, C), d.return = h, d) : (d = l(d, v.children || []), d.return = h, d)
    }

    function c(h, d, v, C, L) {
        return d === null || d.tag !== 7 ? (d = wn(v, h.mode, C, L), d.return = h, d) : (d = l(d, v), d.return = h, d)
    }

    function f(h, d, v) {
        if (typeof d == "string" && d !== "" || typeof d == "number") return d = wo("" + d, h.mode, v), d.return = h, d;
        if (typeof d == "object" && d !== null) {
            switch (d.$$typeof) {
                case Cl:
                    return v = Zl(d.type, d.key, d.props, null, h.mode, v), v.ref = Pr(h, null, d), v.return = h, v;
                case Un:
                    return d = So(d, h.mode, v), d.return = h, d;
                case Qt:
                    var C = d._init;
                    return f(h, C(d._payload), v)
            }
            if (zr(d) || Sr(d)) return d = wn(d, h.mode, v, null), d.return = h, d;
            Ol(h, d)
        }
        return null
    }

    function p(h, d, v, C) {
        var L = d !== null ? d.key : null;
        if (typeof v == "string" && v !== "" || typeof v == "number") return L !== null ? null : a(h, d, "" + v, C);
        if (typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
                case Cl:
                    return v.key === L ? u(h, d, v, C) : null;
                case Un:
                    return v.key === L ? s(h, d, v, C) : null;
                case Qt:
                    return L = v._init, p(h, d, L(v._payload), C)
            }
            if (zr(v) || Sr(v)) return L !== null ? null : c(h, d, v, C, null);
            Ol(h, v)
        }
        return null
    }

    function E(h, d, v, C, L) {
        if (typeof C == "string" && C !== "" || typeof C == "number") return h = h.get(v) || null, a(d, h, "" + C, L);
        if (typeof C == "object" && C !== null) {
            switch (C.$$typeof) {
                case Cl:
                    return h = h.get(C.key === null ? v : C.key) || null, u(d, h, C, L);
                case Un:
                    return h = h.get(C.key === null ? v : C.key) || null, s(d, h, C, L);
                case Qt:
                    var D = C._init;
                    return E(h, d, v, D(C._payload), L)
            }
            if (zr(C) || Sr(C)) return h = h.get(v) || null, c(d, h, C, L, null);
            Ol(d, C)
        }
        return null
    }

    function S(h, d, v, C) {
        for (var L = null, D = null, g = d, T = d = 0, I = null; g !== null && T < v.length; T++) {
            g.index > T ? (I = g, g = null) : I = g.sibling;
            var O = p(h, g, v[T], C);
            if (O === null) {
                g === null && (g = I);
                break
            }
            e && g && O.alternate === null && t(h, g), d = i(O, d, T), D === null ? L = O : D.sibling = O, D = O, g = I
        }
        if (T === v.length) return n(h, g), le && fn(h, T), L;
        if (g === null) {
            for (; T < v.length; T++) g = f(h, v[T], C), g !== null && (d = i(g, d, T), D === null ? L = g : D.sibling = g, D = g);
            return le && fn(h, T), L
        }
        for (g = r(h, g); T < v.length; T++) I = E(g, h, T, v[T], C), I !== null && (e && I.alternate !== null && g.delete(I.key === null ? T : I.key), d = i(I, d, T), D === null ? L = I : D.sibling = I, D = I);
        return e && g.forEach(function(Y) {
            return t(h, Y)
        }), le && fn(h, T), L
    }

    function w(h, d, v, C) {
        var L = Sr(v);
        if (typeof L != "function") throw Error(N(150));
        if (v = L.call(v), v == null) throw Error(N(151));
        for (var D = L = null, g = d, T = d = 0, I = null, O = v.next(); g !== null && !O.done; T++, O = v.next()) {
            g.index > T ? (I = g, g = null) : I = g.sibling;
            var Y = p(h, g, O.value, C);
            if (Y === null) {
                g === null && (g = I);
                break
            }
            e && g && Y.alternate === null && t(h, g), d = i(Y, d, T), D === null ? L = Y : D.sibling = Y, D = Y, g = I
        }
        if (O.done) return n(h, g), le && fn(h, T), L;
        if (g === null) {
            for (; !O.done; T++, O = v.next()) O = f(h, O.value, C), O !== null && (d = i(O, d, T), D === null ? L = O : D.sibling = O, D = O);
            return le && fn(h, T), L
        }
        for (g = r(h, g); !O.done; T++, O = v.next()) O = E(g, h, T, O.value, C), O !== null && (e && O.alternate !== null && g.delete(O.key === null ? T : O.key), d = i(O, d, T), D === null ? L = O : D.sibling = O, D = O);
        return e && g.forEach(function(de) {
            return t(h, de)
        }), le && fn(h, T), L
    }

    function j(h, d, v, C) {
        if (typeof v == "object" && v !== null && v.type === An && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
                case Cl:
                    e: {
                        for (var L = v.key, D = d; D !== null;) {
                            if (D.key === L) {
                                if (L = v.type, L === An) {
                                    if (D.tag === 7) {
                                        n(h, D.sibling), d = l(D, v.props.children), d.return = h, h = d;
                                        break e
                                    }
                                } else if (D.elementType === L || typeof L == "object" && L !== null && L.$$typeof === Qt && Cs(L) === D.type) {
                                    n(h, D.sibling), d = l(D, v.props), d.ref = Pr(h, D, v), d.return = h, h = d;
                                    break e
                                }
                                n(h, D);
                                break
                            } else t(h, D);
                            D = D.sibling
                        }
                        v.type === An ? (d = wn(v.props.children, h.mode, C, v.key), d.return = h, h = d) : (C = Zl(v.type, v.key, v.props, null, h.mode, C), C.ref = Pr(h, d, v), C.return = h, h = C)
                    }
                    return o(h);
                case Un:
                    e: {
                        for (D = v.key; d !== null;) {
                            if (d.key === D)
                                if (d.tag === 4 && d.stateNode.containerInfo === v.containerInfo && d.stateNode.implementation === v.implementation) {
                                    n(h, d.sibling), d = l(d, v.children || []), d.return = h, h = d;
                                    break e
                                } else {
                                    n(h, d);
                                    break
                                }
                            else t(h, d);
                            d = d.sibling
                        }
                        d = So(v, h.mode, C),
                        d.return = h,
                        h = d
                    }
                    return o(h);
                case Qt:
                    return D = v._init, j(h, d, D(v._payload), C)
            }
            if (zr(v)) return S(h, d, v, C);
            if (Sr(v)) return w(h, d, v, C);
            Ol(h, v)
        }
        return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v, d !== null && d.tag === 6 ? (n(h, d.sibling), d = l(d, v), d.return = h, h = d) : (n(h, d), d = wo(v, h.mode, C), d.return = h, h = d), o(h)) : n(h, d)
    }
    return j
}
var or = Id(!0),
    Ud = Id(!1),
    vl = {},
    Ct = sn(vl),
    rl = sn(vl),
    ll = sn(vl);

function vn(e) {
    if (e === vl) throw Error(N(174));
    return e
}

function qa(e, t) {
    switch (b(ll, t), b(rl, e), b(Ct, vl), e = t.nodeType, e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : Fo(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Fo(t, e)
    }
    te(Ct), b(Ct, t)
}

function ar() {
    te(Ct), te(rl), te(ll)
}

function Ad(e) {
    vn(ll.current);
    var t = vn(Ct.current),
        n = Fo(t, e.type);
    t !== n && (b(rl, e), b(Ct, n))
}

function ba(e) {
    rl.current === e && (te(Ct), te(rl))
}
var ae = sn(0);

function mi(e) {
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
var ho = [];

function eu() {
    for (var e = 0; e < ho.length; e++) ho[e]._workInProgressVersionPrimary = null;
    ho.length = 0
}
var Kl = Ft.ReactCurrentDispatcher,
    mo = Ft.ReactCurrentBatchConfig,
    kn = 0,
    ue = null,
    me = null,
    we = null,
    vi = !1,
    $r = !1,
    il = 0,
    am = 0;

function Re() {
    throw Error(N(321))
}

function tu(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!yt(e[n], t[n])) return !1;
    return !0
}

function nu(e, t, n, r, l, i) {
    if (kn = i, ue = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Kl.current = e === null || e.memoizedState === null ? dm : fm, e = n(r, l), $r) {
        i = 0;
        do {
            if ($r = !1, il = 0, 25 <= i) throw Error(N(301));
            i += 1, we = me = null, t.updateQueue = null, Kl.current = pm, e = n(r, l)
        } while ($r)
    }
    if (Kl.current = gi, t = me !== null && me.next !== null, kn = 0, we = me = ue = null, vi = !1, t) throw Error(N(300));
    return e
}

function ru() {
    var e = il !== 0;
    return il = 0, e
}

function St() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return we === null ? ue.memoizedState = we = e : we = we.next = e, we
}

function ut() {
    if (me === null) {
        var e = ue.alternate;
        e = e !== null ? e.memoizedState : null
    } else e = me.next;
    var t = we === null ? ue.memoizedState : we.next;
    if (t !== null) we = t, me = e;
    else {
        if (e === null) throw Error(N(310));
        me = e, e = {
            memoizedState: me.memoizedState,
            baseState: me.baseState,
            baseQueue: me.baseQueue,
            queue: me.queue,
            next: null
        }, we === null ? ue.memoizedState = we = e : we = we.next = e
    }
    return we
}

function ol(e, t) {
    return typeof t == "function" ? t(e) : t
}

function vo(e) {
    var t = ut(),
        n = t.queue;
    if (n === null) throw Error(N(311));
    n.lastRenderedReducer = e;
    var r = me,
        l = r.baseQueue,
        i = n.pending;
    if (i !== null) {
        if (l !== null) {
            var o = l.next;
            l.next = i.next, i.next = o
        }
        r.baseQueue = l = i, n.pending = null
    }
    if (l !== null) {
        i = l.next, r = r.baseState;
        var a = o = null,
            u = null,
            s = i;
        do {
            var c = s.lane;
            if ((kn & c) === c) u !== null && (u = u.next = {
                lane: 0,
                action: s.action,
                hasEagerState: s.hasEagerState,
                eagerState: s.eagerState,
                next: null
            }), r = s.hasEagerState ? s.eagerState : e(r, s.action);
            else {
                var f = {
                    lane: c,
                    action: s.action,
                    hasEagerState: s.hasEagerState,
                    eagerState: s.eagerState,
                    next: null
                };
                u === null ? (a = u = f, o = r) : u = u.next = f, ue.lanes |= c, Cn |= c
            }
            s = s.next
        } while (s !== null && s !== i);
        u === null ? o = r : u.next = a, yt(r, t.memoizedState) || (Be = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = u, n.lastRenderedState = r
    }
    if (e = n.interleaved, e !== null) {
        l = e;
        do i = l.lane, ue.lanes |= i, Cn |= i, l = l.next; while (l !== e)
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}

function go(e) {
    var t = ut(),
        n = t.queue;
    if (n === null) throw Error(N(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        l = n.pending,
        i = t.memoizedState;
    if (l !== null) {
        n.pending = null;
        var o = l = l.next;
        do i = e(i, o.action), o = o.next; while (o !== l);
        yt(i, t.memoizedState) || (Be = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i
    }
    return [i, r]
}

function Bd() {}

function $d(e, t) {
    var n = ue,
        r = ut(),
        l = t(),
        i = !yt(r.memoizedState, l);
    if (i && (r.memoizedState = l, Be = !0), r = r.queue, lu(Wd.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || we !== null && we.memoizedState.tag & 1) {
        if (n.flags |= 2048, al(9, Vd.bind(null, n, r, l, t), void 0, null), Se === null) throw Error(N(349));
        kn & 30 || Hd(n, t, l)
    }
    return l
}

function Hd(e, t, n) {
    e.flags |= 16384, e = {
        getSnapshot: t,
        value: n
    }, t = ue.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, ue.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function Vd(e, t, n, r) {
    t.value = n, t.getSnapshot = r, Qd(t) && Kd(e)
}

function Wd(e, t, n) {
    return n(function() {
        Qd(t) && Kd(e)
    })
}

function Qd(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !yt(e, n)
    } catch {
        return !0
    }
}

function Kd(e) {
    var t = Mt(e, 1);
    t !== null && gt(t, e, 1, -1)
}

function Ns(e) {
    var t = St();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ol,
        lastRenderedState: e
    }, t.queue = e, e = e.dispatch = cm.bind(null, ue, e), [t.memoizedState, e]
}

function al(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    }, t = ue.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, ue.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function Yd() {
    return ut().memoizedState
}

function Yl(e, t, n, r) {
    var l = St();
    ue.flags |= e, l.memoizedState = al(1 | t, n, void 0, r === void 0 ? null : r)
}

function Oi(e, t, n, r) {
    var l = ut();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (me !== null) {
        var o = me.memoizedState;
        if (i = o.destroy, r !== null && tu(r, o.deps)) {
            l.memoizedState = al(t, n, i, r);
            return
        }
    }
    ue.flags |= e, l.memoizedState = al(1 | t, n, i, r)
}

function Ps(e, t) {
    return Yl(8390656, 8, e, t)
}

function lu(e, t) {
    return Oi(2048, 8, e, t)
}

function Gd(e, t) {
    return Oi(4, 2, e, t)
}

function Xd(e, t) {
    return Oi(4, 4, e, t)
}

function Jd(e, t) {
    if (typeof t == "function") return e = e(), t(e),
        function() {
            t(null)
        };
    if (t != null) return e = e(), t.current = e,
        function() {
            t.current = null
        }
}

function Zd(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Oi(4, 4, Jd.bind(null, t, e), n)
}

function iu() {}

function qd(e, t) {
    var n = ut();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && tu(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function bd(e, t) {
    var n = ut();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && tu(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function ef(e, t, n) {
    return kn & 21 ? (yt(n, t) || (n = rd(), ue.lanes |= n, Cn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Be = !0), e.memoizedState = n)
}

function um(e, t) {
    var n = J;
    J = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = mo.transition;
    mo.transition = {};
    try {
        e(!1), t()
    } finally {
        J = n, mo.transition = r
    }
}

function tf() {
    return ut().memoizedState
}

function sm(e, t, n) {
    var r = rn(e);
    if (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, nf(e)) rf(t, n);
    else if (n = zd(e, t, n, r), n !== null) {
        var l = Fe();
        gt(n, e, r, l), lf(n, t, r)
    }
}

function cm(e, t, n) {
    var r = rn(e),
        l = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if (nf(e)) rf(t, l);
    else {
        var i = e.alternate;
        if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
            var o = t.lastRenderedState,
                a = i(o, n);
            if (l.hasEagerState = !0, l.eagerState = a, yt(a, o)) {
                var u = t.interleaved;
                u === null ? (l.next = l, Ja(t)) : (l.next = u.next, u.next = l), t.interleaved = l;
                return
            }
        } catch {} finally {}
        n = zd(e, t, l, r), n !== null && (l = Fe(), gt(n, e, r, l), lf(n, t, r))
    }
}

function nf(e) {
    var t = e.alternate;
    return e === ue || t !== null && t === ue
}

function rf(e, t) {
    $r = vi = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function lf(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, Fa(e, n)
    }
}
var gi = {
        readContext: at,
        useCallback: Re,
        useContext: Re,
        useEffect: Re,
        useImperativeHandle: Re,
        useInsertionEffect: Re,
        useLayoutEffect: Re,
        useMemo: Re,
        useReducer: Re,
        useRef: Re,
        useState: Re,
        useDebugValue: Re,
        useDeferredValue: Re,
        useTransition: Re,
        useMutableSource: Re,
        useSyncExternalStore: Re,
        useId: Re,
        unstable_isNewReconciler: !1
    },
    dm = {
        readContext: at,
        useCallback: function(e, t) {
            return St().memoizedState = [e, t === void 0 ? null : t], e
        },
        useContext: at,
        useEffect: Ps,
        useImperativeHandle: function(e, t, n) {
            return n = n != null ? n.concat([e]) : null, Yl(4194308, 4, Jd.bind(null, t, e), n)
        },
        useLayoutEffect: function(e, t) {
            return Yl(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            return Yl(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var n = St();
            return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
        },
        useReducer: function(e, t, n) {
            var r = St();
            return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }, r.queue = e, e = e.dispatch = sm.bind(null, ue, e), [r.memoizedState, e]
        },
        useRef: function(e) {
            var t = St();
            return e = {
                current: e
            }, t.memoizedState = e
        },
        useState: Ns,
        useDebugValue: iu,
        useDeferredValue: function(e) {
            return St().memoizedState = e
        },
        useTransition: function() {
            var e = Ns(!1),
                t = e[0];
            return e = um.bind(null, e[1]), St().memoizedState = e, [t, e]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, n) {
            var r = ue,
                l = St();
            if (le) {
                if (n === void 0) throw Error(N(407));
                n = n()
            } else {
                if (n = t(), Se === null) throw Error(N(349));
                kn & 30 || Hd(r, t, n)
            }
            l.memoizedState = n;
            var i = {
                value: n,
                getSnapshot: t
            };
            return l.queue = i, Ps(Wd.bind(null, r, i, e), [e]), r.flags |= 2048, al(9, Vd.bind(null, r, i, n, t), void 0, null), n
        },
        useId: function() {
            var e = St(),
                t = Se.identifierPrefix;
            if (le) {
                var n = _t,
                    r = jt;
                n = (r & ~(1 << 32 - vt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = il++, 0 < n && (t += "H" + n.toString(32)), t += ":"
            } else n = am++, t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    },
    fm = {
        readContext: at,
        useCallback: qd,
        useContext: at,
        useEffect: lu,
        useImperativeHandle: Zd,
        useInsertionEffect: Gd,
        useLayoutEffect: Xd,
        useMemo: bd,
        useReducer: vo,
        useRef: Yd,
        useState: function() {
            return vo(ol)
        },
        useDebugValue: iu,
        useDeferredValue: function(e) {
            var t = ut();
            return ef(t, me.memoizedState, e)
        },
        useTransition: function() {
            var e = vo(ol)[0],
                t = ut().memoizedState;
            return [e, t]
        },
        useMutableSource: Bd,
        useSyncExternalStore: $d,
        useId: tf,
        unstable_isNewReconciler: !1
    },
    pm = {
        readContext: at,
        useCallback: qd,
        useContext: at,
        useEffect: lu,
        useImperativeHandle: Zd,
        useInsertionEffect: Gd,
        useLayoutEffect: Xd,
        useMemo: bd,
        useReducer: go,
        useRef: Yd,
        useState: function() {
            return go(ol)
        },
        useDebugValue: iu,
        useDeferredValue: function(e) {
            var t = ut();
            return me === null ? t.memoizedState = e : ef(t, me.memoizedState, e)
        },
        useTransition: function() {
            var e = go(ol)[0],
                t = ut().memoizedState;
            return [e, t]
        },
        useMutableSource: Bd,
        useSyncExternalStore: $d,
        useId: tf,
        unstable_isNewReconciler: !1
    };

function ur(e, t) {
    try {
        var n = "",
            r = t;
        do n += $p(r), r = r.return; while (r);
        var l = n
    } catch (i) {
        l = `
Error generating stack: ` + i.message + `
` + i.stack
    }
    return {
        value: e,
        source: t,
        stack: l,
        digest: null
    }
}

function yo(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ? ? null,
        digest: t ? ? null
    }
}

function ia(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var hm = typeof WeakMap == "function" ? WeakMap : Map;

function of (e, t, n) {
    n = Lt(-1, n), n.tag = 3, n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        xi || (xi = !0, ma = r), ia(e, t)
    }, n
}

function af(e, t, n) {
    n = Lt(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var l = t.value;
        n.payload = function() {
            return r(l)
        }, n.callback = function() {
            ia(e, t)
        }
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
        ia(e, t), typeof r != "function" && (nn === null ? nn = new Set([this]) : nn.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: o !== null ? o : ""
        })
    }), n
}

function js(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new hm;
        var l = new Set;
        r.set(t, l)
    } else l = r.get(t), l === void 0 && (l = new Set, r.set(t, l));
    l.has(n) || (l.add(n), e = _m.bind(null, e, t, n), t.then(e, e))
}

function _s(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
        e = e.return
    } while (e !== null);
    return null
}

function Rs(e, t, n, r, l) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Lt(-1, 1), t.tag = 2, tn(n, t, 1))), n.lanes |= 1), e)
}
var mm = Ft.ReactCurrentOwner,
    Be = !1;

function Oe(e, t, n, r) {
    t.child = e === null ? Ud(t, null, n, r) : or(t, e.child, n, r)
}

function Ls(e, t, n, r, l) {
    n = n.render;
    var i = t.ref;
    return tr(t, l), r = nu(e, t, n, r, i, l), n = ru(), e !== null && !Be ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Ot(e, t, l)) : (le && n && Wa(t), t.flags |= 1, Oe(e, t, r, l), t.child)
}

function Ts(e, t, n, r, l) {
    if (e === null) {
        var i = n.type;
        return typeof i == "function" && !pu(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, uf(e, t, i, r, l)) : (e = Zl(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e)
    }
    if (i = e.child, !(e.lanes & l)) {
        var o = i.memoizedProps;
        if (n = n.compare, n = n !== null ? n : br, n(o, r) && e.ref === t.ref) return Ot(e, t, l)
    }
    return t.flags |= 1, e = ln(i, r), e.ref = t.ref, e.return = t, t.child = e
}

function uf(e, t, n, r, l) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (br(i, r) && e.ref === t.ref)
            if (Be = !1, t.pendingProps = r = i, (e.lanes & l) !== 0) e.flags & 131072 && (Be = !0);
            else return t.lanes = e.lanes, Ot(e, t, l)
    }
    return oa(e, t, n, r, l)
}

function sf(e, t, n) {
    var r = t.pendingProps,
        l = r.children,
        i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1)) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, b(Xn, Ye), Ye |= n;
        else {
            if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, t.updateQueue = null, b(Xn, Ye), Ye |= e, null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, r = i !== null ? i.baseLanes : n, b(Xn, Ye), Ye |= r
        }
    else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, b(Xn, Ye), Ye |= r;
    return Oe(e, t, l, n), t.child
}

function cf(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function oa(e, t, n, r, l) {
    var i = He(n) ? Sn : De.current;
    return i = lr(t, i), tr(t, l), n = nu(e, t, n, r, i, l), r = ru(), e !== null && !Be ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Ot(e, t, l)) : (le && r && Wa(t), t.flags |= 1, Oe(e, t, n, l), t.child)
}

function Ds(e, t, n, r, l) {
    if (He(n)) {
        var i = !0;
        si(t)
    } else i = !1;
    if (tr(t, l), t.stateNode === null) Gl(e, t), Fd(t, n, r), la(t, n, r, l), r = !0;
    else if (e === null) {
        var o = t.stateNode,
            a = t.memoizedProps;
        o.props = a;
        var u = o.context,
            s = n.contextType;
        typeof s == "object" && s !== null ? s = at(s) : (s = He(n) ? Sn : De.current, s = lr(t, s));
        var c = n.getDerivedStateFromProps,
            f = typeof c == "function" || typeof o.getSnapshotBeforeUpdate == "function";
        f || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== r || u !== s) && ks(t, o, r, s), Kt = !1;
        var p = t.memoizedState;
        o.state = p, hi(t, r, o, l), u = t.memoizedState, a !== r || p !== u || $e.current || Kt ? (typeof c == "function" && (ra(t, n, c, r), u = t.memoizedState), (a = Kt || Es(t, n, a, r, p, u, s)) ? (f || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), o.props = r, o.state = u, o.context = s, r = a) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
    } else {
        o = t.stateNode, Md(e, t), a = t.memoizedProps, s = t.type === t.elementType ? a : ft(t.type, a), o.props = s, f = t.pendingProps, p = o.context, u = n.contextType, typeof u == "object" && u !== null ? u = at(u) : (u = He(n) ? Sn : De.current, u = lr(t, u));
        var E = n.getDerivedStateFromProps;
        (c = typeof E == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== f || p !== u) && ks(t, o, r, u), Kt = !1, p = t.memoizedState, o.state = p, hi(t, r, o, l);
        var S = t.memoizedState;
        a !== f || p !== S || $e.current || Kt ? (typeof E == "function" && (ra(t, n, E, r), S = t.memoizedState), (s = Kt || Es(t, n, s, r, p, S, u) || !1) ? (c || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, S, u), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, S, u)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || a === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = S), o.props = r, o.state = S, o.context = u, r = s) : (typeof o.componentDidUpdate != "function" || a === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = !1)
    }
    return aa(e, t, n, r, i, l)
}

function aa(e, t, n, r, l, i) {
    cf(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o) return l && gs(t, n, !1), Ot(e, t, i);
    r = t.stateNode, mm.current = t;
    var a = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && o ? (t.child = or(t, e.child, null, i), t.child = or(t, null, a, i)) : Oe(e, t, a, i), t.memoizedState = r.state, l && gs(t, n, !0), t.child
}

function df(e) {
    var t = e.stateNode;
    t.pendingContext ? vs(e, t.pendingContext, t.pendingContext !== t.context) : t.context && vs(e, t.context, !1), qa(e, t.containerInfo)
}

function zs(e, t, n, r, l) {
    return ir(), Ka(l), t.flags |= 256, Oe(e, t, n, r), t.child
}
var ua = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};

function sa(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}

function ff(e, t, n) {
    var r = t.pendingProps,
        l = ae.current,
        i = !1,
        o = (t.flags & 128) !== 0,
        a;
    if ((a = o) || (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), a ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), b(ae, l & 1), e === null) return ta(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, o = {
        mode: "hidden",
        children: o
    }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = o) : i = Ui(o, r, 0, null), e = wn(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = sa(n), t.memoizedState = ua, e) : ou(t, o));
    if (l = e.memoizedState, l !== null && (a = l.dehydrated, a !== null)) return vm(e, t, o, r, a, l, n);
    if (i) {
        i = r.fallback, o = t.mode, l = e.child, a = l.sibling;
        var u = {
            mode: "hidden",
            children: r.children
        };
        return !(o & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = ln(l, u), r.subtreeFlags = l.subtreeFlags & 14680064), a !== null ? i = ln(a, i) : (i = wn(i, o, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, o = e.child.memoizedState, o = o === null ? sa(n) : {
            baseLanes: o.baseLanes | n,
            cachePool: null,
            transitions: o.transitions
        }, i.memoizedState = o, i.childLanes = e.childLanes & ~n, t.memoizedState = ua, r
    }
    return i = e.child, e = i.sibling, r = ln(i, {
        mode: "visible",
        children: r.children
    }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
}

function ou(e, t) {
    return t = Ui({
        mode: "visible",
        children: t
    }, e.mode, 0, null), t.return = e, e.child = t
}

function Fl(e, t, n, r) {
    return r !== null && Ka(r), or(t, e.child, null, n), e = ou(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function vm(e, t, n, r, l, i, o) {
    if (n) return t.flags & 256 ? (t.flags &= -257, r = yo(Error(N(422))), Fl(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, l = t.mode, r = Ui({
        mode: "visible",
        children: r.children
    }, l, 0, null), i = wn(i, l, o, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && or(t, e.child, null, o), t.child.memoizedState = sa(o), t.memoizedState = ua, i);
    if (!(t.mode & 1)) return Fl(e, t, o, null);
    if (l.data === "$!") {
        if (r = l.nextSibling && l.nextSibling.dataset, r) var a = r.dgst;
        return r = a, i = Error(N(419)), r = yo(i, r, void 0), Fl(e, t, o, r)
    }
    if (a = (o & e.childLanes) !== 0, Be || a) {
        if (r = Se, r !== null) {
            switch (o & -o) {
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
            l = l & (r.suspendedLanes | o) ? 0 : l, l !== 0 && l !== i.retryLane && (i.retryLane = l, Mt(e, l), gt(r, e, l, -1))
        }
        return fu(), r = yo(Error(N(421))), Fl(e, t, o, r)
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Rm.bind(null, e), l._reactRetry = t, null) : (e = i.treeContext, Ge = en(l.nextSibling), Xe = t, le = !0, mt = null, e !== null && (nt[rt++] = jt, nt[rt++] = _t, nt[rt++] = En, jt = e.id, _t = e.overflow, En = t), t = ou(t, r.children), t.flags |= 4096, t)
}

function Ms(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), na(e.return, t, n)
}

function xo(e, t, n, r, l) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l
    } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = l)
}

function pf(e, t, n) {
    var r = t.pendingProps,
        l = r.revealOrder,
        i = r.tail;
    if (Oe(e, t, r.children, n), r = ae.current, r & 2) r = r & 1 | 2, t.flags |= 128;
    else {
        if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && Ms(e, n, t);
            else if (e.tag === 19) Ms(e, n, t);
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
    if (b(ae, r), !(t.mode & 1)) t.memoizedState = null;
    else switch (l) {
        case "forwards":
            for (n = t.child, l = null; n !== null;) e = n.alternate, e !== null && mi(e) === null && (l = n), n = n.sibling;
            n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), xo(t, !1, l, n, i);
            break;
        case "backwards":
            for (n = null, l = t.child, t.child = null; l !== null;) {
                if (e = l.alternate, e !== null && mi(e) === null) {
                    t.child = l;
                    break
                }
                e = l.sibling, l.sibling = n, n = l, l = e
            }
            xo(t, !0, n, null, i);
            break;
        case "together":
            xo(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
    }
    return t.child
}

function Gl(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function Ot(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Cn |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(N(153));
    if (t.child !== null) {
        for (e = t.child, n = ln(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = ln(e, e.pendingProps), n.return = t;
        n.sibling = null
    }
    return t.child
}

function gm(e, t, n) {
    switch (t.tag) {
        case 3:
            df(t), ir();
            break;
        case 5:
            Ad(t);
            break;
        case 1:
            He(t.type) && si(t);
            break;
        case 4:
            qa(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                l = t.memoizedProps.value;
            b(fi, r._currentValue), r._currentValue = l;
            break;
        case 13:
            if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (b(ae, ae.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? ff(e, t, n) : (b(ae, ae.current & 1), e = Ot(e, t, n), e !== null ? e.sibling : null);
            b(ae, ae.current & 1);
            break;
        case 19:
            if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                if (r) return pf(e, t, n);
                t.flags |= 128
            }
            if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), b(ae, ae.current), r) break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0, sf(e, t, n)
    }
    return Ot(e, t, n)
}
var hf, ca, mf, vf;
hf = function(e, t) {
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
ca = function() {};
mf = function(e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
        e = t.stateNode, vn(Ct.current);
        var i = null;
        switch (n) {
            case "input":
                l = Do(e, l), r = Do(e, r), i = [];
                break;
            case "select":
                l = se({}, l, {
                    value: void 0
                }), r = se({}, r, {
                    value: void 0
                }), i = [];
                break;
            case "textarea":
                l = Oo(e, l), r = Oo(e, r), i = [];
                break;
            default:
                typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ai)
        }
        Io(n, r);
        var o;
        n = null;
        for (s in l)
            if (!r.hasOwnProperty(s) && l.hasOwnProperty(s) && l[s] != null)
                if (s === "style") {
                    var a = l[s];
                    for (o in a) a.hasOwnProperty(o) && (n || (n = {}), n[o] = "")
                } else s !== "dangerouslySetInnerHTML" && s !== "children" && s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (Kr.hasOwnProperty(s) ? i || (i = []) : (i = i || []).push(s, null));
        for (s in r) {
            var u = r[s];
            if (a = l != null ? l[s] : void 0, r.hasOwnProperty(s) && u !== a && (u != null || a != null))
                if (s === "style")
                    if (a) {
                        for (o in a) !a.hasOwnProperty(o) || u && u.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
                        for (o in u) u.hasOwnProperty(o) && a[o] !== u[o] && (n || (n = {}), n[o] = u[o])
                    } else n || (i || (i = []), i.push(s, n)), n = u;
            else s === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, a = a ? a.__html : void 0, u != null && a !== u && (i = i || []).push(s, u)) : s === "children" ? typeof u != "string" && typeof u != "number" || (i = i || []).push(s, "" + u) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && (Kr.hasOwnProperty(s) ? (u != null && s === "onScroll" && ee("scroll", e), i || a === u || (i = [])) : (i = i || []).push(s, u))
        }
        n && (i = i || []).push("style", n);
        var s = i;
        (t.updateQueue = s) && (t.flags |= 4)
    }
};
vf = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
};

function jr(e, t) {
    if (!le) switch (e.tailMode) {
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

function Le(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var l = e.child; l !== null;) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
    else
        for (l = e.child; l !== null;) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t
}

function ym(e, t, n) {
    var r = t.pendingProps;
    switch (Qa(t), t.tag) {
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
            return Le(t), null;
        case 1:
            return He(t.type) && ui(), Le(t), null;
        case 3:
            return r = t.stateNode, ar(), te($e), te(De), eu(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Ml(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, mt !== null && (ya(mt), mt = null))), ca(e, t), Le(t), null;
        case 5:
            ba(t);
            var l = vn(ll.current);
            if (n = t.type, e !== null && t.stateNode != null) mf(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(N(166));
                    return Le(t), null
                }
                if (e = vn(Ct.current), Ml(t)) {
                    r = t.stateNode, n = t.type;
                    var i = t.memoizedProps;
                    switch (r[Et] = t, r[nl] = i, e = (t.mode & 1) !== 0, n) {
                        case "dialog":
                            ee("cancel", r), ee("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            ee("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (l = 0; l < Or.length; l++) ee(Or[l], r);
                            break;
                        case "source":
                            ee("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            ee("error", r), ee("load", r);
                            break;
                        case "details":
                            ee("toggle", r);
                            break;
                        case "input":
                            Vu(r, i), ee("invalid", r);
                            break;
                        case "select":
                            r._wrapperState = {
                                wasMultiple: !!i.multiple
                            }, ee("invalid", r);
                            break;
                        case "textarea":
                            Qu(r, i), ee("invalid", r)
                    }
                    Io(n, i), l = null;
                    for (var o in i)
                        if (i.hasOwnProperty(o)) {
                            var a = i[o];
                            o === "children" ? typeof a == "string" ? r.textContent !== a && (i.suppressHydrationWarning !== !0 && zl(r.textContent, a, e), l = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (i.suppressHydrationWarning !== !0 && zl(r.textContent, a, e), l = ["children", "" + a]) : Kr.hasOwnProperty(o) && a != null && o === "onScroll" && ee("scroll", r)
                        }
                    switch (n) {
                        case "input":
                            Nl(r), Wu(r, i, !0);
                            break;
                        case "textarea":
                            Nl(r), Ku(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof i.onClick == "function" && (r.onclick = ai)
                    }
                    r = l, t.updateQueue = r, r !== null && (t.flags |= 4)
                } else {
                    o = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Hc(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, {
                        is: r.is
                    }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[Et] = t, e[nl] = r, hf(e, t, !1, !1), t.stateNode = e;
                    e: {
                        switch (o = Uo(n, r), n) {
                            case "dialog":
                                ee("cancel", e), ee("close", e), l = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                ee("load", e), l = r;
                                break;
                            case "video":
                            case "audio":
                                for (l = 0; l < Or.length; l++) ee(Or[l], e);
                                l = r;
                                break;
                            case "source":
                                ee("error", e), l = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                ee("error", e), ee("load", e), l = r;
                                break;
                            case "details":
                                ee("toggle", e), l = r;
                                break;
                            case "input":
                                Vu(e, r), l = Do(e, r), ee("invalid", e);
                                break;
                            case "option":
                                l = r;
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!r.multiple
                                }, l = se({}, r, {
                                    value: void 0
                                }), ee("invalid", e);
                                break;
                            case "textarea":
                                Qu(e, r), l = Oo(e, r), ee("invalid", e);
                                break;
                            default:
                                l = r
                        }
                        Io(n, l),
                        a = l;
                        for (i in a)
                            if (a.hasOwnProperty(i)) {
                                var u = a[i];
                                i === "style" ? Qc(e, u) : i === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && Vc(e, u)) : i === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && Yr(e, u) : typeof u == "number" && Yr(e, "" + u) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Kr.hasOwnProperty(i) ? u != null && i === "onScroll" && ee("scroll", e) : u != null && La(e, i, u, o))
                            }
                        switch (n) {
                            case "input":
                                Nl(e), Wu(e, r, !1);
                                break;
                            case "textarea":
                                Nl(e), Ku(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + on(r.value));
                                break;
                            case "select":
                                e.multiple = !!r.multiple, i = r.value, i != null ? Zn(e, !!r.multiple, i, !1) : r.defaultValue != null && Zn(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof l.onClick == "function" && (e.onclick = ai)
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
            return Le(t), null;
        case 6:
            if (e && t.stateNode != null) vf(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null) throw Error(N(166));
                if (n = vn(ll.current), vn(Ct.current), Ml(t)) {
                    if (r = t.stateNode, n = t.memoizedProps, r[Et] = t, (i = r.nodeValue !== n) && (e = Xe, e !== null)) switch (e.tag) {
                        case 3:
                            zl(r.nodeValue, n, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && zl(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                    i && (t.flags |= 4)
                } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Et] = t, t.stateNode = r
            }
            return Le(t), null;
        case 13:
            if (te(ae), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (le && Ge !== null && t.mode & 1 && !(t.flags & 128)) Dd(), ir(), t.flags |= 98560, i = !1;
                else if (i = Ml(t), r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!i) throw Error(N(318));
                        if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(N(317));
                        i[Et] = t
                    } else ir(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                    Le(t), i = !1
                } else mt !== null && (ya(mt), mt = null), i = !0;
                if (!i) return t.flags & 65536 ? t : null
            }
            return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ae.current & 1 ? ve === 0 && (ve = 3) : fu())), t.updateQueue !== null && (t.flags |= 4), Le(t), null);
        case 4:
            return ar(), ca(e, t), e === null && el(t.stateNode.containerInfo), Le(t), null;
        case 10:
            return Xa(t.type._context), Le(t), null;
        case 17:
            return He(t.type) && ui(), Le(t), null;
        case 19:
            if (te(ae), i = t.memoizedState, i === null) return Le(t), null;
            if (r = (t.flags & 128) !== 0, o = i.rendering, o === null)
                if (r) jr(i, !1);
                else {
                    if (ve !== 0 || e !== null && e.flags & 128)
                        for (e = t.child; e !== null;) {
                            if (o = mi(e), o !== null) {
                                for (t.flags |= 128, jr(i, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) i = n, e = r, i.flags &= 14680066, o = i.alternate, o === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = o.childLanes, i.lanes = o.lanes, i.child = o.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = o.memoizedProps, i.memoizedState = o.memoizedState, i.updateQueue = o.updateQueue, i.type = o.type, e = o.dependencies, i.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }), n = n.sibling;
                                return b(ae, ae.current & 1 | 2), t.child
                            }
                            e = e.sibling
                        }
                    i.tail !== null && pe() > sr && (t.flags |= 128, r = !0, jr(i, !1), t.lanes = 4194304)
                }
            else {
                if (!r)
                    if (e = mi(o), e !== null) {
                        if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), jr(i, !0), i.tail === null && i.tailMode === "hidden" && !o.alternate && !le) return Le(t), null
                    } else 2 * pe() - i.renderingStartTime > sr && n !== 1073741824 && (t.flags |= 128, r = !0, jr(i, !1), t.lanes = 4194304);
                i.isBackwards ? (o.sibling = t.child, t.child = o) : (n = i.last, n !== null ? n.sibling = o : t.child = o, i.last = o)
            }
            return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = pe(), t.sibling = null, n = ae.current, b(ae, r ? n & 1 | 2 : n & 1), t) : (Le(t), null);
        case 22:
        case 23:
            return du(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ye & 1073741824 && (Le(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Le(t), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(N(156, t.tag))
}

function xm(e, t) {
    switch (Qa(t), t.tag) {
        case 1:
            return He(t.type) && ui(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
            return ar(), te($e), te(De), eu(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
        case 5:
            return ba(t), null;
        case 13:
            if (te(ae), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                if (t.alternate === null) throw Error(N(340));
                ir()
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
            return te(ae), null;
        case 4:
            return ar(), null;
        case 10:
            return Xa(t.type._context), null;
        case 22:
        case 23:
            return du(), null;
        case 24:
            return null;
        default:
            return null
    }
}
var Il = !1,
    Te = !1,
    wm = typeof WeakSet == "function" ? WeakSet : Set,
    z = null;

function Gn(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function") try {
            n(null)
        } catch (r) {
            ce(e, t, r)
        } else n.current = null
}

function da(e, t, n) {
    try {
        n()
    } catch (r) {
        ce(e, t, r)
    }
}
var Os = !1;

function Sm(e, t) {
    if (Go = li, e = xd(), Va(e)) {
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
                    i = r.focusNode;
                r = r.focusOffset;
                try {
                    n.nodeType, i.nodeType
                } catch {
                    n = null;
                    break e
                }
                var o = 0,
                    a = -1,
                    u = -1,
                    s = 0,
                    c = 0,
                    f = e,
                    p = null;
                t: for (;;) {
                    for (var E; f !== n || l !== 0 && f.nodeType !== 3 || (a = o + l), f !== i || r !== 0 && f.nodeType !== 3 || (u = o + r), f.nodeType === 3 && (o += f.nodeValue.length), (E = f.firstChild) !== null;) p = f, f = E;
                    for (;;) {
                        if (f === e) break t;
                        if (p === n && ++s === l && (a = o), p === i && ++c === r && (u = o), (E = f.nextSibling) !== null) break;
                        f = p, p = f.parentNode
                    }
                    f = E
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
    for (Xo = {
            focusedElem: e,
            selectionRange: n
        }, li = !1, z = t; z !== null;)
        if (t = z, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, z = e;
        else
            for (; z !== null;) {
                t = z;
                try {
                    var S = t.alternate;
                    if (t.flags & 1024) switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (S !== null) {
                                var w = S.memoizedProps,
                                    j = S.memoizedState,
                                    h = t.stateNode,
                                    d = h.getSnapshotBeforeUpdate(t.elementType === t.type ? w : ft(t.type, w), j);
                                h.__reactInternalSnapshotBeforeUpdate = d
                            }
                            break;
                        case 3:
                            var v = t.stateNode.containerInfo;
                            v.nodeType === 1 ? v.textContent = "" : v.nodeType === 9 && v.documentElement && v.removeChild(v.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(N(163))
                    }
                } catch (C) {
                    ce(t, t.return, C)
                }
                if (e = t.sibling, e !== null) {
                    e.return = t.return, z = e;
                    break
                }
                z = t.return
            }
    return S = Os, Os = !1, S
}

function Hr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
        var l = r = r.next;
        do {
            if ((l.tag & e) === e) {
                var i = l.destroy;
                l.destroy = void 0, i !== void 0 && da(t, n, i)
            }
            l = l.next
        } while (l !== r)
    }
}

function Fi(e, t) {
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

function fa(e) {
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

function gf(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, gf(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Et], delete t[nl], delete t[qo], delete t[rm], delete t[lm])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function yf(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function Fs(e) {
    e: for (;;) {
        for (; e.sibling === null;) {
            if (e.return === null || yf(e.return)) return null;
            e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child
        }
        if (!(e.flags & 2)) return e.stateNode
    }
}

function pa(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = ai));
    else if (r !== 4 && (e = e.child, e !== null))
        for (pa(e, t, n), e = e.sibling; e !== null;) pa(e, t, n), e = e.sibling
}

function ha(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
        for (ha(e, t, n), e = e.sibling; e !== null;) ha(e, t, n), e = e.sibling
}
var Pe = null,
    pt = !1;

function Vt(e, t, n) {
    for (n = n.child; n !== null;) xf(e, t, n), n = n.sibling
}

function xf(e, t, n) {
    if (kt && typeof kt.onCommitFiberUnmount == "function") try {
        kt.onCommitFiberUnmount(_i, n)
    } catch {}
    switch (n.tag) {
        case 5:
            Te || Gn(n, t);
        case 6:
            var r = Pe,
                l = pt;
            Pe = null, Vt(e, t, n), Pe = r, pt = l, Pe !== null && (pt ? (e = Pe, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Pe.removeChild(n.stateNode));
            break;
        case 18:
            Pe !== null && (pt ? (e = Pe, n = n.stateNode, e.nodeType === 8 ? fo(e.parentNode, n) : e.nodeType === 1 && fo(e, n), Zr(e)) : fo(Pe, n.stateNode));
            break;
        case 4:
            r = Pe, l = pt, Pe = n.stateNode.containerInfo, pt = !0, Vt(e, t, n), Pe = r, pt = l;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!Te && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                l = r = r.next;
                do {
                    var i = l,
                        o = i.destroy;
                    i = i.tag, o !== void 0 && (i & 2 || i & 4) && da(n, t, o), l = l.next
                } while (l !== r)
            }
            Vt(e, t, n);
            break;
        case 1:
            if (!Te && (Gn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
            } catch (a) {
                ce(n, t, a)
            }
            Vt(e, t, n);
            break;
        case 21:
            Vt(e, t, n);
            break;
        case 22:
            n.mode & 1 ? (Te = (r = Te) || n.memoizedState !== null, Vt(e, t, n), Te = r) : Vt(e, t, n);
            break;
        default:
            Vt(e, t, n)
    }
}

function Is(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new wm), t.forEach(function(r) {
            var l = Lm.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(l, l))
        })
    }
}

function dt(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var l = n[r];
            try {
                var i = e,
                    o = t,
                    a = o;
                e: for (; a !== null;) {
                    switch (a.tag) {
                        case 5:
                            Pe = a.stateNode, pt = !1;
                            break e;
                        case 3:
                            Pe = a.stateNode.containerInfo, pt = !0;
                            break e;
                        case 4:
                            Pe = a.stateNode.containerInfo, pt = !0;
                            break e
                    }
                    a = a.return
                }
                if (Pe === null) throw Error(N(160));
                xf(i, o, l), Pe = null, pt = !1;
                var u = l.alternate;
                u !== null && (u.return = null), l.return = null
            } catch (s) {
                ce(l, t, s)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null;) wf(t, e), t = t.sibling
}

function wf(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (dt(t, e), wt(e), r & 4) {
                try {
                    Hr(3, e, e.return), Fi(3, e)
                } catch (w) {
                    ce(e, e.return, w)
                }
                try {
                    Hr(5, e, e.return)
                } catch (w) {
                    ce(e, e.return, w)
                }
            }
            break;
        case 1:
            dt(t, e), wt(e), r & 512 && n !== null && Gn(n, n.return);
            break;
        case 5:
            if (dt(t, e), wt(e), r & 512 && n !== null && Gn(n, n.return), e.flags & 32) {
                var l = e.stateNode;
                try {
                    Yr(l, "")
                } catch (w) {
                    ce(e, e.return, w)
                }
            }
            if (r & 4 && (l = e.stateNode, l != null)) {
                var i = e.memoizedProps,
                    o = n !== null ? n.memoizedProps : i,
                    a = e.type,
                    u = e.updateQueue;
                if (e.updateQueue = null, u !== null) try {
                    a === "input" && i.type === "radio" && i.name != null && Bc(l, i), Uo(a, o);
                    var s = Uo(a, i);
                    for (o = 0; o < u.length; o += 2) {
                        var c = u[o],
                            f = u[o + 1];
                        c === "style" ? Qc(l, f) : c === "dangerouslySetInnerHTML" ? Vc(l, f) : c === "children" ? Yr(l, f) : La(l, c, f, s)
                    }
                    switch (a) {
                        case "input":
                            zo(l, i);
                            break;
                        case "textarea":
                            $c(l, i);
                            break;
                        case "select":
                            var p = l._wrapperState.wasMultiple;
                            l._wrapperState.wasMultiple = !!i.multiple;
                            var E = i.value;
                            E != null ? Zn(l, !!i.multiple, E, !1) : p !== !!i.multiple && (i.defaultValue != null ? Zn(l, !!i.multiple, i.defaultValue, !0) : Zn(l, !!i.multiple, i.multiple ? [] : "", !1))
                    }
                    l[nl] = i
                } catch (w) {
                    ce(e, e.return, w)
                }
            }
            break;
        case 6:
            if (dt(t, e), wt(e), r & 4) {
                if (e.stateNode === null) throw Error(N(162));
                l = e.stateNode, i = e.memoizedProps;
                try {
                    l.nodeValue = i
                } catch (w) {
                    ce(e, e.return, w)
                }
            }
            break;
        case 3:
            if (dt(t, e), wt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                Zr(t.containerInfo)
            } catch (w) {
                ce(e, e.return, w)
            }
            break;
        case 4:
            dt(t, e), wt(e);
            break;
        case 13:
            dt(t, e), wt(e), l = e.child, l.flags & 8192 && (i = l.memoizedState !== null, l.stateNode.isHidden = i, !i || l.alternate !== null && l.alternate.memoizedState !== null || (su = pe())), r & 4 && Is(e);
            break;
        case 22:
            if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (Te = (s = Te) || c, dt(t, e), Te = s) : dt(t, e), wt(e), r & 8192) {
                if (s = e.memoizedState !== null, (e.stateNode.isHidden = s) && !c && e.mode & 1)
                    for (z = e, c = e.child; c !== null;) {
                        for (f = z = c; z !== null;) {
                            switch (p = z, E = p.child, p.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Hr(4, p, p.return);
                                    break;
                                case 1:
                                    Gn(p, p.return);
                                    var S = p.stateNode;
                                    if (typeof S.componentWillUnmount == "function") {
                                        r = p, n = p.return;
                                        try {
                                            t = r, S.props = t.memoizedProps, S.state = t.memoizedState, S.componentWillUnmount()
                                        } catch (w) {
                                            ce(r, n, w)
                                        }
                                    }
                                    break;
                                case 5:
                                    Gn(p, p.return);
                                    break;
                                case 22:
                                    if (p.memoizedState !== null) {
                                        As(f);
                                        continue
                                    }
                            }
                            E !== null ? (E.return = p, z = E) : As(f)
                        }
                        c = c.sibling
                    }
                e: for (c = null, f = e;;) {
                    if (f.tag === 5) {
                        if (c === null) {
                            c = f;
                            try {
                                l = f.stateNode, s ? (i = l.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (a = f.stateNode, u = f.memoizedProps.style, o = u != null && u.hasOwnProperty("display") ? u.display : null, a.style.display = Wc("display", o))
                            } catch (w) {
                                ce(e, e.return, w)
                            }
                        }
                    } else if (f.tag === 6) {
                        if (c === null) try {
                            f.stateNode.nodeValue = s ? "" : f.memoizedProps
                        } catch (w) {
                            ce(e, e.return, w)
                        }
                    } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
                        f.child.return = f, f = f.child;
                        continue
                    }
                    if (f === e) break e;
                    for (; f.sibling === null;) {
                        if (f.return === null || f.return === e) break e;
                        c === f && (c = null), f = f.return
                    }
                    c === f && (c = null), f.sibling.return = f.return, f = f.sibling
                }
            }
            break;
        case 19:
            dt(t, e), wt(e), r & 4 && Is(e);
            break;
        case 21:
            break;
        default:
            dt(t, e), wt(e)
    }
}

function wt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null;) {
                    if (yf(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(N(160))
            }
            switch (r.tag) {
                case 5:
                    var l = r.stateNode;
                    r.flags & 32 && (Yr(l, ""), r.flags &= -33);
                    var i = Fs(e);
                    ha(e, i, l);
                    break;
                case 3:
                case 4:
                    var o = r.stateNode.containerInfo,
                        a = Fs(e);
                    pa(e, a, o);
                    break;
                default:
                    throw Error(N(161))
            }
        }
        catch (u) {
            ce(e, e.return, u)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}

function Em(e, t, n) {
    z = e, Sf(e)
}

function Sf(e, t, n) {
    for (var r = (e.mode & 1) !== 0; z !== null;) {
        var l = z,
            i = l.child;
        if (l.tag === 22 && r) {
            var o = l.memoizedState !== null || Il;
            if (!o) {
                var a = l.alternate,
                    u = a !== null && a.memoizedState !== null || Te;
                a = Il;
                var s = Te;
                if (Il = o, (Te = u) && !s)
                    for (z = l; z !== null;) o = z, u = o.child, o.tag === 22 && o.memoizedState !== null ? Bs(l) : u !== null ? (u.return = o, z = u) : Bs(l);
                for (; i !== null;) z = i, Sf(i), i = i.sibling;
                z = l, Il = a, Te = s
            }
            Us(e)
        } else l.subtreeFlags & 8772 && i !== null ? (i.return = l, z = i) : Us(e)
    }
}

function Us(e) {
    for (; z !== null;) {
        var t = z;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Te || Fi(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !Te)
                            if (n === null) r.componentDidMount();
                            else {
                                var l = t.elementType === t.type ? n.memoizedProps : ft(t.type, n.memoizedProps);
                                r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var i = t.updateQueue;
                        i !== null && Ss(t, i, r);
                        break;
                    case 3:
                        var o = t.updateQueue;
                        if (o !== null) {
                            if (n = null, t.child !== null) switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                            }
                            Ss(t, o, n)
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
                            var s = t.alternate;
                            if (s !== null) {
                                var c = s.memoizedState;
                                if (c !== null) {
                                    var f = c.dehydrated;
                                    f !== null && Zr(f)
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
                        throw Error(N(163))
                }
                Te || t.flags & 512 && fa(t)
            } catch (p) {
                ce(t, t.return, p)
            }
        }
        if (t === e) {
            z = null;
            break
        }
        if (n = t.sibling, n !== null) {
            n.return = t.return, z = n;
            break
        }
        z = t.return
    }
}

function As(e) {
    for (; z !== null;) {
        var t = z;
        if (t === e) {
            z = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return, z = n;
            break
        }
        z = t.return
    }
}

function Bs(e) {
    for (; z !== null;) {
        var t = z;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        Fi(4, t)
                    } catch (u) {
                        ce(t, n, u)
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var l = t.return;
                        try {
                            r.componentDidMount()
                        } catch (u) {
                            ce(t, l, u)
                        }
                    }
                    var i = t.return;
                    try {
                        fa(t)
                    } catch (u) {
                        ce(t, i, u)
                    }
                    break;
                case 5:
                    var o = t.return;
                    try {
                        fa(t)
                    } catch (u) {
                        ce(t, o, u)
                    }
            }
        } catch (u) {
            ce(t, t.return, u)
        }
        if (t === e) {
            z = null;
            break
        }
        var a = t.sibling;
        if (a !== null) {
            a.return = t.return, z = a;
            break
        }
        z = t.return
    }
}
var km = Math.ceil,
    yi = Ft.ReactCurrentDispatcher,
    au = Ft.ReactCurrentOwner,
    ot = Ft.ReactCurrentBatchConfig,
    X = 0,
    Se = null,
    he = null,
    je = 0,
    Ye = 0,
    Xn = sn(0),
    ve = 0,
    ul = null,
    Cn = 0,
    Ii = 0,
    uu = 0,
    Vr = null,
    Ae = null,
    su = 0,
    sr = 1 / 0,
    Nt = null,
    xi = !1,
    ma = null,
    nn = null,
    Ul = !1,
    Jt = null,
    wi = 0,
    Wr = 0,
    va = null,
    Xl = -1,
    Jl = 0;

function Fe() {
    return X & 6 ? pe() : Xl !== -1 ? Xl : Xl = pe()
}

function rn(e) {
    return e.mode & 1 ? X & 2 && je !== 0 ? je & -je : om.transition !== null ? (Jl === 0 && (Jl = rd()), Jl) : (e = J, e !== 0 || (e = window.event, e = e === void 0 ? 16 : cd(e.type)), e) : 1
}

function gt(e, t, n, r) {
    if (50 < Wr) throw Wr = 0, va = null, Error(N(185));
    pl(e, n, r), (!(X & 2) || e !== Se) && (e === Se && (!(X & 2) && (Ii |= n), ve === 4 && Gt(e, je)), Ve(e, r), n === 1 && X === 0 && !(t.mode & 1) && (sr = pe() + 500, zi && cn()))
}

function Ve(e, t) {
    var n = e.callbackNode;
    oh(e, t);
    var r = ri(e, e === Se ? je : 0);
    if (r === 0) n !== null && Xu(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
        if (n != null && Xu(n), t === 1) e.tag === 0 ? im($s.bind(null, e)) : Rd($s.bind(null, e)), tm(function() {
            !(X & 6) && cn()
        }), n = null;
        else {
            switch (ld(r)) {
                case 1:
                    n = Oa;
                    break;
                case 4:
                    n = td;
                    break;
                case 16:
                    n = ni;
                    break;
                case 536870912:
                    n = nd;
                    break;
                default:
                    n = ni
            }
            n = Rf(n, Ef.bind(null, e))
        }
        e.callbackPriority = t, e.callbackNode = n
    }
}

function Ef(e, t) {
    if (Xl = -1, Jl = 0, X & 6) throw Error(N(327));
    var n = e.callbackNode;
    if (nr() && e.callbackNode !== n) return null;
    var r = ri(e, e === Se ? je : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = Si(e, r);
    else {
        t = r;
        var l = X;
        X |= 2;
        var i = Cf();
        (Se !== e || je !== t) && (Nt = null, sr = pe() + 500, xn(e, t));
        do try {
            Pm();
            break
        } catch (a) {
            kf(e, a)
        }
        while (!0);
        Ga(), yi.current = i, X = l, he !== null ? t = 0 : (Se = null, je = 0, t = ve)
    }
    if (t !== 0) {
        if (t === 2 && (l = Vo(e), l !== 0 && (r = l, t = ga(e, l))), t === 1) throw n = ul, xn(e, 0), Gt(e, r), Ve(e, pe()), n;
        if (t === 6) Gt(e, r);
        else {
            if (l = e.current.alternate, !(r & 30) && !Cm(l) && (t = Si(e, r), t === 2 && (i = Vo(e), i !== 0 && (r = i, t = ga(e, i))), t === 1)) throw n = ul, xn(e, 0), Gt(e, r), Ve(e, pe()), n;
            switch (e.finishedWork = l, e.finishedLanes = r, t) {
                case 0:
                case 1:
                    throw Error(N(345));
                case 2:
                    pn(e, Ae, Nt);
                    break;
                case 3:
                    if (Gt(e, r), (r & 130023424) === r && (t = su + 500 - pe(), 10 < t)) {
                        if (ri(e, 0) !== 0) break;
                        if (l = e.suspendedLanes, (l & r) !== r) {
                            Fe(), e.pingedLanes |= e.suspendedLanes & l;
                            break
                        }
                        e.timeoutHandle = Zo(pn.bind(null, e, Ae, Nt), t);
                        break
                    }
                    pn(e, Ae, Nt);
                    break;
                case 4:
                    if (Gt(e, r), (r & 4194240) === r) break;
                    for (t = e.eventTimes, l = -1; 0 < r;) {
                        var o = 31 - vt(r);
                        i = 1 << o, o = t[o], o > l && (l = o), r &= ~i
                    }
                    if (r = l, r = pe() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * km(r / 1960)) - r, 10 < r) {
                        e.timeoutHandle = Zo(pn.bind(null, e, Ae, Nt), r);
                        break
                    }
                    pn(e, Ae, Nt);
                    break;
                case 5:
                    pn(e, Ae, Nt);
                    break;
                default:
                    throw Error(N(329))
            }
        }
    }
    return Ve(e, pe()), e.callbackNode === n ? Ef.bind(null, e) : null
}

function ga(e, t) {
    var n = Vr;
    return e.current.memoizedState.isDehydrated && (xn(e, t).flags |= 256), e = Si(e, t), e !== 2 && (t = Ae, Ae = n, t !== null && ya(t)), e
}

function ya(e) {
    Ae === null ? Ae = e : Ae.push.apply(Ae, e)
}

function Cm(e) {
    for (var t = e;;) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores, n !== null))
                for (var r = 0; r < n.length; r++) {
                    var l = n[r],
                        i = l.getSnapshot;
                    l = l.value;
                    try {
                        if (!yt(i(), l)) return !1
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

function Gt(e, t) {
    for (t &= ~uu, t &= ~Ii, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var n = 31 - vt(t),
            r = 1 << n;
        e[n] = -1, t &= ~r
    }
}

function $s(e) {
    if (X & 6) throw Error(N(327));
    nr();
    var t = ri(e, 0);
    if (!(t & 1)) return Ve(e, pe()), null;
    var n = Si(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Vo(e);
        r !== 0 && (t = r, n = ga(e, r))
    }
    if (n === 1) throw n = ul, xn(e, 0), Gt(e, t), Ve(e, pe()), n;
    if (n === 6) throw Error(N(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, pn(e, Ae, Nt), Ve(e, pe()), null
}

function cu(e, t) {
    var n = X;
    X |= 1;
    try {
        return e(t)
    } finally {
        X = n, X === 0 && (sr = pe() + 500, zi && cn())
    }
}

function Nn(e) {
    Jt !== null && Jt.tag === 0 && !(X & 6) && nr();
    var t = X;
    X |= 1;
    var n = ot.transition,
        r = J;
    try {
        if (ot.transition = null, J = 1, e) return e()
    } finally {
        J = r, ot.transition = n, X = t, !(X & 6) && cn()
    }
}

function du() {
    Ye = Xn.current, te(Xn)
}

function xn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, em(n)), he !== null)
        for (n = he.return; n !== null;) {
            var r = n;
            switch (Qa(r), r.tag) {
                case 1:
                    r = r.type.childContextTypes, r != null && ui();
                    break;
                case 3:
                    ar(), te($e), te(De), eu();
                    break;
                case 5:
                    ba(r);
                    break;
                case 4:
                    ar();
                    break;
                case 13:
                    te(ae);
                    break;
                case 19:
                    te(ae);
                    break;
                case 10:
                    Xa(r.type._context);
                    break;
                case 22:
                case 23:
                    du()
            }
            n = n.return
        }
    if (Se = e, he = e = ln(e.current, null), je = Ye = t, ve = 0, ul = null, uu = Ii = Cn = 0, Ae = Vr = null, mn !== null) {
        for (t = 0; t < mn.length; t++)
            if (n = mn[t], r = n.interleaved, r !== null) {
                n.interleaved = null;
                var l = r.next,
                    i = n.pending;
                if (i !== null) {
                    var o = i.next;
                    i.next = l, r.next = o
                }
                n.pending = r
            }
        mn = null
    }
    return e
}

function kf(e, t) {
    do {
        var n = he;
        try {
            if (Ga(), Kl.current = gi, vi) {
                for (var r = ue.memoizedState; r !== null;) {
                    var l = r.queue;
                    l !== null && (l.pending = null), r = r.next
                }
                vi = !1
            }
            if (kn = 0, we = me = ue = null, $r = !1, il = 0, au.current = null, n === null || n.return === null) {
                ve = 1, ul = t, he = null;
                break
            }
            e: {
                var i = e,
                    o = n.return,
                    a = n,
                    u = t;
                if (t = je, a.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
                    var s = u,
                        c = a,
                        f = c.tag;
                    if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                        var p = c.alternate;
                        p ? (c.updateQueue = p.updateQueue, c.memoizedState = p.memoizedState, c.lanes = p.lanes) : (c.updateQueue = null, c.memoizedState = null)
                    }
                    var E = _s(o);
                    if (E !== null) {
                        E.flags &= -257, Rs(E, o, a, i, t), E.mode & 1 && js(i, s, t), t = E, u = s;
                        var S = t.updateQueue;
                        if (S === null) {
                            var w = new Set;
                            w.add(u), t.updateQueue = w
                        } else S.add(u);
                        break e
                    } else {
                        if (!(t & 1)) {
                            js(i, s, t), fu();
                            break e
                        }
                        u = Error(N(426))
                    }
                } else if (le && a.mode & 1) {
                    var j = _s(o);
                    if (j !== null) {
                        !(j.flags & 65536) && (j.flags |= 256), Rs(j, o, a, i, t), Ka(ur(u, a));
                        break e
                    }
                }
                i = u = ur(u, a),
                ve !== 4 && (ve = 2),
                Vr === null ? Vr = [i] : Vr.push(i),
                i = o;do {
                    switch (i.tag) {
                        case 3:
                            i.flags |= 65536, t &= -t, i.lanes |= t;
                            var h = of (i, u, t);
                            ws(i, h);
                            break e;
                        case 1:
                            a = u;
                            var d = i.type,
                                v = i.stateNode;
                            if (!(i.flags & 128) && (typeof d.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (nn === null || !nn.has(v)))) {
                                i.flags |= 65536, t &= -t, i.lanes |= t;
                                var C = af(i, a, t);
                                ws(i, C);
                                break e
                            }
                    }
                    i = i.return
                } while (i !== null)
            }
            Pf(n)
        } catch (L) {
            t = L, he === n && n !== null && (he = n = n.return);
            continue
        }
        break
    } while (!0)
}

function Cf() {
    var e = yi.current;
    return yi.current = gi, e === null ? gi : e
}

function fu() {
    (ve === 0 || ve === 3 || ve === 2) && (ve = 4), Se === null || !(Cn & 268435455) && !(Ii & 268435455) || Gt(Se, je)
}

function Si(e, t) {
    var n = X;
    X |= 2;
    var r = Cf();
    (Se !== e || je !== t) && (Nt = null, xn(e, t));
    do try {
        Nm();
        break
    } catch (l) {
        kf(e, l)
    }
    while (!0);
    if (Ga(), X = n, yi.current = r, he !== null) throw Error(N(261));
    return Se = null, je = 0, ve
}

function Nm() {
    for (; he !== null;) Nf(he)
}

function Pm() {
    for (; he !== null && !Zp();) Nf(he)
}

function Nf(e) {
    var t = _f(e.alternate, e, Ye);
    e.memoizedProps = e.pendingProps, t === null ? Pf(e) : he = t, au.current = null
}

function Pf(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return, t.flags & 32768) {
            if (n = xm(n, t), n !== null) {
                n.flags &= 32767, he = n;
                return
            }
            if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
            else {
                ve = 6, he = null;
                return
            }
        } else if (n = ym(n, t, Ye), n !== null) {
            he = n;
            return
        }
        if (t = t.sibling, t !== null) {
            he = t;
            return
        }
        he = t = e
    } while (t !== null);
    ve === 0 && (ve = 5)
}

function pn(e, t, n) {
    var r = J,
        l = ot.transition;
    try {
        ot.transition = null, J = 1, jm(e, t, n, r)
    } finally {
        ot.transition = l, J = r
    }
    return null
}

function jm(e, t, n, r) {
    do nr(); while (Jt !== null);
    if (X & 6) throw Error(N(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(N(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (ah(e, i), e === Se && (he = Se = null, je = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Ul || (Ul = !0, Rf(ni, function() {
            return nr(), null
        })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
        i = ot.transition, ot.transition = null;
        var o = J;
        J = 1;
        var a = X;
        X |= 4, au.current = null, Sm(e, n), wf(n, e), Yh(Xo), li = !!Go, Xo = Go = null, e.current = n, Em(n), qp(), X = a, J = o, ot.transition = i
    } else e.current = n;
    if (Ul && (Ul = !1, Jt = e, wi = l), i = e.pendingLanes, i === 0 && (nn = null), th(n.stateNode), Ve(e, pe()), t !== null)
        for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, {
            componentStack: l.stack,
            digest: l.digest
        });
    if (xi) throw xi = !1, e = ma, ma = null, e;
    return wi & 1 && e.tag !== 0 && nr(), i = e.pendingLanes, i & 1 ? e === va ? Wr++ : (Wr = 0, va = e) : Wr = 0, cn(), null
}

function nr() {
    if (Jt !== null) {
        var e = ld(wi),
            t = ot.transition,
            n = J;
        try {
            if (ot.transition = null, J = 16 > e ? 16 : e, Jt === null) var r = !1;
            else {
                if (e = Jt, Jt = null, wi = 0, X & 6) throw Error(N(331));
                var l = X;
                for (X |= 4, z = e.current; z !== null;) {
                    var i = z,
                        o = i.child;
                    if (z.flags & 16) {
                        var a = i.deletions;
                        if (a !== null) {
                            for (var u = 0; u < a.length; u++) {
                                var s = a[u];
                                for (z = s; z !== null;) {
                                    var c = z;
                                    switch (c.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Hr(8, c, i)
                                    }
                                    var f = c.child;
                                    if (f !== null) f.return = c, z = f;
                                    else
                                        for (; z !== null;) {
                                            c = z;
                                            var p = c.sibling,
                                                E = c.return;
                                            if (gf(c), c === s) {
                                                z = null;
                                                break
                                            }
                                            if (p !== null) {
                                                p.return = E, z = p;
                                                break
                                            }
                                            z = E
                                        }
                                }
                            }
                            var S = i.alternate;
                            if (S !== null) {
                                var w = S.child;
                                if (w !== null) {
                                    S.child = null;
                                    do {
                                        var j = w.sibling;
                                        w.sibling = null, w = j
                                    } while (w !== null)
                                }
                            }
                            z = i
                        }
                    }
                    if (i.subtreeFlags & 2064 && o !== null) o.return = i, z = o;
                    else e: for (; z !== null;) {
                        if (i = z, i.flags & 2048) switch (i.tag) {
                            case 0:
                            case 11:
                            case 15:
                                Hr(9, i, i.return)
                        }
                        var h = i.sibling;
                        if (h !== null) {
                            h.return = i.return, z = h;
                            break e
                        }
                        z = i.return
                    }
                }
                var d = e.current;
                for (z = d; z !== null;) {
                    o = z;
                    var v = o.child;
                    if (o.subtreeFlags & 2064 && v !== null) v.return = o, z = v;
                    else e: for (o = d; z !== null;) {
                        if (a = z, a.flags & 2048) try {
                            switch (a.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Fi(9, a)
                            }
                        } catch (L) {
                            ce(a, a.return, L)
                        }
                        if (a === o) {
                            z = null;
                            break e
                        }
                        var C = a.sibling;
                        if (C !== null) {
                            C.return = a.return, z = C;
                            break e
                        }
                        z = a.return
                    }
                }
                if (X = l, cn(), kt && typeof kt.onPostCommitFiberRoot == "function") try {
                    kt.onPostCommitFiberRoot(_i, e)
                } catch {}
                r = !0
            }
            return r
        } finally {
            J = n, ot.transition = t
        }
    }
    return !1
}

function Hs(e, t, n) {
    t = ur(n, t), t = of (e, t, 1), e = tn(e, t, 1), t = Fe(), e !== null && (pl(e, 1, t), Ve(e, t))
}

function ce(e, t, n) {
    if (e.tag === 3) Hs(e, e, n);
    else
        for (; t !== null;) {
            if (t.tag === 3) {
                Hs(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (nn === null || !nn.has(r))) {
                    e = ur(n, e), e = af(t, e, 1), t = tn(t, e, 1), e = Fe(), t !== null && (pl(t, 1, e), Ve(t, e));
                    break
                }
            }
            t = t.return
        }
}

function _m(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = Fe(), e.pingedLanes |= e.suspendedLanes & n, Se === e && (je & n) === n && (ve === 4 || ve === 3 && (je & 130023424) === je && 500 > pe() - su ? xn(e, 0) : uu |= n), Ve(e, t)
}

function jf(e, t) {
    t === 0 && (e.mode & 1 ? (t = _l, _l <<= 1, !(_l & 130023424) && (_l = 4194304)) : t = 1);
    var n = Fe();
    e = Mt(e, t), e !== null && (pl(e, t, n), Ve(e, n))
}

function Rm(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), jf(e, n)
}

function Lm(e, t) {
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
            throw Error(N(314))
    }
    r !== null && r.delete(t), jf(e, n)
}
var _f;
_f = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || $e.current) Be = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return Be = !1, gm(e, t, n);
            Be = !!(e.flags & 131072)
        }
    else Be = !1, le && t.flags & 1048576 && Ld(t, di, t.index);
    switch (t.lanes = 0, t.tag) {
        case 2:
            var r = t.type;
            Gl(e, t), e = t.pendingProps;
            var l = lr(t, De.current);
            tr(t, n), l = nu(null, t, r, e, l, n);
            var i = ru();
            return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, He(r) ? (i = !0, si(t)) : i = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Za(t), l.updater = Mi, t.stateNode = l, l._reactInternals = t, la(t, r, e, n), t = aa(null, t, r, !0, i, n)) : (t.tag = 0, le && i && Wa(t), Oe(null, t, l, n), t = t.child), t;
        case 16:
            r = t.elementType;
            e: {
                switch (Gl(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Dm(r), e = ft(r, e), l) {
                    case 0:
                        t = oa(null, t, r, e, n);
                        break e;
                    case 1:
                        t = Ds(null, t, r, e, n);
                        break e;
                    case 11:
                        t = Ls(null, t, r, e, n);
                        break e;
                    case 14:
                        t = Ts(null, t, r, ft(r.type, e), n);
                        break e
                }
                throw Error(N(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : ft(r, l), oa(e, t, r, l, n);
        case 1:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : ft(r, l), Ds(e, t, r, l, n);
        case 3:
            e: {
                if (df(t), e === null) throw Error(N(387));r = t.pendingProps,
                i = t.memoizedState,
                l = i.element,
                Md(e, t),
                hi(t, r, null, n);
                var o = t.memoizedState;
                if (r = o.element, i.isDehydrated)
                    if (i = {
                            element: r,
                            isDehydrated: !1,
                            cache: o.cache,
                            pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                            transitions: o.transitions
                        }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
                        l = ur(Error(N(423)), t), t = zs(e, t, r, n, l);
                        break e
                    } else if (r !== l) {
                    l = ur(Error(N(424)), t), t = zs(e, t, r, n, l);
                    break e
                } else
                    for (Ge = en(t.stateNode.containerInfo.firstChild), Xe = t, le = !0, mt = null, n = Ud(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
                else {
                    if (ir(), r === l) {
                        t = Ot(e, t, n);
                        break e
                    }
                    Oe(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return Ad(t), e === null && ta(t), r = t.type, l = t.pendingProps, i = e !== null ? e.memoizedProps : null, o = l.children, Jo(r, l) ? o = null : i !== null && Jo(r, i) && (t.flags |= 32), cf(e, t), Oe(e, t, o, n), t.child;
        case 6:
            return e === null && ta(t), null;
        case 13:
            return ff(e, t, n);
        case 4:
            return qa(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = or(t, null, r, n) : Oe(e, t, r, n), t.child;
        case 11:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : ft(r, l), Ls(e, t, r, l, n);
        case 7:
            return Oe(e, t, t.pendingProps, n), t.child;
        case 8:
            return Oe(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return Oe(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (r = t.type._context, l = t.pendingProps, i = t.memoizedProps, o = l.value, b(fi, r._currentValue), r._currentValue = o, i !== null)
                    if (yt(i.value, o)) {
                        if (i.children === l.children && !$e.current) {
                            t = Ot(e, t, n);
                            break e
                        }
                    } else
                        for (i = t.child, i !== null && (i.return = t); i !== null;) {
                            var a = i.dependencies;
                            if (a !== null) {
                                o = i.child;
                                for (var u = a.firstContext; u !== null;) {
                                    if (u.context === r) {
                                        if (i.tag === 1) {
                                            u = Lt(-1, n & -n), u.tag = 2;
                                            var s = i.updateQueue;
                                            if (s !== null) {
                                                s = s.shared;
                                                var c = s.pending;
                                                c === null ? u.next = u : (u.next = c.next, c.next = u), s.pending = u
                                            }
                                        }
                                        i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), na(i.return, n, t), a.lanes |= n;
                                        break
                                    }
                                    u = u.next
                                }
                            } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
                            else if (i.tag === 18) {
                                if (o = i.return, o === null) throw Error(N(341));
                                o.lanes |= n, a = o.alternate, a !== null && (a.lanes |= n), na(o, n, t), o = i.sibling
                            } else o = i.child;
                            if (o !== null) o.return = i;
                            else
                                for (o = i; o !== null;) {
                                    if (o === t) {
                                        o = null;
                                        break
                                    }
                                    if (i = o.sibling, i !== null) {
                                        i.return = o.return, o = i;
                                        break
                                    }
                                    o = o.return
                                }
                            i = o
                        }
                Oe(e, t, l.children, n),
                t = t.child
            }
            return t;
        case 9:
            return l = t.type, r = t.pendingProps.children, tr(t, n), l = at(l), r = r(l), t.flags |= 1, Oe(e, t, r, n), t.child;
        case 14:
            return r = t.type, l = ft(r, t.pendingProps), l = ft(r.type, l), Ts(e, t, r, l, n);
        case 15:
            return uf(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : ft(r, l), Gl(e, t), t.tag = 1, He(r) ? (e = !0, si(t)) : e = !1, tr(t, n), Fd(t, r, l), la(t, r, l, n), aa(null, t, r, !0, e, n);
        case 19:
            return pf(e, t, n);
        case 22:
            return sf(e, t, n)
    }
    throw Error(N(156, t.tag))
};

function Rf(e, t) {
    return ed(e, t)
}

function Tm(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function it(e, t, n, r) {
    return new Tm(e, t, n, r)
}

function pu(e) {
    return e = e.prototype, !(!e || !e.isReactComponent)
}

function Dm(e) {
    if (typeof e == "function") return pu(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof, e === Da) return 11;
        if (e === za) return 14
    }
    return 2
}

function ln(e, t) {
    var n = e.alternate;
    return n === null ? (n = it(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function Zl(e, t, n, r, l, i) {
    var o = 2;
    if (r = e, typeof e == "function") pu(e) && (o = 1);
    else if (typeof e == "string") o = 5;
    else e: switch (e) {
        case An:
            return wn(n.children, l, i, t);
        case Ta:
            o = 8, l |= 8;
            break;
        case _o:
            return e = it(12, n, t, l | 2), e.elementType = _o, e.lanes = i, e;
        case Ro:
            return e = it(13, n, t, l), e.elementType = Ro, e.lanes = i, e;
        case Lo:
            return e = it(19, n, t, l), e.elementType = Lo, e.lanes = i, e;
        case Ic:
            return Ui(n, l, i, t);
        default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                case Oc:
                    o = 10;
                    break e;
                case Fc:
                    o = 9;
                    break e;
                case Da:
                    o = 11;
                    break e;
                case za:
                    o = 14;
                    break e;
                case Qt:
                    o = 16, r = null;
                    break e
            }
            throw Error(N(130, e == null ? e : typeof e, ""))
    }
    return t = it(o, n, t, l), t.elementType = e, t.type = r, t.lanes = i, t
}

function wn(e, t, n, r) {
    return e = it(7, e, r, t), e.lanes = n, e
}

function Ui(e, t, n, r) {
    return e = it(22, e, r, t), e.elementType = Ic, e.lanes = n, e.stateNode = {
        isHidden: !1
    }, e
}

function wo(e, t, n) {
    return e = it(6, e, null, t), e.lanes = n, e
}

function So(e, t, n) {
    return t = it(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    }, t
}

function zm(e, t, n, r, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = eo(0), this.expirationTimes = eo(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = eo(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null
}

function hu(e, t, n, r, l, i, o, a, u) {
    return e = new zm(e, t, n, a, u), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = it(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, Za(i), e
}

function Mm(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Un,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}

function Lf(e) {
    if (!e) return an;
    e = e._reactInternals;
    e: {
        if (_n(e) !== e || e.tag !== 1) throw Error(N(170));
        var t = e;do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (He(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            t = t.return
        } while (t !== null);
        throw Error(N(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (He(n)) return _d(e, n, t)
    }
    return t
}

function Tf(e, t, n, r, l, i, o, a, u) {
    return e = hu(n, r, !0, e, l, i, o, a, u), e.context = Lf(null), n = e.current, r = Fe(), l = rn(n), i = Lt(r, l), i.callback = t ? ? null, tn(n, i, l), e.current.lanes = l, pl(e, l, r), Ve(e, r), e
}

function Ai(e, t, n, r) {
    var l = t.current,
        i = Fe(),
        o = rn(l);
    return n = Lf(n), t.context === null ? t.context = n : t.pendingContext = n, t = Lt(i, o), t.payload = {
        element: e
    }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = tn(l, t, o), e !== null && (gt(e, l, o, i), Ql(e, l, o)), o
}

function Ei(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}

function Vs(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}

function mu(e, t) {
    Vs(e, t), (e = e.alternate) && Vs(e, t)
}

function Om() {
    return null
}
var Df = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
};

function vu(e) {
    this._internalRoot = e
}
Bi.prototype.render = vu.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(N(409));
    Ai(e, t, null, null)
};
Bi.prototype.unmount = vu.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Nn(function() {
            Ai(null, e, null, null)
        }), t[zt] = null
    }
};

function Bi(e) {
    this._internalRoot = e
}
Bi.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = ad();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < Yt.length && t !== 0 && t < Yt[n].priority; n++);
        Yt.splice(n, 0, e), n === 0 && sd(e)
    }
};

function gu(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function $i(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function Ws() {}

function Fm(e, t, n, r, l) {
    if (l) {
        if (typeof r == "function") {
            var i = r;
            r = function() {
                var s = Ei(o);
                i.call(s)
            }
        }
        var o = Tf(t, r, e, 0, null, !1, !1, "", Ws);
        return e._reactRootContainer = o, e[zt] = o.current, el(e.nodeType === 8 ? e.parentNode : e), Nn(), o
    }
    for (; l = e.lastChild;) e.removeChild(l);
    if (typeof r == "function") {
        var a = r;
        r = function() {
            var s = Ei(u);
            a.call(s)
        }
    }
    var u = hu(e, 0, !1, null, null, !1, !1, "", Ws);
    return e._reactRootContainer = u, e[zt] = u.current, el(e.nodeType === 8 ? e.parentNode : e), Nn(function() {
        Ai(t, u, n, r)
    }), u
}

function Hi(e, t, n, r, l) {
    var i = n._reactRootContainer;
    if (i) {
        var o = i;
        if (typeof l == "function") {
            var a = l;
            l = function() {
                var u = Ei(o);
                a.call(u)
            }
        }
        Ai(t, o, e, l)
    } else o = Fm(n, t, e, l, r);
    return Ei(o)
}
id = function(e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = Mr(t.pendingLanes);
                n !== 0 && (Fa(t, n | 1), Ve(t, pe()), !(X & 6) && (sr = pe() + 500, cn()))
            }
            break;
        case 13:
            Nn(function() {
                var r = Mt(e, 1);
                if (r !== null) {
                    var l = Fe();
                    gt(r, e, 1, l)
                }
            }), mu(e, 1)
    }
};
Ia = function(e) {
    if (e.tag === 13) {
        var t = Mt(e, 134217728);
        if (t !== null) {
            var n = Fe();
            gt(t, e, 134217728, n)
        }
        mu(e, 134217728)
    }
};
od = function(e) {
    if (e.tag === 13) {
        var t = rn(e),
            n = Mt(e, t);
        if (n !== null) {
            var r = Fe();
            gt(n, e, t, r)
        }
        mu(e, t)
    }
};
ad = function() {
    return J
};
ud = function(e, t) {
    var n = J;
    try {
        return J = e, t()
    } finally {
        J = n
    }
};
Bo = function(e, t, n) {
    switch (t) {
        case "input":
            if (zo(e, n), t = n.name, n.type === "radio" && t != null) {
                for (n = e; n.parentNode;) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var l = Di(r);
                        if (!l) throw Error(N(90));
                        Ac(r), zo(r, l)
                    }
                }
            }
            break;
        case "textarea":
            $c(e, n);
            break;
        case "select":
            t = n.value, t != null && Zn(e, !!n.multiple, t, !1)
    }
};
Gc = cu;
Xc = Nn;
var Im = {
        usingClientEntryPoint: !1,
        Events: [ml, Vn, Di, Kc, Yc, cu]
    },
    _r = {
        findFiberByHostInstance: hn,
        bundleType: 0,
        version: "18.2.0",
        rendererPackageName: "react-dom"
    },
    Um = {
        bundleType: _r.bundleType,
        version: _r.version,
        rendererPackageName: _r.rendererPackageName,
        rendererConfig: _r.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Ft.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = qc(e), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: _r.findFiberByHostInstance || Om,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Al = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Al.isDisabled && Al.supportsFiber) try {
        _i = Al.inject(Um), kt = Al
    } catch {}
}
Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Im;
Ze.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!gu(t)) throw Error(N(200));
    return Mm(e, t, null, n)
};
Ze.createRoot = function(e, t) {
    if (!gu(e)) throw Error(N(299));
    var n = !1,
        r = "",
        l = Df;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = hu(e, 1, !1, null, null, n, !1, r, l), e[zt] = t.current, el(e.nodeType === 8 ? e.parentNode : e), new vu(t)
};
Ze.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(N(188)) : (e = Object.keys(e).join(","), Error(N(268, e)));
    return e = qc(t), e = e === null ? null : e.stateNode, e
};
Ze.flushSync = function(e) {
    return Nn(e)
};
Ze.hydrate = function(e, t, n) {
    if (!$i(t)) throw Error(N(200));
    return Hi(null, e, t, !0, n)
};
Ze.hydrateRoot = function(e, t, n) {
    if (!gu(e)) throw Error(N(405));
    var r = n != null && n.hydratedSources || null,
        l = !1,
        i = "",
        o = Df;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = Tf(t, null, e, 1, n ? ? null, l, !1, i, o), e[zt] = t.current, el(e), r)
        for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(n, l);
    return new Bi(t)
};
Ze.render = function(e, t, n) {
    if (!$i(t)) throw Error(N(200));
    return Hi(null, e, t, !1, n)
};
Ze.unmountComponentAtNode = function(e) {
    if (!$i(e)) throw Error(N(40));
    return e._reactRootContainer ? (Nn(function() {
        Hi(null, null, e, !1, function() {
            e._reactRootContainer = null, e[zt] = null
        })
    }), !0) : !1
};
Ze.unstable_batchedUpdates = cu;
Ze.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!$i(n)) throw Error(N(200));
    if (e == null || e._reactInternals === void 0) throw Error(N(38));
    return Hi(e, t, n, !1, r)
};
Ze.version = "18.2.0-next-9e3b772b8-20220608";

function zf() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zf)
    } catch (e) {
        console.error(e)
    }
}
zf(), Lc.exports = Ze;
var yu = Lc.exports;
const Am = xc(yu),
    Bm = yc({
        __proto__: null,
        default: Am
    }, [yu]);
var Qs = yu;
Po.createRoot = Qs.createRoot, Po.hydrateRoot = Qs.hydrateRoot;
/**
 * @remix-run/router v1.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function oe() {
    return oe = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, oe.apply(this, arguments)
}
var fe;
(function(e) {
    e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"
})(fe || (fe = {}));
const Ks = "popstate";

function $m(e) {
    e === void 0 && (e = {});

    function t(r, l) {
        let {
            pathname: i,
            search: o,
            hash: a
        } = r.location;
        return sl("", {
            pathname: i,
            search: o,
            hash: a
        }, l.state && l.state.usr || null, l.state && l.state.key || "default")
    }

    function n(r, l) {
        return typeof l == "string" ? l : Pn(l)
    }
    return Vm(t, n, null, e)
}

function Q(e, t) {
    if (e === !1 || e === null || typeof e > "u") throw new Error(t)
}

function cr(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}

function Hm() {
    return Math.random().toString(36).substr(2, 8)
}

function Ys(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}

function sl(e, t, n, r) {
    return n === void 0 && (n = null), oe({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? It(t) : t, {
        state: n,
        key: t && t.key || r || Hm()
    })
}

function Pn(e) {
    let {
        pathname: t = "/",
        search: n = "",
        hash: r = ""
    } = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t
}

function It(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e)
    }
    return t
}

function Vm(e, t, n, r) {
    r === void 0 && (r = {});
    let {
        window: l = document.defaultView,
        v5Compat: i = !1
    } = r, o = l.history, a = fe.Pop, u = null, s = c();
    s == null && (s = 0, o.replaceState(oe({}, o.state, {
        idx: s
    }), ""));

    function c() {
        return (o.state || {
            idx: null
        }).idx
    }

    function f() {
        a = fe.Pop;
        let j = c(),
            h = j == null ? null : j - s;
        s = j, u && u({
            action: a,
            location: w.location,
            delta: h
        })
    }

    function p(j, h) {
        a = fe.Push;
        let d = sl(w.location, j, h);
        n && n(d, j), s = c() + 1;
        let v = Ys(d, s),
            C = w.createHref(d);
        try {
            o.pushState(v, "", C)
        } catch (L) {
            if (L instanceof DOMException && L.name === "DataCloneError") throw L;
            l.location.assign(C)
        }
        i && u && u({
            action: a,
            location: w.location,
            delta: 1
        })
    }

    function E(j, h) {
        a = fe.Replace;
        let d = sl(w.location, j, h);
        n && n(d, j), s = c();
        let v = Ys(d, s),
            C = w.createHref(d);
        o.replaceState(v, "", C), i && u && u({
            action: a,
            location: w.location,
            delta: 0
        })
    }

    function S(j) {
        let h = l.location.origin !== "null" ? l.location.origin : l.location.href,
            d = typeof j == "string" ? j : Pn(j);
        return d = d.replace(/ $/, "%20"), Q(h, "No window.location.(origin|href) available to create URL for href: " + d), new URL(d, h)
    }
    let w = {
        get action() {
            return a
        },
        get location() {
            return e(l, o)
        },
        listen(j) {
            if (u) throw new Error("A history only accepts one active listener");
            return l.addEventListener(Ks, f), u = j, () => {
                l.removeEventListener(Ks, f), u = null
            }
        },
        createHref(j) {
            return t(l, j)
        },
        createURL: S,
        encodeLocation(j) {
            let h = S(j);
            return {
                pathname: h.pathname,
                search: h.search,
                hash: h.hash
            }
        },
        push: p,
        replace: E,
        go(j) {
            return o.go(j)
        }
    };
    return w
}
var re;
(function(e) {
    e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"
})(re || (re = {}));
const Wm = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);

function Qm(e) {
    return e.index === !0
}

function xa(e, t, n, r) {
    return n === void 0 && (n = []), r === void 0 && (r = {}), e.map((l, i) => {
        let o = [...n, i],
            a = typeof l.id == "string" ? l.id : o.join("-");
        if (Q(l.index !== !0 || !l.children, "Cannot specify children on an index route"), Q(!r[a], 'Found a route id collision on id "' + a + `".  Route id's must be globally unique within Data Router usages`), Qm(l)) {
            let u = oe({}, l, t(l), {
                id: a
            });
            return r[a] = u, u
        } else {
            let u = oe({}, l, t(l), {
                id: a,
                children: void 0
            });
            return r[a] = u, l.children && (u.children = xa(l.children, t, o, r)), u
        }
    })
}

function Jn(e, t, n) {
    n === void 0 && (n = "/");
    let r = typeof t == "string" ? It(t) : t,
        l = hr(r.pathname || "/", n);
    if (l == null) return null;
    let i = Mf(e);
    Ym(i);
    let o = null;
    for (let a = 0; o == null && a < i.length; ++a) {
        let u = iv(l);
        o = nv(i[a], u)
    }
    return o
}

function Km(e, t) {
    let {
        route: n,
        pathname: r,
        params: l
    } = e;
    return {
        id: n.id,
        pathname: r,
        params: l,
        data: t[n.id],
        handle: n.handle
    }
}

function Mf(e, t, n, r) {
    t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
    let l = (i, o, a) => {
        let u = {
            relativePath: a === void 0 ? i.path || "" : a,
            caseSensitive: i.caseSensitive === !0,
            childrenIndex: o,
            route: i
        };
        u.relativePath.startsWith("/") && (Q(u.relativePath.startsWith(r), 'Absolute route path "' + u.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), u.relativePath = u.relativePath.slice(r.length));
        let s = Tt([r, u.relativePath]),
            c = n.concat(u);
        i.children && i.children.length > 0 && (Q(i.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + s + '".')), Mf(i.children, t, c, s)), !(i.path == null && !i.index) && t.push({
            path: s,
            score: ev(s, i.index),
            routesMeta: c
        })
    };
    return e.forEach((i, o) => {
        var a;
        if (i.path === "" || !((a = i.path) != null && a.includes("?"))) l(i, o);
        else
            for (let u of Of(i.path)) l(i, o, u)
    }), t
}

function Of(e) {
    let t = e.split("/");
    if (t.length === 0) return [];
    let [n, ...r] = t, l = n.endsWith("?"), i = n.replace(/\?$/, "");
    if (r.length === 0) return l ? [i, ""] : [i];
    let o = Of(r.join("/")),
        a = [];
    return a.push(...o.map(u => u === "" ? i : [i, u].join("/"))), l && a.push(...o), a.map(u => e.startsWith("/") && u === "" ? "/" : u)
}

function Ym(e) {
    e.sort((t, n) => t.score !== n.score ? n.score - t.score : tv(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const Gm = /^:[\w-]+$/,
    Xm = 3,
    Jm = 2,
    Zm = 1,
    qm = 10,
    bm = -2,
    Gs = e => e === "*";

function ev(e, t) {
    let n = e.split("/"),
        r = n.length;
    return n.some(Gs) && (r += bm), t && (r += Jm), n.filter(l => !Gs(l)).reduce((l, i) => l + (Gm.test(i) ? Xm : i === "" ? Zm : qm), r)
}

function tv(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l]) ? e[e.length - 1] - t[t.length - 1] : 0
}

function nv(e, t) {
    let {
        routesMeta: n
    } = e, r = {}, l = "/", i = [];
    for (let o = 0; o < n.length; ++o) {
        let a = n[o],
            u = o === n.length - 1,
            s = l === "/" ? t : t.slice(l.length) || "/",
            c = rv({
                path: a.relativePath,
                caseSensitive: a.caseSensitive,
                end: u
            }, s);
        if (!c) return null;
        Object.assign(r, c.params);
        let f = a.route;
        i.push({
            params: r,
            pathname: Tt([l, c.pathname]),
            pathnameBase: uv(Tt([l, c.pathnameBase])),
            route: f
        }), c.pathnameBase !== "/" && (l = Tt([l, c.pathnameBase]))
    }
    return i
}

function rv(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let [n, r] = lv(e.path, e.caseSensitive, e.end), l = t.match(n);
    if (!l) return null;
    let i = l[0],
        o = i.replace(/(.)\/+$/, "$1"),
        a = l.slice(1);
    return {
        params: r.reduce((s, c, f) => {
            let {
                paramName: p,
                isOptional: E
            } = c;
            if (p === "*") {
                let w = a[f] || "";
                o = i.slice(0, i.length - w.length).replace(/(.)\/+$/, "$1")
            }
            const S = a[f];
            return E && !S ? s[p] = void 0 : s[p] = (S || "").replace(/%2F/g, "/"), s
        }, {}),
        pathname: i,
        pathnameBase: o,
        pattern: e
    }
}

function lv(e, t, n) {
    t === void 0 && (t = !1), n === void 0 && (n = !0), cr(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = [],
        l = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (o, a, u) => (r.push({
            paramName: a,
            isOptional: u != null
        }), u ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }), l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? l += "\\/*$" : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"), [new RegExp(l, t ? void 0 : "i"), r]
}

function iv(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return cr(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e
    }
}

function hr(e, t) {
    if (t === "/") return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length,
        r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}

function ov(e, t) {
    t === void 0 && (t = "/");
    let {
        pathname: n,
        search: r = "",
        hash: l = ""
    } = typeof e == "string" ? It(e) : e;
    return {
        pathname: n ? n.startsWith("/") ? n : av(n, t) : t,
        search: sv(r),
        hash: cv(l)
    }
}

function av(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(l => {
        l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l)
    }), n.length > 1 ? n.join("/") : "/"
}

function Eo(e, t, n, r) {
    return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}

function Ff(e) {
    return e.filter((t, n) => n === 0 || t.route.path && t.route.path.length > 0)
}

function xu(e, t) {
    let n = Ff(e);
    return t ? n.map((r, l) => l === e.length - 1 ? r.pathname : r.pathnameBase) : n.map(r => r.pathnameBase)
}

function wu(e, t, n, r) {
    r === void 0 && (r = !1);
    let l;
    typeof e == "string" ? l = It(e) : (l = oe({}, e), Q(!l.pathname || !l.pathname.includes("?"), Eo("?", "pathname", "search", l)), Q(!l.pathname || !l.pathname.includes("#"), Eo("#", "pathname", "hash", l)), Q(!l.search || !l.search.includes("#"), Eo("#", "search", "hash", l)));
    let i = e === "" || l.pathname === "",
        o = i ? "/" : l.pathname,
        a;
    if (o == null) a = n;
    else {
        let f = t.length - 1;
        if (!r && o.startsWith("..")) {
            let p = o.split("/");
            for (; p[0] === "..";) p.shift(), f -= 1;
            l.pathname = p.join("/")
        }
        a = f >= 0 ? t[f] : "/"
    }
    let u = ov(l, a),
        s = o && o !== "/" && o.endsWith("/"),
        c = (i || o === ".") && n.endsWith("/");
    return !u.pathname.endsWith("/") && (s || c) && (u.pathname += "/"), u
}
const Tt = e => e.join("/").replace(/\/\/+/g, "/"),
    uv = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
    sv = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e,
    cv = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
class Su {
    constructor(t, n, r, l) {
        l === void 0 && (l = !1), this.status = t, this.statusText = n || "", this.internal = l, r instanceof Error ? (this.data = r.toString(), this.error = r) : this.data = r
    }
}

function Eu(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e
}
const If = ["post", "put", "patch", "delete"],
    dv = new Set(If),
    fv = ["get", ...If],
    pv = new Set(fv),
    hv = new Set([301, 302, 303, 307, 308]),
    mv = new Set([307, 308]),
    ko = {
        state: "idle",
        location: void 0,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0
    },
    vv = {
        state: "idle",
        data: void 0,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0
    },
    Rr = {
        state: "unblocked",
        proceed: void 0,
        reset: void 0,
        location: void 0
    },
    ku = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    gv = e => ({
        hasErrorBoundary: !!e.hasErrorBoundary
    }),
    Uf = "remix-router-transitions";

function yv(e) {
    const t = e.window ? e.window : typeof window < "u" ? window : void 0,
        n = typeof t < "u" && typeof t.document < "u" && typeof t.document.createElement < "u",
        r = !n;
    Q(e.routes.length > 0, "You must provide a non-empty routes array to createRouter");
    let l;
    if (e.mapRouteProperties) l = e.mapRouteProperties;
    else if (e.detectErrorBoundary) {
        let y = e.detectErrorBoundary;
        l = x => ({
            hasErrorBoundary: y(x)
        })
    } else l = gv;
    let i = {},
        o = xa(e.routes, l, void 0, i),
        a, u = e.basename || "/",
        s = e.unstable_dataStrategy || Ev,
        c = oe({
            v7_fetcherPersist: !1,
            v7_normalizeFormMethod: !1,
            v7_partialHydration: !1,
            v7_prependBasename: !1,
            v7_relativeSplatPath: !1,
            unstable_skipActionErrorRevalidation: !1
        }, e.future),
        f = null,
        p = new Set,
        E = null,
        S = null,
        w = null,
        j = e.hydrationData != null,
        h = Jn(o, e.history.location, u),
        d = null;
    if (h == null) {
        let y = tt(404, {
                pathname: e.history.location.pathname
            }),
            {
                matches: x,
                route: k
            } = lc(o);
        h = x, d = {
            [k.id]: y
        }
    }
    let v, C = h.some(y => y.route.lazy),
        L = h.some(y => y.route.loader);
    if (C) v = !1;
    else if (!L) v = !0;
    else if (c.v7_partialHydration) {
        let y = e.hydrationData ? e.hydrationData.loaderData : null,
            x = e.hydrationData ? e.hydrationData.errors : null,
            k = _ => _.route.loader ? typeof _.route.loader == "function" && _.route.loader.hydrate === !0 ? !1 : y && y[_.route.id] !== void 0 || x && x[_.route.id] !== void 0 : !0;
        if (x) {
            let _ = h.findIndex(M => x[M.route.id] !== void 0);
            v = h.slice(0, _ + 1).every(k)
        } else v = h.every(k)
    } else v = e.hydrationData != null;
    let D, g = {
            historyAction: e.history.action,
            location: e.history.location,
            matches: h,
            initialized: v,
            navigation: ko,
            restoreScrollPosition: e.hydrationData != null ? !1 : null,
            preventScrollReset: !1,
            revalidation: "idle",
            loaderData: e.hydrationData && e.hydrationData.loaderData || {},
            actionData: e.hydrationData && e.hydrationData.actionData || null,
            errors: e.hydrationData && e.hydrationData.errors || d,
            fetchers: new Map,
            blockers: new Map
        },
        T = fe.Pop,
        I = !1,
        O, Y = !1,
        de = new Map,
        ie = null,
        Ee = !1,
        st = !1,
        Ut = [],
        At = [],
        R = new Map,
        A = 0,
        $ = -1,
        Z = new Map,
        q = new Set,
        ct = new Map,
        We = new Map,
        Qe = new Set,
        ze = new Map,
        be = new Map,
        Ki = !1;

    function bf() {
        if (f = e.history.listen(y => {
                let {
                    action: x,
                    location: k,
                    delta: _
                } = y;
                if (Ki) {
                    Ki = !1;
                    return
                }
                cr(be.size === 0 || _ != null, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
                let M = zu({
                    currentLocation: g.location,
                    nextLocation: k,
                    historyAction: x
                });
                if (M && _ != null) {
                    Ki = !0, e.history.go(_ * -1), xl(M, {
                        state: "blocked",
                        location: k,
                        proceed() {
                            xl(M, {
                                state: "proceeding",
                                proceed: void 0,
                                reset: void 0,
                                location: k
                            }), e.history.go(_)
                        },
                        reset() {
                            let V = new Map(g.blockers);
                            V.set(M, Rr), Ke({
                                blockers: V
                            })
                        }
                    });
                    return
                }
                return dn(x, k)
            }), n) {
            Mv(t, de);
            let y = () => Ov(t, de);
            t.addEventListener("pagehide", y), ie = () => t.removeEventListener("pagehide", y)
        }
        return g.initialized || dn(fe.Pop, g.location, {
            initialHydration: !0
        }), D
    }

    function ep() {
        f && f(), ie && ie(), p.clear(), O && O.abort(), g.fetchers.forEach((y, x) => yl(x)), g.blockers.forEach((y, x) => Du(x))
    }

    function tp(y) {
        return p.add(y), () => p.delete(y)
    }

    function Ke(y, x) {
        x === void 0 && (x = {}), g = oe({}, g, y);
        let k = [],
            _ = [];
        c.v7_fetcherPersist && g.fetchers.forEach((M, V) => {
            M.state === "idle" && (Qe.has(V) ? _.push(V) : k.push(V))
        }), [...p].forEach(M => M(g, {
            deletedFetchers: _,
            unstable_viewTransitionOpts: x.viewTransitionOpts,
            unstable_flushSync: x.flushSync === !0
        })), c.v7_fetcherPersist && (k.forEach(M => g.fetchers.delete(M)), _.forEach(M => yl(M)))
    }

    function mr(y, x, k) {
        var _, M;
        let {
            flushSync: V
        } = k === void 0 ? {} : k, U = g.actionData != null && g.navigation.formMethod != null && ht(g.navigation.formMethod) && g.navigation.state === "loading" && ((_ = y.state) == null ? void 0 : _._isRedirect) !== !0, F;
        x.actionData ? Object.keys(x.actionData).length > 0 ? F = x.actionData : F = null : U ? F = g.actionData : F = null;
        let W = x.loaderData ? nc(g.loaderData, x.loaderData, x.matches || [], x.errors) : g.loaderData,
            H = g.blockers;
        H.size > 0 && (H = new Map(H), H.forEach((B, ne) => H.set(ne, Rr)));
        let ke = I === !0 || g.navigation.formMethod != null && ht(g.navigation.formMethod) && ((M = y.state) == null ? void 0 : M._isRedirect) !== !0;
        a && (o = a, a = void 0), Ee || T === fe.Pop || (T === fe.Push ? e.history.push(y, y.state) : T === fe.Replace && e.history.replace(y, y.state));
        let Ce;
        if (T === fe.Pop) {
            let B = de.get(g.location.pathname);
            B && B.has(y.pathname) ? Ce = {
                currentLocation: g.location,
                nextLocation: y
            } : de.has(y.pathname) && (Ce = {
                currentLocation: y,
                nextLocation: g.location
            })
        } else if (Y) {
            let B = de.get(g.location.pathname);
            B ? B.add(y.pathname) : (B = new Set([y.pathname]), de.set(g.location.pathname, B)), Ce = {
                currentLocation: g.location,
                nextLocation: y
            }
        }
        Ke(oe({}, x, {
            actionData: F,
            loaderData: W,
            historyAction: T,
            location: y,
            initialized: !0,
            navigation: ko,
            revalidation: "idle",
            restoreScrollPosition: Ou(y, x.matches || g.matches),
            preventScrollReset: ke,
            blockers: H
        }), {
            viewTransitionOpts: Ce,
            flushSync: V === !0
        }), T = fe.Pop, I = !1, Y = !1, Ee = !1, st = !1, Ut = [], At = []
    }
    async function Pu(y, x) {
        if (typeof y == "number") {
            e.history.go(y);
            return
        }
        let k = wa(g.location, g.matches, u, c.v7_prependBasename, y, c.v7_relativeSplatPath, x == null ? void 0 : x.fromRouteId, x == null ? void 0 : x.relative),
            {
                path: _,
                submission: M,
                error: V
            } = Xs(c.v7_normalizeFormMethod, !1, k, x),
            U = g.location,
            F = sl(g.location, _, x && x.state);
        F = oe({}, F, e.history.encodeLocation(F));
        let W = x && x.replace != null ? x.replace : void 0,
            H = fe.Push;
        W === !0 ? H = fe.Replace : W === !1 || M != null && ht(M.formMethod) && M.formAction === g.location.pathname + g.location.search && (H = fe.Replace);
        let ke = x && "preventScrollReset" in x ? x.preventScrollReset === !0 : void 0,
            Ce = (x && x.unstable_flushSync) === !0,
            B = zu({
                currentLocation: U,
                nextLocation: F,
                historyAction: H
            });
        if (B) {
            xl(B, {
                state: "blocked",
                location: F,
                proceed() {
                    xl(B, {
                        state: "proceeding",
                        proceed: void 0,
                        reset: void 0,
                        location: F
                    }), Pu(y, x)
                },
                reset() {
                    let ne = new Map(g.blockers);
                    ne.set(B, Rr), Ke({
                        blockers: ne
                    })
                }
            });
            return
        }
        return await dn(H, F, {
            submission: M,
            pendingError: V,
            preventScrollReset: ke,
            replace: x && x.replace,
            enableViewTransition: x && x.unstable_viewTransition,
            flushSync: Ce
        })
    }

    function np() {
        if (Yi(), Ke({
                revalidation: "loading"
            }), g.navigation.state !== "submitting") {
            if (g.navigation.state === "idle") {
                dn(g.historyAction, g.location, {
                    startUninterruptedRevalidation: !0
                });
                return
            }
            dn(T || g.historyAction, g.navigation.location, {
                overrideNavigation: g.navigation
            })
        }
    }
    async function dn(y, x, k) {
        O && O.abort(), O = null, T = y, Ee = (k && k.startUninterruptedRevalidation) === !0, dp(g.location, g.matches), I = (k && k.preventScrollReset) === !0, Y = (k && k.enableViewTransition) === !0;
        let _ = a || o,
            M = k && k.overrideNavigation,
            V = Jn(_, x, u),
            U = (k && k.flushSync) === !0;
        if (!V) {
            let B = tt(404, {
                    pathname: x.pathname
                }),
                {
                    matches: ne,
                    route: ge
                } = lc(_);
            Gi(), mr(x, {
                matches: ne,
                loaderData: {},
                errors: {
                    [ge.id]: B
                }
            }, {
                flushSync: U
            });
            return
        }
        if (g.initialized && !st && _v(g.location, x) && !(k && k.submission && ht(k.submission.formMethod))) {
            mr(x, {
                matches: V
            }, {
                flushSync: U
            });
            return
        }
        O = new AbortController;
        let F = On(e.history, x, O.signal, k && k.submission),
            W;
        if (k && k.pendingError) W = [Qr(V).route.id, {
            type: re.error,
            error: k.pendingError
        }];
        else if (k && k.submission && ht(k.submission.formMethod)) {
            let B = await rp(F, x, k.submission, V, {
                replace: k.replace,
                flushSync: U
            });
            if (B.shortCircuited) return;
            W = B.pendingActionResult, M = Co(x, k.submission), U = !1, F = On(e.history, F.url, F.signal)
        }
        let {
            shortCircuited: H,
            loaderData: ke,
            errors: Ce
        } = await lp(F, x, V, M, k && k.submission, k && k.fetcherSubmission, k && k.replace, k && k.initialHydration === !0, U, W);
        H || (O = null, mr(x, oe({
            matches: V
        }, rc(W), {
            loaderData: ke,
            errors: Ce
        })))
    }
    async function rp(y, x, k, _, M) {
        M === void 0 && (M = {}), Yi();
        let V = Dv(x, k);
        Ke({
            navigation: V
        }, {
            flushSync: M.flushSync === !0
        });
        let U, F = Ea(_, x);
        if (!F.route.action && !F.route.lazy) U = {
            type: re.error,
            error: tt(405, {
                method: y.method,
                pathname: x.pathname,
                routeId: F.route.id
            })
        };
        else if (U = (await gr("action", y, [F], _))[0], y.signal.aborted) return {
            shortCircuited: !0
        };
        if (yn(U)) {
            let W;
            return M && M.replace != null ? W = M.replace : W = bs(U.response.headers.get("Location"), new URL(y.url), u) === g.location.pathname + g.location.search, await vr(y, U, {
                submission: k,
                replace: W
            }), {
                shortCircuited: !0
            }
        }
        if (gn(U)) throw tt(400, {
            type: "defer-action"
        });
        if (lt(U)) {
            let W = Qr(_, F.route.id);
            return (M && M.replace) !== !0 && (T = fe.Push), {
                pendingActionResult: [W.route.id, U]
            }
        }
        return {
            pendingActionResult: [F.route.id, U]
        }
    }
    async function lp(y, x, k, _, M, V, U, F, W, H) {
        let ke = _ || Co(x, M),
            Ce = M || V || ac(ke),
            B = a || o,
            [ne, ge] = Js(e.history, g, k, Ce, x, c.v7_partialHydration && F === !0, c.unstable_skipActionErrorRevalidation, st, Ut, At, Qe, ct, q, B, u, H);
        if (Gi(G => !(k && k.some(Me => Me.route.id === G)) || ne && ne.some(Me => Me.route.id === G)), $ = ++A, ne.length === 0 && ge.length === 0) {
            let G = Lu();
            return mr(x, oe({
                matches: k,
                loaderData: {},
                errors: H && lt(H[1]) ? {
                    [H[0]]: H[1].error
                } : null
            }, rc(H), G ? {
                fetchers: new Map(g.fetchers)
            } : {}), {
                flushSync: W
            }), {
                shortCircuited: !0
            }
        }
        if (!Ee && (!c.v7_partialHydration || !F)) {
            ge.forEach(Me => {
                let et = g.fetchers.get(Me.key),
                    Ne = Lr(void 0, et ? et.data : void 0);
                g.fetchers.set(Me.key, Ne)
            });
            let G;
            H && !lt(H[1]) ? G = {
                [H[0]]: H[1].data
            } : g.actionData && (Object.keys(g.actionData).length === 0 ? G = null : G = g.actionData), Ke(oe({
                navigation: ke
            }, G !== void 0 ? {
                actionData: G
            } : {}, ge.length > 0 ? {
                fetchers: new Map(g.fetchers)
            } : {}), {
                flushSync: W
            })
        }
        ge.forEach(G => {
            R.has(G.key) && $t(G.key), G.controller && R.set(G.key, G.controller)
        });
        let xr = () => ge.forEach(G => $t(G.key));
        O && O.signal.addEventListener("abort", xr);
        let {
            loaderResults: Ht,
            fetcherResults: Tn
        } = await ju(g.matches, k, ne, ge, y);
        if (y.signal.aborted) return {
            shortCircuited: !0
        };
        O && O.signal.removeEventListener("abort", xr), ge.forEach(G => R.delete(G.key));
        let Dn = ic([...Ht, ...Tn]);
        if (Dn) {
            if (Dn.idx >= ne.length) {
                let G = ge[Dn.idx - ne.length].key;
                q.add(G)
            }
            return await vr(y, Dn.result, {
                replace: U
            }), {
                shortCircuited: !0
            }
        }
        let {
            loaderData: zn,
            errors: xt
        } = tc(g, k, ne, Ht, H, ge, Tn, ze);
        ze.forEach((G, Me) => {
            G.subscribe(et => {
                (et || G.done) && ze.delete(Me)
            })
        }), c.v7_partialHydration && F && g.errors && Object.entries(g.errors).filter(G => {
            let [Me] = G;
            return !ne.some(et => et.route.id === Me)
        }).forEach(G => {
            let [Me, et] = G;
            xt = Object.assign(xt || {}, {
                [Me]: et
            })
        });
        let wl = Lu(),
            Sl = Tu($),
            El = wl || Sl || ge.length > 0;
        return oe({
            loaderData: zn,
            errors: xt
        }, El ? {
            fetchers: new Map(g.fetchers)
        } : {})
    }

    function ip(y, x, k, _) {
        if (r) throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");
        R.has(y) && $t(y);
        let M = (_ && _.unstable_flushSync) === !0,
            V = a || o,
            U = wa(g.location, g.matches, u, c.v7_prependBasename, k, c.v7_relativeSplatPath, x, _ == null ? void 0 : _.relative),
            F = Jn(V, U, u);
        if (!F) {
            yr(y, x, tt(404, {
                pathname: U
            }), {
                flushSync: M
            });
            return
        }
        let {
            path: W,
            submission: H,
            error: ke
        } = Xs(c.v7_normalizeFormMethod, !0, U, _);
        if (ke) {
            yr(y, x, ke, {
                flushSync: M
            });
            return
        }
        let Ce = Ea(F, W);
        if (I = (_ && _.preventScrollReset) === !0, H && ht(H.formMethod)) {
            op(y, x, W, Ce, F, M, H);
            return
        }
        ct.set(y, {
            routeId: x,
            path: W
        }), ap(y, x, W, Ce, F, M, H)
    }
    async function op(y, x, k, _, M, V, U) {
        if (Yi(), ct.delete(y), !_.route.action && !_.route.lazy) {
            let Ne = tt(405, {
                method: U.formMethod,
                pathname: k,
                routeId: x
            });
            yr(y, x, Ne, {
                flushSync: V
            });
            return
        }
        let F = g.fetchers.get(y);
        Bt(y, zv(U, F), {
            flushSync: V
        });
        let W = new AbortController,
            H = On(e.history, k, W.signal, U);
        R.set(y, W);
        let ke = A,
            B = (await gr("action", H, [_], M))[0];
        if (H.signal.aborted) {
            R.get(y) === W && R.delete(y);
            return
        }
        if (c.v7_fetcherPersist && Qe.has(y)) {
            if (yn(B) || lt(B)) {
                Bt(y, Wt(void 0));
                return
            }
        } else {
            if (yn(B))
                if (R.delete(y), $ > ke) {
                    Bt(y, Wt(void 0));
                    return
                } else return q.add(y), Bt(y, Lr(U)), vr(H, B, {
                    fetcherSubmission: U
                });
            if (lt(B)) {
                yr(y, x, B.error);
                return
            }
        }
        if (gn(B)) throw tt(400, {
            type: "defer-action"
        });
        let ne = g.navigation.location || g.location,
            ge = On(e.history, ne, W.signal),
            xr = a || o,
            Ht = g.navigation.state !== "idle" ? Jn(xr, g.navigation.location, u) : g.matches;
        Q(Ht, "Didn't find any matches after fetcher action");
        let Tn = ++A;
        Z.set(y, Tn);
        let Dn = Lr(U, B.data);
        g.fetchers.set(y, Dn);
        let [zn, xt] = Js(e.history, g, Ht, U, ne, !1, c.unstable_skipActionErrorRevalidation, st, Ut, At, Qe, ct, q, xr, u, [_.route.id, B]);
        xt.filter(Ne => Ne.key !== y).forEach(Ne => {
            let wr = Ne.key,
                Fu = g.fetchers.get(wr),
                pp = Lr(void 0, Fu ? Fu.data : void 0);
            g.fetchers.set(wr, pp), R.has(wr) && $t(wr), Ne.controller && R.set(wr, Ne.controller)
        }), Ke({
            fetchers: new Map(g.fetchers)
        });
        let wl = () => xt.forEach(Ne => $t(Ne.key));
        W.signal.addEventListener("abort", wl);
        let {
            loaderResults: Sl,
            fetcherResults: El
        } = await ju(g.matches, Ht, zn, xt, ge);
        if (W.signal.aborted) return;
        W.signal.removeEventListener("abort", wl), Z.delete(y), R.delete(y), xt.forEach(Ne => R.delete(Ne.key));
        let G = ic([...Sl, ...El]);
        if (G) {
            if (G.idx >= zn.length) {
                let Ne = xt[G.idx - zn.length].key;
                q.add(Ne)
            }
            return vr(ge, G.result)
        }
        let {
            loaderData: Me,
            errors: et
        } = tc(g, g.matches, zn, Sl, void 0, xt, El, ze);
        if (g.fetchers.has(y)) {
            let Ne = Wt(B.data);
            g.fetchers.set(y, Ne)
        }
        Tu(Tn), g.navigation.state === "loading" && Tn > $ ? (Q(T, "Expected pending action"), O && O.abort(), mr(g.navigation.location, {
            matches: Ht,
            loaderData: Me,
            errors: et,
            fetchers: new Map(g.fetchers)
        })) : (Ke({
            errors: et,
            loaderData: nc(g.loaderData, Me, Ht, et),
            fetchers: new Map(g.fetchers)
        }), st = !1)
    }
    async function ap(y, x, k, _, M, V, U) {
        let F = g.fetchers.get(y);
        Bt(y, Lr(U, F ? F.data : void 0), {
            flushSync: V
        });
        let W = new AbortController,
            H = On(e.history, k, W.signal);
        R.set(y, W);
        let ke = A,
            B = (await gr("loader", H, [_], M))[0];
        if (gn(B) && (B = await Hf(B, H.signal, !0) || B), R.get(y) === W && R.delete(y), !H.signal.aborted) {
            if (Qe.has(y)) {
                Bt(y, Wt(void 0));
                return
            }
            if (yn(B))
                if ($ > ke) {
                    Bt(y, Wt(void 0));
                    return
                } else {
                    q.add(y), await vr(H, B);
                    return
                }
            if (lt(B)) {
                yr(y, x, B.error);
                return
            }
            Q(!gn(B), "Unhandled fetcher deferred data"), Bt(y, Wt(B.data))
        }
    }
    async function vr(y, x, k) {
        let {
            submission: _,
            fetcherSubmission: M,
            replace: V
        } = k === void 0 ? {} : k;
        x.response.headers.has("X-Remix-Revalidate") && (st = !0);
        let U = x.response.headers.get("Location");
        Q(U, "Expected a Location header on the redirect Response"), U = bs(U, new URL(y.url), u);
        let F = sl(g.location, U, {
            _isRedirect: !0
        });
        if (n) {
            let ne = !1;
            if (x.response.headers.has("X-Remix-Reload-Document")) ne = !0;
            else if (ku.test(U)) {
                const ge = e.history.createURL(U);
                ne = ge.origin !== t.location.origin || hr(ge.pathname, u) == null
            }
            if (ne) {
                V ? t.location.replace(U) : t.location.assign(U);
                return
            }
        }
        O = null;
        let W = V === !0 ? fe.Replace : fe.Push,
            {
                formMethod: H,
                formAction: ke,
                formEncType: Ce
            } = g.navigation;
        !_ && !M && H && ke && Ce && (_ = ac(g.navigation));
        let B = _ || M;
        if (mv.has(x.response.status) && B && ht(B.formMethod)) await dn(W, F, {
            submission: oe({}, B, {
                formAction: U
            }),
            preventScrollReset: I
        });
        else {
            let ne = Co(F, _);
            await dn(W, F, {
                overrideNavigation: ne,
                fetcherSubmission: M,
                preventScrollReset: I
            })
        }
    }
    async function gr(y, x, k, _) {
        try {
            let M = await kv(s, y, x, k, _, i, l);
            return await Promise.all(M.map((V, U) => {
                if (Rv(V)) {
                    let F = V.result;
                    return {
                        type: re.redirect,
                        response: Pv(F, x, k[U].route.id, _, u, c.v7_relativeSplatPath)
                    }
                }
                return Nv(V)
            }))
        } catch (M) {
            return k.map(() => ({
                type: re.error,
                error: M
            }))
        }
    }
    async function ju(y, x, k, _, M) {
        let [V, ...U] = await Promise.all([k.length ? gr("loader", M, k, x) : [], ..._.map(F => {
            if (F.matches && F.match && F.controller) {
                let W = On(e.history, F.path, F.controller.signal);
                return gr("loader", W, [F.match], F.matches).then(H => H[0])
            } else return Promise.resolve({
                type: re.error,
                error: tt(404, {
                    pathname: F.path
                })
            })
        })]);
        return await Promise.all([oc(y, k, V, V.map(() => M.signal), !1, g.loaderData), oc(y, _.map(F => F.match), U, _.map(F => F.controller ? F.controller.signal : null), !0)]), {
            loaderResults: V,
            fetcherResults: U
        }
    }

    function Yi() {
        st = !0, Ut.push(...Gi()), ct.forEach((y, x) => {
            R.has(x) && (At.push(x), $t(x))
        })
    }

    function Bt(y, x, k) {
        k === void 0 && (k = {}), g.fetchers.set(y, x), Ke({
            fetchers: new Map(g.fetchers)
        }, {
            flushSync: (k && k.flushSync) === !0
        })
    }

    function yr(y, x, k, _) {
        _ === void 0 && (_ = {});
        let M = Qr(g.matches, x);
        yl(y), Ke({
            errors: {
                [M.route.id]: k
            },
            fetchers: new Map(g.fetchers)
        }, {
            flushSync: (_ && _.flushSync) === !0
        })
    }

    function _u(y) {
        return c.v7_fetcherPersist && (We.set(y, (We.get(y) || 0) + 1), Qe.has(y) && Qe.delete(y)), g.fetchers.get(y) || vv
    }

    function yl(y) {
        let x = g.fetchers.get(y);
        R.has(y) && !(x && x.state === "loading" && Z.has(y)) && $t(y), ct.delete(y), Z.delete(y), q.delete(y), Qe.delete(y), g.fetchers.delete(y)
    }

    function up(y) {
        if (c.v7_fetcherPersist) {
            let x = (We.get(y) || 0) - 1;
            x <= 0 ? (We.delete(y), Qe.add(y)) : We.set(y, x)
        } else yl(y);
        Ke({
            fetchers: new Map(g.fetchers)
        })
    }

    function $t(y) {
        let x = R.get(y);
        Q(x, "Expected fetch controller: " + y), x.abort(), R.delete(y)
    }

    function Ru(y) {
        for (let x of y) {
            let k = _u(x),
                _ = Wt(k.data);
            g.fetchers.set(x, _)
        }
    }

    function Lu() {
        let y = [],
            x = !1;
        for (let k of q) {
            let _ = g.fetchers.get(k);
            Q(_, "Expected fetcher: " + k), _.state === "loading" && (q.delete(k), y.push(k), x = !0)
        }
        return Ru(y), x
    }

    function Tu(y) {
        let x = [];
        for (let [k, _] of Z)
            if (_ < y) {
                let M = g.fetchers.get(k);
                Q(M, "Expected fetcher: " + k), M.state === "loading" && ($t(k), Z.delete(k), x.push(k))
            }
        return Ru(x), x.length > 0
    }

    function sp(y, x) {
        let k = g.blockers.get(y) || Rr;
        return be.get(y) !== x && be.set(y, x), k
    }

    function Du(y) {
        g.blockers.delete(y), be.delete(y)
    }

    function xl(y, x) {
        let k = g.blockers.get(y) || Rr;
        Q(k.state === "unblocked" && x.state === "blocked" || k.state === "blocked" && x.state === "blocked" || k.state === "blocked" && x.state === "proceeding" || k.state === "blocked" && x.state === "unblocked" || k.state === "proceeding" && x.state === "unblocked", "Invalid blocker state transition: " + k.state + " -> " + x.state);
        let _ = new Map(g.blockers);
        _.set(y, x), Ke({
            blockers: _
        })
    }

    function zu(y) {
        let {
            currentLocation: x,
            nextLocation: k,
            historyAction: _
        } = y;
        if (be.size === 0) return;
        be.size > 1 && cr(!1, "A router only supports one blocker at a time");
        let M = Array.from(be.entries()),
            [V, U] = M[M.length - 1],
            F = g.blockers.get(V);
        if (!(F && F.state === "proceeding") && U({
                currentLocation: x,
                nextLocation: k,
                historyAction: _
            })) return V
    }

    function Gi(y) {
        let x = [];
        return ze.forEach((k, _) => {
            (!y || y(_)) && (k.cancel(), x.push(_), ze.delete(_))
        }), x
    }

    function cp(y, x, k) {
        if (E = y, w = x, S = k || null, !j && g.navigation === ko) {
            j = !0;
            let _ = Ou(g.location, g.matches);
            _ != null && Ke({
                restoreScrollPosition: _
            })
        }
        return () => {
            E = null, w = null, S = null
        }
    }

    function Mu(y, x) {
        return S && S(y, x.map(_ => Km(_, g.loaderData))) || y.key
    }

    function dp(y, x) {
        if (E && w) {
            let k = Mu(y, x);
            E[k] = w()
        }
    }

    function Ou(y, x) {
        if (E) {
            let k = Mu(y, x),
                _ = E[k];
            if (typeof _ == "number") return _
        }
        return null
    }

    function fp(y) {
        i = {}, a = xa(y, l, void 0, i)
    }
    return D = {
        get basename() {
            return u
        },
        get future() {
            return c
        },
        get state() {
            return g
        },
        get routes() {
            return o
        },
        get window() {
            return t
        },
        initialize: bf,
        subscribe: tp,
        enableScrollRestoration: cp,
        navigate: Pu,
        fetch: ip,
        revalidate: np,
        createHref: y => e.history.createHref(y),
        encodeLocation: y => e.history.encodeLocation(y),
        getFetcher: _u,
        deleteFetcher: up,
        dispose: ep,
        getBlocker: sp,
        deleteBlocker: Du,
        _internalFetchControllers: R,
        _internalActiveDeferreds: ze,
        _internalSetRoutes: fp
    }, D
}

function xv(e) {
    return e != null && ("formData" in e && e.formData != null || "body" in e && e.body !== void 0)
}

function wa(e, t, n, r, l, i, o, a) {
    let u, s;
    if (o) {
        u = [];
        for (let f of t)
            if (u.push(f), f.route.id === o) {
                s = f;
                break
            }
    } else u = t, s = t[t.length - 1];
    let c = wu(l || ".", xu(u, i), hr(e.pathname, n) || e.pathname, a === "path");
    return l == null && (c.search = e.search, c.hash = e.hash), (l == null || l === "" || l === ".") && s && s.route.index && !Cu(c.search) && (c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index"), r && n !== "/" && (c.pathname = c.pathname === "/" ? n : Tt([n, c.pathname])), Pn(c)
}

function Xs(e, t, n, r) {
    if (!r || !xv(r)) return {
        path: n
    };
    if (r.formMethod && !Tv(r.formMethod)) return {
        path: n,
        error: tt(405, {
            method: r.formMethod
        })
    };
    let l = () => ({
            path: n,
            error: tt(400, {
                type: "invalid-body"
            })
        }),
        i = r.formMethod || "get",
        o = e ? i.toUpperCase() : i.toLowerCase(),
        a = Bf(n);
    if (r.body !== void 0) {
        if (r.formEncType === "text/plain") {
            if (!ht(o)) return l();
            let p = typeof r.body == "string" ? r.body : r.body instanceof FormData || r.body instanceof URLSearchParams ? Array.from(r.body.entries()).reduce((E, S) => {
                let [w, j] = S;
                return "" + E + w + "=" + j + `
`
            }, "") : String(r.body);
            return {
                path: n,
                submission: {
                    formMethod: o,
                    formAction: a,
                    formEncType: r.formEncType,
                    formData: void 0,
                    json: void 0,
                    text: p
                }
            }
        } else if (r.formEncType === "application/json") {
            if (!ht(o)) return l();
            try {
                let p = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
                return {
                    path: n,
                    submission: {
                        formMethod: o,
                        formAction: a,
                        formEncType: r.formEncType,
                        formData: void 0,
                        json: p,
                        text: void 0
                    }
                }
            } catch {
                return l()
            }
        }
    }
    Q(typeof FormData == "function", "FormData is not available in this environment");
    let u, s;
    if (r.formData) u = Sa(r.formData), s = r.formData;
    else if (r.body instanceof FormData) u = Sa(r.body), s = r.body;
    else if (r.body instanceof URLSearchParams) u = r.body, s = ec(u);
    else if (r.body == null) u = new URLSearchParams, s = new FormData;
    else try {
        u = new URLSearchParams(r.body), s = ec(u)
    } catch {
        return l()
    }
    let c = {
        formMethod: o,
        formAction: a,
        formEncType: r && r.formEncType || "application/x-www-form-urlencoded",
        formData: s,
        json: void 0,
        text: void 0
    };
    if (ht(c.formMethod)) return {
        path: n,
        submission: c
    };
    let f = It(n);
    return t && f.search && Cu(f.search) && u.append("index", ""), f.search = "?" + u, {
        path: Pn(f),
        submission: c
    }
}

function wv(e, t) {
    let n = e;
    if (t) {
        let r = e.findIndex(l => l.route.id === t);
        r >= 0 && (n = e.slice(0, r))
    }
    return n
}

function Js(e, t, n, r, l, i, o, a, u, s, c, f, p, E, S, w) {
    let j = w ? lt(w[1]) ? w[1].error : w[1].data : void 0,
        h = e.createURL(t.location),
        d = e.createURL(l),
        v = w && lt(w[1]) ? w[0] : void 0,
        C = v ? wv(n, v) : n,
        L = w ? w[1].statusCode : void 0,
        D = o && L && L >= 400,
        g = C.filter((I, O) => {
            let {
                route: Y
            } = I;
            if (Y.lazy) return !0;
            if (Y.loader == null) return !1;
            if (i) return typeof Y.loader != "function" || Y.loader.hydrate ? !0 : t.loaderData[Y.id] === void 0 && (!t.errors || t.errors[Y.id] === void 0);
            if (Sv(t.loaderData, t.matches[O], I) || u.some(Ee => Ee === I.route.id)) return !0;
            let de = t.matches[O],
                ie = I;
            return Zs(I, oe({
                currentUrl: h,
                currentParams: de.params,
                nextUrl: d,
                nextParams: ie.params
            }, r, {
                actionResult: j,
                unstable_actionStatus: L,
                defaultShouldRevalidate: D ? !1 : a || h.pathname + h.search === d.pathname + d.search || h.search !== d.search || Af(de, ie)
            }))
        }),
        T = [];
    return f.forEach((I, O) => {
        if (i || !n.some(st => st.route.id === I.routeId) || c.has(O)) return;
        let Y = Jn(E, I.path, S);
        if (!Y) {
            T.push({
                key: O,
                routeId: I.routeId,
                path: I.path,
                matches: null,
                match: null,
                controller: null
            });
            return
        }
        let de = t.fetchers.get(O),
            ie = Ea(Y, I.path),
            Ee = !1;
        p.has(O) ? Ee = !1 : s.includes(O) ? Ee = !0 : de && de.state !== "idle" && de.data === void 0 ? Ee = a : Ee = Zs(ie, oe({
            currentUrl: h,
            currentParams: t.matches[t.matches.length - 1].params,
            nextUrl: d,
            nextParams: n[n.length - 1].params
        }, r, {
            actionResult: j,
            unstable_actionStatus: L,
            defaultShouldRevalidate: D ? !1 : a
        })), Ee && T.push({
            key: O,
            routeId: I.routeId,
            path: I.path,
            matches: Y,
            match: ie,
            controller: new AbortController
        })
    }), [g, T]
}

function Sv(e, t, n) {
    let r = !t || n.route.id !== t.route.id,
        l = e[n.route.id] === void 0;
    return r || l
}

function Af(e, t) {
    let n = e.route.path;
    return e.pathname !== t.pathname || n != null && n.endsWith("*") && e.params["*"] !== t.params["*"]
}

function Zs(e, t) {
    if (e.route.shouldRevalidate) {
        let n = e.route.shouldRevalidate(t);
        if (typeof n == "boolean") return n
    }
    return t.defaultShouldRevalidate
}
async function qs(e, t, n) {
    if (!e.lazy) return;
    let r = await e.lazy();
    if (!e.lazy) return;
    let l = n[e.id];
    Q(l, "No route found in manifest");
    let i = {};
    for (let o in r) {
        let u = l[o] !== void 0 && o !== "hasErrorBoundary";
        cr(!u, 'Route "' + l.id + '" has a static property "' + o + '" defined but its lazy function is also returning a value for this property. ' + ('The lazy route property "' + o + '" will be ignored.')), !u && !Wm.has(o) && (i[o] = r[o])
    }
    Object.assign(l, i), Object.assign(l, oe({}, t(l), {
        lazy: void 0
    }))
}

function Ev(e) {
    return Promise.all(e.matches.map(t => t.resolve()))
}
async function kv(e, t, n, r, l, i, o, a) {
    let u = r.reduce((f, p) => f.add(p.route.id), new Set),
        s = new Set,
        c = await e({
            matches: l.map(f => {
                let p = u.has(f.route.id);
                return oe({}, f, {
                    shouldLoad: p,
                    resolve: S => (s.add(f.route.id), p ? Cv(t, n, f, i, o, S, a) : Promise.resolve({
                        type: re.data,
                        result: void 0
                    }))
                })
            }),
            request: n,
            params: l[0].params,
            context: a
        });
    return l.forEach(f => Q(s.has(f.route.id), '`match.resolve()` was not called for route id "' + f.route.id + '". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.')), c.filter((f, p) => u.has(l[p].route.id))
}
async function Cv(e, t, n, r, l, i, o) {
    let a, u, s = c => {
        let f, p = new Promise((w, j) => f = j);
        u = () => f(), t.signal.addEventListener("abort", u);
        let E = w => typeof c != "function" ? Promise.reject(new Error("You cannot call the handler for a route which defines a boolean " + ('"' + e + '" [routeId: ' + n.route.id + "]"))) : c({
                request: t,
                params: n.params,
                context: o
            }, ...w !== void 0 ? [w] : []),
            S;
        return i ? S = i(w => E(w)) : S = (async () => {
            try {
                return {
                    type: "data",
                    result: await E()
                }
            } catch (w) {
                return {
                    type: "error",
                    result: w
                }
            }
        })(), Promise.race([S, p])
    };
    try {
        let c = n.route[e];
        if (n.route.lazy)
            if (c) {
                let f, [p] = await Promise.all([s(c).catch(E => {
                    f = E
                }), qs(n.route, l, r)]);
                if (f !== void 0) throw f;
                a = p
            } else if (await qs(n.route, l, r), c = n.route[e], c) a = await s(c);
        else if (e === "action") {
            let f = new URL(t.url),
                p = f.pathname + f.search;
            throw tt(405, {
                method: t.method,
                pathname: p,
                routeId: n.route.id
            })
        } else return {
            type: re.data,
            result: void 0
        };
        else if (c) a = await s(c);
        else {
            let f = new URL(t.url),
                p = f.pathname + f.search;
            throw tt(404, {
                pathname: p
            })
        }
        Q(a.result !== void 0, "You defined " + (e === "action" ? "an action" : "a loader") + " for route " + ('"' + n.route.id + "\" but didn't return anything from your `" + e + "` ") + "function. Please return a value or `null`.")
    } catch (c) {
        return {
            type: re.error,
            result: c
        }
    } finally {
        u && t.signal.removeEventListener("abort", u)
    }
    return a
}
async function Nv(e) {
    let {
        result: t,
        type: n,
        status: r
    } = e;
    if ($f(t)) {
        let o;
        try {
            let a = t.headers.get("Content-Type");
            a && /\bapplication\/json\b/.test(a) ? t.body == null ? o = null : o = await t.json() : o = await t.text()
        } catch (a) {
            return {
                type: re.error,
                error: a
            }
        }
        return n === re.error ? {
            type: re.error,
            error: new Su(t.status, t.statusText, o),
            statusCode: t.status,
            headers: t.headers
        } : {
            type: re.data,
            data: o,
            statusCode: t.status,
            headers: t.headers
        }
    }
    if (n === re.error) return {
        type: re.error,
        error: t,
        statusCode: Eu(t) ? t.status : r
    };
    if (Lv(t)) {
        var l, i;
        return {
            type: re.deferred,
            deferredData: t,
            statusCode: (l = t.init) == null ? void 0 : l.status,
            headers: ((i = t.init) == null ? void 0 : i.headers) && new Headers(t.init.headers)
        }
    }
    return {
        type: re.data,
        data: t,
        statusCode: r
    }
}

function Pv(e, t, n, r, l, i) {
    let o = e.headers.get("Location");
    if (Q(o, "Redirects returned/thrown from loaders/actions must have a Location header"), !ku.test(o)) {
        let a = r.slice(0, r.findIndex(u => u.route.id === n) + 1);
        o = wa(new URL(t.url), a, l, !0, o, i), e.headers.set("Location", o)
    }
    return e
}

function bs(e, t, n) {
    if (ku.test(e)) {
        let r = e,
            l = r.startsWith("//") ? new URL(t.protocol + r) : new URL(r),
            i = hr(l.pathname, n) != null;
        if (l.origin === t.origin && i) return l.pathname + l.search + l.hash
    }
    return e
}

function On(e, t, n, r) {
    let l = e.createURL(Bf(t)).toString(),
        i = {
            signal: n
        };
    if (r && ht(r.formMethod)) {
        let {
            formMethod: o,
            formEncType: a
        } = r;
        i.method = o.toUpperCase(), a === "application/json" ? (i.headers = new Headers({
            "Content-Type": a
        }), i.body = JSON.stringify(r.json)) : a === "text/plain" ? i.body = r.text : a === "application/x-www-form-urlencoded" && r.formData ? i.body = Sa(r.formData) : i.body = r.formData
    }
    return new Request(l, i)
}

function Sa(e) {
    let t = new URLSearchParams;
    for (let [n, r] of e.entries()) t.append(n, typeof r == "string" ? r : r.name);
    return t
}

function ec(e) {
    let t = new FormData;
    for (let [n, r] of e.entries()) t.append(n, r);
    return t
}

function jv(e, t, n, r, l, i) {
    let o = {},
        a = null,
        u, s = !1,
        c = {},
        f = r && lt(r[1]) ? r[1].error : void 0;
    return n.forEach((p, E) => {
        let S = t[E].route.id;
        if (Q(!yn(p), "Cannot handle redirect results in processLoaderData"), lt(p)) {
            let w = p.error;
            if (f !== void 0 && (w = f, f = void 0), a = a || {}, i) a[S] = w;
            else {
                let j = Qr(e, S);
                a[j.route.id] == null && (a[j.route.id] = w)
            }
            o[S] = void 0, s || (s = !0, u = Eu(p.error) ? p.error.status : 500), p.headers && (c[S] = p.headers)
        } else gn(p) ? (l.set(S, p.deferredData), o[S] = p.deferredData.data, p.statusCode != null && p.statusCode !== 200 && !s && (u = p.statusCode), p.headers && (c[S] = p.headers)) : (o[S] = p.data, p.statusCode && p.statusCode !== 200 && !s && (u = p.statusCode), p.headers && (c[S] = p.headers))
    }), f !== void 0 && r && (a = {
        [r[0]]: f
    }, o[r[0]] = void 0), {
        loaderData: o,
        errors: a,
        statusCode: u || 200,
        loaderHeaders: c
    }
}

function tc(e, t, n, r, l, i, o, a) {
    let {
        loaderData: u,
        errors: s
    } = jv(t, n, r, l, a, !1);
    for (let c = 0; c < i.length; c++) {
        let {
            key: f,
            match: p,
            controller: E
        } = i[c];
        Q(o !== void 0 && o[c] !== void 0, "Did not find corresponding fetcher result");
        let S = o[c];
        if (!(E && E.signal.aborted))
            if (lt(S)) {
                let w = Qr(e.matches, p == null ? void 0 : p.route.id);
                s && s[w.route.id] || (s = oe({}, s, {
                    [w.route.id]: S.error
                })), e.fetchers.delete(f)
            } else if (yn(S)) Q(!1, "Unhandled fetcher revalidation redirect");
        else if (gn(S)) Q(!1, "Unhandled fetcher deferred data");
        else {
            let w = Wt(S.data);
            e.fetchers.set(f, w)
        }
    }
    return {
        loaderData: u,
        errors: s
    }
}

function nc(e, t, n, r) {
    let l = oe({}, t);
    for (let i of n) {
        let o = i.route.id;
        if (t.hasOwnProperty(o) ? t[o] !== void 0 && (l[o] = t[o]) : e[o] !== void 0 && i.route.loader && (l[o] = e[o]), r && r.hasOwnProperty(o)) break
    }
    return l
}

function rc(e) {
    return e ? lt(e[1]) ? {
        actionData: {}
    } : {
        actionData: {
            [e[0]]: e[1].data
        }
    } : {}
}

function Qr(e, t) {
    return (t ? e.slice(0, e.findIndex(r => r.route.id === t) + 1) : [...e]).reverse().find(r => r.route.hasErrorBoundary === !0) || e[0]
}

function lc(e) {
    let t = e.length === 1 ? e[0] : e.find(n => n.index || !n.path || n.path === "/") || {
        id: "__shim-error-route__"
    };
    return {
        matches: [{
            params: {},
            pathname: "",
            pathnameBase: "",
            route: t
        }],
        route: t
    }
}

function tt(e, t) {
    let {
        pathname: n,
        routeId: r,
        method: l,
        type: i
    } = t === void 0 ? {} : t, o = "Unknown Server Error", a = "Unknown @remix-run/router error";
    return e === 400 ? (o = "Bad Request", l && n && r ? a = "You made a " + l + ' request to "' + n + '" but ' + ('did not provide a `loader` for route "' + r + '", ') + "so there is no way to handle the request." : i === "defer-action" ? a = "defer() is not supported in actions" : i === "invalid-body" && (a = "Unable to encode submission body")) : e === 403 ? (o = "Forbidden", a = 'Route "' + r + '" does not match URL "' + n + '"') : e === 404 ? (o = "Not Found", a = 'No route matches URL "' + n + '"') : e === 405 && (o = "Method Not Allowed", l && n && r ? a = "You made a " + l.toUpperCase() + ' request to "' + n + '" but ' + ('did not provide an `action` for route "' + r + '", ') + "so there is no way to handle the request." : l && (a = 'Invalid request method "' + l.toUpperCase() + '"')), new Su(e || 500, o, new Error(a), !0)
}

function ic(e) {
    for (let t = e.length - 1; t >= 0; t--) {
        let n = e[t];
        if (yn(n)) return {
            result: n,
            idx: t
        }
    }
}

function Bf(e) {
    let t = typeof e == "string" ? It(e) : e;
    return Pn(oe({}, t, {
        hash: ""
    }))
}

function _v(e, t) {
    return e.pathname !== t.pathname || e.search !== t.search ? !1 : e.hash === "" ? t.hash !== "" : e.hash === t.hash ? !0 : t.hash !== ""
}

function Rv(e) {
    return $f(e.result) && hv.has(e.result.status)
}

function gn(e) {
    return e.type === re.deferred
}

function lt(e) {
    return e.type === re.error
}

function yn(e) {
    return (e && e.type) === re.redirect
}

function Lv(e) {
    let t = e;
    return t && typeof t == "object" && typeof t.data == "object" && typeof t.subscribe == "function" && typeof t.cancel == "function" && typeof t.resolveData == "function"
}

function $f(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.headers == "object" && typeof e.body < "u"
}

function Tv(e) {
    return pv.has(e.toLowerCase())
}

function ht(e) {
    return dv.has(e.toLowerCase())
}
async function oc(e, t, n, r, l, i) {
    for (let o = 0; o < n.length; o++) {
        let a = n[o],
            u = t[o];
        if (!u) continue;
        let s = e.find(f => f.route.id === u.route.id),
            c = s != null && !Af(s, u) && (i && i[u.route.id]) !== void 0;
        if (gn(a) && (l || c)) {
            let f = r[o];
            Q(f, "Expected an AbortSignal for revalidating fetcher deferred result"), await Hf(a, f, l).then(p => {
                p && (n[o] = p || n[o])
            })
        }
    }
}
async function Hf(e, t, n) {
    if (n === void 0 && (n = !1), !await e.deferredData.resolveData(t)) {
        if (n) try {
            return {
                type: re.data,
                data: e.deferredData.unwrappedData
            }
        } catch (l) {
            return {
                type: re.error,
                error: l
            }
        }
        return {
            type: re.data,
            data: e.deferredData.data
        }
    }
}

function Cu(e) {
    return new URLSearchParams(e).getAll("index").some(t => t === "")
}

function Ea(e, t) {
    let n = typeof t == "string" ? It(t).search : t.search;
    if (e[e.length - 1].route.index && Cu(n || "")) return e[e.length - 1];
    let r = Ff(e);
    return r[r.length - 1]
}

function ac(e) {
    let {
        formMethod: t,
        formAction: n,
        formEncType: r,
        text: l,
        formData: i,
        json: o
    } = e;
    if (!(!t || !n || !r)) {
        if (l != null) return {
            formMethod: t,
            formAction: n,
            formEncType: r,
            formData: void 0,
            json: void 0,
            text: l
        };
        if (i != null) return {
            formMethod: t,
            formAction: n,
            formEncType: r,
            formData: i,
            json: void 0,
            text: void 0
        };
        if (o !== void 0) return {
            formMethod: t,
            formAction: n,
            formEncType: r,
            formData: void 0,
            json: o,
            text: void 0
        }
    }
}

function Co(e, t) {
    return t ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text
    } : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0
    }
}

function Dv(e, t) {
    return {
        state: "submitting",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text
    }
}

function Lr(e, t) {
    return e ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t
    } : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t
    }
}

function zv(e, t) {
    return {
        state: "submitting",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t ? t.data : void 0
    }
}

function Wt(e) {
    return {
        state: "idle",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: e
    }
}

function Mv(e, t) {
    try {
        let n = e.sessionStorage.getItem(Uf);
        if (n) {
            let r = JSON.parse(n);
            for (let [l, i] of Object.entries(r || {})) i && Array.isArray(i) && t.set(l, new Set(i || []))
        }
    } catch {}
}

function Ov(e, t) {
    if (t.size > 0) {
        let n = {};
        for (let [r, l] of t) n[r] = [...l];
        try {
            e.sessionStorage.setItem(Uf, JSON.stringify(n))
        } catch (r) {
            cr(!1, "Failed to save applied view transitions in sessionStorage (" + r + ").")
        }
    }
}
/**
 * React Router v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function cl() {
    return cl = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, cl.apply(this, arguments)
}
const Vi = P.createContext(null),
    Vf = P.createContext(null),
    Rn = P.createContext(null),
    Wi = P.createContext(null),
    Ln = P.createContext({
        outlet: null,
        matches: [],
        isDataRoute: !1
    }),
    Wf = P.createContext(null);

function Fv(e, t) {
    let {
        relative: n
    } = t === void 0 ? {} : t;
    gl() || Q(!1);
    let {
        basename: r,
        navigator: l
    } = P.useContext(Rn), {
        hash: i,
        pathname: o,
        search: a
    } = Kf(e, {
        relative: n
    }), u = o;
    return r !== "/" && (u = o === "/" ? r : Tt([r, o])), l.createHref({
        pathname: u,
        search: a,
        hash: i
    })
}

function gl() {
    return P.useContext(Wi) != null
}

function Qi() {
    return gl() || Q(!1), P.useContext(Wi).location
}

function Qf(e) {
    P.useContext(Rn).static || P.useLayoutEffect(e)
}

function Iv() {
    let {
        isDataRoute: e
    } = P.useContext(Ln);
    return e ? Xv() : Uv()
}

function Uv() {
    gl() || Q(!1);
    let e = P.useContext(Vi),
        {
            basename: t,
            future: n,
            navigator: r
        } = P.useContext(Rn),
        {
            matches: l
        } = P.useContext(Ln),
        {
            pathname: i
        } = Qi(),
        o = JSON.stringify(xu(l, n.v7_relativeSplatPath)),
        a = P.useRef(!1);
    return Qf(() => {
        a.current = !0
    }), P.useCallback(function(s, c) {
        if (c === void 0 && (c = {}), !a.current) return;
        if (typeof s == "number") {
            r.go(s);
            return
        }
        let f = wu(s, JSON.parse(o), i, c.relative === "path");
        e == null && t !== "/" && (f.pathname = f.pathname === "/" ? t : Tt([t, f.pathname])), (c.replace ? r.replace : r.push)(f, c.state, c)
    }, [t, r, o, i, e])
}

function Kf(e, t) {
    let {
        relative: n
    } = t === void 0 ? {} : t, {
        future: r
    } = P.useContext(Rn), {
        matches: l
    } = P.useContext(Ln), {
        pathname: i
    } = Qi(), o = JSON.stringify(xu(l, r.v7_relativeSplatPath));
    return P.useMemo(() => wu(e, JSON.parse(o), i, n === "path"), [e, o, i, n])
}

function Av(e, t, n, r) {
    gl() || Q(!1);
    let {
        navigator: l
    } = P.useContext(Rn), {
        matches: i
    } = P.useContext(Ln), o = i[i.length - 1], a = o ? o.params : {};
    o && o.pathname;
    let u = o ? o.pathnameBase : "/";
    o && o.route;
    let s = Qi(),
        c;
    if (t) {
        var f;
        let j = typeof t == "string" ? It(t) : t;
        u === "/" || (f = j.pathname) != null && f.startsWith(u) || Q(!1), c = j
    } else c = s;
    let p = c.pathname || "/",
        E = p;
    if (u !== "/") {
        let j = u.replace(/^\//, "").split("/");
        E = "/" + p.replace(/^\//, "").split("/").slice(j.length).join("/")
    }
    let S = Jn(e, {
            pathname: E
        }),
        w = Wv(S && S.map(j => Object.assign({}, j, {
            params: Object.assign({}, a, j.params),
            pathname: Tt([u, l.encodeLocation ? l.encodeLocation(j.pathname).pathname : j.pathname]),
            pathnameBase: j.pathnameBase === "/" ? u : Tt([u, l.encodeLocation ? l.encodeLocation(j.pathnameBase).pathname : j.pathnameBase])
        })), i, n, r);
    return t && w ? P.createElement(Wi.Provider, {
        value: {
            location: cl({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, c),
            navigationType: fe.Pop
        }
    }, w) : w
}

function Bv() {
    let e = Gv(),
        t = Eu(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
        n = e instanceof Error ? e.stack : null,
        l = {
            padding: "0.5rem",
            backgroundColor: "rgba(200,200,200, 0.5)"
        };
    return P.createElement(P.Fragment, null, P.createElement("h2", null, "Unexpected Application Error!"), P.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? P.createElement("pre", {
        style: l
    }, n) : null, null)
}
const $v = P.createElement(Bv, null);
class Hv extends P.Component {
    constructor(t) {
        super(t), this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error !== void 0 ? P.createElement(Ln.Provider, {
            value: this.props.routeContext
        }, P.createElement(Wf.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}

function Vv(e) {
    let {
        routeContext: t,
        match: n,
        children: r
    } = e, l = P.useContext(Vi);
    return l && l.static && l.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (l.staticContext._deepestRenderedBoundaryId = n.route.id), P.createElement(Ln.Provider, {
        value: t
    }, r)
}

function Wv(e, t, n, r) {
    var l;
    if (t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null) {
        var i;
        if ((i = n) != null && i.errors) e = n.matches;
        else return null
    }
    let o = e,
        a = (l = n) == null ? void 0 : l.errors;
    if (a != null) {
        let c = o.findIndex(f => f.route.id && (a == null ? void 0 : a[f.route.id]) !== void 0);
        c >= 0 || Q(!1), o = o.slice(0, Math.min(o.length, c + 1))
    }
    let u = !1,
        s = -1;
    if (n && r && r.v7_partialHydration)
        for (let c = 0; c < o.length; c++) {
            let f = o[c];
            if ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (s = c), f.route.id) {
                let {
                    loaderData: p,
                    errors: E
                } = n, S = f.route.loader && p[f.route.id] === void 0 && (!E || E[f.route.id] === void 0);
                if (f.route.lazy || S) {
                    u = !0, s >= 0 ? o = o.slice(0, s + 1) : o = [o[0]];
                    break
                }
            }
        }
    return o.reduceRight((c, f, p) => {
        let E, S = !1,
            w = null,
            j = null;
        n && (E = a && f.route.id ? a[f.route.id] : void 0, w = f.route.errorElement || $v, u && (s < 0 && p === 0 ? (Jv("route-fallback", !1), S = !0, j = null) : s === p && (S = !0, j = f.route.hydrateFallbackElement || null)));
        let h = t.concat(o.slice(0, p + 1)),
            d = () => {
                let v;
                return E ? v = w : S ? v = j : f.route.Component ? v = P.createElement(f.route.Component, null) : f.route.element ? v = f.route.element : v = c, P.createElement(Vv, {
                    match: f,
                    routeContext: {
                        outlet: c,
                        matches: h,
                        isDataRoute: n != null
                    },
                    children: v
                })
            };
        return n && (f.route.ErrorBoundary || f.route.errorElement || p === 0) ? P.createElement(Hv, {
            location: n.location,
            revalidation: n.revalidation,
            component: w,
            error: E,
            children: d(),
            routeContext: {
                outlet: null,
                matches: h,
                isDataRoute: !0
            }
        }) : d()
    }, null)
}
var Yf = function(e) {
        return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e
    }(Yf || {}),
    ki = function(e) {
        return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e
    }(ki || {});

function Qv(e) {
    let t = P.useContext(Vi);
    return t || Q(!1), t
}

function Kv(e) {
    let t = P.useContext(Vf);
    return t || Q(!1), t
}

function Yv(e) {
    let t = P.useContext(Ln);
    return t || Q(!1), t
}

function Gf(e) {
    let t = Yv(),
        n = t.matches[t.matches.length - 1];
    return n.route.id || Q(!1), n.route.id
}

function Gv() {
    var e;
    let t = P.useContext(Wf),
        n = Kv(ki.UseRouteError),
        r = Gf(ki.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}

function Xv() {
    let {
        router: e
    } = Qv(Yf.UseNavigateStable), t = Gf(ki.UseNavigateStable), n = P.useRef(!1);
    return Qf(() => {
        n.current = !0
    }), P.useCallback(function(l, i) {
        i === void 0 && (i = {}), n.current && (typeof l == "number" ? e.navigate(l) : e.navigate(l, cl({
            fromRouteId: t
        }, i)))
    }, [e, t])
}
const uc = {};

function Jv(e, t, n) {
    !t && !uc[e] && (uc[e] = !0)
}

function ql(e) {
    Q(!1)
}

function Zv(e) {
    let {
        basename: t = "/",
        children: n = null,
        location: r,
        navigationType: l = fe.Pop,
        navigator: i,
        static: o = !1,
        future: a
    } = e;
    gl() && Q(!1);
    let u = t.replace(/^\/*/, "/"),
        s = P.useMemo(() => ({
            basename: u,
            navigator: i,
            static: o,
            future: cl({
                v7_relativeSplatPath: !1
            }, a)
        }), [u, a, i, o]);
    typeof r == "string" && (r = It(r));
    let {
        pathname: c = "/",
        search: f = "",
        hash: p = "",
        state: E = null,
        key: S = "default"
    } = r, w = P.useMemo(() => {
        let j = hr(c, u);
        return j == null ? null : {
            location: {
                pathname: j,
                search: f,
                hash: p,
                state: E,
                key: S
            },
            navigationType: l
        }
    }, [u, c, f, p, E, S, l]);
    return w == null ? null : P.createElement(Rn.Provider, {
        value: s
    }, P.createElement(Wi.Provider, {
        children: n,
        value: w
    }))
}
new Promise(() => {});

function ka(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return P.Children.forEach(e, (r, l) => {
        if (!P.isValidElement(r)) return;
        let i = [...t, l];
        if (r.type === P.Fragment) {
            n.push.apply(n, ka(r.props.children, i));
            return
        }
        r.type !== ql && Q(!1), !r.props.index || !r.props.children || Q(!1);
        let o = {
            id: r.props.id || i.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (o.children = ka(r.props.children, i)), n.push(o)
    }), n
}

function qv(e) {
    let t = {
        hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null
    };
    return e.Component && Object.assign(t, {
        element: P.createElement(e.Component),
        Component: void 0
    }), e.HydrateFallback && Object.assign(t, {
        hydrateFallbackElement: P.createElement(e.HydrateFallback),
        HydrateFallback: void 0
    }), e.ErrorBoundary && Object.assign(t, {
        errorElement: P.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0
    }), t
}
/**
 * React Router DOM v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function dl() {
    return dl = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, dl.apply(this, arguments)
}

function bv(e, t) {
    if (e == null) return {};
    var n = {},
        r = Object.keys(e),
        l, i;
    for (i = 0; i < r.length; i++) l = r[i], !(t.indexOf(l) >= 0) && (n[l] = e[l]);
    return n
}

function eg(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}

function tg(e, t) {
    return e.button === 0 && (!t || t === "_self") && !eg(e)
}
const ng = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"],
    rg = "6";
try {
    window.__reactRouterVersion = rg
} catch {}

function lg(e, t) {
    return yv({
        basename: t == null ? void 0 : t.basename,
        future: dl({}, t == null ? void 0 : t.future, {
            v7_prependBasename: !0
        }),
        history: $m({
            window: t == null ? void 0 : t.window
        }),
        hydrationData: (t == null ? void 0 : t.hydrationData) || ig(),
        routes: e,
        mapRouteProperties: qv,
        unstable_dataStrategy: t == null ? void 0 : t.unstable_dataStrategy,
        window: t == null ? void 0 : t.window
    }).initialize()
}

function ig() {
    var e;
    let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
    return t && t.errors && (t = dl({}, t, {
        errors: og(t.errors)
    })), t
}

function og(e) {
    if (!e) return null;
    let t = Object.entries(e),
        n = {};
    for (let [r, l] of t)
        if (l && l.__type === "RouteErrorResponse") n[r] = new Su(l.status, l.statusText, l.data, l.internal === !0);
        else if (l && l.__type === "Error") {
        if (l.__subType) {
            let i = window[l.__subType];
            if (typeof i == "function") try {
                let o = new i(l.message);
                o.stack = "", n[r] = o
            } catch {}
        }
        if (n[r] == null) {
            let i = new Error(l.message);
            i.stack = "", n[r] = i
        }
    } else n[r] = l;
    return n
}
const ag = P.createContext({
        isTransitioning: !1
    }),
    ug = P.createContext(new Map),
    sg = "startTransition",
    sc = Rp[sg],
    cg = "flushSync",
    cc = Bm[cg];

function dg(e) {
    sc ? sc(e) : e()
}

function Tr(e) {
    cc ? cc(e) : e()
}
class fg {
    constructor() {
        this.status = "pending", this.promise = new Promise((t, n) => {
            this.resolve = r => {
                this.status === "pending" && (this.status = "resolved", t(r))
            }, this.reject = r => {
                this.status === "pending" && (this.status = "rejected", n(r))
            }
        })
    }
}

function pg(e) {
    let {
        fallbackElement: t,
        router: n,
        future: r
    } = e, [l, i] = P.useState(n.state), [o, a] = P.useState(), [u, s] = P.useState({
        isTransitioning: !1
    }), [c, f] = P.useState(), [p, E] = P.useState(), [S, w] = P.useState(), j = P.useRef(new Map), {
        v7_startTransition: h
    } = r || {}, d = P.useCallback(g => {
        h ? dg(g) : g()
    }, [h]), v = P.useCallback((g, T) => {
        let {
            deletedFetchers: I,
            unstable_flushSync: O,
            unstable_viewTransitionOpts: Y
        } = T;
        I.forEach(ie => j.current.delete(ie)), g.fetchers.forEach((ie, Ee) => {
            ie.data !== void 0 && j.current.set(Ee, ie.data)
        });
        let de = n.window == null || typeof n.window.document.startViewTransition != "function";
        if (!Y || de) {
            O ? Tr(() => i(g)) : d(() => i(g));
            return
        }
        if (O) {
            Tr(() => {
                p && (c && c.resolve(), p.skipTransition()), s({
                    isTransitioning: !0,
                    flushSync: !0,
                    currentLocation: Y.currentLocation,
                    nextLocation: Y.nextLocation
                })
            });
            let ie = n.window.document.startViewTransition(() => {
                Tr(() => i(g))
            });
            ie.finished.finally(() => {
                Tr(() => {
                    f(void 0), E(void 0), a(void 0), s({
                        isTransitioning: !1
                    })
                })
            }), Tr(() => E(ie));
            return
        }
        p ? (c && c.resolve(), p.skipTransition(), w({
            state: g,
            currentLocation: Y.currentLocation,
            nextLocation: Y.nextLocation
        })) : (a(g), s({
            isTransitioning: !0,
            flushSync: !1,
            currentLocation: Y.currentLocation,
            nextLocation: Y.nextLocation
        }))
    }, [n.window, p, c, j, d]);
    P.useLayoutEffect(() => n.subscribe(v), [n, v]), P.useEffect(() => {
        u.isTransitioning && !u.flushSync && f(new fg)
    }, [u]), P.useEffect(() => {
        if (c && o && n.window) {
            let g = o,
                T = c.promise,
                I = n.window.document.startViewTransition(async () => {
                    d(() => i(g)), await T
                });
            I.finished.finally(() => {
                f(void 0), E(void 0), a(void 0), s({
                    isTransitioning: !1
                })
            }), E(I)
        }
    }, [d, o, c, n.window]), P.useEffect(() => {
        c && o && l.location.key === o.location.key && c.resolve()
    }, [c, p, l.location, o]), P.useEffect(() => {
        !u.isTransitioning && S && (a(S.state), s({
            isTransitioning: !0,
            flushSync: !1,
            currentLocation: S.currentLocation,
            nextLocation: S.nextLocation
        }), w(void 0))
    }, [u.isTransitioning, S]), P.useEffect(() => {}, []);
    let C = P.useMemo(() => ({
            createHref: n.createHref,
            encodeLocation: n.encodeLocation,
            go: g => n.navigate(g),
            push: (g, T, I) => n.navigate(g, {
                state: T,
                preventScrollReset: I == null ? void 0 : I.preventScrollReset
            }),
            replace: (g, T, I) => n.navigate(g, {
                replace: !0,
                state: T,
                preventScrollReset: I == null ? void 0 : I.preventScrollReset
            })
        }), [n]),
        L = n.basename || "/",
        D = P.useMemo(() => ({
            router: n,
            navigator: C,
            static: !1,
            basename: L
        }), [n, C, L]);
    return P.createElement(P.Fragment, null, P.createElement(Vi.Provider, {
        value: D
    }, P.createElement(Vf.Provider, {
        value: l
    }, P.createElement(ug.Provider, {
        value: j.current
    }, P.createElement(ag.Provider, {
        value: u
    }, P.createElement(Zv, {
        basename: L,
        location: l.location,
        navigationType: l.historyAction,
        navigator: C,
        future: {
            v7_relativeSplatPath: n.future.v7_relativeSplatPath
        }
    }, l.initialized || n.future.v7_partialHydration ? P.createElement(hg, {
        routes: n.routes,
        future: n.future,
        state: l
    }) : t))))), null)
}

function hg(e) {
    let {
        routes: t,
        future: n,
        state: r
    } = e;
    return Av(t, void 0, r, n)
}
const mg = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
    vg = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    gg = P.forwardRef(function(t, n) {
        let {
            onClick: r,
            relative: l,
            reloadDocument: i,
            replace: o,
            state: a,
            target: u,
            to: s,
            preventScrollReset: c,
            unstable_viewTransition: f
        } = t, p = bv(t, ng), {
            basename: E
        } = P.useContext(Rn), S, w = !1;
        if (typeof s == "string" && vg.test(s) && (S = s, mg)) try {
            let v = new URL(window.location.href),
                C = s.startsWith("//") ? new URL(v.protocol + s) : new URL(s),
                L = hr(C.pathname, E);
            C.origin === v.origin && L != null ? s = L + C.search + C.hash : w = !0
        } catch {}
        let j = Fv(s, {
                relative: l
            }),
            h = yg(s, {
                replace: o,
                state: a,
                target: u,
                preventScrollReset: c,
                relative: l,
                unstable_viewTransition: f
            });

        function d(v) {
            r && r(v), v.defaultPrevented || h(v)
        }
        return P.createElement("a", dl({}, p, {
            href: S || j,
            onClick: w || i ? r : d,
            ref: n,
            target: u
        }))
    });
var dc;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState"
})(dc || (dc = {}));
var fc;
(function(e) {
    e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"
})(fc || (fc = {}));

function yg(e, t) {
    let {
        target: n,
        replace: r,
        state: l,
        preventScrollReset: i,
        relative: o,
        unstable_viewTransition: a
    } = t === void 0 ? {} : t, u = Iv(), s = Qi(), c = Kf(e, {
        relative: o
    });
    return P.useCallback(f => {
        if (tg(f, n)) {
            f.preventDefault();
            let p = r !== void 0 ? r : Pn(s) === Pn(c);
            u(e, {
                replace: p,
                state: l,
                preventScrollReset: i,
                relative: o,
                unstable_viewTransition: a
            })
        }
    }, [s, u, c, r, l, n, e, i, o, a])
}
const xg = "/assets/Branding-01-BnNo12bl.svg",
    wg = "/assets/IMAGE%20(4)-Cl0fb8XK.png",
    Sg = "/assets/IMAGE%20(5)-BbfEUZ4S.png",
    Eg = "/assets/IMAGE%20(6)-C2LTurbC.png",
    kg = "/assets/IMAGE%20(7)-cjyZNZYQ.png",
    Cg = "/assets/IMAGE%20(8)-iBwxs0w2.png";
var Xf = {
        color: void 0,
        size: void 0,
        className: void 0,
        style: void 0,
        attr: void 0
    },
    pc = Rt.createContext && Rt.createContext(Xf),
    Ng = ["attr", "size", "title"];

function Pg(e, t) {
    if (e == null) return {};
    var n = jg(e, t),
        r, l;
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (l = 0; l < i.length; l++) r = i[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
    }
    return n
}

function jg(e, t) {
    if (e == null) return {};
    var n = {},
        r = Object.keys(e),
        l, i;
    for (i = 0; i < r.length; i++) l = r[i], !(t.indexOf(l) >= 0) && (n[l] = e[l]);
    return n
}

function Ci() {
    return Ci = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, Ci.apply(this, arguments)
}

function hc(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(l) {
            return Object.getOwnPropertyDescriptor(e, l).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function Ni(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2 ? hc(Object(n), !0).forEach(function(r) {
            _g(e, r, n[r])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : hc(Object(n)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
        })
    }
    return e
}

function _g(e, t, n) {
    return t = Rg(t), t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function Rg(e) {
    var t = Lg(e, "string");
    return typeof t == "symbol" ? t : String(t)
}

function Lg(e, t) {
    if (typeof e != "object" || e === null) return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
        var r = n.call(e, t || "default");
        if (typeof r != "object") return r;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}

function Jf(e) {
    return e && e.map((t, n) => Rt.createElement(t.tag, Ni({
        key: n
    }, t.attr), Jf(t.child)))
}

function Nu(e) {
    return t => Rt.createElement(Tg, Ci({
        attr: Ni({}, e.attr)
    }, t), Jf(e.child))
}

function Tg(e) {
    var t = n => {
        var {
            attr: r,
            size: l,
            title: i
        } = e, o = Pg(e, Ng), a = l || n.size || "1em", u;
        return n.className && (u = n.className), e.className && (u = (u ? u + " " : "") + e.className), Rt.createElement("svg", Ci({
            stroke: "currentColor",
            fill: "currentColor",
            strokeWidth: "0"
        }, n.attr, r, o, {
            className: u,
            style: Ni(Ni({
                color: e.color || n.color
            }, n.style), e.style),
            height: a,
            width: a,
            xmlns: "http://www.w3.org/2000/svg"
        }), i && Rt.createElement("title", null, i), e.children)
    };
    return pc !== void 0 ? Rt.createElement(pc.Consumer, null, n => t(n)) : t(Xf)
}

function Dg(e) {
    return Nu({
        tag: "svg",
        attr: {
            viewBox: "0 0 512 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M128 192l128 128 128-128z"
            },
            child: []
        }]
    })(e)
}

function zg(e) {
    return Nu({
        tag: "svg",
        attr: {
            viewBox: "0 0 512 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"
            },
            child: []
        }]
    })(e)
}

function Mg(e) {
    return Nu({
        tag: "svg",
        attr: {
            viewBox: "0 0 512 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z"
            },
            child: []
        }]
    })(e)
}

function Zf() {
    let [e, t] = P.useState(!0);

    function n() {
        t(!e)
    }
    let r = [{
        id: 1,
        value: "Testnet",
        link: "/"
    }, {
        id: 2,
        value: "Learn",
        link: "/"
    }, {
        id: 3,
        value: "Build",
        link: "/"
    }, {
        id: 4,
        value: "Ecosystem",
        link: "/Ecosystem"
    }, {
        id: 5,
        value: "Community",
        link: "/"
    }];
    return m.jsx("div", {
        className: "w-full max-w-[1920px] flex justify-center items-center",
        children: m.jsxs("div", {
            className: "w-[100%] lg:w-[80%] py-5 grid grid-cols-1 lg:grid-cols-2 items-center",
            children: [m.jsx("div", {
                className: "w-[40%]",
                children: m.jsx("img", {
                    src: xg,
                    alt: ""
                })
            }), m.jsxs("div", {
                children: [m.jsx("ul", {
                    className: `${e?"grid grid-cols-1 lg:grid-cols-5 gap-4 items-center gap-x-10 text-white lg:ml-0 lg:mt-0 mt-5 ml-6":"hidden text-white"}`,
                    children: r.map(({
                        value: l,
                        link: i
                    }, o) => m.jsxs(gg, {
                        to: i,
                        className: "flex items-center text-[15px] font-bold",
                        children: [l, m.jsx(Dg, {})]
                    }, o))
                }), m.jsx("button", {
                    onClick: n,
                    className: "text-white absolute top-8 right-10 lg:hidden",
                    children: e ? m.jsx(Mg, {}) : m.jsx(zg, {})
                })]
            })]
        })
    })
}

function Pi({
    value: e
}) {
    return m.jsx("div", {
        children: m.jsx("button", {
            className: "bg-transparent border-2 border-[#1AA9F9] rounded-2xl text-white py-[12px] px-[32px] hover:bg-[#ffffff2c] text-[18px]",
            children: e
        })
    })
}

function Og() {
    return m.jsxs("div", {
        className: "w-full max-w-[1920px] flex flex-col justify-center items-center",
        id: "HeroSection",
        children: [m.jsx(Zf, {}), m.jsxs("div", {
            className: "w-[80%] text-center flex flex-col justify-center items-center",
            children: [m.jsxs("h1", {
                className: "md:text-[118px] text-[65px] pt-16 leading-none font-semibold text-white",
                children: ["Build On The Edge ", m.jsx("br", {}), " Of", " ", m.jsx("span", {
                    className: "text-[#1AA9F9]",
                    children: "Gaming"
                })]
            }), m.jsxs("p", {
                className: "md:w-[60%] w-[100%] md:text-[20px] font-light text-[18px] py-8 pb-16 leading-tight text-[#FFFFFF]",
                children: ["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of", " "]
            }), m.jsxs("div", {
                className: "flex gap-5 pb-16",
                children: [m.jsx(Pi, {
                    value: "Start Building"
                }), m.jsx(Pi, {
                    value: "Explore Docs"
                })]
            })]
        })]
    })
}

function No({
    Image: e,
    paragraph: t,
    imageOnLeft: n
}) {
    return m.jsx("div", {
        children: n ? m.jsx("div", {
            className: "w-full max-w-[1920px] flex justify-center items-center my-10",
            children: m.jsxs("div", {
                className: "md:w-[90%] w-[90%] grid grid-cols-1 md:grid-cols-2 ",
                children: [m.jsx("div", {
                    className: "flex justify-start items-center",
                    children: m.jsx("div", {
                        className: "md:w-[80%] w-[100%]",
                        children: m.jsx("img", {
                            src: e,
                            alt: ""
                        })
                    })
                }), m.jsx("div", {
                    className: "flex justify-center items-center font-normal text-white text-[25px] md:py-0 py-8",
                    children: m.jsx("p", {
                        className: "md:text-[30px] text-[22px]",
                        children: t
                    })
                })]
            })
        }) : m.jsx("div", {
            className: "w-full max-w-[1920px] flex justify-center items-center",
            children: m.jsxs("div", {
                className: "md:w-[90%] w-[90%] grid grid-cols-1 md:grid-cols-2 ",
                children: [m.jsx("div", {
                    className: "flex justify-start items-center font-normal text-white text-[25px] md:py-0 py-8",
                    children: m.jsx("p", {
                        className: "md:text-[30px] text-[22px]",
                        children: t
                    })
                }), m.jsx("div", {
                    className: "flex justify-end items-center",
                    children: m.jsx("div", {
                        className: "md:w-[80%] w-[100%]",
                        children: m.jsx("img", {
                            src: e,
                            alt: ""
                        })
                    })
                })]
            })
        })
    })
}

function ye({
    image: e,
    playerImages: t,
    gameName: n,
    gamelink: r,
    gamePrice: l
}) {
    return m.jsx("div", {
        children: m.jsxs("div", {
            className: "relative",
            children: [m.jsx("img", {
                className: "rounded-2xl",
                src: e,
                alt: ""
            }), m.jsxs("div", {
                className: "bg-[#ffffff94] absolute bottom-0 p-6 w-full rounded-b-2xl",
                children: [m.jsx("div", {
                    className: "absolute left-0 -top-8",
                    children: m.jsx("img", {
                        src: t,
                        alt: ""
                    })
                }), m.jsxs("div", {
                    className: "flex justify-between items-center",
                    children: [m.jsxs("div", {
                        children: [m.jsx("p", {
                            className: "text-white text-[20px] font-bold py-3",
                            children: n
                        }), m.jsx("a", {
                            href: "",
                            className: "text-white text-[16px] underline font-semibold",
                            children: r
                        })]
                    }), m.jsxs("div", {
                        className: "text-right",
                        children: [m.jsx("p", {
                            className: "text-[26px] font-bold text-white py-3",
                            children: l
                        }), m.jsx("button", {
                            className: "border-2 px-[32px] py-[8px] rounded-xl text-[16px] font-bold text-white hover:bg-[#ffffff36]",
                            children: "Purchase"
                        })]
                    })]
                })]
            })]
        })
    })
}
const mc = "/assets/Players%20(1)-tkNTGOC-.jpeg",
    vc = "/assets/Players%20(2)-CFoPJpH6.jpeg",
    gc = "/assets/Players%20(3)-Cl0QeK_d.jpeg",
    xe = "/assets/Group%203-DzqciKFO.png";

function Fg() {
    return m.jsxs("div", {
        className: "w-full max-w-[1920px] flex flex-col justify-center items-center mt-16",
        children: [m.jsxs("h1", {
            className: "w-[90%] text-center md:text-[96px] text-[50px] pt-16 leading-none font-bold text-white py-16",
            children: ["Our community ", m.jsx("span", {
                className: "text-[#1AA9F9]",
                children: "is playing"
            })]
        }), m.jsxs("div", {
            className: "md:w-[90%] w-[90%] grid grid-cols-1 md:grid-cols-3 gap-10 my-14",
            children: [m.jsx(ye, {
                image: gc,
                playerImages: xe,
                gameName: "Skyborne",
                gamelink: "ToomuchLag",
                gamePrice: "242eth"
            }), m.jsx(ye, {
                image: mc,
                playerImages: xe,
                gameName: "Skyborne",
                gamelink: "ToomuchLag",
                gamePrice: "242eth"
            }), m.jsx(ye, {
                image: vc,
                playerImages: xe,
                gameName: "Skyborne",
                gamelink: "ToomuchLag",
                gamePrice: "242eth"
            })]
        }), m.jsxs("div", {
            className: "md:w-[90%] w-[90%] grid grid-cols-1 md:grid-cols-3 gap-10",
            children: [m.jsx(ye, {
                image: vc,
                playerImages: xe,
                gameName: "Skyborne",
                gamelink: "ToomuchLag",
                gamePrice: "242eth"
            }), m.jsx(ye, {
                image: mc,
                playerImages: xe,
                gameName: "Skyborne",
                gamelink: "ToomuchLag",
                gamePrice: "242eth"
            }), m.jsx(ye, {
                image: gc,
                playerImages: xe,
                gameName: "Skyborne",
                gamelink: "ToomuchLag",
                gamePrice: "242eth"
            })]
        })]
    })
}

function Ig() {
    return m.jsxs("div", {
        className: "w-full max-w-[1920px] flex flex-col justify-center items-center",
        children: [m.jsxs("h1", {
            className: "w-[90%] text-center md:text-[96px] text-[50px] leading-none font-bold text-white py-16",
            children: [m.jsx("span", {
                className: "text-[#1AA9F9]",
                children: "Unlock "
            }), " exclusive updates"]
        }), m.jsxs("div", {
            className: "w-[90%] grid grid-cols-2 md:grid-cols-6 text-white gap-2",
            children: [m.jsxs("div", {
                className: "bg-[#19161C] text-center py-10",
                children: [m.jsx("h1", {
                    className: "text-[35px] font-normal text-[#F087FF]",
                    children: "11,000"
                }), m.jsx("p", {
                    className: "text-[12px] text-[#BABABA] font-normal",
                    children: "ethereum gaming House participants"
                })]
            }), m.jsx("div", {
                children: m.jsx("img", {
                    src: wg,
                    alt: ""
                })
            }), m.jsx("div", {
                className: "col-span-2 row-span-2",
                children: m.jsx("img", {
                    src: kg,
                    alt: ""
                })
            }), m.jsx("div", {
                className: "row-span-2",
                children: m.jsx("img", {
                    src: Eg,
                    alt: ""
                })
            }), m.jsx("div", {
                children: m.jsx("img", {
                    src: Cg,
                    alt: ""
                })
            }), m.jsx("div", {
                children: m.jsx("img", {
                    src: Sg,
                    alt: ""
                })
            }), m.jsxs("div", {
                className: "bg-[#19161C] text-center py-10",
                children: [m.jsx("h1", {
                    className: "text-[35px] font-normal text-[#FFEB3B]",
                    children: "3,800"
                }), m.jsx("p", {
                    className: "text-[12px] text-[#BABABA] font-normal",
                    children: "ethereum Breakpoint 2022 attendees"
                })]
            }), m.jsxs("div", {
                className: "bg-[#19161C] text-center py-10",
                children: [m.jsx("h1", {
                    className: "text-[35px] font-normal text-[#F087FF]",
                    children: "11,000"
                }), m.jsx("p", {
                    className: "text-[12px] text-[#BABABA] font-normal",
                    children: "ethereum gaming House participants"
                })]
            })]
        })]
    })
}

function Ug() {
    return m.jsxs("div", {
        className: "w-full max-w-[1920px] flex flex-col justify-center items-center",
        children: [m.jsxs("h1", {
            className: "w-[90%] text-center md:text-[96px] text-[50px] pt-16 leading-none font-bold text-white",
            children: [m.jsx("span", {
                className: "text-[#1AA9F9]",
                children: "Trusted "
            }), " by the best"]
        }), m.jsx("div", {
            className: "clients md:w-[100%] w-[100%] h-[250px] md:h-[500px] gap-10 my-16"
        })]
    })
}

function Ag() {
    return m.jsxs("div", {
        className: "w-full max-w-[1920px] flex flex-col justify-center items-center",
        children: [m.jsxs("h1", {
            className: "w-[90%] text-center md:text-[96px] text-[50px] leading-none font-bold text-white pb-10",
            children: [m.jsx("span", {
                className: "text-[#1AA9F9]",
                children: "Trusted "
            }), " by the best"]
        }), m.jsx("div", {
            className: "empower md:w-[90%] w-[90%] h-[250px] md:h-[600px] gap-10 mb-16 mt-5"
        })]
    })
}

function qf() {
    return m.jsx("div", {
        className: "footer w-full max-w-[1920px] flex flex-col justify-center items-center",
        children: m.jsxs("div", {
            className: " md:w-[90%] w-[90%] h-[420px] md:h-[600px] flex flex-col justify-evenly items-start",
            children: [m.jsxs("div", {
                className: "w-full flex flex-col justify-center items-center",
                children: [m.jsxs("h1", {
                    className: "text-center md:text-[70px] text-[25px] pt-16 pb-5 leading-tight font-bold text-white",
                    children: ["Legacy is in your hand. ", m.jsx("br", {}), m.jsx("span", {
                        className: "text-[#1AA9F9]",
                        children: "Unleash "
                    }), " your gaming potential now."]
                }), m.jsx("button", {
                    className: "bg-transparent my-10 border-2 border-[#1AA9F9] rounded-2xl text-white py-[8px] md:py-[22px] px-[50px] md:px-[100px] hover:bg-[#ffffff2c] text-[16px] md:text-[20px]",
                    children: "Buy Now"
                })]
            }), m.jsxs("div", {
                className: "text-white",
                children: [m.jsx("h2", {
                    className: "md:text-[25px] text-[15px] font-medium py-2",
                    children: "Managed By"
                }), m.jsxs("h2", {
                    className: "md:text-[30px] text-[20px] font-medium py-0",
                    children: ["O", m.jsx("span", {
                        className: "text-[#1AA9F9]",
                        children: "x"
                    }), "hash"]
                }), m.jsxs("h3", {
                    className: "md:text-[20px] text-[10px] font-medium py-0",
                    children: [m.jsx("span", {
                        className: "text-gray-400",
                        children: "©"
                    }), " 2023 0xhash. All rights reserved."]
                })]
            })]
        })
    })
}
const Bg = "/assets/Frame%201-Co_FuspY.svg",
    $g = "/assets/Frame%202-BhYoTZ-q.png",
    Hg = "/assets/Frame%203-Dr9JW-Ne.png";

function Vg() {
    return m.jsxs("div", {
        className: "bg-black",
        children: [m.jsx(Og, {}), m.jsx(No, {
            Image: Bg,
            paragraph: "As the pioneer gaming ecosystem on the Optimism Superchain, 0xhash leverages OP Stack Layer2 tech to offer blockchain games the best of Ethereum with no code changes needed, at a significantly lower cost.",
            imageOnLeft: !0
        }), m.jsx(No, {
            Image: $g,
            paragraph: "Supported by 0xhash collective, launch with Dojo, onboard with Space3, localize with PlayNation, marketing with Gosu Network and engage with Eko ID.",
            imageOnLeft: !1
        }), m.jsx(No, {
            Image: Hg,
            paragraph: "The oxhash Collective is comprised of top web3 gaming thought leaders who are committed to shaping the mainstream adoption of a decentralized world. We understand web3 game development obstacles and offer fair distribution through our transparent governance model. ",
            imageOnLeft: !0
        }), m.jsx(Fg, {}), m.jsx(Ig, {}), m.jsx(Ug, {}), m.jsx(Ag, {}), m.jsx(qf, {})]
    })
}
const Fn = "/assets/Players%20(1)-D9SP8-C4.png",
    In = "/assets/Players%20(2)-DrgiPY4V.png";

function Wg() {
    let [e, t] = P.useState(0);
    return m.jsx("div", {
        className: "w-full max-w-[1920px] flex flex-col justify-center items-center",
        id: "MainCard",
        children: m.jsxs("div", {
            className: "w-[80%] mt-10 text-white text-center flex flex-col justify-center items-center",
            children: [m.jsxs("div", {
                className: "w-full items-center grid grid-cols-1 md:grid-cols-2",
                children: [m.jsx("div", {
                    className: "text-left",
                    children: m.jsx("h1", {
                        className: "text-[50px]",
                        children: "Ecosystem"
                    })
                }), m.jsx("div", {
                    className: "flex md:justify-end justify-start",
                    children: m.jsxs("ul", {
                        className: "flex justify-end gap-5 text-[20px]",
                        children: [m.jsx("li", {
                            children: m.jsx("button", {
                                onClick: () => t(0),
                                className: "text-[20px] hover:text-[#ffffff9f]",
                                children: "All"
                            })
                        }), m.jsx("li", {
                            children: m.jsx("button", {
                                onClick: () => t(1),
                                className: "text-[20px] hover:text-[#ffffff9f]",
                                children: "Game"
                            })
                        }), m.jsx("li", {
                            children: m.jsx("button", {
                                onClick: () => t(2),
                                className: "text-[20px] hover:text-[#ffffff9f]",
                                children: "Grow Tools"
                            })
                        }), m.jsx("li", {
                            children: m.jsx("button", {
                                className: "text-[20px] hover:text-[#ffffff9f]",
                                children: "Oops"
                            })
                        })]
                    })
                })]
            }), m.jsxs("div", {
                className: "glassMorfizam mt-10 md:py-36 py-14 md:px-14 px-8 flex flex-col gap-5 justify-center items-center",
                children: [m.jsxs("div", {
                    className: `${e===0?"block":"hidden"}`,
                    children: [m.jsxs("div", {
                        className: "w-full grid grid-cols-1 md:grid-cols-3 gap-4",
                        children: [m.jsx("div", {
                            children: m.jsx(ye, {
                                image: In,
                                playerImages: xe,
                                gameName: "Skyborne",
                                gamelink: "ToomuchLag",
                                gamePrice: "242eth"
                            })
                        }), m.jsx("div", {
                            children: m.jsx(ye, {
                                image: Fn,
                                playerImages: xe,
                                gameName: "Skyborne",
                                gamelink: "ToomuchLag",
                                gamePrice: "242eth"
                            })
                        }), m.jsx("div", {
                            children: m.jsx(ye, {
                                image: In,
                                playerImages: xe,
                                gameName: "Skyborne",
                                gamelink: "ToomuchLag",
                                gamePrice: "242eth"
                            })
                        })]
                    }), m.jsxs("div", {
                        className: "w-full grid grid-cols-1 md:grid-cols-3 gap-4 mt-4",
                        children: [m.jsx("div", {
                            children: m.jsx(ye, {
                                image: Fn,
                                playerImages: xe,
                                gameName: "Skyborne",
                                gamelink: "ToomuchLag",
                                gamePrice: "242eth"
                            })
                        }), m.jsx("div", {
                            children: m.jsx(ye, {
                                image: In,
                                playerImages: xe,
                                gameName: "Skyborne",
                                gamelink: "ToomuchLag",
                                gamePrice: "242eth"
                            })
                        }), m.jsx("div", {
                            children: m.jsx(ye, {
                                image: Fn,
                                playerImages: xe,
                                gameName: "Skyborne",
                                gamelink: "ToomuchLag",
                                gamePrice: "242eth"
                            })
                        })]
                    })]
                }), m.jsxs("div", {
                    className: `${e===1?"block":"hidden"}`,
                    children: [m.jsxs("div", {
                        className: "w-full grid grid-cols-1 md:grid-cols-3 gap-4",
                        children: [m.jsx("div", {
                            children: m.jsx(ye, {
                                image: In,
                                playerImages: xe,
                                gameName: "Skyborne",
                                gamelink: "ToomuchLag",
                                gamePrice: "242eth"
                            })
                        }), m.jsx("div", {
                            children: m.jsx(ye, {
                                image: Fn,
                                playerImages: xe,
                                gameName: "Skyborne",
                                gamelink: "ToomuchLag",
                                gamePrice: "242eth"
                            })
                        }), m.jsx("div", {
                            children: m.jsx(ye, {
                                image: In,
                                playerImages: xe,
                                gameName: "Skyborne",
                                gamelink: "ToomuchLag",
                                gamePrice: "242eth"
                            })
                        })]
                    }), m.jsxs("div", {
                        className: "w-full grid grid-cols-1 md:grid-cols-3 gap-4 mt-4",
                        children: [m.jsx("div", {
                            children: m.jsx(ye, {
                                image: Fn,
                                playerImages: xe,
                                gameName: "Skyborne",
                                gamelink: "ToomuchLag",
                                gamePrice: "242eth"
                            })
                        }), m.jsx("div", {
                            className: "block md:hidden"
                        }), m.jsx("div", {
                            className: "block md:hidden"
                        })]
                    })]
                }), m.jsx("div", {
                    className: `${e===2?"block":"hidden"}`,
                    children: m.jsxs("div", {
                        className: "w-full grid grid-cols-1 md:grid-cols-3 gap-4",
                        children: [m.jsx("div", {
                            children: m.jsx(ye, {
                                image: In,
                                playerImages: xe,
                                gameName: "Skyborne",
                                gamelink: "ToomuchLag",
                                gamePrice: "242eth"
                            })
                        }), m.jsx("div", {
                            children: m.jsx(ye, {
                                image: Fn,
                                playerImages: xe,
                                gameName: "Skyborne",
                                gamelink: "ToomuchLag",
                                gamePrice: "242eth"
                            })
                        }), m.jsx("div", {
                            className: "block md:hidden"
                        })]
                    })
                })]
            })]
        })
    })
}
const Qg = "/assets/mainCard-DxbBsTn_.png";

function Kg() {
    return m.jsxs("div", {
        className: "w-full max-w-[1920px] flex flex-col justify-center items-center",
        id: "MainCard",
        children: [m.jsx(Zf, {}), m.jsx("div", {
            className: "md:w-[80%] w-[90%] mt-10 text-white text-center flex flex-col justify-center items-center",
            children: m.jsxs("div", {
                className: "w-full grid grid-cols-1 md:grid-cols-2",
                children: [m.jsxs("div", {
                    className: "text-left ",
                    children: [m.jsx("h1", {
                        className: "md:text-[100px] text-[80px] font-medium leading-none",
                        children: "0xhash Ecosystem."
                    }), m.jsx("p", {
                        className: "md:text-[25px] text-[18px] pt-4",
                        children: "Explore games, apps, and integrations built on the Ancient8 Chain ecosystem."
                    }), m.jsxs("div", {
                        className: "flex gap-4 mt-5",
                        children: [m.jsx(Pi, {
                            value: "Build now"
                        }), m.jsx(Pi, {
                            value: "Read the Docs"
                        })]
                    })]
                }), m.jsx("div", {
                    className: "flex md:justify-end justify-start mt-10 md:mt-0",
                    children: m.jsx("div", {
                        className: "md:w-[80%] w-[90%] ",
                        children: m.jsx("img", {
                            src: Qg,
                            alt: ""
                        })
                    })
                })]
            })
        })]
    })
}

function Yg() {
    return m.jsxs("div", {
        className: "bg-black",
        children: [m.jsx(Kg, {}), m.jsx(Wg, {}), m.jsx("div", {
            className: "md:mt-20 mt-12",
            children: m.jsx(qf, {})
        })]
    })
}
const Gg = lg(ka(m.jsxs(ql, {
    children: [m.jsx(ql, {
        path: "/",
        element: m.jsx(Vg, {})
    }), m.jsx(ql, {
        path: "/Ecosystem",
        element: m.jsx(Yg, {})
    })]
})));

function Xg() {
    return m.jsx(pg, {
        router: Gg
    })
}
Po.createRoot(document.getElementById("root")).render(m.jsx(Rt.StrictMode, {
    children: m.jsx(Xg, {})
}));