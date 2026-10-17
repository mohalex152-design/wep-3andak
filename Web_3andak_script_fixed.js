/* =========================================================
   WEB 3ANDAK — MAIN JAVASCRIPT
   ========================================================= */

"use strict";

/* =========================
   HELPERS
========================= */

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const CONTACT = {
    delivery: "01228377001",
    design: "01030954451",
    general: "01104827513"
};

const WA = (number) => `https://wa.me/2${number}`;

const views = {
    login: $("#loginView"),
    home: $("#homeView"),
    content: $("#contentView"),
    bottom: $("#bottomNav"),
    drawer: $("#drawer")
};


/* =========================
   TOAST
========================= */

function toast(message) {
    const el = $("#toast");

    if (!el) return;

    el.textContent = message;
    el.classList.add("show");

    clearTimeout(window.toastTimer);

    window.toastTimer = setTimeout(() => {
        el.classList.remove("show");
    }, 2500);
}


/* =========================
   USER
========================= */

function saveUser(name, phone) {
    localStorage.setItem(
        "web3andak_user",
        JSON.stringify({
            name,
            phone
        })
    );
}

function getUser() {
    try {
        return JSON.parse(
            localStorage.getItem("web3andak_user") || "null"
        );
    } catch {
        return null;
    }
}


/* =========================
   PROJECTS
========================= */

function getProjects() {
    try {
        return JSON.parse(
            localStorage.getItem("web3andak_projects") || "[]"
        );
    } catch {
        return [];
    }
}

function saveProjects(projects) {
    localStorage.setItem(
        "web3andak_projects",
        JSON.stringify(projects)
    );
}

function updateStats() {
    const stat = $("#statProjects");

    if (stat) {
        stat.textContent = getProjects().length;
    }
}


/* =========================
   HTML SECURITY
========================= */

function escapeHTML(value) {
    return String(value).replace(
        /[&<>"']/g,
        char => ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#039;"
        })[char]
    );
}


/* =========================
   WHATSAPP
========================= */

function openWhatsApp(number, message = "") {

    const url =
        `${WA(number)}?text=${encodeURIComponent(message)}`;

    window.open(
        url,
        "_blank",
        "noopener,noreferrer"
    );
}


/* =========================
   NAVIGATION
========================= */

function setActiveNav(pageName) {

    $$(".nav-item").forEach(button => {

        button.classList.toggle(
            "active",
            button.dataset.page === pageName
        );

    });
}


function closeDrawer() {
    views.drawer?.classList.remove("open");
}


function showHome() {

    views.login?.classList.add("hidden");
    views.content?.classList.add("hidden");
    views.home?.classList.remove("hidden");
    views.bottom?.classList.remove("hidden");

    setActiveNav("home");
    updateStats();
}


function showContent(html, pageName) {

    views.login?.classList.add("hidden");
    views.home?.classList.add("hidden");
    views.content?.classList.remove("hidden");
    views.bottom?.classList.remove("hidden");

    const content = $("#content");

    if (content) {
        content.innerHTML = html;
    }

    setActiveNav(pageName);
    closeDrawer();

    bindDynamicElements();
}


function page(pageName) {

    if (pageName === "home") {
        showHome();
        closeDrawer();
        return;
    }

    if (pages[pageName]) {
        showContent(
            pages[pageName](),
            pageName
        );
    }
}


/* =========================================================
   PAGES
========================================================= */

