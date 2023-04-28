"use strict";(self.webpackChunkanalytics_2_0_apis=self.webpackChunkanalytics_2_0_apis||[]).push([[7960],{37507:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return l},default:function(){return p}});var a=n(87462),r=n(63366),i=(n(15007),n(64983)),d=n(91515),m=["components"],l={},o={_frontmatter:l},s=d.Z;function p(e){var t=e.components,n=(0,r.Z)(e,m);return(0,i.mdx)(s,(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"segment-definition-data-structure"},"Segment definition data structure"),(0,i.mdx)("p",null,"The segment definition data structure is used to communicate segment rules to the API. This data structure defines the raw logic that is used to isolate the segment data. The segment definition is a hierarchical data structure of containers, functions, and boolean logic that is used to define the segment. The segment tool in the Adobe Analytics UI follows these rules and can be a useful tool for understanding how the data structure looks."),(0,i.mdx)("h2",{id:"terms"},"Terms"),(0,i.mdx)("p",null,"The following terms are used in segment definitions:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"Schema"),": A report suite's configuration. Identifies which dimensions and metrics are available for use within the segment. It defines the configuration for the enabled eVars, props, events, etc."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"Attribute"),": An entity in the schema. For example, ",(0,i.mdx)("inlineCode",{parentName:"li"},"variables/page")," or ",(0,i.mdx)("inlineCode",{parentName:"li"},"variables/evar1"),"."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"Context"),": The level that the segment logic operates on. Valid values are ",(0,i.mdx)("inlineCode",{parentName:"li"},"visitors"),", ",(0,i.mdx)("inlineCode",{parentName:"li"},"visits"),", and ",(0,i.mdx)("inlineCode",{parentName:"li"},"hits"),". See ",(0,i.mdx)("a",{parentName:"li",href:"https://experienceleague.adobe.com/docs/analytics/components/segmentation/seg-overview.html"},"Segment containers")," in the Analytics Components guide for more information."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"Row"),": A single record of data in a segment. Depending on the context, this can either be a record containing a visitor (contains all hits in all visits for a visitor), a single visit (contains all hits in a visit), or a single hit. The information stored in a row depends on the context setting for the container. For example, if the context is set to ",(0,i.mdx)("inlineCode",{parentName:"li"},"visitor"),", the row in the container contains all information about the visitor spanning all hits from all visits. To contrast, if the context is set to ",(0,i.mdx)("inlineCode",{parentName:"li"},"hits"),", the row only contains information related to the individual qualifying hits in the segment logic."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"Container"),": A collection of rows. It groups the segment logic and context together for use in calculating the rows that are assigned to the container. A container has three properties: ",(0,i.mdx)("inlineCode",{parentName:"li"},"func"),", ",(0,i.mdx)("inlineCode",{parentName:"li"},"context"),",and  ",(0,i.mdx)("inlineCode",{parentName:"li"},"pred"),"."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"Container Set"),": Groups containers and creates cartesian relationships between them using boolean expressions. For example, you have a container that groups visitors that have a purchase, and a second container that groups visitors who came to the website through a specific banner ad. The container set links these two containers with a boolean expression. If you use an ",(0,i.mdx)("inlineCode",{parentName:"li"},"AND")," condition, the visitor must match both expressions. If you use an ",(0,i.mdx)("inlineCode",{parentName:"li"},"OR")," condition, the visitor can match one or the other."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"Data Set"),": The collection of all records used across containers and container sets to calculate the population of the segment.")),(0,i.mdx)("h2",{id:"schema-functions"},"Schema Functions"),(0,i.mdx)("h3",{id:"attribute-functions"},"Attribute functions"),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Function"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"),(0,i.mdx)("th",{parentName:"tr",align:null},"Parameters"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"attr")),(0,i.mdx)("td",{parentName:"tr",align:null},"References an attribute in the schema. For example, ",(0,i.mdx)("inlineCode",{parentName:"td"},"evar1"),"."),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"name")," contains the name of the attribute in the schema.")))),(0,i.mdx)("h3",{id:"event-functions"},"Event functions"),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Function"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"),(0,i.mdx)("th",{parentName:"tr",align:null},"Parameters"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"event")),(0,i.mdx)("td",{parentName:"tr",align:null},"References an event from the schema. For example, ",(0,i.mdx)("inlineCode",{parentName:"td"},"event1")," or ",(0,i.mdx)("inlineCode",{parentName:"td"},"revenue"),". To use this, an aggregation function like 'total' must also be used."),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"name")," contains the name of the attribute in the schema.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"total")),(0,i.mdx)("td",{parentName:"tr",align:null},"Sums an event across the context resulting in a value that can be used in comparisons."),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"evt")," contains the event to be summed.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"event-exists")),(0,i.mdx)("td",{parentName:"tr",align:null},"Checks for the existence of the event in the context."),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"evt")," contains the event to be checked.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"not-event-exists")),(0,i.mdx)("td",{parentName:"tr",align:null},"Checks for the lack of the event in the context."),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"evt")," contains the event to be checked.")))),(0,i.mdx)("h3",{id:"grouping-functions"},"Grouping functions"),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Function"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"),(0,i.mdx)("th",{parentName:"tr",align:null},"Parameters"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"segment")),(0,i.mdx)("td",{parentName:"tr",align:null},"Holds the definition of the segment. It is the top level object."),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"version")," contains an array of three numbers that describes the version to use. ",(0,i.mdx)("inlineCode",{parentName:"td"},"container")," is a child function that contains the definition of the segment.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"container")),(0,i.mdx)("td",{parentName:"tr",align:null},"Identifies the context and defines segment logic."),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"context")," Contains the context. Valid values are ",(0,i.mdx)("inlineCode",{parentName:"td"},"visitors"),", ",(0,i.mdx)("inlineCode",{parentName:"td"},"visits"),", ",(0,i.mdx)("inlineCode",{parentName:"td"},"hits"),". ",(0,i.mdx)("inlineCode",{parentName:"td"},"pred")," Contains the logic for this container.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"and")),(0,i.mdx)("td",{parentName:"tr",align:null},"Groups multiple ",(0,i.mdx)("inlineCode",{parentName:"td"},"container")," objects together."),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"preds")," Contains an array of containers that define the segment logic and performs a boolean ",(0,i.mdx)("inlineCode",{parentName:"td"},"AND")," operation on them.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"or")),(0,i.mdx)("td",{parentName:"tr",align:null},"Groups multiple ",(0,i.mdx)("inlineCode",{parentName:"td"},"container")," objects together."),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"preds")," Contains an array of containers that define the segment logic and performs a boolean ",(0,i.mdx)("inlineCode",{parentName:"td"},"OR")," operation on them.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"without")),(0,i.mdx)("td",{parentName:"tr",align:null},"Performs a boolean ",(0,i.mdx)("inlineCode",{parentName:"td"},"NOT")," on the container provided in the ",(0,i.mdx)("inlineCode",{parentName:"td"},"pred")," parameter."),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"pred")," The container to perform a ",(0,i.mdx)("inlineCode",{parentName:"td"},"NOT")," operation on.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"sequence")),(0,i.mdx)("td",{parentName:"tr",align:null},"A group of conditions that must occur in the provided order."),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"stream")," A list of ordered containers that define conditions for the segment.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"sequence-prefix")),(0,i.mdx)("td",{parentName:"tr",align:null},"A list of conditions that must occur before a certain event."),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"stream")," A list of container objects defining the logic for this part of the segment. ",(0,i.mdx)("inlineCode",{parentName:"td"},"context"))),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"sequence-suffix")),(0,i.mdx)("td",{parentName:"tr",align:null},"A list of conditions that must occur after a certain event."),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"stream"),"  A list of container objects defining the logic for this part of the segment. ",(0,i.mdx)("inlineCode",{parentName:"td"},"context"))),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"sequence-and")),(0,i.mdx)("td",{parentName:"tr",align:null},"A group of unordered conditions that ",(0,i.mdx)("em",{parentName:"td"},"must all")," occur."),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"checkpoints")," A list of container objects that define the conditions.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"sequence-or")),(0,i.mdx)("td",{parentName:"tr",align:null},"A group of unordered conditions. Any individual condition (or more) must occur."),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"checkpoints")," A list of containers that define conditions for the segment.")))),(0,i.mdx)("h2",{id:"available-data-comparison-functions"},"Available Data Comparison Functions"),(0,i.mdx)("h3",{id:"string-functions"},"String functions"),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Function"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"),(0,i.mdx)("th",{parentName:"tr",align:null},"Parameters"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"streq")),(0,i.mdx)("td",{parentName:"tr",align:null},"Equals"),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"val")," contains a reference to the schema. ",(0,i.mdx)("inlineCode",{parentName:"td"},"str")," contains a literal value.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"not-streq")),(0,i.mdx)("td",{parentName:"tr",align:null},"Not Equals"),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"val")," contains a reference to the schema. ",(0,i.mdx)("inlineCode",{parentName:"td"},"str")," contains a literal value.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"strlt")),(0,i.mdx)("td",{parentName:"tr",align:null},"Less Than"),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"val")," contains a reference to the schema. ",(0,i.mdx)("inlineCode",{parentName:"td"},"str")," contains a literal value.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"strgt")),(0,i.mdx)("td",{parentName:"tr",align:null},"Greater Than"),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"val")," contains a reference to the schema. ",(0,i.mdx)("inlineCode",{parentName:"td"},"str")," contains a literal value.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"strle")),(0,i.mdx)("td",{parentName:"tr",align:null},"Less Than or Equals"),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"val")," contains a reference to the schema. ",(0,i.mdx)("inlineCode",{parentName:"td"},"str")," contains a literal value.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"strge")),(0,i.mdx)("td",{parentName:"tr",align:null},"Greater Than or Equals"),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"val")," contains a reference to the schema. ",(0,i.mdx)("inlineCode",{parentName:"td"},"str")," contains a literal value.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"streq-in")),(0,i.mdx)("td",{parentName:"tr",align:null},"Match a string to any of the values in the parameter"),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"val")," contains a reference to the schema. ",(0,i.mdx)("inlineCode",{parentName:"td"},"list")," contains an array of literal values.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"not-streq-in")),(0,i.mdx)("td",{parentName:"tr",align:null},"Ensure a string doesn't match any of the values in the parameter"),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"val")," contains a reference to the schema. ",(0,i.mdx)("inlineCode",{parentName:"td"},"list")," contains an array of literal values.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"contains")),(0,i.mdx)("td",{parentName:"tr",align:null},"Ensure a string matches or contains the value in the parameter"),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"val")," contains a reference to the schema. ",(0,i.mdx)("inlineCode",{parentName:"td"},"str")," contains a literal value.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"not-contains")),(0,i.mdx)("td",{parentName:"tr",align:null},"Ensure a string doesn't match or contains the value in the parameter"),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"val")," contains a reference to the schema. ",(0,i.mdx)("inlineCode",{parentName:"td"},"str")," contains a literal value.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"contains-any-of")),(0,i.mdx)("td",{parentName:"tr",align:null},"Ensure a string contains any of the values in the parameter. Case-insensitive."),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"val")," contains a reference to the schema. ",(0,i.mdx)("inlineCode",{parentName:"td"},"list")," contains an array of literal values.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"contains-all-of")),(0,i.mdx)("td",{parentName:"tr",align:null},"Ensure a string contains all of the values in the parameter. Case-insensitive."),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"val")," contains a reference to the schema. ",(0,i.mdx)("inlineCode",{parentName:"td"},"list")," contains an array of literal values.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"not-contains-any-of")),(0,i.mdx)("td",{parentName:"tr",align:null},"Ensure a string doesn't contain at least one of the values in the parameter. Case-insensitive."),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"val")," contains a reference to the schema. ",(0,i.mdx)("inlineCode",{parentName:"td"},"list")," contains an array of literal values.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"not-contains-all-of")),(0,i.mdx)("td",{parentName:"tr",align:null},"Ensure a string doesn't contain any of the values in the parameter. Case-insensitive."),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"val")," contains a reference to the schema. ",(0,i.mdx)("inlineCode",{parentName:"td"},"list")," contains an array of literal values.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"starts-with")),(0,i.mdx)("td",{parentName:"tr",align:null},"Ensure a string starts with the value in the parameter. Case-insensitive."),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"val")," contains a reference to the schema. ",(0,i.mdx)("inlineCode",{parentName:"td"},"str")," contains a literal value.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"ends-with")),(0,i.mdx)("td",{parentName:"tr",align:null},"Ensure a string ends with the value in the parameter. Case-insensitive."),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"val")," contains a reference to the schema. ",(0,i.mdx)("inlineCode",{parentName:"td"},"str")," contains a literal value.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"not-starts-with")),(0,i.mdx)("td",{parentName:"tr",align:null},"Ensure a string doesn't start with the value in the parameter. Case-insensitive."),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"val")," contains a reference to the schema. ",(0,i.mdx)("inlineCode",{parentName:"td"},"str")," contains a literal value.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"not-ends-with")),(0,i.mdx)("td",{parentName:"tr",align:null},"Ensure a string doesn't end with the value in the parameter. Case-insensitive."),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"val")," contains a reference to the schema. ",(0,i.mdx)("inlineCode",{parentName:"td"},"str")," contains a literal value.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"matches")),(0,i.mdx)("td",{parentName:"tr",align:null},"Ensure a string matches the glob parameter. A glob parameter uses a '",(0,i.mdx)("em",{parentName:"td"},"' character to match any sequence of characters. A literal '"),"' is expressed with '","*","'."),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"val")," contains a reference to the schema. ",(0,i.mdx)("inlineCode",{parentName:"td"},"glob")," contains a literal value.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"not-matches")),(0,i.mdx)("td",{parentName:"tr",align:null},"Ensure a string doesn't match the glob parameter. A glob parameter uses a '",(0,i.mdx)("em",{parentName:"td"},"' character to match any sequence of characters. A literal '"),"' is expressed with '","*","'."),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"val")," contains a reference to the schema. ",(0,i.mdx)("inlineCode",{parentName:"td"},"glob")," contains a literal value.")))),(0,i.mdx)("h3",{id:"numeric-functions"},"Numeric functions"),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Function"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"),(0,i.mdx)("th",{parentName:"tr",align:null},"Parameters"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"eq")),(0,i.mdx)("td",{parentName:"tr",align:null},"Equals"),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"val")," The attribute to compare. ",(0,i.mdx)("inlineCode",{parentName:"td"},"num")," The literal number being compared to.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"not-eq")),(0,i.mdx)("td",{parentName:"tr",align:null},"Not equals"),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"val")," The attribute to compare. ",(0,i.mdx)("inlineCode",{parentName:"td"},"num")," The literal number being compared to.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"gt")),(0,i.mdx)("td",{parentName:"tr",align:null},"Greater than"),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"val")," The attribute to compare. ",(0,i.mdx)("inlineCode",{parentName:"td"},"num")," The literal number being compared to.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"lt")),(0,i.mdx)("td",{parentName:"tr",align:null},"Less than"),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"val")," The attribute to compare. ",(0,i.mdx)("inlineCode",{parentName:"td"},"num")," The literal number being compared to.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"ge")),(0,i.mdx)("td",{parentName:"tr",align:null},"Greater than or equal to"),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"val")," The attribute to compare. ",(0,i.mdx)("inlineCode",{parentName:"td"},"num")," The literal number being compared to.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"le")),(0,i.mdx)("td",{parentName:"tr",align:null},"Less than"),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"val")," The attribute to compare. ",(0,i.mdx)("inlineCode",{parentName:"td"},"num")," The literal number being compared to.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"eq-any-of")),(0,i.mdx)("td",{parentName:"tr",align:null},"Equal to any of the values provided"),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"val")," The attribute to compare. ",(0,i.mdx)("inlineCode",{parentName:"td"},"list")," An array of numbers to use in the comparison.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"not-eq-any-of")),(0,i.mdx)("td",{parentName:"tr",align:null},"Not equal to any of the values provided"),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"val")," The attribute to compare. ",(0,i.mdx)("inlineCode",{parentName:"td"},"list")," An array of numbers to use in the comparison.")))),(0,i.mdx)("h3",{id:"existence-functions"},"Existence functions"),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Function"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"),(0,i.mdx)("th",{parentName:"tr",align:null},"Parameters"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"exists")),(0,i.mdx)("td",{parentName:"tr",align:null},"Tests if an attribute has been set to a value."),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"val")," The attribute to test.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"not-exists")),(0,i.mdx)("td",{parentName:"tr",align:null},"Tests if an attribute has never been set to a value."),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"val")," The attribute to test.")))),(0,i.mdx)("h3",{id:"temporal-functions"},"Temporal functions"),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Function"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"),(0,i.mdx)("th",{parentName:"tr",align:null},"Parameters"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"ime-restriction")),(0,i.mdx)("td",{parentName:"tr",align:null},"Used to determine if a checkpoint occurred within a given time frame."),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"limit")," Limits the event to a context. Valid values are ",(0,i.mdx)("inlineCode",{parentName:"td"},"after")," or ",(0,i.mdx)("inlineCode",{parentName:"td"},"within"),". ",(0,i.mdx)("inlineCode",{parentName:"td"},"unit")," A unit of time. Valid values are ",(0,i.mdx)("inlineCode",{parentName:"td"},"minute"),", ",(0,i.mdx)("inlineCode",{parentName:"td"},"hour"),", ",(0,i.mdx)("inlineCode",{parentName:"td"},"day"),", ",(0,i.mdx)("inlineCode",{parentName:"td"},"week"),", ",(0,i.mdx)("inlineCode",{parentName:"td"},"month"),", ",(0,i.mdx)("inlineCode",{parentName:"td"},"quarter"),", ",(0,i.mdx)("inlineCode",{parentName:"td"},"year"),". ",(0,i.mdx)("inlineCode",{parentName:"td"},"count")," The number of temporal units based on the ",(0,i.mdx)("inlineCode",{parentName:"td"},"unit")," parameter.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"container-restriction")),(0,i.mdx)("td",{parentName:"tr",align:null},"Used to determine if checkpoints described in other containers have happened in a specific sequence."),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"limit")," Limits the event to a context. Valid values are ",(0,i.mdx)("inlineCode",{parentName:"td"},"after")," or ",(0,i.mdx)("inlineCode",{parentName:"td"},"within"),". ",(0,i.mdx)("inlineCode",{parentName:"td"},"count"),"  Specifies the number of events (page views, visits, days, months, etc) between two checkpoints.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"dimension-restriction")),(0,i.mdx)("td",{parentName:"tr",align:null},"Used between checkpoints to specify the activity can exist in sequence between them."),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"limit")," Limits the checkpoint to a context. Valid values are ",(0,i.mdx)("inlineCode",{parentName:"td"},"after")," or ",(0,i.mdx)("inlineCode",{parentName:"td"},"within"),". ",(0,i.mdx)("inlineCode",{parentName:"td"},"count")," Specifies the number of events (page views, visits, days, months, etc) between two checkpoints.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"exclude-next-checkpoint")),(0,i.mdx)("td",{parentName:"tr",align:null},"Ensures the next checkpoint doesn't happen between the preceding checkpoint and the subsequent checkpoint. If there is no subsequent checkpoint then the excluded checkpoint must not occur at any point after the preceding checkpoint. If there is no preceding checkpoint then the excluded checkpoint must not have occurred at any point preceding the subsequent checkpoint."),(0,i.mdx)("td",{parentName:"tr",align:null})))),(0,i.mdx)("p",null,"See ",(0,i.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/analytics/components/segmentation/segmentation-workflow/seg-sequential-build.html"},"Build sequential segments")," in the Analytics Components user guide for more information."))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-endpoints-segments-definition-md-848c5e739ee5ea563990.js.map