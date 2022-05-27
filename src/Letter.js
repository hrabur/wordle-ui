import clsx from "clsx";
import "./Letter.css";

export default function Letter({ letter, state }) {
  return <div className={clsx("Letter", `Letter_${state}`)}>{letter}</div>;
}
