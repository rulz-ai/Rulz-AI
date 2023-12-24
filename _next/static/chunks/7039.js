"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[7039], {
    37039: function(e, a, n) {
        n.d(a, {
            t0: function() {
                return i
            },
            ZP: function() {
                return A
            },
            Ob: function() {
                return W
            }
        });
        var r, i, t = n(21722), l = n(96237), s = n(39324), o = n(71209), d = n(10064), c = n(64502), m = n(38104), u = n(35250), f = n(17944), p = n(70079), g = n(1454), v = n(70671), h = n(32004), x = n(13205), b = n(62470), N = n(40558), w = n(19841), M = n(94968), j = n(10746), k = n(37394), C = n(15635), _ = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        function R(e) {
            return e.split(/[\s,]+/)
        }
        function Z(e) {
            var a = e.value
              , n = e.onChange
              , r = e.className
              , i = (0,
            v.Z)()
              , t = (0,
            d._)((0,
            p.useState)(""), 2)
              , l = t[0]
              , s = t[1]
              , o = (0,
            p.useCallback)(function(e) {
                if (l)
                    switch (e.key) {
                    case "Enter":
                    case ",":
                    case " ":
                        var r = R(l);
                        n((0,
                        c._)(a).concat((0,
                        c._)(r.map(T)))),
                        s(""),
                        e.preventDefault()
                    }
            }, [l, n, a]);
            return (0,
            u.jsx)(j.ZP, {
                className: (0,
                w.default)("react-select-container", r),
                isMulti: !0,
                onBlur: function(e) {
                    if (l) {
                        var r = R(l);
                        n((0,
                        c._)(a).concat((0,
                        c._)(r.map(T)))),
                        s(l),
                        e.preventDefault()
                    }
                },
                classNamePrefix: "react-select",
                components: y,
                inputValue: l,
                isClearable: !0,
                menuIsOpen: !1,
                onChange: n,
                onInputChange: s,
                onKeyDown: o,
                placeholder: i.formatMessage(P.placeholder),
                value: a,
                "aria-labelledby": "add-emails-label",
                name: "add-member-emails"
            })
        }
        var T = function(e) {
            return {
                label: e,
                value: e,
                isValid: _.test(e)
            }
        }
          , y = {
            DropdownIndicator: function() {
                return null
            },
            IndicatorsContainer: function() {
                return null
            },
            ClearIndicator: function() {
                return null
            },
            MultiValueRemove: function() {
                return null
            },
            MultiValue: function(e) {
                var a = (0,
                v.Z)()
                  , n = (0,
                u.jsxs)("span", {
                    className: "flex items-center gap-1",
                    children: [(0,
                    u.jsx)("span", {
                        children: e.children
                    }), (0,
                    u.jsx)(g.q5L, {
                        className: "icon-sm"
                    })]
                })
                  , r = e.data.isValid ? n : (0,
                u.jsx)(C.u, {
                    label: a.formatMessage(P.tooltipInvalidEmail, {
                        email: e.data.value
                    }),
                    side: "top",
                    children: n
                });
                return (0,
                u.jsx)(k.c.MultiValue, (0,
                o._)((0,
                s._)({}, e), {
                    children: (0,
                    u.jsx)("button", {
                        className: (0,
                        w.default)("m-1 cursor-pointer rounded-full border border-transparent py-1 pl-3 pr-2 text-sm dark:text-gray-300", e.data.isValid ? "bg-gray-50 hover:border-gray-300 hover:bg-gray-100 dark:bg-gray-800 dark:hover:border-gray-600 dark:hover:bg-gray-700" : "bg-red-200 text-red-500 dark:text-red-500"),
                        onClick: function(a) {
                            var n, r;
                            null === (r = (n = e.removeProps).onClick) || void 0 === r || r.call(n, a),
                            a.preventDefault()
                        },
                        "aria-label": a.formatMessage(P.removeMember, {
                            member: e.data.value
                        }),
                        children: r
                    })
                }))
            }
        }
          , P = (0,
        M.vU)({
            membersAdded: {
                id: "emailsTextarea.membersAdded",
                defaultMessage: "+{count} {count, plural, one {member} other {members}}",
                description: "Current number of members that will be added to the workspace"
            },
            removeMember: {
                id: "emailsTextarea.removeMember",
                defaultMessage: "Remove {member}",
                description: "Remove a member from the list of members to be added"
            },
            tooltipInvalidEmail: {
                id: "emailsTextarea.tooltipInvalidEmail",
                defaultMessage: '"{email}" may not be a valid email',
                description: "Tooltip for invalid email addresses"
            },
            clearAllEntries: {
                id: "emailsTextarea.clearAllEntries",
                defaultMessage: "Clear all",
                description: "Clear all entries in the list of members to be added"
            },
            placeholder: {
                id: "emailsTextarea.placeholder",
                defaultMessage: "Type an email and press enter...",
                description: "Placeholder for the insert emails textarea"
            }
        })
          , E = n(89319)
          , I = n(7171)
          , S = n(72290)
          , V = n(12296);
        function A(e) {
            var a, n = e.workspace, r = e.step, w = e.onStepChange, M = e.emailTableRows, j = e.onEmailTableRowsChange, k = e.emailTextareaValue, C = e.onEmailTextareaValueChange, R = e.canResendInviteEmails, T = e.resendEmails, y = e.onResendEmailsChange, P = (0,
            V.Gk)(n.id), A = (0,
            d._)((0,
            p.useState)(!1), 2), L = A[0], H = A[1], D = (0,
            d._)((0,
            p.useState)(!1), 2), z = D[0], B = D[1], O = (0,
            p.useRef)(null), U = (0,
            f.ec)(f.F_.isTeamPlan), G = (0,
            v.Z)(), $ = W(P), q = (a = (0,
            t._)(function(e) {
                var a, n, r;
                return (0,
                m.Jh)(this, function(t) {
                    switch (t.label) {
                    case 0:
                        if (!(n = null === (a = e.target.files) || void 0 === a ? void 0 : a[0]))
                            return [3, 2];
                        return [4, new Promise(function(e) {
                            if (n.size / 1048576 > 25)
                                e({
                                    status: "error",
                                    reason: "file_too_large"
                                });
                            else if ("text/csv" !== n.type)
                                e({
                                    status: "error",
                                    reason: "invalid_file_type"
                                });
                            else {
                                var a = new FileReader;
                                a.readAsText(n),
                                a.onload = function(a) {
                                    var n, r = z, i = (null === (n = a.target) || void 0 === n ? void 0 : n.result).split("\n"), t = new Set;
                                    e({
                                        status: "success",
                                        newRows: i.reduce(function(e, a) {
                                            var n, i = (0,
                                            d._)(a.split(",").map(function(e) {
                                                return e.trim()
                                            }), 2), l = i[0], s = i[1];
                                            return _.test(l) && !t.has(l) && (void 0 !== $[s] || r || (r = !0),
                                            e.push({
                                                email: l,
                                                role: null !== (n = $[s]) && void 0 !== n ? n : $.member
                                            })),
                                            t.add(l),
                                            e
                                        }, []),
                                        hasWarning: r
                                    })
                                }
                            }
                        }
                        )];
                    case 1:
                        "success" === (r = t.sent()).status ? (j(r.newRows),
                        w(i.CSV_TABLE),
                        B(r.hasWarning)) : "file_too_large" === r.reason ? S.m.danger(G.formatMessage(F.fileTooLargeWarning, {
                            maxSize: "".concat(25, "MB")
                        }), {
                            duration: 5
                        }) : "invalid_file_type" === r.reason && S.m.danger(G.formatMessage(F.fileIncorrectTypeWarning), {
                            duration: 5
                        }),
                        t.label = 2;
                    case 2:
                        return [2]
                    }
                })
            }),
            function(e) {
                return a.apply(this, arguments)
            }
            ), J = function(e, a, n) {
                var r = (0,
                c._)(M);
                r[e] = (0,
                o._)((0,
                s._)({}, r[e]), (0,
                l._)({}, a, n)),
                j(r)
            }, K = function(e) {
                j((0,
                c._)(M.slice(0, e)).concat((0,
                c._)(M.slice(e + 1))))
            };
            return (0,
            u.jsxs)(u.Fragment, {
                children: [r === i.INITIAL && (0,
                u.jsxs)("div", {
                    className: "flex flex-col gap-3",
                    children: [(0,
                    u.jsxs)("div", {
                        className: "flex items-start justify-between gap-4",
                        children: [(0,
                        u.jsxs)("div", {
                            className: "flex flex-col gap-1",
                            children: [(0,
                            u.jsx)("label", {
                                htmlFor: "upload-csv",
                                id: "upload-csv-label",
                                children: (0,
                                u.jsx)(h.Z, (0,
                                s._)({}, F.importCSVLabel))
                            }), (0,
                            u.jsxs)("span", {
                                className: "text-sm text-gray-500",
                                children: [(0,
                                u.jsx)(h.Z, (0,
                                o._)((0,
                                s._)({}, L ? F.helperCSVFormatHide : F.helperCSVFormatShow), {
                                    values: {
                                        link: function(e) {
                                            return (0,
                                            u.jsx)("button", {
                                                className: "underline",
                                                onClick: function() {
                                                    H(!L)
                                                },
                                                children: e
                                            })
                                        }
                                    }
                                })), L && (0,
                                u.jsx)("pre", {
                                    className: "mt-4",
                                    children: "email,role\nuser1@company.com,member\nadmin@company.com,admin\nit@company.com,owner"
                                })]
                            })]
                        }), (0,
                        u.jsx)("input", {
                            ref: O,
                            type: "file",
                            accept: ".csv,text/csv",
                            id: "upload-csv",
                            className: "hidden",
                            onChange: q
                        }), (0,
                        u.jsx)("button", {
                            className: "rounded bg-gray-100 px-4 py-2 dark:bg-gray-800",
                            type: "button",
                            onClick: function() {
                                return O.current.click()
                            },
                            children: (0,
                            u.jsx)(h.Z, (0,
                            s._)({}, F.importCSVButton))
                        })]
                    }), (0,
                    u.jsxs)("div", {
                        className: "flex flex-col gap-2",
                        children: [(0,
                        u.jsx)("label", {
                            htmlFor: "add-member-emails",
                            id: "add-emails-label",
                            children: (0,
                            u.jsx)(h.Z, (0,
                            s._)({}, F.addEmailsFieldName))
                        }), (0,
                        u.jsx)(Z, {
                            value: k,
                            onChange: C
                        })]
                    })]
                }), r === i.CSV_TABLE && (0,
                u.jsxs)(u.Fragment, {
                    children: [z && (0,
                    u.jsxs)("div", {
                        className: "flex w-full items-center bg-yellow-100 p-4",
                        children: [(0,
                        u.jsx)(g.BJv, {
                            className: "icon-sm mr-2 text-yellow-700"
                        }), (0,
                        u.jsx)("div", {
                            className: "flex-grow text-yellow-700",
                            children: (0,
                            u.jsx)(h.Z, (0,
                            s._)({}, F.unspecifiedRoleDescription))
                        })]
                    }), (0,
                    u.jsxs)(N.Z.Root, {
                        size: "normal",
                        children: [(0,
                        u.jsxs)(N.Z.Header, {
                            children: [(0,
                            u.jsx)(N.Z.HeaderCell, {
                                children: (0,
                                u.jsx)(h.Z, (0,
                                s._)({}, F.inviteTableHeaderEmail))
                            }), (0,
                            u.jsx)(N.Z.HeaderCell, {
                                className: "pl-3 dark:bg-gray-900",
                                children: (0,
                                u.jsx)(h.Z, (0,
                                s._)({}, F.inviteTableHeaderRole))
                            }), (0,
                            u.jsx)(N.Z.HeaderCell, {})]
                        }), (0,
                        u.jsx)(N.Z.Body, {
                            children: M.map(function(e, a) {
                                return (0,
                                u.jsxs)(N.Z.Row, {
                                    children: [(0,
                                    u.jsx)(N.Z.Cell, {
                                        children: (0,
                                        u.jsx)(E.Z, {
                                            name: "email",
                                            type: "email",
                                            value: e.email,
                                            onChange: function(e) {
                                                return J(a, "email", e.target.value)
                                            },
                                            color: "neutral"
                                        })
                                    }), (0,
                                    u.jsx)(N.Z.Cell, {
                                        children: (0,
                                        u.jsxs)(b.Z.Root, {
                                            value: e.role,
                                            onValueChange: function(e) {
                                                return J(a, "role", e)
                                            },
                                            children: [(0,
                                            u.jsxs)(b.Z.Trigger, {
                                                children: [(0,
                                                u.jsx)(b.Z.Value, {}), (0,
                                                u.jsx)(b.Z.Icon, {})]
                                            }), (0,
                                            u.jsx)(b.Z.Portal, {
                                                children: (0,
                                                u.jsxs)(b.Z.Content, {
                                                    className: "border border-token-surface-secondary",
                                                    children: [(0,
                                                    u.jsx)(b.Z.Item, {
                                                        value: $.member,
                                                        children: (0,
                                                        u.jsx)(h.Z, (0,
                                                        s._)({}, F.inviteRoleMember))
                                                    }), $.admin && (0,
                                                    u.jsx)(b.Z.Item, {
                                                        value: $.admin,
                                                        children: (0,
                                                        u.jsx)(h.Z, (0,
                                                        s._)({}, F.inviteRoleAdmin))
                                                    }), $.owner && (0,
                                                    u.jsx)(b.Z.Item, {
                                                        value: $.owner,
                                                        children: (0,
                                                        u.jsx)(h.Z, (0,
                                                        s._)({}, F.inviteRoleOwner))
                                                    })]
                                                })
                                            })]
                                        })
                                    }), (0,
                                    u.jsx)(N.Z.Cell, {
                                        textAlign: "right",
                                        children: (0,
                                        u.jsx)(g.Ybf, {
                                            onClick: function() {
                                                return K(a)
                                            },
                                            className: "icon-sm mr-2 cursor-pointer text-token-text-secondary"
                                        })
                                    })]
                                }, a)
                            })
                        })]
                    })]
                }), R && y && (0,
                u.jsx)("div", {
                    className: "mt-2 flex items-center text-left text-token-text-secondary",
                    children: (0,
                    u.jsx)(x.Z, {
                        id: "resend-emails",
                        checked: T,
                        onChange: function(e) {
                            return y(e.currentTarget.checked)
                        },
                        label: G.formatMessage(F.resendEmailsFieldName)
                    })
                }), r === i.INITIAL && U && (0,
                u.jsx)("div", {
                    className: "mb-4",
                    children: (0,
                    u.jsx)(I.Z, {
                        children: (0,
                        u.jsx)(h.Z, (0,
                        s._)({}, F.teamInviteModalNote))
                    })
                })]
            })
        }
        (r = i || (i = {}))[r.INITIAL = 0] = "INITIAL",
        r[r.CSV_TABLE = 1] = "CSV_TABLE";
        var W = function(e) {
            var a = {
                member: "member"
            };
            return e && (a.admin = "admin",
            a.owner = "owner"),
            a
        }
          , F = {
            importCSVLabel: {
                id: "adminPage.importCSVLabel",
                defaultMessage: "Import from CSV",
                description: "Name of label for import from CSV button"
            },
            helperCSVFormatHide: {
                id: "adminPage.helperCSVFormat",
                defaultMessage: 'The file must include email and an optional role on each line. Roles can be "member", "admin", or "owner". <link>Hide Example</link>',
                description: "Instructions for formatting the import CSV, with a link to hide the example"
            },
            helperCSVFormatShow: {
                id: "adminPage.helperCSVFormat",
                defaultMessage: 'The file must include email and an optional role on each line. Roles can be "member", "admin", or "owner". <link>Show Example</link>',
                description: "Instructions for formatting the import CSV, with a link to show an example"
            },
            importCSVButton: {
                id: "adminPage.importCSVButton",
                defaultMessage: "Upload",
                description: "Name of upload from CSV button"
            },
            addEmailsFieldName: {
                id: "adminPage.addEmailsFieldName.0",
                defaultMessage: "Emails",
                description: "Name of input for adding emails to workspace"
            },
            unspecifiedRoleDescription: {
                id: "adminPage.unspecifiedRoleDescription",
                defaultMessage: "Roles that were unspecified have been changed to Member.",
                description: "Description text for defaulting invite roles to member"
            },
            inviteTableHeaderEmail: {
                id: "adminPage.inviteTableHeaderEmail",
                defaultMessage: "Email",
                description: "Label for email column of invite table header"
            },
            inviteTableHeaderRole: {
                id: "adminPage.inviteTableHeaderRole",
                defaultMessage: "Role",
                description: "Label for role column of invite table header"
            },
            inviteRoleMember: {
                id: "adminPage.inviteRoleMember",
                defaultMessage: "Member",
                description: "Member role for workspace invite"
            },
            inviteRoleAdmin: {
                id: "adminPage.inviteRoleAdmin",
                defaultMessage: "Admin",
                description: "Admin role for workspace invite"
            },
            inviteRoleOwner: {
                id: "adminPage.inviteRoleOwner",
                defaultMessage: "Owner",
                description: "Owner role for workspace invite"
            },
            fileTooLargeWarning: {
                id: "adminPage",
                defaultMessage: "File is too large. Please upload a CSV file smaller than {maxSize}.",
                description: "Error when uploading a file that is too large"
            },
            fileIncorrectTypeWarning: {
                id: "adminPage",
                defaultMessage: "Please upload a CSV file.",
                description: "Error when uploading a file that is not a CSV"
            },
            resendEmailsFieldName: {
                id: "adminPage.resendEmailsFieldName",
                defaultMessage: "Resend emails for existing invites",
                description: "Name of checkbox input for resending emails to workspace"
            },
            teamInviteModalNote: {
                id: "adminPage.teamInviteModalNote",
                defaultMessage: "Note: Users that accept invites will be included as additional seats on your next invoice.",
                description: "Note for team plan invites that additional seats will be charged"
            }
        }
    },
    12296: function(e, a, n) {
        n.d(a, {
            $3: function() {
                return m
            },
            Ap: function() {
                return o
            },
            CV: function() {
                return u
            },
            GA: function() {
                return c
            },
            Gk: function() {
                return v
            },
            bE: function() {
                return h
            },
            cI: function() {
                return f
            },
            my: function() {
                return g
            },
            qH: function() {
                return d
            }
        });
        var r = n(96237)
          , i = n(5053)
          , t = n(17944)
          , l = n(70079)
          , s = n(70671);
        function o() {
            var e = (0,
            s.Z)()
              , a = e.formatMessage(x.adminRoleName)
              , n = e.formatMessage(x.ownerRoleName)
              , t = e.formatMessage(x.standardRoleName);
            return (0,
            l.useMemo)(function() {
                var e;
                return e = {},
                (0,
                r._)(e, i.r3.OWNER, n),
                (0,
                r._)(e, i.r3.ADMIN, a),
                (0,
                r._)(e, i.r3.STANDARD, t),
                e
            }, [n, a, t])
        }
        function d(e) {
            var a = (0,
            s.Z)()
              , n = (0,
            t.ec)(t.F_.isTeamPlan)
              , r = (0,
            t.ec)(t.F_.isEnterprisePlan);
            if (e) {
                if (n)
                    return a.formatMessage(x.teamPlanName);
                if (r)
                    return a.formatMessage(x.enterprisePlanName)
            }
            return a.formatMessage(x.personalPlanName)
        }
        function c(e) {
            return u((0,
            s.Z)(), e)
        }
        function m() {
            var e = (0,
            t.ec)(function(e) {
                return e.currentWorkspace
            });
            return u((0,
            s.Z)(), e)
        }
        function u(e, a) {
            var n;
            return a && a.structure !== i.CZ.PERSONAL ? null !== (n = a.name) && void 0 !== n ? n : e.formatMessage(x.defaultWorkspaceTitle) : e.formatMessage(x.personalWorkspaceTitle)
        }
        function f() {
            var e, a, n = (0,
            t.aF)();
            return null !== (a = null !== (e = null == n ? void 0 : n.name) && void 0 !== e ? e : null == n ? void 0 : n.email) && void 0 !== a ? a : null
        }
        function p() {
            return (0,
            t.ec)(function(e) {
                return e.workspaces
            })
        }
        function g() {
            return (0,
            t.ec)(function(e) {
                return e.workspaces.filter(function(e) {
                    return !e.deactivated
                })
            })
        }
        function v(e) {
            var a = p().find(function(a) {
                return a.id === e
            });
            return (null == a ? void 0 : a.role) === i.r3.OWNER
        }
        function h(e) {
            var a = p().find(function(a) {
                return a.id === e
            });
            return (null == a ? void 0 : a.role) === i.r3.ADMIN
        }
        var x = (0,
        n(94968).vU)({
            defaultWorkspaceTitle: {
                id: "useWorkspaces.defaultWorkspaceTitle",
                defaultMessage: "Untitled Workspace",
                description: "title for workspace without a name"
            },
            personalWorkspaceTitle: {
                id: "useWorkspaces.personalWorkspaceTitle",
                defaultMessage: "Personal account",
                description: "title for personal workspace"
            },
            personalPlanName: {
                id: "useWorkspaces.personalPlanName",
                defaultMessage: "Personal",
                description: "label for personal tier account"
            },
            enterprisePlanName: {
                id: "useWorkspaces.enterprisePlanName",
                defaultMessage: "Enterprise",
                description: "label for enterprise tier account"
            },
            teamPlanName: {
                id: "useWorkspaces.teamPlanName",
                defaultMessage: "Team",
                description: "label for team tier account"
            },
            adminRoleName: {
                id: "useWorkspaces.adminRoleName",
                defaultMessage: "Admin",
                description: "Role name for an admin user"
            },
            ownerRoleName: {
                id: "useWorkspaces.ownerRoleName",
                defaultMessage: "Owner",
                description: "Role name for an owner user"
            },
            standardRoleName: {
                id: "useWorkspacews.standardRoleName",
                defaultMessage: "Member",
                description: "Role name for a standard user"
            }
        })
    }
}]);
