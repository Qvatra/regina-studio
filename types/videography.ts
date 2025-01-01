export interface VideoProps {
  id: string;
  title: string;
  isVertical: boolean;
}

export interface VideoPair {
  vertical: VideoProps[];
  horizontal: VideoProps[];
}

export interface LayoutProp {
  groups: VideoPair[];
  remainingVerticalVideos: VideoProps[];
  remainingHorizontalVideos: VideoProps[];
};

export interface LayoutProps {
  oneCol: LayoutProp;
  twoCols: LayoutProp;
  threeCols: LayoutProp;
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