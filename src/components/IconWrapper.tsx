import CssIcon from "../assets/CssIcon";
import MongoDbIcon from "../assets/MongoDbIcon";
import MySqlIcon from "../assets/MySqlIcon";
import NestJSIcon from "../assets/NestJs";
import PythonIcon from "../assets/PythonIcon";
import ReactIcon from "../assets/ReactIcon";
import SpringBootIcon from "../assets/SpringBootIcon";

type IconWrapperProps = {
  skill: keyof typeof IconMap;
};

const IconMap = {
  ReactIcon: <ReactIcon />,
  CssIcon: <CssIcon />,
  MongoDbIcon: <MongoDbIcon />,
  MySqlIcon: <MySqlIcon />,
  NestJSIcon: <NestJSIcon />,
  SpringBootIcon: <SpringBootIcon />,
  PythonIcon: <PythonIcon />,
} as const;

const SpanMap = {
  ReactIcon: "React",
  CssIcon: "Css",
  MongoDbIcon: "MongoDB",
  MySqlIcon: "MySQL",
  NestJSIcon: "NestJS",
  SpringBootIcon: "SpringBoot",
  PythonIcon: "Python",
} as const;

export default function IconWrapper({ skill }: IconWrapperProps) {
  return (
    <button className="tooltip-wrapper button-icon">
      {IconMap[skill]}
      <span className="tooltip-text">{SpanMap[skill]}</span>
    </button>
  );
}
