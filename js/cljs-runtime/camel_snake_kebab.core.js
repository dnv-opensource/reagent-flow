goog.provide('camel_snake_kebab.core');



























/**
 * Converts the case of a string according to the rule for the first
 *   word, remaining words, and the separator.
 */
camel_snake_kebab.core.convert_case = (function camel_snake_kebab$core$convert_case(var_args){
var args__5775__auto__ = [];
var len__5769__auto___26403 = arguments.length;
var i__5770__auto___26404 = (0);
while(true){
if((i__5770__auto___26404 < len__5769__auto___26403)){
args__5775__auto__.push((arguments[i__5770__auto___26404]));

var G__26405 = (i__5770__auto___26404 + (1));
i__5770__auto___26404 = G__26405;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((4) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,rest){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,first_fn,rest_fn,sep,s,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest], 0));
}));

(camel_snake_kebab.core.convert_case.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq26256){
var G__26257 = cljs.core.first(seq26256);
var seq26256__$1 = cljs.core.next(seq26256);
var G__26258 = cljs.core.first(seq26256__$1);
var seq26256__$2 = cljs.core.next(seq26256__$1);
var G__26259 = cljs.core.first(seq26256__$2);
var seq26256__$3 = cljs.core.next(seq26256__$2);
var G__26260 = cljs.core.first(seq26256__$3);
var seq26256__$4 = cljs.core.next(seq26256__$3);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26257,G__26258,G__26259,G__26260,seq26256__$4);
}));

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__5775__auto__ = [];
var len__5769__auto___26406 = arguments.length;
var i__5770__auto___26407 = (0);
while(true){
if((i__5770__auto___26407 < len__5769__auto___26406)){
args__5775__auto__.push((arguments[i__5770__auto___26407]));

var G__26408 = (i__5770__auto___26407 + (1));
i__5770__auto___26407 = G__26408;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__26202__auto__,rest__26203__auto__){
var convert_case__26204__auto__ = (function (p1__26201__26205__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__26201__26205__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26203__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__26202__auto__,convert_case__26204__auto__);
}));

