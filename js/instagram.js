var userFeed = new Instafeed({
  get: "user",
  userId: "6205938688",
  clientId: "2295525104",
  accessToken: "f+9xGQXp4wlH+yScpXSIEHdgVJ4jxDEvkJTRsceuYZt+yc+5PSfTIJZYi0Dm+XtB",
  resolution: "standard_resolution",
  template: `<div class="col-md-3 "> <img src="{{image}}" class="instaPic"> </div>  `,
  sortBy: "most-recent",
  limit: 4,
  links: false
});
userFeed.run();

// userID:2295525104;
