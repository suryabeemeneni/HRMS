import React from "react";

export const Trending = () => {
  const TrendingCards = [
    {
      image:
        "https://mediaready.videoready.tv/tatasky/image/fetch/f_auto,fl_lossy,q_auto,w_420,h_624/https://zee5xiomipic.zee5.com/resources/0-0-1z5512788/passport/750x1000/1170x658withlogo37a7d2a1cbdf4f6aa3a7958ed995bee49ad7600c37d147e89d8a7ebf3a602471.jpg?impolicy=zee5xiomipic_zee5_com-IPM",
        Title : 'Bhamakalapam 2'
    },
    {
      image:
        "https://mediaready.videoready.tv/tatasky/image/fetch/f_auto,fl_lossy,q_auto,w_420,h_624/https://img.hotstar.com/image/upload/f_auto,t_vl/sources/r1/cms/prod/5893/1707996915893-v",
        Title : 'My Name is Shruthi'
    },
    {
      image:
        "https://mediaready.videoready.tv/tatasky/image/fetch/f_auto,fl_lossy,q_auto,w_420,h_624/https://is1-ssl.mzstatic.com/image/thumb/501jhYPdWpJ8hhgi1YzILQ/2000x3000bb.jpg",
        Title : 'Bootcut Balaraju'
    },
    {
      image:
        "https://mediaready.videoready.tv/tatasky/image/fetch/f_auto,fl_lossy,q_auto,w_420,h_624/https://image-resizer-cloud-api.akamaized.net/image/v2/4BBC7A07-E7FD-4E6F-8780-47E2DF4D93B4/w_540/0-2x3.jpg",
        Title : 'Antony'
    },
    {
      image:
        "https://mediaready.videoready.tv/tatasky/image/fetch/f_auto,fl_lossy,q_auto,w_420,h_624/https://img.hotstar.com/image/upload/f_auto,t_vl/sources/r1/cms/prod/5629/1655629-v-e873c6e44847",
        Title : 'Bubblegum'
    },
    {
      image:
        "https://mediaready.videoready.tv/tatasky/image/fetch/f_auto,fl_lossy,q_auto,w_420,h_624/https://zee5xiomipic.zee5.com/resources/0-0-1z5500337/passport/750x1000/1170x658withlogo2ba6c15b475847fd831522acb39aed5f3b01943cc99a440ea18652766de7b3b0.jpg?impolicy=zee5xiomipic_zee5_com-IPM",
        Title : 'Pindam'
    },
    {
      image:
        "https://mediaready.videoready.tv/tatasky/image/fetch/f_auto,fl_lossy,q_auto,w_420,h_624/https://li-img-cdn-lb.lionsgateplay.com/LionsgateIndia/SAWXY2023MEN/SAWXY2023MEN-lgi-portrait-hero-main-1080x1920-DMHE.jpg",
        Title : 'Kotabommali P.S'
    },
    {
      image:
        "https://mediaready.videoready.tv/tatasky/image/fetch/f_auto,fl_lossy,q_auto,w_420,h_624/https://ctr-01273-ap-in.playflix-vod-hls.qwilted-cds.cqloud.com/onetake/playflix/thumbnails/new_thumb/korean/korean/Sweet_And_Salty_Office/Sweet_and_Salty_Office_ko_1500.jpg",
        Title : 'Keedaa Cola'
    },
    {
      image:
        "https://mediaready.videoready.tv/tatasky/image/fetch/f_auto,fl_lossy,q_auto,w_420,h_624/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/VOD/6657Secondsenglish_Portrait-v1/6657Secondsenglish_Portrait.jpg",
        Title : 'Polimera 2'
    },
    {
        image:
          "https://mediaready.videoready.tv/tatasky/image/fetch/f_auto,fl_lossy,q_auto,w_420,h_624/https://zee5xiomipic.zee5.com/resources/0-0-1z5512788/passport/750x1000/1170x658withlogo37a7d2a1cbdf4f6aa3a7958ed995bee49ad7600c37d147e89d8a7ebf3a602471.jpg?impolicy=zee5xiomipic_zee5_com-IPM",
          Title : 'Ambajipeta Marriage'
        },
      {
        image:
          "https://mediaready.videoready.tv/tatasky/image/fetch/f_auto,fl_lossy,q_auto,w_420,h_624/https://img.hotstar.com/image/upload/f_auto,t_vl/sources/r1/cms/prod/5893/1707996915893-v",
          Title : 'Polimera 2'
        },
      {
        image:
          "https://mediaready.videoready.tv/tatasky/image/fetch/f_auto,fl_lossy,q_auto,w_420,h_624/https://is1-ssl.mzstatic.com/image/thumb/501jhYPdWpJ8hhgi1YzILQ/2000x3000bb.jpg",
          Title : 'Akash Vaani'
        },
  ];

  return (
    <>
    <h3 style={{width:'90%', margin:'10px auto'}}>Trending Movies</h3>
      <div className="cards-row">
        {TrendingCards.map((data, index) => (
          <div className="Trending">
            <img src={data.image} />
            <b>{data.Title}</b>
            <i className="fas fa-star" style={{padding : '2px 2.5% 4%',width:'95%', color :'red', top:'-52px', position:'relative', background:'rgba(0, 0, 0, 0.5)'}}><span style={{color:'white'}}> &nbsp; 8.5 / 10 </span></i>
          </div>
        ))}
      </div>
    </>
  );
};



