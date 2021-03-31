// Original implementation came from caiorss http://caiorss.github.io/bookmarklets.html // create the panel
var unorderedList = create_tag("ul");
unorderedList.className = "bookmarklets";
unorderedList.style = "list-style-type:disc";
unorderedList.style.padding = "6px";
unorderedList.style["font-size"] = "12px";
unorderedList.style["line-height"] = "18px";
unorderedList.style['text-shadow'] = "0px 1px 2px #000;";

var panel = create_tag("div");

var panelbar = create_tag("div");

panelbar.innerHTML = 'WEO Panel';
panelbar.style.padding = "6px";
panelbar.style["background-color"] = "#253b7d";
panelbar.style.color = "#fff";
panelbar.onclick = hide_panel;

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
// add open in new tab
add_bookmarklet('ForceCache Page', forceCache);
add_bookmarklet('Cache All Pages', cacheAllPages);
add_bookmarklet('Hard Refresh', hardRefresh);
add_bookmarklet('Preview Page', forcePreview);
add_bookmarklet('Get Edit Page', getEditEdition);
add_bookmarklet('Get Edit Template', getEditTemplate);
add_bookmarklet('Get WebEdit', getWebEdit);
add_bookmarklet('Get Account Info', getAccount);
add_bookmarklet('search analysis A', searchAnalysisA);
add_bookmarklet('search analysis B', searchAnalysisB);
add_bookmarklet('seo-analysis', seoAnalysis);

//From WEO sys pages
add_label('From WEO Sys Pages');
add_bookmarklet('Swap Tab Title', swapWeoSysTitle);
add_bookmarklet('Get HTML of Article', getHtmlOfArticle);
add_bookmarklet('Get Page Keys from WebEdit', getPagesListFromWebEdit);
add_bookmarklet('Get links from WebEdit', getAllLinksFromWebEdit);
add_bookmarklet('Weo Images Helper', showImagesBandaid);

// SEO
add_label('SEO');
add_bookmarklet('Bulk 301 redirects', bulkRedirects301);
add_bookmarklet('Resize Client Special URL Dialog', resizeSpecUrlWindow);
add_bookmarklet('Structured Data', `javascript:(function(){location.href='https://search.google.com/structured-data/testing-tool/u/0/#url='+window.location})();`);
add_bookmarklet('Rich Results Test', `javascript:(function(){location.href='https://search.google.com/test/rich-results?url='+window.location+'&user_agent=1'})();`);
add_bookmarklet('Title Tag length', `javascript:(function(){document.querySelector('#PopUpDlgFrame').contentWindow.document.querySelector('#EditTextForm-OverrideTitle').style.width = '600px'; document.querySelector('#PopUpDlgFrame').contentWindow.document.querySelector('#EditTextForm-OverrideTitle').style.fontFamily = 'roboto'; document.querySelector('#PopUpDlg iframe').style.width = '800px'; addRoboto(); function addRoboto() {var link = document.querySelector('#PopUpDlgFrame').contentWindow.document.createElement('link'); link.href = 'https://fonts.googleapis.com/css2?family=Roboto'; link.rel = 'stylesheet'; document.querySelector('#PopUpDlgFrame').contentWindow.document.head.appendChild(link);}})();`);
add_bookmarklet('Pingdom Test A', pingdomTestA);
add_bookmarklet('Pingdom Test B', pingdomTestB);
add_bookmarklet('100 links A', `javascript:(function(){location.href = window.location.href + '&num=100'})();`);
add_bookmarklet('100 links B', `javascript:(function(){var a = document.getElementsByTagName('a'), arr = ''; for(var i=0;i<a.length;i++) if (a[i].ping && !a[i].href.includes('google'))arr +=('<p>' + a[i].href + '</p>'); var newWindow = window.open(); newWindow.document.write(arr); newWindow.document.close();})();`);
add_bookmarklet('map rank page 1', `javascript:(function(){var arr = Array.from(document.querySelectorAll('.rlfl__tls > div'));for (i=0;i<arr.length;i++) { var listNum = document.createElement('span'); listNum.innerText = 'Rank Number: '+ (Number(i) +1); document.querySelectorAll('.rlfl__tls > div')[i].appendChild(listNum) };})();`);
add_bookmarklet('Ahrefs', `javascript:(function(){location.href='https://ahrefs.com/site-explorer/overview/v2/subdomains/recent?target='+encodeURIComponent(location.hostname + location.pathname)})();`);
add_bookmarklet('Majestic', `javascript:(function(){location.href='https://majestic.com/reports/site-explorer?folder=&q='+window.location.href})();`);
add_bookmarklet('SEMRush', `javascript:(function(){location.href='https://www.semrush.com/info/'+window.location.href})();`);
add_bookmarklet('Moz', `javascript:(function(){location.href='https://analytics.moz.com/pro/link-explorer/overview?site='+window.location.href})();`);
add_bookmarklet('query to 3 tabs', `javascript:(function(){(function() {new Promise(setQuery => { var input = window.prompt('Enter your query:');if (input) setQuery(input); }).then(query => {window.open('https://www.google.com/search?q=' + query);window.open('https://trends.google.com/trends/explore?q=' + query);window.open('https://www.wordtracker.com/search?query=' + query);});})();})();`);
add_bookmarklet('noFollow Links', `javascript:(function(){var a = document.getElementsByTagName('a');for(var i=0; i<a.length; i++)if (a[i].rel === 'nofollow') {a[i].style.backgroundColor = 'red';a[i].style.fontSize = '2em';}})();`);