const pages = {

    /* =========================
       PROJECTS
    ========================= */

    projects: () => {

        const list = getProjects();

        return `
            <div class="page-head">

                <span class="tag">
                    PROJECTS
                </span>

                <h1 class="content-title">
                    مشاريعي
                </h1>

                <p class="sub">
                    كل المشاريع والطلبات المحفوظة عندك.
                </p>

            </div>

            <div class="panel">

                ${
                    list.length
                    ?
                    `
                    <div class="project-grid">

                        ${list.map((project) => `
                            
                            <article class="project">

                                <b>
                                    ${escapeHTML(project.name)}
                                </b>

                                <p class="sub">
                                    ${escapeHTML(project.type)}
                                </p>

                                <p class="sub">
                                    ${escapeHTML(project.details)}
                                </p>

                                <small>
                                    ${escapeHTML(project.date)}
                                </small>

                            </article>

                        `).join("")}

                    </div>
                    `
                    :
                    `
                    <b>
                        لسه مفيش مشاريع.
                    </b>

                    <p class="sub">
                        ابدأ أول مشروع ليك دلوقتي.
                    </p>
                    `
                }

                <button
                    class="main-btn"
                    style="margin-top:18px"
                    data-page="new"
                >
                    ＋ مشروع جديد
                </button>

            </div>
        `;
    },


    /* =========================
       NEW PROJECT
    ========================= */

    new: () => {

        return `
            <div class="page-head">

                <span class="tag">
                    NEW PROJECT
                </span>

                <h1 class="content-title">
                    مشروع جديد
                </h1>

                <p class="sub">
                    اكتب تفاصيل فكرتك وسيتم تجهيز الطلب لإرساله.
                </p>

            </div>

            <form
                id="projectForm"
                class="panel new-form"
            >

                <label>
                    اسم المشروع

                    <input
                        name="name"
                        type="text"
                        placeholder="مثال: موقع شركة"
                        required
                    >

                </label>


                <label>
                    نوع المشروع

                    <select name="type">

                        <option>
                            موقع إلكتروني
                        </option>

                        <option>
                            متجر إلكتروني
                        </option>

                        <option>
                            تطبيق ويب
                        </option>

                        <option>
                            Landing Page
                        </option>

                        <option>
                            لوحة تحكم
                        </option>

                        <option>
                            أخرى
                        </option>

                    </select>

                </label>


                <label>
                    تفاصيل المشروع

                    <textarea
                        name="details"
                        placeholder="اكتب كل التفاصيل المطلوبة..."
                        required
                    ></textarea>

                </label>


                <div
                    style="
                        display:flex;
                        gap:10px;
                        flex-wrap:wrap;
                    "
                >

                    <button
                        class="main-btn"
                        type="submit"
                    >
                        حفظ وإرسال الطلب
                    </button>

                    <button
                        class="secondary-btn"
                        type="button"
                        data-page="contact"
                    >
                        تواصل معنا
                    </button>

                </div>

            </form>
        `;
    },


    /* =========================
       PORTFOLIO
    ========================= */

    portfolio: () => {

        return `
            <div class="page-head">

                <span class="tag">
                    PORTFOLIO
                </span>

                <h1 class="content-title">
                    معرض الأعمال
                </h1>

                <p class="sub">
                    بعض أنواع المشاريع التي يمكن تنفيذها.
                </p>

            </div>


            <div class="project-grid">

                <article class="project">
                    <b>Business Website</b>
                    <p class="sub">
                        موقع احترافي للشركات والخدمات.
                    </p>
                </article>


                <article class="project">
                    <b>Online Store</b>
                    <p class="sub">
                        متجر إلكتروني متجاوب وسهل الاستخدام.
                    </p>
                </article>


                <article class="project">
                    <b>Web Dashboard</b>
                    <p class="sub">
                        لوحة تحكم حديثة لإدارة المشروع.
                    </p>
                </article>


                <article class="project">
                    <b>Landing Page</b>
                    <p class="sub">
                        صفحة هبوط احترافية للحملات والمشاريع.
                    </p>
                </article>

            </div>
        `;
    },


    /* =========================
       CONTACT
    ========================= */

    contact: () => {

        return `
            <div class="page-head">

                <span class="tag">
                    CONTACT
                </span>

                <h1 class="content-title">
                    تواصل معنا
                </h1>

                <p class="sub">
                    اختار نوع التواصل المناسب.
                </p>

            </div>


            <div class="contact-grid">


                <article class="contact-card">

                    <b>
                        التواصل العام
                    </b>

                    <p class="sub">
                        للاستفسارات والمشاريع الجديدة.
                    </p>

                    <a
                        href="#"
                        data-wa="general"
                    >
                        💬 واتساب
                    </a>

                </article>


                <article class="contact-card">

                    <b>
                        إرسال التصميم
                    </b>

                    <p class="sub">
                        لإرسال التصميم أو الملفات.
                    </p>

                    <a
                        href="#"
                        data-wa="design"
                    >
                        🎨 إرسال التصميم
                    </a>

                </article>


                <article class="contact-card">

                    <b>
                        تسليم الموقع
                    </b>

                    <p class="sub">
                        للتنسيق بخصوص تسليم المشروع.
                    </p>

                    <a
                        href="#"
                        data-wa="delivery"
                    >
                        🌐 تسليم الموقع
                    </a>

                </article>


            </div>
        `;
    },


    /* =========================
       PAYMENTS
    ========================= */

    payments: () => {

        return `
            <div class="page-head">

                <span class="tag">
                    PAYMENTS
                </span>

                <h1 class="content-title">
                    الدفع
                </h1>

                <p class="sub">
                    تفاصيل الدفع يتم الاتفاق عليها بعد مراجعة المشروع.
                </p>

            </div>


            <div class="panel">

                <h3>
                    لا توجد أسعار ثابتة هنا.
                </h3>

                <p class="sub">
                    السعر النهائي يتحدد حسب نوع المشروع
                    والتفاصيل المطلوبة.
                </p>

                <button
                    class="main-btn"
                    data-wa="general"
                >
                    💬 اسأل عن مشروعك
                </button>

            </div>
        `;
    },


    /* =========================
       REVIEWS
    ========================= */

    reviews: () => {

        return `
            <div class="page-head">

                <span class="tag">
                    REVIEWS
                </span>

                <h1 class="content-title">
                    آراء العملاء
                </h1>

            </div>


            <div class="panel">

                <div class="review-stars">
                    ★★★★★
                </div>

                <p class="sub">
                    هنا يمكن إضافة تقييمات العملاء بعد تنفيذ المشاريع.
                </p>

                <button
                    class="outline-btn"
                    data-wa="general"
                >
                    اترك تقييمك
                </button>

            </div>
        `;
    },


    /* =========================
       SOCIAL
    ========================= */

    social: () => {

        return `
            <div class="page-head">

                <span class="tag">
                    SOCIAL MEDIA
                </span>

                <h1 class="content-title">
                    Social Media
                </h1>

                <p class="sub">
                    تابع Web 3andak على منصات التواصل.
                </p>

            </div>


            <div class="panel social-list">

                <button
                    class="social-card"
                    data-social="Facebook"
                >
                    📘 Facebook
                </button>


                <button
                    class="social-card"
                    data-social="Instagram"
                >
                    📸 Instagram
                </button>


                <button
                    class="social-card"
                    data-social="TikTok"
                >
                    🎵 TikTok
                </button>

            </div>
        `;
    },


    /* =========================
       FAQ
    ========================= */

    faq: () => {

        return `
            <div class="page-head">

                <span class="tag">
                    FAQ
                </span>

                <h1 class="content-title">
                    الأسئلة الشائعة
                </h1>

            </div>


            <div class="panel faq-list">

                <div class="faq-item">

                    <b>
                        هل الأسعار ثابتة؟
                    </b>

                    <span class="sub">
                        لا، السعر يتحدد حسب تفاصيل المشروع.
                    </span>

                </div>


                <div class="faq-item">

                    <b>
                        إزاي أطلب موقع؟
                    </b>

                    <span class="sub">
                        افتح مشروع جديد واكتب التفاصيل المطلوبة.
                    </span>

                </div>


                <div class="faq-item">

                    <b>
                        هل الموقع يعمل على الموبايل؟
                    </b>

                    <span class="sub">
                        نعم، التصميم يكون متجاوب حسب المشروع.
                    </span>

                </div>

            </div>
        `;
    },


    /* =========================
       BLOG
    ========================= */

    blog: () => {

        return `
            <div class="page-head">

                <span class="tag">
                    BLOG
                </span>

                <h1 class="content-title">
                    المدونة
                </h1>

                <p class="sub">
                    نصائح وأفكار عن المواقع والتصميم.
                </p>

            </div>


            <div class="cards-grid">

                <article class="info-card">

                    <b>
                        أهمية تصميم الموقع
                    </b>

                    <p class="sub">
                        التصميم الجيد يجعل الموقع أسهل وأوضح للمستخدم.
                    </p>

                </article>


                <article class="info-card">

                    <b>
                        سرعة الموقع
                    </b>

                    <p class="sub">
                        سرعة الموقع جزء أساسي من تجربة المستخدم.
                    </p>

                </article>


                <article class="info-card">

                    <b>
                        تصميم الموبايل
                    </b>

                    <p class="sub">
                        الموقع يجب أن يظهر بشكل ممتاز على الهاتف.
                    </p>

                </article>

            </div>
        `;
    },


    /* =========================
       UPDATES
    ========================= */

    updates: () => {

        return `
            <div class="page-head">

                <span class="tag">
                    UPDATES
                </span>

                <h1 class="content-title">
                    ما الجديد؟
                </h1>

            </div>


            <div class="panel">

                <h3>
                    Web 3andak — النسخة الجديدة
                </h3>

                <p class="sub">
                    تصميم جديد، إدارة مشاريع، Web 3andak AI،
                    واتساب، Dark Mode وتجربة أفضل للموبايل.
                </p>

            </div>
        `;
    },


    /* =========================
       ACCOUNT
    ========================= */

    account: () => {

        const user = getUser() || {
            name: "المستخدم",
            phone: "غير مسجل"
        };

        return `
            <div class="page-head">

                <span class="tag">
                    ACCOUNT
                </span>

                <h1 class="content-title">
                    حسابي
                </h1>

            </div>


            <div class="panel">

                <h3>
                    ${escapeHTML(user.name)}
                </h3>

                <p class="sub">
                    رقم الهاتف:
                    ${escapeHTML(user.phone)}
                </p>

                <p class="sub">
                    الحساب محفوظ محليًا في النسخة الحالية.
                </p>

            </div>
        `;
    },


    /* =========================
       SETTINGS
    ========================= */

    settings: () => {

        const dark =
            document.body.classList.contains("dark");

        return `
            <div class="page-head">

                <span class="tag">
                    SETTINGS
                </span>

                <h1 class="content-title">
                    الإعدادات
                </h1>

            </div>


            <div class="panel">


                <div class="settings-row">

                    <span>
                        المظهر
                    </span>

                    <button id="themeBtn">
                        ${dark ? "☀ Light" : "🌙 Dark"}
                    </button>

                </div>


                <div class="settings-row">

                    <span>
                        اللغة
                    </span>

                    <button id="langBtn">
                        العربية
                    </button>

                </div>


                <div class="settings-row">

                    <span>
                        الإشعارات
                    </span>

                    <button id="notifySetting">
                        اختبار
                    </button>

                </div>


            </div>
        `;
    }

};


