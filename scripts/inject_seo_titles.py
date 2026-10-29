import os

# 1. DynamicPageViewer.tsx
dp_path = r"C:\Users\Sagar R\Downloads\Lumora_website\src\components\DynamicPage\DynamicPageViewer.tsx"
with open(dp_path, "r", encoding="utf-8") as f:
    dp = f.read()

target = """  // Reset scroll position to top when navigating between dynamic pages
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [page.slug]);

  // Variable replacer function for city/country placeholders
  const replacePlaceholders = (text: string) => {"""

replacement = """  // Variable replacer function for city/country placeholders
  const replacePlaceholders = (text: string) => {
    let result = text || '';
    if (page.cityName) {
      result = result.replace(/{city}/gi, page.cityName);
    } else {
      result = result.replace(/{city}/gi, 'Your Region');
    }

    if (page.countryName) {
      result = result.replace(/{country}/gi, page.countryName);
    } else {
      result = result.replace(/{country}/gi, 'Global');
    }
    return result;
  };

  // Reset scroll position to top and update dynamic SEO metadata
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    const rawTitle = page.seo?.metaTitle || page.title || 'Digital Marketing Service';
    const formattedTitle = replacePlaceholders(rawTitle);
    document.title = `${formattedTitle} | Lumora Strategic Digital Marketing`;

    const rawDesc = page.seo?.metaDescription || page.overviewContent || "Lumora's strategic digital marketing and branding solutions designed to build authority, drive demand, and accelerate business growth.";
    const formattedDesc = replacePlaceholders(rawDesc);

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', formattedDesc);
  }, [page.slug, page.title, page.seo]);

  const _unusedPlaceholder = () => {"""

dp_norm = dp.replace("\r\n", "\n")
target_norm = target.replace("\r\n", "\n")
replacement_norm = replacement.replace("\r\n", "\n")

if target_norm in dp_norm:
    dp_norm = dp_norm.replace(target_norm, replacement_norm, 1)
    with open(dp_path, "w", encoding="utf-8") as f:
        f.write(dp_norm.replace("\n", "\r\n"))
    print("Updated DynamicPageViewer.tsx")
else:
    print("Target not found in DynamicPageViewer.tsx")

# 2. ServiceDetailPage.tsx
sd_path = r"C:\Users\Sagar R\Downloads\Lumora_website\src\components\Pages\ServiceDetailPage.tsx"
with open(sd_path, "r", encoding="utf-8") as f:
    sd = f.read()

sd_target = """    if (found) {
      setService(found);
    }
  }, [slug, siteContent.services]);"""

sd_replacement = """    if (found) {
      setService(found);
      document.title = `${found.title} | Lumora Solutions`;
      let metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc && found.shortDescription) {
        metaDesc.setAttribute('content', found.shortDescription);
      }
    }
  }, [slug, siteContent.services]);"""

sd_norm = sd.replace("\r\n", "\n")
sd_target_norm = sd_target.replace("\r\n", "\n")
sd_rep_norm = sd_replacement.replace("\r\n", "\n")

if sd_target_norm in sd_norm:
    sd_norm = sd_norm.replace(sd_target_norm, sd_rep_norm, 1)
    with open(sd_path, "w", encoding="utf-8") as f:
        f.write(sd_norm.replace("\n", "\r\n"))
    print("Updated ServiceDetailPage.tsx")
else:
    print("Target not found in ServiceDetailPage.tsx")

# 3. AboutPage.tsx
ab_path = r"C:\Users\Sagar R\Downloads\Lumora_website\src\components\Pages\AboutPage.tsx"
with open(ab_path, "r", encoding="utf-8") as f:
    ab = f.read()

ab_norm = ab.replace("\r\n", "\n")
if "About Lumora |" not in ab_norm:
    ab_insert = """  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'About Lumora | Next-Gen AI & Digital Marketing Agency';
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Learn about Lumora, a global performance marketing and AI agency driving SaaS growth, international SEO, and B2B demand generation.');
    }
  }, []);
"""
    ab_norm = ab_norm.replace("const [showAllPillars, setShowAllPillars] = useState(false);", "const [showAllPillars, setShowAllPillars] = useState(false);\n" + ab_insert, 1)
    with open(ab_path, "w", encoding="utf-8") as f:
        f.write(ab_norm.replace("\n", "\r\n"))
    print("Updated AboutPage.tsx")

# 4. PortfolioPage.tsx
pf_path = r"C:\Users\Sagar R\Downloads\Lumora_website\src\components\Pages\PortfolioPage.tsx"
with open(pf_path, "r", encoding="utf-8") as f:
    pf = f.read()

pf_norm = pf.replace("\r\n", "\n")
if "Client Portfolio" not in pf_norm:
    pf_insert = """  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Client Portfolio & Proven Case Studies | Lumora';
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Explore verified client case studies and performance benchmarks achieved by Lumora across Healthcare, SaaS, Real Estate, E-commerce, and Manufacturing.');
    }
  }, []);
"""
    pf_norm = pf_norm.replace("const [showAll, setShowAll] = useState(false);", "const [showAll, setShowAll] = useState(false);\n" + pf_insert, 1)
    with open(pf_path, "w", encoding="utf-8") as f:
        f.write(pf_norm.replace("\n", "\r\n"))
    print("Updated PortfolioPage.tsx")

