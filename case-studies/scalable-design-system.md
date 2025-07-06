---
layout: case-study.njk
title: "Design System Reimagined"
templateEngineOverride: njk,md
permalink: /case-studies/scalable-design-system/
summary: "Led the evolution of the company's design system, creating a new Figma library that improved UI consistency and cut mockup creation time by 30%."
project_role: "UX Strategist, Design System Lead"
team_members: "Product, Engineering, UI/UX Designers"
tools_used: "Adobe XD (initial system), Figma (new system), Bootstrap (conceptual grid alignment)"
timeline: "3 months (Version 1)"
business_goals: "Improve UI consistency across products, increase design and development velocity, reduce rework, and bridge the gap between design specifications and developed output."
user_problem_solved: "Addressed fragmented user experiences due to inconsistent UI, inefficient designer-developer handoffs caused by differing layout systems (8px grid vs. Bootstrap percentages), and the high cost of maintaining disparate visual styles."
eleventyNavigation:
    key: Design System Reimagined
    parent: Work
    order: 3
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
            <h3 class="case-study-card-headline">Mockup Time Reduced</h3>
            <p class="case-study-card-description">Eliminated repetitive tasks by giving designers a library of standardized components.</p>
        </div>
        <div class="case-study-hero-card">
            <div class="case-study-card-metric">
                20-30%
                <span class="material-symbols-outlined" style="font-size: 2rem; color: #66BB6A; vertical-align: middle; margin-left:-10px;">
                    arrow_upward_alt
                </span>
            </div>
            <h3 class="case-study-card-headline">UX Capacity Increased</h3>
            <p class="case-study-card-description">New workflow efficiencies freed the team to focus on strategic problem-solving.</p>
        </div>
        <div class="case-study-hero-card">
            <div class="case-study-card-metric">
                40%
                <span class="material-symbols-outlined" style="font-size: 2rem; color: #66BB6A; vertical-align: middle; margin-left:-10px;">
                    arrow_downward_alt
                </span>
            </div>
            <h3 class="case-study-card-headline">Design Rework Reduced</h3>
            <p class="case-study-card-description">Bridged the design-to-dev gap, reducing time spent on UX reviews and rework.</p>
        </div>
    </div>
    </div>
---

