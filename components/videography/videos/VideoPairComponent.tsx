import { VideoPair } from '../../../types/videography'

export const VideoPairComponent = ({ pair, isReversed }: { pair: VideoPair, isReversed?: boolean }) => {
  const videos = isReversed 
    ? [
        { video: pair.horizontal, isVertical: false },
        { video: pair.vertical, isVertical: true }
      ]
    : [
        { video: pair.vertical, isVertical: true },
        { video: pair.horizontal, isVertical: false }
      ];

  return (
    <div 
      className="space-y-4"
      role="group" 
      aria-label="Video pair"
    >
      {videos.map(({ video, isVertical }) => (
        <div key={video.id} className="relative">
          <div className={`relative overflow-hidden ${
            isVertical ? 'w-full aspect-[9/16] mx-auto' : 'aspect-video'
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
      ))}
    </div>
  );
}; 