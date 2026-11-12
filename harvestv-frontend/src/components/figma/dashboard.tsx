"use client";
import {T,useLanguage} from "@/lib/language";
import { FarmLocation, FarmDetails } from "@/components/farm-location";
import { FarmContextBar, ActiveFarmLabel, CropStatus, FarmConditions, WeatherDashboard, ClimateHistory } from "@/components/live-dashboard";
import { PhotoUpload, SoilTests } from "@/components/field-controls";
import Link from "next/link";
import { FarmerProfileText } from "@/components/farmer-profile";
const assetPathPrefix = "/figma/dashboard";
const imgAb6AXuDwkCg4Ky0E3IVX9KturOjZp6IhwC1OjfZyxQp6T1CRqn8S3Nn3CwXji56He3AZkRtjHjpZz9C8KXIl7HrN093IFwo1DbNroaYui3OGhkDh0V7HzK0Q9G3Axcid0IloY4ISuxnhzLes6EHk8WCibcKLpGd9HQc9Y083TRs47F2Tj7VbM7Gd6LCScCHtRWbMre0L4NPehVGhQCw8VtI9OBaUeYlytsKGmZi = `${assetPathPrefix}/4deae.png`;
const imgContainer = `${assetPathPrefix}/be492.svg`;
const imgIcon = `${assetPathPrefix}/1c7b1.svg`;
const imgIcon1 = `${assetPathPrefix}/fe4f8.svg`;
const imgContainer1 = `${assetPathPrefix}/b8dbe.svg`;
const imgContainer2 = `${assetPathPrefix}/c9c3a.svg`;
const imgContainer3 = `${assetPathPrefix}/ad905.svg`;
const imgContainer4 = `${assetPathPrefix}/69987.svg`;
const imgContainer5 = `${assetPathPrefix}/5a5dd.svg`;
const imgContainer6 = `${assetPathPrefix}/401d8.svg`;
const imgContainer7 = `${assetPathPrefix}/f5aba.svg`;
const imgContainer8 = `${assetPathPrefix}/d7bae.svg`;
const imgContainer9 = `${assetPathPrefix}/9562b.svg`;
const imgContainer10 = `${assetPathPrefix}/13de5.svg`;
const imgContainer11 = `${assetPathPrefix}/28520.svg`;
const imgContainer12 = `${assetPathPrefix}/86f6d.svg`;
const imgContainer13 = `${assetPathPrefix}/59e02.svg`;
const imgContainer14 = `${assetPathPrefix}/ed390.svg`;
const imgContainer15 = `${assetPathPrefix}/29b21.svg`;
const imgContainer16 = `${assetPathPrefix}/07bb4.svg`;
const imgContainer17 = `${assetPathPrefix}/e0e81.svg`;
const imgContainer18 = `${assetPathPrefix}/58ce0.svg`;
const imgContainer19 = `${assetPathPrefix}/37044.svg`;
const imgContainer20 = `${assetPathPrefix}/3ca5c.svg`;
const imgContainer21 = `${assetPathPrefix}/936c4.svg`;
export default function DashboardHarvestV() {
    const {t,language}=useLanguage();
    return (<div className="figma-0" data-node-id="95:4092" style={{ backgroundImage: "linear-gradient(90deg, rgb(250, 249, 245) 0%, rgb(250, 249, 245) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Dashboard - HarvestV">
      <div className="figma-1" data-node-id="95:4093" data-name="Main">
        <div className="figma-2" data-node-id="95:4094" data-name="Container">
          <FarmContextBar />
          <div className="figma-3" data-node-id="95:4121" data-name="Main Agronomic Grid: Hero Season Status + Visual Metrics">
            <CropStatus />
            <FarmConditions />
          </div>
          <><WeatherDashboard /><ClimateHistory /></>
          <div className="figma-4" data-node-id="95:4238" data-name="Current / Saved Crop Rotation Plan Overview (3-phase cycle)">
            <div className="figma-5" data-node-id="95:4239" data-name="Container">
              <div className="figma-6" data-node-id="95:4240" data-name="Paragraph">
                <div className="figma-7" data-node-id="95:4241">
                  <p className="figma-8"><T text="EXAMPLE ROTATION · NOT A LIVE RECOMMENDATION"/></p>
                </div>
                <div className="figma-9" data-node-id="95:4242">
                  <p className="figma-10"><T text="Example Crop Rotation Sequence"/></p>
                </div>
              </div>
              <div className="figma-11" data-node-id="95:4243" data-name="Container">
                <button type="button" data-action={"View full plan details"} className="figma-12" data-node-id="95:4244" data-name="Link">
                  <div className="figma-13" data-node-id="95:4245" data-name="Container">
                    <div className="figma-14" data-node-id="95:4246">
                      <p className="figma-15"><T text="View full plan details"/></p>
                    </div>
                  </div>
                  <div className="figma-16" data-node-id="95:4247" data-name="Container">
                    <img alt="" className="figma-17" src={imgContainer10}/>
                  </div>
                </button>
                <button type="button" data-action={"Plan next crop"} className="figma-18" data-node-id="95:4249" data-name="Button">
                  <div className="figma-19" data-node-id="95:4250" data-name="Container">
                    <div className="figma-20" data-node-id="95:4251">
                      <p className="figma-15"><T text="Plan next crop"/></p>
                    </div>
                  </div>
                  <div className="figma-21" data-node-id="95:4252" data-name="Container">
                    <img alt="" className="figma-17" src={imgContainer11}/>
                  </div>
                </button>
              </div>
            </div>
            <div className="figma-22" data-node-id="95:4254" data-name="Container">
              <div className="figma-23" data-node-id="95:4255" data-name="Background+Border+Shadow">
                <div className="figma-24" data-node-id="95:4256" data-name="Container">
                  <div className="figma-25">
                    <div className="figma-5" data-node-id="95:4257" data-name="Container">
                      <div className="figma-26" data-node-id="95:4258" data-name="Background">
                        <div className="figma-27" data-node-id="95:4259">
                          <p className="figma-8"><T text="Step 1 • Active Now"/></p>
                        </div>
                      </div>
                      <div className="figma-13" data-node-id="95:4260" data-name="Container">
                        <div className="figma-28" data-node-id="95:4261">
                          <p className="figma-8"><T text="Robi 2024–25"/></p>
                        </div>
                      </div>
                    </div>
                    <div className="figma-29" data-node-id="95:4262" data-name="Heading 4">
                      <div className="figma-30" data-node-id="95:4263">
                        <p className="figma-31"><T text="Boro Rice"/></p>
                      </div>
                    </div>
                    <div className="figma-32" data-node-id="95:4264" data-name="Container">
                      <div className="figma-33" data-node-id="95:4265">
                        <p className="figma-15"><T text="Variety: BRRI dhan29"/></p>
                      </div>
                    </div>
                    <div className="figma-29" data-node-id="95:4266" data-name="Container">
                      <div className="figma-34" data-node-id="95:4267">
                        <p className="figma-35"><T text="Active Tillering stage. High gross yield"/></p>
                        <p className="figma-15"><T text="carbohydrate phase."/></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="figma-24" data-node-id="95:4268" data-name="Margin">
                  <div className="figma-36">
                    <div className="figma-37" data-node-id="95:4269" data-name="HorizontalBorder">
                      <div className="figma-38" data-node-id="95:4270" data-name="Container">
                        <div className="figma-25">
                          <div className="figma-39" data-node-id="95:4271">
                            <p className="figma-8"><T text="Dec → April"/></p>
                          </div>
                        </div>
                      </div>
                      <div className="figma-38" data-node-id="95:4272" data-name="Container">
                        <div className="figma-25">
                          <div className="figma-40" data-node-id="95:4273">
                            <p className="figma-8"><T text="Harvest in 71 days"/></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="figma-41" data-node-id="95:4274" data-name="Background+Border">
                <div className="figma-24" data-node-id="95:4275" data-name="Container">
                  <div className="figma-25">
                    <div className="figma-5" data-node-id="95:4276" data-name="Container">
                      <div className="figma-42" data-node-id="95:4277" data-name="Background">
                        <div className="figma-43" data-node-id="95:4278">
                          <p className="figma-8"><T text="Step 2 • Upcoming"/></p>
                        </div>
                      </div>
                      <div className="figma-13" data-node-id="95:4279" data-name="Container">
                        <div className="figma-28" data-node-id="95:4280">
                          <p className="figma-8"><T text="Kharif-1 2025"/></p>
                        </div>
                      </div>
                    </div>
                    <div className="figma-29" data-node-id="95:4281" data-name="Heading 4">
                      <div className="figma-30" data-node-id="95:4282">
                        <p className="figma-31"><T text="Mungbean"/></p>
                      </div>
                    </div>
                    <div className="figma-32" data-node-id="95:4283" data-name="Container">
                      <div className="figma-33" data-node-id="95:4284">
                        <p className="figma-15"><T text="Variety: BARI Mung-6"/></p>
                      </div>
                    </div>
                    <div className="figma-29" data-node-id="95:4285" data-name="Container">
                      <div className="figma-34" data-node-id="95:4286">
                        <p className="figma-35"><T text="Nitrogen fixer: Restores root nodule"/></p>
                        <p className="figma-15"><T text="bacteria, disrupts rice pests."/></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="figma-24" data-node-id="95:4287" data-name="Margin">
                  <div className="figma-36">
                    <div className="figma-37" data-node-id="95:4288" data-name="HorizontalBorder">
                      <div className="figma-38" data-node-id="95:4289" data-name="Container">
                        <div className="figma-25">
                          <div className="figma-39" data-node-id="95:4290">
                            <p className="figma-8"><T text="May → July"/></p>
                          </div>
                        </div>
                      </div>
                      <div className="figma-38" data-node-id="95:4291" data-name="Container">
                        <div className="figma-25">
                          <div className="figma-44" data-node-id="95:4292">
                            <p className="figma-8"><T text="Land Prep: Mid March"/></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="figma-41" data-node-id="95:4293" data-name="Background+Border">
                <div className="figma-24" data-node-id="95:4294" data-name="Container">
                  <div className="figma-25">
                    <div className="figma-5" data-node-id="95:4295" data-name="Container">
                      <div className="figma-45" data-node-id="95:4296" data-name="Background">
                        <div className="figma-46" data-node-id="95:4297">
                          <p className="figma-8"><T text="Step 3 • Planned"/></p>
                        </div>
                      </div>
                      <div className="figma-13" data-node-id="95:4298" data-name="Container">
                        <div className="figma-28" data-node-id="95:4299">
                          <p className="figma-8"><T text="Kharif-2 2025"/></p>
                        </div>
                      </div>
                    </div>
                    <div className="figma-29" data-node-id="95:4300" data-name="Heading 4">
                      <div className="figma-30" data-node-id="95:4301">
                        <p className="figma-31"><T text="T. Aman Rice"/></p>
                      </div>
                    </div>
                    <div className="figma-32" data-node-id="95:4302" data-name="Container">
                      <div className="figma-33" data-node-id="95:4303">
                        <p className="figma-15"><T text="Variety: BRRI dhan87"/></p>
                      </div>
                    </div>
                    <div className="figma-29" data-node-id="95:4304" data-name="Container">
                      <div className="figma-34" data-node-id="95:4305">
                        <p className="figma-35"><T text="Rainfed monsoon crop utilizing residual"/></p>
                        <p className="figma-15"><T text="fixed nitrogen."/></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="figma-24" data-node-id="95:4306" data-name="Margin">
                  <div className="figma-36">
                    <div className="figma-37" data-node-id="95:4307" data-name="HorizontalBorder">
                      <div className="figma-38" data-node-id="95:4308" data-name="Container">
                        <div className="figma-25">
                          <div className="figma-39" data-node-id="95:4309">
                            <p className="figma-8"><T text="Aug → Nov"/></p>
                          </div>
                        </div>
                      </div>
                      <div className="figma-38" data-node-id="95:4310" data-name="Container">
                        <div className="figma-25">
                          <div className="figma-39" data-node-id="95:4311">
                            <p className="figma-8"><T text="Seedbed: Mid July"/></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="figma-47" data-node-id="95:4312" data-name="Onboarding / New Farm Banner">
            <div className="figma-48" data-node-id="95:4313" data-name="Container">
              <div className="figma-49" data-node-id="95:4314" data-name="Background+Border">
                <div className="figma-50" data-node-id="95:4315" data-name="Container">
                  <img alt="" className="figma-17" src={imgContainer12}/>
                </div>
              </div>
              <div className="figma-13" data-node-id="95:4317" data-name="Container">
                <div className="figma-32" data-node-id="95:4318" data-name="Heading 4">
                  <div className="figma-51" data-node-id="95:4319">
                    <p className="figma-15"><T text="Managing a new plot? Add your farm in 2 minutes."/></p>
                  </div>
                </div>
                <div className="figma-32" data-node-id="95:4320" data-name="Container">
                  <div className="figma-52" data-node-id="95:4321">
                    <p className="figma-15"><T text="Connect your second parcel or upload a soil test report to get automated AWD and fertilizer schedules."/></p>
                  </div>
                </div>
              </div>
            </div>
            <button type="button" data-action={"+ Add your farm"} className="figma-53" data-node-id="95:4322" data-name="Button">
              <div className="figma-20" data-node-id="95:4323">
                <p className="figma-15"><T text="+ Add your farm"/></p>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="figma-54" data-node-id="95:4324" data-name="Header">
        <div className="figma-38" data-node-id="95:4325" data-name="Container">
          <div className="figma-55">
            <div className="figma-56" data-node-id="95:4326" data-name="Background+Border">
              <div className="figma-57" data-node-id="95:4327" data-name="Background"/>
              <div className="figma-38" data-node-id="95:4328" data-name="Container">
                <div className="figma-25">
                  <div className="figma-58" data-node-id="95:4329">
                    <p className="figma-59"><ActiveFarmLabel kind="name"/></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="figma-60" data-node-id="95:4330" data-name="Vertical Divider"/>
            <div className="figma-13" data-node-id="95:4331" data-name="Container">
              <div className="figma-39" data-node-id="95:4332">
                <p className="figma-8"><ActiveFarmLabel kind="region"/></p>
              </div>
            </div>
          </div>
        </div>
        <div className="figma-38" data-node-id="95:4333" data-name="Container">
          <div className="figma-55">
            <div className="figma-61" data-node-id="95:4334" data-name="Background+Border">
              <button type="button" data-action={"EN"} aria-pressed={language === "en"} lang="en" className="figma-62" data-node-id="95:4335" data-name="Button">
                <div className="figma-63">
                  <div className="figma-64" data-node-id="95:4336">
                    <p className="figma-59"><T text="EN"/></p>
                  </div>
                </div>
              </button>
              <button type="button" data-action={"বাংলা"} aria-pressed={language === "bn"} lang="bn" className="figma-65" data-node-id="95:4337" data-name="Button">
                <div className="figma-63">
                  <div className="figma-66" data-node-id="95:4338">
                    <p className="figma-59"><T text="বাংলা"/></p>
                  </div>
                </div>
              </button>
            </div>
            <div className="figma-67" data-node-id="95:4339" data-name="Background">
              <div className="figma-16" data-node-id="95:4340" data-name="Container">
                <img alt="" className="figma-17" src={imgContainer13}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="figma-68" data-node-id="95:4342" data-name="Aside">
        <div className="figma-24" data-node-id="95:4343" data-name="Container">
          <div className="figma-69">
            <div className="figma-70" data-node-id="95:4344" data-name="Container">
              <div className="figma-71" data-node-id="95:4345" data-name="Background+Border">
                <div className="figma-72" data-node-id="95:4346" data-name="Container">
                  <img alt="" className="figma-17" src={imgContainer14}/>
                </div>
              </div>
              <div className="figma-13" data-node-id="95:4348" data-name="Container">
                <div className="figma-32" data-node-id="95:4349" data-name="Container">
                  <div className="figma-73" data-node-id="95:4350">
                    <p className="figma-15"><T text="HarvestV"/></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="figma-74" data-node-id="95:4354" data-name="Container">
              <div className="figma-75" data-node-id="95:4355" data-name="Background+Border">
                <div className="figma-24" data-node-id="95:4356" data-name="Container">
                  <div className="figma-25">
                    <div className="figma-76" data-node-id="95:4357">
                      <p className="figma-8"><T text="ACTIVE PLOT"/></p>
                    </div>
                  </div>
                </div>
                <div className="figma-24" data-node-id="95:4358" data-name="Container">
                  <div className="figma-77">
                    <div className="figma-78" data-node-id="95:4359">
                      <p className="figma-59"><ActiveFarmLabel kind="name"/></p>
                    </div>
                  </div>
                </div>
                <div className="figma-24" data-node-id="95:4360" data-name="Container">
                  <div className="figma-25">
                    <div className="figma-79" data-node-id="95:4361">
                      <p className="figma-8"><ActiveFarmLabel kind="details"/></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="figma-80" data-node-id="95:4362" data-name="Nav">
              <Link href="/dashboard" className="figma-81" data-node-id="95:4363" data-name="Link">
                <div className="figma-82" data-node-id="95:4364" data-name="Container">
                  <img alt="" className="figma-17" src={imgContainer15}/>
                </div>
                <div className="figma-83" data-node-id="95:4366">
                  <p className="figma-84"><T text="Dashboard"/></p>
                </div>
              </Link>
              <Link href="/my-farm" className="figma-85" data-node-id="95:4367" data-name="Link">
                <div className="figma-86" data-node-id="95:4368" data-name="Container">
                  <img alt="" className="figma-17" src={imgContainer16}/>
                </div>
                <div className="figma-87" data-node-id="95:4370">
                  <p className="figma-15"><T text="My Farm"/></p>
                </div>
              </Link>
              <Link href="/crop-rotation" className="figma-85" data-node-id="95:4371" data-name="Link">
                <div className="figma-88" data-node-id="95:4372" data-name="Container">
                  <img alt="" className="figma-17" src={imgContainer17}/>
                </div>
                <div className="figma-87" data-node-id="95:4374">
                  <p className="figma-15"><T text="Crop Rotation"/></p>
                </div>
              </Link>
              <Link href="/information-check" className="figma-85" data-node-id="95:4375" data-name="Link">
                <div className="figma-89" data-node-id="95:4376" data-name="Container">
                  <img alt="" className="figma-17" src={imgContainer18}/>
                </div>
                <div className="figma-87" data-node-id="95:4378">
                  <p className="figma-15"><T text="Information Check"/></p>
                </div>
              </Link>
              <Link href="/feedback" className="figma-85" data-node-id="95:4379" data-name="Link">
                <div className="figma-90" data-node-id="95:4380" data-name="Container">
                  <img alt="" className="figma-17" src={imgContainer19}/>
                </div>
                <div className="figma-87" data-node-id="95:4382">
                  <p className="figma-15"><T text="Feedback"/></p>
                </div>
              </Link>
              <Link href="/" className="figma-85" data-node-id="95:4383" data-name="Link">
                <div className="figma-90" data-node-id="95:4384" data-name="Container">
                  <img alt="" className="figma-17" src={imgContainer20}/>
                </div>
                <div className="figma-87" data-node-id="95:4386">
                  <p className="figma-15"><T text="Public Portal"/></p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="figma-91" data-node-id="95:4387" data-name="HorizontalBorder">
          <div className="figma-92">
            <div className="figma-93" data-node-id="95:4388" data-name="Background+Border">
              <div className="figma-94">
                <div className="figma-95" data-node-id="95:4389" data-name="Background">
                  <div className="figma-96">
                    <div className="figma-16" data-node-id="95:4390" data-name="Container">
                      <img alt="" className="figma-17" src={imgContainer13}/>
                    </div>
                  </div>
                </div>
                <div className="figma-97" data-node-id="95:4392" data-name="Container">
                  <div className="figma-25">
                    <div className="figma-98" data-node-id="95:4393" data-name="Container">
                      <div className="figma-78" data-node-id="95:4394">
                        <p className="figma-59"><FarmerProfileText /></p>
                      </div>
                    </div>
                    <div className="figma-98" data-node-id="95:4395" data-name="Container">
                      <div className="figma-99" data-node-id="95:4396">
                        <p className="figma-8"><FarmerProfileText field="phone" /></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="figma-24" data-node-id="95:4397" data-name="Container">
              <div className="figma-100">
                <div className="figma-12" data-node-id="95:4398" data-name="Container">
                  <div className="figma-101" data-node-id="95:4399" data-name="Container">
                    <img alt="" className="figma-17" src={imgContainer21}/>
                  </div>
                  <div className="figma-39" data-node-id="95:4401">
                    <p className="figma-8"><T text="16123 Helpline"/></p>
                  </div>
                </div>
                <div className="figma-102" data-node-id="95:4402" data-name="Background+Border">
                  <div className="figma-39" data-node-id="95:4403">
                    <p className="figma-8"><T text="BARI/BRRI"/></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);
}
