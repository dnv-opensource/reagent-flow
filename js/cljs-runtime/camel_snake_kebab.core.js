goog.provide('camel_snake_kebab.core');



























/**
 * Converts the case of a string according to the rule for the first
 *   word, remaining words, and the separator.
 */
camel_snake_kebab.core.convert_case = (function camel_snake_kebab$core$convert_case(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26634 = arguments.length;
var i__5727__auto___26635 = (0);
while(true){
if((i__5727__auto___26635 < len__5726__auto___26634)){
args__5732__auto__.push((arguments[i__5727__auto___26635]));

var G__26636 = (i__5727__auto___26635 + (1));
i__5727__auto___26635 = G__26636;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((4) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5733__auto__);
});

(camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,rest){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,first_fn,rest_fn,sep,s,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest], 0));
}));

(camel_snake_kebab.core.convert_case.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq26470){
var G__26471 = cljs.core.first(seq26470);
var seq26470__$1 = cljs.core.next(seq26470);
var G__26472 = cljs.core.first(seq26470__$1);
var seq26470__$2 = cljs.core.next(seq26470__$1);
var G__26473 = cljs.core.first(seq26470__$2);
var seq26470__$3 = cljs.core.next(seq26470__$2);
var G__26474 = cljs.core.first(seq26470__$3);
var seq26470__$4 = cljs.core.next(seq26470__$3);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26471,G__26472,G__26473,G__26474,seq26470__$4);
}));

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26639 = arguments.length;
var i__5727__auto___26640 = (0);
while(true){
if((i__5727__auto___26640 < len__5726__auto___26639)){
args__5732__auto__.push((arguments[i__5727__auto___26640]));

var G__26641 = (i__5727__auto___26640 + (1));
i__5727__auto___26640 = G__26641;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__26424__auto__,rest__26425__auto__){
var convert_case__26426__auto__ = (function (p1__26423__26427__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__26423__26427__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26425__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__26424__auto__,convert_case__26426__auto__);
}));

