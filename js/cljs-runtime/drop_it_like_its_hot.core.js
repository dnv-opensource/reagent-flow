goog.provide('drop_it_like_its_hot.core');
if((typeof drop_it_like_its_hot !== 'undefined') && (typeof drop_it_like_its_hot.core !== 'undefined') && (typeof drop_it_like_its_hot.core.node_id !== 'undefined')){
} else {
drop_it_like_its_hot.core.node_id = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
if((typeof drop_it_like_its_hot !== 'undefined') && (typeof drop_it_like_its_hot.core !== 'undefined') && (typeof drop_it_like_its_hot.core.nodes !== 'undefined')){
} else {
drop_it_like_its_hot.core.nodes = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"explanation",new cljs.core.Keyword(null,"selectable","selectable",370587038),false,new cljs.core.Keyword(null,"connectable","connectable",-568707402),false,new cljs.core.Keyword(null,"draggable","draggable",1676206163),false,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"Drag some nodes in from the panel above"], null)], null)], null));
}
if((typeof drop_it_like_its_hot !== 'undefined') && (typeof drop_it_like_its_hot.core !== 'undefined') && (typeof drop_it_like_its_hot.core.edges !== 'undefined')){
} else {
drop_it_like_its_hot.core.edges = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
drop_it_like_its_hot.core.main = (function drop_it_like_its_hot$core$main(){
var flow = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var provider = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var viewport = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),(1)], null));
var data_type = "application/reagentflow";
var handle_drag = (function drop_it_like_its_hot$core$main_$_handle_drag(event){
var data_transfer = event.dataTransfer;
data_transfer.setData(data_type,"default");

return (data_transfer.effectAllowed = "move");
});
var handle_node_changes = (function drop_it_like_its_hot$core$main_$_handle_node_changes(changes){
return cljs.core.reset_BANG_(drop_it_like_its_hot.core.nodes,reagent_flow.core.apply_node_changes(changes,cljs.core.deref(drop_it_like_its_hot.core.nodes)));
});
var handle_edge_changes = (function drop_it_like_its_hot$core$main_$_handle_edge_changes(changes){
return cljs.core.reset_BANG_(drop_it_like_its_hot.core.edges,reagent_flow.core.apply_edge_changes(changes,cljs.core.deref(drop_it_like_its_hot.core.edges)));
});
var handle_connect = (function drop_it_like_its_hot$core$main_$_handle_connect(connection){
return cljs.core.reset_BANG_(drop_it_like_its_hot.core.edges,reagent_flow.core.add_edge(connection,cljs.core.deref(drop_it_like_its_hot.core.edges)));
});
var handle_drop = (function drop_it_like_its_hot$core$main_$_handle_drop(event){
event.preventDefault();

var temp__5804__auto__ = event.dataTransfer.getData(data_type);
if(cljs.core.truth_(temp__5804__auto__)){
var node_type = temp__5804__auto__;
var map__27001 = cljs.core.deref(provider);
var map__27001__$1 = cljs.core.__destructure_map(map__27001);
var screen_to_flow_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27001__$1,new cljs.core.Keyword(null,"screen-to-flow-position","screen-to-flow-position",1284201580));
var flow_el = flow.state.firstChild;
var rect = flow_el.getBoundingClientRect();
var position = (function (){var G__27005 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),event.clientX,new cljs.core.Keyword(null,"y","y",-1757859776),event.clientY], null);
return (screen_to_flow_position.cljs$core$IFn$_invoke$arity$1 ? screen_to_flow_position.cljs$core$IFn$_invoke$arity$1(G__27005) : screen_to_flow_position.call(null, G__27005));
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(drop_it_like_its_hot.core.node_id,cljs.core.inc);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(drop_it_like_its_hot.core.nodes,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),["node-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(drop_it_like_its_hot.core.node_id))].join(''),new cljs.core.Keyword(null,"type","type",1174270348),node_type,new cljs.core.Keyword(null,"position","position",-2011731912),position,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),["Node #",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(drop_it_like_its_hot.core.node_id))].join('')], null)], null));
} else {
return null;
}
});
var handle_drag_over = (function drop_it_like_its_hot$core$main_$_handle_drag_over(event){
event.preventDefault();

return (event.dataTransfer.dropEffect = "move");
});
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"menu.node-palette","menu.node-palette",-1561090797),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.node","div.node",-445611527),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"draggable","draggable",1676206163),true,new cljs.core.Keyword(null,"on-drag-start","on-drag-start",-47712205),handle_drag], null),"Node"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_flow.core.reagent_flow,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-connect","on-connect",-1148973056),new cljs.core.Keyword(null,"connection-line-type","connection-line-type",-653740479),new cljs.core.Keyword(null,"fit-view","fit-view",1378293697),new cljs.core.Keyword(null,"on-nodes-change","on-nodes-change",464408068),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),new cljs.core.Keyword(null,"on-edges-change","on-edges-change",-1915408527),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"on-drag-over","on-drag-over",-93410408),new cljs.core.Keyword(null,"on-viewport-change","on-viewport-change",1511944025),new cljs.core.Keyword(null,"on-init","on-init",-1723361030),new cljs.core.Keyword(null,"default-edge-options","default-edge-options",1445420349),new cljs.core.Keyword(null,"edges","edges",-694791395)],[handle_connect,new cljs.core.Keyword(null,"smoothstep","smoothstep",968032787),true,handle_node_changes,(function (p1__26963_SHARP_){
return cljs.core.reset_BANG_(flow,p1__26963_SHARP_);
}),handle_drop,handle_edge_changes,cljs.core.deref(drop_it_like_its_hot.core.nodes),new cljs.core.Keyword(null,"drop-it-like-its-hot","drop-it-like-its-hot",-2065303910),handle_drag_over,(function (p1__26965_SHARP_){
return cljs.core.reset_BANG_(viewport,p1__26965_SHARP_);
}),(function (p1__26964_SHARP_){
return cljs.core.reset_BANG_(provider,p1__26964_SHARP_);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"smoothstep","smoothstep",968032787)], null),cljs.core.deref(drop_it_like_its_hot.core.edges)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_flow.core.background,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#ffffff"], null)], null)], null)], null)], null);
});
});
if((typeof drop_it_like_its_hot !== 'undefined') && (typeof drop_it_like_its_hot.core !== 'undefined') && (typeof drop_it_like_its_hot.core.root !== 'undefined')){
} else {
drop_it_like_its_hot.core.root = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
drop_it_like_its_hot.core.error_boundary = (function drop_it_like_its_hot$core$error_boundary(var_args){
var args__5732__auto__ = [];
var len__5726__auto___27024 = arguments.length;
var i__5727__auto___27025 = (0);
while(true){
if((i__5727__auto___27025 < len__5726__auto___27024)){
args__5732__auto__.push((arguments[i__5727__auto___27025]));

var G__27026 = (i__5727__auto___27025 + (1));
i__5727__auto___27025 = G__27026;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return drop_it_like_its_hot.core.error_boundary.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(drop_it_like_its_hot.core.error_boundary.cljs$core$IFn$_invoke$arity$variadic = (function (children){
var error = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"ErrorBoundary",new cljs.core.Keyword(null,"get-derived-state-from-error","get-derived-state-from-error",1473896468),(function (e){
return ({});
}),new cljs.core.Keyword(null,"component-did-catch","component-did-catch",652725810),(function (err,info){
return cljs.core.reset_BANG_(error,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [err,info], null));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function() { 
var G__27030__delegate = function (children__$1){
if((cljs.core.deref(error) == null)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),children__$1);
} else {
var vec__27018 = cljs.core.deref(error);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27018,(0),null);
var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27018,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.error","pre.error",956775623),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([info], 0))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return console.error(info);
})], null),"Output stacktrace"], null)], null);
}
};
var G__27030 = function (var_args){
var children__$1 = null;
if (arguments.length > 0) {
var G__27034__i = 0, G__27034__a = new Array(arguments.length -  0);
while (G__27034__i < G__27034__a.length) {G__27034__a[G__27034__i] = arguments[G__27034__i + 0]; ++G__27034__i;}
  children__$1 = new cljs.core.IndexedSeq(G__27034__a,0,null);
} 
return G__27030__delegate.call(this,children__$1);};
G__27030.cljs$lang$maxFixedArity = 0;
G__27030.cljs$lang$applyTo = (function (arglist__27035){
var children__$1 = cljs.core.seq(arglist__27035);
return G__27030__delegate(children__$1);
});
G__27030.cljs$core$IFn$_invoke$arity$variadic = G__27030__delegate;
return G__27030;
})()
], null));
}));

