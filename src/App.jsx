function App() {
  return (
    <main className="min-h-screen grid place-content-center bg-[hsl(212,45%,89%)] font-['Outfit'] px-7">
      <article className="bg-white px-4 py-4 rounded-2xl overflow-auto max-w-[319px]">
        <picture>
          <img
            className="rounded-xl overflow-auto max-w-[287px]"
            src="/image-qr-code.png"
            alt=""
          />
        </picture>
        <section className="grid gap-4 mt-6 mb-6">
          <h1
            className="text-[hsl(218,44%,22%)] text-center text-[22px] font-bold"
            style={{ lineHeight: "30px" }}
          >
            Improve your front-end skills by building projects
          </h1>
          <p className="text-[hsl(220,15%,55%)] text-center text-[15px] px-5">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </section>
      </article>
    </main>
  );
}

export default App;
