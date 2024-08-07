export async function getPosts() {
  const res = await fetch('https://public-api.wordpress.com/rest/v1.1/sites/reghardtpienaar.wordpress.com/posts', { next: { revalidate: 3600 } });
  if (!res.ok) throw new Error('Failed to fetch posts');
  const data = await res.json();
  return data.posts;
}