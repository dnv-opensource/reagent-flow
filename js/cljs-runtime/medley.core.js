goog.provide('medley.core');
/**
 * Finds the first item in a collection that matches a predicate. Returns a
 *   transducer when no collection is provided.
 */
medley.core.find_first = (function medley$core$find_first(var_args){
var G__26468 = arguments.length;
switch (G__26468) {
case 1:
return medley.core.find_first.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.find_first.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(medley.core.find_first.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return (function (rf){
return (function() {
var G__26821 = null;
var G__26821__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null, ));
});
var G__26821__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null, result));
});
var G__26821__2 = (function (result,x){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null, x)))){
return cljs.core.ensure_reduced((rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,x) : rf.call(null, result,x)));
} else {
return result;
}
});
G__26821 = function(result,x){
switch(arguments.length){
case 0:
return G__26821__0.call(this);
case 1:
return G__26821__1.call(this,result);
case 2:
return G__26821__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26821.cljs$core$IFn$_invoke$arity$0 = G__26821__0;
G__26821.cljs$core$IFn$_invoke$arity$1 = G__26821__1;
G__26821.cljs$core$IFn$_invoke$arity$2 = G__26821__2;
return G__26821;
})()
});
}));

(medley.core.find_first.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,x){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null, x)))){
return cljs.core.reduced(x);
} else {
return null;
}
}),null,coll);
}));

(medley.core.find_first.cljs$lang$maxFixedArity = 2);

/**
 * Dissociate a value in a nested associative structure, identified by a sequence
 *   of keys. Any collections left empty by the operation will be dissociated from
 *   their containing structures.
 */
medley.core.dissoc_in = (function medley$core$dissoc_in(var_args){
var G__26482 = arguments.length;
switch (G__26482) {
case 2:
return medley.core.dissoc_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___26823 = arguments.length;
var i__5727__auto___26824 = (0);
while(true){
if((i__5727__auto___26824 < len__5726__auto___26823)){
args_arr__5751__auto__.push((arguments[i__5727__auto___26824]));

var G__26825 = (i__5727__auto___26824 + (1));
i__5727__auto___26824 = G__26825;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((2) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((2)),(0),null)):null);
return medley.core.dissoc_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5752__auto__);

}
});

(medley.core.dissoc_in.cljs$core$IFn$_invoke$arity$2 = (function (m,ks){
var temp__5802__auto__ = cljs.core.seq(ks);
if(temp__5802__auto__){
var vec__26494 = temp__5802__auto__;
var seq__26495 = cljs.core.seq(vec__26494);
var first__26496 = cljs.core.first(seq__26495);
var seq__26495__$1 = cljs.core.next(seq__26495);
var k = first__26496;
var ks__$1 = seq__26495__$1;
if(cljs.core.seq(ks__$1)){
var v = medley.core.dissoc_in.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks__$1);
if(cljs.core.empty_QMARK_(v)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
}
} else {
return m;
}
}));

(medley.core.dissoc_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ks,kss){
while(true){
var temp__5802__auto__ = cljs.core.seq(kss);
if(temp__5802__auto__){
var vec__26497 = temp__5802__auto__;
var seq__26498 = cljs.core.seq(vec__26497);
var first__26499 = cljs.core.first(seq__26498);
var seq__26498__$1 = cljs.core.next(seq__26498);
var ks_SINGLEQUOTE_ = first__26499;
var kss__$1 = seq__26498__$1;
var G__26826 = medley.core.dissoc_in.cljs$core$IFn$_invoke$arity$2(m,ks);
var G__26827 = ks_SINGLEQUOTE_;
var G__26828 = kss__$1;
m = G__26826;
ks = G__26827;
kss = G__26828;
continue;
} else {
return medley.core.dissoc_in.cljs$core$IFn$_invoke$arity$2(m,ks);
}
break;
}
}));

/** @this {Function} */
(medley.core.dissoc_in.cljs$lang$applyTo = (function (seq26479){
var G__26480 = cljs.core.first(seq26479);
var seq26479__$1 = cljs.core.next(seq26479);
var G__26481 = cljs.core.first(seq26479__$1);
var seq26479__$2 = cljs.core.next(seq26479__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26480,G__26481,seq26479__$2);
}));

(medley.core.dissoc_in.cljs$lang$maxFixedArity = (2));

medley.core.editable_QMARK_ = (function medley$core$editable_QMARK_(coll){
if((!((coll == null)))){
if((((coll.cljs$lang$protocol_mask$partition1$ & (4))) || ((cljs.core.PROTOCOL_SENTINEL === coll.cljs$core$IEditableCollection$)))){
return true;
} else {
if((!coll.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IEditableCollection,coll);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IEditableCollection,coll);
}
});
medley.core.assoc_some_transient_BANG_ = (function medley$core$assoc_some_transient_BANG_(m,k,v){
if((v == null)){
return m;
} else {
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
});
/**
 * Associates a key k, with a value v in a map m, if and only if v is not nil.
 */
medley.core.assoc_some = (function medley$core$assoc_some(var_args){
var G__26521 = arguments.length;
switch (G__26521) {
case 3:
return medley.core.assoc_some.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___26830 = arguments.length;
var i__5727__auto___26831 = (0);
while(true){
if((i__5727__auto___26831 < len__5726__auto___26830)){
args_arr__5751__auto__.push((arguments[i__5727__auto___26831]));

var G__26832 = (i__5727__auto___26831 + (1));
i__5727__auto___26831 = G__26832;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((3) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((3)),(0),null)):null);
return medley.core.assoc_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5752__auto__);

}
});

(medley.core.assoc_some.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if((v == null)){
return m;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
}));

(medley.core.assoc_some.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
if(medley.core.editable_QMARK_(m)){
var acc = medley.core.assoc_some_transient_BANG_(cljs.core.transient$((function (){var or__5002__auto__ = m;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),k,v);
var kvs__$1 = kvs;
while(true){
if(cljs.core.next(kvs__$1)){
var G__26833 = medley.core.assoc_some_transient_BANG_(acc,cljs.core.first(kvs__$1),cljs.core.second(kvs__$1));
var G__26834 = cljs.core.nnext(kvs__$1);
acc = G__26833;
kvs__$1 = G__26834;
continue;
} else {
if((cljs.core.count(acc) === (0))){
return m;
} else {
return cljs.core.persistent_BANG_(acc);
}
}
break;
}
} else {
var acc = medley.core.assoc_some.cljs$core$IFn$_invoke$arity$3(m,k,v);
var kvs__$1 = kvs;
while(true){
if(cljs.core.next(kvs__$1)){
var G__26835 = medley.core.assoc_some.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.first(kvs__$1),cljs.core.second(kvs__$1));
var G__26836 = cljs.core.nnext(kvs__$1);
acc = G__26835;
kvs__$1 = G__26836;
continue;
} else {
return acc;
}
break;
}
}
}));

/** @this {Function} */
(medley.core.assoc_some.cljs$lang$applyTo = (function (seq26517){
var G__26518 = cljs.core.first(seq26517);
var seq26517__$1 = cljs.core.next(seq26517);
var G__26519 = cljs.core.first(seq26517__$1);
var seq26517__$2 = cljs.core.next(seq26517__$1);
var G__26520 = cljs.core.first(seq26517__$2);
var seq26517__$3 = cljs.core.next(seq26517__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26518,G__26519,G__26520,seq26517__$3);
}));

(medley.core.assoc_some.cljs$lang$maxFixedArity = (3));

/**
 * Updates a value in a map given a key and a function, if and only if the key
 *   exists in the map. See: `clojure.core/update`.
 */
medley.core.update_existing = (function medley$core$update_existing(var_args){
var G__26546 = arguments.length;
switch (G__26546) {
case 3:
return medley.core.update_existing.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return medley.core.update_existing.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return medley.core.update_existing.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return medley.core.update_existing.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___26838 = arguments.length;
var i__5727__auto___26839 = (0);
while(true){
if((i__5727__auto___26839 < len__5726__auto___26838)){
args_arr__5751__auto__.push((arguments[i__5727__auto___26839]));

var G__26840 = (i__5727__auto___26839 + (1));
i__5727__auto___26839 = G__26840;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((6) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((6)),(0),null)):null);
return medley.core.update_existing.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__5752__auto__);

}
});

