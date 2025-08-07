---
layout: case-study.njk
title: "Redesigning Enterprise Alerts Management"
templateEngineOverride: njk,md
permalink: /case-studies/alerts-management-redesign/
summary: "A deep dive into the strategic redesign of a complex enterprise alerts module, transforming a confusing legacy UI into an intuitive, wizard-based workflow that significantly reduced user errors and support load."
project_role: "Lead UX Designer and Functional Spec Author"
team_members: "Product Management, Engineering, Customer Support"
tools_used: "UX Strategy, Usability Testing, User Interviews and Surveys, Information Architecture, Wireframing and Prototyping (Adobe XD), Functional Specification Authoring"
timeline: "4 months"
business_goals: "Improve Alerts Management usability, reduce misconfigurations and support load, enhance operational efficiency, and address customer retention risk caused by longstanding usability issues."
user_problem_solved: "Transformed a confusing legacy accordion UI for alert setup into a clear, guided wizard, tackling high cognitive load and user errors."
eleventyNavigation:
  key: Redesigning Enterprise Alerts Management
  parent: Work
  order: 4
tags: "caseStudy"
pageClass: page-case-study
heroCardsHTML: | 
  <div class="hero-section">
      <div class="case-study-hero-cards-grid">
          <div class="case-study-hero-card">

              <div class="case-study-card-metric">
                  30%
                  <span class="material-symbols-outlined" style="font-size: 2rem; color: #66BB6A; vertical-align: middle; margin-left:-10px;">
                      arrow_downward_alt
                  </span>
              </div>

              <h3 class="case-study-card-headline">Support Load Reduced</h3>
              <p class="case-study-card-description">Simplified the alert setup process, directly cutting the volume of related support tickets post-launch.</p>
          </div>
          <div class="case-study-hero-card">

              <div class="case-study-card-metric">
                  50%
                  <span class="material-symbols-outlined" style="font-size: 2rem; color: #66BB6A; vertical-align: middle;margin-left:-10px;">
                      arrow_downward_alt
                  </span>
              </div>
              <h3 class="case-study-card-headline">Configuration Time Cut</h3>
              <p class="case-study-card-description">Replaced a complex legacy form with an intuitive wizard, drastically shortening configuration time.</p>
          </div>
          <div class="case-study-hero-card">

              <div class="case-study-card-metric">
                  85%
                  <span class="material-symbols-outlined" style="font-size: 2rem; color: #66BB6A; vertical-align: middle; margin-left: -10px;">
                      arrow_upward_alt
                  </span>
              </div>
              <h3 class="case-study-card-headline">User Confidence Boost</h3>
              <p class="case-study-card-description">The guided workflow gave users the capability to succeed, which boosted overall satisfaction.</p>
          </div>
      </div>
  </div>
---

<!-- Overview -->
<div id="alerts-overview" class="text-content-block" data-tab-label="Overview">
    <h2>Project Overview and Summary</h2>
    <p>A critical B2B enterprise Alerts Management module was plagued by a clunky, error-prone legacy design, leading to frequent misconfigurations, missed notifications, and a frustrating setup process that disrupted daily workflows. The detailed specifications I authored and the wizard-based configuration process I designed were central to turning a frustrating experience into a streamlined, user-friendly tool, which directly resulted in a  <strong class="metric-highlight">30% reduction in alert-setup-related support tickets</strong> within the first quarter post-launch, while significantly boosting user confidence and efficiency.</p>
    <div class="case-study-overview-list" style="margin-top: 2em;">
        <ul>
            <li>
                <div class="header">My Role</div>
                <div class="content">{{ project_role }}</div>
            </li>
            <li>
                <div class="header">Team</div>
                <div class="content">{{ team_members }}</div>
            </li>
            <li>
                <div class="header">Tools and Methods</div>
                <div class="content">{{ tools_used }}</div>
            </li>
            <li>
                <div class="header">Timeline </div>
                <div class="content">{{ timeline }}</div>
            </li>
            <li>
                <div class="header">Business Goals</div>
                <div class="content">{{ business_goals }}</div>
            </li>
            <li>
                <div class="header">Key User and Business Problem Solved</div>
                <div class="content">{{ user_problem_solved }}</div>
            </li>
        </ul>
    </div>
</div>

