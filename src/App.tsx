import './App.css'
import prhLogo from './assets/prhLogo.png'
import beaconLogo from "./assets/beacon.webp"
import hbgLogo from "./assets/hbg.webp"
import abramsLogo from "./assets/abrams.png"
import bloomsburyLogo from "./assets/bloomsbury.webp"
import candleLogo from "./assets/candle.png"
import chronicleLogo from "./assets/chronicle.png"
import hcLogo from "./assets/hc.webp"
import macmillanLogo from "./assets/macmillan.webp"
import hhLogo from "./assets/hh.png"
import sasLogo from "./assets/sas.png"
import sbLogo from "./assets/sb.png"
import scholasticLogo from "./assets/scholastic.webp"
import whLogo from "./assets/wh.jpeg"
import wwLogo from "./assets/ww.png"


function App() {

    return (<>
        <section id="center">
            <div className="hero">
            </div>
            <div>
                <h1>bookjobs.com</h1>
                <p>
                    new and improved. updated daily.
                </p>

                <br/>
            </div>

        </section>

        <div className="ticks"></div>

        <section id="next-steps">
            <div id="docs">
          <span className="material-symbols-outlined"
                style={{color: "purple"}}>inbox_text_person</span>
                <h2>Jobs</h2>
                <p>Entry Level (Assistant/Associate)</p>
                <br/>
                <span style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
  <img src={prhLogo} alt="PRH logo" style={{width: '24px', height: '24px', objectFit: 'contain'}}/>
  <p style={{margin: 0}}>Penguin Random House</p>
</span>
                <ul>
                    <li>
                    <a href="https://jobsearch.createyourowncareer.com/PRH_US/job/Administrative-Assistant%2C-IT-%28Hybrid%29/287193-en_US"
                       target="_blank">
                        Administrative Assistant, IT (Hybrid)
                    </a>
                </li><li>
                    <a href="https://jobsearch.createyourowncareer.com/PRH_US/job/Associate-Production-Editor-%28Open-to-remote%29/287845-en_US"
                       target="_blank">
                        Associate Production Editor (Open to remote)
                    </a>
                </li>
                    <li>
                        <a href="https://jobsearch.createyourowncareer.com/PRH_US/job/Publicity-Assistant%2C-Riverhead-%28Hybrid%29/287383-en_US"
                           target="_blank">
                            Publicity Assistant, Riverhead (Hybrid)
                        </a>
                    </li>
                </ul>
                <hr/>
                <br/>
                <span style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
  <img src={hbgLogo} alt="HBG logo" style={{width: '24px', height: '24px', objectFit: 'contain'}}/>
  <p style={{margin: 0}}>Hachette Book Group</p>
</span>
                <ul>
                    <li>
                        <a href="https://jobs.jobvite.com/hachette-book-group/job/oLWFzfwF" target="_blank">
                            Editorial Assistant, Little, Brown Spark (New York, New York)
                        </a>
                    </li>
                    <li>
                        <a href="https://jobs.jobvite.com/hachette-book-group/job/oE1SzfwQ" target="_blank">
                            Special Markets Sales Assistant (New York, New York)
                        </a>
                    </li>
                    <li>
                        <a href="https://jobs.jobvite.com/hachette-book-group/job/otpQzfw1" target="_blank">
                            Editorial Assistant, Artisan and Black Dog & Leventhal (New York, New York)
                        </a>
                    </li>
                    <li>
                        <a href="https://jobs.jobvite.com/hachette-book-group/job/onuNzfwX" target="_blank">
                            Production Assistant/Associate (Boulder, Colorado)
                        </a>
                    </li>
                    <li>
                        <a href="https://jobs.jobvite.com/hachette-book-group/job/o6XMzfw8" target="_blank">
                            Publicity & Marketing Assistant/Associate, Timber Press (Portland, OR)
                        </a>
                    </li>
                    <li>
                        <a href="https://jobs.jobvite.com/hachette-book-group/job/o9PQzfw7" target="_blank">
                            Administrative Coordinator, Union Square & Co. (New York, New York)
                        </a>
                    </li>

                </ul>
                <hr/>
                <br/>
                <span style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
  <img src={hcLogo} alt="Haper Collins logo" style={{width: '24px', height: '24px', objectFit: 'contain'}}/>
  <p style={{margin: 0}}>Harper Collins</p>
</span>
                <ul>
                    <li>
                        <a href="https://careers-harpercollins.icims.com/jobs/5290/associate-editor-%28nyc-hybrid%29/job?hub=7&_gl=1*1p9y609*_ga*MTM3OTEyMzI1OC4xNzYzNDMxMDY4*_ga_5Y2BYGL910*czE3NzQ3NTM0NTAkbzc2JGcxJHQxNzc0NzUzNDY1JGo0NSRsMCRoMA.."
                           target="_blank">
                            Associate Editor, Harlequin Intrigue (NYC Hybrid)
                        </a>
                    </li>
                    <li>
                        <a href="https://careers-harpercollins.icims.com/jobs/5285/assistant%2c-editorial-services-%28princeton%2c-nj-hybrid%29/job?hub=7&_gl=1*1yceey6*_ga*MTM3OTEyMzI1OC4xNzYzNDMxMDY4*_ga_5Y2BYGL910*czE3NzQzODc2MDUkbzczJGcxJHQxNzc0Mzg3NjA2JGo1OSRsMCRoMA..&mobile=false&width=1454&height=500&bga=true&needsRedirect=false&jan1offset=-300&jun1offset=-240"
                           target="_blank">
                            Assistant, Editorial Services (Princeton, NJ Hybrid)
                        </a>
                    </li>
                    <li>
                        <a href="https://careers-harpercollins.icims.com/jobs/5281/content-management-assistant-%28princeton%2c-nj-hybrid%29/job?hub=7&_gl=1*1biuj6i*_ga*MTM3OTEyMzI1OC4xNzYzNDMxMDY4*_ga_5Y2BYGL910*czE3NzQzMDYzNjgkbzcxJGcxJHQxNzc0MzA2Mzc2JGo1MiRsMCRoMA..&mobile=false&width=1454&height=500&bga=true&needsRedirect=false&jan1offset=-300&jun1offset=-240"
                           target="_blank">
                            Content Management Assistant (Princeton, NJ Hybrid)
                        </a>
                    </li>
                </ul>
                <hr/>
                <br/>
                <span style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
  <img src={macmillanLogo} alt="Macmillan logo" style={{width: '24px', height: '24px', objectFit: 'contain'}}/>
  <p style={{margin: 0}}>Macmillan</p>
</span>
                <ul>
                    <li>
                        <a href="https://recruiting.ultipro.com/HOL1002HPHM/JobBoard/be27b89b-3cb9-491f-a1b0-42f8b077a9dd/OpportunityDetail?opportunityId=ff2cc175-8246-4d87-9e40-b9cae03e8098"
                           target="_blank">
                            Publicity Assistant - MPG (SMPG) (Remote)
                        </a>
                    </li>
                    <li>
                        <a href="https://recruiting.ultipro.com/HOL1002HPHM/JobBoard/be27b89b-3cb9-491f-a1b0-42f8b077a9dd/OpportunityDetail?opportunityId=7cfd74cf-30b0-4173-9e48-ffa33ba6d434"
                           target="_blank">
                            Associate, Direct-to-Consumer Marketing & Ecommerce (New York, NY)
                        </a>
                    </li>
                </ul>
                <hr/>
                <br/>
                <span style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
  <img src={sasLogo} alt="S&S logo" style={{width: '24px', height: '24px', objectFit: 'contain'}}/>
  <p style={{margin: 0}}>Simon & Schuster</p>
</span>
                <ul>
                    <li>
                        <a href="https://jobs.dayforcehcm.com/en-US/simonschustr/CANDIDATEPORTAL/jobs/6055"
                           target="_blank">
                            Editorial Assistant, Scribner Books (New York, NY)
                        </a>
                    </li>
                    <li>
                        <a href="https://jobs.dayforcehcm.com/en-US/simonschustr/CANDIDATEPORTAL/jobs/5994"
                           target="_blank">
                            Assistant/Associate Editor, Scribner (New York, NY)
                        </a>
                    </li>
                    <li>
                        <a href="https://jobs.dayforcehcm.com/en-US/simonschustr/CANDIDATEPORTAL/jobs/5940"
                           target="_blank">
                            Publicity Assistant, Simon & Schuster Flagship (New York, NY)
                        </a>
                    </li>
                    <li>
                        <a href="https://jobs.dayforcehcm.com/en-US/simonschustr/CANDIDATEPORTAL/jobs/5933"
                           target="_blank">
                            Editorial Assistant, Gallery Books, specializing in Romance (New York, NY)
                        </a>
                    </li>
                </ul>
                <hr/>
                <br/>
                <span style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
  <img src={sbLogo} alt="Sourcebooks logo" style={{width: '24px', height: '24px', objectFit: 'contain'}}/>
  <p style={{margin: 0}}>Sourcebooks</p>
</span>
                <hr/>
                <br/>
                <span style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
  <img src={bloomsburyLogo} alt="Bloomsbury logo" style={{width: '24px', height: '24px', objectFit: 'contain'}}/>
  <p style={{margin: 0}}>Bloomsbury</p>
</span>
                <ul>
                    <li>
                        <a href="https://recruiting.paylocity.com/Recruiting/Jobs/Details/4031880"
                           target="_blank">
                            Marketing & Publicity Assistant, Special Interest (Hybrid New York, NY)
                        </a>
                    </li>
                    <li>
                        <a href="https://recruiting.paylocity.com/recruiting/jobs/Details/3890228/Bloomsbury-Publishing/Conferences-Assistant-Academic-Professional-Marketing?source=Internal+Careers+Page"
                           target="_blank">
                            Conferences Assistant, Academic & Professional Marketing (Greenbelt, MD)
                        </a>
                    </li>
                    <li>
                        <a href="https://recruiting.paylocity.com/Recruiting/Jobs/Details/3966586?source=Internal%20Careers%20Page"
                           target="_blank">
                            Customer Service Representative-Hybrid (Greenbelt, MD)
                        </a>
                    </li>
                    <li>
                        <a href="https://recruiting.paylocity.com/Recruiting/Jobs/Details/3979396?source=Internal%20Careers%20Page"
                           target="_blank">
                            Editorial Assistant, Bloomsbury Academic-Hybrid (Greenbelt, MD)
                        </a>
                    </li>
                </ul>
                <hr/>
                <br/>
                <span style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
  <img src={scholasticLogo} alt="Scholastic logo" style={{width: '24px', height: '24px', objectFit: 'contain'}}/>
  <p style={{margin: 0}}>Scholastic</p>
</span>
                <ul>
                    <li>
                        <a href="https://scholastic.wd5.myworkdayjobs.com/en-US/External/job/New-York-New-York/Senior-Production-Editor_R14994-1"
                           target="_blank">
                            Assistant Production Editor (New York, NY)
                        </a>
                    </li>
                    <li>
                        <a href="https://scholastic.wd5.myworkdayjobs.com/en-US/External/job/New-York-New-York/Editorial-Assistant_R15277"
                           target="_blank">
                            Editorial Assistant (New York, NY)
                        </a>
                    </li>
                    <li>
                        <a href="https://scholastic.wd5.myworkdayjobs.com/en-US/External/job/New-York-New-York/Publicity-Assistant_R15224"
                           target="_blank">
                            Publicity Assistant (New York, NY)
                        </a>
                    </li>
                    <li>
                        <a href="https://scholastic.wd5.myworkdayjobs.com/en-US/External/job/New-York-New-York/Contracts-Administrator_R15212"
                           target="_blank">
                            Contracts Administrator (New York, NY)
                        </a>
                    </li>
                    <li>
                        <a href="https://scholastic.wd5.myworkdayjobs.com/en-US/External/job/New-York-New-York/Junior-Designer_R15238"
                           target="_blank">
                            Junior Designer (New York, NY)
                        </a>
                    </li>
                    <li>
                        <a href="https://scholastic.wd5.myworkdayjobs.com/en-US/External/job/New-York-New-York/Publicity---Travel-Coordinator_R15075"
                           target="_blank">
                            Publicity & Travel Coordinator (New York, NY)
                        </a>
                    </li>
                    <li>
                        <a href="https://scholastic.wd5.myworkdayjobs.com/en-US/External/job/Hoffman-Estates-Illinois/HR-Coordinator_R15010"
                           target="_blank">
                            HR Coordinator (Hoffman Estates, Illinois)
                        </a>
                    </li>
                </ul>
                <hr/>
                <br/>
                <span style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
  <img src={chronicleLogo} alt="Chronicle logo" style={{width: '24px', height: '24px', objectFit: 'contain'}}/>
  <p style={{margin: 0}}>Chronicle Books</p>
</span>
                <ul>
                    <li>
                        <a href="https://recruiting.paylocity.com/Recruiting/Jobs/Details/3935378" target="_blank">
                            Publicity Assistant (San Francisco, CA)
                        </a>
                    </li>
                </ul>
                <hr/>
                <br/>
                <span style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
  <img src={beaconLogo} alt="Beacon logo" style={{width: '24px', height: '24px', objectFit: 'contain'}}/>
  <p style={{margin: 0}}>Beacon Press</p>
</span>
                <hr/>
                <br/>

                <span style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
  <img src={abramsLogo} alt="Abrams logo" style={{width: '24px', height: '24px', objectFit: 'contain'}}/>
  <p style={{margin: 0}}>Abrams</p>
</span>
                <ul>
                    <li>
                        <a href="https://workforcenow.adp.com/mascsr/default/mdf/recruitment/recruitment.html?cid=8e27a2d8-9a25-4600-a40b-77eec5e6daaa&ccId=19000101_000001&lang=en_US&jobId=547207"
                           target="_blank">
                            Editorial Assistant-Children's (New York, NY)
                        </a>
                    </li>
                    <li>
                        <a href="https://workforcenow.adp.com/mascsr/default/mdf/recruitment/recruitment.html?cid=8e27a2d8-9a25-4600-a40b-77eec5e6daaa&ccId=19000101_000001&lang=en_US&jobId=546786"
                           target="_blank">
                            Sales Coordinator (New York, NY)
                        </a>
                    </li>
                </ul>
                <hr/>
                <br/>
                <span style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
  <img src={hhLogo} alt="Holiday House logo" style={{width: '24px', height: '24px', objectFit: 'contain'}}/>
  <p style={{margin: 0}}>Holiday House/Peachtree</p>
</span>

                <hr/>
                <br/>
                <span style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
  <img src={candleLogo} alt="Candlewick logo" style={{width: '24px', height: '24px', objectFit: 'contain'}}/>
  <p style={{margin: 0}}>Candlewick Press</p>
</span>
                <hr/>
                <br/>
                <span style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
  <img src={wwLogo} alt="W.W. Norton logo" style={{width: '24px', height: '24px', objectFit: 'contain'}}/>
  <p style={{margin: 0}}>W.W. Norton</p>
</span>

            </div>

            <div id="social">
             <span
                 className="material-symbols-outlined"
                 style={{color: "purple"}}
             >
  edit_square
</span>
                <h2>Internships</h2>
                <br/>
                <span style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
  <img src={prhLogo} alt="PRH logo" style={{width: '24px', height: '24px', objectFit: 'contain'}}/>
  <p style={{margin: 0}}>Penguin Random House</p>
</span>
                <hr/>
                <br/>
                <span style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
  <img src={hbgLogo} alt="HBG logo" style={{width: '24px', height: '24px', objectFit: 'contain'}}/>
  <p style={{margin: 0}}>Hachette Book Group</p>
</span>
                <ul>
                    <li>
                        <a href="https://jobs.jobvite.com/hachette-book-group/job/owJSzfwq" target="_blank">
                            Spring/Summer 2026 Digital Communications Internship (New York, New York)
                        </a>
                    </li>
                    <li>
                        <a href="https://jobs.jobvite.com/hachette-book-group/job/o19Pzfwi" target="_blank">
                            Summer 2026 Running Press Marketing and Publicity Internship (Philadelphia, PA)
                        </a>
                    </li>
                    <li>
                        <a href="https://jobs.jobvite.com/hachette-book-group/job/oMvPzfwp" target="_blank">
                            Summer 2026 Business Intelligence Product Team Internship (Remote/New York, New York)
                        </a>
                    </li>
                    <li>
                        <a href="https://jobs.jobvite.com/hachette-book-group/job/ov0RzfwF" target="_blank">
                            Summer 2026 Artisan & Workman Editorial Internship (New York, New York)
                        </a>
                    </li>
                    <li>
                        <a href="https://jobs.jobvite.com/hachette-book-group/job/oR9Pzfw8" target="_blank">
                            Summer 2026 Storey Design Internship (Remote)
                        </a>
                    </li>
                    <li>
                        <a href="https://jobs.jobvite.com/hachette-book-group/job/osfBzfwB" target="_blank">
                            Spring/Summer 2026 Editorial Internship, UNSQ (New York, New York)
                        </a>
                    </li>
                    <li>
                        <a href="https://jobs.jobvite.com/hachette-book-group/job/oHANzfwn" target="_blank">
                            Summer 2026 Basic Books Group Editorial Internship (New York, New York)
                        </a>
                    </li>
                    <li>
                        <a href="https://jobs.jobvite.com/hachette-book-group/job/okzNzfwZ" target="_blank">
                            Summer 2026 Orbit Editorial Internship (New York, New York)
                        </a>
                    </li>
                    <li>
                        <a href="https://jobs.jobvite.com/hachette-book-group/job/o90Lzfwd" target="_blank">
                            Spring/Summer 2026 Marketing Intern, Basic Books Group (New York, New York)
                        </a>
                    </li>
                    <li>
                        <a href="https://jobs.jobvite.com/hachette-book-group/job/oD9PzfwU" target="_blank">
                            Summer 2026 Library & Academic Marketing/Sales Internship (New York, New York)
                        </a>
                    </li>
                    <li>
                        <a href="https://jobs.jobvite.com/hachette-book-group/job/o50Szfwg" target="_blank">
                            Summer 2026 Little, Brown Marketing & Publicity Internship (New York, New York)
                        </a>
                    </li>
                    <li>
                        <a href="https://jobs.jobvite.com/hachette-book-group/job/o5xNzfwI" target="_blank">
                            Summer 2026 Production Manufacturing Internship (New York, New York)
                        </a>
                    </li>
                    <li>
                        <a href="https://jobs.jobvite.com/hachette-book-group/job/optRzfw2" target="_blank">
                            Summer 2026 Special Markets Internship (New York, New York)
                        </a>
                    </li>

                </ul>
                <hr/>
                <br/>
                <span style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
  <img src={hcLogo} alt="Haper Collins logo" style={{width: '24px', height: '24px', objectFit: 'contain'}}/>
  <p style={{margin: 0}}>Harper Collins</p>
</span>
                <ul>

                </ul>
                <hr/>
                <br/>
                <span style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
  <img src={macmillanLogo} alt="Macmillan logo" style={{width: '24px', height: '24px', objectFit: 'contain'}}/>
  <p style={{margin: 0}}>Macmillan</p>
</span>
                <ul>
                    <li>
                        <a href="https://recruiting.ultipro.com/HOL1002HPHM/JobBoard/be27b89b-3cb9-491f-a1b0-42f8b077a9dd/OpportunityDetail?opportunityId=8420f2d7-bfb9-4665-a097-f464af7b3eb0"
                           target="_blank">
                            Summer 2026 Intern (Remote/New York, NY)
                        </a>
                    </li>
                    <li>
                        <a href="https://recruiting.ultipro.com/HOL1002HPHM/JobBoard/be27b89b-3cb9-491f-a1b0-42f8b077a9dd/OpportunityDetail?opportunityId=3cd3a902-ee0b-4fb1-954a-4cd1c056611d"
                           target="_blank">
                            Salesforce Development Intern, Macmillan Learning (Remote)
                        </a>
                    </li>
                    <li>
                        <a href="https://recruiting.ultipro.com/HOL1002HPHM/JobBoard/be27b89b-3cb9-491f-a1b0-42f8b077a9dd/OpportunityDetail?opportunityId=2802d97a-8f5c-4287-a255-7534e2a28ad5"
                           target="_blank">
                            High School Editorial Intern, Macmillan Learning (Remote)
                        </a>
                    </li>
                    <li>
                        <a href="https://recruiting.ultipro.com/HOL1002HPHM/JobBoard/be27b89b-3cb9-491f-a1b0-42f8b077a9dd/OpportunityDetail?opportunityId=2510def4-86d7-4739-a2d3-df7e88d4cef7"
                           target="_blank">
                            Brand Experience Marketing Intern, Macmillan Learning (Remote)
                        </a>
                    </li>
                    <li>
                        <a href="https://recruiting.ultipro.com/HOL1002HPHM/JobBoard/be27b89b-3cb9-491f-a1b0-42f8b077a9dd/OpportunityDetail?opportunityId=e2a035fd-594e-41de-ab35-94747cfe90bc"
                           target="_blank">
                            Content Management - Production & Permissions Intern, Macmillan Learning (New
                            York,NY/Boston,MA)
                        </a>
                    </li>
                    <li>
                        <a href="https://recruiting.ultipro.com/HOL1002HPHM/JobBoard/be27b89b-3cb9-491f-a1b0-42f8b077a9dd/OpportunityDetail?opportunityId=80b3f9f4-d619-4454-b1d7-787abf8c1ac5"
                           target="_blank">
                            Customer Support Intern, Macmillan Learning (Remote)
                        </a>
                    </li>
                    <li>
                        <a href="https://recruiting.ultipro.com/HOL1002HPHM/JobBoard/be27b89b-3cb9-491f-a1b0-42f8b077a9dd/OpportunityDetail?opportunityId=af353f41-20d1-42d5-b7a4-a19551a0b787"
                           target="_blank">
                            Content Marketing Intern, Macmillan Learning (Remote)
                        </a>
                    </li>
                    <li>
                        <a href="https://recruiting.ultipro.com/HOL1002HPHM/JobBoard/be27b89b-3cb9-491f-a1b0-42f8b077a9dd/OpportunityDetail?opportunityId=3cd3a902-ee0b-4fb1-954a-4cd1c056611d"
                           target="_blank">
                            Performance Marketing and Operations Intern, Macmillan Learning (New York, NY/Boston,
                            MA/Austin, TX/Remote)
                        </a>
                    </li>
                </ul>
                <hr/>
                <br/>
                <span style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
  <img src={sasLogo} alt="S&S logo" style={{width: '24px', height: '24px', objectFit: 'contain'}}/>
  <p style={{margin: 0}}>Simon & Schuster</p>
</span>
                <ul>
                    <li>
                        <a href="https://jobs.dayforcehcm.com/en-US/simonschustr/CANDIDATEPORTAL/jobs/5740"
                           target="_blank">
                            Customer Financial Services Intern, Summer 2026 (Riverside, NJ)
                        </a>
                    </li>
                </ul>
                <hr/>
                <br/>
                <span style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
  <img src={sbLogo} alt="Sourcebooks logo" style={{width: '24px', height: '24px', objectFit: 'contain'}}/>
  <p style={{margin: 0}}>Sourcebooks</p>
</span>
                <hr/>
                <br/>
                <span style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
  <img src={bloomsburyLogo} alt="Bloomsbury logo" style={{width: '24px', height: '24px', objectFit: 'contain'}}/>
  <p style={{margin: 0}}>Bloomsbury</p>
</span>
                <ul>
                    <li>
                        <a href="https://recruiting.paylocity.com/Recruiting/Jobs/Details/4011447" target="_blank">
                            Fairchild Books- Spring/Summer Editorial Internship (New York, NY Hybrid)
                        </a>
                    </li>
                </ul>
                <hr/>
                <br/>
                <span style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
  <img src={scholasticLogo} alt="Scholastic logo" style={{width: '24px', height: '24px', objectFit: 'contain'}}/>
  <p style={{margin: 0}}>Scholastic</p>
</span>
                <hr/>
                <br/>
                <span style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
  <img src={chronicleLogo} alt="Chronicle logo" style={{width: '24px', height: '24px', objectFit: 'contain'}}/>
  <p style={{margin: 0}}>Chronicle Books</p>
</span>
                <hr/>
                <br/>
                <span style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
  <img src={beaconLogo} alt="Beacon logo" style={{width: '24px', height: '24px', objectFit: 'contain'}}/>
  <p style={{margin: 0}}>Beacon Press</p>
</span>
                <ul>
                    <li>
                        <a href="https://www.beacon.org/Assets/ClientPages/Openings.aspx" target="_blank">
                            Digital & Social Media Intern (Boston, MA)
                        </a>
                    </li>
                </ul>
                <hr/>
                <br/>
                <span style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
  <img src={abramsLogo} alt="abrams logo" style={{width: '24px', height: '24px', objectFit: 'contain'}}/>
  <p style={{margin: 0}}>Abrams</p>
</span>
                <hr/>
                <br/>
                <span style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
  <img src={hhLogo} alt="Holiday Houselogo" style={{width: '24px', height: '24px', objectFit: 'contain'}}/>
  <p style={{margin: 0}}>Holiday House/Peachtree</p>
</span>
                <ul>
                    <li>
                        <a href="https://www.peachtreebooks.com/wp-content/uploads/2021/06/PT-Internship-Posting-Summer-2026.docx"
                           target="_blank">
                            Summer 2026 General Publishing Intern / Paid, Part Time (Atlanta, GA)
                        </a>
                    </li>
                </ul>
                <hr/>
                <br/>
                <span style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                    <img src={candleLogo} alt="Candlewick logo" style={{width: '24px', height: '24px', objectFit: 'contain'}}/>
                    <p style={{margin: 0}}>Candlewick Press</p>
                </span>
                <ul>
                    <li>
                        <a href="https://www.candlewick.com/careers/production-internship/"
                           target="_blank">
                            Production Internship
                        </a>
                    </li>
                    <li>
                        <a href="https://www.candlewick.com/careers/sales-internship/"
                           target="_blank">
                            Sales Internship
                        </a>
                    </li>
                    <li>
                        <a href="https://www.candlewick.com/careers/publishing-technologies-internship/"
                           target="_blank">
                            Publishing Technologies Internship
                        </a>
                    </li>
                    <li>
                        <a href="https://www.candlewick.com/careers/marketing-internship/"
                           target="_blank">
                            Marketing Internship
                        </a>
                    </li>
                    <li>
                        <a href="https://www.candlewick.com/careers/editorial-internship/"
                           target="_blank">
                            Editorial Internship
                        </a>
                    </li>
                    <li>
                        <a href="https://www.candlewick.com/careers/design-internship/"
                           target="_blank">
                            Design Internship
                        </a>
                    </li>
                </ul>
                <hr/>
                <br/>
                <span style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
  <img src={whLogo} alt="Writer's House logo" style={{width: '24px', height: '24px', objectFit: 'contain'}}/>
  <p style={{margin: 0}}>Writer's House</p>
</span>
                <ul>
                    <li>
                        <a href="https://www.writershouse.com/intern-program/" target="_blank">
                            Writer's House Intern Program, Summer
                        </a>
                    </li>
                </ul>
                <hr/>
                <br/>
                <span style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
  <img src={wwLogo} alt="W.W. Norton logo" style={{width: '24px', height: '24px', objectFit: 'contain'}}/>
  <p style={{margin: 0}}>W.W. Norton</p>
</span>
                <ul>
                    <li>
                        <a href="https://apps.atsondemand.com/templates/magneto/#/jobDescription/909347/"
                           target="_blank">
                            Client Services Internship, Summer 2026 (New York or Remote, OT)
                        </a>
                    </li>
                    <li>
                        <a href="https://apps.atsondemand.com/templates/magneto/#/jobDescription/909342/"
                           target="_blank">
                            Art, Archaeology, and Biological Anthropology Editorial Internship, Summer 2026 (New
                            York or
                            Remote, OT)
                        </a>
                    </li>
                    <li>
                        <a href="https://apps.atsondemand.com/templates/magneto/#/jobDescription/909343/"
                           target="_blank">
                            Biology Editorial Internship, Summer 2026 (New York or Remote, OT)
                        </a>
                    </li>
                    <li>
                        <a href="https://apps.atsondemand.com/templates/magneto/#/jobDescription/909346/"
                           target="_blank">
                            Chemistry Print and Media Internship, Summer 2026 (New York or Remote, OT)
                        </a>
                    </li>
                    <li>
                        <a href="https://apps.atsondemand.com/templates/magneto/#/jobDescription/909322/"
                           target="_blank">
                            College Manuscript Editorial Internship, Summer 2026 (New York or Remote, OT)
                        </a>
                    </li>
                    <li>
                        <a href="https://apps.atsondemand.com/templates/magneto/#/jobDescription/909341/"
                           target="_blank">
                            Composition, Film, and Communication Editorial Internship, Summer 2026 (New York or
                            Remote,
                            OT)
                        </a>
                    </li>
                    <li>
                        <a href="https://apps.atsondemand.com/templates/magneto/#/jobDescription/909315/"
                           target="_blank">
                            Environmental Science and Economics Editorial Internship, Summer 2026 (New York or
                            Remote, OT)
                        </a>
                    </li>
                    <li>
                        <a href="https://apps.atsondemand.com/templates/magneto/#/jobDescription/909316/"
                           target="_blank">
                            Geosciences Editorial Internship, Summer 2026 (New York or Remote, OT)
                        </a>
                    </li>
                    <li>
                        <a href="https://apps.atsondemand.com/templates/magneto/#/jobDescription/909320/"
                           target="_blank">
                            History Editorial Internship, Summer 2026 (New York or Remote, OT)
                        </a>
                    </li>
                    <li>
                        <a href="https://apps.atsondemand.com/templates/magneto/#/jobDescription/909323/"
                           target="_blank">
                            Psychology Media Editorial Internship, Summer 2026 (New York or Remote, OT)
                        </a>
                    </li>
                    <li>
                        <a href="https://apps.atsondemand.com/templates/magneto/#/jobDescription/909340/"
                           target="_blank">
                            College Sales Internship, Summer 2026 (Remote, OT)
                        </a>
                    </li>
                    <li>
                        <a href="https://apps.atsondemand.com/templates/magneto/#/jobDescription/909355/"
                           target="_blank">
                            Contracts Department Internship, Summer 2026 (New York, NY)
                        </a>
                    </li>
                    <li>
                        <a href="https://apps.atsondemand.com/templates/magneto/#/jobDescription/909349/"
                           target="_blank">
                            Countryman Editorial, Marketing & Publicity Internship, Summer 2026 (New York or Remote,
                            OT)
                        </a>
                    </li>
                    <li>
                        <a href="https://apps.atsondemand.com/templates/magneto/#/jobDescription/909307/"
                           target="_blank">
                            Custom Publications Print and Digital Editorial Internship, Summer 2026 (New York or
                            Remote,
                            OT)
                        </a>
                    </li>
                    <li>
                        <a href="https://apps.atsondemand.com/templates/magneto/#/jobDescription/909313/"
                           target="_blank">
                            High School Editorial: Print and Media Internships, Summer 2026 (New York or Remote, OT)
                        </a>
                    </li>
                    <li>
                        <a href="https://apps.atsondemand.com/templates/magneto/#/jobDescription/909312/"
                           target="_blank">
                            High School Sales and Marketing Internship, Summer 2026 (New York or Remote, OT)
                        </a>
                    </li>
                    <li>
                        <a href="https://apps.atsondemand.com/templates/magneto/#/jobDescription/909345/"
                           target="_blank">
                            Academic Marketing Internship (Classic Reprints Series, Norton Shorts, Literature, etc)
                            Summer
                            2026 (New York or Remote, OT)
                        </a>
                    </li>
                    <li>
                        <a href="https://apps.atsondemand.com/templates/magneto/#/jobDescription/909351/"
                           target="_blank">
                            College Marketing Internship, Summer 2026 (New York or Remote, OT)
                        </a>
                    </li>
                    <li>
                        <a href="https://apps.atsondemand.com/templates/magneto/#/jobDescription/909344/"
                           target="_blank">
                            Design Internship (College Advertising), Summer 2026 (New York or Remote, OT)
                        </a>
                    </li>
                    <li>
                        <a href="https://apps.atsondemand.com/templates/magneto/#/jobDescription/909350/"
                           target="_blank">
                            Trade Academic Marketing Internship, Summer 2026 (New York or Remote, OT)
                        </a>
                    </li>
                    <li>
                        <a href="https://apps.atsondemand.com/templates/magneto/#/jobDescription/909358/"
                           target="_blank">
                            Trade Marketing Internship, Summer 2026 (New York, NY)
                        </a>
                    </li>
                    <li>
                        <a href="https://apps.atsondemand.com/templates/magneto/#/jobDescription/909354/"
                           target="_blank">
                            Norton Professional Books Internship, Summer 2026 (Remote, OT)

                        </a>
                    </li>
                    <li>
                        <a href="https://apps.atsondemand.com/templates/magneto/#/jobDescription/909356/"
                           target="_blank">
                            Norton Young Readers Internship, Summer 2026 (New York, NY)
                        </a>
                    </li>
                    <li>
                        <a href="https://apps.atsondemand.com/templates/magneto/#/jobDescription/909352/"
                           target="_blank">
                            Digital Production Internship, Summer 2026 (Remote, OT)
                        </a>
                    </li>
                    <li>
                        <a href="https://apps.atsondemand.com/templates/magneto/#/jobDescription/909353/"
                           target="_blank">
                            Trade Editorial Internship, Summer 2026 (New York or Remote, OT)
                        </a>
                    </li>

                </ul>
            </div>
        </section>

        <div className="ticks"></div>
        <section id="spacer"></section>
    </>)
}

export default App
