// src/app/page.js

import Image from 'next/image';

async function fetchPosts() {
  const res = await fetch('https://api-berita-indonesia.vercel.app/cnn/terbaru');
  const data = await res.json();
  return data.data.posts || [];
}

export default async function Page() {
  const posts = await fetchPosts();
  return (
    <main className="container mx-auto px-4 py-8">

      {/* Recommended for You */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Breaking News</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {posts.map((post) => (
            <div key={post.link} className="bg-white p-4 rounded-lg shadow-md">
              <Image
                src={post.thumbnail}
                alt={post.title}
                width={360}
                height={200}
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">{post.title}</h3>
              <p className="text-gray-600">{post.description}</p>
              <a href={post.link} className="text-blue-600 hover:underline mt-2 block">Read more</a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