<!-- Challenge -->
<div id="alerts-challenge" class="text-content-block" data-tab-label="Challenge">
    <h2>The Challenge: Legacy Design Hurdles</h2>
    <p>The existing Alerts Management module, business-critical for a B2B IoT platform, was weighed down by a clunky legacy architecture and built without UX input. This wasn't just a cosmetic issue. It actively got in users' way and slowed down core operations.</p>
    <h3>Confusion from the Start</h3>
    <p>Before users could even begin setting up an alert, they landed on a page <span class="fig-reference">(Fig 1)</span> labeled "Notifications": a term that didn't reflect the task at hand.  This kind of mismatch in language was one of many signs the UI had been built without talking to real users. As part of the redesign, we renamed it "Alerts" to better match what users were actually doing.</p>
</div> 

<!-- Fig 1: The legacy alert landing page UI 
{% fullWidthImage "/images/case-studies/Alerts Landing Pre Update Stich AI Update Larger Size v2.png", 
"The original landing page labeled 'Notifications', showing a bare-bones table with unclear structure, outdated terminology, and no obvious path to create or manage alerts.", "Fig 1: The pre-update landing page for Alerts (then called Notifications). The stripped-down layout, developer-driven terminology, and lack of filtering or guidance left users guessing where to begin." %}  -->

<!-- Fig 1: The legacy alert landing page UI -->
{% fullWidthImage "/images/case-studies/AssetNotificationsLegacy.png", 
"The original landing page labeled 'Notifications', showing a bare-bones table with unclear structure, outdated terminology, and no obvious path to create or manage alerts.", "Fig 1: The pre-update landing page for Alerts (then called Notifications). The stripped-down layout, developer-driven terminology, and lack of filtering or guidance left users guessing where to begin." %}


<!-- Challenge / Existing Problem -->
<div  class="text-content-block">
    <h3>The Existing Problem: A Clunky and Error-Prone Experience</h3>
    <ul>
        <li>
            <h4>Outdated and Confusing UI</h4>
            <div class="content">The system was built around a clunky single-page accordion layout <span class="fig-reference">(Fig 2)</span>, forcing users to navigate a dense, non-intuitive UI to find and set parameters.</div>
        </li>
        <li>
            <h4>Non-Dynamic Input Fields</h4>
            <div class="content">Input fields lacked dynamic behavior (e.g., "Alert Method" not updating based on type of asset selected), making the setup confusing. This led to frequent errors and frustration.</div>
        </li>
        <li>
            <h4>Difficult Configuration</h4>
            <div class="content">Users found the alert setup process confusing and error-prone. It required deep system knowledge with little built-in guidance. There was also no way to review the full configuration before submitting, which led to uncertainty and frequent mistakes.</div>
        </li>
        <li>
            <h4>Missing Guardrails</h4>
            <div class="content">The system didn't warn users when selecting incompatible settings or leaving key fields blank. This often led to invalid configurations, which triggered system errors or caused alerts to fail silently resulting in avoidable support tickets and lost trust.</div>
        </li>
    </ul>
</div>

<!-- Fig 2: The legacy alert configuration UI -->
{% fullWidthImage "/images/case-studies/Alerts Management Old UI.png", "Screenshot of the old alert setup screen, with a long single-page accordion layout featuring collapsed sections like Message, Asset, and Temperature. The interface lacks structure and offers no guidance.", "Fig 2: The original alert configuration screen used a single-page accordion that showed everything at once, with no guidance or visual hierarchy. Users had to scroll, expand sections, and guess what applied, which made setup slow, confusing, and error-prone." %}

<!-- Business and User Impact -->
 <div class="text-content-block after-image">
    <h3>Business and User Impact: The Cost of Poor Usability</h3>
    <ul>
        <li>
            <h4>Missed Critical Alerts</h4>
            <div class="content">The confusing interface often led to misconfigured alerts, e.g.  temperature thresholds or geofence breaches, which resulted in missed issues that should have triggered action.</div>
        </li>
        <li>
            <h4>Operational Risk for Customers</h4>
            <div class="content">When alerts didn't fire as expected, downstream customer operations suffered. Missed alarms meant spoiled cargo, unmonitored assets, or service delays that could have been avoided.</div>
        </li>
        <li>
            <h4>Support Overload and Alert Fatigue</h4>
            <div class="content">Poorly designed defaults and unclear options led to excessive and often irrelevant alerts. Teams were flooded with notifications many of them unnecessary, which eroded trust and created more work for support.</div>
        </li>
        <li>
            <h4>Frustration and Workflow Disruption</h4>
            <div class="content">The UI didn't help users succeed. It slowed them down, caused uncertainty, and introduced errors into a critical operational tool. The end result was frustration, duplicated effort, and wasted time.</div>
        </li>
    </ul>
    <p>Bottom line: the module needed more than a facelift. It needed to be rebuilt to work the way users actually think and work.</p>