(medley.core.update_existing.cljs$core$IFn$_invoke$arity$3 = (function (m,k,f){
var temp__5802__auto__ = cljs.core.find(m,k);
if(cljs.core.truth_(temp__5802__auto__)){
var kv = temp__5802__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__26554 = cljs.core.val(kv);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__26554) : f.call(null, G__26554));
})());
} else {
return m;
}
}));

(medley.core.update_existing.cljs$core$IFn$_invoke$arity$4 = (function (m,k,f,x){
var temp__5802__auto__ = cljs.core.find(m,k);
if(cljs.core.truth_(temp__5802__auto__)){
var kv = temp__5802__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__26555 = cljs.core.val(kv);
var G__26556 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__26555,G__26556) : f.call(null, G__26555,G__26556));
})());
} else {
return m;
}
}));

(medley.core.update_existing.cljs$core$IFn$_invoke$arity$5 = (function (m,k,f,x,y){
var temp__5802__auto__ = cljs.core.find(m,k);
if(cljs.core.truth_(temp__5802__auto__)){
var kv = temp__5802__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__26559 = cljs.core.val(kv);
var G__26560 = x;
var G__26561 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__26559,G__26560,G__26561) : f.call(null, G__26559,G__26560,G__26561));
})());
} else {
return m;
}
}));

(medley.core.update_existing.cljs$core$IFn$_invoke$arity$6 = (function (m,k,f,x,y,z){
var temp__5802__auto__ = cljs.core.find(m,k);
if(cljs.core.truth_(temp__5802__auto__)){
var kv = temp__5802__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__26564 = cljs.core.val(kv);
var G__26565 = x;
var G__26566 = y;
var G__26567 = z;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__26564,G__26565,G__26566,G__26567) : f.call(null, G__26564,G__26565,G__26566,G__26567));
})());
} else {
return m;
}
}));

(medley.core.update_existing.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,f,x,y,z,more){
var temp__5802__auto__ = cljs.core.find(m,k);
if(cljs.core.truth_(temp__5802__auto__)){
var kv = temp__5802__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,cljs.core.val(kv),x,y,z,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0)));
} else {
return m;
}
}));

/** @this {Function} */
(medley.core.update_existing.cljs$lang$applyTo = (function (seq26539){
var G__26540 = cljs.core.first(seq26539);
var seq26539__$1 = cljs.core.next(seq26539);
var G__26541 = cljs.core.first(seq26539__$1);
var seq26539__$2 = cljs.core.next(seq26539__$1);
var G__26542 = cljs.core.first(seq26539__$2);
var seq26539__$3 = cljs.core.next(seq26539__$2);
var G__26543 = cljs.core.first(seq26539__$3);
var seq26539__$4 = cljs.core.next(seq26539__$3);
var G__26544 = cljs.core.first(seq26539__$4);
var seq26539__$5 = cljs.core.next(seq26539__$4);
var G__26545 = cljs.core.first(seq26539__$5);
var seq26539__$6 = cljs.core.next(seq26539__$5);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26540,G__26541,G__26542,G__26543,G__26544,G__26545,seq26539__$6);
}));

(medley.core.update_existing.cljs$lang$maxFixedArity = (6));

/**
 * Updates a value in a nested associative structure, if and only if the key
 *   path exists. See: `clojure.core/update-in`.
 */
medley.core.update_existing_in = (function medley$core$update_existing_in(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26841 = arguments.length;
var i__5727__auto___26842 = (0);
while(true){
if((i__5727__auto___26842 < len__5726__auto___26841)){
args__5732__auto__.push((arguments[i__5727__auto___26842]));

var G__26843 = (i__5727__auto___26842 + (1));
i__5727__auto___26842 = G__26843;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return medley.core.update_existing_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(medley.core.update_existing_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ks,f,args){
var up = (function medley$core$up(m__$1,ks__$1,f__$1,args__$1){
var vec__26580 = ks__$1;
var seq__26581 = cljs.core.seq(vec__26580);
var first__26582 = cljs.core.first(seq__26581);
var seq__26581__$1 = cljs.core.next(seq__26581);
var k = first__26582;
var ks__$2 = seq__26581__$1;
var temp__5802__auto__ = cljs.core.find(m__$1,k);
if(cljs.core.truth_(temp__5802__auto__)){
var kv = temp__5802__auto__;
if(ks__$2){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,medley$core$up(cljs.core.val(kv),ks__$2,f__$1,args__$1));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f__$1,cljs.core.val(kv),args__$1));
}
} else {
return m__$1;
}
});
return up(m,ks,f,args);
}));

(medley.core.update_existing_in.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(medley.core.update_existing_in.cljs$lang$applyTo = (function (seq26572){
var G__26573 = cljs.core.first(seq26572);
var seq26572__$1 = cljs.core.next(seq26572);
var G__26574 = cljs.core.first(seq26572__$1);
var seq26572__$2 = cljs.core.next(seq26572__$1);
var G__26575 = cljs.core.first(seq26572__$2);
var seq26572__$3 = cljs.core.next(seq26572__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26573,G__26574,G__26575,seq26572__$3);
}));

medley.core.reduce_map = (function medley$core$reduce_map(f,coll){
var coll_SINGLEQUOTE_ = ((cljs.core.record_QMARK_(coll))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,coll):coll);
if(medley.core.editable_QMARK_(coll_SINGLEQUOTE_)){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc_BANG_) : f.call(null, cljs.core.assoc_BANG_)),cljs.core.transient$(cljs.core.empty(coll_SINGLEQUOTE_)),coll_SINGLEQUOTE_));
} else {
return cljs.core.reduce_kv((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc) : f.call(null, cljs.core.assoc)),cljs.core.empty(coll_SINGLEQUOTE_),coll_SINGLEQUOTE_);
}
});
/**
 * Create a map entry for a key and value pair.
 */
medley.core.map_entry = (function medley$core$map_entry(k,v){
return (new cljs.core.MapEntry(k,v,null));
});
/**
 * Maps a function over the key/value pairs of an associative collection. Expects
 *   a function that takes two arguments, the key and value, and returns the new
 *   key and value as a collection of two elements.
 */
medley.core.map_kv = (function medley$core$map_kv(f,coll){
return medley.core.reduce_map((function (xf){
return (function (m,k,v){
var vec__26589 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(k,v) : f.call(null, k,v));
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26589,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26589,(1),null);
return (xf.cljs$core$IFn$_invoke$arity$3 ? xf.cljs$core$IFn$_invoke$arity$3(m,k__$1,v__$1) : xf.call(null, m,k__$1,v__$1));
});
}),coll);
});
/**
 * Maps a function over the keys of an associative collection.
 */
medley.core.map_keys = (function medley$core$map_keys(f,coll){
return medley.core.reduce_map((function (xf){
return (function (m,k,v){
var G__26596 = m;
var G__26597 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k) : f.call(null, k));
var G__26598 = v;
return (xf.cljs$core$IFn$_invoke$arity$3 ? xf.cljs$core$IFn$_invoke$arity$3(G__26596,G__26597,G__26598) : xf.call(null, G__26596,G__26597,G__26598));
});
}),coll);
});
/**
 * Maps a function over the values of one or more associative collections.
 *   The function should accept number-of-colls arguments. Any keys which are not
 *   shared among all collections are ignored.
 */
medley.core.map_vals = (function medley$core$map_vals(var_args){
var G__26605 = arguments.length;
switch (G__26605) {
case 2:
return medley.core.map_vals.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___26845 = arguments.length;
var i__5727__auto___26846 = (0);
while(true){
if((i__5727__auto___26846 < len__5726__auto___26845)){
args_arr__5751__auto__.push((arguments[i__5727__auto___26846]));

var G__26847 = (i__5727__auto___26846 + (1));
i__5727__auto___26846 = G__26847;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((2) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((2)),(0),null)):null);
return medley.core.map_vals.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5752__auto__);

}
});

