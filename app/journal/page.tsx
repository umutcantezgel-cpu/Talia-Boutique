"use client";

import * as React from "react";
import { JournalCard } from "@/components/ui/journal-card";
import { useLanguage } from '@/contexts/language-context';
import { getTranslations } from '@/lib/i18n/translations';
import { JOURNAL_DATA } from "@/lib/i18n/journal-data";
import * as motion from "motion/react-client";
import { ClientSkeletonWrapper } from "@/components/ui/client-skeleton-wrapper";

export default function JournalPage() {
  const { language } = useLanguage();
  const t = getTranslations(language).journal;
  const articles = JOURNAL_DATA[language];

  return (
    <main className="pt-[140px] pb-section-padding px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto flex-grow">
      <div className="text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-headline-lg text-5xl md:text-7xl lg:text-[100px] mb-8 font-serif leading-none"
        >
          {t.title}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-body-md text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto"
        >
          {t.subtitle}
        </motion.p>
      </div>

      <ClientSkeletonWrapper count={4} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {articles.map((article, idx) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: "easeOut" }}
            >
              <JournalCard
                href={`/journal/${article.id}`}
                category={article.category}
                title={article.title}
                excerpt={article.excerpt}
                imageUrl={article.imageUrl}
                imageAlt={article.imageAlt}
                videoUrl={article.videoUrl}
              />
            </motion.div>
          ))}
        </div>
      </ClientSkeletonWrapper>
    </main>
  );
}
