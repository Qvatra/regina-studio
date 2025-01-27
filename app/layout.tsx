import { Metadata } from 'next'
import { Language, languages } from '@/config/languages'
import TopBar from '@/components/TopBar'
import Footer from '@/components/Footer'
import { headers } from 'next/headers'
import '@/styles/index.css'
import ReactDOM from 'react-dom'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

export async function generateMetadata(): Promise<Metadata> {
    const headersList = await headers()
    const path = headersList.get('x-invoke-path') || '/'
    const langCodes = Object.keys(languages)
    const cleanPath = path.replace(new RegExp(`^\\/(${langCodes.join('|')})`), '')
  

  return {
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/en${cleanPath}`,
        languages: {
            'x-default': `${process.env.NEXT_PUBLIC_WEBSITE_URL}/en${cleanPath}`,
            'en-NL': `${process.env.NEXT_PUBLIC_WEBSITE_URL}/en${cleanPath}`,
            'nl-NL': `${process.env.NEXT_PUBLIC_WEBSITE_URL}/nl${cleanPath}`,
            'ru-NL': `${process.env.NEXT_PUBLIC_WEBSITE_URL}/ru${cleanPath}`
        }
    }
  }
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const headersList = await headers()
  const lang = (headersList.get('x-invoke-path')?.split('/')[1] || 'en') as Language;

  ReactDOM.preconnect('https://fonts.googleapis.com', { crossOrigin: 'anonymous' })
  ReactDOM.preconnect('https://fonts.gstatic.com', { crossOrigin: 'anonymous' })
  ReactDOM.preconnect('https://res.cloudinary.com', { crossOrigin: 'anonymous' })
  ReactDOM.preconnect('https://www.youtube.com', { crossOrigin: 'anonymous' })

  return (
    <html lang={lang}>
      <head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet" 
        />
      </head>

      <body className="bg-white antialiased">
        <div className="flex flex-col min-h-screen">
          <TopBar />

          <main className="flex-grow">
            {children}
            <SpeedInsights/>
            <Analytics />
          </main>

          <Footer />
        </div>
      </body>
    </html>
  )
} 