export const Recommended = () => {
    const RecommendedCards = [
        {Title : 'Black Panther: Wakanda Forever',image : 'https://mediaready.videoready.tv/tatasky/image/fetch/f_auto,fl_lossy,q_auto,w_428,h_248/https://media-content.akamaized.net/pic/upload/test_pic1685524493896.jpg'},  
        {Title : ' Thor: Love and Thunder',image : 'https://mediaready.videoready.tv/tatasky/image/fetch/f_auto,fl_lossy,q_auto,w_428,h_248/https://is2-ssl.mzstatic.com/image/thumb/q8QlFpnNct0G9kpRmyMyNw/3840x2160bb.jpg'},  
        {Title : 'Doctor Strange in the Multiverse of Madness',image : 'https://mediaready.videoready.tv/tatasky/image/fetch/f_auto,fl_lossy,q_auto,w_428,h_248/https://akamaividz2.zee5.com/image/upload/w_1920,h_1080,c_scale/resources/0-6-4z5311140/list/1170x658withlogoa3e6ab98742a48b9a41a42f04f23f02d.jpg'},  
        {Title : 'Halloween Ends',image : 'https://mediaready.videoready.tv/tatasky/image/fetch/f_auto,fl_lossy,q_auto,w_428,h_248/https://is1-ssl.mzstatic.com/image/thumb/WTDZpzkQlaatpb1X4w9jZg/3840x2160bb.jpg'},  
        {Title : 'Avatar: The Way of Water',image : 'https://mediaready.videoready.tv/tatasky/image/fetch/f_auto,fl_lossy,q_auto,w_428,h_248/https://img.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/7029/1607029-h-a2ffa2811163'},  
        {Title : 'Jurassic World Dominion',image : 'https://mediaready.videoready.tv/tatasky/image/fetch/f_auto,fl_lossy,q_auto,w_428,h_248/https://is5-ssl.mzstatic.com/image/thumb/JJo1Kp84yVQ1emwipSnq2A/3840x2160bb.jpg'},  
        {Title : 'The Batman',image : 'https://mediaready.videoready.tv/tatasky/image/fetch/f_auto,fl_lossy,q_auto,w_428,h_248/https://is2-ssl.mzstatic.com/image/thumb/Tb1jarRHaWN_SFiMjZcDHw/3840x2160bb.jpg'},  
        {Title : 'Scream',image : 'https://mediaready.videoready.tv/tatasky/image/fetch/f_auto,fl_lossy,q_auto,w_428,h_248/https://is3-ssl.mzstatic.com/image/thumb/e7lhfIFweEP0AEWANZymEQ/3840x2160bb.jpg'},  
        {Title : 'The Guardians of the Galaxy Holiday Special',image : 'https://mediaready.videoready.tv/tatasky/image/fetch/f_auto,fl_lossy,q_auto,w_428,h_248/https://is1-ssl.mzstatic.com/image/thumb/cXVsKbD0Sk-ogzcoNmj6aA/3840x2160bb.jpg'},  
        {Title : 'Fantastic Beasts: The Secrets of Dumbledore',image : 'https://mediaready.videoready.tv/tatasky/image/fetch/f_auto,fl_lossy,q_auto,w_428,h_248/https://img.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/299/1540299-h-a3f244879b07'},  
        {Title : 'Uncharted ',image : 'https://mediaready.videoready.tv/tatasky/image/fetch/f_auto,fl_lossy,q_auto,w_428,h_248/https://img.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/3776/1553776-h-0ad8a3756002'},  
        {Title : 'Minions: The Rise of Gru',image : 'https://mediaready.videoready.tv/tatasky/image/fetch/f_auto,fl_lossy,q_auto,w_428,h_248/https://images.travelxp.com/ott/programs/burn_appetit_6481aa54bc1e11d236407f12/burn_appetit_progarm_3840_2160_16_9_logo_v2.jpg?tr=w-1920'},  
        {Title : 'Puss in Boots: The Last Wish',image : 'https://mediaready.videoready.tv/tatasky/image/fetch/f_auto,fl_lossy,q_auto,w_428,h_248/https://img.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/5546/1665546-h-f28b133d3416'},  
        {Title : 'Top Gun: Maverick',image : 'https://mediaready.videoready.tv/tatasky/image/fetch/f_auto,fl_lossy,q_auto,w_428,h_248/https://is4-ssl.mzstatic.com/image/thumb/ocWOeR6MwIjXnwNd8i6cqw/3840x2160bb.jpg'},  
        {Title : 'Hotel Transylvania 4: Transformania ',image : 'https://mediaready.videoready.tv/tatasky/image/fetch/f_auto,fl_lossy,q_auto,w_428,h_248/https://akamaividz2.zee5.com/image/upload/w_1920,h_1080,c_scale/resources/0-6-4z5343441/list/1170x658withlogo82949ff5a0a34418ab23ad9f7df0c5474ff9ba335adb4c98995db9ba3cddb6ec.jpg'},  
    ]
        
  return (
    <>
    <h3 style={{width:'90%', margin:'10px auto'}}>Recommended Movies</h3>
      <div className="cards-row" style={{height:'unset'}}>
        {RecommendedCards.map((data, index) => (
        <div className="Recommended">
          <img src={data.image} />
          <b>{data.Title}</b>
          <i className="fas fa-star" style={{padding : '2px 2.5% 4%',width:'95%',textAlign:'right', color :'red', top:'-245px', position:'relative', background:'transparent'}}><span style={{color:'white', background:'rgba(0, 0, 0, 0.5)'}}> &nbsp; 8.5</span></i>
          </div>
        ))}
      </div>
    </>
  )
};