</div>

<!-- User Quotation -->
<div class="styled-quote-container">
    <span class="styled-quote-decorative-marks">“</span>
    <p class="styled-quote-text">Even after selecting an asset type, the alert options didn't change. I had no idea which ones actually applied to that asset versus general ones.</p>
    <p class="styled-quote-attribution">Fleet Manager at a Commercial Carrier</p>
</div>

<!-- Approach -->
<div id="alerts-approach" class="text-content-block" data-tab-label="Approach">
    <h2>My Role and Strategic Approach</h2>
    <p>I led the end-to-end UX design effort to overhaul a business-critical Alerts Management module for a B2B IoT platform. While another UX team member contributed to early research and concepts, I drove the design from strategy through specification and served as the primary UX owner throughout implementation ensuring the final solution met both user and business needs.</p>
    <h3>Key Contributions</h3>
    <ul>
        <li>
            <h4>Comprehensive User Research</h4>
            <div class="content">Led workshops, user interviews, and support ticket analysis to uncover critical usability issues and workflow blockers in the legacy system. These findings directly informed the redesign strategy.</div>
        </li>
        <li>
            <h4>Information Architecture and User Flow Design</h4>
            <div class="content">Mapped and restructured the alert management experience, including flows for creating, editing, and managing alerts in bulk turning a previously overwhelming process into a clear, repeatable one.</div>
        </li>
        <li>
            <h4>Authoring Detailed Functional Specifications</h4>
            <div class="content">With no component library available at the time this project was worked on, I wrote the foundational spec from scratch, which detailed every UI element, state, data rule, and error condition. This doc became the source of truth for developers and QA, ensuring pixel-perfect implementation.</div>
        </li>
        <li>
            <h4>Wireframing, Prototyping, and Cross-Functional Collaboration</h4>
            <div class="content">Wireframed, mocked up, and prototyped key concepts, including the alert creation wizard in <span class="fig-reference">(Fig 3)</span>. I worked closely with Product and Engineering to refine edge cases, confirm feasibility, and get stakeholder alignment before handoff.</div>
        </li>
    </ul>
</div>

<!-- Fig 3:  Early Wireframe -->
{% fullWidthImage "/images/case-studies/Alerts Management Early Wireframe Old vs New.png", "A before-and-after wireframe comparison. The 'before' shows a cluttered, single-page accordion form that is crossed out. The 'after' shows a streamlined, multi-step wizard in a modal window, illustrating the strategic shift to a guided user flow.", "Fig 3: Early concept wireframes showing the shift from a single-page accordion (left, rejected) to a step-by-step wizard (right). The old design dumped everything on the user at once, while the new layout guides them through each step, reducing confusion and setup errors."%}

<!-- Strategic Design Objectives -->
<div class="text-content-block after-image">
  <h3>Strategic Design Objectives</h3>
  <ul>
      <li>
        <h4>Streamlining Alert Management</h4>
        <div class="content">Enable more granular control over alert parameters, e.g. thresholds, conditions, and schedules, and improve the ability to search, filter, and take action from a centralized view. Power users also needed an Advanced Search panel to filter alerts by fields like asset type or status <span class="fig-reference">(Fig 5)</span>. The redesigned dashboard provided a cleaner default layout <span class="fig-reference">(Fig 4)</span>, but the full query capabilities lived in the expandable search panel.</div>
    </li>
    <li>
        <h4>Simplify and Streamline Configuration</h4>
        <div class="content">Replace the legacy single-page accordion with a step-by-step wizard that's easier to follow. We grounded this decision in competitive benchmarks, user feedback, and internal stakeholder input. An early wireframe of a key step is shown in <span class="fig-reference">(Fig 6)</span>, which illustrates the redesigned step-by-step structure that replaced the accordion layout making the process easier to follow and reducing cognitive load.</div>
    </li>
    <li>
        <h4>Building Trust and Removing Guesswork</h4>
        <div class="content">
            <ul class="bullet-list">
                <li>Clarified confusing terms and grouped related options logically.</li>
                <li>Added inline tooltips to explain complex fields.</li>
                <li>Introduced a final "Summary" step before submission so users could double-check their setup and avoid mistakes.</li>
            </ul>
        </div>
    </li>
  </ul>
