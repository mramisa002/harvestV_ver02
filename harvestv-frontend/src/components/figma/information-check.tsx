"use client";
import {T,useLanguage} from "@/lib/language";
import InformationChecker from "@/components/information-checker";
import { FarmLocation, FarmDetails } from "@/components/farm-location";
import { FarmContextBar, ActiveFarmLabel, CropStatus, FarmConditions, WeatherDashboard, ClimateHistory } from "@/components/live-dashboard";
import { PhotoUpload, SoilTests } from "@/components/field-controls";
import Link from "next/link";
import { FarmerProfileText } from "@/components/farmer-profile";
const assetPathPrefix = "/figma/information-check";
const imgAb6AXuBie7YKgziRs9L0SztSejkxJRaboVdxDbWwSj5HyaMisyPvTaypQmry5Yeht7KDwZm58Jmp75DoyG0HCwbOswoOmVqg9CQpOzaApFm5QCd6AzGliXLgyU2GbnzVCxTw7I1Gbv7XQjNkajUAn7W0IaEJnnDuDjLDq3LnjL9T4Mgi2Rzyl67OkaRpTmAxxRJqDyX7REomvkPx2WwGwEvGrVvTtNfETfVUy3Z6S8O5G = `${assetPathPrefix}/bbe76.png`;
const imgAb6AXuBb7S2ZncPtfMke05RRpug87Q8BqTgo1Ur1El33RlugXiE7LyVbpNvRGyecMa82KZuSpxaeLu74EokxKEiC95Q04J3PRnKd322Zu3BbTq7D5OxAm2QwNhGvHEefOAh1ShlecfMa3DFuEy42Aai7Xtpn5OY75Cp1TuQi7Eo8RN5VDhNjM6UyKl6SeNyxrtpZqnHf82K4OjxSAaxXerosLYsox0Pu2Ht3LnDnIfS = `${assetPathPrefix}/e16b8.png`;
const imgAb6AXuBxq0OyGy3R3G1XIlmYuLxUcia09TSy6HDzt6F0PbeAefhirHyXVguJabUuJY3ADdtRrvi2Yi2M9I9PgsO14LKzwDz9FsZ6Hbp6KaEitN10Wu0AnoLrxU83SEdUsX78CHtkFsYaMmv1QldyvaQ8WNlImf4UyWaCXwZqtkGmGvAehPoPgorwil4SnkYrLb5Vkzi479Rqcy0CanxTyaSkKh86MyeFdU39DHuAQzr = `${assetPathPrefix}/3d9cc.png`;
const imgContainer = `${assetPathPrefix}/a682c.svg`;
const imgContainer1 = `${assetPathPrefix}/c5203.svg`;
const imgContainer2 = `${assetPathPrefix}/27761.svg`;
const imgButton = `${assetPathPrefix}/b7a00.svg`;
const imgButton1 = `${assetPathPrefix}/d5a0d.svg`;
const imgIcon = `${assetPathPrefix}/a86ed.svg`;
const imgContainer3 = `${assetPathPrefix}/2fd63.svg`;
const imgContainer4 = `${assetPathPrefix}/429c9.svg`;
const imgContainer5 = `${assetPathPrefix}/a774f.svg`;
const imgContainer6 = `${assetPathPrefix}/f6be1.svg`;
const imgContainer7 = `${assetPathPrefix}/6e8d8.svg`;
const imgContainer8 = `${assetPathPrefix}/c5de6.svg`;
const imgContainer9 = `${assetPathPrefix}/f1d47.svg`;
const imgContainer10 = `${assetPathPrefix}/d1a57.svg`;
const imgContainer11 = `${assetPathPrefix}/5f0bf.svg`;
const imgContainer12 = `${assetPathPrefix}/16b15.svg`;
const imgContainer13 = `${assetPathPrefix}/93f84.svg`;
const imgContainer14 = `${assetPathPrefix}/a37d0.svg`;
const imgContainer15 = `${assetPathPrefix}/37a44.svg`;
const imgContainer16 = `${assetPathPrefix}/59e02.svg`;
export default function InformationCheckHarvestV() {
    const {t,language}=useLanguage();
    return (<div className="figma-103" data-node-id="95:5078" style={{ backgroundImage: "linear-gradient(90deg, rgb(250, 249, 245) 0%, rgb(250, 249, 245) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Information Check - HarvestV">
      <InformationChecker />
      <div className="figma-154" data-node-id="95:5290" data-name="Footer">
        <div className="figma-155" data-node-id="95:5291" data-name="Container">
          <div className="figma-156">
            <div className="figma-157" data-node-id="95:5292" data-name="HorizontalBorder">
              <div className="figma-97" data-node-id="95:5293" data-name="Container">
                <div className="figma-158">
                  <div className="figma-159" data-node-id="95:5294" data-name="Container">
                    <div className="figma-160" data-node-id="95:5295" data-name="Background">
                      <div className="figma-161" data-node-id="95:5296" data-name="Container">
                        <img alt="" className="figma-17" src={imgContainer12}/>
                      </div>
                    </div>
                    <div className="figma-13" data-node-id="95:5298" data-name="Container">
                      <div className="figma-131" data-node-id="95:5299">
                        <p className="figma-31"><T text="HarvestV"/></p>
                      </div>
                    </div>
                  </div>
                  <div className="figma-32" data-node-id="95:5300" data-name="Container">
                    <div className="figma-33" data-node-id="95:5301">
                      <p className="figma-35"><T text="Agro-minimal planning and precision crop"/></p>
                      <p className="figma-35"><T text="rotation for progressive Bangladeshi"/></p>
                      <p className="figma-15"><T text="farmers."/></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="figma-97" data-node-id="95:5302" data-name="Container">
                <div className="figma-162">
                  <div className="figma-163" data-node-id="95:5303">
                    <p className="figma-15"><T text="Emergency & Support"/></p>
                  </div>
                  <div className="figma-164" data-node-id="95:5304" data-name="Container">
                    <div className="figma-165" data-node-id="95:5305" data-name="Container">
                      <img alt="" className="figma-17" src={imgContainer13}/>
                    </div>
                    <div className="figma-13" data-node-id="95:5307" data-name="Container">
                      <div className="figma-166" data-node-id="95:5308">
                        <p className="figma-31"><T text="16123"/></p>
                      </div>
                    </div>
                  </div>
                  <div className="figma-32" data-node-id="95:5309" data-name="Container">
                    <div className="figma-99" data-node-id="95:5310">
                      <p className="figma-167"><T text="National Agricultural Extension Call Center (Toll"/></p>
                      <p className="figma-8"><T text="Free)"/></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="figma-97" data-node-id="95:5311" data-name="Container">
                <div className="figma-168">
                  <div className="figma-163" data-node-id="95:5312">
                    <p className="figma-15"><T text="Reference Institutions"/></p>
                  </div>
                  <div className="figma-169" data-node-id="95:5313" data-name="Container">
                    <div className="figma-32" data-node-id="95:5314" data-name="Container">
                      <div className="figma-170" data-node-id="95:5315">
                        <p className="figma-35"><T text="BARI (Bangladesh Agricultural Research"/></p>
                        <p className="figma-15"><T text="Institute)"/></p>
                      </div>
                    </div>
                    <div className="figma-32" data-node-id="95:5316" data-name="Container">
                      <div className="figma-170" data-node-id="95:5317">
                        <p className="figma-15"><T text="BRRI (Bangladesh Rice Research Institute)"/></p>
                      </div>
                    </div>
                  </div>
                  <div className="figma-32" data-node-id="95:5318" data-name="Container">
                    <div className="figma-99" data-node-id="95:5319">
                      <p className="figma-167"><T text="Field agronomy advisory calibrated with national"/></p>
                      <p className="figma-8"><T text="seed standards."/></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="figma-97" data-node-id="95:5320" data-name="Container">
                <div className="figma-171">
                  <div className="figma-163" data-node-id="95:5321">
                    <p className="figma-15"><T text="Agronomic Governance"/></p>
                  </div>
                  <div className="figma-172" data-node-id="95:5322" data-name="Container">
                    <button type="button" data-action={"Crop Advisory Terms"} className="figma-32" data-node-id="95:5323" data-name="Link">
                      <div className="figma-34" data-node-id="95:5324">
                        <p className="figma-15"><T text="Crop Advisory Terms"/></p>
                      </div>
                    </button>
                    <button type="button" data-action={"Privacy & Field Data Rights"} className="figma-32" data-node-id="95:5325" data-name="Link">
                      <div className="figma-34" data-node-id="95:5326">
                        <p className="figma-15"><T text="Privacy & Field Data Rights"/></p>
                      </div>
                    </button>
                    <button type="button" data-action={"Soil Health Guidelines"} className="figma-32" data-node-id="95:5327" data-name="Link">
                      <div className="figma-34" data-node-id="95:5328">
                        <p className="figma-15"><T text="Soil Health Guidelines"/></p>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="figma-173" data-node-id="95:5329" data-name="Container">
              <div className="figma-13" data-node-id="95:5330" data-name="Container">
                <div className="figma-39" data-node-id="95:5331">
                  <p className="figma-8"><T text="© 2024 HarvestV Agronomy Systems. Developed under agro-minimal stewardship."/></p>
                </div>
              </div>
              <div className="figma-12" data-node-id="95:5332" data-name="Container">
                <div className="figma-174" data-node-id="95:5333" data-name="Container">
                  <img alt="" className="figma-17" src={imgContainer14}/>
                </div>
                <div className="figma-39" data-node-id="95:5335">
                  <p className="figma-8"><T text="Reference Library · Local Validation Required"/></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="figma-175" data-node-id="95:5336" data-name="Header">
        <div className="figma-176" data-node-id="95:5337" data-name="Container">
          <div className="figma-177">
            <button type="button" data-action={"HarvestV"} className="figma-108" data-node-id="95:5338" data-name="Link">
              <div className="figma-178" data-node-id="95:5339" data-name="Background">
                <div className="figma-86" data-node-id="95:5340" data-name="Container">
                  <img alt="" className="figma-17" src={imgContainer15}/>
                </div>
              </div>
              <div className="figma-13" data-node-id="95:5342" data-name="Container">
                <div className="figma-32" data-node-id="95:5343" data-name="Container">
                  <div className="figma-179" data-node-id="95:5344">
                    <p className="figma-31"><T text="HarvestV"/></p>
                  </div>
                </div>
              </div>
            </button>
            <div className="figma-48" data-node-id="95:5347" data-name="Nav">
              <Link href="/" className="figma-180" data-node-id="95:5348" data-name="Link">
                <div className="figma-87" data-node-id="95:5349">
                  <p className="figma-15"><T text="Home"/></p>
                </div>
              </Link>
              <Link href="/dashboard" className="figma-180" data-node-id="95:5350" data-name="Link">
                <div className="figma-87" data-node-id="95:5351">
                  <p className="figma-15"><T text="Dashboard"/></p>
                </div>
              </Link>
              <Link href="/my-farm" className="figma-180" data-node-id="95:5352" data-name="Link">
                <div className="figma-87" data-node-id="95:5353">
                  <p className="figma-15"><T text="My Farm"/></p>
                </div>
              </Link>
              <Link href="/crop-rotation" className="figma-180" data-node-id="95:5354" data-name="Link">
                <div className="figma-87" data-node-id="95:5355">
                  <p className="figma-15"><T text="Crop Rotation"/></p>
                </div>
              </Link>
              <Link href="/information-check" className="figma-181" data-node-id="95:5356" data-name="Link">
                <div className="figma-182" data-node-id="95:5357">
                  <p className="figma-84"><T text="Information Check"/></p>
                </div>
              </Link>
              <Link href="/feedback" className="figma-180" data-node-id="95:5358" data-name="Link">
                <div className="figma-87" data-node-id="95:5359">
                  <p className="figma-15"><T text="Feedback"/></p>
                </div>
              </Link>
            </div>
            <div className="figma-48" data-node-id="95:5360" data-name="Container">
              <div className="figma-183" data-node-id="95:5361" data-name="Background+Border">
                <button type="button" data-action={"EN"} aria-pressed={language === "en"} lang="en" className="figma-62" data-node-id="95:5362" data-name="Button">
                  <div className="figma-63">
                    <div className="figma-64" data-node-id="95:5363">
                      <p className="figma-59"><T text="EN"/></p>
                    </div>
                  </div>
                </button>
                <button type="button" data-action={"বাংলা"} aria-pressed={language === "bn"} lang="bn" className="figma-38" data-node-id="95:5364" data-name="Button">
                  <div className="figma-63">
                    <div className="figma-184" data-node-id="95:5365">
                      <p className="figma-59"><T text="বাংলা"/></p>
                    </div>
                  </div>
                </button>
              </div>
              <div className="figma-185" data-node-id="95:5366" data-name="Background+Border">
                <div className="figma-38" data-node-id="95:5367" data-name="Container">
                  <div className="figma-25">
                    <div className="figma-186" data-node-id="95:5368" data-name="Container">
                      <div className="figma-187" data-node-id="95:5369">
                        <p className="figma-59"><FarmerProfileText /></p>
                      </div>
                    </div>
                    <div className="figma-186" data-node-id="95:5370" data-name="Container">
                      <div className="figma-188" data-node-id="95:5371">
                        <p className="figma-8"><FarmerProfileText field="phone" /></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="figma-95" data-node-id="95:5372" data-name="Background">
                  <div className="figma-96">
                    <div className="figma-16" data-node-id="95:5373" data-name="Container">
                      <img alt="" className="figma-17" src={imgContainer16}/>
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
