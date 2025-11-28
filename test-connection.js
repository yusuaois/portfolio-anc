// test-connection.js (放在项目根目录)
const { createClient } = require("@sanity/client");

const client = createClient({
  projectId: "tulhd6kl",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

async function test() {
  try {
    const count = await client.fetch("count(*)");
    console.log("✅ Sanity connection successful. Total documents:", count);

    const projects = await client.fetch('*[_type == "project"]{_id, title}');
    console.log("📁 Projects found:", projects.length);
    projects.forEach((proj) => console.log(` - ${proj.title} (${proj._id})`));
  } catch (error) {
    console.log("❌ Sanity connection failed:", error.message);
  }
}

test();
