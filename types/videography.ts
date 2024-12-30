export interface VideoProps {
  id: string;
  title: string;
  isVertical: boolean;
}

export interface VideoPair {
  vertical: VideoProps;
  horizontal: VideoProps;
}

export interface LayoutProps {
  oneCol: {
    pairs: VideoPair[];
    remainingVideos: VideoProps[];
  };
  twoCols: {
    pairs: VideoPair[];
    remainingVideos: VideoProps[];
  };
  threeCols: {
    pairs: VideoPair[];
    remainingVideos: VideoProps[];
  };
}

export interface YouTubeVideo {
  contentDetails: {
    videoId: string;
  };
  snippet: {
    title: string;
    description: string | null;
  };
} 