AFRAME.registerComponent("game-play", {
  schema: {
    elementId: { type: "string", default: "#ring1" },
  },
  collision: () => {
    console.log("inside collision1");
    //Get the terrain element
    const element = document.querySelector(this.data.elementId);
    console.log("inside collision");
    //creating the bird model entity
    element.addEventListener("collide", (e) => {
      if (this.data.elementId.includes("#ring")) {
        console.log(this.data.elementId + " collided");
      } else if (this.data.elementId.includes("#bird")) {
        console.log(this.data.elementId + " collided");
      }
    });
  },
  update: () => {
    console.log("inside update");
    console.log(this.data.elementId);
    this.collision(this.data.elementId);
  },
});
