---
layout: case-study.njk
title: "B2B SaaS Fleet Dashboard Design"
templateEngineOverride: njk,md
permalink: /case-studies/fleet-dashboard/
summary: "A research-driven UX initiative that replaced report-based workflows with a real-time B2B SaaS dashboard. It surfaces alarms, cargo status, and operational exceptions to improve response time and decision-making at scale."
project_role: "Lead UX Strategist"
team_members: "Product Management, Engineering, SMEs, and external fleet operations users"
tools_used: "Figma, Balsamiq, User Interviews, Competitive Analysis, UX Research"
timeline: "3 Months"
business_goals: "Improve operational efficiency, reduce time-on-task, streamline decision-making, and surface critical fleet data in real time."
user_problem_solved: "Users previously relied on multiple reports, filters, and manual checks to monitor fleet status, alarms, and dwell. The dashboard centralized this into a single real-time view, eliminating unnecessary steps and reducing friction."
eleventyNavigation:
  key: B2B SaaS Fleet Dashboard Design
  parent: Work
  order: 1
tags: "caseStudy"
pageClass: page-case-study
heroCardsHTML: | 
 <div class="hero-section">
      <div class="case-study-hero-cards-grid">
          <div class="case-study-hero-card">
              <div class="case-study-card-metric">
                  50%
                  <span class="material-symbols-outlined" style="font-size: 2rem; color: #66BB6A; vertical-align: middle; margin-left:-10px;">
                      arrow_downward_alt
                  </span>
              </div>
              <h3 class="case-study-card-headline">Fewer Workflow<br>Steps</h3>
              <p class="case-study-card-description">Cut the workflow from 4 steps to 2 by removing report navigation and filtering.</p>
          </div>
          <div class="case-study-hero-card">
              <div class="case-study-card-metric">
                  30%
                  <span class="material-symbols-outlined" style="font-size: 2rem; color: #66BB6A; vertical-align: middle; margin-left:-10px;">
                      arrow_upward_alt
                  </span>
              </div>
              <h3 class="case-study-card-headline">Faster Issue Identification</h3>
              <p class="case-study-card-description">Simplified workflows reduced the time needed to detect alarms and fleet issues.</p>
          </div>
          <div class="case-study-hero-card">
              <div class="case-study-card-metric">
                  80%
                  <span class="material-symbols-outlined" style="font-size: 2rem; color: #66BB6A; vertical-align: middle; margin-left:-10px;">
                      arrow_upward_alt
                  </span>
              </div>
              <h3 class="case-study-card-headline">Increased Fleet Visibility</h3>
              <p class="case-study-card-description">Consolidated data from multiple reports into a real-time dashboard.</p>
          </div>
      </div>
   </div>
---

