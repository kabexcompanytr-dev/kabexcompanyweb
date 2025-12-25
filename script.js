// AOS ve diğer script'ler
AOS.init();

const hamburger = document.getElementById('hamburger-button');
const navMenu = document.getElementById('nav-menu');
const darkModeToggle = document.getElementById('dark-mode-toggle');
const langToggle = document.getElementById('lang-toggle');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('open');
    document.body.classList.toggle('no-scroll');
});

document.querySelectorAll('#nav-menu ul li a').forEach(item => {
    item.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('open');
        document.body.classList.remove('no-scroll');
    });
});

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const icon = darkModeToggle.querySelector('i');
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode') ? 'enabled' : 'disabled');
});

if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    darkModeToggle.querySelector('i').classList.remove('fa-moon');
    darkModeToggle.querySelector('i').classList.add('fa-sun');
}

// Dil Çeviri Kodları

const translations = {
    tr: {
        'header-tag': '🚀 KABEX – Dijital Dünyanızı İnşa Edin',
        'nav-services': 'Hizmetler',
        'nav-projects': 'Projeler',
        'nav-about': 'Hakkımızda',
        'nav-contact': 'İletişim',
        'hero-heading': 'Web & Mobil Uygulama Çözümleri',
        'hero-text': 'Fikirlerinizi ürüne dönüştürüyoruz. Kurumsal ve ürün odaklı yazılımlar geliştirirken modern mimari, güvenlik ve performansa odaklanıyoruz.',
        'cta-contact': 'Teklif Al →',
        'cta-projects': 'Projelerimizi Gör',
        'hero-card-text': 'Kurumsal Yazılım ve Ürün Geliştirme',
        'services-heading': 'Hizmetler',
        'service1-heading': 'Web Geliştirme',
        'service1-text': 'Kurumsal web siteleri, admin panelleri ve özel yazılımlar. Modern, hızlı ve ölçeklenebilir mimari.',
        'service2-heading': 'Mobil Uygulama',
        'service2-text': 'React Native / Flutter çözümleri ile iOS & Android için yakın-native performans.',
        'service3-heading': 'UI / UX Tasarım',
        'service3-text': 'Kullanıcı odaklı, temiz ve dönüşüm getiren arayüz tasarımları.',
        'service4-heading': 'Danışmanlık',
        'service4-text': 'Mimari danışmanlıktan performans optimizasyonuna kadar uçtan uca teknik mentörlük.',
        'tech-heading': 'Kullandığımız Teknolojiler',
        // 'partners-heading' ve 'partner-text' anahtarları kaldırıldı
        'projects-heading': 'Projelerimiz',
        // Sadece tek projenin (FlörtZone) açıklaması kaldı
        'project1-text': 'Yeni insanlarla tanışmak, sohbet etmek ve gerçek bağlantılar kurmak için tasarlanmış modern bir arkadaşlık platformu.',
        'details': 'Detaylar →',
        'parallax-heading': 'Hayalinizdeki Ürünü Birlikte İnşa Edelim',
        'parallax-text': 'Mobil uygulamalardan web sitelerine, özel yazılımlardan dijital dönüşüm projelerine kadar tüm ihtiyaçlarınız için buradayız.',
        'parallax-cta': 'Teklif Al',
        'about-heading': 'Hakkımızda',
        'vision-heading': 'Vizyonumuz',
        'vision-text': 'İş hedeflerinizi teknolojiyle birleştirerek fikirlerinizi güvenilir ve ölçeklenebilir dijital ürünlere dönüştürüyoruz. Yarının dijital dünyasını bugünden inşa etmeyi hedefliyoruz.',
        'principle-heading': 'Çalışma Prensibimiz',
        'principle-text': 'Her projeye sadece bir kod bloku olarak değil, uzun vadeli bir çözüm olarak yaklaşıyoruz. Şeffaf süreçler, temiz kod ve performans odaklı bir mimariyle çalışıyoruz.',
        'partnership-heading': 'İş Ortaklığımız',
        'partnership-text': 'Dijital yolculuğunuzun her adımında güvenilir bir iş ortağı olarak yanınızdayız. Hızlı MVP\'lerden kesintisiz geliştirmeye kadar tüm süreçlerde destek sağlıyoruz.',
        'contact-heading': 'İletişim',
        'contact-slogan': 'Projenizi konuşmak için bize ulaşın.',
        'form-name': 'Ad Soyad',
        'form-email': 'E-posta',
        'form-budget': 'Proje Bütçesi (Opsiyonel)',
        'form-timeline': 'Zaman Çizelgesi (Opsiyonel)',
        'form-select': 'Lütfen seçin',
        'timeline1': '1-3 Ay',
        'timeline2': '3-6 Ay',
        'timeline3': '6 Aydan Fazla',
        'form-message': 'Mesajınız',
        'form-submit': 'Gönder',
        'contact-info-heading': 'İletişim Bilgileri',
        'contact-address': '<strong>Adres:</strong> Aydın, Türkiye',
        'footer-text': '&copy; 2024 KABEX. Tüm hakları saklıdır.',
    },
    en: {
        'header-tag': '🚀 KABEX – Build Your Digital World',
        'nav-services': 'Services',
        'nav-projects': 'Projects',
        'nav-about': 'About Us',
        'nav-contact': 'Contact',
        'hero-heading': 'Web & Mobile Application Solutions',
        'hero-text': 'We turn your ideas into products. We develop corporate and product-oriented software with a focus on modern architecture, security, and performance.',
        'cta-contact': 'Contact Us →',
        'cta-projects': 'View Our Projects',
        'hero-card-text': 'Corporate Software and Product Development',
        'services-heading': 'Services',
        'service1-heading': 'Web Development',
        'service1-text': 'Corporate websites, admin panels, and custom software. Modern, fast, and scalable architecture.',
        'service2-heading': 'Mobile Apps',
        'service2-text': 'Near-native performance for iOS & Android with React Native / Flutter solutions.',
        'service3-heading': 'UI / UX Design',
        'service3-text': 'User-centric, clean, and conversion-focused interface designs.',
        'service4-heading': 'Consulting',
        'service4-text': 'End-to-end technical mentorship from architecture to performance optimization.',
        'tech-heading': 'Technologies We Use',
        // 'partners-heading' ve 'partner-text' anahtarları kaldırıldı
        'projects-heading': 'Our Projects',
        // Sadece tek projenin (Hattıra Sayacı) açıklaması kaldı
        'project1-text': '"A modern dating platform designed for meeting new people, engaging in conversations, and building genuine connections.',
        'details': 'Details →',
        'parallax-heading': 'Let\'s Build Your Dream Product Together',
        'parallax-text': 'From mobile apps to websites, custom software to digital transformation projects, we are here for all your needs.',
        'parallax-cta': 'Get a Quote',
        'about-heading': 'About Us',
        'vision-heading': 'Our Vision',
        'vision-text': 'We turn your ideas into reliable and scalable digital products by aligning your business goals with technology. We aim to build the digital world of tomorrow, today.',
        'principle-heading': 'Our Working Principle',
        'principle-text': 'We approach every project not just as a block of code, but as a long-term solution. We work with transparent processes, clean code, and a performance-oriented architecture.',
        'partnership-heading': 'Our Partnership',
        'partnership-text': 'We are by your side as a reliable partner on every step of your digital journey. We provide support in all processes, from rapid MVPs to continuous development.',
        'contact-heading': 'Contact',
        'contact-slogan': 'Contact us to discuss your project.',
        'form-name': 'Full Name',
        'form-email': 'Email',
        'form-budget': 'Project Budget (Optional)',
        'form-timeline': 'Timeline (Optional)',
        'form-select': 'Please select',
        'timeline1': '1-3 Months',
        'timeline2': '3-6 Months',
        'timeline3': 'More than 6 Months',
        'form-message': 'Message',
        'form-submit': 'Submit',
        'contact-info-heading': 'Contact Information',
        'contact-address': '<strong>Address:</strong> Aydın, Turkey',
        'footer-text': '&copy; 2024 KABEX. All rights reserved.',
    }
};

const elements = document.querySelectorAll('[data-key]');
let currentLang = 'tr';

function updateContent(lang) {
    elements.forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Sayfa başlığını da güncelle
    if (lang === 'tr') {
        document.title = 'KABEX - Kurumsal Yazılım & Ürün Geliştirme';
    } else {
        document.title = 'KABEX - Corporate Software & Product Development';
    }
}

langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'tr' ? 'en' : 'tr';
    updateContent(currentLang);
    langToggle.textContent = currentLang.toUpperCase();
    document.documentElement.lang = currentLang;
    localStorage.setItem('lang', currentLang);
});

// Sayfa yüklendiğinde dili kontrol et
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('lang') || 'tr';
    currentLang = savedLang;
    updateContent(currentLang);
    langToggle.textContent = currentLang.toUpperCase();
    document.documentElement.lang = currentLang;
});