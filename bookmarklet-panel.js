// https://www.weo2.com/sys/index.asp?f=editArticle&C=777&EDID=&A=80490
// create the panel
var unorderedList = create_tag("ul");
unorderedList.className = "bookmarklets" ;
unorderedList.style="list-style-type:disc";
unorderedList.style.padding = "6px";
unorderedList.style["font-size"] = "12px";
unorderedList.style["line-height"] = "18px";

var panel = create_tag("div");

var panelbar = create_tag("div");

panelbar.innerHTML = 'WEO Panel' ;
panelbar.style.padding = "6px";
panelbar.style["background-color"] = "#253b7d";
panelbar.style.color = "#fff";
panelbar.onclick = hide_panel ;

var subpanel = create_tag("div");

panel.id = "InjectorPanel";
panel.style["z-index"] = 99999;
panel.style.position = "fixed";
panel.style.width = "250px";
panel.style.top = "0px";
panel.style["background-color"] = "#65C6F4";
panel.style.color = "#fff";
panel.style["max-height"] = "90vh";
panel.style["overflow-y"] = "auto";

panel.appendChild(panelbar);
panel.appendChild(subpanel);

document.querySelector("body").appendChild(panel);

//From WEO client pages
add_label('From WEO Client Pages');
add_bookmarklet('Get Edit Page', `javascript:let weo = document.querySelector('meta[content="wspd"]'); location.href = 'https://www.weo2.com/sys/index.asp?f=editEdition&C=' + weo.dataset.c + '&EDID=' + weo.dataset.ed;`);
add_bookmarklet('Get Edit Template', `javascript:let weo = document.querySelector('meta[content="wspd"]'); location.href = 'https://www.weo2.com/sys/index.asp?f=editTemplate&C=' + weo.dataset.c + '&TMPID=' + weo.dataset.rt;`);
add_bookmarklet('Get WebEdit', `javascript:let weo = document.querySelector('meta[content="wspd"]'); location.href = 'https://www.weo2.com/sys/index.asp?f=editWebsite&C=' + weo.dataset.c`);
add_bookmarklet('search analysis A', searchAnalysisA);
add_bookmarklet('search analysis B', searchAnalysisB );
add_bookmarklet('seo-analysis', seoAnalysis);

//From WEO sys pages
add_label('From WEO Sys Pages');
add_bookmarklet('Swap Tab Title', swapWeoSysTitle);
add_bookmarklet('Get HTML of Article', getHtmlOfArticle);
add_bookmarklet('Get Page Keys from WebEdit', getPagesListFromWebEdit);

// SEO
add_label('SEO');
add_bookmarklet('Structured Data', `javascript:(function(){location.href='https://search.google.com/structured-data/testing-tool/u/0/#url='+window.location})();` );
add_bookmarklet('Pingdom Test A', pingdomTestA);
add_bookmarklet('Pingdom Test B', pingdomTestB);
add_bookmarklet('100 links A', `javascript:(function(){location.href = window.location.href + '&num=100'})();` );
add_bookmarklet('100 links B', `javascript:(function(){var a = document.getElementsByTagName('a'), arr = ''; for(var i=0;i<a.length;i++) if (a[i].ping && !a[i].href.includes('google'))arr +=('<p>' + a[i].href + '</p>'); var newWindow = window.open(); newWindow.document.write(arr); newWindow.document.close();})();` );
add_bookmarklet('map rank page 1', `javascript:(function(){var arr = Array.from(document.querySelectorAll('.rlfl__tls > div'));for (i=0;i<arr.length;i++) { var listNum = document.createElement('span'); listNum.innerText = 'Rank Number: '+ (Number(i) +1); document.querySelectorAll('.rlfl__tls > div')[i].appendChild(listNum) };})();` );
add_bookmarklet('Ahrefs', `javascript:(function(){location.href='https://ahrefs.com/site-explorer/overview/v2/subdomains/recent?target='+encodeURIComponent(location.hostname + location.pathname)})();` );
add_bookmarklet('Majestic', `javascript:(function(){location.href='https://majestic.com/reports/site-explorer?folder=&q='+window.location.href})();` );
add_bookmarklet('SEMRush', `javascript:(function(){location.href='https://www.semrush.com/info/'+window.location.href})();` );
add_bookmarklet('Moz', `javascript:(function(){location.href='https://analytics.moz.com/pro/link-explorer/overview?site='+window.location.href})();` );
add_bookmarklet('query to 3 tabs', `javascript:(function(){(function() {new Promise(setQuery => { var input = window.prompt('Enter your query:');if (input) setQuery(input); }).then(query => {window.open('https://www.google.com/search?q=' + query);window.open('https://trends.google.com/trends/explore?q=' + query);window.open('https://www.wordtracker.com/search?query=' + query);});})();})();` );
add_bookmarklet('noFollow Links', `javascript:(function(){var a = document.getElementsByTagName('a');for(var i=0; i<a.length; i++)if (a[i].rel === 'nofollow') {a[i].style.backgroundColor = 'red';a[i].style.fontSize = '2em';}})();` );

