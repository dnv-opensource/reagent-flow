goog.provide('custom_nodes.core');
custom_nodes.core.nodes = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"explanation","explanation",-1426612608),new cljs.core.Keyword(null,"connectable","connectable",-568707402),false,new cljs.core.Keyword(null,"draggable","draggable",1676206163),false,new cljs.core.Keyword(null,"selectable","selectable",370587038),false,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"Pick a color & connect the nodes"], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"c1","c1",1132530803),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"color-node","color-node",-615828678),new cljs.core.Keyword(null,"class-name","class-name",945142584),new cljs.core.Keyword(null,"color-node","color-node",-615828678),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(60),new cljs.core.Keyword(null,"y","y",-1757859776),(60)], null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#e6d5d0"], null),new cljs.core.Keyword(null,"source-position","source-position",-725033807),new cljs.core.Keyword(null,"right","right",-452581833)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"p2","p2",905500641),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"preview-node","preview-node",310928567),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(300),new cljs.core.Keyword(null,"y","y",-1757859776),(300)], null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"Preview color"], null),new cljs.core.Keyword(null,"target-position","target-position",-1904593579),new cljs.core.Keyword(null,"left","left",-399115937)], null)], null));
custom_nodes.core.edges = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
custom_nodes.core.color_node = (function custom_nodes$core$color_node(p__26967){
var map__26968 = p__26967;
var map__26968__$1 = cljs.core.__destructure_map(map__26968);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26968__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26968__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var node = reagent_flow.core.get_node_by_id(cljs.core.deref(custom_nodes.core.nodes),id);
var default_color = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(data);
var handle_change = (function custom_nodes$core$color_node_$_handle_change(event){
var color = event.target.value;
var path = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(node),new cljs.core.Keyword(null,"data","data",-232669377)], null);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(custom_nodes.core.nodes,cljs.core.update_in,path,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"color","color",1011675173),color], 0));
});
return (function (p__26974){
var map__26975 = p__26974;
var map__26975__$1 = cljs.core.__destructure_map(map__26975);
var is_connectable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26975__$1,new cljs.core.Keyword(null,"isConnectable","isConnectable",-187218388));
var node__$1 = reagent_flow.core.get_node_by_id(cljs.core.deref(custom_nodes.core.nodes),id);
var color = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(node__$1));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodrag","nodrag",-1459550593),new cljs.core.Keyword(null,"color-picker","color-picker",1110838253)], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"on-change","on-change",-732046149),handle_change,new cljs.core.Keyword(null,"value","value",305978217),color,new cljs.core.Keyword(null,"default-value","default-value",232220170),default_color], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_flow.core.handle,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"is-connectable","is-connectable",1932775755),is_connectable], null)], null)], null);
});
});
custom_nodes.core.preview_node = (function custom_nodes$core$preview_node(p__26979){
var map__26980 = p__26979;
var map__26980__$1 = cljs.core.__destructure_map(map__26980);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26980__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var is_connectable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26980__$1,new cljs.core.Keyword(null,"isConnectable","isConnectable",-187218388));
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26980__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var node = reagent_flow.core.get_node_by_id(cljs.core.deref(custom_nodes.core.nodes),id);
var map__26987 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(node);
var map__26987__$1 = cljs.core.__destructure_map(map__26987);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26987__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var connection = cljs.core.first(reagent_flow.core.get_connections_by_node_id(cljs.core.deref(custom_nodes.core.edges),id));
var source = reagent_flow.core.get_node_by_id(cljs.core.deref(custom_nodes.core.nodes),new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(connection));
var color = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(source));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_flow.core.node_resizer,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"is-visible","is-visible",-502905546),selected,new cljs.core.Keyword(null,"min-width","min-width",1926193728),(80),new cljs.core.Keyword(null,"min-height","min-height",398480837),(50)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"5px","5px",-1871779569),new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"1em","1em",576613656)], null),(cljs.core.truth_(connection)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),color], null):null)], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"filter","filter",-948537934),"invert(100%) grayscale(1)"], null)], null),label], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_flow.core.handle,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"is-connectable","is-connectable",1932775755),is_connectable], null)], null)], null);
});
if((typeof custom_nodes !== 'undefined') && (typeof custom_nodes.core !== 'undefined') && (typeof custom_nodes.core.node_types !== 'undefined')){
} else {
custom_nodes.core.node_types = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color-node","color-node",-615828678),custom_nodes.core.color_node,new cljs.core.Keyword(null,"preview-node","preview-node",310928567),custom_nodes.core.preview_node], null);
}
custom_nodes.core.main = (function custom_nodes$core$main(){
var handle_node_changes = (function custom_nodes$core$main_$_handle_node_changes(changes){
return cljs.core.reset_BANG_(custom_nodes.core.nodes,reagent_flow.core.apply_node_changes(changes,cljs.core.deref(custom_nodes.core.nodes)));
});
var handle_edge_changes = (function custom_nodes$core$main_$_handle_edge_changes(changes){
return cljs.core.reset_BANG_(custom_nodes.core.edges,reagent_flow.core.apply_edge_changes(changes,cljs.core.deref(custom_nodes.core.edges)));
});
var handle_connect = (function custom_nodes$core$main_$_handle_connect(connection){
return cljs.core.reset_BANG_(custom_nodes.core.edges,reagent_flow.core.add_edge(connection,cljs.core.deref(custom_nodes.core.edges)));
});
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_flow.core.reagent_flow,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-connect","on-connect",-1148973056),new cljs.core.Keyword(null,"connection-line-type","connection-line-type",-653740479),new cljs.core.Keyword(null,"fit-view","fit-view",1378293697),new cljs.core.Keyword(null,"on-nodes-change","on-nodes-change",464408068),new cljs.core.Keyword(null,"node-types","node-types",1539943342),new cljs.core.Keyword(null,"on-edges-change","on-edges-change",-1915408527),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Keyword(null,"default-edge-options","default-edge-options",1445420349),new cljs.core.Keyword(null,"edges","edges",-694791395)],[handle_connect,new cljs.core.Keyword(null,"smoothstep","smoothstep",968032787),true,handle_node_changes,custom_nodes.core.node_types,handle_edge_changes,cljs.core.deref(custom_nodes.core.nodes),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"animated","animated",129318795),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"smoothstep","smoothstep",968032787)], null),cljs.core.deref(custom_nodes.core.edges)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_flow.core.background,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#ffffff"], null)], null)], null)], null);
});
});
if((typeof custom_nodes !== 'undefined') && (typeof custom_nodes.core !== 'undefined') && (typeof custom_nodes.core.root !== 'undefined')){
} else {
custom_nodes.core.root = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
custom_nodes.core.error_boundary = (function custom_nodes$core$error_boundary(var_args){
var args__5732__auto__ = [];
var len__5726__auto___27027 = arguments.length;
var i__5727__auto___27028 = (0);
while(true){
if((i__5727__auto___27028 < len__5726__auto___27027)){
args__5732__auto__.push((arguments[i__5727__auto___27028]));

var G__27029 = (i__5727__auto___27028 + (1));
i__5727__auto___27028 = G__27029;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return custom_nodes.core.error_boundary.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(custom_nodes.core.error_boundary.cljs$core$IFn$_invoke$arity$variadic = (function (children){
var error = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"ErrorBoundary",new cljs.core.Keyword(null,"get-derived-state-from-error","get-derived-state-from-error",1473896468),(function (e){
return ({});
}),new cljs.core.Keyword(null,"component-did-catch","component-did-catch",652725810),(function (err,info){
return cljs.core.reset_BANG_(error,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [err,info], null));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function() { 
var G__27031__delegate = function (children__$1){
if((cljs.core.deref(error) == null)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),children__$1);
} else {
var vec__27012 = cljs.core.deref(error);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27012,(0),null);
var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27012,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.error","pre.error",956775623),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([info], 0))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return console.error(info);
})], null),"Output stacktrace"], null)], null);
}
};
var G__27031 = function (var_args){
var children__$1 = null;
if (arguments.length > 0) {
var G__27032__i = 0, G__27032__a = new Array(arguments.length -  0);
while (G__27032__i < G__27032__a.length) {G__27032__a[G__27032__i] = arguments[G__27032__i + 0]; ++G__27032__i;}
  children__$1 = new cljs.core.IndexedSeq(G__27032__a,0,null);
} 
return G__27031__delegate.call(this,children__$1);};
G__27031.cljs$lang$maxFixedArity = 0;
G__27031.cljs$lang$applyTo = (function (arglist__27033){
var children__$1 = cljs.core.seq(arglist__27033);
return G__27031__delegate(children__$1);
});
G__27031.cljs$core$IFn$_invoke$arity$variadic = G__27031__delegate;
return G__27031;
})()
], null));
}));

(custom_nodes.core.error_boundary.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(custom_nodes.core.error_boundary.cljs$lang$applyTo = (function (seq27011){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27011));
}));

custom_nodes.core.init = (function custom_nodes$core$init(element){
if((cljs.core.deref(custom_nodes.core.root) == null)){
cljs.core.reset_BANG_(custom_nodes.core.root,reagent.dom.client.create_root(element));

return reagent.dom.client.render.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(custom_nodes.core.root),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [custom_nodes.core.error_boundary,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [custom_nodes.core.main], null)], null));
} else {
return null;
}
});
goog.exportSymbol('custom_nodes.core.init', custom_nodes.core.init);
custom_nodes.core.unload = (function custom_nodes$core$unload(element){
if((!((cljs.core.deref(custom_nodes.core.root) == null)))){
reagent.dom.client.unmount(cljs.core.deref(custom_nodes.core.root));

return cljs.core.reset_BANG_(custom_nodes.core.root,null);
} else {
return null;
}
});
goog.exportSymbol('custom_nodes.core.unload', custom_nodes.core.unload);

//# sourceMappingURL=custom_nodes.core.js.map
