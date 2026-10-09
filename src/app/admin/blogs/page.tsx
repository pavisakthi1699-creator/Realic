'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { BlogArticle } from '@/data/blogs';
import { Property } from '@/data/properties';
import { toast } from 'sonner';

export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState<BlogArticle[]>([]);
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Page View Mode: 'list' | 'editor'
  const [viewMode, setViewMode] = useState<'list' | 'editor'>('list');
  const [editingBlogId, setEditingBlogId] = useState<string | null>(null);
  const [contentTab, setContentTab] = useState<'write' | 'preview'>('write');
  const [isSaving, setIsSaving] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Form State
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    category: 'Market Trends' as BlogArticle['category'],
    coverImage: '/images/projects/venus-capital-heights/palatial-tower-facade-elevation.jpg',
    excerpt: '',
    authorName: 'Amit Vikram',
    authorRole: 'Managing Director, Bihar & Eastern Corridor',
    authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    publishedAt: new Date().toISOString().split('T')[0],
    readTime: '5 min read',
    tags: 'Real Estate, Investment, Patna',
    featured: false,
    metaTitle: '',
    metaDescription: '',
    keywords: 'Patna Real Estate, Luxury Homes, Legal Title',
    canonicalUrl: '',
    relatedPropertyIds: [] as string[],
    content: '',
  });

  // Fetch blogs & properties
  async function loadInitialData() {
    try {
      setLoading(true);
      const [blogsRes, propsRes] = await Promise.all([
        fetch('/api/blogs').then((r) => r.json()),
        fetch('/api/properties').then((r) => r.json()),
      ]);

      if (blogsRes.success) setBlogs(blogsRes.data);
      if (propsRes.success) setProperties(propsRes.data);
    } catch (err) {
      console.error('Failed to load initial data', err);
      toast.error('Failed to load blog articles');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadInitialData();
  }, []);

  // Filter blogs
  const filteredBlogs = blogs.filter((b) => {
    const matchesSearch =
      b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.author.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || b.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Open Create Page
  function handleOpenCreate() {
    setEditingBlogId(null);
    setFormData({
      title: '',
      slug: '',
      category: 'Market Trends',
      coverImage: '/images/projects/venus-capital-heights/palatial-tower-facade-elevation.jpg',
      excerpt: '',
      authorName: 'Amit Vikram',
      authorRole: 'Managing Director, Bihar & Eastern Corridor',
      authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      publishedAt: new Date().toISOString().split('T')[0],
      readTime: '5 min read',
      tags: 'Real Estate, Investment, Patna',
      featured: false,
      metaTitle: '',
      metaDescription: '',
      keywords: 'Patna Real Estate, Luxury Living, RERA Verified',
      canonicalUrl: '',
      relatedPropertyIds: [],
      content: `<h2>Executive Summary</h2>
<p>Paste or write your article content here. You can copy and paste formatted rich text or HTML directly from any editor.</p>

<h2>Key Market Takeaways</h2>
<ul>
  <li>Infrastructure expansion driving capital appreciation.</li>
  <li>100% legal title diligence guaranteed for institutional investments.</li>
  <li>RERA compliance standards protect buyers across all corridors.</li>
</ul>

<blockquote>"Investing in prime corridors demands fiduciary diligence and forensic legal analysis."</blockquote>`,
    });
    setContentTab('write');
    setViewMode('editor');
  }

  // Open Edit Page
  function handleOpenEdit(b: BlogArticle) {
    setEditingBlogId(b.id);
    setFormData({
      title: b.title,
      slug: b.slug,
      category: b.category,
      coverImage: b.coverImage,
      excerpt: b.excerpt,
      authorName: b.author.name,
      authorRole: b.author.role,
      authorAvatar: b.author.avatar,
      publishedAt: b.publishedAt ? formatForDateInput(b.publishedAt) : new Date().toISOString().split('T')[0],
      readTime: b.readTime,
      tags: b.tags.join(', '),
      featured: b.featured,
      metaTitle: b.metaTitle || '',
      metaDescription: b.metaDescription || '',
      keywords: b.keywords ? b.keywords.join(', ') : b.tags.join(', '),
      canonicalUrl: b.canonicalUrl || '',
      relatedPropertyIds: b.relatedPropertyIds || [],
      content: b.content,
    });
    setContentTab('write');
    setViewMode('editor');
  }

  function formatForDateInput(dateStr: string) {
    try {
      const parsed = new Date(dateStr);
      if (!isNaN(parsed.getTime())) {
        return parsed.toISOString().split('T')[0];
      }
    } catch (_) {}
    return new Date().toISOString().split('T')[0];
  }

  // Handle direct image file upload
  function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      toast.error('Please select a valid image file');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      toast.error('Image size should be under 5MB');
      return;
    }

    const reader = new FileReader();
    reader.onload = (loadEvent) => {
      const base64Url = loadEvent.target?.result as string;
      if (base64Url) {
        setFormData((prev) => ({ ...prev, coverImage: base64Url }));
        toast.success('Cover image uploaded successfully!');
      }
    };
    reader.readAsDataURL(file);
  }

  // Auto-slug generator on title blur
  function handleTitleBlur() {
    if (!formData.slug && formData.title) {
      const generatedSlug = formData.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)+/g, '');
      setFormData((prev) => ({
        ...prev,
        slug: generatedSlug,
        metaTitle: prev.metaTitle || `${formData.title} | Realic Property Consultant`,
      }));
    }
  }

  // Quick insertion helpers for HTML/rich content
  function insertHtmlSnippet(snippet: string) {
    setFormData((prev) => ({
      ...prev,
      content: prev.content + '\n' + snippet,
    }));
    toast.info('Snippet inserted into article content');
  }

  // Toggle related property interlinking
  function toggleRelatedProperty(propId: string) {
    setFormData((prev) => {
      const exists = prev.relatedPropertyIds.includes(propId);
      const updated = exists
        ? prev.relatedPropertyIds.filter((id) => id !== propId)
        : [...prev.relatedPropertyIds, propId];
      return { ...prev, relatedPropertyIds: updated };
    });
  }

  // Handle Form Submit
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!formData.title.trim()) {
      toast.error('Please provide an article title');
      return;
    }

    if (!formData.content.trim()) {
      toast.error('Please enter article content');
      return;
    }

    setIsSaving(true);

    const tagArray = formData.tags
      .split(',')
      .map((t) => t.trim())
      .filter((t) => t.length > 0);

    const keywordArray = formData.keywords
      .split(',')
      .map((k) => k.trim())
      .filter((k) => k.length > 0);

    // Format display date
    const displayDate = new Date(formData.publishedAt).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });

    const payload = {
      title: formData.title,
      slug: formData.slug || formData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      category: formData.category,
      coverImage: formData.coverImage,
      excerpt: formData.excerpt || formData.title,
      content: formData.content,
      readTime: formData.readTime || '5 min read',
      publishedAt: displayDate,
      featured: formData.featured,
      tags: tagArray,
      keywords: keywordArray,
      canonicalUrl: formData.canonicalUrl,
      relatedPropertyIds: formData.relatedPropertyIds,
      author: {
        name: formData.authorName,
        role: formData.authorRole,
        avatar: formData.authorAvatar,
      },
      metaTitle: formData.metaTitle || `${formData.title} | Realic Property Consultant`,
      metaDescription: formData.metaDescription || formData.excerpt,
    };

    try {
      if (editingBlogId) {
        // UPDATE
        const res = await fetch(`/api/blogs/${editingBlogId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        const result = await res.json();
        if (result.success) {
          toast.success('Article updated successfully!');
          setViewMode('list');
          loadInitialData();
        } else {
          toast.error(result.message || 'Failed to update article');
        }
      } else {
        // CREATE
        const res = await fetch('/api/blogs', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        const result = await res.json();
        if (result.success) {
          toast.success('Article published successfully!');
          setViewMode('list');
          loadInitialData();
        } else {
          toast.error(result.message || 'Failed to publish article');
        }
      }
    } catch (err) {
      console.error(err);
      toast.error('Network error while saving article');
    } finally {
      setIsSaving(false);
    }
  }

  // Delete Article
  async function handleDelete(id: string, title: string) {
    if (!confirm(`Are you sure you want to permanently delete "${title}"? This cannot be undone.`)) {
      return;
    }

    try {
      const res = await fetch(`/api/blogs/${id}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (data.success) {
        toast.success('Article deleted permanently');
        loadInitialData();
      } else {
        toast.error(data.message || 'Failed to delete article');
      }
    } catch (err) {
      toast.error('Network error deleting article');
    }
  }

  // ==========================================
  // RENDER: FULL-PAGE ARTICLE EDITOR STUDIO
  // ==========================================
  if (viewMode === 'editor') {
    return (
      <div className="space-y-6 max-w-7xl mx-auto pb-20">
        {/* Top Sticky Navigation / Actions Bar */}
        <div className="bg-white p-4 sm:p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4 sticky top-16 z-20">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => {
                if (confirm('Discard changes and return to articles list?')) {
                  setViewMode('list');
                }
              }}
              className="p-2.5 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-700 transition-colors flex items-center gap-1.5 text-xs font-bold"
            >
              <span className="material-symbols-outlined text-base">arrow_back</span>
              <span>Back to Articles</span>
            </button>
            <div className="h-6 w-px bg-slate-200 hidden sm:block"></div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#9E7A0C] block">
                {editingBlogId ? 'Editorial Editor • Active Article' : 'Editorial Studio • New Article'}
              </span>
              <h2 className="text-base sm:text-lg font-bold font-outfit text-slate-900 line-clamp-1">
                {formData.title || 'Untitled Article'}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {editingBlogId && (
              <Link
                href={`/blogs/${formData.slug}`}
                target="_blank"
                className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors flex items-center gap-1.5"
              >
                <span className="material-symbols-outlined text-base">visibility</span>
                <span>View Live</span>
              </Link>
            )}

            <button
              type="button"
              onClick={() => setViewMode('list')}
              className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:text-slate-900 text-xs font-bold hover:bg-slate-50 transition-colors"
            >
              Cancel
            </button>

            <button
              type="button"
              onClick={handleSubmit}
              disabled={isSaving}
              className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs tracking-wider uppercase shadow-xs transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {isSaving ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Saving...</span>
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-base">publish</span>
                  <span>{editingBlogId ? 'Update & Publish' : 'Publish Article'}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* 2-Column Studio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Content Studio (Left 7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Primary Details Card */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#9E7A0C] flex items-center gap-2">
                <span className="material-symbols-outlined text-base">edit_note</span>
                <span>Article Fundamentals</span>
              </h3>

              {/* Title */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                  Article Title *
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  onBlur={handleTitleBlur}
                  placeholder="e.g. Patna Real Estate Boom: The Bailey Road & Danapur Corridor Transformation"
                  className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 font-bold text-base sm:text-lg focus:bg-white focus:border-[#D4AF37] outline-none font-outfit"
                />
              </div>

              {/* Category & Read Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                    Category *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) =>
                      setFormData({ ...formData, category: e.target.value as BlogArticle['category'] })
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs font-bold focus:bg-white focus:border-[#D4AF37] outline-none"
                  >
                    <option value="Market Trends">Market Trends</option>
                    <option value="Legal & RERA">Legal & RERA</option>
                    <option value="Patna Corridors">Patna Corridors</option>
                    <option value="Luxury Living">Luxury Living</option>
                    <option value="NRI Advisory">NRI Advisory</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                    Estimated Read Time
                  </label>
                  <input
                    type="text"
                    value={formData.readTime}
                    onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                    placeholder="e.g. 5 min read"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs font-medium focus:bg-white focus:border-[#D4AF37] outline-none"
                  />
                </div>
              </div>

              {/* Excerpt / Lead Paragraph */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                  Executive Excerpt / Short Summary *
                </label>
                <textarea
                  rows={2}
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  placeholder="A concise 1-2 sentence lead summarizing the core insight for card previews and search engines..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs font-normal focus:bg-white focus:border-[#D4AF37] outline-none leading-relaxed"
                />
              </div>
            </div>

            {/* Content & HTML Studio Card */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#9E7A0C] flex items-center gap-2">
                    <span className="material-symbols-outlined text-base">code</span>
                    <span>Article Content & HTML Studio</span>
                  </h3>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    No coding required: copy and paste formatted rich text or raw HTML directly.
                  </p>
                </div>

                {/* Tab Switcher: Write vs Live Preview */}
                <div className="bg-slate-100 p-1 rounded-xl flex items-center self-start sm:self-auto">
                  <button
                    type="button"
                    onClick={() => setContentTab('write')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                      contentTab === 'write'
                        ? 'bg-white text-slate-900 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <span className="material-symbols-outlined text-sm">edit</span>
                    <span>HTML / Write</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setContentTab('preview')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                      contentTab === 'preview'
                        ? 'bg-white text-slate-900 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <span className="material-symbols-outlined text-sm">preview</span>
                    <span>Live Preview</span>
                  </button>
                </div>
              </div>

              {/* Quick Format Inserters (When in write mode) */}
              {contentTab === 'write' && (
                <div className="flex flex-wrap items-center gap-2 pt-1 pb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mr-1">
                    Quick Insert:
                  </span>
                  <button
                    type="button"
                    onClick={() => insertHtmlSnippet('<h2>Key Market Development</h2>\n<p>Enter details here...</p>')}
                    className="px-2.5 py-1 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-[11px] font-medium"
                  >
                    + H2 Heading
                  </button>
                  <button
                    type="button"
                    onClick={() => insertHtmlSnippet('<h3>Sub-Section Analysis</h3>\n<p>Enter sub-points...</p>')}
                    className="px-2.5 py-1 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-[11px] font-medium"
                  >
                    + H3 Heading
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      insertHtmlSnippet(
                        '<ul>\n  <li>Strategic connectivity to metro corridor</li>\n  <li>Clear RERA title guarantee</li>\n</ul>'
                      )
                    }
                    className="px-2.5 py-1 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-[11px] font-medium"
                  >
                    + Bullet List
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      insertHtmlSnippet(
                        '<blockquote>\n  "Institutional rigor protects high-stakes real estate capital."\n</blockquote>'
                      )
                    }
                    className="px-2.5 py-1 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-[11px] font-medium"
                  >
                    + Quote
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      insertHtmlSnippet(
                        '<p>Learn more about our <a href="/properties?city=Patna" style="color: #0c5db6; font-weight: bold; text-decoration: underline;">Patna Luxury Properties</a> or browse verified listings.</p>'
                      )
                    }
                    className="px-2.5 py-1 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-[11px] font-medium"
                  >
                    + Property Link
                  </button>
                </div>
              )}

              {/* Editor Workspace */}
              {contentTab === 'write' ? (
                <div>
                  <textarea
                    rows={16}
                    required
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    placeholder="Paste your formatted HTML or article text here..."
                    className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 font-mono text-xs focus:bg-white focus:border-[#D4AF37] outline-none leading-relaxed"
                  />
                  <p className="text-[11px] text-slate-500 mt-1.5 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">info</span>
                    <span>Supports standard HTML tags (h2, h3, p, ul, li, blockquote, a, img, b, strong).</span>
                  </p>
                </div>
              ) : (
                /* LIVE ARTICLE RENDERED PREVIEW */
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 min-h-[400px]">
                  <div className="text-[10px] uppercase font-bold tracking-widest text-[#9E7A0C] mb-2">
                    Live Reader Preview Mode
                  </div>
                  <h1 className="text-2xl font-bold font-outfit text-slate-950 mb-3">
                    {formData.title || 'Article Title'}
                  </h1>
                  <p className="text-sm text-slate-600 italic mb-6 border-b border-slate-200 pb-4">
                    {formData.excerpt || 'Article summary preview...'}
                  </p>

                  <div
                    className="prose prose-slate max-w-none text-slate-800 text-sm leading-relaxed space-y-3 prose-headings:font-outfit prose-headings:font-bold prose-headings:text-slate-950 prose-a:text-secondary prose-a:underline"
                    dangerouslySetInnerHTML={{ __html: formData.content }}
                  />
                </div>
              )}
            </div>
          </div>

          {/* Right Sidebar: Media, Author, Interlinking & SEO Suite (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Cover Image & Upload Studio */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#9E7A0C] flex items-center gap-2">
                <span className="material-symbols-outlined text-base">image</span>
                <span>Featured Cover Image</span>
              </h3>

              {/* Live Preview of Image */}
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 group">
                <img
                  src={formData.coverImage}
                  alt="Cover Preview"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as any).src =
                      '/images/projects/venus-capital-heights/palatial-tower-facade-elevation.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="px-3.5 py-1.5 bg-white text-slate-950 text-xs font-bold rounded-xl shadow-md flex items-center gap-1"
                  >
                    <span className="material-symbols-outlined text-sm">upload</span>
                    Change Photo
                  </button>
                </div>
              </div>

              {/* Direct File Upload Trigger */}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-base text-[#B8860B]">upload_file</span>
                  <span>Upload from Computer</span>
                </button>
              </div>

              {/* URL fallback input */}
              <div>
                <label className="block text-[11px] font-semibold text-slate-500 mb-1">
                  Or paste direct image URL:
                </label>
                <input
                  type="url"
                  value={formData.coverImage}
                  onChange={(e) => setFormData({ ...formData, coverImage: e.target.value })}
                  placeholder="https://images.unsplash.com/..."
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs font-mono focus:bg-white focus:border-[#D4AF37] outline-none"
                />
              </div>
            </div>

            {/* Date & Author Profile Card */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#9E7A0C] flex items-center gap-2">
                <span className="material-symbols-outlined text-base">person</span>
                <span>Publication Date & Author</span>
              </h3>

              {/* Published Date */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                  Publication Date *
                </label>
                <input
                  type="date"
                  required
                  value={formData.publishedAt}
                  onChange={(e) => setFormData({ ...formData, publishedAt: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs font-semibold focus:bg-white focus:border-[#D4AF37] outline-none"
                />
              </div>

              {/* Author Details */}
              <div className="space-y-3 pt-2 border-t border-slate-200">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                    Author Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.authorName}
                    onChange={(e) => setFormData({ ...formData, authorName: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs font-medium focus:bg-white focus:border-[#D4AF37] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                    Author Title / Role
                  </label>
                  <input
                    type="text"
                    value={formData.authorRole}
                    onChange={(e) => setFormData({ ...formData, authorRole: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs font-medium focus:bg-white focus:border-[#D4AF37] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                    Author Avatar URL
                  </label>
                  <div className="flex items-center gap-3">
                    <img
                      src={formData.authorAvatar}
                      alt="Avatar"
                      className="w-10 h-10 rounded-full object-cover border border-slate-200 flex-shrink-0"
                    />
                    <input
                      type="url"
                      value={formData.authorAvatar}
                      onChange={(e) => setFormData({ ...formData, authorAvatar: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs font-mono focus:bg-white focus:border-[#D4AF37] outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Internal Interlinking Studio */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#9E7A0C] flex items-center gap-2">
                <span className="material-symbols-outlined text-base">link</span>
                <span>Interlink Active Properties</span>
              </h3>
              <p className="text-[11px] text-slate-500">
                Select listings to recommend inside this article to drive client inquiry conversion:
              </p>

              <div className="max-h-48 overflow-y-auto space-y-2 pr-1 divide-y divide-slate-100">
                {properties.map((prop) => {
                  const isChecked = formData.relatedPropertyIds.includes(prop.id);
                  return (
                    <label
                      key={prop.id}
                      className="flex items-center justify-between p-2 rounded-xl hover:bg-slate-50 cursor-pointer pt-2"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <img
                          src={prop.images[0]}
                          alt={prop.title}
                          className="w-9 h-9 rounded-lg object-cover flex-shrink-0"
                        />
                        <div className="min-w-0">
                          <span className="text-xs font-bold text-slate-900 block truncate">
                            {prop.title}
                          </span>
                          <span className="text-[10px] text-slate-500">
                            {prop.city} • {prop.priceDisplay}
                          </span>
                        </div>
                      </div>
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggleRelatedProperty(prop.id)}
                        className="w-4 h-4 text-[#D4AF37] rounded border-slate-300 focus:ring-[#D4AF37]"
                      />
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Comprehensive SEO Suite */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#9E7A0C] flex items-center gap-2">
                <span className="material-symbols-outlined text-base">travel_explore</span>
                <span>All SEO Metadata & SERP Suite</span>
              </h3>

              {/* Google Search Live Preview Box */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                  Google Desktop Search Preview
                </span>
                <div className="text-xs text-[#202124] flex items-center gap-1.5 truncate">
                  <span className="font-medium text-[#4d5156]">realicproperty.com</span>
                  <span className="text-[#5f6368]">› blogs › {formData.slug || 'slug'}</span>
                </div>
                <div className="text-base text-[#1a0dab] font-medium hover:underline truncate">
                  {formData.metaTitle || formData.title || 'Article Title - Realic Property Consultant'}
                </div>
                <div className="text-xs text-[#4d5156] line-clamp-2 leading-relaxed">
                  {formData.metaDescription ||
                    formData.excerpt ||
                    'Comprehensive institutional advisory and luxury market analysis in Patna.'}
                </div>
              </div>

              {/* Meta Title */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    SEO Meta Title
                  </label>
                  <span className="text-[10px] text-slate-400 font-mono">
                    {formData.metaTitle.length}/60 chars
                  </span>
                </div>
                <input
                  type="text"
                  value={formData.metaTitle}
                  onChange={(e) => setFormData({ ...formData, metaTitle: e.target.value })}
                  placeholder="e.g. Patna Real Estate Market Boom 2026 | Realic Property Consultant"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs font-medium focus:bg-white focus:border-[#D4AF37] outline-none"
                />
              </div>

              {/* Meta Description */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    SEO Meta Description
                  </label>
                  <span className="text-[10px] text-slate-400 font-mono">
                    {formData.metaDescription.length}/160 chars
                  </span>
                </div>
                <textarea
                  rows={2}
                  value={formData.metaDescription}
                  onChange={(e) => setFormData({ ...formData, metaDescription: e.target.value })}
                  placeholder="Compelling 150-160 character description designed for search engine click-throughs..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs font-normal focus:bg-white focus:border-[#D4AF37] outline-none leading-relaxed"
                />
              </div>

              {/* Custom URL Slug */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">
                  Custom URL Slug
                </label>
                <div className="flex items-center rounded-xl bg-slate-50 border border-slate-200 px-3 py-2 text-xs">
                  <span className="text-slate-400 font-mono">/blogs/</span>
                  <input
                    type="text"
                    value={formData.slug}
                    onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                    placeholder="patna-real-estate-boom"
                    className="w-full bg-transparent text-slate-900 font-mono font-medium outline-none ml-1"
                  />
                </div>
              </div>

              {/* Keywords / Tags */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">
                  Target Focus Keywords
                </label>
                <input
                  type="text"
                  value={formData.keywords}
                  onChange={(e) => setFormData({ ...formData, keywords: e.target.value })}
                  placeholder="e.g. Patna Real Estate, Bailey Road, RERA Diligence"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs font-medium focus:bg-white focus:border-[#D4AF37] outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ==========================================
  // RENDER: ARTICLES LIST VIEW
  // ==========================================
  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Top Header & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl lg:text-3xl font-bold font-outfit tracking-tight text-slate-900">
              Editorial & Blog Management
            </h1>
            <span className="px-2.5 py-1 text-xs font-bold bg-[#D4AF37]/15 text-[#9E7A0C] rounded-full border border-[#D4AF37]/30 font-jakarta">
              {blogs.length} Published
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 font-jakarta">
            Publish thought leadership, RERA title updates, and Patna luxury market insights.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/blogs"
            target="_blank"
            className="px-4 py-2.5 rounded-xl border border-slate-200 hover:border-slate-300 text-slate-700 hover:text-slate-900 text-xs font-bold transition-all flex items-center gap-2"
          >
            <span>Preview Public Blog</span>
            <span className="material-symbols-outlined text-[16px]">open_in_new</span>
          </Link>
          <button
            onClick={handleOpenCreate}
            className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs tracking-wider uppercase shadow-xs transition-all flex items-center gap-2 cursor-pointer active:scale-95"
          >
            <span className="material-symbols-outlined text-[18px]">add_circle</span>
            <span>Write New Article</span>
          </button>
        </div>
      </div>

      {/* Filter Toolbar */}
      <div className="p-4 rounded-2xl bg-white shadow-sm border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="relative w-full md:w-96">
          <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-[18px]">
            search
          </span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search articles by title, author, or keyword..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-[#D4AF37] focus:bg-white"
          />
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
          {['All', 'Market Trends', 'Legal & RERA', 'Patna Corridors', 'Luxury Living', 'NRI Advisory'].map(
            (cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-50 text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            )
          )}
        </div>
      </div>

      {/* Articles Table */}
      <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
        {loading ? (
          <div className="py-20 text-center">
            <div className="w-8 h-8 border-2 border-[#D4AF37] border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
            <p className="text-xs text-slate-500 font-medium">Loading editorial database...</p>
          </div>
        ) : filteredBlogs.length === 0 ? (
          <div className="py-20 text-center space-y-3">
            <span className="material-symbols-outlined text-4xl text-slate-400">article</span>
            <p className="text-sm text-slate-600 font-medium">No blog articles match your criteria.</p>
            <button
              onClick={handleOpenCreate}
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold inline-flex items-center gap-1.5 shadow-xs transition-all"
            >
              <span>Compose First Article</span>
            </button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/80 text-[11px] font-bold text-slate-600 uppercase tracking-wider">
                  <th className="py-4 px-6">Article</th>
                  <th className="py-4 px-6">Category</th>
                  <th className="py-4 px-6">Author</th>
                  <th className="py-4 px-6">Date</th>
                  <th className="py-4 px-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-800">
                {filteredBlogs.map((b) => (
                  <tr key={b.id} className="hover:bg-slate-50/60 transition-colors">
                    {/* Title & Cover */}
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3.5">
                        <img
                          src={b.coverImage}
                          alt={b.title}
                          className="w-14 h-10 rounded-xl object-cover flex-shrink-0 border border-slate-200"
                        />
                        <div className="min-w-0 max-w-md">
                          <span className="font-bold text-slate-900 block truncate font-outfit text-sm">
                            {b.title}
                          </span>
                          <span className="text-[11px] text-slate-500 line-clamp-1">{b.excerpt}</span>
                        </div>
                      </div>
                    </td>

                    {/* Category */}
                    <td className="py-4 px-6">
                      <span className="inline-block px-2.5 py-1 rounded-lg bg-blue-50 text-secondary text-[11px] font-bold">
                        {b.category}
                      </span>
                    </td>

                    {/* Author */}
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <img
                          src={b.author.avatar}
                          alt={b.author.name}
                          className="w-6 h-6 rounded-full object-cover"
                        />
                        <span className="text-xs font-semibold text-slate-800">{b.author.name}</span>
                      </div>
                    </td>

                    {/* Date */}
                    <td className="py-4 px-6 text-slate-500 text-xs whitespace-nowrap">
                      {b.publishedAt}
                    </td>

                    {/* Actions */}
                    <td className="py-4 px-6 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <Link
                          href={`/blogs/${b.slug}`}
                          target="_blank"
                          title="View live post"
                          className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                        >
                          <span className="material-symbols-outlined text-base">visibility</span>
                        </Link>
                        <button
                          onClick={() => handleOpenEdit(b)}
                          title="Edit Article in Studio"
                          className="p-2 rounded-xl text-slate-500 hover:text-[#9E7A0C] hover:bg-slate-100 transition-colors cursor-pointer"
                        >
                          <span className="material-symbols-outlined text-base">edit</span>
                        </button>
                        <button
                          onClick={() => handleDelete(b.id, b.title)}
                          title="Delete Article"
                          className="p-2 rounded-xl text-slate-500 hover:text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
                        >
                          <span className="material-symbols-outlined text-base">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
