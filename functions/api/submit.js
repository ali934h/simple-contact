export async function onRequestPost({ request }) {
  const data = await request.json();
  const name = data.name;

  // می‌توانی این داده‌ها را در یک سرویس خارجی ذخیره کنی
  console.log("Name submitted:", name);

  return new Response(JSON.stringify({ message: "Name submitted successfully" }), {
    headers: { "Content-Type": "application/json" },
  });
}