/* =========================================================
   DYNAMIC ELEMENTS
========================================================= */

function bindDynamicElements() {

    /* PROJECT FORM */

    const projectForm = $("#projectForm");

    if (projectForm) {

        projectForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();

                const formData =
                    new FormData(projectForm);

                const project = {

                    name:
                        formData.get("name"),

                    type:
                        formData.get("type"),

                    details:
                        formData.get("details"),

                    date:
                        new Date().toLocaleDateString(
                            "ar-EG"
                        )
                };

                const projects =
                    getProjects();

                projects.unshift(project);

                saveProjects(projects);

                updateStats();

                toast(
                    "تم حفظ المشروع بنجاح"
                );

                const message =
                    `مرحبًا، أريد تنفيذ مشروع جديد.\n\n` +
                    `اسم المشروع: ${project.name}\n` +
                    `النوع: ${project.type}\n` +
                    `التفاصيل: ${project.details}`;

                setTimeout(() => {

                    openWhatsApp(
                        CONTACT.general,
                        message
                    );

                }, 400);

            }
        );
    }


    /* WHATSAPP BUTTONS */

    $$("[data-wa]").forEach(button => {

        button.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                const type =
                    button.dataset.wa;

                const messages = {

                    general:
                        "مرحبًا، أريد التواصل مع Web 3andak.",

                    design:
                        "مرحبًا، أريد إرسال تصميم للمشروع.",

                    delivery:
                        "مرحبًا، أريد التنسيق بخصوص تسليم الموقع."
                };

                const number =
                    CONTACT[type] ||
                    CONTACT.general;

                openWhatsApp(
                    number,
                    messages[type] || messages.general
                );

            }
        );

    });


    /* SOCIAL */

    $$("[data-social]").forEach(button => {

        button.addEventListener(
            "click",
            function () {

                toast(
                    `رابط ${button.dataset.social} سيتم إضافته عند تجهيز الحساب الرسمي.`
                );

            }
        );

    });


    /* THEME */

    const themeBtn =
        $("#themeBtn");

    if (themeBtn) {

        themeBtn.addEventListener(
            "click",
            function () {

                document.body.classList.toggle(
                    "dark"
                );

                localStorage.setItem(
                    "web3andak_theme",
                    document.body.classList.contains("dark")
                        ? "dark"
                        : "light"
                );

                page("settings");
            }
        );

    }


    /* LANGUAGE */

    const langBtn =
        $("#langBtn");

    if (langBtn) {

        langBtn.addEventListener(
            "click",
            function () {

                toast(
                    "العربية هي اللغة الحالية."
                );

            }
        );

    }


    /* NOTIFICATIONS */

    const notifySetting =
        $("#notifySetting");

    if (notifySetting) {

        notifySetting.addEventListener(
            "click",
            function () {

                toast(
                    "لا توجد إشعارات جديدة."
                );

            }
        );

    }

}


