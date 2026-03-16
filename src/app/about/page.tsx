import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    "I'm Joaquim Costa, a Staff Software Engineer based in Rhode Island.",
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I&apos;m Joaquim Costa. I build scalable backend systems from Rhode
            Island.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I&apos;m a Staff Software Engineer with over 13 years of experience
              designing and building secure, cloud-native backend systems. I
              specialize in Java, Kotlin, and Spring Boot, with a strong focus on
              microservices architecture, API design, and DevOps automation.
            </p>
            <p>
              I played a leading role at <strong>General Electric</strong> where
              I steadily advanced to Staff Software Engineer, earning multiple
              promotions based on impact. As the backend lead for the company&apos;s
              internal &quot;Workflows&quot; platform — one of the most widely used systems
              across the organization — I collaborated on modernizing the
              application from a monolith to microservices, designing and
              delivering robust backend solutions that supported high
              availability and scalability. My work included leading technical
              design, optimizing performance, and implementing infrastructure
              improvements such as Docker-based local development environments
              and CI/CD pipelines.
            </p>
            <p>
              At <strong>Kroger</strong>, I standardized backend architecture,
              implemented RBAC security using OAuth2, and optimized CI/CD
              workflows with GitHub Actions. I led code review practices and
              championed OpenAPI adoption to align service development with
              platform-wide standards.
            </p>
            <p>
              My time at <strong>Capgemini</strong> gave me exposure to
              client-facing enterprise projects where I achieved a 40%
              improvement in API response times through strategic refactoring and
              caching. Earlier in my career at{' '}
              <strong>General Dynamics Mission Systems</strong>, I worked on key
              management and public key infrastructure products securing millions
              of devices.
            </p>
            <p>
              Over the past several years, I&apos;ve worked extensively in Azure
              (including AKS) and have also been diving into Generative AI, LLMs,
              and agentic systems — especially where they intersect with backend
              development, developer tooling, and automation workflows.
            </p>
            <p>
              Outside of engineering, I enjoy traveling, automating my home,
              playing soccer (futebol), and dancing. I&apos;m based in Rhode Island
              and always open to collaboration, mentoring, and solving meaningful
              technical challenges.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https://github.com/joaquimscosta"
              icon={GitHubIcon}
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/joaquimscosta"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
