goog.provide('camel_snake_kebab.internals.misc');
camel_snake_kebab.internals.misc.convert_case = (function camel_snake_kebab$internals$misc$convert_case(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26169 = arguments.length;
var i__5727__auto___26170 = (0);
while(true){
if((i__5727__auto___26170 < len__5726__auto___26169)){
args__5732__auto__.push((arguments[i__5727__auto___26170]));

var G__26171 = (i__5727__auto___26170 + (1));
i__5727__auto___26170 = G__26171;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((4) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5733__auto__);
});

(camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,p__26161){
var map__26162 = p__26161;
var map__26162__$1 = cljs.core.__destructure_map(map__26162);
var separator = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26162__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125),camel_snake_kebab.internals.string_separator.generic_separator);
var temp__5802__auto__ = cljs.core.seq(camel_snake_kebab.internals.string_separator.split(separator,s));
if(temp__5802__auto__){
var vec__26163 = temp__5802__auto__;
var seq__26164 = cljs.core.seq(vec__26163);
var first__26165 = cljs.core.first(seq__26164);
var seq__26164__$1 = cljs.core.next(seq__26164);
var first = first__26165;
var rest = seq__26164__$1;
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(sep,cljs.core.cons((first_fn.cljs$core$IFn$_invoke$arity$1 ? first_fn.cljs$core$IFn$_invoke$arity$1(first) : first_fn.call(null, first)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(rest_fn,rest)));
} else {
return "";
}
}));

(camel_snake_kebab.internals.misc.convert_case.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(camel_snake_kebab.internals.misc.convert_case.cljs$lang$applyTo = (function (seq26156){
var G__26157 = cljs.core.first(seq26156);
var seq26156__$1 = cljs.core.next(seq26156);
var G__26158 = cljs.core.first(seq26156__$1);
var seq26156__$2 = cljs.core.next(seq26156__$1);
var G__26159 = cljs.core.first(seq26156__$2);
var seq26156__$3 = cljs.core.next(seq26156__$2);
var G__26160 = cljs.core.first(seq26156__$3);
var seq26156__$4 = cljs.core.next(seq26156__$3);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26157,G__26158,G__26159,G__26160,seq26156__$4);
}));

camel_snake_kebab.internals.misc.upper_case_http_headers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, ["WWW",null,"TE",null,"CSP",null,"CPU",null,"IP",null,"WAP",null,"HTTP",null,"DNT",null,"UA",null,"ATT",null,"SSL",null,"MD5",null,"XSS",null], null), null);
camel_snake_kebab.internals.misc.capitalize_http_header = (function camel_snake_kebab$internals$misc$capitalize_http_header(s){
var or__5002__auto__ = (function (){var G__26167 = clojure.string.upper_case(s);
return (camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1 ? camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1(G__26167) : camel_snake_kebab.internals.misc.upper_case_http_headers.call(null, G__26167));
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return clojure.string.capitalize(s);
}
});

//# sourceMappingURL=camel_snake_kebab.internals.misc.js.map
