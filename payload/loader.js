
var obj = JSON.parse('{"partners": ["Dell", "Microsoft", "Solidatus"], "bmctitle":["Demo JSON BMC"], "activities":["Do some stuff", "Do more important stuff", "Other vital things", "Tea and medals"], "propositions":["Because thing", "Because other thing", "Just do it please"], "relationships":["stakeholder 1", "stakeholder 2", "stakeholder 3", "stakeholder 4", "stakeholder 5"], "segments":["Customer Segment 1", "Customer Segment 2", "Customer Segment 3"], "resources":["First resource", "Second resource", "Third resource", "4th Resource", "5th very important resource", "Last resource"],  "channels":["Channel 1", "Channel 2", "Channel 3"],  "structures":["first cost structure", "second cost structure"], "streams":["Revenue Stream", "Another Revenue Stream", "So MUCH revenue", "Mother of God...the ABR!"]}');

document.getElementById("bmctitle").innerHTML = obj.bmctitle;
buildList("partners_ul", obj.partners);

 //   document.getElementById("activities_ul").innerHTML = obj.activities;
 //   document.getElementById("propositions_ul").innerHTML = obj.propositions;
 //   document.getElementById("relationships_ul").innerHTML = obj.relationships;
 //   document.getElementById("segments_ul").innerHTML = obj.segments;
 //   document.getElementById("resources_ul").innerHTML = obj.resources;
 //   document.getElementById("channels_ul").innerHTML = obj.channels;
 //   document.getElementById("structures_ul").innerHTML = obj.structures;
 //   document.getElementById("streams_ul").innerHTML = obj.streams;

function buildList(parentElem, arrstr){
    
    var listElement = document.getElementById(parentElem);

    listElement.innerHTML = arrstr;

    var res = arrstr.split(",");
    var i;
    for (i = 0; i < res.length; i++) {
        alert(trim(res[i]));
        var newLI = document.createElement('li');
        newLI.innerHTML = res[i];
        //listElement.appendChild(newLI);
    }
}

 //   for(var i in jsonObject){//iterate through the array or object
  //      //insert the next child into the list as a <li>
   //     var newLI = document.createElement('li');
//
 //       alert(jsonObject[i]);
//
 //       if  (jsonObject[i] instanceof Array){
  //          newLI.innerHTML=i+": ARRAY";
   //         newLI.className="arrayOrObject"; //add a class tag so we can style differently
    //    }
     //   else if (jsonObject[i] instanceof Object){
      //      newLI.innerHTML=i+": OBJECT";
       //     newLI.className="arrayOrObject"; //add a class tag so we can style differently
        //}
 //       else
  //          listElement = document.getElementById(jsonObject[i]);
   //         newLI.innerHTML=jsonObject[i];
    //        listElement.appendChild(newLI);
     //       //insert a <ul> for nested nodes 
      //  if  (jsonObject[i] instanceof Array || jsonObject[i] instanceof Object){
 //           var newUL = document.createElement('ul');
//            listElement = document.getElementById(jsonObject[i]);
 //           alert(jsonObject[i]);
//            newUL.innerHTML=i;
 //           listElement.appendChild(newUL);
            //makeList(jsonObject[i],newUL);
 //      }
 //   }
//}