// Useful section
add_label('Useful');
add_bookmarklet('Copy Wrike Task Description', copyWrikeDescription);
add_bookmarklet('Tiny URL', `javascript:void(open('https://tinyurl.com/create.php?url='+encodeURIComponent(location.href)))`);
add_bookmarklet('Web Archive', `javascript:(function(){window.location='https://web.archive.org/web/*/' + document.URL})()`);
add_bookmarklet('Show All Links', showAllLinks);

// Security and Auditing Section
add_label('Security and Auditing');
add_bookmarklet('Remove Cookies', deleteAllCookies);

// Updates Section
add_label('Latest Version');
add_bookmarklet('<img src="https://img.shields.io/badge/version-AutoUpdating-green.svg">', 'http://www.online-dds.com/weopanel');
add_bookmarklet('Close', remove_panel);

// append bookmarklets
subpanel.appendChild(unorderedList);

function create_tag(tag) {
  return document.createElement(tag);
}

function create_text(text) {
  return document.createTextNode(text);
}

function hyperlink(label, url) {
  let a = create_tag("a");
  a.innerHTML = label;
  if (typeof url == "function") {
    if (url.constructor.name === "AsyncFunction") {
      a.href = asyncFuncToBookmarkletUrl(url);
    } else {
      a.href = funcToBookmarkletUrl(url);
    }
  } else {
    a.href = url;
  }
  return a;
}

function add_bookmarklet(label, url) {
  let listItem = create_tag("li");
  let a = hyperlink(label, url);
  a.style["color"] = "#fff";
  a.style.display = "block";
  a.style['line-height'] = '18px';
  listItem.appendChild(a);
  unorderedList.appendChild(listItem);
}

function add_label(label) {
  let listItem = create_tag("li");
  let t = create_text(label);
  listItem.appendChild(t);
  listItem.style = "list-style-type:none;font-weight:bold;color:#253b7d;padding-top:6px;";
  unorderedList.appendChild(listItem);
}

function funcToBookmarkletUrl(func) {
  let code = func.toString();
  let url = 'javascript:(function()' + code.replace(/function.*\(\)/, '') + ")();";
  return url;
}

function asyncFuncToBookmarkletUrl(func) {
  let code = func.toString();
  let url = 'javascript:(async function()' + code.replace(/async function.*\(\)/, '') + ")();";
  return url;
}

function remove_panel() {
  panel.remove();
}

function hide_panel() {
  if (subpanel.hidden == false) {
    subpanel.hidden = true;
  } else {
    subpanel.hidden = false;
  }
}

// bookmarklet functions
function showAllLinks() {
  let a = '';
  for (let ln = 0; ln < document.links.length; ln++) {
    let lk = document.links[ln];
    a += ln + ': <a href=\'' + lk + '\' title=\'' + lk.text + '\'>' + lk + '</a><br>\n';
  }
  w = window.open('', 'Links', 'scrollbars,resizable,width=400,height=600');
  w.document.write(a);
}

function getEditEdition() {
  remove_panel();
  let weo = document.querySelector('meta[content="wspd"]');
  window.open('https://www.weo' + weo.dataset.sv + '.com/sys/index.asp?f=editEdition&C=' + weo.dataset.c + '&EDID=' + weo.dataset.ed + '&PID=' + weo.dataset.p);
}

