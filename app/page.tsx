import PostList from "@/components/PostList";
import { getPosts } from "@/lib/actions";

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold my-4">My WordPress Posts</h1>
      <PostList initialPosts={posts} />
    </div>
  );
}
