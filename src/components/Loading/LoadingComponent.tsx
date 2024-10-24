export function LoadingComponent() {
  return (
    <div className='w-full h-screen bg-primary flex flex-col gap-5 items-center justify-center'>
      <span className='material-symbols-outlined text-white text-7xl animate-[spin_2s_linear_infinite]'>sync</span>
      <p className='text-white text-xl'>Loading Word of The Day</p>
    </div>
  )
}