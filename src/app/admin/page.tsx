export default function AdminPage() {
  return (
    <main className="grid h-full w-full grid-cols-3 items-center gap-6">
      <div className="col-span-2 flex flex-col items-center justify-center">
        <h1>manager</h1>
      </div>

      <div className="col-span-1 flex h-full w-full flex-col items-center justify-center border-l border-gray-50">
        <h1>Preview</h1>
      </div>
    </main>
  );
}
