import Link from 'next/link'
import { navigationContent } from '../content/navigation'

export default function NotFound() {
    return (
        <div className="flex items-center justify-center h-[calc(100vh-300px)] bg-gray-100 overflow-hidden">
            <div className="text-center">
            <h2 className="text-4xl font-bold mb-10">404: Page Not Found</h2>
            {Object.entries(navigationContent).map(([lang, translations]) => (
                <div key={lang} className="space-x-4 mb-4">
                    <Link href={`/${lang}`} className="text-blue-500 hover:underline">{translations.home}</Link>
                    <Link href={`/${lang}/about`} className="text-blue-500 hover:underline">{translations.about}</Link>
                    <Link href={`/${lang}/contact`} className="text-blue-500 hover:underline">{translations.contact}</Link>
                    <Link href={`/${lang}/services/photography`} className="text-blue-500 hover:underline">{translations.photography}</Link>
                    <Link href={`/${lang}/services/videography`} className="text-blue-500 hover:underline">{translations.videography}</Link>
                    <Link href={`/${lang}/services/wedding`} className="text-blue-500 hover:underline">{translations.wedding}</Link>
                    </div>
            ))}
            </div>
        </div>
    )
}