goog.provide('stress.core');
stress.core.num_nodes = (100);
stress.core.rows = (stress.core.num_nodes / (10));
stress.core.cols = (stress.core.num_nodes / stress.core.rows);
if((typeof stress !== 'undefined') && (typeof stress.core !== 'undefined') && (typeof stress.core.sum_node_value !== 'undefined')){
} else {
stress.core.sum_node_value = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
if((typeof stress !== 'undefined') && (typeof stress.core !== 'undefined') && (typeof stress.core.nodes !== 'undefined')){
} else {
stress.core.nodes = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (idx){
var x = ((200) * cljs.core.mod((idx - (1)),stress.core.cols));
var y = ((200) * cljs.core.quot((idx - (1)),stress.core.cols));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),["node-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''),new cljs.core.Keyword(null,"type","type",1174270348),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,(1)))?new cljs.core.Keyword(null,"input","input",556931961):new cljs.core.Keyword(null,"default","default",-1987822328)),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),["Node #",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''),new cljs.core.Keyword(null,"value","value",305978217),idx], null)], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(stress.core.num_nodes + (1)))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"sum-node","sum-node",-235712885),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"sum-node","sum-node",-235712885),new cljs.core.Keyword(null,"deletable","deletable",-465869216),false,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),((200) * (stress.core.cols - (1))),new cljs.core.Keyword(null,"y","y",-1757859776),((200) * stress.core.rows)], null)], null)], null)));
}
if((typeof stress !== 'undefined') && (typeof stress.core !== 'undefined') && (typeof stress.core.edges !== 'undefined')){
} else {
stress.core.edges = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (idx){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),["edge-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join('')], null),(((idx > (1)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",-433931539),["node-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((idx - (1)))].join('')], null):null),(((idx < (stress.core.num_nodes + (1))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),["node-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join('')], null):null)], 0));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(stress.core.num_nodes + (1)))));
}
stress.core.follow_source = (function stress$core$follow_source(edge,connections){
var temp__5802__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(edge,new cljs.core.Keyword(null,"source","source",-433931539));
if(cljs.core.truth_(temp__5802__auto__)){
var source = temp__5802__auto__;
var sources = cljs.core.some((function (p1__26966_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.name(source),cljs.core.name(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(p1__26966_SHARP_)))){
return p1__26966_SHARP_;
} else {
return null;
}
}),connections);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((stress.core.follow_source.cljs$core$IFn$_invoke$arity$2 ? stress.core.follow_source.cljs$core$IFn$_invoke$arity$2(sources,connections) : stress.core.follow_source.call(null, sources,connections)),edge);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [edge], null);
}
});
stress.core.animate = (function stress$core$animate(connected,connections){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (connection){
var connection__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(connection,new cljs.core.Keyword(null,"animated","animated",129318795));
var temp__5802__auto__ = cljs.core.some((function (p1__26972_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(p1__26972_SHARP_),new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(connection__$1))){
return p1__26972_SHARP_;
} else {
return null;
}
}),connected);
if(cljs.core.truth_(temp__5802__auto__)){
var edge = temp__5802__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(edge,new cljs.core.Keyword(null,"animated","animated",129318795),true);
} else {
return connection__$1;
}
}),connections);
});
stress.core.sum = (function stress$core$sum(connected){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"source","source",-433931539)),cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reagent_flow.core.get_node_by_id,cljs.core.deref(stress.core.nodes))),cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"data","data",-232669377)))),cljs.core._PLUS_,(0),connected);
});
stress.core.sum_node_edge = (function stress$core$sum_node_edge(connection,connections){
var or__5002__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(connection),"sum-node"))?connection:null);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.first(reagent_flow.core.get_connections_by_node_id.cljs$core$IFn$_invoke$arity$variadic(connections,new cljs.core.Keyword(null,"sum-node","sum-node",-235712885),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"target","target",253001721)], 0)));
}
});
stress.core.find_connected = (function stress$core$find_connected(connection,connections){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (p1__26981_SHARP_){
return stress.core.follow_source(p1__26981_SHARP_,connections);
})),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.some_QMARK_)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stress.core.sum_node_edge(connection,connections)], null));
});
stress.core.sum_node = (function stress$core$sum_node(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),["Sum: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(stress.core.sum_node_value))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_flow.core.handle,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"sum-handle","sum-handle",-603474787),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"top","top",-1856271961)], null)], null)], null);
});
if((typeof stress !== 'undefined') && (typeof stress.core !== 'undefined') && (typeof stress.core.node_types !== 'undefined')){
} else {
stress.core.node_types = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sum-node","sum-node",-235712885),stress.core.sum_node], null);
}
stress.core.main = (function stress$core$main(){
var handle_node_changes = (function stress$core$main_$_handle_node_changes(delta){
return cljs.core.reset_BANG_(stress.core.nodes,reagent_flow.core.apply_node_changes(delta,cljs.core.deref(stress.core.nodes)));
});
var handle_edge_changes = (function stress$core$main_$_handle_edge_changes(delta){
var connections = reagent_flow.core.apply_edge_changes(delta,cljs.core.deref(stress.core.edges));
var pred__26996 = cljs.core._EQ_;
var expr__26997 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.first(delta)));
if(cljs.core.truth_((pred__26996.cljs$core$IFn$_invoke$arity$2 ? pred__26996.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"remove","remove",-131428414),expr__26997) : pred__26996.call(null, new cljs.core.Keyword(null,"remove","remove",-131428414),expr__26997)))){
var connected = stress.core.find_connected(delta,connections);
var connections__$1 = stress.core.animate(connected,connections);
cljs.core.reset_BANG_(stress.core.sum_node_value,stress.core.sum(connected));

return cljs.core.reset_BANG_(stress.core.edges,connections__$1);
} else {
return cljs.core.reset_BANG_(stress.core.edges,connections);
}
});
var handle_connect = (function stress$core$main_$_handle_connect(delta){
var delta__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(delta,new cljs.core.Keyword(null,"id","id",-1388402092),["edge-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((2) + cljs.core.count(cljs.core.deref(stress.core.edges))))].join(''));
var connections = reagent_flow.core.add_edge(delta__$1,cljs.core.deref(stress.core.edges));
var connected = stress.core.find_connected(delta__$1,connections);
var connections__$1 = stress.core.animate(connected,connections);
cljs.core.reset_BANG_(stress.core.sum_node_value,stress.core.sum(connected));

return cljs.core.reset_BANG_(stress.core.edges,connections__$1);
});
var handle_init = (function stress$core$main_$_handle_init(p__26999){
var map__27000 = p__26999;
var map__27000__$1 = cljs.core.__destructure_map(map__27000);
var provider = map__27000__$1;
var set_center = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27000__$1,new cljs.core.Keyword(null,"set-center","set-center",-1420039187));
var x = ((200) * (stress.core.cols - (1)));
var y = ((200) * (stress.core.rows - (1)));
var G__27002 = x;
var G__27003 = y;
var G__27004 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"zoom","zoom",-1827487038),0.85], null);
return (set_center.cljs$core$IFn$_invoke$arity$3 ? set_center.cljs$core$IFn$_invoke$arity$3(G__27002,G__27003,G__27004) : set_center.call(null, G__27002,G__27003,G__27004));
});
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_flow.core.reagent_flow,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-connect","on-connect",-1148973056),new cljs.core.Keyword(null,"connection-line-type","connection-line-type",-653740479),new cljs.core.Keyword(null,"on-nodes-change","on-nodes-change",464408068),new cljs.core.Keyword(null,"node-types","node-types",1539943342),new cljs.core.Keyword(null,"on-edges-change","on-edges-change",-1915408527),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"on-init","on-init",-1723361030),new cljs.core.Keyword(null,"default-edge-options","default-edge-options",1445420349),new cljs.core.Keyword(null,"edges","edges",-694791395)],[handle_connect,new cljs.core.Keyword(null,"smoothstep","smoothstep",968032787),handle_node_changes,stress.core.node_types,handle_edge_changes,cljs.core.deref(stress.core.nodes),new cljs.core.Keyword(null,"stress","stress",1198669591),handle_init,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"smoothstep","smoothstep",968032787)], null),cljs.core.deref(stress.core.edges)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_flow.core.background,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#ffffff"], null)], null)], null)], null);
});
});
if((typeof stress !== 'undefined') && (typeof stress.core !== 'undefined') && (typeof stress.core.root !== 'undefined')){
} else {
stress.core.root = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
stress.core.error_boundary = (function stress$core$error_boundary(var_args){
var args__5732__auto__ = [];
var len__5726__auto___27015 = arguments.length;
var i__5727__auto___27016 = (0);
while(true){
if((i__5727__auto___27016 < len__5726__auto___27015)){
args__5732__auto__.push((arguments[i__5727__auto___27016]));

var G__27017 = (i__5727__auto___27016 + (1));
i__5727__auto___27016 = G__27017;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return stress.core.error_boundary.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(stress.core.error_boundary.cljs$core$IFn$_invoke$arity$variadic = (function (children){
var error = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"ErrorBoundary",new cljs.core.Keyword(null,"get-derived-state-from-error","get-derived-state-from-error",1473896468),(function (e){
return ({});
}),new cljs.core.Keyword(null,"component-did-catch","component-did-catch",652725810),(function (err,info){
return cljs.core.reset_BANG_(error,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [err,info], null));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function() { 
var G__27021__delegate = function (children__$1){
if((cljs.core.deref(error) == null)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),children__$1);
} else {
var vec__27007 = cljs.core.deref(error);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27007,(0),null);
var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27007,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.error","pre.error",956775623),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([info], 0))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return console.error(info);
})], null),"Output stacktrace"], null)], null);
}
};
var G__27021 = function (var_args){
var children__$1 = null;
if (arguments.length > 0) {
var G__27022__i = 0, G__27022__a = new Array(arguments.length -  0);
while (G__27022__i < G__27022__a.length) {G__27022__a[G__27022__i] = arguments[G__27022__i + 0]; ++G__27022__i;}
  children__$1 = new cljs.core.IndexedSeq(G__27022__a,0,null);
} 
return G__27021__delegate.call(this,children__$1);};
G__27021.cljs$lang$maxFixedArity = 0;
G__27021.cljs$lang$applyTo = (function (arglist__27023){
var children__$1 = cljs.core.seq(arglist__27023);
return G__27021__delegate(children__$1);
});
G__27021.cljs$core$IFn$_invoke$arity$variadic = G__27021__delegate;
return G__27021;
})()
], null));
}));

(stress.core.error_boundary.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(stress.core.error_boundary.cljs$lang$applyTo = (function (seq27006){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27006));
}));

stress.core.init = (function stress$core$init(element){
if((cljs.core.deref(stress.core.root) == null)){
cljs.core.reset_BANG_(stress.core.root,reagent.dom.client.create_root(element));

return reagent.dom.client.render.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(stress.core.root),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stress.core.error_boundary,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stress.core.main], null)], null));
} else {
return null;
}
});
goog.exportSymbol('stress.core.init', stress.core.init);
stress.core.unload = (function stress$core$unload(element){
if((!((cljs.core.deref(stress.core.root) == null)))){
reagent.dom.client.unmount(cljs.core.deref(stress.core.root));

return cljs.core.reset_BANG_(stress.core.root,null);
} else {
return null;
}
});
goog.exportSymbol('stress.core.unload', stress.core.unload);

//# sourceMappingURL=stress.core.js.map