(medley.core.map_vals.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
return medley.core.reduce_map((function (xf){
return (function (m,k,v){
var G__26610 = m;
var G__26611 = k;
var G__26612 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null, v));
return (xf.cljs$core$IFn$_invoke$arity$3 ? xf.cljs$core$IFn$_invoke$arity$3(G__26610,G__26611,G__26612) : xf.call(null, G__26610,G__26611,G__26612));
});
}),coll);
}));

(medley.core.map_vals.cljs$core$IFn$_invoke$arity$variadic = (function (f,c1,colls){
return medley.core.reduce_map((function (xf){
return (function (m,k,v){
if(cljs.core.every_QMARK_((function (p1__26599_SHARP_){
return cljs.core.contains_QMARK_(p1__26599_SHARP_,k);
}),colls)){
var G__26613 = m;
var G__26614 = k;
var G__26615 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,v,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26600_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__26600_SHARP_,k);
}),colls));
return (xf.cljs$core$IFn$_invoke$arity$3 ? xf.cljs$core$IFn$_invoke$arity$3(G__26613,G__26614,G__26615) : xf.call(null, G__26613,G__26614,G__26615));
} else {
return m;
}
});
}),c1);
}));

/** @this {Function} */
(medley.core.map_vals.cljs$lang$applyTo = (function (seq26602){
var G__26603 = cljs.core.first(seq26602);
var seq26602__$1 = cljs.core.next(seq26602);
var G__26604 = cljs.core.first(seq26602__$1);
var seq26602__$2 = cljs.core.next(seq26602__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26603,G__26604,seq26602__$2);
}));

(medley.core.map_vals.cljs$lang$maxFixedArity = (2));

/**
 * Maps a function over the key/value pairs of an associative collection, using
 *   the return of the function as the new key.
 */
medley.core.map_kv_keys = (function medley$core$map_kv_keys(f,coll){
return medley.core.reduce_map((function (xf){
return (function (m,k,v){
var G__26620 = m;
var G__26621 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(k,v) : f.call(null, k,v));
var G__26622 = v;
return (xf.cljs$core$IFn$_invoke$arity$3 ? xf.cljs$core$IFn$_invoke$arity$3(G__26620,G__26621,G__26622) : xf.call(null, G__26620,G__26621,G__26622));
});
}),coll);
});
/**
 * Maps a function over the key/value pairs of an associative collection, using
 *   the return of the function as the new value.
 */
medley.core.map_kv_vals = (function medley$core$map_kv_vals(f,coll){
return medley.core.reduce_map((function (xf){
return (function (m,k,v){
var G__26625 = m;
var G__26626 = k;
var G__26627 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(k,v) : f.call(null, k,v));
return (xf.cljs$core$IFn$_invoke$arity$3 ? xf.cljs$core$IFn$_invoke$arity$3(G__26625,G__26626,G__26627) : xf.call(null, G__26625,G__26626,G__26627));
});
}),coll);
});
/**
 * Returns a new associative collection of the items in coll for which
 *   `(pred (key item) (val item))` returns true.
 */
medley.core.filter_kv = (function medley$core$filter_kv(pred,coll){
return medley.core.reduce_map((function (xf){
return (function (m,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null, k,v)))){
return (xf.cljs$core$IFn$_invoke$arity$3 ? xf.cljs$core$IFn$_invoke$arity$3(m,k,v) : xf.call(null, m,k,v));
} else {
return m;
}
});
}),coll);
});
/**
 * Returns a new associative collection of the items in coll for which
 *   `(pred (key item))` returns true.
 */
medley.core.filter_keys = (function medley$core$filter_keys(pred,coll){
return medley.core.reduce_map((function (xf){
return (function (m,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(k) : pred.call(null, k)))){
return (xf.cljs$core$IFn$_invoke$arity$3 ? xf.cljs$core$IFn$_invoke$arity$3(m,k,v) : xf.call(null, m,k,v));
} else {
return m;
}
});
}),coll);
});
/**
 * Returns a new associative collection of the items in coll for which
 *   `(pred (val item))` returns true.
 */
medley.core.filter_vals = (function medley$core$filter_vals(pred,coll){
return medley.core.reduce_map((function (xf){
return (function (m,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(v) : pred.call(null, v)))){
return (xf.cljs$core$IFn$_invoke$arity$3 ? xf.cljs$core$IFn$_invoke$arity$3(m,k,v) : xf.call(null, m,k,v));
} else {
return m;
}
});
}),coll);
});
/**
 * Returns a new associative collection of the items in coll for which
 *   `(pred (key item) (val item))` returns false.
 */
medley.core.remove_kv = (function medley$core$remove_kv(pred,coll){
return medley.core.filter_kv(cljs.core.complement(pred),coll);
});
/**
 * Returns a new associative collection of the items in coll for which
 *   `(pred (key item))` returns false.
 */
medley.core.remove_keys = (function medley$core$remove_keys(pred,coll){
return medley.core.filter_keys(cljs.core.complement(pred),coll);
});
/**
 * Returns a new associative collection of the items in coll for which
 *   `(pred (val item))` returns false.
 */
medley.core.remove_vals = (function medley$core$remove_vals(pred,coll){
return medley.core.filter_vals(cljs.core.complement(pred),coll);
});
/**
 * Creates an empty persistent queue, or one populated with a collection.
 */
medley.core.queue = (function medley$core$queue(var_args){
var G__26638 = arguments.length;
switch (G__26638) {
case 0:
return medley.core.queue.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return medley.core.queue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(medley.core.queue.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentQueue.EMPTY;
}));

(medley.core.queue.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(medley.core.queue.cljs$core$IFn$_invoke$arity$0(),coll);
}));

(medley.core.queue.cljs$lang$maxFixedArity = 1);

/**
 * Returns true if x implements clojure.lang.PersistentQueue.
 */
medley.core.queue_QMARK_ = (function medley$core$queue_QMARK_(x){
return (x instanceof cljs.core.PersistentQueue);
});
/**
 * Returns true if x is a boolean.
 */
medley.core.boolean_QMARK_ = (function medley$core$boolean_QMARK_(x){
return ((x === true) || (x === false));
});
/**
 * Return the least argument (as defined by the compare function) in O(n) time.
 */
medley.core.least = (function medley$core$least(var_args){
var G__26655 = arguments.length;
switch (G__26655) {
case 0:
return medley.core.least.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return medley.core.least.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.least.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___26851 = arguments.length;
var i__5727__auto___26852 = (0);
while(true){
if((i__5727__auto___26852 < len__5726__auto___26851)){
args_arr__5751__auto__.push((arguments[i__5727__auto___26852]));

var G__26853 = (i__5727__auto___26852 + (1));
i__5727__auto___26852 = G__26853;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((2) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((2)),(0),null)):null);
return medley.core.least.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5752__auto__);

}
});

(medley.core.least.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(medley.core.least.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
}));

(medley.core.least.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
if((cljs.core.compare(a,b) < (0))){
return a;
} else {
return b;
}
}));

(medley.core.least.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(medley.core.least,medley.core.least.cljs$core$IFn$_invoke$arity$2(a,b),more);
}));

/** @this {Function} */
(medley.core.least.cljs$lang$applyTo = (function (seq26652){
var G__26653 = cljs.core.first(seq26652);
var seq26652__$1 = cljs.core.next(seq26652);
var G__26654 = cljs.core.first(seq26652__$1);
var seq26652__$2 = cljs.core.next(seq26652__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26653,G__26654,seq26652__$2);
}));

(medley.core.least.cljs$lang$maxFixedArity = (2));

/**
 * Return the argument for which (keyfn x) is least. Determined by the compare
 *   function in O(n) time. Prefer `clojure.core/min-key` if keyfn returns numbers.
 */
medley.core.least_by = (function medley$core$least_by(var_args){
var G__26676 = arguments.length;
switch (G__26676) {
case 1:
return medley.core.least_by.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.least_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return medley.core.least_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___26855 = arguments.length;
var i__5727__auto___26856 = (0);
while(true){
if((i__5727__auto___26856 < len__5726__auto___26855)){
args_arr__5751__auto__.push((arguments[i__5727__auto___26856]));

var G__26857 = (i__5727__auto___26856 + (1));
i__5727__auto___26856 = G__26857;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((3) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((3)),(0),null)):null);
return medley.core.least_by.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5752__auto__);

}
});

