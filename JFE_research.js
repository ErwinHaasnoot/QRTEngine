qrequire.define("dejavu/lib/inspect", [], function() {
        "use strict";
        "object" != typeof console || console.inspect || (console.inspect = "undefined" != typeof navigator && /msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent) ? console.dir || console.log : console.log)
    }), qrequire.define("dejavu/lib/printWarning", [], function() {
        "use strict";

        function e(e) {
            "undefined" != typeof console && console.warn(e)
        }
        return e
    }), qrequire.define("mout/lang/kindOf", [], function() {
        function e(e) {
            return null === e ? "Null" : e === i ? "Undefined" : t.exec(n.call(e))[1]
        }
        var t = /^\[object (.*)\]$/,
            n = Object.prototype.toString,
            i;
        return e
    }), qrequire.define("mout/lang/isKind", ["./kindOf"], function(e) {
        function t(t, n) {
            return e(t) === n
        }
        return t
    }), qrequire.define("mout/lang/isFunction", ["./isKind"], function(e) {
        function t(t) {
            return e(t, "Function")
        }
        return t
    }), qrequire.define("dejavu/lib/hasDefineProperty", ["mout/lang/isFunction"], function(e) {
        "use strict";

        function t() {
            if (!e(Object.defineProperty)) return !1;
            try {
                Object.defineProperty({}, "x", {})
            }
            catch (t) {
                return !1
            }
            return !0
        }
        return t()
    }), qrequire.define("dejavu/lib/obfuscateProperty", ["./hasDefineProperty"], function(e) {
        "use strict";

        function t(t, n, i, r, o) {
            e ? Object.defineProperty(t, n, {
                value: i,
                configurable: o || !1,
                writable: r || !1,
                enumerable: !1
            }) : t[n] = i
        }
        return t
    }), qrequire.define("mout/lang/isNumber", ["./isKind"], function(e) {
        function t(t) {
            return e(t, "Number")
        }
        return t
    }), qrequire.define("mout/lang/isString", ["./isKind"], function(e) {
        function t(t) {
            return e(t, "String")
        }
        return t
    }), qrequire.define("mout/lang/isBoolean", ["./isKind"], function(e) {
        function t(t) {
            return e(t, "Boolean")
        }
        return t
    }), qrequire.define("dejavu/lib/isImmutable", ["mout/lang/isNumber", "mout/lang/isString", "mout/lang/isBoolean"], function(e, t, n) {
        "use strict";

        function i(i) {
            return null == i || n(i) || e(i) || t(i)
        }
        return i
    }), qrequire.define("mout/lang/isObject", ["./isKind"], function(e) {
        function t(t) {
            return e(t, "Object")
        }
        return t
    }), qrequire.define("mout/lang/isArray", ["./isKind"], function(e) {
        var t = Array.isArray || function(t) {
            return e(t, "Array")
        };
        return t
    }), qrequire.define("mout/lang/isDate", ["./isKind"], function(e) {
        function t(t) {
            return e(t, "Date")
        }
        return t
    }), qrequire.define("mout/lang/isRegExp", ["./isKind"], function(e) {
        function t(t) {
            return e(t, "RegExp")
        }
        return t
    }), qrequire.define("mout/object/hasOwn", [], function() {
        function e(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        return e
    }), qrequire.define("mout/object/forIn", ["./hasOwn"], function(e) {
        function t() {
            o = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"], r = !0;
            for (var e in {
                    toString: null
                }) r = !1
        }

        function n(n, s, a) {
            var u, l = 0;
            null == r && t();
            for (u in n)
                if (i(s, n, u, a) === !1) break;
            if (r)
                for (var c = n.constructor, d = !!c && n === c.prototype;
                    (u = o[l++]) && ("constructor" === u && (d || !e(n, u)) || n[u] === Object.prototype[u] || i(s, n, u, a) !== !1););
        }

        function i(e, t, n, i) {
            return e.call(i, t[n], n, t)
        }
        var r, o;
        return n
    }), qrequire.define("mout/object/forOwn", ["./hasOwn", "./forIn"], function(e, t) {
        function n(n, i, r) {
            t(n, function(t, o) {
                return e(n, o) ? i.call(r, n[o], o, n) : void 0
            })
        }
        return n
    }), qrequire.define("mout/object/mixIn", ["./forOwn"], function(e) {
        function t(t, i) {
            for (var r = 0, o = arguments.length, s; ++r < o;) s = arguments[r], null != s && e(s, n, t);
            return t
        }

        function n(e, t) {
            this[t] = e
        }
        return t
    }), qrequire.define("mout/lang/createObject", ["../object/mixIn"], function(e) {
        function t(t, n) {
            function i() {}
            return i.prototype = t, e(new i, n)
        }
        return t
    }), qrequire.define("mout/array/indexOf", [], function() {
        function e(e, t, n) {
            if (n = n || 0, null == e) return -1;
            for (var i = e.length, r = 0 > n ? i + n : n; i > r;) {
                if (e[r] === t) return r;
                r++
            }
            return -1
        }
        return e
    }), qrequire.define("mout/array/combine", ["./indexOf"], function(e) {
        function t(t, n) {
            if (null == n) return t;
            for (var i = -1, r = n.length; ++i < r;) - 1 === e(t, n[i]) && t.push(n[i]);
            return t
        }
        return t
    }), qrequire.define("mout/array/contains", ["./indexOf"], function(e) {
        function t(t, n) {
            return -1 !== e(t, n)
        }
        return t
    }), qrequire.define("mout/lang/isPlainObject", [], function() {
        function e(e) {
            return !!e && "object" == typeof e && e.constructor === Object
        }
        return e
    }), qrequire.define("mout/lang/clone", ["./kindOf", "./isPlainObject", "../object/mixIn"], function(e, t, n) {
        function i(t) {
            switch (e(t)) {
                case "Object":
                    return r(t);
                case "Array":
                    return a(t);
                case "RegExp":
                    return o(t);
                case "Date":
                    return s(t);
                default:
                    return t
            }
        }

        function r(e) {
            return t(e) ? n({}, e) : e
        }

        function o(e) {
            var t = "";
            return t += e.multiline ? "m" : "", t += e.global ? "g" : "", t += e.ignoreCase ? "i" : "", new RegExp(e.source, t)
        }

        function s(e) {
            return new Date(+e)
        }

        function a(e) {
            return e.slice()
        }
        return i
    }), qrequire.define("mout/lang/deepClone", ["./clone", "../object/forOwn", "./kindOf", "./isPlainObject"], function(e, t, n, i) {
        function r(t, i) {
            switch (n(t)) {
                case "Object":
                    return o(t, i);
                case "Array":
                    return s(t, i);
                default:
                    return e(t)
            }
        }

        function o(e, n) {
            if (i(e)) {
                var o = {};
                return t(e, function(e, t) {
                    this[t] = r(e, n)
                }, o), o
            }
            return n ? n(e) : e
        }

        function s(e, t) {
            for (var n = [], i = -1, o = e.length, s; ++i < o;) n[i] = r(e[i], t);
            return n
        }
        return r
    }), qrequire.define("dejavu/lib/mixIn", [], function() {
        "use strict";

        function e(e, t) {
            var n, i = arguments.length,
                r, o;
            for (n = 1; i > n; n += 1) {
                o = arguments[n];
                for (r in arguments[n]) e[r] = o[r]
            }
            return e
        }
        return e
    }), qrequire.define("mout/array/append", [], function() {
        function e(e, t) {
            if (null == t) return e;
            for (var n = e.length, i = -1, r = t.length; ++i < r;) e[n + i] = t[i];
            return e
        }
        return e
    }), qrequire.define("mout/array/slice", [], function() {
        function e(e, t, n) {
            var i = e.length;
            t = null == t ? 0 : 0 > t ? Math.max(i + t, 0) : Math.min(t, i), n = null == n ? i : 0 > n ? Math.max(i + n, 0) : Math.min(n, i);
            for (var r = []; n > t;) r.push(e[t++]);
            return r
        }
        return e
    }), qrequire.define("mout/function/bind", ["../array/slice"], function(e) {
        function t(t, n, i) {
            var r = e(arguments, 2);
            return function() {
                return t.apply(n, r.concat(e(arguments)))
            }
        }
        return t
    }), qrequire.define("mout/lang/GLOBAL", [], function() {
        return Function("return this")()
    }), qrequire.define("mout/lang/toArray", ["./kindOf", "./GLOBAL"], function(e, t) {
        function n(n) {
            var i = [],
                r = e(n),
                o;
            if (null != n)
                if (null == n.length || "String" === r || "Function" === r || "RegExp" === r || n === t) i[i.length] = n;
                else
                    for (o = n.length; o--;) i[o] = n[o];
            return i
        }
        return n
    }), qrequire.define("mout/function/identity", [], function() {
        function e(e) {
            return e
        }
        return e
    }), qrequire.define("mout/function/prop", [], function() {
        function e(e) {
            return function(t) {
                return t[e]
            }
        }
        return e
    }), qrequire.define("mout/object/deepMatches", ["./forOwn", "../lang/isArray"], function(e, t) {
        function n(e, t) {
            for (var n = -1, i = e.length; ++n < i;)
                if (o(e[n], t)) return !0;
            return !1
        }

        function i(e, t) {
            for (var i = -1, r = t.length; ++i < r;)
                if (!n(e, t[i])) return !1;
            return !0
        }

        function r(t, n) {
            var i = !0;
            return e(n, function(e, n) {
                return o(t[n], e) ? void 0 : i = !1
            }), i
        }

        function o(e, n) {
            return e && "object" == typeof e ? t(e) && t(n) ? i(e, n) : r(e, n) : e === n
        }
        return o
    }), qrequire.define("mout/function/makeIterator_", ["./identity", "./prop", "../object/deepMatches"], function(e, t, n) {
        function i(i, r) {
            if (null == i) return e;
            switch (typeof i) {
                case "function":
                    return "undefined" != typeof r ? function(e, t, n) {
                        return i.call(r, e, t, n)
                    } : i;
                case "object":
                    return function(e) {
                        return n(e, i)
                    };
                case "string":
                case "number":
                    return t(i)
            }
        }
        return i
    }), qrequire.define("mout/array/filter", ["../function/makeIterator_"], function(e) {
        function t(t, n, i) {
            n = e(n, i);
            var r = [];
            if (null == t) return r;
            for (var o = -1, s = t.length, a; ++o < s;) a = t[o], n(a, o, t) && r.push(a);
            return r
        }
        return t
    }), qrequire.define("mout/array/unique", ["./filter"], function(e) {
        function t(t, i) {
            return i = i || n, e(t, function(e, t, n) {
                for (var r = n.length; ++t < r;)
                    if (i(e, n[t])) return !1;
                return !0
            })
        }

        function n(e, t) {
            return e === t
        }
        return t
    }), qrequire.define("mout/array/some", ["../function/makeIterator_"], function(e) {
        function t(t, n, i) {
            n = e(n, i);
            var r = !1;
            if (null == t) return r;
            for (var o = -1, s = t.length; ++o < s;)
                if (n(t[o], o, t)) {
                    r = !0;
                    break
                }
            return r
        }
        return t
    }), qrequire.define("mout/array/difference", ["./unique", "./filter", "./some", "./contains", "./slice"], function(e, t, n, i, r) {
        function o(o) {
            var s = r(arguments, 1),
                a = t(e(o), function(e) {
                    return !n(s, function(t) {
                        return i(t, e)
                    })
                });
            return a
        }
        return o
    }), qrequire.define("mout/array/insert", ["./difference", "./slice"], function(e, t) {
        function n(n, i) {
            var r = e(t(arguments, 1), n);
            return r.length && Array.prototype.push.apply(n, r), n.length
        }
        return n
    }), qrequire.define("dejavu/Class", ["./lib/inspect", "./lib/printWarning", "./lib/obfuscateProperty", "./lib/isImmutable", "mout/lang/isString", "mout/lang/isFunction", "mout/lang/isObject", "mout/lang/isArray", "mout/lang/isDate", "mout/lang/isRegExp", "mout/lang/createObject", "mout/object/hasOwn", "mout/array/combine", "mout/array/contains", "mout/lang/deepClone", "./lib/mixIn", "mout/array/append", "mout/function/bind", "mout/lang/toArray", "mout/array/insert"], function e(t, n, i, r, o, s, a, u, l, c, d, h, f, p, g, m, _, v, y, b) {
        "use strict";

        function T(e, t) {
            var n = function() {};
            n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e
        }

        function w(e, t, n, i) {
            if (n[F].efficient) return t;
            var r, o = n.$parent,
                s = o && (i ? o : o.prototype),
                a;
            return t = t[H] || t, r = function() {
                var i = this.$super,
                    r = this.$self,
                    o = s && s[e],
                    a;
                return this.$super = o, this.$self = n, a = t.apply(this, arguments), this.$super = i, this.$self = r, a
            }, r[H] = t, r
        }

        function x(e, t) {
            var n, i;
            for (n in e) /^(_){0,2}initialize$/.test(n) || (i = e[n], h(t.prototype, n) || (!s(i) || i[F] || i[M] ? (t.prototype[n] = i, r(i) || b(t[F].properties, n)) : (t.prototype[n] = w(n, i, t), i[N] && b(t[F].binds, n))))
        }

        function S(e, t) {
            if (h(e, "$borrows")) {
                var n, i, r, o, u = y(e.$borrows),
                    l = u.length;
                for (l -= 1; l >= 0; l -= 1)
                    if (n = u[l], a(n)) x(n, t);
                    else if (!s(n) || n[F]) {
                    for (n = n.prototype, x(n, t), i = n.$static[F].staticMethods.length - 1; i >= 0; i -= 1) r = n.$static[F].staticMethods[i], b(t[F].staticMethods, r), t[r] = n.$static[r];
                    for (r in n.$static[F].staticProperties) o = n.$static[F].staticProperties[r], t[F].staticProperties[r] = o, t[r] = o;
                    f(t[F].binds, n.$static[F].binds)
                }
                else x(n.prototype, t);
                delete e.$borrows
            }
        }

        function C(e, t) {
            e = y(e);
            var n, i = e.length,
                r;
            for (i -= 1; i >= 0; i -= 1)
                if (n = e[i], !p(t[F].interfaces, n)) {
                    for (r = n[M].constants.length - 1; r >= 0; r -= 1) t[n[M].constants[r]] = n[n[M].constants[r]], t[F].staticProperties[n[M].constants[r]] = n[n[M].constants[r]];
                    t[F].interfaces.push(n)
                }
        }

        function E(e, t, n) {
            var i, o, a = {};
            if (h(e, "$statics")) {
                for (i in e.$statics) o = e.$statics[i], !s(o) || o[F] || o[M] ? (t[F].staticProperties[i] = o, t[i] = o) : (b(t[F].staticMethods, i), t[i] = w(i, o, t, !0));
                delete e.$statics
            }
            h(e, "$implements") && (a.$implements = e.$implements, delete e.$implements), h(e, "$abstracts") && (a.$abstracts = e.$abstracts, delete e.$abstracts);
            for (i in e) o = e[i], !s(o) || o[F] || o[M] ? (t.prototype[i] = o, r(o) || b(t[F].properties, i)) : (t.prototype[i] = w(i, o, t), o[N] && (b(t[F].binds, i), delete o[N]));
            m(e, a)
        }

        function P(e, t) {
            var n, i, r = {};
            if (delete e.$locked, h(e, "$constants") && (r.$constants = e.$constants, delete e.$constants), h(e, "$finals") && (r.$finals = e.$finals, delete e.$finals), E(e, t), r.$constants)
                for (n in r.$constants) i = r.$constants[n], t[F].staticProperties[n] = i, t[n] = i;
            r.$finals && E(r.$finals, t, !0)
        }

        function A(e, t) {
            var n, i;
            for (n = e.length - 1; n >= 0; n -= 1) i = t[e[n]], t[e[n]] = v(i, t)
        }

        function j(e, t) {
            var n = e || function r() {
                var e, t;
                for (t = this.$static[F], e = t.properties.length - 1; e >= 0; e -= 1) this[t.properties[e]] = g(this[t.properties[e]]);
                t.efficient || (this.$super = this.$self = null), t.binds.length && A(t.binds, this, this), this.initialize.apply(this, arguments)
            };
            return n[F] || i(n, F, {
                staticMethods: [],
                staticProperties: {},
                properties: [],
                interfaces: [],
                binds: []
            }), n
        }

        function k(e) {
            return e = e || this
        }

        function D(e) {
            var t = y(arguments),
                n;
            return this && !e[H] && this.$static && this.$static[F] && (e = w(null, e, this.$self || this.$static)), t.splice(1, 0, this), n = v.apply(e, t)
        }

        function O(e) {
            var t = y(arguments),
                n;
            return this && !e[H] && this.$static && this.$static[F] && (e = w(null, e, this.$self || this.$static, !0)), t.splice(1, 0, this), n = v.apply(e, t)
        }

        function I(e, t) {
            var n, r = t[F].binds,
                o, s;
            for (n = r.length - 1; n >= 0; n -= 1) "__" !== r[n].substr(0, 2) && e[F].binds.push(r[n]);
            for (_(e[F].properties, t[F].properties), _(e[F].staticMethods, t[F].staticMethods), n = t[F].staticMethods.length - 1; n >= 0; n -= 1) "__" !== t[F].staticMethods[n].substr(0, 2) && (e[t[F].staticMethods[n]] = t[t[F].staticMethods[n]]);
            for (o in t[F].staticProperties) s = t[F].staticProperties[o], "__" !== o.substr(0, 2) && (e[F].staticProperties[o] = s, e[o] = s);
            i(e, "$parent", t), e[F].interfaces = [].concat(t[F].interfaces)
        }

        function R(e) {
            var t = e[F],
                n, r, o;
            if (t.efficient && (n = e.$canOptimizeConst, delete e.$canOptimizeConst, n && !t.properties.length && !t.binds.length)) {
                if (h(e.prototype, "initialize")) r = e.prototype.initialize;
                else switch (o = e.prototype.initialize, o.length) {
                    case 0:
                        r = function() {
                            o.call(this)
                        };
                        break;
                    case 1:
                        r = function(e) {
                            o.call(this, e)
                        };
                        break;
                    case 2:
                        r = function(e, t) {
                            o.call(this, e, t)
                        };
                        break;
                    case 3:
                        r = function(e, t, n) {
                            o.call(this, e, t, n)
                        };
                        break;
                    case 4:
                        r = function(e, t, n, i) {
                            o.call(this, e, t, n, i)
                        };
                        break;
                    default:
                        r = function() {
                            o.apply(this, arguments)
                        }
                }
                return e.$parent && (T(r, e), r.$parent = e.$parent), m(r.prototype, e.prototype), m(r, e), i(r, F, e[F]), r
            }
            return e
        }

        function L(e, t) {
            return q.declare(this, e, t)
        }
        var B, q = {},
            F = "$class",
            M = "$interface",
            N = "$bound_dejavu",
            H = "$wrapped_dejavu";
        if (B = function(e, t, n) {
                n = n || {};
                var r, o, s = !!t;
                return h(e, "$extends") ? (o = e.$extends, delete e.$extends, o[F] || (o = B(o.prototype, o, {
                    isVanilla: !0
                })), e.initialize = n.isVanilla ? r : e.initialize || e._initialize || e.__initialize, e.initialize || delete e.initialize, r = j(t), T(r, o), I(r, o)) : (r = j(t), e.initialize = n.isVanilla ? r : e.initialize || e._initialize || e.__initialize || function() {}), r[F].efficient = s, n.isVanilla || (delete e._initialize, delete e.__initialize), S(e, r), P(e, r), r = R(r), i(r.prototype, "$static", r), i(r, "$static", r), i(r, "$self", null, !0), i(r, "$super", null, !0), i(r, "$member", k), i(r, "$bind", O), r.$parent || (i(r.prototype, "$bind", D), i(r.prototype, "$member", k)), h(e, "$implements") && (C(e.$implements, r), delete r.prototype.$implements), h(e, "$abstracts") && delete e.$abstracts, r.extend = L, r
            }, q.declare = function(e, t, n) {
                var i, r = s(this) ? this : B,
                    o, u;
                if (e && t && t !== !0 ? ((o = s(t)) || n ? (u = j(), u.$canOptimizeConst = !!n, i = o ? t(e.prototype, e, u) : t) : i = t, i.$extends = e) : (o = s(e)) || t ? (u = j(), u.$canOptimizeConst = !!t, i = o ? e(u) : e) : i = e, !a(i)) throw new Error("Expected class definition to be an object with the class members.");
                return r(i, u)
            }, i(q, "$create", B), !Function.prototype.$bound || !Function.prototype.$bound.dejavu) try {
            i(Function.prototype, "$bound", function() {
                return this[N] = !0, this
            }), Function.prototype.$bound.dejavu = !0
        }
        catch (Q) {
            n("Could not set Function.prototype.$bound.")
        }
        if (!Function.prototype.$bind || !Function.prototype.$bind.dejavu) try {
            i(Function.prototype, "$bind", function(e) {
                var t = y(arguments);
                return t.splice(0, 1, this), s(e) ? O.apply(e, t) : D.apply(e, t)
            }), Function.prototype.$bind.dejavu = !0
        }
        catch (Q) {
            n("Could not set Function.prototype.$bind.")
        }
        if (!Function.prototype.$member || !Function.prototype.$member.dejavu) try {
            i(Function.prototype, "$member", function() {
                return k(this)
            }), Function.prototype.$member.dejavu = !0
        }
        catch (Q) {
            n("Could not set Function.prototype.$member.")
        }
        return q
    }), qrequire.define("dejavu/AbstractClass", ["mout/object/hasOwn", "mout/array/insert", "./Class"], function t(e, n, i) {
        "use strict";

        function r(t, r) {
            var u, l, c, d;
            if (e(t, "$abstracts") && (l = t.$abstracts, delete t.$abstracts), u = i.$create(t, r), u[o] = !0, l)
                for (c in l) d = l[c], d[a] && n(u[s].binds, c);
            return u
        }
        var o = "$abstract",
            s = "$class",
            a = "$bound_dejavu",
            u = {};
        return u.declare = function(e, t, n) {
            return i.declare.call(r, e, t, n)
        }, u
    }), qrequire.define("dejavu/Interface", ["mout/lang/isFunction", "mout/object/hasOwn", "mout/lang/toArray"], function n(e, t, i) {
        "use strict";

        function r(e) {
            return e.$extends = this, a.declare(e)
        }

        function o(e) {
            delete e.$name;
            var n, o, a, u, l = function() {};
            if (l[s] = {
                    parents: [],
                    constants: []
                }, t(e, "$extends")) {
                for (n = i(e.$extends), o = n.length, o -= 1; o >= 0; o -= 1) {
                    for (u = n[o], a = u[s].constants.length - 1; a >= 0; a -= 1) l[u[s].constants[a]] = u[u[s].constants[a]];
                    l[s].parents.push(u)
                }
                delete e.$extends
            }
            if (t(e, "$constants"))
                for (o in e.$constants) l[o] = e.$constants[o], l[s].constants.push(o);
            return l.extend = r, l
        }
        var s = "$interface",
            a = {};
        return a.declare = o, a
    }), qrequire.define("dejavu/FinalClass", ["./Class"], function i(e) {
        "use strict";

        function t(t, n) {
            var i = e.$create(t, n);
            return i
        }
        var n = {};
        return n.declare = function(n, i, r) {
            return e.declare.call(t, n, i, r)
        }, n
    }), qrequire.define("dejavu/instanceOf", ["mout/lang/isFunction"], function r(e) {
        "use strict";

        function t(e, n) {
            var i, r = e[o].parents;
            for (i = r.length - 1; i >= 0; i -= 1) {
                if (r[i] === n) return !0;
                if (t(e, r[i])) return !0
            }
            return !1
        }

        function n(e, n) {
            var i, o = e.$static[r].interfaces;
            for (i = o.length - 1; i >= 0; i -= 1)
                if (o[i] === n || t(o[i], n)) return !0;
            return !1
        }

        function i(t, i) {
            return e(i) ? t instanceof i ? !0 : t && t.$static && t.$static[r] && i && i[o] ? n(t, i) : !1 : !1
        }
        var r = "$class",
            o = "$interface";
        return i
    }), qrequire.define("dejavu/options", [], function() {
        "use strict";
        return {}
    }), qrequire.define("dejavu/main", ["./Class", "./AbstractClass", "./Interface", "./FinalClass", "./instanceOf", "./options"], function(e, t, n, i, r, o) {
        "use strict";
        var s = {};
        return s.Class = e, s.AbstractClass = t, s.Interface = n, s.FinalClass = i, s.instanceOf = r, s.options = o, s.mode = "loose", s
    }), qrequire.define("dejavu", ["dejavu/main"], function(e) {
        return e
    }), ! function(e) {
        "object" == typeof exports ? module.exports = e() : "function" == typeof qrequire.define && qrequire.define.amd ? qrequire.define("bluebird", e) : "undefined" != typeof window ? window.Promise = e() : "undefined" != typeof global ? global.Promise = e() : "undefined" != typeof self && (self.Promise = e())
    }(function() {
        var e, t, n;
        return function i(e, t, n) {
            function r(s, a) {
                if (!t[s]) {
                    if (!e[s]) {
                        var u = "function" == typeof require && require;
                        if (!a && u) return u(s, !0);
                        if (o) return o(s, !0);
                        throw new Error("Cannot find module '" + s + "'")
                    }
                    var l = t[s] = {
                        exports: {}
                    };
                    e[s][0].call(l.exports, function(t) {
                        var n = e[s][1][t];
                        return r(n ? n : t)
                    }, l, l.exports, i, e, t, n)
                }
                return t[s].exports
            }
            for (var o = "function" == typeof require && require, s = 0; s < n.length; s++) r(n[s]);
            return r
        }({
            1: [function(e, t, n) {
                t.exports = function(e) {
                    function t(e) {
                        var t = new n(e),
                            i = t.promise();
                        return i.isRejected() ? i : (t.setHowMany(1), t.setUnwrap(), t.init(), i)
                    }
                    var n = e._SomePromiseArray;
                    e.any = function i(e) {
                        return t(e)
                    }, e.prototype.any = function r() {
                        return t(this)
                    }
                }
            }, {}],
            2: [function(e, t, n) {
                function i() {
                    this._isTickUsed = !1, this._schedule = r, this._length = 0, this._lateBuffer = new o(16), this._functionBuffer = new o(65536);
                    var e = this;
                    this.consumeFunctionBuffer = function t() {
                        e._consumeFunctionBuffer()
                    }
                }
                var r = e("./schedule.js"),
                    o = e("./queue.js"),
                    s = e("./util.js").errorObj,
                    a = e("./util.js").tryCatch1,
                    u = "undefined" != typeof process ? process : void 0;
                i.prototype.haveItemsQueued = function l() {
                    return this._length > 0
                }, i.prototype.invokeLater = function c(e, t, n) {
                    void 0 === u || null == u.domain || e.domain || (e = u.domain.bind(e)), this._lateBuffer.push(e, t, n), this._queueTick()
                }, i.prototype.invoke = function d(e, t, n) {
                    void 0 === u || null == u.domain || e.domain || (e = u.domain.bind(e));
                    var i = this._functionBuffer;
                    i.push(e, t, n), this._length = i.length(), this._queueTick()
                }, i.prototype._consumeFunctionBuffer = function h() {
                    for (var e = this._functionBuffer; e.length() > 0;) {
                        var t = e.shift(),
                            n = e.shift(),
                            i = e.shift();
                        t.call(n, i)
                    }
                    this._reset(), this._consumeLateBuffer()
                }, i.prototype._consumeLateBuffer = function f() {
                    for (var e = this._lateBuffer; e.length() > 0;) {
                        var t = e.shift(),
                            n = e.shift(),
                            i = e.shift(),
                            r = a(t, n, i);
                        if (r === s) {
                            if (this._queueTick(), null == t.domain) throw r.e;
                            t.domain.emit("error", r.e)
                        }
                    }
                }, i.prototype._queueTick = function p() {
                    this._isTickUsed || (this._schedule(this.consumeFunctionBuffer), this._isTickUsed = !0)
                }, i.prototype._reset = function g() {
                    this._isTickUsed = !1, this._length = 0
                }, t.exports = new i
            }, {
                "./queue.js": 25,
                "./schedule.js": 28,
                "./util.js": 35
            }],
            3: [function(e, t, n) {
                var i = e("./promise.js")();
                t.exports = i
            }, {
                "./promise.js": 20
            }],
            4: [function(e, t, n) {
                var i = Object.create,
                    r = i && i(null),
                    o = i && i(null);
                r[" size"] = o[" size"] = 0, t.exports = function(t) {
                    function n(e) {
                        return new Function("obj", "                                             \n        'use strict'                                                         \n        var len = this.length;                                               \n        switch(len) {                                                        \n            case 1: return obj.methodName(this[0]);                          \n            case 2: return obj.methodName(this[0], this[1]);                 \n            case 3: return obj.methodName(this[0], this[1], this[2]);        \n            case 0: return obj.methodName();                                 \n            default: return obj.methodName.apply(obj, this);                 \n        }                                                                    \n        ".replace(/methodName/g, e))
                    }

                    function i(e) {
                        return new Function("obj", "                                             \n        'use strict';                                                        \n        return obj.propertyName;                                             \n        ".replace("propertyName", e))
                    }

                    function s(e, t, n) {
                        var i = n[e];
                        if ("function" != typeof i) {
                            if (!p(e)) return null;
                            if (i = t(e), n[e] = i, n[" size"]++, n[" size"] > 512) {
                                for (var r = Object.keys(n), o = 0; 256 > o; ++o) delete n[r[o]];
                                n[" size"] = r.length - 256
                            }
                        }
                        return i
                    }

                    function a(e) {
                        return s(e, n, r)
                    }

                    function u(e) {
                        return s(e, i, o)
                    }

                    function l(e) {
                        return e[this.pop()].apply(e, this)
                    }

                    function c(e) {
                        return e[this]
                    }

                    function d(e) {
                        return e[this]
                    }
                    var h = e("./util.js"),
                        f = h.canEvaluate,
                        p = h.isIdentifier;
                    t.prototype.call = function g(e) {
                        for (var t = arguments.length, n = new Array(t - 1), i = 1; t > i; ++i) n[i - 1] = arguments[i];
                        if (f) {
                            var r = a(e);
                            if (null !== r) return this._then(r, void 0, void 0, n, void 0)
                        }
                        return n.push(e), this._then(l, void 0, void 0, n, void 0)
                    }, t.prototype.get = function m(e) {
                        var t = "number" == typeof e,
                            n;
                        if (t) n = d;
                        else if (f) {
                            var i = u(e);
                            n = null !== i ? i : c
                        }
                        else n = c;
                        return this._then(n, void 0, void 0, e, void 0)
                    }
                }
            }, {
                "./util.js": 35
            }],
            5: [function(e, t, n) {
                t.exports = function(t, n) {
                    var i = e("./errors.js"),
                        r = i.canAttach,
                        o = e("./async.js"),
                        s = i.CancellationError;
                    t.prototype._cancel = function a(e) {
                        if (!this.isCancellable()) return this;
                        for (var t, n = this; void 0 !== (t = n._cancellationParent) && t.isCancellable();) n = t;
                        n._attachExtraTrace(e), n._rejectUnchecked(e)
                    }, t.prototype.cancel = function u(e) {
                        return this.isCancellable() ? (e = void 0 !== e ? r(e) ? e : new Error(e + "") : new s, o.invokeLater(this._cancel, this, e), this) : this
                    }, t.prototype.cancellable = function l() {
                        return this._cancellable() ? this : (this._setCancellable(), this._cancellationParent = void 0, this)
                    }, t.prototype.uncancellable = function c() {
                        var e = new t(n);
                        return e._propagateFrom(this, 6), e._follow(this), e._unsetCancellable(), e
                    }, t.prototype.fork = function d(e, t, n) {
                        var i = this._then(e, t, n, void 0, void 0);
                        return i._setCancellable(), i._cancellationParent = void 0, i
                    }
                }
            }, {
                "./async.js": 2,
                "./errors.js": 10
            }],
            6: [function(e, t, n) {
                t.exports = function() {
                    function t(e) {
                        var t;
                        if ("function" == typeof e) t = "[function " + (e.name || "anonymous") + "]";
                        else {
                            t = e.toString();
                            var i = /\[object [a-zA-Z0-9$_]+\]/;
                            if (i.test(t)) try {
                                var r = JSON.stringify(e);
                                t = r
                            }
                            catch (o) {}
                            0 === t.length && (t = "(empty array)")
                        }
                        return "(<" + n(t) + ">, no stack trace)"
                    }

                    function n(e) {
                        var t = 41;
                        return e.length < t ? e : e.substr(0, t - 3) + "..."
                    }

                    function i(e, t) {
                        this.captureStackTrace(i, t)
                    }
                    var r = e("./util.js").inherits,
                        o = e("./es5.js").defineProperty,
                        s = new RegExp("\\b(?:[a-zA-Z0-9.]+\\$_\\w+|tryCatch(?:1|2|3|4|Apply)|new \\w*PromiseArray|\\w*PromiseArray\\.\\w*PromiseArray|setTimeout|CatchFilter\\$_\\w+|makeNodePromisified|processImmediate|process._tickCallback|nextTick|Async\\$\\w+)\\b"),
                        a = null,
                        u = null;
                    r(i, Error), i.prototype.captureStackTrace = function c(e, t) {
                        l(this, e, t)
                    }, i.possiblyUnhandledRejection = function d(e) {
                        if ("object" == typeof console) {
                            var t;
                            if ("object" == typeof e || "function" == typeof e) {
                                var n = e.stack;
                                t = "Possibly unhandled " + u(n, e)
                            }
                            else t = "Possibly unhandled " + String(e);
                            "function" == typeof console.error || "object" == typeof console.error ? console.error(t) : ("function" == typeof console.log || "object" == typeof console.log) && console.log(t)
                        }
                    }, i.combine = function h(e, t) {
                        for (var n = e.length - 1, i = t.length - 1; i >= 0; --i) {
                            var r = t[i];
                            if (e[n] !== r) break;
                            e.pop(), n--
                        }
                        e.push("From previous event:");
                        for (var o = e.concat(t), u = [], i = 0, l = o.length; l > i; ++i) s.test(o[i]) || i > 0 && !a.test(o[i]) && "From previous event:" !== o[i] || u.push(o[i]);
                        return u
                    }, i.protectErrorMessageNewlines = function(e) {
                        for (var t = 0; t < e.length && !a.test(e[t]); ++t);
                        if (!(1 >= t)) {
                            for (var n = [], i = 0; t > i; ++i) n.push(e.shift());
                            e.unshift(n.join("\x00"))
                        }
                    }, i.isSupported = function f() {
                        return "function" == typeof l
                    };
                    var l = function p() {
                        if ("number" == typeof Error.stackTraceLimit && "function" == typeof Error.captureStackTrace) {
                            a = /^\s*at\s*/, u = function(e, n) {
                                return "string" == typeof e ? e : void 0 !== n.name && void 0 !== n.message ? n.name + ". " + n.message : t(n)
                            };
                            var e = Error.captureStackTrace;
                            return function r(t, n) {
                                e(t, n)
                            }
                        }
                        var n = new Error;
                        if ("string" == typeof n.stack && "function" == typeof "".startsWith && n.stack.startsWith("stackDetection@") && "stackDetection" === p.name) {
                            o(Error, "stackTraceLimit", {
                                writable: !0,
                                enumerable: !1,
                                configurable: !1,
                                value: 25
                            }), a = /@/;
                            var i = /[@\n]/;
                            return u = function(e, n) {
                                    return "string" == typeof e ? n.name + ". " + n.message + "\n" + e : void 0 !== n.name && void 0 !== n.message ? n.name + ". " + n.message : t(n)
                                },
                                function s(e) {
                                    for (var t = (new Error).stack, n = t.split(i), r = n.length, o = "", s = 0; r > s; s += 2) o += n[s], o += "@", o += n[s + 1], o += "\n";
                                    e.stack = o
                                }
                        }
                        return u = function(e, n) {
                            return "string" == typeof e ? e : "object" != typeof n && "function" != typeof n || void 0 === n.name || void 0 === n.message ? t(n) : n.name + ". " + n.message
                        }, null
                    }();
                    return i
                }
            }, {
                "./es5.js": 12,
                "./util.js": 35
            }],
            7: [function(e, t, n) {
                t.exports = function(t) {
                    function n(e, t, n) {
                        this._instances = e, this._callback = t, this._promise = n
                    }

                    function i(e, t) {
                        var n = {},
                            i = s(e, n, t);
                        if (i === a) return i;
                        var r = u(n);
                        return r.length ? (a.e = new l("Catch filter must inherit from Error or be a simple predicate function"), a) : i
                    }
                    var r = e("./util.js"),
                        o = e("./errors.js"),
                        s = r.tryCatch1,
                        a = r.errorObj,
                        u = e("./es5.js").keys,
                        l = o.TypeError;
                    return n.prototype.doFilter = function c(e) {
                        for (var n = this._callback, r = this._promise, u = r._boundTo, l = 0, c = this._instances.length; c > l; ++l) {
                            var d = this._instances[l],
                                h = d === Error || null != d && d.prototype instanceof Error;
                            if (h && e instanceof d) {
                                var f = s(n, u, e);
                                return f === a ? (t.e = f.e, t) : f
                            }
                            if ("function" == typeof d && !h) {
                                var p = i(d, e);
                                if (p === a) {
                                    var g = o.canAttach(a.e) ? a.e : new Error(a.e + "");
                                    this._promise._attachExtraTrace(g), e = a.e;
                                    break
                                }
                                if (p) {
                                    var f = s(n, u, e);
                                    return f === a ? (t.e = f.e, t) : f
                                }
                            }
                        }
                        return t.e = e, t
                    }, n
                }
            }, {
                "./errors.js": 10,
                "./es5.js": 12,
                "./util.js": 35
            }],
            8: [function(e, t, n) {
                var i = e("./util.js"),
                    r = i.isPrimitive,
                    o = i.wrapsPrimitiveReceiver;
                t.exports = function(e) {
                    var t = function s() {
                            return this
                        },
                        n = function a() {
                            throw this
                        },
                        i = function u(e, t) {
                            return 1 === t ? function n() {
                                throw e
                            } : 2 === t ? function i() {
                                return e
                            } : void 0
                        };
                    e.prototype["return"] = e.prototype.thenReturn = function l(e) {
                        return o && r(e) ? this._then(i(e, 2), void 0, void 0, void 0, void 0) : this._then(t, void 0, void 0, e, void 0)
                    }, e.prototype["throw"] = e.prototype.thenThrow = function c(e) {
                        return o && r(e) ? this._then(i(e, 1), void 0, void 0, void 0, void 0) : this._then(n, void 0, void 0, e, void 0)
                    }
                }
            }, {
                "./util.js": 35
            }],
            9: [function(e, t, n) {
                t.exports = function(e, t) {
                    var n = e.reduce;
                    e.prototype.each = function i(e) {
                        return n(this, e, null, t)
                    }, e.each = function r(e, i) {
                        return n(e, i, null, t)
                    }
                }
            }, {}],
            10: [function(e, t, n) {
                function i(e) {
                    try {
                        h(e, "isOperational", !0)
                    }
                    catch (t) {}
                }

                function r(e) {
                    return null == e ? !1 : e instanceof u || e.isOperational === !0
                }

                function o(e) {
                    return e instanceof Error
                }

                function s(e) {
                    return o(e)
                }

                function a(e, t) {
                    function n(i) {
                        return this instanceof n ? (this.message = "string" == typeof i ? i : t, this.name = e, void(Error.captureStackTrace && Error.captureStackTrace(this, this.constructor))) : new n(i)
                    }
                    return d(n, Error), n
                }

                function u(e) {
                    this.name = "OperationalError", this.message = e, this.cause = e, this.isOperational = !0, e instanceof Error ? (this.message = e.message, this.stack = e.stack) : Error.captureStackTrace && Error.captureStackTrace(this, this.constructor)
                }
                var l = e("./es5.js").freeze,
                    c = e("./util.js"),
                    d = c.inherits,
                    h = c.notEnumerableProp,
                    f, p, g = a("CancellationError", "cancellation error"),
                    m = a("TimeoutError", "timeout error"),
                    _ = a("AggregateError", "aggregate error");
                try {
                    f = TypeError, p = RangeError
                }
                catch (v) {
                    f = a("TypeError", "type error"), p = a("RangeError", "range error")
                }
                for (var y = "join pop push shift unshift slice filter forEach some every map indexOf lastIndexOf reduce reduceRight sort reverse".split(" "), b = 0; b < y.length; ++b) "function" == typeof Array.prototype[y[b]] && (_.prototype[y[b]] = Array.prototype[y[b]]);
                _.prototype.length = 0, _.prototype.isOperational = !0;
                var T = 0;
                _.prototype.toString = function() {
                    var e = Array(4 * T + 1).join(" "),
                        t = "\n" + e + "AggregateError of:\n";
                    T++, e = Array(4 * T + 1).join(" ");
                    for (var n = 0; n < this.length; ++n) {
                        for (var i = this[n] === this ? "[Circular AggregateError]" : this[n] + "", r = i.split("\n"), o = 0; o < r.length; ++o) r[o] = e + r[o];
                        i = r.join("\n"), t += i + "\n"
                    }
                    return T--, t
                }, d(u, Error);
                var w = "__BluebirdErrorTypes__",
                    x = Error[w];
                x || (x = l({
                    CancellationError: g,
                    TimeoutError: m,
                    OperationalError: u,
                    RejectionError: u,
                    AggregateError: _
                }), h(Error, w, x)), t.exports = {
                    Error: Error,
                    TypeError: f,
                    RangeError: p,
                    CancellationError: x.CancellationError,
                    OperationalError: x.OperationalError,
                    TimeoutError: x.TimeoutError,
                    AggregateError: x.AggregateError,
                    originatesFromRejection: r,
                    markAsOriginatingFromRejection: i,
                    canAttach: s
                }
            }, {
                "./es5.js": 12,
                "./util.js": 35
            }],
            11: [function(e, t, n) {
                t.exports = function(t) {
                    function n(e) {
                        var n = new i(e),
                            r = t.rejected(n),
                            o = r._peekContext();
                        return null != o && o._attachExtraTrace(n), r
                    }
                    var i = e("./errors.js").TypeError;
                    return n
                }
            }, {
                "./errors.js": 10
            }],
            12: [function(e, t, n) {
                var i = function() {
                    "use strict";
                    return void 0 === this
                }();
                if (i) t.exports = {
                    freeze: Object.freeze,
                    defineProperty: Object.defineProperty,
                    keys: Object.keys,
                    getPrototypeOf: Object.getPrototypeOf,
                    isArray: Array.isArray,
                    isES5: i
                };
                else {
                    var r = {}.hasOwnProperty,
                        o = {}.toString,
                        s = {}.constructor.prototype,
                        a = function h(e) {
                            var t = [];
                            for (var n in e) r.call(e, n) && t.push(n);
                            return t
                        },
                        u = function f(e, t, n) {
                            return e[t] = n.value, e
                        },
                        l = function p(e) {
                            return e
                        },
                        c = function g(e) {
                            try {
                                return Object(e).constructor.prototype
                            }
                            catch (t) {
                                return s
                            }
                        },
                        d = function m(e) {
                            try {
                                return "[object Array]" === o.call(e)
                            }
                            catch (t) {
                                return !1
                            }
                        };
                    t.exports = {
                        isArray: d,
                        keys: a,
                        defineProperty: u,
                        freeze: l,
                        getPrototypeOf: c,
                        isES5: i
                    }
                }
            }, {}],
            13: [function(e, t, n) {
                t.exports = function(e, t) {
                    var n = e.map;
                    e.prototype.filter = function i(e, r) {
                        return n(this, e, r, t)
                    }, e.filter = function r(e, i, o) {
                        return n(e, i, o, t)
                    }
                }
            }, {}],
            14: [function(e, t, n) {
                t.exports = function(t, n, i) {
                    function r() {
                        return this
                    }

                    function o() {
                        throw this
                    }

                    function s(e) {
                        return function t() {
                            return e
                        }
                    }

                    function a(e) {
                        return function t() {
                            throw e
                        }
                    }

                    function u(e, t, n) {
                        var i;
                        return i = h && f(t) ? n ? s(t) : a(t) : n ? r : o, e._then(i, p, void 0, t, void 0)
                    }

                    function l(e) {
                        var r = this.promise,
                            o = this.handler,
                            s = r._isBound() ? o.call(r._boundTo) : o();
                        if (void 0 !== s) {
                            var a = i(s, void 0);
                            if (a instanceof t) return u(a, e, r.isFulfilled())
                        }
                        return r.isRejected() ? (n.e = e, n) : e
                    }

                    function c(e) {
                        var n = this.promise,
                            r = this.handler,
                            o = n._isBound() ? r.call(n._boundTo, e) : r(e);
                        if (void 0 !== o) {
                            var s = i(o, void 0);
                            if (s instanceof t) return u(s, e, !0)
                        }
                        return e
                    }
                    var d = e("./util.js"),
                        h = d.wrapsPrimitiveReceiver,
                        f = d.isPrimitive,
                        p = d.thrower;
                    t.prototype._passThroughHandler = function g(e, t) {
                        if ("function" != typeof e) return this.then();
                        var n = {
                            promise: this,
                            handler: e
                        };
                        return this._then(t ? l : c, t ? l : void 0, void 0, n, void 0)
                    }, t.prototype.lastly = t.prototype["finally"] = function m(e) {
                        return this._passThroughHandler(e, !0)
                    }, t.prototype.tap = function _(e) {
                        return this._passThroughHandler(e, !1)
                    }
                }
            }, {
                "./util.js": 35
            }],
            15: [function(e, t, n) {
                t.exports = function(t, n, i, r) {
                    function o(e, n) {
                        for (var i = d, s = t, a = n.length, u = 0; a > u; ++u) {
                            var l = h(n[u], void 0, e);
                            if (l === i) return s.reject(i.e);
                            var c = r(l, o);
                            if (c instanceof s) return c
                        }
                        return null
                    }

                    function s(e, n, r) {
                        var o = this._promise = new t(i);
                        o._setTrace(void 0), this._generatorFunction = e, this._receiver = n, this._generator = void 0, this._yieldHandlers = "function" == typeof r ? [r].concat(f) : f
                    }
                    var a = e("./errors.js"),
                        u = a.TypeError,
                        l = e("./util.js").deprecated,
                        c = e("./util.js"),
                        d = c.errorObj,
                        h = c.tryCatch1,
                        f = [];
                    s.prototype.promise = function p() {
                        return this._promise
                    }, s.prototype._run = function g() {
                        this._generator = this._generatorFunction.call(this._receiver), this._receiver = this._generatorFunction = void 0, this._next(void 0)
                    }, s.prototype._continue = function m(e) {
                        if (e === d) {
                            this._generator = void 0;
                            var n = a.canAttach(e.e) ? e.e : new Error(e.e + "");
                            return this._promise._attachExtraTrace(n), void this._promise._reject(e.e, n)
                        }
                        var i = e.value;
                        if (e.done === !0) this._generator = void 0, this._promise._tryFollow(i) || this._promise._fulfill(i);
                        else {
                            var s = r(i, void 0);
                            if (!(s instanceof t) && (s = o(s, this._yieldHandlers), null === s)) return void this._throw(new u("A value was yielded that could not be treated as a promise"));
                            s._then(this._next, this._throw, void 0, this, null)
                        }
                    }, s.prototype._throw = function _(e) {
                        a.canAttach(e) && this._promise._attachExtraTrace(e), this._continue(h(this._generator["throw"], this._generator, e))
                    }, s.prototype._next = function v(e) {
                        this._continue(h(this._generator.next, this._generator, e))
                    }, t.coroutine = function y(e, t) {
                        if ("function" != typeof e) throw new u("generatorFunction must be a function");
                        var n = Object(t).yieldHandler,
                            i = s;
                        return function() {
                            var t = e.apply(this, arguments),
                                r = new i(void 0, void 0, n);
                            return r._generator = t, r._next(void 0), r.promise()
                        }
                    }, t.coroutine.addYieldHandler = function(e) {
                        if ("function" != typeof e) throw new u("fn must be a function");
                        f.push(e)
                    }, t.spawn = function b(e) {
                        if (l("Promise.spawn is deprecated. Use Promise.coroutine instead."), "function" != typeof e) return n("generatorFunction must be a function");
                        var i = new s(e, this),
                            r = i.promise();
                        return i._run(t.spawn), r
                    }
                }
            }, {
                "./errors.js": 10,
                "./util.js": 35
            }],
            16: [function(e, t, n) {
                t.exports = function(t, n, i, r) {
                    var o = e("./util.js"),
                        s = o.canEvaluate,
                        a = o.tryCatch1,
                        u = o.errorObj;
                    if (s) {
                        for (var l = function(e) {
                                return new Function("value", "holder", "                             \n            'use strict';                                                    \n            holder.pIndex = value;                                           \n            holder.checkFulfillment(this);                                   \n            ".replace(/Index/g, e))
                            }, c = function(e) {
                                for (var t = [], n = 1; e >= n; ++n) t.push("holder.p" + n);
                                return new Function("holder", "                                      \n            'use strict';                                                    \n            var callback = holder.fn;                                        \n            return callback(values);                                         \n            ".replace(/values/g, t.join(", ")))
                            }, d = [], h = [void 0], f = 1; 5 >= f; ++f) d.push(l(f)), h.push(c(f));
                        var p = function(e, t) {
                            this.p1 = this.p2 = this.p3 = this.p4 = this.p5 = null, this.fn = t, this.total = e, this.now = 0
                        };
                        p.prototype.callers = h, p.prototype.checkFulfillment = function(e) {
                            var t = this.now;
                            t++;
                            var n = this.total;
                            if (t >= n) {
                                var i = this.callers[n],
                                    r = a(i, void 0, this);
                                r === u ? e._rejectUnchecked(r.e) : e._tryFollow(r) || e._fulfillUnchecked(r)
                            }
                            else this.now = t
                        }
                    }
                    t.join = function g() {
                        var e = arguments.length - 1,
                            o;
                        if (e > 0 && "function" == typeof arguments[e] && (o = arguments[e], 6 > e && s)) {
                            var a = new t(r);
                            a._setTrace(void 0);
                            for (var u = new p(e, o), l = a._reject, c = d, h = 0; e > h; ++h) {
                                var f = i(arguments[h], void 0);
                                f instanceof t ? f.isPending() ? f._then(c[h], l, void 0, a, u) : f.isFulfilled() ? c[h].call(a, f._settledValue, u) : (a._reject(f._settledValue), f._unsetRejectionIsUnhandled()) : c[h].call(a, f, u)
                            }
                            return a
                        }
                        for (var g = arguments.length, m = new Array(g), _ = 0; g > _; ++_) m[_] = arguments[_];
                        var a = new n(m).promise();
                        return void 0 !== o ? a.spread(o) : a
                    }
                }
            }, {
                "./util.js": 35
            }],
            17: [function(e, t, n) {
                t.exports = function(t, n, i, r, o) {
                    function s(e, t, n, i) {
                        this.constructor$(e), this._callback = t, this._preservedValues = i === o ? new Array(this.length()) : null, this._limit = n, this._inFlight = 0, this._queue = n >= 1 ? [] : h, this._init$(void 0, -2)
                    }

                    function a(e, t, n, i) {
                        var r = "object" == typeof n && null !== n ? n.concurrency : 0;
                        return r = "number" == typeof r && isFinite(r) && r >= 1 ? r : 0, new s(e, t, r, i)
                    }
                    var u = e("./util.js"),
                        l = u.tryCatch3,
                        c = u.errorObj,
                        d = {},
                        h = [];
                    u.inherits(s, n), s.prototype._init = function f() {}, s.prototype._promiseFulfilled = function p(e, n) {
                        var i = this._values;
                        if (null !== i) {
                            var o = this.length(),
                                s = this._preservedValues,
                                a = this._limit;
                            if (i[n] === d) {
                                if (i[n] = e, a >= 1 && (this._inFlight--, this._drainQueue(), this._isResolved())) return
                            }
                            else {
                                if (a >= 1 && this._inFlight >= a) return i[n] = e, void this._queue.push(n);
                                null !== s && (s[n] = e);
                                var u = this._callback,
                                    h = this._promise._boundTo,
                                    f = l(u, h, e, n, o);
                                if (f === c) return this._reject(f.e);
                                var p = r(f, void 0);
                                if (p instanceof t) {
                                    if (p.isPending()) return a >= 1 && this._inFlight++, i[n] = d, p._proxyPromiseArray(this, n);
                                    if (!p.isFulfilled()) return p._unsetRejectionIsUnhandled(), this._reject(p.reason());
                                    f = p.value()
                                }
                                i[n] = f
                            }
                            var g = ++this._totalResolved;
                            g >= o && (null !== s ? this._filter(i, s) : this._resolve(i))
                        }
                    }, s.prototype._drainQueue = function g() {
                        for (var e = this._queue, t = this._limit, n = this._values; e.length > 0 && this._inFlight < t;) {
                            var i = e.pop();
                            this._promiseFulfilled(n[i], i)
                        }
                    }, s.prototype._filter = function m(e, t) {
                        for (var n = t.length, i = new Array(n), r = 0, o = 0; n > o; ++o) e[o] && (i[r++] = t[o]);
                        i.length = r, this._resolve(i)
                    }, s.prototype.preservedValues = function _() {
                        return this._preservedValues
                    }, t.prototype.map = function v(e, t) {
                        return "function" != typeof e ? i("fn must be a function") : a(this, e, t, null).promise()
                    }, t.map = function y(e, t, n, r) {
                        return "function" != typeof t ? i("fn must be a function") : a(e, t, n, r).promise()
                    }
                }
            }, {
                "./util.js": 35
            }],
            18: [function(e, t, n) {
                t.exports = function(t) {
                    function n(e) {
                        throw e
                    }

                    function i(e, t) {
                        if (!s.isArray(e)) return r(e, t);
                        var i = s.tryCatchApply(this, [null].concat(e), t);
                        i === c && a.invokeLater(n, void 0, i.e)
                    }

                    function r(e, t) {
                        var i = this,
                            r = void 0 === e ? l(i, t, null) : u(i, t, null, e);
                        r === c && a.invokeLater(n, void 0, r.e)
                    }

                    function o(e, t) {
                        var i = this,
                            r = l(i, t, e);
                        r === c && a.invokeLater(n, void 0, r.e)
                    }
                    var s = e("./util.js"),
                        a = e("./async.js"),
                        u = s.tryCatch2,
                        l = s.tryCatch1,
                        c = s.errorObj;
                    t.prototype.nodeify = function d(e, t) {
                        if ("function" == typeof e) {
                            var n = r;
                            void 0 !== t && Object(t).spread && (n = i), this._then(n, o, void 0, e, this._boundTo)
                        }
                        return this
                    }
                }
            }, {
                "./async.js": 2,
                "./util.js": 35
            }],
            19: [function(e, t, n) {
                t.exports = function(t, n) {
                    var i = e("./util.js"),
                        r = e("./async.js"),
                        o = e("./errors.js"),
                        s = i.tryCatch1,
                        a = i.errorObj;
                    t.prototype.progressed = function u(e) {
                        return this._then(void 0, void 0, e, void 0, void 0)
                    }, t.prototype._progress = function l(e) {
                        this._isFollowingOrFulfilledOrRejected() || this._progressUnchecked(e)
                    }, t.prototype._progressHandlerAt = function c(e) {
                        return 0 === e ? this._progressHandler0 : this[(e << 2) + e - 5 + 2]
                    }, t.prototype._doProgressWith = function d(e) {
                        var n = e.value,
                            i = e.handler,
                            r = e.promise,
                            u = e.receiver,
                            l = s(i, u, n);
                        if (l === a) {
                            if (null != l.e && "StopProgressPropagation" !== l.e.name) {
                                var c = o.canAttach(l.e) ? l.e : new Error(l.e + "");
                                r._attachExtraTrace(c), r._progress(l.e)
                            }
                        }
                        else l instanceof t ? l._then(r._progress, null, null, r, void 0) : r._progress(l)
                    }, t.prototype._progressUnchecked = function h(e) {
                        if (this.isPending())
                            for (var i = this._length(), o = this._progress, s = 0; i > s; s++) {
                                var a = this._progressHandlerAt(s),
                                    u = this._promiseAt(s);
                                if (u instanceof t) "function" == typeof a ? r.invoke(this._doProgressWith, this, {
                                    handler: a,
                                    promise: u,
                                    receiver: this._receiverAt(s),
                                    value: e
                                }) : r.invoke(o, u, e);
                                else {
                                    var l = this._receiverAt(s);
                                    "function" == typeof a ? a.call(l, e, u) : l instanceof t && l._isProxied() ? l._progressUnchecked(e) : l instanceof n && l._promiseProgressed(e, u)
                                }
                            }
                    }
                }
            }, {
                "./async.js": 2,
                "./errors.js": 10,
                "./util.js": 35
            }],
            20: [function(e, t, n) {
                function i(e) {
                    try {
                        Promise === e && (Promise = r)
                    }
                    catch (t) {}
                    return e
                }
                var r;
                "undefined" != typeof Promise && (r = Promise), t.exports = function() {
                    function t(e) {
                        if ("function" != typeof e) throw new b("the promise constructor requires a resolver function");
                        if (this.constructor !== t) throw new b("the promise constructor cannot be invoked directly");
                        this._bitField = 0, this._fulfillmentHandler0 = void 0, this._rejectionHandler0 = void 0, this._promise0 = void 0, this._receiver0 = void 0, this._settledValue = void 0, this._boundTo = void 0, e !== s && this._resolveFromResolver(e)
                    }
                    var n = e("./util.js"),
                        r = e("./async.js"),
                        o = e("./errors.js"),
                        s = function() {},
                        a = {},
                        u = {
                            e: null
                        },
                        l = e("./thenables.js")(t, s),
                        c = e("./promise_array.js")(t, s, l),
                        d = e("./captured_trace.js")(),
                        h = e("./catch_filter.js")(u),
                        f = e("./promise_resolver.js"),
                        p = n.isArray,
                        g = n.errorObj,
                        m = n.tryCatch1,
                        _ = n.tryCatch2,
                        v = n.tryCatchApply,
                        y = o.RangeError,
                        b = o.TypeError,
                        T = o.CancellationError,
                        w = o.TimeoutError,
                        x = o.OperationalError,
                        S = o.originatesFromRejection,
                        C = o.markAsOriginatingFromRejection,
                        E = o.canAttach,
                        P = n.thrower,
                        A = e("./errors_api_rejection")(t),
                        j = function I() {
                            return new b("circular promise resolution chain")
                        };
                    t.prototype.bind = function R(e) {
                        var n = new t(s);
                        return n._follow(this), n._propagateFrom(this, 3), n._setBoundTo(e), n
                    }, t.prototype.toString = function L() {
                        return "[object Promise]"
                    }, t.prototype.caught = t.prototype["catch"] = function B(e) {
                        var t = arguments.length;
                        if (t > 1) {
                            var n = new Array(t - 1),
                                i = 0,
                                o;
                            for (o = 0; t - 1 > o; ++o) {
                                var s = arguments[o];
                                if ("function" != typeof s) {
                                    var a = new b("A catch filter must be an error constructor or a filter function");
                                    return this._attachExtraTrace(a), void r.invoke(this._reject, this, a)
                                }
                                n[i++] = s
                            }
                            n.length = i, e = arguments[o], this._resetTrace();
                            var u = new h(n, e, this);
                            return this._then(void 0, u.doFilter, void 0, u, void 0)
                        }
                        return this._then(void 0, e, void 0, void 0, void 0)
                    }, t.prototype.then = function q(e, t, n) {
                        return this._then(e, t, n, void 0, void 0)
                    }, t.prototype.done = function F(e, t, n) {
                        var i = this._then(e, t, n, void 0, void 0);
                        i._setIsFinal()
                    }, t.prototype.spread = function M(e, t) {
                        return this._then(e, t, void 0, a, void 0)
                    }, t.prototype.isCancellable = function N() {
                        return !this.isResolved() && this._cancellable()
                    }, t.prototype.toJSON = function H() {
                        var e = {
                            isFulfilled: !1,
                            isRejected: !1,
                            fulfillmentValue: void 0,
                            rejectionReason: void 0
                        };
                        return this.isFulfilled() ? (e.fulfillmentValue = this._settledValue, e.isFulfilled = !0) : this.isRejected() && (e.rejectionReason = this._settledValue, e.isRejected = !0), e
                    }, t.prototype.all = function Q() {
                        return new c(this).promise()
                    }, t.is = function V(e) {
                        return e instanceof t
                    }, t.all = function U(e) {
                        return new c(e).promise()
                    }, t.prototype.error = function z(e) {
                        return this.caught(S, e)
                    }, t.prototype._resolveFromSyncValue = function W(e) {
                        if (e === g) this._cleanValues(), this._setRejected(), this._settledValue = e.e, this._ensurePossibleRejectionHandled();
                        else {
                            var n = l(e, void 0);
                            n instanceof t ? this._follow(n) : (this._cleanValues(), this._setFulfilled(), this._settledValue = e)
                        }
                    }, t.method = function X(e) {
                        if ("function" != typeof e) throw new b("fn must be a function");
                        return function n() {
                            var n;
                            switch (arguments.length) {
                                case 0:
                                    n = m(e, this, void 0);
                                    break;
                                case 1:
                                    n = m(e, this, arguments[0]);
                                    break;
                                case 2:
                                    n = _(e, this, arguments[0], arguments[1]);
                                    break;
                                default:
                                    for (var i = arguments.length, r = new Array(i), o = 0; i > o; ++o) r[o] = arguments[o];
                                    n = v(e, r, this)
                            }
                            var a = new t(s);
                            return a._setTrace(void 0), a._resolveFromSyncValue(n), a
                        }
                    }, t.attempt = t["try"] = function G(e, n, i) {
                        if ("function" != typeof e) return A("fn must be a function");
                        var r = p(n) ? v(e, n, i) : m(e, i, n),
                            o = new t(s);
                        return o._setTrace(void 0), o._resolveFromSyncValue(r), o
                    }, t.defer = t.pending = function J() {
                        var e = new t(s);
                        return e._setTrace(void 0), new f(e)
                    }, t.bind = function K(e) {
                        var n = new t(s);
                        return n._setTrace(void 0), n._setFulfilled(), n._setBoundTo(e), n
                    }, t.cast = function Y(e) {
                        var n = l(e, void 0);
                        if (!(n instanceof t)) {
                            var i = n;
                            n = new t(s), n._setTrace(void 0), n._setFulfilled(), n._cleanValues(), n._settledValue = i
                        }
                        return n
                    }, t.resolve = t.fulfilled = t.cast, t.reject = t.rejected = function Z(e) {
                        var n = new t(s);
                        if (n._setTrace(void 0), C(e), n._cleanValues(), n._setRejected(), n._settledValue = e, !E(e)) {
                            var i = new Error(e + "");
                            n._setCarriedStackTrace(i)
                        }
                        return n._ensurePossibleRejectionHandled(), n
                    }, t.onPossiblyUnhandledRejection = function ee(e) {
                        d.possiblyUnhandledRejection = "function" == typeof e ? e : void 0
                    };
                    var k;
                    t.onUnhandledRejectionHandled = function te(e) {
                        k = "function" == typeof e ? e : void 0
                    };
                    var D = !1 || !("undefined" == typeof process || "string" != typeof process.execPath || "object" != typeof process.env || !process.env.BLUEBIRD_DEBUG && "development" !== process.env.NODE_ENV);
                    t.longStackTraces = function ne() {
                        if (r.haveItemsQueued() && D === !1) throw new Error("cannot enable long stack traces after promises have been created");
                        D = d.isSupported()
                    }, t.hasLongStackTraces = function ie() {
                        return D && d.isSupported()
                    }, t.prototype._then = function re(e, n, i, o, a) {
                        var u = void 0 !== a,
                            l = u ? a : new t(s);
                        if (!u) {
                            if (D) {
                                var c = this._peekContext() === this._traceParent;
                                l._traceParent = c ? this._traceParent : this
                            }
                            l._propagateFrom(this, 7)
                        }
                        var d = this._addCallbacks(e, n, i, l, o);
                        return this.isResolved() && r.invoke(this._queueSettleAt, this, d), l
                    }, t.prototype._length = function oe() {
                        return 262143 & this._bitField
                    }, t.prototype._isFollowingOrFulfilledOrRejected = function se() {
                        return (939524096 & this._bitField) > 0
                    }, t.prototype._isFollowing = function ae() {
                        return 536870912 === (536870912 & this._bitField)
                    }, t.prototype._setLength = function ue(e) {
                        this._bitField = -262144 & this._bitField | 262143 & e
                    }, t.prototype._setFulfilled = function le() {
                        this._bitField = 268435456 | this._bitField
                    }, t.prototype._setRejected = function ce() {
                        this._bitField = 134217728 | this._bitField
                    }, t.prototype._setFollowing = function de() {
                        this._bitField = 536870912 | this._bitField
                    }, t.prototype._setIsFinal = function he() {
                        this._bitField = 33554432 | this._bitField
                    }, t.prototype._isFinal = function fe() {
                        return (33554432 & this._bitField) > 0
                    }, t.prototype._cancellable = function pe() {
                        return (67108864 & this._bitField) > 0
                    }, t.prototype._setCancellable = function ge() {
                        this._bitField = 67108864 | this._bitField
                    }, t.prototype._unsetCancellable = function me() {
                        this._bitField = -67108865 & this._bitField
                    }, t.prototype._setRejectionIsUnhandled = function _e() {
                        this._bitField = 2097152 | this._bitField
                    }, t.prototype._unsetRejectionIsUnhandled = function ve() {
                        this._bitField = -2097153 & this._bitField, this._isUnhandledRejectionNotified() && (this._unsetUnhandledRejectionIsNotified(), this._notifyUnhandledRejectionIsHandled())
                    }, t.prototype._isRejectionUnhandled = function ye() {
                        return (2097152 & this._bitField) > 0
                    }, t.prototype._setUnhandledRejectionIsNotified = function be() {
                        this._bitField = 524288 | this._bitField
                    }, t.prototype._unsetUnhandledRejectionIsNotified = function Te() {
                        this._bitField = -524289 & this._bitField
                    }, t.prototype._isUnhandledRejectionNotified = function we() {
                        return (524288 & this._bitField) > 0
                    }, t.prototype._setCarriedStackTrace = function xe(e) {
                        this._bitField = 1048576 | this._bitField, this._fulfillmentHandler0 = e
                    }, t.prototype._unsetCarriedStackTrace = function Se() {
                        this._bitField = -1048577 & this._bitField, this._fulfillmentHandler0 = void 0
                    }, t.prototype._isCarryingStackTrace = function Ce() {
                        return (1048576 & this._bitField) > 0
                    }, t.prototype._getCarriedStackTrace = function Ee() {
                        return this._isCarryingStackTrace() ? this._fulfillmentHandler0 : void 0
                    }, t.prototype._receiverAt = function Pe(e) {
                        var t = 0 === e ? this._receiver0 : this[(e << 2) + e - 5 + 4];
                        return this._isBound() && void 0 === t ? this._boundTo : t
                    }, t.prototype._promiseAt = function Ae(e) {
                        return 0 === e ? this._promise0 : this[(e << 2) + e - 5 + 3]
                    }, t.prototype._fulfillmentHandlerAt = function je(e) {
                        return 0 === e ? this._fulfillmentHandler0 : this[(e << 2) + e - 5 + 0]
                    }, t.prototype._rejectionHandlerAt = function ke(e) {
                        return 0 === e ? this._rejectionHandler0 : this[(e << 2) + e - 5 + 1]
                    }, t.prototype._addCallbacks = function De(e, t, n, i, r) {
                        var o = this._length();
                        if (o >= 262138 && (o = 0, this._setLength(0)), 0 === o) this._promise0 = i, void 0 !== r && (this._receiver0 = r), "function" != typeof e || this._isCarryingStackTrace() || (this._fulfillmentHandler0 = e), "function" == typeof t && (this._rejectionHandler0 = t), "function" == typeof n && (this._progressHandler0 = n);
                        else {
                            var s = (o << 2) + o - 5;
                            this[s + 3] = i, this[s + 4] = r, this[s + 0] = "function" == typeof e ? e : void 0, this[s + 1] = "function" == typeof t ? t : void 0, this[s + 2] = "function" == typeof n ? n : void 0
                        }
                        return this._setLength(o + 1), o
                    }, t.prototype._setProxyHandlers = function Oe(e, t) {
                        var n = this._length();
                        if (n >= 262138 && (n = 0, this._setLength(0)), 0 === n) this._promise0 = t, this._receiver0 = e;
                        else {
                            var i = (n << 2) + n - 5;
                            this[i + 3] = t, this[i + 4] = e, this[i + 0] = this[i + 1] = this[i + 2] = void 0
                        }
                        this._setLength(n + 1)
                    }, t.prototype._proxyPromiseArray = function Ie(e, t) {
                        this._setProxyHandlers(e, t)
                    }, t.prototype._proxyPromise = function Re(e) {
                        e._setProxied(), this._setProxyHandlers(e, -1)
                    }, t.prototype._setBoundTo = function Le(e) {
                        void 0 !== e ? (this._bitField = 8388608 | this._bitField, this._boundTo = e) : this._bitField = -8388609 & this._bitField
                    }, t.prototype._isBound = function Be() {
                        return 8388608 === (8388608 & this._bitField)
                    }, t.prototype._resolveFromResolver = function qe(e) {
                        function t(e) {
                            i._tryFollow(e) || i._fulfill(e)
                        }

                        function n(e) {
                            var t = E(e) ? e : new Error(e + "");
                            i._attachExtraTrace(t), C(e), i._reject(e, t === e ? void 0 : t)
                        }
                        var i = this;
                        this._setTrace(void 0), this._pushContext();
                        var r = _(e, void 0, t, n);
                        if (this._popContext(), void 0 !== r && r === g) {
                            var o = r.e,
                                s = E(o) ? o : new Error(o + "");
                            i._reject(o, s)
                        }
                    }, t.prototype._spreadSlowCase = function Fe(e, t, n, i) {
                        var r = new c(n).promise(),
                            o = r._then(function() {
                                return e.apply(i, arguments)
                            }, void 0, void 0, a, void 0);
                        t._follow(o)
                    }, t.prototype._callSpread = function Me(e, n, i) {
                        var r = this._boundTo;
                        if (p(i))
                            for (var o = 0, s = i.length; s > o; ++o)
                                if (l(i[o], void 0) instanceof t) return void this._spreadSlowCase(e, n, i, r);
                        return n._pushContext(), v(e, i, r)
                    }, t.prototype._callHandler = function Ne(e, t, n, i) {
                        var r;
                        return t !== a || this.isRejected() ? (n._pushContext(), r = m(e, t, i)) : r = this._callSpread(e, n, i), n._popContext(), r
                    }, t.prototype._settlePromiseFromHandler = function $e(e, n, i, r) {
                        if (!(r instanceof t)) return void e.call(n, i, r);
                        var o = this._callHandler(e, n, r, i);
                        if (!r._isFollowing())
                            if (o === g || o === r || o === u) {
                                var s = o === r ? j() : o.e,
                                    a = E(s) ? s : new Error(s + "");
                                o !== u && r._attachExtraTrace(a), r._rejectUnchecked(s, a)
                            }
                            else {
                                var c = l(o, r);
                                if (c instanceof t) {
                                    if (c.isRejected() && !c._isCarryingStackTrace() && !E(c._settledValue)) {
                                        var a = new Error(c._settledValue + "");
                                        r._attachExtraTrace(a), c._setCarriedStackTrace(a)
                                    }
                                    r._follow(c), r._propagateFrom(c, 1)
                                }
                                else r._fulfillUnchecked(o)
                            }
                    }, t.prototype._follow = function He(e) {
                        this._setFollowing(), e.isPending() ? (this._propagateFrom(e, 1), e._proxyPromise(this)) : e.isFulfilled() ? this._fulfillUnchecked(e._settledValue) : this._rejectUnchecked(e._settledValue, e._getCarriedStackTrace()), e._isRejectionUnhandled() && e._unsetRejectionIsUnhandled(), D && null == e._traceParent && (e._traceParent = this)
                    }, t.prototype._tryFollow = function Qe(e) {
                        if (this._isFollowingOrFulfilledOrRejected() || e === this) return !1;
                        var n = l(e, void 0);
                        return n instanceof t ? (this._follow(n), !0) : !1
                    }, t.prototype._resetTrace = function Ve() {
                        D && (this._trace = new d(void 0 === this._peekContext()))
                    }, t.prototype._setTrace = function Ue(e) {
                        if (D) {
                            var t = this._peekContext();
                            this._traceParent = t;
                            var n = void 0 === t;
                            void 0 !== e && e._traceParent === t ? this._trace = e._trace : this._trace = new d(n)
                        }
                        return this
                    }, t.prototype._attachExtraTrace = function ze(e) {
                        if (D) {
                            var t = this,
                                n = e.stack;
                            n = "string" == typeof n ? n.split("\n") : [], d.protectErrorMessageNewlines(n);
                            for (var i = 1, r = 1; null != t && null != t._trace;) n = d.combine(n, t._trace.stack.split("\n")), t = t._traceParent, r++;
                            var o = Error.stackTraceLimit || 10,
                                s = (o + i) * r,
                                a = n.length;
                            a > s && (n.length = s), a > 0 && (n[0] = n[0].split("\x00").join("\n")), n.length <= i ? e.stack = "(No stack trace)" : e.stack = n.join("\n")
                        }
                    }, t.prototype._cleanValues = function We() {
                        this._cancellable() && (this._cancellationParent = void 0)
                    }, t.prototype._propagateFrom = function Xe(e, t) {
                        (1 & t) > 0 && e._cancellable() && (this._setCancellable(), this._cancellationParent = e), (4 & t) > 0 && this._setBoundTo(e._boundTo), (2 & t) > 0 && this._setTrace(e)
                    }, t.prototype._fulfill = function Ge(e) {
                        this._isFollowingOrFulfilledOrRejected() || this._fulfillUnchecked(e)
                    }, t.prototype._reject = function Je(e, t) {
                        this._isFollowingOrFulfilledOrRejected() || this._rejectUnchecked(e, t)
                    }, t.prototype._settlePromiseAt = function Ke(e) {
                        var n = this.isFulfilled() ? this._fulfillmentHandlerAt(e) : this._rejectionHandlerAt(e),
                            i = this._settledValue,
                            r = this._receiverAt(e),
                            o = this._promiseAt(e);
                        if ("function" == typeof n) this._settlePromiseFromHandler(n, r, i, o);
                        else {
                            var s = !1,
                                a = this.isFulfilled();
                            void 0 !== r && (r instanceof t && r._isProxied() ? (r._unsetProxied(), a ? r._fulfillUnchecked(i) : r._rejectUnchecked(i, this._getCarriedStackTrace()), s = !0) : r instanceof c && (a ? r._promiseFulfilled(i, o) : r._promiseRejected(i, o), s = !0)), s || (a ? o._fulfill(i) : o._reject(i, this._getCarriedStackTrace()))
                        }
                        e >= 256 && this._queueGC()
                    }, t.prototype._isProxied = function Ye() {
                        return 4194304 === (4194304 & this._bitField)
                    }, t.prototype._setProxied = function Ze() {
                        this._bitField = 4194304 | this._bitField
                    }, t.prototype._unsetProxied = function et() {
                        this._bitField = -4194305 & this._bitField
                    }, t.prototype._isGcQueued = function tt() {
                        return -1073741824 === (-1073741824 & this._bitField)
                    }, t.prototype._setGcQueued = function nt() {
                        this._bitField = -1073741824 | this._bitField
                    }, t.prototype._unsetGcQueued = function it() {
                        this._bitField = 1073741823 & this._bitField
                    }, t.prototype._queueGC = function rt() {
                        this._isGcQueued() || (this._setGcQueued(), r.invokeLater(this._gc, this, void 0))
                    }, t.prototype._gc = function ot() {
                        for (var e = 5 * this._length(), t = 0; e > t; t++) delete this[t];
                        this._setLength(0), this._unsetGcQueued()
                    }, t.prototype._queueSettleAt = function st(e) {
                        this._isRejectionUnhandled() && this._unsetRejectionIsUnhandled(), r.invoke(this._settlePromiseAt, this, e)
                    }, t.prototype._fulfillUnchecked = function at(e) {
                        if (this.isPending()) {
                            if (e === this) {
                                var t = j();
                                return this._attachExtraTrace(t), this._rejectUnchecked(t, void 0)
                            }
                            this._cleanValues(), this._setFulfilled(), this._settledValue = e;
                            var n = this._length();
                            n > 0 && r.invoke(this._settlePromises, this, n)
                        }
                    }, t.prototype._rejectUncheckedCheckError = function ut(e) {
                        var t = E(e) ? e : new Error(e + "");
                        this._rejectUnchecked(e, t === e ? void 0 : t)
                    }, t.prototype._rejectUnchecked = function lt(e, t) {
                        if (this.isPending()) {
                            if (e === this) {
                                var n = j();
                                return this._attachExtraTrace(n), this._rejectUnchecked(n)
                            }
                            if (this._cleanValues(), this._setRejected(), this._settledValue = e, this._isFinal()) return void r.invokeLater(P, void 0, void 0 === t ? e : t);
                            var i = this._length();
                            void 0 !== t && this._setCarriedStackTrace(t), i > 0 ? r.invoke(this._rejectPromises, this, null) : this._ensurePossibleRejectionHandled()
                        }
                    }, t.prototype._rejectPromises = function ct() {
                        this._settlePromises(), this._unsetCarriedStackTrace()
                    }, t.prototype._settlePromises = function dt() {
                        for (var e = this._length(), t = 0; e > t; t++) this._settlePromiseAt(t)
                    }, t.prototype._ensurePossibleRejectionHandled = function ht() {
                        this._setRejectionIsUnhandled(), void 0 !== d.possiblyUnhandledRejection && r.invokeLater(this._notifyUnhandledRejection, this, void 0)
                    }, t.prototype._notifyUnhandledRejectionIsHandled = function ft() {
                        "function" == typeof k && r.invokeLater(k, void 0, this)
                    }, t.prototype._notifyUnhandledRejection = function pt() {
                        if (this._isRejectionUnhandled()) {
                            var e = this._settledValue,
                                t = this._getCarriedStackTrace();
                            this._setUnhandledRejectionIsNotified(), void 0 !== t && (this._unsetCarriedStackTrace(), e = t), "function" == typeof d.possiblyUnhandledRejection && d.possiblyUnhandledRejection(e, this)
                        }
                    };
                    var O = [];
                    return t.prototype._peekContext = function gt() {
                        var e = O.length - 1;
                        return e >= 0 ? O[e] : void 0
                    }, t.prototype._pushContext = function mt() {
                        D && O.push(this)
                    }, t.prototype._popContext = function _t() {
                        D && O.pop()
                    }, t.noConflict = function vt() {
                        return i(t)
                    }, t.setScheduler = function(e) {
                        if ("function" != typeof e) throw new b("fn must be a function");
                        r._schedule = e
                    }, d.isSupported() || (t.longStackTraces = function() {}, D = !1), t._makeSelfResolutionError = j, e("./finally.js")(t, u, l), e("./direct_resolve.js")(t), e("./synchronous_inspection.js")(t), e("./join.js")(t, c, l, s), t.RangeError = y, t.CancellationError = T, t.TimeoutError = w, t.TypeError = b, t.OperationalError = x, t.RejectionError = x, t.AggregateError = o.AggregateError, n.toFastProperties(t), n.toFastProperties(t.prototype), t.Promise = t, e("./timers.js")(t, s, l), e("./race.js")(t, s, l), e("./call_get.js")(t), e("./generators.js")(t, A, s, l), e("./map.js")(t, c, A, l, s), e("./nodeify.js")(t), e("./promisify.js")(t, s), e("./props.js")(t, c, l), e("./reduce.js")(t, c, A, l, s), e("./settle.js")(t, c), e("./some.js")(t, c, A), e("./progress.js")(t, c), e("./cancel.js")(t, s), e("./filter.js")(t, s), e("./any.js")(t, c), e("./each.js")(t, s), e("./using.js")(t, A, l), t.prototype = t.prototype, t
                }
            }, {
                "./any.js": 1,
                "./async.js": 2,
                "./call_get.js": 4,
                "./cancel.js": 5,
                "./captured_trace.js": 6,
                "./catch_filter.js": 7,
                "./direct_resolve.js": 8,
                "./each.js": 9,
                "./errors.js": 10,
                "./errors_api_rejection": 11,
                "./filter.js": 13,
                "./finally.js": 14,
                "./generators.js": 15,
                "./join.js": 16,
                "./map.js": 17,
                "./nodeify.js": 18,
                "./progress.js": 19,
                "./promise_array.js": 21,
                "./promise_resolver.js": 22,
                "./promisify.js": 23,
                "./props.js": 24,
                "./race.js": 26,
                "./reduce.js": 27,
                "./settle.js": 29,
                "./some.js": 30,
                "./synchronous_inspection.js": 31,
                "./thenables.js": 32,
                "./timers.js": 33,
                "./using.js": 34,
                "./util.js": 35
            }],
            21: [function(e, t, n) {
                t.exports = function(t, n, i) {
                    function r(e) {
                        switch (e) {
                            case -1:
                                return void 0;
                            case -2:
                                return [];
                            case -3:
                                return {}
                        }
                    }

                    function o(e) {
                        var i = this._promise = new t(n),
                            r = void 0;
                        e instanceof t && (r = e, i._propagateFrom(r, 5)), i._setTrace(r), this._values = e, this._length = 0, this._totalResolved = 0, this._init(void 0, -2)
                    }
                    var s = e("./errors.js").canAttach,
                        a = e("./util.js"),
                        u = a.isArray;
                    return o.prototype.length = function l() {
                        return this._length
                    }, o.prototype.promise = function c() {
                        return this._promise
                    }, o.prototype._init = function d(e, n) {
                        var o = i(this._values, void 0);
                        if (o instanceof t) {
                            if (this._values = o, o._setBoundTo(this._promise._boundTo), !o.isFulfilled()) return o.isPending() ? void o._then(d, this._reject, void 0, this, n) : (o._unsetRejectionIsUnhandled(), void this._reject(o._settledValue));
                            if (o = o._settledValue, !u(o)) {
                                var s = new t.TypeError("expecting an array, a promise or a thenable");
                                return void this.__hardReject__(s)
                            }
                        }
                        else if (!u(o)) {
                            var s = new t.TypeError("expecting an array, a promise or a thenable");
                            return void this.__hardReject__(s)
                        }
                        if (0 === o.length) return void(-5 === n ? this._resolveEmptyArray() : this._resolve(r(n)));
                        for (var a = this.getActualLength(o.length), l = a, c = this.shouldCopyValues() ? new Array(a) : this._values, h = !1, f = 0; a > f; ++f) {
                            var p = i(o[f], void 0);
                            p instanceof t ? p.isPending() ? p._proxyPromiseArray(this, f) : (p._unsetRejectionIsUnhandled(), h = !0) : h = !0, c[f] = p
                        }
                        this._values = c, this._length = l, h && this._scanDirectValues(a)
                    }, o.prototype._settlePromiseAt = function h(e) {
                        var n = this._values[e];
                        n instanceof t ? n.isFulfilled() ? this._promiseFulfilled(n._settledValue, e) : n.isRejected() && this._promiseRejected(n._settledValue, e) : this._promiseFulfilled(n, e)
                    }, o.prototype._scanDirectValues = function f(e) {
                        for (var t = 0; e > t && !this._isResolved(); ++t) this._settlePromiseAt(t)
                    }, o.prototype._isResolved = function p() {
                        return null === this._values
                    }, o.prototype._resolve = function g(e) {
                        this._values = null, this._promise._fulfill(e)
                    }, o.prototype.__hardReject__ = o.prototype._reject = function m(e) {
                        this._values = null;
                        var t = s(e) ? e : new Error(e + "");
                        this._promise._attachExtraTrace(t), this._promise._reject(e, t)
                    }, o.prototype._promiseProgressed = function _(e, t) {
                        this._isResolved() || this._promise._progress({
                            index: t,
                            value: e
                        })
                    }, o.prototype._promiseFulfilled = function v(e, t) {
                        if (!this._isResolved()) {
                            this._values[t] = e;
                            var n = ++this._totalResolved;
                            n >= this._length && this._resolve(this._values)
                        }
                    }, o.prototype._promiseRejected = function y(e, t) {
                        this._isResolved() || (this._totalResolved++, this._reject(e))
                    }, o.prototype.shouldCopyValues = function b() {
                        return !0
                    }, o.prototype.getActualLength = function T(e) {
                        return e
                    }, o
                }
            }, {
                "./errors.js": 10,
                "./util.js": 35
            }],
            22: [function(e, t, n) {
                function i(e) {
                    return e instanceof Error && f.getPrototypeOf(e) === Error.prototype
                }

                function r(e) {
                    var t;
                    return t = i(e) ? new c(e) : e, u.markAsOriginatingFromRejection(t), t
                }

                function o(e) {
                    function t(t, n) {
                        if (null !== e) {
                            if (t) {
                                var i = r(a(t));
                                e._attachExtraTrace(i), e._reject(i)
                            }
                            else if (arguments.length > 2) {
                                for (var o = arguments.length, s = new Array(o - 1), u = 1; o > u; ++u) s[u - 1] = arguments[u];
                                e._fulfill(s)
                            }
                            else e._fulfill(n);
                            e = null
                        }
                    }
                    return t
                }
                var s = e("./util.js"),
                    a = s.maybeWrapAsError,
                    u = e("./errors.js"),
                    l = u.TimeoutError,
                    c = u.OperationalError,
                    d = e("./async.js"),
                    h = s.haveGetters,
                    f = e("./es5.js"),
                    p;
                if (p = h ? function m(e) {
                        this.promise = e
                    } : function _(e) {
                        this.promise = e, this.asCallback = o(e), this.callback = this.asCallback
                    }, h) {
                    var g = {
                        get: function() {
                            return o(this.promise)
                        }
                    };
                    f.defineProperty(p.prototype, "asCallback", g), f.defineProperty(p.prototype, "callback", g)
                }
                p._nodebackForPromise = o, p.prototype.toString = function v() {
                    return "[object PromiseResolver]"
                }, p.prototype.resolve = p.prototype.fulfill = function y(e) {
                    if (!(this instanceof p)) throw new TypeError("Illegal invocation, resolver resolve/reject must be called within a resolver context. Consider using the promise constructor instead.");
                    var t = this.promise;
                    t._tryFollow(e) || d.invoke(t._fulfill, t, e)
                }, p.prototype.reject = function b(e) {
                    if (!(this instanceof p)) throw new TypeError("Illegal invocation, resolver resolve/reject must be called within a resolver context. Consider using the promise constructor instead.");
                    var t = this.promise;
                    u.markAsOriginatingFromRejection(e);
                    var n = u.canAttach(e) ? e : new Error(e + "");
                    t._attachExtraTrace(n), d.invoke(t._reject, t, e), n !== e && d.invoke(this._setCarriedStackTrace, this, n)
                }, p.prototype.progress = function T(e) {
                    if (!(this instanceof p)) throw new TypeError("Illegal invocation, resolver resolve/reject must be called within a resolver context. Consider using the promise constructor instead.");
                    d.invoke(this.promise._progress, this.promise, e)
                }, p.prototype.cancel = function w() {
                    d.invoke(this.promise.cancel, this.promise, void 0)
                }, p.prototype.timeout = function x() {
                    this.reject(new l("timeout"))
                }, p.prototype.isResolved = function S() {
                    return this.promise.isResolved()
                }, p.prototype.toJSON = function C() {
                    return this.promise.toJSON()
                }, p.prototype._setCarriedStackTrace = function E(e) {
                    this.promise.isRejected() && this.promise._setCarriedStackTrace(e)
                }, t.exports = p
            }, {
                "./async.js": 2,
                "./errors.js": 10,
                "./es5.js": 12,
                "./util.js": 35
            }],
            23: [function(e, t, n) {
                t.exports = function(t, n) {
                    function i(e) {
                        return e.replace(/([$])/, "\\$")
                    }

                    function r(e) {
                        try {
                            return e.__isPromisified__ === !0
                        }
                        catch (t) {
                            return !1
                        }
                    }

                    function o(e, t, n) {
                        var i = v.getDataPropertyOrDefault(e, t + n, E);
                        return i ? r(i) : !1
                    }

                    function s(e, t, n) {
                        for (var i = 0; i < e.length; i += 2) {
                            var r = e[i];
                            if (n.test(r))
                                for (var o = r.replace(n, ""), s = 0; s < e.length; s += 2)
                                    if (e[s] === o) throw new x("Cannot promisify an API that has normal methods with '" + t + "'-suffix")
                        }
                    }

                    function a(e, t, n, i) {
                        for (var a = v.inheritedDataKeys(e), u = [], l = 0; l < a.length; ++l) {
                            var c = a[l],
                                d = e[c];
                            "function" != typeof d || r(d) || o(e, c, t) || !i(c, d, e) || u.push(c, d)
                        }
                        return s(u, t, n), u
                    }

                    function u(e) {
                        for (var t = [e], n = Math.max(0, e - 1 - 5), i = e - 1; i >= n; --i) i !== e && t.push(i);
                        for (var i = e + 1; 5 >= i; ++i) t.push(i);
                        return t
                    }

                    function l(e) {
                        return v.filledRange(e, "arguments[", "]")
                    }

                    function c(e) {
                        return v.filledRange(e, "_arg", "")
                    }

                    function d(e) {
                        return "number" == typeof e.length ? Math.max(Math.min(e.length, 1024), 0) : 0
                    }

                    function h(e) {
                        return v.isIdentifier(e) ? "." + e : "['" + e.replace(/(['\\])/g, "\\$1") + "']"
                    }

                    function f(e, i, r, o, s) {
                        function a(t) {
                            var n = l(t).join(", "),
                                r = t > 0 ? ", " : "",
                                o;
                            return o = "string" == typeof e ? "                                                          \n                this.method(args, fn);                                       \n                break;                                                       \n            ".replace(".method", h(e)) : i === _ ? "                                                         \n                callback.call(this, args, fn);                               \n                break;                                                       \n            " : void 0 !== i ? "                                                         \n                callback.call(receiver, args, fn);                           \n                break;                                                       \n            " : "                                                         \n                callback(args, fn);                                          \n                break;                                                       \n            ", o.replace("args", n).replace(", ", r)
                        }

                        function f() {
                            for (var t = "", n = 0; n < g.length; ++n) t += "case " + g[n] + ":" + a(g[n]);
                            var r;
                            return r = "string" == typeof e ? "                                                  \n                this.property.apply(this, args);                             \n            ".replace(".property", h(e)) : i === _ ? "                                                  \n                callback.apply(this, args);                                  \n            " : "                                                  \n                callback.apply(receiver, args);                              \n            ", t += "                                                             \n        default:                                                             \n            var args = new Array(len + 1);                                   \n            var i = 0;                                                       \n            for (var i = 0; i < len; ++i) {                                  \n               args[i] = arguments[i];                                       \n            }                                                                \n            args[i] = fn;                                                    \n            [CodeForCall]                                                    \n            break;                                                           \n        ".replace("[CodeForCall]", r)
                        }
                        var p = Math.max(0, d(o) - 1),
                            g = u(p),
                            m = "string" == typeof r && v.isIdentifier(r) ? r + s : "promisified";
                        return new Function("Promise", "callback", "receiver", "withAppended", "maybeWrapAsError", "nodebackForPromise", "INTERNAL", "                                         \n        var ret = function FunctionName(Parameters) {                        \n            'use strict';                                                    \n            var len = arguments.length;                                      \n            var promise = new Promise(INTERNAL);                             \n            promise._setTrace(void 0);                                       \n            var fn = nodebackForPromise(promise);                            \n            try {                                                            \n                switch(len) {                                                \n                    [CodeForSwitchCase]                                      \n                }                                                            \n            } catch (e) {                                                    \n                var wrapped = maybeWrapAsError(e);                           \n                promise._attachExtraTrace(wrapped);                          \n                promise._reject(wrapped);                                    \n            }                                                                \n            return promise;                                                  \n        };                                                                   \n        ret.__isPromisified__ = true;                                        \n        return ret;                                                          \n        ".replace("FunctionName", m).replace("Parameters", c(p)).replace("[CodeForSwitchCase]", f()))(t, e, i, b, T, y, n);
                    }

                    function p(e, i) {
                        function r() {
                            var r = i;
                            i === _ && (r = this), "string" == typeof e && (e = r[e]);
                            var o = new t(n);
                            o._setTrace(void 0);
                            var s = y(o);
                            try {
                                e.apply(r, b(arguments, s))
                            }
                            catch (a) {
                                var u = T(a);
                                o._attachExtraTrace(u), o._reject(u)
                            }
                            return o
                        }
                        return r.__isPromisified__ = !0, r
                    }

                    function g(e, t, n, r) {
                        for (var o = new RegExp(i(t) + "$"), s = a(e, t, o, n), u = 0, l = s.length; l > u; u += 2) {
                            var c = s[u],
                                d = s[u + 1],
                                h = c + t;
                            e[h] = r === P ? P(c, _, c, d, t) : r(d)
                        }
                        return v.toFastProperties(e), e
                    }

                    function m(e, t) {
                        return P(e, t, void 0, e)
                    }
                    var _ = {},
                        v = e("./util.js"),
                        y = e("./promise_resolver.js")._nodebackForPromise,
                        b = v.withAppended,
                        T = v.maybeWrapAsError,
                        w = v.canEvaluate,
                        x = e("./errors").TypeError,
                        S = "Async",
                        C = function(e, t) {
                            return v.isIdentifier(e) && "_" !== e.charAt(0) && !v.isClass(t)
                        },
                        E = {
                            __isPromisified__: !0
                        },
                        P = w ? f : p;
                    t.promisify = function A(e, t) {
                        if ("function" != typeof e) throw new x("fn must be a function");
                        return r(e) ? e : m(e, arguments.length < 2 ? _ : t)
                    }, t.promisifyAll = function j(e, t) {
                        if ("function" != typeof e && "object" != typeof e) throw new x("the target of promisifyAll must be an object or a function");
                        t = Object(t);
                        var n = t.suffix;
                        "string" != typeof n && (n = S);
                        var i = t.filter;
                        "function" != typeof i && (i = C);
                        var r = t.promisifier;
                        if ("function" != typeof r && (r = P), !v.isIdentifier(n)) throw new RangeError("suffix must be a valid identifier");
                        for (var o = v.inheritedDataKeys(e, {
                                includeHidden: !0
                            }), s = 0; s < o.length; ++s) {
                            var a = e[o[s]];
                            "constructor" !== o[s] && v.isClass(a) && (g(a.prototype, n, i, r), g(a, n, i, r))
                        }
                        return g(e, n, i, r)
                    }
                }
            }, {
                "./errors": 10,
                "./promise_resolver.js": 22,
                "./util.js": 35
            }],
            24: [function(e, t, n) {
                t.exports = function(t, n, i) {
                    function r(e) {
                        for (var t = l.keys(e), n = t.length, i = new Array(2 * n), r = 0; n > r; ++r) {
                            var o = t[r];
                            i[r] = e[o], i[r + n] = o
                        }
                        this.constructor$(i)
                    }

                    function o(e) {
                        var n, o = i(e, void 0);
                        return u(o) ? (n = o instanceof t ? o._then(t.props, void 0, void 0, void 0, void 0) : new r(o).promise(), o instanceof t && n._propagateFrom(o, 4), n) : a("cannot await properties of a non-object")
                    }
                    var s = e("./util.js"),
                        a = e("./errors_api_rejection")(t),
                        u = s.isObject,
                        l = e("./es5.js");
                    s.inherits(r, n), r.prototype._init = function c() {
                        this._init$(void 0, -3)
                    }, r.prototype._promiseFulfilled = function d(e, t) {
                        if (!this._isResolved()) {
                            this._values[t] = e;
                            var n = ++this._totalResolved;
                            if (n >= this._length) {
                                for (var i = {}, r = this.length(), o = 0, s = this.length(); s > o; ++o) i[this._values[o + r]] = this._values[o];
                                this._resolve(i)
                            }
                        }
                    }, r.prototype._promiseProgressed = function h(e, t) {
                        this._isResolved() || this._promise._progress({
                            key: this._values[t + this.length()],
                            value: e
                        })
                    }, r.prototype.shouldCopyValues = function f() {
                        return !1
                    }, r.prototype.getActualLength = function p(e) {
                        return e >> 1
                    }, t.prototype.props = function g() {
                        return o(this)
                    }, t.props = function m(e) {
                        return o(e)
                    }
                }
            }, {
                "./errors_api_rejection": 11,
                "./es5.js": 12,
                "./util.js": 35
            }],
            25: [function(e, t, n) {
                function i(e, t, n, i, r) {
                    for (var o = 0; r > o; ++o) n[o + i] = e[o + t]
                }

                function r(e) {
                    this._capacity = e, this._length = 0, this._front = 0, this._makeCapacity()
                }
                r.prototype._willBeOverCapacity = function o(e) {
                    return this._capacity < e
                }, r.prototype._pushOne = function s(e) {
                    var t = this.length();
                    this._checkCapacity(t + 1);
                    var n = this._front + t & this._capacity - 1;
                    this[n] = e, this._length = t + 1
                }, r.prototype.push = function a(e, t, n) {
                    var i = this.length() + 3;
                    if (this._willBeOverCapacity(i)) return this._pushOne(e), this._pushOne(t), void this._pushOne(n);
                    var r = this._front + i - 3;
                    this._checkCapacity(i);
                    var o = this._capacity - 1;
                    this[r + 0 & o] = e, this[r + 1 & o] = t, this[r + 2 & o] = n, this._length = i
                }, r.prototype.shift = function u() {
                    var e = this._front,
                        t = this[e];
                    return this[e] = void 0, this._front = e + 1 & this._capacity - 1, this._length--, t
                }, r.prototype.length = function l() {
                    return this._length
                }, r.prototype._makeCapacity = function c() {
                    for (var e = this._capacity, t = 0; e > t; ++t) this[t] = void 0
                }, r.prototype._checkCapacity = function d(e) {
                    this._capacity < e && this._resizeTo(this._capacity << 3)
                }, r.prototype._resizeTo = function h(e) {
                    var t = this._front,
                        n = this._capacity,
                        r = new Array(n),
                        o = this.length();
                    if (i(this, 0, r, 0, n), this._capacity = e, this._makeCapacity(), this._front = 0, n >= t + o) i(r, t, this, 0, o);
                    else {
                        var s = o - (t + o & n - 1);
                        i(r, t, this, 0, s), i(r, 0, this, s, o - s)
                    }
                }, t.exports = r
            }, {}],
            26: [function(e, t, n) {
                t.exports = function(t, n, i) {
                    function r(e, r) {
                        var l = i(e, void 0);
                        if (l instanceof t) return a(l);
                        if (!s(e)) return o("expecting an array, a promise or a thenable");
                        var c = new t(n);
                        void 0 !== r ? c._propagateFrom(r, 7) : c._setTrace(void 0);
                        for (var d = c._fulfill, h = c._reject, f = 0, p = e.length; p > f; ++f) {
                            var g = e[f];
                            (void 0 !== g || u.call(e, f)) && t.cast(g)._then(d, h, void 0, c, null)
                        }
                        return c
                    }
                    var o = e("./errors_api_rejection.js")(t),
                        s = e("./util.js").isArray,
                        a = function l(e) {
                            return e.then(function(t) {
                                return r(t, e)
                            })
                        },
                        u = {}.hasOwnProperty;
                    t.race = function c(e) {
                        return r(e, void 0)
                    }, t.prototype.race = function d() {
                        return r(this, void 0)
                    }
                }
            }, {
                "./errors_api_rejection.js": 11,
                "./util.js": 35
            }],
            27: [function(e, t, n) {
                t.exports = function(t, n, i, r, o) {
                    function s(e, n, i, s) {
                        this.constructor$(e), this._preservedValues = s === o ? [] : null, this._zerothIsAccum = void 0 === i, this._gotAccum = !1, this._reducingIndex = this._zerothIsAccum ? 1 : 0, this._valuesPhase = void 0;
                        var a = r(i, void 0),
                            u = !1,
                            l = a instanceof t;
                        l && (a.isPending() ? a._proxyPromiseArray(this, -1) : a.isFulfilled() ? (i = a.value(), this._gotAccum = !0) : (a._unsetRejectionIsUnhandled(), this._reject(a.reason()), u = !0)), l || this._zerothIsAccum || (this._gotAccum = !0), this._callback = n, this._accum = i, u || this._init$(void 0, -5)
                    }

                    function a(e, t, n, r) {
                        if ("function" != typeof t) return i("fn must be a function");
                        var o = new s(e, t, n, r);
                        return o.promise()
                    }
                    var u = e("./util.js"),
                        l = u.tryCatch4,
                        c = u.tryCatch3,
                        d = u.errorObj;
                    u.inherits(s, n), s.prototype._init = function h() {}, s.prototype._resolveEmptyArray = function f() {
                        (this._gotAccum || this._zerothIsAccum) && this._resolve(null !== this._preservedValues ? [] : this._accum)
                    }, s.prototype._promiseFulfilled = function p(e, n) {
                        var i = this._values;
                        if (null !== i) {
                            var o = this.length(),
                                s = this._preservedValues,
                                a = null !== s,
                                u = this._gotAccum,
                                h = this._valuesPhase,
                                f;
                            if (!h)
                                for (h = this._valuesPhase = Array(o), f = 0; o > f; ++f) h[f] = 0;
                            if (f = h[n], 0 === n && this._zerothIsAccum ? (u || (this._accum = e, this._gotAccum = u = !0), h[n] = 0 === f ? 1 : 2) : -1 === n ? u || (this._accum = e, this._gotAccum = u = !0) : 0 === f ? h[n] = 1 : (h[n] = 2, u && (this._accum = e)), u) {
                                for (var p = this._callback, g = this._promise._boundTo, m, _ = this._reducingIndex; o > _; ++_)
                                    if (f = h[_], 2 !== f) {
                                        if (1 !== f) return;
                                        if (e = i[_], e instanceof t) {
                                            if (!e.isFulfilled()) return e.isPending() ? void 0 : (e._unsetRejectionIsUnhandled(), this._reject(e.reason()));
                                            e = e._settledValue
                                        }
                                        if (a ? (s.push(e), m = c(p, g, e, _, o)) : m = l(p, g, this._accum, e, _, o), m === d) return this._reject(m.e);
                                        var v = r(m, void 0);
                                        if (v instanceof t) {
                                            if (v.isPending()) return h[_] = 4, v._proxyPromiseArray(this, _);
                                            if (!v.isFulfilled()) return v._unsetRejectionIsUnhandled(), this._reject(v.reason());
                                            m = v.value()
                                        }
                                        this._reducingIndex = _ + 1, this._accum = m
                                    }
                                    else this._reducingIndex = _ + 1;
                                this._reducingIndex < o || this._resolve(a ? s : this._accum)
                            }
                        }
                    }, t.prototype.reduce = function g(e, t) {
                        return a(this, e, t, null)
                    }, t.reduce = function m(e, t, n, i) {
                        return a(e, t, n, i)
                    }
                }
            }, {
                "./util.js": 35
            }],
            28: [function(e, t, n) {
                var i, r;
                if ("object" == typeof process && "string" == typeof process.version) i = function o(e) {
                    process.nextTick(e)
                };
                else if ("undefined" != typeof MutationObserver && (r = MutationObserver) || "undefined" != typeof WebKitMutationObserver && (r = WebKitMutationObserver)) i = function() {
                    var e = document.createElement("div"),
                        t = void 0,
                        n = new r(function i() {
                            var e = t;
                            t = void 0, e()
                        });
                    return n.observe(e, {
                            attributes: !0
                        }),
                        function o(n) {
                            t = n, e.setAttribute("class", "foo")
                        }
                }();
                else {
                    if ("undefined" == typeof setTimeout) throw new Error("no async scheduler available");
                    i = function s(e) {
                        setTimeout(e, 0)
                    }
                }
                t.exports = i
            }, {}],
            29: [function(e, t, n) {
                t.exports = function(t, n) {
                    function i(e) {
                        this.constructor$(e)
                    }
                    var r = t.PromiseInspection,
                        o = e("./util.js");
                    o.inherits(i, n), i.prototype._promiseResolved = function s(e, t) {
                        this._values[e] = t;
                        var n = ++this._totalResolved;
                        n >= this._length && this._resolve(this._values)
                    }, i.prototype._promiseFulfilled = function a(e, t) {
                        if (!this._isResolved()) {
                            var n = new r;
                            n._bitField = 268435456, n._settledValue = e, this._promiseResolved(t, n)
                        }
                    }, i.prototype._promiseRejected = function u(e, t) {
                        if (!this._isResolved()) {
                            var n = new r;
                            n._bitField = 134217728, n._settledValue = e, this._promiseResolved(t, n)
                        }
                    }, t.settle = function l(e) {
                        return new i(e).promise()
                    }, t.prototype.settle = function c() {
                        return new i(this).promise()
                    }
                }
            }, {
                "./util.js": 35
            }],
            30: [function(e, t, n) {
                t.exports = function(t, n, i) {
                    function r(e) {
                        this.constructor$(e), this._howMany = 0, this._unwrap = !1, this._initialized = !1
                    }

                    function o(e, t) {
                        if ((0 | t) !== t || 0 > t) return i("expecting a positive integer");
                        var n = new r(e),
                            o = n.promise();
                        return o.isRejected() ? o : (n.setHowMany(t), n.init(), o)
                    }
                    var s = e("./util.js"),
                        a = e("./errors.js").RangeError,
                        u = e("./errors.js").AggregateError,
                        l = s.isArray;
                    s.inherits(r, n), r.prototype._init = function c() {
                        if (this._initialized) {
                            if (0 === this._howMany) return void this._resolve([]);
                            this._init$(void 0, -5);
                            var e = l(this._values);
                            !this._isResolved() && e && this._howMany > this._canPossiblyFulfill() && this._reject(this._getRangeError(this.length()))
                        }
                    }, r.prototype.init = function d() {
                        this._initialized = !0, this._init()
                    }, r.prototype.setUnwrap = function h() {
                        this._unwrap = !0
                    }, r.prototype.howMany = function f() {
                        return this._howMany
                    }, r.prototype.setHowMany = function p(e) {
                        this._isResolved() || (this._howMany = e)
                    }, r.prototype._promiseFulfilled = function g(e) {
                        this._isResolved() || (this._addFulfilled(e), this._fulfilled() === this.howMany() && (this._values.length = this.howMany(), 1 === this.howMany() && this._unwrap ? this._resolve(this._values[0]) : this._resolve(this._values)))
                    }, r.prototype._promiseRejected = function m(e) {
                        if (!this._isResolved() && (this._addRejected(e), this.howMany() > this._canPossiblyFulfill())) {
                            for (var t = new u, n = this.length(); n < this._values.length; ++n) t.push(this._values[n]);
                            this._reject(t)
                        }
                    }, r.prototype._fulfilled = function _() {
                        return this._totalResolved
                    }, r.prototype._rejected = function v() {
                        return this._values.length - this.length()
                    }, r.prototype._addRejected = function y(e) {
                        this._values.push(e)
                    }, r.prototype._addFulfilled = function b(e) {
                        this._values[this._totalResolved++] = e
                    }, r.prototype._canPossiblyFulfill = function T() {
                        return this.length() - this._rejected()
                    }, r.prototype._getRangeError = function w(e) {
                        var t = "Input array must contain at least " + this._howMany + " items but contains only " + e + " items";
                        return new a(t)
                    }, r.prototype._resolveEmptyArray = function x() {
                        this._reject(this._getRangeError(0))
                    }, t.some = function S(e, t) {
                        return o(e, t)
                    }, t.prototype.some = function C(e) {
                        return o(this, e)
                    }, t._SomePromiseArray = r
                }
            }, {
                "./errors.js": 10,
                "./util.js": 35
            }],
            31: [function(e, t, n) {
                t.exports = function(e) {
                    function t(e) {
                        void 0 !== e ? (this._bitField = e._bitField, this._settledValue = e.isResolved() ? e._settledValue : void 0) : (this._bitField = 0, this._settledValue = void 0)
                    }
                    t.prototype.isFulfilled = e.prototype.isFulfilled = function n() {
                        return (268435456 & this._bitField) > 0
                    }, t.prototype.isRejected = e.prototype.isRejected = function i() {
                        return (134217728 & this._bitField) > 0
                    }, t.prototype.isPending = e.prototype.isPending = function r() {
                        return 0 === (402653184 & this._bitField)
                    }, t.prototype.value = e.prototype.value = function o() {
                        if (!this.isFulfilled()) throw new TypeError("cannot get fulfillment value of a non-fulfilled promise");
                        return this._settledValue
                    }, t.prototype.error = t.prototype.reason = e.prototype.reason = function s() {
                        if (!this.isRejected()) throw new TypeError("cannot get rejection reason of a non-rejected promise");
                        return this._settledValue
                    }, t.prototype.isResolved = e.prototype.isResolved = function a() {
                        return (402653184 & this._bitField) > 0
                    }, e.PromiseInspection = t
                }
            }, {}],
            32: [function(e, t, n) {
                t.exports = function(t, n) {
                    function i(e) {
                        try {
                            return e.then
                        }
                        catch (t) {
                            return l.e = t, l
                        }
                    }

                    function r(e, r) {
                        if (c(e)) {
                            if (e instanceof t) return e;
                            if (o(e)) {
                                var a = new t(n);
                                return a._setTrace(void 0), e._then(a._fulfillUnchecked, a._rejectUncheckedCheckError, a._progressUnchecked, a, null), a._setFollowing(), a
                            }
                            var d = i(e);
                            if (d === l) return void 0 !== r && u(d.e) && r._attachExtraTrace(d.e), t.reject(d.e);
                            if ("function" == typeof d) return s(e, d, r)
                        }
                        return e
                    }

                    function o(e) {
                        return d.call(e, "_promise0")
                    }

                    function s(e, n, i) {
                        function r(n) {
                            if (!l) {
                                if (l = !0, e === n) {
                                    var r = t._makeSelfResolutionError();
                                    return void 0 !== i && i._attachExtraTrace(r), void a.promise._reject(r, void 0)
                                }
                                a.resolve(n)
                            }
                        }

                        function o(e) {
                            if (!l) {
                                l = !0;
                                var t = u(e) ? e : new Error(e + "");
                                void 0 !== i && i._attachExtraTrace(t), a.promise._reject(e, t)
                            }
                        }

                        function s(e) {
                            if (!l) {
                                var t = a.promise;
                                "function" == typeof t._progress && t._progress(e)
                            }
                        }
                        var a = t.defer(),
                            l = !1;
                        try {
                            n.call(e, r, o, s)
                        }
                        catch (c) {
                            if (!l) {
                                l = !0;
                                var d = u(c) ? c : new Error(c + "");
                                void 0 !== i && i._attachExtraTrace(d), a.promise._reject(c, d)
                            }
                        }
                        return a.promise
                    }
                    var a = e("./util.js"),
                        u = e("./errors.js").canAttach,
                        l = a.errorObj,
                        c = a.isObject,
                        d = {}.hasOwnProperty;
                    return r
                }
            }, {
                "./errors.js": 10,
                "./util.js": 35
            }],
            33: [function(e, t, n) {
                var i = function(e, t) {
                    var n = arguments.length,
                        i = arguments[2],
                        r = arguments[3],
                        o = n >= 5 ? arguments[4] : void 0;
                    setTimeout(function() {
                        e(i, r, o)
                    }, t)
                };
                t.exports = function(t, n, r) {
                    var o = e("./util.js"),
                        s = e("./errors.js"),
                        a = e("./errors_api_rejection")(t),
                        u = t.TimeoutError,
                        l = function h(e, t, n) {
                            if (e.isPending()) {
                                "string" != typeof t && (t = "operation timed out after " + n + " ms");
                                var i = new u(t);
                                s.markAsOriginatingFromRejection(i), e._attachExtraTrace(i), e._cancel(i)
                            }
                        },
                        c = function f(e, t) {
                            t._fulfill(e)
                        },
                        d = t.delay = function p(e, o) {
                            void 0 === o && (o = e, e = void 0), o = +o;
                            var s = r(e, void 0),
                                a = new t(n);
                            return s instanceof t ? (a._propagateFrom(s, 7), a._follow(s), a.then(function(e) {
                                return t.delay(e, o)
                            })) : (a._setTrace(void 0), i(c, o, e, a), a)
                        };
                    t.prototype.delay = function g(e) {
                        return d(this, e)
                    }, t.prototype.timeout = function m(e, r) {
                        e = +e;
                        var o = new t(n);
                        return o._propagateFrom(this, 7), o._follow(this), i(l, e, o, r, e), o.cancellable()
                    }
                }
            }, {
                "./errors.js": 10,
                "./errors_api_rejection": 11,
                "./util.js": 35
            }],
            34: [function(e, t, n) {
                t.exports = function(t, n, i) {
                    function r(e) {
                        for (var n = e.length, i = 0; n > i; ++i) {
                            var r = e[i];
                            if (r.isRejected()) return t.reject(r.error());
                            e[i] = r.value()
                        }
                        return e
                    }

                    function o(e) {
                        setTimeout(function() {
                            throw e
                        }, 0)
                    }

                    function s(e, n) {
                        function r() {
                            if (s >= a) return u.resolve();
                            var l = i(e[s++], void 0);
                            if (l instanceof t && l._isDisposable()) {
                                try {
                                    l = i(l._getDisposer().tryDispose(n), void 0)
                                }
                                catch (c) {
                                    return o(c)
                                }
                                if (l instanceof t) return l._then(r, o, null, null, null)
                            }
                            r()
                        }
                        var s = 0,
                            a = e.length,
                            u = t.defer();
                        return r(), u.promise
                    }

                    function a(e) {
                        var t = new f;
                        return t._settledValue = e, t._bitField = 268435456, s(this, t).thenReturn(e)
                    }

                    function u(e) {
                        var t = new f;
                        return t._settledValue = e, t._bitField = 134217728, s(this, t).thenThrow(e)
                    }

                    function l(e, t) {
                        this._data = e, this._promise = t
                    }

                    function c(e, t) {
                        this.constructor$(e, t)
                    }
                    var d = e("./errors.js").TypeError,
                        h = e("./util.js").inherits,
                        f = t.PromiseInspection;
                    l.prototype.data = function p() {
                        return this._data
                    }, l.prototype.promise = function g() {
                        return this._promise
                    }, l.prototype.resource = function m() {
                        return this.promise().isFulfilled() ? this.promise().value() : null
                    }, l.prototype.tryDispose = function(e) {
                        var t = this.resource(),
                            n = null !== t ? this.doDispose(t, e) : null;
                        return this._promise._unsetDisposable(), this._data = this._promise = null, n
                    }, h(c, l), c.prototype.doDispose = function(e, t) {
                        var n = this.data();
                        return n.call(e, e, t)
                    }, t.using = function _() {
                        var e = arguments.length;
                        if (2 > e) return n("you must pass at least 2 arguments to Promise.using");
                        var i = arguments[e - 1];
                        if ("function" != typeof i) return n("fn must be a function");
                        e--;
                        for (var o = new Array(e), s = 0; e > s; ++s) {
                            var c = arguments[s];
                            if (c instanceof l) {
                                var d = c;
                                c = c.promise(), c._setDisposable(d)
                            }
                            o[s] = c
                        }
                        return t.settle(o).then(r).spread(i)._then(a, u, void 0, o, void 0)
                    }, t.prototype._setDisposable = function v(e) {
                        this._bitField = 262144 | this._bitField, this._disposer = e
                    }, t.prototype._isDisposable = function y() {
                        return (262144 & this._bitField) > 0
                    }, t.prototype._getDisposer = function b() {
                        return this._disposer
                    }, t.prototype._unsetDisposable = function T() {
                        this._bitField = -262145 & this._bitField, this._disposer = void 0
                    }, t.prototype.disposer = function w(e) {
                        if ("function" == typeof e) return new c(e, this);
                        throw new d
                    }
                }
            }, {
                "./errors.js": 10,
                "./util.js": 35
            }],
            35: [function(e, t, n) {
                function i(e, t, n) {
                    try {
                        return e.call(t, n)
                    }
                    catch (i) {
                        return x.e = i, x
                    }
                }

                function r(e, t, n, i) {
                    try {
                        return e.call(t, n, i)
                    }
                    catch (r) {
                        return x.e = r, x
                    }
                }

                function o(e, t, n, i, r) {
                    try {
                        return e.call(t, n, i, r)
                    }
                    catch (o) {
                        return x.e = o, x
                    }
                }

                function s(e, t, n, i, r, o) {
                    try {
                        return e.call(t, n, i, r, o)
                    }
                    catch (s) {
                        return x.e = s, x
                    }
                }

                function a(e, t, n) {
                    try {
                        return e.apply(n, t)
                    }
                    catch (i) {
                        return x.e = i, x
                    }
                }

                function u(e) {
                    return "string" == typeof e ? e : "" + e
                }

                function l(e) {
                    return null == e || e === !0 || e === !1 || "string" == typeof e || "number" == typeof e
                }

                function c(e) {
                    return !l(e)
                }

                function d(e) {
                    return l(e) ? new Error(u(e)) : e
                }

                function h(e, t) {
                    var n = e.length,
                        i = new Array(n + 1),
                        r;
                    for (r = 0; n > r; ++r) i[r] = e[r];
                    return i[r] = t, i
                }

                function f(e, t, n) {
                    if (!b.isES5) return {}.hasOwnProperty.call(e, t) ? e[t] : void 0;
                    var i = Object.getOwnPropertyDescriptor(e, t);
                    return null != i ? null == i.get && null == i.set ? i.value : n : void 0
                }

                function p(e, t, n) {
                    if (l(e)) return e;
                    var i = {
                        value: n,
                        configurable: !0,
                        enumerable: !1,
                        writable: !0
                    };
                    return b.defineProperty(e, t, i), e
                }

                function g(e) {
                    throw e
                }

                function m(e) {
                    try {
                        if ("function" == typeof e) {
                            var t = b.keys(e.prototype);
                            return t.length > 0 && !(1 === t.length && "constructor" === t[0])
                        }
                        return !1
                    }
                    catch (n) {
                        return !1
                    }
                }

                function _(e) {
                    function t() {}
                    return t.prototype = e, t
                }

                function v(e) {
                    return P.test(e)
                }

                function y(e, t, n) {
                    for (var i = new Array(e), r = 0; e > r; ++r) i[r] = t + r + n;
                    return i
                }
                var b = e("./es5.js"),
                    T = function() {
                        try {
                            var e = {};
                            return b.defineProperty(e, "f", {
                                get: function() {
                                    return 3
                                }
                            }), 3 === e.f
                        }
                        catch (t) {
                            return !1
                        }
                    }(),
                    w = "undefined" == typeof navigator,
                    x = {
                        e: {}
                    },
                    S = function(e, t) {
                        function n() {
                            this.constructor = e, this.constructor$ = t;
                            for (var n in t.prototype) i.call(t.prototype, n) && "$" !== n.charAt(n.length - 1) && (this[n + "$"] = t.prototype[n])
                        }
                        var i = {}.hasOwnProperty;
                        return n.prototype = t.prototype, e.prototype = new n, e.prototype
                    },
                    C = function() {
                        return "string" !== this
                    }.call("string"),
                    E = function() {
                        return b.isES5 ? function(e, t) {
                            for (var n = [], i = Object.create(null), r = Object(t).includeHidden ? Object.getOwnPropertyNames : Object.keys; null != e;) {
                                var o;
                                try {
                                    o = r(e)
                                }
                                catch (s) {
                                    return n
                                }
                                for (var a = 0; a < o.length; ++a) {
                                    var u = o[a];
                                    if (!i[u]) {
                                        i[u] = !0;
                                        var l = Object.getOwnPropertyDescriptor(e, u);
                                        null != l && null == l.get && null == l.set && n.push(u)
                                    }
                                }
                                e = b.getPrototypeOf(e)
                            }
                            return n
                        } : function(e) {
                            var t = [];
                            for (var n in e) t.push(n);
                            return t
                        }
                    }(),
                    P = /^[a-z$_][a-z$_0-9]*$/i,
                    A = {
                        isClass: m,
                        isIdentifier: v,
                        inheritedDataKeys: E,
                        getDataPropertyOrDefault: f,
                        thrower: g,
                        isArray: b.isArray,
                        haveGetters: T,
                        notEnumerableProp: p,
                        isPrimitive: l,
                        isObject: c,
                        canEvaluate: w,
                        errorObj: x,
                        tryCatch1: i,
                        tryCatch2: r,
                        tryCatch3: o,
                        tryCatch4: s,
                        tryCatchApply: a,
                        inherits: S,
                        withAppended: h,
                        asString: u,
                        maybeWrapAsError: d,
                        wrapsPrimitiveReceiver: C,
                        toFastProperties: _,
                        filledRange: y
                    };
                t.exports = A
            }, {
                "./es5.js": 12
            }]
        }, {}, [3])(3)
    }), qrequire.define("core/env", [], function() {
        "use strict";
        return {
            is: function(e) {
                switch (e) {
                    case "offline":
                        return !("function" == typeof require && "object" == typeof exports && "object" == typeof module);
                    case "nodejs":
                        return ("undefined" != typeof require && !!require.nodeRequire || "function" == typeof require && "object" == typeof exports && "object" == typeof module) && 1 != process.env.offline;
                    default:
                        return null
                }
            }
        }
    }), qrequire.define("mout/object/values", ["./forOwn"], function(e) {
        function t(t) {
            var n = [];
            return e(t, function(e, t) {
                n.push(e)
            }), n
        }
        return t
    }), qrequire.define("mout/array/map", ["../function/makeIterator_"], function(e) {
        function t(t, n, i) {
            n = e(n, i);
            var r = [];
            if (null == t) return r;
            for (var o = -1, s = t.length; ++o < s;) r[o] = n(t[o], o, t);
            return r
        }
        return t
    }), qrequire.define("mout/collection/map", ["../lang/isObject", "../object/values", "../array/map", "../function/makeIterator_"], function(e, t, n, i) {
        function r(r, o, s) {
            return o = i(o, s), e(r) && null == r.length && (r = t(r)), n(r, function(e, t, n) {
                return o(e, t, n)
            })
        }
        return r
    }), qrequire.define("mout/collection/make_", ["../array/slice"], function(e) {
        function t(t, n, i) {
            return function() {
                var r = e(arguments);
                return null == r[0] ? i : "number" == typeof r[0].length ? t.apply(null, r) : n.apply(null, r)
            }
        }
        return t
    }), qrequire.define("mout/array/reduce", [], function() {
        function e(e, t, n) {
            var i = arguments.length > 2,
                r = n;
            if (null == e || !e.length) {
                if (i) return n;
                throw new Error("reduce of empty array with no initial value")
            }
            for (var o = -1, s = e.length; ++o < s;) i ? r = t(r, e[o], o, e) : (r = e[o], i = !0);
            return r
        }
        return e
    }), qrequire.define("mout/object/size", ["./forOwn"], function(e) {
        function t(t) {
            var n = 0;
            return e(t, function() {
                n++
            }), n
        }
        return t
    }), qrequire.define("mout/object/reduce", ["./forOwn", "./size"], function(e, t) {
        function n(n, i, r, o) {
            var s = arguments.length > 2;
            if (!t(n) && !s) throw new Error("reduce of empty object with no initial value");
            return e(n, function(e, t, n) {
                s ? r = i.call(o, r, e, t, n) : (r = e, s = !0)
            }), r
        }
        return n
    }), qrequire.define("mout/collection/reduce", ["./make_", "../array/reduce", "../object/reduce"], function(e, t, n) {
        return e(t, n)
    }), qrequire.define("mout/array/compact", ["./filter"], function(e) {
        function t(t) {
            return e(t, function(e) {
                return null != e
            })
        }
        return t
    }), qrequire.define("mout/array/findIndex", ["../function/makeIterator_"], function(e) {
        function t(t, n, i) {
            if (n = e(n, i), null == t) return -1;
            for (var r = -1, o = t.length; ++r < o;)
                if (n(t[r], r, t)) return r;
            return -1
        }
        return t
    }), qrequire.define("mout/array/find", ["./findIndex"], function(e) {
        function t(t, n, i) {
            var r = e(t, n, i);
            return r >= 0 ? t[r] : void 0
        }
        return t
    }), qrequire.define("mout/array/pluck", ["./map"], function(e) {
        function t(t, n) {
            return e(t, n)
        }
        return t
    }), qrequire.define("mout/array/invoke", ["./slice"], function(e) {
        function t(t, n, i) {
            if (null == t) return t;
            for (var r = e(arguments, 2), o = -1, s = t.length, a; ++o < s;) a = t[o], a[n].apply(a, r);
            return t
        }
        return t
    }), qrequire.define("mout/number/MIN_INT", [], function() {
        return -2147483648
    }), qrequire.define("mout/number/MAX_INT", [], function() {
        return 2147483647
    }), qrequire.define("mout/random/random", [], function() {
        function e() {
            return e.get()
        }
        return e.get = Math.random, e
    }), qrequire.define("mout/random/rand", ["./random", "../number/MIN_INT", "../number/MAX_INT"], function(e, t, n) {
        function i(i, r) {
            return i = null == i ? t : i, r = null == r ? n : r, i + (r - i) * e()
        }
        return i
    }), qrequire.define("mout/random/randInt", ["../number/MIN_INT", "../number/MAX_INT", "./rand"], function(e, t, n) {
        function i(i, r) {
            return i = null == i ? e : ~~i, r = null == r ? t : ~~r, Math.round(n(i - .5, r + .499999999999))
        }
        return i
    }), qrequire.define("mout/array/shuffle", ["../random/randInt"], function(e) {
        function t(t) {
            var n = [],
                i;
            if (null == t) return n;
            for (var r = -1, o = t.length, s; ++r < o;) r ? (i = e(0, r), n[r] = n[i], n[i] = t[r]) : n[0] = t[0];
            return n
        }
        return t
    }), qrequire.define("mout/array/union", ["./unique", "./append"], function(e, t) {
        function n(n) {
            for (var i = [], r = -1, o = arguments.length; ++r < o;) t(i, arguments[r]);
            return e(i)
        }
        return n
    }), qrequire.define("mout/array/xor", ["./unique", "./filter", "./contains"], function(e, t, n) {
        function i(i, r) {
            i = e(i), r = e(r);
            var o = t(i, function(e) {
                    return !n(r, e)
                }),
                s = t(r, function(e) {
                    return !n(i, e)
                });
            return o.concat(s)
        }
        return i
    }), qrequire.define("mout/array/sort", [], function() {
        function e(i, r) {
            if (null == i) return [];
            if (i.length < 2) return i;
            null == r && (r = t);
            var o, s, a;
            return o = ~~(i.length / 2), s = e(i.slice(0, o), r), a = e(i.slice(o, i.length), r), n(s, a, r)
        }

        function t(e, t) {
            return t > e ? -1 : e > t ? 1 : 0
        }

        function n(e, t, n) {
            for (var i = []; e.length && t.length;) n(e[0], t[0]) <= 0 ? i.push(e.shift()) : i.push(t.shift());
            return e.length && i.push.apply(i, e), t.length && i.push.apply(i, t), i
        }
        return e
    }), qrequire.define("mout/object/map", ["./forOwn", "../function/makeIterator_"], function(e, t) {
        function n(n, i, r) {
            i = t(i, r);
            var o = {};
            return e(n, function(e, t, n) {
                o[t] = i(e, t, n)
            }), o
        }
        return n
    }), qrequire.define("mout/object/pluck", ["./map", "../function/prop"], function(e, t) {
        function n(n, i) {
            return e(n, t(i))
        }
        return n
    }), qrequire.define("mout/object/deepFillIn", ["./forOwn", "../lang/isPlainObject"], function(e, t) {
        function n(i, r) {
            for (var o = 0, s = arguments.length, a; ++o < s;) a = arguments[o], a && e(a, function(e, r) {
                var o = i[r];
                null == o ? i[r] = e : t(o) && t(e) && n(o, e)
            });
            return i
        }
        return n
    }), qrequire.define("mout/array/forEach", [], function() {
        function e(e, t, n) {
            if (null != e)
                for (var i = -1, r = e.length; ++i < r && t.call(n, e[i], i, e) !== !1;);
        }
        return e
    }), qrequire.define("mout/object/namespace", ["../array/forEach"], function(e) {
        function t(t, n) {
            return n ? (e(n.split("."), function(e) {
                t[e] || (t[e] = {}), t = t[e]
            }), t) : t
        }
        return t
    }), qrequire.define("mout/object/set", ["./namespace"], function(e) {
        function t(t, n, i) {
            var r = /^(.+)\.(.+)$/.exec(n);
            r ? e(t, r[1])[r[2]] = i : t[n] = i
        }
        return t
    }), qrequire.define("mout/lang/isPrimitive", [], function() {
        function e(e) {
            switch (typeof e) {
                case "string":
                case "number":
                case "boolean":
                    return !0
            }
            return null == e
        }
        return e
    }), qrequire.define("mout/object/get", ["../lang/isPrimitive"], function(e) {
        function t(e, t) {
            for (var n = t.split("."), i = n.pop(); t = n.shift();)
                if (e = e[t], null == e) return;
            return e[i]
        }
        return t
    }), qrequire.define("mout/object/has", ["./get"], function(e) {
        function t(t, i) {
            return e(t, i) !== n
        }
        var n;
        return t
    }), qrequire.define("mout/object/unset", ["./has"], function(e) {
        function t(t, n) {
            if (e(t, n)) {
                for (var i = n.split("."), r = i.pop(); n = i.shift();) t = t[n];
                return delete t[r]
            }
            return !0
        }
        return t
    }), qrequire.define("mout/object/merge", ["./hasOwn", "../lang/deepClone", "../lang/isObject"], function(e, t, n) {
        function i() {
            var r = 1,
                o, s, a, u;
            for (u = t(arguments[0]); a = arguments[r++];)
                for (o in a) e(a, o) && (s = a[o], n(s) && n(u[o]) ? u[o] = i(u[o], s) : u[o] = t(s));
            return u
        }
        return i
    }), qrequire.define("mout/object/filter", ["./forOwn", "../function/makeIterator_"], function(e, t) {
        function n(n, i, r) {
            i = t(i, r);
            var o = {};
            return e(n, function(e, t, n) {
                i(e, t, n) && (o[t] = e)
            }), o
        }
        return n
    }), qrequire.define("mout/object/reject", ["./filter", "../function/makeIterator_"], function(e, t) {
        function n(n, i, r) {
            return i = t(i, r), e(n, function(e, t, n) {
                return !i(e, t, n)
            }, r)
        }
        return n
    }), qrequire.define("mout/object/deepMixIn", ["./forOwn", "../lang/isPlainObject"], function(e, t) {
        function n(t, n) {
            for (var r = 0, o = arguments.length, s; ++r < o;) s = arguments[r], s && e(s, i, t);
            return t
        }

        function i(e, i) {
            var r = this[i];
            t(e) && t(r) ? n(r, e) : this[i] = e
        }
        return n
    }), qrequire.define("mout/object/some", ["./forOwn", "../function/makeIterator_"], function(e, t) {
        function n(n, i, r) {
            i = t(i, r);
            var o = !1;
            return e(n, function(e, t) {
                return i(e, t, n) ? (o = !0, !1) : void 0
            }), o
        }
        return n
    }), qrequire.define("mout/object/contains", ["./some"], function(e) {
        function t(t, n) {
            return e(t, function(e) {
                return e === n
            })
        }
        return t
    }), qrequire.define("mout/collection/contains", ["./make_", "../array/contains", "../object/contains"], function(e, t, n) {
        return e(t, n)
    }), qrequire.define("mout/object/keys", ["./forOwn"], function(e) {
        var t = Object.keys || function(t) {
            var n = [];
            return e(t, function(e, t) {
                n.push(t)
            }), n
        };
        return t
    }), qrequire.define("mout/lang/isUndefined", [], function() {
        function e(e) {
            return e === t
        }
        var t;
        return e
    }), qrequire.define("mout/number/isNaN", [], function() {
        function e(e) {
            return "number" == typeof e && e != e
        }
        return e
    }), qrequire.define("mout/lang/isNaN", ["./isNumber", "../number/isNaN"], function(e, t) {
        function n(n) {
            return !e(n) || t(Number(n))
        }
        return n
    }), qrequire.define("mout/lang/toNumber", ["./isArray"], function(e) {
        function t(t) {
            return "number" == typeof t ? t : t ? "string" == typeof t ? parseFloat(t) : e(t) ? NaN : Number(t) : 0
        }
        return t
    }), qrequire.define("mout/lang/isEmpty", ["../object/forOwn", "./isArray"], function(e, t) {
        function n(n) {
            if (null == n) return !0;
            if ("string" == typeof n || t(n)) return !n.length;
            if ("object" == typeof n) {
                var i = !0;
                return e(n, function() {
                    return i = !1, !1
                }), i
            }
            return !0
        }
        return n
    }), qrequire.define("mout/number/toInt", [], function() {
        function e(e) {
            return ~~e
        }
        return e
    }), qrequire.define("mout/string/typecast", [], function() {
        function e(e) {
            var n;
            return n = null === e || "null" === e ? null : "true" === e ? !0 : "false" === e ? !1 : e === t || "undefined" === e ? t : "" === e || isNaN(e) ? e : parseFloat(e)
        }
        var t;
        return e
    }), qrequire.define("mout/queryString/decode", ["../string/typecast", "../lang/isString", "../lang/isArray", "../object/hasOwn"], function(e, t, n, i) {
        function r(r, o) {
            for (var s = (r || "").replace("?", "").split("&"), a = -1, u = s.length, l = {}, c, d, h, f; ++a < u;) c = s[a].split("="), h = c[0], h && h.length && (d = o === !1 ? c[1] : e(c[1]), f = t(d) ? decodeURIComponent(d) : d, i(l, h) ? n(l[h]) ? l[h].push(f) : l[h] = [l[h], f] : l[h] = f);
            return l
        }
        return r
    }), qrequire.define("mout/lang/toString", [], function() {
        function e(e) {
            return null == e ? "" : e.toString()
        }
        return e
    }), qrequire.define("mout/string/stripHtmlTags", ["../lang/toString"], function(e) {
        function t(t) {
            return t = e(t), t.replace(/<[^>]*>/g, "")
        }
        return t
    }), qrequire.define("utils", ["mout/function/bind", "mout/collection/map", "mout/collection/reduce", "mout/array/compact", "mout/array/find", "mout/array/filter", "mout/array/pluck", "mout/array/invoke", "mout/array/shuffle", "mout/array/union", "mout/array/difference", "mout/array/xor", "mout/array/combine", "mout/array/sort", "mout/object/forOwn", "mout/object/pluck", "mout/object/deepFillIn", "mout/object/set", "mout/object/unset", "mout/object/get", "mout/object/size", "mout/object/merge", "mout/object/reject", "mout/object/filter", "mout/object/deepMixIn", "mout/object/filter", "mout/collection/contains", "mout/object/keys", "mout/object/values", "mout/lang/clone", "mout/lang/isFunction", "mout/lang/isString", "mout/lang/isArray", "mout/lang/isUndefined", "mout/lang/isObject", "mout/lang/isPlainObject", "mout/lang/isBoolean", "mout/lang/isNumber", "mout/lang/isNaN", "mout/lang/toNumber", "mout/lang/toArray", "mout/lang/isEmpty", "mout/lang/deepClone", "mout/random/randInt", "mout/number/toInt", "mout/queryString/decode", "mout/string/stripHtmlTags"], function(e, t, n, i, r, o, s, a, u, l, c, d, h, f, p, g, m, _, v, y, b, T, w, x, S, C, E, P, A, j, k, D, O, I, R, L, B, q, F, M, N, H, Q, V, U, z, W) {
        "use strict";
        return {
            objReject: w,
            objFilter: x,
            reduce: n,
            compact: i,
            find: r,
            filter: function(e, t, n) {
                return O(e) ? o(e, t, n) : C(e, t, n)
            },
            isUndefined: I,
            invoke: a,
            shuffle: u,
            pluck: function(e, t) {
                return O(e) ? s(e, t) : g(e, t)
            },
            arrayUnion: l,
            difference: c,
            xor: d,
            combine: h,
            sort: f,
            set: function(e, t, n) {
                if (void 0 === e || null === e) return void 0;
                try {
                    return _(e, t, n)
                }
                catch (i) {
                    return void 0
                }
            },
            unset: v,
            get: function(e, t) {
                if (void 0 === e || null === e || void 0 === t || null === t) return void 0;
                try {
                    return y(e, t)
                }
                catch (n) {
                    return void 0
                }
            },
            size: b,
            merge: T,
            randInt: V,
            toInt: U,
            decode: z,
            deepFillIn: m,
            bind: e,
            clone: j,
            deepMixIn: function X(e, t) {
                return p(t, function(e, t) {
                    var n = this[t];
                    R(e) && R(n) ? X(n, e) : this[t] = e
                }, e), e
            },
            keys: P,
            values: A,
            isNumber: q,
            isNumeric: function(e) {
                return q(e) && !F(e) ? !0 : e ? "string" == typeof e ? !F(+e) : !F(e) : !1
            },
            isNaN: F,
            toNumber: M,
            toArray: function(e) {
                if (this.isObject(e)) {
                    var t = [];
                    return this.each(e, function(e) {
                        t.push(e)
                    }), t
                }
                return N(e)
            },
            contains: E,
            isFunction: k,
            isString: D,
            deepClone: Q,
            subset: function(e, t) {
                if (t <= e.length - 1 && t >= 0 && O(e)) {
                    var n = j(e);
                    return n.splice(0, t)
                }
                return e
            },
            each: function(e, t, n, i) {
                if (void 0 === i && (i = {}), null != e)
                    if (O(e)) {
                        for (var r = 0, o = e.length; o > r; r++)
                            if (t.call(n, e[r], r, e) === i) return
                    }
                    else
                        for (var s in e)
                            if (Object.prototype.hasOwnProperty.call(e, s) && void 0 !== e[s] && t.call(n, e[s], s, e) === i) return
            },
            isArray: O,
            isObject: R,
            isPlainObject: L,
            isBoolean: B,
            isEmpty: H,
            map: t,
            recursiveMap: function(e, t) {
                for (var n in e) "object" == typeof e[n] ? this.recursiveMap(e[n], t) : e[n] = t(e[n], n)
            },
            formatNumber: function(e, t, n, i, r) {
                if (!t || t > 0) {
                    var o = String(e).indexOf(".");
                    if (-1 !== o || r) {
                        var s = String(e).substring(o + 1).length;
                        t = t ? r ? t : Math.min(s, t) : s
                    }
                    else t = 0
                }
                var a = e,
                    u = F(t = Math.abs(t)) ? 2 : t,
                    l = void 0 === n ? "." : n,
                    c = void 0 === i ? "," : i,
                    d = 0 > a ? "-" : "",
                    h = parseInt(a = Math.abs(+a || 0).toFixed(u), 10) + "",
                    f = (f = h.length) > 3 ? f % 3 : 0,
                    p = d + (f ? h.substr(0, f) + c : "") + h.substr(f).replace(/(\d{3})(?=\d)/g, "$1" + c) + (u ? l + Math.abs(a - h).toFixed(u).slice(2) : "");
                return p
            },
            stripHtmlTags: W
        }
    }), qrequire.define("log", ["core/env", "utils"], function(e, t) {
        "use strict";

        function n() {
            try {
                throw new Error
            }
            catch (e) {
                return e
            }
        }
        if (e.is("nodejs")) return require.nodeRequire("qlog").log();
        var i = {},
            r = function(e, t) {
                var r = Array.prototype.slice.call(arguments, 0);
                r.shift(), t && t.ErrorCode && (i[t.ErrorCode] ? i[t.ErrorCode] = i[t.ErrorCode] + 1 : i[t.ErrorCode] = 1);
                var o = n();
                if (o && o.stack) {
                    var s = o.stack.split("\n")[4],
                        a = s.match(/(http.*:\d+(:\d+)?)/);
                    r.push(a && a[1] || s)
                }
                "undefined" != typeof console && (console[e] && "debug" != e ? console[e].apply(console, r) : console.log.apply(console, r)), window.ErrorWatcher && ("warn" === e || "error" === e) && window.ErrorWatcher.reportError(r, e)
            };
        return {
            updateState: function(e, t) {
                window.ErrorWatcher && window.ErrorWatcher.registerEvent(e, t)
            },
            getAndResetCachedLogs: function() {
                var e = t.clone(i);
                return i = {}, e
            },
            trace: function() {
                var e = Array.prototype.slice.call(arguments, 0);
                e.unshift("trace"), r.apply(null, e)
            },
            silly: function() {
                var e = Array.prototype.slice.call(arguments, 0);
                e.unshift("silly")
            },
            debug: function() {
                var e = Array.prototype.slice.call(arguments, 0);
                e.unshift("debug"), r.apply(null, e)
            },
            verbose: function() {
                var e = Array.prototype.slice.call(arguments, 0);
                e.unshift("verbose"), r.apply(null, e)
            },
            info: function() {
                var e = Array.prototype.slice.call(arguments, 0);
                e.unshift("info"), r.apply(null, e)
            },
            warn: function() {
                var e = Array.prototype.slice.call(arguments, 0);
                e.unshift("warn"), r.apply(null, e)
            },
            error: function() {
                var e = Array.prototype.slice.call(arguments, 0);
                e.unshift("error"), r.apply(null, e)
            }
        }
    }), qrequire.define("load", ["require", "bluebird"], function(e, t) {
        "use strict";
        return function(n) {
            return new t(function(t, i) {
                e(n, function() {
                    t(arguments)
                }, i)
            })
        }
    }), qrequire.define("core/metrics", ["log"], function(e) {
        "use strict";

        function t() {
            return "undefined" != typeof performance && !!performance.timing
        }

        function n() {
            var e, t = {};
            for (var n in o) e = i(o, n).concat(i(a, n)), e.length && (t[n] = e);
            for (var r in a) e = i(a, r), e.length && (t[r] ? t[r].concat(e) : t[r] = e);
            return t
        }

        function i(e, t) {
            for (var n = [], i = [], r = e[t] || [], o = 0; o < r.length; o++) {
                var s = r[o];
                s.isDone() ? n.push(s["export"]()) : i.push(s)
            }
            return i.length ? e[t] = i : e[t] && delete e[t], n
        }
        var r = function() {};
        r.prototype = {
            __startTime: null,
            __endTime: null,
            toString: function() {
                return this.getElapsedTime()
            },
            "export": function() {
                return {
                    elapsed: this.getElapsedTime(),
                    startTime: parseInt(this.__startTime / 1e3)
                }
            },
            getElapsedTime: function() {
                return this.__getStartEndDiff()
            },
            __getStartEndDiff: function() {
                var t, n;
                return this.hasStarted() ? (t = this.__startTime, n = this.isDone() ? this.__endTime : new Date, n.getTime() - t.getTime()) : (e.error("Cannot get time when timing has not started."), -1)
            },
            hasStarted: function() {
                return !!this.__startTime
            },
            isDone: function() {
                return !!this.__endTime
            },
            start: function() {
                return this.hasStarted() ? void e.error("Tried to start metric timing when it is already running.") : void(this.__startTime = new Date)
            },
            end: function() {
                return this.hasStarted() ? this.isDone() ? void e.error("Tried to end a metric timing that was already completed.") : void(this.__endTime = new Date) : void e.error("Tried to end a metric timing that has not begun.")
            }
        };
        var o = {},
            s = {},
            a = {},
            u = {},
            l = {},
            c = 0;
        return {
            startTiming: function(t) {
                e.updateState("Timing", "start " + t);
                var n = new r;
                if (o[t]) {
                    var i = o[t],
                        s = i[i.length - 1];
                    if (!s.isDone()) {
                        var a = new Error;
                        return void e.error('Timer "' + t + '" is still running. Cannot start.')
                    }
                    o[t].push(n)
                }
                else o[t] = [n];
                n.start()
            },
            endTiming: function(t) {
                e.updateState("Timing", "end " + t);
                var n = o[t];
                n ? n[n.length - 1].end() : e.error('Metric timer "' + t + '" not found.')
            },
            startMultiTiming: function(t) {
                c++;
                var n = new r;
                return e.updateState("TimingMulti", "start (" + c + ") " + t), s[c] = n, a[t] ? a[t].push(n) : a[t] = [n], n.start(), c
            },
            endMultiTiming: function(t) {
                e.updateState("TimingMulti", "end (" + t + ") " + name);
                var n = s[t];
                n ? n.hasStarted() ? n.end() : e.error("MultiTimer has not started yet. Cannot begin.", t, n) : e.error("MultiTimer not found. Cannot end.", t, n)
            },
            hasTiming: function(e) {
                return !!o[e] && !!o[e].length
            },
            isCurrentlyRunning: function(e) {
                if (this.hasTiming(e)) {
                    var t = o[e],
                        n = t[t.length - 1];
                    return !n.isDone()
                }
                return !1
            },
            clearTiming: function(e) {
                delete o[e]
            },
            getStat: function(e) {
                return l[e]
            },
            getCount: function(e) {
                return u[e] && u[e][0] || 0
            },
            setCount: function(e, t) {
                var n = parseInt(t);
                isNaN(n) && (n = 0), u[e] = [n]
            },
            inc: function(e) {
                var t = this.getCount(e);
                this.setCount(e, t + 1)
            },
            dec: function(e) {
                var t = this.getCount(e);
                this.setCount(e, t - 1)
            },
            "export": function() {
                var e = JSON.parse(JSON.stringify(u)),
                    t = JSON.parse(JSON.stringify(l));
                return this.resetCounts(), this.resetStats(), {
                    timings: n(),
                    counts: e,
                    stats: t
                }
            },
            reset: function() {
                this.resetTimings(), this.resetCounts(), this.resetStats()
            },
            resetCounts: function() {
                u = {}
            },
            resetStats: function() {
                l = {}
            },
            resetTimings: function() {
                o = {}, a = {}, s = {}, c = 0
            },
            isEmpty: function() {
                return Object.keys(o).length + Object.keys(a).length + Object.keys(u).length + Object.keys(l).length === 0
            },
            endPageLoadTiming: function() {
                var e = new Date;
                if (t()) {
                    var n = performance.timing.requestStart;
                    l.firstPageLoad = e.getTime() - n, l.domComplete = performance.timing.domComplete - n, l.domLoading = performance.timing.domLoading - n, l.domInteractive = performance.timing.domInteractive - n, l.responseStart = performance.timing.responseStart - n, l.responseEnd = performance.timing.responseEnd - n, l.responseDownload = l.responseEnd - l.responseStart
                }
            }
        }
    }), ! function(e, t) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return t(e)
        } : t(e)
    }("undefined" != typeof window ? window : this, function(e, t) {
        function n(e) {
            var t = e.length,
                n = oe.type(e);
            return "function" === n || oe.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
        }

        function i(e, t, n) {
            if (oe.isFunction(t)) return oe.grep(e, function(e, i) {
                return !!t.call(e, i, e) !== n
            });
            if (t.nodeType) return oe.grep(e, function(e) {
                return e === t !== n
            });
            if ("string" == typeof t) {
                if (fe.test(t)) return oe.filter(t, e, n);
                t = oe.filter(t, e)
            }
            return oe.grep(e, function(e) {
                return oe.inArray(e, t) >= 0 !== n
            })
        }

        function r(e, t) {
            do e = e[t]; while (e && 1 !== e.nodeType);
            return e
        }

        function o(e) {
            var t = Te[e] = {};
            return oe.each(e.match(be) || [], function(e, n) {
                t[n] = !0
            }), t
        }

        function s() {
            ge.addEventListener ? (ge.removeEventListener("DOMContentLoaded", a, !1), e.removeEventListener("load", a, !1)) : (ge.detachEvent("onreadystatechange", a), e.detachEvent("onload", a))
        }

        function a() {
            (ge.addEventListener || "load" === event.type || "complete" === ge.readyState) && (s(), oe.ready())
        }

        function u(e, t, n) {
            if (void 0 === n && 1 === e.nodeType) {
                var i = "data-" + t.replace(Ee, "-$1").toLowerCase();
                if (n = e.getAttribute(i), "string" == typeof n) {
                    try {
                        n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Ce.test(n) ? oe.parseJSON(n) : n
                    }
                    catch (r) {}
                    oe.data(e, t, n)
                }
                else n = void 0
            }
            return n
        }

        function l(e) {
            var t;
            for (t in e)
                if (("data" !== t || !oe.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
            return !0
        }

        function c(e, t, n, i) {
            if (oe.acceptData(e)) {
                var r, o, s = oe.expando,
                    a = e.nodeType,
                    u = a ? oe.cache : e,
                    l = a ? e[s] : e[s] && s;
                if (l && u[l] && (i || u[l].data) || void 0 !== n || "string" != typeof t) return l || (l = a ? e[s] = G.pop() || oe.guid++ : s), u[l] || (u[l] = a ? {} : {
                    toJSON: oe.noop
                }), ("object" == typeof t || "function" == typeof t) && (i ? u[l] = oe.extend(u[l], t) : u[l].data = oe.extend(u[l].data, t)), o = u[l], i || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[oe.camelCase(t)] = n), "string" == typeof t ? (r = o[t], null == r && (r = o[oe.camelCase(t)])) : r = o, r
            }
        }

        function d(e, t, n) {
            if (oe.acceptData(e)) {
                var i, r, o = e.nodeType,
                    s = o ? oe.cache : e,
                    a = o ? e[oe.expando] : oe.expando;
                if (s[a]) {
                    if (t && (i = n ? s[a] : s[a].data)) {
                        oe.isArray(t) ? t = t.concat(oe.map(t, oe.camelCase)) : t in i ? t = [t] : (t = oe.camelCase(t), t = t in i ? [t] : t.split(" ")), r = t.length;
                        for (; r--;) delete i[t[r]];
                        if (n ? !l(i) : !oe.isEmptyObject(i)) return
                    }(n || (delete s[a].data, l(s[a]))) && (o ? oe.cleanData([e], !0) : ie.deleteExpando || s != s.window ? delete s[a] : s[a] = null)
                }
            }
        }

        function h() {
            return !0
        }

        function f() {
            return !1
        }

        function p() {
            try {
                return ge.activeElement
            }
            catch (e) {}
        }

        function g(e) {
            var t = Be.split("|"),
                n = e.createDocumentFragment();
            if (n.createElement)
                for (; t.length;) n.createElement(t.pop());
            return n
        }

        function m(e, t) {
            var n, i, r = 0,
                o = typeof e.getElementsByTagName !== xe ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== xe ? e.querySelectorAll(t || "*") : void 0;
            if (!o)
                for (o = [], n = e.childNodes || e; null != (i = n[r]); r++) !t || oe.nodeName(i, t) ? o.push(i) : oe.merge(o, m(i, t));
            return void 0 === t || t && oe.nodeName(e, t) ? oe.merge([e], o) : o
        }

        function _(e) {
            De.test(e.type) && (e.defaultChecked = e.checked)
        }

        function v(e, t) {
            return oe.nodeName(e, "table") && oe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
        }

        function y(e) {
            return e.type = (null !== oe.find.attr(e, "type")) + "/" + e.type, e
        }

        function b(e) {
            var t = We.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }

        function T(e, t) {
            for (var n, i = 0; null != (n = e[i]); i++) oe._data(n, "globalEval", !t || oe._data(t[i], "globalEval"))
        }

        function w(e, t) {
            if (1 === t.nodeType && oe.hasData(e)) {
                var n, i, r, o = oe._data(e),
                    s = oe._data(t, o),
                    a = o.events;
                if (a) {
                    delete s.handle, s.events = {};
                    for (n in a)
                        for (i = 0, r = a[n].length; r > i; i++) oe.event.add(t, n, a[n][i])
                }
                s.data && (s.data = oe.extend({}, s.data))
            }
        }

        function x(e, t) {
            var n, i, r;
            if (1 === t.nodeType) {
                if (n = t.nodeName.toLowerCase(), !ie.noCloneEvent && t[oe.expando]) {
                    r = oe._data(t);
                    for (i in r.events) oe.removeEvent(t, i, r.handle);
                    t.removeAttribute(oe.expando)
                }
                "script" === n && t.text !== e.text ? (y(t).text = e.text, b(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ie.html5Clone && e.innerHTML && !oe.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && De.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
            }
        }

        function S(t, n) {
            var i, r = oe(n.createElement(t)).appendTo(n.body),
                o = e.getDefaultComputedStyle && (i = e.getDefaultComputedStyle(r[0])) ? i.display : oe.css(r[0], "display");
            return r.detach(), o
        }

        function C(e) {
            var t = ge,
                n = Ze[e];
            return n || (n = S(e, t), "none" !== n && n || (Ye = (Ye || oe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (Ye[0].contentWindow || Ye[0].contentDocument).document, t.write(), t.close(), n = S(e, t), Ye.detach()), Ze[e] = n), n
        }

        function E(e, t) {
            return {
                get: function() {
                    var n = e();
                    return null != n ? n ? void delete this.get : (this.get = t).apply(this, arguments) : void 0
                }
            }
        }

        function P(e, t) {
            if (t in e) return t;
            for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, r = ht.length; r--;)
                if (t = ht[r] + n, t in e) return t;
            return i
        }

        function A(e, t) {
            for (var n, i, r, o = [], s = 0, a = e.length; a > s; s++) i = e[s], i.style && (o[s] = oe._data(i, "olddisplay"), n = i.style.display, t ? (o[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && je(i) && (o[s] = oe._data(i, "olddisplay", C(i.nodeName)))) : (r = je(i), (n && "none" !== n || !r) && oe._data(i, "olddisplay", r ? n : oe.css(i, "display"))));
            for (s = 0; a > s; s++) i = e[s], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[s] || "" : "none"));
            return e
        }

        function j(e, t, n) {
            var i = ut.exec(t);
            return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
        }

        function k(e, t, n, i, r) {
            for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > o; o += 2) "margin" === n && (s += oe.css(e, n + Ae[o], !0, r)), i ? ("content" === n && (s -= oe.css(e, "padding" + Ae[o], !0, r)), "margin" !== n && (s -= oe.css(e, "border" + Ae[o] + "Width", !0, r))) : (s += oe.css(e, "padding" + Ae[o], !0, r), "padding" !== n && (s += oe.css(e, "border" + Ae[o] + "Width", !0, r)));
            return s
        }

        function D(e, t, n) {
            var i = !0,
                r = "width" === t ? e.offsetWidth : e.offsetHeight,
                o = nt(e),
                s = ie.boxSizing && "border-box" === oe.css(e, "boxSizing", !1, o);
            if (0 >= r || null == r) {
                if (r = it(e, t, o), (0 > r || null == r) && (r = e.style[t]), tt.test(r)) return r;
                i = s && (ie.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0
            }
            return r + k(e, t, n || (s ? "border" : "content"), i, o) + "px"
        }

        function O(e, t, n, i, r) {
            return new O.prototype.init(e, t, n, i, r)
        }

        function I() {
            return setTimeout(function() {
                ft = void 0
            }), ft = oe.now()
        }

        function R(e, t) {
            var n, i = {
                    height: e
                },
                r = 0;
            for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = Ae[r], i["margin" + n] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e), i
        }

        function L(e, t, n) {
            for (var i, r = (yt[t] || []).concat(yt["*"]), o = 0, s = r.length; s > o; o++)
                if (i = r[o].call(n, t, e)) return i
        }

        function B(e, t, n) {
            var i, r, o, s, a, u, l, c, d = this,
                h = {},
                f = e.style,
                p = e.nodeType && je(e),
                g = oe._data(e, "fxshow");
            n.queue || (a = oe._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, u = a.empty.fire, a.empty.fire = function() {
                a.unqueued || u()
            }), a.unqueued++, d.always(function() {
                d.always(function() {
                    a.unqueued--, oe.queue(e, "fx").length || a.empty.fire()
                })
            })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], l = oe.css(e, "display"), c = "none" === l ? oe._data(e, "olddisplay") || C(e.nodeName) : l, "inline" === c && "none" === oe.css(e, "float") && (ie.inlineBlockNeedsLayout && "inline" !== C(e.nodeName) ? f.zoom = 1 : f.display = "inline-block")), n.overflow && (f.overflow = "hidden", ie.shrinkWrapBlocks() || d.always(function() {
                f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
            }));
            for (i in t)
                if (r = t[i], gt.exec(r)) {
                    if (delete t[i], o = o || "toggle" === r, r === (p ? "hide" : "show")) {
                        if ("show" !== r || !g || void 0 === g[i]) continue;
                        p = !0
                    }
                    h[i] = g && g[i] || oe.style(e, i)
                }
                else l = void 0;
            if (oe.isEmptyObject(h)) "inline" === ("none" === l ? C(e.nodeName) : l) && (f.display = l);
            else {
                g ? "hidden" in g && (p = g.hidden) : g = oe._data(e, "fxshow", {}), o && (g.hidden = !p), p ? oe(e).show() : d.done(function() {
                    oe(e).hide()
                }), d.done(function() {
                    var t;
                    oe._removeData(e, "fxshow");
                    for (t in h) oe.style(e, t, h[t])
                });
                for (i in h) s = L(p ? g[i] : 0, i, d), i in g || (g[i] = s.start, p && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
            }
        }

        function q(e, t) {
            var n, i, r, o, s;
            for (n in e)
                if (i = oe.camelCase(n), r = t[i], o = e[n], oe.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), s = oe.cssHooks[i], s && "expand" in s) {
                    o = s.expand(o), delete e[i];
                    for (n in o) n in e || (e[n] = o[n], t[n] = r)
                }
                else t[i] = r
        }

        function F(e, t, n) {
            var i, r, o = 0,
                s = vt.length,
                a = oe.Deferred().always(function() {
                    delete u.elem
                }),
                u = function() {
                    if (r) return !1;
                    for (var t = ft || I(), n = Math.max(0, l.startTime + l.duration - t), i = n / l.duration || 0, o = 1 - i, s = 0, u = l.tweens.length; u > s; s++) l.tweens[s].run(o);
                    return a.notifyWith(e, [l, o, n]), 1 > o && u ? n : (a.resolveWith(e, [l]), !1)
                },
                l = a.promise({
                    elem: e,
                    props: oe.extend({}, t),
                    opts: oe.extend(!0, {
                        specialEasing: {}
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: ft || I(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) {
                        var i = oe.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                        return l.tweens.push(i), i
                    },
                    stop: function(t) {
                        var n = 0,
                            i = t ? l.tweens.length : 0;
                        if (r) return this;
                        for (r = !0; i > n; n++) l.tweens[n].run(1);
                        return t ? a.resolveWith(e, [l, t]) : a.rejectWith(e, [l, t]), this
                    }
                }),
                c = l.props;
            for (q(c, l.opts.specialEasing); s > o; o++)
                if (i = vt[o].call(l, e, c, l.opts)) return i;
            return oe.map(c, L, l), oe.isFunction(l.opts.start) && l.opts.start.call(e, l), oe.fx.timer(oe.extend(u, {
                elem: e,
                anim: l,
                queue: l.opts.queue
            })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
        }

        function M(e) {
            return function(t, n) {
                "string" != typeof t && (n = t, t = "*");
                var i, r = 0,
                    o = t.toLowerCase().match(be) || [];
                if (oe.isFunction(n))
                    for (; i = o[r++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
            }
        }

        function N(e, t, n, i) {
            function r(a) {
                var u;
                return o[a] = !0, oe.each(e[a] || [], function(e, a) {
                    var l = a(t, n, i);
                    return "string" != typeof l || s || o[l] ? s ? !(u = l) : void 0 : (t.dataTypes.unshift(l), r(l), !1)
                }), u
            }
            var o = {},
                s = e === Qt;
            return r(t.dataTypes[0]) || !o["*"] && r("*")
        }

        function H(e, t) {
            var n, i, r = oe.ajaxSettings.flatOptions || {};
            for (i in t) void 0 !== t[i] && ((r[i] ? e : n || (n = {}))[i] = t[i]);
            return n && oe.extend(!0, e, n), e
        }

        function Q(e, t, n) {
            for (var i, r, o, s, a = e.contents, u = e.dataTypes;
                "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
            if (r)
                for (s in a)
                    if (a[s] && a[s].test(r)) {
                        u.unshift(s);
                        break
                    }
            if (u[0] in n) o = u[0];
            else {
                for (s in n) {
                    if (!u[0] || e.converters[s + " " + u[0]]) {
                        o = s;
                        break
                    }
                    i || (i = s)
                }
                o = o || i
            }
            return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0
        }

        function V(e, t, n, i) {
            var r, o, s, a, u, l = {},
                c = e.dataTypes.slice();
            if (c[1])
                for (s in e.converters) l[s.toLowerCase()] = e.converters[s];
            for (o = c.shift(); o;)
                if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                    if ("*" === o) o = u;
                    else if ("*" !== u && u !== o) {
                if (s = l[u + " " + o] || l["* " + o], !s)
                    for (r in l)
                        if (a = r.split(" "), a[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
                            s === !0 ? s = l[r] : l[r] !== !0 && (o = a[0], c.unshift(a[1]));
                            break
                        }
                if (s !== !0)
                    if (s && e["throws"]) t = s(t);
                    else try {
                        t = s(t)
                    }
                    catch (d) {
                        return {
                            state: "parsererror",
                            error: s ? d : "No conversion from " + u + " to " + o
                        }
                    }
            }
            return {
                state: "success",
                data: t
            }
        }

        function U(e, t, n, i) {
            var r;
            if (oe.isArray(t)) oe.each(t, function(t, r) {
                n || Wt.test(e) ? i(e, r) : U(e + "[" + ("object" == typeof r ? t : "") + "]", r, n, i)
            });
            else if (n || "object" !== oe.type(t)) i(e, t);
            else
                for (r in t) U(e + "[" + r + "]", t[r], n, i)
        }

        function z() {
            try {
                return new e.XMLHttpRequest
            }
            catch (t) {}
        }

        function W() {
            try {
                return new e.ActiveXObject("Microsoft.XMLHTTP")
            }
            catch (t) {}
        }

        function X(e) {
            return oe.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
        }
        var G = [],
            J = G.slice,
            K = G.concat,
            Y = G.push,
            Z = G.indexOf,
            ee = {},
            te = ee.toString,
            ne = ee.hasOwnProperty,
            ie = {},
            re = "1.11.1",
            oe = function(e, t) {
                return new oe.fn.init(e, t)
            },
            se = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            ae = /^-ms-/,
            ue = /-([\da-z])/gi,
            le = function(e, t) {
                return t.toUpperCase()
            };
        oe.fn = oe.prototype = {
            jquery: re,
            constructor: oe,
            selector: "",
            length: 0,
            toArray: function() {
                return J.call(this)
            },
            get: function(e) {
                return null != e ? 0 > e ? this[e + this.length] : this[e] : J.call(this)
            },
            pushStack: function(e) {
                var t = oe.merge(this.constructor(), e);
                return t.prevObject = this, t.context = this.context, t
            },
            each: function(e, t) {
                return oe.each(this, e, t)
            },
            map: function(e) {
                return this.pushStack(oe.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            slice: function() {
                return this.pushStack(J.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length,
                    n = +e + (0 > e ? t : 0);
                return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: Y,
            sort: G.sort,
            splice: G.splice
        }, oe.extend = oe.fn.extend = function() {
            var e, t, n, i, r, o, s = arguments[0] || {},
                a = 1,
                u = arguments.length,
                l = !1;
            for ("boolean" == typeof s && (l = s, s = arguments[a] || {}, a++), "object" == typeof s || oe.isFunction(s) || (s = {}), a === u && (s = this, a--); u > a; a++)
                if (null != (r = arguments[a]))
                    for (i in r) e = s[i], n = r[i], s !== n && (l && n && (oe.isPlainObject(n) || (t = oe.isArray(n))) ? (t ? (t = !1, o = e && oe.isArray(e) ? e : []) : o = e && oe.isPlainObject(e) ? e : {}, s[i] = oe.extend(l, o, n)) : void 0 !== n && (s[i] = n));
            return s
        }, oe.extend({
            expando: "jQuery" + (re + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isFunction: function(e) {
                return "function" === oe.type(e)
            },
            isArray: Array.isArray || function(e) {
                return "array" === oe.type(e)
            },
            isWindow: function(e) {
                return null != e && e == e.window
            },
            isNumeric: function(e) {
                return !oe.isArray(e) && e - parseFloat(e) >= 0
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            isPlainObject: function(e) {
                var t;
                if (!e || "object" !== oe.type(e) || e.nodeType || oe.isWindow(e)) return !1;
                try {
                    if (e.constructor && !ne.call(e, "constructor") && !ne.call(e.constructor.prototype, "isPrototypeOf")) return !1
                }
                catch (n) {
                    return !1
                }
                if (ie.ownLast)
                    for (t in e) return ne.call(e, t);
                for (t in e);
                return void 0 === t || ne.call(e, t)
            },
            type: function(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ee[te.call(e)] || "object" : typeof e
            },
            globalEval: function(t) {
                t && oe.trim(t) && (e.execScript || function(t) {
                    e.eval.call(e, t)
                })(t)
            },
            camelCase: function(e) {
                return e.replace(ae, "ms-").replace(ue, le)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, t, i) {
                var r, o = 0,
                    s = e.length,
                    a = n(e);
                if (i) {
                    if (a)
                        for (; s > o && (r = t.apply(e[o], i), r !== !1); o++);
                    else
                        for (o in e)
                            if (r = t.apply(e[o], i), r === !1) break
                }
                else if (a)
                    for (; s > o && (r = t.call(e[o], o, e[o]), r !== !1); o++);
                else
                    for (o in e)
                        if (r = t.call(e[o], o, e[o]), r === !1) break; return e
            },
            trim: function(e) {
                return null == e ? "" : (e + "").replace(se, "")
            },
            makeArray: function(e, t) {
                var i = t || [];
                return null != e && (n(Object(e)) ? oe.merge(i, "string" == typeof e ? [e] : e) : Y.call(i, e)), i
            },
            inArray: function(e, t, n) {
                var i;
                if (t) {
                    if (Z) return Z.call(t, e, n);
                    for (i = t.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                        if (n in t && t[n] === e) return n
                }
                return -1
            },
            merge: function(e, t) {
                for (var n = +t.length, i = 0, r = e.length; n > i;) e[r++] = t[i++];
                if (n !== n)
                    for (; void 0 !== t[i];) e[r++] = t[i++];
                return e.length = r, e
            },
            grep: function(e, t, n) {
                for (var i, r = [], o = 0, s = e.length, a = !n; s > o; o++) i = !t(e[o], o), i !== a && r.push(e[o]);
                return r
            },
            map: function(e, t, i) {
                var r, o = 0,
                    s = e.length,
                    a = n(e),
                    u = [];
                if (a)
                    for (; s > o; o++) r = t(e[o], o, i), null != r && u.push(r);
                else
                    for (o in e) r = t(e[o], o, i), null != r && u.push(r);
                return K.apply([], u)
            },
            guid: 1,
            proxy: function(e, t) {
                var n, i, r;
                return "string" == typeof t && (r = e[t], t = e, e = r), oe.isFunction(e) ? (n = J.call(arguments, 2), i = function() {
                    return e.apply(t || this, n.concat(J.call(arguments)))
                }, i.guid = e.guid = e.guid || oe.guid++, i) : void 0
            },
            now: function() {
                return +new Date
            },
            support: ie
        }), oe.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
            ee["[object " + t + "]"] = t.toLowerCase()
        });
        var ce = function(e) {
            function t(e, t, n, i) {
                var r, o, s, a, u, l, d, f, p, g;
                if ((t ? t.ownerDocument || t : N) !== O && D(t), t = t || O, n = n || [], !e || "string" != typeof e) return n;
                if (1 !== (a = t.nodeType) && 9 !== a) return [];
                if (R && !i) {
                    if (r = ve.exec(e))
                        if (s = r[1]) {
                            if (9 === a) {
                                if (o = t.getElementById(s), !o || !o.parentNode) return n;
                                if (o.id === s) return n.push(o), n
                            }
                            else if (t.ownerDocument && (o = t.ownerDocument.getElementById(s)) && F(t, o) && o.id === s) return n.push(o), n
                        }
                        else {
                            if (r[2]) return ee.apply(n, t.getElementsByTagName(e)), n;
                            if ((s = r[3]) && T.getElementsByClassName && t.getElementsByClassName) return ee.apply(n, t.getElementsByClassName(s)), n
                        }
                    if (T.qsa && (!L || !L.test(e))) {
                        if (f = d = M, p = t, g = 9 === a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
                            for (l = C(e), (d = t.getAttribute("id")) ? f = d.replace(be, "\\$&") : t.setAttribute("id", f), f = "[id='" + f + "'] ", u = l.length; u--;) l[u] = f + h(l[u]);
                            p = ye.test(e) && c(t.parentNode) || t, g = l.join(",")
                        }
                        if (g) try {
                            return ee.apply(n, p.querySelectorAll(g)), n
                        }
                        catch (m) {}
                        finally {
                            d || t.removeAttribute("id")
                        }
                    }
                }
                return P(e.replace(le, "$1"), t, n, i)
            }

            function n() {
                function e(n, i) {
                    return t.push(n + " ") > w.cacheLength && delete e[t.shift()], e[n + " "] = i
                }
                var t = [];
                return e
            }

            function i(e) {
                return e[M] = !0, e
            }

            function r(e) {
                var t = O.createElement("div");
                try {
                    return !!e(t)
                }
                catch (n) {
                    return !1
                }
                finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function o(e, t) {
                for (var n = e.split("|"), i = e.length; i--;) w.attrHandle[n[i]] = t
            }

            function s(e, t) {
                var n = t && e,
                    i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || G) - (~e.sourceIndex || G);
                if (i) return i;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function a(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return "input" === n && t.type === e
                }
            }

            function u(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }

            function l(e) {
                return i(function(t) {
                    return t = +t, i(function(n, i) {
                        for (var r, o = e([], n.length, t), s = o.length; s--;) n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                    })
                })
            }

            function c(e) {
                return e && typeof e.getElementsByTagName !== X && e
            }

            function d() {}

            function h(e) {
                for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
                return i
            }

            function f(e, t, n) {
                var i = t.dir,
                    r = n && "parentNode" === i,
                    o = Q++;
                return t.first ? function(t, n, o) {
                    for (; t = t[i];)
                        if (1 === t.nodeType || r) return e(t, n, o)
                } : function(t, n, s) {
                    var a, u, l = [H, o];
                    if (s) {
                        for (; t = t[i];)
                            if ((1 === t.nodeType || r) && e(t, n, s)) return !0
                    }
                    else
                        for (; t = t[i];)
                            if (1 === t.nodeType || r) {
                                if (u = t[M] || (t[M] = {}), (a = u[i]) && a[0] === H && a[1] === o) return l[2] = a[2];
                                if (u[i] = l, l[2] = e(t, n, s)) return !0
                            }
                }
            }

            function p(e) {
                return e.length > 1 ? function(t, n, i) {
                    for (var r = e.length; r--;)
                        if (!e[r](t, n, i)) return !1;
                    return !0
                } : e[0]
            }

            function g(e, n, i) {
                for (var r = 0, o = n.length; o > r; r++) t(e, n[r], i);
                return i
            }

            function m(e, t, n, i, r) {
                for (var o, s = [], a = 0, u = e.length, l = null != t; u > a; a++)(o = e[a]) && (!n || n(o, i, r)) && (s.push(o), l && t.push(a));
                return s
            }

            function _(e, t, n, r, o, s) {
                return r && !r[M] && (r = _(r)), o && !o[M] && (o = _(o, s)), i(function(i, s, a, u) {
                    var l, c, d, h = [],
                        f = [],
                        p = s.length,
                        _ = i || g(t || "*", a.nodeType ? [a] : a, []),
                        v = !e || !i && t ? _ : m(_, h, e, a, u),
                        y = n ? o || (i ? e : p || r) ? [] : s : v;
                    if (n && n(v, y, a, u), r)
                        for (l = m(y, f), r(l, [], a, u), c = l.length; c--;)(d = l[c]) && (y[f[c]] = !(v[f[c]] = d));
                    if (i) {
                        if (o || e) {
                            if (o) {
                                for (l = [], c = y.length; c--;)(d = y[c]) && l.push(v[c] = d);
                                o(null, y = [], l, u)
                            }
                            for (c = y.length; c--;)(d = y[c]) && (l = o ? ne.call(i, d) : h[c]) > -1 && (i[l] = !(s[l] = d))
                        }
                    }
                    else y = m(y === s ? y.splice(p, y.length) : y), o ? o(null, s, y, u) : ee.apply(s, y)
                })
            }

            function v(e) {
                for (var t, n, i, r = e.length, o = w.relative[e[0].type], s = o || w.relative[" "], a = o ? 1 : 0, u = f(function(e) {
                        return e === t
                    }, s, !0), l = f(function(e) {
                        return ne.call(t, e) > -1
                    }, s, !0), c = [function(e, n, i) {
                        return !o && (i || n !== A) || ((t = n).nodeType ? u(e, n, i) : l(e, n, i))
                    }]; r > a; a++)
                    if (n = w.relative[e[a].type]) c = [f(p(c), n)];
                    else {
                        if (n = w.filter[e[a].type].apply(null, e[a].matches), n[M]) {
                            for (i = ++a; r > i && !w.relative[e[i].type]; i++);
                            return _(a > 1 && p(c), a > 1 && h(e.slice(0, a - 1).concat({
                                value: " " === e[a - 2].type ? "*" : ""
                            })).replace(le, "$1"), n, i > a && v(e.slice(a, i)), r > i && v(e = e.slice(i)), r > i && h(e))
                        }
                        c.push(n)
                    }
                return p(c)
            }

            function y(e, n) {
                var r = n.length > 0,
                    o = e.length > 0,
                    s = function(i, s, a, u, l) {
                        var c, d, h, f = 0,
                            p = "0",
                            g = i && [],
                            _ = [],
                            v = A,
                            y = i || o && w.find.TAG("*", l),
                            b = H += null == v ? 1 : Math.random() || .1,
                            T = y.length;
                        for (l && (A = s !== O && s); p !== T && null != (c = y[p]); p++) {
                            if (o && c) {
                                for (d = 0; h = e[d++];)
                                    if (h(c, s, a)) {
                                        u.push(c);
                                        break
                                    }
                                l && (H = b)
                            }
                            r && ((c = !h && c) && f--, i && g.push(c))
                        }
                        if (f += p, r && p !== f) {
                            for (d = 0; h = n[d++];) h(g, _, s, a);
                            if (i) {
                                if (f > 0)
                                    for (; p--;) g[p] || _[p] || (_[p] = Y.call(u));
                                _ = m(_)
                            }
                            ee.apply(u, _), l && !i && _.length > 0 && f + n.length > 1 && t.uniqueSort(u)
                        }
                        return l && (H = b, A = v), g
                    };
                return r ? i(s) : s
            }
            var b, T, w, x, S, C, E, P, A, j, k, D, O, I, R, L, B, q, F, M = "sizzle" + -new Date,
                N = e.document,
                H = 0,
                Q = 0,
                V = n(),
                U = n(),
                z = n(),
                W = function(e, t) {
                    return e === t && (k = !0), 0
                },
                X = "undefined",
                G = 1 << 31,
                J = {}.hasOwnProperty,
                K = [],
                Y = K.pop,
                Z = K.push,
                ee = K.push,
                te = K.slice,
                ne = K.indexOf || function(e) {
                    for (var t = 0, n = this.length; n > t; t++)
                        if (this[t] === e) return t;
                    return -1
                },
                ie = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                re = "[\\x20\\t\\r\\n\\f]",
                oe = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                se = oe.replace("w", "w#"),
                ae = "\\[" + re + "*(" + oe + ")(?:" + re + "*([*^$|!~]?=)" + re + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + se + "))|)" + re + "*\\]",
                ue = ":(" + oe + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ae + ")*)|.*)\\)|)",
                le = new RegExp("^" + re + "+|((?:^|[^\\\\])(?:\\\\.)*)" + re + "+$", "g"),
                ce = new RegExp("^" + re + "*," + re + "*"),
                de = new RegExp("^" + re + "*([>+~]|" + re + ")" + re + "*"),
                he = new RegExp("=" + re + "*([^\\]'\"]*?)" + re + "*\\]", "g"),
                fe = new RegExp(ue),
                pe = new RegExp("^" + se + "$"),
                ge = {
                    ID: new RegExp("^#(" + oe + ")"),
                    CLASS: new RegExp("^\\.(" + oe + ")"),
                    TAG: new RegExp("^(" + oe.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + ae),
                    PSEUDO: new RegExp("^" + ue),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + re + "*(even|odd|(([+-]|)(\\d*)n|)" + re + "*(?:([+-]|)" + re + "*(\\d+)|))" + re + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + ie + ")$", "i"),
                    needsContext: new RegExp("^" + re + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + re + "*((?:-\\d)?\\d*)" + re + "*\\)|)(?=[^-]|$)", "i")
                },
                me = /^(?:input|select|textarea|button)$/i,
                _e = /^h\d$/i,
                $ = /^[^{]+\{\s*\[native \w/,
                ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ye = /[+~]/,
                be = /'|\\/g,
                Te = new RegExp("\\\\([\\da-f]{1,6}" + re + "?|(" + re + ")|.)", "ig"),
                we = function(e, t, n) {
                    var i = "0x" + t - 65536;
                    return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                };
            try {
                ee.apply(K = te.call(N.childNodes), N.childNodes), K[N.childNodes.length].nodeType
            }
            catch (xe) {
                ee = {
                    apply: K.length ? function(e, t) {
                        Z.apply(e, te.call(t))
                    } : function(e, t) {
                        for (var n = e.length, i = 0; e[n++] = t[i++];);
                        e.length = n - 1
                    }
                }
            }
            T = t.support = {}, S = t.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return t ? "HTML" !== t.nodeName : !1
            }, D = t.setDocument = function(e) {
                var t, n = e ? e.ownerDocument || e : N,
                    i = n.defaultView;
                return n !== O && 9 === n.nodeType && n.documentElement ? (O = n, I = n.documentElement, R = !S(n), i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", function() {
                    D()
                }, !1) : i.attachEvent && i.attachEvent("onunload", function() {
                    D()
                })), T.attributes = r(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), T.getElementsByTagName = r(function(e) {
                    return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
                }), T.getElementsByClassName = $.test(n.getElementsByClassName) && r(function(e) {
                    return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
                }), T.getById = r(function(e) {
                    return I.appendChild(e).id = M, !n.getElementsByName || !n.getElementsByName(M).length
                }), T.getById ? (w.find.ID = function(e, t) {
                    if (typeof t.getElementById !== X && R) {
                        var n = t.getElementById(e);
                        return n && n.parentNode ? [n] : []
                    }
                }, w.filter.ID = function(e) {
                    var t = e.replace(Te, we);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete w.find.ID, w.filter.ID = function(e) {
                    var t = e.replace(Te, we);
                    return function(e) {
                        var n = typeof e.getAttributeNode !== X && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }), w.find.TAG = T.getElementsByTagName ? function(e, t) {
                    return typeof t.getElementsByTagName !== X ? t.getElementsByTagName(e) : void 0
                } : function(e, t) {
                    var n, i = [],
                        r = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return o
                }, w.find.CLASS = T.getElementsByClassName && function(e, t) {
                    return typeof t.getElementsByClassName !== X && R ? t.getElementsByClassName(e) : void 0
                }, B = [], L = [], (T.qsa = $.test(n.querySelectorAll)) && (r(function(e) {
                    e.innerHTML = "<select msallowclip=''><option selected=''></option></select>", e.querySelectorAll("[msallowclip^='']").length && L.push("[*^$]=" + re + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || L.push("\\[" + re + "*(?:value|" + ie + ")"), e.querySelectorAll(":checked").length || L.push(":checked")
                }), r(function(e) {
                    var t = n.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && L.push("name" + re + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || L.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), L.push(",.*:")
                })), (T.matchesSelector = $.test(q = I.matches || I.webkitMatchesSelector || I.mozMatchesSelector || I.oMatchesSelector || I.msMatchesSelector)) && r(function(e) {
                    T.disconnectedMatch = q.call(e, "div"), q.call(e, "[s!='']:x"), B.push("!=", ue)
                }), L = L.length && new RegExp(L.join("|")), B = B.length && new RegExp(B.join("|")), t = $.test(I.compareDocumentPosition), F = t || $.test(I.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, W = t ? function(e, t) {
                    if (e === t) return k = !0, 0;
                    var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return i ? i : (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & i || !T.sortDetached && t.compareDocumentPosition(e) === i ? e === n || e.ownerDocument === N && F(N, e) ? -1 : t === n || t.ownerDocument === N && F(N, t) ? 1 : j ? ne.call(j, e) - ne.call(j, t) : 0 : 4 & i ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return k = !0, 0;
                    var i, r = 0,
                        o = e.parentNode,
                        a = t.parentNode,
                        u = [e],
                        l = [t];
                    if (!o || !a) return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : j ? ne.call(j, e) - ne.call(j, t) : 0;
                    if (o === a) return s(e, t);
                    for (i = e; i = i.parentNode;) u.unshift(i);
                    for (i = t; i = i.parentNode;) l.unshift(i);
                    for (; u[r] === l[r];) r++;
                    return r ? s(u[r], l[r]) : u[r] === N ? -1 : l[r] === N ? 1 : 0
                }, n) : O
            }, t.matches = function(e, n) {
                return t(e, null, null, n)
            }, t.matchesSelector = function(e, n) {
                if ((e.ownerDocument || e) !== O && D(e), n = n.replace(he, "='$1']"), !(!T.matchesSelector || !R || B && B.test(n) || L && L.test(n))) try {
                    var i = q.call(e, n);
                    if (i || T.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                }
                catch (r) {}
                return t(n, O, null, [e]).length > 0
            }, t.contains = function(e, t) {
                return (e.ownerDocument || e) !== O && D(e), F(e, t)
            }, t.attr = function(e, t) {
                (e.ownerDocument || e) !== O && D(e);
                var n = w.attrHandle[t.toLowerCase()],
                    i = n && J.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !R) : void 0;
                return void 0 !== i ? i : T.attributes || !R ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }, t.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, t.uniqueSort = function(e) {
                var t, n = [],
                    i = 0,
                    r = 0;
                if (k = !T.detectDuplicates, j = !T.sortStable && e.slice(0), e.sort(W), k) {
                    for (; t = e[r++];) t === e[r] && (i = n.push(r));
                    for (; i--;) e.splice(n[i], 1)
                }
                return j = null, e
            }, x = t.getText = function(e) {
                var t, n = "",
                    i = 0,
                    r = e.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += x(e)
                    }
                    else if (3 === r || 4 === r) return e.nodeValue
                }
                else
                    for (; t = e[i++];) n += x(t);
                return n
            }, w = t.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: ge,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(Te, we), e[3] = (e[3] || e[4] || e[5] || "").replace(Te, we), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return ge.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && fe.test(n) && (t = C(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(Te, we).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = V[e + " "];
                        return t || (t = new RegExp("(^|" + re + ")" + e + "(" + re + "|$)")) && V(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== X && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, n, i) {
                        return function(r) {
                            var o = t.attr(r, e);
                            return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o + " ").indexOf(i) > -1 : "|=" === n ? o === i || o.slice(0, i.length + 1) === i + "-" : !1) : !0
                        }
                    },
                    CHILD: function(e, t, n, i, r) {
                        var o = "nth" !== e.slice(0, 3),
                            s = "last" !== e.slice(-4),
                            a = "of-type" === t;
                        return 1 === i && 0 === r ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, u) {
                            var l, c, d, h, f, p, g = o !== s ? "nextSibling" : "previousSibling",
                                m = t.parentNode,
                                _ = a && t.nodeName.toLowerCase(),
                                v = !u && !a;
                            if (m) {
                                if (o) {
                                    for (; g;) {
                                        for (d = t; d = d[g];)
                                            if (a ? d.nodeName.toLowerCase() === _ : 1 === d.nodeType) return !1;
                                        p = g = "only" === e && !p && "nextSibling"
                                    }
                                    return !0
                                }
                                if (p = [s ? m.firstChild : m.lastChild], s && v) {
                                    for (c = m[M] || (m[M] = {}), l = c[e] || [], f = l[0] === H && l[1], h = l[0] === H && l[2], d = f && m.childNodes[f]; d = ++f && d && d[g] || (h = f = 0) || p.pop();)
                                        if (1 === d.nodeType && ++h && d === t) {
                                            c[e] = [H, f, h];
                                            break
                                        }
                                }
                                else if (v && (l = (t[M] || (t[M] = {}))[e]) && l[0] === H) h = l[1];
                                else
                                    for (;
                                        (d = ++f && d && d[g] || (h = f = 0) || p.pop()) && ((a ? d.nodeName.toLowerCase() !== _ : 1 !== d.nodeType) || !++h || (v && ((d[M] || (d[M] = {}))[e] = [H, h]), d !== t)););
                                return h -= r, h === i || h % i === 0 && h / i >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, n) {
                        var r, o = w.pseudos[e] || w.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                        return o[M] ? o(n) : o.length > 1 ? (r = [e, e, "", n], w.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                            for (var i, r = o(e, n), s = r.length; s--;) i = ne.call(e, r[s]), e[i] = !(t[i] = r[s])
                        }) : function(e) {
                            return o(e, 0, r)
                        }) : o
                    }
                },
                pseudos: {
                    not: i(function(e) {
                        var t = [],
                            n = [],
                            r = E(e.replace(le, "$1"));
                        return r[M] ? i(function(e, t, n, i) {
                            for (var o, s = r(e, null, i, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
                        }) : function(e, i, o) {
                            return t[0] = e, r(t, null, o, n), !n.pop()
                        }
                    }),
                    has: i(function(e) {
                        return function(n) {
                            return t(e, n).length > 0
                        }
                    }),
                    contains: i(function(e) {
                        return function(t) {
                            return (t.textContent || t.innerText || x(t)).indexOf(e) > -1
                        }
                    }),
                    lang: i(function(e) {
                        return pe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(Te, we).toLowerCase(),
                            function(t) {
                                var n;
                                do
                                    if (n = R ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                                while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === I
                    },
                    focus: function(e) {
                        return e === O.activeElement && (!O.hasFocus || O.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return e.disabled === !1
                    },
                    disabled: function(e) {
                        return e.disabled === !0
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !w.pseudos.empty(e)
                    },
                    header: function(e) {
                        return _e.test(e.nodeName)
                    },
                    input: function(e) {
                        return me.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: l(function() {
                        return [0]
                    }),
                    last: l(function(e, t) {
                        return [t - 1]
                    }),
                    eq: l(function(e, t, n) {
                        return [0 > n ? n + t : n]
                    }),
                    even: l(function(e, t) {
                        for (var n = 0; t > n; n += 2) e.push(n);
                        return e
                    }),
                    odd: l(function(e, t) {
                        for (var n = 1; t > n; n += 2) e.push(n);
                        return e
                    }),
                    lt: l(function(e, t, n) {
                        for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
                        return e
                    }),
                    gt: l(function(e, t, n) {
                        for (var i = 0 > n ? n + t : n; ++i < t;) e.push(i);
                        return e
                    })
                }
            }, w.pseudos.nth = w.pseudos.eq;
            for (b in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) w.pseudos[b] = a(b);
            for (b in {
                    submit: !0,
                    reset: !0
                }) w.pseudos[b] = u(b);
            return d.prototype = w.filters = w.pseudos, w.setFilters = new d, C = t.tokenize = function(e, n) {
                var i, r, o, s, a, u, l, c = U[e + " "];
                if (c) return n ? 0 : c.slice(0);
                for (a = e, u = [], l = w.preFilter; a;) {
                    (!i || (r = ce.exec(a))) && (r && (a = a.slice(r[0].length) || a), u.push(o = [])), i = !1, (r = de.exec(a)) && (i = r.shift(), o.push({
                        value: i,
                        type: r[0].replace(le, " ")
                    }), a = a.slice(i.length));
                    for (s in w.filter) !(r = ge[s].exec(a)) || l[s] && !(r = l[s](r)) || (i = r.shift(), o.push({
                        value: i,
                        type: s,
                        matches: r
                    }), a = a.slice(i.length));
                    if (!i) break
                }
                return n ? a.length : a ? t.error(e) : U(e, u).slice(0)
            }, E = t.compile = function(e, t) {
                var n, i = [],
                    r = [],
                    o = z[e + " "];
                if (!o) {
                    for (t || (t = C(e)), n = t.length; n--;) o = v(t[n]), o[M] ? i.push(o) : r.push(o);
                    o = z(e, y(r, i)), o.selector = e
                }
                return o
            }, P = t.select = function(e, t, n, i) {
                var r, o, s, a, u, l = "function" == typeof e && e,
                    d = !i && C(e = l.selector || e);
                if (n = n || [], 1 === d.length) {
                    if (o = d[0] = d[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && T.getById && 9 === t.nodeType && R && w.relative[o[1].type]) {
                        if (t = (w.find.ID(s.matches[0].replace(Te, we), t) || [])[0], !t) return n;
                        l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                    }
                    for (r = ge.needsContext.test(e) ? 0 : o.length; r-- && (s = o[r], !w.relative[a = s.type]);)
                        if ((u = w.find[a]) && (i = u(s.matches[0].replace(Te, we), ye.test(o[0].type) && c(t.parentNode) || t))) {
                            if (o.splice(r, 1), e = i.length && h(o), !e) return ee.apply(n, i), n;
                            break
                        }
                }
                return (l || E(e, d))(i, t, !R, n, ye.test(e) && c(t.parentNode) || t), n
            }, T.sortStable = M.split("").sort(W).join("") === M, T.detectDuplicates = !!k, D(), T.sortDetached = r(function(e) {
                return 1 & e.compareDocumentPosition(O.createElement("div"))
            }), r(function(e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || o("type|href|height|width", function(e, t, n) {
                return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), T.attributes && r(function(e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || o("value", function(e, t, n) {
                return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
            }), r(function(e) {
                return null == e.getAttribute("disabled")
            }) || o(ie, function(e, t, n) {
                var i;
                return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }), t
        }(e);
        oe.find = ce, oe.expr = ce.selectors, oe.expr[":"] = oe.expr.pseudos, oe.unique = ce.uniqueSort, oe.text = ce.getText, oe.isXMLDoc = ce.isXML, oe.contains = ce.contains;
        var de = oe.expr.match.needsContext,
            he = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            fe = /^.[^:#\[\.,]*$/;
        oe.filter = function(e, t, n) {
            var i = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? oe.find.matchesSelector(i, e) ? [i] : [] : oe.find.matches(e, oe.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        }, oe.fn.extend({
            find: function(e) {
                var t, n = [],
                    i = this,
                    r = i.length;
                if ("string" != typeof e) return this.pushStack(oe(e).filter(function() {
                    for (t = 0; r > t; t++)
                        if (oe.contains(i[t], this)) return !0
                }));
                for (t = 0; r > t; t++) oe.find(e, i[t], n);
                return n = this.pushStack(r > 1 ? oe.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
            },
            filter: function(e) {
                return this.pushStack(i(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(i(this, e || [], !0))
            },
            is: function(e) {
                return !!i(this, "string" == typeof e && de.test(e) ? oe(e) : e || [], !1).length
            }
        });
        var pe, ge = e.document,
            me = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            _e = oe.fn.init = function(e, t) {
                var n, i;
                if (!e) return this;
                if ("string" == typeof e) {
                    if (n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : me.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || pe).find(e) : this.constructor(t).find(e);
                    if (n[1]) {
                        if (t = t instanceof oe ? t[0] : t, oe.merge(this, oe.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : ge, !0)), he.test(n[1]) && oe.isPlainObject(t))
                            for (n in t) oe.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                        return this
                    }
                    if (i = ge.getElementById(n[2]), i && i.parentNode) {
                        if (i.id !== n[2]) return pe.find(e);
                        this.length = 1, this[0] = i
                    }
                    return this.context = ge, this.selector = e, this
                }
                return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : oe.isFunction(e) ? "undefined" != typeof pe.ready ? pe.ready(e) : e(oe) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), oe.makeArray(e, this))
            };
        _e.prototype = oe.fn, pe = oe(ge);
        var ve = /^(?:parents|prev(?:Until|All))/,
            ye = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        oe.extend({
            dir: function(e, t, n) {
                for (var i = [], r = e[t]; r && 9 !== r.nodeType && (void 0 === n || 1 !== r.nodeType || !oe(r).is(n));) 1 === r.nodeType && i.push(r), r = r[t];
                return i
            },
            sibling: function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            }
        }), oe.fn.extend({
            has: function(e) {
                var t, n = oe(e, this),
                    i = n.length;
                return this.filter(function() {
                    for (t = 0; i > t; t++)
                        if (oe.contains(this, n[t])) return !0
                })
            },
            closest: function(e, t) {
                for (var n, i = 0, r = this.length, o = [], s = de.test(e) || "string" != typeof e ? oe(e, t || this.context) : 0; r > i; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && oe.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
                return this.pushStack(o.length > 1 ? oe.unique(o) : o)
            },
            index: function(e) {
                return e ? "string" == typeof e ? oe.inArray(this[0], oe(e)) : oe.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(oe.unique(oe.merge(this.get(), oe(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), oe.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return oe.dir(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return oe.dir(e, "parentNode", n)
            },
            next: function(e) {
                return r(e, "nextSibling")
            },
            prev: function(e) {
                return r(e, "previousSibling")
            },
            nextAll: function(e) {
                return oe.dir(e, "nextSibling")
            },
            prevAll: function(e) {
                return oe.dir(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return oe.dir(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return oe.dir(e, "previousSibling", n)
            },
            siblings: function(e) {
                return oe.sibling((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return oe.sibling(e.firstChild)
            },
            contents: function(e) {
                return oe.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : oe.merge([], e.childNodes)
            }
        }, function(e, t) {
            oe.fn[e] = function(n, i) {
                var r = oe.map(this, t, n);
                return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = oe.filter(i, r)), this.length > 1 && (ye[e] || (r = oe.unique(r)), ve.test(e) && (r = r.reverse())), this.pushStack(r)
            }
        });
        var be = /\S+/g,
            Te = {};
        oe.Callbacks = function(e) {
            e = "string" == typeof e ? Te[e] || o(e) : oe.extend({}, e);
            var t, n, i, r, s, a, u = [],
                l = !e.once && [],
                c = function(o) {
                    for (n = e.memory && o, i = !0, s = a || 0, a = 0, r = u.length, t = !0; u && r > s; s++)
                        if (u[s].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
                            n = !1;
                            break
                        }
                    t = !1, u && (l ? l.length && c(l.shift()) : n ? u = [] : d.disable())
                },
                d = {
                    add: function() {
                        if (u) {
                            var i = u.length;
                            ! function o(t) {
                                oe.each(t, function(t, n) {
                                    var i = oe.type(n);
                                    "function" === i ? e.unique && d.has(n) || u.push(n) : n && n.length && "string" !== i && o(n)
                                })
                            }(arguments), t ? r = u.length : n && (a = i, c(n))
                        }
                        return this
                    },
                    remove: function() {
                        return u && oe.each(arguments, function(e, n) {
                            for (var i;
                                (i = oe.inArray(n, u, i)) > -1;) u.splice(i, 1), t && (r >= i && r--, s >= i && s--)
                        }), this
                    },
                    has: function(e) {
                        return e ? oe.inArray(e, u) > -1 : !(!u || !u.length)
                    },
                    empty: function() {
                        return u = [], r = 0, this
                    },
                    disable: function() {
                        return u = l = n = void 0, this
                    },
                    disabled: function() {
                        return !u
                    },
                    lock: function() {
                        return l = void 0, n || d.disable(), this
                    },
                    locked: function() {
                        return !l
                    },
                    fireWith: function(e, n) {
                        return !u || i && !l || (n = n || [], n = [e, n.slice ? n.slice() : n], t ? l.push(n) : c(n)), this
                    },
                    fire: function() {
                        return d.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!i
                    }
                };
            return d
        }, oe.extend({
            Deferred: function(e) {
                var t = [
                        ["resolve", "done", oe.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", oe.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", oe.Callbacks("memory")]
                    ],
                    n = "pending",
                    i = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return r.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var e = arguments;
                            return oe.Deferred(function(n) {
                                oe.each(t, function(t, o) {
                                    var s = oe.isFunction(e[t]) && e[t];
                                    r[o[1]](function() {
                                        var e = s && s.apply(this, arguments);
                                        e && oe.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === i ? n.promise() : this, s ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? oe.extend(e, i) : i
                        }
                    },
                    r = {};
                return i.pipe = i.then, oe.each(t, function(e, o) {
                    var s = o[2],
                        a = o[3];
                    i[o[1]] = s.add, a && s.add(function() {
                        n = a
                    }, t[1 ^ e][2].disable, t[2][2].lock), r[o[0]] = function() {
                        return r[o[0] + "With"](this === r ? i : this, arguments), this
                    }, r[o[0] + "With"] = s.fireWith
                }), i.promise(r), e && e.call(r, r), r
            },
            when: function(e) {
                var t = 0,
                    n = J.call(arguments),
                    i = n.length,
                    r = 1 !== i || e && oe.isFunction(e.promise) ? i : 0,
                    o = 1 === r ? e : oe.Deferred(),
                    s = function(e, t, n) {
                        return function(i) {
                            t[e] = this, n[e] = arguments.length > 1 ? J.call(arguments) : i, n === a ? o.notifyWith(t, n) : --r || o.resolveWith(t, n)
                        }
                    },
                    a, u, l;
                if (i > 1)
                    for (a = new Array(i), u = new Array(i), l = new Array(i); i > t; t++) n[t] && oe.isFunction(n[t].promise) ? n[t].promise().done(s(t, l, n)).fail(o.reject).progress(s(t, u, a)) : --r;
                return r || o.resolveWith(l, n), o.promise()
            }
        });
        var we;
        oe.fn.ready = function(e) {
            return oe.ready.promise().done(e), this
        }, oe.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? oe.readyWait++ : oe.ready(!0)
            },
            ready: function(e) {
                if (e === !0 ? !--oe.readyWait : !oe.isReady) {
                    if (!ge.body) return setTimeout(oe.ready);
                    oe.isReady = !0, e !== !0 && --oe.readyWait > 0 || (we.resolveWith(ge, [oe]), oe.fn.triggerHandler && (oe(ge).triggerHandler("ready"), oe(ge).off("ready")))
                }
            }
        }), oe.ready.promise = function(t) {
            if (!we)
                if (we = oe.Deferred(), "complete" === ge.readyState) setTimeout(oe.ready);
                else if (ge.addEventListener) ge.addEventListener("DOMContentLoaded", a, !1), e.addEventListener("load", a, !1);
            else {
                ge.attachEvent("onreadystatechange", a), e.attachEvent("onload", a);
                var n = !1;
                try {
                    n = null == e.frameElement && ge.documentElement
                }
                catch (i) {}
                n && n.doScroll && ! function r() {
                    if (!oe.isReady) {
                        try {
                            n.doScroll("left")
                        }
                        catch (e) {
                            return setTimeout(r, 50)
                        }
                        s(), oe.ready()
                    }
                }()
            }
            return we.promise(t)
        };
        var xe = "undefined",
            Se;
        for (Se in oe(ie)) break;
        ie.ownLast = "0" !== Se, ie.inlineBlockNeedsLayout = !1, oe(function() {
                var e, t, n, i;
                n = ge.getElementsByTagName("body")[0], n && n.style && (t = ge.createElement("div"), i = ge.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), typeof t.style.zoom !== xe && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ie.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(i))
            }),
            function() {
                var e = ge.createElement("div");
                if (null == ie.deleteExpando) {
                    ie.deleteExpando = !0;
                    try {
                        delete e.test
                    }
                    catch (t) {
                        ie.deleteExpando = !1
                    }
                }
                e = null
            }(), oe.acceptData = function(e) {
                var t = oe.noData[(e.nodeName + " ").toLowerCase()],
                    n = +e.nodeType || 1;
                return 1 !== n && 9 !== n ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
            };
        var Ce = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Ee = /([A-Z])/g;
        oe.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(e) {
                return e = e.nodeType ? oe.cache[e[oe.expando]] : e[oe.expando], !!e && !l(e)
            },
            data: function(e, t, n) {
                return c(e, t, n)
            },
            removeData: function(e, t) {
                return d(e, t)
            },
            _data: function(e, t, n) {
                return c(e, t, n, !0)
            },
            _removeData: function(e, t) {
                return d(e, t, !0)
            }
        }), oe.fn.extend({
            data: function(e, t) {
                var n, i, r, o = this[0],
                    s = o && o.attributes;
                if (void 0 === e) {
                    if (this.length && (r = oe.data(o), 1 === o.nodeType && !oe._data(o, "parsedAttrs"))) {
                        for (n = s.length; n--;) s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = oe.camelCase(i.slice(5)), u(o, i, r[i])));
                        oe._data(o, "parsedAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof e ? this.each(function() {
                    oe.data(this, e)
                }) : arguments.length > 1 ? this.each(function() {
                    oe.data(this, e, t)
                }) : o ? u(o, e, oe.data(o, e)) : void 0
            },
            removeData: function(e) {
                return this.each(function() {
                    oe.removeData(this, e)
                })
            }
        }), oe.extend({
            queue: function(e, t, n) {
                var i;
                return e ? (t = (t || "fx") + "queue", i = oe._data(e, t), n && (!i || oe.isArray(n) ? i = oe._data(e, t, oe.makeArray(n)) : i.push(n)), i || []) : void 0
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = oe.queue(e, t),
                    i = n.length,
                    r = n.shift(),
                    o = oe._queueHooks(e, t),
                    s = function() {
                        oe.dequeue(e, t)
                    };
                "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, s, o)), !i && o && o.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return oe._data(e, n) || oe._data(e, n, {
                    empty: oe.Callbacks("once memory").add(function() {
                        oe._removeData(e, t + "queue"), oe._removeData(e, n)
                    })
                })
            }
        }), oe.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? oe.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                    var n = oe.queue(this, e, t);
                    oe._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && oe.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    oe.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, i = 1,
                    r = oe.Deferred(),
                    o = this,
                    s = this.length,
                    a = function() {
                        --i || r.resolveWith(o, [o])
                    };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) n = oe._data(o[s], e + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
                return a(), r.promise(t)
            }
        });
        var Pe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Ae = ["Top", "Right", "Bottom", "Left"],
            je = function(e, t) {
                return e = t || e, "none" === oe.css(e, "display") || !oe.contains(e.ownerDocument, e)
            },
            ke = oe.access = function(e, t, n, i, r, o, s) {
                var a = 0,
                    u = e.length,
                    l = null == n;
                if ("object" === oe.type(n)) {
                    r = !0;
                    for (a in n) oe.access(e, t, a, n[a], !0, o, s)
                }
                else if (void 0 !== i && (r = !0, oe.isFunction(i) || (s = !0), l && (s ? (t.call(e, i), t = null) : (l = t, t = function(e, t, n) {
                        return l.call(oe(e), n)
                    })), t))
                    for (; u > a; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
                return r ? e : l ? t.call(e) : u ? t(e[0], n) : o
            },
            De = /^(?:checkbox|radio)$/i;
        ! function() {
            var e = ge.createElement("input"),
                t = ge.createElement("div"),
                n = ge.createDocumentFragment();
            if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ie.leadingWhitespace = 3 === t.firstChild.nodeType, ie.tbody = !t.getElementsByTagName("tbody").length, ie.htmlSerialize = !!t.getElementsByTagName("link").length, ie.html5Clone = "<:nav></:nav>" !== ge.createElement("nav").cloneNode(!0).outerHTML, e.type = "checkbox", e.checked = !0, n.appendChild(e), ie.appendChecked = e.checked, t.innerHTML = "<textarea>x</textarea>", ie.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, n.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", ie.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, ie.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function() {
                    ie.noCloneEvent = !1
                }), t.cloneNode(!0).click()), null == ie.deleteExpando) {
                ie.deleteExpando = !0;
                try {
                    delete t.test
                }
                catch (i) {
                    ie.deleteExpando = !1
                }
            }
        }(),
        function() {
            var t, n, i = ge.createElement("div");
            for (t in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) n = "on" + t, (ie[t + "Bubbles"] = n in e) || (i.setAttribute(n, "t"), ie[t + "Bubbles"] = i.attributes[n].expando === !1);
            i = null
        }();
        var Oe = /^(?:input|select|textarea)$/i,
            Ie = /^key/,
            Re = /^(?:mouse|pointer|contextmenu)|click/,
            $ = /^(?:focusinfocus|focusoutblur)$/,
            Le = /^([^.]*)(?:\.(.+)|)$/;
        oe.event = {
            global: {},
            add: function(e, t, n, i, r) {
                var o, s, a, u, l, c, d, h, f, p, g, m = oe._data(e);
                if (m) {
                    for (n.handler && (u = n, n = u.handler, r = u.selector), n.guid || (n.guid = oe.guid++), (s = m.events) || (s = m.events = {}), (c = m.handle) || (c = m.handle = function(e) {
                            return typeof oe === xe || e && oe.event.triggered === e.type ? void 0 : oe.event.dispatch.apply(c.elem, arguments)
                        }, c.elem = e), t = (t || "").match(be) || [""], a = t.length; a--;) o = Le.exec(t[a]) || [], f = g = o[1], p = (o[2] || "").split(".").sort(), f && (l = oe.event.special[f] || {}, f = (r ? l.delegateType : l.bindType) || f, l = oe.event.special[f] || {}, d = oe.extend({
                        type: f,
                        origType: g,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && oe.expr.match.needsContext.test(r),
                        namespace: p.join(".")
                    }, u), (h = s[f]) || (h = s[f] = [], h.delegateCount = 0, l.setup && l.setup.call(e, i, p, c) !== !1 || (e.addEventListener ? e.addEventListener(f, c, !1) : e.attachEvent && e.attachEvent("on" + f, c))), l.add && (l.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), r ? h.splice(h.delegateCount++, 0, d) : h.push(d), oe.event.global[f] = !0);
                    e = null
                }
            },
            remove: function(e, t, n, i, r) {
                var o, s, a, u, l, c, d, h, f, p, g, m = oe.hasData(e) && oe._data(e);
                if (m && (c = m.events)) {
                    for (t = (t || "").match(be) || [""], l = t.length; l--;)
                        if (a = Le.exec(t[l]) || [], f = g = a[1], p = (a[2] || "").split(".").sort(), f) {
                            for (d = oe.event.special[f] || {}, f = (i ? d.delegateType : d.bindType) || f, h = c[f] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = h.length; o--;) s = h[o], !r && g !== s.origType || n && n.guid !== s.guid || a && !a.test(s.namespace) || i && i !== s.selector && ("**" !== i || !s.selector) || (h.splice(o, 1), s.selector && h.delegateCount--, d.remove && d.remove.call(e, s));
                            u && !h.length && (d.teardown && d.teardown.call(e, p, m.handle) !== !1 || oe.removeEvent(e, f, m.handle), delete c[f])
                        }
                        else
                            for (f in c) oe.event.remove(e, f + t[l], n, i, !0);
                    oe.isEmptyObject(c) && (delete m.handle, oe._removeData(e, "events"))
                }
            },
            trigger: function(t, n, i, r) {
                var o, s, a, u, l, c, d, h = [i || ge],
                    f = ne.call(t, "type") ? t.type : t,
                    p = ne.call(t, "namespace") ? t.namespace.split(".") : [];
                if (a = c = i = i || ge, 3 !== i.nodeType && 8 !== i.nodeType && !$.test(f + oe.event.triggered) && (f.indexOf(".") >= 0 && (p = f.split("."), f = p.shift(), p.sort()), s = f.indexOf(":") < 0 && "on" + f, t = t[oe.expando] ? t : new oe.Event(f, "object" == typeof t && t), t.isTrigger = r ? 2 : 3, t.namespace = p.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : oe.makeArray(n, [t]), l = oe.event.special[f] || {}, r || !l.trigger || l.trigger.apply(i, n) !== !1)) {
                    if (!r && !l.noBubble && !oe.isWindow(i)) {
                        for (u = l.delegateType || f, $.test(u + f) || (a = a.parentNode); a; a = a.parentNode) h.push(a), c = a;
                        c === (i.ownerDocument || ge) && h.push(c.defaultView || c.parentWindow || e)
                    }
                    for (d = 0;
                        (a = h[d++]) && !t.isPropagationStopped();) t.type = d > 1 ? u : l.bindType || f, o = (oe._data(a, "events") || {})[t.type] && oe._data(a, "handle"), o && o.apply(a, n), o = s && a[s], o && o.apply && oe.acceptData(a) && (t.result = o.apply(a, n), t.result === !1 && t.preventDefault());
                    if (t.type = f, !r && !t.isDefaultPrevented() && (!l._default || l._default.apply(h.pop(), n) === !1) && oe.acceptData(i) && s && i[f] && !oe.isWindow(i)) {
                        c = i[s], c && (i[s] = null), oe.event.triggered = f;
                        try {
                            i[f]()
                        }
                        catch (g) {}
                        oe.event.triggered = void 0, c && (i[s] = c)
                    }
                    return t.result
                }
            },
            dispatch: function(e) {
                e = oe.event.fix(e);
                var t, n, i, r, o, s = [],
                    a = J.call(arguments),
                    u = (oe._data(this, "events") || {})[e.type] || [],
                    l = oe.event.special[e.type] || {};
                if (a[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
                    for (s = oe.event.handlers.call(this, e, u), t = 0;
                        (r = s[t++]) && !e.isPropagationStopped();)
                        for (e.currentTarget = r.elem, o = 0;
                            (i = r.handlers[o++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, n = ((oe.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, a), void 0 !== n && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()));
                    return l.postDispatch && l.postDispatch.call(this, e), e.result
                }
            },
            handlers: function(e, t) {
                var n, i, r, o, s = [],
                    a = t.delegateCount,
                    u = e.target;
                if (a && u.nodeType && (!e.button || "click" !== e.type))
                    for (; u != this; u = u.parentNode || this)
                        if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
                            for (r = [], o = 0; a > o; o++) i = t[o], n = i.selector + " ", void 0 === r[n] && (r[n] = i.needsContext ? oe(n, this).index(u) >= 0 : oe.find(n, this, null, [u]).length), r[n] && r.push(i);
                            r.length && s.push({
                                elem: u,
                                handlers: r
                            })
                        }
                return a < t.length && s.push({
                    elem: this,
                    handlers: t.slice(a)
                }), s
            },
            fix: function(e) {
                if (e[oe.expando]) return e;
                var t, n, i, r = e.type,
                    o = e,
                    s = this.fixHooks[r];
                for (s || (this.fixHooks[r] = s = Re.test(r) ? this.mouseHooks : Ie.test(r) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, e = new oe.Event(o), t = i.length; t--;) n = i[t], e[n] = o[n];
                return e.target || (e.target = o.srcElement || ge), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, o) : e
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(e, t) {
                    var n, i, r, o = t.button,
                        s = t.fromElement;
                    return null == e.pageX && null != t.clientX && (i = e.target.ownerDocument || ge, r = i.documentElement, n = i.body, e.pageX = t.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? t.toElement : s), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== p() && this.focus) try {
                            return this.focus(), !1
                        }
                        catch (e) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === p() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return oe.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                    },
                    _default: function(e) {
                        return oe.nodeName(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            },
            simulate: function(e, t, n, i) {
                var r = oe.extend(new oe.Event, n, {
                    type: e,
                    isSimulated: !0,
                    originalEvent: {}
                });
                i ? oe.event.trigger(r, null, t) : oe.event.dispatch.call(t, r), r.isDefaultPrevented() && n.preventDefault()
            }
        }, oe.removeEvent = ge.removeEventListener ? function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n, !1)
        } : function(e, t, n) {
            var i = "on" + t;
            e.detachEvent && (typeof e[i] === xe && (e[i] = null), e.detachEvent(i, n))
        }, oe.Event = function(e, t) {
            return this instanceof oe.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? h : f) : this.type = e, t && oe.extend(this, t), this.timeStamp = e && e.timeStamp || oe.now(), void(this[oe.expando] = !0)) : new oe.Event(e, t)
        }, oe.Event.prototype = {
            isDefaultPrevented: f,
            isPropagationStopped: f,
            isImmediatePropagationStopped: f,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = h, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = h, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = h, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, oe.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, t) {
            oe.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, i = this,
                        r = e.relatedTarget,
                        o = e.handleObj;
                    return (!r || r !== i && !oe.contains(i, r)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), ie.submitBubbles || (oe.event.special.submit = {
            setup: function() {
                return oe.nodeName(this, "form") ? !1 : void oe.event.add(this, "click._submit keypress._submit", function(e) {
                    var t = e.target,
                        n = oe.nodeName(t, "input") || oe.nodeName(t, "button") ? t.form : void 0;
                    n && !oe._data(n, "submitBubbles") && (oe.event.add(n, "submit._submit", function(e) {
                        e._submit_bubble = !0
                    }), oe._data(n, "submitBubbles", !0))
                })
            },
            postDispatch: function(e) {
                e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && oe.event.simulate("submit", this.parentNode, e, !0))
            },
            teardown: function() {
                return oe.nodeName(this, "form") ? !1 : void oe.event.remove(this, "._submit")
            }
        }), ie.changeBubbles || (oe.event.special.change = {
            setup: function() {
                return Oe.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (oe.event.add(this, "propertychange._change", function(e) {
                    "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
                }), oe.event.add(this, "click._change", function(e) {
                    this._just_changed && !e.isTrigger && (this._just_changed = !1), oe.event.simulate("change", this, e, !0)
                })), !1) : void oe.event.add(this, "beforeactivate._change", function(e) {
                    var t = e.target;
                    Oe.test(t.nodeName) && !oe._data(t, "changeBubbles") && (oe.event.add(t, "change._change", function(e) {
                        !this.parentNode || e.isSimulated || e.isTrigger || oe.event.simulate("change", this.parentNode, e, !0)
                    }), oe._data(t, "changeBubbles", !0))
                })
            },
            handle: function(e) {
                var t = e.target;
                return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
            },
            teardown: function() {
                return oe.event.remove(this, "._change"), !Oe.test(this.nodeName)
            }
        }), ie.focusinBubbles || oe.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = function(e) {
                oe.event.simulate(t, e.target, oe.event.fix(e), !0)
            };
            oe.event.special[t] = {
                setup: function() {
                    var i = this.ownerDocument || this,
                        r = oe._data(i, t);
                    r || i.addEventListener(e, n, !0), oe._data(i, t, (r || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this,
                        r = oe._data(i, t) - 1;
                    r ? oe._data(i, t, r) : (i.removeEventListener(e, n, !0), oe._removeData(i, t))
                }
            }
        }), oe.fn.extend({
            on: function(e, t, n, i, r) {
                var o, s;
                if ("object" == typeof e) {
                    "string" != typeof t && (n = n || t, t = void 0);
                    for (o in e) this.on(o, t, n, e[o], r);
                    return this
                }
                if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), i === !1) i = f;
                else if (!i) return this;
                return 1 === r && (s = i, i = function(e) {
                    return oe().off(e), s.apply(this, arguments)
                }, i.guid = s.guid || (s.guid = oe.guid++)), this.each(function() {
                    oe.event.add(this, e, i, n, t)
                })
            },
            one: function(e, t, n, i) {
                return this.on(e, t, n, i, 1)
            },
            off: function(e, t, n) {
                var i, r;
                if (e && e.preventDefault && e.handleObj) return i = e.handleObj, oe(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof e) {
                    for (r in e) this.off(r, t, e[r]);
                    return this
                }
                return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = f), this.each(function() {
                    oe.event.remove(this, e, n, t)
                })
            },
            trigger: function(e, t) {
                return this.each(function() {
                    oe.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                return n ? oe.event.trigger(e, t, n, !0) : void 0
            }
        });
        var Be = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            qe = / jQuery\d+="(?:null|\d+)"/g,
            Fe = new RegExp("<(?:" + Be + ")[\\s/>]", "i"),
            Me = /^\s+/,
            Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            $e = /<([\w:]+)/,
            He = /<tbody/i,
            Qe = /<|&#?\w+;/,
            Ve = /<(?:script|style|link)/i,
            Ue = /checked\s*(?:[^=]|=\s*.checked.)/i,
            ze = /^$|\/(?:java|ecma)script/i,
            We = /^true\/(.*)/,
            Xe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            Ge = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: ie.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            },
            Je = g(ge),
            Ke = Je.appendChild(ge.createElement("div"));
        Ge.optgroup = Ge.option, Ge.tbody = Ge.tfoot = Ge.colgroup = Ge.caption = Ge.thead, Ge.th = Ge.td, oe.extend({
            clone: function(e, t, n) {
                var i, r, o, s, a, u = oe.contains(e.ownerDocument, e);
                if (ie.html5Clone || oe.isXMLDoc(e) || !Fe.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Ke.innerHTML = e.outerHTML, Ke.removeChild(o = Ke.firstChild)), !(ie.noCloneEvent && ie.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || oe.isXMLDoc(e)))
                    for (i = m(o), a = m(e), s = 0; null != (r = a[s]); ++s) i[s] && x(r, i[s]);
                if (t)
                    if (n)
                        for (a = a || m(e), i = i || m(o), s = 0; null != (r = a[s]); s++) w(r, i[s]);
                    else w(e, o);
                return i = m(o, "script"), i.length > 0 && T(i, !u && m(e, "script")), i = a = r = null, o
            },
            buildFragment: function(e, t, n, i) {
                for (var r, o, s, a, u, l, c, d = e.length, h = g(t), f = [], p = 0; d > p; p++)
                    if (o = e[p], o || 0 === o)
                        if ("object" === oe.type(o)) oe.merge(f, o.nodeType ? [o] : o);
                        else if (Qe.test(o)) {
                    for (a = a || h.appendChild(t.createElement("div")), u = ($e.exec(o) || ["", ""])[1].toLowerCase(), c = Ge[u] || Ge._default, a.innerHTML = c[1] + o.replace(Ne, "<$1></$2>") + c[2], r = c[0]; r--;) a = a.lastChild;
                    if (!ie.leadingWhitespace && Me.test(o) && f.push(t.createTextNode(Me.exec(o)[0])), !ie.tbody)
                        for (o = "table" !== u || He.test(o) ? "<table>" !== c[1] || He.test(o) ? 0 : a : a.firstChild, r = o && o.childNodes.length; r--;) oe.nodeName(l = o.childNodes[r], "tbody") && !l.childNodes.length && o.removeChild(l);
                    for (oe.merge(f, a.childNodes), a.textContent = ""; a.firstChild;) a.removeChild(a.firstChild);
                    a = h.lastChild
                }
                else f.push(t.createTextNode(o));
                for (a && h.removeChild(a), ie.appendChecked || oe.grep(m(f, "input"), _), p = 0; o = f[p++];)
                    if ((!i || -1 === oe.inArray(o, i)) && (s = oe.contains(o.ownerDocument, o), a = m(h.appendChild(o), "script"), s && T(a), n))
                        for (r = 0; o = a[r++];) ze.test(o.type || "") && n.push(o);
                return a = null, h
            },
            cleanData: function(e, t) {
                for (var n, i, r, o, s = 0, a = oe.expando, u = oe.cache, l = ie.deleteExpando, c = oe.event.special; null != (n = e[s]); s++)
                    if ((t || oe.acceptData(n)) && (r = n[a], o = r && u[r])) {
                        if (o.events)
                            for (i in o.events) c[i] ? oe.event.remove(n, i) : oe.removeEvent(n, i, o.handle);
                        u[r] && (delete u[r], l ? delete n[a] : typeof n.removeAttribute !== xe ? n.removeAttribute(a) : n[a] = null, G.push(r))
                    }
            }
        }), oe.fn.extend({
            text: function(e) {
                return ke(this, function(e) {
                    return void 0 === e ? oe.text(this) : this.empty().append((this[0] && this[0].ownerDocument || ge).createTextNode(e))
                }, null, e, arguments.length)
            },
            append: function() {
                return this.domManip(arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = v(this, e);
                        t.appendChild(e)
                    }
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = v(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return this.domManip(arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return this.domManip(arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            remove: function(e, t) {
                for (var n, i = e ? oe.filter(e, this) : this, r = 0; null != (n = i[r]); r++) t || 1 !== n.nodeType || oe.cleanData(m(n)), n.parentNode && (t && oe.contains(n.ownerDocument, n) && T(m(n, "script")), n.parentNode.removeChild(n));
                return this
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) {
                    for (1 === e.nodeType && oe.cleanData(m(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                    e.options && oe.nodeName(e, "select") && (e.options.length = 0)
                }
                return this
            },
            clone: function(e, t) {
                return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                    return oe.clone(this, e, t)
                })
            },
            html: function(e) {
                return ke(this, function(e) {
                    var t = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(qe, "") : void 0;
                    if (!("string" != typeof e || Ve.test(e) || !ie.htmlSerialize && Fe.test(e) || !ie.leadingWhitespace && Me.test(e) || Ge[($e.exec(e) || ["", ""])[1].toLowerCase()])) {
                        e = e.replace(Ne, "<$1></$2>");
                        try {
                            for (; i > n; n++) t = this[n] || {}, 1 === t.nodeType && (oe.cleanData(m(t, !1)), t.innerHTML = e);
                            t = 0
                        }
                        catch (r) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var e = arguments[0];
                return this.domManip(arguments, function(t) {
                    e = this.parentNode, oe.cleanData(m(this)), e && e.replaceChild(t, this)
                }), e && (e.length || e.nodeType) ? this : this.remove()
            },
            detach: function(e) {
                return this.remove(e, !0)
            },
            domManip: function(e, t) {
                e = K.apply([], e);
                var n, i, r, o, s, a, u = 0,
                    l = this.length,
                    c = this,
                    d = l - 1,
                    h = e[0],
                    f = oe.isFunction(h);
                if (f || l > 1 && "string" == typeof h && !ie.checkClone && Ue.test(h)) return this.each(function(n) {
                    var i = c.eq(n);
                    f && (e[0] = h.call(this, n, i.html())), i.domManip(e, t)
                });
                if (l && (a = oe.buildFragment(e, this[0].ownerDocument, !1, this), n = a.firstChild, 1 === a.childNodes.length && (a = n), n)) {
                    for (o = oe.map(m(a, "script"), y), r = o.length; l > u; u++) i = a, u !== d && (i = oe.clone(i, !0, !0), r && oe.merge(o, m(i, "script"))), t.call(this[u], i, u);
                    if (r)
                        for (s = o[o.length - 1].ownerDocument, oe.map(o, b), u = 0; r > u; u++) i = o[u], ze.test(i.type || "") && !oe._data(i, "globalEval") && oe.contains(s, i) && (i.src ? oe._evalUrl && oe._evalUrl(i.src) : oe.globalEval((i.text || i.textContent || i.innerHTML || "").replace(Xe, "")));
                    a = n = null
                }
                return this
            }
        }), oe.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            oe.fn[e] = function(e) {
                for (var n, i = 0, r = [], o = oe(e), s = o.length - 1; s >= i; i++) n = i === s ? this : this.clone(!0), oe(o[i])[t](n), Y.apply(r, n.get());
                return this.pushStack(r)
            }
        });
        var Ye, Ze = {};
        ! function() {
            var e;
            ie.shrinkWrapBlocks = function() {
                if (null != e) return e;
                e = !1;
                var t, n, i;
                return n = ge.getElementsByTagName("body")[0], n && n.style ? (t = ge.createElement("div"), i = ge.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), typeof t.style.zoom !== xe && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(ge.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(i), e) : void 0
            }
        }();
        var et = /^margin/,
            tt = new RegExp("^(" + Pe + ")(?!px)[a-z%]+$", "i"),
            nt, it, rt = /^(top|right|bottom|left)$/;
        e.getComputedStyle ? (nt = function(e) {
            return e.ownerDocument.defaultView.getComputedStyle(e, null)
        }, it = function(e, t, n) {
            var i, r, o, s, a = e.style;
            return n = n || nt(e), s = n ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== s || oe.contains(e.ownerDocument, e) || (s = oe.style(e, t)), tt.test(s) && et.test(t) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o)), void 0 === s ? s : s + ""
        }) : ge.documentElement.currentStyle && (nt = function(e) {
            return e.currentStyle
        }, it = function(e, t, n) {
            var i, r, o, s, a = e.style;
            return n = n || nt(e), s = n ? n[t] : void 0, null == s && a && a[t] && (s = a[t]), tt.test(s) && !rt.test(t) && (i = a.left, r = e.runtimeStyle, o = r && r.left, o && (r.left = e.currentStyle.left), a.left = "fontSize" === t ? "1em" : s, s = a.pixelLeft + "px", a.left = i, o && (r.left = o)), void 0 === s ? s : s + "" || "auto"
        }), ! function() {
            function t() {
                var t, n, i, r;
                n = ge.getElementsByTagName("body")[0], n && n.style && (t = ge.createElement("div"), i = ge.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o = s = !1, u = !0, e.getComputedStyle && (o = "1%" !== (e.getComputedStyle(t, null) || {}).top, s = "4px" === (e.getComputedStyle(t, null) || {
                    width: "4px"
                }).width, r = t.appendChild(ge.createElement("div")), r.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", r.style.marginRight = r.style.width = "0", t.style.width = "1px", u = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", r = t.getElementsByTagName("td"), r[0].style.cssText = "margin:0;border:0;padding:0;display:none", a = 0 === r[0].offsetHeight, a && (r[0].style.display = "", r[1].style.display = "none", a = 0 === r[0].offsetHeight), n.removeChild(i))
            }
            var n, i, r, o, s, a, u;
            n = ge.createElement("div"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r = n.getElementsByTagName("a")[0], (i = r && r.style) && (i.cssText = "float:left;opacity:.5", ie.opacity = "0.5" === i.opacity, ie.cssFloat = !!i.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", ie.clearCloneStyle = "content-box" === n.style.backgroundClip, ie.boxSizing = "" === i.boxSizing || "" === i.MozBoxSizing || "" === i.WebkitBoxSizing, oe.extend(ie, {
                reliableHiddenOffsets: function() {
                    return null == a && t(), a
                },
                boxSizingReliable: function() {
                    return null == s && t(), s
                },
                pixelPosition: function() {
                    return null == o && t(), o
                },
                reliableMarginRight: function() {
                    return null == u && t(), u
                }
            }))
        }(), oe.swap = function(e, t, n, i) {
            var r, o, s = {};
            for (o in t) s[o] = e.style[o], e.style[o] = t[o];
            r = n.apply(e, i || []);
            for (o in t) e.style[o] = s[o];
            return r
        };
        var ot = /alpha\([^)]*\)/i,
            st = /opacity\s*=\s*([^)]*)/,
            at = /^(none|table(?!-c[ea]).+)/,
            ut = new RegExp("^(" + Pe + ")(.*)$", "i"),
            lt = new RegExp("^([+-])=(" + Pe + ")", "i"),
            ct = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            dt = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            ht = ["Webkit", "O", "Moz", "ms"];
        oe.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = it(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": ie.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(e, t, n, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var r, o, s, a = oe.camelCase(t),
                        u = e.style;
                    if (t = oe.cssProps[a] || (oe.cssProps[a] = P(u, a)), s = oe.cssHooks[t] || oe.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : u[t];
                    if (o = typeof n, "string" === o && (r = lt.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(oe.css(e, t)), o = "number"), null != n && n === n && ("number" !== o || oe.cssNumber[a] || (n += "px"), ie.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), !(s && "set" in s && void 0 === (n = s.set(e, n, i))))) try {
                        u[t] = n
                    }
                    catch (l) {}
                }
            },
            css: function(e, t, n, i) {
                var r, o, s, a = oe.camelCase(t);
                return t = oe.cssProps[a] || (oe.cssProps[a] = P(e.style, a)), s = oe.cssHooks[t] || oe.cssHooks[a], s && "get" in s && (o = s.get(e, !0, n)), void 0 === o && (o = it(e, t, i)), "normal" === o && t in dt && (o = dt[t]), "" === n || n ? (r = parseFloat(o), n === !0 || oe.isNumeric(r) ? r || 0 : o) : o
            }
        }), oe.each(["height", "width"], function(e, t) {
            oe.cssHooks[t] = {
                get: function(e, n, i) {
                    return n ? at.test(oe.css(e, "display")) && 0 === e.offsetWidth ? oe.swap(e, ct, function() {
                        return D(e, t, i)
                    }) : D(e, t, i) : void 0
                },
                set: function(e, n, i) {
                    var r = i && nt(e);
                    return j(e, n, i ? k(e, t, i, ie.boxSizing && "border-box" === oe.css(e, "boxSizing", !1, r), r) : 0)
                }
            }
        }), ie.opacity || (oe.cssHooks.opacity = {
            get: function(e, t) {
                return st.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
            },
            set: function(e, t) {
                var n = e.style,
                    i = e.currentStyle,
                    r = oe.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                    o = i && i.filter || n.filter || "";
                n.zoom = 1, (t >= 1 || "" === t) && "" === oe.trim(o.replace(ot, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = ot.test(o) ? o.replace(ot, r) : o + " " + r)
            }
        }), oe.cssHooks.marginRight = E(ie.reliableMarginRight, function(e, t) {
            return t ? oe.swap(e, {
                display: "inline-block"
            }, it, [e, "marginRight"]) : void 0
        }), oe.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            oe.cssHooks[e + t] = {
                expand: function(n) {
                    for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) r[e + Ae[i] + t] = o[i] || o[i - 2] || o[0];
                    return r
                }
            }, et.test(e) || (oe.cssHooks[e + t].set = j)
        }), oe.fn.extend({
            css: function(e, t) {
                return ke(this, function(e, t, n) {
                    var i, r, o = {},
                        s = 0;
                    if (oe.isArray(t)) {
                        for (i = nt(e), r = t.length; r > s; s++) o[t[s]] = oe.css(e, t[s], !1, i);
                        return o
                    }
                    return void 0 !== n ? oe.style(e, t, n) : oe.css(e, t)
                }, e, t, arguments.length > 1)
            },
            show: function() {
                return A(this, !0)
            },
            hide: function() {
                return A(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    je(this) ? oe(this).show() : oe(this).hide()
                })
            }
        }), oe.Tween = O, O.prototype = {
            constructor: O,
            init: function(e, t, n, i, r, o) {
                this.elem = e, this.prop = n, this.easing = r || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (oe.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = O.propHooks[this.prop];
                return e && e.get ? e.get(this) : O.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = O.propHooks[this.prop];
                return this.pos = t = this.options.duration ? oe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : O.propHooks._default.set(this), this
            }
        }, O.prototype.init.prototype = O.prototype, O.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = oe.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
                },
                set: function(e) {
                    oe.fx.step[e.prop] ? oe.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[oe.cssProps[e.prop]] || oe.cssHooks[e.prop]) ? oe.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                }
            }
        }, O.propHooks.scrollTop = O.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, oe.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            }
        }, oe.fx = O.prototype.init, oe.fx.step = {};
        var ft, pt, gt = /^(?:toggle|show|hide)$/,
            mt = new RegExp("^(?:([+-])=|)(" + Pe + ")([a-z%]*)$", "i"),
            _t = /queueHooks$/,
            vt = [B],
            yt = {
                "*": [function(e, t) {
                    var n = this.createTween(e, t),
                        i = n.cur(),
                        r = mt.exec(t),
                        o = r && r[3] || (oe.cssNumber[e] ? "" : "px"),
                        s = (oe.cssNumber[e] || "px" !== o && +i) && mt.exec(oe.css(n.elem, e)),
                        a = 1,
                        u = 20;
                    if (s && s[3] !== o) {
                        o = o || s[3], r = r || [], s = +i || 1;
                        do a = a || ".5", s /= a, oe.style(n.elem, e, s + o); while (a !== (a = n.cur() / i) && 1 !== a && --u)
                    }
                    return r && (s = n.start = +s || +i || 0, n.unit = o, n.end = r[1] ? s + (r[1] + 1) * r[2] : +r[2]), n
                }]
            };
        oe.Animation = oe.extend(F, {
                tweener: function(e, t) {
                    oe.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                    for (var n, i = 0, r = e.length; r > i; i++) n = e[i], yt[n] = yt[n] || [], yt[n].unshift(t)
                },
                prefilter: function(e, t) {
                    t ? vt.unshift(e) : vt.push(e)
                }
            }), oe.speed = function(e, t, n) {
                var i = e && "object" == typeof e ? oe.extend({}, e) : {
                    complete: n || !n && t || oe.isFunction(e) && e,
                    duration: e,
                    easing: n && t || t && !oe.isFunction(t) && t
                };
                return i.duration = oe.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in oe.fx.speeds ? oe.fx.speeds[i.duration] : oe.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                    oe.isFunction(i.old) && i.old.call(this), i.queue && oe.dequeue(this, i.queue)
                }, i
            }, oe.fn.extend({
                fadeTo: function(e, t, n, i) {
                    return this.filter(je).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, i)
                },
                animate: function(e, t, n, i) {
                    var r = oe.isEmptyObject(e),
                        o = oe.speed(t, n, i),
                        s = function() {
                            var t = F(this, oe.extend({}, e), o);
                            (r || oe._data(this, "finish")) && t.stop(!0)
                        };
                    return s.finish = s, r || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
                },
                stop: function(e, t, n) {
                    var i = function(e) {
                        var t = e.stop;
                        delete e.stop, t(n)
                    };
                    return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                        var t = !0,
                            r = null != e && e + "queueHooks",
                            o = oe.timers,
                            s = oe._data(this);
                        if (r) s[r] && s[r].stop && i(s[r]);
                        else
                            for (r in s) s[r] && s[r].stop && _t.test(r) && i(s[r]);
                        for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
                        (t || !n) && oe.dequeue(this, e)
                    })
                },
                finish: function(e) {
                    return e !== !1 && (e = e || "fx"), this.each(function() {
                        var t, n = oe._data(this),
                            i = n[e + "queue"],
                            r = n[e + "queueHooks"],
                            o = oe.timers,
                            s = i ? i.length : 0;
                        for (n.finish = !0, oe.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                        for (t = 0; s > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
                        delete n.finish
                    })
                }
            }), oe.each(["toggle", "show", "hide"], function(e, t) {
                var n = oe.fn[t];
                oe.fn[t] = function(e, i, r) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(R(t, !0), e, i, r)
                }
            }), oe.each({
                slideDown: R("show"),
                slideUp: R("hide"),
                slideToggle: R("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(e, t) {
                oe.fn[e] = function(e, n, i) {
                    return this.animate(t, e, n, i)
                }
            }), oe.timers = [], oe.fx.tick = function() {
                var e, t = oe.timers,
                    n = 0;
                for (ft = oe.now(); n < t.length; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
                t.length || oe.fx.stop(), ft = void 0
            }, oe.fx.timer = function(e) {
                oe.timers.push(e), e() ? oe.fx.start() : oe.timers.pop()
            }, oe.fx.interval = 13, oe.fx.start = function() {
                pt || (pt = setInterval(oe.fx.tick, oe.fx.interval))
            }, oe.fx.stop = function() {
                clearInterval(pt), pt = null
            }, oe.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, oe.fn.delay = function(e, t) {
                return e = oe.fx ? oe.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                    var i = setTimeout(t, e);
                    n.stop = function() {
                        clearTimeout(i)
                    }
                })
            },
            function() {
                var e, t, n, i, r;
                t = ge.createElement("div"), t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = t.getElementsByTagName("a")[0], n = ge.createElement("select"), r = n.appendChild(ge.createElement("option")), e = t.getElementsByTagName("input")[0], i.style.cssText = "top:1px", ie.getSetAttribute = "t" !== t.className, ie.style = /top/.test(i.getAttribute("style")), ie.hrefNormalized = "/a" === i.getAttribute("href"), ie.checkOn = !!e.value, ie.optSelected = r.selected, ie.enctype = !!ge.createElement("form").enctype, n.disabled = !0, ie.optDisabled = !r.disabled, e = ge.createElement("input"), e.setAttribute("value", ""), ie.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), ie.radioValue = "t" === e.value
            }();
        var bt = /\r/g;
        oe.fn.extend({
            val: function(e) {
                var t, n, i, r = this[0];
                return arguments.length ? (i = oe.isFunction(e), this.each(function(n) {
                    var r;
                    1 === this.nodeType && (r = i ? e.call(this, n, oe(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : oe.isArray(r) && (r = oe.map(r, function(e) {
                        return null == e ? "" : e + ""
                    })), t = oe.valHooks[this.type] || oe.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
                })) : r ? (t = oe.valHooks[r.type] || oe.valHooks[r.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(bt, "") : null == n ? "" : n)) : void 0
            }
        }), oe.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = oe.find.attr(e, "value");
                        return null != t ? t : oe.trim(oe.text(e))
                    }
                },
                select: {
                    get: function(e) {
                        for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || 0 > r, s = o ? null : [], a = o ? r + 1 : i.length, u = 0 > r ? a : o ? r : 0; a > u; u++)
                            if (n = i[u], !(!n.selected && u !== r || (ie.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && oe.nodeName(n.parentNode, "optgroup"))) {
                                if (t = oe(n).val(), o) return t;
                                s.push(t)
                            }
                        return s
                    },
                    set: function(e, t) {
                        for (var n, i, r = e.options, o = oe.makeArray(t), s = r.length; s--;)
                            if (i = r[s], oe.inArray(oe.valHooks.option.get(i), o) >= 0) try {
                                i.selected = n = !0
                            }
                            catch (a) {
                                i.scrollHeight
                            }
                            else i.selected = !1;
                        return n || (e.selectedIndex = -1), r
                    }
                }
            }
        }), oe.each(["radio", "checkbox"], function() {
            oe.valHooks[this] = {
                set: function(e, t) {
                    return oe.isArray(t) ? e.checked = oe.inArray(oe(e).val(), t) >= 0 : void 0
                }
            }, ie.checkOn || (oe.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        });
        var Tt, wt, xt = oe.expr.attrHandle,
            St = /^(?:checked|selected)$/i,
            Ct = ie.getSetAttribute,
            Et = ie.input;
        oe.fn.extend({
            attr: function(e, t) {
                return ke(this, oe.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    oe.removeAttr(this, e)
                })
            }
        }), oe.extend({
            attr: function(e, t, n) {
                var i, r, o = e.nodeType;
                return e && 3 !== o && 8 !== o && 2 !== o ? typeof e.getAttribute === xe ? oe.prop(e, t, n) : (1 === o && oe.isXMLDoc(e) || (t = t.toLowerCase(), i = oe.attrHooks[t] || (oe.expr.match.bool.test(t) ? wt : Tt)), void 0 === n ? i && "get" in i && null !== (r = i.get(e, t)) ? r : (r = oe.find.attr(e, t), null == r ? void 0 : r) : null !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : void oe.removeAttr(e, t)) : void 0
            },
            removeAttr: function(e, t) {
                var n, i, r = 0,
                    o = t && t.match(be);
                if (o && 1 === e.nodeType)
                    for (; n = o[r++];) i = oe.propFix[n] || n, oe.expr.match.bool.test(n) ? Et && Ct || !St.test(n) ? e[i] = !1 : e[oe.camelCase("default-" + n)] = e[i] = !1 : oe.attr(e, n, ""), e.removeAttribute(Ct ? n : i)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!ie.radioValue && "radio" === t && oe.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            }
        }), wt = {
            set: function(e, t, n) {
                return t === !1 ? oe.removeAttr(e, n) : Et && Ct || !St.test(n) ? e.setAttribute(!Ct && oe.propFix[n] || n, n) : e[oe.camelCase("default-" + n)] = e[n] = !0, n
            }
        }, oe.each(oe.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var n = xt[t] || oe.find.attr;
            xt[t] = Et && Ct || !St.test(t) ? function(e, t, i) {
                var r, o;
                return i || (o = xt[t], xt[t] = r, r = null != n(e, t, i) ? t.toLowerCase() : null, xt[t] = o), r
            } : function(e, t, n) {
                return n ? void 0 : e[oe.camelCase("default-" + t)] ? t.toLowerCase() : null
            }
        }), Et && Ct || (oe.attrHooks.value = {
            set: function(e, t, n) {
                return oe.nodeName(e, "input") ? void(e.defaultValue = t) : Tt && Tt.set(e, t, n)
            }
        }), Ct || (Tt = {
            set: function(e, t, n) {
                var i = e.getAttributeNode(n);
                return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
            }
        }, xt.id = xt.name = xt.coords = function(e, t, n) {
            var i;
            return n ? void 0 : (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null
        }, oe.valHooks.button = {
            get: function(e, t) {
                var n = e.getAttributeNode(t);
                return n && n.specified ? n.value : void 0
            },
            set: Tt.set
        }, oe.attrHooks.contenteditable = {
            set: function(e, t, n) {
                Tt.set(e, "" === t ? !1 : t, n)
            }
        }, oe.each(["width", "height"], function(e, t) {
            oe.attrHooks[t] = {
                set: function(e, n) {
                    return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
                }
            }
        })), ie.style || (oe.attrHooks.style = {
            get: function(e) {
                return e.style.cssText || void 0
            },
            set: function(e, t) {
                return e.style.cssText = t + ""
            }
        });
        var Pt = /^(?:input|select|textarea|button|object)$/i,
            At = /^(?:a|area)$/i;
        oe.fn.extend({
            prop: function(e, t) {
                return ke(this, oe.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return e = oe.propFix[e] || e, this.each(function() {
                    try {
                        this[e] = void 0, delete this[e]
                    }
                    catch (t) {}
                })
            }
        }), oe.extend({
            propFix: {
                "for": "htmlFor",
                "class": "className"
            },
            prop: function(e, t, n) {
                var i, r, o, s = e.nodeType;
                return e && 3 !== s && 8 !== s && 2 !== s ? (o = 1 !== s || !oe.isXMLDoc(e), o && (t = oe.propFix[t] || t, r = oe.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]) : void 0
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = oe.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : Pt.test(e.nodeName) || At.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            }
        }), ie.hrefNormalized || oe.each(["href", "src"], function(e, t) {
            oe.propHooks[t] = {
                get: function(e) {
                    return e.getAttribute(t, 4)
                }
            }
        }), ie.optSelected || (oe.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
            }
        }), oe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            oe.propFix[this.toLowerCase()] = this
        }), ie.enctype || (oe.propFix.enctype = "encoding");
        var jt = /[\t\r\n\f]/g;
        oe.fn.extend({
            addClass: function(e) {
                var t, n, i, r, o, s, a = 0,
                    u = this.length,
                    l = "string" == typeof e && e;
                if (oe.isFunction(e)) return this.each(function(t) {
                    oe(this).addClass(e.call(this, t, this.className))
                });
                if (l)
                    for (t = (e || "").match(be) || []; u > a; a++)
                        if (n = this[a], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(jt, " ") : " ")) {
                            for (o = 0; r = t[o++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                            s = oe.trim(i), n.className !== s && (n.className = s)
                        }
                return this
            },
            removeClass: function(e) {
                var t, n, i, r, o, s, a = 0,
                    u = this.length,
                    l = 0 === arguments.length || "string" == typeof e && e;
                if (oe.isFunction(e)) return this.each(function(t) {
                    oe(this).removeClass(e.call(this, t, this.className))
                });
                if (l)
                    for (t = (e || "").match(be) || []; u > a; a++)
                        if (n = this[a], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(jt, " ") : "")) {
                            for (o = 0; r = t[o++];)
                                for (; i.indexOf(" " + r + " ") >= 0;) i = i.replace(" " + r + " ", " ");
                            s = e ? oe.trim(i) : "", n.className !== s && (n.className = s)
                        }
                return this
            },
            toggleClass: function(e, t) {
                var n = typeof e;
                return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(oe.isFunction(e) ? function(n) {
                    oe(this).toggleClass(e.call(this, n, this.className, t), t)
                } : function() {
                    if ("string" === n)
                        for (var t, i = 0, r = oe(this), o = e.match(be) || []; t = o[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                    else(n === xe || "boolean" === n) && (this.className && oe._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : oe._data(this, "__className__") || "")
                })
            },
            hasClass: function(e) {
                for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)
                    if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(jt, " ").indexOf(t) >= 0) return !0;
                return !1
            }
        }), oe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
            oe.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }), oe.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            },
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, i) {
                return this.on(t, e, n, i)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        });
        var kt = oe.now(),
            Dt = /\?/,
            Ot = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        oe.parseJSON = function(t) {
            if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
            var n, i = null,
                r = oe.trim(t + "");
            return r && !oe.trim(r.replace(Ot, function(e, t, r, o) {
                return n && t && (i = 0), 0 === i ? e : (n = r || t, i += !o - !r, "")
            })) ? Function("return " + r)() : oe.error("Invalid JSON: " + t)
        }, oe.parseXML = function(t) {
            var n, i;
            if (!t || "string" != typeof t) return null;
            try {
                e.DOMParser ? (i = new DOMParser, n = i.parseFromString(t, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
            }
            catch (r) {
                n = void 0
            }
            return n && n.documentElement && !n.getElementsByTagName("parsererror").length || oe.error("Invalid XML: " + t), n
        };
        var It, Rt, Lt = /#.*$/,
            Bt = /([?&])_=[^&]*/,
            qt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            Ft = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Mt = /^(?:GET|HEAD)$/,
            Nt = /^\/\//,
            $t = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            Ht = {},
            Qt = {},
            Vt = "*/".concat("*");
        try {
            Rt = location.href
        }
        catch (Ut) {
            Rt = ge.createElement("a"), Rt.href = "", Rt = Rt.href
        }
        It = $t.exec(Rt.toLowerCase()) || [], oe.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Rt,
                type: "GET",
                isLocal: Ft.test(It[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Vt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": oe.parseJSON,
                    "text xml": oe.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? H(H(e, oe.ajaxSettings), t) : H(oe.ajaxSettings, e)
            },
            ajaxPrefilter: M(Ht),
            ajaxTransport: M(Qt),
            ajax: function(e, t) {
                function n(e, t, n, i) {
                    var r, c, _, v, b, w = t;
                    2 !== y && (y = 2, a && clearTimeout(a), l = void 0, s = i || "", T.readyState = e > 0 ? 4 : 0, r = e >= 200 && 300 > e || 304 === e, n && (v = Q(d, T, n)), v = V(d, v, T, r), r ? (d.ifModified && (b = T.getResponseHeader("Last-Modified"), b && (oe.lastModified[o] = b), b = T.getResponseHeader("etag"), b && (oe.etag[o] = b)), 204 === e || "HEAD" === d.type ? w = "nocontent" : 304 === e ? w = "notmodified" : (w = v.state, c = v.data, _ = v.error, r = !_)) : (_ = w, (e || !w) && (w = "error", 0 > e && (e = 0))), T.status = e, T.statusText = (t || w) + "", r ? p.resolveWith(h, [c, w, T]) : p.rejectWith(h, [T, w, _]), T.statusCode(m), m = void 0, u && f.trigger(r ? "ajaxSuccess" : "ajaxError", [T, d, r ? c : _]), g.fireWith(h, [T, w]), u && (f.trigger("ajaxComplete", [T, d]), --oe.active || oe.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (t = e, e = void 0), t = t || {};
                var i, r, o, s, a, u, l, c, d = oe.ajaxSetup({}, t),
                    h = d.context || d,
                    f = d.context && (h.nodeType || h.jquery) ? oe(h) : oe.event,
                    p = oe.Deferred(),
                    g = oe.Callbacks("once memory"),
                    m = d.statusCode || {},
                    _ = {},
                    v = {},
                    y = 0,
                    b = "canceled",
                    T = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (2 === y) {
                                if (!c)
                                    for (c = {}; t = qt.exec(s);) c[t[1].toLowerCase()] = t[2];
                                t = c[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return 2 === y ? s : null
                        },
                        setRequestHeader: function(e, t) {
                            var n = e.toLowerCase();
                            return y || (e = v[n] = v[n] || e, _[e] = t), this
                        },
                        overrideMimeType: function(e) {
                            return y || (d.mimeType = e), this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (2 > y)
                                    for (t in e) m[t] = [m[t], e[t]];
                                else T.always(e[T.status]);
                            return this
                        },
                        abort: function(e) {
                            var t = e || b;
                            return l && l.abort(t), n(0, t), this
                        }
                    };
                if (p.promise(T).complete = g.add, T.success = T.done, T.error = T.fail, d.url = ((e || d.url || Rt) + "").replace(Lt, "").replace(Nt, It[1] + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = oe.trim(d.dataType || "*").toLowerCase().match(be) || [""], null == d.crossDomain && (i = $t.exec(d.url.toLowerCase()), d.crossDomain = !(!i || i[1] === It[1] && i[2] === It[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (It[3] || ("http:" === It[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = oe.param(d.data, d.traditional)), N(Ht, d, t, T), 2 === y) return T;
                u = d.global, u && 0 === oe.active++ && oe.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Mt.test(d.type), o = d.url, d.hasContent || (d.data && (o = d.url += (Dt.test(o) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = Bt.test(o) ? o.replace(Bt, "$1_=" + kt++) : o + (Dt.test(o) ? "&" : "?") + "_=" + kt++)), d.ifModified && (oe.lastModified[o] && T.setRequestHeader("If-Modified-Since", oe.lastModified[o]), oe.etag[o] && T.setRequestHeader("If-None-Match", oe.etag[o])), (d.data && d.hasContent && d.contentType !== !1 || t.contentType) && T.setRequestHeader("Content-Type", d.contentType), T.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Vt + "; q=0.01" : "") : d.accepts["*"]);
                for (r in d.headers) T.setRequestHeader(r, d.headers[r]);
                if (d.beforeSend && (d.beforeSend.call(h, T, d) === !1 || 2 === y)) return T.abort();
                b = "abort";
                for (r in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) T[r](d[r]);
                if (l = N(Qt, d, t, T)) {
                    T.readyState = 1, u && f.trigger("ajaxSend", [T, d]), d.async && d.timeout > 0 && (a = setTimeout(function() {
                        T.abort("timeout")
                    }, d.timeout));
                    try {
                        y = 1, l.send(_, n)
                    }
                    catch (w) {
                        if (!(2 > y)) throw w;
                        n(-1, w)
                    }
                }
                else n(-1, "No Transport");
                return T
            },
            getJSON: function(e, t, n) {
                return oe.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return oe.get(e, void 0, t, "script")
            }
        }), oe.each(["get", "post"], function(e, t) {
            oe[t] = function(e, n, i, r) {
                return oe.isFunction(n) && (r = r || i, i = n, n = void 0), oe.ajax({
                    url: e,
                    type: t,
                    dataType: r,
                    data: n,
                    success: i
                })
            }
        }), oe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            oe.fn[t] = function(e) {
                return this.on(t, e)
            }
        }), oe._evalUrl = function(e) {
            return oe.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }, oe.fn.extend({
            wrapAll: function(e) {
                if (oe.isFunction(e)) return this.each(function(t) {
                    oe(this).wrapAll(e.call(this, t))
                });
                if (this[0]) {
                    var t = oe(e, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                        for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                        return e
                    }).append(this)
                }
                return this
            },
            wrapInner: function(e) {
                return this.each(oe.isFunction(e) ? function(t) {
                    oe(this).wrapInner(e.call(this, t))
                } : function() {
                    var t = oe(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = oe.isFunction(e);
                return this.each(function(n) {
                    oe(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    oe.nodeName(this, "body") || oe(this).replaceWith(this.childNodes)
                }).end()
            }
        }), oe.expr.filters.hidden = function(e) {
            return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !ie.reliableHiddenOffsets() && "none" === (e.style && e.style.display || oe.css(e, "display"))
        }, oe.expr.filters.visible = function(e) {
            return !oe.expr.filters.hidden(e)
        };
        var zt = /%20/g,
            Wt = /\[\]$/,
            Xt = /\r?\n/g,
            Gt = /^(?:submit|button|image|reset|file)$/i,
            Jt = /^(?:input|select|textarea|keygen)/i;
        oe.param = function(e, t) {
            var n, i = [],
                r = function(e, t) {
                    t = oe.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
            if (void 0 === t && (t = oe.ajaxSettings && oe.ajaxSettings.traditional), oe.isArray(e) || e.jquery && !oe.isPlainObject(e)) oe.each(e, function() {
                r(this.name, this.value)
            });
            else
                for (n in e) U(n, e[n], t, r);
            return i.join("&").replace(zt, "+")
        }, oe.fn.extend({
            serialize: function() {
                return oe.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = oe.prop(this, "elements");
                    return e ? oe.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !oe(this).is(":disabled") && Jt.test(this.nodeName) && !Gt.test(e) && (this.checked || !De.test(e))
                }).map(function(e, t) {
                    var n = oe(this).val();
                    return null == n ? null : oe.isArray(n) ? oe.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(Xt, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(Xt, "\r\n")
                    }
                }).get()
            }
        }), oe.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
            return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && z() || W()
        } : z;
        var Kt = 0,
            Yt = {},
            Zt = oe.ajaxSettings.xhr();
        e.ActiveXObject && oe(e).on("unload", function() {
            for (var e in Yt) Yt[e](void 0, !0)
        }), ie.cors = !!Zt && "withCredentials" in Zt, Zt = ie.ajax = !!Zt, Zt && oe.ajaxTransport(function(e) {
            if (!e.crossDomain || ie.cors) {
                var t;
                return {
                    send: function(n, i) {
                        var r, o = e.xhr(),
                            s = ++Kt;
                        if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                            for (r in e.xhrFields) o[r] = e.xhrFields[r];
                        e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                        for (r in n) void 0 !== n[r] && o.setRequestHeader(r, n[r] + "");
                        o.send(e.hasContent && e.data || null), t = function(n, r) {
                            var a, u, l;
                            if (t && (r || 4 === o.readyState))
                                if (delete Yt[s], t = void 0, o.onreadystatechange = oe.noop, r) 4 !== o.readyState && o.abort();
                                else {
                                    l = {}, a = o.status, "string" == typeof o.responseText && (l.text = o.responseText);
                                    try {
                                        u = o.statusText
                                    }
                                    catch (c) {
                                        u = ""
                                    }
                                    a || !e.isLocal || e.crossDomain ? 1223 === a && (a = 204) : a = l.text ? 200 : 404
                                }
                            l && i(a, u, l, o.getAllResponseHeaders())
                        }, e.async ? 4 === o.readyState ? setTimeout(t) : o.onreadystatechange = Yt[s] = t : t()
                    },
                    abort: function() {
                        t && t(void 0, !0)
                    }
                }
            }
        }), oe.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(e) {
                    return oe.globalEval(e), e
                }
            }
        }), oe.ajaxPrefilter("script", function(e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
        }), oe.ajaxTransport("script", function(e) {
            if (e.crossDomain) {
                var t, n = ge.head || oe("head")[0] || ge.documentElement;
                return {
                    send: function(i, r) {
                        t = ge.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
                            (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || r(200, "success"))
                        }, n.insertBefore(t, n.firstChild)
                    },
                    abort: function() {
                        t && t.onload(void 0, !0)
                    }
                }
            }
        });
        var en = [],
            tn = /(=)\?(?=&|$)|\?\?/;
        oe.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = en.pop() || oe.expando + "_" + kt++;
                return this[e] = !0, e
            }
        }), oe.ajaxPrefilter("json jsonp", function(t, n, i) {
            var r, o, s, a = t.jsonp !== !1 && (tn.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && tn.test(t.data) && "data");
            return a || "jsonp" === t.dataTypes[0] ? (r = t.jsonpCallback = oe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(tn, "$1" + r) : t.jsonp !== !1 && (t.url += (Dt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r),
                t.converters["script json"] = function() {
                    return s || oe.error(r + " was not called"), s[0]
                }, t.dataTypes[0] = "json", o = e[r], e[r] = function() {
                    s = arguments
                }, i.always(function() {
                    e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, en.push(r)), s && oe.isFunction(o) && o(s[0]), s = o = void 0
                }), "script") : void 0
        }), oe.parseHTML = function(e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || ge;
            var i = he.exec(e),
                r = !n && [];
            return i ? [t.createElement(i[1])] : (i = oe.buildFragment([e], t, r), r && r.length && oe(r).remove(), oe.merge([], i.childNodes))
        };
        var nn = oe.fn.load;
        oe.fn.load = function(e, t, n) {
            if ("string" != typeof e && nn) return nn.apply(this, arguments);
            var i, r, o, s = this,
                a = e.indexOf(" ");
            return a >= 0 && (i = oe.trim(e.slice(a, e.length)), e = e.slice(0, a)), oe.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), s.length > 0 && oe.ajax({
                url: e,
                type: o,
                dataType: "html",
                data: t
            }).done(function(e) {
                r = arguments, s.html(i ? oe("<div>").append(oe.parseHTML(e)).find(i) : e)
            }).complete(n && function(e, t) {
                s.each(n, r || [e.responseText, t, e])
            }), this
        }, oe.expr.filters.animated = function(e) {
            return oe.grep(oe.timers, function(t) {
                return e === t.elem
            }).length
        };
        var rn = e.document.documentElement;
        oe.offset = {
            setOffset: function(e, t, n) {
                var i, r, o, s, a, u, l, c = oe.css(e, "position"),
                    d = oe(e),
                    h = {};
                "static" === c && (e.style.position = "relative"), a = d.offset(), o = oe.css(e, "top"), u = oe.css(e, "left"), l = ("absolute" === c || "fixed" === c) && oe.inArray("auto", [o, u]) > -1, l ? (i = d.position(), s = i.top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(u) || 0), oe.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (h.top = t.top - a.top + s), null != t.left && (h.left = t.left - a.left + r), "using" in t ? t.using.call(e, h) : d.css(h)
            }
        }, oe.fn.extend({
            offset: function(e) {
                if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                    oe.offset.setOffset(this, e, t)
                });
                var t, n, i = {
                        top: 0,
                        left: 0
                    },
                    r = this[0],
                    o = r && r.ownerDocument;
                return o ? (t = o.documentElement, oe.contains(t, r) ? (typeof r.getBoundingClientRect !== xe && (i = r.getBoundingClientRect()), n = X(o), {
                    top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                    left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
                }) : i) : void 0
            },
            position: function() {
                if (this[0]) {
                    var e, t, n = {
                            top: 0,
                            left: 0
                        },
                        i = this[0];
                    return "fixed" === oe.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), oe.nodeName(e[0], "html") || (n = e.offset()), n.top += oe.css(e[0], "borderTopWidth", !0), n.left += oe.css(e[0], "borderLeftWidth", !0)), {
                        top: t.top - n.top - oe.css(i, "marginTop", !0),
                        left: t.left - n.left - oe.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent || rn; e && !oe.nodeName(e, "html") && "static" === oe.css(e, "position");) e = e.offsetParent;
                    return e || rn
                })
            }
        }), oe.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, t) {
            var n = /Y/.test(t);
            oe.fn[e] = function(i) {
                return ke(this, function(e, i, r) {
                    var o = X(e);
                    return void 0 === r ? o ? t in o ? o[t] : o.document.documentElement[i] : e[i] : void(o ? o.scrollTo(n ? oe(o).scrollLeft() : r, n ? r : oe(o).scrollTop()) : e[i] = r)
                }, e, i, arguments.length, null)
            }
        }), oe.each(["top", "left"], function(e, t) {
            oe.cssHooks[t] = E(ie.pixelPosition, function(e, n) {
                return n ? (n = it(e, t), tt.test(n) ? oe(e).position()[t] + "px" : n) : void 0
            })
        }), oe.each({
            Height: "height",
            Width: "width"
        }, function(e, t) {
            oe.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, function(n, i) {
                oe.fn[i] = function(i, r) {
                    var o = arguments.length && (n || "boolean" != typeof i),
                        s = n || (i === !0 || r === !0 ? "margin" : "border");
                    return ke(this, function(t, n, i) {
                        var r;
                        return oe.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === i ? oe.css(t, n, s) : oe.style(t, n, i, s)
                    }, t, o ? i : void 0, o, null)
                }
            })
        }), oe.fn.size = function() {
            return this.length
        }, oe.fn.andSelf = oe.fn.addBack, "function" == typeof qrequire.define && qrequire.define.amd && qrequire.define("jquery", [], function() {
            return oe
        });
        var on = e.jQuery,
            sn = e.$;
        return oe.noConflict = function(t) {
            return e.$ === oe && (e.$ = sn), t && e.jQuery === oe && (e.jQuery = on), oe
        }, typeof t === xe && (e.jQuery = e.$ = oe), oe
    }), jQuery.noConflict(), qrequire.define("dom", ["jquery"], function($) {
        "use strict";
        jQuery.noConflict();
        var e = "QWatchTimer";
        return $.fn.dirtyWatch = function(t, n, i) {
            var r = i || 100;
            return this.each(function() {
                if (!$(this).data(e)) {
                    var i = this,
                        o = i[t],
                        s = setInterval(function() {
                            i[t] !== o && (n.call(i, o, i[t]), o = i[t])
                        }, r);
                    $(i).addClass(e).data(e, s)
                }
            })
        }, $.fn.dirtyUnwatch = function() {
            return this.each(function() {
                var t = $(this).removeClass(e).data(e);
                $(this).removeData(e), clearInterval(t)
            })
        }, $.fn.dirtyUnwatchAll = function() {
            return this.each(function() {
                $(this).find("." + e).dirtyUnwatch()
            })
        }, $
    }), qrequire.define("core/javascriptMobileSE", ["dom"], function($) {
        "use strict";
        return {
            initializeScrollers: function() {
                var e = $(".Skin #Questions .QuestionOuter");
                $(".SkinInner").css({
                    width: "100%"
                }), e.each(function(e, t) {
                    var n = $(t),
                        i = $(t).find(".QuestionBody");
                    if (i.length) {
                        navigator.userAgent.match(/Apple/i) && !navigator.userAgent.match(/Android/i) && (n.css("maxWidth", "100%"), i.css("maxWidth", "none"));
                        var r = $('<div class="ScrollIndicator">');
                        i.children().width() > n.width() && (n.append(r).css("position", "relative"), r.css({
                            position: "absolute",
                            right: "0px",
                            zIndex: 1
                        }).click(function() {
                            $(this).hide(), n.animate({
                                scrollLeft: "+100"
                            }, 500), i.animate({
                                scrollLeft: "+100"
                            }, 500)
                        })), n.on("touchmove", function() {
                            var e = $(this);
                            (e.scrollLeft() > 0 || i.scrollLeft() > 0) && r.hide()
                        })
                    }
                })
            }
        }
    }),
    function(e, t) {
        function n() {}

        function i(e, t, n) {
            t || (t = 0);
            var i = e.length,
                r = i - t >= (n || q);
            if (r)
                for (var o = {}, s = t - 1; ++s < i;) {
                    var a = e[s] + "";
                    (ne.call(o, a) ? o[a] : o[a] = []).push(e[s])
                }
            return function(n) {
                if (r) {
                    var i = n + "";
                    return ne.call(o, i) && indexOf(o[i], n) > -1
                }
                return indexOf(e, n, t) > -1
            }
        }

        function r(e) {
            return e.charCodeAt(0)
        }

        function o(e, t) {
            var n = e.index,
                i = t.index;
            if (e = e.criteria, t = t.criteria, e !== t) {
                if (e > t || "undefined" == typeof e) return 1;
                if (t > e || "undefined" == typeof t) return -1
            }
            return i > n ? -1 : 1
        }

        function s(e, t, n, i) {
            function r() {
                var u = arguments,
                    l = s ? this : t;
                if (o || (e = t[a]), n.length && (u = u.length ? (u = f(u), i ? u.concat(n) : n.concat(u)) : n), this instanceof r) {
                    h.prototype = e.prototype, l = new h, h.prototype = null;
                    var c = e.apply(l, u);
                    return b(c) ? c : l
                }
                return e.apply(l, u)
            }
            var o = y(e),
                s = !n,
                a = t;
            return s && (n = t), o || (t = e), r
        }

        function a(e, t, n) {
            if (null == e) return E;
            var i = typeof e;
            if ("function" != i) {
                if ("object" != i) return function(t) {
                    return t[e]
                };
                var r = Ve(e);
                return function(t) {
                    for (var n = r.length, i = !1; n-- && (i = v(t[r[n]], e[r[n]], B)););
                    return i
                }
            }
            return "undefined" != typeof t ? 1 === n ? function(n) {
                return e.call(t, n)
            } : 2 === n ? function(n, i) {
                return e.call(t, n, i)
            } : 4 === n ? function(n, i, r, o) {
                return e.call(t, n, i, r, o)
            } : function(n, i, r) {
                return e.call(t, n, i, r)
            } : e
        }

        function u() {
            for (var e = {
                    hasDontEnumBug: Ee,
                    hasEnumPrototype: Pe,
                    isKeysFast: Ce,
                    nonEnumArgs: Ae,
                    noCharByIndex: De,
                    shadowed: K,
                    arrays: "isArray(iterable)",
                    bottom: "",
                    loop: "",
                    top: "",
                    useHas: !0
                }, t, n = 0; t = arguments[n]; n++)
                for (var i in t) e[i] = t[i];
            var r = e.args;
            e.firstArg = /^[^,]+/.exec(r)[0];
            var o = Function("createCallback, hasOwnProperty, isArguments, isArray, isString, objectTypes, nativeKeys", "return function(" + r + ") {\n" + Be(e) + "\n}");
            return o(a, ne, g, Qe, T, Re, le)
        }

        function l(e) {
            return "\\" + Le[e]
        }

        function c(e) {
            return Ue[e]
        }

        function d(e) {
            return "function" != typeof e.toString && "string" == typeof(e + "")
        }

        function h() {}

        function f(e, t, n) {
            t || (t = 0), "undefined" == typeof n && (n = e ? e.length : 0);
            for (var i = -1, r = n - t || 0, o = Array(0 > r ? 0 : r); ++i < r;) o[i] = e[t + i];
            return o
        }

        function p(e) {
            return ze[e]
        }

        function g(e) {
            return re.call(e) == fe
        }

        function m(e) {
            var t = !1;
            if (!e || "object" != typeof e || g(e)) return t;
            var n = e.constructor;
            return !y(n) && (!Oe || !d(e)) || n instanceof n ? ($e(e, function(e, n) {
                t = n
            }), t === !1 || ne.call(e, t)) : t
        }

        function _(e) {
            var t = [];
            return He(e, function(e, n) {
                t.push(n)
            }), t
        }

        function v(e, t, n, i, r, o) {
            var s = n === B;
            if (n && !s) {
                n = "undefined" == typeof i ? n : a(n, i, 2);
                var u = n(e, t);
                if ("undefined" != typeof u) return !!u
            }
            if (e === t) return 0 !== e || 1 / e == 1 / t;
            var l = typeof e,
                c = typeof t;
            if (e === e && (!e || "function" != l && "object" != l) && (!t || "function" != c && "object" != c)) return !1;
            if (null == e || null == t) return e === t;
            var h = re.call(e),
                f = re.call(t);
            if (h == fe && (h = ye), f == fe && (f = ye), h != f) return !1;
            switch (h) {
                case ge:
                case me:
                    return +e == +t;
                case ve:
                    return e != +e ? t != +t : 0 == e ? 1 / e == 1 / t : e == +t;
                case be:
                case Te:
                    return e == t + ""
            }
            var p = h == pe;
            if (!p) {
                if (e.__wrapped__ || t.__wrapped__) return v(e.__wrapped__ || e, t.__wrapped__ || t, n, i, r, o);
                if (h != ye || Oe && (d(e) || d(t))) return !1;
                var m = !je && g(e) ? Object : e.constructor,
                    _ = !je && g(t) ? Object : t.constructor;
                if (m != _ && !(y(m) && m instanceof m && y(_) && _ instanceof _)) return !1
            }
            r || (r = []), o || (o = []);
            for (var b = r.length; b--;)
                if (r[b] == e) return o[b] == t;
            var T = 0;
            if (u = !0, r.push(e), o.push(t), p) {
                if (b = e.length, T = t.length, u = T == e.length, !u && !s) return u;
                for (; T--;) {
                    var w = b,
                        x = t[T];
                    if (s)
                        for (; w-- && !(u = v(e[w], x, n, i, r, o)););
                    else if (!(u = v(e[T], x, n, i, r, o))) break
                }
                return u
            }
            return $e(t, function(t, s, a) {
                return ne.call(a, s) ? (T++, u = ne.call(e, s) && v(e[s], t, n, i, r, o)) : void 0
            }), u && !s && $e(e, function(e, t, n) {
                return ne.call(n, t) ? u = --T > -1 : void 0
            }), u
        }

        function y(e) {
            return "function" == typeof e
        }

        function b(e) {
            return e ? Re[typeof e] : !1
        }

        function T(e) {
            return "string" == typeof e || re.call(e) == Te
        }

        function w(e, t, n) {
            var i = {};
            if ("function" != typeof t)
                for (var r = 0, o = ee.apply(I, arguments), s = b(e) ? o.length : 0; ++r < s;) {
                    var u = o[r];
                    u in e && (i[u] = e[u])
                }
            else t = a(t, n), $e(e, function(e, n, r) {
                t(e, n, r) && (i[n] = e)
            });
            return i
        }

        function x(e, t, n) {
            if (t && "undefined" == typeof n && Qe(e))
                for (var i = -1, r = e.length; ++i < r && t(e[i], i, e) !== !1;);
            else Ne(e, t, n);
            return e
        }

        function S(e, t, n) {
            var i = -1,
                r = e ? e.length : 0,
                o = Array("number" == typeof r ? r : 0);
            if (t = a(t, n), Qe(e))
                for (; ++i < r;) o[i] = t(e[i], i, e);
            else Ne(e, function(e, n, r) {
                o[++i] = t(e, n, r)
            });
            return o
        }

        function C(e) {
            var t, n;
            return function() {
                return t ? n : (t = !0, n = e.apply(this, arguments), e = null, n)
            }
        }

        function E(e) {
            return e
        }

        function P(e) {
            var t = ++L;
            return (null == e ? "" : e + "") + t
        }

        function A() {
            return this.__wrapped__ + ""
        }

        function j() {
            return this.__wrapped__
        }
        var k = "object" == typeof exports && exports,
            D = "object" == typeof module && module && module.exports == k && module,
            O = "object" == typeof global && global;
        O.global === O && (e = O);
        var I = [],
            R = {},
            L = 0,
            B = R,
            q = 30,
            F = e._,
            M = /&(?:amp|lt|gt|quot|#39);/g,
            N = /\b__p \+= '';/g,
            H = /\b(__p \+=) '' \+/g,
            Q = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
            V = /\w*$/,
            U = RegExp("^" + (R.valueOf + "").replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/valueOf|for [^\]]+/g, ".+?") + "$"),
            z = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
            W = /<%=([\s\S]+?)%>/g,
            X = /($^)/,
            G = /[&<>"']/g,
            J = /['\n\r\t\u2028\u2029\\]/g,
            K = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
            Y = 0,
            Z = Math.ceil,
            ee = I.concat,
            te = Math.floor,
            ne = R.hasOwnProperty,
            ie = I.push,
            re = R.toString,
            oe = U.test(oe = f.bind) && oe,
            se = U.test(se = Array.isArray) && se,
            ae = e.isFinite,
            ue = e.isNaN,
            le = U.test(le = Object.keys) && le,
            ce = Math.max,
            de = Math.min,
            he = Math.random,
            fe = "[object Arguments]",
            pe = "[object Array]",
            ge = "[object Boolean]",
            me = "[object Date]",
            _e = "[object Function]",
            ve = "[object Number]",
            ye = "[object Object]",
            be = "[object RegExp]",
            Te = "[object String]",
            we = !!e.attachEvent,
            xe = oe && !/\n|true/.test(oe + we),
            Se = oe && !xe,
            Ce = le && (we || xe),
            Ee, Pe, Ae = !0;
        ! function() {
            function e() {
                this.x = 1
            }
            var t = [];
            e.prototype = {
                valueOf: 1,
                y: 1
            };
            for (var n in new e) t.push(n);
            for (n in arguments) Ae = !n;
            Ee = !/valueOf/.test(t), Pe = e.propertyIsEnumerable("prototype")
        }(1);
        var je = arguments.constructor == Object,
            ke = !g(arguments),
            De = "x" [0] + Object("x")[0] != "xx";
        try {
            var Oe = re.call(document) == ye && !({
                toString: 0
            } + "")
        }
        catch (Ie) {}
        var Re = {
                "boolean": !1,
                "function": !0,
                object: !0,
                number: !1,
                string: !1,
                undefined: !1
            },
            Le = {
                "\\": "\\",
                "'": "'",
                "\n": "n",
                "\r": "r",
                "	": "t",
                " ": "u2028",
                " ": "u2029"
            },
            Be = function(e) {
                var t = "var index, iterable = " + e.firstArg + ", result = iterable;\nif (!iterable) return result;\n" + e.top + ";\n";
                if (e.arrays ? (t += "var length = iterable.length; index = -1;\nif (" + e.arrays + ") {  ", e.noCharByIndex && (t += "\n  if (isString(iterable)) {\n    iterable = iterable.split('')\n  }  "), t += "\n  while (++index < length) {\n    " + e.loop + "\n  }\n}\nelse {  ") : e.nonEnumArgs && (t += "\n  var length = iterable.length; index = -1;\n  if (length && isArguments(iterable)) {\n    while (++index < length) {\n      index += '';\n      " + e.loop + "\n    }\n  } else {  "), e.hasEnumPrototype && (t += "\n  var skipProto = typeof iterable == 'function';\n  "), e.isKeysFast && e.useHas ? (t += "\n  var ownIndex = -1,\n      ownProps = objectTypes[typeof iterable] ? nativeKeys(iterable) : [],\n      length = ownProps.length;\n\n  while (++ownIndex < length) {\n    index = ownProps[ownIndex];\n    ", e.hasEnumPrototype && (t += "if (!(skipProto && index == 'prototype')) {\n  "), t += e.loop + "", e.hasEnumPrototype && (t += "}\n"), t += "  }  ") : (t += "\n  for (index in iterable) {", (e.hasEnumPrototype || e.useHas) && (t += "\n    if (", e.hasEnumPrototype && (t += "!(skipProto && index == 'prototype')"), e.hasEnumPrototype && e.useHas && (t += " && "), e.useHas && (t += "hasOwnProperty.call(iterable, index)"), t += ") {    "), t += e.loop + ";    ", (e.hasEnumPrototype || e.useHas) && (t += "\n    }"), t += "\n  }  "), e.hasDontEnumBug) {
                    t += "\n\n  var ctor = iterable.constructor;\n    ";
                    for (var n = 0; 7 > n; n++) t += "\n  index = '" + e.shadowed[n] + "';\n  if (", "constructor" == e.shadowed[n] && (t += "!(ctor && ctor.prototype === iterable) && "), t += "hasOwnProperty.call(iterable, index)) {\n    " + e.loop + "\n  }    "
                }
                return (e.arrays || e.nonEnumArgs) && (t += "\n}"), t += e.bottom + ";\nreturn result"
            },
            qe = {
                args: "object, source, guard",
                top: "var args = arguments,\n    argsIndex = 0,\n    argsLength = typeof guard == 'number' ? 2 : args.length;\nwhile (++argsIndex < argsLength) {\n  iterable = args[argsIndex];\n  if (iterable && objectTypes[typeof iterable]) {",
                loop: "if (typeof result[index] == 'undefined') result[index] = iterable[index]",
                bottom: "  }\n}"
            },
            Fe = {
                args: "collection, callback, thisArg",
                top: "callback = callback && typeof thisArg == 'undefined' ? callback : createCallback(callback, thisArg)",
                arrays: "typeof length == 'number'",
                loop: "if (callback(iterable[index], index, collection) === false) return result"
            },
            Me = {
                top: "if (!objectTypes[typeof iterable]) return result;\n" + Fe.top,
                arrays: !1
            },
            Ne = u(Fe);
        ke && (g = function(e) {
            return e ? ne.call(e, "callee") : !1
        });
        var $e = u(Fe, Me, {
                useHas: !1
            }),
            He = u(Fe, Me),
            Qe = se || function(e) {
                return je && e instanceof Array || re.call(e) == pe
            },
            Ve = le ? function(e) {
                return b(e) ? Pe && "function" == typeof e || Ae && e.length && g(e) ? _(e) : le(e) : []
            } : _,
            Ue = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
            },
            ze = {
                "&amp;": "&",
                "&lt;": "<",
                "&gt;": ">",
                "&quot;": '"',
                "&#x27;": "'"
            };
        y(/x/) && (y = function(e) {
            return e instanceof Function || re.call(e) == _e
        }), xe && D && "function" == typeof setImmediate && (defer = bind(setImmediate, e)), n.forEach = x, n.forIn = $e, n.forOwn = He, n.keys = Ve, n.map = S, n.once = C, n.pick = w, n.collect = S, n.each = x, n.identity = E, n.isArguments = g, n.isArray = Qe, n.isEqual = v, n.isFunction = y, n.isObject = b, n.isString = T, n.uniqueId = P, n.VERSION = "1.0.1", "function" == typeof qrequire.define && "object" == typeof qrequire.define.amd && qrequire.define.amd && qrequire.define("lodash", [], function() {
            return n
        })
    }(this), qrequire.define("classes/Events", ["dejavu", "lodash", "log"], function(e, t, n) {
        "use strict";
        var i = [],
            r = i.slice,
            o = /\s+/,
            s = function(e, t, n, i) {
                if (!n) return !0;
                if ("object" == typeof n)
                    for (var r in n) e[t].apply(e, [r, n[r]].concat(i));
                else {
                    if (!o.test(n)) return !0;
                    for (var s = n.split(o), a = 0, u = s.length; u > a; a++) e[t].apply(e, [s[a]].concat(i))
                }
            },
            a = function(e, t) {
                var n, i = -1,
                    r = e.length;
                switch (t.length) {
                    case 0:
                        for (; ++i < r;)(n = e[i]).callback.call(n.ctx);
                        return;
                    case 1:
                        for (; ++i < r;)(n = e[i]).callback.call(n.ctx, t[0]);
                        return;
                    case 2:
                        for (; ++i < r;)(n = e[i]).callback.call(n.ctx, t[0], t[1]);
                        return;
                    case 3:
                        for (; ++i < r;)(n = e[i]).callback.call(n.ctx, t[0], t[1], t[2]);
                        return;
                    default:
                        for (; ++i < r;)(n = e[i]).callback.apply(n.ctx, t)
                }
            };
        return e.Class.declare({
            $name: "QEvents",
            __events: {},
            __listeners: {},
            __listenerId: null,
            __lastSequenceNum: 0,
            $finals: {
                on: function(e, t, n) {
                    var i = this.__lastSequenceNum;
                    if (this.__lastSequenceNum++, !s(this, "on", e, [t, n]) || !t) return this;
                    this.__events = this.__events || {};
                    var r = this.__events[e] || (this.__events[e] = []);
                    return r.push({
                        callback: t,
                        context: n,
                        ctx: n || this,
                        seq: i,
                        all: "all" == e
                    }), this
                },
                once: function(e, n, i) {
                    if (!s(this, "once", e, [n, i]) || !n) return this;
                    var r = this,
                        o = t.once(function() {
                            r.off(e, o), n.apply(this, arguments)
                        });
                    return o._callback = n, this.on(e, o, i), this
                },
                off: function(e, n, i) {
                    var r, o, a, u, l, c, d, h;
                    if (!this.__events || !s(this, "off", e, [n, i])) return this;
                    if (!e && !n && !i) return this.__events = {}, this;
                    for (u = e ? [e] : t.keys(this.__events), l = 0, c = u.length; c > l; l++)
                        if (e = u[l], r = this.__events[e]) {
                            if (a = [], n || i)
                                for (d = 0, h = r.length; h > d; d++) o = r[d], (n && n !== o.callback && n !== o.callback._callback || i && i !== o.context) && a.push(o);
                            this.__events[e] = a
                        }
                    return this
                },
                _trigger: function(e) {
                    if (!this.__events) return this;
                    var t = r.call(arguments, 1);
                    if (!s(this, "trigger", e, t)) return this;
                    var n = this.__events[e] || [];
                    n = n.concat(this.__events.all || []), n.sort(function(e, t) {
                        return e.seq - t.seq
                    });
                    for (var i = n.length, o = [], u = null, l = 0; i > l; l++)(null === u || n[l].all !== u) && (o.length > 0 && (u ? a(o, arguments) : a(o, t)), o = [], u = n[l].all), o.push(n[l]);
                    return o.length > 0 && (u ? a(o, arguments) : a(o, t)), this
                },
                _listenTo: function(e, n, i) {
                    var r = this.__listeners || (this.__listeners = {}),
                        o = e.__listenerId || (e.__listenerId = t.uniqueId("l"));
                    return r[o] = e, e.on(n, "object" == typeof n ? this : i, this), this
                },
                _stopListening: function(e, t, n) {
                    var i = this.__listeners;
                    if (i) {
                        if (e) e.off(t, "object" == typeof t ? this : n, this), t || n || delete i[e.__listenerId];
                        else {
                            "object" == typeof t && (n = this);
                            for (var r in i) i[r].off(t, n, this);
                            this.__listeners = {}
                        }
                        return this
                    }
                }
            }
        }, !0)
    }),
    function() {
        "use strict";

        function e() {
            var e = {
                    "&": "&#38;",
                    "<": "&#60;",
                    ">": "&#62;",
                    '"': "&#34;",
                    "'": "&#39;",
                    "/": "&#47;"
                },
                t = /&(?!#?\w+;)|<|>|"|'|\//g;
            return function() {
                return this ? this.replace(t, function(t) {
                    return e[t] || t
                }) : this
            }
        }

        function t(e, n, i) {
            return ("string" == typeof n ? n : n.toString()).replace(e.define || o, function(t, n, r, o) {
                return 0 === n.indexOf("def.") && (n = n.substring(4)), n in i || (":" === r ? (e.defineParams && o.replace(e.defineParams, function(e, t, r) {
                    i[n] = {
                        arg: t,
                        text: r
                    }
                }), n in i || (i[n] = o)) : new Function("def", "def['" + n + "']=" + o)(i)), ""
            }).replace(e.use || o, function(n, r) {
                e.useParams && (r = r.replace(e.useParams, function(e, t, n, r) {
                    if (i[n] && i[n].arg && r) {
                        var o = (n + ":" + r).replace(/'|\\/g, "_");
                        return i.__exp = i.__exp || {}, i.__exp[o] = i[n].text.replace(new RegExp("(^|[^\\w$])" + i[n].arg + "([^\\w$])", "g"), "$1" + r + "$2"), t + "def.__exp['" + o + "']"
                    }
                }));
                var o = new Function("def", "return " + r)(i);
                return o ? t(e, o, i) : o
            })
        }

        function n(e) {
            return e.replace(/\\('|\\)/g, "$1").replace(/[\r\t\n]/g, " ")
        }
        var i = {
            version: "1.0.0",
            templateSettings: {
                evaluate: /\{\{([\s\S]+?\}?)\}\}/g,
                interpolate: /\{\{=([\s\S]+?)\}\}/g,
                encode: /\{\{!([\s\S]+?)\}\}/g,
                use: /\{\{#([\s\S]+?)\}\}/g,
                useParams: /(^|[^\w$])def(?:\.|\[[\'\"])([\w$\.]+)(?:[\'\"]\])?\s*\:\s*([\w$\.]+|\"[^\"]+\"|\'[^\']+\'|\{[^\}]+\})/g,
                define: /\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g,
                defineParams: /^\s*([\w$]+):([\s\S]+)/,
                conditional: /\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,
                iterate: /\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,
                varname: "it",
                strip: !0,
                append: !0,
                selfcontained: !1
            },
            template: void 0,
            compile: void 0
        };
        qrequire.define("doT", [], function() {
            return i
        }), String.prototype.encodeHTML = e();
        var r = {
                append: {
                    start: "'+(",
                    end: ")+'",
                    endencode: "||'').toString().encodeHTML()+'"
                },
                split: {
                    start: "';out+=(",
                    end: ");out+='",
                    endencode: "||'').toString().encodeHTML();out+='"
                }
            },
            o = /$^/;
        i.template = function(s, a, u) {
            a = a || i.templateSettings;
            var l = a.append ? r.append : r.split,
                c, d = 0,
                h, f = a.use || a.define ? t(a, s, u || {}) : s;
            f = ("var out='" + (a.strip ? f.replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g, " ").replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g, "") : f).replace(/'|\\/g, "\\$&").replace(a.interpolate || o, function(e, t) {
                return l.start + n(t) + l.end
            }).replace(a.encode || o, function(e, t) {
                return c = !0, l.start + n(t) + l.endencode
            }).replace(a.conditional || o, function(e, t, i) {
                return t ? i ? "';}else if(" + n(i) + "){out+='" : "';}else{out+='" : i ? "';if(" + n(i) + "){out+='" : "';}out+='"
            }).replace(a.iterate || o, function(e, t, i, r) {
                return t ? (d += 1, h = r || "i" + d, t = n(t), "';var arr" + d + "=" + t + ";if(arr" + d + "){var " + i + "," + h + "=-1,l" + d + "=arr" + d + ".length-1;while(" + h + "<l" + d + "){" + i + "=arr" + d + "[" + h + "+=1];out+='") : "';} } out+='"
            }).replace(a.evaluate || o, function(e, t) {
                return "';" + n(t) + "out+='"
            }) + "';return out;").replace(/\n/g, "\\n").replace(/\t/g, "\\t").replace(/\r/g, "\\r").replace(/(\s|;|\}|^|\{)out\+='';/g, "$1").replace(/\+''/g, "").replace(/(\s|;|\}|^|\{)out\+=''\+/g, "$1out+="), c && a.selfcontained && (f = "String.prototype.encodeHTML=(" + e.toString() + "());" + f);
            try {
                return new Function(a.varname, f)
            }
            catch (p) {
                throw "undefined" != typeof console && console.log("Could not create a template function: " + f), p
            }
        }, i.compile = function(e, t) {
            return i.template(e, null, t)
        }
    }(), qrequire.define("text", [], function() {
        "use strict";
        return {
            load: function(e, t, n, i) {
                t([e], function(e) {
                    n(e)
                })
            }
        }
    }), qrequire.define("templates/SurveyEngineBody.html", [], function() {
        return '\n<div class="JFE" {{? it.pageID }} id="{{=it.pageID}}"{{?}}>\n	<div class="JFEContent SkinV2 webkit CSS3">\n		<form id="Page" name="Page" class="Page ActivePage"></form>\n	</div>\n</div>\n'
    }), qrequire.define("classes/Canvas", ["bluebird", "dom", "utils", "doT", "log", "text!templates/SurveyEngineBody.html", "dejavu"], function(e, $, t, n, i, r, o) {
        "use strict";
        return o.FinalClass.declare({
            $name: "Canvas",
            __formID: "",
            __page: null,
            initialize: function(e) {
                this.__page = e
            },
            create: function() {
                return this.__page ? this.createInner() : e.reject(new Error("Canvas missing Form Options."))
            },
            createInner: function() {
                return this.__page.loadHTMLHeader(), this.__loadFormEngineBody(), this.__loadSkinHTML()
            }.$bound(),
            __loadSkinHTML: function() {
                return this.__page.adapter.getSkinHTML().then(function(e) {
                    this.__compileTemplate(e)
                }.$bind(this))
            }.$bound(),
            __escapeCurlyBraces: function(e) {
                return e.replace(/(\}|\{)/g, '{~"$1"~}')
            }.$bound(),
            __compileTemplate: function(e) {
                var i = {
                    LanguageSelectorList: "",
                    SurveyDescription: ""
                };
                for (var r in i) {
                    var o = function() {
                            return i[r]
                        },
                        s = new RegExp("\\{~" + r + "~\\}", "g");
                    e = e.replace(s, o)
                }
                e.indexOf("{~LanguageSelector~}") < 0 && (e = e.replace("{~Question~}", "{~LanguageSelector~}{~Question~}")), e = e.replace("{~Question~}", '{~Question~}<div id="debug"></div>'), this.__page.setTplFn(n.template(e, t.merge(n.templateSettings, {
                    interpolate: /\{~(Header|Question|Buttons|LanguageSelector|ProgressBar|Footer|"{"|"}")~\}/g,
                    varname: "Header, Question, Buttons, LanguageSelector, ProgressBar, Footer",
                    strip: !1
                })))
            }.$bound(),
            setRTLCSS: function(e) {
                this.__page.changeElementAttribute("rtlStyles", e, "href"), $("body").addClass("RTL")
            }.$bound(),
            clearRTLCSS: function() {
                this.__page.changeElementAttribute("rtlStyles", "", "href"), $("body").removeClass("RTL")
            }.$bound(),
            __loadFormEngineBody: function() {
                var e = n.template(r),
                    t = e({
                        pageID: this.__page.id()
                    }),
                    i = $("#" + this.__page.id());
                i && 0 !== i.length && i.remove(), $("body").append(t)
            }
        }, !0)
    }), qrequire.define("classes/questions/hierarchy", [], function() {
        "use strict";

        function e(t, n, i, r) {
            function o(e, t) {
                for (var n = e.length - 1; n >= 0; n--)
                    if (e[n].flags & t) return e[n];
                return e[0]
            }
            for (var s in t) {
                var a = t[s];
                "self" !== s && ("object" == typeof a ? (i.push({
                    name: s,
                    flags: a.self
                }), r[s] = o(i, n).name, e(a, n, i, r), i.pop()) : a & n ? r[s] = s : r[s] = o(i, n).name)
            }
            return r
        }
        var t = {
                None: 0,
                QuestionClass: 1,
                HTMLRenderer: 2,
                HTMLTemplate: 4,
                Bundle: 8,
                Scoring: 16
            },
            n = t.QuestionClass,
            i = t.HTMLRenderer,
            r = t.HTMLTemplate,
            o = t.Bundle,
            s = n | i | r,
            a = t.Scoring,
            u = t.None,
            l = {};
        for (var c in t) l[t[c]] = c;
        var d = {
            BaseQuestion: {
                self: s | o | a,
                DB: {
                    self: n | i | o,
                    DBTB: r,
                    DBPTB: r,
                    DBGRBWTXB: {
                        self: n | r,
                        DBGRBWOTXB: r
                    },
                    DBGRBWTXBURL: {
                        self: n | r,
                        DBGRBWOTXBURL: r
                    },
                    DBFLB: {
                        self: n | r
                    }
                },
                FileUpload: {
                    self: s | o,
                    FileUploadFileUpload: u,
                    "FileUploadFileUpload-offline": s
                },
                TESA: {
                    self: n | i | o | a,
                    TEML: {
                        self: n | r,
                        TEESTB: r
                    },
                    TEPW: {
                        self: r,
                        Password: n
                    },
                    TESL: r
                },
                MetaBrowser: {
                    self: s | o
                },
                ChoiceBasedQuestion: {
                    self: n | i,
                    TEFORM: s | o,
                    CS: {
                        self: n | i | o,
                        CSHRTX: r,
                        CSVRTX: r,
                        CSVRTLTX: i | r,
                        CSHSLIDER: s
                    },
                    PGR: {
                        self: s | o,
                        PGRDragAndDropColumns: u,
                        PGRDragAndDropNoColumns: u,
                        PGRRecipientDefinedRecipientNamesGroups: u,
                        PGRRecipientDefinedRecipientDefinesGroups: u,
                        PGRPredefined: u
                    },
                    MC: {
                        self: n | i | o | a,
                        MCSA: {
                            self: n | i,
                            MCDL: i | r,
                            MCSB: i | r,
                            MCSACOLTX: n | r,
                            MCSAVRTX: {
                                self: r,
                                MCSAVRTXOT: u
                            },
                            MCSAHRTX: {
                                self: n | r,
                                MCNPS: n | r,
                                MCSAHRTXOT: u
                            }
                        },
                        MCMA: {
                            self: n,
                            MCMSB: i | r,
                            MCMACB: {
                                self: i,
                                MCMACOLTX: {
                                    self: n | r,
                                    MCMACOLGR: u,
                                    MCMACOLTXOT: u
                                },
                                MCMAHRTX: {
                                    self: n | r,
                                    MCMAHRTXOT: u
                                },
                                MCMAVRTX: r
                            }
                        }
                    },
                    SBS: {
                        self: s | o | a,
                        SBSSBSMatrix: u,
                        SBSSBSMatrixSingleAnswer: u,
                        SBSSBSMatrixTX: u
                    },
                    Matrix: {
                        self: n | i | o,
                        MatrixSA: {
                            self: n | i | a,
                            MatrixBipolar: s,
                            MatrixLikertDL: {
                                self: i | r,
                                MatrixProfileDL: i
                            },
                            MatrixLikertSingleAnswer: {
                                self: i | r,
                                MatrixProfileSingleAnswer: r | i,
                                MatrixMaxDiff: s
                            },
                            MatrixLikertDND: i | r,
                            HotSpot: {
                                self: s | o,
                                HotSpotLikeDislike: u,
                                HotSpotOnOff: u
                            }
                        },
                        MatrixCSWOTB: {
                            self: s,
                            MatrixCSWTB: s,
                            MatrixCSWVTB: s
                        },
                        MatrixLikertMultipleAnswer: {
                            self: s | a,
                            MatrixProfileMultipleAnswer: r | i
                        },
                        MatrixTE: {
                            self: s,
                            MatrixTEShort: u,
                            MatrixTEMedium: u,
                            MatrixTELong: u,
                            MatrixTEEssay: u
                        }
                    },
                    Slider: {
                        self: n | a,
                        SliderHSLIDER: {
                            self: s | o,
                            "SliderHSLIDER-mobile": r
                        }
                    },
                    RO: {
                        self: n | i | o,
                        RODND: {
                            self: i | r,
                            RODNDTX: u
                        },
                        RORB: {
                            self: i | r,
                            RORBTX: u
                        },
                        ROTB: {
                            self: i,
                            ROVRTX: r,
                            ROHRTX: r
                        },
                        ROSB: i | r
                    }
                },
                Timing: {
                    self: s | o,
                    TimingI: u,
                    TimingD: u,
                    TimingPageTimer: u
                },
                DDDL: s | o,
                Captcha: {
                    self: s | o,
                    CaptchaCaptcha: u
                }
            }
        };
        return {
            flags: t,
            questionMap: e(d, t.QuestionClass, [], {}),
            htmlRendererMap: e(d, t.HTMLRenderer, [], {}),
            htmlTemplateMap: e(d, t.HTMLTemplate, [], {}),
            bundleMap: e(d, t.Bundle, [], {}),
            scoringMap: e(d, t.Scoring, [], {}),
            getImplementedItem: function(e, t, n) {
                var i;
                switch (t) {
                    case this.flags.QuestionClass:
                        i = this.questionMap;
                        break;
                    case this.flags.HTMLRenderer:
                        i = this.htmlRendererMap;
                        break;
                    case this.flags.HTMLTemplate:
                        i = this.htmlTemplateMap;
                        break;
                    case this.flags.Scoring:
                        i = this.scoringMap;
                        break;
                    default:
                        throw new Error("Unknown item type: " + t)
                }
                var r = e + "-" + n;
                return n && i[r] == r ? n + "/" + e : i[e]
            }
        }
    }), qrequire.define("factories/questionRendererFactory", ["log", "bluebird", "load", "classes/questions/hierarchy"], function(e, t, n, i) {
        "use strict";

        function r(e, t) {
            var n = t.Type + t.Selector;
            t.SubSelector && (n += t.SubSelector);
            var r;
            s && (r = "offline");
            var a = i.getImplementedItem(n, i.flags.HTMLRenderer, r);
            return "renderers/" + e + "/questions/" + a + o[e]
        }
        var o = {
                html: "RendererHTML"
            },
            s;
        return {
            setIsOffline: function(e) {
                s = !!e
            },
            create: function(i, o) {
                var s = r(i.getRendererType(), o),
                    a = null;
                return o.Children && (a = this.createMultiple(i, o.Children)), t.all([n([s]), a]).spread(function(e, t) {
                    return new e[0](o, t)
                }, function(t) {
                    return e.error("Failed to load needed renderer class (" + s + ") for " + o.Type + o.Selector, t), t
                })
            },
            createMultiple: function(e, n) {
                var i = [];
                for (var r in n) i.push(this.create(e, n[r]));
                return t.all(i).spread(function() {
                    for (var e = {}, t = 0; t < arguments.length; t++) e[arguments[t].id()] = arguments[t];
                    return e
                })
            }
        }
    }),
    function(e) {
        "object" == typeof exports ? module.exports = e() : "function" == typeof qrequire.define && qrequire.define.amd ? qrequire.define("watch", e) : (window.WatchJS = e(), window.watch = window.WatchJS.watch, window.unwatch = window.WatchJS.unwatch, window.callWatchers = window.WatchJS.callWatchers)
    }(function() {
        var e = {
                noMore: !1
            },
            t, n, i, r = function(e, t, n, i) {
                var r = e[t],
                    o = function() {
                        return n.apply(e, [r])
                    },
                    s = function(t) {
                        return r = i.apply(e, [t])
                    },
                    a = function(n) {
                        if (event.propertyName == t) {
                            e.detachEvent("onpropertychange", a);
                            var i = s(e[t]);
                            e[t] = o, e[t].toString = o, "undefined" != typeof e.attachEvent ? e.attachEvent("onpropertychange", a) : e.addEventListener("onpropertychange", a)
                        }
                    };
                e[t] = o, e[t].toString = o, "undefined" != typeof e.attachEvent ? e.attachEvent("onpropertychange", a) : e.addEventListener("onpropertychange", a)
            },
            o = function(e) {
                try {
                    return e instanceof HTMLElement
                }
                catch (t) {
                    return "object" == typeof e && 1 === e.nodeType && "object" == typeof e.style && "object" == typeof e.ownerDocument
                }
            },
            s = function(e) {
                var t = {};
                return e && "[object Function]" == t.toString.call(e)
            },
            a = function(e) {
                return e % 1 === 0
            },
            u = function(e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            },
            l = function() {
                return Object.defineProperty || Object.prototype.__defineGetter__
            },
            c = function(e, t, n, i) {
                try {
                    Object.defineProperty(e, t, {
                        get: n,
                        set: i,
                        enumerable: !0,
                        configurable: !0
                    })
                }
                catch (s) {
                    try {
                        Object.prototype.__defineGetter__.call(e, t, n), Object.prototype.__defineSetter__.call(e, t, i)
                    }
                    catch (a) {
                        if (!o(e)) throw "watchJS error: browser not supported :/";
                        r(e, t, n, i)
                    }
                }
            },
            d = function(e, t, n) {
                try {
                    Object.defineProperty(e, t, {
                        enumerable: !1,
                        configurable: !0,
                        writable: !1,
                        value: n
                    })
                }
                catch (i) {
                    e[t] = n
                }
            },
            h = function() {
                s(arguments[1]) ? f.apply(this, arguments) : u(arguments[1]) ? p.apply(this, arguments) : g.apply(this, arguments)
            },
            f = function(e, t, n) {
                if (!(e instanceof String) && (e instanceof Object || u(e))) {
                    var i = [];
                    if (u(e))
                        for (var r = 0; r < e.length; r++) i.push(r);
                    else
                        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && e[o] && i.push(o);
                    p(e, i, t, n)
                }
            },
            p = function(e, t, n, i) {
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && t[r] && g(e, t[r], n, i)
            },
            g = function(e, n, i, r) {
                s(e[n]) || (null != e[n] && (void 0 === r || r > 0) && (void 0 !== r && r--, f(e[n], i, r)), t(e, n, i))
            },
            m = function() {
                s(arguments[1]) ? _.apply(this, arguments) : u(arguments[1]) ? v.apply(this, arguments) : n.apply(this, arguments)
            },
            _ = function(e, t) {
                if (!(e instanceof String) && (e instanceof Object || u(e))) {
                    var n = [];
                    if (u(e))
                        for (var i = 0; i < e.length; i++) n.push(i);
                    else
                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && e[r] && n.push(r);
                    v(e, n, t)
                }
            },
            v = function(e, t, i) {
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && t[r] && n(e, t[r], i)
            };
        if (l()) {
            t = function(t, n, r) {
                var o = t[n];
                T(t, n), t.watchers || d(t, "watchers", {}), t.watchers[n] || (t.watchers[n] = []), t.watchers[n].push(r);
                var s = function() {
                        return o
                    },
                    a = function(s) {
                        var a = o;
                        o = s, t[n] && f(t[n], r), T(t, n), e.noMore || JSON.stringify(a) !== JSON.stringify(s) && (i(t, n, "set", s, a), e.noMore = !1)
                    };
                c(t, n, s, a)
            }, i = function(e, t, n, i, r) {
                for (var o in e.watchers[t]) Object.prototype.hasOwnProperty.call(e.watchers[t], o) && e.watchers[t][o] && a(o) && e.watchers[t][o].call(e, t, n, i, r)
            };
            var y = ["pop", "push", "reverse", "shift", "sort", "slice", "unshift"],
                b = function(e, t, n, r) {
                    d(e[t], r, function() {
                        var o = n.apply(e[t], arguments);
                        return g(e, e[t]), "slice" !== r && i(e, t, r, arguments), o
                    })
                },
                T = function(e, t) {
                    if (e[t] && !(e[t] instanceof String) && u(e[t]))
                        for (var n = y.length, i; n--;) i = y[n], b(e, t, e[t][i], i)
                };
            n = function(e, t, n) {
                for (var i in e.watchers[t])
                    if (Object.prototype.hasOwnProperty.call(e.watchers[t], i) && e.watchers[t][i]) {
                        var r = e.watchers[t][i];
                        r == n && e.watchers[t].splice(i, 1)
                    }
            }
        }
        else {
            var w = [];
            t = function(e, t, n) {
                w.push({
                    obj: e,
                    prop: t,
                    serialized: JSON.stringify(e[t]),
                    watcher: n
                })
            }, n = function(e, t, n) {
                for (var i in w)
                    if (Object.prototype.hasOwnProperty.call(w, i) && w[i]) {
                        var r = w[i];
                        r.obj == e && r.prop == t && r.watcher == n && w.splice(i, 1)
                    }
            }, i = function(e, t, n, i) {
                for (var r in w)
                    if (Object.prototype.hasOwnProperty.call(w, r) && w[r]) {
                        var o = w[r];
                        o.obj == e && o.prop == t && o.watcher.call(e, t, n, i)
                    }
            };
            var x = function() {
                for (var e in w)
                    if (Object.prototype.hasOwnProperty.call(w, e) && w[e]) {
                        var t = w[e],
                            n = JSON.stringify(t.obj[t.prop]);
                        n != t.serialized && (t.watcher.call(t.obj, t.prop, t.obj[t.prop], JSON.parse(t.serialized)), t.serialized = n)
                    }
            };
            setInterval(x, 50)
        }
        return e.watch = h, e.unwatch = m, e.callWatchers = i, e
    }),
    function() {
        var e, t, n, i, r, o = function(e, t) {
                return function() {
                    return e.apply(t, arguments)
                }
            },
            s = [].slice,
            a = [].indexOf || function(e) {
                for (var t = 0, n = this.length; n > t; t++)
                    if (t in this && this[t] === e) return t;
                return -1
            };
        e = {}, String.prototype.trim || (String.prototype.trim = function() {
            return this.replace(/^\s+|\s+$/g, "")
        }), e.Binding = function() {
            function t(t, n, i, r, s) {
                var a, u, l, c;
                if (this.el = t, this.type = n, this.model = i, this.keypath = r, this.options = null != s ? s : {}, this.unbind = o(this.unbind, this), this.bind = o(this.bind, this), this.publish = o(this.publish, this), this.sync = o(this.sync, this), this.set = o(this.set, this), this.formattedValue = o(this.formattedValue, this), !(this.binder = e.binders[n])) {
                    c = e.binders;
                    for (a in c) l = c[a], "*" !== a && -1 !== a.indexOf("*") && (u = new RegExp("^" + a.replace("*", ".+") + "$"), u.test(n) && (this.binder = l, this.args = new RegExp("^" + a.replace("*", "(.+)") + "$").exec(n), this.args.shift()))
                }
                this.binder || (this.binder = e.binders["*"]), this.binder instanceof Function && (this.binder = {
                    routine: this.binder
                }), this.formatters = this.options.formatters || []
            }
            return t.prototype.formattedValue = function(t) {
                var n, i, r, o, a, u;
                for (u = this.formatters, o = 0, a = u.length; a > o; o++) i = u[o], n = i.split(/\s+/), r = n.shift(), i = this.model[r] instanceof Function ? this.model[r] : e.formatters[r], (null != i ? i.read : void 0) instanceof Function ? t = i.read.apply(i, [t].concat(s.call(n))) : i instanceof Function && (t = i.apply(null, [t].concat(s.call(n))));
                return t
            }, t.prototype.set = function(e) {
                var t;
                return e = e instanceof Function && !this.binder["function"] ? this.formattedValue(e.call(this.model)) : this.formattedValue(e), null != (t = this.binder.routine) ? t.call(this, this.el, e) : void 0
            }, t.prototype.sync = function() {
                return this.set(this.options.bypass ? this.model[this.keypath] : e.config.adapter.read(this.model, this.keypath))
            }, t.prototype.publish = function() {
                var t, i, r, o, a, u, l, c, d;
                for (o = n(this.el), l = this.formatters.slice(0).reverse(), a = 0, u = l.length; u > a; a++) i = l[a], t = i.split(/\s+/),
                    r = t.shift(), (null != (c = e.formatters[r]) ? c.publish : void 0) && (o = (d = e.formatters[r]).publish.apply(d, [o].concat(s.call(t))));
                return e.config.adapter.publish(this.model, this.keypath, o)
            }, t.prototype.bind = function() {
                var t, n, i, r, o, s, a, u, l;
                if (null != (s = this.binder.bind) && s.call(this, this.el), this.options.bypass ? this.sync() : (e.config.adapter.subscribe(this.model, this.keypath, this.sync), e.config.preloadData && this.sync()), null != (a = this.options.dependencies) ? a.length : void 0) {
                    for (u = this.options.dependencies, l = [], r = 0, o = u.length; o > r; r++) t = u[r], /^\./.test(t) ? (i = this.model, n = t.substr(1)) : (t = t.split("."), i = this.view.models[t.shift()], n = t.join(".")), l.push(e.config.adapter.subscribe(i, n, this.sync));
                    return l
                }
            }, t.prototype.unbind = function() {
                var t, n, i, r, o, s, a, u, l;
                if (null != (s = this.binder.unbind) && s.call(this, this.el), this.options.bypass || e.config.adapter.unsubscribe(this.model, this.keypath, this.sync), null != (a = this.options.dependencies) ? a.length : void 0) {
                    for (u = this.options.dependencies, l = [], r = 0, o = u.length; o > r; r++) t = u[r], /^\./.test(t) ? (i = this.model, n = t.substr(1)) : (t = t.split("."), i = this.view.models[t.shift()], n = t.join(".")), l.push(e.config.adapter.unsubscribe(i, n, this.sync));
                    return l
                }
            }, t
        }(), e.View = function() {
            function t(e, t) {
                this.els = e, this.models = t, this.publish = o(this.publish, this), this.sync = o(this.sync, this), this.unbind = o(this.unbind, this), this.bind = o(this.bind, this), this.select = o(this.select, this), this.build = o(this.build, this), this.bindingRegExp = o(this.bindingRegExp, this), this.els.jquery || this.els instanceof Array || (this.els = [this.els]), this.build()
            }
            return t.prototype.bindingRegExp = function() {
                var t;
                return t = e.config.prefix, t ? new RegExp("^data-" + t + "-") : /^data-/
            }, t.prototype.build = function() {
                var t, n, i, r, o, s, u, l, c, d, h, f = this;
                for (this.bindings = [], o = [], t = this.bindingRegExp(), r = function(n) {
                        var i, r, s, u, l, c, d, h, p, g, m, _, v, y, b, T, w, x, S, C, E, P, A, j, k, D, O, I, R;
                        if (a.call(o, n) < 0) {
                            for (D = n.attributes, C = 0, A = D.length; A > C; C++)
                                if (i = D[C], t.test(i.name)) {
                                    if (x = i.name.replace(t, ""), !(s = e.binders[x])) {
                                        O = e.binders;
                                        for (h in O) S = O[h], "*" !== h && -1 !== h.indexOf("*") && (T = new RegExp("^" + h.replace("*", ".+") + "$"), T.test(x) && (s = S))
                                    }
                                    if (s || (s = e.binders["*"]), s.block) {
                                        for (I = n.getElementsByTagName("*"), E = 0, j = I.length; j > E; E++) m = I[E], o.push(m);
                                        r = [i]
                                    }
                                }
                            for (R = r || n.attributes, P = 0, k = R.length; k > P; P++) i = R[P], t.test(i.name) && (_ = {}, x = i.name.replace(t, ""), b = function() {
                                var e, t, n, r;
                                for (n = i.value.split("|"), r = [], e = 0, t = n.length; t > e; e++) y = n[e], r.push(y.trim());
                                return r
                            }(), l = function() {
                                var e, t, n, i;
                                for (n = b.shift().split("<"), i = [], e = 0, t = n.length; t > e; e++) c = n[e], i.push(c.trim());
                                return i
                            }(), v = l.shift(), w = v.split(/\.|:/), _.formatters = b, _.bypass = -1 !== v.indexOf(":"), w[0] ? g = f.models[w.shift()] : (g = f.models, w.shift()), p = w.join("."), g && ((d = l.shift()) && (_.dependencies = d.split(/\s+/)), u = new e.Binding(n, x, g, p, _), u.view = f, f.bindings.push(u)));
                            r && (r = null)
                        }
                    }, d = this.els, s = 0, l = d.length; l > s; s++)
                    for (n = d[s], r(n), h = n.getElementsByTagName("*"), u = 0, c = h.length; c > u; u++) i = h[u], null != i.attributes && r(i)
            }, t.prototype.select = function(e) {
                var t, n, i, r, o;
                for (r = this.bindings, o = [], n = 0, i = r.length; i > n; n++) t = r[n], e(t) && o.push(t);
                return o
            }, t.prototype.bind = function() {
                var e, t, n, i, r;
                for (i = this.bindings, r = [], t = 0, n = i.length; n > t; t++) e = i[t], r.push(e.bind());
                return r
            }, t.prototype.unbind = function() {
                var e, t, n, i, r;
                for (i = this.bindings, r = [], t = 0, n = i.length; n > t; t++) e = i[t], r.push(e.unbind());
                return r
            }, t.prototype.sync = function() {
                var e, t, n, i, r;
                for (i = this.bindings, r = [], t = 0, n = i.length; n > t; t++) e = i[t], r.push(e.sync());
                return r
            }, t.prototype.publish = function() {
                var e, t, n, i, r;
                for (i = this.select(function(e) {
                        return e.binder.publishes
                    }), r = [], t = 0, n = i.length; n > t; t++) e = i[t], r.push(e.publish());
                return r
            }, t
        }(), t = function(e, t, n, i) {
            var r;
            return r = function(e) {
                return n.call(i, e)
            }, null != window.jQuery ? (e = jQuery(e), null != e.on ? e.on(t, r) : e.bind(t, r)) : null != window.addEventListener ? e.addEventListener(t, r, !1) : (t = "on" + t, e.attachEvent(t, r)), r
        }, r = function(e, t, n) {
            return null != window.jQuery ? (e = jQuery(e), null != e.off ? e.off(t, n) : e.unbind(t, n)) : window.removeEventListener ? e.removeEventListener(t, n, !1) : (t = "on" + t, e.detachEvent(t, n))
        }, n = function(e) {
            var t, n, i, r;
            switch (e.type) {
                case "checkbox":
                    return e.checked;
                case "select-multiple":
                    for (r = [], n = 0, i = e.length; i > n; n++) t = e[n], t.selected && r.push(t.value);
                    return r;
                default:
                    return e.value
            }
        }, e.binders = {
            enabled: function(e, t) {
                return e.disabled = !t
            },
            disabled: function(e, t) {
                return e.disabled = !!t
            },
            checked: {
                publishes: !0,
                bind: function(e) {
                    return this.currentListener = t(e, "change", this.publish)
                },
                unbind: function(e) {
                    return r(e, "change", this.currentListener)
                },
                routine: function(e, t) {
                    return "radio" === e.type ? e.checked = e.value === t : e.checked = !!t
                }
            },
            unchecked: {
                publishes: !0,
                bind: function(e) {
                    return this.currentListener = t(e, "change", this.publish)
                },
                unbind: function(e) {
                    return r(e, "change", this.currentListener)
                },
                routine: function(e, t) {
                    return "radio" === e.type ? e.checked = e.value !== t : e.checked = !t
                }
            },
            show: function(e, t) {
                return e.style.display = t ? "" : "none"
            },
            hide: function(e, t) {
                return e.style.display = t ? "none" : ""
            },
            html: function(e, t) {
                return e.innerHTML = null != t ? t : ""
            },
            value: {
                publishes: !0,
                bind: function(e) {
                    return this.currentListener = t(e, "change", this.publish)
                },
                unbind: function(e) {
                    return r(e, "change", this.currentListener)
                },
                routine: function(e, t) {
                    var n, i, r, o, s;
                    if ("select-multiple" !== e.type) return e.value = null != t ? t : "";
                    if (null != t) {
                        for (s = [], i = 0, r = e.length; r > i; i++) n = e[i], s.push(n.selected = (o = n.value, a.call(t, o) >= 0));
                        return s
                    }
                }
            },
            text: function(e, t) {
                return null != e.innerText ? e.innerText = null != t ? t : "" : e.textContent = null != t ? t : ""
            },
            "on-*": {
                "function": !0,
                routine: function(e, n) {
                    return this.currentListener && r(e, this.args[0], this.currentListener), this.currentListener = t(e, this.args[0], n, this.model)
                }
            },
            "each-*": {
                block: !0,
                bind: function(e, t) {
                    return e.removeAttribute(["data", i.config.prefix, this.type].join("-").replace("--", "-"))
                },
                routine: function(e, t) {
                    var n, r, o, s, a, u, l, c, d, h, f, p, g, m, _, v, y, b, T;
                    if (null != this.iterated)
                        for (_ = this.iterated, d = 0, p = _.length; p > d; d++)
                            for (c = _[d], c.unbind(), v = c.els, h = 0, g = v.length; g > h; h++) r = v[h], r.parentNode.removeChild(r);
                    else this.marker = document.createComment(" rivets: " + this.type + " "), e.parentNode.insertBefore(this.marker, e), e.parentNode.removeChild(e);
                    if (this.iterated = [], t) {
                        for (T = [], f = 0, m = t.length; m > f; f++) {
                            o = t[f], n = {}, y = this.view.models;
                            for (u in y) a = y[u], n[u] = a;
                            n[this.args[0]] = o, s = e.cloneNode(!0), l = this.iterated.length > 0 ? this.iterated[this.iterated.length - 1].els[0] : this.marker, this.marker.parentNode.insertBefore(s, null != (b = l.nextSibling) ? b : null), T.push(this.iterated.push(i.bind(s, n)))
                        }
                        return T
                    }
                }
            },
            "class-*": function(e, t) {
                var n;
                return n = " " + e.className + " ", !t == (-1 !== n.indexOf(" " + this.args[0] + " ")) ? e.className = t ? "" + e.className + " " + this.args[0] : n.replace(" " + this.args[0] + " ", " ").trim() : void 0
            },
            "*": function(e, t) {
                return t ? e.setAttribute(this.type, t) : e.removeAttribute(this.type)
            }
        }, e.config = {
            preloadData: !0
        }, e.formatters = {}, i = {
            bindEvent: t,
            unbindEvent: r,
            binders: e.binders,
            formatters: e.formatters,
            config: e.config,
            configure: function(t) {
                var n, i;
                null == t && (t = {});
                for (n in t) i = t[n], e.config[n] = i
            },
            bind: function(t, n) {
                var i;
                return null == n && (n = {}), i = new e.View(t, n), i.bind(), i
            }
        }, "undefined" != typeof module && null !== module ? module.exports = i : this.rivets = i
    }.call(this), qrequire.define("rivets", ["watch"], function(e) {
        return function() {
            var t, n;
            return t || e.rivets
        }
    }(this)), qrequire.define("device", ["core/env", "log"], function(e, t) {
        "use strict";
        return {
            trigger: function(n, i) {
                if (e.is("offline") && "undefined" != typeof document) {
                    var r = document.createElement("IFRAME");
                    r.setAttribute("src", n + ":##sendToApp##" + i), document.documentElement.appendChild(r), r.parentNode.removeChild(r), r = null
                }
                else "error" === n && t.error("device", i)
            }
        }
    }), qrequire.define("templates/page/PageDialog.html", [], function() {
        return '<div class="PageErrorDialog">\n  <h3 class="ErrorTitle">{{=it.title}}</h3>\n    <div class="ErrorContainer">\n      <div class="ErrorIcon {{=it.severity}}"></div>\n      <span class="ErrorMessage">{{=it.message}}</span>\n      {{?it.ref}}\n      <span class="ErrorReferenceNumber">{{=it.ref}}</span>\n      {{?}}\n    </div>\n  <div class="ErrorButtons">\n  </div>\n</div>'
    }), qrequire.define("core/PageDialog", ["dejavu", "dom", "doT", "bluebird", "text!templates/page/PageDialog.html"], function(e, $, t, n, i) {
        "use strict";
        return e.Class.declare({
            __message: "",
            __options: {},
            __buttons: {},
            __buttonsEl: null,
            __dialogEl: null,
            __dialogDeferred: null,
            initialize: function(e, t) {
                this.__message = e, this.__options = t || {}, this.__options.buttons && this.__setButtons(this.__options.buttons), this.__renderDialog(), this.__positionDialogHidden()
            },
            __parseMessage: function(e, t) {
                return !e || "#" == e.charAt(0) && "#" == e.charAt(e.length - 1) ? t : e
            },
            __renderDialog: function() {
                var e = t.template(i),
                    n = "None",
                    r = 2;
                void 0 !== this.__options.severity && (r = this.__options.severity);
                var o = this.__parseMessage(this.__options.title, this.__getSeverityText(r));
                this.__options.noIcon || (n = this.__getSeverityText(r));
                var s = e({
                        message: this.__parseMessage(this.__message, "Sorry, an unexpected error occurred."),
                        severity: n,
                        title: o,
                        ref: this.__options.ref
                    }),
                    a = $("#Page .Skin");
                a.length || (a = "body"), this.__dialogEl = $(s).appendTo(a), this.__options.width && !isNaN(parseInt(this.__options.width)) && this.__dialogEl.width(this.__options.width), this.__options.noButtons || (this.__buttonsEl = this.__buildButtons(), this.__dialogEl.find(".ErrorButtons").append(this.__buttonsEl))
            },
            __getSeverityText: function(e) {
                return 0 === e ? "Information" : 1 == e ? "Warning" : "Error"
            },
            __buildButtons: function() {
                var e = $();
                if (this.__buttons && this.__buttons.length > 0)
                    for (var t = 0; t < this.__buttons.length; t++) e = e.add(this.__buildButton(this.__buttons[t]));
                else e = this.__buildDefaultButton();
                return e
            },
            __buildButton: function(e) {
                var t = $('<button type="button">');
                return e.text && t.text(e.text), e.callback && t.on("click", function() {
                    var t = e.callback();
                    e.closeAfterCallback || this.hide(), t && t.then ? t.then(function(e) {
                        this.finished(e), this.hide()
                    }.$bind(this), this.failed) : (this.finished(t), this.hide())
                }.$bind(this)), (void 0 === e.closeOnClick || e.closeOnClick) && t.on("click", function() {
                    this.finished(), this.hide()
                }.$bind(this)), t
            },
            __buildDefaultButton: function() {
                return this.__buildButton({
                    text: "OK"
                })
            },
            __setOverlay: function() {
                $("#SkinContent, body").addClass("Inactive")
            },
            __transitionOverlay: function() {
                $("#SkinContent, body").removeClass("Inactive"), $("body").addClass("OverlayTransitioning")
            },
            __removeOverlay: function() {
                $("body").removeClass("OverlayTransitioning")
            },
            __isMobile: function() {
                return this.__dialogEl.hasClass("Mobile") || $(window).width() < this.__dialogEl.outerWidth()
            },
            __positionDialogHidden: function() {
                var e = this.__dialogEl.outerWidth(),
                    t = this.__dialogEl.outerHeight(),
                    n;
                n = $("#Page.ActivePage").length ? $("#Page.ActivePage").width() : $(window).width(), this.__isMobile() && (this.__dialogEl.addClass("Mobile"), e = this.__dialogEl.outerWidth()), this.__dialogEl.css({
                    top: 2 * -t,
                    left: n / 2 - e / 2
                })
            },
            __dialogEntrance: function() {
                var e = this.__dialogEl.outerHeight(),
                    t = $(window).height(),
                    n = this.__isMobile() ? 2 : 3;
                this.__dialogEl.hide().css({
                    top: t / n - e / 2
                }).fadeIn(500)
            },
            __dialogExit: function(e) {
                e || (e = function() {}), this.__dialogEl.fadeOut(500, function() {
                    this.__dialogEl.remove(), e()
                }.$bind(this))
            },
            __setButtons: function(e) {
                this.__buttons = e
            },
            finished: function() {
                this.__dialogDeferred && this.__dialogDeferred.resolve(arguments)
            },
            failed: function() {
                this.__dialogDeferred && this.__dialogDeferred.reject(arguments)
            },
            show: function() {
                return this.__dialogDeferred = n.defer(), this.__setOverlay(), this.__dialogEntrance(), this.__dialogDeferred.promise
            },
            hide: function() {
                this.__transitionOverlay(), this.__dialogExit(function() {
                    this.__removeOverlay()
                }.$bind(this))
            }.$bound(),
            $statics: {
                removeAllOverlays: function() {
                    $("#SkinContent, body").removeClass("Inactive"), $("body").removeClass("OverlayTransitioning")
                }
            }
        })
    }), qrequire.define("Qualtrics", [], function() {
        "use strict";
        return window.Qualtrics = {
            Location: {},
            SurveyEngine: {
                QuestionInfo: {}
            }
        }, window.Qualtrics
    }), qrequire.define("factories/dialog", ["bluebird", "device", "core/PageDialog", "Qualtrics"], function(e, t, n, i) {
        "use strict";
        return {
            create: function(r) {
                if (!r || !r.msg) return e.reject(new Error("Bad options"));
                var o = e.defer();
                if ("undefined" != typeof window && "app" === window.environment) {
                    i.Dialog = o;
                    var s = {
                        title: r.title || "",
                        message: r.msg,
                        buttons: {}
                    };
                    r.buttons && r.buttons.ok ? s.buttons.okText = r.buttons.ok : s.buttons.okText = "OK", r.buttons && r.buttons.cancel && (s.buttons.cancelText = r.buttons.cancel), t.trigger("alert", JSON.stringify(s))
                }
                else {
                    var a = new n(r.msg, r.pageDialog);
                    a.show().then(o.resolve.bind(o), o.reject.bind(o))
                }
                return o.promise
            }
        }
    }), qrequire.define("classes/FormOptions", ["utils", "dejavu"], function(e, t) {
        "use strict";
        return t.FinalClass.declare({
            $name: "FormOptions",
            __options: {},
            __formID: null,
            initialize: function(t, n) {
                this.__formID = n, e.each(t, function(e, t) {
                    this.__options[t] = this.__sanitizeBoolean(e)
                }, this)
            },
            __sanitizeBoolean: function(e) {
                return e === !0 || "true" === e || "True" === e || "yes" === e || "Yes" === e || "on" === e || "On" === e ? e = !0 : (e === !1 || "false" === e || "False" === e || "no" === e || "No" === e || "off" === e || "Off" === e) && (e = !1), e
            },
            get: function(e) {
                return this.__options[e]
            }
        }, !0)
    }), qrequire.define("classes/page/PageRuntime", ["dejavu", "utils"], function(e, t) {
        "use strict";
        return e.Class.declare({
            $name: "PageRuntime",
            __questions: {},
            __questionIDs: [],
            __SM: {},
            __ED: {},
            __Q: null,
            __formRuntime: null,
            __previewOptions: null,
            __formSessionID: null,
            __transactionId: null,
            initialize: function(e) {
                e && this.deserialize(e)
            },
            serialize: function() {
                var e = {};
                return e.SM = t.deepClone(this.__SM), e.ED = t.deepClone(this.__ED), this.__Q && (e.Q = this.__Q), e.FormRuntime = t.deepClone(this.__formRuntime), e.FormSessionID = this.__formSessionID, e.Questions = {}, e.TransactionID = this.__transactionId, this.getPreviewOptions() && (e.PreviewOptions = this.getPreviewOptions()), t.each(this.__questions, function(n, i) {
                    e.Questions[i] = t.deepClone(n)
                }, this), e
            },
            deserialize: function(e) {
                e = t.deepClone(e), this.__questions = {}, this.__questionIDs = [], e.Questions && t.each(e.Questions, function(e, t) {
                    this.addQuestion(t, e)
                }, this), e.SM && this.setSM(e.SM), e.ED && this.setED(e.ED), e.Q && (this.__Q = e.Q), e.FormRuntime && this.setFormRuntime(e.FormRuntime), e.FormSessionID && this.setFormSessionID(e.FormSessionID), e.TransactionID && this.setTransactionId(e.TransactionID), e.PreviewOptions && this.setPreviewOptions(e.PreviewOptions)
            },
            getFormRuntime: function() {
                return this.__formRuntime
            },
            setFormRuntime: function(e) {
                this.__formRuntime = e
            },
            getPreviewOptions: function() {
                return this.__previewOptions
            },
            setPreviewOptions: function(e) {
                this.__previewOptions = e
            },
            setFormSessionID: function(e) {
                this.__formSessionID = e
            },
            getFormSessionID: function() {
                return this.__formSessionID
            },
            getQuestionIDs: function() {
                return t.deepClone(this.__questionIDs)
            },
            getQuestionRuntime: function(e) {
                return void 0 === e || null === e ? null : this.__questions[e] ? t.deepClone(this.__questions[e]) : null
            },
            addQuestion: function(e, n) {
                return e && n ? (this.__questions[e] = t.deepClone(n), this.__questionIDs.push(e), !0) : !1
            },
            setTransactionId: function(e) {
                this.__transactionId = e
            },
            getTransactionId: function() {
                return this.__transactionId
            },
            setSM: function(e) {
                e ? this.__SM = t.deepClone(e) : this.__SM = {}
            },
            addSM: function(e, t) {
                this.__SM[e] = t
            },
            getSM: function(e) {
                return e ? this.__SM[e] : this.__SM
            },
            setED: function(e) {
                e ? this.__ED = t.deepClone(e) : this.__ED = {}
            },
            addED: function(e, t) {
                this.__ED[e] = t
            },
            getED: function(e) {
                return e ? this.__ED[e] : this.__ED
            },
            getQ: function() {
                return this.__Q
            }
        }, !0)
    }), qrequire.define("classes/page/PageElement", ["classes/Events", "utils", "log", "dom", "rivets", "dejavu"], function(e, t, n, $, i, r) {
        "use strict";
        return r.AbstractClass.declare({
            $name: "PageElement",
            $extends: e,
            _id: null,
            _bind: null,
            _$el: null,
            _page: null,
            _pageID: null,
            _defaultLan: "EN",
            _currentLan: "EN",
            _language: {},
            _boundView: null,
            runtime: {},
            initialize: function(e, t, n) {
                t && (this._defaultLan = t), n && this.setPage(n), this._bind = i.bind, this.setDef(e)
            },
            setDef: function(e) {
                this.runtime.Display = e.Display || "", this._language = e.Language || {}, this.translate(this._currentLan)
            },
            _getElement: function() {
                var e = this._pageID ? "#" + this._pageID + " .ActivePage #" : "#";
                return $(e + this._id)
            },
            bind: function() {
                this._$el = this._getElement(), this._$el && this._$el[0] && (this._boundView = this._bind(this._$el[0], {
                    runtime: this.runtime
                }))
            },
            setPage: function(e) {
                this._page = e, this._pageID = e.id(), this._listenTo(this._page, "translate", this.translate)
            },
            translate: function(e) {
                this._currentLan = e;
                var n = t.get(this._language, this._defaultLan),
                    i = t.get(this._language, this._currentLan);
                i && (n = t.merge(n, i)), t.deepMixIn(this.runtime, n)
            },
            $finals: {
                unbind: function() {
                    this._boundView && this._boundView.unbind(), this._trigger("unbind")
                }
            }
        }, !0)
    }), qrequire.define("templates/page/ResponseSummary.html", [], function() {
        return '<div class="Separator"></div>\n<div class="ResponseSummary" id="ResponseSummaryHeader">\n    <p>{{=it.Display}}</p>\n    <a class="DownloadResponsesPDF" href="#">{{=it.DownloadDisplay}}</a>\n    <div class="clear"></div>\n</div>'
    }), qrequire.define("classes/page/ResponseSummary", ["dejavu", "classes/page/PageElement", "text!templates/page/ResponseSummary.html", "doT"], function(e, t, n, i) {
        "use strict";
        return e.Class.declare({
            $name: "ResponseSummary",
            $extends: t,
            _id: "ResponseSummaryHeader",
            __message: "",
            __downloadMessage: "",
            initialize: function(e, n) {
                t.prototype.initialize.call(this, {}, null, n), this.__message = e.ResponseSummaryMessage, this.__downloadMessage = e.ResponseSummaryDownloadMessage, this.on("unbind", this._unbind.$bind(this))
            },
            render: function() {
                return i.template(n)({
                    Display: this.__message,
                    DownloadDisplay: this.__downloadMessage
                })
            },
            getPDF: function() {
                return this._page.renderPDF(), !1
            },
            bind: function() {
                t.prototype.bind.call(this), this._getElement().find("a").click(this.getPDF.$bind(this))
            },
            _unbind: function() {
                this._getElement().find("a").off("click")
            }
        }, !0)
    }), qrequire.define("templates/page/ScoringSummary.html", [], function() {
        return "<div class=\"Separator\"></div>\n<div class='Grading'>\n    <div class='Inner TotalScore'>\n        <div class='InnerInner'>\n            <div class='Score Correct'>\n                {{! it.Percentage }}%\n            </div>\n            <div class='GradingQuestionText BorderColor'>\n                <span class=\"Score\">{{= it.Points }}/{{= it.MaxPoints }}</span>\n            </div>\n            <div class='clear'></div>\n        </div>\n    </div>\n</div>\n"
    }), qrequire.define("classes/page/ScoringSummary", ["dejavu", "bluebird", "text!templates/page/ScoringSummary.html", "doT", "utils", "load", "classes/questions/hierarchy"], function(e, t, n, i, r, o, s) {
        "use strict";
        return e.Class.declare({
            $name: "ScoringSummary",
            __points: 0,
            __maxPoints: 0,
            __getPercentage: function() {
                var e = this.__points / this.__maxPoints * 100;
                return 0 > e || !isFinite(e) ? "0.0" : e.toFixed(1)
            },
            __renderHeader: function() {
                var e = {
                    Points: this.__points,
                    MaxPoints: this.__maxPoints,
                    Percentage: this.__getPercentage()
                };
                return i.template(n)(e)
            },
            __getQuestionName: function(e) {
                return e.Type + e.Selector + (e.SubSelector || "")
            },
            render: function(e) {
                var n = {};
                r.each(e.getQuestionIDs(), function(t) {
                    var i = e.getQuestionRuntime(t);
                    this.__points += i.Points || 0, this.__maxPoints += i.MaxPoints || 0;
                    var r = this.__getQuestionName(i),
                        a = s.getImplementedItem(r, s.flags.Scoring);
                    n[r] || (n[r] = o(["renderers/html/questions/scoring/" + a + "RendererHTML"]).spread(function(e) {
                        return e
                    }))
                }.$bind(this));
                var i = [this.__renderHeader()];
                return t.props(n).then(function(t) {
                    return r.each(e.getQuestionIDs(), function(n) {
                        var r = e.getQuestionRuntime(n);
                        if (r.HasScoring) {
                            var o = this.__getQuestionName(r),
                                s = new t[o](r);
                            i.push(s.render())
                        }
                    }.$bind(this)), i.join("")
                }.$bind(this))
            }
        }, !0)
    }), qrequire.define("classes/page/LanguageEvaluator", ["dejavu"], function(e) {
        "use strict";
        return e.Class.declare({
            $name: "LanguageEvaluator",
            __language: "",
            __RTLLanguages: ["HE", "AR", "UR", "FA"],
            initialize: function(e) {
                e && this.setLanguage(e)
            },
            setLanguage: function(e) {
                this.__language = e
            },
            getLanguage: function() {
                return this.__language
            },
            isRTL: function() {
                return -1 !== this.__RTLLanguages.indexOf(this.__language) ? !0 : !1
            }
        }, !0)
    }), qrequire.define("templates/page/LanguageSelector.html", [], function() {
        return '{{? runtime.Language}}\n<div class="LanguageSelectorContainer">\n  <select name="Q_lang" id="Q_lang" class="Q_lang" data-runtime-value="runtime.Selected">\n    {{ for(var code in runtime.Language) { }}\n    <option value="{{=code}}" data-runtime-text="runtime.Language.{{=code}}.DisplayName">{{=runtime.Language[code].DisplayName}}</option>\n    {{ } }}\n  </select>\n</div>\n{{?}}\n'
    }), qrequire.define("templates/page/PageLoadingIndicator.html", [], function() {
        return '<style>\n#{{=it.id}} {\n  width:{{=Math.round(it.height * .805)}}px;\n  height:{{=it.height}}px;\n  position: absolute;\n  visibility: hidden;\n  opacity: {{=it.opacity}}\n}\n\n#{{=it.id}}.visible {\n  visibility: visible;\n}\n\n.{{=it.id}}blockG{\n  position:absolute;\n  background-color:{{=it.foreground}};\n  width:{{=Math.round(it.height * .13)}}px;\n  height:{{=Math.round(it.height * .312)}}px;\n  -moz-border-radius:{{=Math.round(it.height * .104)}}px {{=Math.round(it.height * .104)}}px 0 0;\n  -moz-transform:scale(0.4);\n  -moz-animation-name:fadeG;\n  -moz-animation-duration:0.64s;\n  -moz-animation-iteration-count:infinite;\n  -moz-animation-direction:linear;\n  -webkit-border-radius:{{=Math.round(it.height * .104)}}px {{=Math.round(it.height * .104)}}px 0 0;\n  -webkit-transform:scale(0.4);\n  -webkit-animation-name:fadeG;\n  -webkit-animation-duration:0.64s;\n  -webkit-animation-iteration-count:infinite;\n  -webkit-animation-direction:linear;\n  -ms-border-radius:{{=Math.round(it.height * .104)}}px {{=Math.round(it.height * .104)}}px 0 0;\n  -ms-transform:scale(0.4);\n  -ms-animation-name:fadeG;\n  -ms-animation-duration:0.64s;\n  -ms-animation-iteration-count:infinite;\n  -ms-animation-direction:linear;\n  -o-border-radius:{{=Math.round(it.height * .104)}}px {{=Math.round(it.height * .104)}}px 0 0;\n  -o-transform:scale(0.4);\n  -o-animation-name:fadeG;\n  -o-animation-duration:0.64s;\n  -o-animation-iteration-count:infinite;\n  -o-animation-direction:linear;\n  border-radius:{{=Math.round(it.height * .104)}}px {{=Math.round(it.height * .104)}}px 0 0;\n  transform:scale(0.4);\n  animation-name:fadeG;\n  animation-duration:0.64s;\n  animation-iteration-count:infinite;\n  animation-direction:linear;\n}\n\n#{{=it.id}}rotateG_01{\n  left:0;\n  top:{{=Math.round(it.height * .364)}}px;\n  -moz-animation-delay:0.24000000000000005s;\n  -moz-transform:rotate(-90deg);\n  -webkit-animation-delay:0.24000000000000005s;\n  -webkit-transform:rotate(-90deg);\n  -ms-animation-delay:0.24000000000000005s;\n  -ms-transform:rotate(-90deg);\n  -o-animation-delay:0.24000000000000005s;\n  -o-transform:rotate(-90deg);\n  animation-delay:0.24000000000000005s;\n  transform:rotate(-90deg);\n}\n\n#{{=it.id}}rotateG_02{\n  left:{{=Math.round(it.height * .104)}}px;\n  top:{{=Math.round(it.height * .13)}}px;\n  -moz-animation-delay:0.32s;\n  -moz-transform:rotate(-45deg);\n  -webkit-animation-delay:0.32s;\n  -webkit-transform:rotate(-45deg);\n  -ms-animation-delay:0.32s;\n  -ms-transform:rotate(-45deg);\n  -o-animation-delay:0.32s;\n  -o-transform:rotate(-45deg);\n  animation-delay:0.32s;\n  transform:rotate(-45deg);\n}\n\n#{{=it.id}}rotateG_03{\n  left:{{=Math.round(it.height * .338)}}px;\n  top:{{=Math.round(it.height * .039)}}px;\n  -moz-animation-delay:0.4s;\n  -moz-transform:rotate(0deg);\n  -webkit-animation-delay:0.4s;\n  -webkit-transform:rotate(0deg);\n  -ms-animation-delay:0.4s;\n  -ms-transform:rotate(0deg);\n  -o-animation-delay:0.4s;\n  -o-transform:rotate(0deg);\n  animation-delay:0.4s;\n  transform:rotate(0deg);\n}\n\n#{{=it.id}}rotateG_04{\n  right:{{=Math.round(it.height * .104)}}px;\n  top:{{=Math.round(it.height * .13)}}px;\n  -moz-animation-delay:0.4800000000000001s;\n  -moz-transform:rotate(45deg);\n  -webkit-animation-delay:0.4800000000000001s;\n  -webkit-transform:rotate(45deg);\n  -ms-animation-delay:0.4800000000000001s;\n  -ms-transform:rotate(45deg);\n  -o-animation-delay:0.4800000000000001s;\n  -o-transform:rotate(45deg);\n  animation-delay:0.4800000000000001s;\n  transform:rotate(45deg);\n}\n\n#{{=it.id}}rotateG_05{\n  right:0;\n  top:{{=Math.round(it.height * .364)}}px;\n  -moz-animation-delay:0.56s;\n  -moz-transform:rotate(90deg);\n  -webkit-animation-delay:0.56s;\n  -webkit-transform:rotate(90deg);\n  -ms-animation-delay:0.56s;\n  -ms-transform:rotate(90deg);\n  -o-animation-delay:0.56s;\n  -o-transform:rotate(90deg);\n  animation-delay:0.56s;\n  transform:rotate(90deg);\n}\n\n#{{=it.id}}rotateG_06{\n  right:{{=Math.round(it.height * .104)}}px;\n  bottom:{{=Math.round(it.height * .091)}}px;\n  -moz-animation-delay:0.64s;\n  -moz-transform:rotate(135deg);\n  -webkit-animation-delay:0.64s;\n  -webkit-transform:rotate(135deg);\n  -ms-animation-delay:0.64s;\n  -ms-transform:rotate(135deg);\n  -o-animation-delay:0.64s;\n  -o-transform:rotate(135deg);\n  animation-delay:0.64s;\n  transform:rotate(135deg);\n}\n\n#{{=it.id}}rotateG_07{\n  bottom:0;\n  left:{{=Math.round(it.height * .338)}}px;\n  -moz-animation-delay:0.72s;\n  -moz-transform:rotate(180deg);\n  -webkit-animation-delay:0.72s;\n  -webkit-transform:rotate(180deg);\n  -ms-animation-delay:0.72s;\n  -ms-transform:rotate(180deg);\n  -o-animation-delay:0.72s;\n  -o-transform:rotate(180deg);\n  animation-delay:0.72s;\n  transform:rotate(180deg);\n}\n\n#{{=it.id}}rotateG_08{\n  left:{{=Math.round(it.height * .104)}}px;\n  bottom:{{=Math.round(it.height * .091)}}px;\n  -moz-animation-delay:0.8s;\n  -moz-transform:rotate(-135deg);\n  -webkit-animation-delay:0.8s;\n  -webkit-transform:rotate(-135deg);\n  -ms-animation-delay:0.8s;\n  -ms-transform:rotate(-135deg);\n  -o-animation-delay:0.8s;\n  -o-transform:rotate(-135deg);\n  animation-delay:0.8s;\n  transform:rotate(-135deg);\n}\n\n@-moz-keyframes fadeG{\n  0%{\n    background-color:{{=it.background}}}\n\n  100%{\n    background-color:{{=it.foreground}}}\n\n}\n\n@-webkit-keyframes fadeG{\n  0%{\n    background-color:{{=it.background}}}\n\n  100%{\n    background-color:{{=it.foreground}}}\n\n}\n\n@-ms-keyframes fadeG{\n  0%{\n    background-color:{{=it.background}}}\n\n  100%{\n    background-color:{{=it.foreground}}}\n\n}\n\n@-o-keyframes fadeG{\n  0%{\n    background-color:{{=it.background}}}\n\n  100%{\n    background-color:{{=it.foreground}}}\n\n}\n\n@keyframes fadeG{\n  0%{\n    background-color:{{=it.background}}}\n\n  100%{\n    background-color:{{=it.foreground}}}\n\n}\n\n</style>\n<div id="{{=it.id}}">\n  <div class="{{=it.id}}blockG" id="{{=it.id}}rotateG_01">\n  </div>\n  <div class="{{=it.id}}blockG" id="{{=it.id}}rotateG_02">\n  </div>\n  <div class="{{=it.id}}blockG" id="{{=it.id}}rotateG_03">\n  </div>\n  <div class="{{=it.id}}blockG" id="{{=it.id}}rotateG_04">\n  </div>\n  <div class="{{=it.id}}blockG" id="{{=it.id}}rotateG_05">\n  </div>\n  <div class="{{=it.id}}blockG" id="{{=it.id}}rotateG_06">\n  </div>\n  <div class="{{=it.id}}blockG" id="{{=it.id}}rotateG_07">\n  </div>\n  <div class="{{=it.id}}blockG" id="{{=it.id}}rotateG_08">\n  </div>\n</div>'
    }), qrequire.define("classes/page/PageLoadingIndicator", ["dejavu", "text!templates/page/PageLoadingIndicator.html", "dom", "doT"], function(e, t, $, n) {
        "use strict";
        return e.Class.declare({
            $name: "PageLoadingIndicator",
            _parentObj: null,
            __id: "PageLoadingIndicator",
            __el: null,
            __name: "",
            initialize: function(e, t) {
                this._parentObj = e, this.__name = t
            },
            bind: function() {
                this.__el = $("#" + this.__getElementId())
            },
            positionLoader: function(e) {
                this._reposition(e), this.__showLoader()
            },
            render: function() {
                var e = this.__getIndicatorProperties(),
                    i = n.template(t);
                return i({
                    foreground: e.fg,
                    background: e.bg,
                    opacity: e.opacity,
                    height: e.height,
                    id: this.__getElementId()
                })
            },
            remove: function() {
                this.__el && this.__el.remove(), this.__el = null
            },
            __getElementId: function() {
                return this.__id + this.__name
            },
            getElement: function() {
                return this.__el
            },
            _reposition: function(e) {
                this.__setPosition(e)
            },
            __setPosition: function(e) {
                return e ? void this.__el.css({
                    top: e[1] + "px",
                    left: e[0] + "px"
                }) : void 0
            },
            __showLoader: function() {
                var e = 500;
                this._parentObj.prepareForHiding && this._parentObj.prepareForHiding(), setTimeout(function() {
                    this.__el && this._parentObj.isLoading && this.__el.hide().addClass("visible").fadeIn(function() {
                        this._parentObj.hideDisplay && this._parentObj.isLoading && this._parentObj.hideDisplay()
                    }.$bind(this))
                }.$bind(this), e)
            },
            __getIndicatorProperties: function() {
                var e = "rgba(255,255,255,.5)",
                    t = "rgba(0,0,0,0)",
                    n = "1",
                    i = 30;
                if (this._parentObj) {
                    var r = this._parentObj.getElement();
                    t = r.css("background-color"), e = r.css("color"), i = this._parentObj.getHeight ? this._parentObj.getHeight() : .75 * r.outerHeight(), n = .5
                }
                return {
                    fg: e,
                    bg: t,
                    opacity: n,
                    height: i
                }
            }
        }, !0)
    }), qrequire.define("classes/page/LanguageSelector", ["watch", "utils", "dejavu", "classes/page/PageElement", "doT", "text!templates/page/LanguageSelector.html", "classes/page/PageLoadingIndicator"], function(e, t, n, i, r, o, s) {
        "use strict";
        return n.Class.declare({
            $name: "LanguageSelector",
            $extends: i,
            __tpl: "",
            __triggerTranslate: !0,
            __changeHandler: null,
            isLoading: !1,
            initialize: function(n, s, a) {
                i.prototype.initialize.call(this, n, s, a), this._id = "Q_lang", this.runtime.Language = this.getSortedLanguages(n.get("Languages")), this.runtime.Selected = this._defaultLan, e.watch(this.runtime, "Selected", this.__onChange);
                var u = r.template(o, t.merge(r.templateSettings, {
                    varname: "runtime"
                }));
                this.__tpl = u(this.runtime)
            },
            getSortedLanguages: function(e) {
                var t = {};
                return e && Object.keys(e).sort(function(t, n) {
                    return e[t].DisplayName.localeCompare(e[n].DisplayName)
                }).forEach(function(n) {
                    t[n] = e[n]
                }), t
            },
            getElement: function() {
                return this._getElement()
            },
            setDef: function() {
                this.translate(this._currentLan)
            },
            setTriggerTranslate: function(e) {
                this.__triggerTranslate = e
            },
            setChangeHandler: function(e) {
                this.__changeHandler = e
            },
            getHeight: function() {
                return this._$el.outerHeight()
            },
            __onChange: function() {
                if (this.__changeHandler) return this.__changeHandler(this.runtime.Selected);
                if (this.__triggerTranslate) {
                    this.isLoading = !0;
                    var e = new s(this, this.$name);
                    this._$el.parent().addClass("RelativePosition").prepend(e.render()), e.bind();
                    var t = this._$el.position(),
                        n = e.getElement(),
                        i = n.outerHeight(),
                        r = n.outerWidth(),
                        o = this._$el.outerHeight(),
                        a = t.left - r - 10,
                        u = t.top + o / 2 - i / 2;
                    e.positionLoader([a, u]), this._trigger("change", this.runtime.Selected)
                }
            }.$bound(),
            translationComplete: function() {
                this.isLoading = !1
            },
            translate: function(e) {
                if (e) {
                    this.runtime.Selected = e;
                    var n = t.get(window, "Qualtrics.Translations." + this._defaultLan + ".Language"),
                        i = t.get(window, "Qualtrics.Translations." + e + ".Language");
                    n && i && (n = t.merge(n, i)), n && t.each(this._language, function(e) {}, this)
                }
            },
            render: function() {
                return this.__tpl
            }
        }, !0)
    }), qrequire.define("classes/page/PageLoadingIndicatorContainer", ["dejavu", "classes/page/PageLoadingIndicator", "dom"], function(e, t, $) {
        "use strict";
        return e.Class.declare({
            $name: "PageLoadingIndicatorContainer",
            __loader: null,
            __loadingIndicatorContentObj: null,
            __divName: "PageLoaderDiv",
            __failSafeHandler: null,
            initialize: function() {},
            __enableFailSafe: function() {
                this.__failSafeHandler = setTimeout(this.__loadEnd.$bind(this), 1e4)
            },
            __disableFailSafe: function() {
                this.__failSafeHandler && (clearTimeout(this.__failSafeHandler), this.__failSafeHandler = null)
            },
            __loadEnd: function() {
                this.__loadingIndicatorContentObj.isLoading = !1, this.endPageLoadingIndicator(), this.__disableFailSafe()
            },
            startPageLoadingIndicator: function() {
                if (!this.__loader) {
                    var e = 100,
                        n = $('<div id="' + this.__divName + '" style="width:' + e + "px;height:" + e + 'px"></div>');
                    n.css("position", "fixed"), n.css("left", $(window).width() / 2 - e / 2 + "px"), n.css("top", $(window).height() / 2 - e / 2 + "px"), $("#SkinContent").append(n), this.__loadingIndicatorContentObj = {
                        getElement: function() {
                            return n
                        },
                        isLoading: !0
                    }, this.__loader = new t(this.__loadingIndicatorContentObj, this.__divName), $("#" + this.__divName).append(this.__loader.render()), this.__loader.bind(), this.__loader.positionLoader([0, 0]), this.__enableFailSafe()
                }
            },
            endPageLoadingIndicator: function() {
                this.__loader && (this.__loadingIndicatorContentObj.isLoading = !1, this.__loader.remove(), this.__loader = null, $("#" + this.__divName).remove(), this.__disableFailSafe())
            }
        }, !0)
    }), qrequire.define("templates/page/ProgressBar.html", [], function() {
        return "{{? runtime.Display}}\n<div role='widget'>\n	<table class='ProgressBarContainer' role='progressbar' aria-valuemin='0' aria-valuemax='100' aria-valuenow='{{=runtime.progressPercent}}' >\n        {{? runtime.explanation }}\n		  <tr><td colspan=3><label>{{=runtime.explanation}}</label></td></tr>\n        {{?}}\n        <tr>\n            <td>\n            	{{=runtime.percentZero}}\n            </td>\n            <td>\n                <div class='ProgressBarFillContainer' id='ProgressBarFillContainer'>\n                    {{? runtime.progressAccessibilityText}}\n                	   <span class='offScreen'>{{=runtime.progressAccessibilityText}} {{=runtime.progressPercent}}%</span>\n                    {{?}}\n                    <div class='ProgressBarFill' style='width: {{=runtime.progressPercent}}%'>\n                    </div>\n                </div>\n            </td>\n            <td>\n            	{{=runtime.percentOneHundred}}\n            </td>\n        </tr>\n	</table>\n</div>\n{{?}}";
    }), qrequire.define("classes/page/ProgressBar", ["dejavu", "utils", "classes/page/PageElement", "doT", "text!templates/page/ProgressBar.html"], function(e, t, n, i, r) {
        "use strict";
        return e.Class.declare({
            $name: "ProgressBar",
            $extends: n,
            __progressBarType: "",
            __tpl: "",
            initialize: function(e, o, s, a) {
                this.__progressBarType = e || "None", n.prototype.initialize.call(this, {
                    Display: this.__getShouldDisplayFromType()
                }), this._id = "QProgressBar", this.runtime.progressPercent = o || 0, this.__formatExplanationText(s), this.__formatProgressAccessibilityText(a), this.__setPercentText();
                var u = i.template(r, t.merge(i.templateSettings, {
                    varname: "runtime"
                }));
                this.__tpl = u(this.runtime)
            },
            __formatExplanationText: function(e) {
                e && this.__showExplanationTextFromType() ? this.runtime.explanation = e : this.runtime.explanation = ""
            },
            __formatProgressAccessibilityText: function(e) {
                this.runtime.progressAccessibilityText = e || ""
            },
            __showExplanationTextFromType: function() {
                return "VerboseText" === this.__progressBarType ? !0 : !1
            },
            __getShouldDisplayFromType: function() {
                return "None" !== this.__progressBarType ? !0 : !1
            },
            __setPercentText: function() {
                this.__showPercentText() ? (this.runtime.percentZero = "0%", this.runtime.percentOneHundred = "100%") : (this.runtime.percentZero = "", this.runtime.percentOneHundred = "")
            },
            __showPercentText: function() {
                return "Text" === this.__progressBarType || "VerboseText" === this.__progressBarType ? !0 : !1
            },
            render: function() {
                return this.__tpl
            }
        }, !0)
    }), qrequire.define("templates/page/Header.html", [], function() {
        return "{{=runtime.Display}}"
    }), qrequire.define("classes/page/Header", ["dejavu", "dom", "doT", "utils", "text!templates/page/Header.html", "classes/page/PageElement"], function(e, $, t, n, i, r) {
        "use strict";
        return e.Class.declare({
            $name: "Header",
            $extends: r,
            initialize: function(e, t, n) {
                r.prototype.initialize.call(this, e, t, n), this._id = "Q_Header"
            },
            bind: function() {},
            setDef: function(e) {
                "string" == typeof e && (e = {
                    Display: e
                }), r.prototype.setDef.call(this, e)
            },
            render: function() {
                var e = t.template(i, n.merge(t.templateSettings, {
                    varname: "runtime"
                }));
                return e(this.runtime)
            }
        }, !0)
    }), qrequire.define("templates/page/Footer.html", [], function() {
        return "{{=runtime.Display}}"
    }), qrequire.define("classes/page/Footer", ["dejavu", "dom", "doT", "utils", "text!templates/page/Footer.html", "classes/page/PageElement"], function(e, $, t, n, i, r) {
        "use strict";
        return e.Class.declare({
            $name: "Footer",
            $extends: r,
            initialize: function(e, t, n) {
                r.prototype.initialize.call(this, e, t, n), this._id = "Q_Footer"
            },
            bind: function() {},
            setDef: function(e) {
                "string" == typeof e && (e = {
                    Display: e
                }), r.prototype.setDef.call(this, e)
            },
            render: function() {
                var e = t.template(i, n.merge(t.templateSettings, {
                    varname: "runtime"
                }));
                return e(this.runtime)
            }
        }, !0)
    }), qrequire.define("classes/DelayTimer", ["dejavu"], function(e) {
        "use strict";
        return e.Class.declare({
            $name: "DelayTimer",
            __id: null,
            __timerDelay: 500,
            __triggerFunction: null,
            __timeoutID: null,
            initialize: function(e, t) {
                this.__triggerFunction = e, t && (this.__timerDelay = t)
            },
            id: function() {
                return null === this.__id && (this.__id = Math.floor(1e9 * Math.random())), this.__id
            },
            currentTimeoutID: function() {
                return this.__timeoutID
            },
            restart: function() {
                this.clear(), this.__timeoutID = setTimeout(this.__triggerFunction, this.__timerDelay)
            },
            unbind: function() {
                this.clear(), this.__triggerFunction = null
            },
            clear: function() {
                clearTimeout(this.__timeoutID)
            }
        }, !0)
    }), qrequire.define("classes/page/RivetsSetup", ["rivets", "watch", "utils", "dejavu", "log", "classes/DelayTimer", "dom"], function(e, t, n, i, r, o, $) {
        "use strict";
        return i.FinalClass.declare({
            $name: "RivetsSetup",
            initialize: function() {
                e.configure({
                    prefix: "runtime",
                    adapter: {
                        subscribe: function(e, i, r) {
                            var o = i.split(".").length;
                            if (o > 1) {
                                var s = n.get(e, i.substr(0, i.lastIndexOf(".")));
                                void 0 !== s && t.watch(s, i.substr(i.lastIndexOf(".") + 1), r)
                            }
                            else t.watch(e, i, r)
                        },
                        unsubscribe: function(e, i, r) {
                            var o = i.split(".").length;
                            if (o > 1) {
                                var s = n.get(e, i.substr(0, i.lastIndexOf(".")));
                                void 0 !== s && t.unwatch(s, i.substr(i.lastIndexOf(".") + 1), r)
                            }
                            else t.unwatch(e, i, r)
                        },
                        read: function(e, t) {
                            var i = n.get(e, t);
                            return n.isFunction(i) ? i() : i
                        },
                        publish: function(e, t, n) {
                            for (var i = t.split("."), o, s = e; i.length > 0;)
                                if (o = i.splice(0, 1), "undefined" != typeof s[o] && i.length > 0) s = s[o];
                                else if (0 === i.length) {
                                if ("function" == typeof s[o]) throw new Error("Functions are not supported in this type of binding. keypath: " + t);
                                s[o] = n
                            }
                            else r.error("Missing bound path: " + t), i = []
                        }
                    }
                }), e.formatters.equals = function(e, t) {
                    return e == t
                }, e.formatters.or = function(e, t) {
                    return e || t
                }, e.formatters.HTMLDecode = function(e) {
                    return void 0 === e && (e = ""), $("<div/>").html(e).text()
                }, e.formatters.split = function(e, t, n) {
                    var i = e.split(t);
                    return i.length > n ? i[n] : e
                }, e.binders.file = {
                    bind: function(t) {
                        var n = e.config.adapter,
                            i = this.model,
                            r;
                        this.callback = function() {
                            t.files.length >= 1 && (r = t.files[0]);
                            var e = new FileReader;
                            e.onload = function(t) {
                                if (r) {
                                    var o = e.result;
                                    n.publish(i, "FileData", o), n.publish(i, "FileSize", r.size), n.publish(i, "FileName", r.name), n.publish(i, "FileType", r.type)
                                }
                            }, e.readAsDataURL(r)
                        }, $(t).on("change", this.callback)
                    },
                    unbind: function(e) {
                        $(e).off("change", this.callback)
                    },
                    routine: function(e, t) {}
                };
                var i = this;
                e.binders.textvalue = {
                    publishes: !0,
                    bind: function(t) {
                        var r = e.config.adapter,
                            o = n.get(this.model, this.keypath);
                        return this.callback = function(e) {
                            if ("binding" === e) t.value = r.read(this.model, this.keypath) || t.value || "", r.publish(this.model, this.keypath, t.value);
                            else {
                                r.publish(this.model, this.keypath, t.value, t.id);
                                var s = n.get(this.model, this.keypath);
                                this.model.ID && window.Page && window.Page.questionHasIPDLDependency && window.Page.questionHasIPDLDependency(this.model.ID) && s != o && i.restartInPageDisplayLogicTimer(), o = s
                            }
                        }.$bind(this), this.callback("binding"), e.bindEvent(t, "change", this.callback), e.bindEvent(t, "input", this.callback)
                    },
                    unbind: function(t) {
                        e.unbindEvent(t, "input", this.callback), i.unbindInPageDisplayLogicTimer()
                    },
                    routine: function(e, t) {
                        t !== e.value && $(e).val(t)
                    }
                }, e.binders.color = function(e, t) {
                    null === t && (t = ""), $(e).css("color", t)
                }, e.binders["class-capitalize-*"] = function(t, n) {
                    return this.args[0] = this.args[0].charAt(0).toUpperCase() + this.args[0].slice(1), e.binders["class-*"].apply(this, [t, n])
                }, e.binders["remove-class-*"] = function(t, n) {
                    return e.binders["class-*"].apply(this, [t, !n])
                }, e.binders["if"] = {
                    bind: function(e) {
                        this.marker || (this.marker = document.createComment("if binding"), e.parentNode.insertBefore(this.marker, e), e.parentNode.removeChild(e), this.shown = !1)
                    },
                    unbind: function(e) {
                        this.marker && (this.shown || this.marker.parentNode.insertBefore(e, this.marker.nextSibling), this.marker.parentNode.removeChild(this.marker))
                    },
                    routine: function(e, t) {
                        t = !!t, t !== this.shown && (t ? this.marker.parentNode.insertBefore(e, this.marker.nextSibling) : e.parentNode.removeChild(e), this.shown = t)
                    }
                }, e.binders["select-options"] = function(e, t) {
                    var n = $(e),
                        i = n.val();
                    $(e).empty().append(t), n.val(i)
                }
            },
            getRivets: function() {
                return e
            },
            restartInPageDisplayLogicTimer: function(e) {
                window.inPageDisplayLogicDelayTimer || (window.inPageDisplayLogicDelayTimer = new o(window.Page.evaluateInPageDisplayLogic, e)), window.inPageDisplayLogicDelayTimer.restart()
            },
            unbindInPageDisplayLogicTimer: function() {
                window.inPageDisplayLogicDelayTimer && (window.inPageDisplayLogicDelayTimer.unbind(), delete window.inPageDisplayLogicDelayTimer)
            }
        }, !0)
    }), qrequire.define("classes/page/TwoWayBinding", ["dejavu", "dom", "log"], function(e, $, t) {
        "use strict";
        return e.Class.declare({
            $name: "TwoWayBinding",
            __pageId: null,
            __isBound: !1,
            __interval: 100,
            initialize: function(e) {
                this.__pageId = e
            },
            _getElement: function() {
                return $("#" + this.__pageId)
            },
            bind: function() {
                var e = this._getElement();
                e.find('input[type="checkbox"]').dirtyWatch("checked", function() {
                    try {
                        $(this).change()
                    }
                    catch (e) {
                        t.error(e)
                    }
                }, this.__interval), e.find('input[type="radio"]').dirtyWatch("checked", function(e) {
                    if (!e) try {
                        $(this).change()
                    }
                    catch (n) {
                        t.error(n)
                    }
                }, this.__interval), e.find("select").not(".Q_lang").dirtyWatch("value", function() {
                    try {
                        $(this).change()
                    }
                    catch (e) {
                        t.error(e)
                    }
                }, this.__interval), e.find('textarea, input[type="text"], input[type="number"]').dirtyWatch("value", function() {
                    try {
                        $(this).trigger("input")
                    }
                    catch (e) {
                        t.error(e)
                    }
                }, this.__interval), this.__isBound = !0
            },
            unbind: function() {
                this.__isBound && (this.__isBound = !1, this._getElement().dirtyUnwatchAll())
            },
            triggerChange: function() {
                if (this.__isBound) {
                    var e = this._getElement();
                    e.find('input[type="radio"]').each(function() {
                        if ($(this).prop("checked")) try {
                            $(this).change()
                        }
                        catch (e) {
                            t.error(e)
                        }
                    });
                    try {
                        e.find('input[type="checkbox"]').change(), e.find("select").change(), e.find('textarea, input[type="text"], input[type="number"]').trigger("input").trigger("change")
                    }
                    catch (n) {
                        t.error(n)
                    }
                }
            }
        }, !0)
    }), qrequire.define("classes/page/NavButtonPageLoadingIndicator", ["dejavu", "classes/page/PageLoadingIndicator"], function(e, t) {
        "use strict";
        return e.Class.declare({
            $name: "NavButtonPageLoadingIndicator",
            $extends: t,
            initialize: function(e) {
                t.prototype.initialize.call(this, e, e.$name)
            },
            _reposition: function() {
                var e = this._parentObj.getElement(),
                    n = e.position(),
                    i = e.outerWidth(!0),
                    r = e.outerHeight(!0),
                    o = {
                        top: r / 2 + n.top,
                        left: i / 2 + n.left
                    },
                    s = this.getElement().outerWidth(),
                    a = this.getElement().outerHeight(),
                    u = o.top - a / 2,
                    l = o.left - s / 2;
                t.prototype._reposition.call(this, [l, u])
            }
        }, !0)
    }), qrequire.define("classes/page/NavigationButton", ["classes/page/PageElement", "classes/page/NavButtonPageLoadingIndicator", "dejavu", "dom", "log"], function(e, t, n, $, i) {
        "use strict";
        return n.AbstractClass.declare({
            $name: "NavigationButton",
            $extends: e,
            __isBound: !1,
            __originalStyles: null,
            __loader: null,
            __failSafeHandler: null,
            __displayHidden: !1,
            __isSoftDisabled: !1,
            isLoading: !1,
            initialize: function(t, n, i) {
                e.prototype.initialize.call(this, t, n, i), this.__clicked = this.__clicked.$bind(this), this.__handleKeyPress = this.__handleKeyPress.$bind(this), this.on("unbind", this._unbind.$bind(this))
            },
            _getElement: function() {
                var e = this._pageID ? "#" + this._pageID + " .ActivePage #" : "#";
                return $(e + this._id + "[page-id='" + this._pageID + "']")
            },
            _unbind: function() {
                this.__disableEventHandlers()
            },
            bind: function() {
                e.prototype.bind.call(this), this.reset(), this.__enableEventHandlers()
            },
            reset: function() {
                this.__originalStyles = null, this.__loader = null, this.isLoading = !1, this.__isSoftDisabled = !1, this.__displayHidden = !1, this.__removeOverlay(), this.disableFailSafe()
            },
            __saveStyles: function() {
                this.__originalStyles = this._$el.attr("style") || ""
            },
            prepareForHiding: function() {
                this.__originalStyles || this.__saveStyles()
            },
            disableButton: function() {
                this.runtime.Disabled = !0, this.__buttonExists() && this._boundView && this._boundView.sync()
            }.$bound(),
            enableButton: function() {
                this.runtime.Disabled = !1, this.__buttonExists() && this._boundView && this._boundView.sync()
            }.$bound(),
            actionFailed: function() {
                this.__loadEnd()
            }.$bound(),
            getElement: function() {
                return this._$el
            },
            hideDisplay: function() {
                this.__displayHidden || (this.__displayHidden = !0, this.prepareForHiding(), this._$el.css({
                    color: "rgba(0,0,0,0)"
                }))
            },
            showDisplay: function() {
                this.__displayHidden && this._$el.attr("style", this.__originalStyles), this.__originalStyles = null, this.__displayHidden = !1
            },
            __enableFailSafe: function() {
                this.__failSafeHandler = setTimeout(this.__loadEndTrigger.$bind(this), 1e4)
            },
            disableFailSafe: function() {
                clearTimeout(this.__failSafeHandler)
            },
            busify: function() {
                this.__buttonExists() && this.__loadStart()
            },
            softBusify: function() {
                this.__isSoftDisabled = !0, this.__buttonExists() && this.__softLoadStart()
            },
            unbusify: function() {
                this.__loadEnd()
            },
            __softLoadStart: function() {
                this.isLoading = !0, this.__disableEventHandlers(), this.__addOverlay(), this.__addLoader(), this.__enableFailSafe()
            },
            __loadStart: function() {
                this.isLoading = !0, this.disableButton(), this.__disableEventHandlers(), this.__addOverlay(), this.__addLoader(), this.__enableFailSafe()
            },
            __loadEnd: function() {
                this.isLoading = !1, this.__isSoftDisabled = !1, this.__removeOverlay(), this.__removeLoader(), this.disableFailSafe(), this.__enableEventHandlers(), this.__buttonExists() && (this.enableButton(), this.showDisplay())
            },
            __loadEndTrigger: function() {
                this.__loadEnd(), this._trigger("loadEnd")
            },
            __addOverlay: function() {
                $("#SkinContent").addClass("LoadingPage")
            },
            __removeOverlay: function() {
                $("#SkinContent").removeClass("LoadingPage")
            },
            __removeLoader: function() {
                this.__loader && (this.__loader.remove(), this.__loader = null)
            },
            __addLoader: function() {
                this.__loader || (this.__loader = new t(this), this._$el.parents("#Buttons").addClass("RelativePosition").append(this.__loader.render()), this.__loader.bind(), this.__loader.positionLoader())
            },
            __clicked: function() {
                return this.__isSoftDisabled ? void 0 : (i.updateState("UserAction", "NavigationButtonClicked"), this._trigger("clicked"), this.__loadStart(), this.doAction(), !1)
            },
            __handleKeyPress: function(e) {
                (13 == e.charCode || 32 == e.charCode) && this.__clicked()
            },
            translate: function(e) {},
            __buttonExists: function() {
                return !!this._$el
            },
            __disableEventHandlers: function() {
                this.__buttonExists() && (this._$el.off("keypress", this.__handleKeyPress).off("click", this.__clicked), this.__isBound = !1)
            },
            __enableEventHandlers: function() {
                this.__buttonExists() && !this.__isBound && (this._$el.on("keypress", this.__handleKeyPress).on("click", this.__clicked), this.__isBound = !0)
            }
        }, !0)
    }), qrequire.define("templates/page/NextButton.html", [], function() {
        return '<input id="NextButton" class="NextButton Button" title="{{!it.buttonText}}" type="button" name="NextButton" value="{{!it.buttonText}}" data-runtime-disabled="runtime.Disabled" data-runtime-aria-label="runtime.ariaLabel" role="button" page-id="{{=it.pageId}}">\n'
    }), qrequire.define("classes/page/NextButton", ["dejavu", "classes/page/NavigationButton", "text!templates/page/NextButton.html", "doT"], function(e, t, n, i) {
        "use strict";
        return e.Class.declare({
            $name: "NextButton",
            $extends: t,
            initialize: function(e, n, i) {
                t.prototype.initialize.call(this, e, n, i), this._id = "NextButton", this.runtime.ariaLabel = "Next"
            },
            next: function() {
                try {
                    document.activeElement.blur()
                }
                catch (e) {}
                this._trigger("next")
            },
            doAction: function() {
                this.next()
            },
            render: function() {
                var e = i.template(n);
                return e({
                    pageId: this._page.id(),
                    buttonText: this.runtime.Display
                })
            }
        }, !0)
    }), qrequire.define("templates/page/PreviousButton.html", [], function() {
        return '<input id="PreviousButton" class="PreviousButton Button" title="{{!it.buttonText}}" type="button" name="PreviousButton" value="{{!it.buttonText}}" data-runtime-disabled="runtime.Disabled" data-runtime-aria-label="runtime.ariaLabel" role="button" page-id="{{=it.pageId}}">\n'
    }), qrequire.define("classes/page/PreviousButton", ["dejavu", "classes/page/NavigationButton", "text!templates/page/PreviousButton.html", "doT"], function(e, t, n, i) {
        "use strict";
        return e.Class.declare({
            $name: "PreviousButton",
            $extends: t,
            initialize: function(e, n, i) {
                t.prototype.initialize.call(this, e, n, i), this._id = "PreviousButton", this.runtime.ariaLabel = "Previous"
            },
            prev: function() {
                try {
                    document.activeElement.blur()
                }
                catch (e) {}
                this._trigger("prev")
            },
            doAction: function() {
                this.prev()
            },
            render: function() {
                var e = i.template(n);
                return e({
                    pageId: this._page.id(),
                    buttonText: this.runtime.Display
                })
            }
        }, !0)
    }), qrequire.define("templates/page/TOCButton.html", [], function() {
        return '<input id="JumpButton" class="JumpButton Button" title="{{!it.buttonText}}" type="button" name="JumpButton" value="{{!it.buttonText}}" data-runtime-disabled="runtime.Disabled" data-runtime-aria-label="runtime.ariaLabel" role="button" page-id="{{=it.pageId}}">\n'
    }), qrequire.define("classes/page/TOCButton", ["dejavu", "classes/page/NavigationButton", "text!templates/page/TOCButton.html", "doT"], function(e, t, n, i) {
        "use strict";
        return e.Class.declare({
            $name: "TOCButton",
            $extends: t,
            initialize: function(e, n, i) {
                t.prototype.initialize.call(this, e, n, i), this._id = "JumpButton", this.runtime.Display = e.ButtonText, this.runtime.ariaLabel = e.ButtonText || "TOC"
            },
            jump: function() {
                try {
                    document.activeElement.blur()
                }
                catch (e) {}
                this._trigger("jump")
            },
            doAction: function() {
                this.jump()
            },
            render: function() {
                var e = i.template(n);
                return e({
                    pageId: this._page.id(),
                    buttonText: this.runtime.Display
                })
            }
        }, !0)
    }), qrequire.define("classes/page/PageButtons", ["dejavu", "utils", "classes/page/NextButton", "classes/page/PreviousButton", "classes/page/TOCButton", "doT"], function(e, t, n, i, r, o) {
        "use strict";
        return e.Class.declare({
            $name: "PageButtons",
            __page: null,
            __defaultNextButtonDef: {},
            __defaultPreviousButtonDef: {},
            __defaults: {},
            initialize: function(e) {
                this.__page = e
            },
            getNextButton: function() {
                return this.__defaults.NextButton || null
            },
            getPreviousButton: function() {
                return this.__defaults.PreviousButton || null
            },
            getTOCButton: function() {
                return this.__defaults.TOCButton || null
            },
            reset: function() {
                this.__defaults.NextButton && (this.__defaults.NextButton.setDef(this.__defaultNextButtonDef), this.__defaults.NextButton.unbind()), this.__defaults.PreviousButton && (this.__defaults.PreviousButton.setDef(this.__defaultPreviousButtonDef), this.__defaults.PreviousButton.unbind()), this.__defaults.TOCButton && this.__defaults.TOCButton.unbind()
            },
            bind: function(e) {
                this.__defaults.NextButton && this.__defaults.NextButton.bind(), e.previousButtonIsEnabled() && this.__defaults.PreviousButton ? this.__defaults.PreviousButton.bind() : this.__defaults.PreviousButton && this.__defaults.PreviousButton.reset(), !e.isTOC() && e.getTOCTreeStructure() && e.getTOCTreeStructure().ShowButton ? this.__defaults.TOCButton.bind() : this.__defaults.TOCButton && this.__defaults.TOCButton.reset()
            },
            unbind: function() {
                this.__defaults.NextButton && this.__defaults.NextButton.unbind(), this.__defaults.PreviousButton && this.__defaults.PreviousButton.unbind(), this.__defaults.TOCButton && this.__defaults.TOCButton.unbind()
            },
            setNextButtonText: function(e) {
                if (this.__defaults.NextButton) {
                    var n = t.get(this.__defaultNextButtonDef, "Language." + this.__page.runtime.Language + ".Display") || t.get(this.__defaultNextButtonDef, "Display") || " >> ";
                    this.__setNavButtonText(this.__defaults.NextButton, e, n)
                }
            },
            setPreviousButtonText: function(e) {
                if (this.__defaults.PreviousButton) {
                    var n = t.get(this.__defaultPreviousButtonDef, "Language." + this.__page.runtime.Language + ".Display") || t.get(this.__defaultPreviousButtonDef, "Display") || " << ";
                    this.__setNavButtonText(this.__defaults.PreviousButton, e, n)
                }
            },
            __setNavButtonText: function(e, t, n) {
                t && "" !== t ? e.runtime.Display = t : e.runtime.Display = n
            },
            busifyNavigationButtons: function() {
                this.__defaults.NextButton && this.__defaults.NextButton.softBusify(), this.__defaults.PreviousButton && this.__defaults.PreviousButton.softBusify(), this.__defaults.TOCButton && this.__defaults.TOCButton.softBusify()
            },
            unbusifyNavigationButtons: function() {
                this.__defaults.NextButton && this.__defaults.NextButton.unbusify(), this.__defaults.PreviousButton && this.__defaults.PreviousButton.unbusify(), this.__defaults.TOCButton && this.__defaults.TOCButton.unbusify()
            },
            handleNavButtonMessages: function(e) {
                this.setNextButtonText(e.getNextButtonText()), this.setPreviousButtonText(e.getPreviousButtonText()), this.__defaults.NextButton.runtime.ariaLabel = e.getNextButtonAriaLabel(), this.__defaults.PreviousButton.runtime.ariaLabel = e.getPreviousButtonAriaLabel()
            },
            enableButtons: function() {
                this.enableNextButton(), this.enablePreviousButton(), this.enableTOCButton()
            },
            disableButtons: function() {
                this.disableNextButton(), this.disablePreviousButton(), this.disableTOCButton()
            },
            enableNextButton: function() {
                this.__defaults.NextButton && this.__defaults.NextButton.enableButton()
            },
            disableNextButton: function() {
                this.__defaults.NextButton && this.__defaults.NextButton.disableButton()
            },
            enablePreviousButton: function() {
                this.__defaults.PreviousButton && this.__defaults.PreviousButton.enableButton()
            },
            disablePreviousButton: function() {
                this.__defaults.PreviousButton && this.__defaults.PreviousButton.disableButton()
            },
            enableTOCButton: function() {
                this.__defaults.TOCButton && this.__defaults.TOCButton.enableButton()
            },
            disableTOCButton: function() {
                this.__defaults.TOCButton && this.__defaults.TOCButton.disableButton()
            },
            createNextButton: function(e, t) {
                this.__defaultNextButtonDef = this.__page.options.get("NextButton"), this.__defaults.NextButton = new n(e, t, this.__page)
            },
            createPreviousButton: function(e, t) {
                this.__defaultPreviousButtonDef = this.__page.options.get("PreviousButton"), this.__defaults.PreviousButton = new i(e, t, this.__page)
            },
            createTOCButton: function(e, t) {
                this.__defaults.TOCButton = new r(e, t, this.__page)
            },
            clearButtons: function() {
                this.__defaults.NextButton = null, this.__defaults.PreviousButton = null
            }
        }, !0)
    }), qrequire.define("classes/page/PDFRenderer", ["dejavu", "dom"], function(e, $) {
        "use strict";
        return e.Class.declare({
            $name: "PDFRenderer",
            renderPDF: function() {
                $("body").children("script").remove();
                var e = $("body").clone();
                e.find("link").each(function(e, t) {
                    t.setAttribute("href", t.href)
                }), e.find('input[type="radio"], input[type="checkbox"]').each(function(e, t) {
                    t.checked && $(t).attr("checked", "checked")
                }), e.find('input[type="text"], input[type="password"]').each(function(e, t) {
                    $(t).attr("value", t.value)
                });
                var t = $("select");
                e.find("select").each(function(e, n) {
                    $(n).children().each(function(n, i) {
                        t.eq(e).children().eq(n).prop("selected") && $(i).attr("selected", "selected")
                    })
                }), t = $("textarea"), e.find("textarea").each(function(e, n) {
                    $(n).html(t.eq(e).val())
                });
                var n = e[0].innerHTML,
                    i = this.getStylesheetLinks(null),
                    r = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><head><meta http-equiv="content-type" content="text/html; charset=UTF-8" />' + i + '</head><body style="min-width:0; background:#fff;" class="ToPDF">';
                return r += n + "</body></html>", r = r.replace(/-moz-use-text-color/g, "")
            },
            getStylesheetLinks: function(e) {
                var t = "",
                    n = document,
                    i = window;
                e && (i = e, n = i.document);
                try {
                    var r = n.styleSheets,
                        o = i.location.href;
                    o = o.substr(0, o.lastIndexOf("/")), o = o.substr(0, o.lastIndexOf("/"));
                    for (var s = 0; s < r.length; s++) {
                        var a = r[s].href;
                        if (a) - 1 != a.indexOf("../") && (a = a.replace("..", o)), a += (-1 != a.indexOf("?") ? "&x=" : "?=") + Math.random(), t += '<link rel="stylesheet" type="text/css" href="' + a + '" />\n';
                        else {
                            var u = r[s].cssRules || r[s].rules;
                            t += "<style>";
                            for (var l = 0; l < u.length; l++) {
                                var c = u[l].cssText;
                                c && (-1 != c.indexOf("../") && (c = c.replace("..", o)), t += c + "\n")
                            }
                            t += "</style>"
                        }
                    }
                }
                catch (d) {
                    console.error(d)
                }
                return t
            }
        }, !0)
    }), qrequire.define("templates/pageMessage.html", [], function() {
        return '<div id="EndOfSurvey" class="END_OF_SURVEY EndOfSurvey BorderColor {{? it.IsSystemMessage}}SystemEndOfSurvey{{?}}">{{=it.Display}}</div>'
    }), qrequire.define("templates/toc/TOC.html", [], function() {
        return '<div id="TOCPage">\n\n{{? runtime.InvalidBlocksMessage }}\n<div class="HeaderValidationError">\n  <h1>{{=runtime.InvalidBlocksMessage}}</h1>\n\n  <ul>\n    {{~runtime.InvalidBlocks :blockID:blockIndex}}\n    <li>{{=runtime.InvalidBlocks[blockIndex]}}</li>\n    {{~}}\n  </ul>\n</div>\n{{?}}\n\n{{? runtime.TitleMessage }}\n<div class="QuestionOuter BorderColor">\n  <div class="Inner BorderColor">\n    <div class="InnerInner BorderColor">\n      <fieldset>\n        <label class="QuestionText BorderColor" data-runtime-html="runtime.TitleMessage">\n        </label>\n      </fieldset>\n    </div>\n  </div>\n</div>\n{{?}}\n\n<div class="QuestionOuter BorderColor">\n  <div class="Inner BorderColor">\n    <div class="InnerInner BorderColor">\n      <fieldset>\n        <label class="QuestionText BorderColor">\n          {{= TOCLIST }}\n        </label>\n      </fieldset>\n    </div>\n  </div>\n</div>\n</div>\n'
    }), qrequire.define("templates/toc/TOCList.html", [], function() {
        return '{{ function buildList(a, root) { }}\n  <ul>\n    {{~a :v:index}}\n      {{ if(v.Flow) { }}\n        {{? v.Desc }}\n          <li>\n            <strong>\n              <span class=\'TocIcon\'></span>\n              <span class=\'TocText\' data-runtime-html="{{=root}}.Flow.{{=index}}.Desc"></span>\n            </strong>\n          </li>\n        {{?}}\n        {{ buildList(v.Flow, root+\'.Flow.\'+index); }}\n      {{ } else { }}\n        <li class="{{ if(v.PercentComplete == 100){ }}Complete {{ }else{ }}Incomplete {{ } }}{{? !v.Valid}}Alert{{?}}{{ if(v.CurrentNode === true){ }}Current {{ } }}">\n          <a href="#" id="{{=v.ID}}" onclick="window.Page.jump(\'{{=v.ID}}\');return false;">\n            <span class="TocIcon">{{ if(v.PercentComplete > 0 && v.PercentComplete < 100 && v.Valid && v.ShowPercent){ }}{{=v.PercentComplete}}% {{ } }}</span>\n            <span class="TocText" data-runtime-html="{{=root}}.Flow.{{=index}}.Desc"></span>\n            <div class="clear"></div>\n          </a>\n        </li>\n      {{ } }}\n    {{~}}\n  </ul>\n{{ } }}\n\n\n<div id="Toc">\n  {{? runtime.Desc }}\n    <strong data-runtime-html="runtime.Desc"></strong>\n  {{?}}\n  {{ buildList( runtime.Flow , \'runtime\'); }}\n</div>'
    }), qrequire.define("renderers/TableOfContents", ["utils", "doT", "classes/page/PageElement", "text!templates/toc/TOC.html", "text!templates/toc/TOCList.html", "dejavu"], function(e, t, n, i, r, o) {
        "use strict";
        return o.Class.declare({
            $name: "TableOfContentsRenderer",
            $extends: n,
            _tpl: "",
            initialize: function(n, o, s) {
                this.$super(n, o, s), this._id = "TOCPage", this.runtime = n;
                var a = i.replace("{{= TOCLIST }}", r),
                    u = t.template(a, e.merge(t.templateSettings, {
                        varname: "runtime"
                    }));
                this._tpl = u(this.runtime)
            },
            render: function() {
                return this._tpl
            }
        })
    }), qrequire.define("templates/toc/TOCSidebar.html", [], function() {
        return "\n<div id='TocSidebarContainer' class='closed reduced'>\n  <div id='TocSidebar'>\n    <a href=\"#\" id='TOCToggle'>\n      <div id='TocSidebarIcons'>\n        <div id='TocIcon'></div>\n        <div id='TocArrow'></div>\n      </div>\n    </a>\n    <div class='clear'></div>\n    <div id='TocSidebarContent'>\n    {{= TOCLIST }}\n    </div>\n  </div>\n</div>\n"
    }), qrequire.define("renderers/TableOfContentsSidebar", ["utils", "doT", "renderers/TableOfContents", "text!templates/toc/TOCSidebar.html", "text!templates/toc/TOCList.html", "jquery", "dejavu"], function(e, t, n, i, r, $, o) {
        "use strict";
        return o.Class.declare({
            $name: "TableOfContentsSidebarRenderer",
            $extends: n,
            initialize: function(n, o, s) {
                this.$super(n, o, s), this._id = "TocSidebarContainer";
                var a = i.replace("{{= TOCLIST }}", r),
                    u = t.template(a, e.merge(t.templateSettings, {
                        varname: "runtime"
                    }));
                this._tpl = u(this.runtime), $(document.body).addClass("TocMargin"), $(window).resize(this.handleScreenSize)
            },
            clearResizeListener: function() {
                $(window).off("resize", this.handleScreenSize)
            },
            toggleClosed: function() {
                this._page.findElementsOnPage("#TocSidebarContainer").toggleClass("closed")
            },
            handleScreenSize: function() {
                if (this._page.findElementsOnPage("#TocSidebarContainer").length) {
                    var e = this._page.findElementsOnPage(".Skin").offset().left,
                        t = this._page.findElementsOnPage("#TocSidebarContainer").offset().left,
                        n = Math.abs(e - t) > 250;
                    n ? (this._page.findElementsOnPage("#TocSidebarContainer").removeClass("reduced"), this._page.findElementsOnPage("#TocSidebarContainer").removeClass("closed")) : this._page.findElementsOnPage("#TocSidebarContainer").hasClass("reduced") || (this._page.findElementsOnPage("#TocSidebarContainer").addClass("reduced"), this._page.findElementsOnPage("#TocSidebarContainer").addClass("closed"))
                }
            }.$bound()
        })
    }), qrequire.define("templates/page/TrialFooter.html", [], function() {
        return '\n<div id="TrialAccountFooter">\n    <div class="footerimg"></div>\n    <span class="logotext"><a target="_blank" href=\'http://www.qualtrics.com\'>Powered by Qualtrics</a></span>\n    <span class="trialtext report"><a href="https://jfe.qualtrics.com/form/SV_dfXmJi0B7fAjs3j?OSID={{=it.surveyId}}&L={{=it.language}}">Report Abuse</a></span>\n    <span class="trialtext account"><a target="_blank" href=\'http://www.qualtrics.com/free-account/?utm_campaign=surveyfooter\'>Start Your Free Account Today</a></span>\n</div>\n<style type="text/css">\n    #TrialAccountFooter a {\n        text-decoration: none;\n        color: inherit;\n    }\n\n    #TrialAccountFooter {\n        position: fixed;\n        left: 0;\n        bottom: 0;\n        height: 50px;\n        line-height: 50px;\n        padding: 10px 3%;\n        width: 94%;\n        background-color: #FFF;\n        border-top: 2px solid #BB141A;\n        color: #828E90;\n        box-sizing: content-box;\n        font-family: Arial,Verdana,sans-serif;\n        font-size: 12px;\n    }\n    #TrialAccountFooter ul {\n        padding-left: 0;\n        list-style: none;\n        display: block;\n        line-height: 50px;\n        height: 50px;\n        float: right;\n        margin-right: 20px;\n        margin-top: 0px;\n    }\n\n    #TrialAccountFooter li {\n        display: inline-block;\n        line-height: 50px;\n        font-size: 13px;\n        font-family: "Arial", sans-serif;\n        margin-right: 10px;\n    }\n\n    #TrialAccountFooter .footerimg {\n        top: 0px;\n        position: absolute;\n        width: 57px;\n        height: 51px;\n        background-size: 57px 51px;\n        background-repeat: no-repeat;\n        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAAzCAYAAAAtg6DjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3VJREFUeNrsWs11m0AQXnguQIeccgmqwLgCw8Fn2xVYVGBRgeUKZFUguQKRsw9CFYhUIHLJKQfSQXb8JnrrNezMIrAXO/MeDz09GPab+Xb+wBNSnr58jeRpI2iJL37/ysU7ilzrXJ6m1HVynd6/3z6eI+YzSvH+8pNpjFAHecq5UVrHBZAF87pXIIMOlbsigQ4yZNxUubByi5hwfgApuRswb6rEQMVnUhXkx8CwRTpdhya5rSc/vNjQ9T9I10HmnwHkEGX0GUBaFS++RZI/HZghDmWoL8ukog+K9NhqjdruyWIoIJlUBdnqIMsOlbsSdEod5JZJlWBAnix0kNxc6QJITgCs1FjjY49WMCkbDcSTWVOezDuyYp+RNWCy6cX2O1F+P8pjcqwncYAUaBYHA5YdzIi4THrhSU9b4J5hqTM9t2LugjHhDXF/gcZcSR1VC08uGY4A3YmprFswnnVT4zmY2d4xDATXwtx0L++btUjsV4xrHvU/vBqP7IlcBLQbK3tkV3N9gRT9I49vSLOgIZclnOGUfBYAXFMTA6krNhboSCHKmwFO3EGWGkBY7FjqAUqn8pgBddAocU1wA+Ab8Kotgxrkvu5Pr6E23BHUWyEtNqa90OCRGVKb3EtaVN238WJtq4XeTAmFsPlvNQonnE0F3m3QP8HAUid3jLYqseon5UIyPQwTQWBhEz2k/gdkAwkUvUhF1HtTejI1zYlFr9nmFULaoB+Aqm+tllRORKPZTwaQtnFfNS2xLeaQmnD/RoRxyW3iEwthKRHKewdLoCtDzbwm9mKF6ac6CqSyEAro5Ig2bNGCHc8s4041fAuLU0DXbUYTDQFIdAWQDVIBem0IRiEm9qDF3syYlxd1tXNnIJXUcmZoywDorkVdWjI9HrfpZLwjerspBoaRgVYZ9na5ujg0QIiR85LZCKdUqugcpNZi3Yr+p3klUtW6RTtqgg4PxDJtjIGpz+8KAsH4tKVzTxq8GyEFz9HDYQOdCzxvcZ+vGYWF9bdEnnBIDB3K26SQNxJOzhxhqgoHCRIjsA3QKWOo5hZdiZFKY7OMDfxzmsKpxSW2gqArdg6kkoPnHanLnXwJi0k/60AV6Lg+Ee5KIl4PqW2K+BTrbeEJx4X7fasCDlq3B7Uych4kAo2wdLwy0PI7jkIqp4sBC8AHz3GKgr8CDAAZQVdZt5Eb1wAAAABJRU5ErkJggg==);\n\n        float: left;\n    }\n    #TrialAccountFooter .logotext {\n        text-transform: uppercase;\n        display: block;\n        float: left;\n        margin-left: 80px;\n    }\n\n    #TrialAccountFooter .trialtext {\n        display: block;\n        float: right;\n        margin-right: 20px;\n        background-color: #EFEFEF;\n        padding: 0px 20px;\n        border-radius: 3px;\n        font-family: "Arial", sans-serif;\n        font-size: 13px;\n        height: 30px;\n        line-height:30px;\n        margin-top: 10px;\n    }\n\n    #TrialAccountFooter .trialtext.report {\n        background-color: #8ab7c3;\n        color: white;\n    }\n    #TrialAccountFooter .trialtext.report a {\n        text-decoration: none;\n    }\n\n    body {\n        padding-bottom: 40px!important;\n    }\n\n    @media screen and (max-width: 675px) {\n        #TrialAccountFooter .logotext {\n            width: 100px;\n            line-height: 1em;\n            padding-top: 1em;\n        }\n    }\n    @media screen and (max-width: 600px) {\n        #TrialAccountFooter .account {\n            display: none;\n        }\n    }\n    @media screen and (max-width: 350px) {\n        #TrialAccountFooter .logotext {\n            display: none;\n        }\n    }\n\n</style>'
    }), qrequire.define("core/UserAgent", [], function() {
        "use strict";

        function e(e, t) {
            if (!e) {
                if ("undefined" == typeof window) return !1;
                if (!window || !window.navigator || !window.navigator.userAgent) return !1;
                e = navigator.userAgent
            }
            return !!e.match(t)
        }
        return {
            isIPad: function(t) {
                return e(t, /iPad/)
            },
            isMobile: function(t) {
                return e(t, /Mobile|Android|BlackBerry/)
            },
            parseUserAgent: function(e) {
                function t() {
                    s = /U;\s*([^;\)]*)/, u = s.exec(n), u ? i.os = u[1] : (s = /\(([^)]*)\)/, u = s.exec(n), u && (u = u[1].split(";"), "X" == u[0][0] ? i.os = u[1] : "Mobile" == u[0] && u[1] ? i.os = u[1] : "Linux" == u[0] && u[1] && -1 !== u[1].indexOf("Android") ? i.os = u[1] : i.os = u[0]))
                }
                for (var n = e || ("undefined" != typeof navigator ? navigator.userAgent : ""), i = {
                        ua: n,
                        browser: ""
                    }, r = /rv:([\d+\.]+)/, o = /(([^\/\s]*)\/([^\s;]*))/, s, a = n, u = !0; u;)
                    if (u = o.exec(a), u && (a = RegExp.rightContext, u[2] && u[2].toLowerCase)) switch (u[2].toLowerCase()) {
                        case "chrome":
                            i.browser = u[2], i.version = u[3], -1 === a.toLowerCase().indexOf("edge") && (u = !1);
                            break;
                        case "trident":
                            if (parseFloat(u[3]) >= 7) {
                                var l = r.exec(a);
                                l && (i.browser = "MSIE", i.version = l[1], u = !1)
                            }
                            break;
                        case "edge":
                        case "firefox":
                        case "netscape":
                        case "safari":
                        case "camino":
                        case "mosaic":
                        case "galeon":
                        case "opera":
                        case "mozilla":
                        case "konqueror":
                            i.browser = u[2], i.version = u[3]
                    }
                    switch ("Mozilla" == i.browser && "Mozilla" == i.browser && -1 != n.indexOf("(compatible;") && (s = /\(compatible; ([^ ]*)[ \/]([^;]*).*/, u = s.exec(n), u && (i.browser = u[1], i.version = u[2])), i.browser.toLowerCase()) {
                        case "msie":
                            s = /\(compatible;[^;]*;\s*([^;\)]*)/, u = s.exec(n), u ? i.os = u[1] : t();
                            break;
                        case "opera":
                            s = /\(([^;\)]*)/, u = s.exec(n), i.os = u[1];
                            break;
                        case "konqueror":
                            s = /Konqueror[^;]*;\s*([^;\)]*)/, u = s.exec(n), i.os = u[1];
                            break;
                        case "safari":
                            s = /Version\/([^ ]*)/, u = s.exec(n), u && u[1] ? (u = s.exec(n), i.version = u && u[1]) : (s = /CriOS\/([^ ]*)/, u = s.exec(n), u && u[1] && (u = s.exec(n), i.version = u && u[1], i.browser = "Chrome")), -1 != n.indexOf("iPhone") && (i.browser += " iPhone"), -1 != n.indexOf("iPad") && (i.browser += " iPad");
                        case "firefox":
                        default:
                            t()
                    }
                return i.os && (i.os = i.os.trim()), i
            }
        }
    }), qrequire.define("core/BrowserInfo", ["Qualtrics", "core/UserAgent"], function(e, t) {
        "use strict";
        return {
            getPageData: function(t, n) {
                var i = this.getURLParams();
                for (var r in i) r in n || (n[r] = i[r]);
                e && (e.MobileGUID && (t.MobileGUID = e.MobileGUID), e.DeviceIdentifier && (n.DeviceIdentifier = e.DeviceIdentifier, t.DeviceIdentifier = e.DeviceIdentifier));
                var o = {};
                try {
                    o = this.getBrowserInfo()
                }
                catch (s) {
                    "undefined" != typeof console && console.error("Error processing browserData", s)
                }
                o.resolution && o.resolution.x && o.resolution.y && (t.Resolution = o.resolution.x + "x" + o.resolution.y), o.flashVersion && (t.FlashVersion = o.flashVersion), o.java && (t.JavaSupport = o.java)
            },
            _getCurrentURL: function() {
                return document.URL
            },
            getURLParams: function(e) {
                return this._convertURLParams(this.getQueryString(e))
            },
            getQueryString: function(e) {
                var t = e || this._getCurrentURL();
                t.indexOf("#") >= 0 && (t = t.substr(0, t.indexOf("#")));
                var n = t.indexOf("?");
                return -1 !== n ? t.substring(n + 1) : ""
            },
            buildQueryString: function(e) {
                var t = "";
                for (var n in e) t && (t += "&"), t += encodeURIComponent(n) + "=" + encodeURIComponent(e[n]);
                return t
            },
            _convertURLParams: function(e) {
                var t = {};
                if ("" === e) return t;
                for (var n = e.split("&"), i = function(e) {
                        return decodeURIComponent(e.replace(/\+/g, " "))
                    }, r = 0; r < n.length; r++) {
                    var o = n[r].split("=");
                    if (o.length < 2) "undefined" != typeof console && console.warn("Failed to parse embedded data: " + o);
                    else try {
                        var s = i(o[0]),
                            a = i(o.slice(1).join("="));
                        if (!s.length) throw new Error("Zero-length key");
                        t[s] = a
                    }
                    catch (u) {
                        "undefined" != typeof console && console.warn("Failed to decode embedded data: " + o, u)
                    }
                }
                return t
            },
            cachedBrowserInfo: null,
            Flash: {
                isIE: -1 != navigator.appVersion.indexOf("MSIE") ? !0 : !1,
                isWin: -1 != navigator.appVersion.toLowerCase().indexOf("win") ? !0 : !1,
                isOpera: -1 != navigator.userAgent.indexOf("Opera") ? !0 : !1,
                ControlVersion: function() {
                    var e, t;
                    try {
                        t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"), e = t.GetVariable("$version")
                    }
                    catch (n) {}
                    if (!e) try {
                        t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), e = "WIN 6,0,21,0", t.AllowScriptAccess = "always", e = t.GetVariable("$version")
                    }
                    catch (n) {}
                    if (!e) try {
                        t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3"), e = t.GetVariable("$version")
                    }
                    catch (n) {}
                    if (!e) try {
                        t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3"), e = "WIN 3,0,18,0"
                    }
                    catch (n) {}
                    if (!e) try {
                        t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), e = "WIN 2,0,0,11"
                    }
                    catch (n) {
                        e = -1
                    }
                    return e
                },
                GetSwfVer: function() {
                    var e = -1;
                    if (navigator.plugins && navigator.plugins.length > 0) {
                        if (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]) {
                            var t = navigator.plugins["Shockwave Flash 2.0"] ? " 2.0" : "",
                                n = navigator.plugins["Shockwave Flash" + t].description,
                                i = n.split(" "),
                                r = i[2].split("."),
                                o = r[0],
                                s = r[1],
                                a = i[3];
                            "" === a && (a = i[4]), "d" == a[0] ? a = a.substring(1) : "r" == a[0] && (a = a.substring(1), a.indexOf("d") > 0 && (a = a.substring(0, a.indexOf("d")))), e = o + "." + s + "." + a
                        }
                    }
                    else -1 != navigator.userAgent.toLowerCase().indexOf("webtv/2.6") ? e = 4 : -1 != navigator.userAgent.toLowerCase().indexOf("webtv/2.5") ? e = 3 : -1 != navigator.userAgent.toLowerCase().indexOf("webtv") ? e = 2 : this.isIE && this.isWin && !this.isOpera && (e = this.ControlVersion());
                    return e
                }
            },
            _parseUserAgent: function() {
                var e = t.parseUserAgent();
                return e.resolution = {
                    x: screen.width,
                    y: screen.height
                }, e.java = navigator.javaEnabled() ? 1 : 0, e.flashVersion = this.Flash.GetSwfVer(), e.flashVersion && e.flashVersion.replace && (e.flashVersion = e.flashVersion.replace(/,/g, "."), e.flashVersion = e.flashVersion.replace(/WIN /g, "")), e
            },
            getBrowserInfo: function() {
                return this.cachedBrowserInfo || (this.cachedBrowserInfo = this._parseUserAgent()), this.cachedBrowserInfo
            },
            getCurrentPosition: function(e) {
                var t = 1e4,
                    n = 6e4,
                    i = {
                        enableHighAccuracy: !0,
                        timeout: t,
                        maximumAge: n
                    },
                    r = {
                        enableHighAccuracy: !1,
                        timeout: t,
                        maximumAge: n
                    },
                    o = function(t) {
                        var n = {
                            accuracy: t.coords.accuracy || -1,
                            latitude: t.coords.latitude,
                            longitude: t.coords.longitude
                        };
                        this.getBrowserInfo(), this.cachedBrowserInfo.locationaccuracy = n.accuracy, this.cachedBrowserInfo.latitude = n.latitude, this.cachedBrowserInfo.longitude = n.longitude, e && e(n)
                    }.bind(this),
                    s = function(t) {
                        this.getBrowserInfo(), this.cachedBrowserInfo.locationerror = t.code, e && e({
                            error: t.code
                        })
                    }.bind(this),
                    a = function(t) {
                        var n = {
                            accuracy: t.coords.accuracy || -1,
                            latitude: t.coords.latitude,
                            longitude: t.coords.longitude
                        };
                        this.getBrowserInfo(), this.cachedBrowserInfo.locationaccuracy = n.accuracy, this.cachedBrowserInfo.latitude = n.latitude, this.cachedBrowserInfo.longitude = n.longitude, e && e(n)
                    }.bind(this),
                    u = function(e) {
                        this.geoPosition.getCurrentPosition(o, s, r)
                    }.bind(this);
                this.geoPosition.getCurrentPosition(a, u, i) || (this.getBrowserInfo(), this.cachedBrowserInfo.locationerror = 1, e({
                    locationerror: 1
                }))
            },
            geoPosition: function() {
                var e = {},
                    t = null,
                    n = "undefined",
                    i;
                return e.getCurrentPosition = function(e, r, o) {
                    try {
                        var s = typeof navigator.geolocation != n;
                        if (!s && !window.confirm("Qualtrics wants to use your location.\nDo you want to allow it?")()) return !1;
                        if (window.geoPositionSimulator && window.geoPositionSimulator.length > 0) t = window.geoPositionSimulator;
                        else if (window.bondi && typeof window.bondi.geolocation !== n) t = window.bondi.geolocation;
                        else if (s) t = navigator.geolocation, i = function(e, i, r) {
                            function o(t) {
                                var i;
                                i = typeof t.latitude != n ? {
                                    timestamp: t.timestamp,
                                    coords: {
                                        latitude: t.latitude,
                                        longitude: t.longitude
                                    }
                                } : t, e(i)
                            }
                            t.getCurrentPosition(o, i, r)
                        };
                        else if (typeof window.blackberry != n && window.blackberry.location.GPSSupported) {
                            if (typeof window.blackberry.location.setAidMode == n) return !1;
                            window.blackberry.location.setAidMode(2), i = function(e, t, n) {
                                function i() {
                                    -1 != r.blackberryTimeoutId && r.error({
                                        message: "Timeout error",
                                        code: 3
                                    })
                                }
                                var r = {
                                    success: 0,
                                    error: 0,
                                    blackberryTimeoutId: -1
                                };
                                r.success = e, r.error = t, n.timeout ? r.blackberryTimeoutId = setTimeout(i, n.timeout) : r.blackberryTimeoutId = setTimeout(i, 6e4), window.blackberry.location.onLocationUpdate(function() {
                                    if (clearTimeout(r.blackberryTimeoutId), r.blackberryTimeoutId = -1, r.success && r.error) {
                                        if (0 === window.blackberry.location.latitude && 0 === window.blackberry.location.longitude) r.error({
                                            message: "Position unavailable",
                                            code: 2
                                        });
                                        else {
                                            var e = null;
                                            window.blackberry.location.timestamp && (e = new Date(window.blackberry.location.timestamp)), r.success({
                                                timestamp: e,
                                                coords: {
                                                    latitude: window.blackberry.location.latitude,
                                                    longitude: window.blackberry.location.longitude
                                                }
                                            })
                                        }
                                        r.success = null, r.error = null
                                    }
                                }), window.blackberry.location.refreshLocation()
                            }, t = window.blackberry.location
                        }
                        else window.Mojo ? (t = !0, i = function(e, t, n) {
                            var i = {};
                            n && (n.enableHighAccuracy && n.enableHighAccuracy === !0 && (i.accuracy = 1), n.maximumAge && (i.maximumAge = n.maximumAge), n.responseTime && (n.responseTime < 5 ? i.responseTime = 1 : n.responseTime < 20 ? i.responseTime = 2 : i.timeout = 3)), new window.Mojo.Service.Request("palm://com.palm.location", {
                                method: "getCurrentPosition",
                                parameters: i,
                                onSuccess: function(t) {
                                    e({
                                        timestamp: t.timestamp,
                                        coords: {
                                            latitude: t.latitude,
                                            longitude: t.longitude,
                                            heading: t.heading
                                        }
                                    })
                                },
                                onFailure: function(e) {
                                    t(1 == e.errorCode ? {
                                        code: 3,
                                        message: "Timeout"
                                    } : 2 == e.errorCode ? {
                                        code: 2,
                                        message: "Position unavailable"
                                    } : {
                                        code: 0,
                                        message: "Unknown Error: webOS-code" + e.errorCode
                                    })
                                }
                            })
                        }) : window.device != n && window.device.getServiceObject ? (t = window.device.getServiceObject("Service.Location", "ILocation"), i = function(e, n, i) {
                            function r(t, i, r) {
                                4 == i ? n({
                                    message: "Position unavailable",
                                    code: 2
                                }) : e({
                                    timestamp: null,
                                    coords: {
                                        latitude: r.ReturnValue.Latitude,
                                        longitude: r.ReturnValue.Longitude,
                                        altitude: r.ReturnValue.Altitude,
                                        heading: r.ReturnValue.Heading
                                    }
                                })
                            }
                            var o = {};
                            o.LocationInformationClass = "BasicLocationInformation", t.ILocation.GetLocation(o, r)
                        }) : t = !1;
                        return t && i ? (i(e, r, o), !0) : !1
                    }
                    catch (a) {
                        return typeof console != n && console.log(a), !1
                    }
                    return null !== t
                }, e
            }()
        }
    }), qrequire.define("transitions/PageTransition", ["bluebird", "dejavu", "dom"], function(e, t, $) {
        "use strict";
        return t.AbstractClass.declare({
            $name: "PageTransition",
            _enter: null,
            _exit: null,
            _container: null,
            __placeholder: null,
            $abstracts: {
                enter: function() {},
                cleanup: function() {}
            },
            $statics: {
                hasTransition: function() {
                    return !0
                }
            },
            initialize: function(e, t) {
                this._enter = e, this._exit = t
            },
            reverse: function() {
                return this.enter()
            },
            getSafeWidth: function() {
                return $(window).width() + 100
            },
            _addToContainer: function() {
                this._container = $('<div id="TempSharedContainer">'), this.__placeholder = $('<div id="TempPlaceholder">'), this._enter.before(this.__placeholder), this._exit.before(this._container), this._container.css({
                    height: this._exit.height() + "px"
                }).append(this._exit).append(this._enter)
            },
            _removeFromContainer: function() {
                this.__placeholder.after(this._enter).remove(), this.__placeholder = null, this._container = null
            }
        })
    }), qrequire.define("transitions/NoTransition", ["bluebird", "dejavu", "transitions/PageTransition"], function(e, t, n) {
        "use strict";
        return t.Class.declare({
            $name: "NoTransition",
            $extends: n,
            $statics: {
                hasTransition: function() {
                    return !1
                }
            },
            enter: function() {},
            cleanup: function() {}
        })
    }), qrequire.define("transitions/SlideTransition", ["bluebird", "dejavu", "dom", "transitions/PageTransition"], function(e, t, $, n) {
        "use strict";
        return t.Class.declare({
            $name: "SlideTransition",
            $extends: n,
            enter: function() {
                var t = this._enter.offset().left - this._exit.offset().left,
                    n = this.getSafeWidth();
                return e.all([this._exit.css({
                    position: "relative"
                }).animate({
                    left: "-" + n + "px"
                }).promise(), this._enter.css({
                    position: "relative"
                }).animate({
                    left: -1 * t + "px"
                }).promise()])
            },
            reverse: function() {
                var t = this._enter.offset().left - this._exit.offset().left,
                    n = this.getSafeWidth();
                return e.all([this._exit.css({
                    position: "relative"
                }).animate({
                    left: n + "px"
                }).promise(), this._enter.css({
                    position: "relative"
                }).animate({
                    left: -1 * t + "px"
                }).promise()])
            },
            cleanup: function() {
                this._enter.attr("style", ""), this._exit.attr("style", "")
            }
        })
    }), qrequire.define("transitions/FadeTransition", ["bluebird", "dejavu", "dom", "transitions/PageTransition"], function(e, t, $, n) {
        "use strict";
        return t.Class.declare({
            $name: "FadeTransition",
            $extends: n,
            enter: function() {
                var t = this._enter.offset().left - this._exit.offset().left;
                return this._enter.css({
                    position: "relative",
                    left: -1 * t + "px"
                }).hide(), e.resolve(this._exit.css({
                    position: "relative"
                }).fadeOut("fast").promise()).then(function() {
                    return this._enter.fadeIn().promise()
                }.$bind(this))
            },
            cleanup: function() {
                this._enter.attr("style", ""), this._exit.attr("style", "")
            }
        })
    }), qrequire.define("transitions/FlipTransition", ["bluebird", "dejavu", "dom", "transitions/PageTransition"], function(e, t, $, n) {
        "use strict";
        return t.Class.declare({
            $name: "FlipTransition",
            $extends: n,
            enter: function() {
                this._addToContainer(), this._container.css({
                    position: "absolute",
                    "transform-style": "preserve-3d",
                    width: "100%",
                    perspective: "800px"
                });
                var t = {
                    position: "absolute",
                    "backface-visibility": "hidden",
                    width: "100%",
                    transition: "transform 1s"
                };
                return this._exit.css(t), this._enter.css(t).css({
                    transform: "rotateY(180deg)"
                }), setTimeout(function() {
                    this._enter.css({
                        transform: ""
                    }), this._exit.css({
                        transform: "rotateY(-180deg)"
                    })
                }.$bind(this), 1), new e(function(e) {
                    setTimeout(function() {
                        e()
                    }, 1001)
                })
            },
            reverse: function() {
                this._addToContainer(), this._container.css({
                    position: "absolute",
                    "transform-style": "preserve-3d",
                    width: "100%",
                    perspective: "800px"
                });
                var t = {
                    position: "absolute",
                    "backface-visibility": "hidden",
                    width: "100%",
                    transition: "transform 1s"
                };
                return this._exit.css(t), this._enter.css(t).css({
                    transform: "rotateY(-180deg)"
                }), setTimeout(function() {
                    this._enter.css({
                        transform: ""
                    }), this._exit.css({
                        transform: "rotateY(180deg)"
                    })
                }.$bind(this), 1), new e(function(e) {
                    setTimeout(function() {
                        e()
                    }, 1001)
                })
            },
            cleanup: function() {
                this._removeFromContainer(), this._enter.attr("style", ""), this._exit.attr("style", "")
            }
        })
    }), qrequire.define("transitions/BarrelRollTransition", ["bluebird", "dejavu", "dom", "transitions/PageTransition"], function(e, t, $, n) {
        "use strict";
        return t.Class.declare({
            $name: "BarrelRollTransition",
            $extends: n,
            enter: function() {
                var t = this._enter.offset().left - this._exit.offset().left,
                    n = this.getSafeWidth();
                return this._enter.css({
                    transition: "transform .75s ease",
                    transform: "rotate(-720deg)"
                }), this._exit.css({
                    transition: "transform .75s ease",
                    transform: "rotate(-720deg)"
                }), e.all([this._exit.css({
                    position: "relative"
                }).animate({
                    left: "-" + n + "px"
                }, 750).promise(), this._enter.css({
                    position: "relative"
                }).animate({
                    left: -1 * t + "px"
                }, 750).promise()])
            },
            reverse: function() {
                var t = this._enter.offset().left - this._exit.offset().left,
                    n = this.getSafeWidth();
                return this._enter.css({
                    transition: "transform .75s ease",
                    transform: "rotate(720deg)"
                }), this._exit.css({
                    transition: "transform .75s ease",
                    transform: "rotate(720deg)"
                }), e.all([this._exit.css({
                    position: "relative"
                }).animate({
                    left: n + "px"
                }, 750).promise(), this._enter.css({
                    position: "relative"
                }).animate({
                    left: -1 * t + "px"
                }, 750).promise()])
            },
            cleanup: function() {
                this._enter.attr("style", ""), this._exit.attr("style", "")
            }
        })
    }), qrequire.define("transitions/TransitionHandler", ["bluebird", "dejavu", "load", "dom", "transitions/NoTransition", "transitions/SlideTransition", "transitions/FadeTransition", "transitions/FlipTransition", "transitions/BarrelRollTransition"], function(e, t, n, $, i, r, o, s, a) {
        "use strict";
        return t.Class.declare({
            $name: "TransitionHandler",
            __oldPage: null,
            __newPage: null,
            __isSetup: !1,
            __transitionClass: null,
            __direction: "",
            isReversed: function() {
                return "prev" == this.__direction
            },
            setTransition: function(e, t) {
                switch (this.__direction = t, e) {
                    case "Slide":
                        this.__transitionClass = r;
                        break;
                    case "Fade":
                        this.__transitionClass = o;
                        break;
                    case "Flip":
                        this.__transitionClass = s;
                        break;
                    case "Barrel":
                        this.__transitionClass = a;
                        break;
                    default:
                        this.__transitionClass = i
                }
            },
            getActivePage: function() {
                return this.__newPage || $("#" + this.id() + " #Page")
            },
            transitionButtons: function(e, t, n) {
                e.animate({
                    height: n.height() + "px"
                }).css({
                    overflow: "visible"
                })
            },
            hasTransition: function() {
                return this.__transitionClass.hasTransition()
            },
            setupPageTransitions: function(e, t) {
                if (this.__oldPage = $(e), !this.hasTransition() || !this.__oldPage.find("#Questions").length) return this.__oldPage[0].innerHTML = t, this.__newPage = this.__oldPage, void(this.__oldPage = null);
                this.__newPage = this.__oldPage.clone(), this.__newPage[0].innerHTML = t, this.__oldPage.removeClass("ActivePage")[0].parentNode.appendChild(this.__newPage[0]), this.__oldPage.parent().addClass("Transitioning").parents("html").addClass("OverflowContainer");
                var n = $(window).width() + 100;
                this.isReversed() && (n *= -1), this.__newPage.css({
                    position: "absolute",
                    left: n + "px",
                    top: 0,
                    width: this.__oldPage.width()
                }).addClass("ActivePage"), this.__isSetup = !0
            },
            transitionPage: function() {
                if (!this.__oldPage || !this.__isSetup) return e.resolve();
                this.__isSetup = !1;
                var t = this.__oldPage.find("#Questions"),
                    n = this.__newPage.find("#Questions"),
                    i = $('<div id="TempContainer">').css({
                        position: "relative"
                    });
                t.before(i), i.append(t);
                var r = this.__oldPage.find("#Buttons");
                n.find("#EndOfSurvey").length ? r.hide() : this.transitionButtons(i, r, n);
                var o = new this.__transitionClass(n, t),
                    s;
                return s = this.isReversed() ? o.reverse() : o.enter(), s.then(function() {
                    o.cleanup();
                    var e = this.__newPage;
                    return this.__newPage.attr("style", ""), this.__oldPage.parent().attr("style", "").removeClass("Transitioning").parents("html").removeClass("OverflowContainer"), this.__oldPage.remove(), this.__oldPage = null, e
                }.$bind(this))
            }
        })
    }), qrequire.define("cookie", [], function() {
        "use strict";
        return {
            getCookie: function(e) {
                return e ? decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + e.replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null : null
            },
            setCookie: function(e, t, n, i, r, o) {
                if (!e || /^(?:expires|max\-age|path|domain|secure)$/i.test(e)) return !1;
                var s = "";
                if (n) switch (n.constructor) {
                    case Number:
                        s = n === 1 / 0 ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + n;
                        break;
                    case String:
                        s = "; expires=" + n;
                        break;
                    case Date:
                        s = "; expires=" + n.toUTCString()
                }
                return "object" == typeof t && (t = "j:" + JSON.stringify(t)), document.cookie = e + "=" + encodeURIComponent(t) + s + (r ? "; domain=" + r : "") + (i ? "; path=" + i : "") + (o ? "; secure" : ""), !0
            },
            removeCookie: function(e, t, n) {
                return this.hasCookie(e) ? (document.cookie = e + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (n ? "; domain=" + n : "") + (t ? "; path=" + t : ""), !0) : !1
            },
            hasCookie: function(e) {
                return e ? new RegExp("(?:^|;\\s*)" + e.replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=").test(document.cookie) : !1
            },
            keys: function() {
                for (var e = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/), t = e.length, n = 0; t > n; n++) e[n] = decodeURIComponent(e[n]);
                return e
            }
        }
    }), qrequire.define("classes/Page", ["bluebird", "dejavu", "load", "log", "utils", "core/metrics", "core/javascriptMobileSE", "classes/Events", "classes/Canvas", "factories/questionRendererFactory", "dom", "doT", "rivets", "factories/dialog", "classes/FormOptions", "classes/page/PageRuntime", "classes/page/ResponseSummary", "classes/page/ScoringSummary", "classes/page/LanguageEvaluator", "classes/page/LanguageSelector", "classes/page/PageLoadingIndicatorContainer", "classes/page/ProgressBar", "classes/page/Header", "classes/page/Footer", "classes/page/RivetsSetup", "classes/page/TwoWayBinding", "classes/page/PageButtons", "classes/page/PDFRenderer", "core/PageDialog", "text!templates/pageMessage.html", "renderers/TableOfContents", "renderers/TableOfContentsSidebar", "text!templates/page/TrialFooter.html", "Qualtrics", "core/BrowserInfo", "core/UserAgent", "transitions/TransitionHandler", "cookie"], function(e, t, n, i, r, o, s, a, u, l, $, c, d, h, f, p, g, m, _, v, y, b, T, w, x, S, C, E, P, A, j, k, D, O, I, R, L, B) {
        "use strict";
        return t.Class.declare({
            $name: "Page",
            $extends: a,
            __id: null,
            _el: null,
            __root: null,
            _compile: null,
            __canvas: null,
            pageButtons: null,
            _pageTemplate: null,
            __inPageDisplayLogicOnPage: !1,
            __inPageDisplayLogicDependencies: [],
            options: null,
            runtime: {
                SM: {},
                ED: {}
            },
            defaults: {},
            renderers: {},
            adapter: null,
            languages: null,
            __languageEvaluator: null,
            _questionRenderers: {},
            __loadingIndicator: null,
            __rivetsSetup: null,
            _rivetsBinding: null,
            __twoWayBinding: null,
            _transactionId: null,
            formLoaded: !1,
            __isReady: !1,
            _renderedFirstPage: !1,
            __transitionHandler: null,
            __responseSummary: null,
            __jumpInProgress: !1,
            initialize: function(e) {
                this.__id = "P_" + (new Date).getTime(), this.adapter = e, this.__transitionHandler = new L, this.__rivetsSetup = new x, this._rivetsBinding = this.__rivetsSetup.getRivets().bind, this.__twoWayBinding = new S(this.__id), this.__languageEvaluator = new _, this.pageButtons = new C(this), this.reset(), this.adapter.setPage(this), this.on("all", function(e) {
                    i.updateState("Page", e)
                }), this.on("ready", this.evaluateInPageDisplayLogic.$bind(this)), this.on("ready", function() {
                    this.__transitionHandler.hasTransition() || this._scrollToTop()
                }.$bind(this)), this.on("ready", function() {
                    this.formLoaded = !0, this.setReady(!0)
                }, this), this.on("ready", this.__submitRealUserMetrics.$bind(this)), this.on("ready", function() {
                    this.__triggerEventOnQuestionRenderers("ready")
                }.$bind(this)), this.once("ready", function() {
                    $("#SurveyEngineBody").on("mousedown", this.inputClickHelper), this.__setupHightlightQuestions(), this._renderedFirstPage = !0
                }.$bind(this)), $(window).on("beforeunload", function() {
                    i.updateState("window", "before unload"), this.__submitRealUserMetrics(), this.isEndOfSurvey() || this._saveProgress()
                }.$bind(this)), this.on("validationfailed", function() {
                    this.__triggerEventOnQuestionRenderers("validationfailed")
                }.$bind(this)), window.document.write = function() {
                    i.error("document.write is not allowed and has been disabled.")
                }
            },
            id: function() {
                return this.__id
            },
            isReady: function() {
                return this.__isReady
            },
            setReady: function(e) {
                this.__isReady = !!e
            },
            getRendererType: function() {
                return "html"
            },
            isRTL: function() {
                return this.__languageEvaluator.isRTL()
            },
            getPageTemplate: function() {
                return this._pageTemplate
            },
            setED: function(e, t) {
                this.runtime.ED[e] = t
            },
            getED: function(e) {
                return r.get(this.runtime.ED, e)
            },
            getSM: function() {
                return this.runtime.SM
            },
            isPreview: function() {
                return !1
            },
            start: function() {
                return $("#skinPrefetch").remove(), this._storeMetaData(), this.adapter.start().then(function(e) {
                    return this.setupPage(e)
                }.$bind(this)).then(function() {
                    this.removePace()
                }.$bind(this))["catch"](function(e) {
                    this.adapter.handleError(e, "start")
                }.$bind(this))
            }.$bound(),
            removePace: function() {
                window.Pace ? setTimeout(function() {
                    window.Pace.stop()
                }, 2500) : $("#pace").remove()
            },
            setupPage: function(e) {
                return this.runtime.ED = r.merge(this.runtime.ED, e.getED()), this.runtime.SM = r.merge(this.runtime.SM, e.getSM()), this.__initCanvas().then(function() {
                    return this.__setOptions()
                }.$bind(this)).then(function() {
                    return this._renderPageTemplate(e)
                }.$bind(this))["catch"](function(e) {
                    this.adapter.handleError(e, "setupPage")
                }.$bind(this))
            },
            __initCanvas: function() {
                return this.__canvas = new u(this), this.__canvas.create()
            }.$bound(),
            setTplFn: function(e) {
                this._compile = e, this.__root = $("#" + this.id() + " #Page")[0]
            },
            getCustomStyles: function() {
                var e = this.adapter.getCustomStyles(this.adapter.getFormOptions());
                return this.isMobilePreviewFrame() ? e.replace(/device-width/g, "width") : e
            },
            loadHTMLHeader: function() {
                $("#rtlStyles").after("<style>" + this.getCustomStyles() + "</style>")
            },
            _insertElementContent: function(e, t) {
                var n = $("#" + e);
                n.length && n.html(t)
            },
            changeElementAttribute: function(e, t, n) {
                var i = $("#" + e);
                i.length && i.attr(n) != t && i.attr(n, t)
            },
            getRTLStylesPath: function() {
                return this.adapter ? this.adapter.getRTLStylesPath() : null
            },
            translateFormPreviewMessage: function() {
                var e = r.get(window, "Qualtrics.Translations." + this.runtime.Language + ".FormEngine.PreviewForm");
                e || (e = r.get(window, "Qualtrics.Translations." + this.__defaultLan + ".FormEngine.PreviewForm")), this.runtime.FormPreviewMessage = e
            },
            isMobile: function() {
                return this.adapter.isMobile()
            },
            isMobilePreviewFrame: function() {
                return !1
            },
            loadQuestions: function(e) {
                this.__resetErrors();
                var t = e.getQuestionRuntimes();
                return l.setIsOffline(this.adapter.isOffline()), l.createMultiple(this, t).then(r.bind(function(t) {
                    return this.addQuestions(t, e), e
                }, this))
            }.$bound(),
            addQuestions: function(e, t) {
                r.each(e, function(e, n) {
                    this._questionRenderers[n] || (this._questionRenderers[n] = e, e.setPage(this)), this._questionRenderers[n].setRuntime(t.getQuestionRuntime(n))
                }, this)
            }.$bound(),
            updateQuestions: function(e) {
                var t = null;
                r.each(e.getQuestionIDs(), function(n) {
                    var i = this._questionRenderers[n];
                    if (i) {
                        var o = e.getQuestionRuntime(n);
                        o && (r.deepMixIn(i.runtime, o), !t && i.hasErrorMessage() && (t = o.ID), i.update())
                    }
                }, this), t && this.scrollToQuestion(t)
            },
            unhighlightQuestions: function() {
                r.each(this._questionRenderers, function(e) {
                    e.highlight(!1)
                })
            },
            evaluateInPageDisplayLogic: function() {
                if (!this.__inPageDisplayLogicOnPage) return e.resolve();
                this.pageButtons.busifyNavigationButtons();
                var t = this.serializePageRuntime(!0);
                null === this.__loadingIndicator && (this.__loadingIndicator = new y), this.__loadingIndicator.startPageLoadingIndicator(), this.adapter.evaluateInPageDisplayLogic(t).then(function(e) {
                    this.__loadingIndicator.endPageLoadingIndicator(), this.pageButtons.unbusifyNavigationButtons(), r.isObject(e) && r.isArray(e.displayed) && r.isArray(e.hidden) && (r.each(e.displayed, function(e) {
                        this._questionRenderers[e] && this._questionRenderers[e].show()
                    }, this), r.each(e.hidden, function(e) {
                        this._questionRenderers[e] && this._questionRenderers[e].hide()
                    }, this))
                }.$bind(this)).caught(function(e) {
                    this.__loadingIndicator.endPageLoadingIndicator(), this.pageButtons.unbusifyNavigationButtons(), this.adapter.handleError(e, "evalInPageDisplayLogic")
                }.$bind(this))
            }.$bound(),
            renderTOC: function(e) {
                var t = [];
                this._pageTemplate.previousButtonIsEnabled() && t.push(this.pageButtons.getPreviousButton().render()), t.push(this.pageButtons.getNextButton().render());
                var n = this.defaults.Header.render(),
                    i = this.defaults.Footer.render(),
                    r = [],
                    o = this.defaults.LanguageSelector && this.defaults.LanguageSelector.render();
                return this.renderers.TableOfContents = new j(e.getTOCTreeStructure(), null, this), r.push(this.renderers.TableOfContents.render()), this._el = this._compile(n, r.join(""), t.join(""), o || "", "", i), this.__root.innerHTML = this._el, this.__transitionHandler.setupPageTransitions(this.__root, this._el), this._bind(), this._finishRenderAndTriggerReady()
            }.$bound(),
            getCompiledPageMessage: function(e) {
                var t = c.template(A);
                return t({
                    Display: e,
                    IsSystemMessage: this._pageTemplate.isSystemMessage()
                })
            },
            renderPDF: function() {
                var e = new E;
                this.adapter.renderPDF(e.renderPDF())
            },
            renderQuestionContent: function(t, n) {
                var i = [];
                this._pageTemplate.isResponseSummary() && (this._pageTemplate.confirmResponse() ? n.SummaryCustomMessage && i.push(this.getCompiledPageMessage(n.SummaryCustomMessage)) : i.push(this.getCompiledPageMessage(t)), this.__responseSummary = new g(n, this), i.push(this.__responseSummary.render())), this._trigger("prerender");
                var o = [],
                    s = 0;
                return r.each(this._pageTemplate.getQuestionIDs(), function(e) {
                    var t = this._questionRenderers[e];
                    this._pageTemplate.isResponseSummary() ? t.disable() : t.enable(), t.prerender(), s && t.setQuestionSeparator(!0), s++, o.push(t.render())
                }, this), e.all(o).then(function(e) {
                    return i.concat(e)
                })
            },
            render: function(t, o, s) {
                return this._pageTemplate = t, t && r.isObject(t) ? this._cssLoaded().then(function() {
                    this._pageTemplate.getFormTitle() && (document.title = this._pageTemplate.getFormTitle());
                    var e = this.defaults.Header.render(),
                        r = this.defaults.Footer.render(),
                        a = !this._pageTemplate.summaryComplete() && this.defaults.LanguageSelector && this.defaults.LanguageSelector.render(),
                        u = this._pageTemplate.getQuestionIDs();
                    this.__prepareIPDLDependencies(u);
                    var l = [];
                    return this._pageTemplate.previousButtonIsEnabled() && l.push(this.pageButtons.getPreviousButton().render()), l.push(this.pageButtons.getNextButton().render()), O.SurveyEngine.QuestionInfo = {}, this.renderQuestionContent(o, s).then(function(o) {
                        this.renderers.TableOfContentsSidebar && this.renderers.TableOfContentsSidebar.clearResizeListener(), this._pageTemplate.getTOCTreeStructure() && (this._pageTemplate.getTOCTreeStructure().ShowSidebar === !0 && (this.renderers.TableOfContentsSidebar = new k(this._pageTemplate.getTOCTreeStructure(), null, this), o.push(this.renderers.TableOfContentsSidebar.render())), this._pageTemplate.getTOCTreeStructure().ShowButton === !0 && (this.pageButtons.createTOCButton({
                            ButtonText: this._pageTemplate.getTOCTreeStructure().ButtonText
                        }, this.options.get("SurveyLanguage")), this._listenTo(this.pageButtons.getTOCButton(), "jump", this.jumpTOCRoot), l.splice(l.length - 1, 0, this.pageButtons.getTOCButton().render())));
                        var s = this.generateProgressBar();
                        this._el = this._compile(e, o.join(""), this._pageTemplate.summaryComplete() ? "" : l.join(""), a || "", s.render(), r), "Trial" == this._pageTemplate.getBrandType() && (this._el += c.template(D)({
                            surveyId: this.runtime.SM.SurveyID,
                            language: this.runtime.Language
                        })), this.__transitionHandler.setupPageTransitions(this.__root, this._el);
                        for (var d = 0; d < u.length; ++d) {
                            var h = u[d],
                                f = "#" + h,
                                p = this.findElementsOnPage(f),
                                g = "#" + this.__id + " #" + h + "Separator",
                                m = $(g);
                            this._questionRenderers[h].postrender(p, m), p.length || i.error("Did not find exactly one question container to bind to", f, p)
                        }
                        this._bind(), this.__fireMobileJavascript();
                        var _ = t.getDebugData();
                        return _ && n(["libs/renderjson"]).spread(function(e) {
                            try {
                                $("#debug").append($("<style>" + e.defaultStyles + "</style>")), $("#debug").append(e.set_icons("+", "-").set_show_to_level(2)(_))
                            }
                            catch (t) {
                                i.warn(t)
                            }
                        }), this._pageTemplate.summaryComplete() && this.pageButtons.clearButtons(), this._finishRenderAndTriggerReady()
                    }.$bind(this))
                }.$bind(this)) : e.resolve()
            }.$bound(),
            __prepareIPDLDependencies: function(e) {
                this.__inPageDisplayLogicDependencies = [], r.each(e, function(e) {
                    var t = this._questionRenderers[e];
                    t.runtime.IPDLDependencies && r.each(t.runtime.IPDLDependencies, function(e) {
                        -1 === this.__inPageDisplayLogicDependencies.indexOf(e) && this.__inPageDisplayLogicDependencies.push(e)
                    }, this)
                }, this)
            },
            questionHasIPDLDependency: function(e) {
                return -1 !== this.__inPageDisplayLogicDependencies.indexOf(e)
            },
            __prepareInPageDisplayLogic: function(e) {
                -1 !== this.__inPageDisplayLogicDependencies.indexOf(e.runtime.ID) && e.on("responsechanged", this.evaluateInPageDisplayLogic.$bind(this)), e.hasInPageDisplayLogic() ? (this.__inPageDisplayLogicOnPage = !0, e.displayed() ? e.show() : e.hide()) : e.show()
            },
            getQuestion: function(e) {
                return this._questionRenderers[e]
            },
            renderPageMessage: function(e, t, n) {
                n = n || "", this.runtime.QuestionIDs = [], this.runtime.NextButton = null, this.runtime.PreviousButton = null;
                var i = this.defaults.Header.render(),
                    r = this.defaults.Footer.render(),
                    o = "";
                e.isPageMessage() && this.defaults.LanguageSelector && (this.defaults.LanguageSelector.setChangeHandler(function(t) {
                    var i = e.getMessageTranslation(t);
                    i && (e.setCurrentLanguage(t), e.setMessage("PageMessage", i), this.setLanguage(t), this.renderPageMessage(e, i, n))
                }.$bind(this)), o = this.defaults.LanguageSelector.render());
                var s = [],
                    a = c.template(A);
                s.push(a({
                    Display: t,
                    IsSystemMessage: e.isSystemMessage()
                }));
                var u = this.generateProgressBar();
                return this._el = this._compile(i, s.join(""), n, o || "", u.render(), r), this.__transitionHandler.setupPageTransitions(this.__root, this._el), this._bind(!0), this._finishRenderAndTriggerReady(!0)
            },
            generateProgressBar: function() {
                return new b(this.options.get("ProgressBarDisplay"), this._pageTemplate.getProgressPercent(), this._pageTemplate.getProgressBarText(), this._pageTemplate.getProgressAccessibleText())
            },
            createRedirectLink: function(e, t) {
                var n = "<a href='" + t + "'>" + e + "</a>";
                return n
            },
            generateRedirectText: function(e, t, n) {
                var i = "<div>" + e + "</div><br>" + this.createRedirectLink(t, n);
                return i
            },
            renderEOS: function(e) {
                var t = e.getMessage("EOSMessage"),
                    n = e.confirmResponse() ? null : e.getEOSRedirectURL(),
                    i;
                if (i = n && this.adapter.allowsNetworkFunctionality() ? this.generateRedirectText(t.RedirectMessage, t.RedirectLinkMessage, n) : t.FinalEOSMessage, e.isResponseSummary()) return this.loadQuestions(e).then(function() {
                    return this.render(e, i, t)
                }.$bind(this)).then(function() {
                    this.postEOSActions(n)
                }.$bind(this))["catch"](function(e) {
                    this.adapter.handleError(e, "loadQuestions")
                }.$bind(this));
                if (e.isScoringSummary()) {
                    var r = new m;
                    return r.render(e).then(function(e) {
                        var t = this.defaults.Header.render(),
                            n = this.defaults.Footer.render(),
                            i = this.generateProgressBar();
                        return this._el = this._compile(t, e, "", "", i.render(), n), this.__transitionHandler.setupPageTransitions(this.__root, this._el), this._finishRenderAndTriggerReady()
                    }.$bind(this))
                }
                return this.renderPageMessage(e, i).then(function() {
                    this.postEOSActions(n)
                }.$bind(this))
            },
            postEOSActions: function(e) {
                try {
                    if (window.top.postMessage) {
                        var t = r.get(this.runtime, "SM.SurveyID"),
                            n = this.getSessionId();
                        window.top.postMessage("closeQSIWindow", "*"), window.top.postMessage("QualtricsEOS|" + t + "|" + n, "*")
                    }
                    window.parent && window.parent.qualtricsEndOfSurvey && window.parent.qualtricsEndOfSurvey.call(window.parent)
                }
                catch (o) {
                    i.info(o)
                }
                e && this.adapter.allowsNetworkFunctionality() && this.redirectToUrl(e)
            }.$bound(),
            redirectToUrl: function() {},
            __setupHightlightQuestions: function() {
                this.options.get("HighlightQuestions") && $(document).click(function(e) {
                    this.unhighlightQuestions(), r.each(this._pageTemplate.getQuestionIDs(), function(t) {
                        var n = this._questionRenderers[t];
                        n.getElement().has(e.target).length && n.highlight()
                    }.$bind(this))
                }.$bind(this))
            }.$bound(),
            __unbindQuestionsOnPage: function() {
                r.each(this._pageTemplate.getQuestionIDs(), function(e) {
                    this._questionRenderers[e] ? (this._questionRenderers[e].unbind(), this._questionRenderers[e].off("responsechanged")) : i.error("Cant find " + e + " to unbind")
                }, this)
            },
            _cssLoaded: function() {
                return e.resolve()
            },
            _unbind: function() {
                this.__offPreventSubmitForm(), this.__unbindQuestionsOnPage(), this.pageButtons.unbind(), this.defaults.LanguageSelector && this.defaults.LanguageSelector.unbind(), this.__responseSummary && this.__responseSummary.unbind(), this.renderers.TableOfContentsSidebar && this.renderers.TableOfContentsSidebar.unbind(), this.__rivetsSetup.unbindInPageDisplayLogicTimer(), this.__twoWayBinding.unbind()
            },
            _bind: function(e) {
                if (this.__preventSubmitForm(), this.defaults.Header && this.defaults.Header.bind(), this.defaults.Footer && this.defaults.Footer.bind(), this.defaults.LanguageSelector && this.defaults.LanguageSelector.bind(), this.__responseSummary && this.__responseSummary.bind(), !e) {
                    this.pageButtons.bind(this._pageTemplate),
                        r.each(this._pageTemplate.getQuestionIDs(), function(e) {
                            var t = this._questionRenderers[e];
                            t ? (this.__prepareInPageDisplayLogic(t), t.bind(this._rivetsBinding)) : i.error("Missing question renderer", e)
                        }, this), this.__getPageScripts().length && this.__twoWayBinding.bind();
                    var t = $("#" + this.__id + " #TOCToggle");
                    t && (t.off(), t.on("click", function n() {
                        this.renderers.TableOfContentsSidebar.toggleClosed()
                    }.$bind(this))), this._pageTemplate.isTOC() && this.renderers.TableOfContents.bind(), !this._pageTemplate.isTOC() && this._pageTemplate.getTOCTreeStructure() && this._pageTemplate.getTOCTreeStructure().ShowSidebar === !0 && (this.renderers.TableOfContentsSidebar.bind(), this.renderers.TableOfContentsSidebar.handleScreenSize())
                }
            },
            scrollToQuestion: function(e, t) {
                var n = this._questionRenderers[e];
                n || $("html,body").scrollTop(0), $("html,body").scrollTop(n.getTop() + n.getHeight() * (t || 0))
            },
            scrollToHeader: function(e) {
                $("html,body").scrollTop(e * this.getHeaderBottom())
            },
            getHeaderBottom: function() {
                return this.findElementsOnPage("#Questions").offset().top || 0
            },
            setLanguage: function(e) {
                e = e.toUpperCase().trim(), this.runtime.Language = e, $("html").attr("lang", e), this.setED("Q_Language", e), this.defaults.LanguageSelector && this.defaults.LanguageSelector.runtime.Selected !== e && (this.defaults.LanguageSelector.setTriggerTranslate(!1), this.defaults.LanguageSelector.runtime.Selected = e, this.defaults.LanguageSelector.setTriggerTranslate(!0)), this.__languageEvaluator.setLanguage(e), this.__languageEvaluator.isRTL() ? this.__canvas.setRTLCSS(this.getRTLStylesPath()) : this.__canvas.clearRTLCSS()
            },
            translate: function(e) {
                return this.setReady(!1), i.updateState("Page", "translate"), this.setLanguage(e), this.adapter.getGlobalMessages(this.runtime.Language).then(function(e) {
                    void 0 === O.Translations && (O.Translations = {});
                    var t;
                    if (e) try {
                        t = JSON.parse(e)
                    }
                    catch (n) {
                        i.error("Error loading messages for " + this.runtime.Language, n)
                    }
                    else this.options.get("DefaultLanguages") && !r.get(this.options.get("DefaultLanguages"), this.runtime.Language) && i.error("Unable to load messages for " + this.runtime.Language);
                    return t && (O.Translations[this.runtime.Language] = t), this.adapter.translate(this.serializePageRuntime(), this.runtime.Language)
                }.$bind(this)).then(function(e) {
                    return this._trigger("translate", this.runtime.Language), this._renderPageTemplate(e)
                }.$bind(this)).then(function() {
                    return this.defaults.LanguageSelector && this.defaults.LanguageSelector.translationComplete(), !0
                }.$bind(this))["catch"](function(e) {
                    this.adapter.handleError(e, "translate")
                }.$bind(this))
            }.$bound(),
            serializePageRuntime: function(e) {
                e || this._trigger("beforeSerialize"), this.__twoWayBinding.triggerChange();
                var t = new p;
                return this._pageTemplate && r.each(this._pageTemplate.getQuestionIDs(), function(e) {
                    this._questionRenderers[e] && t.addQuestion(e, this._questionRenderers[e].serialize())
                }.$bind(this)), t.setSM(this.runtime.SM), t.setED(this.runtime.ED), t.setFormRuntime(this.runtime.FormRuntime), t.setFormSessionID(this.runtime.FormSessionID), t.setTransactionId(this._transactionId), t
            }.$bound(),
            _notifyOutdatedSession: function(e) {
                this.once("ready", function() {
                    var t = new P(e.getMessage("SessionTransplant_Message"), {
                        severity: 0
                    });
                    t.show()
                })
            },
            __handleUpdatedTemplate: function(e) {
                if (!e) return !0;
                if (null === this._transactionId) this._transactionId = e.getTransactionId();
                else if (e.getTransactionId() > 0 && e.getTransactionId() <= this._transactionId) return i.info("Just got a page template transaction id " + e.getTransactionId() + " but we are on " + this._transactionId + ". Ignoring new template."), !0;
                return this.runtime.FormRuntime = e.getFormRuntime(), this._transactionId = e.getTransactionId(), "outdatedSend" === e.replacesOutdated() && this._notifyOutdatedSession(e), this._pageTemplate && !e.didFailValidation() && this._unbind(), this.runtime.ED = r.deepClone(e.getED()), this._pageTemplate = e, !1
            },
            jumpTOCRoot: function() {
                return null !== this._pageTemplate.getTOCTreeStructure() && this._pageTemplate.getTOCTreeStructure().ID ? this.jump(this._pageTemplate.getTOCTreeStructure().ID) : void 0
            },
            jump: function(t) {
                return i.updateState("Page", "jump"), e.resolve().then(function() {
                    return this.__jumpInProgress ? void 0 : (this.pageButtons.busifyNavigationButtons(), this.__jumpInProgress = !0, this.__advancePage("jump", t))
                }.$bind(this))
            },
            next: function(t) {
                return i.updateState("Page", "next"), i.updateState("PageNextStack", (new Error).stack), this.__triggerEventOnQuestionRenderers("beforeNext"), e.resolve().then(function() {
                    return this.__advancePage("next", void 0, t)
                }.$bind(this))
            }.$bound(),
            prev: function() {
                return i.updateState("Page", "prev"), i.updateState("PagePrevStack", (new Error).stack), e.resolve().then(function() {
                    return null === this._pageTemplate.getTOCTreeStructure() || this._pageTemplate.isTOC() ? !0 : this._presentTOCPreviousWarning(this._pageTemplate)
                }.$bind(this)).then(function(e) {
                    return e ? this.adapter.prev(this.serializePageRuntime()).then(function(e) {
                        return this._renderPageTemplate(e, "prev")
                    }.$bind(this))["catch"](function(e) {
                        this.adapter.handleError(e, "prev")
                    }.$bind(this)) : (this.pageButtons.getNextButton() && this.pageButtons.getNextButton().actionFailed(), void(this.pageButtons.getPreviousButton() && this.pageButtons.getPreviousButton().actionFailed()))
                }.$bind(this))
            }.$bound(),
            _presentTOCPreviousWarning: function(e) {
                var t = e.getTOCTreeStructure().PreviousMessages;
                return h.create({
                    msg: t.DialogBody,
                    buttons: {
                        cancel: t.Cancel,
                        ok: t.Ok
                    },
                    pageDialog: {
                        severity: 1,
                        title: t.Title,
                        buttons: [{
                            text: t.Ok,
                            callback: function() {
                                return !0
                            }
                        }, {
                            text: t.Cancel,
                            callback: function() {
                                return !1
                            }
                        }]
                    }
                }).spread(function(e) {
                    return e
                })
            },
            __advancePage: function(event, t, n) {
                return this.setReady(!1), (void 0 === event || "jump" !== event && "next" !== event) && (event = "next"), this._prevalidate(n).then(function(n) {
                    if (!n) throw new Error("ValidationFailed");
                    var i = this.serializePageRuntime();
                    return this.adapter[event](i, t)
                }.$bind(this)).then(function(t) {
                    return this._renderPageTemplate(t, event)
                }.$bind(this))["catch"](function(t) {
                    i.updateState("Page", "__advancePage failed " + (t.message || t)), this._trigger("validationfailed"), "ValidationFailed" !== t.message && this.adapter.handleError(t, e)
                }.$bind(this))
            },
            __handleHeaderAndFooter: function(e) {
                this.defaults.Header && this.defaults.Header.setDef(e.getHeader()), this.defaults.Footer && this.defaults.Footer.setDef(e.getFooter())
            },
            setSessionId: function(e) {
                e && (this.runtime.FormSessionID = e, r.set(this.runtime, "SM.FormSessionID", e))
            },
            getSessionId: function() {
                return r.get(this.runtime, "SM.FormSessionID") || null
            },
            __handleCookieActions: function(e) {
                r.each(e.getCookiesToClear(), function(e) {
                    B.removeCookie(e.name, e.path, e.domain)
                }), r.each(e.getCookiesToSet(), function(e) {
                    B.setCookie(e.name, e.value, e.maxAge, e.path, e.domain, e.secure)
                })
            },
            _renderPageTemplate: function(t, n) {
                return this.setSessionId(t.getSessionId()), this.__handleCookieActions(t), this.__handleUpdatedTemplate(t) ? e.resolve() : (t.didFailValidation() || (this.__inPageDisplayLogicOnPage = !1), t.getCurrentLanguage() !== this.runtime.Language && this.setLanguage(t.getCurrentLanguage()), new e(function(e) {
                    this.once("ready", e);
                    var i = this.getED("Q_PageTransition") || this.adapter.getTransition();
                    n || (i = null), this.__transitionHandler.setTransition(i, n), this.pageButtons.handleNavButtonMessages(t), this.__handleHeaderAndFooter(t), t.isPageMessage() ? this.renderPageMessage(t, t.getMessage("PageMessage")) : t.isEndOfSurvey() ? this.renderEOS(t) : t.didFailValidation() ? (this._trigger("validationfailed"), this.updateQuestions(t), this.off("ready", e), e()) : t.isTOC() ? this.loadQuestions(t).then(this.renderTOC)["catch"](function(e) {
                        this.adapter.handleError(e, "loadQuestions")
                    }.$bind(this)) : this.loadQuestions(t).then(this.render)["catch"](function(e) {
                        this.adapter.handleError(e, "loadQuestions")
                    }.$bind(this)), this.adapter.renderAdobeAnalyticsBeacons(t)
                }.$bind(this)))
            }.$bound(),
            _prevalidate: function(t) {
                if (!this._pageTemplate || this._pageTemplate.isTOC() || this._pageTemplate.isResponseSummary()) return e.resolve(!0);
                var n = [],
                    o = r.map(this._pageTemplate.getQuestionIDs(), function(r) {
                        var o = this._questionRenderers[r];
                        if (n.push(o), o) {
                            if (o.prevalidate) return o.prevalidate(t);
                            i.error("Question does not have a prevalidate: ", r, o, this.runtime.SM.SurveyID)
                        }
                        else i.error("No question renderer for ", r, this.runtime.SM.SurveyID);
                        return e.resolve(!0)
                    }, this);
                return e.all(o).spread(function() {
                    var e = null,
                        i = !!r.find(arguments, function(t, n) {
                            return 1 === t && null === e && (e = n), 1 === t
                        });
                    if (i && r.get(t, "requestResponseOverride") !== !0) {
                        this.pageButtons.getNextButton().disableFailSafe();
                        var o = r.reduce(arguments, function(e, t, n, i) {
                                return t !== !0 ? ++e : e
                            }, 0),
                            s = this._pageTemplate.getMessage("RequestResponseMessages");
                        return this._showRequestResponseDialog(o, s, n[e].runtime.ID)
                    }
                    return !0
                }.$bind(this))
            },
            _showRequestResponseDialog: function(e, t, n) {
                var i = t.ContinueQuestion,
                    r = t.UnansweredQuestion,
                    o = t.UnansweredQuestions,
                    s = t.AnswerQuestion,
                    a = t.AnswerQuestions,
                    u = t.ContinueWithoutAnswering,
                    l = e > 1 ? o : r,
                    c = e > 1 ? a : s;
                return h.create({
                    msg: l.replace("%1", e) + ".\n\n" + i,
                    buttons: {
                        cancel: c,
                        ok: u
                    },
                    pageDialog: {
                        severity: 1,
                        title: t.RequestResponseTitle,
                        buttons: [{
                            text: u,
                            callback: function() {
                                return !0
                            }
                        }, {
                            text: c,
                            callback: function() {
                                return !1
                            }
                        }]
                    }
                }).spread(function(e) {
                    return e ? !0 : (this.scrollToQuestion(n), !1)
                }.$bind(this))
            },
            _finishRenderAndTriggerReady: function(e) {
                this._trigger("pageunload");
                var t = !!this.__getPageScripts().length;
                return this.pageButtons.enableButtons(), this.__jumpInProgress = !1, this.__runPageScripts().then(function() {
                    return this._trigger("preready"), t && (this.__twoWayBinding.triggerChange(), this._unbind(), this._bind(e), this.__twoWayBinding.bind()), this._scrollToTop(), this.__transitionHandler.transitionPage().then(function(e) {
                        e && (this.__root = e), P.removeAllOverlays(), this._trigger("ready"), this.setupImageLoadVerification()
                    }.$bind(this))
                }.$bind(this))
            },
            setupImageLoadVerification: function() {
                var e = this.findElementsOnPage("img").length,
                    t = 0,
                    n = !1,
                    i = function() {
                        t++, t >= e && n === !1 && (this._trigger("ready:imagesLoaded"), n = !0)
                    }.$bind(this);
                e > 0 ? this.findElementsOnPage("img").load(function() {
                    i()
                }).each(function() {
                    this.complete ? i() : $(this).on("error", function() {
                        i()
                    })
                }) : this._trigger("ready:imagesLoaded")
            },
            __setOptions: function() {
                var e = this.adapter.getFormOptions();
                this.options = new f(e);
                var t = this.options.get("SurveyLanguage");
                void 0 !== this.options.get("Validation") && (this._validation = this.options.get("Validation")), void 0 !== this.options.get("AvailableLanguages") && (this.languages = this.options.get("AvailableLanguages")), this.defaults.Header = new T(this.options.get("Header"), t, this), this.defaults.Footer = new w(this.options.get("Footer"), t, this);
                var n = this.options.get("NextButton");
                (n || "string" == typeof n) && (this.pageButtons.createNextButton(n, t), this.pageButtons.getNextButton() && (this._listenTo(this.pageButtons.getNextButton(), "next", this.next), this._listenTo(this, "validationfailed", this.pageButtons.getNextButton().actionFailed)));
                var i = this.options.get("PreviousButton");
                (i || "string" == typeof i) && (this.pageButtons.createPreviousButton(i, t), this.pageButtons.getPreviousButton() && (this._listenTo(this.pageButtons.getPreviousButton(), "prev", this.prev), this._listenTo(this, "validationfailed", this.pageButtons.getPreviousButton().actionFailed))), this.pageButtons.getNextButton() && this.pageButtons.getPreviousButton() && (this._listenTo(this.pageButtons.getPreviousButton(), "clicked", this.pageButtons.getNextButton().disableButton), this._listenTo(this.pageButtons.getNextButton(), "clicked", this.pageButtons.getPreviousButton().disableButton), this._listenTo(this.pageButtons.getPreviousButton(), "loadEnd", this.pageButtons.getNextButton().enableButton), this._listenTo(this.pageButtons.getNextButton(), "loadEnd", this.pageButtons.getPreviousButton().enableButton)), this.options.get("Languages") && (this.defaults.LanguageSelector = new v(this.options, t, this), this._listenTo(this.defaults.LanguageSelector, "change", this.translate)), this.translateFormPreviewMessage(), this.handleFormOptions(this.options)
            }.$bound(),
            handleFormOptions: function() {},
            storeGeolocation: function() {
                this.options.get("CollectGeolocation") && r.get(window, "Qualtrics.Location") && (O.Location.accuracy && (this.runtime.SM.GeolocationAccuracy = O.Location.accuracy), O.Location.latitude && (this.runtime.SM.GeolocationLatitude = O.Location.latitude), O.Location.longitude && (this.runtime.SM.GeolocationLongitude = O.Location.longitude), O.Location.altitude && (this.runtime.SM.GeolocationAltitude = O.Location.altitude), O.Location.heading && (this.runtime.SM.GeolocationHeading = O.Location.heading))
            }.$bound(),
            _storeMetaData: function() {
                I.getPageData(this.runtime.SM, this.runtime.ED)
            }.$bound(),
            _saveProgress: function() {
                this.adapter.saveProgress(this.serializePageRuntime())
            }.$bound(),
            reset: function() {
                this._transactionId = null, this._questionRenderers = {}, this.runtime = {
                    SM: {},
                    ED: {}
                }, this.once("ready", function() {
                    o.isCurrentlyRunning("surveyInitialize") && o.endTiming("surveyInitialize"), o.endPageLoadTiming(), this._trigger("formReady"), this._storeMetaData()
                }.$bind(this)), this.pageButtons.reset()
            },
            __resetErrors: function() {
                r.each(this._questionRenderers, function(e) {
                    e.resetErrors()
                }, this)
            },
            _scrollToTop: function() {
                this.__transitionHandler.hasTransition() && $(window).scrollTop() > 0 ? $("html,body").animate({
                    scrollTop: 0
                }, 200) : $(window).scrollTop(0)
            },
            __triggerEventOnQuestionRenderers: function(e) {
                r.each(this.getCurrentPageQuestionRenderers(), function(t) {
                    t._trigger(e)
                })
            },
            getCurrentPageQuestionRenderers: function() {
                var e = {},
                    t = this.getPageTemplate();
                return r.each(t.getQuestionIDs(), function(t) {
                    e[t] = this._questionRenderers[t]
                }.$bind(this)), e
            },
            __preventSubmitForm: function() {
                this.__transitionHandler.getActivePage().on("submit", this._preventSubmit).on("keydown", this._preventKeydownSubmit)
            },
            __offPreventSubmitForm: function() {
                this.__transitionHandler.getActivePage().off("submit", this._preventSubmit).off("keydown", this._preventKeydownSubmit)
            },
            _preventSubmit: function(e) {
                return e.preventDefault(), !1
            }.$bound(),
            _preventKeydownSubmit: function(e) {
                13 == e.keyCode && "TEXTAREA" !== e.target.tagName && e.preventDefault()
            }.$bound(),
            __fireMobileJavascript: function() {
                if (navigator && navigator.userAgent) {
                    var e = $("#SurveyEngineBody");
                    navigator.userAgent.match(/Apple/i) && !navigator.userAgent.match(/Android/i) ? e.addClass("iOS") : navigator.userAgent.match(/Android/i) && e.addClass("Android"), this.isMobile() && s.initializeScrollers()
                }
            },
            loadQuestionAPI: function() {
                return n(["core/questionAPI"]).spread(function(e) {
                    return O.SurveyEngine.Page = this, e
                }.$bind(this))
            },
            __getPageScripts: function() {
                return this.__transitionHandler.getActivePage().find("script, deferredscript")
            },
            __runPageScripts: function() {
                var t = this.__getPageScripts();
                if (!t.length && !this._pageTemplate.hasJavaScript()) return e.resolve();
                var n = window.onerror;
                return window.onerror = function(e) {
                    i.error("Failed to evaluate page script in page", e.stack || e)
                }, this.loadQuestionAPI().then(function() {
                    var r = $("head"),
                        o = (Math.random() + "").slice(2),
                        s = function(e, t) {
                            var n = document.createElement("script");
                            n.type = "text/javascript", n.setAttribute("data-runId", o), n.readyState ? n.onreadystatechange = function() {
                                ("loaded" == n.readyState || "complete" == n.readyState) && (n.onreadystatechange = null, t())
                            } : (n.onload = t, n.onerror = t), n.src = e, document.getElementsByTagName("head")[0].appendChild(n)
                        },
                        a = e.resolve(),
                        u = function(e) {
                            var t = $(e).parents(".QuestionOuter");
                            return t.length ? t.attr("id") : void 0
                        };
                    return t.each(function(t, n) {
                        a = a.then(function() {
                            var t = e.defer(),
                                a, l = n.text || n.textContent;
                            try {
                                if (n.src) s(n.src, t.resolve.bind(t));
                                else {
                                    var c = u(n);
                                    c && (l = "window.Q_CustomJSContextQID = " + JSON.stringify(c) + ";" + l + "; delete window.Q_CustomJSContextQID;"), a = $("<script>", {
                                        text: l,
                                        "data-runId": o
                                    }), r.append(a), t.resolve()
                                }
                            }
                            catch (d) {
                                i.error("Failed to evaluate page script in page", d.stack || d, l), t.resolve()
                            }
                            return t.promise
                        }).then(function() {
                            $(n).remove()
                        })
                    }), a.then(function() {
                        window.onerror = n
                    }), r.find("script[data-runId][data-runId!=" + o + "]").remove(), a
                }.$bind(this))
            },
            __submitRealUserMetrics: function() {
                this.runtime.ED.Q_NoMetrics || this.adapter && this.adapter.submitRealUserMetrics && this.adapter.submitRealUserMetrics(this.getSM())
            },
            isEndOfSurvey: function() {
                return this._pageTemplate ? this._pageTemplate.isEndOfSurvey() : !1
            },
            inputClickHelper: function(e) {
                var t = $(e.target);
                if ("LABEL" != t.prop("tagName") && "INPUT" != t.prop("tagName")) {
                    var n = t.children('input[type="radio"], input[type="checkbox"]');
                    1 == n.length && n.click()
                }
            },
            findElementsOnPage: function(e) {
                return this.getActivePage().find(e)
            },
            getActivePage: function() {
                return this.__transitionHandler.getActivePage()
            },
            enableThumbnails: function() {},
            shouldShowHiddenQuestions: function() {
                return !1
            }
        }, !0)
    }), qrequire.define("classes/page/UploadCapture", ["dejavu"], function(e) {
        "use strict";
        return e.Class.declare({
            $name: "UploadCapture",
            _uploaders: [],
            _page: null,
            __watching: !1,
            initialize: function(e) {
                this._page = e
            },
            registerFileUploader: function(e) {
                this.watchPageForUploads(), this._uploaders.push(e)
            },
            watchPageForUploads: function() {
                this.__watching || (this.__watching = !0, this._page.getActivePage().on("dragover", function(e) {
                    return e.preventDefault(), !1
                }), this._page.getActivePage().on("drop", function(e) {
                    e.preventDefault();
                    var t = this.getNearestUploader(e.originalEvent.clientY);
                    return t && t.dropzone.drop(e.originalEvent), !1
                }.$bind(this)))
            },
            getNearestUploader: function(e) {
                if (this._uploaders.length <= 1) return this._uploaders[0];
                var t = this._uploaders.map(function(t) {
                    var n = t.getDropzone().offset().top + t.getDropzone().height() / 2;
                    return {
                        distance: Math.abs(n - e),
                        obj: t
                    }
                });
                return t.sort(function(e, t) {
                    return e.distance - t.distance
                })[0].obj
            }
        }, !0)
    }), qrequire.define("classes/BrowserPage", ["dejavu", "bluebird", "log", "classes/Page", "load", "classes/page/UploadCapture", "dom"], function(e, t, n, i, r, o, $) {
        "use strict";
        return e.Class.declare({
            $name: "BrowserPage",
            $extends: i,
            uploadCapture: null,
            _lastEvent: null,
            _idleTime: 3e5,
            _thumbnailsEnabled: !1,
            _thumbnailStylesLoaded: !1,
            initialize: function(e) {
                i.prototype.initialize.call(this, e), this.uploadCapture = new o(this), this.on("ready", this._observeFocusAfterLapse, this)
            },
            _cssLoaded: function() {
                var e = $("#css-trigger"),
                    i = "jfe" == e.css("font-family");
                return i || this._renderedFirstPage ? t.resolve(!0) : new t(function(t) {
                    var i = !1,
                        r = setTimeout(function() {
                            i = !0, n.error("CSS failed to load in time"), t(!1)
                        }, 5e3),
                        o = 5,
                        s = Date.now();
                    setTimeout(function a() {
                        var n = (Date.now() - s) / 1e3 + 1,
                            u = parseInt(Math.pow(o, n) / n);
                        "jfe" == e.css("font-family") ? (clearTimeout(r), t(!0)) : i || setTimeout(a, u)
                    }, o)
                })
            },
            _observeFocusAfterLapse: function() {
                this._lastEvent = Date.now();
                for (var e = function(e) {
                        var t = Date.now();
                        t - this._lastEvent > this._idleTime && this.checkForSessionChanges(), this._lastEvent = t
                    }.$bind(this), t = ["mousemove", "mousedown", "keydown", "focus", "visibilitychange", "deviceorientation"], n = 0; n < t.length; n++) window.addEventListener(t[n], e, !0)
            },
            checkForSessionChanges: function() {
                return !this._transactionId || this._transactionId <= 1 || this._pageTemplate && this._pageTemplate.isEndOfSurvey() ? void 0 : this.adapter.checkForSessionChanges ? void this.adapter.checkForSessionChanges(this.serializePageRuntime(!0)).then(function(e) {
                    e.replacesOutdated() && (n.debug("checkForSessionChanges: updating"), this._renderPageTemplate(e))
                }.$bind(this), n.error) : void n.warn("Using a BrowerPage without a SpokeAdapter!")
            },
            setIdleTime: function(e) {
                this._idleTime = e
            },
            redirectToUrl: function(e) {
                window.location.replace(e)
            },
            _unbind: function() {
                i.prototype._unbind.call(this), this._thumbnailsEnabled && (this._thumbnailsEnabled = !1, r(["fancybox"]).spread(function($) {
                    this.findElementsOnPage("a.expandedImageAnchor").unbind("click.fb-start")
                }.$bind(this)))
            },
            _bind: function(e) {
                i.prototype._bind.call(this, e), this._thumbnailsEnabled && r(["fancybox"]).spread(function($) {
                    this.findElementsOnPage("a.expandedImageAnchor").fancybox({
                        live: !1
                    })
                }.$bind(this))
            },
            enableThumbnails: function() {
                if (!this._thumbnailStylesLoaded) {
                    var e = document.createElement("link");
                    e.type = "text/css", e.rel = "stylesheet", e.href = "../libs/fancybox/jquery.fancybox.css", document.getElementsByTagName("head")[0].appendChild(e), this._thumbnailStylesLoaded = !0
                }
                this._thumbnailsEnabled = !0
            },
            isMobilePreviewFrame: function() {
                return $("html").hasClass("MobilePreviewFrame")
            }
        }, !0)
    }), qrequire.define("adapters/AbstractAdapter", ["dejavu", "classes/Events", "utils", "dom"], function(e, t, n, $) {
        "use strict";
        return e.AbstractClass.declare({
            $name: "AbstractAdapter",
            $extends: t,
            getCustomStyles: function(e) {
                var t = "";
                if (e.CustomStyles) {
                    var i = e.CustomStyles;
                    n.each(i, function(e, i) {
                        var r = "";
                        if ("customCSS" === i && e) e = $("<div/>").html(e).text(), r += e + "\n", t = r + t;
                        else if (e) {
                            var o = e.selector,
                                s = e.styles;
                            n.each(s, function(e, t) {
                                if (e) {
                                    var n = t.split(/(?=[A-Z])/);
                                    t = n.join("-").toLowerCase(), r += "	" + t + ":" + e + ";\n"
                                }
                            }), "" !== r && (r = o + "\n{\n" + r + "}\n"), t += r
                        }
                    })
                }
                return t
            }
        })
    }), qrequire.define("adapters/AdapterInterface", ["dejavu"], function(e) {
        "use strict";
        return e.Interface.declare({
            $name: "AdapterInterface",
            handleError: function(e, t) {},
            getStaticPath: function() {},
            getSkinStylesBase: function() {},
            getSkinHTML: function() {},
            getTransition: function() {},
            getRTLStylesPath: function() {},
            getGlobalMessages: function(e) {},
            translate: function(e, t) {},
            getFormOptions: function() {},
            start: function(e) {},
            next: function(e) {},
            jump: function(e, t) {},
            prev: function(e) {},
            evaluateInPageDisplayLogic: function(e) {},
            allowsNetworkFunctionality: function() {},
            submitRealUserMetrics: function(e) {},
            isMobile: function() {},
            renderAdobeAnalyticsBeacons: function(e) {},
            renderPDF: function(e) {},
            isOffline: function() {}
        })
    }), qrequire.define("classes/page/PageTemplate", ["dejavu", "utils"], function(e, t) {
        "use strict";
        return e.FinalClass.declare({
            $name: "PageTemplate",
            __debugData: null,
            __sessionId: null,
            __questionDefinitions: {},
            __questionRuntimes: {},
            __questionIDs: [],
            __blockID: null,
            __nextButton: !1,
            __previousButton: !1,
            __nextButtonText: null,
            __previousButtonText: null,
            __nextButtonAriaLabel: null,
            __previousButtonAriaLabel: null,
            __tocButton: !1,
            __count: 0,
            __skipped: 0,
            __notDisplayed: 0,
            __messages: {},
            __languageSelector: null,
            __currentLanguage: "EN",
            __failedValidation: !1,
            __isEndOfSurvey: !1,
            __EOSRedirectURL: null,
            __isPageMessage: !1,
            __isSystemMessage: !0,
            __formTitle: null,
            __tocTreeStructure: null,
            __isTOC: !1,
            __SM: {},
            __ED: {},
            __previewOptions: null,
            __formRuntime: null,
            __transactionId: null,
            __replacesOutdated: !1,
            __progressPercent: 0,
            __progressBarText: "",
            __progressAccessibleText: "",
            __formOptions: null,
            __header: "",
            __footer: "",
            __brandType: null,
            __hasJavaScript: !1,
            __adobeAnalyticsBeacons: [],
            __messageTranslations: {},
            __isResponseSummary: !1,
            __confirmResponse: !1,
            __isScoringSummary: !1,
            __cookiesToClear: [],
            __cookiesToSet: [],
            initialize: function(e) {
                return null !== e && t.isObject(e) ? this.deserialize(e) : !1
            },
            getSessionId: function() {
                return this.__sessionId
            },
            setSessionId: function(e) {
                this.__sessionId = e
            },
            __addQuestion: function(e, n, i) {
                return null === e || null === n || null === i ? !1 : this.__questionDefinitions[e] ? !1 : (this.__questionDefinitions[e] = t.deepClone(n), this.__questionRuntimes[e] = t.deepClone(i), this.__questionIDs.push(e), !0)
            },
            getFormRuntime: function() {
                return this.__formRuntime
            },
            setFormRuntime: function(e) {
                this.__formRuntime = e || this.__formRuntime
            },
            setCookie: function(e) {
                this.__cookiesToSet.push(e)
            },
            getCookiesToSet: function() {
                return this.__cookiesToSet
            },
            clearCookie: function(e) {
                this.__cookiesToClear.push(e)
            },
            getCookiesToClear: function() {
                return this.__cookiesToClear
            },
            setMessageTranslations: function(e) {
                this.__messageTranslations = e
            },
            getMessageTranslation: function(e) {
                return this.__messageTranslations[e]
            },
            getBrandType: function() {
                return this.__brandType
            },
            setBrandType: function(e) {
                this.__brandType = e
            },
            hasJavaScript: function() {
                return this.__hasJavaScript
            },
            setHasJavaScript: function(e) {
                this.__hasJavaScript = e
            },
            setFormOptions: function(e) {
                this.__formOptions = e
            },
            getFormOptions: function() {
                return this.__formOptions
            },
            setHeader: function(e) {
                this.__header = e
            },
            getHeader: function() {
                return this.__header
            },
            setFooter: function(e) {
                this.__footer = e
            },
            getFooter: function() {
                return this.__footer
            },
            isEndOfSurvey: function() {
                return this.__isEndOfSurvey
            },
            setAsEndOfSurvey: function(e) {
                this.__isEndOfSurvey = !0, e && e.EOSRedirectURL && (this.__EOSRedirectURL = e.EOSRedirectURL, this.__isSystemMessage = !0)
            },
            getEOSRedirectURL: function() {
                return this.__EOSRedirectURL
            },
            isPageMessage: function() {
                return this.__isPageMessage
            },
            setAsPageMessage: function() {
                this.__isPageMessage = !0, this.__isSystemMessage = !0
            },
            setIsSystemMessage: function(e) {
                this.__isSystemMessage = !!e
            },
            isSystemMessage: function() {
                return this.__isSystemMessage
            },
            isTOC: function() {
                return this.__isTOC
            },
            setAsTOC: function() {
                this.__isTOC = !0
            },
            setQuestionRuntime: function(e, t) {
                this.__questionRuntimes[e] = t
            },
            showQuestion: function(e) {
                this.__questionRuntimes[e] && (this.__questionRuntimes[e].Displayed = !0)
            },
            hideQuestion: function(e) {
                this.__questionDefinitions[e] && (this.__questionRuntimes[e].Displayed = !1)
            },
            setTOCTreeStructure: function(e) {
                this.__tocTreeStructure = e
            },
            getTOCTreeStructure: function() {
                return this.__tocTreeStructure
            },
            getQuestionDefinition: function(e) {
                return null !== e && this.__questionDefinitions[e] ? this.__questionDefinitions[e] : null
            }.$bound(),
            getQuestionRuntime: function(e) {
                return null !== e && this.__questionRuntimes[e] ? this.__questionRuntimes[e] : null
            }.$bound(),
            getQuestionRuntimes: function() {
                return this.__questionRuntimes
            }.$bound(),
            getQuestionDefinitions: function() {
                return this.__questionDefinitions
            },
            getQuestionIDs: function() {
                return this.__questionIDs
            },
            getBlockId: function() {
                return this.__blockID
            },
            getCount: function() {
                return this.__count
            },
            getNotDisplayed: function() {
                return this.__notDisplayed
            },
            nextButtonIsEnabled: function() {
                return !!this.__nextButton
            },
            previousButtonIsEnabled: function() {
                return !!this.__previousButton
            },
            getNextButtonText: function() {
                return this.__nextButtonText ? this.__nextButtonText : ""
            },
            getPreviousButtonText: function() {
                return this.__previousButtonText ? this.__previousButtonText : ""
            },
            setNextButtonText: function(e) {
                e && (this.__nextButtonText = e)
            },
            setPreviousButtonText: function(e) {
                e && (this.__previousButtonText = e)
            },
            getNextButtonAriaLabel: function() {
                return this.__nextButtonAriaLabel ? this.__nextButtonAriaLabel : ""
            },
            getPreviousButtonAriaLabel: function() {
                return this.__previousButtonAriaLabel ? this.__previousButtonAriaLabel : ""
            },
            setNextButtonAriaLabel: function(e) {
                e && (this.__nextButtonAriaLabel = e)
            },
            setPreviousButtonAriaLabel: function(e) {
                e && (this.__previousButtonAriaLabel = e)
            },
            getCurrentLanguage: function() {
                return this.__currentLanguage
            },
            setCurrentLanguage: function(e) {
                this.__currentLanguage = e
            },
            getMessages: function() {
                return this.__messages
            },
            getMessage: function(e) {
                return void 0 !== this.__messages[e] ? this.__messages[e] : null
            },
            setMessage: function(e, t) {
                this.__messages[e] = t
            },
            setMessages: function(e) {
                t.isArray(e) ? this.__messages = {} : this.__messages = e
            },
            getFormTitle: function() {
                return this.__formTitle
            },
            didFailValidation: function() {
                return this.__failedValidation
            },
            setFailedValidation: function() {
                this.__failedValidation = !0
            },
            setTransactionId: function(e) {
                this.__transactionId = e
            },
            getTransactionId: function() {
                return this.__transactionId
            },
            setReplacesOutdated: function(e) {
                this.__replacesOutdated = e
            },
            replacesOutdated: function() {
                return this.__replacesOutdated
            },
            setSM: function(e) {
                e ? this.__SM = t.deepClone(e) : this.__SM = {}
            },
            setED: function(e) {
                e ? this.__ED = t.deepClone(e) : this.__ED = {}
            },
            getED: function(e) {
                return e ? this.__ED[e] : this.__ED
            },
            getSM: function() {
                return this.__SM
            },
            setPreviewOptions: function(e) {
                this.__previewOptions = e || null
            },
            getPreviewOptions: function() {
                return this.__previewOptions
            },
            getProgressPercent: function() {
                return this.__progressPercent
            },
            getProgressBarText: function() {
                return this.__progressBarText
            },
            getProgressAccessibleText: function() {
                return this.__progressAccessibleText
            },
            setProgress: function(e, t, n) {
                this.__progressPercent = e, this.__progressBarText = t, this.__progressAccessibleText = n
            },
            addDebugData: function(e, t) {
                this.__debugData || (this.__debugData = {}), this.__debugData[e] = t
            },
            getDebugData: function() {
                return this.__debugData
            },
            getAdobeAnalyticsBeacons: function() {
                return this.__adobeAnalyticsBeacons
            },
            addAdobeAnalyticsBeacon: function(e) {
                this.__adobeAnalyticsBeacons.push(e)
            },
            isPageSummary: function() {
                return this.isResponseSummary() || this.isScoringSummary()
            },
            isResponseSummary: function() {
                return this.__isResponseSummary
            },
            confirmResponse: function() {
                return this.__confirmResponse
            },
            isScoringSummary: function() {
                return this.__isScoringSummary
            },
            summaryComplete: function() {
                return !!(this.isResponseSummary() && !this.confirmResponse() || this.isScoringSummary())
            },
            getResponseSummaryMessage: function() {
                return this.__eosMessage.ResponseSummaryMessage
            },
            serialize: function(e) {
                var n = {};
                return n.FormSessionID = e || this.__sessionId || null, n.QuestionIDs = t.deepClone(this.__questionIDs), n.QuestionDefinitions = t.deepClone(this.__questionDefinitions), n.NextButton = this.__nextButton, n.PreviousButton = this.__previousButton, n.Count = this.__count, n.Skipped = this.__skipped, n.NotDisplayed = this.__notDisplayed, n.LanguageSelector = t.deepClone(this.__languageSelector), n.Messages = t.deepClone(this.__messages), n.IsPageMessage = this.__isPageMessage, n.PageMessageTranslations = t.deepClone(this.__messageTranslations), n.CurrentLanguage = this.__currentLanguage, n.QuestionRuntimes = t.deepClone(this.__questionRuntimes), n.IsEOS = this.__isEndOfSurvey, n.FailedValidation = this.__failedValidation, n.BlockID = this.__blockID, n.FormTitle = this.__formTitle, n.TableOfContents = this.__tocTreeStructure, n.UseTableOfContents = this.__isTOC, n.SM = this.__SM, n.ED = this.__ED, n.FormRuntime = this.__formRuntime, n.TransactionID = this.__transactionId, n.ReplacesOutdated = this.__replacesOutdated, n.EOSRedirectURL = this.__EOSRedirectURL, n.ProgressPercent = this.__progressPercent, n.ProgressBarText = this.__progressBarText, n.ProgressAccessibleText = this.__progressAccessibleText, n.FormOptions = this.__formOptions, n.Header = this.__header, n.Footer = this.__footer, n.HasJavaScript = this.__hasJavaScript, n.IsSystemMessage = this.__isSystemMessage, this.getPreviewOptions() && (n.PreviewOptions = this.getPreviewOptions()), this.__nextButtonText && (n.NextButtonText = this.getNextButtonText()), this.__previousButtonText && (n.PreviousButtonText = this.getPreviousButtonText()), this.__nextButtonAriaLabel && (n.NextButtonAriaLabel = this.getNextButtonAriaLabel()), this.__previousButtonAriaLabel && (n.PreviousButtonAriaLabel = this.getPreviousButtonAriaLabel()), this.__debugData && (n.DebugData = this.__debugData), this.__brandType && (n.BrandType = this.__brandType), this.__adobeAnalyticsBeacons.length > 0 && (n.AdobeAnalyticsBeacons = this.getAdobeAnalyticsBeacons()), this.__isResponseSummary && (n.IsResponseSummary = !0, this.__confirmResponse && (n.ConfirmResponse = !0)), this.__isScoringSummary && (n.IsScoringSummary = !0), n.CookieActions = {
                    Set: this.getCookiesToSet(),
                    Clear: this.getCookiesToClear()
                }, n
            },
            deserialize: function(e) {
                return e ? (this.__sessionId = e.FormSessionID, t.each(e.QuestionIDs, function(t) {
                        e.QuestionDefinitions[t] && e.QuestionRuntimes[t] && this.__addQuestion(t, e.QuestionDefinitions[t], e.QuestionRuntimes[t])
                    }, this), e.LanguageSelector ? this.__languageSelector = t.deepClone(e.LanguageSelector) : this.__languageSelector = null, e.Messages ? this.setMessages(t.deepClone(e.Messages)) : this.setMessages({}), e.PageMessageTranslations && this.setMessageTranslations(t.deepClone(e.PageMessageTranslations)), e.IsPageMessage && this.setAsPageMessage(), e.CurrentLanguage ? this.__currentLanguage = e.CurrentLanguage : this.__currentLanguage = "EN", e.IsEOS && (this.setAsEndOfSurvey(), e.EOSRedirectURL && (this.__EOSRedirectURL = e.EOSRedirectURL)), e.FailedValidation && (this.__failedValidation = !0), e.BlockID && (this.__blockID = e.BlockID), e.FormTitle && (this.__formTitle = e.FormTitle), e.SM && this.setSM(e.SM), e.ED && this.setED(e.ED), e.FormRuntime && this.setFormRuntime(e.FormRuntime), e.NextButtonText && this.setNextButtonText(e.NextButtonText), e.PreviousButtonText && this.setPreviousButtonText(e.PreviousButtonText), e.NextButtonAriaLabel && this.setNextButtonAriaLabel(e.NextButtonAriaLabel), e.PreviousButtonAriaLabel && this.setPreviousButtonAriaLabel(e.PreviousButtonAriaLabel), e.PreviewOptions && this.setPreviewOptions(e.PreviewOptions), e.ProgressPercent && (this.__progressPercent = e.ProgressPercent), e.ProgressBarText && (this.__progressBarText = e.ProgressBarText), e.ProgressAccessibleText && (this.__progressAccessibleText = e.ProgressAccessibleText), e.AdobeAnalyticsBeacons && (this.__adobeAnalyticsBeacons = e.AdobeAnalyticsBeacons), e.BrandType && this.setBrandType(e.BrandType), e.IsResponseSummary && (this.__isResponseSummary = e.IsResponseSummary, e.ConfirmResponse && (this.__confirmResponse = !0)), e.IsScoringSummary && (this.__isScoringSummary = e.IsScoringSummary), e.CookieActions && (this.__cookiesToSet = e.CookieActions.Set, this.__cookiesToClear = e.CookieActions.Clear), this.__nextButton = e.NextButton, this.__previousButton = e.PreviousButton, this.__count = e.Count || 0,
                    this.__skipped = e.Skipped || 0, this.__notDisplayed = e.NotDisplayed || 0, this.__transactionId = e.TransactionID || null, this.__replacesOutdated = e.ReplacesOutdated || !1, this.__tocTreeStructure = e.TableOfContents || null, this.__isTOC = e.UseTableOfContents || !1, this.__debugData = e.DebugData, this.__formOptions = e.FormOptions, this.__header = e.Header || "", this.__footer = e.Footer || "", this.__hasJavaScript = !!e.HasJavaScript, this.__isSystemMessage = !!e.IsSystemMessage, !0) : !1
            }
        }, !0)
    }), qrequire.define("core/pageErrorHandler", ["dom", "log", "core/PageDialog"], function($, e, t) {
        "use strict";

        function n(e) {
            if (!e) return {};
            var t = 500,
                n;
            if (e.status && (t = e.status), e.stack && (n = e.stack), e.responseText) try {
                e = JSON.parse(e.responseText) || {}
            }
            catch (i) {
                e = {
                    errorCode: e.responseText || e.message
                }
            }
            return e.stack = n, e.status = t, e
        }

        function i() {
            var e = new Date,
                t = parseInt((e.getUTCFullYear() + "").substr(2)).toString(36),
                n = (1 + e.getUTCMonth()).toString(36),
                i = e.getUTCDate().toString(36);
            return "B" + t + n + i + Math.floor(1e9 * Math.random()).toString(36)
        }

        function r(e) {
            var n = e.detailedMessage,
                i = e.title,
                r = new t(n, {
                    title: i,
                    ref: e.ref
                });
            r.show()
        }

        function o(e) {
            var n = new t(e.detailedMessage, {
                title: "404 Not Found",
                noButtons: !0
            });
            n.show()
        }
        var s = {
            InvalidPreviousRequest: function(e, t) {},
            SurveyIncompatible: function(e, t) {
                t.redirectToUrl(e.data.URL)
            },
            MissingSession: function(e) {
                var n = new t(e.detailedMessage, {
                    severity: 0,
                    title: e.title
                });
                n.show()
            },
            ClientNeedsRefresh: function() {
                window.location.reload()
            },
            JFERedirect: function(e) {
                var t = e.data.domain;
                return t ? void(window.location.host = t) : void r(e)
            },
            DistributionLinkFinished: function(e) {
                var n = new t(e.detailedMessage, {
                    severity: 1,
                    title: e.title,
                    noButtons: !0
                });
                n.show()
            },
            DistributionLinkExpired: function(e) {
                var n = new t(e.detailedMessage, {
                    severity: 1,
                    title: e.title,
                    noButtons: !0
                });
                n.show()
            },
            DistributionLinkMissingPanelMember: function(e) {
                var n = new t(e.detailedMessage, {
                    severity: 1,
                    title: e.title,
                    noButtons: !0
                });
                n.show()
            },
            NoFormDefinition: function(e) {
                var n = new t(e.detailedMessage, {
                    severity: 1,
                    title: e.title,
                    noButtons: !0
                });
                n.show()
            }
        };
        return {
            handle: function(t, a, u) {
                window.Pace ? window.Pace.stop() : $("#pace").remove(), a = n(a), a.isBroken || void 0 === a.isBroken ? (a.ref || (a.ref = i()), e.error("Error [#" + a.ref + "]:", a.errorCode || a, "Source: " + (u || ""), a.stack || "")) : (window.Page = window.Page || {}, window.Page.formLoaded = !0), "function" == typeof s[a.errorCode] ? s[a.errorCode](a, t) : 404 == a.status ? o(a) : r(a)
            }
        }
    }), qrequire.define("integrations/AdobeAnalytics/AdobeAnalyticsRenderer", ["dejavu", "utils"], function(e, t) {
        "use strict";
        return e.FinalClass.declare({
            $name: "BeaconResponseFormatter",
            __pageTemplate: null,
            initialize: function(e) {
                this.__pageTemplate = e
            },
            addBeaconsToPage: function() {
                var e = this.__pageTemplate.getAdobeAnalyticsBeacons();
                t.each(e, function(e) {
                    this.__addBeaconToPage(e.trackingServer, e.reportSuiteId, e.hCodeVersion, e.adobeVars)
                }, this)
            },
            __addBeaconToPage: function(e, t, n, i) {
                var r = 656781516e5 + Math.round(1e5 * Math.random()),
                    o = document.location.protocol + "//" + e + "/b/ss/" + t + "/1/" + n + "/s" + r + "?AQB=1";
                for (var s in i) o += "&" + s + "=" + encodeURIComponent(i[s]);
                o += "&AQE=1";
                var a = document.createElement("img");
                a.src = o, a.setAttribute("class", "AAImg"), a.setAttribute("style", "display:none"), a.setAttribute("height", "1"), a.setAttribute("width", "1"), document.body.appendChild(a)
            }
        })
    }), qrequire.define("core/window", [], function() {
        "use strict";
        return window
    }), qrequire.define("adapters/SpokeAdapter", ["dejavu", "bluebird", "adapters/AbstractAdapter", "adapters/AdapterInterface", "classes/page/PageTemplate", "utils", "load", "log", "jquery", "core/metrics", "core/pageErrorHandler", "core/UserAgent", "integrations/AdobeAnalytics/AdobeAnalyticsRenderer", "spokeLanding/bootstrapLanding", "core/window"], function(e, t, n, i, r, o, s, a, $, u, l, c, d, h, f) {
        "use strict";
        return e.Class.declare({
            $name: "SpokeAdapter",
            $implements: [i],
            $extends: n,
            _page: null,
            _formID: null,
            _sessionId: null,
            _cloneId: null,
            _formOptions: null,
            initialize: function() {
                var e = document.URL.match(/SV_[0-9,A-z]+/);
                null !== e && (this._formID = e[0]), e = document.URL.match(/Q_FormSessionID=(FS_[0-9,A-z]+)/), null !== e && (this._sessionId = e[1]), e = document.URL.match(/Q_CloneSession=(FS_[0-9,A-z]+)/), null !== e && (this._cloneId = e[1])
            },
            setFormOptions: function(e) {
                this._formOptions = e
            },
            setPage: function(e) {
                this._page = e
            }.$bound(),
            getFormOptions: function() {
                return this._formOptions
            },
            start: function(e) {
                var n = t.defer();
                return h.onComplete(function(e, t) {
                    e ? (t.FormOptions && (this._formOptions = t.FormOptions, delete t.FormOptions), n.resolve(new r(t))) : n.reject(t)
                }.$bind(this)), n.promise
            },
            saveProgress: function(e) {
                var n = u.startMultiTiming("saveProgressNetworkRequest"),
                    i = this.__getURLBasePath() + "/saveProgress";
                return t.resolve($.ajax({
                    url: i,
                    type: "POST",
                    data: JSON.stringify(e.serialize()),
                    contentType: "application/json",
                    dataType: "json",
                    async: !1
                })).lastly(function() {
                    u.endMultiTiming(n)
                })
            },
            handleError: function(e, t) {
                this.submitRealUserMetrics(), l.handle(this._page, e, t)
            }.$bound(),
            __getThemeURL: function() {
                return this._formOptions.ThemeURL || "https://unconfigured-spoke.qualtrics.com/WRQualtricsShared/"
            },
            getTransition: function() {
                return this._formOptions && this._formOptions.PageTransition || "None"
            },
            getSkinStylesBase: function() {
                return this._page.isMobilePreviewFrame() ? "../skinAssets/" : this.__getThemeURL() + "Skins/"
            },
            getStaticPath: function() {
                return qrequire.requirejs.config().toUrl("")
            },
            getSkinHTML: function() {
                return s(["Skin.html.js"]).spread(function(e) {
                    return e
                })
            },
            getRTLStylesPath: function() {
                return this.__getThemeURL() + "DefaultStyleSheets/RTL.css"
            },
            getGlobalMessages: function(e) {
                return e || t.reject(new Error("No language set.")), t.resolve("")
            },
            translate: function(e, n) {
                var i = u.startMultiTiming("translateNetworkRequest"),
                    o = this.__getURLBasePath() + "/translate/" + n;
                return t.resolve($.ajax({
                    url: o,
                    type: "POST",
                    data: JSON.stringify(e.serialize()),
                    contentType: "application/json",
                    dataType: "json"
                })).then(function(e) {
                    return new r(e)
                }.$bind(this)).lastly(function() {
                    u.endMultiTiming(i)
                })
            },
            getPageByDirection: function(e, n, i) {
                var o = u.startMultiTiming("navigationNetworkRequest");
                u.clearTiming("postNavigationRender");
                var s = parseInt(1e9 * Math.random()),
                    a = this.__getURLBasePath() + "/" + e;
                return i && "jump" === e && (a += "/" + i), a += "?rand=" + s, t.resolve($.ajax({
                    url: a,
                    type: "POST",
                    data: JSON.stringify(n.serialize()),
                    contentType: "application/json",
                    dataType: "json"
                })).then(function(e) {
                    return u.isCurrentlyRunning("postNavigationRender") || u.startTiming("postNavigationRender"), new r(e)
                }.$bind(this)).lastly(function() {
                    u.endMultiTiming(o)
                })
            },
            next: function(e) {
                return this.getPageByDirection("next", e)
            },
            jump: function(e, t) {
                return this.getPageByDirection("jump", e, t)
            },
            prev: function(e) {
                return this.getPageByDirection("previous", e)
            },
            evaluateInPageDisplayLogic: function(e) {
                var n = u.startMultiTiming("inPageDisplayLogic"),
                    i = this.__getURLBasePath() + "/evaluateInPageDisplayLogic";
                return t.resolve($.ajax({
                    url: i,
                    type: "POST",
                    data: JSON.stringify(e.serialize()),
                    contentType: "application/json",
                    dataType: "json"
                })).then(function(e) {
                    return e
                }).lastly(function() {
                    u.endMultiTiming(n)
                })
            },
            submitRealUserMetrics: function(e) {
                if (u.isCurrentlyRunning("postNavigationRender") && u.endTiming("postNavigationRender"), !u.isEmpty()) {
                    var t = u["export"](),
                        n = !1;
                    for (var i in t)
                        if (Object.keys(t[i]).length > 0) {
                            n = !0;
                            break
                        }
                    if (e && (t.meta = e), n) {
                        var r = this.__getURLBasePath() + "/../../metrics";
                        $.ajax({
                            url: r,
                            type: "POST",
                            data: JSON.stringify(t),
                            contentType: "application/json",
                            dataType: "json"
                        })
                    }
                }
            },
            allowsNetworkFunctionality: function() {
                return !0
            },
            checkForSessionChanges: function(e) {
                var n = this.__getURLBasePath() + "/checkForSessionChanges";
                return t.resolve($.ajax({
                    url: n,
                    type: "POST",
                    data: JSON.stringify(e.serialize()),
                    contentType: "application/json",
                    dataType: "json"
                })).then(function(e) {
                    return new r(e)
                }).caught(this.handleError)
            },
            isMobile: function() {
                return c.isMobile() || this._page.isMobilePreviewFrame()
            },
            renderAdobeAnalyticsBeacons: function(e) {
                var t = new d(e);
                t.addBeaconsToPage()
            },
            renderPDF: function(e) {
                $('<form action="../pdf" method="post">').append('<textarea name="page">').find("textarea").val(e).parent().appendTo("body").submit().remove()
            },
            isOffline: function() {
                return !1
            },
            __getURLBasePath: function() {
                var e = f.location.pathname,
                    t = this._page.getSM().dataCenterPath;
                return t && (e = e.replace(/^\/(jfe\d*\/)?/, "/" + t + "/")), e
            }
        })
    }), qrequire.define("spoke", ["classes/BrowserPage", "load", "adapters/SpokeAdapter"], function(e, t, n) {
        "use strict";
        return {
            start: function() {
                QSettings.preview ? t(["classes/PreviewPage", "adapters/PreviewAdapter"]).spread(function(e, t) {
                    this.__startPage(e, t)
                }.$bind(this)) : this.__startPage(e, n)
            },
            __startPage: function(e, t) {
                var n = window.Page = new e(new t);
                n.start()
            }
        }
    }), qrequire.define("EN.json", [], function() {
        return '{\n    "SurveyEngine": {\n      "PreviewForm": "Previewing Form",\n      "Username": "Username",\n      "Password": "Password",\n      "ProgressBarLabel": "Form Completion",\n      "CurrentProgress": "Current Progress",\n      "WillSaveMessage": "\\n\\t\\t\\t\\tYour response has been received and will be recorded.\\n\\t\\t\\t\\t<br />\\n\\t\\t\\t\\tPlease wait while we finish processing your response.\\n\\t\\t\\t",\n      "EndSurveyMessage": "\\n\\t\\t\\t\\tWe thank you for your time spent taking this form.\\n\\t\\t\\t\\t<br>\\n\\t\\t\\t\\tYour response has been recorded.\\n\\t\\t\\t",\n      "TocConclusionMessage": "\\n\\t\\t\\t\\tAre you ready to complete %1?\\n\\t\\t\\t",\n      "ClickHereForRedirect": "Click here if you are not automatically redirected.",\n      "SaveResponseMessages": "Preview Results <em>will not be displayed to the recipient</em>",\n      "RedirectMessage": "Please wait while you are redirected.",\n      "IgnoreValidation": "Ignore Validation",\n      "MoreOptions": "more options",\n      "ClickHereToStartOver": "Click Here to Start Over",\n      "Snapshot": "Snapshot",\n      "Restore": "Start From Bookmark",\n      "SaveTemplateResponse": "Save Answers for Future Previews",\n      "ClearTemplateResponse": "Clear Saved Answers",\n      "ClickHereToRefresh": "Click here to refresh",\n      "DoNotShowHidden": "Do Not Show Hidden Questions",\n      "ChangesHaveBeenMade": "Changes have been made to your form.",\n      "Total": "Total",\n      "PoweredByQualtrics": "This form was powered by Qualtrics",\n      "UseQualtricsForOwnForm": "Would you like to use Qualtrics to conduct <b>your own form?</b>",\n      "ClickHere": "Sign Up Free",\n      "Rank": "Rank the choices",\n      "Previous": "Previous",\n      "TableOfContents": "Table Of Contents",\n      "Next": "Next",\n      "AccessibleFormLink": "Activate an optimized version of the page designed specifically for Jaws version 11 and greater.",\n      "Email": "Email",\n      "LastName": "Last Name",\n      "FirstName": "First Name",\n      "CharsRemain": "Characters remaining",\n      "ResponseSummary": "Below is a summary of your responses",\n      "DownloadResponsesPDF": "Download PDF",\n      "Go": "Go",\n      "ErrorLoadingFile": "The file you have attempted to upload is too large.",\n      "UnansweredQuestion": "There is 1 unanswered question on this page",\n      "UnansweredQuestions": "There are %1 unanswered questions on this page",\n      "ContinueQuestion": "Would you like to continue?",\n      "AnswerQuestion": "Answer the Question",\n      "AnswerQuestions": "Answer the Questions",\n      "ContinueWithoutAnswering": "Continue Without Answering",\n      "Save": "Save",\n      "ProgressSaved": "Your progress has been saved.",\n      "RankOrderInstructions": "Please rank this from 1 to %1",\n      "CaptchaBackupQuestionText": "Enter only the letters in \\"h/u.m#a+n\\" into the field provided.",\n      "CaptchaBackupAnswer": "human",\n      "CaptchaUnavailableText": "Cannot connect to ReCaptcha. Please try again later.",\n      "CaptchaDuplicateText": "Only 1 Captcha question allowed per page",\n      "UnsupportedQuestion": "This question is not supported on your device.",\n      "WelcomeBack": "Welcome Back!",\n      "ResponseStarted": "\\n\\t\\t\\tYou began on <strong>%1</strong>.\\n\\t\\t\\t",\n      "Restart": "Restart",\n      "LocaleCode": "en_EN",\n      "Items": "Items"\n    },\n    "Language": {\n      "AR": "العربية",\n      "BG": "Български",\n      "BS": "bosanski",\n      "CA": "català",\n      "CS": "Čeština",\n      "CY": "Cymraeg",\n      "DA": "Dansk",\n      "DE": "Deutsch",\n      "EL": "Ελληνικά",\n      "EN": "English",\n      "EN-GB": "English - United Kingdom",\n      "EN_GB": "English - Great Britain",\n      "EO": "Esperanto",\n      "ES": "Español",\n      "ET": "Eesti",\n      "FA": "فارسی",\n      "FI": "Suomi",\n      "FR": "Français",\n      "GU": "ગુજરાતી ",\n      "HE": "עברית",\n      "HI": "हिन्दी",\n      "HR": "Hrvatski",\n      "HU": "Magyar",\n      "ID": "Bahasa Indonesia",\n      "IT": "Italiano",\n      "JA": "日本語",\n      "KM": "ភាសាខ្មែរ",\n      "KO": "한국어",\n      "LV": "Latviešu",\n      "LT": "Lietuviškai",\n      "MK": "Mакедонски",\n      "MN": "Монгол",\n      "MS": "Bahasa Melayu",\n      "MY": "မြန်မာဘာသာ",\n      "NL": "Nederlands",\n      "NO": "Norsk",\n      "PL": "Polski",\n      "PT": "Português",\n      "PT-BR": "Português Brasileiro",\n      "RO": "Română",\n      "RU": "Pyccĸий",\n      "SK": "Slovenčina",\n      "SL": "Slovenščina",\n      "SR": "Српски",\n      "SV": "Svenska",\n      "SW": "Kiswahili",\n      "TA": "தமிழ்",\n      "TH": "ภาษาไทย",\n      "TR": "Tϋrkçe",\n      "UK": "украї́нська мо́ва",\n      "UR": "اردو",\n      "VI": "tiếng Việt",\n      "ZH-S": "简体中文",\n      "ZH-T": "繁體中文"\n    },\n    "ValidationErrorCodes": {\n      "VE_FORCE_RESPONSE": "Please answer this question.",\n      "VE_FORCE_RESPONSE_PLURAL": "Please answer this question in its entirety.",\n      "VE_FORCE_RESPONSE_MORE": "Please answer all choices.",\n      "VE_FORCE_RESPONSE_OTHER": "Please fill in the text entry box.",\n      "VE_MIN_CHOICES": "Please answer at least %1 choice(s).",\n      "VE_MAX_CHOICES": "No more than %1 choice(s) may be answered.",\n      "VE_MAX_CHOICES_PGR": "Too many items",\n      "VE_MIN_CHOICES_MATRIX": "Please answer at least %1 column(s).",\n      "VE_MAX_CHOICES_MATRIX": "No more than %1 column(s) may be answered.",\n      "VE_INCORRECT_TOTAL": "Please total the choices to %1.",\n      "VE_TOO_MANY_CHARACTERS": "Please limit the response to %1 characters.",\n      "VE_TOO_MANY_CHARACTERS_PLURAL": "Please limit each response to %1 characters.",\n      "VE_TOO_FEW_CHARACTERS": "Your response must be at least %1 characters.",\n      "VE_TOO_FEW_CHARACTERS_PLURAL": "Each response must be at least %1 characters.",\n      "VE_NOT_CONSECUTIVE": "Please assign a value from 1 to %1 for each item.  Values may not be repeated.",\n      "VE_VALIDUSSTATE": "Please enter a valid US state name or abbreviation.",\n      "VE_VALIDEMAIL": "Please enter a valid email address.",\n      "VE_VALIDUSPHONE": "Please enter a valid US phone number XXX-XXX-XXXX.",\n      "VE_VALIDCAPHONE": "Please enter a valid Canadian phone number XXX-XXX-XXXX.",\n      "VE_VALIDUKPHONE": "Please enter a valid UK phone number. For example, 0XX XXXX XXXX or 0XXX XX XXXX",\n      "VE_VALIDUKZIP": "Please enter a valid UK Postal code.",\n      "VE_VALIDAUPHONE": "Please enter a valid AU phone number. 0X XXXX XXXX or 04XX XXX XXX",\n      "VE_VALIDNLPHONE": "Please enter a valid NL phone number.",\n      "VE_VALIDNZPHONE": "Please enter a valid NZ phone number.",\n      "VE_VALIDAUZIP": "Please enter a valid AU Postal code.",\n      "VE_VALIDNZZIP": "Please enter a valid NZ Postal code.",\n      "VE_VALIDNLZIP": "Please enter a valid NL Postal code.",\n      "VE_VALIDUSZIP": "Please enter a valid US Postal code.",\n      "VE_VALIDCAZIP": "Please enter a valid Canadian Postal code.",\n      "VE_VALIDDATE": "Please enter a valid date of the form: mm/dd/yyyy.",\n      "VE_VALIDALTDATE": "Please enter a valid date of the form: dd/mm/yyyy.",\n      "VE_VALIDINTLDATE": "Please enter a valid international date of the form: yyyy/mm/dd.",\n      "VE_VALIDNUMBER": "Please enter a valid number.",\n      "VE_VALIDTEXTONLY": "Please enter a valid textual response without numbers or punctuation.",\n      "VE_VALIDUSSTATE_PLURAL": "Please enter US state names or postal codes.",\n      "VE_VALIDEMAIL_PLURAL": "Please enter valid email addresses.",\n      "VE_VALIDUSPHONE_PLURAL": "Please enter valid US phone numbers XXX-XXX-XXXX.",\n      "VE_VALIDUSZIP_PLURAL": "Please enter valid US Postal codes.",\n      "VE_VALIDDATE_PLURAL": "Please enter valid dates of the form: mm/dd/yyyy.",\n      "VE_VALIDNUMBER_PLURAL": "Please enter valid numbers.",\n      "VE_VALIDTEXTONLY_PLURAL": "Please enter valid textual responses without numbers or punctuation.",\n      "VE_VALIDEXTENSIONS": "Please upload a file with one of the following extensions: %1",\n      "VE_VALIDPDF": "Please upload a valid PDF document.",\n      "VE_VALIDDOCUMENT": "Please upload a valid Document file (e.g. .doc, .docx, .odt)",\n      "VE_VALIDSPREADSHEET": "Please upload a valid Spreadsheet file (e.g. .csv, .xls, .ods)",\n      "VE_VALIDGRAPHIC": "Please upload a valid Graphic file (e.g. .png, .jpg, .gif)",\n      "VE_TEXT_ENTRY_HAS_VALUE_BUT_NOT_CHECKED": "You have entered a response into an unselected answer. Please select it or remove the response.",\n      "VE_SELECT_LEAST_MOST_PREFERRED": "Please select a least and most preferred for each feature.",\n      "VE_SELECT_LEAST_MOST_LEVEL": "Please select a level of preference for each feature.",\n      "VE_SELECT_MOST_VALUABLE_UPGRADE": "Please select which upgrade is most valuable.",\n      "VE_SELECT_VALUABLE_LEVEL": "Please select how valuable each upgrade is.",\n      "VE_IMPORTANCE_TOTAL": "Please sum the values to 100.",\n      "VE_MIN_GROUP_CHOICES": "Please assign at least %1 choice(s) to each group.",\n      "VE_MAX_GROUP_CHOICES": "No more than %1 choice(s) may be assigned to each group.",\n      "VE_VALIDNUMBER_MIN": "The value must be greater than or equal to %1.",\n      "VE_VALIDNUMBER_MAX": "The value must be less than or equal to %1.",\n      "VE_VALIDMIN_PLURAL": "Each value must be greater than or equal to %1.",\n      "VE_VALIDMAX_PLURAL": "Each value must be less than or equal to %1.",\n      "VE_VALIDNUMBER_NUM_DECIMALS": "The value cannot have more than %1 decimals.",\n      "VE_FORCE_OTHER_RESPONSE": "Please enter text into the selected text box.",\n      "VE_HEADER_VALIDATION_MESSAGE": "Sorry, you cannot continue until you correct the following:",\n      "VE_CUSTOM_VALIDATION_NO_MESSAGE": "Sorry, your response did not match the specified criteria for this question.",\n      "VE_QUESTION": "Question",\n      "VE_ERROR": "Issue",\n      "VE_INCORRECT_CAPTCHA_RESPONSE": "Sorry, your response was incorrect. Please try again.",\n      "VE_MULTIPLE_CHOICES": "You cannot choose more than one answer per choice."\n    }\n}\n'
    }), qrequire.define("core/messages", ["text!EN.json", "bluebird", "log", "load", "module", "utils"], function(e, t, n, i, r, o) {
        "use strict";

        function s(e) {
            return t.resolve().then(function() {
                if (e) {
                    var t = !0;
                    if (require.nodeRequire) {
                        var o = require.nodeRequire("fs"),
                            s = require.nodeRequire("path");
                        o.existsSync(s.resolve(r.uri + "/../../../../messages") + "/" + e + ".json") === !1 && (t = !1)
                    }
                    return t === !0 ? i(["text!../../messages/" + e + ".json"]).spread(JSON.parse).caught(function(e) {
                        return n.warn(e), !1
                    }) : !1
                }
                return !1
            })
        }

        function a(e, n, i) {
            return t.resolve().then(function() {
                if (e) return s(e).then(function(e) {
                    if (e && e[n] && e[n][i]) return e[n][i];
                    throw new Error("no message")
                }).caught(function(t) {
                    if ("EN" === e && p && p[n] && p[n][i]) return p[n][i];
                    throw t
                });
                throw new Error("no language")
            })
        }

        function u(e, t, n) {
            var i = "#" + e + "," + t + "#";
            if (n)
                for (var r = 0; r < n.length; ++r)("string" == typeof n[r] || "number" == typeof n[r]) && (i += "|" + n[r]);
            return i
        }

        function l(e, t) {
            if (t && t.length)
                for (var n = 0; n < t.length; ++n)("string" == typeof t[n] || "number" == typeof t[n]) && (e = e.replace("%" + (n + 1), t[n]));
            return e
        }

        function c(e, n, i) {
            var r = {},
                s = [];
            return o.each(Object.keys(e), function(e) {
                s.push(a(e, n, i).then(function(t) {
                    r[e] = t
                })["catch"](function() {
                    r[e] = null
                }))
            }), t.all(s).then(function() {
                return r
            })
        }

        function d(e, n, i, r) {
            r || (r = []), e || (e = {
                DefaultLanguage: "EN"
            });
            var o = e.CurrentLanguage,
                s = e.FallbackLanguage,
                c = e.DefaultLanguage,
                d = [];
            o && d.push(o), s && s !== o && d.push(s), c && c !== s && d.push(c), -1 == d.indexOf("EN") && d.push("EN");
            var h = d.reduce(function(e, t) {
                return e.then(function(e) {
                    return e
                }, function() {
                    return a(t, n, i)
                })
            }, t.reject());
            return h.then(function(e) {
                return l(e, r)
            }).caught(function() {
                return u(n, i, r)
            })
        }

        function h(e, n, i, r) {
            if (e && null !== e.getAssets()) {
                var o = e.getAssets().getDefaultMessageOverride(n, i, e.runtime.CurrentLanguage, e.runtime.FallbackLanguage, e.runtime.DefaultLanguage);
                if (null !== o) return t.resolve(l(o, r))
            }
            return d(e.getLanguages(), n, i, r)
        }

        function f(e, n, i) {
            var r = d(n, "JFEErrorCodes", e + "_Title", i),
                o = d(n, "JFEErrorCodes", e + "_Message", i);
            return t.all([r, o])
        }
        var p = null;
        try {
            p = JSON.parse(e)
        }
        catch (g) {}
        return {
            getMessage: d,
            getMessageWithForm: h,
            loadAllMessagesForLanguage: s,
            getAllLanguagesForMessage: c,
            addPipedVars: l,
            getErrorMessage: f,
            defaultLanguage: "EN"
        }
    }), qrequire.define("classes/validations/PreValidation", ["bluebird", "dejavu", "core/messages", "log", "utils"], function(e, t, n, i, r) {
        "use strict";
        return t.Class.declare({
            $name: "PreValidation",
            _addMsg: !1,
            _force: !1,
            forceMin: null,
            forceMax: null,
            _categoryOverride: null,
            _keyOverride: null,
            _pipeVars: null,
            __request: !1,
            initialize: function(e) {
                e && e.Settings && ("ON" === e.Settings.ForceResponse ? (this._force = !0, parseInt(e.Settings.ForceResponseRangeMin) >= 0 && (this.forceMin = parseInt(e.Settings.ForceResponseRangeMin)), parseInt(e.Settings.ForceResponseRangeMax) >= 0 && (this.forceMax = parseInt(e.Settings.ForceResponseRangeMax))) : "RequestResponse" === e.Settings.ForceResponse && (this.__request = !0))
            },
            setMessageOverride: function(e, t, n) {
                this._categoryOverride = e, this._keyOverride = t, this._pipeVars = n
            },
            _highlightTarget: function(e, t) {
                e && e.highlight && e.highlight(t)
            },
            _passedValidation: function(e) {
                return this._highlightTarget(e, !1), !0
            },
            __failedRequestResponse: function(e) {
                return this._highlightTarget(e, !0), 1
            },
            __failedForceResponse: function(t, r) {
                var o = "ValidationErrorCodes",
                    s = "VE_FORCE_RESPONSE",
                    a = null;
                return this._categoryOverride && this._keyOverride && (o = this._categoryOverride, s = this._keyOverride, a = this._pipeVars), this._highlightTarget(r, !0), this._addMsg && r && r.runtime && t ? n.getMessageWithForm(t, o, s, a).then(function(e) {
                    return r.setError(e), 0
                }).caught(function(e) {
                    return i.error("Cannot load messages", e), 0
                }) : e.resolve(0)
            },
            _checkCommonValidation: function(t, n, i, r, o) {
                return this.targetWasDisplayed(t) && (this._force || t.hasResponse()) ? this._passesForceResponse(t) ? {
                    promiseReturned: !1,
                    promise: null
                } : (this._highlightTarget(t, !0), {
                    promiseReturned: !0,
                    promise: this._handleForceResponseFailure(t, n, i, r, o)
                }) : (this._highlightTarget(t, !1), {
                    promiseReturned: !0,
                    promise: e.resolve(!0)
                })
            },
            _passesForceResponse: function(e) {
                return this._force && e ? e.shouldDisplay && !e.shouldDisplay() ? !0 : e.implementsForceResponse && e.implementsForceResponse(this) ? e.passesForceResponse(this) : e.hasCompleteResponse ? e.hasCompleteResponse() : e.hasResponse() : !0
            },
            _passesRequestResponse: function(e) {
                return this.__request && e ? e.hasCompleteResponse ? e.hasCompleteResponse() : e.hasResponse() : !0
            },
            _handleForceResponseFailure: function(e, t, i, r, o) {
                return this._categoryOverride && this._keyOverride && (i = this._categoryOverride, r = this._keyOverride, o = this._pipeVars), n.getMessageWithForm(t, i, r, o).then(function(t) {
                    return e.setError(t), !1
                })
            },
            evaluate: function(t, n, i) {
                return new e(function(e) {
                    return this.targetWasDisplayed(t) ? r.get(i, "requestResponseOverride") === !0 || this._passesRequestResponse(t) ? this._passesForceResponse(t) ? void e(this._passedValidation(t)) : e(this.__failedForceResponse(n, t)) : e(this.__failedRequestResponse(t)) : e(this._passedValidation(t))
                }.$bind(this))
            },
            _evaluateResponse: function(e, t) {
                return "string" == typeof e ? t(e) ? !0 : !1 : "object" == typeof e ? this._evaluateObjectValidation(e, t) : !1
            },
            _evaluateObjectValidation: function(e, t) {
                var n = !0;
                return r.each(e, function(e, i) {
                    "string" == typeof e ? "TEXT" === i || "Text" === i || t(e) || (n = !1) : n = "object" == typeof e ? n && this._evaluateObjectValidation(e, t) : !1
                }.bind(this)), n
            },
            targetWasDisplayed: function(e) {
                return e ? e.displayed && !e.displayed() ? (this._highlightTarget(e, !1), !1) : !0 : !1
            }
        }, !0)
    }), qrequire.define("renderers/BaseQuestionRenderer", ["log", "bluebird", "dejavu", "classes/validations/PreValidation", "classes/Events", "utils"], function(e, t, n, i, r, o) {
        "use strict";
        return n.AbstractClass.declare({
            $name: "BaseQuestionRenderer",
            $extends: r,
            _id: null,
            _page: null,
            _preValidation: null,
            runtime: {},
            initialize: function(e) {
                this.runtime = e, this._id = e.ID, this._preValidation = new i(e.PreValidation), this.on("prerender", this.__mixinExistingChoices.$bind(this)), this.on("ready", this._ready.$bind(this))
            },
            setRuntime: function(e) {
                this.runtime = e
            },
            _ready: function() {},
            __mixinExistingChoices: function() {
                o.isEmpty(this.runtime.ExistingChoices) || this._mixinExistingChoices()
            },
            _mixinExistingChoices: function() {},
            hasInPageDisplayLogic: function() {
                return this.runtime.HasInPageDisplayLogic
            },
            hasErrorMessage: function() {
                return !!o.get(this.runtime, "ErrorMsg")
            },
            getTop: function() {
                return 0
            },
            getHeight: function() {
                return 0
            },
            hide: function() {
                this.runtime.Displayed = !1, this._trigger("marknotdisplayed")
            }.$bound(),
            show: function() {
                this.runtime.Displayed = !0, this._trigger("markdisplayed")
            }.$bound(),
            hidden: function() {
                return this.runtime.Displayed === !1
            },
            displayed: function() {
                return this.runtime.Displayed === !0
            },
            prerender: function() {
                this._trigger("prerender")
            }.$bound(),
            postrender: function() {
                this._trigger("postrender")
            }.$bound(),
            update: function() {
                this._trigger("update")
            },
            setPage: function(e) {
                this._page = e
            }.$bound(),
            hasCompleteResponse: function() {
                return this.hasResponse()
            },
            showHiddenQuestion: function() {},
            setChoiceAnswerValue: function() {
                return !1
            },
            $abstracts: {
                hasResponse: function() {}
            },
            $finals: {
                isValid: function() {
                    return !!this.runtime.Valid
                },
                setValid: function(e) {
                    void 0 === e && (e = !0), this.runtime.Valid = !!e
                },
                setError: function(e) {
                    this.runtime.ErrorMsg = e
                },
                hasError: function() {
                    return null !== this.runtime.ErrorMsg && "" !== this.runtime.ErrorMsg
                },
                type: function() {
                    return "" + (this.runtime.Type || "") + (this.runtime.Selector || "") + (this.runtime.SubSelector || "")
                },
                get: function(e) {
                    return void 0 === this.runtime && (this.runtime = {}), o.get(this.runtime, e)
                },
                set: function(e, t) {
                    o.set(this.runtime, e, t)
                },
                getMessage: function(n, i) {
                    return e.trace("Tried to get a message renderer side"), t.resolve("#" + n + " " + i + "#")
                },
                setActive: function(e) {
                    this.runtime.Active = e
                },
                isActive: function() {
                    return this.runtime.Active
                },
                serialize: function() {
                    return this.runtime
                }.$bound(),
                deserialize: function(e) {
                    this.runtime = o.deepClone(e)
                }.$bound(),
                getPage: function() {
                    return this._page
                }.$bound()
            }
        })
    }), qrequire.define("templates/html/questions/BaseQuestion.html", [], function() {
        return '<div id="{{= Q.runtime.ID }}Separator" class="Separator" data-runtime-if="runtime.SeparatorDisplayed"></div>\n<div class="QuestionOuter BorderColor{{? Q.runtime.TypeOverride }} {{= Q.runtime.TypeOverride }}{{?? Q.runtime.Type }} {{= Q.runtime.Type }}{{?}} {{? Q.runtime.MobileFirst}}mf{{?}} {{= Q.runtime.ID }}{{? Q.isDisabled()}} AddedQuestionOverlay ResponseSummaryQuestion has-overlay{{?}}" id="{{= Q.runtime.ID }}" questionid="{{= Q.runtime.ID }}" posttag="{{= Q.runtime.ID }}"\n     data-runtime-class-capitalize-highlight="runtime.Highlight" data-runtime-remove-class-hidden="runtime.Displayed">\n	  <div class="ValidationError" data-runtime-html="runtime.ErrorMsg" data-runtime-show="runtime.ErrorMsg"></div>\n	  <div class="Inner BorderColor{{? Q.runtime.Selector }} {{= Q.runtime.Selector }}{{?}}">\n	    <div class="InnerInner BorderColor{{? Q.runtime.SubSelector }} {{= Q.runtime.SubSelector }}{{?}}">\n	      <fieldset>\n	        {template}\n	      </fieldset>\n	    </div>\n	  </div>\n    {{? Q.isDisabled()}}\n		<div class="QuestionOverlay"></div>\n    {{?}}\n</div>\n'
    }), qrequire.define("renderers/html/questions/BaseQuestionRendererHTML", ["log", "bluebird", "dejavu", "load", "utils", "doT", "jquery", "renderers/BaseQuestionRenderer", "text!templates/html/questions/BaseQuestion.html", "classes/questions/hierarchy", "Qualtrics"], function(e, t, n, i, r, o, $, s, a, u, l) {
        "use strict";
        return n.AbstractClass.declare({
            $name: "BaseQuestionRendererHTML",
            $extends: s,
            _template: null,
            _templateName: "",
            _partialTemplates: null,
            _templatePromise: null,
            _tplFn: null,
            _$el: null,
            _$separator: null,
            _madeLabelsUniformHeight: !1,
            _imagesLoaded: !1,
            boundView: null,
            boundSeparator: null,
            config: {},
            runtime: {},
            __disabled: !1,
            initialize: function(t) {
                this.$super(t), this.on("all", function(t) {
                    e.updateState(this.id() + " " + this.$name, t)
                }.$bind(this)), this.on("prerender", this._setQuestionInfo, this), this.on("postrender", function(e, t) {
                    this._$el = e, this._$separator = t
                }.$bind(this)), this.on("postrender", this.__addCustomJS, this), this.on("bind", this.__watchInputFocus), this.on("unbind", this.__unwatchInputFocus)
            },
            setPage: function(e) {
                this.$super(e), this.on("render", function() {
                    this.getPage().once("ready:imagesLoaded", function() {
                        this._imagesLoaded = !0, this.makeLablesUniformHeight()
                    }.$bind(this), this), this.on("markdisplayed", function() {
                        this._madeLabelsUniformHeight && (this.makeLablesUniformHeight(), this._madeLabelsUniformHeight = !1)
                    }.$bind(this))
                }.$bind(this))
            },
            getTop: function() {
                return r.get(this._$el && this._$el.offset(), "top") || 0
            },
            getHeight: function() {
                return this._$el.outerHeight()
            },
            getTemplateName: function() {
                var e, t = this.runtime.Type,
                    n = this.runtime.Selector,
                    i = this.runtime.SubSelector,
                    r = t + n + (i || ""),
                    o = this.getTemplateVariant();
                if (e = u.getImplementedItem(r, u.flags.HTMLTemplate, o), !e) throw new Error("Could not find template for " + r);
                return this._templateName = e, e
            },
            getTemplateVariant: function() {
                return this.runtime.MobileFirst === !0 ? "mobile" : null
            },
            getScoringTemplate: function() {
                return "scoring/BaseQuestion"
            },
            getPartials: function() {
                return null
            },
            __processPartials: function(e) {
                var t = {};
                for (var n in e)
                    if (-1 !== n.indexOf(":")) {
                        var i = n.split(":", 2);
                        t[i[0]] = {
                            arg: i[1],
                            text: e[n]
                        }
                    }
                    else t[n] = e[n];
                return t
            },
            resetErrors: function() {
                this.runtime.ErrorMsg = null, this.runtime.Highlight = !1
            },
            prevalidate: function(t) {
                return this._preValidation ? this._preValidation.evaluate(this, void 0, t) : (e.error("EJFE038", "Question Missing default validation for prevalidation.", "error"), !0)
            },
            getElement: function() {
                return this._$el
            },
            __addCustomJS: function() {
                if ("undefined" != typeof window && this._$el && this.runtime.CustomJS && l) {
                    var t = $("<deferredscript style='display:none'>");
                    try {
                        t.text("window.Q_CustomJSContextQID = " + JSON.stringify(this.id()) + ";\n" + this.runtime.CustomJS + ";delete window.Q_CustomJSContextQID;"), this._$el.prepend(t)
                    }
                    catch (n) {
                        e.error("Error running custom JS on " + this._id, this.runtime.CustomJS, n.stack || n)
                    }
                }
            },
            __watchInputFocus: function() {
                this._$el.find('input[type="radio"], input[type="checkbox"]').on("focus.qFocused", function() {
                    $('label[for="' + $(this).attr("id") + '"]').not(".offScreen").addClass("q-focused")
                }).on("blur.qFocused", function() {
                    $('label[for="' + $(this).attr("id") + '"]').removeClass("q-focused")
                })
            }.$bound(),
            __unwatchInputFocus: function() {
                this._$el.find('input[type="radio"], input[type="checkbox"]').off(".qFocused")
            }.$bound(),
            _shouldMakeLablesUniformHeight: function() {
                return !1
            }.$bound(),
            makeLablesUniformHeight: function() {
                if (this._shouldMakeLablesUniformHeight() && this._$el && this._imagesLoaded) {
                    this._madeLabelsUniformHeight = !0;
                    var e = 0,
                        t = this._$el.find("label.SingleAnswer, label.MultipleAnswer");
                    t.each(function(t, n) {
                        $(n).outerHeight() > e && (e = $(n).outerHeight())
                    }), t.each(function(t, n) {
                        var i = $(n),
                            r = e - i.outerHeight(),
                            o = r % 2;
                        r = parseInt(r / 2, 10);
                        var s = parseInt(i.css("padding-top"), 10) + r + o,
                            a = parseInt(i.css("padding-bottom"), 10) + r;
                        i.css("padding-top", s + "px").css("padding-bottom", a + "px")
                    })
                }
            }.$bound(),
            render: function() {
                return this._templatePromise && this._templateName === this.getTemplateName() || this.startLoadingTemplate(), this._templatePromise.then(function() {
                    return this._trigger("render"), this._tplFn = o.template(this._template, r.merge(o.templateSettings, {
                        varname: "Q"
                    }), this._partialTemplates), this._tplFn(this)
                }.$bind(this))
            }.$bound(),
            startLoadingTemplate: function() {
                var t = this.__processPartials(this.getPartials() || {}),
                    n = "text!templates/html/questions/" + this.getTemplateName() + ".html";
                this._templatePromise = i([n]).spread(function(e) {
                    e ? this._template = e : this._template = "", this.__combineBaseTemplate(t)
                }.$bind(this), function(t) {
                    e.error("Failed to load question template: ", t)
                })
            },
            __combineBaseTemplate: function(e) {
                this._template = a.replace("{template}", this._template),
                    this._partialTemplates = e
            },
            _getQuestionInfo: function() {
                var e = {};
                return e.QuestionID = this._id, e.postTag = this._id, e.QuestionType = this.runtime.Type, e.Selector = this.runtime.Selector, e.SubSelector = this.runtime.SubSelector, e.Validation = this.runtime.PreValidation, e.QuestionText = this.runtime.QuestionText, e.QuestionText && e.QuestionText.replace(/^<label class='ExportTag'>.*?<\/label> /, ""), e
            }.$bound(),
            hide: function() {
                this.$super(), this.setQuestionSeparator(!1), this.sync()
            }.$bound(),
            show: function() {
                this.$super(), this.setQuestionSeparator(!0), this.sync()
            }.$bound(),
            $finals: {
                id: function() {
                    return this._id
                },
                postrender: function(e, t) {
                    this._trigger("postrender", e, t)
                },
                bind: function(e) {
                    e && (this.boundView = e(this._$el, {
                        runtime: this.runtime
                    }), this.boundSeparator = e(this._$separator, {
                        runtime: this.runtime
                    })), this._trigger("bind")
                }.$bound(),
                unbind: function() {
                    this.boundView && (this.boundView.unbind(), this.boundView = null), this.boundSeparator && (this.boundSeparator.unbind(), this.boundSeparator = null), this._trigger("unbind")
                }.$bound(),
                setQuestionSeparator: function(e) {
                    this.runtime.SeparatorDisplayed = e && !this.runtime.NotRendered
                }.$bound(),
                _setQuestionInfo: function() {
                    var t = this._getQuestionInfo();
                    try {
                        l.SurveyEngine.QuestionInfo[this._id] = t
                    }
                    catch (n) {
                        e.warn("Failed to set question info", this._id)
                    }
                }.$bound(),
                highlight: function(e) {
                    void 0 === e ? this.runtime.Highlight = !0 : this.runtime.Highlight = e
                }.$bound(),
                sync: function() {
                    this.boundView && this.boundView.sync()
                }.$bound(),
                stripHTMLTags: function(e) {
                    return void 0 === e && (e = ""), $("<div/>").html(e).text()
                },
                responseChanged: function() {
                    return t.resolve().then(function() {
                        return this._trigger("responsechanged")
                    }.$bind(this))
                }.$bound(),
                disable: function() {
                    this.__disabled = !0
                },
                enable: function() {
                    this.__disabled = !1
                },
                isDisabled: function() {
                    return this.__disabled
                }
            }
        })
    }), qrequire.define("templates/html/questions/Choice.html", [], function() {
        return '<span class="LabelWrapper">\n  {{? choiceArgs.SA }}\n    <label for="QR~{{? Q.runtime.ID }}{{=Q.runtime.ID}}{{?}}~{{=choiceArgs.choiceId}}" class="SingleAnswer" data-runtime-class-q-checked="runtime.Choices.{{=choiceArgs.choiceId}}.Selected">\n  {{?? choiceArgs.MA }}\n    <label for="QR~{{? Q.runtime.ID }}{{=Q.runtime.ID}}{{?}}~{{=choiceArgs.choiceId}}" class="MultipleAnswer" data-runtime-class-q-checked="runtime.Choices.{{=choiceArgs.choiceId}}.Selected">\n  {{??}}\n    <label for="QR~{{? Q.runtime.ID }}{{=Q.runtime.ID}}{{?}}~{{=choiceArgs.choiceId}}">\n  {{?}}\n    {{ var choiceTextData = {\n        Image: choiceArgs.Q.runtime.Choices[choiceArgs.choiceId].Image,\n        Display: choiceArgs.Q.runtime.Choices[choiceArgs.choiceId].Display,\n        TextPosition: choiceArgs.Q.runtime.ChoiceTextPosition\n      };\n    }}\n    {{#def.ImageWithTextContent:choiceTextData}}\n</label>\n{{?choiceArgs.Q.runtime.Choices[choiceArgs.choiceId].TextEntry}}\n  {{?choiceArgs.Q.runtime.Choices[choiceArgs.choiceId].TextEntrySize == \'Large\' || choiceArgs.Q.runtime.Choices[choiceArgs.choiceId].TextEntrySize == \'Medium\'}}\n    <br /><textarea class="TextEntryBox TextEntry{{=choiceArgs.Q.runtime.Choices[choiceArgs.choiceId].TextEntrySize}} QR-{{? choiceArgs.Q.runtime.ID }}{{=choiceArgs.Q.runtime.ID }}{{?}}-{{=choiceArgs.choiceId }}-TEXT" id="QR~{{? choiceArgs.Q.runtime.ID }}{{=choiceArgs.Q.runtime.ID }}{{?}}~{{=choiceArgs.choiceId }}~TEXT" name="QR~{{? choiceArgs.Q.runtime.ID }}{{=choiceArgs.Q.runtime.ID }}{{?}}~{{=choiceArgs.choiceId }}~TEXT" data-runtime-textvalue="runtime.Choices.{{=choiceArgs.choiceId }}.Text" data-runtime-title="runtime.Choices.{{=choiceArgs.choiceId}}.Display" {{? Q.isDisabled()}}disabled="disabled"{{?}}></textarea>\n  {{??}}\n    <input class="TextEntryBox InputText QR-{{? choiceArgs.Q.runtime.ID }}{{=choiceArgs.Q.runtime.ID }}{{?}}-{{=choiceArgs.choiceId }}-TEXT" type="text" id="QR~{{? choiceArgs.Q.runtime.ID }}{{=choiceArgs.Q.runtime.ID }}{{?}}~{{=choiceArgs.choiceId }}~TEXT" name="QR~{{? choiceArgs.Q.runtime.ID }}{{=choiceArgs.Q.runtime.ID }}{{?}}~{{=choiceArgs.choiceId }}~TEXT" value="" {{?choiceArgs.Q.runtime.Choices[choiceArgs.choiceId].InputWidth}}style="width:{{=choiceArgs.Q.runtime.Choices[choiceArgs.choiceId].InputWidth}}px"{{?}} data-runtime-textvalue="runtime.Choices.{{=choiceArgs.choiceId }}.Text" data-runtime-title="runtime.Choices.{{=choiceArgs.choiceId}}.Display" {{? Q.isDisabled()}}disabled="disabled"{{?}}>\n  {{?}}\n  <div class="ValidationDiv{{? choiceArgs.Q.runtime.Type }} {{=choiceArgs.Q.runtime.Type }}{{?}}">\n      <span class="ValidationError Sub{{? choiceArgs.Q.runtime.Type }} {{=choiceArgs.Q.runtime.Type }}{{?}}"  data-runtime-html="runtime.Choices.{{=choiceArgs.choiceId}}.ErrorMsg" data-runtime-show="runtime.Choices.{{=choiceArgs.choiceId}}.ErrorMsg"></span>\n  </div>\n{{?}}\n</span>'
    }), qrequire.define("templates/html/questions/ImageContent.html", [], function() {
        return '{{? image.ExpandedImageLocation }}\n  <a class="expandedImageAnchor" data-fancybox-type="image" href="{{!image.ExpandedImageLocation}}"><img src="{{!image.ImageLocation}}" alt="{{!image.Display}}"></a>\n{{??}}\n  <img src="{{!image.ImageLocation}}" alt="{{!image.Display}}">\n{{?}}'
    }), qrequire.define("templates/html/questions/ImageWithTextContent.html", [], function() {
        return "{{? imageAndTextData.Image }}\n  {{? imageAndTextData.TextPosition === 'Bottom' || imageAndTextData.TextPosition === 'Right' }}\n    {{ var image = imageAndTextData.Image; }}\n    {{#def.ImageContent:image}}\n  {{?}}\n  {{? imageAndTextData.TextPosition === 'Bottom' }}<br>{{?}}\n{{?}}\n<span>{{=imageAndTextData.Display}}</span>\n{{? imageAndTextData.Image }}\n  {{? imageAndTextData.TextPosition === 'Top' }}<br>{{?}}\n  {{? imageAndTextData.TextPosition === 'Top' || imageAndTextData.TextPosition === 'Left' }}\n    {{ var image = imageAndTextData.Image; }}\n    {{#def.ImageContent:image}}\n  {{?}}\n{{?}}"
    }), qrequire.define("renderers/html/questions/ChoiceBasedQuestionRendererHTML", ["renderers/html/questions/BaseQuestionRendererHTML", "log", "utils", "dejavu", "text!templates/html/questions/Choice.html", "text!templates/html/questions/ImageContent.html", "text!templates/html/questions/ImageWithTextContent.html"], function(e, t, n, i, r, o, s) {
        "use strict";
        return i.AbstractClass.declare({
            $name: "ChoiceBasedQuestionRendererHTML",
            $extends: e,
            _enableThumbnails: !1,
            initialize: function(e) {
                this.$super(e), this.on("markdisplayed", this.__setChoicesAsDisplayed, this), this.on("marknotdisplayed", this.__setAllChoicesAsNotDisplayed, this), this.on("prerender", this._watchSelected, this), this.on("prerender", this._watchChoices, this), this.on("bind", this._enableThumbnailsOnPage, this), this.on("unbind", this._removeDelayTimers, this)
            },
            __setChoicesAsDisplayed: function() {
                n.each(this.runtime.ChoiceOrder, function(e) {
                    this.runtime.Choices[e].Displayed = !0
                }, this)
            },
            __setAllChoicesAsNotDisplayed: function() {
                n.each(this.runtime.Choices, function(e) {
                    e.Displayed = !1
                })
            },
            _watchSelected: function() {},
            _watchChoices: function() {},
            _removeDelayTimers: function() {
                if (this._timers)
                    for (var e in this._timers) {
                        var t = this._timers[e];
                        t.unbind(), delete this._timers[e]
                    }
            },
            _mixinExistingChoices: function() {
                n.each(this.runtime.Choices, function(e, t) {
                    n.deepMixIn(e, this.runtime.ExistingChoices[t])
                }.$bind(this))
            },
            _getQuestionInfo: function() {
                var e = this.$super();
                return e.Choices = {}, n.each(this.runtime.ChoiceOrder, function(t) {
                    var n = this.runtime.Choices[t];
                    e.Choices[t] = {}, e.Choices[t].RecodeValue = n.RecodeValue, e.Choices[t].VariableName = n.VariableName, e.Choices[t].Text = n.Display, e.Choices[t].Exclusive = n.Exclusive, n.Validation && (e.Choices[t].Validation = n.Validation), n.Image && n.Image.ExpandedImageLocation && (this._enableThumbnails = !0)
                }, this), e
            }.$bound(),
            hasResponse: function() {
                var e = !1;
                return 0 === this.runtime.ChoiceOrder.length ? e = !0 : n.each(this.runtime.Choices, function(t) {
                    t.Selected && t.Displayed && (e = !0)
                }), e
            },
            _enableThumbnailsOnPage: function() {
                this._enableThumbnails && this._page && this._page.enableThumbnails()
            },
            getPartials: function() {
                return {
                    "Choice:choiceArgs": r,
                    "ImageContent:image": o,
                    "ImageWithTextContent:imageAndTextData": s
                }
            },
            getScoringTemplate: function() {
                return "scoring/ChoiceBasedQuestion"
            }
        })
    }), qrequire.define("renderers/html/questions/MCRendererHTML", ["renderers/html/questions/ChoiceBasedQuestionRendererHTML", "utils", "watch", "dejavu"], function(e, t, n, i) {
        "use strict";
        return i.Class.declare({
            $name: "MCRendererHTML",
            $extends: e,
            initialize: function(e) {
                this.$super(e)
            },
            _watchSelected: function() {
                t.each(this.runtime.Choices, function(e, t) {
                    e.TextEntry && n.watch(e, "Text", function(e, n, i) {
                        i && "" !== i && (this.runtime.Choices[t].Selected = !0)
                    }.$bind(this))
                }.$bind(this))
            }
        })
    }), qrequire.define("renderers/html/questions/MCSARendererHTML", ["log", "watch", "utils", "dejavu", "renderers/html/questions/MCRendererHTML"], function(e, t, n, i, r) {
        "use strict";
        return i.Class.declare({
            $name: "MCSARendererHTML",
            $extends: r,
            initialize: function(e) {
                this.$super(e)
            },
            selectChoice: function(e, t, i) {
                i ? (n.each(this.runtime.Choices, function(e, t) {
                    e.Selected = t == i
                }, this), this.responseChanged()) : n.each(this.runtime.Choices, function(e, t) {
                    e.Selected = !1
                }, this)
            }.$bound(),
            _watchSelected: function() {
                n.each(this.runtime.Choices, function(e, n) {
                    e.TextEntry && t.watch(e, "Text", function(e, t, i) {
                        i && "" !== i && (this.runtime.Selected = n)
                    }.$bind(this))
                }.$bind(this)), t.watch(this.runtime, "Selected", this.selectChoice)
            }.$bound(),
            _mixinExistingChoices: function() {
                this.$super();
                var t = 0,
                    n = null,
                    i = null;
                for (i in this.runtime.ExistingChoices) t++, n = this.runtime.ExistingChoices[i];
                t > 1 && this.runtime.Valid ? e.error("Multiple existing choices on a single answer question", this.id()) : n && this.runtime.Choices[i] && (this.runtime.Selected = "" + i)
            }.$bound(),
            _shouldMakeLablesUniformHeight: function() {
                return "SACOL" == this.runtime.Selector || "SAHR" == this.runtime.Selector ? !0 : !1
            },
            setChoiceAnswerValue: function(e, t, n) {
                return this.runtime.Choices[e] ? (this.runtime.Selected = n ? e : !1, !0) : !1
            }
        })
    }), qrequire.define("templates/html/questions/MCSAVRTX.html", [], function() {
        return '<!-- BEGIN PARTIALS -->\n<!-- Partial for defining the ControlContainerContent -->\n{{##def.ControlContainerContent:\n<input choiceid="{{=choiceId }}" class="radio QR-{{? Q.runtime.ID }}{{=Q.runtime.ID }}{{?}}-{{=choiceId }}" type="radio" name="QR~{{? Q.runtime.ID }}{{=Q.runtime.ID }}{{?}}" id="QR~{{? Q.runtime.ID }}{{=Q.runtime.ID }}{{?}}~{{=choiceId }}" value="{{=choiceId }}" data-runtime-checked="runtime.Selected" {{? Q.isDisabled()}}disabled="disabled"{{?}}>\n<label for="QR~{{? Q.runtime.ID }}{{=Q.runtime.ID}}{{?}}~{{=choiceId}}" class="q-radio" data-runtime-class-q-checked="runtime.Choices.{{=choiceId}}.Selected"></label>\n#}}\n\n<!-- END PARTIALS -->\n\n<h2 class="noStyle">\n<div class="QuestionText BorderColor">{{=Q.runtime.QuestionText}}</div>\n</h2>\n<div class="QuestionBody">\n  <!-- Begin Choices w/o choice groups -->\n  <ul class="ChoiceStructure">\n    {{? Q.runtime.ChoiceGroups }}\n      {{ var choiceIndex = 0, choiceId;}}\n      {{~ Q.runtime.ChoiceGroupOrder :choiceGroupID:index }}\n        {{? Q.runtime.ChoiceGroups[choiceGroupID]}}\n          {{? !Q.runtime.ChoiceGroups[choiceGroupID].Options.HideTitle }}\n          <li class="ChoiceGroup">\n              <span data-runtime-html="runtime.ChoiceGroups.{{=choiceGroupID}}.GroupLabel"></span>\n          </li>\n          <ul class="ChoiceGroupStructure">\n          {{?}}\n              {{~ Q.runtime.ChoiceGroups[choiceGroupID].ChoiceGroupOrder :choiceId:idx }}\n                {{ var rowClass = (choiceIndex%2) === 0 ? \'reg\' : \'alt\'; }}\n                {{ choiceIndex++; }}\n                <li class="Selection {{=rowClass}}">\n                    {{#def.ControlContainerContent}}\n                    {{var choiceArgs = {"Q":Q, "choiceId":choiceId, "SA":true}; }}\n                    {{#def.Choice:choiceArgs}}\n                    <div class="clear"></div>\n                </li>\n              {{~}}\n\n          {{? !Q.runtime.ChoiceGroups[choiceGroupID].Options.HideTitle }}\n          </ul>\n          {{?}}\n        {{??}}\n          {{ var rowClass = (choiceIndex%2) === 0 ? \'reg\' : \'alt\'; }}\n          {{ choiceIndex++; }}\n          <li class="Selection {{=rowClass}}">\n              {{choiceId = choiceGroupID;}}\n              {{#def.ControlContainerContent}}\n              {{var choiceArgs = {"Q":Q, "choiceId":choiceGroupID, "SA":true}; }}\n              {{#def.Choice:choiceArgs}}\n              <div class="clear"></div>\n          </li>\n        {{?}}\n      {{~}}\n    {{??}}\n      {{~ Q.runtime.ChoiceOrder :choiceId:index }}\n      {{ var rowClass = (index%2) === 0 ? \'reg\' : \'alt\'; }}\n      <li class="Selection {{=rowClass}}">\n          {{#def.ControlContainerContent}}\n          {{var choiceArgs = {"Q":Q, "choiceId":choiceId, "SA":true}; }}\n          {{#def.Choice:choiceArgs}}\n          <div class="clear"></div>\n      </li>\n      {{~}}\n    {{?}}\n  </ul>\n  <!-- End Choices w/o choice groups -->\n  <div class="clear zero">\n</div>\n</div>\n\n'
    }), qrequire.define("renderers/html/questions/DBRendererHTML", ["renderers/html/questions/BaseQuestionRendererHTML", "dejavu"], function(e, t) {
        "use strict";
        return t.Class.declare({
            $name: "DBRendererHTML",
            $extends: e,
            hasResponse: function() {
                return !0
            }
        })
    }), qrequire.define("templates/html/questions/DBTB.html", [], function() {
        return '<label class="QuestionText BorderColor">{{=Q.runtime.QuestionText}}</label>\n<div class="QuestionBody"></div>\n'
    }), qrequire.define("renderers/html/questions/TESARendererHTML", ["renderers/html/questions/BaseQuestionRendererHTML", "dejavu", "watch"], function(e, t, n) {
        "use strict";
        return t.Class.declare({
            $name: "TESARendererHTML",
            $extends: e,
            initialize: function(e) {
                this.$super(e), e.MaxChars && this.on("prerender", this._watchCharsRemaining, this)
            },
            _watchCharsRemaining: function() {
                n.watch(this.runtime, "Value", function(e, t, n) {
                    this.runtime.CharsRemaining = this.runtime.MaxChars - n.length
                }.$bind(this))
            },
            _mixinExistingChoices: function() {
                !this.runtime.Value && this.runtime.ExistingChoices && (this.runtime.Value = this.runtime.ExistingChoices)
            },
            hasResponse: function() {
                return !(!this.runtime.Value || "" === this.runtime.Value)
            },
            setChoiceAnswerValue: function(e, t, n) {
                return "TEXT" === e ? (this.runtime.Value = n, !0) : !1
            }
        })
    }), qrequire.define("templates/html/questions/TESL.html", [], function() {
        return '<h2 class="noStyle">\n<label for="QR~{{=Q.runtime.ID}}" class="QuestionText BorderColor">{{=Q.runtime.QuestionText}}</label>\n</h2>\n\n<div class="QuestionBody">\n  <div class="ChoiceStructure">\n\n        <input type="TEXT" autocomplete="off" id="QR~{{=Q.runtime.ID}}" value="" class="InputText QR-{{=Q.runtime.ID}}" name="QR~{{=Q.runtime.ID}}~TEXT" data-runtime-textvalue="runtime.Value"\n          {{? Q.runtime.InputWidth}}style="width: {{=Q.runtime.InputWidth}}px;"{{?}} {{? Q.runtime.MaxChars}}maxlength="{{=Q.runtime.MaxChars}}"{{?}} {{? Q.isDisabled()}}disabled="disabled"{{?}} >\n\n        </div>\n</div>\n'
    });
//# sourceMappingURL=spoke.js.map
qrequire.require(["core/metrics", "log"], function(t, e) {
    "use strict";
    t.startTiming("surveyInitialize");
    var i = 0,
        n = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function() {
        i++, this.__destinationPath = arguments[1], this.__xhrId = i, this.__destinationPath.match(/\/metrics$/) || t.inc("ajaxRequestsPerPage"), e.updateState("XHR Open (" + this.__xhrId + ")", this.__destinationPath), n.apply(this, arguments)
    };
    var s = XMLHttpRequest.prototype.send;
    XMLHttpRequest.prototype.send = function() {
        var t = this.onloadend,
            i = this;
        this.onloadend = function() {
            e.updateState("XHR Done (" + i.__xhrId + ")", i.__destinationPath), t && t.apply(this, arguments)
        }, s.apply(this, arguments)
    }, qrequire.require(["spoke"], function(t) {
        t.start()
    })
});
//# sourceMappingURL=bootstrapForm.js.map