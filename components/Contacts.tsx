export default function Contacts() {
  return (
    <form method="post" className="flex flex-col gap-4">
      <input type="text" name="name" placeholder="Ваше Имя" className="input input-bordered input-lg w-full" />
      <input required type="email" name="email" placeholder="Ваш Почта" className="input input-bordered input-lg w-full" />
      <textarea required name="message" className="textarea textarea-bordered textarea-lg" placeholder="Напишите Ваше сообщение..."></textarea>
      <button type="submit" className="btn btn-outline btn-primary max-w-36">Отправить</button>
    </form>
  );
}