(drop_it_like_its_hot.core.error_boundary.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(drop_it_like_its_hot.core.error_boundary.cljs$lang$applyTo = (function (seq27010){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27010));
}));

drop_it_like_its_hot.core.init = (function drop_it_like_its_hot$core$init(element){
if((cljs.core.deref(drop_it_like_its_hot.core.root) == null)){
cljs.core.reset_BANG_(drop_it_like_its_hot.core.root,reagent.dom.client.create_root(element));

return reagent.dom.client.render.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(drop_it_like_its_hot.core.root),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [drop_it_like_its_hot.core.error_boundary,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [drop_it_like_its_hot.core.main], null)], null));
} else {
return null;
}
});
goog.exportSymbol('drop_it_like_its_hot.core.init', drop_it_like_its_hot.core.init);
drop_it_like_its_hot.core.unload = (function drop_it_like_its_hot$core$unload(element){
if((!((cljs.core.deref(drop_it_like_its_hot.core.root) == null)))){
reagent.dom.client.unmount(cljs.core.deref(drop_it_like_its_hot.core.root));

return cljs.core.reset_BANG_(drop_it_like_its_hot.core.root,null);
} else {
return null;
}
});
goog.exportSymbol('drop_it_like_its_hot.core.unload', drop_it_like_its_hot.core.unload);

//# sourceMappingURL=drop_it_like_its_hot.core.js.map
