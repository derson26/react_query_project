export default function Loading() {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-slate-900">
      <div className="flex flex-col mt-2 ml-4 font-bold bg-gradient-to-r bg-clip-text text-transparent from-pink-500 to-violet-500 bg-white">
        <h1 className="capitalize">loading</h1>
      </div>
    </div>
  );
}
