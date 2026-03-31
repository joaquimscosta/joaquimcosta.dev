import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description:
    'Tools I use, languages I work with, and infrastructure I build on.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Tools I use, languages I work with, and infrastructure I build on."
      intro="Here's an overview of the technologies and tools that power my day-to-day work as a backend engineer."
    >
      <div className="space-y-20">
        <ToolsSection title="Languages & Frameworks">
          <Tool title="Java & Kotlin">
            My primary languages for over a decade. I use them daily for building
            microservices, APIs, and backend systems with Spring Boot and Spring
            Cloud.
          </Tool>
          <Tool title="Spring Boot & Spring Cloud">
            The backbone of most systems I build. From REST APIs to event-driven
            microservices, Spring Boot is my go-to framework for production-grade
            Java/Kotlin applications.
          </Tool>
          <Tool title="Python">
            I use Python for scripting, automation, and increasingly for AI/ML
            experiments with LLMs and agentic workflows.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Cloud & Infrastructure">
          <Tool title="Azure & Google Cloud">
            My primary cloud platforms. On Azure I work with AKS, Cosmos DB,
            Azure DevOps, and Azure AI Services. On GCP I use Cloud Run, GKE,
            and Cloud Build. I hold multiple Azure certifications.
          </Tool>
          <Tool title="Docker & Kubernetes">
            Essential for containerized deployments. I use Docker for local
            development environments and Kubernetes (AKS, GKE) for production
            orchestration.
          </Tool>
          <Tool title="Terraform">
            My infrastructure as code tool for provisioning and managing cloud
            resources across Azure and GCP reproducibly.
          </Tool>
          <Tool title="GitHub Actions">
            My CI/CD platform of choice. I design workflows for module-specific
            builds, automated testing, and deployment pipelines.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Databases">
          <Tool title="PostgreSQL">
            My go-to relational database for most projects. I use it with
            Flyway for schema migrations and Spring Data JPA for persistence.
          </Tool>
          <Tool title="Redis">
            For caching, session management, and high-throughput data scenarios
            where low latency matters.
          </Tool>
          <Tool title="Azure Cosmos DB & MongoDB">
            For document-oriented data models and globally distributed
            applications. I hold the Azure Cosmos DB Developer Specialty
            certification.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development Tools">
          <Tool title="IntelliJ IDEA">
            My primary IDE for Java and Kotlin development. The refactoring
            tools and Spring Boot integration are unmatched.
          </Tool>
          <Tool title="VS Code & Claude Code">
            VS Code is my editor for TypeScript, Python, and general-purpose
            work. Claude Code is my AI-powered CLI for autonomous coding tasks,
            code review, and rapid prototyping.
          </Tool>
          <Tool title="iTerm2 + Zsh + Oh My Zsh">
            My terminal setup. Combined with custom aliases and plugins, it
            makes navigating projects and running commands efficient.
          </Tool>
          <Tool title="SDKMAN, nvm, uv">
            Version managers for Java/Kotlin (SDKMAN), Node.js (nvm), and
            Python (uv). Essential for managing multiple projects with
            different runtime versions.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Build & Package">
          <Tool title="Maven & Gradle">
            Build tools for JVM projects. I use Maven for most Spring Boot
            projects and Gradle when more flexibility is needed.
          </Tool>
          <Tool title="pnpm">
            My preferred package manager for JavaScript/TypeScript projects.
            Fast, disk-efficient, and strict about dependency resolution.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
