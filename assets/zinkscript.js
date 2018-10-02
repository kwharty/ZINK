$(document).ready(function() {
    //alert("Linked!")
    
var teamList = [

 {
    name: "Arizona Cardinals",
    abbr: "ari",
},

{
    name: "Carolina Panthers",
    abbr: "car",
}];

for (var i = 0; i < teamList.length; i++) {
    //<a class="dropdown-item" href="#">Action</a>  what i'm making 
    var newTeamLink = $("<a>");
    newTeamLink.attr("data-name", teamList[i].name);
    newTeamLink.attr("data-abr", teamList[i].abbr);
    newTeamLink.addClass("dropLink");
    console.log(newTeamLink[0]);

    newTeamLink.text(teamList[i].name);
    $(".dropdown-item").append(newTeamLink) ;

}

//console.log(teamList[1].name);





    
});