/* =========================================================
   LOGIN
========================================================= */

const loginForm =
    $("#loginForm");

if (loginForm) {

    loginForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const name =
                $("#loginName").value.trim();

            const phone =
                $("#loginPhone").value.trim();

            const password =
                $("#loginPassword").value.trim();

            if (!name) {

                toast(
                    "اكتب اسمك أولًا."
                );

                return;
            }


            if (!/^01\d{9}$/.test(phone)) {

                toast(
                    "اكتب رقم هاتف مصري صحيح."
                );

                return;
            }


            if (password.length < 4) {

                toast(
                    "كلمة المرور لازم تكون 4 أحرف على الأقل."
                );

                return;
            }


            saveUser(
                name,
                phone
            );

            localStorage.setItem(
                "web3andak_logged",
                "1"
            );


            showHome();


            toast(
                `أهلًا ${name} 👋`
            );

        }
    );

}


/* =========================================================
   PASSWORD
========================================================= */

const togglePass =
    $("#togglePass");

if (togglePass) {

    togglePass.addEventListener(
        "click",
        function () {

            const password =
                $("#loginPassword");

            if (!password) return;

            const isPassword =
                password.type === "password";

            password.type =
                isPassword
                    ? "text"
                    : "password";

            togglePass.textContent =
                isPassword
                    ? "إخفاء"
                    : "إظهار";

        }
    );

}


