function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const fullName = document.getElementById("fullName").value;
    const jobTitle = document.getElementById("jobTitle").value;
    const summary = document.getElementById("summary").value;
    const skills = document.getElementById("skills").value;
    const experience = document.getElementById("experience").value;
    const profilePic = document.getElementById("profilePic").files[0];

    // حفظ البيانات تلقائيًا في localStorage
    localStorage.setItem("fullName", fullName);
    localStorage.setItem("jobTitle", jobTitle);
    localStorage.setItem("summary", summary);
    localStorage.setItem("skills", skills);
    localStorage.setItem("experience", experience);

    // إضافة بيانات إلى الـ PDF
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.text(fullName, 20, 20);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(16);
    doc.text(jobTitle, 20, 30);

    doc.setFontSize(14);
    doc.text("نبذة:", 20, 40);
    doc.setFontSize(12);
    doc.text(summary, 20, 50, { maxWidth: 170 });

    doc.setFontSize(14);
    doc.text("المهارات:", 20, 80);
    doc.setFontSize(12);
    doc.text(skills, 20, 90, { maxWidth: 170 });

    doc.setFontSize(14);
    doc.text("الخبرات:", 20, 110);
    doc.setFontSize(12);
    doc.text(experience, 20, 120, { maxWidth: 170 });

    // إضافة صورة شخصية إذا تم تحميلها
    if (profilePic) {
        const reader = new FileReader();
        reader.onload = function (event) {
            const img = new Image();
            img.src = event.target.result;
            img.onload = function () {
                doc.addImage(img, 'JPEG', 150, 20, 40, 40);
                doc.save("CV.pdf");
            };
        };
        reader.readAsDataURL(profilePic);
    } else {
        doc.save("CV.pdf");
    }
}

// استرجاع البيانات المخزنة عند فتح الموقع
window.onload = function () {
    document.getElementById("fullName").value = localStorage.getItem("fullName") || "";
    document.getElementById("jobTitle").value = localStorage.getItem("jobTitle") || "";
    document.getElementById("summary").value = localStorage.getItem("summary") || "";
    document.getElementById("skills").value = localStorage.getItem("skills") || "";
    document.getElementById("experience").value = localStorage.getItem("experience") || "";
};
