goog.provide('reagent_flow.core');
var module$node_modules$$xyflow$react$dist$umd$index=shadow.js.require("module$node_modules$$xyflow$react$dist$umd$index", {});
reagent_flow.core.background = reagent.core.adapt_react_class(module$node_modules$$xyflow$react$dist$umd$index.Background);
reagent_flow.core.base_edge = reagent.core.adapt_react_class(module$node_modules$$xyflow$react$dist$umd$index.BaseEdge);
reagent_flow.core.bezier_edge = reagent.core.adapt_react_class(module$node_modules$$xyflow$react$dist$umd$index.BezierEdge);
reagent_flow.core.control_button = reagent.core.adapt_react_class(module$node_modules$$xyflow$react$dist$umd$index.ControlButton);
reagent_flow.core.controls = reagent.core.adapt_react_class(module$node_modules$$xyflow$react$dist$umd$index.Controls);
reagent_flow.core.edge_label_renderer = reagent.core.adapt_react_class(module$node_modules$$xyflow$react$dist$umd$index.EdgeLabelRenderer);
reagent_flow.core.edge_text = reagent.core.adapt_react_class(module$node_modules$$xyflow$react$dist$umd$index.EdgeText);
reagent_flow.core.handle = reagent.core.adapt_react_class(module$node_modules$$xyflow$react$dist$umd$index.Handle);
reagent_flow.core.mini_map = reagent.core.adapt_react_class(module$node_modules$$xyflow$react$dist$umd$index.MiniMap);
reagent_flow.core.node_resizer = reagent.core.adapt_react_class(module$node_modules$$xyflow$react$dist$umd$index.NodeResizer);
reagent_flow.core.node_resize_control = reagent.core.adapt_react_class(module$node_modules$$xyflow$react$dist$umd$index.NodeResizeControl);
reagent_flow.core.node_toolbar = reagent.core.adapt_react_class(module$node_modules$$xyflow$react$dist$umd$index.NodeToolbar);
reagent_flow.core.panel = reagent.core.adapt_react_class(module$node_modules$$xyflow$react$dist$umd$index.Panel);
reagent_flow.core.position = reagent.core.adapt_react_class(module$node_modules$$xyflow$react$dist$umd$index.Position);
reagent_flow.core.react_flow = reagent.core.adapt_react_class(module$node_modules$$xyflow$react$dist$umd$index.ReactFlow);
reagent_flow.core.reagent_flow_provider = reagent.core.adapt_react_class(module$node_modules$$xyflow$react$dist$umd$index.ReactFlowProvider);
reagent_flow.core.simple_bezier_edge = reagent.core.adapt_react_class(module$node_modules$$xyflow$react$dist$umd$index.SimpleBezierEdge);
reagent_flow.core.smooth_step_edge = reagent.core.adapt_react_class(module$node_modules$$xyflow$react$dist$umd$index.SmoothStepEdge);
reagent_flow.core.step_edge = reagent.core.adapt_react_class(module$node_modules$$xyflow$react$dist$umd$index.StepEdge);
reagent_flow.core.straight_edge = reagent.core.adapt_react_class(module$node_modules$$xyflow$react$dist$umd$index.StraightEdge);
reagent_flow.core.box_to_rect = module$node_modules$$xyflow$react$dist$umd$index.boxToRect;
reagent_flow.core.get_bezier_path = module$node_modules$$xyflow$react$dist$umd$index.getBezierPath;
reagent_flow.core.get_bounds_of_rects = module$node_modules$$xyflow$react$dist$umd$index.getBoundsOfRects;
reagent_flow.core.get_connected_edes = module$node_modules$$xyflow$react$dist$umd$index.getConnectedEdes;
reagent_flow.core.get_incomers = module$node_modules$$xyflow$react$dist$umd$index.getIncomers;
reagent_flow.core.get_marker_end = module$node_modules$$xyflow$react$dist$umd$index.getMarkerEnd;
reagent_flow.core.get_outgoers = module$node_modules$$xyflow$react$dist$umd$index.getOutgoers;
reagent_flow.core.get_rect_of_nodes = module$node_modules$$xyflow$react$dist$umd$index.getRectOfNodes;
reagent_flow.core.get_simple_bezier_path = module$node_modules$$xyflow$react$dist$umd$index.getSimpleBezierPath;
reagent_flow.core.get_smooth_step_path = module$node_modules$$xyflow$react$dist$umd$index.getSmoothStepPath;
reagent_flow.core.get_straight_path = module$node_modules$$xyflow$react$dist$umd$index.getStraightPath;
reagent_flow.core.get_transform_for_bounds = module$node_modules$$xyflow$react$dist$umd$index.getTransformForBounds;
reagent_flow.core.internals_symbol = module$node_modules$$xyflow$react$dist$umd$index.internalsSymbol;
reagent_flow.core.is_edge = module$node_modules$$xyflow$react$dist$umd$index.isEdge;
reagent_flow.core.is_node = module$node_modules$$xyflow$react$dist$umd$index.isNode;
reagent_flow.core.rect_to_box = module$node_modules$$xyflow$react$dist$umd$index.rectToBox;
reagent_flow.core.update_edge = module$node_modules$$xyflow$react$dist$umd$index.updateEdge;
reagent_flow.core.use_edges = module$node_modules$$xyflow$react$dist$umd$index.useEdges;
reagent_flow.core.use_edges_state = module$node_modules$$xyflow$react$dist$umd$index.useEdgesState;
reagent_flow.core.use_key_press = module$node_modules$$xyflow$react$dist$umd$index.useKeyPress;
reagent_flow.core.use_nodes = module$node_modules$$xyflow$react$dist$umd$index.useNodes;
reagent_flow.core.use_nodes_initialized = module$node_modules$$xyflow$react$dist$umd$index.useNodesInitialized;
reagent_flow.core.use_nodes_state = module$node_modules$$xyflow$react$dist$umd$index.useNodesState;
reagent_flow.core.use_on_selection_change = module$node_modules$$xyflow$react$dist$umd$index.useOnSelectionChange;
reagent_flow.core.use_on_viewport_change = module$node_modules$$xyflow$react$dist$umd$index.useOnViewportChange;
reagent_flow.core.use_reagent_flow = module$node_modules$$xyflow$react$dist$umd$index.useReactFlow;
reagent_flow.core.use_store = module$node_modules$$xyflow$react$dist$umd$index.useStore;
reagent_flow.core.use_store_api = module$node_modules$$xyflow$react$dist$umd$index.useStoreApi;
reagent_flow.core.use_update_node_internals = module$node_modules$$xyflow$react$dist$umd$index.useUpdateNodeInternals;
reagent_flow.core.use_viewport = module$node_modules$$xyflow$react$dist$umd$index.useViewport;
reagent_flow.core.FlowPosition = module$node_modules$$xyflow$react$dist$umd$index.Position;
reagent_flow.core.FlowXYPosition = module$node_modules$$xyflow$react$dist$umd$index.XYPosition;
reagent_flow.core.FlowXYZPosition = module$node_modules$$xyflow$react$dist$umd$index.XYZPosition;
reagent_flow.core.FlowDimensions = module$node_modules$$xyflow$react$dist$umd$index.Dimensions;
reagent_flow.core.FlowRect = module$node_modules$$xyflow$react$dist$umd$index.Rect;
reagent_flow.core.FlowBox = module$node_modules$$xyflow$react$dist$umd$index.Box;
reagent_flow.core.FlowTransform = module$node_modules$$xyflow$react$dist$umd$index.Transform;
reagent_flow.core.FlowCoordinateExtent = module$node_modules$$xyflow$react$dist$umd$index.CoordinateExtent;
reagent_flow.core.FlowNode = module$node_modules$$xyflow$react$dist$umd$index.Node;
reagent_flow.core.FlowNodeMouseHandler = module$node_modules$$xyflow$react$dist$umd$index.NodeMouseHandler;
reagent_flow.core.FlowNodeDragHandler = module$node_modules$$xyflow$react$dist$umd$index.NodeDragHandler;
reagent_flow.core.FlowSelectionDragHandler = module$node_modules$$xyflow$react$dist$umd$index.SelectionDragHandler;
reagent_flow.core.FlowWrapNodeProps = module$node_modules$$xyflow$react$dist$umd$index.WrapNodeProps;
reagent_flow.core.FlowNodeProps = module$node_modules$$xyflow$react$dist$umd$index.NodeProps;
reagent_flow.core.FlowNodeHandleBounds = module$node_modules$$xyflow$react$dist$umd$index.NodeHandleBounds;
reagent_flow.core.FlowNodeDimensionUpdate = module$node_modules$$xyflow$react$dist$umd$index.NodeDimensionUpdate;
reagent_flow.core.FlowNodeInternals = module$node_modules$$xyflow$react$dist$umd$index.NodeInternals;
reagent_flow.core.FlowNodeBounds = module$node_modules$$xyflow$react$dist$umd$index.NodeBounds;
reagent_flow.core.FlowNodeDragItem = module$node_modules$$xyflow$react$dist$umd$index.NodeDragItem;
reagent_flow.core.FlowNodeOrigin = module$node_modules$$xyflow$react$dist$umd$index.NodeOrigin;
reagent_flow.core.FlowReactFlowJsonObject = module$node_modules$$xyflow$react$dist$umd$index.ReactFlowJsonObject;
reagent_flow.core.FlowInstance = module$node_modules$$xyflow$react$dist$umd$index.Instance;
reagent_flow.core.FlowReactFlowInstance = module$node_modules$$xyflow$react$dist$umd$index.ReactFlowInstance;
reagent_flow.core.FlowHandleType = module$node_modules$$xyflow$react$dist$umd$index.HandleType;
reagent_flow.core.FlowStartHandle = module$node_modules$$xyflow$react$dist$umd$index.StartHandle;
reagent_flow.core.FlowHandleProps = module$node_modules$$xyflow$react$dist$umd$index.HandleProps;
reagent_flow.core.FlowNodeTypes = module$node_modules$$xyflow$react$dist$umd$index.NodeTypes;
reagent_flow.core.FlowNodeTypesWrapped = module$node_modules$$xyflow$react$dist$umd$index.NodeTypesWrapped;
reagent_flow.core.FlowEdgeTypes = module$node_modules$$xyflow$react$dist$umd$index.EdgeTypes;
reagent_flow.core.FlowEdgeTypesWrapped = module$node_modules$$xyflow$react$dist$umd$index.EdgeTypesWrapped;
reagent_flow.core.FlowFitView = module$node_modules$$xyflow$react$dist$umd$index.FitView;
reagent_flow.core.FlowProject = module$node_modules$$xyflow$react$dist$umd$index.Project;
reagent_flow.core.FlowOnNodesChange = module$node_modules$$xyflow$react$dist$umd$index.OnNodesChange;
reagent_flow.core.FlowOnEdgesChange = module$node_modules$$xyflow$react$dist$umd$index.OnEdgesChange;
reagent_flow.core.FlowOnNodesDelete = module$node_modules$$xyflow$react$dist$umd$index.OnNodesDelete;
reagent_flow.core.FlowOnEdgesDelete = module$node_modules$$xyflow$react$dist$umd$index.OnEdgesDelete;
reagent_flow.core.FlowOnMove = module$node_modules$$xyflow$react$dist$umd$index.OnMove;
reagent_flow.core.FlowOnMoveStart = module$node_modules$$xyflow$react$dist$umd$index.OnMoveStart;
reagent_flow.core.FlowOnMoveEnd = module$node_modules$$xyflow$react$dist$umd$index.OnMoveEnd;
reagent_flow.core.FlowZoomInOut = module$node_modules$$xyflow$react$dist$umd$index.ZoomInOut;
reagent_flow.core.FlowZoomTo = module$node_modules$$xyflow$react$dist$umd$index.ZoomTo;
reagent_flow.core.FlowGetZoom = module$node_modules$$xyflow$react$dist$umd$index.GetZoom;
reagent_flow.core.FlowGetViewport = module$node_modules$$xyflow$react$dist$umd$index.GetViewport;
reagent_flow.core.FlowSetViewport = module$node_modules$$xyflow$react$dist$umd$index.SetViewport;
reagent_flow.core.FlowSetCenter = module$node_modules$$xyflow$react$dist$umd$index.SetCenter;
reagent_flow.core.FlowFitBounds = module$node_modules$$xyflow$react$dist$umd$index.FitBounds;
reagent_flow.core.FlowOnInit = module$node_modules$$xyflow$react$dist$umd$index.OnInit;
reagent_flow.core.FlowConnection = module$node_modules$$xyflow$react$dist$umd$index.Connection;
reagent_flow.core.FlowConnectionMode = module$node_modules$$xyflow$react$dist$umd$index.ConnectionMode;
reagent_flow.core.FlowOnConnect = module$node_modules$$xyflow$react$dist$umd$index.OnConnect;
reagent_flow.core.FlowFitViewOptions = module$node_modules$$xyflow$react$dist$umd$index.FitViewOptions;
reagent_flow.core.FlowOnConnectStartParams = module$node_modules$$xyflow$react$dist$umd$index.OnConnectStartParams;
reagent_flow.core.FlowOnConnectStart = module$node_modules$$xyflow$react$dist$umd$index.OnConnectStart;
reagent_flow.core.FlowOnConnectEnd = module$node_modules$$xyflow$react$dist$umd$index.OnConnectEnd;
reagent_flow.core.FlowViewport = module$node_modules$$xyflow$react$dist$umd$index.Viewport;
reagent_flow.core.FlowKeyCode = module$node_modules$$xyflow$react$dist$umd$index.KeyCode;
reagent_flow.core.FlowSnapGrid = module$node_modules$$xyflow$react$dist$umd$index.SnapGrid;
reagent_flow.core.FlowPanOnScrollMode = module$node_modules$$xyflow$react$dist$umd$index.PanOnScrollMode;
reagent_flow.core.FlowViewportHelperFunctionOptions = module$node_modules$$xyflow$react$dist$umd$index.ViewportHelperFunctionOptions;
reagent_flow.core.FlowSetCenterOptions = module$node_modules$$xyflow$react$dist$umd$index.SetCenterOptions;
reagent_flow.core.FlowFitBoundsOptions = module$node_modules$$xyflow$react$dist$umd$index.FitBoundsOptions;
reagent_flow.core.FlowUnselectNodesAndEdgesParams = module$node_modules$$xyflow$react$dist$umd$index.UnselectNodesAndEdgesParams;
reagent_flow.core.FlowOnViewportChange = module$node_modules$$xyflow$react$dist$umd$index.OnViewportChange;
reagent_flow.core.FlowViewportHelperFunctions = module$node_modules$$xyflow$react$dist$umd$index.ViewportHelperFunctions;
reagent_flow.core.FlowReactFlowStore = module$node_modules$$xyflow$react$dist$umd$index.ReactFlowStore;
reagent_flow.core.FlowReactFlowActions = module$node_modules$$xyflow$react$dist$umd$index.ReactFlowActions;
reagent_flow.core.FlowReactFlowState = module$node_modules$$xyflow$react$dist$umd$index.ReactFlowState;
reagent_flow.core.FlowUpdateNodeInternals = module$node_modules$$xyflow$react$dist$umd$index.UpdateNodeInternals;
reagent_flow.core.FlowOnSelectionChangeParams = module$node_modules$$xyflow$react$dist$umd$index.OnSelectionChangeParams;
reagent_flow.core.FlowOnSelectionChangeFunc = module$node_modules$$xyflow$react$dist$umd$index.OnSelectionChangeFunc;
reagent_flow.core.FlowPanelPosition = module$node_modules$$xyflow$react$dist$umd$index.PanelPosition;
reagent_flow.core.FlowProOptions = module$node_modules$$xyflow$react$dist$umd$index.ProOptions;
reagent_flow.core.FlowSmoothStepPathOptions = module$node_modules$$xyflow$react$dist$umd$index.SmoothStepPathOptions;
reagent_flow.core.FlowBezierPathOptions = module$node_modules$$xyflow$react$dist$umd$index.BezierPathOptions;
reagent_flow.core.FlowEdge = module$node_modules$$xyflow$react$dist$umd$index.Edge;
reagent_flow.core.FlowDefaultEdgeOptions = module$node_modules$$xyflow$react$dist$umd$index.DefaultEdgeOptions;
reagent_flow.core.FlowEdgeMouseHandler = module$node_modules$$xyflow$react$dist$umd$index.EdgeMouseHandler;
reagent_flow.core.FlowWrapEdgeProps = module$node_modules$$xyflow$react$dist$umd$index.WrapEdgeProps;
reagent_flow.core.FlowEdgeProps = module$node_modules$$xyflow$react$dist$umd$index.EdgeProps;
reagent_flow.core.FlowBaseEdgeProps = module$node_modules$$xyflow$react$dist$umd$index.BaseEdgeProps;
reagent_flow.core.FlowSmoothStepEdgeProps = module$node_modules$$xyflow$react$dist$umd$index.SmoothStepEdgeProps;
reagent_flow.core.FlowBezierEdgeProps = module$node_modules$$xyflow$react$dist$umd$index.BezierEdgeProps;
reagent_flow.core.FlowEdgeTextProps = module$node_modules$$xyflow$react$dist$umd$index.EdgeTextProps;
reagent_flow.core.FlowConnectionLineType = module$node_modules$$xyflow$react$dist$umd$index.ConnectionLineType;
reagent_flow.core.FlowConnectionLineComponentProps = module$node_modules$$xyflow$react$dist$umd$index.ConnectionLineComponentProps;
reagent_flow.core.FlowConnectionLineComponent = module$node_modules$$xyflow$react$dist$umd$index.ConnectionLineComponent;
reagent_flow.core.FlowOnEdgeUpdateFunc = module$node_modules$$xyflow$react$dist$umd$index.OnEdgeUpdateFunc;
reagent_flow.core.FlowEdgeMarker = module$node_modules$$xyflow$react$dist$umd$index.EdgeMarker;
reagent_flow.core.FlowEdgeMarkerType = module$node_modules$$xyflow$react$dist$umd$index.EdgeMarkerType;
reagent_flow.core.FlowMarkerType = module$node_modules$$xyflow$react$dist$umd$index.MarkerType;
reagent_flow.core.FlowReactFlowProps = module$node_modules$$xyflow$react$dist$umd$index.ReactFlowProps;
reagent_flow.core.FlowReactFlowRefType = module$node_modules$$xyflow$react$dist$umd$index.ReactFlowRefType;
reagent_flow.core.FlowNodeDimensionChange = module$node_modules$$xyflow$react$dist$umd$index.NodeDimensionChange;
reagent_flow.core.FlowNodePositionChange = module$node_modules$$xyflow$react$dist$umd$index.NodePositionChange;
reagent_flow.core.FlowNodeSelectionChange = module$node_modules$$xyflow$react$dist$umd$index.NodeSelectionChange;
reagent_flow.core.FlowNodeRemoveChange = module$node_modules$$xyflow$react$dist$umd$index.NodeRemoveChange;
reagent_flow.core.FlowNodeAddChange = module$node_modules$$xyflow$react$dist$umd$index.NodeAddChange;
reagent_flow.core.FlowNodeResetChange = module$node_modules$$xyflow$react$dist$umd$index.NodeResetChange;
reagent_flow.core.FlowNodeChange = module$node_modules$$xyflow$react$dist$umd$index.NodeChange;
reagent_flow.core.FlowEdgeSelectionChange = module$node_modules$$xyflow$react$dist$umd$index.EdgeSelectionChange;
reagent_flow.core.FlowEdgeRemoveChange = module$node_modules$$xyflow$react$dist$umd$index.EdgeRemoveChange;
reagent_flow.core.FlowEdgeAddChange = module$node_modules$$xyflow$react$dist$umd$index.EdgeAddChange;
reagent_flow.core.FlowEdgeResetChange = module$node_modules$$xyflow$react$dist$umd$index.EdgeResetChange;
reagent_flow.core.FlowEdgeChange = module$node_modules$$xyflow$react$dist$umd$index.EdgeChange;
reagent_flow.core.___GT_kebab_case = cljs.core.memoize(camel_snake_kebab.core.__GT_kebab_case);
reagent_flow.core.___GT_camelCase = cljs.core.memoize(camel_snake_kebab.core.__GT_camelCase);
/**
 * Normalize arguments to always have the form [props children] like
 * hiccup elements.
 */