function getEditTemplate() {
  remove_panel();
  let weo = document.querySelector('meta[content="wspd"]');
  window.open('https://www.weo' + weo.dataset.sv + '.com/sys/index.asp?f=editTemplate&C=' + weo.dataset.c + '&TMPID=' + weo.dataset.rt + '&PID=' + weo.dataset.p);
}

function getWebEdit() {
  remove_panel();
  let weo = document.querySelector('meta[content="wspd"]');
  window.open('https://www.weo' + weo.dataset.sv + '.com/sys/index.asp?f=editWebsite&C=' + weo.dataset.c + '&PID=' + weo.dataset.p);
}

function getAccount() {
  remove_panel();
  let weo = document.querySelector('meta[content="wspd"]');
  window.open('https://www.weo' + weo.dataset.sv + '.com/sys/index.asp?f=configClient&C=' + weo.dataset.c + '&PID=' + weo.dataset.p);
}

function swapWeoSysTitle() {
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
  for (i = 0; i < pages.length; i++) {
    pageID = pages[i].title.split(' - ')[0].slice(8);
    pageText = pages[i].text;
    pageIDs += `<div>[[[Page:${pageID}|${pageText}|]]]</div>`;
  }
  let w = window.open('', 'Pages List', 'scrollbars, resizable, width=800, height=600');
  w.document.write(pageIDs);
}

