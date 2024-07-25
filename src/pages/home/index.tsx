import { Header } from "../../components/header";

export function Home() {
  return (
    <div className="p-12 h-screen space-y-16">
      <Header />
      <main className="grid grid-cols-2 justify-items-center">
        <div className="flex flex-col justify-between">
          <div className="space-y-5">
            <h2 className="font-bold text-3xl text-primary">
              Bem-vindo ao Paws!
            </h2>
            <h1 className="font-bold text-6xl">
              Tudo para o seu Pet em um Só Lugar
            </h1>
            <p className="text-xl">
              Com o Paws, encontrar um novo membro para a sua família ficou
              ainda mais fácil. Nossa plataforma conecta você a abrigos e
              animais que precisam de um lar amoroso, tornando o processo de
              adoção simples e seguro.
            </p>
          </div>
          <div>
            <button className="bg-primary text-white h-14 w-60 text-xl rounded-2xl hover:bg-opacity-90">
              Baixe Agora
            </button>
          </div>
        </div>

        <img className="h-[500px]" src="image1.svg" alt="" />
      </main>
    </div>
  );
}
