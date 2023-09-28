import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { CalendarIcon } from "@heroicons/react/24/outline";

const TimelineMLBB = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          background: "transparent",
          color: "#fff",
        }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="2016 - Early Release"
        iconStyle={{ background: "#fff", color: "#000" }}
        icon={<CalendarIcon />}
      >
        <p>
          Mobile Legends: Bang Bang, developed by Moonton, was released in 2016.
          The game is a Multiplayer Online Battle Arena (MOBA) specifically
          designed for mobile devices.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2017 - Rising Popularity"
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        iconStyle={{ background: "#fff", color: "#000" }}
        icon={<CalendarIcon />}
      >
        <p>
          Mobile Legends quickly gained popularity among mobile gamers
          worldwide. The game offers gameplay similar to popular PC MOBA games
          like Dota 2 and League of Legends.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2018 - Professional Tournaments"
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        iconStyle={{ background: "#fff", color: "#000" }}
        icon={<CalendarIcon />}
      >
        <p>
          In 2018, Mobile Legends became one of the highly competitive mobile
          games, with numerous professional tournaments held across the globe.
          The game boasts a large and active player community.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2019 - Ongoing Development"
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        iconStyle={{ background: "#fff", color: "#000" }}
        icon={<CalendarIcon />}
      >
        <p>
          Moonton continued to develop and update Mobile Legends with the
          addition of new heroes, gameplay enhancements, and special events. The
          game also maintained a loyal player base and a thriving community.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2021 - Announcement of Mobile Legends: Bang Bang 2.0"
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        iconStyle={{ background: "#fff", color: "#000" }}
        icon={<CalendarIcon />}
      >
        <p>
          In 2021, Moonton announced Mobile Legends: Bang Bang 2.0, which
          promised significant changes to the game, including improved graphics
          and gameplay mechanics.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2022-2023 (Information beyond September 2021 is not available)"
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        iconStyle={{ background: "#fff", color: "#000" }}
        icon={<CalendarIcon />}
      >
        <p>
          Unfortunately, I don't have information about Mobile Legends'
          developments beyond September 2021 due to my knowledge limitations.
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default TimelineMLBB;