function getAllLinksFromWebEdit() {
  let pages = Array.from(document.querySelectorAll('tr>td.tpItemText>a'));
  let pageLinks = [];
  let pageIDs = [];
  for (i = 0; i < pages.length; i++) {
    pageID = pages[i].title.split(' - ')[0].slice(8);
    pageText = pages[i].text;
    pageIDs += `<div><a href="www.weo2.com/p/${pageText.replace(/ /g, '-')}-p${pageID}.asp?preview=1" target="_blank">${pageID} - ${pageText}</a></div>`;
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
  var errors = '';
  var h1links = document.getElementsByTagName('h1');
  for (var i = 0; i < h1links.length; i++) {
    var current = document.getElementsByTagName("h1")[i].innerHTML;
    document.getElementsByTagName("h1")[i].innerHTML = "*H1*" + current;
    document.getElementsByTagName("h1")[i].style.color = 'purple';
  }
  if (h1links.length > 1) {
    errors = errors + '<div style="color:red; text-size:16px">Alert! More than one H1 tag used</div>';
  }
  if (h1links.length == 0) {
    errors = errors + '<div style="color:red; text-size:16px">Alert! No H1 Tags Used</div>';
  }
  var h2links = document.getElementsByTagName('h2');
  for (var i = 0; i < h2links.length; i++) {
    var current = document.getElementsByTagName("h2")[i].innerHTML;
    document.getElementsByTagName("h2")[i].innerHTML = "*H2*" + current;
    document.getElementsByTagName("h2")[i].style.color = 'purple';
  }
  var h3links = document.getElementsByTagName('h3');
  for (var i = 0; i < h3links.length; i++) {
    var current = document.getElementsByTagName("h3")[i].innerHTML;
    document.getElementsByTagName("h3")[i].innerHTML = "*H3*" + current;
    document.getElementsByTagName("h3")[i].style.color = 'purple';
  }
  var links = document.getElementsByTagName('a');
  for (var i = 0; i < links.length; i++) {
    var current = document.getElementsByTagName("a")[i];
    var currentrel = current.rel;
    if (currentrel == 'publisher') {
      current.style.border = '3px orange solid';
    }
  }
  var spans = document.getElementsByTagName('span');
  for (var i = 0; i < spans.length; i++) {
    var current = document.getElementsByTagName("span")[i];
    var currentprop = current.getAttribute('itemprop');
    if (currentprop == 'name') {
      current.innerHTML = '*Name*:' + current.innerHTML;
    }
    if (currentprop == 'streetAddress') {
      current.innerHTML = '*streetAddress*:' + current.innerHTML;
    }
    if (currentprop == 'addressLocality') {
      current.innerHTML = '*addressLocality*:' + current.innerHTML;
    }
    if (currentprop == 'addressRegion') {
      current.innerHTML = '*addressRegion*:' + current.innerHTML;
    }
    if (currentprop == 'postalCode') {
      current.innerHTML = '*postalCode*:' + current.innerHTML;
    }
    if (currentprop == 'telephone') {
      current.innerHTML = '*telephone*:' + current.innerHTML;
    }
  }
  var divs = document.getElementsByTagName('div');
  for (var i = 0; i < divs.length; i++) {
    var current = document.getElementsByTagName("div")[i];
    var currentitem = current.getAttribute('itemtype');
    if (currentitem == 'http://schema.org/LocalBusiness') {
      current.style.border = '3px red solid';
    }
  }
  var images = document.getElementsByTagName('img');
  for (var i = 0; i < images.length; i++) {
    var current = document.getElementsByTagName("img")[i];
    var currentalt = current.alt;
    if (currentalt != '') {
      current.style.border = '3px lime solid';
      current.insertAdjacentHTML('afterend', '<div style="color:lime; font-size:16px; font-weight:bold">*Alt: ' + currentalt + '</div>');
    }
  }
  var P = document.querySelector('meta[content="wspd"]').dataset.wp;
  var C = document.querySelector('meta[content="wspd"]').dataset.c;
  var title = 'Title: <a href="https://www.weo2.com/sys/index.asp?f=editSubjectLine&C=' + C + '&EDID=&eWP=1&WPID=' + P + '&WPEL=1" target="_blank">' + document.title + '</a>';
  var body = document.body;
  var meta = document.getElementsByTagName("meta");
  for (var i = 0; i < meta.length; i++) {
    if (meta[i].name.toLowerCase() == "description") {
      description = meta[i].content;
    }
  }
  var linkdescription = 'Description: <a href="https://www.weo2.com/sys/index.asp?f=editSubjectLine&C=' + C + '&EDID=&eWP=1&WPID=' + P + '&WPEL=2" target="_blank">' + description + '</a>';
  var curUrl = window.location.href;
  var fcUrl;
  /* if no ? */
  if (curUrl.search(/\?/) == -1) {
    fcUrl = curUrl + '?fc=1';
  } else {
    /* if no fc=1 */
    if (curUrl.search(/fc\=1/) == -1) {
      fcUrl = curUrl + '&fc=1';
    } else {
      fcUrl = curUrl;
    }
  }
  var forcecache = '<a href="' + fcUrl + '">force cache page</a>';
  body.innerHTML = '<div style="color:black; font-size:16px; font-weight:bold; background-color:white; z-index:9999;top:0px;left:0px; position:fixed">' + errors + '<br>' + title + '<br>' + linkdescription + '<br>' + forcecache + '</div>' + body.innerHTML;
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
  for (i = 0; i < listings.length; i++) {
    var listNum = document.createElement('span');
    listNum.innerText = 'Rank Number: ' + (Number(i) + 1);
    document.getElementsByClassName('g')[i].appendChild(listNum)
  }
  let site = document.querySelectorAll('a[href*="' + data.websiteUrl + '"]');
  for (i = 0; i < site.length; i++) {
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

function copyWrikeDescription() {
  var wrikeContent = document.querySelector('.ql-editor').innerHTML;
  var textToCopy = document.createElement('input');
  textToCopy.id = "selectableText";
  document.body.appendChild(textToCopy);
  var selectText = document.getElementById('selectableText');
  selectText.value = wrikeContent;
  selectText.select();
  document.execCommand('copy');
  selectText.remove();
}
/********************************************/

async function bulkRedirects301() {
  /* close panel */
  if (subpanel && subpanel.hidden == false) {
    hide_panel();
  }

  /* get current special urls */
  let curSpecials = Array.from(document.querySelectorAll('table ~ div>table[id^=tpTblClientSpecialURLs] > tbody > tr b')).map(b => b.innerText);
  /* prompt for list of redirects */
  let allTheSlugsAndIds = async () => {
    /* prompt for slug and page id */
    /* prompt with modal */
    let modalRes = new Promise((res, rej) => {
      /* create modal */
      if (document.getElementById("bkmrkltModalClose") === null) {
        const shade = create_tag("div");
        shade.id = "bkmrkltModalShade";
        const modal = create_tag("div");
        modal.id = "bkmrkltModalModal";
        shade.style.cssText = "display: none; position: fixed; z-index: 1000; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,.5)";
        modal.style.cssText = "background: #253B7D; display: none; position: fixed; z-index: 1001; top: 10%; left: 25%; width: 50%; padding: 20px 15px;";
        modal.innerHTML = `<button id="bkmrkltModalClose" style="position:absolute;top:5px;right:5px;">X</button><h2 style="color:rgba(200,200,200,1)">Give Me All The Links</h2><textarea rows="5" placeholder="Paste the two columns from google sheets" style="width: 100%; margin: 10px auto 10px; display: block;"></textarea><button id="bkmrkltModalSubmit" style="text-align:right;">Submit</button><img src="https://www.weo2.com/tpn/c/C777/img/301DummyText.gif" style="margin: 0 auto; display: block;" />`;
        document.body.appendChild(shade);
        document.body.appendChild(modal);
        /* add to body */
        (() => {
          modal.style.display = "block";
          shade.style.display = "block";
        })();
        document.getElementById("bkmrkltModalClose").onclick = () => {
          shade.style.display = "none";
          modal.style.display = "none";
          return rej(new Error('closed'))
        };
        document.getElementById("bkmrkltModalSubmit").onclick = () => {
          shade.style.display = "none";
          modal.style.display = "none";
          return document.querySelector("#bkmrkltModalModal textarea").value === "" ? rej(new Error('nothing came back')) : res(document.querySelector("#bkmrkltModalModal textarea").value);
        };
        document.querySelector("#bkmrkltModalModal textarea").onkeypress = (e) => {
          if (e.keyCode === 13) {
            e.preventDefault();
            e.stopImmediatePropagation();
            shade.style.display = "none";
            modal.style.display = "none";
            return document.querySelector("#bkmrkltModalModal textarea").value === "" ? rej(new Error('nothing came back')) : res(document.querySelector("#bkmrkltModalModal textarea").value);
          }
        };
      } else {
        /* don't create modal if already created. just reopen it. */
        (() => {
          document.getElementById("bkmrkltModalShade").style.display = "block";
          document.getElementById("bkmrkltModalModal").style.display = "block";
          document.getElementById("bkmrkltModalClose").onclick = () => {
            document.getElementById("bkmrkltModalShade").style.display = "none";
            document.getElementById("bkmrkltModalModal").style.display = "none";
            return rej(new Error('closed'));
          };
          document.getElementById("bkmrkltModalSubmit").onclick = () => {
            document.getElementById("bkmrkltModalShade").style.display = "none";
            document.getElementById("bkmrkltModalModal").style.display = "none";
            return document.querySelector("#bkmrkltModalModal textarea").value === "" ? rej(new Error('nothing came back')) : res(document.querySelector("#bkmrkltModalModal textarea").value);
          }
        })();
      };
    });

    /* test the value and format */
    let theCombinedValue = await modalRes;

    console.log("theCombinedValue: ", theCombinedValue);

    if (typeof theCombinedValue == "string") {
      var encoded = encodeURIComponent(theCombinedValue).toString();

      console.log("encoded: ", encoded);

      /* create array of objects to handle slug and id pairs */
      var SlugsAndIdsArr = encoded.split(`%250A`);

      console.log("SlugsAndIdsArr: ", SlugsAndIdsArr);
      var SlugsAndIdsObjArr = SlugsAndIdsArr.map(slugAndId => ({
        slug: decodeURIComponent(slugAndId.split(`%2509`)[0]),
        id: decodeURIComponent(slugAndId.split(`%2509`)[1]),
      }));

      console.log("SlugsAndIdsObjArr: ", SlugsAndIdsObjArr);

      return SlugsAndIdsObjArr;
    } else {
      return undefined;
    }
  };

  /* set up redirects array */
  let redirects = await allTheSlugsAndIds();
  console.log(redirects);

  /* set up simple wait */
  var wait = ms => new Promise((r, j) => setTimeout(r, ms));

  /* loop through all the slugs and create new specials for each */
  for await (let index of asyncIterator(redirects.length)) {
    const cur = index;
    const slug = redirects[cur].slug;
    const page = redirects[cur].id;

    /* error out if undefined slug or id */
    if (slug === undefined || page === undefined) {
      throw Error("something went wrong with the input.");
    }

    /* loop through all the curSpecials */
    let hasBeenDone = curSpecials.some((special) => special === slug || special + "/" === slug);
    /* check if its already been done and skip if yes */
    /* if not do new special */
    if (!hasBeenDone) {
      try {
        await doNewRedirectURL(slug, page);
      } catch (error) {
        console.log("Here's where I stopped", [slug, page]);
        throw Error("aww crap. couldn't finish.");
      };
    } else {
      alert(slug + ' redirect already exists');
      console.log(slug, 'redirect already exists');
    }
  }
  window.location.reload();
}
async function* asyncIterator(cap) {
  let index = 0;
  while (index < cap) {
    yield index++;
  }
}

/* create new special url object and edit it all without using a dialogue. */
async function doNewRedirectURL(specialURL, redirectPageID) {
  const urlParams = new URLSearchParams(window.location.search);
  const cid = urlParams.get('C');

  const uid = document.querySelector("#IUserStatus").dataset.uid;

  const myHeaders = new Headers();
  myHeaders.append("Upgrade-Insecure-Requests", "1");
  myHeaders.append("DNT", "1");
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
  myHeaders.append("User-Agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_1_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36");
  myHeaders.append("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9");
  myHeaders.append("Cookie", document.cookie);

  // get new special url object ID
  const specialURLID = await fetch(`https://${window.location.host}/sys/dialog/doDialog-EditSpecialURLs.asp?CID=${cid}&PID=3&UID=${uid}&SPEC=-1&i=2`, {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  })
    .then(response => response.text())
    .then(result => {
      if (result.match(/class="tpTableLabel".+ID:.+class="tpTableField".+>(\d+)</) !== null) {
        const ID = result.match(/class="tpTableLabel".+ID:.+class="tpTableField".+>(\d+)</)[1];
        console.log(`got ID: ${ID}`);
        return ID;
      } else {
        throw new Error(`Could not create and retrieve special url ID for url ${specialURL}.`)
      }
    })
    .catch(error => console.log('error', error));

  const urlencoded = new URLSearchParams();
  urlencoded.append("FormSpecialURLs-ClientPageAP", "0");
  urlencoded.append("FormSpecialURLs-ClientPageID", redirectPageID);
  urlencoded.append("FormSpecialURLs-ClientPageN", "");
  urlencoded.append("FormSpecialURLs-SpecialURL", specialURL);
  urlencoded.append("FormSpecialURLs-is301", "Yes");
  urlencoded.append("FormSpecialURLs-isActive", "Yes");
  urlencoded.append("fuFormCurRecID", specialURLID);
  urlencoded.append("fuFormExtraBtn1Name", "");
  urlencoded.append("fuFormExtraBtn1Value", "");
  urlencoded.append("fuFormExtraBtn2Name", "");
  urlencoded.append("fuFormExtraBtn2Value", "");
  urlencoded.append("fuFormExtraBtn3Name", "");
  urlencoded.append("fuFormExtraBtn3Value", "");
  urlencoded.append("fuFormExtraBtn4Name", "");
  urlencoded.append("fuFormExtraBtn4Value", "");
  urlencoded.append("fuFormFieldMaxLens", "199,20,199,20,0,0");
  urlencoded.append("fuFormFieldNames", "SpecialURL,ClientPageID,ClientPageN,ClientPageAP,isActive,is301");
  urlencoded.append("fuFormFieldTypes", "1,1,1,1,2,2");
  urlencoded.append("fuFormName", "FormSpecialURLs");
  urlencoded.append("fuFormReqFieldNames", "");
  urlencoded.append("fuFormSpecialBtns", "");
  urlencoded.append("fuSubmit", "Save");

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow'
  };

  fetch(`https://${window.location.host}/sys/dialog/doDialog-EditSpecialURLs.asp?cid=${cid}&pid=3&uid=${uid}&spec=${specialURLID}&edit=1&i=2`, requestOptions)
    .then(response => {
      console.log(response.status, response.statusText, response.headers);
      return response.text();
    })
    .then(result => {
      if (result.match(/The Special URL was updated\./)[0] === "The Special URL was updated.") {
        console.log(`The Special URL ${specialURLID} was updated to point ${specialURL} to page ID ${redirectPageID}.`);
      } else {
        throw new Error(`Could not update special url ID ${specialURLID} with url ${specialURL}. Could not continue.`);
      }
    }
    )
    .catch(error => alert('error', error));
}

function resizeSpecUrlWindow() {
  /* resize the window */
  var specialUrlDiv = document.getElementById('ClientSpecialURLs');
  specialUrlDiv.style.height = "100vh";
  var specialUrlInnerDiv = document.querySelector('#ClientSpecialURLs div:nth-of-type(2)');
  specialUrlInnerDiv.style.overflow = 'auto';
  specialUrlInnerDiv.style.height = '100vh';

  if (subpanel && subpanel.hidden == false) {
    hide_panel();
  }
}

/********************************************/

function getByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

function getAllByXpath(path) {
  var nodeSet = document.evaluate(path, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
  var resultsArr = [];
  for (var i = 0; i < nodeSet.snapshotLength; i++) {
    resultsArr.push(nodeSet.snapshotItem(i));
  }
  return resultsArr;
}

function forceCache() {
  var curUrl = window.location.href;
  /* if no ? */
  if (curUrl.search(/\?/) == -1) {
    window.location.href = curUrl + '?fc=1';
  } else {
    /* if no fc=1 */
    if (curUrl.search(/fc\=1/) == -1) {
      window.location.href = curUrl + '&fc=1';
    } else {
      window.location.href = curUrl;
    }
  }
}

function forcePreview() {
  var curUrl = window.location.href;
  /* if no ? */
  if (curUrl.search(/\?/) == -1) {
    window.location.href = curUrl + '?preview=1';
  } else {
    /* if no fc=1 */
    if (curUrl.search(/preview\=1/) == -1) {
      window.location.href = curUrl + '&preview=1';
    } else {
      window.location.href = curUrl;
    }
  }
}

function getArt1() {
  let curUrl = window.location.href;
  let weo = document.querySelector('meta[content="wspd"]');
  let editPage = 'https://www.weo2.com/sys/index.asp?f=editEdition&C=' + weo.dataset.c + '&EDID=' + weo.dataset.ed;
}

function addImageSize(image) {
  let size = 0;
  let request = new XMLHttpRequest();
  request.open('HEAD', image.src, true);
  request.onreadystatechange = function () {
    if (request.readyState == 4) {
      if (request.status == 200) {
        size = `${Number(request.getResponseHeader('Content-Length') / 1024).toFixed(2)}kb`;
        let sizeContainer = image.parentElement.parentElement.parentElement.previousSibling.firstChild.firstChild.childNodes[2].childNodes[1];
        let sizeContent = sizeContainer.innerHTML;
        sizeContainer.innerHTML = `${sizeContent}<br>${size}`;
      }
      else {
        console.log(`Could not find size of ${image.src}`);
      }
    }
  }
  request.send(null);
}

function showImagesBandaid() {
  if (subpanel && subpanel.hidden == false) {
    hide_panel();
  }

  let imgList = Array.from(document.querySelectorAll('form[name="ImageGridForm"] img'));
  let imgAnchorList = [];
  imgList.forEach((img) => {
    imgAnchorList.push(img.parentElement);
    var imgSrc = img.src.replace(/https\:\/\/www\.weo\d\.com(\/tpn)?/, '\/tpn');
    img.src = imgSrc;
    addImageSize(img);
  });
  imgAnchorList.forEach((a) => {
    var anchor = a.href.replace(/https\:\/\/www\.weo\d\.com(\/tpn)?/, '\/tpn');
    a.href = anchor;
  });
}

function cacheAllPages() {
  var theUrl = document.location.origin;
  var isWeoSys = theUrl.search(/www\.weo\d+\./);
  if (isWeoSys > 0) {
    theUrl = [...document.querySelector('.TPshweb a').href.matchAll(/(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4})\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g)][0][1];
  }
  var request = new XMLHttpRequest();

  if (subpanel && subpanel.hidden == false) {
    hide_panel();
  }

  request.open('POST', 'https://api.apify.com/v2/acts/fpDvtjKQwibE4LhbS/runs?token=iRqeCj3PSQ9dkTmwfYzJGXbzM');

  request.setRequestHeader('Content-Type', 'application/json');

  request.onreadystatechange = function () {
    if (this.readyState === 4) {
      console.log('Status:', this.status);
      console.log('Headers:', this.getAllResponseHeaders());
      console.log('Body:', this.responseText);
    }
  };

  var body = {
    'url': theUrl
  };

  request.send(JSON.stringify(body));
}

function hardRefresh() {
  doReloadPage();
}

function deleteAllCookies() {
  var cookies = document.cookie.split(";").map(x => { x = x.trim(); return x });

  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    var eqPos = cookie.indexOf("=");
    var name = eqPos > -1 ? cookie.substr(0, eqPos) : eqPos == -1 ? name = "" : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
}