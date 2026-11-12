"use client";
import {T,useLanguage} from "@/lib/language";
import { FarmLocation, FarmDetails } from "@/components/farm-location";
import { FarmContextBar, ActiveFarmLabel, CropStatus, FarmConditions, WeatherDashboard, ClimateHistory } from "@/components/live-dashboard";
import { PhotoUpload, SoilTests } from "@/components/field-controls";
import Link from "next/link";
import { FarmerProfileText } from "@/components/farmer-profile";
const assetPathPrefix = "/figma/feedback";
const imgVector = `${assetPathPrefix}/b57fe.svg`;
const imgVector1 = `${assetPathPrefix}/6e50b.svg`;
const imgVector2 = `${assetPathPrefix}/26553.svg`;
const imgImage = `${assetPathPrefix}/0818d.svg`;
const imgSvg = `${assetPathPrefix}/28399.svg`;
const imgSvg1 = `${assetPathPrefix}/2d5dc.svg`;
const imgSvg2 = `${assetPathPrefix}/fd3a3.svg`;
const imgSvg3 = `${assetPathPrefix}/58dc6.svg`;
const imgSvg4 = `${assetPathPrefix}/a9bf8.svg`;
const imgSvg5 = `${assetPathPrefix}/10a03.svg`;
const imgSvg6 = `${assetPathPrefix}/300fc.svg`;
const imgSvg7 = `${assetPathPrefix}/809e0.svg`;
const imgContainer = `${assetPathPrefix}/37a44.svg`;
const imgContainer1 = `${assetPathPrefix}/59e02.svg`;
export default function Feedback() {
    const {t,language}=useLanguage();
    return (<div className="figma-189" data-node-id="115:719" style={{ backgroundImage: "linear-gradient(90deg, rgb(250, 248, 242) 0%, rgb(250, 248, 242) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Feedback">
      <div className="figma-258" data-node-id="115:720" data-name="MainContent">
        <div className="figma-259" data-node-id="115:721" data-name="Section - Title & Breadcrumb Block">
          <div className="figma-209" data-node-id="115:722" data-name="Container">
            <div className="figma-260" data-node-id="115:723" data-name="Background"/>
            <div className="figma-211" data-node-id="115:724" data-name="Margin">
              <div className="figma-261" data-node-id="115:725">
                <p className="figma-59"><T text="COMMUNITY & AGRONOMY DESK"/></p>
              </div>
            </div>
            <div className="figma-211" data-node-id="115:726" data-name="Margin">
              <div className="figma-262" data-node-id="115:727">
                <p className="figma-59"><T text="/"/></p>
              </div>
            </div>
            <div className="figma-211" data-node-id="115:728" data-name="Margin">
              <div className="figma-263" data-node-id="115:729">
                <p className="figma-59"><T text="LOCAL FARM FEEDBACK"/></p>
              </div>
            </div>
          </div>
          <div className="figma-264" data-node-id="115:730" data-name="Heading 1">
            <div className="figma-265" data-node-id="115:731">
              <p className="figma-266"><T text="Farm Feedback & Advisory Desk"/></p>
            </div>
          </div>
          <div className="figma-32" data-node-id="115:732" data-name="Container">
            <div className="figma-267" data-node-id="115:733">
              <p className="figma-84"><T text="Share field issues, report crop results, or ask local agronomists for guidance."/></p>
            </div>
          </div>
        </div>
        <div className="figma-268" data-node-id="115:734" data-name="Main Two-Column Layout">
          <div className="figma-269" data-node-id="115:735" data-name="Section - LeftFormColumn">
            <div className="figma-270" data-node-id="115:736" data-name="Primary Form Box">
              <div className="figma-24" data-node-id="115:737" data-name="Container">
                <div className="figma-271">
                  <div className="figma-32" data-node-id="115:738" data-name="Heading 2">
                    <div className="figma-272" data-node-id="115:739">
                      <p className="figma-84"><T text="Step 1: What are you reporting?"/></p>
                    </div>
                  </div>
                  <div className="figma-273" data-node-id="115:740" data-name="Container">
                    <button type="button" data-action={"Crop or Pest Issue"} className="figma-274" data-node-id="115:741" data-name="Button">
                      <div className="figma-275" data-node-id="115:742" data-name="SVG:margin">
                        <div className="figma-276">
                          <div className="figma-277" data-node-id="115:743" data-name="SVG">
                            <div className="figma-278" data-node-id="115:744" data-name="SVG">
                              <div className="figma-279" data-node-id="115:745" data-name="Vector">
                                <div className="figma-280">
                                  <img alt="" className="figma-281" src={imgVector}/>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="figma-38" data-node-id="115:746" data-name="Container">
                        <div className="figma-139">
                          <div className="figma-282" data-node-id="115:747">
                            <p className="figma-283"><T text="Crop or Pest Issue"/></p>
                          </div>
                        </div>
                      </div>
                    </button>
                    <button type="button" data-action={"Rotation Plan Feedback"} className="figma-284" data-node-id="115:748" data-name="Button">
                      <div className="figma-275" data-node-id="115:749" data-name="SVG:margin">
                        <div className="figma-276">
                          <div className="figma-277" data-node-id="115:750" data-name="SVG">
                            <div className="figma-278" data-node-id="115:751" data-name="SVG">
                              <div className="figma-285" data-node-id="115:752" data-name="Vector">
                                <div className="figma-286">
                                  <img alt="" className="figma-281" src={imgVector1}/>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="figma-38" data-node-id="115:753" data-name="Container">
                        <div className="figma-139">
                          <div className="figma-287" data-node-id="115:754">
                            <p className="figma-288"><T text="Rotation Plan"/></p>
                            <p className="figma-283"><T text="Feedback"/></p>
                          </div>
                        </div>
                      </div>
                    </button>
                    <button type="button" data-action={"General Question"} className="figma-289" data-node-id="115:755" data-name="Button">
                      <div className="figma-275" data-node-id="115:756" data-name="SVG:margin">
                        <div className="figma-276">
                          <div className="figma-277" data-node-id="115:757" data-name="SVG">
                            <div className="figma-278" data-node-id="115:758" data-name="SVG">
                              <div className="figma-290" data-node-id="115:759" data-name="Vector">
                                <div className="figma-291">
                                  <img alt="" className="figma-281" src={imgVector2}/>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="figma-38" data-node-id="115:760" data-name="Container">
                        <div className="figma-139">
                          <div className="figma-287" data-node-id="115:761">
                            <p className="figma-283"><T text="General Question"/></p>
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="figma-24" data-node-id="115:762" data-name="Container">
                <div className="figma-292">
                  <div className="figma-5" data-node-id="115:763" data-name="Container">
                    <div className="figma-13" data-node-id="115:764" data-name="Label">
                      <div className="figma-293" data-node-id="115:765">
                        <p className="figma-84"><T text="Step 2: Select your plot"/></p>
                      </div>
                    </div>
                    <div className="figma-294" data-node-id="115:766" data-name="Overlay+Border">
                      <div className="figma-295" data-node-id="115:767">
                        <p className="figma-59"><T text="Auto-detected"/></p>
                      </div>
                    </div>
                  </div>
                  <div className="figma-296" data-node-id="115:768" data-name="Options">
                    <div className="figma-297" data-node-id="115:769" data-name="image clip">
                      <div className="figma-298">
                        <div className="figma-299" data-node-id="115:770" data-name="image">
                          <img alt="" className="figma-17" src={imgImage}/>
                        </div>
                      </div>
                    </div>
                    <div className="figma-97" data-node-id="115:772" data-name="Container">
                      <div className="figma-25">
                        <ActiveFarmLabel kind="name"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="figma-24" data-node-id="115:774" data-name="Container">
                <div className="figma-300">
                  <div className="figma-32" data-node-id="115:775" data-name="Label">
                    <div className="figma-272" data-node-id="115:776">
                      <p className="figma-84"><T text="Step 3: Your observation or question"/></p>
                    </div>
                  </div>
                  <textarea name="observation" aria-label={t("observation")} placeholder={t("e.g. Yellow leaves on Boro rice after cold spell, or seeds did not sprout\u2026")} className="figma-301" data-node-id="115:777" data-name="Textarea"></textarea>
                </div>
              </div>
              <div className="figma-24" data-node-id="115:780" data-name="Container">
                <div className="figma-302">
                  <PhotoUpload />
                  <div className="figma-13" data-node-id="115:787" data-name="Container">
                    <div className="figma-295" data-node-id="115:788">
                      <p className="figma-59"><T text="Max 10MB (JPEG, PNG)"/></p>
                    </div>
                  </div>
                </div>
              </div>
              <button type="button" data-action={"▷ Submit Feedback"} className="figma-303" data-node-id="115:789" data-name="Button">
                <div className="figma-304">
                  <div className="figma-19" data-node-id="115:790" data-name="Container">
                    <div className="figma-305" data-node-id="115:791">
                      <p className="figma-84"><T text="▷"/></p>
                    </div>
                  </div>
                  <div className="figma-19" data-node-id="115:792" data-name="Container">
                    <div className="figma-306" data-node-id="115:793">
                      <p className="figma-84"><T text="Submit Feedback"/></p>
                    </div>
                  </div>
                </div>
              </button>
              <div className="figma-24" data-node-id="115:794" data-name="Container">
                <div className="figma-307">
                  <div className="figma-193" data-node-id="115:795" data-name="SVG">
                    <img alt="" className="figma-17" src={imgSvg1}/>
                  </div>
                  <div className="figma-13" data-node-id="115:797" data-name="Container">
                    <div className="figma-308" data-node-id="115:798">
                      <p className="figma-59"><T text="Feedback is saved on the local server. Expert replies are not connected."/></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="figma-309" data-node-id="115:799" data-name="Emergency Pest Hotline Banner">
              <div className="figma-38" data-node-id="115:800" data-name="Container">
                <div className="figma-150">
                  <div className="figma-193" data-node-id="115:801" data-name="SVG">
                    <img alt="" className="figma-17" src={imgSvg2}/>
                  </div>
                  <div className="figma-13" data-node-id="115:803" data-name="Container">
                    <div className="figma-310" data-node-id="115:804">
                      <p>
                        <span className="figma-15"><T text="Emergency pest outbreak? Call Extension Hotline "/></span>
                        <span className="figma-311"><T text="16123"/></span>
                        <span className="figma-15"><T text="."/></span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="figma-38" data-node-id="115:805" data-name="Container">
                <div className="figma-25">
                  <div className="figma-312" data-node-id="115:806">
                    <p className="figma-59"><T text="TOLL-FREE"/></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="figma-313" data-node-id="115:807" data-name="Section - RightReportsColumn">
            <div className="figma-314" data-node-id="115:808" data-name="Container">
              <div className="figma-13" data-node-id="115:809" data-name="Container">
                <div className="figma-32" data-node-id="115:810" data-name="Container">
                  <div className="figma-315" data-node-id="115:811">
                    <p className="figma-59"><T text="CASE ARCHIVE"/></p>
                  </div>
                </div>
                <div className="figma-32" data-node-id="115:812" data-name="Heading 2">
                  <div className="figma-316" data-node-id="115:813">
                    <p className="figma-31"><T text="Example previous reports (2)"/></p>
                  </div>
                </div>
              </div>
              <div className="figma-317" data-node-id="115:814" data-name="Background+Border">
                <div className="figma-318" data-node-id="115:815">
                  <p className="figma-59"><T text="Verified"/></p>
                </div>
              </div>
            </div>
            <div className="figma-319" data-node-id="115:816" data-name="Article">
              <div className="figma-24" data-node-id="115:817" data-name="Container">
                <div className="figma-320">
                  <div className="figma-192" data-node-id="115:818" data-name="Container">
                    <div className="figma-13" data-node-id="115:819" data-name="Container">
                      <div className="figma-321" data-node-id="115:820">
                        <p className="figma-15"><T text="12 Feb 2025"/></p>
                      </div>
                    </div>
                    <div className="figma-211" data-node-id="115:821" data-name="Margin">
                      <div className="figma-322" data-node-id="115:822">
                        <p className="figma-59"><T text="•"/></p>
                      </div>
                    </div>
                    <div className="figma-211" data-node-id="115:823" data-name="Margin">
                      <div className="figma-323" data-node-id="115:824">
                        <p className="figma-15"><T text="#HV-8902"/></p>
                      </div>
                    </div>
                    <div className="figma-211" data-node-id="115:825" data-name="Margin">
                      <div className="figma-322" data-node-id="115:826">
                        <p className="figma-59"><T text="•"/></p>
                      </div>
                    </div>
                    <div className="figma-211" data-node-id="115:827" data-name="Margin">
                      <div className="figma-324" data-node-id="115:828">
                        <p className="figma-15"><T text="Plot 4"/></p>
                      </div>
                    </div>
                  </div>
                  <div className="figma-325" data-node-id="115:829" data-name="Background">
                    <div className="figma-326" data-node-id="115:830">
                      <p className="figma-59"><T text="EXAMPLE RESPONSE · NOT CONNECTED"/></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="figma-24" data-node-id="115:831" data-name="Container">
                <div className="figma-327">
                  <div className="figma-32" data-node-id="115:832" data-name="Heading 3">
                    <div className="figma-272" data-node-id="115:833">
                      <p className="figma-84"><T text="Mungbean root nodulation check"/></p>
                    </div>
                  </div>
                  <div className="figma-328" data-node-id="115:834" data-name="Container">
                    <div className="figma-329" data-node-id="115:835">
                      <p className="figma-330"><T text="Observed lower pink nodule formation than expected at Day 22"/></p>
                      <p className="figma-331"><T text="post-sowing."/></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="figma-332" data-node-id="115:836" data-name="Background+Border">
                <div className="figma-333">
                  <div className="figma-24" data-node-id="115:837" data-name="Container">
                    <div className="figma-150">
                      <div className="figma-193" data-node-id="115:838" data-name="SVG">
                        <img alt="" className="figma-17" src={imgSvg3}/>
                      </div>
                      <div className="figma-13" data-node-id="115:840" data-name="Container">
                        <div className="figma-321" data-node-id="115:841">
                          <p className="figma-15"><T text="Example agronomist response:"/></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="figma-24" data-node-id="115:842" data-name="Container">
                    <div className="figma-334">
                      <div className="figma-335" data-node-id="115:843">
                        <p className="figma-330"><T text="“Root nodulation is normal for Day 22 under current soil"/></p>
                        <p className="figma-331"><T text="temperatures. Resume light irrigation as scheduled.”"/></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="figma-319" data-node-id="115:844" data-name="Article">
              <div className="figma-24" data-node-id="115:845" data-name="Container">
                <div className="figma-320">
                  <div className="figma-192" data-node-id="115:846" data-name="Container">
                    <div className="figma-13" data-node-id="115:847" data-name="Container">
                      <div className="figma-321" data-node-id="115:848">
                        <p className="figma-15"><T text="28 Jan 2025"/></p>
                      </div>
                    </div>
                    <div className="figma-211" data-node-id="115:849" data-name="Margin">
                      <div className="figma-322" data-node-id="115:850">
                        <p className="figma-59"><T text="•"/></p>
                      </div>
                    </div>
                    <div className="figma-211" data-node-id="115:851" data-name="Margin">
                      <div className="figma-323" data-node-id="115:852">
                        <p className="figma-15"><T text="#HV-8741"/></p>
                      </div>
                    </div>
                    <div className="figma-211" data-node-id="115:853" data-name="Margin">
                      <div className="figma-322" data-node-id="115:854">
                        <p className="figma-59"><T text="•"/></p>
                      </div>
                    </div>
                    <div className="figma-211" data-node-id="115:855" data-name="Margin">
                      <div className="figma-324" data-node-id="115:856">
                        <p className="figma-15"><T text="Plot 4"/></p>
                      </div>
                    </div>
                  </div>
                  <div className="figma-336" data-node-id="115:857" data-name="Background">
                    <div className="figma-337" data-node-id="115:858">
                      <p className="figma-59"><T text="FEEDBACK RECEIVED"/></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="figma-24" data-node-id="115:859" data-name="Container">
                <div className="figma-327">
                  <div className="figma-32" data-node-id="115:860" data-name="Heading 3">
                    <div className="figma-272" data-node-id="115:861">
                      <p className="figma-84"><T text="Standing water drainage issue"/></p>
                    </div>
                  </div>
                  <div className="figma-328" data-node-id="115:862" data-name="Container">
                    <div className="figma-329" data-node-id="115:863">
                      <p className="figma-330"><T text="Inflow from north ridge submerged mustard bed roots after"/></p>
                      <p className="figma-331"><T text="unexpected rainfall."/></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="figma-24" data-node-id="115:864" data-name="Container">
                <div className="figma-338">
                  <div className="figma-193" data-node-id="115:865" data-name="SVG">
                    <img alt="" className="figma-17" src={imgSvg4}/>
                  </div>
                  <div className="figma-13" data-node-id="115:868" data-name="Container">
                    <div className="figma-308" data-node-id="115:869">
                      <p className="figma-59"><T text="Example status — no expert review is scheduled."/></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="figma-339" data-node-id="115:870" data-name="Background+Border">
              <div className="figma-340" data-node-id="115:871" data-name="SVG:margin">
                <div className="figma-341">
                  <div className="figma-132" data-node-id="115:872" data-name="SVG">
                    <img alt="" className="figma-17" src={imgSvg5}/>
                  </div>
                </div>
              </div>
              <div className="figma-38" data-node-id="115:874" data-name="Container">
                <div className="figma-342">
                  <div className="figma-32" data-node-id="115:875" data-name="Container">
                    <div className="figma-321" data-node-id="115:876">
                      <p className="figma-15"><T text="Feedback status"/></p>
                    </div>
                  </div>
                  <div className="figma-32" data-node-id="115:877" data-name="Container">
                    <div className="figma-308" data-node-id="115:878">
                      <p className="figma-214"><T text="Reports are saved for the farmer. No agricultural officer review service is connected."/></p>
                      <p className="figma-215"><T text="Call 16123 or contact the local agriculture office when expert help is needed."/></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="figma-343" data-node-id="115:879" data-name="MainFooter:margin">
        <div className="figma-344" data-node-id="115:880" data-name="MainFooter">
          <div className="figma-155" data-node-id="115:881" data-name="Container">
            <div className="figma-345">
              <div className="figma-346" data-node-id="115:882" data-name="Container">
                <div className="figma-347" data-node-id="115:883" data-name="Container">
                  <div className="figma-348" data-node-id="115:884" data-name="Container">
                    <div className="figma-349" data-node-id="115:885" data-name="Background">
                      <div className="figma-193" data-node-id="115:886" data-name="SVG">
                        <img alt="" className="figma-17" src={imgSvg6}/>
                      </div>
                    </div>
                    <div className="figma-13" data-node-id="115:888" data-name="Container">
                      <div className="figma-350" data-node-id="115:889">
                        <p className="figma-31"><T text="HarvestV"/></p>
                      </div>
                    </div>
                  </div>
                  <div className="figma-351" data-node-id="115:890" data-name="Container">
                    <div className="figma-352" data-node-id="115:891">
                      <p className="figma-214"><T text="Agro-minimal planning and precision crop"/></p>
                      <p className="figma-215"><T text="rotation for progressive Bangladeshi farmers."/></p>
                    </div>
                  </div>
                </div>
                <div className="figma-353" data-node-id="115:892" data-name="Container">
                  <div className="figma-32" data-node-id="115:893" data-name="Heading 4">
                    <div className="figma-354" data-node-id="115:894">
                      <p className="figma-59"><T text="EMERGENCY & SUPPORT"/></p>
                    </div>
                  </div>
                  <div className="figma-355" data-node-id="115:895" data-name="Container">
                    <div className="figma-193" data-node-id="115:896" data-name="SVG">
                      <img alt="" className="figma-17" src={imgSvg2}/>
                    </div>
                    <div className="figma-13" data-node-id="115:898" data-name="Container">
                      <div className="figma-293" data-node-id="115:899">
                        <p className="figma-84"><T text="16123"/></p>
                      </div>
                    </div>
                  </div>
                  <div className="figma-32" data-node-id="115:900" data-name="Container">
                    <div className="figma-352" data-node-id="115:901">
                      <p className="figma-214"><T text="National Agricultural Extension Call Center (Toll"/></p>
                      <p className="figma-215"><T text="Free)"/></p>
                    </div>
                  </div>
                </div>
                <div className="figma-141" data-node-id="115:902" data-name="Container">
                  <div className="figma-32" data-node-id="115:903" data-name="Heading 4">
                    <div className="figma-354" data-node-id="115:904">
                      <p className="figma-59"><T text="REFERENCE INSTITUTIONS"/></p>
                    </div>
                  </div>
                  <div className="figma-32" data-node-id="115:905" data-name="Container">
                    <div className="figma-356" data-node-id="115:906">
                      <p className="figma-214"><T text="BARI (Bangladesh Agricultural Research"/></p>
                      <p className="figma-215"><T text="Institute)"/></p>
                    </div>
                  </div>
                  <div className="figma-32" data-node-id="115:907" data-name="Container">
                    <div className="figma-356" data-node-id="115:908">
                      <p className="figma-215"><T text="BRRI (Bangladesh Rice Research Institute)"/></p>
                    </div>
                  </div>
                  <div className="figma-357" data-node-id="115:909" data-name="Container">
                    <div className="figma-358" data-node-id="115:910">
                      <p className="figma-359"><T text="Field agronomy advisory calibrated with national"/></p>
                      <p className="figma-360"><T text="seed standards."/></p>
                    </div>
                  </div>
                </div>
                <div className="figma-361" data-node-id="115:911" data-name="Container">
                  <div className="figma-32" data-node-id="115:912" data-name="Heading 4">
                    <div className="figma-354" data-node-id="115:913">
                      <p className="figma-59"><T text="AGRONOMIC GOVERNANCE"/></p>
                    </div>
                  </div>
                  <div className="figma-259" data-node-id="115:914" data-name="List">
                    <div className="figma-32" data-node-id="115:915" data-name="Item">
                      <div className="figma-352" data-node-id="115:916">
                        <p className="figma-59"><T text="Crop Advisory Terms"/></p>
                      </div>
                    </div>
                    <div className="figma-32" data-node-id="115:917" data-name="Item">
                      <div className="figma-352" data-node-id="115:918">
                        <p className="figma-59"><T text="Privacy & Field Data Rights"/></p>
                      </div>
                    </div>
                    <div className="figma-32" data-node-id="115:919" data-name="Item">
                      <div className="figma-352" data-node-id="115:920">
                        <p className="figma-59"><T text="Soil Health Guidelines"/></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="figma-362" data-node-id="115:921" data-name="HorizontalBorder">
                <div className="figma-38" data-node-id="115:922" data-name="Container">
                  <div className="figma-25">
                    <div className="figma-363" data-node-id="115:923">
                      <p className="figma-59"><T text="© 2024 HarvestV Agronomy Systems. Developed under agro-minimal stewardship."/></p>
                    </div>
                  </div>
                </div>
                <div className="figma-38" data-node-id="115:924" data-name="Container">
                  <div className="figma-239">
                    <div className="figma-193" data-node-id="115:925" data-name="SVG">
                      <img alt="" className="figma-17" src={imgSvg7}/>
                    </div>
                    <div className="figma-13" data-node-id="115:927" data-name="Container">
                      <div className="figma-318" data-node-id="115:928">
                        <p className="figma-59"><T text="Reference Library · Local Validation Required"/></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="figma-175" data-node-id="117:7134" data-name="Header">
        <div className="figma-176" data-node-id="117:7135" data-name="Container">
          <div className="figma-177">
            <button type="button" data-action={"HarvestV CROP PLANNING & AGRONOMY"} className="figma-108" data-node-id="117:7136" data-name="Link">
              <div className="figma-178" data-node-id="117:7137" data-name="Background">
                <div className="figma-86" data-node-id="117:7138" data-name="Container">
                  <img alt="" className="figma-17" src={imgContainer}/>
                </div>
              </div>
              <div className="figma-13" data-node-id="117:7140" data-name="Container">
                <div className="figma-32" data-node-id="117:7141" data-name="Container">
                  <div className="figma-179" data-node-id="117:7142">
                    <p className="figma-31"><T text="HarvestV"/></p>
                  </div>
                </div>
                <div className="figma-32" data-node-id="117:7143" data-name="Container">
                  <div className="figma-364" data-node-id="117:7144">
                    <p className="figma-8"><T text="CROP PLANNING & AGRONOMY"/></p>
                  </div>
                </div>
              </div>
            </button>
            <div className="figma-48" data-node-id="117:7145" data-name="Nav">
              <Link href="/" className="figma-180" data-node-id="117:7146" data-name="Link">
                <div className="figma-87" data-node-id="117:7147">
                  <p className="figma-15"><T text="Home"/></p>
                </div>
              </Link>
              <Link href="/dashboard" className="figma-180" data-node-id="117:7148" data-name="Link">
                <div className="figma-87" data-node-id="117:7149">
                  <p className="figma-15"><T text="Dashboard"/></p>
                </div>
              </Link>
              <Link href="/my-farm" className="figma-180" data-node-id="117:7150" data-name="Link">
                <div className="figma-87" data-node-id="117:7151">
                  <p className="figma-15"><T text="My Farm"/></p>
                </div>
              </Link>
              <Link href="/crop-rotation" className="figma-180" data-node-id="117:7152" data-name="Link">
                <div className="figma-87" data-node-id="117:7153">
                  <p className="figma-15"><T text="Crop Rotation"/></p>
                </div>
              </Link>
              <Link href="/information-check" className="figma-180" data-node-id="117:7154" data-name="Link">
                <div className="figma-87" data-node-id="117:7155">
                  <p className="figma-15"><T text="Information Check"/></p>
                </div>
              </Link>
              <Link href="/feedback" className="figma-181" data-node-id="117:7156" data-name="Link">
                <div className="figma-182" data-node-id="117:7157">
                  <p className="figma-84"><T text="Feedback"/></p>
                </div>
              </Link>
            </div>
            <div className="figma-48" data-node-id="117:7158" data-name="Container">
              <div className="figma-183" data-node-id="117:7159" data-name="Background+Border">
                <button type="button" data-action={"EN"} aria-pressed={language === "en"} lang="en" className="figma-62" data-node-id="117:7160" data-name="Button">
                  <div className="figma-63">
                    <div className="figma-64" data-node-id="117:7161">
                      <p className="figma-59"><T text="EN"/></p>
                    </div>
                  </div>
                </button>
                <button type="button" data-action={"বাংলা"} aria-pressed={language === "bn"} lang="bn" className="figma-38" data-node-id="117:7162" data-name="Button">
                  <div className="figma-63">
                    <div className="figma-184" data-node-id="117:7163">
                      <p className="figma-59"><T text="বাংলা"/></p>
                    </div>
                  </div>
                </button>
              </div>
              <div className="figma-185" data-node-id="117:7164" data-name="Background+Border">
                <div className="figma-38" data-node-id="117:7165" data-name="Container">
                  <div className="figma-25">
                    <div className="figma-186" data-node-id="117:7166" data-name="Container">
                      <div className="figma-187" data-node-id="117:7167">
                        <p className="figma-59"><FarmerProfileText /></p>
                      </div>
                    </div>
                    <div className="figma-186" data-node-id="117:7168" data-name="Container">
                      <div className="figma-188" data-node-id="117:7169">
                        <p className="figma-8"><FarmerProfileText field="phone" /></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="figma-95" data-node-id="117:7170" data-name="Background">
                  <div className="figma-96">
                    <div className="figma-16" data-node-id="117:7171" data-name="Container">
                      <img alt="" className="figma-17" src={imgContainer1}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);
}