</div>


<!-- Images / Carousel / Wireframes -->
<div class="cs-carousel-container">
    <div class="cs-carousel__track-container">
        <ul class="cs-carousel__track">
            <li class="cs-carousel__slide current-slide">
                <img src="/images/case-studies/Alerts Management Wireframe Landing Page.png" alt="A wireframe of the redesigned Alerts Management landing page. It shows a simplified dashboard layout with a central table of existing alerts, search and filter options above the list, and an 'Add New' button.">
                <figcaption>Fig 4: A wireframe of the redesigned central dashboard. The simplified layout and embedded filtering tools addressed user pain points around finding and managing alerts. This new landing page served as the home base for alert workflows, replacing the generic 'Notifications' view.</figcaption>
            </li>
            <li class="cs-carousel__slide">
                <img src="/images/case-studies/AlertsManagementWireframe01AdvancedSearchPanel.png" alt="A wireframe of the alerts dashboard showing the 'Advanced Search' panel open on the right, with filters for organizational level, status, owner, and date range.">
                <figcaption>Fig 5: The 'Advanced Search' panel, designed for power users who needed more granular control. Our research showed that simple filters were insufficient for users managing hundreds of alerts across different teams. This feature directly enabled complex querying, significantly reducing the time users spent hunting for specific information.</figcaption>
            </li>
            <li class="cs-carousel__slide">
                <img src="/images/case-studies/Alerts Management Wireframe Add New Modal.png" alt="A wireframe showing the 'Add New Alert' wizard as a modal window. The 'Details' step is active, with a vertical navigation on the left showing all five steps of the process.">
                <figcaption>Fig 6: A wireframe of the 'Add New Alert' wizard, showing the first step of the new guided workflow. By breaking the process into logical sections like 'Details' and using a clear stepper for navigation, this design directly tackles the cognitive load and confusion of the old accordion layout. This structure ensures users build the alert on a solid foundation before moving to more complex options.</figcaption>
            </li>
        </ul>
        <button class="cs-carousel__button cs-carousel__button--left is-hidden">
            <span class="material-symbols-outlined">arrow_back_ios</span>
        </button>
        <button class="cs-carousel__button cs-carousel__button--right">
            <span class="material-symbols-outlined">arrow_forward_ios</span>
        </button>
    </div>
    <div class="cs-carousel__nav">
        <button class="cs-carousel__dot current-dot"></button>
        <button class="cs-carousel__dot"></button>
        <button class="cs-carousel__dot"></button>
    </div>
</div>

