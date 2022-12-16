import LiComponent from "./LiComponent";
import Logo from "./Logo";

function Blog (params) {
    return (
        <>
        <Logo/>
       <div className="blog__name">Blog name</div>
       <div>
           <LiComponent/>
           <LiComponent/>
           <LiComponent/>
           <LiComponent/>
           <LiComponent/>
       </div>
       </>
    )
}
export default Blog;