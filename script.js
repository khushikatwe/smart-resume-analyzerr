const skills = {
  frontend: ["html", "css", "javascript", "react"],
  data: ["python", "excel", "sql", "statistics"],
  cloud: ["aws", "linux", "docker", "networking"]
};

function analyze() {
  const file = document.getElementById("resume").files[0];
  const role = document.getElementById("role").value;

  if (!file) {
    alert("Upload resume first!");
    return;
  }

  const reader = new FileReader();
  reader.onload = function () {
    const text = reader.result.toLowerCase();
    const required = skills[role];
    let matched = required.filter(skill => text.includes(skill));

    let percent = Math.round((matched.length / required.length) * 100);

    document.getElementById("result").innerHTML = `
      <p>✅ Match: <b>${percent}%</b></p>
      <p>🛠 Missing: ${required.filter(s => !matched.includes(s)).join(", ")}</p>
      <p>💡 Tip: Add missing skills to improve resume</p>
    `;
  };
  reader.readAsText(file);
}
