import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import Contacts from "../components/Contacts.tsx"
import { Handlers } from "$fresh/server.ts";
import { load } from "https://deno.land/std@0.216.0/dotenv/mod.ts";
import Mailgun from "https://deno.land/x/mailgun@v1.2.2/index.ts";

export const handler: Handlers = {
  async POST(req, ctx) {
    const env = await load();

    const mailgun = new Mailgun({
      key: Deno.env.get("MAILGUN_KEY"),
      region: Deno.env.get("MAILGUN_REGION"),
      domain: Deno.env.get("MAILGUN_DOMAIN"),
    });

    const form = await req.formData();
    const name = form.get("name")?.toString();
    const email = form.get("email")?.toString();
    const message = form.get("message")?.toString();

    await mailgun.send({
      to: "china@pozitive.biz",
      from: email,
      text: message,
      subject: name || "Subject",
    });

    // Redirect user to thank you page.
    const headers = new Headers();
    headers.set("location", "/thanks-for-message");
    return new Response(null, {
      status: 303, // See Other
      headers,
    });
  },
};

export default function Home(req: Request, ctx: RouteContext) {
  return (
    <div className="">
      <Hero />
      <TokensView />
      <Values />
      <ContactsView />
    </div>
  );
}
function ContactsView() {
  return (
    <div className="py-32 px-4">
      <div className="mx-auto flex flex-col gap-8 max-w-xl">
        <div className="text-sm font-bold text-center">
          <span className="text-primary">#</span>
          <span className=""> Контакты</span>
        </div>
        <h3 className="font-bold text-xl sm:text-2xl md:text-2xl lg:text-center">Задайте вопрос или опишите проект.</h3>
        <Contacts />
          <a href="https://t.me/pozitiveweb3lab" className="link link-accent">Обсуждиение проекта в Telegram</a>
      </div>
    </div>
  )
}

const tokens = [
  <Bitcoin />,
  <Ethereum />,
  <Tether />,
  <Cardano />,
  <Solana />,
  <Polkadot />,
  <Litecoin />,
  <Stellar />,
  <BitcoinCash />,
];

const tokenItems = tokens.map((x) => (
  <li className="w-16 h-16 lg:w-24 lg:h-24">{x}</li>
));

function TokensView() {
  return (
    <div className="flex flex-col gap-16 w-full py-16">
      <h3 className="lg:text-center text-sm md:text-xl px-4">
        Разрабатываем dApp на самых позитивных блокчейн
      </h3>
      <div className="w-full inline-flex flex-nowrap">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
          {tokenItems}
        </ul>
        <ul
          className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
          aria-hidden="true"
        >
          {tokenItems}
        </ul>
      </div>
    </div>
  );
}

const cards = [
  {
    title: "Меньше Багов",
    description:
      "Haskell и Rust включают явные правила манипулирования данными для четко очерченных вычислительных потоков информации. Эта функция, называемая статической типизацией, помогает обнаруживать ошибки на ранней стадии, обеспечивая большую уверенность в правильности скомпилированного кода.",
  },
  { title: "Кратко и ясно",
    description: "Язык Haskell позволяет создавать более компактные и компактные базы кода. Меньшее количество кода упрощает управление и понимание программ. Модульная конструкция приложений помогает разработчикам «склеивать» функции вместе с меньшими проблемами безопасности.",
  },
  { title: "Формальная проверка",
    description: "Haskell по своему замыслу точно отражает формальную логику и математические рассуждения. Разработчики, имеющие опыт работы с формальными методами, могут положиться на средства проверки моделей и аналогичные инструменты для проверки кода для большей уверенности и надежности.",
  },
  { title: "Выразительное, но надежное управление памятью",
    description: "Многие популярные языки программирования автоматизируют управление памятью. Хотя такая автоматизация часто полезна, она может значительно снизить производительность. Rust обеспечивает безопасную тонкую настройку доступа к памяти для заметных улучшений.",
  },
  { title: "Пригодность для блокчейна",
    description: "Пользователи часто полагаются на браузеры для перемещения огромных сумм в транзакциях блокчейна. Поэтому стабильность и безопасность имеют первостепенное значение. Смарт-контракты должны выполняться так, как задумано. Rust и Haskell решают эти проблемы.",
  },
  { title: "Поддержка программного обеспечения с открытым исходным кодом",
    description: "Запатентованное программное обеспечение лежит в основе многих мощных бизнес-моделей. Тем не менее, мы верим в отдачу. Pozitive Web3 Labs поддерживает несколько инструментов с открытым исходным кодом и регулярно участвует в разработке языков программирования Haskell и Rust.",
  },
];

