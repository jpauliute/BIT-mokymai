function InputGroup() {
  return (
    <div className="flex gap-4">
      <input
        className="w-4/5 py-3 px-4 bg-slate-900 rounded-xl min-h-[40px]"
        type="email"
        placeholder="Email address"
      />

      <button className="bg-red-600 rounded-xl text-2xl hover:bg-red-700 transition-all duration-500 min-h-[40px] break-keep px-2">
        Get Started{">"}
      </button>
    </div>
  );
}

export default InputGroup;
