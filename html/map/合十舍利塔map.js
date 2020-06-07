$(function() {
    var e = new BMap.Map("main")
      , t = new BMap.Point(107.906371,34.449155);
    var top_left_control = new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT});// 左上角，添加比例尺
	var top_left_navigation = new BMap.NavigationControl();  //左上角，添加默认缩放平移控件
	var top_right_navigation = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_SMALL});
    e.centerAndZoom(t, 17),
    e.addControl(top_left_control),
    e.addControl(top_left_navigation),
    e.enableScrollWheelZoom(!0),
    e.setMapType(BMAP_NORMAL_MAP);
    var a = new BMap.Marker(t,{
        title: "法门寺"
    });
    a.setAnimation(BMAP_ANIMATION_BOUNCE),
    e.addOverlay(a);
});
