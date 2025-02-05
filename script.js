document.addEventListener("DOMContentLoaded", () => {
    const fotogrup = document.querySelector('.fotoGrup');
    const audio = document.getElementById('seethat');
    const playButton = document.getElementById('playButton');
  
    fotogrup.addEventListener('mouseenter', () => {
        audio.currentTime = 51.1;
        audio.play().catch(error => {
            console.error("Audio gagal diputar:", error);
        });
    });
  
    fotogrup.addEventListener('mouseleave', () => {
        audio.pause();
        audio.currentTime = 51.1;
    });
  });

//================================================================================

var img1 = document.querySelector('.lily');
img1.addEventListener("mouseover", function(){
    img1.src = 'assets/member2/lily1.png';
});
img1.addEventListener("mouseout", function(){
    img1.src = 'assets/member1/lily.png';
});

var img2 = document.querySelector('.haewon');
img2.addEventListener("mouseover", function(){
    img2.src = 'assets/member2/haewon1.png';
});
img2.addEventListener("mouseout", function(){
    img2.src = 'assets/member1/haewon.png';
});

var img3 = document.querySelector('.sullyoon');
img3.addEventListener("mouseover", function(){
    img3.src = 'assets/member2/sullyoon1.png';
});
img3.addEventListener("mouseout", function(){
    img3.src = 'assets/member1/sullyoon.png';
});

var img4 = document.querySelector('.bae');
img4.addEventListener("mouseover", function(){
    img4.src = 'assets/member2/bae1.png';
});
img4.addEventListener("mouseout", function(){
    img4.src = 'assets/member1/bae.png';
});

var img5 = document.querySelector('.jiwoo');
img5.addEventListener("mouseover", function(){
    img5.src = 'assets/member2/jiwoo1.png';
});
img5.addEventListener("mouseout", function(){
    img5.src = 'assets/member1/jiwoo.png';
});

var img6 = document.querySelector('.kyujin');
img6.addEventListener("mouseover", function(){
    img6.src = 'assets/member2/kyujin1.png';
});
img6.addEventListener("mouseout", function(){
    img6.src = 'assets/member1/kyujin.png';
});

//==========================================================================================

var bg = document.querySelector('.logospotify');
bg.addEventListener("mouseover", function(){
    document.querySelector(".teks").style.color = "white";
    document.querySelector(".spotify").style.backgroundColor = "#c39bc5";
});    
bg.addEventListener("mouseout", function(){
    document.querySelector(".teks").style.color = "transparent";
    document.querySelector(".spotify").style.backgroundColor = "transparent";
});

//==========================================================================================

var album = document.querySelector('.admare');
album.addEventListener("mouseover", function(){
    document.querySelector(".admare img").style.filter = "grayscale(0)";
    document.querySelector(".admare img").style.filter = "brightness(120%)";
});    
album.addEventListener("mouseout", function(){
    document.querySelector(".admare img").style.filter = "grayscale(1)";
});

var album = document.querySelector('.entwurf');
album.addEventListener("mouseover", function(){
    document.querySelector(".entwurf img").style.filter = "grayscale(0)";
    document.querySelector(".entwurf img").style.filter = "brightness(120%)";
});    
album.addEventListener("mouseout", function(){
    document.querySelector(".entwurf img").style.filter = "grayscale(1)";
});

var album = document.querySelector('.YDS');
album.addEventListener("mouseover", function(){
    document.querySelector(".YDS img").style.filter = "grayscale(0)";
    document.querySelector(".YDS img").style.filter = "brightness(110%)";
});    
album.addEventListener("mouseout", function(){
    document.querySelector(".YDS img").style.filter = "grayscale(1)";
});

var album = document.querySelector('.expergo');
album.addEventListener("mouseover", function(){
    document.querySelector(".expergo img").style.filter = "grayscale(0)";
    document.querySelector(".expergo img").style.filter = "brightness(120%)";
});    
album.addEventListener("mouseout", function(){
    document.querySelector(".expergo img").style.filter = "grayscale(1)";
});

