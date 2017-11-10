// Compiled using marko@4.5.6 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    components_helpers = require("marko/src/components/helpers"),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/bloggrid$1.0.0/page.marko", function() {
      return module.exports;
    }),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXmlAttr = marko_helpers.xa,
    marko_escapeXml = marko_helpers.x,
    marko_escapeScript = marko_helpers.xs,
    marko_attr = marko_helpers.a,
    marko_escapeStyle = marko_helpers.xc,
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_forEach = marko_helpers.f,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!doctype html><html class=\"no-js\" lang=\"en-us\"><head><script async src=\"https://www.googletagmanager.com/gtag/js?id=" +
    marko_escapeXmlAttr(input.pageData.googleID) +
    "\"></script><script>function gtag(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],gtag(\"js\",new Date),gtag(\"config\",\"" +
    marko_escapeScript(input.pageData.googleID) +
    "\");</script><meta charset=\"utf-8\"><meta name=\"HandheldFriendly\" content=\"True\"><meta http-equiv=\"x-ua-compatible\" content=\"ie=edge\"><link rel=\"shortcut icon\" href=\"favicon.ico\" type=\"image/x-icon\"><title>" +
    marko_escapeXml(input.pageData.pageTitle) +
    "</title><meta name=\"description\"" +
    marko_attr("content", input.pageData.pageDescription) +
    "><meta name=\"viewport\" content=\"width=device-width, initial-scale=1, user-scalable=no\"><style>.dir::before{content:\"Click Photo for Story\"}.footer{height:30px}.shead{display:none}.crop img,.crop img:focus,a{-webkit-tap-highlight-color:transparent}.grid,.header,.loader{text-align:center}body{font-family:Montserrat,sans-serif;font-size:10px;margin:0}.grid{overflow:auto;max-width:960px;margin:30px auto auto;padding-left:2px}.caption,.caption span,.crop img,.header::after,.loader{display:block}.athumb{vertical-align:top;position:relative;float:left;width:32.66%;min-width:32.66%;margin:2px;-webkit-transition:all .1s ease-in}.caption,.caption span,.crop,.crop img{position:absolute}.athumb::before{content:\"\";display:block;padding-top:100%}.crop{height:100%;overflow:hidden;top:0;left:0;bottom:0;right:0}.crop img{min-width:100%;min-height:100%;margin:auto;top:-100%;right:-100%;bottom:-100%;left:-100%}.athumb:hover{z-index:900}.header{margin-top:-35px;width:100%}.header img{padding-bottom:10px}.header::after{margin-top:10px;content:\" \";width:100%;height:1px;background-color:#000}.back img{width:35px;height:35px;margin:10px}.loader{padding:1em;margin:auto}.loader svg{width:330px;height:330px;fill:#000}@media (max-width:640px){.athumb{width:49.3%;margin:.3%}.grid{padding-left:0}.crop img{min-width:0;max-width:50vw}}.caption{pointer-events:none;box-sizing:border-box;font-weight:700;font-size:2em;text-align:left;top:0;color:#fff;height:100%;width:100%}.caption span{bottom:-50%;padding:5px;transition:all .4s;opacity:0;background-color:#000;background-color:rgba(0,0,0,.7)}.athumb:hover .caption span{bottom:0;opacity:1}h2{font-weight:400;font-size:14px}@media print{.back,h2{display:none}.grid{max-width:20cm;margin:auto;padding-top:1cm}.athumb{width:1cm;margin:.05cm;page-break-before:auto;page-break-after:auto;page-break-inside:avoid}.athumb:hover{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;transition:none!important;transform:scale(1)}.caption,.shead{display:block;font-size:36pt}.caption{bottom:0;height:auto;padding:0;font-size:1em}.caption span{-webkit-print-color-adjust:exact;bottom:0;opacity:1;color:#fff;background-color:#000;background-color:rgba(0,0,0,.5)}}.switch{display:none}@media (hover:none){.dir::before{content:\"Tap Photo for Story\"} .athumb:hover .caption span{bottom:-50%;opacity:0}.switch,.switch div{height:1em;border-radius:1em}.athumb{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;transition:none!important;transform:scale(1)!important}.switch input{position:absolute;opacity:0}.switch{display:block;position:absolute;top:10px;right:10px;font-size:25px;width:2em;background:#d8d8d8}.switch div{width:1em;background:#FFF;box-shadow:0 .1em .3em rgba(0,0,0,.3);-webkit-transition:all .3s;-moz-transition:all .3s;transition:all .3s}.switch input:checked+div{background:" +
    marko_escapeStyle(input.pageData.switchOnColor) +
    ";-webkit-transform:translate3d(100%,0,0);-moz-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}.mobileShow{opacity:1!important;bottom:0!important}}@media (max-width:960px){body{font-size:1.15vw}.grid{padding-left:0}.crop img{max-width:0}}@media (max-width:640px){body{font-size:1.55vw}.crop img{min-width:0;max-width:50vw}}</style></head><body>");

  component_globals_tag({}, out);

  out.w("<div class=\"back\"><a" +
    marko_attr("href", input.pageData.instagramURL) +
    "><img src=\"data:image/webp;base64,UklGRiACAABXRUJQVlA4TBQCAAAvRUAREH8AEIT/bhERBNm2oRm8CE8BOBhDjv/fpu2s915sW0O4IwjKVPfWcSbwUMWqrC6VUdvOCKzO1rPxK87aa6+zRhDRfwduIylSavdwuavhDaK1cv/9P9h6dH/rKDE17RI+ramz1l94ddpYvuNXY8I5ymiB/m2oFM/UT0/TR7dti6WT6YNdVDBQcHSW5LXqfcFlEdkEsF58egMwRuQTcKbOybR+YIlIPzBevDoBnJFpI3BG/OqH1roasNhHbehUnbwARl8ptnNvv0iK7Se0wQdxsRJ148MwtQuO+4/WKtIH1V6o+rgCINIFe/pgqUXl9gitOxpEpBl4JtIOxwdhikHLMAAf5oosA5pEPsLjQZiYsmkErdYxIt0qkldyTBsk1eM6WXZ7tWhGLL5gabl1slbLGZURk9YG66TAWM0nCg5vuQPKWIrmDIPAhzkisnkYeOwgsfQ8dQn7EgtnSL5vFK1u9dVBr2m1GrDHw7Dtoz744KCSsfQLoCFPs/Fk0mc2Ns8VwCxAwMQ8H9MQGMGZkqdNud7ecKqLPSa9YUR8idkk4kAhIQsKfIR9QkwYYuWQhAhMq6DkjEjxkEJRotwYlChaJv7Sp9DG8xdQhS6g/jKs0GXYX8wtH1VVSyiBagklGothtYnu9mRaenRIkwtolXtiGm5E245o/iEjRMggEjHOhAxF5Uer3WYBuulkrQ5TxJgn\" alt=\"Instagram Logo\"></a></div><div class=\"header\"><a" +
    marko_attr("href", input.pageData.instagramURL) +
    "><img" +
    marko_attr("src", input.pageData.logoImage) +
    " alt=\"Logo\" height=40></a><h1 class=\"shead\">" +
    marko_escapeXml(input.pageData.header) +
    "</h1><h2 class=\"dir\"></h2></div><label class=\"switch\"><input onchange=\"toggleCaptions()\" id=\"showCaps\" class=\"showCaps\" type=\"checkbox\"><div></div></label><div class=\"container\"><div class=\"grid\">");

  marko_forEach(input.items, function(item) {
    out.w("<div class=\"athumb\"><div class=\"crop\"><a href=\"" +
      marko_escapeXmlAttr(item.link) +
      "?xrs=_s.newsGrid\" target=\"_blank\"><img" +
      marko_attr("src", item["media:content"].url) +
      marko_attr("alt", item.title) +
      "></a><div class=\"caption\"><span>" +
      marko_escapeXml(item.title) +
      "</span></div></div></div>");
  });

  out.w("</div><div class=\"footer\"></div></div><script src=\"https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js\"></script><script>function toggleCaptions(){document.querySelectorAll(\".caption span\").forEach(function(o){o.classList.toggle(\"mobileShow\")})}WebFont.load({google:{families:[\"Montserrat:400,700\"]}});</script>");

  if (input.items.length < 1) {
    out.w("<script>location.reload();</script>");
  }

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "36");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };