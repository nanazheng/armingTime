export function coordinateToTime(startOffset, endOffset) {
  //slider 的 width 为720，60 * 24 = 1440，为了都用整数好计算，所以 * 2
  const startHour = Math.floor((startOffset * 2) / 60);
  const startMin = (startOffset * 2) % 60;
  const endHour = Math.floor((endOffset * 2) / 60);
  const endMin = (endOffset * 2) % 60;
  const startTime = `${startHour > 9 ? startHour : `0${startHour}`}:${
    startMin > 9 ? startMin : `0${startMin}`
  }`;
  const endTime = `${endHour > 9 ? endHour : `0${endHour}`}:${
    endMin > 9 ? endMin : `0${endMin}`
  }`;
  return {
    startTime,
    endTime,
    startHour,
    startMin,
    endHour,
    endMin,
  };
}