(medley.core.least_by.cljs$core$IFn$_invoke$arity$1 = (function (_){
return null;
}));

(medley.core.least_by.cljs$core$IFn$_invoke$arity$2 = (function (_,x){
return x;
}));

(medley.core.least_by.cljs$core$IFn$_invoke$arity$3 = (function (keyfn,x,y){
if((cljs.core.compare((keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(x) : keyfn.call(null, x)),(keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(y) : keyfn.call(null, y))) < (0))){
return x;
} else {
return y;
}
}));

(medley.core.least_by.cljs$core$IFn$_invoke$arity$variadic = (function (keyfn,x,y,more){
var kx = (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(x) : keyfn.call(null, x));
var ky = (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(y) : keyfn.call(null, y));
var vec__26682 = (((cljs.core.compare(kx,ky) < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,kx], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,ky], null));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26682,(0),null);
var kv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26682,(1),null);
var v__$1 = v;
var kv__$1 = kv;
var more__$1 = more;
while(true){
if(cljs.core.truth_(more__$1)){
var w = cljs.core.first(more__$1);
var kw = (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(w) : keyfn.call(null, w));
if((cljs.core.compare(kw,kv__$1) > (0))){
var G__26858 = v__$1;
var G__26859 = kv__$1;
var G__26860 = cljs.core.next(more__$1);
v__$1 = G__26858;
kv__$1 = G__26859;
more__$1 = G__26860;
continue;
} else {
var G__26861 = w;
var G__26862 = kw;
var G__26863 = cljs.core.next(more__$1);
v__$1 = G__26861;
kv__$1 = G__26862;
more__$1 = G__26863;
continue;
}
} else {
return v__$1;
}
break;
}
}));

/** @this {Function} */
(medley.core.least_by.cljs$lang$applyTo = (function (seq26669){
var G__26670 = cljs.core.first(seq26669);
var seq26669__$1 = cljs.core.next(seq26669);
var G__26671 = cljs.core.first(seq26669__$1);
var seq26669__$2 = cljs.core.next(seq26669__$1);
var G__26672 = cljs.core.first(seq26669__$2);
var seq26669__$3 = cljs.core.next(seq26669__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26670,G__26671,G__26672,seq26669__$3);
}));

(medley.core.least_by.cljs$lang$maxFixedArity = (3));

/**
 * Find the greatest argument (as defined by the compare function) in O(n) time.
 */
medley.core.greatest = (function medley$core$greatest(var_args){
var G__26699 = arguments.length;
switch (G__26699) {
case 0:
return medley.core.greatest.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return medley.core.greatest.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.greatest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___26865 = arguments.length;
var i__5727__auto___26866 = (0);
while(true){
if((i__5727__auto___26866 < len__5726__auto___26865)){
args_arr__5751__auto__.push((arguments[i__5727__auto___26866]));

var G__26867 = (i__5727__auto___26866 + (1));
i__5727__auto___26866 = G__26867;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((2) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((2)),(0),null)):null);
return medley.core.greatest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5752__auto__);

}
});

(medley.core.greatest.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(medley.core.greatest.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
}));

(medley.core.greatest.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
if((cljs.core.compare(a,b) > (0))){
return a;
} else {
return b;
}
}));

(medley.core.greatest.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(medley.core.greatest,medley.core.greatest.cljs$core$IFn$_invoke$arity$2(a,b),more);
}));

/** @this {Function} */
(medley.core.greatest.cljs$lang$applyTo = (function (seq26695){
var G__26696 = cljs.core.first(seq26695);
var seq26695__$1 = cljs.core.next(seq26695);
var G__26697 = cljs.core.first(seq26695__$1);
var seq26695__$2 = cljs.core.next(seq26695__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26696,G__26697,seq26695__$2);
}));

(medley.core.greatest.cljs$lang$maxFixedArity = (2));

/**
 * Return the argument for which (keyfn x) is greatest. Determined by the compare
 *   function in O(n) time. Prefer `clojure.core/max-key` if keyfn returns numbers.
 */
medley.core.greatest_by = (function medley$core$greatest_by(var_args){
var G__26720 = arguments.length;
switch (G__26720) {
case 1:
return medley.core.greatest_by.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.greatest_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return medley.core.greatest_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___26873 = arguments.length;
var i__5727__auto___26874 = (0);
while(true){
if((i__5727__auto___26874 < len__5726__auto___26873)){
args_arr__5751__auto__.push((arguments[i__5727__auto___26874]));

var G__26875 = (i__5727__auto___26874 + (1));
i__5727__auto___26874 = G__26875;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((3) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((3)),(0),null)):null);
return medley.core.greatest_by.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5752__auto__);

}
});

(medley.core.greatest_by.cljs$core$IFn$_invoke$arity$1 = (function (_){
return null;
}));

(medley.core.greatest_by.cljs$core$IFn$_invoke$arity$2 = (function (_,x){
return x;
}));

(medley.core.greatest_by.cljs$core$IFn$_invoke$arity$3 = (function (keyfn,x,y){
if((cljs.core.compare((keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(x) : keyfn.call(null, x)),(keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(y) : keyfn.call(null, y))) > (0))){
return x;
} else {
return y;
}
}));

(medley.core.greatest_by.cljs$core$IFn$_invoke$arity$variadic = (function (keyfn,x,y,more){
var kx = (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(x) : keyfn.call(null, x));
var ky = (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(y) : keyfn.call(null, y));
var vec__26730 = (((cljs.core.compare(kx,ky) > (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,kx], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,ky], null));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26730,(0),null);
var kv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26730,(1),null);
var v__$1 = v;
var kv__$1 = kv;
var more__$1 = more;
while(true){
if(cljs.core.truth_(more__$1)){
var w = cljs.core.first(more__$1);
var kw = (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(w) : keyfn.call(null, w));
if((cljs.core.compare(kw,kv__$1) < (0))){
var G__26876 = v__$1;
var G__26877 = kv__$1;
var G__26878 = cljs.core.next(more__$1);
v__$1 = G__26876;
kv__$1 = G__26877;
more__$1 = G__26878;
continue;
} else {
var G__26879 = w;
var G__26880 = kw;
var G__26881 = cljs.core.next(more__$1);
v__$1 = G__26879;
kv__$1 = G__26880;
more__$1 = G__26881;
continue;
}
} else {
return v__$1;
}
break;
}
}));

/** @this {Function} */
(medley.core.greatest_by.cljs$lang$applyTo = (function (seq26713){
var G__26714 = cljs.core.first(seq26713);
var seq26713__$1 = cljs.core.next(seq26713);
var G__26715 = cljs.core.first(seq26713__$1);
var seq26713__$2 = cljs.core.next(seq26713__$1);
var G__26716 = cljs.core.first(seq26713__$2);
var seq26713__$3 = cljs.core.next(seq26713__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26714,G__26715,G__26716,seq26713__$3);
}));

(medley.core.greatest_by.cljs$lang$maxFixedArity = (3));

/**
 * Lazily concatenates a collection of collections into a flat sequence.
 */
medley.core.join = (function medley$core$join(colls){
return (new cljs.core.LazySeq(null,(function (){
var temp__5804__auto__ = cljs.core.seq(colls);
if(temp__5804__auto__){
var s = temp__5804__auto__;
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.first(s),(function (){var G__26742 = cljs.core.rest(s);
return (medley.core.join.cljs$core$IFn$_invoke$arity$1 ? medley.core.join.cljs$core$IFn$_invoke$arity$1(G__26742) : medley.core.join.call(null, G__26742));
})());
} else {
return null;
}
}),null,null));
});
/**
 * Recursively merges maps together. If all the maps supplied have nested maps
 *   under the same keys, these nested maps are merged. Otherwise the value is
 *   overwritten, as in `clojure.core/merge`.
 */
