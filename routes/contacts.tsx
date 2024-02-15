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

export default function View() {
  return (
    <div className="bg-base-200 py-32 px-4">
      <div className="mx-auto flex flex-col gap-8 max-w-xl">
        <div className="text-sm font-bold text-center">
          <span className="text-primary">#</span>
          <span className=""> Контакты</span>
        </div>
        <h3 className="font-bold text-xl sm:text-2xl md:text-2xl lg:text-center">Задайте ваш вопрос или опишите проект.</h3>
        <Contacts />
          <a href="https://t.me/pozitiveweb3lab" className="link link-accent">Обсуждиение проекта в Telegram</a>
      </div>
    </div>
  );
}
