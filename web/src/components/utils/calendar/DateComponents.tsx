import React, { useState } from "react";
import { displayClockNumber } from "./calendarUtils";

import "./DateComponents.scss";

export const DateComponent = (props: {
  date: Date;
  isSelected: boolean;
  isSemiSelected?: boolean;
  isToday?: boolean;
  isStart?: boolean;
  isEnd?: boolean;
  isDisabled?: boolean;
  onClcicked: DateCallBack;
}) => {
  let className = "";
  if (props.isSelected) {
    className += " selected";
  }
  if (props.isToday) {
    className += " today";
  }
  if (props.isStart) {
    className += " start";
  }
  if (props.isEnd) {
    className += " end";
  }
  if (props.isDisabled) {
    className += " disabled";
  }
  if (props.isSemiSelected && !props.isSelected) {
    className += " semi-selected";
  }

  const displayCaption = (): string => {
    // if (props.isStart && props.isEnd) {
    //   return "";
    // } else if (props.isStart) {
    //   return "start";
    // } else if (props.isEnd) {
    //   return "end";
    // } else
    if (props.isToday) {
      return "today";
    }

    return "";
  };

  return (
    <div
      id="date-component"
      onClick={() => {
        props.onClcicked(props.date);
      }}
    >
      <div className={className}>
        <p className="align-center">{props.date.getDate()}</p>
        <p className="caption">{displayCaption()}</p>
      </div>
    </div>
  );
};

export const DateStringComponent = (props: { date?: Date | number }) => {
  const date =
    typeof props.date === "number" ? new Date(props.date) : props.date;

  return (
    <div
      id="date-string-component"
      className="flex-row align-items-center justify-content-center"
    >
      <div className="icon">📅</div>
      <div id="date-string" className="font-size-lg">
        {date ? (
          <p>
            {date.getFullYear()}/{date.getMonth() + 1}/{date.getDate()}
            {date.getHours() || date.getMinutes()
              ? " " +
                displayClockNumber(date.getHours()) +
                ":" +
                displayClockNumber(date.getMinutes())
              : ""}
          </p>
        ) : (
          <div>not selected</div>
        )}
      </div>
    </div>
  );
};

export const DayComponent = (props: { content: string }) => {
  return (
    <div
      id="day-component"
      className={
        props.content === "Su"
          ? "color-red"
          : props.content === "Sa"
          ? "color-blue"
          : ""
      }
    >
      <p className="align-center">{props.content}</p>
    </div>
  );
};
