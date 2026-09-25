import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAllBlogs, getBlogBySlug, getAllProperties } from '@/data/store';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const blogs = getAllBlogs();
  return blogs.map((b) => ({
    slug: b.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return {
      title: 'Article Not Found | Realic Property Consultant',
    };
  }

  return {
    title: blog.metaTitle || `${blog.title} | Realic Property Consultant`,
    description: blog.metaDescription || blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      url: `https://realicproperty.com/blogs/${blog.slug}`,
      type: 'article',
      publishedTime: blog.publishedAt,
      authors: [blog.author.name],
      images: [
        {
          url: blog.coverImage,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.excerpt,
      images: [blog.coverImage],
    },
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const allBlogs = getAllBlogs();
  const relatedBlogs = allBlogs
    .filter((b) => b.id !== blog.id)
    .slice(0, 3);

  // Schema.org BlogPosting
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: blog.title,
    description: blog.excerpt,
    image: blog.coverImage,
    datePublished: blog.publishedAt,
    author: {
      '@type': 'Person',
      name: blog.author.name,
      jobTitle: blog.author.role,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Realic Property Consultant',
      logo: {
        '@type': 'ImageObject',
        url: 'https://realicproperty.com/images/realic-logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://realicproperty.com/blogs/${blog.slug}`,
    },
  };

  const allProperties = getAllProperties();
  const interlinkedProperties = allProperties.filter((p) =>
    blog.relatedPropertyIds?.includes(p.id)
  );

  const isHtmlContent = /<[a-z][\s\S]*>/i.test(blog.content);

  // Convert markdown-style content to styled blocks if not HTML
  const contentParagraphs = isHtmlContent
    ? []
    : blog.content
        .split('\n\n')
        .map((chunk) => chunk.trim())
        .filter((chunk) => chunk.length > 0);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-white text-neutral-900 selection:bg-neutral-200 selection:text-neutral-900">
        {/* Navigation Breadcrumb */}
        <div className="py-4 border-b border-neutral-200 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <nav className="flex items-center gap-2 text-xs text-neutral-500">
              <Link href="/" className="hover:text-neutral-900 transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/blogs" className="hover:text-neutral-900 transition-colors">
                Research & Intelligence
              </Link>
              <span>/</span>
              <span className="text-neutral-900 font-semibold line-clamp-1">{blog.category}</span>
            </nav>
          </div>
        </div>

        {/* Article Header */}
        <header className="pt-12 pb-8 max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-5">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-neutral-100 text-neutral-900 border border-neutral-200">
              {blog.category}
            </span>
            <span className="text-xs text-neutral-500 font-medium">{blog.readTime}</span>
            <span className="text-neutral-300">•</span>
            <span className="text-xs text-neutral-500 font-medium">{blog.publishedAt}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-montserrat text-neutral-950 tracking-tight leading-[1.2]">
            {blog.title}
          </h1>

          <p className="mt-5 text-lg sm:text-xl text-neutral-600 leading-relaxed font-normal border-l-4 border-neutral-900 pl-4 italic">
            {blog.excerpt}
          </p>

          {/* Author Badge */}
          <div className="mt-8 pt-6 border-t border-neutral-200 flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3.5">
              <img
                src={blog.author.avatar}
                alt={blog.author.name}
                className="w-12 h-12 rounded-full object-cover border border-neutral-200 shadow-sm"
              />
              <div>
                <p className="text-sm font-bold text-neutral-900">{blog.author.name}</p>
                <p className="text-xs text-neutral-500">{blog.author.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-neutral-500">
              <span className="font-semibold">Verified Publication</span>
              <span className="material-symbols-outlined text-neutral-900 text-[18px]">verified</span>
            </div>
          </div>
        </header>

        {/* Hero Cover Image */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-12">
          <div className="relative h-[320px] sm:h-[460px] rounded-3xl overflow-hidden border border-neutral-200 shadow-sm bg-neutral-100">
            <img
              src={blog.coverImage}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Article Body Content */}
        <main className="max-w-4xl mx-auto px-4 sm:px-6 pb-20">
          {isHtmlContent ? (
            <article
              className="prose prose-neutral max-w-none text-neutral-800 leading-relaxed text-base sm:text-lg space-y-5 prose-headings:font-outfit prose-headings:font-bold prose-headings:text-neutral-950 prose-a:text-neutral-900 hover:prose-a:underline prose-blockquote:border-l-4 prose-blockquote:border-neutral-900 prose-blockquote:bg-neutral-50 prose-blockquote:p-6 prose-blockquote:rounded-2xl prose-img:rounded-2xl prose-img:shadow-md"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          ) : (
            <article className="space-y-6 text-neutral-800 leading-relaxed text-base sm:text-lg">
              {contentParagraphs.map((paragraph, idx) => {
                // H3 Heading
                if (paragraph.startsWith('### ')) {
                  return (
                    <h3
                      key={idx}
                      className="text-2xl sm:text-3xl font-bold font-outfit text-neutral-950 pt-6 pb-2 border-b border-neutral-200"
                    >
                      {paragraph.replace('### ', '')}
                    </h3>
                  );
                }
                // H2 Heading
                if (paragraph.startsWith('## ')) {
                  return (
                    <h2
                      key={idx}
                      className="text-2xl sm:text-3xl font-bold font-outfit text-neutral-950 pt-8 pb-3 border-b border-neutral-200"
                    >
                      {paragraph.replace('## ', '')}
                    </h2>
                  );
                }
                // Blockquote
                if (paragraph.startsWith('> ')) {
                  return (
                    <blockquote
                      key={idx}
                      className="my-6 p-6 rounded-2xl bg-neutral-50 border-l-4 border-neutral-900 text-neutral-800 text-base italic font-serif leading-relaxed shadow-xs"
                    >
                      {paragraph.replace(/^>\s*/gm, '')}
                    </blockquote>
                  );
                }
                // Unordered List
                if (paragraph.startsWith('- ') || paragraph.startsWith('* ')) {
                  const listItems = paragraph
                    .split('\n')
                    .map((l) => l.replace(/^[-*]\s*/, '').trim())
                    .filter((l) => l.length > 0);
                  return (
                    <ul key={idx} className="space-y-2.5 my-4 pl-4">
                      {listItems.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-3 text-neutral-700">
                          <span className="w-2 h-2 rounded-full bg-neutral-900 mt-2.5 flex-shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  );
                }
                // Default Paragraph
                return (
                  <p key={idx} className="text-neutral-700 leading-relaxed font-normal">
                    {paragraph}
                  </p>
                );
              })}
            </article>
          )}

          {/* Interlinked Featured Properties in this Corridor */}
          {interlinkedProperties.length > 0 && (
            <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-neutral-50 border border-neutral-200">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                    Recommended Corridors
                  </span>
                  <h3 className="text-lg font-bold font-outfit text-neutral-950">
                    Featured Properties In This Area
                  </h3>
                </div>
                <Link
                  href="/properties"
                  className="text-xs font-bold text-neutral-900 hover:underline flex items-center gap-1"
                >
                  <span>All listings</span>
                  <span className="material-symbols-outlined text-xs">arrow_forward</span>
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {interlinkedProperties.map((prop) => (
                  <Link
                    key={prop.id}
                    href={`/properties/${prop.slug}`}
                    className="p-3.5 rounded-2xl bg-white border border-neutral-200 hover:border-neutral-400 hover:shadow-md transition-all flex items-center gap-3.5 group"
                  >
                    <img
                      src={prop.images[0]}
                      alt={prop.title}
                      className="w-16 h-16 rounded-xl object-cover flex-shrink-0"
                    />
                    <div className="min-w-0">
                      <h4 className="text-xs font-bold text-neutral-900 group-hover:text-neutral-600 line-clamp-1 font-outfit">
                        {prop.title}
                      </h4>
                      <p className="text-[11px] text-neutral-500 line-clamp-1">{prop.location}</p>
                      <span className="text-xs font-extrabold text-neutral-900 font-outfit block mt-0.5">
                        {prop.priceDisplay}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Tags */}
          <div className="pt-8 mt-12 border-t border-neutral-200 flex flex-wrap items-center gap-2">
            <span className="text-xs text-neutral-500 font-semibold mr-2">Filed under:</span>
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-lg bg-neutral-100 border border-neutral-200 text-xs text-neutral-700 font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Author Card */}
          <div className="mt-12 p-8 rounded-3xl bg-neutral-50 border border-neutral-200 flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <img
              src={blog.author.avatar}
              alt={blog.author.name}
              className="w-20 h-20 rounded-2xl object-cover border border-neutral-200 shadow-sm"
            />
            <div className="text-center sm:text-left flex-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                About the Author
              </span>
              <h4 className="text-lg font-bold font-montserrat text-neutral-900 mt-1">
                {blog.author.name}
              </h4>
              <p className="text-xs text-neutral-500 mt-0.5">{blog.author.role}</p>
              <p className="text-xs text-neutral-600 mt-3 leading-relaxed">
                Specializing in institutional property investments, RERA compliance audits, and high-value sky penthouses across Bihar and Karnataka.
              </p>
              <div className="mt-4 flex items-center justify-center sm:justify-start gap-3">
                <Link
                  href="/contact"
                  className="px-4 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-bold transition-all shadow-xs"
                >
                  Schedule Advisory Session
                </Link>
              </div>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="mt-12 p-8 sm:p-10 rounded-3xl bg-neutral-50 text-neutral-900 border border-neutral-200 shadow-sm relative overflow-hidden">
            <div className="relative z-10 max-w-xl">
              <span className="px-3 py-1 rounded-full bg-white text-neutral-900 text-xs font-bold uppercase tracking-wider border border-neutral-200 shadow-xs">
                Institutional Advisory
              </span>
              <h3 className="text-2xl font-bold font-montserrat text-neutral-900 mt-4">
                Conduct a RERA Due Diligence or Portfolio Appraisal
              </h3>
              <p className="mt-2 text-sm text-neutral-600">
                Are you looking to acquire luxury inventory in Patna or Bangalore? Our legal counsel and senior acquisition team will verify 30-year title deeds and ensure RERA compliance.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  href="/properties"
                  className="px-5 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-wider shadow-xs transition-all"
                >
                  Explore Verified Estates
                </Link>
                <Link
                  href="/contact"
                  className="px-5 py-2.5 rounded-xl border border-neutral-300 hover:bg-neutral-100 text-neutral-800 text-xs font-semibold transition-all shadow-xs"
                >
                  Request Private Showing
                </Link>
              </div>
            </div>
          </div>
        </main>

        {/* Related Articles */}
        {relatedBlogs.length > 0 && (
          <section className="py-16 border-t border-neutral-200 bg-neutral-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between mb-10">
                <div>
                  <h3 className="text-2xl font-bold font-montserrat text-neutral-900">
                    Related Market Intelligence
                  </h3>
                  <p className="text-xs text-neutral-500 mt-1">
                    Continue reading curated analysis from Realic research partners.
                  </p>
                </div>
                <Link
                  href="/blogs"
                  className="text-xs font-bold text-neutral-900 hover:underline flex items-center gap-1"
                >
                  <span>View All Journal Entries</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedBlogs.map((item) => (
                  <Link
                    key={item.id}
                    href={`/blogs/${item.slug}`}
                    className="group rounded-2xl overflow-hidden bg-white border border-neutral-200 hover:border-neutral-400 hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 p-5 flex flex-col justify-between"
                  >
                    <div>
                      <div className="h-44 rounded-xl overflow-hidden mb-4 bg-neutral-100">
                        <img
                          src={item.coverImage}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                        {item.category}
                      </span>
                      <h4 className="text-base font-bold font-montserrat text-neutral-900 group-hover:text-neutral-600 transition-colors mt-1.5 line-clamp-2">
                        {item.title}
                      </h4>
                      <p className="text-xs text-neutral-600 mt-2 line-clamp-2">
                        {item.excerpt}
                      </p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-500 font-medium">
                      <span>{item.publishedAt}</span>
                      <span>{item.readTime}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
}
