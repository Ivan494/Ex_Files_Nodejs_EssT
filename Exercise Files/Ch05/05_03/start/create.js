var fs = require("fs");

var md = `

Sample Markdown Title
=====================

Sample subtitle
===============

*1
*2
*3

`;

fs.writeFile("sample.md",md.trim(),function(){
   console.log("File Created"); 
});