jQuery(document).ready(function($) {
  $(function() {
    $(".item")
      .slice(0, 2)
      .show();
    $(".btn").on("click", function(e) {
      e.preventDefault();
      $(".item:hidden")
        .slice(0, 2)
        .slideDown();
    });
  });
});
