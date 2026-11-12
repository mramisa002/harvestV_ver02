"use client";

import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { content, type Language } from "@/lib/content";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/lib/language";
import {useFarm} from "@/lib/farm-context";
import {useProfile} from "@/lib/profile-context";

type Panel = "farm" | "rotation" | "catalog" | "feedback" | "dashboard" | "profile" | "privacy" | "terms" | "compliance";
type Farm = { name: string; location: string; area: string; soil: number; crop: number; water: number };
type Feedback = { id: string; message: string; rating: "helpful" | "notHelpful"; date: string };
const initialFarm: Farm = { name: "My Farm", location: "Mymensingh", area: "1.5", soil: 0, crop: 0, water: 0 };
const iconFiles = {
  soil: "1add3.svg", weather: "bf08c.svg", guidance: "224a3.svg", stepFarm: "98d32.svg", stepRotate: "42417.svg", stepSave: "17d20.svg",
  zone: "a682c.svg", statNitrogen: "b2691.svg", statCost: "409ca.svg", statReturn: "4a474.svg", chevron: "d1196.svg", dashboard: "17e04.svg", call: "44c51.svg",
  arrow: "03d99.svg", down: "e3756.svg", calibrated: "85c63.svg", districts: "eb883.svg", nitrogen: "2e8e9.svg", footerLogo: "07eb8.svg", phone: "9c4f6.svg", logo: "8b54e.svg", pin: "69fa6.svg", user: "0d371.svg",
};
type IconName = keyof typeof iconFiles;

function Icon({ name, className = "" }: { name: IconName; className?: string }) {
  // Preserve the exact intrinsic dimensions of the original Figma SVGs.
  return <img className={`design-icon ${className}`} src={`/figma/${iconFiles[name]}`} alt="" aria-hidden="true" />;
}

function Tag({ children, dot = false }: { children: ReactNode; dot?: boolean }) {
  return <span className="tag">{dot && <span className="tag-dot" />}{children}</span>;
}

function persist(key: string, value: unknown) {
  try { localStorage.setItem(key, JSON.stringify(value)); return true; } catch { return false; }
}

