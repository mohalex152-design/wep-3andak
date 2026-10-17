/* Web 3andak language switcher. Load this file before script.js. */
(() => {
  'use strict';

  const locales = {
    ar: { label: 'العربية', brand: 'ويب عندك', dir: 'rtl' },
    en: { label: 'English', brand: 'Give Me Web', dir: 'ltr' },
    fr: { label: 'Français', brand: 'Crée-moi un site web', dir: 'ltr' },
    de: { label: 'Deutsch', brand: 'Erstell mir eine Website', dir: 'ltr' },
    it: { label: 'Italiano', brand: 'Fammi un sito web', dir: 'ltr' },
    es: { label: 'Español', brand: 'Hazme una web', dir: 'ltr' },
    pt: { label: 'Português', brand: 'Crie meu site', dir: 'ltr' },
    zh: { label: '中文', brand: '给我做个网站', dir: 'ltr' },
    ja: { label: '日本語', brand: 'ウェブサイトを作って', dir: 'ltr' },
    ko: { label: '한국어', brand: '웹사이트를 만들어 주세요', dir: 'ltr' },
    hi: { label: 'हिन्दी', brand: 'मेरी वेबसाइट बनाइए', dir: 'ltr' },
    tr: { label: 'Türkçe', brand: 'Bana bir web sitesi yap', dir: 'ltr' },
    ru: { label: 'Русский', brand: 'Создай мне сайт', dir: 'ltr' },
    id: { label: 'Bahasa Indonesia', brand: 'Buatkan saya situs web', dir: 'ltr' },
    bn: { label: 'বাংলা', brand: 'আমার জন্য একটি ওয়েবসাইট বানান', dir: 'ltr' }
  };

  // Each row is: Arabic source text, then translations in locale order below.
  const codes = ['en','fr','de','it','es','pt','zh','ja','ko','hi','tr','ru','id','bn'];
  const rows = [
    ['Web Studio',['Web Studio','Studio Web','Webstudio','Web Studio','Estudio Web','Estúdio Web','网页工作室','ウェブスタジオ','웹 스튜디오','वेब स्टूडियो','Web Stüdyosu','Веб-студия','Studio Web','ওয়েব স্টুডিও']],
    ['حلول ويب احترافية مصممة ليك',['Professional web solutions made for you','Des solutions web professionnelles pour vous','Professionelle Weblösungen für dich','Soluzioni web professionali per te','Soluciones web profesionales para ti','Soluções web profissionais para você','为你打造的专业网站解决方案','あなたのためのプロ向けウェブソリューション','당신을 위한 전문 웹 솔루션','आपके लिए पेशेवर वेब समाधान','Size özel profesyonel web çözümleri','Профессиональные веб-решения для вас','Solusi web profesional untuk Anda','আপনার জন্য পেশাদার ওয়েব সমাধান']],
    ['الاسم',['Name','Nom','Name','Nome','Nombre','Nome','姓名','名前','이름','नाम','Ad','Имя','Nama','নাম']],
    ['رقم الهاتف',['Phone number','Numéro de téléphone','Telefonnummer','Numero di telefono','Número de teléfono','Número de telefone','电话号码','電話番号','전화번호','फ़ोन नंबर','Telefon numarası','Номер телефона','Nomor telepon','ফোন নম্বর']],
    ['كلمة المرور',['Password','Mot de passe','Passwort','Password','Contraseña','Senha','密码','パスワード','비밀번호','पासवर्ड','Şifre','Пароль','Kata sandi','পাসওয়ার্ড']],
    ['اكتب اسمك',['Enter your name','Saisissez votre nom','Gib deinen Namen ein','Inserisci il tuo nome','Escribe tu nombre','Digite seu nome','请输入姓名','名前を入力','이름을 입력하세요','अपना नाम लिखें','Adınızı yazın','Введите имя','Masukkan nama Anda','আপনার নাম লিখুন']],
    ['إظهار',['Show','Afficher','Anzeigen','Mostra','Mostrar','Mostrar','显示','表示','표시','दिखाएँ','Göster','Показать','Tampilkan','দেখান']],
    ['تذكرني',['Remember me','Se souvenir de moi','Angemeldet bleiben','Ricordami','Recuérdame','Lembre-se de mim','记住我','ログイン状態を保持','로그인 기억하기','मुझे याद रखें','Beni hatırla','Запомнить меня','Ingat saya','আমাকে মনে রাখুন']],
    ['نسيت كلمة المرور؟',['Forgot password?','Mot de passe oublié ?','Passwort vergessen?','Password dimenticata?','¿Olvidaste tu contraseña?','Esqueceu a senha?','忘记密码？','パスワードをお忘れですか？','비밀번호를 잊으셨나요?','पासवर्ड भूल गए?','Şifrenizi mi unuttunuz?','Забыли пароль?','Lupa kata sandi?','পাসওয়ার্ড ভুলে গেছেন?']],
    ['دخول إلى Web 3andak',['Sign in to Give Me Web','Se connecter à Crée-moi un site web','Bei Erstell mir eine Website anmelden','Accedi a Fammi un sito web','Entrar en Hazme una web','Entrar no Crie meu site','登录','ログイン','로그인','साइन इन करें','Giriş yap','Войти','Masuk','লগ ইন করুন']],
    ['إنشاء حساب جديد',['Create a new account','Créer un compte','Neues Konto erstellen','Crea un nuovo account','Crear una cuenta nueva','Criar nova conta','创建新账号','新しいアカウントを作成','새 계정 만들기','नया खाता बनाएँ','Yeni hesap oluştur','Создать аккаунт','Buat akun baru','নতুন অ্যাকাউন্ট তৈরি করুন']],
    ['نسخة محلية جاهزة للربط بـ Backend لاحقًا.',['Local version ready to connect to a backend later.','Version locale prête à être reliée à un backend.','Lokale Version, später mit einem Backend verbindbar.','Versione locale pronta per il collegamento a un backend.','Versión local lista para conectarse a un backend.','Versão local pronta para conexão com um backend.','本地版本，可在之后连接后端。','ローカル版です。後でバックエンドに接続できます。','로컬 버전이며 나중에 백엔드에 연결할 수 있습니다.','स्थानीय संस्करण, बाद में बैकएंड से जोड़ा जा सकता है।','Yerel sürüm, daha sonra arka uca bağlanabilir.','Локальная версия, позже можно подключить к серверной части.','Versi lokal, siap dihubungkan ke backend nanti.','লোকাল সংস্করণ, পরে ব্যাকএন্ডে যুক্ত করা যাবে।']],
    ['الرئيسية',['Home','Accueil','Startseite','Home','Inicio','Início','首页','ホーム','홈','मुखपृष्ठ','Ana Sayfa','Главная','Beranda','হোম']],
    ['مشاريعي',['My projects','Mes projets','Meine Projekte','I miei progetti','Mis proyectos','Meus projetos','我的项目','マイプロジェクト','내 프로젝트','मेरी परियोजनाएँ','Projelerim','Мои проекты','Proyek saya','আমার প্রকল্প']],
    ['مشروع جديد',['New project','Nouveau projet','Neues Projekt','Nuovo progetto','Nuevo proyecto','Novo projeto','新建项目','新しいプロジェクト','새 프로젝트','नई परियोजना','Yeni proje','Новый проект','Proyek baru','নতুন প্রকল্প']],
    ['معرض الأعمال',['Portfolio','Réalisations','Portfolio','Portfolio','Portafolio','Portfólio','作品集','制作実績','포트폴리오','पोर्टफोलियो','Portfolyo','Портфолио','Portofolio','পোর্টফোলিও']],
    ['تواصل معنا',['Contact us','Nous contacter','Kontakt','Contattaci','Contáctanos','Fale conosco','联系我们','お問い合わせ','문의하기','संपर्क करें','İletişim','Связаться с нами','Hubungi kami','যোগাযোগ করুন']],
    ['الدفع',['Payments','Paiements','Zahlungen','Pagamenti','Pagos','Pagamentos','付款','お支払い','결제','भुगतान','Ödemeler','Оплата','Pembayaran','পেমেন্ট']],
    ['آراء العملاء',['Customer reviews','Avis clients','Kundenbewertungen','Recensioni dei clienti','Opiniones de clientes','Avaliações de clientes','客户评价','お客様の声','고객 후기','ग्राहक समीक्षाएँ','Müşteri yorumları','Отзывы клиентов','Ulasan pelanggan','গ্রাহক পর্যালোচনা']],
    ['الأسئلة الشائعة',['FAQ','FAQ','Häufige Fragen','Domande frequenti','Preguntas frecuentes','Perguntas frequentes','常见问题','よくある質問','자주 묻는 질문','अक्सर पूछे जाने वाले प्रश्न','Sık sorulan sorular','Частые вопросы','Pertanyaan umum','সাধারণ জিজ্ঞাসা']],
    ['المدونة',['Blog','Blog','Blog','Blog','Blog','Blog','博客','ブログ','블로그','ब्लॉग','Blog','Блог','Blog','ব্লগ']],
    ['ما الجديد؟',['What’s new?','Quoi de neuf ?','Was gibt’s Neues?','Novità','¿Qué hay de nuevo?','Novidades','最新动态','新着情報','새 소식','नया क्या है?','Yenilikler','Что нового?','Apa yang baru?','নতুন কী?']],
    ['حسابي',['My account','Mon compte','Mein Konto','Il mio account','Mi cuenta','Minha conta','我的账户','アカウント','내 계정','मेरा खाता','Hesabım','Мой аккаунт','Akun saya','আমার অ্যাকাউন্ট']],
    ['الإعدادات',['Settings','Paramètres','Einstellungen','Impostazioni','Configuración','Configurações','设置','設定','설정','सेटिंग्स','Ayarlar','Настройки','Pengaturan','সেটিংস']],
    ['Web 3andak AI',['Give Me Web AI','IA Crée-moi un site web','Erstell mir eine Website KI','Fammi un sito web AI','IA Hazme una web','IA Crie meu site','智能助手','AIアシスタント','AI 도우미','AI सहायक','Yapay Zekâ Asistanı','ИИ-помощник','Asisten AI','এআই সহকারী']],
    ['مشروع جديد',['New project','Nouveau projet','Neues Projekt','Nuovo progetto','Nuevo proyecto','Novo projeto','新建项目','新しいプロジェクト','새 프로젝트','नई परियोजना','Yeni proje','Новый проект','Proyek baru','নতুন প্রকল্প']],
    ['كل المشاريع والطلبات المحفوظة عندك.',['All your saved projects and requests.','Tous vos projets et demandes enregistrés.','Alle gespeicherten Projekte und Anfragen.','Tutti i tuoi progetti e richieste salvati.','Todos tus proyectos y solicitudes guardados.','Todos os seus projetos e solicitações salvos.','查看已保存的项目和请求。','保存したプロジェクトと依頼を一覧できます。','저장된 프로젝트와 요청을 확인하세요.','आपकी सभी सहेजी गई परियोजनाएँ और अनुरोध।','Kaydedilen tüm proje ve talepleriniz.','Все сохранённые проекты и заявки.','Semua proyek dan permintaan tersimpan Anda.','আপনার সংরক্ষিত সব প্রকল্প ও অনুরোধ।']],
    ['لسه مفيش مشاريع.',['No projects yet.','Aucun projet pour le moment.','Noch keine Projekte.','Ancora nessun progetto.','Aún no hay proyectos.','Ainda não há projetos.','暂无项目。','まだプロジェクトはありません。','아직 프로젝트가 없습니다.','अभी कोई परियोजना नहीं है।','Henüz proje yok.','Пока нет проектов.','Belum ada proyek.','এখনও কোনো প্রকল্প নেই।']],
    ['ابدأ أول مشروع ليك دلوقتي.',['Start your first project now.','Lancez votre premier projet.','Starte jetzt dein erstes Projekt.','Avvia subito il tuo primo progetto.','Empieza tu primer proyecto ahora.','Comece seu primeiro projeto agora.','现在开始你的第一个项目。','今すぐ最初のプロジェクトを始めましょう。','지금 첫 프로젝트를 시작하세요.','अभी अपना पहला प्रोजेक्ट शुरू करें।','İlk projenizi şimdi başlatın.','Начните свой первый проект прямо сейчас.','Mulai proyek pertama Anda sekarang.','এখনই আপনার প্রথম প্রকল্প শুরু করুন।']],
    ['اكتب تفاصيل فكرتك وسيتم تجهيز الطلب لإرساله.',['Describe your idea and we’ll prepare the request for sending.','Décrivez votre idée et nous préparerons la demande.','Beschreibe deine Idee, wir bereiten die Anfrage vor.','Descrivi la tua idea e prepareremo la richiesta.','Describe tu idea y prepararemos la solicitud.','Descreva sua ideia e prepararemos o pedido.','填写想法详情，我们会为你准备好申请。','アイデアを入力すると、送信用の依頼を準備します。','아이디어를 작성하면 요청을 준비해 드립니다.','अपना विचार बताएँ, हम अनुरोध तैयार करेंगे।','Fikrinizi yazın, talebinizi hazırlayalım.','Опишите идею, и мы подготовим заявку.','Ceritakan ide Anda, kami siapkan permintaannya.','আপনার ধারণা লিখুন, আমরা অনুরোধটি প্রস্তুত করব।']],
    ['اسم المشروع',['Project name','Nom du projet','Projektname','Nome del progetto','Nombre del proyecto','Nome do projeto','项目名称','プロジェクト名','프로젝트 이름','परियोजना का नाम','Proje adı','Название проекта','Nama proyek','প্রকল্পের নাম']],
    ['نوع المشروع',['Project type','Type de projet','Projekttyp','Tipo di progetto','Tipo de proyecto','Tipo de projeto','项目类型','プロジェクトの種類','프로젝트 유형','परियोजना का प्रकार','Proje türü','Тип проекта','Jenis proyek','প্রকল্পের ধরন']],
    ['موقع إلكتروني',['Website','Site web','Website','Sito web','Sitio web','Site','网站','ウェブサイト','웹사이트','वेबसाइट','Web sitesi','Веб-сайт','Situs web','ওয়েবসাইট']],
    ['متجر إلكتروني',['Online store','Boutique en ligne','Onlineshop','Negozio online','Tienda en línea','Loja virtual','在线商店','オンラインストア','온라인 스토어','ऑनलाइन स्टोर','Online mağaza','Интернет-магазин','Toko online','অনলাইন স্টোর']],
    ['تطبيق ويب',['Web application','Application web','Webanwendung','Applicazione web','Aplicación web','Aplicativo web','网页应用','ウェブアプリ','웹 앱','वेब ऐप','Web uygulaması','Веб-приложение','Aplikasi web','ওয়েব অ্যাপ']],
    ['لوحة تحكم',['Dashboard','Tableau de bord','Dashboard','Dashboard','Panel de control','Painel de controle','管理面板','ダッシュボード','대시보드','डैशबोर्ड','Kontrol paneli','Панель управления','Dasbor','ড্যাশবোর্ড']],
    ['أخرى',['Other','Autre','Andere','Altro','Otro','Outro','其他','その他','기타','अन्य','Diğer','Другое','Lainnya','অন্যান্য']],
    ['تفاصيل المشروع',['Project details','Détails du projet','Projektdetails','Dettagli del progetto','Detalles del proyecto','Detalhes do projeto','项目详情','プロジェクトの詳細','프로젝트 세부 정보','परियोजना का विवरण','Proje ayrıntıları','Детали проекта','Detail proyek','প্রকল্পের বিবরণ']],
    ['حفظ وإرسال الطلب',['Save and send request','Enregistrer et envoyer','Anfrage speichern und senden','Salva e invia la richiesta','Guardar y enviar solicitud','Salvar e enviar pedido','保存并发送请求','保存してリクエストを送信','저장 후 요청 보내기','अनुरोध सहेजें और भेजें','Kaydet ve gönder','Сохранить и отправить заявку','Simpan dan kirim permintaan','অনুরোধ সংরক্ষণ ও পাঠান']],
    ['بعض أنواع المشاريع التي يمكن تنفيذها.',['Examples of projects we can build.','Quelques exemples de projets réalisables.','Beispiele für umsetzbare Projekte.','Esempi di progetti realizzabili.','Ejemplos de proyectos que podemos crear.','Exemplos de projetos que podemos desenvolver.','可制作的项目类型示例。','制作可能なプロジェクトの例です。','제작 가능한 프로젝트 예시입니다.','बनाई जा सकने वाली परियोजनाओं के उदाहरण।','Yapabileceğimiz proje örnekleri.','Примеры проектов, которые можно реализовать.','Contoh proyek yang dapat kami buat.','যে ধরনের প্রকল্প তৈরি করা যায় তার উদাহরণ।']],
    ['التواصل العام',['General inquiries','Demandes générales','Allgemeine Anfragen','Richieste generali','Consultas generales','Dúvidas gerais','一般咨询','一般のお問い合わせ','일반 문의','सामान्य पूछताछ','Genel iletişim','Общие вопросы','Pertanyaan umum','সাধারণ যোগাযোগ']],
    ['للاستفسارات والمشاريع الجديدة.',['For questions and new projects.','Pour vos questions et nouveaux projets.','Für Fragen und neue Projekte.','Per domande e nuovi progetti.','Para consultas y nuevos proyectos.','Para dúvidas e novos projetos.','咨询和新项目请联系。','ご質問や新規プロジェクトについて。','문의 및 신규 프로젝트 관련.','प्रश्नों और नई परियोजनाओं के लिए।','Sorular ve yeni projeler için.','По вопросам и новым проектам.','Untuk pertanyaan dan proyek baru.','প্রশ্ন ও নতুন প্রকল্পের জন্য।']],
    ['إرسال التصميم',['Send a design','Envoyer un design','Design senden','Invia un design','Enviar diseño','Enviar design','发送设计','デザインを送る','디자인 보내기','डिज़ाइन भेजें','Tasarım gönder','Отправить дизайн','Kirim desain','ডিজাইন পাঠান']],
    ['تسليم الموقع',['Website delivery','Livraison du site','Website-Übergabe','Consegna del sito','Entrega del sitio','Entrega do site','网站交付','サイト納品','웹사이트 전달','वेबसाइट सुपुर्दगी','Site teslimi','Передача сайта','Serah terima situs','ওয়েবসাইট হস্তান্তর']],
    ['اختار نوع التواصل المناسب.',['Choose the right contact option.','Choisissez le bon moyen de contact.','Wähle die passende Kontaktmöglichkeit.','Scegli il contatto più adatto.','Elige la opción de contacto adecuada.','Escolha a opção de contato adequada.','选择合适的联系方式。','お問い合わせ内容を選択してください。','알맞은 문의 항목을 선택하세요.','संपर्क का सही विकल्प चुनें।','Uygun iletişim seçeneğini seçin.','Выберите подходящий способ связи.','Pilih opsi kontak yang sesuai.','উপযুক্ত যোগাযোগের ধরন বেছে নিন।']],
    ['لا توجد أسعار ثابتة هنا.',['There are no fixed prices.','Il n’y a pas de prix fixe.','Es gibt keine festen Preise.','Non ci sono prezzi fissi.','No hay precios fijos.','Não há preços fixos.','这里没有固定价格。','固定料金はありません。','고정 가격은 없습니다.','यहाँ निश्चित कीमतें नहीं हैं।','Sabit fiyat yoktur.','Фиксированных цен нет.','Tidak ada harga tetap.','এখানে নির্দিষ্ট মূল্য নেই।']],
    ['السعر النهائي يتحدد حسب نوع المشروع والتفاصيل المطلوبة.',['The final price depends on the project type and requirements.','Le prix final dépend du type de projet et des besoins.','Der Endpreis hängt von Projektart und Anforderungen ab.','Il prezzo finale dipende dal tipo di progetto e dai requisiti.','El precio final depende del tipo de proyecto y los requisitos.','O preço final depende do tipo de projeto e dos requisitos.','最终价格取决于项目类型和需求。','最終価格はプロジェクトの種類と要件によって決まります。','최종 가격은 프로젝트 유형과 요구사항에 따라 달라집니다.','अंतिम कीमत परियोजना के प्रकार और आवश्यकताओं पर निर्भर करती है।','Son fiyat proje türüne ve gereksinimlere bağlıdır.','Итоговая цена зависит от типа проекта и требований.','Harga akhir bergantung pada jenis proyek dan kebutuhannya.','চূড়ান্ত মূল্য প্রকল্পের ধরন ও প্রয়োজনের ওপর নির্ভর করে।']],
    ['آراء العملاء',['Customer reviews','Avis clients','Kundenbewertungen','Recensioni dei clienti','Opiniones de clientes','Avaliações de clientes','客户评价','お客様の声','고객 후기','ग्राहक समीक्षाएँ','Müşteri yorumları','Отзывы клиентов','Ulasan pelanggan','গ্রাহক মতামত']],
    ['الأسعار ثابتة؟',['Are prices fixed?','Les prix sont-ils fixes ?','Sind die Preise fest?','I prezzi sono fissi?','¿Los precios son fijos?','Os preços são fixos?','价格固定吗？','料金は固定ですか？','가격이 정해져 있나요?','क्या कीमतें तय हैं?','Fiyatlar sabit mi?','Цены фиксированные?','Apakah harga tetap?','দাম কি নির্দিষ্ট?']],
    ['إزاي أطلب موقع؟',['How do I request a website?','Comment demander un site web ?','Wie kann ich eine Website anfragen?','Come richiedo un sito web?','¿Cómo solicito una web?','Como solicito um site?','如何申请制作网站？','ウェブサイトを依頼するには？','웹사이트를 어떻게 요청하나요?','वेबसाइट कैसे बनवाएँ?','Web sitesi nasıl talep edilir?','Как заказать сайт?','Bagaimana meminta pembuatan situs?','ওয়েবসাইটের অনুরোধ কীভাবে করব?']],
    ['المدونة',['Blog','Blog','Blog','Blog','Blog','Blog','博客','ブログ','블로그','ब्लॉग','Blog','Блог','Blog','ব্লগ']],
    ['الإعدادات',['Settings','Paramètres','Einstellungen','Impostazioni','Configuración','Configurações','设置','設定','설정','सेटिंग्स','Ayarlar','Настройки','Pengaturan','সেটিংস']],
    ['المظهر',['Appearance','Apparence','Darstellung','Aspetto','Apariencia','Aparência','外观','外観','화면 설정','दिखावट','Görünüm','Внешний вид','Tampilan','চেহারা']],
    ['اللغة',['Language','Langue','Sprache','Lingua','Idioma','Idioma','语言','言語','언어','भाषा','Dil','Язык','Bahasa','ভাষা']],
    ['الإشعارات',['Notifications','Notifications','Benachrichtigungen','Notifiche','Notificaciones','Notificações','通知','通知','알림','सूचनाएँ','Bildirimler','Уведомления','Notifikasi','বিজ্ঞপ্তি']],
    ['اختبار',['Test','Tester','Test','Prova','Probar','Testar','测试','テスト','테스트','परीक्षण','Test et','Проверить','Uji','পরীক্ষা']],
    ['WEB 3ANDAK • STUDIO',['WEB STUDIO','STUDIO WEB','WEBSTUDIO','WEB STUDIO','ESTUDIO WEB','ESTÚDIO WEB','网页工作室','ウェブスタジオ','웹 스튜디오','वेब स्टूडियो','WEB STÜDYOSU','ВЕБ-СТУДИЯ','STUDIO WEB','ওয়েব স্টুডিও']],
    ['خلي فكرتك',['Turn your idea','Transformez votre idée','Mach deine Idee','Trasforma la tua idea','Convierte tu idea','Transforme sua ideia','把你的想法','アイデアを','아이디어를','अपने विचार को','Fikrinizi','Превратите идею','Wujudkan ide Anda','আপনার ধারণাকে']],
    ['موقع حقيقي',['into a real website','en un vrai site web','in eine echte Website','in un vero sito web','en una web real','em um site de verdade','变成真正的网站','本物のウェブサイトに','실제 웹사이트로','असली वेबसाइट में','gerçek bir web sitesine','в настоящий сайт','menjadi situs web nyata','বাস্তব ওয়েবসাইটে']],
    ['＋ ابدأ مشروعك',['＋ Start your project','＋ Lancez votre projet','＋ Projekt starten','＋ Avvia il progetto','＋ Empieza tu proyecto','＋ Comece seu projeto','＋ 开始你的项目','＋ プロジェクトを始める','＋ 프로젝트 시작','＋ प्रोजेक्ट शुरू करें','＋ Projenizi başlatın','＋ Начать проект','＋ Mulai proyek','＋ প্রকল্প শুরু করুন']],
    ['✦ اسأل Web 3andak AI',['✦ Ask Give Me Web AI','✦ Demandez à l’IA','✦ Frag die KI','✦ Chiedi all’IA','✦ Pregunta a la IA','✦ Pergunte à IA','✦ 咨询智能助手','✦ AIに質問','✦ AI에게 질문','✦ AI से पूछें','✦ Yapay zekâya sor','✦ Спросить ИИ','✦ Tanya AI','✦ এআই-কে জিজ্ঞাসা করুন']],
    ['خلي فكرتك موقع حقيقي.',['Turn your idea into a real website.','Transformez votre idée en vrai site web.','Mach deine Idee zu einer echten Website.','Trasforma la tua idea in un vero sito web.','Convierte tu idea en una web real.','Transforme sua ideia em um site de verdade.','把你的想法变成真正的网站。','アイデアを本物のウェブサイトに。','아이디어를 실제 웹사이트로 만들어 보세요.','अपने विचार को असली वेबसाइट बनाएँ।','Fikrinizi gerçek bir web sitesine dönüştürün.','Превратите идею в настоящий сайт.','Wujudkan ide Anda menjadi situs web nyata.','আপনার ধারণাকে বাস্তব ওয়েবসাইটে রূপ দিন।']],
    ['صمّم مشروعك، ابعت التفاصيل، وتابع كل حاجة من مكان واحد.',['Plan your project, share the details, and track everything in one place.','Préparez votre projet, envoyez les détails et suivez tout au même endroit.','Plane dein Projekt, teile die Details und behalte alles an einem Ort im Blick.','Progetta il progetto, invia i dettagli e segui tutto da un unico posto.','Diseña tu proyecto, envía los detalles y sigue todo desde un solo lugar.','Planeje seu projeto, envie os detalhes e acompanhe tudo em um só lugar.','规划项目、发送详情，并在一个地方跟踪所有进展。','プロジェクトを計画し、詳細を送り、すべてを一か所で確認。','프로젝트를 계획하고 세부 정보를 보내 한곳에서 관리하세요.','परियोजना की योजना बनाएँ, विवरण भेजें और सब कुछ एक जगह देखें।','Projenizi planlayın, ayrıntıları gönderin ve her şeyi tek yerden takip edin.','Планируйте проект, отправляйте детали и следите за всем в одном месте.','Rencanakan proyek, kirim detail, dan pantau semuanya di satu tempat.','প্রকল্প পরিকল্পনা করুন, বিবরণ পাঠান এবং সবকিছু এক জায়গায় দেখুন।']],
    ['ابدأ مشروعك',['Start your project','Lancez votre projet','Projekt starten','Avvia il progetto','Empieza tu proyecto','Comece seu projeto','开始你的项目','プロジェクトを始める','프로젝트 시작','अपना प्रोजेक्ट शुरू करें','Projenizi başlatın','Начать проект','Mulai proyek','প্রকল্প শুরু করুন']],
    ['اسأل Web 3andak AI',['Ask Give Me Web AI','Demandez à l’IA','Frag die KI','Chiedi all’IA','Pregunta a la IA','Pergunte à IA','咨询智能助手','AIに質問','AI에게 질문','AI से पूछें','Yapay zekâya sor','Спросить ИИ','Tanya AI','এআই-কে জিজ্ঞাসা করুন']],
    ['اختصاراتك',['Quick links','Accès rapide','Schnellzugriff','Accesso rapido','Accesos rápidos','Acesso rápido','快捷入口','クイックアクセス','빠른 메뉴','त्वरित पहुँच','Hızlı erişim','Быстрый доступ','Akses cepat','দ্রুত প্রবেশ']],
    ['تابع المشاريع',['Track your projects','Suivez vos projets','Projekte verfolgen','Segui i tuoi progetti','Sigue tus proyectos','Acompanhe seus projetos','跟踪项目','プロジェクトを確認','프로젝트 확인','परियोजनाएँ देखें','Projelerinizi takip edin','Отслеживайте проекты','Pantau proyek','প্রকল্প দেখুন']],
    ['ابدأ طلب جديد',['Start a new request','Créer une demande','Neue Anfrage starten','Avvia una nuova richiesta','Inicia una nueva solicitud','Inicie um novo pedido','创建新请求','新しい依頼を開始','새 요청 시작','नया अनुरोध शुरू करें','Yeni talep başlat','Создать заявку','Mulai permintaan baru','নতুন অনুরোধ শুরু করুন']],
    ['شوف النماذج',['View examples','Voir les exemples','Beispiele ansehen','Guarda gli esempi','Ver ejemplos','Ver exemplos','查看案例','事例を見る','예시 보기','उदाहरण देखें','Örnekleri gör','Посмотреть примеры','Lihat contoh','উদাহরণ দেখুন']],
    ['واتساب مباشرة',['WhatsApp direct','WhatsApp direct','Direkt zu WhatsApp','WhatsApp diretto','WhatsApp directo','WhatsApp direto','直接 WhatsApp','WhatsAppで連絡','WhatsApp 바로가기','सीधे WhatsApp','Doğrudan WhatsApp','Написать в WhatsApp','WhatsApp langsung','সরাসরি WhatsApp']],
    ['الأعمال',['Portfolio','Réalisations','Referenzen','Portfolio','Proyectos','Portfólio','作品','制作実績','작업물','पोर्टफोलियो','Portfolyo','Работы','Portofolio','কাজ']],
    ['أهلًا بيك 👋',['Welcome 👋','Bienvenue 👋','Willkommen 👋','Benvenuto 👋','¡Bienvenido! 👋','Boas-vindas 👋','欢迎 👋','ようこそ 👋','환영합니다 👋','स्वागत है 👋','Hoş geldiniz 👋','Добро пожаловать 👋','Selamat datang 👋','স্বাগতম 👋']],
    ['اختار إيه اللي محتاجه وأنا أوجهك.',['Choose what you need and I’ll guide you.','Choisissez ce dont vous avez besoin et je vous guiderai.','Wähle, was du brauchst, und ich helfe dir weiter.','Scegli ciò che ti serve e ti guiderò.','Elige lo que necesitas y te guiaré.','Escolha o que você precisa e eu vou orientar você.','选择你需要的帮助，我会为你指引。','必要な内容を選んでください。ご案内します。','필요한 항목을 선택하면 안내해 드릴게요.','आपको क्या चाहिए चुनें, मैं मार्गदर्शन करूँगा।','İhtiyacınızı seçin, size yol göstereyim.','Выберите, что вам нужно, и я подскажу.','Pilih yang Anda perlukan, saya akan membantu.','আপনার প্রয়োজনটি বেছে নিন, আমি পথ দেখাব।']],
    ['عايز أعمل تطبيق',['I want to build an app','Je veux créer une application','Ich möchte eine App erstellen','Voglio creare un’app','Quiero crear una aplicación','Quero criar um aplicativo','我想开发应用','アプリを作りたい','앱을 만들고 싶어요','मैं ऐप बनाना चाहता हूँ','Uygulama yapmak istiyorum','Хочу создать приложение','Saya ingin membuat aplikasi','আমি অ্যাপ তৈরি করতে চাই']],
    ['استفسار عن موقع',['Website inquiry','Question sur un site web','Frage zu einer Website','Informazioni su un sito','Consulta sobre una web','Dúvida sobre um site','网站咨询','ウェブサイトについて','웹사이트 문의','वेबसाइट के बारे में पूछताछ','Web sitesi hakkında soru','Вопрос о сайте','Pertanyaan tentang situs','ওয়েবসাইট সম্পর্কে জিজ্ঞাসা']],
    ['محتاج تصميم',['I need a design','J’ai besoin d’un design','Ich brauche ein Design','Mi serve un design','Necesito un diseño','Preciso de um design','我需要设计','デザインが必要','디자인이 필요해요','मुझे डिज़ाइन चाहिए','Tasarım istiyorum','Нужен дизайн','Saya butuh desain','আমার ডিজাইন দরকার']],
    ['مشكلة في مشروع',['Project issue','Problème de projet','Problem mit einem Projekt','Problema con un progetto','Problema con un proyecto','Problema em um projeto','项目问题','プロジェクトの問題','프로젝트 문제','परियोजना में समस्या','Projede sorun','Проблема с проектом','Masalah proyek','প্রকল্পে সমস্যা']],
    ['عايز أعرف السعر',['I want to know the price','Je veux connaître le prix','Ich möchte den Preis wissen','Voglio conoscere il prezzo','Quiero saber el precio','Quero saber o preço','我想了解价格','料金を知りたい','가격을 알고 싶어요','मैं कीमत जानना चाहता हूँ','Fiyatı öğrenmek istiyorum','Хочу узнать цену','Saya ingin tahu harga','আমি দাম জানতে চাই']],
    ['عايز أتواصل',['I want to contact you','Je veux vous contacter','Ich möchte Kontakt aufnehmen','Voglio contattarvi','Quiero contactarles','Quero entrar em contato','我想联系','問い合わせたい','연락하고 싶어요','मैं संपर्क करना चाहता हूँ','İletişime geçmek istiyorum','Хочу связаться','Saya ingin menghubungi','আমি যোগাযোগ করতে চাই']],
    ['اختار القسم المناسب، وسأفتح لك محادثة واتساب مع الرقم المسؤول.',['Choose a department and I’ll open WhatsApp with the right contact.','Choisissez un service et j’ouvrirai WhatsApp avec le bon contact.','Wähle einen Bereich, ich öffne WhatsApp mit dem passenden Kontakt.','Scegli un reparto e aprirò WhatsApp con il contatto giusto.','Elige un área y abriré WhatsApp con el contacto adecuado.','Escolha uma área e abrirei o WhatsApp com o contato certo.','选择部门，我会打开对应联系人的 WhatsApp。','担当を選ぶと、該当する連絡先のWhatsAppを開きます。','담당 부서를 선택하면 해당 연락처의 WhatsApp이 열립니다.','विभाग चुनें, मैं सही संपर्क के WhatsApp को खोलूँगा।','Bir bölüm seçin; doğru kişiyle WhatsApp açayım.','Выберите отдел, и я открою WhatsApp нужного контакта.','Pilih bagian, saya akan membuka WhatsApp kontak yang tepat.','বিভাগ বেছে নিন, আমি সঠিক যোগাযোগের WhatsApp খুলব।']],
    ['🌐 استفسار عن موقع',['🌐 Website inquiry','🌐 Question sur un site','🌐 Website-Frage','🌐 Informazioni sul sito','🌐 Consulta sobre una web','🌐 Dúvida sobre site','🌐 网站咨询','🌐 ウェブサイトの相談','🌐 웹사이트 문의','🌐 वेबसाइट के बारे में','🌐 Web sitesi hakkında','🌐 Вопрос о сайте','🌐 Pertanyaan situs','🌐 ওয়েবসাইট সম্পর্কে']],
    ['📱 عايز أعمل تطبيق',['📱 I want to build an app','📱 Je veux créer une application','📱 Ich möchte eine App','📱 Voglio creare un’app','📱 Quiero crear una aplicación','📱 Quero criar um aplicativo','📱 我想开发应用','📱 アプリを作りたい','📱 앱을 만들고 싶어요','📱 ऐप बनाना है','📱 Uygulama yapmak istiyorum','📱 Хочу создать приложение','📱 Ingin membuat aplikasi','📱 অ্যাপ তৈরি করতে চাই']],
    ['🎨 محتاج تصميم',['🎨 I need a design','🎨 Besoin d’un design','🎨 Ich brauche ein Design','🎨 Mi serve un design','🎨 Necesito un diseño','🎨 Preciso de um design','🎨 我需要设计','🎨 デザインが必要','🎨 디자인이 필요해요','🎨 डिज़ाइन चाहिए','🎨 Tasarım istiyorum','🎨 Нужен дизайн','🎨 Butuh desain','🎨 ডিজাইন দরকার']],
    ['🛠 مشكلة في مشروع',['🛠 Project issue','🛠 Problème de projet','🛠 Projektproblem','🛠 Problema progetto','🛠 Problema del proyecto','🛠 Problema no projeto','🛠 项目问题','🛠 プロジェクトの問題','🛠 프로젝트 문제','🛠 परियोजना समस्या','🛠 Proje sorunu','🛠 Проблема проекта','🛠 Masalah proyek','🛠 প্রকল্পের সমস্যা']],
    ['💰 عايز أعرف السعر',['💰 I want to know the price','💰 Je veux connaître le prix','💰 Ich möchte den Preis wissen','💰 Voglio conoscere il prezzo','💰 Quiero saber el precio','💰 Quero saber o preço','💰 我想了解价格','💰 料金を知りたい','💰 가격을 알고 싶어요','💰 कीमत जाननी है','💰 Fiyatı öğrenmek istiyorum','💰 Хочу узнать цену','💰 Ingin tahu harga','💰 দাম জানতে চাই']],
    ['💬 عايز أتواصل',['💬 I want to contact you','💬 Je veux vous contacter','💬 Ich möchte Kontakt aufnehmen','💬 Voglio contattarvi','💬 Quiero contactarles','💬 Quero entrar em contato','💬 我想联系','💬 問い合わせたい','💬 연락하고 싶어요','💬 संपर्क करना है','💬 İletişime geçmek istiyorum','💬 Хочу связаться','💬 Ingin menghubungi','💬 যোগাযোগ করতে চাই']],
    ['💬 استفسارات عامة',['💬 General inquiries','💬 Demandes générales','💬 Allgemeine Anfragen','💬 Richieste generali','💬 Consultas generales','💬 Dúvidas gerais','💬 一般咨询','💬 一般のお問い合わせ','💬 일반 문의','💬 सामान्य पूछताछ','💬 Genel iletişim','💬 Общие вопросы','💬 Pertanyaan umum','💬 সাধারণ যোগাযোগ']],
    ['🎨 إرسال تصميم',['🎨 Send a design','🎨 Envoyer un design','🎨 Design senden','🎨 Invia un design','🎨 Enviar diseño','🎨 Enviar design','🎨 发送设计','🎨 デザインを送る','🎨 디자인 보내기','🎨 डिज़ाइन भेजें','🎨 Tasarım gönder','🎨 Отправить дизайн','🎨 Kirim desain','🎨 ডিজাইন পাঠান']],
    ['🌐 تسليم الموقع',['🌐 Website delivery','🌐 Livraison du site','🌐 Website-Übergabe','🌐 Consegna del sito','🌐 Entrega del sitio','🌐 Entrega do site','🌐 网站交付','🌐 サイト納品','🌐 웹사이트 전달','🌐 वेबसाइट सुपुर्दगी','🌐 Site teslimi','🌐 Передача сайта','🌐 Serah terima situs','🌐 ওয়েবসাইট হস্তান্তর']],
    ['اللغة الحالية: العربية',['Current language: Arabic','Langue actuelle : arabe','Aktuelle Sprache: Arabisch','Lingua attuale: arabo','Idioma actual: árabe','Idioma atual: árabe','当前语言：阿拉伯语','現在の言語：アラビア語','현재 언어: 아랍어','वर्तमान भाषा: अरबी','Geçerli dil: Arapça','Текущий язык: арабский','Bahasa saat ini: Arab','বর্তমান ভাষা: আরবি']],
    ['المستخدم',['User','Utilisateur','Benutzer','Utente','Usuario','Usuário','用户','ユーザー','사용자','उपयोगकर्ता','Kullanıcı','Пользователь','Pengguna','ব্যবহারকারী']],
    ['غير مسجل',['Not registered','Non inscrit','Nicht registriert','Non registrato','No registrado','Não cadastrado','未注册','未登録','가입되지 않음','पंजीकृत नहीं','Kayıtlı değil','Не зарегистрирован','Belum terdaftar','নিবন্ধিত নয়']],
    ['تم تسجيل الخروج.',['You have signed out.','Vous êtes déconnecté.','Du wurdest abgemeldet.','Hai effettuato la disconnessione.','Has cerrado sesión.','Você saiu da conta.','已退出登录。','ログアウトしました。','로그아웃되었습니다.','आप लॉग आउट हो गए हैं।','Çıkış yaptınız.','Вы вышли из системы.','Anda telah keluar.','আপনি লগ আউট করেছেন।']],
    ['لا توجد إشعارات جديدة.',['No new notifications.','Aucune nouvelle notification.','Keine neuen Benachrichtigungen.','Nessuna nuova notifica.','No hay notificaciones nuevas.','Não há novas notificações.','没有新通知。','新しい通知はありません。','새 알림이 없습니다.','कोई नई सूचना नहीं है।','Yeni bildirim yok.','Новых уведомлений нет.','Tidak ada notifikasi baru.','কোনো নতুন বিজ্ঞপ্তি নেই।']],
    ['العربية',['Arabic','Arabe','Arabisch','Arabo','Árabe','Árabe','阿拉伯语','アラビア語','아랍어','अरबी','Arapça','Арабский','Arab','আরবি']],
    ['الحالة',['Status','Statut','Status','Stato','Estado','Status','状态','状態','상태','स्थिति','Durum','Статус','Status','অবস্থা']],
    ['جاهز',['Ready','Prêt','Bereit','Pronto','Listo','Pronto','就绪','準備完了','준비 완료','तैयार','Hazır','Готово','Siap','প্রস্তুত']],
    ['المساعدة',['Help','Aide','Hilfe','Assistenza','Ayuda','Ajuda','帮助','ヘルプ','도움말','सहायता','Yardım','Помощь','Bantuan','সহায়তা']],
    ['طلبات محفوظة',['Saved requests','Demandes enregistrées','Gespeicherte Anfragen','Richieste salvate','Solicitudes guardadas','Pedidos salvos','已保存请求','保存済みの依頼','저장된 요청','सहेजे गए अनुरोध','Kaydedilen talepler','Сохранённые заявки','Permintaan tersimpan','সংরক্ষিত অনুরোধ']],
    ['منتجات',['Products','Produits','Produkte','Prodotti','Productos','Produtos','产品','商品','제품','उत्पाद','Ürünler','Товары','Produk','পণ্য']],
    ['خدمات',['Services','Services','Dienstleistungen','Servizi','Servicios','Serviços','服务','サービス','서비스','सेवाएँ','Hizmetler','Услуги','Layanan','সেবা']],
    ['أيوه، عندي',['Yes, I do','Oui','Ja','Sì','Sí','Sim','有','はい','네','हाँ','Evet','Да','Ya','হ্যাঁ']],
    ['لأ',['No','Non','Nein','No','No','Não','没有','いいえ','아니요','नहीं','Hayır','Нет','Tidak','না']],
    ['مش عارف',['I’m not sure','Je ne sais pas','Ich weiß nicht','Non lo so','No lo sé','Não sei','不确定','わかりません','잘 모르겠어요','मुझे नहीं पता','Emin değilim','Не знаю','Belum tahu','জানি না']]
  ];

  const dictionary = Object.fromEntries(codes.map(code => [code, {}]));
  for (const [source, translations] of rows) {
    codes.forEach((code, index) => {
      if (translations[index]) dictionary[code][source] = translations[index];
    });
  }
  dictionary.ar = {};
  Object.keys(locales).forEach(code => { dictionary[code] ||= {}; });

  let language = localStorage.getItem('web3andak_language') || 'ar';
  if (!locales[language]) language = 'ar';
  const originalText = new WeakMap();
  const originalAttrs = new WeakMap();
  let applying = false;

  const normalize = value => value.replace(/\s+/g, ' ').trim();
  const translate = source => {
    const row = dictionary[language]?.[source];
    return row || source.replaceAll('Web 3andak', locales[language].brand);
  };

  function applyTranslations(root = document) {
    if (applying || !root) return;
    applying = true;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      if (!originalText.has(node)) originalText.set(node, node.nodeValue);
      const original = originalText.get(node);
      const key = normalize(original);
      if (!key) continue;
      const translated = translate(key);
      if (translated !== key) {
        const leading = original.match(/^\s*/)?.[0] || '';
        const trailing = original.match(/\s*$/)?.[0] || '';
        node.nodeValue = leading + translated + trailing;
      } else if (node.nodeValue !== original) {
        node.nodeValue = original;
      }
    }

    const elements = root.querySelectorAll ? root.querySelectorAll('[placeholder], [title], [aria-label]') : [];
    elements.forEach(element => {
      let saved = originalAttrs.get(element);
      if (!saved) { saved = {}; originalAttrs.set(element, saved); }
      ['placeholder', 'title', 'aria-label'].forEach(name => {
        if (!element.hasAttribute(name)) return;
        if (!(name in saved)) saved[name] = element.getAttribute(name);
        element.setAttribute(name, translate(normalize(saved[name])));
      });
    });

    document.documentElement.lang = language;
    document.documentElement.dir = locales[language].dir;
    document.title = `${locales[language].brand} — ${locales[language].label}`;
    document.querySelectorAll('.brand strong, .drawer-brand b').forEach(node => {
      node.textContent = locales[language].brand;
    });
    applying = false;
  }

  function setLanguage(code) {
    if (!locales[code]) return;
    language = code;
    localStorage.setItem('web3andak_language', code);
    applyTranslations();
    document.querySelector('#langBtn')?.replaceChildren(document.createTextNode(locales[code].label));
    document.querySelectorAll('[data-open-language]').forEach(button => {
      button.textContent = `🌐 ${locales[code].label}`;
    });
    document.querySelector('#languagePicker')?.remove();
    if (typeof window.page === 'function' && document.querySelector('#contentView:not(.hidden)')) {
      const current = document.querySelector('.nav-item.active')?.dataset.page;
      if (current && current !== 'home') window.page(current);
      else if (current === 'home') window.page('home');
    }
  }

  function openPicker() {
    document.querySelector('#languagePicker')?.remove();
    const overlay = document.createElement('div');
    overlay.id = 'languagePicker';
    overlay.className = 'web3-language-overlay';
    overlay.innerHTML = `<section class="web3-language-dialog" role="dialog" aria-modal="true" aria-label="Choose language"><header><b>${language === 'ar' ? 'اختر اللغة' : 'Choose a language'}</b><button type="button" aria-label="Close">×</button></header><div class="web3-language-grid"></div></section>`;
    const grid = overlay.querySelector('.web3-language-grid');
    Object.entries(locales).forEach(([code, locale]) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.textContent = locale.label;
      button.setAttribute('aria-pressed', String(code === language));
      button.addEventListener('click', () => setLanguage(code));
      grid.appendChild(button);
    });
    overlay.addEventListener('click', event => {
      if (event.target === overlay || event.target.closest('header button')) overlay.remove();
    });
    document.body.appendChild(overlay);
  }

  const style = document.createElement('style');
  style.textContent = `.web3-language-overlay{position:fixed;inset:0;z-index:9999;display:grid;place-items:center;padding:18px;background:#17172399;backdrop-filter:blur(3px)}.web3-language-dialog{width:min(540px,100%);max-height:85vh;overflow:auto;padding:18px;border:1px solid var(--border,#ddd);border-radius:18px;background:var(--surface,#fff);color:var(--text,#222);box-shadow:0 20px 70px #0003}.web3-language-dialog header{display:flex;align-items:center;justify-content:space-between;margin-bottom:14px}.web3-language-dialog header button{width:34px;height:34px;border:1px solid var(--border,#ddd);border-radius:9px;background:transparent;color:inherit;font-size:20px}.web3-language-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.web3-language-grid button{min-height:42px;padding:8px;border:1px solid var(--border,#ddd);border-radius:10px;background:var(--surface-soft,#f4f4f4);color:inherit;text-align:start;cursor:pointer}.web3-language-grid button[aria-pressed=true]{border-color:var(--primary,#6658e8);color:var(--primary,#6658e8);font-weight:700}@media(max-width:420px){.web3-language-grid{grid-template-columns:1fr}}`;
  document.head.appendChild(style);

  document.addEventListener('click', event => {
    if (event.target.closest('#langBtn, [data-open-language]')) {
      event.preventDefault();
      event.stopImmediatePropagation();
      openPicker();
    }
  }, true);

  const observer = new MutationObserver(records => {
    for (const record of records) {
      record.addedNodes.forEach(node => {
        if (node.nodeType === Node.ELEMENT_NODE) applyTranslations(node);
        else if (node.nodeType === Node.TEXT_NODE) {
          if (!originalText.has(node)) originalText.set(node, node.nodeValue);
          const original = originalText.get(node);
          const source = normalize(original);
          const leading = original.match(/^\s*/)?.[0] || '';
          const trailing = original.match(/\s*$/)?.[0] || '';
          const translated = translate(source);
          if (translated !== source) node.nodeValue = leading + translated + trailing;
        }
      });
    }
  });

  function start() {
    applyTranslations();
    observer.observe(document.body, { childList: true, subtree: true });
    const button = document.querySelector('#langBtn');
    if (button) button.textContent = locales[language].label;
    document.querySelectorAll('[data-open-language]').forEach(button => {
      button.textContent = `🌐 ${locales[language].label}`;
    });
  }

  window.Web3andakI18n = { locales, setLanguage, openPicker, get language() { return language; } };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, { once: true });
  else start();
})();
