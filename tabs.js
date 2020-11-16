//tabs

$(document).ready(function() {
    $(".nav-link").click(showTab);
    $("button").click(updateStyles);

    function updateStyles()
    {
        $("body").css("background-color", "pink");
    }

    function showTab(event)
    {
        event.preventDefault();
        $(this).tab("show");
    }
});
