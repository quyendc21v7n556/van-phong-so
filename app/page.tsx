import Link from "next/link";

export default function Home() {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-3xl font-bold">
        Hệ thống Văn phòng số
      </h1>

      <div className="space-x-4">
        <Link href="/meeting-room">Phòng họp</Link>
        <Link href="/vehicle">Xe công tác</Link>
        <Link href="/asset">Tài sản</Link>
      </div>
    </div>
  );
}