import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SkillSift',
  description: 'SkillSift offers personalized learning pathways and AI-driven mentorship for professionals in niche fields, helping them bridge knowledge gaps with tailored content and expert guidance.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">SkillSift</h1>
      <p className="mt-4 text-lg">SkillSift offers personalized learning pathways and AI-driven mentorship for professionals in niche fields, helping them bridge knowledge gaps with tailored content and expert guidance.</p>
    </main>
  )
}
