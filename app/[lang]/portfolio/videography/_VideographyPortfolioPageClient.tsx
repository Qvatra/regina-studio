"use client";

import ScrollToTop from "@/components/ScrollToTop";
import StyledLink from "@/components/StyledLink";
import { MobileLayout, TabletLayout, DesktopLayout } from "@/components/VideoLayout";
import { portfolioContent } from "@/content/portfolio";
import { LayoutProp } from "@/types/videography";

interface VideosData {
    oneCol: LayoutProp;
    twoCols: LayoutProp;
    threeCols: LayoutProp;
}

export default function VideographyPortfolioPageClient({ lang, data }: { lang: string, data: VideosData }) {
    const { oneCol, twoCols, threeCols } = data;
    const content = portfolioContent[lang];

    return (
        <>
            <main className="mx-auto max-w-7xl p-4 bg-white space-y-8">
                <section>
                    <MobileLayout {...oneCol} />
                    <TabletLayout {...twoCols} />
                    <DesktopLayout {...threeCols} />
                </section>

            </main>
            <ScrollToTop />
            <StyledLink 
                href={`/${lang}/services/videography`} 
                text={content.bookSession} 
            />
        </>
    );
} 