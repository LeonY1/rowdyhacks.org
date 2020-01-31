import AnimationInput from "./AnimationInput";

const animationObjects: Array<AnimationInput> = [
  {
    imageSrc: "yellowBoat",
    direction: "right",
    startTime: 1000,
    endTime: 27000,
    top: 540,
    margin: -250,
    width: 210
  },

  {
    imageSrc: "duck4",
    direction: "left",
    startTime: 1000,
    endTime: 21000,
    top: 620,
    margin: -100,
    width: 40
  },
  {
    imageSrc: "duck5",
    direction: "left",
    startTime: 21000,
    endTime: 41000,
    top: 620,
    margin: -100,
    width: 40
  },
  {
    imageSrc: "orangeBoat",
    direction: "left",
    startTime: 14000,
    endTime: 27000,
    top: 610,
    margin: -250,
    width: 250
  },
  {
    imageSrc: "blueBoat",
    direction: "left",
    startTime: 1000,
    endTime: 13000,
    top: 610,
    margin: -250,
    width: 250
  },
  {
    imageSrc: "duck1",
    direction: "right",
    startTime: 18000,
    endTime: 34000,
    top: 700,
    margin: -100,
    width: 55
  },
  {
    imageSrc: "duck2",
    direction: "right",
    startTime: 13000,
    endTime: 33000,
    top: 680,
    margin: -100,
    width: 55
  },
  {
    imageSrc: "duck3",
    direction: "right",
    startTime: 5000,
    endTime: 25000,
    top: 700,
    margin: -100,
    width: 55
  }
];

const stillObjects = [
  {
    imageSrc: "human-1",
    direction: "left",
    theme: {
      top: 594,
      dist: 169,
      width: 160
    }
  },
  {
    imageSrc: "human-2",
    direction: "right",
    theme: {
      top: 623,
      dist: 444,
      width: 154
    }
  },
  {
    imageSrc: "human-3",
    direction: "left",
    theme: {
      top: 616,
      dist: 833,
      width: 170
    }
  },
  {
    imageSrc: "human-4",
    direction: "left",
    theme: {
      top: 622,
      dist: 1170,
      width: 148
    }
  },
  {
    imageSrc: "human-5",
    direction: "right",
    theme: {
      top: 616,
      dist: 1498,
      width: 140
    }
  }
];

export { animationObjects, stillObjects };