export default function HarvestHome() {
  const router = useRouter();
  const {language, setLanguage} = useLanguage();
  const {farm:confirmedFarm}=useFarm();
  const {profile}=useProfile();
  const [farm, setFarm] = useState<Farm>(initialFarm);
  const [draftFarm, setDraftFarm] = useState<Farm>(initialFarm);
  const [savedPlan, setSavedPlan] = useState(false);
  const [feedback, setFeedback] = useState<Feedback[]>([]);
  const [panel, setPanel] = useState<Panel | null>(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [showSequence, setShowSequence] = useState(false);
  const [search, setSearch] = useState("");
  const [notice, setNotice] = useState("");
  const dialog = useRef<HTMLDialogElement>(null);
  const t = content[language];

  useEffect(() => {
    try {
      const storedLanguage = JSON.parse(localStorage.getItem("harvestv-language") || '"en"');
      // LanguageProvider loads the saved preference.
      const storedFarm = JSON.parse(localStorage.getItem("harvestv-farm") || "null");
      if (storedFarm && typeof storedFarm.name === "string" && typeof storedFarm.location === "string" && typeof storedFarm.area === "string" && [storedFarm.soil, storedFarm.water].every(x => Number.isInteger(x) && x >= 0 && x < 4) && Number.isInteger(storedFarm.crop) && storedFarm.crop >= 0 && storedFarm.crop < 5) setFarm(storedFarm);
      setSavedPlan(JSON.parse(localStorage.getItem("harvestv-plan") || "false") === true);
      const storedFeedback = JSON.parse(localStorage.getItem("harvestv-feedback") || "[]");
      if (Array.isArray(storedFeedback)) setFeedback(storedFeedback.filter(item => item && typeof item.id === "string" && typeof item.message === "string" && typeof item.date === "string" && ["helpful", "notHelpful"].includes(item.rating)));
    } catch { /* An unavailable or invalid browser store should not prevent using the page. */ }
  }, []);

  useEffect(() => { document.documentElement.lang = language === "bn" ? "bn" : "en"; }, [language]);

  useEffect(() => {
    if (panel && dialog.current && !dialog.current.open) dialog.current.showModal();
    if (!panel && dialog.current?.open) dialog.current.close();
    if (panel) document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [panel]);

  function openPanel(next: Panel) { const routes: Partial<Record<Panel, string>> = {farm:"/my-farm",rotation:"/crop-rotation",feedback:"/feedback",dashboard:"/dashboard",profile:"/profile"}; if(routes[next]){router.push(routes[next]!);return;} setNotice(""); setMobileMenu(false); setPanel(next); }
  function switchLanguage(next: Language) { setLanguage(next); persist("harvestv-language", next); setNotice(""); }

  function saveFarm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const next: Farm = { name: String(data.get("name")).trim(), location: String(data.get("location")).trim(), area: String(data.get("area")), soil: Number(data.get("soil")), crop: Number(data.get("crop")), water: Number(data.get("water")) };
    if (!next.name || !next.location) return;
    setFarm(next);
    setNotice(persist("harvestv-farm", next) ? t.farmSaved : t.storageError);
  }

  function savePlan() {
    if (persist("harvestv-plan", true)) { setSavedPlan(true); setNotice(t.planSaved); } else setNotice(t.storageError);
  }

  function saveFeedback(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = String(data.get("message")).trim();
    if (!message) return;
    const next: Feedback[] = [{ id: crypto.randomUUID(), message, rating: data.get("rating") === "notHelpful" ? "notHelpful" : "helpful", date: new Date().toISOString() }, ...feedback];
    if (persist("harvestv-feedback", next)) { setFeedback(next); setNotice(t.feedbackSaved); event.currentTarget.reset(); } else setNotice(t.storageError);
  }

  function downloadPlan() {
    const lines = ["HarvestV — " + t.savedPlan, t.demoNotice, "", `${t.farmName}: ${farm.name}`, `${t.location}: ${farm.location}`, `${t.area}: ${farm.area}`, "", ...t.crops.map(crop => `${crop.dates}: ${crop.name} (${crop.variety})`), "", t.termsText];
    const url = URL.createObjectURL(new Blob(["\uFEFF" + lines.join("\n")], { type: "text/plain;charset=utf-8" }));
    const anchor = document.createElement("a"); anchor.href = url; anchor.download = "harvestv-example-plan.txt"; anchor.click(); URL.revokeObjectURL(url);
  }

  const panelTitle = panel ? ({ farm: t.farm, rotation: t.rotation, catalog: t.catalog, feedback: t.feedback, dashboard: t.dashboard, profile: t.profile, privacy: t.policies[0], terms: t.policies[1], compliance: t.policies[2] }[panel]) : "";
  const navItems = [ ["home", t.home], ["farm", t.farm], ["rotation", t.rotation], ["catalog", t.catalog], ["feedback", t.feedback] ] as const;

  return <>
    <a href="#main" className="skip-link">{language === "en" ? "Skip to content" : "মূল বিষয়বস্তুতে যান"}</a>
    <header className="site-header">
      <div className="header-inner">
        <div className="header-brand">
          <a href="#" className="brand" aria-label="HarvestV home"><span className="logo-tile"><Icon name="logo" /></span><span>HarvestV</span></a>
          <button className="farm-location" onClick={() => openPanel("farm")} aria-label={t.farm}><Icon name="pin" /><span>{confirmedFarm?.name||(language==='en'?'No farm selected':'খামার বাছাই করা হয়নি')}</span></button>
        </div>
        <nav className="desktop-nav nav-pill" aria-label={language === "en" ? "Main navigation" : "মূল মেনু"}>
          <a href="/dashboard" className="nav-item">{language === "en" ? "Dashboard" : "ড্যাশবোর্ড"}</a>
          <a href="/information-check" className="nav-item">{language === "en" ? "Information Check" : "তথ্য যাচাই"}</a>
          {navItems.map(([key, label]) => key === "home" ? <a href="#" className="nav-item active" key={key} aria-current="page">{label}</a> : <button className="nav-item" key={key} onClick={() => openPanel(key)}>{label}</button>)}
        </nav>
        <div className="header-actions">
          <div className="language-switch" role="group" aria-label="Language / ভাষা">
            <button onClick={() => switchLanguage("en")} aria-pressed={language === "en"} lang="en">EN</button>
            <button onClick={() => switchLanguage("bn")} aria-pressed={language === "bn"} lang="bn">বাংলা</button>
          </div>
          <button className="profile-button" onClick={() => openPanel("profile")} aria-label={t.profile}>
            <span className="profile-info"><strong>{profile?.name||(language==='bn'?'আপনার প্রোফাইল':'Your profile')}</strong><span>{profile?.phone||(language==='bn'?'প্রোফাইল সম্পাদনা':'Edit profile')}</span></span><span className="avatar"><Icon name="user" /></span>
          </button>
          <button className="mobile-menu-button" aria-label={t.menu} aria-expanded={mobileMenu} aria-controls="mobile-nav" onClick={() => setMobileMenu(!mobileMenu)}><span /><span /><span /></button>
        </div>
      </div>
      {mobileMenu && <nav id="mobile-nav" className="mobile-nav" aria-label={t.menu}>{navItems.map(([key, label]) => key === "home" ? <a key={key} href="#" onClick={() => setMobileMenu(false)} aria-current="page">{label}</a> : <button key={key} onClick={() => openPanel(key)}>{label}</button>)}<button onClick={()=>openPanel('profile')}>{language==='bn'?'প্রোফাইল সম্পাদনা':'Edit profile'}</button></nav>}
    </header>

    <main id="main">
      <section className="hero section" data-node-id="40:29991" aria-labelledby="hero-heading">
        <div className="container">
          <div className="hero-copy">
            <Tag dot>{t.eyebrow}</Tag>
            <h1 id="hero-heading">{t.headline}<br className="headline-break" />{" "}{t.headlineEnd}</h1>
            <p className="hero-description">{t.introduction}</p>
            <div className="hero-actions"><button className="button primary" onClick={() => openPanel("rotation")}>{t.plan}<Icon name="arrow" /></button><a href="#how-it-works" className="button text-button">{t.how}<Icon name="down" /></a></div>
          </div>
          <figure className="hero-visual">
            <img className="hero-photo" src="/images/home-farm.jpg" alt={language === "en" ? "Aerial view of farmers tending rows of flowering crops" : "ফুলের ফসলের সারিতে কৃষকদের কাজ করার আকাশ থেকে তোলা দৃশ্য"} fetchPriority="high" width="3363" height="2242" />
            <div className="photo-scrim" />
            <figcaption className="photo-metrics"><span><Icon name="calibrated" />{t.calibrated}</span><span><Icon name="districts" />{t.districts}</span><span><Icon name="nitrogen" />{t.nitrogen}</span></figcaption>
          </figure>
        </div>
      </section>

      <section className="benefits section alternate" data-node-id="40:29718" aria-labelledby="benefits-heading">
        <div className="container">
          <div className="benefits-heading"><div><Tag>{t.why}</Tag><h2 id="benefits-heading">{t.rooted}</h2></div><p>{t.benefitsIntro}</p></div>
          <div className="three-column benefit-grid">{t.benefits.map((benefit, index) => <article className="benefit-card" key={index}>
            <div className="icon-tile"><Icon name={(["soil", "weather", "guidance"] as const)[index]} /></div>
            <h3>{benefit.title}</h3><p>{benefit.description}</p>
            <div className="benefit-metric"><span>{benefit.label}</span><strong>{benefit.value}</strong></div>
          </article>)}</div>
        </div>
      </section>

      <section className="steps section" id="how-it-works" data-node-id="40:29773" aria-labelledby="steps-heading">
        <div className="container">
          <div className="section-heading"><Tag>{t.stepsLabel}</Tag><h2 id="steps-heading">{t.stepsTitle}</h2><p>{t.stepsIntro}</p></div>
          <ol className="three-column step-grid">{t.steps.map((step, index) => <li className="step-card" key={index}>
            <div className="step-number"><span>{t.phase}</span><strong>{String(index + 1).padStart(2, "0")}</strong></div>
            <h3>{step.title}</h3><p>{step.description}</p>
            <button className="step-detail" onClick={() => openPanel(index === 0 ? "farm" : "rotation")}><Icon name={(["stepFarm", "stepRotate", "stepSave"] as const)[index]} /><span>{step.detail}</span></button>
          </li>)}</ol>
        </div>
      </section>

      <section className="example section alternate" id="example-plan" data-node-id="40:29837" aria-label={t.demo}>
        <div className="container"><div className="example-panel">
          <div className="example-header"><div><span className="eyebrow"><span className="tag-dot" />{t.demo}</span><h3>{t.model}</h3></div><span className="zone-badge"><Icon name="zone" />{t.zone}</span></div>
          <CropSequence language={language} />
          <div className="three-column example-stats">{(language==='en'?["Review", "Plan", "Confirm"]:["পর্যালোচনা", "পরিকল্পনা", "যাচাই"]).map((value, index) => <div className="example-stat" key={value}><span className="stat-icon"><Icon name={(["statNitrogen", "statCost", "statReturn"] as const)[index]} /></span><div><strong>{value}</strong><span>{t.stats[index]}</span></div></div>)}</div>
        </div></div>
      </section>

      <section className="faq section" aria-labelledby="faq-heading" data-node-id="40:29938">
        <div className="faq-container"><div className="section-heading"><Tag>{t.faqLabel}</Tag><h2 id="faq-heading">{t.faqTitle}</h2></div>
          <div className="faq-list">{t.faqs.map((faq, index) => <div className="faq-item" key={index}><h3><button className="faq-question" aria-expanded={expandedFaq === index} aria-controls={`faq-answer-${index}`} id={`faq-question-${index}`} onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}><span>{faq.question}</span><Icon name="chevron" /></button></h3><div className="faq-answer" hidden={expandedFaq !== index} id={`faq-answer-${index}`} role="region" aria-labelledby={`faq-question-${index}`}><p>{faq.answer}</p></div></div>)}</div>
        </div>
      </section>

      <section className="cta-section section" data-node-id="40:29970"><div className="container"><div className="cta-panel"><div className="cta-copy"><Tag>{t.ctaLabel}</Tag><h2>{t.ctaTitle}</h2><p>{t.ctaBody}</p></div><div className="cta-actions"><button className="button light-button" onClick={() => openPanel("dashboard")}>{t.dashboard}<Icon name="dashboard" /></button><a className="button call-button" href="tel:16123"><Icon name="call" />{t.call}</a></div></div></div></section>
    </main>

    <footer className="site-footer" data-node-id="40:30035"><div className="footer-inner"><div className="footer-grid">
      <div className="footer-about"><a className="footer-brand" href="#"><span className="footer-logo"><Icon name="footerLogo" /></span>HarvestV</a><p>{t.footerBody}</p><div className="footer-standards">{t.standards.map(label => <span key={label}>{label}</span>)}</div></div>
      <div className="footer-helpline"><h3>{t.helpline}</h3><a className="helpline-link" href="tel:16123"><Icon name="phone" /><span><strong>16123</strong><small>{t.krishi}</small></span></a><p>{t.hours}</p></div>
      <div className="footer-institutions"><h3>{t.framework}</h3><ul>{t.institutions.map(name => <li key={name}>{name}</li>)}</ul></div>
    </div><div className="footer-bottom"><p>{t.copyright}</p><div>{t.policies.map((label, index) => <button key={index} onClick={() => openPanel((["privacy", "terms", "compliance"] as const)[index])}>{label}</button>)}</div></div></div></footer>

    <dialog ref={dialog} className="app-dialog" aria-labelledby="dialog-title" onCancel={() => setPanel(null)} onClose={() => setPanel(null)} onClick={event => { if (event.target === event.currentTarget) { const box = event.currentTarget.getBoundingClientRect(); if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) setPanel(null); } }}>
      <div className="dialog-header"><h2 id="dialog-title">{panelTitle}</h2><div className="dialog-header-actions"><div className="language-switch" role="group" aria-label="Language / ভাষা"><button onClick={() => switchLanguage("en")} aria-pressed={language === "en"} lang="en">EN</button><button onClick={() => switchLanguage("bn")} aria-pressed={language === "bn"} lang="bn">বাংলা</button></div><button className="close-button" onClick={() => setPanel(null)} aria-label={t.close}>×</button></div></div>
      <div className="dialog-body">
        {panel === "farm" && <><p className="dialog-intro">{t.farmHelp}</p><form className="farm-form" onSubmit={saveFarm}>
          <label>{t.farmName}<input name="name" value={draftFarm.name} onChange={event => setDraftFarm({ ...draftFarm, name: event.target.value })} required maxLength={100} autoComplete="organization" /></label>
          <label>{t.location}<input name="location" value={draftFarm.location} onChange={event => setDraftFarm({ ...draftFarm, location: event.target.value })} required maxLength={120} autoComplete="address-level2" /></label>
          <label>{t.area}<input name="area" type="number" min="0.01" max="100000" step="0.01" value={draftFarm.area} onChange={event => setDraftFarm({ ...draftFarm, area: event.target.value })} required inputMode="decimal" /></label>
          <label>{t.soil}<select name="soil" value={draftFarm.soil} onChange={event => setDraftFarm({ ...draftFarm, soil: Number(event.target.value) })}>{t.soilOptions.map((value, index) => <option key={index} value={index}>{value}</option>)}</select></label>
          <label>{t.currentCrop}<select name="crop" value={draftFarm.crop} onChange={event => setDraftFarm({ ...draftFarm, crop: Number(event.target.value) })}>{t.cropOptions.map((value, index) => <option key={index} value={index}>{value}</option>)}</select></label>
          <label>{t.water}<select name="water" value={draftFarm.water} onChange={event => setDraftFarm({ ...draftFarm, water: Number(event.target.value) })}>{t.waterOptions.map((value, index) => <option key={index} value={index}>{value}</option>)}</select></label>
          <div className="form-actions"><button type="submit" className="button primary">{t.saveFarm}</button></div>
        </form></>}
        {panel === "rotation" && <><p className="dialog-intro">{t.plannerHelp}</p><div className="field-summary"><Icon name="pin" /><span>{farm.location} • {farm.area} {language === "en" ? "Bigha" : "বিঘা"} • {t.soilOptions[farm.soil]}</span><button onClick={() => openPanel("farm")}>{t.editFarm}</button></div>{!showSequence ? <button className="button primary" onClick={() => setShowSequence(true)}>{t.showExample}<Icon name="arrow" /></button> : <><p className="demo-notice">{t.demoNotice}</p><CropSequence language={language} /><button className="button primary" onClick={savePlan}>{t.savePlan}</button></>}</>}
        {panel === "dashboard" && <><div className="dashboard-summary"><Tag>{t.farm}</Tag><h3>{farm.name}</h3><p>{farm.location} • {farm.area} {language === "en" ? "Bigha" : "বিঘা"}</p><dl><div><dt>{t.currentCrop}</dt><dd>{t.cropOptions[farm.crop]}</dd></div><div><dt>{t.soil}</dt><dd>{t.soilOptions[farm.soil]}</dd></div><div><dt>{t.water}</dt><dd>{t.waterOptions[farm.water]}</dd></div></dl><button className="button outlined" onClick={() => openPanel("farm")}>{t.editFarm}</button></div><h3 className="saved-plan-heading">{t.savedPlan}</h3>{savedPlan ? <><p className="demo-notice">{t.demoNotice}</p><CropSequence language={language} /><button className="button primary" onClick={downloadPlan}>{t.download}</button></> : <><p className="dialog-intro">{t.noPlan}</p><button className="button primary" onClick={() => openPanel("rotation")}>{t.plan}</button></>}</>}
        {panel === "catalog" && <><label className="search-label">{t.search}<input type="search" placeholder={t.search} value={search} onChange={event => setSearch(event.target.value)} /></label><p className="demo-notice">{t.demoNotice}</p><CropSequence language={language} search={search} /></>}
        {panel === "feedback" && <><p className="dialog-intro">{t.feedbackHelp}</p><form className="feedback-form" onSubmit={saveFeedback}><fieldset><legend>{t.feedback}</legend><label><input type="radio" name="rating" value="helpful" defaultChecked />{t.helpful}</label><label><input type="radio" name="rating" value="notHelpful" />{t.notHelpful}</label></fieldset><label>{t.observation}<textarea name="message" placeholder={t.observationPlaceholder} required minLength={3} maxLength={2000} rows={4} /></label><button className="button primary" type="submit">{t.sendFeedback}</button></form>{feedback.length > 0 && <div className="previous-feedback"><h3>{t.previous}</h3>{feedback.map(item => <article key={item.id}><span>{t[item.rating]} · {new Date(item.date).toLocaleDateString(language === "en" ? "en-GB" : "bn-BD")}</span><p>{item.message}</p></article>)}</div>}</>}
        {panel === "privacy" && <p className="policy-copy">{t.privacyText}</p>}
        {panel === "terms" && <p className="policy-copy">{t.termsText}</p>}
        {panel === "compliance" && <p className="policy-copy">{t.complianceText}</p>}
        {notice && <p className="notice" role="status">{notice}</p>}
      </div>
    </dialog>
  </>;
}

function CropSequence({ language, search = "" }: { language: Language; search?: string }) {
  const t = content[language];
  const crops = t.crops.filter((crop, index) => `${crop.name} ${crop.variety} ${content.en.crops[index].name} ${content.en.crops[index].variety}`.toLocaleLowerCase().includes(search.trim().toLocaleLowerCase()));
  if (!crops.length) return <p className="empty-state">{t.noCrops}</p>;
  return <div className="three-column crop-sequence">{crops.map(crop => <article className="crop-card" key={crop.name}><div className="crop-season"><span>{crop.season}</span><time>{crop.dates}</time></div><h4>{crop.name}</h4><span className="crop-variety">{crop.variety}</span><p>{crop.description}</p><div className="crop-detail"><span>{crop.detail}</span><strong>{crop.value}</strong></div></article>)}</div>;
}
