(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [433],
  {
    19: (t, e, i) => {
      "use strict";
      i.d(e, {
        Du: () => G,
        Fr: () => o.Fr,
        If: () => U,
        Jh: () => N,
        L$: () => R,
        LU: () => O,
        Ld: () => w,
        MN: () => f,
        OZ: () => l,
        PF: () => y,
        R2: () => X,
        S0: () => B,
        U5: () => A,
        Uf: () => E,
        Xk: () => b,
        _S: () => D,
        bk: () => s,
        dZ: () => M,
        eE: () => d,
        eb: () => F,
        f3: () => S,
        f4: () => g,
        gF: () => x,
        hY: () => a,
        p6: () => P,
        rQ: () => T,
        ss: () => m,
        t6: () => L,
        v5: () => k,
        xp: () => v,
      });
      var r,
        n,
        o = i(8181),
        s = i(6519),
        a = i(5650),
        h = i(2313),
        u = i(4987),
        l = { parse: h.parse, format: h.format, resolve: h.resolve };
      ((o.W0.RETINA_PREFIX = /@([0-9\.]+)x/),
        (o.W0.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT = !1));
      var c = !1,
        p = "6.5.10";
      function d(t) {
        var e;
        c ||
          (o.W0.ADAPTER.getNavigator()
            .userAgent.toLowerCase()
            .indexOf("chrome") > -1
            ? (e = globalThis.console).log.apply(e, [
                "\n %c %c %c PixiJS " +
                  p +
                  " - ✰ " +
                  t +
                  " ✰  %c  %c  http://www.pixijs.com/  %c %c ♥%c♥%c♥ \n\n",
                "background: #ff66a5; padding:5px 0;",
                "background: #ff66a5; padding:5px 0;",
                "color: #ff66a5; background: #030307; padding:5px 0;",
                "background: #ff66a5; padding:5px 0;",
                "background: #ffc3dc; padding:5px 0;",
                "background: #ff66a5; padding:5px 0;",
                "color: #ff2424; background: #fff; padding:5px 0;",
                "color: #ff2424; background: #fff; padding:5px 0;",
                "color: #ff2424; background: #fff; padding:5px 0;",
              ])
            : globalThis.console &&
              globalThis.console.log(
                "PixiJS " + p + " - " + t + " - http://www.pixijs.com/",
              ),
          (c = !0));
      }
      function f() {
        return (
          void 0 === r &&
            (r = (function () {
              var t = {
                stencil: !0,
                failIfMajorPerformanceCaveat:
                  o.W0.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT,
              };
              try {
                if (!o.W0.ADAPTER.getWebGLRenderingContext()) return !1;
                var e = o.W0.ADAPTER.createCanvas(),
                  i =
                    e.getContext("webgl", t) ||
                    e.getContext("experimental-webgl", t),
                  r = !!(i && i.getContextAttributes().stencil);
                if (i) {
                  var n = i.getExtension("WEBGL_lose_context");
                  n && n.loseContext();
                }
                return ((i = null), r);
              } catch (t) {
                return !1;
              }
            })()),
          r
        );
      }
      var _ = {
        aliceblue: "#f0f8ff",
        antiquewhite: "#faebd7",
        aqua: "#00ffff",
        aquamarine: "#7fffd4",
        azure: "#f0ffff",
        beige: "#f5f5dc",
        bisque: "#ffe4c4",
        black: "#000000",
        blanchedalmond: "#ffebcd",
        blue: "#0000ff",
        blueviolet: "#8a2be2",
        brown: "#a52a2a",
        burlywood: "#deb887",
        cadetblue: "#5f9ea0",
        chartreuse: "#7fff00",
        chocolate: "#d2691e",
        coral: "#ff7f50",
        cornflowerblue: "#6495ed",
        cornsilk: "#fff8dc",
        crimson: "#dc143c",
        cyan: "#00ffff",
        darkblue: "#00008b",
        darkcyan: "#008b8b",
        darkgoldenrod: "#b8860b",
        darkgray: "#a9a9a9",
        darkgreen: "#006400",
        darkgrey: "#a9a9a9",
        darkkhaki: "#bdb76b",
        darkmagenta: "#8b008b",
        darkolivegreen: "#556b2f",
        darkorange: "#ff8c00",
        darkorchid: "#9932cc",
        darkred: "#8b0000",
        darksalmon: "#e9967a",
        darkseagreen: "#8fbc8f",
        darkslateblue: "#483d8b",
        darkslategray: "#2f4f4f",
        darkslategrey: "#2f4f4f",
        darkturquoise: "#00ced1",
        darkviolet: "#9400d3",
        deeppink: "#ff1493",
        deepskyblue: "#00bfff",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1e90ff",
        firebrick: "#b22222",
        floralwhite: "#fffaf0",
        forestgreen: "#228b22",
        fuchsia: "#ff00ff",
        gainsboro: "#dcdcdc",
        ghostwhite: "#f8f8ff",
        goldenrod: "#daa520",
        gold: "#ffd700",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#adff2f",
        grey: "#808080",
        honeydew: "#f0fff0",
        hotpink: "#ff69b4",
        indianred: "#cd5c5c",
        indigo: "#4b0082",
        ivory: "#fffff0",
        khaki: "#f0e68c",
        lavenderblush: "#fff0f5",
        lavender: "#e6e6fa",
        lawngreen: "#7cfc00",
        lemonchiffon: "#fffacd",
        lightblue: "#add8e6",
        lightcoral: "#f08080",
        lightcyan: "#e0ffff",
        lightgoldenrodyellow: "#fafad2",
        lightgray: "#d3d3d3",
        lightgreen: "#90ee90",
        lightgrey: "#d3d3d3",
        lightpink: "#ffb6c1",
        lightsalmon: "#ffa07a",
        lightseagreen: "#20b2aa",
        lightskyblue: "#87cefa",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#b0c4de",
        lightyellow: "#ffffe0",
        lime: "#00ff00",
        limegreen: "#32cd32",
        linen: "#faf0e6",
        magenta: "#ff00ff",
        maroon: "#800000",
        mediumaquamarine: "#66cdaa",
        mediumblue: "#0000cd",
        mediumorchid: "#ba55d3",
        mediumpurple: "#9370db",
        mediumseagreen: "#3cb371",
        mediumslateblue: "#7b68ee",
        mediumspringgreen: "#00fa9a",
        mediumturquoise: "#48d1cc",
        mediumvioletred: "#c71585",
        midnightblue: "#191970",
        mintcream: "#f5fffa",
        mistyrose: "#ffe4e1",
        moccasin: "#ffe4b5",
        navajowhite: "#ffdead",
        navy: "#000080",
        oldlace: "#fdf5e6",
        olive: "#808000",
        olivedrab: "#6b8e23",
        orange: "#ffa500",
        orangered: "#ff4500",
        orchid: "#da70d6",
        palegoldenrod: "#eee8aa",
        palegreen: "#98fb98",
        paleturquoise: "#afeeee",
        palevioletred: "#db7093",
        papayawhip: "#ffefd5",
        peachpuff: "#ffdab9",
        peru: "#cd853f",
        pink: "#ffc0cb",
        plum: "#dda0dd",
        powderblue: "#b0e0e6",
        purple: "#800080",
        rebeccapurple: "#663399",
        red: "#ff0000",
        rosybrown: "#bc8f8f",
        royalblue: "#4169e1",
        saddlebrown: "#8b4513",
        salmon: "#fa8072",
        sandybrown: "#f4a460",
        seagreen: "#2e8b57",
        seashell: "#fff5ee",
        sienna: "#a0522d",
        silver: "#c0c0c0",
        skyblue: "#87ceeb",
        slateblue: "#6a5acd",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#fffafa",
        springgreen: "#00ff7f",
        steelblue: "#4682b4",
        tan: "#d2b48c",
        teal: "#008080",
        thistle: "#d8bfd8",
        tomato: "#ff6347",
        turquoise: "#40e0d0",
        violet: "#ee82ee",
        wheat: "#f5deb3",
        white: "#ffffff",
        whitesmoke: "#f5f5f5",
        yellow: "#ffff00",
        yellowgreen: "#9acd32",
      };
      function v(t, e) {
        return (
          void 0 === e && (e = []),
          (e[0] = ((t >> 16) & 255) / 255),
          (e[1] = ((t >> 8) & 255) / 255),
          (e[2] = (255 & t) / 255),
          e
        );
      }
      function y(t) {
        var e = t.toString(16);
        return "#" + (e = "000000".substring(0, 6 - e.length) + e);
      }
      function g(t) {
        return (
          "string" == typeof t &&
            "#" === (t = _[t.toLowerCase()] || t)[0] &&
            (t = t.slice(1)),
          parseInt(t, 16)
        );
      }
      var m = (function () {
        for (var t = [], e = [], i = 0; i < 32; i++) ((t[i] = i), (e[i] = i));
        ((t[u.B9.NORMAL_NPM] = u.B9.NORMAL),
          (t[u.B9.ADD_NPM] = u.B9.ADD),
          (t[u.B9.SCREEN_NPM] = u.B9.SCREEN),
          (e[u.B9.NORMAL] = u.B9.NORMAL_NPM),
          (e[u.B9.ADD] = u.B9.ADD_NPM),
          (e[u.B9.SCREEN] = u.B9.SCREEN_NPM));
        var r = [];
        return (r.push(e), r.push(t), r);
      })();
      function b(t, e) {
        return m[+!!e][t];
      }
      function x(t, e, i, r) {
        return (
          (i = i || new Float32Array(4)),
          r || void 0 === r
            ? ((i[0] = t[0] * e), (i[1] = t[1] * e), (i[2] = t[2] * e))
            : ((i[0] = t[0]), (i[1] = t[1]), (i[2] = t[2])),
          (i[3] = e),
          i
        );
      }
      function T(t, e) {
        if (1 === e) return ((255 * e) << 24) + t;
        if (0 === e) return 0;
        var i = (t >> 16) & 255,
          r = (t >> 8) & 255,
          n = 255 & t;
        return (
          (i = (i * e + 0.5) | 0),
          (r = (r * e + 0.5) | 0),
          (n = (n * e + 0.5) | 0),
          ((255 * e) << 24) + (i << 16) + (r << 8) + n
        );
      }
      function E(t, e, i, r) {
        return (
          ((i = i || new Float32Array(4))[0] = ((t >> 16) & 255) / 255),
          (i[1] = ((t >> 8) & 255) / 255),
          (i[2] = (255 & t) / 255),
          (r || void 0 === r) && ((i[0] *= e), (i[1] *= e), (i[2] *= e)),
          (i[3] = e),
          i
        );
      }
      function O(t, e) {
        void 0 === e && (e = null);
        var i = 6 * t;
        if ((e = e || new Uint16Array(i)).length !== i)
          throw Error(
            "Out buffer length is incorrect, got " +
              e.length +
              " and expected " +
              i,
          );
        for (var r = 0, n = 0; r < i; r += 6, n += 4)
          ((e[r + 0] = n + 0),
            (e[r + 1] = n + 1),
            (e[r + 2] = n + 2),
            (e[r + 3] = n + 0),
            (e[r + 4] = n + 2),
            (e[r + 5] = n + 3));
        return e;
      }
      function R(t) {
        if (4 === t.BYTES_PER_ELEMENT)
          return t instanceof Float32Array
            ? "Float32Array"
            : t instanceof Uint32Array
              ? "Uint32Array"
              : "Int32Array";
        if (2 === t.BYTES_PER_ELEMENT) {
          if (t instanceof Uint16Array) return "Uint16Array";
        } else if (1 === t.BYTES_PER_ELEMENT && t instanceof Uint8Array)
          return "Uint8Array";
        return null;
      }
      function A(t) {
        return (
          (t += +(0 === t)),
          --t,
          (t |= t >>> 1),
          (t |= t >>> 2),
          (t |= t >>> 4),
          (t |= t >>> 8),
          (t |= t >>> 16) + 1
        );
      }
      function S(t) {
        return !(t & (t - 1)) && !!t;
      }
      function P(t) {
        var e = (t > 65535) << 4,
          i = ((t >>>= e) > 255) << 3;
        return (
          (t >>>= i),
          (e |= i),
          (i = (t > 15) << 2),
          (t >>>= i),
          (e |= i),
          (i = (t > 3) << 1),
          (t >>>= i),
          (e |= i) | (t >> 1)
        );
      }
      function M(t, e, i) {
        var r,
          n = t.length;
        if (!(e >= n) && 0 !== i) {
          i = e + i > n ? n - e : i;
          var o = n - i;
          for (r = e; r < o; ++r) t[r] = t[r + i];
          t.length = o;
        }
      }
      function D(t) {
        return 0 === t ? 0 : t < 0 ? -1 : 1;
      }
      (Float32Array, Uint32Array, Int32Array, Uint8Array);
      var I = 0;
      function w() {
        return ++I;
      }
      var C = {};
      function L(t, e, i) {
        if ((void 0 === i && (i = 3), !C[e])) {
          var r = Error().stack;
          (void 0 === r
            ? console.warn(
                "PixiJS Deprecation Warning: ",
                e + "\nDeprecated since v" + t,
              )
            : ((r = r.split("\n").splice(i).join("\n")),
              console.groupCollapsed
                ? (console.groupCollapsed(
                    "%cPixiJS Deprecation Warning: %c%s",
                    "color:#614108;background:#fffbe6",
                    "font-weight:normal;color:#614108;background:#fffbe6",
                    e + "\nDeprecated since v" + t,
                  ),
                  console.warn(r),
                  console.groupEnd())
                : (console.warn(
                    "PixiJS Deprecation Warning: ",
                    e + "\nDeprecated since v" + t,
                  ),
                  console.warn(r))),
            (C[e] = !0));
        }
      }
      var N = {},
        F = Object.create(null),
        G = Object.create(null),
        B = (function () {
          function t(t, e, i) {
            ((this.canvas = o.W0.ADAPTER.createCanvas()),
              (this.context = this.canvas.getContext("2d")),
              (this.resolution = i || o.W0.RESOLUTION),
              this.resize(t, e));
          }
          return (
            (t.prototype.clear = function () {
              (this.context.setTransform(1, 0, 0, 1, 0, 0),
                this.context.clearRect(
                  0,
                  0,
                  this.canvas.width,
                  this.canvas.height,
                ));
            }),
            (t.prototype.resize = function (t, e) {
              ((this.canvas.width = Math.round(t * this.resolution)),
                (this.canvas.height = Math.round(e * this.resolution)));
            }),
            (t.prototype.destroy = function () {
              ((this.context = null), (this.canvas = null));
            }),
            Object.defineProperty(t.prototype, "width", {
              get: function () {
                return this.canvas.width;
              },
              set: function (t) {
                this.canvas.width = Math.round(t);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "height", {
              get: function () {
                return this.canvas.height;
              },
              set: function (t) {
                this.canvas.height = Math.round(t);
              },
              enumerable: !1,
              configurable: !0,
            }),
            t
          );
        })();
      function X(t) {
        var e,
          i,
          r,
          n = t.width,
          o = t.height,
          s = t.getContext("2d", { willReadFrequently: !0 }),
          a = s.getImageData(0, 0, n, o).data,
          h = a.length,
          u = { top: null, left: null, right: null, bottom: null },
          l = null;
        for (e = 0; e < h; e += 4)
          0 !== a[e + 3] &&
            ((i = (e / 4) % n),
            (r = ~~(e / 4 / n)),
            null === u.top && (u.top = r),
            null === u.left ? (u.left = i) : i < u.left && (u.left = i),
            null === u.right
              ? (u.right = i + 1)
              : u.right < i && (u.right = i + 1),
            null === u.bottom
              ? (u.bottom = r)
              : u.bottom < r && (u.bottom = r));
        return (
          null !== u.top &&
            ((n = u.right - u.left),
            (o = u.bottom - u.top + 1),
            (l = s.getImageData(u.left, u.top, n, o))),
          { height: o, width: n, data: l }
        );
      }
      function U(t, e) {
        if (
          (void 0 === e && (e = globalThis.location), 0 === t.indexOf("data:"))
        )
          return "";
        ((e = e || globalThis.location),
          n || (n = document.createElement("a")),
          (n.href = t));
        var i = l.parse(n.href),
          r = (!i.port && "" === e.port) || i.port === e.port;
        return i.hostname === e.hostname && r && i.protocol === e.protocol
          ? ""
          : "anonymous";
      }
      function k(t, e) {
        var i = o.W0.RETINA_PREFIX.exec(t);
        return i ? parseFloat(i[1]) : void 0 !== e ? e : 1;
      }
    },
    2313: (t, e, i) => {
      !(function () {
        var e = {
            452: function (t) {
              "use strict";
              t.exports = i(2521);
            },
          },
          r = {};
        function n(t) {
          var i = r[t];
          if (void 0 !== i) return i.exports;
          var o = (r[t] = { exports: {} }),
            s = !0;
          try {
            (e[t](o, o.exports, n), (s = !1));
          } finally {
            s && delete r[t];
          }
          return o.exports;
        }
        n.ab = "//";
        var o = {};
        (!(function () {
          var t,
            e =
              (t = n(452)) && "object" == typeof t && "default" in t
                ? t.default
                : t,
            i = /https?|ftp|gopher|file/;
          function r(t) {
            "string" == typeof t && (t = y(t));
            var r,
              n,
              o,
              s,
              a,
              h,
              u,
              l,
              c,
              p =
                ((n = (r = t).auth),
                (o = r.hostname),
                (s = r.protocol || ""),
                (a = r.pathname || ""),
                (h = r.hash || ""),
                (u = r.query || ""),
                (l = !1),
                (n = n ? encodeURIComponent(n).replace(/%3A/i, ":") + "@" : ""),
                r.host
                  ? (l = n + r.host)
                  : o &&
                    ((l = n + (~o.indexOf(":") ? "[" + o + "]" : o)),
                    r.port && (l += ":" + r.port)),
                u && "object" == typeof u && (u = e.encode(u)),
                (c = r.search || (u && "?" + u) || ""),
                s && ":" !== s.substr(-1) && (s += ":"),
                r.slashes || ((!s || i.test(s)) && !1 !== l)
                  ? ((l = "//" + (l || "")), a && "/" !== a[0] && (a = "/" + a))
                  : l || (l = ""),
                h && "#" !== h[0] && (h = "#" + h),
                c && "?" !== c[0] && (c = "?" + c),
                {
                  protocol: s,
                  host: l,
                  pathname: (a = a.replace(/[?#]/g, encodeURIComponent)),
                  search: (c = c.replace("#", "%23")),
                  hash: h,
                });
            return "" + p.protocol + p.host + p.pathname + p.search + p.hash;
          }
          var s = "http://",
            a = s + "w.w",
            h = /^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,
            u = /https?|ftp|gopher|file/;
          function l(t, e) {
            var i = "string" == typeof t ? y(t) : t;
            t = "object" == typeof t ? r(t) : t;
            var n = y(e),
              o = "";
            (i.protocol &&
              !i.slashes &&
              ((o = i.protocol),
              (t = t.replace(i.protocol, "")),
              (o += "/" === e[0] || "/" === t[0] ? "/" : "")),
              o &&
                n.protocol &&
                ((o = ""),
                n.slashes ||
                  ((o = n.protocol), (e = e.replace(n.protocol, "")))));
            var l = t.match(h);
            l &&
              !n.protocol &&
              ((t = t.substr((o = l[1] + (l[2] || "")).length)),
              /^\/\/[^/]/.test(e) && (o = o.slice(0, -1)));
            var c = new URL(t, a + "/"),
              p = new URL(e, c).toString().replace(a, ""),
              d = n.protocol || i.protocol;
            return (
              (d += i.slashes || n.slashes ? "//" : ""),
              !o && d ? (p = p.replace(s, d)) : o && (p = p.replace(s, "")),
              u.test(p) ||
                ~e.indexOf(".") ||
                "/" === t.slice(-1) ||
                "/" === e.slice(-1) ||
                "/" !== p.slice(-1) ||
                (p = p.slice(0, -1)),
              o && (p = o + ("/" === p[0] ? p.substr(1) : p)),
              p
            );
          }
          function c() {}
          ((c.prototype.parse = y),
            (c.prototype.format = r),
            (c.prototype.resolve = l),
            (c.prototype.resolveObject = l));
          var p = /^https?|ftp|gopher|file/,
            d = /^(.*?)([#?].*)/,
            f = /^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,
            _ = /^([a-z0-9.+-]*:)?\/\/\/*/i,
            v = /^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;
          function y(t, i, n) {
            if (
              (void 0 === i && (i = !1),
              void 0 === n && (n = !1),
              t && "object" == typeof t && t instanceof c)
            )
              return t;
            var o = (t = t.trim()).match(d);
            ((t = o ? o[1].replace(/\\/g, "/") + o[2] : t.replace(/\\/g, "/")),
              v.test(t) && "/" !== t.slice(-1) && (t += "/"));
            var s = !/(^javascript)/.test(t) && t.match(f),
              h = _.test(t),
              u = "";
            s &&
              (p.test(s[1]) ||
                ((u = s[1].toLowerCase()), (t = "" + s[2] + s[3])),
              s[2] ||
                ((h = !1),
                p.test(s[1])
                  ? ((u = s[1]), (t = "" + s[3]))
                  : (t = "//" + s[3])),
              (3 !== s[2].length && 1 !== s[2].length) ||
                ((u = s[1]), (t = "/" + s[3])));
            var l,
              y = (o ? o[1] : t).match(/^https?:\/\/[^/]+(:[0-9]+)(?=\/|$)/),
              g = y && y[1],
              m = new c(),
              b = "",
              x = "";
            try {
              l = new URL(t);
            } catch (e) {
              ((b = e),
                u ||
                  n ||
                  !/^\/\//.test(t) ||
                  /^\/\/.+[@.]/.test(t) ||
                  ((x = "/"), (t = t.substr(1))));
              try {
                l = new URL(t, a);
              } catch (t) {
                return ((m.protocol = u), (m.href = u), m);
              }
            }
            ((m.slashes = h && !x),
              (m.host = "w.w" === l.host ? "" : l.host),
              (m.hostname =
                "w.w" === l.hostname ? "" : l.hostname.replace(/(\[|\])/g, "")),
              (m.protocol = b ? u || null : l.protocol),
              (m.search = l.search.replace(/\\/g, "%5C")),
              (m.hash = l.hash.replace(/\\/g, "%5C")));
            var T = t.split("#");
            (!m.search && ~T[0].indexOf("?") && (m.search = "?"),
              m.hash || "" !== T[1] || (m.hash = "#"),
              (m.query = i ? e.decode(l.search.substr(1)) : m.search.substr(1)),
              (m.pathname =
                x +
                (s
                  ? l.pathname
                      .replace(/['^|`]/g, function (t) {
                        return "%" + t.charCodeAt().toString(16).toUpperCase();
                      })
                      .replace(/((?:%[0-9A-F]{2})+)/g, function (t, e) {
                        try {
                          return decodeURIComponent(e)
                            .split("")
                            .map(function (t) {
                              var e = t.charCodeAt();
                              return e > 256 || /^[a-z0-9]$/i.test(t)
                                ? t
                                : "%" + e.toString(16).toUpperCase();
                            })
                            .join("");
                        } catch (t) {
                          return e;
                        }
                      })
                  : l.pathname)),
              "about:" === m.protocol &&
                "blank" === m.pathname &&
                ((m.protocol = ""), (m.pathname = "")),
              b && "/" !== t[0] && (m.pathname = m.pathname.substr(1)),
              u &&
                !p.test(u) &&
                "/" !== t.slice(-1) &&
                "/" === m.pathname &&
                (m.pathname = ""),
              (m.path = m.pathname + m.search),
              (m.auth = [l.username, l.password]
                .map(decodeURIComponent)
                .filter(Boolean)
                .join(":")),
              (m.port = l.port),
              g &&
                !m.host.endsWith(g) &&
                ((m.host += g), (m.port = g.slice(1))),
              (m.href = x ? "" + m.pathname + m.search + m.hash : r(m)));
            var E = /^(file)/.test(m.href) ? ["host", "hostname"] : [];
            return (
              Object.keys(m).forEach(function (t) {
                ~E.indexOf(t) || (m[t] = m[t] || null);
              }),
              m
            );
          }
          ((o.parse = y),
            (o.format = r),
            (o.resolve = l),
            (o.resolveObject = function (t, e) {
              return y(l(t, e));
            }),
            (o.Url = c));
        })(),
          (t.exports = o));
      })();
    },
    2433: (t, e, i) => {
      "use strict";
      function r(t, e) {
        ((this.name = "AggregateError"),
          (this.errors = t),
          (this.message = e || ""));
      }
      (i.d(e, {
        lgM: () => ig,
        mcf: () => Y,
        aHM: () => tv,
        E8U: () => G.E8,
        M6W: () => G.M6,
        kxk: () => ea,
        EYj: () => eg,
        gPd: () => W.gP,
        uRw: () => G.uR,
        uWs: () => iR,
        W0u: () => N.W0,
      }),
        (r.prototype = Error.prototype));
      var n,
        o,
        s,
        a,
        h,
        u,
        l,
        c,
        p,
        d,
        f,
        _,
        v,
        y,
        g = setTimeout;
      function m(t) {
        return !!(t && void 0 !== t.length);
      }
      function b() {}
      function x(t) {
        if (!(this instanceof x))
          throw TypeError("Promises must be constructed via new");
        if ("function" != typeof t) throw TypeError("not a function");
        ((this._state = 0),
          (this._handled = !1),
          (this._value = void 0),
          (this._deferreds = []),
          S(t, this));
      }
      function T(t, e) {
        for (; 3 === t._state; ) t = t._value;
        if (0 === t._state) return void t._deferreds.push(e);
        ((t._handled = !0),
          x._immediateFn(function () {
            var i,
              r = 1 === t._state ? e.onFulfilled : e.onRejected;
            if (null === r)
              return void (1 === t._state ? E : O)(e.promise, t._value);
            try {
              i = r(t._value);
            } catch (t) {
              O(e.promise, t);
              return;
            }
            E(e.promise, i);
          }));
      }
      function E(t, e) {
        try {
          if (e === t)
            throw TypeError("A promise cannot be resolved with itself.");
          if (e && ("object" == typeof e || "function" == typeof e)) {
            var i = e.then;
            if (e instanceof x) {
              ((t._state = 3), (t._value = e), R(t));
              return;
            }
            if ("function" == typeof i)
              return void S(function () {
                i.apply(e, arguments);
              }, t);
          }
          ((t._state = 1), (t._value = e), R(t));
        } catch (e) {
          O(t, e);
        }
      }
      function O(t, e) {
        ((t._state = 2), (t._value = e), R(t));
      }
      function R(t) {
        2 === t._state &&
          0 === t._deferreds.length &&
          x._immediateFn(function () {
            t._handled || x._unhandledRejectionFn(t._value);
          });
        for (var e = 0, i = t._deferreds.length; e < i; e++)
          T(t, t._deferreds[e]);
        t._deferreds = null;
      }
      function A(t, e, i) {
        ((this.onFulfilled = "function" == typeof t ? t : null),
          (this.onRejected = "function" == typeof e ? e : null),
          (this.promise = i));
      }
      function S(t, e) {
        var i = !1;
        try {
          t(
            function (t) {
              i || ((i = !0), E(e, t));
            },
            function (t) {
              i || ((i = !0), O(e, t));
            },
          );
        } catch (t) {
          if (i) return;
          ((i = !0), O(e, t));
        }
      }
      ((x.prototype.catch = function (t) {
        return this.then(null, t);
      }),
        (x.prototype.then = function (t, e) {
          var i = new this.constructor(b);
          return (T(this, new A(t, e, i)), i);
        }),
        (x.prototype.finally = function (t) {
          var e = this.constructor;
          return this.then(
            function (i) {
              return e.resolve(t()).then(function () {
                return i;
              });
            },
            function (i) {
              return e.resolve(t()).then(function () {
                return e.reject(i);
              });
            },
          );
        }),
        (x.all = function (t) {
          return new x(function (e, i) {
            if (!m(t)) return i(TypeError("Promise.all accepts an array"));
            var r = Array.prototype.slice.call(t);
            if (0 === r.length) return e([]);
            for (var n = r.length, o = 0; o < r.length; o++)
              !(function t(o, s) {
                try {
                  if (s && ("object" == typeof s || "function" == typeof s)) {
                    var a = s.then;
                    if ("function" == typeof a)
                      return void a.call(
                        s,
                        function (e) {
                          t(o, e);
                        },
                        i,
                      );
                  }
                  ((r[o] = s), 0 == --n && e(r));
                } catch (t) {
                  i(t);
                }
              })(o, r[o]);
          });
        }),
        (x.any = function (t) {
          var e = this;
          return new e(function (i, n) {
            if (!(t && void 0 !== t.length))
              return n(TypeError("Promise.any accepts an array"));
            var o = Array.prototype.slice.call(t);
            if (0 === o.length) return n();
            for (var s = [], a = 0; a < o.length; a++)
              try {
                e.resolve(o[a])
                  .then(i)
                  .catch(function (t) {
                    (s.push(t),
                      s.length === o.length &&
                        n(new r(s, "All promises were rejected")));
                  });
              } catch (t) {
                n(t);
              }
          });
        }),
        (x.allSettled = function (t) {
          return new this(function (e, i) {
            if (!(t && void 0 !== t.length))
              return i(
                TypeError(
                  typeof t +
                    " " +
                    t +
                    " is not iterable(cannot read property Symbol(Symbol.iterator))",
                ),
              );
            var r = Array.prototype.slice.call(t);
            if (0 === r.length) return e([]);
            for (var n = r.length, o = 0; o < r.length; o++)
              !(function t(i, o) {
                if (o && ("object" == typeof o || "function" == typeof o)) {
                  var s = o.then;
                  if ("function" == typeof s)
                    return void s.call(
                      o,
                      function (e) {
                        t(i, e);
                      },
                      function (t) {
                        ((r[i] = { status: "rejected", reason: t }),
                          0 == --n && e(r));
                      },
                    );
                }
                ((r[i] = { status: "fulfilled", value: o }), 0 == --n && e(r));
              })(o, r[o]);
          });
        }),
        (x.resolve = function (t) {
          return t && "object" == typeof t && t.constructor === x
            ? t
            : new x(function (e) {
                e(t);
              });
        }),
        (x.reject = function (t) {
          return new x(function (e, i) {
            i(t);
          });
        }),
        (x.race = function (t) {
          return new x(function (e, i) {
            if (!m(t)) return i(TypeError("Promise.race accepts an array"));
            for (var r = 0, n = t.length; r < n; r++)
              x.resolve(t[r]).then(e, i);
          });
        }),
        (x._immediateFn =
          ("function" == typeof setImmediate &&
            function (t) {
              setImmediate(t);
            }) ||
          function (t) {
            g(t, 0);
          }),
        (x._unhandledRejectionFn = function (t) {
          "undefined" != typeof console &&
            console &&
            console.warn("Possible Unhandled Promise Rejection:", t);
        }));
      var P = i(4766);
      if (
        ("undefined" == typeof globalThis &&
          ("undefined" != typeof self
            ? (self.globalThis = self)
            : "undefined" != typeof global && (global.globalThis = global)),
        globalThis.Promise || (globalThis.Promise = x),
        Object.assign || (Object.assign = P),
        (Date.now && Date.prototype.getTime) ||
          (Date.now = function () {
            return new Date().getTime();
          }),
        !(globalThis.performance && globalThis.performance.now))
      ) {
        var M = Date.now();
        (globalThis.performance || (globalThis.performance = {}),
          (globalThis.performance.now = function () {
            return Date.now() - M;
          }));
      }
      for (
        var D = Date.now(), I = ["ms", "moz", "webkit", "o"], w = 0;
        w < I.length && !globalThis.requestAnimationFrame;
        ++w
      ) {
        var C = I[w];
        ((globalThis.requestAnimationFrame =
          globalThis[C + "RequestAnimationFrame"]),
          (globalThis.cancelAnimationFrame =
            globalThis[C + "CancelAnimationFrame"] ||
            globalThis[C + "CancelRequestAnimationFrame"]));
      }
      (globalThis.requestAnimationFrame ||
        (globalThis.requestAnimationFrame = function (t) {
          if ("function" != typeof t) throw TypeError(t + "is not a function");
          var e = Date.now(),
            i = 16 + D - e;
          return (
            i < 0 && (i = 0),
            (D = e),
            globalThis.self.setTimeout(function () {
              ((D = Date.now()), t(performance.now()));
            }, i)
          );
        }),
        globalThis.cancelAnimationFrame ||
          (globalThis.cancelAnimationFrame = function (t) {
            return clearTimeout(t);
          }),
        Math.sign ||
          (Math.sign = function (t) {
            return 0 === (t = Number(t)) || isNaN(t) ? t : t > 0 ? 1 : -1;
          }),
        Number.isInteger ||
          (Number.isInteger = function (t) {
            return "number" == typeof t && isFinite(t) && Math.floor(t) === t;
          }),
        globalThis.ArrayBuffer || (globalThis.ArrayBuffer = Array),
        globalThis.Float32Array || (globalThis.Float32Array = Array),
        globalThis.Uint32Array || (globalThis.Uint32Array = Array),
        globalThis.Uint16Array || (globalThis.Uint16Array = Array),
        globalThis.Uint8Array || (globalThis.Uint8Array = Array),
        globalThis.Int32Array || (globalThis.Int32Array = Array));
      var L = i(19),
        N = i(8181),
        F = i(6061),
        G = i(4987);
      N.W0.SORTABLE_CHILDREN = !1;
      var B = (function () {
          function t() {
            ((this.minX = 1 / 0),
              (this.minY = 1 / 0),
              (this.maxX = -1 / 0),
              (this.maxY = -1 / 0),
              (this.rect = null),
              (this.updateID = -1));
          }
          return (
            (t.prototype.isEmpty = function () {
              return this.minX > this.maxX || this.minY > this.maxY;
            }),
            (t.prototype.clear = function () {
              ((this.minX = 1 / 0),
                (this.minY = 1 / 0),
                (this.maxX = -1 / 0),
                (this.maxY = -1 / 0));
            }),
            (t.prototype.getRectangle = function (t) {
              return this.minX > this.maxX || this.minY > this.maxY
                ? F.M_.EMPTY
                : (((t = t || new F.M_(0, 0, 1, 1)).x = this.minX),
                  (t.y = this.minY),
                  (t.width = this.maxX - this.minX),
                  (t.height = this.maxY - this.minY),
                  t);
            }),
            (t.prototype.addPoint = function (t) {
              ((this.minX = Math.min(this.minX, t.x)),
                (this.maxX = Math.max(this.maxX, t.x)),
                (this.minY = Math.min(this.minY, t.y)),
                (this.maxY = Math.max(this.maxY, t.y)));
            }),
            (t.prototype.addPointMatrix = function (t, e) {
              var i = t.a,
                r = t.b,
                n = t.c,
                o = t.d,
                s = t.tx,
                a = t.ty,
                h = i * e.x + n * e.y + s,
                u = r * e.x + o * e.y + a;
              ((this.minX = Math.min(this.minX, h)),
                (this.maxX = Math.max(this.maxX, h)),
                (this.minY = Math.min(this.minY, u)),
                (this.maxY = Math.max(this.maxY, u)));
            }),
            (t.prototype.addQuad = function (t) {
              var e = this.minX,
                i = this.minY,
                r = this.maxX,
                n = this.maxY,
                o = t[0],
                s = t[1];
              ((e = o < e ? o : e),
                (i = s < i ? s : i),
                (r = o > r ? o : r),
                (n = s > n ? s : n),
                (o = t[2]),
                (s = t[3]),
                (e = o < e ? o : e),
                (i = s < i ? s : i),
                (r = o > r ? o : r),
                (n = s > n ? s : n),
                (o = t[4]),
                (s = t[5]),
                (e = o < e ? o : e),
                (i = s < i ? s : i),
                (r = o > r ? o : r),
                (n = s > n ? s : n),
                (o = t[6]),
                (s = t[7]),
                (e = o < e ? o : e),
                (i = s < i ? s : i),
                (r = o > r ? o : r),
                (n = s > n ? s : n),
                (this.minX = e),
                (this.minY = i),
                (this.maxX = r),
                (this.maxY = n));
            }),
            (t.prototype.addFrame = function (t, e, i, r, n) {
              this.addFrameMatrix(t.worldTransform, e, i, r, n);
            }),
            (t.prototype.addFrameMatrix = function (t, e, i, r, n) {
              var o = t.a,
                s = t.b,
                a = t.c,
                h = t.d,
                u = t.tx,
                l = t.ty,
                c = this.minX,
                p = this.minY,
                d = this.maxX,
                f = this.maxY,
                _ = o * e + a * i + u,
                v = s * e + h * i + l;
              ((c = _ < c ? _ : c),
                (p = v < p ? v : p),
                (d = _ > d ? _ : d),
                (f = v > f ? v : f),
                (_ = o * r + a * i + u),
                (v = s * r + h * i + l),
                (c = _ < c ? _ : c),
                (p = v < p ? v : p),
                (d = _ > d ? _ : d),
                (f = v > f ? v : f),
                (_ = o * e + a * n + u),
                (v = s * e + h * n + l),
                (c = _ < c ? _ : c),
                (p = v < p ? v : p),
                (d = _ > d ? _ : d),
                (f = v > f ? v : f),
                (_ = o * r + a * n + u),
                (v = s * r + h * n + l),
                (c = _ < c ? _ : c),
                (p = v < p ? v : p),
                (d = _ > d ? _ : d),
                (f = v > f ? v : f),
                (this.minX = c),
                (this.minY = p),
                (this.maxX = d),
                (this.maxY = f));
            }),
            (t.prototype.addVertexData = function (t, e, i) {
              for (
                var r = this.minX,
                  n = this.minY,
                  o = this.maxX,
                  s = this.maxY,
                  a = e;
                a < i;
                a += 2
              ) {
                var h = t[a],
                  u = t[a + 1];
                ((r = h < r ? h : r),
                  (n = u < n ? u : n),
                  (o = h > o ? h : o),
                  (s = u > s ? u : s));
              }
              ((this.minX = r),
                (this.minY = n),
                (this.maxX = o),
                (this.maxY = s));
            }),
            (t.prototype.addVertices = function (t, e, i, r) {
              this.addVerticesMatrix(t.worldTransform, e, i, r);
            }),
            (t.prototype.addVerticesMatrix = function (t, e, i, r, n, o) {
              (void 0 === n && (n = 0), void 0 === o && (o = n));
              for (
                var s = t.a,
                  a = t.b,
                  h = t.c,
                  u = t.d,
                  l = t.tx,
                  c = t.ty,
                  p = this.minX,
                  d = this.minY,
                  f = this.maxX,
                  _ = this.maxY,
                  v = i;
                v < r;
                v += 2
              ) {
                var y = e[v],
                  g = e[v + 1],
                  m = s * y + h * g + l,
                  b = u * g + a * y + c;
                ((p = Math.min(p, m - n)),
                  (f = Math.max(f, m + n)),
                  (d = Math.min(d, b - o)),
                  (_ = Math.max(_, b + o)));
              }
              ((this.minX = p),
                (this.minY = d),
                (this.maxX = f),
                (this.maxY = _));
            }),
            (t.prototype.addBounds = function (t) {
              var e = this.minX,
                i = this.minY,
                r = this.maxX,
                n = this.maxY;
              ((this.minX = t.minX < e ? t.minX : e),
                (this.minY = t.minY < i ? t.minY : i),
                (this.maxX = t.maxX > r ? t.maxX : r),
                (this.maxY = t.maxY > n ? t.maxY : n));
            }),
            (t.prototype.addBoundsMask = function (t, e) {
              var i = t.minX > e.minX ? t.minX : e.minX,
                r = t.minY > e.minY ? t.minY : e.minY,
                n = t.maxX < e.maxX ? t.maxX : e.maxX,
                o = t.maxY < e.maxY ? t.maxY : e.maxY;
              if (i <= n && r <= o) {
                var s = this.minX,
                  a = this.minY,
                  h = this.maxX,
                  u = this.maxY;
                ((this.minX = i < s ? i : s),
                  (this.minY = r < a ? r : a),
                  (this.maxX = n > h ? n : h),
                  (this.maxY = o > u ? o : u));
              }
            }),
            (t.prototype.addBoundsMatrix = function (t, e) {
              this.addFrameMatrix(e, t.minX, t.minY, t.maxX, t.maxY);
            }),
            (t.prototype.addBoundsArea = function (t, e) {
              var i = t.minX > e.x ? t.minX : e.x,
                r = t.minY > e.y ? t.minY : e.y,
                n = t.maxX < e.x + e.width ? t.maxX : e.x + e.width,
                o = t.maxY < e.y + e.height ? t.maxY : e.y + e.height;
              if (i <= n && r <= o) {
                var s = this.minX,
                  a = this.minY,
                  h = this.maxX,
                  u = this.maxY;
                ((this.minX = i < s ? i : s),
                  (this.minY = r < a ? r : a),
                  (this.maxX = n > h ? n : h),
                  (this.maxY = o > u ? o : u));
              }
            }),
            (t.prototype.pad = function (t, e) {
              (void 0 === t && (t = 0),
                void 0 === e && (e = t),
                this.isEmpty() ||
                  ((this.minX -= t),
                  (this.maxX += t),
                  (this.minY -= e),
                  (this.maxY += e)));
            }),
            (t.prototype.addFramePad = function (t, e, i, r, n, o) {
              ((t -= n),
                (e -= o),
                (i += n),
                (r += o),
                (this.minX = this.minX < t ? this.minX : t),
                (this.maxX = this.maxX > i ? this.maxX : i),
                (this.minY = this.minY < e ? this.minY : e),
                (this.maxY = this.maxY > r ? this.maxY : r));
            }),
            t
          );
        })(),
        X = function (t, e) {
          return (X =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
            })(t, e);
        };
      function U(t, e) {
        function i() {
          this.constructor = t;
        }
        (X(t, e),
          (t.prototype =
            null === e
              ? Object.create(e)
              : ((i.prototype = e.prototype), new i())));
      }
      var k = (function (t) {
          function e() {
            var e = t.call(this) || this;
            return (
              (e.tempDisplayObjectParent = null),
              (e.transform = new F.dL()),
              (e.alpha = 1),
              (e.visible = !0),
              (e.renderable = !0),
              (e.cullable = !1),
              (e.cullArea = null),
              (e.parent = null),
              (e.worldAlpha = 1),
              (e._lastSortedIndex = 0),
              (e._zIndex = 0),
              (e.filterArea = null),
              (e.filters = null),
              (e._enabledFilters = null),
              (e._bounds = new B()),
              (e._localBounds = null),
              (e._boundsID = 0),
              (e._boundsRect = null),
              (e._localBoundsRect = null),
              (e._mask = null),
              (e._maskRefCount = 0),
              (e._destroyed = !1),
              (e.isSprite = !1),
              (e.isMask = !1),
              e
            );
          }
          return (
            U(e, t),
            (e.mixin = function (t) {
              for (var i = Object.keys(t), r = 0; r < i.length; ++r) {
                var n = i[r];
                Object.defineProperty(
                  e.prototype,
                  n,
                  Object.getOwnPropertyDescriptor(t, n),
                );
              }
            }),
            Object.defineProperty(e.prototype, "destroyed", {
              get: function () {
                return this._destroyed;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype._recursivePostUpdateTransform = function () {
              this.parent
                ? (this.parent._recursivePostUpdateTransform(),
                  this.transform.updateTransform(this.parent.transform))
                : this.transform.updateTransform(
                    this._tempDisplayObjectParent.transform,
                  );
            }),
            (e.prototype.updateTransform = function () {
              (this._boundsID++,
                this.transform.updateTransform(this.parent.transform),
                (this.worldAlpha = this.alpha * this.parent.worldAlpha));
            }),
            (e.prototype.getBounds = function (t, e) {
              return (
                t ||
                  (this.parent
                    ? (this._recursivePostUpdateTransform(),
                      this.updateTransform())
                    : ((this.parent = this._tempDisplayObjectParent),
                      this.updateTransform(),
                      (this.parent = null))),
                this._bounds.updateID !== this._boundsID &&
                  (this.calculateBounds(),
                  (this._bounds.updateID = this._boundsID)),
                e ||
                  (this._boundsRect || (this._boundsRect = new F.M_()),
                  (e = this._boundsRect)),
                this._bounds.getRectangle(e)
              );
            }),
            (e.prototype.getLocalBounds = function (t) {
              (t ||
                (this._localBoundsRect || (this._localBoundsRect = new F.M_()),
                (t = this._localBoundsRect)),
                this._localBounds || (this._localBounds = new B()));
              var e = this.transform,
                i = this.parent;
              ((this.parent = null),
                (this.transform = this._tempDisplayObjectParent.transform));
              var r = this._bounds,
                n = this._boundsID;
              this._bounds = this._localBounds;
              var o = this.getBounds(!1, t);
              return (
                (this.parent = i),
                (this.transform = e),
                (this._bounds = r),
                (this._bounds.updateID += this._boundsID - n),
                o
              );
            }),
            (e.prototype.toGlobal = function (t, e, i) {
              return (
                void 0 === i && (i = !1),
                i ||
                  (this._recursivePostUpdateTransform(),
                  this.parent
                    ? this.displayObjectUpdateTransform()
                    : ((this.parent = this._tempDisplayObjectParent),
                      this.displayObjectUpdateTransform(),
                      (this.parent = null))),
                this.worldTransform.apply(t, e)
              );
            }),
            (e.prototype.toLocal = function (t, e, i, r) {
              return (
                e && (t = e.toGlobal(t, i, r)),
                r ||
                  (this._recursivePostUpdateTransform(),
                  this.parent
                    ? this.displayObjectUpdateTransform()
                    : ((this.parent = this._tempDisplayObjectParent),
                      this.displayObjectUpdateTransform(),
                      (this.parent = null))),
                this.worldTransform.applyInverse(t, i)
              );
            }),
            (e.prototype.setParent = function (t) {
              if (!t || !t.addChild)
                throw Error("setParent: Argument must be a Container");
              return (t.addChild(this), t);
            }),
            (e.prototype.setTransform = function (t, e, i, r, n, o, s, a, h) {
              return (
                void 0 === t && (t = 0),
                void 0 === e && (e = 0),
                void 0 === i && (i = 1),
                void 0 === r && (r = 1),
                void 0 === n && (n = 0),
                void 0 === o && (o = 0),
                void 0 === s && (s = 0),
                void 0 === a && (a = 0),
                void 0 === h && (h = 0),
                (this.position.x = t),
                (this.position.y = e),
                (this.scale.x = i || 1),
                (this.scale.y = r || 1),
                (this.rotation = n),
                (this.skew.x = o),
                (this.skew.y = s),
                (this.pivot.x = a),
                (this.pivot.y = h),
                this
              );
            }),
            (e.prototype.destroy = function (t) {
              (this.parent && this.parent.removeChild(this),
                (this._destroyed = !0),
                (this.transform = null),
                (this.parent = null),
                (this._bounds = null),
                (this.mask = null),
                (this.cullArea = null),
                (this.filters = null),
                (this.filterArea = null),
                (this.hitArea = null),
                (this.interactive = !1),
                (this.interactiveChildren = !1),
                this.emit("destroyed"),
                this.removeAllListeners());
            }),
            Object.defineProperty(e.prototype, "_tempDisplayObjectParent", {
              get: function () {
                return (
                  null === this.tempDisplayObjectParent &&
                    (this.tempDisplayObjectParent = new H()),
                  this.tempDisplayObjectParent
                );
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.enableTempParent = function () {
              var t = this.parent;
              return ((this.parent = this._tempDisplayObjectParent), t);
            }),
            (e.prototype.disableTempParent = function (t) {
              this.parent = t;
            }),
            Object.defineProperty(e.prototype, "x", {
              get: function () {
                return this.position.x;
              },
              set: function (t) {
                this.transform.position.x = t;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "y", {
              get: function () {
                return this.position.y;
              },
              set: function (t) {
                this.transform.position.y = t;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "worldTransform", {
              get: function () {
                return this.transform.worldTransform;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "localTransform", {
              get: function () {
                return this.transform.localTransform;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "position", {
              get: function () {
                return this.transform.position;
              },
              set: function (t) {
                this.transform.position.copyFrom(t);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "scale", {
              get: function () {
                return this.transform.scale;
              },
              set: function (t) {
                this.transform.scale.copyFrom(t);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "pivot", {
              get: function () {
                return this.transform.pivot;
              },
              set: function (t) {
                this.transform.pivot.copyFrom(t);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "skew", {
              get: function () {
                return this.transform.skew;
              },
              set: function (t) {
                this.transform.skew.copyFrom(t);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "rotation", {
              get: function () {
                return this.transform.rotation;
              },
              set: function (t) {
                this.transform.rotation = t;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "angle", {
              get: function () {
                return this.transform.rotation * F.bO;
              },
              set: function (t) {
                this.transform.rotation = t * F.Td;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "zIndex", {
              get: function () {
                return this._zIndex;
              },
              set: function (t) {
                ((this._zIndex = t),
                  this.parent && (this.parent.sortDirty = !0));
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "worldVisible", {
              get: function () {
                var t = this;
                do {
                  if (!t.visible) return !1;
                  t = t.parent;
                } while (t);
                return !0;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "mask", {
              get: function () {
                return this._mask;
              },
              set: function (t) {
                if (this._mask !== t) {
                  if (this._mask) {
                    var e = this._mask.isMaskData
                      ? this._mask.maskObject
                      : this._mask;
                    e &&
                      (e._maskRefCount--,
                      0 === e._maskRefCount &&
                        ((e.renderable = !0), (e.isMask = !1)));
                  }
                  if (((this._mask = t), this._mask)) {
                    var e = this._mask.isMaskData
                      ? this._mask.maskObject
                      : this._mask;
                    e &&
                      (0 === e._maskRefCount &&
                        ((e.renderable = !1), (e.isMask = !0)),
                      e._maskRefCount++);
                  }
                }
              },
              enumerable: !1,
              configurable: !0,
            }),
            e
          );
        })(L.bk),
        H = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return ((e.sortDirty = null), e);
          }
          return (U(e, t), e);
        })(k);
      function j(t, e) {
        return t.zIndex === e.zIndex
          ? t._lastSortedIndex - e._lastSortedIndex
          : t.zIndex - e.zIndex;
      }
      k.prototype.displayObjectUpdateTransform = k.prototype.updateTransform;
      var Y = (function (t) {
        function e() {
          var e = t.call(this) || this;
          return (
            (e.children = []),
            (e.sortableChildren = N.W0.SORTABLE_CHILDREN),
            (e.sortDirty = !1),
            e
          );
        }
        return (
          U(e, t),
          (e.prototype.onChildrenChange = function (t) {}),
          (e.prototype.addChild = function () {
            for (var t = arguments, e = [], i = 0; i < arguments.length; i++)
              e[i] = t[i];
            if (e.length > 1)
              for (var r = 0; r < e.length; r++) this.addChild(e[r]);
            else {
              var n = e[0];
              (n.parent && n.parent.removeChild(n),
                (n.parent = this),
                (this.sortDirty = !0),
                (n.transform._parentID = -1),
                this.children.push(n),
                this._boundsID++,
                this.onChildrenChange(this.children.length - 1),
                this.emit("childAdded", n, this, this.children.length - 1),
                n.emit("added", this));
            }
            return e[0];
          }),
          (e.prototype.addChildAt = function (t, e) {
            if (e < 0 || e > this.children.length)
              throw Error(
                t +
                  "addChildAt: The index " +
                  e +
                  " supplied is out of bounds " +
                  this.children.length,
              );
            return (
              t.parent && t.parent.removeChild(t),
              (t.parent = this),
              (this.sortDirty = !0),
              (t.transform._parentID = -1),
              this.children.splice(e, 0, t),
              this._boundsID++,
              this.onChildrenChange(e),
              t.emit("added", this),
              this.emit("childAdded", t, this, e),
              t
            );
          }),
          (e.prototype.swapChildren = function (t, e) {
            if (t !== e) {
              var i = this.getChildIndex(t),
                r = this.getChildIndex(e);
              ((this.children[i] = e),
                (this.children[r] = t),
                this.onChildrenChange(i < r ? i : r));
            }
          }),
          (e.prototype.getChildIndex = function (t) {
            var e = this.children.indexOf(t);
            if (-1 === e)
              throw Error(
                "The supplied DisplayObject must be a child of the caller",
              );
            return e;
          }),
          (e.prototype.setChildIndex = function (t, e) {
            if (e < 0 || e >= this.children.length)
              throw Error(
                "The index " +
                  e +
                  " supplied is out of bounds " +
                  this.children.length,
              );
            var i = this.getChildIndex(t);
            ((0, L.dZ)(this.children, i, 1),
              this.children.splice(e, 0, t),
              this.onChildrenChange(e));
          }),
          (e.prototype.getChildAt = function (t) {
            if (t < 0 || t >= this.children.length)
              throw Error("getChildAt: Index (" + t + ") does not exist.");
            return this.children[t];
          }),
          (e.prototype.removeChild = function () {
            for (var t = arguments, e = [], i = 0; i < arguments.length; i++)
              e[i] = t[i];
            if (e.length > 1)
              for (var r = 0; r < e.length; r++) this.removeChild(e[r]);
            else {
              var n = e[0],
                o = this.children.indexOf(n);
              if (-1 === o) return null;
              ((n.parent = null),
                (n.transform._parentID = -1),
                (0, L.dZ)(this.children, o, 1),
                this._boundsID++,
                this.onChildrenChange(o),
                n.emit("removed", this),
                this.emit("childRemoved", n, this, o));
            }
            return e[0];
          }),
          (e.prototype.removeChildAt = function (t) {
            var e = this.getChildAt(t);
            return (
              (e.parent = null),
              (e.transform._parentID = -1),
              (0, L.dZ)(this.children, t, 1),
              this._boundsID++,
              this.onChildrenChange(t),
              e.emit("removed", this),
              this.emit("childRemoved", e, this, t),
              e
            );
          }),
          (e.prototype.removeChildren = function (t, e) {
            (void 0 === t && (t = 0),
              void 0 === e && (e = this.children.length));
            var i,
              r = t,
              n = e,
              o = n - r;
            if (o > 0 && o <= n) {
              i = this.children.splice(r, o);
              for (var s = 0; s < i.length; ++s)
                ((i[s].parent = null),
                  i[s].transform && (i[s].transform._parentID = -1));
              (this._boundsID++, this.onChildrenChange(t));
              for (var s = 0; s < i.length; ++s)
                (i[s].emit("removed", this),
                  this.emit("childRemoved", i[s], this, s));
              return i;
            }
            if (0 === o && 0 === this.children.length) return [];
            throw RangeError(
              "removeChildren: numeric values are outside the acceptable range.",
            );
          }),
          (e.prototype.sortChildren = function () {
            for (var t = !1, e = 0, i = this.children.length; e < i; ++e) {
              var r = this.children[e];
              ((r._lastSortedIndex = e), t || 0 === r.zIndex || (t = !0));
            }
            (t && this.children.length > 1 && this.children.sort(j),
              (this.sortDirty = !1));
          }),
          (e.prototype.updateTransform = function () {
            (this.sortableChildren && this.sortDirty && this.sortChildren(),
              this._boundsID++,
              this.transform.updateTransform(this.parent.transform),
              (this.worldAlpha = this.alpha * this.parent.worldAlpha));
            for (var t = 0, e = this.children.length; t < e; ++t) {
              var i = this.children[t];
              i.visible && i.updateTransform();
            }
          }),
          (e.prototype.calculateBounds = function () {
            (this._bounds.clear(), this._calculateBounds());
            for (var t = 0; t < this.children.length; t++) {
              var e = this.children[t];
              if (e.visible && e.renderable)
                if ((e.calculateBounds(), e._mask)) {
                  var i = e._mask.isMaskData ? e._mask.maskObject : e._mask;
                  i
                    ? (i.calculateBounds(),
                      this._bounds.addBoundsMask(e._bounds, i._bounds))
                    : this._bounds.addBounds(e._bounds);
                } else
                  e.filterArea
                    ? this._bounds.addBoundsArea(e._bounds, e.filterArea)
                    : this._bounds.addBounds(e._bounds);
            }
            this._bounds.updateID = this._boundsID;
          }),
          (e.prototype.getLocalBounds = function (e, i) {
            void 0 === i && (i = !1);
            var r = t.prototype.getLocalBounds.call(this, e);
            if (!i)
              for (var n = 0, o = this.children.length; n < o; ++n) {
                var s = this.children[n];
                s.visible && s.updateTransform();
              }
            return r;
          }),
          (e.prototype._calculateBounds = function () {}),
          (e.prototype._renderWithCulling = function (t) {
            var i,
              r,
              n = t.renderTexture.sourceFrame;
            if (n.width > 0 && n.height > 0) {
              if (
                (this.cullArea
                  ? ((i = this.cullArea), (r = this.worldTransform))
                  : this._render !== e.prototype._render &&
                    (i = this.getBounds(!0)),
                i && n.intersects(i, r))
              )
                this._render(t);
              else if (this.cullArea) return;
              for (var o = 0, s = this.children.length; o < s; ++o) {
                var a = this.children[o],
                  h = a.cullable;
                ((a.cullable = h || !this.cullArea),
                  a.render(t),
                  (a.cullable = h));
              }
            }
          }),
          (e.prototype.render = function (t) {
            if (this.visible && !(this.worldAlpha <= 0) && this.renderable)
              if (this._mask || (this.filters && this.filters.length))
                this.renderAdvanced(t);
              else if (this.cullable) this._renderWithCulling(t);
              else {
                this._render(t);
                for (var e = 0, i = this.children.length; e < i; ++e)
                  this.children[e].render(t);
              }
          }),
          (e.prototype.renderAdvanced = function (t) {
            var e = this.filters,
              i = this._mask;
            if (e) {
              (this._enabledFilters || (this._enabledFilters = []),
                (this._enabledFilters.length = 0));
              for (var r = 0; r < e.length; r++)
                e[r].enabled && this._enabledFilters.push(e[r]);
            }
            var n =
              (e && this._enabledFilters && this._enabledFilters.length) ||
              (i &&
                (!i.isMaskData ||
                  (i.enabled && (i.autoDetect || i.type !== G.vg.NONE))));
            if (
              (n && t.batch.flush(),
              e &&
                this._enabledFilters &&
                this._enabledFilters.length &&
                t.filter.push(this, this._enabledFilters),
              i && t.mask.push(this, this._mask),
              this.cullable)
            )
              this._renderWithCulling(t);
            else {
              this._render(t);
              for (var r = 0, o = this.children.length; r < o; ++r)
                this.children[r].render(t);
            }
            (n && t.batch.flush(),
              i && t.mask.pop(this),
              e &&
                this._enabledFilters &&
                this._enabledFilters.length &&
                t.filter.pop());
          }),
          (e.prototype._render = function (t) {}),
          (e.prototype.destroy = function (e) {
            (t.prototype.destroy.call(this), (this.sortDirty = !1));
            var i = "boolean" == typeof e ? e : e && e.children,
              r = this.removeChildren(0, this.children.length);
            if (i) for (var n = 0; n < r.length; ++n) r[n].destroy(e);
          }),
          Object.defineProperty(e.prototype, "width", {
            get: function () {
              return this.scale.x * this.getLocalBounds().width;
            },
            set: function (t) {
              var e = this.getLocalBounds().width;
              (0 !== e ? (this.scale.x = t / e) : (this.scale.x = 1),
                (this._width = t));
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "height", {
            get: function () {
              return this.scale.y * this.getLocalBounds().height;
            },
            set: function (t) {
              var e = this.getLocalBounds().height;
              (0 !== e ? (this.scale.y = t / e) : (this.scale.y = 1),
                (this._height = t));
            },
            enumerable: !1,
            configurable: !0,
          }),
          e
        );
      })(k);
      Y.prototype.containerUpdateTransform = Y.prototype.updateTransform;
      var W = i(3401);
      k.mixin({
        accessible: !1,
        accessibleTitle: null,
        accessibleHint: null,
        tabIndex: 0,
        _accessibleActive: !1,
        _accessibleDiv: null,
        accessibleType: "button",
        accessiblePointerEvents: "auto",
        accessibleChildren: !0,
        renderId: -1,
      });
      var z = (function () {
          function t(t) {
            ((this.debug = !1),
              (this._isActive = !1),
              (this._isMobileAccessibility = !1),
              (this.pool = []),
              (this.renderId = 0),
              (this.children = []),
              (this.androidUpdateCount = 0),
              (this.androidUpdateFrequency = 500),
              (this._hookDiv = null),
              (L.Fr.tablet || L.Fr.phone) && this.createTouchHook());
            var e = document.createElement("div");
            ((e.style.width = "100px"),
              (e.style.height = "100px"),
              (e.style.position = "absolute"),
              (e.style.top = "0px"),
              (e.style.left = "0px"),
              (e.style.zIndex = "2"),
              (this.div = e),
              (this.renderer = t),
              (this._onKeyDown = this._onKeyDown.bind(this)),
              (this._onMouseMove = this._onMouseMove.bind(this)),
              globalThis.addEventListener("keydown", this._onKeyDown, !1));
          }
          return (
            Object.defineProperty(t.prototype, "isActive", {
              get: function () {
                return this._isActive;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "isMobileAccessibility", {
              get: function () {
                return this._isMobileAccessibility;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.createTouchHook = function () {
              var t = this,
                e = document.createElement("button");
              ((e.style.width = "1px"),
                (e.style.height = "1px"),
                (e.style.position = "absolute"),
                (e.style.top = "-1000px"),
                (e.style.left = "-1000px"),
                (e.style.zIndex = "2"),
                (e.style.backgroundColor = "#FF0000"),
                (e.title = "select to enable accessibility for this content"),
                e.addEventListener("focus", function () {
                  ((t._isMobileAccessibility = !0),
                    t.activate(),
                    t.destroyTouchHook());
                }),
                document.body.appendChild(e),
                (this._hookDiv = e));
            }),
            (t.prototype.destroyTouchHook = function () {
              this._hookDiv &&
                (document.body.removeChild(this._hookDiv),
                (this._hookDiv = null));
            }),
            (t.prototype.activate = function () {
              var t;
              this._isActive ||
                ((this._isActive = !0),
                globalThis.document.addEventListener(
                  "mousemove",
                  this._onMouseMove,
                  !0,
                ),
                globalThis.removeEventListener("keydown", this._onKeyDown, !1),
                this.renderer.on("postrender", this.update, this),
                null == (t = this.renderer.view.parentNode) ||
                  t.appendChild(this.div));
            }),
            (t.prototype.deactivate = function () {
              var t;
              this._isActive &&
                !this._isMobileAccessibility &&
                ((this._isActive = !1),
                globalThis.document.removeEventListener(
                  "mousemove",
                  this._onMouseMove,
                  !0,
                ),
                globalThis.addEventListener("keydown", this._onKeyDown, !1),
                this.renderer.off("postrender", this.update),
                null == (t = this.div.parentNode) || t.removeChild(this.div));
            }),
            (t.prototype.updateAccessibleObjects = function (t) {
              if (t.visible && t.accessibleChildren) {
                t.accessible &&
                  t.interactive &&
                  (t._accessibleActive || this.addChild(t),
                  (t.renderId = this.renderId));
                var e = t.children;
                if (e)
                  for (var i = 0; i < e.length; i++)
                    this.updateAccessibleObjects(e[i]);
              }
            }),
            (t.prototype.update = function () {
              var t = performance.now();
              if (
                (!L.Fr.android.device || !(t < this.androidUpdateCount)) &&
                ((this.androidUpdateCount = t + this.androidUpdateFrequency),
                this.renderer.renderingToScreen)
              ) {
                this.renderer._lastObjectRendered &&
                  this.updateAccessibleObjects(
                    this.renderer._lastObjectRendered,
                  );
                var e = this.renderer.view.getBoundingClientRect(),
                  i = e.left,
                  r = e.top,
                  n = e.width,
                  o = e.height,
                  s = this.renderer,
                  a = s.width,
                  h = s.height,
                  u = s.resolution,
                  l = (n / a) * u,
                  c = (o / h) * u,
                  p = this.div;
                ((p.style.left = i + "px"),
                  (p.style.top = r + "px"),
                  (p.style.width = a + "px"),
                  (p.style.height = h + "px"));
                for (var d = 0; d < this.children.length; d++) {
                  var f = this.children[d];
                  if (f.renderId !== this.renderId)
                    ((f._accessibleActive = !1),
                      (0, L.dZ)(this.children, d, 1),
                      this.div.removeChild(f._accessibleDiv),
                      this.pool.push(f._accessibleDiv),
                      (f._accessibleDiv = null),
                      d--);
                  else {
                    p = f._accessibleDiv;
                    var _ = f.hitArea,
                      v = f.worldTransform;
                    (f.hitArea
                      ? ((p.style.left = (v.tx + _.x * v.a) * l + "px"),
                        (p.style.top = (v.ty + _.y * v.d) * c + "px"),
                        (p.style.width = _.width * v.a * l + "px"),
                        (p.style.height = _.height * v.d * c + "px"))
                      : ((_ = f.getBounds()),
                        this.capHitArea(_),
                        (p.style.left = _.x * l + "px"),
                        (p.style.top = _.y * c + "px"),
                        (p.style.width = _.width * l + "px"),
                        (p.style.height = _.height * c + "px"),
                        p.title !== f.accessibleTitle &&
                          null !== f.accessibleTitle &&
                          (p.title = f.accessibleTitle),
                        p.getAttribute("aria-label") !== f.accessibleHint &&
                          null !== f.accessibleHint &&
                          p.setAttribute("aria-label", f.accessibleHint)),
                      (f.accessibleTitle !== p.title ||
                        f.tabIndex !== p.tabIndex) &&
                        ((p.title = f.accessibleTitle),
                        (p.tabIndex = f.tabIndex),
                        this.debug && this.updateDebugHTML(p)));
                  }
                }
                this.renderId++;
              }
            }),
            (t.prototype.updateDebugHTML = function (t) {
              t.innerHTML =
                "type: " +
                t.type +
                "</br> title : " +
                t.title +
                "</br> tabIndex: " +
                t.tabIndex;
            }),
            (t.prototype.capHitArea = function (t) {
              (t.x < 0 && ((t.width += t.x), (t.x = 0)),
                t.y < 0 && ((t.height += t.y), (t.y = 0)));
              var e = this.renderer,
                i = e.width,
                r = e.height;
              (t.x + t.width > i && (t.width = i - t.x),
                t.y + t.height > r && (t.height = r - t.y));
            }),
            (t.prototype.addChild = function (t) {
              var e = this.pool.pop();
              (e ||
                (((e = document.createElement("button")).style.width = "100px"),
                (e.style.height = "100px"),
                (e.style.backgroundColor = this.debug
                  ? "rgba(255,255,255,0.5)"
                  : "transparent"),
                (e.style.position = "absolute"),
                (e.style.zIndex = "2"),
                (e.style.borderStyle = "none"),
                navigator.userAgent.toLowerCase().indexOf("chrome") > -1
                  ? e.setAttribute("aria-live", "off")
                  : e.setAttribute("aria-live", "polite"),
                navigator.userAgent.match(/rv:.*Gecko\//)
                  ? e.setAttribute("aria-relevant", "additions")
                  : e.setAttribute("aria-relevant", "text"),
                e.addEventListener("click", this._onClick.bind(this)),
                e.addEventListener("focus", this._onFocus.bind(this)),
                e.addEventListener("focusout", this._onFocusOut.bind(this))),
                (e.style.pointerEvents = t.accessiblePointerEvents),
                (e.type = t.accessibleType),
                t.accessibleTitle && null !== t.accessibleTitle
                  ? (e.title = t.accessibleTitle)
                  : (t.accessibleHint && null !== t.accessibleHint) ||
                    (e.title = "displayObject " + t.tabIndex),
                t.accessibleHint &&
                  null !== t.accessibleHint &&
                  e.setAttribute("aria-label", t.accessibleHint),
                this.debug && this.updateDebugHTML(e),
                (t._accessibleActive = !0),
                (t._accessibleDiv = e),
                (e.displayObject = t),
                this.children.push(t),
                this.div.appendChild(t._accessibleDiv),
                (t._accessibleDiv.tabIndex = t.tabIndex));
            }),
            (t.prototype._onClick = function (t) {
              var e = this.renderer.plugins.interaction,
                i = t.target.displayObject,
                r = e.eventData;
              (e.dispatchEvent(i, "click", r),
                e.dispatchEvent(i, "pointertap", r),
                e.dispatchEvent(i, "tap", r));
            }),
            (t.prototype._onFocus = function (t) {
              t.target.getAttribute("aria-live") ||
                t.target.setAttribute("aria-live", "assertive");
              var e = this.renderer.plugins.interaction,
                i = t.target.displayObject,
                r = e.eventData;
              e.dispatchEvent(i, "mouseover", r);
            }),
            (t.prototype._onFocusOut = function (t) {
              t.target.getAttribute("aria-live") ||
                t.target.setAttribute("aria-live", "polite");
              var e = this.renderer.plugins.interaction,
                i = t.target.displayObject,
                r = e.eventData;
              e.dispatchEvent(i, "mouseout", r);
            }),
            (t.prototype._onKeyDown = function (t) {
              9 === t.keyCode && this.activate();
            }),
            (t.prototype._onMouseMove = function (t) {
              (0 !== t.movementX || 0 !== t.movementY) && this.deactivate();
            }),
            (t.prototype.destroy = function () {
              (this.destroyTouchHook(),
                (this.div = null),
                globalThis.document.removeEventListener(
                  "mousemove",
                  this._onMouseMove,
                  !0,
                ),
                globalThis.removeEventListener("keydown", this._onKeyDown),
                (this.pool = null),
                (this.children = null),
                (this.renderer = null));
            }),
            (t.extension = {
              name: "accessibility",
              type: [W.Ag.RendererPlugin, W.Ag.CanvasRendererPlugin],
            }),
            t
          );
        })(),
        V = i(9325),
        q = (function () {
          function t() {
            ((this.pressure = 0),
              (this.rotationAngle = 0),
              (this.twist = 0),
              (this.tangentialPressure = 0),
              (this.global = new F.bR()),
              (this.target = null),
              (this.originalEvent = null),
              (this.identifier = null),
              (this.isPrimary = !1),
              (this.button = 0),
              (this.buttons = 0),
              (this.width = 0),
              (this.height = 0),
              (this.tiltX = 0),
              (this.tiltY = 0),
              (this.pointerType = null),
              (this.pressure = 0),
              (this.rotationAngle = 0),
              (this.twist = 0),
              (this.tangentialPressure = 0));
          }
          return (
            Object.defineProperty(t.prototype, "pointerId", {
              get: function () {
                return this.identifier;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.getLocalPosition = function (t, e, i) {
              return t.worldTransform.applyInverse(i || this.global, e);
            }),
            (t.prototype.copyEvent = function (t) {
              ("isPrimary" in t && t.isPrimary && (this.isPrimary = !0),
                (this.button = "button" in t && t.button));
              var e = "buttons" in t && t.buttons;
              ((this.buttons = Number.isInteger(e)
                ? e
                : "which" in t && t.which),
                (this.width = "width" in t && t.width),
                (this.height = "height" in t && t.height),
                (this.tiltX = "tiltX" in t && t.tiltX),
                (this.tiltY = "tiltY" in t && t.tiltY),
                (this.pointerType = "pointerType" in t && t.pointerType),
                (this.pressure = "pressure" in t && t.pressure),
                (this.rotationAngle = "rotationAngle" in t && t.rotationAngle),
                (this.twist = ("twist" in t && t.twist) || 0),
                (this.tangentialPressure =
                  ("tangentialPressure" in t && t.tangentialPressure) || 0));
            }),
            (t.prototype.reset = function () {
              this.isPrimary = !1;
            }),
            t
          );
        })(),
        Z = function (t, e) {
          return (Z =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
            })(t, e);
        },
        Q = (function () {
          function t() {
            ((this.stopped = !1),
              (this.stopsPropagatingAt = null),
              (this.stopPropagationHint = !1),
              (this.target = null),
              (this.currentTarget = null),
              (this.type = null),
              (this.data = null));
          }
          return (
            (t.prototype.stopPropagation = function () {
              ((this.stopped = !0),
                (this.stopPropagationHint = !0),
                (this.stopsPropagatingAt = this.currentTarget));
            }),
            (t.prototype.reset = function () {
              ((this.stopped = !1),
                (this.stopsPropagatingAt = null),
                (this.stopPropagationHint = !1),
                (this.currentTarget = null),
                (this.target = null));
            }),
            t
          );
        })(),
        K = (function () {
          function t(e) {
            ((this._pointerId = e), (this._flags = t.FLAGS.NONE));
          }
          return (
            (t.prototype._doSet = function (t, e) {
              e
                ? (this._flags = this._flags | t)
                : (this._flags = this._flags & ~t);
            }),
            Object.defineProperty(t.prototype, "pointerId", {
              get: function () {
                return this._pointerId;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "flags", {
              get: function () {
                return this._flags;
              },
              set: function (t) {
                this._flags = t;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "none", {
              get: function () {
                return this._flags === t.FLAGS.NONE;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "over", {
              get: function () {
                return (this._flags & t.FLAGS.OVER) != 0;
              },
              set: function (e) {
                this._doSet(t.FLAGS.OVER, e);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "rightDown", {
              get: function () {
                return (this._flags & t.FLAGS.RIGHT_DOWN) != 0;
              },
              set: function (e) {
                this._doSet(t.FLAGS.RIGHT_DOWN, e);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "leftDown", {
              get: function () {
                return (this._flags & t.FLAGS.LEFT_DOWN) != 0;
              },
              set: function (e) {
                this._doSet(t.FLAGS.LEFT_DOWN, e);
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.FLAGS = Object.freeze({
              NONE: 0,
              OVER: 1,
              LEFT_DOWN: 2,
              RIGHT_DOWN: 4,
            })),
            t
          );
        })(),
        J = (function () {
          function t() {
            this._tempPoint = new F.bR();
          }
          return (
            (t.prototype.recursiveFindHit = function (t, e, i, r, n) {
              if (!e || !e.visible) return !1;
              var o,
                s = t.data.global;
              n = e.interactive || n;
              var a = !1,
                h = n,
                u = !0;
              if (e.hitArea)
                (r &&
                  (e.worldTransform.applyInverse(s, this._tempPoint),
                  e.hitArea.contains(this._tempPoint.x, this._tempPoint.y)
                    ? (a = !0)
                    : ((r = !1), (u = !1))),
                  (h = !1));
              else if (e._mask && r) {
                var l = e._mask.isMaskData ? e._mask.maskObject : e._mask;
                !l ||
                  (null == (o = l.containsPoint) ? void 0 : o.call(l, s)) ||
                  (r = !1);
              }
              if (u && e.interactiveChildren && e.children)
                for (var c = e.children, p = c.length - 1; p >= 0; p--) {
                  var d = c[p],
                    f = this.recursiveFindHit(t, d, i, r, h);
                  if (f) {
                    if (!d.parent) continue;
                    ((h = !1), f && (t.target && (r = !1), (a = !0)));
                  }
                }
              return (
                n &&
                  (r &&
                    !t.target &&
                    !e.hitArea &&
                    e.containsPoint &&
                    e.containsPoint(s) &&
                    (a = !0),
                  e.interactive &&
                    (a && !t.target && (t.target = e), i && i(t, e, !!a))),
                a
              );
            }),
            (t.prototype.findHit = function (t, e, i, r) {
              this.recursiveFindHit(t, e, i, r, !1);
            }),
            t
          );
        })();
      k.mixin({
        interactive: !1,
        interactiveChildren: !0,
        hitArea: null,
        get buttonMode() {
          return "pointer" === this.cursor;
        },
        set buttonMode(value) {
          value
            ? (this.cursor = "pointer")
            : "pointer" === this.cursor && (this.cursor = null);
        },
        cursor: null,
        get trackedPointers() {
          return (
            void 0 === this._trackedPointers && (this._trackedPointers = {}),
            this._trackedPointers
          );
        },
        _trackedPointers: void 0,
      });
      var $ = { target: null, data: { global: null } },
        tt = (function (t) {
          function e() {
            this.constructor = i;
          }
          function i(e, i) {
            var r = t.call(this) || this;
            return (
              (i = i || {}),
              (r.renderer = e),
              (r.autoPreventDefault =
                void 0 === i.autoPreventDefault || i.autoPreventDefault),
              (r.interactionFrequency = i.interactionFrequency || 10),
              (r.mouse = new q()),
              (r.mouse.identifier = 1),
              r.mouse.global.set(-999999),
              (r.activeInteractionData = {}),
              (r.activeInteractionData[1] = r.mouse),
              (r.interactionDataPool = []),
              (r.eventData = new Q()),
              (r.interactionDOMElement = null),
              (r.moveWhenInside = !1),
              (r.eventsAdded = !1),
              (r.tickerAdded = !1),
              (r.mouseOverRenderer = !("PointerEvent" in globalThis)),
              (r.supportsTouchEvents = "ontouchstart" in globalThis),
              (r.supportsPointerEvents = !!globalThis.PointerEvent),
              (r.onPointerUp = r.onPointerUp.bind(r)),
              (r.processPointerUp = r.processPointerUp.bind(r)),
              (r.onPointerCancel = r.onPointerCancel.bind(r)),
              (r.processPointerCancel = r.processPointerCancel.bind(r)),
              (r.onPointerDown = r.onPointerDown.bind(r)),
              (r.processPointerDown = r.processPointerDown.bind(r)),
              (r.onPointerMove = r.onPointerMove.bind(r)),
              (r.processPointerMove = r.processPointerMove.bind(r)),
              (r.onPointerOut = r.onPointerOut.bind(r)),
              (r.processPointerOverOut = r.processPointerOverOut.bind(r)),
              (r.onPointerOver = r.onPointerOver.bind(r)),
              (r.cursorStyles = { default: "inherit", pointer: "pointer" }),
              (r.currentCursorMode = null),
              (r.cursor = null),
              (r.resolution = 1),
              (r.delayedEvents = []),
              (r.search = new J()),
              (r._tempDisplayObject = new H()),
              (r._eventListenerOptions = { capture: !0, passive: !1 }),
              (r._useSystemTicker =
                void 0 === i.useSystemTicker || i.useSystemTicker),
              r.setTargetElement(r.renderer.view, r.renderer.resolution),
              r
            );
          }
          return (
            Z(i, t),
            (i.prototype =
              null === t
                ? Object.create(t)
                : ((e.prototype = t.prototype), new e())),
            Object.defineProperty(i.prototype, "useSystemTicker", {
              get: function () {
                return this._useSystemTicker;
              },
              set: function (t) {
                ((this._useSystemTicker = t),
                  t ? this.addTickerListener() : this.removeTickerListener());
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(i.prototype, "lastObjectRendered", {
              get: function () {
                return (
                  this.renderer._lastObjectRendered || this._tempDisplayObject
                );
              },
              enumerable: !1,
              configurable: !0,
            }),
            (i.prototype.hitTest = function (t, e) {
              return (
                ($.target = null),
                ($.data.global = t),
                e || (e = this.lastObjectRendered),
                this.processInteractive($, e, null, !0),
                $.target
              );
            }),
            (i.prototype.setTargetElement = function (t, e) {
              (void 0 === e && (e = 1),
                this.removeTickerListener(),
                this.removeEvents(),
                (this.interactionDOMElement = t),
                (this.resolution = e),
                this.addEvents(),
                this.addTickerListener());
            }),
            (i.prototype.addTickerListener = function () {
              !this.tickerAdded &&
                this.interactionDOMElement &&
                this._useSystemTicker &&
                (V.Rv.system.add(this.tickerUpdate, this, V.dQ.INTERACTION),
                (this.tickerAdded = !0));
            }),
            (i.prototype.removeTickerListener = function () {
              this.tickerAdded &&
                (V.Rv.system.remove(this.tickerUpdate, this),
                (this.tickerAdded = !1));
            }),
            (i.prototype.addEvents = function () {
              if (!this.eventsAdded && this.interactionDOMElement) {
                var t = this.interactionDOMElement.style;
                (globalThis.navigator.msPointerEnabled
                  ? ((t.msContentZooming = "none"), (t.msTouchAction = "none"))
                  : this.supportsPointerEvents && (t.touchAction = "none"),
                  this.supportsPointerEvents
                    ? (globalThis.document.addEventListener(
                        "pointermove",
                        this.onPointerMove,
                        this._eventListenerOptions,
                      ),
                      this.interactionDOMElement.addEventListener(
                        "pointerdown",
                        this.onPointerDown,
                        this._eventListenerOptions,
                      ),
                      this.interactionDOMElement.addEventListener(
                        "pointerleave",
                        this.onPointerOut,
                        this._eventListenerOptions,
                      ),
                      this.interactionDOMElement.addEventListener(
                        "pointerover",
                        this.onPointerOver,
                        this._eventListenerOptions,
                      ),
                      globalThis.addEventListener(
                        "pointercancel",
                        this.onPointerCancel,
                        this._eventListenerOptions,
                      ),
                      globalThis.addEventListener(
                        "pointerup",
                        this.onPointerUp,
                        this._eventListenerOptions,
                      ))
                    : (globalThis.document.addEventListener(
                        "mousemove",
                        this.onPointerMove,
                        this._eventListenerOptions,
                      ),
                      this.interactionDOMElement.addEventListener(
                        "mousedown",
                        this.onPointerDown,
                        this._eventListenerOptions,
                      ),
                      this.interactionDOMElement.addEventListener(
                        "mouseout",
                        this.onPointerOut,
                        this._eventListenerOptions,
                      ),
                      this.interactionDOMElement.addEventListener(
                        "mouseover",
                        this.onPointerOver,
                        this._eventListenerOptions,
                      ),
                      globalThis.addEventListener(
                        "mouseup",
                        this.onPointerUp,
                        this._eventListenerOptions,
                      )),
                  this.supportsTouchEvents &&
                    (this.interactionDOMElement.addEventListener(
                      "touchstart",
                      this.onPointerDown,
                      this._eventListenerOptions,
                    ),
                    this.interactionDOMElement.addEventListener(
                      "touchcancel",
                      this.onPointerCancel,
                      this._eventListenerOptions,
                    ),
                    this.interactionDOMElement.addEventListener(
                      "touchend",
                      this.onPointerUp,
                      this._eventListenerOptions,
                    ),
                    this.interactionDOMElement.addEventListener(
                      "touchmove",
                      this.onPointerMove,
                      this._eventListenerOptions,
                    )),
                  (this.eventsAdded = !0));
              }
            }),
            (i.prototype.removeEvents = function () {
              if (this.eventsAdded && this.interactionDOMElement) {
                var t = this.interactionDOMElement.style;
                (globalThis.navigator.msPointerEnabled
                  ? ((t.msContentZooming = ""), (t.msTouchAction = ""))
                  : this.supportsPointerEvents && (t.touchAction = ""),
                  this.supportsPointerEvents
                    ? (globalThis.document.removeEventListener(
                        "pointermove",
                        this.onPointerMove,
                        this._eventListenerOptions,
                      ),
                      this.interactionDOMElement.removeEventListener(
                        "pointerdown",
                        this.onPointerDown,
                        this._eventListenerOptions,
                      ),
                      this.interactionDOMElement.removeEventListener(
                        "pointerleave",
                        this.onPointerOut,
                        this._eventListenerOptions,
                      ),
                      this.interactionDOMElement.removeEventListener(
                        "pointerover",
                        this.onPointerOver,
                        this._eventListenerOptions,
                      ),
                      globalThis.removeEventListener(
                        "pointercancel",
                        this.onPointerCancel,
                        this._eventListenerOptions,
                      ),
                      globalThis.removeEventListener(
                        "pointerup",
                        this.onPointerUp,
                        this._eventListenerOptions,
                      ))
                    : (globalThis.document.removeEventListener(
                        "mousemove",
                        this.onPointerMove,
                        this._eventListenerOptions,
                      ),
                      this.interactionDOMElement.removeEventListener(
                        "mousedown",
                        this.onPointerDown,
                        this._eventListenerOptions,
                      ),
                      this.interactionDOMElement.removeEventListener(
                        "mouseout",
                        this.onPointerOut,
                        this._eventListenerOptions,
                      ),
                      this.interactionDOMElement.removeEventListener(
                        "mouseover",
                        this.onPointerOver,
                        this._eventListenerOptions,
                      ),
                      globalThis.removeEventListener(
                        "mouseup",
                        this.onPointerUp,
                        this._eventListenerOptions,
                      )),
                  this.supportsTouchEvents &&
                    (this.interactionDOMElement.removeEventListener(
                      "touchstart",
                      this.onPointerDown,
                      this._eventListenerOptions,
                    ),
                    this.interactionDOMElement.removeEventListener(
                      "touchcancel",
                      this.onPointerCancel,
                      this._eventListenerOptions,
                    ),
                    this.interactionDOMElement.removeEventListener(
                      "touchend",
                      this.onPointerUp,
                      this._eventListenerOptions,
                    ),
                    this.interactionDOMElement.removeEventListener(
                      "touchmove",
                      this.onPointerMove,
                      this._eventListenerOptions,
                    )),
                  (this.interactionDOMElement = null),
                  (this.eventsAdded = !1));
              }
            }),
            (i.prototype.tickerUpdate = function (t) {
              ((this._deltaTime += t),
                this._deltaTime < this.interactionFrequency ||
                  ((this._deltaTime = 0), this.update()));
            }),
            (i.prototype.update = function () {
              if (this.interactionDOMElement) {
                if (this._didMove) {
                  this._didMove = !1;
                  return;
                }
                for (var t in ((this.cursor = null),
                this.activeInteractionData))
                  if (this.activeInteractionData.hasOwnProperty(t)) {
                    var e = this.activeInteractionData[t];
                    if (e.originalEvent && "touch" !== e.pointerType) {
                      var i = this.configureInteractionEventForDOMEvent(
                        this.eventData,
                        e.originalEvent,
                        e,
                      );
                      this.processInteractive(
                        i,
                        this.lastObjectRendered,
                        this.processPointerOverOut,
                        !0,
                      );
                    }
                  }
                this.setCursorMode(this.cursor);
              }
            }),
            (i.prototype.setCursorMode = function (t) {
              t = t || "default";
              var e = !0;
              if (
                (globalThis.OffscreenCanvas &&
                  this.interactionDOMElement instanceof OffscreenCanvas &&
                  (e = !1),
                this.currentCursorMode !== t)
              ) {
                this.currentCursorMode = t;
                var i = this.cursorStyles[t];
                if (i)
                  switch (typeof i) {
                    case "string":
                      e && (this.interactionDOMElement.style.cursor = i);
                      break;
                    case "function":
                      i(t);
                      break;
                    case "object":
                      e && Object.assign(this.interactionDOMElement.style, i);
                  }
                else
                  e &&
                    "string" == typeof t &&
                    !Object.prototype.hasOwnProperty.call(
                      this.cursorStyles,
                      t,
                    ) &&
                    (this.interactionDOMElement.style.cursor = t);
              }
            }),
            (i.prototype.dispatchEvent = function (t, e, i) {
              (!i.stopPropagationHint || t === i.stopsPropagatingAt) &&
                ((i.currentTarget = t),
                (i.type = e),
                t.emit(e, i),
                t[e] && t[e](i));
            }),
            (i.prototype.delayDispatchEvent = function (t, e, i) {
              this.delayedEvents.push({
                displayObject: t,
                eventString: e,
                eventData: i,
              });
            }),
            (i.prototype.mapPositionToPoint = function (t, e, i) {
              var r = this.interactionDOMElement.parentElement
                  ? this.interactionDOMElement.getBoundingClientRect()
                  : {
                      x: 0,
                      y: 0,
                      width: this.interactionDOMElement.width,
                      height: this.interactionDOMElement.height,
                      left: 0,
                      top: 0,
                    },
                n = 1 / this.resolution;
              ((t.x =
                (e - r.left) *
                (this.interactionDOMElement.width / r.width) *
                n),
                (t.y =
                  (i - r.top) *
                  (this.interactionDOMElement.height / r.height) *
                  n));
            }),
            (i.prototype.processInteractive = function (t, e, i, r) {
              var n = this.search.findHit(t, e, i, r),
                o = this.delayedEvents;
              if (!o.length) return n;
              t.stopPropagationHint = !1;
              var s = o.length;
              this.delayedEvents = [];
              for (var a = 0; a < s; a++) {
                var h = o[a],
                  u = h.displayObject,
                  l = h.eventString,
                  c = h.eventData;
                (c.stopsPropagatingAt === u && (c.stopPropagationHint = !0),
                  this.dispatchEvent(u, l, c));
              }
              return n;
            }),
            (i.prototype.onPointerDown = function (t) {
              if (!this.supportsTouchEvents || "touch" !== t.pointerType) {
                var e = this.normalizeToPointerData(t);
                this.autoPreventDefault &&
                  e[0].isNormalized &&
                  ((!t.cancelable && "cancelable" in t) || t.preventDefault());
                for (var i = e.length, r = 0; r < i; r++) {
                  var n = e[r],
                    o = this.getInteractionDataForPointerId(n),
                    s = this.configureInteractionEventForDOMEvent(
                      this.eventData,
                      n,
                      o,
                    );
                  if (
                    ((s.data.originalEvent = t),
                    this.processInteractive(
                      s,
                      this.lastObjectRendered,
                      this.processPointerDown,
                      !0,
                    ),
                    this.emit("pointerdown", s),
                    "touch" === n.pointerType)
                  )
                    this.emit("touchstart", s);
                  else if (
                    "mouse" === n.pointerType ||
                    "pen" === n.pointerType
                  ) {
                    var a = 2 === n.button;
                    this.emit(a ? "rightdown" : "mousedown", this.eventData);
                  }
                }
              }
            }),
            (i.prototype.processPointerDown = function (t, e, i) {
              var r = t.data,
                n = t.data.identifier;
              if (i) {
                if (
                  (e.trackedPointers[n] || (e.trackedPointers[n] = new K(n)),
                  this.dispatchEvent(e, "pointerdown", t),
                  "touch" === r.pointerType)
                )
                  this.dispatchEvent(e, "touchstart", t);
                else if ("mouse" === r.pointerType || "pen" === r.pointerType) {
                  var o = 2 === r.button;
                  (o
                    ? (e.trackedPointers[n].rightDown = !0)
                    : (e.trackedPointers[n].leftDown = !0),
                    this.dispatchEvent(e, o ? "rightdown" : "mousedown", t));
                }
              }
            }),
            (i.prototype.onPointerComplete = function (t, e, i) {
              var r = this.normalizeToPointerData(t),
                n = r.length,
                o = t.target;
              t.composedPath &&
                t.composedPath().length > 0 &&
                (o = t.composedPath()[0]);
              for (
                var s = o !== this.interactionDOMElement ? "outside" : "",
                  a = 0;
                a < n;
                a++
              ) {
                var h = r[a],
                  u = this.getInteractionDataForPointerId(h),
                  l = this.configureInteractionEventForDOMEvent(
                    this.eventData,
                    h,
                    u,
                  );
                if (
                  ((l.data.originalEvent = t),
                  this.processInteractive(
                    l,
                    this.lastObjectRendered,
                    i,
                    e || !s,
                  ),
                  this.emit(e ? "pointercancel" : "pointerup" + s, l),
                  "mouse" === h.pointerType || "pen" === h.pointerType)
                ) {
                  var c = 2 === h.button;
                  this.emit(c ? "rightup" + s : "mouseup" + s, l);
                } else
                  "touch" === h.pointerType &&
                    (this.emit(e ? "touchcancel" : "touchend" + s, l),
                    this.releaseInteractionDataForPointerId(h.pointerId));
              }
            }),
            (i.prototype.onPointerCancel = function (t) {
              (this.supportsTouchEvents && "touch" === t.pointerType) ||
                this.onPointerComplete(t, !0, this.processPointerCancel);
            }),
            (i.prototype.processPointerCancel = function (t, e) {
              var i = t.data,
                r = t.data.identifier;
              void 0 !== e.trackedPointers[r] &&
                (delete e.trackedPointers[r],
                this.dispatchEvent(e, "pointercancel", t),
                "touch" === i.pointerType &&
                  this.dispatchEvent(e, "touchcancel", t));
            }),
            (i.prototype.onPointerUp = function (t) {
              (this.supportsTouchEvents && "touch" === t.pointerType) ||
                this.onPointerComplete(t, !1, this.processPointerUp);
            }),
            (i.prototype.processPointerUp = function (t, e, i) {
              var r = t.data,
                n = t.data.identifier,
                o = e.trackedPointers[n],
                s = "touch" === r.pointerType,
                a = "mouse" === r.pointerType || "pen" === r.pointerType,
                h = !1;
              if (a) {
                var u = 2 === r.button,
                  l = K.FLAGS,
                  c = u ? l.RIGHT_DOWN : l.LEFT_DOWN,
                  p = void 0 !== o && o.flags & c;
                (i
                  ? (this.dispatchEvent(e, u ? "rightup" : "mouseup", t),
                    p &&
                      (this.dispatchEvent(e, u ? "rightclick" : "click", t),
                      (h = !0)))
                  : p &&
                    this.dispatchEvent(
                      e,
                      u ? "rightupoutside" : "mouseupoutside",
                      t,
                    ),
                  o && (u ? (o.rightDown = !1) : (o.leftDown = !1)));
              }
              (i
                ? (this.dispatchEvent(e, "pointerup", t),
                  s && this.dispatchEvent(e, "touchend", t),
                  o &&
                    ((!a || h) && this.dispatchEvent(e, "pointertap", t),
                    s && (this.dispatchEvent(e, "tap", t), (o.over = !1))))
                : o &&
                  (this.dispatchEvent(e, "pointerupoutside", t),
                  s && this.dispatchEvent(e, "touchendoutside", t)),
                o && o.none && delete e.trackedPointers[n]);
            }),
            (i.prototype.onPointerMove = function (t) {
              if (!this.supportsTouchEvents || "touch" !== t.pointerType) {
                var e = this.normalizeToPointerData(t);
                ("mouse" === e[0].pointerType || "pen" === e[0].pointerType) &&
                  ((this._didMove = !0), (this.cursor = null));
                for (var i = e.length, r = 0; r < i; r++) {
                  var n = e[r],
                    o = this.getInteractionDataForPointerId(n),
                    s = this.configureInteractionEventForDOMEvent(
                      this.eventData,
                      n,
                      o,
                    );
                  ((s.data.originalEvent = t),
                    this.processInteractive(
                      s,
                      this.lastObjectRendered,
                      this.processPointerMove,
                      !0,
                    ),
                    this.emit("pointermove", s),
                    "touch" === n.pointerType && this.emit("touchmove", s),
                    ("mouse" === n.pointerType || "pen" === n.pointerType) &&
                      this.emit("mousemove", s));
                }
                "mouse" === e[0].pointerType && this.setCursorMode(this.cursor);
              }
            }),
            (i.prototype.processPointerMove = function (t, e, i) {
              var r = t.data,
                n = "touch" === r.pointerType,
                o = "mouse" === r.pointerType || "pen" === r.pointerType;
              (o && this.processPointerOverOut(t, e, i),
                (!this.moveWhenInside || i) &&
                  (this.dispatchEvent(e, "pointermove", t),
                  n && this.dispatchEvent(e, "touchmove", t),
                  o && this.dispatchEvent(e, "mousemove", t)));
            }),
            (i.prototype.onPointerOut = function (t) {
              if (!this.supportsTouchEvents || "touch" !== t.pointerType) {
                var e = this.normalizeToPointerData(t)[0];
                "mouse" === e.pointerType &&
                  ((this.mouseOverRenderer = !1), this.setCursorMode(null));
                var i = this.getInteractionDataForPointerId(e),
                  r = this.configureInteractionEventForDOMEvent(
                    this.eventData,
                    e,
                    i,
                  );
                ((r.data.originalEvent = e),
                  this.processInteractive(
                    r,
                    this.lastObjectRendered,
                    this.processPointerOverOut,
                    !1,
                  ),
                  this.emit("pointerout", r),
                  "mouse" === e.pointerType || "pen" === e.pointerType
                    ? this.emit("mouseout", r)
                    : this.releaseInteractionDataForPointerId(i.identifier));
              }
            }),
            (i.prototype.processPointerOverOut = function (t, e, i) {
              var r = t.data,
                n = t.data.identifier,
                o = "mouse" === r.pointerType || "pen" === r.pointerType,
                s = e.trackedPointers[n];
              (i && !s && (s = e.trackedPointers[n] = new K(n)),
                void 0 !== s &&
                  (i && this.mouseOverRenderer
                    ? (!s.over &&
                        ((s.over = !0),
                        this.delayDispatchEvent(e, "pointerover", t),
                        o && this.delayDispatchEvent(e, "mouseover", t)),
                      o && null === this.cursor && (this.cursor = e.cursor))
                    : s.over &&
                      ((s.over = !1),
                      this.dispatchEvent(e, "pointerout", this.eventData),
                      o && this.dispatchEvent(e, "mouseout", t),
                      s.none && delete e.trackedPointers[n])));
            }),
            (i.prototype.onPointerOver = function (t) {
              if (!this.supportsTouchEvents || "touch" !== t.pointerType) {
                var e = this.normalizeToPointerData(t)[0],
                  i = this.getInteractionDataForPointerId(e),
                  r = this.configureInteractionEventForDOMEvent(
                    this.eventData,
                    e,
                    i,
                  );
                ((r.data.originalEvent = e),
                  "mouse" === e.pointerType && (this.mouseOverRenderer = !0),
                  this.emit("pointerover", r),
                  ("mouse" === e.pointerType || "pen" === e.pointerType) &&
                    this.emit("mouseover", r));
              }
            }),
            (i.prototype.getInteractionDataForPointerId = function (t) {
              var e,
                i = t.pointerId;
              return (
                1 === i || "mouse" === t.pointerType
                  ? (e = this.mouse)
                  : this.activeInteractionData[i]
                    ? (e = this.activeInteractionData[i])
                    : (((e =
                        this.interactionDataPool.pop() || new q()).identifier =
                        i),
                      (this.activeInteractionData[i] = e)),
                e.copyEvent(t),
                e
              );
            }),
            (i.prototype.releaseInteractionDataForPointerId = function (t) {
              var e = this.activeInteractionData[t];
              e &&
                (delete this.activeInteractionData[t],
                e.reset(),
                this.interactionDataPool.push(e));
            }),
            (i.prototype.configureInteractionEventForDOMEvent = function (
              t,
              e,
              i,
            ) {
              return (
                (t.data = i),
                this.mapPositionToPoint(i.global, e.clientX, e.clientY),
                "touch" === e.pointerType &&
                  ((e.globalX = i.global.x), (e.globalY = i.global.y)),
                (i.originalEvent = e),
                t.reset(),
                t
              );
            }),
            (i.prototype.normalizeToPointerData = function (t) {
              var e = [];
              if (this.supportsTouchEvents && t instanceof TouchEvent)
                for (var i = 0, r = t.changedTouches.length; i < r; i++) {
                  var n = t.changedTouches[i];
                  (void 0 === n.button && (n.button = +!!t.touches.length),
                    void 0 === n.buttons && (n.buttons = +!!t.touches.length),
                    void 0 === n.isPrimary &&
                      (n.isPrimary =
                        1 === t.touches.length && "touchstart" === t.type),
                    void 0 === n.width && (n.width = n.radiusX || 1),
                    void 0 === n.height && (n.height = n.radiusY || 1),
                    void 0 === n.tiltX && (n.tiltX = 0),
                    void 0 === n.tiltY && (n.tiltY = 0),
                    void 0 === n.pointerType && (n.pointerType = "touch"),
                    void 0 === n.pointerId && (n.pointerId = n.identifier || 0),
                    void 0 === n.pressure && (n.pressure = n.force || 0.5),
                    void 0 === n.twist && (n.twist = 0),
                    void 0 === n.tangentialPressure &&
                      (n.tangentialPressure = 0),
                    void 0 === n.layerX && (n.layerX = n.offsetX = n.clientX),
                    void 0 === n.layerY && (n.layerY = n.offsetY = n.clientY),
                    (n.isNormalized = !0),
                    e.push(n));
                }
              else
                ((!globalThis.MouseEvent ||
                  (t instanceof MouseEvent &&
                    (!this.supportsPointerEvents ||
                      !(t instanceof globalThis.PointerEvent)))) &&
                  (void 0 === t.isPrimary && (t.isPrimary = !0),
                  void 0 === t.width && (t.width = 1),
                  void 0 === t.height && (t.height = 1),
                  void 0 === t.tiltX && (t.tiltX = 0),
                  void 0 === t.tiltY && (t.tiltY = 0),
                  void 0 === t.pointerType && (t.pointerType = "mouse"),
                  void 0 === t.pointerId && (t.pointerId = 1),
                  void 0 === t.pressure && (t.pressure = 0.5),
                  void 0 === t.twist && (t.twist = 0),
                  void 0 === t.tangentialPressure && (t.tangentialPressure = 0),
                  (t.isNormalized = !0)),
                  e.push(t));
              return e;
            }),
            (i.prototype.destroy = function () {
              (this.removeEvents(),
                this.removeTickerListener(),
                this.removeAllListeners(),
                (this.renderer = null),
                (this.mouse = null),
                (this.eventData = null),
                (this.interactionDOMElement = null),
                (this.onPointerDown = null),
                (this.processPointerDown = null),
                (this.onPointerUp = null),
                (this.processPointerUp = null),
                (this.onPointerCancel = null),
                (this.processPointerCancel = null),
                (this.onPointerMove = null),
                (this.processPointerMove = null),
                (this.onPointerOut = null),
                (this.processPointerOverOut = null),
                (this.onPointerOver = null),
                (this.search = null));
            }),
            (i.extension = {
              name: "interaction",
              type: [W.Ag.RendererPlugin, W.Ag.CanvasRendererPlugin],
            }),
            i
          );
        })(L.bk),
        te = new F.M_(),
        ti = (function () {
          function t(t) {
            this.renderer = t;
          }
          return (
            (t.prototype.image = function (t, e, i) {
              var r = new Image();
              return ((r.src = this.base64(t, e, i)), r);
            }),
            (t.prototype.base64 = function (t, e, i) {
              return this.canvas(t).toDataURL(e, i);
            }),
            (t.prototype.canvas = function (e, i) {
              var r = this._rawPixels(e, i),
                n = r.pixels,
                o = r.width,
                s = r.height,
                a = r.flipY,
                h = new L.S0(o, s, 1),
                u = h.context.getImageData(0, 0, o, s);
              if (
                (t.arrayPostDivide(n, u.data),
                h.context.putImageData(u, 0, 0),
                a)
              ) {
                var l = new L.S0(h.width, h.height, 1);
                (l.context.scale(1, -1),
                  l.context.drawImage(h.canvas, 0, -s),
                  h.destroy(),
                  (h = l));
              }
              return h.canvas;
            }),
            (t.prototype.pixels = function (e, i) {
              var r = this._rawPixels(e, i).pixels;
              return (t.arrayPostDivide(r, r), r);
            }),
            (t.prototype._rawPixels = function (t, e) {
              var i,
                r,
                n = this.renderer,
                o = !1,
                s = !1;
              if (t)
                if (t instanceof W.Y7) r = t;
                else {
                  var a =
                    n.context.webGLVersion >= 2 ? n.multisample : G.he.NONE;
                  if (
                    ((r = this.renderer.generateTexture(t, { multisample: a })),
                    a !== G.he.NONE)
                  ) {
                    var h = W.Y7.create({ width: r.width, height: r.height });
                    (n.framebuffer.bind(r.framebuffer),
                      n.framebuffer.blit(h.framebuffer),
                      n.framebuffer.bind(null),
                      r.destroy(!0),
                      (r = h));
                  }
                  s = !0;
                }
              r
                ? ((i = r.baseTexture.resolution),
                  (e = null != e ? e : r.frame),
                  (o = !1),
                  n.renderTexture.bind(r))
                : ((i = n.resolution),
                  e || (((e = te).width = n.width), (e.height = n.height)),
                  (o = !0),
                  n.renderTexture.bind(null));
              var u = Math.round(e.width * i),
                l = Math.round(e.height * i),
                c = new Uint8Array(4 * u * l),
                p = n.gl;
              return (
                p.readPixels(
                  Math.round(e.x * i),
                  Math.round(e.y * i),
                  u,
                  l,
                  p.RGBA,
                  p.UNSIGNED_BYTE,
                  c,
                ),
                s && r.destroy(!0),
                { pixels: c, width: u, height: l, flipY: o }
              );
            }),
            (t.prototype.destroy = function () {
              this.renderer = null;
            }),
            (t.arrayPostDivide = function (t, e) {
              for (var i = 0; i < t.length; i += 4) {
                var r = (e[i + 3] = t[i + 3]);
                0 !== r
                  ? ((e[i] = Math.round(Math.min((255 * t[i]) / r, 255))),
                    (e[i + 1] = Math.round(
                      Math.min((255 * t[i + 1]) / r, 255),
                    )),
                    (e[i + 2] = Math.round(
                      Math.min((255 * t[i + 2]) / r, 255),
                    )))
                  : ((e[i] = t[i]),
                    (e[i + 1] = t[i + 1]),
                    (e[i + 2] = t[i + 2]));
              }
            }),
            (t.extension = { name: "extract", type: W.Ag.RendererPlugin }),
            t
          );
        })(),
        tr = (function () {
          function t(t, e, i) {
            (void 0 === e && (e = !1),
              (this._fn = t),
              (this._once = e),
              (this._thisArg = i),
              (this._next = this._prev = this._owner = null));
          }
          return (
            (t.prototype.detach = function () {
              return null !== this._owner && (this._owner.detach(this), !0);
            }),
            t
          );
        })();
      function tn(t, e) {
        return (
          t._head ? ((t._tail._next = e), (e._prev = t._tail)) : (t._head = e),
          (t._tail = e),
          (e._owner = t),
          e
        );
      }
      var to = (function () {
        function t() {
          this._head = this._tail = void 0;
        }
        return (
          (t.prototype.handlers = function (t) {
            void 0 === t && (t = !1);
            var e = this._head;
            if (t) return !!e;
            for (var i = []; e; ) (i.push(e), (e = e._next));
            return i;
          }),
          (t.prototype.has = function (t) {
            if (!(t instanceof tr))
              throw Error(
                "MiniSignal#has(): First arg must be a SignalBinding object.",
              );
            return t._owner === this;
          }),
          (t.prototype.dispatch = function () {
            for (var t = arguments, e = [], i = 0; i < arguments.length; i++)
              e[i] = t[i];
            var r = this._head;
            if (!r) return !1;
            for (; r; )
              (r._once && this.detach(r),
                r._fn.apply(r._thisArg, e),
                (r = r._next));
            return !0;
          }),
          (t.prototype.add = function (t, e) {
            if ((void 0 === e && (e = null), "function" != typeof t))
              throw Error("MiniSignal#add(): First arg must be a Function.");
            return tn(this, new tr(t, !1, e));
          }),
          (t.prototype.once = function (t, e) {
            if ((void 0 === e && (e = null), "function" != typeof t))
              throw Error("MiniSignal#once(): First arg must be a Function.");
            return tn(this, new tr(t, !0, e));
          }),
          (t.prototype.detach = function (t) {
            if (!(t instanceof tr))
              throw Error(
                "MiniSignal#detach(): First arg must be a SignalBinding object.",
              );
            return (
              t._owner !== this ||
                (t._prev && (t._prev._next = t._next),
                t._next && (t._next._prev = t._prev),
                t === this._head
                  ? ((this._head = t._next),
                    null === t._next && (this._tail = null))
                  : t === this._tail &&
                    ((this._tail = t._prev), (this._tail._next = null)),
                (t._owner = null)),
              this
            );
          }),
          (t.prototype.detachAll = function () {
            var t = this._head;
            if (!t) return this;
            for (this._head = this._tail = null; t; )
              ((t._owner = null), (t = t._next));
            return this;
          }),
          t
        );
      })();
      function ts(t, e) {
        for (
          var i = [
              "source",
              "protocol",
              "authority",
              "userInfo",
              "user",
              "password",
              "host",
              "port",
              "relative",
              "path",
              "directory",
              "file",
              "query",
              "anchor",
            ],
            r = "queryKey",
            n = /(?:^|&)([^&=]*)=?([^&]*)/g,
            o = {
              strict:
                /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
              loose:
                /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
            }[(e = e || {}).strictMode ? "strict" : "loose"].exec(t),
            s = {},
            a = 14;
          a--;
        )
          s[i[a]] = o[a] || "";
        return (
          (s[r] = {}),
          s[i[12]].replace(n, function (t, e, i) {
            e && (s[r][e] = i);
          }),
          s
        );
      }
      var ta = null;
      function th() {}
      function tu(t, e, i) {
        (e && 0 === e.indexOf(".") && (e = e.substring(1)), e && (t[e] = i));
      }
      function tl(t) {
        return t.toString().replace("object ", "");
      }
      var tc = (function () {
        function t(e, i, r) {
          if (
            ((this._dequeue = th),
            (this._onLoadBinding = null),
            (this._elementTimer = 0),
            (this._boundComplete = null),
            (this._boundOnError = null),
            (this._boundOnProgress = null),
            (this._boundOnTimeout = null),
            (this._boundXhrOnError = null),
            (this._boundXhrOnTimeout = null),
            (this._boundXhrOnAbort = null),
            (this._boundXhrOnLoad = null),
            "string" != typeof e || "string" != typeof i)
          )
            throw Error(
              "Both name and url are required for constructing a resource.",
            );
          ((r = r || {}),
            (this._flags = 0),
            this._setFlag(t.STATUS_FLAGS.DATA_URL, 0 === i.indexOf("data:")),
            (this.name = e),
            (this.url = i),
            (this.extension = this._getExtension()),
            (this.data = null),
            (this.crossOrigin =
              !0 === r.crossOrigin ? "anonymous" : r.crossOrigin),
            (this.timeout = r.timeout || 0),
            (this.loadType = r.loadType || this._determineLoadType()),
            (this.xhrType = r.xhrType),
            (this.metadata = r.metadata || {}),
            (this.error = null),
            (this.xhr = null),
            (this.children = []),
            (this.type = t.TYPE.UNKNOWN),
            (this.progressChunk = 0),
            (this._dequeue = th),
            (this._onLoadBinding = null),
            (this._elementTimer = 0),
            (this._boundComplete = this.complete.bind(this)),
            (this._boundOnError = this._onError.bind(this)),
            (this._boundOnProgress = this._onProgress.bind(this)),
            (this._boundOnTimeout = this._onTimeout.bind(this)),
            (this._boundXhrOnError = this._xhrOnError.bind(this)),
            (this._boundXhrOnTimeout = this._xhrOnTimeout.bind(this)),
            (this._boundXhrOnAbort = this._xhrOnAbort.bind(this)),
            (this._boundXhrOnLoad = this._xhrOnLoad.bind(this)),
            (this.onStart = new to()),
            (this.onProgress = new to()),
            (this.onComplete = new to()),
            (this.onAfterMiddleware = new to()));
        }
        return (
          (t.setExtensionLoadType = function (e, i) {
            tu(t._loadTypeMap, e, i);
          }),
          (t.setExtensionXhrType = function (e, i) {
            tu(t._xhrTypeMap, e, i);
          }),
          Object.defineProperty(t.prototype, "isDataUrl", {
            get: function () {
              return this._hasFlag(t.STATUS_FLAGS.DATA_URL);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "isComplete", {
            get: function () {
              return this._hasFlag(t.STATUS_FLAGS.COMPLETE);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "isLoading", {
            get: function () {
              return this._hasFlag(t.STATUS_FLAGS.LOADING);
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.prototype.complete = function () {
            (this._clearEvents(), this._finish());
          }),
          (t.prototype.abort = function (e) {
            if (!this.error) {
              if (((this.error = Error(e)), this._clearEvents(), this.xhr))
                this.xhr.abort();
              else if (this.xdr) this.xdr.abort();
              else if (this.data)
                if (this.data.src) this.data.src = t.EMPTY_GIF;
                else
                  for (; this.data.firstChild; )
                    this.data.removeChild(this.data.firstChild);
              this._finish();
            }
          }),
          (t.prototype.load = function (e) {
            var i = this;
            if (!this.isLoading) {
              if (this.isComplete) {
                e &&
                  setTimeout(function () {
                    return e(i);
                  }, 1);
                return;
              }
              switch (
                (e && this.onComplete.once(e),
                this._setFlag(t.STATUS_FLAGS.LOADING, !0),
                this.onStart.dispatch(this),
                (!1 === this.crossOrigin ||
                  "string" != typeof this.crossOrigin) &&
                  (this.crossOrigin = this._determineCrossOrigin(this.url)),
                this.loadType)
              ) {
                case t.LOAD_TYPE.IMAGE:
                  ((this.type = t.TYPE.IMAGE), this._loadElement("image"));
                  break;
                case t.LOAD_TYPE.AUDIO:
                  ((this.type = t.TYPE.AUDIO),
                    this._loadSourceElement("audio"));
                  break;
                case t.LOAD_TYPE.VIDEO:
                  ((this.type = t.TYPE.VIDEO),
                    this._loadSourceElement("video"));
                  break;
                case t.LOAD_TYPE.XHR:
                default:
                  (void 0 === n &&
                    (n = !!(
                      globalThis.XDomainRequest &&
                      !("withCredentials" in new XMLHttpRequest())
                    )),
                    n && this.crossOrigin ? this._loadXdr() : this._loadXhr());
              }
            }
          }),
          (t.prototype._hasFlag = function (t) {
            return (this._flags & t) != 0;
          }),
          (t.prototype._setFlag = function (t, e) {
            this._flags = e ? this._flags | t : this._flags & ~t;
          }),
          (t.prototype._clearEvents = function () {
            (clearTimeout(this._elementTimer),
              this.data &&
                this.data.removeEventListener &&
                (this.data.removeEventListener("error", this._boundOnError, !1),
                this.data.removeEventListener("load", this._boundComplete, !1),
                this.data.removeEventListener(
                  "progress",
                  this._boundOnProgress,
                  !1,
                ),
                this.data.removeEventListener(
                  "canplaythrough",
                  this._boundComplete,
                  !1,
                )),
              this.xhr &&
                (this.xhr.removeEventListener
                  ? (this.xhr.removeEventListener(
                      "error",
                      this._boundXhrOnError,
                      !1,
                    ),
                    this.xhr.removeEventListener(
                      "timeout",
                      this._boundXhrOnTimeout,
                      !1,
                    ),
                    this.xhr.removeEventListener(
                      "abort",
                      this._boundXhrOnAbort,
                      !1,
                    ),
                    this.xhr.removeEventListener(
                      "progress",
                      this._boundOnProgress,
                      !1,
                    ),
                    this.xhr.removeEventListener(
                      "load",
                      this._boundXhrOnLoad,
                      !1,
                    ))
                  : ((this.xhr.onerror = null),
                    (this.xhr.ontimeout = null),
                    (this.xhr.onprogress = null),
                    (this.xhr.onload = null))));
          }),
          (t.prototype._finish = function () {
            if (this.isComplete)
              throw Error(
                "Complete called again for an already completed resource.",
              );
            (this._setFlag(t.STATUS_FLAGS.COMPLETE, !0),
              this._setFlag(t.STATUS_FLAGS.LOADING, !1),
              this.onComplete.dispatch(this));
          }),
          (t.prototype._loadElement = function (t) {
            (this.metadata.loadElement
              ? (this.data = this.metadata.loadElement)
              : "image" === t && void 0 !== globalThis.Image
                ? (this.data = new Image())
                : (this.data = document.createElement(t)),
              this.crossOrigin && (this.data.crossOrigin = this.crossOrigin),
              this.metadata.skipSource || (this.data.src = this.url),
              this.data.addEventListener("error", this._boundOnError, !1),
              this.data.addEventListener("load", this._boundComplete, !1),
              this.data.addEventListener("progress", this._boundOnProgress, !1),
              this.timeout &&
                (this._elementTimer = setTimeout(
                  this._boundOnTimeout,
                  this.timeout,
                )));
          }),
          (t.prototype._loadSourceElement = function (t) {
            if (
              (this.metadata.loadElement
                ? (this.data = this.metadata.loadElement)
                : "audio" === t && void 0 !== globalThis.Audio
                  ? (this.data = new Audio())
                  : (this.data = document.createElement(t)),
              null === this.data)
            )
              return void this.abort("Unsupported element: " + t);
            if (
              (this.crossOrigin && (this.data.crossOrigin = this.crossOrigin),
              !this.metadata.skipSource)
            )
              if (navigator.isCocoonJS)
                this.data.src = Array.isArray(this.url)
                  ? this.url[0]
                  : this.url;
              else if (Array.isArray(this.url))
                for (
                  var e = this.metadata.mimeType, i = 0;
                  i < this.url.length;
                  ++i
                )
                  this.data.appendChild(
                    this._createSource(
                      t,
                      this.url[i],
                      Array.isArray(e) ? e[i] : e,
                    ),
                  );
              else {
                var e = this.metadata.mimeType;
                this.data.appendChild(
                  this._createSource(t, this.url, Array.isArray(e) ? e[0] : e),
                );
              }
            (this.data.addEventListener("error", this._boundOnError, !1),
              this.data.addEventListener("load", this._boundComplete, !1),
              this.data.addEventListener("progress", this._boundOnProgress, !1),
              this.data.addEventListener(
                "canplaythrough",
                this._boundComplete,
                !1,
              ),
              this.data.load(),
              this.timeout &&
                (this._elementTimer = setTimeout(
                  this._boundOnTimeout,
                  this.timeout,
                )));
          }),
          (t.prototype._loadXhr = function () {
            "string" != typeof this.xhrType &&
              (this.xhrType = this._determineXhrType());
            var e = (this.xhr = new XMLHttpRequest());
            ("use-credentials" === this.crossOrigin && (e.withCredentials = !0),
              e.open("GET", this.url, !0),
              (e.timeout = this.timeout),
              this.xhrType === t.XHR_RESPONSE_TYPE.JSON ||
              this.xhrType === t.XHR_RESPONSE_TYPE.DOCUMENT
                ? (e.responseType = t.XHR_RESPONSE_TYPE.TEXT)
                : (e.responseType = this.xhrType),
              e.addEventListener("error", this._boundXhrOnError, !1),
              e.addEventListener("timeout", this._boundXhrOnTimeout, !1),
              e.addEventListener("abort", this._boundXhrOnAbort, !1),
              e.addEventListener("progress", this._boundOnProgress, !1),
              e.addEventListener("load", this._boundXhrOnLoad, !1),
              e.send());
          }),
          (t.prototype._loadXdr = function () {
            "string" != typeof this.xhrType &&
              (this.xhrType = this._determineXhrType());
            var t = (this.xhr = new globalThis.XDomainRequest());
            ((t.timeout = this.timeout || 5e3),
              (t.onerror = this._boundXhrOnError),
              (t.ontimeout = this._boundXhrOnTimeout),
              (t.onprogress = this._boundOnProgress),
              (t.onload = this._boundXhrOnLoad),
              t.open("GET", this.url, !0),
              setTimeout(function () {
                return t.send();
              }, 1));
          }),
          (t.prototype._createSource = function (t, e, i) {
            i || (i = t + "/" + this._getExtension(e));
            var r = document.createElement("source");
            return ((r.src = e), (r.type = i), r);
          }),
          (t.prototype._onError = function (t) {
            this.abort("Failed to load element using: " + t.target.nodeName);
          }),
          (t.prototype._onProgress = function (t) {
            t &&
              t.lengthComputable &&
              this.onProgress.dispatch(this, t.loaded / t.total);
          }),
          (t.prototype._onTimeout = function () {
            this.abort("Load timed out.");
          }),
          (t.prototype._xhrOnError = function () {
            var t = this.xhr;
            this.abort(
              tl(t) +
                " Request failed. Status: " +
                t.status +
                ', text: "' +
                t.statusText +
                '"',
            );
          }),
          (t.prototype._xhrOnTimeout = function () {
            var t = this.xhr;
            this.abort(tl(t) + " Request timed out.");
          }),
          (t.prototype._xhrOnAbort = function () {
            var t = this.xhr;
            this.abort(tl(t) + " Request was aborted by the user.");
          }),
          (t.prototype._xhrOnLoad = function () {
            var e = this.xhr,
              i = "",
              r = void 0 === e.status ? 200 : e.status;
            if (
              (("" === e.responseType ||
                "text" === e.responseType ||
                void 0 === e.responseType) &&
                (i = e.responseText),
              0 === r &&
              (i.length > 0 || e.responseType === t.XHR_RESPONSE_TYPE.BUFFER)
                ? (r = 200)
                : 1223 === r && (r = 204),
              ((r / 100) | 0) != 2)
            )
              return void this.abort(
                "[" + e.status + "] " + e.statusText + ": " + e.responseURL,
              );
            if (this.xhrType === t.XHR_RESPONSE_TYPE.TEXT)
              ((this.data = i), (this.type = t.TYPE.TEXT));
            else if (this.xhrType === t.XHR_RESPONSE_TYPE.JSON)
              try {
                ((this.data = JSON.parse(i)), (this.type = t.TYPE.JSON));
              } catch (t) {
                this.abort("Error trying to parse loaded json: " + t);
                return;
              }
            else if (this.xhrType === t.XHR_RESPONSE_TYPE.DOCUMENT)
              try {
                if (globalThis.DOMParser) {
                  var n = new DOMParser();
                  this.data = n.parseFromString(i, "text/xml");
                } else {
                  var o = document.createElement("div");
                  ((o.innerHTML = i), (this.data = o));
                }
                this.type = t.TYPE.XML;
              } catch (t) {
                this.abort("Error trying to parse loaded xml: " + t);
                return;
              }
            else this.data = e.response || i;
            this.complete();
          }),
          (t.prototype._determineCrossOrigin = function (t, e) {
            if (0 === t.indexOf("data:")) return "";
            if (globalThis.origin !== globalThis.location.origin)
              return "anonymous";
            ((e = e || globalThis.location),
              ta || (ta = document.createElement("a")),
              (ta.href = t));
            var i = ts(ta.href, { strictMode: !0 }),
              r = (!i.port && "" === e.port) || i.port === e.port,
              n = i.protocol ? i.protocol + ":" : "";
            return i.host === e.hostname && r && n === e.protocol
              ? ""
              : "anonymous";
          }),
          (t.prototype._determineXhrType = function () {
            return t._xhrTypeMap[this.extension] || t.XHR_RESPONSE_TYPE.TEXT;
          }),
          (t.prototype._determineLoadType = function () {
            return t._loadTypeMap[this.extension] || t.LOAD_TYPE.XHR;
          }),
          (t.prototype._getExtension = function (t) {
            void 0 === t && (t = this.url);
            var e = "";
            if (this.isDataUrl) {
              var i = t.indexOf("/");
              e = t.substring(i + 1, t.indexOf(";", i));
            } else {
              var r = t.indexOf("?"),
                n = t.indexOf("#"),
                o = Math.min(r > -1 ? r : t.length, n > -1 ? n : t.length);
              e = (t = t.substring(0, o)).substring(t.lastIndexOf(".") + 1);
            }
            return e.toLowerCase();
          }),
          (t.prototype._getMimeFromXhrType = function (e) {
            switch (e) {
              case t.XHR_RESPONSE_TYPE.BUFFER:
                return "application/octet-binary";
              case t.XHR_RESPONSE_TYPE.BLOB:
                return "application/blob";
              case t.XHR_RESPONSE_TYPE.DOCUMENT:
                return "application/xml";
              case t.XHR_RESPONSE_TYPE.JSON:
                return "application/json";
              case t.XHR_RESPONSE_TYPE.DEFAULT:
              case t.XHR_RESPONSE_TYPE.TEXT:
              default:
                return "text/plain";
            }
          }),
          t
        );
      })();
      function tp() {}
      !(function (t) {
        var e, i, r, n;
        (((e = t.STATUS_FLAGS || (t.STATUS_FLAGS = {}))[(e.NONE = 0)] = "NONE"),
          (e[(e.DATA_URL = 1)] = "DATA_URL"),
          (e[(e.COMPLETE = 2)] = "COMPLETE"),
          (e[(e.LOADING = 4)] = "LOADING"),
          ((i = t.TYPE || (t.TYPE = {}))[(i.UNKNOWN = 0)] = "UNKNOWN"),
          (i[(i.JSON = 1)] = "JSON"),
          (i[(i.XML = 2)] = "XML"),
          (i[(i.IMAGE = 3)] = "IMAGE"),
          (i[(i.AUDIO = 4)] = "AUDIO"),
          (i[(i.VIDEO = 5)] = "VIDEO"),
          (i[(i.TEXT = 6)] = "TEXT"),
          ((r = t.LOAD_TYPE || (t.LOAD_TYPE = {}))[(r.XHR = 1)] = "XHR"),
          (r[(r.IMAGE = 2)] = "IMAGE"),
          (r[(r.AUDIO = 3)] = "AUDIO"),
          (r[(r.VIDEO = 4)] = "VIDEO"),
          ((n = t.XHR_RESPONSE_TYPE || (t.XHR_RESPONSE_TYPE = {})).DEFAULT =
            "text"),
          (n.BUFFER = "arraybuffer"),
          (n.BLOB = "blob"),
          (n.DOCUMENT = "document"),
          (n.JSON = "json"),
          (n.TEXT = "text"),
          (t._loadTypeMap = {
            gif: t.LOAD_TYPE.IMAGE,
            png: t.LOAD_TYPE.IMAGE,
            bmp: t.LOAD_TYPE.IMAGE,
            jpg: t.LOAD_TYPE.IMAGE,
            jpeg: t.LOAD_TYPE.IMAGE,
            tif: t.LOAD_TYPE.IMAGE,
            tiff: t.LOAD_TYPE.IMAGE,
            webp: t.LOAD_TYPE.IMAGE,
            tga: t.LOAD_TYPE.IMAGE,
            avif: t.LOAD_TYPE.IMAGE,
            svg: t.LOAD_TYPE.IMAGE,
            "svg+xml": t.LOAD_TYPE.IMAGE,
            mp3: t.LOAD_TYPE.AUDIO,
            ogg: t.LOAD_TYPE.AUDIO,
            wav: t.LOAD_TYPE.AUDIO,
            mp4: t.LOAD_TYPE.VIDEO,
            webm: t.LOAD_TYPE.VIDEO,
          }),
          (t._xhrTypeMap = {
            xhtml: t.XHR_RESPONSE_TYPE.DOCUMENT,
            html: t.XHR_RESPONSE_TYPE.DOCUMENT,
            htm: t.XHR_RESPONSE_TYPE.DOCUMENT,
            xml: t.XHR_RESPONSE_TYPE.DOCUMENT,
            tmx: t.XHR_RESPONSE_TYPE.DOCUMENT,
            svg: t.XHR_RESPONSE_TYPE.DOCUMENT,
            tsx: t.XHR_RESPONSE_TYPE.DOCUMENT,
            gif: t.XHR_RESPONSE_TYPE.BLOB,
            png: t.XHR_RESPONSE_TYPE.BLOB,
            bmp: t.XHR_RESPONSE_TYPE.BLOB,
            jpg: t.XHR_RESPONSE_TYPE.BLOB,
            jpeg: t.XHR_RESPONSE_TYPE.BLOB,
            tif: t.XHR_RESPONSE_TYPE.BLOB,
            tiff: t.XHR_RESPONSE_TYPE.BLOB,
            webp: t.XHR_RESPONSE_TYPE.BLOB,
            tga: t.XHR_RESPONSE_TYPE.BLOB,
            avif: t.XHR_RESPONSE_TYPE.BLOB,
            json: t.XHR_RESPONSE_TYPE.JSON,
            text: t.XHR_RESPONSE_TYPE.TEXT,
            txt: t.XHR_RESPONSE_TYPE.TEXT,
            ttf: t.XHR_RESPONSE_TYPE.BUFFER,
            otf: t.XHR_RESPONSE_TYPE.BUFFER,
          }),
          (t.EMPTY_GIF =
            "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="));
      })(tc || (tc = {}));
      var td = function (t, e) {
          ((this.data = t), (this.callback = e));
        },
        tf = (function () {
          function t(t, e) {
            var i = this;
            if (
              (void 0 === e && (e = 1),
              (this.workers = 0),
              (this.saturated = tp),
              (this.unsaturated = tp),
              (this.empty = tp),
              (this.drain = tp),
              (this.error = tp),
              (this.started = !1),
              (this.paused = !1),
              (this._tasks = []),
              (this._insert = function (t, e, r) {
                if (r && "function" != typeof r)
                  throw Error("task callback must be a function");
                if (((i.started = !0), null == t && i.idle()))
                  return void setTimeout(function () {
                    return i.drain();
                  }, 1);
                var n = new td(t, "function" == typeof r ? r : tp);
                (e ? i._tasks.unshift(n) : i._tasks.push(n),
                  setTimeout(i.process, 1));
              }),
              (this.process = function () {
                for (
                  ;
                  !i.paused && i.workers < i.concurrency && i._tasks.length;
                ) {
                  var t = i._tasks.shift();
                  (0 === i._tasks.length && i.empty(),
                    (i.workers += 1),
                    i.workers === i.concurrency && i.saturated(),
                    i._worker(
                      t.data,
                      (function (t) {
                        return function () {
                          for (
                            var e = arguments, i = [], r = 0;
                            r < arguments.length;
                            r++
                          )
                            i[r] = e[r];
                          if (null === t)
                            throw Error("Callback was already called.");
                          var n = t;
                          ((t = null), n.apply(this, i));
                        };
                      })(i._next(t)),
                    ));
                }
              }),
              (this._worker = t),
              0 === e)
            )
              throw Error("Concurrency must not be zero");
            ((this.concurrency = e), (this.buffer = e / 4));
          }
          return (
            (t.prototype._next = function (t) {
              var e = this;
              return function () {
                for (
                  var i = arguments, r = [], n = 0;
                  n < arguments.length;
                  n++
                )
                  r[n] = i[n];
                ((e.workers -= 1),
                  t.callback.apply(t, r),
                  null != r[0] && e.error(r[0], t.data),
                  e.workers <= e.concurrency - e.buffer && e.unsaturated(),
                  e.idle() && e.drain(),
                  e.process());
              };
            }),
            (t.prototype.push = function (t, e) {
              this._insert(t, !1, e);
            }),
            (t.prototype.kill = function () {
              ((this.workers = 0),
                (this.drain = tp),
                (this.started = !1),
                (this._tasks = []));
            }),
            (t.prototype.unshift = function (t, e) {
              this._insert(t, !0, e);
            }),
            (t.prototype.length = function () {
              return this._tasks.length;
            }),
            (t.prototype.running = function () {
              return this.workers;
            }),
            (t.prototype.idle = function () {
              return this._tasks.length + this.workers === 0;
            }),
            (t.prototype.pause = function () {
              !0 !== this.paused && (this.paused = !0);
            }),
            (t.prototype.resume = function () {
              if (!1 !== this.paused) {
                this.paused = !1;
                for (var t = 1; t <= this.concurrency; t++) this.process();
              }
            }),
            (t.eachSeries = function (t, e, i, r) {
              var n = 0,
                o = t.length;
              !(function s(a) {
                if (a || n === o) {
                  i && i(a);
                  return;
                }
                r
                  ? setTimeout(function () {
                      e(t[n++], s);
                    }, 1)
                  : e(t[n++], s);
              })();
            }),
            (t.queue = function (e, i) {
              return new t(e, i);
            }),
            t
          );
        })(),
        t_ = /(#[\w-]+)?$/,
        tv = (function () {
          function t(e, i) {
            var r = this;
            (void 0 === e && (e = ""),
              void 0 === i && (i = 10),
              (this.progress = 0),
              (this.loading = !1),
              (this.defaultQueryString = ""),
              (this._beforeMiddleware = []),
              (this._afterMiddleware = []),
              (this._resourcesParsing = []),
              (this._boundLoadResource = function (t, e) {
                return r._loadResource(t, e);
              }),
              (this.resources = {}),
              (this.baseUrl = e),
              (this._beforeMiddleware = []),
              (this._afterMiddleware = []),
              (this._resourcesParsing = []),
              (this._boundLoadResource = function (t, e) {
                return r._loadResource(t, e);
              }),
              (this._queue = tf.queue(this._boundLoadResource, i)),
              this._queue.pause(),
              (this.resources = {}),
              (this.onProgress = new to()),
              (this.onError = new to()),
              (this.onLoad = new to()),
              (this.onStart = new to()),
              (this.onComplete = new to()));
            for (var n = 0; n < t._plugins.length; ++n) {
              var o = t._plugins[n],
                s = o.pre,
                a = o.use;
              (s && this.pre(s), a && this.use(a));
            }
            this._protected = !1;
          }
          return (
            (t.prototype._add = function (t, e, i, r) {
              if (this.loading && (!i || !i.parentResource))
                throw Error(
                  "Cannot add resources while the loader is running.",
                );
              if (this.resources[t])
                throw Error('Resource named "' + t + '" already exists.');
              if (
                ((e = this._prepareUrl(e)),
                (this.resources[t] = new tc(t, e, i)),
                "function" == typeof r &&
                  this.resources[t].onAfterMiddleware.once(r),
                this.loading)
              ) {
                for (
                  var n = i.parentResource, o = [], s = 0;
                  s < n.children.length;
                  ++s
                )
                  n.children[s].isComplete || o.push(n.children[s]);
                var a = (n.progressChunk * (o.length + 1)) / (o.length + 2);
                (n.children.push(this.resources[t]), (n.progressChunk = a));
                for (var s = 0; s < o.length; ++s) o[s].progressChunk = a;
                this.resources[t].progressChunk = a;
              }
              return (this._queue.push(this.resources[t]), this);
            }),
            (t.prototype.pre = function (t) {
              return (this._beforeMiddleware.push(t), this);
            }),
            (t.prototype.use = function (t) {
              return (this._afterMiddleware.push(t), this);
            }),
            (t.prototype.reset = function () {
              for (var t in ((this.progress = 0),
              (this.loading = !1),
              this._queue.kill(),
              this._queue.pause(),
              this.resources)) {
                var e = this.resources[t];
                (e._onLoadBinding && e._onLoadBinding.detach(),
                  e.isLoading && e.abort("loader reset"));
              }
              return ((this.resources = {}), this);
            }),
            (t.prototype.load = function (t) {
              if (
                ((0, L.t6)(
                  "6.5.0",
                  "@pixi/loaders is being replaced with @pixi/assets in the next major release.",
                ),
                "function" == typeof t && this.onComplete.once(t),
                this.loading)
              )
                return this;
              if (this._queue.idle()) (this._onStart(), this._onComplete());
              else {
                for (
                  var e = 100 / this._queue._tasks.length, i = 0;
                  i < this._queue._tasks.length;
                  ++i
                )
                  this._queue._tasks[i].data.progressChunk = e;
                (this._onStart(), this._queue.resume());
              }
              return this;
            }),
            Object.defineProperty(t.prototype, "concurrency", {
              get: function () {
                return this._queue.concurrency;
              },
              set: function (t) {
                this._queue.concurrency = t;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype._prepareUrl = function (t) {
              var e,
                i = ts(t, { strictMode: !0 });
              if (
                ((e =
                  i.protocol || !i.path || 0 === t.indexOf("//")
                    ? t
                    : this.baseUrl.length &&
                        this.baseUrl.lastIndexOf("/") !==
                          this.baseUrl.length - 1 &&
                        "/" !== t.charAt(0)
                      ? this.baseUrl + "/" + t
                      : this.baseUrl + t),
                this.defaultQueryString)
              ) {
                var r = t_.exec(e)[0];
                (-1 !== (e = e.slice(0, e.length - r.length)).indexOf("?")
                  ? (e += "&" + this.defaultQueryString)
                  : (e += "?" + this.defaultQueryString),
                  (e += r));
              }
              return e;
            }),
            (t.prototype._loadResource = function (t, e) {
              var i = this;
              ((t._dequeue = e),
                tf.eachSeries(
                  this._beforeMiddleware,
                  function (e, r) {
                    e.call(i, t, function () {
                      r(t.isComplete ? {} : null);
                    });
                  },
                  function () {
                    t.isComplete
                      ? i._onLoad(t)
                      : ((t._onLoadBinding = t.onComplete.once(i._onLoad, i)),
                        t.load());
                  },
                  !0,
                ));
            }),
            (t.prototype._onStart = function () {
              ((this.progress = 0),
                (this.loading = !0),
                this.onStart.dispatch(this));
            }),
            (t.prototype._onComplete = function () {
              ((this.progress = 100),
                (this.loading = !1),
                this.onComplete.dispatch(this, this.resources));
            }),
            (t.prototype._onLoad = function (t) {
              var e = this;
              ((t._onLoadBinding = null),
                this._resourcesParsing.push(t),
                t._dequeue(),
                tf.eachSeries(
                  this._afterMiddleware,
                  function (i, r) {
                    i.call(e, t, r);
                  },
                  function () {
                    (t.onAfterMiddleware.dispatch(t),
                      (e.progress = Math.min(
                        100,
                        e.progress + t.progressChunk,
                      )),
                      e.onProgress.dispatch(e, t),
                      t.error
                        ? e.onError.dispatch(t.error, e, t)
                        : e.onLoad.dispatch(e, t),
                      e._resourcesParsing.splice(
                        e._resourcesParsing.indexOf(t),
                        1,
                      ),
                      e._queue.idle() &&
                        0 === e._resourcesParsing.length &&
                        e._onComplete());
                  },
                  !0,
                ));
            }),
            (t.prototype.destroy = function () {
              this._protected || this.reset();
            }),
            Object.defineProperty(t, "shared", {
              get: function () {
                var e = t._shared;
                return (
                  e || (((e = new t())._protected = !0), (t._shared = e)),
                  e
                );
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.registerPlugin = function (e) {
              return (
                (0, L.t6)(
                  "6.5.0",
                  "Loader.registerPlugin() is deprecated, use extensions.add() instead.",
                ),
                W.XO.add({ type: W.Ag.Loader, ref: e }),
                t
              );
            }),
            (t._plugins = []),
            t
          );
        })();
      (W.XO.handleByList(W.Ag.Loader, tv._plugins),
        (tv.prototype.add = function (t, e, i, r) {
          if (Array.isArray(t)) {
            for (var n = 0; n < t.length; ++n) this.add(t[n]);
            return this;
          }
          if (
            ("object" == typeof t &&
              ((i = t),
              (r = e || i.callback || i.onComplete),
              (e = i.url),
              (t = i.name || i.key || i.url)),
            "string" != typeof e && ((r = i), (i = e), (e = t)),
            "string" != typeof e)
          )
            throw Error("No url passed to add resource to loader.");
          return (
            "function" == typeof i && ((r = i), (i = null)),
            this._add(t, e, i, r)
          );
        }));
      var ty = (function () {
          function t() {}
          return (
            (t.init = function (t) {
              ((t = Object.assign({ sharedLoader: !1 }, t)),
                (this.loader = t.sharedLoader ? tv.shared : new tv()));
            }),
            (t.destroy = function () {
              this.loader && (this.loader.destroy(), (this.loader = null));
            }),
            (t.extension = W.Ag.Application),
            t
          );
        })(),
        tg = (function () {
          function t() {}
          return (
            (t.add = function () {
              (tc.setExtensionLoadType("svg", tc.LOAD_TYPE.XHR),
                tc.setExtensionXhrType("svg", tc.XHR_RESPONSE_TYPE.TEXT));
            }),
            (t.use = function (t, e) {
              if (
                t.data &&
                (t.type === tc.TYPE.IMAGE || "svg" === t.extension)
              ) {
                var i = t.data,
                  r = t.url,
                  n = t.name,
                  o = t.metadata;
                W.gP
                  .fromLoader(i, r, n, o)
                  .then(function (i) {
                    ((t.texture = i), e());
                  })
                  .catch(e);
              } else e();
            }),
            (t.extension = W.Ag.Loader),
            t
          );
        })();
      function tm(t, e) {
        if (!t.data) return void e();
        if (t.xhr && t.xhrType === tc.XHR_RESPONSE_TYPE.BLOB)
          if (self.Blob && "string" != typeof t.data) {
            if (0 === t.data.type.indexOf("image")) {
              var i = globalThis.URL || globalThis.webkitURL,
                r = i.createObjectURL(t.data);
              ((t.blob = t.data),
                (t.data = new Image()),
                (t.data.src = r),
                (t.type = tc.TYPE.IMAGE),
                (t.data.onload = function () {
                  (i.revokeObjectURL(r), (t.data.onload = null), e());
                }));
              return;
            }
          } else {
            var n = t.xhr.getResponseHeader("content-type");
            if (n && 0 === n.indexOf("image")) {
              ((t.data = new Image()),
                (t.data.src =
                  "data:" +
                  n +
                  ";base64," +
                  (function (t) {
                    for (var e = "", i = 0; i < t.length; ) {
                      for (
                        var r = [0, 0, 0], n = [0, 0, 0, 0], o = 0;
                        o < r.length;
                        ++o
                      )
                        i < t.length
                          ? (r[o] = 255 & t.charCodeAt(i++))
                          : (r[o] = 0);
                      switch (
                        ((n[0] = r[0] >> 2),
                        (n[1] = ((3 & r[0]) << 4) | (r[1] >> 4)),
                        (n[2] = ((15 & r[1]) << 2) | (r[2] >> 6)),
                        (n[3] = 63 & r[2]),
                        i - (t.length - 1))
                      ) {
                        case 2:
                          ((n[3] = 64), (n[2] = 64));
                          break;
                        case 1:
                          n[3] = 64;
                      }
                      for (var o = 0; o < n.length; ++o)
                        e +=
                          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(
                            n[o],
                          );
                    }
                    return e;
                  })(t.xhr.responseText)),
                (t.type = tc.TYPE.IMAGE),
                (t.data.onload = function () {
                  ((t.data.onload = null), e());
                }));
              return;
            }
          }
        e();
      }
      var tb = (function () {
        function t() {}
        return ((t.extension = W.Ag.Loader), (t.use = tm), t);
      })();
      (W.XO.add(tg, tb),
        (function (t) {
          ((t[(t.COMPRESSED_RGB_S3TC_DXT1_EXT = 33776)] =
            "COMPRESSED_RGB_S3TC_DXT1_EXT"),
            (t[(t.COMPRESSED_RGBA_S3TC_DXT1_EXT = 33777)] =
              "COMPRESSED_RGBA_S3TC_DXT1_EXT"),
            (t[(t.COMPRESSED_RGBA_S3TC_DXT3_EXT = 33778)] =
              "COMPRESSED_RGBA_S3TC_DXT3_EXT"),
            (t[(t.COMPRESSED_RGBA_S3TC_DXT5_EXT = 33779)] =
              "COMPRESSED_RGBA_S3TC_DXT5_EXT"),
            (t[(t.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = 35917)] =
              "COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT"),
            (t[(t.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT = 35918)] =
              "COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT"),
            (t[(t.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = 35919)] =
              "COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT"),
            (t[(t.COMPRESSED_SRGB_S3TC_DXT1_EXT = 35916)] =
              "COMPRESSED_SRGB_S3TC_DXT1_EXT"),
            (t[(t.COMPRESSED_R11_EAC = 37488)] = "COMPRESSED_R11_EAC"),
            (t[(t.COMPRESSED_SIGNED_R11_EAC = 37489)] =
              "COMPRESSED_SIGNED_R11_EAC"),
            (t[(t.COMPRESSED_RG11_EAC = 37490)] = "COMPRESSED_RG11_EAC"),
            (t[(t.COMPRESSED_SIGNED_RG11_EAC = 37491)] =
              "COMPRESSED_SIGNED_RG11_EAC"),
            (t[(t.COMPRESSED_RGB8_ETC2 = 37492)] = "COMPRESSED_RGB8_ETC2"),
            (t[(t.COMPRESSED_RGBA8_ETC2_EAC = 37496)] =
              "COMPRESSED_RGBA8_ETC2_EAC"),
            (t[(t.COMPRESSED_SRGB8_ETC2 = 37493)] = "COMPRESSED_SRGB8_ETC2"),
            (t[(t.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = 37497)] =
              "COMPRESSED_SRGB8_ALPHA8_ETC2_EAC"),
            (t[(t.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37494)] =
              "COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2"),
            (t[(t.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37495)] =
              "COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2"),
            (t[(t.COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 35840)] =
              "COMPRESSED_RGB_PVRTC_4BPPV1_IMG"),
            (t[(t.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 35842)] =
              "COMPRESSED_RGBA_PVRTC_4BPPV1_IMG"),
            (t[(t.COMPRESSED_RGB_PVRTC_2BPPV1_IMG = 35841)] =
              "COMPRESSED_RGB_PVRTC_2BPPV1_IMG"),
            (t[(t.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG = 35843)] =
              "COMPRESSED_RGBA_PVRTC_2BPPV1_IMG"),
            (t[(t.COMPRESSED_RGB_ETC1_WEBGL = 36196)] =
              "COMPRESSED_RGB_ETC1_WEBGL"),
            (t[(t.COMPRESSED_RGB_ATC_WEBGL = 35986)] =
              "COMPRESSED_RGB_ATC_WEBGL"),
            (t[(t.COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL = 35986)] =
              "COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL"),
            (t[(t.COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL = 34798)] =
              "COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL"),
            (t[(t.COMPRESSED_RGBA_ASTC_4x4_KHR = 37808)] =
              "COMPRESSED_RGBA_ASTC_4x4_KHR"));
        })(s || (s = {})));
      var tx =
          (((o = {})[s.COMPRESSED_RGB_S3TC_DXT1_EXT] = 0.5),
          (o[s.COMPRESSED_RGBA_S3TC_DXT1_EXT] = 0.5),
          (o[s.COMPRESSED_RGBA_S3TC_DXT3_EXT] = 1),
          (o[s.COMPRESSED_RGBA_S3TC_DXT5_EXT] = 1),
          (o[s.COMPRESSED_SRGB_S3TC_DXT1_EXT] = 0.5),
          (o[s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT] = 0.5),
          (o[s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT] = 1),
          (o[s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT] = 1),
          (o[s.COMPRESSED_R11_EAC] = 0.5),
          (o[s.COMPRESSED_SIGNED_R11_EAC] = 0.5),
          (o[s.COMPRESSED_RG11_EAC] = 1),
          (o[s.COMPRESSED_SIGNED_RG11_EAC] = 1),
          (o[s.COMPRESSED_RGB8_ETC2] = 0.5),
          (o[s.COMPRESSED_RGBA8_ETC2_EAC] = 1),
          (o[s.COMPRESSED_SRGB8_ETC2] = 0.5),
          (o[s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC] = 1),
          (o[s.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2] = 0.5),
          (o[s.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2] = 0.5),
          (o[s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG] = 0.5),
          (o[s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG] = 0.5),
          (o[s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG] = 0.25),
          (o[s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG] = 0.25),
          (o[s.COMPRESSED_RGB_ETC1_WEBGL] = 0.5),
          (o[s.COMPRESSED_RGB_ATC_WEBGL] = 0.5),
          (o[s.COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL] = 1),
          (o[s.COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL] = 1),
          (o[s.COMPRESSED_RGBA_ASTC_4x4_KHR] = 1),
          o),
        tT = function (t, e) {
          return (tT =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
            })(t, e);
        };
      function tE(t, e) {
        function i() {
          this.constructor = t;
        }
        (tT(t, e),
          (t.prototype =
            null === e
              ? Object.create(e)
              : ((i.prototype = e.prototype), new i())));
      }
      var tO = (function (t) {
          function e(i, r) {
            var n = t.call(this, i, r) || this;
            return (
              (n.format = r.format),
              (n.levels = r.levels || 1),
              (n._width = r.width),
              (n._height = r.height),
              (n._extension = e._formatToExtension(n.format)),
              (r.levelBuffers || n.buffer) &&
                (n._levelBuffers =
                  r.levelBuffers ||
                  e._createLevelBuffers(
                    i instanceof Uint8Array ? i : n.buffer.uint8View,
                    n.format,
                    n.levels,
                    4,
                    4,
                    n.width,
                    n.height,
                  )),
              n
            );
          }
          return (
            tE(e, t),
            (e.prototype.upload = function (t, e, i) {
              var r = t.gl;
              if (!t.context.extensions[this._extension])
                throw Error(
                  this._extension +
                    " textures are not supported on the current machine",
                );
              if (!this._levelBuffers) return !1;
              for (var n = 0, o = this.levels; n < o; n++) {
                var s = this._levelBuffers[n],
                  a = s.levelID,
                  h = s.levelWidth,
                  u = s.levelHeight,
                  l = s.levelBuffer;
                r.compressedTexImage2D(
                  r.TEXTURE_2D,
                  a,
                  this.format,
                  h,
                  u,
                  0,
                  l,
                );
              }
              return !0;
            }),
            (e.prototype.onBlobLoaded = function () {
              this._levelBuffers = e._createLevelBuffers(
                this.buffer.uint8View,
                this.format,
                this.levels,
                4,
                4,
                this.width,
                this.height,
              );
            }),
            (e._formatToExtension = function (t) {
              if (t >= 33776 && t <= 33779) return "s3tc";
              if (t >= 37488 && t <= 37497) return "etc";
              if (t >= 35840 && t <= 35843) return "pvrtc";
              if (t >= 36196) return "etc1";
              if (t >= 35986 && t <= 34798) return "atc";
              throw Error("Invalid (compressed) texture format given!");
            }),
            (e._createLevelBuffers = function (t, e, i, r, n, o, s) {
              for (
                var a = Array(i),
                  h = t.byteOffset,
                  u = o,
                  l = s,
                  c = (u + r - 1) & ~(r - 1),
                  p = (l + n - 1) & ~(n - 1),
                  d = c * p * tx[e],
                  f = 0;
                f < i;
                f++
              )
                ((a[f] = {
                  levelID: f,
                  levelWidth: i > 1 ? u : c,
                  levelHeight: i > 1 ? l : p,
                  levelBuffer: new Uint8Array(t.buffer, h, d),
                }),
                  (h += d),
                  (l = l >> 1 || 1),
                  (d =
                    (c = ((u = u >> 1 || 1) + r - 1) & ~(r - 1)) *
                    (p = (l + n - 1) & ~(n - 1)) *
                    tx[e]));
              return a;
            }),
            e
          );
        })(
          (function (t) {
            function e(e, i) {
              void 0 === i && (i = { width: 1, height: 1, autoLoad: !0 });
              var r,
                n,
                o = this;
              return (
                "string" == typeof e
                  ? ((r = e), (n = new Uint8Array()))
                  : ((r = null), (n = e)),
                ((o = t.call(this, n, i) || this).origin = r),
                (o.buffer = n ? new W.u3(n) : null),
                o.origin && !1 !== i.autoLoad && o.load(),
                n &&
                  n.length &&
                  ((o.loaded = !0), o.onBlobLoaded(o.buffer.rawBinaryData)),
                o
              );
            }
            return (
              tE(e, t),
              (e.prototype.onBlobLoaded = function (t) {}),
              (e.prototype.load = function () {
                var t, e, i, r;
                return (
                  (t = this),
                  (e = void 0),
                  (i = Promise),
                  (r = function () {
                    var t;
                    return (function (t, e) {
                      var i,
                        r,
                        n,
                        o,
                        s = {
                          label: 0,
                          sent: function () {
                            if (1 & n[0]) throw n[1];
                            return n[1];
                          },
                          trys: [],
                          ops: [],
                        };
                      return (
                        (o = { next: a(0), throw: a(1), return: a(2) }),
                        "function" == typeof Symbol &&
                          (o[Symbol.iterator] = function () {
                            return this;
                          }),
                        o
                      );
                      function a(o) {
                        return function (a) {
                          var h = [o, a];
                          if (i)
                            throw TypeError("Generator is already executing.");
                          for (; s; )
                            try {
                              if (
                                ((i = 1),
                                r &&
                                  (n =
                                    2 & h[0]
                                      ? r.return
                                      : h[0]
                                        ? r.throw ||
                                          ((n = r.return) && n.call(r), 0)
                                        : r.next) &&
                                  !(n = n.call(r, h[1])).done)
                              )
                                return n;
                              switch (
                                ((r = 0), n && (h = [2 & h[0], n.value]), h[0])
                              ) {
                                case 0:
                                case 1:
                                  n = h;
                                  break;
                                case 4:
                                  return (s.label++, { value: h[1], done: !1 });
                                case 5:
                                  (s.label++, (r = h[1]), (h = [0]));
                                  continue;
                                case 7:
                                  ((h = s.ops.pop()), s.trys.pop());
                                  continue;
                                default:
                                  if (
                                    !(n =
                                      (n = s.trys).length > 0 &&
                                      n[n.length - 1]) &&
                                    (6 === h[0] || 2 === h[0])
                                  ) {
                                    s = 0;
                                    continue;
                                  }
                                  if (
                                    3 === h[0] &&
                                    (!n || (h[1] > n[0] && h[1] < n[3]))
                                  ) {
                                    s.label = h[1];
                                    break;
                                  }
                                  if (6 === h[0] && s.label < n[1]) {
                                    ((s.label = n[1]), (n = h));
                                    break;
                                  }
                                  if (n && s.label < n[2]) {
                                    ((s.label = n[2]), s.ops.push(h));
                                    break;
                                  }
                                  (n[2] && s.ops.pop(), s.trys.pop());
                                  continue;
                              }
                              h = e.call(t, s);
                            } catch (t) {
                              ((h = [6, t]), (r = 0));
                            } finally {
                              i = n = 0;
                            }
                          if (5 & h[0]) throw h[1];
                          return { value: h[0] ? h[1] : void 0, done: !0 };
                        };
                      }
                    })(this, function (e) {
                      switch (e.label) {
                        case 0:
                          return [4, fetch(this.origin)];
                        case 1:
                          return [4, e.sent().blob()];
                        case 2:
                          return [4, e.sent().arrayBuffer()];
                        case 3:
                          return (
                            (t = e.sent()),
                            (this.data = new Uint32Array(t)),
                            (this.buffer = new W.u3(t)),
                            (this.loaded = !0),
                            this.onBlobLoaded(t),
                            this.update(),
                            [2, this]
                          );
                      }
                    });
                  }),
                  new (i || (i = Promise))(function (n, o) {
                    function s(t) {
                      try {
                        h(r.next(t));
                      } catch (t) {
                        o(t);
                      }
                    }
                    function a(t) {
                      try {
                        h(r.throw(t));
                      } catch (t) {
                        o(t);
                      }
                    }
                    function h(t) {
                      var e;
                      t.done
                        ? n(t.value)
                        : ((e = t.value) instanceof i
                            ? e
                            : new i(function (t) {
                                t(e);
                              })
                          ).then(s, a);
                    }
                    h((r = r.apply(t, e || [])).next());
                  })
                );
              }),
              e
            );
          })(W.dZ),
        ),
        tR = (function () {
          function t() {}
          return (
            (t.use = function (e, i) {
              var r = e.data;
              if (e.type === tc.TYPE.JSON && r && r.cacheID && r.textures) {
                for (
                  var n = r.textures,
                    o = void 0,
                    s = void 0,
                    a = 0,
                    h = n.length;
                  a < h;
                  a++
                ) {
                  var u = n[a],
                    l = u.src,
                    c = u.format;
                  if ((c || (s = l), t.textureFormats[c])) {
                    o = l;
                    break;
                  }
                }
                if (!(o = o || s))
                  return void i(
                    Error(
                      "Cannot load compressed-textures in " +
                        e.url +
                        ", make sure you provide a fallback",
                    ),
                  );
                if (o === e.url)
                  return void i(
                    Error(
                      "URL of compressed texture cannot be the same as the manifest's URL",
                    ),
                  );
                var p = {
                    crossOrigin: e.crossOrigin,
                    metadata: e.metadata.imageMetadata,
                    parentResource: e,
                  },
                  d = L.OZ.resolve(e.url.replace(this.baseUrl, ""), o),
                  f = r.cacheID;
                this.add(f, d, p, function (t) {
                  if (t.error) return void i(t.error);
                  var r = t.texture,
                    n = t.textures;
                  (Object.assign(e, {
                    texture: void 0 === r ? null : r,
                    textures: void 0 === n ? {} : n,
                  }),
                    i());
                });
              } else i();
            }),
            Object.defineProperty(t, "textureExtensions", {
              get: function () {
                if (!t._textureExtensions) {
                  var e = N.W0.ADAPTER.createCanvas().getContext("webgl");
                  if (!e)
                    return (
                      console.warn(
                        "WebGL not available for compressed textures. Silently failing.",
                      ),
                      {}
                    );
                  t._textureExtensions = {
                    s3tc: e.getExtension("WEBGL_compressed_texture_s3tc"),
                    s3tc_sRGB: e.getExtension(
                      "WEBGL_compressed_texture_s3tc_srgb",
                    ),
                    etc: e.getExtension("WEBGL_compressed_texture_etc"),
                    etc1: e.getExtension("WEBGL_compressed_texture_etc1"),
                    pvrtc:
                      e.getExtension("WEBGL_compressed_texture_pvrtc") ||
                      e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),
                    atc: e.getExtension("WEBGL_compressed_texture_atc"),
                    astc: e.getExtension("WEBGL_compressed_texture_astc"),
                  };
                }
                return t._textureExtensions;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t, "textureFormats", {
              get: function () {
                if (!t._textureFormats) {
                  var e = t.textureExtensions;
                  for (var i in ((t._textureFormats = {}), e)) {
                    var r = e[i];
                    r &&
                      Object.assign(
                        t._textureFormats,
                        Object.getPrototypeOf(r),
                      );
                  }
                }
                return t._textureFormats;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.extension = W.Ag.Loader),
            t
          );
        })();
      function tA(t, e, i) {
        var r = { textures: {}, texture: null };
        return (
          e &&
            e
              .map(function (t) {
                return new W.gP(
                  new W.t5(
                    t,
                    Object.assign(
                      {
                        mipmap: G.E8.OFF,
                        alphaMode: G.Gk.NO_PREMULTIPLIED_ALPHA,
                      },
                      i,
                    ),
                  ),
                );
              })
              .forEach(function (e, i) {
                var n = e.baseTexture,
                  o = t + "-" + (i + 1);
                (W.t5.addToCache(n, o),
                  W.gP.addToCache(e, o),
                  0 === i &&
                    (W.t5.addToCache(n, t),
                    W.gP.addToCache(e, t),
                    (r.texture = e)),
                  (r.textures[o] = e));
              }),
          r
        );
      }
      var tS = { HEIGHT: 3, WIDTH: 4, MIPMAP_COUNT: 7, PIXEL_FORMAT: 19 },
        tP = { FOURCC: 2 },
        tM = {
          DXGI_FORMAT: 0,
          RESOURCE_DIMENSION: 1,
          MISC_FLAG: 2,
          ARRAY_SIZE: 3,
        };
      (!(function (t) {
        ((t[(t.DXGI_FORMAT_UNKNOWN = 0)] = "DXGI_FORMAT_UNKNOWN"),
          (t[(t.DXGI_FORMAT_R32G32B32A32_TYPELESS = 1)] =
            "DXGI_FORMAT_R32G32B32A32_TYPELESS"),
          (t[(t.DXGI_FORMAT_R32G32B32A32_FLOAT = 2)] =
            "DXGI_FORMAT_R32G32B32A32_FLOAT"),
          (t[(t.DXGI_FORMAT_R32G32B32A32_UINT = 3)] =
            "DXGI_FORMAT_R32G32B32A32_UINT"),
          (t[(t.DXGI_FORMAT_R32G32B32A32_SINT = 4)] =
            "DXGI_FORMAT_R32G32B32A32_SINT"),
          (t[(t.DXGI_FORMAT_R32G32B32_TYPELESS = 5)] =
            "DXGI_FORMAT_R32G32B32_TYPELESS"),
          (t[(t.DXGI_FORMAT_R32G32B32_FLOAT = 6)] =
            "DXGI_FORMAT_R32G32B32_FLOAT"),
          (t[(t.DXGI_FORMAT_R32G32B32_UINT = 7)] =
            "DXGI_FORMAT_R32G32B32_UINT"),
          (t[(t.DXGI_FORMAT_R32G32B32_SINT = 8)] =
            "DXGI_FORMAT_R32G32B32_SINT"),
          (t[(t.DXGI_FORMAT_R16G16B16A16_TYPELESS = 9)] =
            "DXGI_FORMAT_R16G16B16A16_TYPELESS"),
          (t[(t.DXGI_FORMAT_R16G16B16A16_FLOAT = 10)] =
            "DXGI_FORMAT_R16G16B16A16_FLOAT"),
          (t[(t.DXGI_FORMAT_R16G16B16A16_UNORM = 11)] =
            "DXGI_FORMAT_R16G16B16A16_UNORM"),
          (t[(t.DXGI_FORMAT_R16G16B16A16_UINT = 12)] =
            "DXGI_FORMAT_R16G16B16A16_UINT"),
          (t[(t.DXGI_FORMAT_R16G16B16A16_SNORM = 13)] =
            "DXGI_FORMAT_R16G16B16A16_SNORM"),
          (t[(t.DXGI_FORMAT_R16G16B16A16_SINT = 14)] =
            "DXGI_FORMAT_R16G16B16A16_SINT"),
          (t[(t.DXGI_FORMAT_R32G32_TYPELESS = 15)] =
            "DXGI_FORMAT_R32G32_TYPELESS"),
          (t[(t.DXGI_FORMAT_R32G32_FLOAT = 16)] = "DXGI_FORMAT_R32G32_FLOAT"),
          (t[(t.DXGI_FORMAT_R32G32_UINT = 17)] = "DXGI_FORMAT_R32G32_UINT"),
          (t[(t.DXGI_FORMAT_R32G32_SINT = 18)] = "DXGI_FORMAT_R32G32_SINT"),
          (t[(t.DXGI_FORMAT_R32G8X24_TYPELESS = 19)] =
            "DXGI_FORMAT_R32G8X24_TYPELESS"),
          (t[(t.DXGI_FORMAT_D32_FLOAT_S8X24_UINT = 20)] =
            "DXGI_FORMAT_D32_FLOAT_S8X24_UINT"),
          (t[(t.DXGI_FORMAT_R32_FLOAT_X8X24_TYPELESS = 21)] =
            "DXGI_FORMAT_R32_FLOAT_X8X24_TYPELESS"),
          (t[(t.DXGI_FORMAT_X32_TYPELESS_G8X24_UINT = 22)] =
            "DXGI_FORMAT_X32_TYPELESS_G8X24_UINT"),
          (t[(t.DXGI_FORMAT_R10G10B10A2_TYPELESS = 23)] =
            "DXGI_FORMAT_R10G10B10A2_TYPELESS"),
          (t[(t.DXGI_FORMAT_R10G10B10A2_UNORM = 24)] =
            "DXGI_FORMAT_R10G10B10A2_UNORM"),
          (t[(t.DXGI_FORMAT_R10G10B10A2_UINT = 25)] =
            "DXGI_FORMAT_R10G10B10A2_UINT"),
          (t[(t.DXGI_FORMAT_R11G11B10_FLOAT = 26)] =
            "DXGI_FORMAT_R11G11B10_FLOAT"),
          (t[(t.DXGI_FORMAT_R8G8B8A8_TYPELESS = 27)] =
            "DXGI_FORMAT_R8G8B8A8_TYPELESS"),
          (t[(t.DXGI_FORMAT_R8G8B8A8_UNORM = 28)] =
            "DXGI_FORMAT_R8G8B8A8_UNORM"),
          (t[(t.DXGI_FORMAT_R8G8B8A8_UNORM_SRGB = 29)] =
            "DXGI_FORMAT_R8G8B8A8_UNORM_SRGB"),
          (t[(t.DXGI_FORMAT_R8G8B8A8_UINT = 30)] = "DXGI_FORMAT_R8G8B8A8_UINT"),
          (t[(t.DXGI_FORMAT_R8G8B8A8_SNORM = 31)] =
            "DXGI_FORMAT_R8G8B8A8_SNORM"),
          (t[(t.DXGI_FORMAT_R8G8B8A8_SINT = 32)] = "DXGI_FORMAT_R8G8B8A8_SINT"),
          (t[(t.DXGI_FORMAT_R16G16_TYPELESS = 33)] =
            "DXGI_FORMAT_R16G16_TYPELESS"),
          (t[(t.DXGI_FORMAT_R16G16_FLOAT = 34)] = "DXGI_FORMAT_R16G16_FLOAT"),
          (t[(t.DXGI_FORMAT_R16G16_UNORM = 35)] = "DXGI_FORMAT_R16G16_UNORM"),
          (t[(t.DXGI_FORMAT_R16G16_UINT = 36)] = "DXGI_FORMAT_R16G16_UINT"),
          (t[(t.DXGI_FORMAT_R16G16_SNORM = 37)] = "DXGI_FORMAT_R16G16_SNORM"),
          (t[(t.DXGI_FORMAT_R16G16_SINT = 38)] = "DXGI_FORMAT_R16G16_SINT"),
          (t[(t.DXGI_FORMAT_R32_TYPELESS = 39)] = "DXGI_FORMAT_R32_TYPELESS"),
          (t[(t.DXGI_FORMAT_D32_FLOAT = 40)] = "DXGI_FORMAT_D32_FLOAT"),
          (t[(t.DXGI_FORMAT_R32_FLOAT = 41)] = "DXGI_FORMAT_R32_FLOAT"),
          (t[(t.DXGI_FORMAT_R32_UINT = 42)] = "DXGI_FORMAT_R32_UINT"),
          (t[(t.DXGI_FORMAT_R32_SINT = 43)] = "DXGI_FORMAT_R32_SINT"),
          (t[(t.DXGI_FORMAT_R24G8_TYPELESS = 44)] =
            "DXGI_FORMAT_R24G8_TYPELESS"),
          (t[(t.DXGI_FORMAT_D24_UNORM_S8_UINT = 45)] =
            "DXGI_FORMAT_D24_UNORM_S8_UINT"),
          (t[(t.DXGI_FORMAT_R24_UNORM_X8_TYPELESS = 46)] =
            "DXGI_FORMAT_R24_UNORM_X8_TYPELESS"),
          (t[(t.DXGI_FORMAT_X24_TYPELESS_G8_UINT = 47)] =
            "DXGI_FORMAT_X24_TYPELESS_G8_UINT"),
          (t[(t.DXGI_FORMAT_R8G8_TYPELESS = 48)] = "DXGI_FORMAT_R8G8_TYPELESS"),
          (t[(t.DXGI_FORMAT_R8G8_UNORM = 49)] = "DXGI_FORMAT_R8G8_UNORM"),
          (t[(t.DXGI_FORMAT_R8G8_UINT = 50)] = "DXGI_FORMAT_R8G8_UINT"),
          (t[(t.DXGI_FORMAT_R8G8_SNORM = 51)] = "DXGI_FORMAT_R8G8_SNORM"),
          (t[(t.DXGI_FORMAT_R8G8_SINT = 52)] = "DXGI_FORMAT_R8G8_SINT"),
          (t[(t.DXGI_FORMAT_R16_TYPELESS = 53)] = "DXGI_FORMAT_R16_TYPELESS"),
          (t[(t.DXGI_FORMAT_R16_FLOAT = 54)] = "DXGI_FORMAT_R16_FLOAT"),
          (t[(t.DXGI_FORMAT_D16_UNORM = 55)] = "DXGI_FORMAT_D16_UNORM"),
          (t[(t.DXGI_FORMAT_R16_UNORM = 56)] = "DXGI_FORMAT_R16_UNORM"),
          (t[(t.DXGI_FORMAT_R16_UINT = 57)] = "DXGI_FORMAT_R16_UINT"),
          (t[(t.DXGI_FORMAT_R16_SNORM = 58)] = "DXGI_FORMAT_R16_SNORM"),
          (t[(t.DXGI_FORMAT_R16_SINT = 59)] = "DXGI_FORMAT_R16_SINT"),
          (t[(t.DXGI_FORMAT_R8_TYPELESS = 60)] = "DXGI_FORMAT_R8_TYPELESS"),
          (t[(t.DXGI_FORMAT_R8_UNORM = 61)] = "DXGI_FORMAT_R8_UNORM"),
          (t[(t.DXGI_FORMAT_R8_UINT = 62)] = "DXGI_FORMAT_R8_UINT"),
          (t[(t.DXGI_FORMAT_R8_SNORM = 63)] = "DXGI_FORMAT_R8_SNORM"),
          (t[(t.DXGI_FORMAT_R8_SINT = 64)] = "DXGI_FORMAT_R8_SINT"),
          (t[(t.DXGI_FORMAT_A8_UNORM = 65)] = "DXGI_FORMAT_A8_UNORM"),
          (t[(t.DXGI_FORMAT_R1_UNORM = 66)] = "DXGI_FORMAT_R1_UNORM"),
          (t[(t.DXGI_FORMAT_R9G9B9E5_SHAREDEXP = 67)] =
            "DXGI_FORMAT_R9G9B9E5_SHAREDEXP"),
          (t[(t.DXGI_FORMAT_R8G8_B8G8_UNORM = 68)] =
            "DXGI_FORMAT_R8G8_B8G8_UNORM"),
          (t[(t.DXGI_FORMAT_G8R8_G8B8_UNORM = 69)] =
            "DXGI_FORMAT_G8R8_G8B8_UNORM"),
          (t[(t.DXGI_FORMAT_BC1_TYPELESS = 70)] = "DXGI_FORMAT_BC1_TYPELESS"),
          (t[(t.DXGI_FORMAT_BC1_UNORM = 71)] = "DXGI_FORMAT_BC1_UNORM"),
          (t[(t.DXGI_FORMAT_BC1_UNORM_SRGB = 72)] =
            "DXGI_FORMAT_BC1_UNORM_SRGB"),
          (t[(t.DXGI_FORMAT_BC2_TYPELESS = 73)] = "DXGI_FORMAT_BC2_TYPELESS"),
          (t[(t.DXGI_FORMAT_BC2_UNORM = 74)] = "DXGI_FORMAT_BC2_UNORM"),
          (t[(t.DXGI_FORMAT_BC2_UNORM_SRGB = 75)] =
            "DXGI_FORMAT_BC2_UNORM_SRGB"),
          (t[(t.DXGI_FORMAT_BC3_TYPELESS = 76)] = "DXGI_FORMAT_BC3_TYPELESS"),
          (t[(t.DXGI_FORMAT_BC3_UNORM = 77)] = "DXGI_FORMAT_BC3_UNORM"),
          (t[(t.DXGI_FORMAT_BC3_UNORM_SRGB = 78)] =
            "DXGI_FORMAT_BC3_UNORM_SRGB"),
          (t[(t.DXGI_FORMAT_BC4_TYPELESS = 79)] = "DXGI_FORMAT_BC4_TYPELESS"),
          (t[(t.DXGI_FORMAT_BC4_UNORM = 80)] = "DXGI_FORMAT_BC4_UNORM"),
          (t[(t.DXGI_FORMAT_BC4_SNORM = 81)] = "DXGI_FORMAT_BC4_SNORM"),
          (t[(t.DXGI_FORMAT_BC5_TYPELESS = 82)] = "DXGI_FORMAT_BC5_TYPELESS"),
          (t[(t.DXGI_FORMAT_BC5_UNORM = 83)] = "DXGI_FORMAT_BC5_UNORM"),
          (t[(t.DXGI_FORMAT_BC5_SNORM = 84)] = "DXGI_FORMAT_BC5_SNORM"),
          (t[(t.DXGI_FORMAT_B5G6R5_UNORM = 85)] = "DXGI_FORMAT_B5G6R5_UNORM"),
          (t[(t.DXGI_FORMAT_B5G5R5A1_UNORM = 86)] =
            "DXGI_FORMAT_B5G5R5A1_UNORM"),
          (t[(t.DXGI_FORMAT_B8G8R8A8_UNORM = 87)] =
            "DXGI_FORMAT_B8G8R8A8_UNORM"),
          (t[(t.DXGI_FORMAT_B8G8R8X8_UNORM = 88)] =
            "DXGI_FORMAT_B8G8R8X8_UNORM"),
          (t[(t.DXGI_FORMAT_R10G10B10_XR_BIAS_A2_UNORM = 89)] =
            "DXGI_FORMAT_R10G10B10_XR_BIAS_A2_UNORM"),
          (t[(t.DXGI_FORMAT_B8G8R8A8_TYPELESS = 90)] =
            "DXGI_FORMAT_B8G8R8A8_TYPELESS"),
          (t[(t.DXGI_FORMAT_B8G8R8A8_UNORM_SRGB = 91)] =
            "DXGI_FORMAT_B8G8R8A8_UNORM_SRGB"),
          (t[(t.DXGI_FORMAT_B8G8R8X8_TYPELESS = 92)] =
            "DXGI_FORMAT_B8G8R8X8_TYPELESS"),
          (t[(t.DXGI_FORMAT_B8G8R8X8_UNORM_SRGB = 93)] =
            "DXGI_FORMAT_B8G8R8X8_UNORM_SRGB"),
          (t[(t.DXGI_FORMAT_BC6H_TYPELESS = 94)] = "DXGI_FORMAT_BC6H_TYPELESS"),
          (t[(t.DXGI_FORMAT_BC6H_UF16 = 95)] = "DXGI_FORMAT_BC6H_UF16"),
          (t[(t.DXGI_FORMAT_BC6H_SF16 = 96)] = "DXGI_FORMAT_BC6H_SF16"),
          (t[(t.DXGI_FORMAT_BC7_TYPELESS = 97)] = "DXGI_FORMAT_BC7_TYPELESS"),
          (t[(t.DXGI_FORMAT_BC7_UNORM = 98)] = "DXGI_FORMAT_BC7_UNORM"),
          (t[(t.DXGI_FORMAT_BC7_UNORM_SRGB = 99)] =
            "DXGI_FORMAT_BC7_UNORM_SRGB"),
          (t[(t.DXGI_FORMAT_AYUV = 100)] = "DXGI_FORMAT_AYUV"),
          (t[(t.DXGI_FORMAT_Y410 = 101)] = "DXGI_FORMAT_Y410"),
          (t[(t.DXGI_FORMAT_Y416 = 102)] = "DXGI_FORMAT_Y416"),
          (t[(t.DXGI_FORMAT_NV12 = 103)] = "DXGI_FORMAT_NV12"),
          (t[(t.DXGI_FORMAT_P010 = 104)] = "DXGI_FORMAT_P010"),
          (t[(t.DXGI_FORMAT_P016 = 105)] = "DXGI_FORMAT_P016"),
          (t[(t.DXGI_FORMAT_420_OPAQUE = 106)] = "DXGI_FORMAT_420_OPAQUE"),
          (t[(t.DXGI_FORMAT_YUY2 = 107)] = "DXGI_FORMAT_YUY2"),
          (t[(t.DXGI_FORMAT_Y210 = 108)] = "DXGI_FORMAT_Y210"),
          (t[(t.DXGI_FORMAT_Y216 = 109)] = "DXGI_FORMAT_Y216"),
          (t[(t.DXGI_FORMAT_NV11 = 110)] = "DXGI_FORMAT_NV11"),
          (t[(t.DXGI_FORMAT_AI44 = 111)] = "DXGI_FORMAT_AI44"),
          (t[(t.DXGI_FORMAT_IA44 = 112)] = "DXGI_FORMAT_IA44"),
          (t[(t.DXGI_FORMAT_P8 = 113)] = "DXGI_FORMAT_P8"),
          (t[(t.DXGI_FORMAT_A8P8 = 114)] = "DXGI_FORMAT_A8P8"),
          (t[(t.DXGI_FORMAT_B4G4R4A4_UNORM = 115)] =
            "DXGI_FORMAT_B4G4R4A4_UNORM"),
          (t[(t.DXGI_FORMAT_P208 = 116)] = "DXGI_FORMAT_P208"),
          (t[(t.DXGI_FORMAT_V208 = 117)] = "DXGI_FORMAT_V208"),
          (t[(t.DXGI_FORMAT_V408 = 118)] = "DXGI_FORMAT_V408"),
          (t[(t.DXGI_FORMAT_SAMPLER_FEEDBACK_MIN_MIP_OPAQUE = 119)] =
            "DXGI_FORMAT_SAMPLER_FEEDBACK_MIN_MIP_OPAQUE"),
          (t[(t.DXGI_FORMAT_SAMPLER_FEEDBACK_MIP_REGION_USED_OPAQUE = 120)] =
            "DXGI_FORMAT_SAMPLER_FEEDBACK_MIP_REGION_USED_OPAQUE"),
          (t[(t.DXGI_FORMAT_FORCE_UINT = 121)] = "DXGI_FORMAT_FORCE_UINT"));
      })(u || (u = {})),
        (function (t) {
          ((t[(t.DDS_DIMENSION_TEXTURE1D = 2)] = "DDS_DIMENSION_TEXTURE1D"),
            (t[(t.DDS_DIMENSION_TEXTURE2D = 3)] = "DDS_DIMENSION_TEXTURE2D"),
            (t[(t.DDS_DIMENSION_TEXTURE3D = 6)] = "DDS_DIMENSION_TEXTURE3D"));
        })(l || (l = {})));
      var tD =
          (((a = {})[0x31545844] = s.COMPRESSED_RGBA_S3TC_DXT1_EXT),
          (a[0x33545844] = s.COMPRESSED_RGBA_S3TC_DXT3_EXT),
          (a[0x35545844] = s.COMPRESSED_RGBA_S3TC_DXT5_EXT),
          a),
        tI =
          (((h = {})[u.DXGI_FORMAT_BC1_TYPELESS] =
            s.COMPRESSED_RGBA_S3TC_DXT1_EXT),
          (h[u.DXGI_FORMAT_BC1_UNORM] = s.COMPRESSED_RGBA_S3TC_DXT1_EXT),
          (h[u.DXGI_FORMAT_BC2_TYPELESS] = s.COMPRESSED_RGBA_S3TC_DXT3_EXT),
          (h[u.DXGI_FORMAT_BC2_UNORM] = s.COMPRESSED_RGBA_S3TC_DXT3_EXT),
          (h[u.DXGI_FORMAT_BC3_TYPELESS] = s.COMPRESSED_RGBA_S3TC_DXT5_EXT),
          (h[u.DXGI_FORMAT_BC3_UNORM] = s.COMPRESSED_RGBA_S3TC_DXT5_EXT),
          (h[u.DXGI_FORMAT_BC1_UNORM_SRGB] =
            s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT),
          (h[u.DXGI_FORMAT_BC2_UNORM_SRGB] =
            s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT),
          (h[u.DXGI_FORMAT_BC3_UNORM_SRGB] =
            s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT),
          h),
        tw = [171, 75, 84, 88, 32, 49, 49, 187, 13, 10, 26, 10],
        tC = {
          ENDIANNESS: 12,
          GL_TYPE: 16,
          GL_FORMAT: 24,
          GL_INTERNAL_FORMAT: 28,
          PIXEL_WIDTH: 36,
          PIXEL_HEIGHT: 40,
          PIXEL_DEPTH: 44,
          NUMBER_OF_ARRAY_ELEMENTS: 48,
          NUMBER_OF_FACES: 52,
          NUMBER_OF_MIPMAP_LEVELS: 56,
          BYTES_OF_KEY_VALUE_DATA: 60,
        },
        tL =
          (((c = {})[G.QE.UNSIGNED_BYTE] = 1),
          (c[G.QE.UNSIGNED_SHORT] = 2),
          (c[G.QE.INT] = 4),
          (c[G.QE.UNSIGNED_INT] = 4),
          (c[G.QE.FLOAT] = 4),
          (c[G.QE.HALF_FLOAT] = 8),
          c),
        tN =
          (((p = {})[G.hR.RGBA] = 4),
          (p[G.hR.RGB] = 3),
          (p[G.hR.RG] = 2),
          (p[G.hR.RED] = 1),
          (p[G.hR.LUMINANCE] = 1),
          (p[G.hR.LUMINANCE_ALPHA] = 2),
          (p[G.hR.ALPHA] = 1),
          p),
        tF =
          (((d = {})[G.QE.UNSIGNED_SHORT_4_4_4_4] = 2),
          (d[G.QE.UNSIGNED_SHORT_5_5_5_1] = 2),
          (d[G.QE.UNSIGNED_SHORT_5_6_5] = 2),
          d);
      tc.setExtensionXhrType("dds", tc.XHR_RESPONSE_TYPE.BUFFER);
      var tG = (function () {
        function t() {}
        return (
          (t.use = function (t, e) {
            if ("dds" === t.extension && t.data)
              try {
                Object.assign(
                  t,
                  tA(
                    t.name || t.url,
                    (function (t) {
                      var e = new Uint32Array(t);
                      if (0x20534444 !== e[0])
                        throw Error("Invalid DDS file magic word");
                      var i = new Uint32Array(
                          t,
                          0,
                          124 / Uint32Array.BYTES_PER_ELEMENT,
                        ),
                        r = i[tS.HEIGHT],
                        n = i[tS.WIDTH],
                        o = i[tS.MIPMAP_COUNT],
                        s = new Uint32Array(
                          t,
                          tS.PIXEL_FORMAT * Uint32Array.BYTES_PER_ELEMENT,
                          32 / Uint32Array.BYTES_PER_ELEMENT,
                        ),
                        a = s[1];
                      if (4 & a) {
                        var h = s[tP.FOURCC];
                        if (0x30315844 !== h) {
                          var u = tD[h];
                          return [
                            new tO(new Uint8Array(t, 128), {
                              format: u,
                              width: n,
                              height: r,
                              levels: o,
                            }),
                          ];
                        }
                        var c = new Uint32Array(
                            e.buffer,
                            128,
                            20 / Uint32Array.BYTES_PER_ELEMENT,
                          ),
                          p = c[tM.DXGI_FORMAT],
                          d = c[tM.RESOURCE_DIMENSION],
                          f = c[tM.MISC_FLAG],
                          _ = c[tM.ARRAY_SIZE],
                          v = tI[p];
                        if (void 0 === v)
                          throw Error(
                            "DDSParser cannot parse texture data with DXGI format " +
                              p,
                          );
                        if (4 === f)
                          throw Error(
                            "DDSParser does not support cubemap textures",
                          );
                        if (d === l.DDS_DIMENSION_TEXTURE3D)
                          throw Error(
                            "DDSParser does not supported 3D texture data",
                          );
                        var y = [];
                        if (1 === _) y.push(new Uint8Array(t, 148));
                        else {
                          for (
                            var g = tx[v], m = 0, b = n, x = r, T = 0;
                            T < o;
                            T++
                          )
                            ((m +=
                              Math.max(1, (b + 3) & -4) *
                              Math.max(1, (x + 3) & -4) *
                              g),
                              (b >>>= 1),
                              (x >>>= 1));
                          for (var E = 148, T = 0; T < _; T++)
                            (y.push(new Uint8Array(t, E, m)), (E += m));
                        }
                        return y.map(function (t) {
                          return new tO(t, {
                            format: v,
                            width: n,
                            height: r,
                            levels: o,
                          });
                        });
                      }
                      if (64 & a)
                        throw Error(
                          "DDSParser does not support uncompressed texture data.",
                        );
                      if (512 & a)
                        throw Error(
                          "DDSParser does not supported YUV uncompressed texture data.",
                        );
                      if (131072 & a)
                        throw Error(
                          "DDSParser does not support single-channel (lumninance) texture data!",
                        );
                      if (2 & a)
                        throw Error(
                          "DDSParser does not support single-channel (alpha) texture data!",
                        );
                      throw Error(
                        "DDSParser failed to load a texture file due to an unknown reason!",
                      );
                    })(t.data),
                    t.metadata,
                  ),
                );
              } catch (t) {
                e(t);
                return;
              }
            e();
          }),
          (t.extension = W.Ag.Loader),
          t
        );
      })();
      tc.setExtensionXhrType("ktx", tc.XHR_RESPONSE_TYPE.BUFFER);
      var tB = (function () {
          function t() {}
          return (
            (t.use = function (t, e) {
              if ("ktx" === t.extension && t.data)
                try {
                  var i = t.name || t.url,
                    r = (function (t, e, i) {
                      void 0 === i && (i = !1);
                      var r,
                        n = new DataView(e);
                      if (
                        !(function (t, e) {
                          for (var i = 0; i < tw.length; i++)
                            if (e.getUint8(i) !== tw[i])
                              return (
                                console.error(
                                  t + " is not a valid *.ktx file!",
                                ),
                                !1
                              );
                          return !0;
                        })(t, n)
                      )
                        return null;
                      var o = 0x4030201 === n.getUint32(tC.ENDIANNESS, !0),
                        s = n.getUint32(tC.GL_TYPE, o),
                        a = n.getUint32(tC.GL_FORMAT, o),
                        h = n.getUint32(tC.GL_INTERNAL_FORMAT, o),
                        u = n.getUint32(tC.PIXEL_WIDTH, o),
                        l = n.getUint32(tC.PIXEL_HEIGHT, o) || 1,
                        c = n.getUint32(tC.PIXEL_DEPTH, o) || 1,
                        p = n.getUint32(tC.NUMBER_OF_ARRAY_ELEMENTS, o) || 1,
                        d = n.getUint32(tC.NUMBER_OF_FACES, o),
                        f = n.getUint32(tC.NUMBER_OF_MIPMAP_LEVELS, o),
                        _ = n.getUint32(tC.BYTES_OF_KEY_VALUE_DATA, o);
                      if (0 === l || 1 !== c)
                        throw Error("Only 2D textures are supported");
                      if (1 !== d)
                        throw Error(
                          "CubeTextures are not supported by KTXLoader yet!",
                        );
                      if (1 !== p)
                        throw Error("WebGL does not support array textures");
                      var v = (u + 3) & -4,
                        y = (l + 3) & -4,
                        g = Array(p),
                        m = u * l;
                      if (
                        (0 === s && (m = v * y),
                        void 0 ===
                          (r =
                            0 !== s ? (tL[s] ? tL[s] * tN[a] : tF[s]) : tx[h]))
                      )
                        throw Error(
                          "Unable to resolve the pixel format stored in the *.ktx file!",
                        );
                      for (
                        var b = i
                            ? (function (t, e, i) {
                                for (var r = new Map(), n = 0; n < e; ) {
                                  var o = t.getUint32(64 + n, i),
                                    s = 64 + n + 4,
                                    a = 3 - ((o + 3) % 4);
                                  if (0 === o || o > e - n) {
                                    console.error(
                                      "KTXLoader: keyAndValueByteSize out of bounds",
                                    );
                                    break;
                                  }
                                  for (
                                    var h = 0;
                                    h < o && 0 !== t.getUint8(s + h);
                                    h++
                                  );
                                  if (-1 === h) {
                                    console.error(
                                      "KTXLoader: Failed to find null byte terminating kvData key",
                                    );
                                    break;
                                  }
                                  var u = new TextDecoder().decode(
                                      new Uint8Array(t.buffer, s, h),
                                    ),
                                    l = new DataView(
                                      t.buffer,
                                      s + h + 1,
                                      o - h - 1,
                                    );
                                  (r.set(u, l), (n += 4 + o + a));
                                }
                                return r;
                              })(n, _, o)
                            : null,
                          x = m * r,
                          T = u,
                          E = l,
                          O = v,
                          R = y,
                          A = 64 + _,
                          S = 0;
                        S < f;
                        S++
                      ) {
                        for (
                          var P = n.getUint32(A, o), M = A + 4, D = 0;
                          D < p;
                          D++
                        ) {
                          var I = g[D];
                          (I || (I = g[D] = Array(f)),
                            (I[S] = {
                              levelID: S,
                              levelWidth: f > 1 || 0 !== s ? T : O,
                              levelHeight: f > 1 || 0 !== s ? E : R,
                              levelBuffer: new Uint8Array(e, M, x),
                            }),
                            (M += x));
                        }
                        ((A += P + 4),
                          (A = A % 4 != 0 ? A + 4 - (A % 4) : A),
                          (E = E >> 1 || 1),
                          (x =
                            (O = ((T = T >> 1 || 1) + 4 - 1) & -4) *
                            (R = (E + 4 - 1) & -4) *
                            r));
                      }
                      return 0 !== s
                        ? {
                            uncompressed: g.map(function (t) {
                              var e = t[0].levelBuffer,
                                i = !1;
                              return (
                                s === G.QE.FLOAT
                                  ? (e = new Float32Array(
                                      t[0].levelBuffer.buffer,
                                      t[0].levelBuffer.byteOffset,
                                      t[0].levelBuffer.byteLength / 4,
                                    ))
                                  : s === G.QE.UNSIGNED_INT
                                    ? ((i = !0),
                                      (e = new Uint32Array(
                                        t[0].levelBuffer.buffer,
                                        t[0].levelBuffer.byteOffset,
                                        t[0].levelBuffer.byteLength / 4,
                                      )))
                                    : s === G.QE.INT &&
                                      ((i = !0),
                                      (e = new Int32Array(
                                        t[0].levelBuffer.buffer,
                                        t[0].levelBuffer.byteOffset,
                                        t[0].levelBuffer.byteLength / 4,
                                      ))),
                                {
                                  resource: new W.dZ(e, {
                                    width: t[0].levelWidth,
                                    height: t[0].levelHeight,
                                  }),
                                  type: s,
                                  format: i
                                    ? (function (t) {
                                        switch (t) {
                                          case G.hR.RGBA:
                                            return G.hR.RGBA_INTEGER;
                                          case G.hR.RGB:
                                            return G.hR.RGB_INTEGER;
                                          case G.hR.RG:
                                            return G.hR.RG_INTEGER;
                                          case G.hR.RED:
                                            return G.hR.RED_INTEGER;
                                          default:
                                            return t;
                                        }
                                      })(a)
                                    : a,
                                }
                              );
                            }),
                            kvData: b,
                          }
                        : {
                            compressed: g.map(function (t) {
                              return new tO(null, {
                                format: h,
                                width: u,
                                height: l,
                                levels: f,
                                levelBuffers: t,
                              });
                            }),
                            kvData: b,
                          };
                    })(i, t.data, this.loadKeyValueData),
                    n = r.compressed,
                    o = r.uncompressed,
                    s = r.kvData;
                  if (n) {
                    var a = tA(i, n, t.metadata);
                    if (s && a.textures)
                      for (var h in a.textures)
                        a.textures[h].baseTexture.ktxKeyValueData = s;
                    Object.assign(t, a);
                  } else if (o) {
                    var u = {};
                    (o.forEach(function (t, e) {
                      var r = new W.gP(
                          new W.t5(t.resource, {
                            mipmap: G.E8.OFF,
                            alphaMode: G.Gk.NO_PREMULTIPLIED_ALPHA,
                            type: t.type,
                            format: t.format,
                          }),
                        ),
                        n = i + "-" + (e + 1);
                      (s && (r.baseTexture.ktxKeyValueData = s),
                        W.t5.addToCache(r.baseTexture, n),
                        W.gP.addToCache(r, n),
                        0 === e &&
                          ((u[i] = r),
                          W.t5.addToCache(r.baseTexture, i),
                          W.gP.addToCache(r, i)),
                        (u[n] = r));
                    }),
                      Object.assign(t, { textures: u }));
                  }
                } catch (t) {
                  e(t);
                  return;
                }
              e();
            }),
            (t.extension = W.Ag.Loader),
            (t.loadKeyValueData = !1),
            t
          );
        })(),
        tX = function (t, e) {
          return (tX =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
            })(t, e);
        };
      function tU(t, e) {
        function i() {
          this.constructor = t;
        }
        (tX(t, e),
          (t.prototype =
            null === e
              ? Object.create(e)
              : ((i.prototype = e.prototype), new i())));
      }
      !(function (t) {
        function e(e, i, r, n) {
          (void 0 === e && (e = 1500),
            void 0 === r && (r = 16384),
            void 0 === n && (n = !1));
          var o = t.call(this) || this;
          return (
            r > 16384 && (r = 16384),
            (o._properties = [!1, !0, !1, !1, !1]),
            (o._maxSize = e),
            (o._batchSize = r),
            (o._buffers = null),
            (o._bufferUpdateIDs = []),
            (o._updateID = 0),
            (o.interactiveChildren = !1),
            (o.blendMode = G.B9.NORMAL),
            (o.autoResize = n),
            (o.roundPixels = !0),
            (o.baseTexture = null),
            o.setProperties(i),
            (o._tint = 0),
            (o.tintRgb = new Float32Array(4)),
            (o.tint = 0xffffff),
            o
          );
        }
        (tU(e, t),
          (e.prototype.setProperties = function (t) {
            t &&
              ((this._properties[0] =
                "vertices" in t || "scale" in t
                  ? !!t.vertices || !!t.scale
                  : this._properties[0]),
              (this._properties[1] =
                "position" in t ? !!t.position : this._properties[1]),
              (this._properties[2] =
                "rotation" in t ? !!t.rotation : this._properties[2]),
              (this._properties[3] =
                "uvs" in t ? !!t.uvs : this._properties[3]),
              (this._properties[4] =
                "tint" in t || "alpha" in t
                  ? !!t.tint || !!t.alpha
                  : this._properties[4]));
          }),
          (e.prototype.updateTransform = function () {
            this.displayObjectUpdateTransform();
          }),
          Object.defineProperty(e.prototype, "tint", {
            get: function () {
              return this._tint;
            },
            set: function (t) {
              ((this._tint = t), (0, L.xp)(t, this.tintRgb));
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.render = function (t) {
            var e = this;
            this.visible &&
              !(this.worldAlpha <= 0) &&
              this.children.length &&
              this.renderable &&
              (!this.baseTexture &&
                ((this.baseTexture = this.children[0]._texture.baseTexture),
                this.baseTexture.valid ||
                  this.baseTexture.once("update", function () {
                    return e.onChildrenChange(0);
                  })),
              t.batch.setObjectRenderer(t.plugins.particle),
              t.plugins.particle.render(this));
          }),
          (e.prototype.onChildrenChange = function (t) {
            for (
              var e = Math.floor(t / this._batchSize);
              this._bufferUpdateIDs.length < e;
            )
              this._bufferUpdateIDs.push(0);
            this._bufferUpdateIDs[e] = ++this._updateID;
          }),
          (e.prototype.dispose = function () {
            if (this._buffers) {
              for (var t = 0; t < this._buffers.length; ++t)
                this._buffers[t].destroy();
              this._buffers = null;
            }
          }),
          (e.prototype.destroy = function (e) {
            (t.prototype.destroy.call(this, e),
              this.dispose(),
              (this._properties = null),
              (this._buffers = null),
              (this._bufferUpdateIDs = null));
          }));
      })(Y);
      var tk = (function () {
          function t(t, e, i) {
            ((this.geometry = new W.V2()),
              (this.indexBuffer = null),
              (this.size = i),
              (this.dynamicProperties = []),
              (this.staticProperties = []));
            for (var r = 0; r < t.length; ++r) {
              var n = t[r];
              ((n = {
                attributeName: n.attributeName,
                size: n.size,
                uploadFunction: n.uploadFunction,
                type: n.type || G.QE.FLOAT,
                offset: n.offset,
              }),
                e[r]
                  ? this.dynamicProperties.push(n)
                  : this.staticProperties.push(n));
            }
            ((this.staticStride = 0),
              (this.staticBuffer = null),
              (this.staticData = null),
              (this.staticDataUint32 = null),
              (this.dynamicStride = 0),
              (this.dynamicBuffer = null),
              (this.dynamicData = null),
              (this.dynamicDataUint32 = null),
              (this._updateID = 0),
              this.initBuffers());
          }
          return (
            (t.prototype.initBuffers = function () {
              var t = this.geometry,
                e = 0;
              ((this.indexBuffer = new W.hp((0, L.LU)(this.size), !0, !0)),
                t.addIndex(this.indexBuffer),
                (this.dynamicStride = 0));
              for (var i = 0; i < this.dynamicProperties.length; ++i) {
                var r = this.dynamicProperties[i];
                ((r.offset = e), (e += r.size), (this.dynamicStride += r.size));
              }
              var n = new ArrayBuffer(this.size * this.dynamicStride * 16);
              ((this.dynamicData = new Float32Array(n)),
                (this.dynamicDataUint32 = new Uint32Array(n)),
                (this.dynamicBuffer = new W.hp(this.dynamicData, !1, !1)));
              var o = 0;
              this.staticStride = 0;
              for (var i = 0; i < this.staticProperties.length; ++i) {
                var r = this.staticProperties[i];
                ((r.offset = o), (o += r.size), (this.staticStride += r.size));
              }
              var s = new ArrayBuffer(this.size * this.staticStride * 16);
              ((this.staticData = new Float32Array(s)),
                (this.staticDataUint32 = new Uint32Array(s)),
                (this.staticBuffer = new W.hp(this.staticData, !0, !1)));
              for (var i = 0; i < this.dynamicProperties.length; ++i) {
                var r = this.dynamicProperties[i];
                t.addAttribute(
                  r.attributeName,
                  this.dynamicBuffer,
                  0,
                  r.type === G.QE.UNSIGNED_BYTE,
                  r.type,
                  4 * this.dynamicStride,
                  4 * r.offset,
                );
              }
              for (var i = 0; i < this.staticProperties.length; ++i) {
                var r = this.staticProperties[i];
                t.addAttribute(
                  r.attributeName,
                  this.staticBuffer,
                  0,
                  r.type === G.QE.UNSIGNED_BYTE,
                  r.type,
                  4 * this.staticStride,
                  4 * r.offset,
                );
              }
            }),
            (t.prototype.uploadDynamic = function (t, e, i) {
              for (var r = 0; r < this.dynamicProperties.length; r++) {
                var n = this.dynamicProperties[r];
                n.uploadFunction(
                  t,
                  e,
                  i,
                  n.type === G.QE.UNSIGNED_BYTE
                    ? this.dynamicDataUint32
                    : this.dynamicData,
                  this.dynamicStride,
                  n.offset,
                );
              }
              this.dynamicBuffer._updateID++;
            }),
            (t.prototype.uploadStatic = function (t, e, i) {
              for (var r = 0; r < this.staticProperties.length; r++) {
                var n = this.staticProperties[r];
                n.uploadFunction(
                  t,
                  e,
                  i,
                  n.type === G.QE.UNSIGNED_BYTE
                    ? this.staticDataUint32
                    : this.staticData,
                  this.staticStride,
                  n.offset,
                );
              }
              this.staticBuffer._updateID++;
            }),
            (t.prototype.destroy = function () {
              ((this.indexBuffer = null),
                (this.dynamicProperties = null),
                (this.dynamicBuffer = null),
                (this.dynamicData = null),
                (this.dynamicDataUint32 = null),
                (this.staticProperties = null),
                (this.staticBuffer = null),
                (this.staticData = null),
                (this.staticDataUint32 = null),
                this.geometry.destroy());
            }),
            t
          );
        })(),
        tH = (function (t) {
          function e(e) {
            var i = t.call(this, e) || this;
            return (
              (i.shader = null),
              (i.properties = null),
              (i.tempMatrix = new F.uq()),
              (i.properties = [
                {
                  attributeName: "aVertexPosition",
                  size: 2,
                  uploadFunction: i.uploadVertices,
                  offset: 0,
                },
                {
                  attributeName: "aPositionCoord",
                  size: 2,
                  uploadFunction: i.uploadPosition,
                  offset: 0,
                },
                {
                  attributeName: "aRotation",
                  size: 1,
                  uploadFunction: i.uploadRotation,
                  offset: 0,
                },
                {
                  attributeName: "aTextureCoord",
                  size: 2,
                  uploadFunction: i.uploadUvs,
                  offset: 0,
                },
                {
                  attributeName: "aColor",
                  size: 1,
                  type: G.QE.UNSIGNED_BYTE,
                  uploadFunction: i.uploadTint,
                  offset: 0,
                },
              ]),
              (i.shader = W.Mt.from(
                "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nattribute vec2 aPositionCoord;\nattribute float aRotation;\n\nuniform mat3 translationMatrix;\nuniform vec4 uColor;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nvoid main(void){\n    float x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);\n    float y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);\n\n    vec2 v = vec2(x, y);\n    v = v + aPositionCoord;\n\n    gl_Position = vec4((translationMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vColor = aColor * uColor;\n}\n",
                "varying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\n\nvoid main(void){\n    vec4 color = texture2D(uSampler, vTextureCoord) * vColor;\n    gl_FragColor = color;\n}",
                {},
              )),
              (i.state = W.Uw.for2d()),
              i
            );
          }
          return (
            tU(e, t),
            (e.prototype.render = function (t) {
              var e = t.children,
                i = t._maxSize,
                r = t._batchSize,
                n = this.renderer,
                o = e.length;
              if (0 !== o) {
                o > i && !t.autoResize && (o = i);
                var s = t._buffers;
                s || (s = t._buffers = this.generateBuffers(t));
                var a = e[0]._texture.baseTexture,
                  h = a.alphaMode > 0;
                ((this.state.blendMode = (0, L.Xk)(t.blendMode, h)),
                  n.state.set(this.state));
                var u = n.gl,
                  l = t.worldTransform.copyTo(this.tempMatrix);
                (l.prepend(n.globalUniforms.uniforms.projectionMatrix),
                  (this.shader.uniforms.translationMatrix = l.toArray(!0)),
                  (this.shader.uniforms.uColor = (0, L.gF)(
                    t.tintRgb,
                    t.worldAlpha,
                    this.shader.uniforms.uColor,
                    h,
                  )),
                  (this.shader.uniforms.uSampler = a),
                  this.renderer.shader.bind(this.shader));
                for (var c = !1, p = 0, d = 0; p < o; p += r, d += 1) {
                  var f = o - p;
                  (f > r && (f = r),
                    d >= s.length && s.push(this._generateOneMoreBuffer(t)));
                  var _ = s[d];
                  _.uploadDynamic(e, p, f);
                  var v = t._bufferUpdateIDs[d] || 0;
                  ((c = c || _._updateID < v) &&
                    ((_._updateID = t._updateID), _.uploadStatic(e, p, f)),
                    n.geometry.bind(_.geometry),
                    u.drawElements(u.TRIANGLES, 6 * f, u.UNSIGNED_SHORT, 0));
                }
              }
            }),
            (e.prototype.generateBuffers = function (t) {
              for (
                var e = [],
                  i = t._maxSize,
                  r = t._batchSize,
                  n = t._properties,
                  o = 0;
                o < i;
                o += r
              )
                e.push(new tk(this.properties, n, r));
              return e;
            }),
            (e.prototype._generateOneMoreBuffer = function (t) {
              var e = t._batchSize,
                i = t._properties;
              return new tk(this.properties, i, e);
            }),
            (e.prototype.uploadVertices = function (t, e, i, r, n, o) {
              for (var s = 0, a = 0, h = 0, u = 0, l = 0; l < i; ++l) {
                var c = t[e + l],
                  p = c._texture,
                  d = c.scale.x,
                  f = c.scale.y,
                  _ = p.trim,
                  v = p.orig;
                (_
                  ? ((s = (a = _.x - c.anchor.x * v.width) + _.width),
                    (h = (u = _.y - c.anchor.y * v.height) + _.height))
                  : ((s = v.width * (1 - c.anchor.x)),
                    (a = -(v.width * c.anchor.x)),
                    (h = v.height * (1 - c.anchor.y)),
                    (u = -(v.height * c.anchor.y))),
                  (r[o] = a * d),
                  (r[o + 1] = u * f),
                  (r[o + n] = s * d),
                  (r[o + n + 1] = u * f),
                  (r[o + 2 * n] = s * d),
                  (r[o + 2 * n + 1] = h * f),
                  (r[o + 3 * n] = a * d),
                  (r[o + 3 * n + 1] = h * f),
                  (o += 4 * n));
              }
            }),
            (e.prototype.uploadPosition = function (t, e, i, r, n, o) {
              for (var s = 0; s < i; s++) {
                var a = t[e + s].position;
                ((r[o] = a.x),
                  (r[o + 1] = a.y),
                  (r[o + n] = a.x),
                  (r[o + n + 1] = a.y),
                  (r[o + 2 * n] = a.x),
                  (r[o + 2 * n + 1] = a.y),
                  (r[o + 3 * n] = a.x),
                  (r[o + 3 * n + 1] = a.y),
                  (o += 4 * n));
              }
            }),
            (e.prototype.uploadRotation = function (t, e, i, r, n, o) {
              for (var s = 0; s < i; s++) {
                var a = t[e + s].rotation;
                ((r[o] = a),
                  (r[o + n] = a),
                  (r[o + 2 * n] = a),
                  (r[o + 3 * n] = a),
                  (o += 4 * n));
              }
            }),
            (e.prototype.uploadUvs = function (t, e, i, r, n, o) {
              for (var s = 0; s < i; ++s) {
                var a = t[e + s]._texture._uvs;
                (a
                  ? ((r[o] = a.x0),
                    (r[o + 1] = a.y0),
                    (r[o + n] = a.x1),
                    (r[o + n + 1] = a.y1),
                    (r[o + 2 * n] = a.x2),
                    (r[o + 2 * n + 1] = a.y2),
                    (r[o + 3 * n] = a.x3),
                    (r[o + 3 * n + 1] = a.y3))
                  : ((r[o] = 0),
                    (r[o + 1] = 0),
                    (r[o + n] = 0),
                    (r[o + n + 1] = 0),
                    (r[o + 2 * n] = 0),
                    (r[o + 2 * n + 1] = 0),
                    (r[o + 3 * n] = 0),
                    (r[o + 3 * n + 1] = 0)),
                  (o += 4 * n));
              }
            }),
            (e.prototype.uploadTint = function (t, e, i, r, n, o) {
              for (var s = 0; s < i; ++s) {
                var a = t[e + s],
                  h = a._texture.baseTexture.alphaMode > 0,
                  u = a.alpha,
                  l =
                    u < 1 && h
                      ? (0, L.rQ)(a._tintRGB, u)
                      : a._tintRGB + ((255 * u) << 24);
                ((r[o] = l),
                  (r[o + n] = l),
                  (r[o + 2 * n] = l),
                  (r[o + 3 * n] = l),
                  (o += 4 * n));
              }
            }),
            (e.prototype.destroy = function () {
              (t.prototype.destroy.call(this),
                this.shader && (this.shader.destroy(), (this.shader = null)),
                (this.tempMatrix = null));
            }),
            (e.extension = { name: "particle", type: W.Ag.RendererPlugin }),
            e
          );
        })(W.Pt);
      (!(function (t) {
        ((t.MITER = "miter"), (t.BEVEL = "bevel"), (t.ROUND = "round"));
      })(f || (f = {})),
        (function (t) {
          ((t.BUTT = "butt"), (t.ROUND = "round"), (t.SQUARE = "square"));
        })(_ || (_ = {})));
      var tj = {
          adaptive: !0,
          maxLength: 10,
          minSegments: 8,
          maxSegments: 2048,
          epsilon: 1e-4,
          _segmentsCount: function (t, e) {
            if ((void 0 === e && (e = 20), !this.adaptive || !t || isNaN(t)))
              return e;
            var i = Math.ceil(t / this.maxLength);
            return (
              i < this.minSegments
                ? (i = this.minSegments)
                : i > this.maxSegments && (i = this.maxSegments),
              i
            );
          },
        },
        tY = (function () {
          function t() {
            ((this.color = 0xffffff),
              (this.alpha = 1),
              (this.texture = W.gP.WHITE),
              (this.matrix = null),
              (this.visible = !1),
              this.reset());
          }
          return (
            (t.prototype.clone = function () {
              var e = new t();
              return (
                (e.color = this.color),
                (e.alpha = this.alpha),
                (e.texture = this.texture),
                (e.matrix = this.matrix),
                (e.visible = this.visible),
                e
              );
            }),
            (t.prototype.reset = function () {
              ((this.color = 0xffffff),
                (this.alpha = 1),
                (this.texture = W.gP.WHITE),
                (this.matrix = null),
                (this.visible = !1));
            }),
            (t.prototype.destroy = function () {
              ((this.texture = null), (this.matrix = null));
            }),
            t
          );
        })(),
        tW = function (t, e) {
          return (tW =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
            })(t, e);
        };
      function tz(t, e) {
        function i() {
          this.constructor = t;
        }
        (tW(t, e),
          (t.prototype =
            null === e
              ? Object.create(e)
              : ((i.prototype = e.prototype), new i())));
      }
      function tV(t, e) {
        void 0 === e && (e = !1);
        var i,
          r,
          n = t.length;
        if (!(n < 6)) {
          for (var o = 0, s = 0, a = t[n - 2], h = t[n - 1]; s < n; s += 2) {
            var u = t[s],
              l = t[s + 1];
            ((o += (u - a) * (l + h)), (a = u), (h = l));
          }
          if ((!e && o > 0) || (e && o <= 0))
            for (var c = n / 2, s = c + (c % 2); s < n; s += 2) {
              var p = n - s - 2,
                d = n - s - 1,
                f = s,
                _ = s + 1;
              ((i = [t[f], t[p]]),
                (t[p] = i[0]),
                (t[f] = i[1]),
                (r = [t[_], t[d]]),
                (t[d] = r[0]),
                (t[_] = r[1]));
            }
        }
      }
      var tq = {
          build: function (t) {
            t.points = t.shape.points.slice();
          },
          triangulate: function (t, e) {
            var i = t.points,
              r = t.holes,
              n = e.points,
              o = e.indices;
            if (i.length >= 6) {
              tV(i, !1);
              for (var s = [], a = 0; a < r.length; a++) {
                var h = r[a];
                (tV(h.points, !0),
                  s.push(i.length / 2),
                  (i = i.concat(h.points)));
              }
              var u = (0, L.hY)(i, s, 2);
              if (!u) return;
              for (var l = n.length / 2, a = 0; a < u.length; a += 3)
                (o.push(u[a] + l), o.push(u[a + 1] + l), o.push(u[a + 2] + l));
              for (var a = 0; a < i.length; a++) n.push(i[a]);
            }
          },
        },
        tZ = {
          build: function (t) {
            var e,
              i,
              r,
              n,
              o,
              s,
              a = t.points;
            if (t.type === F.HY.CIRC) {
              var h = t.shape;
              ((e = h.x), (i = h.y), (o = s = h.radius), (r = n = 0));
            } else if (t.type === F.HY.ELIP) {
              var u = t.shape;
              ((e = u.x),
                (i = u.y),
                (o = u.width),
                (s = u.height),
                (r = n = 0));
            } else {
              var l = t.shape,
                c = l.width / 2,
                p = l.height / 2;
              ((e = l.x + c),
                (i = l.y + p),
                (o = s = Math.max(0, Math.min(l.radius, Math.min(c, p)))),
                (r = c - o),
                (n = p - s));
            }
            if (!(o >= 0 && s >= 0 && r >= 0 && n >= 0)) {
              a.length = 0;
              return;
            }
            var d = Math.ceil(2.3 * Math.sqrt(o + s)),
              f = 8 * d + 4 * !!r + 4 * !!n;
            if (((a.length = f), 0 !== f)) {
              if (0 === d) {
                ((a.length = 8),
                  (a[0] = a[6] = e + r),
                  (a[1] = a[3] = i + n),
                  (a[2] = a[4] = e - r),
                  (a[5] = a[7] = i - n));
                return;
              }
              var _ = 0,
                v = 4 * d + 2 * !!r + 2,
                y = v,
                g = f,
                m = r + o,
                b = n,
                x = e + m,
                T = e - m,
                E = i + b;
              if (((a[_++] = x), (a[_++] = E), (a[--v] = E), (a[--v] = T), n)) {
                var O = i - b;
                ((a[y++] = T), (a[y++] = O), (a[--g] = O), (a[--g] = x));
              }
              for (var R = 1; R < d; R++) {
                var A = (Math.PI / 2) * (R / d),
                  m = r + Math.cos(A) * o,
                  b = n + Math.sin(A) * s,
                  x = e + m,
                  T = e - m,
                  E = i + b,
                  O = i - b;
                ((a[_++] = x),
                  (a[_++] = E),
                  (a[--v] = E),
                  (a[--v] = T),
                  (a[y++] = T),
                  (a[y++] = O),
                  (a[--g] = O),
                  (a[--g] = x));
              }
              var m = r,
                b = n + s,
                x = e + m,
                T = e - m,
                E = i + b,
                O = i - b;
              ((a[_++] = x),
                (a[_++] = E),
                (a[--g] = O),
                (a[--g] = x),
                r && ((a[_++] = T), (a[_++] = E), (a[--g] = O), (a[--g] = T)));
            }
          },
          triangulate: function (t, e) {
            var i,
              r,
              n = t.points,
              o = e.points,
              s = e.indices;
            if (0 !== n.length) {
              var a = o.length / 2,
                h = a;
              if (t.type !== F.HY.RREC) {
                var u = t.shape;
                ((i = u.x), (r = u.y));
              } else {
                var l = t.shape;
                ((i = l.x + l.width / 2), (r = l.y + l.height / 2));
              }
              var c = t.matrix;
              (o.push(
                t.matrix ? c.a * i + c.c * r + c.tx : i,
                t.matrix ? c.b * i + c.d * r + c.ty : r,
              ),
                a++,
                o.push(n[0], n[1]));
              for (var p = 2; p < n.length; p += 2)
                (o.push(n[p], n[p + 1]), s.push(a++, h, a));
              s.push(h + 1, h, a);
            }
          },
        };
      function tQ(t, e, i, r, n, o, s) {
        void 0 === s && (s = []);
        for (
          var a,
            h,
            u = s,
            l = 0,
            c = 0,
            p = 0,
            d = 0,
            f = 0,
            _ = 0,
            v = 0,
            y = 0;
          v <= 20;
          ++v
        )
          ((l = t + (i - t) * (y = v / 20)),
            (c = e + (r - e) * y),
            (p = i + (n - i) * y),
            (d = r + (o - r) * y),
            (f = (a = l) + (p - a) * y),
            (_ = (h = c) + (d - h) * y),
            (0 !== v || u[u.length - 2] !== f || u[u.length - 1] !== _) &&
              u.push(f, _));
        return u;
      }
      function tK(t, e, i, r, n, o, s, a) {
        s ? ((h = r), (u = -i)) : ((h = -r), (u = i));
        var h,
          u,
          l = t - i * n + h,
          c = e - r * n + u,
          p = t + i * o + h,
          d = e + r * o + u;
        return (a.push(l, c), a.push(p, d), 2);
      }
      function tJ(t, e, i, r, n, o, s, a) {
        var h = i - t,
          u = r - e,
          l = Math.atan2(h, u),
          c = Math.atan2(n - t, o - e);
        a && l < c ? (l += 2 * Math.PI) : !a && l > c && (c += 2 * Math.PI);
        var p = l,
          d = c - l,
          f = Math.sqrt(h * h + u * u),
          _ = (((15 * Math.abs(d) * Math.sqrt(f)) / Math.PI) | 0) + 1,
          v = d / _;
        if (((p += v), a)) {
          (s.push(t, e), s.push(i, r));
          for (var y = 1, g = p; y < _; y++, g += v)
            (s.push(t, e), s.push(t + Math.sin(g) * f, e + Math.cos(g) * f));
          (s.push(t, e), s.push(n, o));
        } else {
          (s.push(i, r), s.push(t, e));
          for (var y = 1, g = p; y < _; y++, g += v)
            (s.push(t + Math.sin(g) * f, e + Math.cos(g) * f), s.push(t, e));
          (s.push(n, o), s.push(t, e));
        }
        return 2 * _;
      }
      function t$(t, e) {
        t.lineStyle.native
          ? (function (t, e) {
              var i = 0,
                r = t.shape,
                n = t.points || r.points,
                o = r.type !== F.HY.POLY || r.closeStroke;
              if (0 !== n.length) {
                var s = e.points,
                  a = e.indices,
                  h = n.length / 2,
                  u = s.length / 2,
                  l = u;
                for (s.push(n[0], n[1]), i = 1; i < h; i++)
                  (s.push(n[2 * i], n[2 * i + 1]), a.push(l, l + 1), l++);
                o && a.push(l, u);
              }
            })(t, e)
          : (function (t, e) {
              var i = t.shape,
                r = t.points || i.points.slice(),
                n = e.closePointEps;
              if (0 !== r.length) {
                var o = t.lineStyle,
                  s = new F.bR(r[0], r[1]),
                  a = new F.bR(r[r.length - 2], r[r.length - 1]),
                  h = i.type !== F.HY.POLY || i.closeStroke,
                  u = Math.abs(s.x - a.x) < n && Math.abs(s.y - a.y) < n;
                if (h) {
                  ((r = r.slice()),
                    u &&
                      (r.pop(),
                      r.pop(),
                      a.set(r[r.length - 2], r[r.length - 1])));
                  var l = (s.x + a.x) * 0.5,
                    c = (a.y + s.y) * 0.5;
                  (r.unshift(l, c), r.push(l, c));
                }
                var p = e.points,
                  d = r.length / 2,
                  v = r.length,
                  y = p.length / 2,
                  g = o.width / 2,
                  m = g * g,
                  b = o.miterLimit * o.miterLimit,
                  x = r[0],
                  T = r[1],
                  E = r[2],
                  O = r[3],
                  R = 0,
                  A = 0,
                  S = -(T - O),
                  P = x - E,
                  M = 0,
                  D = 0,
                  I = Math.sqrt(S * S + P * P);
                ((S /= I), (P /= I), (S *= g), (P *= g));
                var w = o.alignment,
                  C = (1 - w) * 2,
                  L = 2 * w;
                (h ||
                  (o.cap === _.ROUND
                    ? (v +=
                        tJ(
                          x - S * (C - L) * 0.5,
                          T - P * (C - L) * 0.5,
                          x - S * C,
                          T - P * C,
                          x + S * L,
                          T + P * L,
                          p,
                          !0,
                        ) + 2)
                    : o.cap === _.SQUARE && (v += tK(x, T, S, P, C, L, !0, p))),
                  p.push(x - S * C, T - P * C),
                  p.push(x + S * L, T + P * L));
                for (var N = 1; N < d - 1; ++N) {
                  ((x = r[(N - 1) * 2]),
                    (T = r[(N - 1) * 2 + 1]),
                    (E = r[2 * N]),
                    (O = r[2 * N + 1]),
                    (R = r[(N + 1) * 2]),
                    (A = r[(N + 1) * 2 + 1]),
                    (I = Math.sqrt((S = -(T - O)) * S + (P = x - E) * P)),
                    (S /= I),
                    (P /= I),
                    (S *= g),
                    (P *= g),
                    (I = Math.sqrt((M = -(O - A)) * M + (D = E - R) * D)),
                    (M /= I),
                    (D /= I),
                    (M *= g),
                    (D *= g));
                  var G = E - x,
                    B = T - O,
                    X = E - R,
                    U = A - O,
                    k = G * X + B * U,
                    H = B * X - U * G,
                    j = H < 0;
                  if (Math.abs(H) < 0.001 * Math.abs(k)) {
                    (p.push(E - S * C, O - P * C),
                      p.push(E + S * L, O + P * L),
                      k >= 0 &&
                        (o.join === f.ROUND
                          ? (v +=
                              tJ(
                                E,
                                O,
                                E - S * C,
                                O - P * C,
                                E - M * C,
                                O - D * C,
                                p,
                                !1,
                              ) + 4)
                          : (v += 2),
                        p.push(E - M * L, O - D * L),
                        p.push(E + M * C, O + D * C)));
                    continue;
                  }
                  var Y = (-S + x) * (-P + O) - (-S + E) * (-P + T),
                    W = (-M + R) * (-D + O) - (-M + E) * (-D + A),
                    z = (G * W - X * Y) / H,
                    V = (U * Y - B * W) / H,
                    q = (z - E) * (z - E) + (V - O) * (V - O),
                    Z = E + (z - E) * C,
                    Q = O + (V - O) * C,
                    K = E - (z - E) * L,
                    J = O - (V - O) * L,
                    $ = j ? C : L;
                  q <= Math.min(G * G + B * B, X * X + U * U) + $ * $ * m
                    ? o.join === f.BEVEL || q / m > b
                      ? (j
                          ? (p.push(Z, Q),
                            p.push(E + S * L, O + P * L),
                            p.push(Z, Q),
                            p.push(E + M * L, O + D * L))
                          : (p.push(E - S * C, O - P * C),
                            p.push(K, J),
                            p.push(E - M * C, O - D * C),
                            p.push(K, J)),
                        (v += 2))
                      : o.join === f.ROUND
                        ? j
                          ? (p.push(Z, Q),
                            p.push(E + S * L, O + P * L),
                            (v +=
                              tJ(
                                E,
                                O,
                                E + S * L,
                                O + P * L,
                                E + M * L,
                                O + D * L,
                                p,
                                !0,
                              ) + 4),
                            p.push(Z, Q),
                            p.push(E + M * L, O + D * L))
                          : (p.push(E - S * C, O - P * C),
                            p.push(K, J),
                            (v +=
                              tJ(
                                E,
                                O,
                                E - S * C,
                                O - P * C,
                                E - M * C,
                                O - D * C,
                                p,
                                !1,
                              ) + 4),
                            p.push(E - M * C, O - D * C),
                            p.push(K, J))
                        : (p.push(Z, Q), p.push(K, J))
                    : (p.push(E - S * C, O - P * C),
                      p.push(E + S * L, O + P * L),
                      o.join === f.ROUND
                        ? j
                          ? (v +=
                              tJ(
                                E,
                                O,
                                E + S * L,
                                O + P * L,
                                E + M * L,
                                O + D * L,
                                p,
                                !0,
                              ) + 2)
                          : (v +=
                              tJ(
                                E,
                                O,
                                E - S * C,
                                O - P * C,
                                E - M * C,
                                O - D * C,
                                p,
                                !1,
                              ) + 2)
                        : o.join === f.MITER &&
                          q / m <= b &&
                          (j
                            ? (p.push(K, J), p.push(K, J))
                            : (p.push(Z, Q), p.push(Z, Q)),
                          (v += 2)),
                      p.push(E - M * C, O - D * C),
                      p.push(E + M * L, O + D * L),
                      (v += 2));
                }
                ((x = r[(d - 2) * 2]),
                  (T = r[(d - 2) * 2 + 1]),
                  (E = r[(d - 1) * 2]),
                  (I = Math.sqrt(
                    (S = -(T - (O = r[(d - 1) * 2 + 1]))) * S + (P = x - E) * P,
                  )),
                  (S /= I),
                  (P /= I),
                  (S *= g),
                  (P *= g),
                  p.push(E - S * C, O - P * C),
                  p.push(E + S * L, O + P * L),
                  h ||
                    (o.cap === _.ROUND
                      ? (v +=
                          tJ(
                            E - S * (C - L) * 0.5,
                            O - P * (C - L) * 0.5,
                            E - S * C,
                            O - P * C,
                            E + S * L,
                            O + P * L,
                            p,
                            !1,
                          ) + 2)
                      : o.cap === _.SQUARE &&
                        (v += tK(E, O, S, P, C, L, !1, p))));
                for (
                  var tt = e.indices, te = tj.epsilon * tj.epsilon, N = y;
                  N < v + y - 2;
                  ++N
                )
                  ((x = p[2 * N]),
                    (T = p[2 * N + 1]),
                    (E = p[(N + 1) * 2]),
                    (O = p[(N + 1) * 2 + 1]),
                    (R = p[(N + 2) * 2]),
                    Math.abs(
                      x * (O - (A = p[(N + 2) * 2 + 1])) +
                        E * (A - T) +
                        R * (T - O),
                    ) < te || tt.push(N, N + 1, N + 2));
              }
            })(t, e);
      }
      var t0 = (function () {
          function t() {}
          return (
            (t.curveTo = function (t, e, i, r, n, o) {
              var s = o[o.length - 2],
                a = o[o.length - 1] - e,
                h = s - t,
                u = r - e,
                l = i - t,
                c = Math.abs(a * l - h * u);
              if (c < 1e-8 || 0 === n)
                return (
                  (o[o.length - 2] !== t || o[o.length - 1] !== e) &&
                    o.push(t, e),
                  null
                );
              var p = a * a + h * h,
                d = u * u + l * l,
                f = a * u + h * l,
                _ = (n * Math.sqrt(p)) / c,
                v = (n * Math.sqrt(d)) / c,
                y = (_ * f) / p,
                g = (v * f) / d,
                m = _ * l + v * h,
                b = _ * u + v * a,
                x = Math.atan2(a * (v + y) - b, h * (v + y) - m),
                T = Math.atan2(u * (_ + g) - b, l * (_ + g) - m);
              return {
                cx: m + t,
                cy: b + e,
                radius: n,
                startAngle: x,
                endAngle: T,
                anticlockwise: h * u > l * a,
              };
            }),
            (t.arc = function (t, e, i, r, n, o, s, a, h) {
              for (
                var u = s - o,
                  l = tj._segmentsCount(
                    Math.abs(u) * n,
                    40 * Math.ceil(Math.abs(u) / F.TO),
                  ),
                  c = u / (2 * l),
                  p = 2 * c,
                  d = Math.cos(c),
                  f = Math.sin(c),
                  _ = l - 1,
                  v = (_ % 1) / _,
                  y = 0;
                y <= _;
                ++y
              ) {
                var g = c + o + p * (y + v * y),
                  m = Math.cos(g),
                  b = -Math.sin(g);
                h.push((d * m + f * b) * n + i, (-(d * b) + f * m) * n + r);
              }
            }),
            t
          );
        })(),
        t1 = (function () {
          function t() {}
          return (
            (t.curveLength = function (t, e, i, r, n, o, s, a) {
              for (
                var h = 0,
                  u = 0,
                  l = 0,
                  c = 0,
                  p = 0,
                  d = 0,
                  f = 0,
                  _ = 0,
                  v = 0,
                  y = 0,
                  g = 0,
                  m = t,
                  b = e,
                  x = 1;
                x <= 10;
                ++x
              )
                ((c = (l = (u = x / 10) * u) * u),
                  (_ =
                    (f = (d = (p = 1 - u) * p) * p) * t +
                    3 * d * u * i +
                    3 * p * l * n +
                    c * s),
                  (v = f * e + 3 * d * u * r + 3 * p * l * o + c * a),
                  (y = m - _),
                  (g = b - v),
                  (m = _),
                  (b = v),
                  (h += Math.sqrt(y * y + g * g)));
              return h;
            }),
            (t.curveTo = function (e, i, r, n, o, s, a) {
              var h = a[a.length - 2],
                u = a[a.length - 1];
              a.length -= 2;
              var l = tj._segmentsCount(t.curveLength(h, u, e, i, r, n, o, s)),
                c = 0,
                p = 0,
                d = 0,
                f = 0,
                _ = 0;
              a.push(h, u);
              for (var v = 1, y = 0; v <= l; ++v)
                ((d = (p = (c = 1 - (y = v / l)) * c) * c),
                  (_ = (f = y * y) * y),
                  a.push(
                    d * h + 3 * p * y * e + 3 * c * f * r + _ * o,
                    d * u + 3 * p * y * i + 3 * c * f * n + _ * s,
                  ));
            }),
            t
          );
        })(),
        t2 = (function () {
          function t() {}
          return (
            (t.curveLength = function (t, e, i, r, n, o) {
              var s = t - 2 * i + n,
                a = e - 2 * r + o,
                h = 2 * i - 2 * t,
                u = 2 * r - 2 * e,
                l = 4 * (s * s + a * a),
                c = 4 * (s * h + a * u),
                p = h * h + u * u,
                d = 2 * Math.sqrt(l + c + p),
                f = Math.sqrt(l),
                _ = 2 * l * f,
                v = 2 * Math.sqrt(p),
                y = c / f;
              return (
                (_ * d +
                  f * c * (d - v) +
                  (4 * p * l - c * c) * Math.log((2 * f + y + d) / (y + v))) /
                (4 * _)
              );
            }),
            (t.curveTo = function (e, i, r, n, o) {
              for (
                var s = o[o.length - 2],
                  a = o[o.length - 1],
                  h = tj._segmentsCount(t.curveLength(s, a, e, i, r, n)),
                  u = 0,
                  l = 0,
                  c = 1;
                c <= h;
                ++c
              ) {
                var p = c / h;
                ((u = s + (e - s) * p),
                  (l = a + (i - a) * p),
                  o.push(
                    u + (e + (r - e) * p - u) * p,
                    l + (i + (n - i) * p - l) * p,
                  ));
              }
            }),
            t
          );
        })(),
        t3 = (function () {
          function t() {
            this.reset();
          }
          return (
            (t.prototype.begin = function (t, e, i) {
              (this.reset(),
                (this.style = t),
                (this.start = e),
                (this.attribStart = i));
            }),
            (t.prototype.end = function (t, e) {
              ((this.attribSize = e - this.attribStart),
                (this.size = t - this.start));
            }),
            (t.prototype.reset = function () {
              ((this.style = null),
                (this.size = 0),
                (this.start = 0),
                (this.attribStart = 0),
                (this.attribSize = 0));
            }),
            t
          );
        })(),
        t5 =
          (((v = {})[F.HY.POLY] = tq),
          (v[F.HY.CIRC] = tZ),
          (v[F.HY.ELIP] = tZ),
          (v[F.HY.RECT] = {
            build: function (t) {
              var e = t.shape,
                i = e.x,
                r = e.y,
                n = e.width,
                o = e.height,
                s = t.points;
              ((s.length = 0), s.push(i, r, i + n, r, i + n, r + o, i, r + o));
            },
            triangulate: function (t, e) {
              var i = t.points,
                r = e.points,
                n = r.length / 2;
              (r.push(i[0], i[1], i[2], i[3], i[6], i[7], i[4], i[5]),
                e.indices.push(n, n + 1, n + 2, n + 1, n + 2, n + 3));
            },
          }),
          (v[F.HY.RREC] = {
            build: function (t) {
              if (er.nextRoundedRectBehavior) return void tZ.build(t);
              var e = t.shape,
                i = t.points,
                r = e.x,
                n = e.y,
                o = e.width,
                s = e.height,
                a = Math.max(0, Math.min(e.radius, Math.min(o, s) / 2));
              ((i.length = 0),
                a
                  ? (tQ(r, n + a, r, n, r + a, n, i),
                    tQ(r + o - a, n, r + o, n, r + o, n + a, i),
                    tQ(r + o, n + s - a, r + o, n + s, r + o - a, n + s, i),
                    tQ(r + a, n + s, r, n + s, r, n + s - a, i))
                  : i.push(r, n, r + o, n, r + o, n + s, r, n + s));
            },
            triangulate: function (t, e) {
              if (er.nextRoundedRectBehavior) return void tZ.triangulate(t, e);
              for (
                var i = t.points,
                  r = e.points,
                  n = e.indices,
                  o = r.length / 2,
                  s = (0, L.hY)(i, null, 2),
                  a = 0,
                  h = s.length;
                a < h;
                a += 3
              )
                (n.push(s[a] + o), n.push(s[a + 1] + o), n.push(s[a + 2] + o));
              for (var a = 0, h = i.length; a < h; a++) r.push(i[a], i[++a]);
            },
          }),
          v),
        t4 = [],
        t8 = [],
        t6 = (function () {
          function t(t, e, i, r) {
            (void 0 === e && (e = null),
              void 0 === i && (i = null),
              void 0 === r && (r = null),
              (this.points = []),
              (this.holes = []),
              (this.shape = t),
              (this.lineStyle = i),
              (this.fillStyle = e),
              (this.matrix = r),
              (this.type = t.type));
          }
          return (
            (t.prototype.clone = function () {
              return new t(
                this.shape,
                this.fillStyle,
                this.lineStyle,
                this.matrix,
              );
            }),
            (t.prototype.destroy = function () {
              ((this.shape = null),
                (this.holes.length = 0),
                (this.holes = null),
                (this.points.length = 0),
                (this.points = null),
                (this.lineStyle = null),
                (this.fillStyle = null));
            }),
            t
          );
        })(),
        t9 = new F.bR(),
        t7 = (function (t) {
          function e() {
            var e = t.call(this) || this;
            return (
              (e.closePointEps = 1e-4),
              (e.boundsPadding = 0),
              (e.uvsFloat32 = null),
              (e.indicesUint16 = null),
              (e.batchable = !1),
              (e.points = []),
              (e.colors = []),
              (e.uvs = []),
              (e.indices = []),
              (e.textureIds = []),
              (e.graphicsData = []),
              (e.drawCalls = []),
              (e.batchDirty = -1),
              (e.batches = []),
              (e.dirty = 0),
              (e.cacheDirty = -1),
              (e.clearDirty = 0),
              (e.shapeIndex = 0),
              (e._bounds = new B()),
              (e.boundsDirty = -1),
              e
            );
          }
          return (
            tz(e, t),
            Object.defineProperty(e.prototype, "bounds", {
              get: function () {
                return (
                  this.updateBatches(),
                  this.boundsDirty !== this.dirty &&
                    ((this.boundsDirty = this.dirty), this.calculateBounds()),
                  this._bounds
                );
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.invalidate = function () {
              ((this.boundsDirty = -1),
                this.dirty++,
                this.batchDirty++,
                (this.shapeIndex = 0),
                (this.points.length = 0),
                (this.colors.length = 0),
                (this.uvs.length = 0),
                (this.indices.length = 0),
                (this.textureIds.length = 0));
              for (var t = 0; t < this.drawCalls.length; t++)
                (this.drawCalls[t].texArray.clear(),
                  t8.push(this.drawCalls[t]));
              this.drawCalls.length = 0;
              for (var t = 0; t < this.batches.length; t++) {
                var e = this.batches[t];
                (e.reset(), t4.push(e));
              }
              this.batches.length = 0;
            }),
            (e.prototype.clear = function () {
              return (
                this.graphicsData.length > 0 &&
                  (this.invalidate(),
                  this.clearDirty++,
                  (this.graphicsData.length = 0)),
                this
              );
            }),
            (e.prototype.drawShape = function (t, e, i, r) {
              (void 0 === e && (e = null),
                void 0 === i && (i = null),
                void 0 === r && (r = null));
              var n = new t6(t, e, i, r);
              return (this.graphicsData.push(n), this.dirty++, this);
            }),
            (e.prototype.drawHole = function (t, e) {
              if ((void 0 === e && (e = null), !this.graphicsData.length))
                return null;
              var i = new t6(t, null, null, e),
                r = this.graphicsData[this.graphicsData.length - 1];
              return (
                (i.lineStyle = r.lineStyle),
                r.holes.push(i),
                this.dirty++,
                this
              );
            }),
            (e.prototype.destroy = function () {
              t.prototype.destroy.call(this);
              for (var e = 0; e < this.graphicsData.length; ++e)
                this.graphicsData[e].destroy();
              ((this.points.length = 0),
                (this.points = null),
                (this.colors.length = 0),
                (this.colors = null),
                (this.uvs.length = 0),
                (this.uvs = null),
                (this.indices.length = 0),
                (this.indices = null),
                this.indexBuffer.destroy(),
                (this.indexBuffer = null),
                (this.graphicsData.length = 0),
                (this.graphicsData = null),
                (this.drawCalls.length = 0),
                (this.drawCalls = null),
                (this.batches.length = 0),
                (this.batches = null),
                (this._bounds = null));
            }),
            (e.prototype.containsPoint = function (t) {
              for (var e = this.graphicsData, i = 0; i < e.length; ++i) {
                var r = e[i];
                if (
                  r.fillStyle.visible &&
                  r.shape &&
                  (r.matrix ? r.matrix.applyInverse(t, t9) : t9.copyFrom(t),
                  r.shape.contains(t9.x, t9.y))
                ) {
                  var n = !1;
                  if (r.holes) {
                    for (var o = 0; o < r.holes.length; o++)
                      if (r.holes[o].shape.contains(t9.x, t9.y)) {
                        n = !0;
                        break;
                      }
                  }
                  if (!n) return !0;
                }
              }
              return !1;
            }),
            (e.prototype.updateBatches = function () {
              if (!this.graphicsData.length) {
                this.batchable = !0;
                return;
              }
              if (this.validateBatching()) {
                this.cacheDirty = this.dirty;
                var t = this.uvs,
                  e = this.graphicsData,
                  i = null,
                  r = null;
                this.batches.length > 0 &&
                  (r = (i = this.batches[this.batches.length - 1]).style);
                for (var n = this.shapeIndex; n < e.length; n++) {
                  this.shapeIndex++;
                  var o = e[n],
                    s = o.fillStyle,
                    a = o.lineStyle;
                  (t5[o.type].build(o),
                    o.matrix && this.transformPoints(o.points, o.matrix),
                    (s.visible || a.visible) && this.processHoles(o.holes));
                  for (var h = 0; h < 2; h++) {
                    var u = 0 === h ? s : a;
                    if (u.visible) {
                      var l = u.texture.baseTexture,
                        c = this.indices.length,
                        p = this.points.length / 2;
                      ((l.wrapMode = G.uR.REPEAT),
                        0 === h ? this.processFill(o) : this.processLine(o));
                      var d = this.points.length / 2 - p;
                      0 !== d &&
                        (i &&
                          !this._compareStyles(r, u) &&
                          (i.end(c, p), (i = null)),
                        i ||
                          ((i = t4.pop() || new t3()).begin(u, c, p),
                          this.batches.push(i),
                          (r = u)),
                        this.addUvs(this.points, t, u.texture, p, d, u.matrix));
                    }
                  }
                }
                var f = this.indices.length,
                  _ = this.points.length / 2;
                if ((i && i.end(f, _), 0 === this.batches.length)) {
                  this.batchable = !0;
                  return;
                }
                var v = _ > 65535;
                (this.indicesUint16 &&
                this.indices.length === this.indicesUint16.length &&
                v === this.indicesUint16.BYTES_PER_ELEMENT > 2
                  ? this.indicesUint16.set(this.indices)
                  : (this.indicesUint16 = v
                      ? new Uint32Array(this.indices)
                      : new Uint16Array(this.indices)),
                  (this.batchable = this.isBatchable()),
                  this.batchable ? this.packBatches() : this.buildDrawCalls());
              }
            }),
            (e.prototype._compareStyles = function (t, e) {
              return (
                !!t &&
                !!e &&
                t.texture.baseTexture === e.texture.baseTexture &&
                t.color + t.alpha === e.color + e.alpha &&
                !!t.native == !!e.native
              );
            }),
            (e.prototype.validateBatching = function () {
              if (this.dirty === this.cacheDirty || !this.graphicsData.length)
                return !1;
              for (var t = 0, e = this.graphicsData.length; t < e; t++) {
                var i = this.graphicsData[t],
                  r = i.fillStyle,
                  n = i.lineStyle;
                if (
                  (r && !r.texture.baseTexture.valid) ||
                  (n && !n.texture.baseTexture.valid)
                )
                  return !1;
              }
              return !0;
            }),
            (e.prototype.packBatches = function () {
              (this.batchDirty++,
                (this.uvsFloat32 = new Float32Array(this.uvs)));
              for (var t = this.batches, e = 0, i = t.length; e < i; e++)
                for (var r = t[e], n = 0; n < r.size; n++) {
                  var o = r.start + n;
                  this.indicesUint16[o] = this.indicesUint16[o] - r.attribStart;
                }
            }),
            (e.prototype.isBatchable = function () {
              if (this.points.length > 131070) return !1;
              for (var t = this.batches, i = 0; i < t.length; i++)
                if (t[i].style.native) return !1;
              return this.points.length < 2 * e.BATCHABLE_SIZE;
            }),
            (e.prototype.buildDrawCalls = function () {
              for (
                var t = ++W.t5._globalBatch, e = 0;
                e < this.drawCalls.length;
                e++
              )
                (this.drawCalls[e].texArray.clear(),
                  t8.push(this.drawCalls[e]));
              this.drawCalls.length = 0;
              var i = this.colors,
                r = this.textureIds,
                n = t8.pop();
              (n || ((n = new W.hq()).texArray = new W.cc()),
                (n.texArray.count = 0),
                (n.start = 0),
                (n.size = 0),
                (n.type = G._4.TRIANGLES));
              var o = 0,
                s = null,
                a = 0,
                h = !1,
                u = G._4.TRIANGLES,
                l = 0;
              this.drawCalls.push(n);
              for (var e = 0; e < this.batches.length; e++) {
                var c = this.batches[e],
                  p = c.style,
                  d = p.texture.baseTexture;
                (!!p.native !== h &&
                  ((u = (h = !!p.native) ? G._4.LINES : G._4.TRIANGLES),
                  (s = null),
                  (o = 8),
                  t++),
                  s !== d &&
                    ((s = d),
                    d._batchEnabled !== t &&
                      (8 === o &&
                        (t++,
                        (o = 0),
                        n.size > 0 &&
                          ((n = t8.pop()) ||
                            ((n = new W.hq()).texArray = new W.cc()),
                          this.drawCalls.push(n)),
                        (n.start = l),
                        (n.size = 0),
                        (n.texArray.count = 0),
                        (n.type = u)),
                      (d.touched = 1),
                      (d._batchEnabled = t),
                      (d._batchLocation = o),
                      (d.wrapMode = G.uR.REPEAT),
                      (n.texArray.elements[n.texArray.count++] = d),
                      o++)),
                  (n.size += c.size),
                  (l += c.size),
                  (a = d._batchLocation),
                  this.addColors(
                    i,
                    p.color,
                    p.alpha,
                    c.attribSize,
                    c.attribStart,
                  ),
                  this.addTextureIds(r, a, c.attribSize, c.attribStart));
              }
              ((W.t5._globalBatch = t), this.packAttributes());
            }),
            (e.prototype.packAttributes = function () {
              for (
                var t = this.points,
                  e = this.uvs,
                  i = this.colors,
                  r = this.textureIds,
                  n = new ArrayBuffer(3 * t.length * 4),
                  o = new Float32Array(n),
                  s = new Uint32Array(n),
                  a = 0,
                  h = 0;
                h < t.length / 2;
                h++
              )
                ((o[a++] = t[2 * h]),
                  (o[a++] = t[2 * h + 1]),
                  (o[a++] = e[2 * h]),
                  (o[a++] = e[2 * h + 1]),
                  (s[a++] = i[h]),
                  (o[a++] = r[h]));
              (this._buffer.update(n),
                this._indexBuffer.update(this.indicesUint16));
            }),
            (e.prototype.processFill = function (t) {
              t.holes.length
                ? tq.triangulate(t, this)
                : t5[t.type].triangulate(t, this);
            }),
            (e.prototype.processLine = function (t) {
              t$(t, this);
              for (var e = 0; e < t.holes.length; e++) t$(t.holes[e], this);
            }),
            (e.prototype.processHoles = function (t) {
              for (var e = 0; e < t.length; e++) {
                var i = t[e];
                (t5[i.type].build(i),
                  i.matrix && this.transformPoints(i.points, i.matrix));
              }
            }),
            (e.prototype.calculateBounds = function () {
              var t = this._bounds;
              (t.clear(),
                t.addVertexData(this.points, 0, this.points.length),
                t.pad(this.boundsPadding, this.boundsPadding));
            }),
            (e.prototype.transformPoints = function (t, e) {
              for (var i = 0; i < t.length / 2; i++) {
                var r = t[2 * i],
                  n = t[2 * i + 1];
                ((t[2 * i] = e.a * r + e.c * n + e.tx),
                  (t[2 * i + 1] = e.b * r + e.d * n + e.ty));
              }
            }),
            (e.prototype.addColors = function (t, e, i, r, n) {
              void 0 === n && (n = 0);
              var o = (0, L.rQ)((e >> 16) + (65280 & e) + ((255 & e) << 16), i);
              t.length = Math.max(t.length, n + r);
              for (var s = 0; s < r; s++) t[n + s] = o;
            }),
            (e.prototype.addTextureIds = function (t, e, i, r) {
              (void 0 === r && (r = 0), (t.length = Math.max(t.length, r + i)));
              for (var n = 0; n < i; n++) t[r + n] = e;
            }),
            (e.prototype.addUvs = function (t, e, i, r, n, o) {
              void 0 === o && (o = null);
              for (var s = 0, a = e.length, h = i.frame; s < n; ) {
                var u = t[(r + s) * 2],
                  l = t[(r + s) * 2 + 1];
                if (o) {
                  var c = o.a * u + o.c * l + o.tx;
                  ((l = o.b * u + o.d * l + o.ty), (u = c));
                }
                (s++, e.push(u / h.width, l / h.height));
              }
              var p = i.baseTexture;
              (h.width < p.width || h.height < p.height) &&
                this.adjustUvs(e, i, a, n);
            }),
            (e.prototype.adjustUvs = function (t, e, i, r) {
              for (
                var n = e.baseTexture,
                  o = i + 2 * r,
                  s = e.frame,
                  a = s.width / n.width,
                  h = s.height / n.height,
                  u = s.x / s.width,
                  l = s.y / s.height,
                  c = Math.floor(t[i] + 1e-6),
                  p = Math.floor(t[i + 1] + 1e-6),
                  d = i + 2;
                d < o;
                d += 2
              )
                ((c = Math.min(c, Math.floor(t[d] + 1e-6))),
                  (p = Math.min(p, Math.floor(t[d + 1] + 1e-6))));
              ((u -= c), (l -= p));
              for (var d = i; d < o; d += 2)
                ((t[d] = (t[d] + u) * a), (t[d + 1] = (t[d + 1] + l) * h));
            }),
            (e.BATCHABLE_SIZE = 100),
            e
          );
        })(W.JH),
        et = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.width = 0),
              (e.alignment = 0.5),
              (e.native = !1),
              (e.cap = _.BUTT),
              (e.join = f.MITER),
              (e.miterLimit = 10),
              e
            );
          }
          return (
            tz(e, t),
            (e.prototype.clone = function () {
              var t = new e();
              return (
                (t.color = this.color),
                (t.alpha = this.alpha),
                (t.texture = this.texture),
                (t.matrix = this.matrix),
                (t.visible = this.visible),
                (t.width = this.width),
                (t.alignment = this.alignment),
                (t.native = this.native),
                (t.cap = this.cap),
                (t.join = this.join),
                (t.miterLimit = this.miterLimit),
                t
              );
            }),
            (e.prototype.reset = function () {
              (t.prototype.reset.call(this),
                (this.color = 0),
                (this.alignment = 0.5),
                (this.width = 0),
                (this.native = !1));
            }),
            e
          );
        })(tY),
        ee = new Float32Array(3),
        ei = {},
        er = (function (t) {
          function e(e) {
            void 0 === e && (e = null);
            var i = t.call(this) || this;
            return (
              (i.shader = null),
              (i.pluginName = "batch"),
              (i.currentPath = null),
              (i.batches = []),
              (i.batchTint = -1),
              (i.batchDirty = -1),
              (i.vertexData = null),
              (i._fillStyle = new tY()),
              (i._lineStyle = new et()),
              (i._matrix = null),
              (i._holeMode = !1),
              (i.state = W.Uw.for2d()),
              (i._geometry = e || new t7()),
              i._geometry.refCount++,
              (i._transformID = -1),
              (i.tint = 0xffffff),
              (i.blendMode = G.B9.NORMAL),
              i
            );
          }
          return (
            tz(e, t),
            Object.defineProperty(e.prototype, "geometry", {
              get: function () {
                return this._geometry;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.clone = function () {
              return (this.finishPoly(), new e(this._geometry));
            }),
            Object.defineProperty(e.prototype, "blendMode", {
              get: function () {
                return this.state.blendMode;
              },
              set: function (t) {
                this.state.blendMode = t;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "tint", {
              get: function () {
                return this._tint;
              },
              set: function (t) {
                this._tint = t;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "fill", {
              get: function () {
                return this._fillStyle;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "line", {
              get: function () {
                return this._lineStyle;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.lineStyle = function (t, e, i, r, n) {
              return (
                void 0 === t && (t = null),
                void 0 === e && (e = 0),
                void 0 === i && (i = 1),
                void 0 === r && (r = 0.5),
                void 0 === n && (n = !1),
                "number" == typeof t &&
                  (t = {
                    width: t,
                    color: e,
                    alpha: i,
                    alignment: r,
                    native: n,
                  }),
                this.lineTextureStyle(t)
              );
            }),
            (e.prototype.lineTextureStyle = function (t) {
              ((t = Object.assign(
                {
                  width: 0,
                  texture: W.gP.WHITE,
                  color: t && t.texture ? 0xffffff : 0,
                  alpha: 1,
                  matrix: null,
                  alignment: 0.5,
                  native: !1,
                  cap: _.BUTT,
                  join: f.MITER,
                  miterLimit: 10,
                },
                t,
              )),
                this.currentPath && this.startPoly());
              var e = t.width > 0 && t.alpha > 0;
              return (
                e
                  ? (t.matrix &&
                      ((t.matrix = t.matrix.clone()), t.matrix.invert()),
                    Object.assign(this._lineStyle, { visible: e }, t))
                  : this._lineStyle.reset(),
                this
              );
            }),
            (e.prototype.startPoly = function () {
              if (this.currentPath) {
                var t = this.currentPath.points,
                  e = this.currentPath.points.length;
                e > 2 &&
                  (this.drawShape(this.currentPath),
                  (this.currentPath = new F.tS()),
                  (this.currentPath.closeStroke = !1),
                  this.currentPath.points.push(t[e - 2], t[e - 1]));
              } else
                ((this.currentPath = new F.tS()),
                  (this.currentPath.closeStroke = !1));
            }),
            (e.prototype.finishPoly = function () {
              this.currentPath &&
                (this.currentPath.points.length > 2
                  ? (this.drawShape(this.currentPath),
                    (this.currentPath = null))
                  : (this.currentPath.points.length = 0));
            }),
            (e.prototype.moveTo = function (t, e) {
              return (
                this.startPoly(),
                (this.currentPath.points[0] = t),
                (this.currentPath.points[1] = e),
                this
              );
            }),
            (e.prototype.lineTo = function (t, e) {
              this.currentPath || this.moveTo(0, 0);
              var i = this.currentPath.points,
                r = i[i.length - 2],
                n = i[i.length - 1];
              return ((r !== t || n !== e) && i.push(t, e), this);
            }),
            (e.prototype._initCurve = function (t, e) {
              (void 0 === t && (t = 0),
                void 0 === e && (e = 0),
                this.currentPath
                  ? 0 === this.currentPath.points.length &&
                    (this.currentPath.points = [t, e])
                  : this.moveTo(t, e));
            }),
            (e.prototype.quadraticCurveTo = function (t, e, i, r) {
              this._initCurve();
              var n = this.currentPath.points;
              return (
                0 === n.length && this.moveTo(0, 0),
                t2.curveTo(t, e, i, r, n),
                this
              );
            }),
            (e.prototype.bezierCurveTo = function (t, e, i, r, n, o) {
              return (
                this._initCurve(),
                t1.curveTo(t, e, i, r, n, o, this.currentPath.points),
                this
              );
            }),
            (e.prototype.arcTo = function (t, e, i, r, n) {
              this._initCurve(t, e);
              var o = this.currentPath.points,
                s = t0.curveTo(t, e, i, r, n, o);
              if (s) {
                var a = s.cx,
                  h = s.cy,
                  u = s.radius,
                  l = s.startAngle,
                  c = s.endAngle,
                  p = s.anticlockwise;
                this.arc(a, h, u, l, c, p);
              }
              return this;
            }),
            (e.prototype.arc = function (t, e, i, r, n, o) {
              if (
                (void 0 === o && (o = !1),
                r === n ||
                  (!o && n <= r ? (n += F.TO) : o && r <= n && (r += F.TO),
                  0 == n - r))
              )
                return this;
              var s = t + Math.cos(r) * i,
                a = e + Math.sin(r) * i,
                h = this._geometry.closePointEps,
                u = this.currentPath ? this.currentPath.points : null;
              if (u) {
                var l = Math.abs(u[u.length - 2] - s),
                  c = Math.abs(u[u.length - 1] - a);
                (l < h && c < h) || u.push(s, a);
              } else (this.moveTo(s, a), (u = this.currentPath.points));
              return (t0.arc(s, a, t, e, i, r, n, o, u), this);
            }),
            (e.prototype.beginFill = function (t, e) {
              return (
                void 0 === t && (t = 0),
                void 0 === e && (e = 1),
                this.beginTextureFill({
                  texture: W.gP.WHITE,
                  color: t,
                  alpha: e,
                })
              );
            }),
            (e.prototype.beginTextureFill = function (t) {
              ((t = Object.assign(
                {
                  texture: W.gP.WHITE,
                  color: 0xffffff,
                  alpha: 1,
                  matrix: null,
                },
                t,
              )),
                this.currentPath && this.startPoly());
              var e = t.alpha > 0;
              return (
                e
                  ? (t.matrix &&
                      ((t.matrix = t.matrix.clone()), t.matrix.invert()),
                    Object.assign(this._fillStyle, { visible: e }, t))
                  : this._fillStyle.reset(),
                this
              );
            }),
            (e.prototype.endFill = function () {
              return (this.finishPoly(), this._fillStyle.reset(), this);
            }),
            (e.prototype.drawRect = function (t, e, i, r) {
              return this.drawShape(new F.M_(t, e, i, r));
            }),
            (e.prototype.drawRoundedRect = function (t, e, i, r, n) {
              return this.drawShape(new F.TE(t, e, i, r, n));
            }),
            (e.prototype.drawCircle = function (t, e, i) {
              return this.drawShape(new F.jl(t, e, i));
            }),
            (e.prototype.drawEllipse = function (t, e, i, r) {
              return this.drawShape(new F.Pp(t, e, i, r));
            }),
            (e.prototype.drawPolygon = function () {
              for (
                var t, e = arguments, i = [], r = 0;
                r < arguments.length;
                r++
              )
                i[r] = e[r];
              var n = !0,
                o = i[0];
              o.points
                ? ((n = o.closeStroke), (t = o.points))
                : (t = Array.isArray(i[0]) ? i[0] : i);
              var s = new F.tS(t);
              return ((s.closeStroke = n), this.drawShape(s), this);
            }),
            (e.prototype.drawShape = function (t) {
              return (
                this._holeMode
                  ? this._geometry.drawHole(t, this._matrix)
                  : this._geometry.drawShape(
                      t,
                      this._fillStyle.clone(),
                      this._lineStyle.clone(),
                      this._matrix,
                    ),
                this
              );
            }),
            (e.prototype.clear = function () {
              return (
                this._geometry.clear(),
                this._lineStyle.reset(),
                this._fillStyle.reset(),
                this._boundsID++,
                (this._matrix = null),
                (this._holeMode = !1),
                (this.currentPath = null),
                this
              );
            }),
            (e.prototype.isFastRect = function () {
              var t = this._geometry.graphicsData;
              return (
                1 === t.length &&
                t[0].shape.type === F.HY.RECT &&
                !t[0].matrix &&
                !t[0].holes.length &&
                !(t[0].lineStyle.visible && t[0].lineStyle.width)
              );
            }),
            (e.prototype._render = function (t) {
              this.finishPoly();
              var e = this._geometry;
              (e.updateBatches(),
                e.batchable
                  ? (this.batchDirty !== e.batchDirty &&
                      this._populateBatches(),
                    this._renderBatched(t))
                  : (t.batch.flush(), this._renderDirect(t)));
            }),
            (e.prototype._populateBatches = function () {
              var t = this._geometry,
                e = this.blendMode,
                i = t.batches.length;
              ((this.batchTint = -1),
                (this._transformID = -1),
                (this.batchDirty = t.batchDirty),
                (this.batches.length = i),
                (this.vertexData = new Float32Array(t.points)));
              for (var r = 0; r < i; r++) {
                var n = t.batches[r],
                  o = n.style.color,
                  s = new Float32Array(
                    this.vertexData.buffer,
                    4 * n.attribStart * 2,
                    2 * n.attribSize,
                  ),
                  a = new Float32Array(
                    t.uvsFloat32.buffer,
                    4 * n.attribStart * 2,
                    2 * n.attribSize,
                  ),
                  h = {
                    vertexData: s,
                    blendMode: e,
                    indices: new Uint16Array(
                      t.indicesUint16.buffer,
                      2 * n.start,
                      n.size,
                    ),
                    uvs: a,
                    _batchRGB: (0, L.xp)(o),
                    _tintRGB: o,
                    _texture: n.style.texture,
                    alpha: n.style.alpha,
                    worldAlpha: 1,
                  };
                this.batches[r] = h;
              }
            }),
            (e.prototype._renderBatched = function (t) {
              if (this.batches.length) {
                (t.batch.setObjectRenderer(t.plugins[this.pluginName]),
                  this.calculateVertices(),
                  this.calculateTints());
                for (var e = 0, i = this.batches.length; e < i; e++) {
                  var r = this.batches[e];
                  ((r.worldAlpha = this.worldAlpha * r.alpha),
                    t.plugins[this.pluginName].render(r));
                }
              }
            }),
            (e.prototype._renderDirect = function (t) {
              var e = this._resolveDirectShader(t),
                i = this._geometry,
                r = this.tint,
                n = this.worldAlpha,
                o = e.uniforms,
                s = i.drawCalls;
              ((o.translationMatrix = this.transform.worldTransform),
                (o.tint[0] = (((r >> 16) & 255) / 255) * n),
                (o.tint[1] = (((r >> 8) & 255) / 255) * n),
                (o.tint[2] = ((255 & r) / 255) * n),
                (o.tint[3] = n),
                t.shader.bind(e),
                t.geometry.bind(i, e),
                t.state.set(this.state));
              for (var a = 0, h = s.length; a < h; a++)
                this._renderDrawCallDirect(t, i.drawCalls[a]);
            }),
            (e.prototype._renderDrawCallDirect = function (t, e) {
              for (
                var i = e.texArray,
                  r = e.type,
                  n = e.size,
                  o = e.start,
                  s = i.count,
                  a = 0;
                a < s;
                a++
              )
                t.texture.bind(i.elements[a], a);
              t.geometry.draw(r, n, o);
            }),
            (e.prototype._resolveDirectShader = function (t) {
              var e = this.shader,
                i = this.pluginName;
              if (!e) {
                if (!ei[i]) {
                  for (
                    var r = t.plugins[i].MAX_TEXTURES,
                      n = new Int32Array(r),
                      o = 0;
                    o < r;
                    o++
                  )
                    n[o] = o;
                  var s = {
                      tint: new Float32Array([1, 1, 1, 1]),
                      translationMatrix: new F.uq(),
                      default: W.k2.from({ uSamplers: n }, !0),
                    },
                    a = t.plugins[i]._shader.program;
                  ei[i] = new W.Mt(a, s);
                }
                e = ei[i];
              }
              return e;
            }),
            (e.prototype._calculateBounds = function () {
              this.finishPoly();
              var t = this._geometry;
              if (t.graphicsData.length) {
                var e = t.bounds,
                  i = e.minX,
                  r = e.minY,
                  n = e.maxX,
                  o = e.maxY;
                this._bounds.addFrame(this.transform, i, r, n, o);
              }
            }),
            (e.prototype.containsPoint = function (t) {
              return (
                this.worldTransform.applyInverse(t, e._TEMP_POINT),
                this._geometry.containsPoint(e._TEMP_POINT)
              );
            }),
            (e.prototype.calculateTints = function () {
              if (this.batchTint !== this.tint) {
                this.batchTint = this.tint;
                for (
                  var t = (0, L.xp)(this.tint, ee), e = 0;
                  e < this.batches.length;
                  e++
                ) {
                  var i = this.batches[e],
                    r = i._batchRGB,
                    n =
                      ((t[0] * r[0] * 255) << 16) +
                      ((t[1] * r[1] * 255) << 8) +
                      (0 | (t[2] * r[2] * 255));
                  i._tintRGB = (n >> 16) + (65280 & n) + ((255 & n) << 16);
                }
              }
            }),
            (e.prototype.calculateVertices = function () {
              var t = this.transform._worldID;
              if (this._transformID !== t) {
                this._transformID = t;
                for (
                  var e = this.transform.worldTransform,
                    i = e.a,
                    r = e.b,
                    n = e.c,
                    o = e.d,
                    s = e.tx,
                    a = e.ty,
                    h = this._geometry.points,
                    u = this.vertexData,
                    l = 0,
                    c = 0;
                  c < h.length;
                  c += 2
                ) {
                  var p = h[c],
                    d = h[c + 1];
                  ((u[l++] = i * p + n * d + s), (u[l++] = o * d + r * p + a));
                }
              }
            }),
            (e.prototype.closePath = function () {
              var t = this.currentPath;
              return (t && ((t.closeStroke = !0), this.finishPoly()), this);
            }),
            (e.prototype.setMatrix = function (t) {
              return ((this._matrix = t), this);
            }),
            (e.prototype.beginHole = function () {
              return (this.finishPoly(), (this._holeMode = !0), this);
            }),
            (e.prototype.endHole = function () {
              return (this.finishPoly(), (this._holeMode = !1), this);
            }),
            (e.prototype.destroy = function (e) {
              (this._geometry.refCount--,
                0 === this._geometry.refCount && this._geometry.dispose(),
                (this._matrix = null),
                (this.currentPath = null),
                this._lineStyle.destroy(),
                (this._lineStyle = null),
                this._fillStyle.destroy(),
                (this._fillStyle = null),
                (this._geometry = null),
                (this.shader = null),
                (this.vertexData = null),
                (this.batches.length = 0),
                (this.batches = null),
                t.prototype.destroy.call(this, e));
            }),
            (e.nextRoundedRectBehavior = !1),
            (e._TEMP_POINT = new F.bR()),
            e
          );
        })(Y),
        en = function (t, e) {
          return (en =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
            })(t, e);
        },
        eo = new F.bR(),
        es = new Uint16Array([0, 1, 2, 0, 2, 3]),
        ea = (function (t) {
          function e() {
            this.constructor = i;
          }
          function i(e) {
            var i = t.call(this) || this;
            return (
              (i._anchor = new F.oA(
                i._onAnchorUpdate,
                i,
                e ? e.defaultAnchor.x : 0,
                e ? e.defaultAnchor.y : 0,
              )),
              (i._texture = null),
              (i._width = 0),
              (i._height = 0),
              (i._tint = null),
              (i._tintRGB = null),
              (i.tint = 0xffffff),
              (i.blendMode = G.B9.NORMAL),
              (i._cachedTint = 0xffffff),
              (i.uvs = null),
              (i.texture = e || W.gP.EMPTY),
              (i.vertexData = new Float32Array(8)),
              (i.vertexTrimmedData = null),
              (i._transformID = -1),
              (i._textureID = -1),
              (i._transformTrimmedID = -1),
              (i._textureTrimmedID = -1),
              (i.indices = es),
              (i.pluginName = "batch"),
              (i.isSprite = !0),
              (i._roundPixels = N.W0.ROUND_PIXELS),
              i
            );
          }
          return (
            en(i, t),
            (i.prototype =
              null === t
                ? Object.create(t)
                : ((e.prototype = t.prototype), new e())),
            (i.prototype._onTextureUpdate = function () {
              ((this._textureID = -1),
                (this._textureTrimmedID = -1),
                (this._cachedTint = 0xffffff),
                this._width &&
                  (this.scale.x =
                    ((0, L._S)(this.scale.x) * this._width) /
                    this._texture.orig.width),
                this._height &&
                  (this.scale.y =
                    ((0, L._S)(this.scale.y) * this._height) /
                    this._texture.orig.height));
            }),
            (i.prototype._onAnchorUpdate = function () {
              ((this._transformID = -1), (this._transformTrimmedID = -1));
            }),
            (i.prototype.calculateVertices = function () {
              var t = this._texture;
              if (
                this._transformID !== this.transform._worldID ||
                this._textureID !== t._updateID
              ) {
                (this._textureID !== t._updateID &&
                  (this.uvs = this._texture._uvs.uvsFloat32),
                  (this._transformID = this.transform._worldID),
                  (this._textureID = t._updateID));
                var e = this.transform.worldTransform,
                  i = e.a,
                  r = e.b,
                  n = e.c,
                  o = e.d,
                  s = e.tx,
                  a = e.ty,
                  h = this.vertexData,
                  u = t.trim,
                  l = t.orig,
                  c = this._anchor,
                  p = 0,
                  d = 0,
                  f = 0,
                  _ = 0;
                if (
                  (u
                    ? ((p = (d = u.x - c._x * l.width) + u.width),
                      (f = (_ = u.y - c._y * l.height) + u.height))
                    : ((p = (d = -c._x * l.width) + l.width),
                      (f = (_ = -c._y * l.height) + l.height)),
                  (h[0] = i * d + n * _ + s),
                  (h[1] = o * _ + r * d + a),
                  (h[2] = i * p + n * _ + s),
                  (h[3] = o * _ + r * p + a),
                  (h[4] = i * p + n * f + s),
                  (h[5] = o * f + r * p + a),
                  (h[6] = i * d + n * f + s),
                  (h[7] = o * f + r * d + a),
                  this._roundPixels)
                )
                  for (var v = N.W0.RESOLUTION, y = 0; y < h.length; ++y)
                    h[y] = Math.round(((h[y] * v) | 0) / v);
              }
            }),
            (i.prototype.calculateTrimmedVertices = function () {
              if (this.vertexTrimmedData) {
                if (
                  this._transformTrimmedID === this.transform._worldID &&
                  this._textureTrimmedID === this._texture._updateID
                )
                  return;
              } else this.vertexTrimmedData = new Float32Array(8);
              ((this._transformTrimmedID = this.transform._worldID),
                (this._textureTrimmedID = this._texture._updateID));
              var t = this._texture,
                e = this.vertexTrimmedData,
                i = t.orig,
                r = this._anchor,
                n = this.transform.worldTransform,
                o = n.a,
                s = n.b,
                a = n.c,
                h = n.d,
                u = n.tx,
                l = n.ty,
                c = -r._x * i.width,
                p = c + i.width,
                d = -r._y * i.height,
                f = d + i.height;
              ((e[0] = o * c + a * d + u),
                (e[1] = h * d + s * c + l),
                (e[2] = o * p + a * d + u),
                (e[3] = h * d + s * p + l),
                (e[4] = o * p + a * f + u),
                (e[5] = h * f + s * p + l),
                (e[6] = o * c + a * f + u),
                (e[7] = h * f + s * c + l));
            }),
            (i.prototype._render = function (t) {
              (this.calculateVertices(),
                t.batch.setObjectRenderer(t.plugins[this.pluginName]),
                t.plugins[this.pluginName].render(this));
            }),
            (i.prototype._calculateBounds = function () {
              var t = this._texture.trim,
                e = this._texture.orig;
              t && (t.width !== e.width || t.height !== e.height)
                ? (this.calculateTrimmedVertices(),
                  this._bounds.addQuad(this.vertexTrimmedData))
                : (this.calculateVertices(),
                  this._bounds.addQuad(this.vertexData));
            }),
            (i.prototype.getLocalBounds = function (e) {
              return 0 === this.children.length
                ? (this._localBounds || (this._localBounds = new B()),
                  (this._localBounds.minX = -(
                    this._texture.orig.width * this._anchor._x
                  )),
                  (this._localBounds.minY = -(
                    this._texture.orig.height * this._anchor._y
                  )),
                  (this._localBounds.maxX =
                    this._texture.orig.width * (1 - this._anchor._x)),
                  (this._localBounds.maxY =
                    this._texture.orig.height * (1 - this._anchor._y)),
                  e ||
                    (this._localBoundsRect ||
                      (this._localBoundsRect = new F.M_()),
                    (e = this._localBoundsRect)),
                  this._localBounds.getRectangle(e))
                : t.prototype.getLocalBounds.call(this, e);
            }),
            (i.prototype.containsPoint = function (t) {
              this.worldTransform.applyInverse(t, eo);
              var e = this._texture.orig.width,
                i = this._texture.orig.height,
                r = -e * this.anchor.x,
                n = 0;
              return (
                (!!(eo.x >= r) &&
                  !!(eo.x < r + e) &&
                  ((n = -i * this.anchor.y),
                  !!(eo.y >= n) && !!(eo.y < n + i))) ||
                !1
              );
            }),
            (i.prototype.destroy = function (e) {
              if (
                (t.prototype.destroy.call(this, e),
                this._texture.off("update", this._onTextureUpdate, this),
                (this._anchor = null),
                "boolean" == typeof e ? e : e && e.texture)
              ) {
                var i = "boolean" == typeof e ? e : e && e.baseTexture;
                this._texture.destroy(!!i);
              }
              this._texture = null;
            }),
            (i.from = function (t, e) {
              return new i(t instanceof W.gP ? t : W.gP.from(t, e));
            }),
            Object.defineProperty(i.prototype, "roundPixels", {
              get: function () {
                return this._roundPixels;
              },
              set: function (t) {
                (this._roundPixels !== t && (this._transformID = -1),
                  (this._roundPixels = t));
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(i.prototype, "width", {
              get: function () {
                return Math.abs(this.scale.x) * this._texture.orig.width;
              },
              set: function (t) {
                var e = (0, L._S)(this.scale.x) || 1;
                ((this.scale.x = (e * t) / this._texture.orig.width),
                  (this._width = t));
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(i.prototype, "height", {
              get: function () {
                return Math.abs(this.scale.y) * this._texture.orig.height;
              },
              set: function (t) {
                var e = (0, L._S)(this.scale.y) || 1;
                ((this.scale.y = (e * t) / this._texture.orig.height),
                  (this._height = t));
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(i.prototype, "anchor", {
              get: function () {
                return this._anchor;
              },
              set: function (t) {
                this._anchor.copyFrom(t);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(i.prototype, "tint", {
              get: function () {
                return this._tint;
              },
              set: function (t) {
                ((this._tint = t),
                  (this._tintRGB =
                    (t >> 16) + (65280 & t) + ((255 & t) << 16)));
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(i.prototype, "texture", {
              get: function () {
                return this._texture;
              },
              set: function (t) {
                this._texture !== t &&
                  (this._texture &&
                    this._texture.off("update", this._onTextureUpdate, this),
                  (this._texture = t || W.gP.EMPTY),
                  (this._cachedTint = 0xffffff),
                  (this._textureID = -1),
                  (this._textureTrimmedID = -1),
                  t &&
                    (t.baseTexture.valid
                      ? this._onTextureUpdate()
                      : t.once("update", this._onTextureUpdate, this)));
              },
              enumerable: !1,
              configurable: !0,
            }),
            i
          );
        })(Y),
        eh = function (t, e) {
          return (eh =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
            })(t, e);
        };
      !(function (t) {
        ((t[(t.LINEAR_VERTICAL = 0)] = "LINEAR_VERTICAL"),
          (t[(t.LINEAR_HORIZONTAL = 1)] = "LINEAR_HORIZONTAL"));
      })(y || (y = {}));
      var eu = {
          align: "left",
          breakWords: !1,
          dropShadow: !1,
          dropShadowAlpha: 1,
          dropShadowAngle: Math.PI / 6,
          dropShadowBlur: 0,
          dropShadowColor: "black",
          dropShadowDistance: 5,
          fill: "black",
          fillGradientType: y.LINEAR_VERTICAL,
          fillGradientStops: [],
          fontFamily: "Arial",
          fontSize: 26,
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: "normal",
          letterSpacing: 0,
          lineHeight: 0,
          lineJoin: "miter",
          miterLimit: 10,
          padding: 0,
          stroke: "black",
          strokeThickness: 0,
          textBaseline: "alphabetic",
          trim: !1,
          whiteSpace: "pre",
          wordWrap: !1,
          wordWrapWidth: 100,
          leading: 0,
        },
        el = [
          "serif",
          "sans-serif",
          "monospace",
          "cursive",
          "fantasy",
          "system-ui",
        ],
        ec = (function () {
          function t(t) {
            ((this.styleID = 0), this.reset(), ef(this, t, t));
          }
          return (
            (t.prototype.clone = function () {
              var e = {};
              return (ef(e, this, eu), new t(e));
            }),
            (t.prototype.reset = function () {
              ef(this, eu, eu);
            }),
            Object.defineProperty(t.prototype, "align", {
              get: function () {
                return this._align;
              },
              set: function (t) {
                this._align !== t && ((this._align = t), this.styleID++);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "breakWords", {
              get: function () {
                return this._breakWords;
              },
              set: function (t) {
                this._breakWords !== t &&
                  ((this._breakWords = t), this.styleID++);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "dropShadow", {
              get: function () {
                return this._dropShadow;
              },
              set: function (t) {
                this._dropShadow !== t &&
                  ((this._dropShadow = t), this.styleID++);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "dropShadowAlpha", {
              get: function () {
                return this._dropShadowAlpha;
              },
              set: function (t) {
                this._dropShadowAlpha !== t &&
                  ((this._dropShadowAlpha = t), this.styleID++);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "dropShadowAngle", {
              get: function () {
                return this._dropShadowAngle;
              },
              set: function (t) {
                this._dropShadowAngle !== t &&
                  ((this._dropShadowAngle = t), this.styleID++);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "dropShadowBlur", {
              get: function () {
                return this._dropShadowBlur;
              },
              set: function (t) {
                this._dropShadowBlur !== t &&
                  ((this._dropShadowBlur = t), this.styleID++);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "dropShadowColor", {
              get: function () {
                return this._dropShadowColor;
              },
              set: function (t) {
                var e = ed(t);
                this._dropShadowColor !== e &&
                  ((this._dropShadowColor = e), this.styleID++);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "dropShadowDistance", {
              get: function () {
                return this._dropShadowDistance;
              },
              set: function (t) {
                this._dropShadowDistance !== t &&
                  ((this._dropShadowDistance = t), this.styleID++);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "fill", {
              get: function () {
                return this._fill;
              },
              set: function (t) {
                var e = ed(t);
                this._fill !== e && ((this._fill = e), this.styleID++);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "fillGradientType", {
              get: function () {
                return this._fillGradientType;
              },
              set: function (t) {
                this._fillGradientType !== t &&
                  ((this._fillGradientType = t), this.styleID++);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "fillGradientStops", {
              get: function () {
                return this._fillGradientStops;
              },
              set: function (t) {
                !(function (t, e) {
                  if (
                    !Array.isArray(t) ||
                    !Array.isArray(e) ||
                    t.length !== e.length
                  )
                    return !1;
                  for (var i = 0; i < t.length; ++i)
                    if (t[i] !== e[i]) return !1;
                  return !0;
                })(this._fillGradientStops, t) &&
                  ((this._fillGradientStops = t), this.styleID++);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "fontFamily", {
              get: function () {
                return this._fontFamily;
              },
              set: function (t) {
                this.fontFamily !== t &&
                  ((this._fontFamily = t), this.styleID++);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "fontSize", {
              get: function () {
                return this._fontSize;
              },
              set: function (t) {
                this._fontSize !== t && ((this._fontSize = t), this.styleID++);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "fontStyle", {
              get: function () {
                return this._fontStyle;
              },
              set: function (t) {
                this._fontStyle !== t &&
                  ((this._fontStyle = t), this.styleID++);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "fontVariant", {
              get: function () {
                return this._fontVariant;
              },
              set: function (t) {
                this._fontVariant !== t &&
                  ((this._fontVariant = t), this.styleID++);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "fontWeight", {
              get: function () {
                return this._fontWeight;
              },
              set: function (t) {
                this._fontWeight !== t &&
                  ((this._fontWeight = t), this.styleID++);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "letterSpacing", {
              get: function () {
                return this._letterSpacing;
              },
              set: function (t) {
                this._letterSpacing !== t &&
                  ((this._letterSpacing = t), this.styleID++);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "lineHeight", {
              get: function () {
                return this._lineHeight;
              },
              set: function (t) {
                this._lineHeight !== t &&
                  ((this._lineHeight = t), this.styleID++);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "leading", {
              get: function () {
                return this._leading;
              },
              set: function (t) {
                this._leading !== t && ((this._leading = t), this.styleID++);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "lineJoin", {
              get: function () {
                return this._lineJoin;
              },
              set: function (t) {
                this._lineJoin !== t && ((this._lineJoin = t), this.styleID++);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "miterLimit", {
              get: function () {
                return this._miterLimit;
              },
              set: function (t) {
                this._miterLimit !== t &&
                  ((this._miterLimit = t), this.styleID++);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "padding", {
              get: function () {
                return this._padding;
              },
              set: function (t) {
                this._padding !== t && ((this._padding = t), this.styleID++);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "stroke", {
              get: function () {
                return this._stroke;
              },
              set: function (t) {
                var e = ed(t);
                this._stroke !== e && ((this._stroke = e), this.styleID++);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "strokeThickness", {
              get: function () {
                return this._strokeThickness;
              },
              set: function (t) {
                this._strokeThickness !== t &&
                  ((this._strokeThickness = t), this.styleID++);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "textBaseline", {
              get: function () {
                return this._textBaseline;
              },
              set: function (t) {
                this._textBaseline !== t &&
                  ((this._textBaseline = t), this.styleID++);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "trim", {
              get: function () {
                return this._trim;
              },
              set: function (t) {
                this._trim !== t && ((this._trim = t), this.styleID++);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "whiteSpace", {
              get: function () {
                return this._whiteSpace;
              },
              set: function (t) {
                this._whiteSpace !== t &&
                  ((this._whiteSpace = t), this.styleID++);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "wordWrap", {
              get: function () {
                return this._wordWrap;
              },
              set: function (t) {
                this._wordWrap !== t && ((this._wordWrap = t), this.styleID++);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "wordWrapWidth", {
              get: function () {
                return this._wordWrapWidth;
              },
              set: function (t) {
                this._wordWrapWidth !== t &&
                  ((this._wordWrapWidth = t), this.styleID++);
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.toFontString = function () {
              var t =
                  "number" == typeof this.fontSize
                    ? this.fontSize + "px"
                    : this.fontSize,
                e = this.fontFamily;
              Array.isArray(this.fontFamily) ||
                (e = this.fontFamily.split(","));
              for (var i = e.length - 1; i >= 0; i--) {
                var r = e[i].trim();
                (!/([\"\'])[^\'\"]+\1/.test(r) &&
                  0 > el.indexOf(r) &&
                  (r = '"' + r + '"'),
                  (e[i] = r));
              }
              return (
                this.fontStyle +
                " " +
                this.fontVariant +
                " " +
                this.fontWeight +
                " " +
                t +
                " " +
                e.join(",")
              );
            }),
            t
          );
        })();
      function ep(t) {
        return "number" == typeof t
          ? (0, L.PF)(t)
          : ("string" == typeof t &&
              0 === t.indexOf("0x") &&
              (t = t.replace("0x", "#")),
            t);
      }
      function ed(t) {
        if (!Array.isArray(t)) return ep(t);
        for (var e = 0; e < t.length; ++e) t[e] = ep(t[e]);
        return t;
      }
      function ef(t, e, i) {
        for (var r in i)
          Array.isArray(e[r]) ? (t[r] = e[r].slice()) : (t[r] = e[r]);
      }
      var e_ = { willReadFrequently: !0 },
        ev = (function () {
          function t(t, e, i, r, n, o, s, a, h) {
            ((this.text = t),
              (this.style = e),
              (this.width = i),
              (this.height = r),
              (this.lines = n),
              (this.lineWidths = o),
              (this.lineHeight = s),
              (this.maxLineWidth = a),
              (this.fontProperties = h));
          }
          return (
            (t.measureText = function (e, i, r, n) {
              (void 0 === n && (n = t._canvas),
                (r = null == r ? i.wordWrap : r));
              var o = i.toFontString(),
                s = t.measureFont(o);
              0 === s.fontSize &&
                ((s.fontSize = i.fontSize), (s.ascent = i.fontSize));
              var a = n.getContext("2d", e_);
              a.font = o;
              for (
                var h = (r ? t.wordWrap(e, i, n) : e).split(/(?:\r\n|\r|\n)/),
                  u = Array(h.length),
                  l = 0,
                  c = 0;
                c < h.length;
                c++
              ) {
                var p =
                  a.measureText(h[c]).width +
                  (h[c].length - 1) * i.letterSpacing;
                ((u[c] = p), (l = Math.max(l, p)));
              }
              var d = l + i.strokeThickness;
              i.dropShadow && (d += i.dropShadowDistance);
              var f = i.lineHeight || s.fontSize + i.strokeThickness,
                _ =
                  Math.max(f, s.fontSize + i.strokeThickness) +
                  (h.length - 1) * (f + i.leading);
              return (
                i.dropShadow && (_ += i.dropShadowDistance),
                new t(e, i, d, _, h, u, f + i.leading, l, s)
              );
            }),
            (t.wordWrap = function (e, i, r) {
              void 0 === r && (r = t._canvas);
              for (
                var n = r.getContext("2d", e_),
                  o = 0,
                  s = "",
                  a = "",
                  h = Object.create(null),
                  u = i.letterSpacing,
                  l = i.whiteSpace,
                  c = t.collapseSpaces(l),
                  p = t.collapseNewlines(l),
                  d = !c,
                  f = i.wordWrapWidth + u,
                  _ = t.tokenize(e),
                  v = 0;
                v < _.length;
                v++
              ) {
                var y = _[v];
                if (t.isNewline(y)) {
                  if (!p) {
                    ((a += t.addLine(s)), (d = !c), (s = ""), (o = 0));
                    continue;
                  }
                  y = " ";
                }
                if (c) {
                  var g = t.isBreakingSpace(y),
                    m = t.isBreakingSpace(s[s.length - 1]);
                  if (g && m) continue;
                }
                var b = t.getFromCache(y, u, h, n);
                if (b > f)
                  if (
                    ("" !== s && ((a += t.addLine(s)), (s = ""), (o = 0)),
                    t.canBreakWords(y, i.breakWords))
                  )
                    for (var x = t.wordWrapSplit(y), T = 0; T < x.length; T++) {
                      for (var E = x[T], O = 1; x[T + O]; ) {
                        var R = x[T + O],
                          A = E[E.length - 1];
                        if (t.canBreakChars(A, R, y, T, i.breakWords)) break;
                        ((E += R), O++);
                      }
                      T += E.length - 1;
                      var S = t.getFromCache(E, u, h, n);
                      (S + o > f &&
                        ((a += t.addLine(s)), (d = !1), (s = ""), (o = 0)),
                        (s += E),
                        (o += S));
                    }
                  else {
                    s.length > 0 && ((a += t.addLine(s)), (s = ""), (o = 0));
                    var P = v === _.length - 1;
                    ((a += t.addLine(y, !P)), (d = !1), (s = ""), (o = 0));
                  }
                else
                  (b + o > f &&
                    ((d = !1), (a += t.addLine(s)), (s = ""), (o = 0)),
                    (s.length > 0 || !t.isBreakingSpace(y) || d) &&
                      ((s += y), (o += b)));
              }
              return a + t.addLine(s, !1);
            }),
            (t.addLine = function (e, i) {
              return (
                void 0 === i && (i = !0),
                (e = t.trimRight(e)),
                (e = i ? e + "\n" : e)
              );
            }),
            (t.getFromCache = function (t, e, i, r) {
              var n = i[t];
              if ("number" != typeof n) {
                var o = t.length * e;
                ((n = r.measureText(t).width + o), (i[t] = n));
              }
              return n;
            }),
            (t.collapseSpaces = function (t) {
              return "normal" === t || "pre-line" === t;
            }),
            (t.collapseNewlines = function (t) {
              return "normal" === t;
            }),
            (t.trimRight = function (e) {
              if ("string" != typeof e) return "";
              for (var i = e.length - 1; i >= 0; i--) {
                var r = e[i];
                if (!t.isBreakingSpace(r)) break;
                e = e.slice(0, -1);
              }
              return e;
            }),
            (t.isNewline = function (e) {
              return (
                "string" == typeof e &&
                t._newlines.indexOf(e.charCodeAt(0)) >= 0
              );
            }),
            (t.isBreakingSpace = function (e, i) {
              return (
                "string" == typeof e &&
                t._breakingSpaces.indexOf(e.charCodeAt(0)) >= 0
              );
            }),
            (t.tokenize = function (e) {
              var i = [],
                r = "";
              if ("string" != typeof e) return i;
              for (var n = 0; n < e.length; n++) {
                var o = e[n],
                  s = e[n + 1];
                if (t.isBreakingSpace(o, s) || t.isNewline(o)) {
                  ("" !== r && (i.push(r), (r = "")), i.push(o));
                  continue;
                }
                r += o;
              }
              return ("" !== r && i.push(r), i);
            }),
            (t.canBreakWords = function (t, e) {
              return e;
            }),
            (t.canBreakChars = function (t, e, i, r, n) {
              return !0;
            }),
            (t.wordWrapSplit = function (t) {
              return t.split("");
            }),
            (t.measureFont = function (e) {
              if (t._fonts[e]) return t._fonts[e];
              var i = { ascent: 0, descent: 0, fontSize: 0 },
                r = t._canvas,
                n = t._context;
              n.font = e;
              var o = t.METRICS_STRING + t.BASELINE_SYMBOL,
                s = Math.ceil(n.measureText(o).width),
                a = Math.ceil(n.measureText(t.BASELINE_SYMBOL).width),
                h = Math.ceil(t.HEIGHT_MULTIPLIER * a);
              ((a = (a * t.BASELINE_MULTIPLIER) | 0),
                (r.width = s),
                (r.height = h),
                (n.fillStyle = "#f00"),
                n.fillRect(0, 0, s, h),
                (n.font = e),
                (n.textBaseline = "alphabetic"),
                (n.fillStyle = "#000"),
                n.fillText(o, 0, a));
              var u = n.getImageData(0, 0, s, h).data,
                l = u.length,
                c = 4 * s,
                p = 0,
                d = 0,
                f = !1;
              for (p = 0; p < a; ++p) {
                for (var _ = 0; _ < c; _ += 4)
                  if (255 !== u[d + _]) {
                    f = !0;
                    break;
                  }
                if (f) break;
                d += c;
              }
              for (i.ascent = a - p, d = l - c, f = !1, p = h; p > a; --p) {
                for (var _ = 0; _ < c; _ += 4)
                  if (255 !== u[d + _]) {
                    f = !0;
                    break;
                  }
                if (f) break;
                d -= c;
              }
              return (
                (i.descent = p - a),
                (i.fontSize = i.ascent + i.descent),
                (t._fonts[e] = i),
                i
              );
            }),
            (t.clearMetrics = function (e) {
              (void 0 === e && (e = ""),
                e ? delete t._fonts[e] : (t._fonts = {}));
            }),
            Object.defineProperty(t, "_canvas", {
              get: function () {
                if (!t.__canvas) {
                  var e = void 0;
                  try {
                    var i = new OffscreenCanvas(0, 0),
                      r = i.getContext("2d", e_);
                    if (r && r.measureText) return ((t.__canvas = i), i);
                    e = N.W0.ADAPTER.createCanvas();
                  } catch (t) {
                    e = N.W0.ADAPTER.createCanvas();
                  }
                  ((e.width = e.height = 10), (t.__canvas = e));
                }
                return t.__canvas;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t, "_context", {
              get: function () {
                return (
                  t.__context || (t.__context = t._canvas.getContext("2d", e_)),
                  t.__context
                );
              },
              enumerable: !1,
              configurable: !0,
            }),
            t
          );
        })();
      ((ev._fonts = {}),
        (ev.METRICS_STRING = "|\xc9q\xc5"),
        (ev.BASELINE_SYMBOL = "M"),
        (ev.BASELINE_MULTIPLIER = 1.4),
        (ev.HEIGHT_MULTIPLIER = 2),
        (ev._newlines = [10, 13]),
        (ev._breakingSpaces = [
          9, 32, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8200, 8201, 8202,
          8287, 12288,
        ]));
      var ey = { texture: !0, children: !1, baseTexture: !0 },
        eg = (function (t) {
          function e() {
            this.constructor = i;
          }
          function i(e, i, r) {
            var n = this,
              o = !1;
            (r || ((r = N.W0.ADAPTER.createCanvas()), (o = !0)),
              (r.width = 3),
              (r.height = 3));
            var s = W.gP.from(r);
            return (
              (s.orig = new F.M_()),
              (s.trim = new F.M_()),
              ((n = t.call(this, s) || this)._ownCanvas = o),
              (n.canvas = r),
              (n.context = r.getContext("2d", { willReadFrequently: !0 })),
              (n._resolution = N.W0.RESOLUTION),
              (n._autoResolution = !0),
              (n._text = null),
              (n._style = null),
              (n._styleListener = null),
              (n._font = ""),
              (n.text = e),
              (n.style = i),
              (n.localStyleID = -1),
              n
            );
          }
          return (
            eh(i, t),
            (i.prototype =
              null === t
                ? Object.create(t)
                : ((e.prototype = t.prototype), new e())),
            (i.prototype.updateText = function (t) {
              var e,
                r,
                n = this._style;
              if (
                (this.localStyleID !== n.styleID &&
                  ((this.dirty = !0), (this.localStyleID = n.styleID)),
                this.dirty || !t)
              ) {
                this._font = this._style.toFontString();
                var o = this.context,
                  s = ev.measureText(
                    this._text || " ",
                    this._style,
                    this._style.wordWrap,
                    this.canvas,
                  ),
                  a = s.width,
                  h = s.height,
                  u = s.lines,
                  l = s.lineHeight,
                  c = s.lineWidths,
                  p = s.maxLineWidth,
                  d = s.fontProperties;
                ((this.canvas.width = Math.ceil(
                  Math.ceil(Math.max(1, a) + 2 * n.padding) * this._resolution,
                )),
                  (this.canvas.height = Math.ceil(
                    Math.ceil(Math.max(1, h) + 2 * n.padding) *
                      this._resolution,
                  )),
                  o.scale(this._resolution, this._resolution),
                  o.clearRect(0, 0, this.canvas.width, this.canvas.height),
                  (o.font = this._font),
                  (o.lineWidth = n.strokeThickness),
                  (o.textBaseline = n.textBaseline),
                  (o.lineJoin = n.lineJoin),
                  (o.miterLimit = n.miterLimit));
                for (var f = n.dropShadow ? 2 : 1, _ = 0; _ < f; ++_) {
                  var v = n.dropShadow && 0 === _,
                    y = v ? Math.ceil(Math.max(1, h) + 2 * n.padding) : 0,
                    g = y * this._resolution;
                  if (v) {
                    ((o.fillStyle = "black"), (o.strokeStyle = "black"));
                    var m = n.dropShadowColor,
                      b = (0, L.xp)("number" == typeof m ? m : (0, L.f4)(m)),
                      x = n.dropShadowBlur * this._resolution,
                      T = n.dropShadowDistance * this._resolution;
                    ((o.shadowColor =
                      "rgba(" +
                      255 * b[0] +
                      "," +
                      255 * b[1] +
                      "," +
                      255 * b[2] +
                      "," +
                      n.dropShadowAlpha +
                      ")"),
                      (o.shadowBlur = x),
                      (o.shadowOffsetX = Math.cos(n.dropShadowAngle) * T),
                      (o.shadowOffsetY = Math.sin(n.dropShadowAngle) * T + g));
                  } else
                    ((o.fillStyle = this._generateFillStyle(n, u, s)),
                      (o.strokeStyle = n.stroke),
                      (o.shadowColor = "black"),
                      (o.shadowBlur = 0),
                      (o.shadowOffsetX = 0),
                      (o.shadowOffsetY = 0));
                  var E = (l - d.fontSize) / 2;
                  (!i.nextLineHeightBehavior || l - d.fontSize < 0) && (E = 0);
                  for (var O = 0; O < u.length; O++)
                    ((e = n.strokeThickness / 2),
                      (r = n.strokeThickness / 2 + O * l + d.ascent + E),
                      "right" === n.align
                        ? (e += p - c[O])
                        : "center" === n.align && (e += (p - c[O]) / 2),
                      n.stroke &&
                        n.strokeThickness &&
                        this.drawLetterSpacing(
                          u[O],
                          e + n.padding,
                          r + n.padding - y,
                          !0,
                        ),
                      n.fill &&
                        this.drawLetterSpacing(
                          u[O],
                          e + n.padding,
                          r + n.padding - y,
                        ));
                }
                this.updateTexture();
              }
            }),
            (i.prototype.drawLetterSpacing = function (t, e, r, n) {
              void 0 === n && (n = !1);
              var o = this._style.letterSpacing,
                s =
                  i.experimentalLetterSpacing &&
                  ("letterSpacing" in CanvasRenderingContext2D.prototype ||
                    "textLetterSpacing" in CanvasRenderingContext2D.prototype);
              if (0 === o || s) {
                (s &&
                  ((this.context.letterSpacing = o),
                  (this.context.textLetterSpacing = o)),
                  n
                    ? this.context.strokeText(t, e, r)
                    : this.context.fillText(t, e, r));
                return;
              }
              for (
                var a = e,
                  h = Array.from ? Array.from(t) : t.split(""),
                  u = this.context.measureText(t).width,
                  l = 0,
                  c = 0;
                c < h.length;
                ++c
              ) {
                var p = h[c];
                n
                  ? this.context.strokeText(p, a, r)
                  : this.context.fillText(p, a, r);
                for (var d = "", f = c + 1; f < h.length; ++f) d += h[f];
                ((a += u - (l = this.context.measureText(d).width) + o),
                  (u = l));
              }
            }),
            (i.prototype.updateTexture = function () {
              var t = this.canvas;
              if (this._style.trim) {
                var e = (0, L.R2)(t);
                e.data &&
                  ((t.width = e.width),
                  (t.height = e.height),
                  this.context.putImageData(e.data, 0, 0));
              }
              var i = this._texture,
                r = this._style,
                n = r.trim ? 0 : r.padding,
                o = i.baseTexture;
              ((i.trim.width = i._frame.width = t.width / this._resolution),
                (i.trim.height = i._frame.height = t.height / this._resolution),
                (i.trim.x = -n),
                (i.trim.y = -n),
                (i.orig.width = i._frame.width - 2 * n),
                (i.orig.height = i._frame.height - 2 * n),
                this._onTextureUpdate(),
                o.setRealSize(t.width, t.height, this._resolution),
                i.updateUvs(),
                (this.dirty = !1));
            }),
            (i.prototype._render = function (e) {
              (this._autoResolution &&
                this._resolution !== e.resolution &&
                ((this._resolution = e.resolution), (this.dirty = !0)),
                this.updateText(!0),
                t.prototype._render.call(this, e));
            }),
            (i.prototype.updateTransform = function () {
              (this.updateText(!0), t.prototype.updateTransform.call(this));
            }),
            (i.prototype.getBounds = function (e, i) {
              return (
                this.updateText(!0),
                -1 === this._textureID && (e = !1),
                t.prototype.getBounds.call(this, e, i)
              );
            }),
            (i.prototype.getLocalBounds = function (e) {
              return (
                this.updateText(!0),
                t.prototype.getLocalBounds.call(this, e)
              );
            }),
            (i.prototype._calculateBounds = function () {
              (this.calculateVertices(), this._bounds.addQuad(this.vertexData));
            }),
            (i.prototype._generateFillStyle = function (t, e, i) {
              var r,
                n = t.fill;
              if (!Array.isArray(n)) return n;
              if (1 === n.length) return n[0];
              var o = t.dropShadow ? t.dropShadowDistance : 0,
                s = t.padding || 0,
                a = this.canvas.width / this._resolution - o - 2 * s,
                h = this.canvas.height / this._resolution - o - 2 * s,
                u = n.slice(),
                l = t.fillGradientStops.slice();
              if (!l.length)
                for (var c = u.length + 1, p = 1; p < c; ++p) l.push(p / c);
              if (
                (u.unshift(n[0]),
                l.unshift(0),
                u.push(n[n.length - 1]),
                l.push(1),
                t.fillGradientType === y.LINEAR_VERTICAL)
              ) {
                r = this.context.createLinearGradient(a / 2, s, a / 2, h + s);
                for (
                  var d = i.fontProperties.fontSize + t.strokeThickness, p = 0;
                  p < e.length;
                  p++
                ) {
                  var f = i.lineHeight * (p - 1) + d,
                    _ = i.lineHeight * p,
                    v = _;
                  p > 0 && f > _ && (v = (_ + f) / 2);
                  var g = _ + d,
                    m = i.lineHeight * (p + 1),
                    b = g;
                  p + 1 < e.length && m < g && (b = (g + m) / 2);
                  for (var x = (b - v) / h, T = 0; T < u.length; T++) {
                    var E = Math.min(
                      1,
                      Math.max(
                        0,
                        v / h +
                          ("number" == typeof l[T] ? l[T] : T / u.length) * x,
                      ),
                    );
                    ((E = Number(E.toFixed(5))), r.addColorStop(E, u[T]));
                  }
                }
              } else {
                r = this.context.createLinearGradient(s, h / 2, a + s, h / 2);
                for (var O = u.length + 1, R = 1, p = 0; p < u.length; p++) {
                  var A = void 0;
                  ((A = "number" == typeof l[p] ? l[p] : R / O),
                    r.addColorStop(A, u[p]),
                    R++);
                }
              }
              return r;
            }),
            (i.prototype.destroy = function (e) {
              ("boolean" == typeof e && (e = { children: e }),
                (e = Object.assign({}, ey, e)),
                t.prototype.destroy.call(this, e),
                this._ownCanvas && (this.canvas.height = this.canvas.width = 0),
                (this.context = null),
                (this.canvas = null),
                (this._style = null));
            }),
            Object.defineProperty(i.prototype, "width", {
              get: function () {
                return (
                  this.updateText(!0),
                  Math.abs(this.scale.x) * this._texture.orig.width
                );
              },
              set: function (t) {
                this.updateText(!0);
                var e = (0, L._S)(this.scale.x) || 1;
                ((this.scale.x = (e * t) / this._texture.orig.width),
                  (this._width = t));
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(i.prototype, "height", {
              get: function () {
                return (
                  this.updateText(!0),
                  Math.abs(this.scale.y) * this._texture.orig.height
                );
              },
              set: function (t) {
                this.updateText(!0);
                var e = (0, L._S)(this.scale.y) || 1;
                ((this.scale.y = (e * t) / this._texture.orig.height),
                  (this._height = t));
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(i.prototype, "style", {
              get: function () {
                return this._style;
              },
              set: function (t) {
                ((t = t || {}) instanceof ec
                  ? (this._style = t)
                  : (this._style = new ec(t)),
                  (this.localStyleID = -1),
                  (this.dirty = !0));
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(i.prototype, "text", {
              get: function () {
                return this._text;
              },
              set: function (t) {
                ((t = String(null == t ? "" : t)),
                  this._text !== t && ((this._text = t), (this.dirty = !0)));
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(i.prototype, "resolution", {
              get: function () {
                return this._resolution;
              },
              set: function (t) {
                ((this._autoResolution = !1),
                  this._resolution !== t &&
                    ((this._resolution = t), (this.dirty = !0)));
              },
              enumerable: !1,
              configurable: !0,
            }),
            (i.nextLineHeightBehavior = !1),
            (i.experimentalLetterSpacing = !1),
            i
          );
        })(ea);
      N.W0.UPLOADS_PER_FRAME = 4;
      var em = function (t, e) {
          return (em =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
            })(t, e);
        },
        eb = (function () {
          function t(t) {
            ((this.maxItemsPerFrame = t), (this.itemsLeft = 0));
          }
          return (
            (t.prototype.beginFrame = function () {
              this.itemsLeft = this.maxItemsPerFrame;
            }),
            (t.prototype.allowedToUpload = function () {
              return this.itemsLeft-- > 0;
            }),
            t
          );
        })();
      function ex(t, e) {
        var i = !1;
        if (t && t._textures && t._textures.length) {
          for (var r = 0; r < t._textures.length; r++)
            if (t._textures[r] instanceof W.gP) {
              var n = t._textures[r].baseTexture;
              -1 === e.indexOf(n) && (e.push(n), (i = !0));
            }
        }
        return i;
      }
      function eT(t, e) {
        if (t.baseTexture instanceof W.t5) {
          var i = t.baseTexture;
          return (-1 === e.indexOf(i) && e.push(i), !0);
        }
        return !1;
      }
      function eE(t, e) {
        if (t._texture && t._texture instanceof W.gP) {
          var i = t._texture.baseTexture;
          return (-1 === e.indexOf(i) && e.push(i), !0);
        }
        return !1;
      }
      function eO(t, e) {
        return e instanceof eg && (e.updateText(!0), !0);
      }
      function eR(t, e) {
        if (e instanceof ec) {
          var i = e.toFontString();
          return (ev.measureFont(i), !0);
        }
        return !1;
      }
      function eA(t, e) {
        if (t instanceof eg) {
          (-1 === e.indexOf(t.style) && e.push(t.style),
            -1 === e.indexOf(t) && e.push(t));
          var i = t._texture.baseTexture;
          return (-1 === e.indexOf(i) && e.push(i), !0);
        }
        return !1;
      }
      function eS(t, e) {
        return t instanceof ec && (-1 === e.indexOf(t) && e.push(t), !0);
      }
      function eP(t, e) {
        return (
          e instanceof W.t5 &&
          (e._glTextures[t.CONTEXT_UID] || t.texture.bind(e), !0)
        );
      }
      function eM(t, e) {
        if (!(e instanceof er)) return !1;
        var i = e.geometry;
        (e.finishPoly(), i.updateBatches());
        for (var r = i.batches, n = 0; n < r.length; n++) {
          var o = r[n].style.texture;
          o && eP(t, o.baseTexture);
        }
        return (
          i.batchable || t.geometry.bind(i, e._resolveDirectShader(t)),
          !0
        );
      }
      function eD(t, e) {
        return t instanceof er && (e.push(t), !0);
      }
      var eI = (function (t) {
        function e() {
          this.constructor = i;
        }
        function i(e) {
          var i = t.call(this, e) || this;
          return (
            (i.uploadHookHelper = i.renderer),
            i.registerFindHook(eD),
            i.registerUploadHook(eP),
            i.registerUploadHook(eM),
            i
          );
        }
        return (
          em(i, t),
          (i.prototype =
            null === t
              ? Object.create(t)
              : ((e.prototype = t.prototype), new e())),
          (i.extension = { name: "prepare", type: W.Ag.RendererPlugin }),
          i
        );
      })(
        (function () {
          function t(t) {
            var e = this;
            ((this.limiter = new eb(N.W0.UPLOADS_PER_FRAME)),
              (this.renderer = t),
              (this.uploadHookHelper = null),
              (this.queue = []),
              (this.addHooks = []),
              (this.uploadHooks = []),
              (this.completes = []),
              (this.ticking = !1),
              (this.delayedTick = function () {
                e.queue && e.prepareItems();
              }),
              this.registerFindHook(eA),
              this.registerFindHook(eS),
              this.registerFindHook(ex),
              this.registerFindHook(eT),
              this.registerFindHook(eE),
              this.registerUploadHook(eO),
              this.registerUploadHook(eR));
          }
          return (
            (t.prototype.upload = function (t, e) {
              var i = this;
              return (
                "function" == typeof t && ((e = t), (t = null)),
                e &&
                  (0, L.t6)(
                    "6.5.0",
                    "BasePrepare.upload callback is deprecated, use the return Promise instead.",
                  ),
                new Promise(function (r) {
                  t && i.add(t);
                  var n = function () {
                    (null == e || e(), r());
                  };
                  i.queue.length
                    ? (i.completes.push(n),
                      i.ticking ||
                        ((i.ticking = !0),
                        V.Rv.system.addOnce(i.tick, i, V.dQ.UTILITY)))
                    : n();
                })
              );
            }),
            (t.prototype.tick = function () {
              setTimeout(this.delayedTick, 0);
            }),
            (t.prototype.prepareItems = function () {
              for (
                this.limiter.beginFrame();
                this.queue.length && this.limiter.allowedToUpload();
              ) {
                var t = this.queue[0],
                  e = !1;
                if (t && !t._destroyed) {
                  for (var i = 0, r = this.uploadHooks.length; i < r; i++)
                    if (this.uploadHooks[i](this.uploadHookHelper, t)) {
                      (this.queue.shift(), (e = !0));
                      break;
                    }
                }
                e || this.queue.shift();
              }
              if (this.queue.length)
                V.Rv.system.addOnce(this.tick, this, V.dQ.UTILITY);
              else {
                this.ticking = !1;
                var n = this.completes.slice(0);
                this.completes.length = 0;
                for (var i = 0, r = n.length; i < r; i++) n[i]();
              }
            }),
            (t.prototype.registerFindHook = function (t) {
              return (t && this.addHooks.push(t), this);
            }),
            (t.prototype.registerUploadHook = function (t) {
              return (t && this.uploadHooks.push(t), this);
            }),
            (t.prototype.add = function (t) {
              for (
                var e = 0, i = this.addHooks.length;
                e < i && !this.addHooks[e](t, this.queue);
                e++
              );
              if (t instanceof Y)
                for (var e = t.children.length - 1; e >= 0; e--)
                  this.add(t.children[e]);
              return this;
            }),
            (t.prototype.destroy = function () {
              (this.ticking && V.Rv.system.remove(this.tick, this),
                (this.ticking = !1),
                (this.addHooks = null),
                (this.uploadHooks = null),
                (this.renderer = null),
                (this.completes = null),
                (this.queue = null),
                (this.limiter = null),
                (this.uploadHookHelper = null));
            }),
            t
          );
        })(),
      );
      !(function () {
        function t(t) {
          ((this.maxMilliseconds = t), (this.frameStart = 0));
        }
        ((t.prototype.beginFrame = function () {
          this.frameStart = Date.now();
        }),
          (t.prototype.allowedToUpload = function () {
            return Date.now() - this.frameStart < this.maxMilliseconds;
          }));
      })();
      var ew = (function () {
          function t(t, e, i) {
            (void 0 === i && (i = null),
              (this.linkedSheets = []),
              (this._texture = t instanceof W.gP ? t : null),
              (this.baseTexture =
                t instanceof W.t5 ? t : this._texture.baseTexture),
              (this.textures = {}),
              (this.animations = {}),
              (this.data = e));
            var r = this.baseTexture.resource;
            ((this.resolution = this._updateResolution(
              i || (r ? r.url : null),
            )),
              (this._frames = this.data.frames),
              (this._frameKeys = Object.keys(this._frames)),
              (this._batchIndex = 0),
              (this._callback = null));
          }
          return (
            (t.prototype._updateResolution = function (t) {
              void 0 === t && (t = null);
              var e = this.data.meta.scale,
                i = (0, L.v5)(t, null);
              return (
                null === i && (i = void 0 !== e ? parseFloat(e) : 1),
                1 !== i && this.baseTexture.setResolution(i),
                i
              );
            }),
            (t.prototype.parse = function (e) {
              var i = this;
              return (
                e &&
                  (0, L.t6)(
                    "6.5.0",
                    "Spritesheet.parse callback is deprecated, use the return Promise instead.",
                  ),
                new Promise(function (r) {
                  ((i._callback = function (t) {
                    (null == e || e(t), r(t));
                  }),
                    (i._batchIndex = 0),
                    i._frameKeys.length <= t.BATCH_SIZE
                      ? (i._processFrames(0),
                        i._processAnimations(),
                        i._parseComplete())
                      : i._nextBatch());
                })
              );
            }),
            (t.prototype._processFrames = function (e) {
              for (
                var i = e, r = t.BATCH_SIZE;
                i - e < r && i < this._frameKeys.length;
              ) {
                var n = this._frameKeys[i],
                  o = this._frames[n],
                  s = o.frame;
                if (s) {
                  var a = null,
                    h = null,
                    u =
                      !1 !== o.trimmed && o.sourceSize ? o.sourceSize : o.frame,
                    l = new F.M_(
                      0,
                      0,
                      Math.floor(u.w) / this.resolution,
                      Math.floor(u.h) / this.resolution,
                    );
                  ((a = o.rotated
                    ? new F.M_(
                        Math.floor(s.x) / this.resolution,
                        Math.floor(s.y) / this.resolution,
                        Math.floor(s.h) / this.resolution,
                        Math.floor(s.w) / this.resolution,
                      )
                    : new F.M_(
                        Math.floor(s.x) / this.resolution,
                        Math.floor(s.y) / this.resolution,
                        Math.floor(s.w) / this.resolution,
                        Math.floor(s.h) / this.resolution,
                      )),
                    !1 !== o.trimmed &&
                      o.spriteSourceSize &&
                      (h = new F.M_(
                        Math.floor(o.spriteSourceSize.x) / this.resolution,
                        Math.floor(o.spriteSourceSize.y) / this.resolution,
                        Math.floor(s.w) / this.resolution,
                        Math.floor(s.h) / this.resolution,
                      )),
                    (this.textures[n] = new W.gP(
                      this.baseTexture,
                      a,
                      l,
                      h,
                      2 * !!o.rotated,
                      o.anchor,
                    )),
                    W.gP.addToCache(this.textures[n], n));
                }
                i++;
              }
            }),
            (t.prototype._processAnimations = function () {
              var t = this.data.animations || {};
              for (var e in t) {
                this.animations[e] = [];
                for (var i = 0; i < t[e].length; i++) {
                  var r = t[e][i];
                  this.animations[e].push(this.textures[r]);
                }
              }
            }),
            (t.prototype._parseComplete = function () {
              var t = this._callback;
              ((this._callback = null),
                (this._batchIndex = 0),
                t.call(this, this.textures));
            }),
            (t.prototype._nextBatch = function () {
              var e = this;
              (this._processFrames(this._batchIndex * t.BATCH_SIZE),
                this._batchIndex++,
                setTimeout(function () {
                  e._batchIndex * t.BATCH_SIZE < e._frameKeys.length
                    ? e._nextBatch()
                    : (e._processAnimations(), e._parseComplete());
                }, 0));
            }),
            (t.prototype.destroy = function (t) {
              var e;
              for (var i in (void 0 === t && (t = !1), this.textures))
                this.textures[i].destroy();
              ((this._frames = null),
                (this._frameKeys = null),
                (this.data = null),
                (this.textures = null),
                t &&
                  (null == (e = this._texture) || e.destroy(),
                  this.baseTexture.destroy()),
                (this._texture = null),
                (this.baseTexture = null),
                (this.linkedSheets = []));
            }),
            (t.BATCH_SIZE = 1e3),
            t
          );
        })(),
        eC = (function () {
          function t() {}
          return (
            (t.use = function (e, i) {
              var r,
                n,
                o = this,
                s = e.name + "_image";
              if (
                !e.data ||
                e.type !== tc.TYPE.JSON ||
                !e.data.frames ||
                o.resources[s]
              )
                return void i();
              var a =
                null == (n = null == (r = e.data) ? void 0 : r.meta)
                  ? void 0
                  : n.related_multi_packs;
              if (Array.isArray(a))
                for (var h = 0; h < a.length; h++)
                  !(function (t) {
                    if ("string" != typeof t) return;
                    var i = t.replace(".json", ""),
                      r = L.OZ.resolve(e.url.replace(o.baseUrl, ""), t);
                    if (
                      !(
                        o.resources[i] ||
                        Object.values(o.resources).some(function (t) {
                          return L.OZ.format(L.OZ.parse(t.url)) === r;
                        })
                      )
                    ) {
                      var n = {
                        crossOrigin: e.crossOrigin,
                        loadType: tc.LOAD_TYPE.XHR,
                        xhrType: tc.XHR_RESPONSE_TYPE.JSON,
                        parentResource: e,
                        metadata: e.metadata,
                      };
                      o.add(i, r, n);
                    }
                  })(a[h]);
              var u = {
                  crossOrigin: e.crossOrigin,
                  metadata: e.metadata.imageMetadata,
                  parentResource: e,
                },
                l = t.getResourcePath(e, o.baseUrl);
              o.add(s, l, u, function (t) {
                if (t.error) return void i(t.error);
                var r = new ew(t.texture, e.data, e.url);
                r.parse().then(function () {
                  ((e.spritesheet = r), (e.textures = r.textures), i());
                });
              });
            }),
            (t.getResourcePath = function (t, e) {
              return t.isDataUrl
                ? t.data.meta.image
                : L.OZ.resolve(t.url.replace(e, ""), t.data.meta.image);
            }),
            (t.extension = W.Ag.Loader),
            t
          );
        })(),
        eL = function (t, e) {
          return (eL =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
            })(t, e);
        };
      function eN(t, e) {
        function i() {
          this.constructor = t;
        }
        (eL(t, e),
          (t.prototype =
            null === e
              ? Object.create(e)
              : ((i.prototype = e.prototype), new i())));
      }
      var eF = new F.bR();
      !(function (t) {
        function e(e, i, r) {
          (void 0 === i && (i = 100), void 0 === r && (r = 100));
          var n = t.call(this, e) || this;
          return (
            (n.tileTransform = new F.dL()),
            (n._width = i),
            (n._height = r),
            (n.uvMatrix = n.texture.uvMatrix || new W.NW(e)),
            (n.pluginName = "tilingSprite"),
            (n.uvRespectAnchor = !1),
            n
          );
        }
        (eN(e, t),
          Object.defineProperty(e.prototype, "clampMargin", {
            get: function () {
              return this.uvMatrix.clampMargin;
            },
            set: function (t) {
              ((this.uvMatrix.clampMargin = t), this.uvMatrix.update(!0));
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "tileScale", {
            get: function () {
              return this.tileTransform.scale;
            },
            set: function (t) {
              this.tileTransform.scale.copyFrom(t);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "tilePosition", {
            get: function () {
              return this.tileTransform.position;
            },
            set: function (t) {
              this.tileTransform.position.copyFrom(t);
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype._onTextureUpdate = function () {
            (this.uvMatrix && (this.uvMatrix.texture = this._texture),
              (this._cachedTint = 0xffffff));
          }),
          (e.prototype._render = function (t) {
            var e = this._texture;
            e &&
              e.valid &&
              (this.tileTransform.updateLocalTransform(),
              this.uvMatrix.update(),
              t.batch.setObjectRenderer(t.plugins[this.pluginName]),
              t.plugins[this.pluginName].render(this));
          }),
          (e.prototype._calculateBounds = function () {
            var t = -(this._width * this._anchor._x),
              e = -(this._height * this._anchor._y),
              i = this._width * (1 - this._anchor._x),
              r = this._height * (1 - this._anchor._y);
            this._bounds.addFrame(this.transform, t, e, i, r);
          }),
          (e.prototype.getLocalBounds = function (e) {
            return 0 === this.children.length
              ? ((this._bounds.minX = -(this._width * this._anchor._x)),
                (this._bounds.minY = -(this._height * this._anchor._y)),
                (this._bounds.maxX = this._width * (1 - this._anchor._x)),
                (this._bounds.maxY = this._height * (1 - this._anchor._y)),
                e ||
                  (this._localBoundsRect ||
                    (this._localBoundsRect = new F.M_()),
                  (e = this._localBoundsRect)),
                this._bounds.getRectangle(e))
              : t.prototype.getLocalBounds.call(this, e);
          }),
          (e.prototype.containsPoint = function (t) {
            this.worldTransform.applyInverse(t, eF);
            var e = this._width,
              i = this._height,
              r = -e * this.anchor._x;
            if (eF.x >= r && eF.x < r + e) {
              var n = -i * this.anchor._y;
              if (eF.y >= n && eF.y < n + i) return !0;
            }
            return !1;
          }),
          (e.prototype.destroy = function (e) {
            (t.prototype.destroy.call(this, e),
              (this.tileTransform = null),
              (this.uvMatrix = null));
          }),
          (e.from = function (t, i) {
            return new e(
              t instanceof W.gP ? t : W.gP.from(t, i),
              i.width,
              i.height,
            );
          }),
          Object.defineProperty(e.prototype, "width", {
            get: function () {
              return this._width;
            },
            set: function (t) {
              this._width = t;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "height", {
            get: function () {
              return this._height;
            },
            set: function (t) {
              this._height = t;
            },
            enumerable: !1,
            configurable: !0,
          }));
      })(ea);
      var eG =
          "#version 100\n#define SHADER_NAME Tiling-Sprite-100\n\nprecision lowp float;\n\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTransform;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;\n}\n",
        eB = new F.uq(),
        eX = (function (t) {
          function e(e) {
            var i = t.call(this, e) || this;
            return (
              e.runners.contextChange.add(i),
              (i.quad = new W.X1()),
              (i.state = W.Uw.for2d()),
              i
            );
          }
          return (
            eN(e, t),
            (e.prototype.contextChange = function () {
              var t = this.renderer,
                e = { globals: t.globalUniforms };
              ((this.simpleShader = W.Mt.from(
                eG,
                "#version 100\n#define SHADER_NAME Tiling-Sprite-Simple-100\n\nprecision lowp float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 uColor;\n\nvoid main(void)\n{\n    vec4 texSample = texture2D(uSampler, vTextureCoord);\n    gl_FragColor = texSample * uColor;\n}\n",
                e,
              )),
                (this.shader =
                  t.context.webGLVersion > 1
                    ? W.Mt.from(
                        "#version 300 es\n#define SHADER_NAME Tiling-Sprite-300\n\nprecision lowp float;\n\nin vec2 aVertexPosition;\nin vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTransform;\n\nout vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;\n}\n",
                        "#version 300 es\n#define SHADER_NAME Tiling-Sprite-100\n\nprecision lowp float;\n\nin vec2 vTextureCoord;\n\nout vec4 fragmentColor;\n\nuniform sampler2D uSampler;\nuniform vec4 uColor;\nuniform mat3 uMapCoord;\nuniform vec4 uClampFrame;\nuniform vec2 uClampOffset;\n\nvoid main(void)\n{\n    vec2 coord = vTextureCoord + ceil(uClampOffset - vTextureCoord);\n    coord = (uMapCoord * vec3(coord, 1.0)).xy;\n    vec2 unclamped = coord;\n    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);\n\n    vec4 texSample = texture(uSampler, coord, unclamped == coord ? 0.0f : -32.0f);// lod-bias very negative to force lod 0\n\n    fragmentColor = texSample * uColor;\n}\n",
                        e,
                      )
                    : W.Mt.from(
                        eG,
                        "#version 100\n#ifdef GL_EXT_shader_texture_lod\n    #extension GL_EXT_shader_texture_lod : enable\n#endif\n#define SHADER_NAME Tiling-Sprite-100\n\nprecision lowp float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 uColor;\nuniform mat3 uMapCoord;\nuniform vec4 uClampFrame;\nuniform vec2 uClampOffset;\n\nvoid main(void)\n{\n    vec2 coord = vTextureCoord + ceil(uClampOffset - vTextureCoord);\n    coord = (uMapCoord * vec3(coord, 1.0)).xy;\n    vec2 unclamped = coord;\n    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);\n\n    #ifdef GL_EXT_shader_texture_lod\n        vec4 texSample = unclamped == coord\n            ? texture2D(uSampler, coord) \n            : texture2DLodEXT(uSampler, coord, 0);\n    #else\n        vec4 texSample = texture2D(uSampler, coord);\n    #endif\n\n    gl_FragColor = texSample * uColor;\n}\n",
                        e,
                      )));
            }),
            (e.prototype.render = function (t) {
              var e = this.renderer,
                i = this.quad,
                r = i.vertices;
              ((r[0] = r[6] = -(t._width * t.anchor.x)),
                (r[1] = r[3] = -(t._height * t.anchor.y)),
                (r[2] = r[4] = t._width * (1 - t.anchor.x)),
                (r[5] = r[7] = t._height * (1 - t.anchor.y)));
              var n = t.uvRespectAnchor ? t.anchor.x : 0,
                o = t.uvRespectAnchor ? t.anchor.y : 0;
              (((r = i.uvs)[0] = r[6] = -n),
                (r[1] = r[3] = -o),
                (r[2] = r[4] = 1 - n),
                (r[5] = r[7] = 1 - o),
                i.invalidate());
              var s = t._texture,
                a = s.baseTexture,
                h = a.alphaMode > 0,
                u = t.tileTransform.localTransform,
                l = t.uvMatrix,
                c =
                  a.isPowerOfTwo &&
                  s.frame.width === a.width &&
                  s.frame.height === a.height;
              c &&
                (a._glTextures[e.CONTEXT_UID]
                  ? (c = a.wrapMode !== G.uR.CLAMP)
                  : a.wrapMode === G.uR.CLAMP && (a.wrapMode = G.uR.REPEAT));
              var p = c ? this.simpleShader : this.shader,
                d = s.width,
                f = s.height,
                _ = t._width,
                v = t._height;
              (eB.set(
                (u.a * d) / _,
                (u.b * d) / v,
                (u.c * f) / _,
                (u.d * f) / v,
                u.tx / _,
                u.ty / v,
              ),
                eB.invert(),
                c
                  ? eB.prepend(l.mapCoord)
                  : ((p.uniforms.uMapCoord = l.mapCoord.toArray(!0)),
                    (p.uniforms.uClampFrame = l.uClampFrame),
                    (p.uniforms.uClampOffset = l.uClampOffset)),
                (p.uniforms.uTransform = eB.toArray(!0)),
                (p.uniforms.uColor = (0, L.Uf)(
                  t.tint,
                  t.worldAlpha,
                  p.uniforms.uColor,
                  h,
                )),
                (p.uniforms.translationMatrix =
                  t.transform.worldTransform.toArray(!0)),
                (p.uniforms.uSampler = s),
                e.shader.bind(p),
                e.geometry.bind(i),
                (this.state.blendMode = (0, L.Xk)(t.blendMode, h)),
                e.state.set(this.state),
                e.geometry.draw(this.renderer.gl.TRIANGLES, 6, 0));
            }),
            (e.extension = { name: "tilingSprite", type: W.Ag.RendererPlugin }),
            e
          );
        })(W.Pt),
        eU = function (t, e) {
          return (eU =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
            })(t, e);
        };
      function ek(t, e) {
        function i() {
          this.constructor = t;
        }
        (eU(t, e),
          (t.prototype =
            null === e
              ? Object.create(e)
              : ((i.prototype = e.prototype), new i())));
      }
      var eH = (function () {
          function t(t, e) {
            ((this.uvBuffer = t),
              (this.uvMatrix = e),
              (this.data = null),
              (this._bufferUpdateId = -1),
              (this._textureUpdateId = -1),
              (this._updateID = 0));
          }
          return (
            (t.prototype.update = function (t) {
              if (
                t ||
                this._bufferUpdateId !== this.uvBuffer._updateID ||
                this._textureUpdateId !== this.uvMatrix._updateID
              ) {
                ((this._bufferUpdateId = this.uvBuffer._updateID),
                  (this._textureUpdateId = this.uvMatrix._updateID));
                var e = this.uvBuffer.data;
                ((this.data && this.data.length === e.length) ||
                  (this.data = new Float32Array(e.length)),
                  this.uvMatrix.multiplyUvs(e, this.data),
                  this._updateID++);
              }
            }),
            t
          );
        })(),
        ej = new F.bR(),
        eY = new F.tS(),
        eW = (function (t) {
          function e(e, i, r, n) {
            void 0 === n && (n = G._4.TRIANGLES);
            var o = t.call(this) || this;
            return (
              (o.geometry = e),
              (o.shader = i),
              (o.state = r || W.Uw.for2d()),
              (o.drawMode = n),
              (o.start = 0),
              (o.size = 0),
              (o.uvs = null),
              (o.indices = null),
              (o.vertexData = new Float32Array(1)),
              (o.vertexDirty = -1),
              (o._transformID = -1),
              (o._roundPixels = N.W0.ROUND_PIXELS),
              (o.batchUvs = null),
              o
            );
          }
          return (
            ek(e, t),
            Object.defineProperty(e.prototype, "geometry", {
              get: function () {
                return this._geometry;
              },
              set: function (t) {
                this._geometry !== t &&
                  (this._geometry &&
                    (this._geometry.refCount--,
                    0 === this._geometry.refCount && this._geometry.dispose()),
                  (this._geometry = t),
                  this._geometry && this._geometry.refCount++,
                  (this.vertexDirty = -1));
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "uvBuffer", {
              get: function () {
                return this.geometry.buffers[1];
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "verticesBuffer", {
              get: function () {
                return this.geometry.buffers[0];
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "material", {
              get: function () {
                return this.shader;
              },
              set: function (t) {
                this.shader = t;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "blendMode", {
              get: function () {
                return this.state.blendMode;
              },
              set: function (t) {
                this.state.blendMode = t;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "roundPixels", {
              get: function () {
                return this._roundPixels;
              },
              set: function (t) {
                (this._roundPixels !== t && (this._transformID = -1),
                  (this._roundPixels = t));
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "tint", {
              get: function () {
                return "tint" in this.shader ? this.shader.tint : null;
              },
              set: function (t) {
                this.shader.tint = t;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "texture", {
              get: function () {
                return "texture" in this.shader ? this.shader.texture : null;
              },
              set: function (t) {
                this.shader.texture = t;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype._render = function (t) {
              var i = this.geometry.buffers[0].data;
              this.shader.batchable &&
              this.drawMode === G._4.TRIANGLES &&
              i.length < 2 * e.BATCHABLE_SIZE
                ? this._renderToBatch(t)
                : this._renderDefault(t);
            }),
            (e.prototype._renderDefault = function (t) {
              var e = this.shader;
              ((e.alpha = this.worldAlpha),
                e.update && e.update(),
                t.batch.flush(),
                (e.uniforms.translationMatrix =
                  this.transform.worldTransform.toArray(!0)),
                t.shader.bind(e),
                t.state.set(this.state),
                t.geometry.bind(this.geometry, e),
                t.geometry.draw(
                  this.drawMode,
                  this.size,
                  this.start,
                  this.geometry.instanceCount,
                ));
            }),
            (e.prototype._renderToBatch = function (t) {
              var e = this.geometry,
                i = this.shader;
              (i.uvMatrix && (i.uvMatrix.update(), this.calculateUvs()),
                this.calculateVertices(),
                (this.indices = e.indexBuffer.data),
                (this._tintRGB = i._tintRGB),
                (this._texture = i.texture));
              var r = this.material.pluginName;
              (t.batch.setObjectRenderer(t.plugins[r]),
                t.plugins[r].render(this));
            }),
            (e.prototype.calculateVertices = function () {
              var t = this.geometry.buffers[0],
                e = t.data,
                i = t._updateID;
              if (
                i !== this.vertexDirty ||
                this._transformID !== this.transform._worldID
              ) {
                ((this._transformID = this.transform._worldID),
                  this.vertexData.length !== e.length &&
                    (this.vertexData = new Float32Array(e.length)));
                for (
                  var r = this.transform.worldTransform,
                    n = r.a,
                    o = r.b,
                    s = r.c,
                    a = r.d,
                    h = r.tx,
                    u = r.ty,
                    l = this.vertexData,
                    c = 0;
                  c < l.length / 2;
                  c++
                ) {
                  var p = e[2 * c],
                    d = e[2 * c + 1];
                  ((l[2 * c] = n * p + s * d + h),
                    (l[2 * c + 1] = o * p + a * d + u));
                }
                if (this._roundPixels)
                  for (var f = N.W0.RESOLUTION, c = 0; c < l.length; ++c)
                    l[c] = Math.round(((l[c] * f) | 0) / f);
                this.vertexDirty = i;
              }
            }),
            (e.prototype.calculateUvs = function () {
              var t = this.geometry.buffers[1],
                e = this.shader;
              e.uvMatrix.isSimple
                ? (this.uvs = t.data)
                : (this.batchUvs || (this.batchUvs = new eH(t, e.uvMatrix)),
                  this.batchUvs.update(),
                  (this.uvs = this.batchUvs.data));
            }),
            (e.prototype._calculateBounds = function () {
              (this.calculateVertices(),
                this._bounds.addVertexData(
                  this.vertexData,
                  0,
                  this.vertexData.length,
                ));
            }),
            (e.prototype.containsPoint = function (t) {
              if (!this.getBounds().contains(t.x, t.y)) return !1;
              this.worldTransform.applyInverse(t, ej);
              for (
                var e = this.geometry.getBuffer("aVertexPosition").data,
                  i = eY.points,
                  r = this.geometry.getIndex().data,
                  n = r.length,
                  o = 4 === this.drawMode ? 3 : 1,
                  s = 0;
                s + 2 < n;
                s += o
              ) {
                var a = 2 * r[s],
                  h = 2 * r[s + 1],
                  u = 2 * r[s + 2];
                if (
                  ((i[0] = e[a]),
                  (i[1] = e[a + 1]),
                  (i[2] = e[h]),
                  (i[3] = e[h + 1]),
                  (i[4] = e[u]),
                  (i[5] = e[u + 1]),
                  eY.contains(ej.x, ej.y))
                )
                  return !0;
              }
              return !1;
            }),
            (e.prototype.destroy = function (e) {
              (t.prototype.destroy.call(this, e),
                this._cachedTexture &&
                  (this._cachedTexture.destroy(), (this._cachedTexture = null)),
                (this.geometry = null),
                (this.shader = null),
                (this.state = null),
                (this.uvs = null),
                (this.indices = null),
                (this.vertexData = null));
            }),
            (e.BATCHABLE_SIZE = 100),
            e
          );
        })(Y),
        ez = (function (t) {
          function e(e, i) {
            var r = this,
              n = {
                uSampler: e,
                alpha: 1,
                uTextureMatrix: F.uq.IDENTITY,
                uColor: new Float32Array([1, 1, 1, 1]),
              };
            return (
              (i = Object.assign(
                { tint: 0xffffff, alpha: 1, pluginName: "batch" },
                i,
              )).uniforms && Object.assign(n, i.uniforms),
              ((r =
                t.call(
                  this,
                  i.program ||
                    W.BP.from(
                      "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTextureMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTextureMatrix * vec3(aTextureCoord, 1.0)).xy;\n}\n",
                      "varying vec2 vTextureCoord;\nuniform vec4 uColor;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    gl_FragColor = texture2D(uSampler, vTextureCoord) * uColor;\n}\n",
                    ),
                  n,
                ) || this)._colorDirty = !1),
              (r.uvMatrix = new W.NW(e)),
              (r.batchable = void 0 === i.program),
              (r.pluginName = i.pluginName),
              (r.tint = i.tint),
              (r.alpha = i.alpha),
              r
            );
          }
          return (
            ek(e, t),
            Object.defineProperty(e.prototype, "texture", {
              get: function () {
                return this.uniforms.uSampler;
              },
              set: function (t) {
                this.uniforms.uSampler !== t &&
                  (!this.uniforms.uSampler.baseTexture.alphaMode !=
                    !t.baseTexture.alphaMode && (this._colorDirty = !0),
                  (this.uniforms.uSampler = t),
                  (this.uvMatrix.texture = t));
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "alpha", {
              get: function () {
                return this._alpha;
              },
              set: function (t) {
                t !== this._alpha &&
                  ((this._alpha = t), (this._colorDirty = !0));
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "tint", {
              get: function () {
                return this._tint;
              },
              set: function (t) {
                t !== this._tint &&
                  ((this._tint = t),
                  (this._tintRGB = (t >> 16) + (65280 & t) + ((255 & t) << 16)),
                  (this._colorDirty = !0));
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.update = function () {
              if (this._colorDirty) {
                this._colorDirty = !1;
                var t = this.texture.baseTexture;
                (0, L.Uf)(
                  this._tint,
                  this._alpha,
                  this.uniforms.uColor,
                  t.alphaMode,
                );
              }
              this.uvMatrix.update() &&
                (this.uniforms.uTextureMatrix = this.uvMatrix.mapCoord);
            }),
            e
          );
        })(W.Mt),
        eV = (function (t) {
          function e(e, i, r) {
            var n = t.call(this) || this,
              o = new W.hp(e),
              s = new W.hp(i, !0),
              a = new W.hp(r, !0, !0);
            return (
              n
                .addAttribute("aVertexPosition", o, 2, !1, G.QE.FLOAT)
                .addAttribute("aTextureCoord", s, 2, !1, G.QE.FLOAT)
                .addIndex(a),
              (n._updateId = -1),
              n
            );
          }
          return (
            ek(e, t),
            Object.defineProperty(e.prototype, "vertexDirtyId", {
              get: function () {
                return this.buffers[0]._updateID;
              },
              enumerable: !1,
              configurable: !0,
            }),
            e
          );
        })(W.V2),
        eq = function (t, e) {
          return (eq =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
            })(t, e);
        },
        eZ = function () {
          ((this.info = []),
            (this.common = []),
            (this.page = []),
            (this.char = []),
            (this.kerning = []),
            (this.distanceField = []));
        },
        eQ = (function () {
          function t() {}
          return (
            (t.test = function (t) {
              return "string" == typeof t && 0 === t.indexOf("info face=");
            }),
            (t.parse = function (t) {
              var e = t.match(/^[a-z]+\s+.+$/gm),
                i = {
                  info: [],
                  common: [],
                  page: [],
                  char: [],
                  chars: [],
                  kerning: [],
                  kernings: [],
                  distanceField: [],
                };
              for (var r in e) {
                var n = e[r].match(/^[a-z]+/gm)[0],
                  o = e[r].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),
                  s = {};
                for (var a in o) {
                  var h = o[a].split("="),
                    u = h[0],
                    l = h[1].replace(/"/gm, ""),
                    c = parseFloat(l),
                    p = isNaN(c) ? l : c;
                  s[u] = p;
                }
                i[n].push(s);
              }
              var d = new eZ();
              return (
                i.info.forEach(function (t) {
                  return d.info.push({
                    face: t.face,
                    size: parseInt(t.size, 10),
                  });
                }),
                i.common.forEach(function (t) {
                  return d.common.push({
                    lineHeight: parseInt(t.lineHeight, 10),
                  });
                }),
                i.page.forEach(function (t) {
                  return d.page.push({ id: parseInt(t.id, 10), file: t.file });
                }),
                i.char.forEach(function (t) {
                  return d.char.push({
                    id: parseInt(t.id, 10),
                    page: parseInt(t.page, 10),
                    x: parseInt(t.x, 10),
                    y: parseInt(t.y, 10),
                    width: parseInt(t.width, 10),
                    height: parseInt(t.height, 10),
                    xoffset: parseInt(t.xoffset, 10),
                    yoffset: parseInt(t.yoffset, 10),
                    xadvance: parseInt(t.xadvance, 10),
                  });
                }),
                i.kerning.forEach(function (t) {
                  return d.kerning.push({
                    first: parseInt(t.first, 10),
                    second: parseInt(t.second, 10),
                    amount: parseInt(t.amount, 10),
                  });
                }),
                i.distanceField.forEach(function (t) {
                  return d.distanceField.push({
                    distanceRange: parseInt(t.distanceRange, 10),
                    fieldType: t.fieldType,
                  });
                }),
                d
              );
            }),
            t
          );
        })(),
        eK = (function () {
          function t() {}
          return (
            (t.test = function (t) {
              return (
                t instanceof XMLDocument &&
                t.getElementsByTagName("page").length &&
                null !== t.getElementsByTagName("info")[0].getAttribute("face")
              );
            }),
            (t.parse = function (t) {
              for (
                var e = new eZ(),
                  i = t.getElementsByTagName("info"),
                  r = t.getElementsByTagName("common"),
                  n = t.getElementsByTagName("page"),
                  o = t.getElementsByTagName("char"),
                  s = t.getElementsByTagName("kerning"),
                  a = t.getElementsByTagName("distanceField"),
                  h = 0;
                h < i.length;
                h++
              )
                e.info.push({
                  face: i[h].getAttribute("face"),
                  size: parseInt(i[h].getAttribute("size"), 10),
                });
              for (var h = 0; h < r.length; h++)
                e.common.push({
                  lineHeight: parseInt(r[h].getAttribute("lineHeight"), 10),
                });
              for (var h = 0; h < n.length; h++)
                e.page.push({
                  id: parseInt(n[h].getAttribute("id"), 10) || 0,
                  file: n[h].getAttribute("file"),
                });
              for (var h = 0; h < o.length; h++) {
                var u = o[h];
                e.char.push({
                  id: parseInt(u.getAttribute("id"), 10),
                  page: parseInt(u.getAttribute("page"), 10) || 0,
                  x: parseInt(u.getAttribute("x"), 10),
                  y: parseInt(u.getAttribute("y"), 10),
                  width: parseInt(u.getAttribute("width"), 10),
                  height: parseInt(u.getAttribute("height"), 10),
                  xoffset: parseInt(u.getAttribute("xoffset"), 10),
                  yoffset: parseInt(u.getAttribute("yoffset"), 10),
                  xadvance: parseInt(u.getAttribute("xadvance"), 10),
                });
              }
              for (var h = 0; h < s.length; h++)
                e.kerning.push({
                  first: parseInt(s[h].getAttribute("first"), 10),
                  second: parseInt(s[h].getAttribute("second"), 10),
                  amount: parseInt(s[h].getAttribute("amount"), 10),
                });
              for (var h = 0; h < a.length; h++)
                e.distanceField.push({
                  fieldType: a[h].getAttribute("fieldType"),
                  distanceRange: parseInt(
                    a[h].getAttribute("distanceRange"),
                    10,
                  ),
                });
              return e;
            }),
            t
          );
        })(),
        eJ = (function () {
          function t() {}
          return (
            (t.test = function (t) {
              if ("string" == typeof t && t.indexOf("<font>") > -1) {
                var e = new globalThis.DOMParser().parseFromString(
                  t,
                  "text/xml",
                );
                return eK.test(e);
              }
              return !1;
            }),
            (t.parse = function (t) {
              var e = new globalThis.DOMParser().parseFromString(t, "text/xml");
              return eK.parse(e);
            }),
            t
          );
        })(),
        e$ = [eQ, eK, eJ];
      function e0(t) {
        for (var e = 0; e < e$.length; e++) if (e$[e].test(t)) return e$[e];
        return null;
      }
      function e1(t) {
        return Array.from ? Array.from(t) : t.split("");
      }
      function e2(t) {
        return t.codePointAt ? t.codePointAt(0) : t.charCodeAt(0);
      }
      var e3 = (function () {
          function t(t, e, i) {
            var r,
              n,
              o = t.info[0],
              s = t.common[0],
              a = t.page[0],
              h = t.distanceField[0],
              u = (0, L.v5)(a.file),
              l = {};
            ((this._ownsTextures = i),
              (this.font = o.face),
              (this.size = o.size),
              (this.lineHeight = s.lineHeight / u),
              (this.chars = {}),
              (this.pageTextures = l));
            for (var c = 0; c < t.page.length; c++) {
              var p = t.page[c],
                d = p.id,
                f = p.file;
              ((l[d] = e instanceof Array ? e[c] : e[f]),
                (null == h ? void 0 : h.fieldType) &&
                  "none" !== h.fieldType &&
                  ((l[d].baseTexture.alphaMode = G.Gk.NO_PREMULTIPLIED_ALPHA),
                  (l[d].baseTexture.mipmap = G.E8.OFF)));
            }
            for (var c = 0; c < t.char.length; c++) {
              var _ = t.char[c],
                d = _.id,
                v = _.page,
                y = t.char[c],
                g = y.x,
                m = y.y,
                b = y.width,
                x = y.height,
                T = y.xoffset,
                E = y.yoffset,
                O = y.xadvance;
              ((g /= u),
                (m /= u),
                (b /= u),
                (x /= u),
                (T /= u),
                (E /= u),
                (O /= u));
              var R = new F.M_(
                g + l[v].frame.x / u,
                m + l[v].frame.y / u,
                b,
                x,
              );
              this.chars[d] = {
                xOffset: T,
                yOffset: E,
                xAdvance: O,
                kerning: {},
                texture: new W.gP(l[v].baseTexture, R),
                page: v,
              };
            }
            for (var c = 0; c < t.kerning.length; c++) {
              var A = t.kerning[c],
                S = A.first,
                P = A.second,
                M = A.amount;
              ((S /= u),
                (P /= u),
                (M /= u),
                this.chars[P] && (this.chars[P].kerning[S] = M));
            }
            ((this.distanceFieldRange = null == h ? void 0 : h.distanceRange),
              (this.distanceFieldType =
                null !=
                (n =
                  null == (r = null == h ? void 0 : h.fieldType)
                    ? void 0
                    : r.toLowerCase())
                  ? n
                  : "none"));
          }
          return (
            (t.prototype.destroy = function () {
              for (var t in this.chars)
                (this.chars[t].texture.destroy(),
                  (this.chars[t].texture = null));
              for (var t in this.pageTextures)
                (this._ownsTextures && this.pageTextures[t].destroy(!0),
                  (this.pageTextures[t] = null));
              ((this.chars = null), (this.pageTextures = null));
            }),
            (t.install = function (e, i, r) {
              if (e instanceof eZ) n = e;
              else {
                var n,
                  o = e0(e);
                if (!o) throw Error("Unrecognized data format for font.");
                n = o.parse(e);
              }
              i instanceof W.gP && (i = [i]);
              var s = new t(n, i, r);
              return ((t.available[s.font] = s), s);
            }),
            (t.uninstall = function (e) {
              var i = t.available[e];
              if (!i) throw Error("No font found named '" + e + "'");
              (i.destroy(), delete t.available[e]);
            }),
            (t.from = function (e, i, r) {
              if (!e) throw Error("[BitmapFont] Property `name` is required.");
              var n,
                o,
                s,
                a = Object.assign({}, t.defaultOptions, r),
                h = a.chars,
                u = a.padding,
                l = a.resolution,
                c = a.textureWidth,
                p = a.textureHeight,
                d = (function (t) {
                  "string" == typeof t && (t = [t]);
                  for (var e = [], i = 0, r = t.length; i < r; i++) {
                    var n = t[i];
                    if (Array.isArray(n)) {
                      if (2 !== n.length)
                        throw Error(
                          "[BitmapFont]: Invalid character range length, expecting 2 got " +
                            n.length +
                            ".",
                        );
                      var o = n[0].charCodeAt(0),
                        s = n[1].charCodeAt(0);
                      if (s < o)
                        throw Error("[BitmapFont]: Invalid character range.");
                      for (var a = o; a <= s; a++)
                        e.push(String.fromCharCode(a));
                    } else e.push.apply(e, e1(n));
                  }
                  if (0 === e.length)
                    throw Error(
                      "[BitmapFont]: Empty set when resolving characters.",
                    );
                  return e;
                })(h),
                f = i instanceof ec ? i : new ec(i),
                _ = new eZ();
              ((_.info[0] = { face: f.fontFamily, size: f.fontSize }),
                (_.common[0] = { lineHeight: f.fontSize }));
              for (var v = 0, g = 0, m = 0, b = [], x = 0; x < d.length; x++) {
                n ||
                  (((n = N.W0.ADAPTER.createCanvas()).width = c),
                  (n.height = p),
                  (o = n.getContext("2d")),
                  (s = new W.t5(n, { resolution: l })),
                  b.push(new W.gP(s)),
                  _.page.push({ id: b.length - 1, file: "" }));
                var T = d[x],
                  E = ev.measureText(T, f, !1, n),
                  O = E.width,
                  R = Math.ceil(E.height),
                  A = Math.ceil(("italic" === f.fontStyle ? 2 : 1) * O);
                if (g >= p - R * l) {
                  if (0 === g)
                    throw Error(
                      "[BitmapFont] textureHeight " +
                        p +
                        "px is too small " +
                        ("(fontFamily: '" +
                          f.fontFamily +
                          "', fontSize: " +
                          f.fontSize +
                          "px, char: '") +
                        T +
                        "')",
                    );
                  (--x,
                    (n = null),
                    (o = null),
                    (s = null),
                    (g = 0),
                    (v = 0),
                    (m = 0));
                  continue;
                }
                if (
                  ((m = Math.max(R + E.fontProperties.descent, m)),
                  A * l + v >= c)
                ) {
                  if (0 === v)
                    throw Error(
                      "[BitmapFont] textureWidth " +
                        c +
                        "px is too small " +
                        ("(fontFamily: '" +
                          f.fontFamily +
                          "', fontSize: " +
                          f.fontSize +
                          "px, char: '") +
                        T +
                        "')",
                    );
                  (--x, (g += m * l), (g = Math.ceil(g)), (v = 0), (m = 0));
                  continue;
                }
                !(function (t, e, i, r, n, o, s) {
                  var a = i.text,
                    h = i.fontProperties;
                  (e.translate(r, n), e.scale(o, o));
                  var u = s.strokeThickness / 2,
                    l = -(s.strokeThickness / 2);
                  if (
                    ((e.font = s.toFontString()),
                    (e.lineWidth = s.strokeThickness),
                    (e.textBaseline = s.textBaseline),
                    (e.lineJoin = s.lineJoin),
                    (e.miterLimit = s.miterLimit),
                    (e.fillStyle = (function (t, e, i, r, n, o) {
                      var s,
                        a = i.fill;
                      if (!Array.isArray(a)) return a;
                      if (1 === a.length) return a[0];
                      var h = i.dropShadow ? i.dropShadowDistance : 0,
                        u = i.padding || 0,
                        l = t.width / r - h - 2 * u,
                        c = t.height / r - h - 2 * u,
                        p = a.slice(),
                        d = i.fillGradientStops.slice();
                      if (!d.length)
                        for (var f = p.length + 1, _ = 1; _ < f; ++_)
                          d.push(_ / f);
                      if (
                        (p.unshift(a[0]),
                        d.unshift(0),
                        p.push(a[a.length - 1]),
                        d.push(1),
                        i.fillGradientType === y.LINEAR_VERTICAL)
                      ) {
                        s = e.createLinearGradient(l / 2, u, l / 2, c + u);
                        for (
                          var v = 0,
                            g =
                              (o.fontProperties.fontSize + i.strokeThickness) /
                              c,
                            _ = 0;
                          _ < n.length;
                          _++
                        )
                          for (
                            var m = o.lineHeight * _, b = 0;
                            b < p.length;
                            b++
                          ) {
                            var x = Math.max(
                              v,
                              m / c +
                                ("number" == typeof d[b]
                                  ? d[b]
                                  : b / p.length) *
                                  g,
                            );
                            ((x = Math.min(x, 1)),
                              s.addColorStop(x, p[b]),
                              (v = x));
                          }
                      } else {
                        s = e.createLinearGradient(u, c / 2, l + u, c / 2);
                        for (
                          var T = p.length + 1, E = 1, _ = 0;
                          _ < p.length;
                          _++
                        ) {
                          var O = void 0;
                          ((O = "number" == typeof d[_] ? d[_] : E / T),
                            s.addColorStop(O, p[_]),
                            E++);
                        }
                      }
                      return s;
                    })(t, e, s, o, [a], i)),
                    (e.strokeStyle = s.stroke),
                    s.dropShadow)
                  ) {
                    var c = s.dropShadowColor,
                      p = (0, L.xp)("number" == typeof c ? c : (0, L.f4)(c)),
                      d = s.dropShadowBlur * o,
                      f = s.dropShadowDistance * o;
                    ((e.shadowColor =
                      "rgba(" +
                      255 * p[0] +
                      "," +
                      255 * p[1] +
                      "," +
                      255 * p[2] +
                      "," +
                      s.dropShadowAlpha +
                      ")"),
                      (e.shadowBlur = d),
                      (e.shadowOffsetX = Math.cos(s.dropShadowAngle) * f),
                      (e.shadowOffsetY = Math.sin(s.dropShadowAngle) * f));
                  } else
                    ((e.shadowColor = "black"),
                      (e.shadowBlur = 0),
                      (e.shadowOffsetX = 0),
                      (e.shadowOffsetY = 0));
                  (s.stroke &&
                    s.strokeThickness &&
                    e.strokeText(a, u, l + i.lineHeight - h.descent),
                    s.fill && e.fillText(a, u, l + i.lineHeight - h.descent),
                    e.setTransform(1, 0, 0, 1, 0, 0),
                    (e.fillStyle = "rgba(0, 0, 0, 0)"));
                })(n, o, E, v, g, l, f);
                var S = e2(E.text);
                (_.char.push({
                  id: S,
                  page: b.length - 1,
                  x: v / l,
                  y: g / l,
                  width: A,
                  height: R,
                  xoffset: 0,
                  yoffset: 0,
                  xadvance: Math.ceil(
                    O -
                      (f.dropShadow ? f.dropShadowDistance : 0) -
                      (f.stroke ? f.strokeThickness : 0),
                  ),
                }),
                  (v += (A + 2 * u) * l),
                  (v = Math.ceil(v)));
              }
              if (!(null == r ? void 0 : r.skipKerning))
                for (var x = 0, P = d.length; x < P; x++)
                  for (var M = d[x], D = 0; D < P; D++) {
                    var I = d[D],
                      w = o.measureText(M).width,
                      C = o.measureText(I).width,
                      F = o.measureText(M + I).width - (w + C);
                    F &&
                      _.kerning.push({
                        first: e2(M),
                        second: e2(I),
                        amount: F,
                      });
                  }
              var G = new t(_, b, !0);
              return (
                void 0 !== t.available[e] && t.uninstall(e),
                (t.available[e] = G),
                G
              );
            }),
            (t.ALPHA = [["a", "z"], ["A", "Z"], " "]),
            (t.NUMERIC = [["0", "9"]]),
            (t.ALPHANUMERIC = [["a", "z"], ["A", "Z"], ["0", "9"], " "]),
            (t.ASCII = [[" ", "~"]]),
            (t.defaultOptions = {
              resolution: 1,
              textureWidth: 512,
              textureHeight: 512,
              padding: 4,
              chars: t.ALPHANUMERIC,
            }),
            (t.available = {}),
            t
          );
        })(),
        e5 = [],
        e4 = [],
        e8 = [];
      !(function (t) {
        function e() {
          this.constructor = i;
        }
        function i(e, r) {
          void 0 === r && (r = {});
          var n = t.call(this) || this;
          n._tint = 0xffffff;
          var o = Object.assign({}, i.styleDefaults, r),
            s = o.align,
            a = o.tint,
            h = o.maxWidth,
            u = o.letterSpacing,
            l = o.fontName,
            c = o.fontSize;
          if (!e3.available[l]) throw Error('Missing BitmapFont "' + l + '"');
          return (
            (n._activePagesMeshData = []),
            (n._textWidth = 0),
            (n._textHeight = 0),
            (n._align = s),
            (n._tint = a),
            (n._font = void 0),
            (n._fontName = l),
            (n._fontSize = c),
            (n.text = e),
            (n._maxWidth = h),
            (n._maxLineHeight = 0),
            (n._letterSpacing = u),
            (n._anchor = new F.oA(
              function () {
                n.dirty = !0;
              },
              n,
              0,
              0,
            )),
            (n._roundPixels = N.W0.ROUND_PIXELS),
            (n.dirty = !0),
            (n._resolution = N.W0.RESOLUTION),
            (n._autoResolution = !0),
            (n._textureCache = {}),
            n
          );
        }
        (eq(i, t),
          (i.prototype =
            null === t
              ? Object.create(t)
              : ((e.prototype = t.prototype), new e())),
          (i.prototype.updateText = function () {
            for (
              var t,
                e = e3.available[this._fontName],
                i = this.fontSize,
                r = i / e.size,
                n = new F.bR(),
                o = [],
                s = [],
                a = [],
                h = e1(this._text.replace(/(?:\r\n|\r)/g, "\n") || " "),
                u = (this._maxWidth * e.size) / i,
                l = "none" === e.distanceFieldType ? e5 : e4,
                c = null,
                p = 0,
                d = 0,
                f = 0,
                _ = -1,
                v = 0,
                y = 0,
                g = 0,
                m = 0,
                b = 0;
              b < h.length;
              b++
            ) {
              var x = h[b],
                T = e2(x);
              if (
                (/(?:\s)/.test(x) && ((_ = b), (v = p), m++),
                "\r" === x || "\n" === x)
              ) {
                (s.push(p),
                  a.push(-1),
                  (d = Math.max(d, p)),
                  ++f,
                  ++y,
                  (n.x = 0),
                  (n.y += e.lineHeight),
                  (c = null),
                  (m = 0));
                continue;
              }
              var E = e.chars[T];
              if (E) {
                c && E.kerning[c] && (n.x += E.kerning[c]);
                var O = e8.pop() || {
                  texture: W.gP.EMPTY,
                  line: 0,
                  charCode: 0,
                  prevSpaces: 0,
                  position: new F.bR(),
                };
                ((O.texture = E.texture),
                  (O.line = f),
                  (O.charCode = T),
                  (O.position.x = n.x + E.xOffset + this._letterSpacing / 2),
                  (O.position.y = n.y + E.yOffset),
                  (O.prevSpaces = m),
                  o.push(O),
                  (p =
                    O.position.x +
                    Math.max(E.xAdvance - E.xOffset, E.texture.orig.width)),
                  (n.x += E.xAdvance + this._letterSpacing),
                  (g = Math.max(g, E.yOffset + E.texture.height)),
                  (c = T),
                  -1 !== _ &&
                    u > 0 &&
                    n.x > u &&
                    (++y,
                    (0, L.dZ)(o, 1 + _ - y, 1 + b - _),
                    (b = _),
                    (_ = -1),
                    s.push(v),
                    a.push(o.length > 0 ? o[o.length - 1].prevSpaces : 0),
                    (d = Math.max(d, v)),
                    f++,
                    (n.x = 0),
                    (n.y += e.lineHeight),
                    (c = null),
                    (m = 0)));
              }
            }
            var R = h[h.length - 1];
            "\r" !== R &&
              "\n" !== R &&
              (/(?:\s)/.test(R) && (p = v),
              s.push(p),
              (d = Math.max(d, p)),
              a.push(-1));
            for (var A = [], b = 0; b <= f; b++) {
              var S = 0;
              ("right" === this._align
                ? (S = d - s[b])
                : "center" === this._align
                  ? (S = (d - s[b]) / 2)
                  : "justify" === this._align &&
                    (S = a[b] < 0 ? 0 : (d - s[b]) / a[b]),
                A.push(S));
            }
            var P = o.length,
              M = {},
              D = [],
              I = this._activePagesMeshData;
            l.push.apply(l, I);
            for (var b = 0; b < P; b++) {
              var w = o[b].texture,
                C = w.baseTexture.uid;
              if (!M[C]) {
                var N = l.pop();
                if (!N) {
                  var B = new eV(),
                    X = void 0,
                    U = void 0;
                  "none" === e.distanceFieldType
                    ? ((X = new ez(W.gP.EMPTY)), (U = G.B9.NORMAL))
                    : ((X = new ez(W.gP.EMPTY, {
                        program: W.BP.from(
                          "// Mesh material default fragment\r\nattribute vec2 aVertexPosition;\r\nattribute vec2 aTextureCoord;\r\n\r\nuniform mat3 projectionMatrix;\r\nuniform mat3 translationMatrix;\r\nuniform mat3 uTextureMatrix;\r\n\r\nvarying vec2 vTextureCoord;\r\n\r\nvoid main(void)\r\n{\r\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\r\n\r\n    vTextureCoord = (uTextureMatrix * vec3(aTextureCoord, 1.0)).xy;\r\n}\r\n",
                          "// Pixi texture info\r\nvarying vec2 vTextureCoord;\r\nuniform sampler2D uSampler;\r\n\r\n// Tint\r\nuniform vec4 uColor;\r\n\r\n// on 2D applications fwidth is screenScale / glyphAtlasScale * distanceFieldRange\r\nuniform float uFWidth;\r\n\r\nvoid main(void) {\r\n\r\n  // To stack MSDF and SDF we need a non-pre-multiplied-alpha texture.\r\n  vec4 texColor = texture2D(uSampler, vTextureCoord);\r\n\r\n  // MSDF\r\n  float median = texColor.r + texColor.g + texColor.b -\r\n                  min(texColor.r, min(texColor.g, texColor.b)) -\r\n                  max(texColor.r, max(texColor.g, texColor.b));\r\n  // SDF\r\n  median = min(median, texColor.a);\r\n\r\n  float screenPxDistance = uFWidth * (median - 0.5);\r\n  float alpha = clamp(screenPxDistance + 0.5, 0.0, 1.0);\r\n  if (median < 0.01) {\r\n    alpha = 0.0;\r\n  } else if (median > 0.99) {\r\n    alpha = 1.0;\r\n  }\r\n\r\n  // NPM Textures, NPM outputs\r\n  gl_FragColor = vec4(uColor.rgb, uColor.a * alpha);\r\n\r\n}\r\n",
                        ),
                        uniforms: { uFWidth: 0 },
                      })),
                      (U = G.B9.NORMAL_NPM));
                  var k = new eW(B, X);
                  ((k.blendMode = U),
                    (N = {
                      index: 0,
                      indexCount: 0,
                      vertexCount: 0,
                      uvsCount: 0,
                      total: 0,
                      mesh: k,
                      vertices: null,
                      uvs: null,
                      indices: null,
                    }));
                }
                ((N.index = 0),
                  (N.indexCount = 0),
                  (N.vertexCount = 0),
                  (N.uvsCount = 0),
                  (N.total = 0));
                var H = this._textureCache;
                ((H[C] = H[C] || new W.gP(w.baseTexture)),
                  (N.mesh.texture = H[C]),
                  (N.mesh.tint = this._tint),
                  D.push(N),
                  (M[C] = N));
              }
              M[C].total++;
            }
            for (var b = 0; b < I.length; b++)
              -1 === D.indexOf(I[b]) && this.removeChild(I[b].mesh);
            for (var b = 0; b < D.length; b++)
              D[b].mesh.parent !== this && this.addChild(D[b].mesh);
            for (var b in ((this._activePagesMeshData = D), M)) {
              var N = M[b],
                j = N.total;
              if (
                !((null == (t = N.indices) ? void 0 : t.length) > 6 * j) ||
                N.vertices.length < 2 * eW.BATCHABLE_SIZE
              )
                ((N.vertices = new Float32Array(8 * j)),
                  (N.uvs = new Float32Array(8 * j)),
                  (N.indices = new Uint16Array(6 * j)));
              else
                for (
                  var Y = N.total, z = N.vertices, V = 4 * Y * 2;
                  V < z.length;
                  V++
                )
                  z[V] = 0;
              N.mesh.size = 6 * j;
            }
            for (var b = 0; b < P; b++) {
              var x = o[b],
                q =
                  x.position.x +
                  A[x.line] * ("justify" === this._align ? x.prevSpaces : 1);
              this._roundPixels && (q = Math.round(q));
              var Z = q * r,
                Q = x.position.y * r,
                w = x.texture,
                K = M[w.baseTexture.uid],
                J = w.frame,
                $ = w._uvs,
                tt = K.index++;
              ((K.indices[6 * tt + 0] = 0 + 4 * tt),
                (K.indices[6 * tt + 1] = 1 + 4 * tt),
                (K.indices[6 * tt + 2] = 2 + 4 * tt),
                (K.indices[6 * tt + 3] = 0 + 4 * tt),
                (K.indices[6 * tt + 4] = 2 + 4 * tt),
                (K.indices[6 * tt + 5] = 3 + 4 * tt),
                (K.vertices[8 * tt + 0] = Z),
                (K.vertices[8 * tt + 1] = Q),
                (K.vertices[8 * tt + 2] = Z + J.width * r),
                (K.vertices[8 * tt + 3] = Q),
                (K.vertices[8 * tt + 4] = Z + J.width * r),
                (K.vertices[8 * tt + 5] = Q + J.height * r),
                (K.vertices[8 * tt + 6] = Z),
                (K.vertices[8 * tt + 7] = Q + J.height * r),
                (K.uvs[8 * tt + 0] = $.x0),
                (K.uvs[8 * tt + 1] = $.y0),
                (K.uvs[8 * tt + 2] = $.x1),
                (K.uvs[8 * tt + 3] = $.y1),
                (K.uvs[8 * tt + 4] = $.x2),
                (K.uvs[8 * tt + 5] = $.y2),
                (K.uvs[8 * tt + 6] = $.x3),
                (K.uvs[8 * tt + 7] = $.y3));
            }
            for (var b in ((this._textWidth = d * r),
            (this._textHeight = (n.y + e.lineHeight) * r),
            M)) {
              var N = M[b];
              if (0 !== this.anchor.x || 0 !== this.anchor.y)
                for (
                  var te = 0,
                    ti = this._textWidth * this.anchor.x,
                    tr = this._textHeight * this.anchor.y,
                    tn = 0;
                  tn < N.total;
                  tn++
                )
                  ((N.vertices[te++] -= ti),
                    (N.vertices[te++] -= tr),
                    (N.vertices[te++] -= ti),
                    (N.vertices[te++] -= tr),
                    (N.vertices[te++] -= ti),
                    (N.vertices[te++] -= tr),
                    (N.vertices[te++] -= ti),
                    (N.vertices[te++] -= tr));
              this._maxLineHeight = g * r;
              var to = N.mesh.geometry.getBuffer("aVertexPosition"),
                ts = N.mesh.geometry.getBuffer("aTextureCoord"),
                ta = N.mesh.geometry.getIndex();
              ((to.data = N.vertices),
                (ts.data = N.uvs),
                (ta.data = N.indices),
                to.update(),
                ts.update(),
                ta.update());
            }
            for (var b = 0; b < o.length; b++) e8.push(o[b]);
            ((this._font = e), (this.dirty = !1));
          }),
          (i.prototype.updateTransform = function () {
            (this.validate(), this.containerUpdateTransform());
          }),
          (i.prototype._render = function (e) {
            this._autoResolution &&
              this._resolution !== e.resolution &&
              ((this._resolution = e.resolution), (this.dirty = !0));
            var i = e3.available[this._fontName],
              r = i.distanceFieldRange,
              n = i.distanceFieldType,
              o = i.size;
            if ("none" !== n)
              for (
                var s = this.worldTransform,
                  a = s.a,
                  h = s.b,
                  u = s.c,
                  l = s.d,
                  c =
                    (Math.abs(Math.sqrt(a * a + h * h)) +
                      Math.abs(Math.sqrt(u * u + l * l))) /
                    2,
                  p = this.fontSize / o,
                  d = 0,
                  f = this._activePagesMeshData;
                d < f.length;
                d++
              )
                f[d].mesh.shader.uniforms.uFWidth =
                  c * r * p * this._resolution;
            t.prototype._render.call(this, e);
          }),
          (i.prototype.getLocalBounds = function () {
            return (this.validate(), t.prototype.getLocalBounds.call(this));
          }),
          (i.prototype.validate = function () {
            var t = e3.available[this._fontName];
            if (!t) throw Error('Missing BitmapFont "' + this._fontName + '"');
            (this._font !== t && (this.dirty = !0),
              this.dirty && this.updateText());
          }),
          Object.defineProperty(i.prototype, "tint", {
            get: function () {
              return this._tint;
            },
            set: function (t) {
              if (this._tint !== t) {
                this._tint = t;
                for (var e = 0; e < this._activePagesMeshData.length; e++)
                  this._activePagesMeshData[e].mesh.tint = t;
              }
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(i.prototype, "align", {
            get: function () {
              return this._align;
            },
            set: function (t) {
              this._align !== t && ((this._align = t), (this.dirty = !0));
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(i.prototype, "fontName", {
            get: function () {
              return this._fontName;
            },
            set: function (t) {
              if (!e3.available[t])
                throw Error('Missing BitmapFont "' + t + '"');
              this._fontName !== t && ((this._fontName = t), (this.dirty = !0));
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(i.prototype, "fontSize", {
            get: function () {
              var t;
              return null != (t = this._fontSize)
                ? t
                : e3.available[this._fontName].size;
            },
            set: function (t) {
              this._fontSize !== t && ((this._fontSize = t), (this.dirty = !0));
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(i.prototype, "anchor", {
            get: function () {
              return this._anchor;
            },
            set: function (t) {
              "number" == typeof t
                ? this._anchor.set(t)
                : this._anchor.copyFrom(t);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(i.prototype, "text", {
            get: function () {
              return this._text;
            },
            set: function (t) {
              ((t = String(null == t ? "" : t)),
                this._text !== t && ((this._text = t), (this.dirty = !0)));
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(i.prototype, "maxWidth", {
            get: function () {
              return this._maxWidth;
            },
            set: function (t) {
              this._maxWidth !== t && ((this._maxWidth = t), (this.dirty = !0));
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(i.prototype, "maxLineHeight", {
            get: function () {
              return (this.validate(), this._maxLineHeight);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(i.prototype, "textWidth", {
            get: function () {
              return (this.validate(), this._textWidth);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(i.prototype, "letterSpacing", {
            get: function () {
              return this._letterSpacing;
            },
            set: function (t) {
              this._letterSpacing !== t &&
                ((this._letterSpacing = t), (this.dirty = !0));
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(i.prototype, "roundPixels", {
            get: function () {
              return this._roundPixels;
            },
            set: function (t) {
              t !== this._roundPixels &&
                ((this._roundPixels = t), (this.dirty = !0));
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(i.prototype, "textHeight", {
            get: function () {
              return (this.validate(), this._textHeight);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(i.prototype, "resolution", {
            get: function () {
              return this._resolution;
            },
            set: function (t) {
              ((this._autoResolution = !1),
                this._resolution !== t &&
                  ((this._resolution = t), (this.dirty = !0)));
            },
            enumerable: !1,
            configurable: !0,
          }),
          (i.prototype.destroy = function (e) {
            var i = this._textureCache,
              r =
                "none" === e3.available[this._fontName].distanceFieldType
                  ? e5
                  : e4;
            r.push.apply(r, this._activePagesMeshData);
            for (var n = 0, o = this._activePagesMeshData; n < o.length; n++) {
              var s = o[n];
              this.removeChild(s.mesh);
            }
            for (var a in ((this._activePagesMeshData = []),
            r
              .filter(function (t) {
                return i[t.mesh.texture.baseTexture.uid];
              })
              .forEach(function (t) {
                t.mesh.texture = W.gP.EMPTY;
              }),
            i))
              (i[a].destroy(), delete i[a]);
            ((this._font = null),
              (this._textureCache = null),
              t.prototype.destroy.call(this, e));
          }),
          (i.styleDefaults = {
            align: "left",
            tint: 0xffffff,
            maxWidth: 0,
            letterSpacing: 0,
          }));
      })(Y);
      var e6 = (function () {
          function t() {}
          return (
            (t.add = function () {
              tc.setExtensionXhrType("fnt", tc.XHR_RESPONSE_TYPE.TEXT);
            }),
            (t.use = function (e, i) {
              var r = e0(e.data);
              if (!r) return void i();
              for (
                var n = t.getBaseUrl(this, e),
                  o = r.parse(e.data),
                  s = {},
                  a = function (t) {
                    ((s[t.metadata.pageFile] = t.texture),
                      Object.keys(s).length === o.page.length &&
                        ((e.bitmapFont = e3.install(o, s, !0)), i()));
                  },
                  h = 0;
                h < o.page.length;
                ++h
              ) {
                var u = o.page[h].file,
                  l = n + u,
                  c = !1;
                for (var p in this.resources) {
                  var d = this.resources[p];
                  if (d.url === l) {
                    ((d.metadata.pageFile = u),
                      d.texture ? a(d) : d.onAfterMiddleware.add(a),
                      (c = !0));
                    break;
                  }
                }
                if (!c) {
                  var f = {
                    crossOrigin: e.crossOrigin,
                    loadType: tc.LOAD_TYPE.IMAGE,
                    metadata: Object.assign(
                      { pageFile: u },
                      e.metadata.imageMetadata,
                    ),
                    parentResource: e,
                  };
                  this.add(l, f, a);
                }
              }
            }),
            (t.getBaseUrl = function (e, i) {
              var r = i.isDataUrl ? "" : t.dirname(i.url);
              return (
                i.isDataUrl &&
                  ("." === r && (r = ""),
                  e.baseUrl &&
                    r &&
                    "/" === e.baseUrl.charAt(e.baseUrl.length - 1) &&
                    (r += "/")),
                (r = r.replace(e.baseUrl, "")) &&
                  "/" !== r.charAt(r.length - 1) &&
                  (r += "/"),
                r
              );
            }),
            (t.dirname = function (t) {
              var e = t
                .replace(/\\/g, "/")
                .replace(/\/$/, "")
                .replace(/\/[^\/]*$/, "");
              return e === t ? "." : "" === e ? "/" : e;
            }),
            (t.extension = W.Ag.Loader),
            t
          );
        })(),
        e9 = function (t, e) {
          return (e9 =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
            })(t, e);
        },
        e7 = (function (t) {
          function e() {
            this.constructor = i;
          }
          function i(e) {
            void 0 === e && (e = 1);
            var i =
              t.call(
                this,
                W.MT,
                "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float uAlpha;\n\nvoid main(void)\n{\n   gl_FragColor = texture2D(uSampler, vTextureCoord) * uAlpha;\n}\n",
                { uAlpha: 1 },
              ) || this;
            return ((i.alpha = e), i);
          }
          return (
            e9(i, t),
            (i.prototype =
              null === t
                ? Object.create(t)
                : ((e.prototype = t.prototype), new e())),
            Object.defineProperty(i.prototype, "alpha", {
              get: function () {
                return this.uniforms.uAlpha;
              },
              set: function (t) {
                this.uniforms.uAlpha = t;
              },
              enumerable: !1,
              configurable: !0,
            }),
            i
          );
        })(W.dJ),
        it = function (t, e) {
          return (it =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
            })(t, e);
        };
      function ie(t, e) {
        function i() {
          this.constructor = t;
        }
        (it(t, e),
          (t.prototype =
            null === e
              ? Object.create(e)
              : ((i.prototype = e.prototype), new i())));
      }
      var ii = {
          5: [0.153388, 0.221461, 0.250301],
          7: [0.071303, 0.131514, 0.189879, 0.214607],
          9: [0.028532, 0.067234, 0.124009, 0.179044, 0.20236],
          11: [0.0093, 0.028002, 0.065984, 0.121703, 0.175713, 0.198596],
          13: [
            0.002406, 0.009255, 0.027867, 0.065666, 0.121117, 0.174868,
            0.197641,
          ],
          15: [
            489e-6, 0.002403, 0.009246, 0.02784, 0.065602, 0.120999, 0.174697,
            0.197448,
          ],
        },
        ir = (function (t) {
          function e(e, i, r, n, o) {
            (void 0 === i && (i = 8),
              void 0 === r && (r = 4),
              void 0 === n && (n = N.W0.FILTER_RESOLUTION),
              void 0 === o && (o = 5));
            var s = this,
              a = (function (t, e) {
                var i,
                  r = Math.ceil(t / 2),
                  n =
                    "\n    attribute vec2 aVertexPosition;\n\n    uniform mat3 projectionMatrix;\n\n    uniform float strength;\n\n    varying vec2 vBlurTexCoords[%size%];\n\n    uniform vec4 inputSize;\n    uniform vec4 outputFrame;\n\n    vec4 filterVertexPosition( void )\n    {\n        vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n        return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n    }\n\n    vec2 filterTextureCoord( void )\n    {\n        return aVertexPosition * (outputFrame.zw * inputSize.zw);\n    }\n\n    void main(void)\n    {\n        gl_Position = filterVertexPosition();\n\n        vec2 textureCoord = filterTextureCoord();\n        %blur%\n    }",
                  o = "";
                i = e
                  ? "vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * strength, 0.0);"
                  : "vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * strength);";
                for (var s = 0; s < t; s++) {
                  var a = i.replace("%index%", s.toString());
                  ((o += a = a.replace("%sampleIndex%", s - (r - 1) + ".0")),
                    (o += "\n"));
                }
                return (n = n.replace("%blur%", o)).replace(
                  "%size%",
                  t.toString(),
                );
              })(o, e),
              h = (function (t) {
                for (
                  var e,
                    i = ii[t],
                    r = i.length,
                    n =
                      "varying vec2 vBlurTexCoords[%size%];\nuniform sampler2D uSampler;\nvoid main(void)\n{\n    gl_FragColor = vec4(0.0);\n    %blur%\n}",
                    o = "",
                    s = 0;
                  s < t;
                  s++
                ) {
                  var a =
                    "gl_FragColor += texture2D(uSampler, vBlurTexCoords[%index%]) * %value%;".replace(
                      "%index%",
                      s.toString(),
                    );
                  ((e = s),
                    s >= r && (e = t - s - 1),
                    (o += a = a.replace("%value%", i[e].toString())),
                    (o += "\n"));
                }
                return (n = n.replace("%blur%", o)).replace(
                  "%size%",
                  t.toString(),
                );
              })(o);
            return (
              ((s = t.call(this, a, h) || this).horizontal = e),
              (s.resolution = n),
              (s._quality = 0),
              (s.quality = r),
              (s.blur = i),
              s
            );
          }
          return (
            ie(e, t),
            (e.prototype.apply = function (t, e, i, r) {
              if (
                (i
                  ? this.horizontal
                    ? (this.uniforms.strength =
                        (1 / i.width) * (i.width / e.width))
                    : (this.uniforms.strength =
                        (1 / i.height) * (i.height / e.height))
                  : this.horizontal
                    ? (this.uniforms.strength =
                        (1 / t.renderer.width) * (t.renderer.width / e.width))
                    : (this.uniforms.strength =
                        (1 / t.renderer.height) *
                        (t.renderer.height / e.height)),
                (this.uniforms.strength *= this.strength),
                (this.uniforms.strength /= this.passes),
                1 === this.passes)
              )
                t.applyFilter(this, e, i, r);
              else {
                var n = t.getFilterTexture(),
                  o = t.renderer,
                  s = e,
                  a = n;
                ((this.state.blend = !1),
                  t.applyFilter(this, s, a, G.fr.CLEAR));
                for (var h = 1; h < this.passes - 1; h++) {
                  (t.bindAndClear(s, G.fr.BLIT), (this.uniforms.uSampler = a));
                  var u = a;
                  ((a = s), (s = u), o.shader.bind(this), o.geometry.draw(5));
                }
                ((this.state.blend = !0),
                  t.applyFilter(this, a, i, r),
                  t.returnFilterTexture(n));
              }
            }),
            Object.defineProperty(e.prototype, "blur", {
              get: function () {
                return this.strength;
              },
              set: function (t) {
                ((this.padding = 1 + 2 * Math.abs(t)), (this.strength = t));
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "quality", {
              get: function () {
                return this._quality;
              },
              set: function (t) {
                ((this._quality = t), (this.passes = t));
              },
              enumerable: !1,
              configurable: !0,
            }),
            e
          );
        })(W.dJ),
        io = (function (t) {
          function e(e, i, r, n) {
            (void 0 === e && (e = 8),
              void 0 === i && (i = 4),
              void 0 === r && (r = N.W0.FILTER_RESOLUTION),
              void 0 === n && (n = 5));
            var o = t.call(this) || this;
            return (
              (o.blurXFilter = new ir(!0, e, i, r, n)),
              (o.blurYFilter = new ir(!1, e, i, r, n)),
              (o.resolution = r),
              (o.quality = i),
              (o.blur = e),
              (o.repeatEdgePixels = !1),
              o
            );
          }
          return (
            ie(e, t),
            (e.prototype.apply = function (t, e, i, r) {
              var n = Math.abs(this.blurXFilter.strength),
                o = Math.abs(this.blurYFilter.strength);
              if (n && o) {
                var s = t.getFilterTexture();
                (this.blurXFilter.apply(t, e, s, G.fr.CLEAR),
                  this.blurYFilter.apply(t, s, i, r),
                  t.returnFilterTexture(s));
              } else
                o
                  ? this.blurYFilter.apply(t, e, i, r)
                  : this.blurXFilter.apply(t, e, i, r);
            }),
            (e.prototype.updatePadding = function () {
              this._repeatEdgePixels
                ? (this.padding = 0)
                : (this.padding =
                    2 *
                    Math.max(
                      Math.abs(this.blurXFilter.strength),
                      Math.abs(this.blurYFilter.strength),
                    ));
            }),
            Object.defineProperty(e.prototype, "blur", {
              get: function () {
                return this.blurXFilter.blur;
              },
              set: function (t) {
                ((this.blurXFilter.blur = this.blurYFilter.blur = t),
                  this.updatePadding());
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "quality", {
              get: function () {
                return this.blurXFilter.quality;
              },
              set: function (t) {
                this.blurXFilter.quality = this.blurYFilter.quality = t;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "blurX", {
              get: function () {
                return this.blurXFilter.blur;
              },
              set: function (t) {
                ((this.blurXFilter.blur = t), this.updatePadding());
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "blurY", {
              get: function () {
                return this.blurYFilter.blur;
              },
              set: function (t) {
                ((this.blurYFilter.blur = t), this.updatePadding());
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "blendMode", {
              get: function () {
                return this.blurYFilter.blendMode;
              },
              set: function (t) {
                this.blurYFilter.blendMode = t;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "repeatEdgePixels", {
              get: function () {
                return this._repeatEdgePixels;
              },
              set: function (t) {
                ((this._repeatEdgePixels = t), this.updatePadding());
              },
              enumerable: !1,
              configurable: !0,
            }),
            e
          );
        })(W.dJ),
        is = function (t, e) {
          return (is =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
            })(t, e);
        },
        ia = (function (t) {
          function e() {
            this.constructor = i;
          }
          function i() {
            var e = this,
              i = {
                m: new Float32Array([
                  1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0,
                ]),
                uAlpha: 1,
              };
            return (
              ((e =
                t.call(
                  this,
                  W.Eo,
                  "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform float m[20];\nuniform float uAlpha;\n\nvoid main(void)\n{\n    vec4 c = texture2D(uSampler, vTextureCoord);\n\n    if (uAlpha == 0.0) {\n        gl_FragColor = c;\n        return;\n    }\n\n    // Un-premultiply alpha before applying the color matrix. See issue #3539.\n    if (c.a > 0.0) {\n      c.rgb /= c.a;\n    }\n\n    vec4 result;\n\n    result.r = (m[0] * c.r);\n        result.r += (m[1] * c.g);\n        result.r += (m[2] * c.b);\n        result.r += (m[3] * c.a);\n        result.r += m[4];\n\n    result.g = (m[5] * c.r);\n        result.g += (m[6] * c.g);\n        result.g += (m[7] * c.b);\n        result.g += (m[8] * c.a);\n        result.g += m[9];\n\n    result.b = (m[10] * c.r);\n       result.b += (m[11] * c.g);\n       result.b += (m[12] * c.b);\n       result.b += (m[13] * c.a);\n       result.b += m[14];\n\n    result.a = (m[15] * c.r);\n       result.a += (m[16] * c.g);\n       result.a += (m[17] * c.b);\n       result.a += (m[18] * c.a);\n       result.a += m[19];\n\n    vec3 rgb = mix(c.rgb, result.rgb, uAlpha);\n\n    // Premultiply alpha again.\n    rgb *= result.a;\n\n    gl_FragColor = vec4(rgb, result.a);\n}\n",
                  i,
                ) || this).alpha = 1),
              e
            );
          }
          return (
            is(i, t),
            (i.prototype =
              null === t
                ? Object.create(t)
                : ((e.prototype = t.prototype), new e())),
            (i.prototype._loadMatrix = function (t, e) {
              void 0 === e && (e = !1);
              var i = t;
              (e &&
                (this._multiply(i, this.uniforms.m, t),
                (i = this._colorMatrix(i))),
                (this.uniforms.m = i));
            }),
            (i.prototype._multiply = function (t, e, i) {
              return (
                (t[0] =
                  e[0] * i[0] + e[1] * i[5] + e[2] * i[10] + e[3] * i[15]),
                (t[1] =
                  e[0] * i[1] + e[1] * i[6] + e[2] * i[11] + e[3] * i[16]),
                (t[2] =
                  e[0] * i[2] + e[1] * i[7] + e[2] * i[12] + e[3] * i[17]),
                (t[3] =
                  e[0] * i[3] + e[1] * i[8] + e[2] * i[13] + e[3] * i[18]),
                (t[4] =
                  e[0] * i[4] +
                  e[1] * i[9] +
                  e[2] * i[14] +
                  e[3] * i[19] +
                  e[4]),
                (t[5] =
                  e[5] * i[0] + e[6] * i[5] + e[7] * i[10] + e[8] * i[15]),
                (t[6] =
                  e[5] * i[1] + e[6] * i[6] + e[7] * i[11] + e[8] * i[16]),
                (t[7] =
                  e[5] * i[2] + e[6] * i[7] + e[7] * i[12] + e[8] * i[17]),
                (t[8] =
                  e[5] * i[3] + e[6] * i[8] + e[7] * i[13] + e[8] * i[18]),
                (t[9] =
                  e[5] * i[4] +
                  e[6] * i[9] +
                  e[7] * i[14] +
                  e[8] * i[19] +
                  e[9]),
                (t[10] =
                  e[10] * i[0] + e[11] * i[5] + e[12] * i[10] + e[13] * i[15]),
                (t[11] =
                  e[10] * i[1] + e[11] * i[6] + e[12] * i[11] + e[13] * i[16]),
                (t[12] =
                  e[10] * i[2] + e[11] * i[7] + e[12] * i[12] + e[13] * i[17]),
                (t[13] =
                  e[10] * i[3] + e[11] * i[8] + e[12] * i[13] + e[13] * i[18]),
                (t[14] =
                  e[10] * i[4] +
                  e[11] * i[9] +
                  e[12] * i[14] +
                  e[13] * i[19] +
                  e[14]),
                (t[15] =
                  e[15] * i[0] + e[16] * i[5] + e[17] * i[10] + e[18] * i[15]),
                (t[16] =
                  e[15] * i[1] + e[16] * i[6] + e[17] * i[11] + e[18] * i[16]),
                (t[17] =
                  e[15] * i[2] + e[16] * i[7] + e[17] * i[12] + e[18] * i[17]),
                (t[18] =
                  e[15] * i[3] + e[16] * i[8] + e[17] * i[13] + e[18] * i[18]),
                (t[19] =
                  e[15] * i[4] +
                  e[16] * i[9] +
                  e[17] * i[14] +
                  e[18] * i[19] +
                  e[19]),
                t
              );
            }),
            (i.prototype._colorMatrix = function (t) {
              var e = new Float32Array(t);
              return (
                (e[4] /= 255),
                (e[9] /= 255),
                (e[14] /= 255),
                (e[19] /= 255),
                e
              );
            }),
            (i.prototype.brightness = function (t, e) {
              this._loadMatrix(
                [t, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, 1, 0],
                e,
              );
            }),
            (i.prototype.tint = function (t, e) {
              this._loadMatrix(
                [
                  ((t >> 16) & 255) / 255,
                  0,
                  0,
                  0,
                  0,
                  0,
                  ((t >> 8) & 255) / 255,
                  0,
                  0,
                  0,
                  0,
                  0,
                  (255 & t) / 255,
                  0,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                ],
                e,
              );
            }),
            (i.prototype.greyscale = function (t, e) {
              this._loadMatrix(
                [t, t, t, 0, 0, t, t, t, 0, 0, t, t, t, 0, 0, 0, 0, 0, 1, 0],
                e,
              );
            }),
            (i.prototype.blackAndWhite = function (t) {
              this._loadMatrix(
                [
                  0.3, 0.6, 0.1, 0, 0, 0.3, 0.6, 0.1, 0, 0, 0.3, 0.6, 0.1, 0, 0,
                  0, 0, 0, 1, 0,
                ],
                t,
              );
            }),
            (i.prototype.hue = function (t, e) {
              var i = Math.cos((t = ((t || 0) / 180) * Math.PI)),
                r = Math.sin(t),
                n = 1 / 3,
                o = (0, Math.sqrt)(1 / 3);
              this._loadMatrix(
                [
                  i + (1 - i) * n,
                  n * (1 - i) - o * r,
                  n * (1 - i) + o * r,
                  0,
                  0,
                  n * (1 - i) + o * r,
                  i + n * (1 - i),
                  n * (1 - i) - o * r,
                  0,
                  0,
                  n * (1 - i) - o * r,
                  n * (1 - i) + o * r,
                  i + n * (1 - i),
                  0,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                ],
                e,
              );
            }),
            (i.prototype.contrast = function (t, e) {
              var i = (t || 0) + 1,
                r = -0.5 * (i - 1);
              this._loadMatrix(
                [i, 0, 0, 0, r, 0, i, 0, 0, r, 0, 0, i, 0, r, 0, 0, 0, 1, 0],
                e,
              );
            }),
            (i.prototype.saturate = function (t, e) {
              void 0 === t && (t = 0);
              var i = (2 * t) / 3 + 1,
                r = -((i - 1) * 0.5);
              this._loadMatrix(
                [i, r, r, 0, 0, r, i, r, 0, 0, r, r, i, 0, 0, 0, 0, 0, 1, 0],
                e,
              );
            }),
            (i.prototype.desaturate = function () {
              this.saturate(-1);
            }),
            (i.prototype.negative = function (t) {
              this._loadMatrix(
                [-1, 0, 0, 1, 0, 0, -1, 0, 1, 0, 0, 0, -1, 1, 0, 0, 0, 0, 1, 0],
                t,
              );
            }),
            (i.prototype.sepia = function (t) {
              this._loadMatrix(
                [
                  0.393, 0.7689999, 0.18899999, 0, 0, 0.349, 0.6859999,
                  0.16799999, 0, 0, 0.272, 0.5339999, 0.13099999, 0, 0, 0, 0, 0,
                  1, 0,
                ],
                t,
              );
            }),
            (i.prototype.technicolor = function (t) {
              this._loadMatrix(
                [
                  1.9125277891456083, -0.8545344976951645, -0.09155508482755585,
                  0, 11.793603434377337, -0.3087833385928097,
                  1.7658908555458428, -0.10601743074722245, 0,
                  -70.35205161461398, -0.231103377548616, -0.7501899197440212,
                  1.847597816108189, 0, 30.950940869491138, 0, 0, 0, 1, 0,
                ],
                t,
              );
            }),
            (i.prototype.polaroid = function (t) {
              this._loadMatrix(
                [
                  1.438, -0.062, -0.062, 0, 0, -0.122, 1.378, -0.122, 0, 0,
                  -0.016, -0.016, 1.483, 0, 0, 0, 0, 0, 1, 0,
                ],
                t,
              );
            }),
            (i.prototype.toBGR = function (t) {
              this._loadMatrix(
                [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0],
                t,
              );
            }),
            (i.prototype.kodachrome = function (t) {
              this._loadMatrix(
                [
                  1.1285582396593525, -0.3967382283601348, -0.03992559172921793,
                  0, 63.72958762196502, -0.16404339962244616,
                  1.0835251566291304, -0.05498805115633132, 0,
                  24.732407896706203, -0.16786010706155763, -0.5603416277695248,
                  1.6014850761964943, 0, 35.62982807460946, 0, 0, 0, 1, 0,
                ],
                t,
              );
            }),
            (i.prototype.browni = function (t) {
              this._loadMatrix(
                [
                  0.5997023498159715, 0.34553243048391263, -0.2708298674538042,
                  0, 47.43192855600873, -0.037703249837783157,
                  0.8609577587992641, 0.15059552388459913, 0,
                  -36.96841498319127, 0.24113635128153335, -0.07441037908422492,
                  0.44972182064877153, 0, -7.562075277591283, 0, 0, 0, 1, 0,
                ],
                t,
              );
            }),
            (i.prototype.vintage = function (t) {
              this._loadMatrix(
                [
                  0.6279345635605994, 0.3202183420819367, -0.03965408211312453,
                  0, 9.651285835294123, 0.02578397704808868, 0.6441188644374771,
                  0.03259127616149294, 0, 7.462829176470591, 0.0466055556782719,
                  -0.0851232987247891, 0.5241648018700465, 0, 5.159190588235296,
                  0, 0, 0, 1, 0,
                ],
                t,
              );
            }),
            (i.prototype.colorTone = function (t, e, i, r, n) {
              var o = (((i = i || 0xffe580) >> 16) & 255) / 255,
                s = ((i >> 8) & 255) / 255,
                a = (255 & i) / 255,
                h = (((r = r || 3375104) >> 16) & 255) / 255,
                u = ((r >> 8) & 255) / 255,
                l = (255 & r) / 255,
                c = [
                  0.3,
                  0.59,
                  0.11,
                  0,
                  0,
                  o,
                  s,
                  a,
                  (t = t || 0.2),
                  0,
                  h,
                  u,
                  l,
                  (e = e || 0.15),
                  0,
                  o - h,
                  s - u,
                  a - l,
                  0,
                  0,
                ];
              this._loadMatrix(c, n);
            }),
            (i.prototype.night = function (t, e) {
              var i = [
                -2 * (t = t || 0.1),
                -t,
                0,
                0,
                0,
                -t,
                0,
                t,
                0,
                0,
                0,
                t,
                2 * t,
                0,
                0,
                0,
                0,
                0,
                1,
                0,
              ];
              this._loadMatrix(i, e);
            }),
            (i.prototype.predator = function (t, e) {
              this._loadMatrix(
                [
                  11.224130630493164 * t,
                  -4.794486999511719 * t,
                  -2.8746118545532227 * t,
                  0 * t,
                  0.40342438220977783 * t,
                  -3.6330697536468506 * t,
                  9.193157196044922 * t,
                  -2.951810836791992 * t,
                  0 * t,
                  -1.316135048866272 * t,
                  -3.2184197902679443 * t,
                  -4.2375030517578125 * t,
                  7.476448059082031 * t,
                  0 * t,
                  0.8044459223747253 * t,
                  0,
                  0,
                  0,
                  1,
                  0,
                ],
                e,
              );
            }),
            (i.prototype.lsd = function (t) {
              this._loadMatrix(
                [
                  2, -0.4, 0.5, 0, 0, -0.5, 2, -0.4, 0, 0, -0.4, -0.5, 3, 0, 0,
                  0, 0, 0, 1, 0,
                ],
                t,
              );
            }),
            (i.prototype.reset = function () {
              this._loadMatrix(
                [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
                !1,
              );
            }),
            Object.defineProperty(i.prototype, "matrix", {
              get: function () {
                return this.uniforms.m;
              },
              set: function (t) {
                this.uniforms.m = t;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(i.prototype, "alpha", {
              get: function () {
                return this.uniforms.uAlpha;
              },
              set: function (t) {
                this.uniforms.uAlpha = t;
              },
              enumerable: !1,
              configurable: !0,
            }),
            i
          );
        })(W.dJ);
      ia.prototype.grayscale = ia.prototype.greyscale;
      var ih = function (t, e) {
          return (ih =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
            })(t, e);
        },
        iu = (function (t) {
          function e() {
            this.constructor = i;
          }
          function i(e, i) {
            var r = this,
              n = new F.uq();
            return (
              (e.renderable = !1),
              ((r =
                t.call(
                  this,
                  "attribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\nuniform mat3 filterMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vFilterCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aVertexPosition * (outputFrame.zw * inputSize.zw);\n}\n\nvoid main(void)\n{\n	gl_Position = filterVertexPosition();\n	vTextureCoord = filterTextureCoord();\n	vFilterCoord = ( filterMatrix * vec3( vTextureCoord, 1.0)  ).xy;\n}\n",
                  "varying vec2 vFilterCoord;\nvarying vec2 vTextureCoord;\n\nuniform vec2 scale;\nuniform mat2 rotation;\nuniform sampler2D uSampler;\nuniform sampler2D mapSampler;\n\nuniform highp vec4 inputSize;\nuniform vec4 inputClamp;\n\nvoid main(void)\n{\n  vec4 map =  texture2D(mapSampler, vFilterCoord);\n\n  map -= 0.5;\n  map.xy = scale * inputSize.zw * (rotation * map.xy);\n\n  gl_FragColor = texture2D(uSampler, clamp(vec2(vTextureCoord.x + map.x, vTextureCoord.y + map.y), inputClamp.xy, inputClamp.zw));\n}\n",
                  {
                    mapSampler: e._texture,
                    filterMatrix: n,
                    scale: { x: 1, y: 1 },
                    rotation: new Float32Array([1, 0, 0, 1]),
                  },
                ) || this).maskSprite = e),
              (r.maskMatrix = n),
              null == i && (i = 20),
              (r.scale = new F.bR(i, i)),
              r
            );
          }
          return (
            ih(i, t),
            (i.prototype =
              null === t
                ? Object.create(t)
                : ((e.prototype = t.prototype), new e())),
            (i.prototype.apply = function (t, e, i, r) {
              ((this.uniforms.filterMatrix = t.calculateSpriteMatrix(
                this.maskMatrix,
                this.maskSprite,
              )),
                (this.uniforms.scale.x = this.scale.x),
                (this.uniforms.scale.y = this.scale.y));
              var n = this.maskSprite.worldTransform,
                o = Math.sqrt(n.a * n.a + n.b * n.b),
                s = Math.sqrt(n.c * n.c + n.d * n.d);
              (0 !== o &&
                0 !== s &&
                ((this.uniforms.rotation[0] = n.a / o),
                (this.uniforms.rotation[1] = n.b / o),
                (this.uniforms.rotation[2] = n.c / s),
                (this.uniforms.rotation[3] = n.d / s)),
                t.applyFilter(this, e, i, r));
            }),
            Object.defineProperty(i.prototype, "map", {
              get: function () {
                return this.uniforms.mapSampler;
              },
              set: function (t) {
                this.uniforms.mapSampler = t;
              },
              enumerable: !1,
              configurable: !0,
            }),
            i
          );
        })(W.dJ),
        il = function (t, e) {
          return (il =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
            })(t, e);
        },
        ic = (function (t) {
          function e() {
            this.constructor = i;
          }
          function i() {
            return (
              t.call(
                this,
                "\nattribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nvarying vec2 vFragCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvoid texcoords(vec2 fragCoord, vec2 inverseVP,\n               out vec2 v_rgbNW, out vec2 v_rgbNE,\n               out vec2 v_rgbSW, out vec2 v_rgbSE,\n               out vec2 v_rgbM) {\n    v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;\n    v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;\n    v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;\n    v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;\n    v_rgbM = vec2(fragCoord * inverseVP);\n}\n\nvoid main(void) {\n\n   gl_Position = filterVertexPosition();\n\n   vFragCoord = aVertexPosition * outputFrame.zw;\n\n   texcoords(vFragCoord, inputSize.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n}\n",
                'varying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nvarying vec2 vFragCoord;\nuniform sampler2D uSampler;\nuniform highp vec4 inputSize;\n\n\n/**\n Basic FXAA implementation based on the code on geeks3d.com with the\n modification that the texture2DLod stuff was removed since it\'s\n unsupported by WebGL.\n\n --\n\n From:\n https://github.com/mitsuhiko/webgl-meincraft\n\n Copyright (c) 2011 by Armin Ronacher.\n\n Some rights reserved.\n\n Redistribution and use in source and binary forms, with or without\n modification, are permitted provided that the following conditions are\n met:\n\n * Redistributions of source code must retain the above copyright\n notice, this list of conditions and the following disclaimer.\n\n * Redistributions in binary form must reproduce the above\n copyright notice, this list of conditions and the following\n disclaimer in the documentation and/or other materials provided\n with the distribution.\n\n * The names of the contributors may not be used to endorse or\n promote products derived from this software without specific\n prior written permission.\n\n THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS\n "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT\n LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR\n A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT\n OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,\n SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT\n LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,\n DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY\n THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\n OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n */\n\n#ifndef FXAA_REDUCE_MIN\n#define FXAA_REDUCE_MIN   (1.0/ 128.0)\n#endif\n#ifndef FXAA_REDUCE_MUL\n#define FXAA_REDUCE_MUL   (1.0 / 8.0)\n#endif\n#ifndef FXAA_SPAN_MAX\n#define FXAA_SPAN_MAX     8.0\n#endif\n\n//optimized version for mobile, where dependent\n//texture reads can be a bottleneck\nvec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 inverseVP,\n          vec2 v_rgbNW, vec2 v_rgbNE,\n          vec2 v_rgbSW, vec2 v_rgbSE,\n          vec2 v_rgbM) {\n    vec4 color;\n    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;\n    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;\n    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;\n    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;\n    vec4 texColor = texture2D(tex, v_rgbM);\n    vec3 rgbM  = texColor.xyz;\n    vec3 luma = vec3(0.299, 0.587, 0.114);\n    float lumaNW = dot(rgbNW, luma);\n    float lumaNE = dot(rgbNE, luma);\n    float lumaSW = dot(rgbSW, luma);\n    float lumaSE = dot(rgbSE, luma);\n    float lumaM  = dot(rgbM,  luma);\n    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));\n    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));\n\n    mediump vec2 dir;\n    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));\n    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));\n\n    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *\n                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);\n\n    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);\n    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),\n              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),\n                  dir * rcpDirMin)) * inverseVP;\n\n    vec3 rgbA = 0.5 * (\n                       texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +\n                       texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);\n    vec3 rgbB = rgbA * 0.5 + 0.25 * (\n                                     texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +\n                                     texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);\n\n    float lumaB = dot(rgbB, luma);\n    if ((lumaB < lumaMin) || (lumaB > lumaMax))\n        color = vec4(rgbA, texColor.a);\n    else\n        color = vec4(rgbB, texColor.a);\n    return color;\n}\n\nvoid main() {\n\n      vec4 color;\n\n      color = fxaa(uSampler, vFragCoord, inputSize.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n\n      gl_FragColor = color;\n}\n',
              ) || this
            );
          }
          return (
            il(i, t),
            (i.prototype =
              null === t
                ? Object.create(t)
                : ((e.prototype = t.prototype), new e())),
            i
          );
        })(W.dJ),
        ip = function (t, e) {
          return (ip =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
            })(t, e);
        },
        id = (function (t) {
          function e() {
            this.constructor = i;
          }
          function i(e, i) {
            (void 0 === e && (e = 0.5), void 0 === i && (i = Math.random()));
            var r =
              t.call(
                this,
                W.Eo,
                "precision highp float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform float uNoise;\nuniform float uSeed;\nuniform sampler2D uSampler;\n\nfloat rand(vec2 co)\n{\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main()\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n    float randomValue = rand(gl_FragCoord.xy * uSeed);\n    float diff = (randomValue - 0.5) * uNoise;\n\n    // Un-premultiply alpha before applying the color matrix. See issue #3539.\n    if (color.a > 0.0) {\n        color.rgb /= color.a;\n    }\n\n    color.r += diff;\n    color.g += diff;\n    color.b += diff;\n\n    // Premultiply alpha again.\n    color.rgb *= color.a;\n\n    gl_FragColor = color;\n}\n",
                { uNoise: 0, uSeed: 0 },
              ) || this;
            return ((r.noise = e), (r.seed = i), r);
          }
          return (
            ip(i, t),
            (i.prototype =
              null === t
                ? Object.create(t)
                : ((e.prototype = t.prototype), new e())),
            Object.defineProperty(i.prototype, "noise", {
              get: function () {
                return this.uniforms.uNoise;
              },
              set: function (t) {
                this.uniforms.uNoise = t;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(i.prototype, "seed", {
              get: function () {
                return this.uniforms.uSeed;
              },
              set: function (t) {
                this.uniforms.uSeed = t;
              },
              enumerable: !1,
              configurable: !0,
            }),
            i
          );
        })(W.dJ),
        i_ = new F.uq();
      ((k.prototype._cacheAsBitmap = !1),
        (k.prototype._cacheData = null),
        (k.prototype._cacheAsBitmapResolution = null),
        (k.prototype._cacheAsBitmapMultisample = G.he.NONE));
      var iv = function () {
        ((this.textureCacheId = null),
          (this.originalRender = null),
          (this.originalRenderCanvas = null),
          (this.originalCalculateBounds = null),
          (this.originalGetLocalBounds = null),
          (this.originalUpdateTransform = null),
          (this.originalDestroy = null),
          (this.originalMask = null),
          (this.originalFilterArea = null),
          (this.originalContainsPoint = null),
          (this.sprite = null));
      };
      (Object.defineProperties(k.prototype, {
        cacheAsBitmapResolution: {
          get: function () {
            return this._cacheAsBitmapResolution;
          },
          set: function (t) {
            t !== this._cacheAsBitmapResolution &&
              ((this._cacheAsBitmapResolution = t),
              this.cacheAsBitmap &&
                ((this.cacheAsBitmap = !1), (this.cacheAsBitmap = !0)));
          },
        },
        cacheAsBitmapMultisample: {
          get: function () {
            return this._cacheAsBitmapMultisample;
          },
          set: function (t) {
            t !== this._cacheAsBitmapMultisample &&
              ((this._cacheAsBitmapMultisample = t),
              this.cacheAsBitmap &&
                ((this.cacheAsBitmap = !1), (this.cacheAsBitmap = !0)));
          },
        },
        cacheAsBitmap: {
          get: function () {
            return this._cacheAsBitmap;
          },
          set: function (t) {
            var e;
            this._cacheAsBitmap !== t &&
              ((this._cacheAsBitmap = t),
              t
                ? (this._cacheData || (this._cacheData = new iv()),
                  ((e = this._cacheData).originalRender = this.render),
                  (e.originalRenderCanvas = this.renderCanvas),
                  (e.originalUpdateTransform = this.updateTransform),
                  (e.originalCalculateBounds = this.calculateBounds),
                  (e.originalGetLocalBounds = this.getLocalBounds),
                  (e.originalDestroy = this.destroy),
                  (e.originalContainsPoint = this.containsPoint),
                  (e.originalMask = this._mask),
                  (e.originalFilterArea = this.filterArea),
                  (this.render = this._renderCached),
                  (this.renderCanvas = this._renderCachedCanvas),
                  (this.destroy = this._cacheAsBitmapDestroy))
                : ((e = this._cacheData).sprite &&
                    this._destroyCachedDisplayObject(),
                  (this.render = e.originalRender),
                  (this.renderCanvas = e.originalRenderCanvas),
                  (this.calculateBounds = e.originalCalculateBounds),
                  (this.getLocalBounds = e.originalGetLocalBounds),
                  (this.destroy = e.originalDestroy),
                  (this.updateTransform = e.originalUpdateTransform),
                  (this.containsPoint = e.originalContainsPoint),
                  (this._mask = e.originalMask),
                  (this.filterArea = e.originalFilterArea)));
          },
        },
      }),
        (k.prototype._renderCached = function (t) {
          this.visible &&
            !(this.worldAlpha <= 0) &&
            this.renderable &&
            (this._initCachedDisplayObject(t),
            (this._cacheData.sprite.transform._worldID =
              this.transform._worldID),
            (this._cacheData.sprite.worldAlpha = this.worldAlpha),
            this._cacheData.sprite._render(t));
        }),
        (k.prototype._initCachedDisplayObject = function (t) {
          if (!this._cacheData || !this._cacheData.sprite) {
            var e,
              i = this.alpha;
            ((this.alpha = 1), t.batch.flush());
            var r = this.getLocalBounds(null, !0).clone();
            if (this.filters && this.filters.length) {
              var n = this.filters[0].padding;
              r.pad(n);
            }
            r.ceil(N.W0.RESOLUTION);
            var o = t.renderTexture.current,
              s = t.renderTexture.sourceFrame.clone(),
              a = t.renderTexture.destinationFrame.clone(),
              h = t.projection.transform,
              u = W.Y7.create({
                width: r.width,
                height: r.height,
                resolution: this.cacheAsBitmapResolution || t.resolution,
                multisample:
                  null != (e = this.cacheAsBitmapMultisample)
                    ? e
                    : t.multisample,
              }),
              l = "cacheAsBitmap_" + (0, L.Ld)();
            ((this._cacheData.textureCacheId = l),
              W.t5.addToCache(u.baseTexture, l),
              W.gP.addToCache(u, l));
            var c = this.transform.localTransform
              .copyTo(i_)
              .invert()
              .translate(-r.x, -r.y);
            ((this.render = this._cacheData.originalRender),
              t.render(this, {
                renderTexture: u,
                clear: !0,
                transform: c,
                skipUpdateTransform: !1,
              }),
              t.framebuffer.blit(),
              (t.projection.transform = h),
              t.renderTexture.bind(o, s, a),
              (this.render = this._renderCached),
              (this.updateTransform = this.displayObjectUpdateTransform),
              (this.calculateBounds = this._calculateCachedBounds),
              (this.getLocalBounds = this._getCachedLocalBounds),
              (this._mask = null),
              (this.filterArea = null),
              (this.alpha = i));
            var p = new ea(u);
            ((p.transform.worldTransform = this.transform.worldTransform),
              (p.anchor.x = -(r.x / r.width)),
              (p.anchor.y = -(r.y / r.height)),
              (p.alpha = i),
              (p._bounds = this._bounds),
              (this._cacheData.sprite = p),
              (this.transform._parentID = -1),
              this.parent
                ? this.updateTransform()
                : (this.enableTempParent(),
                  this.updateTransform(),
                  this.disableTempParent(null)),
              (this.containsPoint = p.containsPoint.bind(p)));
          }
        }),
        (k.prototype._renderCachedCanvas = function (t) {
          this.visible &&
            !(this.worldAlpha <= 0) &&
            this.renderable &&
            (this._initCachedDisplayObjectCanvas(t),
            (this._cacheData.sprite.worldAlpha = this.worldAlpha),
            this._cacheData.sprite._renderCanvas(t));
        }),
        (k.prototype._initCachedDisplayObjectCanvas = function (t) {
          if (!this._cacheData || !this._cacheData.sprite) {
            var e = this.getLocalBounds(null, !0),
              i = this.alpha;
            this.alpha = 1;
            var r = t.context,
              n = t._projTransform;
            e.ceil(N.W0.RESOLUTION);
            var o = W.Y7.create({ width: e.width, height: e.height }),
              s = "cacheAsBitmap_" + (0, L.Ld)();
            ((this._cacheData.textureCacheId = s),
              W.t5.addToCache(o.baseTexture, s),
              W.gP.addToCache(o, s),
              this.transform.localTransform.copyTo(i_),
              i_.invert(),
              (i_.tx -= e.x),
              (i_.ty -= e.y),
              (this.renderCanvas = this._cacheData.originalRenderCanvas),
              t.render(this, {
                renderTexture: o,
                clear: !0,
                transform: i_,
                skipUpdateTransform: !1,
              }),
              (t.context = r),
              (t._projTransform = n),
              (this.renderCanvas = this._renderCachedCanvas),
              (this.updateTransform = this.displayObjectUpdateTransform),
              (this.calculateBounds = this._calculateCachedBounds),
              (this.getLocalBounds = this._getCachedLocalBounds),
              (this._mask = null),
              (this.filterArea = null),
              (this.alpha = i));
            var a = new ea(o);
            ((a.transform.worldTransform = this.transform.worldTransform),
              (a.anchor.x = -(e.x / e.width)),
              (a.anchor.y = -(e.y / e.height)),
              (a.alpha = i),
              (a._bounds = this._bounds),
              (this._cacheData.sprite = a),
              (this.transform._parentID = -1),
              this.parent
                ? this.updateTransform()
                : ((this.parent = t._tempDisplayObjectParent),
                  this.updateTransform(),
                  (this.parent = null)),
              (this.containsPoint = a.containsPoint.bind(a)));
          }
        }),
        (k.prototype._calculateCachedBounds = function () {
          (this._bounds.clear(),
            (this._cacheData.sprite.transform._worldID =
              this.transform._worldID),
            this._cacheData.sprite._calculateBounds(),
            (this._bounds.updateID = this._boundsID));
        }),
        (k.prototype._getCachedLocalBounds = function () {
          return this._cacheData.sprite.getLocalBounds(null);
        }),
        (k.prototype._destroyCachedDisplayObject = function () {
          (this._cacheData.sprite._texture.destroy(!0),
            (this._cacheData.sprite = null),
            W.t5.removeFromCache(this._cacheData.textureCacheId),
            W.gP.removeFromCache(this._cacheData.textureCacheId),
            (this._cacheData.textureCacheId = null));
        }),
        (k.prototype._cacheAsBitmapDestroy = function (t) {
          ((this.cacheAsBitmap = !1), this.destroy(t));
        }),
        (k.prototype.name = null),
        (Y.prototype.getChildByName = function (t, e) {
          for (var i = 0, r = this.children.length; i < r; i++)
            if (this.children[i].name === t) return this.children[i];
          if (e)
            for (var i = 0, r = this.children.length; i < r; i++) {
              var n = this.children[i];
              if (n.getChildByName) {
                var o = n.getChildByName(t, !0);
                if (o) return o;
              }
            }
          return null;
        }),
        (k.prototype.getGlobalPosition = function (t, e) {
          return (
            void 0 === t && (t = new F.bR()),
            void 0 === e && (e = !1),
            this.parent
              ? this.parent.toGlobal(this.position, t, e)
              : ((t.x = this.position.x), (t.y = this.position.y)),
            t
          );
        }));
      var iy = (function () {
          function t() {}
          return (
            (t.init = function (t) {
              var e = this;
              (Object.defineProperty(this, "resizeTo", {
                set: function (t) {
                  (globalThis.removeEventListener("resize", this.queueResize),
                    (this._resizeTo = t),
                    t &&
                      (globalThis.addEventListener("resize", this.queueResize),
                      this.resize()));
                },
                get: function () {
                  return this._resizeTo;
                },
              }),
                (this.queueResize = function () {
                  e._resizeTo &&
                    (e.cancelResize(),
                    (e._resizeId = requestAnimationFrame(function () {
                      return e.resize();
                    })));
                }),
                (this.cancelResize = function () {
                  e._resizeId &&
                    (cancelAnimationFrame(e._resizeId), (e._resizeId = null));
                }),
                (this.resize = function () {
                  if (e._resizeTo) {
                    if ((e.cancelResize(), e._resizeTo === globalThis.window))
                      ((t = globalThis.innerWidth),
                        (i = globalThis.innerHeight));
                    else {
                      var t,
                        i,
                        r = e._resizeTo,
                        n = r.clientWidth,
                        o = r.clientHeight;
                      ((t = n), (i = o));
                    }
                    e.renderer.resize(t, i);
                  }
                }),
                (this._resizeId = null),
                (this._resizeTo = null),
                (this.resizeTo = t.resizeTo || null));
            }),
            (t.destroy = function () {
              (globalThis.removeEventListener("resize", this.queueResize),
                this.cancelResize(),
                (this.cancelResize = null),
                (this.queueResize = null),
                (this.resizeTo = null),
                (this.resize = null));
            }),
            (t.extension = W.Ag.Application),
            t
          );
        })(),
        ig = (function () {
          function t(e) {
            var i = this;
            ((this.stage = new Y()),
              (e = Object.assign({ forceCanvas: !1 }, e)),
              (this.renderer = (0, W.q5)(e)),
              t._plugins.forEach(function (t) {
                t.init.call(i, e);
              }));
          }
          return (
            (t.registerPlugin = function (t) {
              ((0, L.t6)(
                "6.5.0",
                "Application.registerPlugin() is deprecated, use extensions.add()",
              ),
                W.XO.add({ type: W.Ag.Application, ref: t }));
            }),
            (t.prototype.render = function () {
              this.renderer.render(this.stage);
            }),
            Object.defineProperty(t.prototype, "view", {
              get: function () {
                return this.renderer.view;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "screen", {
              get: function () {
                return this.renderer.screen;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.destroy = function (e, i) {
              var r = this,
                n = t._plugins.slice(0);
              (n.reverse(),
                n.forEach(function (t) {
                  t.destroy.call(r);
                }),
                this.stage.destroy(i),
                (this.stage = null),
                this.renderer.destroy(e),
                (this.renderer = null));
            }),
            (t._plugins = []),
            t
          );
        })();
      (W.XO.handleByList(W.Ag.Application, ig._plugins), W.XO.add(iy));
      var im = function (t, e) {
        return (im =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
          })(t, e);
      };
      function ib(t, e) {
        function i() {
          this.constructor = t;
        }
        (im(t, e),
          (t.prototype =
            null === e
              ? Object.create(e)
              : ((i.prototype = e.prototype), new i())));
      }
      var ix = (function (t) {
          function e(e, i, r, n) {
            (void 0 === e && (e = 100),
              void 0 === i && (i = 100),
              void 0 === r && (r = 10),
              void 0 === n && (n = 10));
            var o = t.call(this) || this;
            return (
              (o.segWidth = r),
              (o.segHeight = n),
              (o.width = e),
              (o.height = i),
              o.build(),
              o
            );
          }
          return (
            ib(e, t),
            (e.prototype.build = function () {
              for (
                var t = this.segWidth * this.segHeight,
                  e = [],
                  i = [],
                  r = [],
                  n = this.segWidth - 1,
                  o = this.segHeight - 1,
                  s = this.width / n,
                  a = this.height / o,
                  h = 0;
                h < t;
                h++
              ) {
                var u = h % this.segWidth,
                  l = (h / this.segWidth) | 0;
                (e.push(u * s, l * a), i.push(u / n, l / o));
              }
              for (var c = n * o, h = 0; h < c; h++) {
                var p = h % n,
                  d = (h / n) | 0,
                  f = d * this.segWidth + p,
                  _ = d * this.segWidth + p + 1,
                  v = (d + 1) * this.segWidth + p,
                  y = (d + 1) * this.segWidth + p + 1;
                r.push(f, _, v, _, y, v);
              }
              ((this.buffers[0].data = new Float32Array(e)),
                (this.buffers[1].data = new Float32Array(i)),
                (this.indexBuffer.data = new Uint16Array(r)),
                this.buffers[0].update(),
                this.buffers[1].update(),
                this.indexBuffer.update());
            }),
            e
          );
        })(eV),
        iT = (function (t) {
          function e(e, i, r) {
            (void 0 === e && (e = 200), void 0 === r && (r = 0));
            var n =
              t.call(
                this,
                new Float32Array(4 * i.length),
                new Float32Array(4 * i.length),
                new Uint16Array((i.length - 1) * 6),
              ) || this;
            return (
              (n.points = i),
              (n._width = e),
              (n.textureScale = r),
              n.build(),
              n
            );
          }
          return (
            ib(e, t),
            Object.defineProperty(e.prototype, "width", {
              get: function () {
                return this._width;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.build = function () {
              var t = this.points;
              if (t) {
                var e = this.getBuffer("aVertexPosition"),
                  i = this.getBuffer("aTextureCoord"),
                  r = this.getIndex();
                if (!(t.length < 1)) {
                  e.data.length / 4 !== t.length &&
                    ((e.data = new Float32Array(4 * t.length)),
                    (i.data = new Float32Array(4 * t.length)),
                    (r.data = new Uint16Array((t.length - 1) * 6)));
                  var n = i.data,
                    o = r.data;
                  ((n[0] = 0), (n[1] = 0), (n[2] = 0), (n[3] = 1));
                  for (
                    var s = 0,
                      a = t[0],
                      h = this._width * this.textureScale,
                      u = t.length,
                      l = 0;
                    l < u;
                    l++
                  ) {
                    var c = 4 * l;
                    if (this.textureScale > 0) {
                      var p = a.x - t[l].x,
                        d = a.y - t[l].y,
                        f = Math.sqrt(p * p + d * d);
                      ((a = t[l]), (s += f / h));
                    } else s = l / (u - 1);
                    ((n[c] = s),
                      (n[c + 1] = 0),
                      (n[c + 2] = s),
                      (n[c + 3] = 1));
                  }
                  for (var _ = 0, l = 0; l < u - 1; l++) {
                    var c = 2 * l;
                    ((o[_++] = c),
                      (o[_++] = c + 1),
                      (o[_++] = c + 2),
                      (o[_++] = c + 2),
                      (o[_++] = c + 1),
                      (o[_++] = c + 3));
                  }
                  (i.update(), r.update(), this.updateVertices());
                }
              }
            }),
            (e.prototype.updateVertices = function () {
              var t,
                e = this.points;
              if (!(e.length < 1)) {
                for (
                  var i = e[0],
                    r = 0,
                    n = 0,
                    o = this.buffers[0].data,
                    s = e.length,
                    a = 0;
                  a < s;
                  a++
                ) {
                  var h = e[a],
                    u = 4 * a;
                  n = -((t = a < e.length - 1 ? e[a + 1] : h).x - i.x);
                  var l = Math.sqrt((r = t.y - i.y) * r + n * n),
                    c =
                      this.textureScale > 0
                        ? (this.textureScale * this._width) / 2
                        : this._width / 2;
                  ((r /= l),
                    (n /= l),
                    (r *= c),
                    (n *= c),
                    (o[u] = h.x + r),
                    (o[u + 1] = h.y + n),
                    (o[u + 2] = h.x - r),
                    (o[u + 3] = h.y - n),
                    (i = h));
                }
                this.buffers[0].update();
              }
            }),
            (e.prototype.update = function () {
              this.textureScale > 0 ? this.build() : this.updateVertices();
            }),
            e
          );
        })(eV);
      !(function (t) {
        function e(e, i, r) {
          void 0 === r && (r = 0);
          var n = this,
            o = new iT(e.height, i, r),
            s = new ez(e);
          return (
            r > 0 && (e.baseTexture.wrapMode = G.uR.REPEAT),
            ((n = t.call(this, o, s) || this).autoUpdate = !0),
            n
          );
        }
        (ib(e, t),
          (e.prototype._render = function (e) {
            var i = this.geometry;
            ((this.autoUpdate || i._width !== this.shader.texture.height) &&
              ((i._width = this.shader.texture.height), i.update()),
              t.prototype._render.call(this, e));
          }));
      })(eW);
      var iE = (function (t) {
        function e(e, i, r) {
          var n = this,
            o = new ix(e.width, e.height, i, r),
            s = new ez(W.gP.WHITE);
          return (
            ((n = t.call(this, o, s) || this).texture = e),
            (n.autoResize = !0),
            n
          );
        }
        return (
          ib(e, t),
          (e.prototype.textureUpdated = function () {
            this._textureID = this.shader.texture._updateID;
            var t = this.geometry,
              e = this.shader.texture,
              i = e.width,
              r = e.height;
            this.autoResize &&
              (t.width !== i || t.height !== r) &&
              ((t.width = this.shader.texture.width),
              (t.height = this.shader.texture.height),
              t.build());
          }),
          Object.defineProperty(e.prototype, "texture", {
            get: function () {
              return this.shader.texture;
            },
            set: function (t) {
              this.shader.texture !== t &&
                ((this.shader.texture = t),
                (this._textureID = -1),
                t.baseTexture.valid
                  ? this.textureUpdated()
                  : t.once("update", this.textureUpdated, this));
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype._render = function (e) {
            (this._textureID !== this.shader.texture._updateID &&
              this.textureUpdated(),
              t.prototype._render.call(this, e));
          }),
          (e.prototype.destroy = function (e) {
            (this.shader.texture.off("update", this.textureUpdated, this),
              t.prototype.destroy.call(this, e));
          }),
          e
        );
      })(eW);
      (!(function (t) {
        function e(e, i, r, n, o) {
          void 0 === e && (e = W.gP.EMPTY);
          var s = this,
            a = new eV(i, r, n);
          a.getBuffer("aVertexPosition").static = !1;
          var h = new ez(e);
          return (
            ((s = t.call(this, a, h, null, o) || this).autoUpdate = !0),
            s
          );
        }
        (ib(e, t),
          Object.defineProperty(e.prototype, "vertices", {
            get: function () {
              return this.geometry.getBuffer("aVertexPosition").data;
            },
            set: function (t) {
              this.geometry.getBuffer("aVertexPosition").data = t;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype._render = function (e) {
            (this.autoUpdate &&
              this.geometry.getBuffer("aVertexPosition").update(),
              t.prototype._render.call(this, e));
          }));
      })(eW),
        !(function (t) {
          function e(e, i, r, n, o) {
            (void 0 === i && (i = 10),
              void 0 === r && (r = 10),
              void 0 === n && (n = 10),
              void 0 === o && (o = 10));
            var s = t.call(this, W.gP.WHITE, 4, 4) || this;
            return (
              (s._origWidth = e.orig.width),
              (s._origHeight = e.orig.height),
              (s._width = s._origWidth),
              (s._height = s._origHeight),
              (s._leftWidth = i),
              (s._rightWidth = n),
              (s._topHeight = r),
              (s._bottomHeight = o),
              (s.texture = e),
              s
            );
          }
          (ib(e, t),
            (e.prototype.textureUpdated = function () {
              ((this._textureID = this.shader.texture._updateID),
                this._refresh());
            }),
            Object.defineProperty(e.prototype, "vertices", {
              get: function () {
                return this.geometry.getBuffer("aVertexPosition").data;
              },
              set: function (t) {
                this.geometry.getBuffer("aVertexPosition").data = t;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.updateHorizontalVertices = function () {
              var t = this.vertices,
                e = this._getMinScale();
              ((t[9] = t[11] = t[13] = t[15] = this._topHeight * e),
                (t[17] =
                  t[19] =
                  t[21] =
                  t[23] =
                    this._height - this._bottomHeight * e),
                (t[25] = t[27] = t[29] = t[31] = this._height));
            }),
            (e.prototype.updateVerticalVertices = function () {
              var t = this.vertices,
                e = this._getMinScale();
              ((t[2] = t[10] = t[18] = t[26] = this._leftWidth * e),
                (t[4] =
                  t[12] =
                  t[20] =
                  t[28] =
                    this._width - this._rightWidth * e),
                (t[6] = t[14] = t[22] = t[30] = this._width));
            }),
            (e.prototype._getMinScale = function () {
              var t = this._leftWidth + this._rightWidth,
                e = this._width > t ? 1 : this._width / t,
                i = this._topHeight + this._bottomHeight;
              return Math.min(e, this._height > i ? 1 : this._height / i);
            }),
            Object.defineProperty(e.prototype, "width", {
              get: function () {
                return this._width;
              },
              set: function (t) {
                ((this._width = t), this._refresh());
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "height", {
              get: function () {
                return this._height;
              },
              set: function (t) {
                ((this._height = t), this._refresh());
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "leftWidth", {
              get: function () {
                return this._leftWidth;
              },
              set: function (t) {
                ((this._leftWidth = t), this._refresh());
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "rightWidth", {
              get: function () {
                return this._rightWidth;
              },
              set: function (t) {
                ((this._rightWidth = t), this._refresh());
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "topHeight", {
              get: function () {
                return this._topHeight;
              },
              set: function (t) {
                ((this._topHeight = t), this._refresh());
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "bottomHeight", {
              get: function () {
                return this._bottomHeight;
              },
              set: function (t) {
                ((this._bottomHeight = t), this._refresh());
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype._refresh = function () {
              var t = this.texture,
                e = this.geometry.buffers[1].data;
              ((this._origWidth = t.orig.width),
                (this._origHeight = t.orig.height));
              var i = 1 / this._origWidth,
                r = 1 / this._origHeight;
              ((e[0] = e[8] = e[16] = e[24] = 0),
                (e[1] = e[3] = e[5] = e[7] = 0),
                (e[6] = e[14] = e[22] = e[30] = 1),
                (e[25] = e[27] = e[29] = e[31] = 1),
                (e[2] = e[10] = e[18] = e[26] = i * this._leftWidth),
                (e[4] = e[12] = e[20] = e[28] = 1 - i * this._rightWidth),
                (e[9] = e[11] = e[13] = e[15] = r * this._topHeight),
                (e[17] = e[19] = e[21] = e[23] = 1 - r * this._bottomHeight),
                this.updateHorizontalVertices(),
                this.updateVerticalVertices(),
                this.geometry.buffers[0].update(),
                this.geometry.buffers[1].update());
            }));
        })(iE),
        i(5261));
      var iO = function (t, e) {
        return (iO =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
          })(t, e);
      };
      (!(function (t) {
        function e() {
          this.constructor = i;
        }
        function i(e, i) {
          void 0 === i && (i = !0);
          var r =
            t.call(this, e[0] instanceof W.gP ? e[0] : e[0].texture) || this;
          return (
            (r._textures = null),
            (r._durations = null),
            (r._autoUpdate = i),
            (r._isConnectedToTicker = !1),
            (r.animationSpeed = 1),
            (r.loop = !0),
            (r.updateAnchor = !1),
            (r.onComplete = null),
            (r.onFrameChange = null),
            (r.onLoop = null),
            (r._currentTime = 0),
            (r._playing = !1),
            (r._previousFrame = null),
            (r.textures = e),
            r
          );
        }
        (iO(i, t),
          (i.prototype =
            null === t
              ? Object.create(t)
              : ((e.prototype = t.prototype), new e())),
          (i.prototype.stop = function () {
            this._playing &&
              ((this._playing = !1),
              this._autoUpdate &&
                this._isConnectedToTicker &&
                (V.Rv.shared.remove(this.update, this),
                (this._isConnectedToTicker = !1)));
          }),
          (i.prototype.play = function () {
            this._playing ||
              ((this._playing = !0),
              this._autoUpdate &&
                !this._isConnectedToTicker &&
                (V.Rv.shared.add(this.update, this, V.dQ.HIGH),
                (this._isConnectedToTicker = !0)));
          }),
          (i.prototype.gotoAndStop = function (t) {
            this.stop();
            var e = this.currentFrame;
            ((this._currentTime = t),
              e !== this.currentFrame && this.updateTexture());
          }),
          (i.prototype.gotoAndPlay = function (t) {
            var e = this.currentFrame;
            ((this._currentTime = t),
              e !== this.currentFrame && this.updateTexture(),
              this.play());
          }),
          (i.prototype.update = function (t) {
            if (this._playing) {
              var e = this.animationSpeed * t,
                i = this.currentFrame;
              if (null !== this._durations) {
                var r =
                  (this._currentTime % 1) * this._durations[this.currentFrame];
                for (r += (e / 60) * 1e3; r < 0; )
                  (this._currentTime--,
                    (r += this._durations[this.currentFrame]));
                var n = Math.sign(this.animationSpeed * t);
                for (
                  this._currentTime = Math.floor(this._currentTime);
                  r >= this._durations[this.currentFrame];
                )
                  ((r -= this._durations[this.currentFrame] * n),
                    (this._currentTime += n));
                this._currentTime += r / this._durations[this.currentFrame];
              } else this._currentTime += e;
              this._currentTime < 0 && !this.loop
                ? (this.gotoAndStop(0), this.onComplete && this.onComplete())
                : this._currentTime >= this._textures.length && !this.loop
                  ? (this.gotoAndStop(this._textures.length - 1),
                    this.onComplete && this.onComplete())
                  : i !== this.currentFrame &&
                    (this.loop &&
                      this.onLoop &&
                      (this.animationSpeed > 0 && this.currentFrame < i
                        ? this.onLoop()
                        : this.animationSpeed < 0 &&
                          this.currentFrame > i &&
                          this.onLoop()),
                    this.updateTexture());
            }
          }),
          (i.prototype.updateTexture = function () {
            var t = this.currentFrame;
            this._previousFrame !== t &&
              ((this._previousFrame = t),
              (this._texture = this._textures[t]),
              (this._textureID = -1),
              (this._textureTrimmedID = -1),
              (this._cachedTint = 0xffffff),
              (this.uvs = this._texture._uvs.uvsFloat32),
              this.updateAnchor &&
                this._anchor.copyFrom(this._texture.defaultAnchor),
              this.onFrameChange && this.onFrameChange(this.currentFrame));
          }),
          (i.prototype.destroy = function (e) {
            (this.stop(),
              t.prototype.destroy.call(this, e),
              (this.onComplete = null),
              (this.onFrameChange = null),
              (this.onLoop = null));
          }),
          (i.fromFrames = function (t) {
            for (var e = [], r = 0; r < t.length; ++r) e.push(W.gP.from(t[r]));
            return new i(e);
          }),
          (i.fromImages = function (t) {
            for (var e = [], r = 0; r < t.length; ++r) e.push(W.gP.from(t[r]));
            return new i(e);
          }),
          Object.defineProperty(i.prototype, "totalFrames", {
            get: function () {
              return this._textures.length;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(i.prototype, "textures", {
            get: function () {
              return this._textures;
            },
            set: function (t) {
              if (t[0] instanceof W.gP)
                ((this._textures = t), (this._durations = null));
              else {
                ((this._textures = []), (this._durations = []));
                for (var e = 0; e < t.length; e++)
                  (this._textures.push(t[e].texture),
                    this._durations.push(t[e].time));
              }
              ((this._previousFrame = null),
                this.gotoAndStop(0),
                this.updateTexture());
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(i.prototype, "currentFrame", {
            get: function () {
              var t = Math.floor(this._currentTime) % this._textures.length;
              return (t < 0 && (t += this._textures.length), t);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(i.prototype, "playing", {
            get: function () {
              return this._playing;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(i.prototype, "autoUpdate", {
            get: function () {
              return this._autoUpdate;
            },
            set: function (t) {
              t !== this._autoUpdate &&
                ((this._autoUpdate = t),
                !this._autoUpdate && this._isConnectedToTicker
                  ? (V.Rv.shared.remove(this.update, this),
                    (this._isConnectedToTicker = !1))
                  : this._autoUpdate &&
                    !this._isConnectedToTicker &&
                    this._playing &&
                    (V.Rv.shared.add(this.update, this),
                    (this._isConnectedToTicker = !0)));
            },
            enumerable: !1,
            configurable: !0,
          }));
      })(ea),
        W.XO.add(z, ti, tt, tH, eI, W.ch, eX, e6, tR, tG, tB, eC, V.y, ty));
      var iR = {
        AlphaFilter: e7,
        BlurFilter: io,
        BlurFilterPass: ir,
        ColorMatrixFilter: ia,
        DisplacementFilter: iu,
        FXAAFilter: ic,
        NoiseFilter: id,
      };
    },
    2521: (t) => {
      !(function () {
        "use strict";
        var e = {
            815: function (t) {
              t.exports = function (t, i, r, n) {
                ((i = i || "&"), (r = r || "="));
                var o = {};
                if ("string" != typeof t || 0 === t.length) return o;
                var s = /\+/g;
                t = t.split(i);
                var a = 1e3;
                n && "number" == typeof n.maxKeys && (a = n.maxKeys);
                var h = t.length;
                a > 0 && h > a && (h = a);
                for (var u = 0; u < h; ++u) {
                  var l,
                    c,
                    p,
                    d,
                    f = t[u].replace(s, "%20"),
                    _ = f.indexOf(r);
                  (_ >= 0
                    ? ((l = f.substr(0, _)), (c = f.substr(_ + 1)))
                    : ((l = f), (c = "")),
                  (p = decodeURIComponent(l)),
                  (d = decodeURIComponent(c)),
                  Object.prototype.hasOwnProperty.call(o, p))
                    ? e(o[p])
                      ? o[p].push(d)
                      : (o[p] = [o[p], d])
                    : (o[p] = d);
                }
                return o;
              };
              var e =
                Array.isArray ||
                function (t) {
                  return "[object Array]" === Object.prototype.toString.call(t);
                };
            },
            577: function (t) {
              var e = function (t) {
                switch (typeof t) {
                  case "string":
                    return t;
                  case "boolean":
                    return t ? "true" : "false";
                  case "number":
                    return isFinite(t) ? t : "";
                  default:
                    return "";
                }
              };
              t.exports = function (t, o, s, a) {
                return ((o = o || "&"),
                (s = s || "="),
                null === t && (t = void 0),
                "object" == typeof t)
                  ? r(n(t), function (n) {
                      var a = encodeURIComponent(e(n)) + s;
                      return i(t[n])
                        ? r(t[n], function (t) {
                            return a + encodeURIComponent(e(t));
                          }).join(o)
                        : a + encodeURIComponent(e(t[n]));
                    }).join(o)
                  : a
                    ? encodeURIComponent(e(a)) + s + encodeURIComponent(e(t))
                    : "";
              };
              var i =
                Array.isArray ||
                function (t) {
                  return "[object Array]" === Object.prototype.toString.call(t);
                };
              function r(t, e) {
                if (t.map) return t.map(e);
                for (var i = [], r = 0; r < t.length; r++) i.push(e(t[r], r));
                return i;
              }
              var n =
                Object.keys ||
                function (t) {
                  var e = [];
                  for (var i in t)
                    Object.prototype.hasOwnProperty.call(t, i) && e.push(i);
                  return e;
                };
            },
          },
          i = {};
        function r(t) {
          var n = i[t];
          if (void 0 !== n) return n.exports;
          var o = (i[t] = { exports: {} }),
            s = !0;
          try {
            (e[t](o, o.exports, r), (s = !1));
          } finally {
            s && delete i[t];
          }
          return o.exports;
        }
        r.ab = "//";
        var n = {};
        ((n.decode = n.parse = r(815)),
          (n.encode = n.stringify = r(577)),
          (t.exports = n));
      })();
    },
    4766: (t) => {
      "use strict";
      ((t.exports = Object.assign.bind(Object)),
        (t.exports.default = t.exports));
    },
    4987: (t, e, i) => {
      "use strict";
      var r, n, o, s, a, h, u, l, c, p, d, f, _, v, y, g, m, b, x, T;
      (i.d(e, {
        B9: () => s,
        E8: () => f,
        Gk: () => _,
        Km: () => r,
        M6: () => p,
        OS: () => y,
        Pk: () => g,
        QE: () => l,
        XZ: () => c,
        _4: () => a,
        dW: () => u,
        fr: () => v,
        h3: () => n,
        hR: () => h,
        he: () => x,
        uR: () => d,
        vg: () => m,
        wn: () => o,
        yw: () => T,
      }),
        (function (t) {
          ((t[(t.WEBGL_LEGACY = 0)] = "WEBGL_LEGACY"),
            (t[(t.WEBGL = 1)] = "WEBGL"),
            (t[(t.WEBGL2 = 2)] = "WEBGL2"));
        })(r || (r = {})),
        (function (t) {
          ((t[(t.UNKNOWN = 0)] = "UNKNOWN"),
            (t[(t.WEBGL = 1)] = "WEBGL"),
            (t[(t.CANVAS = 2)] = "CANVAS"));
        })(n || (n = {})),
        (function (t) {
          ((t[(t.COLOR = 16384)] = "COLOR"),
            (t[(t.DEPTH = 256)] = "DEPTH"),
            (t[(t.STENCIL = 1024)] = "STENCIL"));
        })(o || (o = {})),
        (function (t) {
          ((t[(t.NORMAL = 0)] = "NORMAL"),
            (t[(t.ADD = 1)] = "ADD"),
            (t[(t.MULTIPLY = 2)] = "MULTIPLY"),
            (t[(t.SCREEN = 3)] = "SCREEN"),
            (t[(t.OVERLAY = 4)] = "OVERLAY"),
            (t[(t.DARKEN = 5)] = "DARKEN"),
            (t[(t.LIGHTEN = 6)] = "LIGHTEN"),
            (t[(t.COLOR_DODGE = 7)] = "COLOR_DODGE"),
            (t[(t.COLOR_BURN = 8)] = "COLOR_BURN"),
            (t[(t.HARD_LIGHT = 9)] = "HARD_LIGHT"),
            (t[(t.SOFT_LIGHT = 10)] = "SOFT_LIGHT"),
            (t[(t.DIFFERENCE = 11)] = "DIFFERENCE"),
            (t[(t.EXCLUSION = 12)] = "EXCLUSION"),
            (t[(t.HUE = 13)] = "HUE"),
            (t[(t.SATURATION = 14)] = "SATURATION"),
            (t[(t.COLOR = 15)] = "COLOR"),
            (t[(t.LUMINOSITY = 16)] = "LUMINOSITY"),
            (t[(t.NORMAL_NPM = 17)] = "NORMAL_NPM"),
            (t[(t.ADD_NPM = 18)] = "ADD_NPM"),
            (t[(t.SCREEN_NPM = 19)] = "SCREEN_NPM"),
            (t[(t.NONE = 20)] = "NONE"),
            (t[(t.SRC_OVER = 0)] = "SRC_OVER"),
            (t[(t.SRC_IN = 21)] = "SRC_IN"),
            (t[(t.SRC_OUT = 22)] = "SRC_OUT"),
            (t[(t.SRC_ATOP = 23)] = "SRC_ATOP"),
            (t[(t.DST_OVER = 24)] = "DST_OVER"),
            (t[(t.DST_IN = 25)] = "DST_IN"),
            (t[(t.DST_OUT = 26)] = "DST_OUT"),
            (t[(t.DST_ATOP = 27)] = "DST_ATOP"),
            (t[(t.ERASE = 26)] = "ERASE"),
            (t[(t.SUBTRACT = 28)] = "SUBTRACT"),
            (t[(t.XOR = 29)] = "XOR"));
        })(s || (s = {})),
        (function (t) {
          ((t[(t.POINTS = 0)] = "POINTS"),
            (t[(t.LINES = 1)] = "LINES"),
            (t[(t.LINE_LOOP = 2)] = "LINE_LOOP"),
            (t[(t.LINE_STRIP = 3)] = "LINE_STRIP"),
            (t[(t.TRIANGLES = 4)] = "TRIANGLES"),
            (t[(t.TRIANGLE_STRIP = 5)] = "TRIANGLE_STRIP"),
            (t[(t.TRIANGLE_FAN = 6)] = "TRIANGLE_FAN"));
        })(a || (a = {})),
        (function (t) {
          ((t[(t.RGBA = 6408)] = "RGBA"),
            (t[(t.RGB = 6407)] = "RGB"),
            (t[(t.RG = 33319)] = "RG"),
            (t[(t.RED = 6403)] = "RED"),
            (t[(t.RGBA_INTEGER = 36249)] = "RGBA_INTEGER"),
            (t[(t.RGB_INTEGER = 36248)] = "RGB_INTEGER"),
            (t[(t.RG_INTEGER = 33320)] = "RG_INTEGER"),
            (t[(t.RED_INTEGER = 36244)] = "RED_INTEGER"),
            (t[(t.ALPHA = 6406)] = "ALPHA"),
            (t[(t.LUMINANCE = 6409)] = "LUMINANCE"),
            (t[(t.LUMINANCE_ALPHA = 6410)] = "LUMINANCE_ALPHA"),
            (t[(t.DEPTH_COMPONENT = 6402)] = "DEPTH_COMPONENT"),
            (t[(t.DEPTH_STENCIL = 34041)] = "DEPTH_STENCIL"));
        })(h || (h = {})),
        (function (t) {
          ((t[(t.TEXTURE_2D = 3553)] = "TEXTURE_2D"),
            (t[(t.TEXTURE_CUBE_MAP = 34067)] = "TEXTURE_CUBE_MAP"),
            (t[(t.TEXTURE_2D_ARRAY = 35866)] = "TEXTURE_2D_ARRAY"),
            (t[(t.TEXTURE_CUBE_MAP_POSITIVE_X = 34069)] =
              "TEXTURE_CUBE_MAP_POSITIVE_X"),
            (t[(t.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070)] =
              "TEXTURE_CUBE_MAP_NEGATIVE_X"),
            (t[(t.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071)] =
              "TEXTURE_CUBE_MAP_POSITIVE_Y"),
            (t[(t.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072)] =
              "TEXTURE_CUBE_MAP_NEGATIVE_Y"),
            (t[(t.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073)] =
              "TEXTURE_CUBE_MAP_POSITIVE_Z"),
            (t[(t.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074)] =
              "TEXTURE_CUBE_MAP_NEGATIVE_Z"));
        })(u || (u = {})),
        (function (t) {
          ((t[(t.UNSIGNED_BYTE = 5121)] = "UNSIGNED_BYTE"),
            (t[(t.UNSIGNED_SHORT = 5123)] = "UNSIGNED_SHORT"),
            (t[(t.UNSIGNED_SHORT_5_6_5 = 33635)] = "UNSIGNED_SHORT_5_6_5"),
            (t[(t.UNSIGNED_SHORT_4_4_4_4 = 32819)] = "UNSIGNED_SHORT_4_4_4_4"),
            (t[(t.UNSIGNED_SHORT_5_5_5_1 = 32820)] = "UNSIGNED_SHORT_5_5_5_1"),
            (t[(t.UNSIGNED_INT = 5125)] = "UNSIGNED_INT"),
            (t[(t.UNSIGNED_INT_10F_11F_11F_REV = 35899)] =
              "UNSIGNED_INT_10F_11F_11F_REV"),
            (t[(t.UNSIGNED_INT_2_10_10_10_REV = 33640)] =
              "UNSIGNED_INT_2_10_10_10_REV"),
            (t[(t.UNSIGNED_INT_24_8 = 34042)] = "UNSIGNED_INT_24_8"),
            (t[(t.UNSIGNED_INT_5_9_9_9_REV = 35902)] =
              "UNSIGNED_INT_5_9_9_9_REV"),
            (t[(t.BYTE = 5120)] = "BYTE"),
            (t[(t.SHORT = 5122)] = "SHORT"),
            (t[(t.INT = 5124)] = "INT"),
            (t[(t.FLOAT = 5126)] = "FLOAT"),
            (t[(t.FLOAT_32_UNSIGNED_INT_24_8_REV = 36269)] =
              "FLOAT_32_UNSIGNED_INT_24_8_REV"),
            (t[(t.HALF_FLOAT = 36193)] = "HALF_FLOAT"));
        })(l || (l = {})),
        (function (t) {
          ((t[(t.FLOAT = 0)] = "FLOAT"),
            (t[(t.INT = 1)] = "INT"),
            (t[(t.UINT = 2)] = "UINT"));
        })(c || (c = {})),
        (function (t) {
          ((t[(t.NEAREST = 0)] = "NEAREST"), (t[(t.LINEAR = 1)] = "LINEAR"));
        })(p || (p = {})),
        (function (t) {
          ((t[(t.CLAMP = 33071)] = "CLAMP"),
            (t[(t.REPEAT = 10497)] = "REPEAT"),
            (t[(t.MIRRORED_REPEAT = 33648)] = "MIRRORED_REPEAT"));
        })(d || (d = {})),
        (function (t) {
          ((t[(t.OFF = 0)] = "OFF"),
            (t[(t.POW2 = 1)] = "POW2"),
            (t[(t.ON = 2)] = "ON"),
            (t[(t.ON_MANUAL = 3)] = "ON_MANUAL"));
        })(f || (f = {})),
        (function (t) {
          ((t[(t.NPM = 0)] = "NPM"),
            (t[(t.UNPACK = 1)] = "UNPACK"),
            (t[(t.PMA = 2)] = "PMA"),
            (t[(t.NO_PREMULTIPLIED_ALPHA = 0)] = "NO_PREMULTIPLIED_ALPHA"),
            (t[(t.PREMULTIPLY_ON_UPLOAD = 1)] = "PREMULTIPLY_ON_UPLOAD"),
            (t[(t.PREMULTIPLY_ALPHA = 2)] = "PREMULTIPLY_ALPHA"),
            (t[(t.PREMULTIPLIED_ALPHA = 2)] = "PREMULTIPLIED_ALPHA"));
        })(_ || (_ = {})),
        (function (t) {
          ((t[(t.NO = 0)] = "NO"),
            (t[(t.YES = 1)] = "YES"),
            (t[(t.AUTO = 2)] = "AUTO"),
            (t[(t.BLEND = 0)] = "BLEND"),
            (t[(t.CLEAR = 1)] = "CLEAR"),
            (t[(t.BLIT = 2)] = "BLIT"));
        })(v || (v = {})),
        (function (t) {
          ((t[(t.AUTO = 0)] = "AUTO"), (t[(t.MANUAL = 1)] = "MANUAL"));
        })(y || (y = {})),
        (function (t) {
          ((t.LOW = "lowp"), (t.MEDIUM = "mediump"), (t.HIGH = "highp"));
        })(g || (g = {})),
        (function (t) {
          ((t[(t.NONE = 0)] = "NONE"),
            (t[(t.SCISSOR = 1)] = "SCISSOR"),
            (t[(t.STENCIL = 2)] = "STENCIL"),
            (t[(t.SPRITE = 3)] = "SPRITE"),
            (t[(t.COLOR = 4)] = "COLOR"));
        })(m || (m = {})),
        (function (t) {
          ((t[(t.RED = 1)] = "RED"),
            (t[(t.GREEN = 2)] = "GREEN"),
            (t[(t.BLUE = 4)] = "BLUE"),
            (t[(t.ALPHA = 8)] = "ALPHA"));
        })(b || (b = {})),
        (function (t) {
          ((t[(t.NONE = 0)] = "NONE"),
            (t[(t.LOW = 2)] = "LOW"),
            (t[(t.MEDIUM = 4)] = "MEDIUM"),
            (t[(t.HIGH = 8)] = "HIGH"));
        })(x || (x = {})),
        (function (t) {
          ((t[(t.ELEMENT_ARRAY_BUFFER = 34963)] = "ELEMENT_ARRAY_BUFFER"),
            (t[(t.ARRAY_BUFFER = 34962)] = "ARRAY_BUFFER"),
            (t[(t.UNIFORM_BUFFER = 35345)] = "UNIFORM_BUFFER"));
        })(T || (T = {})));
    },
    5261: (t, e, i) => {
      "use strict";
      i.d(e, { b: () => r });
      var r = (function () {
        function t(t) {
          ((this.items = []), (this._name = t), (this._aliasCount = 0));
        }
        return (
          (t.prototype.emit = function (t, e, i, r, n, o, s, a) {
            if (arguments.length > 8) throw Error("max arguments reached");
            var h = this.name,
              u = this.items;
            this._aliasCount++;
            for (var l = 0, c = u.length; l < c; l++)
              u[l][h](t, e, i, r, n, o, s, a);
            return (u === this.items && this._aliasCount--, this);
          }),
          (t.prototype.ensureNonAliasedItems = function () {
            this._aliasCount > 0 &&
              this.items.length > 1 &&
              ((this._aliasCount = 0), (this.items = this.items.slice(0)));
          }),
          (t.prototype.add = function (t) {
            return (
              t[this._name] &&
                (this.ensureNonAliasedItems(),
                this.remove(t),
                this.items.push(t)),
              this
            );
          }),
          (t.prototype.remove = function (t) {
            var e = this.items.indexOf(t);
            return (
              -1 !== e &&
                (this.ensureNonAliasedItems(), this.items.splice(e, 1)),
              this
            );
          }),
          (t.prototype.contains = function (t) {
            return -1 !== this.items.indexOf(t);
          }),
          (t.prototype.removeAll = function () {
            return (
              this.ensureNonAliasedItems(),
              (this.items.length = 0),
              this
            );
          }),
          (t.prototype.destroy = function () {
            (this.removeAll(), (this.items = null), (this._name = null));
          }),
          Object.defineProperty(t.prototype, "empty", {
            get: function () {
              return 0 === this.items.length;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "name", {
            get: function () {
              return this._name;
            },
            enumerable: !1,
            configurable: !0,
          }),
          t
        );
      })();
      Object.defineProperties(r.prototype, {
        dispatch: { value: r.prototype.emit },
        run: { value: r.prototype.emit },
      });
    },
    5650: (t) => {
      "use strict";
      function e(t, e, l) {
        l = l || 2;
        var c,
          f,
          v,
          y,
          g,
          m,
          b,
          x = e && e.length,
          T = x ? e[0] * l : t.length,
          E = i(t, 0, T, l, !0),
          O = [];
        if (!E || E.next === E.prev) return O;
        if (
          (x &&
            (E = (function (t, e, o, h) {
              var u,
                l,
                c,
                f,
                _,
                v = [];
              for (u = 0, l = e.length; u < l; u++)
                ((c = e[u] * h),
                  (f = u < l - 1 ? e[u + 1] * h : t.length),
                  (_ = i(t, c, f, h, !1)) === _.next && (_.steiner = !0),
                  v.push(
                    (function (t) {
                      var e = t,
                        i = t;
                      do
                        ((e.x < i.x || (e.x === i.x && e.y < i.y)) && (i = e),
                          (e = e.next));
                      while (e !== t);
                      return i;
                    })(_),
                  ));
              for (v.sort(n), u = 0; u < v.length; u++)
                o = (function (t, e) {
                  var i = (function (t, e) {
                    var i,
                      r,
                      n,
                      o = e,
                      h = t.x,
                      u = t.y,
                      l = -1 / 0;
                    do {
                      if (u <= o.y && u >= o.next.y && o.next.y !== o.y) {
                        var c =
                          o.x +
                          ((u - o.y) * (o.next.x - o.x)) / (o.next.y - o.y);
                        if (
                          c <= h &&
                          c > l &&
                          ((l = c), (n = o.x < o.next.x ? o : o.next), c === h)
                        )
                          return n;
                      }
                      o = o.next;
                    } while (o !== e);
                    if (!n) return null;
                    var d,
                      f = n,
                      _ = n.x,
                      v = n.y,
                      y = 1 / 0;
                    o = n;
                    do {
                      (h >= o.x &&
                        o.x >= _ &&
                        h !== o.x &&
                        s(u < v ? h : l, u, _, v, u < v ? l : h, u, o.x, o.y) &&
                        ((d = Math.abs(u - o.y) / (h - o.x)),
                        p(o, t) &&
                          (d < y ||
                            (d === y &&
                              (o.x > n.x ||
                                (o.x === n.x &&
                                  ((i = n),
                                  (r = o),
                                  0 > a(i.prev, i, r.prev) &&
                                    0 > a(r.next, i, i.next)))))) &&
                          ((n = o), (y = d))),
                        (o = o.next));
                    } while (o !== f);
                    return n;
                  })(t, e);
                  if (!i) return e;
                  var n = d(i, t);
                  return (r(n, n.next), r(i, i.next));
                })(v[u], o);
              return o;
            })(t, e, E, l)),
          t.length > 80 * l)
        ) {
          ((c = v = t[0]), (f = y = t[1]));
          for (var R = l; R < T; R += l)
            ((g = t[R]),
              (m = t[R + 1]),
              g < c && (c = g),
              m < f && (f = m),
              g > v && (v = g),
              m > y && (y = m));
          b = 0 !== (b = Math.max(v - c, y - f)) ? 32767 / b : 0;
        }
        return (
          (function t(e, i, n, l, c, f, v) {
            if (e) {
              !v &&
                f &&
                (function (t, e, i, r) {
                  var n = t;
                  do
                    (0 === n.z && (n.z = o(n.x, n.y, e, i, r)),
                      (n.prevZ = n.prev),
                      (n.nextZ = n.next),
                      (n = n.next));
                  while (n !== t);
                  ((n.prevZ.nextZ = null),
                    (n.prevZ = null),
                    (function (t) {
                      var e,
                        i,
                        r,
                        n,
                        o,
                        s,
                        a,
                        h,
                        u = 1;
                      do {
                        for (i = t, t = null, o = null, s = 0; i; ) {
                          for (
                            s++, r = i, a = 0, e = 0;
                            e < u && (a++, (r = r.nextZ));
                            e++
                          );
                          for (h = u; a > 0 || (h > 0 && r); )
                            (0 !== a && (0 === h || !r || i.z <= r.z)
                              ? ((n = i), (i = i.nextZ), a--)
                              : ((n = r), (r = r.nextZ), h--),
                              o ? (o.nextZ = n) : (t = n),
                              (n.prevZ = o),
                              (o = n));
                          i = r;
                        }
                        ((o.nextZ = null), (u *= 2));
                      } while (s > 1);
                    })(n));
                })(e, l, c, f);
              for (var y, g, m = e; e.prev !== e.next; ) {
                if (
                  ((y = e.prev),
                  (g = e.next),
                  f
                    ? (function (t, e, i, r) {
                        var n = t.prev,
                          h = t.next;
                        if (a(n, t, h) >= 0) return !1;
                        for (
                          var u = n.x,
                            l = t.x,
                            c = h.x,
                            p = n.y,
                            d = t.y,
                            f = h.y,
                            _ = u < l ? (u < c ? u : c) : l < c ? l : c,
                            v = p < d ? (p < f ? p : f) : d < f ? d : f,
                            y = u > l ? (u > c ? u : c) : l > c ? l : c,
                            g = p > d ? (p > f ? p : f) : d > f ? d : f,
                            m = o(_, v, e, i, r),
                            b = o(y, g, e, i, r),
                            x = t.prevZ,
                            T = t.nextZ;
                          x && x.z >= m && T && T.z <= b;
                        ) {
                          if (
                            (x.x >= _ &&
                              x.x <= y &&
                              x.y >= v &&
                              x.y <= g &&
                              x !== n &&
                              x !== h &&
                              s(u, p, l, d, c, f, x.x, x.y) &&
                              a(x.prev, x, x.next) >= 0) ||
                            ((x = x.prevZ),
                            T.x >= _ &&
                              T.x <= y &&
                              T.y >= v &&
                              T.y <= g &&
                              T !== n &&
                              T !== h &&
                              s(u, p, l, d, c, f, T.x, T.y) &&
                              a(T.prev, T, T.next) >= 0)
                          )
                            return !1;
                          T = T.nextZ;
                        }
                        for (; x && x.z >= m; ) {
                          if (
                            x.x >= _ &&
                            x.x <= y &&
                            x.y >= v &&
                            x.y <= g &&
                            x !== n &&
                            x !== h &&
                            s(u, p, l, d, c, f, x.x, x.y) &&
                            a(x.prev, x, x.next) >= 0
                          )
                            return !1;
                          x = x.prevZ;
                        }
                        for (; T && T.z <= b; ) {
                          if (
                            T.x >= _ &&
                            T.x <= y &&
                            T.y >= v &&
                            T.y <= g &&
                            T !== n &&
                            T !== h &&
                            s(u, p, l, d, c, f, T.x, T.y) &&
                            a(T.prev, T, T.next) >= 0
                          )
                            return !1;
                          T = T.nextZ;
                        }
                        return !0;
                      })(e, l, c, f)
                    : (function (t) {
                        var e = t.prev,
                          i = t.next;
                        if (a(e, t, i) >= 0) return !1;
                        for (
                          var r = e.x,
                            n = t.x,
                            o = i.x,
                            h = e.y,
                            u = t.y,
                            l = i.y,
                            c = r < n ? (r < o ? r : o) : n < o ? n : o,
                            p = h < u ? (h < l ? h : l) : u < l ? u : l,
                            d = r > n ? (r > o ? r : o) : n > o ? n : o,
                            f = h > u ? (h > l ? h : l) : u > l ? u : l,
                            _ = i.next;
                          _ !== e;
                        ) {
                          if (
                            _.x >= c &&
                            _.x <= d &&
                            _.y >= p &&
                            _.y <= f &&
                            s(r, h, n, u, o, l, _.x, _.y) &&
                            a(_.prev, _, _.next) >= 0
                          )
                            return !1;
                          _ = _.next;
                        }
                        return !0;
                      })(e))
                ) {
                  (i.push((y.i / n) | 0),
                    i.push((e.i / n) | 0),
                    i.push((g.i / n) | 0),
                    _(e),
                    (e = g.next),
                    (m = g.next));
                  continue;
                }
                if ((e = g) === m) {
                  v
                    ? 1 === v
                      ? t(
                          (e = (function (t, e, i) {
                            var n = t;
                            do {
                              var o = n.prev,
                                s = n.next.next;
                              (!h(o, s) &&
                                u(o, n, n.next, s) &&
                                p(o, s) &&
                                p(s, o) &&
                                (e.push((o.i / i) | 0),
                                e.push((n.i / i) | 0),
                                e.push((s.i / i) | 0),
                                _(n),
                                _(n.next),
                                (n = t = s)),
                                (n = n.next));
                            } while (n !== t);
                            return r(n);
                          })(r(e), i, n)),
                          i,
                          n,
                          l,
                          c,
                          f,
                          2,
                        )
                      : 2 === v &&
                        (function (e, i, n, o, s, l) {
                          var c = e;
                          do {
                            for (var f, _, v = c.next.next; v !== c.prev; ) {
                              if (
                                c.i !== v.i &&
                                ((f = c),
                                (_ = v),
                                f.next.i !== _.i &&
                                  f.prev.i !== _.i &&
                                  !(function (t, e) {
                                    var i = t;
                                    do {
                                      if (
                                        i.i !== t.i &&
                                        i.next.i !== t.i &&
                                        i.i !== e.i &&
                                        i.next.i !== e.i &&
                                        u(i, i.next, t, e)
                                      )
                                        return !0;
                                      i = i.next;
                                    } while (i !== t);
                                    return !1;
                                  })(f, _) &&
                                  ((p(f, _) &&
                                    p(_, f) &&
                                    (function (t, e) {
                                      var i = t,
                                        r = !1,
                                        n = (t.x + e.x) / 2,
                                        o = (t.y + e.y) / 2;
                                      do
                                        (i.y > o != i.next.y > o &&
                                          i.next.y !== i.y &&
                                          n <
                                            ((i.next.x - i.x) * (o - i.y)) /
                                              (i.next.y - i.y) +
                                              i.x &&
                                          (r = !r),
                                          (i = i.next));
                                      while (i !== t);
                                      return r;
                                    })(f, _) &&
                                    (a(f.prev, f, _.prev) ||
                                      a(f, _.prev, _))) ||
                                    (h(f, _) &&
                                      a(f.prev, f, f.next) > 0 &&
                                      a(_.prev, _, _.next) > 0)))
                              ) {
                                var y = d(c, v);
                                ((c = r(c, c.next)),
                                  (y = r(y, y.next)),
                                  t(c, i, n, o, s, l, 0),
                                  t(y, i, n, o, s, l, 0));
                                return;
                              }
                              v = v.next;
                            }
                            c = c.next;
                          } while (c !== e);
                        })(e, i, n, l, c, f)
                    : t(r(e), i, n, l, c, f, 1);
                  break;
                }
              }
            }
          })(E, O, l, c, f, b, 0),
          O
        );
      }
      function i(t, e, i, r, n) {
        var o, s;
        if (n === y(t, e, i, r) > 0)
          for (o = e; o < i; o += r) s = f(o, t[o], t[o + 1], s);
        else for (o = i - r; o >= e; o -= r) s = f(o, t[o], t[o + 1], s);
        return (s && h(s, s.next) && (_(s), (s = s.next)), s);
      }
      function r(t, e) {
        if (!t) return t;
        e || (e = t);
        var i,
          r = t;
        do
          if (
            ((i = !1),
            !r.steiner && (h(r, r.next) || 0 === a(r.prev, r, r.next)))
          ) {
            if ((_(r), (r = e = r.prev) === r.next)) break;
            i = !0;
          } else r = r.next;
        while (i || r !== e);
        return e;
      }
      function n(t, e) {
        return t.x - e.x;
      }
      function o(t, e, i, r, n) {
        return (
          (t =
            ((t =
              ((t =
                ((t = ((t = ((t - i) * n) | 0) | (t << 8)) & 0xff00ff) |
                  (t << 4)) &
                0xf0f0f0f) |
                (t << 2)) &
              0x33333333) |
              (t << 1)) &
            0x55555555) |
          ((e =
            ((e =
              ((e =
                ((e = ((e = ((e - r) * n) | 0) | (e << 8)) & 0xff00ff) |
                  (e << 4)) &
                0xf0f0f0f) |
                (e << 2)) &
              0x33333333) |
              (e << 1)) &
            0x55555555) <<
            1)
        );
      }
      function s(t, e, i, r, n, o, s, a) {
        return (
          (n - s) * (e - a) >= (t - s) * (o - a) &&
          (t - s) * (r - a) >= (i - s) * (e - a) &&
          (i - s) * (o - a) >= (n - s) * (r - a)
        );
      }
      function a(t, e, i) {
        return (e.y - t.y) * (i.x - e.x) - (e.x - t.x) * (i.y - e.y);
      }
      function h(t, e) {
        return t.x === e.x && t.y === e.y;
      }
      function u(t, e, i, r) {
        var n = c(a(t, e, i)),
          o = c(a(t, e, r)),
          s = c(a(i, r, t)),
          h = c(a(i, r, e));
        return !!(
          (n !== o && s !== h) ||
          (0 === n && l(t, i, e)) ||
          (0 === o && l(t, r, e)) ||
          (0 === s && l(i, t, r)) ||
          (0 === h && l(i, e, r))
        );
      }
      function l(t, e, i) {
        return (
          e.x <= Math.max(t.x, i.x) &&
          e.x >= Math.min(t.x, i.x) &&
          e.y <= Math.max(t.y, i.y) &&
          e.y >= Math.min(t.y, i.y)
        );
      }
      function c(t) {
        return t > 0 ? 1 : t < 0 ? -1 : 0;
      }
      function p(t, e) {
        return 0 > a(t.prev, t, t.next)
          ? a(t, e, t.next) >= 0 && a(t, t.prev, e) >= 0
          : 0 > a(t, e, t.prev) || 0 > a(t, t.next, e);
      }
      function d(t, e) {
        var i = new v(t.i, t.x, t.y),
          r = new v(e.i, e.x, e.y),
          n = t.next,
          o = e.prev;
        return (
          (t.next = e),
          (e.prev = t),
          (i.next = n),
          (n.prev = i),
          (r.next = i),
          (i.prev = r),
          (o.next = r),
          (r.prev = o),
          r
        );
      }
      function f(t, e, i, r) {
        var n = new v(t, e, i);
        return (
          r
            ? ((n.next = r.next), (n.prev = r), (r.next.prev = n), (r.next = n))
            : ((n.prev = n), (n.next = n)),
          n
        );
      }
      function _(t) {
        ((t.next.prev = t.prev),
          (t.prev.next = t.next),
          t.prevZ && (t.prevZ.nextZ = t.nextZ),
          t.nextZ && (t.nextZ.prevZ = t.prevZ));
      }
      function v(t, e, i) {
        ((this.i = t),
          (this.x = e),
          (this.y = i),
          (this.prev = null),
          (this.next = null),
          (this.z = 0),
          (this.prevZ = null),
          (this.nextZ = null),
          (this.steiner = !1));
      }
      function y(t, e, i, r) {
        for (var n = 0, o = e, s = i - r; o < i; o += r)
          ((n += (t[s] - t[o]) * (t[o + 1] + t[s + 1])), (s = o));
        return n;
      }
      ((t.exports = e),
        (t.exports.default = e),
        (e.deviation = function (t, e, i, r) {
          var n = e && e.length,
            o = n ? e[0] * i : t.length,
            s = Math.abs(y(t, 0, o, i));
          if (n)
            for (var a = 0, h = e.length; a < h; a++) {
              var u = e[a] * i,
                l = a < h - 1 ? e[a + 1] * i : t.length;
              s -= Math.abs(y(t, u, l, i));
            }
          var c = 0;
          for (a = 0; a < r.length; a += 3) {
            var p = r[a] * i,
              d = r[a + 1] * i,
              f = r[a + 2] * i;
            c += Math.abs(
              (t[p] - t[f]) * (t[d + 1] - t[p + 1]) -
                (t[p] - t[d]) * (t[f + 1] - t[p + 1]),
            );
          }
          return 0 === s && 0 === c ? 0 : Math.abs((c - s) / s);
        }),
        (e.flatten = function (t) {
          for (
            var e = t[0][0].length,
              i = { vertices: [], holes: [], dimensions: e },
              r = 0,
              n = 0;
            n < t.length;
            n++
          ) {
            for (var o = 0; o < t[n].length; o++)
              for (var s = 0; s < e; s++) i.vertices.push(t[n][o][s]);
            n > 0 && ((r += t[n - 1].length), i.holes.push(r));
          }
          return i;
        }));
    },
    6061: (t, e, i) => {
      "use strict";
      i.d(e, {
        ER: () => E,
        HY: () => r,
        M_: () => u,
        Pp: () => c,
        TE: () => d,
        TO: () => n,
        Td: () => s,
        bO: () => o,
        bR: () => a,
        dL: () => O,
        jl: () => l,
        oA: () => f,
        tS: () => p,
        uq: () => _,
      });
      var r,
        n = 2 * Math.PI,
        o = 180 / Math.PI,
        s = Math.PI / 180;
      !(function (t) {
        ((t[(t.POLY = 0)] = "POLY"),
          (t[(t.RECT = 1)] = "RECT"),
          (t[(t.CIRC = 2)] = "CIRC"),
          (t[(t.ELIP = 3)] = "ELIP"),
          (t[(t.RREC = 4)] = "RREC"));
      })(r || (r = {}));
      var a = (function () {
          function t(t, e) {
            (void 0 === t && (t = 0),
              void 0 === e && (e = 0),
              (this.x = 0),
              (this.y = 0),
              (this.x = t),
              (this.y = e));
          }
          return (
            (t.prototype.clone = function () {
              return new t(this.x, this.y);
            }),
            (t.prototype.copyFrom = function (t) {
              return (this.set(t.x, t.y), this);
            }),
            (t.prototype.copyTo = function (t) {
              return (t.set(this.x, this.y), t);
            }),
            (t.prototype.equals = function (t) {
              return t.x === this.x && t.y === this.y;
            }),
            (t.prototype.set = function (t, e) {
              return (
                void 0 === t && (t = 0),
                void 0 === e && (e = t),
                (this.x = t),
                (this.y = e),
                this
              );
            }),
            (t.prototype.toString = function () {
              return "[@pixi/math:Point x=" + this.x + " y=" + this.y + "]";
            }),
            t
          );
        })(),
        h = [new a(), new a(), new a(), new a()],
        u = (function () {
          function t(t, e, i, n) {
            (void 0 === t && (t = 0),
              void 0 === e && (e = 0),
              void 0 === i && (i = 0),
              void 0 === n && (n = 0),
              (this.x = Number(t)),
              (this.y = Number(e)),
              (this.width = Number(i)),
              (this.height = Number(n)),
              (this.type = r.RECT));
          }
          return (
            Object.defineProperty(t.prototype, "left", {
              get: function () {
                return this.x;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "right", {
              get: function () {
                return this.x + this.width;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "top", {
              get: function () {
                return this.y;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "bottom", {
              get: function () {
                return this.y + this.height;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t, "EMPTY", {
              get: function () {
                return new t(0, 0, 0, 0);
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.clone = function () {
              return new t(this.x, this.y, this.width, this.height);
            }),
            (t.prototype.copyFrom = function (t) {
              return (
                (this.x = t.x),
                (this.y = t.y),
                (this.width = t.width),
                (this.height = t.height),
                this
              );
            }),
            (t.prototype.copyTo = function (t) {
              return (
                (t.x = this.x),
                (t.y = this.y),
                (t.width = this.width),
                (t.height = this.height),
                t
              );
            }),
            (t.prototype.contains = function (t, e) {
              return (
                !(this.width <= 0) &&
                !(this.height <= 0) &&
                !!(t >= this.x) &&
                !!(t < this.x + this.width) &&
                !!(e >= this.y) &&
                !!(e < this.y + this.height)
              );
            }),
            (t.prototype.intersects = function (t, e) {
              if (!e) {
                var i = this.x < t.x ? t.x : this.x;
                if ((this.right > t.right ? t.right : this.right) <= i)
                  return !1;
                var r = this.y < t.y ? t.y : this.y;
                return (this.bottom > t.bottom ? t.bottom : this.bottom) > r;
              }
              var n = this.left,
                o = this.right,
                s = this.top,
                a = this.bottom;
              if (o <= n || a <= s) return !1;
              var u = h[0].set(t.left, t.top),
                l = h[1].set(t.left, t.bottom),
                c = h[2].set(t.right, t.top),
                p = h[3].set(t.right, t.bottom);
              if (c.x <= u.x || l.y <= u.y) return !1;
              var d = Math.sign(e.a * e.d - e.b * e.c);
              if (
                0 === d ||
                (e.apply(u, u),
                e.apply(l, l),
                e.apply(c, c),
                e.apply(p, p),
                Math.max(u.x, l.x, c.x, p.x) <= n ||
                  Math.min(u.x, l.x, c.x, p.x) >= o ||
                  Math.max(u.y, l.y, c.y, p.y) <= s ||
                  Math.min(u.y, l.y, c.y, p.y) >= a)
              )
                return !1;
              var f = d * (l.y - u.y),
                _ = d * (u.x - l.x),
                v = f * n + _ * s,
                y = f * o + _ * s,
                g = f * n + _ * a,
                m = f * o + _ * a;
              if (
                Math.max(v, y, g, m) <= f * u.x + _ * u.y ||
                Math.min(v, y, g, m) >= f * p.x + _ * p.y
              )
                return !1;
              var b = d * (u.y - c.y),
                x = d * (c.x - u.x),
                T = b * n + x * s,
                E = b * o + x * s,
                O = b * n + x * a,
                R = b * o + x * a;
              return !(
                Math.max(T, E, O, R) <= b * u.x + x * u.y ||
                Math.min(T, E, O, R) >= b * p.x + x * p.y
              );
            }),
            (t.prototype.pad = function (t, e) {
              return (
                void 0 === t && (t = 0),
                void 0 === e && (e = t),
                (this.x -= t),
                (this.y -= e),
                (this.width += 2 * t),
                (this.height += 2 * e),
                this
              );
            }),
            (t.prototype.fit = function (t) {
              var e = Math.max(this.x, t.x),
                i = Math.min(this.x + this.width, t.x + t.width),
                r = Math.max(this.y, t.y),
                n = Math.min(this.y + this.height, t.y + t.height);
              return (
                (this.x = e),
                (this.width = Math.max(i - e, 0)),
                (this.y = r),
                (this.height = Math.max(n - r, 0)),
                this
              );
            }),
            (t.prototype.ceil = function (t, e) {
              (void 0 === t && (t = 1), void 0 === e && (e = 0.001));
              var i = Math.ceil((this.x + this.width - e) * t) / t,
                r = Math.ceil((this.y + this.height - e) * t) / t;
              return (
                (this.x = Math.floor((this.x + e) * t) / t),
                (this.y = Math.floor((this.y + e) * t) / t),
                (this.width = i - this.x),
                (this.height = r - this.y),
                this
              );
            }),
            (t.prototype.enlarge = function (t) {
              var e = Math.min(this.x, t.x),
                i = Math.max(this.x + this.width, t.x + t.width),
                r = Math.min(this.y, t.y),
                n = Math.max(this.y + this.height, t.y + t.height);
              return (
                (this.x = e),
                (this.width = i - e),
                (this.y = r),
                (this.height = n - r),
                this
              );
            }),
            (t.prototype.toString = function () {
              return (
                "[@pixi/math:Rectangle x=" +
                this.x +
                " y=" +
                this.y +
                " width=" +
                this.width +
                " height=" +
                this.height +
                "]"
              );
            }),
            t
          );
        })(),
        l = (function () {
          function t(t, e, i) {
            (void 0 === t && (t = 0),
              void 0 === e && (e = 0),
              void 0 === i && (i = 0),
              (this.x = t),
              (this.y = e),
              (this.radius = i),
              (this.type = r.CIRC));
          }
          return (
            (t.prototype.clone = function () {
              return new t(this.x, this.y, this.radius);
            }),
            (t.prototype.contains = function (t, e) {
              if (this.radius <= 0) return !1;
              var i = this.radius * this.radius,
                r = this.x - t,
                n = this.y - e;
              return ((r *= r), (n *= n), r + n <= i);
            }),
            (t.prototype.getBounds = function () {
              return new u(
                this.x - this.radius,
                this.y - this.radius,
                2 * this.radius,
                2 * this.radius,
              );
            }),
            (t.prototype.toString = function () {
              return (
                "[@pixi/math:Circle x=" +
                this.x +
                " y=" +
                this.y +
                " radius=" +
                this.radius +
                "]"
              );
            }),
            t
          );
        })(),
        c = (function () {
          function t(t, e, i, n) {
            (void 0 === t && (t = 0),
              void 0 === e && (e = 0),
              void 0 === i && (i = 0),
              void 0 === n && (n = 0),
              (this.x = t),
              (this.y = e),
              (this.width = i),
              (this.height = n),
              (this.type = r.ELIP));
          }
          return (
            (t.prototype.clone = function () {
              return new t(this.x, this.y, this.width, this.height);
            }),
            (t.prototype.contains = function (t, e) {
              if (this.width <= 0 || this.height <= 0) return !1;
              var i = (t - this.x) / this.width,
                r = (e - this.y) / this.height;
              return ((i *= i), (r *= r), i + r <= 1);
            }),
            (t.prototype.getBounds = function () {
              return new u(
                this.x - this.width,
                this.y - this.height,
                this.width,
                this.height,
              );
            }),
            (t.prototype.toString = function () {
              return (
                "[@pixi/math:Ellipse x=" +
                this.x +
                " y=" +
                this.y +
                " width=" +
                this.width +
                " height=" +
                this.height +
                "]"
              );
            }),
            t
          );
        })(),
        p = (function () {
          function t() {
            for (var t = arguments, e = [], i = 0; i < arguments.length; i++)
              e[i] = t[i];
            var n = Array.isArray(e[0]) ? e[0] : e;
            if ("number" != typeof n[0]) {
              for (var o = [], s = 0, a = n.length; s < a; s++)
                o.push(n[s].x, n[s].y);
              n = o;
            }
            ((this.points = n), (this.type = r.POLY), (this.closeStroke = !0));
          }
          return (
            (t.prototype.clone = function () {
              var e = new t(this.points.slice());
              return ((e.closeStroke = this.closeStroke), e);
            }),
            (t.prototype.contains = function (t, e) {
              for (
                var i = !1, r = this.points.length / 2, n = 0, o = r - 1;
                n < r;
                o = n++
              ) {
                var s = this.points[2 * n],
                  a = this.points[2 * n + 1],
                  h = this.points[2 * o],
                  u = this.points[2 * o + 1];
                a > e != u > e &&
                  t < ((e - a) / (u - a)) * (h - s) + s &&
                  (i = !i);
              }
              return i;
            }),
            (t.prototype.toString = function () {
              return (
                "[@pixi/math:PolygoncloseStroke=" +
                this.closeStroke +
                "points=" +
                this.points.reduce(function (t, e) {
                  return t + ", " + e;
                }, "") +
                "]"
              );
            }),
            t
          );
        })(),
        d = (function () {
          function t(t, e, i, n, o) {
            (void 0 === t && (t = 0),
              void 0 === e && (e = 0),
              void 0 === i && (i = 0),
              void 0 === n && (n = 0),
              void 0 === o && (o = 20),
              (this.x = t),
              (this.y = e),
              (this.width = i),
              (this.height = n),
              (this.radius = o),
              (this.type = r.RREC));
          }
          return (
            (t.prototype.clone = function () {
              return new t(
                this.x,
                this.y,
                this.width,
                this.height,
                this.radius,
              );
            }),
            (t.prototype.contains = function (t, e) {
              if (this.width <= 0 || this.height <= 0) return !1;
              if (
                t >= this.x &&
                t <= this.x + this.width &&
                e >= this.y &&
                e <= this.y + this.height
              ) {
                var i = Math.max(
                  0,
                  Math.min(this.radius, Math.min(this.width, this.height) / 2),
                );
                if (
                  (e >= this.y + i && e <= this.y + this.height - i) ||
                  (t >= this.x + i && t <= this.x + this.width - i)
                )
                  return !0;
                var r = t - (this.x + i),
                  n = e - (this.y + i),
                  o = i * i;
                if (
                  r * r + n * n <= o ||
                  (r = t - (this.x + this.width - i)) * r + n * n <= o ||
                  r * r + (n = e - (this.y + this.height - i)) * n <= o ||
                  (r = t - (this.x + i)) * r + n * n <= o
                )
                  return !0;
              }
              return !1;
            }),
            (t.prototype.toString = function () {
              return (
                "[@pixi/math:RoundedRectangle x=" +
                this.x +
                " y=" +
                this.y +
                ("width=" +
                  this.width +
                  " height=" +
                  this.height +
                  " radius=") +
                this.radius +
                "]"
              );
            }),
            t
          );
        })(),
        f = (function () {
          function t(t, e, i, r) {
            (void 0 === i && (i = 0),
              void 0 === r && (r = 0),
              (this._x = i),
              (this._y = r),
              (this.cb = t),
              (this.scope = e));
          }
          return (
            (t.prototype.clone = function (e, i) {
              return (
                void 0 === e && (e = this.cb),
                void 0 === i && (i = this.scope),
                new t(e, i, this._x, this._y)
              );
            }),
            (t.prototype.set = function (t, e) {
              return (
                void 0 === t && (t = 0),
                void 0 === e && (e = t),
                (this._x !== t || this._y !== e) &&
                  ((this._x = t), (this._y = e), this.cb.call(this.scope)),
                this
              );
            }),
            (t.prototype.copyFrom = function (t) {
              return (
                (this._x !== t.x || this._y !== t.y) &&
                  ((this._x = t.x), (this._y = t.y), this.cb.call(this.scope)),
                this
              );
            }),
            (t.prototype.copyTo = function (t) {
              return (t.set(this._x, this._y), t);
            }),
            (t.prototype.equals = function (t) {
              return t.x === this._x && t.y === this._y;
            }),
            (t.prototype.toString = function () {
              return (
                "[@pixi/math:ObservablePoint x=0 y=0 scope=" + this.scope + "]"
              );
            }),
            Object.defineProperty(t.prototype, "x", {
              get: function () {
                return this._x;
              },
              set: function (t) {
                this._x !== t && ((this._x = t), this.cb.call(this.scope));
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "y", {
              get: function () {
                return this._y;
              },
              set: function (t) {
                this._y !== t && ((this._y = t), this.cb.call(this.scope));
              },
              enumerable: !1,
              configurable: !0,
            }),
            t
          );
        })(),
        _ = (function () {
          function t(t, e, i, r, n, o) {
            (void 0 === t && (t = 1),
              void 0 === e && (e = 0),
              void 0 === i && (i = 0),
              void 0 === r && (r = 1),
              void 0 === n && (n = 0),
              void 0 === o && (o = 0),
              (this.array = null),
              (this.a = t),
              (this.b = e),
              (this.c = i),
              (this.d = r),
              (this.tx = n),
              (this.ty = o));
          }
          return (
            (t.prototype.fromArray = function (t) {
              ((this.a = t[0]),
                (this.b = t[1]),
                (this.c = t[3]),
                (this.d = t[4]),
                (this.tx = t[2]),
                (this.ty = t[5]));
            }),
            (t.prototype.set = function (t, e, i, r, n, o) {
              return (
                (this.a = t),
                (this.b = e),
                (this.c = i),
                (this.d = r),
                (this.tx = n),
                (this.ty = o),
                this
              );
            }),
            (t.prototype.toArray = function (t, e) {
              this.array || (this.array = new Float32Array(9));
              var i = e || this.array;
              return (
                t
                  ? ((i[0] = this.a),
                    (i[1] = this.b),
                    (i[2] = 0),
                    (i[3] = this.c),
                    (i[4] = this.d),
                    (i[5] = 0),
                    (i[6] = this.tx),
                    (i[7] = this.ty))
                  : ((i[0] = this.a),
                    (i[1] = this.c),
                    (i[2] = this.tx),
                    (i[3] = this.b),
                    (i[4] = this.d),
                    (i[5] = this.ty),
                    (i[6] = 0),
                    (i[7] = 0)),
                (i[8] = 1),
                i
              );
            }),
            (t.prototype.apply = function (t, e) {
              e = e || new a();
              var i = t.x,
                r = t.y;
              return (
                (e.x = this.a * i + this.c * r + this.tx),
                (e.y = this.b * i + this.d * r + this.ty),
                e
              );
            }),
            (t.prototype.applyInverse = function (t, e) {
              e = e || new a();
              var i = 1 / (this.a * this.d + -(this.c * this.b)),
                r = t.x,
                n = t.y;
              return (
                (e.x =
                  this.d * i * r +
                  -this.c * i * n +
                  (this.ty * this.c - this.tx * this.d) * i),
                (e.y =
                  this.a * i * n +
                  -this.b * i * r +
                  (-this.ty * this.a + this.tx * this.b) * i),
                e
              );
            }),
            (t.prototype.translate = function (t, e) {
              return ((this.tx += t), (this.ty += e), this);
            }),
            (t.prototype.scale = function (t, e) {
              return (
                (this.a *= t),
                (this.d *= e),
                (this.c *= t),
                (this.b *= e),
                (this.tx *= t),
                (this.ty *= e),
                this
              );
            }),
            (t.prototype.rotate = function (t) {
              var e = Math.cos(t),
                i = Math.sin(t),
                r = this.a,
                n = this.c,
                o = this.tx;
              return (
                (this.a = r * e - this.b * i),
                (this.b = r * i + this.b * e),
                (this.c = n * e - this.d * i),
                (this.d = n * i + this.d * e),
                (this.tx = o * e - this.ty * i),
                (this.ty = o * i + this.ty * e),
                this
              );
            }),
            (t.prototype.append = function (t) {
              var e = this.a,
                i = this.b,
                r = this.c,
                n = this.d;
              return (
                (this.a = t.a * e + t.b * r),
                (this.b = t.a * i + t.b * n),
                (this.c = t.c * e + t.d * r),
                (this.d = t.c * i + t.d * n),
                (this.tx = t.tx * e + t.ty * r + this.tx),
                (this.ty = t.tx * i + t.ty * n + this.ty),
                this
              );
            }),
            (t.prototype.setTransform = function (t, e, i, r, n, o, s, a, h) {
              return (
                (this.a = Math.cos(s + h) * n),
                (this.b = Math.sin(s + h) * n),
                (this.c = -Math.sin(s - a) * o),
                (this.d = Math.cos(s - a) * o),
                (this.tx = t - (i * this.a + r * this.c)),
                (this.ty = e - (i * this.b + r * this.d)),
                this
              );
            }),
            (t.prototype.prepend = function (t) {
              var e = this.tx;
              if (1 !== t.a || 0 !== t.b || 0 !== t.c || 1 !== t.d) {
                var i = this.a,
                  r = this.c;
                ((this.a = i * t.a + this.b * t.c),
                  (this.b = i * t.b + this.b * t.d),
                  (this.c = r * t.a + this.d * t.c),
                  (this.d = r * t.b + this.d * t.d));
              }
              return (
                (this.tx = e * t.a + this.ty * t.c + t.tx),
                (this.ty = e * t.b + this.ty * t.d + t.ty),
                this
              );
            }),
            (t.prototype.decompose = function (t) {
              var e = this.a,
                i = this.b,
                r = this.c,
                o = this.d,
                s = t.pivot,
                a = -Math.atan2(-r, o),
                h = Math.atan2(i, e),
                u = Math.abs(a + h);
              return (
                u < 1e-5 || 1e-5 > Math.abs(n - u)
                  ? ((t.rotation = h), (t.skew.x = t.skew.y = 0))
                  : ((t.rotation = 0), (t.skew.x = a), (t.skew.y = h)),
                (t.scale.x = Math.sqrt(e * e + i * i)),
                (t.scale.y = Math.sqrt(r * r + o * o)),
                (t.position.x = this.tx + (s.x * e + s.y * r)),
                (t.position.y = this.ty + (s.x * i + s.y * o)),
                t
              );
            }),
            (t.prototype.invert = function () {
              var t = this.a,
                e = this.b,
                i = this.c,
                r = this.d,
                n = this.tx,
                o = t * r - e * i;
              return (
                (this.a = r / o),
                (this.b = -e / o),
                (this.c = -i / o),
                (this.d = t / o),
                (this.tx = (i * this.ty - r * n) / o),
                (this.ty = -(t * this.ty - e * n) / o),
                this
              );
            }),
            (t.prototype.identity = function () {
              return (
                (this.a = 1),
                (this.b = 0),
                (this.c = 0),
                (this.d = 1),
                (this.tx = 0),
                (this.ty = 0),
                this
              );
            }),
            (t.prototype.clone = function () {
              var e = new t();
              return (
                (e.a = this.a),
                (e.b = this.b),
                (e.c = this.c),
                (e.d = this.d),
                (e.tx = this.tx),
                (e.ty = this.ty),
                e
              );
            }),
            (t.prototype.copyTo = function (t) {
              return (
                (t.a = this.a),
                (t.b = this.b),
                (t.c = this.c),
                (t.d = this.d),
                (t.tx = this.tx),
                (t.ty = this.ty),
                t
              );
            }),
            (t.prototype.copyFrom = function (t) {
              return (
                (this.a = t.a),
                (this.b = t.b),
                (this.c = t.c),
                (this.d = t.d),
                (this.tx = t.tx),
                (this.ty = t.ty),
                this
              );
            }),
            (t.prototype.toString = function () {
              return (
                "[@pixi/math:Matrix a=" +
                this.a +
                " b=" +
                this.b +
                " c=" +
                this.c +
                " d=" +
                this.d +
                " tx=" +
                this.tx +
                " ty=" +
                this.ty +
                "]"
              );
            }),
            Object.defineProperty(t, "IDENTITY", {
              get: function () {
                return new t();
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t, "TEMP_MATRIX", {
              get: function () {
                return new t();
              },
              enumerable: !1,
              configurable: !0,
            }),
            t
          );
        })(),
        v = [1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1, 0, 1],
        y = [0, 1, 1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1],
        g = [0, -1, -1, -1, 0, 1, 1, 1, 0, 1, 1, 1, 0, -1, -1, -1],
        m = [1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, 1, 1, 1, 0, -1],
        b = [],
        x = [],
        T = Math.sign;
      !(function () {
        for (var t = 0; t < 16; t++) {
          var e = [];
          b.push(e);
          for (var i = 0; i < 16; i++)
            for (
              var r = T(v[t] * v[i] + g[t] * y[i]),
                n = T(y[t] * v[i] + m[t] * y[i]),
                o = T(v[t] * g[i] + g[t] * m[i]),
                s = T(y[t] * g[i] + m[t] * m[i]),
                a = 0;
              a < 16;
              a++
            )
              if (v[a] === r && y[a] === n && g[a] === o && m[a] === s) {
                e.push(a);
                break;
              }
        }
        for (var t = 0; t < 16; t++) {
          var h = new _();
          (h.set(v[t], y[t], g[t], m[t], 0, 0), x.push(h));
        }
      })();
      var E = {
          E: 0,
          SE: 1,
          S: 2,
          SW: 3,
          W: 4,
          NW: 5,
          N: 6,
          NE: 7,
          MIRROR_VERTICAL: 8,
          MAIN_DIAGONAL: 10,
          MIRROR_HORIZONTAL: 12,
          REVERSE_DIAGONAL: 14,
          uX: function (t) {
            return v[t];
          },
          uY: function (t) {
            return y[t];
          },
          vX: function (t) {
            return g[t];
          },
          vY: function (t) {
            return m[t];
          },
          inv: function (t) {
            return 8 & t ? 15 & t : 7 & -t;
          },
          add: function (t, e) {
            return b[t][e];
          },
          sub: function (t, e) {
            return b[t][E.inv(e)];
          },
          rotate180: function (t) {
            return 4 ^ t;
          },
          isVertical: function (t) {
            return (3 & t) == 2;
          },
          byDirection: function (t, e) {
            return 2 * Math.abs(t) <= Math.abs(e)
              ? e >= 0
                ? E.S
                : E.N
              : 2 * Math.abs(e) <= Math.abs(t)
                ? t > 0
                  ? E.E
                  : E.W
                : e > 0
                  ? t > 0
                    ? E.SE
                    : E.SW
                  : t > 0
                    ? E.NE
                    : E.NW;
          },
          matrixAppendRotationInv: function (t, e, i, r) {
            (void 0 === i && (i = 0), void 0 === r && (r = 0));
            var n = x[E.inv(e)];
            ((n.tx = i), (n.ty = r), t.append(n));
          },
        },
        O = (function () {
          function t() {
            ((this.worldTransform = new _()),
              (this.localTransform = new _()),
              (this.position = new f(this.onChange, this, 0, 0)),
              (this.scale = new f(this.onChange, this, 1, 1)),
              (this.pivot = new f(this.onChange, this, 0, 0)),
              (this.skew = new f(this.updateSkew, this, 0, 0)),
              (this._rotation = 0),
              (this._cx = 1),
              (this._sx = 0),
              (this._cy = 0),
              (this._sy = 1),
              (this._localID = 0),
              (this._currentLocalID = 0),
              (this._worldID = 0),
              (this._parentID = 0));
          }
          return (
            (t.prototype.onChange = function () {
              this._localID++;
            }),
            (t.prototype.updateSkew = function () {
              ((this._cx = Math.cos(this._rotation + this.skew.y)),
                (this._sx = Math.sin(this._rotation + this.skew.y)),
                (this._cy = -Math.sin(this._rotation - this.skew.x)),
                (this._sy = Math.cos(this._rotation - this.skew.x)),
                this._localID++);
            }),
            (t.prototype.toString = function () {
              return (
                "[@pixi/math:Transform " +
                ("position=(" + this.position.x + ", ") +
                this.position.y +
                ") rotation=" +
                this.rotation +
                " " +
                ("scale=(" + this.scale.x + ", ") +
                this.scale.y +
                ") " +
                ("skew=(" + this.skew.x + ", ") +
                this.skew.y +
                ") ]"
              );
            }),
            (t.prototype.updateLocalTransform = function () {
              var t = this.localTransform;
              this._localID !== this._currentLocalID &&
                ((t.a = this._cx * this.scale.x),
                (t.b = this._sx * this.scale.x),
                (t.c = this._cy * this.scale.y),
                (t.d = this._sy * this.scale.y),
                (t.tx =
                  this.position.x - (this.pivot.x * t.a + this.pivot.y * t.c)),
                (t.ty =
                  this.position.y - (this.pivot.x * t.b + this.pivot.y * t.d)),
                (this._currentLocalID = this._localID),
                (this._parentID = -1));
            }),
            (t.prototype.updateTransform = function (t) {
              var e = this.localTransform;
              if (
                (this._localID !== this._currentLocalID &&
                  ((e.a = this._cx * this.scale.x),
                  (e.b = this._sx * this.scale.x),
                  (e.c = this._cy * this.scale.y),
                  (e.d = this._sy * this.scale.y),
                  (e.tx =
                    this.position.x -
                    (this.pivot.x * e.a + this.pivot.y * e.c)),
                  (e.ty =
                    this.position.y -
                    (this.pivot.x * e.b + this.pivot.y * e.d)),
                  (this._currentLocalID = this._localID),
                  (this._parentID = -1)),
                this._parentID !== t._worldID)
              ) {
                var i = t.worldTransform,
                  r = this.worldTransform;
                ((r.a = e.a * i.a + e.b * i.c),
                  (r.b = e.a * i.b + e.b * i.d),
                  (r.c = e.c * i.a + e.d * i.c),
                  (r.d = e.c * i.b + e.d * i.d),
                  (r.tx = e.tx * i.a + e.ty * i.c + i.tx),
                  (r.ty = e.tx * i.b + e.ty * i.d + i.ty),
                  (this._parentID = t._worldID),
                  this._worldID++);
              }
            }),
            (t.prototype.setFromMatrix = function (t) {
              (t.decompose(this), this._localID++);
            }),
            Object.defineProperty(t.prototype, "rotation", {
              get: function () {
                return this._rotation;
              },
              set: function (t) {
                this._rotation !== t &&
                  ((this._rotation = t), this.updateSkew());
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.IDENTITY = new t()),
            t
          );
        })();
    },
    6519: (t) => {
      "use strict";
      var e = Object.prototype.hasOwnProperty,
        i = "~";
      function r() {}
      function n(t, e, i) {
        ((this.fn = t), (this.context = e), (this.once = i || !1));
      }
      function o(t, e, r, o, s) {
        if ("function" != typeof r)
          throw TypeError("The listener must be a function");
        var a = new n(r, o || t, s),
          h = i ? i + e : e;
        return (
          t._events[h]
            ? t._events[h].fn
              ? (t._events[h] = [t._events[h], a])
              : t._events[h].push(a)
            : ((t._events[h] = a), t._eventsCount++),
          t
        );
      }
      function s(t, e) {
        0 == --t._eventsCount ? (t._events = new r()) : delete t._events[e];
      }
      function a() {
        ((this._events = new r()), (this._eventsCount = 0));
      }
      (Object.create &&
        ((r.prototype = Object.create(null)), new r().__proto__ || (i = !1)),
        (a.prototype.eventNames = function () {
          var t,
            r,
            n = [];
          if (0 === this._eventsCount) return n;
          for (r in (t = this._events))
            e.call(t, r) && n.push(i ? r.slice(1) : r);
          return Object.getOwnPropertySymbols
            ? n.concat(Object.getOwnPropertySymbols(t))
            : n;
        }),
        (a.prototype.listeners = function (t) {
          var e = i ? i + t : t,
            r = this._events[e];
          if (!r) return [];
          if (r.fn) return [r.fn];
          for (var n = 0, o = r.length, s = Array(o); n < o; n++)
            s[n] = r[n].fn;
          return s;
        }),
        (a.prototype.listenerCount = function (t) {
          var e = i ? i + t : t,
            r = this._events[e];
          return r ? (r.fn ? 1 : r.length) : 0;
        }),
        (a.prototype.emit = function (t, e, r, n, o, s) {
          var a = i ? i + t : t;
          if (!this._events[a]) return !1;
          var h,
            u,
            l = this._events[a],
            c = arguments.length;
          if (l.fn) {
            switch ((l.once && this.removeListener(t, l.fn, void 0, !0), c)) {
              case 1:
                return (l.fn.call(l.context), !0);
              case 2:
                return (l.fn.call(l.context, e), !0);
              case 3:
                return (l.fn.call(l.context, e, r), !0);
              case 4:
                return (l.fn.call(l.context, e, r, n), !0);
              case 5:
                return (l.fn.call(l.context, e, r, n, o), !0);
              case 6:
                return (l.fn.call(l.context, e, r, n, o, s), !0);
            }
            for (u = 1, h = Array(c - 1); u < c; u++) h[u - 1] = arguments[u];
            l.fn.apply(l.context, h);
          } else {
            var p,
              d = l.length;
            for (u = 0; u < d; u++)
              switch (
                (l[u].once && this.removeListener(t, l[u].fn, void 0, !0), c)
              ) {
                case 1:
                  l[u].fn.call(l[u].context);
                  break;
                case 2:
                  l[u].fn.call(l[u].context, e);
                  break;
                case 3:
                  l[u].fn.call(l[u].context, e, r);
                  break;
                case 4:
                  l[u].fn.call(l[u].context, e, r, n);
                  break;
                default:
                  if (!h)
                    for (p = 1, h = Array(c - 1); p < c; p++)
                      h[p - 1] = arguments[p];
                  l[u].fn.apply(l[u].context, h);
              }
          }
          return !0;
        }),
        (a.prototype.on = function (t, e, i) {
          return o(this, t, e, i, !1);
        }),
        (a.prototype.once = function (t, e, i) {
          return o(this, t, e, i, !0);
        }),
        (a.prototype.removeListener = function (t, e, r, n) {
          var o = i ? i + t : t;
          if (!this._events[o]) return this;
          if (!e) return (s(this, o), this);
          var a = this._events[o];
          if (a.fn)
            a.fn !== e ||
              (n && !a.once) ||
              (r && a.context !== r) ||
              s(this, o);
          else {
            for (var h = 0, u = [], l = a.length; h < l; h++)
              (a[h].fn !== e ||
                (n && !a[h].once) ||
                (r && a[h].context !== r)) &&
                u.push(a[h]);
            u.length
              ? (this._events[o] = 1 === u.length ? u[0] : u)
              : s(this, o);
          }
          return this;
        }),
        (a.prototype.removeAllListeners = function (t) {
          var e;
          return (
            t
              ? ((e = i ? i + t : t), this._events[e] && s(this, e))
              : ((this._events = new r()), (this._eventsCount = 0)),
            this
          );
        }),
        (a.prototype.off = a.prototype.removeListener),
        (a.prototype.addListener = a.prototype.on),
        (a.prefixed = i),
        (a.EventEmitter = a),
        (t.exports = a));
    },
    8181: (t, e, i) => {
      "use strict";
      i.d(e, { Fr: () => b, W0: () => x });
      var r = i(4987),
        n = /iPhone/i,
        o = /iPod/i,
        s = /iPad/i,
        a = /\biOS-universal(?:.+)Mac\b/i,
        h = /\bAndroid(?:.+)Mobile\b/i,
        u = /Android/i,
        l = /(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,
        c = /Silk/i,
        p = /Windows Phone/i,
        d = /\bWindows(?:.+)ARM\b/i,
        f = /BlackBerry/i,
        _ = /BB10/i,
        v = /Opera Mini/i,
        y = /\b(CriOS|Chrome)(?:.+)Mobile/i,
        g = /Mobile(?:.+)Firefox\b/i,
        m = function (t) {
          return (
            void 0 !== t &&
            "MacIntel" === t.platform &&
            "number" == typeof t.maxTouchPoints &&
            t.maxTouchPoints > 1 &&
            "undefined" == typeof MSStream
          );
        },
        b = (function (t) {
          var e,
            i = { userAgent: "", platform: "", maxTouchPoints: 0 };
          t || "undefined" == typeof navigator
            ? "string" == typeof t
              ? (i.userAgent = t)
              : t &&
                t.userAgent &&
                (i = {
                  userAgent: t.userAgent,
                  platform: t.platform,
                  maxTouchPoints: t.maxTouchPoints || 0,
                })
            : (i = {
                userAgent: navigator.userAgent,
                platform: navigator.platform,
                maxTouchPoints: navigator.maxTouchPoints || 0,
              });
          var r = i.userAgent,
            b = r.split("[FBAN");
          (void 0 !== b[1] && (r = b[0]),
            void 0 !== (b = r.split("Twitter"))[1] && (r = b[0]));
          var x =
              ((e = r),
              function (t) {
                return t.test(e);
              }),
            T = {
              apple: {
                phone: x(n) && !x(p),
                ipod: x(o),
                tablet: !x(n) && (x(s) || m(i)) && !x(p),
                universal: x(a),
                device: (x(n) || x(o) || x(s) || x(a) || m(i)) && !x(p),
              },
              amazon: {
                phone: x(l),
                tablet: !x(l) && x(c),
                device: x(l) || x(c),
              },
              android: {
                phone: (!x(p) && x(l)) || (!x(p) && x(h)),
                tablet: !x(p) && !x(l) && !x(h) && (x(c) || x(u)),
                device:
                  (!x(p) && (x(l) || x(c) || x(h) || x(u))) || x(/\bokhttp\b/i),
              },
              windows: { phone: x(p), tablet: x(d), device: x(p) || x(d) },
              other: {
                blackberry: x(f),
                blackberry10: x(_),
                opera: x(v),
                firefox: x(g),
                chrome: x(y),
                device: x(f) || x(_) || x(v) || x(g) || x(y),
              },
              any: !1,
              phone: !1,
              tablet: !1,
            };
          return (
            (T.any =
              T.apple.device ||
              T.android.device ||
              T.windows.device ||
              T.other.device),
            (T.phone = T.apple.phone || T.android.phone || T.windows.phone),
            (T.tablet = T.apple.tablet || T.android.tablet || T.windows.tablet),
            T
          );
        })(globalThis.navigator),
        x = {
          ADAPTER: {
            createCanvas: function (t, e) {
              var i = document.createElement("canvas");
              return ((i.width = t), (i.height = e), i);
            },
            getWebGLRenderingContext: function () {
              return WebGLRenderingContext;
            },
            getNavigator: function () {
              return navigator;
            },
            getBaseUrl: function () {
              var t;
              return null != (t = document.baseURI) ? t : window.location.href;
            },
            fetch: function (t, e) {
              return fetch(t, e);
            },
          },
          MIPMAP_TEXTURES: r.E8.POW2,
          ANISOTROPIC_LEVEL: 0,
          RESOLUTION: 1,
          FILTER_RESOLUTION: 1,
          FILTER_MULTISAMPLE: r.he.NONE,
          SPRITE_MAX_TEXTURES: (function (t) {
            var e = !0;
            if (b.tablet || b.phone) {
              if (b.apple.device) {
                var i = navigator.userAgent.match(/OS (\d+)_(\d+)?/);
                if (i) {
                  var r = parseInt(i[1], 10);
                  r < 11 && (e = !1);
                }
              }
              if (b.android.device) {
                var i = navigator.userAgent.match(/Android\s([0-9.]*)/);
                if (i) {
                  var r = parseInt(i[1], 10);
                  r < 7 && (e = !1);
                }
              }
            }
            return e ? 32 : 4;
          })(0),
          SPRITE_BATCH_SIZE: 4096,
          RENDER_OPTIONS: {
            view: null,
            width: 800,
            height: 600,
            autoDensity: !1,
            backgroundColor: 0,
            backgroundAlpha: 1,
            useContextAlpha: !0,
            clearBeforeRender: !0,
            antialias: !1,
            preserveDrawingBuffer: !1,
          },
          GC_MODE: r.OS.AUTO,
          GC_MAX_IDLE: 3600,
          GC_MAX_CHECK_COUNT: 600,
          WRAP_MODE: r.uR.CLAMP,
          SCALE_MODE: r.M6.LINEAR,
          PRECISION_VERTEX: r.Pk.HIGH,
          PRECISION_FRAGMENT: b.apple.device ? r.Pk.HIGH : r.Pk.MEDIUM,
          CAN_UPLOAD_SAME_BUFFER: !b.apple.device,
          CREATE_IMAGE_BITMAP: !1,
          ROUND_PIXELS: !1,
        };
    },
    9245: (t, e, i) => {
      "use strict";
      i.d(e, { A: () => r, X: () => s });
      var r,
        n = function () {
          return (n =
            Object.assign ||
            function (t) {
              for (
                var e, i = arguments, r = 1, n = arguments.length;
                r < n;
                r++
              )
                for (var o in (e = i[r]))
                  Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
              return t;
            }).apply(this, arguments);
        };
      !(function (t) {
        ((t.Application = "application"),
          (t.RendererPlugin = "renderer-webgl-plugin"),
          (t.CanvasRendererPlugin = "renderer-canvas-plugin"),
          (t.Loader = "loader"),
          (t.LoadParser = "load-parser"),
          (t.ResolveParser = "resolve-parser"),
          (t.CacheParser = "cache-parser"),
          (t.DetectionParser = "detection-parser"));
      })(r || (r = {}));
      var o = function (t) {
          if ("function" == typeof t || ("object" == typeof t && t.extension)) {
            if (!t.extension)
              throw Error("Extension class must have an extension object");
            var e =
              "object" != typeof t.extension
                ? { type: t.extension }
                : t.extension;
            t = n(n({}, e), { ref: t });
          }
          if ("object" == typeof t) t = n({}, t);
          else throw Error("Invalid extension type");
          return ("string" == typeof t.type && (t.type = [t.type]), t);
        },
        s = {
          _addHandlers: null,
          _removeHandlers: null,
          _queue: {},
          remove: function () {
            for (
              var t = arguments, e = this, i = [], r = 0;
              r < arguments.length;
              r++
            )
              i[r] = t[r];
            return (
              i.map(o).forEach(function (t) {
                t.type.forEach(function (i) {
                  var r, n;
                  return null == (n = (r = e._removeHandlers)[i])
                    ? void 0
                    : n.call(r, t);
                });
              }),
              this
            );
          },
          add: function () {
            for (
              var t = arguments, e = this, i = [], r = 0;
              r < arguments.length;
              r++
            )
              i[r] = t[r];
            return (
              i.map(o).forEach(function (t) {
                t.type.forEach(function (i) {
                  var r = e._addHandlers,
                    n = e._queue;
                  r[i] ? r[i](t) : ((n[i] = n[i] || []), n[i].push(t));
                });
              }),
              this
            );
          },
          handle: function (t, e, i) {
            var r = (this._addHandlers = this._addHandlers || {}),
              n = (this._removeHandlers = this._removeHandlers || {});
            if (r[t] || n[t])
              throw Error("Extension type " + t + " already has a handler");
            ((r[t] = e), (n[t] = i));
            var o = this._queue;
            return (
              o[t] &&
                (o[t].forEach(function (t) {
                  return e(t);
                }),
                delete o[t]),
              this
            );
          },
          handleByMap: function (t, e) {
            return this.handle(
              t,
              function (t) {
                e[t.name] = t.ref;
              },
              function (t) {
                delete e[t.name];
              },
            );
          },
          handleByList: function (t, e) {
            return this.handle(
              t,
              function (i) {
                var n, o;
                e.includes(i.ref) ||
                  (e.push(i.ref),
                  t === r.Loader &&
                    (null == (o = (n = i.ref).add) || o.call(n)));
              },
              function (t) {
                var i = e.indexOf(t.ref);
                -1 !== i && e.splice(i, 1);
              },
            );
          },
        };
    },
    9325: (t, e, i) => {
      "use strict";
      i.d(e, { Rv: () => a, dQ: () => r, y: () => h });
      var r,
        n = i(8181),
        o = i(9245);
      ((n.W0.TARGET_FPMS = 0.06),
        (function (t) {
          ((t[(t.INTERACTION = 50)] = "INTERACTION"),
            (t[(t.HIGH = 25)] = "HIGH"),
            (t[(t.NORMAL = 0)] = "NORMAL"),
            (t[(t.LOW = -25)] = "LOW"),
            (t[(t.UTILITY = -50)] = "UTILITY"));
        })(r || (r = {})));
      var s = (function () {
          function t(t, e, i, r) {
            (void 0 === e && (e = null),
              void 0 === i && (i = 0),
              void 0 === r && (r = !1),
              (this.next = null),
              (this.previous = null),
              (this._destroyed = !1),
              (this.fn = t),
              (this.context = e),
              (this.priority = i),
              (this.once = r));
          }
          return (
            (t.prototype.match = function (t, e) {
              return (
                void 0 === e && (e = null),
                this.fn === t && this.context === e
              );
            }),
            (t.prototype.emit = function (t) {
              this.fn &&
                (this.context ? this.fn.call(this.context, t) : this.fn(t));
              var e = this.next;
              return (
                this.once && this.destroy(!0),
                this._destroyed && (this.next = null),
                e
              );
            }),
            (t.prototype.connect = function (t) {
              ((this.previous = t),
                t.next && (t.next.previous = this),
                (this.next = t.next),
                (t.next = this));
            }),
            (t.prototype.destroy = function (t) {
              (void 0 === t && (t = !1),
                (this._destroyed = !0),
                (this.fn = null),
                (this.context = null),
                this.previous && (this.previous.next = this.next),
                this.next && (this.next.previous = this.previous));
              var e = this.next;
              return ((this.next = t ? null : e), (this.previous = null), e);
            }),
            t
          );
        })(),
        a = (function () {
          function t() {
            var t = this;
            ((this.autoStart = !1),
              (this.deltaTime = 1),
              (this.lastTime = -1),
              (this.speed = 1),
              (this.started = !1),
              (this._requestId = null),
              (this._maxElapsedMS = 100),
              (this._minElapsedMS = 0),
              (this._protected = !1),
              (this._lastFrame = -1),
              (this._head = new s(null, null, 1 / 0)),
              (this.deltaMS = 1 / n.W0.TARGET_FPMS),
              (this.elapsedMS = 1 / n.W0.TARGET_FPMS),
              (this._tick = function (e) {
                ((t._requestId = null),
                  t.started &&
                    (t.update(e),
                    t.started &&
                      null === t._requestId &&
                      t._head.next &&
                      (t._requestId = requestAnimationFrame(t._tick))));
              }));
          }
          return (
            (t.prototype._requestIfNeeded = function () {
              null === this._requestId &&
                this._head.next &&
                ((this.lastTime = performance.now()),
                (this._lastFrame = this.lastTime),
                (this._requestId = requestAnimationFrame(this._tick)));
            }),
            (t.prototype._cancelIfNeeded = function () {
              null !== this._requestId &&
                (cancelAnimationFrame(this._requestId),
                (this._requestId = null));
            }),
            (t.prototype._startIfPossible = function () {
              this.started
                ? this._requestIfNeeded()
                : this.autoStart && this.start();
            }),
            (t.prototype.add = function (t, e, i) {
              return (
                void 0 === i && (i = r.NORMAL),
                this._addListener(new s(t, e, i))
              );
            }),
            (t.prototype.addOnce = function (t, e, i) {
              return (
                void 0 === i && (i = r.NORMAL),
                this._addListener(new s(t, e, i, !0))
              );
            }),
            (t.prototype._addListener = function (t) {
              var e = this._head.next,
                i = this._head;
              if (e) {
                for (; e; ) {
                  if (t.priority > e.priority) {
                    t.connect(i);
                    break;
                  }
                  ((i = e), (e = e.next));
                }
                t.previous || t.connect(i);
              } else t.connect(i);
              return (this._startIfPossible(), this);
            }),
            (t.prototype.remove = function (t, e) {
              for (var i = this._head.next; i; )
                i = i.match(t, e) ? i.destroy() : i.next;
              return (this._head.next || this._cancelIfNeeded(), this);
            }),
            Object.defineProperty(t.prototype, "count", {
              get: function () {
                if (!this._head) return 0;
                for (var t = 0, e = this._head; (e = e.next); ) t++;
                return t;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.start = function () {
              this.started || ((this.started = !0), this._requestIfNeeded());
            }),
            (t.prototype.stop = function () {
              this.started && ((this.started = !1), this._cancelIfNeeded());
            }),
            (t.prototype.destroy = function () {
              if (!this._protected) {
                this.stop();
                for (var t = this._head.next; t; ) t = t.destroy(!0);
                (this._head.destroy(), (this._head = null));
              }
            }),
            (t.prototype.update = function (t) {
              if (
                (void 0 === t && (t = performance.now()), t > this.lastTime)
              ) {
                if (
                  ((e = this.elapsedMS = t - this.lastTime) >
                    this._maxElapsedMS && (e = this._maxElapsedMS),
                  (e *= this.speed),
                  this._minElapsedMS)
                ) {
                  var e,
                    i = (t - this._lastFrame) | 0;
                  if (i < this._minElapsedMS) return;
                  this._lastFrame = t - (i % this._minElapsedMS);
                }
                ((this.deltaMS = e),
                  (this.deltaTime = this.deltaMS * n.W0.TARGET_FPMS));
                for (var r = this._head, o = r.next; o; )
                  o = o.emit(this.deltaTime);
                r.next || this._cancelIfNeeded();
              } else this.deltaTime = this.deltaMS = this.elapsedMS = 0;
              this.lastTime = t;
            }),
            Object.defineProperty(t.prototype, "FPS", {
              get: function () {
                return 1e3 / this.elapsedMS;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "minFPS", {
              get: function () {
                return 1e3 / this._maxElapsedMS;
              },
              set: function (t) {
                var e = Math.min(
                  Math.max(0, Math.min(this.maxFPS, t)) / 1e3,
                  n.W0.TARGET_FPMS,
                );
                this._maxElapsedMS = 1 / e;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "maxFPS", {
              get: function () {
                return this._minElapsedMS
                  ? Math.round(1e3 / this._minElapsedMS)
                  : 0;
              },
              set: function (t) {
                if (0 === t) this._minElapsedMS = 0;
                else {
                  var e = Math.max(this.minFPS, t);
                  this._minElapsedMS = 1 / (e / 1e3);
                }
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t, "shared", {
              get: function () {
                if (!t._shared) {
                  var e = (t._shared = new t());
                  ((e.autoStart = !0), (e._protected = !0));
                }
                return t._shared;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t, "system", {
              get: function () {
                if (!t._system) {
                  var e = (t._system = new t());
                  ((e.autoStart = !0), (e._protected = !0));
                }
                return t._system;
              },
              enumerable: !1,
              configurable: !0,
            }),
            t
          );
        })(),
        h = (function () {
          function t() {}
          return (
            (t.init = function (t) {
              var e = this;
              ((t = Object.assign({ autoStart: !0, sharedTicker: !1 }, t)),
                Object.defineProperty(this, "ticker", {
                  set: function (t) {
                    (this._ticker && this._ticker.remove(this.render, this),
                      (this._ticker = t),
                      t && t.add(this.render, this, r.LOW));
                  },
                  get: function () {
                    return this._ticker;
                  },
                }),
                (this.stop = function () {
                  e._ticker.stop();
                }),
                (this.start = function () {
                  e._ticker.start();
                }),
                (this._ticker = null),
                (this.ticker = t.sharedTicker ? a.shared : new a()),
                t.autoStart && this.start());
            }),
            (t.destroy = function () {
              if (this._ticker) {
                var t = this._ticker;
                ((this.ticker = null), t.destroy());
              }
            }),
            (t.extension = o.A.Application),
            t
          );
        })();
    },
  },
]);
