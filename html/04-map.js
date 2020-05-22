$(function() {
    var e = new BMap.Map("main")
      , t = new BMap.Point(116.403694,39.92013);
    e.centerAndZoom(t, 25),
    e.addControl(new BMap.MapTypeControl({
        mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP]
    })),
    e.enableScrollWheelZoom(!0),
    e.setMapType(BMAP_NORMAL_MAP);
    var a = new BMap.Marker(t,{
        title: "故宫"
    });
    a.setAnimation(BMAP_ANIMATION_BOUNCE),
    e.addOverlay(a);
    var n = new BMap.InfoWindow('<div style="width: 250px"><p>故宫</p><p>开放时间：9：00-17:30</p></div>',{
        width: 230,
        height: 100,
        // title: "<strong>SPA 富应用开发</strong>"
    });
    a.openInfoWindow(n),
    a.addEventListener("click", function() {
        e.openInfoWindow(n, t)
    })
});