function Values() {
  return (
    <div className="bg-base-200 py-32 px-4">
      <div className="container mx-auto">
        <div className="pb-4 text-sm font-bold text-center">
          <span className="text-primary">#</span>
          <span className="">НАШИ ЦЕННОСТИ</span>
        </div>
       <h3 className="font-bold text-xl sm:text-2xl md:text-4xl lg:text-center">
          Ответсвенный Подход к Разработке
        </h3>

        <div className="py-8 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {cards.map((x) => ValueCard(x))}
        </div>
      </div>
    </div>
  );
}

function ValueCard(record: { title: String; description: String }) {
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body ">
        <h2 className="card-title">{record.title}</h2>
        <p>{record.description}</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="min-h-screen bg-base-200 px-4 pt-16">
      <div className="container mx-auto">
        <h3 className="font-bold text-primary text-5xl sm:text-7xl lg:text-center">
          Проекты
        </h3>
        <p className="lg:text-center text-lg md:text-xl mt-6 mx-auto max-w-4xl">
          Pozitive Web3 Lab специализируется на раработке dApps и
          смартконтрактов на Cardano.
        </p>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse gap-8">
        <img
          src="/background.svg"
          className="max-w-80 lg:max-w-md py-4 bg-base-200 rounded-lg"
        />
        <div>
          <h1 className="text-4xl lg:text-5xl font-bold">
            <span>Помогаем</span>
            <br />
            <span>Бизнесу</span>
            <br />
            <span>Технологично</span>
          </h1>
          <p className="py-4">
            весь потенциал блокчейн технологий для вашего бизнеса<br />
          </p>
          <a href="/contacts" className="btn btn-primary">Разработка dApp</a>
        </div>
      </div>
    </div>
  );
}

// Tokens

function Bitcoin() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 13 16"
    >
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M10.19 7.47c.76-.39 1.24-1.07 1.13-2.21c-.15-1.56-1.49-2.08-3.19-2.23V1H6.82v2H5.77V1H4.46v2c-.29 0-.56.01-.84.01H2v1.43s.77-.02.75 0c.53 0 .71.31.76.58v2.46h.14h-.14v3.44c-.02.17-.12.44-.49.44c.02.01-.75 0-.75 0l-.26 1.63h2.44v2h1.31v-2h1.05v2h1.31v-2.05c2.21-.13 3.75-.68 3.95-2.76c.16-1.67-.63-2.42-1.88-2.72Zm-4.4-2.94h.27c.92-.02 2.8-.07 2.8 1.32C8.86 7.21 6.9 7.18 6 7.16h-.22V4.54Zm3.68 5.39c0 1.5-2.35 1.46-3.43 1.45h-.26V8.48h.32c1.1-.03 3.36-.08 3.36 1.45Z"
      />
    </svg>
  );
}

