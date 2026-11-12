'use client';
import {useFarm} from '@/lib/farm-context';
import {useLanguage} from '@/lib/language';
import {bangladeshDivisions} from '@/lib/bangladesh';

export default function FarmAddressField({field}:{field:'division'|'district'|'plot'}){
 const {details,setDetails}=useFarm();
 const {t,language}=useLanguage();
 const selected=bangladeshDivisions.find(division=>division.name===details.division);
 if(field==='plot')return <input className="farm-address-control" name="plot" aria-label={t('Mauza / CS Plot Number (optional)')} value={details.plot||''} onChange={event=>setDetails({...details,plot:event.target.value})} maxLength={500} />;
 return <select className="farm-address-control" name={field} aria-label={t(field==='division'?'Division':'District')} required disabled={field==='district'&&!selected} value={details[field]||''} onChange={event=>setDetails({...details,[field]:event.target.value,...(field==='division'?{district:''}:{})})}>
  <option value="">{t(field==='division'?'Select division':selected?'Select district':'Select a division first')}</option>
  {field==='division'?bangladeshDivisions.map(item=><option key={item.name} value={item.name}>{language==='bn'?item.bn:item.name}</option>):selected?.districts.map(([name,bn])=><option key={name} value={name}>{language==='bn'?bn:name}</option>)}
 </select>;
}
