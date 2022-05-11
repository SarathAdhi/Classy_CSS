var link=document.createElement("link");link.setAttribute("rel","stylesheet"),link.setAttribute("href","https://sarathadhi.github.io/Cust-CSS-CDN/files/css/styles.global.css"),document.getElementsByTagName("head")[0].appendChild(link);var displayProps=["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","none"],positionProps=["static","fixed","absolute","relative","sticky"],justifyContent=[{name:"justify-content: flex-start;",abbr:"jc-start"},{name:"justify-content: flex-end;",abbr:"jc-end"},{name:"justify-content: space-around;",abbr:"jc-around"},{name:"justify-content: center;",abbr:"jc-center"},{name:"justify-content: space-between;",abbr:"jc-between"},{name:"justify-content: space-evenly;",abbr:"jc-evenly"}],alignItems=[{name:"align-items: flex-start;",abbr:"ai-start"},{name:"align-items: flex-end;",abbr:"ai-end"},{name:"align-items: baseline;",abbr:"ai-baseline"},{name:"align-items: center;",abbr:"ai-center"},{name:"align-items: stretch;",abbr:"ai-stretch"}],alignContent=[{name:"align-content: flex-start;",abbr:"ac-start"},{name:"align-content: flex-end;",abbr:"ac-end"},{name:"align-content: space-around;",abbr:"ac-around"},{name:"align-content: center;",abbr:"ac-center"},{name:"align-content: space-between;",abbr:"ac-between"},{name:"align-content: space-evenly;",abbr:"ac-evenly"}],flexDirection=[{name:"flex-direction: row-reverse;",abbr:"fd-rr"},{name:"flex-direction: row;",abbr:"fd-r"},{name:"flex-direction: column-reverse;",abbr:"fd-cr"},{name:"flex-direction: column;",abbr:"fd-c"}],flexWrap=[{name:"flex-wrap: wrap-reverse;",abbr:"fw-wr"},{name:"flex-wrap: wrap;",abbr:"fw-w"},{name:"flex-wrap: nowrap;",abbr:"fw-nw"}],flex=[{name:"flex: 1 1 0%;",abbr:"f-1"},{name:"flex: 1 1 auto;",abbr:"f-auto"},{name:"flex: 0 1 auto;",abbr:"f-initial"},{name:"flex: none;",abbr:"f-none"}],flexGrow=[{name:"flex-grow: 1;",abbr:"fg-1"},{name:"flex-grow: 0;",abbr:"fg-0"}],flexShrink=[{name:"flex-shrink: 1;",abbr:"fs-1"},{name:"flex-shrink: 0;",abbr:"fs-0"}],justifyItem=[{name:"justify-items: start;",abbr:"ji-start"},{name:"justify-items: end;",abbr:"ji-end"},{name:"justify-items: center;",abbr:"ji-center"},{name:"justify-items: stretch;",abbr:"ji-stretch"}],justifySelf=[{name:"justify-self: auto;",abbr:"js-auto"},{name:"justify-self: start;",abbr:"js-start"},{name:"justify-self: end;",abbr:"js-end"},{name:"justify-self: center;",abbr:"js-center"},{name:"justify-self: stretch;",abbr:"js-stretch"}],placeContent=[{name:"place-content: center;",abbr:"pc-center"},{name:"place-content: start;",abbr:"pc-start"},{name:"place-content: end;",abbr:"pc-end"},{name:"place-content: between;",abbr:"pc-between"},{name:"place-content: around;",abbr:"pc-around"},{name:"place-content: evenly;",abbr:"pc-evenly"},{name:"place-content: stretch;",abbr:"pc-stretch"}],placeItem=[{name:"place-items: start;",abbr:"pi-start"},{name:"place-items: end;",abbr:"pi-end"},{name:"place-items: center;",abbr:"pi-center"},{name:"place-items: stretch;",abbr:"pi-stretch"}],placeSelf=[{name:"place-self: auto;",abbr:"ps-auto"},{name:"place-self: start;",abbr:"ps-start"},{name:"place-self: end;",abbr:"ps-end"},{name:"place-self: center;",abbr:"ps-center"},{name:"place-self: stretch;",abbr:"ps-stretch"}],textAlign=[{name:"text-align: left;",abbr:"ta-left"},{name:"text-align: center;",abbr:"ta-center"},{name:"text-align: right;",abbr:"ta-right"},{name:"text-align: justify;",abbr:"ta-justify"}],FontStyle=[{name:"font-style: italic;",abbr:"italic"},{name:"font-style: normal;",abbr:"n-italic"}],fontWeight=[{name:"font-weight: 100;",abbr:"f-100"},{name:"font-weight: 200;",abbr:"f-200"},{name:"font-weight: 300;",abbr:"f-300"},{name:"font-weight: 400;",abbr:"f-400"},{name:"font-weight: 500;",abbr:"f-500"},{name:"font-weight: 600;",abbr:"f-600"},{name:"font-weight: 700;",abbr:"f-700"},{name:"font-weight: 800;",abbr:"f-800"},{name:"font-weight: 900;",abbr:"f-900"}],style=(fontWeight=[{name:"text-decoration-line: underline;",abbr:"t-underline"},{name:"text-decoration-line: overline;",abbr:"t-overline"},{name:"text-decoration-line: line-through;",abbr:"t-linethrough"},{name:"text-decoration-line: none;",abbr:"t-none"}],document.createElement("style"));function insertCSS(e){style.styleSheet?style.styleSheet.cssText.includes(e)||(style.styleSheet.cssText=style.styleSheet.cssText+e):style.innerHTML.includes(e)||(style.innerHTML=style.innerHTML+e)}style.type="text/css";for(var collection=document.body.getElementsByTagName("*"),i=0;i<collection.length;i++){var className=collection[i].className;if(className.includes("bg-hex-"))insertCSS(`.bg-hex-${neededClass=(neededClass=className.split("bg-hex-")[1]).split(" ")[0]} {background-color: #${neededClass};}`);else if(className.includes("bg-rgb-")){insertCSS(`.bg-rgb-${neededClass=(neededClass=className.split("bg-rgb-")[1]).split(" ")[0]} {background-color: rgb(${neededClass.split("-").join(",")});}`)}else if(className.includes("bg-")){insertCSS(`.bg-${neededClass=(neededClass=className.split("bg-")[1]).split(" ")[0]} {background-color: ${neededClass};}`)}if(className.includes("cl-hex-"))insertCSS(`.cl-hex-${neededClass=(neededClass=className.split("cl-hex-")[1]).split(" ")[0]} {color: #${neededClass};}`);else if(className.includes("cl-rgb-")){insertCSS(`.cl-rgb-${neededClass=(neededClass=className.split("cl-rgb-")[1]).split(" ")[0]} {color: rgb(${neededClass.split("-").join(",")});}`)}else if(className.includes("cl-")){var neededClass;insertCSS(`.cl-${neededClass=(neededClass=className.split("cl-")[1]).split(" ")[0]} {color: ${neededClass};}`)}if(className.includes("mg-"))insertCSS(`.mg-${neededClass=(neededClass=className.split("mg-")[1]).split(" ")[0]} {margin: ${neededClass};}`);if(className.includes("pd-"))insertCSS(`.pd-${neededClass=(neededClass=className.split("pd-")[1]).split(" ")[0]} {padding: ${neededClass};}`);if(className.includes("w-"))neededClass=(neededClass=className.split("w-")[1]).split(" ")[0],isNaN(neededClass)?insertCSS(`.w-${neededClass} {width: ${neededClass};}`):insertCSS(`.w-${neededClass} {width: ${neededClass}%;}`);if(className.includes("h-"))neededClass=(neededClass=className.split("h-")[1]).split(" ")[0],isNaN(neededClass)?insertCSS(`.h-${neededClass} {height: ${neededClass};}`):insertCSS(`.h-${neededClass} {height: ${neededClass}%;}`);if(className.includes("br-"))neededClass=(neededClass=className.split("br-")[1]).split(" ")[0],isNaN(neededClass)?insertCSS(`.br-${neededClass} {border-radius: ${neededClass};}`):insertCSS(`.br-${neededClass} {border-radius: ${neededClass}%;}`);if(textAlign.find(e=>className.includes(e.abbr))&&textAlign.forEach(e=>{className.includes(e.abbr)&&insertCSS(`.${e.abbr} {${e.name}}`)}),textAlign.find(e=>className.includes(e.abbr))&&textAlign.forEach(e=>{className.includes(e.abbr)&&insertCSS(`.${e.abbr} {${e.name}}`)}),displayProps.find(e=>className.includes(e))&&displayProps.forEach(e=>{className.includes(e)&&insertCSS(`.${e} {display: ${e};}`)}),justifyContent.find(e=>className.includes(e.abbr))&&justifyContent.forEach(e=>{className.includes(e.abbr)&&insertCSS(`.${e.abbr} {display: flex; ${e.name}}`)}),alignItems.find(e=>className.includes(e.abbr))&&alignItems.forEach(e=>{className.includes(e.abbr)&&insertCSS(`.${e.abbr} {display: flex; ${e.name}}`)}),alignContent.find(e=>className.includes(e.abbr))&&alignContent.forEach(e=>{className.includes(e.abbr)&&insertCSS(`.${e.abbr} {${e.name}}`)}),flexDirection.find(e=>className.includes(e.abbr))&&flexDirection.forEach(e=>{className.includes(e.abbr)&&insertCSS(`.${e.abbr} {display: flex; ${e.name}}`)}),flexWrap.find(e=>className.includes(e.abbr))&&flexWrap.forEach(e=>{className.includes(e.abbr)&&insertCSS(`.${e.abbr} {display: flex; ${e.name}}`)}),flex.find(e=>className.includes(e.abbr))&&flex.forEach(e=>{className.includes(e.abbr)&&insertCSS(`.${e.abbr} {${e.name}}`)}),flexGrow.find(e=>className.includes(e.abbr))&&flexGrow.forEach(e=>{className.includes(e.abbr)&&insertCSS(`.${e.abbr} {${e.name}}`)}),flexShrink.find(e=>className.includes(e.abbr))&&flexShrink.forEach(e=>{className.includes(e.abbr)&&insertCSS(`.${e.abbr} {${e.name}}`)}),className.includes("order-"))insertCSS(`.order-${neededClass=(neededClass=className.split("order-")[1]).split(" ")[0]} {order: ${neededClass};}`);if(className.includes("fb-"))neededClass=(neededClass=className.split("fb-")[1]).split(" ")[0],isNaN(neededClass)?insertCSS(`.w-${neededClass} {width: ${neededClass};}`):insertCSS(`.w-${neededClass} {width: ${neededClass}%;}`);justifyItem.find(e=>className.includes(e.abbr))&&justifyItem.forEach(e=>{className.includes(e.abbr)&&insertCSS(`.${e.abbr} {${e.name}}`)}),justifySelf.find(e=>className.includes(e.abbr))&&justifySelf.forEach(e=>{className.includes(e.abbr)&&insertCSS(`.${e.abbr} {${e.name}}`)}),placeContent.find(e=>className.includes(e.abbr))&&placeContent.forEach(e=>{className.includes(e.abbr)&&insertCSS(`.${e.abbr} {${e.name}}`)}),placeItem.find(e=>className.includes(e.abbr))&&placeItem.forEach(e=>{className.includes(e.abbr)&&insertCSS(`.${e.abbr} {${e.name}}`)}),placeSelf.find(e=>className.includes(e.abbr))&&placeSelf.forEach(e=>{className.includes(e.abbr)&&insertCSS(`.${e.abbr} {${e.name}}`)})}document.getElementsByTagName("head")[0].appendChild(style),console.log("Classy CSS added successfully"),document.onmousemove=function(e){var a=e.pageX,s=e.pageY;console.log(a),document.querySelector(".mouse-pointer").style.display="block",document.querySelector(".mouse-pointer").style.marginTop=s-15+"px",document.querySelector(".mouse-pointer").style.marginLeft=a-20+"px"},document.onmouseleave=function(e){document.querySelector(".mouse-pointer").style.display="none"};