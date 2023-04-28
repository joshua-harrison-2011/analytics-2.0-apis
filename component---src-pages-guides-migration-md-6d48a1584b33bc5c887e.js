"use strict";(self.webpackChunkanalytics_2_0_apis=self.webpackChunkanalytics_2_0_apis||[]).push([[6187],{48155:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return l},default:function(){return p}});var n=a(87462),i=a(63366),r=(a(15007),a(64983)),o=a(91515),s=["components"],l={},d={_frontmatter:l},m=o.Z;function p(e){var t=e.components,a=(0,i.Z)(e,s);return(0,r.mdx)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"migrating-to-the-20-apis"},"Migrating to the 2.0 APIs"),(0,r.mdx)("p",null,"This guide is intended to help users of the 1.3/1.4 versions of the Analytics API migrate to the newer and more capable 2.0 APIs. By migrating to the 2.0 APIs, you can take advantage of the following features:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Faster response times with simpler and more efficient query methods, eliminating the need for polling"),(0,r.mdx)("li",{parentName:"ul"},"Programmatic capability for queries and dynamic report updates"),(0,r.mdx)("li",{parentName:"ul"},"More graceful error handling"),(0,r.mdx)("li",{parentName:"ul"},"Flexible functioning to do to anything you can do in Analysis Workspace"),(0,r.mdx)("li",{parentName:"ul"},"Consistency and matching of API calls to UI actions"),(0,r.mdx)("li",{parentName:"ul"},"Access to all Attribution IQ models used in Analysis Workspace"),(0,r.mdx)("li",{parentName:"ul"},"Access to all Anomaly Detection algorithms used in Analysis Workspace"),(0,r.mdx)("li",{parentName:"ul"},"Ability to integrate with other Experience Cloud products"),(0,r.mdx)("li",{parentName:"ul"},"Increased capacity for multiple breakdown reports"),(0,r.mdx)("li",{parentName:"ul"},"Newest Analytics features availability")),(0,r.mdx)("h2",{id:"current-limitations"},"Current limitations"),(0,r.mdx)("p",null,"Analytics 2.0 APIs currently do not support the following:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Classifications"),(0,r.mdx)("li",{parentName:"ul"},"Data Warehouse"),(0,r.mdx)("li",{parentName:"ul"},"Data Sources"),(0,r.mdx)("li",{parentName:"ul"},"Data Feeds"),(0,r.mdx)("li",{parentName:"ul"},"Data Insertion"),(0,r.mdx)("li",{parentName:"ul"},"Real-time data")),(0,r.mdx)("p",null,"If you rely upon these features, you can still use a hybrid approach of using 1.4 APIs for the above features and 2.0 APIs for everything else."),(0,r.mdx)("h2",{id:"how-20-apis-work"},"How 2.0 APIs work"),(0,r.mdx)("p",null,"For the 2.0 APIs, the ",(0,r.mdx)("inlineCode",{parentName:"p"},"reports")," endpoint contains the biggest change. It utilizes the same underlying processing pipeline as the Analysis Workspace UI. Each API call matches an action in the UI, so you can test the functionality of an interaction in the UI first to plan your calls. The ",(0,r.mdx)("inlineCode",{parentName:"p"},"/reports")," endpoint is a simple REST GET call and no longer requires a queue/get workflow to retrieve data. This simplifies development and maintenance of API clients."),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"/reports")," end point is intended to run very small requests quickly. While 1.3/1.4 APIs handle requests that can require 1-2 days to process, the 2.0 APIs require many smaller requests put together in a series. The 1.3/1.4 APIs might include requests for data from a large time frame, lots of metrics at once, or many breakdowns. To migrate to the 2.0  ",(0,r.mdx)("inlineCode",{parentName:"p"},"/reports")," end point, you will want to break these large requests down into multiple calls. With this practice, results are much quicker and can be evaluated in a more timely manner. Multiple breakdowns are not requested automatically."),(0,r.mdx)("h2",{id:"use-case-examples"},"Use case examples"),(0,r.mdx)("p",null,"To see how migration affects your reports, consider the following examples for 1.4 APIs and 2.0 APIs."),(0,r.mdx)("p",null,"Example 1.4 request:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "reportDescription": {\n        "reportSuiteID":"exampleglobalprod",\n        "dateFrom":"YYYY-MM-DD",\n        "dateTo":"YYYY-MM-DD",\n        "granularity":"day",\n        "metrics": [\n            {"id":"pageviews"},\n            {"id":"visits"},\n            {"id":"revenue"},\n            {"id":"orders"},\n            {"id":"visits"},\n        ],\n        "elements": [\n            {"id":"trackingCode", "top":10},\n            {"id":"geocity", "top":100},\n            {"id":"page","top":100}\n        ]\n    }\n}\n')),(0,r.mdx)("p",null,"This 1.4 report queries ten campaign items. For each of those, it queries one hundred geocity items. Finally, for each city, it queries the top 100 products. This report has the potential to return 10,000,000 records or more. In addition, it tries to get five metrics for each of those items. Finally, it tries to do that for each day in the date range, which can span multiple years."),(0,r.mdx)("h3",{id:"changes-for-20-request"},"Changes for 2.0 request"),(0,r.mdx)("p",null,"Requests to the 2.0 ",(0,r.mdx)("inlineCode",{parentName:"p"},"/reports")," endpoint are smaller and made in parallel:"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},"Request the top ten ",(0,r.mdx)("inlineCode",{parentName:"li"},"trackingCode")," values for the given time period."),(0,r.mdx)("li",{parentName:"ol"},"For each of the values returned, request a breakdown of the top 100 ",(0,r.mdx)("inlineCode",{parentName:"li"},"geocity")," values."),(0,r.mdx)("li",{parentName:"ol"},"For each of those values, request a breakdown of the top 100 ",(0,r.mdx)("inlineCode",{parentName:"li"},"page")," values."),(0,r.mdx)("li",{parentName:"ol"},"Request a separate report for each metric. This means that you go through steps 1-4 for ",(0,r.mdx)("inlineCode",{parentName:"li"},"pageviews"),", then again for ",(0,r.mdx)("inlineCode",{parentName:"li"},"visits"),", and so on.")),(0,r.mdx)("p",null,"You can cache historical data as part of the client application. This means that you would only need to query the newest day's worth of data each day."),(0,r.mdx)("h2",{id:"breakdowns"},"Breakdowns"),(0,r.mdx)("p",null,"With the 2.0 ",(0,r.mdx)("inlineCode",{parentName:"p"},"/reports")," endpoint, you can request as many breakdowns as you like, instead of the limit of four with the 1.4 API. To request a breakdown report, use an ",(0,r.mdx)("inlineCode",{parentName:"p"},"itemId")," in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"metricFilter")," section of your request. See ",(0,r.mdx)("a",{parentName:"p",href:"endpoints/reports/breakdowns.md"},"Breakdowns")," for more information."),(0,r.mdx)("h2",{id:"metric-and-dimension-names"},"Metric and dimension names"),(0,r.mdx)("p",null,"For 2.0 APIs, metric and dimension names are slightly different. Use the GET ",(0,r.mdx)("inlineCode",{parentName:"p"},"/metrics")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"/dimensions")," endpoints to retrieve a full list of available metrics and dimensions for your report suite."),(0,r.mdx)("h3",{id:"real-time-and-current-data"},"Real-time and current data"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},'"source"="realtime"')," and ",(0,r.mdx)("inlineCode",{parentName:"p"},'"currentData"=true')," flags in the 1.4 API allow you to request data that is minutes (possibly seconds) old. The ",(0,r.mdx)("inlineCode",{parentName:"p"},"/reports")," endpoint currently does not support this functionality. Adobe recommends that you continue to use the 1.4 API or LiveStream API for these use cases."))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-migration-md-6d48a1584b33bc5c887e.js.map