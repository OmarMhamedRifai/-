document.addEventListener('DOMContentLoaded', function() {
    // بيانات طرق الربح
    const earningMethods = [
        {
            title: "التسويق بالعمولة",
            description: "الترويج لمنتجات الآخرين مقابل عمولة",
            link: "https://affiliate-program.amazon.com/",
            linkText: "Amazon Associates"
        },
        {
            title: "التجارة الإلكترونية (Dropshipping)",
            description: "بيع منتجات دون تخزينها",
            link: "https://www.shopify.com/",
            linkText: "Shopify"
        },
        {
            title: "بيع المنتجات الرقمية",
            description: "مثل الكتب الإلكترونية أو الدورات",
            link: "https://gumroad.com/",
            linkText: "Gumroad"
        },
        {
            title: "إنشاء قناة يوتيوب",
            description: "الربح من الإعلانات والرعايات",
            link: "https://www.youtube.com/partner",
            linkText: "YouTube Partner"
        },
        {
            title: "الاستثمار في الأسهم/العملات",
            description: "يحتاج إلى خبرة",
            link: "https://www.etoro.com/",
            linkText: "eToro"
        },
        {
            title: "العمل الحر (Freelancing)",
            description: "تقديم خدمات مثل التصميم أو البرمجة",
            link: "https://www.upwork.com/",
            linkText: "Upwork"
        },
        {
            title: "إنشاء تطبيق أو موقع ويب",
            description: "الربح من الإعلانات أو الاشتراكات",
            link: "https://wordpress.org/",
            linkText: "WordPress"
        },
        {
            title: "بيع الصور والفيديوهات",
            description: "للمواقع مثل Shutterstock",
            link: "https://www.shutterstock.com/",
            linkText: "Shutterstock"
        },
        {
            title: "التدوين والكتابة",
            description: "الربح من الإعلانات (AdSense)",
            link: "https://www.google.com/adsense/",
            linkText: "Google AdSense"
        },
        {
            title: "تقديم استشارات أونلاين",
            description: "في مجالك الخبير فيه",
            link: "https://clarity.fm/",
            linkText: "Clarity.fm"
        }
    ];

    // طرق الربح دون رأس مال
    const noCapitalMethods = [
        {text: "العمل الحر (Freelancing) - تصميم، برمجة، كتابة، ترجمة", icon: "fa-laptop-code"},
        {text: "التسويق بالعمولة (بدون موقع) - استخدام منصات مثل Toluna أو التسويق عبر السوشيال ميديا", icon: "fa-share-alt"},
        {text: "بيع الخدمات المصغرة - مثل تعديل الصور، إنشاء شعارات", icon: "fa-tasks"},
        {text: "إدخال البيانات (Data Entry) - مواقع مثل Clickworker", icon: "fa-keyboard"},
        {text: "الترجمة والتدقيق اللغوي - مواقع مثل Rev", icon: "fa-language"},
        {text: "إنشاء محتوى على TikTok أو Instagram - الربح من الرعايات", icon: "fa-video"},
        {text: "المشاركة في استطلاعات الرأي المدفوعة - مواقع مثل Survey Junkie", icon: "fa-poll"},
        {text: "بيع الملابس المستعملة أو المنتجات القديمة - عبر مواقع مثل OpenSooq", icon: "fa-tshirt"},
        {text: "تقديم دروس أونلاين - إذا كنت تجيد لغة أو مهارة معينة", icon: "fa-chalkboard-teacher"},
        {text: "مراجعة المنتجات (Product Testing) - بعض المواقع تدفع مقابل تجربة منتجاتهم", icon: "fa-box-open"}
    ];

    // مواقع العمل الحر
    const freelanceSites = [
        {name: "Upwork", description: "جميع الخدمات", link: "https://www.upwork.com/"},
        {name: "Fiverr", description: "خدمات مصغرة", link: "https://www.fiverr.com/"},
        {name: "Freelancer", description: "منافسات ومشاريع", link: "https://www.freelancer.com/"},
        {name: "Khamsat", description: "للعرب", link: "https://khamsat.com/"},
        {name: "PeoplePerHour", description: "خدمات احترافية", link: "https://www.peopleperhour.com/"},
        {name: "Toptal", description: "للمحترفين", link: "https://www.toptal.com/"}
    ];

    // الطرق الوهمية
    const scams = [
        {text: "اكسب 1000 دولار يوميًا بدون مجهود! (نصب كلاسيكي)"},
        {text: "البرامج الهرمية (Pyramid Schemes) مثل بعض أنظمة التسويق الشبكي"},
        {text: "مواقع الربح من المشاهدات (التي تطلب منك دفع مال أولاً)"},
        {text: "العروض التي تعد بتحقيق ثروة سريعة دون جهد"},
        {text: "الاستثمارات الوهمية في العملات أو الأسهم غير المعروفة"}
    ];

    // الأسئلة الشائعة
    const faqs = [
        {
            question: "ما هي أسهل طريقة للربح من الإنترنت للمبتدئين؟",
            answer: "أسهل طريقة هي العمل الحر في مجال لديك مهارة فيه مثل التصميم أو الكتابة أو التسويق عبر مواقع مثل Fiverr أو Khamsat."
        },
        {
            question: "كم أحتاج من الوقت لتحقيق دخل جيد من الإنترنت؟",
            answer: "يعتمد على المجال والجهد المبذول، ولكن في المتوسط تحتاج 3-6 أشهر لبناء مصدر دخل ثابت."
        },
        {
            question: "هل يمكن الربح من الإنترنت بدون رأس مال؟",
            answer: "نعم، هناك العديد من الطرق مثل العمل الحر، التسويق بالعمولة، إنشاء المحتوى وغيرها."
        },
        {
            question: "ما هي أفضل طريقة للربح من اليوتيوب؟",
            answer: "أنشئ محتوى مميز ومتسق، ثم استفد من برنامج الشركاء بعد الوصول لـ1000 مشترك و4000 ساعة مشاهدة."
        }
    ];

    // عرض طرق الربح
    const methodsGrid = document.querySelector('.methods-grid');
    earningMethods.forEach(method => {
        methodsGrid.innerHTML += `
            <div class="method-card">
                <h3>${method.title}</h3>
                <p>${method.description}</p>
                <a href="${method.link}" target="_blank" class="site-link">${method.linkText}</a>
            </div>
        `;
    });

    // عرض طرق الربح دون رأس مال
    const methodsList = document.querySelector('.methods-list');
    noCapitalMethods.forEach(method => {
        methodsList.innerHTML += `
            <div class="method-item">
                <i class="fas ${method.icon}"></i>
                <span>${method.text}</span>
            </div>
        `;
    });

    // عرض مواقع العمل الحر
    const freelanceContainer = document.querySelector('.freelance-sites');
    freelanceSites.forEach(site => {
        freelanceContainer.innerHTML += `
            <div class="site-item">
                <a href="${site.link}" target="_blank">${site.name}</a>
                <span> - ${site.description}</span>
            </div>
        `;
    });

    // عرض الطرق الوهمية
    const scamsList = document.querySelector('.scams-list');
    scams.forEach(scam => {
        scamsList.innerHTML += `
            <div class="scam-item">
                <i class="fas fa-times-circle"></i>
                <span>${scam.text}</span>
            </div>
        `;
    });

    // عرض الأسئلة الشائعة
    const faqContainer = document.querySelector('.faq-container');
    faqs.forEach(faq => {
        faqContainer.innerHTML += `
            <div class="faq-item">
                <div class="faq-question">${faq.question} <i class="fas fa-chevron-down"></i></div>
                <div class="faq-answer">${faq.answer}</div>
            </div>
        `;
    });

    // تفعيل الأسئلة الشائعة
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const icon = question.querySelector('i');
            
            answer.classList.toggle('show');
            icon.classList.toggle('fa-chevron-down');
            icon.classList.toggle('fa-chevron-up');
        });
    });

    // زر العودة للأعلى
    const backToTopBtn = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    });

    // يمكنك هنا إضافة كود الإعلانات (مثل Google AdSense)
    // مثال:
    /*
    const adScript = document.createElement('script');
    adScript.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX';
    adScript.async = true;
    adScript.crossOrigin = 'anonymous';
    document.head.appendChild(adScript);
    */
});