import SocialLogo from "./SocialLogo";

const AboutTextBlock1: string =
  "It's a great opportunity to network, meet new people, and build your connnections";
const AboutTextBlock2: string =
  "Whether you are starting out or finishing your degree, RowdyHacks has something for everyone";
const AboutTextBlock3: string =
  "We believe that inclusion and diversity bring forth the most creative ideas, so we welcome all disciplines and backgrounds";

const MissionTitle: string = "TRACKS";

const MissionText: Array<string> = [
  "We have three different tracks at RowdyHacks 2020 you can tailor your project towards.",
  "For our hackers who create projects that mainly focus on the topics of Cybersecurity.",
  "First time coders with no technical experience have the opportunity to learn coding basics and be able to compete against other first time hackers for prizes. This track is specifically for people who have never coded before!",
  "If you already have an idea in mind and it doesn't fall under our Cyber or Learners Tracks, our General Track is for you!"
];

const FAQQuestions: Array<string> = [
  "What is a hackathon?",
  "How much does it cost to participate?",
  "What if I don't know how to code?",
  "How big are the teams?",
  "What should my project be?",
  "Can I work on previous projects?",
  "Will there be travel reimbursements?",
  "What if I'm not a UTSA student?",
  "What should I bring?",
  "What actions will be taking in regards to coronavirus(COVID-19)?",
  "What if this FAQ didn't answer my question?"
];

const FAQAnswers: Array<any> = [
  "A hackathon is a 24 hour event where teams collaborate on a project to create social impact, satisfy company challenges, and innovate new solutions. At RowdyHacks, mentors will be willing to assist you on your quest to creating your project.",
  "RowdyHacks is absolutely FREE thanks to our awesome partners. You don't have to worry about a thing -- we'll provide t-shirts, swag, and prizes.",
  "No worries! RowdyHacks is for everyone from all coding and non-coding backgrounds! We will have plenty of mentors and peers to help you learn throughout the event.",
  "Teams can consist of up to 4 students! We encourage hackers to participate as part of a team. Don't have a team? No worries, we will have an opportunity before the event for you to meet other hackers and form teams!",
  "Anything! You can make a new social media website, a simple weather app, a sentimental analysis tool for tweets...anything in your wildest imagination, you can create. Your team can come prepared with an idea or come up with one on the spot.",
  "No, all projects must be built from scratch. However, you can start brainstorming your ideas prior to the event. Any team found working on previous projects will be automatically disqualified.",
  "RowdyHacks will be completely online, so RowdyHacks will not be providing any sort of reimbursement for traveling.",
  "No problem! RowdyHacks is open to ANY college/university student over 18 years old. We're so excited to see students from all over collaborating and innovating together at this year's event.",
  "Any hardware you plan on using for the project -- your laptop, charger, portable mouse, phone, Raspberry Pi, VR headset, robots, etc. You might also want to bring a change of clothes and toiletries.",
  "We will be moving everything to virtual events. Check-in will also only be conducted online. For more information please go to https://www.rowdyhacks.io/updates",
  "Please e-mail team@rowdyhacks.org. We will get back to you and give you the best support."
];

const LocationText: string =
  "RowdyHacks will be held completely online. All check-in will be virtual from 8 AM to 12 PM on March 28th.";

const SocialMediaText: string =
  "For live updates and announcements, follow us on social media!";

const FooterText: string =
  "RowdyHacks is hosted by Roadrunners from UTSA. If you're interested in becoming a partner, please e-mail ";

const socialLogos: Array<SocialLogo> = [
  {
    link: "https://twitter.com/rowdyhacks",
    src: "twitter",
    altName: "Twitter"
  },
  {
    link: "https://facebook.com/rowdyhacks",
    src: "facebook",
    altName: "Facebook"
  },
  {
    link: "https://www.linkedin.com/company/51637167",
    src: "linkedin",
    altName: "Linkedin"
  },
  {
    link: "https://www.instagram.com/rowdyhacks",
    src: "instagram",
    altName: "Instagram"
  }
];

