"use client";

import Link from "next/link";
import { getAssets } from "@/lib/assetService";

export default function AssetPage() {
  const assets = getAssets();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Quản lý tài sản</h1>

      <Link href="/asset/create" className="text-blue-500">
        + Tạo tài sản
      </Link>

      {assets.map(a => (
        <div key={a.id} className="border p-3 mt-2 rounded">
          <Link href={`/asset/${a.id}`}>
            {a.name} - {a.status}
          </Link>
        </div>
      ))}
    </div>
  );
}