/* =========================================================
   SIGN UP / FORGOT
========================================================= */

$("#signupBtn")?.addEventListener(
    "click",
    () => {

        toast(
            "إنشاء الحساب الحقيقي يحتاج Backend وقاعدة بيانات."
        );

    }
);


$("#forgotBtn")?.addEventListener(
    "click",
    () => {

        toast(
            "استعادة كلمة المرور تحتاج Backend."
        );

    }
);


/* =========================================================
   DRAWER
========================================================= */

$("#menuBtn")?.addEventListener(
    "click",
    () => {

        views.drawer?.classList.add(
            "open"
        );

    }
);


$("#menuBtnContent")?.addEventListener(
    "click",
    () => {

        views.drawer?.classList.add(
            "open"
        );

    }
);


$("#closeMenu")?.addEventListener(
    "click",
    closeDrawer
);


/* DRAWER PAGES */

$$(".drawer-item[data-page]").forEach(
    button => {

        button.addEventListener(
            "click",
            () => {

                page(
                    button.dataset.page
                );

            }
        );

    }
);


/* =========================================================
   BOTTOM NAV
========================================================= */

$$(".nav-item").forEach(
    button => {

        button.addEventListener(
            "click",
            () => {

                page(
                    button.dataset.page
                );

            }
        );

    }
);


/* =========================================================
   HOME QUICK BUTTONS
========================================================= */

$$(".quick-card").forEach(
    button => {

        button.addEventListener(
            "click",
            () => {

                page(
                    button.dataset.page
                );

            }
        );

    }
);


/* =========================================================
   LOGOUT
========================================================= */

$("#logout")?.addEventListener(
    "click",
    function () {

        localStorage.removeItem(
            "web3andak_logged"
        );

        closeDrawer();

        views.home?.classList.add(
            "hidden"
        );

        views.content?.classList.add(
            "hidden"
        );

        views.bottom?.classList.add(
            "hidden"
        );

        views.login?.classList.remove(
            "hidden"
        );

        toast(
            "تم تسجيل الخروج."
        );

    }
);


/* =========================================================
   NOTIFICATIONS
========================================================= */

$("#notifBtn")?.addEventListener(
    "click",
    () => {

        toast(
            "لا توجد إشعارات جديدة."
        );

    }
);


$("#notifBtnContent")?.addEventListener(
    "click",
    () => {

        toast(
            "لا توجد إشعارات جديدة."
        );

    }
);


/* =========================================================
   WEB 3ANDAK AI — QUESTION BY QUESTION
========================================================= */

const aiState = {
    step: 0,
    answers: {}
};


/* =========================
   OPEN / CLOSE AI
========================= */

function openAI() {

    const panel = $("#aiPanel");

    if (!panel) return;

    panel.classList.remove("hidden");

    aiState.step = 0;
    aiState.answers = {};

    const messages = $("#aiMessages");

    $("#questionList")?.classList.remove("hidden");

    if (messages) {
        messages.innerHTML = "";
    }

    setTimeout(() => {
        askNextAIQuestion();
    }, 300);
}


function closeAI() {

    $("#aiPanel")?.classList.add("hidden");

}


