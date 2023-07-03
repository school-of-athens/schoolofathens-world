function timestampToDate(timestamp) {
  return `${timestamp
    .toDate()
    .toLocaleTimeString()}, ${timestamp
    .toDate()
    .toLocaleDateString()}`;
}

export default timestampToDate;
