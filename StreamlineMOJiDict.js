// ==UserScript==
// @name         精简MOJi辞書
// @namespace    https://github.com/scarletkc/StreamlineMOJiDict
// @version      1.0
// @description  A Tampermonkey browser script is used to make MOJiDict more streamlined to use.
// @author       Kc
// @match        *://www.mojidict.com/search
// @match        *://www.mojidict.com/
// @license      GPL-3.0 License
// ==/UserScript==

(function() {
    'use strict';
    var counter = 0;
    var hint = false;

    function DeleteDiv(className) {
        var elements = document.getElementsByClassName(className);
        var loop = setInterval(function(){
            var counts = 0;            
            if(elements.length > 0) {              
                for (var i = 0; i < elements.length; i++) {
                    elements[i].remove();
                }
                counter++;   
                /*if(counter > 4 && hint == false){
                    alert("Done!");
                    hint = true;
                }*/             
                clearInterval(loop);
            }
            else{
                if(counts > 4){
                    counter++; 
                    clearInterval(loop);
                }
            }
        },3000);  
    }

    DeleteDiv("advertising-banner");
    DeleteDiv("sidebar-container hidden_scrollbar sidebar hidden_scrollbar");
    DeleteDiv("sidebar-container hidden_scrollbar sidebar hidden_scrollbar isfold");
    DeleteDiv("header-basic sideBarisfold");
    DeleteDiv("footer-main");
    DeleteDiv("feedback-container");
    
})();