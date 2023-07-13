import './timeline.css'
import { ReactComponent as WorkIcon } from "./work.svg";
import { ReactComponent as SchoolIcon } from "./school.svg";

import timelineElements from "./timelineElements";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

function Timeline() {
  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#f9c74f" };

  return (
    <div className="w-full bg-secondary" id="exp">
    <div className='max-w-[1240px] mx-auto text-center bg-secondary text-black'>
      <h1 className="text-[40px] text-white">Timeline</h1>
      <VerticalTimeline>
        {timelineElements.map((element) => {
          let isWorkIcon = element.icon === "work";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";
          
          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
              className="text-start"
            >
              
              <h3 className="font-bold text-[20px]">
                {element.title}
              </h3>
              <h5 className="text-slate-500">
                {element.location}
              </h5>
              <p className="my-[20px]">{element.description}</p>
              <div className='my-[20px]'>
              {showButton && (
                <a
                  className={`${
                    isWorkIcon ? "bg-green-300 py-[10px] px-[15px] rounded" : "bg-yellow-300 px-[15px] py-[10px] rounded"
                  }`}
                  href="/"
                >
                  {element.buttonText}
                </a>
              )}
              </div>
              
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>  /
    </div>
    </div>
  );
}

export default Timeline;
