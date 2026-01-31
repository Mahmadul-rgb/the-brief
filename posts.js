// posts.js
// Single source of truth for all posts

const POSTS = [
  {
    id: "google-ai-search",
    title: "Google’s New AI Search Is Changing How Search Results Work",
    category: "Technology",
    categorySlug: "technology",
    date: "2026-01-22",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1600&q=80",
    excerpt:
      "Google is rolling out AI-powered search results that summarize answers directly on the search page, changing how users discover information.",
    url: "posts/google-ai.html",
  },

  {
    id: "ocean-cleanup-ai",
    title: "The Ocean Cleanup’s New AI Milestone",
    category: "Global Good",
    categorySlug: "global-good",
    date: "2026-01-20",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1484291470158-b8f8d608850d?auto=format&fit=crop&q=80&w=1200",
    excerpt:
      "An autonomous system has successfully removed record amounts of plastic from the ocean without harming marine life.",
    url: "posts/ocean-cleanup.html",
  },
];
// Always return newest posts first
function getPostsSortedByDate() {
  return [...POSTS].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
}
