import Image from "next/image";

export default function Home() {
  return (
    <div className='h-auto w-full'>
      <div className='min-h-screen w-full flex justify-center items-center'>
        <Image
          className='animate-fadeIn mb-10 mix-blend-overlay'
          src='/logoBG.png'
          alt='logo'
          width={900}
          height={700}
        />
      </div>
      <div className='min-h-screen w-full flex justify-center items-center'>
        {/* <div className='w-2/3 flex bg-black bg-opacity-50 p-8 px-12 rounded-full overflow-hidden gap-4'> */}
        <Image
          className='rounded-3xl shadow-3xl mix-blend-luminosity'
          src='/bandphoto3.png'
          alt='band'
          width={600}
          height={500}
        />
        {/* <Image
          className='rounded-3xl shadow-3xl'
          src='/bandphoto2.png'
          alt='band'
          width={300}
          height={300}
        />
        <Image
          className='rounded-3xl shadow-3xl'
          src='/bandphoto3.png'
          alt='band'
          width={300}
          height={250}
        />
        <Image
          className='rounded-3xl shadow-3xl'
          src='/bandphoto4.png'
          alt='band'
          width={300}
          height={250}
        /> */}
        {/* </div> */}
      </div>
    </div>
  );
}
