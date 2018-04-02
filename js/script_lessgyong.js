/* 
* @Author: Marte
* @Date:   2017-08-25 16:23:41
* @Last Modified by:   Shuyu Chen
* @Last Modified time: 2017-11-01 17:01:04
*/

$(document).ready(function()
{
    // 使用less语言，初始化设备可视区域宽度，已经fontsize大小
    
    // 通过获取设备可视区域，除以20就是整个屏幕宽度为20rem，然后根据你设计图的尺寸去换算成rem，实际尺寸 /（documentWidth/20）就是写入的csspx
    // fontsize大小为设备可视区域除以一个数字就行，除以的那个数，就是整个屏幕占多少rem
    // EG:设计图尺寸是750，图片尺寸200px，除以15，就是整个屏幕的宽度为15rem
    // EG:750/15=50,表示1rem=50px，图片换算就是200/50=4rem
    document.getElementsByTagName('html')[0].style.fontSize = document.documentElement.clientWidth /7.5+'px';
    // window.onresize调用那句js
    $(window).resize(function(){
        document.getElementsByTagName('html')[0].style.fontSize = document.documentElement.clientWidth /7.5+'px';
    });


});