import type {FarmRecord} from './live-types';

export type RotationPlan={id:string;name:string;crops:string[];water:string;why:string[];watchFor:string};
export type RotationResponse={farm:FarmRecord|null;plans:RotationPlan[];savedPlanId:string|null;notice:string;sources:{title:string;url:string}[]};

export function rotationFor(farm:FarmRecord|null):Omit<RotationResponse,'savedPlanId'> {
 const water=farm?.details.water||'';
 const current=farm?.details.crop||'';
 const history=farm?.details.cropHistory||'';
 const soil=farm?.details.soil||'unknown soil texture';
 const ph=farm?.details.ph?`Recorded soil pH: ${farm.details.ph}.`:'No soil pH has been recorded.';
 const rainfed=/rain/i.test(water)||!water;
 const first=rainfed
  ?{id:'water-wise',name:'Lower-water option',crops:['Mustard','Mungbean','T. Aman rice'],water:'Lower irrigation demand',why:['Mustard and mungbean can reduce dependence on irrigation compared with a dry-season rice plan.',`Mungbean adds a legume after ${current||'the current crop'} and diversifies the recorded history: ${history||'no history entered'}.`],watchFor:`Soil: ${soil}. ${ph} Confirm planting windows, seed availability, and local flood risk with your Upazila agriculture office.`}
  :{id:'balanced',name:'Balanced irrigated option',crops:['Potato','Mungbean','T. Aman rice'],water:'Regular irrigation needed for the first crop',why:['Adds a pulse between higher-demand crops.',`Uses the saved ${water||'water source'} while avoiding three cereal seasons in a row.`],watchFor:`Soil: ${soil}. ${ph} Potato needs suitable seed, disease management, storage, and a local market.`};
 const second={id:'diverse',name:'Alternative diverse option',crops:current==='Maize'?['Mustard','Mungbean','T. Aman rice']:['Maize','Mungbean','Short-duration Aman rice'],water:'Moderate irrigation demand',why:[`Changes crop families after ${current||'the current crop'}.`,'The pulse season supports diversity before returning to rice.'],watchFor:`District: ${farm?.details.district||'not set'}. Check maize market access and whether the selected rice variety fits the local harvest window.`};
 return {farm,plans:[first,second],notice:'These are transparent planning suggestions, not prescriptions. Final crop choice needs local soil, market, flood, pest, and extension-officer review.',sources:[{title:'FAO — Species diversification in crop rotations',url:'https://www.fao.org/conservation-agriculture/in-practice/species-diversification/en/'},{title:'BRRI — Rice knowledge and regional information',url:'https://riceprofile.brri.gov.bd/'}]};
}