const UpdatesConstants = {
  updates: [
    {
      title: "Coronavirus Update",
      date: "March 15, 2020",
      message: [
        "RowdyHacks 2020 is in 13 days! 🎉 The health and safety of all those involved in RowdyHacks is our number one priority, and any decision our board makes will put that first and foremost. Due to the Coronavirus COVID-19, we have decided to move RowdyHacks online. This means RowdyHacks will be virtual! All workshops, ceremonies, and activities will still be available through streaming and recordings. All prizes and swag will be shipped out as well! 🎁📦",
        "RowdyHacks swag is on the way and it is a necessity that you get all the amazing swag (shirts, mugs, stickers, socks, snacks, +more!). If you are local to San Antonio, TX, we will be on UTSA Campus in the HEB Student Union Galleria on Saturday March 28th from 8 AM - 12 PM giving out all the RowdyHacks swag you could ever want. If you're not local, please update your hacker application with a valid mailing address so we can send you all your goodies. "
      ]
    },
    {
      title: "New Coronavirus Update",
      date: "March 20, 2020",
      message: [
        "RowdyHacks 2020 is in 8 days! 🎉 The health and safety of all those involved in RowdyHacks is our number one priority, and any decision our board makes will put that first and foremost. All check-in will now be conducted solely online! There will be no in person pick up for getting any swag."
      ]
    }
  ]
};

const ScheduleConstants = {
  days: [
    {
      date: "March 28th",
      dayOfWeek: "Saturday",
      events: [
        {
          title: "Check-in Begins",
          time: "8:00 AM CDT",
          location: "Discord"
        },
        {
          title: "Virtual Tabling",
          time: "9:00 AM CDT",
          location: "Zoom (Sign up for time slots on Discord)"
        },
        {
          title: "Opening Ceremony",
          time: "11:00 AM CDT",
          location: "Youtube"
        },
        {
          title: "Hacking Begins",
          time: "12:00 PM CDT",
          location: ""
        },
        {
          title: "Virtual Tabling Continues",
          time: "12:00 PM CDT",
          location: "Zoom (Sign up for time slots on Discord)"
        },
        {
          title: "Google Workshop: Google Geo",
          time: "1:30 PM CDT",
          location: "Google Hangouts"
        },
        {
          title: "Learners Workshop #1: Git/Github",
          time: "1:30 PM CDT",
          location: "Zoom (Archives on Youtube)"
        },
        {
          title:
            "TechData Workshop: Tools to Increase Security Posture from IBM",
          time: "1:30 PM CDT",
          location: "Zoom (Archives will be on Youtube)"
        },
        {
          title: "Google Workshop: Open-source API",
          time: "2:30 PM CDT",
          location: "Google Hangouts"
        },
        {
          title: "Learners Workshop #2: Intro to Java",
          time: "3:00 PM CDT",
          location: "Zoom (Archives on Youtube)"
        },
        {
          title: "MLH Side Event: CTF",
          time: "4:00 PM CDT",
          location: "Discord"
        },
        {
          title: "Learners Workshop #3: Intro to Web Development",
          time: "4:30 PM CDT",
          location: "Zoom (Archives on Youtube)"
        },
        {
          title: "Loteria (Mexican Bingo) Activity",
          time: "5:00 PM CDT",
          location: "Discord"
        },
        {
          title: " Q&A with the Father of Python Guido van Rossum",
          time: "6:00 PM CDT",
          location: "Twitch Link: twitch.tv/twilio"
        },
        {
          title: "Learners Workshop #4: The Importance of UI/UX",
          time: "7:30 PM CDT",
          location: "Zoom (Archives on Youtube)"
        },
        {
          title: "Loteria (Mexican Bingo) Activity",
          time: "8:30 PM CDT",
          location: "Discord"
        },
        {
          title: "MLH Side Event: Slideshow Karaoke",
          time: "9:00 PM CDT",
          location: "Discord"
        }
      ]
    },
    {
      date: "March 29th",
      dayOfWeek: "Sunday",
      events: [
        {
          title: "MS Painting with Bob Ross",
          time: "12:30 AM CDT",
          location: "Discord"
        },
        {
          title: "Loteria (Mexican Bingo) Activity",
          time: "8:00 AM CDT",
          location: "Discord"
        },
        {
          title: "Submissions Due",
          time: "12:00 PM CDT",
          location: "Devpost"
        },
        {
          title: "Hacking Ends and Judging Begins",
          time: "1:00 PM CDT",
          location: "Devpost"
        },
        {
          title: "Closing Ceremony",
          time: "3:00 PM CDT",
          location: "Youtube"
        },
        {
          title: "Event Ends",
          time: "4:00 PM CDT",
          location: ""
        }
      ]
    }
  ]
};

export {
  AboutTextBlock1,
  AboutTextBlock2,
  AboutTextBlock3,
  MissionTitle,
  MissionText,
  FAQQuestions,
  FAQAnswers,
  LocationText,
  SocialMediaText,
  FooterText,
  socialLogos,
  UpdatesConstants,
  ScheduleConstants
};
