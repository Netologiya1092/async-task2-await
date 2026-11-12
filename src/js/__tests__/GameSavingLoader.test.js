import GameSavingLoader from '../GameSavingLoader';

test('GameSavingLoader should load and parse data correctly', async () => {
  const expected = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  };

  const saving = await GameSavingLoader.load();
  expect(saving).toEqual(expected);
});
