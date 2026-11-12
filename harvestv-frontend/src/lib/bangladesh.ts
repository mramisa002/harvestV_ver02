// Division/district membership: https://bangladesh.gov.bd/views/district-list
// Stable English values are saved; Bengali names are display labels.
export const bangladeshDivisions = [
 {name:'Barishal',bn:'বরিশাল',districts:[['Barguna','বরগুনা'],['Barishal','বরিশাল'],['Bhola','ভোলা'],['Jhalakathi','ঝালকাঠি'],['Patuakhali','পটুয়াখালী'],['Pirojpur','পিরোজপুর']]},
 {name:'Chattogram',bn:'চট্টগ্রাম',districts:[['Bandarban','বান্দরবান'],['Brahmanbaria','ব্রাহ্মণবাড়িয়া'],['Chandpur','চাঁদপুর'],['Chattogram','চট্টগ্রাম'],['Cumilla','কুমিল্লা'],["Cox's Bazar",'কক্সবাজার'],['Feni','ফেনী'],['Khagrachhari','খাগড়াছড়ি'],['Lakshmipur','লক্ষ্মীপুর'],['Noakhali','নোয়াখালী'],['Rangamati','রাঙ্গামাটি']]},
 {name:'Dhaka',bn:'ঢাকা',districts:[['Dhaka','ঢাকা'],['Faridpur','ফরিদপুর'],['Gazipur','গাজীপুর'],['Gopalganj','গোপালগঞ্জ'],['Kishoreganj','কিশোরগঞ্জ'],['Madaripur','মাদারীপুর'],['Manikganj','মানিকগঞ্জ'],['Munshiganj','মুন্সীগঞ্জ'],['Narayanganj','নারায়ণগঞ্জ'],['Narsingdi','নরসিংদী'],['Rajbari','রাজবাড়ী'],['Shariatpur','শরীয়তপুর'],['Tangail','টাঙ্গাইল']]},
 {name:'Khulna',bn:'খুলনা',districts:[['Bagerhat','বাগেরহাট'],['Chuadanga','চুয়াডাঙ্গা'],['Jashore','যশোর'],['Jhenaidah','ঝিনাইদহ'],['Khulna','খুলনা'],['Kushtia','কুষ্টিয়া'],['Magura','মাগুরা'],['Meherpur','মেহেরপুর'],['Narail','নড়াইল'],['Satkhira','সাতক্ষীরা']]},
 {name:'Mymensingh',bn:'ময়মনসিংহ',districts:[['Jamalpur','জামালপুর'],['Mymensingh','ময়মনসিংহ'],['Netrokona','নেত্রকোণা'],['Sherpur','শেরপুর']]},
 {name:'Rajshahi',bn:'রাজশাহী',districts:[['Bogura','বগুড়া'],['Joypurhat','জয়পুরহাট'],['Naogaon','নওগাঁ'],['Natore','নাটোর'],['Chapainawabganj','চাঁপাইনবাবগঞ্জ'],['Pabna','পাবনা'],['Rajshahi','রাজশাহী'],['Sirajganj','সিরাজগঞ্জ']]},
 {name:'Rangpur',bn:'রংপুর',districts:[['Dinajpur','দিনাজপুর'],['Gaibandha','গাইবান্ধা'],['Kurigram','কুড়িগ্রাম'],['Lalmonirhat','লালমনিরহাট'],['Nilphamari','নীলফামারী'],['Panchagarh','পঞ্চগড়'],['Rangpur','রংপুর'],['Thakurgaon','ঠাকুরগাঁও']]},
 {name:'Sylhet',bn:'সিলেট',districts:[['Habiganj','হবিগঞ্জ'],['Moulvibazar','মৌলভীবাজার'],['Sunamganj','সুনামগঞ্জ'],['Sylhet','সিলেট']]},
] as const;

export function validDistrict(division:string|undefined,district:string|undefined){
 return bangladeshDivisions.some(item=>item.name===division&&item.districts.some(([name])=>name===district));
}
