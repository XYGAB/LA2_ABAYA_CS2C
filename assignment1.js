//Student information
let fullName = "Xyril Gabriel L. Abaya";
let bDay = "june 28, 2005";
let Bplace = "Candon City Hospital, Candon City, Ilocos Sur, Philippines 2710";
let Address = "Paratong, Sta. Lucia, Ilocos Sur, Philippines 2712";
let CrsAndYr = "Bachelor of Science in Computer Science";
let DrmJob = "Web Developer";

//Making of Upper Case And Lower Case
let upper1 = fullName.toUpperCase();
let upper2 = Bplace.toUpperCase();
let upper3 = Address.toUpperCase();
let low1 = fullName.toLowerCase();
let low2 = CrsAndYr.toLowerCase();

//log all using concatinate and backtick
console.log(`[${upper1}] was born [${bDay}] at [${upper2}], and currently living at [${upper3}]. [${low1}] is taking up [${low2}] and dreams to be [${DrmJob}] after graduation.`);
