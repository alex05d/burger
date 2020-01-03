
$(function () {
    $(".change-state").on("click", function (event) {
        var id = $(this).data("id");
        var newState = $(this).data("newstate");

        var newDevouredState = {
            devoured: newState
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function () {
                console.log("changed state to", newState);
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burger").val().trim()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("create new burger");

                location.reload();
            }
        );
    });


})