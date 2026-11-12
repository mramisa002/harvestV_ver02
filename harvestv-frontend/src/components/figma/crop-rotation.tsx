"use client";
import {T,useLanguage} from "@/lib/language";
import RotationPlanner from "@/components/rotation-planner";
import { FarmLocation, FarmDetails } from "@/components/farm-location";
import { FarmContextBar, ActiveFarmLabel, CropStatus, FarmConditions, WeatherDashboard, ClimateHistory } from "@/components/live-dashboard";
import { PhotoUpload, SoilTests } from "@/components/field-controls";
import Link from "next/link";
import { FarmerProfileText } from "@/components/farmer-profile";
const assetPathPrefix = "/figma/crop-rotation";
const imgSvg = `${assetPathPrefix}/e653f.svg`;
const imgSvg1 = `${assetPathPrefix}/93e39.svg`;
const imgSvg2 = `${assetPathPrefix}/07807.svg`;
const imgSvg3 = `${assetPathPrefix}/d6ffc.svg`;
const imgSvg4 = `${assetPathPrefix}/795a3.svg`;
const imgSvg5 = `${assetPathPrefix}/f816f.svg`;
const imgSvg6 = `${assetPathPrefix}/bdf1d.svg`;
const imgSvg7 = `${assetPathPrefix}/7c641.svg`;
const imgSvg8 = `${assetPathPrefix}/43f91.svg`;
const imgSvg9 = `${assetPathPrefix}/256c0.svg`;
const imgSvg10 = `${assetPathPrefix}/98728.svg`;
const imgSvg11 = `${assetPathPrefix}/afbd4.svg`;
const imgSvg12 = `${assetPathPrefix}/cc6e5.svg`;
const imgSvg13 = `${assetPathPrefix}/5a8f9.svg`;
const imgSvg14 = `${assetPathPrefix}/5856e.svg`;
const imgSvg15 = `${assetPathPrefix}/90b41.svg`;
const imgSvg16 = `${assetPathPrefix}/88c15.svg`;
const imgSvg17 = `${assetPathPrefix}/ac7f9.svg`;
const imgSvg18 = `${assetPathPrefix}/fce32.svg`;
const imgSvg19 = `${assetPathPrefix}/9753e.svg`;
const imgSvg20 = `${assetPathPrefix}/13ac1.svg`;
const imgSvg21 = `${assetPathPrefix}/5571c.svg`;
const imgSvg22 = `${assetPathPrefix}/bede0.svg`;
const imgSvg23 = `${assetPathPrefix}/70e2e.svg`;
const imgSvg24 = `${assetPathPrefix}/3d299.svg`;
const imgSvg25 = `${assetPathPrefix}/fd420.svg`;
const imgContainer = `${assetPathPrefix}/ef492.svg`;
const imgContainer1 = `${assetPathPrefix}/04aa5.svg`;
export default function CropRotation() {
    const {t,language}=useLanguage();
    return (<div className="figma-189" data-node-id="126:976" style={{ backgroundImage: "linear-gradient(90deg, rgb(247, 245, 239) 0%, rgb(247, 245, 239) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Crop-Rotation">
      <div className="figma-190" data-node-id="126:977" data-name="Section - SubStepperHeader">
        <div className="figma-155" data-node-id="126:978" data-name="Container">
          <div className="figma-191">
            <div className="figma-192" data-node-id="126:979" data-name="Steps Indicator">
              <div className="figma-192" data-node-id="126:980" data-name="Container">
                <div className="figma-193" data-node-id="126:981" data-name="SVG">
                  <img alt="" className="figma-17" src={imgSvg}/>
                </div>
                <div className="figma-194" data-node-id="126:983" data-name="Margin">
                  <div className="figma-195" data-node-id="126:984">
                    <p className="figma-59"><T text="Step 1: Farm Selected"/></p>
                  </div>
                </div>
              </div>
              <div className="figma-196" data-node-id="126:985" data-name="Margin">
                <div className="figma-197" data-node-id="126:986">
                  <p className="figma-59"><T text="•"/></p>
                </div>
              </div>
              <div className="figma-196" data-node-id="126:987" data-name="Margin">
                <div className="figma-198" data-node-id="126:988" data-name="Background+Border">
                  <div className="figma-199" data-node-id="126:989" data-name="Border">
                    <div className="figma-200">
                      <div className="figma-201" data-node-id="126:990" data-name="Background"/>
                    </div>
                  </div>
                  <div className="figma-38" data-node-id="126:991" data-name="Margin">
                    <div className="figma-202">
                      <div className="figma-203" data-node-id="126:992">
                        <p className="figma-59"><T text="Step 2: Choose Your 3-Season Plan"/></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ActiveFarmLabel kind="name"/>
          </div>
        </div>
      </div>
      <RotationPlanner />
      <div className="figma-204" data-node-id="126:1273" data-name="MainFooter:margin">
        <div className="figma-205" data-node-id="126:1274" data-name="MainFooter">
          <div className="figma-155" data-node-id="126:1275" data-name="Container">
            <div className="figma-206">
              <div className="figma-207" data-node-id="126:1276" data-name="4 Columns Footer Content">
                <div className="figma-208" data-node-id="126:1277" data-name="Brand Info">
                  <div className="figma-209" data-node-id="126:1278" data-name="Container">
                    <div className="figma-210" data-node-id="126:1279" data-name="Background">
                      <div className="figma-193" data-node-id="126:1280" data-name="SVG">
                        <img alt="" className="figma-17" src={imgSvg23}/>
                      </div>
                    </div>
                    <div className="figma-211" data-node-id="126:1282" data-name="Margin">
                      <div className="figma-212" data-node-id="126:1283">
                        <p className="figma-31"><T text="HarvestV"/></p>
                      </div>
                    </div>
                  </div>
                  <div className="figma-32" data-node-id="126:1284" data-name="Container">
                    <div className="figma-213" data-node-id="126:1285">
                      <p className="figma-214"><T text="Agro-minimal planning and precision crop"/></p>
                      <p className="figma-215"><T text="rotation for progressive Bangladeshi farmers."/></p>
                    </div>
                  </div>
                </div>
                <div className="figma-216" data-node-id="126:1286" data-name="Emergency & Support Helpline">
                  <div className="figma-32" data-node-id="126:1287" data-name="Heading 5">
                    <div className="figma-217" data-node-id="126:1288">
                      <p className="figma-15"><T text="Emergency & Support"/></p>
                    </div>
                  </div>
                  <div className="figma-218" data-node-id="126:1289" data-name="Container">
                    <div className="figma-132" data-node-id="126:1290" data-name="SVG">
                      <img alt="" className="figma-17" src={imgSvg24}/>
                    </div>
                    <div className="figma-211" data-node-id="126:1292" data-name="Margin">
                      <div className="figma-219" data-node-id="126:1293">
                        <p className="figma-10"><T text="16123"/></p>
                      </div>
                    </div>
                  </div>
                  <div className="figma-32" data-node-id="126:1294" data-name="Container">
                    <div className="figma-220" data-node-id="126:1295">
                      <p className="figma-59"><T text="National Agricultural Extension Call Center (Toll Free)"/></p>
                    </div>
                  </div>
                </div>
                <div className="figma-141" data-node-id="126:1296" data-name="Reference Institutions">
                  <div className="figma-32" data-node-id="126:1297" data-name="Heading 5">
                    <div className="figma-217" data-node-id="126:1298">
                      <p className="figma-15"><T text="Reference Institutions"/></p>
                    </div>
                  </div>
                  <div className="figma-111" data-node-id="126:1299" data-name="Container">
                    <div className="figma-221" data-node-id="126:1300">
                      <p className="figma-59"><T text="BARI (Bangladesh Agricultural Research Institute)"/></p>
                    </div>
                  </div>
                  <div className="figma-32" data-node-id="126:1301" data-name="Container">
                    <div className="figma-221" data-node-id="126:1302">
                      <p className="figma-59"><T text="BRRI (Bangladesh Rice Research Institute)"/></p>
                    </div>
                  </div>
                  <div className="figma-222" data-node-id="126:1303" data-name="Container">
                    <div className="figma-223" data-node-id="126:1304">
                      <p className="figma-224"><T text="Field agronomy advisory calibrated with national seed"/></p>
                      <p className="figma-225"><T text="standards."/></p>
                    </div>
                  </div>
                </div>
                <div className="figma-226" data-node-id="126:1305" data-name="Agronomic Governance Links">
                  <div className="figma-32" data-node-id="126:1306" data-name="Heading 5">
                    <div className="figma-217" data-node-id="126:1307">
                      <p className="figma-15"><T text="Agronomic Governance"/></p>
                    </div>
                  </div>
                  <div className="figma-172" data-node-id="126:1308" data-name="List">
                    <div className="figma-32" data-node-id="126:1309" data-name="Item">
                      <div className="figma-227" data-node-id="126:1310">
                        <p className="figma-228"><T text="Crop Advisory Terms"/></p>
                      </div>
                    </div>
                    <div className="figma-32" data-node-id="126:1311" data-name="Item">
                      <div className="figma-227" data-node-id="126:1312">
                        <p className="figma-228"><T text="Privacy & Field Data Rights"/></p>
                      </div>
                    </div>
                    <div className="figma-32" data-node-id="126:1313" data-name="Item">
                      <div className="figma-227" data-node-id="126:1314">
                        <p className="figma-228"><T text="Soil Health Guidelines"/></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="figma-229" data-node-id="126:1315" data-name="Bottom Copyright & Verification Badge">
                <div className="figma-38" data-node-id="126:1316" data-name="Container">
                  <div className="figma-25">
                    <div className="figma-230" data-node-id="126:1317">
                      <p className="figma-59"><T text="© 2024 HarvestV Agronomy Systems. Developed under agro-minimal stewardship."/></p>
                    </div>
                  </div>
                </div>
                <div className="figma-231" data-node-id="126:1318" data-name="Background">
                  <div className="figma-232">
                    <div className="figma-193" data-node-id="126:1319" data-name="SVG">
                      <img alt="" className="figma-17" src={imgSvg25}/>
                    </div>
                    <div className="figma-194" data-node-id="126:1321" data-name="Margin">
                      <div className="figma-233" data-node-id="126:1322">
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
      <div className="figma-234" data-node-id="117:7234" data-name="Header">
        <div className="figma-38" data-node-id="117:7235" data-name="Container">
          <div className="figma-55">
            <button type="button" data-action={"HarvestV"} className="figma-108" data-node-id="117:7236" data-name="Link">
              <div className="figma-235" data-node-id="117:7237" data-name="Background">
                <div className="figma-236" data-node-id="117:7238" data-name="Container">
                  <img alt="" className="figma-17" src={imgContainer}/>
                </div>
              </div>
              <div className="figma-13" data-node-id="117:7240" data-name="Container">
                <div className="figma-32" data-node-id="117:7241" data-name="Container">
                  <div className="figma-179" data-node-id="117:7242">
                    <p className="figma-31"><T text="HarvestV"/></p>
                  </div>
                </div>
              </div>
            </button>
            <div className="figma-237" data-node-id="117:7243" data-name="Background+Border">
              <div className="figma-238" data-node-id="117:7244" data-name="Container">
                <img alt="" className="figma-17" src={imgContainer1}/>
              </div>
              <div className="figma-38" data-node-id="117:7246" data-name="Container">
                <div className="figma-25">
                  <ActiveFarmLabel kind="name"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="figma-38" data-node-id="117:7248" data-name="Nav">
          <div className="figma-239">
            <Link href="/" className="figma-240" data-node-id="117:7249" data-name="Link">
              <div className="figma-241" data-node-id="117:7250">
                <p className="figma-15"><T text="Home"/></p>
              </div>
            </Link>
            <Link href="/my-farm" className="figma-240" data-node-id="117:7251" data-name="Link">
              <div className="figma-241" data-node-id="117:7252">
                <p className="figma-15"><T text="My Farm"/></p>
              </div>
            </Link>
            <Link href="/crop-rotation" className="figma-242" data-node-id="117:7253" data-name="Link">
              <div className="figma-243" data-node-id="117:7254">
                <p className="figma-15"><T text="Crop Rotation"/></p>
              </div>
            </Link>
            <Link href="/information-check" className="figma-240" data-node-id="117:7255" data-name="Link">
              <div className="figma-241" data-node-id="117:7256">
                <p className="figma-15"><T text="Information Check"/></p>
              </div>
            </Link>
            <Link href="/feedback" className="figma-240" data-node-id="117:7257" data-name="Link">
              <div className="figma-241" data-node-id="117:7258">
                <p className="figma-15"><T text="Feedback"/></p>
              </div>
            </Link>
          </div>
        </div>
        <div className="figma-38" data-node-id="117:7259" data-name="Container">
          <div className="figma-244">
            <div className="figma-245" data-node-id="117:7260" data-name="Background+Border">
              <button type="button" data-action={"EN"} aria-pressed={language === "en"} lang="en" className="figma-246" data-node-id="117:7261" data-name="Button">
                <div className="figma-247">
                  <div className="figma-248" data-node-id="117:7262">
                    <p className="figma-59"><T text="EN"/></p>
                  </div>
                </div>
              </button>
              <button type="button" data-action={"বাংলা"} aria-pressed={language === "bn"} lang="bn" className="figma-249" data-node-id="117:7263" data-name="Button">
                <div className="figma-247">
                  <div className="figma-250" data-node-id="117:7264">
                    <p className="figma-59"><T text="বাংলা"/></p>
                  </div>
                </div>
              </button>
            </div>
            <div className="figma-251" data-node-id="117:7265" data-name="VerticalBorder">
              <div className="figma-252" data-node-id="117:7266" data-name="Background+Shadow">
                <div className="figma-253">
                  <div className="figma-254" data-node-id="117:7267">
                    <p className="figma-59"><FarmerProfileText field="initials" /></p>
                  </div>
                </div>
              </div>
              <div className="figma-38" data-node-id="117:7268" data-name="Container">
                <div className="figma-25">
                  <div className="figma-32" data-node-id="117:7269" data-name="Container">
                    <div className="figma-255" data-node-id="117:7270">
                      <p className="figma-59"><FarmerProfileText /></p>
                    </div>
                  </div>
                  <div className="figma-111" data-node-id="117:7271" data-name="Margin">
                    <div className="figma-32" data-node-id="117:7272" data-name="Container">
                      <div className="figma-256" data-node-id="117:7273">
                        <p className="figma-257"><T text="Farmer"/></p>
                      </div>
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