medley.core.deep_merge = (function medley$core$deep_merge(var_args){
var G__26753 = arguments.length;
switch (G__26753) {
case 0:
return medley.core.deep_merge.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return medley.core.deep_merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.deep_merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___26886 = arguments.length;
var i__5727__auto___26887 = (0);
while(true){
if((i__5727__auto___26887 < len__5726__auto___26886)){
args_arr__5751__auto__.push((arguments[i__5727__auto___26887]));

var G__26888 = (i__5727__auto___26887 + (1));
i__5727__auto___26887 = G__26888;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((2) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((2)),(0),null)):null);
return medley.core.deep_merge.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5752__auto__);

}
});

(medley.core.deep_merge.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(medley.core.deep_merge.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
}));

(medley.core.deep_merge.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
if(cljs.core.truth_((function (){var or__5002__auto__ = a;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return b;
}
})())){
var merge_entry = (function medley$core$merge_entry(m,e){
var k = cljs.core.key(e);
var v_SINGLEQUOTE_ = cljs.core.val(e);
if(cljs.core.contains_QMARK_(m,k)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(((cljs.core.map_QMARK_(v)) && (cljs.core.map_QMARK_(v_SINGLEQUOTE_)))){
return medley.core.deep_merge.cljs$core$IFn$_invoke$arity$2(v,v_SINGLEQUOTE_);
} else {
return v_SINGLEQUOTE_;
}
})());
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v_SINGLEQUOTE_);
}
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(merge_entry,(function (){var or__5002__auto__ = a;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.seq(b));
} else {
return null;
}
}));

(medley.core.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(medley.core.deep_merge,(function (){var or__5002__auto__ = a;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.cons(b,more));
}));

/** @this {Function} */
(medley.core.deep_merge.cljs$lang$applyTo = (function (seq26749){
var G__26750 = cljs.core.first(seq26749);
var seq26749__$1 = cljs.core.next(seq26749);
var G__26751 = cljs.core.first(seq26749__$1);
var seq26749__$2 = cljs.core.next(seq26749__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26750,G__26751,seq26749__$2);
}));

(medley.core.deep_merge.cljs$lang$maxFixedArity = (2));

/**
 * Applies a function f to the argument list formed by concatenating
 *   everything but the last element of args with the last element of
 *   args. This is useful for applying a function that accepts keyword
 *   arguments to a map.
 */
medley.core.mapply = (function medley$core$mapply(var_args){
var G__26761 = arguments.length;
switch (G__26761) {
case 2:
return medley.core.mapply.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___26897 = arguments.length;
var i__5727__auto___26898 = (0);
while(true){
if((i__5727__auto___26898 < len__5726__auto___26897)){
args_arr__5751__auto__.push((arguments[i__5727__auto___26898]));

var G__26899 = (i__5727__auto___26898 + (1));
i__5727__auto___26898 = G__26899;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((2) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((2)),(0),null)):null);
return medley.core.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5752__auto__);

}
});

(medley.core.mapply.cljs$core$IFn$_invoke$arity$2 = (function (f,m){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,m));
}));

(medley.core.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,a,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,a,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.concat,cljs.core.butlast(args),cljs.core.last(args)));
}));

/** @this {Function} */
(medley.core.mapply.cljs$lang$applyTo = (function (seq26758){
var G__26759 = cljs.core.first(seq26758);
var seq26758__$1 = cljs.core.next(seq26758);
var G__26760 = cljs.core.first(seq26758__$1);
var seq26758__$2 = cljs.core.next(seq26758__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26759,G__26760,seq26758__$2);
}));

(medley.core.mapply.cljs$lang$maxFixedArity = (2));

/**
 * Similar to `clojure.core/group-by`, this groups values in a collection,
 *   coll, based on the return value of a function, keyf applied to each element.
 * 
 *   Unlike `group-by`, the values of the map are constructed via an initf and
 *   collatef function. The initf function is applied to the first element
 *   matched by keyf, and defaults to the identity function. The collatef function
 *   takes the result of initf and the next keyed element, and produces a new
 *   value.
 * 
 *   To put this in context, the `group-by` function can be defined as:
 * 
 *    (defn group-by [f coll]
 *      (collate-by f conj vector coll))
 * 
 *   While the `medley.core/index-by` function can be (and is) defined as:
 * 
 *    (defn index-by [f coll]
 *      (collate-by f (fn [_ x] x) coll))
 */
medley.core.collate_by = (function medley$core$collate_by(var_args){
var G__26763 = arguments.length;
switch (G__26763) {
case 3:
return medley.core.collate_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return medley.core.collate_by.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(medley.core.collate_by.cljs$core$IFn$_invoke$arity$3 = (function (keyf,collatef,coll){
return medley.core.collate_by.cljs$core$IFn$_invoke$arity$4(keyf,collatef,cljs.core.identity,coll);
}));

(medley.core.collate_by.cljs$core$IFn$_invoke$arity$4 = (function (keyf,collatef,initf,coll){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,v){
var k = (keyf.cljs$core$IFn$_invoke$arity$1 ? keyf.cljs$core$IFn$_invoke$arity$1(v) : keyf.call(null, v));
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,k,((cljs.core.contains_QMARK_(m,k))?(function (){var G__26764 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__26765 = v;
return (collatef.cljs$core$IFn$_invoke$arity$2 ? collatef.cljs$core$IFn$_invoke$arity$2(G__26764,G__26765) : collatef.call(null, G__26764,G__26765));
})():(initf.cljs$core$IFn$_invoke$arity$1 ? initf.cljs$core$IFn$_invoke$arity$1(v) : initf.call(null, v))));
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),coll));
}));

(medley.core.collate_by.cljs$lang$maxFixedArity = 4);

/**
 * Returns a map of the elements of coll keyed by the result of f on each
 *   element. The value at each key will be the last element in coll associated
 *   with that key. This function is similar to `clojure.core/group-by`, except
 *   that elements with the same key are overwritten, rather than added to a
 *   vector of values.
 */
medley.core.index_by = (function medley$core$index_by(f,coll){
return medley.core.collate_by.cljs$core$IFn$_invoke$arity$3(f,(function (_,x){
return x;
}),coll);
});
/**
 * Returns a lazy seq of the first item in each coll, then the second, etc.
 *   Unlike `clojure.core/interleave`, the returned seq contains all items in the
 *   supplied collections, even if the collections are different sizes.
 */
medley.core.interleave_all = (function medley$core$interleave_all(var_args){
var G__26772 = arguments.length;
switch (G__26772) {
case 0:
return medley.core.interleave_all.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return medley.core.interleave_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.interleave_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___26905 = arguments.length;
var i__5727__auto___26906 = (0);
while(true){
if((i__5727__auto___26906 < len__5726__auto___26905)){
args_arr__5751__auto__.push((arguments[i__5727__auto___26906]));

var G__26907 = (i__5727__auto___26906 + (1));
i__5727__auto___26906 = G__26907;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((2) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((2)),(0),null)):null);
return medley.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5752__auto__);

}
});

(medley.core.interleave_all.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.List.EMPTY;
}));

(medley.core.interleave_all.cljs$core$IFn$_invoke$arity$1 = (function (c1){
return (new cljs.core.LazySeq(null,(function (){
return c1;
}),null,null));
}));

(medley.core.interleave_all.cljs$core$IFn$_invoke$arity$2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,(function (){
var s1 = cljs.core.seq(c1);
var s2 = cljs.core.seq(c2);
if(((s1) && (s2))){
return cljs.core.cons(cljs.core.first(s1),cljs.core.cons(cljs.core.first(s2),medley.core.interleave_all.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(s1),cljs.core.rest(s2))));
} else {
return ((s1) || (s2));
}
}),null,null));
}));

(medley.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic = (function (c1,c2,colls){
return (new cljs.core.LazySeq(null,(function (){
var ss = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(colls,c2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([c1], 0)));
if(cljs.core.seq(ss)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,ss),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(medley.core.interleave_all,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,ss)));
} else {
return null;
}
}),null,null));
}));

/** @this {Function} */
(medley.core.interleave_all.cljs$lang$applyTo = (function (seq26769){
var G__26770 = cljs.core.first(seq26769);
var seq26769__$1 = cljs.core.next(seq26769);
var G__26771 = cljs.core.first(seq26769__$1);
var seq26769__$2 = cljs.core.next(seq26769__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26770,G__26771,seq26769__$2);
}));

