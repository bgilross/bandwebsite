export default function Home() {
  return (
    <div className='h-screen w-full flex flex-col justify-center items-center'>
      <div className='h-12 w-1/2 mb-14 rounded-3xl bg-black opacity-60'></div>
      <img
        className='animate-fadeIn mb-10'
        src='/logoBG.png'
        alt='logo'
        width={900}
        height={700}
      />
    </div>
  );
}
