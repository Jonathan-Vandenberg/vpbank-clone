import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
import RepeatIcon from "@mui/icons-material/Repeat";
import Typography from "@mui/material/Typography";
import HouseholdDropdown from "./HouseholdDropdown";
import { Card } from "@mui/material";
import adImage from "/Users/jonathanvandenberg/2022/VPBank/public/ad4.png";
import Image from "next/image";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

export default function CustomizedTimeline() {
  return (
    <div className="container p-12">
      <Timeline position="right" className="ml-0">
        <TimelineItem className="w-1/2">
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="left"
            variant="body2"
            color="text.secondary"
          >
            <div className="ml-0 w-auto p-6">
              <div className="text-color-green ml-0 text-5xl font-bold">23</div>
              <div className="font-bold text-slate-400">T6 2022</div>
            </div>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector
              style={{ backgroundColor: "rgb(234,234,234)", width: "2px" }}
            />
            <TimelineDot color="success" />
            <TimelineConnector
              style={{ backgroundColor: "rgb(234,234,234)", width: "2px" }}
            />
          </TimelineSeparator>
          <TimelineContent className="w-80 p-12">
            <Card className="h-54 w-80">
              <Image
                src={adImage}
                width={300}
                height={300}
                alt="img"
                layout="responsive"
                className="rounded-t-lg object-cover"
              />
              <h3 className="p-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam{" "}
              </h3>
            </Card>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
