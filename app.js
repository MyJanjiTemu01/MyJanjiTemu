/* =====================================================
   DEFAULT PROFILES
===================================================== */

const defaultProfiles = {

    Doktor:[
        {
            id:"doktor1",
            name:"Dr. Aiman Hakim",
            role:"Doktor",
            specialization:"Perubatan Am",
            experience:"8 tahun",
            location:"Taiping",
            phone:"05-800 1001",
            image:""
        },
        {
            id:"doktor2",
            name:"Dr. Nur Aisyah",
            role:"Doktor Pakar",
            specialization:"Kesihatan Keluarga",
            experience:"10 tahun",
            location:"Ipoh",
            phone:"05-800 1002",
            image:""
        },
        {
            id:"doktor3",
            name:"Dr. Faris Zulkifli",
            role:"Doktor",
            specialization:"Pemeriksaan Kesihatan",
            experience:"6 tahun",
            location:"Kuala Kangsar",
            phone:"05-800 1003",
            image:""
        },
        {
            id:"doktor4",
            name:"Dr. Siti Hajar",
            role:"Doktor",
            specialization:"Kesihatan Wanita",
            experience:"9 tahun",
            location:"Taiping",
            phone:"05-800 1004",
            image:""
        },
        {
            id:"doktor5",
            name:"Dr. Amirul Syafiq",
            role:"Doktor Pakar",
            specialization:"Kesihatan Dalaman",
            experience:"12 tahun",
            location:"Ipoh",
            phone:"05-800 1005",
            image:""
        },
        {
            id:"doktor6",
            name:"Dr. Hana Sofea",
            role:"Doktor",
            specialization:"Kesihatan Kanak-kanak",
            experience:"7 tahun",
            location:"Kamunting",
            phone:"05-800 1006",
            image:""
        }
    ],

    Peguam:[
        {
            id:"peguam1",
            name:"Peguam Ahmad Rizal",
            role:"Peguam",
            specialization:"Undang-undang Sivil",
            experience:"9 tahun",
            location:"Taiping",
            phone:"05-810 2001",
            image:""
        },
        {
            id:"peguam2",
            name:"Peguam Nur Iman",
            role:"Peguam",
            specialization:"Undang-undang Keluarga",
            experience:"7 tahun",
            location:"Ipoh",
            phone:"05-810 2002",
            image:""
        },
        {
            id:"peguam3",
            name:"Peguam Daniel Lee",
            role:"Peguam Kanan",
            specialization:"Kontrak & Perniagaan",
            experience:"11 tahun",
            location:"Kuala Kangsar",
            phone:"05-810 2003",
            image:""
        },
        {
            id:"peguam4",
            name:"Peguam Aina Rahman",
            role:"Peguam",
            specialization:"Harta & Tanah",
            experience:"6 tahun",
            location:"Taiping",
            phone:"05-810 2004",
            image:""
        },
        {
            id:"peguam5",
            name:"Peguam Hafiz Musa",
            role:"Peguam",
            specialization:"Dokumen Undang-undang",
            experience:"8 tahun",
            location:"Ipoh",
            phone:"05-810 2005",
            image:""
        },
        {
            id:"peguam6",
            name:"Peguam Sarah Tan",
            role:"Peguam Kanan",
            specialization:"Nasihat Korporat",
            experience:"13 tahun",
            location:"Kamunting",
            phone:"05-810 2006",
            image:""
        }
    ],

    Terapi:[
        {
            id:"terapi1",
            name:"Puan Alya Karim",
            role:"Ahli Terapi",
            specialization:"Terapi Individu",
            experience:"7 tahun",
            location:"Taiping",
            phone:"05-820 3001",
            image:""
        },
        {
            id:"terapi2",
            name:"Encik Hakim Rosli",
            role:"Ahli Terapi",
            specialization:"Terapi Keluarga",
            experience:"9 tahun",
            location:"Ipoh",
            phone:"05-820 3002",
            image:""
        },
        {
            id:"terapi3",
            name:"Puan Farah Nadia",
            role:"Ahli Terapi",
            specialization:"Terapi Individu",
            experience:"6 tahun",
            location:"Kuala Kangsar",
            phone:"05-820 3003",
            image:""
        },
        {
            id:"terapi4",
            name:"Encik Amir Hakim",
            role:"Ahli Terapi",
            specialization:"Terapi Keluarga",
            experience:"8 tahun",
            location:"Taiping",
            phone:"05-820 3004",
            image:""
        },
        {
            id:"terapi5",
            name:"Puan Siti Maryam",
            role:"Ahli Terapi Kanan",
            specialization:"Terapi Keluarga",
            experience:"11 tahun",
            location:"Ipoh",
            phone:"05-820 3005",
            image:""
        },
        {
            id:"terapi6",
            name:"Puan Hana Izzati",
            role:"Ahli Terapi",
            specialization:"Terapi Individu",
            experience:"5 tahun",
            location:"Kamunting",
            phone:"05-820 3006",
            image:""
        }
    ]

};


/* =====================================================
   VARIABLES
===================================================== */

let currentUser = null;
let selectedProfile = null;
let currentRating = 0;
let currentCategory = "Doktor";
let currentSpecialization = "Semua";
let currentLocation = "Semua";
let selectedTime = "";
let editingBookingId = null;


