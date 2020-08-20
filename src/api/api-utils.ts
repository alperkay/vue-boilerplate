export const encodeQueryString = (data: any) => {
  const queryParameters = [];
  for (const d in data) {
    if (data[d] != null) {
      if (data[d] instanceof Array) {
        if (data[d].length > 0) {
          const param = encodeURIComponent(d) + "=";
          queryParameters.push(param + data[d].join(`&${param}`));
        }
      } else if (
        (typeof data[d] === "number" && !isNaN(data[d])) ||
        (typeof data[d] === "string" && data[d] !== "") ||
        typeof data[d] === "boolean"
      ) {
        queryParameters.push(
          encodeURIComponent(d) + "=" + encodeURIComponent(data[d])
        );
      }
    }
  }
  return queryParameters.join("&");
};
