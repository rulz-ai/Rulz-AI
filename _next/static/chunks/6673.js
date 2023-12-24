"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[6673], {
    72201: function(e, t, r) {
        r.d(t, {
            Z: function() {
                return l
            }
        });
        var n = r(24421)
          , s = r(28734)
          , o = r(51516);
        function i(e) {
            (0,
            o.Z)(1, arguments);
            var t = (0,
            s.Z)(e);
            return t.setHours(0, 0, 0, 0),
            t
        }
        function l(e, t) {
            (0,
            o.Z)(2, arguments);
            var r = i(e)
              , s = i(t);
            return Math.round((r.getTime() - (0,
            n.Z)(r) - (s.getTime() - (0,
            n.Z)(s))) / 864e5)
        }
    },
    26430: function(e, t, r) {
        r.d(t, {
            Z: function() {
                return o
            }
        });
        var n = r(28734)
          , s = r(51516);
        function o(e, t) {
            return (0,
            s.Z)(2, arguments),
            (0,
            n.Z)(e).getTime() - (0,
            n.Z)(t).getTime()
        }
    },
    84913: function(e, t, r) {
        r.d(t, {
            Z: function() {
                return o
            }
        });
        var n = r(28734)
          , s = r(51516);
        function o() {
            return function(e) {
                (0,
                s.Z)(1, arguments);
                var t = (0,
                n.Z)(e);
                return t.setHours(23, 59, 59, 999),
                t
            }(Date.now())
        }
    },
    44043: function(e, t, r) {
        r.d(t, {
            Z: function() {
                return o
            }
        });
        var n = r(28734)
          , s = r(51516);
        function o(e) {
            return (0,
            s.Z)(1, arguments),
            (0,
            n.Z)(e).getMonth()
        }
    },
    82187: function(e, t, r) {
        r.d(t, {
            Z: function() {
                return o
            }
        });
        var n = r(28734)
          , s = r(51516);
        function o(e) {
            return (0,
            s.Z)(1, arguments),
            (0,
            n.Z)(e).getFullYear()
        }
    },
    69262: function(e, t, r) {
        r.d(t, {
            Z: function() {
                return o
            }
        });
        var n = r(28734)
          , s = r(51516);
        function o(e) {
            return (0,
            s.Z)(1, arguments),
            function(e, t) {
                (0,
                s.Z)(2, arguments);
                var r = (0,
                n.Z)(e)
                  , o = (0,
                n.Z)(t);
                return r.getFullYear() === o.getFullYear()
            }(e, Date.now())
        }
    },
    31924: function(e, t, r) {
        r.r(t),
        r.d(t, {
            __N_SSP: function() {
                return er
            },
            default: function() {
                return en
            }
        });
        var n, s, o, i = r(35250), l = r(39324), a = r(10064), c = r(17944), u = r(8679), d = r(10721), p = r(70079), f = r(32004), m = r(94968), v = r(48133), x = r(42798), g = r(4337), h = r(15635), y = r(418), j = r(23211), b = r(21950), P = r(35265), N = r(30769), k = r(10943), z = r(80275), w = r(73960);
        r(25952);
        var S = r(15912)
          , T = r(18481)
          , M = r(47428)
          , Z = r(19841)
          , C = r(73040)
          , R = r.n(C)
          , E = r(21389)
          , F = r(42325)
          , _ = r(81547);
        function I() {
            var e = (0,
            g._)(["flex h-[42px] w-[42px] flex-shrink-0 items-center justify-center rounded-full border border-dashed\n", ""]);
            return I = function() {
                return e
            }
            ,
            e
        }
        function A(e) {
            var t, r, n = e.gizmoResource, s = null === (t = n.gizmo.vanity_metrics) || void 0 === t ? void 0 : t.num_conversations, o = null !== (r = n.gizmo.share_recipient) && void 0 !== r ? r : z.Zz.Private;
            return (0,
            i.jsxs)("div", {
                className: "flex gap-6",
                children: [o === z.Zz.Private && (0,
                i.jsx)(P.LX, {
                    className: "icon-sm"
                }), n.gizmo.share_recipient !== z.Zz.Private && null != s ? (0,
                i.jsxs)("div", {
                    className: "flex items-center gap-1",
                    children: [(0,
                    i.jsx)(P.M4, {
                        className: "icon-sm"
                    }), (0,
                    i.jsx)("div", {
                        children: (0,
                        w.Pk)(s)
                    })]
                }) : void 0]
            })
        }
        function G(e) {
            var t, r, n, s = e.gizmoResource, o = e.canRemoveRecent, l = (0,
            d.useRouter)(), a = (0,
            w.XX)(s), c = (0,
            b.Sg)(s), u = !!(null === (t = s.gizmo.tags) || void 0 === t ? void 0 : t.includes(z.U9.FirstParty));
            return (0,
            i.jsx)(L, {
                href: c ? (0,
                T.AA)(s.gizmo.id) : (0,
                b.m_)(s),
                icon: (0,
                i.jsx)(y.Z, {
                    isFirstParty: u,
                    src: null !== (r = null == s ? void 0 : s.gizmo.display.profile_picture_url) && void 0 !== r ? r : void 0,
                    className: "h-[42px] w-[42px] flex-shrink-0"
                }),
                title: s.gizmo.display.name || j.z,
                isDraft: c,
                description: null !== (n = s.gizmo.display.description) && void 0 !== n ? n : "",
                byline: a ? (0,
                i.jsx)(A, {
                    gizmoResource: s
                }) : (0,
                i.jsx)(F.ZP, {
                    gizmo: s
                }),
                buttons: (0,
                i.jsxs)(i.Fragment, {
                    children: [a && (0,
                    i.jsx)(v.z, {
                        color: "neutral",
                        onClick: function() {
                            l.push((0,
                            T.AA)(s.gizmo.id), void 0, {
                                shallow: !0
                            })
                        },
                        children: "Edit"
                    }), (0,
                    i.jsx)(U, {
                        gizmoResource: s,
                        isOwner: a,
                        canRemoveRecent: o
                    })]
                })
            })
        }
        function O() {
            return (0,
            i.jsx)("span", {
                className: "rounded-full bg-blue-100 px-1.5 py-0.5 text-[10px] font-medium text-blue-600",
                children: "Beta"
            })
        }
        (s || (s = {})).Grid1 = "grid-1",
        (n = o || (o = {})).Enabled = "enabled",
        n.ComingSoon = "coming-soon";
        var D = E.Z.div(I(), function(e) {
            return e.$disabled ? "" : "border-black bg-white dark:border-gray-500 dark:bg-gray-700"
        });
        function B(e) {
            var t = e.type
              , r = (0,
            T.J8)()
              , n = t === o.ComingSoon;
            return (0,
            i.jsx)(h.E, {
                disabled: !n,
                label: "GPT creation will be available in the coming weeks",
                children: (0,
                i.jsx)(L, {
                    href: r,
                    disabled: n,
                    icon: (0,
                    i.jsx)(D, {
                        $disabled: n,
                        children: (0,
                        i.jsx)(P.Ro, {
                            className: "".concat(n ? "opacity-30" : "")
                        })
                    }),
                    title: (0,
                    i.jsxs)("div", {
                        className: "flex items-center gap-1",
                        children: ["Create a GPT ", (0,
                        i.jsx)(O, {})]
                    }),
                    description: "Customize a version of ChatGPT for a specific purpose",
                    byline: n ? (0,
                    i.jsx)("div", {
                        className: "flex items-center justify-end",
                        children: (0,
                        i.jsx)("div", {
                            className: "flex items-center",
                            children: "Coming soon"
                        })
                    }) : void 0
                })
            })
        }
        function L(e) {
            var t = e.href
              , r = e.icon
              , n = e.title
              , s = e.isDraft
              , o = e.description
              , l = e.byline
              , a = e.buttons
              , c = e.disabled
              , u = (0,
            Z.default)("flex items-center border-t border-gray-100 px-2 py-4", c ? "" : "hover:bg-gray-50", "dark:border-gray-700 dark:hover:bg-transparent")
              , d = (0,
            i.jsxs)(i.Fragment, {
                children: [(0,
                i.jsxs)("div", {
                    className: "flex w-3/5 items-center",
                    children: [r, (0,
                    i.jsxs)("div", {
                        className: (0,
                        Z.default)("grow pl-4 pr-9 leading-tight", c ? "opacity-50" : "hover:cursor-pointer"),
                        children: [(0,
                        i.jsxs)("div", {
                            className: "flex items-center gap-1",
                            children: [(0,
                            i.jsx)("span", {
                                className: "font-semibold",
                                children: n
                            }), void 0 !== s && s && (0,
                            i.jsx)(h.u, {
                                label: "Draft",
                                className: "flex justify-center",
                                side: "top",
                                children: (0,
                                i.jsx)("div", {
                                    className: "m-1.5 inline-block h-1.5 w-1.5 rounded-full bg-gray-200 dark:bg-gray-800"
                                })
                            })]
                        }), (0,
                        i.jsx)("div", {
                            className: "overflow-hidden text-ellipsis text-sm line-clamp-2",
                            children: o
                        })]
                    })]
                }), null != l && (0,
                i.jsx)("div", {
                    className: "flex-1 text-ellipsis text-sm text-gray-500",
                    children: l
                }), null != a && (0,
                i.jsx)("div", {
                    onClick: function(e) {
                        e.preventDefault()
                    },
                    className: "flex h-9 shrink-0 justify-end gap-2 font-medium md:w-[100px]",
                    children: a
                })]
            });
            return c ? (0,
            i.jsx)("span", {
                className: u,
                children: d
            }) : (0,
            i.jsx)(R(), {
                className: u,
                href: t,
                shallow: !0,
                children: d
            })
        }
        function U(e) {
            var t = e.gizmoResource
              , r = e.isOwner
              , n = e.canRemoveRecent
              , s = (0,
            a._)((0,
            p.useState)(!1), 2)
              , o = s[0]
              , l = s[1];
            return r || n ? (0,
            i.jsxs)(i.Fragment, {
                children: [(0,
                i.jsxs)(M.fC, {
                    children: [(0,
                    i.jsx)(M.xz, {
                        asChild: !0,
                        children: (0,
                        i.jsx)(v.z, {
                            color: "neutral",
                            children: (0,
                            i.jsx)(P.Yr, {
                                className: "icon-md"
                            })
                        })
                    }), (0,
                    i.jsx)(M.Uv, {
                        children: (0,
                        i.jsxs)(M.VY, {
                            className: "min-w-[180px] max-w-xs rounded-lg border border-gray-100 bg-token-surface-primary py-1.5 shadow-lg dark:border-gray-700",
                            side: "top",
                            align: "end",
                            sideOffset: 6,
                            onClick: function(e) {
                                e.preventDefault()
                            },
                            children: [r ? (0,
                            i.jsxs)(k.UA, {
                                color: "danger",
                                onClick: function() {
                                    l(!0)
                                },
                                children: [(0,
                                i.jsx)(P.a_, {
                                    className: "icon-md"
                                }), "Delete GPT"]
                            }) : (0,
                            i.jsx)(i.Fragment, {}), n && (0,
                            i.jsx)(k.UA, {
                                onClick: function() {
                                    N.U.removeFromRecent(t.gizmo.id)
                                },
                                children: "Remove from Recent"
                            })]
                        })
                    })]
                }), o && (0,
                i.jsx)(S.h, {
                    children: (0,
                    i.jsx)(_.b, {
                        gizmoId: t.gizmo.id,
                        onSuccess: function() {
                            l(!1)
                        },
                        onClose: function() {
                            l(!1)
                        }
                    })
                })]
            }) : null
        }
        var $ = r(87607)
          , Y = r(23234);
        function q() {
            var e, t = (0,
            c.$T)(), r = (0,
            d.useRouter)(), n = (0,
            b.z5)(), s = n.data, l = n.isLoading, a = (0,
            Y.Jq)();
            if ((0,
            u.yx)({
                resetThreadAction: function() {
                    r.push("/")
                }
            }),
            t)
                return null;
            var p = null !== (e = null == s ? void 0 : s.cuts.map(function(e) {
                return {
                    cutId: e.info.id,
                    title: e.info.title,
                    items: e.list.items,
                    cursor: e.list.cursor
                }
            })) && void 0 !== e ? e : [];
            return p.some(function(e) {
                return "mine" === e.cutId
            }) || p.unshift({
                cutId: "mine",
                title: "My GPTs",
                items: [],
                cursor: null
            }),
            (0,
            i.jsx)("div", {
                className: "mx-auto max-w-3xl px-4 py-12",
                children: l ? (0,
                i.jsx)("div", {
                    className: "flex justify-center",
                    children: (0,
                    i.jsx)(x.Z, {})
                }) : p.map(function(e) {
                    return (0,
                    i.jsx)(K, {
                        cutId: e.cutId,
                        title: e.title,
                        items: e.items,
                        cursor: e.cursor,
                        createRowType: "mine" == e.cutId ? a ? o.Enabled : o.ComingSoon : void 0,
                        canRemoveRecent: "recent" === e.cutId
                    }, e.cutId)
                })
            })
        }
        function K(e) {
            var t = e.cutId
              , r = e.title
              , n = e.items
              , s = e.cursor
              , o = e.canRemoveRecent
              , l = e.createRowType;
            return (0,
            i.jsxs)($.b1, {
                title: r,
                children: [null != l && (0,
                i.jsx)(B, {
                    type: l
                }), n.map(function(e) {
                    return (0,
                    i.jsx)(G, {
                        gizmoResource: e.resource,
                        canRemoveRecent: o
                    }, e.resource.gizmo.id)
                }), null != s ? (0,
                i.jsx)(H, {
                    cutId: t,
                    cursor: s,
                    fetchOnMount: 0 === n.length
                }) : (0,
                i.jsx)("div", {
                    className: "h-px bg-gray-100 dark:bg-gray-700"
                })]
            })
        }
        function H(e) {
            var t = e.cutId
              , r = e.cursor
              , n = e.fetchOnMount
              , s = (0,
            a._)((0,
            p.useState)(n), 2)
              , o = s[0]
              , c = s[1]
              , u = (0,
            b.Fi)(t, 8, r, o)
              , d = u.data
              , m = u.hasNextPage
              , x = u.fetchNextPage
              , g = u.isLoading;
            return (0,
            i.jsxs)("div", {
                children: [(0,
                i.jsx)("div", {
                    children: null == d ? void 0 : d.pages.flatMap(function(e) {
                        return e.list.items.map(function(e) {
                            var t = e.resource;
                            return (0,
                            i.jsx)(G, {
                                gizmoResource: t
                            }, t.gizmo.id)
                        })
                    })
                }), !o || m || g ? (0,
                i.jsx)(v.z, {
                    color: "neutral",
                    onClick: function() {
                        o ? x() : c(!0)
                    },
                    loading: g,
                    className: "w-full",
                    children: (0,
                    i.jsx)(f.Z, (0,
                    l._)({}, J.discoveryLoadMore))
                }) : null]
            })
        }
        var J = (0,
        m.vU)({
            discoveryLoadMore: {
                id: "gizmo.discovery.loadMore",
                defaultMessage: "Load more",
                description: "Button label for loading more GPTs"
            }
        })
          , V = r(95413)
          , W = r(4551)
          , Q = r(97218);
        function X(e) {
            var t = e.children
              , r = (0,
            d.useRouter)()
              , n = (0,
            c.$T)()
              , s = (0,
            Y.te)()
              , o = (0,
            Y.Ml)()
              , l = (0,
            Y.Og)()
              , a = (0,
            c.WY)()
              , u = (0,
            c.ec)(c.F_.isBusinessWorkspace);
            return ((0,
            Q.f)(n || !1 !== s),
            void 0 === l) ? null : o && !0 === l ? (0,
            i.jsxs)("div", {
                children: [t, (0,
                i.jsx)("div", {
                    className: "fixed bottom-3 right-3",
                    children: (0,
                    i.jsx)(V.Z, {})
                })]
            }) : !s && u ? (0,
            i.jsx)(ee, {
                button: (0,
                i.jsx)(v.z, {
                    onClick: function() {
                        return r.push("/")
                    },
                    children: "Continue to ChatGPT"
                }),
                children: "GPTs are gradually rolling out, check back later"
            }) : s && !a ? (0,
            i.jsx)(ee, {
                button: (0,
                i.jsx)(v.z, {
                    onClick: function() {
                        return (0,
                        W.MG)()
                    },
                    children: "Upgrade to ChatGPT Plus"
                }),
                children: "GPTs are gradually rolling out to Plus users"
            }) : null
        }
        function ee(e) {
            var t = e.children
              , r = e.button;
            return (0,
            i.jsx)("div", {
                className: "flex h-full w-full items-center justify-center",
                children: (0,
                i.jsxs)("div", {
                    className: "flex max-w-sm flex-col gap-4 p-6 text-center",
                    children: [(0,
                    i.jsx)("h2", {
                        children: t
                    }), (0,
                    i.jsx)("div", {
                        className: "m-auto",
                        children: r
                    })]
                })
            })
        }
        var et = r(77527)
          , er = !0;
        function en() {
            return (0,
            i.jsx)(et.Z, {
                children: (0,
                i.jsx)(X, {
                    children: (0,
                    i.jsx)(q, {})
                })
            })
        }
    },
    95413: function(e, t, r) {
        r.d(t, {
            Z: function() {
                return P
            }
        });
        var n = r(39324)
          , s = r(4337)
          , o = r(35250)
          , i = r(7813)
          , l = r(55548)
          , a = r(17944)
          , c = r(54636)
          , u = r(42780)
          , d = r(38574)
          , p = r(19841)
          , f = r(1454)
          , m = r(32004)
          , v = r(94968)
          , x = r(21389)
          , g = r(31731)
          , h = r(72290);
        function y() {
            var e = (0,
            s._)(["flex px-3 min-h-[44px] py-1 items-center gap-3 transition-colors duration-200 dark:text-white cursor-pointer text-sm"]);
            return y = function() {
                return e
            }
            ,
            e
        }
        var j = x.Z.a(y());
        function b(e) {
            var t = e.onClick
              , r = e.href
              , n = e.target
              , s = e.children;
            return (0,
            o.jsx)(i.v.Item, {
                children: function(e) {
                    var i = e.active;
                    return (0,
                    o.jsx)(j, {
                        as: void 0 !== r ? "a" : "button",
                        onClick: t,
                        href: r,
                        target: n,
                        className: (0,
                        p.default)(i ? "bg-gray-100 dark:bg-gray-800" : "hover:bg-gray-100 dark:hover:bg-gray-800"),
                        children: s
                    })
                }
            })
        }
        function P() {
            var e = (0,
            a.aF)();
            return (0,
            o.jsxs)(i.v, {
                as: "div",
                className: "group relative",
                children: [(0,
                o.jsx)(i.v.Button, {
                    className: "flex items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-gray-600 dark:border-white/10 dark:bg-white/10 dark:text-gray-200",
                    children: (0,
                    o.jsx)("div", {
                        className: "flex h-6 w-6 items-center justify-center text-xs",
                        children: "?"
                    })
                }), (0,
                o.jsx)(g.m, {
                    children: (0,
                    o.jsxs)(i.v.Items, {
                        className: "absolute bottom-full right-0 z-20 mb-2 w-full min-w-[175px] overflow-hidden rounded-md bg-gray-50 pb-1.5 pt-1 outline-none dark:bg-gray-950",
                        children: [e && (0,
                        o.jsx)(b, {
                            onClick: function() {
                                (0,
                                d.S)(null == e ? void 0 : e.id).then(function() {
                                    h.m.success("Copied your User ID to clipboard")
                                })
                            },
                            children: (0,
                            o.jsx)("span", {
                                className: "truncate text-xs text-black/20 dark:text-white/30",
                                children: null == e ? void 0 : e.email
                            })
                        }), (0,
                        o.jsxs)(b, {
                            as: "a",
                            href: "https://pandoranext.com",
                            target: "_blank",
                            onClick: function() {
                                c.A.logEvent(u.M.clickFaqLink)
                            },
                            children: [(0,
                            o.jsx)(f.AlO, {
                                className: "icon-sm"
                            }), (0,
                            o.jsx)("span", {
                                className: "text-xs",
                                children: (0,
                                o.jsx)(m.Z, (0,
                                n._)({}, N.helpAndFaq))
                            })]
                        }), !1 && (0,
                        o.jsxs)(b, {
                            as: "a",
                            href: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
                            target: "_blank",
                            children: [(0,
                            o.jsx)(f.AlO, {
                                className: "icon-sm"
                            }), (0,
                            o.jsx)("span", {
                                className: "text-xs",
                                children: (0,
                                o.jsx)(m.Z, (0,
                                n._)({}, N.releaseNotes))
                            })]
                        }), !1 && (0,
                        o.jsxs)(b, {
                            as: "a",
                            href: "https://openai.com/policies",
                            target: "_blank",
                            onClick: function() {
                                c.A.logEvent(u.M.clickPrivacyPolicy)
                            },
                            children: [(0,
                            o.jsx)(f.AlO, {
                                className: "icon-sm"
                            }), (0,
                            o.jsx)("span", {
                                className: "text-xs",
                                children: (0,
                                o.jsx)(m.Z, (0,
                                n._)({}, N.termsAndPolicies))
                            })]
                        }), (0,
                        o.jsxs)(b, {
                            onClick: function() {
                                l.vm.openModal(l.B.KeyboardActions)
                            },
                            children: [(0,
                            o.jsx)(f.aCJ, {
                                className: "icon-sm"
                            }), (0,
                            o.jsx)("span", {
                                className: "text-xs",
                                children: (0,
                                o.jsx)(m.Z, (0,
                                n._)({}, N.keyboardShortcutsMenu))
                            })]
                        })]
                    })
                })]
            })
        }
        var N = (0,
        v.vU)({
            helpAndFaq: {
                id: "thread.helpAndFaq",
                defaultMessage: "About PandoraNext",
                description: "About menu item"
            },
            releaseNotes: {
                id: "thread.releaseNotes",
                defaultMessage: "Release notes",
                description: "Release notes menu item"
            },
            termsAndPolicies: {
                id: "thread.termsAndPolicies",
                defaultMessage: "Terms & policies",
                description: "Terms & Policies menu item"
            },
            keyboardShortcutsMenu: {
                id: "thread.keyboardShortcutsMenu",
                defaultMessage: "Keyboard shortcuts",
                description: "Keyboard shortcuts menu item"
            }
        })
    },
    87607: function(e, t, r) {
        r.d(t, {
            fN: function() {
                return eu
            },
            Uv: function() {
                return ed
            },
            b1: function() {
                return ej
            }
        });
        var n, s, o = r(39324), i = r(10064), l = r(4337), a = r(35250), c = r(48133), u = r(21950), d = r(10943), p = r(80275), f = r(7171), m = r(42798), v = r(18481), x = r(70079), g = r(78983), h = r(4911), y = r(14699), j = r(58194), b = r(86499), P = r(28595), N = r(29787), k = r(37068), z = r(19992), w = r(53315), S = r(52327), T = r(46789), M = r(48442), Z = r(98992), C = r(17575), R = r(70794), E = ((n = E || {})[n.Open = 0] = "Open",
        n[n.Closed = 1] = "Closed",
        n), F = ((s = F || {})[s.TogglePopover = 0] = "TogglePopover",
        s[s.ClosePopover = 1] = "ClosePopover",
        s[s.SetButton = 2] = "SetButton",
        s[s.SetButtonId = 3] = "SetButtonId",
        s[s.SetPanel = 4] = "SetPanel",
        s[s.SetPanelId = 5] = "SetPanelId",
        s);
        let _ = {
            0: e=>({
                ...e,
                popoverState: (0,
                g.E)(e.popoverState, {
                    0: 1,
                    1: 0
                })
            }),
            1: e=>1 === e.popoverState ? e : {
                ...e,
                popoverState: 1
            },
            2: (e,t)=>e.button === t.button ? e : {
                ...e,
                button: t.button
            },
            3: (e,t)=>e.buttonId === t.buttonId ? e : {
                ...e,
                buttonId: t.buttonId
            },
            4: (e,t)=>e.panel === t.panel ? e : {
                ...e,
                panel: t.panel
            },
            5: (e,t)=>e.panelId === t.panelId ? e : {
                ...e,
                panelId: t.panelId
            }
        }
          , I = (0,
        x.createContext)(null);
        function A(e) {
            let t = (0,
            x.useContext)(I);
            if (null === t) {
                let t = Error(`<${e} /> is missing a parent <Popover /> component.`);
                throw Error.captureStackTrace && Error.captureStackTrace(t, A),
                t
            }
            return t
        }
        I.displayName = "PopoverContext";
        let G = (0,
        x.createContext)(null);
        function O(e) {
            let t = (0,
            x.useContext)(G);
            if (null === t) {
                let t = Error(`<${e} /> is missing a parent <Popover /> component.`);
                throw Error.captureStackTrace && Error.captureStackTrace(t, O),
                t
            }
            return t
        }
        G.displayName = "PopoverAPIContext";
        let D = (0,
        x.createContext)(null);
        function B() {
            return (0,
            x.useContext)(D)
        }
        D.displayName = "PopoverGroupContext";
        let L = (0,
        x.createContext)(null);
        function U(e, t) {
            return (0,
            g.E)(t.type, _, e, t)
        }
        L.displayName = "PopoverPanelContext";
        let $ = (0,
        h.yV)(function(e, t) {
            var r;
            let n = `headlessui-popover-button-${(0,
            j.M)()}`
              , s = `headlessui-popover-panel-${(0,
            j.M)()}`
              , o = (0,
            x.useRef)(null)
              , i = (0,
            y.T)(t, (0,
            y.h)(e=>{
                o.current = e
            }
            ))
              , l = (0,
            x.useReducer)(U, {
                popoverState: 1,
                button: null,
                buttonId: n,
                panel: null,
                panelId: s,
                beforePanelSentinel: (0,
                x.createRef)(),
                afterPanelSentinel: (0,
                x.createRef)()
            })
              , [{popoverState: a, button: c, panel: u, beforePanelSentinel: d, afterPanelSentinel: p},f] = l
              , m = (0,
            T.i)(null != (r = o.current) ? r : c);
            (0,
            x.useEffect)(()=>f({
                type: 3,
                buttonId: n
            }), [n, f]),
            (0,
            x.useEffect)(()=>f({
                type: 5,
                panelId: s
            }), [s, f]);
            let v = (0,
            x.useMemo)(()=>{
                if (!c || !u)
                    return !1;
                for (let e of document.querySelectorAll("body > *"))
                    if (Number(null == e ? void 0 : e.contains(c)) ^ Number(null == e ? void 0 : e.contains(u)))
                        return !0;
                return !1
            }
            , [c, u])
              , b = (0,
            x.useMemo)(()=>({
                buttonId: n,
                panelId: s,
                close: ()=>f({
                    type: 1
                })
            }), [n, s, f])
              , P = B()
              , z = null == P ? void 0 : P.registerPopover
              , S = (0,
            C.z)(()=>{
                var e;
                return null != (e = null == P ? void 0 : P.isFocusWithinPopoverGroup()) ? e : (null == m ? void 0 : m.activeElement) && ((null == c ? void 0 : c.contains(m.activeElement)) || (null == u ? void 0 : u.contains(m.activeElement)))
            }
            );
            (0,
            x.useEffect)(()=>null == z ? void 0 : z(b), [z, b]),
            (0,
            M.O)(null == m ? void 0 : m.defaultView, "focus", e=>{
                var t, r, n, s;
                0 === a && (S() || !c || !u || null != (r = null == (t = d.current) ? void 0 : t.contains) && r.call(t, e.target) || null != (s = null == (n = p.current) ? void 0 : n.contains) && s.call(n, e.target) || f({
                    type: 1
                }))
            }
            , !0),
            (0,
            w.O)([c, u], (e,t)=>{
                f({
                    type: 1
                }),
                (0,
                N.sP)(t, N.tJ.Loose) || (e.preventDefault(),
                null == c || c.focus())
            }
            , 0 === a);
            let Z = (0,
            C.z)(e=>{
                f({
                    type: 1
                });
                let t = e ? e instanceof HTMLElement ? e : "current"in e && e.current instanceof HTMLElement ? e.current : c : c;
                null == t || t.focus()
            }
            )
              , R = (0,
            x.useMemo)(()=>({
                close: Z,
                isPortalled: v
            }), [Z, v])
              , E = (0,
            x.useMemo)(()=>({
                open: 0 === a,
                close: Z
            }), [a, Z]);
            return x.createElement(I.Provider, {
                value: l
            }, x.createElement(G.Provider, {
                value: R
            }, x.createElement(k.up, {
                value: (0,
                g.E)(a, {
                    0: k.ZM.Open,
                    1: k.ZM.Closed
                })
            }, (0,
            h.sY)({
                ourProps: {
                    ref: i
                },
                theirProps: e,
                slot: E,
                defaultTag: "div",
                name: "Popover"
            }))))
        })
          , Y = (0,
        h.yV)(function(e, t) {
            let[r,n] = A("Popover.Button")
              , {isPortalled: s} = O("Popover.Button")
              , o = (0,
            x.useRef)(null)
              , i = `headlessui-focus-sentinel-${(0,
            j.M)()}`
              , l = B()
              , a = null == l ? void 0 : l.closeOthers
              , c = (0,
            x.useContext)(L)
              , u = null !== c && c === r.panelId
              , d = (0,
            y.T)(o, t, u ? null : e=>n({
                type: 2,
                button: e
            }))
              , p = (0,
            y.T)(o, t)
              , f = (0,
            T.i)(o)
              , m = (0,
            C.z)(e=>{
                var t, s, i;
                if (u) {
                    if (1 === r.popoverState)
                        return;
                    switch (e.key) {
                    case b.R.Space:
                    case b.R.Enter:
                        e.preventDefault(),
                        null == (s = (t = e.target).click) || s.call(t),
                        n({
                            type: 1
                        }),
                        null == (i = r.button) || i.focus()
                    }
                } else
                    switch (e.key) {
                    case b.R.Space:
                    case b.R.Enter:
                        e.preventDefault(),
                        e.stopPropagation(),
                        1 === r.popoverState && (null == a || a(r.buttonId)),
                        n({
                            type: 0
                        });
                        break;
                    case b.R.Escape:
                        if (0 !== r.popoverState)
                            return null == a ? void 0 : a(r.buttonId);
                        if (!o.current || (null == f ? void 0 : f.activeElement) && !o.current.contains(f.activeElement))
                            return;
                        e.preventDefault(),
                        e.stopPropagation(),
                        n({
                            type: 1
                        })
                    }
            }
            )
              , v = (0,
            C.z)(e=>{
                u || e.key === b.R.Space && e.preventDefault()
            }
            )
              , k = (0,
            C.z)(t=>{
                var s, o;
                (0,
                P.P)(t.currentTarget) || e.disabled || (u ? (n({
                    type: 1
                }),
                null == (s = r.button) || s.focus()) : (t.preventDefault(),
                t.stopPropagation(),
                1 === r.popoverState && (null == a || a(r.buttonId)),
                n({
                    type: 0
                }),
                null == (o = r.button) || o.focus()))
            }
            )
              , w = (0,
            C.z)(e=>{
                e.preventDefault(),
                e.stopPropagation()
            }
            )
              , S = 0 === r.popoverState
              , M = (0,
            x.useMemo)(()=>({
                open: S
            }), [S])
              , E = (0,
            z.f)(e, o)
              , F = u ? {
                ref: p,
                type: E,
                onKeyDown: m,
                onClick: k
            } : {
                ref: d,
                id: r.buttonId,
                type: E,
                "aria-expanded": e.disabled ? void 0 : 0 === r.popoverState,
                "aria-controls": r.panel ? r.panelId : void 0,
                onKeyDown: m,
                onKeyUp: v,
                onClick: k,
                onMouseDown: w
            }
              , _ = (0,
            R.l)()
              , I = (0,
            C.z)(()=>{
                let e = r.panel;
                e && (0,
                g.E)(_.current, {
                    [R.N.Forwards]: ()=>(0,
                    N.jA)(e, N.TO.First),
                    [R.N.Backwards]: ()=>(0,
                    N.jA)(e, N.TO.Last)
                })
            }
            );
            return x.createElement(x.Fragment, null, (0,
            h.sY)({
                ourProps: F,
                theirProps: e,
                slot: M,
                defaultTag: "button",
                name: "Popover.Button"
            }), S && !u && s && x.createElement(Z._, {
                id: i,
                features: Z.A.Focusable,
                as: "button",
                type: "button",
                onFocus: I
            }))
        })
          , q = h.AN.RenderStrategy | h.AN.Static
          , K = (0,
        h.yV)(function(e, t) {
            let[{popoverState: r},n] = A("Popover.Overlay")
              , s = (0,
            y.T)(t)
              , o = `headlessui-popover-overlay-${(0,
            j.M)()}`
              , i = (0,
            k.oJ)()
              , l = null !== i ? i === k.ZM.Open : 0 === r
              , a = (0,
            C.z)(e=>{
                if ((0,
                P.P)(e.currentTarget))
                    return e.preventDefault();
                n({
                    type: 1
                })
            }
            )
              , c = (0,
            x.useMemo)(()=>({
                open: 0 === r
            }), [r]);
            return (0,
            h.sY)({
                ourProps: {
                    ref: s,
                    id: o,
                    "aria-hidden": !0,
                    onClick: a
                },
                theirProps: e,
                slot: c,
                defaultTag: "div",
                features: q,
                visible: l,
                name: "Popover.Overlay"
            })
        })
          , H = h.AN.RenderStrategy | h.AN.Static
          , J = Object.assign($, {
            Button: Y,
            Overlay: K,
            Panel: (0,
            h.yV)(function(e, t) {
                let {focus: r=!1, ...n} = e
                  , [s,o] = A("Popover.Panel")
                  , {close: i, isPortalled: l} = O("Popover.Panel")
                  , a = `headlessui-focus-sentinel-before-${(0,
                j.M)()}`
                  , c = `headlessui-focus-sentinel-after-${(0,
                j.M)()}`
                  , u = (0,
                x.useRef)(null)
                  , d = (0,
                y.T)(u, t, e=>{
                    o({
                        type: 4,
                        panel: e
                    })
                }
                )
                  , p = (0,
                T.i)(u)
                  , f = (0,
                k.oJ)()
                  , m = null !== f ? f === k.ZM.Open : 0 === s.popoverState
                  , v = (0,
                C.z)(e=>{
                    var t;
                    if (e.key === b.R.Escape) {
                        if (0 !== s.popoverState || !u.current || (null == p ? void 0 : p.activeElement) && !u.current.contains(p.activeElement))
                            return;
                        e.preventDefault(),
                        e.stopPropagation(),
                        o({
                            type: 1
                        }),
                        null == (t = s.button) || t.focus()
                    }
                }
                );
                (0,
                x.useEffect)(()=>{
                    var t;
                    e.static || 1 === s.popoverState && (null == (t = e.unmount) || t) && o({
                        type: 4,
                        panel: null
                    })
                }
                , [s.popoverState, e.unmount, e.static, o]),
                (0,
                x.useEffect)(()=>{
                    if (!r || 0 !== s.popoverState || !u.current)
                        return;
                    let e = null == p ? void 0 : p.activeElement;
                    u.current.contains(e) || (0,
                    N.jA)(u.current, N.TO.First)
                }
                , [r, u, s.popoverState]);
                let P = (0,
                x.useMemo)(()=>({
                    open: 0 === s.popoverState,
                    close: i
                }), [s, i])
                  , z = {
                    ref: d,
                    id: s.panelId,
                    onKeyDown: v,
                    onBlur: r && 0 === s.popoverState ? e=>{
                        var t, r, n, i, l;
                        let a = e.relatedTarget;
                        !a || !u.current || null != (t = u.current) && t.contains(a) || (o({
                            type: 1
                        }),
                        ((null == (n = null == (r = s.beforePanelSentinel.current) ? void 0 : r.contains) ? void 0 : n.call(r, a)) || (null == (l = null == (i = s.afterPanelSentinel.current) ? void 0 : i.contains) ? void 0 : l.call(i, a))) && a.focus({
                            preventScroll: !0
                        }))
                    }
                    : void 0,
                    tabIndex: -1
                }
                  , w = (0,
                R.l)()
                  , S = (0,
                C.z)(()=>{
                    let e = u.current;
                    e && (0,
                    g.E)(w.current, {
                        [R.N.Forwards]: ()=>{
                            (0,
                            N.jA)(e, N.TO.First)
                        }
                        ,
                        [R.N.Backwards]: ()=>{
                            var e;
                            null == (e = s.button) || e.focus({
                                preventScroll: !0
                            })
                        }
                    })
                }
                )
                  , M = (0,
                C.z)(()=>{
                    let e = u.current;
                    e && (0,
                    g.E)(w.current, {
                        [R.N.Forwards]: ()=>{
                            var e, t, r;
                            if (!s.button)
                                return;
                            let n = (0,
                            N.GO)()
                              , o = n.indexOf(s.button)
                              , i = n.slice(0, o + 1)
                              , l = [...n.slice(o + 1), ...i];
                            for (let n of l.slice())
                                if ((null == (t = null == (e = null == n ? void 0 : n.id) ? void 0 : e.startsWith) ? void 0 : t.call(e, "headlessui-focus-sentinel-")) || (null == (r = s.panel) ? void 0 : r.contains(n))) {
                                    let e = l.indexOf(n);
                                    -1 !== e && l.splice(e, 1)
                                }
                            (0,
                            N.jA)(l, N.TO.First, !1)
                        }
                        ,
                        [R.N.Backwards]: ()=>(0,
                        N.jA)(e, N.TO.Last)
                    })
                }
                );
                return x.createElement(L.Provider, {
                    value: s.panelId
                }, m && l && x.createElement(Z._, {
                    id: a,
                    ref: s.beforePanelSentinel,
                    features: Z.A.Focusable,
                    as: "button",
                    type: "button",
                    onFocus: S
                }), (0,
                h.sY)({
                    ourProps: z,
                    theirProps: n,
                    slot: P,
                    defaultTag: "div",
                    features: H,
                    visible: m,
                    name: "Popover.Panel"
                }), m && l && x.createElement(Z._, {
                    id: c,
                    ref: s.afterPanelSentinel,
                    features: Z.A.Focusable,
                    as: "button",
                    type: "button",
                    onFocus: M
                }))
            }),
            Group: (0,
            h.yV)(function(e, t) {
                let r = (0,
                x.useRef)(null)
                  , n = (0,
                y.T)(r, t)
                  , [s,o] = (0,
                x.useState)([])
                  , i = (0,
                C.z)(e=>{
                    o(t=>{
                        let r = t.indexOf(e);
                        if (-1 !== r) {
                            let e = t.slice();
                            return e.splice(r, 1),
                            e
                        }
                        return t
                    }
                    )
                }
                )
                  , l = (0,
                C.z)(e=>(o(t=>[...t, e]),
                ()=>i(e)))
                  , a = (0,
                C.z)(()=>{
                    var e;
                    let t = (0,
                    S.r)(r);
                    if (!t)
                        return !1;
                    let n = t.activeElement;
                    return !!(null != (e = r.current) && e.contains(n)) || s.some(e=>{
                        var r, s;
                        return (null == (r = t.getElementById(e.buttonId)) ? void 0 : r.contains(n)) || (null == (s = t.getElementById(e.panelId)) ? void 0 : s.contains(n))
                    }
                    )
                }
                )
                  , c = (0,
                C.z)(e=>{
                    for (let t of s)
                        t.buttonId !== e && t.close()
                }
                )
                  , u = (0,
                x.useMemo)(()=>({
                    registerPopover: l,
                    unregisterPopover: i,
                    isFocusWithinPopoverGroup: a,
                    closeOthers: c
                }), [l, i, a, c])
                  , d = (0,
                x.useMemo)(()=>({}), []);
                return x.createElement(D.Provider, {
                    value: u
                }, (0,
                h.sY)({
                    ourProps: {
                        ref: n
                    },
                    theirProps: e,
                    slot: d,
                    defaultTag: "div",
                    name: "Popover.Group"
                }))
            })
        });
        var V = r(19841)
          , W = r(73040)
          , Q = r.n(W)
          , X = r(10721)
          , ee = r(1454)
          , et = r(32004)
          , er = r(70671)
          , en = r(94968)
          , es = r(21389)
          , eo = r(31731)
          , ei = r(42325)
          , el = r(418)
          , ea = r(35265);
        function ec() {
            var e = (0,
            l._)(["pb-2 text-xs font-medium text-token-text-tertiary"]);
            return ec = function() {
                return e
            }
            ,
            e
        }
        function eu() {
            var e, t, r = (0,
            u.Fi)("featured_store", 6), n = r.data, s = r.isLoading, o = (0,
            u.Fi)("trending", 10), i = o.data, l = o.isLoading, c = o.hasNextPage, d = o.fetchNextPage;
            return s || l ? (0,
            a.jsx)("div", {
                className: "flex h-full w-full items-center justify-center",
                children: (0,
                a.jsx)(m.Z, {})
            }) : (0,
            a.jsxs)("div", {
                className: "mx-auto max-w-3xl px-4 py-12",
                children: [(0,
                a.jsx)(ep, {
                    items: null !== (e = null == n ? void 0 : n.pages.flatMap(function(e) {
                        return e.list.items
                    })) && void 0 !== e ? e : []
                }), (0,
                a.jsx)(em, {
                    items: null !== (t = null == i ? void 0 : i.pages.flatMap(function(e) {
                        return e.list.items
                    })) && void 0 !== t ? t : [],
                    hasNextPage: null != c && c,
                    fetchNextPage: d
                })]
            })
        }
        function ed() {
            var e = (0,
            v.AA)()
              , t = (0,
            X.useRouter)();
            return (0,
            a.jsxs)(d.QT, {
                className: "mx-auto flex max-w-3xl justify-center gap-2 whitespace-nowrap px-4",
                children: [(0,
                a.jsx)(ex, {
                    className: "flex-grow"
                }), (0,
                a.jsx)(c.z, {
                    color: "neutral",
                    onClick: function() {
                        t.push("/gpts/mine", void 0, {
                            shallow: !0
                        })
                    },
                    children: (0,
                    a.jsx)(et.Z, (0,
                    o._)({}, eb.discoveryMyGPTs))
                }), (0,
                a.jsxs)(c.z, {
                    color: "primary",
                    onClick: function() {
                        t.push(e, void 0, {
                            shallow: !0
                        })
                    },
                    children: [(0,
                    a.jsx)(ea.Ro, {
                        className: "icon-sm -mx-1"
                    }), (0,
                    a.jsx)(et.Z, (0,
                    o._)({}, eb.discoveryCreateGPT))]
                })]
            })
        }
        function ep(e) {
            var t = e.items
              , r = (0,
            er.Z)();
            return (0,
            a.jsx)(ej, {
                title: r.formatMessage(eb.discoveryFeaturedTitle),
                description: r.formatMessage(eb.discoveryFeaturedDescription),
                children: (0,
                a.jsx)("div", {
                    className: "grid grid-cols-1 gap-1 md:gap-2 lg:grid-cols-2 lg:gap-3",
                    children: t.map(function(e) {
                        return (0,
                        a.jsx)(ef, {
                            resource: e.resource
                        }, e.resource.gizmo.id)
                    })
                })
            })
        }
        function ef(e) {
            var t, r, n = e.resource;
            return (0,
            a.jsxs)(Q(), {
                href: (0,
                u.m_)(n),
                shallow: !0,
                className: "flex h-24 items-center gap-5 overflow-hidden rounded-xl bg-gray-50 px-7 py-8 dark:bg-gray-900 md:h-32 lg:h-36",
                children: [(0,
                a.jsx)(el.Z, {
                    isFirstParty: !!(null === (t = n.gizmo.tags) || void 0 === t ? void 0 : t.includes(p.U9.FirstParty)),
                    src: null !== (r = n.gizmo.display.profile_picture_url) && void 0 !== r ? r : void 0,
                    className: "h-16 w-16 flex-shrink-0 md:h-24 md:w-24"
                }), (0,
                a.jsxs)("div", {
                    className: "flex flex-col",
                    children: [(0,
                    a.jsx)("div", {
                        className: "font-medium line-clamp-1 md:text-lg",
                        children: n.gizmo.display.name
                    }), (0,
                    a.jsx)("span", {
                        className: "text-xs line-clamp-2 md:line-clamp-3",
                        children: n.gizmo.display.description
                    }), (0,
                    a.jsx)(ei.ZP, {
                        gizmo: n,
                        className: "mt-1 text-xs"
                    })]
                })]
            })
        }
        function em(e) {
            var t = e.items
              , r = e.hasNextPage
              , n = e.fetchNextPage
              , s = (0,
            er.Z)();
            return (0,
            a.jsxs)(ej, {
                title: s.formatMessage(eb.discoveryTrendingTitle),
                description: s.formatMessage(eb.discoveryTrendingDescription),
                children: [t.map(function(e, t) {
                    return (0,
                    a.jsx)(ev, {
                        resource: e.resource,
                        rank: t + 1
                    }, e.resource.gizmo.id)
                }), r && (0,
                a.jsx)(c.z, {
                    color: "neutral",
                    onClick: function() {
                        n()
                    },
                    className: "w-full",
                    children: (0,
                    a.jsx)(et.Z, (0,
                    o._)({}, eb.discoveryLoadMore))
                })]
            })
        }
        function ev(e) {
            var t, r, n = e.resource, s = e.rank;
            return (0,
            a.jsxs)(Q(), {
                href: (0,
                u.m_)(n),
                shallow: !0,
                className: "flex items-center gap-2.5 py-4 pl-6 md:py-5",
                children: [(0,
                a.jsx)("div", {
                    className: "w-8 flex-shrink-0 text-xl font-semibold",
                    children: s
                }), (0,
                a.jsxs)("div", {
                    className: "flex flex-grow gap-4",
                    children: [(0,
                    a.jsx)(el.Z, {
                        isFirstParty: !!(null === (t = n.gizmo.tags) || void 0 === t ? void 0 : t.includes(p.U9.FirstParty)),
                        src: null !== (r = n.gizmo.display.profile_picture_url) && void 0 !== r ? r : void 0,
                        className: "h-12 w-12 flex-shrink-0"
                    }), (0,
                    a.jsxs)("div", {
                        className: "flex flex-grow flex-col",
                        children: [(0,
                        a.jsx)("span", {
                            className: "font-medium line-clamp-2",
                            children: n.gizmo.display.name
                        }), (0,
                        a.jsx)("span", {
                            className: "text-xs line-clamp-3",
                            children: n.gizmo.display.description
                        })]
                    })]
                }), (0,
                a.jsx)(ei.ZP, {
                    gizmo: n,
                    className: "hidden flex-shrink-0 text-ellipsis whitespace-nowrap md:block"
                })]
            }, n.gizmo.id)
        }
        function ex(e) {
            var t = e.className
              , r = (0,
            er.Z)()
              , n = (0,
            i._)((0,
            x.useState)(""), 2)
              , s = n[0]
              , o = n[1]
              , l = (0,
            i._)((0,
            x.useState)(!1), 2)
              , c = l[0]
              , u = l[1];
            return (0,
            a.jsxs)(J, {
                as: "div",
                className: (0,
                V.default)("group relative", t),
                children: [(0,
                a.jsx)(ee.jRj, {
                    className: "pointer-none absolute left-3 top-3 mr-2 flex-shrink-0 text-gray-500",
                    size: 16
                }), (0,
                a.jsx)("input", {
                    className: (0,
                    V.default)("hover:dark-border-gray-500 z-10 w-full rounded-xl border border-gray-200 py-2 pl-9 pr-3 font-normal outline-0 dark:bg-gray-900", c ? "border-gray-300 dark:border-gray-900 dark:bg-gray-900" : "hover:border-gray-300 hover:bg-gray-50 dark:border-gray-600 hover:dark:border-gray-700"),
                    placeholder: r.formatMessage(eb.discoverySearch),
                    value: s,
                    onChange: function(e) {
                        return o(e.target.value)
                    },
                    onFocus: function() {
                        return u(!0)
                    },
                    onBlurCapture: function() {
                        return u(!1)
                    }
                }), (0,
                a.jsx)(eo.m, {
                    show: c,
                    children: (0,
                    a.jsx)(J.Panel, {
                        static: !0,
                        className: (0,
                        V.default)("absolute top-[calc(100%-10px)] w-full rounded-lg rounded-t-none border border-t-0 border-gray-300 bg-white p-4 dark:border-gray-900 dark:bg-gray-900"),
                        children: (0,
                        a.jsx)(eh, {
                            query: s
                        })
                    })
                })]
            })
        }
        var eg = es.Z.div(ec());
        function eh(e) {
            var t = e.query
              , r = (0,
            u.K9)(t)
              , n = r.data
              , s = r.isLoading
              , i = (0,
            u.Fi)("recent", 3)
              , l = i.data
              , c = i.isLoading;
            if (s)
                return (0,
                a.jsx)("div", {
                    children: (0,
                    a.jsx)(m.Z, {})
                });
            if (null == n || (null == n ? void 0 : n.items.length) === 0) {
                if (c)
                    return (0,
                    a.jsx)(m.Z, {});
                if (null != l) {
                    var d = l.pages.flatMap(function(e) {
                        return e.list.items
                    });
                    if (d.length > 0)
                        return (0,
                        a.jsxs)(a.Fragment, {
                            children: [(0,
                            a.jsx)(eg, {
                                children: (0,
                                a.jsx)(et.Z, (0,
                                o._)({}, eb.discoverySearchRecentlyUsed))
                            }), d.map(function(e) {
                                return (0,
                                a.jsx)(ey, {
                                    resource: e.resource
                                }, e.resource.gizmo.id)
                            })]
                        })
                }
                return (0,
                a.jsx)(f.Z, {
                    children: (0,
                    a.jsx)(et.Z, (0,
                    o._)({}, eb.discoveryNoResultsSearch))
                })
            }
            return (0,
            a.jsxs)(a.Fragment, {
                children: [(0,
                a.jsx)(eg, {
                    children: (0,
                    a.jsx)(et.Z, (0,
                    o._)({}, eb.discoverySearchResults))
                }), n.items.map(function(e) {
                    return (0,
                    a.jsx)(ey, {
                        resource: e
                    }, e.gizmo.id)
                })]
            })
        }
        function ey(e) {
            var t, r, n = e.resource;
            return (0,
            a.jsxs)(Q(), {
                href: (0,
                u.m_)(n),
                className: "flex gap-3 py-2",
                children: [(0,
                a.jsx)(el.Z, {
                    isFirstParty: !!(null === (t = n.gizmo.tags) || void 0 === t ? void 0 : t.includes(p.U9.FirstParty)),
                    src: null !== (r = n.gizmo.display.profile_picture_url) && void 0 !== r ? r : void 0,
                    className: "h-8 w-8"
                }), (0,
                a.jsxs)("div", {
                    className: "flex flex-col",
                    children: [(0,
                    a.jsx)("span", {
                        className: "text-sm font-medium",
                        children: n.gizmo.display.name
                    }), (0,
                    a.jsx)(ei.ZP, {
                        gizmo: n,
                        className: "text-xs"
                    })]
                })]
            })
        }
        function ej(e) {
            var t = e.title
              , r = e.description
              , n = e.className
              , s = e.children;
            return (0,
            a.jsxs)("div", {
                children: [(0,
                a.jsx)("div", {
                    className: "text-2xl font-bold",
                    children: t
                }), r && (0,
                a.jsx)("div", {
                    className: "text-token-text-tertiary",
                    children: r
                }), (0,
                a.jsx)("div", {
                    className: (0,
                    V.default)("mb-10 mt-4", n),
                    children: s
                })]
            })
        }
        var eb = (0,
        en.vU)({
            discoveryEmpty: {
                id: "gizmo.discovery.empty",
                defaultMessage: "Nothing to discover",
                description: "Label for empty discovery page"
            },
            discoveryNoResultsSearch: {
                id: "gizmo.discovery.search.empty",
                defaultMessage: "No results found",
                description: "Label for no search results"
            },
            discoverySearch: {
                id: "gizmo.discovery.search",
                defaultMessage: "Search all GPTs",
                description: "Placeholder for search input"
            },
            discoverySearchRecentlyUsed: {
                id: "gizmo.discovery.search.recentlyUsed",
                defaultMessage: "Recently Used",
                description: "Label for recently used section in search"
            },
            discoverySearchResults: {
                id: "gizmo.discovery.search.results",
                defaultMessage: "Search Results",
                description: "Label for search results section in search"
            },
            discoveryLoadMore: {
                id: "gizmo.discovery.loadMore",
                defaultMessage: "See more",
                description: "Button label for loading more GPTs"
            },
            discoveryMyGPTs: {
                id: "gizmo.discovery.myGPTs",
                defaultMessage: "My GPTs",
                description: "Label for my GPTs button"
            },
            discoveryCreateGPT: {
                id: "gizmo.discovery.createGPT",
                defaultMessage: "Create a GPT",
                description: "Label for create GPT button"
            },
            discoveryFeaturedTitle: {
                id: "gizmo.discovery.featured.title",
                defaultMessage: "Featured",
                description: "Title for featured section"
            },
            discoveryFeaturedDescription: {
                id: "gizmo.discovery.featured.description",
                defaultMessage: "Curated top picks from this week",
                description: "Description for featured section"
            },
            discoveryTrendingTitle: {
                id: "gizmo.discovery.trending.title",
                defaultMessage: "Trending",
                description: "Title for trending section"
            },
            discoveryTrendingDescription: {
                id: "gizmo.discovery.trending.description",
                defaultMessage: "Most popular GPTs by our community",
                description: "Description for trending section"
            }
        })
    },
    81547: function(e, t, r) {
        r.d(t, {
            b: function() {
                return u
            }
        });
        var n = r(21722)
          , s = r(38104)
          , o = r(35250)
          , i = r(94705)
          , l = r(7184)
          , a = r(21950)
          , c = r(72290);
        function u(e) {
            var t, r = e.gizmoId, u = e.onSuccess, d = e.onClose, p = (0,
            a.kb)(), f = (t = (0,
            n._)(function() {
                return (0,
                s.Jh)(this, function(e) {
                    switch (e.label) {
                    case 0:
                        return e.trys.push([0, 2, , 3]),
                        [4, p.mutateAsync({
                            gizmoId: r
                        })];
                    case 1:
                        return e.sent(),
                        u(),
                        [3, 3];
                    case 2:
                        return e.sent(),
                        c.m.danger("Failed to delete gizmo. Please try again."),
                        [3, 3];
                    case 3:
                        return [2]
                    }
                })
            }),
            function() {
                return t.apply(this, arguments)
            }
            );
            return (0,
            o.jsx)(l.Z, {
                isOpen: !0,
                onClose: d,
                type: "danger",
                title: "Delete GPT",
                primaryButton: (0,
                o.jsx)(i.ZP.Button, {
                    title: "Delete GPT",
                    color: "danger",
                    loading: p.isPending,
                    onClick: function() {
                        f()
                    }
                }),
                secondaryButton: (0,
                o.jsx)(i.ZP.Button, {
                    title: "Cancel",
                    color: "neutral",
                    onClick: d
                }),
                children: (0,
                o.jsx)("div", {
                    className: "text-sm",
                    children: "Are you sure you want to delete this GPT? This cannot be undone."
                })
            })
        }
    },
    77527: function(e, t, r) {
        r.d(t, {
            Z: function() {
                return c
            }
        });
        var n = r(35250)
          , s = r(40578)
          , o = r(14957)
          , i = r(4865)
          , l = r(10721)
          , a = r(41187);
        function c(e) {
            var t = e.children
              , r = (0,
            l.useRouter)();
            return (0,
            n.jsx)(i.Z, {
                showNavigation: !0,
                renderMobileHeaderRightContent: null,
                renderSidebar: (0,
                n.jsxs)(o.ZP, {
                    onNewThread: function() {
                        r.push("/")
                    },
                    children: [(0,
                    n.jsx)(a.Dy, {}), (0,
                    n.jsx)(s.Z, {
                        activeId: void 0,
                        onNewThread: function() {
                            r.push("/")
                        }
                    })]
                }),
                children: t
            })
        }
    },
    97218: function(e, t, r) {
        r.d(t, {
            f: function() {
                return l
            }
        });
        var n = r(18866)
          , s = r(10721)
          , o = r.n(s)
          , i = r(70079);
        function l(e) {
            (0,
            i.useEffect)(function() {
                e || o().replace((0,
                n.M5)(n.LT.NO_ACCESS), void 0, {
                    shallow: !0
                })
            }, [e])
        }
    }
}]);
