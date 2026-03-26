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
  <div className="mb-4">
    <div className="flex justify-between text-xs font-medium mb-1 text-zinc-600">
      <span>{name}</span>
    </div>
    <div className="h-1 bg-zinc-100 rounded-full overflow-hidden">
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="h-full bg-zinc-800"
      />
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
    { name: "Behance", icon: Layout, url: "https://www.behance.net/joshlim13", color: "hover:text-blue-500" },
    { name: "Figma", icon: Figma, url: "https://www.figma.com/design/Ligql2F5F0eRHYXW8XEWyT/Mobile-App-ReDesign---Kitchen-Stories--Version-2-by-Josh-Lim?node-id=0-1&t=7pMCf1xSaNm8OSnS-1", color: "hover:text-purple-500" },
    { name: "Github", icon: Github, url: "https://github.com/joshjlgr", color: "hover:text-zinc-900" },
    { name: "Portfolio", icon: Globe, url: "https://www.thecn.com/JG282", color: "hover:text-zinc-600" },
  ];

  const skills = [
    { name: "Information Architecture", level: 95 },
    { name: "Design Principles", level: 85 },
    { name: "Design Thinking", level: 85 },
    { name: "Human Centred Design", level: 90 },
    { name: "Wireframing", level: 95 },
    { name: "Prototyping", level: 88 },
    { name: "Usability Testing", level: 85 },
    { name: "Version Control", level: 80 },
  ];

  const techStack = [
    "HTML5", "CSS3", "JavaScript", "React", "WordPress", "WooCommerce", "NodeJS", "Tailwindcss", "Typescript", 
    "Figma", "Photoshop", "Git", "MySQL", "PHP", "Python", "jquery", "AJAX", "JSON", "DevTools", "ChatGPT", "Gemini", "Claude",
    "Notion", "Copilot", "ServiceNow", "Bash", "NPM", "Perplexity", "Emergent", "Grok", "Canva", "Jira", "PowerShell", "Lightroom"
  ];

  const hobbies = [
    { name: "Soccer", icon: Trophy },
    { name: "Game", icon: Gamepad2 },
    { name: "Cook", icon: Utensils },
    { name: "Learn", icon: BookOpen },
    { name: "Design", icon: PenTool },
    { name: "Code", icon: Terminal },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 font-sans selection:bg-zinc-900 selection:text-white">
      {/* Header / Hero */}
      <header className="bg-white border-b border-zinc-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-5xl font-black tracking-tighter text-zinc-900 mb-2">JOSH LIM</h1>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-500">UIUX Designer / Developer</p>
          </motion.div>
          
          <div className="flex flex-wrap gap-4">
            {contactLinks.map((link) => (
              <a 
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full bg-zinc-50 border border-zinc-200 text-zinc-500 transition-all duration-300 ${link.color} hover:border-current hover:shadow-lg hover:-translate-y-1`}
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
              4 years experience in web design and project management. With a distinctive blend of creativity, analytical thinking, and coding skills, I transform ideas into user-centric experiences. Ensuring the delivery of practical and digitally effective solutions.
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
                  Dip & AdvDip in Information Technology
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
                  url: "https://media.licdn.com/dms/image/v2/D562DAQGfjjZiO0AFdQ/profile-treasury-document-images_1920/B56ZswR2LAJ4A0-/1/1766041545742?e=1775088000&v=beta&t=e3-jNhsiBGqOPtbhuwBOFQ76t21Gc0EdCRMCE5hQw9U" 
                },
                { 
                  name: "Initiative award Community Svc", 
                  url: "https://media.licdn.com/dms/image/v2/D562DAQE1V0tqN_iJDg/profile-treasury-image-shrink_1280_1280/B56Zik.ghuHQAk-/0/1755114508288?e=1775055600&v=beta&t=KhGMhNHR08rokmQIvfCdQud0O2PmVueU8DGVFMtc9G4" 
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
                  className="px-3 py-1.5 bg-white border border-zinc-200 rounded-md text-xs font-medium text-zinc-600 hover:border-zinc-900 hover:text-zinc-900 transition-all cursor-default"
                >
                  {tech}
                </span>
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
              period="Jan 2025 – Current"
              description={[
                "Oversee the full lifecycle of the corporate website, including development, ongoing maintenance, and critical issue management.",
                "Lead comprehensive content management services, specializing in multimedia integration to enhance user engagement.",
                "Ensure the consistent generation and management of all digital assets, verifying strict alignment with brand identity.",
                "Drive the adoption of robust cybersecurity features, including implementing Multi-Factor Authentication (MFA)."
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
          </Section>

          <Section title="Courses" icon={BookOpen}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { 
                  name: "AI Mastermind", 
                  school: "OutSkill",
                  url: "https://www.outskill.com/"
                },
                { 
                  name: "UIUX Design Program", 
                  school: "SIT", 
                  url: "https://media.licdn.com/dms/image/v2/D562DAQG7imwUJXN3Bg/profile-treasury-document-images_1280/B56Zm68tr6G4AU-/1/1759778104747?e=1775088000&v=beta&t=qtW3yywexlfBf4xGj_4gRVoNXqZHaWMUfIpSWLCJA9s" 
                },
                { 
                  name: "Front End Development", 
                  school: "Great Learning",
                  url: "https://media.licdn.com/dms/image/v2/D562DAQEd1Jd61QUdxw/profile-treasury-document-images_1280/B56Z0lbKKeJQAU-/1/1774449372406?e=1775088000&v=beta&t=3lUPtwPaLxvY-MhxabDflRv7K9gqq_mhwNlvWzENDJI"
                },
                { 
                  name: "Material CSS", 
                  school: "Udemy",
                  url: "https://media.licdn.com/dms/image/v2/D562DAQELNx_h_nc5yw/profile-treasury-document-images_1280/B56Zg4Id.XHMAc-/1/1753288402520?e=1775088000&v=beta&t=8y2x3-CIoBRMIdd5kS2qnVSFORYDrFnQ4YgboYm3TYc"
                },
                { 
                  name: "Adobe Campaign", 
                  school: "Adobe Digital Learning",
                  url: "https://media.licdn.com/dms/image/v2/D562DAQG3SizlDXyGYA/profile-treasury-document-images_1280/B56Zg4ICh3G4AU-/1/1753288293478?e=1775088000&v=beta&t=E7lxuSTA1FWpaP4VnNUJEb7RliOACWQV9AqPzsa5cHc"
                },
                { 
                  name: "Business Analysis Certification", 
                  school: "IIL",
                  url: "https://media.licdn.com/dms/image/v2/D562DAQGxihzUxkdq5w/profile-treasury-document-images_1280/profile-treasury-document-images_1280/1/1689787878270?e=1775088000&v=beta&t=ymPfLk-xRovsj3xI6w2K2pFfJhIb1VlfvDZGWpORz0M"
                },
                { 
                  name: "Full Stack Java Developer", 
                  school: "NTUC Learning Hub",
                  url: "https://media.licdn.com/dms/image/v2/D562DAQFpHP6up09gSw/profile-treasury-document-cover-images_1280/profile-treasury-document-cover-images_1280/0/1706251657335?e=1775055600&v=beta&t=6Agso1FPRK7mTUEEy-YBVZx8en3HRn7hoZ1t_OCAYpI"
                },
                { 
                  name: "Lean Six Sigma", 
                  school: "HEWLETT PACKARD",
                  url: "https://media.licdn.com/dms/image/v2/D562DAQEgF5NSD-8JJA/profile-treasury-document-images_1280/profile-treasury-document-images_1280/1/1707633798438?e=1775088000&v=beta&t=kTCUnYWiET-vU3pUrYiKXakSoWSMF8Oz28nsi1RBdUg"
                }
              ].map((course) => (
                course.url ? (
                  <a 
                    key={course.name} 
                    href={course.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-white border border-zinc-100 rounded-xl hover:shadow-md transition-shadow group"
                  >
                    <div className="flex items-start justify-between">
                      <h5 className="text-sm font-bold text-zinc-800 group-hover:text-zinc-600 transition-colors">{course.name}</h5>
                      <ExternalLink className="w-3 h-3 text-zinc-300 group-hover:text-zinc-500" />
                    </div>
                    <p className="text-xs text-zinc-400 font-medium uppercase tracking-wider">{course.school}</p>
                  </a>
                ) : (
                  <div key={course.name} className="p-4 bg-white border border-zinc-100 rounded-xl hover:shadow-md transition-shadow">
                    <h5 className="text-sm font-bold text-zinc-800">{course.name}</h5>
                    <p className="text-xs text-zinc-400 font-medium uppercase tracking-wider">{course.school}</p>
                  </div>
                )
              ))}
            </div>
          </Section>

          <Section title="Hobbies" icon={Gamepad2}>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {hobbies.map((hobby) => (
                <div key={hobby.name} className="flex flex-col items-center gap-2 group">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-zinc-100 flex items-center justify-center text-zinc-400 group-hover:bg-zinc-900 group-hover:text-white group-hover:border-zinc-900 transition-all duration-300">
                    <hobby.icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 group-hover:text-zinc-900 transition-colors">{hobby.name}</span>
                </div>
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
