import BlogInHeaderComponent from "./BlogInHeaderComponent";


function BlogInHeader (params) {
    return (
        <div>
       
           <div className="header__blog-title">Blog</div>
           <div>
                <BlogInHeaderComponent/>
                <BlogInHeaderComponent/>
                <BlogInHeaderComponent/>
                <BlogInHeaderComponent/>
                <BlogInHeaderComponent/>
            </div>
       </div>
    )
}
export default BlogInHeader;