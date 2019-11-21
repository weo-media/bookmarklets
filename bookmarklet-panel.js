let unorderedList = create_tag("ul");

function create_tag(tag){
    return document.createElement(tag);
}

function create_text(text){
    return document.createTextNode(text);
}

function hyperlink(label, url){
    let a = create_tag("a") ;
    a.innerHTML = label;
    if (typeof url == "function"){
        a.href = funcToBookmarkletUrl(url);
    }else{
        a.href = url ;
    }
    return a;
}

function add_bookmarklet(label, url){
  let listItem = create_tag("li");
  let a = hyperlink(label, url);
  a.style.display = "block" ;
  listItem.appendChild(a) ;
  unorderedList.appendChild(listItem);
}

function add_label(label){
  let listItem = create_tag("li");
  let t = create_text(label);
  listItem.appendChild(t) ;
  unorderedList.appendChild(listItem);
}

function funcToBookmarkletUrl(func){
    let code = func.toString();
    let url = 'javascript:(function()' + code.replace(/function.*\(\)/, '').replace(/\/\/.*/,"") + ")();";
    return url ;
}

function remove_panel(){
    panel.remove();
}

function hide_panel(){
    if (subpanel.hidden ==false){
        subpanel.hidden = true;
    }else{
        subpanel.hidden = false;
    }
}

// bookmarklet functions
function showAllLinks(){
    let a = '';
    for (let ln = 0; ln < document.links.length; ln++) {
        let lk = document.links[ln];
        a += ln + ': <a href=\'' + lk + '\' title=\'' + lk.text + '\'>' + lk + '</a><br>\n';
    }
    w = window.open('', 'Links', 'scrollbars,resizable,width=400,height=600');
    w.document.write(a);    
}

unorderedList.className = "bookmarklets" ;
unorderedList.style="list-style-type:disc";

panel = create_tag("div");

panelbar = create_tag("div");

panelbar.innerHTML = "JS PANEL" ;

panelbar.style.height = "20px";
panelbar.style["background-color"] = "yellow";
panelbar.style["z-index"] = 10e5;
panelbar.onclick = hide_panel ;

subpanel = create_tag("div");

panel.id = "InjectorPanel";
panel.style.position = "fixed";
panel.style.width = "150px";
panel.style.top = "0px";
panel.style["background-color"] = "lightblue";

panel.appendChild(panelbar);
panel.appendChild(subpanel);

document.querySelector("body").appendChild(panel);

// Useful section
add_label("Useful");
add_bookmarklet("Tiny URL", "javascript:void(open('http://tinyurl.com/create.php?url='+encodeURIComponent(location.href)))");
add_bookmarklet("QR Code", "javascript:(function(){if(document.getElementById){let x=document.body;let o=document.createElement('script');if(typeof(o)!='object') o=document.standardCreateElement('script');o.setAttribute('src','http://qrbookmarklet.googlecode.com/svn/trunk/qr.js');o.setAttribute('type','text/javascript');x.appendChild(o);}})();");
add_bookmarklet("Web Archive", "javascript:(function(){window.location='http://web.archive.org/web/*/' + document.URL})()");
add_bookmarklet("Image Search" , "javascript:void((function(){let sir=document.createElement('script');sir.setAttribute('src','http://cdnjs.cloudflare.com/ajax/libs/require.js/0.26.0/require.min.js');sir.setAttribute('type','text/javascript');document.getElementsByTagName('head')[0].appendChild(sir);let sib=document.createElement('script');sib.setAttribute('src','http://jarred.github.com/src-img/js/app/bookmarklet.js?version=0.66');sib.setAttribute('type','text/javascript');document.getElementsByTagName('head')[0].appendChild(sib);})());");
add_bookmarklet("Show All Links", showAllLinks);

// Web Dev Section
add_label("Web Dev");
add_bookmarklet("Execute HTML", "javascript:let txt='';function getSelText(wndw){let sel='';if(document.all){sel=wndw.document.selection.createRange().text;}else{sel=wndw.window.getSelection();}return sel;}void(frms=window.frames);if(frms.length==0){txt=getSelText(window);}else{for(iQA=0;iQA&lt;frms.length;iQA++){void(txt=getSelText(frms[iQA]));if(txt.length&gt;0){break;}}}while(txt.length==0){txt=promt('Input:');}win=window.open('','','');void(win.document.write(txt));void(win.document.close())");

// Security and Auditing Section
add_label("Security and Auditing");
add_bookmarklet("Remove Cookies", "javascript:void(document.cookie=null)");

// Updates Section
add_label("Updates");
add_bookmarklet("Bookmarklets", "http://caiorss.github.io/bookmarklets.html");
add_bookmarklet("Close", remove_panel);


subpanel.appendChild(unorderedList);