(medley.core.interleave_all.cljs$lang$maxFixedArity = (2));

/**
 * Returns a lazy sequence of the elements of coll, removing any elements that
 *   return duplicate values when passed to a function f. Returns a stateful
 *   transducer when no collection is provided.
 */
medley.core.distinct_by = (function medley$core$distinct_by(var_args){
var G__26774 = arguments.length;
switch (G__26774) {
case 1:
return medley.core.distinct_by.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.distinct_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(medley.core.distinct_by.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (rf){
var seen = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
return (function() {
var G__26915 = null;
var G__26915__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null, ));
});
var G__26915__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null, result));
});
var G__26915__2 = (function (result,x){
var fx = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null, x));
if(cljs.core.contains_QMARK_(cljs.core.deref(seen),fx)){
return result;
} else {
seen.cljs$core$IVolatile$_vreset_BANG_$arity$2(null, cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen.cljs$core$IDeref$_deref$arity$1(null, ),fx));

return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,x) : rf.call(null, result,x));
}
});
G__26915 = function(result,x){
switch(arguments.length){
case 0:
return G__26915__0.call(this);
case 1:
return G__26915__1.call(this,result);
case 2:
return G__26915__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26915.cljs$core$IFn$_invoke$arity$0 = G__26915__0;
G__26915.cljs$core$IFn$_invoke$arity$1 = G__26915__1;
G__26915.cljs$core$IFn$_invoke$arity$2 = G__26915__2;
return G__26915;
})()
});
}));

(medley.core.distinct_by.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
var step = (function medley$core$step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
return (function (p__26775,seen__$1){
while(true){
var vec__26776 = p__26775;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26776,(0),null);
var xs__$1 = vec__26776;
var temp__5804__auto__ = cljs.core.seq(xs__$1);
if(temp__5804__auto__){
var s = temp__5804__auto__;
var fx = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null, x));
if(cljs.core.contains_QMARK_(seen__$1,fx)){
var G__26918 = cljs.core.rest(s);
var G__26919 = seen__$1;
p__26775 = G__26918;
seen__$1 = G__26919;
continue;
} else {
return cljs.core.cons(x,medley$core$step(cljs.core.rest(s),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,fx)));
}
} else {
return null;
}
break;
}
})(xs,seen);
}),null,null));
});
return step(coll,cljs.core.PersistentHashSet.EMPTY);
}));

(medley.core.distinct_by.cljs$lang$maxFixedArity = 2);

/**
 * Returns a lazy sequence of the elements of coll, removing any **consecutive**
 *   elements that return duplicate values when passed to a function f. Returns a
 *   stateful transducer when no collection is provided.
 */
medley.core.dedupe_by = (function medley$core$dedupe_by(var_args){
var G__26780 = arguments.length;
switch (G__26780) {
case 1:
return medley.core.dedupe_by.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.dedupe_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(medley.core.dedupe_by.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (rf){
var pv = cljs.core.volatile_BANG_(new cljs.core.Keyword("medley.core","none","medley.core/none",60848325));
return (function() {
var G__26922 = null;
var G__26922__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null, ));
});
var G__26922__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null, result));
});
var G__26922__2 = (function (result,x){
var prior = cljs.core.deref(pv);
var fx = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null, x));
cljs.core.vreset_BANG_(pv,fx);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prior,fx)){
return result;
} else {
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,x) : rf.call(null, result,x));
}
});
G__26922 = function(result,x){
switch(arguments.length){
case 0:
return G__26922__0.call(this);
case 1:
return G__26922__1.call(this,result);
case 2:
return G__26922__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26922.cljs$core$IFn$_invoke$arity$0 = G__26922__0;
G__26922.cljs$core$IFn$_invoke$arity$1 = G__26922__1;
G__26922.cljs$core$IFn$_invoke$arity$2 = G__26922__2;
return G__26922;
})()
});
}));

(medley.core.dedupe_by.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(medley.core.dedupe_by.cljs$core$IFn$_invoke$arity$1(f),coll);
}));

(medley.core.dedupe_by.cljs$lang$maxFixedArity = 2);

/**
 * Returns a lazy sequence of successive items from coll up to and including
 *   the first item for which `(pred item)` returns true. Returns a transducer
 *   when no collection is provided.
 */
medley.core.take_upto = (function medley$core$take_upto(var_args){
var G__26782 = arguments.length;
switch (G__26782) {
case 1:
return medley.core.take_upto.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.take_upto.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(medley.core.take_upto.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return (function (rf){
return (function() {
var G__26927 = null;
var G__26927__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null, ));
});
var G__26927__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null, result));
});
var G__26927__2 = (function (result,x){
var result__$1 = (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,x) : rf.call(null, result,x));
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null, x)))){
return cljs.core.ensure_reduced(result__$1);
} else {
return result__$1;
}
});
G__26927 = function(result,x){
switch(arguments.length){
case 0:
return G__26927__0.call(this);
case 1:
return G__26927__1.call(this,result);
case 2:
return G__26927__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26927.cljs$core$IFn$_invoke$arity$0 = G__26927__0;
G__26927.cljs$core$IFn$_invoke$arity$1 = G__26927__1;
G__26927.cljs$core$IFn$_invoke$arity$2 = G__26927__2;
return G__26927;
})()
});
}));

(medley.core.take_upto.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__5804__auto__ = cljs.core.seq(coll);
if(temp__5804__auto__){
var s = temp__5804__auto__;
var x = cljs.core.first(s);
return cljs.core.cons(x,(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null, x)))?null:medley.core.take_upto.cljs$core$IFn$_invoke$arity$2(pred,cljs.core.rest(s))));
} else {
return null;
}
}),null,null));
}));

(medley.core.take_upto.cljs$lang$maxFixedArity = 2);

/**
 * Returns a lazy sequence of the items in coll starting *after* the first item
 *   for which `(pred item)` returns true. Returns a stateful transducer when no
 *   collection is provided.
 */
medley.core.drop_upto = (function medley$core$drop_upto(var_args){
var G__26784 = arguments.length;
switch (G__26784) {
case 1:
return medley.core.drop_upto.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.drop_upto.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(medley.core.drop_upto.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return (function (rf){
var dv = cljs.core.volatile_BANG_(true);
return (function() {
var G__26935 = null;
var G__26935__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null, ));
});
var G__26935__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null, result));
});
var G__26935__2 = (function (result,x){
if(cljs.core.truth_(cljs.core.deref(dv))){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null, x)))){
cljs.core.vreset_BANG_(dv,false);
} else {
}

return result;
} else {
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,x) : rf.call(null, result,x));
}
});
G__26935 = function(result,x){
switch(arguments.length){
case 0:
return G__26935__0.call(this);
case 1:
return G__26935__1.call(this,result);
case 2:
return G__26935__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26935.cljs$core$IFn$_invoke$arity$0 = G__26935__0;
G__26935.cljs$core$IFn$_invoke$arity$1 = G__26935__1;
G__26935.cljs$core$IFn$_invoke$arity$2 = G__26935__2;
return G__26935;
})()
});
}));

(medley.core.drop_upto.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return cljs.core.rest(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(pred),coll));
}));

(medley.core.drop_upto.cljs$lang$maxFixedArity = 2);

/**
 * Applies pred to successive values in coll, splitting it each time `(pred
 *   prev-item item)` returns logical true. Returns a lazy seq of partitions.
 *   Returns a stateful transducer when no collection is provided.
 */
