import AnimationInput from "./Interfaces/AnimationInput";

const animationObjects: Array<AnimationInput> = [
  {
    imageSrc: "yellowBoat",
    direction: "right",
    startTime: 1000,
    endTime: 27000,
    top: 520,
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
    top: 580,
    margin: -250,
    width: 250
  },
  {
    imageSrc: "violin_ducky",
    direction: "left",
    startTime: 14000,
    endTime: 27000,
    top: 580,
    margin: -235,
    width: 40
  },
  {
    imageSrc: "blueBoat",
    direction: "left",
    startTime: 1000,
    endTime: 13000,
    top: 580,
    margin: -250,
    width: 250
  },
  {
    imageSrc: "duck1",
    direction: "right",
    startTime: 18000,
    endTime: 34000,
    top: 660,
    margin: -100,
    width: 55
  },
  {
    imageSrc: "duck2",
    direction: "right",
    startTime: 13000,
    endTime: 33000,
    top: 640,
    margin: -100,
    width: 55
  },
  {
    imageSrc: "duck3",
    direction: "right",
    startTime: 5000,
    endTime: 25000,
    top: 660,
    margin: -100,
    width: 55
  }
];

const stillObjects = [
  {
    imageSrc: "human-1",
    direction: "left",
    top: 620,
    dist: 169,
    margin: 0,
    width: 160,
    startTime: 0,
    endTime: 0
  },
  {
    imageSrc: "human-2",
    direction: "right",
    top: 583,
    dist: 554,
    margin: 0,
    width: 154,
    startTime: 0,
    endTime: 0
  },
  {
    imageSrc: "human-3",
    direction: "left",
    top: 609,
    dist: 833,
    margin: 0,
    width: 170,
    startTime: 0,
    endTime: 0
  },
  {
    imageSrc: "human-4",
    direction: "left",
    top: 582,
    dist: 1170,
    margin: 0,
    width: 148,
    startTime: 0,
    endTime: 0
  },
  {
    imageSrc: "human-5",
    direction: "right",
    top: 670,
    dist: 1560,
    margin: 0,
    width: 140,
    startTime: 0,
    endTime: 0
  }
];

export { animationObjects, stillObjects };
