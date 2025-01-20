import { VideoProps } from '@/types/videography'

export const YTVideo = ({ video }: { video: VideoProps }) => (
  <div className="relative">
    <div className={`relative overflow-hidden ${
      video.isVertical 
        ? 'w-full aspect-[9/16] mx-auto' 
        : 'aspect-video'
    }`}>
      <iframe
        loading="lazy"
        className='w-full h-full'
        src={`https://www.youtube.com/embed/${video.id}?modestbranding=1&showinfo=0&rel=0&controls=1&color=white&iv_load_policy=3`}
        title={video.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  </div>
); 