var posts=["2025/04/01/hello-world/","2023/07/24/美化Mac终端/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };