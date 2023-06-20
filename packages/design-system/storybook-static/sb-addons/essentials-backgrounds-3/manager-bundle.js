try {
  var oe = Object.create;
  var P = Object.defineProperty;
  var ae = Object.getOwnPropertyDescriptor;
  var ie = Object.getOwnPropertyNames;
  var se = Object.getPrototypeOf,
    le = Object.prototype.hasOwnProperty;
  var k = (e, t) => () => (e && (t = e((e = 0))), t);
  var I = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
  var ue = (e, t, r, o) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let n of ie(t))
        !le.call(e, n) &&
          n !== r &&
          P(e, n, {
            get: () => t[n],
            enumerable: !(o = ae(t, n)) || o.enumerable,
          });
    return e;
  };
  var N = (e, t, r) => (
    (r = e != null ? oe(se(e)) : {}),
    ue(
      t || !e || !e.__esModule
        ? P(r, "default", { value: e, enumerable: !0 })
        : r,
      e
    )
  );
  var a = k(() => {});
  var m,
    i = k(() => {
      m = {
        NODE_ENV: "production",
        NODE_PATH: [],
        STORYBOOK: "true",
        PUBLIC_URL: ".",
      };
    });
  var s = k(() => {});
  var D = I((E) => {
    "use strict";
    a();
    i();
    s();
    Object.defineProperty(E, "__esModule", { value: !0 });
    E.dedent = void 0;
    function H(e) {
      for (var t = [], r = 1; r < arguments.length; r++)
        t[r - 1] = arguments[r];
      var o = Array.from(typeof e == "string" ? [e] : e);
      o[o.length - 1] = o[o.length - 1].replace(/\r?\n([\t ]*)$/, "");
      var n = o.reduce(function (d, c) {
        var p = c.match(/\n([\t ]+|(?!\s).)/g);
        return p
          ? d.concat(
              p.map(function (b) {
                var h, T;
                return (T =
                  (h = b.match(/[\t ]/g)) === null || h === void 0
                    ? void 0
                    : h.length) !== null && T !== void 0
                  ? T
                  : 0;
              })
            )
          : d;
      }, []);
      if (n.length) {
        var l = new RegExp(
          `
[	 ]{` +
            Math.min.apply(Math, n) +
            "}",
          "g"
        );
        o = o.map(function (d) {
          return d.replace(
            l,
            `
`
          );
        });
      }
      o[0] = o[0].replace(/^\r?\n/, "");
      var u = o[0];
      return (
        t.forEach(function (d, c) {
          var p = u.match(/(?:^|\n)( *)$/),
            b = p ? p[1] : "",
            h = d;
          typeof d == "string" &&
            d.includes(`
`) &&
            (h = String(d)
              .split(
                `
`
              )
              .map(function (T, ne) {
                return ne === 0 ? T : "" + b + T;
              }).join(`
`)),
            (u += h + o[c + 1]);
        }),
        u
      );
    }
    E.dedent = H;
    E.default = H;
  });
  var j = I((Xt, $) => {
    a();
    i();
    s();
    function _() {
      return (this.list = []), (this.lastItem = void 0), (this.size = 0), this;
    }
    _.prototype.get = function (e) {
      var t;
      if (this.lastItem && this.isEqual(this.lastItem.key, e))
        return this.lastItem.val;
      if (((t = this.indexOf(e)), t >= 0))
        return (this.lastItem = this.list[t]), this.list[t].val;
    };
    _.prototype.set = function (e, t) {
      var r;
      return this.lastItem && this.isEqual(this.lastItem.key, e)
        ? ((this.lastItem.val = t), this)
        : ((r = this.indexOf(e)),
          r >= 0
            ? ((this.lastItem = this.list[r]), (this.list[r].val = t), this)
            : ((this.lastItem = { key: e, val: t }),
              this.list.push(this.lastItem),
              this.size++,
              this));
    };
    _.prototype.delete = function (e) {
      var t;
      if (
        (this.lastItem &&
          this.isEqual(this.lastItem.key, e) &&
          (this.lastItem = void 0),
        (t = this.indexOf(e)),
        t >= 0)
      )
        return this.size--, this.list.splice(t, 1)[0];
    };
    _.prototype.has = function (e) {
      var t;
      return this.lastItem && this.isEqual(this.lastItem.key, e)
        ? !0
        : ((t = this.indexOf(e)),
          t >= 0 ? ((this.lastItem = this.list[t]), !0) : !1);
    };
    _.prototype.forEach = function (e, t) {
      var r;
      for (r = 0; r < this.size; r++)
        e.call(t || this, this.list[r].val, this.list[r].key, this);
    };
    _.prototype.indexOf = function (e) {
      var t;
      for (t = 0; t < this.size; t++)
        if (this.isEqual(this.list[t].key, e)) return t;
      return -1;
    };
    _.prototype.isEqual = function (e, t) {
      return e === t || (e !== e && t !== t);
    };
    $.exports = _;
  });
  var V = I((nr, U) => {
    a();
    i();
    s();
    U.exports = function (e) {
      if (typeof Map != "function" || e) {
        var t = j();
        return new t();
      } else return new Map();
    };
  });
  var Q = I((sr, J) => {
    a();
    i();
    s();
    var Z = V();
    J.exports = function (e) {
      var t = new Z(m.FORCE_SIMILAR_INSTEAD_OF_MAP === "true"),
        r = [];
      return function (o) {
        var n = function () {
          var l = t,
            u,
            d,
            c = arguments.length - 1,
            p = Array(c + 1),
            b = !0,
            h;
          if ((n.numArgs || n.numArgs === 0) && n.numArgs !== c + 1)
            throw new Error(
              "Memoizerific functions should always be called with the same number of arguments"
            );
          for (h = 0; h < c; h++) {
            if (
              ((p[h] = { cacheItem: l, arg: arguments[h] }),
              l.has(arguments[h]))
            ) {
              l = l.get(arguments[h]);
              continue;
            }
            (b = !1),
              (u = new Z(m.FORCE_SIMILAR_INSTEAD_OF_MAP === "true")),
              l.set(arguments[h], u),
              (l = u);
          }
          return (
            b && (l.has(arguments[c]) ? (d = l.get(arguments[c])) : (b = !1)),
            b || ((d = o.apply(null, arguments)), l.set(arguments[c], d)),
            e > 0 &&
              ((p[c] = { cacheItem: l, arg: arguments[c] }),
              b ? de(r, p) : r.push(p),
              r.length > e && me(r.shift())),
            (n.wasMemoized = b),
            (n.numArgs = c + 1),
            d
          );
        };
        return (
          (n.limit = e), (n.wasMemoized = !1), (n.cache = t), (n.lru = r), n
        );
      };
    };
    function de(e, t) {
      var r = e.length,
        o = t.length,
        n,
        l,
        u;
      for (l = 0; l < r; l++) {
        for (n = !0, u = 0; u < o; u++)
          if (!he(e[l][u].arg, t[u].arg)) {
            n = !1;
            break;
          }
        if (n) break;
      }
      e.push(e.splice(l, 1)[0]);
    }
    function me(e) {
      var t = e.length,
        r = e[t - 1],
        o,
        n;
      for (
        r.cacheItem.delete(r.arg), n = t - 2;
        n >= 0 && ((r = e[n]), (o = r.cacheItem.get(r.arg)), !o || !o.size);
        n--
      )
        r.cacheItem.delete(r.arg);
    }
    function he(e, t) {
      return e === t || (e !== e && t !== t);
    }
  });
  a();
  i();
  s();
  a();
  i();
  s();
  a();
  i();
  s();
  a();
  i();
  s();
  a();
  i();
  s();
  var G = (() => {
    let e;
    return (
      typeof window < "u"
        ? (e = window)
        : typeof globalThis < "u"
        ? (e = globalThis)
        : typeof window < "u"
        ? (e = window)
        : typeof self < "u"
        ? (e = self)
        : (e = {}),
      e
    );
  })();
  var F = N(D(), 1);
  a();
  i();
  s();
  var Le = __STORYBOOKCLIENTLOGGER__,
    {
      deprecate: we,
      logger: O,
      once: Pe,
      pretty: Ne,
    } = __STORYBOOKCLIENTLOGGER__;
  var v = "storybook/background",
    S = "backgrounds",
    { document: Ye, window: qe } = G;
  var z = (e, t = [], r) => {
    if (e === "transparent") return "transparent";
    if (t.find((n) => n.value === e)) return e;
    let o = t.find((n) => n.name === r);
    if (o) return o.value;
    if (r) {
      let n = t.map((l) => l.name).join(", ");
      O.warn(F.dedent`
        Backgrounds Addon: could not find the default color "${r}".
        These are the available colors for your story based on your configuration:
        ${n}.
      `);
    }
    return "transparent";
  };
  a();
  i();
  s();
  var y = __REACT__,
    {
      Children: Ve,
      Component: Ze,
      Fragment: C,
      Profiler: Je,
      PureComponent: Qe,
      StrictMode: Xe,
      Suspense: et,
      __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: tt,
      cloneElement: rt,
      createContext: nt,
      createElement: ot,
      createFactory: at,
      createRef: it,
      forwardRef: st,
      isValidElement: lt,
      lazy: ut,
      memo: A,
      useCallback: K,
      useContext: ct,
      useDebugValue: dt,
      useEffect: mt,
      useImperativeHandle: ht,
      useLayoutEffect: pt,
      useMemo: Y,
      useReducer: ft,
      useRef: gt,
      useState: q,
      version: yt,
    } = __REACT__;
  a();
  i();
  s();
  var Et = __STORYBOOKAPI__,
    {
      ActiveTabs: It,
      Consumer: Ot,
      ManagerContext: kt,
      Provider: vt,
      addons: M,
      combineParameters: Ct,
      controlOrMetaKey: At,
      controlOrMetaSymbol: Mt,
      eventMatchesShortcut: Bt,
      eventToShortcut: Rt,
      isMacLike: xt,
      isShortcutTaken: Lt,
      keyToSymbol: wt,
      merge: Pt,
      mockChannel: Nt,
      optionOrAltSymbol: Gt,
      shortcutMatchesShortcut: Ht,
      shortcutToHumanString: Dt,
      types: W,
      useAddonState: Ft,
      useArgTypes: zt,
      useArgs: Kt,
      useChannel: Yt,
      useGlobalTypes: qt,
      useGlobals: B,
      useParameter: R,
      useSharedState: Wt,
      useStoryPrepared: $t,
      useStorybookApi: jt,
      useStorybookState: Ut,
    } = __STORYBOOKAPI__;
  var w = N(Q(), 1);
  a();
  i();
  s();
  var dr = __STORYBOOKCOMPONENTS__,
    {
      A: mr,
      ActionBar: hr,
      AddonPanel: pr,
      Badge: fr,
      Bar: gr,
      Blockquote: yr,
      Button: br,
      Code: Sr,
      DL: _r,
      Div: Tr,
      DocumentWrapper: Er,
      ErrorFormatter: Ir,
      FlexBar: Or,
      Form: kr,
      H1: vr,
      H2: Cr,
      H3: Ar,
      H4: Mr,
      H5: Br,
      H6: Rr,
      HR: xr,
      IconButton: x,
      IconButtonSkeleton: Lr,
      Icons: L,
      Img: wr,
      LI: Pr,
      Link: Nr,
      ListItem: Gr,
      Loader: Hr,
      OL: Dr,
      P: Fr,
      Placeholder: zr,
      Pre: Kr,
      ResetWrapper: Yr,
      ScrollArea: qr,
      Separator: Wr,
      Spaced: $r,
      Span: jr,
      StorybookIcon: Ur,
      StorybookLogo: Vr,
      Symbols: Zr,
      SyntaxHighlighter: Jr,
      TT: Qr,
      TabBar: Xr,
      TabButton: en,
      TabWrapper: tn,
      Table: rn,
      Tabs: nn,
      TabsState: on,
      TooltipLinkList: X,
      TooltipMessage: an,
      TooltipNote: sn,
      UL: ln,
      WithTooltip: ee,
      WithTooltipPure: un,
      Zoom: cn,
      codeCommon: dn,
      components: mn,
      createCopyToClipboardFunction: hn,
      getStoryHref: pn,
      icons: fn,
      interleaveSeparators: gn,
      nameSpaceClassNames: yn,
      resetComponents: bn,
      withReset: Sn,
    } = __STORYBOOKCOMPONENTS__;
  a();
  i();
  s();
  var On = __STORYBOOKTHEMING__,
    {
      CacheProvider: kn,
      ClassNames: vn,
      Global: Cn,
      ThemeProvider: An,
      background: Mn,
      color: Bn,
      convert: Rn,
      create: xn,
      createCache: Ln,
      createGlobal: wn,
      createReset: Pn,
      css: Nn,
      darken: Gn,
      ensure: Hn,
      ignoreSsrWarning: Dn,
      isPropValid: Fn,
      jsx: zn,
      keyframes: Kn,
      lighten: Yn,
      styled: te,
      themes: qn,
      typography: Wn,
      useTheme: $n,
      withTheme: jn,
    } = __STORYBOOKTHEMING__;
  var pe = te.span(
      ({ background: e }) => ({
        borderRadius: "1rem",
        display: "block",
        height: "1rem",
        width: "1rem",
        background: e,
      }),
      ({ theme: e }) => ({ boxShadow: `${e.appBorderColor} 0 0 0 1px inset` })
    ),
    re = (0, w.default)(1e3)((e, t, r, o, n, l) => ({
      id: e || t,
      title: t,
      onClick: () => {
        n({ selected: r, name: t });
      },
      value: r,
      right: o ? y.createElement(pe, { background: r }) : void 0,
      active: l,
    })),
    fe = (0, w.default)(10)((e, t, r) => {
      let o = e.map(({ name: n, value: l }) => re(null, n, l, !0, r, l === t));
      return t !== "transparent"
        ? [re("reset", "Clear background", "transparent", null, r, !1), ...o]
        : o;
    }),
    ge = { default: null, disable: !0, values: [] },
    ye = A(function () {
      let e = R(S, ge),
        [t, r] = q(!1),
        [o, n] = B(),
        l = o[S]?.value,
        u = Y(() => z(l, e.values, e.default), [e, l]);
      Array.isArray(e) &&
        O.warn(
          "Addon Backgrounds api has changed in Storybook 6.0. Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md"
        );
      let d = K(
        (c) => {
          n({ [S]: { ...o[S], value: c } });
        },
        [e, o, n]
      );
      return e.disable
        ? null
        : y.createElement(
            C,
            null,
            y.createElement(
              ee,
              {
                placement: "top",
                closeOnOutsideClick: !0,
                tooltip: ({ onHide: c }) =>
                  y.createElement(X, {
                    links: fe(e.values, u, ({ selected: p }) => {
                      u !== p && d(p), c();
                    }),
                  }),
                onVisibleChange: r,
              },
              y.createElement(
                x,
                {
                  key: "background",
                  title: "Change the background of the preview",
                  active: u !== "transparent" || t,
                },
                y.createElement(L, { icon: "photo" })
              )
            )
          );
    }),
    be = A(function () {
      let [e, t] = B(),
        { grid: r } = R(S, { grid: { disable: !1 } });
      if (r?.disable) return null;
      let o = e[S]?.grid || !1;
      return y.createElement(
        x,
        {
          key: "background",
          active: o,
          title: "Apply a grid to the preview",
          onClick: () => t({ [S]: { ...e[S], grid: !o } }),
        },
        y.createElement(L, { icon: "grid" })
      );
    });
  M.register(v, () => {
    M.add(v, {
      title: "Backgrounds",
      id: "backgrounds",
      type: W.TOOL,
      match: ({ viewMode: e }) => !!(e && e.match(/^(story|docs)$/)),
      render: () =>
        y.createElement(
          C,
          null,
          y.createElement(ye, null),
          y.createElement(be, null)
        ),
    });
  });
} catch (e) {
  console.error(
    "[Storybook] One of your manager-entries failed: " + import.meta.url,
    e
  );
}
//# sourceMappingURL=manager-bundle.js.map