// Useful section
add_label('Useful');
add_bookmarklet('Tiny URL', `javascript:void(open('https://tinyurl.com/create.php?url='+encodeURIComponent(location.href)))`);
add_bookmarklet('Web Archive', `javascript:(function(){window.location='https://web.archive.org/web/*/' + document.URL})()`);
add_bookmarklet('Show All Links', showAllLinks);

// Security and Auditing Section
add_label('Security and Auditing');
add_bookmarklet('Remove Cookies', `javascript:void(document.cookie=null)`);

// Updates Section
add_label('Latest Version');
addVersion();
add_bookmarklet('Bookmarklets Releases', `https://github.com/weo-media/bookmarklets`);
add_bookmarklet('Close', remove_panel);

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

function addVersion() {
  let imgVersion = create_tag('img');
  imgVersion.src = "https://img.shields.io/github/v/tag/weo-media/bookmarklets.svg";
  unorderedList.appendChild(imgVersion);
}

function add_bookmarklet(label, url){
  let listItem = create_tag("li");
  let a = hyperlink(label, url);
  a.style["color"] = "#fff";
  a.style.display = "block";
  a.style['line-height'] = '18px';
  listItem.appendChild(a);
  unorderedList.appendChild(listItem);
}

function add_label(label){
  let listItem = create_tag("li");
  let t = create_text(label);
  listItem.appendChild(t);
  listItem.style="list-style-type:none;font-weight:bold;color:#253b7d;padding-top:6px;";
  unorderedList.appendChild(listItem);
}

