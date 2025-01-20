import { getHomeSchema, getContactSchema, getAboutSchema, getPhotographyServicesSchema, getVideographyServicesSchema, getWeddingServicesSchema } from './schema';

describe('Schema Tests', () => {
  const lang = 'en';

  it('should generate correct home schema', () => {
    const homeSchema = getHomeSchema(lang);
    expect(homeSchema).toHaveProperty('@context', 'https://schema.org');
    expect(homeSchema).toHaveProperty('inLanguage', lang);
    expect(homeSchema).toHaveProperty('@type', 'WebPage');
    expect(homeSchema).toHaveProperty('name', expect.any(String));
    expect(homeSchema).toHaveProperty('description', expect.any(String));
    expect(homeSchema).toHaveProperty('url', expect.stringContaining(`/${lang}`));
  });

  it('should generate correct contact schema', () => {
    const contactSchema = getContactSchema(lang);
    expect(contactSchema).toHaveProperty('@context', 'https://schema.org');
    expect(contactSchema).toHaveProperty('inLanguage', lang);
    expect(contactSchema).toHaveProperty('@type', 'ContactPage');
    expect(contactSchema).toHaveProperty('name', expect.any(String));
    expect(contactSchema).toHaveProperty('description', expect.any(String));
    expect(contactSchema).toHaveProperty('url', expect.stringContaining(`/${lang}/contact`));
  });

  it('should generate correct about schema', () => {
    const aboutSchema = getAboutSchema(lang);
    expect(aboutSchema).toHaveProperty('@context', 'https://schema.org');
    expect(aboutSchema).toHaveProperty('inLanguage', lang);
    expect(aboutSchema).toHaveProperty('@type', 'AboutPage');
    expect(aboutSchema).toHaveProperty('name', expect.any(String));
    expect(aboutSchema).toHaveProperty('description', expect.any(String));
    expect(aboutSchema).toHaveProperty('url', expect.stringContaining(`/${lang}/about`));
  });

  it('should generate correct photography services schema', () => {
    const photographyServicesSchema = getPhotographyServicesSchema(lang);
    expect(photographyServicesSchema).toHaveProperty('@context', 'https://schema.org');
    expect(photographyServicesSchema).toHaveProperty('inLanguage', lang);
    expect(photographyServicesSchema).toHaveProperty('@type', 'WebPage');
    expect(photographyServicesSchema).toHaveProperty('name', expect.any(String));
    expect(photographyServicesSchema).toHaveProperty('description', expect.any(String));
    expect(photographyServicesSchema).toHaveProperty('url', expect.stringContaining(`/${lang}/services/photography`));
  });

  it('should generate correct videography services schema', () => {
    const videographyServicesSchema = getVideographyServicesSchema(lang);
    expect(videographyServicesSchema).toHaveProperty('@context', 'https://schema.org');
    expect(videographyServicesSchema).toHaveProperty('inLanguage', lang);
    expect(videographyServicesSchema).toHaveProperty('@type', 'WebPage');
    expect(videographyServicesSchema).toHaveProperty('name', expect.any(String));
    expect(videographyServicesSchema).toHaveProperty('description', expect.any(String));
    expect(videographyServicesSchema).toHaveProperty('url', expect.stringContaining(`/${lang}/services/videography`));
  });

  it('should generate correct wedding services schema', () => {
    const weddingServicesSchema = getWeddingServicesSchema(lang);
    expect(weddingServicesSchema).toHaveProperty('@context', 'https://schema.org');
    expect(weddingServicesSchema).toHaveProperty('inLanguage', lang);
    expect(weddingServicesSchema).toHaveProperty('@type', 'WebPage');
    expect(weddingServicesSchema).toHaveProperty('name', expect.any(String));
    expect(weddingServicesSchema).toHaveProperty('description', expect.any(String));
    expect(weddingServicesSchema).toHaveProperty('url', expect.stringContaining(`/${lang}/services/wedding`));
  });
}); 