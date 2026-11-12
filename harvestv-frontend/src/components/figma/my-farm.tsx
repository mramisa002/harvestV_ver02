"use client";
import {T,useLanguage} from "@/lib/language";
import { FarmLocation, FarmDetails } from "@/components/farm-location";
import { FarmContextBar, ActiveFarmLabel, CropStatus, FarmConditions, WeatherDashboard, ClimateHistory } from "@/components/live-dashboard";
import FarmAddressField from "@/components/farm-address-field";
import { PhotoUpload, SoilTests } from "@/components/field-controls";
import Link from "next/link";
import { FarmerProfileText } from "@/components/farmer-profile";
const assetPathPrefix = "/figma/my-farm";
const imgBackgroundBorderShadow = `${assetPathPrefix}/2ccee.png`;
const imgContainer = `${assetPathPrefix}/2e66f.svg`;
const imgContainer1 = `${assetPathPrefix}/75a42.svg`;
const imgIcon = `${assetPathPrefix}/d3fae.svg`;
const imgContainer2 = `${assetPathPrefix}/78ce3.svg`;
const imgContainer3 = `${assetPathPrefix}/37d49.svg`;
const imgContainer4 = `${assetPathPrefix}/28705.svg`;
const imgContainer5 = `${assetPathPrefix}/f3849.svg`;
const imgMargin = `${assetPathPrefix}/8be80.svg`;
const imgIcon1 = `${assetPathPrefix}/cf258.svg`;
const imgContainer6 = `${assetPathPrefix}/ec6dc.svg`;
const imgButton = `${assetPathPrefix}/9ae83.svg`;
const imgContainer7 = `${assetPathPrefix}/d54dc.svg`;
const imgContainer8 = `${assetPathPrefix}/8dbd8.svg`;
const imgIcon2 = `${assetPathPrefix}/15216.svg`;
const imgContainer9 = `${assetPathPrefix}/202ff.svg`;
const imgContainer10 = `${assetPathPrefix}/d1196.svg`;
const imgIcon3 = `${assetPathPrefix}/e0b87.svg`;
const imgContainer11 = `${assetPathPrefix}/e7598.svg`;
const imgContainer12 = `${assetPathPrefix}/e7131.svg`;
const imgContainer13 = `${assetPathPrefix}/16b15.svg`;
const imgContainer14 = `${assetPathPrefix}/93f84.svg`;
const imgContainer15 = `${assetPathPrefix}/a37d0.svg`;
const imgContainer16 = `${assetPathPrefix}/37a44.svg`;
const imgContainer17 = `${assetPathPrefix}/59e02.svg`;
export default function MyFarmHarvestV() {
    const {t,language}=useLanguage();
    return (<div className="figma-103" data-node-id="95:4404" style={{ backgroundImage: "linear-gradient(90deg, rgb(250, 249, 245) 0%, rgb(250, 249, 245) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="My Farm - HarvestV">
      <div className="figma-104" data-node-id="95:4405" data-name="Main">
        <div className="figma-32" data-node-id="95:4406" data-name="Container">
          <div className="figma-105" data-node-id="95:4407" data-name="Section - Primary Page Header Block">
            <div className="figma-106" data-node-id="95:4408" data-name="Container">
              <div className="figma-107" data-node-id="95:4409" data-name="Container">
                <div className="figma-108" data-node-id="95:4410" data-name="Container">
                  <div className="figma-109" data-node-id="95:4411" data-name="Background"/>
                  <div className="figma-110" data-node-id="95:4412">
                    <p className="figma-8"><T text="LAND & SOIL REGISTRATION"/></p>
                  </div>
                </div>
                <div className="figma-111" data-node-id="95:4413" data-name="Heading 1">
                  <div className="figma-112" data-node-id="95:4414">
                    <p className="figma-113"><T text="My Farm & Field Profiles"/></p>
                  </div>
                </div>
                <div className="figma-114" data-node-id="95:4415" data-name="Container">
                  <div className="figma-115" data-node-id="95:4416">
                    <p className="figma-116"><T text="Register plot boundaries, soil characteristics, and irrigation infrastructure to calibrate local crop"/></p>
                    <p className="figma-84"><T text="rotation advisories and soil health indexes."/></p>
                  </div>
                </div>
              </div>
              <div className="figma-117" data-node-id="95:4417" data-name="Container">
                <button type="button" data-action={"Cadastral Export"} className="figma-118" data-node-id="95:4418" data-name="Button">
                  <div className="figma-16" data-node-id="95:4419" data-name="Container">
                    <img alt="" className="figma-17" src={imgContainer}/>
                  </div>
                  <div className="figma-19" data-node-id="95:4421" data-name="Container">
                    <div className="figma-119" data-node-id="95:4422">
                      <p className="figma-15"><T text="Cadastral Export"/></p>
                    </div>
                  </div>
                </button>
                <button type="button" data-action={"Register New Field"} className="figma-120" data-node-id="95:4423" data-name="Button">
                  <div className="figma-101" data-node-id="95:4424" data-name="Container">
                    <img alt="" className="figma-17" src={imgContainer1}/>
                  </div>
                  <div className="figma-19" data-node-id="95:4426" data-name="Container">
                    <div className="figma-121" data-node-id="95:4427">
                      <p className="figma-15"><T text="Register New Field"/></p>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="figma-122" data-node-id="95:4428" data-name="Main Content Layout: Asymmetrical Master-Detail Grid">
            <div className="figma-123" data-node-id="95:4429" data-name="Container">
              <div className="figma-124" data-node-id="95:4430" data-name="Section">
                <div className="figma-125" data-node-id="95:4431" data-name="HorizontalBorder">
                  <div className="figma-126">
                    <div className="figma-38" data-node-id="95:4432" data-name="Container">
                      <div className="figma-127">
                        <div className="figma-108" data-node-id="95:4433" data-name="Container">
                          <div className="figma-128" data-node-id="95:4434" data-name="Background">
                            <div className="figma-129" data-node-id="95:4435">
                              <p className="figma-130"><T text="1"/></p>
                            </div>
                          </div>
                          <div className="figma-131" data-node-id="95:4436">
                            <p className="figma-31"><T text="Location"/></p>
                          </div>
                        </div>
                        <div className="figma-115" data-node-id="95:4437">
                          <p className="figma-84"><T text="We use your location to recommend crops suited to your local weather and soil."/></p>
                        </div>
                      </div>
                    </div>
                    <div className="figma-132" data-node-id="95:4438" data-name="Icon">
                      <img alt="" className="figma-17" src={imgIcon}/>
                    </div>
                  </div>
                </div>
                <div className="figma-24" data-node-id="95:4439" data-name="Container">
                  <div className="figma-133">
                    <button type="button" data-action={"Use my current location"} className="figma-134" data-node-id="95:4440" data-name="Button">
                      <div className="figma-135" data-node-id="95:4441" data-name="Container">
                        <img alt="" className="figma-17" src={imgContainer2}/>
                      </div>
                      <div className="figma-19" data-node-id="95:4443" data-name="Container">
                        <div className="figma-136" data-node-id="95:4444">
                          <p className="figma-15"><T text="Use my current location"/></p>
                        </div>
                      </div>
                    </button>
                    <button type="button" data-action={"Manual entry"} className="figma-137" data-node-id="95:4445" data-name="Button">
                      <div className="figma-138" data-node-id="95:4446" data-name="Container">
                        <img alt="" className="figma-17" src={imgContainer3}/>
                      </div>
                      <div className="figma-38" data-node-id="95:4448" data-name="Container">
                        <div className="figma-139">
                          <div className="figma-119" data-node-id="95:4449">
                            <p className="figma-15"><T text="Manual entry"/></p>
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
                <div className="figma-24" data-node-id="95:4450" data-name="Container">
                  <div className="figma-140">
                    <div className="figma-141" data-node-id="95:4451" data-name="Container">
                      <div className="figma-32" data-node-id="95:4452" data-name="Label">
                        <div className="figma-142" data-node-id="95:4453">
                          <p className="figma-59"><T text="Division"/></p>
                        </div>
                      </div>
                      <FarmAddressField field="division"/>
                    </div>
                    <div className="figma-141" data-node-id="95:4457" data-name="Container">
                      <div className="figma-32" data-node-id="95:4458" data-name="Label">
                        <div className="figma-142" data-node-id="95:4459">
                          <p className="figma-59"><T text="District"/></p>
                        </div>
                      </div>
                      <FarmAddressField field="district"/>
                    </div>
                    <div className="figma-141" data-node-id="95:4463" data-name="Container">
                      <div className="figma-32" data-node-id="95:4464" data-name="Label">
                        <div className="figma-142" data-node-id="95:4465">
                          <p className="figma-59"><T text="Mauza / CS Plot Number (optional)"/></p>
                        </div>
                      </div>
                      <FarmAddressField field="plot"/>
                    </div>
                  </div>
                </div>
                <div className="figma-24" data-node-id="95:4469" data-name="Container">
                  <div className="figma-127">
                    <div className="figma-32" data-node-id="95:4470" data-name="Label">
                      <div className="figma-142" data-node-id="95:4471">
                        <p className="figma-59"><T text="Farm location map"/></p>
                      </div>
                    </div>
                    <FarmLocation />
                  </div>
                </div>
                <div className="figma-143" data-node-id="95:4494" data-name="Overlay">
                  <div className="figma-144">
                    <div className="figma-145" data-node-id="95:4495" data-name="Margin">
                      <img alt="" className="figma-17" src={imgMargin}/>
                    </div>
                    <div className="figma-52" data-node-id="95:4497">
                      <p className="figma-146"><T text="GPS coordinates will not overwrite your manual entries if connection drops."/></p>
                    </div>
                  </div>
                </div>
              </div>
              <FarmDetails section="crops"/>
              <FarmDetails section="soil"/>
              <FarmDetails section="water"/>
              <div className="figma-147" data-node-id="95:4604" data-name="Background+Border">
                <div className="figma-38" data-node-id="95:4605" data-name="Container">
                  <div className="figma-148">
                    <div className="figma-149" data-node-id="95:4606" data-name="Container">
                      <img alt="" className="figma-17" src={imgContainer11}/>
                    </div>
                    <div className="figma-13" data-node-id="95:4608" data-name="Container">
                      <div className="figma-39" data-node-id="95:4609">
                        <p className="figma-8"><T text="Farm details are saved when you select Save Farm."/></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="figma-38" data-node-id="95:4610" data-name="Container">
                  <div className="figma-150">
                    <button type="button" data-action={"Discard changes"} className="figma-151" data-node-id="95:4611" data-name="Button">
                      <div className="figma-119" data-node-id="95:4612">
                        <p className="figma-15"><T text="Discard changes"/></p>
                      </div>
                    </button>
                    <button type="button" data-action={"Save Farm"} className="figma-152" data-node-id="95:4613" data-name="Button">
                      <div className="figma-153" data-node-id="95:4614" data-name="Button:shadow"/>
                      <div className="figma-82" data-node-id="95:4615" data-name="Container">
                        <img alt="" className="figma-17" src={imgContainer12}/>
                      </div>
                      <div className="figma-19" data-node-id="95:4617" data-name="Container">
                        <div className="figma-136" data-node-id="95:4618">
                          <p className="figma-15"><T text="Save Farm"/></p>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="figma-154" data-node-id="95:4619" data-name="Footer">
        <div className="figma-155" data-node-id="95:4620" data-name="Container">
          <div className="figma-156">
            <div className="figma-157" data-node-id="95:4621" data-name="HorizontalBorder">
              <div className="figma-97" data-node-id="95:4622" data-name="Container">
                <div className="figma-158">
                  <div className="figma-159" data-node-id="95:4623" data-name="Container">
                    <div className="figma-160" data-node-id="95:4624" data-name="Background">
                      <div className="figma-161" data-node-id="95:4625" data-name="Container">
                        <img alt="" className="figma-17" src={imgContainer13}/>
                      </div>
                    </div>
                    <div className="figma-13" data-node-id="95:4627" data-name="Container">
                      <div className="figma-131" data-node-id="95:4628">
                        <p className="figma-31"><T text="HarvestV"/></p>
                      </div>
                    </div>
                  </div>
                  <div className="figma-32" data-node-id="95:4629" data-name="Container">
                    <div className="figma-33" data-node-id="95:4630">
                      <p className="figma-35"><T text="Agro-minimal planning and precision crop"/></p>
                      <p className="figma-35"><T text="rotation for progressive Bangladeshi"/></p>
                      <p className="figma-15"><T text="farmers."/></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="figma-97" data-node-id="95:4631" data-name="Container">
                <div className="figma-162">
                  <div className="figma-163" data-node-id="95:4632">
                    <p className="figma-15"><T text="Emergency & Support"/></p>
                  </div>
                  <div className="figma-164" data-node-id="95:4633" data-name="Container">
                    <div className="figma-165" data-node-id="95:4634" data-name="Container">
                      <img alt="" className="figma-17" src={imgContainer14}/>
                    </div>
                    <div className="figma-13" data-node-id="95:4636" data-name="Container">
                      <div className="figma-166" data-node-id="95:4637">
                        <p className="figma-31"><T text="16123"/></p>
                      </div>
                    </div>
                  </div>
                  <div className="figma-32" data-node-id="95:4638" data-name="Container">
                    <div className="figma-99" data-node-id="95:4639">
                      <p className="figma-167"><T text="National Agricultural Extension Call Center (Toll"/></p>
                      <p className="figma-8"><T text="Free)"/></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="figma-97" data-node-id="95:4640" data-name="Container">
                <div className="figma-168">
                  <div className="figma-163" data-node-id="95:4641">
                    <p className="figma-15"><T text="Reference Institutions"/></p>
                  </div>
                  <div className="figma-169" data-node-id="95:4642" data-name="Container">
                    <div className="figma-32" data-node-id="95:4643" data-name="Container">
                      <div className="figma-170" data-node-id="95:4644">
                        <p className="figma-35"><T text="BARI (Bangladesh Agricultural Research"/></p>
                        <p className="figma-15"><T text="Institute)"/></p>
                      </div>
                    </div>
                    <div className="figma-32" data-node-id="95:4645" data-name="Container">
                      <div className="figma-170" data-node-id="95:4646">
                        <p className="figma-15"><T text="BRRI (Bangladesh Rice Research Institute)"/></p>
                      </div>
                    </div>
                  </div>
                  <div className="figma-32" data-node-id="95:4647" data-name="Container">
                    <div className="figma-99" data-node-id="95:4648">
                      <p className="figma-167"><T text="Field agronomy advisory calibrated with national"/></p>
                      <p className="figma-8"><T text="seed standards."/></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="figma-97" data-node-id="95:4649" data-name="Container">
                <div className="figma-171">
                  <div className="figma-163" data-node-id="95:4650">
                    <p className="figma-15"><T text="Agronomic Governance"/></p>
                  </div>
                  <div className="figma-172" data-node-id="95:4651" data-name="Container">
                    <button type="button" data-action={"Crop Advisory Terms"} className="figma-32" data-node-id="95:4652" data-name="Link">
                      <div className="figma-34" data-node-id="95:4653">
                        <p className="figma-15"><T text="Crop Advisory Terms"/></p>
                      </div>
                    </button>
                    <button type="button" data-action={"Privacy & Field Data Rights"} className="figma-32" data-node-id="95:4654" data-name="Link">
                      <div className="figma-34" data-node-id="95:4655">
                        <p className="figma-15"><T text="Privacy & Field Data Rights"/></p>
                      </div>
                    </button>
                    <button type="button" data-action={"Soil Health Guidelines"} className="figma-32" data-node-id="95:4656" data-name="Link">
                      <div className="figma-34" data-node-id="95:4657">
                        <p className="figma-15"><T text="Soil Health Guidelines"/></p>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="figma-173" data-node-id="95:4658" data-name="Container">
              <div className="figma-13" data-node-id="95:4659" data-name="Container">
                <div className="figma-39" data-node-id="95:4660">
                  <p className="figma-8"><T text="© 2024 HarvestV Agronomy Systems. Developed under agro-minimal stewardship."/></p>
                </div>
              </div>
              <div className="figma-12" data-node-id="95:4661" data-name="Container">
                <div className="figma-174" data-node-id="95:4662" data-name="Container">
                  <img alt="" className="figma-17" src={imgContainer15}/>
                </div>
                <div className="figma-39" data-node-id="95:4664">
                  <p className="figma-8"><T text="Reference Library · Local Validation Required"/></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="figma-175" data-node-id="95:4665" data-name="Header">
        <div className="figma-176" data-node-id="95:4666" data-name="Container">
          <div className="figma-177">
            <button type="button" data-action={"HarvestV"} className="figma-108" data-node-id="95:4667" data-name="Link">
              <div className="figma-178" data-node-id="95:4668" data-name="Background">
                <div className="figma-86" data-node-id="95:4669" data-name="Container">
                  <img alt="" className="figma-17" src={imgContainer16}/>
                </div>
              </div>
              <div className="figma-13" data-node-id="95:4671" data-name="Container">
                <div className="figma-32" data-node-id="95:4672" data-name="Container">
                  <div className="figma-179" data-node-id="95:4673">
                    <p className="figma-31"><T text="HarvestV"/></p>
                  </div>
                </div>
              </div>
            </button>
            <div className="figma-48" data-node-id="95:4676" data-name="Nav">
              <Link href="/" className="figma-180" data-node-id="95:4677" data-name="Link">
                <div className="figma-87" data-node-id="95:4678">
                  <p className="figma-15"><T text="Home"/></p>
                </div>
              </Link>
              <Link href="/dashboard" className="figma-180" data-node-id="95:4679" data-name="Link">
                <div className="figma-87" data-node-id="95:4680">
                  <p className="figma-15"><T text="Dashboard"/></p>
                </div>
              </Link>
              <Link href="/my-farm" className="figma-181" data-node-id="95:4681" data-name="Link">
                <div className="figma-182" data-node-id="95:4682">
                  <p className="figma-84"><T text="My Farm"/></p>
                </div>
              </Link>
              <Link href="/crop-rotation" className="figma-180" data-node-id="95:4683" data-name="Link">
                <div className="figma-87" data-node-id="95:4684">
                  <p className="figma-15"><T text="Crop Rotation"/></p>
                </div>
              </Link>
              <Link href="/information-check" className="figma-180" data-node-id="95:4685" data-name="Link">
                <div className="figma-87" data-node-id="95:4686">
                  <p className="figma-15"><T text="Information Check"/></p>
                </div>
              </Link>
              <Link href="/feedback" className="figma-180" data-node-id="95:4687" data-name="Link">
                <div className="figma-87" data-node-id="95:4688">
                  <p className="figma-15"><T text="Feedback"/></p>
                </div>
              </Link>
            </div>
            <div className="figma-48" data-node-id="95:4689" data-name="Container">
              <div className="figma-183" data-node-id="95:4690" data-name="Background+Border">
                <button type="button" data-action={"EN"} aria-pressed={language === "en"} lang="en" className="figma-62" data-node-id="95:4691" data-name="Button">
                  <div className="figma-63">
                    <div className="figma-64" data-node-id="95:4692">
                      <p className="figma-59"><T text="EN"/></p>
                    </div>
                  </div>
                </button>
                <button type="button" data-action={"বাংলা"} aria-pressed={language === "bn"} lang="bn" className="figma-38" data-node-id="95:4693" data-name="Button">
                  <div className="figma-63">
                    <div className="figma-184" data-node-id="95:4694">
                      <p className="figma-59"><T text="বাংলা"/></p>
                    </div>
                  </div>
                </button>
              </div>
              <div className="figma-185" data-node-id="95:4695" data-name="Background+Border">
                <div className="figma-38" data-node-id="95:4696" data-name="Container">
                  <div className="figma-25">
                    <div className="figma-186" data-node-id="95:4697" data-name="Container">
                      <div className="figma-187" data-node-id="95:4698">
                        <p className="figma-59"><FarmerProfileText /></p>
                      </div>
                    </div>
                    <div className="figma-186" data-node-id="95:4699" data-name="Container">
                      <div className="figma-188" data-node-id="95:4700">
                        <p className="figma-8"><FarmerProfileText field="phone" /></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="figma-95" data-node-id="95:4701" data-name="Background">
                  <div className="figma-96">
                    <div className="figma-16" data-node-id="95:4702" data-name="Container">
                      <img alt="" className="figma-17" src={imgContainer17}/>
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
