goog.provide('camel_snake_kebab.internals.misc');
camel_snake_kebab.internals.misc.convert_case = (function camel_snake_kebab$internals$misc$convert_case(var_args){
var args__5775__auto__ = [];
var len__5769__auto___26004 = arguments.length;
var i__5770__auto___26005 = (0);
while(true){
if((i__5770__auto___26005 < len__5769__auto___26004)){
args__5775__auto__.push((arguments[i__5770__auto___26005]));

var G__26006 = (i__5770__auto___26005 + (1));
i__5770__auto___26005 = G__26006;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((4) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5776__auto__);
});

(camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,p__25989){
var map__25990 = p__25989;
var map__25990__$1 = cljs.core.__destructure_map(map__25990);
var separator = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__25990__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125),camel_snake_kebab.internals.string_separator.generic_separator);
var temp__5802__auto__ = cljs.core.seq(camel_snake_kebab.internals.string_separator.split(separator,s));
if(temp__5802__auto__){
var vec__25991 = temp__5802__auto__;
var seq__25992 = cljs.core.seq(vec__25991);
var first__25993 = cljs.core.first(seq__25992);
var seq__25992__$1 = cljs.core.next(seq__25992);
var first = first__25993;
var rest = seq__25992__$1;
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(sep,cljs.core.cons((first_fn.cljs$core$IFn$_invoke$arity$1 ? first_fn.cljs$core$IFn$_invoke$arity$1(first) : first_fn.call(null,first)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(rest_fn,rest)));
} else {
return "";
}
}));

(camel_snake_kebab.internals.misc.convert_case.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(camel_snake_kebab.internals.misc.convert_case.cljs$lang$applyTo = (function (seq25981){
var G__25982 = cljs.core.first(seq25981);
var seq25981__$1 = cljs.core.next(seq25981);
var G__25983 = cljs.core.first(seq25981__$1);
var seq25981__$2 = cljs.core.next(seq25981__$1);
var G__25984 = cljs.core.first(seq25981__$2);
var seq25981__$3 = cljs.core.next(seq25981__$2);
var G__25985 = cljs.core.first(seq25981__$3);
var seq25981__$4 = cljs.core.next(seq25981__$3);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25982,G__25983,G__25984,G__25985,seq25981__$4);
}));

camel_snake_kebab.internals.misc.upper_case_http_headers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, ["WWW",null,"TE",null,"CSP",null,"CPU",null,"IP",null,"WAP",null,"HTTP",null,"DNT",null,"UA",null,"ATT",null,"SSL",null,"MD5",null,"XSS",null], null), null);
camel_snake_kebab.internals.misc.capitalize_http_header = (function camel_snake_kebab$internals$misc$capitalize_http_header(s){
var or__5045__auto__ = (function (){var G__25998 = clojure.string.upper_case(s);
return (camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1 ? camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1(G__25998) : camel_snake_kebab.internals.misc.upper_case_http_headers.call(null,G__25998));
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return clojure.string.capitalize(s);
}
});

//# sourceMappingURL=camel_snake_kebab.internals.misc.js.map