{# The body of the Markdown now starts directly with your first tabbed section. #}
{# The hero cards section (HTML) has been moved to the 'heroCardsHTML' frontmatter variable above. #}

<!-- Overview -->
<div id="overview" class="text-content-block" data-tab-label="Overview">
    <h2>Project Overview</h2>
    <p>Fleet operations teams relied on multiple reports to track alarms -- cargo, dwell, and movement -- requiring filters, cross-checks, and manual searches. This UX-led project created the platform's first Fleet Dashboard, replacing that with a real-time operational view. I led research, wireframes, and design in collaboration with Product, Engineering, and SMEs. Based on user interviews and competitive analysis, the dashboard delivered major efficiency gains and became the most-used page within a month.</p>
    <div class="case-study-overview-list">
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
                <div class="header">Tools</div>
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
<div id="the-challenge" class="text-content-block" data-tab-label="Challenge">
    <h2>The Challenge: From Manual Reports to Real-Time Visibility</h2>
    <p>Before the dashboard, fleet teams had no operational overview. Monitoring alarms, cargo, dwell, or movement meant opening multiple reports, like Reefer Status or Location Tracking, applying filters, and scanning through raw data. This was slow, error-prone, and a constant source of frustration.</p>
    <p>Different users needed entirely different views. A reefer-only operator, a dry fleet dispatcher, and a mixed-fleet customer support rep all had distinct priorities. No single default dashboard would work for everyone, which made customization a critical design requirement. Version 1 allowed users to show or hide cards; Version 2 on the roadmap would support rearranging them, which introduced technical complexity with layout rules, grid behavior, and scaling constraints.</p>
    <ul>
      <li>
      <h4>Operational Blind Spots</h4>
      <div class="content">
          Relying on static reports meant users had no real-time view of fleet status. Since the data was constantly updating from IoT tracking devices, users had to keep checking the Reefer Status Report for the latest alarms, motion status, or disconnects, which added friction and delayed response time.
      </div>
      </li>
      <li>
        <h4>Workflow Inefficiency</h4>
        <div class="content">Routine tasks were tedious. Something as simple as checking for shutdown alarms meant logging into the Reefer Status Report, applying filters, and scanning rows of data manually, which wasted minutes every time the user had to check.</div>
      </li>
  </ul>
</div>

<!-- Image / Legacy Reefer Status Report -->
{% fullWidthImage "/images/case-studies/RSReport.png", "The legacy Reefer Status Report required users to apply filters manually and scan rows of data to spot issues.", "Fig 1: The legacy Reefer Status Report required users to apply filters manually and scan rows of data to spot issues." %}

<!-- Challenge continued -->
<div class="text-content-block after-image">  
    <ul>
    <li>
        <h4>One-Size-Fits-None Was a Real Problem</h4>
        <div class="content">
        Mixed fleet managers, reefer-only operators, and dry fleet dispatchers had radically different priorities. This wasn't anecdotal. It was validated through both interviews and behavior tracking. Some users focused entirely on reefer alarms. Others prioritized dwell time or cargo status. This directly validated the need for a modular, customizable dashboard, as well as the role-based default views we shipped for Fleet Managers, Customer Support / Operations / Dispatch, and a general fallback group.
        </div>
    </li>
    <li>
    <h4>UX and Engineering Constraints</h4>
    <div class="content">
        Allowing cards to be shown/hidden, and eventually reordered, created layout challenges. Not all cards were the same size, and maintaining a clean, scannable grid under these conditions required deliberate rules for how the UI would flex and scale.
    </div>
    </li>
  </ul>

  <p class="key-question">
    The challenge was clear: How could we transform a report-driven workflow into a real-time, flexible dashboard while balancing operational clarity, customization, and technical constraints?
  </p>
</div>

<div class="styled-quote-container">
  <span class="styled-quote-decorative-marks">“</span>
  <p class="styled-quote-text">
    I'm piecing things together from multiple reports. There's no single place where I can just see what's going on with my fleet.
  </p>
  <p class="styled-quote-attribution">
    — Fleet Manager, User Interview
  </p>
</div>

<!-- Approach -->
<div id="my-role" class="text-content-block" data-tab-label="Approach">
    <h2>My Role and Strategic Approach</h2>
    <p>I led the UX strategy from problem framing through research, design, and validation. My approach combined qualitative interviews, SaaS product analytics, and usability testing to align user needs with business goals.</p>
    <h3>Research and Discovery</h3>
    <p>We started with user interviews across key roles -- Fleet Managers, Customer Support, and Operations -- to uncover workflow pain points. A common theme emerged: too much time spent navigating reports, filtering, and cross-checking data. One fleet manager summed it up: <span class="styled-quote-inline">'I'm piecing things together from multiple reports. There's no single place where I can just see what's going on with my fleet.'</span></p>
    <p>In parallel, we used Pendo product analytics to validate patterns. Drop-offs during report filtering and high repeat visits for alarm checks confirmed the workflow was inefficient.</p>
    <p>We also created actionable personas, including <strong class="metric-highlight">Marcus Lee, an Operations Manager</strong>, whose need to prioritize alarms and fleet status directly shaped dashboard customization.</p>
</div>

<!-- Image / Terminal Manager Persona -->
{% fullWidthImage "/images/case-studies/OMP Mobile App In Terminal Manager Persona v2.png", "Persona artifact for Marcus Lee, an Operations Manager overseeing mixed reefer and dry fleets. His goals and frustrations directly informed dashboard card prioritization and customization features.", "Fig 2: Marcus Lee represented one of the primary user types. His need to quickly surface critical alarms without unnecessary noise reinforced the requirement for a modular dashboard." %}

<!-- Approach continued -->
<div class="text-content-block after-image">  
    <h3>Mapping Workflow Friction</h3>
    <p>We mapped the legacy workflow: log in, navigate to the Reefer Status Report, apply filters (e.g., Shutdown alarms), wait for results, and repeat -- averaging 4 steps per task. The dashboard reduced this to 2 steps: log in and click an alarm card. Time-on-task analysis using Pendo sessions confirmed a <strong class="metric-highlight">50% reduction in steps</strong> and <strong class="metric-highlight">30% faster issue identification</strong>.</p>
    <h3>Test-Driven, Collaborative Design</h3>
    <p>Wireframes in Balsamiq evolved into high-fidelity prototypes in Figma. We collaborated closely with Product, Engineering, and SMEs to ensure the design supported different fleet types -- reefer-only, dry-only, and mixed -- with flexible defaults and alarm configurations. We also reviewed competitive SaaS dashboards to validate common design patterns like modular cards, role-based defaults, and clickable alarm summaries, which ensured the design met user expectations and SaaS UX standards.   The launch also included a redesign of the platform's global navigation, replacing top-heavy links with a left-aligned nav more consistent with modern SaaS layouts.</p>
</div>

<!-- Images / Carousel / Wireframes -->
<div class="cs-carousel-container">
    <div class="cs-carousel__track-container">
        <ul class="cs-carousel__track">
            <li class="cs-carousel__slide current-slide">
                <img src="/images/case-studies/B2B-SaaS-Fleet-Dashboard-Early-Wireframe-01.png" alt="Wireframe of the Fleet Dashboard (All Assets view) showing active alarms, cargo status, fuel levels, and asset movement. Donut chart shows 100 total assets with 60 moving and 40 dwelling.">
                <figcaption>Fig 3: Early wireframe for the general Fleet Dashboard view. This concept emphasized a role-neutral layout showing alarms, movement, and fuel data across the full fleet. Card-based modules replaced manual filtering across multiple reports.</figcaption>
            </li>
            <li class="cs-carousel__slide">
                <img src="/images/case-studies/B2B-SaaS-Fleet-Dashboard-Early-Wireframe-04.png" alt="Wireframe of the Fleet Dashboard (Reefer view) showing alarms, reefer micro disconnects, and temperature range data. View is tailored to refrigerated fleet monitoring needs.">
                <figcaption>Fig 4: The reefer-specific dashboard prototype introduced role-based filtering and reefer-only data. The design included set point temperatures, reefer micro disconnects, and other data not relevant to dry fleets.</figcaption>
            </li>
            <li class="cs-carousel__slide">
                <img src="/images/case-studies/B2B-SaaS-Fleet-Dashboard-Early-Wireframe-05.png" alt="Wireframe of the Fleet Dashboard (Dry view) showing cargo status, fuel levels, and dry fleet-specific alarms. Reefer-specific metrics are omitted.">
                <figcaption>Fig 5: The dry fleet dashboard removed refrigerated-specific data to reduce noise and improve clarity. Users saw only relevant metrics like fuel sensors and cargo camera status, aligned to dry fleet operations.</figcaption>
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

<!-- Approach continued -->
<div class="text-content-block after-image">
    <h3>Role-Based Defaults and Scalable Design</h3>
    <p>Alongside user-driven customization, we designed role-based default dashboards for Fleet Managers, Customer Support/Operations, and a general fallback view, based on interviews, SME input, and Pendo usage data. Each role saw a tailored view aligned to their tasks: dispatchers prioritized micro disconnects, while fleet managers focused on alarms and movement.  Early wireframes explored general, reefer-specific, and dry fleet-specific layouts to validate role-based content needs. This helped define which cards should appear by default for each fleet type.</p>
    <p>Filters and chips were dynamic based on fleet type (e.g. reefer-only accounts only saw reefer options), reducing noise and confusion. Users could also save a filter set as their default view to streamline daily use.</p>
    <p>Version 1 supported show/hide card customization. Version 2, on the roadmap, would introduce drag-and-drop card reordering -- a SaaS-standard pattern for scalable dashboards. Designing for dynamic layouts while keeping the UI scannable was a key constraint throughout.</p>
    <p>Every decision tied back to the same goal: eliminate report-hunting, improve visibility, and speed up decision-making for end users.</p>
</div>

<!-- Image / Fleet Dashboard / Mockup -->
{% fullWidthImage "/images/case-studies/FleetDashboardAllClearState.png", "High-fidelity mockup of the Fleet Dashboard. Cards display real-time data on alarms, fleet status, dwell time, and cargo movement, providing a consolidated operational view for users managing reefer and dry fleets.", "Fig 6: The dashboard in its all clear state shows that even when there are no alarms, users can still monitor real-time asset motion, fuel status, and geofence data reducing the need for report-based spot checks." %}

<!-- Findings -->
<div id="findings" class="text-content-block" data-tab-label="Findings">
  <h2>Key Findings and Insights</h2>
  <p>Research confirmed what users had expressed in interviews and what behavioral data from Pendo revealed: the report-based monitoring workflow was too slow, too fragmented, and not scalable for daily fleet operations inside the SaaS platform. These insights directly shaped the dashboard's structure, the decision to use modular cards, and the prioritization of alarm-driven workflows.</p>
  <ul>
    <li>
      <h4>Fragmented Monitoring Was Slowing Teams Down</h4>
      <div class="content">
        Users spent unnecessary time bouncing between the Reefer Status Report, Location Tracking Report, and other tools just to answer basic questions like 'Are there any shutdown alarms?' or 'Which assets aren't moving?' Pendo heatmaps and session replays showed repeated patterns of users visiting the same reports in sequence, which was clear evidence that the web app wasn't providing operational visibility efficiently.
      </div>
    </li>
    <li>
      <h4>One-Size-Fits-None Was a Real Problem</h4>
      <div class="content">
        Mixed fleet managers, reefer-only operators, and dry fleet dispatchers had radically different priorities. This wasn't anecdotal.   It was validated through both interviews and behavior tracking. Some users focused entirely on reefer alarms. Others prioritized dwell time or cargo status.   This directly validated the need for a modular, customizable dashboard, which is a common SaaS design pattern for B2B products serving multiple roles.
      </div>
    </li>
    <li>
      <h4>Alarm and Triage Workflows Were Broken</h4>
      <div class="content">
        Because no alarm summaries existed, users had to rely on filtered reports to investigate issues, which slowed triage and increased friction. This gap directly informed the decision to surface interactive alarm counts in the dashboard. Making the alarm cards clickable enabled faster task completion and aligned with SaaS UX standards for efficient workflows.
      </div>
    </li>
    <li>
      <h4>Workflow Inefficiency Had Measurable Impact</h4>
      <div class="content">
        Time-on-task analysis confirmed the opportunity for improvement. Compared to the legacy report-driven workflow, the dashboard reduced the number of steps required and significantly accelerated how quickly users could identify and respond to critical issues. This directly justified the <strong class="metric-highlight">50% reduction in workflow steps</strong> and <strong class="metric-highlight">30% faster issue identification</strong> metrics.
      </div>
    </li>
  </ul>
</div>

<!-- Key Pain Points -->
<h3 class="pain-points-section-title">Key Pain Points</h3>
<div class="pain-point-cards-grid">
    <div class="pain-point-card">
        <h4 class="pain-point-card-number">Pain Point</h4>
        <h5 class="pain-point-card-name">No Real-Time Visibility</h5>
        <p class="pain-point-card-description">
            Users had to rely on multiple static reports with manual filtering to check alarms, movement, and dwell time, slowing response time and increasing missed issues.
        </p>
    </div>
    <div class="pain-point-card">
        <h4 class="pain-point-card-number">Pain Point</h4>
        <h5 class="pain-point-card-name">Inefficient, Multi-Step Workflows</h5>
        <p class="pain-point-card-description">Checking for shutdown alarms required 4-5 clicks across separate reports. This repetitive process made critical monitoring harder than it should be.</p>
    </div>
    <div class="pain-point-card">
        <h4 class="pain-point-card-number">Pain Point</h4>
        <h5 class="pain-point-card-name">One-Size-Fits-None Dashboard</h5>
        <p class="pain-point-card-description">Mixed-fleet, reefer-only, and dry fleet users needed different views, but the platform had no way to surface personalized, role-specific data in one place.
        </p>
    </div>
</div>

<!-- Solution -->
<div id="strategic-solutions" class="text-content-block" data-tab-label="Solutions">
    <h2>Solutions and Recommendations</h2>
    <p>Guided by user research, product analytics, and usability testing, the solution focused on 3 key areas: <strong class='metric-highlight'>streamlining workflows, improving operational visibility</strong>, and <strong class='metric-highlight'>designing for scalability within a SaaS enterprise product</strong>. Each design decision was directly tied to measurable impact, including the <strong class='metric-highlight'>50% reduction in workflow steps</strong> and <strong class='metric-highlight'>30% faster issue identification</strong>.</p>
    <h3>Streamlining Operational Workflows</h3>
    <ul>
        <li>
        <h4>Surfacing Key Data in One Place</h4>
        <div class="content">The dashboard prioritized the data users checked most often, alarms, movement status, and dwell time, giving them a real-time operational view without jumping between reports.</div>
        </li>
        <li>
        <h4>Clickable Alarm Cards</h4>
        <div class="content">The Active Alarms card displayed all key alarm types in one place. Clicking a count, like '16 Shutdown,' filtered the report to show those assets, replacing multi-step report navigation.</div>
        </li>
        <li>
        <h4>Reduced Cognitive Load</h4>
        <div class="content">Instead of manually filtering and cross-checking reports, users could now scan their fleet's real-time status at a glance. This directly contributed to the <strong class="metric-highlight">30% faster issue identification</strong> metric.</div>
        </li>
    </ul>
    <h3>Improving Operational Visibility</h3>
    <ul>
        <li>
        <h4>Modular, Role-Relevant Alarm Cards</h4>
        <div class="content">The dashboard showed the most critical data -- shutdowns, reefer micro disconnects, dwell, and movement -- in modular cards based on each user's role. This replaced report-hunting with a visual snapshot of fleet status, improving clarity and response time.
        </div>
        </li>
        <li>
        <h4>Real-Time Fleet Health Snapshot</h4>
        <div class="content">The dashboard provided an instant overview of alarms, asset status, and movement patterns. This visual snapshot supported proactive monitoring and triage, replacing reactive report-hunting.</div>
        </li>
        <li>
        <h4>Usage-Driven Prioritization</h4>
        <div class="content">Pendo usage data revealed which alarms and metrics were accessed most frequently. This informed which cards were prioritized higher in the layout -- surfacing the most operationally critical data first.</div>
        </li>
    </ul>
    <h3>Design for Flexibility and Scalability</h3>
    <ul>
        <li>
          <h4>Role-Based Default Dashboards</h4>
          <div class="content">
              Defaults were created for <strong class="metric-highlight">Fleet Managers</strong> (Alarms, Movement, Dwell), <strong class="metric-highlight">Customer Support / Dispatch</strong> (Alarms, Reefer Status, Micro Disconnects), and a <strong class="metric-highlight">General</strong> fallback (Basic alarms and movement). This SaaS-native pattern supported faster onboarding and reduced setup friction.
          </div>
        </li>
        <li>
          <h4>Role-Aligned Default Content</h4>
          <div class="content">
            Default dashboards were tailored by user role (Fleet Manager, Dispatch, Operations). Each included the top alarm and status cards most relevant to that role, minimizing noise and setup time.
          </div>
        </li>
        <li>
          <h4>Customizable Card Visibility</h4>
          <div class="content">
              Users could show or hide dashboard cards based on role, fleet type, or personal preference supporting operational flexibility without overwhelming the UI.
          </div>
        </li>
        <li>
          <h4>Roadmap: Drag-and-Drop Card Ordering (Version 2)</h4>
          <div class="content">
              While Version 1 focused on card visibility, user feedback and engineering collaboration shaped a roadmap for drag-and-drop card positioning in Version 2. This required thoughtful grid behavior rules to maintain clean, responsive layouts with variable card sizes.
          </div>
        </li>
    </ul>
    <h3>Interaction Design Enhancements</h3>
    <ul>
        <li>
        <h4>Clickable Data Patterns</h4>
        <div class="content">
            All alarm counts and key metrics became interactive, reflecting SaaS UX standards where summary data leads directly to filtered views or actionable lists.
        </div>
        </li>
        <li>
        <h4>Error Prevention for Device Disconnects</h4>
        <div class="content">
            Visual cues for critical states like 'Reefer Micro Disconnect' or 'No Movement' reduced missed events and improved response time.
        </div>
        </li>
        <li>
        <h4>Responsive Layout Considerations</h4>
        <div class="content">
          The dashboard used flexible grid rules that scaled for different screen sizes and asset counts. While not mobile-first, the design accounted for accessibility contrast standards and ensured key workflows remained usable on smaller screens.
        </div>
        </li>
    </ul>
    <h3>Future Vision: Smarter Operations</h3>
    <p>Long-term, the design foundation enables AI-driven insights like predictive fleet health, proactive alerting (e.g. 'high dwell risk'), and smart recommendations based on usage patterns. This direction aligns with enterprise SaaS trends focused on decision intelligence and proactive operations management.</p>
</div>

<!-- Images / Carousel / Mockups -->
<div class="cs-carousel-container">
    <div class="cs-carousel__track-container">
        <ul class="cs-carousel__track">
            <li class="cs-carousel__slide current-slide">
                <img src="/images/case-studies/FleetDashboardAllClearState.png" alt="Fleet dashboard showing active alarms, low fuel/battery, cargo status, and dwell counts. Asset type breakdown and motion status displayed with 2,386 assets total.">
                <figcaption>Fig 7: The Fleet Dashboard mockup highlights how users can access key operational data without navigating multiple reports. Card-level interactions replaced report filtering and search tasks, and the updated global navigation improved access to high-priority fleet tools.</figcaption>
            </li>
            <li class="cs-carousel__slide">
                <img src="/images/case-studies/FleetDashboardFilterPanelOpen.png" alt="Fleet dashboard with no active alarms and the filter panel open, showing options to refine results by motion, geofence, alarm type, and other parameters.">
                <figcaption>Fig 8: The filter panel lets users refine results by alarm type, motion status, asset group, or custom parameters. This view shows the dashboard in an all-clear state with filters visible supporting both passive monitoring and targeted triage within the same workflow.</figcaption>
            </li>
            <li class="cs-carousel__slide">
                <img src="/images/case-studies/FleetDashboardAlarms.png" alt="Dashboard view showing active alarms for Shutdown and Micro Disconnect alongside cargo empty and low fuel cards. Visual emphasis supports alarm triage.">
                <figcaption>Fig 9: When alarms are present, the dashboard prioritizes them with high-contrast cards, enabling fast triage. Alarm types like Shutdown and Micro Disconnect are clearly separated and clickable, aligning with SaaS UX patterns for filtered drilldowns.</figcaption>
            </li>
            <li class="cs-carousel__slide">
                <img src="/images/case-studies/FleetDashboardFilteredMoving.png" alt="Dashboard filtered to show only moving assets. Stationary data is suppressed while alarm and dwell metrics update dynamically to reflect filtered fleet view.">
                <figcaption>Fig 10: Filtering to "Moving" assets updates the dashboard to show only relevant metrics, hiding stationary-related cards. This role-driven filtering model supports use cases like dispatch or operations teams monitoring assets in transit.</figcaption>
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
        <button class="cs-carousel__dot"></button>
    </div>
</div>

<!-- Impact and Results -->
<div id="impact-results" class="text-content-block" data-tab-label="Impact">
  <h2>Impact and Results</h2>
  <p>The dashboard delivered measurable improvements to both operational efficiency and user experience. It replaced fragmented, report-driven workflows with a real-time operational view that became the most-used page in the SaaS platform within a month.</p>
    <ul>
        <li>
        <h4>50% Fewer Workflow Steps</h4>
        <div class="content">
            Task flow analysis confirmed the dashboard reduced alarm checks from 4 steps to 2, which saves time on every task that previously required manual report navigation and filtering.
        </div>
        </li>
        <li>
        <h4>30% Faster Issue Identification</h4>
        <div class="content">
            By eliminating report-hunting and surfacing key data visually, users were able to detect alarms and operational issues 30% faster, which we validated through Pendo time-on-task analysis.
        </div>
        </li>
        <li>
        <h4>80% Reported Improved Fleet Visibility</h4>
        <div class="content">
            Post-launch surveys confirmed that 80% of users felt the dashboard improved their ability to monitor fleet health and respond to operational issues in real time.
        </div>
        </li>
        <li>
        <h4>Most-Visited Page in the SaaS Platform</h4>
        <div class="content">
            Pendo analytics showed the dashboard became the platform's #1 most-visited page within the first month of release, which -- proof of high adoption and user value.
        </div>
        </li>
    </ul>
    <p>The combination of research-driven design, role-based defaults, and SaaS-native interaction patterns not only improved the day-to-day experience for fleet managers and customer support teams, but also set a foundation for scalable, data-driven operations across the platform.</p>
</div>

<!-- Quote / Post Launch -->
<div class="styled-quote-container">
  <span class="styled-quote-decorative-marks">“</span>
  <p class="styled-quote-text">
    I can log in and see right away: what's moving, what's not, and what's broken. That's huge for us.
  </p>
  <p class="styled-quote-attribution">
    — Post-launch user survey response
  </p>
</div>

<!-- Conclusion -->
<div id="final-thoughts" class="text-content-block" data-tab-label="Conclusion">
  <h2>Conclusion and Lessons Learned</h2>
  <p>This project transformed a fragmented, report-driven workflow into a real-time operational dashboard improving visibility, reducing workflow friction, and delivering measurable gains in efficiency for fleet operations teams.</p>

  <h3>Key Lessons</h3>
  <ul>
    <li>
      <h4>Data-Driven UX Drives Better Outcomes</h4>
      <div class="content">
        Combining qualitative research with SaaS product analytics ensured the design solved real-world pain points not assumptions. This directly influenced the 50% reduction in steps and 30% faster issue identification.
      </div>
    </li>
    <li>
      <h4>Designing for Flexibility is Crucial in B2B SaaS</h4>
      <div class="content">
        Role-based defaults paired with modular customization balanced the needs of mixed fleets, reefer-only operators, and dispatch teams -- a key lesson for any scalable enterprise UX.
      </div>
    </li>
    <li>
      <h4>Close Collaboration with Engineering is Non-Negotiable</h4>
      <div class="content">
        Designing for dynamic layouts, responsive behavior, and future drag-and-drop customization required deep collaboration with developers from the start not after handoff.
      </div>
    </li>
    <li>
      <h4>UX Leadership Means More Than Screens</h4>
      <div class="content">
        This wasn't just UI design. It was product strategy, problem framing, and driving decisions across product, engineering, and operations ensuring the solution fit user workflows and business goals.
      </div>
    </li>
  </ul>

  <p>Beyond improving day-to-day fleet operations, this project strengthened the platform's foundation for scalable, real-time visibility and reinforced the value of UX leadership in driving measurable outcomes for SaaS products.</p>
</div>