const mockupSaveRequest = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        return resolve("Success");
    }, 2000);
  });
}

export default mockupSaveRequest;