goog.provide('camel_snake_kebab.internals.misc');
camel_snake_kebab.internals.misc.convert_case = (function camel_snake_kebab$internals$misc$convert_case(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26172 = arguments.length;
var i__5727__auto___26173 = (0);
while(true){
if((i__5727__auto___26173 < len__5726__auto___26172)){
args__5732__auto__.push((arguments[i__5727__auto___26173]));

var G__26174 = (i__5727__auto___26173 + (1));
i__5727__auto___26173 = G__26174;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((4) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5733__auto__);
});

(camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,p__26166){
var map__26167 = p__26166;
var map__26167__$1 = cljs.core.__destructure_map(map__26167);
var separator = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26167__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125),camel_snake_kebab.internals.string_separator.generic_separator);
var temp__5802__auto__ = cljs.core.seq(camel_snake_kebab.internals.string_separator.split(separator,s));
if(temp__5802__auto__){
var vec__26168 = temp__5802__auto__;
var seq__26169 = cljs.core.seq(vec__26168);
var first__26170 = cljs.core.first(seq__26169);
var seq__26169__$1 = cljs.core.next(seq__26169);
var first = first__26170;
var rest = seq__26169__$1;
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(sep,cljs.core.cons((first_fn.cljs$core$IFn$_invoke$arity$1 ? first_fn.cljs$core$IFn$_invoke$arity$1(first) : first_fn.call(null, first)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(rest_fn,rest)));
} else {
return "";
}
}));

(camel_snake_kebab.internals.misc.convert_case.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(camel_snake_kebab.internals.misc.convert_case.cljs$lang$applyTo = (function (seq26161){
var G__26162 = cljs.core.first(seq26161);
var seq26161__$1 = cljs.core.next(seq26161);
var G__26163 = cljs.core.first(seq26161__$1);
var seq26161__$2 = cljs.core.next(seq26161__$1);
var G__26164 = cljs.core.first(seq26161__$2);
var seq26161__$3 = cljs.core.next(seq26161__$2);
var G__26165 = cljs.core.first(seq26161__$3);
var seq26161__$4 = cljs.core.next(seq26161__$3);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26162,G__26163,G__26164,G__26165,seq26161__$4);
}));

camel_snake_kebab.internals.misc.upper_case_http_headers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, ["WWW",null,"TE",null,"CSP",null,"CPU",null,"IP",null,"WAP",null,"HTTP",null,"DNT",null,"UA",null,"ATT",null,"SSL",null,"MD5",null,"XSS",null], null), null);
camel_snake_kebab.internals.misc.capitalize_http_header = (function camel_snake_kebab$internals$misc$capitalize_http_header(s){
var or__5002__auto__ = (function (){var G__26171 = clojure.string.upper_case(s);
return (camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1 ? camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1(G__26171) : camel_snake_kebab.internals.misc.upper_case_http_headers.call(null, G__26171));
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return clojure.string.capitalize(s);
}
});

//# sourceMappingURL=camel_snake_kebab.internals.misc.js.map
