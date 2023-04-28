"use strict";(self.webpackChunkanalytics_2_0_apis=self.webpackChunkanalytics_2_0_apis||[]).push([[5315],{38595:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return m},default:function(){return u}});var t,i=a(87462),s=a(63366),l=(a(15007),a(64983)),d=a(91515),r=["components"],m={},o=(t="CodeBlock",function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.mdx)("div",e)}),p={_frontmatter:m},c=d.Z;function u(e){var n=e.components,a=(0,s.Z)(e,r);return(0,l.mdx)(c,(0,i.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"breakdown-dimensions"},"Breakdown dimensions"),(0,l.mdx)("p",null,"Breakdowns in the reporting API are useful when you want to see the cross-product of values from two different dimensions. When requesting a breakdown report, use the ",(0,l.mdx)("inlineCode",{parentName:"p"},"metricsFilters")," and ",(0,l.mdx)("inlineCode",{parentName:"p"},"dimension")," parameters to request the additional dimension."),(0,l.mdx)("p",null,'The following example requests a breakdown report containing a list of the top five "Internal Search Terms" used by visitors who saw campaign 10. Within the ',(0,l.mdx)("inlineCode",{parentName:"p"},"metricsFilters")," parameter, the type is set to ",(0,l.mdx)("inlineCode",{parentName:"p"},"breakdown")," (line 21), and ",(0,l.mdx)("inlineCode",{parentName:"p"},"evar1")," is the marketing campaign (line 22). Within the ",(0,l.mdx)("inlineCode",{parentName:"p"},"dimensions")," parameter, ",(0,l.mdx)("inlineCode",{parentName:"p"},"evar2"),' is the "Internal Search Terms" (line 27).'),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Note:")," If the text value of item is already known, it can be passed inside the ",(0,l.mdx)("inlineCode",{parentName:"p"},"metricFilter")," object as ",(0,l.mdx)("inlineCode",{parentName:"p"},"itemValue")," field (Make sure to pass the exact text value). For example, instead of passing the item id ",(0,l.mdx)("inlineCode",{parentName:"p"},'"itemId":"743855946"'),' of the item "Campaign 10", we can pass the text value of the item like this ',(0,l.mdx)("inlineCode",{parentName:"p"},'"itemValue" : "10"')," Passing an item value instead of item id will result in slightly slower performance, but it will be useful in preventing multiple reporting calls to retrieve item ids."),(0,l.mdx)(o,{slots:"heading, code",repeat:"2",languages:"JSON,JSON",mdxType:"CodeBlock"}),(0,l.mdx)("h4",{id:"request-body"},"Request body"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{\n   "rsid":"examplersid",\n   "globalFilters":[\n      {\n         "type":"dateRange",\n         "dateRange":"YYYY-12-31T00:00:00.000/YYYY-01-06T23:59:59.999"\n      }\n   ],\n   "metricContainer":{\n      "metrics":[\n         {\n            "columnId":"0",\n            "id":"metrics/pageviews",\n            "filters":[\n               "0"\n            ]\n         }\n      ],\n      "metricFilters":[\n         {\n            "id":"0",\n            "type":"breakdown",\n            "dimension":"evar1",\n            "itemId":"743855946"\n         }\n      ]\n   },\n   "dimension":"variables/evar2",\n   "settings":{\n      "dimensionSort":"asc",\n      "limit":5\n   }\n}\n')),(0,l.mdx)("h4",{id:"response"},"Response"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{\n      "totalPages":2,\n      "firstPage":true,\n      "lastPage":false,\n      "numberOfElements":5,\n      "number":0,\n      "totalElements":7,\n      "columns":{\n         "dimension":{\n            "id":"variables/evar2",\n            "type":"string"\n         },\n         "columnIds":[\n            "0"\n         ]\n      },\n      "rows":[\n         {\n            "itemId":"1132341824",\n            "value":"red t-shirt",\n            "data":[\n               1515.0\n            ]\n         },\n         {\n            "itemId":"2400044733",\n            "value":"digital watches",\n            "data":[\n               1.0\n            ]\n         },\n         {\n            "itemId":"3351316813",\n            "value":"sport socks",\n            "data":[\n               11.0\n            ]\n         },\n         {\n            "itemId":"3440395251",\n            "value":"gps watch",\n            "data":[\n               95.0\n            ]\n         },\n         {\n            "itemId":"3614317595",\n            "value":"running shoes",\n            "data":[\n               16.0\n            ]\n         }\n      ],\n      "summaryData":{\n         "totals":[\n            2032.0\n         ]\n      }\n   }\n')),(0,l.mdx)("h2",{id:"multi-level-breakdowns"},"Multi-level breakdowns"),(0,l.mdx)("p",null,"Multiple level breakdowns with the Reports API is helpful for visualizing the cross-product of values from three or more dimensions."),(0,l.mdx)("p",null,"For example, if you create an interactive map to explore product sales by campaigns and regions, the Reports API can dynamically update the map as new data becomes available. This allows team members to select different map locations from which they can view the current campaigns and product sales for the region."),(0,l.mdx)("p",null,"In the following example, these levels are used:"),(0,l.mdx)("ol",null,(0,l.mdx)("li",{parentName:"ol"},"Top level: Visualize the ",(0,l.mdx)("inlineCode",{parentName:"li"},"Day")," dimension filtered by the ",(0,l.mdx)("inlineCode",{parentName:"li"},"Page Views")," and ",(0,l.mdx)("inlineCode",{parentName:"li"},"Visits")," metrics."),(0,l.mdx)("li",{parentName:"ol"},"Second level: Visualize the previous level of data after a specifying a ",(0,l.mdx)("inlineCode",{parentName:"li"},"Date")," and applying the ",(0,l.mdx)("inlineCode",{parentName:"li"},"Page")," dimension."),(0,l.mdx)("li",{parentName:"ol"},"Third level: Visualize the previous two levels of data after applying the ",(0,l.mdx)("inlineCode",{parentName:"li"},"Cities")," dimension to a specified page.")),(0,l.mdx)("p",null,"For each level of the breakdown report below, a sample JSON request and response is provided."),(0,l.mdx)("h3",{id:"top-level-report"},"Top level report"),(0,l.mdx)("p",null,"The top level report in the following example shows the dimension ",(0,l.mdx)("inlineCode",{parentName:"p"},"Day")," and includes the metrics ",(0,l.mdx)("inlineCode",{parentName:"p"},"Page Views")," and ",(0,l.mdx)("inlineCode",{parentName:"p"},"Visits"),". The date range is set to the week of November 18, 2018."),(0,l.mdx)("p",null,(0,l.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1189px"}},"\n      ",(0,l.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"30.312500000000004%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,l.mdx)("picture",{parentName:"span"},"\n          ",(0,l.mdx)("source",{parentName:"picture",srcSet:["/analytics-2.0-apis/static/3067b53b6ff9c7f5901509bb557f0e12/5530d/multiple_breakdowns_example_1.webp 320w","/analytics-2.0-apis/static/3067b53b6ff9c7f5901509bb557f0e12/0c8fb/multiple_breakdowns_example_1.webp 640w","/analytics-2.0-apis/static/3067b53b6ff9c7f5901509bb557f0e12/d8ea9/multiple_breakdowns_example_1.webp 1189w"],sizes:"(max-width: 1189px) 100vw, 1189px",type:"image/webp"}),"\n          ",(0,l.mdx)("source",{parentName:"picture",srcSet:["/analytics-2.0-apis/static/3067b53b6ff9c7f5901509bb557f0e12/dd4a7/multiple_breakdowns_example_1.png 320w","/analytics-2.0-apis/static/3067b53b6ff9c7f5901509bb557f0e12/0f09e/multiple_breakdowns_example_1.png 640w","/analytics-2.0-apis/static/3067b53b6ff9c7f5901509bb557f0e12/775e3/multiple_breakdowns_example_1.png 1189w"],sizes:"(max-width: 1189px) 100vw, 1189px",type:"image/png"}),"\n          ",(0,l.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/analytics-2.0-apis/static/3067b53b6ff9c7f5901509bb557f0e12/775e3/multiple_breakdowns_example_1.png",alt:"multiple_breakdowns_example_1",title:"multiple_breakdowns_example_1",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,l.mdx)("h3",{id:"top-level-request"},"Top level request"),(0,l.mdx)("p",null,"The JSON message request body for this report request follows:"),(0,l.mdx)(o,{slots:"heading, code",repeat:"2",languages:"JSON,JSON",mdxType:"CodeBlock"}),(0,l.mdx)("h4",{id:"request-body-1"},"Request body"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "rsid": "examplersid",\n    "globalFilters": [\n        {\n            "type": "dateRange",\n            "dateRange": "YYYY-11-18T00:00:00.000/YYYY-11-25T00:00:00.000"\n        }\n    ],\n    "metricContainer": {\n        "metrics": [\n            {\n                "columnId": "0",\n                "id": "metrics/pageviews"\n            },\n            {\n                "columnId": "1",\n                "id": "metrics/visits"\n            }\n        ]\n    },\n    "dimension": "variables/daterangeday",\n    "settings": {\n        "countRepeatInstances": true,\n        "limit": 400,\n        "page": 0,\n        "dimensionSort": "asc"\n    }\n}\n')),(0,l.mdx)("h4",{id:"response-1"},"Response"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "totalPages": 1,\n    "firstPage": true,\n    "lastPage": true,\n    "numberOfElements": 7,\n    "number": 0,\n    "totalElements": 7,\n    "columns": {\n        "dimension": {\n            "id": "variables/daterangeday",\n            "type": "time"\n        },\n        "columnIds": [\n            "0",\n            "1"\n        ]\n    },\n    "rows": [\n        {\n            "itemId": "1181018",\n            "value": "Nov 18, YYYY",\n            "data": [\n                63,\n                30\n            ]\n        },\n        {\n            "itemId": "1181019",\n            "value": "Nov 19, YYYY",\n            "data": [\n                73,\n                37\n            ]\n        },\n        {\n            "itemId": "1181020",\n            "value": "Nov 20, YYYY",\n            "data": [\n                96,\n                42\n            ]\n        },\n        {\n            "itemId": "1181021",\n            "value": "Nov 21, YYYY",\n            "data": [\n                135,\n                57\n            ]\n        },\n        {\n            "itemId": "1181022",\n            "value": "Nov 22, YYYY",\n            "data": [\n                87,\n                45\n            ]\n        },\n        {\n            "itemId": "1181023",\n            "value": "Nov 23, YYYY",\n            "data": [\n                77,\n                50\n            ]\n        },\n        {\n            "itemId": "1181024",\n            "value": "Nov 24, YYYY",\n            "data": [\n                112,\n                49\n            ]\n        }\n    ],\n    "summaryData": {\n        "totals": [\n            643,\n            310\n        ]\n    }\n}\n')),(0,l.mdx)("h2",{id:"second-level-breakdown"},"Second level breakdown"),(0,l.mdx)("p",null,"For the second level, you can break down a specific date by the ",(0,l.mdx)("inlineCode",{parentName:"p"},"Page")," dimension. In order to do this, note the previous JSON response for the ",(0,l.mdx)("inlineCode",{parentName:"p"},"Nov 19, 2018")," date:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'"itemId": "1181019",\n"value": "Nov 19, 2018",\n"data": [\n    73,\n    37\n]\n')),(0,l.mdx)("p",null,"The response shows itemId ",(0,l.mdx)("inlineCode",{parentName:"p"},"1181019"),", so we will use that in our report request below."),(0,l.mdx)("p",null,(0,l.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1186px"}},"\n      ",(0,l.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"49.0625%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,l.mdx)("picture",{parentName:"span"},"\n          ",(0,l.mdx)("source",{parentName:"picture",srcSet:["/analytics-2.0-apis/static/a2eb2458c2c902e4a5aa8942e81aff1b/5530d/multiple_breakdowns_example_2.webp 320w","/analytics-2.0-apis/static/a2eb2458c2c902e4a5aa8942e81aff1b/0c8fb/multiple_breakdowns_example_2.webp 640w","/analytics-2.0-apis/static/a2eb2458c2c902e4a5aa8942e81aff1b/0157a/multiple_breakdowns_example_2.webp 1186w"],sizes:"(max-width: 1186px) 100vw, 1186px",type:"image/webp"}),"\n          ",(0,l.mdx)("source",{parentName:"picture",srcSet:["/analytics-2.0-apis/static/a2eb2458c2c902e4a5aa8942e81aff1b/dd4a7/multiple_breakdowns_example_2.png 320w","/analytics-2.0-apis/static/a2eb2458c2c902e4a5aa8942e81aff1b/0f09e/multiple_breakdowns_example_2.png 640w","/analytics-2.0-apis/static/a2eb2458c2c902e4a5aa8942e81aff1b/7e08f/multiple_breakdowns_example_2.png 1186w"],sizes:"(max-width: 1186px) 100vw, 1186px",type:"image/png"}),"\n          ",(0,l.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/analytics-2.0-apis/static/a2eb2458c2c902e4a5aa8942e81aff1b/7e08f/multiple_breakdowns_example_2.png",alt:"multiple_breakdowns_example_2",title:"multiple_breakdowns_example_2",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,l.mdx)("h3",{id:"second-level-request"},"Second level request"),(0,l.mdx)("p",null,"The JSON message request body for this report request looks like the following. Note that the ",(0,l.mdx)("inlineCode",{parentName:"p"},"metricFilters")," attribute in the request contains a metric filter that corresponds to a metric in the ",(0,l.mdx)("inlineCode",{parentName:"p"},"metrics")," attribute of the request. Each metric has a ",(0,l.mdx)("inlineCode",{parentName:"p"},"filters")," array that applies metric filters to the metric column. In this example, we are applying metric filter ",(0,l.mdx)("inlineCode",{parentName:"p"},"0")," to the ",(0,l.mdx)("inlineCode",{parentName:"p"},"Page Views")," metric column and metric filter ",(0,l.mdx)("inlineCode",{parentName:"p"},"1")," to the ",(0,l.mdx)("inlineCode",{parentName:"p"},"Visits")," metric column."),(0,l.mdx)(o,{slots:"heading, code",repeat:"2",languages:"JSON,JSON",mdxType:"CodeBlock"}),(0,l.mdx)("h4",{id:"second-level-request-body"},"Second level request body"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "rsid": "examplersid",\n    "globalFilters": [\n        {\n            "type": "dateRange",\n            "dateRange": "YYYY-11-18T00:00:00.000/YYYY-11-25T00:00:00.000"\n        }\n    ],\n    "metricContainer": {\n        "metrics": [\n            {\n                "columnId": "0",\n                "id": "metrics/pageviews",\n                "filters": [\n                    "0"\n                ]\n            },\n            {\n                "columnId": "1",\n                "id": "metrics/visits",\n                "filters": [\n                    "1"\n                ]\n            }\n        ],\n        "metricFilters": [\n            {\n                "id": "0",\n                "type": "breakdown",\n                "dimension": "variables/daterangeday",\n                "itemId": "1181019"\n            },\n            {\n                "id": "1",\n                "type": "breakdown",\n                "dimension": "variables/daterangeday",\n                "itemId": "1181019"\n            }\n        ]\n    },\n    "dimension": "variables/page",\n    "settings": {\n        "countRepeatInstances": true,\n        "limit": 5,\n        "page": 0\n    }\n}\n')),(0,l.mdx)("h4",{id:"second-level-response"},"Second level response"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "totalPages": 1,\n    "firstPage": true,\n    "lastPage": true,\n    "numberOfElements": 5,\n    "number": 0,\n    "totalElements": 5,\n    "columns": {\n        "dimension": {\n            "id": "variables/page",\n            "type": "string"\n        },\n        "columnIds": [\n            "0",\n            "1"\n        ]\n    },\n    "rows": [\n        {\n            "itemId": "364325780",\n            "value": "videoPage3",\n            "data": [\n                22,\n                22\n            ]\n        },\n        {\n            "itemId": "2095855582",\n            "value": "videoPage2",\n            "data": [\n                19,\n                19\n            ]\n        },\n        {\n            "itemId": "2770622699",\n            "value": "videoPage1",\n            "data": [\n                15,\n                15\n            ]\n        },\n        {\n            "itemId": "2519319590",\n            "value": "videoPage4",\n            "data": [\n                15,\n                15\n            ]\n        },\n        {\n            "itemId": "4240790753",\n            "value": "videoPage5",\n            "data": [\n                2,\n                2\n            ]\n        }\n    ],\n    "summaryData": {\n        "totals": [\n            73,\n            37\n        ]\n    }\n}\n')),(0,l.mdx)("h2",{id:"third-level-breakdown"},"Third level breakdown"),(0,l.mdx)("p",null,"The third level of the example shows how to further break down the report by applying the ",(0,l.mdx)("inlineCode",{parentName:"p"},"Cities")," dimension to the page ",(0,l.mdx)("inlineCode",{parentName:"p"},"videoPage3"),". To do this, we use the ",(0,l.mdx)("inlineCode",{parentName:"p"},"itemId")," of the row containing ",(0,l.mdx)("inlineCode",{parentName:"p"},"VideoPage3")," in the second level response, which is ",(0,l.mdx)("inlineCode",{parentName:"p"},"364325780"),". Note the value in the request below:"),(0,l.mdx)("p",null,(0,l.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1186px"}},"\n      ",(0,l.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.56250000000001%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,l.mdx)("picture",{parentName:"span"},"\n          ",(0,l.mdx)("source",{parentName:"picture",srcSet:["/analytics-2.0-apis/static/230955495a289757dc3b590c6df65bf5/5530d/multiple_breakdowns_example_3.webp 320w","/analytics-2.0-apis/static/230955495a289757dc3b590c6df65bf5/0c8fb/multiple_breakdowns_example_3.webp 640w","/analytics-2.0-apis/static/230955495a289757dc3b590c6df65bf5/0157a/multiple_breakdowns_example_3.webp 1186w"],sizes:"(max-width: 1186px) 100vw, 1186px",type:"image/webp"}),"\n          ",(0,l.mdx)("source",{parentName:"picture",srcSet:["/analytics-2.0-apis/static/230955495a289757dc3b590c6df65bf5/dd4a7/multiple_breakdowns_example_3.png 320w","/analytics-2.0-apis/static/230955495a289757dc3b590c6df65bf5/0f09e/multiple_breakdowns_example_3.png 640w","/analytics-2.0-apis/static/230955495a289757dc3b590c6df65bf5/7e08f/multiple_breakdowns_example_3.png 1186w"],sizes:"(max-width: 1186px) 100vw, 1186px",type:"image/png"}),"\n          ",(0,l.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/analytics-2.0-apis/static/230955495a289757dc3b590c6df65bf5/7e08f/multiple_breakdowns_example_3.png",alt:"multiple_breakdowns_example_3",title:"multiple_breakdowns_example_3",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,l.mdx)("p",null,"Note that there are now 4 metric filters in the ",(0,l.mdx)("inlineCode",{parentName:"p"},"metricFilters")," array of the request. Filters ",(0,l.mdx)("inlineCode",{parentName:"p"},"0")," and ",(0,l.mdx)("inlineCode",{parentName:"p"},"2")," are applied to the ",(0,l.mdx)("inlineCode",{parentName:"p"},"Page Views")," metric column, and filters ",(0,l.mdx)("inlineCode",{parentName:"p"},"1")," and ",(0,l.mdx)("inlineCode",{parentName:"p"},"3")," are applied to the ",(0,l.mdx)("inlineCode",{parentName:"p"},"Visits")," metric column."),(0,l.mdx)(o,{slots:"heading, code",repeat:"2",languages:"JSON,JSON",mdxType:"CodeBlock"}),(0,l.mdx)("h4",{id:"third-level-request-body"},"Third level request body"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "rsid": "examplersid",\n    "globalFilters": [\n        {\n            "type": "dateRange",\n            "dateRange": "YYYY-11-18T00:00:00.000/YYYY-11-25T00:00:00.000"\n        }\n    ],\n    "metricContainer": {\n        "metrics": [\n            {\n                "columnId": "0",\n                "id": "metrics/pageviews",\n                "filters": [\n                    "0",\n                    "2"\n                ]\n            },\n            {\n                "columnId": "1",\n                "id": "metrics/visits",\n                "filters": [\n                    "1",\n                    "3"\n                ]\n            }\n        ],\n        "metricFilters": [\n            {\n                "id": "0",\n                "type": "breakdown",\n                "dimension": "variables/daterangeday",\n                "itemId": "1181019"\n            },\n            {\n                "id": "1",\n                "type": "breakdown",\n                "dimension": "variables/daterangeday",\n                "itemId": "1181019"\n            },\n            {\n                "id": "2",\n                "type": "breakdown",\n                "dimension": "variables/page",\n                "itemId": "364325780"\n            },\n            {\n                "id": "3",\n                "type": "breakdown",\n                "dimension": "variables/page",\n                "itemId": "364325780"\n            }\n        ]\n    },\n    "dimension": "variables/geocity",\n    "settings": {\n        "countRepeatInstances": true,\n        "limit": 5,\n        "page": 0\n    }\n}\n')),(0,l.mdx)("h4",{id:"third-level-response"},"Third level response"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "totalPages": 1,\n    "firstPage": true,\n    "lastPage": true,\n    "numberOfElements": 1,\n    "number": 0,\n    "totalElements": 1,\n    "columns": {\n        "dimension": {\n            "id": "variables/geocity",\n            "type": "enum"\n        },\n        "columnIds": [\n            "0",\n            "1"\n        ]\n    },\n    "rows": [\n        {\n            "itemId": "3113581109",\n            "value": "Lehi (Utah, United States)",\n            "data": [\n                22,\n                22\n            ]\n        }\n    ],\n    "summaryData": {\n        "totals": [\n            22,\n            22\n        ]\n    }\n}\n')))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-endpoints-reports-breakdowns-md-84cd4c8f54c1f365d5fa.js.map