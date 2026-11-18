/* =====================================================================
   WEBSITE DATA  |  Dr. Rana Salman Anwar
   ---------------------------------------------------------------------
   This is the file you edit most often. Change a value, save (commit),
   and the website updates within about a minute on GitHub Pages.

   Rules: keep the quotes "..." and the commas between items.
   Text inside quotes can be anything, but if it contains a double quote
   write it as \"  .
   ===================================================================== */

window.SITE = {

  /* ---------- 1. LIVE GOOGLE SCHOLAR BOX (optional) ----------
     Paste your Apps Script web-app URL here (see README, Part 4).
     Leave it empty "" to show the fixed numbers in section 2.        */
  scholarWidgetUrl: "",

  /* ---------- 2. HEADLINE NUMBERS (home page) ---------- */
  metrics: {
    citations: "840+",
    hIndex: "14",
    articles: "28",
    impactFactorPapers: "25+",
    topCitedAwards: "3"
  },

  /* ---------- 3. CONTACT ---------- */
  email: "rana.salman@nu.edu.pk",

  /* ---------- 4. JOURNAL ARTICLES ----------
     Add a new paper by copying one line and changing the values.
     Order does not matter: the site sorts newest first.
       year        : 2026
       title       : "Paper title"
       authors     : "Anwar, R. S., Ahmed, R. R., ..."   (your name is bolded automatically)
       journal     : "Journal name, volume(issue), pages"
       doi         : "10.xxxx/xxxxx"   (or "" if none)
       link        : "https://..."     (used only when there is no DOI)
       tags        : ["HEC W", "ABDC A", "IF 13.2"]
       firstAuthor : true / false
       award       : "Elsevier Top Cited"  (or "")                       */
  publications: [
    { year: 2026, title: "AI-Driven Marketing Strategy as a Catalyst for Circular Economy Participation", authors: "Anwar, R. S., Ahmed, R. R., Streimikiene, D., & Streimikis, J.", journal: "Business Strategy and the Environment. Ahead of print.", doi: "10.1002/bse.71793", link: "", tags: ["HEC W", "ABDC A", "IF 13.2"], firstAuthor: true, award: "" },
    { year: 2026, title: "Workplace Xenophobia, Change Resistance, and the New Normal: Implications for Employee Performance and Inclusion", authors: "Anwar, R. S., Grgurevic, N., Parmar, V., Androniceanu, A., Ahmed, R. R., & Nasir, F.", journal: "Transformations in Business & Economics, 25(2), 157", doi: "10.15388/Tibe.2026.25.2.2", link: "", tags: ["HEC W", "ABDC C", "IF 1.6"], firstAuthor: true, award: "" },
    { year: 2026, title: "Integrating Green Strategy Across the Organization: How Human Resource Management, Marketing, and Organizational Culture Drive Environmental Performance", authors: "Ahmed, R. R., Anwar, R. S., Streimikiene, D., & Streimikis, J.", journal: "Business Strategy and the Environment. Ahead of print.", doi: "10.1002/bse.70875", link: "", tags: ["HEC W", "ABDC A", "IF 13.3"], firstAuthor: false, award: "" },
    { year: 2026, title: "AI-Enabled Talent Acquisition and Eco-Innovation Capabilities as Strategic Drivers of Sustainable Business Performance", authors: "Ahmed, R. R., Anwar, R. S., Streimikiene, D., & Streimikis, J.", journal: "Business Strategy and the Environment. Ahead of print.", doi: "10.1002/bse.70868", link: "", tags: ["HEC W", "ABDC A", "IF 13.3"], firstAuthor: false, award: "" },
    { year: 2026, title: "A Multi-Level Analysis of Psychological, Cultural, and Strategic Drivers of Corporate Environmental Responsibility", authors: "Anwar, R. S., Ahmed, R. R., Streimikiene, D., & Streimikis, J.", journal: "Corporate Social Responsibility and Environmental Management, 1–24", doi: "10.1002/csr.70330", link: "", tags: ["HEC W", "ABDC C", "IF 9.1"], firstAuthor: true, award: "" },
    { year: 2026, title: "Innovation and Knowledge in Sustainable Supply Chains: How Ethical Climate and Training Reduce Greenwashing Risk", authors: "Waqar, A., Anwar, R. S., Ahmed, R. R., Streimikiene, D., & Streimikis, J.", journal: "International Journal of Climate Change Strategies and Management. Ahead of print.", doi: "10.1108/IJCCSM-10-2025-0405", link: "", tags: ["HEC W", "ABDC C", "IF 3.5"], firstAuthor: false, award: "" },
    { year: 2026, title: "Green-Hushing in New Technology-Based Firms: How Dynamic Capabilities and Digital Cognition Shape Sustainable Entrepreneurship", authors: "Ahmed, R. R., Anwar, R. S., Streimikiene, D., & Streimikis, J.", journal: "International Entrepreneurship and Management Journal, 22(1), 1–35", doi: "10.1007/s11365-026-01197-7", link: "", tags: ["HEC W", "ABDC B", "IF 3.9"], firstAuthor: false, award: "" },
    { year: 2026, title: "Family Motivation in the Workplace: An Integrative Review and Future Research Agenda", authors: "Nawaz, A., Soomro, S. A., Anwar, R. S., et al.", journal: "Journal of Enterprising Communities: People and Places in the Global Economy", doi: "10.1108/JEC-11-2025-0384", link: "", tags: ["HEC X", "ABDC C", "IF 2.5"], firstAuthor: false, award: "" },
    { year: 2026, title: "The Role of Artificial Intelligence in Shaping Entrepreneurial Consumer Behavior", authors: "Ahmed, R. R., Anwar, R. S., Streimikiene, D., et al.", journal: "International Entrepreneurship and Management Journal, 22, 3", doi: "10.1007/s11365-025-01116-2", link: "", tags: ["HEC W", "ABDC B", "IF 3.9"], firstAuthor: false, award: "" },
    { year: 2026, title: "Sustainability Assessment Criteria for Green Marketing Practices", authors: "Anwar, R. S., Ahmed, R. R., Streimikiene, D., Ahmed, R., & Streimikis, J.", journal: "Corporate Social Responsibility and Environmental Management", doi: "10.1002/csr.70251", link: "", tags: ["HEC W", "ABDC C", "IF 9.1"], firstAuthor: true, award: "" },
    { year: 2025, title: "Exploring the Interplay of Positive Psychological Capital and Career Adaptability in Multinational Corporations", authors: "Anwar, R. S., Ahmed, R. R., Krivokapic, R., Androniceanu, A., & Ahmed, R.", journal: "Transformations in Business & Economics, 24(3)", doi: "", link: "https://www.transformations.knf.vu.lt/65", tags: ["HEC W", "ABDC C", "IF 1.824"], firstAuthor: true, award: "" },
    { year: 2025, title: "Cross-Cultural Perspectives on Entrepreneurship Training Effectiveness: Understanding the Role of Training Duration, Methodology, and Expertise", authors: "Anwar, R. S., Ahmed, R. R., Streimikiene, D., et al.", journal: "International Entrepreneurship and Management Journal, 21, 86", doi: "10.1007/s11365-025-01099-0", link: "", tags: ["HEC W", "ABDC B", "IF 6.2"], firstAuthor: true, award: "" },
    { year: 2025, title: "Customer Engagement, Innovation, and Sustainable Consumption: Analyzing Personalized, Innovative, Sustainable Phygital Products", authors: "Anwar, R. S., Ahmed, R. R., Streimikiene, D., Strielkowski, W., & Streimikis, J.", journal: "Journal of Innovation & Knowledge, 10(1), 100642", doi: "10.1016/j.jik.2024.100642", link: "", tags: ["HEC W", "ABDC A", "IF 15.6"], firstAuthor: true, award: "Elsevier Top Cited" },
    { year: 2025, title: "Employee Empowerment and Technology-Driven Customer Relationship Management: Enhancing Brand Management in the FMCG Sector through SEM-SVM Analysis", authors: "Anwar, R. S., Ahmed, R. R., Parmar, V., & Androniceanu, A.", journal: "Transformations in Business & Economics, 24(1), 355–385", doi: "", link: "http://www.transformations.knf.vu.lt/64/article/empl", tags: ["HEC W", "ABDC C", "IF 1.824"], firstAuthor: true, award: "" },
    { year: 2025, title: "Exploring Digital Competence’s Impact on Faculty Well-being through SEM-SVM Analysis", authors: "Anwar, R. S., Ahmed, R. R., Streimikiene, D., & Streimikis, J.", journal: "E&M Economics and Management, 28(2)", doi: "", link: "https://www.ekonomie-management.cz/archive/number/2025/2/", tags: ["HEC W", "IF 1.4"], firstAuthor: true, award: "" },
    { year: 2025, title: "Securing Food Futures: The Interplay of Safety Governance, Hygiene, Supplier Beliefs, and Consumer Engagement", authors: "Anwar, R. S., Ahmed, R. R., Streimikiene, D., Streimikis, J., & Zamek, D.", journal: "British Food Journal, 127(2), 758–778", doi: "10.1108/BFJ-09-2024-0882", link: "", tags: ["HEC W", "ABDC B", "IF 3.4"], firstAuthor: true, award: "" },
    { year: 2024, title: "Impact of the Mediating and Moderating Roles of Sustainable Entrepreneurial Intentions on Business Performance in Chinese SMEs", authors: "Anwar, R. S., Mahmood, S., Ramzan, M., Adeeb, H., Ahmed, A., Antohi, V. M., Fortea, C., Zlati, M. L., Meca, A., & Pricope, L. N.", journal: "Sustainability, 17(1), 76", doi: "10.3390/su17010076", link: "", tags: ["HEC W", "IF 3.3"], firstAuthor: true, award: "" },
    { year: 2025, title: "Impact of Generation Fidelity on GHRM Practices and Organizational Commitment to Sustainability: A Multigroup Analysis", authors: "Shaikh, F., Anwar, R. S., Sahibzada, U. F., & Afshan, G.", journal: "International Journal of Organization Theory & Behavior, 1–22", doi: "10.1108/IJOTB-02-2025-0039", link: "", tags: ["HEC X", "Scopus Q2", "ABS 1*"], firstAuthor: false, award: "" },
    { year: 2024, title: "Beyond Service: Commercial Friendship’s Impact on Trust and Student Loyalty", authors: "Bhutto, N. A., Shah, S. A. A., & Anwar, R. S.", journal: "Journal of Marketing for Higher Education, 1–24", doi: "10.1080/08841241.2024.2400076", link: "", tags: ["HEC W", "ABDC B", "IF 2.4"], firstAuthor: false, award: "" },
    { year: 2024, title: "Elevating Careers through Technology and Creativity: A Middle-Level Manager’s Odyssey", authors: "Jabeen, H., Anwar, R. S., & Raheem, R. A.", journal: "Journal of Management Practices, Humanities and Social Sciences, 8(3), 175–187", doi: "10.33152/jmphss-8.3.16", link: "", tags: ["HEC Y"], firstAuthor: false, award: "" },
    { year: 2024, title: "Mentoring Magic: Career Calling as a Catalyst for Tacit Knowledge Transfer in Executive Development Centers (EDCs)", authors: "Anwar, R. S.", journal: "International Journal of Mentoring and Coaching in Education", doi: "10.1108/IJMCE-07-2023-0066", link: "", tags: ["HEC X", "IF 1.5"], firstAuthor: true, award: "" },
    { year: 2024, title: "Driving Frugal Innovation in SMEs: How Sustainable Leadership, Knowledge Sources and Information Credibility Make a Difference", authors: "Ur Rehman, K., Anwar, R. S., Antohi, V. M., Ali, U., Fortea, C., & Laura Zlati, M.", journal: "Frontiers in Sociology, 9, 1344704", doi: "10.3389/fsoc.2024.1344704", link: "", tags: ["HEC X", "IF 2.0"], firstAuthor: false, award: "Frontiers Top Cited" },
    { year: 2023, title: "Analyzing the Impact of Artificial Intelligence on Employee Productivity: The Mediating Effect of Knowledge Sharing and Well-being", authors: "Shaikh, F., Afshan, G., Anwar, R. S., Abbas, Z., & Chana, K. A.", journal: "Asia Pacific Journal of Human Resources", doi: "10.1111/1744-7941.12385", link: "", tags: ["HEC W", "ABDC B", "IF 3.9"], firstAuthor: false, award: "Wiley Top Cited & Most Viewed" },
    { year: 2023, title: "Sustainable HRM and Well-being: Systematic Review and Future Research Agenda", authors: "Qamar, F., Afshan, G., & Rana, S. A.", journal: "Management Review Quarterly, 1–51", doi: "10.1007/s11301-023-00360-6", link: "", tags: ["HEC W", "ABDC B", "IF 9.0"], firstAuthor: false, award: "" },
    { year: 2023, title: "Enhancing Sustainability in the Agricultural Sector amid COVID-19: An Implication of the Transactional Theory", authors: "Mangi, M., Anwar, R. S., Khan, S., Rehman, M. Z., Bhatti, M. I., & Alonazi, W. B.", journal: "Sustainability, 15(13), 9960", doi: "10.3390/su15139960", link: "", tags: ["HEC W", "IF 3.3"], firstAuthor: false, award: "" },
    { year: 2021, title: "Scope of Combining the Research Methods in Human Resource Management (HRM) and Organizational Behavior (OB)", authors: "Anwar, R. S., Channa, K. A., & Shah, S. M. M.", journal: "Indian Journal of Economics and Business, 20(2)", doi: "10.5281/zenodo.6901043", link: "", tags: ["HEC X"], firstAuthor: true, award: "" },
    { year: 2021, title: "Human Resource Diversity Management (HRDM) Practices as a Coping Mechanism for Xenophobia at Transnational Workplace: A Case of a Multi-Billion-Dollar Economic Corridor", authors: "Zaman, U., Nawaz, S., Anjam, M., Anwar, R. S., & Siddique, M. S.", journal: "Cogent Business & Management, 8(1), 1883828", doi: "10.1080/23311975.2021.1883828", link: "", tags: ["HEC X", "ABDC B"], firstAuthor: false, award: "" },
    { year: 2023, title: "From Retrospective to Prospective View of Xenophobia Through the Lens of Human Resource Diversity Management", authors: "Anwar, R. S., Channa, K. A., & Shah, S. M. M.", journal: "South Asian Review of Business and Administrative Studies (SABAS), 5(1), 41–62", doi: "10.52461/sabas.v5i1.1888", link: "", tags: ["HEC Y"], firstAuthor: true, award: "" }
  ],

  /* ---------- 5. GALLERY ----------
     1) Upload the photo into the  img  folder.
     2) Add a line here:
        { file: "photo-name.jpg", category: "training", caption: "What, where, when" }
     Categories: honours, training, conf, lead, students
     Optional crop: "top", "center", "center 30%" (which part stays visible)     */
  gallery: [
    { file: "phdconv.jpg", category: "honours", caption: "PhD Gold Medal (1st Position), 10th Convocation, Sukkur IBA University, 2 March 2024" },
    { file: "medal.jpg", category: "honours", caption: "Gold Medal, PhD (Management), Sukkur IBA University", crop: "center 75%" },
    { file: "phdline.jpg", category: "honours", caption: "With university leadership and guests, 10th Convocation, Sukkur IBA University, 2024" },
    { file: "ural.jpg", category: "honours", caption: "Ural Federal University, Yekaterinburg, Russia, during post-doctoral research", crop: "center 35%" },
    { file: "mbaconv.jpg", category: "honours", caption: "26th Convocation, The Islamia University of Bahawalpur, 2019", crop: "center 30%" },
    { file: "merit.jpg", category: "honours", caption: "Institutional Merit Scholarship 2019–20, Award Distribution Ceremony, Sukkur IBA University" },
    { file: "iqra2.jpg", category: "training", caption: "Hands-on systematic literature review training with MAXQDA, IQRA University, 2026" },
    { file: "iqraflyer.jpg", category: "training", caption: "“From Research Question to Publication: The Complete SLR Toolkit”, IQRA University, 30 September 2026", crop: "center" },
    { file: "iqra1.jpg", category: "training", caption: "Systematic review training, IQRA University, 2026" },
    { file: "szabist.jpg", category: "training", caption: "Pre-conference workshop trainer, 3rd SZABIST International Conference, 9 June 2026", crop: "top" },
    { file: "shield.jpg", category: "training", caption: "Recognised by organisers after a research training session" },
    { file: "wmhd.jpg", category: "training", caption: "Host, World Mental Health Day Open House, Indus University, 10 October 2024", crop: "top" },
    { file: "buyornot.jpg", category: "training", caption: "Seminar: “Buy or Not to Buy: A Financial Perspective”, Indus University" },
    { file: "crc1.jpg", category: "training", caption: "Workshop certificate, “Meta-Analysis: Art or Science?”, Case Research Center, Sukkur IBA University" },
    { file: "crc2.jpg", category: "training", caption: "Workshop certificate, Case Research Center, Sukkur IBA University" },
    { file: "grid.jpg", category: "conf", caption: "GRID 2026, KSBL International Academic Conference, Karachi" },
    { file: "ilma.jpg", category: "conf", caption: "17th International Conference of Management & Social Sciences, ILMA University, 2024", crop: "center 40%" },
    { file: "duhs.jpg", category: "conf", caption: "External Examiner, MBA/EMBA Research Project Defense, IBHM, Dow University of Health Sciences, 29 August 2026" },
    { file: "psychnova.jpg", category: "conf", caption: "Evaluator, PSYCHNOVA 2.0 Research Thesis Defense, Indus University, 6 August 2026", crop: "top" },
    { file: "panel.jpg", category: "conf", caption: "Research thesis defense evaluation panel" },
    { file: "ibagroup.jpg", category: "conf", caption: "Academic session with faculty colleagues" },
    { file: "auditorium1.jpg", category: "conf", caption: "Seminar with faculty and guest speakers, Indus University" },
    { file: "bos1.jpg", category: "lead", caption: "22nd Board of Studies, Faculty of Management Sciences, Indus University" },
    { file: "bof.jpg", category: "lead", caption: "19th Board of Faculty, Faculty of Management Sciences, Indus University" },
    { file: "advisory1.jpg", category: "lead", caption: "7th Advisory Board (Business), Indus University" },
    { file: "advreview.jpg", category: "lead", caption: "Advisory Board's review of the Business Administration curriculum, Indus University" },
    { file: "meeting2.jpg", category: "lead", caption: "Committee review meeting, Faculty of Management Sciences" },
    { file: "nbeac.jpg", category: "lead", caption: "Certificate presentation, Faculty of Management Sciences" },
    { file: "handover1.jpg", category: "lead", caption: "Certificate presentation, Faculty of Management Sciences" },
    { file: "alsehat.jpg", category: "lead", caption: "Institutional partnership event" },
    { file: "fyp.jpg", category: "students", caption: "Final Year Project Expo, Faculty of Management Sciences, Indus University (Career Connect 2025)" },
    { file: "elp1.jpg", category: "students", caption: "Experiential Learning Projects showcase, Indus University" },
    { file: "elp2.jpg", category: "students", caption: "Evaluating Experiential Learning Projects, Indus University" },
    { file: "shell.jpg", category: "students", caption: "Student financial performance analysis presentation" }
  ]
};
