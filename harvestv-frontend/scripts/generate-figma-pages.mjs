import fs from 'node:fs';
import { localizeFigma } from './localize-figma.mjs';
const pages=JSON.parse(fs.readFileSync('design/figma-context.json','utf8'));
const classes=new Map(); const unsupported=new Set();
const simple={relative:'position:relative',absolute:'position:absolute',flex:'display:flex',grid:'display:grid',block:'display:block','flex-col':'flex-direction:column','flex-wrap':'flex-wrap:wrap','items-start':'align-items:flex-start','items-end':'align-items:flex-end','items-center':'align-items:center','items-baseline':'align-items:baseline','justify-center':'justify-content:center','justify-between':'justify-content:space-between','justify-end':'justify-content:flex-end','content-stretch':'align-content:stretch','content-center':'align-content:center','content-start':'align-content:flex-start','justify-self-stretch':'justify-self:stretch','self-start':'align-self:flex-start','self-end':'align-self:flex-end','shrink-0':'flex-shrink:0','size-full':'width:100%;height:100%','w-full':'width:100%','h-full':'height:100%','max-w-none':'max-width:none','min-w-px':'min-width:1px','min-h-px':'min-height:1px','w-px':'width:1px','inset-0':'inset:0','left-0':'left:0','right-0':'right:0','top-0':'top:0','mb-0':'margin-bottom:0','p-px':'padding:1px','pb-px':'padding-bottom:1px','pt-px':'padding-top:1px','pr-px':'padding-right:1px','border':'border-width:1px','border-0':'border-width:0','border-2':'border-width:2px','border-b':'border-bottom-width:1px','border-b-2':'border-bottom-width:2px','border-t':'border-top-width:1px','border-r':'border-right-width:1px','border-l':'border-left-width:1px','border-l-4':'border-left-width:4px','border-solid':'border-style:solid','bg-white':'background-color:white','text-white':'color:white','text-center':'text-align:center','text-right':'text-align:right','font-normal':'font-weight:400','font-medium':'font-weight:500','font-semibold':'font-weight:600','font-bold':'font-weight:700','font-extrabold':'font-weight:800','uppercase':'text-transform:uppercase','whitespace-nowrap':'white-space:nowrap','not-italic':'font-style:normal',italic:'font-style:italic','overflow-clip':'overflow:clip','overflow-hidden':'overflow:hidden','overflow-auto':'overflow:auto','pointer-events-none':'pointer-events:none','bg-clip-padding':'background-clip:padding-box','row-1':'grid-row:1','row-2':'grid-row:2','col-1':'grid-column:1','col-2':'grid-column:2','opacity-90':'opacity:.9','underline':'text-decoration:underline','decoration-solid':'text-decoration-style:solid','left-1/2':'left:50%','-translate-x-1/2':'transform:translateX(-50%)','bg-top-left':'background-position:top left','bg-gradient-to-t':'background-image:linear-gradient(to top,var(--gradient-from),var(--gradient-via),var(--gradient-to))','via-1/2':'--gradient-via-position:50%'};
function declaration(token){
 if(simple[token])return simple[token];
 if(token.startsWith('[')&&token.endsWith(']'))return token.slice(1,-1).replaceAll('_',' ');
 const m=token.match(/^(.+?)-\[(.*)\]$/);if(!m){unsupported.add(token);return '';}
 const k=m[1],v=m[2].replaceAll('_',' ').replace(/(\d(?:%|px))([+-])(?=\d)/g,'$1 $2 ');
 const props={w:'width',h:'height',top:'top',left:'left',right:'right',bottom:'bottom',inset:'inset','max-w':'max-width','min-h':'min-height','mb':'margin-bottom',mr:'margin-right',p:'padding',pt:'padding-top',pb:'padding-bottom',pl:'padding-left',pr:'padding-right',gap:'gap','gap-x':'column-gap','gap-y':'row-gap','rounded':'border-radius','leading':'line-height','tracking':'letter-spacing','grid-cols':'grid-template-columns','grid-rows':'grid-template-rows',flex:'flex',col:'grid-column',shadow:'box-shadow'};
 if(props[k])return props[k]+':'+v;
 if(k==='px')return `padding-left:${v};padding-right:${v}`;
 if(k==='py')return `padding-top:${v};padding-bottom:${v}`;
 if(k==='size')return `width:${v};height:${v}`;
 if(k==='text')return /^(\d|calc)/.test(v)?'font-size:'+v:'color:'+v;
 if(k==='font')return 'font-family:var(--font-body)';
 if(k==='bg')return v.startsWith('url')?'background-image:'+v:'background-color:'+v;
 if(k==='bg-size')return 'background-size:'+v;
 if(k==='border')return /^\d/.test(v)?'border-width:'+v:'border-color:'+v;
 if(k==='backdrop-blur')return `backdrop-filter:blur(${v})`;
 if(k==='drop-shadow')return `filter:drop-shadow(${v})`;
 if(k==='decoration')return 'text-decoration-thickness:'+v;
 if(['from','via','to'].includes(k))return `--gradient-${k}:${v}`;
 unsupported.add(token);return '';
}
function classFor(value){if(!classes.has(value)){const size=Number(value.match(/text-\[(\d+(?:\.\d+)?)px\]/)?.[1]||0);const heading=value.includes('uppercase')||/font-(semibold|bold|extrabold)/.test(value)||(size>=18&&value.includes('font-medium'));classes.set(value,{name:'figma-'+classes.size,css:value.split(' ').map(declaration).filter(Boolean).join(';')+(heading?';font-family:var(--font-heading)':'')});}return classes.get(value).name;}
function replaceNode(code,id,transform){const start=code.indexOf('data-node-id="'+id+'"');if(start<0)return code; const begin=code.lastIndexOf('<div',start);const openEnd=code.indexOf('>',start);const single=code.slice(begin,openEnd).trimEnd().endsWith('/');let depth=single?0:1,end=openEnd+1;const re=/<div\b[^>]*>|<\/div>/g;re.lastIndex=end;let m;while(depth&&(m=re.exec(code))){depth+=m[0].startsWith('</')?-1:(m[0].endsWith('/>')?0:1);end=re.lastIndex;}return code.slice(0,begin)+transform(code.slice(begin,end),code.slice(begin,openEnd+1).replace(/\/>$/,'>'),single?'':code.slice(openEnd+1,end-6))+code.slice(end);}
const routeFor={'Home':'/','Public Portal':'/','Dashboard':'/dashboard','My Farm':'/my-farm','Crop Rotation':'/crop-rotation','Information Check':'/information-check','Feedback':'/feedback'};
for(const page of pages){let code=page.code;const prefix=code.match(/const assetPathPrefix = "([^"]+)"/)[0];code=code.replace(prefix,`const assetPathPrefix = "/figma/${page.route}"`);
 // Make the prototype controls semantic and keyboard accessible, retaining all their design layers.
 const controls=[...code.matchAll(/data-node-id="([^"]+)" data-name="(Button|Link)"/g)].map(m=>({id:m[1],type:m[2]}));
 for(const {id,type} of controls)code=replaceNode(code,id,(whole,open,body)=>{const texts=[...body.matchAll(/<p[^>]*>(.*?)<\/p>/gs)].map(m=>m[1].replace(/\{`|`\}/g,'').trim());const label=texts.join(' ');const route=routeFor[label];if(type==='Link'&&route)return open.replace('<div','<a href="'+route+'"')+body+'</a>';if(type==='Link'&&/16123|Hotline|SAAO/.test(label))return open.replace('<div','<a href="tel:16123"')+body+'</a>';return open.replace('<div',`<button type="button" data-action={${JSON.stringify(label)}}`)+body+'</button>';});
 const fields=page.route==='information-check'?[['95:5135','source','']]:[];
 for(const [id,name,value]of fields)code=replaceNode(code,id,(whole,open)=>open.replace('<div','<input name="'+name+'" aria-label="'+name+'" defaultValue="'+value+'"').replace(/>$/,' />'));
 for(const [id,name,placeholder]of [['95:5121','advice','What farming advice would you like to check?'],['115:777','observation','e.g. Yellow leaves on Boro rice after cold spell, or seeds did not sprout…'],['126:1257','note','Optional note: seed availability, tube well water level…']])code=replaceNode(code,id,(whole,open)=>open.replace('<div',`<textarea name="${name}" aria-label="${name}" placeholder="${placeholder}"`)+ '</textarea>');
 code=code.replace(/<a href="(\/(?:dashboard|my-farm|crop-rotation|information-check|feedback)?)"([^>]*)>([\s\S]*?)<\/a>/g,'<Link href="$1"$2>$3</Link>');
 code='import Link from "next/link";\nimport {FarmerProfileText} from "@/components/farmer-profile";\n'+code;
 code=code.replace(/data-action=\{"EN"\}/g,'data-action={"EN"} aria-pressed={language === "en"} lang="en"').replace(/data-action=\{"বাংলা"\}/g,'data-action={"বাংলা"} aria-pressed={language === "bn"} lang="bn"');
 code='import { PhotoUpload, SoilTests } from "@/components/field-controls";\n'+code;
 if(page.route==='my-farm'){
 code='import FarmAddressField from "@/components/farm-address-field";\n'+code;
 for(const [id,field]of [['95:4454','division'],['95:4460','district'],['95:4466','plot']])code=replaceNode(code,id,()=>`<FarmAddressField field="${field}" />`);
 code=code.replace('Administrative Division','Division').replace('Upazila / Sub-district','District').replace('Mauza / CS Plot Number','Mauza / CS Plot Number (optional)');
 for(const [id,label]of [['95:4588','Deep Tube Well'],['95:4593','Shallow Tube Well'],['95:4597','Canal / Pond'],['95:4601','Rainfed']])code=replaceNode(code,id,(whole,open,body)=>open.replace('<div',`<label aria-label="${label}"`)+`<input type="radio" name="water" value="${label}" defaultChecked={${id==='95:4588'}} style={{position:'absolute',inset:0,opacity:0,cursor:'pointer'}} />`+body+'</label>');
 code=replaceNode(code,'95:4570',()=>'<SoilTests />');
 }
 if(page.route==='feedback')code=replaceNode(code,'115:781',()=>'<PhotoUpload />');
 code='import {FarmLocation,FarmDetails} from "@/components/farm-location";\nimport {FarmContextBar,ActiveFarmLabel,CropStatus,FarmConditions,WeatherDashboard,ClimateHistory} from "@/components/live-dashboard";\n'+code;
 if(page.route==='crop-rotation'){
 code='import RotationPlanner from "@/components/rotation-planner";\n'+code;
 code=replaceNode(code,'126:993',()=>'<ActiveFarmLabel kind="name" />');
 code=replaceNode(code,'117:7247',()=>'<ActiveFarmLabel kind="name" />');
 code=replaceNode(code,'126:1001',()=>'<RotationPlanner />');
 }
 if(page.route==='information-check'){
 code='import InformationChecker from "@/components/information-checker";\n'+code;
 code=replaceNode(code,'95:5079',()=>'<InformationChecker />');
 }
 if(page.route==='my-farm'){
 code=replaceNode(code,'95:4472',()=>'<FarmLocation />');
 code=replaceNode(code,'95:4498',()=>'<FarmDetails section="crops" />');
 code=replaceNode(code,'95:4548',()=>'<FarmDetails section="soil" />');
 code=replaceNode(code,'95:4576',()=>'<FarmDetails section="water" />');
 code=code.replace('Autosaved locally','Farm details are saved when you select Save Farm.');
 code=code.replace('Plot Map Preview','Farm location map');
 }
 if(page.route==='dashboard'){
 code=replaceNode(code,'95:4095',()=>'<FarmContextBar />');
 code=replaceNode(code,'95:4122',()=>'<CropStatus />');
 code=replaceNode(code,'95:4175',()=>'<FarmConditions />');
 code=replaceNode(code,'95:4198',()=>'<><WeatherDashboard /><ClimateHistory /></>');
 code=code.replace('AGRONOMIC STEWARDSHIP','EXAMPLE ROTATION · NOT A LIVE RECOMMENDATION');
 code=code.replace('Active Crop Rotation Sequence (1-Year Cycle)','Example Crop Rotation Sequence');
 code=code.replace('BMD Weather & BARI Agronomic Model • Updated today at 07:30 BST','Example data');
 code=code.replace('Mymensingh • Plot 4','No farm selected');
 code=code.replace(/<p([^>]*)>(No farm selected|Plot 4 Active \(1\.5 Bigha\)|Mymensingh Horticultural Sub-Region|1\.5 Bigha • Clay Loam)<\/p>/g,(_,attributes,label)=>`<p${attributes}><ActiveFarmLabel kind="${label.startsWith('1.5')?'details':label.startsWith('Mymensingh Horticultural')?'region':'name'}" /></p>`);
 }
 if(page.route==='feedback'){
 code=replaceNode(code,'115:773',()=>'<ActiveFarmLabel kind="name" />');
 code=code.replace('Your Previous Reports (2)','Example previous reports (2)').replace('Vetted agronomist response guaranteed under Agro Data Charter','Feedback is saved on the local server. Expert replies are not connected.').replace('Assigned to Trishal extension office (Estimated response: within 24h)','Example status — no expert review is scheduled.');
 code=code.replace('Fast Agronomic Review','Feedback status').replace('All field reports are reviewed directly by Upazila Agricultural Officers','Reports are saved for the farmer. No agricultural officer review service is connected.').replace('(DAE) and BARI research agronomists.','Call 16123 or contact the local agriculture office when expert help is needed.').replace('REVIEWED BY EXPERT','EXAMPLE RESPONSE · NOT CONNECTED').replace('Dr. M. K. Anam (BARI Pulses):','Example agronomist response:').replace(/<T text="Verified"\/>/g,'<T text="Example"/>');
 }
 if(page.route==='feedback'||page.route==='crop-rotation'){
 for(const [label,hash] of [['Crop Advisory Terms','terms'],['Privacy & Field Data Rights','privacy'],['Soil Health Guidelines','soil']])code=code.replace(new RegExp(`<p([^>]*)><T text="${label}"\\/><\\/p>`,'g'),`<Link href="/policies#${hash}"$1><T text="${label}"/></Link>`);
 }
 code=code.replaceAll('Research Partners','Reference Institutions').replaceAll('RESEARCH PARTNERS','REFERENCE INSTITUTIONS').replaceAll('Field agronomy advisory calibrated with national seed standards.','General agricultural references; no institutional partnership is implied.').replaceAll('Verified Agronomic Database','Reference Library · Local Validation Required').replaceAll('DAE REGIONAL LIAISON 2024–25','LOCAL FARM FEEDBACK');
 for(const id of ['95:5210','95:5240','95:5273'])code=replaceNode(code,id,(whole,open,body)=>open.replace('<div','<button type="button" data-sources="true"')+body+'</button>');
 code=code.replace(/className="([^"]*)"/g,(_,v)=>v==='photo-upload'||v==='soil-tests'?`className="${v}"`:`className="${classFor(v)}"`);
 fs.mkdirSync('src/components/figma',{recursive:true});fs.writeFileSync(`src/components/figma/${page.route}.tsx`,localizeFigma(code,page.route+'.tsx').replaceAll('<T text="Abdur Rashid"/>','<FarmerProfileText />').replaceAll('<T text="+880 1712-849201"/>','<FarmerProfileText field="phone" />').replaceAll('<T text="AR"/>','<FarmerProfileText field="initials" />'));
 fs.mkdirSync(`src/app/${page.route}`,{recursive:true});fs.writeFileSync(`src/app/${page.route}/page.tsx`,`import Design from '@/components/figma/${page.route}';\nimport PageInteractions from '@/components/page-interactions';\nexport default function Page(){return <PageInteractions page="${page.route}"><Design /></PageInteractions>;}\n`);
}
let css=[...classes.values()].map(x=>'.figma-page .'+x.name+'{'+x.css+'}').join('\n');
css+='\n@media(max-width:700px){\n';
for(const [tokens,{name,css:decl}]of classes){let rules=[];if(tokens.includes('whitespace-nowrap'))rules.push('white-space:normal');if(tokens.split(' ').includes('grid'))rules.push('grid-template-columns:minmax(0,1fr)','grid-template-rows:auto','height:auto');if(/col-\[|row-\d/.test(tokens))rules.push('grid-column:auto','grid-row:auto');if(tokens.includes('flex-['))rules.push('flex:1 1 260px');if(tokens.includes('flex ')&&!tokens.includes('flex-col'))rules.push('flex-wrap:wrap');if(/(?:^| )w-\[(\d{3,})px\]/.test(tokens)&&Number(tokens.match(/(?:^| )w-\[(\d{3,})px\]/)[1])>300)rules.push('width:100%');if(tokens.includes('px-[')||tokens.includes('p-[')){const m=tokens.match(/(?:^| )(?:px|p)-\[(\d+)px\]/);if(m&&Number(m[1])>24)rules.push('padding-left:20px','padding-right:20px');}if(tokens.includes('absolute')&&/top-\[(?:[4-9]\d|\d{3,})/.test(tokens))rules.push('position:relative','top:auto','left:auto');if(rules.length)css+='.figma-page .'+name+'{'+rules.join(';')+'}\n';}
css+='}\n';fs.writeFileSync('src/app/figma-pages.css',css);
console.log('Generated five page components and scoped CSS. Unsupported:',[...unsupported]);
