document.addEventListener('DOMContentLoaded', function() {
    const translations = {
        en: {
            header_name: 'Stephanus Sujatmoko',
            header_title: 'DX Solution Architect & Full-Stack Software Engineer',
            japanese_resume: 'Japanese Resume (PDF)',
            header_location: 'Jakarta, Indonesia',
            summary_title: 'Professional Summary',
            summary_p1: 'Full-stack DX and software professional with 9+ years of experience driving digital transformation from concept (0→1) to full enterprise implementation. Specialized in transforming paper-based or fragmented workflows into integrated cloud systems using modern frameworks (Next.js, Laravel, React). Founded and scaled digital agency (PT. Arunika Global Creative) while delivering 20+ digital transformation projects across logistics, e-commerce, government, and corporate sectors.',
            summary_p2: '<strong>Core expertise:</strong> Bridging business needs and technology strategy to deliver high-impact digital solutions that enhance operational efficiency, data visibility, and customer value. Proven track record converting manual processes into scalable, automated web platforms with measurable business outcomes.',
            skills_title: 'Technical Skills',
            skills_frontend_title: 'Frontend Development',
            skills_backend_title: 'Backend Development',
            skills_db_title: 'Databases & ORMs',
            skills_devops_title: 'DevOps & Cloud',
            experience_title: 'Professional Experience',
            experience_job1_title: 'Founder & Lead Software Engineer',
            experience_job1_location: 'Jakarta, Indonesia',
            experience_job1_date: 'June 2019 - Present',
            experience_job1_li1: 'Led 25+ end-to-end DX projects (0→1), transforming paper-based workflows into complete digital systems using Next.js and Laravel.',
            experience_job1_li2: 'Architected and developed full-stack solutions including custom CMS platforms, e-commerce systems with payment gateway integration, and enterprise business applications.',
            experience_job1_li3: 'Built and led technical team from 2 to 30+ members (developers, designers, content creators).',
            experience_job2_title: 'IT Project Manager (Contract)',
            experience_job2_location: 'Jakarta, Indonesia',
            experience_job2_date: 'May 2022 - October 2022',
            experience_job2_li1: 'Managed full-stack development project for banking wealth management system.',
            experience_job2_li2: 'Coordinated with cross-functional technical teams to deliver features on schedule.',
            experience_job3_title: 'Head of Information Technology Department (Contract)',
            experience_job3_location: 'Jakarta, Indonesia',
            experience_job3_date: 'January 2020 - May 2022',
            experience_job3_li1: 'Led comprehensive DX program replacing paper-based logistics operations with integrated web systems.',
            experience_job3_li2: 'Developed and maintained 4 critical business systems for Warehouse Management, HR, Finance, and a customer-facing website.',
            projects_title: 'Project Portfolio',
            projects_project1_title: 'E-commerce Platform: kpgfood.co.id',
            projects_project1_desc: 'Complete online shop with end-to-end payment gateway integration.',
            view_project: 'View Project',
            projects_project2_title: 'Government Digital Portal: sdgs.jakarta.go.id',
            projects_project2_desc: 'Jakarta City Hall SDGs website with 70% increase in user satisfaction.',
            projects_project3_title: 'Enterprise Business Systems (Metro Logistik Indonesia)',
            projects_project3_desc: 'WHMS, HRMS, Finance System, and Logistics Tracking Integration.',
            education_title: 'Education',
            education_degree: 'Bachelor of Computer Science - Information Technology',
            education_university: 'Universitas Bina Nusantara (Binus)',
            education_location: 'Jakarta, Indonesia',
            footer_name: 'Stephanus Sujatmoko',
        },
        jp: {
            header_name: 'ステファヌス・スジャトモコ',
            header_title: 'DXソリューションアーキテクト＆フルスタックソフトウェアエンジニア',
            japanese_resume: '履歴書（日本語）',
            header_location: 'ジャカルタ、インドネシア',
            summary_title: '職務経歴の概要',
            summary_p1: 'コンセプト（0→1）から本格的なエンタープライズ実装まで、9年以上の経験を持つフルスタックDXおよびソフトウェアプロフェッショナル。紙ベースまたは断片化されたワークフローを、最新のフレームワーク（Next.js、Laravel、React）を使用して統合クラウドシステムに変換することに特化しています。デジタルエージェンシー（PT. Arunika Global Creative）を設立し、物流、電子商取引、政府、企業セクターで20以上のデジタルトランスフォーメーションプロジェクトを提供しました。',
            summary_p2: '<strong>コア専門知識：</strong>ビジネスニーズと技術戦略を橋渡しして、運用効率、データの可視性、顧客価値を向上させる影響の大きいデジタルソリューションを提供します。手動プロセスを、測定可能なビジネス成果をもたらすスケーラブルで自動化されたWebプラットフォームに変換した実績があります。',
            skills_title: '技術スキル',
            skills_frontend_title: 'フロントエンド開発',
            skills_backend_title: 'バックエンド開発',
            skills_db_title: 'データベースとORM',
            skills_devops_title: 'DevOpsとクラウド',
            experience_title: '職務経歴',
            experience_job1_title: '創設者兼リードソフトウェアエンジニア',
            experience_job1_location: 'ジャカルタ、インドネシア',
            experience_job1_date: '2019年6月 - 現在',
            experience_job1_li1: 'Next.jsとLaravelを使用して、紙ベースのワークフローを完全なデジタルシステムに変換する25以上のエンドツーエンドDXプロジェクト（0→1）を主導しました。',
            experience_job1_li2: 'カスタムCMSプラットフォーム、支払いゲートウェイ統合を備えた電子商取引システム、エンタープライズビジネスアプリケーションなどのフルスタックソリューションを設計および開発しました。',
            experience_job1_li3: '2人から30人以上の技術チーム（開発者、デザイナー、コンテンツクリエーター）を構築し、主導しました。',
            experience_job2_title: 'ITプロジェクトマネージャー（契約）',
            experience_job2_location: 'ジャカルタ、インドネシア',
            experience_job2_date: '2022年5月 - 2022年10月',
            experience_job2_li1: '銀行のウェルスマネジメントシステムのフルスタック開発プロジェクトを管理しました。',
            experience_job2_li2: '機能がスケジュールどおりに提供されるように、部門の枠を超えた技術チームと連携しました。',
            experience_job3_title: '情報技術部門責任者（契約）',
            experience_job3_location: 'ジャカルタ、インドネシア',
            experience_job3_date: '2020年1月 - 2022年5月',
            experience_job3_li1: '紙ベースのロジスティクス業務を統合Webシステムに置き換える包括的なDXプログラムを主導しました。',
            experience_job3_li2: '倉庫管理、人事、財務、および顧客向けWebサイトの4つの重要なビジネスシステムを開発および保守しました。',
            projects_title: 'プロジェクトポートフォリオ',
            projects_project1_title: 'Eコマースプラットフォーム：kpgfood.co.id',
            projects_project1_desc: 'エンドツーエンドの支払いゲートウェイ統合を備えた完全なオンラインショップ。',
            view_project: 'プロジェクトを見る',
            projects_project2_title: '政府デジタルポータル：sdgs.jakarta.go.id',
            projects_project2_desc: 'ユーザー満足度が70％向上したジャカルタ市庁のSDGsウェブサイト。',
            projects_project3_title: 'エンタープライズビジネスシステム（メトロロジスティックインドネシア）',
            projects_project3_desc: 'WHMS、HRMS、財務システム、およびロジスティクス追跡統合。',
            education_title: '学歴',
            education_degree: 'コンピューターサイエンス学士-情報技術',
            education_university: 'ビナヌサンタラ大学（ビヌス）',
            education_location: 'ジャカルタ、インドネシア',
            footer_name: 'ステファヌス・スジャトモコ',
        }
    };

    const langEnBtn = document.getElementById('lang-en');
    const langJpBtn = document.getElementById('lang-jp');

    const setLanguage = (lang) => {
        document.documentElement.lang = lang;
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(el => {
            const key = el.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        if (lang === 'jp') {
            langEnBtn.classList.remove('active');
            langJpBtn.classList.add('active');
        } else {
            langJpBtn.classList.remove('active');
            langEnBtn.classList.add('active');
        }
    };

    langEnBtn.addEventListener('click', () => setLanguage('en'));
    langJpBtn.addEventListener('click', () => setLanguage('jp'));

    // Set initial language
    setLanguage('en');
});