function Cardano() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 16 16"
    >
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M8.34 2.03c.16-.31-.21-.68-.52-.52c-.25.1-.31.46-.12.65c.18.19.54.12.63-.13Zm-3.4.14c.02-.2-.22-.38-.4-.3c-.26.07-.29.48-.04.58c.19.11.46-.06.44-.28m6.32.29c-.29-.04-.34-.5-.06-.59c.22-.11.41.09.45.3c-.05.18-.19.34-.39.29M5.99 3.75c.05-.36-.39-.66-.7-.46c-.29.15-.33.6-.07.79c.27.25.76.04.77-.33m4.03-.25c.14-.36.7-.37.86-.02c.16.27-.04.61-.31.7c-.37.07-.72-.33-.54-.68ZM8 3.6c-.29.02-.57.25-.57.56c-.02.25.16.46.37.56h.06c.12.01.24.02.35-.04c.28-.12.42-.5.26-.77c-.08-.2-.29-.28-.49-.32ZM2.55 4.61c.28-.18.66.15.56.46c-.06.27-.42.38-.62.21c-.22-.16-.18-.55.06-.66Zm11.09.33c.03-.31-.37-.52-.61-.33c-.25.15-.22.56.04.68c.24.14.58-.07.56-.35Zm-4.84.22c.4-.14.87.03 1.09.39c.3.44.14 1.1-.32 1.35c-.48.3-1.18.05-1.36-.5c-.2-.48.09-1.09.59-1.24m-1.08.47c-.21-.45-.8-.63-1.24-.42c-.47.21-.68.83-.44 1.29c.22.47.85.67 1.29.41c.45-.23.64-.84.39-1.29Zm-3.57.38c.03-.29.3-.47.57-.49c.29.04.52.26.55.56c-.02.29-.24.58-.55.58c-.34.03-.64-.31-.57-.65m7.69.07c.02-.4-.47-.7-.82-.5c-.37.18-.4.77-.04.98c.35.25.88-.05.86-.48M5.53 7.09c.41-.11.87.08 1.07.46c.22.38.13.91-.21 1.19c-.44.41-1.24.24-1.47-.31c-.27-.51.06-1.2.61-1.33Zm5.48.4c-.21-.36-.68-.52-1.07-.4c-.56.15-.85.87-.56 1.37c.24.49.92.65 1.36.34c.42-.27.55-.89.27-1.31m-8.1.07c.35-.13.74.26.6.61c-.09.32-.53.44-.77.2c-.27-.22-.17-.72.17-.81m10.03-.06c-.3.02-.51.28-.5.57c.06.14.13.28.27.35c.29.16.71-.07.69-.42c.02-.26-.22-.46-.46-.5m-11.76.23c.21-.09.47.09.42.33c-.01.27-.4.37-.55.15c-.13-.16-.05-.4.12-.48Zm13.78.14c-.06-.18-.3-.25-.45-.15c-.25.13-.15.6.15.57c.21.03.4-.23.3-.42M6.67 9.01c.56-.15 1.15.32 1.16.9c.04.59-.55 1.1-1.12.97a.947.947 0 0 1-.77-.95c0-.43.32-.83.74-.92Zm3.38.91c0-.59-.61-1.07-1.17-.91c-.33.08-.62.36-.69.71c-.15.51.24 1.1.77 1.17c.56.11 1.13-.39 1.1-.96Zm-5.42-.55c.39-.07.76.37.6.75c-.12.4-.69.51-.95.18c-.3-.31-.08-.89.35-.93m7.21.56c.03-.38-.4-.69-.75-.54c-.42.14-.49.78-.11 1c.34.25.87-.04.86-.47Zm1.06 1.29c-.14-.26.11-.6.39-.55c.13 0 .23.1.31.19v.02l.02.03c.02.15.04.31-.08.43c-.17.22-.55.16-.65-.1Zm-9.77-.08c.06-.31-.32-.58-.58-.4c-.25.13-.26.53-.02.68c.23.16.57 0 .6-.28m4.63.18c.35-.15.79.15.75.53c.03.42-.52.72-.86.46c-.38-.22-.31-.86.1-1Zm-1.75 1.02c.03-.33-.37-.6-.66-.45c-.21.08-.29.31-.3.52c.07.19.22.39.44.4c.27.04.53-.19.52-.47m4.23-.44c.3-.19.73.08.7.44c0 .37-.48.61-.76.37c-.27-.19-.24-.65.06-.8Zm1.09 1.62c-.22.05-.38.29-.24.5c.14.24.54.15.57-.13c.04-.21-.15-.34-.32-.38Zm-7 .32c.05-.16.18-.33.37-.28c.28.02.36.44.12.57c-.22.15-.47-.05-.49-.29m3.83-.04c-.2-.13-.51-.01-.57.23c-.1.24.14.54.39.51c.14 0 .25-.1.33-.2c.02-.07.03-.13.05-.2c-.03-.13-.07-.28-.21-.34Z"
      />
    </svg>
  );
}

