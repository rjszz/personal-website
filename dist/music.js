const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
	
	  {
        name: "巴赫：G大调第一组曲 前奏曲",
        artist: '让德隆',
        url: 'http://antiserver.kuwo.cn/anti.s?useless=/resource/&format=mp3&rid=MUSIC_9826525&response=res&type=convert_url&',
        cover: 'https://pic.xiami.net/images/pic/04/02/10051096837m.jpg?x-oss-process=image/resize,limit_0,m_fill,s_410/quality,q_80/format,jpg',
      },
    ]
});