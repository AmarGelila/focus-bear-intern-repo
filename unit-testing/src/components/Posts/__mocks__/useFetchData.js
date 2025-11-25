const useFetchData = jest.fn((url) => {
  return Promise.resolve({
    data: [{ body: "", title: "", id: 1, userId: 1 }],
    loading: false,
    error: null,
  });
});

export default useFetchData;
