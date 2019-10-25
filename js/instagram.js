var userFeed = new Instafeed({
  get: "user",
  userId: "6205938688",
  clientId: "924f677fa3854436947ab4372ffa688d",
  accessToken: "6205938688.1677ed0.0cce5379b7d34511841a18952f731396",
  resolution: "standard_resolution",
  template: `<div class="col-md-3 "> <img src="{{image}}" class="instaPic"> </div>  `,
  sortBy: "most-recent",
  limit: 4,
  links: false
});
userFeed.run();

// userID:2295525104;
