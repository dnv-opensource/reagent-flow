goog.provide('camel_snake_kebab.core');



























/**
 * Converts the case of a string according to the rule for the first
 *   word, remaining words, and the separator.
 */
camel_snake_kebab.core.convert_case = (function camel_snake_kebab$core$convert_case(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26681 = arguments.length;
var i__5727__auto___26683 = (0);
while(true){
if((i__5727__auto___26683 < len__5726__auto___26681)){
args__5732__auto__.push((arguments[i__5727__auto___26683]));

var G__26687 = (i__5727__auto___26683 + (1));
i__5727__auto___26683 = G__26687;
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
(camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq26466){
var G__26467 = cljs.core.first(seq26466);
var seq26466__$1 = cljs.core.next(seq26466);
var G__26468 = cljs.core.first(seq26466__$1);
var seq26466__$2 = cljs.core.next(seq26466__$1);
var G__26469 = cljs.core.first(seq26466__$2);
var seq26466__$3 = cljs.core.next(seq26466__$2);
var G__26470 = cljs.core.first(seq26466__$3);
var seq26466__$4 = cljs.core.next(seq26466__$3);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26467,G__26468,G__26469,G__26470,seq26466__$4);
}));

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
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
(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq26483){
var G__26484 = cljs.core.first(seq26483);
var seq26483__$1 = cljs.core.next(seq26483);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26484,seq26483__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
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
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__26430__auto__,rest__26431__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__26430__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26431__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq26496){
var G__26497 = cljs.core.first(seq26496);
var seq26496__$1 = cljs.core.next(seq26496);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26497,seq26496__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
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
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__26430__auto__,rest__26431__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__26430__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26431__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq26508){
var G__26509 = cljs.core.first(seq26508);
var seq26508__$1 = cljs.core.next(seq26508);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26509,seq26508__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26698 = arguments.length;
var i__5727__auto___26699 = (0);
while(true){
if((i__5727__auto___26699 < len__5726__auto___26698)){
args__5732__auto__.push((arguments[i__5727__auto___26699]));

var G__26700 = (i__5727__auto___26699 + (1));
i__5727__auto___26699 = G__26700;
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
(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq26521){
var G__26522 = cljs.core.first(seq26521);
var seq26521__$1 = cljs.core.next(seq26521);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26522,seq26521__$1);
}));

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26701 = arguments.length;
var i__5727__auto___26702 = (0);
while(true){
if((i__5727__auto___26702 < len__5726__auto___26701)){
args__5732__auto__.push((arguments[i__5727__auto___26702]));

var G__26703 = (i__5727__auto___26702 + (1));
i__5727__auto___26702 = G__26703;
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
(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq26535){
var G__26536 = cljs.core.first(seq26535);
var seq26535__$1 = cljs.core.next(seq26535);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26536,seq26535__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
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
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__26430__auto__,rest__26431__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__26430__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26431__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq26549){
var G__26550 = cljs.core.first(seq26549);
var seq26549__$1 = cljs.core.next(seq26549);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26550,seq26549__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
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
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__26430__auto__,rest__26431__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__26430__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26431__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq26562){
var G__26563 = cljs.core.first(seq26562);
var seq26562__$1 = cljs.core.next(seq26562);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26563,seq26562__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26712 = arguments.length;
var i__5727__auto___26713 = (0);
while(true){
if((i__5727__auto___26713 < len__5726__auto___26712)){
args__5732__auto__.push((arguments[i__5727__auto___26713]));

var G__26714 = (i__5727__auto___26713 + (1));
i__5727__auto___26713 = G__26714;
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
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq26567){
var G__26568 = cljs.core.first(seq26567);
var seq26567__$1 = cljs.core.next(seq26567);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26568,seq26567__$1);
}));

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26715 = arguments.length;
var i__5727__auto___26716 = (0);
while(true){
if((i__5727__auto___26716 < len__5726__auto___26715)){
args__5732__auto__.push((arguments[i__5727__auto___26716]));

var G__26717 = (i__5727__auto___26716 + (1));
i__5727__auto___26716 = G__26717;
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
(camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq26575){
var G__26576 = cljs.core.first(seq26575);
var seq26575__$1 = cljs.core.next(seq26575);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26576,seq26575__$1);
}));


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26718 = arguments.length;
var i__5727__auto___26719 = (0);
while(true){
if((i__5727__auto___26719 < len__5726__auto___26718)){
args__5732__auto__.push((arguments[i__5727__auto___26719]));

var G__26721 = (i__5727__auto___26719 + (1));
i__5727__auto___26719 = G__26721;
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
(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq26587){
var G__26588 = cljs.core.first(seq26587);
var seq26587__$1 = cljs.core.next(seq26587);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26588,seq26587__$1);
}));


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
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
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__26430__auto__,rest__26431__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__26430__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26431__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq26592){
var G__26593 = cljs.core.first(seq26592);
var seq26592__$1 = cljs.core.next(seq26592);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26593,seq26592__$1);
}));


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26728 = arguments.length;
var i__5727__auto___26729 = (0);
while(true){
if((i__5727__auto___26729 < len__5726__auto___26728)){
args__5732__auto__.push((arguments[i__5727__auto___26729]));

var G__26730 = (i__5727__auto___26729 + (1));
i__5727__auto___26729 = G__26730;
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
(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq26597){
var G__26598 = cljs.core.first(seq26597);
var seq26597__$1 = cljs.core.next(seq26597);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26598,seq26597__$1);
}));

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
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
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq26602){
var G__26603 = cljs.core.first(seq26602);
var seq26602__$1 = cljs.core.next(seq26602);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26603,seq26602__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
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
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__26430__auto__,rest__26431__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__26430__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26431__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq26604){
var G__26605 = cljs.core.first(seq26604);
var seq26604__$1 = cljs.core.next(seq26604);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26605,seq26604__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
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
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__26430__auto__,rest__26431__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__26430__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26431__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq26608){
var G__26609 = cljs.core.first(seq26608);
var seq26608__$1 = cljs.core.next(seq26608);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26609,seq26608__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
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
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__26430__auto__,rest__26431__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__26430__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__26431__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq26610){
var G__26611 = cljs.core.first(seq26610);
var seq26610__$1 = cljs.core.next(seq26610);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26611,seq26610__$1);
}));

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26747 = arguments.length;
var i__5727__auto___26748 = (0);
while(true){
if((i__5727__auto___26748 < len__5726__auto___26747)){
args__5732__auto__.push((arguments[i__5727__auto___26748]));

var G__26749 = (i__5727__auto___26748 + (1));
i__5727__auto___26748 = G__26749;
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
(camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq26617){
var G__26618 = cljs.core.first(seq26617);
var seq26617__$1 = cljs.core.next(seq26617);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26618,seq26617__$1);
}));


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26750 = arguments.length;
var i__5727__auto___26751 = (0);
while(true){
if((i__5727__auto___26751 < len__5726__auto___26750)){
args__5732__auto__.push((arguments[i__5727__auto___26751]));

var G__26752 = (i__5727__auto___26751 + (1));
i__5727__auto___26751 = G__26752;
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
(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq26628){
var G__26629 = cljs.core.first(seq26628);
var seq26628__$1 = cljs.core.next(seq26628);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26629,seq26628__$1);
}));


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26753 = arguments.length;
var i__5727__auto___26754 = (0);
while(true){
if((i__5727__auto___26754 < len__5726__auto___26753)){
args__5732__auto__.push((arguments[i__5727__auto___26754]));

var G__26755 = (i__5727__auto___26754 + (1));
i__5727__auto___26754 = G__26755;
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
(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq26635){
var G__26636 = cljs.core.first(seq26635);
var seq26635__$1 = cljs.core.next(seq26635);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26636,seq26635__$1);
}));


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26757 = arguments.length;
var i__5727__auto___26758 = (0);
while(true){
if((i__5727__auto___26758 < len__5726__auto___26757)){
args__5732__auto__.push((arguments[i__5727__auto___26758]));

var G__26760 = (i__5727__auto___26758 + (1));
i__5727__auto___26758 = G__26760;
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
(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq26637){
var G__26638 = cljs.core.first(seq26637);
var seq26637__$1 = cljs.core.next(seq26637);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26638,seq26637__$1);
}));

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26761 = arguments.length;
var i__5727__auto___26762 = (0);
while(true){
if((i__5727__auto___26762 < len__5726__auto___26761)){
args__5732__auto__.push((arguments[i__5727__auto___26762]));

var G__26763 = (i__5727__auto___26762 + (1));
i__5727__auto___26762 = G__26763;
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
(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq26645){
var G__26646 = cljs.core.first(seq26645);
var seq26645__$1 = cljs.core.next(seq26645);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26646,seq26645__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26764 = arguments.length;
var i__5727__auto___26765 = (0);
while(true){
if((i__5727__auto___26765 < len__5726__auto___26764)){
args__5732__auto__.push((arguments[i__5727__auto___26765]));

var G__26766 = (i__5727__auto___26765 + (1));
i__5727__auto___26765 = G__26766;
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
(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq26647){
var G__26648 = cljs.core.first(seq26647);
var seq26647__$1 = cljs.core.next(seq26647);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26648,seq26647__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26767 = arguments.length;
var i__5727__auto___26768 = (0);
while(true){
if((i__5727__auto___26768 < len__5726__auto___26767)){
args__5732__auto__.push((arguments[i__5727__auto___26768]));

var G__26769 = (i__5727__auto___26768 + (1));
i__5727__auto___26768 = G__26769;
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
(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq26652){
var G__26653 = cljs.core.first(seq26652);
var seq26652__$1 = cljs.core.next(seq26652);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26653,seq26652__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26771 = arguments.length;
var i__5727__auto___26773 = (0);
while(true){
if((i__5727__auto___26773 < len__5726__auto___26771)){
args__5732__auto__.push((arguments[i__5727__auto___26773]));

var G__26774 = (i__5727__auto___26773 + (1));
i__5727__auto___26773 = G__26774;
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
(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq26655){
var G__26656 = cljs.core.first(seq26655);
var seq26655__$1 = cljs.core.next(seq26655);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26656,seq26655__$1);
}));

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26775 = arguments.length;
var i__5727__auto___26776 = (0);
while(true){
if((i__5727__auto___26776 < len__5726__auto___26775)){
args__5732__auto__.push((arguments[i__5727__auto___26776]));

var G__26777 = (i__5727__auto___26776 + (1));
i__5727__auto___26776 = G__26777;
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
(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq26662){
var G__26663 = cljs.core.first(seq26662);
var seq26662__$1 = cljs.core.next(seq26662);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26663,seq26662__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26779 = arguments.length;
var i__5727__auto___26780 = (0);
while(true){
if((i__5727__auto___26780 < len__5726__auto___26779)){
args__5732__auto__.push((arguments[i__5727__auto___26780]));

var G__26781 = (i__5727__auto___26780 + (1));
i__5727__auto___26780 = G__26781;
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
(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq26664){
var G__26665 = cljs.core.first(seq26664);
var seq26664__$1 = cljs.core.next(seq26664);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26665,seq26664__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26782 = arguments.length;
var i__5727__auto___26783 = (0);
while(true){
if((i__5727__auto___26783 < len__5726__auto___26782)){
args__5732__auto__.push((arguments[i__5727__auto___26783]));

var G__26784 = (i__5727__auto___26783 + (1));
i__5727__auto___26783 = G__26784;
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
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq26671){
var G__26672 = cljs.core.first(seq26671);
var seq26671__$1 = cljs.core.next(seq26671);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26672,seq26671__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26785 = arguments.length;
var i__5727__auto___26786 = (0);
while(true){
if((i__5727__auto___26786 < len__5726__auto___26785)){
args__5732__auto__.push((arguments[i__5727__auto___26786]));

var G__26787 = (i__5727__auto___26786 + (1));
i__5727__auto___26786 = G__26787;
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
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq26674){
var G__26675 = cljs.core.first(seq26674);
var seq26674__$1 = cljs.core.next(seq26674);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26675,seq26674__$1);
}));


//# sourceMappingURL=camel_snake_kebab.core.js.map
