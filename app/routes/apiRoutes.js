var friends = require("../data/friends");

module.exports = function (app) {
    // Loads friends.js as JSON
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        // console.log(req.body.match);

        // Display user details (name, photo, match)
        var user = req.body;

        // parseInt for match
        for (var i = 0; i < user.match.length; i++) {
            user.match[i] = parseInt(user.match[i]);
        }
        
        var bestFriendIndex = 0;
        var minimumDifference = 40;

        for(var i = 0; i < friends.length; i++) {
          var totalDifference = 0;
          for(var j = 0; j < friends[i].match.length; j++) {
            var difference = Math.abs(user.match[j] - friends[i].match[j]);
            totalDifference += difference;
          }
    
          if(totalDifference < minimumDifference) {
            bestFriendIndex = i;
            minimumDifference = totalDifference;
          }
        }
    
        // Push user to friends array
        friends.push(user);
    
        // send back to browser the best friend match
        res.json(friends[bestFriendIndex]);
      });
    };