reagent_flow.core.__GT_params = (function reagent_flow$core$__GT_params(args){
var G__26916 = args;
if((!(cljs.core.map_QMARK_(cljs.core.first(args))))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__26916,null);
} else {
return G__26916;
}
});
/**
 * Walks a map and replaces all keys by applying function to the keys.
 */
reagent_flow.core.change_keys = (function reagent_flow$core$change_keys(m,f){
var f__$1 = (function (p__26917){
var vec__26918 = p__26917;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26918,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26918,(1),null);
if(((typeof k === 'string') || ((k instanceof cljs.core.Keyword)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k) : f.call(null, k)),v], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
}
});
return clojure.walk.postwalk((function (x){
if(cljs.core.map_QMARK_(x)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(f__$1,x));
} else {
return x;
}
}),m);
});
reagent_flow.core.flowjs__GT_clj = (function reagent_flow$core$flowjs__GT_clj(o){

var obj = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(o,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
if(cljs.core.map_QMARK_(obj)){
return reagent_flow.core.change_keys(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(obj,""),reagent_flow.core.___GT_kebab_case);
} else {
if(cljs.core.vector_QMARK_(obj)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent_flow.core.flowjs__GT_clj,obj);
} else {
return obj;
}
}
});
/**
 * Convert Clojure map into a JavaScript object with camelCased keys.
 */
