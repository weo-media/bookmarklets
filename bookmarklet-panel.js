// create the panel
let unorderedList = create_tag("ul");
unorderedList.className = "bookmarklets" ;
unorderedList.style="list-style-type:disc";
unorderedList.style.padding = "6px";

let panel = create_tag("div");

let panelbar = create_tag("div");

panelbar.innerHTML = "WEO Panel" ;
panelbar.style.padding = "6px";
panelbar.style["background-color"] = "#253b7d";
panelbar.style["color"] = "#fff";
panelbar.onclick = hide_panel ;

let subpanel = create_tag("div");

panel.id = "InjectorPanel";
panel.style["z-index"] = 105;
panel.style.position = "fixed";
panel.style.width = "250px";
panel.style.top = "0px";
panel.style["background-color"] = "#65C6F4";
panel.style["color"] = "#fff";

panel.appendChild(panelbar);
panel.appendChild(subpanel);

document.querySelector("body").appendChild(panel);

//From WEO pages
add_label('From WEO Pages');
add_bookmarklet('Get Edit Page', `javascript:let weo = document.querySelector('meta[content="wspd"]'); let editPage = 'https://www.weo2.com/sys/index.asp?f=editEdition&C=' + weo.dataset.c + '&EDID=' + weo.dataset.ed; location.href = editPage;`);
add_bookmarklet('Get Edit Template', `javascript:let weo = document.querySelector('meta[content="wspd"]'); let editTemplate = 'https://www.weo2.com/sys/index.asp?f=editTemplate&C=' + weo.dataset.c + '&TMPID=' + weo.dataset.rt; location.href = editTemplate;`);

