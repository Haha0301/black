$(function () {
	// 地图
	var map = new BMap.Map('map');
    var point = new BMap.Point(116.48735,39.917991);
    map.centerAndZoom(point, 12);
    map.addControl(new BMap.MapTypeControl());
    map.setCurrentCity('北京');
    map.enableScrollWheelZoom(true);
    var marker = new BMap.Marker(point);
    map.addOverlay(marker);

    // 导航点击
    $('nav ul li').click(function () {
    	$('nav ul li').removeClass('active');
    	$(this).addClass('active');
    })
    // 点击关于我们
    $('nav ul .about').click(function() {
        var disY = $('.sec4').offset().top - 50;
        $('body,html').animate({
            scrollTop: disY
        },1000);
    })
    // 点击联系我们
    $('nav ul .our').click(function() {
		var disY = $('.sec5').offset().top - 50;
		$('body,html').animate({
			scrollTop: disY
		},1000);
	})
})