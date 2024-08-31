import React, { useState } from "react";

const blogs = [
  {
    id: 1,
    title: "Fun Summer Activities for Kids",
    date: "August 25, 2024",
    image: "/images/course-5-1.jpg", // تأكد من صحة مسار الصورة
    excerpt: "Discover exciting summer activities that your kids will love. From outdoor adventures to creative indoor games, we have it all!",
    content:"Arts and Creativity Courses: From drawing and painting to sculpting and crafting, arts courses provide children with an opportunity to express their creativity and develop their artistic skills. Sports and physical activity courses: These courses include a range of activities such as swimming, football, and gymnastics. These courses help children improve their physical fitness and develop their sports skills."
  },
  {
    id: 2,
    title: "Healthy Snacks for Kids",
    date: "August 20, 2024",
    image: "/images/course-5-1.jpg", // تأكد من صحة مسار الصورة
    excerpt: "Learn how to make delicious and healthy snacks that your kids will enjoy. These recipes are simple and nutritious!",
    content: "تفاصيل المقالة الثانية..."
  },
  {
    id: 3,
    title: "Creative Art Projects for Young Artists",
    date: "August 15, 2024",
    image: "/images/course-5-1.jpg", // تأكد من صحة مسار الصورة
    excerpt: "Unleash your child's creativity with these fun and easy art projects. Perfect for a rainy day or a quiet afternoon at home.",
    content: "تفاصيل المقالة الثالثة..."
  },
 
];

export const Blog = () => {
  const [expandedBlogId, setExpandedBlogId] = useState(null);

  const handleReadMore = (id) => {
    setExpandedBlogId(expandedBlogId === id ? null : id);
  };

  return (
    <section className="py-20 bg-light">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Kids Blog</h2>
        <div className="grid gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="flex bg-white rounded-lg shadow-lg overflow-hidden"
            >
              {/* صورة المقالة */}
              <div className="w-1/3">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* النصوص والتفاصيل */}
              <div className="w-2/3 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-purple-700">{blog.title}</h3>
                  <span className="text-sm text-gray-500 mb-4 block">{blog.date}</span>
                  <p className="text-gray-700 mb-4">
                    {expandedBlogId === blog.id ? blog.content : blog.excerpt}
                  </p>
                </div>
                <button
                  onClick={() => handleReadMore(blog.id)}
                  className="self-start text-white bg-blue-500 hover:bg-blue-700 px-3 py-2 rounded-md" // تعديل اللون هنا
                >
                  {expandedBlogId === blog.id ? "Show Less" : "Read More"}
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* التنقل بين الصفحات */}
        <div className="mt-8 text-center">
          <span className="text-gray-500">Page 1 of 5</span>
          <button className="text-yellow-500 ml-4">Next »</button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