{# Body of the Markdown starts here, structured into 6 tabbed sections #}
<!-- Project Overview and Summary -->
<div id="ds-overview" class="text-content-block" data-tab-label="Overview">
  <h2>Project Overview and Summary</h2>
  <p>This project centered on migrating the design system from an 8px grid-based XD system to a new Figma library. The key strategic goal was to align our design layouts with Bootstrap's responsive grid, which addressed a critical disconnect with development. This change fostered stronger UI consistency, smoother handoffs, and a notable 30% reduction in mockup creation time for the UX team.</p>
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
<!-- End Project Overview and Summary -->

<!-- The Challenge -->
<div id="ds-challenge" class="text-content-block" data-tab-label="Challenge">
    <h2>The Challenge: Forging Cohesion</h2>
    <p>Prior to the establishment of the design system, the organization faced significant and growing challenges in maintaining a cohesive and efficient digital product ecosystem. The absence of a centralized system manifested in several critical issues:</p>
    <ul>
        <li>
            <h4>Fragmented User Experience</h4>
            <div class="content">Our suite of products presented widespread UI inconsistencies, leading to a disjointed look and feel that confused users and diluted the brand identity.</div>
        </li>
        <li>
            <h4>Inefficient Design and Development Workflows</h4>
            <div class="content">Designers recreated existing components, and developers custom-coded similar UI elements, consuming valuable time. A notable disconnect existed where designs (using an 8px grid in Adobe XD) were often approximated by developers (using Bootstrap's percentage-based grid), resulting in misaligned UIs.</div>
        </li>
        <li>
            <h4>Prolonged Development Cycles and Increased Costs</h4>
            <div class="content">Lack of reusable components and the design-to-development disconnect directly contributed to longer timelines, increased UI-related bug fixing, and inflated project costs.</div>
        </li>
        <li>
            <h4>Difficult Scalability and Maintenance</h4>
            <div class="content">As new products and features emerged, inconsistencies compounded, making it challenging to scale design efforts or maintain quality across disparate codebases.</div>
        </li>
        <li>
            <h4>Strained Designer and Developer Collaboration</h4>
            <div class="content">Ambiguity in translating static designs into responsive, coded interfaces led to frequent frustration, misinterpretations, and extensive rework between design and engineering.</div>
        </li>
    </ul>
    <p>These cumulative problems severely impacted operational efficiency and risked diminishing the overall quality and usability of user-facing products.</p>
</div>
<!-- End The Challenge -->

<!-- Quotation / Lead UI Developer -->
<div class="styled-quote-container">
    <span class="styled-quote-decorative-marks">“</span>
    <p class="styled-quote-text">The UI Store has been a huge step forward. Because the Figma layouts are aligned with the Bootstrap grid we actually use, there's way less guesswork. I spend less time trying to translate an 8px design and more time actually building.</p>
    <p class="styled-quote-attribution">— Lead UI Developer</p>
</div>
<!-- End Quotation / Lead UI Developer -->

<!-- Approach -->
<div id="ds-approach" class="text-content-block" data-tab-label="Approach">
    <h2>Process, Approach and Key Decisions</h2>
    <p>To tackle these challenges, I established a structured, multi-phased approach with a clear goal: to create a scalable design system that was practical, consistent, and easy for our teams to adopt.</p>
    <!-- Approach / Phase 1 / UI Audit -->
    <h3>Phase 1: Planning, Research and Foundational Strategy</h3>
    <p>This initial phase was crucial for setting a clear direction and ensuring alignment across teams. Key activities included:</p>
    <ul>
        <li>
            <h4>UI Audit and Component Inventory</h4>
            <div class="content">A thorough audit of existing products and design files identified common UI patterns, inconsistencies, and the core components for the system’s foundation.</div>
        </li>
        <li>
            <h4>Stakeholder Engagement and Requirements Gathering</h4>
            <div class="content">I facilitated interviews and workshops with the UX Team, product management, and engineering leadership to define objectives, understand team needs, and scope Version 1.</div>
        </li>
        <li>
            <h4>Defining Design System Guidelines and Figma Planning</h4>
            <div class="content">We began finalizing the visual style guide (color, typography, iconography, spacing) and planned the Figma organizational structure, naming conventions, developer handoff, and initial documentation.</div>
        </li>
    </ul>
    <!-- Approach / Phase 2 / Design System Build-out / Figma -->
    <h3>Phase 2: Design System Build-out in Figma and Documentation</h3>
    <p>With a solid plan, we transitioned to Figma for its superior componentization and collaboration features:</p>
    <ul>
        <li>
            <h4>Strategic Migration and Component Creation</h4>
            <div class="content">I planned and directed the creation of core UI components (buttons, forms, navigation, etc.) in Figma. A designer on my team then built these components based on the new guidelines, emphasizing variants, auto-layout, accessibility, and responsiveness. Components were re-evaluated and improved, not just lifted.</div>
        </li>
        <li>
            <h4>Layout System Alignment</h4>
            <div class="content">A significant strategic decision was to create Figma layouts conceptually aligned with Bootstrap’s responsive grid system. This aimed to directly address the previous disconnect with developer implementation, even while internal spacing maintained an 8px grid.</div>
        </li>
        <li>
            <h4>Supporting Documentation</h4>
            <div class="content">As components were finalized, we drafted supporting documentation within Figma, covering states, variants, and usage best practices.</div>
        </li>
    </ul>
    <!-- Approach / Phase 3 / Testing, Feedback, Iteration -->
    <h3>Phase 3: Testing, Feedback and Iteration</h3>
    <p>Before a wider rollout, we focused on validation and refinement:</p>
    <ul>
        <li>
            <h4>Cross-Functional Testing and Reviews</h4>
            <div class="content">Key components and example layouts were tested with UX team members and Product Owners. Dedicated review sessions with Product and Engineering teams gathered feedback on functionality, technical feasibility, and consistency.</div>
        </li>
        <li>
            <h4>Iterative Refinement</h4>
            <div class="content">Collected feedback drove iterative refinements, ensuring designs met practical requirements and component validation in real-world scenarios.</div>
        </li>
    </ul>
    <!-- Approach / Phase 4 / Launch and Initial Adoption -->
    <h3>Phase 4: Launch and Initial Adoption</h3>
    <p>The culmination of our efforts was the official launch of Version 1 of the Figma Component Library:</p>
    <ul>
        <li>
            <h4>Figma Library Publication</h4>
            <div class="content">The design system was published as a shared Figma library for the organization, complete with clear naming conventions, documented variants, and appropriate permissions.</div>
        </li>
        <li>
            <h4>Pilot Program and Onboarding</h4>
            <div class="content">We rolled out the system by integrating it into a new feature project, providing targeted onboarding and support to initial teams to ensure smooth adoption and gather early usage feedback.</div>
        </li>
    </ul>
    <!-- Key Decisions -->
    <h3>Key Decisions Made</h3>
    <ul>
        <li>
            <h4>Tooling Transition</h4>
            <div class="content">Moving from Adobe XD to Figma for improved component management and collaboration.</div>
        </li>
        <li>
            <h4>Atomic Design Principles</h4>
            <div class="content">Structuring components from fundamental atoms (e.g., color, typography) to complex organisms (e.g., cards, headers).</div>
        </li>
        <li>
            <h4>Layout Grid Alignment</h4>
            <div class="content">Adopting a Bootstrap-aligned grid system for developer familiarity and consistent responsive layouts.</div>
        </li>
        <li>
            <h4>Versioning Strategy</h4>
            <div class="content">Planning the design system's evolution, including how updates would be communicated and adopted.</div>
        </li>
        <li>
            <h4>Initial Component Scope</h4>
            <div class="content">Prioritizing frequently used and inconsistent components for maximum immediate impact in the first iteration.</div>
        </li>
        <li>
            <h4>Deferred Coded Library</h4>
            <div class="content">Establishing Figma as the initial single source of truth, with a coded component library as a clear subsequent phase.</div>
        </li>
    </ul>
</div>
<!-- End Approach -->

<!-- The Solution / Delivered Design System -->
<div id="ds-solution" class="text-content-block" data-tab-label="Solution">
  <h2>The Delivered Design System</h2>
  <p>The culmination of our efforts was the delivery of Version 1 of the design system: a comprehensive, Figma-based component library and centralized resource, which provided a robust foundation for designing and building consistent, high-quality user interfaces across our digital products.</p>

  <h3>Key Deliverables of Version 1</h3>
  <ul>
    <li>
        <h4>A Rich Figma Component Library</h4>
        <div class="content">Featuring a well-organized set of reusable UI components spanning input controls (buttons, forms, selections), navigation elements (menus, tabs), feedback components (modals, alerts), and structural utilities. Each was designed with variants for different states and built using Figma's auto-layout for flexibility and responsiveness.</div>
    </li>
    <li>
        <h4>Standardized Design Tokens and Guidelines</h4>
        <div class="content">This included a visual style guide with defined color palettes, typography scales, and iconography principles. A foundational 8px grid system ensured precision, while Bootstrap-aligned layouts conceptually harmonized page structures with developer implementation, significantly improving predictability.</div>
    </li>
    <li>
        <h4>Embedded Documentation and Usage Instructions</h4>
        <div class="content">Initial documentation for each component, including descriptions and usage guidelines, was directly integrated within the Figma library. This laid the groundwork for a more extensive, standalone documentation site and enabled easy access for designers.</div>
    </li>
  </ul>
</div>
<!-- End The Solution / Delivered Design System -->

  <!-- {% fullWidthImage "/images/case-studies/figma-library-overview.png", "Overview of the Figma UI Store component library showing various categories of components.", "Fig 1: UI Store: Figma Component Library Overview" %}
  {% fullWidthImage "/images/case-studies/design-system-in-use.png", "Example application screens designed using the UI Store, showcasing consistent application of components and styles.", "Fig 2: UI Store in Action: Consistent Application Screens" %} -->

<div id="ds-impact" class="text-content-block" data-tab-label="Impact">
  <h2>Results and Impact</h2>
  <p>The introduction and adoption of Version 1 of the design system yielded significant, measurable improvements for the UX team and laid a critical foundation for broader organizational benefits:</p>
  <ul>
    <li>
        <h4>Accelerated Design Velocity and Increased UX Team Capacity</h4>
        <div class="content">By using the design system, the team's overall design velocity increased, with <strong class="metric-highlight">mockup creation time dropping by 30%</strong>. For tasks related to UI validation and developer handoffs, we saw an <strong class="metric-highlight">estimated 40% reduction in design rework</strong>. Together, these efficiencies increased the <strong class="metric-highlight">UX team's overall capacity by an estimated 20-30%</strong>, freeing them to focus on complex problem-solving.</div>
    </li>
    <li>
        <h4>Enhanced Design Productivity, Accuracy, and Consistency</h4>
        <div class="content">Designers spent considerably less time recreating components, streamlining workflows for more efficient and consistent output. The use of pre-defined components dramatically improved design precision and largely eliminated manual adjustments, leading to more accurate and consistent UIs.</div>
    </li>
    <li>
        <h4>Fewer and Faster Review Cycles</h4>
        <div class="content">The "single source of truth" created by the Figma library streamlined the design-to-development workflow. This shared understanding of components and spacing significantly reduced the time spent in back-and-forth UX review cycles, freeing up time for both the design and engineering teams.</div>
    </li>
    <li>
        <h4>Strengthened Brand Cohesion</h4>
        <div class="content">Standardized components enforced visual and functional consistency across all new design work, directly contributing to a more unified and recognizable brand experience for users.</div>
    </li>
    <li>
        <h4>Foundation for Developer Efficiency</h4>
        <div class="content">While Version 1 focused on the Figma library, its alignment with Bootstrap's conceptual grid and its role as a clear "single source of truth" immediately began to smooth designer-developer handoffs, reducing ambiguity and setting the stage for faster development cycles.</div>
    </li>
  </ul>
  <p>These results demonstrated the tangible value of a centralized design system in optimizing our design operations and improving the quality of our product interfaces.</p>
</div>

<div id="ds-conclusion" class="text-content-block" data-tab-label="Conclusion">
  <h2>Reflections and Future Vision</h2>
  <p>The development and launch of Version 1 of the design system was a significant step forward and a valuable learning experience. Reflecting on the project, a key takeaway is the immense benefit of early and continuous engineering involvement. While conceptual alignment with Bootstrap’s grid was positive, earlier parallel development of a coded component library would have further accelerated adoption and solidified the design-to-development workflow.</p>
  <p>This project was instrumental in shaping not only our product UIs but also how our design and development teams collaborate, underscoring the power of a shared language and a single source of truth in fostering a more efficient and aligned product development culture.</p>
  <p>Looking ahead, the design system is envisioned as an evolving, living entity. Key next steps include:</p>
  <ul>
    <li>
        <h4>Expansion and Coded Library Development</h4>
        <div class="content">Continuously expanding the Figma component library and securing resources for Version 2: a fully coded JavaScript component library to realize full developer efficiency gains.</div>
    </li>
    <li>
        <h4>Enhanced Documentation and Governance</h4>
        <div class="content">Creating a comprehensive, standalone documentation website and formalizing governance processes for component contributions and updates.</div>
    </li>
    <li>
        <h4>Future Enhancements</h4>
        <div class="content">Implementing features like dark mode theming and further optimizing components for mobile application contexts.</div>
    </li>
  </ul>
  <p>The design system initiative has laid a strong foundation, and its continued development is key to the company's long-term strategy for delivering high-quality, consistent user experiences efficiently across all platforms.</p>
</div>