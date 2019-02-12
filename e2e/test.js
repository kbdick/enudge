// convert rainforest device hexidecimal values into integers

let timestamp_hex = "0x23edfa38"; 
let demand_hex = "0xffffffee";
let year_converter = 946684868 // seconds in ~ 30 years
let timestamp_converted = parseInt(timestamp_hex, 16) + year_converter;
let demand_converted = parseInt(demand_hex, 16);
let output = {timestamp:timestamp_converted, demand:demand_converted};
console.log(output);