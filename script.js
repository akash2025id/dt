const doctors = [
  {
    name: "Dr. Mohsena Khanam",
    photo: "https://png.pngtree.com/png-vector/20230715/ourmid/pngtree-female-doctor-avatar-vector-design-png-image_7642475.png",
    degree: "MBBS (Dhaka), BCS (ENT), FCPS (ENT)",
    specialist: "ENT, Ear, Nose, and Throat",
    hospital: "Dhaka Medical College",
    diseases: "Ear discharge, hearing loss, sore throat, sinus, tonsil, thyroid",
    fee: "New: ৳600 | Old: ৳500",
    chamber: "Bushra hospital - call : 017471605101",
    schedule: "Everyday. (10:30AM - 11:30PM)"
  },
  {
    name: "Dr. Manosh Kumer Mondal",
    photo: "https://png.pngtree.com/png-clipart/20220911/original/pngtree-male-doctor-avatar-icon-illustration-png-image_8537702.png",
    degree: "Maybe Coming later...",
    specialist: "Medicine Specialist",
    hospital: "Satkhira Medical College",
    diseases: "Medicine related treatment",
    fee: "New: ৳৫০০ | Old: ৳৩০০",
    chamber: "Bushra hospital - call : 017471605101",
    schedule: "শনি-শুক্রবার (সকাল ৭:০০AM ও দুপুর ২:০০PM)"
  },
  {
    name: "Dr. Sharmin Feroz",
    photo: "https://png.pngtree.com/png-vector/20230715/ourmid/pngtree-female-doctor-avatar-vector-design-png-image_7642475.png",
    degree: "Maybe Coming later...",
    specialist: "Gynecologist",
    hospital: "Satkhira Medical College",
    diseases: "Pregnancy care, infertility, PCOS",
    fee: "New: ৳600 | Old: ৳500",
    chamber: "Bushra hospital - call : 017471605101",
    schedule: "Sun to Sat (08:00AM - 11:00PM)",
	call: "017471605101"
  },
  
  {
    name: "Dr. Shoriful Alam (Sohel).",
    photo: "https://png.pngtree.com/png-vector/20230715/ourmid/pngtree-female-doctor-avatar-vector-design-png-image_7642475.png",
    degree: "Maybe Coming later...",
    specialist: "Gynecologist",
    hospital: "Satkhira Medical College",
    diseases: "Pregnancy care, infertility, PCOS",
    fee: "New: ৳600 | Old: ৳500",
    chamber: "Bushra hospital - call : 017471605101",
    schedule: "Sun to Sat (08:00AM - 11:00PM)",
	call: "017471605101"
  },
  {
    name: "Dr. Shoriful Islam.",
    photo: "https://png.pngtree.com/png-vector/20230715/ourmid/pngtree-female-doctor-avatar-vector-design-png-image_7642475.png",
    degree: "Maybe Coming later...",
    specialist: "Gynecologist",
    hospital: "Satkhira Medical College",
    diseases: "Pregnancy care, infertility, PCOS",
    fee: "New: ৳600 | Old: ৳500",
    chamber: "Bushra hospital - call : 017471605101",
    schedule: "Sun to Sat (08:00AM - 11:00PM)",
	call: "017471605101"
  },
  {
    name: "Dr. Monower Hossen.",
    photo: "https://png.pngtree.com/png-vector/20230715/ourmid/pngtree-female-doctor-avatar-vector-design-png-image_7642475.png",
    degree: "Maybe Coming later...",
    specialist: "Gynecologist",
    hospital: "Satkhira Medical College",
    diseases: "Pregnancy care, infertility, PCOS",
    fee: "New: ৳600 | Old: ৳500",
    chamber: "Bushra hospital - call : 017471605101",
    schedule: "Sun to Sat (08:00AM - 11:00PM)",
	call: "017471605101"
  },
  {
    name: "Dr. MD. Ahsanul Islam Kallol.",
    photo: "https://png.pngtree.com/png-vector/20230715/ourmid/pngtree-female-doctor-avatar-vector-design-png-image_7642475.png",
    degree: "Maybe Coming later...",
    specialist: "Gynecologist",
    hospital: "Satkhira Medical College",
    diseases: "Pregnancy care, infertility, PCOS",
    fee: "New: ৳600 | Old: ৳500",
    chamber: "Bushra hospital - call : 017471605101",
    schedule: "Sun to Sat (08:00AM - 11:00PM)",
	call: "017471605101"
  },
  {
    name: "Dr. MD. Asaduzzaman.",
    photo: "https://png.pngtree.com/png-vector/20230715/ourmid/pngtree-female-doctor-avatar-vector-design-png-image_7642475.png",
    degree: "Maybe Coming later...",
    specialist: "Gynecologist",
    hospital: "Satkhira Medical College",
    diseases: "Pregnancy care, infertility, PCOS",
    fee: "New: ৳600 | Old: ৳500",
    chamber: "Bushra hospital - call : 017471605101",
    schedule: "Sun to Sat (08:00AM - 11:00PM)",
	call: "017471605101"
  },
  
  {
    name: "Dr. Probir Kumer Das.",
    photo: "https://png.pngtree.com/png-vector/20230715/ourmid/pngtree-female-doctor-avatar-vector-design-png-image_7642475.png",
    degree: "Maybe Coming later...",
    specialist: "Gynecologist",
    hospital: "Satkhira Medical College",
    diseases: "Pregnancy care, infertility, PCOS",
    fee: "New: ৳600 | Old: ৳500",
    chamber: "Bushra hospital - call : 017471605101",
    schedule: "Sun to Sat (08:00AM - 11:00PM)",
	call: "017471605101"
  },
  {
    name: "Dr. Enamul Hafiz Polash.",
    photo: "https://png.pngtree.com/png-vector/20230715/ourmid/pngtree-female-doctor-avatar-vector-design-png-image_7642475.png",
    degree: "Maybe Coming later...",
    specialist: "Gynecologist",
    hospital: "Satkhira Medical College",
    diseases: "Pregnancy care, infertility, PCOS",
    fee: "New: ৳600 | Old: ৳500",
    chamber: "Bushra hospital - call : 017471605101",
    schedule: "Sun to Sat (08:00AM - 11:00PM)",
	call: "017471605101"
  },
  {
    name: "Dr. GM. Alamgir Kabir.",
    photo: "https://png.pngtree.com/png-vector/20230715/ourmid/pngtree-female-doctor-avatar-vector-design-png-image_7642475.png",
    degree: "Maybe Coming later...",
    specialist: "Gynecologist",
    hospital: "Satkhira Medical College",
    diseases: "Pregnancy care, infertility, PCOS",
    fee: "New: ৳600 | Old: ৳500",
    chamber: "Bushra hospital - call : 017471605101",
    schedule: "Sun to Sat (08:00AM - 11:00PM)",
	call: "017471605101"
  },
  {
    name: "DR. Md. Mehedi Hasan.",
    photo: "https://png.pngtree.com/png-vector/20230715/ourmid/pngtree-female-doctor-avatar-vector-design-png-image_7642475.png",
    degree: "Maybe Coming later...",
    specialist: "Gynecologist",
    hospital: "Satkhira Medical College",
    diseases: "Pregnancy care, infertility, PCOS",
    fee: "New: ৳600 | Old: ৳500",
    chamber: "Bushra hospital - call : 017471605101",
    schedule: "Sun to Sat (08:00AM - 11:00PM)",
	call: "017471605101"
  },
  {
    name: "Dr. Suman Kumer Das.",
    photo: "https://png.pngtree.com/png-vector/20230715/ourmid/pngtree-female-doctor-avatar-vector-design-png-image_7642475.png",
    degree: "Maybe Coming later...",
    specialist: "Gynecologist",
    hospital: "Satkhira Medical College",
    diseases: "Pregnancy care, infertility, PCOS",
    fee: "New: ৳600 | Old: ৳500",
    chamber: "Bushra hospital - call : 017471605101",
    schedule: "Sun to Sat (08:00AM - 11:00PM)",
	call: "017471605101"
  },
  {
    name: "Dr. Ahsanul Kobir Shahin.",
    photo: "https://png.pngtree.com/png-vector/20230715/ourmid/pngtree-female-doctor-avatar-vector-design-png-image_7642475.png",
    degree: "Maybe Coming later...",
    specialist: "Gynecologist",
    hospital: "Satkhira Medical College",
    diseases: "Pregnancy care, infertility, PCOS",
    fee: "New: ৳600 | Old: ৳500",
    chamber: "Bushra hospital - call : 017471605101",
    schedule: "Sun to Sat (08:00AM - 11:00PM)",
	call: "017471605101"
  },
  {
    name: "Dr. Humayan Kabir Apu.",
    photo: "https://png.pngtree.com/png-vector/20230715/ourmid/pngtree-female-doctor-avatar-vector-design-png-image_7642475.png",
    degree: "Maybe Coming later...",
    specialist: "Gynecologist",
    hospital: "Satkhira Medical College",
    diseases: "Pregnancy care, infertility, PCOS",
    fee: "New: ৳600 | Old: ৳500",
    chamber: "Bushra hospital - call : 017471605101",
    schedule: "Sun to Sat (08:00AM - 11:00PM)",
	call: "017471605101"
  },
  {
    name: "Dr. Raseduzaman.",
    photo: "https://png.pngtree.com/png-vector/20230715/ourmid/pngtree-female-doctor-avatar-vector-design-png-image_7642475.png",
    degree: "Maybe Coming later...",
    specialist: "Gynecologist",
    hospital: "Satkhira Medical College",
    diseases: "Pregnancy care, infertility, PCOS",
    fee: "New: ৳600 | Old: ৳500",
    chamber: "Bushra hospital - call : 017471605101",
    schedule: "Sun to Sat (08:00AM - 11:00PM)",
	call: "017471605101"
  },
  {
    name: "DR. Romiz Ahmed.",
    photo: "https://png.pngtree.com/png-vector/20230715/ourmid/pngtree-female-doctor-avatar-vector-design-png-image_7642475.png",
    degree: "Maybe Coming later...",
    specialist: "Gynecologist",
    hospital: "Satkhira Medical College",
    diseases: "Pregnancy care, infertility, PCOS",
    fee: "New: ৳600 | Old: ৳500",
    chamber: "Bushra hospital - call : 017471605101",
    schedule: "Sun to Sat (08:00AM - 11:00PM)",
	call: "017471605101"
  },
  {
    name: "Dr. Ashraful Islam.",
    photo: "https://png.pngtree.com/png-vector/20230715/ourmid/pngtree-female-doctor-avatar-vector-design-png-image_7642475.png",
    degree: "Maybe Coming later...",
    specialist: "Gynecologist",
    hospital: "Satkhira Medical College",
    diseases: "Pregnancy care, infertility, PCOS",
    fee: "New: ৳600 | Old: ৳500",
    chamber: "Bushra hospital - call : 017471605101",
    schedule: "Sun to Sat (08:00AM - 11:00PM)",
	call: "017471605101"
  },
  {
    name: "Dr. Nur Mohammod.",
    photo: "https://png.pngtree.com/png-vector/20230715/ourmid/pngtree-female-doctor-avatar-vector-design-png-image_7642475.png",
    degree: "Maybe Coming later...",
    specialist: "Gynecologist",
    hospital: "Satkhira Medical College",
    diseases: "Pregnancy care, infertility, PCOS",
    fee: "New: ৳600 | Old: ৳500",
    chamber: "Bushra hospital - call : 017471605101",
    schedule: "Sun to Sat (08:00AM - 11:00PM)",
	call: "017471605101"
  },{
    name: "Dr. Afjalul basar.",
    photo: "https://png.pngtree.com/png-vector/20230715/ourmid/pngtree-female-doctor-avatar-vector-design-png-image_7642475.png",
    degree: "Maybe Coming later...",
    specialist: "Gynecologist",
    hospital: "Satkhira Medical College",
    diseases: "Pregnancy care, infertility, PCOS",
    fee: "New: ৳600 | Old: ৳500",
    chamber: "Bushra hospital - call : 017471605101",
    schedule: "Sun to Sat (08:00AM - 11:00PM)",
	call: "017471605101"
  },
  {
    name: "Dr. GM. Faruquzzaman.",
    photo: "https://png.pngtree.com/png-vector/20230715/ourmid/pngtree-female-doctor-avatar-vector-design-png-image_7642475.png",
    degree: "Maybe Coming later...",
    specialist: "Gynecologist",
    hospital: "Satkhira Medical College",
    diseases: "Pregnancy care, infertility, PCOS",
    fee: "New: ৳600 | Old: ৳500",
    chamber: "Bushra hospital - call : 017471605101",
    schedule: "Sun to Sat (08:00AM - 11:00PM)",
	call: "017471605101"
  },
  {
    name: "Dr. Zahidul Islam.",
    photo: "https://png.pngtree.com/png-vector/20230715/ourmid/pngtree-female-doctor-avatar-vector-design-png-image_7642475.png",
    degree: "Maybe Coming later...",
    specialist: "Gynecologist",
    hospital: "Satkhira Medical College",
    diseases: "Pregnancy care, infertility, PCOS",
    fee: "New: ৳600 | Old: ৳500",
    chamber: "Bushra hospital - call : 017471605101",
    schedule: "Sun to Sat (08:00AM - 11:00PM)",
	call: "017471605101"
  },
  {
    name: "Dr. Musaddik Hossen Khan.",
    photo: "https://png.pngtree.com/png-vector/20230715/ourmid/pngtree-female-doctor-avatar-vector-design-png-image_7642475.png",
    degree: "Maybe Coming later...",
    specialist: "Gynecologist",
    hospital: "Satkhira Medical College",
    diseases: "Pregnancy care, infertility, PCOS",
    fee: "New: ৳600 | Old: ৳500",
    chamber: "Bushra hospital - call : 017471605101",
    schedule: "Sun to Sat (08:00AM - 11:00PM)",
	call: "017471605101"
  },
  {
    name: "Dr. Nasir Uddin.",
    photo: "https://png.pngtree.com/png-vector/20230715/ourmid/pngtree-female-doctor-avatar-vector-design-png-image_7642475.png",
    degree: "Maybe Coming later...",
    specialist: "Gynecologist",
    hospital: "Satkhira Medical College",
    diseases: "Pregnancy care, infertility, PCOS",
    fee: "New: ৳600 | Old: ৳500",
    chamber: "Bushra hospital - call : 017471605101",
    schedule: "Sun to Sat (08:00AM - 11:00PM)",
	call: "017471605101"
  },
  {
    name: "Dr. Ahad Murshid.",
    photo: "https://png.pngtree.com/png-vector/20230715/ourmid/pngtree-female-doctor-avatar-vector-design-png-image_7642475.png",
    degree: "Maybe Coming later...",
    specialist: "Gynecologist",
    hospital: "Satkhira Medical College",
    diseases: "Pregnancy care, infertility, PCOS",
    fee: "New: ৳600 | Old: ৳500",
    chamber: "Bushra hospital - call : 017471605101",
    schedule: "Sun to Sat (08:00AM - 11:00PM)",
	call: "017471605101"
  },
  {
    name: "Dr. Abu Sayeed Shuvo.",
    photo: "https://png.pngtree.com/png-vector/20230715/ourmid/pngtree-female-doctor-avatar-vector-design-png-image_7642475.png",
    degree: "Maybe Coming later...",
    specialist: "Gynecologist",
    hospital: "Satkhira Medical College",
    diseases: "Pregnancy care, infertility, PCOS",
    fee: "New: ৳600 | Old: ৳500",
    chamber: "Bushra hospital - call : 017471605101",
    schedule: "Sun to Sat (08:00AM - 11:00PM)",
	call: "017471605101"
  },
  {
    name: "Dr. Ashim Kumer Das.",
    photo: "https://png.pngtree.com/png-vector/20230715/ourmid/pngtree-female-doctor-avatar-vector-design-png-image_7642475.png",
    degree: "Maybe Coming later...",
    specialist: "Gynecologist",
    hospital: "Satkhira Medical College",
    diseases: "Pregnancy care, infertility, PCOS",
    fee: "New: ৳600 | Old: ৳500",
    chamber: "Bushra hospital - call : 017471605101",
    schedule: "Sun to Sat (08:00AM - 11:00PM)",
	call: "017471605101"
  },
  {
    name: "Dr. Birendra Nath Saha.",
    photo: "https://png.pngtree.com/png-vector/20230715/ourmid/pngtree-female-doctor-avatar-vector-design-png-image_7642475.png",
    degree: "Maybe Coming later...",
    specialist: "Gynecologist",
    hospital: "Satkhira Medical College",
    diseases: "Pregnancy care, infertility, PCOS",
    fee: "New: ৳600 | Old: ৳500",
    chamber: "Bushra hospital - call : 017471605101",
    schedule: "Sun to Sat (08:00AM - 11:00PM)",
	call: "017471605101"
  },
  {
    name: "Dr. Shamim Hossen.",
    photo: "https://png.pngtree.com/png-vector/20230715/ourmid/pngtree-female-doctor-avatar-vector-design-png-image_7642475.png",
    degree: "Maybe Coming later...",
    specialist: "Gynecologist",
    hospital: "Satkhira Medical College",
    diseases: "Pregnancy care, infertility, PCOS",
    fee: "New: ৳600 | Old: ৳500",
    chamber: "Bushra hospital - call : 017471605101",
    schedule: "Sun to Sat (08:00AM - 11:00PM)",
	call: "017471605101"
  }
  
  
 
  
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

  // ✅ fixedCard ডিভটি লুকানো হবে এখানে
  const fixedCardEl = document.getElementById('fixedCard');
  if (fixedCardEl) {
    fixedCardEl.style.display = 'none';
  }
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

    <button onclick="showDoctorList()" style="margin-top:20px;padding:10px 20px;background:#00695c;color:white;border:none;border-radius:5px;cursor:pointer;">← সকল ডাক্তার দেখুন</button>

    <div class="related-doctors">
      <h3>অন্যান্য ডাক্তারগণ</h3>
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

  window.scrollTo({ top: 135, behavior: 'smooth' });
  window.location.hash = `doctor-${index}`;
}

// 👉 Ensure the correct doctor is shown if URL has a hash
window.addEventListener('load', () => {
  const hash = window.location.hash;
  if (hash && hash.startsWith('#doctor-')) {
    const index = parseInt(hash.split('-')[1]);
    if (!isNaN(index)) {
      showDoctorDetails(index);
      return;
    }
  }
  showDoctorList();
});
