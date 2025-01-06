import { VideoProps } from '../../../types/videography'
import { YTVideo } from '../../YTVideo'

export const RemainingVideos = ({ videos }: { videos: VideoProps[] }) => (
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