reagent_flow.core.clj__GT_flowjs = (function reagent_flow$core$clj__GT_flowjs(o){
return cljs.core.clj__GT_js(reagent_flow.core.change_keys(o,reagent_flow.core.___GT_camelCase));
});
reagent_flow.core.apply_changes = (function reagent_flow$core$apply_changes(f,delta,src){
return reagent_flow.core.flowjs__GT_clj((function (){var G__26921 = reagent_flow.core.clj__GT_flowjs(delta);
var G__26922 = reagent_flow.core.clj__GT_flowjs(src);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__26921,G__26922) : f.call(null, G__26921,G__26922));
})());
});
reagent_flow.core.react_flowify = (function reagent_flow$core$react_flowify(types){
return cljs.core.clj__GT_js(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(medley.core.map_vals,reagent.core.reactify_component)(types));
});
reagent_flow.core.reagent_flow_STAR_ = (function reagent_flow$core$reagent_flow_STAR_(p__26927){
var vec__26928 = p__26927;
var seq__26929 = cljs.core.seq(vec__26928);
var first__26930 = cljs.core.first(seq__26929);
var seq__26929__$1 = cljs.core.next(seq__26929);
var on_viewport_change = first__26930;
var first__26930__$1 = cljs.core.first(seq__26929__$1);
var seq__26929__$2 = cljs.core.next(seq__26929__$1);
var on_viewport_start = first__26930__$1;
var first__26930__$2 = cljs.core.first(seq__26929__$2);
var seq__26929__$3 = cljs.core.next(seq__26929__$2);
var on_viewport_end = first__26930__$2;
var args = seq__26929__$3;
var vec__26931 = reagent_flow.core.__GT_params(args);
var seq__26932 = cljs.core.seq(vec__26931);
var first__26933 = cljs.core.first(seq__26932);
var seq__26932__$1 = cljs.core.next(seq__26932);
var params = first__26933;
var children = seq__26932__$1;
var node_types = (function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"node-types","node-types",1539943342).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__5804__auto__)){
var types = temp__5804__auto__;
return reagent_flow.core.react_flowify(types);
} else {
return null;
}
})();
var edge_types = (function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"edge-types","edge-types",1188284328).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__5804__auto__)){
var types = temp__5804__auto__;
return reagent_flow.core.react_flowify(types);
} else {
return null;
}
})();
var on_init = (function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"on-init","on-init",-1723361030).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__5804__auto__)){
var init = temp__5804__auto__;
return (function (provider){
var provider__$1 = reagent_flow.core.flowjs__GT_clj(provider);
var map__26934 = provider__$1;
var map__26934__$1 = cljs.core.__destructure_map(map__26934);
var set_center = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26934__$1,new cljs.core.Keyword(null,"set-center","set-center",-1420039187));
var screen_to_flow_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26934__$1,new cljs.core.Keyword(null,"screen-to-flow-position","screen-to-flow-position",1284201580));
var G__26935 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(provider__$1,new cljs.core.Keyword(null,"set-center","set-center",-1420039187),(function() { 
var G__26969__delegate = function (x,y,options){
var G__26936 = x;
var G__26937 = y;
var G__26938 = cljs.core.clj__GT_js(cljs.core.first(options));
return (set_center.cljs$core$IFn$_invoke$arity$3 ? set_center.cljs$core$IFn$_invoke$arity$3(G__26936,G__26937,G__26938) : set_center.call(null, G__26936,G__26937,G__26938));
};
var G__26969 = function (x,y,var_args){
var options = null;
if (arguments.length > 2) {
var G__26970__i = 0, G__26970__a = new Array(arguments.length -  2);
while (G__26970__i < G__26970__a.length) {G__26970__a[G__26970__i] = arguments[G__26970__i + 2]; ++G__26970__i;}
  options = new cljs.core.IndexedSeq(G__26970__a,0,null);
} 
return G__26969__delegate.call(this,x,y,options);};
G__26969.cljs$lang$maxFixedArity = 2;
G__26969.cljs$lang$applyTo = (function (arglist__26971){
var x = cljs.core.first(arglist__26971);
arglist__26971 = cljs.core.next(arglist__26971);
var y = cljs.core.first(arglist__26971);
var options = cljs.core.rest(arglist__26971);
return G__26969__delegate(x,y,options);
});
G__26969.cljs$core$IFn$_invoke$arity$variadic = G__26969__delegate;
return G__26969;
})()
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"screen-to-flow-position","screen-to-flow-position",1284201580),(function (p1__26923_SHARP_){
var G__26939 = cljs.core.clj__GT_js(p1__26923_SHARP_);
return (screen_to_flow_position.cljs$core$IFn$_invoke$arity$1 ? screen_to_flow_position.cljs$core$IFn$_invoke$arity$1(G__26939) : screen_to_flow_position.call(null, G__26939));
})], 0));
return (init.cljs$core$IFn$_invoke$arity$1 ? init.cljs$core$IFn$_invoke$arity$1(G__26935) : init.call(null, G__26935));
});
} else {
return null;
}
})();
var on_nodes_change = (function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"on-nodes-change","on-nodes-change",464408068).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__5804__auto__)){
var node_change = temp__5804__auto__;
return (function (delta){
var G__26940 = reagent_flow.core.flowjs__GT_clj(delta);
return (node_change.cljs$core$IFn$_invoke$arity$1 ? node_change.cljs$core$IFn$_invoke$arity$1(G__26940) : node_change.call(null, G__26940));
});
} else {
return null;
}
})();
var on_edges_change = (function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"on-edges-change","on-edges-change",-1915408527).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__5804__auto__)){
var edge_change = temp__5804__auto__;
return (function (delta){
var G__26941 = reagent_flow.core.flowjs__GT_clj(delta);
return (edge_change.cljs$core$IFn$_invoke$arity$1 ? edge_change.cljs$core$IFn$_invoke$arity$1(G__26941) : edge_change.call(null, G__26941));
});
} else {
return null;
}
})();
var on_connect = (function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"on-connect","on-connect",-1148973056).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__5804__auto__)){
var connect = temp__5804__auto__;
return (function (delta){
var G__26942 = reagent_flow.core.flowjs__GT_clj(delta);
return (connect.cljs$core$IFn$_invoke$arity$1 ? connect.cljs$core$IFn$_invoke$arity$1(G__26942) : connect.call(null, G__26942));
});
} else {
return null;
}
})();
var on_connect_start = (function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"on-connect-start","on-connect-start",-1502737381).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__5804__auto__)){
var connect_start = temp__5804__auto__;
return (function (event,params__$1){
var G__26943 = event;
var G__26944 = reagent_flow.core.flowjs__GT_clj(params__$1);
return (connect_start.cljs$core$IFn$_invoke$arity$2 ? connect_start.cljs$core$IFn$_invoke$arity$2(G__26943,G__26944) : connect_start.call(null, G__26943,G__26944));
});
} else {
return null;
}
})();
var params__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(params,new cljs.core.Keyword(null,"node-types","node-types",1539943342),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"edge-types","edge-types",1188284328)], 0));
return (function (p__26945){
var vec__26946 = p__26945;
var seq__26947 = cljs.core.seq(vec__26946);
var first__26948 = cljs.core.first(seq__26947);
var seq__26947__$1 = cljs.core.next(seq__26947);
var on_viewport_change__$1 = first__26948;
var first__26948__$1 = cljs.core.first(seq__26947__$1);
var seq__26947__$2 = cljs.core.next(seq__26947__$1);
var on_viewport_start__$1 = first__26948__$1;
var first__26948__$2 = cljs.core.first(seq__26947__$2);
var seq__26947__$3 = cljs.core.next(seq__26947__$2);
var on_viewport_end__$1 = first__26948__$2;
var args__$1 = seq__26947__$3;
var vec__26949 = reagent_flow.core.__GT_params(args__$1);
var seq__26950 = cljs.core.seq(vec__26949);
var first__26951 = cljs.core.first(seq__26950);
var seq__26950__$1 = cljs.core.next(seq__26950);
var params__$2 = first__26951;
var children__$1 = seq__26950__$1;
var params__$3 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(params__$2,new cljs.core.Keyword(null,"node-types","node-types",1539943342),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"edge-types","edge-types",1188284328),new cljs.core.Keyword(null,"edges","edges",-694791395)], 0)),medley.core.map_vals.cljs$core$IFn$_invoke$arity$2(cljs.core.clj__GT_js,params__$2),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"edges","edges",-694791395),reagent_flow.core.clj__GT_flowjs(new cljs.core.Keyword(null,"edges","edges",-694791395).cljs$core$IFn$_invoke$arity$1(params__$2))], null),(cljs.core.truth_(node_types)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node-types","node-types",1539943342),node_types], null):null),(cljs.core.truth_(edge_types)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"edge-types","edge-types",1188284328),edge_types], null):null),(cljs.core.truth_(on_init)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-init","on-init",-1723361030),on_init], null):null),(cljs.core.truth_(on_nodes_change)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-nodes-change","on-nodes-change",464408068),on_nodes_change], null):null),(cljs.core.truth_(on_edges_change)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-edges-change","on-edges-change",-1915408527),on_edges_change], null):null),(cljs.core.truth_(on_connect)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-connect","on-connect",-1148973056),on_connect], null):null),(cljs.core.truth_(on_connect_start)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-connect-start","on-connect-start",-1502737381),on_connect_start], null):null)], 0));
if((((!((on_viewport_change__$1 == null)))) || ((((!((on_viewport_start__$1 == null)))) || ((!((on_viewport_end__$1 == null)))))))){
var G__26952_26973 = cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,(((!((on_viewport_change__$1 == null))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (p1__26924_SHARP_){
var G__26953 = reagent_flow.core.flowjs__GT_clj(p1__26924_SHARP_);
return (on_viewport_change__$1.cljs$core$IFn$_invoke$arity$1 ? on_viewport_change__$1.cljs$core$IFn$_invoke$arity$1(G__26953) : on_viewport_change__$1.call(null, G__26953));
})], null):null),(((!((on_viewport_start__$1 == null))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onStart","onStart",-59631847),(function (p1__26925_SHARP_){
var G__26954 = reagent_flow.core.flowjs__GT_clj(p1__26925_SHARP_);
return (on_viewport_start__$1.cljs$core$IFn$_invoke$arity$1 ? on_viewport_start__$1.cljs$core$IFn$_invoke$arity$1(G__26954) : on_viewport_start__$1.call(null, G__26954));
})], null):null),(((!((on_viewport_end__$1 == null))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onEnd","onEnd",350981180),(function (p1__26926_SHARP_){
var G__26955 = reagent_flow.core.flowjs__GT_clj(p1__26926_SHARP_);
return (on_viewport_end__$1.cljs$core$IFn$_invoke$arity$1 ? on_viewport_end__$1.cljs$core$IFn$_invoke$arity$1(G__26955) : on_viewport_end__$1.call(null, G__26955));
})], null):null)], 0)));
(reagent_flow.core.use_on_viewport_change.cljs$core$IFn$_invoke$arity$1 ? reagent_flow.core.use_on_viewport_change.cljs$core$IFn$_invoke$arity$1(G__26952_26973) : reagent_flow.core.use_on_viewport_change.call(null, G__26952_26973));
} else {
}

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_flow.core.react_flow,params__$3], null),children__$1);
});
});
/**
 * Returns a vector of nodes with `changes` applied to the `source`.
 */
