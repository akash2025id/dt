<!-- script.js -->
const doctors = [
  {
    name: "Dr. Mohsena Khanam",
    photo: "https://png.pngtree.com/png-vector/20230715/ourmid/pngtree-female-doctor-avatar-vector-design-png-image_7642475.png",
    degree: "MBBS (Dhaka), DCS (ENT), FCPS (ENT)",
    specialist: "ENT, Ear, Nose, and Throat",
    hospital: "Shaheed Suhrawardy Medical College",
    diseases: "Ear discharge, hearing loss, sore throat, sinus, tonsil, thyroid",
    fee: "New: ৳700 | Old: ৳500",
    chamber: "Alok Healthcare, Dhanmondi",
    schedule: "Sun, Tue, Thu (4:00PM - 7:30PM)"
  },
  {
    name: "Dr. Manosh Kumer Mondal",
    photo: "https://png.pngtree.com/png-clipart/20220911/original/pngtree-male-doctor-avatar-icon-illustration-png-image_8537702.png",
    degree: "MBBS, BCS (MD)",
    specialist: "Medicine Specialist",
    hospital: "Satkhira Medical College",
    diseases: "Medicine related treatment",
    fee: "New: ৳৫০০ | Old: ৳৩০০",
    chamber: "Satkhira Bushra hospital.",
    schedule: "শনি-শুক্রবার (সকাল 7:00AM ও দুপুর 2:00PM)"
  },
  {
    name: "Dr. Fahmida Yasmin",
    photo: "https://png.pngtree.com/png-vector/20230715/ourmid/pngtree-female-doctor-avatar-vector-design-png-image_7642475.png",
    degree: "MBBS, FCPS (Gynecology)",
    specialist: "Gynecologist",
    hospital: "Popular Medical College",
    diseases: "Pregnancy care, infertility, PCOS",
    fee: "New: ৳600 | Old: ৳400",
    chamber: "Labaid Dhanmondi",
    schedule: "Sun to Wed (10:00AM - 1:00PM)"
  },
  
  
  {
    name: "Dr.",
    photo: "https://png.pngtree.com/png-clipart/20220911/original/pngtree-male-doctor-avatar-icon-illustration-png-image_8537702.png",
    degree: "MBBS, MS (ENT)",
    specialist: " Specialist",
    hospital: " Medical College",
    diseases: " related treatment",
    fee: "New: ৳ | Old: ৳ ",
    chamber: " Hospital",
    schedule: "Mon, Wed, Sat (3:00PM - 6:00PM)"
  },
  
  {
    name: "Dr.",
    photo: "https://png.pngtree.com/png-clipart/20220911/original/pngtree-male-doctor-avatar-icon-illustration-png-image_8537702.png",
    degree: "MBBS, MS (ENT)",
    specialist: " Specialist",
    hospital: " Medical College",
    diseases: " related treatment",
    fee: "New: ৳ | Old: ৳ ",
    chamber: " Hospital",
    schedule: "Mon, Wed, Sat (3:00PM - 6:00PM)"
  },
  
  {
    name: "Dr.",
    photo: "https://png.pngtree.com/png-clipart/20220911/original/pngtree-male-doctor-avatar-icon-illustration-png-image_8537702.png",
    degree: "MBBS, MS (ENT)",
    specialist: " Specialist",
    hospital: " Medical College",
    diseases: " related treatment",
    fee: "New: ৳ | Old: ৳ ",
    chamber: " Hospital",
    schedule: "Mon, Wed, Sat (3:00PM - 6:00PM)"
  },
  
  {
    name: "Dr.",
    photo: "https://png.pngtree.com/png-clipart/20220911/original/pngtree-male-doctor-avatar-icon-illustration-png-image_8537702.png",
    degree: "MBBS, MS (ENT)",
    specialist: " Specialist",
    hospital: " Medical College",
    diseases: " related treatment",
    fee: "New: ৳ | Old: ৳ ",
    chamber: " Hospital",
    schedule: "Mon, Wed, Sat (3:00PM - 6:00PM)"
  },
  
  {
    name: "Dr.",
    photo: "https://png.pngtree.com/png-clipart/20220911/original/pngtree-male-doctor-avatar-icon-illustration-png-image_8537702.png",
    degree: "MBBS, MS (ENT)",
    specialist: " Specialist",
    hospital: " Medical College",
    diseases: " related treatment",
    fee: "New: ৳ | Old: ৳ ",
    chamber: " Hospital",
    schedule: "Mon, Wed, Sat (3:00PM - 6:00PM)"
  },
  
  {
    name: "Dr.",
    photo: "https://png.pngtree.com/png-clipart/20220911/original/pngtree-male-doctor-avatar-icon-illustration-png-image_8537702.png",
    degree: "MBBS, MS (ENT)",
    specialist: " Specialist",
    hospital: " Medical College",
    diseases: " related treatment",
    fee: "New: ৳ | Old: ৳ ",
    chamber: " Hospital",
    schedule: "Mon, Wed, Sat (3:00PM - 6:00PM)"
  },
  
  {
    name: "Dr.",
    photo: "https://png.pngtree.com/png-clipart/20220911/original/pngtree-male-doctor-avatar-icon-illustration-png-image_8537702.png",
    degree: "MBBS, MS (ENT)",
    specialist: " Specialist",
    hospital: " Medical College",
    diseases: " related treatment",
    fee: "New: ৳ | Old: ৳ ",
    chamber: " Hospital",
    schedule: "Mon, Wed, Sat (3:00PM - 6:00PM)"
  },
  
  {
    name: "Dr.",
    photo: "https://png.pngtree.com/png-clipart/20220911/original/pngtree-male-doctor-avatar-icon-illustration-png-image_8537702.png",
    degree: "MBBS, MS (ENT)",
    specialist: " Specialist",
    hospital: " Medical College",
    diseases: " related treatment",
    fee: "New: ৳ | Old: ৳ ",
    chamber: " Hospital",
    schedule: "Mon, Wed, Sat (3:00PM - 6:00PM)"
  },
  
  {
    name: "Dr.",
    photo: "https://png.pngtree.com/png-clipart/20220911/original/pngtree-male-doctor-avatar-icon-illustration-png-image_8537702.png",
    degree: "MBBS, MS (ENT)",
    specialist: " Specialist",
    hospital: " Medical College",
    diseases: " related treatment",
    fee: "New: ৳ | Old: ৳ ",
    chamber: " Hospital",
    schedule: "Mon, Wed, Sat (3:00PM - 6:00PM)"
  },
  
  {
    name: "Dr.",
    photo: "https://png.pngtree.com/png-clipart/20220911/original/pngtree-male-doctor-avatar-icon-illustration-png-image_8537702.png",
    degree: "MBBS, MS (ENT)",
    specialist: " Specialist",
    hospital: " Medical College",
    diseases: " related treatment",
    fee: "New: ৳ | Old: ৳ ",
    chamber: " Hospital",
    schedule: "Mon, Wed, Sat (3:00PM - 6:00PM)"
  },
  
  {
    name: "Dr.",
    photo: "https://png.pngtree.com/png-clipart/20220911/original/pngtree-male-doctor-avatar-icon-illustration-png-image_8537702.png",
    degree: "MBBS, MS (ENT)",
    specialist: " Specialist",
    hospital: " Medical College",
    diseases: " related treatment",
    fee: "New: ৳ | Old: ৳ ",
    chamber: " Hospital",
    schedule: "Mon, Wed, Sat (3:00PM - 6:00PM)"
  },
  
  {
    name: "Dr.",
    photo: "https://png.pngtree.com/png-clipart/20220911/original/pngtree-male-doctor-avatar-icon-illustration-png-image_8537702.png",
    degree: "MBBS, MS (ENT)",
    specialist: " Specialist",
    hospital: " Medical College",
    diseases: " related treatment",
    fee: "New: ৳ | Old: ৳ ",
    chamber: " Hospital",
    schedule: "Mon, Wed, Sat (3:00PM - 6:00PM)"
  },
  
  {
    name: "Dr.",
    photo: "https://png.pngtree.com/png-clipart/20220911/original/pngtree-male-doctor-avatar-icon-illustration-png-image_8537702.png",
    degree: "MBBS, MS (ENT)",
    specialist: " Specialist",
    hospital: " Medical College",
    diseases: " related treatment",
    fee: "New: ৳ | Old: ৳ ",
    chamber: " Hospital",
    schedule: "Mon, Wed, Sat (3:00PM - 6:00PM)"
  },
  
  {
    name: "Dr.",
    photo: "https://png.pngtree.com/png-clipart/20220911/original/pngtree-male-doctor-avatar-icon-illustration-png-image_8537702.png",
    degree: "MBBS, MS (ENT)",
    specialist: " Specialist",
    hospital: " Medical College",
    diseases: " related treatment",
    fee: "New: ৳ | Old: ৳ ",
    chamber: " Hospital",
    schedule: "Mon, Wed, Sat (3:00PM - 6:00PM)"
  },
  
  {
    name: "Dr.",
    photo: "https://png.pngtree.com/png-clipart/20220911/original/pngtree-male-doctor-avatar-icon-illustration-png-image_8537702.png",
    degree: "MBBS, MS (ENT)",
    specialist: " Specialist",
    hospital: " Medical College",
    diseases: " related treatment",
    fee: "New: ৳ | Old: ৳ ",
    chamber: " Hospital",
    schedule: "Mon, Wed, Sat (3:00PM - 6:00PM)"
  },
  
  {
    name: "Dr.",
    photo: "https://png.pngtree.com/png-clipart/20220911/original/pngtree-male-doctor-avatar-icon-illustration-png-image_8537702.png",
    degree: "MBBS, MS (ENT)",
    specialist: " Specialist",
    hospital: " Medical College",
    diseases: " related treatment",
    fee: "New: ৳ | Old: ৳ ",
    chamber: " Hospital",
    schedule: "Mon, Wed, Sat (3:00PM - 6:00PM)"
  },
  
  
];

