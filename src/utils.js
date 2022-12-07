export function getCurrency(value) {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });
    return formatter.format(value);
}

export function getSizes(objArray) {
  var sizesList = objArray.map(function(o) {
    return o.talle;
  });
  return [ { text: "Seleccione talle", value: null }, ...sizesList];
}