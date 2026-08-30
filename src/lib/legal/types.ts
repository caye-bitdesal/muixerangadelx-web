export type LegalSection = {
  title: string;
  paragraphs: string[];
};

export type LegalPageContent = {
  title: string;
  lastUpdatedLabel: string;
  lastUpdated: string;
  sections: LegalSection[];
};

export type LegalPageData = Omit<LegalPageContent, 'lastUpdatedLabel'>;

export type LegalPageId = 'legal' | 'privacy' | 'cookies';
