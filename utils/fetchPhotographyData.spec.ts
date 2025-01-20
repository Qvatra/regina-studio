import { fetchPhotographyPortfolioData } from './fetchPhotographyData';
import cloudinary from './cloudinary';
import getBase64ImageUrl from './generateBlurPlaceholder';

// Mock the cloudinary module
jest.mock('./cloudinary', () => ({
  v2: {
    search: {
      expression: jest.fn().mockReturnThis(),
      sort_by: jest.fn().mockReturnThis(),
      max_results: jest.fn().mockReturnThis(),
      execute: jest.fn().mockResolvedValue({
        resources: [
          { height: 100, width: 100, public_id: 'image1', format: 'jpg' },
          { height: 200, width: 200, public_id: 'image2', format: 'png' },
        ],
      }),
    },
  },
}));

// Mock the getBase64ImageUrl function
jest.mock('./generateBlurPlaceholder', () => jest.fn().mockResolvedValue('base64string'));

describe('fetchPhotographyPortfolioData', () => {
  it('fetches and processes photography data correctly', async () => {
    const data = await fetchPhotographyPortfolioData();

    expect(cloudinary.v2.search.expression).toHaveBeenCalledWith(`folder:${process.env.CLOUDINARY_IMAGE_FOLDER}/*`);
    expect(cloudinary.v2.search.sort_by).toHaveBeenCalledWith('public_id', 'desc');
    expect(cloudinary.v2.search.max_results).toHaveBeenCalledWith(400);

    expect(getBase64ImageUrl).toHaveBeenCalledTimes(2);

    expect(data).toEqual([
      {
        id: 0,
        height: 100,
        width: 100,
        public_id: 'image1',
        format: 'jpg',
        blurDataUrl: 'base64string',
      },
      {
        id: 1,
        height: 200,
        width: 200,
        public_id: 'image2',
        format: 'png',
        blurDataUrl: 'base64string',
      },
    ]);
  });
}); 