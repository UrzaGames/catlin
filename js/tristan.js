// ==UserScript==
// @name         InsideCatlin
// @version      1.0
// @description  none
// @author       Me
// @include      http://inside.catlin.edu/scripts/sched/index.php?*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js
// @require      https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js
// ==/UserScript==

(function() {
    'use strict';
    $('head').append('<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>');
    $('body').attr('class', 'container-fluid');
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
        // To add helpful websites to the dropdown menu: <li><a target="_blank" href=""></a></li>
        switch (courseName) {
            case 'Acc Science I':
                $(this).replaceWith('<div class="dropdown"><span class="dropdown-toggle dropdown-cursor" type="button" data-toggle="dropdown">Acc Science I<span class="caret"></span></span><ul class="dropdown-menu"><li><a target="_blank" href="https://catlin.haikulearning.com/nakayamab/acceleratedscienceibiologyphysicsche2/cms_page/view">Haiku</a></li><li><a target="_blank" href="https://drive.google.com/drive/folders/0B4on7FozdS77TmtJT2NJVTRIUkE">Google Drive</a></li><li><a href="mailto:nakayamab@catlin.edu">Email Bianca</a></li></ul></div>');
                break;
            case 'Spanish III':
                $(this).replaceWith('<div class="dropdown"><span class="dropdown-toggle dropdown-cursor" type="button" data-toggle="dropdown">Spanish III <span class="caret"></span></span><ul class="dropdown-menu"><li><a target="_blank" href="https://catlin.haikulearning.com/villar/spanishiiicommunicationb1/cms_page/view">Haiku</a></li><li><a target="_blank" href="https://drive.google.com/drive/folders/0B4Pf_pK1aPpWajk0QVRTRkVmb1U">Google Drive</a></li><li><a href="mailto:villar@catlin.edu">Email Roberto</a></li><li><a target="_blank" href="https://toluca-misterio.appspot.com/">Misterio en Toluca</a></li><li><a target="_blank" href="https://classroom.google.com/c/MjEzNTYxMzM2OFpa">Google Classroom</a></li></ul></div>');
                break;
            case 'Advanced Algebra II':
                $(this).replaceWith('<div class="dropdown"><span class="dropdown-toggle dropdown-cursor" type="button" data-toggle="dropdown">Advanced Algebra II <span class="caret"></span></span><ul class="dropdown-menu"><li><a target="_blank" href="https://catlin.haikulearning.com/sloank/algebraii1/cms_page/view">Haiku</a></li><li><a target="_blank" href="https://drive.google.com/drive/folders/0B4Pf_pK1aPpWNUFtT3ViNXN4OEU">Google Drive</a></li><li><a href="mailto:whiter@catlin.edu">Email Rick</a></li><li><a target="_blank" href="https://www.desmos.com/calculator">Desmos</a></li><li><a target="_blank" href="https://bigideaslearning.magicsw.com/mylibrary.htm">Big Ideas Math</a></li></ul></div>');
                break;
            case 'English 9':
                $(this).replaceWith('<div class="dropdown"><span class="dropdown-toggle dropdown-cursor" type="button" data-toggle="dropdown">English 9 <span class="caret"></span></span><ul class="dropdown-menu"><li><a target="_blank" href="https://catlin.haikulearning.com/wuk/freshmanenglish/cms_page/view">Haiku</a></li><li><a target="_blank" href="https://drive.google.com/drive/folders/0B4on7FozdS77S1RCN0NNWnFlN0k">Google Drive</a></li><li><a href="mailto:harlanferlol@catlin.edu">Email Liz</a></li><li><a target="_blank" href="https://docs.google.com/document/d/1N2-tGhRFaP5AMykLJVM83eIMzRtrTSaJygFMoJeKL-k/edit">Syllabus</a></li></ul></div>');
                break;
            case 'Human Crossroads':
                $(this).replaceWith('<div class="dropdown"><span class="dropdown-toggle dropdown-cursor" type="button" data-toggle="dropdown">Human Crossroads <span class="caret"></span></span><ul class="dropdown-menu"><li><a target="_blank" href="https://catlin.haikulearning.com/masonc/humancrossroads/cms_page/view">Haiku (The dates are wrong)</a></li><li><a target="_blank" href="https://drive.google.com/drive/folders/0B4on7FozdS77US1oNGhrSVdFU2s">Google Drive</a></li><li><a href="mailto:masonc@catlin.edu">Email Cliff</a></li></ul></div>');
                break;
        }
    });
    $('td.controls.arrows:first > a > img').replaceWith('<img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/Orange_animated_left_arrow.gif" height="50">');
    $('td.controls.arrows:last-child > a > img').replaceWith('<img src="https://upload.wikimedia.org/wikipedia/commons/1/13/Green-animated-arrow-right.gif" height="50">');
    var day = new Date().getDay();
    var dayLabel;
    var dayName;
    $('.daylabel').each(function () {
        dayLabel = $(this).text();
        if (dayLabel.indexOf('Mon') >= 0) {
            dayName = 1;
        } else if (dayLabel.indexOf('Tue') >= 0) {
            dayName = 2;
        } else if (dayLabel.indexOf('Wed') >= 0) {
            dayName = 3;
        } else if (dayLabel.indexOf('Thu') >= 0) {
            dayName = 4;
        } else if (dayLabel.indexOf('Fri') >= 0) {
            dayName = 5;
        }
        if (dayName == day) {
            switch (dayName) {
                case 1:
                    $(this).css('color', 'red');
                    break;
                case 2:
                    $(this).css('color', 'red');
                    break;
                case 3:
                    $(this).css('color', 'red');
                    break;
                case 4:
                    $(this).css('color', 'red');
                    break;
                case 5:
                    $(this).css('color', 'red');
                    break;
            }
        }
    });
})();
