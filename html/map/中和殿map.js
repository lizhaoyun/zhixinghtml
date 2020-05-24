$(function() {
    var e = new BMap.Map("main")
      , t = new BMap.Point(116.403384,39.924239);
    var top_left_control = new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT});// 左上角，添加比例尺
	var top_left_navigation = new BMap.NavigationControl();  //左上角，添加默认缩放平移控件
	var top_right_navigation = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_SMALL});
    e.centerAndZoom(t, 17),
    // e.addControl(new BMap.MapTypeControl({
    //     mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP]
    // })),
    e.addControl(top_left_control),
    e.addControl(top_left_navigation),
    // e.addControl(top_right_navigation),

    e.enableScrollWheelZoom(!0),
    e.setMapType(BMAP_NORMAL_MAP);
    var a = new BMap.Marker(t,{
        title: "故宫"
    });
    a.setAnimation(BMAP_ANIMATION_BOUNCE),
    e.addOverlay(a);
    // var n = new BMap.InfoWindow('<div style="width: 250px"><p>故宫</p><p>开放时间：9：00-17:30</p></div>',{
    //     width: 230,
    //     height: 100,
    // });
    // a.openInfoWindow(n),
    // a.addEventListener("click", function() {
    //     e.openInfoWindow(n, t)
    // });

	
	
});
