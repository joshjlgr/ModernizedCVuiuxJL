/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReactNode } from "react";
import { motion } from "motion/react";
import { 
  Mail, 
  Github, 
  Linkedin, 
  Globe, 
  MessageSquare, 
  Figma, 
  ExternalLink, 
  Award, 
  BookOpen, 
  Code2, 
  Layout, 
  User, 
  Briefcase, 
  GraduationCap, 
  Gamepad2, 
  Utensils, 
  Search, 
  PenTool, 
  Terminal,
  Trophy
} from "lucide-react";

const BehanceIcon = (props: any) => (
  <img 
    src="https://static.vecteezy.com/system/resources/previews/065/386/497/non_2x/behance-circle-logo-icon-be-app-transparent-background-premium-social-media-design-for-digital-download-free-png.png" 
    alt="Behance" 
    {...props}
    className={`${props.className} grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 rounded-full`}
  />
);

const Section = ({ title, icon: Icon, children, className = "" }: { title: string, icon: any, children: ReactNode, className?: string }) => (
  <motion.section 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`mb-12 ${className}`}
  >
    <div className="flex items-center gap-3 mb-6 border-b border-zinc-200 pb-2">
      <Icon className="w-5 h-5 text-zinc-500" />
      <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-800">{title}</h2>
    </div>
    {children}
  </motion.section>
);

const SkillBar = ({ name, level }: { name: string, level: number, key?: string }) => (
  <div className="mb-4 group/skill">
    <div className="flex justify-between text-xs font-medium mb-1 text-zinc-600 group-hover/skill:text-zinc-900 transition-colors">
      <span>{name}</span>
    </div>
    <div className="h-1 bg-zinc-100 rounded-full overflow-hidden relative">
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="h-full bg-zinc-950 relative overflow-hidden"
      >
        <div className="absolute inset-0 -translate-x-full group-hover/skill:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/50 to-transparent" />
      </motion.div>
    </div>
  </div>
);

