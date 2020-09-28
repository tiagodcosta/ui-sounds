const mockupSaveRequest = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        return resolve("Success");
    }, 1000);
  });
}

export default mockupSaveRequest;