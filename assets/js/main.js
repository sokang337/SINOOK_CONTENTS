
$(function () {
    $('[class*=projectImg]').click(function () {
		if($(this).hasClass('on')){
			$(this).removeClass('on').addClass('off');
			$(this).animate({'left': '150px'},'slow');
		}else{
			$(this).removeClass('off').addClass('on');
			$(this).animate({'left':'0'},'slow');
		}
    });

	$('[class*=startImg]').click(function () {
		let newPage = window.open("about:blank");
		// project list
        let project1 = "https://www.hyundai.com/kr/ko/vehicles/kona/highlights";
        let project2 = "http://www.timeserverkorea.co.kr/";
        let project3 = "http://www.tiiz.co.kr/";
        let project4 = "https://www.cjazit.org/";
		let project5 = "http://taihochatbotv4-preview.azurewebsites.net/";

		if ($(this)[0].id === 'webpage1') {
            newPage.location.href = project1;
        } else if ($(this)[0].id === 'webpage2') {
            newPage.location.href = project2;
        } else if ($(this)[0].id === 'webpage3') {
            newPage.location.href = project3;
        } else if ($(this)[0].id === 'webpage4') {
            newPage.location.href = project4;
        }
	});

    $('[class*=githubImg]').click(function () {
		let newPage = window.open("about:blank");
        newPage.location.href = "https://github.com/sokang337";
    });
});