/* =========================
   AI BUTTONS
========================= */

$("#openAI")?.addEventListener(
    "click",
    openAI
);


$("#bottomAI")?.addEventListener(
    "click",
    openAI
);


$("#drawerAI")?.addEventListener(
    "click",
    function () {

        closeDrawer();
        openAI();

    }
);


$("#closeAI")?.addEventListener(
    "click",
    closeAI
);


/* =========================
   AI QUESTIONS
========================= */

const aiQuestions = [

    {
        key: "service",

        question:
            "أهلًا 👋 أنا Web 3andak AI. أول سؤال: إيه نوع المشروع اللي عايز تعمله؟",

        options: [
            "🌐 موقع إلكتروني",
            "📱 تطبيق ويب",
            "🛒 متجر إلكتروني",
            "🎨 Portfolio",
            "🏢 موقع شركة",
            "💡 مشروع مختلف"
        ]
    },


    {
        key: "name",

        question:
            "تمام 👍 إيه اسم المشروع أو اسم الموقع؟",

        input: true,

        placeholder:
            "اكتب اسم المشروع..."
    },


    {
        key: "description",

        question:
            "ممتاز. احكيلي باختصار الموقع أو المشروع ده هيعمل إيه؟",

        input: true,

        placeholder:
            "اكتب فكرة المشروع..."
    },


    {
        key: "pages",

        question:
            "إيه الصفحات اللي محتاجها في الموقع؟",

        options: [
            "🏠 الرئيسية + من نحن + تواصل",
            "🛍️ منتجات",
            "📄 خدمات",
            "👤 تسجيل دخول وحسابات",
            "📚 صفحات تعليمية",
            "✨ مش عارف، اختار أنت"
        ]
    },


    {
        key: "features",

        question:
            "إيه أهم الوظائف اللي عايزها في الموقع؟",

        options: [
            "💬 WhatsApp",
            "🔐 Login / Register",
            "🔎 Search",
            "🛒 Shopping Cart",
            "📩 Contact Form",
            "🤖 AI",
            "✨ أكثر من وظيفة"
        ]
    },


    {
        key: "design",

        question:
            "تحب تصميم الموقع يكون عامل إزاي؟",

        options: [
            "🖤 Dark وفخم",
            "🤍 Light وبسيط",
            "💎 Premium واحترافي",
            "⚡ Modern وعصري",
            "🎨 عندي تصميم معين"
        ]
    },


    {
        key: "colors",

        question:
            "هل عندك ألوان معينة تحب نستخدمها؟",

        options: [
            "🔵 أزرق",
            "🟣 بنفسجي",
            "🟢 أخضر",
            "🔴 أحمر",
            "⚫ أسود / رمادي",
            "🎨 اختار أنت"
        ]
    },


    {
        key: "logo",

        question:
            "هل عندك Logo أو صور خاصة بالمشروع؟",

        options: [
            "✅ أيوه، عندي",
            "❌ لأ",
            "🤔 لسه مش عارف"
        ]
    },


    {
        key: "responsive",

        question:
            "هل الموقع لازم يشتغل بشكل ممتاز على الموبايل والتابلت والكمبيوتر؟",

        options: [
            "📱 أيوه، كل الأجهزة",
            "💻 الكمبيوتر فقط",
            "📱 الموبايل أهم"
        ]
    },


    {
        key: "account",

        question:
            "هل الموقع محتاج تسجيل دخول وحسابات للمستخدمين؟",

        options: [
            "🔐 أيوه",
            "❌ لأ",
            "🤔 مش عارف"
        ]
    },


    {
        key: "backend",

        question:
            "هل المشروع محتاج Database وBackend لحفظ البيانات؟",

        options: [
            "🗄️ أيوه",
            "❌ لأ",
            "🤔 محتاج أعرف الأول"
        ]
    },


    {
        key: "extra",

        question:
            "آخر سؤال 🎯 هل فيه أي تفاصيل إضافية نفسك تضيفها؟",

        input: true,

        placeholder:
            "اكتب أي تفاصيل إضافية..."
    }

];


/* =========================
   ADD AI MESSAGE
========================= */

function addAIOnlyMessage(message) {

    const messages = $("#aiMessages");

    if (!messages) return;

    messages.insertAdjacentHTML(
        "beforeend",

        `
        <div class="ai-msg">
            ${escapeHTML(message)}
        </div>
        `
    );

    messages.scrollTop =
        messages.scrollHeight;
}


/* =========================
   ADD USER MESSAGE
========================= */

