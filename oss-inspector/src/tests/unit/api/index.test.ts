import { GetUserData } from '../../../api';

describe('GetUserData', () => {
  it('should return user data of Illusion0-0', async () => {
    const data = await GetUserData('illusion0-0');

    expect(data.user).toBeTruthy();
    expect(data.repos).toBeTruthy();
    expect(data.isStarred).toBe(true);
  });
});