medley.core.partition_between = (function medley$core$partition_between(var_args){
var G__26786 = arguments.length;
switch (G__26786) {
case 1:
return medley.core.partition_between.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.partition_between.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(medley.core.partition_between.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return (function (rf){
var part = cljs.core.array_list();
var prev = cljs.core.volatile_BANG_(new cljs.core.Keyword("medley.core","none","medley.core/none",60848325));
return (function() {
var G__26938 = null;
var G__26938__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null, ));
});
var G__26938__1 = (function (result){
var G__26787 = (cljs.core.truth_(part.isEmpty())?result:(function (){var v = cljs.core.vec(part.toArray());
part.clear();

return cljs.core.unreduced((rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,v) : rf.call(null, result,v)));
})());
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__26787) : rf.call(null, G__26787));
});
var G__26938__2 = (function (result,input){
var p = cljs.core.deref(prev);
cljs.core.vreset_BANG_(prev,input);

if(((cljs.core.keyword_identical_QMARK_(p,new cljs.core.Keyword("medley.core","none","medley.core/none",60848325))) || (cljs.core.not((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(p,input) : pred.call(null, p,input)))))){
part.add(input);

return result;
} else {
var v = cljs.core.vec(part.toArray());
part.clear();

var ret = (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,v) : rf.call(null, result,v));
if(cljs.core.reduced_QMARK_(ret)){
} else {
part.add(input);
}

return ret;
}
});
G__26938 = function(result,input){
switch(arguments.length){
case 0:
return G__26938__0.call(this);
case 1:
return G__26938__1.call(this,result);
case 2:
return G__26938__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26938.cljs$core$IFn$_invoke$arity$0 = G__26938__0;
G__26938.cljs$core$IFn$_invoke$arity$1 = G__26938__1;
G__26938.cljs$core$IFn$_invoke$arity$2 = G__26938__2;
return G__26938;
})()
});
}));

(medley.core.partition_between.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return (new cljs.core.LazySeq(null,(function (){
var take_part = (function medley$core$take_part(prev,coll__$1){
return (new cljs.core.LazySeq(null,(function (){
var temp__5804__auto__ = cljs.core.seq(coll__$1);
if(temp__5804__auto__){
var vec__26791 = temp__5804__auto__;
var seq__26792 = cljs.core.seq(vec__26791);
var first__26793 = cljs.core.first(seq__26792);
var seq__26792__$1 = cljs.core.next(seq__26792);
var x = first__26793;
var xs = seq__26792__$1;
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(prev,x) : pred.call(null, prev,x)))){
return null;
} else {
return cljs.core.cons(x,medley$core$take_part(x,xs));
}
} else {
return null;
}
}),null,null));
});
var temp__5804__auto__ = cljs.core.seq(coll);
if(temp__5804__auto__){
var vec__26794 = temp__5804__auto__;
var seq__26795 = cljs.core.seq(vec__26794);
var first__26796 = cljs.core.first(seq__26795);
var seq__26795__$1 = cljs.core.next(seq__26795);
var x = first__26796;
var xs = seq__26795__$1;
var run = take_part(x,xs);
return cljs.core.cons(cljs.core.cons(x,run),medley.core.partition_between.cljs$core$IFn$_invoke$arity$2(pred,(new cljs.core.LazySeq(null,(function (){
return cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.count(run),xs);
}),null,null))));
} else {
return null;
}
}),null,null));
}));

(medley.core.partition_between.cljs$lang$maxFixedArity = 2);

/**
 * Returns a lazy sequence of partitions, splitting after `(pred item)` returns
 *   true. Returns a stateful transducer when no collection is provided.
 */
medley.core.partition_after = (function medley$core$partition_after(var_args){
var G__26798 = arguments.length;
switch (G__26798) {
case 1:
return medley.core.partition_after.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.partition_after.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(medley.core.partition_after.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return medley.core.partition_between.cljs$core$IFn$_invoke$arity$1((function (x,_){
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null, x));
}));
}));

(medley.core.partition_after.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return medley.core.partition_between.cljs$core$IFn$_invoke$arity$2((function (x,_){
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null, x));
}),coll);
}));

(medley.core.partition_after.cljs$lang$maxFixedArity = 2);

/**
 * Returns a lazy sequence of partitions, splitting before `(pred item)` returns
 *   true. Returns a stateful transducer when no collection is provided.
 */
medley.core.partition_before = (function medley$core$partition_before(var_args){
var G__26800 = arguments.length;
switch (G__26800) {
case 1:
return medley.core.partition_before.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.partition_before.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(medley.core.partition_before.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return medley.core.partition_between.cljs$core$IFn$_invoke$arity$1((function (_,x){
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null, x));
}));
}));

(medley.core.partition_before.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return medley.core.partition_between.cljs$core$IFn$_invoke$arity$2((function (_,x){
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null, x));
}),coll);
}));

(medley.core.partition_before.cljs$lang$maxFixedArity = 2);

/**
 * Returns an ordered, lazy sequence of vectors `[index item]`, where item is a
 *   value in coll, and index its position starting from zero. Returns a stateful
 *   transducer when no collection is provided.
 */
medley.core.indexed = (function medley$core$indexed(var_args){
var G__26802 = arguments.length;
switch (G__26802) {
case 0:
return medley.core.indexed.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return medley.core.indexed.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(medley.core.indexed.cljs$core$IFn$_invoke$arity$0 = (function (){
return (function (rf){
var i = cljs.core.volatile_BANG_((-1));
return (function() {
var G__26945 = null;
var G__26945__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null, ));
});
var G__26945__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null, result));
});
var G__26945__2 = (function (result,x){
var G__26803 = result;
var G__26804 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i.cljs$core$IVolatile$_vreset_BANG_$arity$2(null, (i.cljs$core$IDeref$_deref$arity$1(null, ) + (1))),x], null);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__26803,G__26804) : rf.call(null, G__26803,G__26804));
});
G__26945 = function(result,x){
switch(arguments.length){
case 0:
return G__26945__0.call(this);
case 1:
return G__26945__1.call(this,result);
case 2:
return G__26945__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26945.cljs$core$IFn$_invoke$arity$0 = G__26945__0;
G__26945.cljs$core$IFn$_invoke$arity$1 = G__26945__1;
G__26945.cljs$core$IFn$_invoke$arity$2 = G__26945__2;
return G__26945;
})()
});
}));

(medley.core.indexed.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,coll);
}));

(medley.core.indexed.cljs$lang$maxFixedArity = 1);

/**
 * Returns a lazy sequence of the items in coll, with a new item inserted at
 *   the supplied index, followed by all subsequent items of the collection. Runs
 *   in O(n) time. Returns a stateful transducer when no collection is provided.
 */
medley.core.insert_nth = (function medley$core$insert_nth(var_args){
var G__26806 = arguments.length;
switch (G__26806) {
case 2:
return medley.core.insert_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return medley.core.insert_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(medley.core.insert_nth.cljs$core$IFn$_invoke$arity$2 = (function (index,item){
return (function (rf){
var idx = cljs.core.volatile_BANG_((index + (1)));
return (function() {
var G__26947 = null;
var G__26947__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null, ));
});
var G__26947__1 = (function (result){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(idx),(1))){
var G__26807 = (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,item) : rf.call(null, result,item));
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__26807) : rf.call(null, G__26807));
} else {
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null, result));
}
});
var G__26947__2 = (function (result,x){
if((idx.cljs$core$IVolatile$_vreset_BANG_$arity$2(null, (idx.cljs$core$IDeref$_deref$arity$1(null, ) - (1))) === (0))){
var G__26808 = (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,item) : rf.call(null, result,item));
var G__26809 = x;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__26808,G__26809) : rf.call(null, G__26808,G__26809));
} else {
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,x) : rf.call(null, result,x));
}
});
G__26947 = function(result,x){
switch(arguments.length){
case 0:
return G__26947__0.call(this);
case 1:
return G__26947__1.call(this,result);
case 2:
return G__26947__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26947.cljs$core$IFn$_invoke$arity$0 = G__26947__0;
G__26947.cljs$core$IFn$_invoke$arity$1 = G__26947__1;
G__26947.cljs$core$IFn$_invoke$arity$2 = G__26947__2;
return G__26947;
})()
});
}));

(medley.core.insert_nth.cljs$core$IFn$_invoke$arity$3 = (function (index,item,coll){
return (new cljs.core.LazySeq(null,(function (){
if((index === (0))){
return cljs.core.cons(item,coll);
} else {
if(cljs.core.seq(coll)){
return cljs.core.cons(cljs.core.first(coll),medley.core.insert_nth.cljs$core$IFn$_invoke$arity$3((index - (1)),item,cljs.core.rest(coll)));
} else {
return null;
}
}
}),null,null));
}));

