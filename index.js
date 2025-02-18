// Hier kannst du pro Skill einen Bildpfad hinterlegen,
// z.B. 'linux': 'certificates/linux_cert.jpg'
const skillImageMap = {
  "linux & bash": "certificates/linux_bash_cert.jpg",
  // Weitere Zuordnungen möglich ...
  // Skills ohne Eintrag erhalten "Zertifikat ist in progress"
};

document.addEventListener("DOMContentLoaded", function () {
  const skillElements = document.querySelectorAll(".skill");
  const modal = document.getElementById("cert-modal");
  const modalImg = document.getElementById("cert-image");
  const modalText = document.getElementById("cert-text");
  const captionText = document.getElementById("caption");
  const closeBtn = document.querySelector(".close");

  // Klick auf Skill -> Bild oder "in progress" anzeigen
  skillElements.forEach((skill) => {
    skill.addEventListener("click", () => {
      const skillName = skill.textContent.trim().toLowerCase();
      const imagePath = skillImageMap[skillName];

      // Überschrift im Modal (z.B. Skill-Name)
      captionText.innerText = skill.textContent.trim();

      if (!imagePath) {
        // Kein Zertifikat hinterlegt -> "in progress"
        modalImg.style.display = "none";
        modalText.style.display = "block";
        modalText.innerText = "Zertifikat ist in progress";
      } else {
        // Zertifikat -> Bild anzeigen, Text ausblenden
        modalImg.style.display = "block";
        modalText.style.display = "none";
        modalImg.src = imagePath;
      }
      modal.style.display = "block";
    });
  });

  // Klick auf das "X" -> Modal schließen
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Klick außerhalb des Modals -> Modal schließen
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
