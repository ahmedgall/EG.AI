async function send() {
  const input = document.getElementById("input");
  const text = input.value.trim();
  if (!text) return;

  // اضيف رسالة المستخدم
  addMessage(text, 'user');
  input.value = '';

  try {
    // ابعت الرسالة للسيرفر
    const res = await fetch("https://nodejs--ahmodgamal01205.replit.app/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: text })
    });

    const data = await res.json();
    addMessage(data.reply, 'bot');
  } catch (err) {
    console.error(err);
    addMessage("🚫 حصل خطأ في السيرفر", 'bot');
  }
}

function addMessage(text, type) {
  const div = document.createElement("div");
  div.className = "msg " + type;
  div.textContent = text;
  document.getElementById("chat").appendChild(div);
  document.getElementById("chat").scrollTop = document.getElementById("chat").scrollHeight;
}
