/**
 * Created by jiangzhenzhen on 2018/1/11.
 **/
//文档加载完成
$(document).ready(function(e) {
    $('.navBar ul li').mouseover(function(){
        //alert()
        $(this).children('.secondMenu').css('display','block');
        $(this).siblings('li').children('.secondMenu').css('display','none');
    }).mouseleave(function(){
        $(this).children('.secondMenu').css('display','none');
    });
    $('.listIcon .search').mouseenter(function () {
        $(this).children('.searchInput').css('display','block');
        $(this).siblings('.list').children('.listDetail').css('display','none');
    }).mouseleave(function(){
        $(this).children('.searchInput').css('display','none');
    });
    $('.listIcon .list').mouseenter(function () {
        $(this).children('.listDetail').css('display','block');
        $(this).siblings('.search').children('.searchInput').css('display','none');
    }).mouseleave(function(){
        $(this).children('.listDetail').css('display','none');
    });


});