import React from "react";
import Navbar from "../components/Navigation/Navbar";
import ProjectCards from "../components/common/ProjectCards";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const Projects = () => {
  const images = [
    {
      
   image1: "https://assets.lummi.ai/assets/QmeYHoWpVRmcvv1NCMknAP8Gw3UGaVN8vuUQMVpP66V5Fb?auto=format&w=1500",
   image2: "https://assets.lummi.ai/assets/QmPha1aDj9saGd63GHYCF2Qf1Yw5PKx3tAzushdmWKM5ez?auto=format&w=1500"
    },
    {
     image1: "https://assets.lummi.ai/assets/QmafGM443ovE8tFiiUCWNVdKtgAHxJkPchC5h51SNxPKAj?auto=format&w=1500",
     image2: "https://assets.lummi.ai/assets/QmNNkgYhUKpu5JGx575BQmNXaKJ88SyHaYnhgHreALH1xG?auto=format&w=1500"

    },
    { 
    image1: "https://assets.lummi.ai/assets/QmXenVuC58vV8LhqxkGU37jxBhDv6rBkqSsszxnqAFxJVW?auto=format&w=1500",
    image2: "https://assets.lummi.ai/assets/QmSD4TxnQPXipFfGpseAGY2g67LNE43tnG9PAWY1yZ54QE?auto=format&w=1500"
    },
    {  
    image1: "https://assets.lummi.ai/assets/QmPt17P4Q5cXdqsN6epGFTSSKDAt79m7NRcywzjmtucVRJ?auto=format&w=1500",
    image2: "https://www.lummi.ai/api/pro/image/118feb5e-a6bc-47d7-8e8d-711fe9182a63?asset=original&cb=REUurD&auto=format&w=1500"
    }
    // "https://assets.lummi.ai/assets/QmZM3DGVnpnPDLKaoiBUXoMW4nnUZHq2CfxugrNpdv9LGJ?auto=format&w=1500"
  ];

  gsap.registerPlugin(ScrollTrigger);
  useGSAP(function() {
    gsap.from('.hero', {
      height: '100px', 
      duration: 1,
      stagger: {
        amount: 0.5
      },
      scrollTrigger: {
        trigger: '.lol', 
        start: 'top 100%',
        end:'top -450%',
        scrub: true,

      }
    })
  })

  return (
    <div className="h-full w-full">
      <div>
        <Navbar />
      </div>
      <div className="pt-80 h-screen p-5">
        <div className="font-[font2] text-black flex pt-10 -mb-10 ">
          <h1 className="uppercase text-[15vw]">Projects</h1>
          <h1 className="pt-2 text-2xl">16</h1>
        </div>
        <div className="lol">
          {images.map(function (elem, idx){
            return <div key={idx} className="hero w-full h-[840px] mb-4 flex gap-4">
              <ProjectCards image1={elem.image1} image2={elem.image2}/>
            </div>
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
