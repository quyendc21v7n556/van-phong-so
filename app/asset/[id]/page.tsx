import { getAssetById } from "@/lib/assetService";
import Link from "next/link";

export default function AssetDetail({
  params,
}: {
  params: { id: string };
}) {
  const asset = getAssetById(params.id);

  if (!asset) return <div>Không tìm thấy tài sản</div>;

  return (
    <div className="p-6">
      <Link href="/asset" className="text-blue-500">
        ← Quay lại
      </Link>

      <h1 className="text-2xl font-bold mt-4">
        {asset.name}
      </h1>
      <p>Trạng thái: {asset.status}</p>
    </div>
  );
}