<!-- Research -->
<div id="alerts-research" class="text-content-block" data-tab-label="Research">
  <h2>Research and Key Insights</h2>
  <p>Before making changes, I needed to understand what was broken. I combined multiple methods -- qualitative and quantitative -- to get a full picture of where users were struggling and why.</p>
  <h3>Research Methods</h3>
  <ul>
    <li>
        <h4>Stakeholder Workshops</h4>
        <div class="content">Sessions with Product, Engineering, and Support leaders to align on business needs, technical realities, and recurring pain points.</div>
    </li>
    <li>
        <h4>User Interviews</h4>
        <div class="content">Spoke directly with end users to understand their day-to-day workflows, pain points, and what they needed most from the tool.</div>
    </li>
    <li>
        <h4>Support Ticket Analysis</h4>
        <div class="content">Audited past tickets tied to alert setup to spot common error patterns and user confusion.</div>
    </li>
    <li>
        <h4>Internal Feedback Loops</h4>
        <div class="content">Collected input from internal teams and reviewed in-product feedback to round out the picture.</div>
    </li>
  </ul>
  <!-- Research / Key Insights -->
  <h3>Key Insights from Research</h3>
  <ul>
    <li>
        <h4>Confusing Language and Setup Overload</h4>
        <div class="content">
            <ul class="bullet-list">
                <li><strong class="metric-highlight">Unclear Terms:</strong> Users didn't always understand what labels meant or how options related.</li>
                <li><strong class="metric-highlight">Overwhelming Layout:</strong> The single-page accordion layout was overwhelming and not very user-friendly.</li>
                <li><strong class="metric-highlight">Static Inputs:</strong> Input fields didn't react to context, which confused users and led to setup mistakes.</li>
            </ul>
        </div>
    </li>
    <li>
        <h4>Need for Granular Control and Clarity</h4>
        <div class="content">Users wanted clearer setup guidance and the ability to tailor alerts, e.g. treating high-priority alerts differently from routine ones.</div>
    </li>
    <li>
        <h4>Desire for Efficiency and Familiarity</h4>
        <div class="content">Users wanted simpler ways to search, filter, and manage alerts and preferred layouts that matched the other tools they used.</div>
    </li>
  </ul>
  <!-- Research / Personas -->
  <h3>Personas and Key User Needs</h3>
    <ul>
    <li>
        <h4>Fleet Manager</h4>
        <div class="content">
        Manages alerts for 100s of vehicles across multiple geofences.<br>
        Needs bulk editing, filtering, and confident delivery of critical alerts.
        </div>
    </li>
    <li>
        <h4>Ops Admin</h4>
        <div class="content">
        Handles day-to-day setup and maintenance of alerts.<br>
        Needs a reliable, step-by-step flow to avoid costly errors.
        </div>
    </li>
    <li>
        <h4>Support Tech</h4>
        <div class="content">
        Investigates and resolves issues with alert setup or failures.<br>
        Needs predictable behavior and visibility into what users configured.
        </div>
    </li>
    </ul>
    <p>These findings made the path forward clear: redesign the experience from the ground up with better structure, smarter workflows, and fewer places to get stuck.</p>
</div>

<!-- Key Pain Points -->
<h3 class="pain-points-section-title">Key Pain Points</h3> 
<div class="pain-point-cards-grid">
    <div class="pain-point-card">
        <h4 class="pain-point-card-number">Pain Point</h4>
        <h5 class="pain-point-card-name">Confusing Terminology</h5>
        <p class="pain-point-card-description">Legacy term "Notifications" confused users who were trying to set up alerts, not view messages.</p>
    </div>
    <div class="pain-point-card">
        <h4 class="pain-point-card-number">Pain Point</h4>
        <h5 class="pain-point-card-name">Inconsistent<br>Labeling</h5>
        <p class="pain-point-card-description">Field names weren't standardized, and users couldn't always tell what each input was for.</p>
    </div>
    <div class="pain-point-card">
        <h4 class="pain-point-card-number">Pain Point</h4>
        <h5 class="pain-point-card-name">Non-Dynamic<br>Inputs</h5>
        <p class="pain-point-card-description">The system let users choose invalid combinations leading to setup errors and support tickets</p>
    </div>
</div>

<!-- Solution -->
<div id="alerts-solution" class="text-content-block" data-tab-label="Solution">
  <h2>The Redesigned Solution</h2>
  <p>Based on research insights and design objectives, I designed a new Alerts Management experience focused on clarity, error prevention, and workflow efficiency. The legacy accordion form was replaced with a modern, guided UI incorporating several key enhancements, which was all documented in the functional spec I authored to ensure accurate implementation.</p>
  <h3>Key Enhancements and Their Impact</h3>
  <ul>
    <li>
        <h4>Powerful Management Tools: Bulk Editing and Cloning</h4>
        <div class="content">To reduce repetitive effort and improve consistency, we added new tools to manage multiple alerts at once. Bulk Editing enabled fast changes across many alerts like updating schedules or recipients in one go. Cloning let users duplicate existing alerts and choose which fields to carry over, speeding up setup for similar use cases.</div>
    </li>
    <li>
        <h4>Centralized Alert List and Efficient Management</h4>
        <div class="content">We replaced the scattered legacy layout with a centralized dashboard <span class="fig-reference">(Fig 7)</span> for managing alerts at scale. A clean, filterable list and quick search made finding alerts faster. The new Advanced Search panel <span class="fig-reference">(Fig 8)</span> supported complex queries critical for teams managing hundreds of alerts. This layout became the new home base for user workflows.</div>
    </li>
  </ul>
</div>

