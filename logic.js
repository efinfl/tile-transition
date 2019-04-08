// sets all the classNames on load of the tile elements
document.addEventListener("click", function(e) {
  console.log(event.target.parentNode);

  // Creates an array of the tile elements in the the container to loop through
  var tileArray = document.getElementById("all-tiles").children;
  console.log(tileArray);

  var clickedParent = event.target.parentNode;
  console.log(clickedParent)

  // Check to sse if the clicked element is not something other than a tile element
  // If so, then continue...
  if (
    event.target.className !== "container" &&
    event.target !== HTMLBodyElement
  ) {
    console.log("Not a container");

    //  Sets the tiles to untransformed class by iterating through
    //  all the tile elements setting it's class according to its index position
    for (var i = 0; i < tileArray.length; i++) {
      tileArray[i].className = "tile";
      tileArray[5].className = "tile-6";
      tileArray[11].className = "tile-12";
      tileArray[17].className = "tile-18";
      tileArray[18].className = "tile-19";
      tileArray[19].className = "tile-20";
      tileArray[20].className = "tile-21";
      // tileArray[21].className = "tile-22";
    }
    // If the target className is one of the following, set it to the
    // specified className. Specific classes are assigned to the outer
    // right an left elements in the flex-box grid for proper alignment
    if (clickedParent.className == "tile") {
      clickedParent.className = "tile-transform";
    } else if (clickedParent.className == "tile-6") {
      clickedParent.className = "tile-6-transform";
    } else if (clickedParent.className == "tile-12") {
      clickedParent.className = "tile-12-transform";
    } else if (clickedParent.className == "tile-18") {
      clickedParent.className = "tile-18-transform";
    } else if (clickedParent.className == "tile-19") {
      clickedParent.className = "tile-19-transform";
    } else if (clickedParent.className == "tile-20") {
      clickedParent.className = "tile-20-transform";
    } else if (clickedParent.className == "tile-21") {
      clickedParent.className = "tile-21-transform";
    } else if (clickedParent.className == "tile-22") {
      clickedParent.className = "tile-22-transform";
    }
    return;
  }
  return;
});
