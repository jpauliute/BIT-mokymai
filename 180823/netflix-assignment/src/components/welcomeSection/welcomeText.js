function WelcomeText() {
  return (
    <div className="flex justify-center items-center mt-28">
      <div className="flex flex-col items-center gap-4  max-w-[550px]">
        <h2 className="text-3xl font-bold">
          Unlimited movies, TV shows, and more
        </h2>

        <p>Watch anywhere. Cancel anytime.</p>

        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <div className="flex w-full gap-4">
          <input
            className="w-2/3 bg-slate-800"
            type="email"
            placeholder="Email address"
          />

          <button className="w-1/3 bg-red-500">Get Started {">"} </button>
        </div>
      </div>
    </div>
  );
}

export default WelcomeText;
