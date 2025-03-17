// ✅ عند إرسال النموذج، يتم حفظ البيانات في LocalStorage
document.getElementById("cvForm").addEventListener("submit", function(event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة

    // ✅ جلب القيم من النموذج
    const cvData = {
        fullName: document.getElementById("fullName").value,
        jobTitle: document.getElementById("jobTitle").value,
        summary: document.getElementById("summary").value,
        experience: document.getElementById("experience").value,
        education: document.getElementById("education").value,
        skills: document.getElementById("skills").value
    };

    // ✅ حفظ البيانات في LocalStorage
    localStorage.setItem("cvData", JSON.stringify(cvData));

    // ✅ تحديث العرض
    displayCV();

    // ✅ تنبيه بحفظ البيانات
    alert("✅ تم حفظ السيرة الذاتية بنجاح!");
});

// ✅ استرجاع البيانات المخزنة عند تحميل الصفحة
function displayCV() {
    const savedData = localStorage.getItem("cvData");

    if (savedData) {
        const cvData = JSON.parse(savedData);

        document.getElementById("outputName").textContent = cvData.fullName;
        document.getElementById("outputJob").textContent = cvData.jobTitle;
        document.getElementById("outputSummary").textContent = cvData.summary;
        document.getElementById("outputExperience").textContent = cvData.experience;
        document.getElementById("outputEducation").textContent = cvData.education;
        document.getElementById("outputSkills").textContent = cvData.skills;
    }
}

// ✅ تنفيذ عرض البيانات عند تحميل الصفحة
window.onload = displayCV;
