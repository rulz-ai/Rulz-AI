"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[3140], {
    31731: function(e, t, n) {
        n.d(t, {
            m: function() {
                return r
            }
        });
        var i = n(35250)
          , a = n(98359)
          , s = n(70079);
        function r(e) {
            var t = e.show
              , n = e.appear
              , r = e.children;
            return (0,
            i.jsx)(a.u, {
                as: s.Fragment,
                enter: "transition ease-out duration-200",
                enterFrom: "opacity-0 translate-y-1",
                enterTo: "opacity-100 translate-y-0",
                leave: "transition ease-in duration-150",
                leaveFrom: "opacity-100 translate-y-0",
                leaveTo: "opacity-0 translate-y-1",
                show: t,
                appear: n,
                children: r
            })
        }
    },
    50362: function(e, t, n) {
        n.d(t, {
            D2: function() {
                return _
            },
            Vp: function() {
                return D
            },
            ZP: function() {
                return P
            },
            ze: function() {
                return B
            }
        });
        var i = n(39324)
          , a = n(70216)
          , s = n(10064)
          , r = n(4337)
          , o = n(35250)
          , l = n(26563)
          , d = n(98359)
          , c = n(57526)
          , u = n(19841)
          , f = n(70079)
          , g = n(99581)
          , h = n(1454)
          , m = n(21389)
          , p = n(1491)
          , x = n(13246)
          , v = n(35265)
          , b = n(23234)
          , j = n(59904)
          , y = n(42798);
        function k() {
            var e = (0,
            r._)(["rounded-lg bg-white ring-1 ring-black/10 dark:bg-gray-800 dark:ring-white/20 shadow-[0_1px_7px_0_rgba(0,0,0,0.03)]"]);
            return k = function() {
                return e
            }
            ,
            e
        }
        function w() {
            var e = (0,
            r._)(["absolute z-[17] mt-2 flex max-h-60 w-full flex-col overflow-hidden text-base focus:outline-none dark:last:border-0 sm:text-sm md:w-[100%] gizmo:min-w-[250px]"]);
            return w = function() {
                return e
            }
            ,
            e
        }
        function C() {
            var e = (0,
            r._)(["absolute z-[17] -ml-[1px] flex flex-col gap-2 p-3 sm:p-4"]);
            return C = function() {
                return e
            }
            ,
            e
        }
        function M() {
            var e = (0,
            r._)(["flex items-center gap-2 truncate"]);
            return M = function() {
                return e
            }
            ,
            e
        }
        function T() {
            var e = (0,
            r._)(["h-6 w-6 shrink-0"]);
            return T = function() {
                return e
            }
            ,
            e
        }
        function N() {
            var e = (0,
            r._)(["absolute inset-y-0 right-0 flex items-center pr-5 text-gray-800 dark:text-gray-100"]);
            return N = function() {
                return e
            }
            ,
            e
        }
        function A() {
            var e = (0,
            r._)(["absolute inset-y-0 right-0 flex items-center pr-3 text-gray-800 dark:text-gray-100"]);
            return A = function() {
                return e
            }
            ,
            e
        }
        var _ = ["confidential", "alpha", "plus"];
        function P(e) {
            var t = e.selectedOptions
              , n = e.selectedLabel
              , s = e.onChange
              , r = e.onAction
              , d = e.onOpen
              , c = e.onClose
              , u = e.dropdownRef
              , g = (0,
            a._)(e, ["selectedOptions", "selectedLabel", "onChange", "onAction", "onOpen", "onClose", "dropdownRef"])
              , h = (0,
            f.useCallback)(function(e) {
                if (e.some(function(e) {
                    return "string" == typeof e
                })) {
                    var t = e.find(function(e) {
                        return "string" == typeof e
                    });
                    null == r || r(t)
                } else
                    s(e)
            }, [s, r]);
            return (0,
            o.jsx)(l.R, {
                value: t.map(function(e) {
                    return e.value
                }),
                multiple: !0,
                onChange: h,
                children: function(e) {
                    var a = e.open;
                    return (0,
                    o.jsx)(S, (0,
                    i._)({
                        ref: u,
                        selectedLabel: n || "".concat(t.length, " selected"),
                        open: a,
                        onOpen: d,
                        onClose: c,
                        multiple: !0
                    }, g))
                }
            })
        }
        var S = (0,
        f.forwardRef)(function(e, t) {
            var n = e.name
              , i = e.selectedLabel
              , a = e.open
              , s = e.options
              , r = e.actions
              , m = e.multiple
              , k = e.isLoading
              , w = e.loadingState
              , C = e.header
              , M = e.onOpen
              , T = e.onClose
              , N = e.theme
              , A = (0,
            f.useRef)(null)
              , _ = (0,
            f.useRef)(null)
              , P = (0,
            p.oc)()
              , S = (0,
            b.Ml)();
            (0,
            f.useImperativeHandle)(t, function() {
                return {
                    open: function() {
                        if (!a) {
                            var e;
                            null === (e = A.current) || void 0 === e || e.click()
                        }
                    },
                    close: function() {
                        if (a) {
                            var e;
                            null === (e = A.current) || void 0 === e || e.click()
                        }
                    }
                }
            }, [a]);
            var B = k ? w || (0,
            o.jsx)("div", {
                className: "flex h-[42px] items-center justify-center",
                children: (0,
                o.jsx)(y.Z, {})
            }) : (0,
            o.jsxs)(o.Fragment, {
                children: [C, (0,
                o.jsxs)(l.R.Options, {
                    className: "overflow-auto",
                    children: [s.map(function(e, t) {
                        return (0,
                        o.jsx)(I, {
                            value: e.value,
                            disabled: e.disabled,
                            theme: N,
                            children: function(t) {
                                var n = t.selected
                                  , i = t.active;
                                return (0,
                                o.jsxs)(o.Fragment, {
                                    children: [(0,
                                    o.jsxs)(F, {
                                        children: [e.imageUrl && (0,
                                        o.jsx)(H, {
                                            children: (0,
                                            o.jsx)(x.Z, {
                                                url: e.imageUrl,
                                                name: e.title,
                                                size: "100%"
                                            })
                                        }), (0,
                                        o.jsxs)("span", {
                                            className: (0,
                                            u.default)(n && !m && "font-semibold", "flex h-6 items-center gap-1 text-gray-800 dark:text-gray-100"),
                                            children: [e.title, e.tags.map(function(e) {
                                                return D(e)
                                            }), e.customTags]
                                        })]
                                    }), m && !e.disabled ? (0,
                                    o.jsx)(Z, {
                                        theme: N,
                                        selected: n
                                    }) : n && (0,
                                    o.jsx)(z, {
                                        theme: N,
                                        icon: "mini" === N ? j.HQ : h.UgA
                                    }), e.disabled && (0,
                                    o.jsx)(z, {
                                        theme: N,
                                        icon: c.Z,
                                        className: "text-red-700 dark:text-red-500"
                                    }), i && P && (0,
                                    g.createPortal)((0,
                                    o.jsx)(L, {
                                        option: e,
                                        dropdownRef: _
                                    }), document.body)]
                                })
                            }
                        }, t)
                    }), null == r ? void 0 : r.map(function(e, t) {
                        return (0,
                        o.jsx)(I, {
                            value: e.id,
                            theme: N,
                            children: function() {
                                return (0,
                                o.jsxs)(o.Fragment, {
                                    children: [(0,
                                    o.jsx)("div", {
                                        className: "text-gray-800 dark:text-gray-100",
                                        children: e.label
                                    }), (0,
                                    o.jsx)(z, {
                                        theme: N,
                                        icon: e.icon
                                    })]
                                })
                            }
                        }, t)
                    })]
                })]
            });
            return (0,
            o.jsxs)("div", {
                className: "relative w-full gizmo:w-fit md:w-1/2 lg:w-1/3 xl:w-1/4",
                children: [(0,
                o.jsxs)(l.R.Button, {
                    ref: A,
                    onClick: a ? T : M,
                    className: (0,
                    u.default)("relative flex cursor-pointer flex-col bg-white py-2 pr-10 text-left gizmo:text-[15px] gizmo:font-normal dark:bg-gray-800 sm:text-sm", "mini" === N ? "mx-auto w-auto rounded-lg border border-transparent pl-4 pr-7 hover:border-black/10 gizmo:border-black/10 gizmo:hover:border-black dark:hover:border-white/10 gizmo:dark:border-white/20 gizmo:dark:hover:border-white" : "w-full rounded-md border border-black/10 pl-3 focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600 dark:border-white/20"),
                    children: ["mini" !== N && (0,
                    o.jsx)(l.R.Label, {
                        className: "block text-xs text-gray-700 dark:text-gray-500",
                        children: n
                    }), (0,
                    o.jsx)("span", {
                        className: "inline-flex w-full truncate",
                        children: (0,
                        o.jsx)("span", {
                            className: "flex h-6 items-center gap-1 truncate",
                            children: i
                        })
                    }), (0,
                    o.jsx)("span", {
                        className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2",
                        children: S ? (0,
                        o.jsx)(v.ud, {}) : (0,
                        o.jsx)(h.bTu, {
                            className: "icon-sm text-gray-400",
                            "aria-hidden": "true"
                        })
                    })]
                }), (0,
                o.jsx)(d.u, {
                    show: a,
                    as: f.Fragment,
                    leave: "transition ease-in duration-100",
                    leaveFrom: "opacity-100",
                    leaveTo: "opacity-0",
                    children: (0,
                    o.jsx)(R, {
                        ref: _,
                        children: B
                    })
                })]
            })
        });
        function I(e) {
            var t = e.value
              , n = e.disabled
              , i = e.children
              , a = e.theme;
            return (0,
            o.jsx)(l.R.Option, {
                className: function(e) {
                    var t = e.active;
                    return (0,
                    u.default)("mini" === a ? O : U, t && !n ? "bg-gray-100 dark:bg-gray-700" : "text-gray-900", n && "cursor-auto bg-gray-50 text-gray-400 dark:bg-gray-700 dark:text-gray-100")
                },
                value: t,
                children: i
            })
        }
        function z(e) {
            var t = e.icon
              , n = e.className
              , i = e.theme;
            return (0,
            o.jsx)("mini" === i ? q : K, {
                children: (0,
                o.jsx)(t, {
                    className: (0,
                    u.default)("icon-md", n),
                    "aria-hidden": "true"
                })
            })
        }
        function Z(e) {
            var t = e.selected
              , n = e.disabled;
            if ("mini" === e.theme) {
                var i = (0,
                u.default)("h-5 w-5 text-blue-600", t ? "stroke-[2.5]" : "stroke-2");
                return (0,
                o.jsxs)(q, {
                    children: [t ? (0,
                    o.jsx)(j.HQ, {
                        className: i
                    }) : (0,
                    o.jsx)(j.i9, {
                        className: i
                    }), !t && (0,
                    o.jsx)(j.nQ, {
                        className: (0,
                        u.default)("icon-md absolute text-blue-600 opacity-0 transition-opacity", !n && "group-hover:opacity-100")
                    })]
                })
            }
            return (0,
            o.jsx)(K, {
                children: (0,
                o.jsx)("div", {
                    className: (0,
                    u.default)("flex h-6 w-6 items-center justify-center rounded-full border transition-colors", t ? "border-transparent bg-green-600 text-white" : "border-black/5 dark:border-white/20"),
                    "aria-hidden": "true",
                    children: (0,
                    o.jsx)(h.UgA, {
                        className: (0,
                        u.default)("h-3 w-3 transition-opacity", t && "opacity-100", !t && "opacity-0", !t && !n && "group-hover:opacity-50"),
                        strokeWidth: t ? 2.5 : 2
                    })
                })
            })
        }
        function B(e) {
            var t = e.showCheckbox
              , n = e.theme;
            return (0,
            o.jsxs)("div", {
                className: (0,
                u.default)("mini" === n ? O : U, "cursor-auto"),
                children: [(0,
                o.jsxs)(F, {
                    children: [(0,
                    o.jsx)(H, {
                        children: (0,
                        o.jsx)("div", {
                            className: "h-full w-full rounded-sm bg-gray-200"
                        })
                    }), (0,
                    o.jsx)("div", {
                        className: "h-[12px] w-[88px] rounded-sm bg-gray-100"
                    })]
                }), t && (0,
                o.jsx)(Z, {
                    theme: n,
                    selected: !1,
                    disabled: !0
                })]
            })
        }
        function L(e) {
            var t = e.option
              , n = e.dropdownRef
              , i = (0,
            s._)((0,
            f.useState)(), 2)
              , a = i[0]
              , r = i[1];
            return ((0,
            f.useEffect)(function() {
                var e = function() {
                    if (n.current) {
                        var e = n.current.getBoundingClientRect();
                        r({
                            top: e.top,
                            left: e.left - 260,
                            minHeight: e.height
                        })
                    }
                };
                return e(),
                window.addEventListener("resize", e),
                function() {
                    return window.removeEventListener("resize", e)
                }
            }, [n]),
            a) ? (0,
            o.jsxs)(G, {
                style: {
                    width: 260,
                    minHeight: a.minHeight,
                    top: a.top,
                    left: a.left
                },
                children: [t.disabled && (0,
                o.jsx)(c.Z, {
                    className: "icon-lg text-red-700 dark:text-red-500"
                }), t.imageUrl && (0,
                o.jsx)(x.Z, {
                    url: t.imageUrl,
                    name: t.title,
                    size: 70
                }), (0,
                o.jsxs)("div", {
                    className: "flex items-center gap-1",
                    children: [t.title, " ", t.tags.map(function(e) {
                        return D(e)
                    }), " ", t.customTags]
                }), (0,
                o.jsx)("div", {
                    className: "whitespace-pre-line text-xs",
                    children: t.description
                })]
            }) : null
        }
        var D = function(e) {
            return _.includes(e) && (0,
            o.jsx)("span", {
                className: (0,
                u.default)("py-0.25 rounded px-1 text-[10px] font-semibold uppercase", "confidential" === e && "bg-red-200 text-red-800", "alpha" === e && "bg-blue-200 text-blue-500", "plus" === e && "bg-yellow-200 text-yellow-900"),
                children: e
            }, e)
        }
          , E = m.Z.div(k())
          , R = (0,
        m.Z)(E)(w())
          , G = (0,
        m.Z)(E)(C())
          , O = "group relative flex h-[50px] cursor-pointer select-none items-center overflow-hidden border-b border-black/10 pl-5 pr-12 last:border-0 dark:border-white/20"
          , U = "group relative flex h-[42px] cursor-pointer select-none items-center overflow-hidden border-b border-black/10 pl-3 pr-9 last:border-0 dark:border-white/20"
          , F = m.Z.span(M())
          , H = m.Z.span(T())
          , q = m.Z.span(N())
          , K = m.Z.span(A())
    },
    27736: function(e, t, n) {
        n.d(t, {
            B: function() {
                return eq
            }
        });
        var i = n(39324)
          , a = n(10064)
          , s = n(4337)
          , r = n(35250)
          , o = n(32148)
          , l = n(33554)
          , d = n(59837)
          , c = n(77421)
          , u = n(62853)
          , f = n(97296)
          , g = n(10721)
          , h = n(70079)
          , m = n(70671)
          , p = n(32004)
          , x = n(94968)
          , v = n(40803)
          , b = n(66638)
          , j = n(55548)
          , y = n(17944)
          , k = n(25687)
          , w = n(13246)
          , C = n(6013)
          , M = function(e) {
            var t = e.children
              , n = e.contentClassName
              , i = e.content
              , s = e.side
              , o = e.sideOffset
              , l = (0,
            a._)((0,
            h.useState)(void 0), 2)
              , d = l[0]
              , c = l[1]
              , u = function() {
                c(!0)
            }
              , f = function() {
                c(void 0)
            };
            return (0,
            r.jsxs)(C.fC, {
                open: d,
                onOpenChange: function(e) {
                    c(!0 === e || void 0)
                },
                children: [(0,
                r.jsx)(C.xz, {
                    asChild: !0,
                    onMouseEnter: u,
                    onMouseLeave: f,
                    children: t
                }), (0,
                r.jsx)(C.h_, {
                    children: (0,
                    r.jsx)(C.VY, {
                        onMouseEnter: u,
                        onMouseLeave: f,
                        side: s,
                        sideOffset: o,
                        collisionPadding: 16,
                        className: n,
                        onOpenAutoFocus: function(e) {
                            e.preventDefault()
                        },
                        onCloseAutoFocus: function(e) {
                            e.preventDefault()
                        },
                        children: i
                    })
                })]
            })
        }
          , T = n(59904)
          , N = n(86585)
          , A = n(50362)
          , _ = n(73780)
          , P = n(62682)
          , S = n(1454)
          , I = n(18481)
          , z = n(47428)
          , Z = n(12952)
          , B = n(39368)
          , L = n(70496);
        function D(e) {
            var t = e.icon
              , n = e.label
              , i = e.onSelect;
            return (0,
            r.jsxs)(z.ck, {
                onSelect: i,
                className: "flex cursor-pointer select-none items-center gap-3 px-4 py-2 text-sm text-token-text-secondary outline-none radix-highlighted:bg-gray-50 dark:radix-highlighted:bg-gray-700",
                children: [(0,
                r.jsx)(t, {
                    className: "icon-sm"
                }), (0,
                r.jsx)("span", {
                    children: n
                })]
            })
        }
        function E(e) {
            var t = e.conversationTemplate
              , n = (0,
            y.ec)(y.F_.accountUserId)
              , i = t.owner_id === n
              , a = (0,
            g.useRouter)()
              , s = (0,
            y.hz)().has("debug")
              , o = (0,
            I.xj)(t.id);
            return (0,
            r.jsxs)(z.fC, {
                children: [(0,
                r.jsx)(z.xz, {
                    asChild: !0,
                    children: (0,
                    r.jsxs)("button", {
                        className: "flex min-w-[256px] items-center gap-4 overflow-hidden rounded p-2 text-left hover:bg-gray-50 radix-state-open:bg-gray-50 dark:hover:bg-gray-700 dark:radix-state-open:bg-gray-700 lg:-ml-2",
                        children: [(0,
                        r.jsx)(Z.Py, {
                            conversationTemplate: t
                        }), (0,
                        r.jsxs)("div", {
                            className: "grow",
                            children: [(0,
                            r.jsx)("div", {
                                className: "text-sm font-medium text-token-text-primary",
                                children: t.name
                            }), (0,
                            r.jsxs)("div", {
                                className: "flex items-center gap-1 text-xs text-token-text-tertiary",
                                children: [(0,
                                r.jsxs)("span", {
                                    children: ["Template by ", t.author_name]
                                }), null != t.published_at ? null != t.description ? (0,
                                r.jsxs)(r.Fragment, {
                                    children: [(0,
                                    r.jsx)("span", {
                                        children: "•"
                                    }), (0,
                                    r.jsx)("span", {
                                        className: "max-w-[160px] overflow-hidden overflow-ellipsis whitespace-nowrap",
                                        children: t.description
                                    })]
                                }) : null : (0,
                                r.jsxs)(r.Fragment, {
                                    children: [(0,
                                    r.jsx)("span", {
                                        children: "•"
                                    }), (0,
                                    r.jsx)("span", {
                                        children: "Private"
                                    })]
                                })]
                            })]
                        }), (0,
                        r.jsx)(S.bTu, {
                            className: "icon-sm text-token-text-tertiary"
                        })]
                    })
                }), (0,
                r.jsx)(z.Uv, {
                    children: (0,
                    r.jsxs)(z.VY, {
                        className: "min-w-[256px] max-w-[320px] rounded-md border border-gray-100 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800",
                        align: "start",
                        side: "bottom",
                        sideOffset: 4,
                        children: [(0,
                        r.jsxs)(z.__, {
                            className: "border-b border-gray-200 p-4 dark:border-gray-700",
                            children: [(0,
                            r.jsx)("div", {
                                className: "text-sm font-medium text-token-text-primary",
                                children: t.name
                            }), (0,
                            r.jsx)("div", {
                                className: "mt-1 flex items-center gap-1 text-xs text-token-text-tertiary",
                                children: null != t.published_at ? (0,
                                r.jsxs)(r.Fragment, {
                                    children: [(0,
                                    r.jsx)(S._rq, {
                                        className: "icon-xs"
                                    }), (0,
                                    r.jsx)("span", {
                                        children: "Published in workspace"
                                    })]
                                }) : (0,
                                r.jsxs)(r.Fragment, {
                                    children: [(0,
                                    r.jsx)(S.UIZ, {
                                        className: "icon-xs"
                                    }), (0,
                                    r.jsxs)("span", {
                                        children: ["Private", i && (0,
                                        r.jsx)("span", {
                                            children: " (Only visible to you)"
                                        })]
                                    })]
                                })
                            }), null != t.published_at && null != t.description && (0,
                            r.jsx)("div", {
                                className: "mt-1 text-xs text-token-text-secondary line-clamp-3",
                                children: t.description
                            })]
                        }), (0,
                        r.jsxs)(z.ZA, {
                            className: "py-1",
                            children: [(0,
                            r.jsx)(D, {
                                icon: S.IC0,
                                label: "New chat with this template",
                                onSelect: function() {
                                    a.push((0,
                                    B.l1)(t.id), void 0, {
                                        shallow: !0
                                    })
                                }
                            }), i ? (0,
                            r.jsx)(D, {
                                icon: S.IYd,
                                label: "Edit template",
                                onSelect: function() {
                                    a.push(o, void 0, {
                                        shallow: !0
                                    })
                                }
                            }) : (0,
                            r.jsx)(D, {
                                icon: S.rDJ,
                                label: "See how it's made",
                                onSelect: function() {
                                    (0,
                                    L.O)(t.id)
                                }
                            }), s && (0,
                            r.jsx)(D, {
                                icon: S.cDN,
                                label: "Debug",
                                onSelect: function() {
                                    return j.vm.toggleActiveSidebar("debug")
                                }
                            })]
                        })]
                    })
                })]
            })
        }
        function R(e) {
            var t = e.workspaceId
              , n = e.conversationTemplateId
              , i = (0,
            B.GS)(t, n, {
                includeDeleted: !0
            }).data;
            return (0,
            r.jsx)("div", {
                className: "flex min-h-[60px] justify-center border-b border-gray-100 dark:border-gray-700",
                children: (0,
                r.jsx)("div", {
                    className: "flex w-full items-center px-2 md:max-w-2xl lg:max-w-[38rem] lg:px-0 xl:max-w-3xl",
                    children: null != i ? (0,
                    r.jsx)(E, {
                        conversationTemplate: i
                    }) : null
                })
            })
        }
        var G = n(74329)
          , O = n(15635)
          , U = n(71209)
          , F = n(70216)
          , H = n(48133)
          , q = n(23211)
          , K = n(21950)
          , V = n(35265)
          , W = n(10943)
          , Y = n(80275)
          , Q = n(27382)
          , J = n(4551)
          , X = n(97631)
          , $ = n(10499)
          , ee = n(28924)
          , et = n(72871)
          , en = n(1491)
          , ei = n(54636)
          , ea = n(42780)
          , es = n(19841)
          , er = n(25653)
          , eo = n(60583)
          , el = n(61888)
          , ed = n(94705)
          , ec = n(7184)
          , eu = eo.pm.TemporaryChatOnboarding;
        function ef(e) {
            var t = e.icon
              , n = e.title
              , i = e.description;
            return (0,
            r.jsxs)("div", {
                className: "flex items-start",
                children: [(0,
                r.jsx)("div", {
                    className: "mt-1",
                    children: t
                }), (0,
                r.jsxs)("div", {
                    className: "ml-4",
                    children: [(0,
                    r.jsx)("div", {
                        className: "text-lg font-medium",
                        children: n
                    }), (0,
                    r.jsx)("p", {
                        className: "mt-1 text-sm text-token-text-secondary",
                        children: i
                    })]
                })]
            })
        }
        function eg(e) {
            var t = e.onClose
              , n = (0,
            a._)((0,
            h.useState)(!0), 2)
              , i = n[0]
              , s = n[1]
              , o = (0,
            m.Z)()
              , l = (0,
            eo.qg)(eu).markAsViewed
              , d = (0,
            h.useCallback)(function() {
                l(),
                s(!1),
                null == t || t()
            }, [l, t]);
            return (0,
            r.jsx)(ec.Z, {
                isOpen: i,
                onClose: el.noop,
                size: "custom",
                className: "max-w-xl",
                type: "success",
                title: o.formatMessage(eh.title),
                primaryButton: (0,
                r.jsx)(ed.ZP.Button, {
                    onClick: d,
                    title: o.formatMessage(eh.continue),
                    color: "primary"
                }),
                children: (0,
                r.jsxs)("div", {
                    className: "mb-6 flex flex-col gap-3",
                    children: [(0,
                    r.jsx)(ef, {
                        icon: (0,
                        r.jsx)(eh.bulletTitle1.Icon, {}),
                        title: o.formatMessage(eh.bulletTitle1),
                        description: o.formatMessage(eh.bulletDescription1)
                    }), (0,
                    r.jsx)(ef, {
                        icon: (0,
                        r.jsx)(eh.bulletTitle2.Icon, {}),
                        title: o.formatMessage(eh.bulletTitle2),
                        description: o.formatMessage(eh.bulletDescription2)
                    }), (0,
                    r.jsx)(ef, {
                        icon: (0,
                        r.jsx)(eh.bulletTitle3.Icon, {}),
                        title: o.formatMessage(eh.bulletTitle3),
                        description: o.formatMessage(eh.bulletDescription3)
                    })]
                })
            })
        }
        var eh = (0,
        x.vU)({
            title: {
                id: "TemporaryChatOnboardingModal.title",
                defaultMessage: "Temporary Chat",
                description: "Title of the modal"
            },
            bulletTitle1: {
                Icon: er.$i,
                id: "TemporaryChatOnboardingModal.bulletTitle1",
                defaultMessage: "Off the record",
                description: "Title for the first bullet"
            },
            bulletDescription1: {
                id: "TemporaryChatOnboardingModal.bulletDescription1",
                defaultMessage: "Temporary Chats won’t appear in your history, and your GPT won’t remember anything you talk about.",
                description: "Description for the first bullet"
            },
            bulletTitle2: {
                Icon: er.av,
                id: "TemporaryChatOnboardingModal.bulletTitle2",
                defaultMessage: "Blank slate",
                description: "Title for the second bullet"
            },
            bulletDescription2: {
                id: "TemporaryChatOnboardingModal.bulletDescription2",
                defaultMessage: "Your GPT won’t be aware of previous conversations or your custom instructions.",
                description: "Description for the seconed bullet"
            },
            bulletTitle3: {
                Icon: er.mz,
                id: "TemporaryChatOnboardingModal.bulletTitle3",
                defaultMessage: "No model training",
                description: "Title for the third bullet"
            },
            bulletDescription3: {
                id: "TemporaryChatOnboardingModal.bulletDescription3",
                defaultMessage: "Temporary Chats won’t be used to improve our models.",
                description: "Description for the third bullet"
            },
            continue: {
                id: "TemporaryChatOnboardingModal.continue",
                defaultMessage: "Continue",
                description: "Button to close"
            }
        })
          , em = n(33377)
          , ep = n(46552)
          , ex = n(46266)
          , ev = n(21722)
          , eb = n(64502)
          , ej = n(38104)
          , ey = n(30769);
        function ek(e) {
            var t = e.className
              , n = (0,
            F._)(e, ["className"]);
            return (0,
            r.jsx)("textarea", (0,
            i._)({
                className: (0,
                es.default)("form-textarea w-full rounded-lg border border-token-border-light bg-token-surface-secondary text-sm text-token-text-primary focus:border-token-text-primary focus:shadow-none focus:outline-none focus:ring-token-text-primary", t)
            }, n))
        }
        var ew = n(61236);
        function eC(e) {
            var t = e.reasons
              , n = e.onSelectReason;
            return (0,
            r.jsx)("div", {
                className: "divide-y overflow-hidden rounded-md border border-token-border-medium",
                children: t.map(function(e) {
                    return (0,
                    r.jsx)("button", {
                        onClick: function() {
                            n(e)
                        },
                        className: "w-full border-token-border-medium p-2 text-left text-sm hover:bg-token-surface-secondary",
                        children: e.cta
                    }, e.id)
                })
            })
        }
        function eM(e) {
            var t = e.reason
              , n = e.submitReport
              , i = (0,
            a._)((0,
            h.useState)(""), 2)
              , s = i[0]
              , o = i[1]
              , l = (0,
            a._)((0,
            h.useState)(!1), 2)
              , d = l[0]
              , c = l[1];
            return (0,
            r.jsxs)("div", {
                children: [(0,
                r.jsx)(ek, {
                    value: s,
                    onChange: function(e) {
                        return o(e.target.value)
                    },
                    placeholder: t.details_placeholder,
                    autoFocus: !0
                }), (0,
                r.jsx)("div", {
                    className: "mt-1 flex justify-end",
                    children: (0,
                    r.jsx)(H.z, {
                        onClick: function() {
                            try {
                                c(!0),
                                n(t.id, s)
                            } finally {
                                c(!1)
                            }
                        },
                        disabled: d,
                        children: "Submit report"
                    })
                })]
            })
        }
        function eT(e) {
            var t = e.reason;
            return (0,
            r.jsxs)("div", {
                className: "text-sm",
                children: [(0,
                r.jsx)("div", {
                    className: "mb-2",
                    children: t.link_explanation
                }), (0,
                r.jsx)("div", {
                    children: (0,
                    r.jsx)("a", {
                        href: t.link_attachment,
                        target: "_blank",
                        rel: "noreferrer",
                        className: "break-words underline",
                        children: t.link_attachment
                    })
                })]
            })
        }
        function eN(e) {
            var t, n, i = e.gizmoId, s = (0,
            ew.a)({
                queryKey: ["gizmoReportReasons"],
                queryFn: function() {
                    return ey.U.getGizmoReportReasons()
                }
            }).data, o = (0,
            a._)((0,
            h.useState)([]), 2), l = o[0], d = o[1], c = (0,
            a._)((0,
            h.useState)(!1), 2), u = c[0], f = c[1];
            if (null == s)
                return null;
            var g = s.reasons
              , m = !0
              , p = !1
              , x = void 0;
            try {
                for (var v, b, j = l[Symbol.iterator](); !(m = (b = j.next()).done); m = !0)
                    !function() {
                        var e = b.value;
                        g = (v = g.find(function(t) {
                            return t.id === e
                        })).sub_reasons
                    }()
            } catch (e) {
                p = !0,
                x = e
            } finally {
                try {
                    m || null == j.return || j.return()
                } finally {
                    if (p)
                        throw x
                }
            }
            function y(e, t) {
                return k.apply(this, arguments)
            }
            function k() {
                return (k = (0,
                ev._)(function(e, t) {
                    return (0,
                    ej.Jh)(this, function(n) {
                        switch (n.label) {
                        case 0:
                            return [4, ey.U.postGizmoReport(i, {
                                id: e,
                                details: t
                            })];
                        case 1:
                            return n.sent(),
                            f(!0),
                            [2]
                        }
                    })
                })).apply(this, arguments)
            }
            return u ? (0,
            r.jsx)("div", {
                children: (0,
                r.jsx)("div", {
                    className: "pb-4 text-sm",
                    children: "You report has been submitted. Thank you."
                })
            }) : (n = (null == v ? void 0 : v.details_placeholder) != null ? (0,
            r.jsx)(eM, {
                reason: v,
                submitReport: y
            }) : (null == v ? void 0 : v.link_attachment) != null ? (0,
            r.jsx)(eT, {
                reason: v
            }) : (0,
            r.jsx)(eC, {
                reasons: g,
                onSelectReason: (t = (0,
                ev._)(function(e) {
                    return (0,
                    ej.Jh)(this, function(t) {
                        return 0 === e.sub_reasons.length && null == e.details_placeholder && null == e.link_attachment ? y(e.id) : d(function(t) {
                            return (0,
                            eb._)(t).concat([e.id])
                        }),
                        [2]
                    })
                }),
                function(e) {
                    return t.apply(this, arguments)
                }
                )
            }),
            (0,
            r.jsxs)("div", {
                children: [(0,
                r.jsxs)("div", {
                    className: "mb-4",
                    children: [(0,
                    r.jsx)("div", {
                        className: "text-sm font-medium",
                        children: s.header
                    }), (0,
                    r.jsx)("div", {
                        className: "text-sm text-token-text-secondary",
                        children: s.header_explanation
                    })]
                }), null != v ? (0,
                r.jsx)("div", {
                    className: "mb-2 flex gap-1 text-sm",
                    children: (0,
                    r.jsxs)("button", {
                        onClick: function() {
                            d(function(e) {
                                return e.slice(0, -1)
                            })
                        },
                        className: "flex items-center gap-2 p-1",
                        children: [(0,
                        r.jsx)(S.YFh, {}), (0,
                        r.jsx)("div", {
                            children: v.cta
                        })]
                    })
                }) : null, n]
            }))
        }
        function eA(e) {
            var t = e.gizmoId
              , n = e.onClose
              , i = (0,
            K.b9)(t).data;
            return (0,
            r.jsx)(ec.Z, {
                title: null != i ? "Report ".concat(i.gizmo.display.name) : "Report",
                isOpen: !0,
                onClose: n,
                closeButton: (0,
                r.jsx)(ed.ZP.CloseButton, {
                    onClose: n
                }),
                type: "success",
                children: (0,
                r.jsx)(eN, {
                    gizmoId: t
                })
            })
        }
        var e_ = function(e) {
            var t = e.clientThreadId
              , n = (0,
            y.hz)().has("debug")
              , i = b.tQ.getServerThreadId(t)
              , a = (0,
            _.C)(P.L0.WorkspaceShareLinks);
            return (0,
            r.jsxs)("div", {
                className: "flex gap-2 pr-1",
                children: [a && i && (0,
                r.jsx)(W.y4, {
                    onClick: function() {
                        return j.vm.openSharingModal(i)
                    },
                    children: (0,
                    r.jsx)(V.Gp, {
                        className: "icon-md"
                    })
                }), n && (0,
                r.jsx)(W.y4, {
                    onClick: function() {
                        return j.vm.toggleActiveSidebar("debug")
                    },
                    children: (0,
                    r.jsx)(V.WP, {
                        className: "icon-md"
                    })
                })]
            })
        };
        function eP(e) {
            var t, n = e.clientThreadId, i = e.gizmoId, s = (0,
            j.tN)(function(e) {
                return e.isDesktopNavCollapsed
            }), o = (0,
            en.w$)(), l = (0,
            g.useRouter)(), d = (0,
            K.b9)(i).data, c = (0,
            a._)((0,
            h.useState)(!1), 2), u = c[0], f = c[1];
            return null == d ? null : (0,
            r.jsxs)(W.QT, {
                children: [u && (0,
                r.jsx)(eA, {
                    gizmoId: i,
                    onClose: function() {
                        f(!1)
                    }
                }), (0,
                r.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [o && s && (0,
                    r.jsx)(W.y4, {
                        className: "ml-2",
                        onClick: function() {
                            l.push(null != d ? (0,
                            K.m_)(d) : "/", void 0, {
                                shallow: !0
                            })
                        },
                        children: (0,
                        r.jsx)(V.ks, {
                            className: "icon-md text-black dark:text-white"
                        })
                    }), (0,
                    r.jsx)(ex.Z, {
                        gizmoResource: d,
                        showReportModal: function() {
                            f(!0)
                        },
                        children: (0,
                        r.jsxs)("div", {
                            className: eD,
                            children: [d.gizmo.display.name, (null === (t = d.gizmo.tags) || void 0 === t ? void 0 : t.includes(Y.U9.Beta)) && (0,
                            r.jsx)("div", {
                                className: "rounded-full bg-gray-100 px-1.5 text-xs text-token-text-primary dark:bg-gray-900",
                                children: "Beta"
                            }), (0,
                            r.jsx)(eE, {})]
                        })
                    })]
                }), (0,
                r.jsx)(e_, {
                    clientThreadId: n
                })]
            })
        }
        function eS(e) {
            var t, n, a, s, o, l, d = e.currentModelConfig, c = e.clientThreadId, u = (0,
            g.useRouter)(), f = b.tQ.getServerThreadId(c), m = (0,
            et.H)(), x = m.isSunshineAvailable, v = m.isBrowsingAvailable, w = !f, C = (0,
            ep.Z)(), M = (0,
            $.ZL)(), T = (0,
            ee.ZP)(), N = null == d ? void 0 : d.id, A = T.find(function(e) {
                return e.categoryId === ee.ft.GPT4
            }), _ = null == A ? void 0 : A.options.find(function(e) {
                var t;
                return e.name === (null === (t = ee.Er[ee.dN.PLUGINS]) || void 0 === t ? void 0 : t.name)
            }), P = T.find(function(e) {
                return e.categoryId === ee.ft.GPT3_5
            }), S = T.find(function(e) {
                return e.categoryId === ee.ft.OTHER
            }), I = T.find(function(e) {
                return e.categoryId === ee.ft.EXPERIMENTS
            }), Z = N === (null == A ? void 0 : A.value) ? ee.ft.GPT4 : N === (null == P ? void 0 : P.value) ? ee.ft.GPT3_5 : (null == _ ? void 0 : _.value) === N ? "plugins" : (null == S ? void 0 : S.options.find(function(e) {
                return e.value === N
            })) != null ? ee.ft.OTHER : (null == I ? void 0 : I.options.find(function(e) {
                return e.value === N
            })) != null ? ee.ft.EXPERIMENTS : null, B = (0,
            y.m0)(), L = "plugins" === Z, D = (null == S ? void 0 : null === (a = S.options) || void 0 === a ? void 0 : a.length) && S.options.length > 0, E = (null == I ? void 0 : null === (s = I.options) || void 0 === s ? void 0 : s.length) && I.options.length > 0, R = Z === ee.ft.GPT4 ? "4" : Z === ee.ft.GPT3_5 ? "3.5" : L ? "Plugins" : Z === ee.ft.OTHER ? null !== (o = null == S ? void 0 : S.name) && void 0 !== o ? o : "" : Z === ee.ft.EXPERIMENTS && null !== (l = null == I ? void 0 : I.name) && void 0 !== l ? l : "", G = function(e) {
                return (0,
                r.jsx)("div", {
                    className: "flex shrink-0 grow justify-between gap-2",
                    children: (0,
                    r.jsxs)("div", {
                        className: "flex gap-2",
                        children: [(0,
                        r.jsx)(V.Gi, {
                            className: "icon-md"
                        }), e, " Models"]
                    })
                })
            }, O = (0,
            j.tN)(function(e) {
                return e.isDesktopNavCollapsed
            }), U = (0,
            en.w$)(), F = (0,
            h.useCallback)(function() {
                ei.A.logEvent(ea.M.openModalAccountPaymentfromModelPicker, {
                    content: "gizmo-button"
                }),
                (0,
                J.MG)()
            }, []), K = (t = (0,
            et.H)().isSunshineAvailable,
            n = (0,
            h.useContext)(k.QL).historyDisabled,
            (0,
            eo.qg)(eu).eligible && n && t);
            return (0,
            r.jsxs)(r.Fragment, {
                children: [(0,
                r.jsxs)(W.QT, {
                    children: [(0,
                    r.jsxs)("div", {
                        className: "flex items-center gap-2",
                        children: [U && O && (0,
                        r.jsx)(W.y4, {
                            className: "ml-2",
                            onClick: function() {
                                u.push("/", void 0, {
                                    shallow: !0
                                })
                            },
                            children: (0,
                            r.jsx)(V.ks, {
                                className: "text-black dark:text-white"
                            })
                        }), M ? null : (0,
                        r.jsxs)(r.Fragment, {
                            children: [(0,
                            r.jsxs)(z.fC, {
                                children: [(0,
                                r.jsx)(z.xz, {
                                    asChild: !0,
                                    children: (0,
                                    r.jsxs)("div", {
                                        className: eD,
                                        title: Z === ee.ft.EXPERIMENTS || Z === ee.ft.OTHER ? d.title : void 0,
                                        children: [(0,
                                        r.jsxs)("div", {
                                            children: [q.D, " ", (0,
                                            r.jsx)("span", {
                                                className: "text-token-text-secondary",
                                                children: R
                                            })]
                                        }), (0,
                                        r.jsx)(eE, {})]
                                    })
                                }), (0,
                                r.jsx)(z.Uv, {
                                    children: (0,
                                    r.jsxs)(z.VY, {
                                        className: "mt-2 min-w-[340px] max-w-xs overflow-hidden rounded-lg border border-gray-100 bg-token-surface-primary shadow-lg dark:border-gray-700",
                                        align: "start",
                                        children: [A && (0,
                                        r.jsxs)(r.Fragment, {
                                            children: [(0,
                                            r.jsx)(eZ, {
                                                value: A.value,
                                                name: (0,
                                                r.jsx)(r.Fragment, {
                                                    children: (0,
                                                    r.jsxs)("div", {
                                                        className: "flex gap-2",
                                                        children: [(0,
                                                        r.jsx)(V.HV, {
                                                            className: "icon-md shrink-0"
                                                        }), (0,
                                                        r.jsxs)("div", {
                                                            children: ["GPT-4", (0,
                                                            r.jsx)("div", {
                                                                className: "text-token-text-tertiary",
                                                                children: v ? (0,
                                                                r.jsx)(p.Z, (0,
                                                                i._)({}, eR.gpt4ShortExplainer)) : (0,
                                                                r.jsx)(p.Z, (0,
                                                                i._)({}, eR.gpt4ShortExplainerWithoutBrowse))
                                                            }), "" !== C.modelSwitcherLimitShort && (0,
                                                            r.jsx)("span", {
                                                                className: "text-token-text-tertiary",
                                                                children: C.modelSwitcherLimitShort
                                                            })]
                                                        })]
                                                    })
                                                }),
                                                isSelected: N === A.value,
                                                isNewThread: w
                                            }), (0,
                                            r.jsx)(W.Cl, {})]
                                        }), P && (0,
                                        r.jsx)(eZ, {
                                            value: P.value,
                                            name: (0,
                                            r.jsxs)("div", {
                                                className: "flex gap-2",
                                                children: [(0,
                                                r.jsx)(V.PK, {
                                                    className: "icon-md"
                                                }), (0,
                                                r.jsxs)("div", {
                                                    children: ["GPT-3.5", (0,
                                                    r.jsx)("div", {
                                                        className: "text-token-text-tertiary",
                                                        children: (0,
                                                        r.jsx)(p.Z, (0,
                                                        i._)({}, eR.gpt35ShortExplainer))
                                                    })]
                                                })]
                                            }),
                                            isSelected: N === P.value,
                                            isNewThread: w
                                        }), !B && !A && (0,
                                        r.jsxs)(r.Fragment, {
                                            children: [(0,
                                            r.jsx)(Q.R, {}), (0,
                                            r.jsx)(eZ, {
                                                value: "",
                                                onClick: function() {
                                                    F()
                                                },
                                                name: (0,
                                                r.jsxs)("div", {
                                                    className: "flex gap-2",
                                                    children: [(0,
                                                    r.jsx)(V.HV, {
                                                        className: "icon-md shrink-0"
                                                    }), (0,
                                                    r.jsxs)("div", {
                                                        children: ["GPT-4", (0,
                                                        r.jsxs)("div", {
                                                            className: "text-token-text-tertiary",
                                                            children: [(0,
                                                            r.jsx)(p.Z, (0,
                                                            i._)({}, eR.gpt4UpsellExplainer)), (0,
                                                            r.jsx)("div", {
                                                                className: "mt-2",
                                                                children: (0,
                                                                r.jsx)(H.z, {
                                                                    onClick: function() {
                                                                        F()
                                                                    },
                                                                    color: "primary",
                                                                    className: "w-full !bg-brand-purple text-xs hover:bg-brand-purple hover:brightness-90",
                                                                    children: (0,
                                                                    r.jsx)(p.Z, (0,
                                                                    i._)({}, eR.userUpgrade))
                                                                })
                                                            })]
                                                        })]
                                                    })]
                                                }),
                                                isSelected: !1,
                                                isNewThread: !0
                                            })]
                                        }), _ && (0,
                                        r.jsx)(W.Cl, {}), null != _ && (0,
                                        r.jsx)(eZ, {
                                            value: _.value,
                                            name: (0,
                                            r.jsxs)("div", {
                                                className: "flex gap-2",
                                                children: [(0,
                                                r.jsx)(V.TC, {
                                                    className: "icon-md"
                                                }), _.name]
                                            }),
                                            isSelected: L,
                                            isNewThread: w
                                        }), x && (0,
                                        r.jsxs)(r.Fragment, {
                                            children: [(0,
                                            r.jsx)(W.Cl, {}), (0,
                                            r.jsx)(eB, {})]
                                        }), w && (null != D ? D : E) && (0,
                                        r.jsx)(W.Cl, {}), w && D ? (0,
                                        r.jsxs)(z.Tr, {
                                            children: [(0,
                                            r.jsx)(eL, {
                                                children: (0,
                                                r.jsxs)("div", {
                                                    className: "flex grow justify-between gap-2 overflow-hidden",
                                                    children: [G(S.name), Z === ee.ft.OTHER && (0,
                                                    r.jsx)("div", {
                                                        className: "truncate text-token-text-tertiary",
                                                        children: d.title
                                                    })]
                                                })
                                            }), (0,
                                            r.jsx)(eI, {
                                                currentModel: d,
                                                categoryOptions: S.options
                                            })]
                                        }) : null, w && E ? (0,
                                        r.jsxs)(z.Tr, {
                                            children: [(0,
                                            r.jsx)(eL, {
                                                children: (0,
                                                r.jsxs)("div", {
                                                    className: "flex grow justify-between gap-2 overflow-hidden",
                                                    children: [G(I.name), Z === ee.ft.EXPERIMENTS && (0,
                                                    r.jsx)("div", {
                                                        className: "truncate text-token-text-tertiary",
                                                        children: d.title
                                                    })]
                                                })
                                            }), (0,
                                            r.jsx)(eI, {
                                                currentModel: d,
                                                categoryOptions: I.options
                                            })]
                                        }) : null]
                                    })
                                })]
                            }), L && (0,
                            r.jsx)(em.Z, {
                                theme: "mini"
                            })]
                        })]
                    }), (0,
                    r.jsx)(e_, {
                        clientThreadId: c
                    })]
                }), K && (0,
                r.jsx)(eg, {})]
            })
        }
        function eI(e) {
            var t = e.currentModel
              , n = e.categoryOptions
              , i = null == t ? void 0 : t.id;
            return (0,
            r.jsx)(z.Uv, {
                children: (0,
                r.jsx)(z.tu, {
                    className: "mt-2 max-h-[calc(100vh-300px)] min-w-[100px] max-w-xs overflow-auto rounded-lg border border-gray-100 bg-token-surface-primary py-1.5 shadow-lg dark:border-gray-700",
                    sideOffset: -10,
                    alignOffset: -10,
                    children: n.map(function(e) {
                        return (0,
                        r.jsx)(ez, {
                            option: e,
                            isSelected: i === e.value
                        }, e.value)
                    })
                })
            })
        }
        function ez(e) {
            var t = e.option
              , n = e.isSelected;
            return (0,
            r.jsx)(eZ, {
                isSelected: n,
                value: t.value,
                name: t.name
            })
        }
        function eZ(e) {
            var t = e.value
              , n = e.name
              , i = e.isSelected
              , a = e.isNewThread
              , s = void 0 === a || a
              , o = e.onClick
              , l = (0,
            $.fm)(!s)
              , d = (0,
            X.xT)();
            return (0,
            r.jsx)(W.UA, {
                onClick: function() {
                    o ? o() : t && (l(t),
                    d(t))
                },
                className: (0,
                es.default)("!pr-3", i && "!opacity-100"),
                children: (0,
                r.jsxs)("div", {
                    className: "flex grow items-start justify-between gap-2",
                    children: [(0,
                    r.jsx)("div", {
                        children: n
                    }), i && (0,
                    r.jsx)(V.p9, {
                        className: (0,
                        es.default)("icon-md", !s && "block group-hover:hidden")
                    }), !s && (0,
                    r.jsxs)("div", {
                        className: "hidden text-token-text-primary group-hover:flex",
                        children: [(0,
                        r.jsx)("div", {
                            className: "absolute right-11",
                            children: "New Chat"
                        }), " ", (0,
                        r.jsx)(V.ks, {
                            className: "icon-md"
                        })]
                    })]
                })
            }, t)
        }
        function eB() {
            var e = (0,
            g.useRouter)()
              , t = (0,
            h.useContext)(k.QL)
              , n = t.historyDisabled
              , a = t.toggleHistoryDisabled;
            return (0,
            r.jsx)(W.UA, {
                onClick: function() {
                    a(),
                    e.push("/", void 0, {
                        shallow: !0
                    })
                },
                className: "!pr-3",
                children: (0,
                r.jsxs)("div", {
                    className: "flex grow items-start justify-between gap-2",
                    children: [(0,
                    r.jsxs)("div", {
                        className: "flex gap-2",
                        children: [(0,
                        r.jsx)(er.$i, {
                            className: "icon-md"
                        }), (0,
                        r.jsx)(p.Z, (0,
                        i._)({}, eR.temporaryChat))]
                    }), n && (0,
                    r.jsx)(V.p9, {
                        className: (0,
                        es.default)("icon-md")
                    })]
                })
            })
        }
        var eL = function(e) {
            var t = e.children
              , n = e.className
              , a = (0,
            F._)(e, ["children", "className"]);
            return (0,
            r.jsxs)(W.tc, (0,
            U._)((0,
            i._)({
                $as: z.fF,
                className: (0,
                es.default)("!gap-1 !pr-3 radix-state-open:bg-token-border-light", n)
            }, a), {
                children: [t, (0,
                r.jsx)("div", {
                    className: "ml-auto flex items-center text-token-text-tertiary group-data-[disabled]:opacity-50",
                    children: (0,
                    r.jsx)(S.Tfp, {
                        className: "icon-md "
                    })
                })]
            }))
        }
          , eD = "group flex cursor-pointer items-center gap-1 rounded-xl py-2 px-3 text-lg font-medium hover:bg-gray-50 radix-state-open:bg-gray-50 dark:hover:bg-black/10 dark:radix-state-open:bg-black/20"
          , eE = function() {
            return (0,
            r.jsx)(V.ud, {
                className: "text-token-text-tertiary"
            })
        }
          , eR = (0,
        x.vU)({
            gpt35ShortExplainer: {
                defaultMessage: "Great for everyday tasks",
                id: "ModelSwitcher.gpt35ShortExplainer",
                description: "Short description of GPT-3.5"
            },
            gpt4ShortExplainer: {
                defaultMessage: "With DALL\xb7E, browsing and analysis",
                id: "ModelSwitcher.gpt4ShortExplainer",
                description: "Short description of GPT-4"
            },
            gpt4ShortExplainerWithoutBrowse: {
                defaultMessage: "With DALL\xb7E and analysis",
                id: "ModelSwitcher.gpt4ShortExplainer",
                description: "Short description of GPT-4"
            },
            gpt4UpsellExplainer: {
                id: "ModelSwitcher.gpt4Upsell",
                defaultMessage: "Our smartest and most capable model. Includes DALL\xb7E, browsing and more.",
                description: "Description of what new capabilities GPT4 providers"
            },
            userUpgrade: {
                id: "ModelSwithcer.upgradeButton",
                defaultMessage: "Upgrade to Plus",
                description: "Upgrade CTA for free users"
            },
            temporaryChat: {
                id: "ModelSwitcher.temporaryChat",
                defaultMessage: "Temporary Chat",
                description: "Temporary chat option in model switcher"
            }
        })
          , eG = n(23234)
          , eO = n(11547);
        function eU() {
            var e = (0,
            s._)(["translateY(", ")"]);
            return eU = function() {
                return e
            }
            ,
            e
        }
        var eF = [0, 60]
          , eH = function(e) {
            var t = e.clientThreadId
              , n = (0,
            m.Z)()
              , i = null !== (0,
            h.useContext)(k.gB)
              , a = b.tQ.getServerThreadId(t)
              , s = (0,
            _.C)(P.L0.WorkspaceShareLinks);
            return !i && void 0 !== a && s ? (0,
            r.jsx)(O.u, {
                side: "left",
                label: n.formatMessage(eY.shareChat),
                children: (0,
                r.jsx)(G.O, {
                    onClick: function() {
                        return j.vm.openSharingModal(a)
                    },
                    "aria-label": n.formatMessage(eY.shareChat),
                    children: (0,
                    r.jsx)(S.A8q, {
                        className: "icon-sm"
                    })
                })
            }) : null
        };
        function eq(e) {
            var t = e.currentModelConfig
              , n = e.clientThreadId
              , i = e.gizmoId
              , a = e.icon
              , s = (0,
            b.UL)(n)
              , o = (0,
            y.ec)(function(e) {
                var t;
                return null === (t = e.currentWorkspace) || void 0 === t ? void 0 : t.id
            })
              , l = (0,
            eG.Ml)();
            if (null !== (0,
            h.useContext)(k.gB))
                return null;
            if (l) {
                var d, c = null !== (d = s.gizmoId) && void 0 !== d ? d : i;
                return null == c ? (0,
                r.jsx)(eS, {
                    currentModelConfig: t,
                    clientThreadId: n
                }) : (0,
                r.jsx)(eP, {
                    gizmoId: c,
                    clientThreadId: n
                })
            }
            return (0,
            r.jsx)(eK, {
                children: null != o && null != s.conversationTemplateId ? (0,
                r.jsx)(R, {
                    clientThreadId: n,
                    workspaceId: o,
                    conversationTemplateId: s.conversationTemplateId
                }) : (0,
                r.jsx)(eV, {
                    currentModelConfig: t,
                    clientThreadId: n,
                    icon: a
                })
            })
        }
        function eK(e) {
            var t = e.children
              , n = (0,
            j.tN)(j.bM.isThreadHeaderVisible)
              , i = (0,
            l.c)(0)
              , s = (0,
            h.useRef)(null)
              , o = (0,
            h.useRef)(null)
              , g = (0,
            a._)((0,
            v.useAtTop)(), 1)[0]
              , m = (0,
            h.useCallback)(function(e) {
                var t = e.scrollTop;
                if (null == s.current || s.current === t) {
                    s.current = t;
                    return
                }
                if (o.current = s.current,
                s.current = t,
                o.current > s.current) {
                    j.vm.showThreadHeader();
                    var n = Math.max(eF[0], i.get() - Math.abs(o.current - s.current));
                    n !== i.get() && i.set(n)
                } else {
                    var a = Math.min(eF[1], i.get() + Math.abs(o.current - s.current));
                    a !== i.get() && i.set(a)
                }
            }, [i])
              , p = (0,
            d.H)(i, eF, ["0%", "-100%"])
              , x = (0,
            a._)((0,
            h.useState)(p.get()), 2)
              , b = (x[0],
            x[1]);
            (0,
            c.W)(p, "change", function(e) {
                b(e)
            });
            var y = (0,
            u.Y)(eU(), p);
            (0,
            h.useEffect)(function() {
                j.vm.showThreadHeader()
            }, []);
            var w = null !== (0,
            h.useContext)(k.gB);
            return (0,
            v.useObserveScrollPosition)(w ? void 0 : m),
            (0,
            r.jsx)(f.E.header, {
                animate: n ? void 0 : {
                    top: n ? 0 : "-90px",
                    transition: {
                        duration: .2,
                        ease: "easeIn"
                    }
                },
                style: {
                    boxShadow: !g && n ? "0px 4px 24px 0px #0000000D" : void 0,
                    transform: n ? y : void 0
                },
                className: "sticky top-0 z-10 w-full bg-white dark:bg-gray-800",
                children: t
            })
        }
        function eV(e) {
            var t, n, a, s = e.currentModelConfig, o = e.clientThreadId, l = e.icon, d = (0,
            m.Z)(), c = null !== (0,
            h.useContext)(k.gB), u = (0,
            j.tN)(function(e) {
                return "debug" === e.activeSidebar
            }), f = (0,
            y.hz)().has("debug") && !u, x = [];
            f && x.push((0,
            r.jsx)(O.u, {
                side: "left",
                label: d.formatMessage(eY.openDebug),
                children: (0,
                r.jsx)(G.O, {
                    onClick: function() {
                        return j.vm.toggleActiveSidebar("debug")
                    },
                    "aria-label": d.formatMessage(eY.openDebug),
                    children: (0,
                    r.jsx)(S.cDN, {
                        className: "icon-sm"
                    })
                })
            })),
            x.push((0,
            r.jsx)(eH, {
                clientThreadId: o
            }));
            var v = (0,
            b.Qi)(o)
              , C = null != v
              , M = C && null == v.aboutModelMessage && null == v.aboutUserMessage && null !== v.shareId
              , T = (0,
            b.Ro)(o);
            void 0 === T && (T = s);
            var _ = T.tags.filter(function(e) {
                return A.D2.includes(e)
            }).map(function(e) {
                return (0,
                A.Vp)(e)
            })
              , P = c ? T.title : s.title
              , I = (0,
            N.i)(o);
            if (I.length > 0) {
                var z = I.map(function(e, t) {
                    return (0,
                    r.jsx)(w.Z, {
                        url: e.manifest.logo_url,
                        name: e.manifest.name_for_human,
                        size: 16
                    }, t)
                });
                a = (0,
                r.jsxs)(r.Fragment, {
                    children: [(0,
                    r.jsx)("div", {
                        children: (0,
                        r.jsx)(p.Z, (0,
                        i._)({}, eY.enabledPlugins))
                    }), z]
                })
            }
            var Z = (0,
            g.useRouter)()
              , B = c && (null === (t = Z.query) || void 0 === t ? void 0 : null === (n = t.shareParams) || void 0 === n ? void 0 : n[1]) === "moderate";
            return (0,
            r.jsxs)("div", {
                className: "relative z-20 flex min-h-[60px] flex-wrap items-center justify-between gap-3 border-b border-black/10 bg-white p-2 text-gray-500 dark:border-gray-900/50 dark:bg-gray-800 dark:text-gray-300",
                children: [(0,
                r.jsx)("div", {
                    className: "hidden flex-shrink flex-row sm:flex",
                    children: x.map(function(e, t) {
                        return (0,
                        r.jsx)(G.h, {}, t)
                    })
                }), (0,
                r.jsxs)("div", {
                    className: "flex flex-1 flex-grow items-center gap-1 px-2 py-1 text-gray-600 dark:text-gray-200 sm:justify-center sm:p-0",
                    children: [c && (0,
                    r.jsxs)("div", {
                        className: "flex items-center justify-center gap-1",
                        children: [(0,
                        r.jsx)("span", {
                            children: (0,
                            r.jsx)(p.Z, (0,
                            i._)({}, eY.sharedChat))
                        }), (0,
                        r.jsx)("span", {
                            className: "px-1",
                            children: "•"
                        })]
                    }), !c && null != l && (0,
                    r.jsx)(l, {
                        className: "icon-sm"
                    }), (0,
                    r.jsx)("span", {
                        children: P
                    }), _, a ? (0,
                    r.jsxs)("div", {
                        className: "flex items-center justify-center gap-1",
                        children: [(0,
                        r.jsx)("span", {
                            className: "px-1",
                            children: "•"
                        }), a]
                    }) : null, B && (0,
                    r.jsxs)("div", {
                        className: "flex items-center justify-center gap-1",
                        children: [(0,
                        r.jsx)("span", {
                            className: "px-1",
                            children: "•"
                        }), (0,
                        r.jsx)("strong", {
                            children: (0,
                            r.jsx)(p.Z, (0,
                            i._)({}, eY.moderationView))
                        })]
                    }), !c && C && !M && (0,
                    r.jsx)("div", {
                        className: "",
                        children: (0,
                        r.jsx)(eW, {
                            clientThreadId: o
                        })
                    })]
                }), (0,
                r.jsx)("div", {
                    className: "flex flex-shrink flex-row",
                    children: x.map(function(e, t) {
                        return (0,
                        r.jsx)("span", {
                            children: e
                        }, t)
                    })
                })]
            })
        }
        var eW = function(e) {
            var t = e.clientThreadId
              , n = (0,
            b.Qi)(t)
              , a = (0,
            h.useMemo)(function() {
                if (null == n)
                    return null;
                var e = n.aboutUserMessage
                  , t = n.aboutModelMessage
                  , a = n.fallback;
                return null != e && null != t ? (0,
                r.jsxs)("div", {
                    className: "flex flex-col gap-7",
                    children: [null !== e && "" !== e && (0,
                    r.jsxs)("div", {
                        className: "flex flex-col gap-3",
                        children: [(0,
                        r.jsx)("div", {
                            className: "font-medium text-gray-600 dark:text-gray-200",
                            children: (0,
                            r.jsx)(p.Z, (0,
                            i._)({}, eO.sY.aboutYouHelpText))
                        }), (0,
                        r.jsx)("div", {
                            className: "flex flex-row gap-1 text-gray-500",
                            children: e
                        })]
                    }), null !== t && "" !== t && (0,
                    r.jsxs)("div", {
                        className: "flex flex-col gap-3",
                        children: [(0,
                        r.jsx)("div", {
                            className: "font-medium text-gray-600 dark:text-gray-200",
                            children: (0,
                            r.jsx)(p.Z, (0,
                            i._)({}, eO.sY.modelHelpText))
                        }), (0,
                        r.jsx)("div", {
                            className: "flex flex-row gap-1 text-gray-500",
                            children: t
                        })]
                    })]
                }) : null != a ? a : null
            }, [n]);
            return null === n ? null : (0,
            r.jsx)(r.Fragment, {
                children: (0,
                r.jsx)(M, {
                    contentClassName: "relative max-h-[450px] min-w-[300px] max-w-[350px] animate-slideDownAndFade select-none overflow-y-auto whitespace-pre-line rounded-xl border-gray-100 bg-white p-4 text-sm text-gray-600 shadow-xs dark:bg-gray-900 dark:text-white sm:max-w-lg md:max-w-xl",
                    side: "bottom",
                    sideOffset: 8,
                    content: (0,
                    r.jsxs)(r.Fragment, {
                        children: [(0,
                        r.jsx)("div", {
                            className: "mb-5 mt-1 border-b border-black/10 pb-5 dark:border-white/10",
                            children: (0,
                            r.jsx)("div", {
                                className: "flex flex-row items-center gap-2 text-gray-500",
                                children: (0,
                                r.jsx)(p.Z, (0,
                                i._)({}, eY.chatPreferencesNote))
                            })
                        }), a]
                    }),
                    children: (0,
                    r.jsxs)("div", {
                        className: "cursor-pointer pt-0.5",
                        children: [(0,
                        r.jsx)(T.HV, {
                            className: "h-4 w-4 flex-shrink-0 sm:mb-0.5 sm:h-5 sm:w-5"
                        }), (0,
                        r.jsx)(o.T, {
                            children: (0,
                            r.jsx)(p.Z, (0,
                            i._)({}, eY.chatPreferencesInfoLabel))
                        })]
                    })
                })
            })
        }
          , eY = (0,
        x.vU)({
            chatPreferencesInfoLabel: {
                id: "ThreadSettings.chatPreferencesInfoLabel",
                defaultMessage: "Custom instructions details",
                description: "Label for the Custom instructions info icon"
            },
            chatPreferencesNote: {
                id: "ThreadSettings.chatPreferencesNote",
                defaultMessage: "Custom instructions are on and can only be changed at the beginning of the chat.",
                description: "Label in the popover for custom instructions"
            },
            openDebug: {
                id: "ThreadSettings.openDebug",
                defaultMessage: "Open debug sidebar",
                description: "Open debug sidebar button tooltip"
            },
            shareChat: {
                id: "ThreadSettings.shareChat",
                defaultMessage: "Share chat",
                description: "Open share modal button tooltip"
            },
            sharedChat: {
                id: "ThreadHeader.sharedChat",
                defaultMessage: "Shared Chat",
                description: "Label for shared chat status"
            },
            enabledPlugins: {
                id: "ThreadHeader.enabledPlugins",
                defaultMessage: "Enabled plugins:",
                description: "Label for enabled plugins in the header"
            },
            moderationView: {
                id: "ThreadHeader.moderationView",
                defaultMessage: "MODERATION VIEW",
                description: "Label for moderation view status"
            },
            downloadChatDebugInfo: {
                id: "ThreadHeader.downloadChatDebugInfo",
                defaultMessage: "Download chat debug info",
                description: "Title for the Download chat debug info modal"
            },
            downloadButton: {
                id: "ThreadHeader.downloadButton",
                defaultMessage: "Download",
                description: "Download button text in the Download chat debug info modal"
            },
            cancelButton: {
                id: "ThreadHeader.cancelButton",
                defaultMessage: "Cancel",
                description: "Cancel button text in the Download chat debug info modal"
            }
        })
    },
    70496: function(e, t, n) {
        n.d(t, {
            O: function() {
                return l
            }
        });
        var i = n(4337);
        n(35250);
        var a = n(55548);
        n(17944),
        n(18481),
        n(73040),
        n(70079);
        var s = n(21389);
        function r() {
            var e = (0,
            i._)(["mb-6 px-4 sm:px-6"]);
            return r = function() {
                return e
            }
            ,
            e
        }
        n(12952),
        n(94705),
        n(23234),
        n(39368);
        var o = {
            conversationTemplateId: void 0
        };
        function l(e) {
            o.conversationTemplateId = e,
            a.vm.openModal(a.B.ReadOnlyConversationTemplate)
        }
        s.Z.div(r())
    },
    40547: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return k
            }
        });
        var i = n(39324)
          , a = n(35250)
          , s = n(7184)
          , r = n(21950)
          , o = n(35265)
          , l = n(10943)
          , d = n(59904)
          , c = n(60583)
          , u = n(17944)
          , f = n(19841)
          , g = n(21988)
          , h = n.n(g)
          , m = n(32004)
          , p = n(94968)
          , x = {
            src: "/_next/static/media/onboarding-icon-autodeck.a93d5bdd.png",
            height: 288,
            width: 288,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA9UlEQVR42h3PS0rDQAAG4H+SeaVJrBFE2xtkqbtQ6Ck8gRvduhA8ylxFXErJTrqzNBtFEBXENqFJOpmH0O8GHwGAVt3kXGQqiM8KH09h0vPSROktgFe6e7jO2a9YII0yOzAYS7CnwbxhclGLaEbDalDm7iojlxfady0HQsSc6c3PLlt9aEVRTwuXnCAcBg5L0XQBwB3vCcVL5wpK3AS6N7D7Hq718DSEFB791mFtGCg5nZT2+XNeH0tNAsK9Bra104/vEddsVJL+/ik3hC2+x2G2TgQqKVElCb7GR39pHM4IAGzUMm+4VKtRVCyFxJtgpRX+0PwH9IZmGXBmq0UAAAAASUVORK5CYII=",
            blurWidth: 8,
            blurHeight: 8
        }
          , v = {
            src: "/_next/static/media/onboarding-icon-cumulus.f841e525.png",
            height: 288,
            width: 288,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA2ElEQVR42j2PvUoDQRSF53XmyWwsrCxFsLL1BUSwtBC00Ea8EtYii2IwiVFJQmCz5IdNioSZezdzT2bzd+DA5X5fc0yVi9u6vbqv0V3tVZJmIs3+Jw2ylt3Ao7O2vbxuFY9JF89pGw/pG15+30FZo6Bxx5rj0x59/SwxXYJHM+Cjn+Op98c32TfO85TMf8eJ84AThWPFhIFxCQxdiZO8Lqb0EHYKVQWg4KBYxS6gaPBcjHAgDagE3ksxzAgQVTIibCMosMtBib/S++0SZrYhBIqiVK1uz7yBazFL1NxWfzsyAAAAAElFTkSuQmCC",
            blurWidth: 8,
            blurHeight: 8
        }
          , b = {
            src: "/_next/static/media/onboarding-icon-interior.a5747c2c.png",
            height: 288,
            width: 288,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAclBMVEUAKToAKDgAJTUAJDQAIzQANEMAMEAALz8AMEEALz8AdIQAc4QAVmYAM0YALT0ALD0AJDYAIzUAABgAv9QArcEAqLsAp7sAkaMAj6EAfI0Ae4wAcYMAaXkAX28AXGwAP08APk4AGzAAGi8AGS4AABsAAA/pElgZAAAAE3RSTlMAACkpKcHBwe7u+fn5+vr6+vr6aGOLYQAAAEZJREFUeNoFQAcWgBAA/dmKBpq0xP2v2AOodE5SgOicUtYEvHbz0laO4d3Oa809xifsR7gniM94b7IAUyXGohgaIq2VpPkBmUwEN8VEfq4AAAAASUVORK5CYII=",
            blurWidth: 8,
            blurHeight: 8
        }
          , j = {
            src: "/_next/static/media/onboarding-icon-reactify.50d6fdd1.png",
            height: 288,
            width: 290,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABCklEQVR4nAUAu0rDUPSccx/pzW1qQqQlgpsItiCIDu0QpIOLCoLgUnRR6NQ/cHPyE/oTbnV0aejoYxHJEBwKkupgOtQhaXoFHT8EU65aXOkhGNYmWTFMOxGC6DOpEqz5YbPkfFIswXU3GgaFBvO7ROY4KbNUB+16d1xVtXCtcPKf3rkU7zGILM3JKIkrNkJv8yTPCuKDg2ssbo/g8esTTPxm6CFG0vYc61sX+XdW8MPeGZ7eX0E5ZfBy92SiJEJddefob1+OLVLhYj/Ig+6x3HtewN/HLH8VM2mhNcLGzk0TLTURGbng+WbqMfBKwvWKlwIXHQx2B0DMajGth0SyLbltSNpRSbwPYJJ/o79Xydc39fwAAAAASUVORK5CYII=",
            blurWidth: 8,
            blurHeight: 8
        }
          , y = {
            src: "/_next/static/media/onboarding-icon-writing.0eb75d42.png",
            height: 256,
            width: 256,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA00lEQVR42gHIADf/AIiyvKzP1Mjm59j189Hs67bU16PJzn+qtQB/qragxcu42t3K5eSmub6hw8mdw8p2o7AAcqGuj7fApcrQsMfIj6iwoMXMirO8a5uqAGOTpHelso+5wnWXo22SoIy2wHOhr12NoABNf5RajJ9lmqxpl6drmqlkmatYi55Je5EAPWuDOnKKrrq5vsjFwcrHpLO1N2+IPGqCAIevt5i5vYqanIeYmomZmoaYmpW2u32nsABsl6SCqbKNtLyYvcOXvMKKsbl6pK5ij57uVHnCDM/HXwAAAABJRU5ErkJggg==",
            blurWidth: 8,
            blurHeight: 8
        };
        function k(e) {
            var t = e.gizmoId
              , n = e.onClose
              , d = (0,
            r.kg)(t)
              , f = (0,
            c.qg)(c.pm.GizmoGPTsOnboarding)
              , g = f.eligible
              , h = f.markAsViewed
              , p = (0,
            u.ec)(u.F_.isBusinessWorkspace);
            if (!g)
                return null;
            var x = function() {
                h(),
                null == n || n()
            };
            return (0,
            a.jsxs)(s.Z, {
                isOpen: !0,
                onClose: x,
                type: "success",
                className: "!max-w-[500px]",
                noPadding: !0,
                children: [(0,
                a.jsx)("div", {
                    className: "flex cursor-pointer justify-end p-4 text-xl text-token-text-tertiary",
                    children: (0,
                    a.jsx)("button", {
                        onClick: x,
                        children: (0,
                        a.jsx)(o.v7, {
                            className: "icon-md"
                        })
                    })
                }), (0,
                a.jsx)("div", {
                    className: "mb-8 mt-4 w-full overflow-hidden",
                    children: (0,
                    a.jsx)(N, {
                        gizmo: null == d ? void 0 : d.data
                    })
                }), (0,
                a.jsxs)("div", {
                    className: "mx-4 mb-4 flex flex-col gap-4 md:mx-12 md:mb-12",
                    children: [(0,
                    a.jsxs)("div", {
                        className: "flex flex-col gap-2",
                        children: [(0,
                        a.jsx)("div", {
                            className: "text-center text-2xl font-bold",
                            children: p ? (0,
                            a.jsx)(m.Z, (0,
                            i._)({}, w.gizmoGPTsOnboardingHeadlineBiz)) : (0,
                            a.jsx)(m.Z, (0,
                            i._)({}, w.gizmoGPTsOnboardingHeadline))
                        }), (0,
                        a.jsx)("div", {
                            className: "text-center text-token-text-secondary",
                            children: p ? (0,
                            a.jsx)(m.Z, (0,
                            i._)({}, w.gizmoGPTsOnboardingSubheadingBiz)) : (0,
                            a.jsx)(m.Z, (0,
                            i._)({}, w.gizmoGPTsOnboardingSubheading))
                        })]
                    }), (0,
                    a.jsxs)("div", {
                        className: "flex gap-3",
                        children: [p && (0,
                        a.jsx)(l.Zq, {
                            className: "w-full",
                            color: "neutral",
                            as: "a",
                            to: "https://help.openai.com/en/articles/8555535-gpts-chatgpt-enterprise-version",
                            openNewTab: !0,
                            children: (0,
                            a.jsx)(m.Z, (0,
                            i._)({}, w.gizmoOnboardingLearnMore))
                        }), (0,
                        a.jsx)(l.Zq, {
                            className: "w-full",
                            color: "primary",
                            onClick: x,
                            children: (0,
                            a.jsx)(m.Z, (0,
                            i._)({}, w.gizmoOnboardingStart))
                        })]
                    })]
                })]
            })
        }
        var w = (0,
        p.vU)({
            gizmoGPTsOnboardingHeadline: {
                id: "gizmoGPTsOnboarding.headline",
                defaultMessage: "Introducing GPTs",
                description: "Headline for the GPTs onboarding modal"
            },
            gizmoGPTsOnboardingHeadlineBiz: {
                id: "gizmoGPTsOnboardingBiz.headline",
                defaultMessage: "Your templates are now GPTs, customized versions of ChatGPT.",
                description: "Headline for the biz GPTs onboarding modal"
            },
            gizmoGPTsOnboardingSubheading: {
                id: "gizmoGPTsOnboarding.subheading",
                defaultMessage: "Custom versions of ChatGPT that combine instructions, extra knowledge and capabilities for a specific purpose.",
                description: "Subheading for the GPTs onboarding modal"
            },
            gizmoGPTsOnboardingSubheadingBiz: {
                id: "gizmoGPTsOnboardingBiz.subheading",
                defaultMessage: "GPTs use custom instructions, data, and capabilities to tailor ChatGPT to your needs.",
                description: "Subheading for the biz GPTs onboarding modal"
            },
            gizmoOnboardingStart: {
                id: "gizmoOnboarding.start",
                defaultMessage: "Get started",
                description: "Button to start using GPTs"
            },
            gizmoOnboardingLearnMore: {
                id: "gizmoOnboarding.learnMore",
                defaultMessage: "Learn more",
                description: "Button to learn more about GPTs"
            }
        });
        function C(e) {
            var t = e.icon
              , n = e.iconClassName;
            return (0,
            a.jsxs)("div", {
                className: (0,
                f.default)("relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-full", n),
                children: [null != t ? (0,
                a.jsx)(h(), {
                    src: t,
                    alt: "GPT Icon",
                    width: "112",
                    height: "112",
                    className: "h-full w-full"
                }) : (0,
                a.jsx)(d.nI, {
                    className: "h-[66%] w-[66%]"
                }), (0,
                a.jsx)("div", {
                    className: "absolute inset-0 rounded-full shadow-[inset_0_0_0_1px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]"
                })]
            })
        }
        function M(e) {
            var t = e.icon;
            return (0,
            a.jsx)(C, {
                icon: t
            })
        }
        function T(e) {
            var t = e.icon;
            return (0,
            a.jsx)(C, {
                icon: t
            })
        }
        function N(e) {
            var t = e.gizmo;
            return (0,
            a.jsxs)("div", {
                className: "-ml-8 flex w-[calc(100%+4rem)] items-center justify-between",
                children: [(0,
                a.jsx)(M, {
                    icon: v
                }), (0,
                a.jsx)(T, {
                    icon: j
                }), null != t ? (0,
                a.jsx)(C, {
                    icon: t.gizmo.display.profile_picture_url,
                    iconClassName: "w-[128px] h-[128px]"
                }) : (0,
                a.jsx)(C, {
                    icon: y,
                    iconClassName: "w-[128px] h-[128px]"
                }), (0,
                a.jsx)(T, {
                    icon: b
                }), (0,
                a.jsx)(M, {
                    icon: x
                })]
            })
        }
    },
    46266: function(e, t, n) {
        n.d(t, {
            n: function() {
                return ei
            },
            Z: function() {
                return et
            }
        });
        var i = n(21722)
          , a = n(39324)
          , s = n(10064)
          , r = n(38104)
          , o = n(35250)
          , l = n(7184)
          , d = n(5053)
          , c = n(73780)
          , u = n(94705)
          , f = n(21950)
          , g = n(35265)
          , h = n(96237)
          , m = n(71209)
          , p = n(4337)
          , x = n(48133)
          , v = n(30769)
          , b = n(42798)
          , j = n(86646)
          , y = n(55548)
          , k = n(65374)
          , w = n(25494)
          , C = n(68951)
          , M = n(19841)
          , T = n(70079)
          , N = n(1454)
          , A = n(70671)
          , _ = n(32004)
          , P = n(94968)
          , S = n(21389);
        function I() {
            var e = (0,
            p._)(["flex flex-col gap-6"]);
            return I = function() {
                return e
            }
            ,
            e
        }
        function z() {
            var e = (0,
            p._)(["flex flex-row justify-between py-3 items-center"]);
            return z = function() {
                return e
            }
            ,
            e
        }
        function Z(e) {
            var t = e.value
              , n = e.message;
            return (0,
            o.jsx)(k.xz, {
                className: "flex rounded-md px-2 py-1.5 text-sm text-token-text-primary radix-state-active:bg-white dark:radix-state-active:bg-token-surface-tertiary md:radix-state-active:bg-token-surface-tertiary md:radix-state-active:text-token-text-primary",
                value: t,
                children: (0,
                o.jsx)("div", {
                    className: "truncate",
                    children: (0,
                    o.jsx)(_.Z, (0,
                    a._)({}, n))
                })
            })
        }
        function B(e) {
            var t, n, s, l = e.gizmoId, d = e.actionSettings, c = e.actionTool, u = (0,
            w.D)({
                mutationFn: (t = (0,
                i._)(function(e) {
                    var t, n, i;
                    return (0,
                    r.Jh)(this, function(a) {
                        return t = e.actionId,
                        n = e.domain,
                        i = e.settings,
                        [2, v.U.upsertUserActionSettings(t, n, i)]
                    })
                }),
                function(e) {
                    return t.apply(this, arguments)
                }
                ),
                onSuccess: function() {
                    C.E.invalidateQueries({
                        queryKey: ["gizmo", "userActionSettings", {
                            gizmoId: l
                        }]
                    })
                }
            });
            return (0,
            o.jsxs)("div", {
                children: [(0,
                o.jsxs)(E, {
                    className: "border-b border-black/10 dark:border-white/10",
                    children: [(0,
                    o.jsx)("div", {
                        className: "font-medium",
                        children: null === (n = c.metadata) || void 0 === n ? void 0 : n.domain
                    }), (0,
                    o.jsxs)("a", {
                        href: null === (s = c.metadata) || void 0 === s ? void 0 : s.privacy_policy_url,
                        target: "_blank",
                        rel: "noreferrer",
                        className: "flex items-center gap-1 text-gray-500 transition hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200",
                        children: [(0,
                        o.jsx)(_.Z, (0,
                        a._)({}, R.privacyPolicyLink)), (0,
                        o.jsx)(N.AlO, {})]
                    })]
                }), Object.keys(d.operations).map(function(e, t) {
                    var n, i = d.operations[e].is_consequential, s = d.operations[e], r = !i && (null === (n = d.action_settings) || void 0 === n ? void 0 : n[e]), l = function(t) {
                        var n, i;
                        (null === (n = c.metadata) || void 0 === n ? void 0 : n.action_id) && (null === (i = c.metadata) || void 0 === i ? void 0 : i.domain) && u.mutateAsync({
                            actionId: c.metadata.action_id,
                            domain: c.metadata.domain,
                            settings: (0,
                            h._)({}, e, t)
                        })
                    };
                    return (0,
                    o.jsxs)(E, {
                        children: [(0,
                        o.jsx)("div", {
                            children: s.id
                        }), (0,
                        o.jsxs)("select", {
                            value: r ? "always_allow" : "unset",
                            onChange: function(e) {
                                return l(e.target.value)
                            },
                            className: "overflow-scroll rounded border-none pl-2 pr-8 dark:bg-gray-800",
                            children: [!i && (0,
                            o.jsx)("option", {
                                value: "always_allow",
                                children: (0,
                                o.jsx)(_.Z, (0,
                                a._)({}, R.alwaysAllowDropdown))
                            }), (0,
                            o.jsx)("option", {
                                value: "unset",
                                children: (0,
                                o.jsx)(_.Z, (0,
                                a._)({}, R.askDropdown))
                            })]
                        })]
                    }, t)
                })]
            })
        }
        function L(e) {
            var t, n, s = e.gizmoId, l = e.actionSettings, d = e.actionTool, c = (0,
            w.D)({
                mutationFn: (t = (0,
                i._)(function(e) {
                    var t;
                    return (0,
                    r.Jh)(this, function(n) {
                        return t = e.pluginId,
                        j.ZP.deletePluginUserSettings({
                            pluginId: t
                        }),
                        [2]
                    })
                }),
                function(e) {
                    return t.apply(this, arguments)
                }
                ),
                onSuccess: function() {
                    C.E.invalidateQueries({
                        queryKey: ["gizmo", "userActionSettings", {
                            gizmoId: s
                        }]
                    })
                }
            }), u = "valid" === l.oauth_status;
            return (0,
            o.jsxs)(E, {
                children: [(0,
                o.jsx)("div", {
                    className: "font-medium",
                    children: null == d ? void 0 : null === (n = d.metadata) || void 0 === n ? void 0 : n.domain
                }), (0,
                o.jsx)(x.z, {
                    color: "neutral",
                    className: "px-2 py-1",
                    onClick: function() {
                        var e, t, n, i, a;
                        (null === (e = d.metadata) || void 0 === e ? void 0 : e.action_id) && (null === (t = d.metadata) || void 0 === t ? void 0 : t.domain) && (u ? c.mutateAsync({
                            pluginId: null === (n = d.metadata) || void 0 === n ? void 0 : n.action_id
                        }) : v.U.doOAuthRedirect(s, null === (i = d.metadata) || void 0 === i ? void 0 : i.action_id, null === (a = d.metadata) || void 0 === a ? void 0 : a.domain, window.location.href))
                    },
                    children: (0,
                    o.jsx)(_.Z, (0,
                    a._)({}, u ? R.logout : R.login))
                })]
            })
        }
        var D = S.Z.div(I())
          , E = S.Z.div(z())
          , R = (0,
        P.vU)({
            title: {
                defaultMessage: "GPT's privacy settings",
                id: "GizmoPrivacySettings.title",
                description: "Title for the GPT privacy settings modal"
            },
            actions: {
                defaultMessage: "Actions",
                id: "GizmoPrivacySettings.actions",
                description: "Label for the actions tab"
            },
            connectedAccounts: {
                defaultMessage: "Connected accounts",
                id: "GizmoPrivacySettings.connectedAccounts",
                description: "Label for the connected accounts tab"
            },
            connectedAccountsDesc: {
                defaultMessage: "Manage which 3rd party accounts can be accessed by {gizmoName}.",
                id: "GizmoPrivacySettings.connectedAccountsDesc",
                description: "Description for the connected accounts tab"
            },
            allowedActionsTitle: {
                defaultMessage: "GPT's privacy settings",
                id: "GizmoPrivacySettings.allowedActionsTitle",
                description: "Title for the actions content body"
            },
            allowedActionsDesc: {
                defaultMessage: "Select which 3rd party actions are allowed in conversations with {gizmoName}.",
                id: "GizmoPrivacySettings.allowedActionsDesc",
                description: "Description for the actions content body"
            },
            privacyPolicyLink: {
                defaultMessage: "Privacy policy",
                id: "GizmoPrivacySettings.privacyPolicyLink",
                description: "Link text for the privacy policy"
            },
            alwaysAllowDropdown: {
                defaultMessage: "Always allow",
                id: "GizmoPrivacySettings.alwaysAllowDropdown",
                description: "Label text for the always allow button"
            },
            askDropdown: {
                defaultMessage: "Ask",
                id: "GizmoPrivacySettings.askDropdown",
                description: "Label text for the ask dropdown button"
            },
            login: {
                defaultMessage: "Log in",
                id: "GizmoPrivacySettings.login",
                description: "Button text for logging into an account"
            },
            logout: {
                defaultMessage: "Log out",
                id: "GizmoPrivacySettings.logout",
                description: "Button text for logging out of an account"
            }
        })
          , G = function(e) {
            var t = e.gizmo
              , n = (0,
            f.Wd)(t.gizmo.id, !0)
              , i = n.data
              , r = n.isLoading
              , c = (0,
            y.EV)(y.B.GPTPrivacySettings)
              , g = function() {
                return y.vm.closeModal(y.B.GPTPrivacySettings)
            }
              , h = (0,
            A.Z)()
              , p = (0,
            s._)((0,
            T.useState)("actions"), 2)
              , x = p[0]
              , v = p[1]
              , j = null != i && i.settings.some(function(e) {
                return null != e.oauth_status && t.tools.some(function(t) {
                    var n;
                    return t.type === d.qK.JIT_PLUGIN && (null === (n = t.metadata) || void 0 === n ? void 0 : n.action_id) === e.action_id
                })
            });
            return "connected_accounts" !== x || j || v("actions"),
            (0,
            o.jsx)(l.Z, {
                title: h.formatMessage(R.title),
                isOpen: c,
                onClose: g,
                type: "success",
                size: "custom",
                className: "min-h-[50vh] max-w-3xl",
                noPadding: !0,
                closeButton: (0,
                o.jsx)(u.ZP.CloseButton, {
                    onClose: g
                }),
                children: r ? (0,
                o.jsx)(b.Z, {}) : (0,
                o.jsxs)(k.fC, {
                    className: "flex flex-row gap-6 p-4",
                    orientation: "vertical",
                    defaultValue: x,
                    onValueChange: function(e) {
                        v(e)
                    },
                    children: [j && (0,
                    o.jsxs)(k.aV, {
                        className: (0,
                        M.default)("flex min-w-[180px] max-w-[200px] flex-shrink-0 flex-col gap-2"),
                        children: [(0,
                        o.jsx)(Z, {
                            value: "actions",
                            message: R.actions
                        }), j && (0,
                        o.jsx)(Z, {
                            value: "connected_accounts",
                            message: R.connectedAccounts
                        })]
                    }), (0,
                    o.jsxs)("div", {
                        className: "flex-1 text-sm",
                        children: ["actions" === x && (0,
                        o.jsxs)(D, {
                            children: [(0,
                            o.jsx)(_.Z, (0,
                            m._)((0,
                            a._)({}, R.allowedActionsDesc), {
                                values: {
                                    gizmoName: t.gizmo.display.name
                                }
                            })), null == i ? void 0 : i.settings.map(function(e, n) {
                                var i, a = null === (i = t.tools) || void 0 === i ? void 0 : i.find(function(t) {
                                    var n;
                                    return t.type === d.qK.JIT_PLUGIN && (null === (n = t.metadata) || void 0 === n ? void 0 : n.action_id) === e.action_id
                                });
                                return a && (0,
                                o.jsx)(B, {
                                    gizmoId: t.gizmo.id,
                                    actionSettings: e,
                                    actionTool: a
                                }, n)
                            })]
                        }), "connected_accounts" === x && (0,
                        o.jsxs)(D, {
                            children: [(0,
                            o.jsx)(_.Z, (0,
                            m._)((0,
                            a._)({}, R.connectedAccountsDesc), {
                                values: {
                                    gizmoName: t.gizmo.display.name
                                }
                            })), (0,
                            o.jsx)("div", {
                                children: null == i ? void 0 : i.settings.map(function(e, n) {
                                    var i, a = null === (i = t.tools) || void 0 === i ? void 0 : i.find(function(t) {
                                        var n;
                                        return t.type === d.qK.JIT_PLUGIN && (null === (n = t.metadata) || void 0 === n ? void 0 : n.action_id) === e.action_id
                                    });
                                    return a && e.oauth_status && (0,
                                    o.jsx)(L, {
                                        gizmoId: t.gizmo.id,
                                        actionSettings: e,
                                        actionTool: a
                                    }, n)
                                })
                            })]
                        })]
                    })]
                })
            })
        }
          , O = n(41187)
          , U = n(10943)
          , F = n(80275)
          , H = n(28924)
          , q = n(62682)
          , K = n(66638)
          , V = n(17944)
          , W = n(8679)
          , Y = n(18481)
          , Q = n(47428)
          , J = n(38574)
          , X = n(10721)
          , $ = n(27573)
          , ee = n(73960);
        function et(e) {
            var t, n, l, c = e.children, u = e.gizmoResource, h = e.showReportModal, m = (0,
            X.useRouter)(), p = (0,
            ee.XX)(u), x = (0,
            Y.xj)(u.gizmo.id), b = (0,
            V.hz)(), j = (0,
            s._)((0,
            T.useState)(!1), 2), k = j[0], w = j[1], C = (0,
            O.eY)(u.gizmo.id), M = null === (n = u.gizmo.tags) || void 0 === n ? void 0 : n.includes(F.U9.FirstParty), N = u.gizmo.share_recipient === F.Zz.Marketplace || u.gizmo.share_recipient === F.Zz.Link;
            return (0,
            o.jsxs)(o.Fragment, {
                children: [(0,
                o.jsxs)(Q.fC, {
                    children: [(0,
                    o.jsx)(Q.xz, {
                        asChild: !0,
                        children: c
                    }), (0,
                    o.jsx)(Q.Uv, {
                        children: (0,
                        o.jsxs)(Q.VY, {
                            className: "mt-2 min-w-[100px] max-w-xs rounded-lg border border-gray-100 bg-token-surface-primary shadow-lg dark:border-gray-700",
                            align: "start",
                            children: [(0,
                            o.jsxs)(U.UA, {
                                onClick: function() {
                                    return m.push("/g/".concat(u.gizmo.short_url))
                                },
                                children: [(0,
                                o.jsx)(g.ks, {
                                    className: "icon-md"
                                }), (0,
                                o.jsx)(_.Z, (0,
                                a._)({}, eo.newChat))]
                            }), (0,
                            o.jsxs)(U.UA, {
                                onClick: function() {
                                    return y.vm.openModal(y.B.GPTDetails)
                                },
                                children: [(0,
                                o.jsx)(g.VX, {
                                    className: "icon-md"
                                }), (0,
                                o.jsx)(_.Z, (0,
                                a._)({}, eo.about))]
                            }), (null === (l = u.tools) || void 0 === l ? void 0 : l.find(function(e) {
                                return e.type === d.qK.JIT_PLUGIN
                            })) && (0,
                            o.jsxs)(U.UA, {
                                onClick: function() {
                                    return y.vm.openModal(y.B.GPTPrivacySettings)
                                },
                                children: [(0,
                                o.jsx)(g.LX, {
                                    className: "icon-md"
                                }), (0,
                                o.jsx)(_.Z, (0,
                                a._)({}, eo.privacySettings))]
                            }), p && (0,
                            o.jsxs)(U.UA, {
                                onClick: function() {
                                    m.push(x, void 0, {
                                        shallow: !0
                                    })
                                },
                                children: [(0,
                                o.jsx)(g.RR, {
                                    className: "icon-md"
                                }), (0,
                                o.jsx)(_.Z, (0,
                                a._)({}, eo.customize))]
                            }), (0,
                            o.jsxs)(U.UA, {
                                onClick: function() {
                                    v.U.updateGizmoSidebar(u.gizmo.id, C ? "hide" : "keep")
                                },
                                children: [C ? (0,
                                o.jsx)(g.q5, {
                                    className: "icon-md"
                                }) : (0,
                                o.jsx)(g.pI, {
                                    className: "icon-md"
                                }), (0,
                                o.jsx)(_.Z, (0,
                                a._)({}, C ? O.Vc.hideFromSidebar : O.Vc.keepInSidebar))]
                            }), u.gizmo.share_recipient != F.Zz.Private && (0,
                            o.jsxs)(U.UA, {
                                onClick: (t = (0,
                                i._)(function(e) {
                                    var t;
                                    return (0,
                                    r.Jh)(this, function(n) {
                                        switch (n.label) {
                                        case 0:
                                            e.stopPropagation(),
                                            e.preventDefault(),
                                            n.label = 1;
                                        case 1:
                                            return n.trys.push([1, 3, , 4]),
                                            t = u.gizmo.short_url ? (0,
                                            f.AG)(u.gizmo.short_url) : "".concat(window.location.origin).concat((0,
                                            f.m_)(u)),
                                            [4, (0,
                                            J.S)(t)];
                                        case 2:
                                            return n.sent(),
                                            w(!0),
                                            setTimeout(function() {
                                                w(!1)
                                            }, 2e3),
                                            [3, 4];
                                        case 3:
                                            return console.error(n.sent()),
                                            [2];
                                        case 4:
                                            return [2]
                                        }
                                    })
                                }),
                                function(e) {
                                    return t.apply(this, arguments)
                                }
                                ),
                                children: [(0,
                                o.jsx)(g.HN, {
                                    className: "icon-md"
                                }), k ? (0,
                                o.jsx)(_.Z, (0,
                                a._)({}, eo.copiedURL)) : (0,
                                o.jsx)(_.Z, (0,
                                a._)({}, eo.copyLink))]
                            }), !M && N && (0,
                            o.jsxs)(U.UA, {
                                onClick: h,
                                children: [(0,
                                o.jsx)(g.AZ, {
                                    className: "icon-md"
                                }), (0,
                                o.jsx)(_.Z, (0,
                                a._)({}, eo.report))]
                            }), b.has("debug") && (0,
                            o.jsxs)(o.Fragment, {
                                children: [(0,
                                o.jsx)(U.Cl, {}), (0,
                                o.jsx)(U.UA, {
                                    onClick: function() {
                                        m.push((0,
                                        f.i6)(u), void 0)
                                    },
                                    children: "(Internal) See share page"
                                })]
                            })]
                        })
                    })]
                }), (0,
                o.jsx)(ea, {
                    gizmo: u
                }), (0,
                o.jsx)(G, {
                    gizmo: u
                })]
            })
        }
        var en = function(e) {
            var t = e.clientThreadId
              , n = (0,
            V.hz)().has("debug")
              , i = K.tQ.getServerThreadId(t)
              , s = (0,
            c.C)(q.L0.WorkspaceShareLinks);
            return (0,
            o.jsxs)(o.Fragment, {
                children: [s && i && (0,
                o.jsxs)(U.UA, {
                    onClick: function() {
                        return y.vm.openSharingModal(i)
                    },
                    children: [(0,
                    o.jsx)(g.Gp, {
                        className: "icon-md"
                    }), (0,
                    o.jsx)(_.Z, (0,
                    a._)({}, eo.shareChat))]
                }), n && (0,
                o.jsxs)(U.UA, {
                    onClick: function() {
                        return y.vm.toggleActiveSidebar("debug")
                    },
                    children: [(0,
                    o.jsx)(g.WP, {
                        className: "icon-md"
                    }), (0,
                    o.jsx)(_.Z, (0,
                    a._)({}, eo.debugChat))]
                }), (0,
                o.jsxs)(U.UA, {
                    onClick: function() {
                        setTimeout(function() {
                            W.n.publish({
                                kind: "editTitle"
                            })
                        }, 100)
                    },
                    children: [(0,
                    o.jsx)(g.eu, {
                        className: "icon-md"
                    }), (0,
                    o.jsx)(_.Z, (0,
                    a._)({}, eo.renameChat))]
                }), (0,
                o.jsxs)(U.UA, {
                    color: "danger",
                    onClick: function() {
                        W.n.publish({
                            kind: "deleteChat"
                        })
                    },
                    children: [(0,
                    o.jsx)(g.a_, {
                        className: "icon-md"
                    }), (0,
                    o.jsx)(_.Z, (0,
                    a._)({}, eo.deleteChat))]
                })]
            })
        }
          , ei = function(e) {
            var t = e.clientThreadId
              , n = e.children;
            return (0,
            o.jsxs)(Q.fC, {
                children: [(0,
                o.jsx)(Q.xz, {
                    asChild: !0,
                    children: n
                }), (0,
                o.jsx)(Q.Uv, {
                    children: (0,
                    o.jsx)(Q.VY, {
                        className: "mt-2 min-w-[200px] max-w-xs rounded-lg border border-gray-100 bg-token-surface-primary shadow-lg dark:border-gray-700",
                        side: "bottom",
                        align: "start",
                        sideOffset: -15,
                        children: (0,
                        o.jsx)(en, {
                            clientThreadId: t
                        })
                    })
                })]
            })
        }
          , ea = function(e) {
            var t, n = e.gizmo, i = (0,
            y.EV)(y.B.GPTDetails), s = function() {
                return y.vm.closeModal(y.B.GPTDetails)
            }, r = (0,
            H.ZP)().find(function(e) {
                return e.categoryId === H.ft.GPT4
            }), d = (0,
            V.ec)(V.F_.accountUserId), c = (0,
            V.aF)(), f = null == c ? void 0 : c.id, h = null !== (t = (0,
            V.ec)(V.F_.businessWorkspaceId)) && void 0 !== t ? t : void 0, m = null != n && null != d && null != f && (0,
            ee.k1)(n, d, f, h);
            return (0,
            o.jsxs)(l.Z, {
                isOpen: i,
                onClose: s,
                type: "success",
                noPadding: !0,
                children: [(0,
                o.jsx)("div", {
                    className: "absolute right-4 top-4",
                    children: (0,
                    o.jsx)(u.ZP.CloseButton, {
                        onClose: s
                    })
                }), (0,
                o.jsx)("div", {
                    className: "border-b border-token-border-heavy px-4 py-5 sm:px-6 sm:py-10",
                    children: (0,
                    o.jsx)($.r, {
                        gizmo: n,
                        isOwner: m
                    })
                }), (0,
                o.jsxs)("div", {
                    className: "px-4 py-5 text-center sm:px-6 sm:py-10",
                    children: [(0,
                    o.jsx)("div", {
                        className: "text-sm font-normal text-token-text-tertiary",
                        children: (0,
                        o.jsx)(_.Z, (0,
                        a._)({}, eo.poweredBy))
                    }), (0,
                    o.jsxs)("div", {
                        className: "flex items-center justify-center gap-1.5 pt-1 text-2xl font-medium",
                        children: [(0,
                        o.jsx)(g.HV, {
                            className: "text-brand-purple"
                        }), (0,
                        o.jsx)(_.Z, (0,
                        a._)({}, eo.gpt4))]
                    }), (null == r ? void 0 : r.description) && (0,
                    o.jsx)("div", {
                        className: "mx-auto max-w-xs pt-5 text-base font-normal text-token-text-secondary",
                        children: null == r ? void 0 : r.description
                    }), (0,
                    o.jsx)(er, {
                        tools: n.tools
                    })]
                })]
            })
        }
          , es = function(e) {
            switch (e.type) {
            case d.qK.BROWSER:
                return "Browsing";
            case d.qK.PYTHON:
                return "Data Analysis";
            case d.qK.DALLE:
                return "DALL•E";
            default:
                return null
            }
        }
          , er = function(e) {
            var t = e.tools
              , n = new Set;
            if (!t || 0 === t.length)
                return null;
            var i = !0
              , a = !1
              , s = void 0;
            try {
                for (var r, l = t[Symbol.iterator](); !(i = (r = l.next()).done); i = !0) {
                    var d = r.value
                      , c = es(d);
                    null != c && n.add(c)
                }
            } catch (e) {
                a = !0,
                s = e
            } finally {
                try {
                    i || null == l.return || l.return()
                } finally {
                    if (a)
                        throw s
                }
            }
            return 0 === n.size ? null : (0,
            o.jsx)("div", {
                className: "flex flex-wrap justify-center gap-3 pt-5",
                children: Array.from(n).map(function(e, t) {
                    return (0,
                    o.jsxs)("div", {
                        className: "flex items-center gap-0.5 pt-1 text-xs font-normal text-token-text-tertiary",
                        children: [(0,
                        o.jsx)(g.oS, {
                            className: "icon-sm text-green-600"
                        }), e]
                    }, t)
                })
            })
        }
          , eo = (0,
        P.vU)({
            poweredBy: {
                defaultMessage: "Powered by",
                id: "GizmoInformation.poweredBy",
                description: "Label for the powered by section of the GPT details modal"
            },
            gpt4: {
                defaultMessage: "GPT-4",
                id: "GizmoInformation.gpt4",
                description: "Label for the GPT-4 category of the Gizmo model"
            },
            gpt3_5: {
                defaultMessage: "GPT-3.5",
                id: "GizmoInformation.gpt3_5",
                description: "Label for the GPT-3.5 category of the Gizmo model"
            },
            newChat: {
                defaultMessage: "New chat",
                id: "GizmoInformation.newChat",
                description: "Label for the new chat button"
            },
            about: {
                defaultMessage: "About",
                id: "GizmoInformation.about",
                description: "Label for the model details button"
            },
            privacySettings: {
                defaultMessage: "Privacy settings",
                id: "GizmoInformation.privacySettings",
                description: "Label for the model's privacy settings button"
            },
            viewDetails: {
                defaultMessage: "View details",
                id: "GizmoInformation.viewDetails",
                description: "Label for the model details button"
            },
            share: {
                defaultMessage: "Share",
                id: "GizmoInformation.share",
                description: "Label for the share button"
            },
            favorite: {
                defaultMessage: "Favorite",
                id: "GizmoInformation.favorite",
                description: "Label for the favorite button"
            },
            customize: {
                defaultMessage: "Edit GPT",
                id: "GizmoInformation.customize",
                description: "Label for the customize button"
            },
            report: {
                defaultMessage: "Report",
                id: "GizmoInformation.report",
                description: "Label for the report button"
            },
            privacy: {
                defaultMessage: "Privacy",
                id: "GizmoInformation.privacy",
                description: "Label for the privacy button"
            },
            deleteChat: {
                defaultMessage: "Delete chat",
                id: "GizmoInformation.deleteChat",
                description: "Delete chat button"
            },
            debugChat: {
                defaultMessage: "Debug",
                id: "GizmoInformation.debugChat",
                description: "Debug chat button"
            },
            renameChat: {
                defaultMessage: "Rename",
                id: "GizmoInformation.renameChat",
                description: "Rename chat button"
            },
            copyLink: {
                defaultMessage: "Copy link",
                id: "GizmoInformation.copyLink",
                description: "Share chat button"
            },
            shareChat: {
                defaultMessage: "Share",
                id: "GizmoInformation.shareChat",
                description: "Share chat button"
            },
            copiedURL: {
                defaultMessage: "Copied URL",
                id: "GizmoInformation.copiedURL",
                description: "Text that displays when you copy a url"
            }
        })
    },
    27573: function(e, t, n) {
        n.d(t, {
            r: function() {
                return x
            }
        });
        var i = n(39324)
          , a = n(35250)
          , s = n(15635)
          , r = n(418)
          , o = n(35265)
          , l = n(80275)
          , d = n(72871)
          , c = n(25687)
          , u = n(70079)
          , f = n(32004)
          , g = n(94968)
          , h = n(42325)
          , m = n(40547)
          , p = n(73960);
        function x(e) {
            var t, n = e.gizmo, g = e.isOwner, x = e.isAnon, b = void 0 !== x && x, j = e.hideOwner, y = e.children, k = !!(null != n && (0,
            p.S9)(n) && (null === (t = null == n ? void 0 : n.gizmo.tags) || void 0 === t ? void 0 : t.includes(l.U9.FirstParty))), w = (0,
            u.useContext)(c.QL).historyDisabled, C = (0,
            d.H)().isSunshineAvailable, M = null != n && (0,
            p.WQ)(n) ? n.id : null == n ? void 0 : n.gizmo.id, T = null != n && (0,
            p.WQ)(n) ? n.name : null == n ? void 0 : n.gizmo.display.name, N = null != n && (0,
            p.WQ)(n) ? n.description : null == n ? void 0 : n.gizmo.display.description, A = null != n && (0,
            p.S9)(n) ? n.gizmo.author.display_name ? n.gizmo.author.display_name : "".concat(T, "’s builder") : null;
            return (0,
            a.jsxs)(a.Fragment, {
                children: [(0,
                a.jsxs)("div", {
                    className: "flex h-full flex-col items-center justify-center",
                    children: [(0,
                    a.jsx)(r.Z, {
                        isFirstParty: k || !n,
                        src: null != n && (0,
                        p.WQ)(n) ? n.profilePictureUrl : null == n ? void 0 : n.gizmo.display.profile_picture_url,
                        className: "mb-3 h-[72px] w-[72px]"
                    }), null != n ? (0,
                    a.jsxs)("div", {
                        className: "flex flex-col items-center gap-0 p-2",
                        children: [(0,
                        a.jsx)("div", {
                            className: "text-center text-2xl font-medium",
                            children: T
                        }), N && (0,
                        a.jsx)("div", {
                            className: "max-w-md text-center text-xl font-normal text-token-text-secondary",
                            children: N
                        }), !(void 0 !== j && j) && (0,
                        a.jsx)("div", {
                            className: "mt-1 flex items-center gap-1 text-token-text-tertiary",
                            children: k ? (0,
                            a.jsx)(h.S3, {
                                children: "By ChatGPT"
                            }) : (0,
                            a.jsxs)(a.Fragment, {
                                children: [(0,
                                a.jsx)(h.ZP, {
                                    gizmo: n
                                }), !g && !b && (0,
                                a.jsx)(s.u, {
                                    className: "pt-[1px]",
                                    label: (0,
                                    a.jsxs)(a.Fragment, {
                                        children: [A, " can’t view your chats"]
                                    }),
                                    children: (0,
                                    a.jsx)(o.VX, {
                                        className: "icon-xs"
                                    })
                                })]
                            })
                        })]
                    }) : w && C ? (0,
                    a.jsxs)(a.Fragment, {
                        children: [(0,
                        a.jsx)("div", {
                            className: "mb-5 text-2xl font-medium",
                            children: (0,
                            a.jsx)(f.Z, (0,
                            i._)({}, v.temporaryChat))
                        }), (0,
                        a.jsx)("div", {
                            className: "max-w-sm text-center text-sm font-normal text-token-text-tertiary",
                            children: (0,
                            a.jsx)(f.Z, (0,
                            i._)({}, v.temporaryChatDescription))
                        })]
                    }) : (0,
                    a.jsx)("div", {
                        className: "mb-5 text-2xl font-medium",
                        children: (0,
                        a.jsx)(f.Z, (0,
                        i._)({}, v.howCanIHelpYouToday))
                    }), y]
                }), null != M && !b && (0,
                a.jsx)(m.Z, {
                    gizmoId: M
                })]
            })
        }
        var v = (0,
        g.vU)({
            temporaryChat: {
                id: "GizmoLanding.temporaryChat",
                defaultMessage: "Temporary Chat",
                description: "Temporary chat title"
            },
            temporaryChatDescription: {
                id: "GizmoLanding.temporaryChatDescription",
                defaultMessage: "Your GPT won't remember anything you talk about, and this chat won't show up in your history or be used to train our models.",
                description: "Temporary chat description"
            },
            howCanIHelpYouToday: {
                id: "GizmoLanding.howCanIHelpYouToday",
                defaultMessage: "Hello, PandoraNext.",
                description: "How can I help you today? text"
            }
        })
    },
    41187: function(e, t, n) {
        n.d(t, {
            Dy: function() {
                return D
            },
            Vc: function() {
                return U
            },
            eY: function() {
                return L
            },
            iD: function() {
                return O
            },
            jl: function() {
                return R
            }
        });
        var i, a, s = n(21722), r = n(39324), o = n(10064), l = n(38104), d = n(35250), c = n(39368), u = n(15635), f = n(418), g = n(23211), h = n(21950), m = n(35265), p = n(30769), x = n(23234), v = n(10943), b = n(80275), j = n(27736), y = n(17944), k = n(18481), w = n(47428), C = n(4536), M = n(19841), T = n(97296), N = n(61888), A = n(73040), _ = n.n(A), P = n(70079), S = n(32004), I = n(70671), z = n(94968), Z = n(27573), B = n(73960);
        function L(e) {
            var t = (0,
            h.Wz)().data
              , n = (void 0 === t ? {} : t).gizmos;
            return !!n && n.some(function(t) {
                return t.resource.gizmo.id === e
            })
        }
        function D(e) {
            var t, n, i, s, o = e.currentGizmoId, l = function(e, t) {
                return (0,
                d.jsx)(R, {
                    gizmo: e,
                    isActive: e.gizmo.id === o,
                    section: t
                }, e.gizmo.id)
            }, c = (0,
            h.Wz)().data, u = (void 0 === c ? {} : c).gizmos, f = (0,
            N.groupBy)(u, function(e) {
                return e.flair.kind
            }), g = (null === (t = f[b.JK.Recent]) || void 0 === t ? void 0 : t.length) > 0;
            return (0,
            x.Ml)() ? (0,
            d.jsxs)(d.Fragment, {
                children: [(0,
                d.jsx)("div", {
                    className: "sticky left-0 right-0 top-0 z-20 bg-black pt-3.5",
                    children: (0,
                    d.jsx)(R, {
                        gizmo: void 0,
                        isActive: void 0 === o
                    })
                }), (0,
                d.jsxs)("div", {
                    children: [null === (n = f[b.JK.FirstParty]) || void 0 === n ? void 0 : n.map(function(e) {
                        return l(e.resource, a.Keep)
                    }), null === (i = f[b.JK.SidebarKeep]) || void 0 === i ? void 0 : i.map(function(e) {
                        return l(e.resource, a.Keep)
                    }), g && (0,
                    d.jsx)("div", {
                        className: "my-2 ml-2 h-px w-7 bg-token-border-light"
                    }), null === (s = f[b.JK.Recent]) || void 0 === s ? void 0 : s.slice(0, 2).map(function(e) {
                        return l(e.resource, a.Recents)
                    }), (0,
                    d.jsx)(T.E.div, {
                        whileTap: {
                            scale: .98
                        },
                        children: (0,
                        d.jsxs)(_(), {
                            href: (0,
                            k.cy)(),
                            className: "flex h-10 w-full items-center gap-2 rounded-lg px-2 font-semibold text-token-text-primary hover:bg-token-surface-primary",
                            children: [(0,
                            d.jsx)("div", {
                                className: "flex h-7 w-7 items-center justify-center text-token-text-secondary",
                                children: (0,
                                d.jsx)(m.hk, {
                                    className: "icon-md"
                                })
                            }), (0,
                            d.jsx)("span", {
                                className: "text-sm",
                                children: (0,
                                d.jsx)(S.Z, (0,
                                r._)({}, U.explore))
                            })]
                        }, "explore")
                    })]
                })]
            }) : null
        }
        function E(e) {
            var t = e.gizmo
              , n = e.isOpen
              , i = e.setIsOpen
              , o = e.section;
            return (0,
            d.jsxs)(w.fC, {
                open: n,
                onOpenChange: i,
                children: [(0,
                d.jsx)(w.xz, {
                    asChild: !0,
                    children: (0,
                    d.jsx)("button", {
                        className: (0,
                        M.default)("flex text-token-text-tertiary", n ? "" : "invisible group-hover:visible"),
                        children: (0,
                        d.jsx)(m.Yr, {
                            className: "icon-md"
                        })
                    })
                }), (0,
                d.jsx)(w.Uv, {
                    children: (0,
                    d.jsxs)(w.VY, {
                        className: "mt-2 min-w-[100px] max-w-xs rounded-lg border border-gray-100 bg-token-surface-primary py-1.5 shadow-lg dark:border-gray-700",
                        align: "start",
                        side: "bottom",
                        sideOffset: -8,
                        alignOffset: -8,
                        children: [o === a.Recents && (0,
                        d.jsx)(v.UA, {
                            onClick: (0,
                            s._)(function() {
                                return (0,
                                l.Jh)(this, function(e) {
                                    switch (e.label) {
                                    case 0:
                                        return [4, p.U.updateGizmoSidebar(t.gizmo.id, "keep")];
                                    case 1:
                                        return e.sent(),
                                        [2]
                                    }
                                })
                            }),
                            children: (0,
                            d.jsx)(S.Z, (0,
                            r._)({}, U.keepInSidebar))
                        }), (0,
                        d.jsx)(v.UA, {
                            onClick: (0,
                            s._)(function() {
                                return (0,
                                l.Jh)(this, function(e) {
                                    switch (e.label) {
                                    case 0:
                                        return [4, p.U.updateGizmoSidebar(t.gizmo.id, "hide")];
                                    case 1:
                                        return e.sent(),
                                        [2]
                                    }
                                })
                            }),
                            children: (0,
                            d.jsx)(S.Z, (0,
                            r._)({}, U.hideFromSidebar))
                        })]
                    })
                })]
            })
        }
        function R(e) {
            var t, n = e.gizmo, i = e.historyDisabled, a = e.isActive, s = e.section, r = (0,
            I.Z)(), l = (0,
            o._)((0,
            P.useState)(!1), 2), c = l[0], p = l[1], v = (0,
            o._)((0,
            P.useState)(!1), 2), j = v[0], y = v[1], k = (0,
            x.Og)(), w = !!(null === (t = null == n ? void 0 : n.gizmo.tags) || void 0 === t ? void 0 : t.includes(b.U9.FirstParty)), C = "New chat";
            return null != n ? C = n.gizmo.display.name || g.z : i ? C = r.formatMessage(U.clearChat) : k && (C = g.D),
            (0,
            d.jsx)(T.E.div, {
                className: "pb-0.5 last:pb-0",
                whileTap: {
                    scale: .98
                },
                onMouseEnter: function() {
                    y(!0)
                },
                onMouseLeave: function() {
                    y(!1)
                },
                children: (0,
                d.jsx)(G, {
                    href: null != n ? (0,
                    h.m_)(n) : "/",
                    icon: (0,
                    d.jsx)(f.Z, {
                        isFirstParty: null == n || w,
                        src: null == n ? void 0 : n.gizmo.display.profile_picture_url,
                        className: "h-7 w-7 flex-shrink-0"
                    }),
                    isMenuOpen: c,
                    label: C,
                    hoverRightIcon: (0,
                    d.jsxs)("div", {
                        className: "flex gap-3",
                        children: [(j || c) && null != n && (0,
                        d.jsx)("div", {
                            className: "text-token-text-tertiary",
                            onClick: function(e) {
                                e.preventDefault()
                            },
                            children: (0,
                            d.jsx)(E, {
                                gizmo: n,
                                isOpen: c,
                                setIsOpen: p,
                                section: s
                            })
                        }), (0,
                        d.jsx)(u.u, {
                            side: "right",
                            label: r.formatMessage(i ? U.clearChat : U.newChat),
                            delayDuration: 100,
                            className: "flex items-center",
                            children: (0,
                            d.jsx)("button", {
                                className: a ? "text-token-text-primary" : c ? "text-token-text-tertiary" : "invisible text-token-text-tertiary hover:text-token-text-secondary group-hover:visible",
                                children: i ? (0,
                                d.jsx)(m.vX, {
                                    className: "icon-md"
                                }) : (0,
                                d.jsx)(m.ks, {
                                    className: "icon-md"
                                })
                            })
                        })]
                    })
                })
            })
        }
        function G(e) {
            var t = e.href
              , n = e.icon
              , i = e.label
              , a = e.hoverRightIcon
              , s = e.isMenuOpen;
            return (0,
            d.jsxs)(_(), {
                href: t,
                shallow: !0,
                className: (0,
                M.default)("group flex h-10 items-center gap-2 rounded-lg px-2 font-medium", s ? "bg-token-surface-primary" : "hover:bg-token-surface-primary"),
                children: [n, (0,
                d.jsx)("div", {
                    className: "grow overflow-hidden text-ellipsis whitespace-nowrap text-sm text-token-text-primary",
                    children: i
                }), a]
            })
        }
        function O(e) {
            var t, n, i, a = e.clientThreadId, s = e.currentModel, r = (0,
            h.TS)(a), o = (0,
            c.rm)(), l = (0,
            h.kg)(r).data, u = (0,
            y.ec)(y.F_.accountUserId), f = null === (t = (0,
            C.kP)().session) || void 0 === t ? void 0 : null === (n = t.user) || void 0 === n ? void 0 : n.id, g = null !== (i = (0,
            y.ec)(y.F_.businessWorkspaceId)) && void 0 !== i ? i : void 0;
            if ((null != o || null != r) && null == l)
                return null;
            var m = null != l && null != u && null != f && (0,
            B.k1)(l, u, f, g);
            return (0,
            d.jsxs)("div", {
                className: "relative h-full",
                children: [(0,
                d.jsx)("div", {
                    className: "absolute left-0 right-0",
                    children: (0,
                    d.jsx)(j.B, {
                        icon: void 0,
                        currentModelConfig: s,
                        clientThreadId: a,
                        gizmoId: r
                    })
                }), (0,
                d.jsx)(Z.r, {
                    gizmo: l,
                    isOwner: m
                })]
            })
        }
        (i = a || (a = {}))[i.Keep = 0] = "Keep",
        i[i.Recents = 1] = "Recents";
        var U = (0,
        z.vU)({
            explore: {
                id: "gizmo.explore",
                defaultMessage: "Explore",
                description: "Button that allows you to explore more GPTs"
            },
            keepInSidebar: {
                id: "gizmo.keepInSidebar",
                defaultMessage: "Keep in sidebar",
                description: "Whether to keep a gpt in sidebar"
            },
            hideFromSidebar: {
                id: "gizmo.hideFromSidebar",
                defaultMessage: "Hide from sidebar",
                description: "Whether to hide a gpt from sidebar"
            },
            newChat: {
                id: "gizmo.newChat",
                defaultMessage: "New chat",
                description: "New chat tooltip"
            },
            clearChat: {
                id: "gizmo.clearChat",
                defaultMessage: "Clear chat",
                description: "Clear chat button label"
            }
        })
    },
    69789: function(e, t, n) {
        n.d(t, {
            C: function() {
                return d
            }
        });
        var i = n(39324)
          , a = n(71209)
          , s = n(91530)
          , r = n.n(s)
          , o = n(78103)
          , l = {
            showReferralInviteModal: !1
        }
          , d = (0,
        o.ZP)()(function(e) {
            return (0,
            a._)((0,
            i._)({}, l), {
                setShowReferralInviteModal: function(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r();
                    e({
                        showReferralInviteModal: t
                    }),
                    null == n || n()
                }
            })
        })
    },
    33377: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return e0
            }
        });
        var i, a, s, r, o, l = n(39324), d = n(71209), c = n(70216), u = n(10064), f = n(4337), g = n(20485), h = n(35250), m = n(54636), p = n(42780), x = n(8874), v = n(19841), b = n(10721), j = n(70079), y = n(1454), k = n(32004), w = n(94968), C = n(21389), M = n(13246), T = n(23234), N = n(50362), A = n(72290), _ = n(96251), P = n(60583), S = n(17314), I = n(21722), z = n(38104), Z = n(94705), B = n(7184), L = n(89319);
        function D() {
            var e = (0,
            f._)(["flex p-4 bg-gray-50 dark:bg-white/5 rounded-md items-center gap-4 min-h-[71px]"]);
            return D = function() {
                return e
            }
            ,
            e
        }
        function E() {
            var e = (0,
            f._)(["w-10 text-2xl text-center"]);
            return E = function() {
                return e
            }
            ,
            e
        }
        function R() {
            var e = (0,
            f._)(["flex-1 leading-5"]);
            return R = function() {
                return e
            }
            ,
            e
        }
        function G() {
            var e = (0,
            f._)(["flex gap-4 flex-col text-sm"]);
            return G = function() {
                return e
            }
            ,
            e
        }
        function O(e) {
            var t = e.icon
              , n = e.children;
            return (0,
            h.jsxs)(U, {
                children: [(0,
                h.jsx)(F, {
                    children: t
                }), (0,
                h.jsx)(H, {
                    children: n
                })]
            })
        }
        var U = C.Z.div(D())
          , F = C.Z.div(E())
          , H = C.Z.div(R())
          , q = C.Z.div(G())
          , K = n(86646)
          , V = n(17944)
          , W = n(82473)
          , Y = n(4536)
          , Q = n(70671)
          , J = n(64898)
          , X = n(43178);
        function $() {
            var e = (0,
            f._)(["mt-4 flex flex-col gap-4"]);
            return $ = function() {
                return e
            }
            ,
            e
        }
        function ee() {
            var e = (0,
            f._)(["text-sm text-red-500"]);
            return ee = function() {
                return e
            }
            ,
            e
        }
        var et = C.Z.div($())
          , en = C.Z.div(ee())
          , ei = n(35808)
          , ea = (0,
        w.vU)({
            enterWebsiteDomainTitle: {
                id: "DevelopPluginModal.enterWebsiteDomainTitle",
                description: "Title for the section where users enter their website domain",
                defaultMessage: "Enter your website domain"
            },
            learnToBuildPlugin: {
                id: "DevelopPluginModal.learnToBuildPlugin",
                description: "Text for the link directing users to the plugin documentation",
                defaultMessage: "Visit our documentation to learn how to build a plugin."
            },
            pluginApprovalWarning: {
                id: "DevelopPluginModal.pluginApprovalWarning",
                description: "Warning about plugin review process if the manifest is modified",
                defaultMessage: "If your plugin has been approved to be in the ChatGPT plugin store, and you have made changes to your plugin's manifest, your plugin will be removed from the store, and you will need to <resubmitLink>resubmit it for review</resubmitLink>."
            },
            domainInputPlaceholder: {
                id: "DevelopPluginModal.domainInputPlaceholder",
                description: "Placeholder text for the domain input field",
                defaultMessage: "ex: openai.com or localhost:3000"
            },
            authenticationFileText: {
                id: "DevelopPluginModal.authenticationFileText",
                description: "Text for the link to expand authentication settings",
                defaultMessage: "My file requires authentication"
            },
            authenticationTypeText: {
                id: "DevelopPluginModal.authenticationTypeText",
                description: "Label for the section to choose authentication type",
                defaultMessage: "Authentication type"
            },
            accessTokenText: {
                id: "DevelopPluginModal.accessTokenText",
                description: "Label for the section to input the access token",
                defaultMessage: "Access token"
            },
            findManifestFileText: {
                id: "DevelopPluginModal.findManifestFileText",
                description: "Button text to find the manifest file",
                defaultMessage: "Find manifest file"
            },
            cancelButtonText: {
                id: "DevelopPluginModal.cancelButtonText",
                description: "Button text for the cancel button",
                defaultMessage: "Cancel"
            },
            domainDisplayName: {
                id: "DevelopPluginModal.domainDisplayName",
                description: "Display name for the domain input",
                defaultMessage: "Domain"
            },
            bearerLabel: {
                id: "DevelopPluginModal.bearerLabel",
                description: "Label for the Bearer authentication type radio button",
                defaultMessage: "Bearer"
            },
            basicLabel: {
                id: "DevelopPluginModal.basicLabel",
                description: "Label for the Basic authentication type radio button",
                defaultMessage: "Basic"
            },
            refetchManifestButtonText: {
                id: "DevelopPluginModal.refetchManifestButtonText",
                description: "Button text for refetching the manifest",
                defaultMessage: "Refetch manifest"
            },
            installLocalhostPluginButtonText: {
                id: "DevelopPluginModal.installLocalhostPluginButtonText",
                description: "Button text for installing localhost plugin",
                defaultMessage: "Install localhost plugin"
            },
            nextButtonText: {
                id: "DevelopPluginModal.nextButtonText",
                description: "Button text for the next step",
                defaultMessage: "Next"
            },
            foundPluginTitle: {
                id: "DevelopPluginModal.foundPluginTitle",
                description: "Title for the modal when a plugin is found",
                defaultMessage: "Found plugin"
            },
            enterServiceAccessTokenLabel: {
                id: "DevelopPluginModal.enterServiceAccessTokenLabel",
                description: "Label for entering the service access token",
                defaultMessage: "Enter your service access token:"
            },
            enterOAuthCredentialsLabel: {
                id: "DevelopPluginModal.enterOAuthCredentialsLabel",
                description: "Label for entering OAuth credentials",
                defaultMessage: "Enter your OAuth credentials:"
            },
            addVerificationTokenTitle: {
                id: "DevelopPluginModal.addVerificationTokenTitle",
                description: "Title for the modal when adding verification tokens",
                defaultMessage: "Add verification token"
            },
            verifyTokensButtonText: {
                id: "DevelopPluginModal.verifyTokensButtonText",
                description: "Button text for verifying tokens",
                defaultMessage: "Verify tokens"
            },
            addTokensLaterButtonText: {
                id: "DevelopPluginModal.addTokensLaterButtonText",
                description: "Button text for adding tokens later",
                defaultMessage: "I'll add the tokens later"
            },
            addVerificationTokensText: {
                id: "DevelopPluginModal.addVerificationTokensText",
                description: "Text for adding verification tokens to the manifest file",
                defaultMessage: "Add the following verification tokens to your manifest file:"
            },
            readyToInstallTitle: {
                id: "DevelopPluginModal.readyToInstallTitle",
                description: "Title for the modal when the plugin is ready to install",
                defaultMessage: "Ready to install"
            },
            installForMeButtonText: {
                id: "DevelopPluginModal.installForMeButtonText",
                description: "Button text for installing the plugin for the user",
                defaultMessage: "Install for me"
            },
            installLaterButtonText: {
                id: "DevelopPluginModal.installLaterButtonText",
                description: "Button text for installing the plugin later",
                defaultMessage: "Install later"
            },
            unverifiedPluginText: {
                id: "DevelopPluginModal.unverifiedPluginText",
                description: "Text about the unverified plugin being installed by a limited number of developers",
                defaultMessage: "Your unverified plugin can now be installed by <developersLink>up to 15 developers</developersLink>. Once you're ready to make your plugin available to everyone, you can <submitPluginLink>submit your plugin for review</submitPluginLink>."
            }
        });
        function es(e) {
            var t = e.onClickInstall
              , n = e.onInstallLocalhost
              , i = e.onClose
              , a = (0,
            u._)((0,
            j.useState)(), 2)
              , s = a[0]
              , r = a[1]
              , o = (0,
            u._)((0,
            j.useState)(), 2)
              , l = o[0]
              , d = o[1]
              , c = (0,
            u._)((0,
            j.useState)(!1), 2)
              , f = c[0]
              , g = c[1]
              , m = (0,
            j.useCallback)(function(e) {
                r(e)
            }, [])
              , p = (0,
            j.useCallback)(function() {
                g(!0)
            }, []);
            return f && (null == s ? void 0 : s.scrapeManifestResponse.plugin) ? (0,
            h.jsx)(ec, {
                plugin: null == s ? void 0 : s.scrapeManifestResponse.plugin,
                onClickInstall: t,
                onClose: i
            }) : l && (null == s ? void 0 : s.scrapeManifestResponse.plugin) ? (0,
            h.jsx)(ed, {
                plugin: s.scrapeManifestResponse.plugin,
                manifestAccessToken: s.manifestAccessToken,
                verificationTokens: l,
                onReadyToInstall: p,
                onClose: i
            }) : s ? (0,
            h.jsx)(el, {
                loadManifestResult: s,
                onRefetch: m,
                onSubmitAuthInfo: d,
                onReadyToInstall: p,
                onInstallLocalhost: n,
                onClose: i
            }) : (0,
            h.jsx)(er, {
                onFetch: m,
                onClose: i
            })
        }
        function er(e) {
            var t = e.onFetch
              , n = e.onClose
              , i = (0,
            Q.Z)()
              , a = (0,
            V.aF)()
              , s = (0,
            u._)((0,
            j.useState)(!1), 2)
              , r = s[0]
              , o = s[1]
              , c = (0,
            u._)((0,
            j.useState)("bearer"), 2)
              , f = c[0]
              , g = c[1]
              , m = (0,
            u._)((0,
            j.useState)(), 2)
              , p = m[0]
              , x = m[1]
              , v = (0,
            j.useRef)(null)
              , b = (0,
            j.useRef)(null)
              , w = (0,
            J.useFetchManifestAndSpec)()
              , C = w.fetchManifestAndSpec
              , M = w.isLoading;
            (0,
            j.useEffect)(function() {
                var e;
                null === (e = v.current) || void 0 === e || e.focus()
            }, []);
            var T = (0,
            j.useCallback)(function() {
                o(function(e) {
                    return !e
                })
            }, [])
              , N = (0,
            j.useCallback)(function(e) {
                g(e.target.value)
            }, [])
              , A = (0,
            j.useCallback)((0,
            I._)(function() {
                var e, n, a;
                return (0,
                z.Jh)(this, function(s) {
                    return (a = null === (e = v.current) || void 0 === e ? void 0 : e.value) ? (C({
                        domain: a,
                        manifestAccessToken: r ? {
                            authorization_type: f,
                            token: (null === (n = b.current) || void 0 === n ? void 0 : n.value) || ""
                        } : void 0,
                        onSuccess: t,
                        onError: function(e) {
                            return x((null == e ? void 0 : e.message) || "Couldn't find manifest.")
                        }
                    }),
                    [2]) : (x(i.formatMessage(ea.domainInputPlaceholder)),
                    [2])
                })
            }), [C, t, f, r, i]);
            return (0,
            h.jsx)(B.Z, {
                isOpen: !0,
                onClose: n,
                type: "success",
                title: (0,
                h.jsx)(k.Z, (0,
                l._)({}, ea.enterWebsiteDomainTitle)),
                primaryButton: (0,
                h.jsx)(Z.ZP.Button, {
                    title: i.formatMessage(ea.findManifestFileText),
                    color: "primary",
                    onClick: A,
                    loading: M
                }),
                secondaryButton: (0,
                h.jsx)(Z.ZP.Button, {
                    title: i.formatMessage(ea.cancelButtonText),
                    color: "neutral",
                    onClick: n
                }),
                children: (0,
                h.jsxs)(et, {
                    children: [(0,
                    h.jsx)("a", {
                        href: "https://platform.openai.com/docs/plugins/getting-started",
                        target: "_blank",
                        rel: "noreferrer",
                        className: "text-green-600",
                        children: (0,
                        h.jsx)(k.Z, (0,
                        l._)({}, ea.learnToBuildPlugin))
                    }), (0,
                    h.jsx)(O, {
                        icon: "\uD83D\uDEA8",
                        children: (0,
                        h.jsx)(k.Z, (0,
                        d._)((0,
                        l._)({}, ea.pluginApprovalWarning), {
                            values: {
                                resubmitLink: function(e) {
                                    return (0,
                                    h.jsx)("a", {
                                        target: "_blank",
                                        rel: "noreferrer",
                                        className: "text-green-600",
                                        href: "https://platform.openai.com/docs/plugins/review/submit-a-plugin-for-review",
                                        children: e
                                    })
                                }
                            }
                        }))
                    }), (0,
                    h.jsx)(L.Z, {
                        ref: v,
                        name: "url",
                        displayName: i.formatMessage(ea.domainDisplayName),
                        placeholder: i.formatMessage(ea.domainInputPlaceholder),
                        onPressEnter: A,
                        autoFocus: !0
                    }), null != a && (0,
                    Y.yl)(a) && (0,
                    h.jsxs)(h.Fragment, {
                        children: [(0,
                        h.jsxs)("div", {
                            role: "button",
                            className: "flex cursor-pointer items-center gap-1 text-sm text-black/60 hover:text-black/70",
                            onClick: T,
                            children: [(0,
                            h.jsx)("div", {
                                children: (0,
                                h.jsx)(k.Z, (0,
                                l._)({}, ea.authenticationFileText))
                            }), r ? (0,
                            h.jsx)(y.rH8, {
                                className: "icon-sm"
                            }) : (0,
                            h.jsx)(y.bTu, {
                                className: "icon-sm"
                            })]
                        }), r && (0,
                        h.jsxs)(h.Fragment, {
                            children: [(0,
                            h.jsxs)("div", {
                                className: "flex flex-col gap-2 text-sm",
                                children: [(0,
                                h.jsx)("div", {
                                    children: (0,
                                    h.jsx)(k.Z, (0,
                                    l._)({}, ea.authenticationTypeText))
                                }), (0,
                                h.jsxs)("div", {
                                    className: "flex gap-6",
                                    children: [(0,
                                    h.jsx)(eo, {
                                        label: i.formatMessage(ea.bearerLabel),
                                        value: "bearer",
                                        checked: "bearer" === f,
                                        onChange: N
                                    }), (0,
                                    h.jsx)(eo, {
                                        label: i.formatMessage(ea.basicLabel),
                                        value: "basic",
                                        checked: "basic" === f,
                                        onChange: N
                                    })]
                                })]
                            }), (0,
                            h.jsxs)("div", {
                                className: "flex flex-col gap-2 text-sm",
                                children: [(0,
                                h.jsx)("div", {
                                    children: (0,
                                    h.jsx)(k.Z, (0,
                                    l._)({}, ea.accessTokenText))
                                }), (0,
                                h.jsx)(L.Z, {
                                    ref: b,
                                    name: "manifestToken",
                                    onPressEnter: A
                                })]
                            })]
                        })]
                    }), p && (0,
                    h.jsx)(en, {
                        children: p
                    })]
                })
            })
        }
        function eo(e) {
            var t = e.label
              , n = e.value
              , i = e.checked
              , a = e.onChange;
            return (0,
            h.jsxs)("label", {
                className: "flex items-center gap-2",
                children: [(0,
                h.jsx)("input", {
                    name: "manifestAuthType",
                    type: "radio",
                    value: n,
                    checked: i,
                    onChange: a,
                    className: "text-green-600 focus:ring-green-600"
                }), t]
            })
        }
        function el(e) {
            var t = e.loadManifestResult
              , n = e.onRefetch
              , i = e.onSubmitAuthInfo
              , a = e.onReadyToInstall
              , s = e.onInstallLocalhost
              , r = e.onClose
              , o = (0,
            Q.Z)()
              , d = t.domain
              , c = t.manifestAccessToken
              , f = t.scrapeManifestResponse
              , g = t.apiValidationInfo
              , m = f.plugin
              , p = f.manifest_validation_info
              , x = (0,
            u._)((0,
            j.useState)(), 2)
              , v = x[0]
              , b = x[1]
              , y = (0,
            u._)((0,
            j.useState)(!1), 2)
              , w = y[0]
              , C = y[1]
              , M = (0,
            j.useRef)(null)
              , T = (0,
            j.useRef)(null)
              , N = (0,
            j.useRef)(null)
              , A = (0,
            J.useFetchManifestAndSpec)()
              , P = A.fetchManifestAndSpec
              , S = A.isLoading
              , D = (0,
            W.NL)()
              , E = m && (0,
            _.cf)(m)
              , R = (null == m ? void 0 : m.manifest.auth.type) === "service_http"
              , G = (null == m ? void 0 : m.manifest.auth.type) === "oauth"
              , O = p.errors && p.errors.length > 0 || (null == g ? void 0 : g.errors) && (null == g ? void 0 : g.errors.length) > 0
              , U = (0,
            j.useCallback)((0,
            I._)(function() {
                var e, t, o, l, u;
                return (0,
                z.Jh)(this, function(f) {
                    switch (f.label) {
                    case 0:
                        if (!O)
                            return [3, 1];
                        return P({
                            domain: d,
                            manifestAccessToken: c,
                            onSuccess: n,
                            onError: function(e) {
                                return b((null == e ? void 0 : e.message) || "Couldn't find manifest.")
                            }
                        }),
                        [3, 15];
                    case 1:
                        if (!E)
                            return [3, 2];
                        return (0,
                        J.addToCachedInstalledPlugins)(m, D),
                        s(m),
                        [3, 15];
                    case 2:
                        if (!R)
                            return [3, 8];
                        if (!(null === (e = M.current) || void 0 === e ? void 0 : e.value))
                            return b("Please provide your service access token."),
                            [2];
                        f.label = 3;
                    case 3:
                        return f.trys.push([3, 5, 6, 7]),
                        C(!0),
                        [4, K.ZP.setPluginServiceHttpToken({
                            id: m.id,
                            serviceAccessToken: M.current.value
                        })];
                    case 4:
                        return i(f.sent().verification_tokens),
                        [3, 7];
                    case 5:
                        return f.sent(),
                        b("Error setting access token."),
                        [3, 7];
                    case 6:
                        return C(!1),
                        [7];
                    case 7:
                        return [3, 15];
                    case 8:
                        if (!G)
                            return [3, 14];
                        if (l = null === (t = T.current) || void 0 === t ? void 0 : t.value,
                        u = null === (o = N.current) || void 0 === o ? void 0 : o.value,
                        !l || !u)
                            return b("Please provide your OAuth credentials."),
                            [2];
                        f.label = 9;
                    case 9:
                        return f.trys.push([9, 11, 12, 13]),
                        [4, K.ZP.setPluginOAuthClientCredentials({
                            id: m.id,
                            clientId: T.current.value,
                            clientSecret: N.current.value
                        })];
                    case 10:
                        return i(f.sent().verification_tokens),
                        [3, 13];
                    case 11:
                        return f.sent(),
                        b("Error setting OAuth credentials."),
                        [3, 13];
                    case 12:
                        return C(!1),
                        [7];
                    case 13:
                        return [3, 15];
                    case 14:
                        m ? a(m) : r(),
                        f.label = 15;
                    case 15:
                        return [2]
                    }
                })
            }), [R, G, m, d, c, O, E, D, P, n, i, a, s, r]);
            return (0,
            h.jsx)(B.Z, {
                isOpen: !0,
                onClose: r,
                type: "success",
                title: (0,
                h.jsx)(k.Z, (0,
                l._)({}, ea.foundPluginTitle)),
                primaryButton: (0,
                h.jsx)(Z.ZP.Button, {
                    title: O ? o.formatMessage(ea.refetchManifestButtonText) : E ? o.formatMessage(ea.installLocalhostPluginButtonText) : o.formatMessage(ea.nextButtonText),
                    color: "primary",
                    onClick: U,
                    loading: w || S
                }),
                secondaryButton: (O || R || G) && (0,
                h.jsx)(Z.ZP.Button, {
                    title: o.formatMessage(ea.cancelButtonText),
                    color: "neutral",
                    onClick: r
                }),
                children: (0,
                h.jsxs)(et, {
                    children: [(0,
                    h.jsx)(ei.rC, {
                        manifestValidationInfo: p
                    }), g && (0,
                    h.jsx)(ei.q6, {
                        apiValidationInfo: g
                    }), m && (0,
                    h.jsx)(X.Z, {
                        plugin: m
                    }), R && !O && (0,
                    h.jsxs)("div", {
                        children: [(0,
                        h.jsx)("div", {
                            className: "text-sm",
                            children: (0,
                            h.jsx)(k.Z, (0,
                            l._)({}, ea.enterServiceAccessTokenLabel))
                        }), (0,
                        h.jsx)("div", {
                            className: "mt-2",
                            children: (0,
                            h.jsx)(L.Z, {
                                ref: M,
                                name: "serviceToken",
                                placeholder: "Service access token",
                                autoComplete: "off",
                                onPressEnter: U,
                                autoFocus: !0
                            })
                        })]
                    }), G && !O && (0,
                    h.jsxs)("div", {
                        children: [(0,
                        h.jsx)("div", {
                            className: "text-sm",
                            children: (0,
                            h.jsx)(k.Z, (0,
                            l._)({}, ea.enterOAuthCredentialsLabel))
                        }), (0,
                        h.jsx)("div", {
                            className: "mt-2",
                            children: (0,
                            h.jsx)(L.Z, {
                                ref: T,
                                name: "clientId",
                                placeholder: "Client ID",
                                autoComplete: "off",
                                onPressEnter: U,
                                autoFocus: !0
                            })
                        }), (0,
                        h.jsx)("div", {
                            className: "mt-2",
                            children: (0,
                            h.jsx)(L.Z, {
                                ref: N,
                                type: "password",
                                name: "clientSecret",
                                placeholder: "Client secret",
                                autoComplete: "off",
                                onPressEnter: U
                            })
                        })]
                    }), v && (0,
                    h.jsx)(en, {
                        children: v
                    })]
                })
            })
        }
        function ed(e) {
            var t = e.plugin
              , n = e.manifestAccessToken
              , i = e.verificationTokens
              , a = e.onReadyToInstall
              , s = e.onClose
              , r = (0,
            Q.Z)()
              , o = (0,
            u._)((0,
            j.useState)(), 2)
              , d = o[0]
              , c = o[1]
              , f = (0,
            u._)((0,
            j.useState)(!1), 2)
              , g = f[0]
              , m = f[1]
              , p = (0,
            j.useCallback)((0,
            I._)(function() {
                var e, s;
                return (0,
                z.Jh)(this, function(r) {
                    switch (r.label) {
                    case 0:
                        return r.trys.push([0, 2, 3, 4]),
                        m(!0),
                        [4, K.ZP.scrapePluginManifest({
                            domain: t.domain,
                            manifestAccessToken: n
                        })];
                    case 1:
                        if (e = r.sent().plugin) {
                            for (var o in s = "service_http" === e.manifest.auth.type || "oauth" === e.manifest.auth.type ? e.manifest.auth.verification_tokens : {},
                            i)
                                if (i[o] !== s[o])
                                    return c('Please add the "'.concat(o, '" token to your manifest file.')),
                                    [2];
                            a(e)
                        } else
                            c("Error creating plugin.");
                        return [3, 4];
                    case 2:
                        return r.sent(),
                        c("Error creating plugin."),
                        [3, 4];
                    case 3:
                        return m(!1),
                        [7];
                    case 4:
                        return [2]
                    }
                })
            }), [t, n, i, a]);
            return (0,
            h.jsx)(B.Z, {
                isOpen: !0,
                onClose: s,
                type: "success",
                title: (0,
                h.jsx)(k.Z, (0,
                l._)({}, ea.addVerificationTokenTitle)),
                primaryButton: (0,
                h.jsx)(Z.ZP.Button, {
                    title: r.formatMessage(ea.verifyTokensButtonText),
                    color: "primary",
                    onClick: p,
                    loading: g
                }),
                secondaryButton: (0,
                h.jsx)(Z.ZP.Button, {
                    title: r.formatMessage(ea.addTokensLaterButtonText),
                    color: "neutral",
                    onClick: s
                }),
                children: (0,
                h.jsxs)(et, {
                    children: [(0,
                    h.jsx)(X.Z, {
                        plugin: t
                    }), (0,
                    h.jsx)("div", {
                        className: "text-sm",
                        children: (0,
                        h.jsx)(k.Z, (0,
                        l._)({}, ea.addVerificationTokensText))
                    }), (0,
                    h.jsx)("pre", {
                        className: "text-sm",
                        children: JSON.stringify(i, null)
                    }), d && (0,
                    h.jsx)(en, {
                        children: d
                    })]
                })
            })
        }
        function ec(e) {
            var t = e.plugin
              , n = e.onClickInstall
              , i = e.onClose
              , a = (0,
            Q.Z)()
              , s = (0,
            j.useCallback)(function() {
                n(t)
            }, [t, n]);
            return (0,
            h.jsx)(B.Z, {
                isOpen: !0,
                onClose: i,
                type: "success",
                title: (0,
                h.jsx)(k.Z, (0,
                l._)({}, ea.readyToInstallTitle)),
                primaryButton: (0,
                h.jsx)(Z.ZP.Button, {
                    title: a.formatMessage(ea.installForMeButtonText),
                    color: "primary",
                    onClick: s
                }),
                secondaryButton: (0,
                h.jsx)(Z.ZP.Button, {
                    title: a.formatMessage(ea.installLaterButtonText),
                    color: "neutral",
                    onClick: i
                }),
                children: (0,
                h.jsx)(et, {
                    children: (0,
                    h.jsx)("div", {
                        className: "text-sm",
                        children: (0,
                        h.jsx)(k.Z, (0,
                        d._)((0,
                        l._)({}, ea.unverifiedPluginText), {
                            values: {
                                developersLink: function(e) {
                                    return (0,
                                    h.jsx)("a", {
                                        href: "https://platform.openai.com/docs/plugins/production/can-i-invite-people-to-try-my-plugin",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        className: "text-green-600",
                                        children: e
                                    })
                                },
                                submitPluginLink: function(e) {
                                    return (0,
                                    h.jsx)("a", {
                                        href: "https://platform.openai.com/docs/plugins/review/submit-a-plugin-for-review",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        className: "text-green-600",
                                        children: e
                                    })
                                }
                            }
                        }))
                    })
                })
            })
        }
        var eu = (0,
        w.vU)({
            title: {
                id: "InstallUnverifiedDisclaimerModal.title",
                defaultMessage: "Unverified plugin",
                description: "Title for the Install Unverified Disclaimer Modal"
            },
            continue: {
                id: "InstallUnverifiedDisclaimerModal.continue",
                defaultMessage: "Continue",
                description: "Primary action button for proceeding with installation"
            },
            cancel: {
                id: "InstallUnverifiedDisclaimerModal.cancel",
                defaultMessage: "Cancel",
                description: "Secondary action button for cancelling the installation"
            },
            warning: {
                id: "InstallUnverifiedDisclaimerModal.warning",
                defaultMessage: "OpenAI hasn't vetted this plugin. This plugin may pose risks to your information. Be sure you trust this plugin before proceeding.",
                description: "Warning message about unverified plugins"
            }
        });
        function ef(e) {
            var t = e.onConfirm
              , n = e.onClose
              , i = (0,
            Q.Z)();
            return (0,
            h.jsx)(B.Z, {
                isOpen: !0,
                onClose: n,
                type: "success",
                title: i.formatMessage(eu.title),
                primaryButton: (0,
                h.jsx)(Z.ZP.Button, {
                    title: i.formatMessage(eu.continue),
                    color: "primary",
                    onClick: t
                }),
                secondaryButton: (0,
                h.jsx)(Z.ZP.Button, {
                    title: i.formatMessage(eu.cancel),
                    color: "neutral",
                    onClick: n
                }),
                children: (0,
                h.jsx)(et, {
                    children: (0,
                    h.jsx)(q, {
                        children: (0,
                        h.jsx)(O, {
                            icon: "\uD83D\uDEA8",
                            children: (0,
                            h.jsx)(k.Z, (0,
                            l._)({}, eu.warning))
                        })
                    })
                })
            })
        }
        function eg(e) {
            var t = e.plugin
              , n = e.onInstall
              , i = e.onClose
              , a = (0,
            u._)((0,
            j.useState)(!1), 2)
              , s = a[0]
              , r = a[1]
              , o = (0,
            u._)((0,
            j.useState)(t), 2)
              , l = o[0]
              , d = o[1]
              , c = (0,
            j.useCallback)(function() {
                r(!0)
            }, []);
            return l ? s ? (0,
            h.jsx)(em, {
                plugin: l,
                onInstall: n,
                onClose: i
            }) : (0,
            h.jsx)(ef, {
                onConfirm: c,
                onClose: i
            }) : (0,
            h.jsx)(eh, {
                onLoad: d,
                onClose: i
            })
        }
        function eh(e) {
            var t = e.onLoad
              , n = e.onClose
              , i = (0,
            Q.Z)()
              , a = (0,
            j.useRef)(null)
              , s = (0,
            u._)((0,
            j.useState)(!1), 2)
              , r = s[0]
              , o = s[1]
              , d = (0,
            u._)((0,
            j.useState)(), 2)
              , c = d[0]
              , f = d[1];
            (0,
            j.useEffect)(function() {
                setTimeout(function() {
                    var e;
                    null === (e = a.current) || void 0 === e || e.focus()
                }, 50)
            }, []);
            var g = (0,
            j.useCallback)((0,
            I._)(function() {
                var e, n, i;
                return (0,
                z.Jh)(this, function(s) {
                    switch (s.label) {
                    case 0:
                        if (!(n = null === (e = a.current) || void 0 === e ? void 0 : e.value))
                            return f("Please provide a URL."),
                            [2];
                        if ((0,
                        _.NB)(n))
                            return f('To add a localhost plugin, please go to "Develop your own plugin."'),
                            [2];
                        s.label = 1;
                    case 1:
                        return s.trys.push([1, 3, 4, 5]),
                        o(!0),
                        [4, K.ZP.getPluginByDomain({
                            domain: n
                        })];
                    case 2:
                        return (i = s.sent()) ? t(i) : f("That plugin doesn't exist."),
                        [3, 5];
                    case 3:
                        return s.sent(),
                        f("Couldn't find plugin."),
                        [3, 5];
                    case 4:
                        return o(!1),
                        [7];
                    case 5:
                        return [2]
                    }
                })
            }), [t, o, f]);
            return (0,
            h.jsx)(B.Z, {
                isOpen: !0,
                onClose: n,
                type: "success",
                title: i.formatMessage(ep.installUnverifiedPluginTitle),
                primaryButton: (0,
                h.jsx)(Z.ZP.Button, {
                    title: i.formatMessage(ep.findPlugin),
                    color: "primary",
                    onClick: g,
                    loading: r
                }),
                secondaryButton: (0,
                h.jsx)(Z.ZP.Button, {
                    title: i.formatMessage(ep.cancel),
                    color: "neutral",
                    onClick: n
                }),
                children: (0,
                h.jsxs)(et, {
                    children: [(0,
                    h.jsx)("div", {
                        children: (0,
                        h.jsx)(k.Z, (0,
                        l._)({}, ep.pleaseProvideDomain))
                    }), (0,
                    h.jsx)(L.Z, {
                        ref: a,
                        name: "url",
                        placeholder: "openai.com",
                        onPressEnter: g
                    }), c && (0,
                    h.jsx)(en, {
                        children: c
                    })]
                })
            })
        }
        function em(e) {
            var t = e.plugin
              , n = e.onInstall
              , i = e.onClose
              , a = (0,
            Q.Z)()
              , s = (0,
            u._)((0,
            j.useState)(), 2)
              , r = s[0]
              , o = s[1]
              , c = (0,
            u._)((0,
            j.useState)(!1), 2)
              , f = c[0]
              , g = c[1]
              , m = (0,
            j.useRef)(null)
              , p = (0,
            J.useInstallPlugin)({
                onSuccess: function(e) {
                    n(e),
                    i()
                },
                onError: function(e) {
                    o("Couldn't install plugin.")
                }
            })
              , x = t.manifest.name_for_human
              , v = "user_http" === t.manifest.auth.type
              , b = "oauth" === t.manifest.auth.type
              , y = (0,
            j.useCallback)((0,
            I._)(function() {
                return (0,
                z.Jh)(this, function(e) {
                    if (b)
                        (0,
                        J.doOauthRedirect)(t);
                    else
                        try {
                            g(!0),
                            p(t.id)
                        } catch (e) {
                            o("Couldn't install plugin.")
                        } finally {
                            g(!1)
                        }
                    return [2]
                })
            }), [t, b, p]);
            return (0,
            h.jsx)(B.Z, {
                isOpen: !0,
                onClose: i,
                type: "success",
                title: a.formatMessage(ep.unverifiedPluginTitle),
                primaryButton: (0,
                h.jsx)(Z.ZP.Button, {
                    title: b ? a.formatMessage(ep.loginWithPlugin, {
                        pluginName: x
                    }) : a.formatMessage(ep.installPlugin),
                    color: "primary",
                    onClick: y,
                    loading: f
                }),
                secondaryButton: (0,
                h.jsx)(Z.ZP.Button, {
                    title: a.formatMessage(ep.cancel),
                    color: "neutral",
                    onClick: i
                }),
                children: (0,
                h.jsxs)(et, {
                    children: [(0,
                    h.jsx)(X.Z, {
                        plugin: t
                    }), v && (0,
                    h.jsxs)("div", {
                        children: [(0,
                        h.jsx)("div", {
                            className: "text-sm",
                            children: t.manifest.auth.instructions || (0,
                            h.jsx)(k.Z, (0,
                            l._)({}, ep.enterHttpAccessToken))
                        }), (0,
                        h.jsx)("div", {
                            className: "mt-2",
                            children: (0,
                            h.jsx)(L.Z, {
                                ref: m,
                                type: "password",
                                name: "token",
                                placeholder: "Enter your credentials",
                                autoComplete: "off",
                                onPressEnter: y
                            })
                        })]
                    }), b && (0,
                    h.jsx)("div", {
                        children: (0,
                        h.jsx)(k.Z, (0,
                        d._)((0,
                        l._)({}, ep.youWillBeRedirected), {
                            values: {
                                pluginName: (0,
                                h.jsx)("span", {
                                    className: "font-medium",
                                    children: x
                                })
                            }
                        }))
                    }), r && (0,
                    h.jsx)(en, {
                        children: r
                    })]
                })
            })
        }
        var ep = (0,
        w.vU)({
            installUnverifiedPluginTitle: {
                id: "InstallPluginModal.installUnverifiedPluginTitle",
                description: "Title for the Install an Unverified Plugin modal",
                defaultMessage: "Install an unverified plugin"
            },
            pleaseProvideDomain: {
                id: "InstallPluginModal.pleaseProvideDomain",
                description: "Text asking the user to provide the website domain of the unverified plugin",
                defaultMessage: "Please provide the website domain of the unverified plugin you'd like to install."
            },
            findPlugin: {
                id: "InstallPluginModal.findPlugin",
                description: "Text for the Find Plugin button",
                defaultMessage: "Find plugin"
            },
            cancel: {
                id: "InstallPluginModal.cancel",
                description: "Text for the Cancel button",
                defaultMessage: "Cancel"
            },
            unverifiedPluginTitle: {
                id: "InstallPluginModal.unverifiedPluginTitle",
                description: "Title for the Unverified Plugin modal",
                defaultMessage: "Unverified plugin"
            },
            loginWithPlugin: {
                id: "InstallPluginModal.loginWithPlugin",
                description: "Text for the Log in with plugin button",
                defaultMessage: "Log in with {pluginName}"
            },
            installPlugin: {
                id: "InstallPluginModal.installPlugin",
                description: "Text for the Install Plugin button",
                defaultMessage: "Install plugin"
            },
            enterHttpAccessToken: {
                id: "InstallPluginModal.enterHttpAccessToken",
                description: "Text asking user to enter their HTTP access token",
                defaultMessage: "Enter your HTTP access token below:"
            },
            youWillBeRedirected: {
                id: "InstallPluginModal.youWillBeRedirected",
                description: "Text informing the user they will be redirected to the plugin's login page",
                defaultMessage: "You will be redirected to {pluginName} to log in."
            }
        })
          , ex = n(96237)
          , ev = n(48133)
          , eb = n(42798)
          , ej = n(62682)
          , ey = n(1491)
          , ek = n(94486)
          , ew = n(89678)
          , eC = n.n(ew)
          , eM = n(96096)
          , eT = n(56457)
          , eN = n(21613);
        (i = s || (s = {}))[i.All = 0] = "All",
        i[i.Installed = 1] = "Installed",
        (a = r || (r = {})).New = "newly_added",
        a.Popular = "most_popular";
        var eA = [{
            id: r.Popular,
            title: "Popular"
        }, {
            id: r.New,
            title: "New"
        }, {
            id: s.All,
            title: "All"
        }, {
            id: s.Installed,
            title: "Installed"
        }]
          , e_ = n(64502)
          , eP = (0,
        w.vU)({
            prev: {
                id: "PaginationControls.prev",
                defaultMessage: "Prev",
                description: "Label for the previous page button in the pagination controls"
            },
            next: {
                id: "PaginationControls.next",
                defaultMessage: "Next",
                description: "Label for the next page button in the pagination controls"
            }
        });
        function eS(e) {
            var t = e.page
              , n = e.numPages
              , i = e.goToPage
              , a = t > 0
              , s = t < n - 1
              , r = (0,
            j.useCallback)(function() {
                i(Math.max(t - 1, 0))
            }, [t, i])
              , o = (0,
            j.useCallback)(function() {
                i(Math.min(t + 1, n - 1))
            }, [t, n, i])
              , d = []
              , c = !0
              , u = !1
              , f = void 0;
            try {
                for (var g, m = (function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10
                      , i = Math.max(0, t - n + 1);
                    if (0 === i)
                        return eI(0, t);
                    var a = eI(0, e)
                      , s = eI(e + 1, t);
                    if (i < s.length - 1)
                        s.splice(Math.floor((s.length - i) / 2), i, -1);
                    else if (i < a.length - 1)
                        a.splice(Math.floor((a.length - i) / 2), i, -1);
                    else {
                        var r = Math.min(s.length - 3, i)
                          , o = i - r + 1;
                        s.splice(Math.floor((s.length - r) / 2), r, -1),
                        a.splice(Math.floor((a.length - o) / 2), o, -2)
                    }
                    return (0,
                    e_._)(a).concat([e], (0,
                    e_._)(s))
                }
                )(t, n)[Symbol.iterator](); !(c = (g = m.next()).done); c = !0)
                    !function() {
                        var e = g.value;
                        e < 0 ? d.push((0,
                        h.jsx)("div", {
                            role: "button",
                            className: "flex h-5 w-5 items-center justify-center",
                            children: "…"
                        }, "ellipsis-".concat(e))) : d.push((0,
                        h.jsx)(eV, {
                            role: "button",
                            className: (0,
                            v.default)("flex h-5 w-5 items-center justify-center", e === t && "text-blue-600 hover:text-blue-600 dark:text-blue-600 dark:hover:text-blue-600"),
                            onClick: function() {
                                return i(e)
                            },
                            children: e + 1
                        }, e))
                    }()
            } catch (e) {
                u = !0,
                f = e
            } finally {
                try {
                    c || null == m.return || m.return()
                } finally {
                    if (u)
                        throw f
                }
            }
            return (0,
            h.jsxs)("div", {
                className: "flex flex-wrap gap-2 text-sm text-black/60 dark:text-white/70",
                children: [(0,
                h.jsxs)(eV, {
                    role: "button",
                    className: (0,
                    v.default)("flex items-center", !a && "opacity-50"),
                    onClick: r,
                    $disabled: !a,
                    children: [(0,
                    h.jsx)(y.YFh, {
                        className: "icon-sm"
                    }), (0,
                    h.jsx)(k.Z, (0,
                    l._)({}, eP.prev))]
                }), d, (0,
                h.jsxs)(eV, {
                    role: "button",
                    className: (0,
                    v.default)("flex items-center", !s && "opacity-50"),
                    onClick: o,
                    $disabled: !s,
                    children: [(0,
                    h.jsx)(k.Z, (0,
                    l._)({}, eP.next)), (0,
                    h.jsx)(y.Tfp, {
                        className: "icon-sm"
                    })]
                })]
            })
        }
        function eI(e, t) {
            return Array.from({
                length: t - e
            }, function(t, n) {
                return n + e
            })
        }
        var ez = (0,
        w.vU)({
            title: {
                id: "RequiresMfaModal.title",
                defaultMessage: "Enable two-factor authentication",
                description: "Title for the modal to enable two-factor authentication"
            },
            enableMfaButton: {
                id: "RequiresMfaModal.enableMfaButton",
                defaultMessage: "Enable two-factor authentication",
                description: "Label for the button to enable two-factor authentication"
            },
            cancelButton: {
                id: "RequiresMfaModal.cancelButton",
                defaultMessage: "Cancel",
                description: "Label for the cancel button"
            },
            disclaimer: {
                id: "RequiresMfaModal.disclaimer",
                defaultMessage: "This plugin requires you to have two-factor authentication enabled for additional security. Please set up two-factor authentication and try again.",
                description: "Disclaimer text informing the user that the plugin requires two-factor authentication"
            }
        });
        function eZ(e) {
            var t = e.onClose
              , n = (0,
            ek.S)().setupMfa
              , i = (0,
            Q.Z)();
            return (0,
            h.jsx)(B.Z, {
                isOpen: !0,
                onClose: t,
                type: "success",
                title: i.formatMessage(ez.title),
                primaryButton: (0,
                h.jsx)(Z.ZP.Button, {
                    title: i.formatMessage(ez.enableMfaButton),
                    color: "primary",
                    onClick: n
                }),
                secondaryButton: (0,
                h.jsx)(Z.ZP.Button, {
                    title: i.formatMessage(ez.cancelButton),
                    color: "neutral",
                    onClick: t
                }),
                children: (0,
                h.jsx)(et, {
                    children: (0,
                    h.jsx)(q, {
                        children: (0,
                        h.jsx)(O, {
                            icon: "\uD83D\uDEA8",
                            children: (0,
                            h.jsx)(k.Z, (0,
                            l._)({}, ez.disclaimer))
                        })
                    })
                })
            })
        }
        function eB() {
            var e = (0,
            f._)(["text-sm text-black/70 dark:text-white/70 whitespace-nowrap ", ""]);
            return eB = function() {
                return e
            }
            ,
            e
        }
        function eL() {
            var e = (0,
            f._)(["hidden h-4 border-l border-black/30 dark:border-white/30 sm:block"]);
            return eL = function() {
                return e
            }
            ,
            e
        }
        var eD = (o = {},
        (0,
        ex._)(o, ey._G.Mobile, 8),
        (0,
        ex._)(o, ey._G.Small, 4),
        (0,
        ex._)(o, ey._G.Medium, 4),
        (0,
        ex._)(o, ey._G.Large, 6),
        (0,
        ex._)(o, ey._G.XLarge, 8),
        o)
          , eE = (0,
        w.vU)({
            title: {
                id: "PluginStoreModal.title",
                defaultMessage: "Plugin store",
                description: "Title of the plugin store"
            },
            searchPlaceholder: {
                id: "PluginStoreModal.searchPlaceholder",
                defaultMessage: "Search plugins",
                description: "Placeholder text for the plugin store search bar"
            },
            noSearchResultsTitle: {
                id: "PluginStoreModal.noSearchResults",
                defaultMessage: 'No plugins found for "{query}"',
                description: "Message shown when no plugins are found for a search query"
            },
            noSearchResultsHint: {
                id: "PluginStoreModal.noSearchResultsHint",
                defaultMessage: "Try a different query or category",
                description: "Hint shown when no plugins are found for a search query"
            },
            installUnverifiedPlugin: {
                id: "PluginStoreModal.installUnverifiedPlugin",
                defaultMessage: "Install an unverified plugin",
                description: "Link to dialog to install an unverified plugin"
            },
            developPlugin: {
                id: "PluginStoreModal.developPlugin",
                defaultMessage: "Develop your own plugin",
                description: "Link to dialog to develop your own plugin"
            },
            aboutPlugins: {
                id: "PluginStoreModal.aboutPlugins",
                defaultMessage: "About plugins",
                description: "Link to learn more about plugins"
            },
            install: {
                id: "PluginStoreModal.card.install",
                defaultMessage: "Install",
                description: "Button to install a plugin"
            },
            uninstall: {
                id: "PluginStoreModal.card.uninstall",
                defaultMessage: "Uninstall",
                description: "Button to uninstall a plugin"
            },
            installing: {
                id: "PluginStoreModal.card.installing",
                defaultMessage: "Installing",
                description: "Status label when installing a plugin"
            },
            uninstalling: {
                id: "PluginStoreModal.card.uninstalling",
                defaultMessage: "Uninstalling",
                description: "Status label when uninstalling a plugin"
            },
            developerInfo: {
                id: "PluginStoreModal.card.developerInfo",
                defaultMessage: "Developer info",
                description: "Label for plugin developer information"
            }
        })
          , eR = r.Popular;
        function eG(e) {
            var t, n, i, a = e.onInstallWithAuthRequired, r = e.onClickInstallDeveloper, o = e.onClickDevelop, d = e.onClickAbout, c = e.onClose, f = (0,
            Q.Z)(), g = (0,
            V.hz)(), m = (0,
            u._)((0,
            j.useState)(eR), 2), p = m[0], x = m[1], v = (0,
            u._)((0,
            j.useState)(""), 2), b = v[0], w = v[1], C = (0,
            u._)((0,
            j.useState)(""), 2), M = C[0], T = C[1], N = (n = (t = (0,
            eN.C)()).isLoading,
            i = t.installedPlugins,
            {
                availableFilters: (0,
                j.useMemo)(function() {
                    return eA.filter(function(e) {
                        return e.id !== s.Installed || i.length > 0
                    })
                }, [i]),
                isLoading: n
            }).availableFilters;
            (0,
            j.useEffect)(function() {
                N.some(function(e) {
                    return e.id === p
                }) || x(eR)
            }, [p, N]);
            var A = (0,
            j.useCallback)(eC()(function(e) {
                T(e)
            }, 300), []);
            return (0,
            h.jsx)(B.Z, {
                isOpen: !0,
                onClose: c,
                size: "custom",
                className: "w-full max-w-7xl bg-gray-50 md:min-w-[672px] lg:min-w-[896px] xl:min-w-[1024px]",
                type: "success",
                title: f.formatMessage(eE.title),
                closeButton: (0,
                h.jsx)(Z.ZP.CloseButton, {
                    onClose: c
                }),
                children: (0,
                h.jsxs)(et, {
                    children: [N.length > 1 && (0,
                    h.jsxs)("div", {
                        className: "flex flex-wrap gap-3",
                        children: [N.map(function(e) {
                            return (0,
                            h.jsx)(eU, {
                                selected: p === e.id,
                                onClick: function() {
                                    x(e.id)
                                },
                                children: e.title
                            }, e.id)
                        }), (0,
                        h.jsxs)("div", {
                            className: "relative",
                            children: [(0,
                            h.jsx)("div", {
                                className: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",
                                children: (0,
                                h.jsx)(y.jRj, {
                                    className: "icon-md text-gray-500 dark:text-gray-400"
                                })
                            }), (0,
                            h.jsx)(L.Z, {
                                className: "pl-10",
                                autoFocus: !0,
                                type: "search",
                                placeholder: f.formatMessage(eE.searchPlaceholder),
                                value: b,
                                onChange: function(e) {
                                    w(e.target.value),
                                    x(s.All),
                                    A(e.target.value)
                                },
                                name: "search"
                            })]
                        })]
                    }), (0,
                    h.jsx)(eO, {
                        filter: p,
                        query: M,
                        onInstallWithAuthRequired: a,
                        children: (0,
                        h.jsxs)("div", {
                            className: "flex flex-col items-center gap-2 sm:flex-row",
                            children: [g.has("tools3_dev") && (0,
                            h.jsxs)(h.Fragment, {
                                children: [(0,
                                h.jsx)(eV, {
                                    onClick: r,
                                    children: (0,
                                    h.jsx)(k.Z, (0,
                                    l._)({}, eE.installUnverifiedPlugin))
                                }), (0,
                                h.jsx)(eW, {}), (0,
                                h.jsx)(eV, {
                                    onClick: o,
                                    children: (0,
                                    h.jsx)(k.Z, (0,
                                    l._)({}, eE.developPlugin))
                                }), (0,
                                h.jsx)(eW, {})]
                            }), (0,
                            h.jsx)(eV, {
                                onClick: d,
                                children: (0,
                                h.jsx)(k.Z, (0,
                                l._)({}, eE.aboutPlugins))
                            })]
                        })
                    })]
                })
            })
        }
        function eO(e) {
            var t = e.filter
              , n = e.query
              , i = e.onInstallWithAuthRequired
              , a = e.children
              , r = eD[(0,
            ey.dQ)()]
              , o = (0,
            u._)((0,
            j.useState)(0), 2)
              , l = o[0]
              , d = o[1]
              , c = function(e) {
                var t = e.filter
                  , n = e.query
                  , i = e.page
                  , a = e.pageSize
                  , r = (0,
                eT.Z)({
                    category: function(e) {
                        if (e !== s.All && e !== s.Installed)
                            return e
                    }(t),
                    search: n,
                    offset: a * i,
                    limit: a
                })
                  , o = r.data
                  , l = r.isLoading
                  , d = (0,
                eN.C)()
                  , c = d.installedPlugins
                  , u = d.isLoading
                  , f = (0,
                j.useMemo)(function() {
                    return "" !== n ? c.map(function(e) {
                        return {
                            plugin: e,
                            score: function(e, t) {
                                var n = t.toLowerCase()
                                  , i = n.trim().split(/\s+/)
                                  , a = e.manifest.description_for_human.toLowerCase()
                                  , s = e.manifest.name_for_human.toLowerCase()
                                  , r = 0;
                                if (s === n || e.domain.toLowerCase() === n)
                                    return 1e3;
                                if (s.startsWith(n))
                                    return 500;
                                if (s.includes(n))
                                    return 100;
                                var o = !0
                                  , l = !1
                                  , d = void 0;
                                try {
                                    for (var c, u = i[Symbol.iterator](); !(o = (c = u.next()).done); o = !0) {
                                        var f = c.value;
                                        if (s.startsWith(f))
                                            r += 50;
                                        else if (s.includes(f))
                                            r += 10;
                                        else {
                                            if (!a.includes(f))
                                                return 0;
                                            r += 1
                                        }
                                    }
                                } catch (e) {
                                    l = !0,
                                    d = e
                                } finally {
                                    try {
                                        o || null == u.return || u.return()
                                    } finally {
                                        if (l)
                                            throw d
                                    }
                                }
                                return r
                            }(e, n)
                        }
                    }).filter(function(e) {
                        return e.score > 0
                    }).sort(function(e, t) {
                        return t.score - e.score
                    }).map(function(e) {
                        return e.plugin
                    }) : c.sort(function(e, t) {
                        return e.manifest.name_for_human.localeCompare(t.manifest.name_for_human)
                    })
                }, [c, n]);
                if (t === s.Installed) {
                    var g, h, m, p, x, v, b = (h = (g = {
                        page: i,
                        items: f,
                        pageSize: a
                    }).page,
                    m = g.items,
                    p = g.pageSize,
                    x = Math.ceil(m.length / p),
                    v = h * p,
                    {
                        pagesTotal: x,
                        pageItems: m.slice(v, v + p)
                    });
                    return {
                        isLoading: u,
                        items: b.pageItems,
                        pagesTotal: b.pagesTotal
                    }
                }
                var y = null != o ? o : {
                    count: void 0,
                    items: void 0
                }
                  , k = y.count;
                return {
                    isLoading: l,
                    items: y.items,
                    pagesTotal: void 0 !== k ? Math.ceil(k / a) : void 0
                }
            }({
                pageSize: r,
                filter: t,
                query: n,
                page: l
            })
              , f = c.isLoading
              , g = c.items
              , m = c.pagesTotal;
            (0,
            j.useEffect)(function() {
                d(0)
            }, [t, n]);
            var p = (0,
            u._)((0,
            j.useState)(!1), 2)
              , x = p[0]
              , v = p[1];
            return x ? (0,
            h.jsx)(eZ, {
                onClose: function() {
                    v(!1)
                }
            }) : (0,
            h.jsxs)(h.Fragment, {
                children: [(0,
                h.jsx)(eF, {
                    plugins: null != g ? g : [],
                    numSkeletons: r,
                    query: n,
                    isLoading: f,
                    onInstallWithAuthRequired: i,
                    onRequestMfa: function() {
                        return v(!0)
                    }
                }), (0,
                h.jsxs)("div", {
                    className: "flex flex-col flex-wrap items-center justify-center gap-6 sm:flex-row md:justify-between",
                    children: [(0,
                    h.jsx)("div", {
                        className: "max-lg:justify-center flex flex-1 justify-start",
                        children: void 0 !== m && m > 1 && (0,
                        h.jsx)(eS, {
                            page: l,
                            numPages: m,
                            goToPage: d
                        })
                    }), a]
                })]
            })
        }
        function eU(e) {
            var t = e.selected
              , n = e.onClick
              , i = e.children;
            return (0,
            h.jsx)(ev.z, {
                color: t ? "light" : "neutral",
                className: (0,
                v.default)("focus:ring-0", t && "hover:bg-gray-200", !t && "text-black/50"),
                onClick: n,
                children: i
            })
        }
        function eF(e) {
            var t = e.plugins
              , n = e.numSkeletons
              , i = e.isLoading
              , a = e.onInstallWithAuthRequired
              , s = e.onRequestMfa
              , r = e.query;
            if (0 === t.length && !i && r)
                return (0,
                h.jsxs)("div", {
                    className: "flex h-[404px] flex-col items-center justify-center gap-4",
                    children: [(0,
                    h.jsx)("div", {
                        className: "text-lg font-medium",
                        children: (0,
                        h.jsx)(k.Z, (0,
                        d._)((0,
                        l._)({}, eE.noSearchResultsTitle), {
                            values: {
                                query: r
                            }
                        }))
                    }), (0,
                    h.jsx)("div", {
                        className: "text-sm text-black/50",
                        children: (0,
                        h.jsx)(k.Z, (0,
                        l._)({}, eE.noSearchResultsHint))
                    })]
                });
            var o = i ? Array(n).fill(0).map(function(e, t) {
                return (0,
                h.jsx)(eq, {}, t)
            }) : t.map(function(e) {
                return (0,
                h.jsx)(eH, {
                    plugin: e,
                    onInstallWithAuthRequired: a,
                    onRequestMfa: s
                }, e.id)
            });
            return (0,
            h.jsx)("div", {
                className: "grid grid-cols-1 gap-3 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-3 xl:grid-cols-4",
                children: o
            })
        }
        function eH(e) {
            var t, n, i = e.plugin, a = e.onInstallWithAuthRequired, s = e.onRequestMfa, r = (0,
            u._)((0,
            j.useState)(!1), 2), o = r[0], d = r[1], c = (0,
            u._)((0,
            j.useState)(!1), 2), f = c[0], g = c[1], m = (0,
            J.useInstallPlugin)({
                onSuccess: function(e) {
                    (0,
                    S.wu)(e.id)
                },
                onError: function(e) {
                    console.error(e),
                    A.m.danger("Error installing ".concat(i.manifest.name_for_human, "."))
                },
                onSettled: function() {
                    d(!1)
                }
            }), p = (0,
            J.useUninstallPlugin)({
                onSuccess: function() {},
                onError: function(e) {
                    console.error(e),
                    A.m.danger("Error uninstalling ".concat(i.manifest.name_for_human, "."))
                },
                onSettled: function() {
                    g(!1)
                }
            }), x = (0,
            Y.kP)().session, v = (0,
            V.hz)(), b = (0,
            Q.Z)(), w = (0,
            ek.S)().isUsernamePassword, C = (0,
            j.useCallback)(function() {
                var e, t = i.manifest.auth.type;
                if (!("none" === t || "service_http" === t) && !(null == x ? void 0 : null === (e = x.user) || void 0 === e ? void 0 : e.mfa) && v.has(ej.i) && w) {
                    s();
                    return
                }
                "oauth" === t ? (0,
                J.doOauthRedirect)(i) : "user_http" === t ? a(i) : (d(!0),
                m(i.id))
            }, [i, m, a, s, w, x, v]), T = (0,
            j.useCallback)(function() {
                g(!0),
                p(i.id)
            }, [i, p]);
            return n = o || f ? (0,
            h.jsxs)(ev.z, {
                color: "light",
                className: "bg-green-100 hover:bg-green-100",
                children: [o ? b.formatMessage(eE.installing) : b.formatMessage(eE.uninstalling), (0,
                h.jsx)(eb.Z, {})]
            }) : (null === (t = i.user_settings) || void 0 === t ? void 0 : t.is_installed) ? (0,
            h.jsxs)(ev.z, {
                color: "light",
                className: "hover:bg-gray-200",
                onClick: T,
                children: [(0,
                h.jsx)(k.Z, (0,
                l._)({}, eE.uninstall)), (0,
                h.jsx)(y.$Rx, {
                    className: "icon-sm"
                })]
            }) : (0,
            h.jsxs)(ev.z, {
                onClick: C,
                children: [(0,
                h.jsx)(k.Z, (0,
                l._)({}, eE.install)), (0,
                h.jsx)(y.wzc, {
                    className: "icon-sm"
                })]
            }),
            (0,
            h.jsx)(eK, {
                logo: (0,
                h.jsx)(M.Z, {
                    url: i.manifest.logo_url,
                    name: i.manifest.name_for_human,
                    size: "100%",
                    large: !0
                }),
                tag: (0,
                _.cf)(i) ? (0,
                h.jsx)(eM.Aj, {}) : "approved" !== i.status ? (0,
                h.jsx)(eM.i$, {}) : void 0,
                title: (0,
                h.jsx)("div", {
                    className: "max-w-full truncate text-lg leading-6",
                    children: i.manifest.name_for_human
                }),
                button: n,
                description: i.manifest.description_for_human,
                developerInfo: (0,
                h.jsxs)("div", {
                    className: "flex items-center gap-1.5",
                    children: [(0,
                    h.jsx)(k.Z, (0,
                    l._)({}, eE.developerInfo)), (0,
                    h.jsx)("a", {
                        href: i.manifest.legal_info_url,
                        target: "_blank",
                        rel: "noreferrer",
                        children: (0,
                        h.jsx)(y.RsK, {
                            className: "icon-xs"
                        })
                    }), (0,
                    h.jsx)("a", {
                        href: "mailto:".concat(i.manifest.contact_email),
                        children: (0,
                        h.jsx)(y.Imn, {
                            className: "icon-xs"
                        })
                    })]
                })
            })
        }
        function eq() {
            return (0,
            h.jsx)(eK, {
                logo: (0,
                h.jsx)("div", {
                    className: "h-full w-full rounded-[5px] bg-gray-300"
                }),
                title: (0,
                h.jsx)("div", {
                    className: "h-[19px] w-[103px] rounded-[5px] bg-gray-100"
                }),
                button: (0,
                h.jsx)("div", {
                    className: "h-[36px] w-[103px] rounded-[5px] bg-gray-200"
                }),
                description: (0,
                h.jsxs)("div", {
                    className: "flex flex-col gap-1.5",
                    children: [(0,
                    h.jsx)("div", {
                        className: "h-[14px] w-[209px] rounded-[5px] bg-gray-100"
                    }), (0,
                    h.jsx)("div", {
                        className: "h-[14px] w-[218px] rounded-[5px] bg-gray-100"
                    }), (0,
                    h.jsx)("div", {
                        className: "h-[14px] w-[184px] rounded-[5px] bg-gray-100"
                    })]
                }),
                developerInfo: (0,
                h.jsx)("div", {
                    className: "h-full w-[120px] rounded-[5px] bg-gray-50"
                })
            })
        }
        function eK(e) {
            var t = e.logo
              , n = e.tag
              , i = e.title
              , a = e.button
              , s = e.description
              , r = e.developerInfo;
            return (0,
            h.jsxs)("div", {
                className: "flex flex-col gap-4 rounded border border-black/10 bg-white p-6 dark:border-white/20 dark:bg-gray-900",
                children: [(0,
                h.jsxs)("div", {
                    className: "flex gap-4",
                    children: [(0,
                    h.jsx)("div", {
                        className: "h-[70px] w-[70px] shrink-0",
                        children: t
                    }), (0,
                    h.jsxs)("div", {
                        className: "flex min-w-0 flex-col items-start justify-between",
                        children: [null != n ? (0,
                        h.jsxs)("div", {
                            className: "flex items-center gap-1.5",
                            children: [n, i]
                        }) : i, a]
                    })]
                }), (0,
                h.jsx)("div", {
                    className: "h-[60px] text-sm text-black/70 line-clamp-3 dark:text-white/70",
                    children: s
                }), (0,
                h.jsx)("div", {
                    className: "h-[14px] text-xs text-black/60 dark:text-white/60",
                    children: r
                })]
            })
        }
        var eV = C.Z.button(eB(), function(e) {
            return e.$disabled ? "opacity-50 cursor-default" : "hover:text-black/50 dark:hover:text-white/50"
        })
          , eW = C.Z.div(eL())
          , eY = (0,
        w.vU)({
            aboutPlugins: {
                id: "StoreDisclaimerModal.aboutPlugins",
                defaultMessage: "About plugins",
                description: "Title for the About Plugins modal"
            },
            okButton: {
                id: "StoreDisclaimerModal.okButton",
                defaultMessage: "OK",
                description: "OK button text"
            },
            cancelButton: {
                id: "StoreDisclaimerModal.cancelButton",
                defaultMessage: "Cancel",
                description: "Cancel button text"
            },
            thirdPartyWarning: {
                id: "StoreDisclaimerModal.thirdPartyWarning",
                defaultMessage: "Plugins are powered by third party applications that are not controlled by OpenAI. Be sure you trust a plugin before installation.",
                description: "Warning about third-party applications and trust"
            },
            externalAppsWarning: {
                id: "StoreDisclaimerModal.externalAppsWarning",
                defaultMessage: "Plugins connect ChatGPT to external apps. If you enable a plugin, ChatGPT may send your conversation, custom instructions, and the country or state you're in to the plugin.",
                description: "Warning about external apps and data sharing"
            },
            autoUseWarning: {
                id: "StoreDisclaimerModal.autoUseWarning",
                defaultMessage: "ChatGPT automatically chooses when to use plugins during a conversation, depending on the plugins you've enabled.",
                description: "Information about automatic plugin usage during conversations"
            }
        });
        function eQ(e) {
            var t = e.allowClose
              , n = e.onConfirm
              , i = e.onClose
              , a = (0,
            Q.Z)();
            return (0,
            h.jsx)(B.Z, {
                isOpen: !0,
                onClose: i,
                type: "success",
                title: a.formatMessage(eY.aboutPlugins),
                primaryButton: (0,
                h.jsx)(Z.ZP.Button, {
                    title: a.formatMessage(eY.okButton),
                    color: "primary",
                    onClick: n
                }),
                secondaryButton: t && (0,
                h.jsx)(Z.ZP.Button, {
                    title: a.formatMessage(eY.cancelButton),
                    color: "neutral",
                    onClick: i
                }),
                children: (0,
                h.jsx)(et, {
                    children: (0,
                    h.jsxs)(q, {
                        children: [(0,
                        h.jsx)(O, {
                            icon: "\uD83D\uDEA8",
                            children: (0,
                            h.jsx)(k.Z, (0,
                            l._)({}, eY.thirdPartyWarning))
                        }), (0,
                        h.jsx)(O, {
                            icon: "\uD83C\uDF10",
                            children: (0,
                            h.jsx)(k.Z, (0,
                            l._)({}, eY.externalAppsWarning))
                        }), (0,
                        h.jsx)(O, {
                            icon: "\uD83E\uDDE0",
                            children: (0,
                            h.jsx)(k.Z, (0,
                            l._)({}, eY.autoUseWarning))
                        })]
                    })
                })
            })
        }
        var eJ = P.pm.HasSeenPluginDisclaimer;
        function eX(e) {
            var t = e.onInstall
              , n = e.onClose
              , i = (0,
            P.qg)(eJ)
              , a = i.eligible
              , s = i.markAsViewed
              , r = (0,
            u._)((0,
            j.useState)(!1), 2)
              , o = r[0]
              , l = r[1]
              , d = (0,
            u._)((0,
            j.useState)(!1), 2)
              , c = d[0]
              , f = d[1]
              , g = (0,
            u._)((0,
            j.useState)(), 2)
              , m = g[0]
              , p = g[1]
              , x = (0,
            u._)((0,
            j.useState)(!1), 2)
              , v = x[0]
              , b = x[1]
              , y = (0,
            j.useCallback)(function() {
                l(!1),
                s()
            }, [s])
              , k = (0,
            j.useCallback)(function(e) {
                p(e),
                f(!0)
            }, [])
              , w = (0,
            j.useCallback)(function() {
                f(!0)
            }, [])
              , C = (0,
            j.useCallback)(function() {
                b(!0)
            }, [])
              , M = (0,
            j.useCallback)(function() {
                l(!0)
            }, [])
              , T = (0,
            j.useCallback)(function(e) {
                (0,
                S.wu)(e.id),
                n(),
                t(e)
            }, [t, n])
              , N = (0,
            j.useCallback)(function() {
                p(void 0),
                f(!1),
                n()
            }, [n])
              , A = (0,
            j.useCallback)(function() {
                b(!1),
                n()
            }, [n]);
            return a || o ? (0,
            h.jsx)(eQ, {
                allowClose: a,
                onConfirm: y,
                onClose: n
            }) : c ? (0,
            h.jsx)(eg, {
                plugin: m,
                onInstall: T,
                onClose: N
            }) : v ? (0,
            h.jsx)(es, {
                onClickInstall: k,
                onInstallLocalhost: T,
                onClose: A
            }) : (0,
            h.jsx)(eG, {
                onInstallWithAuthRequired: k,
                onClickInstallDeveloper: w,
                onClickDevelop: C,
                onClickAbout: M,
                onClose: n
            })
        }
        function e$() {
            var e = (0,
            f._)(["flex h-8 flex-shrink-0 items-center justify-center border-b border-black/10 bg-gray-50 text-xs text-gray-800 dark:border-white/20 dark:bg-[#272832] dark:text-white"]);
            return e$ = function() {
                return e
            }
            ,
            e
        }
        function e0(e) {
            var t, n = e.theme, i = void 0 === n ? "default" : n, a = (0,
            u._)((0,
            j.useState)(!1), 2), s = a[0], r = a[1], o = (0,
            u._)((0,
            j.useState)(!1), 2), f = o[0], w = o[1], C = (0,
            b.useRouter)(), P = (0,
            eN.C)(), I = P.installedPlugins, z = P.isLoading, Z = (0,
            S.p0)(), B = (0,
            j.useRef)(null);
            (0,
            j.useEffect)(function() {
                if (!z) {
                    var e = C.query
                      , t = e.loginAip
                      , n = e.loginSuccess
                      , i = (0,
                    c._)(e, ["loginAip", "loginSuccess"]);
                    if (t) {
                        var a, s, r = I.find(function(e) {
                            return e.id === t
                        });
                        r && "true" === n ? ((0,
                        S.wu)(C.query.loginAip),
                        null === (a = B.current) || void 0 === a || a.open()) : A.m.warning("Couldn't log in with ".concat(null !== (s = null == r ? void 0 : r.manifest.name_for_human) && void 0 !== s ? s : "plugin", ".")),
                        C.replace({
                            pathname: C.pathname,
                            query: i
                        })
                    }
                }
            }, [C, I, z]);
            var L = (0,
            j.useCallback)(function() {
                var e;
                null === (e = B.current) || void 0 === e || e.open()
            }, [])
              , D = (0,
            j.useCallback)(function() {
                r(!1)
            }, [])
              , E = (0,
            u._)((0,
            j.useState)(Z), 2)
              , R = E[0]
              , G = E[1]
              , O = (0,
            j.useCallback)(function(e) {
                if (e.length > S.hZ)
                    w(!0),
                    setTimeout(function() {
                        w(!1)
                    }, 600);
                else {
                    var t = e.filter(function(e) {
                        return !Z.find(function(t) {
                            return t.id === e.id
                        })
                    })
                      , n = !0
                      , i = !1
                      , a = void 0;
                    try {
                        for (var s, r = S.iO[Symbol.iterator](); !(n = (s = r.next()).done); n = !0) {
                            var o = function() {
                                var e = s.value
                                  , n = Z.find(function(t) {
                                    return e.includes(t.domain)
                                });
                                if (n) {
                                    var i = e.find(function(e) {
                                        return e !== n.domain
                                    })
                                      , a = t.find(function(e) {
                                        return e.domain === i
                                    });
                                    if (a)
                                        return A.m.warning("You can't enable ".concat(a.manifest.name_for_human, " while ").concat(n.manifest.name_for_human, " is enabled.")),
                                        {
                                            v: void 0
                                        }
                                }
                            }();
                            if ("object" === (0,
                            g._)(o))
                                return o.v
                        }
                    } catch (e) {
                        i = !0,
                        a = e
                    } finally {
                        try {
                            n || null == r.return || r.return()
                        } finally {
                            if (i)
                                throw a
                        }
                    }
                    (0,
                    S.dT)(e.map(function(e) {
                        return e.id
                    }))
                }
            }, [Z])
              , U = (0,
            j.useCallback)(function(e) {
                var t;
                null === (t = B.current) || void 0 === t || t.close(),
                "store" === e && r(!0)
            }, [])
              , F = (0,
            j.useCallback)(function() {
                G(Z),
                x.m9.logEvent("chatgpt_plugin_chooser_opened", null, {
                    num_enabled_plugins: "".concat(Z.length)
                }),
                m.A.logEvent(p.M.pluginChooserOpened, {
                    num_enabled_plugins: "".concat(Z.length)
                })
            }, [Z])
              , H = (0,
            j.useCallback)(function() {
                var e = R.filter(function(e) {
                    return !Z.find(function(t) {
                        return t.id === e.id
                    })
                })
                  , t = Z.filter(function(e) {
                    return !R.find(function(t) {
                        return t.id === e.id
                    })
                })
                  , n = !0
                  , i = !1
                  , a = void 0;
                try {
                    for (var s, r = t[Symbol.iterator](); !(n = (s = r.next()).done); n = !0) {
                        var o = s.value;
                        x.m9.logEvent("chatgpt_plugin_enabled", null, {
                            plugin_id: o.id
                        }),
                        m.A.logEvent(p.M.pluginEnabled, {
                            plugin_id: o.id
                        })
                    }
                } catch (e) {
                    i = !0,
                    a = e
                } finally {
                    try {
                        n || null == r.return || r.return()
                    } finally {
                        if (i)
                            throw a
                    }
                }
                var l = !0
                  , d = !1
                  , c = void 0;
                try {
                    for (var u, f = e[Symbol.iterator](); !(l = (u = f.next()).done); l = !0) {
                        var g = u.value;
                        x.m9.logEvent("chatgpt_plugin_disabled", null, {
                            plugin_id: g.id
                        }),
                        m.A.logEvent(p.M.pluginDisabled, {
                            plugin_id: g.id
                        })
                    }
                } catch (e) {
                    d = !0,
                    c = e
                } finally {
                    try {
                        l || null == f.return || f.return()
                    } finally {
                        if (d)
                            throw c
                    }
                }
            }, [Z, R])
              , q = (0,
            T.Ml)()
              , K = I.map(function(e) {
                return {
                    value: e,
                    title: e.manifest.name_for_human,
                    description: e.manifest.description_for_human,
                    tags: [],
                    customTags: (0,
                    _.cf)(e) ? (0,
                    h.jsx)(eM.Aj, {}) : "approved" !== e.status ? (0,
                    h.jsx)(eM.i$, {}) : void 0,
                    imageUrl: e.manifest.logo_url
                }
            })
              , V = K.filter(function(e) {
                return Z.find(function(t) {
                    return t.id === e.value.id
                })
            })
              , W = q ? (0,
            h.jsx)(k.Z, (0,
            d._)((0,
            l._)({}, e2.pluginsInstalled), {
                values: {
                    count: Z.length
                }
            })) : (0,
            h.jsx)(k.Z, (0,
            d._)((0,
            l._)({}, e2.pluginsEnabled), {
                values: {
                    count: Z.length
                }
            }));
            if (Z.length > 0 && Z.length < 6) {
                var Y = Z.map(function(e, t) {
                    return (0,
                    h.jsx)(M.Z, {
                        url: e.manifest.logo_url,
                        name: e.manifest.name_for_human,
                        size: 24
                    }, t)
                });
                W = (0,
                h.jsx)("div", {
                    className: "flex gap-2",
                    children: Y
                })
            }
            var Q = [{
                id: "store",
                label: "Plugin store",
                icon: y.Rgz
            }];
            I.length > S.hZ && (t = (0,
            h.jsx)(e1, {
                className: (0,
                v.default)("transition-colors duration-300", f && "bg-red-200 text-red-800 dark:bg-red-200 dark:text-red-800"),
                children: (0,
                h.jsx)(k.Z, (0,
                d._)((0,
                l._)({}, e2.enabledPluginsLimit), {
                    values: {
                        enabledPlugins: Z.length,
                        maxEnabledPlugins: S.hZ
                    }
                }))
            }));
            var J = (0,
            h.jsxs)(h.Fragment, {
                children: [(0,
                h.jsx)(e1, {
                    children: (0,
                    h.jsx)(k.Z, (0,
                    l._)({}, e2.loading))
                }), (0,
                h.jsx)(N.ze, {
                    showCheckbox: !0,
                    theme: i
                }), (0,
                h.jsx)(N.ze, {
                    showCheckbox: !0,
                    theme: i
                }), (0,
                h.jsx)(N.ze, {
                    showCheckbox: !0,
                    theme: i
                }), (0,
                h.jsx)(N.ze, {
                    showCheckbox: !0,
                    theme: i
                }), (0,
                h.jsx)(N.ze, {
                    showCheckbox: !0,
                    theme: i
                })]
            });
            return (0,
            h.jsxs)(h.Fragment, {
                children: [(0,
                h.jsx)(N.ZP, {
                    name: "Plugins",
                    selectedOptions: V,
                    selectedLabel: W,
                    options: K,
                    actions: Q,
                    onChange: O,
                    onAction: U,
                    onOpen: F,
                    onClose: H,
                    dropdownRef: B,
                    isLoading: z,
                    loadingState: J,
                    header: t,
                    theme: "mini" === i ? "mini" : "default"
                }), s && (0,
                h.jsx)(eX, {
                    onInstall: L,
                    onClose: D
                })]
            })
        }
        var e1 = C.Z.div(e$())
          , e2 = (0,
        w.vU)({
            pluginsEnabled: {
                id: "PluginChooser.pluginsEnabled",
                description: "Text shown with the number of enabled plugins.",
                defaultMessage: "{count, plural, =0 {No plugins} one {# plugin} other {# plugins}} enabled"
            },
            pluginsInstalled: {
                id: "PluginChooser.pluginsInstalled",
                description: "Text shown with the number of enabled plugins.",
                defaultMessage: "{count, plural, =0 {No plugins} one {# plugin} other {# plugins}} installed"
            },
            loading: {
                id: "PluginChooser.loading",
                description: "Text shown when plugin information is being loaded.",
                defaultMessage: "Loading..."
            },
            enabledPluginsLimit: {
                id: "PluginChooser.enabledPluginsLimit",
                description: "Text shown with the number of enabled plugins and the maximum limit.",
                defaultMessage: "{enabledPlugins}/{maxEnabledPlugins} Enabled"
            }
        })
    },
    59517: function(e, t, n) {
        n.d(t, {
            H1: function() {
                return f
            },
            Vk: function() {
                return c
            },
            tS: function() {
                return d
            },
            zG: function() {
                return u
            }
        });
        var i = n(39324)
          , a = n(71209)
          , s = n(91530)
          , r = n.n(s)
          , o = n(78103)
          , l = {
            showEmbeddedPaymentModal: !1,
            embeddedCheckoutInstance: void 0,
            showFreeTrialLoadingPayment: !1,
            showConfirmDismissFreeTrial: !1,
            didCloseFreeTrial: !1
        }
          , d = (0,
        o.ZP)()(function(e) {
            return (0,
            a._)((0,
            i._)({}, l), {
                setShowEmbeddedPaymentModal: function(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r();
                    e({
                        showEmbeddedPaymentModal: t
                    }),
                    n && n()
                },
                setEmbeddedCheckoutInstance: function(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r();
                    e({
                        showEmbeddedPaymentModal: t
                    }),
                    n && n()
                }
            })
        });
        function c(e) {
            d.setState({
                showFreeTrialLoadingPayment: e
            })
        }
        function u(e) {
            d.setState({
                showConfirmDismissFreeTrial: e
            })
        }
        function f(e) {
            d.setState({
                didCloseFreeTrial: e
            })
        }
    },
    8679: function(e, t, n) {
        n.d(t, {
            n: function() {
                return I
            },
            A3: function() {
                return P
            },
            yx: function() {
                return L
            },
            JS: function() {
                return B
            }
        });
        var i, a, s, r = n(96237), o = n(39324), l = n(64502), d = n(15858), c = n(54636), u = n(42780), f = n(38574), g = n(42918), h = n(61888), m = n(70079), p = n(94968), x = n(61098), v = n(42474), b = n(72290), j = n(66638), y = n(55548), k = n(17944), w = n(4263), C = n(86925), M = n(45248), T = m.useLayoutEffect, N = RegExp("```.*?\\n([\\s\\S]+?)\\n?```[^`]*$", "gms");
        (i = a || (a = {})).Core = "Core",
        i.Chat = "Chat",
        i.Settings = "Settings";
        var A = (0,
        o._)({
            Mod: "mod",
            Comma: ","
        }, d.s)
          , _ = (s = {},
        (0,
        r._)(s, A.Mod, /Mac|iPod|iPhone|iPad/.test(window.navigator.platform) ? "⌘" : "Ctrl"),
        (0,
        r._)(s, A.Comma, ","),
        (0,
        r._)(s, A.Enter, "⏎"),
        (0,
        r._)(s, A.Escape, "Esc"),
        (0,
        r._)(s, A.ArrowUp, "↑"),
        (0,
        r._)(s, A.ArrowDown, "↓"),
        (0,
        r._)(s, A.ArrowLeft, "←"),
        (0,
        r._)(s, A.ArrowRight, "→"),
        (0,
        r._)(s, A.Backspace, "⌫"),
        (0,
        r._)(s, A.Delete, "⌦"),
        (0,
        r._)(s, A.Tab, "⇥"),
        (0,
        r._)(s, A.Control, "Ctrl"),
        (0,
        r._)(s, A.Shift, "Shift"),
        s)
          , P = function(e) {
            var t;
            return e.map(function(e) {
                return null !== (t = _[e]) && void 0 !== t ? t : e
            })
        }
          , S = (0,
        p.vU)({
            newChat: {
                id: "keyboardActions.newChat",
                defaultMessage: "Open new chat",
                description: "Keyboard shortcut to open a new chat"
            },
            focusPromptTextarea: {
                id: "keyboardActions.focusPromptTextarea",
                defaultMessage: "Focus chat input",
                description: "Keyboard shortcut to focus the chat input"
            },
            copyLastCodeBlock: {
                id: "keyboardActions.copyLastCodeBlock",
                defaultMessage: "Copy last code block",
                description: "Keyboard shortcut to copy the last code block in the chat"
            },
            copyLastResponse: {
                id: "keyboardActions.copyLastResponse",
                defaultMessage: "Copy last response",
                description: "Keyboard shortcut to copy the last response in the chat"
            },
            toggleCustomInstructions: {
                id: "keyboardActions.toggleCustomInstructions",
                defaultMessage: "Set custom instructions",
                description: "Keyboard shortcut to toggle custom instructions"
            },
            navigationToggle: {
                id: "keyboardActions.navigationToggle",
                defaultMessage: "Toggle sidebar",
                description: "Keyboard shortcut to toggle navigation"
            },
            deleteChat: {
                id: "keyboardActions.deleteChat",
                defaultMessage: "Delete chat",
                description: "Keyboard shortcut to delete chat"
            },
            toggleKeyboardActions: {
                id: "keyboardActions.toggleKeyboardActions",
                defaultMessage: "Show shortcuts",
                description: "Keyboard shortcut to toggle keyboard actions"
            }
        })
          , I = new w.V
          , z = function(e) {
            var t = e.resetThreadAction
              , n = e.clientThreadId;
            return [{
                key: "newChat",
                action: t || h.noop,
                actionMessageDescriptor: S.newChat,
                group: a.Core,
                keyboardBinding: [A.Mod, A.Shift, "o"],
                altKeyboardBindings: [[A.Mod, "k"]]
            }, {
                key: "focusPromptTextarea",
                action: v.go,
                actionMessageDescriptor: S.focusPromptTextarea,
                group: a.Chat,
                keyboardBinding: [A.Shift, A.Escape]
            }, {
                key: "copyLastCodeBlock",
                action: function() {
                    if (null != n)
                        for (var e = j.tQ.getThreadCurrentLeafId(n), t = j.tQ.getThreadConversationTurns(n, e), i = t.length - 1; i >= 0; i--) {
                            var a = t[i].messages.reduce(function(e, t) {
                                return null == t.err && t.message.author.role === x.uU.Assistant && "all" === t.message.recipient ? e + (e ? "\n\n" : "") + (0,
                                C.RR)(t.message) : e
                            }, "")
                              , s = (0,
                            l._)(a.matchAll(N))
                              , r = s.length ? s[s.length - 1][1] : null;
                            if (null != r) {
                                (0,
                                f.S)(r).then(function() {
                                    b.m.success("Copied code block to clipboard")
                                });
                                break
                            }
                        }
                },
                actionMessageDescriptor: S.copyLastCodeBlock,
                group: a.Chat,
                keyboardBinding: [A.Mod, A.Shift, ";"],
                altKeyboardBindings: [[A.Mod, A.Shift, ":"]]
            }, {
                key: "copyLastResponse",
                action: function() {
                    null != n && j.tQ.copyLastMessageToClipboard(n, "keyboard").then(function() {
                        b.m.success("Last response copied to clipboard")
                    })
                },
                actionMessageDescriptor: S.copyLastResponse,
                group: a.Chat,
                keyboardBinding: [A.Mod, A.Shift, "c"]
            }, {
                key: "toggleCustomInstructions",
                action: function() {
                    return y.vm.toggleModal(y.B.UserContext)
                },
                actionMessageDescriptor: S.toggleCustomInstructions,
                group: a.Settings,
                keyboardBinding: [A.Mod, A.Shift, "i"]
            }, {
                key: "navigationToggle",
                action: function() {
                    return y.vm.toggleDesktopNavCollapsed()
                },
                actionMessageDescriptor: S.navigationToggle,
                group: a.Core,
                keyboardBinding: [A.Mod, A.Shift, "s"]
            }, {
                key: "deleteChat",
                action: function() {
                    I.publish({
                        kind: "deleteChat"
                    })
                },
                actionMessageDescriptor: S.deleteChat,
                group: a.Chat,
                keyboardBinding: [A.Mod, A.Shift, A.Backspace],
                altKeyboardBindings: [[A.Mod, A.Shift, A.Delete]]
            }, {
                key: "toggleKeyboardActions",
                action: function() {
                    return y.vm.toggleModal(y.B.KeyboardActions)
                },
                actionMessageDescriptor: S.toggleKeyboardActions,
                group: a.Settings,
                keyboardBinding: [A.Mod, "/"]
            }]
        }
          , Z = function(e) {
            var t, n, i;
            return t = function(e) {
                c.A.logEvent(u.M.keyboardShortcut, {
                    keyboardActionKey: e.key
                }),
                g.U.addAction("chatgpt_keyboard_shortcut", {
                    keyboardActionKey: e.key
                })
            }
            ,
            n = {
                enabled: !0
            },
            i = e.map(function(e) {
                var t = e.keyboardBinding.join("+");
                if (e.altKeyboardBindings) {
                    t = [t];
                    var n = e.altKeyboardBindings.map(function(e) {
                        return e.join("+")
                    });
                    t = t.concat(n)
                }
                return (0,
                M.ZP)(t, {
                    byKey: !0
                })
            }),
            void T(function() {
                if ((null == n ? void 0 : n.enabled) !== !1) {
                    var a = function(n) {
                        if (!n.repeat)
                            for (var a = 0; a < i.length; a++)
                                i[a](n) && (void 0 === e[a].enabled || e[a].enabled) && (n.preventDefault(),
                                t(e[a]),
                                e[a].action())
                    }
                      , s = function(e) {
                        void 0 !== e.key && a(e)
                    }
                      , r = document;
                    return r.addEventListener("keydown", s),
                    function() {
                        r.removeEventListener("keydown", s)
                    }
                }
            }, [e, n])
        }
          , B = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = e.resetThreadAction
              , n = e.clientThreadId
              , i = (0,
            k.hz)();
            return (0,
            m.useMemo)(function() {
                return z({
                    features: i,
                    resetThreadAction: t,
                    clientThreadId: n
                }).filter(function(e) {
                    var t = e.enabled;
                    return void 0 === t || t
                })
            }, [n, i, t])
        }
          , L = function(e) {
            Z(B({
                resetThreadAction: e.resetThreadAction,
                clientThreadId: e.clientThreadId
            }))
        }
    }
}]);
