goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__25817__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__25817 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25818__i = 0, G__25818__a = new Array(arguments.length -  0);
while (G__25818__i < G__25818__a.length) {G__25818__a[G__25818__i] = arguments[G__25818__i + 0]; ++G__25818__i;}
  args = new cljs.core.IndexedSeq(G__25818__a,0,null);
} 
return G__25817__delegate.call(this,args);};
G__25817.cljs$lang$maxFixedArity = 0;
G__25817.cljs$lang$applyTo = (function (arglist__25819){
var args = cljs.core.seq(arglist__25819);
return G__25817__delegate(args);
});
G__25817.cljs$core$IFn$_invoke$arity$variadic = G__25817__delegate;
return G__25817;
})()
);

(o.error = (function() { 
var G__25820__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__25820 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25821__i = 0, G__25821__a = new Array(arguments.length -  0);
while (G__25821__i < G__25821__a.length) {G__25821__a[G__25821__i] = arguments[G__25821__i + 0]; ++G__25821__i;}
  args = new cljs.core.IndexedSeq(G__25821__a,0,null);
} 
return G__25820__delegate.call(this,args);};
G__25820.cljs$lang$maxFixedArity = 0;
G__25820.cljs$lang$applyTo = (function (arglist__25822){
var args = cljs.core.seq(arglist__25822);
return G__25820__delegate(args);
});
G__25820.cljs$core$IFn$_invoke$arity$variadic = G__25820__delegate;
return G__25820;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null, ));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
