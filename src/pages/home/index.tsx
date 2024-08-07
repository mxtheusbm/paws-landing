import { Header } from "../../components/header";

export function Home() {
  return (
    <div className="py-8 px-32 h-screen space-y-16">
      <Header />
      <main className="space-y-24">
        <section className="grid grid-cols-2 justify-items-end items-center">
          <div className="flex flex-col justify-between">
            <div className="space-y-8">
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
          </div>

          <img className="h-[500px]" src="image1.svg" alt="" />
        </section>

        <section
          className="grid grid-cols-2 justify-items-start items-center"
          id="about"
        >
          <div className="flex flex-col justify-between order-2">
            <div className="space-y-8">
              <h2 className="font-bold text-3xl text-primary">Sobre o Paws</h2>
              <p className="text-xl">
                Encontre o novo membro da sua família com o Paws. Nosso
                aplicativo facilita a adoção de pets, conectando você a abrigos
                e animais que precisam de um lar amoroso.
              </p>
            </div>
          </div>

          <img className="order-1 w-[500px]" src="image2.png" alt="" />
        </section>

        <section
          className="grid grid-cols-2 justify-items-end items-center"
          id="pet-health"
        >
          <div className="flex flex-col justify-between">
            <div className="space-y-8">
              <h2 className="font-bold text-3xl text-primary">
                Saúde dos Pets
              </h2>
              <p className="text-xl">
                Garanta a saúde do seu pet com nossos produtos de alta
                qualidade. De vitaminas e suplementos a itens de higiene, temos
                tudo para manter seu pet em ótima forma.
              </p>
            </div>
          </div>

          <img className="" src="image3.png" alt="" />
        </section>
      </main>

      <footer className="bg-black absolute w-full left-0">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="#"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img src="logo.svg" className="h-8" alt="Flowbite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                Paws
              </span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 text-white">
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Licensing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-white sm:mx-auto lg:my-8" />
          <span className="block text-sm text-white sm:text-center">
            © 2024{" "}
            <a href="" className="hover:underline">
              Paws™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}