function funcToBookmarkletUrl(func){
  let code = func.toString();
  let url = 'javascript:(function()' + code.replace(/function.*\(\)/, '') + ")();";
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

function swapWeoSysTitle(){
  let name = window.document.title;
  name = name.split(' - ');
  window.document.title = name[1] + ' - ' + name[0];
}

function getHtmlOfArticle() {
  let iframe = document.querySelector('table#Main iframe');
  let iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
  let iframeContent = iframeDocument.querySelector('body table.TPartBox>tbody>tr>td');
  let articleContent = iframeContent.innerHTML;
  let w = window.open('', 'Article', 'scrollbars,resizable,width=1000,height=100');
  w.document.write(`<pre>${articleContent.replace(/&/g, '&amp;').replace(/</g, '&lt;')}</pre>`);
}

function getPagesListFromWebEdit() {
  let pages = Array.from(document.querySelectorAll('tr>td.tpItemText>a'));
  let pageIDs = [];
  for (i=0;i<pages.length;i++) {
    pageID = pages[i].title.split(' - ')[0].slice(8);
    pageText = pages[i].text;
    pageIDs += `<div>[[[Page:${pageID}|${pageText}|]]]</div>`;
  }
  let w = window.open('', 'Pages List', 'scrollbars, resizable, width=800, height=600');
  w.document.write(pageIDs);
}

function pingdomTestA() {
  let pingdomData = document.location.href.split('\:\/\/')[1];
  let pingdom = 'https://tools.pingdom.com/?PingUrl=' + pingdomData;
  window.open(pingdom);
}

function pingdomTestB() {
  let url = document.location.href,
    params = url.split('?')[1].split('&'),
    data = {}, tmp;
  for (let i = 0, l = params.length; i < l; i++) {
    tmp = params[i].split('=');
    data[tmp[0]] = tmp[1];
  }
  let mouseE = new MouseEvent("mouseenter", { 'view': window, 'bubbles': true, 'cancelable': true });
  let touchE = new MouseEvent("input", { 'view': window, 'bubbles': true, 'cancelable': true });
  let keyE = new MouseEvent("keypress", { 'view': window, 'bubbles': true, 'cancelable': true });
  document.querySelector('input#urlInput').value = data.PingUrl;
  document.querySelector('input#urlInput').dispatchEvent(touchE);
  document.querySelector('input#urlInput').dispatchEvent(keyE);
  document.querySelector('app-select').click();
  document.querySelector('app-select div.option:nth-child(6)').dispatchEvent(mouseE);
  document.querySelector('app-select div.option:nth-child(6)').click();
  document.querySelector('input[value="START TEST"]').click();
}

function seoAnalysis() {
  remove_panel();
  var errors='';
  var h1links=document.getElementsByTagName('h1');
  for(var i=0;i<h1links.length;i++) {
    var current=document.getElementsByTagName("h1")[i].innerHTML;
    document.getElementsByTagName("h1")[i].innerHTML="*H1*" + current;
    document.getElementsByTagName("h1")[i].style.color='purple';
  } 
  if (h1links.length>1) {
    errors=errors+'<div style="color:red; text-size:16px">Alert! More than one H1 tag used</div>';
  } 
  if (h1links.length==0) {
    errors=errors+'<div style="color:red; text-size:16px">Alert! No H1 Tags Used</div>'; 
  } 
  var h2links=document.getElementsByTagName('h2');
  for (var i=0;i<h2links.length;i++) {
    var current=document.getElementsByTagName("h2")[i].innerHTML;
    document.getElementsByTagName("h2")[i].innerHTML="*H2*" + current;
    document.getElementsByTagName("h2")[i].style.color='purple'; 
  } 
  var h3links=document.getElementsByTagName('h3');
  for (var i=0;i<h3links.length;i++) {
    var current=document.getElementsByTagName("h3")[i].innerHTML;
    document.getElementsByTagName("h3")[i].innerHTML="*H3*" + current;
    document.getElementsByTagName("h3")[i].style.color='purple';
  } 
  var links=document.getElementsByTagName('a');
  for (var i=0;i<links.length;i++) {
    var current=document.getElementsByTagName("a")[i];
    var currentrel=current.rel;
    if (currentrel=='publisher') {
      current.style.border='3px orange solid';
    } 
  } 
  var spans=document.getElementsByTagName('span');
  for (var i=0;i<spans.length;i++) {
    var current=document.getElementsByTagName("span")[i];
    var currentprop=current.getAttribute('itemprop');
    if (currentprop=='name') {
      current.innerHTML='*Name*:'+current.innerHTML;
    } 
    if (currentprop=='streetAddress') {
      current.innerHTML='*streetAddress*:'+current.innerHTML;
    } 
    if (currentprop=='addressLocality') {
      current.innerHTML='*addressLocality*:'+current.innerHTML;
    } 
    if (currentprop=='addressRegion') {
      current.innerHTML='*addressRegion*:'+current.innerHTML;
    } 
    if (currentprop=='postalCode') {
      current.innerHTML='*postalCode*:'+current.innerHTML;
    } 
    if (currentprop=='telephone'){
      current.innerHTML='*telephone*:'+current.innerHTML;
    } 
  } 
  var divs=document.getElementsByTagName('div');
  for (var i=0;i<divs.length;i++) {
    var current=document.getElementsByTagName("div")[i];
    var currentitem=current.getAttribute('itemtype');
    if (currentitem=='http://schema.org/LocalBusiness') {
      current.style.border='3px red solid';
    } 
  } 
  var images=document.getElementsByTagName('img');
  for (var i=0;i<images.length;i++) {
    var current=document.getElementsByTagName("img")[i];
    var currentalt=current.alt;
    if (currentalt!='') {
      current.style.border='3px lime solid';
      current.insertAdjacentHTML('afterend','<div style="color:lime; font-size:16px; font-weight:bold">*Alt: ' + currentalt + '</div>');
    } 
  } 
  var P=document.querySelector('meta[content="wspd"]').dataset.wp;
  var C=document.querySelector('meta[content="wspd"]').dataset.c;
  var title='Title: <a href="https://www.weo2.com/sys/index.asp?f=editSubjectLine&C='+C+'&EDID=&eWP=1&WPID='+P+'&WPEL=1" target="_blank">' + document.title + '</a>';
  var body=document.body;
  var meta=document.getElementsByTagName("meta");
  for (var i=0;i<meta.length;i++) {
    if (meta[i].name.toLowerCase()=="description") {
      description=meta[i].content;
    } 
  } 
  var linkdescription='Description: <a href="https://www.weo2.com/sys/index.asp?f=editSubjectLine&C='+C+'&EDID=&eWP=1&WPID='+P+'&WPEL=2" target="_blank">' + description + '</a>';
  var forcecache='<a href="' + window.location.href + '&fc=1">force cache page</a>';
  body.innerHTML='<div style="color:black; font-size:16px; font-weight:bold; background-color:white; z-index:9999;top:0px;left:0px; position:fixed">' + errors + '<br>' + title + '<br>' + linkdescription + '<br>' + forcecache + '</div>' + body.innerHTML;
}

function searchAnalysisA() {
  var url = document.location.host; 
  var keywords = document.querySelector('meta[name="keywords"]').content.split(','); 
  document.location.href = 'https://www.google.com/search?q=' + keywords[0] + '&num=100' + '&websiteUrl=' + url;
}

function searchAnalysisB() {
  remove_panel();
  let url = document.location.href, 
    params = url.split('?')[1].split('&'), 
    data = {}, 
    tmp; 
  for (let i = 0, l = params.length; i < l; i++) {
    tmp = params[i].split('='); 
    data[tmp[0]] = tmp[1]; 
  }
  var listings = document.getElementsByClassName('g');
  for (i=0;i<listings.length;i++) {
    var listNum = document.createElement('span');
    listNum.innerText = 'Rank Number: '+ (Number(i) +1);
    document.getElementsByClassName('g')[i].appendChild(listNum)
  }
  let site = document.querySelectorAll('a[href*="' + data.websiteUrl + '"]');
  for (i=0;i<site.length;i++) {
    if (site[i].host === data.websiteUrl) {
      site = site[i];
      break;
    }
  }
  site.style = 'padding-top:100px;margin-top:-100px;display:block;';
  site.scrollIntoView();
}

function billingPackageCategories() {
  document.querySelector('input[name="ViewClientDeald-SelPackageAllowCat"]').click();
  document.querySelector('input[name="fuSubmit"]').click();
}