reagent_flow.core.apply_node_changes = (function reagent_flow$core$apply_node_changes(changes,source){
return cljs.core.vec(reagent_flow.core.apply_changes(module$node_modules$$xyflow$react$dist$umd$index.applyNodeChanges,changes,source));
});
/**
 * Returns a vector of edges with `changes` applied to the `source`.
 */
reagent_flow.core.apply_edge_changes = (function reagent_flow$core$apply_edge_changes(changes,source){
return cljs.core.vec(reagent_flow.core.apply_changes(module$node_modules$$xyflow$react$dist$umd$index.applyEdgeChanges,changes,source));
});
/**
 * Returns a vector of edges with `edge` added to the `source`.
 */
reagent_flow.core.add_edge = (function reagent_flow$core$add_edge(edge,source){
return cljs.core.vec(reagent_flow.core.apply_changes(module$node_modules$$xyflow$react$dist$umd$index.addEdge,edge,source));
});
/**
 * Returns a map of the node with `id` from `nodes`. 
 * The returned map is supplemented with the keyword `index`.
 * 
 * Returns `nil` if the node is not found.
 */
reagent_flow.core.get_node_by_id = (function reagent_flow$core$get_node_by_id(nodes,id){
if((!((id == null)))){
var item_with_id = (function reagent_flow$core$get_node_by_id_$_item_with_id(idx,itm){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.name(id),cljs.core.name(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(itm)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(itm,new cljs.core.Keyword(null,"index","index",-1531685915),idx);
} else {
return null;
}
});
return cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2(item_with_id,nodes));
} else {
return null;
}
});
/**
 * Returns a vector of connections where the node with `id` is either
 * the source or the target.
 * 
 * Returns an empty vector if no connections are found.
 */
