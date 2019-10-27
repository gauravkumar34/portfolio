var userFeed = new Instafeed({
  get: "user",
  userId: "2295525104",
  clientId: "924f677fa3854436947ab4372ffa688d",
  accessToken: "f+9xGQXp4wlH+yScpXSIEHdgVJ4jxDEvkJTRsceuYZt+yc+5PSfTIJZYi0Dm+XtB",
  resolution: "standard_resolution",
  template: `<div class="col-md-3 "> <img src="{{image}}" class="instaPic"> </div>  `,
  sortBy: "most-recent",
  limit: 4,
  links: false
});
userFeed.run();

// userID:2295525104;
