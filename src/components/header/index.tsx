export function Header() {
  return (
    <header className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <img src="/logo.svg" alt="logo" />
        <p className="text-2xl font-bold">Paws</p>
      </div>
      <div className="space-x-12 text-lg">
        <a href="#home">Home</a>
        <a href="#about">Sobre</a>
        <a href="#pet-health">Saúde dos Pets</a>
      </div>
      <div>{/* <button>+</button> */}</div>
    </header>
  );
}
