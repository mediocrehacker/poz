import { Head } from "$fresh/runtime.ts";

export default function Error404() {
  return (
    <>
      <Head>
        <title>404 - Страница не найдена</title>
      </Head>
      <div class="px-4 py-36 mx-auto">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <h1 class="text-4xl font-bold">404 - Страница не найдеа</h1>
          <p class="my-4">
            Страница, которую вы искали, не существует.
          </p>
          <a href="/" class="underline">Вернуться на главную страницу</a>
        </div>
      </div>
    </>
  );
}
