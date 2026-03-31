import { type Metadata } from 'next'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoCostaCodeCraft from '@/images/logos/costacodecraft.svg'
import logoGE from '@/images/logos/ge.svg'
import logoKroger from '@/images/logos/kroger.svg'

const projects = [
  {
    name: 'costacodecraft',
    description:
      'My personal portfolio and blog — built with Next.js, Tailwind CSS, and TypeScript.',
    link: {
      href: 'https://github.com/joaquimscosta/joaquimcosta.dev',
      label: 'github.com',
    },
    logo: logoCostaCodeCraft,
  },
  {
    name: 'GE Workflows Platform',
    description:
      'Led the backend modernization of GE\'s internal Workflows platform from monolith to microservices, supporting high availability across the organization.',
    link: {
      href: '#',
      label: 'Internal project',
    },
    logo: logoGE,
  },
  {
    name: 'Kroger Backend Services',
    description:
      'Standardized backend architecture with RBAC security, OAuth2, Flyway migrations, and optimized CI/CD pipelines using GitHub Actions.',
    link: {
      href: '#',
      label: 'Internal project',
    },
    logo: logoKroger,
  },
]

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

function LockIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Projects',
  description:
    "Projects and systems I've built throughout my career in backend engineering.",
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Projects and systems I've built throughout my career."
      intro="From enterprise platforms to open-source work, here are some of the projects I'm most proud of. Some are internal systems I've led, while others are open-source and available on GitHub."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => {
          let isInternal = project.link.href === '#'

          return (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt=""
                  className="h-8 w-8"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                {isInternal ? (
                  project.name
                ) : (
                  <Card.Link href={project.link.href}>
                    {project.name}
                  </Card.Link>
                )}
              </h2>
              <Card.Description>{project.description}</Card.Description>
              {isInternal ? (
                <p className="relative z-10 mt-6 flex items-center text-sm text-zinc-400 dark:text-zinc-500">
                  <LockIcon className="h-5 w-5 flex-none" />
                  <span className="ml-2">Private</span>
                </p>
              ) : (
                <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                  <LinkIcon className="h-6 w-6 flex-none" />
                  <span className="ml-2">{project.link.label}</span>
                </p>
              )}
            </Card>
          )
        })}
      </ul>
    </SimpleLayout>
  )
}
