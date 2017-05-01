// ==UserScript==
// @name         InsideCatlin
// @version      1.0
// @description  none
// @author       Tristan
// @include      http://inside.catlin.edu/scripts/sched/index.php?*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';
    $('.period').mouseover(function () {
        $(this).css('opacity', '0.75');
    });
    $('.period').mouseleave(function () {
        $(this).css('opacity', '1');
    });
        $('.specialday a').each(function () {
        $(this).append(($.ajax({type: "GET", url: 'http://inside.catlin.edu' + $(this).attr('href'), async: false}).responseText));
        $(this).replaceWith($(this).find('#schedarea').html());

    });
    $('.specialday').each(function () {
        $(this).children('table:first').children('tbody:first').children('tr:first').remove();
        $(this).children('table:first').css('height', '100%');
    });
    var courseName;
    $('.coursename').each(function () {
        courseName = $(this).text();
        switch (courseName) {
            case 'Revolutionaries (Palma Seminar)':
                $(this).replaceWith('<div class="dropdown"> <button onclick="myFunction()" class="dropbtn">Revolutionaries</button><div id="myDropdown" class="dropdown-content"><a target="_blank" class="haiku" href="https://catlin.haikulearning.com/whitsond/revolutionariespalmaseminar/cms_page/view">Haiku</a><a target="_blank" href="https://drive.google.com/drive/folders/0B-2XZdyZBxZCbEVjOUMtYWZseGc">Drive</a></div></div>');
                break;
            case 'Spanish I':
                $(this).replaceWith('<div class="dropdown"><button onclick="myFunction()" class="dropbtn">Spanish 1</button><div id="myDropdown" class="dropdown-content"><a target="_blank" class="haiku" href="https://catlin.haikulearning.com/reggero-toledanol/spanishifoundations/cms_page/view">Haiku</a><a target="_blank" href="https://learningsite.waysidepublishing.com/dashboard">Spanish Text</a><a target="_blank" href="https://drive.google.com/drive/folders/0B-2XZdyZBxZCbGJtRzJfbm9odlU">Drive</a></div></div>');
                break;
            case 'Advanced Algebra II':
                $(this).replaceWith('<div class="dropdown"> <button onclick="myFunction()" class="dropbtn">Advanced Algebra II</button><div id="myDropdown" class="dropdown-content"><a target="_blank" class="haiku" href="https://catlin.haikulearning.com/sloank/algebraii1/cms_page/view">Haiku</a><a target="_blank" href="https://www.desmos.com/calculator">Desmos</a></div></div>');
                break;
            case 'English 9':
                $(this).replaceWith('<div class="dropdown"> <button onclick="myFunction()" class="dropbtn">English 9</button><div id="myDropdown" class="dropdown-content"><a target="_blank" class="haiku" href="https://catlin.haikulearning.com/wuk/freshmanenglish/cms_page/view">Haiku</a><a target="_blank" href="https://drive.google.com/drive/folders/0B-2XZdyZBxZCUi1qUVFTVDBRSnc">Drive</a></div></div>');
                break;
            case 'Human Crossroads':
                $(this).replaceWith('<div class="dropdown"><button onclick="myFunction()" class="dropbtn">Human Crossroads</button><div id="myDropdown" class="dropdown-content"><a target="_blank" class="haiku" href="https://catlin.haikulearning.com/masonc/humancrossroads/cms_page/view">Haiku</a><a target="_blank" href="https://drive.google.com/drive/folders/0B-2XZdyZBxZCU3JpdWJ6OURYLUk">Drive</a></div></div>');
                break;
            case 'Science I':
                $(this).replaceWith('<div class="dropdown"><button onclick="myFunction()" class="dropbtn">Science 1</button><div id="myDropdown" class="dropdown-content"><a target="_blank" class="haiku" href="https://catlin.haikulearning.com/edensm/scienceibiologyphysicschemistry/cms_page/view">Haiku</a><a target="_blank" href="https://drive.google.com/drive/folders/0B-2XZdyZBxZCSFhNT1RNSXYxWW8">Drive</a></div></div>');
                break;
            case 'EzraRich':
                $(this).replaceWith('');
                break;
        }
    });
      var mainlabel;
    $('.mainlabel') .each(function () {
        mainlabel = $(this).text();
        switch (mainlabel) {
            case 'Ezra Rich':
                $(this).replaceWith('<iframe src="http://free.timeanddate.com/clock/i5p7a8xn/n202/fn15/fs30/fcfff/tct/pct/ftb/pl7/th1" frameborder="0" width="118" height="36" allowTransparency="true"></iframe>');
                break;
        }
    });
    var sDay;
    $('.specialday > a').each(function () {
        sDay = $(this).attr('href');
        $(this).replaceWith('<iframe src="' + sDay + '" style="border: none; height: 100%;"></iframe>');
    });
})();