const doctorCardsEl = document.getElementById("doctor-cards");
const doctorDetailsEl = document.getElementById("doctor-details");

function showDoctorList() {
  doctorCardsEl.innerHTML = '';
  doctorDetailsEl.innerHTML = '';
  doctors.forEach((doctor, index) => {
    doctorCardsEl.innerHTML += `
      <div class="doctor-card-simple" onclick="showDoctorDetails(${index})">
        <img src="${doctor.photo}" alt="${doctor.name}" class="doctor-image">
        <div>
          <h2>${doctor.name}</h2>
          <p>${doctor.specialist}</p>
        </div>
      </div>
    `;
  });
}

function showDoctorDetails(index) {
  const doctor = doctors[index];
  doctorCardsEl.innerHTML = '';
  doctorDetailsEl.innerHTML = `
    <div class="doctor-card">
      <div class="doctor-header">
        <img src="${doctor.photo}" alt="Doctor Photo" class="doctor-image">
        <h2>${doctor.name}</h2>
      </div>
      <div class="doctor-details">
        <p><strong>Degree:</strong> ${doctor.degree}</p>
        <p><strong>Specialist:</strong> ${doctor.specialist}</p>
        <p><strong>Hospital:</strong> ${doctor.hospital}</p>
        <p><strong>Diseases Treated:</strong> ${doctor.diseases}</p>
        <p><strong>Fee:</strong> ${doctor.fee}</p>
        <p><strong>Chamber:</strong> ${doctor.chamber}</p>
        <p><strong>Schedule:</strong> ${doctor.schedule}</p>
      </div>
    </div>

    <button onclick="showDoctorList()" style="margin-top:20px;padding:10px 20px;background:#00695c;color:white;border:none;border-radius:5px;cursor:pointer;">← Back to All Doctors</button>

    <div class="related-doctors">
      <h3>Other Doctors</h3>
      <div class="doctor-grid">
        ${doctors.map((doc, i) => i !== index ? `
          <div class="doctor-card-simple" onclick="showDoctorDetails(${i})">
            <img src="${doc.photo}" alt="${doc.name}" class="doctor-image">
            <div>
              <h2>${doc.name}</h2>
              <p>${doc.specialist}</p>
            </div>
          </div>
        ` : '').join('')}
      </div>
    </div>
  `;
}

// Show list on load
showDoctorList();
