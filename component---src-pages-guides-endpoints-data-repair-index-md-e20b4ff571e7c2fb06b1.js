(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[6362],{63359:function(e,a,t){"use strict";t.r(a),t.d(a,{_frontmatter:function(){return s},default:function(){return u}});var i,r=t(22122),o=t(19756),n=(t(15007),t(64983)),d=t(99536),p=["components"],s={},l=(i="InlineAlert",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.mdx)("div",e)}),m={_frontmatter:s},c=d.Z;function u(e){var a=e.components,t=(0,o.Z)(e,p);return(0,n.mdx)(c,(0,r.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,n.mdx)("h1",{id:"data-repair-api"},"Data Repair API"),(0,n.mdx)("p",null,"The Data Repair API provides you with a way to delete or edit your existing Adobe Analytics data. The API offers you the ability to delete columns of data. Filters provide options for you to target specific values within a data column to make precise adjustments to your data. If you use Adobe Experience Platform, repairs made to your Adobe Analytics data are also reflected in any data you send to the Adobe Experience Platform Data Lake through the Analytics Data Connector."),(0,n.mdx)("p",null,"While most data types and variables are available to repair or delete through this API, note that events/metrics, merchandising variables, and some other variable types are not available. Review the ",(0,n.mdx)("a",{parentName:"p",href:"json-body.md"},"Job definition reference")," for a detailed list of the variables supported by the Data Repair API."),(0,n.mdx)(l,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,n.mdx)("p",null,"Use of the Data Repair API permanently deletes or edits existing Adobe Analytics data. Adobe recommends that you take a careful approach when executing Data Repair API jobs to minimize accidental deletion or alteration of your data. Read through all pages of this guide carefully before using the Data Repair API."),(0,n.mdx)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.mdx)("p",null,"Before using the Data Repair API, make sure that all the following prerequisites are met:"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},"Confirm that your Sales Order includes the use of the Data Repair API. The Data Repair API is a paid service. Reach out to your Adobe Account Manager for details and confirmation of your status.")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},"You successfully authenticate with the Adobe Analytics 2.0 API using a JSON Web Token (JWT). OAuth is not supported. See ",(0,n.mdx)("a",{parentName:"p",href:"../../index.md"},"Getting started with the Analytics API"),' to make sure that you have the correct API permissions in the Adobe Admin Console, create an API client on Adobe Developer, and that you successfully authenticate. Make sure that you include the "Data Repair API" permission item when creating a product profile in the Adobe Admin Console.'),(0,n.mdx)("p",{parentName:"li"}," ",(0,n.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1104px"}},"\n      ",(0,n.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"28.750000000000004%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,n.mdx)("picture",{parentName:"span"},"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/analytics-2.0-apis/static/7a8001f42f86fc74501eb8302184d9ed/cb523/data-repair-permission.webp 320w","/analytics-2.0-apis/static/7a8001f42f86fc74501eb8302184d9ed/797b9/data-repair-permission.webp 640w","/analytics-2.0-apis/static/7a8001f42f86fc74501eb8302184d9ed/749d8/data-repair-permission.webp 1104w"],sizes:"(max-width: 1104px) 100vw, 1104px",type:"image/webp"}),"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/analytics-2.0-apis/static/7a8001f42f86fc74501eb8302184d9ed/72799/data-repair-permission.png 320w","/analytics-2.0-apis/static/7a8001f42f86fc74501eb8302184d9ed/6af66/data-repair-permission.png 640w","/analytics-2.0-apis/static/7a8001f42f86fc74501eb8302184d9ed/7388e/data-repair-permission.png 1104w"],sizes:"(max-width: 1104px) 100vw, 1104px",type:"image/png"}),"\n          ",(0,n.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/analytics-2.0-apis/static/7a8001f42f86fc74501eb8302184d9ed/7388e/data-repair-permission.png",alt:"data repair permission",title:"data repair permission",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")))),(0,n.mdx)("h2",{id:"workflow"},"Workflow"),(0,n.mdx)("p",null,"Adobe recommends a careful and methodical approach when using the Data Repair API due to its ability to permanently delete or edit your data. The following steps provide multiple checkpoints to minimize the risk of accidental data deletion. Review the data after each step to confirm that the data repair job completes as expected. Adobe recommends that you create a data repair job for each of the following in order:"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"A ",(0,n.mdx)("strong",{parentName:"li"},"development")," Report Suite for ",(0,n.mdx)("strong",{parentName:"li"},"one day")," (ideally the first) of data."),(0,n.mdx)("li",{parentName:"ul"},"A ",(0,n.mdx)("strong",{parentName:"li"},"development")," Report Suite for ",(0,n.mdx)("strong",{parentName:"li"},"one month")," of data."),(0,n.mdx)("li",{parentName:"ul"},"The ",(0,n.mdx)("strong",{parentName:"li"},"production")," Report Suite for ",(0,n.mdx)("strong",{parentName:"li"},"one day")," (ideally the first) of data."),(0,n.mdx)("li",{parentName:"ul"},"The ",(0,n.mdx)("strong",{parentName:"li"},"production")," Report Suite for ",(0,n.mdx)("strong",{parentName:"li"},"one month")," of data."),(0,n.mdx)("li",{parentName:"ul"},"Once all of your testing and validation is complete, you can proceed with the ",(0,n.mdx)("strong",{parentName:"li"},"full date range")," of the data repair for ",(0,n.mdx)("strong",{parentName:"li"},"production")," data.")),(0,n.mdx)("p",null,"The following steps provide a typical Data Repair API request workflow:"),(0,n.mdx)("ol",null,(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("p",{parentName:"li"},(0,n.mdx)("strong",{parentName:"p"},"Estimate repair size"),": The Data Repair API incurs charges based on the number of Data Rows Scanned. The ",(0,n.mdx)("a",{parentName:"p",href:"server-call-estimate.md"},"Server call estimate")," endpoint is a required step to help you estimate the cost of a repair. It returns a count of the Server Call volume for the Report Suite date range. The endpoint also returns a ",(0,n.mdx)("inlineCode",{parentName:"p"},"validationToken"),", which is required for step 2.")),(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("p",{parentName:"li"},(0,n.mdx)("strong",{parentName:"p"},"Create a data repair job"),": Use the ",(0,n.mdx)("a",{parentName:"p",href:"job.md"},"Job")," endpoint to create a data repair job. This endpoint requires a Report Suite, date range, ",(0,n.mdx)("inlineCode",{parentName:"p"},"validationToken")," (from ",(0,n.mdx)("a",{parentName:"p",href:"server-call-estimate.md"},"Server call estimate"),"), and a ",(0,n.mdx)("a",{parentName:"p",href:"json-body.md"},"Job definition"),". A Job ID is returned when a data repair job is created.")),(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("p",{parentName:"li"},(0,n.mdx)("strong",{parentName:"p"},"Monitor progress"),": Use the ",(0,n.mdx)("a",{parentName:"p",href:"job.md#view-an-individual-job"},"Job ID")," endpoint to monitor the status of a data repair job at any point after a data repair job submission. Completion time of a data repair job depends on its size; small jobs can complete within hours while large jobs can take multiple days.")),(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("p",{parentName:"li"},(0,n.mdx)("strong",{parentName:"p"},"Review completed jobs"),": Use the ",(0,n.mdx)("a",{parentName:"p",href:"job.md#view-a-job-list"},"Job list")," endpoint to keep track of all existing and completed jobs."))))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-endpoints-data-repair-index-md-e20b4ff571e7c2fb06b1.js.map