function addUserOnlyMessage(message) {

    const messages = $("#aiMessages");

    if (!messages) return;

    messages.insertAdjacentHTML(
        "beforeend",

        `
        <div class="user-msg">
            ${escapeHTML(message)}
        </div>
        `
    );

    messages.scrollTop =
        messages.scrollHeight;
}


/* =========================
   ASK NEXT QUESTION
========================= */

function askNextAIQuestion() {

    const question =
        aiQuestions[aiState.step];

    if (!question) {

        finishAI();

        return;
    }

    setTimeout(() => {

        addAIOnlyMessage(
            question.question
        );

        showAIAnswers(
            question
        );

    }, 400);
}


/* =========================
   SHOW ANSWERS
========================= */

function showAIAnswers(question) {

    const messages =
        $("#aiMessages");

    if (!messages) return;


    const wrapper =
        document.createElement("div");

    wrapper.className =
        "ai-options";


    /* الاختيارات */

    if (question.options) {

        question.options.forEach(
            option => {

                const button =
                    document.createElement("button");

                button.type =
                    "button";

                button.className =
                    "ai-choice";

                button.textContent =
                    option;


                button.addEventListener(
                    "click",
                    function () {

                        answerAI(
                            option
                        );

                    }
                );


                wrapper.appendChild(
                    button
                );

            }
        );

    }


    /* السؤال النصي */

    if (question.input) {

        const form =
            document.createElement("form");

        form.className =
            "ai-input-form";


        form.innerHTML = `

            <input
                class="ai-input"
                type="text"
                placeholder="${question.placeholder}"
                required
            >

            <button
                class="main-btn"
                type="submit"
            >
                إرسال
            </button>

        `;


        form.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();

                const input =
                    form.querySelector(
                        ".ai-input"
                    );

                const value =
                    input.value.trim();


                if (!value) return;


                answerAI(
                    value
                );

            }
        );


        wrapper.appendChild(
            form
        );

    }


    messages.appendChild(
        wrapper
    );


    messages.scrollTop =
        messages.scrollHeight;
}


/* =========================
   SAVE ANSWER
========================= */

function answerAI(answer) {

    const question =
        aiQuestions[aiState.step];

    if (!question) return;


    aiState.answers[
        question.key
    ] = answer;


    addUserOnlyMessage(
        answer
    );


    aiState.step++;


    askNextAIQuestion();
}


/* =========================
   FINISH AI
========================= */

function finishAI() {

    setTimeout(() => {

        addAIOnlyMessage(
            "ممتاز جدًا 🎉 كده جمعت كل التفاصيل الأساسية الخاصة بمشروعك."
        );


        setTimeout(() => {

            addAIOnlyMessage(
                "تحب تبعت تفاصيل المشروع لفريق Web 3andak؟"
            );


            showAIContactButtons();

        }, 700);

    }, 500);
}


/* =========================
   CONTACT BUTTONS
========================= */

function showAIContactButtons() {

    const messages =
        $("#aiMessages");

    if (!messages) return;


    const wrapper =
        document.createElement("div");

    wrapper.className =
        "ai-options";


    wrapper.innerHTML = `
        <button type="button" class="ai-choice" data-ai-action="send-project">
            📩 إرسال تفاصيل المشروع
        </button>
        <button type="button" class="ai-choice" data-ai-action="general">
            💬 التواصل العام
        </button>
        <button type="button" class="ai-choice" data-ai-action="design">
            🎨 إرسال تصميم
        </button>
        <button type="button" class="ai-choice" data-ai-action="delivery">
            🌐 تسليم الموقع
        </button>
    `;


    messages.appendChild(
        wrapper
    );


    messages.scrollTop =
        messages.scrollHeight;
}


/* =========================
   SEND PROJECT TO WHATSAPP
========================= */

function sendAIProject() {

    const a =
        aiState.answers;


    const message =

`مرحبًا Web 3andak 👋

أريد إنشاء مشروع جديد.

نوع المشروع:
${a.service || "غير محدد"}

اسم المشروع:
${a.name || "غير محدد"}

وصف المشروع:
${a.description || "غير محدد"}

الصفحات المطلوبة:
${a.pages || "غير محدد"}

الوظائف المطلوبة:
${a.features || "غير محدد"}

التصميم:
${a.design || "غير محدد"}

الألوان:
${a.colors || "غير محدد"}

اللوجو والصور:
${a.logo || "غير محدد"}

التوافق مع الأجهزة:
${a.responsive || "غير محدد"}

الحسابات:
${a.account || "غير محدد"}

Backend / Database:
${a.backend || "غير محدد"}

تفاصيل إضافية:
${a.extra || "لا يوجد"}

---
تم جمع البيانات بواسطة Web 3andak AI.`;


    openWhatsApp(
        CONTACT.general,
        message
    );
}