(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq26483){
var G__26484 = cljs.core.first(seq26483);
var seq26483__$1 = cljs.core.next(seq26483);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26484,seq26483__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26642 = arguments.length;
var i__5727__auto___26643 = (0);
while(true){
if((i__5727__auto___26643 < len__5726__auto___26642)){
args__5732__auto__.push((arguments[i__5727__auto___26643]));

var G__26644 = (i__5727__auto___26643 + (1));
i__5727__auto___26643 = G__26644;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__26430__auto__,rest__26431__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__26430__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26431__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq26492){
var G__26493 = cljs.core.first(seq26492);
var seq26492__$1 = cljs.core.next(seq26492);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26493,seq26492__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26645 = arguments.length;
var i__5727__auto___26646 = (0);
while(true){
if((i__5727__auto___26646 < len__5726__auto___26645)){
args__5732__auto__.push((arguments[i__5727__auto___26646]));

var G__26647 = (i__5727__auto___26646 + (1));
i__5727__auto___26646 = G__26647;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__26430__auto__,rest__26431__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__26430__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26431__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq26501){
var G__26502 = cljs.core.first(seq26501);
var seq26501__$1 = cljs.core.next(seq26501);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26502,seq26501__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26648 = arguments.length;
var i__5727__auto___26649 = (0);
while(true){
if((i__5727__auto___26649 < len__5726__auto___26648)){
args__5732__auto__.push((arguments[i__5727__auto___26649]));

var G__26650 = (i__5727__auto___26649 + (1));
i__5727__auto___26649 = G__26650;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__26430__auto__,rest__26431__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__26430__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26431__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq26510){
var G__26511 = cljs.core.first(seq26510);
var seq26510__$1 = cljs.core.next(seq26510);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26511,seq26510__$1);
}));

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26656 = arguments.length;
var i__5727__auto___26657 = (0);
while(true){
if((i__5727__auto___26657 < len__5726__auto___26656)){
args__5732__auto__.push((arguments[i__5727__auto___26657]));

var G__26658 = (i__5727__auto___26657 + (1));
i__5727__auto___26657 = G__26658;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__26424__auto__,rest__26425__auto__){
var convert_case__26426__auto__ = (function (p1__26423__26427__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__26423__26427__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26425__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__26424__auto__,convert_case__26426__auto__);
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq26527){
var G__26528 = cljs.core.first(seq26527);
var seq26527__$1 = cljs.core.next(seq26527);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26528,seq26527__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26659 = arguments.length;
var i__5727__auto___26660 = (0);
while(true){
if((i__5727__auto___26660 < len__5726__auto___26659)){
args__5732__auto__.push((arguments[i__5727__auto___26660]));

var G__26661 = (i__5727__auto___26660 + (1));
i__5727__auto___26660 = G__26661;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__26430__auto__,rest__26431__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__26430__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26431__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq26531){
var G__26533 = cljs.core.first(seq26531);
var seq26531__$1 = cljs.core.next(seq26531);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26533,seq26531__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26662 = arguments.length;
var i__5727__auto___26663 = (0);
while(true){
if((i__5727__auto___26663 < len__5726__auto___26662)){
args__5732__auto__.push((arguments[i__5727__auto___26663]));

var G__26664 = (i__5727__auto___26663 + (1));
i__5727__auto___26663 = G__26664;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__26430__auto__,rest__26431__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__26430__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26431__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq26537){
var G__26538 = cljs.core.first(seq26537);
var seq26537__$1 = cljs.core.next(seq26537);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26538,seq26537__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26665 = arguments.length;
var i__5727__auto___26666 = (0);
while(true){
if((i__5727__auto___26666 < len__5726__auto___26665)){
args__5732__auto__.push((arguments[i__5727__auto___26666]));

var G__26667 = (i__5727__auto___26666 + (1));
i__5727__auto___26666 = G__26667;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__26430__auto__,rest__26431__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__26430__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26431__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq26550){
var G__26551 = cljs.core.first(seq26550);
var seq26550__$1 = cljs.core.next(seq26550);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26551,seq26550__$1);
}));

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26673 = arguments.length;
var i__5727__auto___26674 = (0);
while(true){
if((i__5727__auto___26674 < len__5726__auto___26673)){
args__5732__auto__.push((arguments[i__5727__auto___26674]));

var G__26675 = (i__5727__auto___26674 + (1));
i__5727__auto___26674 = G__26675;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__26424__auto__,rest__26425__auto__){
var convert_case__26426__auto__ = (function (p1__26423__26427__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__26423__26427__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26425__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__26424__auto__,convert_case__26426__auto__);
}));

(camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq26552){
var G__26553 = cljs.core.first(seq26552);
var seq26552__$1 = cljs.core.next(seq26552);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26553,seq26552__$1);
}));


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26677 = arguments.length;
var i__5727__auto___26678 = (0);
while(true){
if((i__5727__auto___26678 < len__5726__auto___26677)){
args__5732__auto__.push((arguments[i__5727__auto___26678]));

var G__26679 = (i__5727__auto___26678 + (1));
i__5727__auto___26678 = G__26679;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__26430__auto__,rest__26431__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__26430__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26431__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq26557){
var G__26558 = cljs.core.first(seq26557);
var seq26557__$1 = cljs.core.next(seq26557);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26558,seq26557__$1);
}));


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26680 = arguments.length;
var i__5727__auto___26681 = (0);
while(true){
if((i__5727__auto___26681 < len__5726__auto___26680)){
args__5732__auto__.push((arguments[i__5727__auto___26681]));

var G__26685 = (i__5727__auto___26681 + (1));
i__5727__auto___26681 = G__26685;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__26430__auto__,rest__26431__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__26430__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26431__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq26562){
var G__26563 = cljs.core.first(seq26562);
var seq26562__$1 = cljs.core.next(seq26562);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26563,seq26562__$1);
}));


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26686 = arguments.length;
var i__5727__auto___26687 = (0);
while(true){
if((i__5727__auto___26687 < len__5726__auto___26686)){
args__5732__auto__.push((arguments[i__5727__auto___26687]));

var G__26688 = (i__5727__auto___26687 + (1));
i__5727__auto___26687 = G__26688;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__26430__auto__,rest__26431__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__26430__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26431__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq26568){
var G__26569 = cljs.core.first(seq26568);
var seq26568__$1 = cljs.core.next(seq26568);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26569,seq26568__$1);
}));

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26689 = arguments.length;
var i__5727__auto___26690 = (0);
while(true){
if((i__5727__auto___26690 < len__5726__auto___26689)){
args__5732__auto__.push((arguments[i__5727__auto___26690]));

var G__26691 = (i__5727__auto___26690 + (1));
i__5727__auto___26690 = G__26691;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__26424__auto__,rest__26425__auto__){
var convert_case__26426__auto__ = (function (p1__26423__26427__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__26423__26427__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26425__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__26424__auto__,convert_case__26426__auto__);
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq26570){
var G__26571 = cljs.core.first(seq26570);
var seq26570__$1 = cljs.core.next(seq26570);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26571,seq26570__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26692 = arguments.length;
var i__5727__auto___26694 = (0);
while(true){
if((i__5727__auto___26694 < len__5726__auto___26692)){
args__5732__auto__.push((arguments[i__5727__auto___26694]));

var G__26698 = (i__5727__auto___26694 + (1));
i__5727__auto___26694 = G__26698;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__26430__auto__,rest__26431__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__26430__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26431__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq26576){
var G__26577 = cljs.core.first(seq26576);
var seq26576__$1 = cljs.core.next(seq26576);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26577,seq26576__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26700 = arguments.length;
var i__5727__auto___26701 = (0);
while(true){
if((i__5727__auto___26701 < len__5726__auto___26700)){
args__5732__auto__.push((arguments[i__5727__auto___26701]));

var G__26702 = (i__5727__auto___26701 + (1));
i__5727__auto___26701 = G__26702;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__26430__auto__,rest__26431__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__26430__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26431__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq26578){
var G__26579 = cljs.core.first(seq26578);
var seq26578__$1 = cljs.core.next(seq26578);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26579,seq26578__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26703 = arguments.length;
var i__5727__auto___26704 = (0);
while(true){
if((i__5727__auto___26704 < len__5726__auto___26703)){
args__5732__auto__.push((arguments[i__5727__auto___26704]));

var G__26705 = (i__5727__auto___26704 + (1));
i__5727__auto___26704 = G__26705;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__26430__auto__,rest__26431__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__26430__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26431__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq26583){
var G__26584 = cljs.core.first(seq26583);
var seq26583__$1 = cljs.core.next(seq26583);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26584,seq26583__$1);
}));

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26706 = arguments.length;
var i__5727__auto___26707 = (0);
while(true){
if((i__5727__auto___26707 < len__5726__auto___26706)){
args__5732__auto__.push((arguments[i__5727__auto___26707]));

var G__26708 = (i__5727__auto___26707 + (1));
i__5727__auto___26707 = G__26708;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__26424__auto__,rest__26425__auto__){
var convert_case__26426__auto__ = (function (p1__26423__26427__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__26423__26427__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26425__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__26424__auto__,convert_case__26426__auto__);
}));

(camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq26585){
var G__26586 = cljs.core.first(seq26585);
var seq26585__$1 = cljs.core.next(seq26585);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26586,seq26585__$1);
}));


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26709 = arguments.length;
var i__5727__auto___26710 = (0);
while(true){
if((i__5727__auto___26710 < len__5726__auto___26709)){
args__5732__auto__.push((arguments[i__5727__auto___26710]));

var G__26711 = (i__5727__auto___26710 + (1));
i__5727__auto___26710 = G__26711;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__26430__auto__,rest__26431__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__26430__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26431__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq26587){
var G__26588 = cljs.core.first(seq26587);
var seq26587__$1 = cljs.core.next(seq26587);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26588,seq26587__$1);
}));


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26717 = arguments.length;
var i__5727__auto___26718 = (0);
while(true){
if((i__5727__auto___26718 < len__5726__auto___26717)){
args__5732__auto__.push((arguments[i__5727__auto___26718]));

var G__26719 = (i__5727__auto___26718 + (1));
i__5727__auto___26718 = G__26719;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__26430__auto__,rest__26431__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__26430__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26431__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq26592){
var G__26593 = cljs.core.first(seq26592);
var seq26592__$1 = cljs.core.next(seq26592);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26593,seq26592__$1);
}));


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26721 = arguments.length;
var i__5727__auto___26722 = (0);
while(true){
if((i__5727__auto___26722 < len__5726__auto___26721)){
args__5732__auto__.push((arguments[i__5727__auto___26722]));

var G__26723 = (i__5727__auto___26722 + (1));
i__5727__auto___26722 = G__26723;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__26430__auto__,rest__26431__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__26430__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26431__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq26594){
var G__26595 = cljs.core.first(seq26594);
var seq26594__$1 = cljs.core.next(seq26594);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26595,seq26594__$1);
}));

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26724 = arguments.length;
var i__5727__auto___26725 = (0);
while(true){
if((i__5727__auto___26725 < len__5726__auto___26724)){
args__5732__auto__.push((arguments[i__5727__auto___26725]));

var G__26726 = (i__5727__auto___26725 + (1));
i__5727__auto___26725 = G__26726;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__26424__auto__,rest__26425__auto__){
var convert_case__26426__auto__ = (function (p1__26423__26427__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__26423__26427__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26425__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__26424__auto__,convert_case__26426__auto__);
}));

