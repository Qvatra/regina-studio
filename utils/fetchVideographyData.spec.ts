import { fetchVideographyPortfolioData } from './fetchVideographyData';
import { google } from 'googleapis';

// Mock the googleapis module
jest.mock('googleapis', () => ({
  google: {
    youtube: jest.fn().mockReturnValue({
      channels: {
        list: jest.fn().mockResolvedValue({
          data: {
            items: [
              {
                contentDetails: {
                  relatedPlaylists: {
                    uploads: 'somePlaylistId',
                  },
                },
              },
            ],
          },
        }),
      },
      playlistItems: {
        list: jest.fn().mockResolvedValue({
          data: {
            items: [
                {
                contentDetails: { videoId: 'video1' },
                snippet: { title: 'Video 1', description: '#vertical' },
                },
                {
                contentDetails: { videoId: 'video2' },
                snippet: { title: 'Video 2', description: '' },
                },
                {
                contentDetails: { videoId: 'video3' },
                snippet: { title: 'Video 3', description: '' },
                },
                {
                contentDetails: { videoId: 'video4' },
                snippet: { title: 'Video 4', description: '#vertical' },
                },
                {
                contentDetails: { videoId: 'video5' },
                snippet: { title: 'Video 5', description: '#horizontal' },
                },
                {
                contentDetails: { videoId: 'video6' },
                snippet: { title: 'Video 6', description: '#vertical' },
                },
                {
                contentDetails: { videoId: 'video7' },
                snippet: { title: 'Video 7', description: '#vertical' },
                },
                {
                contentDetails: { videoId: 'video8' },
                snippet: { title: 'Video 8', description: '#vertical some description' },
                },
                {
                contentDetails: { videoId: 'video9' },
                snippet: { title: 'Video 9', description: 'some description' },
                },
            ],
          },
        }),
      },
    }),
  },
}));

describe('fetchVideographyPortfolioData', () => {
  it('creates correct oneCol layout', async () => {
    const data = await fetchVideographyPortfolioData();

    expect(data.oneCol.groups.length).toBe(2);
    expect(data.oneCol.remainingVerticalVideos.length).toBe(1);
    expect(data.oneCol.remainingHorizontalVideos.length).toBe(2);

    const allVideos = [
      ...data.oneCol.groups.flatMap(group => [...group.vertical, ...group.horizontal]),
      ...data.oneCol.remainingVerticalVideos,
      ...data.oneCol.remainingHorizontalVideos
    ];

    const expectedVideoIds = [
      'video1', 'video2', 'video3', 'video4', 'video5', 'video6', 'video7', 'video8', 'video9'
    ];

    expect(allVideos.map(v => v.id).sort()).toEqual(expectedVideoIds.sort());
    expect(allVideos.length).toBe(expectedVideoIds.length);
  });

  it('creates correct twoCol layout', async () => {
    const data = await fetchVideographyPortfolioData();

    expect(data.twoCols.groups.length).toBe(4);
    expect(data.twoCols.remainingVerticalVideos.length).toBe(1);
    expect(data.twoCols.remainingHorizontalVideos.length).toBe(0);

    const allVideos = [
      ...data.twoCols.groups.flatMap(group => [...group.vertical, ...group.horizontal]),
      ...data.twoCols.remainingVerticalVideos,
      ...data.twoCols.remainingHorizontalVideos
    ];

    const expectedVideoIds = [
      'video1', 'video2', 'video3', 'video4', 'video5', 'video6', 'video7', 'video8', 'video9'
    ];

    expect(allVideos.map(v => v.id).sort()).toEqual(expectedVideoIds.sort());
    expect(allVideos.length).toBe(expectedVideoIds.length);
  });

  it('creates correct threeCol layout', async () => {
    const data = await fetchVideographyPortfolioData();

    expect(data.threeCols.groups.length).toBe(3);
    expect(data.threeCols.remainingVerticalVideos.length).toBe(2);
    expect(data.threeCols.remainingHorizontalVideos.length).toBe(1);

    const allVideos = [
      ...data.threeCols.groups.flatMap(group => [...group.vertical, ...group.horizontal]),
      ...data.threeCols.remainingVerticalVideos,
      ...data.threeCols.remainingHorizontalVideos
    ];

    const expectedVideoIds = [
      'video1', 'video2', 'video3', 'video4', 'video5', 'video6', 'video7', 'video8', 'video9'
    ];

    expect(allVideos.map(v => v.id).sort()).toEqual(expectedVideoIds.sort());
    expect(allVideos.length).toBe(expectedVideoIds.length);
  });

  it('returns empty layouts on error', async () => {
    // Simulate an error in the API call
    jest.spyOn(console, 'error').mockImplementation(() => {});
    const youtubeMock = google.youtube as jest.Mock;
    youtubeMock.mockReturnValueOnce({
      channels: {
        list: jest.fn().mockRejectedValue(new Error('API Error')),
      },
      playlistItems: {
        list: jest.fn(),
      },
    });

    const data = await fetchVideographyPortfolioData();

    expect(data.oneCol.groups).toEqual([]);
    expect(data.twoCols.groups).toEqual([]);
    expect(data.threeCols.groups).toEqual([]);
  });
});