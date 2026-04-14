import React from "react";
import './line.scss';

interface MarkLine {
  idl: string,
}

export default function Line({idl}: MarkLine) {
  return (
    <div className="line" id={idl}></div>
  )
}