/* =========================
   CLOSE AI OUTSIDE
========================= */

$("#aiPanel")?.addEventListener(
    "click",
    function (event) {

        if (
            event.target ===
            $("#aiPanel")
        ) {

            closeAI();

        }

    }
);

/* AI ANSWERS */

function getAIAnswer(action) {
    const answers = {
        website: {
            user: "🌐 استفسار عن موقع",
            answer: "تمام. اكتب فكرتك في قسم «مشروع جديد» وسجّل الصفحات والتفاصيل المطلوبة."
        },
        app: {
            user: "📱 عايز أعمل تطبيق",
            answer: "ممتاز. اكتب فكرة التطبيق والمميزات المطلوبة في قسم «مشروع جديد»."
        },
        design: {
            user: "🎨 محتاج تصميم",
            answer: "أكيد. اختار «إرسال تصميم» من خيارات التواصل وسيفتح واتساب رقم التصميم مباشرة."
        },
        problem: {
            user: "🛠 مشكلة في مشروع",
            answer: "اكتب تفاصيل المشكلة في رسالة واتساب للدعم العام، وسيتابع الفريق معك."
        },
        price: {
            user: "💰 عايز أعرف السعر",
            answer: "السعر بيتحدد حسب تفاصيل المشروع. تواصل مع الفريق العام وأرسل وصف فكرتك لمعرفة التكلفة."
        },
        contact: {
            user: "💬 عايز أتواصل",
            answer: "اختار القسم المناسب، وسأفتح لك محادثة واتساب مع الرقم المسؤول."
        }
    };

    return answers[action] || null;
}

function showContactChoices() {
    const messages = $("#aiMessages");
    if (!messages) return;

    const wrapper = document.createElement("div");
    wrapper.className = "ai-options";
    wrapper.innerHTML = `
        <button type="button" class="ai-choice" data-ai-action="general">💬 استفسارات عامة — ${CONTACT.general}</button>
        <button type="button" class="ai-choice" data-ai-action="design">🎨 إرسال تصميم — ${CONTACT.design}</button>
        <button type="button" class="ai-choice" data-ai-action="delivery">🌐 تسليم الموقع — ${CONTACT.delivery}</button>
    `;
    messages.appendChild(wrapper);
    messages.scrollTop = messages.scrollHeight;
}

$("#questionList")?.addEventListener("click", function (event) {
    const button = event.target.closest("[data-question]");
    if (!button) return;

    const action = button.dataset.question;
    const result = getAIAnswer(action);
    if (!result) return;

    addUserOnlyMessage(result.user);
    addAIOnlyMessage(result.answer);

    if (action === "contact") {
        showContactChoices();
    }

});

$("#aiMessages")?.addEventListener("click", function (event) {
    const button = event.target.closest("[data-ai-action]");
    if (!button) return;

    const action = button.dataset.aiAction;
    if (action === "send-project") {
        sendAIProject();
        return;
    }

    const data = {
        general: {
            number: CONTACT.general,
            message: "مرحبًا، أريد التواصل مع Web 3andak."
        },
        design: {
            number: CONTACT.design,
            message: "مرحبًا، أريد إرسال تصميم للمشروع."
        },
        delivery: {
            number: CONTACT.delivery,
            message: "مرحبًا، أريد التنسيق بخصوص تسليم الموقع."
        }
    };

    if (!data[action]) return;
    openWhatsApp(data[action].number, data[action].message);
});


/* =========================================================
   ESC KEY
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeDrawer();
            closeAI();

        }

    }
);



/* =========================================================
   THEME
========================================================= */

if (
    localStorage.getItem(
        "web3andak_theme"
    ) === "dark"
) {

    document.body.classList.add(
        "dark"
    );

}


/* =========================================================
   START APP
========================================================= */

const logged =
    localStorage.getItem(
        "web3andak_logged"
    );

const user =
    getUser();


if (
    logged === "1" &&
    user
) {

    showHome();

} else {

    views.login?.classList.remove(
        "hidden"
    );

    views.home?.classList.add(
        "hidden"
    );

    views.content?.classList.add(
        "hidden"
    );

    views.bottom?.classList.add(
        "hidden"
    );

}
