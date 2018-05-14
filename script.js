$(document).ready(function() {
  $('#getStats').click(function() {
    $.ajax({
      url: 'https://stats.nba.com/stats/scoreboard/?GameDate=02/14/2015&LeagueID=00&DayOffset=0',
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        $('#showStats').text("success");
      },
      error: function() {
        $('#showStats').text("There was an error processing your request. Please try again.")
      }
    });
  });
});