<!-- Images / Fig 7 + 8 / Landing Page Update + Landing Page with Advanced Search Update -->
<div class="cs-carousel-container">
    <div class="cs-carousel__track-container">
        <ul class="cs-carousel__track">
            <li class="cs-carousel__slide current-slide">
                <img src="/images/case-studies/Alert Management Mockup 01 Landing Page.png" alt="A high-fidelity mockup of the redesigned Alerts Management dashboard. It shows a scannable data table, search bar, filter controls, and consistent UI hierarchy for managing alerts.">
                <figcaption>Fig 7: The redesigned Alerts Management dashboard. This high-fidelity mockup translates the wireframe into a clean, scannable interface. Visual hierarchy, embedded filtering, and terminology fixes made it faster for users to find and manage alerts replacing the disjointed experience of the old system.</figcaption>
            </li>
            <li class="cs-carousel__slide">
                <img src="/images/case-studies/Alert Management Mockup 01 Advanced Search Panel.png" alt="A high-fidelity mockup of the Alerts dashboard with the 'Advanced Search' panel open on the right, showing multiple dropdowns and filters for narrowing alert results.">
                <figcaption>Fig 8: Advanced Search panel for power users. This high-fidelity view shows the final design for complex querying. User research revealed the need for advanced filtering, especially for teams managing hundreds of alerts. The panel's layout, tooltips, and clear labeling made it easier to find what matters, faster.</figcaption>
            </li>
        </ul>
        <button class="cs-carousel__button cs-carousel__button--left is-hidden">
            <span class="material-symbols-outlined">arrow_back_ios</span>
        </button>
        <button class="cs-carousel__button cs-carousel__button--right">
            <span class="material-symbols-outlined">arrow_forward_ios</span>
        </button>
    </div>
    <div class="cs-carousel__nav">
        <button class="cs-carousel__dot current-dot"></button>
        <button class="cs-carousel__dot"></button>
    </div>
</div>

<!-- Solution Continued -->
<div class="text-content-block after-image">
    <ul>
        <li>
            <h4>Intuitive Configuration: Guided "Add/Edit Alert" Workflow</h4>
            <div class="content">
                <p>The core redesign replaced the old "fill anything out anytime" flow and vague error handling with a guided, step-by-step modal wizard. This new workflow walks users through the alert creation or editing process in a structured way, reducing confusion and helping them get it right the first time.</p>
                <p>Key enhancements:</p>
                <ul>
                    <li>
                        <span class="key-enhancement-label">Progressive Disclosure:</span> Alert creation is broken into clear, logical steps (e.g., Details, Recipients <span class="fig-reference">(Fig 9)</span>, Schedule <span class="fig-reference">(Fig 10)</span>, Configuration, and Summary <span class="fig-reference">(Fig 11)</span>), each building on the last. This structure reduces overwhelm and keeps users focused.
                    </li>
                    <li>
                        <span class="key-enhancement-label">Inline Validation:</span>  Inline validation was built into each step, giving users instant feedback on missing or incorrect fields. This reduced trial-and-error and helped prevent invalid alert setups before they happened.
                    </li>
                    <li>
                        <span class="key-enhancement-label">Dynamic Fields:</span>  The form responds in real time to user input, e.g. selecting a 'Reefer' asset shows only relevant options. We also added persistent field labels and inline help to reduce confusion and prevent mistakes.
                    </li>
                    <li>
                        <span class="key-enhancement-label">Recipients Streamlined:</span>  The "Recipients" step replaces free-text inputs with a structured, searchable dropdown of verified contacts, eliminating typos and improving deliverability. We also added support for pre-defined groups, so users could assign alerts to teams without selecting individuals one by one -- saving time and reducing errors in high-volume setups.
                    </li>
                    <li>
                        <span class="key-enhancement-label">Summary Review:</span>  A final review step summarizes all selections and lets users verify everything before creating a new alert. This small but critical step boosted confidence and cut down on avoidable errors.
                    </li>
                    <li>
                        <span class="key-enhancement-label">Reduced Errors and Boosted Confidence:</span> Together, these changes made setup faster, easier, and less stressful, which led to fewer errors and higher satisfaction.
                    </li>
                    <li>
                        <span class="key-enhancement-label">Accessibility Standards:</span> All components followed WCAG AA guidelines, including color contrast and keyboard navigation support making the interface accessible for all users.
                    </li>
                </ul>
            </div>
        </li>
    </ul>
</div>

