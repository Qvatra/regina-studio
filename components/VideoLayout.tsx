import { VideoProps, VideoPair, LayoutProp } from '../types/videography'
import { YTVideo } from './YTVideo'

const RemainingVideos = ({ videos }: { videos: VideoProps[] }) => (
  videos.length > 0 ? (
    <section className="col-span-full">
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4`}>
        {videos.map((video) => (
          <YTVideo key={video.id} video={video} />
        ))}
      </div>
    </section>
  ) : null
); 

const YTVideoPair = ({ pair, isReversed }: { pair: VideoPair, isReversed?: boolean }) => {
  const videos = isReversed 
    ? [
        { video: pair.horizontal[0], isVertical: false },
        { video: pair.vertical[0], isVertical: true }
      ]
    : [
        { video: pair.vertical[0], isVertical: true },
        { video: pair.horizontal[0], isVertical: false }
      ];

  return (
    <div className="space-y-4" role="group" aria-label="Video pair">
      {videos.map(({ video, isVertical }) => (
        <YTVideo key={video.id} video={{ ...video, isVertical }} />
      ))}
    </div>
  );
}; 

export const MobileLayout = ({ groups, remainingVerticalVideos, remainingHorizontalVideos }: LayoutProp) => (
  <div className="flex flex-col gap-4 md:hidden">
    {groups.map((group, index) => (
      <div key={`ml-group-${index}`}>
        <YTVideo key={group.horizontal[0].id} video={group.horizontal[0]} />
        <div className="grid grid-cols-2 gap-4 mt-4">
          <YTVideo key={group.vertical[0].id} video={group.vertical[0]} />
          <YTVideo key={group.vertical[1].id} video={group.vertical[1]} />
        </div>
      </div>
    ))}
    <RemainingVideos videos={remainingHorizontalVideos} />
    <RemainingVideos videos={remainingVerticalVideos} />
  </div>
);

export const TabletLayout = ({ groups, remainingVerticalVideos, remainingHorizontalVideos }: LayoutProp) => (
  <div className="hidden md:grid md:grid-cols-2 lg:hidden gap-4">
    {groups.map((pair, index) => (
      <YTVideoPair key={`yt-pair-${index}`} pair={pair} isReversed={index % 2 === 1} />
    ))}
    <RemainingVideos videos={remainingHorizontalVideos} />
    <RemainingVideos videos={remainingVerticalVideos} />
  </div>
);

export const DesktopLayout = ({ groups, remainingVerticalVideos, remainingHorizontalVideos }: LayoutProp) => (
  <div className="hidden lg:grid lg:grid-cols-3 gap-4">
    {groups.map((pair, index) => (
      <YTVideoPair key={`dl-group-${index}`} pair={pair} isReversed={index % 2 === 1} />
    ))}
    <RemainingVideos videos={remainingHorizontalVideos} />
    <RemainingVideos videos={remainingVerticalVideos} />
  </div>
);