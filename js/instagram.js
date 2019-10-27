  
var userFeed = new Instafeed({
  get: "user",
  //userId: "6205938688",
  userId: "2295525104",
  clientId: "924f677fa3854436947ab4372ffa688d",
  //accessToken: "6205938688.1677ed0.0cce5379b7d34511841a18952f731396",
  accessToken: "2295525104.d90570a.b250cde79e0a42ea9baf1a2f64361ac9",
  resolution: "standard_resolution",
  template: `<div class="col-md-3 "> <img src="{{image}}" class="instaPic"> </div>  `,
  sortBy: "most-recent",
  limit: 4,
  links: false
});
userFeed.run();

// userID:2295525104;
