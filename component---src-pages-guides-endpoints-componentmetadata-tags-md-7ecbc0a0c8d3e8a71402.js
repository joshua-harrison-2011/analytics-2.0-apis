(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[9634],{48695:function(e,n,a){"use strict";a.r(n),a.d(n,{_frontmatter:function(){return d},default:function(){return u}});var t,o=a(22122),m=a(19756),i=(a(15007),a(64983)),p=a(99536),l=["components"],d={},s=(t="CodeBlock",function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)}),r={_frontmatter:d},c=p.Z;function u(e){var n=e.components,a=(0,m.Z)(e,l);return(0,i.mdx)(c,(0,o.Z)({},r,a,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"tags-api"},"Tags API"),(0,i.mdx)("p",null,"The Analytics 2.0 Tags APIs allow you to retrieve, update, or create tags and their association with components programmatically through Adobe I/O. The APIs use the same data and methods that are used when working with tags in the UI."),(0,i.mdx)("h2",{id:"retrieve-multiple-tags"},"Retrieve multiple tags"),(0,i.mdx)("p",null,"Retrieve a list of tags for the organization."),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"GET https://analytics.adobe.io/api/{COMPANYID}/componentmetadata/tags")),(0,i.mdx)("p",null,"You can paginate results by using the ",(0,i.mdx)("inlineCode",{parentName:"p"},"limit")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"page")," query strings."),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"strong"},"limit")),": An integer that represents the number of results per page."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"strong"},"page")),": An integer that represents which page to return results.")),(0,i.mdx)("p",null,"For example, use the ",(0,i.mdx)("inlineCode",{parentName:"p"},"page")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"limit")," query strings to only retrieve the first 3 tags in a company:"),(0,i.mdx)(s,{slots:"heading, code",repeat:"2",languages:"CURL,JSON",mdxType:"CodeBlock"}),(0,i.mdx)("h4",{id:"request"},"Request"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-sh"},"curl -X GET \\\n  https://analytics.adobe.io/api/{COMPANYID}/componentmetadata/tags?page=0&limit=3 \\\n  -H 'Accept: application/json' \\\n  -H 'Authorization: Bearer {ACCESSTOKEN}' \\\n  -H 'Content-Type: application/json' \\\n  -H 'x-api-key: {APIKEY}' \\\n  -H 'x-proxy-global-company-id: {COMPANYID}' \\\n")),(0,i.mdx)("h4",{id:"response"},"Response"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "content": [\n    {\n      "id": 596,\n      "name": "Sales"\n    },\n    {\n      "id": 597,\n      "name": "Marketing"\n    },\n    {\n      "id": 662,\n      "name": "Finance"\n    }\n  ],\n  "numberOfElements": 3,\n  "totalElements": 385,\n  "totalPages": 129,\n  "firstPage": true,\n  "lastPage": false,\n  "sort": null,\n  "size": 3,\n  "number": 0\n}\n')),(0,i.mdx)("h2",{id:"retrieve-a-single-tag"},"Retrieve a single tag"),(0,i.mdx)("p",null,"Retrieves information around the specified tag ID."),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"GET https://analytics.adobe.io/api/{COMPANYID}/componentmetadata/tags/{ID}")),(0,i.mdx)("p",null,"For example, get details around a tag with the ID of ",(0,i.mdx)("inlineCode",{parentName:"p"},"35632"),":"),(0,i.mdx)(s,{slots:"heading, code",repeat:"2",languages:"CURL,JSON",mdxType:"CodeBlock"}),(0,i.mdx)("h4",{id:"request-1"},"Request"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-sh"},"curl -X GET \\\n  https://analytics.adobe.io/api/{COMPANYID}/componentmetadata/tags/35632 \\\n  -H 'Accept: application/json' \\\n  -H 'Authorization: Bearer {ACCESSTOKEN}' \\\n  -H 'Content-Type: application/json' \\\n  -H 'x-api-key: {APIKEY}' \\\n  -H 'x-proxy-global-company-id: {COMPANYID}' \\\n")),(0,i.mdx)("h4",{id:"response-1"},"Response"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "id": 35632,\n  "name": "Sales",\n  "description": "Sales department",\n  "components": [\n    {\n      "componentType": "project",\n      "componentId": "component-id-1"\n    }\n  ]\n}\n')),(0,i.mdx)("h2",{id:"retrieve-a-list-of-components-by-tag"},"Retrieve a list of components by tag"),(0,i.mdx)("p",null,"Retrieve all components of specific type associated with tag names."),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"GET https://analytics.adobe.io/api/{COMPANYID}/componentmetadata/tags/tagnames?tagNames={TAGNAMES}")),(0,i.mdx)("p",null,"This API call requires the ",(0,i.mdx)("inlineCode",{parentName:"p"},"tagNames")," query string. Query string values include a comma-separated list of tag names to search. For example, retrieve calculated metrics associated with any one of multiple tags."),(0,i.mdx)(s,{slots:"heading, code",repeat:"2",languages:"CURL,JSON",mdxType:"CodeBlock"}),(0,i.mdx)("h4",{id:"request-2"},"Request"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-sh"},"curl -X GET \\\n  https://analytics.adobe.io/api/{COMPANYID}/componentmetadata/tags/tagnames?tagNames=Sales,Marketing&componentType=calculatedMetric \\\n  -H 'Accept: application/json' \\\n  -H 'Authorization: Bearer {ACCESSTOKEN}' \\\n  -H 'Content-Type: application/json' \\\n  -H 'x-api-key: {APIKEY}' \\\n  -H 'x-proxy-global-company-id: {COMPANYID}' \\\n")),(0,i.mdx)("h4",{id:"response-2"},"Response"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'[\n  "calculatedmetric-1",\n  "calculatedmetric-2"\n]\n')),(0,i.mdx)("h2",{id:"retrieve-all-tags-for-one-or-more-components"},"Retrieve all tags for one or more components"),(0,i.mdx)("p",null,"Retrieve a list of tags tied to one or more components."),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"GET https://analytics.adobe.io/api/{COMPANYID}/componentmetadata/tags/search?componentId={ID}&componentType={TYPE}")),(0,i.mdx)("p",null,"This API call requires two query string parameters:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"strong"},"componentId")),": The ID of the component(s). Separate multiple ID's with a comma."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"strong"},"componentType")),": The type of the component. Valid component types include:",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"segment")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"dashboard")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"bookmark")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"calculatedMetric")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"project")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"dateRange")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"metric")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"dimension")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"virtualReportSuite")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"scheduledJob")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"alert")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"classificationSet"))))),(0,i.mdx)("p",null,"For example, retrieve the tags associated with two bookmarks:"),(0,i.mdx)(s,{slots:"heading, code",repeat:"2",languages:"CURL,JSON",mdxType:"CodeBlock"}),(0,i.mdx)("h4",{id:"request-3"},"Request"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-sh"},"curl -X GET \\\n  https://analytics.adobe.io/api/{COMPANYID}/componentmetadata/tags/search?componentId=bookmark1,bookmark2&componentType=bookmark \\\n  -H 'Accept: application/json' \\\n  -H 'Authorization: Bearer {ACCESSTOKEN}' \\\n  -H 'Content-Type: application/json' \\\n  -H 'x-api-key: {APIKEY}' \\\n  -H 'x-proxy-global-company-id: {COMPANYID}' \\\n")),(0,i.mdx)("h4",{id:"response-3"},"Response"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "id": 35653,\n    "name": "Sales",\n    "description": "Sales department",\n    "components": [\n      {\n        "componentType": "bookmark",\n        "componentId": "bookmark1"\n      }\n    ]\n  },\n  {\n    "id": 35654,\n    "name": "Finance",\n    "description": "Finance department",\n    "components": [\n      {\n        "componentType": "bookmark",\n        "componentId": "bookmark2"\n      }\n    ]\n  }\n]\n')),(0,i.mdx)("h2",{id:"retrieve-tags-for-multiple-components"},"Retrieve tags for multiple components"),(0,i.mdx)("p",null,"Finds one or more tags with desired values."),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"POST https://analytics.adobe.io/api/{COMPANYID}/componentmetadata/tags/component/search")),(0,i.mdx)("p",null,"This API call requires a JSON request body to determine search criteria. For example:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "componentType": "project",\n  "componentIds": [\n    "component-id-556"\n  ]\n}\n')),(0,i.mdx)("p",null,"This API call sends a JSON request body with search criteria. Adobe returns the first three projects that contain that component."),(0,i.mdx)(s,{slots:"heading, code",repeat:"2",languages:"CURL,JSON",mdxType:"CodeBlock"}),(0,i.mdx)("h4",{id:"request-4"},"Request"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-sh"},"curl -X POST \\\n  https://analytics.adobe.io/api/{COMPANYID}/componentmetadata/tags/component/search?page=0&limit=3 \\\n  -H 'Accept: application/json' \\\n  -H 'Authorization: Bearer {ACCESSTOKEN}' \\\n  -H 'Content-Type: application/json' \\\n  -H 'x-api-key: {APIKEY}' \\\n  -H 'x-proxy-global-company-id: {COMPANYID}' \\\n  -d '{\"componentType\": \"project\", \"componentIds\": [\"component-id-556\"]}'\n")),(0,i.mdx)("h4",{id:"response-4"},"Response"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'{\n"content": [\n  {\n    "componentType": "project",\n    "componentId": "component-id-556",\n    "tags": [\n      {\n        "id": 35625,\n        "name": "Finance",\n        "components": []\n      },\n      {\n        "id": 35624,\n        "name": "Marketing",\n        "components": []\n      },      \n      {\n        "id": 35626,\n        "name": "Warehouse",\n        "components": []\n      }\n    ]\n  }\n],\n"totalElements": 1,\n"totalPages": 1,\n"number": 0,\n"numberOfElements": 1,\n"firstPage": true,\n"lastPage": true,\n"sort": null,\n"size": 10\n}\n')),(0,i.mdx)("h2",{id:"create-a-tag"},"Create a tag"),(0,i.mdx)("p",null,"Creates tags for use with components."),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"POST https://analytics.adobe.io/api/{COMPANY_ID}/componentmetadata/tags")),(0,i.mdx)("p",null,"This API call requires a JSON request body so it can create the desired tag. The JSON request body is an array of tags to create. For example:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'[\n   {\n      "name":"Tag name",\n      "description":"Description",\n      "components":[\n         {\n            "componentType":"project",\n            "componentId":"component-id-1"\n         }\n      ]\n   }\n]\n')),(0,i.mdx)("p",null,"The following example API call performs several actions:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},'Creates two tags named "Sales Department" and "Marketing Department"'),(0,i.mdx)("li",{parentName:"ul"},'Ties "Sales Department" with two components: one with ID ',(0,i.mdx)("inlineCode",{parentName:"li"},"component-id-1")," and ",(0,i.mdx)("inlineCode",{parentName:"li"},"component-id-2")),(0,i.mdx)("li",{parentName:"ul"},'Ties "Marketing Department" with two components: one with ID ',(0,i.mdx)("inlineCode",{parentName:"li"},"component-id-3")," and ",(0,i.mdx)("inlineCode",{parentName:"li"},"component-id-4"))),(0,i.mdx)(s,{slots:"heading, code",repeat:"2",languages:"CURL,JSON",mdxType:"CodeBlock"}),(0,i.mdx)("h4",{id:"request-5"},"Request"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-sh"},'curl -X POST \\\n  https://analytics.adobe.io/api/{COMPANYID}/componentmetadata/tags \\\n  -H \'Accept: application/json\' \\\n  -H \'Authorization: Bearer {ACCESSTOKEN}\' \\\n  -H \'Content-Type: application/json\' \\\n  -H \'x-api-key: {APIKEY}\' \\\n  -H \'x-proxy-global-company-id: {COMPANYID}\' \\\n  -d \'[{ \n      "name":"sales",\n      "description":"Sales Department",\n      "components":[{\n            "componentType":"project",\n            "componentId":"component-id-1"\n         },{\n            "componentType":"segment",\n            "componentId":"component-id-2"\n         }\n      ]\n   },\n   {\n      "name":"marketing",\n      "description":"Marketing Department",\n      "components":[\n         {\n            "componentType":"project",\n            "componentId":"component-id-3"\n         },\n         {\n            "componentType":"segment",\n            "componentId":"component-id-4"\n         }\n      ]\n   }\n]\'\n')),(0,i.mdx)("h4",{id:"response-5"},"Response"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'[\n   {\n      "id":35632,\n      "name":"sales",\n      "description":"Sales Department",\n      "components":[\n         {\n            "componentType":"project",\n            "componentId":"component-id-1"\n         },\n         {\n            "componentType":"segment",\n            "componentId":"component-id-2"\n         }\n      ],\n      "status":{\n         "success":true\n      }\n   },\n   {\n      "id":35633,\n      "name":"marketing",\n      "description":"Marketing Department",\n      "components":[\n         {\n            "componentType":"project",\n            "componentId":"component-id-3"\n         },\n         {\n            "componentType":"segment",\n            "componentId":"component-id-4"\n         }\n      ],\n      "status":{\n         "success":true\n      }\n   }\n]\n')),(0,i.mdx)("h2",{id:"delete-a-tag"},"Delete a tag"),(0,i.mdx)("p",null,"Deletes a tag. It also untags all components associated with the tag."),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"DELETE https://analytics.adobe.io/api/{COMPANYID}/componentmetadata/tags/{TAG_ID}")),(0,i.mdx)("p",null,"For example, deletes a tag with the ID ",(0,i.mdx)("inlineCode",{parentName:"p"},"38945")," and untags all components associated with it."),(0,i.mdx)(s,{slots:"heading, code",repeat:"2",languages:"CURL,JSON",mdxType:"CodeBlock"}),(0,i.mdx)("h4",{id:"request-6"},"Request"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-sh"},"curl -X DELETE \\\n  https://analytics.adobe.io/api/{COMPANYID}/componentmetadata/tags/38945 \\\n  -H 'Accept: application/json' \\\n  -H 'Authorization: Bearer {ACCESSTOKEN}' \\\n  -H 'Content-Type: application/json' \\\n  -H 'x-api-key: {APIKEY}' \\\n  -H 'x-proxy-global-company-id: {COMPANYID}' \\\n")),(0,i.mdx)("h4",{id:"response-6"},"Response"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "tagId": "38945",\n  "status": {\n    "success": true\n  }\n}\n')),(0,i.mdx)("h2",{id:"remove-all-tags-from-components"},"Remove all tags from component(s)"),(0,i.mdx)("p",null,"Removes all tags from list of components."),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"DELETE https://analytics.adobe.io/api/{COMPANYID}/componentmetadata/tags?componentId={ID}&componentType={TYPE}")),(0,i.mdx)("p",null,"This API call requires two query string parameters:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"strong"},"componentId")),": The ID of the component(s). Separate multiple ID's with a comma."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"strong"},"componentType")),": The type of the component. Valid component types include:",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"segment")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"dashboard")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"bookmark")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"calculatedMetric")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"project")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"dateRange")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"metric")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"dimension")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"virtualReportSuite")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"scheduledJob")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"alert")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"classificationSet"))))),(0,i.mdx)("p",null,"For example, remove all tags associated with two segments."),(0,i.mdx)(s,{slots:"heading, code",repeat:"2",languages:"CURL,JSON",mdxType:"CodeBlock"}),(0,i.mdx)("h4",{id:"request-7"},"Request"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-sh"},"curl -X DELETE \\\n  https://analytics.adobe.io/api/{COMPANYID}/componentmetadata/tags?componentIds=segment1,segment2&componentType=segment \\\n  -H 'Accept: application/json' \\\n  -H 'Authorization: Bearer {ACCESSTOKEN}' \\\n  -H 'Content-Type: application/json' \\\n  -H 'x-api-key: {APIKEY}' \\\n  -H 'x-proxy-global-company-id: {COMPANYID}' \\\n")),(0,i.mdx)("h4",{id:"response-7"},"Response"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "segment1,segment2",\n  "status": {\n    "success": true\n  }\n}\n')),(0,i.mdx)("h2",{id:"overwrite-tags-for-components"},"Overwrite tags for components"),(0,i.mdx)("p",null,"Set the tags for one or more components. This endpoint overwrites all existing tags for the component, meaning that existing tags are removed."),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"PUT https://analytics.adobe.io/api/{COMPANYID}/componentmetadata/tags/tagitems")),(0,i.mdx)("p",null,"This API call requires a JSON request body that contains the components to update and the tags to set. For example:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'[\n   {\n      "componentType":"project",\n      "componentId":"component-id-1",\n      "tags":[\n         {\n            "name":"marketing-1",\n            "description":"marketing 1"\n         },\n         {\n            "name":"marketing-2",\n            "description":"marketing 2"\n         }\n      ]\n   }\n]\n')),(0,i.mdx)("p",null,"For example, this API call performs several actions:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},'Creates two tags named "marketing-1" and "marketing-2"'),(0,i.mdx)("li",{parentName:"ul"},"Ties these two tags with the component ",(0,i.mdx)("inlineCode",{parentName:"li"},"component-id-1")),(0,i.mdx)("li",{parentName:"ul"},"If there are any existing tags tied with ",(0,i.mdx)("inlineCode",{parentName:"li"},"component-id-1"),", remove those ties.")),(0,i.mdx)(s,{slots:"heading, code",repeat:"2",languages:"CURL,JSON",mdxType:"CodeBlock"}),(0,i.mdx)("h4",{id:"request-8"},"Request"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-sh"},'curl -X PUT \\\n  https://analytics.adobe.io/api/{COMPANYID}/componentmetadata/tags/tagitems \\\n  -H \'Accept: application/json\' \\\n  -H \'Authorization: Bearer {ACCESSTOKEN}\' \\\n  -H \'Content-Type: application/json\' \\\n  -H \'x-api-key: {APIKEY}\' \\\n  -H \'x-proxy-global-company-id: {COMPANYID}\' \\\n  -d \'[{"componentType":"project",\n      "componentId":"component-id-1",\n      "tags":[{\n          "name":"marketing-1",\n          "description":"marketing 1"},\n        {"name":"marketing-2",\n          "description":"markerting 2"}]\n        }\n      ]\'\n')),(0,i.mdx)("h4",{id:"response-8"},"Response"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "componentType": "project",\n    "componentId": "component-id-1",\n    "tags": [\n      {\n        "id": 35653,\n        "name": "marketing-1",\n        "description": "marketing 1"\n      },\n      {\n        "id": 35654,\n        "name": "marketing-2",\n        "description": "marketing 2"\n      }\n    ],\n    "status": {\n      "success": true\n    }\n  }\n]\n')))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-endpoints-componentmetadata-tags-md-7ecbc0a0c8d3e8a71402.js.map