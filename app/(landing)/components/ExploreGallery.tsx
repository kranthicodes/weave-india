'use client';
import Container from '@/app/_components/Container';
import { GalleryModal } from '@/app/_components/GalleryModal';
import Image from 'next/image';
import React from 'react';

export default function ExploreGallery() {
  const [indoGalleyModalOpen, setIndoGalleryModalOpen] = React.useState(false);
  const [malaysiaGalleyModalOpen, setMalaysiaGalleryModalOpen] =
    React.useState(false);
  const [singaporeGalleyModalOpen, setSingaporeGalleryModalOpen] =
    React.useState(false);
  return (
    <div className="w-full px-5 lg:px-0 py-10 lg:py-[103px] 2xl:py-[123px] bg-[#EBF0EF] flex justify-center items-center">
      <Container>
        <div className="flex flex-col gap-9 lg:gap-[96px] items-center">
          <h1 className="text-[28px] lg:text-[54px] 2xl:text-[64px] text-eco-600 font-medium leading-[120%]">
            Explore Gallery
          </h1>
          <div className="flex lg:flex-row gap-[58px] lg:gap-6 flex-col lg:justify-between w-full">
            <div
              onClick={() => setIndoGalleryModalOpen(true)}
              className="flex cursor-pointer relative w-full lg:w-[400px] h-[400px] bg-[url(/assets/explore-gallery/indonesia.png)] bg-right bg-origin-content"
            >
              <div className="text-white bg-eco-600 text-base absolute bottom-16 left-[0px] px-3">
                Indonesia
              </div>
            </div>
            <div
              onClick={() => setMalaysiaGalleryModalOpen(true)}
              className="flex cursor-pointer relative w-full lg:w-[400px] h-[400px] bg-[url(/assets/explore-gallery/malaysia.png)] bg-center bg-origin-content"
            >
              <div className="text-white bg-eco-600 text-base absolute bottom-16 left-[0px] px-3">
                Malaysia
              </div>
            </div>
            <div
              onClick={() => setSingaporeGalleryModalOpen(true)}
              className="flex cursor-pointer relative w-full lg:w-[400px] h-[400px] bg-[url(/assets/explore-gallery/singapore.png)] bg-right bg-origin-content"
            >
              <div className="text-white bg-eco-600 text-base absolute bottom-16 left-[0px] px-3">
                Singapore
              </div>
            </div>
          </div>
        </div>
      </Container>
      <GalleryModal
        isOpen={indoGalleyModalOpen}
        setIsOpen={setIndoGalleryModalOpen}
        itemsLength={9}
        galleryTitle="Indonesia Gallery"
        setName="indonesia"
      />
      <GalleryModal
        isOpen={malaysiaGalleyModalOpen}
        setIsOpen={setMalaysiaGalleryModalOpen}
        itemsLength={4}
        galleryTitle="Malaysia Gallery"
        setName="malaysia"
      />
      <GalleryModal
        isOpen={singaporeGalleyModalOpen}
        setIsOpen={setSingaporeGalleryModalOpen}
        itemsLength={7}
        galleryTitle="Singapore Gallery"
        setName="singapore"
      />
    </div>
  );
}
