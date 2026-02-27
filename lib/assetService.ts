export type Asset = {
  id: string;
  name: string;
  status: string;
};

const assets: Asset[] = [
  { id: "1", name: "Laptop Dell", status: "Đang dùng" },
  { id: "2", name: "Máy chiếu", status: "Rảnh" },
];

export const getAssets = async () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(assets);
    }, 500); 
  });
};

export const getAssetById = (id: string) =>
  assets.find(a => a.id === id);

export const addAsset = (asset: Asset) => {
  assets.push(asset);
};