/* =====================================================
   LOCAL STORAGE
===================================================== */

function getProfiles(){

    const saved =
        JSON.parse(
            localStorage.getItem(
                "myJanjiTemuProfiles"
            ) || "null"
        );

    if(saved){
        return saved;
    }

    const copy =
        JSON.parse(
            JSON.stringify(defaultProfiles)
        );

    localStorage.setItem(
        "myJanjiTemuProfiles",
        JSON.stringify(copy)
    );

    return copy;
}


function saveProfiles(profiles){

    localStorage.setItem(
        "myJanjiTemuProfiles",
        JSON.stringify(profiles)
    );

}


function getBookings(){

    return JSON.parse(
        localStorage.getItem(
            "myJanjiTemuBookings"
        ) || "[]"
    );

}


function getComments(){

    return JSON.parse(
        localStorage.getItem(
            "myJanjiTemuComments"
        ) || "[]"
    );

}


/* =====================================================
   ESCAPE HTML
===================================================== */

function escapeHTML(value){

    return String(value ?? "")
        .replace(/&/g,"&amp;")
        .replace(/</g,"&lt;")
        .replace(/>/g,"&gt;")
        .replace(/"/g,"&quot;")
        .replace(/'/g,"&#039;");

}


/* =====================================================
   NOTICE
===================================================== */

function showNotice(message,type="success"){

    const notice =
        document.getElementById("notice");

    notice.textContent = message;

    notice.className =
        "notice show " +
        (type === "error" ? "error" : "");

    setTimeout(()=>{
        notice.className = "notice";
    },3000);

}


/* =====================================================
   AUTH
===================================================== */

function showLogin(){

    document
        .getElementById("authButtons")
        .classList.add("hidden");

    document
        .getElementById("loginForm")
        .classList.remove("hidden");

    document
        .getElementById("registerForm")
        .classList.add("hidden");

}


function showRegister(){

    document
        .getElementById("authButtons")
        .classList.add("hidden");

    document
        .getElementById("loginForm")
        .classList.add("hidden");

    document
        .getElementById("registerForm")
        .classList.remove("hidden");

}


function backAuth(){

    document
        .getElementById("authButtons")
        .classList.remove("hidden");

    document
        .getElementById("loginForm")
        .classList.add("hidden");

    document
        .getElementById("registerForm")
        .classList.add("hidden");

}


function registerUser(){

    const name =
        document
        .getElementById("registerName")
        .value.trim();

    const email =
        document
        .getElementById("registerEmail")
        .value.trim();

    const password =
        document
        .getElementById("registerPassword")
        .value;


    if(!name || !email || !password){

        showNotice(
            "Sila lengkapkan semua maklumat.",
            "error"
        );

        return;
    }


    let users =
        JSON.parse(
            localStorage.getItem(
                "myJanjiTemuUsers"
            ) || "[]"
        );


    if(
        users.some(
            user =>
            user.email.toLowerCase() ===
            email.toLowerCase()
        )
    ){

        showNotice(
            "Email tersebut sudah didaftarkan.",
            "error"
        );

        return;
    }


    const isAdminEmail =
        email.toLowerCase() === "adminsmab@myjanjitemu.com";

    if(isAdminEmail && password !== "smab123"){

        showNotice(
            "Untuk akaun admin, kata laluan mesti smab123.",
            "error"
        );

        return;
    }


    const newUser = {
        name:isAdminEmail ? "Admin SMAB" : name,
        email:email,
        password:isAdminEmail ? "smab123" : password,
        role:isAdminEmail ? "admin" : "user"
    };

    users.push(newUser);


    localStorage.setItem(
        "myJanjiTemuUsers",
        JSON.stringify(users)
    );


    // Selepas daftar, terus masuk ke laman utama tanpa perlu log masuk semula.
    currentUser = newUser;

    localStorage.setItem(
        "myJanjiTemuCurrentUser",
        JSON.stringify(currentUser)
    );

    enterMainPage();

}


function loginUser(){

    const email =
        document
        .getElementById("loginEmail")
        .value.trim();

    const password =
        document
        .getElementById("loginPassword")
        .value;


    if(
        email === "adminsmab@myjanjitemu.com" &&
        password === "smab123"
    ){

        currentUser = {
            name:"Admin",
            email:"adminsmab@myjanjitemu.com",
            role:"admin"
        };

    }else{

        const users =
            JSON.parse(
                localStorage.getItem(
                    "myJanjiTemuUsers"
                ) || "[]"
            );

        const user =
            users.find(
                item =>
                item.email.toLowerCase() ===
                email.toLowerCase() &&
                item.password === password
            );


        if(!user){

            showNotice(
                "Email atau kata laluan tidak betul.",
                "error"
            );

            return;
        }


        currentUser = user;

    }


    localStorage.setItem(
        "myJanjiTemuCurrentUser",
        JSON.stringify(currentUser)
    );


    enterMainPage();

}


function enterMainPage(){

    document
        .getElementById("authPage")
        .classList.add("hidden");

    document
        .getElementById("mainPage")
        .classList.remove("hidden");


    updateAdminVisibility();


    document
        .getElementById("bookingUser")
        .value =
        currentUser.name;


    loadAllPublicProfiles();

    loadComments();

    loadRatingWorkers();

}


function logout(){

    currentUser = null;

    localStorage.removeItem(
        "myJanjiTemuCurrentUser"
    );


    document
        .getElementById("mainPage")
        .classList.add("hidden");

    document
        .getElementById("authPage")
        .classList.remove("hidden");


    backAuth();

}


/* =====================================================
   PAGE NAVIGATION
===================================================== */

function showPage(pageId){

    if(
        pageId === "admin" &&
        (!currentUser ||
        currentUser.role !== "admin")
    ){

        showNotice(
            "Akses admin diperlukan.",
            "error"
        );

        return;
    }


    document
        .querySelectorAll(".page-section")
        .forEach(
            page =>
            page.classList.remove("active")
        );


    const page =
        document.getElementById(pageId);


    if(page){

        page.classList.add("active");

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    }


    if(pageId === "booking"){

        updateSelectedWorker();

        updateBookedTimes();

    }


    if(pageId === "check"){

        loadBookings();

    }


    if(pageId === "rating"){

        loadComments();

        loadRatingWorkers();

    }


    if(pageId === "admin"){

        loadAdminDashboard();
        loadAdminProfiles();

    }

}


function updateAdminVisibility(){

    const adminNav =
        document.getElementById("adminNav");

    if(
        currentUser &&
        currentUser.role === "admin"
    ){

        adminNav.classList.remove("hidden");

    }else{

        adminNav.classList.add("hidden");

    }

}


/* =====================================================
   CATEGORY
===================================================== */

function openCategory(category){

    currentCategory = category;

    currentSpecialization = "Semua";

    currentLocation = "Semua";


    const descriptions = {

        Doktor:
        "Pilih doktor berdasarkan kepakaran dan lokasi.",

        Peguam:
        "Pilih peguam berdasarkan bidang undang-undang dan lokasi.",

        Terapi:
        "Pilih ahli terapi berdasarkan jenis terapi dan lokasi."

    };


    document
        .getElementById("categoryDetailTitle")
        .textContent = category;


    document
        .getElementById("categoryDetailDescription")
        .textContent =
        descriptions[category];


    loadSpecializations();

    loadLocations();

    loadProfiles();


    showPage("categoryDetail");

}


function loadSpecializations(){

    const profiles =
        getProfiles()[currentCategory];


    const specializations =
        [
            "Semua",
            ...new Set(
                profiles.map(
                    profile =>
                    profile.specialization
                )
            )
        ];


    const container =
        document.getElementById(
            "specializationList"
        );


    container.innerHTML =
        specializations.map(
            specialization => `

                <div
                    class="type-card ${
                        currentSpecialization === specialization
                        ? "active"
                        : ""
                    }"
                    onclick="filterSpecialization('${escapeHTML(specialization)}')"
                >
                    ${escapeHTML(specialization)}
                </div>

            `
        ).join("");

}


function filterSpecialization(specialization){

    currentSpecialization = specialization;

    loadSpecializations();

    loadProfiles();

}


function loadLocations(){

    const profiles =
        getProfiles()[currentCategory];


    const locations =
        [
            "Semua",
            ...new Set(
                profiles.map(
                    profile =>
                    profile.location
                )
            )
        ];


    const container =
        document.getElementById(
            "locationList"
        );


    container.innerHTML =
        locations.map(
            location => `

                <button
                    class="location-button ${
                        currentLocation === location
                        ? "active"
                        : ""
                    }"
                    onclick="filterLocation('${escapeHTML(location)}')"
                >
                    ${escapeHTML(location)}
                </button>

            `
        ).join("");

}


function filterLocation(location){

    currentLocation = location;

    loadLocations();

    loadProfiles();

}


/* =====================================================
   PROFILE LIST
===================================================== */

function loadProfiles(){

    let profiles =
        getProfiles()[currentCategory] || [];


    if(currentSpecialization !== "Semua"){

        profiles =
            profiles.filter(
                profile =>
                profile.specialization ===
                currentSpecialization
            );

    }


    if(currentLocation !== "Semua"){

        profiles =
            profiles.filter(
                profile =>
                profile.location ===
                currentLocation
            );

    }


    const container =
        document.getElementById(
            "profileGrid"
        );


    if(!profiles.length){

        container.innerHTML =
            `
            <div class="info-card">
                Tiada pekerja ditemui.
            </div>
            `;

        return;
    }


    container.innerHTML =
        profiles.map(
            profile =>
            profileCardHTML(
                profile,
                currentCategory
            )
        ).join("");

}


function loadAllPublicProfiles(){

    loadRatingWorkers();

}


function profileCardHTML(profile,category){

    const image =
        profile.image
        ?
        `
        <img
            src="${profile.image}"
            alt="${escapeHTML(profile.name)}"
        >
        `
        :
        `
        <div class="default-profile-icon">
            👤
        </div>
        `;


    return `

        <div class="profile-card">

            <div class="profile-image">
                ${image}
            </div>

            <div class="profile-body">

                <h3>
                    ${escapeHTML(profile.name)}
                </h3>

                <div class="profile-role">
                    ${escapeHTML(profile.role)}
                </div>

                <div class="profile-info">

                    <div>
                        <strong>Kepakaran:</strong>
                        ${escapeHTML(profile.specialization)}
                    </div>

                    <div>
                        <strong>Pengalaman:</strong>
                        ${escapeHTML(profile.experience)}
                    </div>

                    <div>
                        <strong>Lokasi:</strong>
                        ${escapeHTML(profile.location)}
                    </div>

                </div>


                <div class="profile-actions">

                    <button
                        class="btn btn-light"
                        onclick="viewProfile('${category}','${profile.id}')"
                    >
                        Profil
                    </button>

                    <button
                        class="btn btn-primary"
                        onclick="bookProfile('${category}','${profile.id}')"
                    >
                        Tempah
                    </button>

                </div>

            </div>

        </div>

    `;

}


/* =====================================================
   FIND PROFILE
===================================================== */

function findProfile(category,id){

    const profiles =
        getProfiles()[category] || [];


    return profiles.find(
        profile =>
        profile.id === id
    );

}


/* =====================================================
   VIEW PROFILE
===================================================== */

function viewProfile(category,id){

    const profile =
        findProfile(category,id);


    if(!profile){
        return;
    }


    selectedProfile = {
        category:category,
        id:id
    };


    const image =
        profile.image
        ?
        `
        <img
            src="${profile.image}"
            alt="${escapeHTML(profile.name)}"
        >
        `
        :
        `
        <div class="default-profile-icon">
            👤
        </div>
        `;


    document
        .getElementById(
            "profileDetailsContainer"
        )
        .innerHTML = `

        <div class="profile-detail-top">

            <div class="profile-detail-image">
                ${image}
            </div>


            <div class="profile-detail-content">

                <h1>
                    ${escapeHTML(profile.name)}
                </h1>

                <div class="role">
                    ${escapeHTML(profile.role)}
                </div>


                <div class="profile-item">
                    <strong>Kepakaran:</strong>

                    <span>
                        ${escapeHTML(profile.specialization)}
                    </span>
                </div>


                <div class="profile-item">
                    <strong>Pengalaman:</strong>

                    <span>
                        ${escapeHTML(profile.experience)}
                    </span>
                </div>


                <div class="profile-item">
                    <strong>Lokasi:</strong>

                    <span>
                        ${escapeHTML(profile.location)}
                    </span>
                </div>


                <div class="profile-item">
                    <strong>Telefon:</strong>

                    <span>
                        ${escapeHTML(profile.phone)}
                    </span>
                </div>


                <br>


                <button
                    class="btn btn-primary"
                    onclick="bookProfile('${category}','${id}')"
                >
                    Tempah Dengan Pekerja Ini
                </button>

            </div>

        </div>

    `;


    showPage("profile");

}


/* =====================================================
   BOOKING
===================================================== */

function bookProfile(category,id){

    const profile =
        findProfile(category,id);


    if(!profile){
        return;
    }


    selectedProfile = {
        category:category,
        id:id
    };


    document
        .getElementById(
            "bookingWorker"
        )
        .value =
        profile.name;


    document
        .getElementById(
            "selectedWorkerDisplay"
        )
        .textContent =
        profile.name;


    document
        .getElementById(
            "bookingPhone"
        )
        .value =
        profile.phone;


    selectedTime = "";


    document
        .querySelectorAll(".time-slot")
        .forEach(
            slot =>
            slot.classList.remove("active")
        );


    showPage("booking");

    updateBookedTimes();

}


function updateSelectedWorker(){

    const workerInput =
        document.getElementById(
            "bookingWorker"
        );


    const workerDisplay =
        document.getElementById(
            "selectedWorkerDisplay"
        );


    if(
        selectedProfile &&
        selectedProfile.category &&
        selectedProfile.id
    ){

        const profile =
            findProfile(
                selectedProfile.category,
                selectedProfile.id
            );


        if(profile){

            workerInput.value =
                profile.name;

            workerDisplay.textContent =
                profile.name;

            return;
        }

    }


    workerInput.value = "";

    workerDisplay.textContent =
        "Belum dipilih";

}


/* =====================================================
   TIME
===================================================== */

function selectTime(button,time){

    if(button.classList.contains("booked")){
        return;
    }


    document
        .querySelectorAll(".time-slot")
        .forEach(
            slot =>
            slot.classList.remove("active")
        );


    button.classList.add("active");

    selectedTime = time;

}


function updateBookedTimes(){

    const date =
        document
        .getElementById("bookingDate")
        .value;


    if(!date){
        return;
    }


    const worker =
        selectedProfile;


    document
        .querySelectorAll(".time-slot")
        .forEach(
            slot =>
            slot.classList.remove("booked")
        );


    if(!worker){
        return;
    }


    const bookings =
        getBookings();


    const bookedTimes =
        bookings
        .filter(
            booking =>
            booking.category === worker.category &&
            booking.profileId === worker.id &&
            booking.date === date &&
            booking.id !== editingBookingId
        )
        .map(
            booking =>
            booking.time
        );


    document
        .querySelectorAll(".time-slot")
        .forEach(slot=>{

            const time =
                slot.textContent.trim();

            if(bookedTimes.includes(time)){

                slot.classList.add("booked");

                slot.classList.remove("active");

            }

        });

}


document
    .getElementById("bookingDate")
    .addEventListener(
        "change",
        ()=>{
            selectedTime = "";
            updateBookedTimes();
        }
    );


/* =====================================================
   MAKE BOOKING
===================================================== */

function makeBooking(){

    if(!currentUser){

        showNotice(
            "Sila log masuk dahulu.",
            "error"
        );

        return;
    }


    if(!selectedProfile){

        showNotice(
            "Sila pilih pekerja dahulu.",
            "error"
        );

        return;
    }


    const date =
        document
        .getElementById("bookingDate")
        .value;


    const phone =
        document
        .getElementById("bookingPhone")
        .value.trim();


    const note =
        document
        .getElementById("bookingNote")
        .value.trim();


    if(!date){

        showNotice(
            "Sila pilih tarikh.",
            "error"
        );

        return;
    }


    if(!selectedTime){

        showNotice(
            "Sila pilih masa.",
            "error"
        );

        return;
    }


    if(!phone){

        showNotice(
            "Sila masukkan nombor telefon.",
            "error"
        );

        return;
    }


    const profile =
        findProfile(
            selectedProfile.category,
            selectedProfile.id
        );


    if(!profile){
        return;
    }


    let bookings =
        getBookings();


    if(editingBookingId){

        const index = bookings.findIndex(booking => booking.id === editingBookingId);

        if(index !== -1){
            const conflict = bookings.some((booking, i) =>
                i !== index &&
                booking.category === selectedProfile.category &&
                booking.profileId === selectedProfile.id &&
                booking.date === date &&
                booking.time === selectedTime
            );

            if(conflict){
                showNotice("Masa tersebut sudah ditempah.", "error");
                updateBookedTimes();
                return;
            }

            bookings[index] = {
                ...bookings[index],
                category:selectedProfile.category,
                profileId:selectedProfile.id,
                worker:profile.name,
                date:date,
                time:selectedTime,
                phone:phone,
                note:note,
                status:"Disahkan"
            };

            localStorage.setItem("myJanjiTemuBookings", JSON.stringify(bookings));
            editingBookingId = null;
            const submitButton = document.getElementById("bookingSubmitButton");
            if(submitButton) submitButton.textContent = "Sahkan Tempahan";
            showNotice("Tempahan berjaya dikemaskini!");
            document.getElementById("bookingNote").value = "";
            selectedTime = "";
            document.querySelectorAll(".time-slot").forEach(slot => slot.classList.remove("active"));
            showPage("check");
            return;
        }

        editingBookingId = null;
    }

    const alreadyBooked =
        bookings.some(
            booking =>
            booking.category ===
            selectedProfile.category &&

            booking.profileId ===
            selectedProfile.id &&

            booking.date === date &&

            booking.time === selectedTime
        );


    if(alreadyBooked){

        showNotice(
            "Masa tersebut sudah ditempah.",
            "error"
        );

        updateBookedTimes();

        return;
    }


    bookings.push({

        id:
            Date.now().toString(),

        user:
            currentUser.name,

        email:
            currentUser.email,

        category:
            selectedProfile.category,

        profileId:
            selectedProfile.id,

        worker:
            profile.name,

        date:
            date,

        time:
            selectedTime,

        phone:
            phone,

        note:
            note,

        status:
            "Disahkan"

    });


    localStorage.setItem(
        "myJanjiTemuBookings",
        JSON.stringify(bookings)
    );


    showNotice(
        "Tempahan berjaya dibuat!"
    );


    document
        .getElementById("bookingNote")
        .value = "";


    selectedTime = "";


    document
        .querySelectorAll(".time-slot")
        .forEach(
            slot =>
            slot.classList.remove("active")
        );


    loadBookings();

}


/* =====================================================
   LOAD BOOKINGS
===================================================== */

function loadBookings(){

    const tbody = document.getElementById("bookingTableBody");
    if(!tbody) return;

    let bookings = getBookings();

    if(!currentUser || currentUser.role !== "admin") {
        bookings = bookings.filter(booking => booking.email === currentUser.email);
    }

    if(!bookings.length){
        tbody.innerHTML = `<tr><td colspan="8" style="text-align:center;">Tiada tempahan.</td></tr>`;
        return;
    }

    tbody.innerHTML = bookings.map(booking => `
        <tr>
            <td>${escapeHTML(booking.user)}</td>
            <td>${escapeHTML(booking.worker)}</td>
            <td>${escapeHTML(booking.category)}</td>
            <td>${escapeHTML(booking.date)}</td>
            <td>${escapeHTML(booking.time)}</td>
            <td>${escapeHTML(booking.phone)}</td>
            <td>${escapeHTML(booking.status)}</td>
            <td class="booking-actions">
                ${currentUser && currentUser.role !== "admin" ? `
                    <button class="btn btn-light btn-small" onclick="editBooking('${booking.id}')">Edit</button>
                    <button class="btn btn-danger btn-small" onclick="cancelBooking('${booking.id}')">Batal</button>
                ` : `<span>-</span>`}
            </td>
        </tr>
    `).join("");
}

function editBooking(id){
    if(!currentUser || currentUser.role === "admin") return;
    const booking = getBookings().find(item => item.id === id && item.email === currentUser.email);
    if(!booking) return;

    selectedProfile = { category: booking.category, id: booking.profileId };
    editingBookingId = id;
    const profile = findProfile(booking.category, booking.profileId);
    if(!profile) return;

    document.getElementById("bookingDate").value = booking.date;
    document.getElementById("bookingPhone").value = booking.phone || "";
    document.getElementById("bookingNote").value = booking.note || "";
    document.getElementById("bookingWorker").value = profile.name;
    document.getElementById("selectedWorkerDisplay").textContent = profile.name;
    selectedTime = booking.time;
    showPage("booking");
    const submitButton = document.getElementById("bookingSubmitButton");
    if(submitButton) submitButton.textContent = "Simpan Perubahan";
    document.querySelectorAll(".time-slot").forEach(slot => {
        slot.classList.toggle("active", slot.textContent.trim() === booking.time);
    });
    updateBookedTimes();
    document.querySelectorAll(".time-slot").forEach(slot => {
        if(slot.textContent.trim() === booking.time) slot.classList.add("active");
    });
    showNotice("Anda sedang mengedit tempahan.");
}

function cancelBooking(id){
    if(!currentUser || currentUser.role === "admin") return;

    const bookings = getBookings();
    const index = bookings.findIndex(
        item =>
        item.id === id &&
        item.email === currentUser.email
    );

    if(index === -1) return;

    if(!confirm("Adakah anda pasti mahu membatalkan tempahan ini?")) return;

    // Tempahan dibuang terus daripada senarai, bukan ditukar kepada status Dibatalkan.
    bookings.splice(index, 1);

    localStorage.setItem(
        "myJanjiTemuBookings",
        JSON.stringify(bookings)
    );

    showNotice("Tempahan berjaya dibatalkan.");
    loadBookings();
}

/* =====================================================
   RATING WORKERS
===================================================== */

function loadRatingWorkers(){

    const select =
        document.getElementById(
            "ratingWorker"
        );


    if(!select){
        return;
    }


    const profiles =
        getProfiles();


    let options = `
        <option value="">
            -- Pilih Pekerja --
        </option>
    `;


    Object.keys(profiles).forEach(category=>{

        profiles[category].forEach(profile=>{

            options += `

                <option
                    value="${category}|${profile.id}"
                >
                    ${escapeHTML(profile.name)}
                    - ${escapeHTML(category)}
                </option>

            `;

        });

    });


    select.innerHTML = options;

}


/* =====================================================
   RATING
===================================================== */

function setRating(rating){

    currentRating = rating;


    document
        .querySelectorAll(".rating-star")
        .forEach(
            (star,index)=>{

                star.classList.toggle(
                    "active",
                    index < rating
                );

            }
        );

}


function submitRating(){

    if(!currentUser){

        showNotice(
            "Sila log masuk dahulu.",
            "error"
        );

        return;
    }


    const workerValue =
        document
        .getElementById("ratingWorker")
        .value;


    const comment =
        document
        .getElementById("ratingComment")
        .value.trim();


    if(!workerValue){

        showNotice(
            "Sila pilih pekerja.",
            "error"
        );

        return;
    }


    if(currentRating === 0){

        showNotice(
            "Sila pilih rating.",
            "error"
        );

        return;
    }


    if(!comment){

        showNotice(
            "Sila tulis komen.",
            "error"
        );

        return;
    }


    const parts =
        workerValue.split("|");


    const category =
        parts[0];

    const profileId =
        parts[1];


    const profile =
        findProfile(
            category,
            profileId
        );


    if(!profile){
        return;
    }


    let comments =
        getComments();


    comments.unshift({

        id:
            Date.now().toString(),

        user:
            currentUser.name,

        email:
            currentUser.email,

        worker:
            profile.name,

        category:
            category,

        profileId:
            profileId,

        rating:
            currentRating,

        comment:
            comment,

        date:
            new Date().toLocaleDateString(
                "ms-MY"
            )

    });


    localStorage.setItem(
        "myJanjiTemuComments",
        JSON.stringify(comments)
    );


    showNotice(
        "Rating dan komen berjaya dihantar."
    );


    document
        .getElementById("ratingComment")
        .value = "";


    document
        .getElementById("ratingWorker")
        .value = "";


    setRating(0);

    loadComments();

}


function loadComments(){

    const container =
        document.getElementById(
            "commentsContainer"
        );


    if(!container){
        return;
    }


    const comments =
        getComments();


    if(!comments.length){

        container.innerHTML = `

            <div class="info-card">
                Belum ada rating atau komen.
            </div>

        `;

        return;
    }


    container.innerHTML =
        comments.map(
            comment => {

                const stars =
                    "★".repeat(
                        Number(comment.rating)
                    ) +
                    "☆".repeat(
                        5 -
                        Number(comment.rating)
                    );


                return `

                    <div class="comment-card">

                        <div class="comment-header">

                            <div class="comment-name">
                                ${escapeHTML(comment.user)}
                            </div>

                            <div class="comment-date">
                                ${escapeHTML(comment.date)}
                            </div>

                        </div>


                        <div class="comment-stars">
                            ${stars}
                        </div>


                        <strong>
                            ${escapeHTML(comment.worker)}
                        </strong>


                        <p>
                            ${escapeHTML(comment.comment)}
                        </p>

                    </div>

                `;

            }
        ).join("");

}


/* =====================================================
   ADMIN
===================================================== */

function loadAdminDashboard(){
    if(!currentUser || currentUser.role !== "admin") return;

    const bookings = getBookings();
    const comments = getComments();
    const countBooking = document.getElementById("adminBookingCount");
    const countComment = document.getElementById("adminCommentCount");
    const bookingBody = document.getElementById("adminBookingTableBody");
    const commentsBox = document.getElementById("adminCommentsContainer");

    if(countBooking) countBooking.textContent = bookings.length;
    if(countComment) countComment.textContent = comments.length;

    if(bookingBody){
        bookingBody.innerHTML = bookings.length ? bookings.map(b => `
            <tr>
                <td>${escapeHTML(b.user)}</td><td>${escapeHTML(b.email)}</td>
                <td>${escapeHTML(b.worker)}</td><td>${escapeHTML(b.category)}</td>
                <td>${escapeHTML(b.date)}</td><td>${escapeHTML(b.time)}</td>
                <td>${escapeHTML(b.phone)}</td><td>${escapeHTML(b.status)}</td>
            </tr>`).join("") : `<tr><td colspan="8" style="text-align:center;">Tiada tempahan pelanggan.</td></tr>`;
    }

    if(commentsBox){
        commentsBox.innerHTML = comments.length ? comments.map(c => {
            const stars = "★".repeat(Number(c.rating)) + "☆".repeat(5 - Number(c.rating));
            return `<div class="admin-comment-card">
                <div><strong>${escapeHTML(c.user)}</strong> <span>${escapeHTML(c.email)}</span></div>
                <div class="comment-stars">${stars}</div>
                <strong>${escapeHTML(c.worker)} (${escapeHTML(c.category)})</strong>
                <p>${escapeHTML(c.comment)}</p>
                <small>${escapeHTML(c.date)}</small>
            </div>`;
        }).join("") : `<div class="info-card">Belum ada rating atau komen.</div>`;
    }
}

function loadAdminProfiles(){

    const container =
        document.getElementById(
            "adminProfilesContainer"
        );


    if(
        !currentUser ||
        currentUser.role !== "admin"
    ){
        return;
    }


    const profiles =
        getProfiles();


    let html = "";


    Object.keys(profiles).forEach(category=>{

        html += `

            <div class="admin-category">

                <h2>
                    ${escapeHTML(category)}
                </h2>

        `;


        profiles[category].forEach(profile=>{

            html += adminProfileHTML(
                category,
                profile
            );

        });


        html += `</div>`;

    });


    container.innerHTML = html;

}


function adminProfileHTML(category,profile){

    const image =
        profile.image
        ?
        `
        <img
            id="preview-${profile.id}"
            src="${profile.image}"
            alt="${escapeHTML(profile.name)}"
        >
        `
        :
        `
        <div
            id="preview-${profile.id}"
            class="default-profile-icon"
        >
            👤
        </div>
        `;


    return `

        <div class="admin-profile">

            <div class="admin-profile-grid">

                <div>

                    <div class="admin-image-preview">
                        ${image}
                    </div>

                </div>


                <div class="admin-fields">

                    <div class="admin-field">

                        <label>Nama</label>

                        <input
                            type="text"
                            id="name-${profile.id}"
                            value="${escapeHTML(profile.name)}"
                        >

                    </div>


                    <div class="admin-field">

                        <label>Jawatan</label>

                        <input
                            type="text"
                            id="role-${profile.id}"
                            value="${escapeHTML(profile.role)}"
                        >

                    </div>


                    <div class="admin-field">

                        <label>Kepakaran</label>

                        <input
                            type="text"
                            id="specialization-${profile.id}"
                            value="${escapeHTML(profile.specialization)}"
                        >

                    </div>


                    <div class="admin-field">

                        <label>Pengalaman</label>

                        <input
                            type="text"
                            id="experience-${profile.id}"
                            value="${escapeHTML(profile.experience)}"
                        >

                    </div>


                    <div class="admin-field">

                        <label>Lokasi</label>

                        <input
                            type="text"
                            id="location-${profile.id}"
                            value="${escapeHTML(profile.location)}"
                        >

                    </div>


                    <div class="admin-field">

                        <label>No. Telefon</label>

                        <input
                            type="text"
                            id="phone-${profile.id}"
                            value="${escapeHTML(profile.phone)}"
                        >

                    </div>


                    <div class="admin-field image-upload">

                        <label>
                            Tukar Gambar Pekerja
                        </label>

                        <input
                            type="file"
                            accept="image/*"
                            onchange="previewAdminImage(event,'${category}','${profile.id}')"
                        >

                    </div>


                    <div class="admin-field full">

                        <button
                            class="btn btn-success"
                            onclick="saveAdminProfile('${category}','${profile.id}')"
                        >
                            Simpan Perubahan
                        </button>

                    </div>

                </div>

            </div>

        </div>

    `;

}


/* =====================================================
   IMAGE PREVIEW
===================================================== */

function previewAdminImage(
    event,
    category,
    id
){

    const file =
        event.target.files[0];


    if(!file){
        return;
    }


    if(!file.type.startsWith("image/")){

        showNotice(
            "Sila pilih fail gambar.",
            "error"
        );

        event.target.value = "";

        return;
    }


    const reader =
        new FileReader();


    reader.onload = function(e){

        const preview =
            document.getElementById(
                "preview-" + id
            );


        preview.outerHTML = `

            <img
                id="preview-${id}"
                src="${e.target.result}"
                alt="Preview"
            >

        `;

    };


    reader.readAsDataURL(file);

}


/* =====================================================
   COMPRESS IMAGE
===================================================== */

function compressImage(
    file,
    callback
){

    const reader =
        new FileReader();


    reader.onload = function(event){

        const img =
            new Image();


        img.onload = function(){

            const maxWidth = 900;

            let width =
                img.width;

            let height =
                img.height;


            if(width > maxWidth){

                height =
                    height *
                    (maxWidth / width);

                width =
                    maxWidth;

            }


            const canvas =
                document.createElement("canvas");


            canvas.width =
                width;

            canvas.height =
                height;


            const ctx =
                canvas.getContext("2d");


            ctx.drawImage(
                img,
                0,
                0,
                width,
                height
            );


            callback(
                canvas.toDataURL(
                    "image/jpeg",
                    0.75
                )
            );

        };


        img.src =
            event.target.result;

    };


    reader.readAsDataURL(file);

}


/* =====================================================
   SAVE ADMIN PROFILE
===================================================== */

function saveAdminProfile(
    category,
    id
){

    if(
        !currentUser ||
        currentUser.role !== "admin"
    ){

        showNotice(
            "Akses admin diperlukan.",
            "error"
        );

        return;
    }


    const profiles =
        getProfiles();


    const profile =
        profiles[category]
        .find(
            item =>
            item.id === id
        );


    if(!profile){
        return;
    }


    profile.name =
        document
        .getElementById(
            "name-" + id
        )
        .value.trim();


    profile.role =
        document
        .getElementById(
            "role-" + id
        )
        .value.trim();


    profile.specialization =
        document
        .getElementById(
            "specialization-" + id
        )
        .value.trim();


    profile.experience =
        document
        .getElementById(
            "experience-" + id
        )
        .value.trim();


    profile.location =
        document
        .getElementById(
            "location-" + id
        )
        .value.trim();


    profile.phone =
        document
        .getElementById(
            "phone-" + id
        )
        .value.trim();


    const fileInput =
        document.querySelector(
            `input[onchange*="'${id}'"]`
        );


    if(
        fileInput &&
        fileInput.files &&
        fileInput.files[0]
    ){

        compressImage(
            fileInput.files[0],
            function(base64){

                profile.image =
                    base64;

                saveProfiles(profiles);

                showNotice(
                    "Maklumat dan gambar berjaya disimpan."
                );

                loadAdminProfiles();

                loadRatingWorkers();

                if(
                    currentCategory === category
                ){

                    loadSpecializations();

                    loadLocations();

                    loadProfiles();

                }

            }
        );

    }else{

        saveProfiles(profiles);

        showNotice(
            "Maklumat pekerja berjaya disimpan."
        );

        loadAdminProfiles();

        loadRatingWorkers();

        if(
            currentCategory === category
        ){

            loadSpecializations();

            loadLocations();

            loadProfiles();

        }

    }

}


/* =====================================================
   SLIDER
===================================================== */

let currentSlide = 0;


function showSlide(index){

    const slides =
        document.querySelectorAll(
            ".slide"
        );


    const dots =
        document.querySelectorAll(
            ".dot"
        );


    if(index >= slides.length){

        currentSlide = 0;

    }

    else if(index < 0){

        currentSlide =
            slides.length - 1;

    }

    else{

        currentSlide = index;

    }


    slides.forEach(
        slide =>
        slide.classList.remove("active")
    );


    dots.forEach(
        dot =>
        dot.classList.remove("active")
    );


    if(slides[currentSlide]){

        slides[currentSlide]
            .classList.add("active");

    }


    if(dots[currentSlide]){

        dots[currentSlide]
            .classList.add("active");

    }

}


function changeSlide(direction){

    showSlide(
        currentSlide + direction
    );

}


function goSlide(index){

    showSlide(index);

}


/* =====================================================
   AUTO SLIDER
===================================================== */

setInterval(
    ()=>{
        changeSlide(1);
    },
    6000
);


/* =====================================================
   INITIALIZE
===================================================== */

function initialize(){

    getProfiles();


    const savedUser =
        localStorage.getItem(
            "myJanjiTemuCurrentUser"
        );


    if(savedUser){

        try{

            currentUser =
                JSON.parse(savedUser);


            if(currentUser){

                enterMainPage();

                return;

            }

        }catch(error){

            localStorage.removeItem(
                "myJanjiTemuCurrentUser"
            );

        }

    }


    backAuth();

}


initialize();
