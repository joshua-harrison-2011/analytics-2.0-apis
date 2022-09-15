(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[7754],{5866:function(e,n,a){"use strict";a.r(n),a.d(n,{_frontmatter:function(){return l},default:function(){return x}});var t=a(22122),o=a(19756),i=(a(15007),a(64983)),r=a(99536),d=["components"],l={},p=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",n)}},s=p("InlineAlert"),m=p("CodeBlock"),u={_frontmatter:l},c=r.Z;function x(e){var n=e.components,a=(0,o.Z)(e,d);return(0,i.mdx)(c,(0,t.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"job-endpoints"},"Job endpoints"),(0,i.mdx)("p",null,"The Job endpoint allows you to create a Data Repair API job (using ",(0,i.mdx)("inlineCode",{parentName:"p"},"POST"),") or retrieve a list of your currently running jobs (using ",(0,i.mdx)("inlineCode",{parentName:"p"},"GET"),")."),(0,i.mdx)("h2",{id:"create-a-data-repair-api-job"},"Create a Data Repair API job"),(0,i.mdx)(s,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Use of the Data Repair API permanently deletes or edits your Adobe Analytics data.")," See the ",(0,i.mdx)("a",{parentName:"p",href:"index.md#Workflow"},"Overview page")," for the recommended workflow to mitigate accidental deletion or alteration of your data."),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"POST https://analytics.adobe.io/api/{GLOBALCOMPANYID}/datarepair/v1/{RSID}/job")),(0,i.mdx)("p",null,"This endpoint requires multiple components:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"A ",(0,i.mdx)("a",{parentName:"li",href:"json-body.md"},"Job definition")," in the form of a JSON request body that contains the variables and actions to take."),(0,i.mdx)("li",{parentName:"ul"},"The query string ",(0,i.mdx)("inlineCode",{parentName:"li"},"validationToken")," obtained from the ",(0,i.mdx)("a",{parentName:"li",href:"server-call-estimate.md"},"Server Call estimate")," endpoint."),(0,i.mdx)("li",{parentName:"ul"},"The query strings ",(0,i.mdx)("inlineCode",{parentName:"li"},"dateRangeStart")," and ",(0,i.mdx)("inlineCode",{parentName:"li"},"dateRangeEnd")," that match the API call made to the Server Call estimate endpoint.")),(0,i.mdx)(m,{slots:"heading, code",repeat:"2",languages:"CURL,JSON",mdxType:"CodeBlock"}),(0,i.mdx)("h4",{id:"request"},"Request"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-sh"},'curl -X POST \\\n  -H "accept: application/json" \\\n  -H "content-type: application/json" \\\n  -H "Authorization: Bearer {ACCESS_TOKEN}" \\\n  -H "x-api-key: {CLIENTID}" \\\n  -d \'{"variables": {"ipaddress": {"action": "delete"}}}\' \\\n  "https://analytics.adobe.io/api/{GLOBALCOMPANYID}/datarepair/v1/examplersid/job?validationToken={VALIDATION_TOKEN}&dateRangeStart=YYYY-03-28&dateRangeEnd=YYYY-03-29"\n')),(0,i.mdx)("h4",{id:"response"},"Response"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "dateRangeEnd": "YYYY-03-28",\n  "dateRangeStart": "YYYY-03-29",\n  "jobCompleteTime": null,\n  "jobCreateTime": "YYYY-04-24T09:02:59+00:00",\n  "jobDefinition": {\n    "variables": {\n      "ipaddress": {\n        "action": "delete"\n      }\n    }\n  },\n  "jobId": 24,\n  "progress": 0,\n  "reportSuiteId": "examplersid",\n  "serverCalls": 100,\n  "status": "processing"\n}\n')),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"validationToken")," is consumed when you create a data repair job. You must use the ",(0,i.mdx)("a",{parentName:"p",href:"server-call-estimate.md"},"Server Call estimate")," endpoint to generate a new ",(0,i.mdx)("inlineCode",{parentName:"p"},"validationToken")," to call this endpoint again."),(0,i.mdx)("h2",{id:"view-a-data-repair-api-job-list"},"View a Data Repair API job list"),(0,i.mdx)("p",null,"Use this endpoint to retrieve a list of your data repair jobs that were created for the given Report Suite. It includes both currently running and completed jobs."),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"GET https://analytics.adobe.io/api/{COMPANY_ID}/datarepair/v1/{RSID}/job")),(0,i.mdx)(m,{slots:"heading, code",repeat:"2",languages:"CURL,JSON",mdxType:"CodeBlock"}),(0,i.mdx)("h4",{id:"request-1"},"Request"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-sh"},'curl -X GET "https://analytics.adobe.io/api/exampleco/datarepair/v1/examplersid/job" \\\n  -H "Authorization: Bearer {ACCESS_TOKEN}" \\\n  -H "x-api-key: {API_KEY/CLIENT_ID}"\n')),(0,i.mdx)("h4",{id:"response-1"},"Response"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "dateRangeEnd": "YYYY-03-28",\n    "dateRangeStart": "YYYY-03-28",\n    "jobCompleteTime": "YYYY-04-24T10:13:51+00:00",\n    "jobCreateTime": "YYYY-04-24T09:02:59+00:00",\n    "jobDefinition": {\n      "variables": {\n        "activitymap": {\n          "action": "delete"\n        },\n        "prop12": {\n          "action": "delete"\n        },\n        "evar74": {\n          "action": "delete"\n        },\n        "evar107": {\n          "action": "delete"\n        }\n      }\n    },\n    "jobId": "24",\n    "progress": 100,\n    "reportSuiteId": "examplersid",\n    "serverCalls": 2,\n    "status": "complete"\n  },\n  {\n    "dateRangeEnd": "YYYY-04-24",\n    "dateRangeStart": "YYYY-04-24",\n    "jobCompleteTime": null,\n    "jobCreateTime": "YYYY-05-18T09:02:59+00:00",\n    "jobDefinition": {\n      "variables": {\n        "prop82": {\n          "action": "delete"\n        }\n      }\n    },\n    "jobId": "25",\n    "progress": 0,\n    "reportSuiteId": "examplersid",\n    "serverCalls": 2,\n    "status": "processing"\n  }\n]\n')),(0,i.mdx)("h2",{id:"view-an-individual-data-repair-api-job"},"View an individual Data Repair API job"),(0,i.mdx)("p",null,"You can call the ",(0,i.mdx)("inlineCode",{parentName:"p"},"/job/{JOB_ID}")," endpoint to check on the progress of a data repair job. Following submission of a job, ",(0,i.mdx)("inlineCode",{parentName:"p"},"status")," reports as ",(0,i.mdx)("inlineCode",{parentName:"p"},"processing")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"progress")," is a number between ",(0,i.mdx)("inlineCode",{parentName:"p"},"0")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"100"),". Once complete, ",(0,i.mdx)("inlineCode",{parentName:"p"},"status")," reports as ",(0,i.mdx)("inlineCode",{parentName:"p"},"complete")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"serverCalls")," is set to the number of Data Rows Scanned during the job. This ",(0,i.mdx)("inlineCode",{parentName:"p"},"serverCalls")," value is used to calculate usage."),(0,i.mdx)("p",null,"Completion of your data repair job can take hours to days, depending on the date range of the data repair job and the amount of traffic the Report Suite gets per day."),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"GET https://analytics.adobe.io/api/{GLOBALCOMPANYID}/datarepair/v1/{RSID}/job/{JOB_ID}")),(0,i.mdx)(m,{slots:"heading, code",repeat:"2",languages:"CURL,JSON",mdxType:"CodeBlock"}),(0,i.mdx)("h4",{id:"request-2"},"Request"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-sh"},'curl -X GET "https://analytics.adobe.io/api/exampleco/datarepair/v1/examplersid/job/24" \\\n  -H "Authorization: Bearer {ACCESS_TOKEN}" \\\n  -H "x-api-key: {API_KEY/CLIENT_ID}"\n')),(0,i.mdx)("h4",{id:"response-2"},"Response"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "dateRangeEnd": "YYYY-01-28",\n  "dateRangeStart": "YYYY-01-28",\n  "jobCompleteTime": "YYYY-03-24T10:13:51+00:00",\n  "jobCreateTime": "YYYY-03-24T09:02:59+00:00",\n  "jobDefinition": {\n    "variables": {\n      "activitymap": {\n        "action": "delete"\n      },\n      "prop12": {\n        "action": "delete"\n      },\n      "evar74": {\n        "action": "delete"\n      },\n      "evar107": {\n        "action": "delete"\n      }\n    }\n  },\n  "jobId": "24",\n  "progress": 100,\n  "reportSuiteId": "examplersid",\n  "serverCalls": 2,\n  "status": "complete"\n}\n')))}x.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-endpoints-data-repair-job-md-f21b838367309320ff96.js.map