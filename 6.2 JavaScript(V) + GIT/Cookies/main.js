document.cookie = "cookie1=valorcookie; max-age=3600; path=/";

let fecha = new Date("2027-01-26");
document.cookie = "cookie3=1;expires="+fecha.toUTCString();

console.log(document.cookie)