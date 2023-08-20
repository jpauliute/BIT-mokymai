function TopTab() {
  return (
    <div className="flex justify-between pt-5 items-center">
      <div className="text-red-600 font-extrabold text-2xl">NETFLIX</div>
      <div>
        <select className="bg-slate-800 text-white rounded mr-6 w-[100px] pl-3">
          <option>English</option>
        </select>
        <button className="bg-red-600 text-white rounded px-4 py-1 text-sm hover:bg-red-700">
          Sign in
        </button>
      </div>
    </div>
  );
}
export default TopTab;