export const Genre= () => {
    const OnlineCards = [
        { Title : 'Drama', image : 'https://mediaready.videoready.tv/tatasky/image/fetch/f_auto,fl_lossy,q_auto,w_180,h_100/https://tstatic.videoready.tv/cms-ui/images/custom-content/1681292901003'},  
        { Title : 'Thriller', image : 'https://mediaready.videoready.tv/tatasky/image/fetch/f_auto,fl_lossy,q_auto,w_180,h_100/https://tstatic.videoready.tv/cms-ui/images/custom-content/1681291131016'},  
        { Title : 'Romance', image : 'https://mediaready.videoready.tv/tatasky/image/fetch/f_auto,fl_lossy,q_auto,w_180,h_100/https://tstatic.videoready.tv/cms-ui/images/custom-content/1681292994994'},  
        { Title : 'Action', image : 'https://mediaready.videoready.tv/tatasky/image/fetch/f_auto,fl_lossy,q_auto,w_180,h_100/https://tstatic.videoready.tv/cms-ui/images/custom-content/1707219075395.png'},  
        { Title : 'Comedy', image : 'https://mediaready.videoready.tv/tatasky/image/fetch/f_auto,fl_lossy,q_auto,w_180,h_100/https://tstatic.videoready.tv/cms-ui/images/custom-content/1681293049959'},  
        { Title : 'Crime', image : 'https://mediaready.videoready.tv/tatasky/image/fetch/f_auto,fl_lossy,q_auto,w_180,h_100/https://tstatic.videoready.tv/cms-ui/images/custom-content/1681293066423'},  
        { Title : 'Horror', image : 'https://mediaready.videoready.tv/tatasky/image/fetch/f_auto,fl_lossy,q_auto,w_180,h_100/https://tstatic.videoready.tv/cms-ui/images/custom-content/1681293111191'},  
        { Title : 'Kids', image : 'https://mediaready.videoready.tv/tatasky/image/fetch/f_auto,fl_lossy,q_auto,w_180,h_100/https://tstatic.videoready.tv/cms-ui/images/custom-content/1681293126020'},  
        { Title : 'Documentary', image : 'https://mediaready.videoready.tv/tatasky/image/fetch/f_auto,fl_lossy,q_auto,w_180,h_100/https://tstatic.videoready.tv/cms-ui/images/custom-content/1681723965498'},  
        { Title : 'Sports', image : 'https://mediaready.videoready.tv/tatasky/image/fetch/f_auto,fl_lossy,q_auto,w_180,h_100/https://tstatic.videoready.tv/cms-ui/images/custom-content/1681293208731'},  
        { Title : 'Biography', image : 'https://mediaready.videoready.tv/tatasky/image/fetch/f_auto,fl_lossy,q_auto,w_180,h_100/https://tstatic.videoready.tv/cms-ui/images/custom-content/1681723989214'},  
    ]
    
    return (
      <>
      {/* <h3 style={{width:'90%', margin:'10px auto'}}>Select Genre</h3> */}
      <div style={{width:'90%', margin:'auto', height:'140px', background:'url(https://www.tataplaybinge.com/c37977a47a15af251ccc5cef5a9022ba.jpg) center'}}></div>
        <div className="cards-row" style={{position:'relative', top:'-105px', background:'transparent', overflow:'scroll', height:'70px'}}>
          {OnlineCards.map((data, index) => (
            <div style={{display:'flex', flexDirection:'column'}}>
            <img src={data.image} style={{minWidth:'100px',maxWidth:'15%', height:'45px', background:'rgb(20, 20, 77)', paddingTop:'5px'}}/>
            <p style={{color:'white', background:'rgb(20, 20, 77)',margin:'0', textAlign:'center'}}>{data.Title}</p>
            </div>
          ))}
        </div>
      </>
    )
  };


