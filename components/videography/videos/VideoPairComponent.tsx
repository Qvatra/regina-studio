import { VideoPair } from '../../../types/videography'
import { YTVideo } from '../../YTVideo'

export const VideoPairComponent = ({ pair, isReversed }: { pair: VideoPair, isReversed?: boolean }) => {
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