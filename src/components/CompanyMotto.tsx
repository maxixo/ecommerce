const CompanyMotto = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 bg-blue-50  via-accent to-primary/5" />
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-block rounded-full border-2 bg-primary/10 px-6 py-2">
            <span className="text-sm font-semibold text-primary">Our Promise</span>
          </div>
          <h2 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            Quality Packaging, Delivered with Care
          </h2>
          <p className="text-xl text-muted-foreground md:text-2xl">
            We believe every package tells a story. Let us help you tell yours with premium supplies that protect what matters most.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CompanyMotto;

