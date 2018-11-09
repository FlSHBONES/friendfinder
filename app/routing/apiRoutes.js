// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Friend = require("../data/friends.js");




// Routes
// =============================================================
module.exports = function(app) {
  // Search for Specific Friend (or all Friends) then provides JSON
  app.get("/api/friends", function(req, res) {
    return res.json(Friend.Friends);

  });

  // If a user sends data to add a new Friend...
  app.post("/api/friends", function(req, res) {
    // Take the request...
    var newfriend = req.body;

    // Using a RegEx Pattern to remove spaces from Friend.name
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    var newfriend = newfriend.name.replace(/\s+/g, "").toLowerCase();

    // Then add the Friend to the list
    Friend.create({
        Name: Name,
        q1: Friend.q1,
        q2: Friend.q2,
        q3: Friend.q3,
        q4: Friend.q4,
        q5: Friend.q5,
        q6: Friend.q6,
        q7: Friend.q7,
        q8: Friend.q8,
        q9: Friend.q9,
        q10: Friend.q10
    });

    console.log("Welcome New User:\n---------------------------------")
    console.log(newfriend);

   
      var lowestTotalDifference = null;
      var bestMatch = null;
      for( var i = 0; i < Friend.Friends.length; i++ ) {
          var currentFriend = Friends[i];
          var currentFriendScores = currentFriend.scores;
          var totalDifference = 0;
          for( var j = 0; j < currentFriendScores.length; j++){
                 
                  var difference = currentFriendScores[j] - newfriend['scores[]'][j];
                  totalDifference += Math.abs(difference);
          }
          if (totalDifference < lowestTotalDifference || lowestTotalDifference === null){
              lowestTotalDifference = totalDifference
              bestMatch = currentFriend
          }
      }
   
      res.send(bestMatch);
 

    Friends.push(newfriend);
  
    res.json(newfriend);
    res.json(bestMatch);
    
  });

    res.status(204).end();
  };


  module.exports = bestMatch;