
$(function () {
    $('[class*=projectImg]').click(function () {
        let newPage = window.open("about:blank");
        // project list
        let project1 = "https://www.hyundai.com/kr/ko/vehicles/kona/highlights";
        let project2 = "http://www.timeserverkorea.co.kr/";
        let project3 = "http://www.tiiz.co.kr/";
        let project4 = "https://www.cjazit.org/";

        if ($(this)[0].id === 'project1') {
            newPage.location.href = project1;
        } else if ($(this)[0].id === 'project2') {
            newPage.location.href = project2;
        } else if ($(this)[0].id === 'project3') {
            newPage.location.href = project3;
        } else if ($(this)[0].id === 'project4') {
            newPage.location.href = project4;
        }
    });

    $('[class*=projectImg]').hover(function () {
        //console.log($(this));
        //let move = 
        //$(this)[0].id;
    });
});