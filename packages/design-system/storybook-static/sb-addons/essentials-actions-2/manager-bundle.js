try {
  var sr = Object.create;
  var Qe = Object.defineProperty;
  var lr = Object.getOwnPropertyDescriptor;
  var ur = Object.getOwnPropertyNames;
  var cr = Object.getPrototypeOf,
    pr = Object.prototype.hasOwnProperty;
  var Oe = (e, t) => () => (e && (t = e((e = 0))), t);
  var L = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
  var fr = (e, t, r, n) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let a of ur(t))
        !pr.call(e, a) &&
          a !== r &&
          Qe(e, a, {
            get: () => t[a],
            enumerable: !(n = lr(t, a)) || n.enumerable,
          });
    return e;
  };
  var dr = (e, t, r) => (
    (r = e != null ? sr(cr(e)) : {}),
    fr(
      t || !e || !e.__esModule
        ? Qe(r, "default", { value: e, enumerable: !0 })
        : r,
      e
    )
  );
  var m = Oe(() => {});
  var g = Oe(() => {});
  var b = Oe(() => {});
  var At = L((Tc, P) => {
    m();
    g();
    b();
    function Ie() {
      return (
        (P.exports = Ie =
          Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
        (P.exports.__esModule = !0),
        (P.exports.default = P.exports),
        Ie.apply(this, arguments)
      );
    }
    (P.exports = Ie),
      (P.exports.__esModule = !0),
      (P.exports.default = P.exports);
  });
  var xt = L((xc, te) => {
    m();
    g();
    b();
    function Kr(e) {
      if (e === void 0)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    (te.exports = Kr),
      (te.exports.__esModule = !0),
      (te.exports.default = te.exports);
  });
  var he = L((Ic, B) => {
    m();
    g();
    b();
    function Le(e, t) {
      return (
        (B.exports = Le =
          Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (n, a) {
                return (n.__proto__ = a), n;
              }),
        (B.exports.__esModule = !0),
        (B.exports.default = B.exports),
        Le(e, t)
      );
    }
    (B.exports = Le),
      (B.exports.__esModule = !0),
      (B.exports.default = B.exports);
  });
  var Ct = L((Pc, re) => {
    m();
    g();
    b();
    var Qr = he();
    function en(e, t) {
      (e.prototype = Object.create(t.prototype)),
        (e.prototype.constructor = e),
        Qr(e, t);
    }
    (re.exports = en),
      (re.exports.__esModule = !0),
      (re.exports.default = re.exports);
  });
  var wt = L((jc, F) => {
    m();
    g();
    b();
    function Me(e) {
      return (
        (F.exports = Me =
          Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (r) {
                return r.__proto__ || Object.getPrototypeOf(r);
              }),
        (F.exports.__esModule = !0),
        (F.exports.default = F.exports),
        Me(e)
      );
    }
    (F.exports = Me),
      (F.exports.__esModule = !0),
      (F.exports.default = F.exports);
  });
  var Nt = L((Gc, ne) => {
    m();
    g();
    b();
    function tn(e) {
      return Function.toString.call(e).indexOf("[native code]") !== -1;
    }
    (ne.exports = tn),
      (ne.exports.__esModule = !0),
      (ne.exports.default = ne.exports);
  });
  var It = L((Yc, ae) => {
    m();
    g();
    b();
    function rn() {
      if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
        return !1;
      if (typeof Proxy == "function") return !0;
      try {
        return (
          Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          ),
          !0
        );
      } catch {
        return !1;
      }
    }
    (ae.exports = rn),
      (ae.exports.__esModule = !0),
      (ae.exports.default = ae.exports);
  });
  var Lt = L((Zc, C) => {
    m();
    g();
    b();
    var nn = he(),
      an = It();
    function Ee(e, t, r) {
      return (
        an()
          ? ((C.exports = Ee = Reflect.construct.bind()),
            (C.exports.__esModule = !0),
            (C.exports.default = C.exports))
          : ((C.exports = Ee =
              function (a, i, l) {
                var s = [null];
                s.push.apply(s, i);
                var u = Function.bind.apply(a, s),
                  p = new u();
                return l && nn(p, l.prototype), p;
              }),
            (C.exports.__esModule = !0),
            (C.exports.default = C.exports)),
        Ee.apply(null, arguments)
      );
    }
    (C.exports = Ee),
      (C.exports.__esModule = !0),
      (C.exports.default = C.exports);
  });
  var Mt = L((tp, z) => {
    m();
    g();
    b();
    var on = wt(),
      sn = he(),
      ln = Nt(),
      un = Lt();
    function De(e) {
      var t = typeof Map == "function" ? new Map() : void 0;
      return (
        (z.exports = De =
          function (n) {
            if (n === null || !ln(n)) return n;
            if (typeof n != "function")
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            if (typeof t < "u") {
              if (t.has(n)) return t.get(n);
              t.set(n, a);
            }
            function a() {
              return un(n, arguments, on(this).constructor);
            }
            return (
              (a.prototype = Object.create(n.prototype, {
                constructor: {
                  value: a,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              sn(a, n)
            );
          }),
        (z.exports.__esModule = !0),
        (z.exports.default = z.exports),
        De(e)
      );
    }
    (z.exports = De),
      (z.exports.__esModule = !0),
      (z.exports.default = z.exports);
  });
  var Dt = L((op, oe) => {
    m();
    g();
    b();
    function cn(e, t) {
      return t || (t = e.slice(0)), (e.raw = t), e;
    }
    (oe.exports = cn),
      (oe.exports.__esModule = !0),
      (oe.exports.default = oe.exports);
  });
  var nr = L((c) => {
    "use strict";
    m();
    g();
    b();
    Object.defineProperty(c, "__esModule", { value: !0 });
    var pn = At(),
      fn = xt(),
      dn = Ct(),
      mn = Mt(),
      gn = Dt();
    function ue(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var T = ue(pn),
      bn = ue(fn),
      hn = ue(dn),
      En = ue(mn),
      qt = ue(gn);
    function Pt() {
      var e;
      return (
        (e = arguments.length - 1),
        e < 0 || arguments.length <= e ? void 0 : arguments[e]
      );
    }
    function yn(e) {
      return -e;
    }
    function vn(e, t) {
      return e + t;
    }
    function On(e, t) {
      return e - t;
    }
    function _n(e, t) {
      return e * t;
    }
    function Tn(e, t) {
      return e / t;
    }
    function Rn() {
      return Math.max.apply(Math, arguments);
    }
    function Sn() {
      return Math.min.apply(Math, arguments);
    }
    function An() {
      return Array.of.apply(Array, arguments);
    }
    var xn = {
        symbols: {
          "*": {
            infix: {
              symbol: "*",
              f: _n,
              notation: "infix",
              precedence: 4,
              rightToLeft: 0,
              argCount: 2,
            },
            symbol: "*",
            regSymbol: "\\*",
          },
          "/": {
            infix: {
              symbol: "/",
              f: Tn,
              notation: "infix",
              precedence: 4,
              rightToLeft: 0,
              argCount: 2,
            },
            symbol: "/",
            regSymbol: "/",
          },
          "+": {
            infix: {
              symbol: "+",
              f: vn,
              notation: "infix",
              precedence: 2,
              rightToLeft: 0,
              argCount: 2,
            },
            prefix: {
              symbol: "+",
              f: Pt,
              notation: "prefix",
              precedence: 3,
              rightToLeft: 0,
              argCount: 1,
            },
            symbol: "+",
            regSymbol: "\\+",
          },
          "-": {
            infix: {
              symbol: "-",
              f: On,
              notation: "infix",
              precedence: 2,
              rightToLeft: 0,
              argCount: 2,
            },
            prefix: {
              symbol: "-",
              f: yn,
              notation: "prefix",
              precedence: 3,
              rightToLeft: 0,
              argCount: 1,
            },
            symbol: "-",
            regSymbol: "-",
          },
          ",": {
            infix: {
              symbol: ",",
              f: An,
              notation: "infix",
              precedence: 1,
              rightToLeft: 0,
              argCount: 2,
            },
            symbol: ",",
            regSymbol: ",",
          },
          "(": {
            prefix: {
              symbol: "(",
              f: Pt,
              notation: "prefix",
              precedence: 0,
              rightToLeft: 0,
              argCount: 1,
            },
            symbol: "(",
            regSymbol: "\\(",
          },
          ")": {
            postfix: {
              symbol: ")",
              f: void 0,
              notation: "postfix",
              precedence: 0,
              rightToLeft: 0,
              argCount: 1,
            },
            symbol: ")",
            regSymbol: "\\)",
          },
          min: {
            func: {
              symbol: "min",
              f: Sn,
              notation: "func",
              precedence: 0,
              rightToLeft: 0,
              argCount: 1,
            },
            symbol: "min",
            regSymbol: "min\\b",
          },
          max: {
            func: {
              symbol: "max",
              f: Rn,
              notation: "func",
              precedence: 0,
              rightToLeft: 0,
              argCount: 1,
            },
            symbol: "max",
            regSymbol: "max\\b",
          },
        },
      },
      Bt = xn,
      f = (function (e) {
        hn.default(t, e);
        function t(r) {
          var n;
          if (!0)
            n =
              e.call(
                this,
                "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" +
                  r +
                  " for more information."
              ) || this;
          else for (var a, i, l; l < a; l++);
          return bn.default(n);
        }
        return t;
      })(En.default(Error)),
      Ft =
        /((?!\w)a|na|hc|mc|dg|me[r]?|xe|ni(?![a-zA-Z])|mm|cp|tp|xp|q(?!s)|hv|xamv|nimv|wv|sm|s(?!\D|$)|ged|darg?|nrut)/g;
    function Cn(e) {
      var t = {};
      return (
        (t.symbols = e
          ? T.default({}, Bt.symbols, e.symbols)
          : T.default({}, Bt.symbols)),
        t
      );
    }
    function zt(e, t) {
      var r,
        n = e.pop();
      return (
        t.push(n.f.apply(n, (r = []).concat.apply(r, t.splice(-n.argCount)))),
        n.precedence
      );
    }
    function wn(e, t) {
      var r = Cn(t),
        n,
        a = [r.symbols["("].prefix],
        i = [],
        l = new RegExp(
          "\\d+(?:\\.\\d+)?|" +
            Object.keys(r.symbols)
              .map(function (v) {
                return r.symbols[v];
              })
              .sort(function (v, N) {
                return N.symbol.length - v.symbol.length;
              })
              .map(function (v) {
                return v.regSymbol;
              })
              .join("|") +
            "|(\\S)",
          "g"
        );
      l.lastIndex = 0;
      var s = !1;
      do {
        n = l.exec(e);
        var u = n || [")", void 0],
          p = u[0],
          h = u[1],
          d = r.symbols[p],
          E = d && !d.prefix && !d.func,
          _ = !d || (!d.postfix && !d.infix);
        if (h || (s ? _ : E)) throw new f(37, n ? n.index : e.length, e);
        if (s) {
          var y = d.postfix || d.infix;
          do {
            var O = a[a.length - 1];
            if ((y.precedence - O.precedence || O.rightToLeft) > 0) break;
          } while (zt(a, i));
          (s = y.notation === "postfix"),
            y.symbol !== ")" && (a.push(y), s && zt(a, i));
        } else if (d) {
          if (
            (a.push(d.prefix || d.func),
            d.func && ((n = l.exec(e)), !n || n[0] !== "("))
          )
            throw new f(38, n ? n.index : e.length, e);
        } else i.push(+p), (s = !0);
      } while (n && a.length);
      if (a.length) throw new f(39, n ? n.index : e.length, e);
      if (n) throw new f(40, n ? n.index : e.length, e);
      return i.pop();
    }
    function Pe(e) {
      return e.split("").reverse().join("");
    }
    function Nn(e, t) {
      var r = Pe(e),
        n = r.match(Ft);
      if (
        n &&
        !n.every(function (i) {
          return i === n[0];
        })
      )
        throw new f(41);
      var a = Pe(r.replace(Ft, ""));
      return "" + wn(a, t) + (n ? Pe(n[0]) : "");
    }
    var In = /--[\S]*/g;
    function Ln(e, t) {
      if (!e || !e.match(In)) throw new f(73);
      var r;
      if (
        (typeof document < "u" &&
          document.documentElement !== null &&
          (r = getComputedStyle(document.documentElement).getPropertyValue(e)),
        r)
      )
        return r.trim();
      if (t) return t;
      throw new f(74);
    }
    function ie(e) {
      return e.charAt(0).toUpperCase() + e.slice(1);
    }
    var Mn = ["Top", "Right", "Bottom", "Left"];
    function Dn(e, t) {
      if (!e) return t.toLowerCase();
      var r = e.split("-");
      if (r.length > 1)
        return (
          r.splice(1, 0, t),
          r.reduce(function (a, i) {
            return "" + a + ie(i);
          })
        );
      var n = e.replace(/([a-z])([A-Z])/g, "$1" + t + "$2");
      return e === n ? "" + e + t : n;
    }
    function Pn(e, t) {
      for (var r = {}, n = 0; n < t.length; n += 1)
        (t[n] || t[n] === 0) && (r[Dn(e, Mn[n])] = t[n]);
      return r;
    }
    function k(e) {
      for (
        var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1;
        n < t;
        n++
      )
        r[n - 1] = arguments[n];
      var a = r[0],
        i = r[1],
        l = i === void 0 ? a : i,
        s = r[2],
        u = s === void 0 ? a : s,
        p = r[3],
        h = p === void 0 ? l : p,
        d = [a, l, u, h];
      return Pn(e, d);
    }
    function jt(e, t) {
      return e.substr(-t.length) === t;
    }
    var Bn = /^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;
    function je(e) {
      if (typeof e != "string") return e;
      var t = e.match(Bn);
      return t ? parseFloat(e) : e;
    }
    var Fn = function (t) {
        return function (r, n) {
          n === void 0 && (n = "16px");
          var a = r,
            i = n;
          if (typeof r == "string") {
            if (!jt(r, "px")) throw new f(69, t, r);
            a = je(r);
          }
          if (typeof n == "string") {
            if (!jt(n, "px")) throw new f(70, t, n);
            i = je(n);
          }
          if (typeof a == "string") throw new f(71, r, t);
          if (typeof i == "string") throw new f(72, n, t);
          return "" + a / i + t;
        };
      },
      Jt = Fn,
      zn = Jt("em"),
      jn = zn,
      Hn = /^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;
    function D(e) {
      if (typeof e != "string") return [e, ""];
      var t = e.match(Hn);
      return t ? [parseFloat(e), t[2]] : [e, void 0];
    }
    function Xt(e, t) {
      if (typeof e != "object" || e === null) throw new f(75, typeof e);
      var r = {};
      return (
        Object.keys(e).forEach(function (n) {
          typeof e[n] == "object" && e[n] !== null
            ? (r[n] = Xt(e[n], t))
            : !t || (t && (t === n || t.indexOf(n) >= 0))
            ? (r[n] = e[n] + " !important")
            : (r[n] = e[n]);
        }),
        r
      );
    }
    var Zt = {
      minorSecond: 1.067,
      majorSecond: 1.125,
      minorThird: 1.2,
      majorThird: 1.25,
      perfectFourth: 1.333,
      augFourth: 1.414,
      perfectFifth: 1.5,
      minorSixth: 1.6,
      goldenSection: 1.618,
      majorSixth: 1.667,
      minorSeventh: 1.778,
      majorSeventh: 1.875,
      octave: 2,
      majorTenth: 2.5,
      majorEleventh: 2.667,
      majorTwelfth: 3,
      doubleOctave: 4,
    };
    function Un(e) {
      return Zt[e];
    }
    function kn(e, t, r) {
      if (
        (t === void 0 && (t = "1em"),
        r === void 0 && (r = 1.333),
        typeof e != "number")
      )
        throw new f(42);
      if (typeof r == "string" && !Zt[r]) throw new f(43);
      var n = typeof t == "string" ? D(t) : [t, ""],
        a = n[0],
        i = n[1],
        l = typeof r == "string" ? Un(r) : r;
      if (typeof a == "string") throw new f(44, t);
      return "" + a * Math.pow(l, e) + (i || "");
    }
    var Gn = Jt("rem"),
      Vn = Gn,
      He = 16;
    function Kt(e) {
      var t = D(e);
      if (t[1] === "px") return parseFloat(e);
      if (t[1] === "%") return (parseFloat(e) / 100) * He;
      throw new f(78, t[1]);
    }
    function $n() {
      if (typeof document < "u" && document.documentElement !== null) {
        var e = getComputedStyle(document.documentElement).fontSize;
        return e ? Kt(e) : He;
      }
      return He;
    }
    function Wn(e, t) {
      var r = D(e);
      if (r[1] !== "rem" && r[1] !== "") throw new f(77, r[1]);
      var n = t ? Kt(t) : $n();
      return r[0] * n + "px";
    }
    var Yn = {
      back: "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
      circ: "cubic-bezier(0.600,  0.040, 0.980, 0.335)",
      cubic: "cubic-bezier(0.550,  0.055, 0.675, 0.190)",
      expo: "cubic-bezier(0.950,  0.050, 0.795, 0.035)",
      quad: "cubic-bezier(0.550,  0.085, 0.680, 0.530)",
      quart: "cubic-bezier(0.895,  0.030, 0.685, 0.220)",
      quint: "cubic-bezier(0.755,  0.050, 0.855, 0.060)",
      sine: "cubic-bezier(0.470,  0.000, 0.745, 0.715)",
    };
    function qn(e) {
      return Yn[e.toLowerCase().trim()];
    }
    var Jn = {
      back: "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
      circ: "cubic-bezier(0.785,  0.135, 0.150, 0.860)",
      cubic: "cubic-bezier(0.645,  0.045, 0.355, 1.000)",
      expo: "cubic-bezier(1.000,  0.000, 0.000, 1.000)",
      quad: "cubic-bezier(0.455,  0.030, 0.515, 0.955)",
      quart: "cubic-bezier(0.770,  0.000, 0.175, 1.000)",
      quint: "cubic-bezier(0.860,  0.000, 0.070, 1.000)",
      sine: "cubic-bezier(0.445,  0.050, 0.550, 0.950)",
    };
    function Xn(e) {
      return Jn[e.toLowerCase().trim()];
    }
    var Zn = {
      back: "cubic-bezier(0.175,  0.885, 0.320, 1.275)",
      cubic: "cubic-bezier(0.215,  0.610, 0.355, 1.000)",
      circ: "cubic-bezier(0.075,  0.820, 0.165, 1.000)",
      expo: "cubic-bezier(0.190,  1.000, 0.220, 1.000)",
      quad: "cubic-bezier(0.250,  0.460, 0.450, 0.940)",
      quart: "cubic-bezier(0.165,  0.840, 0.440, 1.000)",
      quint: "cubic-bezier(0.230,  1.000, 0.320, 1.000)",
      sine: "cubic-bezier(0.390,  0.575, 0.565, 1.000)",
    };
    function Kn(e) {
      return Zn[e.toLowerCase().trim()];
    }
    function Ue(e, t, r, n) {
      r === void 0 && (r = "320px"), n === void 0 && (n = "1200px");
      var a = D(e),
        i = a[0],
        l = a[1],
        s = D(t),
        u = s[0],
        p = s[1],
        h = D(r),
        d = h[0],
        E = h[1],
        _ = D(n),
        y = _[0],
        O = _[1];
      if (typeof d != "number" || typeof y != "number" || !E || !O || E !== O)
        throw new f(47);
      if (typeof i != "number" || typeof u != "number" || l !== p)
        throw new f(48);
      if (l !== E || p !== O) throw new f(76);
      var v = (i - u) / (d - y),
        N = u - v * y;
      return (
        "calc(" +
        N.toFixed(2) +
        (l || "") +
        " + " +
        (100 * v).toFixed(2) +
        "vw)"
      );
    }
    function Qn(e) {
      var t;
      e === void 0 && (e = "&");
      var r = e + "::after";
      return (
        (t = {}), (t[r] = { clear: "both", content: '""', display: "table" }), t
      );
    }
    function ea(e) {
      return (
        e === void 0 && (e = 0),
        { position: "absolute", top: e, right: e, bottom: e, left: e }
      );
    }
    function ta(e, t) {
      t === void 0 && (t = 1);
      var r = {
        display: "inline-block",
        maxWidth: e || "100%",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        wordWrap: "normal",
      };
      return t > 1
        ? T.default({}, r, {
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: t,
            display: "-webkit-box",
            whiteSpace: "normal",
          })
        : r;
    }
    function ra(e, t) {
      var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
      if (r) return (r = r.call(e)).next.bind(r);
      if (
        Array.isArray(e) ||
        (r = na(e)) ||
        (t && e && typeof e.length == "number")
      ) {
        r && (e = r);
        var n = 0;
        return function () {
          return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
        };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    function na(e, t) {
      if (e) {
        if (typeof e == "string") return Ht(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (
          (r === "Object" && e.constructor && (r = e.constructor.name),
          r === "Map" || r === "Set")
        )
          return Array.from(e);
        if (
          r === "Arguments" ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        )
          return Ht(e, t);
      }
    }
    function Ht(e, t) {
      (t == null || t > e.length) && (t = e.length);
      for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
      return n;
    }
    function aa(e, t, r) {
      if (
        (t === void 0 && (t = "320px"),
        r === void 0 && (r = "1200px"),
        (!Array.isArray(e) && typeof e != "object") || e === null)
      )
        throw new f(49);
      if (Array.isArray(e)) {
        for (var n = {}, a = {}, i = ra(e), l; !(l = i()).done; ) {
          var s,
            u,
            p = l.value;
          if (!p.prop || !p.fromSize || !p.toSize) throw new f(50);
          (a[p.prop] = p.fromSize),
            (n["@media (min-width: " + t + ")"] = T.default(
              {},
              n["@media (min-width: " + t + ")"],
              ((s = {}), (s[p.prop] = Ue(p.fromSize, p.toSize, t, r)), s)
            )),
            (n["@media (min-width: " + r + ")"] = T.default(
              {},
              n["@media (min-width: " + r + ")"],
              ((u = {}), (u[p.prop] = p.toSize), u)
            ));
        }
        return T.default({}, a, n);
      } else {
        var h, d, E;
        if (!e.prop || !e.fromSize || !e.toSize) throw new f(51);
        return (
          (E = {}),
          (E[e.prop] = e.fromSize),
          (E["@media (min-width: " + t + ")"] =
            ((h = {}), (h[e.prop] = Ue(e.fromSize, e.toSize, t, r)), h)),
          (E["@media (min-width: " + r + ")"] =
            ((d = {}), (d[e.prop] = e.toSize), d)),
          E
        );
      }
    }
    var oa =
        /^\s*data:([a-z]+\/[a-z-]+(;[a-z-]+=[a-z-]+)?)?(;charset=[a-z0-9-]+)?(;base64)?,[a-z0-9!$&',()*+,;=\-._~:@/?%\s]*\s*$/i,
      ia = {
        woff: "woff",
        woff2: "woff2",
        ttf: "truetype",
        otf: "opentype",
        eot: "embedded-opentype",
        svg: "svg",
        svgz: "svg",
      };
    function Ut(e, t) {
      return t ? ' format("' + ia[e] + '")' : "";
    }
    function sa(e) {
      return !!e.replace(/\s+/g, " ").match(oa);
    }
    function la(e, t, r) {
      if (sa(e)) return 'url("' + e + '")' + Ut(t[0], r);
      var n = t.map(function (a) {
        return 'url("' + e + "." + a + '")' + Ut(a, r);
      });
      return n.join(", ");
    }
    function ua(e) {
      var t = e.map(function (r) {
        return 'local("' + r + '")';
      });
      return t.join(", ");
    }
    function ca(e, t, r, n) {
      var a = [];
      return t && a.push(ua(t)), e && a.push(la(e, r, n)), a.join(", ");
    }
    function pa(e) {
      var t = e.fontFamily,
        r = e.fontFilePath,
        n = e.fontStretch,
        a = e.fontStyle,
        i = e.fontVariant,
        l = e.fontWeight,
        s = e.fileFormats,
        u = s === void 0 ? ["eot", "woff2", "woff", "ttf", "svg"] : s,
        p = e.formatHint,
        h = p === void 0 ? !1 : p,
        d = e.localFonts,
        E = d === void 0 ? [t] : d,
        _ = e.unicodeRange,
        y = e.fontDisplay,
        O = e.fontVariationSettings,
        v = e.fontFeatureSettings;
      if (!t) throw new f(55);
      if (!r && !E) throw new f(52);
      if (E && !Array.isArray(E)) throw new f(53);
      if (!Array.isArray(u)) throw new f(54);
      var N = {
        "@font-face": {
          fontFamily: t,
          src: ca(r, E, u, h),
          unicodeRange: _,
          fontStretch: n,
          fontStyle: a,
          fontVariant: i,
          fontWeight: l,
          fontDisplay: y,
          fontVariationSettings: O,
          fontFeatureSettings: v,
        },
      };
      return JSON.parse(JSON.stringify(N));
    }
    function fa() {
      return { textIndent: "101%", overflow: "hidden", whiteSpace: "nowrap" };
    }
    function da() {
      return {
        border: "0",
        clip: "rect(0 0 0 0)",
        height: "1px",
        margin: "-1px",
        overflow: "hidden",
        padding: "0",
        position: "absolute",
        whiteSpace: "nowrap",
        width: "1px",
      };
    }
    function Qt(e) {
      return (
        e === void 0 && (e = 1.3),
        `
    @media only screen and (-webkit-min-device-pixel-ratio: ` +
          e +
          `),
    only screen and (min--moz-device-pixel-ratio: ` +
          e +
          `),
    only screen and (-o-min-device-pixel-ratio: ` +
          e +
          `/1),
    only screen and (min-resolution: ` +
          Math.round(e * 96) +
          `dpi),
    only screen and (min-resolution: ` +
          e +
          `dppx)
  `
      );
    }
    function er(e) {
      for (
        var t = "",
          r = arguments.length,
          n = new Array(r > 1 ? r - 1 : 0),
          a = 1;
        a < r;
        a++
      )
        n[a - 1] = arguments[a];
      for (var i = 0; i < e.length; i += 1)
        if (((t += e[i]), i === n.length - 1 && n[i])) {
          var l = n.filter(function (s) {
            return !!s;
          });
          l.length > 1
            ? ((t = t.slice(0, -1)), (t += ", " + n[i]))
            : l.length === 1 && (t += "" + n[i]);
        } else n[i] && (t += n[i] + " ");
      return t.trim();
    }
    var kt;
    function ma(e) {
      var t = e.colorStops,
        r = e.fallback,
        n = e.toDirection,
        a = n === void 0 ? "" : n;
      if (!t || t.length < 2) throw new f(56);
      return {
        backgroundColor:
          r ||
          t[0]
            .replace(/,\s+/g, ",")
            .split(" ")[0]
            .replace(/,(?=\S)/g, ", "),
        backgroundImage: er(
          kt || (kt = qt.default(["linear-gradient(", "", ")"])),
          a,
          t.join(", ").replace(/,(?=\S)/g, ", ")
        ),
      };
    }
    function ga() {
      var e;
      return [
        ((e = {
          html: { lineHeight: "1.15", textSizeAdjust: "100%" },
          body: { margin: "0" },
          main: { display: "block" },
          h1: { fontSize: "2em", margin: "0.67em 0" },
          hr: { boxSizing: "content-box", height: "0", overflow: "visible" },
          pre: { fontFamily: "monospace, monospace", fontSize: "1em" },
          a: { backgroundColor: "transparent" },
          "abbr[title]": { borderBottom: "none", textDecoration: "underline" },
        }),
        (e[
          `b,
    strong`
        ] = { fontWeight: "bolder" }),
        (e[
          `code,
    kbd,
    samp`
        ] = { fontFamily: "monospace, monospace", fontSize: "1em" }),
        (e.small = { fontSize: "80%" }),
        (e[
          `sub,
    sup`
        ] = {
          fontSize: "75%",
          lineHeight: "0",
          position: "relative",
          verticalAlign: "baseline",
        }),
        (e.sub = { bottom: "-0.25em" }),
        (e.sup = { top: "-0.5em" }),
        (e.img = { borderStyle: "none" }),
        (e[
          `button,
    input,
    optgroup,
    select,
    textarea`
        ] = {
          fontFamily: "inherit",
          fontSize: "100%",
          lineHeight: "1.15",
          margin: "0",
        }),
        (e[
          `button,
    input`
        ] = { overflow: "visible" }),
        (e[
          `button,
    select`
        ] = { textTransform: "none" }),
        (e[
          `button,
    html [type="button"],
    [type="reset"],
    [type="submit"]`
        ] = { WebkitAppearance: "button" }),
        (e[
          `button::-moz-focus-inner,
    [type="button"]::-moz-focus-inner,
    [type="reset"]::-moz-focus-inner,
    [type="submit"]::-moz-focus-inner`
        ] = { borderStyle: "none", padding: "0" }),
        (e[
          `button:-moz-focusring,
    [type="button"]:-moz-focusring,
    [type="reset"]:-moz-focusring,
    [type="submit"]:-moz-focusring`
        ] = { outline: "1px dotted ButtonText" }),
        (e.fieldset = { padding: "0.35em 0.625em 0.75em" }),
        (e.legend = {
          boxSizing: "border-box",
          color: "inherit",
          display: "table",
          maxWidth: "100%",
          padding: "0",
          whiteSpace: "normal",
        }),
        (e.progress = { verticalAlign: "baseline" }),
        (e.textarea = { overflow: "auto" }),
        (e[
          `[type="checkbox"],
    [type="radio"]`
        ] = { boxSizing: "border-box", padding: "0" }),
        (e[
          `[type="number"]::-webkit-inner-spin-button,
    [type="number"]::-webkit-outer-spin-button`
        ] = { height: "auto" }),
        (e['[type="search"]'] = {
          WebkitAppearance: "textfield",
          outlineOffset: "-2px",
        }),
        (e['[type="search"]::-webkit-search-decoration'] = {
          WebkitAppearance: "none",
        }),
        (e["::-webkit-file-upload-button"] = {
          WebkitAppearance: "button",
          font: "inherit",
        }),
        (e.details = { display: "block" }),
        (e.summary = { display: "list-item" }),
        (e.template = { display: "none" }),
        (e["[hidden]"] = { display: "none" }),
        e),
        { "abbr[title]": { textDecoration: "underline dotted" } },
      ];
    }
    var Gt;
    function ba(e) {
      var t = e.colorStops,
        r = e.extent,
        n = r === void 0 ? "" : r,
        a = e.fallback,
        i = e.position,
        l = i === void 0 ? "" : i,
        s = e.shape,
        u = s === void 0 ? "" : s;
      if (!t || t.length < 2) throw new f(57);
      return {
        backgroundColor: a || t[0].split(" ")[0],
        backgroundImage: er(
          Gt || (Gt = qt.default(["radial-gradient(", "", "", "", ")"])),
          l,
          u,
          n,
          t.join(", ")
        ),
      };
    }
    function ha(e, t, r, n, a) {
      var i;
      if ((r === void 0 && (r = "png"), a === void 0 && (a = "_2x"), !e))
        throw new f(58);
      var l = r.replace(/^\./, ""),
        s = n ? n + "." + l : "" + e + a + "." + l;
      return (
        (i = { backgroundImage: "url(" + e + "." + l + ")" }),
        (i[Qt()] = T.default(
          { backgroundImage: "url(" + s + ")" },
          t ? { backgroundSize: t } : {}
        )),
        i
      );
    }
    var Ea = {
      easeInBack: "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
      easeInCirc: "cubic-bezier(0.600,  0.040, 0.980, 0.335)",
      easeInCubic: "cubic-bezier(0.550,  0.055, 0.675, 0.190)",
      easeInExpo: "cubic-bezier(0.950,  0.050, 0.795, 0.035)",
      easeInQuad: "cubic-bezier(0.550,  0.085, 0.680, 0.530)",
      easeInQuart: "cubic-bezier(0.895,  0.030, 0.685, 0.220)",
      easeInQuint: "cubic-bezier(0.755,  0.050, 0.855, 0.060)",
      easeInSine: "cubic-bezier(0.470,  0.000, 0.745, 0.715)",
      easeOutBack: "cubic-bezier(0.175,  0.885, 0.320, 1.275)",
      easeOutCubic: "cubic-bezier(0.215,  0.610, 0.355, 1.000)",
      easeOutCirc: "cubic-bezier(0.075,  0.820, 0.165, 1.000)",
      easeOutExpo: "cubic-bezier(0.190,  1.000, 0.220, 1.000)",
      easeOutQuad: "cubic-bezier(0.250,  0.460, 0.450, 0.940)",
      easeOutQuart: "cubic-bezier(0.165,  0.840, 0.440, 1.000)",
      easeOutQuint: "cubic-bezier(0.230,  1.000, 0.320, 1.000)",
      easeOutSine: "cubic-bezier(0.390,  0.575, 0.565, 1.000)",
      easeInOutBack: "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
      easeInOutCirc: "cubic-bezier(0.785,  0.135, 0.150, 0.860)",
      easeInOutCubic: "cubic-bezier(0.645,  0.045, 0.355, 1.000)",
      easeInOutExpo: "cubic-bezier(1.000,  0.000, 0.000, 1.000)",
      easeInOutQuad: "cubic-bezier(0.455,  0.030, 0.515, 0.955)",
      easeInOutQuart: "cubic-bezier(0.770,  0.000, 0.175, 1.000)",
      easeInOutQuint: "cubic-bezier(0.860,  0.000, 0.070, 1.000)",
      easeInOutSine: "cubic-bezier(0.445,  0.050, 0.550, 0.950)",
    };
    function ya(e) {
      return Ea[e];
    }
    function va(e) {
      return ya(e);
    }
    var Oa = function (t, r, n) {
        var a = "" + n[0] + (n[1] || ""),
          i = "" + n[0] / 2 + (n[1] || ""),
          l = "" + r[0] + (r[1] || ""),
          s = "" + r[0] / 2 + (r[1] || "");
        switch (t) {
          case "top":
            return "0 " + i + " " + l + " " + i;
          case "topLeft":
            return a + " " + l + " 0 0";
          case "left":
            return s + " " + a + " " + s + " 0";
          case "bottomLeft":
            return a + " 0 0 " + l;
          case "bottom":
            return l + " " + i + " 0 " + i;
          case "bottomRight":
            return "0 0 " + a + " " + l;
          case "right":
            return s + " 0 " + s + " " + a;
          case "topRight":
          default:
            return "0 " + a + " " + l + " 0";
        }
      },
      _a = function (t, r) {
        switch (t) {
          case "top":
          case "bottomRight":
            return { borderBottomColor: r };
          case "right":
          case "bottomLeft":
            return { borderLeftColor: r };
          case "bottom":
          case "topLeft":
            return { borderTopColor: r };
          case "left":
          case "topRight":
            return { borderRightColor: r };
          default:
            throw new f(59);
        }
      };
    function Ta(e) {
      var t = e.pointingDirection,
        r = e.height,
        n = e.width,
        a = e.foregroundColor,
        i = e.backgroundColor,
        l = i === void 0 ? "transparent" : i,
        s = D(n),
        u = D(r);
      if (isNaN(u[0]) || isNaN(s[0])) throw new f(60);
      return T.default({ width: "0", height: "0", borderColor: l }, _a(t, a), {
        borderStyle: "solid",
        borderWidth: Oa(t, u, s),
      });
    }
    function Ra(e) {
      e === void 0 && (e = "break-word");
      var t = e === "break-word" ? "break-all" : e;
      return { overflowWrap: e, wordWrap: e, wordBreak: t };
    }
    function Be(e) {
      return Math.round(e * 255);
    }
    function Sa(e, t, r) {
      return Be(e) + "," + Be(t) + "," + Be(r);
    }
    function se(e, t, r, n) {
      if ((n === void 0 && (n = Sa), t === 0)) return n(r, r, r);
      var a = (((e % 360) + 360) % 360) / 60,
        i = (1 - Math.abs(2 * r - 1)) * t,
        l = i * (1 - Math.abs((a % 2) - 1)),
        s = 0,
        u = 0,
        p = 0;
      a >= 0 && a < 1
        ? ((s = i), (u = l))
        : a >= 1 && a < 2
        ? ((s = l), (u = i))
        : a >= 2 && a < 3
        ? ((u = i), (p = l))
        : a >= 3 && a < 4
        ? ((u = l), (p = i))
        : a >= 4 && a < 5
        ? ((s = l), (p = i))
        : a >= 5 && a < 6 && ((s = i), (p = l));
      var h = r - i / 2,
        d = s + h,
        E = u + h,
        _ = p + h;
      return n(d, E, _);
    }
    var Vt = {
      aliceblue: "f0f8ff",
      antiquewhite: "faebd7",
      aqua: "00ffff",
      aquamarine: "7fffd4",
      azure: "f0ffff",
      beige: "f5f5dc",
      bisque: "ffe4c4",
      black: "000",
      blanchedalmond: "ffebcd",
      blue: "0000ff",
      blueviolet: "8a2be2",
      brown: "a52a2a",
      burlywood: "deb887",
      cadetblue: "5f9ea0",
      chartreuse: "7fff00",
      chocolate: "d2691e",
      coral: "ff7f50",
      cornflowerblue: "6495ed",
      cornsilk: "fff8dc",
      crimson: "dc143c",
      cyan: "00ffff",
      darkblue: "00008b",
      darkcyan: "008b8b",
      darkgoldenrod: "b8860b",
      darkgray: "a9a9a9",
      darkgreen: "006400",
      darkgrey: "a9a9a9",
      darkkhaki: "bdb76b",
      darkmagenta: "8b008b",
      darkolivegreen: "556b2f",
      darkorange: "ff8c00",
      darkorchid: "9932cc",
      darkred: "8b0000",
      darksalmon: "e9967a",
      darkseagreen: "8fbc8f",
      darkslateblue: "483d8b",
      darkslategray: "2f4f4f",
      darkslategrey: "2f4f4f",
      darkturquoise: "00ced1",
      darkviolet: "9400d3",
      deeppink: "ff1493",
      deepskyblue: "00bfff",
      dimgray: "696969",
      dimgrey: "696969",
      dodgerblue: "1e90ff",
      firebrick: "b22222",
      floralwhite: "fffaf0",
      forestgreen: "228b22",
      fuchsia: "ff00ff",
      gainsboro: "dcdcdc",
      ghostwhite: "f8f8ff",
      gold: "ffd700",
      goldenrod: "daa520",
      gray: "808080",
      green: "008000",
      greenyellow: "adff2f",
      grey: "808080",
      honeydew: "f0fff0",
      hotpink: "ff69b4",
      indianred: "cd5c5c",
      indigo: "4b0082",
      ivory: "fffff0",
      khaki: "f0e68c",
      lavender: "e6e6fa",
      lavenderblush: "fff0f5",
      lawngreen: "7cfc00",
      lemonchiffon: "fffacd",
      lightblue: "add8e6",
      lightcoral: "f08080",
      lightcyan: "e0ffff",
      lightgoldenrodyellow: "fafad2",
      lightgray: "d3d3d3",
      lightgreen: "90ee90",
      lightgrey: "d3d3d3",
      lightpink: "ffb6c1",
      lightsalmon: "ffa07a",
      lightseagreen: "20b2aa",
      lightskyblue: "87cefa",
      lightslategray: "789",
      lightslategrey: "789",
      lightsteelblue: "b0c4de",
      lightyellow: "ffffe0",
      lime: "0f0",
      limegreen: "32cd32",
      linen: "faf0e6",
      magenta: "f0f",
      maroon: "800000",
      mediumaquamarine: "66cdaa",
      mediumblue: "0000cd",
      mediumorchid: "ba55d3",
      mediumpurple: "9370db",
      mediumseagreen: "3cb371",
      mediumslateblue: "7b68ee",
      mediumspringgreen: "00fa9a",
      mediumturquoise: "48d1cc",
      mediumvioletred: "c71585",
      midnightblue: "191970",
      mintcream: "f5fffa",
      mistyrose: "ffe4e1",
      moccasin: "ffe4b5",
      navajowhite: "ffdead",
      navy: "000080",
      oldlace: "fdf5e6",
      olive: "808000",
      olivedrab: "6b8e23",
      orange: "ffa500",
      orangered: "ff4500",
      orchid: "da70d6",
      palegoldenrod: "eee8aa",
      palegreen: "98fb98",
      paleturquoise: "afeeee",
      palevioletred: "db7093",
      papayawhip: "ffefd5",
      peachpuff: "ffdab9",
      peru: "cd853f",
      pink: "ffc0cb",
      plum: "dda0dd",
      powderblue: "b0e0e6",
      purple: "800080",
      rebeccapurple: "639",
      red: "f00",
      rosybrown: "bc8f8f",
      royalblue: "4169e1",
      saddlebrown: "8b4513",
      salmon: "fa8072",
      sandybrown: "f4a460",
      seagreen: "2e8b57",
      seashell: "fff5ee",
      sienna: "a0522d",
      silver: "c0c0c0",
      skyblue: "87ceeb",
      slateblue: "6a5acd",
      slategray: "708090",
      slategrey: "708090",
      snow: "fffafa",
      springgreen: "00ff7f",
      steelblue: "4682b4",
      tan: "d2b48c",
      teal: "008080",
      thistle: "d8bfd8",
      tomato: "ff6347",
      turquoise: "40e0d0",
      violet: "ee82ee",
      wheat: "f5deb3",
      white: "fff",
      whitesmoke: "f5f5f5",
      yellow: "ff0",
      yellowgreen: "9acd32",
    };
    function Aa(e) {
      if (typeof e != "string") return e;
      var t = e.toLowerCase();
      return Vt[t] ? "#" + Vt[t] : e;
    }
    var xa = /^#[a-fA-F0-9]{6}$/,
      Ca = /^#[a-fA-F0-9]{8}$/,
      wa = /^#[a-fA-F0-9]{3}$/,
      Na = /^#[a-fA-F0-9]{4}$/,
      Fe =
        /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,
      Ia =
        /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,
      La =
        /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,
      Ma =
        /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
    function j(e) {
      if (typeof e != "string") throw new f(3);
      var t = Aa(e);
      if (t.match(xa))
        return {
          red: parseInt("" + t[1] + t[2], 16),
          green: parseInt("" + t[3] + t[4], 16),
          blue: parseInt("" + t[5] + t[6], 16),
        };
      if (t.match(Ca)) {
        var r = parseFloat((parseInt("" + t[7] + t[8], 16) / 255).toFixed(2));
        return {
          red: parseInt("" + t[1] + t[2], 16),
          green: parseInt("" + t[3] + t[4], 16),
          blue: parseInt("" + t[5] + t[6], 16),
          alpha: r,
        };
      }
      if (t.match(wa))
        return {
          red: parseInt("" + t[1] + t[1], 16),
          green: parseInt("" + t[2] + t[2], 16),
          blue: parseInt("" + t[3] + t[3], 16),
        };
      if (t.match(Na)) {
        var n = parseFloat((parseInt("" + t[4] + t[4], 16) / 255).toFixed(2));
        return {
          red: parseInt("" + t[1] + t[1], 16),
          green: parseInt("" + t[2] + t[2], 16),
          blue: parseInt("" + t[3] + t[3], 16),
          alpha: n,
        };
      }
      var a = Fe.exec(t);
      if (a)
        return {
          red: parseInt("" + a[1], 10),
          green: parseInt("" + a[2], 10),
          blue: parseInt("" + a[3], 10),
        };
      var i = Ia.exec(t.substring(0, 50));
      if (i)
        return {
          red: parseInt("" + i[1], 10),
          green: parseInt("" + i[2], 10),
          blue: parseInt("" + i[3], 10),
          alpha:
            parseFloat("" + i[4]) > 1
              ? parseFloat("" + i[4]) / 100
              : parseFloat("" + i[4]),
        };
      var l = La.exec(t);
      if (l) {
        var s = parseInt("" + l[1], 10),
          u = parseInt("" + l[2], 10) / 100,
          p = parseInt("" + l[3], 10) / 100,
          h = "rgb(" + se(s, u, p) + ")",
          d = Fe.exec(h);
        if (!d) throw new f(4, t, h);
        return {
          red: parseInt("" + d[1], 10),
          green: parseInt("" + d[2], 10),
          blue: parseInt("" + d[3], 10),
        };
      }
      var E = Ma.exec(t.substring(0, 50));
      if (E) {
        var _ = parseInt("" + E[1], 10),
          y = parseInt("" + E[2], 10) / 100,
          O = parseInt("" + E[3], 10) / 100,
          v = "rgb(" + se(_, y, O) + ")",
          N = Fe.exec(v);
        if (!N) throw new f(4, t, v);
        return {
          red: parseInt("" + N[1], 10),
          green: parseInt("" + N[2], 10),
          blue: parseInt("" + N[3], 10),
          alpha:
            parseFloat("" + E[4]) > 1
              ? parseFloat("" + E[4]) / 100
              : parseFloat("" + E[4]),
        };
      }
      throw new f(5);
    }
    function Da(e) {
      var t = e.red / 255,
        r = e.green / 255,
        n = e.blue / 255,
        a = Math.max(t, r, n),
        i = Math.min(t, r, n),
        l = (a + i) / 2;
      if (a === i)
        return e.alpha !== void 0
          ? { hue: 0, saturation: 0, lightness: l, alpha: e.alpha }
          : { hue: 0, saturation: 0, lightness: l };
      var s,
        u = a - i,
        p = l > 0.5 ? u / (2 - a - i) : u / (a + i);
      switch (a) {
        case t:
          s = (r - n) / u + (r < n ? 6 : 0);
          break;
        case r:
          s = (n - t) / u + 2;
          break;
        default:
          s = (t - r) / u + 4;
          break;
      }
      return (
        (s *= 60),
        e.alpha !== void 0
          ? { hue: s, saturation: p, lightness: l, alpha: e.alpha }
          : { hue: s, saturation: p, lightness: l }
      );
    }
    function M(e) {
      return Da(j(e));
    }
    var Pa = function (t) {
        return t.length === 7 && t[1] === t[2] && t[3] === t[4] && t[5] === t[6]
          ? "#" + t[1] + t[3] + t[5]
          : t;
      },
      ke = Pa;
    function G(e) {
      var t = e.toString(16);
      return t.length === 1 ? "0" + t : t;
    }
    function ze(e) {
      return G(Math.round(e * 255));
    }
    function Ba(e, t, r) {
      return ke("#" + ze(e) + ze(t) + ze(r));
    }
    function ye(e, t, r) {
      return se(e, t, r, Ba);
    }
    function Ge(e, t, r) {
      if (typeof e == "number" && typeof t == "number" && typeof r == "number")
        return ye(e, t, r);
      if (typeof e == "object" && t === void 0 && r === void 0)
        return ye(e.hue, e.saturation, e.lightness);
      throw new f(1);
    }
    function Ve(e, t, r, n) {
      if (
        typeof e == "number" &&
        typeof t == "number" &&
        typeof r == "number" &&
        typeof n == "number"
      )
        return n >= 1 ? ye(e, t, r) : "rgba(" + se(e, t, r) + "," + n + ")";
      if (typeof e == "object" && t === void 0 && r === void 0 && n === void 0)
        return e.alpha >= 1
          ? ye(e.hue, e.saturation, e.lightness)
          : "rgba(" +
              se(e.hue, e.saturation, e.lightness) +
              "," +
              e.alpha +
              ")";
      throw new f(2);
    }
    function le(e, t, r) {
      if (typeof e == "number" && typeof t == "number" && typeof r == "number")
        return ke("#" + G(e) + G(t) + G(r));
      if (typeof e == "object" && t === void 0 && r === void 0)
        return ke("#" + G(e.red) + G(e.green) + G(e.blue));
      throw new f(6);
    }
    function $(e, t, r, n) {
      if (typeof e == "string" && typeof t == "number") {
        var a = j(e);
        return "rgba(" + a.red + "," + a.green + "," + a.blue + "," + t + ")";
      } else {
        if (
          typeof e == "number" &&
          typeof t == "number" &&
          typeof r == "number" &&
          typeof n == "number"
        )
          return n >= 1
            ? le(e, t, r)
            : "rgba(" + e + "," + t + "," + r + "," + n + ")";
        if (
          typeof e == "object" &&
          t === void 0 &&
          r === void 0 &&
          n === void 0
        )
          return e.alpha >= 1
            ? le(e.red, e.green, e.blue)
            : "rgba(" +
                e.red +
                "," +
                e.green +
                "," +
                e.blue +
                "," +
                e.alpha +
                ")";
      }
      throw new f(7);
    }
    var Fa = function (t) {
        return (
          typeof t.red == "number" &&
          typeof t.green == "number" &&
          typeof t.blue == "number" &&
          (typeof t.alpha != "number" || typeof t.alpha > "u")
        );
      },
      za = function (t) {
        return (
          typeof t.red == "number" &&
          typeof t.green == "number" &&
          typeof t.blue == "number" &&
          typeof t.alpha == "number"
        );
      },
      ja = function (t) {
        return (
          typeof t.hue == "number" &&
          typeof t.saturation == "number" &&
          typeof t.lightness == "number" &&
          (typeof t.alpha != "number" || typeof t.alpha > "u")
        );
      },
      Ha = function (t) {
        return (
          typeof t.hue == "number" &&
          typeof t.saturation == "number" &&
          typeof t.lightness == "number" &&
          typeof t.alpha == "number"
        );
      };
    function I(e) {
      if (typeof e != "object") throw new f(8);
      if (za(e)) return $(e);
      if (Fa(e)) return le(e);
      if (Ha(e)) return Ve(e);
      if (ja(e)) return Ge(e);
      throw new f(8);
    }
    function tr(e, t, r) {
      return function () {
        var a = r.concat(Array.prototype.slice.call(arguments));
        return a.length >= t ? e.apply(this, a) : tr(e, t, a);
      };
    }
    function w(e) {
      return tr(e, e.length, []);
    }
    function Ua(e, t) {
      if (t === "transparent") return t;
      var r = M(t);
      return I(T.default({}, r, { hue: r.hue + parseFloat(e) }));
    }
    var ka = w(Ua),
      Ga = ka;
    function Va(e) {
      if (e === "transparent") return e;
      var t = M(e);
      return I(T.default({}, t, { hue: (t.hue + 180) % 360 }));
    }
    function W(e, t, r) {
      return Math.max(e, Math.min(t, r));
    }
    function $a(e, t) {
      if (t === "transparent") return t;
      var r = M(t);
      return I(
        T.default({}, r, { lightness: W(0, 1, r.lightness - parseFloat(e)) })
      );
    }
    var Wa = w($a),
      Ya = Wa;
    function qa(e, t) {
      if (t === "transparent") return t;
      var r = M(t);
      return I(
        T.default({}, r, { saturation: W(0, 1, r.saturation - parseFloat(e)) })
      );
    }
    var Ja = w(qa),
      Xa = Ja;
    function ve(e) {
      if (e === "transparent") return 0;
      var t = j(e),
        r = Object.keys(t).map(function (l) {
          var s = t[l] / 255;
          return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
        }),
        n = r[0],
        a = r[1],
        i = r[2];
      return parseFloat((0.2126 * n + 0.7152 * a + 0.0722 * i).toFixed(3));
    }
    function $e(e, t) {
      var r = ve(e),
        n = ve(t);
      return parseFloat(
        (r > n ? (r + 0.05) / (n + 0.05) : (n + 0.05) / (r + 0.05)).toFixed(2)
      );
    }
    function Za(e) {
      return e === "transparent"
        ? e
        : I(T.default({}, M(e), { saturation: 0 }));
    }
    function Ka(e) {
      if (
        typeof e == "object" &&
        typeof e.hue == "number" &&
        typeof e.saturation == "number" &&
        typeof e.lightness == "number"
      )
        return e.alpha && typeof e.alpha == "number"
          ? Ve({
              hue: e.hue,
              saturation: e.saturation,
              lightness: e.lightness,
              alpha: e.alpha,
            })
          : Ge({
              hue: e.hue,
              saturation: e.saturation,
              lightness: e.lightness,
            });
      throw new f(45);
    }
    function Qa(e) {
      if (e === "transparent") return e;
      var t = j(e);
      return I(
        T.default({}, t, {
          red: 255 - t.red,
          green: 255 - t.green,
          blue: 255 - t.blue,
        })
      );
    }
    function eo(e, t) {
      if (t === "transparent") return t;
      var r = M(t);
      return I(
        T.default({}, r, { lightness: W(0, 1, r.lightness + parseFloat(e)) })
      );
    }
    var to = w(eo),
      ro = to;
    function no(e, t) {
      var r = $e(e, t);
      return { AA: r >= 4.5, AALarge: r >= 3, AAA: r >= 7, AAALarge: r >= 4.5 };
    }
    function ao(e, t, r) {
      if (t === "transparent") return r;
      if (r === "transparent") return t;
      if (e === 0) return r;
      var n = j(t),
        a = T.default({}, n, {
          alpha: typeof n.alpha == "number" ? n.alpha : 1,
        }),
        i = j(r),
        l = T.default({}, i, {
          alpha: typeof i.alpha == "number" ? i.alpha : 1,
        }),
        s = a.alpha - l.alpha,
        u = parseFloat(e) * 2 - 1,
        p = u * s === -1 ? u : u + s,
        h = 1 + u * s,
        d = (p / h + 1) / 2,
        E = 1 - d,
        _ = {
          red: Math.floor(a.red * d + l.red * E),
          green: Math.floor(a.green * d + l.green * E),
          blue: Math.floor(a.blue * d + l.blue * E),
          alpha: a.alpha * parseFloat(e) + l.alpha * (1 - parseFloat(e)),
        };
      return $(_);
    }
    var oo = w(ao),
      We = oo;
    function io(e, t) {
      if (t === "transparent") return t;
      var r = j(t),
        n = typeof r.alpha == "number" ? r.alpha : 1,
        a = T.default({}, r, {
          alpha: W(0, 1, (n * 100 + parseFloat(e) * 100) / 100),
        });
      return $(a);
    }
    var so = w(io),
      lo = so,
      $t = "#000",
      Wt = "#fff";
    function uo(e, t, r, n) {
      t === void 0 && (t = $t),
        r === void 0 && (r = Wt),
        n === void 0 && (n = !0);
      var a = ve(e) > 0.179,
        i = a ? t : r;
      return !n || $e(e, i) >= 4.5 ? i : a ? $t : Wt;
    }
    function co(e) {
      if (
        typeof e == "object" &&
        typeof e.red == "number" &&
        typeof e.green == "number" &&
        typeof e.blue == "number"
      )
        return typeof e.alpha == "number"
          ? $({ red: e.red, green: e.green, blue: e.blue, alpha: e.alpha })
          : le({ red: e.red, green: e.green, blue: e.blue });
      throw new f(46);
    }
    function po(e, t) {
      if (t === "transparent") return t;
      var r = M(t);
      return I(
        T.default({}, r, { saturation: W(0, 1, r.saturation + parseFloat(e)) })
      );
    }
    var fo = w(po),
      mo = fo;
    function go(e, t) {
      return t === "transparent"
        ? t
        : I(T.default({}, M(t), { hue: parseFloat(e) }));
    }
    var bo = w(go),
      ho = bo;
    function Eo(e, t) {
      return t === "transparent"
        ? t
        : I(T.default({}, M(t), { lightness: parseFloat(e) }));
    }
    var yo = w(Eo),
      vo = yo;
    function Oo(e, t) {
      return t === "transparent"
        ? t
        : I(T.default({}, M(t), { saturation: parseFloat(e) }));
    }
    var _o = w(Oo),
      To = _o;
    function Ro(e, t) {
      return t === "transparent" ? t : We(parseFloat(e), "rgb(0, 0, 0)", t);
    }
    var So = w(Ro),
      Ao = So;
    function xo(e, t) {
      return t === "transparent"
        ? t
        : We(parseFloat(e), "rgb(255, 255, 255)", t);
    }
    var Co = w(xo),
      wo = Co;
    function No(e, t) {
      if (t === "transparent") return t;
      var r = j(t),
        n = typeof r.alpha == "number" ? r.alpha : 1,
        a = T.default({}, r, {
          alpha: W(0, 1, +(n * 100 - parseFloat(e) * 100).toFixed(2) / 100),
        });
      return $(a);
    }
    var Io = w(No),
      Lo = Io;
    function Mo() {
      for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      var n = Array.isArray(t[0]);
      if (!n && t.length > 8) throw new f(64);
      var a = t
        .map(function (i) {
          if ((n && !Array.isArray(i)) || (!n && Array.isArray(i)))
            throw new f(65);
          if (Array.isArray(i) && i.length > 8) throw new f(66);
          return Array.isArray(i) ? i.join(" ") : i;
        })
        .join(", ");
      return { animation: a };
    }
    function Do() {
      for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      return { backgroundImage: t.join(", ") };
    }
    function Po() {
      for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      return { background: t.join(", ") };
    }
    var Bo = ["top", "right", "bottom", "left"];
    function Fo(e) {
      for (
        var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1;
        n < t;
        n++
      )
        r[n - 1] = arguments[n];
      if (typeof e == "string" && Bo.indexOf(e) >= 0) {
        var a;
        return (
          (a = {}),
          (a["border" + ie(e) + "Width"] = r[0]),
          (a["border" + ie(e) + "Style"] = r[1]),
          (a["border" + ie(e) + "Color"] = r[2]),
          a
        );
      } else
        return (
          r.unshift(e),
          { borderWidth: r[0], borderStyle: r[1], borderColor: r[2] }
        );
    }
    function zo() {
      for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      return k.apply(void 0, ["borderColor"].concat(t));
    }
    function jo(e, t) {
      var r = ie(e);
      if (!t && t !== 0) throw new f(62);
      if (r === "Top" || r === "Bottom") {
        var n;
        return (
          (n = {}),
          (n["border" + r + "RightRadius"] = t),
          (n["border" + r + "LeftRadius"] = t),
          n
        );
      }
      if (r === "Left" || r === "Right") {
        var a;
        return (
          (a = {}),
          (a["borderTop" + r + "Radius"] = t),
          (a["borderBottom" + r + "Radius"] = t),
          a
        );
      }
      throw new f(63);
    }
    function Ho() {
      for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      return k.apply(void 0, ["borderStyle"].concat(t));
    }
    function Uo() {
      for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      return k.apply(void 0, ["borderWidth"].concat(t));
    }
    function Yt(e, t) {
      var r = t ? ":" + t : "";
      return e(r);
    }
    function rr(e, t, r) {
      if (!t) throw new f(67);
      if (e.length === 0) return Yt(t, null);
      for (var n = [], a = 0; a < e.length; a += 1) {
        if (r && r.indexOf(e[a]) < 0) throw new f(68);
        n.push(Yt(t, e[a]));
      }
      return (n = n.join(",")), n;
    }
    var ko = [void 0, null, "active", "focus", "hover"];
    function Go(e) {
      return (
        "button" +
        e +
        `,
  input[type="button"]` +
        e +
        `,
  input[type="reset"]` +
        e +
        `,
  input[type="submit"]` +
        e
      );
    }
    function Vo() {
      for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      return rr(t, Go, ko);
    }
    function $o() {
      for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      return k.apply(void 0, ["margin"].concat(t));
    }
    function Wo() {
      for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      return k.apply(void 0, ["padding"].concat(t));
    }
    var Yo = ["absolute", "fixed", "relative", "static", "sticky"];
    function qo(e) {
      for (
        var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1;
        n < t;
        n++
      )
        r[n - 1] = arguments[n];
      return Yo.indexOf(e) >= 0 && e
        ? T.default({}, k.apply(void 0, [""].concat(r)), { position: e })
        : k.apply(void 0, ["", e].concat(r));
    }
    function Jo(e, t) {
      return t === void 0 && (t = e), { height: e, width: t };
    }
    var Xo = [void 0, null, "active", "focus", "hover"];
    function Zo(e) {
      return (
        'input[type="color"]' +
        e +
        `,
    input[type="date"]` +
        e +
        `,
    input[type="datetime"]` +
        e +
        `,
    input[type="datetime-local"]` +
        e +
        `,
    input[type="email"]` +
        e +
        `,
    input[type="month"]` +
        e +
        `,
    input[type="number"]` +
        e +
        `,
    input[type="password"]` +
        e +
        `,
    input[type="search"]` +
        e +
        `,
    input[type="tel"]` +
        e +
        `,
    input[type="text"]` +
        e +
        `,
    input[type="time"]` +
        e +
        `,
    input[type="url"]` +
        e +
        `,
    input[type="week"]` +
        e +
        `,
    input:not([type])` +
        e +
        `,
    textarea` +
        e
      );
    }
    function Ko() {
      for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      return rr(t, Zo, Xo);
    }
    function Qo() {
      for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      if (Array.isArray(t[0]) && t.length === 2) {
        var n = t[1];
        if (typeof n != "string") throw new f(61);
        var a = t[0]
          .map(function (i) {
            return i + " " + n;
          })
          .join(", ");
        return { transition: a };
      } else return { transition: t.join(", ") };
    }
    c.adjustHue = Ga;
    c.animation = Mo;
    c.backgroundImages = Do;
    c.backgrounds = Po;
    c.between = Ue;
    c.border = Fo;
    c.borderColor = zo;
    c.borderRadius = jo;
    c.borderStyle = Ho;
    c.borderWidth = Uo;
    c.buttons = Vo;
    c.clearFix = Qn;
    c.complement = Va;
    c.cover = ea;
    c.cssVar = Ln;
    c.darken = Ya;
    c.desaturate = Xa;
    c.directionalProperty = k;
    c.easeIn = qn;
    c.easeInOut = Xn;
    c.easeOut = Kn;
    c.ellipsis = ta;
    c.em = jn;
    c.fluidRange = aa;
    c.fontFace = pa;
    c.getContrast = $e;
    c.getLuminance = ve;
    c.getValueAndUnit = D;
    c.grayscale = Za;
    c.hiDPI = Qt;
    c.hideText = fa;
    c.hideVisually = da;
    c.hsl = Ge;
    c.hslToColorString = Ka;
    c.hsla = Ve;
    c.important = Xt;
    c.invert = Qa;
    c.lighten = ro;
    c.linearGradient = ma;
    c.margin = $o;
    c.math = Nn;
    c.meetsContrastGuidelines = no;
    c.mix = We;
    c.modularScale = kn;
    c.normalize = ga;
    c.opacify = lo;
    c.padding = Wo;
    c.parseToHsl = M;
    c.parseToRgb = j;
    c.position = qo;
    c.radialGradient = ba;
    c.readableColor = uo;
    c.rem = Vn;
    c.remToPx = Wn;
    c.retinaImage = ha;
    c.rgb = le;
    c.rgbToColorString = co;
    c.rgba = $;
    c.saturate = mo;
    c.setHue = ho;
    c.setLightness = vo;
    c.setSaturation = To;
    c.shade = Ao;
    c.size = Jo;
    c.stripUnit = je;
    c.textInputs = Ko;
    c.timingFunctions = va;
    c.tint = wo;
    c.toColorString = I;
    c.transitions = Qo;
    c.transparentize = Lo;
    c.triangle = Ta;
    c.wordWrap = Ra;
  });
  m();
  g();
  b();
  m();
  g();
  b();
  m();
  g();
  b();
  m();
  g();
  b();
  var et = "actions",
    J = "storybook/actions",
    tt = `${J}/panel`,
    X = `${J}/action-event`,
    ce = `${J}/action-clear`;
  m();
  g();
  b();
  var o = __REACT__,
    {
      Children: rt,
      Component: nt,
      Fragment: at,
      Profiler: Oi,
      PureComponent: _i,
      StrictMode: Ti,
      Suspense: Ri,
      __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Si,
      cloneElement: Ai,
      createContext: pe,
      createElement: xi,
      createFactory: Ci,
      createRef: wi,
      forwardRef: Ni,
      isValidElement: Ii,
      lazy: Li,
      memo: Z,
      useCallback: H,
      useContext: fe,
      useDebugValue: Mi,
      useEffect: Di,
      useImperativeHandle: Pi,
      useLayoutEffect: ot,
      useMemo: it,
      useReducer: Bi,
      useRef: Fi,
      useState: U,
      version: zi,
    } = __REACT__;
  m();
  g();
  b();
  var Gi = __STORYBOOKAPI__,
    {
      ActiveTabs: Vi,
      Consumer: $i,
      ManagerContext: Wi,
      Provider: Yi,
      addons: _e,
      combineParameters: qi,
      controlOrMetaKey: Ji,
      controlOrMetaSymbol: Xi,
      eventMatchesShortcut: Zi,
      eventToShortcut: Ki,
      isMacLike: Qi,
      isShortcutTaken: es,
      keyToSymbol: ts,
      merge: rs,
      mockChannel: ns,
      optionOrAltSymbol: as,
      shortcutMatchesShortcut: os,
      shortcutToHumanString: is,
      types: st,
      useAddonState: ss,
      useArgTypes: ls,
      useArgs: us,
      useChannel: lt,
      useGlobalTypes: cs,
      useGlobals: ps,
      useParameter: fs,
      useSharedState: ds,
      useStoryPrepared: ms,
      useStorybookApi: gs,
      useStorybookState: bs,
    } = __STORYBOOKAPI__;
  m();
  g();
  b();
  var Os = __STORYBOOKCOREEVENTS__,
    {
      CHANNEL_CREATED: _s,
      CONFIG_ERROR: Ts,
      CURRENT_STORY_WAS_SET: Rs,
      DOCS_PREPARED: Ss,
      DOCS_RENDERED: As,
      FORCE_REMOUNT: xs,
      FORCE_RE_RENDER: Cs,
      GLOBALS_UPDATED: ws,
      IGNORED_EXCEPTION: Ns,
      NAVIGATE_URL: Is,
      PLAY_FUNCTION_THREW_EXCEPTION: Ls,
      PRELOAD_ENTRIES: Ms,
      PREVIEW_BUILDER_PROGRESS: Ds,
      PREVIEW_KEYDOWN: Ps,
      REGISTER_SUBSCRIPTION: Bs,
      RESET_STORY_ARGS: Fs,
      SELECT_STORY: zs,
      SET_CONFIG: js,
      SET_CURRENT_STORY: Hs,
      SET_GLOBALS: Us,
      SET_INDEX: ks,
      SET_STORIES: Gs,
      SHARED_STATE_CHANGED: Vs,
      SHARED_STATE_SET: $s,
      STORIES_COLLAPSE_ALL: Ws,
      STORIES_EXPAND_ALL: Ys,
      STORY_ARGS_UPDATED: qs,
      STORY_CHANGED: K,
      STORY_ERRORED: Js,
      STORY_INDEX_INVALIDATED: Xs,
      STORY_MISSING: Zs,
      STORY_PREPARED: Ks,
      STORY_RENDERED: Qs,
      STORY_RENDER_PHASE_CHANGED: el,
      STORY_SPECIFIED: tl,
      STORY_THREW_EXCEPTION: rl,
      STORY_UNCHANGED: nl,
      UPDATE_GLOBALS: al,
      UPDATE_QUERY_PARAMS: ol,
      UPDATE_STORY_ARGS: il,
    } = __STORYBOOKCOREEVENTS__;
  m();
  g();
  b();
  var ut = Object.prototype.hasOwnProperty;
  function ct(e, t, r) {
    for (r of e.keys()) if (V(r, t)) return r;
  }
  function V(e, t) {
    var r, n, a;
    if (e === t) return !0;
    if (e && t && (r = e.constructor) === t.constructor) {
      if (r === Date) return e.getTime() === t.getTime();
      if (r === RegExp) return e.toString() === t.toString();
      if (r === Array) {
        if ((n = e.length) === t.length) for (; n-- && V(e[n], t[n]); );
        return n === -1;
      }
      if (r === Set) {
        if (e.size !== t.size) return !1;
        for (n of e)
          if (
            ((a = n),
            (a && typeof a == "object" && ((a = ct(t, a)), !a)) || !t.has(a))
          )
            return !1;
        return !0;
      }
      if (r === Map) {
        if (e.size !== t.size) return !1;
        for (n of e)
          if (
            ((a = n[0]),
            (a && typeof a == "object" && ((a = ct(t, a)), !a)) ||
              !V(n[1], t.get(a)))
          )
            return !1;
        return !0;
      }
      if (r === ArrayBuffer) (e = new Uint8Array(e)), (t = new Uint8Array(t));
      else if (r === DataView) {
        if ((n = e.byteLength) === t.byteLength)
          for (; n-- && e.getInt8(n) === t.getInt8(n); );
        return n === -1;
      }
      if (ArrayBuffer.isView(e)) {
        if ((n = e.byteLength) === t.byteLength) for (; n-- && e[n] === t[n]; );
        return n === -1;
      }
      if (!r || typeof e == "object") {
        n = 0;
        for (r in e)
          if (
            (ut.call(e, r) && ++n && !ut.call(t, r)) ||
            !(r in t) ||
            !V(e[r], t[r])
          )
            return !1;
        return Object.keys(t).length === n;
      }
    }
    return e !== e && t !== t;
  }
  m();
  g();
  b();
  var gl = __STORYBOOKTHEMING__,
    {
      CacheProvider: bl,
      ClassNames: hl,
      Global: El,
      ThemeProvider: yl,
      background: vl,
      color: Ol,
      convert: _l,
      create: Tl,
      createCache: Rl,
      createGlobal: Sl,
      createReset: Al,
      css: xl,
      darken: Cl,
      ensure: wl,
      ignoreSsrWarning: Nl,
      isPropValid: Il,
      jsx: Ll,
      keyframes: Ml,
      lighten: Dl,
      styled: Q,
      themes: Pl,
      typography: Bl,
      useTheme: Fl,
      withTheme: pt,
    } = __STORYBOOKTHEMING__;
  m();
  g();
  b();
  var mr = Object.create,
    xe = Object.defineProperty,
    gr = Object.getOwnPropertyDescriptor,
    bt = Object.getOwnPropertyNames,
    br = Object.getPrototypeOf,
    hr = Object.prototype.hasOwnProperty,
    Ce = (e, t) =>
      function () {
        return (
          t || (0, e[bt(e)[0]])((t = { exports: {} }).exports, t), t.exports
        );
      },
    Er = (e, t) => {
      for (var r in t) xe(e, r, { get: t[r], enumerable: !0 });
    },
    yr = (e, t, r, n) => {
      if ((t && typeof t == "object") || typeof t == "function")
        for (let a of bt(t))
          !hr.call(e, a) &&
            a !== r &&
            xe(e, a, {
              get: () => t[a],
              enumerable: !(n = gr(t, a)) || n.enumerable,
            });
      return e;
    },
    vr = (e, t, r) => (
      (r = e != null ? mr(br(e)) : {}),
      yr(
        t || !e || !e.__esModule
          ? xe(r, "default", { value: e, enumerable: !0 })
          : r,
        e
      )
    ),
    Or = Ce({
      "node_modules/is-object/index.js"(e, t) {
        "use strict";
        t.exports = function (n) {
          return typeof n == "object" && n !== null;
        };
      },
    }),
    _r = Ce({
      "node_modules/is-window/index.js"(e, t) {
        "use strict";
        t.exports = function (r) {
          if (r == null) return !1;
          var n = Object(r);
          return n === n.window;
        };
      },
    }),
    Tr = Ce({
      "node_modules/is-dom/index.js"(e, t) {
        var r = Or(),
          n = _r();
        function a(i) {
          return !r(i) || !n(window) || typeof window.Node != "function"
            ? !1
            : typeof i.nodeType == "number" && typeof i.nodeName == "string";
        }
        t.exports = a;
      },
    }),
    ge = {};
  Er(ge, { chromeDark: () => Rr, chromeLight: () => Sr });
  var Rr = {
      BASE_FONT_FAMILY: "Menlo, monospace",
      BASE_FONT_SIZE: "11px",
      BASE_LINE_HEIGHT: 1.2,
      BASE_BACKGROUND_COLOR: "rgb(36, 36, 36)",
      BASE_COLOR: "rgb(213, 213, 213)",
      OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES: 10,
      OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES: 5,
      OBJECT_NAME_COLOR: "rgb(227, 110, 236)",
      OBJECT_VALUE_NULL_COLOR: "rgb(127, 127, 127)",
      OBJECT_VALUE_UNDEFINED_COLOR: "rgb(127, 127, 127)",
      OBJECT_VALUE_REGEXP_COLOR: "rgb(233, 63, 59)",
      OBJECT_VALUE_STRING_COLOR: "rgb(233, 63, 59)",
      OBJECT_VALUE_SYMBOL_COLOR: "rgb(233, 63, 59)",
      OBJECT_VALUE_NUMBER_COLOR: "hsl(252, 100%, 75%)",
      OBJECT_VALUE_BOOLEAN_COLOR: "hsl(252, 100%, 75%)",
      OBJECT_VALUE_FUNCTION_PREFIX_COLOR: "rgb(85, 106, 242)",
      HTML_TAG_COLOR: "rgb(93, 176, 215)",
      HTML_TAGNAME_COLOR: "rgb(93, 176, 215)",
      HTML_TAGNAME_TEXT_TRANSFORM: "lowercase",
      HTML_ATTRIBUTE_NAME_COLOR: "rgb(155, 187, 220)",
      HTML_ATTRIBUTE_VALUE_COLOR: "rgb(242, 151, 102)",
      HTML_COMMENT_COLOR: "rgb(137, 137, 137)",
      HTML_DOCTYPE_COLOR: "rgb(192, 192, 192)",
      ARROW_COLOR: "rgb(145, 145, 145)",
      ARROW_MARGIN_RIGHT: 3,
      ARROW_FONT_SIZE: 12,
      ARROW_ANIMATION_DURATION: "0",
      TREENODE_FONT_FAMILY: "Menlo, monospace",
      TREENODE_FONT_SIZE: "11px",
      TREENODE_LINE_HEIGHT: 1.2,
      TREENODE_PADDING_LEFT: 12,
      TABLE_BORDER_COLOR: "rgb(85, 85, 85)",
      TABLE_TH_BACKGROUND_COLOR: "rgb(44, 44, 44)",
      TABLE_TH_HOVER_COLOR: "rgb(48, 48, 48)",
      TABLE_SORT_ICON_COLOR: "black",
      TABLE_DATA_BACKGROUND_IMAGE:
        "linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 50%, rgba(51, 139, 255, 0.0980392) 50%, rgba(51, 139, 255, 0.0980392))",
      TABLE_DATA_BACKGROUND_SIZE: "128px 32px",
    },
    Sr = {
      BASE_FONT_FAMILY: "Menlo, monospace",
      BASE_FONT_SIZE: "11px",
      BASE_LINE_HEIGHT: 1.2,
      BASE_BACKGROUND_COLOR: "white",
      BASE_COLOR: "black",
      OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES: 10,
      OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES: 5,
      OBJECT_NAME_COLOR: "rgb(136, 19, 145)",
      OBJECT_VALUE_NULL_COLOR: "rgb(128, 128, 128)",
      OBJECT_VALUE_UNDEFINED_COLOR: "rgb(128, 128, 128)",
      OBJECT_VALUE_REGEXP_COLOR: "rgb(196, 26, 22)",
      OBJECT_VALUE_STRING_COLOR: "rgb(196, 26, 22)",
      OBJECT_VALUE_SYMBOL_COLOR: "rgb(196, 26, 22)",
      OBJECT_VALUE_NUMBER_COLOR: "rgb(28, 0, 207)",
      OBJECT_VALUE_BOOLEAN_COLOR: "rgb(28, 0, 207)",
      OBJECT_VALUE_FUNCTION_PREFIX_COLOR: "rgb(13, 34, 170)",
      HTML_TAG_COLOR: "rgb(168, 148, 166)",
      HTML_TAGNAME_COLOR: "rgb(136, 18, 128)",
      HTML_TAGNAME_TEXT_TRANSFORM: "lowercase",
      HTML_ATTRIBUTE_NAME_COLOR: "rgb(153, 69, 0)",
      HTML_ATTRIBUTE_VALUE_COLOR: "rgb(26, 26, 166)",
      HTML_COMMENT_COLOR: "rgb(35, 110, 37)",
      HTML_DOCTYPE_COLOR: "rgb(192, 192, 192)",
      ARROW_COLOR: "#6e6e6e",
      ARROW_MARGIN_RIGHT: 3,
      ARROW_FONT_SIZE: 12,
      ARROW_ANIMATION_DURATION: "0",
      TREENODE_FONT_FAMILY: "Menlo, monospace",
      TREENODE_FONT_SIZE: "11px",
      TREENODE_LINE_HEIGHT: 1.2,
      TREENODE_PADDING_LEFT: 12,
      TABLE_BORDER_COLOR: "#aaa",
      TABLE_TH_BACKGROUND_COLOR: "#eee",
      TABLE_TH_HOVER_COLOR: "hsla(0, 0%, 90%, 1)",
      TABLE_SORT_ICON_COLOR: "#6e6e6e",
      TABLE_DATA_BACKGROUND_IMAGE:
        "linear-gradient(to bottom, white, white 50%, rgb(234, 243, 255) 50%, rgb(234, 243, 255))",
      TABLE_DATA_BACKGROUND_SIZE: "128px 32px",
    },
    ht = pe([{}, () => {}]),
    Te = {
      WebkitTouchCallout: "none",
      WebkitUserSelect: "none",
      KhtmlUserSelect: "none",
      MozUserSelect: "none",
      msUserSelect: "none",
      OUserSelect: "none",
      userSelect: "none",
    },
    de = (e) => ({
      DOMNodePreview: {
        htmlOpenTag: {
          base: { color: e.HTML_TAG_COLOR },
          tagName: {
            color: e.HTML_TAGNAME_COLOR,
            textTransform: e.HTML_TAGNAME_TEXT_TRANSFORM,
          },
          htmlAttributeName: { color: e.HTML_ATTRIBUTE_NAME_COLOR },
          htmlAttributeValue: { color: e.HTML_ATTRIBUTE_VALUE_COLOR },
        },
        htmlCloseTag: {
          base: { color: e.HTML_TAG_COLOR },
          offsetLeft: { marginLeft: -e.TREENODE_PADDING_LEFT },
          tagName: {
            color: e.HTML_TAGNAME_COLOR,
            textTransform: e.HTML_TAGNAME_TEXT_TRANSFORM,
          },
        },
        htmlComment: { color: e.HTML_COMMENT_COLOR },
        htmlDoctype: { color: e.HTML_DOCTYPE_COLOR },
      },
      ObjectPreview: {
        objectDescription: { fontStyle: "italic" },
        preview: { fontStyle: "italic" },
        arrayMaxProperties: e.OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES,
        objectMaxProperties: e.OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES,
      },
      ObjectName: {
        base: { color: e.OBJECT_NAME_COLOR },
        dimmed: { opacity: 0.6 },
      },
      ObjectValue: {
        objectValueNull: { color: e.OBJECT_VALUE_NULL_COLOR },
        objectValueUndefined: { color: e.OBJECT_VALUE_UNDEFINED_COLOR },
        objectValueRegExp: { color: e.OBJECT_VALUE_REGEXP_COLOR },
        objectValueString: { color: e.OBJECT_VALUE_STRING_COLOR },
        objectValueSymbol: { color: e.OBJECT_VALUE_SYMBOL_COLOR },
        objectValueNumber: { color: e.OBJECT_VALUE_NUMBER_COLOR },
        objectValueBoolean: { color: e.OBJECT_VALUE_BOOLEAN_COLOR },
        objectValueFunctionPrefix: {
          color: e.OBJECT_VALUE_FUNCTION_PREFIX_COLOR,
          fontStyle: "italic",
        },
        objectValueFunctionName: { fontStyle: "italic" },
      },
      TreeView: {
        treeViewOutline: { padding: 0, margin: 0, listStyleType: "none" },
      },
      TreeNode: {
        treeNodeBase: {
          color: e.BASE_COLOR,
          backgroundColor: e.BASE_BACKGROUND_COLOR,
          lineHeight: e.TREENODE_LINE_HEIGHT,
          cursor: "default",
          boxSizing: "border-box",
          listStyle: "none",
          fontFamily: e.TREENODE_FONT_FAMILY,
          fontSize: e.TREENODE_FONT_SIZE,
        },
        treeNodePreviewContainer: {},
        treeNodePlaceholder: {
          whiteSpace: "pre",
          fontSize: e.ARROW_FONT_SIZE,
          marginRight: e.ARROW_MARGIN_RIGHT,
          ...Te,
        },
        treeNodeArrow: {
          base: {
            color: e.ARROW_COLOR,
            display: "inline-block",
            fontSize: e.ARROW_FONT_SIZE,
            marginRight: e.ARROW_MARGIN_RIGHT,
            ...(parseFloat(e.ARROW_ANIMATION_DURATION) > 0
              ? {
                  transition: `transform ${e.ARROW_ANIMATION_DURATION} ease 0s`,
                }
              : {}),
            ...Te,
          },
          expanded: {
            WebkitTransform: "rotateZ(90deg)",
            MozTransform: "rotateZ(90deg)",
            transform: "rotateZ(90deg)",
          },
          collapsed: {
            WebkitTransform: "rotateZ(0deg)",
            MozTransform: "rotateZ(0deg)",
            transform: "rotateZ(0deg)",
          },
        },
        treeNodeChildNodesContainer: {
          margin: 0,
          paddingLeft: e.TREENODE_PADDING_LEFT,
        },
      },
      TableInspector: {
        base: {
          color: e.BASE_COLOR,
          position: "relative",
          border: `1px solid ${e.TABLE_BORDER_COLOR}`,
          fontFamily: e.BASE_FONT_FAMILY,
          fontSize: e.BASE_FONT_SIZE,
          lineHeight: "120%",
          boxSizing: "border-box",
          cursor: "default",
        },
      },
      TableInspectorHeaderContainer: {
        base: {
          top: 0,
          height: "17px",
          left: 0,
          right: 0,
          overflowX: "hidden",
        },
        table: {
          tableLayout: "fixed",
          borderSpacing: 0,
          borderCollapse: "separate",
          height: "100%",
          width: "100%",
          margin: 0,
        },
      },
      TableInspectorDataContainer: {
        tr: { display: "table-row" },
        td: {
          boxSizing: "border-box",
          border: "none",
          height: "16px",
          verticalAlign: "top",
          padding: "1px 4px",
          WebkitUserSelect: "text",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          overflow: "hidden",
          lineHeight: "14px",
        },
        div: {
          position: "static",
          top: "17px",
          bottom: 0,
          overflowY: "overlay",
          transform: "translateZ(0)",
          left: 0,
          right: 0,
          overflowX: "hidden",
        },
        table: {
          positon: "static",
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          borderTop: "0 none transparent",
          margin: 0,
          backgroundImage: e.TABLE_DATA_BACKGROUND_IMAGE,
          backgroundSize: e.TABLE_DATA_BACKGROUND_SIZE,
          tableLayout: "fixed",
          borderSpacing: 0,
          borderCollapse: "separate",
          width: "100%",
          fontSize: e.BASE_FONT_SIZE,
          lineHeight: "120%",
        },
      },
      TableInspectorTH: {
        base: {
          position: "relative",
          height: "auto",
          textAlign: "left",
          backgroundColor: e.TABLE_TH_BACKGROUND_COLOR,
          borderBottom: `1px solid ${e.TABLE_BORDER_COLOR}`,
          fontWeight: "normal",
          verticalAlign: "middle",
          padding: "0 4px",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          overflow: "hidden",
          lineHeight: "14px",
          ":hover": { backgroundColor: e.TABLE_TH_HOVER_COLOR },
        },
        div: {
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          overflow: "hidden",
          fontSize: e.BASE_FONT_SIZE,
          lineHeight: "120%",
        },
      },
      TableInspectorLeftBorder: {
        none: { borderLeft: "none" },
        solid: { borderLeft: `1px solid ${e.TABLE_BORDER_COLOR}` },
      },
      TableInspectorSortIcon: {
        display: "block",
        marginRight: 3,
        width: 8,
        height: 7,
        marginTop: -7,
        color: e.TABLE_SORT_ICON_COLOR,
        fontSize: 12,
        ...Te,
      },
    }),
    Re = "chromeLight",
    Et = pe(de(ge[Re])),
    x = (e) => fe(Et)[e],
    we =
      (e) =>
      ({ theme: r = Re, ...n }) => {
        let a = it(() => {
          switch (Object.prototype.toString.call(r)) {
            case "[object String]":
              return de(ge[r]);
            case "[object Object]":
              return de(r);
            default:
              return de(ge[Re]);
          }
        }, [r]);
        return o.createElement(
          Et.Provider,
          { value: a },
          o.createElement(e, { ...n })
        );
      },
    Ar = ({ expanded: e, styles: t }) =>
      o.createElement(
        "span",
        { style: { ...t.base, ...(e ? t.expanded : t.collapsed) } },
        "\u25B6"
      ),
    xr = Z((e) => {
      e = {
        expanded: !0,
        nodeRenderer: ({ name: h }) => o.createElement("span", null, h),
        onClick: () => {},
        shouldShowArrow: !1,
        shouldShowPlaceholder: !0,
        ...e,
      };
      let {
          expanded: t,
          onClick: r,
          children: n,
          nodeRenderer: a,
          title: i,
          shouldShowArrow: l,
          shouldShowPlaceholder: s,
        } = e,
        u = x("TreeNode"),
        p = a;
      return o.createElement(
        "li",
        {
          "aria-expanded": t,
          role: "treeitem",
          style: u.treeNodeBase,
          title: i,
        },
        o.createElement(
          "div",
          { style: u.treeNodePreviewContainer, onClick: r },
          l || rt.count(n) > 0
            ? o.createElement(Ar, { expanded: t, styles: u.treeNodeArrow })
            : s &&
                o.createElement(
                  "span",
                  { style: u.treeNodePlaceholder },
                  "\xA0"
                ),
          o.createElement(p, { ...e })
        ),
        o.createElement(
          "ol",
          { role: "group", style: u.treeNodeChildNodesContainer },
          t ? n : void 0
        )
      );
    }),
    be = "$",
    ft = "*";
  function me(e, t) {
    return !t(e).next().done;
  }
  var Cr = (e) =>
      Array.from({ length: e }, (t, r) =>
        [be].concat(Array.from({ length: r }, () => "*")).join(".")
      ),
    wr = (e, t, r, n, a) => {
      let i = []
          .concat(Cr(n))
          .concat(r)
          .filter((s) => typeof s == "string"),
        l = [];
      return (
        i.forEach((s) => {
          let u = s.split("."),
            p = (h, d, E) => {
              if (E === u.length) {
                l.push(d);
                return;
              }
              let _ = u[E];
              if (E === 0)
                me(h, t) && (_ === be || _ === ft) && p(h, be, E + 1);
              else if (_ === ft)
                for (let { name: y, data: O } of t(h))
                  me(O, t) && p(O, `${d}.${y}`, E + 1);
              else {
                let y = h[_];
                me(y, t) && p(y, `${d}.${_}`, E + 1);
              }
            };
          p(e, "", 0);
        }),
        l.reduce((s, u) => ((s[u] = !0), s), { ...a })
      );
    },
    yt = Z((e) => {
      let { data: t, dataIterator: r, path: n, depth: a, nodeRenderer: i } = e,
        [l, s] = fe(ht),
        u = me(t, r),
        p = !!l[n],
        h = H(() => u && s((d) => ({ ...d, [n]: !p })), [u, s, n, p]);
      return o.createElement(
        xr,
        {
          expanded: p,
          onClick: h,
          shouldShowArrow: u,
          shouldShowPlaceholder: a > 0,
          nodeRenderer: i,
          ...e,
        },
        p
          ? [...r(t)].map(({ name: d, data: E, ..._ }) =>
              o.createElement(yt, {
                name: d,
                data: E,
                depth: a + 1,
                path: `${n}.${d}`,
                key: d,
                dataIterator: r,
                nodeRenderer: i,
                ..._,
              })
            )
          : null
      );
    }),
    vt = Z(
      ({
        name: e,
        data: t,
        dataIterator: r,
        nodeRenderer: n,
        expandPaths: a,
        expandLevel: i,
      }) => {
        let l = x("TreeView"),
          s = U({}),
          [, u] = s;
        return (
          ot(() => u((p) => wr(t, r, a, i, p)), [t, r, a, i]),
          o.createElement(
            ht.Provider,
            { value: s },
            o.createElement(
              "ol",
              { role: "tree", style: l.treeViewOutline },
              o.createElement(yt, {
                name: e,
                data: t,
                dataIterator: r,
                depth: 0,
                path: be,
                nodeRenderer: n,
              })
            )
          )
        );
      }
    ),
    Ne = ({ name: e, dimmed: t = !1, styles: r = {} }) => {
      let n = x("ObjectName"),
        a = { ...n.base, ...(t ? n.dimmed : {}), ...r };
      return o.createElement("span", { style: a }, e);
    },
    ee = ({ object: e, styles: t }) => {
      let r = x("ObjectValue"),
        n = (a) => ({ ...r[a], ...t });
      switch (typeof e) {
        case "bigint":
          return o.createElement(
            "span",
            { style: n("objectValueNumber") },
            String(e),
            "n"
          );
        case "number":
          return o.createElement(
            "span",
            { style: n("objectValueNumber") },
            String(e)
          );
        case "string":
          return o.createElement(
            "span",
            { style: n("objectValueString") },
            '"',
            e,
            '"'
          );
        case "boolean":
          return o.createElement(
            "span",
            { style: n("objectValueBoolean") },
            String(e)
          );
        case "undefined":
          return o.createElement(
            "span",
            { style: n("objectValueUndefined") },
            "undefined"
          );
        case "object":
          return e === null
            ? o.createElement("span", { style: n("objectValueNull") }, "null")
            : e instanceof Date
            ? o.createElement("span", null, e.toString())
            : e instanceof RegExp
            ? o.createElement(
                "span",
                { style: n("objectValueRegExp") },
                e.toString()
              )
            : Array.isArray(e)
            ? o.createElement("span", null, `Array(${e.length})`)
            : e.constructor
            ? typeof e.constructor.isBuffer == "function" &&
              e.constructor.isBuffer(e)
              ? o.createElement("span", null, `Buffer[${e.length}]`)
              : o.createElement("span", null, e.constructor.name)
            : o.createElement("span", null, "Object");
        case "function":
          return o.createElement(
            "span",
            null,
            o.createElement(
              "span",
              { style: n("objectValueFunctionPrefix") },
              "\u0192\xA0"
            ),
            o.createElement(
              "span",
              { style: n("objectValueFunctionName") },
              e.name,
              "()"
            )
          );
        case "symbol":
          return o.createElement(
            "span",
            { style: n("objectValueSymbol") },
            e.toString()
          );
        default:
          return o.createElement("span", null);
      }
    },
    Ot = Object.prototype.hasOwnProperty,
    Nr = Object.prototype.propertyIsEnumerable;
  function Se(e, t) {
    let r = Object.getOwnPropertyDescriptor(e, t);
    if (r.get)
      try {
        return r.get();
      } catch {
        return r.get;
      }
    return e[t];
  }
  function dt(e, t) {
    return e.length === 0
      ? []
      : e.slice(1).reduce((r, n) => r.concat([t, n]), [e[0]]);
  }
  var Ae = ({ data: e }) => {
      let t = x("ObjectPreview"),
        r = e;
      if (
        typeof r != "object" ||
        r === null ||
        r instanceof Date ||
        r instanceof RegExp
      )
        return o.createElement(ee, { object: r });
      if (Array.isArray(r)) {
        let n = t.arrayMaxProperties,
          a = r
            .slice(0, n)
            .map((l, s) => o.createElement(ee, { key: s, object: l }));
        r.length > n &&
          a.push(o.createElement("span", { key: "ellipsis" }, "\u2026"));
        let i = r.length;
        return o.createElement(
          o.Fragment,
          null,
          o.createElement(
            "span",
            { style: t.objectDescription },
            i === 0 ? "" : `(${i})\xA0`
          ),
          o.createElement("span", { style: t.preview }, "[", dt(a, ", "), "]")
        );
      } else {
        let n = t.objectMaxProperties,
          a = [];
        for (let l in r)
          if (Ot.call(r, l)) {
            let s;
            a.length === n - 1 &&
              Object.keys(r).length > n &&
              (s = o.createElement("span", { key: "ellipsis" }, "\u2026"));
            let u = Se(r, l);
            if (
              (a.push(
                o.createElement(
                  "span",
                  { key: l },
                  o.createElement(Ne, { name: l || '""' }),
                  ":\xA0",
                  o.createElement(ee, { object: u }),
                  s
                )
              ),
              s)
            )
              break;
          }
        let i = r.constructor ? r.constructor.name : "Object";
        return o.createElement(
          o.Fragment,
          null,
          o.createElement(
            "span",
            { style: t.objectDescription },
            i === "Object" ? "" : `${i} `
          ),
          o.createElement("span", { style: t.preview }, "{", dt(a, ", "), "}")
        );
      }
    },
    Ir = ({ name: e, data: t }) =>
      typeof e == "string"
        ? o.createElement(
            "span",
            null,
            o.createElement(Ne, { name: e }),
            o.createElement("span", null, ": "),
            o.createElement(Ae, { data: t })
          )
        : o.createElement(Ae, { data: t }),
    Lr = ({ name: e, data: t, isNonenumerable: r = !1 }) => {
      let n = t;
      return o.createElement(
        "span",
        null,
        typeof e == "string"
          ? o.createElement(Ne, { name: e, dimmed: r })
          : o.createElement(Ae, { data: e }),
        o.createElement("span", null, ": "),
        o.createElement(ee, { object: n })
      );
    },
    Mr = (e, t) =>
      function* (n) {
        if (!((typeof n == "object" && n !== null) || typeof n == "function"))
          return;
        let i = Array.isArray(n);
        if (!i && n[Symbol.iterator]) {
          let l = 0;
          for (let s of n) {
            if (Array.isArray(s) && s.length === 2) {
              let [u, p] = s;
              yield { name: u, data: p };
            } else yield { name: l.toString(), data: s };
            l++;
          }
        } else {
          let l = Object.getOwnPropertyNames(n);
          t === !0 && !i ? l.sort() : typeof t == "function" && l.sort(t);
          for (let s of l)
            if (Nr.call(n, s)) {
              let u = Se(n, s);
              yield { name: s || '""', data: u };
            } else if (e) {
              let u;
              try {
                u = Se(n, s);
              } catch {}
              u !== void 0 && (yield { name: s, data: u, isNonenumerable: !0 });
            }
          e &&
            n !== Object.prototype &&
            (yield {
              name: "__proto__",
              data: Object.getPrototypeOf(n),
              isNonenumerable: !0,
            });
        }
      },
    Dr = ({ depth: e, name: t, data: r, isNonenumerable: n }) =>
      e === 0
        ? o.createElement(Ir, { name: t, data: r })
        : o.createElement(Lr, { name: t, data: r, isNonenumerable: n }),
    Pr = ({
      showNonenumerable: e = !1,
      sortObjectKeys: t,
      nodeRenderer: r,
      ...n
    }) => {
      let a = Mr(e, t),
        i = r || Dr;
      return o.createElement(vt, { nodeRenderer: i, dataIterator: a, ...n });
    },
    Br = we(Pr);
  function Fr(e) {
    if (typeof e == "object") {
      let t = [];
      if (Array.isArray(e)) {
        let n = e.length;
        t = [...Array(n).keys()];
      } else e !== null && (t = Object.keys(e));
      let r = t.reduce((n, a) => {
        let i = e[a];
        return (
          typeof i == "object" &&
            i !== null &&
            Object.keys(i).reduce((s, u) => (s.includes(u) || s.push(u), s), n),
          n
        );
      }, []);
      return { rowHeaders: t, colHeaders: r };
    }
  }
  var zr = ({ rows: e, columns: t, rowsData: r }) => {
      let n = x("TableInspectorDataContainer"),
        a = x("TableInspectorLeftBorder");
      return o.createElement(
        "div",
        { style: n.div },
        o.createElement(
          "table",
          { style: n.table },
          o.createElement("colgroup", null),
          o.createElement(
            "tbody",
            null,
            e.map((i, l) =>
              o.createElement(
                "tr",
                { key: i, style: n.tr },
                o.createElement("td", { style: { ...n.td, ...a.none } }, i),
                t.map((s) => {
                  let u = r[l];
                  return typeof u == "object" && u !== null && Ot.call(u, s)
                    ? o.createElement(
                        "td",
                        { key: s, style: { ...n.td, ...a.solid } },
                        o.createElement(ee, { object: u[s] })
                      )
                    : o.createElement("td", {
                        key: s,
                        style: { ...n.td, ...a.solid },
                      });
                })
              )
            )
          )
        )
      );
    },
    jr = (e) =>
      o.createElement(
        "div",
        {
          style: {
            position: "absolute",
            top: 1,
            right: 0,
            bottom: 1,
            display: "flex",
            alignItems: "center",
          },
        },
        e.children
      ),
    Hr = ({ sortAscending: e }) => {
      let t = x("TableInspectorSortIcon"),
        r = e ? "\u25B2" : "\u25BC";
      return o.createElement("div", { style: t }, r);
    },
    mt = ({
      sortAscending: e = !1,
      sorted: t = !1,
      onClick: r = void 0,
      borderStyle: n = {},
      children: a,
      ...i
    }) => {
      let l = x("TableInspectorTH"),
        [s, u] = U(!1),
        p = H(() => u(!0), []),
        h = H(() => u(!1), []);
      return o.createElement(
        "th",
        {
          ...i,
          style: { ...l.base, ...n, ...(s ? l.base[":hover"] : {}) },
          onMouseEnter: p,
          onMouseLeave: h,
          onClick: r,
        },
        o.createElement("div", { style: l.div }, a),
        t &&
          o.createElement(jr, null, o.createElement(Hr, { sortAscending: e }))
      );
    },
    Ur = ({
      indexColumnText: e = "(index)",
      columns: t = [],
      sorted: r,
      sortIndexColumn: n,
      sortColumn: a,
      sortAscending: i,
      onTHClick: l,
      onIndexTHClick: s,
    }) => {
      let u = x("TableInspectorHeaderContainer"),
        p = x("TableInspectorLeftBorder");
      return o.createElement(
        "div",
        { style: u.base },
        o.createElement(
          "table",
          { style: u.table },
          o.createElement(
            "tbody",
            null,
            o.createElement(
              "tr",
              null,
              o.createElement(
                mt,
                {
                  borderStyle: p.none,
                  sorted: r && n,
                  sortAscending: i,
                  onClick: s,
                },
                e
              ),
              t.map((h) =>
                o.createElement(
                  mt,
                  {
                    borderStyle: p.solid,
                    key: h,
                    sorted: r && a === h,
                    sortAscending: i,
                    onClick: l.bind(null, h),
                  },
                  h
                )
              )
            )
          )
        )
      );
    },
    kr = ({ data: e, columns: t }) => {
      let r = x("TableInspector"),
        [
          { sorted: n, sortIndexColumn: a, sortColumn: i, sortAscending: l },
          s,
        ] = U({
          sorted: !1,
          sortIndexColumn: !1,
          sortColumn: void 0,
          sortAscending: !1,
        }),
        u = H(() => {
          s(({ sortIndexColumn: y, sortAscending: O }) => ({
            sorted: !0,
            sortIndexColumn: !0,
            sortColumn: void 0,
            sortAscending: y ? !O : !0,
          }));
        }, []),
        p = H((y) => {
          s(({ sortColumn: O, sortAscending: v }) => ({
            sorted: !0,
            sortIndexColumn: !1,
            sortColumn: y,
            sortAscending: y === O ? !v : !0,
          }));
        }, []);
      if (typeof e != "object" || e === null)
        return o.createElement("div", null);
      let { rowHeaders: h, colHeaders: d } = Fr(e);
      t !== void 0 && (d = t);
      let E = h.map((y) => e[y]),
        _;
      if (
        (i !== void 0
          ? (_ = E.map((y, O) =>
              typeof y == "object" && y !== null ? [y[i], O] : [void 0, O]
            ))
          : a && (_ = h.map((y, O) => [h[O], O])),
        _ !== void 0)
      ) {
        let y = (v, N) => (or, ir) => {
            let Ye = v(or),
              qe = v(ir),
              Je = typeof Ye,
              Xe = typeof qe,
              Ze = (q, Ke) => (q < Ke ? -1 : q > Ke ? 1 : 0),
              Y;
            if (Je === Xe) Y = Ze(Ye, qe);
            else {
              let q = {
                string: 0,
                number: 1,
                object: 2,
                symbol: 3,
                boolean: 4,
                undefined: 5,
                function: 6,
              };
              Y = Ze(q[Je], q[Xe]);
            }
            return N || (Y = -Y), Y;
          },
          O = _.sort(y((v) => v[0], l)).map((v) => v[1]);
        (h = O.map((v) => h[v])), (E = O.map((v) => E[v]));
      }
      return o.createElement(
        "div",
        { style: r.base },
        o.createElement(Ur, {
          columns: d,
          sorted: n,
          sortIndexColumn: a,
          sortColumn: i,
          sortAscending: l,
          onTHClick: p,
          onIndexTHClick: u,
        }),
        o.createElement(zr, { rows: h, columns: d, rowsData: E })
      );
    },
    Gr = we(kr),
    Vr = 80,
    _t = (e) =>
      e.childNodes.length === 0 ||
      (e.childNodes.length === 1 &&
        e.childNodes[0].nodeType === Node.TEXT_NODE &&
        e.textContent.length < Vr),
    $r = ({ tagName: e, attributes: t, styles: r }) =>
      o.createElement(
        "span",
        { style: r.base },
        "<",
        o.createElement("span", { style: r.tagName }, e),
        (() => {
          if (t) {
            let n = [];
            for (let a = 0; a < t.length; a++) {
              let i = t[a];
              n.push(
                o.createElement(
                  "span",
                  { key: a },
                  " ",
                  o.createElement(
                    "span",
                    { style: r.htmlAttributeName },
                    i.name
                  ),
                  '="',
                  o.createElement(
                    "span",
                    { style: r.htmlAttributeValue },
                    i.value
                  ),
                  '"'
                )
              );
            }
            return n;
          }
        })(),
        ">"
      ),
    gt = ({ tagName: e, isChildNode: t = !1, styles: r }) =>
      o.createElement(
        "span",
        { style: Object.assign({}, r.base, t && r.offsetLeft) },
        "</",
        o.createElement("span", { style: r.tagName }, e),
        ">"
      ),
    Wr = {
      1: "ELEMENT_NODE",
      3: "TEXT_NODE",
      7: "PROCESSING_INSTRUCTION_NODE",
      8: "COMMENT_NODE",
      9: "DOCUMENT_NODE",
      10: "DOCUMENT_TYPE_NODE",
      11: "DOCUMENT_FRAGMENT_NODE",
    },
    Yr = ({ isCloseTag: e, data: t, expanded: r }) => {
      let n = x("DOMNodePreview");
      if (e)
        return o.createElement(gt, {
          styles: n.htmlCloseTag,
          isChildNode: !0,
          tagName: t.tagName,
        });
      switch (t.nodeType) {
        case Node.ELEMENT_NODE:
          return o.createElement(
            "span",
            null,
            o.createElement($r, {
              tagName: t.tagName,
              attributes: t.attributes,
              styles: n.htmlOpenTag,
            }),
            _t(t) ? t.textContent : !r && "\u2026",
            !r &&
              o.createElement(gt, {
                tagName: t.tagName,
                styles: n.htmlCloseTag,
              })
          );
        case Node.TEXT_NODE:
          return o.createElement("span", null, t.textContent);
        case Node.CDATA_SECTION_NODE:
          return o.createElement(
            "span",
            null,
            "<![CDATA[" + t.textContent + "]]>"
          );
        case Node.COMMENT_NODE:
          return o.createElement(
            "span",
            { style: n.htmlComment },
            "<!--",
            t.textContent,
            "-->"
          );
        case Node.PROCESSING_INSTRUCTION_NODE:
          return o.createElement("span", null, t.nodeName);
        case Node.DOCUMENT_TYPE_NODE:
          return o.createElement(
            "span",
            { style: n.htmlDoctype },
            "<!DOCTYPE ",
            t.name,
            t.publicId ? ` PUBLIC "${t.publicId}"` : "",
            !t.publicId && t.systemId ? " SYSTEM" : "",
            t.systemId ? ` "${t.systemId}"` : "",
            ">"
          );
        case Node.DOCUMENT_NODE:
          return o.createElement("span", null, t.nodeName);
        case Node.DOCUMENT_FRAGMENT_NODE:
          return o.createElement("span", null, t.nodeName);
        default:
          return o.createElement("span", null, Wr[t.nodeType]);
      }
    },
    qr = function* (e) {
      if (e && e.childNodes) {
        if (_t(e)) return;
        for (let r = 0; r < e.childNodes.length; r++) {
          let n = e.childNodes[r];
          (n.nodeType === Node.TEXT_NODE &&
            n.textContent.trim().length === 0) ||
            (yield { name: `${n.tagName}[${r}]`, data: n });
        }
        e.tagName &&
          (yield {
            name: "CLOSE_TAG",
            data: { tagName: e.tagName },
            isCloseTag: !0,
          });
      }
    },
    Jr = (e) =>
      o.createElement(vt, { nodeRenderer: Yr, dataIterator: qr, ...e }),
    Xr = we(Jr),
    Zr = vr(Tr()),
    Tt = ({ table: e = !1, data: t, ...r }) =>
      e
        ? o.createElement(Gr, { data: t, ...r })
        : (0, Zr.default)(t)
        ? o.createElement(Xr, { data: t, ...r })
        : o.createElement(Br, { data: t, ...r });
  m();
  g();
  b();
  var uu = __STORYBOOKCOMPONENTS__,
    {
      A: cu,
      ActionBar: Rt,
      AddonPanel: pu,
      Badge: fu,
      Bar: du,
      Blockquote: mu,
      Button: gu,
      Code: bu,
      DL: hu,
      Div: Eu,
      DocumentWrapper: yu,
      ErrorFormatter: vu,
      FlexBar: Ou,
      Form: _u,
      H1: Tu,
      H2: Ru,
      H3: Su,
      H4: Au,
      H5: xu,
      H6: Cu,
      HR: wu,
      IconButton: Nu,
      IconButtonSkeleton: Iu,
      Icons: Lu,
      Img: Mu,
      LI: Du,
      Link: Pu,
      ListItem: Bu,
      Loader: Fu,
      OL: zu,
      P: ju,
      Placeholder: Hu,
      Pre: Uu,
      ResetWrapper: ku,
      ScrollArea: St,
      Separator: Gu,
      Spaced: Vu,
      Span: $u,
      StorybookIcon: Wu,
      StorybookLogo: Yu,
      Symbols: qu,
      SyntaxHighlighter: Ju,
      TT: Xu,
      TabBar: Zu,
      TabButton: Ku,
      TabWrapper: Qu,
      Table: ec,
      Tabs: tc,
      TabsState: rc,
      TooltipLinkList: nc,
      TooltipMessage: ac,
      TooltipNote: oc,
      UL: ic,
      WithTooltip: sc,
      WithTooltipPure: lc,
      Zoom: uc,
      codeCommon: cc,
      components: pc,
      createCopyToClipboardFunction: fc,
      getStoryHref: dc,
      icons: mc,
      interleaveSeparators: gc,
      nameSpaceClassNames: bc,
      resetComponents: hc,
      withReset: Ec,
    } = __STORYBOOKCOMPONENTS__;
  var ar = dr(nr(), 1),
    ei = Q.div({
      display: "flex",
      padding: 0,
      borderLeft: "5px solid transparent",
      borderBottom: "1px solid transparent",
      transition: "all 0.1s",
      alignItems: "flex-start",
      whiteSpace: "pre",
    }),
    ti = Q.div(({ theme: e }) => ({
      backgroundColor: (0, ar.opacify)(0.5, e.appBorderColor),
      color: e.color.inverseText,
      fontSize: e.typography.size.s1,
      fontWeight: e.typography.weight.bold,
      lineHeight: 1,
      padding: "1px 5px",
      borderRadius: 20,
      margin: "2px 0px",
    })),
    ri = Q.div({ flex: 1, padding: "0 0 0 5px" }),
    ni = ({ children: e, className: t }) =>
      o.createElement(St, { horizontal: !0, vertical: !0, className: t }, e),
    ai = Q(ni)({ margin: 0, padding: "10px 5px 20px" }),
    oi = pt(({ theme: e, ...t }) =>
      o.createElement(Tt, {
        theme: e.addonActionsTheme || "chromeLight",
        table: !1,
        ...t,
      })
    ),
    ii = ({ actions: e, onClear: t }) =>
      o.createElement(
        at,
        null,
        o.createElement(
          ai,
          null,
          e.map((r) =>
            o.createElement(
              ei,
              { key: r.id },
              r.count > 1 && o.createElement(ti, null, r.count),
              o.createElement(
                ri,
                null,
                o.createElement(oi, {
                  sortObjectKeys: !0,
                  showNonenumerable: !1,
                  name: r.data.name,
                  data: r.data.args || r.data,
                })
              )
            )
          )
        ),
        o.createElement(Rt, { actionItems: [{ title: "Clear", onClick: t }] })
      ),
    si = (e, t) => {
      try {
        return V(e, t);
      } catch {
        return !1;
      }
    },
    li = class extends nt {
      constructor(e) {
        super(e),
          (this.handleStoryChange = () => {
            let { actions: t } = this.state;
            t.length > 0 &&
              t[0].options.clearOnStoryChange &&
              this.clearActions();
          }),
          (this.addAction = (t) => {
            this.setState((r) => {
              let n = [...r.actions],
                a = n.length && n[0];
              return (
                a && si(a.data, t.data)
                  ? a.count++
                  : ((t.count = 1), n.unshift(t)),
                { actions: n.slice(0, t.options.limit) }
              );
            });
          }),
          (this.clearActions = () => {
            let { api: t } = this.props;
            t.emit(ce), this.setState({ actions: [] });
          }),
          (this.mounted = !1),
          (this.state = { actions: [] });
      }
      componentDidMount() {
        this.mounted = !0;
        let { api: e } = this.props;
        e.on(X, this.addAction), e.on(K, this.handleStoryChange);
      }
      componentWillUnmount() {
        this.mounted = !1;
        let { api: e } = this.props;
        e.off(K, this.handleStoryChange), e.off(X, this.addAction);
      }
      render() {
        let { actions: e = [] } = this.state,
          { active: t } = this.props,
          r = { actions: e, onClear: this.clearActions };
        return t ? o.createElement(ii, { ...r }) : null;
      }
    };
  function ui({ count: e }) {
    let [t, r] = U(!1);
    lt({
      [X]: () => {
        r((a) => !a);
      },
      [K]: () => {
        r((a) => !a);
      },
      [ce]: () => {
        r((a) => !a);
      },
    });
    let n = e.current === 0 ? "" : ` (${e.current})`;
    return o.createElement(o.Fragment, null, "Actions", n);
  }
  _e.register(J, (e) => {
    let t = { current: 0 };
    e.on(K, (r) => {
      t.current = 0;
    }),
      e.on(X, () => {
        t.current += 1;
      }),
      e.on(ce, () => {
        t.current = 0;
      }),
      _e.addPanel(tt, {
        title: o.createElement(ui, { count: t }),
        id: "actions",
        type: st.PANEL,
        render: ({ active: r, key: n }) =>
          o.createElement(li, { key: n, api: e, active: !!r }),
        paramKey: et,
      });
  });
} catch (e) {
  console.error(
    "[Storybook] One of your manager-entries failed: " + import.meta.url,
    e
  );
}
//# sourceMappingURL=manager-bundle.js.map
