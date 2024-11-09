import React from "react";
import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    title: 'Finding the Right Match: Tips for Success',
    summary: 'Discover essential tips to help you find your ideal partner.',
    image: '/blog1.jpeg',
    slug: '/blog/find-the-right-match',
  },
  {
    title: 'Building Relationships: The Key to a Successful Match',
    summary: 'Explore the importance of building strong relationships.',
    image: '/ring.jpg',
    slug: '/blog/building-relationships',
  },
];

const Blog = () => {
  return (
    <section id="blog" className="bg-gray-100 py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
              <Image src={post.image} alt={post.title} width={400} height={250} className="object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{post.title}</h3>
                <p className="text-gray-600 mt-2">{post.summary}</p>
                <Link href={post.slug} className="mt-4 inline-block text-blue-500 hover:underline">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
