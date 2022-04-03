export async function getCurrentPosition(options = {}) {
  try {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  } catch (error) {
    return error;
  }
}