<!-- Images / Fig 9, 10 + 11 -->
<div class="cs-carousel-container">
    <div class="cs-carousel__track-container">
        <ul class="cs-carousel__track">
            <li class="cs-carousel__slide current-slide">
                <img src="/images/case-studies/Alert Management Mockup 02 Recipients Tab.png" alt="A high-fidelity mockup of the 'Recipients' step in the alert creation wizard. The screen shows dropdown inputs for email and SMS recipients, including a searchable list of individual users and predefined groups.">
                <figcaption>Fig 9: The 'Recipients' step was designed to dramatically reduce setup errors and increase delivery confidence. The old system relied on free-text fields, which were prone to typos and missed contacts. This updated design introduces a searchable, structured list of existing users and recipient groups, improving speed, accuracy, and consistency.</figcaption>
            </li>
            <li class="cs-carousel__slide">
                <img src="/images/case-studies/Alert Management Mockup 01 Schedule Tab.png" alt="A high-fidelity mockup of the 'Schedule' step in the alert creation wizard. The interface displays options to select specific days and time ranges for alert delivery.">
                <figcaption>Fig 10: The 'Schedule' step gives users control over when alerts are delivered, which is a direct solution to 'alert fatigue' identified in user interviews. By setting alerts to only trigger during working hours or critical windows, this feature ensures messages arrive when they're actually actionable.</figcaption>
            </li>
            <li class="cs-carousel__slide">
                <img src="/images/case-studies/Alert Management Mockup 01 Summary Tab.png" alt="A high-fidelity mockup of the 'Summary' step in the alert creation wizard. It shows a full recap of configuration choices with editable sections and a 'Create Alert' button.">
                <figcaption>Fig 11: The final 'Summary' step gives users a last opportunity to review their entire configuration. Research showed users felt anxious submitting alerts without knowing what they'd selected. This dedicated review step builds confidence, reduces mistakes, and mirrors familiar review patterns from other enterprise workflows.</figcaption>
            </li>
        </ul>
        <button class="cs-carousel__button cs-carousel__button--left is-hidden">
            <span class="material-symbols-outlined">arrow_back_ios</span>
        </button>
        <button class="cs-carousel__button cs-carousel__button--right">
            <span class="material-symbols-outlined">arrow_forward_ios</span>
        </button>
    </div>
    <div class="cs-carousel__nav">
        <button class="cs-carousel__dot current-dot"></button>
        <button class="cs-carousel__dot"></button>
        <button class="cs-carousel__dot"></button>
    </div>
</div>

<!-- Impact -->
<div id="alerts-impact" class="text-content-block" data-tab-label="Impact">
    <h2>Impact and Outcomes</h2>
    <p>The redesign of the Alerts Management module delivered significant, measurable improvements. It directly addressed critical legacy system pain points and enhanced both user experience and operational efficiency. Through user testing, support ticket analysis, and survey data, the system's launch quickly demonstrated its value across multiple dimensions:</p>
    <ul>
        <li>
            <h4>Significant Reduction in Support Load</h4>
            <div class="content">Support ticket data from the quarter before and after launch showed a <strong class="metric-highlight">30% drop in alert-related issues</strong>, directly reflecting a more intuitive, error-resistant setup process.</div>
        </li>
        <li>
            <h4>Improved Configuration Speed and Efficiency</h4>
            <div class="content">Timed usability tests showed a <strong class="metric-highlight">50% decrease in configuration time</strong>, with users completing alert setup in ~2.5 minutes compared to ~5 in the legacy UI.</div>
        </li>
        <li>
            <h4>Enhanced User Confidence and Satisfaction</h4>
            <div class="content">Post-launch surveys revealed an <strong class="metric-highlight">85% increase in user confidence</strong> in setting up alerts successfully. Users cited the step-by-step flow, clearer options, inline validation, and verified contact lists as major contributors. Features like grouped recipients and confirmation screens helped users feel confident that alerts would go to the right people, every time.</div>
        </li>
        <li>
            <h4>Increased Consistency in Alert Setups</h4>
            <div class="content">The new guided setup flow and improved terminology led to greater consistency across teams, reducing misconfigurations and helping prevent missed alerts.</div>
        </li>
        <li>
            <h4>Foundation for Future Enhancements</h4>
            <div class="content">The clear IA, robust spec, and modular design established a scalable foundation for future alert-related enhancements, which sped up future development and reduced ambiguity.</div>
        </li>
    </ul>
