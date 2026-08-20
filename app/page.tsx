import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import { Experience, PageInfo, Project, Skill, Social } from "@/typings";
import { fetchPageInfos } from "@/utils/fetchPageInfo";
import { fetchExperiences } from "@/utils/fetchExperiences";
import { fetchProjects } from "@/utils/fetchProjects";
import { fetchSkills } from "@/utils/fetchSkills";
import { fetchSocials } from "@/utils/fetchSocials";

// 静态生成（构建期预渲染，用户秒开）+ 按需再验证：
// 平时不轮询；Sanity 发布内容时通过 webhook 回调 /api/revalidate 触发 revalidatePath("/")。
// 配合 utils/fetch*.ts 里的 try/catch 兜底，构建期即使 Sanity 不可用也不会中断。
export const revalidate = false;

export default async function Home() {
  const pageInfo: PageInfo = await fetchPageInfos();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return (
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen w-screen snap-y snap-mandatory 
    overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin 
    scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
    >
      {/* Header */}
      <Header socials={socials} />

      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      {/* Experience */}
      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      {/* Projects */}
      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      {/* Contact Me */}
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
    </div>
  );
}
