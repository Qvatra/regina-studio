import { Metadata } from 'next'
import { languages } from '../../config/languages'
import TopBar from '../../components/TopBar'
import Footer from '../../components/Footer'
import { headers } from 'next/headers'
import '../../styles/index.css'
import ReactDOM from 'react-dom'

export async function generateMetadata(): Promise<Metadata> {
    const headersList = await headers()
    const path = headersList.get('x-invoke-path') || '/'
    const langCodes = Object.keys(languages)
    const cleanPath = path.replace(new RegExp(`^\\/(${langCodes.join('|')})`), '')
  

  return {
    alternates: {
      languages: {
        'x-default': `${process.env.NEXT_PUBLIC_WEBSITE_URL}/en${cleanPath}`,
        'en-NL': `${process.env.NEXT_PUBLIC_WEBSITE_URL}/en${cleanPath}`,
        'nl-NL': `${process.env.NEXT_PUBLIC_WEBSITE_URL}/nl${cleanPath}`,
        'uk-NL': `${process.env.NEXT_PUBLIC_WEBSITE_URL}/uk${cleanPath}`,
      }
    }
  }
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  const { lang } = await params;

  ReactDOM.preconnect('https://fonts.googleapis.com')
  ReactDOM.preconnect('https://fonts.gstatic.com', { crossOrigin: 'anonymous' })
  ReactDOM.preconnect('https://res.cloudinary.com')

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
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
} 