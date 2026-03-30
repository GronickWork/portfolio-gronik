import React from "react";
import './line.scss';

export const Line = (props: string) => {
  return (
    <div className="line" id={props}></div>
  )
}