import { Metadata } from 'next'
import { languages } from '../../config/languages'
import TopBar from '../../components/TopBar'
import Footer from '../../components/Footer'
import { headers } from 'next/headers'
import '../../styles/index.css'

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
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

  return (
    <html lang={lang}>
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