function Ethereum() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 10 16"
    >
      <path fill="currentColor" d="m5 1l-.09.31v8.88l.09.09l4-2.44z" />
      <path
        fill="currentColor"
        d="M5 1L1 7.84l4 2.44zm0 10.62l-.05.06v3.17L5 15l4-5.81l-4 2.44Z"
      />
      <path
        fill="currentColor"
        d="M5 15v-3.38L1 9.18l4 5.81Zm0-4.72l4-2.44l-4-1.87zM1 7.84l4 2.44V5.97z"
      />
    </svg>
  );
}

function Tether() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 16 16"
    >
      <path fill="currentColor" d="M3 2h10v2.38H3zm6.5 6.76v5.25h-3V8.76z" />
      <path
        fill="currentColor"
        d="M8 5.75c-3.66 0-6.62.73-6.62 1.62S4.35 8.99 8 8.99s6.62-.73 6.62-1.62S11.65 5.75 8 5.75m0 2.5c-3.38 0-6.12-.5-6.12-1.12S4.62 6.01 8 6.01s6.12.5 6.12 1.12S11.38 8.25 8 8.25"
      />
      <path
        fill="currentColor"
        d="M8 7.88c.52 0 1.02-.01 1.5-.04V3.75h-3v4.09c.48.02.98.04 1.5.04"
      />
    </svg>
  );
}

