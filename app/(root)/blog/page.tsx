import BlogList from "@/components/BlogList";
import React from "react";

const BlogPage = () => {
  return (
    <section className="">
      <div className="bg-blog bg-fixed bg-cover bg-center w-full h-[400px]">
        <div className="flex justify-center items-center ">
          <h1 className="h1 text-center mt-36">Blog list standard</h1>
        </div>
      </div>
        <BlogList />
    </section>
  );
};

export default BlogPage;