(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq26606){
var G__26607 = cljs.core.first(seq26606);
var seq26606__$1 = cljs.core.next(seq26606);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26607,seq26606__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26727 = arguments.length;
var i__5727__auto___26728 = (0);
while(true){
if((i__5727__auto___26728 < len__5726__auto___26727)){
args__5732__auto__.push((arguments[i__5727__auto___26728]));

var G__26729 = (i__5727__auto___26728 + (1));
i__5727__auto___26728 = G__26729;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__26430__auto__,rest__26431__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__26430__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26431__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq26608){
var G__26609 = cljs.core.first(seq26608);
var seq26608__$1 = cljs.core.next(seq26608);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26609,seq26608__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26733 = arguments.length;
var i__5727__auto___26734 = (0);
while(true){
if((i__5727__auto___26734 < len__5726__auto___26733)){
args__5732__auto__.push((arguments[i__5727__auto___26734]));

var G__26735 = (i__5727__auto___26734 + (1));
i__5727__auto___26734 = G__26735;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__26430__auto__,rest__26431__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__26430__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26431__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq26616){
var G__26617 = cljs.core.first(seq26616);
var seq26616__$1 = cljs.core.next(seq26616);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26617,seq26616__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26736 = arguments.length;
var i__5727__auto___26737 = (0);
while(true){
if((i__5727__auto___26737 < len__5726__auto___26736)){
args__5732__auto__.push((arguments[i__5727__auto___26737]));

var G__26738 = (i__5727__auto___26737 + (1));
i__5727__auto___26737 = G__26738;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__26430__auto__,rest__26431__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__26430__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26431__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq26618){
var G__26619 = cljs.core.first(seq26618);
var seq26618__$1 = cljs.core.next(seq26618);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26619,seq26618__$1);
}));

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26739 = arguments.length;
var i__5727__auto___26740 = (0);
while(true){
if((i__5727__auto___26740 < len__5726__auto___26739)){
args__5732__auto__.push((arguments[i__5727__auto___26740]));

var G__26741 = (i__5727__auto___26740 + (1));
i__5727__auto___26740 = G__26741;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__26424__auto__,rest__26425__auto__){
var convert_case__26426__auto__ = (function (p1__26423__26427__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__26423__26427__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26425__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__26424__auto__,convert_case__26426__auto__);
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq26623){
var G__26624 = cljs.core.first(seq26623);
var seq26623__$1 = cljs.core.next(seq26623);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26624,seq26623__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26743 = arguments.length;
var i__5727__auto___26744 = (0);
while(true){
if((i__5727__auto___26744 < len__5726__auto___26743)){
args__5732__auto__.push((arguments[i__5727__auto___26744]));

var G__26745 = (i__5727__auto___26744 + (1));
i__5727__auto___26744 = G__26745;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__26430__auto__,rest__26431__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__26430__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26431__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq26628){
var G__26629 = cljs.core.first(seq26628);
var seq26628__$1 = cljs.core.next(seq26628);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26629,seq26628__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26746 = arguments.length;
var i__5727__auto___26748 = (0);
while(true){
if((i__5727__auto___26748 < len__5726__auto___26746)){
args__5732__auto__.push((arguments[i__5727__auto___26748]));

var G__26752 = (i__5727__auto___26748 + (1));
i__5727__auto___26748 = G__26752;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__26430__auto__,rest__26431__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__26430__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26431__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq26630){
var G__26631 = cljs.core.first(seq26630);
var seq26630__$1 = cljs.core.next(seq26630);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26631,seq26630__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26754 = arguments.length;
var i__5727__auto___26755 = (0);
while(true){
if((i__5727__auto___26755 < len__5726__auto___26754)){
args__5732__auto__.push((arguments[i__5727__auto___26755]));

var G__26756 = (i__5727__auto___26755 + (1));
i__5727__auto___26755 = G__26756;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__26430__auto__,rest__26431__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__26430__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26431__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq26632){
var G__26633 = cljs.core.first(seq26632);
var seq26632__$1 = cljs.core.next(seq26632);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26633,seq26632__$1);
}));


//# sourceMappingURL=camel_snake_kebab.core.js.map