const ExperienceItem = ({ title, company, period, description }: { title: string, company: string, period: string, description: string[] }) => (
  <div className="mb-10 group">
    <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-3">
      <h3 className="text-lg font-bold text-zinc-900 group-hover:text-zinc-600 transition-colors">{title}</h3>
      <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">{period}</span>
    </div>
    <p className="text-sm font-semibold text-zinc-700 mb-4 italic">{company}</p>
    <ul className="space-y-3">
      {description.map((item, i) => (
        <li key={i} className="text-sm text-zinc-600 leading-relaxed flex gap-3">
          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-zinc-300 shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default function App() {
  const contactLinks = [
    { name: "Whatsapp", icon: MessageSquare, url: "https://wa.me/6582030020?text=WhatsApp", color: "hover:text-green-600" },
    { name: "Email", icon: Mail, url: "mailto:j05hl1m@live.com", color: "hover:text-blue-600" },
    { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/jlgrcopyright/", color: "hover:text-blue-700" },
    { name: "Behance", icon: BehanceIcon, url: "https://www.behance.net/joshlim13", color: "hover:text-blue-500" },
    { name: "Figma", icon: Figma, url: "https://www.figma.com/design/Ligql2F5F0eRHYXW8XEWyT/Mobile-App-ReDesign---Kitchen-Stories--Version-2-by-Josh-Lim?node-id=0-1&t=7pMCf1xSaNm8OSnS-1", color: "hover:text-purple-500" },
    { name: "Github", icon: Github, url: "https://github.com/joshjlgr", color: "hover:text-zinc-900" },
    { name: "Portfolio", icon: Globe, url: "https://www.thecn.com/JG282", color: "hover:text-zinc-600" },
  ];

  const skills = [
    { name: "Information Architecture", level: 90 },
    { name: "Design Principles", level: 85 },
    { name: "Design Thinking", level: 85 },
    { name: "Human Centred Design", level: 77 },
    { name: "Wireframing", level: 95 },
    { name: "Prototyping", level: 88 },
    { name: "Usability Testing", level: 94 },
    { name: "Version Control", level: 80 },
  ];

  const techStack = [
    "NotebookLM", "Notion", "Obsidian", "Canva", "DeepSeek", "Gemini", "Claude", "ChatGPT", "Copilot", "Perplexity", "Grok", "Emergent", "Julius", "Stitch", "OpenRouter", "Lovable", "Base44",
    "Wix", "Shopify", "WordPress", "WooCommerce", "Git", "jQuery", "HTML5", "CSS3", "JavaScript", "React", "NodeJS", "Tailwind CSS", "Figma", "Lightroom", "Photoshop", 
    "MySQL", "Python", "AJAX", "JSON", "DevTools", "Bash", "NPM", "Jira", "PowerShell", "JSX", "TypeScript", "Next.js", "Vercel", "Spring Boot", "Hibernate", "Java", "Rust", "PHP", "Mailchimp", "GraphQL"
  ];

  const hobbies = [
    { name: "Learn", icon: BookOpen, url: "https://www.coursera.org/" },
    { name: "Design", icon: PenTool, url: "https://www.behance.net/joshlim13" },
    { name: "Code", icon: Terminal, url: "https://github.com/joshjlgr" },
    { name: "Soccer", icon: Trophy, url: "https://www.arsenal.com/" },
    { name: "Game", icon: Gamepad2, url: "https://play.google.com/store/games" },
    { name: "Cook", icon: Utensils, url: "https://www.behance.net/gallery/228730151/Josh-Lims-Kitchen-Recipe-Social-App" },
  ];

  const courses = [
    { 
      name: "Adobe Campaigns - Custom", 
      school: "Adobe Digital Learning",
      url: "https://media.licdn.com/dms/image/v2/D562DAQG3SizlDXyGYA/profile-treasury-document-images_1280/B56Zg4ICh3G4AU-/1/1753288293478?e=1778112000&v=beta&t=OtArdO3S253OKitWWA_26aYQjMyptEsQ_7UAHYPCo3g"
    },
    { 
      name: "Advanced Cyber Security - Threats and Governance", 
      school: "Great Learning Academy",
      url: "https://media.licdn.com/dms/image/v2/D562DAQFE7H3aWJ0IJQ/profile-treasury-image-shrink_1280_1280/B56Z3naQaMKwAQ-/0/1777703913902?e=1778313600&v=beta&t=Z2T9z-A7U1YvdwHIBzb-ppSvlcP9uLPOrGl3siYvvhg"
    },
    { 
      name: "Business Analysis Certification", 
      school: "IIL",
      url: "https://media.licdn.com/dms/image/v2/D562DAQGxihzUxkdq5w/profile-treasury-document-cover-images_1280/profile-treasury-document-cover-images_1280/0/1689787878305?e=1778068800&v=beta&t=1L4c2cz5pux_OMBstLh80IYdsbUBT4wXU7rriElMyEc"
    },
    { 
      name: "Front End Development", 
      school: "Great Learning Academy",
      url: "https://media.licdn.com/dms/image/sync/v2/D5627AQHI_sa5IQEGcw/articleshare-shrink_1280_800/B56Z3jc5gMIUAQ-/0/1777637501055?e=1778313600&v=beta&t=DCVnV2hHqnvUpI6pHaQ9gYO6hWWDkIkrR_zbU0ZNsoA"
    },
    { 
      name: "Full Stack Java Developer", 
      school: "NTUC Learning Hub",
      url: "https://media.licdn.com/dms/image/v2/D562DAQFpHP6up09gSw/profile-treasury-document-cover-images_1280/profile-treasury-document-cover-images_1280/0/1706251657335?e=1778068800&v=beta&t=re84aN6N0o-BCrgsYdG1PgE5rC6h2QhAUveg1Tkn07c"
    },
    { 
      name: "ITIL V4 Foundation", 
      school: "AXELOS Global",
      url: "https://media.licdn.com/dms/image/v2/D562DAQFUZ7joSlyJ6g/profile-treasury-image-shrink_800_800/B56Z3kYZeMIUAg-/0/1777653094912?e=1778313600&v=beta&t=YZQ7K_xP07TwXdt7aAof-y8w6BNbGaeqeOiZ49rESIo"
    },
    { 
      name: "JavaScript for Beginners", 
      school: "Simplilearn",
      url: "https://media.licdn.com/dms/image/v2/D562DAQGT6UXos540Rw/profile-treasury-image-shrink_800_800/B56Z3kFsoqH4AY-/0/1777648193142?e=1778317200&v=beta&t=pkxH5xkzzqv6FDKCDDlBMCCzlsabUpt1Hze3iB-M_p4"
    },
    { 
      name: "Lean Six Sigma", 
      school: "HEWLETT PACKARD",
      url: "https://media.licdn.com/dms/image/v2/D562DAQEgF5NSD-8JJA/profile-treasury-document-cover-images_1280/profile-treasury-document-cover-images_1280/0/1707633798479?e=1778068800&v=beta&t=-C8BS9FnFZjHASof9vdfJCuGSLv-e0TE30OJXtlK3rs"
    },
    { 
      name: "Materialize CSS From Scratch With 5 Projects", 
      school: "Udemy",
      url: "https://media.licdn.com/dms/image/v2/D562DAQELNx_h_nc5yw/profile-treasury-document-cover-images_800/B56Zg4Id.XHMBE-/0/1753288402390?e=1778068800&v=beta&t=oGAuU1SD5oV_p8MpkzMWbH2zFLRDqwOWc2jcc_8pXjU"
    },
    { 
      name: "Prompt Engineering for Everyone", 
      school: "IBM Developer Skills Network",
      url: ""
    },
    { 
      name: "UIUX Design Program", 
      school: "SIT", 
      url: "https://media.licdn.com/dms/image/v2/D562DAQG7imwUJXN3Bg/profile-treasury-document-cover-images_480/B56Zm68tr6G4BI-/0/1759778104581?e=1778068800&v=beta&t=_70HihtMn1Lfe955E8MCd0I920LZLNHJAIGMsB2iVjQ" 
    },
    { 
      name: "Understanding Agentic AI", 
      school: "Agent Academy AI",
      url: "https://media.licdn.com/dms/image/v2/D562DAQGgTMjlvMNUQw/profile-treasury-image-shrink_480_480/B56Z3Y6Ax1J4AM-/0/1777460579932?e=1778068800&v=beta&t=q_Ioq49WUZaWBGhXCknBF8JbBhrDZzMPhJ1nIrz1guc"
    }
  ].sort((a, b) => b.name.localeCompare(a.name));

  return (
    <div className="min-h-screen bg-zinc-50 font-sans selection:bg-zinc-900 selection:text-white">
      {/* Header / Hero */}
      <header className="bg-white border-b border-zinc-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="relative inline-block text-5xl font-black tracking-tighter text-zinc-900 mb-2 cursor-default select-none group">
              <span className="relative z-10 transition-all duration-700 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-[radial-gradient(circle_at_center,#18181b_20%,#71717a_50%,#18181b_80%)] group-hover:bg-[length:300%_300%] group-hover:animate-fractal">
                JOSH LIM
              </span>
            </h1>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-500">UIUX DESIGNER / TECH ANALYST</p>
          </motion.div>
          
          <div className="flex flex-wrap gap-4">
            {contactLinks.map((link) => (
              <a 
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full bg-zinc-50 border border-zinc-200 text-zinc-500 transition-all duration-300 ${link.color} hover:border-current hover:shadow-lg hover:-translate-y-1 group`}
                title={link.name}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left Column: Sidebar Info */}
        <aside className="lg:col-span-4 space-y-12">
          <Section title="Profile" icon={User}>
            <p className="text-sm text-zinc-600 leading-relaxed">
              3 years of experience building user-centric digital experiences across web design and product delivery. Blends creativity, coding capability, and AI-powered problem solving to transform ideas into scalable products with measurable impact.
            </p>
          </Section>

          <Section title="Education" icon={GraduationCap}>
            <div className="space-y-6">
              <div>
                <a 
                  href="https://media.licdn.com/dms/image/v2/D562DAQGTFz0F-kbK6Q/profile-treasury-document-images_1920/B56Zik40X2HcA0-/1/1755113017468?e=1775692800&v=beta&t=d4zGdnBmU3z90rpmaKLko_h-OOw4tW_3Tc4A5GLXcTE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-zinc-900 hover:text-zinc-600 transition-colors flex items-center gap-1"
                >
                  B.S. Computer Science
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a 
                  href="https://www.brookes.ac.uk/courses/undergraduate/computer-science" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1 hover:text-zinc-900 transition-colors flex items-center gap-1"
                >
                  OXFORD BROOKES | 2016 – 2019
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>
              <div>
                <a 
                  href="https://media.licdn.com/dms/image/v2/D562DAQGcmQbB5dI5lg/profile-treasury-document-cover-images_1280/profile-treasury-document-cover-images_1280/0/1730365349682?e=1775120400&v=beta&t=9d8WI_fIsVmUqECe7R2SJT_22lIJ4b6EZUztUINgRPk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-zinc-900 hover:text-zinc-600 transition-colors flex items-center gap-1"
                >
                  AdvDip in Information Technology
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a 
                  href="https://www.facebook.com/photo/?fbid=5539153952777078&set=pb.100063876558786.-2207520000" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1 hover:text-zinc-900 transition-colors flex items-center gap-1"
                >
                  Informatics Academy | 2016 – 2018
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>
              <div>
                <a 
                  href="https://media.licdn.com/dms/image/v2/D562DAQFA4dftrFLVdA/profile-treasury-document-images_1920/profile-treasury-document-images_1920/1/1730365382989?e=1775692800&v=beta&t=E5Ez76XwjXc8EatDHNOAKlO5F4gMtjLn0mC2y8Ky3X8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-zinc-900 hover:text-zinc-600 transition-colors flex items-center gap-1"
                >
                  B.S. Business w Communications
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a 
                  href="https://www.suss.edu.sg/academics/schools-college/suss-schools/school-of-business" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1 hover:text-zinc-900 transition-colors flex items-center gap-1"
                >
                  SUSS | 2009 – 2011
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>
              <div>
                <a 
                  href="https://media.licdn.com/dms/image/v2/D562DAQGkilGdNte10g/profile-treasury-document-images_1920/B56Zik4ugkHcAs-/1/1755112993084?e=1775692800&v=beta&t=XMMSRTl21FiAnlRTLnqv01_cWlNdVqs5OJC0WPCETqc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-zinc-900 hover:text-zinc-600 transition-colors flex items-center gap-1"
                >
                  Dip in Management Studies
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a 
                  href="https://www.suss.edu.sg/programmes/detail/graduate-diploma-in-management-gdmgt?utm_source=Google&utm_medium=search&utm_campaign=postgrad_Jul+26+Intake&utm_content=sbiz_gd_management&gad_source=1&gad_campaignid=23642613546&gbraid=0AAAAADuYXCtp4MkYWMRJ-5iJj8RdxuY4o&gclid=CjwKCAjwspPOBhB9EiwATFbi5Mqub3q-VaFUy-zKEcyf_Qe5xg7NqhSUfos0fYSAIkoTIl6sB9t7yRoCmtgQAvD_BwE" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1 hover:text-zinc-900 transition-colors flex items-center gap-1"
                >
                  SUSS | 2006 – 2008
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>
            </div>
          </Section>

          <Section title="Skills" icon={Layout}>
            <div className="space-y-2">
              {skills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </Section>

          <Section title="Awards" icon={Award}>
            <ul className="space-y-4">
              {[
                { 
                  name: "Student Leader at Internship", 
                  url: "https://media.licdn.com/dms/image/v2/D562DAQHNclo4qo35CA/profile-treasury-image-shrink_480_480/B56Z3nW6.MK4AM-/0/1777703039510?e=1778317200&v=beta&t=3KXEQRe5Uli6pli-HFvF8Mhw_VhGLN8EtkwxO5Upcwg" 
                },
                { 
                  name: "Initiative award Community Svc", 
                  url: "https://media.licdn.com/dms/image/v2/D562DAQGvmH4USXVarg/profile-treasury-image-shrink_800_800/B56Z3kbcGMIUAY-/0/1777653892281?e=1778317200&v=beta&t=lHT2EoQAad9tiVpozv-NVYVwLCsSW5NDk-BXiXzBgZ4" 
                }
              ].map((award, i) => (
                <li key={i} className="group">
                  <a 
                    href={award.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-start gap-3 text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
                  >
                    <Trophy className="w-4 h-4 mt-0.5 text-zinc-400 group-hover:text-zinc-900 transition-colors" />
                    <span className="flex-1 leading-tight">{award.name}</span>
                    <ExternalLink className="w-3 h-3 mt-1 opacity-0 group-hover:opacity-100 transition-opacity text-zinc-400" />
                  </a>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Tech Stack" icon={Code2}>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span 
                  key={tech} 
                  className="relative overflow-hidden px-3 py-1.5 bg-white border border-zinc-200 rounded-md text-xs font-medium text-zinc-600 hover:bg-zinc-950 hover:text-white hover:border-zinc-950 transition-all duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Section>

          <Section title="Hobbies" icon={Gamepad2}>
            <div className="grid grid-cols-3 gap-4">
              {hobbies.map((hobby) => (
                <a 
                  key={hobby.name} 
                  href={hobby.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white border border-zinc-100 flex items-center justify-center text-zinc-400 group-hover:bg-zinc-900 group-hover:text-white group-hover:border-zinc-900 transition-all duration-300">
                    <hobby.icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 group-hover:text-zinc-900 transition-colors">{hobby.name}</span>
                </a>
              ))}
            </div>
          </Section>
        </aside>

        {/* Right Column: Main Content */}
        <div className="lg:col-span-8">
          <Section title="Work Experience" icon={Briefcase}>
            <ExperienceItem 
              title="Digital Content Strategist"
              company="Intratrade International Equipment"
              period="Dec 2024 – Current"
              description={[
                "Oversee the corporate website, from development to maintenance and issue resolution.",
                "Lead content management with a focus on multimedia integration to boost engagement.",
                "Oversee digital asset creation and governance, ensuring strict brand alignment.",
                "Implement robust cybersecurity measures, including Multi-Factor Authentication (MFA)."
              ]}
            />
            <ExperienceItem 
              title="eCommerce Web Developer"
              company="Worldwide Pacific Holdings"
              period="Nov 2021 – Sep 2024"
              description={[
                "Drive the long-term product roadmap by identifying market opportunities and UX trends.",
                "Architect complex content structures and intuitive navigation models to optimize user flows.",
                "Establish and maintain a comprehensive Design System and style guides to ensure platform-wide consistency.",
                "Execute high-fidelity visual design adhering to WCAG2.1 accessibility standards.",
                "Define precise interaction behaviors including micro-animations and transitions."
              ]}
            />
            <ExperienceItem 
              title="Business Analyst"
              company="NTUC Link"
              period="Jun 2019 – Nov 2021"
              description={[
                "Develop and deliver UI wireframe mockups and detailed user flows.",
                "Collaborate with key users to identify pain points and improvement opportunities.",
                "Plan and coordinate UATs, test case execution, and sign-offs."
              ]}
            />
            <ExperienceItem 
              title="System Software Tester"
              company="Great Eastern Life"
              period="Oct 2015 - Jun 2016"
              description={[
                "Contributed as a key project member by developing test cases, managing defect tracking and resolution, and planning/executing UAT cycles."
              ]}
            />
            <ExperienceItem 
              title="Business Analyst"
              company="Hewlett Packard"
              period="Nov 2013 - Oct 2014"
              description={[
                "As the APAC Regional System Ticket Management Lead, responsible for overseeing the end-to-end management of system ticketing processes across the region.",
                "Act as the primary liaison between regional offices and global teams, ensuring alignment with corporate standards and best practices."
              ]}
            />
            <ExperienceItem 
              title="Change Management Analyst"
              company="Accenture"
              period="Jan 2013 - Jun 2013"
              description={[
                "Support the overall digital transformation movement.",
                "Design communication, training materials, and monitor readiness and progress to ensure successful organizational transitions."
              ]}
            />
          </Section>

          <Section title="Courses" icon={BookOpen}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {courses.map((course) => (
                course.url ? (
                  <a 
                    key={course.name} 
                    href={course.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-white border border-zinc-100 rounded-xl hover:shadow-xl hover:bg-zinc-950 hover:border-zinc-950 transition-all duration-300 group"
                  >
                    <div className="flex items-start justify-between">
                      <h5 className="text-sm font-bold text-zinc-800 group-hover:text-white transition-colors">{course.name}</h5>
                      <ExternalLink className="w-3 h-3 text-zinc-300 group-hover:text-white/70" />
                    </div>
                    <p className="text-xs text-zinc-400 font-medium uppercase tracking-wider group-hover:text-zinc-500 transition-colors">{course.school}</p>
                  </a>
                ) : (
                  <div key={course.name} className="p-4 bg-white border border-zinc-100 rounded-xl hover:shadow-xl hover:bg-zinc-950 hover:border-zinc-950 transition-all duration-300 group">
                    <h5 className="text-sm font-bold text-zinc-800 group-hover:text-white transition-colors">{course.name}</h5>
                    <p className="text-xs text-zinc-400 font-medium uppercase tracking-wider group-hover:text-zinc-500 transition-colors">{course.school}</p>
                  </div>
                )
              ))}
            </div>
          </Section>
        </div>
      </main>

      <footer className="bg-white border-t border-zinc-200 py-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-400">
            © {new Date().getFullYear()} — Built with Passion
          </p>
        </div>
      </footer>
    </div>
  );
}
