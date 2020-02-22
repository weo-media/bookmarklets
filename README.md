# Bookmarklets 
![Bookmarklets Version](https://img.shields.io/github/v/tag/weo-media/bookmarklets.svg)
Original implementation came from caiorss, http://caiorss.github.io/bookmarklets.html

Bookmark this page, but click "more" instead of "save".

Then swap the url for the script below and save it:

javascript:(function(){document.getElementById('InjectorPanel')?document.getElementById('InjectorPanel').remove():document.body.appendChild(document.createElement('script')).src='https://cdn.jsdelivr.net/gh/WEOmedia/bookmarklets@1.0.41/bookmarklet-panel.js' })();

Or go to [here](http://www.online-dds.com/weopanel) and drag the WEO Panel link to your bookmarks bar

## What they do

### From WEO Pages
#### Get Edit Page
From a WEO client's page, live or not, if you are already logged in, this will take you immediately to the client's edit page for the page you are currently on.
#### Get Edit Template
From a WEO client's page, live or not, if you are already logged in, this will take you immediately to the client's edit template page for the template associated with the page you are currently on.
#### search analysis A
Part 1. From a WEO client's page, this will search google based on the main competitive key phrase. It will also show 100 results instead of default 10.
#### search analysis B
Part 2. On the google results page, this will add the rank number to the result and scroll the client's listing into view if it can be found on the page.
#### seo-analysis
Ported from Nick tools. This will highlight the h tags (h1, h2...), the images, and also have links to the edit title and edit description page.

### From WEO Sys Pages
#### Swap Tab Title
Changes the page title from "WEO c### - Edit Website" to "Edit Website - WEO c###" so the page type can be easily seen from the tab
#### Get HTML of Article
from the edit article page, opens a new window with the raw html. useful for converting weo code to html for wordpress articles
#### Get Page Keys from WebEdit
from the WebEdit page, opens a new window with all the page IDs in page key form.

### SEO
#### 301 redirects - create new
create a number of empty New Special URLs.
#### 301 redirects - enter slug and id
enter a slug and page id copied from google sheets.
#### Structured Data
Checks structured data for the url of the page you are currently on.
#### Pingdom Test A
opens a new tab pointing to pingdom test page with a url loaded with the previous site's url
#### Pingdom Test B
Using the loaded url the pingdom form fields are set and started with Sydney Australia as the "test from" source.
#### 100 links A
adds &num=100 to the url and reloads the page. Used for when you are already on google but want to see 100 results.
#### 100 links B
spits out only the result links from the previous google search. 
#### map rank page 1
adds the rank number to the search result on google maps.
#### Ahrefs
Checks Ahrefs data for the url of the page you are currently on.
#### Majestic
Checks Majestic data for the url of the page you are currently on.
#### SEMRush
Checks SEMRush data for the url of the page you are currently on.
#### Moz
Checks Moz data for the url of the page you are currently on.
#### query to 3 tabs
Asks for a search phrase then searches google, google trends, and wordtracker. You have to allow pop ups for this to work.
#### noFollow Links
highlights links with the noFollow attribute in red.

### Useful
#### Copy Wrike Task Description
copies the content of the wrike task description in HTML to the clipboard so you can paste into reports.
#### Tiny URL
makes a tiny url from the page you are currently on.
#### Web Archive
searches the wayback machine for the url you are currently on.
#### Show All Links
opens a new window showing all the links from the url you are currently on. Be aware it will also include the bookmarklet links.

### Security and Auditing
#### Remove Cookies
removes cookies.

### Updates
#### Bookmarklets Releases
takes you to the page with the most current release. move the link to your bookmark bar to save.
#### Close
Closes the panel. You can also click the top bar of the panel to hide and reopen the panel if you don't want to totally get rid of it.
