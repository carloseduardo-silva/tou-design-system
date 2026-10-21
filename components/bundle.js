/* @ds-bundle: {"format":4,"namespace":"TOU","components":[{"name":"Button"},{"name":"IconButton"},{"name":"TextField"},{"name":"Textarea"},{"name":"Select"},{"name":"MultiSelect"},{"name":"Combobox"},{"name":"DateField"},{"name":"TimeField"},{"name":"Calendar"},{"name":"Checkbox"},{"name":"ChoiceGroup"},{"name":"Radio"},{"name":"Switch"},{"name":"Modal"},{"name":"ConfirmDialog"},{"name":"Drawer"},{"name":"Menu"},{"name":"Tooltip"},{"name":"InfoTip"},{"name":"Badge"},{"name":"StatusDot"},{"name":"Tag"},{"name":"Chip"},{"name":"FilterChip"},{"name":"Alert"},{"name":"Toast"},{"name":"ToastProvider"},{"name":"Tabs"},{"name":"SegmentedControl"},{"name":"Accordion"},{"name":"Avatar"},{"name":"Link"},{"name":"Skeleton"},{"name":"Spinner"},{"name":"ProgressBar"},{"name":"EmptyState"},{"name":"Card"},{"name":"Sidebar"},{"name":"PageHeader"},{"name":"DataTable"},{"name":"FilterBar"},{"name":"Pagination"},{"name":"KpiCard"},{"name":"SiteHeader"},{"name":"Hero"},{"name":"ProductPreview"},{"name":"Accent"},{"name":"SectionHeader"},{"name":"LogoStrip"},{"name":"Marquee"},{"name":"Testimonial"},{"name":"TestimonialStrip"},{"name":"Stars"},{"name":"FeatureTabs"},{"name":"LeadForm"},{"name":"ScheduleModal"},{"name":"CtaBanner"},{"name":"Faq"},{"name":"SiteFooter"},{"name":"Icon"}]} */
var TOU = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: !0 });
  }, __copyProps = (to, from, except, desc) => {
    if (from && typeof from == "object" || typeof from == "function")
      for (let key of __getOwnPropNames(from))
        !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

  // src/index.tsx
  var index_exports = {};
  __export(index_exports, {
    Accent: () => Accent,
    Accordion: () => Accordion,
    Alert: () => Alert,
    Avatar: () => Avatar,
    Badge: () => Badge,
    Button: () => Button,
    Calendar: () => Calendar,
    Card: () => Card,
    Checkbox: () => Checkbox,
    Chip: () => Chip,
    ChoiceGroup: () => ChoiceGroup,
    Combobox: () => Combobox,
    ConfirmDialog: () => ConfirmDialog,
    CtaBanner: () => CtaBanner,
    DataTable: () => DataTable,
    DateField: () => DateField,
    Drawer: () => Drawer,
    EmptyState: () => EmptyState,
    Faq: () => Faq,
    FeatureTabs: () => FeatureTabs,
    FilterBar: () => FilterBar,
    FilterChip: () => FilterChip,
    Hero: () => Hero,
    Icon: () => Icon,
    IconButton: () => IconButton,
    InfoTip: () => InfoTip,
    KpiCard: () => KpiCard,
    LeadForm: () => LeadForm,
    Link: () => Link,
    LogoStrip: () => LogoStrip,
    Marquee: () => Marquee,
    Menu: () => Menu,
    Modal: () => Modal,
    MultiSelect: () => MultiSelect,
    PageHeader: () => PageHeader,
    Pagination: () => Pagination,
    ProductPreview: () => ProductPreview,
    ProgressBar: () => ProgressBar,
    Radio: () => Radio,
    ScheduleModal: () => ScheduleModal,
    SectionHeader: () => SectionHeader,
    SegmentedControl: () => SegmentedControl,
    Select: () => Select,
    Sidebar: () => Sidebar,
    SiteFooter: () => SiteFooter,
    SiteHeader: () => SiteHeader,
    Skeleton: () => Skeleton,
    Spinner: () => Spinner,
    Stars: () => Stars,
    StatusDot: () => StatusDot,
    Switch: () => Switch,
    Tabs: () => Tabs,
    Tag: () => Tag,
    Testimonial: () => Testimonial,
    TestimonialStrip: () => TestimonialStrip,
    TextField: () => TextField,
    Textarea: () => Textarea,
    TimeField: () => TimeField,
    Toast: () => Toast,
    ToastProvider: () => ToastProvider,
    Tooltip: () => Tooltip,
    useToast: () => useToast
  });

  // src/react-shim.ts
  var React = window.React, ReactDOM = window.ReactDOM;

  // src/icon-data.ts
  var ICONS = { check: [["path", { d: "M20 6 9 17l-5-5" }]], x: [["path", { d: "M18 6 6 18" }], ["path", { d: "m6 6 12 12" }]], "chevron-down": [["path", { d: "m6 9 6 6 6-6" }]], "chevron-up": [["path", { d: "m18 15-6-6-6 6" }]], "chevron-left": [["path", { d: "m15 18-6-6 6-6" }]], "chevron-right": [["path", { d: "m9 18 6-6-6-6" }]], "chevrons-up-down": [["path", { d: "m7 15 5 5 5-5" }], ["path", { d: "m7 9 5-5 5 5" }]], "arrow-up": [["path", { d: "m5 12 7-7 7 7" }], ["path", { d: "M12 19V5" }]], "arrow-down": [["path", { d: "M12 5v14" }], ["path", { d: "m19 12-7 7-7-7" }]], "arrow-up-down": [["path", { d: "m21 16-4 4-4-4" }], ["path", { d: "M17 20V4" }], ["path", { d: "m3 8 4-4 4 4" }], ["path", { d: "M7 4v16" }]], search: [["path", { d: "m21 21-4.34-4.34" }], ["circle", { cx: "11", cy: "11", r: "8" }]], plus: [["path", { d: "M5 12h14" }], ["path", { d: "M12 5v14" }]], minus: [["path", { d: "M5 12h14" }]], trash: [["path", { d: "M10 11v6" }], ["path", { d: "M14 11v6" }], ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" }], ["path", { d: "M3 6h18" }], ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" }]], pencil: [["path", { d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" }], ["path", { d: "m15 5 4 4" }]], "ellipsis-vertical": [["circle", { cx: "12", cy: "12", r: "1" }], ["circle", { cx: "12", cy: "5", r: "1" }], ["circle", { cx: "12", cy: "19", r: "1" }]], "list-filter": [["path", { d: "M2 5h20" }], ["path", { d: "M6 12h12" }], ["path", { d: "M9 19h6" }]], "sliders-horizontal": [["path", { d: "M10 5H3" }], ["path", { d: "M12 19H3" }], ["path", { d: "M14 3v4" }], ["path", { d: "M16 17v4" }], ["path", { d: "M21 12h-9" }], ["path", { d: "M21 19h-5" }], ["path", { d: "M21 5h-7" }], ["path", { d: "M8 10v4" }], ["path", { d: "M8 12H3" }]], calendar: [["path", { d: "M8 2v3" }], ["path", { d: "M16 2v3" }], ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }], ["path", { d: "M3 9h18" }]], clock: [["circle", { cx: "12", cy: "12", r: "10" }], ["path", { d: "M12 6v6l4 2" }]], info: [["circle", { cx: "12", cy: "12", r: "10" }], ["path", { d: "M12 16v-4" }], ["path", { d: "M12 8h.01" }]], "circle-alert": [["circle", { cx: "12", cy: "12", r: "10" }], ["line", { x1: "12", x2: "12", y1: "8", y2: "12" }], ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16" }]], "triangle-alert": [["path", { d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" }], ["path", { d: "M12 9v4" }], ["path", { d: "M12 17h.01" }]], "circle-check": [["circle", { cx: "12", cy: "12", r: "10" }], ["path", { d: "m16 9-5.5 5.5L8 12" }]], "circle-x": [["circle", { cx: "12", cy: "12", r: "10" }], ["path", { d: "m15 9-6 6" }], ["path", { d: "m9 9 6 6" }]], "circle-question-mark": [["circle", { cx: "12", cy: "12", r: "10" }], ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }], ["path", { d: "M12 17h.01" }]], user: [["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" }], ["circle", { cx: "12", cy: "7", r: "4" }]], users: [["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }], ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744" }], ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87" }], ["circle", { cx: "9", cy: "7", r: "4" }]], "user-plus": [["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }], ["circle", { cx: "9", cy: "7", r: "4" }], ["line", { x1: "19", x2: "19", y1: "8", y2: "14" }], ["line", { x1: "22", x2: "16", y1: "11", y2: "11" }]], "message-square": [["path", { d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" }]], "message-circle": [["path", { d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" }]], phone: [["path", { d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" }]], mail: [["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" }], ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2" }]], tag: [["path", { d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" }], ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor" }]], eye: [["path", { d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" }], ["circle", { cx: "12", cy: "12", r: "3" }]], "eye-off": [["path", { d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" }], ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242" }], ["path", { d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" }], ["path", { d: "m2 2 20 20" }]], settings: [["path", { d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915" }], ["circle", { cx: "12", cy: "12", r: "3" }]], bell: [["path", { d: "M10.268 21a2 2 0 0 0 3.464 0" }], ["path", { d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" }]], "log-out": [["path", { d: "m16 17 5-5-5-5" }], ["path", { d: "M21 12H9" }], ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" }]], house: [["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" }], ["path", { d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }]], "chart-column": [["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }], ["path", { d: "M18 17V9" }], ["path", { d: "M13 17V5" }], ["path", { d: "M8 17v-3" }]], funnel: [["path", { d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z" }]], send: [["path", { d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" }], ["path", { d: "m21.854 2.147-10.94 10.939" }]], bot: [["path", { d: "M12 8V4H8" }], ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2" }], ["path", { d: "M2 14h2" }], ["path", { d: "M20 14h2" }], ["path", { d: "M15 13v2" }], ["path", { d: "M9 13v2" }]], megaphone: [["path", { d: "M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" }], ["path", { d: "M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14" }], ["path", { d: "M8 6v8" }]], building: [["path", { d: "M12 10h.01" }], ["path", { d: "M12 14h.01" }], ["path", { d: "M12 6h.01" }], ["path", { d: "M16 10h.01" }], ["path", { d: "M16 14h.01" }], ["path", { d: "M16 6h.01" }], ["path", { d: "M8 10h.01" }], ["path", { d: "M8 14h.01" }], ["path", { d: "M8 6h.01" }], ["path", { d: "M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" }], ["rect", { x: "4", y: "2", width: "16", height: "20", rx: "2" }]], "credit-card": [["rect", { width: "20", height: "14", x: "2", y: "5", rx: "2" }], ["line", { x1: "2", x2: "22", y1: "10", y2: "10" }], ["path", { d: "M6 14h2" }]], lock: [["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2" }], ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4" }]], "external-link": [["path", { d: "M15 3h6v6" }], ["path", { d: "M10 14 21 3" }], ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" }]], inbox: [["polyline", { points: "22 12 16 12 14 15 10 15 8 12 2 12" }], ["path", { d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" }]], download: [["path", { d: "M12 15V3" }], ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }], ["path", { d: "m7 10 5 5 5-5" }]], upload: [["path", { d: "M12 3v12" }], ["path", { d: "m17 8-5-5-5 5" }], ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }]], "refresh-cw": [["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" }], ["path", { d: "M21 3v5h-5" }], ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" }], ["path", { d: "M8 16H3v5" }]], copy: [["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2" }], ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" }]], star: [["path", { d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" }]], "panel-left-close": [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M9 3v18" }], ["path", { d: "m16 15-3-3 3-3" }]], "panel-left-open": [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M9 3v18" }], ["path", { d: "m14 9 3 3-3 3" }]], workflow: [["rect", { width: "8", height: "8", x: "3", y: "3", rx: "2" }], ["path", { d: "M7 11v4a2 2 0 0 0 2 2h4" }], ["rect", { width: "8", height: "8", x: "13", y: "13", rx: "2" }]], contact: [["path", { d: "M16 2v2" }], ["path", { d: "M7 21v-2a2 2 0 012-2h6a2 2 0 012 2v2" }], ["path", { d: "M8 2v2" }], ["circle", { cx: "12", cy: "10", r: "3" }], ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }]], "funnel-x": [["path", { d: "M12.531 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l.427-.473" }], ["path", { d: "m16.5 3.5 5 5" }], ["path", { d: "m21.5 3.5-5 5" }]], "check-check": [["path", { d: "M18 6 7 17l-5-5" }], ["path", { d: "m22 10-7.5 7.5L13 16" }]], "trending-up": [["path", { d: "M16 7h6v6" }], ["path", { d: "m22 7-8.5 8.5-5-5L2 17" }]], "trending-down": [["path", { d: "M16 17h6v-6" }], ["path", { d: "m22 17-8.5-8.5-5 5L2 7" }]], moon: [["path", { d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" }]], sun: [["circle", { cx: "12", cy: "12", r: "4" }], ["path", { d: "M12 2v2" }], ["path", { d: "M12 20v2" }], ["path", { d: "m4.93 4.93 1.41 1.41" }], ["path", { d: "m17.66 17.66 1.41 1.41" }], ["path", { d: "M2 12h2" }], ["path", { d: "M20 12h2" }], ["path", { d: "m6.34 17.66-1.41 1.41" }], ["path", { d: "m19.07 4.93-1.41 1.41" }]], "file-text": [["path", { d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" }], ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }], ["path", { d: "M10 9H8" }], ["path", { d: "M16 13H8" }], ["path", { d: "M16 17H8" }]], zap: [["path", { d: "M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z" }]], sparkles: [["path", { d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" }], ["path", { d: "M20 2v4" }], ["path", { d: "M22 4h-4" }], ["circle", { cx: "4", cy: "20", r: "2" }]], headset: [["path", { d: "M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" }], ["path", { d: "M21 16v2a4 4 0 0 1-4 4h-5" }]], "search-x": [["path", { d: "m13.5 8.5-5 5" }], ["path", { d: "m8.5 8.5 5 5" }], ["circle", { cx: "11", cy: "11", r: "8" }], ["path", { d: "m21 21-4.3-4.3" }]], "calendar-range": [["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }], ["path", { d: "M16 2v3" }], ["path", { d: "M3 9h18" }], ["path", { d: "M8 2v3" }], ["path", { d: "M17 13h-6" }], ["path", { d: "M13 17H7" }], ["path", { d: "M7 13h.01" }], ["path", { d: "M17 17h.01" }]], image: [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }], ["circle", { cx: "9", cy: "9", r: "2" }], ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" }]], "arrow-left": [["path", { d: "m12 19-7-7 7-7" }], ["path", { d: "M19 12H5" }]], "arrow-right": [["path", { d: "M5 12h14" }], ["path", { d: "m12 5 7 7-7 7" }]], list: [["path", { d: "M3 5h.01" }], ["path", { d: "M3 12h.01" }], ["path", { d: "M3 19h.01" }], ["path", { d: "M8 5h13" }], ["path", { d: "M8 12h13" }], ["path", { d: "M8 19h13" }]], "square-kanban": [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M8 7v7" }], ["path", { d: "M12 7v4" }], ["path", { d: "M16 7v9" }]], play: [["path", { d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" }]], pause: [["rect", { x: "14", y: "3", width: "5", height: "18", rx: "1" }], ["rect", { x: "5", y: "3", width: "5", height: "18", rx: "1" }]], menu: [["path", { d: "M4 5h16" }], ["path", { d: "M4 12h16" }], ["path", { d: "M4 19h16" }]], "chevron-first": [["path", { d: "m17 18-6-6 6-6" }], ["path", { d: "M7 6v12" }]], "chevron-last": [["path", { d: "m7 18 6-6-6-6" }], ["path", { d: "M17 6v12" }]] };

  // src/core.tsx
  function cx(...parts) {
    return parts.filter(Boolean).join(" ");
  }
  var _id = 0;
  function useId(prefix = "tou") {
    let ref = React.useRef(null);
    return ref.current === null && (ref.current = `${prefix}-${++_id}`), ref.current;
  }
  function Icon({ name, size = 16, strokeWidth = 2, label, className }) {
    let nodes = ICONS[name] || [];
    return /* @__PURE__ */ React.createElement(
      "svg",
      {
        className: cx("tou-icon", className),
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        strokeWidth,
        "aria-hidden": label ? void 0 : !0,
        role: label ? "img" : void 0,
        "aria-label": label,
        focusable: "false"
      },
      nodes.map(([tag, attrs], i) => React.createElement(tag, { key: i, ...attrs }))
    );
  }
  function Spinner({ size = "md", label = "Carregando", className }) {
    return /* @__PURE__ */ React.createElement("span", { className: cx("tou-spinner", size !== "md" && `tou-spinner--${size}`, className), role: label ? "status" : void 0, "aria-label": label || void 0, "aria-hidden": label ? void 0 : !0 }, /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 24 24", fill: "none", strokeWidth: "3" }, /* @__PURE__ */ React.createElement("circle", { className: "tou-spinner__track", cx: "12", cy: "12", r: "9" }), /* @__PURE__ */ React.createElement("path", { className: "tou-spinner__arc", d: "M21 12a9 9 0 0 0-9-9", strokeLinecap: "round" })));
  }
  function Skeleton({ variant = "text", width, height, className }) {
    return /* @__PURE__ */ React.createElement(
      "span",
      {
        className: cx("tou-skel", variant !== "block" && `tou-skel--${variant}`, className),
        style: { width, height: height != null ? height : variant === "circle" ? width : void 0 },
        "aria-hidden": "true"
      }
    );
  }
  function useDismiss(open, onClose, refs) {
    React.useEffect(() => {
      if (!open) return;
      let onDown = (e) => {
        refs.some((r) => r.current && r.current.contains(e.target)) || onClose();
      }, onKey = (e) => {
        e.key === "Escape" && (e.stopPropagation(), onClose());
      };
      return document.addEventListener("mousedown", onDown), document.addEventListener("keydown", onKey), () => {
        document.removeEventListener("mousedown", onDown), document.removeEventListener("keydown", onKey);
      };
    }, [open]);
  }

  // src/display.tsx
  function Badge({ tone = "neutral", solid, icon, count, className, children }) {
    return /* @__PURE__ */ React.createElement("span", { className: cx("tou-badge", `tou-badge--${tone}`, solid && "tou-badge--solid", count && "tou-badge--count", className) }, icon ? /* @__PURE__ */ React.createElement(Icon, { name: icon, size: 12, strokeWidth: 2.5 }) : null, children);
  }
  function StatusDot({ tone = "neutral", children, className }) {
    return /* @__PURE__ */ React.createElement("span", { className: cx("tou-status", `tou-status--${tone}`, className) }, /* @__PURE__ */ React.createElement("span", { className: "tou-status__dot", "aria-hidden": "true" }), children);
  }
  function Tag({ tone = "neutral", solid, size = "md", icon, onRemove, disabled, className, children }) {
    let text = typeof children == "string" ? children : "";
    return /* @__PURE__ */ React.createElement("span", { className: cx("tou-tag", `tou-tag--${tone}`, solid && "tou-tag--solid", size === "sm" && "tou-tag--sm", disabled && "is-disabled", className) }, icon ? /* @__PURE__ */ React.createElement(Icon, { name: icon, size: 12, strokeWidth: 2.5 }) : null, /* @__PURE__ */ React.createElement("span", { className: "tou-tag__label" }, children), onRemove && !disabled ? /* @__PURE__ */ React.createElement("button", { type: "button", className: "tou-tag__remove", "aria-label": `Remover etiqueta ${text}`.trim(), onClick: onRemove }, /* @__PURE__ */ React.createElement(Icon, { name: "x", size: 12, strokeWidth: 2.5 })) : null);
  }
  function Chip({ selected, icon, count, className, children, type, ...rest }) {
    return /* @__PURE__ */ React.createElement("button", { type: type || "button", className: cx("tou-chip", className), "aria-pressed": selected != null ? selected : void 0, ...rest }, selected ? /* @__PURE__ */ React.createElement(Icon, { name: "check", size: 16 }) : icon ? /* @__PURE__ */ React.createElement(Icon, { name: icon, size: 16 }) : null, /* @__PURE__ */ React.createElement("span", null, children), count != null ? /* @__PURE__ */ React.createElement("span", { className: "tou-chip__count" }, count) : null);
  }
  function FilterChip({ field, value, onRemove, className }) {
    return /* @__PURE__ */ React.createElement("span", { className: cx("tou-chip tou-chip--filter", className) }, /* @__PURE__ */ React.createElement("span", { className: "tou-chip__key" }, field, ":"), /* @__PURE__ */ React.createElement("span", null, value), /* @__PURE__ */ React.createElement("button", { type: "button", className: "tou-chip__remove", "aria-label": `Remover filtro ${field}: ${typeof value == "string" ? value : ""}`, onClick: onRemove }, /* @__PURE__ */ React.createElement(Icon, { name: "x", size: 14 })));
  }
  var STATUS_PT = { online: "online", away: "ausente", busy: "ocupado", offline: "offline" };
  function initials(name = "") {
    let parts = name.trim().split(/\s+/).filter((p) => /[A-Za-zÀ-ÿ]/.test(p[0] || ""));
    return parts.length ? ((parts[0][0] || "") + (parts.length > 1 ? parts[parts.length - 1][0] : "")).toUpperCase() : "";
  }
  function Avatar({ name, src, size = "md", status, className }) {
    let ini = initials(name), mode = src ? "img" : ini ? "ini" : "icon", label = [name || "Contato sem nome", status ? STATUS_PT[status] : ""].filter(Boolean).join(", ");
    return /* @__PURE__ */ React.createElement("span", { className: cx("tou-avatar", size !== "md" && `tou-avatar--${size}`, mode === "icon" && "tou-avatar--icon", className), role: "img", "aria-label": label }, mode === "img" ? /* @__PURE__ */ React.createElement("img", { src, alt: "" }) : mode === "ini" ? /* @__PURE__ */ React.createElement("span", { "aria-hidden": "true" }, ini) : /* @__PURE__ */ React.createElement(Icon, { name: "user" }), status ? /* @__PURE__ */ React.createElement("span", { className: cx("tou-avatar__status", `tou-avatar__status--${status}`), "aria-hidden": "true" }) : null);
  }
  function EmptyState({ icon = "inbox", tone = "primary", title, description, actions, compact, className }) {
    return /* @__PURE__ */ React.createElement("div", { className: cx("tou-empty", compact && "tou-empty--compact", className), role: "status" }, /* @__PURE__ */ React.createElement("span", { className: cx("tou-empty__art", tone !== "primary" && `tou-empty__art--${tone}`), "aria-hidden": "true" }, /* @__PURE__ */ React.createElement(Icon, { name: icon, size: compact ? 20 : 24 })), /* @__PURE__ */ React.createElement("div", { style: compact ? { display: "flex", flexDirection: "column" } : { display: "contents" } }, /* @__PURE__ */ React.createElement("p", { className: "tou-empty__title" }, title), description ? /* @__PURE__ */ React.createElement("p", { className: "tou-empty__desc" }, description) : null), actions ? /* @__PURE__ */ React.createElement("div", { className: "tou-empty__actions" }, actions) : null);
  }

  // src/buttons.tsx
  var Button = React.forwardRef(function({ variant = "primary", size = "md", pill, block, iconStart, iconEnd, loading, disabled, href, className, children, type, ...rest }, ref) {
    let iconSize = size === "lg" ? 20 : 16, cls = cx("tou-btn", `tou-btn--${variant}`, size !== "md" && `tou-btn--${size}`, pill && "tou-btn--pill", block && "tou-btn--block", loading && "is-loading", className), inner = /* @__PURE__ */ React.createElement(React.Fragment, null, loading ? /* @__PURE__ */ React.createElement(Spinner, { size: "md", label: "" }) : iconStart ? /* @__PURE__ */ React.createElement(Icon, { name: iconStart, size: iconSize }) : null, /* @__PURE__ */ React.createElement("span", null, children), iconEnd && !loading ? /* @__PURE__ */ React.createElement(Icon, { name: iconEnd, size: iconSize }) : null);
    return href && !disabled ? /* @__PURE__ */ React.createElement("a", { ref, className: cls, href, "aria-busy": loading || void 0, ...rest }, inner) : /* @__PURE__ */ React.createElement(
      "button",
      {
        ref,
        type: type || "button",
        className: cls,
        disabled,
        "aria-disabled": loading || void 0,
        "aria-busy": loading || void 0,
        ...rest,
        ...loading ? { onClick: (e) => e.preventDefault() } : {}
      },
      inner
    );
  }), IconButton = React.forwardRef(function({ icon, label, variant = "ghost", size = "md", badge, pressed, className, type, ...rest }, ref) {
    return /* @__PURE__ */ React.createElement(
      "button",
      {
        ref,
        type: type || "button",
        className: cx("tou-iconbtn", `tou-iconbtn--${variant}`, size === "sm" && "tou-iconbtn--sm", className),
        "aria-label": badge ? `${label} (${badge})` : label,
        "aria-pressed": pressed,
        title: rest.title,
        ...rest
      },
      /* @__PURE__ */ React.createElement(Icon, { name: icon, size: size === "sm" ? 16 : 20 }),
      badge ? /* @__PURE__ */ React.createElement(Badge, { tone: "primary", solid: !0, count: !0, className: "tou-iconbtn__badge tou-badge--ring" }, badge > 99 ? "99+" : badge) : null
    );
  });

  // src/fields.tsx
  function FieldFrame({ id, label, required, optional, help, error, disabled, className, counter, labelAs = "label", children }) {
    let L = labelAs;
    return /* @__PURE__ */ React.createElement("div", { className: cx("tou-field", disabled && "is-disabled", className) }, /* @__PURE__ */ React.createElement(L, { className: "tou-label", ...labelAs === "label" ? { htmlFor: id, id: `${id}-lbl` } : { id: `${id}-label` } }, label, required ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", { className: "tou-label__req", "aria-hidden": "true" }, "*"), /* @__PURE__ */ React.createElement("span", { className: "tou-sr" }, " (obrigatório)")) : null, optional && !required ? /* @__PURE__ */ React.createElement("span", { className: "tou-label__opt" }, "(opcional)") : null), children, error ? /* @__PURE__ */ React.createElement("span", { className: "tou-help tou-help--error", id: `${id}-msg` }, /* @__PURE__ */ React.createElement(Icon, { name: "circle-alert", size: 14 }), /* @__PURE__ */ React.createElement("span", null, error), counter ? /* @__PURE__ */ React.createElement("span", { className: "tou-help__count" }, counter) : null) : help || counter ? /* @__PURE__ */ React.createElement("span", { className: "tou-help", id: `${id}-msg` }, help ? /* @__PURE__ */ React.createElement("span", null, help) : null, counter ? /* @__PURE__ */ React.createElement("span", { className: "tou-help__count" }, counter) : null) : null);
  }
  function describedBy(id, p, counter) {
    return p.error || p.help || counter ? `${id}-msg` : void 0;
  }
  function TextField(props) {
    var _a;
    let { label, required, optional, help, error, disabled, size = "md", className, controlClassName, icon, prefix, suffix, addonStart, onClear, maxLength, readOnly, id: idProp, value, defaultValue, ...rest } = props, auto = useId("campo"), id = idProp || auto, len = String((_a = value != null ? value : defaultValue) != null ? _a : "").length, counter = maxLength ? `${len}/${maxLength}` : void 0;
    return /* @__PURE__ */ React.createElement(FieldFrame, { id, label, required, optional, help, error, disabled, className, counter }, /* @__PURE__ */ React.createElement("div", { className: cx("tou-control", size === "sm" && "tou-control--sm", error && "is-invalid", disabled && "is-disabled", readOnly && "is-readonly", controlClassName) }, addonStart ? /* @__PURE__ */ React.createElement("span", { className: "tou-control__addon tou-control__addon--start" }, addonStart) : null, icon ? /* @__PURE__ */ React.createElement("span", { className: "tou-control__icon" }, /* @__PURE__ */ React.createElement(Icon, { name: icon })) : null, prefix ? /* @__PURE__ */ React.createElement("span", { className: "tou-control__addon" }, prefix) : null, /* @__PURE__ */ React.createElement(
      "input",
      {
        id,
        className: "tou-control__input",
        disabled,
        readOnly,
        required,
        "aria-invalid": error ? !0 : void 0,
        "aria-describedby": describedBy(id, props, counter),
        maxLength,
        value,
        defaultValue,
        ...rest
      }
    ), suffix ? /* @__PURE__ */ React.createElement("span", { className: "tou-control__addon" }, suffix) : null, onClear && len > 0 && !disabled ? /* @__PURE__ */ React.createElement("button", { type: "button", className: "tou-control__clear", "aria-label": `Limpar ${label.toLowerCase()}`, onClick: onClear }, /* @__PURE__ */ React.createElement(Icon, { name: "x", size: 14 })) : null));
  }
  function Textarea(props) {
    var _a;
    let { label, required, optional, help, error, disabled, className, controlClassName, maxLength, id: idProp, value, defaultValue, rows = 4, ...rest } = props, auto = useId("texto"), id = idProp || auto, len = String((_a = value != null ? value : defaultValue) != null ? _a : "").length, counter = maxLength ? `${len}/${maxLength}` : void 0;
    return /* @__PURE__ */ React.createElement(FieldFrame, { id, label, required, optional, help, error, disabled, className, counter }, /* @__PURE__ */ React.createElement("div", { className: cx("tou-control tou-control--multiline", error && "is-invalid", disabled && "is-disabled", controlClassName) }, /* @__PURE__ */ React.createElement("textarea", { id, className: "tou-control__input", rows, disabled, required, "aria-invalid": error ? !0 : void 0, "aria-describedby": describedBy(id, props, counter), maxLength, value, defaultValue, ...rest })));
  }
  function norm(s) {
    return s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
  }
  function highlight(label, q) {
    if (!q) return label;
    let i = norm(label).indexOf(norm(q));
    return i < 0 ? label : /* @__PURE__ */ React.createElement(React.Fragment, null, label.slice(0, i), /* @__PURE__ */ React.createElement("mark", null, label.slice(i, i + q.length)), label.slice(i + q.length));
  }
  function Listbox({ id, options, selected, active, multi, query = "", onPick, onHover, labelledBy, focusable, onKeyDown, listRef }) {
    let lastGroup;
    return options.length ? /* @__PURE__ */ React.createElement(
      "ul",
      {
        id,
        ref: listRef,
        className: "tou-listbox",
        role: "listbox",
        "aria-labelledby": labelledBy,
        "aria-multiselectable": multi || void 0,
        tabIndex: focusable ? -1 : void 0,
        "aria-activedescendant": active >= 0 ? `${id}-opt-${active}` : void 0,
        onKeyDown
      },
      options.map((o, i) => {
        let sel = selected.includes(o.value), head = o.group && o.group !== lastGroup ? lastGroup = o.group : null;
        return /* @__PURE__ */ React.createElement(React.Fragment, { key: o.value }, head ? /* @__PURE__ */ React.createElement("li", { className: "tou-listbox__group", role: "presentation" }, head) : null, /* @__PURE__ */ React.createElement(
          "li",
          {
            id: `${id}-opt-${i}`,
            role: "option",
            "aria-selected": sel,
            "aria-disabled": o.disabled || void 0,
            className: cx("tou-option", i === active && "is-active"),
            onMouseEnter: () => onHover(i),
            onMouseDown: (e) => e.preventDefault(),
            onClick: () => !o.disabled && onPick(o)
          },
          multi ? /* @__PURE__ */ React.createElement("span", { className: cx("tou-check", sel && "is-checked", o.disabled && "is-disabled"), "aria-hidden": "true", style: { padding: 0, minHeight: 0 } }, /* @__PURE__ */ React.createElement("span", { className: "tou-check__box", style: { marginTop: 0 } }, sel ? /* @__PURE__ */ React.createElement(Icon, { name: "check", size: 12, strokeWidth: 3 }) : null)) : o.icon ? /* @__PURE__ */ React.createElement(Icon, { name: o.icon, size: 16 }) : null,
          /* @__PURE__ */ React.createElement("span", { className: "tou-option__body" }, highlight(o.label, query), o.meta ? /* @__PURE__ */ React.createElement("span", { className: "tou-option__meta" }, o.meta) : null),
          !multi && sel ? /* @__PURE__ */ React.createElement("span", { className: "tou-option__check" }, /* @__PURE__ */ React.createElement(Icon, { name: "check", size: 16 })) : null
        ));
      })
    ) : /* @__PURE__ */ React.createElement("div", { className: "tou-listbox__empty", role: "status" }, /* @__PURE__ */ React.createElement(Icon, { name: "search-x", size: 20 }), /* @__PURE__ */ React.createElement("span", null, query ? /* @__PURE__ */ React.createElement(React.Fragment, null, "Nenhum resultado para “", query, "”.") : "Nenhuma opção disponível."));
  }
  function useListNav(count, isDisabled) {
    let [active, setActive] = React.useState(-1);
    return { active, setActive, move: (dir) => {
      if (!count) return;
      let i = active;
      for (let n = 0; n < count && (i = (i + dir + count) % count, !!isDisabled(i)); n++)
        ;
      setActive(i);
    } };
  }
  function Select(props) {
    let { label, required, optional, help, error, disabled, size = "md", className, controlClassName, options, value, onChange, placeholder = "Selecione", open: openProp, defaultOpen } = props, id = useId("select"), [openState, setOpen] = React.useState(!!defaultOpen), open = openProp != null ? openProp : openState, [inner, setInner] = React.useState(value != null ? value : null), current = value !== void 0 ? value : inner, sel = options.find((o) => o.value === current), nav = useListNav(options.length, (i) => !!options[i].disabled), wrap = React.useRef(null), btn = React.useRef(null), list = React.useRef(null);
    useDismiss(open && openProp === void 0, () => setOpen(!1), [wrap]), React.useEffect(() => {
      if (!open) return;
      let si = options.findIndex((o) => o.value === current);
      openProp === void 0 ? (nav.setActive(Math.max(0, si)), setTimeout(() => {
        var _a;
        return (_a = list.current) == null ? void 0 : _a.focus();
      }, 0)) : nav.setActive(Math.min(options.length - 1, si + 1));
    }, [open]);
    let pick = (o) => {
      var _a;
      setInner(o.value), onChange == null || onChange(o.value), setOpen(!1), (_a = btn.current) == null || _a.focus();
    }, onListKey = (e) => {
      var _a;
      if (e.key === "ArrowDown")
        e.preventDefault(), nav.move(1);
      else if (e.key === "ArrowUp")
        e.preventDefault(), nav.move(-1);
      else if (e.key === "Home")
        e.preventDefault(), nav.setActive(0);
      else if (e.key === "End")
        e.preventDefault(), nav.setActive(options.length - 1);
      else if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        let o = options[nav.active];
        o && !o.disabled && pick(o);
      } else (e.key === "Escape" || e.key === "Tab") && (setOpen(!1), (_a = btn.current) == null || _a.focus());
    };
    return /* @__PURE__ */ React.createElement(FieldFrame, { id, label, required, optional, help, error, disabled, className, labelAs: "span" }, /* @__PURE__ */ React.createElement("div", { className: "tou-anchor", ref: wrap }, /* @__PURE__ */ React.createElement(
      "button",
      {
        ref: btn,
        type: "button",
        id,
        className: cx("tou-control tou-select__trigger", size === "sm" && "tou-control--sm", error && "is-invalid", disabled && "is-disabled", open && "is-open", controlClassName),
        "aria-haspopup": "listbox",
        "aria-expanded": open,
        "aria-controls": `${id}-list`,
        "aria-labelledby": `${id}-label ${id}`,
        "aria-invalid": error ? !0 : void 0,
        "aria-describedby": describedBy(id, props),
        disabled,
        onClick: () => setOpen(!open),
        onKeyDown: (e) => {
          (e.key === "ArrowDown" || e.key === "ArrowUp") && (e.preventDefault(), setOpen(!0));
        }
      },
      /* @__PURE__ */ React.createElement("span", { className: cx("tou-select__value", !sel && "is-placeholder") }, sel != null && sel.icon ? /* @__PURE__ */ React.createElement(Icon, { name: sel.icon }) : null, sel ? sel.label : placeholder),
      /* @__PURE__ */ React.createElement("span", { className: "tou-select__chev" }, /* @__PURE__ */ React.createElement(Icon, { name: "chevron-down" }))
    ), open ? /* @__PURE__ */ React.createElement("div", { className: "tou-popover" }, /* @__PURE__ */ React.createElement(Listbox, { id: `${id}-list`, listRef: list, focusable: !0, labelledBy: `${id}-label`, options, selected: current ? [current] : [], active: nav.active, onPick: pick, onHover: nav.setActive, onKeyDown: onListKey })) : null));
  }
  function MultiSelect(props) {
    let { label, required, optional, help, error, disabled, className, controlClassName, options, value, onChange, placeholder = "Selecione", maxChips = 3, open: openProp, defaultOpen } = props, id = useId("multi"), [openState, setOpen] = React.useState(!!defaultOpen), open = openProp != null ? openProp : openState, [inner, setInner] = React.useState(value != null ? value : []), current = value != null ? value : inner, nav = useListNav(options.length, (i) => !!options[i].disabled), wrap = React.useRef(null), list = React.useRef(null), trig = React.useRef(null);
    useDismiss(open && openProp === void 0, () => setOpen(!1), [wrap]), React.useEffect(() => {
      open && (nav.setActive(openProp === void 0 ? 0 : 1), openProp === void 0 && setTimeout(() => {
        var _a;
        return (_a = list.current) == null ? void 0 : _a.focus();
      }, 0));
    }, [open]);
    let set = (v) => {
      setInner(v), onChange == null || onChange(v);
    }, toggle = (o) => set(current.includes(o.value) ? current.filter((x) => x !== o.value) : [...current, o.value]), chosen = options.filter((o) => current.includes(o.value)), onListKey = (e) => {
      var _a;
      if (e.key === "ArrowDown")
        e.preventDefault(), nav.move(1);
      else if (e.key === "ArrowUp")
        e.preventDefault(), nav.move(-1);
      else if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        let o = options[nav.active];
        o && !o.disabled && toggle(o);
      } else (e.key === "Escape" || e.key === "Tab") && (setOpen(!1), (_a = trig.current) == null || _a.focus());
    };
    return /* @__PURE__ */ React.createElement(FieldFrame, { id, label, required, optional, help, error, disabled, className, labelAs: "span" }, /* @__PURE__ */ React.createElement("div", { className: "tou-anchor", ref: wrap }, /* @__PURE__ */ React.createElement(
      "div",
      {
        ref: trig,
        id,
        role: "combobox",
        tabIndex: disabled ? -1 : 0,
        "aria-haspopup": "listbox",
        "aria-expanded": open,
        "aria-controls": `${id}-list`,
        "aria-labelledby": `${id}-label`,
        "aria-disabled": disabled || void 0,
        "aria-invalid": error ? !0 : void 0,
        "aria-describedby": describedBy(id, props),
        className: cx("tou-control tou-control--multi tou-select__trigger", error && "is-invalid", disabled && "is-disabled", open && "is-open", controlClassName),
        onClick: (e) => {
          !disabled && !e.target.closest(".tou-tag__remove") && setOpen(!open);
        },
        onKeyDown: (e) => {
          !disabled && (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") && (e.preventDefault(), setOpen(!0));
        }
      },
      /* @__PURE__ */ React.createElement("span", { className: "tou-multi__chips" }, chosen.length ? /* @__PURE__ */ React.createElement(React.Fragment, null, chosen.slice(0, maxChips).map((o) => /* @__PURE__ */ React.createElement(Tag, { key: o.value, size: "sm", tone: "primary", disabled, onRemove: disabled ? void 0 : () => toggle(o) }, o.label)), chosen.length > maxChips ? /* @__PURE__ */ React.createElement(Tag, { size: "sm", tone: "neutral" }, "+", chosen.length - maxChips) : null) : /* @__PURE__ */ React.createElement("span", { className: "tou-select__value is-placeholder" }, placeholder)),
      /* @__PURE__ */ React.createElement("span", { className: "tou-select__chev" }, /* @__PURE__ */ React.createElement(Icon, { name: "chevron-down" }))
    ), open ? /* @__PURE__ */ React.createElement("div", { className: "tou-popover" }, /* @__PURE__ */ React.createElement(Listbox, { id: `${id}-list`, listRef: list, focusable: !0, multi: !0, labelledBy: `${id}-label`, options, selected: current, active: nav.active, onPick: toggle, onHover: nav.setActive, onKeyDown: onListKey }), /* @__PURE__ */ React.createElement("div", { className: "tou-popover__foot" }, /* @__PURE__ */ React.createElement("span", { className: "tou-help", "aria-live": "polite" }, current.length, " ", current.length === 1 ? "selecionada" : "selecionadas"), /* @__PURE__ */ React.createElement("button", { type: "button", className: "tou-link tou-link--standalone", style: { border: 0, background: "none", font: "inherit", fontSize: 13 }, onClick: () => set([]), disabled: !current.length }, "Limpar"))) : null));
  }
  function Combobox(props) {
    let { label, required, optional, help, error, disabled, size = "md", className, controlClassName, options, value, onChange, placeholder = "Buscar…", query: queryProp, open: openProp, loading } = props, id = useId("combo"), [q, setQ] = React.useState(queryProp != null ? queryProp : ""), query = queryProp != null ? queryProp : q, [openState, setOpen] = React.useState(!1), open = openProp != null ? openProp : openState, [inner, setInner] = React.useState(value != null ? value : null), current = value !== void 0 ? value : inner, filtered = options.filter((o) => norm(o.label + " " + (o.meta || "")).includes(norm(query))), nav = useListNav(filtered.length, (i) => !!filtered[i].disabled), wrap = React.useRef(null);
    useDismiss(open && openProp === void 0, () => setOpen(!1), [wrap]);
    let pick = (o) => {
      setInner(o.value), onChange == null || onChange(o.value), setQ(o.label), setOpen(!1);
    };
    return React.useEffect(() => {
      open && openProp !== void 0 && query && nav.setActive(0);
    }, [open]), /* @__PURE__ */ React.createElement(FieldFrame, { id, label, required, optional, help, error, disabled, className }, /* @__PURE__ */ React.createElement("div", { className: "tou-anchor", ref: wrap }, /* @__PURE__ */ React.createElement("div", { className: cx("tou-control", size === "sm" && "tou-control--sm", error && "is-invalid", disabled && "is-disabled", open && "is-open", controlClassName) }, /* @__PURE__ */ React.createElement("span", { className: "tou-control__icon" }, /* @__PURE__ */ React.createElement(Icon, { name: "search" })), /* @__PURE__ */ React.createElement(
      "input",
      {
        id,
        className: "tou-control__input",
        role: "combobox",
        "aria-autocomplete": "list",
        "aria-expanded": open,
        "aria-controls": `${id}-pop`,
        "aria-activedescendant": open && !loading && filtered.length && nav.active >= 0 ? `${id}-list-opt-${nav.active}` : void 0,
        "aria-invalid": error ? !0 : void 0,
        "aria-describedby": describedBy(id, props),
        placeholder,
        value: query,
        disabled,
        autoComplete: "off",
        onChange: (e) => {
          setQ(e.target.value), setOpen(!0), nav.setActive(0);
        },
        onFocus: () => setOpen(!0),
        onKeyDown: (e) => {
          if (e.key === "ArrowDown")
            e.preventDefault(), setOpen(!0), nav.move(1);
          else if (e.key === "ArrowUp")
            e.preventDefault(), nav.move(-1);
          else if (e.key === "Enter") {
            let o = filtered[nav.active];
            open && o && !o.disabled && (e.preventDefault(), pick(o));
          } else e.key === "Escape" && setOpen(!1);
        }
      }
    ), query && !disabled ? /* @__PURE__ */ React.createElement("button", { type: "button", className: "tou-control__clear", "aria-label": "Limpar busca", onClick: () => {
      setQ(""), setInner(null), onChange == null || onChange(null);
    } }, /* @__PURE__ */ React.createElement(Icon, { name: "x", size: 14 })) : null), open ? null : /* @__PURE__ */ React.createElement("div", { id: `${id}-pop`, hidden: !0 }), open ? /* @__PURE__ */ React.createElement("div", { className: "tou-popover", id: `${id}-pop` }, loading ? /* @__PURE__ */ React.createElement("div", { className: "tou-listbox__empty", role: "status" }, /* @__PURE__ */ React.createElement("span", { className: "tou-spinner" }, /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 24 24", fill: "none", strokeWidth: "3" }, /* @__PURE__ */ React.createElement("circle", { className: "tou-spinner__track", cx: "12", cy: "12", r: "9" }), /* @__PURE__ */ React.createElement("path", { className: "tou-spinner__arc", d: "M21 12a9 9 0 0 0-9-9", strokeLinecap: "round" }))), /* @__PURE__ */ React.createElement("span", null, "Buscando contatos…")) : /* @__PURE__ */ React.createElement(Listbox, { id: `${id}-list`, labelledBy: `${id}-lbl`, options: filtered, selected: current ? [current] : [], active: nav.active, query, onPick: pick, onHover: nav.setActive })) : null));
  }
  function Checkbox({ label, description, ariaLabel, indeterminate, invalid, disabled, className, stateClassName, checked, ...rest }) {
    let ref = React.useRef(null);
    return React.useEffect(() => {
      ref.current && (ref.current.indeterminate = !!indeterminate);
    }, [indeterminate]), /* @__PURE__ */ React.createElement("label", { className: cx("tou-check", !label && "tou-check--bare", (checked || indeterminate) && "is-checked", disabled && "is-disabled", invalid && "is-invalid", stateClassName, className) }, /* @__PURE__ */ React.createElement("input", { ref, type: "checkbox", className: "tou-check__input", disabled, checked, "aria-label": label ? void 0 : ariaLabel, "aria-invalid": invalid || void 0, ...rest }), /* @__PURE__ */ React.createElement("span", { className: "tou-check__box", "aria-hidden": "true" }, indeterminate ? /* @__PURE__ */ React.createElement(Icon, { name: "minus", size: 12, strokeWidth: 3 }) : checked ? /* @__PURE__ */ React.createElement(Icon, { name: "check", size: 12, strokeWidth: 3 }) : null), label ? /* @__PURE__ */ React.createElement("span", { className: "tou-check__text" }, /* @__PURE__ */ React.createElement("span", null, label), description ? /* @__PURE__ */ React.createElement("span", { className: "tou-check__desc" }, description) : null) : null);
  }
  function Radio({ label, description, invalid, disabled, className, stateClassName, checked, ...rest }) {
    return /* @__PURE__ */ React.createElement("label", { className: cx("tou-check tou-check--radio", checked && "is-checked", disabled && "is-disabled", invalid && "is-invalid", stateClassName, className) }, /* @__PURE__ */ React.createElement("input", { type: "radio", className: "tou-check__input", disabled, checked, ...rest }), /* @__PURE__ */ React.createElement("span", { className: "tou-check__box", "aria-hidden": "true" }), /* @__PURE__ */ React.createElement("span", { className: "tou-check__text" }, /* @__PURE__ */ React.createElement("span", null, label), description ? /* @__PURE__ */ React.createElement("span", { className: "tou-check__desc" }, description) : null));
  }
  function ChoiceGroup({ label, required, help, error, row, children, className }) {
    let id = useId("grupo");
    return /* @__PURE__ */ React.createElement("fieldset", { className: cx("tou-choices", className), "aria-describedby": error || help ? `${id}-msg` : void 0, "aria-invalid": error ? !0 : void 0 }, /* @__PURE__ */ React.createElement("legend", { className: "tou-label" }, label, required ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", { className: "tou-label__req", "aria-hidden": "true" }, "*"), /* @__PURE__ */ React.createElement("span", { className: "tou-sr" }, " (obrigatório)")) : null), /* @__PURE__ */ React.createElement("div", { className: cx("tou-choices", row && "tou-choices--row") }, children), error ? /* @__PURE__ */ React.createElement("span", { className: "tou-help tou-help--error", id: `${id}-msg` }, /* @__PURE__ */ React.createElement(Icon, { name: "circle-alert", size: 14 }), /* @__PURE__ */ React.createElement("span", null, error)) : help ? /* @__PURE__ */ React.createElement("span", { className: "tou-help", id: `${id}-msg` }, help) : null);
  }
  function Switch({ label, description, end, disabled, checked, className, stateClassName, ...rest }) {
    return /* @__PURE__ */ React.createElement("label", { className: cx("tou-switch", end && "tou-switch--end", checked && "is-checked", disabled && "is-disabled", stateClassName, className) }, /* @__PURE__ */ React.createElement("input", { type: "checkbox", role: "switch", className: "tou-switch__input", disabled, checked, ...rest }), /* @__PURE__ */ React.createElement("span", { className: "tou-switch__track", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("span", { className: "tou-switch__thumb" }, /* @__PURE__ */ React.createElement(Icon, { name: "check", size: 10, strokeWidth: 3.5 }))), /* @__PURE__ */ React.createElement("span", { className: "tou-check__text" }, /* @__PURE__ */ React.createElement("span", null, label), description ? /* @__PURE__ */ React.createElement("span", { className: "tou-check__desc" }, description) : null));
  }
  var MONTHS = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"], DOW = ["D", "S", "T", "Q", "Q", "S", "S"], DOW_FULL = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"], same = (a, b) => !!a && !!b && a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate(), fmtDate = (d) => d ? `${String(d.getDate()).padStart(2, "0")}/${String(d.getMonth() + 1).padStart(2, "0")}/${d.getFullYear()}` : "";
  function Calendar({ month, value, range, today = /* @__PURE__ */ new Date(), isDisabled, onSelect, onMonthChange, focusDay, footer }) {
    let y = month.getFullYear(), m = month.getMonth(), first = new Date(y, m, 1), start = new Date(y, m, 1 - first.getDay()), days = Array.from({ length: 42 }, (_, i) => new Date(start.getFullYear(), start.getMonth(), start.getDate() + i)), rows = days[35].getMonth() !== m ? 35 : 42, id = useId("cal");
    return /* @__PURE__ */ React.createElement("div", { className: "tou-cal" }, /* @__PURE__ */ React.createElement("div", { className: "tou-cal__head" }, /* @__PURE__ */ React.createElement(IconButton, { icon: "chevron-left", label: "Mês anterior", size: "sm", onClick: () => onMonthChange == null ? void 0 : onMonthChange(new Date(y, m - 1, 1)) }), /* @__PURE__ */ React.createElement("span", { className: "tou-cal__title", id: `${id}-t`, "aria-live": "polite" }, MONTHS[m][0].toUpperCase() + MONTHS[m].slice(1), " de ", y), /* @__PURE__ */ React.createElement(IconButton, { icon: "chevron-right", label: "Próximo mês", size: "sm", onClick: () => onMonthChange == null ? void 0 : onMonthChange(new Date(y, m + 1, 1)) })), /* @__PURE__ */ React.createElement("div", { className: "tou-cal__grid", role: "grid", "aria-labelledby": `${id}-t` }, /* @__PURE__ */ React.createElement("div", { role: "row", style: { display: "contents" } }, DOW.map((d, i) => /* @__PURE__ */ React.createElement("span", { key: i, className: "tou-cal__dow", role: "columnheader", "aria-label": DOW_FULL[i] }, d))), Array.from({ length: rows / 7 }, (_, w) => /* @__PURE__ */ React.createElement("div", { role: "row", key: w, style: { display: "contents" } }, days.slice(w * 7, w * 7 + 7).map((d, i) => {
      let outside = d.getMonth() !== m, sel = same(d, value), rs = range == null ? void 0 : range.start, re = range == null ? void 0 : range.end, isStart = same(d, rs), isEnd = same(d, re), inRange = rs && re && d > rs && d < re, dis = isDisabled == null ? void 0 : isDisabled(d);
      return /* @__PURE__ */ React.createElement("span", { key: i, role: "gridcell", "aria-selected": sel || isStart || isEnd || void 0, className: cx("tou-cal__cell", inRange && "is-in-range", isStart && re && "is-range-start", isEnd && rs && "is-range-end") }, /* @__PURE__ */ React.createElement(
        "button",
        {
          type: "button",
          className: cx("tou-cal__day", outside && "is-outside", same(d, today) && "is-today", isStart && "is-start", isEnd && "is-end", focusDay === d.getDate() && !outside && "is-focus"),
          "aria-pressed": sel || isStart || isEnd || void 0,
          "aria-current": same(d, today) ? "date" : void 0,
          "aria-label": `${d.getDate()} de ${MONTHS[d.getMonth()]}, ${DOW_FULL[d.getDay()]}${dis ? ", indisponível" : ""}`,
          disabled: dis,
          tabIndex: sel || focusDay === d.getDate() && !outside ? 0 : -1,
          onClick: () => onSelect == null ? void 0 : onSelect(d)
        },
        d.getDate()
      ));
    })))), footer ? /* @__PURE__ */ React.createElement("div", { className: "tou-cal__foot" }, footer) : null);
  }
  function DateField(props) {
    let { label, required, optional, help, error, disabled, size = "md", className, controlClassName, value, onChange, range, onRangeChange, open: openProp, isDisabled, today } = props, id = useId("data"), [openState, setOpen] = React.useState(!1), open = openProp != null ? openProp : openState, base = (range == null ? void 0 : range.start) || value || today || /* @__PURE__ */ new Date(), [month, setMonth] = React.useState(new Date(base.getFullYear(), base.getMonth(), 1)), wrap = React.useRef(null);
    useDismiss(open && openProp === void 0, () => setOpen(!1), [wrap]);
    let text = range ? range.start ? `${fmtDate(range.start)} – ${fmtDate(range.end) || "…"}` : "" : fmtDate(value), select = (d) => {
      range ? !range.start || range.end ? onRangeChange == null || onRangeChange({ start: d, end: null }) : onRangeChange == null || onRangeChange(d < range.start ? { start: d, end: range.start } : { start: range.start, end: d }) : (onChange == null || onChange(d), setOpen(!1));
    };
    return /* @__PURE__ */ React.createElement(FieldFrame, { id, label, required, optional, help: help != null ? help : range ? "Escolha o início e o fim no calendário." : "Formato dd/mm/aaaa.", error, disabled, className }, /* @__PURE__ */ React.createElement("div", { className: "tou-anchor", ref: wrap }, /* @__PURE__ */ React.createElement("div", { className: cx("tou-control", size === "sm" && "tou-control--sm", error && "is-invalid", disabled && "is-disabled", open && "is-open", controlClassName) }, /* @__PURE__ */ React.createElement("span", { className: "tou-control__icon" }, /* @__PURE__ */ React.createElement(Icon, { name: range ? "calendar-range" : "calendar" })), /* @__PURE__ */ React.createElement("input", { id, className: "tou-control__input", placeholder: range ? "dd/mm/aaaa – dd/mm/aaaa" : "dd/mm/aaaa", defaultValue: text, key: text, inputMode: "numeric", disabled, "aria-invalid": error ? !0 : void 0, "aria-describedby": `${id}-msg`, "aria-haspopup": "dialog" }), /* @__PURE__ */ React.createElement(IconButton, { icon: "chevron-down", label: open ? "Fechar calendário" : "Abrir calendário", size: "sm", disabled, "aria-expanded": open, onClick: () => setOpen(!open), style: { marginRight: -8, width: 28, height: 28 } })), open ? /* @__PURE__ */ React.createElement("div", { className: "tou-popover", role: "dialog", "aria-label": `Calendário: ${label}`, style: { padding: 0, minWidth: 0, maxHeight: "none" } }, /* @__PURE__ */ React.createElement(
      Calendar,
      {
        month,
        value,
        range,
        today,
        isDisabled,
        onSelect: select,
        onMonthChange: setMonth,
        footer: range ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", null, range.start && range.end ? `${Math.round((+range.end - +range.start) / 864e5) + 1} dias` : "Selecione o fim"), /* @__PURE__ */ React.createElement("button", { type: "button", className: "tou-btn tou-btn--tertiary tou-btn--sm", onClick: () => onRangeChange == null ? void 0 : onRangeChange({}) }, "Limpar")) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", null, "Hoje: ", fmtDate(today || /* @__PURE__ */ new Date())), /* @__PURE__ */ React.createElement("button", { type: "button", className: "tou-btn tou-btn--tertiary tou-btn--sm", onClick: () => select(today || /* @__PURE__ */ new Date()) }, "Hoje"))
      }
    )) : null));
  }
  function TimeField(props) {
    let { label, required, optional, help, error, disabled, size = "md", className, controlClassName, value, onChange, step = 30, from = "08:00", to = "18:00", unavailable = [], open: openProp } = props, id = useId("hora"), [openState, setOpen] = React.useState(!1), open = openProp != null ? openProp : openState, wrap = React.useRef(null);
    useDismiss(open && openProp === void 0, () => setOpen(!1), [wrap]);
    let toMin = (s) => +s.slice(0, 2) * 60 + +s.slice(3, 5), slots = [];
    for (let t = toMin(from); t <= toMin(to); t += step) slots.push(`${String(Math.floor(t / 60)).padStart(2, "0")}:${String(t % 60).padStart(2, "0")}`);
    return /* @__PURE__ */ React.createElement(FieldFrame, { id, label, required, optional, help, error, disabled, className }, /* @__PURE__ */ React.createElement("div", { className: "tou-anchor", ref: wrap }, /* @__PURE__ */ React.createElement("div", { className: cx("tou-control", size === "sm" && "tou-control--sm", error && "is-invalid", disabled && "is-disabled", open && "is-open", controlClassName) }, /* @__PURE__ */ React.createElement("span", { className: "tou-control__icon" }, /* @__PURE__ */ React.createElement(Icon, { name: "clock" })), /* @__PURE__ */ React.createElement("input", { id, className: "tou-control__input", placeholder: "hh:mm", defaultValue: value || "", key: value || "", inputMode: "numeric", disabled, "aria-describedby": describedBy(id, props), "aria-invalid": error ? !0 : void 0, onFocus: () => setOpen(!0) })), open ? /* @__PURE__ */ React.createElement("div", { className: "tou-popover", role: "listbox", "aria-label": `Horários: ${label}`, style: { padding: 0, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { className: "tou-times" }, slots.map((s) => /* @__PURE__ */ React.createElement("button", { key: s, type: "button", role: "option", className: "tou-time", "aria-selected": s === value, disabled: unavailable.includes(s), "aria-label": unavailable.includes(s) ? `${s}, indisponível` : s, onClick: () => {
      onChange == null || onChange(s), setOpen(!1);
    } }, s)))) : null));
  }

  // src/overlays.tsx
  var FOCUSABLE = 'a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])';
  function useDialog(open, ref, onClose, active = !0) {
    React.useEffect(() => {
      if (!open || !active) return;
      let prev = document.activeElement, el = ref.current, first = (el == null ? void 0 : el.querySelector("[data-autofocus]")) || (el == null ? void 0 : el.querySelector(".tou-modal__body " + FOCUSABLE + ", .tou-drawer__body " + FOCUSABLE)) || el;
      setTimeout(() => first == null ? void 0 : first.focus(), 0);
      let onKey = (e) => {
        if (e.key === "Escape") {
          e.stopPropagation(), onClose == null || onClose();
          return;
        }
        if (e.key !== "Tab" || !el) return;
        let items = Array.from(el.querySelectorAll(FOCUSABLE)).filter((n) => n.offsetParent !== null);
        if (!items.length) return;
        let a = items[0], b = items[items.length - 1];
        e.shiftKey && document.activeElement === a ? (e.preventDefault(), b.focus()) : !e.shiftKey && document.activeElement === b && (e.preventDefault(), a.focus());
      };
      document.addEventListener("keydown", onKey);
      let overflow = document.body.style.overflow;
      return document.body.style.overflow = "hidden", () => {
        var _a;
        document.removeEventListener("keydown", onKey), document.body.style.overflow = overflow, (_a = prev == null ? void 0 : prev.focus) == null || _a.call(prev);
      };
    }, [open, active]);
  }
  function portal(node, inline) {
    return inline ? node : ReactDOM.createPortal(node, document.body);
  }
  function Modal({ open, onClose, title, subtitle, size = "md", children, footer, footerStart, closeOnOverlay = !0, inline, contained, fullScreen, className }) {
    let ref = React.useRef(null), id = useId("modal");
    return useDialog(open, ref, onClose, !inline), open ? portal(
      /* @__PURE__ */ React.createElement("div", { className: cx("tou-overlay", inline && "tou-overlay--inline", contained && "tou-overlay--contained"), onMouseDown: (e) => {
        closeOnOverlay && e.target === e.currentTarget && (onClose == null || onClose());
      }, style: fullScreen ? { padding: 0, alignItems: "stretch" } : void 0 }, /* @__PURE__ */ React.createElement("div", { ref, className: cx("tou-modal", size !== "md" && `tou-modal--${size}`, fullScreen && "tou-modal--full", className), role: "dialog", "aria-modal": "true", "aria-labelledby": `${id}-t`, "aria-describedby": subtitle ? `${id}-s` : void 0, tabIndex: -1 }, /* @__PURE__ */ React.createElement("div", { className: "tou-modal__head" }, /* @__PURE__ */ React.createElement("div", { className: "tou-modal__titles" }, /* @__PURE__ */ React.createElement("h2", { className: "tou-modal__title", id: `${id}-t` }, title), subtitle ? /* @__PURE__ */ React.createElement("p", { className: "tou-modal__subtitle", id: `${id}-s` }, subtitle) : null)), /* @__PURE__ */ React.createElement(IconButton, { className: "tou-modal__close", icon: "x", label: "Fechar", size: "sm", onClick: onClose }), /* @__PURE__ */ React.createElement("div", { className: "tou-modal__body" }, children), footer ? /* @__PURE__ */ React.createElement("div", { className: "tou-modal__foot" }, footerStart ? /* @__PURE__ */ React.createElement("span", { className: "tou-modal__foot-start" }, footerStart) : null, footer) : null)),
      inline || contained
    ) : null;
  }
  function ConfirmDialog({ open, onClose, onConfirm, title, description, confirmLabel, cancelLabel = "Cancelar", tone = "danger", loading, inline, contained }) {
    let ref = React.useRef(null), id = useId("confirm");
    if (useDialog(open, ref, onClose, !inline), !open) return null;
    let icon = tone === "primary" ? "info" : "triangle-alert";
    return portal(
      /* @__PURE__ */ React.createElement("div", { className: cx("tou-overlay", inline && "tou-overlay--inline", contained && "tou-overlay--contained") }, /* @__PURE__ */ React.createElement("div", { ref, className: "tou-modal tou-modal--sm tou-modal--confirm", role: "alertdialog", "aria-modal": "true", "aria-labelledby": `${id}-t`, "aria-describedby": description ? `${id}-d` : void 0, tabIndex: -1 }, /* @__PURE__ */ React.createElement("div", { className: "tou-modal__head" }, /* @__PURE__ */ React.createElement("span", { className: cx("tou-modal__icon", tone !== "danger" && `tou-modal__icon--${tone}`), "aria-hidden": "true" }, /* @__PURE__ */ React.createElement(Icon, { name: icon, size: 20 })), /* @__PURE__ */ React.createElement("div", { className: "tou-modal__titles", style: { paddingTop: 6 } }, /* @__PURE__ */ React.createElement("h2", { className: "tou-modal__title", id: `${id}-t` }, title))), /* @__PURE__ */ React.createElement(IconButton, { className: "tou-modal__close", icon: "x", label: "Fechar", size: "sm", onClick: onClose }), description ? /* @__PURE__ */ React.createElement("div", { className: "tou-modal__body", id: `${id}-d` }, description) : null, /* @__PURE__ */ React.createElement("div", { className: "tou-modal__foot" }, /* @__PURE__ */ React.createElement(Button, { variant: "secondary", onClick: onClose, "data-autofocus": "" }, cancelLabel), /* @__PURE__ */ React.createElement(Button, { variant: tone === "danger" ? "danger" : "primary", loading, onClick: onConfirm }, confirmLabel)))),
      inline || contained
    );
  }
  function Drawer({ open, onClose, title, subtitle, size = "md", side = "right", children, footer, inline, contained, bare }) {
    let ref = React.useRef(null), id = useId("drawer");
    return useDialog(open, ref, onClose, !inline), open ? portal(
      /* @__PURE__ */ React.createElement("div", { className: cx("tou-overlay tou-overlay--drawer", inline && "tou-overlay--inline", contained && "tou-overlay--contained"), style: side === "left" ? { justifyContent: "flex-start" } : void 0, onMouseDown: (e) => {
        e.target === e.currentTarget && (onClose == null || onClose());
      } }, /* @__PURE__ */ React.createElement("aside", { ref, className: cx("tou-drawer", size === "lg" && "tou-drawer--lg", side === "left" && "tou-drawer--left", bare && "tou-drawer--bare"), role: "dialog", "aria-modal": "true", "aria-labelledby": bare ? void 0 : `${id}-t`, "aria-label": bare ? String(title) : void 0, tabIndex: -1 }, bare ? null : /* @__PURE__ */ React.createElement("div", { className: "tou-drawer__head" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", { className: "tou-drawer__title", id: `${id}-t` }, title), subtitle ? /* @__PURE__ */ React.createElement("p", { className: "tou-drawer__subtitle" }, subtitle) : null)), bare ? null : /* @__PURE__ */ React.createElement(IconButton, { className: "tou-drawer__close", icon: "x", label: "Fechar", size: "sm", onClick: onClose }), /* @__PURE__ */ React.createElement("div", { className: "tou-drawer__body" }, children), footer ? /* @__PURE__ */ React.createElement("div", { className: "tou-drawer__foot" }, footer) : null)),
      inline || contained
    ) : null;
  }
  function Tooltip({ content, placement = "top", open: openProp, children }) {
    let id = useId("tip"), [open, setOpen] = React.useState(!1), timer = React.useRef(), show = () => {
      clearTimeout(timer.current), timer.current = setTimeout(() => setOpen(!0), 300);
    }, hide = () => {
      clearTimeout(timer.current), setOpen(!1);
    };
    React.useEffect(() => {
      if (!open) return;
      let onKey = (e) => {
        e.key === "Escape" && setOpen(!1);
      };
      return document.addEventListener("keydown", onKey), () => document.removeEventListener("keydown", onKey);
    }, [open]);
    let visible = openProp != null ? openProp : open, child = React.cloneElement(children, { "aria-describedby": id, onMouseEnter: show, onMouseLeave: hide, onFocus: () => setOpen(!0), onBlur: hide });
    return /* @__PURE__ */ React.createElement("span", { className: "tou-tip-anchor" }, child, /* @__PURE__ */ React.createElement("span", { role: "tooltip", id, className: cx("tou-tooltip", placement !== "top" && `tou-tooltip--${placement}`), hidden: !visible }, content));
  }
  function InfoTip({ about, content, placement, open, stateClassName }) {
    return /* @__PURE__ */ React.createElement(Tooltip, { content, placement, open }, /* @__PURE__ */ React.createElement("button", { type: "button", className: cx("tou-infotip", stateClassName), "aria-label": `Mais informações sobre ${about}` }, /* @__PURE__ */ React.createElement(Icon, { name: "info", size: 16 })));
  }
  var STATE_ICON = { info: "info", success: "circle-check", warning: "triangle-alert", danger: "circle-alert" };
  function Alert({ tone = "info", solid, banner, title, children, actions, onClose, className }) {
    let live = tone === "danger" || tone === "warning" ? "alert" : "status";
    return /* @__PURE__ */ React.createElement("div", { className: cx("tou-alert", `tou-alert--${tone}`, solid && "tou-alert--solid", banner && "tou-alert--banner", className), role: live }, /* @__PURE__ */ React.createElement("span", { className: "tou-alert__icon" }, /* @__PURE__ */ React.createElement(Icon, { name: STATE_ICON[tone], size: 16, label: { info: "Informação", success: "Sucesso", warning: "Atenção", danger: "Erro" }[tone] })), /* @__PURE__ */ React.createElement("div", { className: "tou-alert__body" }, title ? /* @__PURE__ */ React.createElement("span", { className: "tou-alert__title" }, title) : null, children ? /* @__PURE__ */ React.createElement("span", { className: "tou-alert__desc" }, children) : null, actions ? /* @__PURE__ */ React.createElement("div", { className: "tou-alert__actions" }, actions) : null), onClose ? /* @__PURE__ */ React.createElement(IconButton, { className: "tou-alert__close", icon: "x", label: "Fechar aviso", size: "sm", onClick: onClose }) : null);
  }
  function Toast({ tone = "success", solid, title, description, action, onClose, duration = 5e3, className }) {
    let timer = React.useRef(), start = () => {
      duration && onClose && (timer.current = setTimeout(onClose, duration));
    }, stop = () => clearTimeout(timer.current);
    return React.useEffect(() => (start(), stop), []), /* @__PURE__ */ React.createElement("div", { className: cx("tou-toast", `tou-toast--${tone}`, solid && "tou-toast--solid", className), role: tone === "danger" ? "alert" : "status", onMouseEnter: stop, onMouseLeave: start, onFocus: stop, onBlur: start }, /* @__PURE__ */ React.createElement("span", { className: "tou-alert__icon" }, /* @__PURE__ */ React.createElement(Icon, { name: STATE_ICON[tone], size: 16 })), /* @__PURE__ */ React.createElement("div", { className: "tou-alert__body" }, /* @__PURE__ */ React.createElement("span", { className: "tou-alert__title" }, title), description ? /* @__PURE__ */ React.createElement("span", { className: "tou-alert__desc" }, description) : null, action ? /* @__PURE__ */ React.createElement("div", { className: "tou-alert__actions" }, /* @__PURE__ */ React.createElement(Button, { variant: "tertiary", size: "sm", onClick: action.onClick, style: { marginLeft: -12 } }, action.label)) : null), onClose ? /* @__PURE__ */ React.createElement(IconButton, { icon: "x", label: "Fechar notificação", size: "sm", onClick: onClose }) : null);
  }
  var ToastCtx = React.createContext(() => {
  });
  function ToastProvider({ children }) {
    let [items, setItems] = React.useState([]), push = React.useCallback((t) => setItems((s) => [...s.slice(-2), { ...t, id: Date.now() + Math.random() }]), []);
    return /* @__PURE__ */ React.createElement(ToastCtx.Provider, { value: push }, children, ReactDOM.createPortal(
      /* @__PURE__ */ React.createElement("div", { className: "tou-toaster", "aria-live": "polite" }, items.map((t) => /* @__PURE__ */ React.createElement(Toast, { key: t.id, ...t, onClose: () => setItems((s) => s.filter((x) => x.id !== t.id)) }))),
      document.body
    ));
  }
  function useToast() {
    return React.useContext(ToastCtx);
  }

  // src/data.tsx
  function Pagination({ page, pageSize, total, onPageChange, compact, itemLabel = "itens", standalone, className }) {
    let pages = Math.max(1, Math.ceil(total / pageSize)), from = total ? (page - 1) * pageSize + 1 : 0, to = Math.min(total, page * pageSize), f = (n) => n.toLocaleString("pt-BR"), go = (n) => onPageChange == null ? void 0 : onPageChange(Math.min(pages, Math.max(1, n)));
    return /* @__PURE__ */ React.createElement("nav", { className: cx("tou-table-foot", standalone && "tou-table-foot--standalone", compact && "tou-table-foot--compact", className), "aria-label": `Paginação de ${itemLabel}` }, /* @__PURE__ */ React.createElement("span", { className: "tou-table-foot__range", "aria-live": "polite" }, compact ? null : "Mostrando ", f(from), "–", f(to), " de ", f(total), " ", itemLabel), /* @__PURE__ */ React.createElement("span", { className: "tou-pager" }, /* @__PURE__ */ React.createElement("span", { className: "tou-pager__label" }, compact ? `${f(page)} de ${f(pages)}` : `Página ${f(page)} de ${f(pages)}`), /* @__PURE__ */ React.createElement(IconButton, { icon: "chevron-first", label: "Primeira página", size: "sm", disabled: page <= 1, onClick: () => go(1) }), /* @__PURE__ */ React.createElement(IconButton, { icon: "chevron-left", label: "Página anterior", size: "sm", disabled: page <= 1, onClick: () => go(page - 1) }), /* @__PURE__ */ React.createElement(IconButton, { icon: "chevron-right", label: "Próxima página", size: "sm", disabled: page >= pages, onClick: () => go(page + 1) }), /* @__PURE__ */ React.createElement(IconButton, { icon: "chevron-last", label: "Última página", size: "sm", disabled: page >= pages, onClick: () => go(pages) })));
  }
  function TablePagination(p) {
    return /* @__PURE__ */ React.createElement(Pagination, { ...p });
  }
  function DataTable(props) {
    var _a;
    let { columns, rows, rowKey, caption, density = "comfortable", selectable, selected = [], onSelectionChange, bulkActions, sort, onSortChange, renderDetail, expanded = [], onExpandedChange, rowActions, loading, empty, pagination, layout = "auto", hoverRow, className } = props, wrap = React.useRef(null), [narrow, setNarrow] = React.useState(!1);
    React.useEffect(() => {
      if (layout !== "auto" || !wrap.current || typeof ResizeObserver == "undefined") return;
      let ro = new ResizeObserver(([e]) => setNarrow(e.contentRect.width < 768));
      return ro.observe(wrap.current), () => ro.disconnect();
    }, [layout]);
    let cards = layout === "cards" || layout === "auto" && narrow, keys = rows.map(rowKey), allSel = keys.length > 0 && keys.every((k) => selected.includes(k)), someSel = !allSel && keys.some((k) => selected.includes(k)), toggleAll = () => onSelectionChange == null ? void 0 : onSelectionChange(allSel ? selected.filter((k) => !keys.includes(k)) : Array.from(/* @__PURE__ */ new Set([...selected, ...keys]))), toggle = (k) => onSelectionChange == null ? void 0 : onSelectionChange(selected.includes(k) ? selected.filter((x) => x !== k) : [...selected, k]), colCount = columns.length + (selectable ? 1 : 0) + (renderDetail ? 1 : 0) + (rowActions ? 1 : 0), sortBy = (c) => {
      onSortChange && (!sort || sort.key !== c.key ? onSortChange({ key: c.key, dir: "asc" }) : sort.dir === "asc" ? onSortChange({ key: c.key, dir: "desc" }) : onSortChange(null));
    }, titleCol = columns.find((c) => c.mobile === "title") || columns[0], cell = (c, r) => c.render ? c.render(r) : r[c.key], bulk = selectable && selected.length > 0 ? /* @__PURE__ */ React.createElement("div", { className: "tou-table-bulk", role: "region", "aria-label": "Ações em massa" }, /* @__PURE__ */ React.createElement("span", { className: "tou-table-bulk__count", "aria-live": "polite" }, selected.length, " ", selected.length === 1 ? "selecionado" : "selecionados"), bulkActions, /* @__PURE__ */ React.createElement("span", { className: "tou-table-bulk__spacer" }), /* @__PURE__ */ React.createElement(Button, { variant: "tertiary", size: "sm", onClick: () => onSelectionChange == null ? void 0 : onSelectionChange([]) }, "Limpar seleção")) : null;
    return cards ? /* @__PURE__ */ React.createElement("div", { ref: wrap, className: cx("tou-table-wrap", className) }, bulk, loading ? /* @__PURE__ */ React.createElement("ul", { className: "tou-cardlist", "aria-busy": "true", "aria-label": caption }, [0, 1, 2].map((i) => /* @__PURE__ */ React.createElement("li", { key: i, className: "tou-cardlist__item" }, /* @__PURE__ */ React.createElement(Skeleton, { variant: "circle", width: 32 }), /* @__PURE__ */ React.createElement("div", { className: "tou-cardlist__main" }, /* @__PURE__ */ React.createElement(Skeleton, { variant: "text", width: "60%" }), /* @__PURE__ */ React.createElement(Skeleton, { variant: "text", width: "40%" }), /* @__PURE__ */ React.createElement(Skeleton, { variant: "text", width: "80%" })), /* @__PURE__ */ React.createElement("span", null)))) : rows.length ? /* @__PURE__ */ React.createElement("ul", { className: "tou-cardlist", "aria-label": caption }, rows.map((r) => {
      var _a2;
      let k = rowKey(r), isSel = selected.includes(k);
      return /* @__PURE__ */ React.createElement("li", { key: k, className: cx("tou-cardlist__item", isSel && "is-selected") }, /* @__PURE__ */ React.createElement("span", { className: "tou-cardlist__lead" }, selectable ? /* @__PURE__ */ React.createElement(Checkbox, { ariaLabel: `Selecionar ${String((_a2 = r.name) != null ? _a2 : k)}`, checked: isSel, onChange: () => toggle(k) }) : null), /* @__PURE__ */ React.createElement("div", { className: "tou-cardlist__main" }, /* @__PURE__ */ React.createElement("div", { className: "tou-cardlist__title" }, cell(titleCol, r)), /* @__PURE__ */ React.createElement("dl", { className: "tou-cardlist__rows" }, columns.filter((c) => c.mobile === "row").map((c) => /* @__PURE__ */ React.createElement(React.Fragment, { key: c.key }, /* @__PURE__ */ React.createElement("dt", null, c.header), /* @__PURE__ */ React.createElement("dd", null, cell(c, r))))), columns.filter((c) => c.mobile === "tags").map((c) => /* @__PURE__ */ React.createElement("div", { key: c.key, className: "tou-cardlist__tags" }, cell(c, r)))), /* @__PURE__ */ React.createElement("span", null, rowActions ? rowActions(r) : null));
    })) : empty, pagination ? /* @__PURE__ */ React.createElement(TablePagination, { ...pagination, compact: !0 }) : null) : /* @__PURE__ */ React.createElement("div", { ref: wrap, className: cx("tou-table-wrap", className) }, bulk, /* @__PURE__ */ React.createElement("div", { className: "tou-table-scroll" }, /* @__PURE__ */ React.createElement("table", { className: cx("tou-table", density === "dense" && "tou-table--dense"), "aria-busy": loading || void 0 }, /* @__PURE__ */ React.createElement("caption", { className: "tou-sr" }, caption), /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, renderDetail ? /* @__PURE__ */ React.createElement("th", { className: "tou-col-expand" }, /* @__PURE__ */ React.createElement("span", { className: "tou-sr" }, "Expandir")) : null, selectable ? /* @__PURE__ */ React.createElement("th", { className: "tou-col-check" }, /* @__PURE__ */ React.createElement(Checkbox, { ariaLabel: allSel ? "Desmarcar todos desta página" : "Selecionar todos desta página", checked: allSel, indeterminate: someSel, onChange: toggleAll, disabled: loading || !rows.length })) : null, columns.map((c) => {
      let active = (sort == null ? void 0 : sort.key) === c.key;
      return /* @__PURE__ */ React.createElement("th", { key: c.key, style: { width: c.width }, className: cx(c.numeric && "tou-col-num"), "aria-sort": c.sortable ? active ? sort.dir === "asc" ? "ascending" : "descending" : "none" : void 0 }, c.sortable ? /* @__PURE__ */ React.createElement("button", { type: "button", className: "tou-table__sort", onClick: () => sortBy(c) }, c.header, /* @__PURE__ */ React.createElement(Icon, { name: active ? sort.dir === "asc" ? "arrow-up" : "arrow-down" : "chevrons-up-down", size: 14 })) : c.header);
    }), rowActions ? /* @__PURE__ */ React.createElement("th", { className: "tou-col-actions" }, /* @__PURE__ */ React.createElement("span", { className: "tou-sr" }, "Ações")) : null)), /* @__PURE__ */ React.createElement("tbody", null, loading ? Array.from({ length: Math.min((_a = pagination == null ? void 0 : pagination.pageSize) != null ? _a : 5, 5) }).map((_, i) => /* @__PURE__ */ React.createElement("tr", { key: i }, renderDetail ? /* @__PURE__ */ React.createElement("td", { className: "tou-col-expand" }) : null, selectable ? /* @__PURE__ */ React.createElement("td", { className: "tou-col-check" }, /* @__PURE__ */ React.createElement(Skeleton, { variant: "block", width: 16, height: 16 })) : null, columns.map((c, j) => /* @__PURE__ */ React.createElement("td", { key: c.key }, j === 0 ? /* @__PURE__ */ React.createElement("span", { className: "tou-cell-person" }, /* @__PURE__ */ React.createElement(Skeleton, { variant: "circle", width: 32 }), /* @__PURE__ */ React.createElement("span", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement(Skeleton, { variant: "text", width: `${60 + i * 13 % 30}%` }))) : /* @__PURE__ */ React.createElement(Skeleton, { variant: "text", width: `${40 + (i * 7 + j * 11) % 45}%` }))), rowActions ? /* @__PURE__ */ React.createElement("td", null) : null)) : rows.length ? rows.map((r) => {
      var _a2;
      let k = rowKey(r), isSel = selected.includes(k), isOpen = expanded.includes(k);
      return /* @__PURE__ */ React.createElement(React.Fragment, { key: k }, /* @__PURE__ */ React.createElement("tr", { className: cx(isSel && "is-selected", hoverRow === k && "is-hover"), "aria-selected": selectable ? isSel : void 0 }, renderDetail ? /* @__PURE__ */ React.createElement("td", { className: "tou-col-expand" }, /* @__PURE__ */ React.createElement("button", { type: "button", className: "tou-table__expand", "aria-expanded": isOpen, "aria-controls": `det-${k}`, "aria-label": isOpen ? "Recolher detalhes" : "Ver detalhes", onClick: () => onExpandedChange == null ? void 0 : onExpandedChange(isOpen ? expanded.filter((x) => x !== k) : [...expanded, k]) }, /* @__PURE__ */ React.createElement(Icon, { name: "chevron-right", size: 16 }))) : null, selectable ? /* @__PURE__ */ React.createElement("td", { className: "tou-col-check" }, /* @__PURE__ */ React.createElement(Checkbox, { ariaLabel: `Selecionar ${String((_a2 = r.name) != null ? _a2 : k)}`, checked: isSel, onChange: () => toggle(k) })) : null, columns.map((c) => /* @__PURE__ */ React.createElement("td", { key: c.key, className: cx(c.numeric && "tou-col-num"), style: c.align === "right" ? { textAlign: "right" } : void 0 }, cell(c, r))), rowActions ? /* @__PURE__ */ React.createElement("td", { className: "tou-col-actions" }, rowActions(r)) : null), renderDetail && isOpen ? /* @__PURE__ */ React.createElement("tr", { className: "tou-table__detail", id: `det-${k}` }, /* @__PURE__ */ React.createElement("td", { colSpan: colCount }, renderDetail(r))) : null);
    }) : /* @__PURE__ */ React.createElement("tr", { className: "tou-table__empty" }, /* @__PURE__ */ React.createElement("td", { colSpan: colCount }, empty))))), pagination && (rows.length || loading) ? /* @__PURE__ */ React.createElement(TablePagination, { ...pagination }) : null);
  }
  function FilterBar({ query, onQueryChange, searchLabel = "Buscar", searchPlaceholder = "Buscar por nome, telefone ou e-mail", groups, value, onChange, quickFilters, quickValue = [], onQuickChange, end, open: openProp, openGroups, className }) {
    let id = useId("filtros"), [openState, setOpen] = React.useState(!1), open = openProp != null ? openProp : openState, [draft, setDraft] = React.useState(value), [expandedG, setExpandedG] = React.useState(openGroups != null ? openGroups : []), wrap = React.useRef(null), btn = React.useRef(null);
    useDismiss(open && openProp === void 0, () => setOpen(!1), [wrap]), React.useEffect(() => {
      open && setDraft(value);
    }, [open]);
    let total = Object.values(value).reduce((n, v) => n + v.length, 0) + quickValue.length, draftTotal = Object.values(draft).reduce((n, v) => n + v.length, 0), active = [];
    groups.forEach((g) => (value[g.id] || []).forEach((v) => {
      let o = g.options.find((x) => x.value === v);
      o && active.push({ g, o });
    }));
    let activeQuick = (quickFilters || []).filter((q) => quickValue.includes(q.id)), activeCount = active.length + activeQuick.length, toggleDraft = (g, v) => setDraft((d) => ({ ...d, [g]: (d[g] || []).includes(v) ? d[g].filter((x) => x !== v) : [...d[g] || [], v] })), toggleQuick = (q) => onQuickChange == null ? void 0 : onQuickChange(quickValue.includes(q) ? quickValue.filter((x) => x !== q) : [...quickValue, q]), close = () => {
      var _a;
      setOpen(!1), (_a = btn.current) == null || _a.focus();
    };
    return /* @__PURE__ */ React.createElement("div", { className: cx("tou-filterbar", className), role: "search", "aria-label": "Busca e filtros" }, /* @__PURE__ */ React.createElement("div", { className: "tou-filterbar__row" }, /* @__PURE__ */ React.createElement("div", { className: "tou-filterbar__search" }, /* @__PURE__ */ React.createElement(TextField, { label: searchLabel, className: "tou-sr-label", icon: "search", placeholder: searchPlaceholder, value: query, onChange: (e) => onQueryChange(e.target.value), onClear: () => onQueryChange("") })), /* @__PURE__ */ React.createElement("div", { className: "tou-anchor", ref: wrap }, /* @__PURE__ */ React.createElement(Button, { ref: btn, variant: "secondary", iconStart: "list-filter", "aria-haspopup": "dialog", "aria-expanded": open, "aria-controls": `${id}-pop`, onClick: () => setOpen(!open) }, "Filtros", total ? /* @__PURE__ */ React.createElement(Badge, { tone: "primary", solid: !0, count: !0, className: "tou-badge--ring" }, total) : null), open ? /* @__PURE__ */ React.createElement("div", { className: "tou-popover tou-filter-pop", id: `${id}-pop`, role: "dialog", "aria-label": "Filtros", style: { left: "auto", right: 0, maxHeight: "none" } }, /* @__PURE__ */ React.createElement("div", { className: "tou-filter-pop__head" }, /* @__PURE__ */ React.createElement("span", { className: "tou-filter-pop__title" }, "Filtros ", /* @__PURE__ */ React.createElement("span", { className: "tou-filter-pop__count" }, "(", groups.length, ")")), /* @__PURE__ */ React.createElement(Button, { variant: "tertiary", size: "sm", disabled: !draftTotal && !quickValue.length, onClick: () => {
      setDraft({}), quickValue.length && (onQuickChange == null || onQuickChange([]));
    } }, "Limpar tudo")), /* @__PURE__ */ React.createElement("div", { className: "tou-filter-pop__groups" }, groups.map((g) => {
      let isOpen = expandedG.includes(g.id), n = (draft[g.id] || []).length;
      return /* @__PURE__ */ React.createElement("div", { key: g.id, className: "tou-filter-pop__group" }, /* @__PURE__ */ React.createElement("button", { type: "button", className: "tou-filter-pop__toggle", "aria-expanded": isOpen, "aria-controls": `${id}-${g.id}`, onClick: () => setExpandedG(isOpen ? expandedG.filter((x) => x !== g.id) : [...expandedG, g.id]) }, /* @__PURE__ */ React.createElement("span", null, g.label), n ? /* @__PURE__ */ React.createElement(Badge, { tone: "primary", count: !0 }, n) : null, /* @__PURE__ */ React.createElement(Icon, { name: "chevron-down", size: 16 })), isOpen ? /* @__PURE__ */ React.createElement("div", { className: "tou-filter-pop__options", id: `${id}-${g.id}`, role: "group", "aria-label": g.label }, g.options.map((o) => /* @__PURE__ */ React.createElement(Checkbox, { key: o.value, label: o.label, description: o.meta, checked: (draft[g.id] || []).includes(o.value), disabled: o.disabled, onChange: () => toggleDraft(g.id, o.value) }))) : null);
    })), quickFilters != null && quickFilters.length ? /* @__PURE__ */ React.createElement("div", { className: "tou-filter-pop__quick", role: "group", "aria-labelledby": `${id}-quick`, "aria-describedby": `${id}-quick-hint` }, /* @__PURE__ */ React.createElement("span", { className: "tou-filter-pop__quick-head" }, /* @__PURE__ */ React.createElement("span", { className: "tou-filter-pop__quick-title", id: `${id}-quick` }, "Atalhos"), /* @__PURE__ */ React.createElement("span", { className: "tou-filter-pop__quick-hint", id: `${id}-quick-hint` }, "Aplicam ao clicar")), quickFilters.map((q) => {
      let on = quickValue.includes(q.id);
      return /* @__PURE__ */ React.createElement("button", { key: q.id, type: "button", className: "tou-filter-pop__shortcut", "aria-pressed": on, onClick: () => toggleQuick(q.id) }, /* @__PURE__ */ React.createElement("span", { className: "tou-filter-pop__shortcut-check", "aria-hidden": "true" }, on ? /* @__PURE__ */ React.createElement(Icon, { name: "check", size: 14 }) : null), /* @__PURE__ */ React.createElement("span", { className: "tou-filter-pop__shortcut-label" }, q.label), q.count !== void 0 ? /* @__PURE__ */ React.createElement("span", { className: "tou-filter-pop__shortcut-count" }, q.count.toLocaleString("pt-BR")) : null);
    })) : null, /* @__PURE__ */ React.createElement("div", { className: "tou-filter-pop__foot" }, /* @__PURE__ */ React.createElement(Button, { variant: "secondary", size: "sm", onClick: close }, "Cancelar"), /* @__PURE__ */ React.createElement(Button, { size: "sm", onClick: () => {
      onChange(draft), close();
    } }, "Aplicar filtros"))) : null), end), activeCount ? /* @__PURE__ */ React.createElement("div", { className: "tou-filterbar__active", "aria-live": "polite" }, /* @__PURE__ */ React.createElement("span", { className: "tou-filterbar__active-label" }, activeCount, " ", activeCount === 1 ? "filtro ativo" : "filtros ativos", ":"), activeQuick.map((q) => /* @__PURE__ */ React.createElement(FilterChip, { key: "q" + q.id, field: "Atalho", value: q.label, onRemove: () => onQuickChange == null ? void 0 : onQuickChange(quickValue.filter((x) => x !== q.id)) })), active.map(({ g, o }) => /* @__PURE__ */ React.createElement(FilterChip, { key: g.id + o.value, field: g.label, value: o.label, onRemove: () => onChange({ ...value, [g.id]: value[g.id].filter((x) => x !== o.value) }) })), /* @__PURE__ */ React.createElement(Button, { variant: "tertiary", size: "sm", iconStart: "funnel-x", onClick: () => {
      onChange({}), onQuickChange == null || onQuickChange([]);
    } }, "Limpar filtros")) : null);
  }

  // src/menu.tsx
  function Menu({ trigger, items, onSelect, align = "start", label, open: openProp, activeId, className }) {
    let id = useId("menu"), [openState, setOpen] = React.useState(!1), open = openProp != null ? openProp : openState, enabled = items.filter((i) => !i.disabled), [active, setActive] = React.useState(activeId != null ? activeId : null), wrap = React.useRef(null), trig = React.useRef(null), refs = React.useRef({}), close = (focus = !0) => {
      var _a;
      setOpen(!1), setActive(null), focus && ((_a = trig.current) == null || _a.focus());
    };
    useDismiss(open && openProp === void 0, () => close(!1), [wrap]), React.useEffect(() => {
      var _a;
      open && openProp === void 0 && active && ((_a = refs.current[active]) == null || _a.focus());
    }, [open, active]);
    let openWith = (which) => {
      var _a, _b;
      setOpen(!0), setActive((_b = (_a = which === "first" ? enabled[0] : enabled[enabled.length - 1]) == null ? void 0 : _a.id) != null ? _b : null);
    }, move = (d) => {
      let i = enabled.findIndex((x) => x.id === active);
      setActive(enabled[(i + d + enabled.length) % enabled.length].id);
    }, onKey = (e) => {
      if (e.key === "ArrowDown")
        e.preventDefault(), move(1);
      else if (e.key === "ArrowUp")
        e.preventDefault(), move(-1);
      else if (e.key === "Home")
        e.preventDefault(), setActive(enabled[0].id);
      else if (e.key === "End")
        e.preventDefault(), setActive(enabled[enabled.length - 1].id);
      else if (e.key === "Escape")
        e.preventDefault(), close();
      else if (e.key === "Tab")
        close(!1);
      else if (e.key.length === 1) {
        let k = e.key.toLowerCase(), i = enabled.findIndex((x) => x.id === active), next = [...enabled.slice(i + 1), ...enabled.slice(0, i + 1)].find((x) => x.label.toLowerCase().startsWith(k));
        next && setActive(next.id);
      }
    }, t = React.cloneElement(trigger, {
      ref: trig,
      "aria-haspopup": "menu",
      "aria-expanded": open,
      "aria-controls": open ? id : void 0,
      onClick: () => open ? close() : openWith("first"),
      onKeyDown: (e) => {
        e.key === "ArrowDown" && (e.preventDefault(), openWith("first")), e.key === "ArrowUp" && (e.preventDefault(), openWith("last"));
      }
    }), trigLabel = trigger.props.label || trigger.props["aria-label"] || (typeof trigger.props.children == "string" ? trigger.props.children : "Ações");
    return /* @__PURE__ */ React.createElement("span", { className: cx("tou-anchor tou-menu-anchor", className), ref: wrap }, t, open ? /* @__PURE__ */ React.createElement("div", { className: cx("tou-popover tou-menu", align === "end" && "tou-menu--end"), id, role: "menu", "aria-label": label || trigLabel, onKeyDown: onKey }, items.map((it) => /* @__PURE__ */ React.createElement(React.Fragment, { key: it.id }, it.separator ? /* @__PURE__ */ React.createElement("div", { className: "tou-listbox__sep", role: "separator" }) : null, it.group ? /* @__PURE__ */ React.createElement("div", { className: "tou-listbox__group", role: "presentation" }, it.group) : null, /* @__PURE__ */ React.createElement(
      "button",
      {
        ref: (el) => {
          refs.current[it.id] = el;
        },
        type: "button",
        role: "menuitem",
        className: cx("tou-menu__item", it.danger && "tou-menu__item--danger", active === it.id && "is-active"),
        tabIndex: active === it.id ? 0 : -1,
        disabled: it.disabled,
        "aria-disabled": it.disabled || void 0,
        onMouseEnter: () => !it.disabled && setActive(it.id),
        onClick: () => {
          onSelect(it.id), close();
        }
      },
      it.icon ? /* @__PURE__ */ React.createElement(Icon, { name: it.icon, size: 16 }) : /* @__PURE__ */ React.createElement("span", { style: { width: 16 }, "aria-hidden": "true" }),
      /* @__PURE__ */ React.createElement("span", { className: "tou-menu__label" }, it.label),
      it.hint ? /* @__PURE__ */ React.createElement("span", { className: "tou-menu__hint" }, it.hint) : null
    )))) : null);
  }

  // src/nav.tsx
  function Link({ external, standalone, disabled, className, children, href, ...rest }) {
    return /* @__PURE__ */ React.createElement(
      "a",
      {
        className: cx("tou-link", standalone && "tou-link--standalone", className),
        href: disabled ? void 0 : href,
        "aria-disabled": disabled || void 0,
        role: disabled ? "link" : void 0,
        target: external ? "_blank" : rest.target,
        rel: external ? "noopener noreferrer" : rest.rel,
        ...rest
      },
      children,
      external ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Icon, { name: "external-link", size: 14 }), /* @__PURE__ */ React.createElement("span", { className: "tou-sr" }, " (abre em nova aba)")) : null
    );
  }
  function Tabs({ items, value, onChange, label, children, stateClasses = {} }) {
    let id = useId("abas"), refs = React.useRef({}), enabled = items.filter((t) => !t.disabled);
    return /* @__PURE__ */ React.createElement("div", { className: "tou-tabs" }, /* @__PURE__ */ React.createElement("div", { className: "tou-tablist", role: "tablist", "aria-label": label, onKeyDown: (e) => {
      var _a;
      let i = enabled.findIndex((t) => t.id === value), n = -1;
      e.key === "ArrowRight" ? n = (i + 1) % enabled.length : e.key === "ArrowLeft" ? n = (i - 1 + enabled.length) % enabled.length : e.key === "Home" ? n = 0 : e.key === "End" && (n = enabled.length - 1), n >= 0 && (e.preventDefault(), onChange(enabled[n].id), (_a = refs.current[enabled[n].id]) == null || _a.focus());
    } }, items.map((t) => /* @__PURE__ */ React.createElement(
      "button",
      {
        key: t.id,
        ref: (el) => {
          refs.current[t.id] = el;
        },
        type: "button",
        role: "tab",
        id: `${id}-${t.id}`,
        className: cx("tou-tab", stateClasses[t.id]),
        "aria-selected": t.id === value,
        "aria-controls": t.id === value && children !== void 0 ? `${id}-${t.id}-p` : void 0,
        tabIndex: t.id === value ? 0 : -1,
        disabled: t.disabled,
        onClick: () => onChange(t.id)
      },
      t.icon ? /* @__PURE__ */ React.createElement(Icon, { name: t.icon, size: 16 }) : null,
      t.label,
      t.count != null ? /* @__PURE__ */ React.createElement(Badge, { tone: t.id === value ? "primary" : "neutral", count: !0 }, t.count) : null
    ))), children !== void 0 ? /* @__PURE__ */ React.createElement("div", { className: "tou-tabpanel", role: "tabpanel", id: `${id}-${value}-p`, "aria-labelledby": `${id}-${value}`, tabIndex: 0 }, children) : null);
  }
  function SegmentedControl({ options, value, onChange, label, size = "md", block, stateClasses = {} }) {
    let refs = React.useRef({}), enabled = options.filter((o) => !o.disabled), onKey = (e) => {
      var _a;
      let i = enabled.findIndex((o) => o.value === value), n = -1;
      e.key === "ArrowRight" || e.key === "ArrowDown" ? n = (i + 1) % enabled.length : (e.key === "ArrowLeft" || e.key === "ArrowUp") && (n = (i - 1 + enabled.length) % enabled.length), n >= 0 && (e.preventDefault(), onChange(enabled[n].value), (_a = refs.current[enabled[n].value]) == null || _a.focus());
    };
    return /* @__PURE__ */ React.createElement("div", { className: cx("tou-seg", size === "sm" && "tou-seg--sm", block && "tou-seg--block"), role: "radiogroup", "aria-label": label, onKeyDown: onKey }, options.map((o) => /* @__PURE__ */ React.createElement("button", { key: o.value, ref: (el) => {
      refs.current[o.value] = el;
    }, type: "button", role: "radio", "aria-checked": o.value === value, tabIndex: o.value === value ? 0 : -1, disabled: o.disabled, className: cx("tou-seg__btn", stateClasses[o.value]), "aria-label": o.hideLabel ? o.label : void 0, onClick: () => onChange(o.value) }, o.icon ? /* @__PURE__ */ React.createElement(Icon, { name: o.icon, size: 16 }) : null, o.hideLabel ? null : o.label)));
  }
  function Accordion({ items, value, onChange, single, headingLevel = 3, stateClasses = {} }) {
    let id = useId("acc"), H = `h${headingLevel}`;
    return /* @__PURE__ */ React.createElement("div", { className: "tou-acc" }, items.map((it) => {
      let open = value.includes(it.id);
      return /* @__PURE__ */ React.createElement("div", { key: it.id, className: "tou-acc__item" }, /* @__PURE__ */ React.createElement(H, { className: "tou-acc__head" }, /* @__PURE__ */ React.createElement(
        "button",
        {
          type: "button",
          className: cx("tou-acc__btn", stateClasses[it.id]),
          "aria-expanded": open,
          "aria-controls": `${id}-${it.id}`,
          id: `${id}-${it.id}-b`,
          disabled: it.disabled,
          onClick: () => onChange(open ? value.filter((x) => x !== it.id) : single ? [it.id] : [...value, it.id])
        },
        /* @__PURE__ */ React.createElement("span", { className: "tou-acc__title" }, it.title),
        it.meta ? /* @__PURE__ */ React.createElement("span", { className: "tou-acc__meta" }, it.meta) : null,
        /* @__PURE__ */ React.createElement("span", { className: "tou-acc__chev" }, /* @__PURE__ */ React.createElement(Icon, { name: "chevron-down", size: 16 }))
      )), /* @__PURE__ */ React.createElement("div", { className: "tou-acc__panel", id: `${id}-${it.id}`, role: "region", "aria-labelledby": `${id}-${it.id}-b`, hidden: !open }, it.content));
    }));
  }
  function ProgressBar({ label, value, tone = "primary", help, size = "md", showValue = !0 }) {
    let id = useId("prog"), indet = value == null;
    return /* @__PURE__ */ React.createElement("div", { className: cx("tou-progress", `tou-progress--${tone}`, size === "sm" && "tou-progress--sm", indet && "tou-progress--indeterminate") }, /* @__PURE__ */ React.createElement("div", { className: "tou-progress__row" }, /* @__PURE__ */ React.createElement("span", { className: "tou-progress__label", id: `${id}-l` }, label), !indet && showValue ? /* @__PURE__ */ React.createElement("span", { className: "tou-progress__value" }, Math.round(value), "%") : null), /* @__PURE__ */ React.createElement("div", { className: "tou-progress__track", role: "progressbar", "aria-labelledby": `${id}-l`, "aria-valuemin": indet ? void 0 : 0, "aria-valuemax": indet ? void 0 : 100, "aria-valuenow": indet ? void 0 : Math.round(value), "aria-describedby": help ? `${id}-h` : void 0 }, /* @__PURE__ */ React.createElement("div", { className: "tou-progress__bar", style: indet ? void 0 : { width: `${Math.max(0, Math.min(100, value))}%` } })), help ? /* @__PURE__ */ React.createElement("span", { className: "tou-progress__help", id: `${id}-h` }, tone === "success" ? /* @__PURE__ */ React.createElement(Icon, { name: "circle-check", size: 14 }) : tone === "danger" ? /* @__PURE__ */ React.createElement(Icon, { name: "circle-alert", size: 14 }) : null, help) : null);
  }
  function Card({ variant = "plain", title, subtitle, action, footer, href, onClick, selected, highlighted, disabled, children, className, stateClassName, headingLevel = 3 }) {
    let H = `h${headingLevel}`, interactive = variant === "interactive", titleNode = interactive && !disabled ? href ? /* @__PURE__ */ React.createElement("a", { className: "tou-card__link", href }, title) : /* @__PURE__ */ React.createElement("button", { type: "button", className: "tou-card__link", onClick, "aria-pressed": selected != null ? selected : void 0, style: { all: "unset" } }, title) : title;
    return /* @__PURE__ */ React.createElement("div", { className: cx("tou-card", `tou-card--${variant}`, selected && "is-selected", highlighted && "is-highlighted", disabled && "is-disabled", stateClassName, className), "aria-disabled": disabled || void 0 }, title || action ? /* @__PURE__ */ React.createElement("div", { className: "tou-card__head" }, /* @__PURE__ */ React.createElement("div", { className: "tou-card__titles" }, title ? /* @__PURE__ */ React.createElement(H, { className: "tou-card__title" }, titleNode) : null, subtitle ? /* @__PURE__ */ React.createElement("p", { className: "tou-card__subtitle" }, subtitle) : null), action && !interactive ? action : null) : null, children ? /* @__PURE__ */ React.createElement("div", { className: "tou-card__body" }, children) : null, footer ? /* @__PURE__ */ React.createElement("div", { className: "tou-card__foot" }, footer) : null);
  }
  function Sparkline({ data, label, labels }) {
    let min = Math.min(...data), max = Math.max(...data), x = (i) => 4 + i * 112 / (data.length - 1), y = (v) => 36 - (v - min) / (max - min || 1) * 32, line = data.map((v, i) => `${i ? "L" : "M"}${x(i).toFixed(1)} ${y(v).toFixed(1)}`).join(" "), area = `${line} L${x(data.length - 1)} 40 L${x(0)} 40 Z`;
    return /* @__PURE__ */ React.createElement("svg", { className: "tou-kpi__spark", viewBox: "0 0 120 40", role: "img", "aria-label": label }, /* @__PURE__ */ React.createElement("path", { className: "area", d: area }), /* @__PURE__ */ React.createElement("path", { className: "line", d: line }), /* @__PURE__ */ React.createElement("circle", { className: "end", cx: x(data.length - 1), cy: y(data[data.length - 1]), r: "4" }), data.map((v, i) => {
      var _a;
      return /* @__PURE__ */ React.createElement("g", { key: i, className: "hit" }, /* @__PURE__ */ React.createElement("rect", { x: x(i) - 112 / (data.length - 1) / 2, y: 0, width: 112 / (data.length - 1), height: 40, fill: "transparent" }), /* @__PURE__ */ React.createElement("circle", { className: "dot", cx: x(i), cy: y(v), r: "4" }), /* @__PURE__ */ React.createElement("title", null, `${(_a = labels == null ? void 0 : labels[i]) != null ? _a : `Ponto ${i + 1}`}: ${v.toLocaleString("pt-BR")}`));
    }));
  }
  function KpiCard({ label, value, delta, invert, comparison, trend, trendLabels, info, loading, large }) {
    let up = (delta != null ? delta : 0) >= 0, good = invert ? !up : up, pct = delta != null ? `${up ? "+" : "−"}${Math.abs(delta).toLocaleString("pt-BR", { maximumFractionDigits: 1 })}%` : "";
    return /* @__PURE__ */ React.createElement("div", { className: cx("tou-card tou-card--plain tou-kpi", loading && "tou-kpi--loading"), "aria-busy": loading || void 0 }, /* @__PURE__ */ React.createElement("span", { className: "tou-kpi__label" }, label, info ? /* @__PURE__ */ React.createElement(InfoTip, { about: label, content: info }) : null), /* @__PURE__ */ React.createElement("div", { className: "tou-kpi__row" }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 8, minWidth: 0 } }, loading ? /* @__PURE__ */ React.createElement(Skeleton, { variant: "block", className: "tou-kpi__value" }) : /* @__PURE__ */ React.createElement("span", { className: cx("tou-kpi__value", large && "tou-kpi__value--lg") }, value), loading ? /* @__PURE__ */ React.createElement(Skeleton, { variant: "text", width: 140 }) : delta != null ? /* @__PURE__ */ React.createElement("span", { className: "tou-kpi__delta" }, /* @__PURE__ */ React.createElement(Badge, { tone: good ? "success" : "danger", icon: up ? "trending-up" : "trending-down" }, /* @__PURE__ */ React.createElement("span", { className: "tou-sr" }, up ? "Subiu" : "Caiu", " "), pct), comparison ? /* @__PURE__ */ React.createElement("span", null, comparison) : null) : null), trend && !loading ? /* @__PURE__ */ React.createElement(Sparkline, { data: trend, labels: trendLabels, label: `Tendência de ${label}: de ${trend[0]} para ${trend[trend.length - 1]}` }) : null));
  }
  var navNorm = (s) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase(), navHas = (text, q) => navNorm(text).includes(q);
  function NavMark({ text, q }) {
    if (!q) return /* @__PURE__ */ React.createElement(React.Fragment, null, text);
    let i = navNorm(text).indexOf(q);
    return i < 0 ? /* @__PURE__ */ React.createElement(React.Fragment, null, text) : /* @__PURE__ */ React.createElement(React.Fragment, null, text.slice(0, i), /* @__PURE__ */ React.createElement("mark", { className: "tou-nav__mark" }, text.slice(i, i + q.length)), text.slice(i + q.length));
  }
  function Sidebar({ groups, current, collapsed, onCollapsedChange, expanded = [], onExpandedChange, logoSrc, user, footerActions, onNavigate, onClose, searchable = !0, initialSearch, stateClasses = {} }) {
    let nid = useId("nav"), [searchOpen, setSearchOpen] = React.useState(initialSearch !== void 0), [query, setQuery] = React.useState(initialSearch || ""), lupa = React.useRef(null), field = React.useRef(null), q = searchOpen && !collapsed ? navNorm(query.trim()) : "", focusField = () => setTimeout(() => {
      var _a, _b;
      return (_b = (_a = field.current) == null ? void 0 : _a.querySelector("input")) == null ? void 0 : _b.focus();
    }, 0), toggleSearch = () => {
      if (collapsed) {
        onCollapsedChange == null || onCollapsedChange(!1), setSearchOpen(!0), focusField();
        return;
      }
      searchOpen ? (setSearchOpen(!1), setQuery("")) : (setSearchOpen(!0), focusField());
    }, filtered = q ? groups.map((g) => ({
      ...g,
      items: g.items.map((it) => {
        var _a;
        let self = navHas(`${it.label} ${it.keywords || ""}`, q), kids = (_a = it.children) == null ? void 0 : _a.filter((c) => navHas(`${c.label} ${c.keywords || ""}`, q));
        return self ? it : kids && kids.length ? { ...it, children: kids } : null;
      }).filter(Boolean)
    })).filter((g) => g.items.length) : groups, flat = [];
    filtered.forEach((g) => g.items.forEach((it) => {
      var _a;
      (_a = it.children) != null && _a.length ? it.children.forEach((c) => flat.push(c.id)) : flat.push(it.id);
    }));
    let onKey = (e) => {
      var _a;
      e.key === "Escape" ? (e.preventDefault(), e.stopPropagation(), query ? setQuery("") : (setSearchOpen(!1), (_a = lupa.current) == null || _a.focus())) : e.key === "Enter" && q && flat[0] && (e.preventDefault(), onNavigate == null || onNavigate(flat[0]));
    }, item = (it) => {
      var _a, _b;
      let isCurrent = it.id === current, hasKids = !!((_a = it.children) != null && _a.length), kidCurrent = (_b = it.children) == null ? void 0 : _b.some((c) => c.id === current), open = q ? hasKids : expanded.includes(it.id) || !!kidCurrent && !collapsed, content = /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Icon, { name: it.icon, size: 20 }), /* @__PURE__ */ React.createElement("span", { className: "tou-nav__label" }, /* @__PURE__ */ React.createElement(NavMark, { text: it.label, q })), /* @__PURE__ */ React.createElement("span", { className: "tou-nav__trail" }, it.badge ? /* @__PURE__ */ React.createElement(Badge, { tone: "primary", solid: !0, count: !0 }, it.badge) : null, it.locked ? /* @__PURE__ */ React.createElement(Icon, { name: "lock", size: 16, label: "Bloqueado" }) : null, hasKids ? /* @__PURE__ */ React.createElement("span", { className: "tou-nav__chev", style: { display: "inline-flex" } }, /* @__PURE__ */ React.createElement(Icon, { name: "chevron-down", size: 16 })) : null), it.locked ? /* @__PURE__ */ React.createElement("span", { className: "tou-nav__locked-dot", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement(Icon, { name: "lock", size: 10 })) : null), common = {
        className: cx("tou-nav__item", it.locked && "is-locked", q && hasKids && "is-match-parent", stateClasses[it.id]),
        "aria-current": isCurrent || collapsed && kidCurrent ? "page" : void 0,
        "aria-label": collapsed ? `${it.label}${it.locked ? " (bloqueado)" : ""}` : void 0
      }, el = hasKids && !collapsed ? /* @__PURE__ */ React.createElement("button", { type: "button", ...common, "aria-expanded": open, onClick: () => {
        q || onExpandedChange == null || onExpandedChange(open ? expanded.filter((x) => x !== it.id) : [...expanded, it.id]);
      } }, content) : /* @__PURE__ */ React.createElement("a", { href: it.href || "#", ...common, onClick: (e) => {
        onNavigate && (e.preventDefault(), onNavigate(it.id));
      } }, content), hint = it.locked ? it.lockedHint || "Disponível no plano Pro" : collapsed ? it.label : null;
      return /* @__PURE__ */ React.createElement("li", { key: it.id }, hint ? /* @__PURE__ */ React.createElement(Tooltip, { content: hint, placement: "right" }, el) : el, hasKids && open && !collapsed ? /* @__PURE__ */ React.createElement("ul", { className: "tou-nav__sub" }, it.children.map((c) => /* @__PURE__ */ React.createElement("li", { key: c.id }, /* @__PURE__ */ React.createElement("a", { href: c.href || "#", className: cx("tou-nav__item", stateClasses[c.id]), "aria-current": c.id === current ? "page" : void 0, onClick: (e) => {
        onNavigate && (e.preventDefault(), onNavigate(c.id));
      } }, /* @__PURE__ */ React.createElement("span", { className: "tou-nav__label" }, /* @__PURE__ */ React.createElement(NavMark, { text: c.label, q })))))) : null);
    }, showSearch = searchable && searchOpen && !collapsed;
    return /* @__PURE__ */ React.createElement("nav", { className: cx("tou-nav", collapsed && "tou-nav--collapsed", q && "is-filtering"), "aria-label": "Menu principal" }, /* @__PURE__ */ React.createElement("div", { className: "tou-nav__top" }, collapsed ? /* @__PURE__ */ React.createElement("img", { className: "tou-nav__logo-mark", src: logoSrc, alt: "TOU" }) : /* @__PURE__ */ React.createElement("img", { className: "tou-nav__logo", src: logoSrc, alt: "TOU" }), /* @__PURE__ */ React.createElement("span", { className: "tou-nav__top-actions" }, searchable ? (() => {
      let b = /* @__PURE__ */ React.createElement(IconButton, { ref: lupa, className: stateClasses.search, icon: "search", label: "Buscar no menu", pressed: showSearch, "aria-controls": showSearch ? `${nid}-search` : void 0, onClick: toggleSearch });
      return onClose ? b : /* @__PURE__ */ React.createElement(Tooltip, { content: "Buscar no menu", placement: collapsed ? "right" : "bottom" }, b);
    })() : null, onClose ? /* @__PURE__ */ React.createElement(IconButton, { icon: "x", label: "Fechar menu", onClick: onClose }) : null)), !onClose && onCollapsedChange ? /* @__PURE__ */ React.createElement("span", { className: "tou-nav__edge" }, /* @__PURE__ */ React.createElement(Tooltip, { content: collapsed ? "Expandir menu" : "Recolher menu", placement: "right" }, /* @__PURE__ */ React.createElement("button", { type: "button", className: cx("tou-nav__edge-btn", stateClasses.toggle), "aria-label": collapsed ? "Expandir menu" : "Recolher menu", "aria-expanded": !collapsed, onClick: () => onCollapsedChange(!collapsed) }, /* @__PURE__ */ React.createElement(Icon, { name: collapsed ? "chevron-right" : "chevron-left", size: 14 })))) : null, showSearch ? /* @__PURE__ */ React.createElement("div", { className: "tou-nav__search", id: `${nid}-search`, ref: field, role: "search", "aria-label": "Buscar no menu" }, /* @__PURE__ */ React.createElement(
      TextField,
      {
        label: "Buscar no menu",
        className: "tou-sr-label",
        icon: "search",
        placeholder: "Buscar tela",
        value: query,
        autoComplete: "off",
        "aria-describedby": `${nid}-search-hint`,
        onChange: (e) => setQuery(e.target.value),
        onClear: () => {
          setQuery(""), focusField();
        },
        onKeyDown: onKey
      }
    ), /* @__PURE__ */ React.createElement("p", { className: "tou-nav__search-hint", id: `${nid}-search-hint`, "aria-live": "polite" }, q ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", { className: "tou-nav__search-on" }, flat.length ? `Filtro ativo · ${flat.length} ${flat.length === 1 ? "tela" : "telas"}` : "Filtro ativo"), /* @__PURE__ */ React.createElement("span", { "aria-hidden": "true" }, " · "), "Esc para limpar") : "Digite o nome de uma tela")) : null, /* @__PURE__ */ React.createElement("div", { className: "tou-nav__scroll" }, q && !filtered.length ? /* @__PURE__ */ React.createElement("div", { className: "tou-nav__empty" }, /* @__PURE__ */ React.createElement(Icon, { name: "search-x", size: 20 }), /* @__PURE__ */ React.createElement("p", null, "Nenhuma tela com “", query.trim(), "”."), /* @__PURE__ */ React.createElement("button", { type: "button", className: "tou-nav__empty-btn", onClick: () => {
      setQuery(""), focusField();
    } }, "Limpar busca")) : null, filtered.map((g, gi) => /* @__PURE__ */ React.createElement("div", { key: gi, style: { width: "100%" } }, g.label && !q ? /* @__PURE__ */ React.createElement("div", { className: "tou-nav__group-label", id: `${nid}-g${gi}` }, g.label) : null, /* @__PURE__ */ React.createElement("ul", { className: "tou-nav__group", "aria-labelledby": g.label && !q ? `${nid}-g${gi}` : void 0 }, g.items.map(item))))), /* @__PURE__ */ React.createElement("div", { className: "tou-nav__foot" }, footerActions ? /* @__PURE__ */ React.createElement("div", { className: "tou-nav__actions" }, footerActions) : null, /* @__PURE__ */ React.createElement("button", { type: "button", className: "tou-nav__user", "aria-label": collapsed ? `${user.name}, ${user.org}` : void 0 }, /* @__PURE__ */ React.createElement(Avatar, { name: user.name, src: user.avatar, size: "sm", status: user.status }), /* @__PURE__ */ React.createElement("span", { className: "tou-nav__user-text" }, /* @__PURE__ */ React.createElement("span", { className: "tou-nav__user-name" }, user.name), /* @__PURE__ */ React.createElement("span", { className: "tou-nav__user-org" }, user.org)), /* @__PURE__ */ React.createElement(Icon, { name: "chevron-right", size: 16 }))));
  }
  function PageHeader({ title, count, subtitle, actions, back, children }) {
    return /* @__PURE__ */ React.createElement("header", { className: "tou-pagehead" }, /* @__PURE__ */ React.createElement("div", { className: "tou-pagehead__row" }, /* @__PURE__ */ React.createElement("div", { className: "tou-pagehead__titles" }, back ? /* @__PURE__ */ React.createElement("a", { className: "tou-link tou-link--standalone tou-pagehead__back", href: back.href }, /* @__PURE__ */ React.createElement(Icon, { name: "arrow-left", size: 16 }), back.label) : null, /* @__PURE__ */ React.createElement("h1", { className: "tou-pagehead__title" }, title, count != null ? /* @__PURE__ */ React.createElement(Badge, { tone: "neutral", count: !0 }, count.toLocaleString("pt-BR")) : null), subtitle ? /* @__PURE__ */ React.createElement("p", { className: "tou-pagehead__subtitle" }, subtitle) : null), actions ? /* @__PURE__ */ React.createElement("div", { className: "tou-pagehead__actions" }, actions) : null), children);
  }

  // src/marketing.tsx
  function useReducedMotion() {
    let [r, setR] = React.useState(() => typeof window != "undefined" && !!window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    return React.useEffect(() => {
      var _a;
      if (!window.matchMedia) return;
      let m = window.matchMedia("(prefers-reduced-motion: reduce)"), on = () => setR(m.matches);
      return (_a = m.addEventListener) == null || _a.call(m, "change", on), () => {
        var _a2;
        return (_a2 = m.removeEventListener) == null ? void 0 : _a2.call(m, "change", on);
      };
    }, []), r;
  }
  function Accent({ children }) {
    return /* @__PURE__ */ React.createElement("em", { className: "tou-accent" }, children);
  }
  function SiteHeader({ links, logoSrc, logoOnDarkSrc, overDark, cta, login, defaultOpen }) {
    let [open, setOpen] = React.useState(!!defaultOpen), id = useId("sitenav");
    React.useEffect(() => {
      if (!open) return;
      let k = (e) => {
        e.key === "Escape" && setOpen(!1);
      };
      return document.addEventListener("keydown", k), () => document.removeEventListener("keydown", k);
    }, [open]);
    let dark = overDark && !open;
    return /* @__PURE__ */ React.createElement("header", { className: cx("tou-sitehead", overDark && "tou-sitehead--over", open && "is-open"), "data-theme": dark ? "navy" : "light" }, /* @__PURE__ */ React.createElement("div", { className: "tou-container tou-sitehead__bar" }, /* @__PURE__ */ React.createElement("a", { className: "tou-sitehead__logo", href: "#inicio", "aria-label": "TOU, página inicial" }, /* @__PURE__ */ React.createElement("img", { src: dark && logoOnDarkSrc ? logoOnDarkSrc : logoSrc, alt: "" })), /* @__PURE__ */ React.createElement("nav", { "aria-label": "Principal" }, /* @__PURE__ */ React.createElement("ul", { className: "tou-sitehead__nav" }, links.map((l) => /* @__PURE__ */ React.createElement("li", { key: l.href }, /* @__PURE__ */ React.createElement("a", { className: "tou-sitehead__link", href: l.href, "aria-current": l.current ? "page" : void 0 }, l.label))))), /* @__PURE__ */ React.createElement("div", { className: "tou-sitehead__actions" }, login ? /* @__PURE__ */ React.createElement("a", { className: "tou-sitehead__link tou-sitehead__login", href: login.href }, login.label) : null, /* @__PURE__ */ React.createElement(Button, { className: "tou-sitehead__cta", pill: !0, onClick: cta.onClick, href: cta.href }, cta.label), /* @__PURE__ */ React.createElement(IconButton, { className: "tou-sitehead__burger", icon: open ? "x" : "menu", label: open ? "Fechar menu" : "Abrir menu", "aria-expanded": open, "aria-controls": id, onClick: () => setOpen(!open) }))), /* @__PURE__ */ React.createElement("div", { id, className: cx("tou-sitehead__panel", open && "is-open"), hidden: !open }, /* @__PURE__ */ React.createElement("ul", { className: "tou-container" }, links.map((l) => /* @__PURE__ */ React.createElement("li", { key: l.href }, /* @__PURE__ */ React.createElement("a", { className: "tou-sitehead__plink", href: l.href, onClick: () => setOpen(!1), "aria-current": l.current ? "page" : void 0 }, l.label))), login ? /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", { className: "tou-sitehead__plink", href: login.href }, login.label)) : null), /* @__PURE__ */ React.createElement(Button, { pill: !0, size: "lg", onClick: () => {
      var _a;
      setOpen(!1), (_a = cta.onClick) == null || _a.call(cta);
    } }, cta.label)));
  }
  function ProductPreview({ children, label, designWidth = 1280, designHeight = 760, url = "app.tou.com.br", theme = "light", rounded, light }) {
    let stage = React.useRef(null), [scale, setScale] = React.useState(0.6);
    return React.useLayoutEffect(() => {
      let el = stage.current;
      if (!el) return;
      let fit = () => setScale(el.clientWidth / designWidth);
      if (fit(), typeof ResizeObserver == "undefined") return;
      let ro = new ResizeObserver(fit);
      return ro.observe(el), () => ro.disconnect();
    }, [designWidth]), /* @__PURE__ */ React.createElement("figure", { className: cx("tou-preview", rounded && "tou-preview--rounded", light && "tou-preview--light"), style: { margin: 0 }, role: "img", "aria-label": label }, /* @__PURE__ */ React.createElement("div", { className: "tou-preview__window" }, /* @__PURE__ */ React.createElement("div", { className: "tou-preview__chrome", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("i", null), /* @__PURE__ */ React.createElement("i", null), /* @__PURE__ */ React.createElement("i", null), /* @__PURE__ */ React.createElement("span", null, url)), /* @__PURE__ */ React.createElement("div", { className: "tou-preview__stage", ref: stage, style: { height: designHeight * scale }, "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("div", { className: "tou-preview__scale", "data-theme": theme, style: { width: designWidth, height: designHeight, transform: `scale(${scale})`, background: "var(--bg-page)" }, inert: "" }, children))));
  }
  function Hero({ tone = "dark", split, eyebrow, title, lead, actions, proof, preview, id }) {
    return /* @__PURE__ */ React.createElement("section", { className: cx("tou-hero", `tou-hero--${tone}`, split && "tou-hero--split"), "data-theme": tone === "dark" ? "navy" : "light", id, "aria-labelledby": id ? `${id}-t` : void 0 }, /* @__PURE__ */ React.createElement("div", { className: "tou-hero__mesh", "aria-hidden": "true" }), /* @__PURE__ */ React.createElement("div", { className: "tou-hero__grid", "aria-hidden": "true" }), /* @__PURE__ */ React.createElement("div", { className: "tou-hero__glow", "aria-hidden": "true" }), /* @__PURE__ */ React.createElement("div", { className: "tou-container tou-hero__inner" }, /* @__PURE__ */ React.createElement("div", { className: split ? "tou-hero__copy" : "tou-hero__inner", style: split ? void 0 : { display: "contents" } }, eyebrow ? /* @__PURE__ */ React.createElement("p", { className: "tou-mkt-eyebrow" }, eyebrow) : null, /* @__PURE__ */ React.createElement("h1", { className: "tou-mkt-display", id: id ? `${id}-t` : void 0 }, title), lead ? /* @__PURE__ */ React.createElement("p", { className: "tou-mkt-lead" }, lead) : null, actions ? /* @__PURE__ */ React.createElement("div", { className: "tou-hero__actions" }, actions) : null, proof ? /* @__PURE__ */ React.createElement("div", { className: "tou-hero__proof" }, proof) : null), preview ? /* @__PURE__ */ React.createElement("div", { className: "tou-hero__preview" }, preview) : null));
  }
  function SectionHeader({ eyebrow, title, subtitle, align = "center", id }) {
    return /* @__PURE__ */ React.createElement("div", { className: cx("tou-sechead", align === "start" && "tou-sechead--start") }, eyebrow ? /* @__PURE__ */ React.createElement("p", { className: "tou-mkt-eyebrow" }, eyebrow) : null, /* @__PURE__ */ React.createElement("h2", { className: "tou-mkt-h2", id }, title), subtitle ? /* @__PURE__ */ React.createElement("p", { className: "tou-mkt-lead" }, subtitle) : null);
  }
  function Marquee({ items, label, duration = 40, gap = 48, paused: pausedInit = !1 }) {
    let [paused, setPaused] = React.useState(pausedInit), reduce = useReducedMotion();
    return /* @__PURE__ */ React.createElement("div", { className: cx("tou-marquee", paused && "is-paused"), role: "region", "aria-label": label, style: { "--marquee-duration": `${duration}s`, "--marquee-gap": `${gap}px` } }, /* @__PURE__ */ React.createElement("div", { className: "tou-marquee__viewport" }, /* @__PURE__ */ React.createElement("div", { className: "tou-marquee__track" }, /* @__PURE__ */ React.createElement("ul", { className: "tou-marquee__group", style: { listStyle: "none", margin: 0, padding: 0 } }, items.map((it, i) => /* @__PURE__ */ React.createElement("li", { key: i, style: { display: "flex" } }, it))), reduce ? null : /* @__PURE__ */ React.createElement("ul", { className: "tou-marquee__group", "aria-hidden": "true", style: { listStyle: "none", margin: 0, padding: 0 }, inert: "" }, items.map((it, i) => /* @__PURE__ */ React.createElement("li", { key: i, style: { display: "flex" } }, it))))), reduce ? null : /* @__PURE__ */ React.createElement(IconButton, { className: "tou-marquee__toggle", variant: "default", icon: paused ? "play" : "pause", label: paused ? "Retomar rolagem" : "Pausar rolagem", onClick: () => setPaused(!paused) }));
  }
  function LogoStrip({ title, logos, duration = 45, paused }) {
    return /* @__PURE__ */ React.createElement("div", { className: "tou-logostrip" }, /* @__PURE__ */ React.createElement("p", { className: "tou-logostrip__title" }, title), /* @__PURE__ */ React.createElement(Marquee, { label: "Clientes da TOU", duration, paused, items: logos.map((l) => /* @__PURE__ */ React.createElement("span", { className: "tou-wordmark" }, l.src ? /* @__PURE__ */ React.createElement("img", { src: l.src, alt: l.name }) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Icon, { name: "building", size: 20 }), l.name))) }));
  }
  function Stars({ value, max = 5 }) {
    return /* @__PURE__ */ React.createElement("span", { className: "tou-stars" }, /* @__PURE__ */ React.createElement("span", { "aria-hidden": "true", style: { display: "inline-flex", gap: 2 } }, Array.from({ length: max }, (_, i) => /* @__PURE__ */ React.createElement(Icon, { key: i, name: "star", size: 16, className: i < Math.round(value) ? "" : "is-off" }))), /* @__PURE__ */ React.createElement("span", { className: "tou-stars__text" }, value.toLocaleString("pt-BR"), " de ", max));
  }
  function Testimonial({ quote, name, role, avatarSrc, rating, serif, feature }) {
    return /* @__PURE__ */ React.createElement("figure", { className: cx("tou-quote", feature && "tou-quote--feature"), style: { margin: 0 } }, rating ? /* @__PURE__ */ React.createElement(Stars, { value: rating }) : null, /* @__PURE__ */ React.createElement("blockquote", { style: { margin: 0 } }, /* @__PURE__ */ React.createElement("p", { className: cx("tou-quote__text", serif && "tou-quote__text--serif") }, "“", quote, "”")), /* @__PURE__ */ React.createElement("figcaption", { className: "tou-quote__who" }, /* @__PURE__ */ React.createElement(Avatar, { name: name.startsWith("[") ? void 0 : name, src: avatarSrc }), /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("span", { className: "tou-quote__name" }, name), /* @__PURE__ */ React.createElement("span", { className: "tou-quote__role" }, role))));
  }
  function TestimonialStrip({ items, duration = 70, paused }) {
    return /* @__PURE__ */ React.createElement(Marquee, { label: "Depoimentos de clientes", duration, gap: 24, paused, items: items.map((t) => /* @__PURE__ */ React.createElement(Testimonial, { ...t })) });
  }
  function FeatureTabs({ items, interval = 7, label, startIndex = 0, paused: pausedInit = !1 }) {
    let id = useId("ftabs"), reduce = useReducedMotion(), [i, setI] = React.useState(startIndex), [paused, setPaused] = React.useState(pausedInit), [hover, setHover] = React.useState(!1), [tick, setTick] = React.useState(0), refs = React.useRef([]), auto = interval > 0 && !reduce, running = auto && !paused && !hover;
    React.useEffect(() => {
      if (!running) return;
      let t = setTimeout(() => {
        setI((x) => (x + 1) % items.length), setTick((n) => n + 1);
      }, interval * 1e3);
      return () => clearTimeout(t);
    }, [running, i, tick]);
    let go = (n, focus = !1) => {
      var _a;
      setI(n), setTick((x) => x + 1), focus && ((_a = refs.current[n]) == null || _a.focus());
    }, onKey = (e) => {
      let k = e.key;
      (k === "ArrowDown" || k === "ArrowRight") && (e.preventDefault(), go((i + 1) % items.length, !0)), (k === "ArrowUp" || k === "ArrowLeft") && (e.preventDefault(), go((i - 1 + items.length) % items.length, !0)), k === "Home" && (e.preventDefault(), go(0, !0)), k === "End" && (e.preventDefault(), go(items.length - 1, !0));
    }, cur = items[i];
    return /* @__PURE__ */ React.createElement("div", { className: cx("tou-ftabs", !running && "is-paused"), style: { "--ftab-duration": `${interval}s` }, onMouseEnter: () => setHover(!0), onMouseLeave: () => setHover(!1), onFocus: () => setHover(!0), onBlur: () => setHover(!1) }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "tou-ftabs__list", role: "tablist", "aria-label": label, "aria-orientation": "vertical", onKeyDown: onKey }, items.map((t, n) => /* @__PURE__ */ React.createElement("button", { key: t.id, ref: (el) => {
      refs.current[n] = el;
    }, type: "button", role: "tab", id: `${id}-${t.id}`, "aria-selected": n === i, "aria-controls": `${id}-panel`, tabIndex: n === i ? 0 : -1, className: "tou-ftab", onClick: () => go(n) }, /* @__PURE__ */ React.createElement("span", { className: "tou-ftab__icon", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement(Icon, { name: t.icon, size: 20 })), /* @__PURE__ */ React.createElement("span", { className: "tou-ftab__text" }, /* @__PURE__ */ React.createElement("span", { className: "tou-ftab__title" }, t.title), /* @__PURE__ */ React.createElement("span", { className: "tou-ftab__desc" }, t.description)), auto ? /* @__PURE__ */ React.createElement("span", { className: "tou-ftab__progress", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("i", { key: `${i}-${tick}`, className: n === i ? "is-running" : "", style: n < i ? { width: "100%" } : void 0 })) : null))), auto ? /* @__PURE__ */ React.createElement("div", { className: "tou-ftabs__controls" }, /* @__PURE__ */ React.createElement(IconButton, { variant: "default", icon: paused ? "play" : "pause", label: paused ? "Retomar troca automática" : "Pausar troca automática", onClick: () => setPaused(!paused) }), /* @__PURE__ */ React.createElement("span", { "aria-live": "polite" }, paused ? "Troca automática pausada" : `Troca a cada ${interval} segundos`)) : null), /* @__PURE__ */ React.createElement("div", { className: "tou-ftabs__panel", key: cur.id, role: "tabpanel", id: `${id}-panel`, "aria-labelledby": `${id}-${cur.id}`, tabIndex: 0 }, /* @__PURE__ */ React.createElement("p", { className: "tou-ftabs__mdesc" }, cur.description), cur.content));
  }
  function CtaBanner({ eyebrow, title, lead, actions }) {
    return /* @__PURE__ */ React.createElement("div", { className: "tou-cta", "data-theme": "navy" }, eyebrow ? /* @__PURE__ */ React.createElement("p", { className: "tou-mkt-eyebrow" }, eyebrow) : null, /* @__PURE__ */ React.createElement("h2", { className: "tou-mkt-h1" }, title), lead ? /* @__PURE__ */ React.createElement("p", { className: "tou-mkt-lead" }, lead) : null, /* @__PURE__ */ React.createElement("div", { className: "tou-cta__actions" }, actions));
  }
  function Faq({ items, defaultOpen = [] }) {
    let [v, setV] = React.useState(defaultOpen);
    return /* @__PURE__ */ React.createElement("div", { className: "tou-faq" }, /* @__PURE__ */ React.createElement(Accordion, { items, value: v, onChange: setV, headingLevel: 3 }));
  }
  var EMPTY_LEAD = { name: "", phone: "", email: "", company: "", team: "", consent: !1 }, TEAM = [{ value: "1-3", label: "1 a 3 pessoas" }, { value: "4-10", label: "4 a 10 pessoas" }, { value: "11-30", label: "11 a 30 pessoas" }, { value: "30+", label: "Mais de 30" }];
  function maskPhone(v) {
    let d = v.replace(/\D/g, "").slice(0, 11);
    return d.length <= 2 ? d ? `(${d}` : "" : d.length <= 6 ? `(${d.slice(0, 2)}) ${d.slice(2)}` : d.length <= 10 ? `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}` : `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
  }
  function validateLead(f, step) {
    let e = {}, s1 = step == null || step === 0, s2 = step == null || step === 1;
    if (s1) {
      f.name.trim() || (e.name = "Digite seu nome.");
      let pd = f.phone.replace(/\D/g, "");
      pd ? pd.length < 10 && (e.phone = "Número incompleto: DDD + número.") : e.phone = "Digite seu WhatsApp com DDD.", f.email ? /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email) || (e.email = "Digite um e-mail completo, como nome@clinica.com.") : e.email = "Digite seu e-mail de trabalho.";
    }
    return s2 && (f.company.trim() || (e.company = "Digite o nome da clínica ou empresa."), f.team || (e.team = "Escolha o tamanho da equipe."), f.consent || (e.consent = "Precisamos da sua autorização para entrar em contato.")), e;
  }
  function LeadFields({ f, set, errs, step }) {
    let all = step == null;
    return /* @__PURE__ */ React.createElement("div", { className: "tou-leadform__grid" }, all || step === 0 ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "tou-span-2", "data-lead": "name" }, /* @__PURE__ */ React.createElement(TextField, { label: "Seu nome", required: !0, autoComplete: "name", value: f.name, onChange: (e) => set("name", e.target.value), error: errs.name })), /* @__PURE__ */ React.createElement("div", { "data-lead": "phone" }, /* @__PURE__ */ React.createElement(TextField, { label: "WhatsApp", required: !0, inputMode: "tel", autoComplete: "tel-national", placeholder: "(13) 99999-9999", value: f.phone, onChange: (e) => set("phone", maskPhone(e.target.value)), error: errs.phone })), /* @__PURE__ */ React.createElement("div", { "data-lead": "email" }, /* @__PURE__ */ React.createElement(TextField, { label: "E-mail de trabalho", required: !0, type: "email", autoComplete: "email", placeholder: "nome@clinica.com", value: f.email, onChange: (e) => set("email", e.target.value), error: errs.email }))) : null, all || step === 1 ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { "data-lead": "company", className: all ? void 0 : "tou-span-2" }, /* @__PURE__ */ React.createElement(TextField, { label: "Clínica ou empresa", required: !0, autoComplete: "organization", value: f.company, onChange: (e) => set("company", e.target.value), error: errs.company })), /* @__PURE__ */ React.createElement("div", { "data-lead": "team", className: all ? void 0 : "tou-span-2" }, /* @__PURE__ */ React.createElement(Select, { label: "Pessoas no atendimento", required: !0, options: TEAM, value: f.team || null, onChange: (v) => set("team", v), error: errs.team, placeholder: "Selecione" })), /* @__PURE__ */ React.createElement("div", { className: "tou-span-2", "data-lead": "consent" }, /* @__PURE__ */ React.createElement(Checkbox, { label: "Autorizo a TOU a falar comigo por WhatsApp e e-mail sobre a demonstração.", checked: f.consent, invalid: !!errs.consent, onChange: (e) => set("consent", e.target.checked) }), errs.consent ? /* @__PURE__ */ React.createElement("span", { className: "tou-help tou-help--error", style: { marginTop: 4 } }, /* @__PURE__ */ React.createElement(Icon, { name: "circle-alert", size: 14 }), /* @__PURE__ */ React.createElement("span", null, errs.consent)) : null)) : null);
  }
  function LeadForm({ title = "Agende uma demonstração", onSubmit, initial, submitted: subInit = !1, done: doneInit = !1 }) {
    let [f, setF] = React.useState({ ...EMPTY_LEAD, ...initial }), [submitted, setSubmitted] = React.useState(subInit), [sending, setSending] = React.useState(!1), [done, setDone] = React.useState(doneInit), id = useId("lead"), errs = submitted ? validateLead(f) : {}, set = (k, v) => setF((s) => ({ ...s, [k]: v })), submit = async (e) => {
      var _a;
      (_a = e == null ? void 0 : e.preventDefault) == null || _a.call(e), setSubmitted(!0);
      let er = validateLead(f);
      if (Object.keys(er).length) {
        let k = Object.keys(er)[0];
        setTimeout(() => {
          var _a2;
          return (_a2 = document.querySelector(`#${id} [data-lead="${k}"] input, #${id} [data-lead="${k}"] button`)) == null ? void 0 : _a2.focus();
        }, 0);
        return;
      }
      setSending(!0), await (onSubmit ? onSubmit(f) : new Promise((r) => setTimeout(r, 900))), setSending(!1), setDone(!0);
    };
    if (done)
      return /* @__PURE__ */ React.createElement("div", { className: "tou-leadform", id, role: "status" }, /* @__PURE__ */ React.createElement("div", { className: "tou-leadform__done" }, /* @__PURE__ */ React.createElement("span", { className: "tou-empty__art", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement(Icon, { name: "check", size: 28 })), /* @__PURE__ */ React.createElement("h3", { className: "tou-leadform__title" }, "Pedido recebido"), /* @__PURE__ */ React.createElement("p", { className: "tou-mkt-body" }, "Nossa equipe vai chamar você no WhatsApp ", f.phone ? /* @__PURE__ */ React.createElement("b", null, f.phone) : null, " em até 1 dia útil para combinar o melhor horário."), /* @__PURE__ */ React.createElement(Button, { variant: "secondary", pill: !0, onClick: () => {
        setDone(!1), setSubmitted(!1), setF(EMPTY_LEAD);
      } }, "Enviar outro pedido")));
    let n = Object.keys(errs).length;
    return /* @__PURE__ */ React.createElement("form", { className: "tou-leadform", id, noValidate: !0, onSubmit: submit, "aria-labelledby": `${id}-t` }, /* @__PURE__ */ React.createElement("h3", { className: "tou-leadform__title", id: `${id}-t` }, title), /* @__PURE__ */ React.createElement(LeadFields, { f, set, errs }), n ? /* @__PURE__ */ React.createElement("span", { className: "tou-help tou-help--error", role: "alert" }, /* @__PURE__ */ React.createElement(Icon, { name: "circle-alert", size: 14 }), /* @__PURE__ */ React.createElement("span", null, n === 1 ? "1 campo precisa de atenção." : `${n} campos precisam de atenção.`)) : null, /* @__PURE__ */ React.createElement(Button, { type: "submit", size: "lg", pill: !0, block: !0, loading: sending, iconEnd: sending ? void 0 : "arrow-right" }, sending ? "Enviando…" : "Quero uma demonstração"), /* @__PURE__ */ React.createElement("p", { className: "tou-leadform__legal" }, "Seus dados são usados só para este contato. Sem spam."));
  }
  var STEP_LABELS = ["Seus dados", "Sua clínica", "Horário"];
  function ScheduleModal({ open, onClose, startStep = 0, initial, submitted: subInit = !1, contained, fullScreen, today = /* @__PURE__ */ new Date() }) {
    let [step, setStep] = React.useState(startStep), [f, setF] = React.useState({ ...EMPTY_LEAD, ...initial }), [submitted, setSubmitted] = React.useState(subInit), nextBiz = (d) => {
      let x = new Date(d);
      for (x.setDate(x.getDate() + 1); x.getDay() === 0 || x.getDay() === 6; ) x.setDate(x.getDate() + 1);
      return x;
    }, [day, setDay] = React.useState(startStep >= 2 ? nextBiz(today) : null), [month, setMonth] = React.useState(new Date(today.getFullYear(), today.getMonth(), 1)), [time, setTime] = React.useState(startStep >= 3 ? "10:30" : null), [slotErr, setSlotErr] = React.useState(!1), errs = submitted && step < 2 ? validateLead(f, step) : {}, set = (k, v) => setF((s) => ({ ...s, [k]: v })), next = () => {
      if (step < 2) {
        if (setSubmitted(!0), Object.keys(validateLead(f, step)).length) return;
        setSubmitted(!1), setStep(step + 1);
        return;
      }
      if (step === 2) {
        if (!day || !time) {
          setSlotErr(!0);
          return;
        }
        setStep(3);
      }
    }, dis = (d) => d.getDay() === 0 || d.getDay() === 6 || d < new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1), busy = ["09:00", "11:00", "14:30", "16:00"], slots = ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30"], fmt = (d) => d.toLocaleDateString("pt-BR", { weekday: "long", day: "2-digit", month: "long" }), footer = step < 3 ? /* @__PURE__ */ React.createElement(React.Fragment, null, step > 0 ? /* @__PURE__ */ React.createElement(Button, { variant: "secondary", pill: !0, onClick: () => setStep(step - 1), iconStart: "arrow-left" }, "Voltar") : /* @__PURE__ */ React.createElement(Button, { variant: "secondary", pill: !0, onClick: onClose }, "Cancelar"), /* @__PURE__ */ React.createElement(Button, { pill: !0, onClick: next, iconEnd: step === 2 ? "check" : "arrow-right" }, step === 2 ? "Confirmar horário" : "Continuar")) : /* @__PURE__ */ React.createElement(Button, { pill: !0, onClick: onClose }, "Fechar");
    return /* @__PURE__ */ React.createElement(
      Modal,
      {
        open,
        onClose,
        contained,
        fullScreen,
        size: "md",
        closeOnOverlay: !1,
        title: step === 3 ? "Demonstração agendada" : "Agende uma demonstração",
        subtitle: step === 3 ? void 0 : "30 minutos com um especialista, por videochamada.",
        footer,
        footerStart: step < 3 ? /* @__PURE__ */ React.createElement("span", { className: "tou-mono", "aria-live": "polite" }, "Etapa ", step + 1, " de 3") : void 0
      },
      step < 3 ? /* @__PURE__ */ React.createElement("ol", { className: "tou-steps", "aria-label": "Etapas" }, STEP_LABELS.map((l, n) => /* @__PURE__ */ React.createElement("li", { key: l, className: n < step ? "is-done" : void 0, "aria-current": n === step ? "step" : void 0 }, /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("span", { className: "tou-steps__num" }, n + 1), l, n < step ? /* @__PURE__ */ React.createElement("span", { className: "tou-sr" }, " (concluída)") : null)))) : null,
      step < 2 ? /* @__PURE__ */ React.createElement(LeadFields, { f, set, errs, step }) : null,
      step === 2 ? /* @__PURE__ */ React.createElement("div", { className: "tou-slots" }, /* @__PURE__ */ React.createElement("div", { className: "tou-popover tou-popover--static", style: { padding: 0, minWidth: 0 } }, /* @__PURE__ */ React.createElement(Calendar, { month, onMonthChange: setMonth, value: day, today, isDisabled: dis, onSelect: (d) => {
        setDay(d), setSlotErr(!1);
      }, footer: /* @__PURE__ */ React.createElement("span", null, "Fins de semana indisponíveis") })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "tou-slots__head" }, day ? fmt(day) : "Escolha um dia"), day ? /* @__PURE__ */ React.createElement("div", { className: "tou-times", role: "listbox", "aria-label": "Horários disponíveis" }, slots.map((s) => /* @__PURE__ */ React.createElement("button", { key: s, type: "button", role: "option", className: "tou-time", "aria-selected": s === time, disabled: busy.includes(s), "aria-label": busy.includes(s) ? `${s}, ocupado` : s, onClick: () => {
        setTime(s), setSlotErr(!1);
      } }, s))) : /* @__PURE__ */ React.createElement("p", { className: "tou-mkt-body", style: { fontSize: 14, lineHeight: "20px" } }, "Os horários aparecem depois que você escolher o dia."), slotErr ? /* @__PURE__ */ React.createElement("span", { className: "tou-help tou-help--error", role: "alert", style: { marginTop: 8 } }, /* @__PURE__ */ React.createElement(Icon, { name: "circle-alert", size: 14 }), /* @__PURE__ */ React.createElement("span", null, day ? "Escolha um horário." : "Escolha um dia no calendário.")) : null, /* @__PURE__ */ React.createElement("p", { className: "tou-help", style: { marginTop: 12 } }, "Horário de Brasília. Riscados já estão ocupados."))) : null,
      step === 3 ? /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 16 }, role: "status" }, /* @__PURE__ */ React.createElement("p", { className: "tou-mkt-body", style: { color: "var(--text)" } }, "Pronto, ", f.name.split(" ")[0] || "tudo certo", "! Enviamos o convite para ", /* @__PURE__ */ React.createElement("b", null, f.email || "seu e-mail"), " e um lembrete vai chegar no WhatsApp 1 hora antes."), /* @__PURE__ */ React.createElement("dl", { className: "tou-summary" }, /* @__PURE__ */ React.createElement("dt", null, "Quando"), /* @__PURE__ */ React.createElement("dd", null, day ? fmt(day) : "", ", às ", time), /* @__PURE__ */ React.createElement("dt", null, "Duração"), /* @__PURE__ */ React.createElement("dd", null, "30 minutos, por videochamada"), /* @__PURE__ */ React.createElement("dt", null, "Clínica"), /* @__PURE__ */ React.createElement("dd", null, f.company || "—"))) : null
    );
  }
  function SiteFooter({ logoSrc, tagline, columns, legal, bottomLinks = [] }) {
    return /* @__PURE__ */ React.createElement("footer", { className: "tou-sitefoot", "data-theme": "navy" }, /* @__PURE__ */ React.createElement("div", { className: "tou-container" }, /* @__PURE__ */ React.createElement("div", { className: "tou-sitefoot__top" }, /* @__PURE__ */ React.createElement("div", { className: "tou-sitefoot__brand" }, /* @__PURE__ */ React.createElement("img", { src: logoSrc, alt: "TOU" }), /* @__PURE__ */ React.createElement("p", null, tagline)), columns.map((c) => /* @__PURE__ */ React.createElement("nav", { key: c.title, className: "tou-sitefoot__col", "aria-label": c.title }, /* @__PURE__ */ React.createElement("h2", null, c.title), /* @__PURE__ */ React.createElement("ul", null, c.links.map((l) => /* @__PURE__ */ React.createElement("li", { key: l.label }, /* @__PURE__ */ React.createElement("a", { href: l.href }, l.label))))))), /* @__PURE__ */ React.createElement("div", { className: "tou-sitefoot__bottom" }, /* @__PURE__ */ React.createElement("span", null, legal), /* @__PURE__ */ React.createElement("span", { style: { display: "flex", gap: 16, flexWrap: "wrap" } }, bottomLinks.map((l) => /* @__PURE__ */ React.createElement("a", { key: l.label, href: l.href }, l.label))))));
  }
  return __toCommonJS(index_exports);
})();
