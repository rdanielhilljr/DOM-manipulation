$(document).ready(function() {
  $("button#cat").click(function() {
    $("ul#meow").prepend("<li>Meow!</li>");
    $("ul#woof").prepend("<li>Woof!");

    $("ul#meow").children("li").first().click(function() {
    $(this).remove();
    });
    $("ul#woof").children("li").first().click(function() {
    $(this).remove();
    });
  });

  $("button#dog").click(function() {
    $("ul#woof").prepend("<li>Woof!</li>");
    $("ul#meow").prepend("<li>Meow!</li>");

    $("ul#meow").children("li").first().click(function() {
    $(this).remove();
    });
    $("ul#woof").children("li").first().click(function() {
    $(this).remove();
    });
  });
});