// SEO
add_label('SEO');
add_bookmarklet('Structured Data', `javascript:(function(){location.href='https://search.google.com/structured-data/testing-tool/u/0/#url='+window.location})();` )
add_bookmarklet('100 links A', `javascript:(function(){location.href = window.location.href + '&num=100'})();` )
add_bookmarklet('100 links B', `javascript:(function(){var a = document.getElementsByTagName('a'), arr = ''; for(var i=0;i<a.length;i++) if (a[i].ping && !a[i].href.includes('google'))arr +=('<p>' + a[i].href + '</p>'); var newWindow = window.open(); newWindow.document.write(arr); newWindow.document.close();})();` )
add_bookmarklet('map rank page 1', `javascript:(function(){var arr = Array.from(document.querySelectorAll('.rlfl__tls > div'));for (i=0;i<arr.length;i++) { var listNum = document.createElement('span'); listNum.innerText = 'Rank Number: '+ (Number(i) +1); document.querySelectorAll('.rlfl__tls > div')[i].appendChild(listNum) };})();` )
add_bookmarklet('Ahrefs', `javascript:(function(){location.href='https://ahrefs.com/site-explorer/overview/v2/subdomains/recent?target='+encodeURIComponent(location.hostname + location.pathname)})();` )
add_bookmarklet('Majestic', `javascript:(function(){location.href='https://majestic.com/reports/site-explorer?folder=&q='+window.location.href})();` )
add_bookmarklet('SEMRush', `javascript:(function(){location.href='https://www.semrush.com/info/'+window.location.href})();` )
add_bookmarklet('Moz', `javascript:(function(){location.href='https://analytics.moz.com/pro/link-explorer/overview?site='+window.location.href})();` )
add_bookmarklet('query to 3 tabs', `javascript:(function(){(function() {new Promise(setQuery => { var input = window.prompt('Enter your query:');if (input) setQuery(input); }).then(query => {window.open('https://www.google.com/search?q=' + query);window.open('https://trends.google.com/trends/explore?q=' + query);window.open('https://www.wordtracker.com/search?query=' + query);});})();})();` )
add_bookmarklet('search analysis A', `javascript:(function(){var locOrigin = document.location.origin; var url = locOrigin; var keywords = document.querySelector('meta[name="keywords"]').content.split(','); document.location.href = 'https://www.google.com/search?q=' + keywords[0] + '&num=100';})();` )
add_bookmarklet('search analysis B', `javascript:(function(){var listings = document.getElementsByClassName('g');for (i=0;i<listings.length;i++) { var listNum = document.createElement('span'); listNum.innerText = 'Rank Number: '+ (Number(i) +1); document.getElementsByClassName('g')[i].appendChild(listNum) };})();` )
add_bookmarklet('noFollow Links', `javascript:(function(){var a = document.getElementsByTagName('a');for(var i=0; i<a.length; i++)if (a[i].rel === 'nofollow') {a[i].style.backgroundColor = 'red';a[i].style.fontSize = '2em';}})();` )
add_bookmarklet('seo-analysis', `javascript:(function(){var errors=''; var h1links=document.getElementsByTagName('h1'); for(var i=0;i<h1links.length;i++) {var current=document.getElementsByTagName(&quot;h1&quot;)[i].innerHTML; document.getElementsByTagName(&quot;h1&quot;)[i].innerHTML=&quot;*H1*&quot; + current; document.getElementsByTagName(&quot;h1&quot;)[i].style.color='purple'; } if (h1links.length>1) {errors=errors+'<div style=&quot;color:red; text-size:16px&quot;>Alert! More than one H1 tag used</div>'; } if (h1links.length==0) {errors=errors+'<div style=&quot;color:red; text-size:16px&quot;>Alert! No H1 Tags Used</div>'; } var h2links=document.getElementsByTagName('h2'); for (var i=0;i<h2links.length;i++) {var current=document.getElementsByTagName(&quot;h2&quot;)[i].innerHTML; document.getElementsByTagName(&quot;h2&quot;)[i].innerHTML=&quot;*H2*&quot; + current; document.getElementsByTagName(&quot;h2&quot;)[i].style.color='purple'; } var h3links=document.getElementsByTagName('h3'); for (var i=0;i<h3links.length;i++) {var current=document.getElementsByTagName(&quot;h3&quot;)[i].innerHTML; document.getElementsByTagName(&quot;h3&quot;)[i].innerHTML=&quot;*H3*&quot; + current; document.getElementsByTagName(&quot;h3&quot;)[i].style.color='purple'; } var links=document.getElementsByTagName('a'); for (var i=0;i<links.length;i++) {var current=document.getElementsByTagName(&quot;a&quot;)[i]; var currentrel=current.rel; if (currentrel=='publisher') {current.style.border='3px orange solid'; } } var spans=document.getElementsByTagName('span'); for (var i=0;i<spans.length;i++) {var current=document.getElementsByTagName(&quot;span&quot;)[i]; var currentprop=current.getAttribute('itemprop'); if (currentprop=='name') {current.innerHTML='*Name*:'+current.innerHTML; } if (currentprop=='streetAddress') {current.innerHTML='*streetAddress*:'+current.innerHTML; } if (currentprop=='addressLocality') {current.innerHTML='*addressLocality*:'+current.innerHTML; } if (currentprop=='addressRegion') {current.innerHTML='*addressRegion*:'+current.innerHTML; } if (currentprop=='postalCode') {current.innerHTML='*postalCode*:'+current.innerHTML; } if (currentprop=='telephone'){current.innerHTML='*telephone*:'+current.innerHTML; } } var divs=document.getElementsByTagName('div'); for (var i=0;i<divs.length;i++) {var current=document.getElementsByTagName(&quot;div&quot;)[i]; var currentitem=current.getAttribute('itemtype'); if (currentitem=='http://schema.org/LocalBusiness') {current.style.border='3px red solid'; } } var images=document.getElementsByTagName('img'); for (var i=0;i<images.length;i++) {var current=document.getElementsByTagName(&quot;img&quot;)[i]; var currentalt=current.alt; if (currentalt!='') {current.style.border='3px lime solid'; current.insertAdjacentHTML('afterend','<div style=&quot;color:lime; font-size:16px; font-weight:bold&quot;>*Alt: ' + currentalt + '</div>'); } } var P=document.querySelector('meta[content=&quot;wspd&quot;]').dataset['wp']; var C=document.querySelector('meta[content=&quot;wspd&quot;]').dataset['c']; var title='Title: <a href=&quot;https://www.weo2.com/sys/index.asp?f=editSubjectLine&C='+C+'&EDID=&eWP=1&WPID='+P+'&WPEL=1&quot; target=&quot;_blank&quot;>' + document.title + '</a>'; var body=document.body; var meta=document.getElementsByTagName(&quot;meta&quot;); for (var i=0;i<meta.length;i++) {if (meta[i].name.toLowerCase()==&quot;description&quot;) {description=meta[i].content; } } var linkdescription='Description: <a href=&quot;https://www.weo2.com/sys/index.asp?f=editSubjectLine&C='+C+'&EDID=&eWP=1&WPID='+P+'&WPEL=2&quot; target=&quot;_blank&quot;>' + description + '</a>'; var forcecache='<a href=&quot;' + window.location.href + '&fc=1&quot;>force cache page</a>'; body.innerHTML='<div style=&quot;color:black; font-size:16px; font-weight:bold; background-color:white; z-index:9999;top:0px;left:0px; position:fixed&quot;>' + errors + '<br>' + title + '<br>' + linkdescription + '<br>' + forcecache + '</div>' + body.innerHTML;})();` )

// Useful section
add_label('Useful');
add_bookmarklet('Tiny URL', `javascript:void(open('https://tinyurl.com/create.php?url='+encodeURIComponent(location.href)))`);
add_bookmarklet('Web Archive', `javascript:(function(){window.location='https://web.archive.org/web/*/' + document.URL})()`);
add_bookmarklet('Show All Links', showAllLinks);

// Security and Auditing Section
add_label('Security and Auditing');
add_bookmarklet('Remove Cookies', `javascript:void(document.cookie=null)`);

// Updates Section
add_label('Updates');
add_bookmarklet('Bookmarklets', `https://github.com/weo-media/bookmarklets`);
add_bookmarklet('Close', hide_panel);

// append bookmarklets
subpanel.appendChild(unorderedList);

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
        a.href = url;
    }
    return a;
}

function add_bookmarklet(label, url){
  let listItem = create_tag("li");
  let a = hyperlink(label, url);
  a.style["color"] = "#fff"
  a.style.display = "block";
  listItem.appendChild(a);
  unorderedList.appendChild(listItem);
}

function add_label(label){
  let listItem = create_tag("li");
  let t = create_text(label);
  listItem.appendChild(t);
  listItem.style="list-style-type:none;font-weight:bold;color:#253b7d;";
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