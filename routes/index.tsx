import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <div class="bg-base-200">
      <Hero />
      <Content />
    </div>
  );
}

function Content() {
  return (
    <div className="container prose">
      <h1>About us</h1>
      <p>
        We provide start to finish website development. Now, everything from
        software programming to logo design and content creation can all be done
        in one place. No matter whether you are looking to start a new website
        or update/enhance an existing one, we are the IT professionals for the
        job. We specialize in Responsive Web Design, Multilingual SEO, and a
        variety of programming software including, but not limited to, Haskell,
        Elm, Ruby on Rails, JavaScript.
      </p>
      <p>
        We pride ourselves in creating websites perfect for today’s mobile
        viewing platforms. Some of our products include online stores, updatable
        websites with easy content management systems which give you the freedom
        to update and modify content yourself, as well as web apps, mobile apps,
        and more. To fit the needs of the global work environment, our content
        services can write your website content in English, Chinese, or Russian.
      </p>
    </div>
  );
}

function Hero() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-xl bg-base-200 bg-opacity-20 rounded">
          <h1 className="text-5xl font-bold">Помогаем Бизнесу Технологично</h1>
          <p className="py-6">
            весь потенциал блокчейн технологий для вашего бизнеса
          </p>
          <button className="btn btn-primary">Разработка dApp</button>
        </div>
      </div>
      <video
        autoPlay=""
        loop=""
        muted=""
        class="w-auto min-w-full min-h-full max-w-none"
      >
        <source src="video1080.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
