import { Card } from '@/components/card'
import { Activity } from '@/components/resume/activity'
import { Section } from '@/components/resume/section'
import { WorkExperience } from '@/components/resume/work-experience'
import { OpenGraph } from '@/lib/og'

export function generateMetadata() {
  const image = `/api/og?title=${encodeURIComponent('Resume')}`

  return {
    ...OpenGraph,
    title: 'Resume',
    openGraph: {
      title: 'Resume',
      images: [
        {
          type: 'image/png',
          width: 1200,
          height: 630,
          url: image,
        },
      ],
    },
    twitter: {
      images: [
        {
          type: 'image/png',
          width: 1200,
          height: 630,
          url: image,
        },
      ],
    },
  }
}

const workExperiences = [
  {
    company: 'Fanzeal',
    website: 'https://fanzeal.com',
    title: 'Senior Full-stack Developer',
    start: 'Feb 2023',
    end: 'Present',
    responsibilities: [
      'Led front-end and mobile development using React & React Native',
      'Built admin dashboard in both front-end (Next.js) and back-end (Nest.js) to help administrators manage all the resources related to the platform',
      'Worked with AWS Cognito, Lambda, API Gateway, DinamoDB, Route53, Fargate',
      'Participated in product development from the initial stages',
      'Provided technical guidance and mentorship to team members',
    ],
  },
  {
    company: 'Pangara',
    website: 'https://pangara.com',
    title: 'Senior Full-stack Developer',
    start: 'Feb 2020',
    end: 'Feb 2023',
    responsibilities: [
      'Built a CRM platform in Laravel and front-end components in Vue.js',
      'Developed a low-code platform using Directus, Node.js and Vue.js',
      'Built a dashboard that interacts directly with K8S API, AWS services using Golang and Nuxt',
      'Setup CI/CD for the development team',
      'Assisted the devops engineer to setup Docker, K8S environments',
    ],
  },
  {
    company: 'InBusiness AS',
    website: 'https://inbusiness.no',
    title: 'WordPress Developer',
    start: 'July 2017',
    end: 'Feb 2020',
    responsibilities: ['Built, and maintained WordPress themes and plugins for Norwegian customers', 'Led a small team of 5 developers'],
  },
  {
    company: 'EngineThemes',
    website: 'https://enginethemes.com',
    title: 'WordPress Developer',
    start: 'July 2015',
    end: 'July 2017',
    responsibilities: [
      'Built, and maintained WordPress themes and plugins',
      'Trained new members',
      'Supported the Customer Service team with technical issues',
    ],
  },
  {
    company: 'WM Marketing',
    title: 'WordPress Developer',
    start: 'July 2013',
    end: 'July 2015',
    responsibilities: [
      'Designed layouts in Photoshop and converted them to HTML',
      'Built, maintained WordPress themes for Spa and Dental clients',
      'Managed Linux and Windows servers',
    ],
  },
]

const projects = [
  {
    name: 'Graffe (static site generator)',
    description: 'An opinionated static site generator written in Go',
    link: 'https://github.com/tatthien/giraffe',
  },
  {
    name: 'Flat Preloader',
    description: 'A WordPress pluggin allowing users to add loading screen the their websites',
    link: 'https://thisisthien.gumroad.com/l/flat-preloader-pro',
  },
  {
    name: ' WP Block Mindmap',
    description: 'A WordPress plugin allows you to create a markdown-to-mindmap block inside the Gutenberg editor (Block Editor)',
    link: 'https://thisisthien.gumroad.com/l/wp-block-mindmap',
  },
  {
    name: '12bit.vn',
    description: 'A tech blog that shares my experiences and knowledge',
    link: 'https://12bit.vn',
  },
]

const activities = [
  {
    org: 'Saigon WordPress Meetup',
    website: 'https://www.meetup.com/Saigon-WordPress',
    title: 'Speaker / Organizer',
    start: '2016',
    end: '2020',
    responsibilities: ['Organized the monthly meetups', 'Talked about WordPress as a speaker'],
  },
  {
    org: 'WordPress',
    website: 'https://profiles.wordpress.org/tatthiennguyen',
    title: 'Translator',
    start: '2016',
    end: '2020',
    responsibilities: ['Translated WordPress core, themes and plugins into Vietnamese', 'Reviewed other translations'],
  },
  {
    org: 'Vue.js Vietnam Community',
    website: 'https://vi.vuejs.org',
    title: 'Group admin / Translator',
    start: '2017',
    end: '2028',
    responsibilities: ['Managed the Official Vue.js Facebook group in Vietnam', 'Translated Vue.js documentation into Vietnamese'],
  },
]

export default function Page() {
  return (
    <Card>
      <div className="article flex flex-col gap-12">
        <Header />
        <Section title="Skills and Technologies">
          <ul className="list-none">
            <li className="list-none">- JavaScript/TypeScript, Golang</li>
            <li className="list-none">- React, Next.js, Node.js, WordPress, TailwindCSS, SCSS</li>
            <li className="list-none">- MySQL, PostgreSQL, MongoDB</li>
            <li className="list-none">- AWS services, Docker, CI/CD (GitLab, GitHub, BitBucket)</li>
          </ul>
        </Section>

        <Section title="Work Experience">
          {workExperiences.map((workExperience, index) => (
            <>
              <WorkExperience
                key={workExperience.company}
                company={workExperience.company}
                website={workExperience.website}
                title={workExperience.title}
                start={workExperience.start}
                end={workExperience.end}
                responsibilities={workExperience.responsibilities}
              />
              {index < workExperiences.length - 1 && <div className="my-4 h-[1px] bg-gray-4" />}
            </>
          ))}
        </Section>

        <Section title="Projects">
          <div className="flex flex-col gap-4">
            {projects.map((project, index) => (
              <div key={project.name}>
                <h4 className="font-semibold">
                  <a href={project.link} target="_blank" className="text-primary hover:underline" rel="noreferrer">
                    {project.name}
                  </a>
                </h4>
                <p className="mb-0">{project.description}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Activities">
          {activities.map((workExperience, index) => (
            <>
              <Activity
                key={workExperience.org}
                org={workExperience.org}
                website={workExperience.website}
                title={workExperience.title}
                start={workExperience.start}
                end={workExperience.end}
                responsibilities={workExperience.responsibilities}
              />
              {index < activities.length - 1 && <div className="my-4 h-[1px] bg-gray-4" />}
            </>
          ))}
        </Section>

        <Section title="Education">
          <div>
            <h4 className="font-semibold">University of Science, Ho Chi Minh City, Vietnam</h4>
            <p className="mb-0">Sep 2010 - Sep 2014</p>
            <p className="mb-0">Major in Information Technology</p>
          </div>
        </Section>

        <Section title="Interests">
          <div>
            <p>Tech, startup, design, stickers and classic motorcycles</p>
          </div>
        </Section>
      </div>
    </Card>
  )
}

function Header() {
  return (
    <header>
      <h2 className="font-semibold text-lg">Thien Nguyen (aka. Daniel)</h2>
      <div>Software Engineer</div>
      <div>Ho Chi Minh city, Vietnam</div>
      <div className="flex flex-col md:flex-row md:gap-4">
        <span>+84 033 9646 120</span>
        <a href="mailto:me@thien.dev" className="text-primary hover:underline">
          me@thien.dev
        </a>
        <a href="https://thien.dev" target="_blank" className="text-primary hover:underline" rel="noreferrer">
          thien.dev
        </a>
        <a href="https://thien.dev/resume.pdf" target="_blank" rel="noreferrer" className="text-gray-8 hover:underline">
          (Download PDF)
        </a>
      </div>
    </header>
  )
}
