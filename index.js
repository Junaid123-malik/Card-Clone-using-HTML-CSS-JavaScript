function createcard(thumbnail,duration,title,channelname,views,timeperiod) {
    if (views<1000) {
        viewsstr=views
    }
    else if(views>100000){
             viewsstr=views/100000+"M"
    }
 
       else {
        viewsstr=views/1000+"K"
    }
    let html = `<div class="container">
    <div class="card">
        <div class="img">
        <img src="${thumbnail}" >
        </img>
        <div class="capsule"> ${duration}</div>
        </div>
        <div class="text"><h1>
        ${title}
           </h1>
           <p>
            ${channelname}. ${viewsstr}views .${timeperiod} months ago
           </p>
        </div>
</div>
    </div>`;
   document.body.innerHTML += html}
createcard("https://i.ytimg.com/vi/KtL-SQ20Q0s/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLDPqs5LtUVsb50otOywVTZEmI75fg","11:05","  Introduction to CSS | Sigma Web Dev - Tutorial #2"," CodeWithHarry",560000,7)



