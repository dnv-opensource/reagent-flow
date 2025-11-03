goog.provide('camel_snake_kebab.core');



























/**
 * Converts the case of a string according to the rule for the first
 *   word, remaining words, and the separator.
 */
camel_snake_kebab.core.convert_case = (function camel_snake_kebab$core$convert_case(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26631 = arguments.length;
var i__5727__auto___26632 = (0);
while(true){
if((i__5727__auto___26632 < len__5726__auto___26631)){
args__5732__auto__.push((arguments[i__5727__auto___26632]));

var G__26633 = (i__5727__auto___26632 + (1));
i__5727__auto___26632 = G__26633;
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
(camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq26465){
var G__26466 = cljs.core.first(seq26465);
var seq26465__$1 = cljs.core.next(seq26465);
var G__26467 = cljs.core.first(seq26465__$1);
var seq26465__$2 = cljs.core.next(seq26465__$1);
var G__26468 = cljs.core.first(seq26465__$2);
var seq26465__$3 = cljs.core.next(seq26465__$2);
var G__26469 = cljs.core.first(seq26465__$3);
var seq26465__$4 = cljs.core.next(seq26465__$3);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26466,G__26467,G__26468,G__26469,seq26465__$4);
}));

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
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

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__26425__auto__,rest__26426__auto__){
var convert_case__26427__auto__ = (function (p1__26424__26428__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__26424__26428__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26426__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__26425__auto__,convert_case__26427__auto__);
}));

(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq26478){
var G__26479 = cljs.core.first(seq26478);
var seq26478__$1 = cljs.core.next(seq26478);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26479,seq26478__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26640 = arguments.length;
var i__5727__auto___26641 = (0);
while(true){
if((i__5727__auto___26641 < len__5726__auto___26640)){
args__5732__auto__.push((arguments[i__5727__auto___26641]));

var G__26642 = (i__5727__auto___26641 + (1));
i__5727__auto___26641 = G__26642;
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
(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq26484){
var G__26485 = cljs.core.first(seq26484);
var seq26484__$1 = cljs.core.next(seq26484);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26485,seq26484__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26643 = arguments.length;
var i__5727__auto___26644 = (0);
while(true){
if((i__5727__auto___26644 < len__5726__auto___26643)){
args__5732__auto__.push((arguments[i__5727__auto___26644]));

var G__26645 = (i__5727__auto___26644 + (1));
i__5727__auto___26644 = G__26645;
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
(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq26490){
var G__26491 = cljs.core.first(seq26490);
var seq26490__$1 = cljs.core.next(seq26490);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26491,seq26490__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26646 = arguments.length;
var i__5727__auto___26647 = (0);
while(true){
if((i__5727__auto___26647 < len__5726__auto___26646)){
args__5732__auto__.push((arguments[i__5727__auto___26647]));

var G__26648 = (i__5727__auto___26647 + (1));
i__5727__auto___26647 = G__26648;
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
(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq26494){
var G__26495 = cljs.core.first(seq26494);
var seq26494__$1 = cljs.core.next(seq26494);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26495,seq26494__$1);
}));

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26649 = arguments.length;
var i__5727__auto___26650 = (0);
while(true){
if((i__5727__auto___26650 < len__5726__auto___26649)){
args__5732__auto__.push((arguments[i__5727__auto___26650]));

var G__26651 = (i__5727__auto___26650 + (1));
i__5727__auto___26650 = G__26651;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__26425__auto__,rest__26426__auto__){
var convert_case__26427__auto__ = (function (p1__26424__26428__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__26424__26428__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26426__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__26425__auto__,convert_case__26427__auto__);
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq26497){
var G__26498 = cljs.core.first(seq26497);
var seq26497__$1 = cljs.core.next(seq26497);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26498,seq26497__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26652 = arguments.length;
var i__5727__auto___26653 = (0);
while(true){
if((i__5727__auto___26653 < len__5726__auto___26652)){
args__5732__auto__.push((arguments[i__5727__auto___26653]));

var G__26654 = (i__5727__auto___26653 + (1));
i__5727__auto___26653 = G__26654;
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
(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq26505){
var G__26506 = cljs.core.first(seq26505);
var seq26505__$1 = cljs.core.next(seq26505);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26506,seq26505__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26655 = arguments.length;
var i__5727__auto___26656 = (0);
while(true){
if((i__5727__auto___26656 < len__5726__auto___26655)){
args__5732__auto__.push((arguments[i__5727__auto___26656]));

var G__26657 = (i__5727__auto___26656 + (1));
i__5727__auto___26656 = G__26657;
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
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq26512){
var G__26513 = cljs.core.first(seq26512);
var seq26512__$1 = cljs.core.next(seq26512);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26513,seq26512__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26658 = arguments.length;
var i__5727__auto___26659 = (0);
while(true){
if((i__5727__auto___26659 < len__5726__auto___26658)){
args__5732__auto__.push((arguments[i__5727__auto___26659]));

var G__26660 = (i__5727__auto___26659 + (1));
i__5727__auto___26659 = G__26660;
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
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq26514){
var G__26515 = cljs.core.first(seq26514);
var seq26514__$1 = cljs.core.next(seq26514);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26515,seq26514__$1);
}));

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26661 = arguments.length;
var i__5727__auto___26662 = (0);
while(true){
if((i__5727__auto___26662 < len__5726__auto___26661)){
args__5732__auto__.push((arguments[i__5727__auto___26662]));

var G__26663 = (i__5727__auto___26662 + (1));
i__5727__auto___26662 = G__26663;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__26425__auto__,rest__26426__auto__){
var convert_case__26427__auto__ = (function (p1__26424__26428__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__26424__26428__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26426__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__26425__auto__,convert_case__26427__auto__);
}));

(camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq26520){
var G__26521 = cljs.core.first(seq26520);
var seq26520__$1 = cljs.core.next(seq26520);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26521,seq26520__$1);
}));


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26664 = arguments.length;
var i__5727__auto___26665 = (0);
while(true){
if((i__5727__auto___26665 < len__5726__auto___26664)){
args__5732__auto__.push((arguments[i__5727__auto___26665]));

var G__26666 = (i__5727__auto___26665 + (1));
i__5727__auto___26665 = G__26666;
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
(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq26529){
var G__26530 = cljs.core.first(seq26529);
var seq26529__$1 = cljs.core.next(seq26529);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26530,seq26529__$1);
}));


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26667 = arguments.length;
var i__5727__auto___26668 = (0);
while(true){
if((i__5727__auto___26668 < len__5726__auto___26667)){
args__5732__auto__.push((arguments[i__5727__auto___26668]));

var G__26669 = (i__5727__auto___26668 + (1));
i__5727__auto___26668 = G__26669;
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
(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq26540){
var G__26541 = cljs.core.first(seq26540);
var seq26540__$1 = cljs.core.next(seq26540);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26541,seq26540__$1);
}));


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26670 = arguments.length;
var i__5727__auto___26671 = (0);
while(true){
if((i__5727__auto___26671 < len__5726__auto___26670)){
args__5732__auto__.push((arguments[i__5727__auto___26671]));

var G__26672 = (i__5727__auto___26671 + (1));
i__5727__auto___26671 = G__26672;
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
(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq26548){
var G__26549 = cljs.core.first(seq26548);
var seq26548__$1 = cljs.core.next(seq26548);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26549,seq26548__$1);
}));

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
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
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__26425__auto__,rest__26426__auto__){
var convert_case__26427__auto__ = (function (p1__26424__26428__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__26424__26428__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26426__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__26425__auto__,convert_case__26427__auto__);
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq26553){
var G__26554 = cljs.core.first(seq26553);
var seq26553__$1 = cljs.core.next(seq26553);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26554,seq26553__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26678 = arguments.length;
var i__5727__auto___26679 = (0);
while(true){
if((i__5727__auto___26679 < len__5726__auto___26678)){
args__5732__auto__.push((arguments[i__5727__auto___26679]));

var G__26680 = (i__5727__auto___26679 + (1));
i__5727__auto___26679 = G__26680;
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
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq26558){
var G__26559 = cljs.core.first(seq26558);
var seq26558__$1 = cljs.core.next(seq26558);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26559,seq26558__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26681 = arguments.length;
var i__5727__auto___26682 = (0);
while(true){
if((i__5727__auto___26682 < len__5726__auto___26681)){
args__5732__auto__.push((arguments[i__5727__auto___26682]));

var G__26683 = (i__5727__auto___26682 + (1));
i__5727__auto___26682 = G__26683;
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
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq26567){
var G__26568 = cljs.core.first(seq26567);
var seq26567__$1 = cljs.core.next(seq26567);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26568,seq26567__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26684 = arguments.length;
var i__5727__auto___26685 = (0);
while(true){
if((i__5727__auto___26685 < len__5726__auto___26684)){
args__5732__auto__.push((arguments[i__5727__auto___26685]));

var G__26687 = (i__5727__auto___26685 + (1));
i__5727__auto___26685 = G__26687;
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
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq26576){
var G__26577 = cljs.core.first(seq26576);
var seq26576__$1 = cljs.core.next(seq26576);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26577,seq26576__$1);
}));

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26692 = arguments.length;
var i__5727__auto___26693 = (0);
while(true){
if((i__5727__auto___26693 < len__5726__auto___26692)){
args__5732__auto__.push((arguments[i__5727__auto___26693]));

var G__26694 = (i__5727__auto___26693 + (1));
i__5727__auto___26693 = G__26694;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__26425__auto__,rest__26426__auto__){
var convert_case__26427__auto__ = (function (p1__26424__26428__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__26424__26428__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26426__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__26425__auto__,convert_case__26427__auto__);
}));

(camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq26578){
var G__26579 = cljs.core.first(seq26578);
var seq26578__$1 = cljs.core.next(seq26578);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26579,seq26578__$1);
}));


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26695 = arguments.length;
var i__5727__auto___26696 = (0);
while(true){
if((i__5727__auto___26696 < len__5726__auto___26695)){
args__5732__auto__.push((arguments[i__5727__auto___26696]));

var G__26697 = (i__5727__auto___26696 + (1));
i__5727__auto___26696 = G__26697;
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
(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq26584){
var G__26585 = cljs.core.first(seq26584);
var seq26584__$1 = cljs.core.next(seq26584);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26585,seq26584__$1);
}));


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26704 = arguments.length;
var i__5727__auto___26705 = (0);
while(true){
if((i__5727__auto___26705 < len__5726__auto___26704)){
args__5732__auto__.push((arguments[i__5727__auto___26705]));

var G__26706 = (i__5727__auto___26705 + (1));
i__5727__auto___26705 = G__26706;
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
(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq26589){
var G__26590 = cljs.core.first(seq26589);
var seq26589__$1 = cljs.core.next(seq26589);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26590,seq26589__$1);
}));


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26707 = arguments.length;
var i__5727__auto___26708 = (0);
while(true){
if((i__5727__auto___26708 < len__5726__auto___26707)){
args__5732__auto__.push((arguments[i__5727__auto___26708]));

var G__26709 = (i__5727__auto___26708 + (1));
i__5727__auto___26708 = G__26709;
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
(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq26591){
var G__26592 = cljs.core.first(seq26591);
var seq26591__$1 = cljs.core.next(seq26591);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26592,seq26591__$1);
}));

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26710 = arguments.length;
var i__5727__auto___26711 = (0);
while(true){
if((i__5727__auto___26711 < len__5726__auto___26710)){
args__5732__auto__.push((arguments[i__5727__auto___26711]));

var G__26712 = (i__5727__auto___26711 + (1));
i__5727__auto___26711 = G__26712;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__26425__auto__,rest__26426__auto__){
var convert_case__26427__auto__ = (function (p1__26424__26428__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__26424__26428__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26426__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__26425__auto__,convert_case__26427__auto__);
}));

(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq26593){
var G__26594 = cljs.core.first(seq26593);
var seq26593__$1 = cljs.core.next(seq26593);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26594,seq26593__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26713 = arguments.length;
var i__5727__auto___26714 = (0);
while(true){
if((i__5727__auto___26714 < len__5726__auto___26713)){
args__5732__auto__.push((arguments[i__5727__auto___26714]));

var G__26718 = (i__5727__auto___26714 + (1));
i__5727__auto___26714 = G__26718;
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
(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq26595){
var G__26596 = cljs.core.first(seq26595);
var seq26595__$1 = cljs.core.next(seq26595);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26596,seq26595__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26719 = arguments.length;
var i__5727__auto___26720 = (0);
while(true){
if((i__5727__auto___26720 < len__5726__auto___26719)){
args__5732__auto__.push((arguments[i__5727__auto___26720]));

var G__26721 = (i__5727__auto___26720 + (1));
i__5727__auto___26720 = G__26721;
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
(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq26600){
var G__26601 = cljs.core.first(seq26600);
var seq26600__$1 = cljs.core.next(seq26600);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26601,seq26600__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26722 = arguments.length;
var i__5727__auto___26723 = (0);
while(true){
if((i__5727__auto___26723 < len__5726__auto___26722)){
args__5732__auto__.push((arguments[i__5727__auto___26723]));

var G__26724 = (i__5727__auto___26723 + (1));
i__5727__auto___26723 = G__26724;
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
(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq26602){
var G__26603 = cljs.core.first(seq26602);
var seq26602__$1 = cljs.core.next(seq26602);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26603,seq26602__$1);
}));

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26725 = arguments.length;
var i__5727__auto___26726 = (0);
while(true){
if((i__5727__auto___26726 < len__5726__auto___26725)){
args__5732__auto__.push((arguments[i__5727__auto___26726]));

var G__26727 = (i__5727__auto___26726 + (1));
i__5727__auto___26726 = G__26727;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__26425__auto__,rest__26426__auto__){
var convert_case__26427__auto__ = (function (p1__26424__26428__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__26424__26428__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26426__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__26425__auto__,convert_case__26427__auto__);
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq26614){
var G__26615 = cljs.core.first(seq26614);
var seq26614__$1 = cljs.core.next(seq26614);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26615,seq26614__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
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
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__26430__auto__,rest__26431__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__26430__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26431__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq26616){
var G__26617 = cljs.core.first(seq26616);
var seq26616__$1 = cljs.core.next(seq26616);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26617,seq26616__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
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
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__26430__auto__,rest__26431__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__26430__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26431__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq26621){
var G__26622 = cljs.core.first(seq26621);
var seq26621__$1 = cljs.core.next(seq26621);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26622,seq26621__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
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
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__26430__auto__,rest__26431__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__26430__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26431__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq26626){
var G__26627 = cljs.core.first(seq26626);
var seq26626__$1 = cljs.core.next(seq26626);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26627,seq26626__$1);
}));


//# sourceMappingURL=camel_snake_kebab.core.js.map
