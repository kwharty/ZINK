$(document).ready(function () {

    $("#dropdownMenuButton").on("click", function () {

        var team = "los angeles rams";
        var queryURL = "https://api.seatgeek.com/2/events?q=" + team + "&client_id=MTMzMzkzNDV8MTUzODAxNTg1MC43OA&client_secret=5dfdb6782fea77557fbde3d42ac129fffd58b1d8ad9752261c0646724aaa7cce";


        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            console.log(response.events[0].short_title);

            for (var i = 0; i < 3; i++) {

                var teamsPlaying = $("<td>").text(response.events[i].short_title);
                var tickets = $("<td>").text("$" + response.events[i].stats.lowest_price);
                console.log(response.events[i].stats.lowest_price);
                var tableButton = $("<button>").text("Go!");
                tableButton.addClass("link-button");
                var ticketLink = $("<a href=" + response.events[i].url + ">");
                ticketLink.html(tableButton);
                //tableButton.append(ticketLink);
                console.log(response.events[i].url);

                //var linkTd = $("<td>").append(tableButton);
                var linkTd = $("<td>").append(ticketLink);
                var newRow = $("<tr>").append(teamsPlaying, tickets, linkTd)

                $("#event-table").append(newRow);
            }
        });
    });


    //get event title or game title "chargers vs








});

