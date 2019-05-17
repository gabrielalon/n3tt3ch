/*
 Template Name: Booster - Responsive Bootstrap 4 Admin Dashboard & UI Kits 
 Website: http://xpanthersolutions.com/html/booster
 Author: xPanther Solutions
 File: Main JS File
 */

"use strict";
$(document).ready(function() {       

    /* -----  Menu JS ----- */ 
    $(function() {
        for (var x = window.location, xp = $(".xp-horizontal-menu a").filter(function() {
            return this.href == x;
        }).addClass("active").parent().addClass("active"); ;) {
            if (!xp.is("li")) break;
            xp = xp.parent().addClass("in").closest('li').addClass("active");
        }
    }), 

    /* -----  Bootstrap Popover ----- */
    $('[data-toggle="popover"]').popover();

    /* -----  Bootstrap Tooltip ----- */
    $('[data-toggle="tooltip"]').tooltip();

});