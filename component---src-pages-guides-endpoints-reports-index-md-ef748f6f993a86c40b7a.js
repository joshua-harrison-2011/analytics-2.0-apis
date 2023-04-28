"use strict";(self.webpackChunkanalytics_2_0_apis=self.webpackChunkanalytics_2_0_apis||[]).push([[5645],{86838:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return m},default:function(){return p}});var a=t(87462),r=t(63366),i=(t(15007),t(64983)),s=t(91515),o=["components"],m={},l={_frontmatter:m},d=s.Z;function p(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.mdx)(d,(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"reporting-api"},"Reporting API"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"/reports")," endpoint is the primary endpoint for reporting requests. While Analysis Workspace can help an analyst or digital marketer answer key questions, the Analytics API can automate those answers by reporting to executive dashboards, custom reporting platforms, or tight Experience Cloud integrations. Because the ",(0,i.mdx)("inlineCode",{parentName:"p"},"/reports")," endpoint uses the same API as the Analytics UI, you can configure it for many options."),(0,i.mdx)("p",null,"See the ",(0,i.mdx)("a",{parentName:"p",href:"/analytics-2.0-apis/src/pages/apis/index.md"},"API reference")," for all calls that you can make to this endpoint."),(0,i.mdx)("h2",{id:"partial-responses-206-status-code"},"Partial Responses (206 Status Code)"),(0,i.mdx)("p",null,"A 206 status code indicates a partial response. This status code means that there were some columns in the reporting response that have errors. These errors can include any of the following:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"Unauthorized Metric"),": User does not have access to the requested metric"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"Metric Not Enabled"),": The requested metric is not enabled in this report suite"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"Unauthorized Dimension"),": User does not have access to the requested dimension"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"Dimension Not Enabled"),": The requested dimension is not enabled in this report suite"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"Unauthorized Global Dimension"),": User does not have access to the global dimension for this request"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"Global Dimension Not Enabled"),": The global dimension for this request is not enabled in this report suite"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"Unexpected Number of Items"),": Anomaly Detection algorithm returned an unexpected number of anomalies"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"General Service Error"),": General Anomaly Detection service error")),(0,i.mdx)("h2",{id:"paginating-reports"},"Paginating Reports"),(0,i.mdx)("p",null,"To paginate results, add a ",(0,i.mdx)("inlineCode",{parentName:"p"},"limit")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"page")," parameter to the ",(0,i.mdx)("inlineCode",{parentName:"p"},"settings")," object:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'{\n   "rsid":"examplersid",\n   "globalFilters":[\n      {\n         "type":"dateRange",\n         "dateRange":"YYYY-12-31T00:00:00.000/YYYY-01-31T23:59:59.999"\n      }\n   ],\n   "metricContainer":{\n      "metrics":[\n         {\n            "columnId":"0",\n            "id":"metrics/pageviews",\n            "filters":[\n               "0"\n            ]\n         }\n      ],\n      "metricFilters":[\n         {\n            "id":"0",\n            "type":"dateRange",\n            "dateRange":"YYYY-12-31T00:00:00.000/YYYY-01-31T23:59:59.999"\n         }\n      ]\n   },\n   "dimension":"variables/daterangeday",\n   "settings":{\n      "dimensionSort":"asc",\n      "limit":"10",\n      "page":"2"\n   }\n}\n')))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-endpoints-reports-index-md-ef748f6f993a86c40b7a.js.map