import { VideoProps, VideoPair, LayoutProp } from '../../../types/videography'
import { VideoPairComponent } from '../videos/VideoPairComponent'
import { RemainingVideos } from '../videos/RemainingVideos'
import { VideoComponent } from '../videos/VideoComponent'

export const MobileLayout = ({ groups, remainingVerticalVideos, remainingHorizontalVideos }: LayoutProp) => (
  <div className="flex flex-col gap-4 md:hidden">

    {groups.map((group) => (
      <>
        <VideoComponent key={group.horizontal[0].id} video={group.horizontal[0]} />
        <div className="grid grid-cols-2 gap-4">
          <VideoComponent key={group.vertical[0].id} video={group.vertical[0]} />
          <VideoComponent key={group.vertical[1].id} video={group.vertical[1]} />
        </div>
      </>
    ))}
    <RemainingVideos videos={remainingHorizontalVideos} />
    <RemainingVideos videos={remainingVerticalVideos} />
  </div>
);

export const TabletLayout = ({ groups, remainingVerticalVideos, remainingHorizontalVideos }: LayoutProp) => (
  <div className="hidden md:grid md:grid-cols-2 lg:hidden gap-4">
    {groups.map((pair, index) => (
      <VideoPairComponent key={index} pair={pair} isReversed={index % 2 === 1} />
    ))}
    <RemainingVideos videos={remainingHorizontalVideos} />
    <RemainingVideos videos={remainingVerticalVideos} />
  </div>
);

export const DesktopLayout = ({ groups, remainingVerticalVideos, remainingHorizontalVideos }: LayoutProp) => (
  <div className="hidden lg:grid lg:grid-cols-3 gap-4">
    {groups.map((pair, index) => (
      <VideoPairComponent key={index} pair={pair} isReversed={index % 2 === 1} />
    ))}
    <RemainingVideos videos={remainingHorizontalVideos} />
    <RemainingVideos videos={remainingVerticalVideos} />
  </div>
);