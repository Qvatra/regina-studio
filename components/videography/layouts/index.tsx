import { VideoProps, VideoPair } from '../../../types/videography'
import { VideoPairComponent } from '../videos/VideoPairComponent'
import { RemainingVideos } from '../videos/RemainingVideos'

export const MobileLayout = ({ pairs, remainingVideos }: { pairs: VideoPair[], remainingVideos: VideoProps[] }) => (
  <div className="grid grid-cols-2 gap-4 md:hidden">
    {pairs.map((pair, index) => (
      <VideoPairComponent key={index} pair={pair} isReversed={index % 2 === 1} />
    ))}
    <RemainingVideos videos={remainingVideos} />
  </div>
);

export const TabletLayout = ({ pairs, remainingVideos }: { pairs: VideoPair[], remainingVideos: VideoProps[] }) => (
  <div className="hidden md:grid md:grid-cols-2 lg:hidden gap-4">
    {pairs.map((pair, index) => (
      <VideoPairComponent key={index} pair={pair} isReversed={index % 2 === 1} />
    ))}
    <RemainingVideos videos={remainingVideos} />
  </div>
);

export const DesktopLayout = ({ pairs, remainingVideos }: { pairs: VideoPair[], remainingVideos: VideoProps[] }) => (
  <div className="hidden lg:grid lg:grid-cols-3 gap-4">
    {pairs.map((pair, index) => (
      <VideoPairComponent key={index} pair={pair} isReversed={index % 2 === 1} />
    ))}
    <RemainingVideos videos={remainingVideos} />
  </div>
);