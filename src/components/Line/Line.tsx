import React from "react";
import './line.scss';

export default function Line(props: string) {
  return (
    <div className="line" id={props}></div>
  )
}