function Xrp() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
    >
      <g fill="none">
        <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
        <path
          fill="currentColor"
          d="M6.06 3.94a1.5 1.5 0 1 0-2.12 2.12l4.17 4.172a5.5 5.5 0 0 0 7.78 0l4.17-4.171a1.5 1.5 0 0 0-2.12-2.122l-4.172 4.172a2.5 2.5 0 0 1-3.536 0L6.061 3.939Zm0 16.12a1.5 1.5 0 0 1-2.12-2.12l4.17-4.172a5.5 5.5 0 0 1 7.78 0l4.17 4.171a1.5 1.5 0 0 1-2.12 2.122l-4.172-4.172a2.5 2.5 0 0 0-3.536 0l-4.171 4.172Z"
        />
      </g>
    </svg>
  );
}
function Solana() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 16 16"
    >
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M2.45 6.76h9.59c.12 0 .23.05.32.14l1.52 1.56c.28.29.08.78-.32.78H3.97c-.12 0-.23-.05-.32-.14L2.13 7.54c-.28-.29-.08-.78.32-.78m-.32-2.07l1.52-1.56c.08-.09.2-.14.32-.14h9.58c.4 0 .6.49.32.78l-1.51 1.56c-.08.09-.2.14-.32.14H2.45c-.4 0-.6-.49-.32-.78m11.74 6.61l-1.52 1.56c-.09.09-.2.14-.32.14H2.45c-.4 0-.6-.49-.32-.78l1.52-1.56c.08-.09.2-.14.32-.14h9.58c.4 0 .6.49.32.78"
      />
    </svg>
  );
}
function Polkadot() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M12 0c2.39 0 4.328 1.127 4.328 2.517S14.39 5.034 12 5.034S7.672 3.907 7.672 2.517S9.61 0 12 0m0 18.966c2.39 0 4.328 1.127 4.328 2.517S14.39 24 12 24s-4.328-1.127-4.328-2.517S9.61 18.966 12 18.966M1.606 6C2.8 3.93 4.747 2.816 5.952 3.511s1.212 2.937.017 5.007s-3.141 3.182-4.345 2.489S.411 8.07 1.606 6m16.427 9.483c1.2-2.07 3.139-3.184 4.343-2.489s1.211 2.936.016 5.006s-3.14 3.185-4.344 2.49s-1.211-2.937-.015-5.007m-16.409-2.49c1.205-.7 3.15.419 4.346 2.489s1.187 4.311-.018 5.007S2.8 20.07 1.607 18s-1.187-4.311.017-5.007m16.425-9.481c1.2-.695 3.149.419 4.344 2.489s1.188 4.311-.016 5.007s-3.148-.42-4.343-2.49s-1.188-4.311.015-5.006"
      />
    </svg>
  );
}
function Litecoin() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="75%"
      height="100%"
      viewBox="0 0 384 512"
    >
      <path
        fill="currentColor"
        d="M128 64c0-17.7-14.3-32-32-32S64 46.3 64 64v149.6l-40.8 11.6c-17 4.9-26.8 22.6-22 39.6s22.6 26.8 39.6 22l23.2-6.7V448c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32s-14.3-32-32-32H128V261.9l136.8-39.1c17-4.9 26.8-22.6 22-39.6s-22.6-26.8-39.6-22L128 195.3z"
      />
    </svg>
  );
}
function Stellar() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M12.283 1.851A10.154 10.154 0 0 0 1.846 12.002c0 .259.01.516.03.773A1.847 1.847 0 0 1 .872 14.56L0 15.005v2.074l2.568-1.309l.832-.424l.82-.417l14.71-7.496l1.653-.842L24 4.85V2.776l-3.387 1.728l-2.89 1.473l-13.955 7.108a8.376 8.376 0 0 1-.07-1.086a8.313 8.313 0 0 1 12.366-7.247l1.654-.843l.247-.126a10.154 10.154 0 0 0-5.682-1.932M24 6.925L5.055 16.571l-1.653.844L0 19.15v2.072L3.378 19.5l2.89-1.473l13.97-7.117a8.474 8.474 0 0 1 .07 1.092A8.313 8.313 0 0 1 7.93 19.248l-.101.054l-1.793.914a10.154 10.154 0 0 0 16.119-8.214c0-.26-.01-.522-.03-.78a1.848 1.848 0 0 1 1.003-1.785L24 8.992Z"
      />
    </svg>
  );
}
function BitcoinCash() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="m10.84 11.22l-.688-2.568c.728-.18 2.839-1.051 3.39.506c.27 1.682-1.978 1.877-2.702 2.062m.289 1.313l.755 2.829c.868-.228 3.496-.46 3.241-2.351c-.433-1.666-3.125-.706-3.996-.478M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12S5.373 0 12 0s12 5.373 12 12m-6.341.661c-.183-1.151-1.441-2.095-2.485-2.202c.643-.57.969-1.401.57-2.488c-.603-1.368-1.989-1.66-3.685-1.377l-.546-2.114l-1.285.332l.536 2.108c-.338.085-.685.158-1.029.256L9.198 5.08l-1.285.332l.545 2.114c-.277.079-2.595.673-2.595.673l.353 1.377s.944-.265.935-.244c.524-.137.771.125.886.372l1.498 5.793c.018.168-.012.454-.372.551c.021.012-.935.241-.935.241l.14 1.605s2.296-.588 2.598-.664l.551 2.138l1.285-.332l-.551-2.153c.353-.082.697-.168 1.032-.256l.548 2.141l1.285-.332l-.551-2.135c1.982-.482 3.38-1.73 3.094-3.64"
      />
    </svg>
  );
}
