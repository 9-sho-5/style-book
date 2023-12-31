var xmlns = "http://www.w3.org/2000/svg",
  select = function (s) {
    return document.querySelector(s);
  },
  selectAll = function (s) {
    return document.querySelectorAll(s);
  },
  //イラスト全体のクラス名取得
  svg = select(".svg"),
  human = select(".human"),
  phone = select(".phone"),
  content1_frame = select(".content1_frame"),
  content1 = selectAll(".content1 path"),
  content2 = selectAll(".content2 rect"),
  content3_frame = select(".content3_frame"),
  content3 = selectAll(".content3 path"),
  bg = select(".bg");

//アニメーションの基準を画像の中心に設定
TweenMax.set(
  [
    svg,
    human,
    phone,
    content1_frame,
    content1,
    content2,
    content3_frame,
    content3,
    bg,
  ],
  {
    transformOrigin: "50% 50%",
  }
);

//アニメーション設定
var human_anime = new TimelineMax({
  repeat: 0,
  delay: 1,
  yoyo: false,
  paused: false,
});
human_anime
  .from(human, 0.5, {
    scale: 0,
    ease: Power1.easeOut,
  })
  .from(bg, 0.5, {
    scale: 0,
    ease: Power1.easeOut,
  });

var phone_anime = new TimelineMax({
  repeat: 0,
  delay: 2,
  yoyo: false,
  paused: false,
});
phone_anime.from(phone, 0.5, {
  scale: 0,
  ease: Power1.easeOut,
});

var content1_anime = new TimelineMax({
  repeat: 0,
  delay: 2.5,
  yoyo: false,
  paused: false,
});
content1_anime
  .from(content1_frame, 0.5, {
    scale: 0,
    ease: Power1.easeOut,
  })
  .staggerFrom(
    content1,
    0.2,
    {
      scale: 0,
    },
    0.01
  );

var content2_anime = new TimelineMax({
  repeat: 0,
  delay: 3,
  yoyo: false,
  paused: false,
});
content2_anime.staggerFrom(
  content2,
  0.2,
  {
    scale: 0,
  },
  0.01
);

var content3_anime = new TimelineMax({
  repeat: 0,
  delay: 3.2,
  yoyo: false,
  paused: false,
});
content3_anime
  .from(content3_frame, 0.2, {
    scale: 0,
    ease: Power1.easeOut,
  })
  .staggerFrom(
    content3,
    0.2,
    {
      scale: 0,
    },
    0.01
  );
