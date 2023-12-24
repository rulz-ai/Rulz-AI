(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[43], {
    80052: function(e, n, t) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/g/[gizmoId]", function() {
            return t(14294)
        }
        ])
    },
    14294: function(e, n, t) {
        "use strict";
        t.r(n),
        t.d(n, {
            __N_SSP: function() {
                return _
            },
            default: function() {
                return w
            }
        });
        var r = t(39324)
          , i = t(71209)
          , s = t(35250)
          , l = t(70079)
          , c = t(48133)
          , o = t(65484)
          , a = t(17424)
          , u = t(21950)
          , d = t(27573)
          , f = t(23234)
          , h = t(77527)
          , x = t(4551)
          , m = t(18866)
          , g = t(62682)
          , j = t(17944)
          , v = t(42786)
          , p = t(10721)
          , N = t.n(p)
          , _ = !0;
        function w(e) {
            var n = (0,
            p.useRouter)().query.gizmoId;
            switch (e.kind) {
            case "anon_gizmo":
                return (0,
                s.jsx)(a.X, {
                    gizmo: e.gizmo
                }, n);
            case "chat_page":
                return (0,
                l.createElement)(z, (0,
                i._)((0,
                r._)({}, e), {
                    key: n,
                    gizmoId: n
                }));
            default:
                (0,
                v.Z)(e)
            }
        }
        function z(e) {
            var n = (0,
            j.hz)().has(g.L0.GizmoUI)
              , t = (0,
            u.b9)(e.gizmoId)
              , c = t.data
              , a = t.error
              , d = (0,
            f.Og)();
            return ((0,
            l.useEffect)(function() {
                null == c && null != a && N().push((0,
                m.M5)(m.LT.GIZMO_NOT_FOUND))
            }, [c, a, d]),
            null != a && d) ? (0,
            s.jsx)(y, {}) : !1 === d ? n ? (0,
            s.jsx)(b, {
                gizmo: c
            }) : (0,
            s.jsx)(k, {
                gizmo: c
            }) : (0,
            l.createElement)(o.ZP, (0,
            i._)((0,
            r._)({}, e), {
                key: e.gizmoId
            }))
        }
        function y() {
            return (0,
            s.jsx)(h.Z, {
                children: (0,
                s.jsxs)("div", {
                    className: "flex h-full w-full flex-col items-center justify-center",
                    children: [(0,
                    s.jsx)("div", {
                        className: "font-bold",
                        children: "We're having trouble loading this GPT."
                    }), (0,
                    s.jsx)("div", {
                        children: "Please refresh the page, or try again later"
                    })]
                })
            })
        }
        function k(e) {
            var n = e.gizmo;
            return (0,
            s.jsx)(h.Z, {
                children: (0,
                s.jsx)("div", {
                    className: "flex h-full w-full items-center justify-center",
                    children: (0,
                    s.jsxs)("div", {
                        className: "flex max-w-lg flex-col gap-4 p-6 text-center",
                        children: [(0,
                        s.jsx)("div", {
                            className: "",
                            children: (0,
                            s.jsx)(d.r, {
                                gizmo: n,
                                isOwner: !1
                            })
                        }), (0,
                        s.jsxs)("div", {
                            className: "mx-4 mt-4 flex flex-col items-start gap-4 rounded-xl bg-token-surface-secondary p-4 dark:bg-token-surface-tertiary",
                            children: [(0,
                            s.jsxs)("div", {
                                className: "text-left font-normal",
                                children: ["Your access to", " ", (0,
                                s.jsx)("a", {
                                    className: "text-token-text-secondary",
                                    href: "https://openai.com/blog/introducing-gpts/",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children: "custom GPTs"
                                }), " ", "isn’t ready yet. We’re rolling this feature out over the coming days. Check back soon."]
                            }), (0,
                            s.jsx)("div", {
                                className: "flex w-full items-center justify-center gap-4",
                                children: (0,
                                s.jsx)(c.z, {
                                    className: "w-full",
                                    color: "neutral",
                                    onClick: function() {
                                        return N().push("/")
                                    },
                                    children: "Go to ChatGPT"
                                })
                            })]
                        })]
                    })
                })
            })
        }
        function b(e) {
            var n = e.gizmo;
            return (0,
            s.jsx)(h.Z, {
                children: (0,
                s.jsx)(d.r, {
                    gizmo: n,
                    isOwner: !1,
                    children: (0,
                    s.jsxs)(c.z, {
                        className: "mt-6",
                        onClick: function() {
                            return (0,
                            x.MG)()
                        },
                        children: ["Sign up for ChatGPT Plus to chat with ", null == n ? void 0 : n.gizmo.display.name]
                    })
                })
            })
        }
    },
    17424: function(e, n, t) {
        "use strict";
        t.d(n, {
            S: function() {
                return f
            },
            X: function() {
                return d
            }
        });
        var r = t(35250)
          , i = t(21950)
          , s = t(93778)
          , l = t(59904)
          , c = t(73040)
          , o = t.n(c)
          , a = t(42545)
          , u = t(27573);
        function d(e) {
            var n = e.gizmo
              , t = (0,
            i.i6)(n);
            return (0,
            r.jsxs)("div", {
                className: "flex h-full flex-col",
                children: [(0,
                r.jsx)(s.N, {
                    gizmo: n
                }), (0,
                r.jsx)(f, {
                    redirectUrl: t
                }), (0,
                r.jsx)("div", {
                    className: "flex grow flex-col items-center justify-center p-2",
                    children: (0,
                    r.jsx)(u.r, {
                        gizmo: n,
                        isOwner: !1,
                        isAnon: !0,
                        children: (0,
                        r.jsxs)("div", {
                            className: "mt-7 flex flex-col gap-4",
                            children: [(0,
                            r.jsx)(a.p, {
                                href: "/auth/login?next=".concat(t),
                                children: "Sign up to chat"
                            }), (0,
                            r.jsx)("div", {
                                className: "text-sm text-token-text-tertiary",
                                children: "Requires ChatGPT Plus"
                            })]
                        })
                    })
                })]
            })
        }
        function f(e) {
            var n = e.redirectUrl;
            return (0,
            r.jsxs)("div", {
                className: "flex items-center justify-between px-7 py-4",
                children: [(0,
                r.jsx)(h, {}), (0,
                r.jsx)(o(), {
                    href: null != n ? "/auth/login?next=".concat(n) : "/auth/login",
                    className: "flex items-center rounded-lg bg-green-600 px-4 py-2 font-medium text-white transition hover:opacity-70",
                    children: "Sign up"
                })]
            })
        }
        function h() {
            return (0,
            r.jsx)(o(), {
                href: "/",
                children: (0,
                r.jsx)(l.nI, {
                    className: "h-8 w-8"
                })
            })
        }
    },
    77527: function(e, n, t) {
        "use strict";
        t.d(n, {
            Z: function() {
                return a
            }
        });
        var r = t(35250)
          , i = t(40578)
          , s = t(14957)
          , l = t(4865)
          , c = t(10721)
          , o = t(41187);
        function a(e) {
            var n = e.children
              , t = (0,
            c.useRouter)();
            return (0,
            r.jsx)(l.Z, {
                showNavigation: !0,
                renderMobileHeaderRightContent: null,
                renderSidebar: (0,
                r.jsxs)(s.ZP, {
                    onNewThread: function() {
                        t.push("/")
                    },
                    children: [(0,
                    r.jsx)(o.Dy, {}), (0,
                    r.jsx)(i.Z, {
                        activeId: void 0,
                        onNewThread: function() {
                            t.push("/")
                        }
                    })]
                }),
                children: n
            })
        }
    }
}, function(e) {
    e.O(0, [1e3, 746, 2218, 816, 4865, 7039, 3140, 1771, 1522, 5484, 9774, 2888, 179], function() {
        return e(e.s = 80052)
    }),
    _N_E = e.O()
}
]);
