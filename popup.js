let dangerousSites = ['scetchysite','reddit','craiglist','quora']
let halfSites = ['google','twitter','facebook','instagram', 'webkinz','wikipedia','yelp','imbd','indeed','espn',
  'fb','gamepedia','homedepot',]
let userSites = []



function removeElement() {
  document.getElementById("feedback").style.display = "none";
}
function isSafe(site){
  document.getElementById("safety").innerHTML = site + " is safe for all ages!";
  document.getElementById("safety").style.color = "green";
  document.getElementById("disclaimer").innerHTML = "Note: If you put an invalid URL, then it will be returned as safe. Make sure your format is www.example.com ."
  document.getElementById("contest").style.display = "block";
}
function notSafe(URL,nameOfSite){
  if (dangerousSites.includes(URL)){
    document.getElementById("safety").innerHTML = nameOfSite + " is not secure for kids. Please refrain from using it."
    document.getElementById("safety").style.color = "red";
  }
  else{
    document.getElementById("safety").innerHTML = nameOfSite + " is secure, but contains data tracking. For any minors, please exercise caution while using."
    document.getElementById("safety").style.color = "darkgoldenrod";
  }
   
}
function form() {
  
  /*Generating text fields dynamically in the same form itself*/
  for(var i=0;i<no;i++) {
      var textfield = document.createElement("input");
      textfield.type = "text";
      textfield.value = "";
      document.getElementById('form').appendChild(textfield);
  }
}
function clear(){
  
}
function contest(){
  var nameOfContestedSite = document.getElementById("safety").innerHTML
  var contestedList = nameOfContestedSite.split(" ")
  contestedList = contestedList[0]
  halfSites.push("www."+contestedList+".com")
  document.getElementById("safety").innerHTML = "The site has been added temporarily. Go to https://docs.google.com/forms/d/e/1FAIpQLScb-xNNnscgP8AvadvPDBnzdn6ZRaNVnVjs_uxlStMPpFouiA/viewform to make it permanent."
}

function requestSite(){
  let userSite = prompt(("What website would you like to check?"));
  const userArray = userSite.split(".")
    if (userArray.length == 3 && userArray[0] == 'www' && (userArray[2] == 'com'  || userArray[2] == 'org' || userArray[2] == 'gov')){
    
      const siteName = userArray[1]
      if (dangerousSites.includes(userArray[1])){
        notSafe(userSite,siteName);
    
      }
      else if (halfSites.includes(userArray[1])){
        notSafe(userSite,siteName)
      }
      else{
        
        isSafe(siteName);
      }
      document.getElementById("feedback").style.display = "block";
      document.getElementById("feedback").style.color = "blue";
      document.getElementById("")
    }
    else{
       document.getElementById("safety").innerHTML = "Please use a valid URL in the format www.exampleurl.com"
    }
}