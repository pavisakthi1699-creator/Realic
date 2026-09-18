'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BlogArticle } from '@/data/blogs';
import { toast } from 'sonner';

export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState<BlogArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBlogId, setEditingBlogId] = useState<string | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    category: 'Market Trends' as BlogArticle['category'],
    coverImage: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
    excerpt: '',
    authorName: 'Amit Vikram',
    authorRole: 'Managing Director, Bihar & Eastern Corridor',
    authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    readTime: '5 min read',
    tags: 'Real Estate, Investment, Patna',
    featured: false,
    metaTitle: '',
    metaDescription: '',
    content: '',
  });

  // Fetch blogs
  async function fetchBlogs() {
    try {
      setLoading(true);
      const res = await fetch('/api/blogs');
      const data = await res.json();
      if (data.success) {
        setBlogs(data.data);
      }
    } catch (err) {
      console.error('Failed to load blogs', err);
      toast.error('Failed to load blog articles');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchBlogs();
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

  // Open Create Modal
  function handleOpenCreate() {
    setEditingBlogId(null);
    setFormData({
      title: '',
      slug: '',
      category: 'Market Trends',
      coverImage: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
      excerpt: '',
      authorName: 'Amit Vikram',
      authorRole: 'Managing Director, Bihar & Eastern Corridor',
      authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      readTime: '5 min read',
      tags: 'Real Estate, Investment, Patna',
      featured: false,
      metaTitle: '',
      metaDescription: '',
      content: `### Industry Overview\n\nEnter the article body here...\n\n### Key Takeaways\n- Point 1\n- Point 2`,
    });
    setIsModalOpen(true);
  }

  // Open Edit Modal
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
      readTime: b.readTime,
      tags: b.tags.join(', '),
      featured: b.featured,
      metaTitle: b.metaTitle || '',
      metaDescription: b.metaDescription || '',
      content: b.content,
    });
    setIsModalOpen(true);
  }

  // Auto-slug generator on title blur
  function handleTitleBlur() {
    if (!formData.slug && formData.title) {
      const generatedSlug = formData.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)+/g, '');
      setFormData((prev) => ({ ...prev, slug: generatedSlug }));
    }
  }

  // Handle Form Submit
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const tagArray = formData.tags
      .split(',')
      .map((t) => t.trim())
      .filter((t) => t.length > 0);

    const payload = {
      title: formData.title,
      slug: formData.slug || formData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      category: formData.category,
      coverImage: formData.coverImage,
      excerpt: formData.excerpt,
      content: formData.content,
      readTime: formData.readTime,
      publishedAt: editingBlogId ? undefined : new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      featured: formData.featured,
      tags: tagArray,
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
          setIsModalOpen(false);
          fetchBlogs();
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
          setIsModalOpen(false);
          fetchBlogs();
        } else {
          toast.error(result.message || 'Failed to publish article');
        }
      }
    } catch (err) {
      console.error(err);
      toast.error('Network error while saving article');
    }
  }

  // Delete Article
  async function handleDelete(id: string, title: string) {
    if (!confirm(`Are you sure you want to delete "${title}"? This cannot be undone.`)) {
      return;
    }

    try {
      const res = await fetch(`/api/blogs/${id}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (data.success) {
        toast.success('Article deleted permanently');
        fetchBlogs();
      } else {
        toast.error(data.message || 'Failed to delete article');
      }
    } catch (err) {
      toast.error('Network error deleting article');
    }
  }

  return (
    <div className="space-y-8">
      {/* Top Header & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl lg:text-3xl font-bold font-montserrat tracking-tight text-slate-900">
              Editorial & Blog Management
            </h1>
            <span className="px-2.5 py-1 text-xs font-semibold bg-[#D4AF37]/15 text-[#E6CA65] rounded-full border border-[#D4AF37]/30">
              {blogs.length} Published
            </span>
          </div>
          <p className="text-sm text-slate-600 mt-1">
            Publish thought leadership, RERA title updates, and Patna/Bangalore market insights.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/blogs"
            target="_blank"
            className="px-4 py-2.5 rounded-xl border border-slate-200 hover:border-slate-300 text-slate-700 hover:text-slate-900 text-xs font-semibold transition-all flex items-center gap-2"
          >
            <span>Preview Public Blog</span>
            <span className="material-symbols-outlined text-[16px]">open_in_new</span>
          </Link>
          <button
            onClick={handleOpenCreate}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B89628] text-slate-950 font-bold text-xs tracking-wider uppercase hover:shadow-[0_0_20px_rgba(212,175,55,0.35)] transition-all flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[18px]">add_circle</span>
            <span>Write New Article</span>
          </button>
        </div>
      </div>

      {/* Filter Toolbar */}
      <div className="p-4 rounded-2xl bg-white shadow-sm border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="relative w-full md:w-96">
          <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-600 text-[18px]">
            search
          </span>
          <input
            type="text"
            placeholder="Search by article title, keyword, author..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs placeholder:text-slate-500 focus:outline-none focus:border-[#D4AF37]"
          />
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
          <span className="text-xs text-slate-600 font-medium whitespace-nowrap">Category:</span>
          {['All', 'Market Trends', 'Legal & RERA', 'Patna Corridors', 'Luxury Living', 'NRI Advisory'].map(
            (cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-[#D4AF37] text-slate-950 font-bold shadow-md shadow-[#D4AF37]/20'
                    : 'bg-slate-50 text-slate-600 hover:text-slate-900 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            )
          )}
        </div>
      </div>

      {/* Blog Articles Table */}
      <div className="rounded-2xl bg-white shadow-sm border border-slate-200 overflow-hidden shadow-xl">
        {loading ? (
          <div className="p-16 text-center">
            <div className="inline-block w-8 h-8 border-2 border-[#D4AF37] border-t-transparent rounded-full animate-spin"></div>
            <p className="text-xs text-slate-600 mt-3">Loading published articles...</p>
          </div>
        ) : filteredBlogs.length === 0 ? (
          <div className="p-16 text-center">
            <span className="material-symbols-outlined text-4xl text-slate-600 mb-2">article</span>
            <p className="text-sm font-semibold text-slate-900">No articles found</p>
            <p className="text-xs text-slate-600 mt-1">Try adjusting your search or category filter.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-slate-600 uppercase font-bold tracking-wider text-[10px]">
                  <th className="py-3.5 px-4">Article</th>
                  <th className="py-3.5 px-4">Category</th>
                  <th className="py-3.5 px-4">Author</th>
                  <th className="py-3.5 px-4">Published</th>
                  <th className="py-3.5 px-4">Read Time</th>
                  <th className="py-3.5 px-4 text-center">Featured</th>
                  <th className="py-3.5 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {filteredBlogs.map((b) => (
                  <tr key={b.id} className="hover:bg-slate-50 transition-colors group">
                    {/* Article Info */}
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-3.5 min-w-[280px]">
                        <div className="relative w-14 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-slate-100 border border-slate-200">
                          <img
                            src={b.coverImage}
                            alt={b.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          />
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900 group-hover:text-[#E6CA65] transition-colors line-clamp-1">
                            {b.title}
                          </p>
                          <p className="text-[11px] text-slate-600 line-clamp-1 mt-0.5">{b.excerpt}</p>
                          <span className="text-[10px] font-mono text-slate-500">/{b.slug}</span>
                        </div>
                      </div>
                    </td>

                    {/* Category */}
                    <td className="py-3.5 px-4 whitespace-nowrap">
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-slate-100 border border-slate-200 text-slate-700">
                        {b.category}
                      </span>
                    </td>

                    {/* Author */}
                    <td className="py-3.5 px-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <img
                          src={b.author.avatar}
                          alt={b.author.name}
                          className="w-6 h-6 rounded-full object-cover border border-slate-200"
                        />
                        <div>
                          <p className="font-medium text-slate-800">{b.author.name}</p>
                          <p className="text-[10px] text-slate-600">{b.author.role.split(',')[0]}</p>
                        </div>
                      </div>
                    </td>

                    {/* Published Date */}
                    <td className="py-3.5 px-4 whitespace-nowrap text-slate-600">{b.publishedAt}</td>

                    {/* Read Time */}
                    <td className="py-3.5 px-4 whitespace-nowrap text-slate-700 font-mono text-[11px]">
                      {b.readTime}
                    </td>

                    {/* Featured */}
                    <td className="py-3.5 px-4 text-center whitespace-nowrap">
                      {b.featured ? (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#D4AF37]/15 text-[#E6CA65] border border-[#D4AF37]/30">
                          <span className="material-symbols-outlined text-[12px]">star</span>
                          Featured
                        </span>
                      ) : (
                        <span className="text-[10px] text-slate-500">—</span>
                      )}
                    </td>

                    {/* Actions */}
                    <td className="py-3.5 px-4 text-right whitespace-nowrap">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href={`/blogs/${b.slug}`}
                          target="_blank"
                          title="View live post"
                          className="p-1.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                        >
                          <span className="material-symbols-outlined text-[18px]">visibility</span>
                        </Link>
                        <button
                          onClick={() => handleOpenEdit(b)}
                          title="Edit Article"
                          className="p-1.5 rounded-lg text-slate-600 hover:text-[#E6CA65] hover:bg-slate-100 transition-colors"
                        >
                          <span className="material-symbols-outlined text-[18px]">edit</span>
                        </button>
                        <button
                          onClick={() => handleDelete(b.id, b.title)}
                          title="Delete Article"
                          className="p-1.5 rounded-lg text-slate-600 hover:text-red-400 hover:bg-slate-100 transition-colors"
                        >
                          <span className="material-symbols-outlined text-[18px]">delete</span>
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

      {/* CREATE / EDIT ARTICLE MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-md overflow-y-auto">
          <div className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden my-8">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
              <div>
                <h3 className="text-lg font-bold text-slate-900 font-montserrat">
                  {editingBlogId ? 'Edit Blog Article' : 'Compose New Editorial Article'}
                </h3>
                <p className="text-xs text-slate-600">
                  {editingBlogId
                    ? 'Update content, tags, author, and SEO metadata.'
                    : 'Publish insightful real estate intelligence for Patna & Bangalore investors.'}
                </p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-100 flex items-center justify-center text-slate-600 hover:text-slate-900"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
              {/* Basic Article Info */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
                  Article Fundamentals
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-xs font-medium text-slate-700 mb-1.5">
                      Article Title *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      onBlur={handleTitleBlur}
                      placeholder="e.g., Patna Real Estate Boom: Bailey Road Corridor Transformation"
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1.5">
                      URL Slug *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.slug}
                      onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                      placeholder="e.g., patna-real-estate-boom-2026"
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs font-mono focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1.5">
                      Category *
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) =>
                        setFormData({ ...formData, category: e.target.value as BlogArticle['category'] })
                      }
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-[#D4AF37]"
                    >
                      <option value="Market Trends">Market Trends</option>
                      <option value="Legal & RERA">Legal & RERA</option>
                      <option value="Patna Corridors">Patna Corridors</option>
                      <option value="Luxury Living">Luxury Living</option>
                      <option value="NRI Advisory">NRI Advisory</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-xs font-medium text-slate-700 mb-1.5">
                      Cover Image URL *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.coverImage}
                      onChange={(e) => setFormData({ ...formData, coverImage: e.target.value })}
                      placeholder="https://images.unsplash.com/..."
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-[#D4AF37]"
                    />
                    {formData.coverImage && (
                      <div className="mt-2 h-28 rounded-lg overflow-hidden border border-slate-200 w-48 relative">
                        <img
                          src={formData.coverImage}
                          alt="Cover Preview"
                          className="w-full h-full object-cover"
                        />
                        <span className="absolute bottom-1 right-1 bg-black/70 text-[9px] px-1.5 py-0.5 rounded text-slate-900">
                          Cover Preview
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-xs font-medium text-slate-700 mb-1.5">
                      Excerpt / Summary *
                    </label>
                    <textarea
                      rows={2}
                      required
                      value={formData.excerpt}
                      onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                      placeholder="A short compelling 2-sentence teaser for cards and search snippets..."
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>
              </div>

              {/* Author & Meta */}
              <div className="space-y-4 pt-4 border-t border-slate-200">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
                  Author & Metadata
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1.5">
                      Author Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.authorName}
                      onChange={(e) => setFormData({ ...formData, authorName: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1.5">
                      Author Title / Role *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.authorRole}
                      onChange={(e) => setFormData({ ...formData, authorRole: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1.5">
                      Estimated Read Time
                    </label>
                    <input
                      type="text"
                      value={formData.readTime}
                      onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                      placeholder="e.g., 6 min read"
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-xs font-medium text-slate-700 mb-1.5">
                      Author Avatar Image URL
                    </label>
                    <input
                      type="text"
                      value={formData.authorAvatar}
                      onChange={(e) => setFormData({ ...formData, authorAvatar: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1.5">
                      Tags (comma separated)
                    </label>
                    <input
                      type="text"
                      value={formData.tags}
                      onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                      placeholder="Patna, Metro, Real Estate"
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-6 pt-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.featured}
                      onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                      className="rounded border-slate-300 bg-slate-50 text-[#D4AF37] focus:ring-0 w-4 h-4"
                    />
                    <span className="text-xs text-slate-800 font-medium">
                      Feature on Magazine Cover / Top Banner
                    </span>
                  </label>
                </div>
              </div>

              {/* Full Article Content */}
              <div className="space-y-4 pt-4 border-t border-slate-200">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
                    Article Body & Markdown Content *
                  </h4>
                  <span className="text-[11px] text-slate-500">Supports Markdown (###, quotes, bullets)</span>
                </div>
                <textarea
                  rows={10}
                  required
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  placeholder="### Section Heading&#10;&#10;Write comprehensive market insights, legal diligence commentary, or neighborhood analysis..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs font-mono leading-relaxed focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              {/* SEO Meta */}
              <div className="space-y-4 pt-4 border-t border-slate-200">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
                  Search Engine Optimization (SEO)
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1.5">
                      Meta Title (Browser tab & Google title)
                    </label>
                    <input
                      type="text"
                      value={formData.metaTitle}
                      onChange={(e) => setFormData({ ...formData, metaTitle: e.target.value })}
                      placeholder="Title | Realic Property Consultant"
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1.5">
                      Meta Description (Search engine snippet)
                    </label>
                    <input
                      type="text"
                      value={formData.metaDescription}
                      onChange={(e) => setFormData({ ...formData, metaDescription: e.target.value })}
                      placeholder="Brief synopsis for Google results..."
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="flex items-center justify-end gap-3 pt-6 border-t border-slate-200">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-xs font-semibold hover:bg-slate-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B89628] text-slate-950 text-xs font-bold uppercase tracking-wider hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px]">save</span>
                  <span>{editingBlogId ? 'Save Changes' : 'Publish Article'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