</div>

<!-- Conclusion -->
<div id="alerts-conclusion" class="text-content-block" data-tab-label="Conclusion">
    <h2>Conclusion, Lessons Learned, and Future Considerations</h2>
    <p>This project demanded more than design execution. It required strategic UX leadership to navigate technical complexity, advocate for user needs, and own quality throughout the process. My role expanded beyond design delivery to include cross-functional alignment, decision-making, and standards enforcement.</p>
    <h3>My Leadership in Action</h3>
    <ul>
        <li>
            <h4>Driving UX Vision and Execution</h4>
            <div class="content">As Lead UX Designer, I co-owned UX strategy with one other teammate early in the project, then led the full lifecycle from research through detailed specification and implementation. I championed a user-centered approach and was the primary point of contact for design questions during delivery.</div>
        </li>
        <li>
            <h4>Authoring Foundational Specifications</h4>
            <div class="content">Recognizing the absence of a component library, I created a complete end-to-end functional spec from scratch. It outlined every interaction, state, validation rule, and field-level requirement, which served as a definitive reference for Engineering and QA, ensuring accuracy throughout implementation.</div>
        </li>
        <li>
            <h4>Upholding Quality Standards</h4>
            <div class="content">When a release build failed to meet UX standards, I halted deployment to protect quality and trust. I led daily UX stand-ups to course-correct implementation, which clarified intent, caught regressions, and ensured the final product matched the spec.</div>
        </li>
        <li>
            <h4>Cross-Functional Collaboration</h4>
            <div class="content">Alert configuration is complex by nature. I addressed this with a guided wizard and progressive disclosure -- breaking tasks into steps, limiting choices to what's relevant, and giving users confidence they were on the right path.</div>
        </li>
    </ul>
    <h3>Key Challenges Overcome</h3>
    <ul>
        <li>
            <h4>Redesigning a Complex Legacy System</h4>
            <div class="content">The deeply ingrained legacy UI required more than visual polish. I used research to surface real user behaviors and mental models, then rebuilt the experience from the ground up replacing guesswork and clutter with guidance and structure.</div>
        </li>
        <li>
            <h4>Ensuring Design Fidelity Without a Mature Design System</h4>
            <div class="content"><p>Without a component library or mature design system, maintaining consistency required hands-on vigilance. I solved this through a detailed spec, regular design reviews, and a firm commitment to quality, including halting one release to ensure fidelity.</p>
            <p>This project also exposed the systemic gaps that later led me to create our first design system, which is featured in a separate case study.</p></div>
        </li>
        <li>
            <h4>Simplifying Inherent Complexity</h4>
            <div class="content">Alert configuration is inherently complex. I addressed this by introducing a guided, multi-step wizard with progressive disclosure, breaking down complexity and significantly reducing cognitive load.</div>
        </li>
    </ul>
    <h3>Lessons Learned</h3>
    <ul>
        <li>
            <h4>The Power of Detailed Specifications</h4>
            <div class="content">In enterprise environments without mature design systems, meticulously detailed functional specifications are invaluable for bridging the gap between design intent and development execution.</div>
        </li>
        <li>
            <h4>Principled Advocacy for the User</h4>
            <div class="content">Knowing when to stand firm for user experience quality, even with difficult conversations (like halting a deployment), is a critical leadership responsibility.</div>
        </li>
        <li>
            <h4>Strategic UX Drives Business Value</h4>
            <div class="content">This project showed how strategic UX can unlock major gains in efficiency, reliability, and user trust.</div>
        </li>
    </ul>
    <h3>Final Thoughts and Next Steps</h3>
    <p>The Alerts redesign turned a frustrating legacy tool into an intuitive, modern experience. It worked because we grounded the solution in real user needs, then executed it with rigor from research to spec to delivery. My consistent focus on quality and user value ensured we didn't just launch something better, but that we launched something teams could trust.</p>
    <p>The <strong class="metric-highlight">30% drop in support tickets</strong> and <strong class="metric-highlight">85% boost in user confidence</strong> proved that a better UX wasn't just possible, it was measurable. The redesigned system reduced risk, improved productivity, and supported our customers' operational integrity. It's a clear example of how strategic, detail-driven UX delivers business-critical value in complex enterprise environments.</p>
</div>