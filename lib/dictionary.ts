export type Locale = "tr" | "en"

export const dictionary = {
  tr: {
    nav: {
      home: "Ana Sayfa",
      work: "Çalışmalar",
      about: "Hakkımda",
      process: "Süreç",
      startProject: "Proje Başvurusu",
    },
    hero: {
      headline: "Copywriting & Web Tasarım. Net, dinamik ve etkili.",
      subheadline:
        "",
      primaryCta: "Proje Başvurusu",
      secondaryCta: "Çalışmalarımı Gör",
      statusLine: "Şu an sınırlı sayıda proje kabul ediyorum.",
    },
    about: {
      title: "Merhaba, ben Ateş.",
      paragraph1:
        "Karmaşık fikirleri net, modern ve dinamik metinlere dönüştürüyorum. İster yeni bir girişim lansmanı, ister kurumsal bir yeniden yapılanma olsun — her projede aynı titizliği gösteriyorum.",
      paragraph2:
        "Tasarım tarafında ise modern, hızlı ve mobil uyumlu siteler inşa ediyorum. Amacım sadece güzel değil, aynı zamanda dönüşüm odaklı bir deneyim sunmak.",
      whatYouGet: "Ne Alırsınız",
      bullets: [
        "Strateji odaklı yapı",
        "Dönüşüm odaklı metin",
        "Modern, responsive tasarım",
        "Temiz teslimat ve kapanış",
      ],
    },
    work: {
      title: "Öne Çıkan Çalışmalar",
      viewCase: "Vaka İncelemesi",
      goal: "Hedef",
      deliverables: "Teslimatlar",
      outcome: "Sonuç",
      filters: {
        all: "Tümü",
        landing: "Landing Page",
        website: "Website",
        copywriting: "Copywriting",
        personalBrand: "Kişisel Marka",
      },
      nextProject: "Sonraki Proje",
    },
    capabilities: {
      title: "Sunduğum Hizmetler",
      notIncluded:
        "SEO hizmeti, reklam yönetimi ve aylık optimizasyon sunmuyorum.",
      items: [
        {
          title: "Satış Sayfaları & Landing Page",
          description:
            "Dönüşüm odaklı, dinamik ve etkili satış sayfaları ve landing page tasarımları.",
        },
        {
          title: "Kurumsal Web Siteleri",
          description:
            "Profesyonel, modern ve mobil uyumlu kurumsal web siteleri.",
        },
        {
          title: "Kişisel Marka Siteleri",
          description:
            "Bireysel profesyoneller için özgün ve etkileyici portfolio siteleri.",
        },
        {
          title: "Web Sitesi Copywriting",
          description:
            "Başlıklar, bölümler, CTA'lar — tüm site metinleri için profesyonel içerik.",
        },
        {
          title: "Bilgi Mimarisi",
          description:
            "Sayfa akışı, kullanıcı yolculuğu ve içerik hiyerarşisi planlaması.",
        },
      ],
    },
    process: {
      title: "Çalışma Sürecim",
      boundary:
        "Teslim sonrası proje kapanır. Sürekli optimizasyon dahil değildir.",
      steps: [
        {
          title: "Brief",
          description:
            "Projenin kapsamını, hedeflerini ve beklentilerini netleştiriyoruz.",
        },
        {
          title: "Yapı & Metin",
          description:
            "Sayfa yapısını oluşturuyor, dinamik ve etkili metinler yazıyorum.",
        },
        {
          title: "Tasarım & Geliştirme",
          description:
            "Modern, responsive tasarımı hayata geçiriyorum.",
        },
        {
          title: "Teslimat & Kapanış",
          description:
            "Final dosyaları teslim ediliyor, proje sonlanıyor.",
        },
      ],
    },
    testimonials: {
      title: "Müşteri Yorumları",
    },
    faq: {
      title: "Sıkça Sorulan Sorular",
      items: [
        {
          question: "SEO yapıyor musun?",
          answer:
            "Hayır, SEO hizmeti sunmuyorum. Ancak temel SEO uyumlu yapıyı (başlık etiketleri, meta açıklamaları vb.) sağlıyorum.",
        },
        {
          question: "Reklam yönetiyor musun?",
          answer:
            "Hayır, Google Ads, Meta Ads veya diğer reklam platformlarının yönetimini yapmıyorum.",
        },
        {
          question: "Aylık optimizasyon var mı?",
          answer:
            "Hayır, projeler tek seferlik teslimat şeklinde çalışır. Teslim sonrası proje kapanır.",
        },
        {
          question: "Başlamak için ne gerekli?",
          answer:
            "Net bir proje hedefi ve iletişime geçme isteği yeterli. Detayları birlikte şekillendiririz.",
        },
        {
          question: "Teslim süresi ne?",
          answer:
            "Proje kapsamına bağlı olarak genellikle 2-4 hafta arasında değişir.",
        },
      ],
    },
    finalCta: {
      text: "Ne yapmak istediğini yaz — doğru yapıyı önereyim ve seni arayayım.",
      button: "Proje Başvurusu",
    },
    form: {
      title: "Proje Başvurusu",
      subtitle:
        "Projenizi değerlendirmem için aşağıdaki formu doldurun. Uygun bulursam belirttiğiniz zaman aralığında sizi ararım.",
      contactInfo: "İletişim Bilgileri",
      projectNeeds: "Proje İhtiyaçları",
      budgetInfo: "Bütçe & Koşullar",
      callPreferences: "Aranma Tercihi",
      fullName: "Ad Soyad",
      email: "E-posta",
      phone: "Telefon",
      projectGoal: "Proje Hedefi",
      projectGoalPlaceholder: "Seçiniz...",
      projectGoalOptions: [
        "Yeni web sitesi",
        "Mevcut site yenileme",
        "Landing page",
        "Kişisel marka sitesi",
        "Kurumsal site",
        "Diğer",
      ],
      whatYouNeed: "Neye ihtiyacınız var?",
      needOptions: [
        "Web sitesi",
        "Landing page",
        "Copywriting",
        "Danışmanlık",
      ],
      budgetRange: "Bütçe Aralığı",
      budgetPlaceholder: "Seçiniz...",
      budgetOptions: [
        "10.000 - 25.000 TL",
        "25.000 - 50.000 TL",
        "50.000 - 100.000 TL",
        "100.000 TL üzeri",
      ],
      confirmationCheckbox:
        "SEO, reklam yönetimi ve aylık optimizasyon hizmeti sunulmadığını anlıyorum.",
      preferredDay: "Aranmak İstediğiniz Gün",
      dayOptions: [
        "Pazartesi",
        "Salı",
        "Çarşamba",
        "Perşembe",
        "Cuma",
      ],
      preferredTime: "Tercih Edilen Saat Aralığı",
      timeOptions: [
        "09:00 - 12:00",
        "12:00 - 15:00",
        "15:00 - 18:00",
      ],
      additionalNotes: "Ek Notlar",
      additionalNotesPlaceholder:
        "Projeniz hakkında eklemek istediğiniz detaylar...",
      submit: "Başvuruyu Gönder",
      successTitle: "Teşekkürler!",
      successMessage:
        "Başvurunuzu inceleyeceğim. Uygunsa belirttiğiniz zaman aralığında sizi ararım. Her başvuru kabul edilmez.",
      errors: {
        required: "Bu alan zorunludur",
        email: "Geçerli bir e-posta adresi giriniz",
        phone: "Geçerli bir telefon numarası giriniz",
        confirmation: "Devam etmek için onay kutusunu işaretlemelisiniz",
      },
    },
    aboutPage: {
      title: "Hakkımda",
      intro:
        "Ben Ateş Altınkaynak. İstanbul merkezli bir copywriter ve web tasarımcısıyım.",
      story:
        "Yıllardır markaların dijital varlıklarını güçlendirmeye yardımcı oluyorum. Karmaşık fikirleri anlaşılır ve akılda kalıcı metinlere dönüştürüyorum. Tasarım tarafında ise kullanıcı deneyimini ön planda tutan, hızlı ve modern web siteleri inşa ediyorum.",
      values: {
        title: "Değerlerim",
        items: [
          {
            title: "Netlik",
            description:
              "Karmaşık değil, anlaşılır. Her kelime bir amaca hizmet etmeli.",
          },
          {
            title: "Kalite",
            description:
              "Detaylara önem veririm. Her proje en iyi halinde teslim edilir.",
          },
          {
            title: "Dürüstlük",
            description:
              "Yapamayacağım şeyi söylemem, söylediğimi yaparım.",
          },
        ],
      },
      principles: {
        title: "Nasıl Düşünüyorum",
        items: [
          "İyi tasarım görünmez olmalı — kullanıcıyı hedefe yönlendirmeli.",
          "İyi metin ikna eder ama asla baskıcı olmaz.",
          "Her proje benzersizdir, şablon çözümler sunmam.",
          "Süreç şeffaf olmalı, sürprizler hoş değil.",
        ],
      },
      boundaries: {
        title: "Sunmadığım Hizmetler",
        items: [
          "SEO optimizasyonu ve danışmanlığı",
          "Google Ads / Meta Ads yönetimi",
          "Aylık bakım ve optimizasyon paketleri",
          "Sosyal medya yönetimi",
        ],
      },
    },
    processPage: {
      title: "Çalışma Sürecim",
      intro:
        "Her projeyi sistematik ve şeffaf bir süreçle yürütüyorum. İşte adım adım nasıl çalıştığımız:",
      whatYouNeed: {
        title: "Sizden Beklentilerim",
        items: [
          "Net bir proje hedefi ve vizyonu",
          "Hedef kitleniz hakkında temel bilgiler",
          "Varsa marka rehberi veya mevcut materyaller",
          "İletişim için müsait zaman dilimleri",
        ],
      },
      revisions: {
        title: "Revizyon Politikası",
        description:
          "Her proje 2 revizyon turunu içerir. Ek revizyonlar için ayrı ücretlendirme yapılır.",
      },
      closure: {
        title: "Proje Kapanışı",
        description:
          "Teslim sonrası proje kapanır. Sürekli optimizasyon, bakım veya aylık hizmetler sunulmaz. İhtiyaç halinde yeni bir proje olarak değerlendirilebilir.",
      },
    },
    footer: {
      copyright: "Tüm hakları saklıdır.",
      builtWith: "Next.js ile geliştirildi",
    },
  },
  en: {
    nav: {
      home: "Home",
      work: "Work",
      about: "About",
      process: "Process",
      startProject: "Start a Project",
    },
    hero: {
      headline: "Copywriting & Web Design. Clear, persuasive and dynamic.",
      subheadline:
        "I design websites and write persuasive copy. One-time delivery — the project closes when complete. I don't offer SEO services, ad management, or monthly optimization.",
      primaryCta: "Start a Project",
      secondaryCta: "See My Work",
      statusLine: "Currently accepting a limited number of projects.",
    },
    about: {
      title: "Hi, I'm Ateş.",
      paragraph1:
        "I transform complex ideas into clear, persuasive, and enjoyable copy. Whether it's a new startup launch or a corporate restructuring — I bring the same level of care to every project.",
      paragraph2:
        "On the design side, I build modern, fast, and mobile-responsive sites. My goal is to deliver not just beauty, but a conversion-focused experience.",
      whatYouGet: "What You Get",
      bullets: [
        "Strategy-led structure",
        "Conversion-focused copy",
        "Modern, responsive design",
        "Clean delivery & closure",
      ],
    },
    work: {
      title: "Featured Work",
      viewCase: "View Case Study",
      goal: "Goal",
      deliverables: "Deliverables",
      outcome: "Outcome",
      filters: {
        all: "All",
        landing: "Landing Page",
        website: "Website",
        copywriting: "Copywriting",
        personalBrand: "Personal Brand",
      },
      nextProject: "Next Project",
    },
    capabilities: {
      title: "What I Offer",
      notIncluded:
        "I don't offer SEO services, ad management, or monthly optimization.",
      items: [
        {
          title: "Sales Pages & Landing Pages",
          description:
            "Conversion-focused, persuasive sales pages and landing page designs.",
        },
        {
          title: "Business Websites",
          description:
            "Professional, modern, and mobile-responsive corporate websites.",
        },
        {
          title: "Personal Brand Sites",
          description:
            "Unique and impactful portfolio sites for individual professionals.",
        },
        {
          title: "Website Copywriting",
          description:
            "Headlines, sections, CTAs — professional content for all site copy.",
        },
        {
          title: "Information Architecture",
          description:
            "Page flow, user journey, and content hierarchy planning.",
        },
      ],
    },
    process: {
      title: "My Process",
      boundary:
        "The project closes after delivery. Ongoing optimization is not included.",
      steps: [
        {
          title: "Brief",
          description:
            "We clarify the project scope, goals, and expectations.",
        },
        {
          title: "Structure & Copy",
          description:
            "I create the page structure and write persuasive copy.",
        },
        {
          title: "Design & Build",
          description:
            "I bring the modern, responsive design to life.",
        },
        {
          title: "Delivery & Closure",
          description:
            "Final files are delivered, the project concludes.",
        },
      ],
    },
    testimonials: {
      title: "Client Testimonials",
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "Do you do SEO?",
          answer:
            "No, I don't offer SEO services. However, I ensure basic SEO-friendly structure (title tags, meta descriptions, etc.).",
        },
        {
          question: "Do you manage ads?",
          answer:
            "No, I don't manage Google Ads, Meta Ads, or other advertising platforms.",
        },
        {
          question: "Is there monthly optimization?",
          answer:
            "No, projects work as one-time deliveries. The project closes after delivery.",
        },
        {
          question: "What do I need to get started?",
          answer:
            "A clear project goal and willingness to communicate. We'll shape the details together.",
        },
        {
          question: "What's the delivery timeline?",
          answer:
            "Typically 2-4 weeks depending on the project scope.",
        },
      ],
    },
    finalCta: {
      text: "Tell me what you want to build — I'll suggest the right structure and give you a call.",
      button: "Start a Project",
    },
    form: {
      title: "Start a Project",
      subtitle:
        "Fill out the form below for me to evaluate your project. If it's a good fit, I'll call you at your preferred time.",
      contactInfo: "Contact Information",
      projectNeeds: "Project Needs",
      budgetInfo: "Budget & Terms",
      callPreferences: "Call Preferences",
      fullName: "Full Name",
      email: "Email",
      phone: "Phone",
      projectGoal: "Project Goal",
      projectGoalPlaceholder: "Select...",
      projectGoalOptions: [
        "New website",
        "Website redesign",
        "Landing page",
        "Personal brand site",
        "Corporate site",
        "Other",
      ],
      whatYouNeed: "What do you need?",
      needOptions: [
        "Website",
        "Landing page",
        "Copywriting",
        "Consultation",
      ],
      budgetRange: "Budget Range",
      budgetPlaceholder: "Select...",
      budgetOptions: [
        "$500 - $1,500",
        "$1,500 - $3,000",
        "$3,000 - $6,000",
        "$6,000+",
      ],
      confirmationCheckbox:
        "I understand that SEO, ad management, and monthly optimization services are not offered.",
      preferredDay: "Preferred Day to Be Called",
      dayOptions: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      preferredTime: "Preferred Time Window",
      timeOptions: [
        "9:00 AM - 12:00 PM",
        "12:00 PM - 3:00 PM",
        "3:00 PM - 6:00 PM",
      ],
      additionalNotes: "Additional Notes",
      additionalNotesPlaceholder:
        "Any additional details about your project...",
      submit: "Submit Application",
      successTitle: "Thank you!",
      successMessage:
        "I'll review your application. If it's a fit, I'll call you at your specified time. Not every application is accepted.",
      errors: {
        required: "This field is required",
        email: "Please enter a valid email address",
        phone: "Please enter a valid phone number",
        confirmation: "You must check the confirmation box to continue",
      },
    },
    aboutPage: {
      title: "About Me",
      intro:
        "I'm Ateş Altınkaynak. An Istanbul-based copywriter and web designer.",
      story:
        "For years, I've been helping brands strengthen their digital presence. I transform complex ideas into clear, persuasive, and memorable copy. On the design side, I build fast, modern websites that prioritize user experience.",
      values: {
        title: "My Values",
        items: [
          {
            title: "Clarity",
            description:
              "Not complex, but understandable. Every word should serve a purpose.",
          },
          {
            title: "Quality",
            description:
              "I care about details. Every project is delivered at its best.",
          },
          {
            title: "Honesty",
            description:
              "I don't say what I can't do, and I do what I say.",
          },
        ],
      },
      principles: {
        title: "How I Think",
        items: [
          "Good design should be invisible — it should guide the user to the goal.",
          "Good copy persuades but is never pushy.",
          "Every project is unique; I don't offer template solutions.",
          "The process should be transparent; surprises aren't pleasant.",
        ],
      },
      boundaries: {
        title: "Services I Don't Offer",
        items: [
          "SEO optimization and consulting",
          "Google Ads / Meta Ads management",
          "Monthly maintenance and optimization packages",
          "Social media management",
        ],
      },
    },
    processPage: {
      title: "My Process",
      intro:
        "I run every project with a systematic and transparent process. Here's how we work step by step:",
      whatYouNeed: {
        title: "What I Need From You",
        items: [
          "A clear project goal and vision",
          "Basic information about your target audience",
          "Brand guidelines or existing materials if available",
          "Available time slots for communication",
        ],
      },
      revisions: {
        title: "Revision Policy",
        description:
          "Each project includes 2 rounds of revisions. Additional revisions are charged separately.",
      },
      closure: {
        title: "Project Closure",
        description:
          "The project closes after delivery. Ongoing optimization, maintenance, or monthly services are not offered. If needed, it can be evaluated as a new project.",
      },
    },
    footer: {
      copyright: "All rights reserved.",
      builtWith: "Built with Next.js",
    },
  },
} as const

export type Dictionary = (typeof dictionary)["tr"]