(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq26261){
var G__26262 = cljs.core.first(seq26261);
var seq26261__$1 = cljs.core.next(seq26261);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26262,seq26261__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__5775__auto__ = [];
var len__5769__auto___26419 = arguments.length;
var i__5770__auto___26420 = (0);
while(true){
if((i__5770__auto___26420 < len__5769__auto___26419)){
args__5775__auto__.push((arguments[i__5770__auto___26420]));

var G__26421 = (i__5770__auto___26420 + (1));
i__5770__auto___26420 = G__26421;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__26207__auto__,rest__26208__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__26207__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26208__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq26279){
var G__26280 = cljs.core.first(seq26279);
var seq26279__$1 = cljs.core.next(seq26279);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26280,seq26279__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___26422 = arguments.length;
var i__5770__auto___26423 = (0);
while(true){
if((i__5770__auto___26423 < len__5769__auto___26422)){
args__5775__auto__.push((arguments[i__5770__auto___26423]));

var G__26424 = (i__5770__auto___26423 + (1));
i__5770__auto___26423 = G__26424;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__26207__auto__,rest__26208__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__26207__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26208__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq26281){
var G__26282 = cljs.core.first(seq26281);
var seq26281__$1 = cljs.core.next(seq26281);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26282,seq26281__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__5775__auto__ = [];
var len__5769__auto___26425 = arguments.length;
var i__5770__auto___26426 = (0);
while(true){
if((i__5770__auto___26426 < len__5769__auto___26425)){
args__5775__auto__.push((arguments[i__5770__auto___26426]));

var G__26427 = (i__5770__auto___26426 + (1));
i__5770__auto___26426 = G__26427;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__26207__auto__,rest__26208__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__26207__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26208__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq26283){
var G__26284 = cljs.core.first(seq26283);
var seq26283__$1 = cljs.core.next(seq26283);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26284,seq26283__$1);
}));

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__5775__auto__ = [];
var len__5769__auto___26428 = arguments.length;
var i__5770__auto___26430 = (0);
while(true){
if((i__5770__auto___26430 < len__5769__auto___26428)){
args__5775__auto__.push((arguments[i__5770__auto___26430]));

var G__26431 = (i__5770__auto___26430 + (1));
i__5770__auto___26430 = G__26431;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__26202__auto__,rest__26203__auto__){
var convert_case__26204__auto__ = (function (p1__26201__26205__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__26201__26205__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26203__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__26202__auto__,convert_case__26204__auto__);
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq26299){
var G__26300 = cljs.core.first(seq26299);
var seq26299__$1 = cljs.core.next(seq26299);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26300,seq26299__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__5775__auto__ = [];
var len__5769__auto___26433 = arguments.length;
var i__5770__auto___26434 = (0);
while(true){
if((i__5770__auto___26434 < len__5769__auto___26433)){
args__5775__auto__.push((arguments[i__5770__auto___26434]));

var G__26435 = (i__5770__auto___26434 + (1));
i__5770__auto___26434 = G__26435;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__26207__auto__,rest__26208__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__26207__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26208__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq26301){
var G__26302 = cljs.core.first(seq26301);
var seq26301__$1 = cljs.core.next(seq26301);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26302,seq26301__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___26436 = arguments.length;
var i__5770__auto___26437 = (0);
while(true){
if((i__5770__auto___26437 < len__5769__auto___26436)){
args__5775__auto__.push((arguments[i__5770__auto___26437]));

var G__26438 = (i__5770__auto___26437 + (1));
i__5770__auto___26437 = G__26438;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__26207__auto__,rest__26208__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__26207__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26208__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq26303){
var G__26304 = cljs.core.first(seq26303);
var seq26303__$1 = cljs.core.next(seq26303);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26304,seq26303__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__5775__auto__ = [];
var len__5769__auto___26439 = arguments.length;
var i__5770__auto___26440 = (0);
while(true){
if((i__5770__auto___26440 < len__5769__auto___26439)){
args__5775__auto__.push((arguments[i__5770__auto___26440]));

var G__26441 = (i__5770__auto___26440 + (1));
i__5770__auto___26440 = G__26441;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__26207__auto__,rest__26208__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__26207__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26208__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq26305){
var G__26306 = cljs.core.first(seq26305);
var seq26305__$1 = cljs.core.next(seq26305);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26306,seq26305__$1);
}));

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__5775__auto__ = [];
var len__5769__auto___26449 = arguments.length;
var i__5770__auto___26450 = (0);
while(true){
if((i__5770__auto___26450 < len__5769__auto___26449)){
args__5775__auto__.push((arguments[i__5770__auto___26450]));

var G__26451 = (i__5770__auto___26450 + (1));
i__5770__auto___26450 = G__26451;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__26202__auto__,rest__26203__auto__){
var convert_case__26204__auto__ = (function (p1__26201__26205__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__26201__26205__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26203__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__26202__auto__,convert_case__26204__auto__);
}));

(camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq26324){
var G__26325 = cljs.core.first(seq26324);
var seq26324__$1 = cljs.core.next(seq26324);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26325,seq26324__$1);
}));


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__5775__auto__ = [];
var len__5769__auto___26453 = arguments.length;
var i__5770__auto___26454 = (0);
while(true){
if((i__5770__auto___26454 < len__5769__auto___26453)){
args__5775__auto__.push((arguments[i__5770__auto___26454]));

var G__26455 = (i__5770__auto___26454 + (1));
i__5770__auto___26454 = G__26455;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__26207__auto__,rest__26208__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__26207__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26208__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq26326){
var G__26327 = cljs.core.first(seq26326);
var seq26326__$1 = cljs.core.next(seq26326);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26327,seq26326__$1);
}));


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___26458 = arguments.length;
var i__5770__auto___26459 = (0);
while(true){
if((i__5770__auto___26459 < len__5769__auto___26458)){
args__5775__auto__.push((arguments[i__5770__auto___26459]));

var G__26460 = (i__5770__auto___26459 + (1));
i__5770__auto___26459 = G__26460;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__26207__auto__,rest__26208__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__26207__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26208__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq26337){
var G__26338 = cljs.core.first(seq26337);
var seq26337__$1 = cljs.core.next(seq26337);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26338,seq26337__$1);
}));


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__5775__auto__ = [];
var len__5769__auto___26461 = arguments.length;
var i__5770__auto___26462 = (0);
while(true){
if((i__5770__auto___26462 < len__5769__auto___26461)){
args__5775__auto__.push((arguments[i__5770__auto___26462]));

var G__26463 = (i__5770__auto___26462 + (1));
i__5770__auto___26462 = G__26463;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__26207__auto__,rest__26208__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__26207__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26208__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq26339){
var G__26340 = cljs.core.first(seq26339);
var seq26339__$1 = cljs.core.next(seq26339);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26340,seq26339__$1);
}));

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__5775__auto__ = [];
var len__5769__auto___26464 = arguments.length;
var i__5770__auto___26465 = (0);
while(true){
if((i__5770__auto___26465 < len__5769__auto___26464)){
args__5775__auto__.push((arguments[i__5770__auto___26465]));

var G__26466 = (i__5770__auto___26465 + (1));
i__5770__auto___26465 = G__26466;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__26202__auto__,rest__26203__auto__){
var convert_case__26204__auto__ = (function (p1__26201__26205__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__26201__26205__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26203__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__26202__auto__,convert_case__26204__auto__);
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq26341){
var G__26342 = cljs.core.first(seq26341);
var seq26341__$1 = cljs.core.next(seq26341);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26342,seq26341__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__5775__auto__ = [];
var len__5769__auto___26469 = arguments.length;
var i__5770__auto___26470 = (0);
while(true){
if((i__5770__auto___26470 < len__5769__auto___26469)){
args__5775__auto__.push((arguments[i__5770__auto___26470]));

var G__26471 = (i__5770__auto___26470 + (1));
i__5770__auto___26470 = G__26471;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__26207__auto__,rest__26208__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__26207__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26208__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq26343){
var G__26344 = cljs.core.first(seq26343);
var seq26343__$1 = cljs.core.next(seq26343);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26344,seq26343__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__5775__auto__ = [];
var len__5769__auto___26474 = arguments.length;
var i__5770__auto___26475 = (0);
while(true){
if((i__5770__auto___26475 < len__5769__auto___26474)){
args__5775__auto__.push((arguments[i__5770__auto___26475]));

var G__26476 = (i__5770__auto___26475 + (1));
i__5770__auto___26475 = G__26476;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__26207__auto__,rest__26208__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__26207__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26208__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq26345){
var G__26346 = cljs.core.first(seq26345);
var seq26345__$1 = cljs.core.next(seq26345);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26346,seq26345__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__5775__auto__ = [];
var len__5769__auto___26477 = arguments.length;
var i__5770__auto___26478 = (0);
while(true){
if((i__5770__auto___26478 < len__5769__auto___26477)){
args__5775__auto__.push((arguments[i__5770__auto___26478]));

var G__26479 = (i__5770__auto___26478 + (1));
i__5770__auto___26478 = G__26479;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__26207__auto__,rest__26208__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__26207__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26208__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq26347){
var G__26348 = cljs.core.first(seq26347);
var seq26347__$1 = cljs.core.next(seq26347);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26348,seq26347__$1);
}));

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__5775__auto__ = [];
var len__5769__auto___26489 = arguments.length;
var i__5770__auto___26490 = (0);
while(true){
if((i__5770__auto___26490 < len__5769__auto___26489)){
args__5775__auto__.push((arguments[i__5770__auto___26490]));

var G__26491 = (i__5770__auto___26490 + (1));
i__5770__auto___26490 = G__26491;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__26202__auto__,rest__26203__auto__){
var convert_case__26204__auto__ = (function (p1__26201__26205__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__26201__26205__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26203__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__26202__auto__,convert_case__26204__auto__);
}));

(camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq26349){
var G__26350 = cljs.core.first(seq26349);
var seq26349__$1 = cljs.core.next(seq26349);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26350,seq26349__$1);
}));


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__5775__auto__ = [];
var len__5769__auto___26492 = arguments.length;
var i__5770__auto___26493 = (0);
while(true){
if((i__5770__auto___26493 < len__5769__auto___26492)){
args__5775__auto__.push((arguments[i__5770__auto___26493]));

var G__26494 = (i__5770__auto___26493 + (1));
i__5770__auto___26493 = G__26494;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__26207__auto__,rest__26208__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__26207__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26208__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq26351){
var G__26352 = cljs.core.first(seq26351);
var seq26351__$1 = cljs.core.next(seq26351);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26352,seq26351__$1);
}));


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___26495 = arguments.length;
var i__5770__auto___26496 = (0);
while(true){
if((i__5770__auto___26496 < len__5769__auto___26495)){
args__5775__auto__.push((arguments[i__5770__auto___26496]));

var G__26497 = (i__5770__auto___26496 + (1));
i__5770__auto___26496 = G__26497;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__26207__auto__,rest__26208__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__26207__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26208__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq26355){
var G__26356 = cljs.core.first(seq26355);
var seq26355__$1 = cljs.core.next(seq26355);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26356,seq26355__$1);
}));


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__5775__auto__ = [];
var len__5769__auto___26503 = arguments.length;
var i__5770__auto___26504 = (0);
while(true){
if((i__5770__auto___26504 < len__5769__auto___26503)){
args__5775__auto__.push((arguments[i__5770__auto___26504]));

var G__26505 = (i__5770__auto___26504 + (1));
i__5770__auto___26504 = G__26505;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__26207__auto__,rest__26208__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__26207__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26208__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq26357){
var G__26358 = cljs.core.first(seq26357);
var seq26357__$1 = cljs.core.next(seq26357);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26358,seq26357__$1);
}));

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__5775__auto__ = [];
var len__5769__auto___26507 = arguments.length;
var i__5770__auto___26508 = (0);
while(true){
if((i__5770__auto___26508 < len__5769__auto___26507)){
args__5775__auto__.push((arguments[i__5770__auto___26508]));

var G__26509 = (i__5770__auto___26508 + (1));
i__5770__auto___26508 = G__26509;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__26202__auto__,rest__26203__auto__){
var convert_case__26204__auto__ = (function (p1__26201__26205__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__26201__26205__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26203__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__26202__auto__,convert_case__26204__auto__);
}));