var album = document.querySelector('.RC');
album.addEventListener("mouseover", function(){
    document.querySelector(".RC img").style.filter = "grayscale(0)";
    document.querySelector(".RC img").style.filter = "brightness(120%)";
});    
album.addEventListener("mouseout", function(){
    document.querySelector(".RC img").style.filter = "grayscale(1)";
});

var album = document.querySelector('.midsummer');
album.addEventListener("mouseover", function(){
    document.querySelector(".midsummer img").style.filter = "grayscale(0)";
    document.querySelector(".midsummer img").style.filter = "brightness(120%)";
});    
album.addEventListener("mouseout", function(){
    document.querySelector(".midsummer img").style.filter = "grayscale(1)";
});

var album = document.querySelector('.sonar');
album.addEventListener("mouseover", function(){
    document.querySelector(".sonar img").style.filter = "grayscale(0)";
    document.querySelector(".sonar img").style.filter = "brightness(120%)";
});    
album.addEventListener("mouseout", function(){
    document.querySelector(".sonar img").style.filter = "grayscale(1)";
});

var album = document.querySelector('.break');
album.addEventListener("mouseover", function(){
    document.querySelector(".break img").style.filter = "grayscale(0)";
    document.querySelector(".break img").style.filter = "brightness(120%)";
});    
album.addEventListener("mouseout", function(){
    document.querySelector(".break img").style.filter = "grayscale(1)";
});

var album = document.querySelector('.SO');
album.addEventListener("mouseover", function(){
    document.querySelector(".SO img").style.filter = "grayscale(0)";
    document.querySelector(".SO img").style.filter = "brightness(120%)";
});    
album.addEventListener("mouseout", function(){
    document.querySelector(".SO img").style.filter = "grayscale(1)";
});

//==========================================================================================

var sosmed = document.querySelector('.ig');
sosmed.addEventListener("mouseover", function(){
    document.querySelector(".ig img").style.width = "30px";
    document.querySelector(".ig p").style.fontSize = "27px";
});    
sosmed.addEventListener("mouseout", function(){
    document.querySelector(".ig img").style.width = "25px";
    document.querySelector(".ig p").style.fontSize = "22px";    
});

var sosmed = document.querySelector('.x');
sosmed.addEventListener("mouseover", function(){
    document.querySelector(".x img").style.width = "30px";
    document.querySelector(".x p").style.fontSize = "27px";
});    
sosmed.addEventListener("mouseout", function(){
    document.querySelector(".x img").style.width = "25px";
    document.querySelector(".x p").style.fontSize = "22px";
});

var sosmed = document.querySelector('.fb');
sosmed.addEventListener("mouseover", function(){
    document.querySelector(".fb img").style.width = "30px";
    document.querySelector(".fb p").style.fontSize = "27px";
});    
sosmed.addEventListener("mouseout", function(){
    document.querySelector(".fb img").style.width = "25px";
    document.querySelector(".fb p").style.fontSize = "22px";
});

var sosmed = document.querySelector('.yt');
sosmed.addEventListener("mouseover", function(){
    document.querySelector(".yt img").style.width = "30px";
    document.querySelector(".yt p").style.fontSize = "27px";
});    
sosmed.addEventListener("mouseout", function(){
    document.querySelector(".yt img").style.width = "25px";
    document.querySelector(".yt p").style.fontSize = "22px";
});

var sosmed = document.querySelector('.tt');
sosmed.addEventListener("mouseover", function(){
    document.querySelector(".tt img").style.width = "30px";
    document.querySelector(".tt p").style.fontSize = "27px";
});    
sosmed.addEventListener("mouseout", function(){
    document.querySelector(".tt img").style.width = "25px";
    document.querySelector(".tt p").style.fontSize = "22px";
});

var sosmed = document.querySelector('.wb');
sosmed.addEventListener("mouseover", function(){
    document.querySelector(".wb img").style.width = "30px";
    document.querySelector(".wb p").style.fontSize = "27px";
});    
sosmed.addEventListener("mouseout", function(){
    document.querySelector(".wb img").style.width = "25px";
    document.querySelector(".wb p").style.fontSize = "22px";
});
