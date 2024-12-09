//event handling script, makes photos enlarge when hovered over
$(document).ready(function () {
    // Enlarge catalogue items on hover
    $("img").hover(
        function () {
            $(this).css("transform", "scale(2)");
        },
        function () {
            $(this).css("transform", "scale(2)");
        }
    );
      //jquery ui handling
     $("p").tooltip(); // This selects all <p> elements and enables the tooltip on them

    // Additional configuration for the tooltip can be added if needed
    // Example: You can change the tooltip's position, animation, or delay
    $("p").tooltip({
        show: { effect: "slideDown", duration: 400 }, // Animation for showing tooltip
        hide: { effect: "explode", duration: 200 },  // Animation for hiding tooltip
        position: { my: "center bottom", at: "center top+10" }  // Position of the tooltip
    });
    $("h2").tooltip(); // This selects all <p> elements and enables the tooltip on them

    // Additional configuration for the tooltip can be added if needed
    // Example: You can change the tooltip's position, animation, or delay
    $("p").tooltip({
        show: { effect: "slideDown", duration: 400 }, // Animation for showing tooltip
        hide: { effect: "explode", duration: 200 },  // Animation for hiding tooltip
        position: { my: "center bottom", at: "center top+10" }  // Position of the tooltip
    });







    











    // If you want to target specific elements, use a more specific selector
    // Example: Tooltip for elements with class 'tooltip-item'
     