reagent_flow.core.get_connections_by_node_id = (function reagent_flow$core$get_connections_by_node_id(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26976 = arguments.length;
var i__5727__auto___26977 = (0);
while(true){
if((i__5727__auto___26977 < len__5726__auto___26976)){
args__5732__auto__.push((arguments[i__5727__auto___26977]));

var G__26978 = (i__5727__auto___26977 + (1));
i__5727__auto___26977 = G__26978;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return reagent_flow.core.get_connections_by_node_id.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(reagent_flow.core.get_connections_by_node_id.cljs$core$IFn$_invoke$arity$variadic = (function (connections,id,which){
var which__$1 = (function (){var or__5002__auto__ = which;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"target","target",253001721)], null);
}
})();
if((!((id == null)))){
var items_with_id = (function reagent_flow$core$items_with_id(idx,itm){
if(cljs.core.truth_(cljs.core.some((function (p1__26956_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.name(id),cljs.core.name(p1__26956_SHARP_));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26957_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(itm,p1__26957_SHARP_);
}),which__$1)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(itm,new cljs.core.Keyword(null,"index","index",-1531685915),idx);
} else {
return null;
}
});
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2(items_with_id,connections));
} else {
return null;
}
}));

(reagent_flow.core.get_connections_by_node_id.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(reagent_flow.core.get_connections_by_node_id.cljs$lang$applyTo = (function (seq26958){
var G__26959 = cljs.core.first(seq26958);
var seq26958__$1 = cljs.core.next(seq26958);
var G__26960 = cljs.core.first(seq26958__$1);
var seq26958__$2 = cljs.core.next(seq26958__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26959,G__26960,seq26958__$2);
}));

/**
 * This is the main component of `reagent-flow`. It differs from
 *   `ReactFlow` in a few ways.
 * 
 * - You pass regular Clojure data-structures to all paramaters, so
 *   vectors instead of arrays, maps instead of objects and so on.
 * - Viewport events are baked in, so you use the events
 *   `on-viewport-(change|start|end)` to listen for changes in the
 *   Viewport.
 * - reagent-flow-provider is also used, so if you need to have
 *   multiple flows on the same page, just be sure to give each of them a
 *   unique `id`.
 * 
 * Note!
 * Node-types & edge-types are called directly from within ReactFlow,
 * so the parameters returned are in their JavaScript-form. A nice
 * pattern, is to only rely on the `id` from the parameters and do
 * lookups in your state manually.
 * Ex.
 * (defn- custom-node [{:keys [id]}]
 *   (let [node (flow/get-node-by-id @nodes id)
 *         data (:data node)]
 *     [:p (:label data)]))
 */
reagent_flow.core.reagent_flow = (function reagent_flow$core$reagent_flow(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26982 = arguments.length;
var i__5727__auto___26983 = (0);
while(true){
if((i__5727__auto___26983 < len__5726__auto___26982)){
args__5732__auto__.push((arguments[i__5727__auto___26983]));

var G__26984 = (i__5727__auto___26983 + (1));
i__5727__auto___26983 = G__26984;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return reagent_flow.core.reagent_flow.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(reagent_flow.core.reagent_flow.cljs$core$IFn$_invoke$arity$variadic = (function (params,children){
var on_viewport_change = new cljs.core.Keyword(null,"on-viewport-change","on-viewport-change",1511944025).cljs$core$IFn$_invoke$arity$1(params);
var on_viewport_start = new cljs.core.Keyword(null,"on-viewport-start","on-viewport-start",2140903378).cljs$core$IFn$_invoke$arity$1(params);
var on_viewport_end = new cljs.core.Keyword(null,"on-viewport-end","on-viewport-end",824856362).cljs$core$IFn$_invoke$arity$1(params);
var params__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(params,new cljs.core.Keyword(null,"on-viewport-change","on-viewport-change",1511944025),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-viewport-start","on-viewport-start",2140903378),new cljs.core.Keyword(null,"on-viewport-end","on-viewport-end",824856362)], 0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_flow.core.reagent_flow_provider,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),reagent_flow.core.reagent_flow_STAR_,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [on_viewport_change,on_viewport_start,on_viewport_end,params__$1], null),children)], null)], null);
}));

(reagent_flow.core.reagent_flow.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(reagent_flow.core.reagent_flow.cljs$lang$applyTo = (function (seq26961){
var G__26962 = cljs.core.first(seq26961);
var seq26961__$1 = cljs.core.next(seq26961);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26962,seq26961__$1);
}));


//# sourceMappingURL=reagent_flow.core.js.map
