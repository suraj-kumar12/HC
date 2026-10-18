import { useEffect } from 'react';

const SITE_URL = 'https://healingcircle.travel';
const DEFAULT_TITLE = 'Healing Circle – Shangarh Girls Trip | Mindful Himalayan Retreat';
const DEFAULT_DESC = 'An intimate, transformative girls-only travel & wellness retreat to Shangarh, Sainj Valley, Himachal Pradesh. Alpine meadows, sunrise yoga, waterfall treks, and deep.';
const DEFAULT_IMAGE = `${SITE_URL}/images/real-temple-meadow.jpg`;

export default function SEO({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESC,
  canonical = '',
  image = DEFAULT_IMAGE,
  type = 'website',
  noindex = false,
  structuredData = null
}) {
  useEffect(() => {
    // 1. Document Title
    document.title = title;

    // Helper to update or create <meta> tag
    const setMetaTag = (attribute, attributeValue, content) => {
      let element = document.querySelector(`meta[${attribute}="${attributeValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, attributeValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Helper to update or create <link> tag
    const setLinkTag = (rel, href) => {
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    // 2. Primary Meta Description
    setMetaTag('name', 'description', description);

    // 3. Canonical URL
    const canonicalUrl = canonical.startsWith('http')
      ? canonical
      : `${SITE_URL}${canonical.startsWith('/') ? canonical : `/${canonical}`}`;
    setLinkTag('canonical', canonicalUrl);

    // Absolute Image URL
    const imageUrl = image.startsWith('http')
      ? image
      : `${SITE_URL}${image.startsWith('/') ? image : `/${image}`}`;

    // 4. Open Graph Tags
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:image', imageUrl);
    setMetaTag('property', 'og:type', type);
    setMetaTag('property', 'og:site_name', 'Healing Circle');

    // 5. Twitter Card Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', imageUrl);

    // 6. Robots directive
    if (noindex) {
      setMetaTag('name', 'robots', 'noindex, nofollow');
    } else {
      setMetaTag('name', 'robots', 'index, follow');
    }

    // 7. Optional Page-Specific Structured Data
    let scriptTag = null;
    if (structuredData) {
      scriptTag = document.createElement('script');
      scriptTag.type = 'application/ld+json';
      scriptTag.id = 'page-structured-data';
      scriptTag.textContent = JSON.stringify(structuredData);
      document.head.appendChild(scriptTag);
    }

    return () => {
      if (scriptTag && scriptTag.parentNode) {
        scriptTag.parentNode.removeChild(scriptTag);
      }
    };
  }, [title, description, canonical, image, type, noindex, structuredData]);

  return null;
}
