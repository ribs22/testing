export default function PostForm() {
  return (
    <div className="bg-zinc-100 p-10 rounded-2xl shadow-xl">
      <form>
        <textarea className="w-full h-40 bg-zinc-800 rounded-xl text-white p-4 focus:outline-none" />
      </form>
      <div className="flex items-center justify-between mt-3">
        <p>0 / 200</p>
        <button className="bg-zinc-900 text-white py-1 px-8 rounded-lg">
          Post
        </button>
      </div>
    </div>
  );
}