export const Online = () => {
    const OnlineCards = [
        {image : 'https://mediaready.videoready.tv/tatasky/image/fetch/f_auto,fl_lossy,q_auto,w_400,h_532/https://img.hotstar.com/image/upload/f_auto,t_vl/sources/r1/cms/prod/old_images/vertical/MOVIE/5842/1000055842/1000055842-v'},  
        {image : 'https://mediaready.videoready.tv/tatasky/image/fetch/f_auto,fl_lossy,q_auto,w_400,h_532/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/VOD/53Quicksandenglish_Portrait-v1/53Quicksandenglish_Portrait.jpg'},  
        {image : 'https://mediaready.videoready.tv/tatasky/image/fetch/f_auto,fl_lossy,q_auto,w_400,h_532/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/VOD/63Wintertidehindi_Portrait-v1/63Wintertidehindi_Portrait.jpg'},  
        {image : 'https://mediaready.videoready.tv/tatasky/image/fetch/f_auto,fl_lossy,q_auto,w_400,h_532/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/VOD/6657Secondsenglish_Portrait-v1/6657Secondsenglish_Portrait.jpg'},  
        {image : 'https://mediaready.videoready.tv/tatasky/image/fetch/f_auto,fl_lossy,q_auto,w_400,h_532/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/VOD/64ASavannahHauntinghindi_Portrait-v1/64ASavannahHauntinghindi_Portrait.jpg'},  
        {image : 'https://mediaready.videoready.tv/tatasky/image/fetch/f_auto,fl_lossy,q_auto,w_400,h_532/https://zee5xiomipic.zee5.com/resources/0-0-1z5469034/passport/750x1000/1170x658withlogo107e808736804d97ac732c808595de50260b83f6f23440f7ba630a43c458f4b1.jpg?impolicy=zee5xiomipic_zee5_com-IPM'},  
        {image : 'https://mediaready.videoready.tv/tatasky/image/fetch/f_auto,fl_lossy,q_auto,w_400,h_532/https://img.hotstar.com/image/upload/f_auto,t_vl/sources/r1/cms/prod/1884/1581884-v-1a5578897bf6'},  
        {image : 'https://mediaready.videoready.tv/tatasky/image/fetch/f_auto,fl_lossy,q_auto,w_400,h_532/https://is1-ssl.mzstatic.com/image/thumb/CljPM63EqWo3YCCQhEicdQ/2000x3000bb.jpg'},  
        {image : 'https://mediaready.videoready.tv/tatasky/image/fetch/f_auto,fl_lossy,q_auto,w_400,h_532/https://li-img-cdn-lb.lionsgateplay.com/LionsgateIndia/ACHRISTMASCAROLGOESWRONGY2017M/ACHRISTMASCAROLGOESWRONGY2017M-lgi-portrait-hero-main-1080x1920-DMHE.jpg'},  
        {image : 'https://mediaready.videoready.tv/tatasky/image/fetch/f_auto,fl_lossy,q_auto,w_400,h_532/https://img.hotstar.com/image/upload/f_auto,t_vl/sources/r1/cms/prod/3947/1603947-v-162a8a831f5d'},  
        {image : 'https://mediaready.videoready.tv/tatasky/image/fetch/f_auto,fl_lossy,q_auto,w_400,h_532/https://li-img-cdn-lb.lionsgateplay.com/pictureworks/FEARTHENIGHTY2023MEN/FEARTHENIGHTY2023MEN-lgi-portrait-hero-main-1080x1920-DMHE.jpg'},  
        {image : 'https://mediaready.videoready.tv/tatasky/image/fetch/f_auto,fl_lossy,q_auto,w_400,h_532/https://zee5xiomipic.zee5.com/resources/0-0-1z5500337/passport/750x1000/1170x658withlogo2ba6c15b475847fd831522acb39aed5f3b01943cc99a440ea18652766de7b3b0.jpg?impolicy=zee5xiomipic_zee5_com-IPM'},  
        {image : 'https://mediaready.videoready.tv/tatasky/image/fetch/f_auto,fl_lossy,q_auto,w_400,h_532/https://img.hotstar.com/image/upload/f_auto,t_vl/sources/r1/cms/prod/9736/1629736-v-538fa2b33272'},  
        {image : 'https://mediaready.videoready.tv/tatasky/image/fetch/f_auto,fl_lossy,q_auto,w_400,h_532/https://img.hotstar.com/image/upload/f_auto,t_vl/sources/r1/cms/prod/7011/1657011-v-d6e556230ba6'},  
        {image : 'https://mediaready.videoready.tv/tatasky/image/fetch/f_auto,fl_lossy,q_auto,w_400,h_532/https://is3-ssl.mzstatic.com/image/thumb/guMY3GHurtp3RtB4I6otBQ/2000x3000bb.jpg'},  
    ]
    
    return (
      <>
      <h3 style={{width:'90%', margin:'10px auto'}}>Online Movies</h3>
        <div className="cards-row">
          {OnlineCards.map((data, index) => (
            <img src={data.image} />
          ))}
        </div>
      </>
    )
  };

  export const Rent = () => {
    const RentCards = [
        {image : 'https://mediaready.videoready.tv/tatasky/image/fetch/f_auto,fl_lossy,q_auto,w_400,h_532/https://zee5xiomipic.zee5.com/resources/0-0-1z5508835/passport/750x1000/1170x658withlogoec5baa05ec374d3ba51ecfee1346adb4695acc0c865e40f4a5d64fa5d1d771e9acd8db38d1c8472a88637c4db503322a.jpg?impolicy=zee5xiomipic_zee5_com-IPM'},  
        {image : 'https://mediaready.videoready.tv/tatasky/image/fetch/f_auto,fl_lossy,q_auto,w_400,h_532/https://zee5xiomipic.zee5.com/resources/0-0-1z5380500/passport/750x1000/1170x658withlogo6e7f6259fadb4e748e35b63726e4e814f798a9f7810e4e8780c73abda59c6d54.jpg?impolicy=zee5xiomipic_zee5_com-IPM'},  
        {image : 'https://mediaready.videoready.tv/tatasky/image/fetch/f_auto,fl_lossy,q_auto,w_400,h_532/https://media-content.akamaized.net/pic/upload/test_pic1675238296336.jpg'},  
        {image : 'https://mediaready.videoready.tv/tatasky/image/fetch/f_auto,fl_lossy,q_auto,w_400,h_532/https://zee5xiomipic.zee5.com/resources/0-0-1z5347534/passport/750x1000/ImageTitled9cede1f1e984e91af7f9a6df6f86a9d.jpg?impolicy=zee5xiomipic_zee5_com-IPM'},  
        {image : 'https://mediaready.videoready.tv/tatasky/image/fetch/f_auto,fl_lossy,q_auto,w_400,h_532/https://zee5xiomipic.zee5.com/resources/0-0-1z5485742/passport/750x1000/1170x658withlogobd12518869a843c194315618841740af.jpg?impolicy=zee5xiomipic_zee5_com-IPM'},  
        {image : 'https://mediaready.videoready.tv/tatasky/image/fetch/f_auto,fl_lossy,q_auto,w_400,h_532/https://zee5xiomipic.zee5.com/resources/0-0-1z5281750/passport/750x1000/1170x658withlogo8918514016774b2da63a6a8bd308f9bd.jpg?impolicy=zee5xiomipic_zee5_com-IPM'},  
        {image : 'https://mediaready.videoready.tv/tatasky/image/fetch/f_auto,fl_lossy,q_auto,w_400,h_532/https://zee5xiomipic.zee5.com/resources/0-0-1z5489618/passport/750x1000/1170x658withlogo556c23ddd13d41f3be10a490f449824eee39f48792804a6e82902c06ae4705d974735019516243b99376329bb1aec726.jpg?impolicy=zee5xiomipic_zee5_com-IPM'},  
        {image : 'https://mediaready.videoready.tv/tatasky/image/fetch/f_auto,fl_lossy,q_auto,w_400,h_532/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/VOD/6657Secondsenglish_Portrait-v1/6657Secondsenglish_Portrait.jpg'},  
        {image : 'https://mediaready.videoready.tv/tatasky/image/fetch/f_auto,fl_lossy,q_auto,w_400,h_532/https://li-img-cdn-lb.lionsgateplay.com/mvp/EXPEND4BLESY2023MEN/EXPEND4BLESY2023MEN-lgi-portrait-hero-main-1080x1920-DMHE.jpg'},  
        {image : 'https://mediaready.videoready.tv/tatasky/image/fetch/f_auto,fl_lossy,q_auto,w_400,h_532/https://zee5xiomipic.zee5.com/resources/0-0-1z5508792/passport/750x1000/1170x658withlogo547d523e66ee408590aa1f68b84390aeb88443a398df4c82b0e62851dd0a4964.jpg?impolicy=zee5xiomipic_zee5_com-IPM'},   
    ]
    return (
      <>
      <h3 style={{width:'90%', margin:'10px auto'}}>Rent Movies</h3>
        <div className="cards-row">
          {RentCards.map((data, index) => (
            <div className="Rent">
                <img src={data.image} />
            </div>
          ))}
        </div>
      </>
    )
  };