(medley.core.insert_nth.cljs$lang$maxFixedArity = 3);

/**
 * Returns a lazy sequence of the items in coll, except for the item at the
 *   supplied index. Runs in O(n) time. Returns a stateful transducer when no
 *   collection is provided.
 */
medley.core.remove_nth = (function medley$core$remove_nth(var_args){
var G__26811 = arguments.length;
switch (G__26811) {
case 1:
return medley.core.remove_nth.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.remove_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(medley.core.remove_nth.cljs$core$IFn$_invoke$arity$1 = (function (index){
return (function (rf){
var idx = cljs.core.volatile_BANG_((index + (1)));
return (function() {
var G__26951 = null;
var G__26951__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null, ));
});
var G__26951__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null, result));
});
var G__26951__2 = (function (result,x){
if((idx.cljs$core$IVolatile$_vreset_BANG_$arity$2(null, (idx.cljs$core$IDeref$_deref$arity$1(null, ) - (1))) === (0))){
return result;
} else {
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,x) : rf.call(null, result,x));
}
});
G__26951 = function(result,x){
switch(arguments.length){
case 0:
return G__26951__0.call(this);
case 1:
return G__26951__1.call(this,result);
case 2:
return G__26951__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26951.cljs$core$IFn$_invoke$arity$0 = G__26951__0;
G__26951.cljs$core$IFn$_invoke$arity$1 = G__26951__1;
G__26951.cljs$core$IFn$_invoke$arity$2 = G__26951__2;
return G__26951;
})()
});
}));

(medley.core.remove_nth.cljs$core$IFn$_invoke$arity$2 = (function (index,coll){
return (new cljs.core.LazySeq(null,(function (){
if((index === (0))){
return cljs.core.rest(coll);
} else {
if(cljs.core.seq(coll)){
return cljs.core.cons(cljs.core.first(coll),medley.core.remove_nth.cljs$core$IFn$_invoke$arity$2((index - (1)),cljs.core.rest(coll)));
} else {
return null;
}
}
}),null,null));
}));

(medley.core.remove_nth.cljs$lang$maxFixedArity = 2);

/**
 * Returns a lazy sequence of the items in coll, with a new item replacing the
 *   item at the supplied index. Runs in O(n) time. Returns a stateful transducer
 *   when no collection is provided.
 */
medley.core.replace_nth = (function medley$core$replace_nth(var_args){
var G__26813 = arguments.length;
switch (G__26813) {
case 2:
return medley.core.replace_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return medley.core.replace_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(medley.core.replace_nth.cljs$core$IFn$_invoke$arity$2 = (function (index,item){
return (function (rf){
var idx = cljs.core.volatile_BANG_((index + (1)));
return (function() {
var G__26956 = null;
var G__26956__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null, ));
});
var G__26956__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null, result));
});
var G__26956__2 = (function (result,x){
if((idx.cljs$core$IVolatile$_vreset_BANG_$arity$2(null, (idx.cljs$core$IDeref$_deref$arity$1(null, ) - (1))) === (0))){
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,item) : rf.call(null, result,item));
} else {
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,x) : rf.call(null, result,x));
}
});
G__26956 = function(result,x){
switch(arguments.length){
case 0:
return G__26956__0.call(this);
case 1:
return G__26956__1.call(this,result);
case 2:
return G__26956__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26956.cljs$core$IFn$_invoke$arity$0 = G__26956__0;
G__26956.cljs$core$IFn$_invoke$arity$1 = G__26956__1;
G__26956.cljs$core$IFn$_invoke$arity$2 = G__26956__2;
return G__26956;
})()
});
}));

(medley.core.replace_nth.cljs$core$IFn$_invoke$arity$3 = (function (index,item,coll){
return (new cljs.core.LazySeq(null,(function (){
if((index === (0))){
return cljs.core.cons(item,cljs.core.rest(coll));
} else {
if(cljs.core.seq(coll)){
return cljs.core.cons(cljs.core.first(coll),medley.core.replace_nth.cljs$core$IFn$_invoke$arity$3((index - (1)),item,cljs.core.rest(coll)));
} else {
return null;
}
}
}),null,null));
}));

(medley.core.replace_nth.cljs$lang$maxFixedArity = 3);

/**
 * Returns the absolute value of a number.
 */
medley.core.abs = (function medley$core$abs(x){
if((x < (0))){
return (- x);
} else {
return x;
}
});
/**
 * Atomically swaps the value of the atom to be `(apply f x args)`, where x is
 *   the current value of the atom, then returns the original value of the atom.
 *   This function therefore acts like an atomic `deref` then `swap!`.
 */
medley.core.deref_swap_BANG_ = (function medley$core$deref_swap_BANG_(var_args){
var G__26819 = arguments.length;
switch (G__26819) {
case 2:
return medley.core.deref_swap_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___26958 = arguments.length;
var i__5727__auto___26959 = (0);
while(true){
if((i__5727__auto___26959 < len__5726__auto___26958)){
args_arr__5751__auto__.push((arguments[i__5727__auto___26959]));

var G__26960 = (i__5727__auto___26959 + (1));
i__5727__auto___26959 = G__26960;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((2) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((2)),(0),null)):null);
return medley.core.deref_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5752__auto__);

}
});

(medley.core.deref_swap_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (atom,f){
var value = cljs.core.deref(atom);
cljs.core.reset_BANG_(atom,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(value) : f.call(null, value)));

return value;
}));

(medley.core.deref_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (atom,f,args){
return medley.core.deref_swap_BANG_.cljs$core$IFn$_invoke$arity$2(atom,(function (p1__26814_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,p1__26814_SHARP_,args);
}));
}));

/** @this {Function} */
(medley.core.deref_swap_BANG_.cljs$lang$applyTo = (function (seq26816){
var G__26817 = cljs.core.first(seq26816);
var seq26816__$1 = cljs.core.next(seq26816);
var G__26818 = cljs.core.first(seq26816__$1);
var seq26816__$2 = cljs.core.next(seq26816__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26817,G__26818,seq26816__$2);
}));

(medley.core.deref_swap_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Sets the value of the atom without regard for the current value, then returns
 *   the original value of the atom. See also: [[deref-swap!]].
 */
medley.core.deref_reset_BANG_ = (function medley$core$deref_reset_BANG_(atom,newval){
return medley.core.deref_swap_BANG_.cljs$core$IFn$_invoke$arity$2(atom,cljs.core.constantly(newval));
});
/**
 * Returns the message attached to the given Error/Throwable object. For all
 *   other types returns nil. Same as `cljs.core/ex-message` except it works for
 *   Clojure as well as ClojureScript.
 */
medley.core.ex_message = (function medley$core$ex_message(ex){
return cljs.core.ex_message(ex);
});
/**
 * Returns the cause attached to the given ExceptionInfo/Throwable object. For
 *   all other types returns nil. Same as `cljs.core/ex-cause` except it works for
 *   Clojure as well as ClojureScript.
 */
medley.core.ex_cause = (function medley$core$ex_cause(ex){
return cljs.core.ex_cause(ex);
});
/**
 * Returns true if the value is a UUID.
 */
medley.core.uuid_QMARK_ = (function medley$core$uuid_QMARK_(x){
return (x instanceof cljs.core.UUID);
});
/**
 * Returns a UUID generated from the supplied string. Same as `cljs.core/uuid`
 *   in ClojureScript, while in Clojure it returns a `java.util.UUID` object.
 */
medley.core.uuid = (function medley$core$uuid(s){
return cljs.core.uuid(s);
});
/**
 * Generates a new random UUID. Same as `cljs.core/random-uuid` except it works
 *   for Clojure as well as ClojureScript.
 */
medley.core.random_uuid = (function medley$core$random_uuid(){
return cljs.core.random_uuid();
});
/**
 * Returns true if the value is a regular expression.
 */
medley.core.regexp_QMARK_ = (function medley$core$regexp_QMARK_(x){
return (x instanceof RegExp);
});

//# sourceMappingURL=medley.core.js.map