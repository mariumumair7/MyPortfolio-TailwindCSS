import Image from 'next/image';
import Link from 'next/link';

const skillsPosts = [
  {
    title: 'Web Development',
    summary: 'Front-end Developer',
    image: '/1.jpeg',
    slug: '/blog/web-development',
  },
  {
    title: 'Graphic Design',
    summary: 'Mastering in making Logos.',
    image: '/download.jpeg',
    slug: '/blog/graphic-design',
  },
  {
    title: 'E-Commerce',
    summary: 'Make E-commerce Website',
    image: '/3.jpeg',
    slug: '/blog/e-commerce',
  },
];

export default function Portfolio() {
  return (
    <>

      <section className="container">
        <div>
          <center>
          <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1>
          <p className="text-4xl">Full Stack Developer</p>
          <Image src="/profile.jpg" alt="Profile" width={200} height={200}  />
</center>
        </div>
      </section>


      <section id="about" className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <p className="max-w-xl mx-auto text-gray-600">
          I am Marium Umair, a passionate web developer dedicated to creating engaging and user-friendly digital experiences. 
          I specialize in technologies such as HTML, CSS, JavaScript, React, and Next.js.
        </p>
      </section>

    
      <section id="skills" className="bg-gray-100 py-20">
  <div className="container auto">
    <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {skillsPosts.map((post, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="relative h-40">
            <Image
              src={post.image}
              alt={post.title}
              layout="responsive"
              width={400}
              height={300}
              className="object-cover"
            />
          </div>
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

    
      <section id="contact" className="bg-gray-800 text-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
          <form className="max-w-lg mx-auto">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 mb-4 border border-gray-300 rounded"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 mb-4 border border-gray-300 rounded"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 mb-4 border border-gray-300 rounded"
              rows={5}
            ></textarea>
            <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded">
              Send Message
            </button>
          </form>
        </div>
      </section>

    </>
  );
}
