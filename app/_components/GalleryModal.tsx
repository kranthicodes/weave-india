import { AnimatePresence, motion } from 'framer-motion';
import { Dispatch, SetStateAction } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import { RiArrowLeftSLine } from 'react-icons/ri';
import Image from 'next/image';

export const GalleryModal = ({
  isOpen,
  setIsOpen,
  setName,
  galleryTitle,
  itemsLength
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setName: string;
  galleryTitle: string;
  itemsLength: number;
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: '0deg' }}
            animate={{ scale: 1, rotate: '0deg' }}
            exit={{ scale: 0, rotate: '0deg' }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white text-black p-[46px] flex flex-col gap-4 rounded-lg max-w-[1360px] w-full h-[660px] shadow-xl cursor-default relative overflow-hidden"
          >
            <div className="flex w-full justify-end">
              <div
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-[2px] cursor-pointer"
              >
                <RiArrowLeftSLine className="w-[28px] h-[28px]" />
                <h3 className="underline font-medium leading-[120%] text-lg">
                  Go Back
                </h3>
              </div>
            </div>
            <div className="flex flex-col w-full items-center gap-12">
              <h1 className="text-eco-600 text-4xl font-medium leading-[120%]">
                {galleryTitle}
              </h1>

              <div className="w-full relative max-w-[982px] px-[88px] h-[400px]">
                <div className="absolute flex justify-between z-[9999999] w-full h-full left-0 items-center">
                  <Image
                    width={48}
                    height={48}
                    className="cursor-pointer swiper-button-previous"
                    src={'/assets/explore-gallery/slide-left.svg'}
                    alt="left nav"
                  />
                  <Image
                    width={48}
                    height={48}
                    className="rotate-180 cursor-pointer swiper-button-next !w-12 !h-12"
                    src={'/assets/explore-gallery/slide-left.svg'}
                    alt="left nav"
                  />
                </div>
                <Swiper
                  effect="coverflow"
                  centeredSlides={true}
                  loop={true}
                  slidesPerView={'auto'}
                  coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 1.5,
                    slideShadows: true,
                  }}
                  navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-previous',
                  }}
                  modules={[EffectCoverflow, Navigation]}
                >
                  {Array(itemsLength)
                    .fill(0)
                    .map((_, idx) => (
                      <SwiperSlide
                        className="!w-[600px] !h-[400px]"
                        key={idx + 1}
                      >
                        <Image
                          width={600}
                          height={400}
                          src={`/assets/explore-gallery/${setName}/${
                            idx + 1
                          }.png`}
                          alt="1"
                        />
                      </SwiperSlide>
                    ))}
                </Swiper>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
