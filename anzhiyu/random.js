var posts=["2023/07/23/lolcat报错/","2024/07/01/pycharm打字卡顿/","2020/04/04/todolist/","2024/12/02/safebrowsing偷跑流量/","2023/07/24/美化Mac终端/","2023/07/24/自定义ohmyzsh/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };