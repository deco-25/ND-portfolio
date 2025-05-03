const preloadImage = (src) =>
    new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = resolve;
      img.onerror = reject;
    });
  
  const preloadAssets = async (assetList) => {
    try {
      await Promise.all(assetList.map((src) => preloadImage(src)));
      return true;
    } catch (error) {
      console.error("Error preloading assets:", error);
      return false;
    }
  };
  
  export default preloadAssets;
  