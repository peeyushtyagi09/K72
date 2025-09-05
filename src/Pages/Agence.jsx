import React, { useRef } from 'react'
import gsap from 'gsap' 
import { useGSAP} from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from '../components/Navigation/Navbar' 

const Agence = () => {

  gsap.registerPlugin(ScrollTrigger)

  const imageDivRef = useRef(null)
  const imageRef = useRef(null)
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const imageRef1 = useRef(null);


  const imageArray = [
    'https://res.cloudinary.com/djlcf4ix9/image/upload/v1757076586/profile_pictures/gptuuxev59fy1kixpvi3.jpg',
    'https://res.cloudinary.com/djlcf4ix9/image/upload/v1757076626/profile_pictures/stltllnlsotwzbxnlc26.jpg',
    'https://res.cloudinary.com/djlcf4ix9/image/upload/v1757074870/chat_media/s3dlc7vo6nodargljm14.jpg',
    'https://res.cloudinary.com/djlcf4ix9/image/upload/v1757050410/profile_pictures/tfhjcrbexzpge9y2rckb.jpg',
    'https://res.cloudinary.com/djlcf4ix9/image/upload/v1756796871/d5l2aqqiuxr8islh4ast.jpg',
    'https://res.cloudinary.com/djlcf4ix9/image/upload/v1756713345/LoaderImage6_arakuj.png',
    'https://res.cloudinary.com/djlcf4ix9/image/upload/v1757076586/profile_pictures/gptuuxev59fy1kixpvi3.jpg',
    'https://res.cloudinary.com/djlcf4ix9/image/upload/v1757076626/profile_pictures/stltllnlsotwzbxnlc26.jpg',
    'https://res.cloudinary.com/djlcf4ix9/image/upload/v1757074870/chat_media/s3dlc7vo6nodargljm14.jpg',
    'https://res.cloudinary.com/djlcf4ix9/image/upload/v1757050410/profile_pictures/tfhjcrbexzpge9y2rckb.jpg',
    'https://res.cloudinary.com/djlcf4ix9/image/upload/v1756796871/d5l2aqqiuxr8islh4ast.jpg',
    'https://res.cloudinary.com/djlcf4ix9/image/upload/v1756713345/LoaderImage6_arakuj.png',
    
  ]

  useGSAP(function() {
    gsap.to(imageDivRef.current, {
      scrollTrigger:{
        trigger: imageDivRef.current,  
        start: 'top 5%',
        end: 'bottom -99%',
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: 'transform',
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate:(elem) =>  {
          const index = imageArray.length - 1;
         const imageIndex = Math.floor(elem.progress * index );
        
          imageRef.current.src = imageArray[imageIndex];
        }
      }
    })
    // gsap.to([ section2Ref.current], {
    //   backgroundColor: "black",
    //   color: "white",
    //   scrollTrigger: {
    //     trigger: section3Ref.current,
    //     start: "top 80%",
    // endTrigger: section3Ref.current, // lasts until bottom of section3 hits bottom of viewport
    // toggleActions: "play reverse play reverse",
    //   }
    // })
    ScrollTrigger.create({
      trigger: imageRef1.current,
      start: "top 20%",
      endTrigger: "#image2",
      end: "bottom bottom",
      pin: true,
      pinSpacing: false,
      pinReparent: true,
      anticipatePin: 1,
      onEnter: () => {
        gsap.set(imageRef1.current, { width: "24rem" }); // same as w-96
      },
      onEnterBack: () => {
        gsap.set(imageRef1.current, { width: "24rem" });
      }
    });
    
    
  })
  return (
    <div ref={section2Ref} className='parent'>
      <Navbar/>
      <div className='section1 py-1 '>
      <div ref={imageDivRef} className='absolute overflow-hidden h-[20vw] w-[15vw]  rounded-4xl top-[1vh] left-[30vw] '>
      <img ref={imageRef} className='h-full object-cover w-full' src="/images/logo.png" alt="" />
      </div>
    <div className="relative font-[font2]  text-black">
      <div className="mt-[55vh]">
        <h1 className="text-[20vw] text-center uppercase leading-[18vw]">
          Soixan7e <br />
          Douze
        </h1>

        <div className="text-black max-w-3xl px-6 py-4 
                        mx-auto lg:ml-auto lg:mr-0">
          <p className="text-left text-[1rem] sm:text-[2.2rem]">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. 
            Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. 
            Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. 
            C'est pour ça qu'on s'engage à donner de la perspective, pour bâtir des marques influentes.
          </p>
        </div>

        <div  className='text-[.5rem] sm:text-[1rem] m-[10vw] '>
          <div className='flex m-10'>
              <div className=''>
                  <p>Expertise</p>
              </div>
              <div className='pl-[40%]'>
                  <p>Stratégie <br/>
                      Publicité <br/>
                      Branding <br/>
                      Design <br/>
                      Contenu</p>
              </div>
          </div>
          <div className='w-full flex gap-18 '>
              <div className='w-1/3'>
                  <p>Nos projets_naissent dans l'humilité, grandissent dans la curiosité et vivent grâce à la créativité sous toutes ses formes.</p>
              </div>
              <div className='w-1/3'>
                  <p>Notre création_bouillonne dans un environnement où le talent a le goût d'exploser. Où on se sent libre d'être la meilleure version de soi-même.</p>
              </div>
              <div className='w-1/3'>
                  <p>Notre culture_c'est l'ouverture aux autres. Point. Tout l'équipage participe à bâtir une agence dont on est fiers.</p>
              </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    {/* <div> 
    <div ref={section3Ref} className="section2 h-full justify-center items-center flex flex-col relative">
  <div
    ref={imageRef1}
    id="image1"
    className="border-1 bg-transparent h-[90vh] w-96 rounded-2xl m-2 relative z-20"
  ></div>

  <div
    id="image2"
    className="bg-red-200 h-[90vh] w-96 rounded-2xl m-2 relative z-10"
  ></div>
</div>
<div className='h-screen'>

</div>


    </div> */} 
    </div>
  )
}

export default Agence