(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq26364){
var G__26365 = cljs.core.first(seq26364);
var seq26364__$1 = cljs.core.next(seq26364);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26365,seq26364__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__5775__auto__ = [];
var len__5769__auto___26510 = arguments.length;
var i__5770__auto___26511 = (0);
while(true){
if((i__5770__auto___26511 < len__5769__auto___26510)){
args__5775__auto__.push((arguments[i__5770__auto___26511]));

var G__26512 = (i__5770__auto___26511 + (1));
i__5770__auto___26511 = G__26512;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__26207__auto__,rest__26208__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__26207__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26208__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq26366){
var G__26367 = cljs.core.first(seq26366);
var seq26366__$1 = cljs.core.next(seq26366);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26367,seq26366__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___26513 = arguments.length;
var i__5770__auto___26514 = (0);
while(true){
if((i__5770__auto___26514 < len__5769__auto___26513)){
args__5775__auto__.push((arguments[i__5770__auto___26514]));

var G__26515 = (i__5770__auto___26514 + (1));
i__5770__auto___26514 = G__26515;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__26207__auto__,rest__26208__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__26207__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26208__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq26368){
var G__26369 = cljs.core.first(seq26368);
var seq26368__$1 = cljs.core.next(seq26368);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26369,seq26368__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__5775__auto__ = [];
var len__5769__auto___26519 = arguments.length;
var i__5770__auto___26520 = (0);
while(true){
if((i__5770__auto___26520 < len__5769__auto___26519)){
args__5775__auto__.push((arguments[i__5770__auto___26520]));

var G__26523 = (i__5770__auto___26520 + (1));
i__5770__auto___26520 = G__26523;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__26207__auto__,rest__26208__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__26207__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26208__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq26370){
var G__26371 = cljs.core.first(seq26370);
var seq26370__$1 = cljs.core.next(seq26370);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26371,seq26370__$1);
}));

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__5775__auto__ = [];
var len__5769__auto___26525 = arguments.length;
var i__5770__auto___26526 = (0);
while(true){
if((i__5770__auto___26526 < len__5769__auto___26525)){
args__5775__auto__.push((arguments[i__5770__auto___26526]));

var G__26527 = (i__5770__auto___26526 + (1));
i__5770__auto___26526 = G__26527;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__26202__auto__,rest__26203__auto__){
var convert_case__26204__auto__ = (function (p1__26201__26205__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__26201__26205__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26203__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__26202__auto__,convert_case__26204__auto__);
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq26377){
var G__26378 = cljs.core.first(seq26377);
var seq26377__$1 = cljs.core.next(seq26377);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26378,seq26377__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__5775__auto__ = [];
var len__5769__auto___26531 = arguments.length;
var i__5770__auto___26532 = (0);
while(true){
if((i__5770__auto___26532 < len__5769__auto___26531)){
args__5775__auto__.push((arguments[i__5770__auto___26532]));

var G__26534 = (i__5770__auto___26532 + (1));
i__5770__auto___26532 = G__26534;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__26207__auto__,rest__26208__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__26207__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26208__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq26379){
var G__26380 = cljs.core.first(seq26379);
var seq26379__$1 = cljs.core.next(seq26379);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26380,seq26379__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___26538 = arguments.length;
var i__5770__auto___26539 = (0);
while(true){
if((i__5770__auto___26539 < len__5769__auto___26538)){
args__5775__auto__.push((arguments[i__5770__auto___26539]));

var G__26540 = (i__5770__auto___26539 + (1));
i__5770__auto___26539 = G__26540;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__26207__auto__,rest__26208__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__26207__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26208__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq26392){
var G__26393 = cljs.core.first(seq26392);
var seq26392__$1 = cljs.core.next(seq26392);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26393,seq26392__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__5775__auto__ = [];
var len__5769__auto___26542 = arguments.length;
var i__5770__auto___26543 = (0);
while(true){
if((i__5770__auto___26543 < len__5769__auto___26542)){
args__5775__auto__.push((arguments[i__5770__auto___26543]));

var G__26544 = (i__5770__auto___26543 + (1));
i__5770__auto___26543 = G__26544;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__26207__auto__,rest__26208__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__26207__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26208__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq26396){
var G__26397 = cljs.core.first(seq26396);
var seq26396__$1 = cljs.core.next(seq26396);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26397,seq26396__$1);
}));


//# sourceMappingURL=camel_snake_kebab.core.js.map
