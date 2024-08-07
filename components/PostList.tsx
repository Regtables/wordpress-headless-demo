'use client'

import React, { useState } from 'react'
import Image from 'next/image';

export default function PostList({ initialPosts } : { initialPosts: any[] }) {
  const [posts] = useState(initialPosts);

  return (
    <div className="space-y-8">
      {posts.map(post => (
        <article key={post.ID} className="border rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
          <p className="text-gray-600 mb-4">Published on: {new Date(post.date).toLocaleDateString()}</p>
          {post.post_thumbnail && (
            <div className="mb-4">
              <Image 
                src={post.post_thumbnail.URL} 
                alt={post.title}
                width={post.post_thumbnail.width}
                height={post.post_thumbnail.height}
                className="rounded-lg"
              />
            </div>
          )}
          <div dangerouslySetInnerHTML={{ __html: post.excerpt }} className="mb-4" />
          <a href={post.URL} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            Read more
          </a>
        </article>
      ))}
    </div>
  );
}